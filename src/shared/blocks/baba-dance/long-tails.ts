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
        'The download is an MP4 of a new scene. ViralReel does not license the song or the creators\' audio. Add the trend sound inside TikTok, Reels, or Shorts and turn on the AI label. No app to install, no CapCut project to hunt down, no prompt to write.',
      ],
      zh: [
        '搜 ba ba ba dance ai 要的是 2026 年 10 月 TikTok 双人格式的新版本：两位舞者并排站在镜头前，各跳一段独舞，同步收尾，配乐是《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）。ViralReel 不托管原始 TikTok，也不托管这首歌。',
        `在 ${ZH_TEMPLATE} 制作你自己的版本。六套场景任选——图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学。${SLOTS_ZH} 画幅保持 9:16，生成前看清积分。`,
        '下载的是一条新场景的 MP4。ViralReel 不授权这首歌，也不授权创作者的音频。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。不用装 App，不用找 CapCut 工程，也不用写提示词。',
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
        'The download is an MP4 of a new scene. ViralReel does not license the song or the creators\' audio. Add the trend sound inside TikTok, Reels, or Shorts, and label the post as AI-generated. Failed renders are credited back automatically.',
      ],
      zh: [
        '搜 ba ba ba dance ai video 要的是那个文件：两位舞者并排、各跳一段独舞、同步收尾，底下垫着《欢乐好声音》混音版的 ba ba ba 副歌。大家说的片子复刻的是 2026 年 10 月的 TikTok 格式——ViralReel 不托管那些原片。',
        `在 ${ZH_TEMPLATE} 制作新片子。图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学任选。${SLOTS_ZH} 正脸全身照比大头照更能跟住编舞。画幅保持 9:16，生成前看清积分。`,
        '下载的是一条新场景的 MP4。ViralReel 不授权这首歌，也不授权创作者的音频。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。生成失败会自动退积分。',
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
        `Open ${EN_TEMPLATE}, click the take closest to your crew, and upload one full-body photo per dancer. ${SLOTS_EN} ViralReel does not license the song — add the trend sound in TikTok, Reels, or Shorts and label the post as AI.`,
      ],
      zh: [
        'ViralReel 上的每套 ba ba ba dance 模板都保留让这个趋势一眼能读懂的结构：两位舞者并排站在镜头前，各跳一段独舞、另一人围观起哄，最后跟着《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）同步收尾。变的只有场景和阵容。',
        '六套场景：图书馆原版复刻让这个格式出圈的学校图书馆版；夜间停车场搬到路灯下的停车场；楼梯轮舞是两个朋友在清水混凝土楼梯间轮流独舞；爸爸和女儿是客厅家庭版；教室学员在课桌间配了一身黑色 T 恤和一身学员制服；姐弟教学则是家里的木饰面走廊。',
        `打开 ${ZH_TEMPLATE} ，点击和你的团体最像的场景，每位舞者上传一张全身照。${SLOTS_ZH} ViralReel 不授权这首歌——请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。`,
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
        `To join it without learning the choreography, make an AI version on ViralReel at ${EN_TEMPLATE}. ${SLOTS_EN} Download the MP4, add the ba ba ba trend sound inside TikTok, and turn on the AI-generated label. ViralReel (viralreel.app) is an independent template site and is not affiliated with TikTok or the original creators.`,
      ],
      zh: [
        '这个趋势 2026 年 10 月初在 TikTok 上爆开，并在学校版本里定型：两个学生在图书馆、楼梯间或教室并排站立，轮流跳同一段舞的独舞部分，最后同步收尾。几周内扩散到父女、姐弟、同事和朋友组合——结构没变，变的是场景和搭档。到 10 月下旬，这段声音已被用在数十万条视频里。',
        '歌是梗名成立的原因。趋势原声是《Don\'t You Worry \'Bout a Thing》的混音版，Tori Kelly 在 2016 年动画电影《欢乐好声音》里为角色 Meena 演唱——原曲出自 Stevie Wonder。混音版得到 Tori Kelly 本人认可后爆火，舞者们对着镜头口型的那段哼唱就是「ba ba ba」这个名字的出处。有人搜「欢乐好声音 ba ba ba 舞蹈」——是同一首。',
        `不想学编舞也可以加入：在 ViralReel 用 AI 做——${ZH_TEMPLATE} 。${SLOTS_ZH} 下载 MP4，在 TikTok 里加上 ba ba ba 热梗原声，并打开 AI 生成标注。ViralReel（viralreel.app）是独立的模板站，与 TikTok 及原作者无关。`,
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
        'For three or four people, keep the duo structure and let your extras join physically in one of the photos — the group-crowd versions of the trend work the same way. Download the MP4, add the trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated.',
      ],
      zh: [
        '这个格式一秒就能读懂，所以传得快：两位舞者并排站在镜头前，一人跳、另一人围观起哄，然后互换，最后跟着《Don\'t You Worry \'Bout a Thing》混音（《欢乐好声音》里 Tori Kelly 的 Meena 版）同步收尾。笑点和看点都在「搭档」上——闺蜜、父女、姐弟、同学。',
        `在 ViralReel，整个格式被复刻成双人模板：${ZH_TEMPLATE} 。${SLOTS_ZH} 按你们的关系选场景——同学选图书馆原版，家人选爸爸和女儿，朋友选楼梯轮舞或夜间停车场，姐弟选姐弟教学，制服团队选教室学员。`,
        '想三四个人一起：保留双人结构，让其他人在其中一张照片里同框入镜——趋势里的群像版就是这个玩法。下载 MP4，在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 生成标注。',
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
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '趋势和格式' : 'Trend and format',
      links: [
        { href: '/ba-ba-ba-dance-tiktok', label: zh ? 'TikTok 趋势详解' : 'TikTok trend explained' },
        { href: '/ba-ba-ba-duo-dance', label: zh ? '双人舞格式' : 'Duo dance format' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding 模板' : 'Tiny Desk Outstanding template' },
        { href: '/window-peeper-ai-template', label: 'Window Peeper' },
        { href: '/pedra-do-sal-ai-template', label: 'Pedra do Sal' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
        { href: '/hit-the-road-dude-ai-template', label: 'Hit the Road Dude' },
      ],
    },
    {
      title: zh ? '其他系列' : 'Other series',
      links: [
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
