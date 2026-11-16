import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { DanceWithSantaHome } from '@/shared/blocks/dance-with-santa/home';
import { DANCE_WITH_SANTA_FAQ } from '@/shared/blocks/dance-with-santa/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Dance with Santa AI Template – Your Photo Dancing Next to Santa Claus',
    description:
      'Dance with Santa AI from one photo: you and Santa Claus dancing side by side on a red carpet in a Christmas hall. Eight casts, 15-second 9:16 MP4, no CapCut needed. Not affiliated with TikTok, CapCut, or @sarahicat15.',
    keywords:
      'dance with santa, dance with santa ai, dance with santa template, dance with santa claus, dancing with santa, bailando con santa, bailando con santa claus, santa dance trend, dance with santa ai video, dance with santa tiktok, dance with santa generator, dance with santa capcut, santa dance ai',
  },
  zh: {
    title: 'Dance with Santa AI 模板：一张照片和圣诞老人共舞',
    description:
      '一张照片变成 Dance with Santa AI 视频：你在圣诞大厅的红毯上和圣诞老人并肩共舞。八套阵容，15 秒 9:16 MP4，无需 CapCut。与 TikTok、CapCut 和 @sarahicat15 无关联。',
    keywords:
      'dance with santa, dance with santa ai, dance with santa 模板, dance with santa claus, dancing with santa, bailando con santa, 和圣诞老人共舞, santa dance trend, dance with santa ai 视频, 圣诞老人 ai 舞蹈, dance with santa tiktok, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/dance-with-santa-ai-template`
      : `${envConfigs.app_url}/dance-with-santa-ai-template`;
  const enUrl = `${envConfigs.app_url}/dance-with-santa-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/dance-with-santa-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/dance-with-santa-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/dance-with-santa-ai-og.jpg`],
    },
  };
}

export default async function DanceWithSantaAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = DANCE_WITH_SANTA_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/dance-with-santa-ai-template` : `${envConfigs.app_url}/dance-with-santa-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <DanceWithSantaHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/dance-with-santa-ai-template` : `${envConfigs.app_url}/dance-with-santa-ai-template`} />
    </>
  );
}
