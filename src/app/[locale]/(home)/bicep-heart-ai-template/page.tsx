import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { BicepHeartHome } from '@/shared/blocks/bicep-heart/home';
import { BICEP_HEART_FAQ } from '@/shared/blocks/bicep-heart/faq';
import { bicepHeartTemplates } from '@/shared/blocks/bicep-heart/templates';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Bicep Heart Trend AI Template – Make the Viral Flex-and-Heart Video',
    description:
      'Bicep heart trend AI video from one photo. Nine sets — Gym Buff Heart, Everyday Heart, Cat Bicep Heart, Dog Bicep Heart, Original Trend, plus four new trend replays. 7-second 9:16 MP4, no prompt, silent export; add the trend sound in the app.',
    keywords:
      'bicep heart trend, bicep heart trend ai, bicep heart trend ai video, bicep heart trend template, bicep heart trend generator, bicep heart, bicep heart ai video, bicep heart tiktok, bicep heart meme, send bicep hearts, bicep heart song, bicep heart cat, bicep heart pet',
  },
  zh: {
    title: 'Bicep Heart Trend AI 模板：一张照片，比出一颗肱二头肌小心心',
    description:
      'Bicep heart trend AI 视频只要一张照片。健身猛男、日常小心心、猫咪比心、狗狗比心、原梗复刻，外加四款新复刻，共九套阵容。7 秒 9:16 MP4，无需提示词，导出无声；热梗原声在 App 里加。',
    keywords:
      'bicep heart trend, bicep heart trend ai, bicep heart trend 模板, bicep heart trend 视频, bicep heart, bicep heart 梗, bicep heart ai, 比心 弯举 ai, send bicep hearts, bicep heart 原声, bicep heart 猫, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/bicep-heart-ai-template`
      : `${envConfigs.app_url}/bicep-heart-ai-template`;
  const enUrl = `${envConfigs.app_url}/bicep-heart-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/bicep-heart-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/bicep-heart-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/bicep-heart-ai-og.jpg`],
    },
  };
}

export default async function BicepHeartAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const configs = await getAllConfigs(true);
  const videoCosts = getVideoCostTable(configs);
  const faq = BICEP_HEART_FAQ[zh ? 'zh' : 'en'];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  // VideoObject JSON-LD for the nine template preview videos.
  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: bicepHeartTemplates.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'VideoObject',
        name: `${item.name[zh ? 1 : 0]} — bicep heart trend template preview`,
        description: `Preview of the ${item.name[zh ? 1 : 0]} bicep heart trend AI template on ViralReel: one photo becomes a 7-second flex-and-heart video.`,
        thumbnailUrl: [`${envConfigs.app_url}/templates/${item.id}-poster.jpg`],
        contentUrl: `${envConfigs.app_url}/templates/${item.id}.mp4`,
        uploadDate: '2026-11-05',
        duration: 'PT7S',
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
          pageUrl: zh ? `${envConfigs.app_url}/zh/bicep-heart-ai-template` : `${envConfigs.app_url}/bicep-heart-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <BicepHeartHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/bicep-heart-ai-template` : `${envConfigs.app_url}/bicep-heart-ai-template`} />
    </>
  );
}
