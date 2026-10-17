import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { ViralPricingPage } from '@/shared/blocks/viral-home/pricing-page';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { getAllConfigs } from '@/shared/models/config';
import { getCurrentSubscription } from '@/shared/models/subscription';
import { getUserInfo } from '@/shared/models/user';
import { getVideoCostTable } from '@/shared/lib/video-cost';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Pricing – ViralReel Plans & Video Generation Credits',
    description:
      'Simple pricing for ViralReel: one-time credit packs from $9.9, Plus and Pro monthly plans, credit top-ups, and the full image-to-video credit table by resolution and duration. Failed or canceled jobs are refunded.',
    keywords:
      'viralreel pricing, ai video generator pricing, hotel lobby ai credits, burning bridges credits, video generation credit cost',
  },
  zh: {
    title: '定价 – ViralReel 套餐与视频生成积分对照',
    description:
      'ViralReel 定价简单透明：一次性积分套餐 $9.9 起、Plus / Pro 月付套餐、积分加购，以及按清晰度和时长的图生视频积分对照表。任务失败或取消自动退回积分。',
    keywords:
      'viralreel 定价, ai 视频生成价格, hotel lobby 积分, burning bridges 积分, 视频生成积分对照表',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const m = META[locale === 'zh' ? 'zh' : 'en'];
  const canonical =
    locale === 'zh' ? `${envConfigs.app_url}/zh/pricing` : `${envConfigs.app_url}/pricing`;
  const enUrl = `${envConfigs.app_url}/pricing`;
  const zhUrl = `${envConfigs.app_url}/zh/pricing`;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        zh: zhUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true)); // fresh read: price edits take effect immediately

  // credit top-ups are exclusive to subscribers — only render the
  // top-up section for users with an active subscription
  const user = await getUserInfo();
  const currentSubscription = user ? await getCurrentSubscription(user.id) : null;

  return (
    <ViralPricingPage
      plans={plans}
      creditsPerUsd={creditsPerUsd}
      videoCosts={videoCosts}
      hasSubscription={!!currentSubscription}
    />
  );
}
