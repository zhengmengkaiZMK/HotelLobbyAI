import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { DANCE_WITH_SANTA_HOW_TO_STEPS, type DanceWithSantaHowToStep } from './steps';

/**
 * Long-tail landings for the Dance with Santa template.
 *
 * To add another keyword: append an entry here. The sitemap reads
 * DANCE_WITH_SANTA_LONG_TAIL_ROUTES. Public URLs are served by the single
 * `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `dance-with-santa-ai-template` slug.
 */

export const DANCE_WITH_SANTA_TEMPLATE_PATH = '/dance-with-santa-ai-template';

export const DANCE_WITH_SANTA_POSTS = {
  howTo: '/blog/how-to-make-dance-with-santa-ai-video',
  explained: '/blog/what-is-dance-with-santa-trend',
  bailando: '/blog/bailando-con-santa-capcut-template',
} as const;

const PRODUCT = { en: 'Dance with Santa', zh: 'Dance with Santa' };

const EN_TEMPLATE = 'https://www.viralreel.app/dance-with-santa-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/dance-with-santa-ai-template';
const EN_HOWTO = 'https://www.viralreel.app/blog/how-to-make-dance-with-santa-ai-video';
const ZH_HOWTO = 'https://www.viralreel.app/zh/blog/how-to-make-dance-with-santa-ai-video';
const EN_EXPLAINED = 'https://www.viralreel.app/blog/what-is-dance-with-santa-trend';
const ZH_EXPLAINED = 'https://www.viralreel.app/zh/blog/what-is-dance-with-santa-trend';
const EN_BAILANDO = 'https://www.viralreel.app/blog/bailando-con-santa-capcut-template';
const ZH_BAILANDO = 'https://www.viralreel.app/zh/blog/bailando-con-santa-capcut-template';

function templateUrl(zh: boolean) {
  return zh ? ZH_TEMPLATE : EN_TEMPLATE;
}

type Copy = { en: string; zh: string };

export interface LongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface LongTailEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  steps: 'shared' | readonly DanceWithSantaHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTO_EN =
  'One full-body photo is the whole input: standing, face clearly visible and well lit, head to toe in frame. The clip shows both dancers from head to toe, so your clothes from the photo go into the video — wear something you like. One person per photo. Do not upload celebrities, strangers, or screenshots of the original TikTok.';
const PHOTO_ZH =
  '一张全身照就是全部输入：站立、正脸清晰、光线好、从头到脚都在画面里。片段里两个人都是从头到脚入镜，你照片里的衣服会进视频——穿喜欢的衣服。一张照片一个人。不要上传名人、陌生人或原始 TikTok 的截图。';

const CASTS_EN =
  'The eight casts are Little Dancer (a child in a woven skirt), Burgundy Satin, Black Tank Moves, Cream & Stripes, Embroidered & Shades, Mustard Sweater, Patterned Dress, and Blue Satin Gown.';
const CASTS_ZH =
  '八套阵容是小舞者织裙、勃艮第缎裙、黑背心运动、米白条纹裤、刺绣墨镜、芥末毛衣、碎花短裙和蓝缎长裙。';

export const DANCE_WITH_SANTA_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'dance with santa ai',
    slug: 'dance-with-santa-ai',
    title: {
      en: 'Dance with Santa AI – Put Your Photo Next to Santa Claus',
      zh: 'Dance with Santa AI：把你的照片放到圣诞老人身边',
    },
    description: {
      en: 'dance with santa ai: one photo becomes a 15-second 9:16 video of you dancing next to Santa on a red carpet. Eight casts, no CapCut needed, browser render. Not affiliated with TikTok or CapCut.',
      zh: 'dance with santa ai：一张照片变成 15 秒 9:16 视频——你在红毯上和圣诞老人共舞。八套阵容，无需 CapCut，浏览器直出。与 TikTok、CapCut 无关联。',
    },
    h1: { en: 'Dance with Santa AI', zh: 'Dance with Santa AI' },
    lead: {
      en: 'Dance with Santa AI is the browser way to join the November 2026 trend: one photo in, a 15-second dance with Santa Claus out.',
      zh: 'Dance with Santa AI 是加入 2026 年 11 月这个趋势的浏览器方式：一张照片进，一段 15 秒的和圣诞老人共舞出。',
    },
    guideTitle: {
      en: 'How to make a Dance with Santa AI video',
      zh: '如何制作 Dance with Santa AI 视频',
    },
    body: {
      en: [
        `The trend runs on a CapCut template called "Bailando con Santa", but you do not need the app. The Dance with Santa AI page on ViralReel does the same thing in the browser: pick one of eight casts, upload one full-body photo, and the AI puts the person from your photo next to Santa Claus on the red carpet of a wood-panelled Christmas hall — same Santa, same routine, your face and outfit. Make it at ${EN_TEMPLATE}.`,
        `${PHOTO_EN} ${CASTS_EN} Pick the one closest to your photo in height and outfit, leave the ratio on 9:16, and read the credit cost before you generate. The length is fixed at 15 seconds, matching the trend clips.`,
        'The download is a new MP4 of a new scene, not a copy of any TikTok. ViralReel does not license the template\'s sound — add the trend sound from the TikTok, Reels, or Shorts library and turn on the AI-generated label. December is the window: the trend took off the moment Christmas-card season started, and family shares on WhatsApp are driving it as much as TikTok.',
      ],
      zh: [
        `趋势跑在名为「Bailando con Santa」的 CapCut 模板上，但你不需要那个 App。ViralReel 的 Dance with Santa AI 页面在浏览器里做同样的事：八套阵容任选，上传一张全身照，AI 把你照片里的人放到木板墙圣诞大厅的红毯上、圣诞老人身边——圣诞老人不变、舞步不变，脸和衣服是你的。制作入口：${ZH_TEMPLATE} 。`,
        `${PHOTO_ZH} ${CASTS_ZH} 选一条身高和穿搭和你最像的，画幅保持 9:16，生成前先看清积分。时长固定 15 秒，和趋势片段一致。`,
        '下载的是一条新场景的新 MP4，不是任何 TikTok 的拷贝。ViralReel 不授权模板原声——请在 TikTok、Reels 或 Shorts 的曲库里加热梗原声，并打开 AI 生成标注。12 月就是窗口：趋势在圣诞贺卡季开始的那一刻起飞，家庭 WhatsApp 转发的推动力不亚于 TikTok。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is Dance with Santa AI the same as the CapCut template?', zh: 'Dance with Santa AI 和 CapCut 模板是一回事吗？' },
        a: {
          en: 'It recreates the same trend without the app. The CapCut template "Bailando con Santa" started it; ViralReel renders the same scene and routine in the browser from one photo, with no CapCut project to hunt down.',
          zh: '它在没有 App 的情况下复刻同一个趋势。CapCut 模板「Bailando con Santa」是起源；ViralReel 在浏览器里用一张照片渲染同样的场景和舞步，不用去找 CapCut 工程。',
        },
      },
      {
        q: { en: 'How many photos does Dance with Santa AI need?', zh: 'Dance with Santa AI 需要几张照片？' },
        a: {
          en: 'One. The person next to Santa is the only thing that changes — Santa, the hall, the red carpet and the dance all come from the template.',
          zh: '一张。唯一会变的就是圣诞老人身边的人——圣诞老人、大厅、红毯和舞步全部来自模板。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa ai video',
    slug: 'dance-with-santa-ai-video',
    title: {
      en: 'Dance with Santa AI Video – Make the 15-Second MP4 on ViralReel',
      zh: 'Dance with Santa AI 视频：在 ViralReel 制作 15 秒 MP4',
    },
    description: {
      en: 'dance with santa ai video: ViralReel renders a 15-second 9:16 MP4 from one photo — you dancing next to Santa Claus on a red carpet. Eight casts. Add the trend sound in the app and label it AI.',
      zh: 'dance with santa ai video：ViralReel 用一张照片渲染 15 秒 9:16 MP4——你在红毯上和圣诞老人共舞。八套阵容。原声在 App 里加，记得标注 AI。',
    },
    h1: { en: 'Dance with Santa AI video', zh: 'Dance with Santa AI 视频' },
    lead: {
      en: 'A Dance with Santa AI video on ViralReel is a new MP4 — not a download of any TikTok and not the CapCut template project.',
      zh: 'ViralReel 上的 Dance with Santa AI 视频是一条新的 MP4——不是任何 TikTok 的下载，也不是 CapCut 模板工程。',
    },
    guideTitle: {
      en: 'What the file is, and what it is not',
      zh: '这个文件是什么，不是什么',
    },
    body: {
      en: [
        `The search wants the file: 15 seconds, 9:16, you and Santa dancing side by side on the red carpet — the bounce, the hand behind the head, the knee lift, the hip shake, the turn, the smiles. Make it at ${EN_TEMPLATE}. ${CASTS_EN}`,
        `${PHOTO_EN} The page opens on 9:16 and the length is fixed at 15 seconds. The exact credit cost shows in the generator before you start; paid exports are watermark-free, and failed jobs return their credits.`,
        'The MP4 does not include a licensed soundtrack — ViralReel does not license the template\'s sound ("original sound - sarahicat15") or any audio in the preview clips. Add the trend sound inside TikTok, Reels, or Shorts and turn on the AI-generated label. Posting caption: #bailandoconsanta and #santa. The full steps are ' + EN_HOWTO + '.',
      ],
      zh: [
        `搜索要的是那个文件：15 秒、9:16、你和圣诞老人在红毯上并肩共舞——弹跳、手放脑后、抬膝、扭胯、转身、笑容。制作入口：${ZH_TEMPLATE} 。${CASTS_ZH}`,
        `${PHOTO_ZH} 页面默认 9:16，时长固定 15 秒。开始前生成器会显示确切积分；付费导出无水印，失败任务退还积分。`,
        'MP4 里没有已授权的原声——ViralReel 不授权模板原声（「original sound - sarahicat15」），也不授权预览片段里的任何音频。在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 生成标注。发布配文：#bailandoconsanta 和 #santa。完整步骤在 ' + ZH_HOWTO + ' 。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does the MP4 include the song?', zh: 'MP4 里包含那首歌吗？' },
        a: {
          en: 'No. The download is the picture only. ViralReel does not license the template\'s sound; add it from the TikTok, Reels, or Shorts library when you post.',
          zh: '不包含。下载的只有画面。ViralReel 不授权模板原声；发布时请在平台曲库里加。',
        },
      },
      {
        q: { en: 'How long is the video?', zh: '视频有多长？' },
        a: {
          en: '15 seconds, matching the trend clips, in 9:16 vertical for TikTok, Reels, and Shorts.',
          zh: '15 秒，与趋势片段一致，9:16 竖版，适配 TikTok、Reels 和 Shorts。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa template',
    slug: 'dance-with-santa-template',
    title: {
      en: 'Dance with Santa Template – Eight Casts, One Santa',
      zh: 'Dance with Santa 模板：八套阵容，一个圣诞老人',
    },
    description: {
      en: 'dance with santa template: eight ViralReel casts of the November 2026 trend — same hall, same Santa, same routine, one photo per render. Play counts per ViralRemix, 15 Nov 2026.',
      zh: 'dance with santa template：ViralReel 的八套 2026 年 11 月趋势阵容——同一个大厅、同一个圣诞老人、同一套舞步，每次渲染一张照片。播放数据来自 ViralRemix 2026-11-15 统计。',
    },
    h1: { en: 'Dance with Santa template', zh: 'Dance with Santa 模板' },
    lead: {
      en: 'The Dance with Santa template is one locked scene with eight casts: pick the clip whose dancer is closest to your photo.',
      zh: 'Dance with Santa 模板是一个锁定场景配八套阵容：选一条舞者和你的照片最像的片段。',
    },
    guideTitle: {
      en: 'Every cast in the template, with its TikTok numbers',
      zh: '模板里的每套阵容，以及各自的 TikTok 数据',
    },
    body: {
      en: [
        'Every card on the Dance with Santa template page is the same wood-panelled hall, the same red carpet, the same Santa and the same 15-second routine. The casts differ in one thing only: who danced next to him. Per ViralRemix\'s 15 November 2026 check, the biggest casts in the trend were the little girl in a woven skirt (about 67K plays), the burgundy satin dress (about 57K), the black tank top (about 21K), the cream top with striped trousers (about 21K), and the embroidered blouse with shades (about 16K).',
        `On ViralReel those casts are Little Dancer, Burgundy Satin, Black Tank Moves, Cream & Stripes, Embroidered & Shades, Mustard Sweater, Patterned Dress, and Blue Satin Gown — all at ${EN_TEMPLATE}. ${PHOTO_EN}`,
        'Pick by height and outfit, not by play count: the closer the cast is to your photo, the better the swap reads. The preview clips are sourced from the TikTok trend and each card credits the account it came from. ViralReel does not license the template\'s sound or the audio in the previews.',
      ],
      zh: [
        'Dance with Santa 模板页上的每张卡片都是同一个木板墙大厅、同一条红毯、同一个圣诞老人、同一套 15 秒舞步。阵容之间只差一件事：站在他身边的人是谁。据 ViralRemix 2026 年 11 月 15 日的统计，趋势里播放最高的阵容是穿织裙的小女孩（约 6.7 万播放）、勃艮第缎裙（约 5.7 万）、黑色背心（约 2.1 万）、米白上衣条纹裤（约 2.1 万）和刺绣上衣墨镜（约 1.6 万）。',
        `在 ViralReel，这些阵容对应小舞者、勃艮第缎裙、黑背心运动、米白条纹裤、刺绣墨镜、芥末毛衣、碎花短裙和蓝缎长裙——全部在 ${ZH_TEMPLATE} 。${PHOTO_ZH}`,
        '按身高和穿搭选，不要按播放量选：阵容和你的照片越接近，换脸效果越自然。预览片段来自 TikTok 趋势原片，每张卡片都标注了来源账号。ViralReel 不授权模板原声，也不授权预览片段里的音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which Dance with Santa cast should I pick?', zh: '应该选哪套 Dance with Santa 阵容？' },
        a: {
          en: 'The one whose dancer is closest to your photo in height and outfit. A full-length match keeps the swap readable from head to toe.',
          zh: '舞者身高和穿搭与你照片最接近的那套。全身匹配能让换人效果从头到脚都自然。',
        },
      },
      {
        q: { en: 'Where do the play counts come from?', zh: '播放数据从哪来的？' },
        a: {
          en: 'From ViralRemix\'s 15 November 2026 check of the TikTok trend. Numbers move daily; the casts and the scene do not.',
          zh: '来自 ViralRemix 2026 年 11 月 15 日对 TikTok 趋势的统计。数字每天在变；阵容和场景不会。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa tiktok',
    slug: 'dance-with-santa-tiktok',
    title: {
      en: 'Dance with Santa TikTok – The Numbers Behind the Trend',
      zh: 'Dance with Santa TikTok：趋势背后的数据',
    },
    description: {
      en: 'dance with santa tiktok: 44,000+ template uses, 7,200 a day, the 67K little-girl clip and the 268K English tutorial — the November 2026 numbers, and how to make your own video in the browser.',
      zh: 'dance with santa tiktok：模板使用量破 44,000、每天新增 7,200、6.7 万的小女孩片段和 26.8 万的英语教程——2026 年 11 月的数据，以及如何在浏览器里做你自己的视频。',
    },
    h1: { en: 'Dance with Santa on TikTok', zh: 'TikTok 上的 Dance with Santa' },
    lead: {
      en: 'Dance with Santa took over TikTok in the second week of November 2026 — here are the numbers, and the browser way to join.',
      zh: '2026 年 11 月的第二周，Dance with Santa 席卷 TikTok——这里是数据，以及加入的浏览器方式。',
    },
    guideTitle: {
      en: 'The TikTok numbers, checked 15 November 2026',
      zh: 'TikTok 数据，2026 年 11 月 15 日核对',
    },
    body: {
      en: [
        'Per ViralRemix\'s 15 November 2026 check: the "Bailando con Santa" CapCut template had passed 44,000 uses, about 7,200 new ones a day; the template\'s original sound had about 4,100 videos, roughly 670 new a day. The biggest organic clips: a little girl in a woven skirt at about 67K plays, the burgundy satin dress at about 57K, and a pink-tee mom at about 28K.',
        'The tutorials grew even faster than the trend. A Spanish how-to by @rora_dd ("¡Baila con Santa Claus esta Navidad!") reached about 164K plays on 13 November, and an English one by @c0pe6zs0b9 ("Dance with Santa Claus this Christmas! You only need one photo") hit about 268K on 14 November. Most first results were plain #CapCut posts from Guatemala and Mexico; captions now add #bailandoconsanta and #santa.',
        `You do not need the CapCut app to join. Make your own at ${EN_TEMPLATE}: one full-body photo, eight casts, a 15-second 9:16 MP4. ${PHOTO_EN} Trend facts and the timeline are in ${EN_EXPLAINED}.`,
      ],
      zh: [
        '据 ViralRemix 2026 年 11 月 15 日的统计：「Bailando con Santa」CapCut 模板使用量破 44,000 次，每天约新增 7,200 次；模板原声下约 4,100 条视频，每天约新增 670 条。播放最高的自然流片段：穿织裙的小女孩约 6.7 万、勃艮第缎裙约 5.7 万、粉色 T 恤的妈妈约 2.8 万。',
        '教程涨得比趋势本身还快。@rora_dd 的西语教程（「¡Baila con Santa Claus esta Navidad!」）11 月 13 日达到约 16.4 万播放；@c0pe6zs0b9 的英语教程（「Dance with Santa Claus this Christmas! You only need one photo」）11 月 14 日达到约 26.8 万。最早的帖子多是危地马拉和墨西哥的纯 #CapCut 内容；现在的配文会加上 #bailandoconsanta 和 #santa。',
        `加入不需要 CapCut App。在 ${ZH_TEMPLATE} 做你自己的：一张全身照、八套阵容、15 秒 9:16 MP4。${PHOTO_ZH} 趋势事实和时间线见 ` + ZH_EXPLAINED + ' 。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What hashtag do Dance with Santa posts use?', zh: 'Dance with Santa 帖子用什么标签？' },
        a: {
          en: '#bailandoconsanta and #santa, with #CapCut on the earliest posts. English-language posts increasingly add #dancingwithsanta.',
          zh: '#bailandoconsanta 和 #santa，最早的帖子还带 #CapCut。英语帖子越来越多地加 #dancingwithsanta。',
        },
      },
      {
        q: { en: 'Is the trend still growing?', zh: '趋势还在涨吗？' },
        a: {
          en: 'As of the 15 November 2026 check it was adding about 7,200 template uses a day. Christmas trends keep climbing into December, but numbers move daily — treat any figure as a snapshot.',
          zh: '截至 2026 年 11 月 15 日的统计，模板使用量每天约新增 7,200 次。圣诞趋势会一直涨到 12 月，但数字每天在变——任何数字都只是快照。',
        },
      },
    ],
  },
  {
    keyword: 'bailando con santa',
    slug: 'bailando-con-santa',
    title: {
      en: 'Bailando con Santa – The CapCut Template Behind the Trend',
      zh: 'Bailando con Santa：趋势背后的 CapCut 模板',
    },
    description: {
      en: 'bailando con santa: the "Bailando con Santa" CapCut template by @sarahicat15, started 7 November 2026 — and the browser way to make the same video without the app.',
      zh: 'bailando con santa：@sarahicat15 的「Bailando con Santa」CapCut 模板，2026 年 11 月 7 日上线——以及在浏览器里不做 App 做出同样视频的方法。',
    },
    h1: { en: 'Bailando con Santa', zh: 'Bailando con Santa' },
    lead: {
      en: '"Bailando con Santa" is the CapCut template that started Dance with Santa — one photo, fifteen seconds, you dancing next to Santa Claus.',
      zh: '「Bailando con Santa」就是带火 Dance with Santa 的 CapCut 模板——一张照片、十五秒、你和圣诞老人共舞。',
    },
    guideTitle: {
      en: 'What the CapCut template is, and the no-app path',
      zh: 'CapCut 模板是什么，以及不用 App 的路径',
    },
    body: {
      en: [
        '"Bailando con santa" (dancing with Santa) is a CapCut template posted by @sarahicat15. Per ViralRemix\'s timeline: the first version went up on 7 November 2026 with a clip of a woman in a red varsity jacket dancing next to Santa; a second version with its own sound followed on 9 November and is the one that spread. The sound is "original sound - sarahicat15", a cheerful Latin Christmas tune. Most early posts were from Guatemala and Mexico, captioned only #CapCut.',
        'The template had passed 44,000 uses by 15 November 2026 — about 7,200 a day. Its clips are 15 seconds (the very first one is 14), and the scene never changes: red carpet, wood-panelled hall, decorated trees, presents, Santa waving at the camera and then dancing.',
        `You can make the same video without the app, at ${EN_TEMPLATE}: one full-body photo, one of eight casts, a 15-second 9:16 MP4 in the browser. ${PHOTO_EN} The comparison in full is ${EN_BAILANDO}. ViralReel is not affiliated with CapCut or @sarahicat15.`,
      ],
      zh: [
        '「Bailando con santa」（和圣诞老人共舞）是 @sarahicat15 发布的 CapCut 模板。按 ViralRemix 的时间线：第一版 2026 年 11 月 7 日上线——一位穿红色棒球夹克的女生在圣诞老人旁边跳舞；11 月 9 日的第二版带独立声音，也就是传开的这一版。声音是「original sound - sarahicat15」，一首欢快的拉丁圣诞曲。最早的帖子多来自危地马拉和墨西哥，配文只有 #CapCut。',
        '到 2026 年 11 月 15 日，模板使用量破 44,000 次——每天约 7,200 次。它的片段是 15 秒（最早那条 14 秒），场景从不改变：红毯、木板墙大厅、装饰好的圣诞树、礼物、圣诞老人对镜头挥手然后跳舞。',
        `不用 App 也能做出同样的视频：${ZH_TEMPLATE} ，一张全身照、八套阵容任选、浏览器直出 15 秒 9:16 MP4。${PHOTO_ZH} 完整对照见 ` + ZH_BAILANDO + ' 。ViralReel 与 CapCut 和 @sarahicat15 均无关联。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What does "Bailando con Santa" mean?', zh: '「Bailando con Santa」是什么意思？' },
        a: {
          en: 'Spanish for "dancing with Santa". Related spellings people search: baila con santa claus, bailando con santa claus plantilla, bailando con santa claus — all the same template.',
          zh: '西语「和圣诞老人共舞」。相关的搜索拼法：baila con santa claus、bailando con santa claus plantilla——都是同一个模板。',
        },
      },
      {
        q: { en: 'Do I need CapCut to make a Bailando con Santa video?', zh: '做 Bailando con Santa 视频需要 CapCut 吗？' },
        a: {
          en: 'No. The trend started there, but ViralReel renders the same scene from one photo in the browser, with no CapCut project and no app install.',
          zh: '不需要。趋势起源于那里，但 ViralReel 在浏览器里用一张照片渲染同样的场景，不用 CapCut 工程，也不用装 App。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa claus',
    slug: 'dance-with-santa-claus',
    title: {
      en: 'Dance with Santa Claus – Same Trend, Full Name',
      zh: 'Dance with Santa Claus：同一个趋势，全名搜索',
    },
    description: {
      en: 'dance with santa claus: the same November 2026 trend as Dance with Santa — one photo becomes 15 seconds dancing next to Santa Claus. Make it in the browser on ViralReel.',
      zh: 'dance with santa claus：和 Dance with Santa 同一个 2026 年 11 月趋势——一张照片变成 15 秒与圣诞老人共舞。浏览器里在 ViralReel 制作。',
    },
    h1: { en: 'Dance with Santa Claus', zh: 'Dance with Santa Claus' },
    lead: {
      en: 'Dance with Santa Claus and Dance with Santa are the same template. The full name just says who the partner is.',
      zh: 'Dance with Santa Claus 和 Dance with Santa 是同一个模板。全名只是把舞伴说得更完整。',
    },
    guideTitle: {
      en: 'The full-name search, and what it opens',
      zh: '全名搜索打开的是什么',
    },
    body: {
      en: [
        'Whether you type dance with santa claus, dancing with santa, or santa dance trend, the video people mean is the same: one photo turned into 15 seconds of that person dancing beside a classic Santa Claus — full white beard, red velvet suit with white fur trim, black belt and boots — on the red carpet of a wood-panelled Christmas hall with decorated trees, presents and fairy lights.',
        `On ViralReel that is the Dance with Santa template at ${EN_TEMPLATE}. ${CASTS_EN} One full-body photo, 9:16, 15 seconds, and the credit cost shows before you generate.`,
        'It is not the Santa Muerte dance — that is a separate trend with La Santa Muerte, the skeleton folk saint, often set to Santa Grifa\'s "Bailando con la Muerte". It is also not the filmed "Here Comes Santa Claus" dance people record themselves; that one has no photo template. Label your post AI and add the trend sound in TikTok, Reels, or Shorts.',
      ],
      zh: [
        '无论你搜 dance with santa claus、dancing with santa 还是 santa dance trend，大家指的都是同一条视频：一张照片变成 15 秒——照片里的人与一位经典圣诞老人（白胡子、白色毛边红丝绒套装、黑腰带和黑靴子）在木板墙圣诞大厅的红毯上共舞，大厅里有装饰好的圣诞树、礼物和灯串。',
        `在 ViralReel，它就是 ${ZH_TEMPLATE} 上的 Dance with Santa 模板。${CASTS_ZH} 一张全身照、9:16、15 秒，生成前显示积分。`,
        '它不是 Santa Muerte 舞蹈——那是另一个趋势，主角是骷髅民间圣人 La Santa Muerte，常配 Santa Grifa 的《Bailando con la Muerte》。它也不是大家自己实拍跳的《Here Comes Santa Claus》舞蹈；那个没有照片模板。发布时标注 AI，并在 TikTok、Reels 或 Shorts 里加热梗原声。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is Dance with Santa Claus a different tool from Dance with Santa?', zh: 'Dance with Santa Claus 和 Dance with Santa 是不同的工具吗？' },
        a: {
          en: 'No. Same template, same page, same renders. The word order is only a search habit.',
          zh: '不是。同一个模板、同一个页面、同样的渲染。词序只是搜索习惯。',
        },
      },
      {
        q: { en: 'Is the Santa in the video a real person?', zh: '视频里的圣诞老人是真人吗？' },
        a: {
          en: 'No. Santa is an AI-rendered character built into the template — not footage of a mall or mall-event Santa. The person next to him comes from your photo.',
          zh: '不是。圣诞老人是模板内置的 AI 渲染角色——不是商场或活动 Santa 的实拍。他身边的人来自你的照片。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa generator',
    slug: 'dance-with-santa-generator',
    title: {
      en: 'Dance with Santa Generator – One Photo, Browser Render',
      zh: 'Dance with Santa 生成器：一张照片，浏览器直出',
    },
    description: {
      en: 'dance with santa generator: ViralReel renders the Dance with Santa trend from one photo in the browser — no app, no prompt, 15-second 9:16 MP4. Eight casts to pick from.',
      zh: 'dance with santa generator：ViralReel 在浏览器里用一张照片渲染 Dance with Santa 趋势——不用 App、不用提示词，15 秒 9:16 MP4。八套阵容任选。',
    },
    h1: { en: 'Dance with Santa generator', zh: 'Dance with Santa 生成器' },
    lead: {
      en: 'A Dance with Santa generator takes one photo and returns the dance. There is no prompt box to fill.',
      zh: 'Dance with Santa 生成器收一张照片，还你一段舞。没有要填的提示词框。',
    },
    guideTitle: {
      en: 'How the generator works',
      zh: '生成器是怎么工作的',
    },
    body: {
      en: [
        `The generator at ${EN_TEMPLATE} runs a fixed template: the hall, the red carpet, Santa and the 15-second routine are locked; the person next to him comes from your photo. Pick one of eight casts, upload one full-body photo, and generate. ${PHOTO_EN}`,
        'There is no prompt to write. If a model menu is visible, it only picks an image-to-video engine for this fixed template — it is not a blank Kling, Seedance, or Veo prompt. The page opens on 9:16, the length is fixed at 15 seconds, and the credit cost shows before you start.',
        'Rendering usually takes a few minutes; the finished MP4 lands in your history. Paid exports are watermark-free, and failed jobs return their credits. The download is a new clip — not any TikTok and not the CapCut project — so add the trend sound in the app you post to and turn on the AI label.',
      ],
      zh: [
        `生成器在 ${ZH_TEMPLATE} 跑一个固定模板：大厅、红毯、圣诞老人和 15 秒舞步全部锁定；他身边的人来自你的照片。八套阵容任选，上传一张全身照，点生成。${PHOTO_ZH}`,
        '不用写提示词。如果看得到模型菜单，它只是为这张固定模板选图生视频引擎——不是空白的 Kling、Seedance 或 Veo 提示词。页面默认 9:16，时长固定 15 秒，开始前显示积分费用。',
        '渲染通常几分钟；完成的 MP4 进入历史记录。付费导出无水印，失败任务退还积分。下载的是一条新片段——不是任何 TikTok，也不是 CapCut 工程——发布时在你用的 App 里加热梗原声并打开 AI 标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does the Dance with Santa generator need a prompt?', zh: 'Dance with Santa 生成器需要提示词吗？' },
        a: {
          en: 'No. The scene, Santa and the dance are fixed in the template. Your only input is one full-body photo.',
          zh: '不需要。场景、圣诞老人和舞步都固定在模板里。你唯一的输入就是一张全身照。',
        },
      },
      {
        q: { en: 'How long does a render take?', zh: '渲染要多久？' },
        a: {
          en: 'Usually a few minutes. The MP4 lands in your history when it is done, and you download it from the browser.',
          zh: '通常几分钟。完成后 MP4 进入历史记录，浏览器里直接下载。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa capcut',
    slug: 'dance-with-santa-capcut',
    title: {
      en: 'Dance with Santa CapCut Template vs the Browser Version',
      zh: 'Dance with Santa CapCut 模板与浏览器版对照',
    },
    description: {
      en: 'dance with santa capcut: the "Bailando con Santa" CapCut template (44,000+ uses by 15 Nov 2026) versus the same trend in the ViralReel browser — inputs, output, watermark and sound compared.',
      zh: 'dance with santa capcut：「Bailando con Santa」CapCut 模板（截至 2026-11-15 使用量破 44,000）与 ViralReel 浏览器版的对照——输入、输出、水印和声音逐项比较。',
    },
    h1: { en: 'Dance with Santa on CapCut', zh: 'CapCut 上的 Dance with Santa' },
    lead: {
      en: 'The CapCut template started the trend. The browser version does the same dance without the app. Here is what actually differs.',
      zh: 'CapCut 模板是趋势的起点。浏览器版不用 App 跳同一支舞。真正有差别的是这些。',
    },
    guideTitle: {
      en: 'CapCut template versus ViralReel, point by point',
      zh: 'CapCut 模板对照 ViralReel，逐项比较',
    },
    body: {
      en: [
        'The CapCut template "Bailando con Santa" runs inside the CapCut app: you paste one photo into the template\'s placeholder, CapCut renders the 15-second clip on your phone, and the result carries the template\'s sound. Per ViralRemix\'s 15 November 2026 check it had passed 44,000 uses — about 7,200 a day.',
        `The ViralReel version at ${EN_TEMPLATE} runs the same trend in the browser: one full-body photo, one of eight casts, a 15-second 9:16 MP4. The differences that matter: no app to install; paid exports are watermark-free; failed jobs return their credits; and the render does not include a licensed soundtrack — you add the trend sound in TikTok, Reels, or Shorts either way.`,
        'CapCut is a trademark of its owner and is not affiliated with ViralReel. If you use the CapCut template, follow its permission prompts; if you use the browser version, the steps are ' + EN_HOWTO + '. Either way, label the post as AI.',
      ],
      zh: [
        'CapCut 模板「Bailando con Santa」在 CapCut App 内运行：把一张照片贴进模板占位，CapCut 在手机上渲染 15 秒片段，结果自带模板声音。据 ViralRemix 2026 年 11 月 15 日的统计，使用量已破 44,000 次——每天约 7,200 次。',
        `ViralReel 版本在 ${ZH_TEMPLATE} 用浏览器跑同一个趋势：一张全身照、八套阵容、15 秒 9:16 MP4。真正有差别的几点：不用装 App；付费导出无水印；失败任务退还积分；渲染不带已授权原声——不管用哪个，都要在 TikTok、Reels 或 Shorts 里加热梗原声。`,
        'CapCut 是其所有者的商标，与 ViralReel 无关联。用 CapCut 模板请跟随它的授权提示；用浏览器版则按 ' + ZH_HOWTO + ' 的步骤。无论哪种，都请把帖子标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the CapCut template free?', zh: 'CapCut 模板免费吗？' },
        a: {
          en: 'That depends on CapCut\'s own terms and features on your account — ViralReel does not speak for CapCut. On ViralReel, renders are paid: the cost shows before you generate.',
          zh: '这取决于 CapCut 自己的条款和你账号的功能——ViralReel 不代表 CapCut 发言。在 ViralReel，渲染是付费的：生成前显示费用。',
        },
      },
      {
        q: { en: 'Which one is faster?', zh: '哪个更快？' },
        a: {
          en: 'Both produce a 15-second clip in minutes. The browser version renders on the server, so it works the same on any phone.',
          zh: '两者都是几分钟出 15 秒片段。浏览器版在服务器渲染，任何手机上体验一致。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa song',
    slug: 'dance-with-santa-song',
    title: {
      en: 'Dance with Santa Song – What the Sound Is (No Download)',
      zh: 'Dance with Santa 歌曲：原声是什么（不提供下载）',
    },
    description: {
      en: 'dance with santa song: "original sound - sarahicat15", a Latin Christmas tune from the Bailando con Santa template. ViralReel does not license or export it — add it from the app library.',
      zh: 'dance with santa song：「original sound - sarahicat15」，Bailando con Santa 模板的拉丁圣诞曲。ViralReel 不授权也不导出——请在 App 曲库加。',
    },
    h1: { en: 'The Dance with Santa song', zh: 'Dance with Santa 的原声' },
    lead: {
      en: 'The Dance with Santa sound is the CapCut template\'s own audio: "original sound - sarahicat15". ViralReel does not license it and does not export it.',
      zh: 'Dance with Santa 的原声是 CapCut 模板自带音频：「original sound - sarahicat15」。ViralReel 不授权，也不导出。',
    },
    guideTitle: {
      en: 'What the sound is, and how it gets into your post',
      zh: '原声是什么，以及它怎么进你的帖子',
    },
    body: {
      en: [
        'Per ViralRemix\'s trend page, the sound on the spreading "Bailando con Santa" version is "original sound - sarahicat15" — a cheerful Latin Christmas tune. It had about 4,100 videos on it by 15 November 2026, roughly 670 new a day. You can open it in TikTok and tap "Use this sound" for your own post.',
        'The MP4 you download from ViralReel is the picture only. ViralReel does not license the sound, the template\'s audio, or any recording in the preview clips, and it does not export the track as a file. Some generation models can follow an admin-configured reference track; that follow is not a license and not an export of the original audio.',
        'The posting flow: download the 15-second MP4, upload it in TikTok, Reels, or Shorts, add the sound from that app\'s library, and turn on the AI-generated label. If you post on the original sound, your video joins the 4,100 already on it.',
      ],
      zh: [
        '据 ViralRemix 的趋势页，传开的「Bailando con Santa」版本的声音是「original sound - sarahicat15」——一首欢快的拉丁圣诞曲。截至 2026 年 11 月 15 日约有 4,100 条视频使用，每天约新增 670 条。你可以在 TikTok 打开它并点「使用此声音」发自己的帖子。',
        '你从 ViralReel 下载的 MP4 只有画面。ViralReel 不授权该声音、模板音频或预览片段里的任何录音，也不把音轨导出成文件。部分生成模型可以跟随管理员配置的参考音轨；那不是授权，也不是原始音频的导出。',
        '发布流程：下载 15 秒 MP4，在 TikTok、Reels 或 Shorts 里上传，从该 App 曲库加声音，并打开 AI 生成标注。如果你用原声发布，你的视频就加入了已有 4,100 条的队伍。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the Dance with Santa song?', zh: '可以下载 Dance with Santa 的歌吗？' },
        a: {
          en: 'Not from ViralReel. Add the sound from the TikTok, Reels, or Shorts library when you post — that keeps your post on the trend sound and its traffic.',
          zh: 'ViralReel 不提供。发布时请在 TikTok、Reels 或 Shorts 曲库里加——这样你的帖子还能挂上趋势声音的流量。',
        },
      },
      {
        q: { en: 'Is the sound a licensed Christmas song?', zh: '这个原声是授权的圣诞歌吗？' },
        a: {
          en: 'It is the template creator\'s original sound, not a commercial track ViralReel can license. Treat your download as the picture; the audio comes from the platform library.',
          zh: '它是模板作者的原始声音，不是 ViralReel 能授权的商用曲。把下载的文件当画面；音频来自平台曲库。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa kids',
    slug: 'dance-with-santa-kids',
    title: {
      en: 'Dance with Santa for Kids – The Parent-Only Photo Rule',
      zh: 'Dance with Santa 孩子版：仅限家长上传照片的规则',
    },
    description: {
      en: 'dance with santa kids: the kid clips are the trend\'s biggest — a little girl in a woven skirt at ~67K plays. Only a parent uploads a child\'s photo. Full-body shot, AI label on.',
      zh: 'dance with santa kids：孩子片段是趋势里播放最高的——织裙小女孩约 6.7 万播放。孩子的照片只能由家长上传。全身照，开 AI 标注。',
    },
    h1: { en: 'Dance with Santa Claus for kids', zh: '孩子版 Dance with Santa Claus' },
    lead: {
      en: 'A kid dancing with Santa is the version grandparents share — and the biggest clips in the trend are kids.',
      zh: '孩子和圣诞老人共舞是爷爷奶奶最爱转发的版本——而趋势里播放最高的片段正是孩子。',
    },
    guideTitle: {
      en: 'The kid clips, and the rules for a child\'s photo',
      zh: '孩子片段，以及孩子照片的规则',
    },
    body: {
      en: [
        'Two of the most-watched clips in the trend are little girls: per ViralRemix\'s 15 November 2026 check, a girl in a woven skirt spinning next to Santa reached about 67K plays, and smaller tutu-dancer clips followed. A kid dancing with Santa Claus needs no trip to the mall: one photo of your child standing, full body, is enough.',
        `On ViralReel the kid-friendly cast is Little Dancer, at ${EN_TEMPLATE}. The rules are strict: only the child\'s parent uploads the photo; if it is not only your child, ask the other parent first. One full-body standing photo, face clearly visible, no one else in the frame. Keep the AI-generated label on when you post.`,
        'Adults post the same trend with the other casts: moms in their best dress, daughters posting their little sisters, someone always doing their grandma. The Santa, the hall and the routine never change — which is exactly why the family group chat keeps sharing it.',
      ],
      zh: [
        '趋势里播放最高的片段有两条是小女孩：据 ViralRemix 2026 年 11 月 15 日的统计，穿织裙的小女孩在圣诞老人身边转圈的一段约 6.7 万播放，纱裙小舞者的片段紧随其后。孩子和圣诞老人共舞不需要去商场：你家孩子一张全身站立照就够了。',
        `在 ViralReel，适合孩子的阵容是小舞者织裙版：${ZH_TEMPLATE} 。规则很严：孩子的照片只能由孩子的家长上传；如果涉及的不只是你家孩子，请先征得另一位家长的同意。一张全身站立照，正脸清晰，画面里没有其他人。发布时保留 AI 生成标注。`,
        '大人用其他阵容玩同一个趋势：妈妈穿最好的裙子，姐姐发妹妹，总有人给奶奶来一条。圣诞老人、大厅和舞步从不改变——这正是家庭群一直在转发它的原因。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I upload my child\'s photo?', zh: '可以上传我家孩子的照片吗？' },
        a: {
          en: 'Yes — if you are the child\'s parent. If another parent or guardian shares custody of the child\'s image, ask them first. One full-body standing photo, and keep the AI label when you post.',
          zh: '可以——如果你是孩子的家长。如果孩子的影像还涉及另一位家长或监护人，请先征得同意。一张全身站立照，发布时保留 AI 标注。',
        },
      },
      {
        q: { en: 'Which cast fits a kid?', zh: '哪套阵容适合孩子？' },
        a: {
          en: 'Little Dancer — the woven-skirt girl from the trend\'s biggest clip. Height and outfit match keeps the swap readable.',
          zh: '小舞者织裙版——趋势最高播放片段里的织裙女孩。身高和穿搭匹配能让换人效果自然。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa free',
    slug: 'dance-with-santa-free',
    title: {
      en: 'Is Dance with Santa Free? Credits, Not Free Forever',
      zh: 'Dance with Santa 免费吗？积分制，不是永远免费',
    },
    description: {
      en: 'dance with santa free: ViralReel does not offer free credits — every render is paid and the cost shows before you start. Credit packs and monthly plans, exact prices in the generator.',
      zh: 'dance with santa free：ViralReel 不提供免费积分——每次渲染都计费，开始前显示费用。积分包和月付方案，价格在生成器里看得见。',
    },
    h1: { en: 'Is Dance with Santa free?', zh: 'Dance with Santa 免费吗？' },
    lead: {
      en: 'No — Dance with Santa renders are paid credits. The exact cost shows in the generator before you start.',
      zh: '不免费——Dance with Santa 渲染按积分计费。开始前生成器会显示确切费用。',
    },
    guideTitle: {
      en: 'What it costs, and what you get for it',
      zh: '花多少，买到什么',
    },
    body: {
      en: [
        `ViralReel does not offer free credits for Dance with Santa. Every render is paid, and the generator shows the exact cost before you start — the 15-second clip at 720p is priced live in the UI, so you always see the number before it charges. Credit packs are at https://www.viralreel.app/pricing and monthly plans at https://www.viralreel.app/subscribe.`,
        'What the credits buy: a 15-second 9:16 MP4 of your photo dancing next to Santa, watermark-free on paid plans, yours to post. Failed or canceled jobs return their credits automatically. There is no per-watermark "free tier" — the free things on this trend are the CapCut app path and the TikTok sound, not our renders.',
        'If you are comparing tools, compare what is shown before the charge: the price per render, the resolution options, and whether failed jobs refund. Those three numbers are on this page and in the generator — no surprises after the fact.',
      ],
      zh: [
        `ViralReel 不为 Dance with Santa 提供免费积分。每次渲染都计费，生成器在开始前显示确切费用——720p 的 15 秒片段积分在界面上实时显示，扣费前永远看得见价格。积分包在 https://www.viralreel.app/zh/pricing ，月付在 https://www.viralreel.app/zh/subscribe 。`,
        '积分买到的是：你的照片和圣诞老人共舞的 15 秒 9:16 MP4，付费导出无水印，归你发布。失败或取消的任务自动退还积分。这个趋势里免费的是 CapCut App 路径和 TikTok 原声，不是我们的渲染。',
        '比较工具时，比较扣费前显示的东西：单次渲染价格、分辨率选项、失败是否退款。这三个数字就在本页和生成器里——事后没有惊喜。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a free trial for Dance with Santa?', zh: 'Dance with Santa 有免费试用吗？' },
        a: {
          en: 'No. ViralReel does not offer free credits. The cost shows in the generator before you start, and failed jobs return their credits.',
          zh: '没有。ViralReel 不提供免费积分。开始前生成器显示费用，失败任务退还积分。',
        },
      },
      {
        q: { en: 'Do failed renders cost me credits?', zh: '渲染失败会扣积分吗？' },
        a: {
          en: 'No. Failed or canceled jobs return their credits automatically.',
          zh: '不会。失败或取消的任务自动退还积分。',
        },
      },
    ],
  },
  {
    keyword: 'dance with santa meme',
    slug: 'dance-with-santa-meme',
    title: {
      en: 'Dance with Santa Meme – Why One Photo Took Over Christmas',
      zh: 'Dance with Santa 梗：一张照片为什么承包了圣诞节',
    },
    description: {
      en: 'dance with santa meme: why the Bailando con Santa format spread — one photo, a locked scene, and a cast that covers every family member. The jokes, the versions, and where to make yours.',
      zh: 'dance with santa meme：Bailando con Santa 格式为什么传开——一张照片、锁定的场景、覆盖全家成员的阵容。笑点、版本，以及在哪里做你自己的。',
    },
    h1: { en: 'The Dance with Santa meme', zh: 'Dance with Santa 梗' },
    lead: {
      en: 'The meme is not Santa dancing. The meme is who is next to him — the one variable in a format that never changes.',
      zh: '梗不是圣诞老人跳舞。梗是他身边的人——一个从不改变的格式里唯一的变量。',
    },
    guideTitle: {
      en: 'Why the format works, and the versions people post',
      zh: '格式为什么成立，以及大家在发的版本',
    },
    body: {
      en: [
        'Dance with Santa works like every locked-scene meme: the office for Tiny Desk, the hallway for Pimpwalk, the hall for Dance with Santa. Same red carpet, same trees, same 15 seconds, so every remake is readable in one second and the only variable is the dancer. The joke lands because the routine is cheerful and committed no matter who is doing it — a toddler, a grandma, a mom in formal wear.',
        'The versions people post follow the family: moms in their best dress (the burgundy satin clip, about 57K plays per ViralRemix\'s 15 November check), daughters posting their little sisters, the kid version for the grandparents (about 67K), the folk-dress version with shades. Most captions are just #CapCut or #bailandoconsanta — the video explains itself.',
        `Make your own version at ${EN_TEMPLATE}: one full-body photo, eight casts, 15 seconds, 9:16. ${PHOTO_EN} The trend facts and timeline are in ${EN_EXPLAINED}.`,
      ],
      zh: [
        'Dance with Santa 和所有锁定场景梗的原理一样：Tiny Desk 的办公室、Pimpwalk 的走廊、Dance with Santa 的大厅。同一条红毯、同样的树、同样的 15 秒，每个重拍一秒就能读懂，唯一的变量是舞者。笑点成立的原因是：无论谁在跳——小孩、奶奶、正装出场的妈妈——这套舞步都欢快、都认真。',
        '大家发的版本跟着家庭成员走：妈妈穿最好的裙子（勃艮第缎裙片段，据 ViralRemix 11 月 15 日统计约 5.7 万播放）、姐姐发妹妹、给爷爷奶奶的孩子版（约 6.7 万）、戴墨镜的民族裙版。配文大多只有 #CapCut 或 #bailandoconsanta——视频自己会说话。',
        `做你自己的版本：${ZH_TEMPLATE} ，一张全身照、八套阵容、15 秒、9:16。${PHOTO_ZH} 趋势事实和时间线见 ` + ZH_EXPLAINED + ' 。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What makes Dance with Santa funny?', zh: 'Dance with Santa 的笑点在哪？' },
        a: {
          en: 'The contrast: a committed, cheerful routine from whoever is next to Santa — grandmas, toddlers, formal-wear moms — inside a scene that never changes. The format is the joke\'s straight man.',
          zh: '反差：无论圣诞老人身边是谁——奶奶、小孩、正装妈妈——舞步都欢快投入，而场景从不变。这个格式本身就是捧哏。',
        },
      },
      {
        q: { en: 'Is Dance with Santa a parody?', zh: 'Dance with Santa 是戏仿吗？' },
        a: {
          en: 'It is a wholesome trend, not a mockery — the fun is in seeing your people in the clip, not in laughing at anyone. Label your post AI and use photos of people who agreed.',
          zh: '它是合家欢趋势，不是嘲讽——乐趣在于看到你家人出现在片段里，而不是笑谁。发布时标注 AI，只用经对方同意的照片。',
        },
      },
    ],
  },
  {
    keyword: 'santa dance trend',
    slug: 'santa-dance-trend',
    title: {
      en: 'Santa Dance Trend 2026 – Dance with Santa, One Photo',
      zh: 'Santa Dance Trend 2026：Dance with Santa，一张照片',
    },
    description: {
      en: 'santa dance trend: the November 2026 Dance with Santa wave — CapCut template origin, 44,000+ uses, timeline from 7 Nov to 15 Nov, and the browser way to make yours.',
      zh: 'santa dance trend：2026 年 11 月的 Dance with Santa 浪潮——CapCut 模板起源、使用量破 44,000、11 月 7 日到 15 日的时间线，以及制作你自己的浏览器方式。',
    },
    h1: { en: 'The Santa dance trend', zh: 'Santa dance trend 圣诞舞步趋势' },
    lead: {
      en: 'The Santa dance trend of November 2026 is Dance with Santa — one photo, fifteen seconds, a red carpet, and a Santa who never misses a beat.',
      zh: '2026 年 11 月的 Santa dance trend 就是 Dance with Santa——一张照片、十五秒、一条红毯，和一个从不错拍子的圣诞老人。',
    },
    guideTitle: {
      en: 'The trend, day by day',
      zh: '趋势，逐日看',
    },
    body: {
      en: [
        'The timeline, per ViralRemix\'s check: 7 November 2026, @sarahicat15 posts the first CapCut template, "Bailando con santa", with a woman in a red varsity jacket next to Santa. 9 November: the second version with its own sound — the one that spreads. 11 November: first results, plain #CapCut posts from Guatemala and Mexico; a pink-tee mom reaches about 28K plays. 13 November: the woven-skirt little girl reaches about 67K, and @rora_dd\'s Spanish tutorial about 164K. 14 November: English tutorials, one hitting about 268K. 15 November: the template passes 44,000 uses, about 7,200 a day.',
        'Where it fits in the season: the Santa nice-list trend has Santa read your kid\'s name off his list; the here-comes-Santa-Claus dance is a filmed pajama routine; Dance with Santa is the one-photo AI entry — the lowest-effort way to put your family inside a Christmas video.',
        `Join it at ${EN_TEMPLATE}: one full-body photo, one of eight casts, a 15-second 9:16 MP4, credits shown before you generate. ${PHOTO_EN} The sound question — there is no license and no export — is /dance-with-santa-song.`,
      ],
      zh: [
        '时间线，据 ViralRemix 的统计：2026 年 11 月 7 日，@sarahicat15 发布第一个 CapCut 模板「Bailando con santa」——红色棒球夹克女生站在圣诞老人旁边。11 月 9 日：带独立声音的第二版，也就是传开的这一版。11 月 11 日：最早的结果上线，危地马拉和墨西哥的纯 #CapCut 帖子；粉 T 恤妈妈约 2.8 万播放。11 月 13 日：织裙小女孩约 6.7 万，@rora_dd 的西语教程约 16.4 万。11 月 14 日：英语教程跟上，最高约 26.8 万。11 月 15 日：模板使用量破 44,000，每天约 7,200。',
        '它在整个圣诞季节里的位置：Santa nice-list 趋势是圣诞老人念出你家孩子的名字；Here Comes Santa Claus 舞蹈是实拍的睡衣双人舞；Dance with Santa 是其中「一张照片」的 AI 入口——把全家放进圣诞视频里成本最低的方式。',
        `加入入口：${ZH_TEMPLATE} ，一张全身照、八套阵容、15 秒 9:16 MP4，生成前显示积分。${PHOTO_ZH} 声音问题——没有授权、不提供导出——见 /dance-with-santa-song 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'When did the Santa dance trend start?', zh: 'Santa dance trend 什么时候开始的？' },
        a: {
          en: '7 November 2026 — the first "Bailando con santa" CapCut template by @sarahicat15. The version that spread followed on 9 November.',
          zh: '2026 年 11 月 7 日——@sarahicat15 的第一个「Bailando con santa」CapCut 模板。传开的版本 11 月 9 日跟进。',
        },
      },
      {
        q: { en: 'Is this the same as the Here Comes Santa Claus dance?', zh: '这和 Here Comes Santa Claus 舞蹈是一回事吗？' },
        a: {
          en: 'No. That one is a filmed pajama routine people record themselves. Dance with Santa is a photo template — one photo becomes the video.',
          zh: '不是。那个是大家自己实拍的睡衣双人舞。Dance with Santa 是照片模板——一张照片变成视频。',
        },
      },
    ],
  },
];

export function getDanceWithSantaLongTail(slug: string) {
  return DANCE_WITH_SANTA_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly DanceWithSantaHowToStep[] {
  return entry.steps === 'shared' ? DANCE_WITH_SANTA_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
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
          `在 ViralReel 制作：${template} 。上传一张全身照，八套阵容任选，浏览器里生成 15 秒 9:16 MP4。ViralReel 不授权模板原声。`,
        ],
        [
          '照片有什么要求？',
          '一个人、全身、站立、正脸清晰、光线好，从头到脚都在画面里。把画面里的其他人裁掉。只上传你自己的或经对方同意的照片；孩子的照片只能由孩子的家长上传。不要用名人或原始 TikTok 截图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是官方或合作页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 TikTok、CapCut、@sarahicat15 或任何趋势原作者没有隶属、官方或合作关系。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload one full-body photo, pick one of eight casts, and generate a 15-second 9:16 MP4 in the browser. ViralReel does not license the template\'s sound.`,
        ],
        [
          'What photo works best?',
          'One person, full body, standing, face clearly visible and well lit, head to toe in frame. Crop out anyone else. Upload only photos of yourself or people who agreed; a child\'s photo only from that child\'s parent. No celebrities and no screenshots of the original TikTok.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an official or partner page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with TikTok, CapCut, @sarahicat15, or any original trend creator.',
        ],
      ];
  return [...own, ...shared];
}

export interface DanceWithSantaLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function danceWithSantaLinkGroups(zh: boolean): DanceWithSantaLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: DANCE_WITH_SANTA_TEMPLATE_PATH, label: zh ? 'Dance with Santa 模板' : 'Dance with Santa template' },
        { href: '/dance-with-santa-ai', label: 'Dance with Santa AI' },
        { href: '/dance-with-santa-ai-video', label: zh ? 'Dance with Santa AI 视频' : 'Dance with Santa AI video' },
        { href: '/dance-with-santa-template', label: zh ? '八套阵容对照' : 'The eight casts' },
        { href: '/dance-with-santa-generator', label: zh ? '生成器（无提示词）' : 'Generator (no prompt)' },
        { href: '/dance-with-santa-claus', label: zh ? 'Dance with Santa Claus（全名）' : 'Dance with Santa Claus (full name)' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '趋势和数据' : 'Trend and numbers',
      links: [
        { href: '/dance-with-santa-tiktok', label: zh ? 'TikTok 数据' : 'The TikTok numbers' },
        { href: '/bailando-con-santa', label: zh ? 'Bailando con Santa（西语）' : 'Bailando con Santa (Spanish)' },
        { href: '/santa-dance-trend', label: zh ? '趋势时间线' : 'The trend, day by day' },
        { href: '/dance-with-santa-meme', label: zh ? '为什么火' : 'Why it went viral' },
        { href: '/dance-with-santa-kids', label: zh ? '孩子版规则' : 'Kids version rules' },
        { href: '/santa-nice-list-ai-template', label: zh ? 'Santa Nice List AI 模板' : 'Santa Nice List AI template' },
      ],
    },
    {
      title: zh ? '对照和声音' : 'Comparisons and sound',
      links: [
        { href: '/dance-with-santa-capcut', label: zh ? '和 CapCut 模板对照' : 'CapCut template comparison' },
        { href: '/dance-with-santa-song', label: zh ? '原声（不提供下载）' : 'The song (no download)' },
        { href: '/dance-with-santa-free', label: zh ? '免费问题' : 'The free question' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: DANCE_WITH_SANTA_POSTS.howTo, label: zh ? '如何制作 Dance with Santa AI 视频' : 'How to make a Dance with Santa AI video' },
        { href: DANCE_WITH_SANTA_POSTS.explained, label: zh ? '趋势是什么、从哪来' : 'What the trend is and where it came from' },
        { href: DANCE_WITH_SANTA_POSTS.bailando, label: zh ? 'Bailando con Santa 模板详解' : 'Bailando con Santa, the template in full' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding AI 模板' : 'Tiny Desk Outstanding AI template' },
      ],
    },
  ];
}

export const DANCE_WITH_SANTA_LONG_TAIL_ROUTES = DANCE_WITH_SANTA_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
