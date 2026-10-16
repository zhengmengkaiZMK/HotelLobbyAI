import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/core/i18n/navigation';
import { ArrowRight } from 'lucide-react';

import { envConfigs } from '@/config';

import './hotel-lobby-ai-template.css';

export const revalidate = 3600;

const META = {
  en: {
    title: 'Hotel Lobby AI Template – Make the Viral Orange Booth Video',
    description:
      'The complete guide to the Hotel Lobby AI template: how the viral orange-booth format works, photo tips, pet and baby variants — make yours in 60 seconds.',
    keywords:
      'hotel lobby ai template, hotel lobby ai video, hotel lobby ai, ai video template, orange booth ai video',
  },
  zh: {
    title: 'Hotel Lobby AI 模板：60 秒做出爆火橙色直播间视频',
    description:
      'Hotel Lobby AI 模板完全指南：爆火橙色直播间玩法的原理、拍照技巧、宠物与宝宝变体，上传两张照片，60 秒生成可发布的竖屏视频。',
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

  return (
    <div className="hlg">
      <article className="container">
        <p className="hlg-kick">{t('Guide', '指南')}</p>
        <h1>
          {t(
            'Hotel Lobby AI Template: Make the Viral Orange Booth Video in 60 Seconds',
            'Hotel Lobby AI 模板：60 秒做出爆火的橙色直播间视频'
          )}
        </h1>
        <p className="hlg-lead">
          {t(
            'The Hotel Lobby AI template is one of the most recognizable video trends on TikTok, Instagram Reels and YouTube Shorts. This guide explains what the format is, why it exploded, how to make your own version from just two photos, and the photo tips that separate videos that flop from videos that hit a million views.',
            'Hotel Lobby AI 模板是 TikTok、Instagram Reels 和 YouTube Shorts 上辨识度最高的视频玩法之一。本指南会讲清楚：这个格式是什么、为什么爆火、如何只用两张照片做出你自己的版本，以及决定视频是石沉大海还是破百万播放的拍照技巧。'
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
            alt="Hotel Lobby AI template — two performers singing in the iconic orange booth"
            width={1200}
            height={630}
          />
          <figcaption>
            {t(
              'The Hotel Lobby AI template recreates the iconic orange booth from two uploaded photos.',
              'Hotel Lobby AI 模板根据上传的两张照片还原标志性橙色直播间。'
            )}
          </figcaption>
        </figure>

        <h2>
          {t(
            'What is the Hotel Lobby AI template?',
            '什么是 Hotel Lobby AI 模板？'
          )}
        </h2>
        <p>
          {t(
            'The Hotel Lobby AI template is a fixed video format: two performers stand facing each other in a warm, amber-lit lounge — the "orange booth" — trading verses of a song back and forth. The scene is defined by a few unmistakable details: the hanging microphone between the singers, the deep orange and brown color grade, the soft spotlight overhead, and the steady medium shot that keeps both performers in frame.',
            'Hotel Lobby AI 模板是一个固定格式的视频：两位表演者在暖琥珀色调的休息室——也就是「橙色直播间」——里面对面站立，来回对唱一首歌。这个场景由几个标志性细节定义：悬在两位歌手之间的吊麦、深橙与棕色的调色、头顶柔和的聚光灯，以及把两位表演者都框进画面的固定中景。'
          )}
        </p>
        <p>
          {t(
            'Originally, the format spread through live sessions filmed in real hotel lobbies and lounges. Recreating it required access to a venue, a camera setup and editing skills. AI changed that completely: an AI video template takes two front-facing photos and generates the entire scene — staging, lighting, lip-sync and gestures — automatically. What used to be a production is now a sixty-second generation you can run from a browser.',
            '这个格式最早通过在真实酒店大堂和休息室拍摄的现场演唱传播开来。复刻它需要场地、摄影设备和剪辑能力。AI 彻底改变了这一点：AI 视频模板只需要两张正面照片，就能自动生成整个场景——布景、灯光、口型同步和手势。过去是一次「制作」，现在只是浏览器里六十秒的一次生成。'
          )}
        </p>

        <h2>
          {t(
            'Why the Hotel Lobby AI template went viral',
            'Hotel Lobby AI 模板为什么会爆火'
          )}
        </h2>
        <p>
          {t(
            'Three forces worked together. Recognition: the orange booth is a visual hook — viewers identify the format in the first second and stop scrolling. Duplication: it is a two-person format, so every video has two natural promoters, and every viewer personally knows someone who should be in the next one. Accessibility: once the AI template version arrived, the cost of joining dropped to two photos and one minute. Trends live and die by how fast people can participate, and no major format has ever had a lower barrier than this one.',
            '三股力量共同作用。辨识度：橙色直播间是视觉钩子——观众第一秒就能认出格式，停止滑动。复制性：这是双人格式，每条视频自带两个天然传播者，而每个观众身边都恰好有「该出现在下一条里」的人。低门槛：AI 模板版本出现后，参与的代价降到两张照片加一分钟。趋势的生死取决于参与速度，而从未有过哪个大热格式的门槛比这更低。'
          )}
        </p>

        <h2>
          {t(
            'Hotel Lobby AI template variants',
            'Hotel Lobby AI 模板的变体'
          )}
        </h2>
        <p>
          {t(
            'Part of the trend’s durability is that the format accepts any performers. The most-shared variants include:',
            '这个趋势能长盛不衰，一部分原因在于格式对「主角」完全不挑。传播最广的变体包括：'
          )}
        </p>
        <ul>
          <li>
            <strong>
              {t('Couples edition — ', '情侣版——')}
            </strong>
            {t(
              'the original pairing, and still the most common. Two partners trading verses is the format at full power.',
              '最原始也最常见的组合。伴侣间来回对唱是这个格式的完全体。'
            )}
          </li>
          <li>
            <strong>{t('Pet editions — ', '宠物版——')}</strong>
            {t(
              'two dogs, two cats, or a dog and a cat. Pet variants are among the most-shared posts of the entire trend.',
              '两只狗、两只猫、或者一狗一猫。宠物变体是整个趋势中转发量最高的一类。'
            )}
          </li>
          <li>
            <strong>{t('Pet & owner edition — ', '人宠版——')}</strong>
            {t(
              'one human and one animal performing together — instant charm, very hard to scroll past.',
              '一个人和一只宠物同台演出——天然讨喜，几乎没人能划走。'
            )}
          </li>
          <li>
            <strong>{t('Best friends edition — ', '闺蜜/兄弟版——')}</strong>
            {t(
              'friend pairs, sibling pairs and duo creators keeping the trend alive between couple versions.',
              '朋友、兄妹和双人创作者组合，在情侣版之间撑起了趋势的日常热度。'
            )}
          </li>
          <li>
            <strong>{t('Baby edition — ', '宝宝版——')}</strong>
            {t(
              'family clips starring the youngest family member, usually paired with a parent.',
              '由家里最小的成员出镜的家庭片段，通常和一位家长同框。'
            )}
          </li>
        </ul>
        <p>
          {t(
            'ViralReel ships all of these as ready-to-use templates — pick one, upload two photos, and the Hotel Lobby AI template handles everything else.',
            'ViralReel 把这些变体全部做成了开箱即用的模板——选一个、传两张照片，剩下的交给 Hotel Lobby AI 模板。'
          )}
        </p>

        <h2>
          {t(
            'How to make a Hotel Lobby AI template video',
            '如何制作 Hotel Lobby AI 模板视频'
          )}
        </h2>
        <ol>
          <li>
            {t(
              'Pick a template — the classic orange booth, the cinematic variant, or a pet / friend / baby edition.',
              '选择模板——经典橙色直播间、电影感变体，或宠物 / 闺蜜 / 宝宝版。'
            )}
          </li>
          <li>
            {t(
              'Upload two photos — one clear front-facing photo per performer. The generator maps each photo to one side of the stage.',
              '上传两张照片——每位主角一张清晰的正面照。生成器会把每张照片映射到舞台的一侧。'
            )}
          </li>
          <li>
            {t(
              'Generate — the AI stages both performers, syncs their lips and gestures to the beat, and renders in about sixty seconds.',
              '生成——AI 自动完成两位表演者的舞台化处理，口型与手势对齐节拍，约六十秒渲染完成。'
            )}
          </li>
          <li>
            {t(
              'Download and post — export a vertical 9:16 video sized for TikTok, Reels and Shorts, then add the original sound in-app.',
              '下载并发布——导出适配 TikTok、Reels 和 Shorts 的 9:16 竖屏视频，然后在 App 内添加原声。'
            )}
          </li>
        </ol>

        <h2>
          {t(
            'Photo tips that decide your results',
            '决定成片效果的拍照技巧'
          )}
        </h2>
        <ul>
          <li>
            {t(
              'Front-facing and well lit — the AI needs a full, unobstructed view of each face.',
              '正面且光线充足——AI 需要每张脸完整、无遮挡的视角。'
            )}
          </li>
          <li>
            {t(
              'One performer per photo — group shots with overlapping faces cause blending artifacts.',
              '每张照片只拍一位主角——脸部重叠的合影会导致融合瑕疵。'
            )}
          </li>
          <li>
            {t(
              'Keep each performer on the same side across photos — consistency helps the AI lock identities.',
              '同一主角的多张照片保持在画面同一侧——一致性帮助 AI 稳定锁定身份。'
            )}
          </li>
          <li>
            {t(
              'Avoid sunglasses, heavy filters and motion blur — they all degrade lip-sync accuracy.',
              '避免墨镜、重滤镜和运动模糊——它们都会降低口型同步的准确度。'
            )}
          </li>
        </ul>

        <h2>
          {t(
            'Frequently asked questions',
            '常见问题'
          )}
        </h2>
        <div className="hlg-faq">
          <details open>
            <summary>
              {t(
                'Is the Hotel Lobby AI template free to try?',
                'Hotel Lobby AI 模板可以免费试用吗？'
              )}
            </summary>
            <p>
              {t(
                'Yes — new users get free credits to generate a first video. After that, plans start at $19.9/month and one video costs about 10 credits.',
                '可以——新用户会获得免费积分来生成第一条视频。之后套餐最低 $19.9/月起，一条视频约消耗 10 积分。'
              )}
            </p>
          </details>
          <details>
            <summary>
              {t(
                'How long does one video take?',
                '一条视频要多久？'
              )}
            </summary>
            <p>
              {t(
                'Most renders finish in about sixty seconds. Pro plans use a priority queue that skips the line during peak hours.',
                '大多数渲染在六十秒左右完成。Pro 套餐使用优先队列，高峰期也能插队渲染。'
              )}
            </p>
          </details>
          <details>
            <summary>
              {t(
                'Does it work with pets or babies?',
                '宠物或宝宝可以用吗？'
              )}
            </summary>
            <p>
              {t(
                'Yes — the pet, pet-owner and baby editions are the most-shared variants of the whole trend.',
                '可以——宠物版、人宠版和宝宝版是整个趋势中传播最广的变体。'
              )}
            </p>
          </details>
          <details>
            <summary>
              {t(
                'What happens to my photos?',
                '我的照片会被如何处理？'
              )}
            </summary>
            <p>
              {t(
                'Photos are used only to render your video and are automatically deleted after 24 hours. Your uploads are never used to train models.',
                '照片仅用于渲染你的视频，24 小时后自动删除。上传内容绝不会被用于训练模型。'
              )}
            </p>
          </details>
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
