import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { NostalgiaHome } from '@/shared/blocks/nostalgia/home';
import { getNostalgiaFaq } from '@/shared/blocks/nostalgia/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'How to Make a NostalgIA AI Video on ViralReel',
    description:
      'How to make a NostalgIA AI video on ViralReel from one photo. Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, and Star 85 put you inside a recreated retro TV commercial — letterboxed SD look, backyard set, the bite, the grin. Download the MP4, add the trend sound in TikTok.',
    keywords:
      'nostalgia, nostalgia capcut, nostalgia ai, nostalgia ai video, nostalgia template, nostalgia trend, nostalgia tiktok, how youd look in this ad, viralreel',
  },
  zh: {
    title: '如何在 ViralReel 制作 NostalgIA AI 视频',
    description:
      '在 ViralReel 用一张照片制作 NostalgIA AI 视频。经典女主版、金发波波版、长发少年版、蝴蝶项链版和星条 85 版，把你放进复刻的怀旧电视广告——黑边 SD 画质、后院布景、咬一口、对镜头笑。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上趋势原声和 AI 标注。',
    keywords:
      'nostalgia, nostalgia capcut, nostalgia ai, nostalgia ai 视频, nostalgia 模板, nostalgia 趋势, nostalgia tiktok, how youd look in this ad, viralreel',
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
      ? `${envConfigs.app_url}/zh/nostalgia-ai-template`
      : `${envConfigs.app_url}/nostalgia-ai-template`;
  const enUrl = `${envConfigs.app_url}/nostalgia-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/nostalgia-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/nostalgia-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/nostalgia-og.jpg`],
    },
  };
}

export default async function NostalgiaTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const pageUrl = zh ? `${envConfigs.app_url}/zh/nostalgia-ai-template` : `${envConfigs.app_url}/nostalgia-ai-template`;
  const faq = getNostalgiaFaq(zh, { videoCosts, creditsPerUsd });

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
      <NostalgiaHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
