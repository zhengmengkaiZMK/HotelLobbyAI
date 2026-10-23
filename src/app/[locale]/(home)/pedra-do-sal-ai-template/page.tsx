import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { PedraDoSalHome } from '@/shared/blocks/pedra-do-sal/home';
import { PEDRA_FAQ } from '@/shared/blocks/pedra-do-sal/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Pedra do Sal AI Template – Make the Viral Rio Street-Party Dance Video',
    description:
      'Turn one photo into the viral Pedra do Sal AI dance: a packed night square in Rio, market tents, floodlights, and you dancing calmly in the middle of the crowd. Night Party, Goth Look and Wizard Elder templates. Generate a vertical video in about a minute.',
    keywords:
      'pedra do sal ai, pedra do sal ai video, pedra do sal ai template, seu ze de madureira ai, charme dance ai, rio street party ai video, ai dance video from photo',
  },
  zh: {
    title: 'Pedra do Sal AI 模板：一张照片变成里约街头派对爆火跳舞视频',
    description:
      '把一张照片放进 Pedra do Sal 爆火玩法：里约夜场石阶广场、市集帐篷、探照灯，你在人群中央淡定律动。夜街派对、暗黑大衣、巫师长老三个模板，大约一分钟生成竖屏视频。',
    keywords:
      'pedra do sal ai, pedra do sal ai 视频, pedra do sal 模板, 里约街头派对 ai 视频, 广场跳舞 ai 视频, 照片生成跳舞视频',
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
      ? `${envConfigs.app_url}/zh/pedra-do-sal-ai-template`
      : `${envConfigs.app_url}/pedra-do-sal-ai-template`;
  const enUrl = `${envConfigs.app_url}/pedra-do-sal-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/pedra-do-sal-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/pedra-do-sal-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/pedra-do-sal-og.jpg`],
    },
  };
}

export default async function PedraDoSalAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = PEDRA_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/pedra-do-sal-ai-template` : `${envConfigs.app_url}/pedra-do-sal-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <PedraDoSalHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
