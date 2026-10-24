import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { Bulin47Home } from '@/shared/blocks/bulin-47/home';
import { getBulin47Faq } from '@/shared/blocks/bulin-47/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Bulin 47 AI Template – Make the Viral Street Freestyle Video',
    description:
      'Turn one photo into the viral Bulin 47 freestyle: red-lit restaurant entrance, portable speaker, crowd filming. Street, suit, leopard-print, night-crowd, vest and pet templates. Generate a vertical video in about a minute.',
    keywords:
      'bulin 47 ai video, bulin 47 ai, bulin 47 meme, bulin 47 dance, bulin 47 freestyle, bulin 47 original, dame hombro ai, bulin 47 remix, bulin 47 tiktok, bulin 47 song, bulin 47 gif',
  },
  zh: {
    title: 'Bulin 47 AI 模板：一张照片变成街头 freestyle 爆火视频',
    description:
      '把一张照片放进 Bulin 47 爆火玩法：红光餐厅门口、肩上音箱、围观拍摄。街头、西装、豹纹、夜场人群、马甲和宠物六个模板，大约一分钟生成竖屏视频。',
    keywords:
      'bulin 47 ai 视频, bulin 47 模板, bulin 47 freestyle, 街头说唱 ai 视频, 照片生成 freestyle 视频',
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
      ? `${envConfigs.app_url}/zh/bulin-47-ai-template`
      : `${envConfigs.app_url}/bulin-47-ai-template`;
  const enUrl = `${envConfigs.app_url}/bulin-47-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/bulin-47-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/bulin-47-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/bulin-47-og.jpg`],
    },
  };
}

export default async function Bulin47AiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const pageUrl = zh ? `${envConfigs.app_url}/zh/bulin-47-ai-template` : `${envConfigs.app_url}/bulin-47-ai-template`;
  const faq = getBulin47Faq(zh, { videoCosts, creditsPerUsd });

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
      <Bulin47Home creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
