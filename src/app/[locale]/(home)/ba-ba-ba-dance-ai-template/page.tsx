import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { BabaDanceHome } from '@/shared/blocks/baba-dance/home';
import { BABA_FAQ } from '@/shared/blocks/baba-dance/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Ba Ba Ba Dance AI Template – Make the Viral Duo Dance Video',
    description:
      'Make the ba ba ba dance from your photos. Six takes — Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, Sibling Lesson. Two photo slots: Left Dancer, Right Dancer. Not affiliated with TikTok or the original creators.',
    keywords:
      'ba ba ba dance, ba ba ba dance ai, ba ba ba dance template, ba ba ba dance ai video, ba ba ba duo dance, ba ba ba dance tiktok, ba ba ba dance from sing, dont you worry bout a thing dance, viral duo dance ai, two person dance ai, tiktok dance ai video',
  },
  zh: {
    title: 'Ba Ba Ba Dance AI 模板：把你和朋友放进爆火的双人舞',
    description:
      '用照片制作 ba ba ba dance。图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员、姐弟教学六套场景。两个照片位：左舞者、右舞者。与 TikTok 及原作者无关。',
    keywords:
      'ba ba ba dance, ba ba ba dance ai, ba ba ba dance 模板, ba ba ba 双人舞, 欢乐好声音 ba ba ba, ba ba ba dance tiktok, 双人舞 ai 视频, 两人舞蹈 ai, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/ba-ba-ba-dance-ai-template`
      : `${envConfigs.app_url}/ba-ba-ba-dance-ai-template`;
  const enUrl = `${envConfigs.app_url}/ba-ba-ba-dance-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/ba-ba-ba-dance-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/ba-ba-ba-dance-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/ba-ba-ba-dance-ai-og.jpg`],
    },
  };
}

export default async function BaBaBaDanceAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = BABA_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/ba-ba-ba-dance-ai-template` : `${envConfigs.app_url}/ba-ba-ba-dance-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <BabaDanceHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/ba-ba-ba-dance-ai-template` : `${envConfigs.app_url}/ba-ba-ba-dance-ai-template`} />
    </>
  );
}
