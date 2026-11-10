import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { BICEP_HEART_CITE_TAILS } from './cite-tails';
import { BICEP_HEART_INTENT_TAILS } from './intent-tails';
import { BICEP_HEART_HOW_TO_STEPS, type BicepHeartHowToStep } from './steps';

/**
 * Long-tail landings for the Bicep Heart template.
 *
 * To add another keyword: append an entry here or in `intent-tails.ts`.
 * The sitemap reads BICEP_HEART_LONG_TAIL_ROUTES. Public URLs are served by
 * the single `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `bicep-heart-ai-template` slug.
 */

export const BICEP_HEART_TEMPLATE_PATH = '/bicep-heart-ai-template';

/** Blog roundups that already exist on ViralReel and mention flex trends. */
export const BICEP_HEART_POSTS = {
  howTo: '/how-to-make-bicep-heart-ai-video',
  explainer: '/bicep-heart-trend',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
} as const;

const PRODUCT = { en: 'Bicep Heart', zh: 'Bicep Heart' };

const EN_TEMPLATE = 'https://www.viralreel.app/bicep-heart-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/bicep-heart-ai-template';

function templateUrl(zh: boolean) {
  return zh ? ZH_TEMPLATE : EN_TEMPLATE;
}

type Copy = { en: string; zh: string };

export interface BicepHeartLongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface BicepHeartLongTailEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  steps: 'shared' | readonly BicepHeartHowToStep[];
  faq: BicepHeartLongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTO_EN =
  'One clear photo of a consenting adult works best: waist-up, facing the camera, both arms visible and not crossed, hands free. Short sleeves or a T-shirt help, and leaving space beside both elbows keeps the raised flex inside the frame.';
const PHOTO_ZH =
  '最好用一张清晰的成年人照片（经本人同意）：半身入镜、正对镜头、双臂可见且没有交叉、双手空着。短袖或 T 恤更好，两侧手肘外留出空间，弯曲的手臂才不会出框。';
const SOUND_EN =
  'The export is silent. Add the bicep heart trend sound inside TikTok, Reels, or Shorts from that app\'s library, and turn on the AI-generated label. ViralReel does not license the trend audio.';
const SOUND_ZH =
  '导出无声。发布时在 TikTok、Reels 或 Shorts 里从应用曲库加上 bicep heart 热梗原声，并打开 AI 生成标注。ViralReel 不授权热梗音频。';
const SETS_EN =
  'The nine sets are Gym Buff Heart, Everyday Heart, Cat Bicep Heart, Dog Bicep Heart, Original Trend, and four new trend replays (the have-you-heard opener, the trend boy, the tattoo girl, and the black tank heart).';
const SETS_ZH =
  '九套阵容是健身猛男、日常小心心、猫咪比心、狗狗比心、原梗复刻，以及四款新复刻（听说过吗开场、门口 trend 男生、纹身女生、黑背心男生）。';

export const BICEP_HEART_LONG_TAILS: readonly BicepHeartLongTailEntry[] = [
  {
    keyword: 'bicep heart ai',
    slug: 'bicep-heart-ai',
    title: {
      en: 'Bicep Heart AI – Flex a Little Heart From One Photo on ViralReel',
      zh: 'Bicep Heart AI：一张照片在 ViralReel 比出一颗小心心',
    },
    description: {
      en: 'bicep heart ai: ViralReel turns one photo into a 7-second clip — shy smile, one-arm flex, and a hand curled against the bicep into a small heart. Nine sets, people and pets. Silent export, add the trend sound in the app.',
      zh: 'bicep heart ai：ViralReel 把一张照片变成 7 秒视频——害羞一笑、单臂弯举、另一只手扣在肱二头肌上合成小心心。九套阵容，人和宠物都行。导出无声，热梗原声在 App 里加。',
    },
    h1: { en: 'Bicep heart AI', zh: 'Bicep heart AI' },
    lead: {
      en: 'Bicep heart AI on ViralReel is a 7-second vertical clip generated from one photo: the shy smile, the sleeve push, the flex, and the little heart closed against the bicep.',
      zh: 'ViralReel 上的 bicep heart AI 是用一张照片生成的 7 秒竖屏视频：害羞一笑、推袖子、弯举，以及在肱二头肌上合上的那颗小心心。',
    },
    guideTitle: {
      en: 'What bicep heart AI is',
      zh: 'Bicep heart AI 是什么',
    },
    body: {
      en: [
        'The bicep heart is the pose that took over TikTok and X in late October 2026: flex one arm with the fist beside the head, curl the other hand against the bicep, and hand plus muscle close into one small heart. People send it as a bit of love, captioned "send bicep hearts".',
        `Bicep heart AI replays the whole pose with the person from your photo. Open ${EN_TEMPLATE}, pick one of nine sets, and upload one waist-up photo. ${PHOTO_EN} The export is a new silent 7-second 9:16 MP4 — not a download of somebody else\'s clip.`,
        `After it downloads, ${SOUND_EN} ViralReel is pay-per-credit with no free credits: the generator shows the exact cost before you start, and failed renders are refunded automatically.`,
      ],
      zh: [
        'Bicep heart 是 2026 年 10 月底刷屏 TikTok 和 X 的姿势：一条手臂弯起、拳头靠在头边，另一只手扣在肱二头肌上，手和肌肉合成一颗小心心。人们把它当一份小心意发出去，文案写「send bicep hearts」。',
        `Bicep heart AI 用你照片里的人重演整套动作。打开 ${ZH_TEMPLATE} ，九套阵容里选一套，上传一张半身照。${PHOTO_ZH} 导出是一条新的无声 7 秒 9:16 MP4——不是别人视频的下载。`,
        `下载之后，${SOUND_ZH} ViralReel 按积分计费、没有免费积分：生成器会在开始前显示确切费用，渲染失败自动退还。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need to film anything?', zh: '我需要自己拍吗？' },
        a: {
          en: 'No. One photo is enough. The template supplies the smile, the sleeve push, the flex, the heart and the held reveal.',
          zh: '不需要。一张照片就够。微笑、推袖子、弯举、比心和定格揭晓全部由模板完成。',
        },
      },
      {
        q: { en: 'Does the pose need big arms?', zh: '姿势需要手臂很粗吗？' },
        a: {
          en: 'No. The heart is made by the curve of the flexed arm and the placement of the other hand — any arm reads, and the Everyday Heart set is built for exactly that.',
          zh: '不需要。心是由弯曲手臂的弧线和另一只手的位置合成的——什么手臂都读得出来，「日常小心心」套装就是为这个准备的。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart ai video',
    slug: 'bicep-heart-ai-video',
    title: {
      en: 'Bicep Heart AI Video – Make the 7-Second MP4 on ViralReel',
      zh: 'Bicep Heart AI 视频：在 ViralReel 制作 7 秒 MP4',
    },
    description: {
      en: 'bicep heart ai video: ViralReel renders a new 7-second 9:16 MP4 from one photo. Nine sets including cat and dog versions. Silent export, add the trend sound on TikTok, Reels, or Shorts.',
      zh: 'bicep heart ai video：ViralReel 用一张照片渲染新的 7 秒 9:16 MP4。九套阵容，含猫狗版本。导出无声，热梗原声在 TikTok、Reels 或 Shorts 里另加。',
    },
    h1: { en: 'Bicep heart AI video', zh: 'Bicep heart AI 视频' },
    lead: {
      en: 'A bicep heart AI video is a new 7-second MP4 generated from your photo — not a reupload of the viral clips.',
      zh: 'Bicep heart AI 视频是用你的照片新生成的 7 秒 MP4——不是爆火视频的转载。',
    },
    guideTitle: {
      en: 'How to make a bicep heart AI video',
      zh: '如何制作 bicep heart AI 视频',
    },
    body: {
      en: [
        'A bicep heart ai video search wants the file: the shy smile, the sleeve push, the flex landing on the beat, and the heart landing on the next. The viral originals were filmed by real people; an AI version replays the same 7 seconds with the person or pet from your photo.',
        `Make yours at ${EN_TEMPLATE}. ${SETS_EN} ${PHOTO_EN} The page opens on 9:16 with a fixed 7-second length, the same shape the trend uses on TikTok, Reels, and Shorts.`,
        `The download is a silent MP4 of a new scene. ${SOUND_EN}`,
      ],
      zh: [
        '搜 bicep heart ai video 要的是那个文件：害羞一笑、推袖子、弯曲落在节拍上、比心落在下一个。爆火原片是真人拍的；AI 版本用你照片里的人或宠物重演同样的 7 秒。',
        `在 ${ZH_TEMPLATE} 制作。${SETS_ZH} ${PHOTO_ZH} 页面默认 9:16、固定 7 秒，正是这条趋势在 TikTok、Reels 和 Shorts 上的形状。`,
        `下载的是一条新场景的无声 MP4。${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long is the video?', zh: '视频多长？' },
        a: {
          en: 'Seven seconds — the same length as the viral bicep heart clips. The ViralReel page offers only the 7-second option for this template.',
          zh: '7 秒——和爆火的 bicep heart 视频一样长。ViralReel 的这个模板只提供 7 秒一档。',
        },
      },
      {
        q: { en: 'Does the MP4 include the song?', zh: 'MP4 里有歌吗？' },
        a: {
          en: 'No. The export is silent. ViralReel does not license the trend audio; add the sound in TikTok, Reels, or Shorts when you post.',
          zh: '没有。导出无声。ViralReel 不授权热梗音频；发布时在 TikTok、Reels 或 Shorts 里加原声。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart ai generator',
    slug: 'bicep-heart-ai-generator',
    title: {
      en: 'Bicep Heart AI Generator – One Photo, Nine Sets, 7 Seconds',
      zh: 'Bicep Heart AI 生成器：一张照片，九套阵容，7 秒',
    },
    description: {
      en: 'bicep heart ai generator: the ViralReel generator takes one photo and renders the full bicep heart pose in the browser. No prompt box, no app, no CapCut template. Credit cost shown before you start.',
      zh: 'bicep heart ai generator：ViralReel 生成器只要一张照片，在浏览器里渲染整套比心动作。没有提示词框、不用装 App、不用找 CapCut 模板。开始前显示积分。',
    },
    h1: { en: 'Bicep heart AI generator', zh: 'Bicep heart AI 生成器' },
    lead: {
      en: 'The bicep heart AI generator on ViralReel takes one photo and one click: the pose is fixed, the credit cost is shown up front, and the render lands in about 2–3 minutes.',
      zh: 'ViralReel 的 bicep heart AI 生成器只要一张照片加一次点击：姿势是固定的，积分提前显示，渲染约 2-3 分钟出片。',
    },
    guideTitle: {
      en: 'How the generator works',
      zh: '生成器是怎么工作的',
    },
    body: {
      en: [
        'There is no prompt box on the bicep heart template. The scene, the timing and the selfie-style camera are preset; the only inputs are one photo and the set you pick. The upload slot is labeled Your Photo.',
        `Open ${EN_TEMPLATE} and pick a set. ${SETS_EN} ${PHOTO_EN} Keep 9:16 and 7 seconds, read the credit line under the Generate button, and start.`,
        'Renders usually finish in about 2–3 minutes and appear in My generations. Failed jobs are refunded automatically. You can generate the same photo again in a different set without re-uploading.',
      ],
      zh: [
        'Bicep heart 模板没有提示词框。场景、节奏和自拍式机位都已预设；唯一的输入是一张照片和你选的阵容。上传位置写的是「你的照片」。',
        `打开 ${ZH_TEMPLATE} 选一套阵容。${SETS_ZH} ${PHOTO_ZH} 保持 9:16 和 7 秒，看清「立即生成」下方的积分行，再开始。`,
        '渲染通常 2-3 分钟左右完成，出片在「我的生成」里。失败任务自动退积分。同一张照片换一套阵容再生成，不用重新上传。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I write a prompt?', zh: '要写提示词吗？' },
        a: {
          en: 'No. The bicep heart template has no prompt box — the pose is preset. Just upload one photo.',
          zh: '不用。Bicep heart 模板没有提示词框——姿势已经预设好。上传一张照片即可。',
        },
      },
      {
        q: { en: 'How many photos does the generator take?', zh: '生成器要几张照片？' },
        a: {
          en: 'Exactly one. The whole pose is performed by the person (or pet) in that single photo.',
          zh: '只要一张。整套动作都由这一张照片里的人（或宠物）完成。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart tiktok',
    slug: 'bicep-heart-tiktok',
    title: {
      en: 'Bicep Heart TikTok – The Trend and How to Post Your Own',
      zh: 'Bicep Heart TikTok：这波趋势，以及怎么发你自己的',
    },
    description: {
      en: 'bicep heart tiktok: the #bicepheart wave that hit TikTok in late October 2026, the sound behind it, and how to make and post your own 7-second clip from one photo on ViralReel.',
      zh: 'bicep heart tiktok：2026 年 10 月底席卷 TikTok 的 #bicepheart 热潮、背后的原声，以及怎么在 ViralReel 用一张照片做一条 7 秒视频发出去。',
    },
    h1: { en: 'Bicep heart TikTok', zh: 'Bicep heart TikTok' },
    lead: {
      en: 'Bicep heart reached TikTok in late October 2026 and #bicepheart clips now fill the feed. You can join with one photo — no filming required.',
      zh: 'Bicep heart 在 2026 年 10 月底登上 TikTok，#bicepheart 视频现在已经刷屏。你用一张照片就能加入——不用自己拍。',
    },
    guideTitle: {
      en: 'The TikTok wave, and posting your own',
      zh: 'TikTok 上的这波，以及发你自己的',
    },
    body: {
      en: [
        'The TikTok timeline: #bicepheart first appeared on 26 October 2026 (120 videos and 376,108 views by 1 November). On 30 October @hunnybakes posted his take in reply to a commenter — 1.6 million views by 1 November. On 31 October @mckennacrisp posted "im sad please send bicep hearts" — 3.6 million views. On 1 November @kavithageorge posted the dim-room "have you ever heard of a bicep heart..." take — 2.9 million views and 670,200 likes the same day. Most big posts ride one original sound by @trendformusic, used in 70,000+ videos.',
        `To join without filming, make the clip at ${EN_TEMPLATE}. ${SETS_EN} ${PHOTO_EN} The export is a 7-second 9:16 MP4 — the exact shape TikTok wants for this trend.`,
        `When you upload, add the bicep heart sound from TikTok\'s library (or tap "use this sound" on any trend video), turn on the AI-generated label, and caption it like the trend does: "im sad please send bicep hearts", "have you ever heard of a bicep heart...", or "send this to a special someone". ${SOUND_ZH}`,
      ],
      zh: [
        'TikTok 时间线：#bicepheart 标签 2026 年 10 月 26 日首次出现（到 11 月 1 日已有 120 条视频、37.61 万播放）。10 月 30 日 @hunnybakes 在评论区网友演示动作后发了自己的版本——到 11 月 1 日 160 万播放。10 月 31 日 @mckennacrisp 发了「im sad please send bicep hearts」——360 万播放。11 月 1 日 @kavithageorge 发了昏暗房间的「have you ever heard of a bicep heart...」版本——当天 290 万播放、67.02 万点赞。最火的帖子大多用 @trendformusic 的同一条原声，已被 7 万多条视频使用。',
        `不想自己拍的话，在 ${ZH_TEMPLATE} 做一条。${SETS_ZH} ${PHOTO_ZH} 导出 7 秒 9:16 MP4——正是 TikTok 给这个趋势准备的形状。`,
        `上传时，从 TikTok 曲库加 bicep heart 原声（或在任何趋势视频上点「用此声音」），打开 AI 生成标注，并按趋势的文案风格来写：「im sad please send bicep hearts」「have you ever heard of a bicep heart...」「send this to a special someone」。${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which hashtag should I use?', zh: '该用什么标签？' },
        a: {
          en: '#bicepheart is the tag the trend built; #bicephearttrend and #bicephearts also circulate. Keep the caption short and clear of the gesture.',
          zh: '#bicepheart 是趋势长出来的标签；#bicephearttrend 和 #bicephearts 也在流传。文案保持简短，别挡住比心动作。',
        },
      },
      {
        q: { en: 'Can I post an AI bicep heart on TikTok?', zh: 'AI 做的 bicep heart 能发 TikTok 吗？' },
        a: {
          en: 'Yes, with the AI-generated label turned on. TikTok asks generated content to be disclosed; the label does not reduce reach on this trend.',
          zh: '可以，但要打开 AI 生成标注。TikTok 要求生成内容如实标注；这个趋势里标注并不影响流量。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart trend',
    slug: 'bicep-heart-trend',
    title: {
      en: 'Bicep Heart Trend – Origin, Timeline, and Why It Went Viral',
      zh: 'Bicep Heart 趋势：起源、时间线，以及它为什么爆火',
    },
    description: {
      en: 'bicep heart trend: where the flex-and-heart pose came from, the October–November 2026 timeline, the sound, and how to make your own 7-second version from one photo on ViralReel.',
      zh: 'bicep heart trend：弯举比心姿势从哪来、2026 年 10-11 月的时间线、原声，以及怎么在 ViralReel 用一张照片做你自己的 7 秒版本。',
    },
    h1: { en: 'Bicep heart trend', zh: 'Bicep heart 趋势' },
    lead: {
      en: 'The bicep heart trend is a 7-second pose — one arm flexed, one hand curled against the bicep into a heart — that swept TikTok and X in late October 2026.',
      zh: 'Bicep heart 趋势是一个 7 秒姿势——一条手臂弯起，另一只手扣在肱二头肌上比出一颗心——2026 年 10 月底席卷 TikTok 和 X。',
    },
    guideTitle: {
      en: 'The trend, explained',
      zh: '趋势详解',
    },
    body: {
      en: [
        'The pose grew out of gym-flex culture. TikTok had already spent months on "sleeper build" reveals — a seemingly skinny arm flexes into real muscle. In late October 2026 the flex got a heart attached, and the joke flipped: the hardest-looking pose in the gym, carrying the softest message.',
        'The timeline: #bicepheart first appeared on TikTok on 26 October 2026. @hunnybakes posted his take on 30 October (1.6 million views by 1 November). @mckennacrisp posted "im sad please send bicep hearts" on 31 October (3.6 million views). @kavithageorge posted "have you ever heard of a bicep heart..." on 1 November (2.9 million views, 670,200 likes the same day). The trend\'s original sound by @trendformusic passed 70,000 videos by 1 November, and "bicep heart trend" was up 9,700% in a week on Google Trends in the US by 2 November. No single inventor is verified.',
        `To make your own version, open ${EN_TEMPLATE}. ${SETS_EN} ${PHOTO_EN} ${SOUND_EN}`,
      ],
      zh: [
        '这个姿势长在健身展示文化的土壤上。TikTok 已经玩了好几个月「sleeper build」：看起来很瘦的手臂一弯，露出真肌肉。2026 年 10 月底，弯举被加上了一颗心，笑点也翻了过来：健身房里最「硬」的姿势，装着最软的心意。',
        '时间线：#bicepheart 标签 2026 年 10 月 26 日首次出现在 TikTok。@hunnybakes 10 月 30 日发了自己的版本（到 11 月 1 日 160 万播放）。@mckennacrisp 10 月 31 日发了「im sad please send bicep hearts」（360 万播放）。@kavithageorge 11 月 1 日发了「have you ever heard of a bicep heart...」（当天 290 万播放、67.02 万点赞）。@trendformusic 的趋势原声到 11 月 1 日已用在 7 万多条视频里，到 11 月 2 日「bicep heart trend」在美国 Google Trends 一周暴涨 9700%。没有单一的「发明者」被证实。',
        `要做你自己的版本，打开 ${ZH_TEMPLATE} 。${SETS_ZH} ${PHOTO_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'When did the bicep heart trend start?', zh: 'bicep heart 趋势是什么时候开始的？' },
        a: {
          en: 'The #bicepheart hashtag first appeared on TikTok on 26 October 2026, and the wave peaked across 30 October – 2 November 2026 with the @hunnybakes, @mckennacrisp, and @kavithageorge posts.',
          zh: '#bicepheart 标签 2026 年 10 月 26 日首次出现在 TikTok，热度在 10 月 30 日至 11 月 2 日 @hunnybakes、@mckennacrisp、@kavithageorge 三条爆款之间达到顶峰。',
        },
      },
      {
        q: { en: 'Is the bicep heart trend the same as the bicep flex trend?', zh: 'bicep heart 和以前的弯举趋势是一回事吗？' },
        a: {
          en: 'No. The older bicep trend is a "sleeper build" reveal — flex to show muscle. Bicep heart adds the second hand and the heart, turning a gym flex into a message you send someone.',
          zh: '不是。更早的弯举趋势是「sleeper build」揭秘——弯臂亮肌肉。Bicep heart 加上了另一只手和那颗心，把健身展示变成一条可以送人的心意。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart meme',
    slug: 'bicep-heart-meme',
    title: {
      en: 'Bicep Heart Meme – The Flex-and-Heart Joke, Explained',
      zh: 'Bicep Heart 梗：弯举比心的笑点在哪',
    },
    description: {
      en: 'bicep heart meme: why a gym flex holding a tiny heart got funny, the captions that spread it, and how ViralReel makes your own meme clip from one photo.',
      zh: 'bicep heart meme：为什么「健身弯举捧着小心心」会好笑、带火它的那些文案，以及 ViralReel 怎么用一张照片做你自己的梗视频。',
    },
    h1: { en: 'Bicep heart meme', zh: 'Bicep heart 梗' },
    lead: {
      en: 'The bicep heart meme is the mismatch: a hardcore gym flex delivering the softest possible message — a tiny heart held against the bicep.',
      zh: 'Bicep heart 梗在反差：最硬核的健身动作，捧着最软的心意——一颗贴在肱二头肌上的小心心。',
    },
    guideTitle: {
      en: 'The meme, and the clip you can make',
      zh: '这个梗，以及你能做的片子',
    },
    body: {
      en: [
        'The joke has three layers. The pose is maximal (a full bicep flex, fist by the head); the payload is minimal (a heart the size of a coin); and the captions stay deadpan — "have you ever heard of a bicep heart...", "im sad please send bicep hearts", "new boyfriend requirement". Nobody in the trend explains the joke, which is why it spreads.',
        'The pet versions pushed it further: cats and dogs doing the same tiny flex with a paw curled against one leg kept the feed fresh without changing a single rule of the format.',
        `ViralReel does not sell the meme file — it makes yours. Open ${EN_TEMPLATE}, pick a set (the cat and dog sets included), upload one photo, and generate a new 7-second MP4. ${PHOTO_EN} ${SOUND_EN}`,
      ],
      zh: [
        '笑点有三层。姿势拉满（完整的肱二头肌弯举，拳头靠在头边）；信息极小（一枚硬币大小的心）；文案一本正经——「have you ever heard of a bicep heart...」「im sad please send bicep hearts」「new boyfriend requirement」。趋势里没有人解释笑点，所以它传得飞快。',
        '宠物版本把它推向更远：猫和狗做同一个迷你弯举、爪子扣在一条腿上，格式规则一条没改，信息流却一直有新东西。',
        `ViralReel 不出售梗文件——它做你的。打开 ${ZH_TEMPLATE} ，选一套阵容（含猫咪和狗狗套装），上传一张照片，生成一条新的 7 秒 MP4。${PHOTO_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the original bicep heart meme?', zh: '能下载原始的 bicep heart 梗视频吗？' },
        a: {
          en: 'ViralReel does not host or sell the original clips. Save them inside TikTok where they were posted, or make your own version from one photo.',
          zh: 'ViralReel 不托管也不出售原始视频。可以在 TikTok 里收藏原视频，或用一张照片做你自己的版本。',
        },
      },
      {
        q: { en: 'Is my AI version still funny?', zh: 'AI 版本还有那个味儿吗？' },
        a: {
          en: 'Yes — the joke is the pose and the caption, not who filmed it. Label it AI and keep the deadpan caption.',
          zh: '有——笑点在姿势和文案，不在谁拍的。标注 AI，文案继续一本正经。',
        },
      },
    ],
  },
  {
    keyword: 'send bicep hearts',
    slug: 'send-bicep-hearts',
    title: {
      en: 'Send Bicep Hearts – What It Means and How to Send One',
      zh: 'Send Bicep Hearts：什么意思，怎么发一颗',
    },
    description: {
      en: 'send bicep hearts: the caption behind the trend, what sending one means, and how to make a bicep heart video from one photo on ViralReel to send to someone.',
      zh: 'send bicep hearts：趋势背后的文案、发一颗心是什么意思，以及怎么在 ViralReel 用一张照片做一条 bicep heart 视频发给对方。',
    },
    h1: { en: 'Send bicep hearts', zh: 'Send bicep hearts' },
    lead: {
      en: '"Send bicep hearts" means sending someone a bicep heart video as a bit of love — strength and warmth in the same 7 seconds.',
      zh: '「Send bicep hearts」意思是把一条 bicep heart 视频发给某个人当一份小小的心意——7 秒里同时装着力量和温柔。',
    },
    guideTitle: {
      en: 'What sending one means',
      zh: '发一颗心是什么意思',
    },
    body: {
      en: [
        'The captions that spread with the trend say it all: the ask ("im sad please send bicep hearts..."), the hook ("have you ever heard of a bicep heart..."), the gift ("send this to a special someone"), the love note ("giving you all my love"), and the joke ("new boyfriend requirement"). Viewers wait for them — one popular comment reads "waiting for my boyfriend to send one to me".',
        'Sending one does not require a gym. The heart is made by the curve of the flexed arm and the placement of the other hand, so any arm reads — and an AI version does not even need you to pose. Open the template, upload one photo of yourself (or make one from a photo of the person you are sending it to, if they agreed), and download the 7-second MP4.',
        `${SOUND_EN} Then send it in DMs or post it with the caption that fits: the ask, the gift, or the joke.`,
      ],
      zh: [
        '跟着趋势传开的文案把意思说全了：求安慰（「im sad please send bicep hearts...」）、开场钩子（「have you ever heard of a bicep heart...」）、送给你（「send this to a special someone」）、情话（「giving you all my love」）、玩笑（「new boyfriend requirement」）。观众会点名等视频——热门评论写着「waiting for my boyfriend to send one to me」。',
        '发一颗心不需要去健身房。心是由弯曲手臂的弧线和另一只手的位置合成的，什么手臂都读得出来——AI 版本甚至不需要你摆姿势。打开模板，上传一张你自己的照片（或者经对方同意，用对方的照片做一条），下载 7 秒 MP4。',
        `${SOUND_ZH} 然后私信发出去，或者配上合适的文案发帖：求安慰、送给你，或者玩梗。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I make one from my boyfriend or girlfriend\'s photo?', zh: '可以用男朋友或女朋友的照片做吗？' },
        a: {
          en: 'Yes, with their permission. Use a clear waist-up photo of an adult who agreed, and do not use photos of people who have not consented.',
          zh: '可以，前提是对方同意。用经同意的成年人清晰半身照，不要用未经同意的人的照片。',
        },
      },
      {
        q: { en: 'What caption should I send it with?', zh: '发的时候配什么文案？' },
        a: {
          en: 'The trend\'s own captions work: "im sad please send bicep hearts", "have you ever heard of a bicep heart...", or "send this to a special someone".',
          zh: '用趋势自己的文案就行：「im sad please send bicep hearts」「have you ever heard of a bicep heart...」「send this to a special someone」。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart song',
    slug: 'bicep-heart-song',
    title: {
      en: 'Bicep Heart Song – The Trend Sound and Where to Add It',
      zh: 'Bicep Heart 歌曲：趋势原声，以及在哪里加',
    },
    description: {
      en: 'bicep heart song: the original sound behind the #bicepheart trend (@trendformusic, 70,000+ videos) and how to add it to your ViralReel export when you post on TikTok, Reels, or Shorts.',
      zh: 'bicep heart song：#bicepheart 趋势背后的原声（@trendformusic，7 万多条视频使用），以及发布到 TikTok、Reels 或 Shorts 时怎么把原声加到 ViralReel 导出的视频上。',
    },
    h1: { en: 'Bicep heart song', zh: 'Bicep heart 歌曲' },
    lead: {
      en: 'The bicep heart trend rides one TikTok original sound by @trendformusic — used in more than 70,000 videos by 1 November 2026. ViralReel exports are silent; you add the sound in the app.',
      zh: 'Bicep heart 趋势用的是 @trendformusic 的同一条 TikTok 原声——到 2026 年 11 月 1 日已被 7 万多条视频使用。ViralReel 导出无声；原声在 App 里加。',
    },
    guideTitle: {
      en: 'The sound, and where it lives',
      zh: '原声，以及它在哪里',
    },
    body: {
      en: [
        'The flex lands on a beat of the trend sound and the heart lands on the next — that timing is part of the format. The sound that powers the biggest posts went up on TikTok as an original sound by @trendformusic; open any bicep heart video and tap "use this sound", or search the app\'s library when you post.',
        `ViralReel does not license that recording, so the MP4 you download is silent by design. Make the clip at ${EN_TEMPLATE}, upload it in TikTok, Reels, or Shorts, add the sound from that app\'s library, and turn on the AI-generated label. Audio added on the platform plays under the platform\'s music licence — a soundtrack inside a downloaded file is never a music licence.`,
        'If you film the pose by hand instead, the same rule applies: post with the in-app sound so the beats and the licence both line up.',
      ],
      zh: [
        '弯曲落在热梗原声的一个节拍上，比心落在下一个——这个对拍本身就是格式的一部分。带火最火帖子的声音在 TikTok 上是 @trendformusic 的原声；打开任何 bicep heart 视频点「用此声音」，或发布时在应用曲库里搜。',
        `ViralReel 不授权那段录音，所以你下载的 MP4 按设计是无声的。在 ${ZH_TEMPLATE} 做片子，上传到 TikTok、Reels 或 Shorts，从应用曲库加原声，并打开 AI 生成标注。在平台上添加的音频按平台的音乐授权播放——下载文件里内置的音轨永远不构成音乐授权。`,
        '如果你是自己手拍这个姿势，规则一样：用 App 内的原声发布，节拍和授权都能对上。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is the bicep heart sound called?', zh: 'bicep heart 的原声叫什么？' },
        a: {
          en: 'It circulates as an original sound by @trendformusic. Search it in TikTok\'s sound library, or tap "use this sound" on any bicep heart video.',
          zh: '它以 @trendformusic 原声的形式流传。在 TikTok 的声音库里搜，或在任何 bicep heart 视频上点「用此声音」。',
        },
      },
      {
        q: { en: 'Why is my ViralReel export silent?', zh: '为什么 ViralReel 导出的视频没有声音？' },
        a: {
          en: 'By design. Licensing the trend audio is not something ViralReel can do; the sound is added on TikTok, Reels, or Shorts, where it plays under the platform licence.',
          zh: '这是设计如此。ViralReel 无法授权热梗音频；原声在 TikTok、Reels 或 Shorts 里加，按平台授权播放。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart pose',
    slug: 'bicep-heart-pose',
    title: {
      en: 'Bicep Heart Pose – How to Do It by Hand or From a Photo',
      zh: 'Bicep Heart 姿势：亲手摆，或用一张照片生成',
    },
    description: {
      en: 'bicep heart pose: where each finger goes, the 7-second beat-by-beat timing, and how to skip the filming entirely with the ViralReel template from one photo.',
      zh: 'bicep heart pose：每根手指放哪里、7 秒逐拍拆解，以及怎么用 ViralReel 模板一张照片直接生成、完全不用拍。',
    },
    h1: { en: 'Bicep heart pose', zh: 'Bicep heart 姿势' },
    lead: {
      en: 'The bicep heart pose looks simple until you try it in a mirror. Here is exactly where each finger goes — and how to have AI do it from one photo instead.',
      zh: 'Bicep heart 姿势看着简单，照镜子一试才知道难。这里把每根手指的位置讲清楚——以及怎么让 AI 用一张照片替你完成。',
    },
    guideTitle: {
      en: 'The pose, move by move',
      zh: '姿势逐拍拆解',
    },
    body: {
      en: [
        'The flex: bend one arm up at shoulder height with the fist closed beside your head, and turn that arm slightly toward the camera so the bicep curve reads. The hook: curl the four fingers of your other hand under the fist, against the inside of the arm. The thumb: rest it on top of the flexed arm — it is the point of the heart. The heart: the curled fingers and the fist make the two round tops, and hand, forearm and fist frame one small heart. Hold it for a beat and smile.',
        'The 7 seconds, beat by beat: a shy closed-mouth smile (0–0.5s), one hand crosses the chest and pushes up the other sleeve (0.5–2.4s), the arm lifts into the flex on the beat (2.4–3s), the crossing hand curls against the bicep on the next beat (3–4.2s), and the heart holds to the end with a slow blink and a proud little smile (4.2–7s). Film waist-up on the front camera, indoors, in short sleeves, and leave space beside both elbows.',
        `If that is too much choreography, make it at ${EN_TEMPLATE}: upload one photo and the template plays the whole sequence with the person in it. ${PHOTO_EN} ${SOUND_EN}`,
      ],
      zh: [
        '弯举：一条手臂在肩高处弯起、拳头握紧靠在头边，手臂稍稍转向镜头，让肱二头肌的弧线读得出来。勾手：另一只手的四根手指卷到拳头下方、贴在手臂内侧。拇指：抵在弯曲手臂的上方——它是心形的尖。心：卷起的手指和拳头构成两个圆弧，手、小臂和拳头框出一颗小心心。保持一拍，笑一下。',
        '7 秒逐拍拆解：害羞的抿嘴一笑（0–0.5 秒），一只手横过胸前推起另一条袖子（0.5–2.4 秒），手臂踩着节拍弯起（2.4–3 秒），另一只手在下一拍扣上肱二头肌（3–4.2 秒），然后保持到结尾，慢慢眨眼、带一点小骄傲的笑（4.2–7 秒）。前置摄像头、室内、短袖、半身拍，两侧手肘外留出空间。',
        `如果这套编排太麻烦，在 ${ZH_TEMPLATE} 生成：上传一张照片，模板让照片里的人演完整段。${PHOTO_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need big arms for the pose?', zh: '摆这个姿势需要手臂粗吗？' },
        a: {
          en: 'No. The heart\'s shape comes from your own flexed arm and curled hand — any arm reads. The Everyday Heart set exists exactly for regular arms.',
          zh: '不需要。心形来自你自己弯曲的手臂和卷起的手——什么手臂都读得出来。「日常小心心」套装就是为普通手臂准备的。',
        },
      },
      {
        q: { en: 'Why does my heart look crooked?', zh: '为什么我的「心」看起来是歪的？' },
        a: {
          en: 'Thumb placement. Rest the thumb on top of the flexed arm instead of beside it, and turn the flexed arm slightly toward the camera. Viewers of the original posts had the same problem — "I barely got biceps AND MY HAND GOES CROOKED".',
          zh: '拇指位置问题。把拇指抵在弯曲手臂的上方而不是旁边，手臂稍稍转向镜头。原视频的评论区也有一模一样的抱怨——「I barely got biceps AND MY HAND GOES CROOKED」。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart from photo',
    slug: 'bicep-heart-from-photo',
    title: {
      en: 'Bicep Heart From Photo – One Picture In, a 7-Second Heart Out',
      zh: 'Bicep Heart 用照片做：一张照片进，7 秒比心出',
    },
    description: {
      en: 'bicep heart from photo: how ViralReel turns a single waist-up photo into the full 7-second bicep heart video — which photo works, what stays yours, and what to expect.',
      zh: 'bicep heart from photo：ViralReel 怎么把一张半身照变成完整的 7 秒 bicep heart 视频——什么样的照片能用、哪些是你的、成片能期待什么。',
    },
    h1: { en: 'Bicep heart from photo', zh: 'Bicep heart 用照片做' },
    lead: {
      en: 'One photo is the only input. The face and clothes come from your photo; the smile, the sleeve push, the flex, and the heart are performed by the template.',
      zh: '唯一的输入是一张照片。脸和衣服来自你的照片；微笑、推袖子、弯举和比心由模板完成。',
    },
    guideTitle: {
      en: 'From one photo to a held heart',
      zh: '从一张照片到一颗定格的心',
    },
    body: {
      en: [
        `${PHOTO_EN} A vertical photo in a calm, tidy room works best — the render keeps your photo\'s setting, so the heart happens in your own room, not a studio you have never seen.`,
        `Make it at ${EN_TEMPLATE}. ${SETS_EN} The render takes about 2–3 minutes; the download is a new silent 7-second 9:16 MP4. The same photo can be re-run in a different set without uploading again, and failed jobs are refunded.`,
        `${SOUND_EN} Results and hand placement can vary between renders — watch the whole clip before you post, and re-roll if the heart did not close cleanly.`,
      ],
      zh: [
        `${PHOTO_ZH} 竖版照片、安静整洁的房间最好——成片会保留你照片里的场景，比心发生在你自己的房间里，而不是一个陌生的工作室。`,
        `在 ${ZH_TEMPLATE} 制作。${SETS_ZH} 渲染约 2-3 分钟；下载的是一条新的无声 7 秒 9:16 MP4。同一张照片换阵容重跑不用重新上传，失败任务自动退积分。`,
        `${SOUND_ZH} 每次渲染的手部形态可能有差异——发布前把整条看完，如果心没合干净就重跑一次。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Will I keep my own clothes and room?', zh: '会保留我自己的衣服和房间吗？' },
        a: {
          en: 'Yes. The face, hair, outfit and background come from your photo. The motion is the only thing the template supplies.',
          zh: '会。脸、发型、衣服和背景都来自你的照片。模板提供的只有动作。',
        },
      },
      {
        q: { en: 'Can a group photo work?', zh: '合影可以用吗？' },
        a: {
          en: 'No. The bicep heart is a one-person pose. Use a single-subject photo, or run each person separately.',
          zh: '不行。Bicep heart 是单人姿势。用单人照片，或者每个人单独生成。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart free',
    slug: 'bicep-heart-free',
    title: {
      en: 'Is Bicep Heart AI Free? Credits, Costs, and the First Video',
      zh: 'Bicep Heart AI 免费吗？积分、费用，和第一条视频',
    },
    description: {
      en: 'bicep heart free: ViralReel does not offer free credits — rendering is pay-per-credit with transparent pricing. The exact cost shows before every render, and failed renders are refunded automatically.',
      zh: 'bicep heart free：ViralReel 不提供免费积分——按积分计费、价格透明。每次渲染前显示确切费用，渲染失败自动退还。',
    },
    h1: { en: 'Is bicep heart AI free?', zh: 'Bicep heart AI 免费吗？' },
    lead: {
      en: 'Short answer: no, there are no free credits. ViralReel is pay-per-credit with transparent pricing — the exact cost shows in the generator before every render, and failed renders are refunded automatically.',
      zh: '简短回答：没有免费积分。ViralReel 按积分计费、价格透明——每次渲染前生成器显示确切费用，渲染失败自动退还。',
    },
    guideTitle: {
      en: 'Pay per render, priced transparently',
      zh: '按次计费，价格透明',
    },
    body: {
      en: [
        'ViralReel is credit-based and pay-per-render: there are no starter credits and no free trial, so buy a credit pack or a plan before your first render. The generator shows the exact credit cost under the Generate button before you start — for this template it is the 7-second fixed length times the resolution you pick.',
        `Top up with a credit pack at https://www.viralreel.app/pricing or a monthly plan at https://www.viralreel.app/subscribe. ${creditsPerUsdNoteEn()}`,
        `Make the first one at ${EN_TEMPLATE}. ${SETS_EN} Failed jobs are refunded automatically, so a failed render never eats your credits.`,
      ],
      zh: [
        'ViralReel 按积分计费、按次付费：没有新手积分，也没有免费试用，第一次渲染前先购买积分包或月付。生成器会在「立即生成」按钮下方显示本次的确切积分——这个模板是固定 7 秒时长乘以你选的分辨率。',
        `在 https://www.viralreel.app/zh/pricing 买积分包，或在 https://www.viralreel.app/zh/subscribe 订月付。${creditsPerUsdNoteZh()}`,
        `第一条在 ${ZH_TEMPLATE} 做。${SETS_ZH} 失败任务自动退积分，渲染失败不会吞掉你的积分。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a daily free video?', zh: '有每天免费一条吗？' },
        a: {
          en: 'No. There are no free credits at all — every render is paid at the credit price shown in the generator, with packs or a plan. There is no daily free render.',
          zh: '没有。完全没有免费积分——每次渲染都按生成器显示的积分价格计费，用积分包或月付支付。没有每日免费渲染。',
        },
      },
      {
        q: { en: 'Do failed renders cost credits?', zh: '失败的渲染扣积分吗？' },
        a: {
          en: 'No. A confirmed technical failure refunds the credits automatically.',
          zh: '不扣。确认的技术性失败会自动退还积分。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart cat',
    slug: 'bicep-heart-cat',
    title: {
      en: 'Cat Bicep Heart – Make Your Cat Do the Tiny Flex',
      zh: '猫咪 Bicep Heart：让你家猫也做迷你弯举比心',
    },
    description: {
      en: 'cat bicep heart: the pet version of the trend. One sharp photo of your cat, and ViralReel renders the tiny flex-and-heart pose — paw and leg closing into a small heart. 7 seconds, 9:16.',
      zh: 'cat bicep heart：趋势的宠物版本。一张你家猫的清晰照片，ViralReel 渲染迷你弯举比心姿势——爪子和腿合成一颗小心心。7 秒，9:16。',
    },
    h1: { en: 'Cat bicep heart', zh: '猫咪 bicep heart' },
    lead: {
      en: 'The cat bicep heart is the trend\'s pet branch: one front leg bends up like a tiny flex while a paw curls against it, so paw and leg close into the same small heart.',
      zh: '猫咪 bicep heart 是趋势的宠物分支：一条前腿弯起像迷你弯举，爪子卷起扣在上面，爪子和腿合成同一颗小心心。',
    },
    guideTitle: {
      en: 'Make your cat a bicep heart clip',
      zh: '给你家猫做一条比心视频',
    },
    body: {
      en: [
        'Pet versions kept the trend alive after the human clips peaked — cats and dogs repeat the format without changing a rule. The Cat Bicep Heart set on ViralReel is built for it: upload one sharp photo of your own cat with the face and markings clear, and the template renders the tiny flex, the paw curl, and the held heart while keeping the room from your photo.',
        `Make it at ${EN_TEMPLATE} with the Cat Bicep Heart set selected. The export is the same silent 7-second 9:16 MP4 as the human sets. ${SOUND_EN}`,
        'Photo tips: shoot at the cat\'s eye level, in good light, with the whole front leg in frame. Fur colors and markings come from your photo — a blurry or backlit photo gives the model less to work with.',
      ],
      zh: [
        '人类版本的爆款过后，是宠物版本把热度续了下去——猫和狗在一条规则不改的前提下重复这个格式。ViralReel 的猫咪比心套装就是为它准备的：上传一张你自己猫的清晰照片，脸和花纹要清楚，模板渲染迷你弯举、爪子卷起和定格的心，同时保留照片里的房间。',
        `在 ${ZH_TEMPLATE} 选「猫咪比心」套装制作。导出和人类套装一样，是无声的 7 秒 9:16 MP4。${SOUND_ZH}`,
        '拍照建议：蹲到猫的视线高度、光线充足、整条前腿入镜。毛色和花纹来自你的照片——模糊或逆光的照片能给模型的信息就少了。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does it work for dogs too?', zh: '狗狗也可以吗？' },
        a: {
          en: 'Yes — pick the Dog Bicep Heart set. Same pose, same 7-second export.',
          zh: '可以——选「狗狗比心」套装。同一个姿势，同样 7 秒导出。',
        },
      },
      {
        q: { en: 'Do I need the cat to pose?', zh: '需要猫配合摆姿势吗？' },
        a: {
          en: 'No. Any clear photo works — the template performs the flex and the paw heart. Your cat never has to do anything.',
          zh: '不需要。任何清晰照片都行——弯举和爪子比心由模板完成。你家猫什么都不用做。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart pet',
    slug: 'bicep-heart-pet',
    title: {
      en: 'Bicep Heart Pet Versions – Cats, Dogs, and the Tiny Flex',
      zh: 'Bicep Heart 宠物版本：猫、狗，和迷你弯举',
    },
    description: {
      en: 'bicep heart pet: how the trend went four-legged, and how to make a cat or dog bicep heart video from one pet photo on ViralReel — same 7-second format, same heart.',
      zh: 'bicep heart pet：趋势怎么长出了四条腿的版本，以及怎么在 ViralReel 用一张宠物照片做猫狗 bicep heart 视频——同样的 7 秒格式，同样的心。',
    },
    h1: { en: 'Bicep heart pet versions', zh: 'Bicep heart 宠物版本' },
    lead: {
      en: 'The bicep heart format works on four legs: one front leg bends into a tiny flex, a paw curls against it, and the same small heart appears.',
      zh: 'Bicep heart 格式在四条腿上也成立：一条前腿弯成迷你弯举，爪子卷起扣在上面，同一颗小心心就出现了。',
    },
    guideTitle: {
      en: 'Pet sets on ViralReel',
      zh: 'ViralReel 的宠物套装',
    },
    body: {
      en: [
        'Two pet sets exist: Cat Bicep Heart and Dog Bicep Heart. Both replay the same 7-second sequence — the shy look, the tiny flex on the beat, the paw curling against the leg, and the held heart — with your pet, keeping the room from your photo and the fur colors from your photo.',
        `Make one at ${EN_TEMPLATE}. Use a sharp photo of your own pet with the face clear, shot at eye level with the whole front leg in frame. Fur colors and markings come from your photo.`,
        `${SOUND_EN} Pet clips post exactly like the human ones — same hashtags, same captions, same AI label if the clip is generated.`,
      ],
      zh: [
        '宠物套装有两个：猫咪比心和狗狗比心。两者重演同样的 7 秒——害羞的眼神、踩在节拍上的迷你弯举、爪子扣上腿、定格的心——主角是你的宠物，同时保留照片里的房间和你拍到的毛色。',
        `在 ${ZH_TEMPLATE} 制作。用你自己宠物的清晰照片，脸要清楚，蹲到它的视线高度拍、整条前腿入镜。毛色和花纹来自你的照片。`,
        `${SOUND_ZH} 宠物视频的发布方式和人类版本完全一样——同样的标签、同样的文案，生成的片子同样要标 AI。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I use a shelter pet\'s photo from the internet?', zh: '可以用网上捡来的宠物照片吗？' },
        a: {
          en: 'Use photos of your own pet, or of a pet whose owner agreed. Do not make AI clips of other people\'s animals.',
          zh: '用你自己宠物的照片，或经主人同意的宠物照片。不要给别人的动物做 AI 视频。',
        },
      },
      {
        q: { en: 'Which animals work best?', zh: '什么动物效果最好？' },
        a: {
          en: 'Cats and dogs are the sets we ship. Any pet with a visible front leg and a clear face photo can try the human-independent pose render, but cats and dogs read best.',
          zh: '我们上架的是猫和狗套装。任何前腿可见、脸部清晰的照片都可以试，但猫狗效果最好。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart photo tips',
    slug: 'bicep-heart-photo-tips',
    title: {
      en: 'Bicep Heart Photo Tips – The One Photo That Makes a Clean Heart',
      zh: 'Bicep Heart 照片建议：一张能出干净心形的照片',
    },
    description: {
      en: 'bicep heart photo tips: waist-up framing, both arms visible, short sleeves, room beside the elbows — the checklist for the one photo ViralReel turns into a 7-second bicep heart.',
      zh: 'bicep heart photo tips：半身取景、双臂可见、短袖、手肘外留空间——ViralReel 用它做出 7 秒比心的那张照片的完整清单。',
    },
    h1: { en: 'Bicep heart photo tips', zh: 'Bicep heart 照片建议' },
    lead: {
      en: 'The bicep heart render is only as good as the photo. One person, waist-up, both arms free — that is the whole checklist, expanded below.',
      zh: 'Bicep heart 的成片质量取决于照片。一个人、半身、双臂自由——清单就这么短，下面展开讲。',
    },
    guideTitle: {
      en: 'The photo checklist',
      zh: '照片清单',
    },
    body: {
      en: [
        'Framing: waist-up, facing the camera, both arms visible and not crossed, hands free and not in pockets. Leave space on each side of the body so the raised elbow does not begin outside the frame. A vertical photo works best — the export is 9:16.',
        'Clothing and light: short sleeves or a T-shirt show where the hand meets the upper arm. Even light beats a heavy beauty filter; the face should stay recognizable when the arm rises. Avoid sunglasses, hats that hide the face, a phone covering the face, and objects held in both hands. No second person, no group shots.',
        `Upload the original image when possible instead of a recompressed screenshot. Make it at ${EN_TEMPLATE}. ${SETS_EN} ${SOUND_EN}`,
      ],
      zh: [
        '取景：半身、正对镜头、双臂可见且没有交叉、双手空着不放口袋。身体两侧留出空间，弯曲的手肘不要出框。竖版照片最好——导出是 9:16。',
        '衣着和光线：短袖或 T 恤能看清手和上臂的接触位置。均匀的光线胜过重度美颜；手臂抬起来时脸要还能认出来。避免墨镜、挡脸的帽子、挡脸的手机和双手持物。不要第二个人，不要合影。',
        `尽量上传原图而不是反复压缩的截图。在 ${ZH_TEMPLATE} 制作。${SETS_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does the photo need to show a flex?', zh: '照片里需要摆出弯举吗？' },
        a: {
          en: 'No. The template performs the whole pose. A relaxed standing photo with both arms visible is ideal.',
          zh: '不需要。整套姿势由模板完成。一张双臂可见的放松站立照最理想。',
        },
      },
      {
        q: { en: 'Will the AI add muscle to my arm?', zh: 'AI 会给我的手臂加肌肉吗？' },
        a: {
          en: 'No. The render keeps your own arms and body; the curled hand makes most of the heart, not the bicep size.',
          zh: '不会。成片保留你自己的手臂和身体；心主要靠卷起的那只手合成，跟肱二头肌大小关系不大。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart meaning',
    slug: 'bicep-heart-meaning',
    title: {
      en: 'Bicep Heart Meaning – What the Little Heart on the Bicep Says',
      zh: 'Bicep Heart 含义：肱二头肌上那颗小心心在说什么',
    },
    description: {
      en: 'bicep heart meaning: what the flex-and-heart gesture communicates, why it became the trend\'s love note, and how it differs from the overhead heart and the sleeper-build flex.',
      zh: 'bicep heart meaning：弯举比心这个手势在表达什么、为什么成了趋势里的情话，以及它和双手举过头顶比心、sleeper build 弯举的区别。',
    },
    h1: { en: 'Bicep heart meaning', zh: 'Bicep heart 含义' },
    lead: {
      en: 'A bicep heart says two things at once: "I\'m strong" and "this little heart is for you". The contrast is the message.',
      zh: 'Bicep heart 同时说两句话：「我很强」和「这颗小心心是给你的」。反差本身就是信息。',
    },
    guideTitle: {
      en: 'What the gesture means',
      zh: '这个手势的含义',
    },
    body: {
      en: [
        'On its own, a bicep flex is gym culture — strength, progress, a little showing off. Add the curled hand and the flex becomes a frame for a heart: the same strength, now carrying something soft. That is why the trend became a way to send affection without saying it plainly — the irony is built in, so nobody has to be earnest alone.',
        'It is not an emoji. The bicep heart is personal: it takes 7 seconds of someone\'s day, it is usually sent to one person (the captions ask for them by name), and pet versions turn it into pure play. It is also not the overhead heart — that one uses both arms above the head, a group-gesture with a different, more celebratory feel. And it is not the sleeper-build reveal, which flexes to show muscle and adds no heart at all.',
        `To send one, make it at ${EN_TEMPLATE} from one photo. ${SETS_EN} ${SOUND_EN}`,
      ],
      zh: [
        '单看弯举，那是健身房文化——力量、进步、一点点炫耀。加上卷起的那只手，弯举变成了心的相框：同样的力量，现在装着柔软的东西。所以这个趋势成了「不用直说也能传情」的方式——反讽感是自带的，谁都不用独自掏心掏肺。',
        '它不是一个表情包。Bicep heart 是私人的：要花某人 7 秒，通常只发给一个人（文案里都点名求），宠物版本则把它变成纯粹的玩闹。它也不是 overhead heart——那个是双臂举过头顶，偏群体、偏庆祝的手势。它也不是 sleeper build 揭秘——那个弯臂是为了亮肌肉，压根没有心。',
        `要发一颗，在 ${ZH_TEMPLATE} 用一张照片做。${SETS_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is a bicep heart flirty or friendly?', zh: 'Bicep heart 是暧昧还是友好？' },
        a: {
          en: 'Both, by design. The gym frame keeps it ironic; the heart keeps it warm. The caption decides which way it leans.',
          zh: '两者都是，设计如此。健身的外壳提供反讽，心提供温度。往哪边偏，由文案决定。',
        },
      },
      {
        q: { en: 'What is the difference from the overhead heart?', zh: '和 overhead heart 有什么区别？' },
        a: {
          en: 'A bicep heart is small and sits against one flexed upper arm; an overhead heart uses both arms raised above the head. Different poses, different search terms.',
          zh: 'Bicep heart 是贴在一条弯曲上臂上的小心心；overhead heart 是双臂举过头顶。不同姿势，不同搜索词。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart capcut',
    slug: 'bicep-heart-capcut',
    title: {
      en: 'Bicep Heart CapCut vs ViralReel – Template and Browser Paths',
      zh: 'Bicep Heart：CapCut 模板与 ViralReel 浏览器路径对照',
    },
    description: {
      en: 'bicep heart capcut: how the CapCut template path compares with ViralReel\'s browser template — one photo, 7 seconds, no editing app, credit cost shown before you start.',
      zh: 'bicep heart capcut：CapCut 模板路径和 ViralReel 浏览器模板的对照——一张照片、7 秒、不装剪辑 App，开始前显示积分。',
    },
    h1: { en: 'Bicep heart on CapCut vs ViralReel', zh: 'Bicep heart：CapCut 和 ViralReel' },
    lead: {
      en: 'Both paths make the same 7-second clip. CapCut edits on your phone; ViralReel renders in the browser from one photo with nothing to install.',
      zh: '两条路径做的是同一种 7 秒片子。CapCut 在手机上剪；ViralReel 在浏览器里用一张照片渲染，什么都不用装。',
    },
    guideTitle: {
      en: 'Two paths to the same heart',
      zh: '通往同一颗心的两条路',
    },
    body: {
      en: [
        'A CapCut template plays the trend clip and drops your photo into it inside the CapCut app: you install the app, find the right template among lookalikes, and wait through the export queue on your phone. ViralReel keeps the whole flow in the browser: open the page, upload one photo, pick a set, generate.',
        `The ViralReel template is fixed — pose, timing and camera are preset, and there is no prompt to write. ${SETS_EN} ${PHOTO_EN} The credit cost shows before you start, and failed renders refund automatically.`,
        `${SOUND_EN} Whichever path you choose, the posting step is the same: 9:16, the trend sound from the app\'s library, and the AI label if your clip is generated.`,
      ],
      zh: [
        'CapCut 模板是在 CapCut App 里播放趋势片段并把你的照片放进去：你要装 App，在一堆相似模板里找对那一个，然后在手机上排队导出。ViralReel 把整个流程留在浏览器里：打开页面、上传一张照片、选一套阵容、生成。',
        `ViralReel 的模板是固定的——姿势、节奏和机位都已预设，没有提示词要写。${SETS_ZH} ${PHOTO_ZH} 开始前显示积分，失败渲染自动退。`,
        `${SOUND_ZH} 无论选哪条路，发布步骤都一样：9:16、从应用曲库加热梗原声、生成的片子标 AI。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need CapCut for the bicep heart trend?', zh: '玩 bicep heart 一定要用 CapCut 吗？' },
        a: {
          en: 'No. The ViralReel template renders the same clip in the browser from one photo — no app, no template hunting.',
          zh: '不用。ViralReel 模板在浏览器里用一张照片渲染同样的片子——不装 App，不用找模板。',
        },
      },
      {
        q: { en: 'Does ViralReel add the trend sound like CapCut?', zh: 'ViralReel 会像 CapCut 一样带原声吗？' },
        a: {
          en: 'No. The export is silent; you add the sound in TikTok, Reels, or Shorts where it plays under the platform licence.',
          zh: '不会。导出无声；原声在 TikTok、Reels 或 Shorts 里加，按平台授权播放。',
        },
      },
    ],
  },
  ...BICEP_HEART_INTENT_TAILS,
  ...BICEP_HEART_CITE_TAILS,
];

function creditsPerUsdNoteEn() {
  return 'The pricing page lists current credit packs, and $1 buys roughly a dozen credits at the standard rate — the exact math shows in the generator before each render.';
}
function creditsPerUsdNoteZh() {
  return '定价页列着当前的积分包，标准汇率下 1 美元大约买十几个积分——每次渲染前的确切数字在生成器里显示。';
}

export function getBicepHeartLongTail(slug: string) {
  return BICEP_HEART_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveBicepHeartLongTailSteps(entry: BicepHeartLongTailEntry): readonly BicepHeartHowToStep[] {
  return entry.steps === 'shared' ? BICEP_HEART_HOW_TO_STEPS : entry.steps;
}

export function buildBicepHeartLongTailFaq(
  entry: BicepHeartLongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const lang = zh ? 'zh' : 'en';
  const own = entry.faq.map((item) => [item.q[lang], item.a[lang]] as [string, string]);
  const template = templateUrl(zh);
  const shared: [string, string][] = zh
    ? [
        [
          '在哪里制作？',
          `在 ViralReel 制作：${template} 。上传一张你有权使用的成年人照片（或你自己宠物的照片），生成一条新的 7 秒比心视频，下载 MP4。ViralReel 不授权热梗原声。`,
        ],
        [
          '照片有什么要求？',
          '一张清晰的成年人照片（经本人同意）：半身入镜、正对镜头、双臂可见且没有交叉、双手空着。短袖或 T 恤更好，两侧手肘外留出空间。不要用未成年人、名人、公众人物或网图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx, 7)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 TikTok、X 以及带火这个趋势的创作者均无关联，也不授权热梗原声。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload one photo of a consenting adult (or your own pet), generate a new 7-second bicep heart clip, and download the MP4. ViralReel does not license the trend audio.`,
        ],
        [
          'What are the photo requirements?',
          'One clear photo of a consenting adult: waist-up, facing the camera, both arms visible and not crossed, hands free. Short sleeves help, and leaving space beside both elbows keeps the flex in frame. No minors, celebrities, public figures, or photos scraped from the web.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx, 7)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with TikTok, X, or the creators who started the trend, and it does not license the trend audio.',
        ],
      ];
  return [...own, ...shared];
}

export interface BicepHeartLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function bicepHeartLinkGroups(zh: boolean): BicepHeartLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: BICEP_HEART_TEMPLATE_PATH, label: zh ? 'Bicep Heart 模板' : 'Bicep Heart template' },
        { href: '/bicep-heart-ai', label: 'Bicep Heart AI' },
        { href: '/bicep-heart-ai-video', label: zh ? 'Bicep Heart AI 视频' : 'Bicep Heart AI video' },
        { href: '/bicep-heart-ai-generator', label: zh ? 'AI 生成器' : 'AI generator' },
        { href: '/bicep-heart-generator', label: zh ? 'Bicep Heart 生成器' : 'Bicep Heart generator' },
        { href: '/bicep-heart-from-photo', label: zh ? '用照片做' : 'From a photo' },
        { href: '/create-bicep-heart-ai', label: zh ? '创建一条新的' : 'Create a new one' },
        { href: '/make-bicep-heart-ai', label: zh ? '制作步骤' : 'Make one' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/bicep-heart-trend', label: zh ? '趋势与起源时间线' : 'Trend and origin timeline' },
        { href: '/bicep-heart-meme', label: zh ? 'Bicep Heart 梗' : 'Bicep heart meme' },
        { href: '/bicep-heart-meaning', label: zh ? '梗的含义' : 'The meaning' },
        { href: '/send-bicep-hearts', label: 'Send bicep hearts' },
        { href: '/bicep-heart-tiktok', label: 'Bicep heart TikTok' },
        { href: '/bicep-heart-song', label: zh ? '趋势原声（App 里加）' : 'The trend sound (in the app)' },
        { href: '/bicep-heart-vs-overhead-heart', label: zh ? '和双手比心的区别' : 'Vs the overhead heart' },
        { href: '/bicep-heart-sleeper-build', label: zh ? '和 sleeper build 的区别' : 'Vs sleeper builds' },
        { href: BICEP_HEART_POSTS.roundup, label: zh ? '2026 年 10 月 AI 梗视频' : 'October 2026 AI meme videos' },
      ],
    },
    {
      title: zh ? '姿势和照片' : 'Pose and photos',
      links: [
        { href: '/bicep-heart-pose', label: zh ? '亲手摆姿势' : 'Do the pose by hand' },
        { href: '/bicep-heart-photo-tips', label: zh ? '照片建议' : 'Photo tips' },
        { href: '/bicep-heart-cat', label: zh ? '猫咪比心' : 'Cat bicep heart' },
        { href: '/bicep-heart-pet', label: zh ? '宠物版本' : 'Pet versions' },
        { href: '/bicep-heart-7-seconds', label: zh ? '7 秒逐拍拆解' : 'The 7 seconds, beat by beat' },
      ],
    },
    {
      title: zh ? '怎么做（ChatGPT 常问）' : 'How to make it',
      links: [
        { href: '/how-to-make-bicep-heart-ai-video', label: zh ? '如何制作 AI 视频' : 'How to make an AI video' },
        { href: '/bicep-heart-free', label: zh ? '积分与费用' : 'Credits and costs' },
        { href: '/bicep-heart-prompt', label: zh ? '没有提示词框' : 'No prompt box' },
        { href: '/bicep-heart-kling', label: zh ? '和 Kling 对照' : 'Kling comparison' },
        { href: '/bicep-heart-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: '/bicep-heart-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
        { href: '/bicep-heart-ai-label', label: zh ? '发布时的 AI 标注' : 'AI label when you post' },
        { href: '/bicep-heart-online', label: zh ? '在线制作' : 'Make it online' },
      ],
    },
  ];
}

export const BICEP_HEART_LONG_TAIL_ROUTES = BICEP_HEART_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
