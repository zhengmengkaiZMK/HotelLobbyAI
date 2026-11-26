import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { HandOfGodHome } from '@/shared/blocks/hand-of-god/home';
import { HAND_OF_GOD_FAQ } from '@/shared/blocks/hand-of-god/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Hand of God AI Template – Make the Golden Hands Lift Video From One Photo',
    description:
      'Make the Hand of God AI trend from one photo: giant golden hands take yours on a seaside promenade, a flash turns your clothes white, and they lift you above the turquoise sea. Fixed 10-second 9:16 clip, renders in a few minutes, cost shown before you start. Not affiliated with TikTok or the original creators.',
    keywords:
      'hand of god ai, hand of god ai video, hand of god template, hand of god trend, god literally picked me up, god picked me up ai, golden hands ai video, golden hands trend, la mano de dios ai, hand of god tiktok, hand of god generator, ai lift me to sky video',
  },
  zh: {
    title: 'Hand of God AI 模板：一张照片被金色巨手举上天',
    description:
      '用一张照片制作 Hand of God AI 梗视频：海边步道上金色巨手牵起你的手，白光一闪衣服变白，把你举到碧海之上。固定 10 秒 9:16，几分钟出片，生成前显示费用。与 TikTok 及原作者无关。',
    keywords:
      'hand of god ai, hand of god 模板, hand of god 视频, 金色巨手 ai, 上帝之手 ai 视频, god literally picked me up, god picked me up 梗, golden hands 梗, 照片生成 ai 视频, 被举上天 ai 视频',
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
      ? `${envConfigs.app_url}/zh/hand-of-god-ai-template`
      : `${envConfigs.app_url}/hand-of-god-ai-template`;
  const enUrl = `${envConfigs.app_url}/hand-of-god-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/hand-of-god-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/hand-of-god-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/hand-of-god-ai-og.jpg`],
    },
  };
}

export default async function HandOfGodAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = HAND_OF_GOD_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/hand-of-god-ai-template` : `${envConfigs.app_url}/hand-of-god-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <HandOfGodHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/hand-of-god-ai-template` : `${envConfigs.app_url}/hand-of-god-ai-template`} />
    </>
  );
}
