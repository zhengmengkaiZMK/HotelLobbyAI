/**
 * Stub for `shiki/engine/oniguruma` (aliased via next.config.mjs).
 *
 * The oniguruma engine requires a ~450 KB wasm binary that the OpenNext
 * Cloudflare bundler would inline into handler.mjs. Nothing in the runtime
 * bundle uses it — fumadocs highlights code at MDX build time and streamdown
 * uses the JavaScript regex engine — so this stub only exists to keep the
 * wasm out of the worker. If a runtime code path ever calls it, it fails
 * loudly instead of silently misbehaving.
 */
export function createOnigurumaEngine(): never {
  throw new Error(
    'The oniguruma engine is disabled in this bundle (worker size limit). Use the JavaScript regex engine instead.'
  );
}

export async function loadWasm(): Promise<void> {
  throw new Error(
    'The oniguruma wasm is disabled in this bundle (worker size limit). Use the JavaScript regex engine instead.'
  );
}
