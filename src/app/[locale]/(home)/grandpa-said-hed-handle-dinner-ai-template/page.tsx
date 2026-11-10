import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { GrandpaDinnerHome } from '@/shared/blocks/grandpa-dinner/home';
import { GRANDPA_DINNER_FAQ } from '@/shared/blocks/grandpa-dinner/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: "Grandpa Said He'd Handle Dinner AI Video Generator & Template | ViralReel",
    description:
      "Make the viral Grandpa Said He'd Handle Dinner AI video with ViralReel. Upload one photo, choose your favorite giant fish dinner character, and download a 10-second 9:16 MP4 in minutes.",
    keywords:
      "grandpa said he'd handle dinner, grandpa dinner ai video, grandpa dinner ai template, giant fish meme generator, giant fish chopping meme, fish cutting ai trend, precise entries meme, grandpa dinner video maker, ai dinner meme",
  },
  zh: {
    title: "Grandpa Said He'd Handle Dinner AI 视频生成器 | ViralReel",
    description:
      '用 ViralReel 制作爆火的「爷爷说他来搞定晚饭」AI 视频。上传一张照片，选好巨型鱼晚餐角色，几分钟下载 10 秒 9:16 的 MP4。',
    keywords:
      "grandpa said he'd handle dinner, 爷爷说他来搞定晚饭, 巨型鱼梗, 剁鱼 ai 视频, grandpa dinner ai, 大鱼厨房梗, 剁鱼视频 ai, 精准入场梗",
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
      ? `${envConfigs.app_url}/zh/grandpa-said-hed-handle-dinner-ai-template`
      : `${envConfigs.app_url}/grandpa-said-hed-handle-dinner-ai-template`;
  const enUrl = `${envConfigs.app_url}/grandpa-said-hed-handle-dinner-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/grandpa-said-hed-handle-dinner-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/grandpa-said-hed-handle-dinner-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/grandpa-said-hed-handle-dinner-ai-og.jpg`],
    },
  };
}

export default async function GrandpaSaidHedHandleDinnerAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = GRANDPA_DINNER_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/grandpa-said-hed-handle-dinner-ai-template` : `${envConfigs.app_url}/grandpa-said-hed-handle-dinner-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <GrandpaDinnerHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/grandpa-said-hed-handle-dinner-ai-template` : `${envConfigs.app_url}/grandpa-said-hed-handle-dinner-ai-template`} />
    </>
  );
}
