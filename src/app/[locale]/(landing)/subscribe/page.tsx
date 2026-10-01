import { getTranslations, setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';

import { SubscribeView } from '@/shared/blocks/viral-home/subscribe';
import { getPricingPlans, getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { PricingItem } from '@/shared/types/blocks/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Subscribe to ViralReel – AI Video Template Plans & Pricing',
    description:
      'ViralReel subscription plans: Plus $19.9/mo and Pro $39.9/mo. All Hotel Lobby AI templates included, auto lip-sync, watermark-free export. Cancel any time.',
    keywords:
      'viralreel subscription, hotel lobby ai template pricing, ai video generator plans, ai video subscription',
  },
  zh: {
    title: '订阅 ViralReel – AI 视频模板套餐与价格',
    description:
      'ViralReel 订阅套餐：Plus 每月 $19.9、Pro 每月 $39.9。包含全部 Hotel Lobby AI 模板、自动口型同步、无水印导出，可随时取消。',
    keywords:
      'viralreel 订阅, hotel lobby ai template 价格, ai 视频生成器套餐, ai 视频订阅',
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

  const t = await getTranslations('pages.pricing');
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();

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
          ? 'ViralReel AI 视频模板订阅：Plus 与 Pro 套餐，月付或年付。'
          : 'ViralReel AI video template subscription: Plus and Pro plans, monthly or yearly.',
        brand: { '@type': 'Brand', name: 'ViralReel' },
        ...(plans.length > 0 && {
          offers: plans.slice(0, 5).map((p) => ({
            '@type': 'Offer',
            name: `${p.title} ${p.interval === 'year' ? 'Yearly' : 'Monthly'}`,
            price: (p.amount / 100).toFixed(2),
            priceCurrency: p.currency || 'USD',
            availability: 'https://schema.org/InStock',
            url: `${appUrl}/subscribe`,
          })),
        }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: zh ? '可以随时取消吗？' : 'Can I cancel any time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: zh
                ? '可以。在账单页一键取消，当前周期结束前仍可继续使用。'
                : 'Yes. Cancel in one click from your billing page — you keep access until the end of the current period.',
            },
          },
          {
            '@type': 'Question',
            name: zh ? '生成的视频归我所有吗？' : 'Do I own the videos I make?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: zh
                ? '是的。生成的视频完全归你，可发布到任何平台——付费方案无水印、无附加条件。'
                : 'Yes. Videos you generate are yours to post anywhere — paid plans are watermark-free with no strings attached.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubscribeView plans={plans} creditsPerUsd={creditsPerUsd} />
    </>
  );
}
