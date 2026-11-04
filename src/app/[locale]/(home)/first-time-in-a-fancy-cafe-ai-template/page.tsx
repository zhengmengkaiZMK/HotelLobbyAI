import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { FancyCafeHome } from '@/shared/blocks/fancy-cafe/home';
import { FANCY_CAFE_FAQ } from '@/shared/blocks/fancy-cafe/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Your First Time in a Fancy Cafe AI Template – Two Photos Into the Viral Cafe Scene',
    description:
      'Fan-made fancy cafe template. Two photos put you in the viral concrete-cafe scene — the tiny table, the walk-in, the sideways look, the climb-down. Six casts, 15-second 9:16 MP4, renders in minutes, free credits for new accounts. Not affiliated with Steve Lacy, CapCut, or TikTok.',
    keywords:
      'your first time in a fancy cafe, first time in a fancy cafe, fancy cafe ai, fancy cafe template, fancy cafe video, fancy cafe meme, fancy cafe trend, fancy cafe filter, fancy cafe capcut, fancy cafe tiktok, pov fancy cafe, fancy cafe song, oh yeah steve lacy, fancy cafe generator, fancy cafe dog',
  },
  zh: {
    title: 'Your First Time in a Fancy Cafe AI 模板：两张照片走进爆火咖啡馆场景',
    description:
      '粉丝向 fancy cafe 模板。两张照片把你放进爆火的水泥咖啡馆场景——小桌、进店、那个眼神、爬下来。六套阵容，15 秒 9:16 MP4，几分钟出片，新账号送免费积分。与 Steve Lacy、CapCut 或 TikTok 无关。',
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
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = FANCY_CAFE_FAQ[zh ? 'zh' : 'en'];

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
