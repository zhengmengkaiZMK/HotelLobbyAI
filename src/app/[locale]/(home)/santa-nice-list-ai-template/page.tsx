import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { SantaNiceListHome } from '@/shared/blocks/santa-nice-list/home';
import { SANTA_NICE_LIST_FAQ } from '@/shared/blocks/santa-nice-list/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const TEMPLATE_PATH = 'santa-nice-list-ai-template';

const META = {
  en: {
    title: 'Santa Nice List AI Video Generator & Template | ViralReel',
    description:
      'Make the viral Santa Nice List AI video with ViralReel. Pick one of 11 Santa clips, upload one photo, and download a ~10 second 9:16 MP4 of Santa revealing your kid on the Nice List.',
    keywords:
      'santa nice list, santa nice list ai, santa nice list video, santa\'s nice list video, nice list video from santa, santa checking his list, santa naughty or nice list video, quien se porto bien, quien se porto bien plantilla, santa snow globe photo, santa nice list template, santa nice list ai video generator',
  },
  zh: {
    title: 'Santa Nice List AI 视频生成器 | ViralReel',
    description:
      '用 ViralReel 制作爆火的 Santa Nice List AI 视频。十一个圣诞老人片段任选，上传一张照片，下载约 10 秒 9:16 的「圣诞老人揭晓乖巧名单」MP4。',
    keywords:
      'santa nice list, santa nice list ai, 圣诞老人乖巧名单, 圣诞老人名单视频, nice list 视频, santa 雪球照片, quien se porto bien, 今年谁表现好, 圣诞 ai 视频, santa nice list 模板, santa nice list ai 视频生成器',
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
      images: [`${envConfigs.app_url}/templates/santa-nice-list-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/santa-nice-list-ai-og.jpg`],
    },
  };
}

export default async function SantaNiceListAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const pageUrl = zh ? `${envConfigs.app_url}/zh/${TEMPLATE_PATH}` : `${envConfigs.app_url}/${TEMPLATE_PATH}`;
  const faq = SANTA_NICE_LIST_FAQ[zh ? 'zh' : 'en'];

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
      <SantaNiceListHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
