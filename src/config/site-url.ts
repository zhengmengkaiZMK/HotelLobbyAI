/**
 * Public site origin for sitemap, robots, and canonical URLs.
 *
 * Next.js inlines `process.env.NEXT_PUBLIC_*` at build time. The Cloudflare
 * worker sets NEXT_PUBLIC_APP_URL in wrangler.toml [vars], which is only
 * visible at runtime. Dot-access therefore baked in the localhost fallback
 * and `startsWith('http')` let every sitemap <loc> ship as localhost.
 *
 * Read the variable with bracket access, and refuse to emit localhost or any
 * non-canonical host from a production build.
 */

export const CANONICAL_SITE_ORIGIN = 'https://www.viralreel.app';
export const LOCAL_DEV_ORIGIN = 'http://localhost:3000';

export interface SiteUrlOptions {
  nodeEnv?: string;
  /** Explicit override. Pass `null` to mean "unset" in tests. */
  configured?: string | null;
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

export function readRuntimeEnv(name: string): string | undefined {
  const value = (process.env as Record<string, string | undefined>)[name];
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function isLocalDevOrigin(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    return (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '0.0.0.0' ||
      host === '::1' ||
      host.endsWith('.local')
    );
  } catch {
    return false;
  }
}

/** Production sitemap, robots, and canonicals may only use this origin. */
export function isCanonicalProductionOrigin(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === 'https:' &&
      parsed.host === 'www.viralreel.app' &&
      (parsed.pathname === '/' || parsed.pathname === '') &&
      !parsed.search &&
      !parsed.hash
    );
  } catch {
    return false;
  }
}

export function assertProductionSiteUrl(url: string): void {
  if (!isCanonicalProductionOrigin(stripTrailingSlash(url))) {
    throw new Error(
      `Refusing production site URL "${url}". Sitemap, robots, and canonical URLs must use ${CANONICAL_SITE_ORIGIN}.`
    );
  }
}

/**
 * Origin used for absolute public URLs.
 * Development keeps localhost (or whatever .env sets).
 * Production never returns localhost. An explicit non-canonical value throws
 * so http://viralreel.app or a stray host cannot be published. An unset or
 * localhost value falls back to the canonical origin — that is the worker
 * case where the build did not inline NEXT_PUBLIC_APP_URL.
 */
export function resolvePublicSiteUrl(options: SiteUrlOptions = {}): string {
  const nodeEnv = options.nodeEnv ?? process.env.NODE_ENV ?? 'development';
  const configured =
    options.configured === undefined
      ? readRuntimeEnv('NEXT_PUBLIC_APP_URL')
      : options.configured;
  const normalized = configured ? stripTrailingSlash(configured.trim()) : '';

  if (nodeEnv === 'production') {
    if (!normalized || isLocalDevOrigin(normalized)) {
      return CANONICAL_SITE_ORIGIN;
    }
    assertProductionSiteUrl(normalized);
    return normalized;
  }

  return normalized || LOCAL_DEV_ORIGIN;
}

/** Absolute URL for a site path. Production results are asserted. */
export function absoluteSiteUrl(path: string, options: SiteUrlOptions = {}): string {
  const origin = resolvePublicSiteUrl(options);
  const nodeEnv = options.nodeEnv ?? process.env.NODE_ENV ?? 'development';
  const suffix = !path || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const url = `${origin}${suffix}`;
  if (nodeEnv === 'production') {
    assertProductionSiteUrl(origin);
    if (url.includes('localhost') || url.startsWith('http://')) {
      throw new Error(`Refusing non-production public URL "${url}".`);
    }
  }
  return url;
}
