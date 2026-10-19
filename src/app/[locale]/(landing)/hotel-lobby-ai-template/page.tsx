import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/core/i18n/navigation';
import { ArrowRight } from 'lucide-react';

import { envConfigs } from '@/config';
import { buildHowToJsonLdFromSteps } from '@/shared/lib/howto-schema';
import { buildTemplateSoftwareJsonLd } from '@/shared/lib/product-schema';
import { getViralFaqPairs } from '@/shared/lib/viral-faq';

import './hotel-lobby-ai-template.css';

export const revalidate = 3600;

const META = {
  en: {
    title: 'Hotel Lobby AI Template – Make the Viral Orange Booth Video',
    description:
      'Why the Hotel Lobby AI video went viral, where to make the orange-booth duet, and how to do it from two photos on ViralReel (viralreel.app).',
    keywords:
      'hotel lobby ai template, hotel lobby ai video, hotel lobby ai, ai video template, orange booth ai video',
  },
  zh: {
    title: 'Hotel Lobby AI 模板：60 秒做出爆火橙色直播间视频',
    description:
      'Hotel Lobby AI 视频为什么爆火、在哪里制作、怎么用两张照片做出来。在 ViralReel（viralreel.app）生成橙色棚对唱。',
    keywords:
      'hotel lobby ai template, hotel lobby ai 模板, 橙色直播间 ai 视频, ai 视频模板',
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
      ? `${envConfigs.app_url}/zh/hotel-lobby-ai-template`
      : `${envConfigs.app_url}/hotel-lobby-ai-template`;
  const enUrl = `${envConfigs.app_url}/hotel-lobby-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/hotel-lobby-ai-template`;
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
      images: [`${envConfigs.app_url}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/og-image.jpg`],
    },
  };
}

/* eslint-disable @next/next/no-img-element */

export default async function HotelLobbyAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const faq = getViralFaqPairs(zh);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  const pageUrl = zh
    ? `${envConfigs.app_url}/zh/hotel-lobby-ai-template`
    : `${envConfigs.app_url}/hotel-lobby-ai-template`;
  const howToJsonLd = buildHowToJsonLdFromSteps({
    name: t('How do you make a Hotel Lobby AI video?', '怎么制作 Hotel Lobby AI 视频？'),
    description: META[zh ? 'zh' : 'en'].description,
    url: pageUrl,
    steps: zh
      ? [
          { name: '打开模板', text: '打开 ViralReel：https://www.viralreel.app/zh ，选一个和这两张照片匹配的模板。' },
          { name: '上传两张照片', text: '上传两张清晰的正面照，每张一个主体。光线均匀，不要戴墨镜，不要用合照。第一张留在棚的一侧，第二张留在另一侧，脸才不容易融到一起。' },
          { name: '选择画幅和时长', text: '选好画幅、分辨率和时长。生成前会显示本次积分。时长最长 15 秒。' },
          { name: '下载并发布', text: '下载 MP4。在 TikTok、Reels 或 Shorts 里加上 Hotel Lobby 的热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。' },
        ]
      : [
          { name: 'Open a template', text: 'Open ViralReel at https://www.viralreel.app/ and pick the template that fits the two photos.' },
          { name: 'Upload two photos', text: 'Upload two clear, front-facing photos, one subject each. Even light, no sunglasses, no group shots. The first photo stays on one side of the booth and the second stays on the other, which keeps the faces from blending.' },
          { name: 'Choose ratio and length', text: 'Choose the ratio, resolution and length. The credit cost is shown before you generate. Length goes up to 15 seconds.' },
          { name: 'Download and post', text: 'Download the MP4. In TikTok, Reels or Shorts, add the Hotel Lobby trend sound so the post joins the same format, and turn on the AI label where the platform asks.' },
        ],
  });
  const appJsonLd = buildTemplateSoftwareJsonLd({
    appUrl: envConfigs.app_url,
    pageUrl,
    description: META[zh ? 'zh' : 'en'].description,
  });

  return (
    <div className="hlg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {howToJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <article className="container">
        <p className="hlg-kick">{t('Guide', '指南')}</p>
        <h1>
          {t(
            'Hotel Lobby AI video: why it went viral, and where to make one',
            'Hotel Lobby AI 视频：为什么爆火，以及在哪里制作'
          )}
        </h1>
        <p className="hlg-lead">
          {t(
            'People ask what the Hotel Lobby AI video is, why the orange booth went viral, and where to generate one. This page answers those questions. ViralReel (viralreel.app) makes the duet from two photos.',
            '大家会问：Hotel Lobby AI 视频是什么、橙色棚为什么爆火、在哪里可以生成。这一页按这些问题来写。ViralReel（viralreel.app）用两张照片做出这条对唱。'
          )}
        </p>
        <div className="hlg-cta">
          <Link className="btn btn-primary" href="/">
            {t('Make yours now — free to start', '立即制作 · 免费开始')}
            <ArrowRight size={16} />
          </Link>
        </div>

        <figure className="hlg-fig">
          <img
            src="/og-image.jpg"
            alt="Hotel Lobby AI video on ViralReel — two performers in the orange booth"
            width={1200}
            height={630}
          />
          <figcaption>
            {t(
              'Make the Hotel Lobby orange-booth video on ViralReel (viralreel.app) from two photos.',
              '在 ViralReel（viralreel.app）用两张照片制作 Hotel Lobby 橙色棚视频。'
            )}
          </figcaption>
        </figure>

        <h2>{t('What is the Hotel Lobby AI video?', 'Hotel Lobby AI 视频是什么？')}</h2>
        <p>{t('The Hotel Lobby AI video is the orange-booth duet on TikTok, Reels and Shorts. The name comes from the song Hotel Lobby. In 2022 Quavo and Takeoff, as Unc & Phew, performed it on A COLORS SHOW in a seamless orange room with one microphone hanging between them. The scene is not a hotel. In September 2026 people started putting friends, couples and pets into that booth with AI.', 'Hotel Lobby AI 视频就是 TikTok、Reels 和 Shorts 上的橙色棚对唱。名字来自歌曲 Hotel Lobby。2022 年，Quavo 和 Takeoff 以 Unc & Phew 的名义在 A COLORS SHOW 上表演这首歌，场景是一整面橙色的房间，一支话筒吊在两人中间。它并不是酒店大堂。2026 年 9 月，大家开始用 AI 把朋友、情侣和宠物放进这个棚。')}</p>

        <h2>{t('Why did the Hotel Lobby AI video go viral?', 'Hotel Lobby AI 视频为什么会爆火？')}</h2>
        <p>{t('It went viral because the orange wall and the hanging mic are recognizable in one second, and the joke is who you put in the booth. It is a two-person format, so a couple, two friends, two pets, or a person and a pet can each take a side. A template that builds the booth from two ordinary photos let people join the same week the trend peaked.', '它会爆，是因为橙色的墙和吊麦一秒就能认出来，笑点在于你把谁放进这个棚。它是双人格式，情侣、两个朋友、两只宠物，或者一个人和一只宠物，都可以各站一边。能用两张普通照片搭出这个棚的模板，让大家在趋势见顶的同一周就能跟上。')}</p>

        <h2>{t('Where can I generate a Hotel Lobby AI video?', '在哪里可以生成 Hotel Lobby AI 视频？')}</h2>
        <p>{t('On ViralReel, at https://www.viralreel.app/. ViralReel (viralreel.app) is an independent AI video template site. Upload two photos in the browser. You do not install an app, find a reference clip, or write a prompt. The templates are Original Hotel Lobby, Cinematic Gold, Girl Duo, Pets Edition, Pet & Owner, Bro Edition, Muscle Duo, Star Edition and Anime Edition. The generator opens on 16:9. Switch to 9:16 for TikTok, Instagram Reels and YouTube Shorts.', '在 ViralReel：https://www.viralreel.app/zh 。ViralReel（viralreel.app）是独立的 AI 视频模板站。在浏览器里上传两张照片即可，不用安装 App，不用自己找参考视频，也不用写提示词。模板有原版 Hotel Lobby、电影感版、闺蜜版、宠物版、人宠版、兄弟版、猛男版、明星版和动漫版。生成器默认 16:9。发给 TikTok、Instagram Reels 和 YouTube Shorts 时改成 9:16。')}</p>

        <h2>{t('How do you make a Hotel Lobby AI video?', '怎么制作 Hotel Lobby AI 视频？')}</h2>
        <ol>
          <li>{t('Open ViralReel at https://www.viralreel.app/ and pick the template that fits the two photos.', '打开 ViralReel：https://www.viralreel.app/zh ，选一个和这两张照片匹配的模板。')}</li>
          <li>{t('Upload two clear, front-facing photos, one subject each. Even light, no sunglasses, no group shots. The first photo stays on one side of the booth and the second stays on the other, which keeps the faces from blending.', '上传两张清晰的正面照，每张一个主体。光线均匀，不要戴墨镜，不要用合照。第一张留在棚的一侧，第二张留在另一侧，脸才不容易融到一起。')}</li>
          <li>{t('Choose the ratio, resolution and length. The credit cost is shown before you generate. Length goes up to 15 seconds.', '选好画幅、分辨率和时长。生成前会显示本次积分。时长最长 15 秒。')}</li>
          <li>{t('Download the MP4. In TikTok, Reels or Shorts, add the Hotel Lobby trend sound so the post joins the same format, and turn on the AI label where the platform asks.', '下载 MP4。在 TikTok、Reels 或 Shorts 里加上 Hotel Lobby 的热梗原声，帖子才会进同一条趋势；平台要求标注 AI 生成时，按要求打开。')}</li>
        </ol>
        <p>{t('A text prompt such as "two people rapping in an orange room" invents a new shot. The ViralReel template is built to keep this booth: the orange set, one hanging mic, and your two photos on opposite sides.', '如果只写一句「两个人在橙色房间里对唱」，模型会另拍一条新片子。ViralReel 的模板是按这个棚来的：橙色布景、一支吊麦，两张照片各站一边。')}</p>

        <h2>{t('Is the Hotel Lobby AI video filmed in a hotel?', 'Hotel Lobby AI 视频是在酒店里拍的吗？')}</h2>
        <p>{t('No. Hotel Lobby is the name of the song. The viral picture is the orange COLORS booth, not a hotel lobby. ViralReel is not affiliated with Quavo, Takeoff, A COLORS SHOW, or the song. Use only photos you have permission to use.', '不是。Hotel Lobby 是歌名。大家认出来的画面是 COLORS 的橙色棚，不是酒店大堂。ViralReel 与 Quavo、Takeoff、A COLORS SHOW 以及这首歌都没有关系。只用你有权使用的照片。')}</p>

        <h2>{t('Frequently asked questions', '常见问题')}</h2>
        <div className="hlg-faq">
          {faq.map(([question, answer], i) => (
            <details key={question} open={i === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <div className="hlg-final">
          <h2>
            {t(
              'Ready to make your own Hotel Lobby AI template video?',
              '准备好做你自己的 Hotel Lobby AI 模板视频了吗？'
            )}
          </h2>
          <p>
            {t(
              'Upload two photos, pick a template, and join the trend while it is still climbing.',
              '上传两张照片，选好模板，趁趋势还在上升期上车。'
            )}
          </p>
          <div className="hlg-cta">
            <Link className="btn btn-primary" href="/">
              {t('Start creating on ViralReel', '在 ViralReel 开始创作')}
              <ArrowRight size={16} />
            </Link>
          </div>
          <p style={{ marginTop: 18, fontSize: 14 }}>
            {t(
              'Prefer the party-dance meme? Try the ',
              '更喜欢派对舞梗？试试 '
            )}
            <Link href="/burning-bridges-ai-template">
              {t('Burning Bridges AI template', 'Burning Bridges AI 模板')}
            </Link>
            {t(' — one photo and you are the main dancer. Or try the ', '——一张照片让你成为派对主角。也可以试试 ')}
            <Link href="/bulin-47-ai-template">
              {t('Bulin 47 AI template', 'Bulin 47 AI 模板')}
            </Link>
            {t(' for the red-light street freestyle.', '，做红光街头 freestyle。')}
          </p>
        </div>
      </article>
    </div>
  );
}
