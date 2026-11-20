'use client';

import { useEffect } from 'react';

import { getCookie, setCookie } from '@/shared/lib/cookie';

const COOKIE_NAME = 'utm_source';
const COOKIE_DAYS = 30;

function sanitizeUtmSource(value: string) {
  const decoded = (() => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  })();

  return decoded
    .trim()
    .replace(/[^\w\-.:]/g, '') // allow a-zA-Z0-9_ - . :
    .slice(0, 100);
}

/**
 * Capture utm_source from landing URL and persist in cookie.
 * This enables server-side signup to save it into the user table.
 */
export function UtmCapture() {
  useEffect(() => {
    // Don’t overwrite if already captured.
    if (getCookie(COOKIE_NAME)) return;

    const params = new URLSearchParams(window.location.search);
    // utm_source first; `ref` is the legacy shape used by directory listings
    // (Product Hunt, legit.show). Those links should move to utm_source because
    // Google treats ?ref= as a separate URL, while it folds utm_* into the
    // canonical one. Reading `ref` here keeps attribution intact during the switch.
    const utmSource = params.get('utm_source') || params.get('ref');
    if (!utmSource) return;

    const sanitized = sanitizeUtmSource(utmSource);
    if (!sanitized) return;

    // Store encoded to keep cookie safe.
    setCookie(COOKIE_NAME, encodeURIComponent(sanitized), COOKIE_DAYS);
  }, []);

  return null;
}
