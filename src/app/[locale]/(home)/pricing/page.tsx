import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { ViralPricingPage } from '@/shared/blocks/viral-home/pricing-page';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { getAllConfigs } from '@/shared/models/config';
import { getCurrentSubscription } from '@/shared/models/subscription';
import { getUserInfo } from '@/shared/models/user';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { getPricingPackFaq } from '@/shared/lib/pricing-copy';
import {
  buildOfferExtrasJsonLd,
  buildProductImageUrls,
} from '@/shared/lib/product-schema';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Pricing – ViralReel Credit Packs & Video Credits',
    description:
      'ViralReel one-time credit packs start at $9.9 (90 credits): Starter, Popular $19.9 (180), Creator $39.9 (480), and Max $69.9 (950). Top-ups are 12 credits = $1. Monthly plans start at $9.9/mo on the subscribe page. The credit table lists cost by resolution and duration.',
    keywords:
      'viralreel pricing, viralreel credits, ai video credit packs, viralreel subscribe, one-time video credits',
  },
  zh: {
    title: '定价 – ViralReel 积分包与视频生成积分',
    description:
      'ViralReel 一次性积分包 $9.9 起（90 积分）：Starter、Popular $19.9（180）、Creator $39.9（480）、Max $69.9（950）。加购为 12 积分 = 1 美元。月付套餐 $9.9/月起，见订阅页。积分对照表按清晰度和时长列出消耗。',
    keywords:
      'viralreel 定价, viralreel 积分, ai 视频积分包, viralreel 订阅, 一次性视频积分',
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
    openGraph: {
      type: 'website' as const,
      url: canonical,
      title: m.title,
      description: m.description,
      siteName: 'ViralReel',
      images: [`${envConfigs.app_url}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/og-image.jpg`],
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

  const zh = locale === 'zh';
  const m = META[zh ? 'zh' : 'en'];
  const appUrl = envConfigs.app_url;
  const pageUrl = zh ? `${appUrl}/zh/pricing` : `${appUrl}/pricing`;
  const packs = plans.filter((p) => p.interval === 'one-time');
  const faq = getPricingPackFaq(zh, creditsPerUsd);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: m.title,
        description: m.description,
        inLanguage: zh ? 'zh-CN' : 'en',
        isPartOf: { '@id': `${appUrl}/#website` },
      },
      {
        '@type': 'Product',
        '@id': `${pageUrl}#packs`,
        name: zh ? 'ViralReel 一次性积分包' : 'ViralReel credit packs',
        description: zh
          ? '一次性购买的 ViralReel 积分包：Starter、Popular、Creator、Max。月付套餐在订阅页。'
          : 'One-time ViralReel credit packs: Starter, Popular, Creator, and Max. Monthly plans are on the subscribe page.',
        brand: { '@type': 'Brand', name: 'ViralReel' },
        image: buildProductImageUrls(appUrl),
        ...(packs.length > 0 && {
          offers: packs.map((p) => ({
            '@type': 'Offer',
            name: p.product_name || p.title,
            price: (p.amount / 100).toFixed(2),
            priceCurrency: p.currency || 'USD',
            availability: 'https://schema.org/InStock',
            url: pageUrl,
            description: `${p.credits || 0} credits, one-time`,
            ...buildOfferExtrasJsonLd(),
          })),
        }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ViralPricingPage
        plans={plans}
        creditsPerUsd={creditsPerUsd}
        videoCosts={videoCosts}
        hasSubscription={!!currentSubscription}
      />
    </>
  );
}
