import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { PedraDoSalHome } from '@/shared/blocks/pedra-do-sal/home';
import { getPedraDoSalFaq } from '@/shared/blocks/pedra-do-sal/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'How to Make a Pedra do Sal AI Video on ViralReel',
    description:
      'How to make a Pedra do Sal AI video on ViralReel from one photo. Night Party, Goth Look, and Wizard Elder put you in the packed Rio night square. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.',
    keywords:
      'how to make a pedra do sal ai video, pedra do sal ai, pedra do sal ai video, pedra do sal ai template, seu ze de madureira ai, charme dance ai, rio street party ai video, viralreel',
  },
  zh: {
    title: '如何在 ViralReel 制作 Pedra do Sal AI 视频',
    description:
      '在 ViralReel 用一张照片制作 Pedra do Sal AI 视频。夜街派对、暗黑大衣、巫师长老三个模板，把你放进里约夜场广场。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
    keywords:
      '如何制作 pedra do sal ai 视频, pedra do sal ai, pedra do sal ai 视频, pedra do sal 模板, 里约街头派对 ai 视频, 广场跳舞 ai 视频, viralreel',
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
  const pageUrl = zh ? `${envConfigs.app_url}/zh/pedra-do-sal-ai-template` : `${envConfigs.app_url}/pedra-do-sal-ai-template`;
  const faq = getPedraDoSalFaq(zh, { videoCosts, creditsPerUsd });

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
      <PedraDoSalHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
