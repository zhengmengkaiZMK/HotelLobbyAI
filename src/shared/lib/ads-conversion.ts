import { track } from '@/shared/lib/analytics';

/**
 * Google Ads conversion snippets (AW-18550889826).
 *
 * Events are fired through the shared dataLayer wrapper (`track`), so they
 * queue safely if the Google tag has not finished loading yet, and can never
 * throw into business logic. Purchase dedupe is handled per order_id by the
 * AdsConversionListener; signup/login dedupes once per browser session.
 */

/** Event snippet for 购买 conversion page. */
const ADS_PURCHASE_CONVERSION = 'AW-18550889826/myjyCOOLpbIdEOK64I1F';

/** Event snippet for 注册/登录 conversion page. */
const ADS_SIGNUP_LOGIN_CONVERSION = 'AW-18550889826/u-FXCOCLpbIdEOK64I1F';

const SIGNUP_LOGIN_DEDUPE_KEY = 'vr_ads_signup_login';

/**
 * Fire the 购买 (purchase) conversion.
 * `value` is the actual paid amount in major units (e.g. 9.9),
 * `transactionId` is the site order number for Google-side dedupe.
 */
export function trackAdsPurchase(params: {
  value?: number;
  currency?: string;
  transactionId?: string;
}) {
  track('conversion', {
    send_to: ADS_PURCHASE_CONVERSION,
    value:
      typeof params.value === 'number' && Number.isFinite(params.value) && params.value > 0
        ? params.value
        : 1.0,
    currency: params.currency || 'USD',
    transaction_id: params.transactionId || '',
  });
}

/**
 * Fire the 注册/登录 conversion. Once per browser session — both email and
 * social sign-in/up flows funnel through this, so double-fire is prevented
 * client-side (the snippet carries no transaction id for Google-side dedupe).
 */
export function trackAdsSignupLogin() {
  if (typeof window !== 'undefined') {
    try {
      if (window.sessionStorage.getItem(SIGNUP_LOGIN_DEDUPE_KEY)) return;
      window.sessionStorage.setItem(SIGNUP_LOGIN_DEDUPE_KEY, '1');
    } catch {
      // private mode — fire anyway
    }
  }
  track('conversion', { send_to: ADS_SIGNUP_LOGIN_CONVERSION });
}
