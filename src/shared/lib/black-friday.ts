/**
 * Black Friday overlay for the one-time Popular and Creator credit packs.
 * List prices stay in admin settings. This layer only applies while the
 * admin switch is on and the deadline has not passed, so turning the
 * switch off restores the existing checkout amount.
 */

/**
 * Sale deadline, written in Beijing time. 2026-12-01 12:59 +08:00 is
 * 2026-11-30 23:59 EST — the last minute of Cyber Monday. The previous value
 * (2026-12-01 00:00 +08:00) resolved to 11-30 11:00 EST and silently cut the
 * US Monday afternoon, the biggest buying window of the whole run.
 */
export const BLACK_FRIDAY_ENDS_AT = Date.parse('2026-12-01T12:59:00+08:00');

export const BF_SEEN_KEY = 'vr_bf_popup_seen_v1';
export const BF_LOGIN_KEY = 'vr_bf_login_popup';
/** session + local. `popup` means: after login, show the sale modal again. */
export const BF_INTENT_KEY = 'vr_bf_after_login';
export const BF_PENDING_KEY = 'vr_bf_pending_login';
/** sessionStorage value is a timestamp. While it is in the future, a login refresh must not dismiss the popup. */
export const BF_HOLD_KEY = 'vr_bf_hold_until';

export const BLACK_FRIDAY_OFFERS = {
  'credits-once-popular': {
    amount: 1600,
    price: '$16',
    badge: '20% OFF',
    fallbackOriginal: '$19.9',
  },
  'credits-once-creator': {
    amount: 2800,
    price: '$28',
    badge: '30% OFF',
    fallbackOriginal: '$39.9',
  },
} as const;

export type BlackFridayProductId = keyof typeof BLACK_FRIDAY_OFFERS;

type PriceFields = {
  product_id?: string;
  price?: string;
  amount?: number;
  original_price?: string;
};

export function blackFridayOffer(productId?: string) {
  if (!productId || !(productId in BLACK_FRIDAY_OFFERS)) return null;
  return BLACK_FRIDAY_OFFERS[productId as BlackFridayProductId];
}

export function isBlackFridayWindow(now = Date.now()) {
  return now < BLACK_FRIDAY_ENDS_AT;
}

export function isBlackFridayEnabled(
  configs?: { black_friday_enabled?: string } | null,
  now = Date.now()
) {
  return configs?.black_friday_enabled === 'true' && isBlackFridayWindow(now);
}

export function isBlackFridayPopupEnabled(
  configs?: {
    black_friday_enabled?: string;
    black_friday_popup_enabled?: string;
  } | null,
  now = Date.now()
) {
  return (
    isBlackFridayEnabled(configs, now) &&
    configs?.black_friday_popup_enabled === 'true'
  );
}

/** Overlay the sale price, or restore the list price when the sale is off. */
export function resolvePackPrice<T extends PriceFields>(
  item: T,
  configs?: { black_friday_enabled?: string } | null,
  now = Date.now()
): T {
  const offer = blackFridayOffer(item.product_id);
  if (!offer) return item;

  if (isBlackFridayEnabled(configs, now)) {
    const listPrice =
      item.original_price && item.original_price !== offer.price
        ? item.original_price
        : item.price && item.price !== offer.price
          ? item.price
          : offer.fallbackOriginal;
    return {
      ...item,
      amount: offer.amount,
      price: offer.price,
      original_price: listPrice,
    };
  }

  if (item.price === offer.price && item.original_price) {
    return { ...item, price: item.original_price, original_price: '' };
  }
  return item;
}

export function packOnSale(item?: PriceFields | null) {
  if (!item) return false;
  const offer = blackFridayOffer(item.product_id);
  return !!(
    offer &&
    item.original_price &&
    item.price === offer.price &&
    item.original_price !== item.price
  );
}

export function salePackLabel(
  item: PriceFields | undefined,
  zh: boolean,
  fallback: string
) {
  if (!item?.price) return fallback;
  if (packOnSale(item) && item.original_price) {
    return zh
      ? `${item.price}（原价 ${item.original_price}）`
      : `${item.price} (was ${item.original_price})`;
  }
  return item.price;
}
