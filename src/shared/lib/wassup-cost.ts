import { CANONICAL_PRICING, type TemplateCostContext } from '@/shared/lib/pricing-copy';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  formatCreditCount,
  usdFromCredits,
  videoCreditCost,
} from '@/shared/lib/video-yield';

/**
 * Wassup in a minute is locked to 15 seconds in the generator
 * (`familyFixedDurations.wassup_in_a_minute`). The default button is 720p.
 * Those cells come from the same Wan reference table as pricing
 * (`getVideoCostTable`): 0.6 / 1.2 / 2.4 credits per second, rounded up.
 * At the code defaults that is 9 / 18 / 36 credits. The live button wins if
 * an admin rate or a different model changes the charge.
 * Do not quote 8-second rows, or the retired 32 / 40 / 90 figures, for this clip.
 */

function pricingUrl(zh: boolean, path: '/pricing' | '/subscribe') {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

export function wassupFifteenSecondCosts(ctx: TemplateCostContext = {}) {
  const table = ctx.videoCosts?.length ? ctx.videoCosts : getVideoCostTable();
  const creditsPerUsd =
    ctx.creditsPerUsd && ctx.creditsPerUsd > 0
      ? ctx.creditsPerUsd
      : CANONICAL_PRICING.creditsPerUsd;
  const p480 = videoCreditCost(table, '480p', 15);
  const p720 = videoCreditCost(table, '720p', 15);
  const p1080 = videoCreditCost(table, '1080p', 15);
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
    return `一条 wassup in a minute 成片固定 15 秒。默认积分表上，480p 是 ${formatCreditCount(p480)} 积分，720p 是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd720}），1080p 是 ${formatCreditCount(p1080)} 积分。生成器会在开始前显示这个确切数字——换分辨率或模型，按钮上的数字会变。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricing}。月付 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），见 ${subscribe}。加购为 ${creditsPerUsd} 积分 = 1 美元。新账号的免费积分够先做一条模板视频，不是永远免费。`;
  }
  return `A wassup in a minute clip is locked to 15 seconds. On the default credit table, 480p is ${formatCreditCount(p480)} credits, 720p is ${formatCreditCount(p720)} credits (about ${usd720} at ${creditsPerUsd} credits = $1), and 1080p is ${formatCreditCount(p1080)} credits. The generator shows that exact number before you start — change the resolution or the model and the button changes. One-time packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/month (${packs.monthlyStarterCredits} credits) at ${subscribe}. Top-ups are ${creditsPerUsd} credits = $1. New accounts start with free credits for a first template video. That is not free forever.`;
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
