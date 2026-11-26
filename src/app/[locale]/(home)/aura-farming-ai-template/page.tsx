import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { AuraFarmingHome } from '@/shared/blocks/aura-farming/home';
import { AURA_FARMING_FAQ } from '@/shared/blocks/aura-farming/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Aura Farming AI Template – Lead the Dragon Boat Bow From One Photo',
    description:
      'Make the aura farming AI trend from one photo: clap and sway at the tip of a red racing dragon boat while the crew in orange vests rows behind you, ending with your arms swung wide. Fixed 10-second 9:16 clip, renders in a few minutes, cost shown before you start. Not affiliated with TikTok, Rayyan Arkan Dikha, or the original creators.',
    keywords:
      'aura farming ai, aura farming ai video, aura farming template, aura farming trend, dragon boat ai video, boat kid ai, rayyan arkan dikha ai, aura farming generator, aura farming dance ai, pacu jalur ai, dragon boat clap ai, aura farming tiktok',
  },
  zh: {
    title: 'Aura Farming AI 模板：一张照片站上龙舟船头领拍',
    description:
      '用一张照片制作 aura farming AI 梗视频：站在红色龙舟最船头淡定拍手、左右摇摆，身后橙色救生衣划手奋力划桨，片尾侧身张开双臂。固定 10 秒 9:16，几分钟出片，生成前显示费用。与 TikTok、Rayyan Arkan Dikha 及原作者无关。',
    keywords:
      'aura farming ai, aura farming 模板, aura farming 视频, 龙舟船头 ai, 船头少年 ai, aura farming 梗, 气场刷分 ai, pacu jalur ai, 龙舟拍手 ai, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/aura-farming-ai-template`
      : `${envConfigs.app_url}/aura-farming-ai-template`;
  const enUrl = `${envConfigs.app_url}/aura-farming-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/aura-farming-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/aura-farming-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/aura-farming-ai-og.jpg`],
    },
  };
}

export default async function AuraFarmingAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = AURA_FARMING_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/aura-farming-ai-template` : `${envConfigs.app_url}/aura-farming-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <AuraFarmingHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/aura-farming-ai-template` : `${envConfigs.app_url}/aura-farming-ai-template`} />
    </>
  );
}
