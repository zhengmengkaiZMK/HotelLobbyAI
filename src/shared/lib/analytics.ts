/**
 * GA4 event + UTM helpers.
 *
 * gtag.js is injected by GoogleAnalyticsProvider (extensions/analytics).
 * Everything here is a thin, failure-tolerant wrapper: if gtag has not loaded
 * yet we push to dataLayer, which gtag replays once it boots.
 *
 * Naming rules (keep GA4 reports readable):
 *   - snake_case, verb-first for actions: click_generate, render_success
 *   - one event = one user intent, never fire the same intent twice
 *   - every event carries `template` and/or `surface` so it can be segmented
 */

export type EventParams = Record<
  string,
  string | number | boolean | undefined | null
>;

type GtagFn = (
  command: 'event' | 'config' | 'set' | 'js',
  ...args: unknown[]
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 event. Safe on SSR, safe before gtag loads, never throws. */
export function track(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  const clean: Record<string, string | number | boolean> = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    clean[key] = value;
  });

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, clean);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...clean });
  } catch {
    // analytics must never break a render or a checkout
  }
}

/* ------------------------------------------------------------------ */
/* UTM                                                                 */
/* ------------------------------------------------------------------ */

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

export const UTM_STORAGE_KEY = 'vr_utm_first_touch';
const UTM_MAX_AGE_DAYS = 90;

/** Read UTM params from a query string (defaults to the current URL). */
export function readUtm(search?: string): UtmParams {
  if (typeof window === 'undefined') return {};
  const query = new URLSearchParams(
    search ?? window.location.search
  );
  const out: UtmParams = {};
  UTM_KEYS.forEach((key) => {
    const value = query.get(key)?.trim();
    if (value) out[key] = value.slice(0, 120);
  });
  return out;
}

/**
 * Persist the first touch that ever brought this browser in.
 * First touch wins on purpose: "which channel created this user" is the
 * question we need answered, not "which link they clicked last".
 */
export function captureUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  const utm = readUtm();
  if (!Object.keys(utm).length) return {};

  try {
    const raw = window.localStorage.getItem(UTM_STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw) as { at?: number };
      const ageDays = (Date.now() - (saved.at || 0)) / 86400000;
      if (ageDays < UTM_MAX_AGE_DAYS) return utm;
    }
    window.localStorage.setItem(
      UTM_STORAGE_KEY,
      JSON.stringify({ ...utm, at: Date.now() })
    );
  } catch {
    // private mode / quota — analytics degrades, page still works
  }
  return utm;
}

/** First-touch UTM for this browser, if any. */
export function getStoredUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: UtmParams = {};
    UTM_KEYS.forEach((key) => {
      const value = parsed[key];
      if (typeof value === 'string' && value) out[key] = value;
    });
    return out;
  } catch {
    return {};
  }
}

/**
 * Build an outbound URL with UTM params.
 * Used for links we hand to creators / directories / newsletters, so every
 * inbound click is attributable instead of landing in (direct).
 */
export function withUtm(url: string, params: UtmParams): string {
  const isAbsolute = /^https?:\/\//i.test(url);
  const base = isAbsolute ? url : `https://www.viralreel.app${url.startsWith('/') ? '' : '/'}${url}`;

  try {
    const parsed = new URL(base);
    Object.entries(params).forEach(([key, value]) => {
      if (value) parsed.searchParams.set(key, value);
    });
    return isAbsolute ? parsed.toString() : `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return url;
  }
}

/** Fire an event at most once per browser session (dedupe reloads). */
export function trackOnce(
  event: string,
  params: EventParams = {},
  storageKey = `vr_once_${event}`
) {
  if (typeof window === 'undefined') return;
  try {
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // ignore
  }
  track(event, params);
}
