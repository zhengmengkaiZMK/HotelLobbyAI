import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { ViralHome } from '@/shared/blocks/viral-home/home';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildViralFaqJsonLd } from '@/shared/lib/viral-faq';
import { getAllConfigs } from '@/shared/models/config';
import {
  getCreditsPerUsdFromConfigs,
  getPricingPlans,
} from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Hotel Lobby AI Template – Make the Viral Orange Booth Video',
    description:
      'Why the Hotel Lobby AI video went viral, where to make the orange-booth duet, and how to do it from two photos on ViralReel (viralreel.app).',
    keywords:
      'hotel lobby ai template, hotel lobby ai video, hotel lobby ai, ai video template, orange booth ai video',
  },
  zh: {
    title: 'Hotel Lobby AI 模板：60 秒做出爆火橙色直播间视频',
    description:
      'Hotel Lobby AI 视频为什么爆火、在哪里制作、怎么用两张照片做出来。在 ViralReel（viralreel.app）生成橙色棚对唱。',
    keywords:
      'hotel lobby ai template, hotel lobby ai 模板, 橙色直播间 ai 视频, ai 视频模板',
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
      ? `${envConfigs.app_url}/zh/hotel-lobby-ai-template`
      : `${envConfigs.app_url}/hotel-lobby-ai-template`;
  const enUrl = `${envConfigs.app_url}/hotel-lobby-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/hotel-lobby-ai-template`;
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
      images: [`${envConfigs.app_url}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/og-image.jpg`],
    },
  };
}

export default async function HotelLobbyAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = await getPricingPlans(locale);
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const starterM = plans.find((p) => p.product_id === 'starter-monthly');
  const plusM = plans.find((p) => p.product_id === 'plus-monthly');
  const proM = plans.find((p) => p.product_id === 'pro-monthly');
  const faqJsonLd = buildViralFaqJsonLd({
    starterPrice: starterM?.price || '$9.9',
    starterCredits: starterM?.credits || 90,
    plusPrice: plusM?.price || '$19.9',
    plusCredits: plusM?.credits || 200,
    proPrice: proM?.price || '$39.9',
    proCredits: proM?.credits || 500,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ViralHome
        plans={plans}
        creditsPerUsd={creditsPerUsd}
        videoCosts={videoCosts}
      />
    </>
  );
}
