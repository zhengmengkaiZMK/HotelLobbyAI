import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { HussHussHussHome } from '@/shared/blocks/huss-huss-huss/home';
import { HUSS_HUSS_HUSS_FAQ } from '@/shared/blocks/huss-huss-huss/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Huss Huss Huss Meme – Make the Two-Dancer Dance Video From Two Photos',
    description:
      'The Huss Huss Huss meme ("in this town everybody goes out partying except me") is TikTok\'s viral two-dancer dance. Make your own version from two photos — one per dancer — with AI: groove, wave, turn, spin back, sprinter finish, all pre-built. Fixed 18-second 9:16 clip, trend sound included, renders in a few minutes, cost shown before you start. Not affiliated with TikTok or the original creators.',
    keywords:
      'huss huss huss meme, huss huss huss, huss huss huss dance, huss huss huss ai, huss huss huss ai video, huss huss huss tiktok, huss huss huss generator, huss huss huss video, in this town everybody goes out partying except me, in this town dance, 2 person dance ai, husshusshuss, inthistown',
  },
  zh: {
    title: 'Huss Huss Huss 梗 – 两张照片生成「全城都去蹦迪除了我」双人舞视频',
    description:
      'Huss Huss Huss 梗（「全城都出去蹦迪，除了我」）是 TikTok 爆火的双人梗舞。用两张照片——每位舞者一张——AI 生成你自己的版本：摇摆、挥手、转身、转回、冲刺收尾全部预制。固定 18 秒 9:16，自带原声，几分钟出片，生成前显示费用。与 TikTok 及原作者无关。',
    keywords:
      'huss huss huss 梗, huss huss huss, huss huss huss 舞蹈, huss huss huss ai, in this town 梗, 全城都去蹦迪除了我, 宅家苦练 梗, 双人舞 ai 视频, 两张照片生成视频, inthistown',
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
      ? `${envConfigs.app_url}/zh/huss-huss-huss-ai-template`
      : `${envConfigs.app_url}/huss-huss-huss-ai-template`;
  const enUrl = `${envConfigs.app_url}/huss-huss-huss-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/huss-huss-huss-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/huss-huss-huss-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/huss-huss-huss-ai-og.jpg`],
    },
  };
}

export default async function HussHussHussAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = HUSS_HUSS_HUSS_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/huss-huss-huss-ai-template` : `${envConfigs.app_url}/huss-huss-huss-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <HussHussHussHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/huss-huss-huss-ai-template` : `${envConfigs.app_url}/huss-huss-huss-ai-template`} />
    </>
  );
}
