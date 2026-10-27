import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { WassupInAMinuteHome } from '@/shared/blocks/wassup-in-a-minute/home';
import { getWassupFaq } from '@/shared/blocks/wassup-in-a-minute/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'How to Make a Wassup in a Minute AI Video on ViralReel',
    description:
      'How to make a wassup in a minute AI video on ViralReel from one photo. Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight redraw you as the swaying streetwear anime character. Download the MP4, add the trend sound in TikTok.',
    keywords:
      'wassup in a minute, wassup in a minute ai, wassup in a minute template, wassup in a minute meme, wassup been a minute, atlanta lock ai, wassup in a minute ai video, viralreel',
  },
  zh: {
    title: '如何在 ViralReel 制作 Wassup in a Minute AI 视频',
    description:
      '在 ViralReel 用一张照片制作 wassup in a minute AI 视频。甩钱原版、黑羽绒经典、全黑装、球衣版和大块头，把你画成白底摇摆的街服动漫角色。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
    keywords:
      'wassup in a minute, wassup in a minute ai, wassup in a minute 模板, wassup in a minute 梗, wassup been a minute, atlanta lock ai, wassup in a minute ai 视频, viralreel',
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
      ? `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template`
      : `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const enUrl = `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/wassup-in-a-minute-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/wassup-in-a-minute-og.jpg`],
    },
  };
}

export default async function WassupInAMinuteTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const pageUrl = zh ? `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template` : `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const faq = getWassupFaq(zh, { videoCosts, creditsPerUsd });

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
          pageUrl,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <WassupInAMinuteHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
