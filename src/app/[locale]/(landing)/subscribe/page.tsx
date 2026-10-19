import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';

import { SubscribeView } from '@/shared/blocks/viral-home/subscribe';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  buildAggregateRatingJsonLd,
  buildReviewsJsonLd,
} from '@/shared/lib/reviews';
import {
  buildOfferExtrasJsonLd,
  buildProductImageUrls,
} from '@/shared/lib/product-schema';
import { getCurrentSubscription } from '@/shared/models/subscription';
import { getUserInfo } from '@/shared/models/user';
import { getSubscribeFaq } from '@/shared/lib/pricing-copy';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Subscribe to ViralReel – AI Video Template Plans & Pricing',
    description:
      'ViralReel monthly plans: Starter $9.9/mo (90 credits), Plus $19.9/mo (200 credits), and Pro $39.9/mo (500 credits). All ViralReel AI video templates included. Cancel any time. One-time credit packs start at $9.9 on the pricing page.',
    keywords:
      'viralreel subscription, viralreel monthly plans, ai video template pricing, ai video generator plans',
  },
  zh: {
    title: '订阅 ViralReel – AI 视频模板套餐与价格',
    description:
      'ViralReel 月付套餐：Starter 每月 $9.9（90 积分）、Plus 每月 $19.9（200 积分）、Pro 每月 $39.9（500 积分）。包含全部 ViralReel AI 视频模板，可随时取消。一次性积分包 $9.9 起，见定价页。',
    keywords:
      'viralreel 订阅, viralreel 月付套餐, ai 视频模板价格, ai 视频生成器套餐',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const m = META[locale === 'zh' ? 'zh' : 'en'];
  const enUrl = `${envConfigs.app_url}/subscribe`;
  const zhUrl = `${envConfigs.app_url}/zh/subscribe`;
  const canonical = locale === 'zh' ? zhUrl : enUrl;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical,
      languages: { en: enUrl, zh: zhUrl, 'x-default': enUrl },
    },
    openGraph: {
      type: 'website' as const,
      url: canonical,
      title: m.title,
      description: m.description,
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

export default async function SubscribePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const zh = locale === 'zh';
  const m = META[zh ? 'zh' : 'en'];
  const appUrl = envConfigs.app_url;

  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));

  // credit top-ups require an active subscription
  const user = await getUserInfo();
  const currentSubscription = user ? await getCurrentSubscription(user.id) : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${appUrl}/subscribe#webpage`,
        url: `${appUrl}/subscribe`,
        name: m.title,
        description: m.description,
        inLanguage: locale,
        isPartOf: { '@id': `${appUrl}/#website` },
      },
      {
        '@type': 'Product',
        '@id': `${appUrl}/subscribe#product`,
        name: 'ViralReel Subscription',
        description: zh
          ? 'ViralReel AI 视频模板订阅：Starter、Plus 与 Pro，月付或年付。一次性积分包在定价页。'
          : 'ViralReel AI video template subscription: Starter, Plus, and Pro, monthly or yearly. One-time credit packs are on the pricing page.',
        brand: { '@type': 'Brand', name: 'ViralReel' },
        image: buildProductImageUrls(appUrl),
        aggregateRating: buildAggregateRatingJsonLd(),
        review: buildReviewsJsonLd(),
        ...(plans.some((p) => p.interval === 'month' || p.interval === 'year') && {
          offers: plans
            .filter((p) => p.interval === 'month' || p.interval === 'year')
            .map((p) => ({
              '@type': 'Offer',
              name: `${p.title} ${p.interval === 'year' ? 'Yearly' : 'Monthly'}`,
              price: (p.amount / 100).toFixed(2),
              priceCurrency: p.currency || 'USD',
              availability: 'https://schema.org/InStock',
              url: `${appUrl}/subscribe`,
              description: `${p.credits || 0} credits per ${p.interval === 'year' ? 'year' : 'month'}`,
              ...buildOfferExtrasJsonLd(),
            })),
        }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: getSubscribeFaq(zh, creditsPerUsd).map(([question, answer]) => ({
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
      <SubscribeView
        plans={plans}
        creditsPerUsd={creditsPerUsd}
        videoCosts={videoCosts}
        hasSubscription={!!currentSubscription}
      />
    </>
  );
}
