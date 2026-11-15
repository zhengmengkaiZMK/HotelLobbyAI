import {
  CANONICAL_PRICING,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';
import { formatCreditCount, usdFromCredits } from '@/shared/lib/video-yield';

/**
 * Never Let Her Pay is locked to 12 seconds in the generator
 * (`familyFixedDurations.never_let_her_pay`). Default resolution is 720p.
 *
 * Public copy quotes the live pricing table, verified 2026-11-15:
 * 12s is 48 / 60 / 72 credits at 480p / 720p / 1080p
 * (4 / 5 / 6 credits per second × 12). The 15-second row is 60 / 75 / 90
 * and must not be pasted onto this series.
 *
 * Display copy only. It does not change generator billing. The button
 * still shows the exact number for the selected model (the default
 * model line stays "This generation = 14 credits" when that model
 * bills the 12-second tier). A 90-credit Starter pack covers about
 * 1 video at the published 720p / 12s rate of 60 credits.
 */
export const NEVER_LET_HER_PAY_12S_CREDITS = {
  p480: 48,
  p720: 60,
  p1080: 72,
} as const;

function pricingUrl(zh: boolean, path: '/pricing' | '/subscribe') {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

export function neverLetHerPayTwelveSecondCosts(ctx: TemplateCostContext = {}) {
  const creditsPerUsd =
    ctx.creditsPerUsd && ctx.creditsPerUsd > 0
      ? ctx.creditsPerUsd
      : CANONICAL_PRICING.creditsPerUsd;
  const { p480, p720, p1080 } = NEVER_LET_HER_PAY_12S_CREDITS;
  return {
    p480,
    p720,
    p1080,
    creditsPerUsd,
    usd720: usdFromCredits(p720, creditsPerUsd),
    packs: CANONICAL_PRICING,
  };
}

export function neverLetHerPayTwelveSecondCostAnswer(
  _product: { en: string; zh: string },
  zh: boolean,
  ctx: TemplateCostContext = {}
) {
  const { p480, p720, p1080, creditsPerUsd, usd720, packs } =
    neverLetHerPayTwelveSecondCosts(ctx);
  const pricing = pricingUrl(zh, '/pricing');
  const subscribe = pricingUrl(zh, '/subscribe');
  if (zh) {
    return `Never Let Her Pay 这条片子在公开积分表上是 12 秒：480p 是 ${formatCreditCount(p480)} 积分，720p 是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd720}），1080p 是 ${formatCreditCount(p1080)} 积分。这是每秒 4 / 5 / 6 积分乘以 12 秒，不是 15 秒的 60 / 75 / 90。生成器按钮是所选模型的实扣积分；按钮若显示别的数字，按按钮扣。没有免费积分，也没有免费试用。90 积分的 Starter 包（${packs.packStarterPrice}）按公开的 720p / 12 秒（${formatCreditCount(p720)} 积分）大约能做 1 条，见 ${pricing}。月付 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），见 ${subscribe}。失败或取消的渲染会退回这次的积分。`;
  }
  return `A 12-second Never Let Her Pay clip on the published table is ${formatCreditCount(p480)} credits at 480p, ${formatCreditCount(p720)} credits at 720p (about ${usd720} at ${creditsPerUsd} credits = $1), and ${formatCreditCount(p1080)} credits at 1080p. That row is 4 / 5 / 6 credits per second times 12 seconds. It is not the 15-second 60 / 75 / 90 table. The generator button is the exact charge for the model you pick; if the button shows a different number, you pay the button. There are no free credits and no free trial. A 90-credit Starter pack (${packs.packStarterPrice}) covers about 1 video at the published 720p / 12s rate (${formatCreditCount(p720)} credits), at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/mo (${packs.monthlyStarterCredits} credits) at ${subscribe}. Failed or canceled renders return those credits.`;
}

/** { en, zh } pair for the hub FAQ, which is not locale-switched at call time. */
export function neverLetHerPayCostPair(): { en: string; zh: string } {
  const product = { en: 'Never Let Her Pay', zh: 'Never Let Her Pay' };
  return {
    en: neverLetHerPayTwelveSecondCostAnswer(product, false),
    zh: neverLetHerPayTwelveSecondCostAnswer(product, true),
  };
}
