'use client';

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { flushSync } from 'react-dom';

const ROOT_MARGIN_PX = 200;
const MOBILE_MAX_PX = 767;

type Player = {
  id: string;
  priority: boolean;
  near: boolean;
  visible: boolean;
  forced: boolean;
  forcedAt: number;
  attached: boolean;
  allowed: boolean;
  dist: number;
  el: () => HTMLVideoElement | null;
  setAttached: (next: boolean) => void;
};

const players = new Map<string, Player>();
let listening = false;
let scheduled = false;

type NetInfo = {
  saveData?: boolean;
  addEventListener?: (type: string, cb: () => void) => void;
};

function connection(): NetInfo | undefined {
  if (typeof navigator === 'undefined') return undefined;
  return (navigator as Navigator & { connection?: NetInfo }).connection;
}

/** Reduced motion and Save-Data stay on the poster until a tap. */
export function mediaHold(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return true;
  return connection()?.saveData === true;
}

function playbackLimit(): number {
  if (typeof window === 'undefined') return 1;
  return window.matchMedia(`(max-width: ${MOBILE_MAX_PX}px)`).matches ? 1 : 3;
}

function refreshGeometry() {
  if (typeof window === 'undefined') return;
  const vh = window.innerHeight;
  for (const player of players.values()) {
    const el = player.el();
    if (!el || !el.isConnected) {
      player.near = false;
      player.visible = false;
      player.dist = Number.POSITIVE_INFINITY;
      continue;
    }
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      player.near = false;
      player.visible = false;
      player.dist = Number.POSITIVE_INFINITY;
      continue;
    }
    player.visible = rect.bottom > 0 && rect.top < vh;
    player.near =
      rect.bottom > -ROOT_MARGIN_PX && rect.top < vh + ROOT_MARGIN_PX;
    player.dist = Math.abs(rect.top + rect.height / 2 - vh / 2);
  }
}

function rank(player: Player): number {
  const priorityBoost = player.priority && player.visible ? -1_000_000 : 0;
  const visibleBoost = player.visible ? 0 : 100_000;
  return priorityBoost + visibleBoost + player.dist;
}

function reconcile() {
  refreshGeometry();
  const hold = mediaHold();
  const limit = playbackLimit();
  const list = [...players.values()].filter(
    (player) => player.el()?.isConnected
  );
  const eligible = list.filter(
    (player) => player.near && (player.forced || !hold)
  );
  eligible.sort((a, b) => {
    if (a.forced !== b.forced) return a.forced ? -1 : 1;
    if (a.forced && b.forced) return b.forcedAt - a.forcedAt;
    return rank(a) - rank(b);
  });
  const chosen = new Set(eligible.slice(0, limit).map((player) => player.id));
  for (const player of list) {
    const on = chosen.has(player.id);
    player.allowed = on;
    if (player.attached !== on) {
      player.attached = on;
      player.setAttached(on);
    }
  }
}

function scheduleReconcile() {
  if (scheduled || typeof window === 'undefined') return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    reconcile();
  });
}

function ensureListeners() {
  if (listening || typeof window === 'undefined') return;
  listening = true;
  window.addEventListener('scroll', scheduleReconcile, {
    passive: true,
    capture: true,
  });
  window.addEventListener('resize', scheduleReconcile);
  window
    .matchMedia(`(max-width: ${MOBILE_MAX_PX}px)`)
    .addEventListener('change', scheduleReconcile);
  window
    .matchMedia('(prefers-reduced-motion: reduce)')
    .addEventListener('change', scheduleReconcile);
  connection()?.addEventListener?.('change', scheduleReconcile);
}

function release(el: HTMLVideoElement | null) {
  if (!el) return;
  el.pause();
  if (!el.getAttribute('src') && !el.currentSrc) return;
  el.removeAttribute('src');
  // Empty the media element so an in-flight mp4 does not finish downloading.
  el.load();
}

export type LazyVideoHandle = {
  /** Run inside a click/key handler so unmuted playback keeps the user gesture. */
  playFromGesture: (opts?: { muted?: boolean }) => void;
  element: HTMLVideoElement | null;
};

/**
 * Grid-card sibling of a canonical preview.
 * `/templates/foo.mp4` stays the generator source and the VideoObject
 * contentUrl. Cards play `/templates/foo-card.mp4` (shorter GOP, lower bitrate).
 * Remote and non-template URLs are returned unchanged.
 */
export function cardPreviewSrc(src: string): string {
  const queryAt = src.indexOf('?');
  const path = queryAt === -1 ? src : src.slice(0, queryAt);
  const query = queryAt === -1 ? '' : src.slice(queryAt);
  if (!path.startsWith('/templates/') || !path.endsWith('.mp4')) return src;
  if (path.endsWith('-card.mp4')) return src;
  return `${path.slice(0, -4)}-card.mp4${query}`;
}

type LazyVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
  /** Wins the first playback slot while it is actually in the viewport. */
  priority?: boolean;
  /**
   * Card grid: play the `-card.mp4` sibling and keep the poster on a lazy
   * image until the first frame is actually playing. Falls back to `src`.
   */
  quality?: 'full' | 'card';
  /** Poster frame only. Never assigns src. Used for sample thumbnails. */
  posterOnly?: boolean;
  /** Card mute chip. Stops the click from activating the parent card. */
  sound?: boolean;
  muted?: boolean;
  loop?: boolean;
  ref?: Ref<LazyVideoHandle>;
};

function PosterVideo({
  poster,
  className,
  style,
}: Pick<LazyVideoProps, 'poster' | 'className' | 'style'>) {
  return (
    <video
      className={className}
      poster={poster}
      muted
      playsInline
      preload="none"
      style={style}
      aria-hidden="true"
    />
  );
}

const ActiveLazyVideo = forwardRef<
  LazyVideoHandle,
  Omit<LazyVideoProps, 'posterOnly' | 'ref'>
>(function ActiveLazyVideo(
  {
    src,
    poster,
    className,
    style,
    priority = false,
    quality = 'full',
    sound = false,
    muted: mutedProp,
    loop = true,
  },
  forwarded
) {
  const id = useId();
  const ref = useRef<HTMLVideoElement | null>(null);
  const mounted = useRef(true);
  const [attached, setAttached] = useState(false);
  const [mutedState, setMutedState] = useState(mutedProp ?? true);
  const [useCanonical, setUseCanonical] = useState(false);
  const [frameReady, setFrameReady] = useState(false);
  const muted = mutedProp ?? mutedState;
  const card = quality === 'card';
  const mediaSrc =
    src && card && !useCanonical ? cardPreviewSrc(src) : src;
  const mutedRef = useRef(muted);
  const wasAttached = useRef(false);
  mutedRef.current = muted;

  const bind = (node: HTMLVideoElement | null) => {
    ref.current = node;
    if (!node) return;
    node.muted = mutedRef.current;
    node.defaultMuted = mutedRef.current;
    node.playsInline = true;
    node.setAttribute('playsinline', '');
    node.setAttribute('webkit-playsinline', 'true');
  };

  const playFromGesture = (opts?: { muted?: boolean }) => {
    const player = players.get(id);
    if (player) {
      player.forced = true;
      player.forcedAt = performance.now();
      player.near = true;
      player.visible = true;
      player.allowed = true;
      player.attached = true;
    }
    const nextMuted = opts?.muted ?? mutedRef.current;
    mutedRef.current = nextMuted;
    flushSync(() => {
      if (mutedProp === undefined) setMutedState(nextMuted);
      setAttached(true);
    });
    const el = ref.current;
    if (!el || !mediaSrc) return;
    el.muted = nextMuted;
    el.defaultMuted = nextMuted;
    if (el.getAttribute('src') !== mediaSrc) el.src = mediaSrc;
    const attempt = el.play();
    if (attempt) {
      attempt.catch(() => {
        el.muted = true;
        el.defaultMuted = true;
        mutedRef.current = true;
        if (mutedProp === undefined) setMutedState(true);
        void el.play().catch(() => {});
      });
    }
    reconcile();
  };

  useEffect(() => {
    setUseCanonical(false);
    setFrameReady(false);
  }, [src]);

  useEffect(() => {
    if (!attached) setFrameReady(false);
  }, [attached]);

  useImperativeHandle(forwarded, () => ({
    playFromGesture,
    get element() {
      return ref.current;
    },
  }));

  useLayoutEffect(() => {
    mounted.current = true;
    const player: Player = {
      id,
      priority,
      near: false,
      visible: false,
      forced: false,
      forcedAt: 0,
      attached: false,
      allowed: false,
      dist: Number.POSITIVE_INFINITY,
      el: () => ref.current,
      setAttached: (next) => {
        if (mounted.current) setAttached(next);
      },
    };
    players.set(id, player);
    ensureListeners();
    const el = ref.current;
    const observer = new IntersectionObserver(() => scheduleReconcile(), {
      root: null,
      rootMargin: `${ROOT_MARGIN_PX}px 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    const resize = new ResizeObserver(() => scheduleReconcile());
    if (el) {
      observer.observe(el);
      resize.observe(el);
    }
    reconcile();
    return () => {
      mounted.current = false;
      observer.disconnect();
      resize.disconnect();
      players.delete(id);
      release(ref.current);
      queueMicrotask(reconcile);
    };
  }, [id, priority]);

  useEffect(() => {
    const el = ref.current;
    const player = players.get(id);
    if (!el || !player) return;
    if (!attached || !mediaSrc) {
      if (wasAttached.current) release(el);
      wasAttached.current = false;
      return;
    }
    wasAttached.current = true;
    el.muted = mutedRef.current;
    el.defaultMuted = mutedRef.current;
    el.autoplay = true;
    if (!player.allowed) {
      el.pause();
      return;
    }
    if (
      !el.paused &&
      el.readyState >= 2 &&
      el.getAttribute('src') === mediaSrc
    )
      return;
    const attempt = el.play();
    if (attempt) {
      attempt.catch(() => {
        el.muted = true;
        el.defaultMuted = true;
        void el.play().catch(() => {});
      });
    }
  }, [attached, mediaSrc, id]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = muted;
    el.defaultMuted = muted;
  }, [muted]);

  const toggleSound = (event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    playFromGesture({ muted: !mutedRef.current });
  };

  const onVideoClick = (event: MouseEvent<HTMLVideoElement>) => {
    if (!mediaHold()) return;
    if (event.currentTarget.closest('button, a')) return;
    playFromGesture({ muted: true });
  };

  const active = attached && !!mediaSrc;
  const showStill = card && !!poster && !frameReady;
  const onMediaError = () => {
    if (!card || useCanonical || !src) return;
    const el = ref.current;
    if (!el || el.getAttribute('src') !== cardPreviewSrc(src)) return;
    setFrameReady(false);
    setUseCanonical(true);
  };
  let soundControl: ReactNode = null;
  if (sound) {
    soundControl = (
      <span
        className="tv-sound"
        role="button"
        tabIndex={0}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        onClick={toggleSound}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') toggleSound(event);
        }}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </span>
    );
  }

  return (
    <>
      <video
        ref={bind}
        className={className}
        src={active ? mediaSrc : undefined}
        poster={card ? undefined : poster}
        muted={muted}
        loop={loop}
        playsInline
        autoPlay={active}
        preload={active && priority ? 'auto' : 'none'}
        style={style}
        onClick={onVideoClick}
        onPlaying={() => {
          if (card) setFrameReady(true);
        }}
        onError={onMediaError}
      />
      {showStill ? (
        <img
          className={className ? `${className} tv-still` : 'tv-still'}
          src={poster}
          alt=""
          aria-hidden="true"
          decoding="async"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          style={style}
        />
      ) : null}
      {soundControl}
    </>
  );
});

export const LazyVideo = forwardRef<
  LazyVideoHandle,
  Omit<LazyVideoProps, 'ref'>
>(function LazyVideo({ posterOnly, ...props }, ref) {
  if (posterOnly || !props.src)
    return (
      <PosterVideo
        poster={props.poster}
        className={props.className}
        style={props.style}
      />
    );
  return <ActiveLazyVideo {...props} ref={ref} />;
});

export function TemplateCardVideo({
  id,
  src,
  poster,
  colors,
  credit,
  priority = false,
}: {
  id?: string;
  src?: string;
  poster?: string;
  colors: readonly [string, string];
  credit?: string;
  priority?: boolean;
}) {
  const videoSrc = src ?? (id ? `/templates/${id}.mp4` : '');
  const videoPoster =
    poster ?? (id ? `/templates/${id}-poster.jpg` : undefined);
  return (
    <>
      <LazyVideo
        className="tv-video"
        src={videoSrc}
        poster={videoPoster}
        priority={priority}
        quality="card"
        sound
        style={{
          background: `linear-gradient(165deg, ${colors[0]}, ${colors[1]})`,
        }}
      />
      {credit ? <span className="tv-credit">© {credit}</span> : null}
    </>
  );
}
