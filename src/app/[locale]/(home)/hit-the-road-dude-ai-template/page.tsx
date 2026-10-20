import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { HitTheRoadDudeHome } from '@/shared/blocks/hit-the-road-dude/home';
import { HIT_THE_ROAD_DUDE_FAQ } from '@/shared/blocks/hit-the-road-dude/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Hit the Road Dude AI Template – Roadside Driver Reaction Video',
    description: 'Put your photo in a fictional roadside driver-reaction video. Choose State Property, Driver Reaction, or Private Property and create a 9:16 AI clip from one photo.',
    keywords: 'hit the road dude ai template, hit the road dude ai video, state property ai video, lock em up ai meme, roadside driver reaction video',
  },
  zh: {
    title: 'Hit the Road Dude AI 模板：一张照片生成路边司机反应视频',
    description: '用一张照片制作虚构的路边司机反应视频。选择州有土地版、司机反应版或私人领地版，默认生成 9:16 竖屏短片。',
    keywords: 'hit the road dude ai 模板, hit the road dude ai 视频, state property 视频, lock em up 短视频, 路边司机反应视频',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const m = META[locale === 'zh' ? 'zh' : 'en'];
  const enUrl = `${envConfigs.app_url}/hit-the-road-dude-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/hit-the-road-dude-ai-template`;
  const canonical = locale === 'zh' ? zhUrl : enUrl;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical,
      languages: { en: enUrl, zh: zhUrl, 'x-default': enUrl },
    },
    openGraph: { type: 'website' as const, url: canonical, title: m.title, description: m.description },
    twitter: { card: 'summary' as const, title: m.title, description: m.description },
  };
}

export default async function HitTheRoadDudeAiTemplatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = HIT_THE_ROAD_DUDE_FAQ[zh ? 'zh' : 'en'];
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildTemplateSoftwareJsonLd({
        appUrl: envConfigs.app_url,
        pageUrl: zh ? `${envConfigs.app_url}/zh/hit-the-road-dude-ai-template` : `${envConfigs.app_url}/hit-the-road-dude-ai-template`,
        description: META[zh ? 'zh' : 'en'].description,
      })) }} />
      <HitTheRoadDudeHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
