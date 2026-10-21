import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { HitTheRoadDudeHome } from '@/shared/blocks/hit-the-road-dude/home';
import { getHitTheRoadDudeFaq } from '@/shared/blocks/hit-the-road-dude/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Hit the Road Dude AI Video – Make the White Pickup Meme on ViralReel',
    description: 'Make a Hit the Road Dude AI video on ViralReel from one photo. The white-pickup private-property meme, staged as a fictional roadside clip. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.',
    keywords: 'hit the road dude ai video, hit the road dude song, hit the road dude gif, hit the road dude meme, hit the road dude guy, hit the road dude ai, hit the road dude original, hit the road dude in german, hit the road dude remix, hit the road dude ai template',
  },
  zh: {
    title: 'Hit the Road Dude AI 视频：在 ViralReel 用一张照片制作白色皮卡梗',
    description: '在 ViralReel 用一张照片制作 Hit the Road Dude AI 视频。白色皮卡私人领地梗，搭成一条虚构的路边短片。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
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
  const pageUrl = zh ? `${envConfigs.app_url}/zh/hit-the-road-dude-ai-template` : `${envConfigs.app_url}/hit-the-road-dude-ai-template`;
  const faq = getHitTheRoadDudeFaq(zh, { videoCosts, creditsPerUsd });
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
        pageUrl,
        description: META[zh ? 'zh' : 'en'].description,
      })) }} />
      <HitTheRoadDudeHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
