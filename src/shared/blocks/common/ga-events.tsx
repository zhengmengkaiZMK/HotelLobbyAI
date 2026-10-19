'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { captureUtm, getStoredUtm, track, trackOnce } from '@/shared/lib/analytics';

/**
 * Global client-side analytics bootstrap.
 *
 * 1. Persists first-touch UTM (so signups and purchases keep their channel).
 * 2. Fires GA4 `purchase` when the payment provider redirects back with a
 *    success flag. The server-side payment callback is still the source of
 *    truth for money; this event closes the loop in GA4 attribution.
 *
 * Supported return params (any of):
 *   ?checkout=success | ?payment=success | ?paid=1
 *   optional: order_id / session_id, value / amount, currency
 */
export function GaEvents() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  // Next.js App Router does client-side navigation: gtag only sends the
  // initial page_view, so every later route change would be invisible in GA4.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    track('page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    captureUtm();

    const params = new URLSearchParams(window.location.search);
    const status =
      params.get('checkout') || params.get('payment') || params.get('paid');
    const isPaid =
      status === 'success' || status === 'paid' || status === '1';
    if (!isPaid) return;

    const orderId =
      params.get('order_id') || params.get('session_id') || '';
    const rawValue = Number(
      params.get('value') || params.get('amount') || 0
    );
    const utm = getStoredUtm();

    trackOnce(
      'purchase',
      {
        transaction_id: orderId || undefined,
        value:
          Number.isFinite(rawValue) && rawValue > 0 ? rawValue : undefined,
        currency: params.get('currency') || 'USD',
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
      },
      `vr_purchase_${orderId || new Date().toISOString().slice(0, 10)}`
    );
  }, []);

  return null;
}
