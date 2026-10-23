import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { BbyWowHome } from '@/shared/blocks/bby-wow/home';
import { BBY_FAQ } from '@/shared/blocks/bby-wow/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Bby Wow AI Dance Template – Make the Viral Bread-Bite Party Video',
    description:
      'Turn one photo into the viral Bby Wow AI dance: walk into the party, take a big bite of a sweet bread, stare into the lens, and dance away. Suit Original, White Tee, and Staff Polo templates. Generate a vertical video in about a minute.',
    keywords:
      'bby wow ai dance, bby wow ai, bby wow guy ai, bby wow dance ai video, dime dime baby ai, bread bite party ai video, ai dance video from photo',
  },
  zh: {
    title: 'Bby Wow AI 跳舞模板：一张照片变成咬面包派对爆火视频',
    description:
      '把一张照片放进 Bby Wow 爆火玩法：走进派对、咬一大口甜面包、瞪镜头对视、跳舞离场。西装原版、白 T 派对版和黑 Polo 版三个模板，大约一分钟生成竖屏视频。',
    keywords:
      'bby wow ai dance, bby wow ai, bby wow ai 视频, bby wow 跳舞模板, 咬面包派对 ai 视频, 照片生成跳舞视频',
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
      ? `${envConfigs.app_url}/zh/bby-wow-ai-dance-template`
      : `${envConfigs.app_url}/bby-wow-ai-dance-template`;
  const enUrl = `${envConfigs.app_url}/bby-wow-ai-dance-template`;
  const zhUrl = `${envConfigs.app_url}/zh/bby-wow-ai-dance-template`;
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
      images: [`${envConfigs.app_url}/templates/bby-wow-ai-dance-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/bby-wow-ai-dance-og.jpg`],
    },
  };
}

export default async function BbyWowAiDanceTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = BBY_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/bby-wow-ai-dance-template` : `${envConfigs.app_url}/bby-wow-ai-dance-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <BbyWowHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
