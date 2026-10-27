/**
 * Shrink handler.mjs by deduplicating the 210 inline __RSC_MANIFEST
 * assignments (30+ MB of the ~58 MB worker). ~99% of each manifest's content
 * (ssrModuleMapping / clientModuleMapping chunk tables) is identical across
 * routes, so we extract the common subtree once and rewrite every assignment
 * to `apply(SHARED, <sparse residual>)`.
 *
 * Run AFTER `opennextjs-cloudflare build`, BEFORE `wrangler deploy`:
 *   node scripts/shrink-handler.mjs
 *
 * Safety: every rewritten assignment is verified (shared+residual must
 * deep-equal the original JSON); if any verification fails the handler is
 * restored untouched and the script exits non-zero.
 */
import fs from "node:fs";
import path from "node:path";

const HANDLER = path.join(process.cwd(), ".open-next", "server-functions", "default", "handler.mjs");
const MIN_GROUP = 4;

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const deepEq = (a, b) => {
  if (a === b) return true;
  if (typeof a !== typeof b || a === null || b === null) return false;
  if (Array.isArray(a) || Array.isArray(b)) return JSON.stringify(a) === JSON.stringify(b);
  if (!isObj(a) || !isObj(b)) return a === b;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) if (!(k in b) || !deepEq(a[k], b[k])) return false;
  return true;
};

function extract(src) {
  const re = /globalThis\.__RSC_MANIFEST\[("(?:[^"\\]|\\.)*")\]=/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    let i = m.index + m[0].length;
    while (/\s/.test(src[i])) i++;
    if (src[i] !== "{") continue; // skip non-object forms
    let d = 0, j = i, inStr = false, esc = false;
    for (; j < src.length; j++) {
      const c = src[j];
      if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; }
      else if (c === '"') inStr = true;
      else if (c === "{") d++;
      else if (c === "}") { d--; if (d === 0) { j++; break; } }
    }
    out.push({ start: m.index, assignStart: i, end: j, key: JSON.parse(m[1]), jsonText: src.slice(i, j) });
    re.lastIndex = j;
  }
  return out;
}

/** Deep common subtree across all jsons; per-json sparse residual of differences. */
function computeShared(jsons) {
  const shared = {};
  const residuals = jsons.map(() => ({}));
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const keys = new Set();
  for (const o of jsons) for (const k of Object.keys(o)) keys.add(k);
  for (const k of keys) {
    const present = jsons.filter((o) => k in o).length;
    if (present === jsons.length && jsons.every((o) => eq(o[k], jsons[0][k]))) {
      shared[k] = jsons[0][k];
    } else if (present === jsons.length && jsons.every((o) => isObj(o[k]) && isObj(jsons[0][k]))) {
      const sub = computeShared(jsons.map((o) => o[k]));
      shared[k] = sub.shared;
      sub.residuals.forEach((r, idx) => { if (Object.keys(r).length) residuals[idx][k] = r; });
    } else {
      jsons.forEach((o, idx) => { if (k in o) residuals[idx][k] = o[k]; });
    }
  }
  return { shared, residuals };
}

function applyTree(shared, residual) {
  if (residual === undefined) return structuredClone(shared);
  if (!isObj(shared) || !isObj(residual)) return structuredClone(residual);
  const out = structuredClone(shared);
  for (const [k, v] of Object.entries(residual)) out[k] = isObj(v) && isObj(out[k]) ? applyTree(out[k], v) : structuredClone(v);
  return out;
}

async function main() {
  if (!fs.existsSync(HANDLER)) { console.error("[shrink-handler] handler.mjs not found"); process.exit(1); }
  const src = fs.readFileSync(HANDLER, "utf8");
  const assigns = extract(src);
  if (assigns.length < MIN_GROUP) { console.log(`[shrink-handler] only ${assigns.length} manifests, nothing to do`); return; }
  const totalBefore = assigns.reduce((t, a) => t + (a.end - a.assignStart), 0);
  console.log(`[shrink-handler] found ${assigns.length} manifests, ${(totalBefore / 1048576).toFixed(2)} MB of inline JSON`);

  const jsons = await evalJsonTexts(assigns.map((a) => a.jsonText));
  const { shared, residuals } = computeShared(jsons);
  const sharedSize = JSON.stringify(shared).length;
  const residualSizes = residuals.map((r) => JSON.stringify(r).length);
  const avg = totalBefore / assigns.length;
  if (sharedSize < avg * 0.3) { console.log("[shrink-handler] shared tree too small, aborting"); return; }
  console.log(`[shrink-handler] shared tree ${(sharedSize / 1024).toFixed(0)} KB, avg original ${(avg / 1024).toFixed(0)} KB, max residual ${(Math.max(...residualSizes) / 1024).toFixed(1)} KB`);

  // verify all before writing
  for (let i = 0; i < assigns.length; i++) {
    if (!deepEq(applyTree(shared, residuals[i]), jsons[i])) {
      console.error(`[shrink-handler] verification FAILED for ${assigns[i].key} — handler left untouched`);
      process.exit(1);
    }
  }
  console.log(`[shrink-handler] verified ${assigns.length} manifests round-trip equal`);

  const sharedCode = `var __RSC_SHARED_MANIFEST=${JSON.stringify(shared)};var __RSC_APPLY=(s,r)=>{if(r===undefined)return structuredClone(s);if(s===null||typeof s!=="object"||Array.isArray(s)||r===null||typeof r!=="object"||Array.isArray(r))return structuredClone(r);const o=structuredClone(s);for(const k in r)o[k]=r[k]!==null&&typeof r[k]==="object"&&!Array.isArray(r[k])&&o[k]!==null&&typeof o[k]==="object"&&!Array.isArray(o[k])?__RSC_APPLY(o[k],r[k]):structuredClone(r[k]);return o;};\n`;
  // replace assignments from last to first
  let out = src;
  for (let i = assigns.length - 1; i >= 0; i--) {
    const a = assigns[i];
    const replacement = `globalThis.__RSC_MANIFEST[${JSON.stringify(a.key)}]=__RSC_APPLY(__RSC_SHARED_MANIFEST,${residualSizes[i] > 0 ? JSON.stringify(residuals[i]) : "undefined"})`;
    out = out.slice(0, a.assignStart) + replacement + out.slice(a.end);
  }
  // Insert the shared declarations at the VERY TOP of the handler: esbuild's
  // module execution order follows the dependency graph, not text order, so a
  // declaration placed before the first assignment could still execute after
  // another module's assignment (ReferenceError at runtime).
  const importEnd = (() => {
    // skip a leading "use strict" and any top-level import lines
    const lines = out.split("\n");
    let idx = 0;
    if (lines[0]?.startsWith('"use strict"') || lines[0]?.startsWith("'use strict'")) idx = 1;
    while (idx < lines.length && lines[idx].startsWith("import ")) idx++;
    return lines.slice(0, idx).join("\n").length + (idx > 0 ? 1 : 0);
  })();
  out = out.slice(0, importEnd) + sharedCode + out.slice(importEnd);
  fs.writeFileSync(HANDLER, out);
  const after = fs.statSync(HANDLER).size;
  console.log(`[shrink-handler] handler: ${(src.length / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB (saved ${((src.length - after) / 1048576).toFixed(2)} MB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });

/** The inline manifests are JS object literals (esbuild minifySyntax output:
 * unquoted keys, !0/!1), not JSON — evaluate them via a temp module. */
async function evalJsonTexts(texts) {
  const tmp = path.join(path.dirname(HANDLER), `.shrink-tmp-${process.pid}.mjs`);
  fs.writeFileSync(tmp, `export default [${texts.join(",")}];\n`);
  try {
    const mod = await import(`file://${tmp}?t=${Date.now()}`);
    return mod.default;
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}
