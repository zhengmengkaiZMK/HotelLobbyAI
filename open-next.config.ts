import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache';

export default defineCloudflareConfig({
  // R2-backed incremental cache: without this, Next's data cache
  // (unstable_cache / ISR) falls back to a dummy cache on Workers and every
  // request re-reads D1, which dominated template page TTFB (~5s).
  incrementalCache: r2IncrementalCache,
});
