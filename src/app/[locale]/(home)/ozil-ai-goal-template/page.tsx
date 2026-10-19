import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { OzilGoalHome } from '@/shared/blocks/ozil-ai-goal/home';
import { OZIL_FAQ } from '@/shared/blocks/ozil-ai-goal/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Ozil Goal template – Make the Viral Chip-and-Finish Video',
    description:
      'Turn one photo into the viral Ozil Goal: chip over a diving keeper, two slides that miss, then walk the ball into an empty net. Night, training kit, park suit, waistcoat, hoodie and creature templates. Vertical video, up to 15 seconds.',
    keywords:
      'Ozil Goal, Ozil Goal video, Ozil Goal template, ozil chip goal, ai football goal from photo',
  },
  zh: {
    title: 'Ozil Goal 模板：一张照片变成挑射空门爆火视频',
    description:
      '把一张照片放进 Ozil Goal 玩法：门将扑出、挑射、两次滑铲落空、空门推进。夜场、训练背心、公园西装、马甲、卫衣和怪兽六个模板，竖屏，最长 15 秒。',
    keywords:
      'Ozil Goal, Ozil Goal 视频, Ozil Goal 模板, 挑射空门 ai 视频, 照片生成足球进球视频',
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
      ? `${envConfigs.app_url}/zh/ozil-ai-goal-template`
      : `${envConfigs.app_url}/ozil-ai-goal-template`;
  const enUrl = `${envConfigs.app_url}/ozil-ai-goal-template`;
  const zhUrl = `${envConfigs.app_url}/zh/ozil-ai-goal-template`;
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
      images: [`${envConfigs.app_url}/templates/ozil-ai-goal-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/ozil-ai-goal-og.jpg`],
    },
  };
}

export default async function OzilAiGoalTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = OZIL_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/ozil-ai-goal-template` : `${envConfigs.app_url}/ozil-ai-goal-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <OzilGoalHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
