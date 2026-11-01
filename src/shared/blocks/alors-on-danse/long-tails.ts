import type { TemplateCostContext } from '@/shared/lib/pricing-copy';

import { ALORS_ON_DANSE_INTENT_TAILS } from './intent-tails';
import { ALORS_ON_DANSE_HOW_TO_STEPS, type AlorsOnDanseHowToStep } from './steps';

/**
 * Long-tail landings for the Alors On Danse template.
 *
 * To add another keyword: append an entry here or in `intent-tails.ts`.
 * The sitemap reads ALORS_ON_DANSE_LONG_TAIL_ROUTES. Public URLs are served by
 * the single `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `alors-on-danse-ai-template` slug.
 */

export const ALORS_ON_DANSE_TEMPLATE_PATH = '/alors-on-danse-ai-template';

export const ALORS_ON_DANSE_POSTS = {
  howTo: '/blog/how-to-make-alors-on-danse-ai-video',
  explained: '/blog/what-is-alors-on-danse-ai',
  song: '/blog/alors-on-danse-song-and-meaning',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
} as const;

const EN_TEMPLATE = 'https://www.viralreel.app/alors-on-danse-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/alors-on-danse-ai-template';

type Copy = { en: string; zh: string };

export interface AlorsOnDanseLongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface AlorsOnDanseLongTailEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  steps: 'shared' | readonly AlorsOnDanseHowToStep[];
  faq: AlorsOnDanseLongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const ROLES_EN =
  'The versions on ViralReel are Studio Giant, Original Sketch, Football Duo, Spider Duo, Fantasy Duo, Racing Duo, and Football Keyboard — the same white studio with a different pair in it.';
const ROLES_ZH =
  'ViralReel 上的版本有白棚巨人版、原版小剧场、足球双人版、蜘蛛侠双人版、奇幻双人版、赛车双人版和足球键盘版——同一个白棚，换的是里面那对搭档。';

const SLOTS_EN =
  'The generator shows two slots labeled Keyboard Player and Dance Partner. Image 1 is whoever sits at the keyboard and plays it straight; Image 2 is whoever dances, points at the lens and commits far too hard. Swapping them flips the joke.';
const SLOTS_ZH =
  '生成器有两个位置，按钮写的是弹键盘的人和伴舞的人。照片 1 是坐在键盘前面无表情的那位；照片 2 是在旁边跳舞、指镜头、用力过猛的那位。位置放反了，笑点就倒了。';

const SOUND_EN =
  'The download carries the picture only. Add the Alors on danse trend sound (the original or the Extended Mix people use) inside TikTok, Reels, or Shorts, and turn on the AI label. ViralReel does not license the song.';
const SOUND_ZH =
  '下载文件只有画面。在 TikTok、Reels 或 Shorts 里加 Alors on danse 趋势原声（原曲或大家用的 Extended Mix 版），并打开 AI 标注。ViralReel 不授权这首歌。';

const LIMIT_EN =
  'Use photos of yourself or adults (18+) who agreed to it. Do not upload Stromae, Jamel Debbouze, other celebrities, movie characters, or minors, and do not pass the output off as the real making-of.';
const LIMIT_ZH =
  '只用你本人或经同意的成年人（18+）的照片。不要上传 Stromae、Jamel Debbouze、其他名人、影视角色或未成年人，也不要把成片冒充真实的创作幕后。';

export const ALORS_ON_DANSE_LONG_TAILS: readonly AlorsOnDanseLongTailEntry[] = [
  {
    keyword: 'alors on danse ai',
    slug: 'alors-on-danse-ai',
    title: {
      en: 'Alors On Danse AI – Recast the White-Studio Sketch on ViralReel',
      zh: 'Alors On Danse AI：在 ViralReel 重排白棚小品',
    },
    description: {
      en: 'alors on danse ai: ViralReel puts your two faces into the 2010 Stromae white-studio sketch from two photos. Keyboard Player and Dance Partner slots, ~30 seconds, 16:9. Not affiliated with Stromae or Jamel Debbouze.',
      zh: 'alors on danse ai：ViralReel 用两张照片把你们俩放进 2010 年 Stromae 白棚小品。弹键盘位和伴舞位，约 30 秒，16:9。与 Stromae 和 Jamel Debbouze 均无关联。',
    },
    h1: { en: 'Alors On Danse AI', zh: 'Alors On Danse AI' },
    lead: {
      en: 'Alors On Danse AI is the October 2026 wave of rebuilding the 2010 white-studio sketch with two new faces. ViralReel does it from two photos in the browser.',
      zh: 'Alors On Danse AI 是 2026 年 10 月这波用两张新脸重拍 2010 年白棚小品的玩法。ViralReel 在浏览器里用两张照片完成。',
    },
    guideTitle: {
      en: 'What Alors On Danse AI is, and how to make one',
      zh: 'Alors On Danse AI 是什么，以及怎么做一条',
    },
    body: {
      en: [
        'Alors On Danse AI is a fan remix format: the 2010 comedy sketch from Jamel Debbouze\'s show Made in Jamel, rebuilt so the two roles are played by whoever you cast. In the original, Jamel crashes Stromae\'s white studio, dances with one arm up, points at the camera and mouths the words, while Stromae keeps playing the mini keyboard like nothing is happening. The AI versions keep the room, the camera, the timing and the song, and change only the two people.',
        `You make one at ${EN_TEMPLATE}. ${SLOTS_EN} ${ROLES_EN} Most versions are landscape, so the page opens on 16:9 with a fixed ~30-second length — the shape of the clips that traveled the widest.`,
        'The joke is the contrast: one person plays it straight, the other commits far too hard. That is why couples, siblings, a quiet friend and a loud one, or any two characters who would never share a studio work so well. A render that fails is refunded automatically.',
      ],
      zh: [
        'Alors On Danse AI 是粉丝向重排格式：把 2010 年 Jamel Debbouze 综艺《Made in Jamel》里的白棚小品，换成你指定的人来演。原版里，Jamel 闯进 Stromae 的白棚，举着手臂跳舞、指着镜头对口型，而 Stromae 面无表情地继续弹迷你键盘。AI 版本保留房间、运镜、节奏和歌曲，只换这两个人。',
        `在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} ${ROLES_ZH} 大部分版本是横屏构图，页面默认 16:9、时长固定约 30 秒——和传播最广的那批片子一致。`,
        '笑点在反差：一个人一本正经，另一个人用力过猛。所以情侣、兄妹、一个闷一个闹的朋友、任何「永远不可能同框」的两个人组都特别合适。渲染失败自动退积分。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The template already fixes the studio, the keyboard, the camera and the beat. You pick a version and upload two photos.',
          zh: '不需要。模板已经定好了录音棚、键盘、运镜和节拍。你选一个版本，上传两张照片。',
        },
      },
      {
        q: { en: 'Is the output the real sketch?', zh: '成片是原版小品吗？' },
        a: {
          en: 'No. It is a new fan-remix MP4 generated from your photos. ViralReel does not host the Made in Jamel sketch or any TikTok.',
          zh: '不是。它是用你的照片新生成的粉丝向重排 MP4。ViralReel 不托管《Made in Jamel》小品或任何 TikTok。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse template',
    slug: 'alors-on-danse-template',
    title: {
      en: 'Alors On Danse Template – Seven Studio Versions on ViralReel',
      zh: 'Alors On Danse 模板：ViralReel 上的七个白棚版本',
    },
    description: {
      en: 'alors on danse template: seven recast versions of the Stromae white-studio sketch on ViralReel — Studio Giant, Original Sketch, Football Duo and more. Two photos, ~30 seconds, Keyboard Player and Dance Partner slots.',
      zh: 'alors on danse template：ViralReel 上的七个白棚小品重排版本——白棚巨人版、原版小剧场、足球双人版等。两张照片，约 30 秒，弹键盘位和伴舞位。',
    },
    h1: { en: 'Alors On Danse template versions', zh: 'Alors On Danse 模板版本' },
    lead: {
      en: 'Every Alors On Danse template version is the same white studio with a different pair in it. Pick the one closest to your duo.',
      zh: '每个 Alors On Danse 模板版本都是同一个白棚，换的是里面那对搭档。选一个和你们最像的。',
    },
    guideTitle: {
      en: 'Choosing a version to copy',
      zh: '选一个要翻拍的版本',
    },
    body: {
      en: [
        `The wave started with character recasts: Mr. X and Leon from Resident Evil, Gandalf with Frodo, Po and Tigress, Tony Soprano with Paulie, three Spider-Men, footballers, two kids. ${ROLES_EN}`,
        `Open ${EN_TEMPLATE} and pick the version whose framing and energy match your pair — then upload one photo per person. ${SLOTS_EN} The render keeps the version\'s camera, timing and sound as the reference.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `这波最早火的是影视角色重排：《生化危机》的 Mr. X 和 Leon、甘道夫和弗罗多、《功夫熊猫》的阿宝和娇虎、托尼和保罗、三个蜘蛛侠、足球运动员、两个小孩。${ROLES_ZH}`,
        `打开 ${ZH_TEMPLATE} ，选一个构图和气质跟你们最像的版本——然后每人上传一张照片。${SLOTS_ZH} 渲染时以该版本的运镜、节奏和声音为参照。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this a CapCut template?', zh: '这是 CapCut 模板吗？' },
        a: {
          en: 'No. CapCut templates paste a face onto a fixed clip. ViralReel renders both whole people from your photos, so face, hair, body and outfit match the clip.',
          zh: '不是。CapCut 模板是把脸贴到固定片段上。ViralReel 从你的照片重新生成两个完整的人——脸、发型、身体、衣服都和片段匹配。',
        },
      },
      {
        q: { en: 'Which version should I pick?', zh: '该选哪个版本？' },
        a: {
          en: 'Pick the one closest to your pair: a calm-plus-chaotic duo suits Original Sketch, a sports group suits Football Duo, a pet or baby fits the dance role of any landscape version.',
          zh: '选和你们组合最像的：一个淡定一个闹腾的搭档适合原版小剧场，体育群体适合足球双人版，宠物或小孩可以放任何横屏版本的伴舞位。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse video',
    slug: 'alors-on-danse-video',
    title: {
      en: 'Alors On Danse Video – Make the ~30s MP4 on ViralReel',
      zh: 'Alors On Danse 视频：在 ViralReel 制作约 30 秒 MP4',
    },
    description: {
      en: 'alors on danse video: ViralReel renders a new ~30-second white-studio MP4 from your two photos. Keyboard Player and Dance Partner slots, 16:9. Not the Made in Jamel sketch, not a TikTok download.',
      zh: 'alors on danse video：ViralReel 用你的两张照片渲染一条新的约 30 秒白棚 MP4。弹键盘位和伴舞位，16:9。不是《Made in Jamel》原片，也不是 TikTok 下载。',
    },
    h1: { en: 'Alors On Danse video', zh: 'Alors On Danse 视频' },
    lead: {
      en: 'An Alors On Danse video on ViralReel is a new MP4 generated from your two photos — not a download of the sketch or any TikTok.',
      zh: 'ViralReel 上的 Alors On Danse 视频是用你的两张照片新生成的 MP4——不是小品原片，也不是任何 TikTok 的下载。',
    },
    guideTitle: {
      en: 'The file you get, and how it is made',
      zh: '你拿到的文件，以及它是怎么做的',
    },
    body: {
      en: [
        'The clip people mean is the 2010 white-studio sketch: Jamel Debbouze takes over Stromae\'s session, Stromae keeps playing the mini keyboard, and the "Alors on danse" beat runs under it. ViralReel does not host that sketch or the recast TikToks — it generates a new clip around your two faces.',
        `Make it at ${EN_TEMPLATE}. ${SLOTS_EN} The export is about 30 seconds at 16:9, matching the versions that spread the widest. ${ROLES_EN}`,
        `${SOUND_EN} A failed render is refunded automatically.`,
      ],
      zh: [
        '大家说的片子是 2010 年的白棚小品：Jamel Debbouze 接管了 Stromae 的录音棚，Stromae 继续弹迷你键盘，《Alors on danse》的节拍铺在下面。ViralReel 不托管这个小品，也不托管那些重排 TikTok——它围绕你的两张脸生成一条新片子。',
        `在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} 导出约 30 秒、16:9，与传播最广的版本一致。${ROLES_ZH}`,
        `${SOUND_ZH} 渲染失败自动退积分。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long is the video?', zh: '视频多长？' },
        a: {
          en: 'About 30 seconds — the length of the versions that traveled the widest. The template fixes the length so the joke lands on the beat.',
          zh: '约 30 秒——传播最广版本的长度。模板固定时长，保证笑点踩在节拍上。',
        },
      },
      {
        q: { en: 'Does the MP4 include the song?', zh: 'MP4 里带歌吗？' },
        a: {
          en: 'No. ViralReel does not license "Alors on danse". Add the trend sound in TikTok, Reels, or Shorts when you post.',
          zh: '不带。ViralReel 不授权《Alors on danse》。发布时在 TikTok、Reels 或 Shorts 里加趋势原声。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse tiktok',
    slug: 'alors-on-danse-tiktok',
    title: {
      en: 'Alors On Danse TikTok – Post the Recast With the Trend Sound',
      zh: 'Alors On Danse TikTok：带上趋势原声发重排版',
    },
    description: {
      en: 'alors on danse tiktok: make the white-studio recast on ViralReel, then post it with the Alors on danse sound and an AI label. What the trend is, which posts led it, and how to join.',
      zh: 'alors on danse tiktok：在 ViralReel 做白棚重排版，带上 Alors on danse 原声和 AI 标注发布。趋势是什么、哪些帖子带火的、怎么加入。',
    },
    h1: { en: 'Alors On Danse on TikTok', zh: 'TikTok 上的 Alors On Danse' },
    lead: {
      en: 'The Alors On Danse TikTok trend is the white-studio sketch recast wave. Here is how it moved, and how to post yours into the same feed.',
      zh: 'Alors On Danse 的 TikTok 趋势是白棚小品重排潮。这里讲清它是怎么火起来的，以及怎么把你的帖子发进同一条信息流。',
    },
    guideTitle: {
      en: 'The TikTok wave, and posting yours',
      zh: 'TikTok 这波，以及发布你的版本',
    },
    body: {
      en: [
        'The wave moved fast through October 2026. The sketch itself went round again in April for the song\'s 16th birthday, passing 21 million plays. The first AI recasts landed on 2 October — two F1 drivers at the keyboard, then Gandalf with Frodo. On 5 October, Mr. X and Leon from Resident Evil took the two roles and became the biggest recast of the wave at 341.7K plays. Footballers followed on 8 October — DJ Yamal on the keys with MC Messi and MC Ronaldo dancing. By 21 October a plain repost of the sketch passed 551K plays in days, and the how-to posts were everywhere.',
        `You do not need a TikTok login to make one. Open ${EN_TEMPLATE}, upload two photos, and generate. ${SLOTS_EN} The render returns a ~30-second MP4 with the version\'s framing.`,
        'When you post: add the Alors on danse trend sound from the app\'s sound picker (the original or the Extended Mix), write a caption about who is who, and turn on the AI-generated label. ViralReel does not license the song. Do not cast celebrities or characters in the photos — the joke works best with people you actually know.',
      ],
      zh: [
        '这波在 2026 年 10 月走得很快。4 月这首歌 16 岁生日时，小品原片又被翻出来转了一轮，播放破 2100 万。10 月 2 日第一批 AI 重排上线——两个 F1 车手坐键盘，然后是甘道夫和弗罗多。10 月 5 日，《生化危机》的 Mr. X 和 Leon 接管两个角色，以 34.17 万播放成为这波最大的重排版。10 月 8 日轮到足球运动员——DJ Yamal 弹键盘，MC Messi 和 MC Ronaldo 伴舞。到 10 月 21 日，一条纯转发的原片几天就过了 55.1 万播放，教程帖铺天盖地。',
        '做一条不需要 TikTok 账号。打开 ' + ZH_TEMPLATE + ' ，上传两张照片，直接生成。' + SLOTS_ZH + ' 渲染返回一条约 30 秒、带该版本构图的 MP4。',
        '发布时：从 App 曲库加 Alors on danse 趋势原声（原曲或 Extended Mix），文案写清谁是谁，并打开 AI 生成标注。ViralReel 不授权这首歌。照片里不要用名人和影视角色——这个梗用你真认识的人来玩才最好笑。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which sound do TikTok posts use?', zh: 'TikTok 上的帖子用的哪条原声？' },
        a: {
          en: 'The song itself — "Alors on danse" by Stromae — usually the original or the Extended Mix upload. Search the sound picker and tap "Use this sound".',
          zh: '就是这首歌——Stromae 的《Alors on danse》，通常是原版或 Extended Mix 上传版。在曲库搜索后点「使用这个声音」。',
        },
      },
      {
        q: { en: 'What caption works?', zh: '配什么文案？' },
        a: {
          en: 'A who-is-who line: name the keyboard player and the dance partner. The contrast is the joke, so the caption only has to point at it.',
          zh: '一条「谁是谁」：写明谁在弹键盘、谁在伴舞。笑点在反差，文案点到为止就好。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse generator',
    slug: 'alors-on-danse-generator',
    title: {
      en: 'Alors On Danse Generator – Two Photos to a Studio Recast',
      zh: 'Alors On Danse 生成器：两张照片做出白棚重排版',
    },
    description: {
      en: 'alors on danse generator: ViralReel turns two photos into a ~30-second white-studio recast. Keyboard Player and Dance Partner slots, seven versions, no prompt, browser-based.',
      zh: 'alors on danse generator：ViralReel 用两张照片生成约 30 秒白棚重排版。弹键盘位和伴舞位，七个版本，不用提示词，浏览器直接用。',
    },
    h1: { en: 'Alors On Danse generator', zh: 'Alors On Danse 生成器' },
    lead: {
      en: 'The Alors On Danse generator on ViralReel needs two photos and nothing else — no prompt, no app, no editing.',
      zh: 'ViralReel 的 Alors On Danse 生成器只要两张照片——不用提示词、不用装 App、不用剪辑。',
    },
    guideTitle: {
      en: 'How the generator works',
      zh: '生成器是怎么工作的',
    },
    body: {
      en: [
        'The generator re-shoots the white-studio sketch around your two faces. The studio, the keyboard, the laptop, the camera and the beat come from the reference version you pick; the two people come from your photos. One person plays it straight at the keyboard, the other commits far too hard — that contrast is the whole format.',
        `The generator is on the template page: ${EN_TEMPLATE}. ${SLOTS_EN} ${ROLES_EN}`,
        'Rendering takes a few minutes and returns a ~30-second MP4. The cost shows before you start, and a failed render is refunded automatically. ' + LIMIT_EN,
      ],
      zh: [
        '生成器围绕你的两张脸重拍白棚小品。录音棚、键盘、笔记本电脑、运镜和节拍来自你选的参照版本；两个人来自你的照片。一个人在键盘前面无表情，另一个人用力过猛——这个反差就是整个格式。',
        `生成器在模板页：${ZH_TEMPLATE} 。${SLOTS_ZH} ${ROLES_ZH}`,
        '渲染需要几分钟，返回约 30 秒的 MP4。费用在开始前显示，渲染失败自动退积分。' + LIMIT_ZH,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do both photos have to be humans?', zh: '两张照片必须都是人吗？' },
        a: {
          en: 'No. Put a person at the keyboard and a pet, baby, or character in the dance role. Give the model a clear face picture so it keeps the features.',
          zh: '不用。键盘位放人，伴舞位可以放宠物、小孩或角色。给模型一张脸部清晰的照片，它会保留特征。',
        },
      },
      {
        q: { en: 'Can I generate both roles from one person?', zh: '两个位置能用同一个人的照片吗？' },
        a: {
          en: 'You can upload the same adult\'s photo twice — the calm take and the over-committed take come from the render, not from the photos.',
          zh: '可以把同一位成年人的照片上传两次——淡定的演绎和过火的演绎是渲染出来的，不是照片里自带的。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse meme',
    slug: 'alors-on-danse-meme',
    title: {
      en: 'Alors On Danse Meme – The Studio Sketch Recast, Explained',
      zh: 'Alors On Danse 梗：白棚小品重排详解',
    },
    description: {
      en: 'alors on danse meme: the 2010 Jamel Debbouze and Stromae sketch, rebuilt with two new faces by AI. Where it came from, why it works, and how to make your own recast on ViralReel.',
      zh: 'alors on danse meme：2010 年 Jamel Debbouze 和 Stromae 的小品，被 AI 换上两张新脸重拍。它从哪来、为什么好笑，以及怎么在 ViralReel 做你自己的版本。',
    },
    h1: { en: 'Alors On Danse meme', zh: 'Alors On Danse 梗' },
    lead: {
      en: 'The Alors On Danse meme is one fixed sketch with an endless supply of new duos. ViralReel makes your version from two photos.',
      zh: 'Alors On Danse 梗是一个固定小品配无穷尽的新搭档。ViralReel 用两张照片做你的版本。',
    },
    guideTitle: {
      en: 'The meme, and the version you can make',
      zh: '这个梗，以及你能做的版本',
    },
    body: {
      en: [
        'The source is a 2010 comedy sketch from Made in Jamel, Jamel Debbouze\'s show: he crashes Stromae\'s white studio mid-session, dances, points at the lens and mouths along, while Stromae — who wrote "Alors on danse" himself — keeps playing the mini keyboard like nothing is happening. It is a parody of how the song was made, which is the first layer of the joke.',
        'The meme layer is the recast: any two people dropped into those exact roles. The wave peaked with Mr. X and Leon from Resident Evil at 341.7K plays, then footballers, Po and Tigress, Tony Soprano and Paulie, Gandalf and Frodo, three Spider-Men, and two kids. The sound carried every version — the same beat, the same 30 seconds, so every remake reads in one second.',
        `ViralReel does not host the sketch or the recasts. Your version starts at ${EN_TEMPLATE} with two photos. ${SLOTS_EN} ${SOUND_EN}`,
      ],
      zh: [
        '源头是 2010 年《Made in Jamel》（Jamel Debbouze 的综艺）里的一段喜剧小品：他中途闯进 Stromae 的白棚，跳舞、指镜头、对口型，而自己写出《Alors on danse》的 Stromae 面无表情地继续弹迷你键盘。它是对这首歌创作过程的戏仿——这是笑点的第一层。',
        '梗的第二层是换人：任何两个人被放进这两个固定角色。这波的最高点是《生化危机》Mr. X 和 Leon 版（34.17 万播放），随后是足球运动员、阿宝和娇虎、托尼和保罗、甘道夫和弗罗多、三个蜘蛛侠、两个小孩。每条版本用的都是同一段声音——同样的节拍、同样的 30 秒，每条重排一秒就能读懂。',
        `ViralReel 不托管小品原片和重排版。你的版本从 ${ZH_TEMPLATE} 开始，只需两张照片。${SLOTS_ZH} ${SOUND_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Why is the meme funny?', zh: '这个梗为什么好笑？' },
        a: {
          en: 'Two layers: the sketch itself parodies a songwriter who clearly did not need a hype man, and the recasts prove anyone can be cast in either role. The calm-versus-chaotic contrast does the rest.',
          zh: '两层：小品本身在戏仿一位「明显不需要人捧场」的创作歌手；而换人重排证明任何两个人都能被塞进这两个角色。淡定与过火的反差负责剩下的部分。',
        },
      },
      {
        q: { en: 'Is the meme the real making-of?', zh: '这个梗是真实的创作幕后吗？' },
        a: {
          en: 'No. It is a scripted comedy sketch from 2010. Stromae composed "Alors on danse" alone, which is exactly what the sketch pretends did not happen.',
          zh: '不是。它是 2010 年一段有剧本的喜剧小品。Stromae 是独自写出《Alors on danse》的——小品假装的恰恰是这件事没发生。',
        },
      },
    ],
  },
  ...ALORS_ON_DANSE_INTENT_TAILS,
];

export function getAlorsOnDanseLongTail(slug: string): AlorsOnDanseLongTailEntry | undefined {
  return ALORS_ON_DANSE_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveAlorsOnDanseLongTailSteps(entry: AlorsOnDanseLongTailEntry): readonly AlorsOnDanseHowToStep[] {
  return entry.steps === 'shared' ? ALORS_ON_DANSE_HOW_TO_STEPS : entry.steps;
}

export function buildAlorsOnDanseLongTailFaq(
  entry: AlorsOnDanseLongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  void ctx;
  return entry.faq.map((item) => [item.q[zh ? 'zh' : 'en'], item.a[zh ? 'zh' : 'en']]);
}

export function alorsOnDanseLinkGroups(zh: boolean) {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: ALORS_ON_DANSE_TEMPLATE_PATH, label: zh ? 'Alors On Danse AI 模板' : 'Alors On Danse AI template' },
        { href: '/alors-on-danse-ai', label: 'Alors On Danse AI' },
        { href: '/alors-on-danse-video', label: zh ? 'Alors On Danse 视频' : 'Alors On Danse video' },
        { href: '/alors-on-danse-template', label: zh ? '七个版本' : 'Seven versions' },
        { href: '/alors-on-danse-generator', label: zh ? '生成器' : 'Generator' },
        { href: '/alors-on-danse-ai-generator', label: zh ? 'AI 生成器' : 'AI generator' },
        { href: '/make-alors-on-danse-ai', label: zh ? '制作' : 'Make one' },
        { href: '/how-to-make-alors-on-danse-ai', label: zh ? '图文教程' : 'Step-by-step how-to' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗与背景' : 'Meme and background',
      links: [
        { href: '/alors-on-danse-meme', label: zh ? '梗详解' : 'Alors On Danse meme' },
        { href: '/alors-on-danse-tiktok', label: zh ? 'TikTok 玩法' : 'Alors On Danse TikTok' },
        { href: '/alors-on-danse-song', label: zh ? '这首歌' : 'The song' },
        { href: '/alors-on-danse-meaning', label: zh ? '歌名含义' : 'What the title means' },
        { href: '/stromae-jamel-debbouze-ai', label: 'Stromae & Jamel Debbouze AI' },
        { href: '/alors-on-danse-making-of', label: zh ? '是真实幕后吗' : 'Real making-of?' },
      ],
    },
    {
      title: zh ? '其他趋势' : 'Other trends',
      links: [
        { href: '/tiny-desk-outstanding-ai-template', label: 'Tiny Desk Outstanding' },
        { href: '/wassup-in-a-minute-ai-template', label: 'Wassup in a Minute' },
        { href: '/nostalgia-ai-template', label: 'NostalgIA CapCut' },
        { href: '/window-peeper-ai-template', label: 'Window Peeper' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: '/blog/what-is-alors-on-danse-ai', label: zh ? 'Alors On Danse AI 是什么' : 'What Alors On Danse AI is' },
        { href: '/blog/how-to-make-alors-on-danse-ai-video', label: zh ? '如何制作 Alors On Danse AI 视频' : 'How to make a Alors On Danse AI video' },
        { href: '/blog/alors-on-danse-song-and-meaning', label: zh ? '歌与歌名含义' : 'The song and its meaning' },
        { href: '/blog/october-2026-viral-ai-meme-videos', label: zh ? '2026 年 10 月梗视频盘点' : 'October 2026 meme roundup' },
      ],
    },
  ];
}

export const ALORS_ON_DANSE_LONG_TAIL_ROUTES = ALORS_ON_DANSE_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
