import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { BurningBridgesHome } from '@/shared/blocks/burning-bridges/home';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { BB_FAQ } from '@/shared/blocks/burning-bridges/faq';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Burning Bridges AI Template – Make the Viral Office Party Dance Video',
    description:
      'Turn one photo into the viral Burning Bridges party dance video: you as the main dancer, office party crowd cheering around you. Templates, prompt tips, and pricing — generate in 60 seconds.',
    keywords:
      'burning bridges ai video, burning bridges ai template, burning bridges meme generator, office party dance ai video, the office party ai template, ai dance video from photo',
  },
  zh: {
    title: 'Burning Bridges AI 模板：一张照片变成派对舞王爆火视频',
    description:
      'Burning Bridges 爆火玩法完全指南：把你的照片变成办公室派对舞池中央的领舞者，同事围观喝彩。模板、提示词技巧与价格——60 秒生成可发布视频。',
    keywords:
      'burning bridges ai 视频, burning bridges 模板, 派对跳舞 ai 视频, 办公室派对 ai 模板, 照片生成跳舞视频',
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
      ? `${envConfigs.app_url}/zh/burning-bridges-ai-template`
      : `${envConfigs.app_url}/burning-bridges-ai-template`;
  const enUrl = `${envConfigs.app_url}/burning-bridges-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/burning-bridges-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/party-office-poster.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/party-office-poster.jpg`],
    },
  };
}

export default async function BurningBridgesAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = BB_FAQ[zh ? 'zh' : 'en'];

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
      <BurningBridgesHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
