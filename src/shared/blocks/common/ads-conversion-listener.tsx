'use client';

import { useEffect } from 'react';

import { trackAdsPurchase } from '@/shared/lib/ads-conversion';

/**
 * Global Google Ads purchase conversion listener.
 *
 * The server-side payment callback (/api/payment/callback) redirects back
 * with ?checkout=success&order_id=...&value=...&currency=... only after the
 * order is verified PAID. This component (mounted once in the root layout)
 * turns those params into the 购买 conversion event with the real amount and
 * the site order number as transaction_id, then strips the params so a
 * refresh / share of the URL can't re-fire.
 *
 * Dedupe: once per order_id in localStorage.
 */
export function AdsConversionListener() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get('order_id');
      if (!orderId) return;

      const dedupeKey = `vr_ads_purchase_${orderId}`;
      const alreadyFired = (() => {
        try {
          if (window.localStorage.getItem(dedupeKey)) return true;
          window.localStorage.setItem(dedupeKey, '1');
        } catch {
          // private mode / quota — allow the fire, skip dedupe
        }
        return false;
      })();

      // Strip attribution params from the address bar (keep checkout=success
      // so GaEvents and other handlers still see a clean success state).
      const url = new URL(window.location.href);
      ['order_id', 'value', 'currency'].forEach((key) =>
        url.searchParams.delete(key)
      );
      window.history.replaceState(null, '', url.toString());

      if (alreadyFired) return;

      const rawValue = Number(params.get('value'));
      trackAdsPurchase({
        value: Number.isFinite(rawValue) && rawValue > 0 ? rawValue : undefined,
        currency: params.get('currency') || 'USD',
        transactionId: orderId,
      });
    } catch {
      // conversion tracking must never break the return page
    }
  }, []);

  return null;
}
