import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { ViralHub } from '@/shared/blocks/viral-home/hub';
import { buildHubFaqJsonLd } from '@/shared/lib/hub-faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  buildOfferExtrasJsonLd,
  buildProductImageUrls,
} from '@/shared/lib/product-schema';
import {
  getCreditsPerUsdFromConfigs,
  getPricingPlans,
} from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title:
      'ViralReel – AI Viral Video Templates | Make Trend Videos from Photos',
    description:
      'Pick a trending template, upload your photos, and export a 9:16 video in about a minute — auto lip-sync and gestures included. No prompts. No editing apps.',
    keywords:
      'viralreel, ai viral video templates, ai video from photos, trending ai video template, make trend videos',
  },
  zh: {
    title: 'ViralReel – AI 爆火视频模板 | 用照片做趋势视频',
    description:
      '选一个正在流行的模板，上传照片，大约一分钟导出 9:16 竖屏视频——自动口型同步和手势都包含在内。不用写提示词，也不用剪辑软件。',
    keywords: 'viralreel, ai 视频模板, 爆火视频模板, 照片生成视频, 趋势视频',
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
    locale === 'zh' ? `${envConfigs.app_url}/zh` : envConfigs.app_url;
  const enUrl = envConfigs.app_url;
  const zhUrl = `${envConfigs.app_url}/zh`;
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const appUrl = envConfigs.app_url;
  const zh = locale === 'zh';
  const faqJsonLd = buildHubFaqJsonLd(zh, { videoCosts, creditsPerUsd });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${appUrl}/#organization`,
        name: 'ViralReel',
        url: appUrl,
        logo: `${appUrl}/logo.png`,
        email: 'support@viralreel.app',
        sameAs: [
          'https://www.producthunt.com/products/viralreel',
          'https://news.ycombinator.com/item?id=49952515',
          'https://launchbuff.com/products/viralreel-0k8f3r',
          'https://findly.tools/viralreel',
          'https://indieai.directory/tools/viralreel/',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@viralreel.app',
            availableLanguage: ['en', 'zh'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${appUrl}/#website`,
        name: 'ViralReel',
        url: appUrl,
        publisher: { '@id': `${appUrl}/#organization` },
        description:
          'Make viral AI videos from your photos. Pick a trending template, upload photos, and export a 9:16 video in about a minute.',
        inLanguage: locale,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${appUrl}/#app`,
        name: 'ViralReel',
        url: appUrl,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        brand: { '@id': `${appUrl}/#organization` },
        description:
          'Template-first AI video generator. Pick a trending template, upload photos, and export a 9:16 video with auto lip-sync and gestures. No prompts.',
        featureList: [
          'Trending AI video templates',
          'Photo to video, no prompt required',
          'Auto lip-sync and gestures',
          '9:16 export for TikTok, Reels, and Shorts',
          'Credit cost shown before you generate',
        ],
        image: buildProductImageUrls(appUrl),
        ...(plans.length > 0 && {
          offers: plans
            .filter(
              (p) =>
                p.interval === 'one-time' ||
                p.interval === 'month' ||
                p.interval === 'year'
            )
            .map((p) => ({
              '@type': 'Offer',
              name: p.product_name || 'ViralReel Plan',
              price: (p.amount / 100).toFixed(2),
              priceCurrency: p.currency || 'USD',
              availability: 'https://schema.org/InStock',
              url:
                p.interval === 'one-time'
                  ? `${appUrl}/pricing`
                  : `${appUrl}/subscribe`,
              description:
                p.interval === 'one-time'
                  ? `${p.credits} credits, one-time`
                  : `${p.credits} credits per ${p.interval}`,
              ...buildOfferExtrasJsonLd(),
            })),
        }),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ViralHub plans={plans} creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
