import { setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { NeverLetHerPayHome } from '@/shared/blocks/never-let-her-pay/home';
import { NEVER_LET_HER_PAY_FAQ } from '@/shared/blocks/never-let-her-pay/faq';
import { getAllConfigs } from '@/shared/models/config';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getCreditsPerUsdFromConfigs } from '@/shared/services/pricing';

export const revalidate = 300;

const META = {
  en: {
    title: 'Never Let Her Pay AI Template – Make the Viral Sponge Skit Video',
    description:
      'Make the viral Never Let Her Pay video from two photos — the diner and the waiter. Nine takes: the original, Mushroom Cut, White Tux, Black Tux, Pink Suit, Tracksuit, Streetwear, Black Suit and Propeller Hat. 12 seconds, 9:16. Not affiliated with @s.nemz, @georgethegem or any original creator.',
    keywords:
      'never let her pay, never let her pay ai, never let her pay trend, pov you never let her pay, you never let her pay, never let her pay ai video, never let her pay template, never let her pay original clip, never let her pay sponge meme, sponge wallet meme, never let her pay tutorial, never let her pay generator',
  },
  zh: {
    title: 'Never Let Her Pay AI 模板：把朋友放进爆火的洗碗海绵短剧',
    description:
      '用两张照片制作爆火的 Never Let Her Pay 视频——买单的主角和餐厅服务员。九套造型：原版、蘑菇头、白色礼服、黑色礼服、粉色西装、运动服、街头潮服、黑西装、螺旋桨帽。12 秒、9:16。与 @s.nemz、@georgethegem 及原作者无关。',
    keywords:
      'never let her pay, never let her pay ai, never let her pay 梗, pov you never let her pay, 洗碗海绵 梗, never let her pay 视频, never let her pay 模板, never let her pay 生成, 海绵钱包 梗, ai 短剧 照片',
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
      ? `${envConfigs.app_url}/zh/never-let-her-pay-ai-template`
      : `${envConfigs.app_url}/never-let-her-pay-ai-template`;
  const enUrl = `${envConfigs.app_url}/never-let-her-pay-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/never-let-her-pay-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/never-let-her-pay-ai-og.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/never-let-her-pay-ai-og.jpg`],
    },
  };
}

export default async function NeverLetHerPayAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const creditsPerUsd = await getCreditsPerUsdFromConfigs();
  const videoCosts = getVideoCostTable(await getAllConfigs());
  const faq = NEVER_LET_HER_PAY_FAQ[zh ? 'zh' : 'en'];

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
          pageUrl: zh ? `${envConfigs.app_url}/zh/never-let-her-pay-ai-template` : `${envConfigs.app_url}/never-let-her-pay-ai-template`,
          description: META[zh ? 'zh' : 'en'].description,
        })) }}
      />
      <NeverLetHerPayHome creditsPerUsd={creditsPerUsd} videoCosts={videoCosts} pageUrl={zh ? `${envConfigs.app_url}/zh/never-let-her-pay-ai-template` : `${envConfigs.app_url}/never-let-her-pay-ai-template`} />
    </>
  );
}
