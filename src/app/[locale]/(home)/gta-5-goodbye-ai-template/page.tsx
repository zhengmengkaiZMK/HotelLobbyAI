import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { GtaGoodbyeHome } from '@/shared/blocks/gta-goodbye/home';
import { GTA_GOODBYE_FAQ } from '@/shared/blocks/gta-goodbye/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'GTA 5 Goodbye AI Template – Your Farewell on the Sunset Pier',
    description:
      'GTA 5 Goodbye AI from one photo: the three men hand you the game case and the keys on the sunset pier, then you drive off in the pink sports car. Seven scenes, 30-second MP4, no prompt. Fan-made, not affiliated with Rockstar Games or Take-Two.',
    keywords:
      'gta 5 goodbye ai, gta 5 goodbye, goodbye gta 5, goodbye gta 5 ai, gta 5 goodbye ai trend, gta 5 farewell ai, goodbye gta 5 hello gta 6, gta 5 goodbye video, gta 5 goodbye ai generator, sunset pier swap, gta 5 goodbye ai template, gta goodbye tiktok trend',
  },
  zh: {
    title: 'GTA 5 Goodbye AI 模板：一张照片走上日落码头告别',
    description:
      '一张照片变成 GTA 5 Goodbye AI 视频：三个人在日落码头上把游戏盒和车钥匙交给你，你开着粉色跑车驶向夕阳。七条场景，30 秒 MP4，无需提示词。粉丝向作品，与 Rockstar Games 和 Take-Two 无关联。',
    keywords:
      'gta 5 goodbye ai, gta 5 goodbye, goodbye gta 5, goodbye gta 5 ai, gta 5 告别 ai, gta 5 告别视频, goodbye gta 5 hello gta 6, 日落码头告别 ai, gta goodbye 趋势, gta 5 farewell ai, gta 5 goodbye ai 生成器',
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
      ? `${envConfigs.app_url}/zh/gta-5-goodbye-ai-template`
      : `${envConfigs.app_url}/gta-5-goodbye-ai-template`;
  const enUrl = `${envConfigs.app_url}/gta-5-goodbye-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/gta-5-goodbye-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/gta-goodbye-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/gta-goodbye-ai-og.jpg`],
    },
  };
}

export default async function Gta5GoodbyeAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = GTA_GOODBYE_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/gta-5-goodbye-ai-template` : `${envConfigs.app_url}/gta-5-goodbye-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <GtaGoodbyeHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/gta-5-goodbye-ai-template` : `${envConfigs.app_url}/gta-5-goodbye-ai-template`} />
    </>
  );
}
