import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { CatClappingHome } from '@/shared/blocks/cat-clapping/home';
import { CAT_CLAPPING_FAQ } from '@/shared/blocks/cat-clapping/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Cat Clapping template – Make the Viral Clapping Cat Video',
    description:
      'Turn a person photo and a cat photo into the viral Cat Clapping meme: the cat sits up, claps, and brings a paw to its mouth. Orange tabby, tuxedo, and black cat templates. Vertical video, 4 or 6 seconds.',
    keywords:
      'Cat Clapping, Black Cat Clapping, clapping cat meme, cat clapping video, AI cat clap from photo',
  },
  zh: {
    title: 'Cat Clapping 模板：两张照片变成鼓掌猫爆火视频',
    description:
      '把一张人的照片和一张猫的照片放进 Cat Clapping：猫坐起来、鼓掌、爪子捂嘴。橘猫、黑白猫和黑猫三个模板，竖屏，4 秒或 6 秒。',
    keywords:
      'Cat Clapping, Black Cat Clapping, 鼓掌猫, 猫鼓掌视频, 照片生成鼓掌猫',
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
      ? `${envConfigs.app_url}/zh/cat-clapping-ai-template`
      : `${envConfigs.app_url}/cat-clapping-ai-template`;
  const enUrl = `${envConfigs.app_url}/cat-clapping-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/cat-clapping-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/cat-clapping-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/cat-clapping-og.jpg`],
    },
  };
}

export default async function CatClappingAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = CAT_CLAPPING_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/cat-clapping-ai-template` : `${envConfigs.app_url}/cat-clapping-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <CatClappingHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
