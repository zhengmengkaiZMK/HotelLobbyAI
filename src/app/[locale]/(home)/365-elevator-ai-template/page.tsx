import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { Elevator365Home } from '@/shared/blocks/elevator365/home';
import { ELEVATOR_365_FAQ } from '@/shared/blocks/elevator365/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: '365 Elevator AI Template – Make the Viral Sampagne "365" Elevator Duo Video',
    description:
      'Make the 365 Elevator trend with AI: upload two photos — the person already inside and the one who walks in — and render a new 15-second 4:3 MP4 on the famous steel-elevator format set to Sampagne\'s "365". Not affiliated with Sampagne or TikTok.',
    keywords:
      '365 elevator, 365 elevator ai, 365 elevator trend, 365 elevator ai video, 365 elevator template, 365 sampagne elevator, sampagne 365 ai, elevator duo ai, 365 tage edit, ronaldo messi elevator ai, 365 elevator trend tutorial',
  },
  zh: {
    title: '365 Elevator AI 模板：用两张照片搭上爆火的电梯双人梗',
    description:
      '用 AI 玩转 365 Elevator 趋势：上传两张照片——电梯里的人和走进去的人——渲染一条全新的 15 秒 4:3 MP4，复刻配上 Sampagne《365》的著名钢电梯双人格式。与 Sampagne、TikTok 均无关联。',
    keywords:
      '365 elevator, 365 elevator ai, 365 elevator trend, 365 电梯, 365 电梯 ai, sampagne 365, 电梯双人 ai, 365 tage 剪辑, c罗 梅西 电梯 ai, 365 elevator 教程',
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
      ? `${envConfigs.app_url}/zh/365-elevator-ai-template`
      : `${envConfigs.app_url}/365-elevator-ai-template`;
  const enUrl = `${envConfigs.app_url}/365-elevator-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/365-elevator-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/elevator-365-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/elevator-365-og.jpg`],
    },
  };
}

export default async function Elevator365AiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = ELEVATOR_365_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/365-elevator-ai-template` : `${envConfigs.app_url}/365-elevator-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <Elevator365Home creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/365-elevator-ai-template` : `${envConfigs.app_url}/365-elevator-ai-template`} />
    </>
  );
}
