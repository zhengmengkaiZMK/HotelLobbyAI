import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { WindowPeeperHome } from '@/shared/blocks/window-peeper/home';
import { WINDOW_PEEPER_FAQ } from '@/shared/blocks/window-peeper/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Window Peeper AI Template – Make the Viral Caught-at-the-Window Video',
    description:
      'Turn one photo into the viral Window Peeper AI video: the night push-in on a lit window, the burger bite, the deadpan stare, and the curtain slam. Six casts — Hoodie Teen, Bean Look, Football Jersey, and more. Generate a vertical video in about a minute.',
    keywords:
      'window peeper ai, window peeper ai video, window peeper trend, window peeper capcut template, window peeper filter ai, burger window ai video, caught at the window ai, curtain pull ai video, ai video from photo',
  },
  zh: {
    title: 'Window Peeper AI 模板：一张照片变成窗边被拍爆火视频',
    description:
      '把一张照片放进 Window Peeper 爆火玩法：夜晚推镜对准亮灯的窗、吃汉堡、僵住对视、猛拉窗帘。白卫衣少年、憨豆同款、球衣球星等六个角色，大约一分钟生成竖屏视频。',
    keywords:
      'window peeper ai, window peeper ai 视频, window peeper 模板, 窗边吃汉堡 ai 视频, 窗帘 ai 视频, 照片生成跳舞视频, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/window-peeper-ai-template`
      : `${envConfigs.app_url}/window-peeper-ai-template`;
  const enUrl = `${envConfigs.app_url}/window-peeper-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/window-peeper-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/window-peeper-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/window-peeper-ai-og.jpg`],
    },
  };
}

export default async function WindowPeeperAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = WINDOW_PEEPER_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/window-peeper-ai-template` : `${envConfigs.app_url}/window-peeper-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <WindowPeeperHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
