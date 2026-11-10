import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { SashaLaCatrinaHome } from '@/shared/blocks/sasha-la-catrina/home';
import { getSashaLaCatrinaFaq } from '@/shared/blocks/sasha-la-catrina/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const TEMPLATE_PATH = 'sasha-la-catrina-ai-template';

const META = {
  en: {
    title: 'Sasha La Catrina AI – The Fairytale Catrina Reveal From One Photo | ViralReel',
    description:
      'Make a Sasha La Catrina AI video from one photo: pick a reveal — the flower toss, the ofrenda, the Catrín or the pet versions — and come back as the Book of Life Catrina. Seven samples, 5-15 seconds, 9:16, sound kept. Make it on ViralReel before Día de Muertos ends.',
    keywords:
      'sasha la catrina, catrina ai, sasha la catrina template, catrina ai video, fairytale catrina, sasha la catrina tiktok, la catrina ai, catrina ai filter, catrina generator, viralreel',
  },
  zh: {
    title: 'Sasha La Catrina AI：一张照片变身的童话卡特里娜 | ViralReel',
    description:
      '在 ViralReel 用一张照片制作 Sasha La Catrina AI 视频：选一个变身——撒花、祭坛揭面、男版 Catrín 或宠物版——变回《生命之书》的卡特里娜。七个样本、5-15 秒、9:16、保留原声。趁亡灵节没结束赶紧做。',
    keywords:
      'sasha la catrina, catrina ai, sasha la catrina 模板, catrina ai 视频, fairytale catrina, sasha la catrina tiktok, la catrina ai, catrina ai 滤镜, catrina 生成器, viralreel',
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
      images: [`${envConfigs.app_url}/templates/catrina-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/catrina-og.jpg`],
    },
  };
}

export default async function SashaLaCatrinaTemplatePage({
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
  const faq = getSashaLaCatrinaFaq(zh, { videoCosts, creditsPerUsd });

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
      <SashaLaCatrinaHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
