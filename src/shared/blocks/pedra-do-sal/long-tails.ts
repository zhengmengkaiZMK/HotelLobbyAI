import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { PEDRA_HOW_TO_STEPS, type PedraHowToStep } from './steps';

/**
 * Long-tail landings for the Pedra do Sal template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * PEDRA_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `pedra-do-sal-ai-template` slug.
 */

export const PEDRA_TEMPLATE_PATH = '/pedra-do-sal-ai-template';

export const PEDRA_POSTS = {
  howTo: '/blog/why-pedra-do-sal-ai-videos-went-viral',
  comparison: '/blog/pedra-do-sal-and-bby-wow-vs-prompt-tools',
} as const;

const PEDRA_PRODUCT = { en: 'Pedra do Sal', zh: 'Pedra do Sal' };

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
  steps: 'shared' | readonly PedraHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

export const PEDRA_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'pedra do sal ai',
    slug: 'pedra-do-sal-ai',
    title: {
      en: 'Pedra do Sal AI – Make the Remake on ViralReel',
      zh: 'Pedra do Sal AI：在 ViralReel 用一张照片制作',
    },
    description: {
      en: 'pedra do sal ai: ViralReel turns one photo into a fictional Rio night-square clip. Night Party, Goth Look, and Wizard Elder. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.',
      zh: 'pedra do sal ai：ViralReel 用一张照片做成虚构的里约夜场广场短片。夜街派对、暗黑大衣、巫师长老。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
    },
    h1: { en: 'Pedra do Sal AI', zh: 'Pedra do Sal AI' },
    lead: {
      en: 'Pedra do Sal AI on ViralReel is a new clip from one photo: you in the middle of a packed Rio night square. It is not the original TikTok.',
      zh: 'ViralReel 上的 Pedra do Sal AI 是用一张照片做的新短片：你站在挤满人的里约夜场广场中央。这不是原始 TikTok。',
    },
    guideTitle: {
      en: 'How to make a Pedra do Sal AI clip',
      zh: '如何制作 Pedra do Sal AI 短片',
    },
    body: {
      en: [
        'A pedra do sal ai search wants the night-square format: market tents, floodlights, a dense crowd, and one calm dancer in the middle. The clip that set that format was posted by @seuzerj on 16 October 2026. ViralReel does not host that file.',
        'On ViralReel you do not write the square as a prompt. Open the template, upload one photo you have permission to use, and generate a new 9:16 clip. Night Party, Goth Look, and Wizard Elder are three looks of the same beat. The card videos show the format so you can see the timing; they are not the original footage and not an AI render of your photo until you generate.',
        'After you download the MP4, add the trend sound inside TikTok, Reels, or Shorts and turn on the AI label where the app asks. ViralReel does not license that audio, and it is not affiliated with @seuzerj.',
      ],
      zh: [
        '搜 pedra do sal ai 想要的是夜场广场这个格式：市集帐篷、探照灯、密集人群，中间一个淡定的舞者。定下这个格式的片子由 @seuzerj 在 2026 年 10 月 16 日发布。ViralReel 不托管那个文件。',
        '在 ViralReel 你不用把广场写成提示词。打开模板，上传一张你有权使用的照片，生成一条新的 9:16 短片。夜街派对、暗黑大衣和巫师长老是同一节奏的三种造型。卡片视频用来让你看清格式和节奏；它们不是原片，在你点生成之前也不是用你的照片渲染的 AI 结果。',
        '下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上热梗原声，并在应用要求时打开 AI 标注。ViralReel 不授权这段音频，也与 @seuzerj 没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is Pedra do Sal AI?', zh: 'Pedra do Sal AI 是什么？' },
        a: {
          en: 'It is a fictional vertical remake of the Rio night-square dance, made on ViralReel from one photo. It is not a copy of the original TikTok and not an official video of the trend.',
          zh: '它是里约夜场广场舞蹈的虚构竖屏重拍，在 ViralReel 用一张照片做成。不是原始 TikTok 的拷贝，也不是这条趋势的官方视频。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The Pedra do Sal template already sets the square, the crowd, and the camera. You upload one photo and generate.',
          zh: '不需要。Pedra do Sal 模板已经定好了广场、人群和镜头。你上传一张照片然后生成。',
        },
      },
    ],
  },
  {
    keyword: 'pedra do sal ai video',
    slug: 'pedra-do-sal-ai-video',
    title: {
      en: 'Pedra do Sal AI Video – Make It on ViralReel',
      zh: 'Pedra do Sal AI 视频：在 ViralReel 用一张照片制作',
    },
    description: {
      en: 'pedra do sal ai video: ViralReel makes the AI remake MP4 from one photo. The download is a new night-square clip, not the original video file. Add the trend sound on the platform you post to.',
      zh: 'pedra do sal ai video：ViralReel 用一张照片做 AI 重拍 MP4。下载的是一条新的夜场广场短片，不是原视频文件。热梗原声在你发布的平台里另加。',
    },
    h1: { en: 'Pedra do Sal AI video', zh: 'Pedra do Sal AI 视频' },
    lead: {
      en: 'A Pedra do Sal AI video on ViralReel is an MP4 made from one photo. It is a new fictional square, not a download of the original video.',
      zh: 'ViralReel 上的 Pedra do Sal AI 视频是用一张照片做成的 MP4。它是一条新的虚构广场短片，不是原视频的下载。',
    },
    guideTitle: {
      en: 'How to make a Pedra do Sal AI video',
      zh: '如何制作 Pedra do Sal AI 视频',
    },
    body: {
      en: [
        'A pedra do sal ai video is an AI remake of the packed-square dance, not a file of the TikTok that started the wave. The recognizable scene is the stone square at night, the tents, the floodlights, and one dancer holding a calm groove while the crowd moves.',
        'The template takes one photo and exports an MP4. You pick Night Party, Goth Look, or Wizard Elder, leave the ratio on 9:16, and read the credit cost before you generate. The generator shows that cost from the live credit table.',
        'ViralReel does not include the trend audio in the file. Add it inside TikTok, Reels, or Shorts, and mark the post as AI-generated where the app asks.',
      ],
      zh: [
        'pedra do sal ai video 是挤满人的广场舞蹈的 AI 重拍，不是带火这波的那条 TikTok 文件。能认出来的场景是夜晚的石阶广场、帐篷、探照灯，以及人群舞动时中间那个淡定律动的人。',
        '模板用一张照片，导出 MP4。你选夜街派对、暗黑大衣或巫师长老，画幅保持 9:16，生成前看清积分。生成器按实时积分表显示这次消耗。',
        'ViralReel 不会把热梗音频放进文件里。请在 TikTok、Reels 或 Shorts 里另加，并在应用要求时把帖子标成 AI 生成。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Pedra do Sal AI video the original clip?', zh: 'Pedra do Sal AI 视频是原片吗？' },
        a: {
          en: 'No. It is a new MP4 generated from your photo. ViralReel does not reupload the original video.',
          zh: '不是。它是用你的照片新生成的 MP4。ViralReel 不转载原视频。',
        },
      },
      {
        q: { en: 'What file do I download?', zh: '下载的是什么文件？' },
        a: {
          en: 'An MP4 of the AI remake. ViralReel does not export the original TikTok, a GIF, or a licensed soundtrack.',
          zh: 'AI 重拍的 MP4。ViralReel 不导出原始 TikTok、GIF 或已获授权的配乐。',
        },
      },
    ],
  },
  {
    keyword: 'pedra do sal dance',
    slug: 'pedra-do-sal-dance',
    title: {
      en: 'Pedra do Sal Dance – AI Remake from One Photo',
      zh: 'Pedra do Sal Dance：一张照片的 AI 重拍',
    },
    description: {
      en: 'pedra do sal dance: ViralReel does not teach the dance or sell a class. It makes an AI remake video of the night-square groove from one photo. The trend sound is added on TikTok, Reels, or Shorts.',
      zh: 'pedra do sal dance：ViralReel 不教这支舞，也不卖课程。它用一张照片做夜场广场律动的 AI 重拍视频。热梗原声在 TikTok、Reels 或 Shorts 里另加。',
    },
    h1: { en: 'Pedra do Sal dance', zh: 'Pedra do Sal dance' },
    lead: {
      en: 'ViralReel does not ship a Pedra do Sal dance tutorial. It makes an AI video of that night-square groove from one photo.',
      zh: 'ViralReel 不提供 Pedra do Sal 舞蹈教程。它用一张照片做那段夜场广场律动的 AI 视频。',
    },
    guideTitle: {
      en: 'The dance search, and the video you can make',
      zh: '搜舞蹈时，你在这里能做的视频',
    },
    body: {
      en: [
        'The pedra do sal dance is the calm charme groove in the middle of a packed square, not a step sheet on this site. ViralReel is not a dance school and does not film a lesson.',
        'If you want your own version of the format, the template puts one photo in the dancer’s spot and exports an MP4. The crowd, the tents, and the one-take camera stay. That is a fictional remake, not a recording of a class and not the original dancer.',
      ],
      zh: [
        'pedra do sal dance 是挤满人的广场中央那段淡定的 charme 律动，不是本站上的舞步表。ViralReel 不是舞蹈学校，也不拍摄课程。',
        '如果你想要这个格式的自己的版本，模板把一张照片放进舞者的位置，导出 MP4。人群、帐篷和一镜到底的镜头留着。这是虚构重拍，不是课程录像，也不是原来的舞者。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this a Pedra do Sal dance tutorial?', zh: '这是 Pedra do Sal 舞蹈教程吗？' },
        a: {
          en: 'No. ViralReel makes an AI remake video from one photo. It does not teach steps or sell a class.',
          zh: '不是。ViralReel 用一张照片做 AI 重拍视频。它不教舞步，也不卖课程。',
        },
      },
      {
        q: { en: 'Does the download include the dance music?', zh: '下载里带舞蹈音乐吗？' },
        a: {
          en: 'No. The file is an MP4 of the picture. Add any trend sound inside the app you post to. ViralReel does not license that audio.',
          zh: '不带。文件是画面轨道的 MP4。热梗原声请在发布的应用里另加。ViralReel 不授权这段音频。',
        },
      },
    ],
  },
  {
    keyword: 'pedra do sal meme',
    slug: 'pedra-do-sal-meme',
    title: {
      en: 'Pedra do Sal Meme – What It Is, and the AI Remake',
      zh: 'Pedra do Sal Meme：它是什么，以及 AI 重拍',
    },
    description: {
      en: 'pedra do sal meme: the packed Rio night square with one calm dancer in the middle. ViralReel does not host the original meme file. It makes a fictional AI remake from one photo.',
      zh: 'pedra do sal meme：挤满人的里约夜场广场，中间一个淡定的舞者。ViralReel 不托管原始梗文件。它用一张照片做虚构 AI 重拍。',
    },
    h1: { en: 'Pedra do Sal meme', zh: 'Pedra do Sal meme' },
    lead: {
      en: 'The Pedra do Sal meme is the night-square format. ViralReel does not host the original file. It makes a fictional remake from one photo.',
      zh: 'Pedra do Sal meme 是夜场广场这个格式。ViralReel 不托管原片文件。它用一张照片做虚构重拍。',
    },
    guideTitle: {
      en: 'What the meme is',
      zh: '这个梗是什么',
    },
    body: {
      en: [
        'The pedra do sal meme keeps four things and swaps one: the stone square, the tents, the floodlights, the crowd, and a new person in the middle. The contrast is a calm dancer inside a moving party. Remakes with a pink T-shirt, a long black coat, or a wizard spread because the crowd stays recognizable.',
        'This page is not an archive of the original post. ViralReel does not reupload @seuzerj’s TikTok, its audio, or a “clean” copy. If you want a version with a photo you are allowed to use, generate it on the template and label it as AI when you post.',
      ],
      zh: [
        'pedra do sal meme 留着四样、只换一样：石阶广场、帐篷、探照灯、人群，中间换成一个新人。反差是一个淡定的舞者待在一场还在动的派对里。粉 T 恤、黑色长大衣或巫师的重拍能传开，是因为人群一直能被认出来。',
        '这一页不是原帖的存档。ViralReel 不转载 @seuzerj 的 TikTok、它的音频，或一份“干净”拷贝。如果你想用一张你有权使用的照片做版本，在模板上生成，发布时标注为 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Where is the original Pedra do Sal meme?', zh: 'Pedra do Sal 原梗在哪里？' },
        a: {
          en: 'Not on ViralReel. The wave’s origin posts point to a TikTok by @seuzerj on 16 October 2026. This site does not rehost it.',
          zh: '不在 ViralReel。这波的源头帖指向 @seuzerj 在 2026 年 10 月 16 日发的一条 TikTok。本站不转载它。',
        },
      },
      {
        q: { en: 'Can I put my photo in the meme format?', zh: '可以把我的照片放进这个梗的格式吗？' },
        a: {
          en: 'Yes, as a new fictional clip. Upload one photo of an adult you have permission to use. Do not use minors, celebrities, or strangers from the original.',
          zh: '可以，作为一条新的虚构短片。上传一张你有权使用的成年人照片。不要用未成年人、名人，或原片里的陌生人。',
        },
      },
    ],
  },
  {
    keyword: 'pedra do sal tiktok',
    slug: 'pedra-do-sal-tiktok',
    title: {
      en: 'Pedra do Sal TikTok – ViralReel Does Not Host the Original',
      zh: 'Pedra do Sal TikTok：ViralReel 不托管原片',
    },
    description: {
      en: 'pedra do sal tiktok: ViralReel does not have the original TikTok file. It makes an AI remake MP4 from one photo that you can post to TikTok yourself, with that app’s sound and AI label.',
      zh: 'pedra do sal tiktok：ViralReel 没有原始 TikTok 文件。它用一张照片做 AI 重拍 MP4，你可以自己发到 TikTok，并使用该应用的原声和 AI 标注。',
    },
    h1: { en: 'Pedra do Sal TikTok', zh: 'Pedra do Sal TikTok' },
    lead: {
      en: 'ViralReel does not host the Pedra do Sal TikTok. It makes an AI remake MP4 from one photo, which you can post yourself.',
      zh: 'ViralReel 不托管 Pedra do Sal 的 TikTok。它用一张照片做 AI 重拍 MP4，你可以自己发布。',
    },
    guideTitle: {
      en: 'The TikTok is not a file on this site',
      zh: '那条 TikTok 不是本站上的文件',
    },
    body: {
      en: [
        'A pedra do sal tiktok search usually wants the source post or a copy of it. ViralReel does not store, sell, or reupload that TikTok. Look to the uploader’s own post if you need the source.',
        'What you can make here is a separate vertical MP4: one photo becomes the dancer in a fictional night square. When you post that remake, add the trend sound from TikTok’s library and use TikTok’s AI label. ViralReel does not license the sound and is not a TikTok account for the trend.',
      ],
      zh: [
        '搜 pedra do sal tiktok 通常是想要源帖或它的拷贝。ViralReel 不存储、不出售、也不转载那条 TikTok。如果你需要源头，去上传者自己的帖子。',
        '你在这里能做的是另一条竖屏 MP4：一张照片变成虚构夜场广场里的舞者。发布这条重拍时，从 TikTok 的曲库加上热梗原声，并使用 TikTok 的 AI 标注。ViralReel 不授权这段声音，也不是这条趋势的 TikTok 账号。',
      ],
    },
    steps: [
      {
        name: { en: 'Do not expect the original TikTok', zh: '不要期待拿到原始 TikTok' },
        text: {
          en: 'ViralReel does not host or sell the Pedra do Sal TikTok. The source stays with the uploader.',
          zh: 'ViralReel 不托管也不出售 Pedra do Sal 的 TikTok。源头留在上传者那里。',
        },
      },
      {
        name: { en: 'Make a fictional remake instead', zh: '改为做一条虚构重拍' },
        text: {
          en: 'Upload one photo you have permission to use and generate a new night-square clip on the ViralReel template.',
          zh: '上传一张你有权使用的照片，在 ViralReel 模板上生成一条新的夜场广场短片。',
        },
      },
      {
        name: { en: 'Post it as AI, with the app’s sound', zh: '按 AI 发布，并用应用里的原声' },
        text: {
          en: 'Download the MP4. On TikTok, add the trend sound from that app and turn on the AI label. ViralReel does not license the audio.',
          zh: '下载 MP4。在 TikTok 上从该应用添加热梗原声，并打开 AI 标注。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Can I download the Pedra do Sal TikTok here?', zh: '可以在这里下载 Pedra do Sal 的 TikTok 吗？' },
        a: {
          en: 'No. ViralReel does not provide the original TikTok file. The download is an AI remake MP4 from your photo.',
          zh: '不能。ViralReel 不提供原始 TikTok 文件。下载的是用你的照片做的 AI 重拍 MP4。',
        },
      },
      {
        q: { en: 'Is ViralReel the official TikTok?', zh: 'ViralReel 是官方 TikTok 吗？' },
        a: {
          en: 'No. ViralReel is an independent AI video template site. It is not @seuzerj and not an official TikTok account for the trend.',
          zh: '不是。ViralReel 是独立的 AI 视频模板站。它不是 @seuzerj，也不是这条趋势的官方 TikTok 账号。',
        },
      },
    ],
  },
  {
    keyword: 'charme dance ai',
    slug: 'charme-dance-ai',
    title: {
      en: 'Charme Dance AI – Night-Square Remake on ViralReel',
      zh: 'Charme Dance AI：ViralReel 上的夜场广场重拍',
    },
    description: {
      en: 'charme dance ai: charme is the Rio groove in the Pedra do Sal format. ViralReel does not license a charme track or an official class. It makes an AI remake video from one photo.',
      zh: 'charme dance ai：charme 是 Pedra do Sal 格式里的里约律动。ViralReel 不授权 charme 音轨或官方课程。它用一张照片做 AI 重拍视频。',
    },
    h1: { en: 'Charme dance AI', zh: 'Charme dance AI' },
    lead: {
      en: 'Charme dance AI on ViralReel means the night-square remake from one photo. It is not a licensed charme track and not an official dance class.',
      zh: 'ViralReel 上的 Charme dance AI 指用一张照片做的夜场广场重拍。它不是已获授权的 charme 音轨，也不是官方舞蹈课。',
    },
    guideTitle: {
      en: 'Charme in this trend is the groove, not a class',
      zh: '这条趋势里的 charme 是律动，不是课程',
    },
    body: {
      en: [
        'Charme is a Rio partner-dance style built on smooth footwork. In this trend it is the calm groove Seu Zé holds in the middle of the Pedra do Sal square. A charme dance ai search often wants that look with a new face.',
        'ViralReel does not sell a charme lesson, a charme single, or a recording of a real roda. The template stages a fictional version of the night-square beat from one photo. Any trend audio stays in TikTok, Reels, or Shorts.',
      ],
      zh: [
        'Charme 是里约的一种双人舞风格，步法平滑。在这条趋势里，它是 Seu Zé 在 Pedra do Sal 广场中央稳住的那段淡定律动。搜 charme dance ai 常常是想要这个画面、换一张新脸。',
        'ViralReel 不出售 charme 课程、charme 单曲，或一场真实 roda 的录像。模板用一张照片搭建这个夜场广场节奏的虚构版本。热梗音频留在 TikTok、Reels 或 Shorts 里。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does ViralReel teach charme?', zh: 'ViralReel 教 charme 吗？' },
        a: {
          en: 'No. It makes an AI video of the Pedra do Sal night-square format from one photo. It is not a dance school.',
          zh: '不教。它用一张照片做 Pedra do Sal 夜场广场格式的 AI 视频。它不是舞蹈学校。',
        },
      },
      {
        q: { en: 'Is the charme music included?', zh: '包含 charme 音乐吗？' },
        a: {
          en: 'No. ViralReel does not license a charme track. Add a trend sound inside the app you post to.',
          zh: '不包含。ViralReel 不授权 charme 音轨。请在发布的应用里另加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'charme dance ai video',
    slug: 'charme-dance-ai-video',
    title: {
      en: 'Charme Dance AI Video – MP4 from One Photo',
      zh: 'Charme Dance AI 视频：一张照片的 MP4',
    },
    description: {
      en: 'charme dance ai video: ViralReel exports an MP4 of the Pedra do Sal night-square remake from one photo. It is not a licensed charme music video and not the original clip.',
      zh: 'charme dance ai video：ViralReel 用一张照片导出 Pedra do Sal 夜场广场重拍的 MP4。它不是已获授权的 charme 音乐视频，也不是原片。',
    },
    h1: { en: 'Charme dance AI video', zh: 'Charme dance AI 视频' },
    lead: {
      en: 'A charme dance AI video here is an MP4 from one photo. It is not a licensed music video and not the original footage.',
      zh: '这里的 charme dance AI 视频是用一张照片做成的 MP4。它不是已获授权的音乐视频，也不是原片。',
    },
    guideTitle: {
      en: 'How to make a charme dance AI video',
      zh: '如何制作 charme dance AI 视频',
    },
    body: {
      en: [
        'A charme dance ai video on ViralReel is the Pedra do Sal remake: one photo, the night square, the crowd, and the calm groove. The download is an MP4 of that new scene.',
        'It is not a charme music video with licensed audio, and it is not a copy of the TikTok. Pick a look, generate, then add sound on the platform if the post needs to sit with the trend.',
      ],
      zh: [
        'ViralReel 上的 charme dance ai video 就是 Pedra do Sal 重拍：一张照片、夜场广场、人群，以及那段淡定律动。下载的是这个新场景的 MP4。',
        '它不是带已授权音频的 charme 音乐视频，也不是那条 TikTok 的拷贝。选一个造型，生成，如果帖子需要进同一条趋势，再在平台上加声音。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What do I download?', zh: '我下载到什么？' },
        a: {
          en: 'An MP4 made from your photo. Not a charme music video, not a GIF, and not the original TikTok.',
          zh: '用你的照片做成的 MP4。不是 charme 音乐视频，不是 GIF，也不是原始 TikTok。',
        },
      },
      {
        q: { en: 'Which template is the charme dance AI video?', zh: 'charme dance AI 视频用哪个模板？' },
        a: {
          en: 'The Pedra do Sal template: Night Party, Goth Look, or Wizard Elder. All three keep the same square and crowd.',
          zh: 'Pedra do Sal 模板：夜街派对、暗黑大衣或巫师长老。三个都留着同一个广场和同一群人。',
        },
      },
    ],
  },
  {
    keyword: 'seu ze pedra do sal',
    slug: 'seu-ze-pedra-do-sal',
    title: {
      en: 'Seu Zé Pedra do Sal – ViralReel Does Not Host That Clip',
      zh: 'Seu Zé Pedra do Sal：ViralReel 不托管那条片子',
    },
    description: {
      en: 'seu ze pedra do sal: Seu Zé de Madureira is the dancer in the @seuzerj clip. ViralReel does not host that video and does not generate his face. It puts your photo in a new fictional square.',
      zh: 'seu ze pedra do sal：Seu Zé de Madureira 是 @seuzerj 那条片子里的舞者。ViralReel 不托管该视频，也不生成他的脸。它把你的照片放进一条新的虚构广场短片。',
    },
    h1: { en: 'Seu Zé Pedra do Sal', zh: 'Seu Zé Pedra do Sal' },
    lead: {
      en: 'Seu Zé is the dancer in the clip that started the wave. ViralReel does not host that video and does not recreate his face. Your photo can take the dancer’s spot in a new scene.',
      zh: 'Seu Zé 是带火这波的片子里的舞者。ViralReel 不托管该视频，也不重现他的脸。你的照片可以在一条新场景里站上舞者的位置。',
    },
    guideTitle: {
      en: 'Seu Zé is the original dancer, not a file here',
      zh: 'Seu Zé 是原片舞者，不是这里的文件',
    },
    body: {
      en: [
        'Seu Zé de Madureira is the name people gave the AI-generated elderly dancer in the Pedra do Sal clip posted by @seuzerj. A seu ze pedra do sal search often wants that specific video or that face.',
        'ViralReel does not host the clip, does not sell a “Seu Zé pack,” and does not generate Seu Zé’s likeness from a name. The template takes one photo you have permission to use and builds a new fictional square around that person. It is not affiliated with @seuzerj or with anyone using the Seu Zé name.',
      ],
      zh: [
        'Seu Zé de Madureira 是大家给 @seuzerj 那条 Pedra do Sal 片子里 AI 老人舞者起的名字。搜 seu ze pedra do sal 常常是想要那条具体的视频，或那张脸。',
        'ViralReel 不托管该片子，不出售“Seu Zé 包”，也不会按名字生成 Seu Zé 的肖像。模板用一张你有权使用的照片，围绕这个人搭一条新的虚构广场短片。它与 @seuzerj 或使用 Seu Zé 这个名字的人没有关系。',
      ],
    },
    steps: [
      {
        name: { en: 'This is not Seu Zé’s clip', zh: '这不是 Seu Zé 的那条片子' },
        text: {
          en: 'ViralReel does not host the @seuzerj TikTok and does not generate Seu Zé de Madureira’s face.',
          zh: 'ViralReel 不托管 @seuzerj 的 TikTok，也不生成 Seu Zé de Madureira 的脸。',
        },
      },
      {
        name: { en: 'Use your own photo', zh: '用你自己的照片' },
        text: {
          en: 'Upload one photo of an adult you have permission to use. The template puts that person in a new night square.',
          zh: '上传一张你有权使用的成年人照片。模板把这个人放进一条新的夜场广场短片。',
        },
      },
      {
        name: { en: 'Label the remake', zh: '给重拍加上标注' },
        text: {
          en: 'Download the MP4 and mark it as AI-generated where TikTok, Reels, or Shorts asks. Do not present it as the original Seu Zé video.',
          zh: '下载 MP4，并在 TikTok、Reels 或 Shorts 要求时标注为 AI 生成。不要把它当成 Seu Zé 的原片。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Can I download the Seu Zé video here?', zh: '可以在这里下载 Seu Zé 的视频吗？' },
        a: {
          en: 'No. ViralReel does not host that clip. You can generate a new square from your own photo.',
          zh: '不能。ViralReel 不托管那条片子。你可以用自己的照片生成一条新的广场短片。',
        },
      },
      {
        q: { en: 'Will the AI make Seu Zé’s face?', zh: 'AI 会做出 Seu Zé 的脸吗？' },
        a: {
          en: 'No. The generator uses the photo you upload. Do not upload a screenshot of the original dancer, a celebrity, or a minor.',
          zh: '不会按名字去造他的脸。生成器用的是你上传的照片。不要上传原舞者的截图、名人或未成年人。',
        },
      },
    ],
  },
  {
    keyword: 'rio street party ai',
    slug: 'rio-street-party-ai',
    title: {
      en: 'Rio Street Party AI – Pedra do Sal Remake on ViralReel',
      zh: 'Rio Street Party AI：ViralReel 上的 Pedra do Sal 重拍',
    },
    description: {
      en: 'rio street party ai: ViralReel makes a fictional Pedra do Sal night-square video from one photo. It is not footage of a real Rio street party and not the original TikTok.',
      zh: 'rio street party ai：ViralReel 用一张照片做虚构的 Pedra do Sal 夜场广场视频。它不是一场真实里约街头派对的实拍，也不是原始 TikTok。',
    },
    h1: { en: 'Rio street party AI', zh: 'Rio street party AI' },
    lead: {
      en: 'Rio street party AI on ViralReel is the Pedra do Sal night-square remake from one photo. It is a fictional scene, not footage of a real party.',
      zh: 'ViralReel 上的 Rio street party AI 是用一张照片做的 Pedra do Sal 夜场广场重拍。它是虚构场景，不是一场真实派对的实拍。',
    },
    guideTitle: {
      en: 'A fictional square, not a live street recording',
      zh: '虚构的广场，不是街头实拍',
    },
    body: {
      en: [
        'Pedra do Sal is a historic stone square in Rio de Janeiro’s port district, one of the places samba comes from. The viral clip borrows that setting: tents, floodlights, a dense night crowd. A rio street party ai search is asking for that picture.',
        'ViralReel does not film a real street party and does not sell footage of one. The template builds a fictional version of the format around one photo. Treat the result as an AI remake, add any trend sound on the platform, and do not present it as a recording of a real event or of the original post.',
      ],
      zh: [
        'Pedra do Sal 是里约热内卢港口区的一座历史石阶广场，桑巴的发源地之一。热片借用了这个场景：帐篷、探照灯、密集的夜场人群。搜 rio street party ai 要的就是这个画面。',
        'ViralReel 不拍摄真实的街头派对，也不出售这类实拍。模板围绕一张照片搭建这个格式的虚构版本。把结果当成 AI 重拍，在平台上另加热梗原声，不要把它说成真实活动的录像或原帖。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this a real Rio street party?', zh: '这是真实的里约街头派对吗？' },
        a: {
          en: 'No. The template stages a fictional night square from one photo. It is not a live recording of a party in Rio.',
          zh: '不是。模板用一张照片搭建一个虚构的夜场广场。它不是里约某场派对的现场录像。',
        },
      },
      {
        q: { en: 'Which template is the Rio street party AI?', zh: 'Rio street party AI 用哪个模板？' },
        a: {
          en: 'The Pedra do Sal template on ViralReel. Night Party is the closest everyday look; Goth Look and Wizard Elder keep the same crowd.',
          zh: 'ViralReel 上的 Pedra do Sal 模板。夜街派对最接近日常造型；暗黑大衣和巫师长老留着同一群人。',
        },
      },
    ],
  },
];

export function getPedraLongTail(slug: string) {
  return PEDRA_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly PedraHowToStep[] {
  return entry.steps === 'shared' ? PEDRA_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const lang = zh ? 'zh' : 'en';
  const own = entry.faq.map((item) => [item.q[lang], item.a[lang]] as [string, string]);
  const shared: [string, string][] = zh
    ? [
        ['需要几张照片？', '一张。夜街派对、暗黑大衣和巫师长老都只用一张你有权使用的单人照片。不要用未成年人、名人或公众人物的照片。'],
        ['要多少积分？', templateLiveCostAnswer(PEDRA_PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        ['这是官方页面吗？', '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 @seuzerj、Seu Zé de Madureira 或原片背后的人没有隶属、官方或合作关系。模板用一张照片搭建新的虚构场景。'],
      ]
    : [
        ['How many photos do I need?', 'One. Night Party, Goth Look, and Wizard Elder each take one photo of one person you have permission to use. Do not use photos of minors, celebrities, or public figures.'],
        ['How many credits does it cost?', templateLiveCostAnswer(PEDRA_PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        ['Is this an official page?', 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with @seuzerj, Seu Zé de Madureira, or the people behind the original clip. The templates stage a new fictional scene from one photo.'],
      ];
  return [...own, ...shared];
}

export interface PedraLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function pedraLinkGroups(zh: boolean): PedraLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: PEDRA_TEMPLATE_PATH, label: zh ? 'Pedra do Sal AI 模板' : 'Pedra do Sal AI template' },
        { href: '/pedra-do-sal-ai', label: 'Pedra do Sal AI' },
        { href: '/pedra-do-sal-ai-video', label: 'Pedra do Sal AI video' },
        { href: '/pedra-do-sal-dance', label: 'Pedra do Sal dance' },
        { href: '/charme-dance-ai', label: 'Charme dance AI' },
        { href: '/charme-dance-ai-video', label: 'Charme dance AI video' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/pedra-do-sal-meme', label: 'Pedra do Sal meme' },
        { href: '/pedra-do-sal-tiktok', label: 'Pedra do Sal TikTok' },
        { href: '/seu-ze-pedra-do-sal', label: 'Seu Zé Pedra do Sal' },
        { href: '/rio-street-party-ai', label: 'Rio street party AI' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: PEDRA_POSTS.howTo, label: zh ? 'Pedra do Sal 为什么爆，以及怎么做' : 'Why Pedra do Sal went viral, and how to make one' },
        { href: PEDRA_POSTS.comparison, label: zh ? '模板和提示词工具对比' : 'Template vs a prompt tool' },
      ],
    },
  ];
}

export const PEDRA_LONG_TAIL_ROUTES = PEDRA_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
