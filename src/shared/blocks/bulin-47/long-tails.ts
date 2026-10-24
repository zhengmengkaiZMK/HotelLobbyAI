import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { BULIN_HOW_TO_STEPS, type BulinHowToStep } from './steps';

/**
 * Long-tail landings for the Bulin 47 template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * BULIN_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `bulin-47-ai-template` slug.
 */

export const BULIN_TEMPLATE_PATH = '/bulin-47-ai-template';

export const BULIN_POSTS = {
  howTo: '/blog/how-to-make-bulin-47-ai-video',
} as const;

const BULIN_PRODUCT = { en: 'Bulin 47', zh: 'Bulin 47' };

type Copy = { en: string; zh: string };

export interface LongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface LongTailEntry {
  /** Exact search phrase, lowercase, used in meta description and keywords. */
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  /** `'shared'` reuses the template HowTo. Custom steps must stay honest about what ViralReel does not make. */
  steps: 'shared' | readonly BulinHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

function absoluteUrl(zh: boolean, path: string) {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

export const BULIN_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'bulin 47 ai video',
    slug: 'bulin-47-ai-video',
    title: {
      en: 'Bulin 47 AI Video – Make It on ViralReel',
      zh: 'Bulin 47 AI 视频：在 ViralReel 用一张照片制作',
    },
    description: {
      en: 'bulin 47 ai video: ViralReel turns one photo into a fictional red-light street freestyle. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.',
      zh: 'bulin 47 ai video：ViralReel 用一张照片做成虚构的红光街头 freestyle。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
    },
    h1: { en: 'Bulin 47 AI video', zh: 'Bulin 47 AI 视频' },
    lead: {
      en: 'A Bulin 47 AI video on ViralReel is a new clip from one photo: red light, a speaker, a crowd, and you in the freestyle spot. It is not the Madrid original.',
      zh: 'ViralReel 上的 Bulin 47 AI 视频是用一张照片做的新短片：红光、音箱、人群，以及站在 freestyle 位置的你。这不是马德里原片。',
    },
    guideTitle: {
      en: 'How to make a Bulin 47 AI video',
      zh: '如何制作 Bulin 47 AI 视频',
    },
    body: {
      en: [
        'A bulin 47 ai video is an AI remake of the October 2026 Madrid street freestyle, not a download of that TikTok. The recognizable frame is a red-lit restaurant entrance, a portable speaker, phones in the crowd, and one person freestyling in the middle.',
        'On ViralReel you do not write that scene as a prompt. Open https://www.viralreel.app/bulin-47-ai-template, upload one photo you have permission to use, and generate a new 9:16 clip. Street Freestyle, Suit Edition, Leopard Print, Night Crowd, Sharp Vest, and Pet Freestyle are six looks of the same beat.',
        'Dame Hombro is the song Bulin 47 and Kevin Wai released after the clip. The template remakes the street freestyle, not that music video. After you download the MP4, add the trend sound inside TikTok, Reels, or Shorts. ViralReel does not license that audio.',
      ],
      zh: [
        'bulin 47 ai video 是 2026 年 10 月马德里街头 freestyle 的 AI 重拍，不是那条 TikTok 的下载。能认出来的画面是红光餐厅门口、便携音箱、人群里的手机，以及中间即兴 freestyle 的人。',
        '在 ViralReel 你不用把这个场景写成提示词。打开 https://www.viralreel.app/zh/bulin-47-ai-template ，上传一张你有权使用的照片，生成一条新的 9:16 短片。街头原版、西装、豹纹、夜场人群、马甲绅士和宠物说唱是同一节奏的六种造型。',
        'Dame Hombro 是这条片子爆火之后 Bulin 47 和 Kevin Wai 发布的歌曲。模板重拍的是街头 freestyle，不是那支 MV。下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上热梗原声。ViralReel 不授权这段音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'What is a Bulin 47 AI video?',
          zh: 'Bulin 47 AI 视频是什么？',
        },
        a: {
          en: 'It is a fictional vertical remake of the Madrid street freestyle, made on ViralReel from one photo. It is not a copy of the original TikTok and not the Dame Hombro music video.',
          zh: '它是马德里街头 freestyle 的虚构竖屏重拍，在 ViralReel 用一张照片做成。不是原始 TikTok 的拷贝，也不是 Dame Hombro 的 MV。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The Bulin 47 template already sets the red entrance, the speaker, the crowd, and the handheld camera. You upload one photo and generate.',
          zh: '不需要。Bulin 47 模板已经定好了红光门口、音箱、人群和手持镜头。你上传一张照片然后生成。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 ai',
    slug: 'bulin-47-ai',
    title: {
      en: 'Bulin 47 AI – One-Photo Template on ViralReel',
      zh: 'Bulin 47 AI：ViralReel 的单张照片模板',
    },
    description: {
      en: 'bulin 47 ai on ViralReel is a template, not a blank prompt. One photo becomes a fictional street freestyle. It is not an official Bulin 47 AI.',
      zh: 'ViralReel 上的 bulin 47 ai 是模板，不是空白提示词。一张照片变成虚构的街头 freestyle。它不是 Bulin 47 的官方 AI。',
    },
    h1: { en: 'Bulin 47 AI', zh: 'Bulin 47 AI' },
    lead: {
      en: 'Bulin 47 AI on ViralReel is a template that puts one photo into the street freestyle. It is not a blank prompt tool and not an official product.',
      zh: 'ViralReel 上的 Bulin 47 AI 是把一张照片放进街头 freestyle 的模板。它不是空白提示词工具，也不是官方产品。',
    },
    guideTitle: {
      en: 'What Bulin 47 AI means on ViralReel',
      zh: '在 ViralReel 上，Bulin 47 AI 指什么',
    },
    body: {
      en: [
        'A bulin 47 ai search usually wants the person in the middle swapped for a new face. A sentence such as “a man rapping outside a red restaurant” invents a new shot. The ViralReel template keeps this format: red entrance, speaker, crowd, handheld camera.',
        'Make it at https://www.viralreel.app/bulin-47-ai-template. One photo, 9:16, then the MP4. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Bulin 47 or Kevin Wai, and it does not license the trend audio.',
      ],
      zh: [
        '搜 bulin 47 ai 通常是想把中间的人换成一张新脸。只写一句「红光餐厅外有人在说唱」，模型会另拍一条新片子。ViralReel 的模板留住这个格式：红光门口、音箱、人群、手持镜头。',
        '在 https://www.viralreel.app/zh/bulin-47-ai-template 制作。一张照片、9:16，然后是 MP4。ViralReel（viralreel.app）是独立的 AI 视频模板站。它与 Bulin 47 或 Kevin Wai 没有关系，也不授权热梗音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'Is Bulin 47 AI a prompt I have to write?',
          zh: 'Bulin 47 AI 是要我自己写的提示词吗？',
        },
        a: {
          en: 'Not on ViralReel. The scene is already in the template. You upload one photo and generate at https://www.viralreel.app/bulin-47-ai-template.',
          zh: '在 ViralReel 上不是。场景已经在模板里。你在 https://www.viralreel.app/zh/bulin-47-ai-template 上传一张照片然后生成。',
        },
      },
      {
        q: {
          en: 'Is this the official Bulin 47 AI?',
          zh: '这是官方的 Bulin 47 AI 吗？',
        },
        a: {
          en: 'No. ViralReel is an independent template site. The clip is a fictional remake from a photo you have permission to use.',
          zh: '不是。ViralReel 是独立的模板站。片子是用一张你有权使用的照片做的虚构重拍。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 meme',
    slug: 'bulin-47-meme',
    title: {
      en: 'Bulin 47 Meme – Street Freestyle AI Remake',
      zh: 'Bulin 47 Meme：街头 freestyle 的 AI 重拍',
    },
    description: {
      en: 'bulin 47 meme: the Madrid red-light freestyle people are remaking. ViralReel makes a fictional AI version from one photo. It is not the official meme page.',
      zh: 'bulin 47 meme：大家正在重拍的马德里红光 freestyle。ViralReel 用一张照片做虚构 AI 版本。这不是官方梗页面。',
    },
    h1: { en: 'Bulin 47 meme', zh: 'Bulin 47 meme' },
    lead: {
      en: 'The Bulin 47 meme is the unplanned Madrid street freestyle. ViralReel lets you remake that frame from one photo. It is not an official meme archive.',
      zh: 'Bulin 47 梗是那段没有排练的马德里街头 freestyle。ViralReel 让你用一张照片重拍这个画面。它不是官方梗档案。',
    },
    guideTitle: {
      en: 'What the meme is, and how the remake works',
      zh: '这个梗是什么，重拍怎么做',
    },
    body: {
      en: [
        'The bulin 47 meme is a street freestyle filmed outside a restaurant in Madrid on 2 October 2026. Creator Kevin Wai walked up to Dominican dembow artist Bulin 47 (Hancel Teodoro Vargas Reynoso) with a portable speaker. Bulin stopped and freestyled. Phones came up in the crowd. Reports put the clip above 50 million views within days.',
        'AI remakes keep the red light, the speaker, and the crowd, and change the person in the middle. That is what https://www.viralreel.app/bulin-47-ai-template does from one photo. It does not host the original file and it is not affiliated with the people in it.',
      ],
      zh: [
        'bulin 47 meme 是 2026 年 10 月 2 日在马德里一家餐厅门口拍下的街头 freestyle。创作者 Kevin Wai 扛着便携音箱走到多米尼加 dembow 艺人 Bulin 47（Hancel Teodoro Vargas Reynoso）面前。Bulin 停下来接了一段，人群里的手机举了起来。几天内播放量据报道超过 5000 万。',
        'AI 重拍留住红光、音箱和人群，只换中间的人。https://www.viralreel.app/zh/bulin-47-ai-template 用一张照片做的就是这个。它不托管原片，也与片中的人没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'What happens in the Bulin 47 meme?',
          zh: 'Bulin 47 梗里发生了什么？',
        },
        a: {
          en: 'Kevin Wai brings a speaker to Bulin 47 outside a Madrid restaurant. Bulin freestyles instead of walking inside, and the crowd films it under red light.',
          zh: 'Kevin Wai 在马德里餐厅门口把音箱递给 Bulin 47。Bulin 没有走进去，而是当场 freestyle，人群在红光下拍了下来。',
        },
      },
      {
        q: {
          en: 'Can I remake the meme with my photo?',
          zh: '能用我的照片重拍这个梗吗？',
        },
        a: {
          en: 'Yes, on the ViralReel template, from one photo you have permission to use. The result is a fictional AI clip. Label it as AI when you post.',
          zh: '可以，在 ViralReel 模板里，用一张你有权使用的照片。结果是虚构的 AI 短片。发布时按要求标注 AI。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 dance',
    slug: 'bulin-47-dance',
    title: {
      en: 'Bulin 47 Dance – The Freestyle Move, Made from a Photo',
      zh: 'Bulin 47 Dance：用一张照片做这段 freestyle 动作',
    },
    description: {
      en: 'bulin 47 dance on ViralReel means the street-freestyle shoulder move, staged from one photo. It is not a dance class and not a download of the original clip.',
      zh: 'ViralReel 上的 bulin 47 dance 指用一张照片搭出来的街头 freestyle 耸肩动作。它不是舞蹈课，也不是原片下载。',
    },
    h1: { en: 'Bulin 47 dance', zh: 'Bulin 47 dance' },
    lead: {
      en: 'The Bulin 47 “dance” people search for is the shoulder bounce inside the street freestyle. ViralReel stages that format from one photo. It does not teach a separate routine.',
      zh: '大家搜的 Bulin 47 “dance” 是街头 freestyle 里的那个耸肩。ViralReel 用一张照片搭这个格式。它不单独教一支舞。',
    },
    guideTitle: {
      en: 'Dance search, freestyle format',
      zh: '搜的是舞，做的是 freestyle 格式',
    },
    body: {
      en: [
        'There is no separate Bulin 47 dance tutorial on ViralReel. The move people mean is the confident shoulder bounce in the Madrid freestyle: speaker on a shoulder, red light, crowd filming, one person in the middle.',
        'The template at https://www.viralreel.app/bulin-47-ai-template keeps that frame and puts your photo in the middle. It is a fictional remake, not a choreography file and not the Dame Hombro music video. Add any trend sound on TikTok, Reels, or Shorts. ViralReel does not license it.',
      ],
      zh: [
        'ViralReel 上没有单独的 Bulin 47 舞蹈教程。大家说的动作是马德里 freestyle 里那个自信的耸肩：肩上音箱、红光、人群在拍、中间一个人。',
        'https://www.viralreel.app/zh/bulin-47-ai-template 的模板留住这个画面，把你的照片放在中间。它是虚构重拍，不是编舞文件，也不是 Dame Hombro 的 MV。热梗原声在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权它。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'Is there a Bulin 47 dance to download?',
          zh: '有一支可下载的 Bulin 47 舞蹈吗？',
        },
        a: {
          en: 'Not here. ViralReel makes an AI video of the street-freestyle format from one photo. It does not export a dance tutorial or the original clip.',
          zh: '这里没有。ViralReel 用一张照片做街头 freestyle 格式的 AI 视频。它不导出舞蹈教程，也不导出原片。',
        },
      },
      {
        q: { en: 'Which template is the dance?', zh: '舞蹈用哪个模板？' },
        a: {
          en: 'The Bulin 47 template. Street Freestyle is the closest everyday look. The other five looks keep the same speaker, crowd, and red light.',
          zh: '用 Bulin 47 模板。街头原版最接近日常造型。另外五个造型留着同一只音箱、同一群人和同一盏红光。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 freestyle',
    slug: 'bulin-47-freestyle',
    title: {
      en: 'Bulin 47 Freestyle – AI Remake from One Photo',
      zh: 'Bulin 47 Freestyle：一张照片的 AI 重拍',
    },
    description: {
      en: 'bulin 47 freestyle: ViralReel puts one photo into the Madrid street-freestyle frame. Red light, speaker, crowd. Not the original clip and not Dame Hombro.',
      zh: 'bulin 47 freestyle：ViralReel 把一张照片放进马德里街头 freestyle 的画面。红光、音箱、人群。不是原片，也不是 Dame Hombro。',
    },
    h1: { en: 'Bulin 47 freestyle', zh: 'Bulin 47 freestyle' },
    lead: {
      en: 'The Bulin 47 freestyle is the street clip, not the later song. ViralReel remakes that street frame from one photo.',
      zh: 'Bulin 47 freestyle 是那段街头片子，不是后来的歌。ViralReel 用一张照片重拍这个街头画面。',
    },
    guideTitle: {
      en: 'How to make the freestyle from one photo',
      zh: '如何用一张照片做这段 freestyle',
    },
    body: {
      en: [
        'The bulin 47 freestyle is the unplanned street performance Kevin Wai filmed on 2 October 2026. Bulin 47 answers a dembow beat from a portable speaker instead of walking into the restaurant. That is the format: one person, one speaker, a filming crowd.',
        'Open https://www.viralreel.app/bulin-47-ai-template, upload one photo, and generate. The six looks are the same freestyle with a different cast. Dame Hombro, the song released afterward, is a different video. ViralReel does not host either original file.',
      ],
      zh: [
        'bulin 47 freestyle 是 Kevin Wai 在 2026 年 10 月 2 日拍下的即兴街头表演。Bulin 47 顺着便携音箱里的 dembow 节奏接了一段，没有走进餐厅。格式就是：一个人、一只音箱、一群在拍的人。',
        '打开 https://www.viralreel.app/zh/bulin-47-ai-template ，上传一张照片，然后生成。六种造型是同一段 freestyle，换的是中间的人。随后发布的歌曲 Dame Hombro 是另一条视频。ViralReel 不托管这两条原片。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'Is the freestyle the same as Dame Hombro?',
          zh: '这段 freestyle 和 Dame Hombro 是同一条吗？',
        },
        a: {
          en: 'No. The freestyle is the street clip. Dame Hombro is the song and its official video, released after the street clip went viral. The template follows the street format.',
          zh: '不是。freestyle 是街头原片。Dame Hombro 是街头片子爆火之后发布的歌曲和它的官方 MV。模板按街头格式来做。',
        },
      },
      {
        q: {
          en: 'How many photos does the freestyle need?',
          zh: '这段 freestyle 需要几张照片？',
        },
        a: {
          en: 'One. Pet Freestyle uses one photo of the animal. Do not use a minor, a celebrity, or a stranger from the original clip.',
          zh: '一张。宠物说唱用一张动物的照片。不要用未成年人、名人，或原片里的陌生人。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 original',
    slug: 'bulin-47-original',
    title: {
      en: 'Bulin 47 Original – ViralReel Does Not Host It',
      zh: 'Bulin 47 Original：ViralReel 不托管原片',
    },
    description: {
      en: 'bulin 47 original is the Madrid street clip Kevin Wai filmed on 2 October 2026. ViralReel does not host that file. It makes a fictional AI remake from one photo.',
      zh: 'bulin 47 original 是 Kevin Wai 在 2026 年 10 月 2 日拍下的马德里街头原片。ViralReel 不托管那个文件。它用一张照片做虚构 AI 重拍。',
    },
    h1: { en: 'Bulin 47 original', zh: 'Bulin 47 original' },
    lead: {
      en: 'ViralReel does not host the original Bulin 47 clip. It makes a fictional remake of the street format from one photo.',
      zh: 'ViralReel 不托管 Bulin 47 原片。它用一张照片做街头格式的虚构重拍。',
    },
    guideTitle: {
      en: 'If you searched for the original',
      zh: '如果你搜的是原片',
    },
    body: {
      en: [
        'The bulin 47 original is the street freestyle filmed outside a Madrid restaurant on 2 October 2026 by Kevin Wai. ViralReel does not host that TikTok, a download of it, or the Dame Hombro music video.',
        'If what you wanted next was your own face in that frame, that is the AI remake at https://www.viralreel.app/bulin-47-ai-template. One photo becomes a new fictional clip. It is not footage of Bulin 47 and not an official upload.',
      ],
      zh: [
        'bulin 47 original 是 Kevin Wai 于 2026 年 10 月 2 日在马德里一家餐厅门口拍下的街头 freestyle。ViralReel 不托管那条 TikTok、它的下载，或 Dame Hombro 的 MV。',
        '如果你接下来想要的是自己的脸出现在那个画面里，那是 https://www.viralreel.app/zh/bulin-47-ai-template 上的 AI 重拍。一张照片变成一条新的虚构短片。它不是 Bulin 47 的画面，也不是官方上传。',
      ],
    },
    steps: [
      {
        name: {
          en: 'This site does not host the original',
          zh: '本站不托管原片',
        },
        text: {
          en: 'ViralReel does not store or sell the Madrid TikTok or the Dame Hombro official video.',
          zh: 'ViralReel 不存储也不出售马德里那条 TikTok，或 Dame Hombro 的官方视频。',
        },
      },
      {
        name: {
          en: 'Make the AI remake from one photo',
          zh: '用一张照片做 AI 重拍',
        },
        text: {
          en: 'Open the Bulin 47 template, upload one photo you have permission to use, and generate a fictional street clip.',
          zh: '打开 Bulin 47 模板，上传一张你有权使用的照片，生成一条虚构的街头短片。',
        },
      },
      {
        name: { en: 'Label it as a remake', zh: '按重拍来标注' },
        text: {
          en: 'Add any trend sound on the platform you post to, and turn on the AI label where the app asks. Do not present the result as the original.',
          zh: '在发布的平台上另加热梗原声，并在应用要求时打开 AI 标注。不要把结果发成原片。',
        },
      },
    ],
    faq: [
      {
        q: {
          en: 'Where is the original Bulin 47 video?',
          zh: 'Bulin 47 原片在哪里？',
        },
        a: {
          en: 'Not on ViralReel. The street clip was filmed by Kevin Wai on 2 October 2026. This site only makes a fictional remake from one photo.',
          zh: '不在 ViralReel。街头原片由 Kevin Wai 于 2026 年 10 月 2 日拍摄。本站只用一张照片做虚构重拍。',
        },
      },
      {
        q: { en: 'Can I still make a version?', zh: '还能做自己的版本吗？' },
        a: {
          en: 'Yes. The template at https://www.viralreel.app/bulin-47-ai-template takes one photo and exports an MP4 of a new fictional scene.',
          zh: '可以。https://www.viralreel.app/zh/bulin-47-ai-template 的模板用一张照片，导出一条新虚构场景的 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'dame hombro ai',
    slug: 'dame-hombro-ai',
    title: {
      en: 'Dame Hombro AI – Street Freestyle, Not the Song Video',
      zh: 'Dame Hombro AI：街头 freestyle，不是歌曲 MV',
    },
    description: {
      en: 'dame hombro ai: Dame Hombro is the song, not the street freestyle. ViralReel remakes the Bulin 47 street frame from one photo and does not license the song.',
      zh: 'dame hombro ai：Dame Hombro 是歌曲，不是街头 freestyle。ViralReel 用一张照片重拍 Bulin 47 的街头画面，并且不授权这首歌。',
    },
    h1: { en: 'Dame Hombro AI', zh: 'Dame Hombro AI' },
    lead: {
      en: 'Dame Hombro is the song. The AI video people want is the earlier street freestyle. ViralReel makes that street remake from one photo and does not license the song.',
      zh: 'Dame Hombro 是歌曲。大家想要的 AI 视频是更早的那段街头 freestyle。ViralReel 用一张照片做街头重拍，并且不授权这首歌。',
    },
    guideTitle: {
      en: 'Dame Hombro the song, versus the street freestyle',
      zh: '歌曲 Dame Hombro，和街头 freestyle',
    },
    body: {
      en: [
        'Dame Hombro is the song Bulin 47 and Kevin Wai released after the Madrid street clip went viral. It has its own official music video. A dame hombro ai search usually still wants the street frame: red light, speaker, crowd, one new face in the middle.',
        'ViralReel does not sell, stream, or license Dame Hombro. The template at https://www.viralreel.app/bulin-47-ai-template remakes the street freestyle from one photo. If the post needs that song, add it inside TikTok, Reels, or Shorts under that platform’s music rules.',
      ],
      zh: [
        'Dame Hombro 是马德里街头片子爆火之后，Bulin 47 和 Kevin Wai 发布的歌曲，另外有一支官方 MV。搜 dame hombro ai 的人，通常仍然要的是街头画面：红光、音箱、人群、中间一张新脸。',
        'ViralReel 不出售、不串流、也不授权 Dame Hombro。https://www.viralreel.app/zh/bulin-47-ai-template 的模板用一张照片重拍街头 freestyle。如果帖子需要这首歌，请在 TikTok、Reels 或 Shorts 里按该平台的音乐规则另加。',
      ],
    },
    steps: [
      {
        name: {
          en: 'Separate the song from the street clip',
          zh: '把歌曲和街头片子分开',
        },
        text: {
          en: 'Dame Hombro is the later song and its official video. The freestyle is the 2 October 2026 street clip. ViralReel does not license either file.',
          zh: 'Dame Hombro 是后来的歌曲和它的官方视频。freestyle 是 2026 年 10 月 2 日的街头片子。ViralReel 不授权这两个文件。',
        },
      },
      {
        name: {
          en: 'Make the street remake from one photo',
          zh: '用一张照片做街头重拍',
        },
        text: {
          en: 'Open the Bulin 47 template on ViralReel, upload one photo you have permission to use, and generate the fictional red-light clip.',
          zh: '在 ViralReel 打开 Bulin 47 模板，上传一张你有权使用的照片，生成虚构的红光短片。',
        },
      },
      {
        name: { en: 'Add the song on the platform', zh: '在平台里加这首歌' },
        text: {
          en: 'If you want Dame Hombro on the post, add it inside TikTok, Reels, or Shorts. ViralReel does not license that audio.',
          zh: '如果帖子需要 Dame Hombro，在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: {
          en: 'Is Dame Hombro AI the music video?',
          zh: 'Dame Hombro AI 是那支 MV 吗？',
        },
        a: {
          en: 'No. On ViralReel, a Dame Hombro AI request is answered with the street-freestyle template. The studio music video is a different file, and ViralReel does not host it.',
          zh: '不是。在 ViralReel 上，Dame Hombro AI 会导向街头 freestyle 模板。录音棚 MV 是另一个文件，ViralReel 不托管它。',
        },
      },
      {
        q: {
          en: 'Where do I make the street version?',
          zh: '街头版本在哪里做？',
        },
        a: {
          en: 'At https://www.viralreel.app/bulin-47-ai-template. One photo, a fictional 9:16 clip, then the trend sound on the app you post to.',
          zh: '在 https://www.viralreel.app/zh/bulin-47-ai-template 。一张照片、一条虚构的 9:16 短片，然后在发布的应用里加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 remix',
    slug: 'bulin-47-remix',
    title: {
      en: 'Bulin 47 Remix – AI Remake from One Photo',
      zh: 'Bulin 47 Remix：一张照片的 AI 重拍',
    },
    description: {
      en: 'bulin 47 remix on ViralReel means an AI remake video from one photo, not a music remix and not an edit of the original file. ViralReel does not license Dame Hombro.',
      zh: 'ViralReel 上的 bulin 47 remix 指用一张照片做的 AI 重拍视频，不是音乐混音，也不是原片剪辑。ViralReel 不授权 Dame Hombro。',
    },
    h1: { en: 'Bulin 47 remix', zh: 'Bulin 47 remix' },
    lead: {
      en: 'A Bulin 47 remix on ViralReel is an AI remake from one photo. It is not a music remix of Dame Hombro and not a recut of the original file.',
      zh: 'ViralReel 上的 Bulin 47 remix 是用一张照片做的 AI 重拍。它不是 Dame Hombro 的音乐混音，也不是原片的重新剪辑。',
    },
    guideTitle: {
      en: 'Remix means a new AI clip, not a new track',
      zh: '这里的 remix 是新的 AI 短片，不是新歌',
    },
    body: {
      en: [
        'Searchers for a bulin 47 remix sometimes want a music edit of Dame Hombro, and sometimes want the street freestyle with a different person in the middle. ViralReel only does the second, and only as a new generation.',
        'That is not a remix of the original video file and not a remix of the song. Open https://www.viralreel.app/bulin-47-ai-template. If the post needs the sound, add it inside TikTok, Reels, or Shorts. ViralReel does not license it.',
      ],
      zh: [
        '搜 bulin 47 remix 的人，有的想要 Dame Hombro 的音乐改编，有的想要中间换成另一个人的街头 freestyle。ViralReel 只做第二种，而且是重新生成。',
        '这不是原视频文件的混剪，也不是歌曲的混音。打开 https://www.viralreel.app/zh/bulin-47-ai-template 。如果帖子需要那段声音，请在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权它。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: {
          en: 'Is a Bulin 47 remix a music remix?',
          zh: 'Bulin 47 remix 是音乐混音吗？',
        },
        a: {
          en: 'Not on ViralReel. The remix you can make here is an AI video from one photo. ViralReel does not license or remix Dame Hombro.',
          zh: '在 ViralReel 上不是。你在这里能做的 remix 是用一张照片生成的 AI 视频。ViralReel 不授权也不混音 Dame Hombro。',
        },
      },
      {
        q: {
          en: 'Do you edit the original file?',
          zh: '你们会剪辑原片文件吗？',
        },
        a: {
          en: 'No. The generator creates a new fictional clip from your photo. It does not recut the Madrid TikTok.',
          zh: '不会。生成器用你的照片做一条新的虚构短片。它不重新剪辑马德里那条 TikTok。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 tiktok',
    slug: 'bulin-47-tiktok',
    title: {
      en: 'Bulin 47 TikTok – Make the Clip, Post It There',
      zh: 'Bulin 47 TikTok：在这里做片，发到 TikTok',
    },
    description: {
      en: 'bulin 47 tiktok: ViralReel is not TikTok and does not host the original. It makes a 9:16 AI remake from one photo that you can post on TikTok with the trend sound.',
      zh: 'bulin 47 tiktok：ViralReel 不是 TikTok，也不托管原片。它用一张照片做 9:16 的 AI 重拍，你可以配上热梗原声发到 TikTok。',
    },
    h1: { en: 'Bulin 47 TikTok', zh: 'Bulin 47 TikTok' },
    lead: {
      en: 'ViralReel is not TikTok. It makes the 9:16 Bulin 47 remake from one photo so you can post that MP4 on TikTok yourself.',
      zh: 'ViralReel 不是 TikTok。它用一张照片做 9:16 的 Bulin 47 重拍，方便你自己把 MP4 发到 TikTok。',
    },
    guideTitle: {
      en: 'What to do with a Bulin 47 TikTok search',
      zh: '搜到 Bulin 47 TikTok 时该做什么',
    },
    body: {
      en: [
        'A bulin 47 tiktok search often wants the original upload or a way to post a version. ViralReel does not host the original TikTok and does not post to your account.',
        'Make the clip at https://www.viralreel.app/bulin-47-ai-template. The page opens on 9:16, the ratio TikTok uses. Download the MP4, then in TikTok add the Bulin 47 or Dame Hombro sound from TikTok’s library and turn on the AI label. ViralReel does not license that audio.',
      ],
      zh: [
        '搜 bulin 47 tiktok 常常是想找原片上传，或想知道怎么发一个自己的版本。ViralReel 不托管原始 TikTok，也不会替你发到账号里。',
        '在 https://www.viralreel.app/zh/bulin-47-ai-template 做片。页面默认 9:16，也就是 TikTok 使用的画幅。下载 MP4 之后，在 TikTok 里从曲库加上 Bulin 47 或 Dame Hombro 的声音，并打开 AI 标注。ViralReel 不授权这段音频。',
      ],
    },
    steps: [
      {
        name: {
          en: 'ViralReel is not the TikTok',
          zh: 'ViralReel 不是那条 TikTok',
        },
        text: {
          en: 'This site does not host the original Bulin 47 TikTok and does not log into TikTok for you.',
          zh: '本站不托管原始 Bulin 47 TikTok，也不会替你登录 TikTok。',
        },
      },
      {
        name: {
          en: 'Make a 9:16 MP4 from one photo',
          zh: '用一张照片做 9:16 的 MP4',
        },
        text: {
          en: 'Open the Bulin 47 template, upload one photo you have permission to use, and download the fictional remake.',
          zh: '打开 Bulin 47 模板，上传一张你有权使用的照片，下载虚构重拍。',
        },
      },
      {
        name: { en: 'Post it on TikTok yourself', zh: '自己发到 TikTok' },
        text: {
          en: 'Add the trend sound inside TikTok and turn on the AI-generated label where TikTok asks. ViralReel does not license that audio.',
          zh: '在 TikTok 里加上热梗原声，并在 TikTok 要求时打开 AI 生成标注。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: {
          en: 'Can I download the original Bulin 47 TikTok here?',
          zh: '能在这里下载原始 Bulin 47 TikTok 吗？',
        },
        a: {
          en: 'No. ViralReel makes a new AI video from one photo. The original upload stays on TikTok.',
          zh: '不能。ViralReel 用一张照片做一条新的 AI 视频。原片上传仍在 TikTok 上。',
        },
      },
      {
        q: {
          en: 'What ratio should the TikTok version use?',
          zh: '发 TikTok 用什么画幅？',
        },
        a: {
          en: '9:16. The Bulin 47 template opens on that ratio. Add the trend sound after you upload the MP4 to TikTok.',
          zh: '9:16。Bulin 47 模板默认就是这个画幅。把 MP4 传到 TikTok 之后再加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 song',
    slug: 'bulin-47-song',
    title: {
      en: 'Bulin 47 Song – ViralReel Makes the AI Video',
      zh: 'Bulin 47 Song：ViralReel 做的是 AI 视频',
    },
    description: {
      en: 'bulin 47 song points at Dame Hombro, the track released after the street clip. ViralReel does not sell that song. It makes the street-freestyle AI video from one photo.',
      zh: 'bulin 47 song 指向 Dame Hombro，也就是街头片子之后发布的歌。ViralReel 不出售这首歌。它用一张照片做街头 freestyle 的 AI 视频。',
    },
    h1: { en: 'Bulin 47 song', zh: 'Bulin 47 song' },
    lead: {
      en: 'There is no Bulin 47 song to download here. The track people mean is Dame Hombro. ViralReel makes the street AI video and does not license the song.',
      zh: '这里没有可下载的 Bulin 47 歌曲。大家说的那首歌是 Dame Hombro。ViralReel 做的是街头 AI 视频，并且不授权这首歌。',
    },
    guideTitle: {
      en: 'What to do if you searched for the song',
      zh: '如果你搜的是歌曲',
    },
    body: {
      en: [
        'The song attached to this trend is Dame Hombro, released by Bulin 47 and Kevin Wai after the 2 October 2026 street freestyle. ViralReel does not sell, stream, or license Dame Hombro or any other recording.',
        'If the clip you actually want is the street frame with a new face, that is the AI video at https://www.viralreel.app/bulin-47-ai-template. Any trend audio stays in TikTok, Reels, or Shorts. The difference between the song and the street clip is also on the Dame Hombro AI page.',
      ],
      zh: [
        '这条趋势对应的歌是 Dame Hombro，由 Bulin 47 和 Kevin Wai 在 2026 年 10 月 2 日街头 freestyle 之后发布。ViralReel 不出售、不串流、也不授权 Dame Hombro 或任何其他录音。',
        '如果你真正想要的是中间换成一张新脸的街头画面，那是 https://www.viralreel.app/zh/bulin-47-ai-template 上的 AI 视频。热梗音频留在 TikTok、Reels 或 Shorts 里。歌曲和街头片子的区别也写在 Dame Hombro AI 页面上。',
      ],
    },
    steps: [
      {
        name: { en: 'The song is Dame Hombro', zh: '那首歌是 Dame Hombro' },
        text: {
          en: 'Bulin 47 song searches point at Dame Hombro, the later track. ViralReel does not license it.',
          zh: '搜 Bulin 47 song 指向的是后来的歌 Dame Hombro。ViralReel 不授权它。',
        },
      },
      {
        name: {
          en: 'Make the street video from one photo',
          zh: '用一张照片做街头视频',
        },
        text: {
          en: 'Open the Bulin 47 template, upload one photo you have permission to use, and generate the fictional freestyle.',
          zh: '打开 Bulin 47 模板，上传一张你有权使用的照片，生成虚构的 freestyle。',
        },
      },
      {
        name: { en: 'Add audio on the platform', zh: '在平台里加音频' },
        text: {
          en: 'If you want Dame Hombro on the post, add it inside TikTok, Reels, or Shorts. ViralReel does not provide the file.',
          zh: '如果帖子需要 Dame Hombro，在 TikTok、Reels 或 Shorts 里另加。ViralReel 不提供这个文件。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'What is the Bulin 47 song?', zh: 'Bulin 47 的歌是哪首？' },
        a: {
          en: 'The song released after the street clip is Dame Hombro, by Bulin 47 and Kevin Wai. ViralReel does not sell or license it.',
          zh: '街头片子之后发布的歌是 Dame Hombro，由 Bulin 47 和 Kevin Wai 合作。ViralReel 不出售也不授权它。',
        },
      },
      {
        q: { en: 'Can I still make a video?', zh: '还能做视频吗？' },
        a: {
          en: 'Yes. The template makes the street-freestyle picture from one photo. The song, if you use it, is added on the platform you post to.',
          zh: '可以。模板用一张照片做街头 freestyle 的画面。如果你要用那首歌，在发布的平台里另加。',
        },
      },
    ],
  },
  {
    keyword: 'bulin 47 gif',
    slug: 'bulin-47-gif',
    title: {
      en: 'Bulin 47 GIF – ViralReel Exports an MP4',
      zh: 'Bulin 47 GIF：ViralReel 导出的是 MP4',
    },
    description: {
      en: 'bulin 47 gif: ViralReel does not export a GIF. It makes the AI remake video from one photo and downloads an MP4 you can convert yourself if you need a loop.',
      zh: 'bulin 47 gif：ViralReel 不导出 GIF。它用一张照片做 AI 重拍视频，下载的是 MP4；如果你需要循环图，可以自己转换。',
    },
    h1: { en: 'Bulin 47 GIF', zh: 'Bulin 47 GIF' },
    lead: {
      en: 'ViralReel does not make a Bulin 47 GIF file. It makes the AI remake video from one photo and downloads an MP4.',
      zh: 'ViralReel 不做 Bulin 47 的 GIF 文件。它用一张照片做 AI 重拍视频，下载的是 MP4。',
    },
    guideTitle: {
      en: 'If you wanted a GIF',
      zh: '如果你想要的是 GIF',
    },
    body: {
      en: [
        'A bulin 47 gif search usually wants a short loop of the shoulder move or the red-light freestyle. ViralReel’s download is an MP4 of an AI remake, not a GIF of the original clip and not a GIF export.',
        'Make the video at https://www.viralreel.app/bulin-47-ai-template from one photo, then convert that MP4 in your own editor if a loop is what you need. The template still will not hand you the Madrid footage.',
      ],
      zh: [
        '搜 bulin 47 gif 通常是想要耸肩或红光 freestyle 的一小段循环。ViralReel 下载的是 AI 重拍的 MP4，不是原片的 GIF，也不是 GIF 导出。',
        '在 https://www.viralreel.app/zh/bulin-47-ai-template 用一张照片做出视频。如果发布需要循环图，再用你自己的工具把 MP4 转过去。模板仍然不会把马德里原片交给你。',
      ],
    },
    steps: [
      {
        name: { en: 'Expect an MP4, not a GIF', zh: '得到的是 MP4，不是 GIF' },
        text: {
          en: 'The Bulin 47 template downloads a vertical MP4. It does not export a GIF and it does not host the original clip.',
          zh: 'Bulin 47 模板下载的是竖屏 MP4。它不导出 GIF，也不托管原片。',
        },
      },
      {
        name: {
          en: 'Make the AI video from one photo',
          zh: '用一张照片做 AI 视频',
        },
        text: {
          en: 'Upload one photo you have permission to use, generate the fictional red-light scene, and download the MP4.',
          zh: '上传一张你有权使用的照片，生成虚构的红光场景，下载 MP4。',
        },
      },
      {
        name: {
          en: 'Convert it yourself if you need a loop',
          zh: '需要循环图就自己转',
        },
        text: {
          en: 'Use your own editor to turn the MP4 into a GIF after download. Label the post as AI-generated where the platform asks.',
          zh: '下载后再用你自己的工具把 MP4 转成 GIF。平台要求标注 AI 生成时，按要求标注。',
        },
      },
    ],
    faq: [
      {
        q: {
          en: 'Can I download a Bulin 47 GIF from ViralReel?',
          zh: '能从 ViralReel 下载 Bulin 47 GIF 吗？',
        },
        a: {
          en: 'No. ViralReel exports an MP4 of the AI remake. It does not export a GIF and it does not host the original meme file.',
          zh: '不能。ViralReel 导出的是 AI 重拍的 MP4。它不导出 GIF，也不托管原始梗文件。',
        },
      },
      {
        q: { en: 'What file do I get?', zh: '我会得到什么文件？' },
        a: {
          en: 'An MP4 made from one photo, usually 9:16. You can convert that file to a GIF in your own editor after you download it.',
          zh: '一条用一张照片做成的 MP4，通常是 9:16。下载之后你可以在自己的工具里把它转成 GIF。',
        },
      },
    ],
  },
];

export function getBulinLongTail(slug: string) {
  return BULIN_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(
  entry: LongTailEntry
): readonly BulinHowToStep[] {
  return entry.steps === 'shared' ? BULIN_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const lang = zh ? 'zh' : 'en';
  const own = entry.faq.map(
    (item) => [item.q[lang], item.a[lang]] as [string, string]
  );
  const template = absoluteUrl(zh, BULIN_TEMPLATE_PATH);
  const shared: [string, string][] = zh
    ? [
        [
          '在哪里制作？',
          `在 ViralReel 制作：${template} 。上传一张你有权使用的照片，生成虚构的街头 freestyle，下载 MP4。ViralReel 不授权原声或 Dame Hombro。`,
        ],
        [
          '需要几张照片？',
          '一张。街头原版、西装、豹纹、夜场人群和马甲绅士都只用一张你有权使用的单人照片。宠物说唱用一张动物的照片。不要用未成年人、名人或公众人物的照片。',
        ],
        ['要多少积分？', templateLiveCostAnswer(BULIN_PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Bulin 47、Kevin Wai 或原片拍摄者没有隶属、官方或合作关系。模板用一张照片搭建新的虚构场景。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload one photo you have permission to use, generate a fictional street freestyle, and download the MP4. ViralReel does not license the original audio or Dame Hombro.`,
        ],
        [
          'How many photos do I need?',
          'One. Street Freestyle, Suit Edition, Leopard Print, Night Crowd, and Sharp Vest each take one photo of one person you have permission to use. Pet Freestyle takes one photo of the animal. Do not use photos of minors, celebrities, or public figures.',
        ],
        [
          'How many credits does it cost?',
          templateLiveCostAnswer(BULIN_PRODUCT, false, ctx),
        ],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Bulin 47, Kevin Wai, or the people who filmed the original clip. The templates stage a new fictional scene from one photo.',
        ],
      ];
  return [...own, ...shared];
}

export interface BulinLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function bulinLinkGroups(zh: boolean): BulinLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        {
          href: BULIN_TEMPLATE_PATH,
          label: zh ? 'Bulin 47 AI 模板' : 'Bulin 47 AI template',
        },
        { href: '/bulin-47-ai-video', label: 'Bulin 47 AI video' },
        { href: '/bulin-47-ai', label: 'Bulin 47 AI' },
        { href: '/bulin-47-freestyle', label: 'Bulin 47 freestyle' },
        { href: '/bulin-47-dance', label: 'Bulin 47 dance' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/bulin-47-meme', label: 'Bulin 47 meme' },
        { href: '/bulin-47-tiktok', label: 'Bulin 47 TikTok' },
        { href: '/bulin-47-original', label: 'Bulin 47 original' },
        { href: '/bulin-47-remix', label: 'Bulin 47 remix' },
        { href: '/bulin-47-song', label: 'Bulin 47 song' },
        { href: '/bulin-47-gif', label: 'Bulin 47 GIF' },
        { href: '/dame-hombro-ai', label: 'Dame Hombro AI' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        {
          href: BULIN_POSTS.howTo,
          label: zh
            ? '如何制作 Bulin 47 AI 视频'
            : 'How to make a Bulin 47 AI video',
        },
        {
          href: '/blog/october-2026-viral-ai-meme-videos',
          label: zh ? '2026 年 10 月病毒 AI 梗' : 'October 2026 viral AI memes',
        },
        { href: '/hit-the-road-dude-ai-template', label: 'Hit the Road Dude' },
      ],
    },
  ];
}

export const BULIN_LONG_TAIL_ROUTES = BULIN_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
