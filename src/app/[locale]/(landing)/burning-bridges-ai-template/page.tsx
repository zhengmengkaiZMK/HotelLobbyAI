import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/core/i18n/navigation';
import { ArrowRight } from 'lucide-react';

import { envConfigs } from '@/config';
import { BurningBridgesGallery } from '@/shared/blocks/burning-bridges/gallery';

import './burning-bridges-ai-template.css';

export const revalidate = 3600;

const META = {
  en: {
    title: 'Burning Bridges AI Template – Make the Viral Office Party Dance Video',
    description:
      'Turn one photo into the viral Burning Bridges party dance video: you as the main dancer, office party crowd cheering around you. Templates, prompt tips, and pricing — generate in 60 seconds.',
    keywords:
      'burning bridges ai video, burning bridges ai template, burning bridges meme generator, office party dance ai video, the office party ai template, ai dance video from photo',
  },
  zh: {
    title: 'Burning Bridges AI 模板：一张照片变成派对舞王爆火视频',
    description:
      'Burning Bridges 爆火玩法完全指南：把你的照片变成办公室派对舞池中央的领舞者，同事围观喝彩。模板、提示词技巧与价格——60 秒生成可发布视频。',
    keywords:
      'burning bridges ai 视频, burning bridges 模板, 派对跳舞 ai 视频, 办公室派对 ai 模板, 照片生成跳舞视频',
  },
} as const;

const FAQ = {
  en: [
    ['What is the Burning Bridges video trend?', 'It is the viral format where one person becomes the star dancer at a packed office/house party — holding a drink, showing off signature moves while the crowd cheers around them. People put themselves, their friends and their pets into the scene, sync it to the "Burning Bridges" trend audio and post it to TikTok and Reels.'],
    ['How many photos do I need?', 'Just one front-facing photo for the single-dancer templates. The Dance Duo template uses two photos — one per dancer. Good lighting and a clear, front-facing shot matter more than quantity.'],
    ['Can I edit the prompt before generating?', 'Yes — on this page the generator opens with the template prompt pre-filled. You can add casting notes like "put my dad in the suit as the main dancer" or describe the moves you want before hitting generate.'],
    ['How much does a video cost?', 'Pricing is shared across the whole site: generation runs on credits, with a fixed cost per video shown before you confirm (6–18 credits depending on resolution and duration). Plans start at $19.9/month, and failed or canceled jobs are refunded automatically.'],
    ['Which aspect ratio should I use?', 'The original meme is landscape, so 16:9 is the default here. Choose 9:16 for TikTok, Reels and Shorts if you want the vertical full-screen look.'],
  ],
  zh: [
    ['Burning Bridges 视频玩法是什么？', '就是最近疯传的"派对舞王"格式：一个人变成满屋子人的派对现场的主角——拿着杯子、跳着标志性舞步，周围同事朋友围观喝彩。大家把自己、朋友甚至宠物放进这个场景，配上 Burning Bridges 热梗音乐发到 TikTok 和 Reels。'],
    ['需要几张照片？', '单舞者模板只需要一张正面照片。双人共舞模板用两张——每位舞者一张。清晰的光线和正脸比数量更重要。'],
    ['生成前可以改提示词吗？', '可以——本页的生成弹窗已预填模板提示词，你可以追加说明，比如"把照片里的爸爸换成领舞者、穿上西装"，或者描述你想要的舞步，然后再点生成。'],
    ['做一条视频多少钱？', '与全站价格统一：按积分计费，生成前明示固定成本（按分辨率和时长 6–18 积分）。套餐 $19.9/月起，失败或取消的任务自动退款。'],
    ['选什么画幅比例？', '原梗是横屏，所以这里默认 16:9。如果你要发 TikTok、Reels 和 Shorts，也可以选 9:16 竖屏全屏效果。'],
  ],
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
      ? `${envConfigs.app_url}/zh/burning-bridges-ai-template`
      : `${envConfigs.app_url}/burning-bridges-ai-template`;
  const enUrl = `${envConfigs.app_url}/burning-bridges-ai-template`;
  const zhUrl = `${envConfigs.app_url}/zh/burning-bridges-ai-template`;
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
      images: [`${envConfigs.app_url}/templates/party-office-poster.jpg`],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: m.title,
      description: m.description,
      images: [`${envConfigs.app_url}/templates/party-office-poster.jpg`],
    },
  };
}

/* eslint-disable @next/next/no-img-element */

export default async function BurningBridgesAiTemplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  const faq = FAQ[zh ? 'zh' : 'en'];

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
    <div className="bbg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="container">
        <p className="bbg-kick">{t('Guide', '指南')}</p>
        <h1>
          {t(
            'Burning Bridges AI Template: One Photo, One Party, You Are the Main Dancer',
            'Burning Bridges AI 模板：一张照片，让你成为派对舞池之王'
          )}
        </h1>
        <p className="bbg-lead">
          {t(
            'The Burning Bridges trend is the party-dance meme taking over TikTok and Reels: one confident dancer in the center of the room, metal cup in hand, a crowd of coworkers and friends cheering around them. With the Burning Bridges AI template you drop yourself — or your friends, or your pet — straight into that scene from a single photo. No editing, no dance skills, one minute.',
            'Burning Bridges 是最近刷屏 TikTok 和 Reels 的派对舞梗：房间中央一位自信的领舞者，手持金属杯，周围同事朋友围观喝彩。用 Burning Bridges AI 模板，一张照片就能把你——或你的朋友、你的宠物——放进这个场景。不需要剪辑，不需要舞技，一分钟出片。'
          )}
        </p>
        <div className="bbg-cta">
          <a className="btn btn-primary" href="#templates">
            {t('Pick a template and generate', '选模板，立即生成')}
            <ArrowRight size={16} />
          </a>
        </div>

        <figure className="bbg-fig">
          <img
            src="/templates/party-office-poster.jpg"
            alt={t(
              'Burning Bridges AI template — the reference subject dancing as the main dancer at a party while the crowd cheers',
              'Burning Bridges AI 模板——参考照片的主角在派对中央领舞，人群围观喝彩'
            )}
            width={1138}
            height={640}
          />
          <figcaption>
            {t(
              'One uploaded photo becomes the main dancer — the party scene, crowd and energy are generated around them.',
              '上传一张照片变成领舞主角——派对场景、围观人群和气氛全部围绕照片生成。'
            )}
          </figcaption>
        </figure>

        <h2>{t('What is the Burning Bridges template?', '什么是 Burning Bridges 模板？')}</h2>
        <p>
          {t(
            'Burning Bridges is a fixed video format: a warm indoor party with a crystal chandelier, a crowd of guests holding metal cups, and one main dancer in the center holding the floor with confident, slightly ridiculous signature moves. The format comes from a famous office-party scene, and that origin is exactly why it works — everyone recognizes the "guy who dances like nobody is watching" energy in the first second.',
            'Burning Bridges 是一个固定格式的视频：温暖的室内派对、水晶吊灯、一群手持金属杯的宾客，中央一位领舞者用自信而略带搞笑的标志性舞步掌控全场。这个格式源自一个著名的办公室派对名场面——这也正是它有效的原因：观众在第一秒就能认出那种"旁若无人跳舞"的喜感。'
          )}
        </p>
        <p>
          {t(
            'As an AI template, the format becomes a photo swap: your front-facing photo replaces the main dancer, and the model generates the scene around them — the crowd, the lighting, the moves — synced to the party energy. You keep the meme, you become the meme.',
            '作为 AI 模板，这个格式变成了一次"照片替换"：你的正面照片替换领舞主角，模型围绕照片生成整个场景——人群、灯光、舞步，全部契合派对气氛。梗还是那个梗，主角换成了你。'
          )}
        </p>

        <h2>{t('Why did it explode?', '它为什么爆火？')}</h2>
        <ul>
          <li>
            <strong>{t('Instant recognition.', '一眼认出。')}</strong>
            {t(
              ' The chandelier, the metal cup, the confident sway — viewers know the format before the first move lands, so they stop scrolling.',
              ' 吊灯、金属杯、自信摇摆——观众在第一个动作之前就认出了这个格式，所以他们会停下来。'
            )}
          </li>
          <li>
            <strong>{t('One photo, one star.', '一张照片，一个主角。')}</strong>
            {t(
              ' Unlike two-person formats, anyone can be the dancer alone — which means every friend group, every family and every pet account can join.',
              ' 不同于双人格式，任何一个人都能单独当舞王——所以每个朋友圈、每个家庭、每个宠物账号都能参与。'
            )}
          </li>
          <li>
            <strong>{t('Comment bait.', '评论区引爆器。')}</strong>
            {t(
              ' The natural caption is "who should dance next?" — every comment tags the next participant, and the trend markets itself.',
              ' 天然的文案是"下一个该谁上？"——每条评论都在@下一个参与者，趋势自己会传播。'
            )}
          </li>
        </ul>

        <h2>{t('How to make a Burning Bridges AI video', '怎么做 Burning Bridges AI 视频')}</h2>
        <ol>
          <li>
            <strong>{t('Pick a template below.', '在下方选一个模板。')}</strong>
            {t(
              ' Office Party Classic, Fantasy Queen, Party Legend, Drama Lead, Dance Duo or Pop Star — each one is a tuned version of the same scene.',
              ' 经典办公室派对、奇幻女王、硬核老炮、剧集主角、双人共舞、流行巨星——每个都是同一场景的精调版本。'
            )}
          </li>
          <li>
            <strong>{t('Upload your photo.', '上传你的照片。')}</strong>
            {t(
              ' One front-facing shot with a clear face. The Dance Duo template takes two photos, one per dancer.',
              ' 一张正脸清晰的照片。双人共舞模板需要两张，每位舞者一张。'
            )}
          </li>
          <li>
            <strong>{t('Tune the prompt (optional).', '调整提示词（可选）。')}</strong>
            {t(
              ' The template prompt is pre-filled in the dialog. Add casting notes — "put my dad in the suit", "make it my cat" — or describe the moves you want.',
              ' 弹窗里已预填模板提示词。你可以追加说明——"把我爸换上去、穿西装"、"换成我的猫"——或者描述你想要的舞步。'
            )}
          </li>
          <li>
            <strong>{t('Set ratio, resolution, duration.', '设置画幅、分辨率、时长。')}</strong>
            {t(
              ' 16:9 for the classic landscape meme, 9:16 for vertical feeds. 720p at 8 seconds is the sweet spot; the exact credit cost is shown before you generate.',
              ' 经典横屏梗选 16:9，信息流竖屏选 9:16。720p + 8 秒是性价比之选；生成前会显示准确的积分成本。'
            )}
          </li>
          <li>
            <strong>{t('Generate, download, post.', '生成、下载、发布。')}</strong>
            {t(
              ' About a minute later you get a post-ready video. Add the original Burning Bridges audio in TikTok or Reels so the algorithm groups you with the trend.',
              ' 一分钟左右出片。发布时在 TikTok 或 Reels 里添加 Burning Bridges 原声，让算法把你归入同款热点。'
            )}
          </li>
        </ol>
      </article>

      <section className="bbg-gallery" id="templates">
        <div className="bbg-gwrap">
          <p className="kick">{t('Templates', '模板')}</p>
          <h2>{t('Pick your party, upload one photo, done', '选一个派对场景，传一张照片，一键出片')}</h2>
          <p className="sub">
            {t(
              'Every template is a tuned variant of the same viral scene. Click a card to open the generator — the prompt is pre-filled and fully editable before you generate.',
              '每个模板都是同一个爆火场景的精调版本。点击卡片打开生成器——提示词已预填，生成前可自由编辑。'
            )}
          </p>
          <BurningBridgesGallery />
        </div>
      </section>

      <article className="container">
        <h2>{t('Photo tips that decide the result', '决定成片效果的拍照技巧')}</h2>
        <ul>
          <li>
            {t(
              'Front-facing, full face in frame — the model reads identity from the face first.',
              '正面拍摄、完整面部入镜——模型首先从脸部读取身份特征。'
            )}
          </li>
          <li>
            {t(
              'Even, soft lighting. Harsh shadows and backlit photos produce distorted renders.',
              '光线均匀柔和。硬阴影和逆光照片会导致生成变形。'
            )}
          </li>
          <li>
            {t(
              'One subject per photo. Group photos confuse identity matching — crop to a single person.',
              '每张照片一个主体。合照会干扰身份匹配——请裁剪成单人。'
            )}
          </li>
          <li>
            {t(
              'For pets: get down to their eye level and make sure the face fills a good part of the frame.',
              '宠物照片：蹲到与宠物平视的高度，让脸部占据画面主要部分。'
            )}
          </li>
        </ul>

        <h2>{t('Common mistakes to avoid', '常见错误')}</h2>
        <ul>
          <li>{t('Sunglasses, masks or heavy motion blur in the source photo.', '源照片里有墨镜、口罩或严重运动模糊。')}</li>
          <li>{t('A photo where the subject is tiny in the frame.', '照片中人物在画面里太小。')}</li>
          <li>{t('Over-editing the prompt. The pre-filled template prompt already stages the scene — add casting notes, do not rewrite the whole thing.', '过度改写提示词。预填的模板提示词已经排好了场景——补充角色说明就好，不必整段重写。')}</li>
          <li>{t('Giving up after one render. The format rewards iteration — reroll with the same photo and a tweaked note.', '一次生成就放弃。这个玩法值得多试——用同一张照片换个说明再roll一次。')}</li>
        </ul>

        <h2>{t('Pricing — same as the rest of ViralReel', '价格——与全站统一')}</h2>
        <p>
          {t(
            'Burning Bridges generation uses the same credit system as every other template on ViralReel: 6–18 credits per video depending on resolution (480p/720p/1080p) and duration (8s/12s/15s), always shown before you confirm. Plans start at $19.9/month with 200 credits — enough for roughly 25 videos at 720p/8s — and failed or canceled jobs are refunded automatically. No separate pricing, no surprises.',
            'Burning Bridges 的生成与 ViralReel 所有模板共用同一套积分体系：每条视频 6–18 积分（按分辨率 480p/720p/1080p 与时长 8s/12s/15s 而定），生成前明示。套餐 $19.9/月起、含 200 积分——约够 25 条 720p/8 秒视频——失败或取消自动退款。没有单独定价，没有隐藏收费。'
          )}
        </p>
        <p>
          {t(
            'Want the two-performer format instead? Read the ',
            '想玩双人对话格式？看我们的 '
          )}
          <Link href="/hotel-lobby-ai-template">
            {t('Hotel Lobby AI template guide', 'Hotel Lobby AI 模板指南')}
          </Link>
          {t(
            ' — and mix both formats in your feed for maximum reach.',
            '，两种格式交替发布，流量最大化。'
          )}
        </p>

        <h2>{t('Frequently asked questions', '常见问题')}</h2>
        <div className="bbg-faq">
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>

        <div className="bbg-final">
          <h2>
            {t('Ready to become the main dancer?', '准备好成为派对主角了吗？')}
          </h2>
          <p>
            {t(
              'Upload one photo, pick a template, and drop yourself into the party while the trend is still climbing.',
              '上传一张照片，选好模板，趁趋势还在上升期，直接跳进派对现场。'
            )}
          </p>
          <div className="bbg-cta">
            <a className="btn btn-primary" href="#templates">
              {t('Generate your Burning Bridges video', '生成你的 Burning Bridges 视频')}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
