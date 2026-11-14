#!/usr/bin/env python3
"""Build lightweight /templates/*-card.mp4 siblings for grid cards.

Canonical mp4s stay in place for the generator and VideoObject contentUrl.
Card files are max 480px wide, about 500kbps, with a keyframe every second.
Re-run after adding a preview mp4. Existing newer card files are left alone.

Also moves moov ahead of mdat on the few canonical files that lack faststart,
and recompresses poster jpgs larger than 100KB (same filename).
"""

from __future__ import annotations

import os
import struct
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "templates")
WORKERS = 4


def atoms(path: str) -> list[str]:
    names: list[str] = []
    size = os.path.getsize(path)
    with open(path, "rb") as handle:
        pos = 0
        while pos + 8 <= size and len(names) < 8:
            handle.seek(pos)
            header = handle.read(8)
            if len(header) < 8:
                break
            atom_size, atom_type = struct.unpack(">I4s", header)
            if atom_size == 1:
                ext = handle.read(8)
                if len(ext) < 8:
                    break
                atom_size = struct.unpack(">Q", ext)[0]
            if atom_size < 8:
                break
            names.append(atom_type.decode("latin1", "replace"))
            pos += atom_size
    return names


def has_audio(path: str) -> bool:
    result = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-select_streams",
            "a",
            "-show_entries",
            "stream=codec_type",
            "-of",
            "csv=p=0",
            path,
        ],
        capture_output=True,
        text=True,
    )
    return "audio" in result.stdout


def encode_card(src: str, dst: str) -> tuple[str, bool, str]:
    tmp = dst + ".part.mp4"
    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        src,
        "-map",
        "0:v:0",
    ]
    if has_audio(src):
        cmd += ["-map", "0:a:0", "-c:a", "aac", "-b:a", "64k", "-ac", "2"]
    else:
        cmd += ["-an"]
    cmd += [
        "-vf",
        "scale='min(480,iw)':-2:flags=lanczos",
        "-c:v",
        "libx264",
        "-profile:v",
        "main",
        "-pix_fmt",
        "yuv420p",
        "-preset",
        "veryfast",
        "-crf",
        "28",
        "-maxrate",
        "500k",
        "-bufsize",
        "1000k",
        "-force_key_frames",
        "expr:gte(t,n_forced*1)",
        "-g",
        "48",
        "-movflags",
        "+faststart",
        tmp,
    ]
    result = subprocess.run(cmd, capture_output=True)
    if result.returncode != 0:
        if os.path.exists(tmp):
            os.remove(tmp)
        err = result.stderr.decode("utf-8", "replace")[-500:]
        return os.path.basename(src), False, err
    os.replace(tmp, dst)
    return os.path.basename(src), True, f"{os.path.getsize(dst) / 1024:.0f}KB"


def faststart(path: str) -> None:
    names = atoms(path)
    if "mdat" not in names or "moov" not in names:
        return
    if names.index("moov") < names.index("mdat"):
        return
    tmp = path + ".faststart.mp4"
    result = subprocess.run(
        ["ffmpeg", "-y", "-i", path, "-c", "copy", "-movflags", "+faststart", tmp],
        capture_output=True,
    )
    if result.returncode != 0:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise SystemExit(result.stderr.decode("utf-8", "replace")[-500:])
    os.replace(tmp, path)
    print(f"faststart {os.path.basename(path)}", flush=True)


def shrink_poster(path: str) -> None:
    before = os.path.getsize(path)
    if before <= 100 * 1024:
        return
    tmp = path + ".part.jpg"
    result = subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            path,
            "-vf",
            "scale='min(720,iw)':-2",
            "-q:v",
            "5",
            tmp,
        ],
        capture_output=True,
    )
    if result.returncode != 0 or not os.path.exists(tmp):
        if os.path.exists(tmp):
            os.remove(tmp)
        raise SystemExit(result.stderr.decode("utf-8", "replace")[-400:])
    after = os.path.getsize(tmp)
    if after < before:
        os.replace(tmp, path)
        print(f"poster {os.path.basename(path)} {before / 1024:.0f}KB -> {after / 1024:.0f}KB", flush=True)
        if after > 100 * 1024:
            shrink_poster_hard(path)
    else:
        os.remove(tmp)
        print(f"poster kept {os.path.basename(path)} {before / 1024:.0f}KB", flush=True)
        if before > 100 * 1024:
            shrink_poster_hard(path)


def shrink_poster_hard(path: str) -> None:
    before = os.path.getsize(path)
    tmp = path + ".part.jpg"
    result = subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            path,
            "-vf",
            "scale='min(640,iw)':-2",
            "-q:v",
            "8",
            tmp,
        ],
        capture_output=True,
    )
    if result.returncode != 0 or not os.path.exists(tmp):
        if os.path.exists(tmp):
            os.remove(tmp)
        return
    after = os.path.getsize(tmp)
    if after < before:
        os.replace(tmp, path)
        print(f"poster {os.path.basename(path)} {before / 1024:.0f}KB -> {after / 1024:.0f}KB", flush=True)
    else:
        os.remove(tmp)


def main() -> None:
    jobs: list[tuple[str, str]] = []
    for name in sorted(os.listdir(ROOT)):
        if not name.endswith(".mp4") or name.endswith("-card.mp4"):
            continue
        src = os.path.join(ROOT, name)
        if not os.path.isfile(src):
            continue
        dst = os.path.join(ROOT, name[:-4] + "-card.mp4")
        if os.path.isfile(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
            continue
        jobs.append((src, dst))

    print(f"encoding {len(jobs)} card previews", flush=True)
    failed = 0
    done = 0
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = [pool.submit(encode_card, src, dst) for src, dst in jobs]
        for future in as_completed(futures):
            name, ok, info = future.result()
            done += 1
            if ok:
                print(f"OK {done}/{len(jobs)} {name} {info}", flush=True)
            else:
                failed += 1
                print(f"FAIL {name}\n{info}", flush=True)
    if failed:
        raise SystemExit(f"{failed} encodes failed")

    for name in sorted(os.listdir(ROOT)):
        if not name.endswith(".mp4") or name.endswith("-card.mp4"):
            continue
        path = os.path.join(ROOT, name)
        if os.path.isfile(path):
            faststart(path)

    for name in sorted(os.listdir(ROOT)):
        if name.endswith("-poster.jpg"):
            shrink_poster(os.path.join(ROOT, name))


if __name__ == "__main__":
    main()
