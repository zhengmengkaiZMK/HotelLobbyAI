import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { locales } from '@/config/locale';
import { FancyCafeHome } from '@/shared/blocks/fancy-cafe/home';
import { getFancyCafeFaq } from '@/shared/blocks/fancy-cafe/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

// ISR pilot: full-page HTML cached in R2 (via OpenNext incremental cache).
// First request renders and caches; subsequent hits serve cached HTML in
// ~100ms instead of a 4-40s full SSR. Marketing page — no user-specific
// content in the shell; pricing snapshot refreshes on revalidate.
export const revalidate = 300;

// Enumerate the [locale] dynamic segment so Next can prerender this page at
// build time and serve ISR HTML (revalidated every 300s). Without this, the
// dynamic segment forces on-demand SSR for every request.
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const META = {
  en: {
    title: 'Your First Time in a Fancy Cafe AI Template – Two Photos Into the Viral Cafe Scene',
    description:
      'Create a First Time in a Fancy Cafe AI video from two photos. Choose a cafe scene and generate a 15-second 9:16 MP4 in minutes.',
    keywords:
      'your first time in a fancy cafe, first time in a fancy cafe, fancy cafe ai, fancy cafe template, fancy cafe video, fancy cafe meme, fancy cafe trend, fancy cafe filter, fancy cafe capcut, fancy cafe tiktok, pov fancy cafe, fancy cafe song, oh yeah steve lacy, fancy cafe generator, fancy cafe dog',
  },
  zh: {
    title: 'Your First Time in a Fancy Cafe AI 模板：两张照片走进爆火咖啡馆场景',
    description:
      '两张照片制作 Your First Time in a Fancy Cafe AI 视频。选咖啡馆场景，几分钟生成 15 秒 9:16 MP4。',
    keywords:
      'your first time in a fancy cafe, first time in a fancy cafe, fancy cafe, fancy cafe ai, fancy cafe 模板, fancy cafe 视频, fancy cafe 梗, fancy cafe 趋势, fancy cafe 滤镜, fancy cafe tiktok, pov 咖啡馆, fancy cafe 原声, 咖啡馆 坐桌 梗, fancy cafe 生成器, fancy cafe 狗狗',
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
    locale === 'zh'
      ? `${envConfigs.app_url}/zh/first-time-in-a-fancy-cafe-ai-template`
      : `${envConfigs.app_url}/first-time-in-a-fancy-cafe-ai-template`;
  const enUrl = `${envConfigs.app_url}/first-time-in-a-fancy-cafe-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/first-time-in-a-fancy-cafe-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/first-time-in-a-fancy-cafe-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/first-time-in-a-fancy-cafe-ai-og.jpg`],
    },
  };
}

export default async function FirstTimeInAFancyCafeAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  // Cached reads (unstable_cache, 3 min) instead of getAllConfigs(true): the
  // fresh read hits D1 on every request and dominated this page's TTFB.
  // Displayed prices may lag admin edits by up to 3 minutes; billing paths
  // still read fresh configs.
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = getFancyCafeFaq(zh, { creditsPerUsd, videoCosts });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTemplateSoftwareJsonLd({
          appUrl: envConfigs.app_url,
          pageUrl: zh ? `${envConfigs.app_url}/zh/first-time-in-a-fancy-cafe-ai-template` : `${envConfigs.app_url}/first-time-in-a-fancy-cafe-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <FancyCafeHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/first-time-in-a-fancy-cafe-ai-template` : `${envConfigs.app_url}/first-time-in-a-fancy-cafe-ai-template`} />
    </>
  );
}
