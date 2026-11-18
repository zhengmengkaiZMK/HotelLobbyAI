import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { GiveItAllHome } from '@/shared/blocks/give-it-all/home';
import { GIVE_IT_ALL_FAQ } from '@/shared/blocks/give-it-all/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Give It All AI Template – Rap BigXthaPlug\'s Verse at the Hanging Mic',
    description:
      'Give It All AI from one photo: you at the hanging vintage microphone of BigXthaPlug\'s From The Block performance, packed cinema lobby behind you. Seven casts, 15-second 9:16 MP4, no prompt. Not affiliated with BigXthaPlug, 4 Shooters Only, TikTok, or CapCut.',
    keywords:
      'give it all ai, give it all ai video, bigxthaplug give it all ai, give it all to me ai, give it all ai trend, bigxthaplug from the block, give it all ai generator, hanging mic ai video, give it all ai template, big x give it all rap, give it all tiktok trend',
  },
  zh: {
    title: 'Give It All AI 模板：一张照片站上 BigXthaPlug 的挂麦',
    description:
      '一张照片变成 Give It All AI 视频：你站在 BigXthaPlug《Give It All》From The Block 演出的挂式麦克风前，身后是爆满的影院大厅。七套阵容，15 秒 9:16 MP4，无需提示词。与 BigXthaPlug、4 Shooters Only、TikTok 和 CapCut 无关联。',
    keywords:
      'give it all ai, give it all ai 视频, bigxthaplug give it all ai, give it all to me ai, 挂麦 ai 视频, from the block ai, give it all ai 生成器, big x give it all, give it all 趋势, 照片生成 ai 说唱视频',
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
      ? `${envConfigs.app_url}/zh/give-it-all-ai-template`
      : `${envConfigs.app_url}/give-it-all-ai-template`;
  const enUrl = `${envConfigs.app_url}/give-it-all-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/give-it-all-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/give-it-all-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/give-it-all-ai-og.jpg`],
    },
  };
}

export default async function GiveItAllAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = GIVE_IT_ALL_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/give-it-all-ai-template` : `${envConfigs.app_url}/give-it-all-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <GiveItAllHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/give-it-all-ai-template` : `${envConfigs.app_url}/give-it-all-ai-template`} />
    </>
  );
}
