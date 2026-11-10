import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { AlorsOnDanseHome } from '@/shared/blocks/alors-on-danse/home';
import { getAlorsOnDanseFaq } from '@/shared/blocks/alors-on-danse/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Alors On Danse AI – Recast the White-Studio Sketch | ViralReel',
    description:
      'Make an Alors On Danse AI video from two photos: the Keyboard Player and the Dance Partner recast the 2010 Stromae white-studio sketch in your browser. Seven versions, about 30 seconds, 16:9. Download the MP4 and add the trend sound in TikTok. Not affiliated with the artists.',
    keywords:
      'alors on danse, alors on danse ai, alors on danse template, alors on danse video, alors on danse tiktok, stromae jamel debbouze, alors on danse generator, viralreel',
  },
  zh: {
    title: 'Alors On Danse AI：在 ViralReel 重排白棚小品',
    description:
      '在 ViralReel 用两张照片制作 Alors On Danse AI 视频：弹键盘的人和伴舞的人重排 2010 年 Stromae 白棚小品。七个版本，约 30 秒，16:9。下载 MP4 后在 TikTok 加趋势原声。与两位艺术家无关联。',
    keywords:
      'alors on danse, alors on danse ai, alors on danse 模板, alors on danse 视频, alors on danse tiktok, stromae jamel debbouze, alors on danse 生成器, viralreel',
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
      ? `${envConfigs.app_url}/zh/alors-on-danse-ai-template`
      : `${envConfigs.app_url}/alors-on-danse-ai-template`;
  const enUrl = `${envConfigs.app_url}/alors-on-danse-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/alors-on-danse-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/alors-on-danse-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/alors-on-danse-og.jpg`],
    },
  };
}

export default async function AlorsOnDanseTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const pageUrl = zh ? `${envConfigs.app_url}/zh/alors-on-danse-ai-template` : `${envConfigs.app_url}/alors-on-danse-ai-template`;
  const faq = getAlorsOnDanseFaq(zh, { videoCosts, creditsPerUsd });

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
      <AlorsOnDanseHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={pageUrl} />
    </>
  );
}
