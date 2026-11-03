import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { CharlieBrownHome } from '@/shared/blocks/charlie-brown-christmas/home';
import { CHARLIE_BROWN_FAQ } from '@/shared/blocks/charlie-brown-christmas/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'A Charlie Brown Christmas AI Template – Turn Your Photo Into the 1965 Cartoon',
    description:
      'Fan-made A Charlie Brown Christmas filter. One photo becomes a 1965 Peanuts-style cartoon on Snoopy\'s red doghouse — scan line, dot eyes, your glasses and outfit kept. Seven redraw clips, 8-second 9:16 MP4. Not affiliated with Peanuts Worldwide or the Schulz estate.',
    keywords:
      'a charlie brown christmas, charlie brown christmas, charlie brown christmas template, charlie brown christmas filter, charlie brown christmas ai, charlie brown christmas ai video, snoopy christmas filter, peanuts christmas filter, charlie brown christmas trend, charlie brown christmas tiktok, charlie brown christmas generator, charlie brown christmas meme, charlie brown christmas capcut, snoopy doghouse ai, charlie brown christmas filter effect',
  },
  zh: {
    title: 'A Charlie Brown Christmas AI 模板：一张照片变成 1965 年花生漫画卡通',
    description:
      '粉丝向 A Charlie Brown Christmas 滤镜。一张照片变成站在 Snoopy 红狗屋上的 1965 花生漫画风卡通——扫描线、点点眼睛、保留你的眼镜和衣服。七条重绘片段，8 秒 9:16 MP4。与 Peanuts Worldwide 和 Schulz 遗产管理方无关。',
    keywords:
      'a charlie brown christmas, charlie brown christmas, charlie brown christmas 模板, charlie brown christmas 滤镜, charlie brown christmas ai, snoopy 圣诞滤镜, peanuts 滤镜, charlie brown christmas 趋势, 查理布朗圣诞 滤镜, 史努比 滤镜, 照片变卡通, charlie brown christmas tiktok',
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
      ? `${envConfigs.app_url}/zh/charlie-brown-christmas-ai-template`
      : `${envConfigs.app_url}/charlie-brown-christmas-ai-template`;
  const enUrl = `${envConfigs.app_url}/charlie-brown-christmas-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/charlie-brown-christmas-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/charlie-brown-christmas-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/charlie-brown-christmas-ai-og.jpg`],
    },
  };
}

export default async function CharlieBrownChristmasAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = CHARLIE_BROWN_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/charlie-brown-christmas-ai-template` : `${envConfigs.app_url}/charlie-brown-christmas-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <CharlieBrownHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/charlie-brown-christmas-ai-template` : `${envConfigs.app_url}/charlie-brown-christmas-ai-template`} />
    </>
  );
}
