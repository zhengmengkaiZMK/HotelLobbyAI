import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { VossiBopHome } from '@/shared/blocks/vossi-bop/home';
import { VOSSI_BOP_FAQ } from '@/shared/blocks/vossi-bop/faq';
import { vossiBopTemplates } from '@/shared/blocks/vossi-bop/templates';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Vossi Bop Dance AI Video Generator & Template | ViralReel',
    description:
      'Create a Vossi Bop-inspired dance video with ViralReel. Upload your photo, choose the AI dance template, generate your video, and download your MP4.',
    keywords:
      'vossi bop dance ai video generator, vossi bop dance ai template, vossi bop dance video maker, ai vossi bop dance, vossi bop ai video, vossi bop dance tiktok, vossi bop trend, stormzy vossi bop ai, vossi bop capcut template, photo to dance ai video',
  },
  zh: {
    title: 'Vossi Bop Dance AI 视频生成器与模板 | ViralReel',
    description:
      '用 ViralReel 制作 Vossi Bop 风格的舞蹈视频。上传照片、选择 AI 舞蹈模板、生成你的视频并下载 MP4。',
    keywords:
      'vossi bop dance ai video generator, vossi bop ai 模板, vossi bop ai 视频, vossi bop 舞蹈 ai, vossi bop tiktok, 照片生成舞蹈视频, vossi bop 趋势',
  },
} as const;

/** Real preview durations of the eight template clips (seconds, rounded). */
const PREVIEW_DURATIONS: Record<string, number> = {
  'vossibop-angry-ginge': 9,
  'vossibop-ant': 10,
  'vossibop-benidorm': 9,
  'vossibop-clarkson': 9,
  'vossibop-hammond': 10,
  'vossibop-inbetweeners': 22,
  'vossibop-school-uniform': 9,
  'vossibop-simon-cowell': 10,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const m = META[locale === 'zh' ? 'zh' : 'en'];
  const canonical =
    locale === 'zh'
      ? `${envConfigs.app_url}/zh/vossi-bop-dance-ai-template`
      : `${envConfigs.app_url}/vossi-bop-dance-ai-template`;
  const enUrl = `${envConfigs.app_url}/vossi-bop-dance-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/vossi-bop-dance-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/vossi-bop-dance-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/vossi-bop-dance-ai-og.jpg`],
    },
  };
}

export default async function VossiBopDanceAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = VOSSI_BOP_FAQ[zh ? 'zh' : 'en'];
  const pageUrl = zh ? `${envConfigs.app_url}/zh/vossi-bop-dance-ai-template` : `${envConfigs.app_url}/vossi-bop-dance-ai-template`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: vossiBopTemplates.map((tpl, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoObject',
        name: `${tpl.name[0]} — Vossi Bop Dance AI Template | ViralReel`,
        description: META[zh ? 'zh' : 'en'].description,
        thumbnailUrl: [`${envConfigs.app_url}/templates/${tpl.id}-poster.jpg`],
        contentUrl: `${envConfigs.app_url}/templates/${tpl.id}.mp4`,
        uploadDate: '2026-11-07',
        duration: `PT${PREVIEW_DURATIONS[tpl.id] ?? 10}S`,
        isFamilyFriendly: true,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTemplateSoftwareJsonLd({
          appUrl: envConfigs.app_url,
          pageUrl,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <VossiBopHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
