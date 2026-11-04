import { CANONICAL_PRICING, type TemplateCostContext } from '@/shared/lib/pricing-copy';
import { formatCreditCount, usdFromCredits } from '@/shared/lib/video-yield';

/**
 * Your First Time in a Fancy Cafe is locked to 15 seconds in the generator
 * (`familyFixedDurations.fancy_cafe`). The default resolution is 720p.
 *
 * Public copy quotes the live hub table: 60 / 75 / 90 credits at
 * 480p / 720p / 1080p. At 12 credits = $1, 75 credits is about $6.25.
 * That is the published 15-second table. Do not quote 8-second rows
 * (the “From 32” floor) for this clip.
 *
 * Display copy only. It does not change what the generator charges.
 * The button still shows the exact number for the selected model
 * before a render starts. Packs stay $9.9 for 90 credits.
 */
export const FANCY_CAFE_15S_CREDITS = {
  p480: 60,
  p720: 75,
  p1080: 90,
} as const;

function pricingUrl(zh: boolean, path: '/pricing' | '/subscribe') {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

export function fancyCafeFifteenSecondCosts(ctx: TemplateCostContext = {}) {
  const creditsPerUsd =
    ctx.creditsPerUsd && ctx.creditsPerUsd > 0
      ? ctx.creditsPerUsd
      : CANONICAL_PRICING.creditsPerUsd;
  const { p480, p720, p1080 } = FANCY_CAFE_15S_CREDITS;
  return {
    p480,
    p720,
    p1080,
    creditsPerUsd,
    usd720: usdFromCredits(p720, creditsPerUsd),
    packs: CANONICAL_PRICING,
  };
}

/** 15-second-only floor. The full table’s cheapest cell is an 8-second row. */
export function fancyCafeFifteenSecondMinCredits(ctx: TemplateCostContext = {}) {
  return fancyCafeFifteenSecondCosts(ctx).p480;
}

export function fancyCafeFifteenSecondCostAnswer(
  product: { en: string; zh: string },
  zh: boolean,
  ctx: TemplateCostContext = {}
) {
  const { p480, p720, p1080, creditsPerUsd, usd720, packs } =
    fancyCafeFifteenSecondCosts(ctx);
  const pricing = pricingUrl(zh, '/pricing');
  const subscribe = pricingUrl(zh, '/subscribe');
  if (zh) {
    return `一条 ${product.zh} 成片固定 15 秒：480p 是 ${formatCreditCount(p480)} 积分，720p 是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd720}），1080p 是 ${formatCreditCount(p1080)} 积分。生成器会在开始前按所选模型显示确切数字。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricing}。月付 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），见 ${subscribe}。加购为 ${creditsPerUsd} 积分 = 1 美元。新账号的免费积分够先做一条模板视频，不是永远免费。`;
  }
  return `A 15-second ${product.en} clip is ${formatCreditCount(p480)} credits at 480p, ${formatCreditCount(p720)} credits at 720p (about ${usd720} at ${creditsPerUsd} credits = $1), and ${formatCreditCount(p1080)} credits at 1080p. The generator shows the exact number for the selected model before you start. One-time packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/month (${packs.monthlyStarterCredits} credits) at ${subscribe}. Top-ups are ${creditsPerUsd} credits = $1. New accounts start with free credits for a first template video. That is not free forever.`;
}
