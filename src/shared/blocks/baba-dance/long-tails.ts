import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { BABA_HOW_TO_STEPS, type BabaHowToStep } from './steps';

/**
 * Long-tail landings for the Ba Ba Ba Dance template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * BABA_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders BabaLongTailRoute.
 * Do not reuse the main `ba-ba-ba-dance-ai-template` slug.
 */

export const BABA_TEMPLATE_PATH = '/ba-ba-ba-dance-ai-template';

const PRODUCT = { en: 'Ba Ba Ba Dance', zh: 'Ba Ba Ba Dance' };

const EN_TEMPLATE = 'https://www.viralreel.app/ba-ba-ba-dance-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/ba-ba-ba-dance-ai-template';

/** Citeable guides. Long-tails, the hub, and the link cluster point here. */
export const BABA_POSTS = {
  howTo: '/blog/how-to-make-ba-ba-ba-dance-ai-video',
  trend: '/blog/ba-ba-ba-dance-trend',
} as const;

const EN_HOWTO = 'https://www.viralreel.app/blog/how-to-make-ba-ba-ba-dance-ai-video';
const ZH_HOWTO = 'https://www.viralreel.app/zh/blog/how-to-make-ba-ba-ba-dance-ai-video';
const EN_TREND = 'https://www.viralreel.app/blog/ba-ba-ba-dance-trend';
const ZH_TREND = 'https://www.viralreel.app/zh/blog/ba-ba-ba-dance-trend';

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
  steps: 'shared' | readonly BabaHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const SLOTS_EN =
  'The generator shows two slots labeled Left Dancer and Right Dancer. Use a full-body, front-facing photo for each dancer — the left photo becomes the dancer on the left of the frame. The routine comes from the reference take; the render does not promise which photo dances which eight-count.';
const SLOTS_ZH =
  '生成器有两个位置，按钮写的是左舞者、右舞者。每位舞者用一张正脸全身照——左边的照片对应画面左边的舞者。舞步来自参考场景，成片不保证某一张照片跳哪一段。';

export const BABA_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'ba ba ba dance ai',
    slug: 'ba-ba-ba-dance-ai',
    title: {
      en: 'Ba Ba Ba Dance AI – Put Yourself and a Friend in the Viral Duo Dance',
      zh: 'Ba Ba Ba Dance AI：把你和朋友放进爆火的双人舞',
    },
    description: {
      en: 'ba ba ba dance ai: ViralReel swaps two dancers into the viral duo routine from your photos. Six takes, two slots (Left Dancer, Right Dancer). Not affiliated with TikTok or the original creators. Add the trend sound on the platform.',
      zh: 'ba ba ba dance ai：ViralReel 用你的照片把两位舞者换进爆火的双人舞。六套场景，两个位置（左舞者、右舞者）。与 TikTok 及原作者无关。热梗原声在平台上另加。',
    },
    h1: { en: 'Ba Ba Ba Dance AI', zh: 'Ba Ba Ba Dance AI' },
    lead: {
      en: 'Ba ba ba dance AI on ViralReel is a new clip of your people doing the viral duo routine — not a download of the original TikTok.',
      zh: 'ViralReel 上的 Ba Ba Ba Dance AI 是用你的人跳这段爆火双人舞的新片子——不是原始 TikTok 的下载。',
    },
    guideTitle: {
      en: 'What ba ba ba dance AI is',
      zh: 'Ba Ba Ba Dance AI 是什么',
    },
    body: {
      en: [
        'A ba ba ba dance ai search wants the October 2026 TikTok duo format with new people in it: two dancers side by side close to the camera, a solo stretch each, a sync finish, and the "Don\'t You Worry \'Bout a Thing" remix (Tori Kelly\'s Meena version from Sing) carrying the whole thing. ViralReel does not host the original TikToks or the song.',
        `Make your own at ${EN_TEMPLATE}. Pick one of six takes — Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson. ${SLOTS_EN} Leave the ratio on 9:16 and read the credit cost before you generate.`,
        `The download is an MP4 of a new scene. ViralReel does not license the song or the creators' audio. Add the trend sound inside TikTok, Reels, or Shorts and turn on the AI label. No app to install, no CapCut project to hunt down, no prompt to write. The step-by-step is ${EN_HOWTO}. What the October 2026 trend is, including the @otr.j5 library origin, is ${EN_TREND}.`,
      ],
      zh: [
        '搜 ba ba ba dance ai 要的是 2026 年 10 月 TikTok 双人格式的新版本：两位舞者并排站在镜头前，各跳一段独舞，同步收尾，配乐是《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）。ViralReel 不托管原始 TikTok，也不托管这首歌。',
        `在 ${ZH_TEMPLATE} 制作你自己的版本。六套场景任选——图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学。${SLOTS_ZH} 画幅保持 9:16，生成前看清积分。`,
        `下载的是一条新场景的 MP4。ViralReel 不授权这首歌，也不授权创作者的音频。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。不用装 App，不用找 CapCut 工程，也不用写提示词。步骤在 ${ZH_HOWTO} 。2026 年 10 月这条趋势是什么、图书馆原版来源 @otr.j5，在 ${ZH_TREND} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is ba ba ba dance AI the original video?', zh: 'Ba Ba Ba Dance AI 是原片吗？' },
        a: {
          en: 'No. It is a new MP4 generated from your photos. ViralReel does not reupload the original TikToks or the song.',
          zh: '不是。它是用你的照片新生成的 MP4。ViralReel 不转载原始 TikTok，也不转载歌曲。',
        },
      },
      {
        q: { en: 'Do I need two photos?', zh: '一定要两张照片吗？' },
        a: {
          en: 'The takes are duo templates with two slots, and two full-body photos give the cleanest result. One photo also works — the template cast fills the other dancer, and you can replace it by uploading a second photo later.',
          zh: '六套场景都是双人模板、有两个位置，两张全身照效果最干净。一张也能做——另一位舞者先用模板阵容补位，之后再传第二张即可替换。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance ai video',
    slug: 'ba-ba-ba-dance-ai-video',
    title: {
      en: 'Ba Ba Ba Dance AI Video – Make the MP4 on ViralReel',
      zh: 'Ba Ba Ba Dance AI 视频：在 ViralReel 制作 MP4',
    },
    description: {
      en: 'ba ba ba dance ai video: ViralReel makes a duo-dance MP4 from your photos. Six takes, two slots (Left Dancer, Right Dancer). Not affiliated with TikTok or the original creators. Add the trend sound on TikTok, Reels, or Shorts.',
      zh: 'ba ba ba dance ai video：ViralReel 用你的照片做双人舞 MP4。六套场景，两个位置（左舞者、右舞者）。与 TikTok 及原作者无关。热梗原声在 TikTok、Reels 或 Shorts 里另加。',
    },
    h1: { en: 'Ba Ba Ba Dance AI video', zh: 'Ba Ba Ba Dance AI 视频' },
    lead: {
      en: 'A ba ba ba dance AI video on ViralReel is a new MP4 of your people performing the duo routine — not a download of the TikTok that started the wave.',
      zh: 'ViralReel 上的 ba ba ba dance AI 视频是一条你的人跳这段双人舞的新 MP4——不是带火这波的那条 TikTok。',
    },
    guideTitle: {
      en: 'How to make a ba ba ba dance AI video',
      zh: '如何制作 ba ba ba dance AI 视频',
    },
    body: {
      en: [
        'A ba ba ba dance ai video search wants the file: two dancers side by side, a solo stretch each, the sync finish, and the ba-ba-ba hook from the Sing remix underneath. The clip people mean recreates the October 2026 TikTok format — ViralReel does not host those originals.',
        `Make the new clip at ${EN_TEMPLATE}. Pick Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson. ${SLOTS_EN} Full-body, front-facing photos track the choreography better than close-ups. Leave the ratio on 9:16 and read the credit cost before you generate.`,
        `The download is an MP4 of a new scene. ViralReel does not license the song or the creators' audio. Add the trend sound inside TikTok, Reels, or Shorts, and label the post as AI-generated. Failed renders are credited back automatically. The longer how-to is ${EN_HOWTO}. The trend explainer is ${EN_TREND}.`,
      ],
      zh: [
        '搜 ba ba ba dance ai video 要的是那个文件：两位舞者并排、各跳一段独舞、同步收尾，底下垫着《欢乐好声音》混音版的 ba ba ba 副歌。大家说的片子复刻的是 2026 年 10 月的 TikTok 格式——ViralReel 不托管那些原片。',
        `在 ${ZH_TEMPLATE} 制作新片子。图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学任选。${SLOTS_ZH} 正脸全身照比大头照更能跟住编舞。画幅保持 9:16，生成前看清积分。`,
        `下载的是一条新场景的 MP4。ViralReel 不授权这首歌，也不授权创作者的音频。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。生成失败会自动退积分。更完整的教程在 ${ZH_HOWTO} 。趋势说明在 ${ZH_TREND} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What file do I download?', zh: '下载的是什么文件？' },
        a: {
          en: 'An MP4 of your duo-dance clip, exported in the resolution and length you picked. ViralReel does not export the original TikTok or a licensed soundtrack.',
          zh: '你那条双人舞成片的 MP4，按你选的分辨率和时长导出。ViralReel 不导出原始 TikTok，也不带已授权的配乐。',
        },
      },
      {
        q: { en: 'How long does a render take?', zh: '渲染要多久？' },
        a: {
          en: 'Most ba ba ba dance renders finish in a few minutes. The result lands in your account history, and failed jobs are refunded automatically as credits.',
          zh: '大多数 ba ba ba dance 渲染几分钟内完成。成片进入你账户的历史记录，失败的任务会自动退回积分。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance template',
    slug: 'ba-ba-ba-dance-template',
    title: {
      en: 'Ba Ba Ba Dance Template – Six Takes of the Viral Duo Routine',
      zh: 'Ba Ba Ba Dance 模板：爆火双人舞的六套场景',
    },
    description: {
      en: 'ba ba ba dance template: six takes of the viral duo routine — Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, Sibling Lesson. Two photo slots each. Not affiliated with TikTok or the original creators.',
      zh: 'ba ba ba dance template：爆火双人舞的六套场景——图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员、姐弟教学。每套两个照片位。与 TikTok 及原作者无关。',
    },
    h1: { en: 'Ba Ba Ba Dance template', zh: 'Ba Ba Ba Dance 模板' },
    lead: {
      en: 'A ba ba ba dance template is a fixed take of the duo routine — room, framing, blocking, and song — with the two dancers left empty for your photos.',
      zh: 'ba ba ba dance 模板是一段固定的双人舞场景——房间、构图、走位和配乐都定好——只留两位舞者的位置等你的照片。',
    },
    guideTitle: {
      en: 'What is in each ba ba ba dance template',
      zh: '每套 ba ba ba dance 模板里有什么',
    },
    body: {
      en: [
        'Every ba ba ba dance template on ViralReel keeps the same structure that made the trend readable: two dancers side by side close to the camera, a solo stretch each while the other hypes, and a sync finish to the "Don\'t You Worry \'Bout a Thing" remix (Tori Kelly\'s Meena version from Sing). Only the setting and the cast change.',
        'The six takes: Library Original recreates the school-library version that started the format. Night Lot Duo moves it to a streetlit parking lot. Stairwell Tag sets two friends trading solos in a concrete stairwell. Dad & Daughter is the living-room family version. Classroom Cadets pairs a black tee with a cadet uniform between desks. Sibling Lesson is the wood-paneled hallway at home.',
        `Open ${EN_TEMPLATE}, click the take closest to your crew, and upload one full-body photo per dancer. ${SLOTS_EN} ViralReel does not license the song — add the trend sound in TikTok, Reels, or Shorts and label the post as AI. Steps: ${EN_HOWTO}. The trend, including @otr.j5 on Library Original: ${EN_TREND}.`,
      ],
      zh: [
        'ViralReel 上的每套 ba ba ba dance 模板都保留让这个趋势一眼能读懂的结构：两位舞者并排站在镜头前，各跳一段独舞、另一人围观起哄，最后跟着《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）同步收尾。变的只有场景和阵容。',
        '六套场景：图书馆原版复刻让这个格式出圈的学校图书馆版；夜间停车场搬到路灯下的停车场；楼梯轮舞是两个朋友在清水混凝土楼梯间轮流独舞；爸爸和女儿是客厅家庭版；教室学员在课桌间配了一身黑色 T 恤和一身学员制服；姐弟教学则是家里的木饰面走廊。',
        `打开 ${ZH_TEMPLATE} ，点击和你的团体最像的场景，每位舞者上传一张全身照。${SLOTS_ZH} ViralReel 不授权这首歌——请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。步骤：${ZH_HOWTO} 。趋势说明，包括图书馆原版的 @otr.j5：${ZH_TREND} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which ba ba ba dance template should I pick?', zh: '我该选哪套 ba ba ba dance 模板？' },
        a: {
          en: 'Pick the room that matches your pair: the Library Original for classmates, Dad & Daughter for family, Stairwell Tag or Night Lot Duo for friends, Sibling Lesson for brothers and sisters, Classroom Cadets for uniformed teams. The routine is the same — the setting is the story.',
          zh: '按你们的关系选场景：同学选图书馆原版，家人选爸爸和女儿，朋友选楼梯轮舞或夜间停车场，姐弟选姐弟教学，制服团队选教室学员。舞步都一样——场景才是故事。',
        },
      },
      {
        q: { en: 'Do the templates include the song?', zh: '模板带歌吗？' },
        a: {
          en: 'No. ViralReel does not license "Don\'t You Worry \'Bout a Thing" or the trend remix. The generated MP4 may carry an admin-configured reference track, but you should add the trend sound from TikTok, Reels, or Shorts before posting.',
          zh: '不带。ViralReel 不授权《Don\'t You Worry \'Bout a Thing》，也不授权热梗混音。生成的 MP4 可能带有管理员配置的参考音轨，但发布前请在 TikTok、Reels 或 Shorts 里加上热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance tiktok',
    slug: 'ba-ba-ba-dance-tiktok',
    title: {
      en: 'Ba Ba Ba Dance TikTok – the Trend, the Song, and How to Join It',
      zh: 'Ba Ba Ba Dance TikTok：趋势、原曲，以及怎么加入',
    },
    description: {
      en: 'ba ba ba dance tiktok: what the October 2026 duo-dance trend is, where the ba ba ba sound comes from (the Sing remix), and how to make your own version from photos on ViralReel. Not affiliated with TikTok.',
      zh: 'ba ba ba dance tiktok：2026 年 10 月双人舞趋势是什么、ba ba ba 的声音出自哪里（《欢乐好声音》混音），以及怎么在 ViralReel 用照片做你自己的版本。与 TikTok 无关。',
    },
    h1: { en: 'Ba Ba Ba Dance on TikTok', zh: 'TikTok 上的 Ba Ba Ba Dance' },
    lead: {
      en: 'The ba ba ba dance is TikTok\'s October 2026 duo format: side by side, solo turns, sync finish — carried by the "Don\'t You Worry \'Bout a Thing" remix everyone mouths as ba ba ba.',
      zh: 'ba ba ba dance 是 TikTok 2026 年 10 月的双人格式：并排站位、轮流独舞、同步收尾——配乐是大家跟着口型喊 ba ba ba 的《Don\'t You Worry \'Bout a Thing》混音。',
    },
    guideTitle: {
      en: 'The ba ba ba dance TikTok trend explained',
      zh: 'ba ba ba dance TikTok 趋势详解',
    },
    body: {
      en: [
        'The trend took off on TikTok in early October 2026 and crystallized through school versions: two students side by side in a library, a stairwell, or a classroom, trading solo stretches of the same routine before finishing it in sync. Within weeks it spread to dads and daughters, siblings, coworkers, and friend groups — the structure stayed, the rooms and the pairs changed. By late October the sound had been used in hundreds of thousands of videos.',
        'The song is the reason the name stuck. The trend sound is a remix of "Don\'t You Worry \'Bout a Thing" as sung by Tori Kelly in her role as Meena in the 2016 animated film Sing — Stevie Wonder wrote the original. The mashup went viral with Tori Kelly\'s own approval, and the scat bridge is the part dancers mouth on camera, which is why everyone calls it the ba ba ba dance. Some people search for "the ba ba ba dance from Sing" — same sound.',
        `To join it without learning the choreography, make an AI version on ViralReel at ${EN_TEMPLATE}. ${SLOTS_EN} Download the MP4, add the ba ba ba trend sound inside TikTok, and turn on the AI-generated label. ViralReel (viralreel.app) is an independent template site and is not affiliated with TikTok or the original creators. The citeable version of this page is ${EN_TREND}. The photo-by-photo steps are ${EN_HOWTO}.`,
      ],
      zh: [
        '这个趋势 2026 年 10 月初在 TikTok 上爆开，并在学校版本里定型：两个学生在图书馆、楼梯间或教室并排站立，轮流跳同一段舞的独舞部分，最后同步收尾。几周内扩散到父女、姐弟、同事和朋友组合——结构没变，变的是场景和搭档。到 10 月下旬，这段声音已被用在数十万条视频里。',
        '歌是梗名成立的原因。趋势原声是《Don\'t You Worry \'Bout a Thing》的混音版，Tori Kelly 在 2016 年动画电影《欢乐好声音》里为角色 Meena 演唱——原曲出自 Stevie Wonder。混音版得到 Tori Kelly 本人认可后爆火，舞者们对着镜头口型的那段哼唱就是「ba ba ba」这个名字的出处。有人搜「欢乐好声音 ba ba ba 舞蹈」——是同一首。',
        `不想学编舞也可以加入：在 ViralReel 用 AI 做——${ZH_TEMPLATE} 。${SLOTS_ZH} 下载 MP4，在 TikTok 里加上 ba ba ba 热梗原声，并打开 AI 生成标注。ViralReel（viralreel.app）是独立的模板站，与 TikTok 及原作者无关。可引用的趋势说明在 ${ZH_TREND} 。按照片逐步做的教程在 ${ZH_HOWTO} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What hashtag does the ba ba ba dance use?', zh: 'ba ba ba dance 用什么标签？' },
        a: {
          en: 'Posts ride the trend sound itself; common tags are #bababadance and #badance alongside general dance tags. The safest discovery path is adding the official trend sound inside TikTok — posts with the original sound are grouped with the trend automatically.',
          zh: '帖子主要靠趋势原声本身获得分发；常见标签有 #bababadance 和一般的舞蹈标签。最稳的曝光方式是在 TikTok 里直接添加官方热梗原声——带原声的帖子会自动归入这个趋势。',
        },
      },
      {
        q: { en: 'Is the ba ba ba dance hard to learn?', zh: 'ba ba ba dance 难学吗？' },
        a: {
          en: 'It is built to be learnable: the solo stretch is short, the moves repeat, and the sync finish is a few counts. If you would rather skip practice entirely, the AI version on ViralReel puts you in the routine from two photos.',
          zh: '它就是为好学而设计的：独舞段落短、动作重复、同步收尾只有几拍。如果想完全跳过练习，ViralReel 的 AI 版本让你从两张照片直接「跳进」这段舞。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba duo dance',
    slug: 'ba-ba-ba-duo-dance',
    title: {
      en: 'Ba Ba Ba Duo Dance – Two Photos, One Sync Finish',
      zh: 'Ba Ba Ba 双人舞：两张照片，一个同步收尾',
    },
    description: {
      en: 'ba ba ba duo dance: the viral two-person format — side by side, solo turns, sync finish — rebuilt from two full-body photos on ViralReel. Six duo takes. Not affiliated with TikTok or the original creators.',
      zh: 'ba ba ba duo dance：爆火的双人格式——并排站位、轮流独舞、同步收尾——在 ViralReel 用两张全身照复刻。六套双人场景。与 TikTok 及原作者无关。',
    },
    h1: { en: 'Ba Ba Ba duo dance', zh: 'Ba Ba Ba 双人舞' },
    lead: {
      en: 'The ba ba ba duo dance is a two-person format: each dancer gets a solo stretch, then the pair lands the routine together. On ViralReel, two photos are all it takes.',
      zh: 'ba ba ba 双人舞是双人格式：每人一段独舞，然后两人一起收尾。在 ViralReel，两张照片就够了。',
    },
    guideTitle: {
      en: 'How the ba ba ba duo dance format works',
      zh: 'ba ba ba 双人舞格式是怎么运作的',
    },
    body: {
      en: [
        'The format is readable in one second, which is why it spread: two dancers side by side close to the camera, one dancing while the other watches and hypes, then a trade, then a synced finish to the "Don\'t You Worry \'Bout a Thing" remix (Tori Kelly\'s Meena version from Sing). The joke and the charm live in the pair — best friends, dad and daughter, sister and brother, classmates.',
        `On ViralReel the whole format is rebuilt as duo templates at ${EN_TEMPLATE}. ${SLOTS_EN} Pick the take that matches your pair — Library Original for classmates, Dad & Daughter for family, Stairwell Tag or Night Lot Duo for friends, Sibling Lesson for siblings, Classroom Cadets for uniformed teams.`,
        `For three or four people, keep the duo structure and let your extras join physically in one of the photos — the group-crowd versions of the trend work the same way. Download the MP4, add the trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated. How the format spread is ${EN_TREND}. How to generate it is ${EN_HOWTO}.`,
      ],
      zh: [
        '这个格式一秒就能读懂，所以传得快：两位舞者并排站在镜头前，一人跳、另一人围观起哄，然后互换，最后跟着《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）同步收尾。笑点和看点都在「搭档」上——闺蜜、父女、姐弟、同学。',
        `在 ViralReel，整个格式被复刻成双人模板：${ZH_TEMPLATE} 。${SLOTS_ZH} 按你们的关系选场景——同学选图书馆原版，家人选爸爸和女儿，朋友选楼梯轮舞或夜间停车场，姐弟选姐弟教学，制服团队选教室学员。`,
        `想三四个人一起：保留双人结构，让其他人在其中一张照片里同框入镜——趋势里的群像版就是这个玩法。下载 MP4，在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 生成标注。格式怎么传开的，在 ${ZH_TREND} 。怎么生成，在 ${ZH_HOWTO} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can two couples or four friends do the ba ba ba dance?', zh: '两对情侣或四个朋友能跳 ba ba ba dance 吗？' },
        a: {
          en: 'The viral versions stay duos, and the ViralReel takes are two-slot duo templates. For four people, put two of you in one photo and two in the other — the generator swaps the photos in as whole frames, and group versions of the trend read exactly like that.',
          zh: '爆火版本保持双人，ViralReel 六套场景也是双位置双人模板。四个人可以两人一张照片、分两张上传——生成器会把照片整帧换进去，趋势里的群像版就是这个观感。',
        },
      },
      {
        q: { en: 'Whose photo goes on the left?', zh: '谁的照片放左边？' },
        a: {
          en: 'Whoever you want on the left of the frame. The left photo fills the Left Dancer slot, the right photo the Right Dancer slot. Full-body, front-facing photos track the choreography best.',
          zh: '你想让谁站画面左边就放谁。左边的照片填左舞者位，右边的填右舞者位。正脸全身照跟编舞效果最好。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance meme',
    slug: 'ba-ba-ba-dance-meme',
    title: {
      en: 'Ba Ba Ba Dance Meme – The Duo Format, Not the Original File',
      zh: 'Ba Ba Ba Dance 梗：双人格式，不是原片文件',
    },
    description: {
      en: 'ba ba ba dance meme: the October 2026 duo dance — side by side, solo turns, sync finish. ViralReel does not host the original meme. It makes a new MP4 from two photos. Not affiliated with TikTok.',
      zh: 'ba ba ba dance meme：2026 年 10 月的双人舞——并排站位、轮流独舞、同步收尾。ViralReel 不托管原始梗文件。它用两张照片做一条新 MP4。与 TikTok 无关。',
    },
    h1: { en: 'Ba Ba Ba Dance meme', zh: 'Ba Ba Ba Dance 梗' },
    lead: {
      en: 'The ba ba ba dance meme is a two-person format everyone can read in one second. ViralReel does not host that original file. It makes a new clip from your photos.',
      zh: 'ba ba ba dance 梗是一秒就能读懂的双人格式。ViralReel 不托管那个原片文件。它用你的照片做一条新片子。',
    },
    guideTitle: {
      en: 'The meme, and the clip you can make',
      zh: '这个梗，以及你能做的片子',
    },
    body: {
      en: [
        'The meme is the pairing. Two dancers stand side by side, close to the camera. One takes a solo stretch while the other waits and hypes. They trade. They finish in sync. School libraries, stairwells, living rooms, and parking lots all kept that structure, which is why a new pair still reads as the same joke. The sound underneath is the "Don\'t You Worry \'Bout a Thing" remix — Tori Kelly\'s Meena version from Sing — and the ba-ba-ba hook is why the name stuck.',
        `ViralReel does not sell the meme file or the original TikToks. The fan template is at ${EN_TEMPLATE}. ${SLOTS_EN} Library Original credits @otr.j5 on the preview card. That credit is the source of the school-library take, not a claim that ViralReel hosts the upload.`,
        `The short landing for the TikTok wave is https://www.viralreel.app/ba-ba-ba-dance-tiktok. The word-order cousin is https://www.viralreel.app/ba-ba-ba-tiktok-dance. What the October 2026 trend is: ${EN_TREND}. How to make the MP4: ${EN_HOWTO}. Add the trend sound on TikTok, Reels, or Shorts and label the post as AI. ViralReel does not license the song.`,
      ],
      zh: [
        '梗在搭档。两位舞者并排站在镜头前。一人先跳一段独舞，另一人等待并起哄。然后互换。最后同步收尾。学校图书馆、楼梯间、客厅和停车场都保留了这个结构，所以换一对人仍然一眼就是同一个笑话。底下的声音是《Don\'t You Worry \'Bout a Thing》混音——《欢乐好声音》里 Tori Kelly 的 Meena 版——ba ba ba 的副歌就是名字留下来的原因。',
        `ViralReel 不出售梗文件，也不托管原始 TikTok。粉丝模板在 ${ZH_TEMPLATE} 。${SLOTS_ZH} 图书馆原版的预览卡署名 @otr.j5。这个署名是学校图书馆那一版的来源，不是说 ViralReel 托管了那条上传。`,
        `TikTok 这波的短落地页是 https://www.viralreel.app/zh/ba-ba-ba-dance-tiktok 。词序不同的姊妹页是 https://www.viralreel.app/zh/ba-ba-ba-tiktok-dance 。2026 年 10 月这条趋势是什么：${ZH_TREND} 。怎么做 MP4：${ZH_HOWTO} 。请在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI。ViralReel 不授权这首歌。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the original ba ba ba dance meme?', zh: '能下载原始 ba ba ba dance 梗吗？' },
        a: {
          en: 'No. ViralReel does not host the TikToks that started the wave, a GIF of them, or the song. It makes a new MP4 from photos you have permission to use.',
          zh: '不能。ViralReel 不托管带火这波的 TikTok、它们的 GIF，或这首歌。它用你有权使用的照片做一条新 MP4。',
        },
      },
      {
        q: { en: 'Why is the ba ba ba dance meme easy to copy?', zh: 'ba ba ba dance 梗为什么好跟？' },
        a: {
          en: 'The blocking never changes: side by side, a solo stretch each, a sync finish. Only the room and the pair change, so every remake is readable immediately.',
          zh: '走位不变：并排、各一段独舞、同步收尾。变的只有房间和搭档，所以每个翻拍都马上能看懂。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance generator',
    slug: 'ba-ba-ba-dance-generator',
    title: {
      en: 'Ba Ba Ba Dance Generator – Browser Template on ViralReel',
      zh: 'Ba Ba Ba Dance 生成器：ViralReel 上的浏览器模板',
    },
    description: {
      en: 'ba ba ba dance generator: ViralReel’s browser generator for the duo dance. No prompt. Six takes. Two slots labeled Left Dancer and Right Dancer. Not affiliated with TikTok. No song license.',
      zh: 'ba ba ba dance generator：ViralReel 的浏览器生成器，用来做这段双人舞。不用写提示词。六套场景。两个位置写的是左舞者、右舞者。与 TikTok 无关。没有歌曲授权。',
    },
    h1: { en: 'Ba Ba Ba Dance generator', zh: 'Ba Ba Ba Dance 生成器' },
    lead: {
      en: 'The ba ba ba dance generator is a fixed template in the browser. You pick a take and upload two photos. You do not describe the dance in a prompt.',
      zh: 'ba ba ba dance 生成器是浏览器里的固定模板。你选一套场景并上传两张照片。你不用在提示词里描述这段舞。',
    },
    guideTitle: {
      en: 'What the generator does',
      zh: '这个生成器做什么',
    },
    body: {
      en: [
        `A ba ba ba dance generator search wants the tool, not a recap of the meme. On ViralReel the tool is the template at ${EN_TEMPLATE}. The side-by-side blocking, the solo turns, and the sync finish are already in the scene. You change who is dancing.`,
        `${SLOTS_EN} The six takes are Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, and Sibling Lesson. Do not upload minors without consent, celebrities, or screenshots of the original TikTok.`,
        `The name with “AI” in it is https://www.viralreel.app/ba-ba-ba-dance-ai-generator. Full steps are ${EN_HOWTO}. The trend explainer is ${EN_TREND}. Default ratio is 9:16. The credit cost is on the page before you generate. ViralReel does not license the song and does not ask you to hunt a CapCut project. The CapCut comparison is https://www.viralreel.app/ba-ba-ba-dance-capcut.`,
      ],
      zh: [
        `搜 ba ba ba dance generator 要的是工具，不是梗的复述。在 ViralReel，这个工具就是 ${ZH_TEMPLATE} 上的模板。并排走位、轮流独舞和同步收尾已经在场景里。你换的是跳舞的人。`,
        `${SLOTS_ZH} 六套场景是图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员和姐弟教学。不要未经同意上传未成年人、名人或原始 TikTok 截图。`,
        `名字里带“AI”的页面是 https://www.viralreel.app/zh/ba-ba-ba-dance-ai-generator 。完整步骤在 ${ZH_HOWTO} 。趋势说明在 ${ZH_TREND} 。默认画幅 9:16。积分在生成前显示在页面上。ViralReel 不授权这首歌，也不要求你去找 CapCut 工程。和 CapCut 的对照在 https://www.viralreel.app/zh/ba-ba-ba-dance-capcut 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I write a prompt in the ba ba ba dance generator?', zh: 'ba ba ba dance 生成器要写提示词吗？' },
        a: {
          en: 'No. Pick one of the six takes and upload photos into Left Dancer and Right Dancer. The template already holds the routine.',
          zh: '不用。六套场景里选一套，把照片放进左舞者和右舞者。舞步已经在模板里。',
        },
      },
      {
        q: { en: 'Is the generator an app I install?', zh: '这个生成器是要安装的 App 吗？' },
        a: {
          en: 'No. It runs in the browser on ViralReel. You do not hunt a CapCut project to use it.',
          zh: '不是。它在 ViralReel 的浏览器里运行。不用去找 CapCut 工程。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance ai generator',
    slug: 'ba-ba-ba-dance-ai-generator',
    title: {
      en: 'Ba Ba Ba Dance AI Generator – Photos In, Duo MP4 Out',
      zh: 'Ba Ba Ba Dance AI 生成器：照片进去，双人舞 MP4 出来',
    },
    description: {
      en: 'ba ba ba dance ai generator: an AI template, not a blank prompt box. ViralReel places your photos in the duo dance. Six takes. Two slots. Not affiliated with TikTok. No song license.',
      zh: 'ba ba ba dance ai generator：这是 AI 模板，不是空白提示词框。ViralReel 把你的照片放进这段双人舞。六套场景。两个位置。与 TikTok 无关。没有歌曲授权。',
    },
    h1: { en: 'Ba Ba Ba Dance AI generator', zh: 'Ba Ba Ba Dance AI 生成器' },
    lead: {
      en: 'The ba ba ba dance AI generator builds a new duo clip from photos. It does not hand you a blank prompt and ask you to invent the choreography.',
      zh: 'ba ba ba dance AI 生成器用照片做一条新的双人舞。它不会给你一个空白提示词，让你自己发明编舞。',
    },
    guideTitle: {
      en: 'How the AI generator is different from a prompt box',
      zh: '这个 AI 生成器和提示词框有什么不同',
    },
    body: {
      en: [
        'Ba ba ba dance ai generator searches often land on general video tools that want a paragraph of instructions. ViralReel is the opposite for this trend. The AI part is the photo-to-scene render inside a template that already performs the duo routine. The result is a new fan clip, not the original TikTok.',
        `Open ${EN_TEMPLATE}. The plain “generator” wording, without “AI” in the query, is https://www.viralreel.app/ba-ba-ba-dance-generator. ${SLOTS_EN}`,
        `Six takes only: Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, Sibling Lesson. Default 9:16. Credits show before generate. Steps are ${EN_HOWTO}. The trend page is ${EN_TREND}. ViralReel does not license or export the Sing remix. Add that sound in TikTok, Reels, or Shorts, and label the post as AI. The download explained without the word “generator” is https://www.viralreel.app/ba-ba-ba-dance-ai-video.`,
      ],
      zh: [
        '搜 ba ba ba dance ai generator 常常落到要你写一整段说明的通用视频工具上。对这条趋势，ViralReel 相反。AI 的部分是模板内部的照片到场景渲染，模板本身已经在跳这段双人舞。成片是新的粉丝向片子，不是原始 TikTok。',
        `打开 ${ZH_TEMPLATE} 。查询里不带“AI”的“生成器”说法，是 https://www.viralreel.app/zh/ba-ba-ba-dance-generator 。${SLOTS_ZH}`,
        `只有六套：图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员、姐弟教学。默认 9:16。积分在生成前显示。步骤在 ${ZH_HOWTO} 。趋势页在 ${ZH_TREND} 。ViralReel 不授权也不导出《欢乐好声音》混音。请在 TikTok、Reels 或 Shorts 里加上那段声音，并把帖子标成 AI。不带“生成器”这个词的下载说明在 https://www.viralreel.app/zh/ba-ba-ba-dance-ai-video 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Will the AI generator recreate the original dancers?', zh: '这个 AI 生成器会重现原舞者吗？' },
        a: {
          en: 'No. It uses the photos you upload. Do not upload the original creators, other celebrities, or screenshots of their TikToks.',
          zh: '不会。它用的是你上传的照片。不要上传原作者、其他名人，或他们 TikTok 的截图。',
        },
      },
      {
        q: { en: 'Where do I start the AI generator?', zh: '从哪里打开这个 AI 生成器？' },
        a: {
          en: `At the Ba Ba Ba Dance template on ViralReel: ${EN_TEMPLATE}. Read the credit cost, then generate.`,
          zh: `在 ViralReel 的 Ba Ba Ba Dance 模板：${ZH_TEMPLATE} 。先看清积分再生成。`,
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance capcut',
    slug: 'ba-ba-ba-dance-capcut',
    title: {
      en: 'Ba Ba Ba Dance CapCut – And the Browser Alternative',
      zh: 'Ba Ba Ba Dance CapCut：以及浏览器里的另一种做法',
    },
    description: {
      en: 'ba ba ba dance capcut: CapCut pastes photos into a fixed template inside the app. ViralReel makes a new browser MP4 of the same duo dance without a CapCut project. Fair comparison. No song license.',
      zh: 'ba ba ba dance capcut：CapCut 是在 App 里把照片贴进固定模板。ViralReel 在浏览器里生成同一段双人舞的新 MP4，不用找 CapCut 工程。公平对照。没有歌曲授权。',
    },
    h1: { en: 'Ba Ba Ba Dance CapCut', zh: 'Ba Ba Ba Dance CapCut' },
    lead: {
      en: 'Ba ba ba dance CapCut is the in-app template path. ViralReel is the browser path to a new duo MP4. Neither one is the original TikTok, and neither one licenses the song.',
      zh: 'Ba ba ba dance CapCut 是 App 里的模板路径。ViralReel 是在浏览器里做新双人舞 MP4 的路径。两者都不是原始 TikTok，也都不授权这首歌。',
    },
    guideTitle: {
      en: 'CapCut template versus a browser MP4',
      zh: 'CapCut 模板和浏览器 MP4',
    },
    body: {
      en: [
        'People searching ba ba ba dance capcut usually want the in-app workflow: open CapCut, find a project someone shared, and paste two photos into a fixed template on the timeline. That is a normal way to edit if you already live in CapCut and want this clip next to your other cuts. ViralReel is not affiliated with CapCut.',
        `ViralReel does not ship a CapCut project and does not ask you to hunt one. At ${EN_TEMPLATE} you pick a take and generate a new MP4 in the browser. ${SLOTS_EN} The buttons are not a promise about which photo dances which eight-count.`,
        `The no-CapCut wording is https://www.viralreel.app/ba-ba-ba-dance-without-capcut. Steps that assume you have already chosen the browser are ${EN_HOWTO}. The trend explainer is ${EN_TREND}. Add the trend sound in TikTok, Reels, or Shorts either way, and label the post as AI. Credits show before you generate. Default ratio is 9:16. You can still drop the downloaded MP4 into CapCut afterward if you want to keep editing there.`,
      ],
      zh: [
        '搜 ba ba ba dance capcut 的人通常要的是 App 里的流程：打开 CapCut，找到别人分享的工程，把两张照片贴进时间线上的固定模板。如果你本来就在 CapCut 里剪辑，还想把这段和别的镜头放在一起，这是正常做法。ViralReel 与 CapCut 没有关系。',
        `ViralReel 不提供 CapCut 工程，也不要求你去找一个。在 ${ZH_TEMPLATE} 选一套场景，在浏览器里生成一条新的 MP4。${SLOTS_ZH} 按钮并不保证哪张照片跳哪一段。`,
        `“不用 CapCut”的说法在 https://www.viralreel.app/zh/ba-ba-ba-dance-without-capcut 。已经决定用浏览器之后的步骤在 ${ZH_HOWTO} 。趋势说明在 ${ZH_TREND} 。两条路径都请在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI。积分在生成前显示。默认画幅 9:16。如果你还想在 CapCut 里继续剪，可以把下载的 MP4 再放进去。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does ViralReel open inside CapCut?', zh: 'ViralReel 是在 CapCut 里面打开的吗？' },
        a: {
          en: 'No. A CapCut template stays inside the CapCut app. ViralReel generates the duo MP4 in the browser. You can drop that MP4 into CapCut later if you want.',
          zh: '不是。CapCut 模板留在 CapCut App 里。ViralReel 在浏览器里生成双人舞 MP4。如果你愿意，之后可以把这条 MP4 放进 CapCut。',
        },
      },
      {
        q: { en: 'Is a CapCut file hidden on ViralReel?', zh: 'ViralReel 上是不是藏了一个 CapCut 文件？' },
        a: {
          en: 'No. ViralReel does not host the CapCut project. It generates its own MP4 from the six takes.',
          zh: '没有。ViralReel 不托管 CapCut 工程。它用六套场景生成自己的 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance without capcut',
    slug: 'ba-ba-ba-dance-without-capcut',
    title: {
      en: 'Ba Ba Ba Dance Without CapCut – Make It in the Browser',
      zh: '不用 CapCut 的 Ba Ba Ba Dance：在浏览器里做',
    },
    description: {
      en: 'ba ba ba dance without capcut: skip the CapCut project. ViralReel generates a new duo-dance MP4 in the browser from two photos. Six takes. Not affiliated with TikTok or CapCut. No song license.',
      zh: 'ba ba ba dance without capcut：不用去找 CapCut 工程。ViralReel 在浏览器里用两张照片生成新的双人舞 MP4。六套场景。与 TikTok 和 CapCut 无关。没有歌曲授权。',
    },
    h1: { en: 'Ba Ba Ba Dance without CapCut', zh: '不用 CapCut 的 Ba Ba Ba Dance' },
    lead: {
      en: 'You can make a ba ba ba dance clip without CapCut. ViralReel generates a new MP4 in the browser. It does not hide a CapCut project on the site.',
      zh: '不做 CapCut 也能做 ba ba ba dance。ViralReel 在浏览器里生成一条新的 MP4。本站没有藏着一个 CapCut 工程。',
    },
    guideTitle: {
      en: 'The path that never opens CapCut',
      zh: '从头到尾不用打开 CapCut 的路径',
    },
    body: {
      en: [
        'Ba ba ba dance without capcut means you do not want to install CapCut or paste stills into someone else’s project. That CapCut path is fine if you already edit there. This page is the other path: a browser template, two photo slots, a downloaded MP4.',
        `Stay in the browser at ${EN_TEMPLATE}. ${SLOTS_EN} Choose Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson. Leave 9:16 on. Read the credits, generate, download the MP4.`,
        `The CapCut keyword itself is https://www.viralreel.app/ba-ba-ba-dance-capcut. The photo-by-photo steps are ${EN_HOWTO}. What the trend is: ${EN_TREND}. ViralReel does not license "Don\'t You Worry \'Bout a Thing." Add the trend sound on TikTok, Reels, or Shorts and turn on the AI label.`,
      ],
      zh: [
        'Ba ba ba dance without capcut 的意思是：你不想安装 CapCut，也不想把静帧贴进别人的工程。如果你本来就在 CapCut 里剪，那条路径没问题。这一页是另一条路径：浏览器模板、两个照片位、一条下载的 MP4。',
        `留在浏览器里，打开 ${ZH_TEMPLATE} 。${SLOTS_ZH} 在图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员、姐弟教学里选一套。保持 9:16。看清积分，生成，下载 MP4。`,
        `CapCut 这个关键词本身在 https://www.viralreel.app/zh/ba-ba-ba-dance-capcut 。按照片逐步做的教程在 ${ZH_HOWTO} 。趋势是什么：${ZH_TREND} 。ViralReel 不授权《Don\'t You Worry \'Bout a Thing》。请在 TikTok、Reels 或 Shorts 里加热梗原声并打开 AI 标注。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I finish a ba ba ba dance clip without opening CapCut?', zh: '不打开 CapCut 能做完一条 ba ba ba dance 吗？' },
        a: {
          en: 'Yes. Use the ViralReel template in the browser, download the MP4, then add the trend sound in TikTok, Reels, or Shorts.',
          zh: '可以。在浏览器里用 ViralReel 模板，下载 MP4，然后在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Do I still need the CapCut template for the song?', zh: '歌曲还是得靠 CapCut 模板吗？' },
        a: {
          en: 'No. Neither path licenses the track. Add the trend sound from the TikTok, Reels, or Shorts library when you post. ViralReel does not export the song.',
          zh: '不用。两条路径都不授权这首曲目。发布时请从 TikTok、Reels 或 Shorts 的曲库加热梗原声。ViralReel 不导出这首歌。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance song',
    slug: 'ba-ba-ba-dance-song',
    title: {
      en: 'Ba Ba Ba Dance Song – Add It on the Platform, Not Here',
      zh: 'Ba Ba Ba Dance 的歌：在平台上加，不在这里下',
    },
    description: {
      en: 'ba ba ba dance song: the trend sound is the "Don\'t You Worry \'Bout a Thing" remix, Tori Kelly\'s Meena version from Sing. ViralReel does not license or export that track. Make the video, then add the sound on TikTok, Reels, or Shorts.',
      zh: 'ba ba ba dance song：趋势原声是《Don\'t You Worry \'Bout a Thing》混音，Tori Kelly 在《欢乐好声音》里的 Meena 版。ViralReel 不授权也不导出这段曲目。先做视频，再在 TikTok、Reels 或 Shorts 里加声音。',
    },
    h1: { en: 'Ba Ba Ba Dance song', zh: 'Ba Ba Ba Dance 的歌' },
    lead: {
      en: 'The ba ba ba dance song is the "Don\'t You Worry \'Bout a Thing" remix. ViralReel does not license it and does not export the track. You add a platform-library sound after the MP4 downloads.',
      zh: 'ba ba ba dance 的歌是《Don\'t You Worry \'Bout a Thing》混音。ViralReel 不授权它，也不导出这首曲目。MP4 下载之后，你从平台曲库加声音。',
    },
    guideTitle: {
      en: 'The song is not a download on ViralReel',
      zh: '这首歌不是 ViralReel 上的下载',
    },
    body: {
      en: [
        'Ba ba ba dance song points at a remix of "Don\'t You Worry \'Bout a Thing" as sung by Tori Kelly in her role as Meena in the 2016 animated film Sing. Stevie Wonder wrote the original 1974 hit. The mashup spread in October 2026, and the scat-like bridge is the part dancers mouth on camera, which is why the dance is named ba ba ba. Some people search for "the ba ba ba dance from Sing" — same sound. The recording is not a ViralReel product.',
        'ViralReel does not license the studio master, Tori Kelly\'s vocal, the film\'s audio, or the trend remix, and it does not export that track as a file you can take to another editor. Some generation models can follow an admin-configured reference track. That follow is not a promise that the MP4 contains the song, and it is not a license. Treat the download as picture.',
        `The video people pair with the song is the duo template at ${EN_TEMPLATE}. ${SLOTS_EN} After you download, open TikTok, Reels, or Shorts and add the trend sound from that app’s library, then turn on the AI label. Steps are ${EN_HOWTO}. Where the sound sits in the trend is ${EN_TREND}. The TikTok landing is https://www.viralreel.app/ba-ba-ba-dance-tiktok.`,
      ],
      zh: [
        'Ba ba ba dance song 指向《Don\'t You Worry \'Bout a Thing》的混音，Tori Kelly 在 2016 年动画电影《欢乐好声音》里为角色 Meena 演唱。原曲是 Stevie Wonder 1974 年的作品。混音版在 2026 年 10 月传开，舞者们对着镜头口型的那段哼唱就是 ba ba ba 这个名字的出处。有人搜「欢乐好声音 ba ba ba 舞蹈」——是同一首。这段录音不是 ViralReel 的产品。',
        'ViralReel 不授权录音室母带、Tori Kelly 的人声、电影音频或热梗混音，也不把这段曲目导出成你可以拿到别的剪辑软件里的文件。部分生成模型可以跟随管理员配置的参考音轨。跟随不等于 MP4 里一定有这首歌，也不是授权。把下载当成画面。',
        `大家拿来配这首歌的视频，是 ${ZH_TEMPLATE} 上的双人模板。${SLOTS_ZH} 下载之后，打开 TikTok、Reels 或 Shorts，从该应用曲库加热梗原声，再打开 AI 标注。步骤在 ${ZH_HOWTO} 。这段声音在趋势里的位置，在 ${ZH_TREND} 。TikTok 落地页是 https://www.viralreel.app/zh/ba-ba-ba-dance-tiktok 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the ba ba ba dance song from ViralReel?', zh: '能从 ViralReel 下载 ba ba ba dance 的歌吗？' },
        a: {
          en: 'No. ViralReel does not license or export the remix. Add the sound from the TikTok, Reels, or Shorts library when you post.',
          zh: '不能。ViralReel 不授权也不导出这段混音。发布时请从 TikTok、Reels 或 Shorts 的曲库加声音。',
        },
      },
      {
        q: { en: 'Does the MP4 ship with the original trend audio?', zh: 'MP4 会带上热梗原声吗？' },
        a: {
          en: 'Not as a licensed soundtrack. A model may follow an admin reference track, generate other audio, or export silence. Add the trend sound on the platform if the post needs that song.',
          zh: '不是作为已授权的原声。模型可能跟随管理员参考音轨，也可能生成别的声音，或导出无声。如果帖子需要这首歌，请在平台上加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'make ba ba ba dance ai',
    slug: 'make-ba-ba-ba-dance-ai',
    title: {
      en: 'Make Ba Ba Ba Dance AI – Steps on ViralReel',
      zh: '制作 Ba Ba Ba Dance AI：ViralReel 上的步骤',
    },
    description: {
      en: 'make ba ba ba dance ai: pick a take, fill Left Dancer and Right Dancer, read the credits, download a 9:16 MP4. Add the trend sound and an AI label. Not affiliated with TikTok. No song license.',
      zh: 'make ba ba ba dance ai：选一套场景，填好左舞者和右舞者，看清积分，下载 9:16 MP4。加热梗原声和 AI 标注。与 TikTok 无关。没有歌曲授权。',
    },
    h1: { en: 'Make Ba Ba Ba Dance AI', zh: '制作 Ba Ba Ba Dance AI' },
    lead: {
      en: 'To make ba ba ba dance AI on ViralReel you upload two photos into a fixed template. You do not install an app and you do not write a prompt.',
      zh: '在 ViralReel 制作 ba ba ba dance AI，是把两张照片放进固定模板。不用装 App，也不用写提示词。',
    },
    guideTitle: {
      en: 'How to make one from this search',
      zh: '从这次搜索开始怎么做',
    },
    body: {
      en: [
        `Make ba ba ba dance ai is the action query. The long version of the steps is ${EN_HOWTO}. The short version is the template at ${EN_TEMPLATE}. ViralReel is not affiliated with TikTok, the film Sing, Tori Kelly, or the original creators, and it does not license the song.`,
        `${SLOTS_EN} Then pick Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson. Keep 9:16. The page shows the credit cost before you generate. The result is a new clip, not a copy of the original TikTok.`,
        `Download the MP4. In TikTok, Reels, or Shorts, add the ba ba ba trend sound from that app’s library and turn on the AI-generated label. If you were about to open CapCut instead, read https://www.viralreel.app/ba-ba-ba-dance-capcut. What the trend is: ${EN_TREND}. The file-focused page is https://www.viralreel.app/ba-ba-ba-dance-ai-video.`,
      ],
      zh: [
        `Make ba ba ba dance ai 是动手查询。步骤的长版本在 ${ZH_HOWTO} 。短版本是 ${ZH_TEMPLATE} 上的模板。ViralReel 与 TikTok、电影《欢乐好声音》、Tori Kelly 及原作者均无关联，也不授权这首歌。`,
        `${SLOTS_ZH} 然后在图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员、姐弟教学里选一套。保持 9:16。页面会在生成前显示积分。成片是新片子，不是原始 TikTok 的拷贝。`,
        `下载 MP4。在 TikTok、Reels 或 Shorts 里从该应用曲库加上 ba ba ba 热梗原声，并打开 AI 生成标注。如果你本来要打开 CapCut，先读 https://www.viralreel.app/zh/ba-ba-ba-dance-capcut 。趋势是什么：${ZH_TREND} 。更偏文件的页面是 https://www.viralreel.app/zh/ba-ba-ba-dance-ai-video 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What are the steps to make ba ba ba dance AI?', zh: '制作 ba ba ba dance AI 的步骤是什么？' },
        a: {
          en: 'Open the ViralReel template, pick one of six takes, upload Left Dancer and Right Dancer, keep 9:16, read the credit cost, generate, then add the trend sound and an AI label on the platform.',
          zh: '打开 ViralReel 模板，六套里选一套，上传左舞者和右舞者，保持 9:16，看清积分，生成，然后在平台上加热梗原声和 AI 标注。',
        },
      },
      {
        q: { en: 'Can I make it from one photo?', zh: '一张照片能做吗？' },
        a: {
          en: 'Two full-body photos give the cleanest duo. One photo also works — the template cast fills the other dancer until you upload a second photo.',
          zh: '两张全身照做出的双人效果最干净。一张也能做——另一位舞者先用模板阵容补位，直到你再传第二张。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba dance original',
    slug: 'ba-ba-ba-dance-original',
    title: {
      en: 'Ba Ba Ba Dance Original – Library Take, Not a Reupload',
      zh: 'Ba Ba Ba Dance 原版：图书馆那一版，不是转载',
    },
    description: {
      en: 'ba ba ba dance original: the school-library duo that set the format, credited to @otr.j5 on ViralReel’s Library Original card. ViralReel does not host that TikTok. Make a new clip from your photos.',
      zh: 'ba ba ba dance original：定下这个格式的学校图书馆双人舞，ViralReel 的图书馆原版卡片署名为 @otr.j5。ViralReel 不托管那条 TikTok。用你的照片做一条新片子。',
    },
    h1: { en: 'Ba Ba Ba Dance original', zh: 'Ba Ba Ba Dance 原版' },
    lead: {
      en: 'The ba ba ba dance original on this page means the library take that set the format. ViralReel does not host that upload. Library Original is a template of the room, credited to @otr.j5.',
      zh: '这一页上的 ba ba ba dance 原版，指的是定下格式的图书馆那一版。ViralReel 不托管那条上传。图书馆原版是这个房间的模板，署名为 @otr.j5。',
    },
    guideTitle: {
      en: 'The library origin, and what you can make',
      zh: '图书馆来源，以及你能做的版本',
    },
    body: {
      en: [
        'The format crystallized in October 2026 through school versions: two students side by side in a library, trading solo stretches, then finishing in sync. On ViralReel, Library Original is that room — bookshelves, warm ceiling lights, a grey hoodie with a beanie beside a black track jacket. The preview card credits @otr.j5. That handle is the source credited for the library take. ViralReel is not affiliated with @otr.j5, TikTok, or the other creators whose cards appear on the hub (@be.llanelson, @thatss_cam3ron, @solely.who, @joliepolyascko, @nylaaa.camm1).',
        'ViralReel does not host the original TikTok, a GIF of it, or the song. The preview clips on the template page are trend references with a credit badge. They are not your render and not a download of the upload. Do not upload a screenshot of that TikTok, a celebrity, or a minor without consent.',
        `To make your own pair in that room, open ${EN_TEMPLATE} and choose Library Original, or pick Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson if another room fits. ${SLOTS_EN} The six takes are listed at https://www.viralreel.app/ba-ba-ba-dance-template. The trend write-up is ${EN_TREND}. The steps are ${EN_HOWTO}. Add the trend sound on the platform and label the post as AI.`,
      ],
      zh: [
        '这个格式在 2026 年 10 月通过学校版本定型：两个学生在图书馆并排，轮流独舞，然后同步收尾。在 ViralReel，图书馆原版就是那个房间——书架、暖色顶灯、灰色连帽衫配毛线帽，旁边是黑色运动外套。预览卡署名为 @otr.j5。这个账号是图书馆那一版所署名的来源。ViralReel 与 @otr.j5、TikTok，以及主页卡片上出现的其他创作者（@be.llanelson、@thatss_cam3ron、@solely.who、@joliepolyascko、@nylaaa.camm1）均无关联。',
        'ViralReel 不托管原始 TikTok、它的 GIF，或这首歌。模板页上的预览片段是带署名的趋势参考。它们不是你的成片，也不是那条上传的下载。不要上传那条 TikTok 的截图、名人，或未经同意的未成年人。',
        `想让你自己的搭档出现在那个房间里，打开 ${ZH_TEMPLATE} 并选择图书馆原版；如果别的房间更合适，也可以选夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学。${SLOTS_ZH} 六套场景列在 https://www.viralreel.app/zh/ba-ba-ba-dance-template 。趋势说明在 ${ZH_TREND} 。步骤在 ${ZH_HOWTO} 。在平台上加热梗原声，并把帖子标成 AI。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is Library Original the original TikTok?', zh: '图书馆原版就是原始 TikTok 吗？' },
        a: {
          en: 'No. It is a ViralReel take of that library room. The card credits @otr.j5. ViralReel does not reupload the TikTok.',
          zh: '不是。它是 ViralReel 上那个图书馆房间的场景。卡片署名为 @otr.j5。ViralReel 不转载那条 TikTok。',
        },
      },
      {
        q: { en: 'Who started the ba ba ba dance?', zh: 'ba ba ba dance 是谁开始的？' },
        a: {
          en: 'The school-library take on ViralReel credits @otr.j5. The format then spread through other rooms and pairs in October 2026. ViralReel is not those creators and does not host their uploads.',
          zh: 'ViralReel 上的学校图书馆这一版署名为 @otr.j5。之后这个格式在 2026 年 10 月扩散到别的房间和搭档。ViralReel 不是那些创作者，也不托管他们的上传。',
        },
      },
    ],
  },
  {
    keyword: 'ba ba ba tiktok dance',
    slug: 'ba-ba-ba-tiktok-dance',
    title: {
      en: 'Ba Ba Ba TikTok Dance – Join the Trend, Don’t Repost It',
      zh: 'Ba Ba Ba TikTok 舞蹈：加入趋势，而不是搬运',
    },
    description: {
      en: 'ba ba ba tiktok dance: the October 2026 duo on TikTok, carried by the Sing remix. ViralReel does not host those videos. Make a new 9:16 MP4 from two photos and add the trend sound in the app. Not affiliated with TikTok.',
      zh: 'ba ba ba tiktok dance：2026 年 10 月 TikTok 上的双人舞，配乐是《欢乐好声音》混音。ViralReel 不托管那些视频。用两张照片做一条新的 9:16 MP4，再在 App 里加热梗原声。与 TikTok 无关。',
    },
    h1: { en: 'Ba Ba Ba TikTok dance', zh: 'Ba Ba Ba TikTok 舞蹈' },
    lead: {
      en: 'The ba ba ba TikTok dance is the duo people post with the trend sound. ViralReel does not host those TikToks. It makes a new clip you can post yourself.',
      zh: 'ba ba ba TikTok 舞蹈是大家配着热梗原声发布的双人舞。ViralReel 不托管那些 TikTok。它做一条你可以自己发布的新片子。',
    },
    guideTitle: {
      en: 'The TikTok dance, and the post you can make',
      zh: '这段 TikTok 舞蹈，以及你能发的帖子',
    },
    body: {
      en: [
        'Ba ba ba tiktok dance is the same October 2026 wave with the words in a different order. Two dancers, a solo stretch each, a sync finish, and the ba-ba-ba hook from the "Don\'t You Worry \'Bout a Thing" remix (Tori Kelly\'s Meena version from Sing). Posts ride the trend sound. Common tags include #bababadance. The longer “where it came from” page, with “dance” before “TikTok,” is https://www.viralreel.app/ba-ba-ba-dance-tiktok. The meme landing is https://www.viralreel.app/ba-ba-ba-dance-meme.',
        `ViralReel (viralreel.app) is not TikTok and is not affiliated with the original creators. It does not reupload their videos. Make a new one at ${EN_TEMPLATE}. ${SLOTS_EN} Library Original credits @otr.j5. By late October 2026 the sound had been used in hundreds of thousands of videos — that count is about the platform trend, not a ViralReel catalog.`,
        `Download the MP4, add the official trend sound inside TikTok, and turn on the AI-generated label. The song is not included: https://www.viralreel.app/ba-ba-ba-dance-song. Steps: ${EN_HOWTO}. The trend explainer: ${EN_TREND}. The duo-format page is https://www.viralreel.app/ba-ba-ba-duo-dance.`,
      ],
      zh: [
        'Ba ba ba tiktok dance 是同一波 2026 年 10 月的趋势，只是词序不同。两位舞者、各一段独舞、同步收尾，以及《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）里的 ba ba ba 副歌。帖子靠热梗原声获得分发。常见标签包括 #bababadance。更长的“从哪来”页面——“dance”写在“TikTok”前面——是 https://www.viralreel.app/zh/ba-ba-ba-dance-tiktok 。梗的落地页是 https://www.viralreel.app/zh/ba-ba-ba-dance-meme 。',
        `ViralReel（viralreel.app）不是 TikTok，也与原作者无关。它不转载他们的视频。在 ${ZH_TEMPLATE} 做一条新的。${SLOTS_ZH} 图书馆原版署名为 @otr.j5。到 2026 年 10 月下旬，这段声音已被用在数十万条视频里——这个数量说的是平台趋势，不是 ViralReel 的目录。`,
        `下载 MP4，在 TikTok 里加上官方热梗原声，并打开 AI 生成标注。歌曲不包含在成片里：https://www.viralreel.app/zh/ba-ba-ba-dance-song 。步骤：${ZH_HOWTO} 。趋势说明：${ZH_TREND} 。双人格式页是 https://www.viralreel.app/zh/ba-ba-ba-duo-dance 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the ba ba ba TikTok dance here?', zh: '能在这里下载 ba ba ba TikTok 舞蹈吗？' },
        a: {
          en: 'No. ViralReel does not host or sell those TikToks. You download a new MP4 made from your photos, then post it yourself with the trend sound.',
          zh: '不能。ViralReel 不托管也不出售那些 TikTok。你下载的是用你的照片做成的新 MP4，然后自己配上热梗原声发布。',
        },
      },
      {
        q: { en: 'How is this different from the other TikTok page?', zh: '这和另一个 TikTok 页面有什么不同？' },
        a: {
          en: 'Same trend. https://www.viralreel.app/ba-ba-ba-dance-tiktok explains where it came from. This page is the “ba ba ba tiktok dance” word order, aimed at people who want to join the dance rather than read the history first.',
          zh: '同一条趋势。https://www.viralreel.app/zh/ba-ba-ba-dance-tiktok 讲它从哪来。这一页是“ba ba ba tiktok dance”这个词序，给想先加入舞蹈、而不是先读来历的人。',
        },
      },
    ],
  },
];

export function getBabaLongTail(slug: string) {
  return BABA_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveBabaLongTailSteps(entry: LongTailEntry): readonly BabaHowToStep[] {
  return entry.steps === 'shared' ? BABA_HOW_TO_STEPS : entry.steps;
}

export function buildBabaLongTailFaq(
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
          `在 ViralReel 制作：${template} 。上传你有权使用的照片，生成一条粉丝向作品，下载 MP4。ViralReel 不授权这首歌，也不授权创作者的音频。`,
        ],
        [
          '更长的说明在哪？',
          `逐步教程在 ${ZH_HOWTO} 。趋势说明，包括图书馆原版来源 @otr.j5，在 ${ZH_TREND} 。`,
        ],
        [
          '照片位怎么排？',
          '两个位置，按钮写的是左舞者、右舞者。左边的照片对应画面左边的舞者，右边的对应右边。正脸全身照跟编舞效果最好。不要用未经同意的未成年人照片、名人照片或原始 TikTok 截图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是 TikTok 或原作者的官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 TikTok、歌曲版权方或原作者没有隶属、官方或合作关系。这是粉丝向作品。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload photos you have permission to use, generate a new clip, and download the MP4. ViralReel does not license the song or the creators' audio.`,
        ],
        [
          'Where are the longer guides?',
          `The step-by-step is ${EN_HOWTO}. The trend explainer, including the @otr.j5 library origin, is ${EN_TREND}.`,
        ],
        [
          'How are the photo slots labeled?',
          'Two slots, labeled Left Dancer and Right Dancer. The left photo becomes the dancer on the left of the frame. Full-body, front-facing photos track the choreography best. Do not use unconsented minors, celebrities, or screenshots of the original TikTok.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this a TikTok or official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with TikTok, the song\'s rights holders, or the original creators. This is a fan-made tool.',
        ],
      ];
  return [...own, ...shared];
}

export interface BabaLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function babaLinkGroups(zh: boolean): BabaLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: BABA_TEMPLATE_PATH, label: zh ? 'Ba Ba Ba Dance 模板' : 'Ba Ba Ba Dance template' },
        { href: '/ba-ba-ba-dance-ai', label: 'Ba Ba Ba Dance AI' },
        { href: '/ba-ba-ba-dance-ai-video', label: zh ? 'Ba Ba Ba Dance AI 视频' : 'Ba Ba Ba Dance AI video' },
        { href: '/ba-ba-ba-dance-template', label: zh ? '六套场景' : 'The six takes' },
        { href: '/ba-ba-ba-dance-generator', label: zh ? '生成器' : 'Generator' },
        { href: '/ba-ba-ba-dance-ai-generator', label: zh ? 'AI 生成器' : 'AI generator' },
        { href: '/make-ba-ba-ba-dance-ai', label: zh ? '制作步骤' : 'Make one' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '趋势和格式' : 'Trend and format',
      links: [
        { href: '/ba-ba-ba-dance-tiktok', label: zh ? 'TikTok 趋势详解' : 'TikTok trend explained' },
        { href: '/ba-ba-ba-tiktok-dance', label: zh ? 'Ba Ba Ba TikTok 舞蹈' : 'Ba Ba Ba TikTok dance' },
        { href: '/ba-ba-ba-duo-dance', label: zh ? '双人舞格式' : 'Duo dance format' },
        { href: '/ba-ba-ba-dance-meme', label: zh ? '这个梗' : 'The meme' },
        { href: '/ba-ba-ba-dance-original', label: zh ? '图书馆原版来源' : 'Library original' },
        { href: '/ba-ba-ba-dance-song', label: zh ? '这首歌（不提供下载）' : 'The song (no download)' },
        { href: '/ba-ba-ba-dance-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: '/ba-ba-ba-dance-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
        { href: BABA_POSTS.howTo, label: zh ? '如何制作 Ba Ba Ba Dance AI 视频' : 'How to make a Ba Ba Ba Dance AI video' },
        { href: BABA_POSTS.trend, label: zh ? 'Ba Ba Ba Dance 趋势说明' : 'Ba Ba Ba Dance trend' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding 模板' : 'Tiny Desk Outstanding template' },
      ],
    },
    {
      title: zh ? '其他系列' : 'Other series',
      links: [
        { href: '/window-peeper-ai-template', label: 'Window Peeper' },
        { href: '/pedra-do-sal-ai-template', label: 'Pedra do Sal' },
        { href: '/hit-the-road-dude-ai-template', label: 'Hit the Road Dude' },
        { href: '/hotel-lobby-ai-template', label: 'Hotel Lobby' },
        { href: '/burning-bridges-ai-template', label: 'Burning Bridges' },
        { href: '/bulin-47-ai-template', label: 'Bulin 47' },
        { href: '/ozil-ai-goal-template', label: 'Ozil Goal' },
        { href: '/cat-clapping-ai-template', label: 'Cat Clapping' },
        { href: '/blog', label: zh ? '博客' : 'Blog' },
      ],
    },
  ];
}

export const BABA_LONG_TAIL_ROUTES = BABA_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
