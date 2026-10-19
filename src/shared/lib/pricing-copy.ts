/**
 * Canonical ViralReel prices for FAQ, blog-adjacent copy, and schema.
 * One-time packs live on /pricing. Monthly plans live on /subscribe.
 * Keep both surfaces in any "how much does it cost" answer.
 */

export const CANONICAL_PRICING = {
  packStarterPrice: '$9.9',
  packStarterCredits: 90,
  packPopularPrice: '$19.9',
  packPopularCredits: 180,
  packCreatorPrice: '$39.9',
  packCreatorCredits: 480,
  packMaxPrice: '$69.9',
  packMaxCredits: 950,
  monthlyStarterPrice: '$9.9',
  monthlyStarterCredits: 90,
  plusPrice: '$19.9',
  plusCredits: 200,
  proPrice: '$39.9',
  proCredits: 500,
  creditsPerUsd: 12,
} as const;

export interface MonthlyPricing {
  starterPrice: string;
  starterCredits: number;
  plusPrice: string;
  plusCredits: number;
  proPrice: string;
  proCredits: number;
}

const defaultMonthly: MonthlyPricing = {
  starterPrice: CANONICAL_PRICING.monthlyStarterPrice,
  starterCredits: CANONICAL_PRICING.monthlyStarterCredits,
  plusPrice: CANONICAL_PRICING.plusPrice,
  plusCredits: CANONICAL_PRICING.plusCredits,
  proPrice: CANONICAL_PRICING.proPrice,
  proCredits: CANONICAL_PRICING.proCredits,
};

function pricingUrl(zh: boolean, path: '/pricing' | '/subscribe') {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

/** Shared "how much does this template cost" answer for template FAQs. */
export function templateHowMuchAnswer(
  product: { en: string; zh: string },
  monthly: MonthlyPricing = defaultMonthly
): { en: string; zh: string } {
  const packs = CANONICAL_PRICING;
  return {
    en: `ViralReel charges credits. The ${product.en} generator shows the exact cost for the resolution and duration you pick before you start. One-time credit packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) on ${pricingUrl(false, '/pricing')}. Monthly plans start at ${monthly.starterPrice}/mo (${monthly.starterCredits} credits) on ${pricingUrl(false, '/subscribe')}; Plus is ${monthly.plusPrice}/mo (${monthly.plusCredits} credits) and Pro is ${monthly.proPrice}/mo (${monthly.proCredits} credits). Top-ups are ${packs.creditsPerUsd} credits = $1. Failed or canceled generations are refunded automatically.`,
    zh: `ViralReel 按积分计费。${product.zh}生成器会在开始之前，按所选分辨率和时长显示本次消耗。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricingUrl(true, '/pricing')}。月付套餐 ${monthly.starterPrice}/月起（每月 ${monthly.starterCredits} 积分），见 ${pricingUrl(true, '/subscribe')}；Plus 为 ${monthly.plusPrice}/月（${monthly.plusCredits} 积分），Pro 为 ${monthly.proPrice}/月（${monthly.proCredits} 积分）。加购为 ${packs.creditsPerUsd} 积分 = 1 美元。失败或取消的生成会自动退回积分。`,
  };
}

export function getPricingPackFaq(
  zh: boolean,
  creditsPerUsd: number
): [string, string][] {
  const packs = CANONICAL_PRICING;
  const pricing = pricingUrl(zh, '/pricing');
  const subscribe = pricingUrl(zh, '/subscribe');
  if (zh) {
    return [
      [
        '一次性积分包可以取消吗？',
        `不能按订阅那样取消，因为这一页的积分包是一次性付款，没有续费。Starter ${packs.packStarterPrice}（${packs.packStarterCredits} 积分）、Popular ${packs.packPopularPrice}（${packs.packPopularCredits} 积分）、Creator ${packs.packCreatorPrice}（${packs.packCreatorCredits} 积分）、Max ${packs.packMaxPrice}（${packs.packMaxCredits} 积分）。月付套餐在订阅页：Starter ${packs.monthlyStarterPrice}/月（每月 ${packs.monthlyStarterCredits} 积分）、Plus ${packs.plusPrice}/月（${packs.plusCredits} 积分）、Pro ${packs.proPrice}/月（${packs.proCredits} 积分），见 ${subscribe}。月付可以在账单页取消，当前周期结束前仍可使用。`,
      ],
      [
        '没用完的积分会过期吗？',
        '一次性积分包里的积分不会过期。月付积分跟随该账单周期。生成失败或取消时，本次扣除的积分会退回。',
      ],
      [
        '积分加购怎么算？月付在哪里？',
        `加购为 ${creditsPerUsd} 积分 = 1 美元，加在积分包或月付套餐之上。生成器会在开始前按分辨率和时长显示本次消耗；本页对照表列出 480p、720p、1080p 各时长的积分。月付套餐见 ${subscribe}，一次性积分包见 ${pricing}。`,
      ],
    ];
  }
  return [
    [
      'Can I cancel a one-time credit pack?',
      `There is nothing to cancel. Packs on this page are a single payment: Starter ${packs.packStarterPrice} (${packs.packStarterCredits} credits), Popular ${packs.packPopularPrice} (${packs.packPopularCredits} credits), Creator ${packs.packCreatorPrice} (${packs.packCreatorCredits} credits), and Max ${packs.packMaxPrice} (${packs.packMaxCredits} credits). Monthly plans are on the subscribe page: Starter ${packs.monthlyStarterPrice}/mo (${packs.monthlyStarterCredits} credits), Plus ${packs.plusPrice}/mo (${packs.plusCredits} credits), and Pro ${packs.proPrice}/mo (${packs.proCredits} credits), at ${subscribe}. You can cancel a monthly plan from billing and keep access until the period ends.`,
    ],
    [
      'Do unused credits expire?',
      'Credits from a one-time pack do not expire. Monthly credits follow that billing period. If a generation fails or is canceled, those credits are returned.',
    ],
    [
      'How do top-ups work, and where are monthly plans?',
      `Top-ups are ${creditsPerUsd} credits = $1. They add credits on top of a pack or a monthly plan. The generator shows the exact cost for the resolution and duration before you start, and the table on this page lists 480p, 720p, and 1080p by length. Monthly plans are at ${subscribe}. One-time packs are at ${pricing}.`,
    ],
  ];
}

export function getSubscribeFaq(
  zh: boolean,
  creditsPerUsd: number
): [string, string][] {
  const packs = CANONICAL_PRICING;
  const pricing = pricingUrl(zh, '/pricing');
  const subscribe = pricingUrl(zh, '/subscribe');
  if (zh) {
    return [
      [
        '可以随时取消吗？',
        '可以。在账单页一键取消，当前周期结束前仍可继续使用。一次性积分包不是订阅，没有续费可取消。',
      ],
      [
        '没用完的积分怎么办？',
        `每月积分随账单周期刷新，也可以随时加购——${creditsPerUsd} 积分 = 1 美元。一次性积分包里的积分不会过期，见 ${pricing}。`,
      ],
      [
        '有免费试用吗？',
        '每个新账号都赠送免费积分——不花一分钱就能先做出第一条 ViralReel 模板视频。',
      ],
      [
        '只想买一次积分，不订阅可以吗？',
        `可以。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricing}。月付从 ${packs.monthlyStarterPrice}/月（每月 ${packs.monthlyStarterCredits} 积分）起，见 ${subscribe}。`,
      ],
      [
        '生成的视频归我所有吗？',
        '是的。生成的视频完全归你，可发布到任何平台——付费方案无水印、无附加条件。',
      ],
    ];
  }
  return [
    [
      'Can I cancel any time?',
      'Yes. Cancel in one click from your billing page — you keep access until the end of the current period. One-time credit packs are not a subscription, so there is no renewal to cancel.',
    ],
    [
      'What happens to unused credits?',
      `Monthly credits refresh with each billing cycle, and you can top up extra credits any time at ${creditsPerUsd} credits = $1. Credits from a one-time pack do not expire; those packs are at ${pricing}.`,
    ],
    [
      'Do you offer a free trial?',
      'Every new account starts with free credits — enough to render your first ViralReel template video before you pay.',
    ],
    [
      'Can I buy credits once instead of subscribing?',
      `Yes. One-time credit packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/mo (${packs.monthlyStarterCredits} credits) at ${subscribe}.`,
    ],
    [
      'Do I own the videos I make?',
      'Yes. Videos you generate are yours to post anywhere — paid plans are watermark-free with no strings attached.',
    ],
  ];
}
