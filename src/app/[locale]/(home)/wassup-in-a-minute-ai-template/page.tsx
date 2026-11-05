import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { WassupInAMinuteHome } from '@/shared/blocks/wassup-in-a-minute/home';
import { WassupHubAnswer } from '@/shared/blocks/wassup-in-a-minute/hub-answer';
import { getWassupFaq } from '@/shared/blocks/wassup-in-a-minute/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';
import { wassupFifteenSecondCosts, wassupHubLead } from '@/shared/lib/wassup-cost';

export const revalidate = 300;

const META = {
  en: {
    title: 'Wassup in a Minute AI Template — 15s 9:16 Sway',
    keywords:
      'wassup in a minute, wassup in a minute ai, wassup in a minute template, wassup in a minute meme, wassup been a minute, atlanta lock ai, wassup in a minute ai video, viralreel',
  },
  zh: {
    title: 'Wassup in a Minute AI 模板 — 15 秒 9:16 摇摆',
    keywords:
      'wassup in a minute, wassup in a minute ai, wassup in a minute 模板, wassup in a minute 梗, wassup been a minute, atlanta lock ai, wassup in a minute ai 视频, viralreel',
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const zh = locale === 'zh';
  const m = META[zh ? 'zh' : 'en'];
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const costs = wassupFifteenSecondCosts({
    videoCosts: getVideoCostTable(await getAllConfigs(true)),
    creditsPerUsd,
  });
  const description = zh
    ? `Wassup in a minute 是用一至四张照片做的 15 秒、9:16 摇摆。默认 720p 是 ${costs.p720} 积分（约 ${costs.usd720}）。渲染通常要 2–3 分钟。MP4 不含那首歌。`
    : `Wassup in a minute is a 15-second 9:16 sway from one to four photos. Default 720p is ${costs.p720} credits (about ${costs.usd720}). A render usually takes 2–3 minutes. The MP4 does not include the song.`;
  const canonical =
    locale === 'zh'
      ? `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template`
      : `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const enUrl = `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template`;
  return {
    title: m.title,
    description,
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
      description,
      images: [`${envConfigs.app_url}/templates/wassup-in-a-minute-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description,
      images: [`${envConfigs.app_url}/templates/wassup-in-a-minute-og.jpg`],
    },
  };
}

export default async function WassupInAMinuteTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const pageUrl = zh ? `${envConfigs.app_url}/zh/wassup-in-a-minute-ai-template` : `${envConfigs.app_url}/wassup-in-a-minute-ai-template`;
  const faq = getWassupFaq(zh, { videoCosts, creditsPerUsd });

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
          description: wassupHubLead(zh, { videoCosts, creditsPerUsd }),
        })) }}
      />
      <WassupInAMinuteHome
        creditsPerUsd={creditsPerUsd}
        videoCosts={videoCosts}
        pageUrl={pageUrl}
        answer={<WassupHubAnswer zh={zh} ctx={{ videoCosts, creditsPerUsd }} />}
      />
    </>
  );
}
