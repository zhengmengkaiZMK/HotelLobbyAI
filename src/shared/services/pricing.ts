import { getTranslations } from 'next-intl/server';

import { getAllConfigs, type Configs } from '@/shared/models/config';
import { PricingItem } from '@/shared/types/blocks/pricing';

export const CREDITS_TOPUP_PRODUCT_ID = 'credits_topup';

export const DEFAULT_CREDITS_PER_USD = 10;

// One-time credit packs sold on the pricing page. Separate from the
// subscriber-only `credits_topup` custom amount.
export const CREDIT_PACK_PRODUCT_IDS = [
  'credits-once-starter',
  'credits-once-popular',
  'credits-once-creator',
  'credits-once-max',
] as const;

export function isCreditPackProduct(productId: string) {
  return (CREDIT_PACK_PRODUCT_IDS as readonly string[]).includes(productId);
}

// plan settings editable in the admin backend (tab: payment, group: pricing)
export const PLAN_SETTING_NAMES = [
  'starter-monthly',
  'plus-monthly',
  'pro-monthly',
  'starter-yearly',
  'plus-yearly',
  'pro-yearly',
  ...CREDIT_PACK_PRODUCT_IDS,
] as const;

export function planSettingName(productId: string, field: 'amount' | 'price' | 'credits') {
  return `pricing_plan_${productId.replace(/-/g, '_')}_${field}`;
}

function toNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null;
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : null;
}

function applyPlanOverrides(item: PricingItem, configs: Configs): PricingItem {
  if (!item.product_id) return item;

  const amount = toNumber(configs[planSettingName(item.product_id, 'amount')]);
  const price = configs[planSettingName(item.product_id, 'price')];
  const credits = toNumber(configs[planSettingName(item.product_id, 'credits')]);

  return {
    ...item,
    ...(amount !== null ? { amount } : {}),
    ...(price ? { price } : {}),
    ...(credits !== null ? { credits } : {}),
  };
}

/**
 * Read pricing plans from the locale JSON, then apply admin-configured
 * overrides (amount / price / credits) stored in the config table.
 * Always use this on the server side — including the checkout API —
 * so the charged amount always matches what the page displays.
 */
export async function getPricingPlans(locale: string): Promise<PricingItem[]> {
  const t = await getTranslations({ locale, namespace: 'pages.pricing' });
  const items = t.raw('page.sections.pricing.items') as PricingItem[];
  if (!Array.isArray(items)) return [];

  // Fresh read so an admin price/credit edit is what checkout charges.
  const configs = await getAllConfigs(true);
  return items.map((item) => applyPlanOverrides(item, configs));
}

/**
 * Credit top-up rate: how many credits 1 USD buys. Editable in the admin
 * backend (`pricing_credits_per_usd`), defaults to 10.
 */
export function getCreditsPerUsd(configs: Configs): number {
  const rate = toNumber(configs.pricing_credits_per_usd);
  return rate ?? DEFAULT_CREDITS_PER_USD;
}

export async function getCreditsPerUsdFromConfigs(): Promise<number> {
  const configs = await getAllConfigs();
  return getCreditsPerUsd(configs);
}
