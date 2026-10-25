import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { TinyDeskHome } from '@/shared/blocks/tiny-desk/home';
import { TINY_DESK_FAQ } from '@/shared/blocks/tiny-desk/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const dynamic = 'force-dynamic';

const META = {
  en: {
    title: 'Tiny Desk Outstanding AI Template – Make the Viral Tiny Desk Concert Video',
    description:
      'Join the Tiny Desk Outstanding trend: AI puts you and your friends behind the NPR Tiny Desk singing the Gap Band\'s "Outstanding". Six sets — All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men and Uncle Charlie. Upload photos, keep the song, generate in minutes.',
    keywords:
      'tiny desk outstanding, tiny desk outstanding ai, tiny desk outstanding template, tiny desk outstanding ai video, tiny desk concert ai, tiny desk ai video, nfl tiny desk meme, outstanding gap band ai, college football coaches tiny desk, washed anthem ai video, tiny desk trend',
  },
  zh: {
    title: 'Tiny Desk Outstanding AI 模板：把朋友放进爆火的 Tiny Desk 演唱会',
    description:
      'Tiny Desk Outstanding 爆火玩法：AI 把你和你的团队换进 NPR Tiny Desk 现场，唱 Gap Band 的《Outstanding》。输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie 六套阵容，上传照片保留原声，几分钟生成。',
    keywords:
      'tiny desk outstanding, tiny desk outstanding ai, tiny desk outstanding 模板, tiny desk ai 视频, tiny desk 演唱会 ai, 教练 tiny desk 梗, outstanding ai 视频, 过气赞歌 ai, 照片生成 ai 视频',
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
      ? `${envConfigs.app_url}/zh/tiny-desk-outstanding-ai-template`
      : `${envConfigs.app_url}/tiny-desk-outstanding-ai-template`;
  const enUrl = `${envConfigs.app_url}/tiny-desk-outstanding-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/tiny-desk-outstanding-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/tiny-desk-outstanding-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/tiny-desk-outstanding-ai-og.jpg`],
    },
  };
}

export default async function TinyDeskOutstandingAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs(true));
  const faq = TINY_DESK_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/tiny-desk-outstanding-ai-template` : `${envConfigs.app_url}/tiny-desk-outstanding-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <TinyDeskHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} />
    </>
  );
}
