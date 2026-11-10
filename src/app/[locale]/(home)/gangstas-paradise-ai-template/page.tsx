import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { GangstasParadiseHome } from '@/shared/blocks/gangstas-paradise/home';
import { GANGSTAS_PARADISE_FAQ } from '@/shared/blocks/gangstas-paradise/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const TEMPLATE_PATH = 'gangstas-paradise-ai-template';

const META = {
  en: {
    title: "Gangsta's Paradise AI Video Generator & Template | ViralReel",
    description:
      "Make the viral Gangsta's Paradise AI video with ViralReel. Upload two photos — rapper and singer — pick one of five staged performances, and download a 20-30 second 4:3 MP4.",
    keywords:
      "gangsta's paradise, gangsta's paradise ai, gangstas paradise ai video, gangsta's paradise template, gangsta's paradise ai trend, coolio ai video, gangsta's paradise meme, ai rap video, hangar choir ai, star wars gangsta's paradise",
  },
  zh: {
    title: "Gangsta's Paradise AI 视频生成器 | ViralReel",
    description:
      '用 ViralReel 制作爆火的 Gangsta\'s Paradise AI 视频。上传两张照片——说唱者和演唱者——五场舞台表演任选，下载 20-30 秒 4:3 的 MP4。',
    keywords:
      "gangsta's paradise, gangsta's paradise ai, 天堂说唱 ai, gangstas paradise ai 视频, gangsta's paradise 模板, coolio ai 视频, 机库合唱 ai, 说唱 ai 视频, 星战 gangsta's paradise",
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
      ? `${envConfigs.app_url}/zh/${TEMPLATE_PATH}`
      : `${envConfigs.app_url}/${TEMPLATE_PATH}`;
  const enUrl = `${envConfigs.app_url}/${TEMPLATE_PATH}`;
  const zhUrl = `${envConfigs.app_url}/zh/${TEMPLATE_PATH}`;
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
      images: [`${envConfigs.app_url}/templates/gangstas-paradise-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/gangstas-paradise-ai-og.jpg`],
    },
  };
}

export default async function GangstasParadiseAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const pageUrl = zh ? `${envConfigs.app_url}/zh/${TEMPLATE_PATH}` : `${envConfigs.app_url}/${TEMPLATE_PATH}`;
  const faq = GANGSTAS_PARADISE_FAQ[zh ? 'zh' : 'en'];

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
      <GangstasParadiseHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
