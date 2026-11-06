import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { PimpwalkHome } from '@/shared/blocks/pimpwalk-entrance/home';
import { PIMPWALK_FAQ } from '@/shared/blocks/pimpwalk-entrance/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Pimpwalk Entrance AI Template – Two Photos Through the Hold-the-Door Doorway',
    description:
      'Fan-made Pimpwalk Entrance (hold the door) template. Two photos put you through the viral doorway — the low strut, the drop, the close-up — with a friend on the door. Three casts, 15-second 9:16 MP4, renders in minutes, transparent pay-per-credit pricing. Not affiliated with the creators behind the trend, CapCut, or TikTok.',
    keywords:
      'pimpwalk entrance, pimpwalk entrance ai, pimpwalk entrance template, pimpwalk entrance tiktok, pimpwalk entrance video, pimpwalk entrance meme, pimpwalk entrance trend, pimpwalk entrance song, pimpwalk entrance capcut, pimpwalk barbershop, pimpwalk into barbershop, hold the door trend, doorway entrance trend, pimp walk entrance, pimpwalk entrance generator',
  },
  zh: {
    title: 'Pimpwalk Entrance AI 模板：两张照片走进爆火扶门场景',
    description:
      '粉丝向 Pimpwalk Entrance（扶门）模板。两张照片把你送进爆火的店门口场景——低姿进场、下蹲、特写，朋友拉门。三条阵容，15 秒 9:16 MP4，几分钟出片，按积分计费、价格透明。与趋势背后的创作者、CapCut 或 TikTok 无关。',
    keywords:
      'pimpwalk entrance, pimpwalk entrance ai, pimpwalk entrance 模板, pimpwalk entrance 视频, pimpwalk entrance 梗, pimpwalk entrance 趋势, pimpwalk entrance 原声, pimpwalk barbershop, pimpwalk 理发店, hold the door trend, 扶门趋势, 门口进场 梗, pimpwalk entrance 生成器, pimp walk',
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
      ? `${envConfigs.app_url}/zh/pimpwalk-entrance-ai-template`
      : `${envConfigs.app_url}/pimpwalk-entrance-ai-template`;
  const enUrl = `${envConfigs.app_url}/pimpwalk-entrance-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/pimpwalk-entrance-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/pimpwalk-entrance-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/pimpwalk-entrance-ai-og.jpg`],
    },
  };
}

export default async function PimpwalkEntranceAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = PIMPWALK_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/pimpwalk-entrance-ai-template` : `${envConfigs.app_url}/pimpwalk-entrance-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <PimpwalkHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/pimpwalk-entrance-ai-template` : `${envConfigs.app_url}/pimpwalk-entrance-ai-template`} />
    </>
  );
}
