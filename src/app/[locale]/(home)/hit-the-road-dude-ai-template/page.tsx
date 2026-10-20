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
    title: 'Hit the Road Dude AI Template – State Property Meme Video Generator',
    description: 'Turn one photo into the viral Hit the Road Dude reaction — the white-pickup “State?” private-property meme. Choose State Property, Driver Reaction, or Private Property and make a 9:16 AI clip in the browser.',
    keywords: 'hit the road dude ai video, hit the road dude ai template, state property meme ai, private property meme generator, lock em up meme, state this meme, white pickup meme, photo to video meme template',
  },
  zh: {
    title: 'Hit the Road Dude AI 模板：一张照片生成 State Property 皮卡司机反应视频',
    description: '用一张照片重现白色皮卡“State?”私人领地梗：州有土地版、司机反应版或私人领地版，浏览器里直接生成 9:16 竖屏 AI 短视频。',
    keywords: 'hit the road dude ai 模板, hit the road dude ai 视频, state property 梗, private property 梗, lock em up 梗, 皮卡司机反应 ai 视频, 照片生成视频模板',
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
    openGraph: {
      type: 'website' as const,
      url: canonical,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/hit-the-road-dude-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/hit-the-road-dude-og.jpg`],
    },
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
