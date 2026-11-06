import { CANONICAL_PRICING, type TemplateCostContext } from '@/shared/lib/pricing-copy';
import { formatCreditCount, usdFromCredits } from '@/shared/lib/video-yield';

/**
 * Wassup in a minute is locked to 15 seconds in the generator
 * (`familyFixedDurations.wassup_in_a_minute`). The default resolution is 720p.
 *
 * Public copy quotes the live hub/FAQ table: 60 / 75 / 90 credits at
 * 480p / 720p / 1080p. At 12 credits = $1, 75 credits is about $6.25.
 * That is the published 15-second table, not the code-default Wan formula
 * (0.6 / 1.2 / 2.4 credits per second → 9 / 18 / 36). Do not quote
 * 8-second rows, or the retired 32 / 40 / 90 figures, for this clip.
 *
 * This helper is display copy only. It does not change what the generator
 * charges. The button still shows the exact number for the selected model
 * before a render starts. Packs stay $9.9 for 90 credits.
 */
export const WASSUP_15S_CREDITS = {
  p480: 60,
  p720: 75,
  p1080: 90,
} as const;

function pricingUrl(zh: boolean, path: '/pricing' | '/subscribe') {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

export function wassupFifteenSecondCosts(ctx: TemplateCostContext = {}) {
  const creditsPerUsd =
    ctx.creditsPerUsd && ctx.creditsPerUsd > 0
      ? ctx.creditsPerUsd
      : CANONICAL_PRICING.creditsPerUsd;
  const { p480, p720, p1080 } = WASSUP_15S_CREDITS;
  return {
    p480,
    p720,
    p1080,
    creditsPerUsd,
    usd720: usdFromCredits(p720, creditsPerUsd),
    packs: CANONICAL_PRICING,
  };
}

export function wassupFifteenSecondCostAnswer(
  _product: { en: string; zh: string },
  zh: boolean,
  ctx: TemplateCostContext = {}
) {
  const { p480, p720, p1080, creditsPerUsd, usd720, packs } =
    wassupFifteenSecondCosts(ctx);
  const pricing = pricingUrl(zh, '/pricing');
  const subscribe = pricingUrl(zh, '/subscribe');
  if (zh) {
    return `一条 wassup in a minute 成片固定 15 秒。默认积分表上，480p 是 ${formatCreditCount(p480)} 积分，720p 是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd720}），1080p 是 ${formatCreditCount(p1080)} 积分。生成器会在开始前显示这个确切数字——换分辨率或模型，按钮上的数字会变。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricing}。月付 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），见 ${subscribe}。加购为 ${creditsPerUsd} 积分 = 1 美元。每次渲染都计费：开始前显示确切费用，失败的任务会退积分，没有免费试用。`;
  }
  return `A wassup in a minute clip is locked to 15 seconds. On the default credit table, 480p is ${formatCreditCount(p480)} credits, 720p is ${formatCreditCount(p720)} credits (about ${usd720} at ${creditsPerUsd} credits = $1), and 1080p is ${formatCreditCount(p1080)} credits. The generator shows that exact number before you start — change the resolution or the model and the button changes. One-time packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/month (${packs.monthlyStarterCredits} credits) at ${subscribe}. Top-ups are ${creditsPerUsd} credits = $1. Every render is paid: the generator shows the exact credit cost before you start, and failed renders are refunded automatically.`;
}

/** First sentences under the hub H1. The phrase “wassup in a minute” leads. */
export function wassupHubLead(zh: boolean, ctx: TemplateCostContext = {}) {
  const { p480, p720, p1080, creditsPerUsd, usd720 } =
    wassupFifteenSecondCosts(ctx);
  if (zh) {
    return `Wassup in a minute 是一条 15 秒、9:16 的白底摇摆：一至四张照片变成原创街服角色。默认 720p 是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd720}）；480p 是 ${formatCreditCount(p480)} 积分，1080p 是 ${formatCreditCount(p1080)} 积分，生成器会在开始前显示确切数字。渲染通常要 2–3 分钟。成片不含那首歌，发布时在 TikTok、Reels 或 Shorts 里另加。`;
  }
  return `Wassup in a minute is a 15-second, 9:16 sway on white: one to four photos become original streetwear characters. The default 720p charge is ${formatCreditCount(p720)} credits (about ${usd720} at ${creditsPerUsd} credits = $1); 480p is ${formatCreditCount(p480)} credits and 1080p is ${formatCreditCount(p1080)} credits, and the generator shows the exact number before you start. A render usually takes 2–3 minutes. The file does not include the song — add it in TikTok, Reels, or Shorts.`;
}
