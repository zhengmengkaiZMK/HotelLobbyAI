import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { BBY_HOW_TO_STEPS, type BbyHowToStep } from './steps';

/**
 * Long-tail landings for the Bby Wow template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * BBY_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `bby-wow-ai-dance-template` slug.
 */

export const BBY_TEMPLATE_PATH = '/bby-wow-ai-dance-template';

export const BBY_POSTS = {
  howTo: '/blog/how-to-make-bby-wow-ai-dance-video',
  comparison: '/blog/pedra-do-sal-and-bby-wow-vs-prompt-tools',
  dimeWhat: '/blog/what-is-dime-dime-baby',
  dimeHowTo: '/blog/how-to-make-dime-dime-baby-ai-video',
} as const;

const EN_HUB = 'https://www.viralreel.app/bby-wow-ai-dance-template';
const ZH_HUB = 'https://www.viralreel.app/zh/bby-wow-ai-dance-template';
const EN_WHAT = `https://www.viralreel.app${BBY_POSTS.dimeWhat}`;
const ZH_WHAT = `https://www.viralreel.app/zh${BBY_POSTS.dimeWhat}`;
const EN_DIME_HOW = `https://www.viralreel.app${BBY_POSTS.dimeHowTo}`;
const ZH_DIME_HOW = `https://www.viralreel.app/zh${BBY_POSTS.dimeHowTo}`;

const BBY_PRODUCT = { en: 'Bby Wow', zh: 'Bby Wow' };

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
  steps: 'shared' | readonly BbyHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

export const BBY_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'bby wow ai',
    slug: 'bby-wow-ai',
    title: {
      en: 'Bby Wow AI – Make the Remake on ViralReel',
      zh: 'Bby Wow AI：在 ViralReel 用一张照片制作',
    },
    description: {
      en: 'bby wow ai: ViralReel turns one photo into a fictional bread-bite party clip. Suit Original, White Tee, and Staff Polo. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts. Not the song and not the original TikTok.',
      zh: 'bby wow ai：ViralReel 用一张照片做成虚构的咬面包派对短片。西装原版、白 T 派对版、黑 Polo 版。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。不是歌曲，也不是原始 TikTok。',
    },
    h1: { en: 'Bby Wow AI', zh: 'Bby Wow AI' },
    lead: {
      en: 'Bby Wow AI on ViralReel is a new party clip from one photo: walk in, bite the bread, stare, dance away. It is not the original TikTok and not the song.',
      zh: 'ViralReel 上的 Bby Wow AI 是用一张照片做的新派对短片：走向镜头、咬面包、对视、跳舞离场。这不是原始 TikTok，也不是那首歌。',
    },
    guideTitle: {
      en: 'How to make a Bby Wow AI clip',
      zh: '如何制作 Bby Wow AI 短片',
    },
    body: {
      en: [
        'A bby wow ai search covers two things people mix together. One is the KAROL G song “BbY WOW” and the dance posted with it. The other is the bread-bite party guy: walk toward the camera, bite a sweet bread, stare while chewing, then dance away. ViralReel makes the second, as a new fictional clip from one photo.',
        'You do not write the party as a prompt. Open the template, upload one photo you have permission to use, and generate a 9:16 MP4. Suit Original, White Tee, and Staff Polo are three outfits of the same four beats. The card videos show the format; they are not the original footage.',
        'The download does not include the song. Add a trend sound inside TikTok, Reels, or Shorts and turn on the AI label where the app asks. ViralReel does not license that audio and is not affiliated with the artists or the original creators.',
      ],
      zh: [
        '搜 bby wow ai 会碰到两件常被混在一起的事。一件是 KAROL G 的歌《BbY WOW》以及配着它跳的舞。另一件是咬面包的派对老哥：走向镜头、咬一口甜面包、嚼着对视，然后跳舞离场。ViralReel 做的是第二种，用一张照片生成一条新的虚构短片。',
        '你不用把派对写成提示词。打开模板，上传一张你有权使用的照片，生成一条 9:16 的 MP4。西装原版、白 T 派对版和黑 Polo 版是同一组四拍的三种穿着。卡片视频用来展示格式；它们不是原片。',
        '下载文件不包含这首歌。在 TikTok、Reels 或 Shorts 里另加热梗原声，并在应用要求时打开 AI 标注。ViralReel 不授权这段音频，也与歌手或原作者没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is Bby Wow AI on ViralReel?', zh: 'ViralReel 上的 Bby Wow AI 是什么？' },
        a: {
          en: 'A fictional remake of the bread-bite party clip, made from one photo. It is not the KAROL G song, not the original dance TikTok, and not an official video.',
          zh: '用一张照片做的咬面包派对短片的虚构重拍。它不是 KAROL G 的歌，不是原始舞蹈 TikTok，也不是官方视频。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The Bby Wow template already sets the hall, the guests, and the four beats. You upload one photo and generate.',
          zh: '不需要。Bby Wow 模板已经定好了宴会厅、宾客和四个节拍。你上传一张照片然后生成。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow ai video',
    slug: 'bby-wow-ai-video',
    title: {
      en: 'Bby Wow AI Video – Make the MP4 on ViralReel',
      zh: 'Bby Wow AI 视频：在 ViralReel 制作 MP4',
    },
    description: {
      en: 'bby wow ai video: ViralReel makes an AI remake MP4 from one photo. The download is a new party clip, not the original video and not a licensed copy of the song.',
      zh: 'bby wow ai video：ViralReel 用一张照片做 AI 重拍 MP4。下载的是一条新的派对短片，不是原视频，也不是这首歌的授权拷贝。',
    },
    h1: { en: 'Bby Wow AI video', zh: 'Bby Wow AI 视频' },
    lead: {
      en: 'A Bby Wow AI video on ViralReel is an MP4 made from one photo. It is a new fictional party clip, not a download of the original video.',
      zh: 'ViralReel 上的 Bby Wow AI 视频是用一张照片做成的 MP4。它是一条新的虚构派对短片，不是原视频的下载。',
    },
    guideTitle: {
      en: 'How to make a Bby Wow AI video',
      zh: '如何制作 Bby Wow AI 视频',
    },
    body: {
      en: [
        'A bby wow ai video here is the four-beat party remake: walk in, bite, stare, dance away. The recognizable joke is the serious chew in a lively room. ViralReel exports that as a new MP4 from your photo.',
        'Pick Suit Original, White Tee, or Staff Polo, keep 9:16, and read the credit cost the generator shows before you start. The file is the picture only. It is not the original TikTok and it does not contain the BbY WOW recording.',
      ],
      zh: [
        '这里的 bby wow ai video 是四拍派对重拍：入场、咬一口、对视、跳舞离场。能认出来的笑点是热闹房间里那口严肃的咀嚼。ViralReel 用你的照片把它导出成一条新的 MP4。',
        '选西装原版、白 T 派对版或黑 Polo 版，保持 9:16，生成前看清生成器显示的积分。文件只有画面。它不是原始 TikTok，也不包含《BbY WOW》的录音。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Bby Wow AI video the original clip?', zh: 'Bby Wow AI 视频是原片吗？' },
        a: {
          en: 'No. It is a new MP4 generated from your photo. ViralReel does not reupload the original video.',
          zh: '不是。它是用你的照片新生成的 MP4。ViralReel 不转载原视频。',
        },
      },
      {
        q: { en: 'What file do I download?', zh: '下载的是什么文件？' },
        a: {
          en: 'An MP4 of the AI remake. Not the original TikTok, not a GIF, and not the song.',
          zh: 'AI 重拍的 MP4。不是原始 TikTok，不是 GIF，也不是歌曲。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow ai dance',
    slug: 'bby-wow-ai-dance',
    title: {
      en: 'Bby Wow AI Dance – Party Remake, Not the Official Dance',
      zh: 'Bby Wow AI Dance：派对重拍，不是官方舞蹈',
    },
    description: {
      en: 'bby wow ai dance: ViralReel makes the bread-bite party remake from one photo, including the dance exit. It is not KAROL G’s official dance video, not a dance class, and not a licensed track.',
      zh: 'bby wow ai dance：ViralReel 用一张照片做咬面包派对重拍，包含跳舞离场。它不是 KAROL G 的官方舞蹈视频，不是舞蹈课，也不是已授权音轨。',
    },
    h1: { en: 'Bby Wow AI dance', zh: 'Bby Wow AI dance' },
    lead: {
      en: 'Bby Wow AI dance on ViralReel is the party-guy remake: the walk, the bite, the stare, and the dance exit. It is not the official dance video and not the song.',
      zh: 'ViralReel 上的 Bby Wow AI dance 是派对老哥的重拍：入场、咬面包、对视和跳舞离场。它不是官方舞蹈视频，也不是那首歌。',
    },
    guideTitle: {
      en: 'Which dance this page actually makes',
      zh: '这一页实际做的是哪一种舞',
    },
    body: {
      en: [
        'People searching bby wow ai dance often want one of two clips. The first is the bouncy dance set to “BbY WOW,” including @bigbowee’s “dime dime baby” post and later dance-crew versions. The second is the party guest who bites a sweet bread and dances away. ViralReel’s template is the second.',
        'The product is still an AI video from one photo, not a choreography class and not a download of either original. The dance in the file is the exit beat of that party format. ViralReel does not license the song those posts use, and it is not affiliated with KAROL G, Judeline, rusowsky, or the dance creators.',
      ],
      zh: [
        '搜 bby wow ai dance 的人通常想要两条片子之一。第一条是配着《BbY WOW》跳的弹跳舞，包括 @bigbowee 的「dime dime baby」以及后来的舞团版本。第二条是咬甜面包然后跳舞离场的派对客人。ViralReel 的模板是第二条。',
        '产品仍然是用一张照片做的 AI 视频，不是编舞课，也不是两条原片中任何一条的下载。文件里的舞是这个派对格式的离场节拍。ViralReel 不授权那些帖子使用的歌曲，也与 KAROL G、Judeline、rusowsky 或舞蹈创作者没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this KAROL G’s dance?', zh: '这是 KAROL G 的舞吗？' },
        a: {
          en: 'No. ViralReel does not host that dance video or teach that choreography. The template remakes the bread-bite party exit from one photo.',
          zh: '不是。ViralReel 不托管那段舞蹈视频，也不教那段编舞。模板用一张照片重拍咬面包后的派对离场。',
        },
      },
      {
        q: { en: 'Does the AI dance video include the song?', zh: 'AI 跳舞视频里有这首歌吗？' },
        a: {
          en: 'No. Add “BbY WOW” or “dime dime baby” inside TikTok, Reels, or Shorts if you want that sound. ViralReel does not license it.',
          zh: '没有。如果需要那段声音，在 TikTok、Reels 或 Shorts 里另加《BbY WOW》或「dime dime baby」。ViralReel 不授权它。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow guy',
    slug: 'bby-wow-guy',
    title: {
      en: 'Bby Wow Guy – AI Remake, Not the Original Guest',
      zh: 'Bby Wow Guy：AI 重拍，不是原来的那位客人',
    },
    description: {
      en: 'bby wow guy: the bread-bite party guest. ViralReel does not host his original video or name him. It puts your photo in a fictional remake of that four-beat exit.',
      zh: 'bby wow guy：咬面包的派对客人。ViralReel 不托管他的原视频，也不点名他是谁。它把你的照片放进这个四拍离场的虚构重拍。',
    },
    h1: { en: 'Bby Wow guy', zh: 'Bby Wow guy' },
    lead: {
      en: 'The Bby Wow guy is the guest in the bread-bite clip. ViralReel does not host that video. It makes a fictional remake from your photo.',
      zh: 'Bby Wow guy 是咬面包那条片子里的客人。ViralReel 不托管该视频。它用你的照片做虚构重拍。',
    },
    guideTitle: {
      en: 'The guy is the format, not a file here',
      zh: '这个人是格式，不是这里的文件',
    },
    body: {
      en: [
        'The bby wow guy is the young man in the quince-style party clip: he crosses the floor, bites a round sweet bread, stares into the lens with full cheeks, and dances off. That clip is older than the October 2026 wave. ViralReel does not identify him and does not reupload his video.',
        'The template keeps the four beats and swaps the person. Upload one photo of an adult you have permission to use. Do not upload a screenshot of the original guest, a celebrity, or a minor. The result is a new fictional party, not a face-swap of the source file.',
      ],
      zh: [
        'bby wow guy 是那段 quince 风格派对片子里的年轻男子：穿过舞池、咬一口圆形甜面包、腮帮子鼓着直视镜头，然后跳舞离开。这条片子比 2026 年 10 月这波更早。ViralReel 不指认他是谁，也不转载他的视频。',
        '模板留着四个节拍，换掉人。上传一张你有权使用的成年人照片。不要上传原客人的截图、名人或未成年人。结果是一场新的虚构派对，不是源文件的换脸。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who is the Bby Wow guy?', zh: 'Bby Wow guy 是谁？' },
        a: {
          en: 'ViralReel does not identify him. The page describes the format: the party guest who bites the bread and stares. It does not host his clip.',
          zh: 'ViralReel 不指认他。这一页描述的是格式：咬面包并对视的那位派对客人。它不托管他的片子。',
        },
      },
      {
        q: { en: 'Can I put my face in his spot?', zh: '可以把我的脸放进他的位置吗？' },
        a: {
          en: 'Yes, as a new generation from your photo, not as an edit of his file. Use a photo you have permission to use.',
          zh: '可以，作为用你的照片新生成的一条，而不是剪他的文件。请使用你有权使用的照片。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow meme',
    slug: 'bby-wow-meme',
    title: {
      en: 'Bby Wow Meme – The Party Exit, and the AI Remake',
      zh: 'Bby Wow Meme：派对离场，以及 AI 重拍',
    },
    description: {
      en: 'bby wow meme: the bread bite, the deadpan stare, and the dance exit. ViralReel does not host the original meme file. It makes a fictional AI remake from one photo.',
      zh: 'bby wow meme：咬面包、面无表情的对视，以及跳舞离场。ViralReel 不托管原始梗文件。它用一张照片做虚构 AI 重拍。',
    },
    h1: { en: 'Bby Wow meme', zh: 'Bby Wow meme' },
    lead: {
      en: 'The Bby Wow meme on this page is the bread-bite party exit. ViralReel does not host the original file. It makes a fictional remake from one photo.',
      zh: '这一页上的 Bby Wow meme 是咬面包后的派对离场。ViralReel 不托管原片文件。它用一张照片做虚构重拍。',
    },
    guideTitle: {
      en: 'What the meme is',
      zh: '这个梗是什么',
    },
    body: {
      en: [
        'The bby wow meme that AI remakes copy is a four-beat joke. A lively party, a casual walk-in, a big bite, then a completely serious stare while chewing, closed by a dance exit. The song “BbY WOW” is what many posts play under it. The meme and the song are not the same object.',
        'This page is not an archive of the original post and not a download of the track. ViralReel stages a new fictional party from one photo. Add any trend sound on TikTok, Reels, or Shorts, and label the post as AI.',
      ],
      zh: [
        'AI 重拍在抄的 bby wow meme 是一个四拍笑话。热闹的派对、随意的入场、一大口，然后是嚼面包时完全严肃的对视，用跳舞离场收尾。很多帖子底下放的是歌《BbY WOW》。梗和这首歌不是同一个东西。',
        '这一页不是原帖的存档，也不是音轨的下载。ViralReel 用一张照片搭建一场新的虚构派对。在 TikTok、Reels 或 Shorts 上另加热梗原声，并把帖子标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Bby Wow meme the song?', zh: 'Bby Wow meme 就是那首歌吗？' },
        a: {
          en: 'No. The meme on this page is the party-exit clip. The song is a separate recording ViralReel does not license.',
          zh: '不是。这一页上的梗是派对离场那条片子。歌曲是另一条录音，ViralReel 不授权它。',
        },
      },
      {
        q: { en: 'Where is the original meme file?', zh: '原始梗文件在哪里？' },
        a: {
          en: 'Not on ViralReel. This site makes a new AI clip from your photo and does not rehost the source.',
          zh: '不在 ViralReel。本站用你的照片做一条新的 AI 短片，不转载源头文件。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow song',
    slug: 'bby-wow-song',
    title: {
      en: 'Bby Wow Song – ViralReel Makes the AI Video, Not the Track',
      zh: 'Bby Wow Song：ViralReel 做的是 AI 视频，不是歌曲',
    },
    description: {
      en: 'bby wow song: “BbY WOW” is a track by KAROL G, Judeline, and rusowsky. ViralReel does not sell or license it. The site makes an AI remake video of the party clip from one photo.',
      zh: 'bby wow song：《BbY WOW》是 KAROL G、Judeline 和 rusowsky 的歌。ViralReel 不出售也不授权它。本站用一张照片做派对短片的 AI 重拍视频。',
    },
    h1: { en: 'Bby Wow song', zh: 'Bby Wow song' },
    lead: {
      en: 'There is no Bby Wow song to download here. ViralReel makes the AI remake video from one photo, and it does not license a soundtrack.',
      zh: '这里没有可下载的 Bby Wow 歌曲。ViralReel 用一张照片做 AI 重拍视频，并且不授权配乐。',
    },
    guideTitle: {
      en: 'What to do if you searched for the song',
      zh: '如果你搜的是歌曲',
    },
    body: {
      en: [
        '“BbY WOW” is a song by KAROL G, Judeline, and rusowsky. A bby wow song search wants that recording, or the sound under the dance posts. ViralReel does not sell, stream, or license it, and it does not host “dime dime baby” as an audio file.',
        'If the clip you actually want is the party guest with a new face, that is the AI video. The template takes one photo and exports an MP4. Any trend audio stays in TikTok, Reels, or Shorts, under that platform’s music rules. ViralReel is not affiliated with the artists.',
      ],
      zh: [
        '《BbY WOW》是 KAROL G、Judeline 和 rusowsky 的歌。搜 bby wow song 想要的是这条录音，或舞蹈帖子底下的那段声音。ViralReel 不出售、不串流、不授权它，也不把「dime dime baby」当作音频文件托管。',
        '如果你真正想要的是派对客人换成一张新脸，那是 AI 视频。模板用一张照片，导出 MP4。热梗音频留在 TikTok、Reels 或 Shorts 里，受该平台的音乐规则约束。ViralReel 与这些歌手没有关系。',
      ],
    },
    steps: [
      {
        name: { en: 'Separate the song from the video', zh: '把歌曲和视频分开' },
        text: {
          en: 'BbY WOW is a recording by KAROL G, Judeline, and rusowsky. ViralReel does not license that song.',
          zh: 'BbY WOW 是 KAROL G、Judeline 和 rusowsky 的录音。ViralReel 不授权这首歌。',
        },
      },
      {
        name: { en: 'Make the AI video from one photo', zh: '用一张照片做 AI 视频' },
        text: {
          en: 'Open the Bby Wow template on ViralReel, upload one photo you have permission to use, and generate the fictional party clip.',
          zh: '在 ViralReel 打开 Bby Wow 模板，上传一张你有权使用的照片，生成虚构的派对短片。',
        },
      },
      {
        name: { en: 'Add audio on the platform', zh: '在平台里加音频' },
        text: {
          en: 'If you want a trend sound on the post, add it inside TikTok, Reels, or Shorts. ViralReel does not license that audio.',
          zh: '如果帖子需要热梗原声，在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Can I download the Bby Wow song here?', zh: '可以在这里下载 Bby Wow 的歌吗？' },
        a: {
          en: 'No. ViralReel does not sell or stream “BbY WOW.” The product is an AI video from one photo.',
          zh: '不能。ViralReel 不出售也不串流《BbY WOW》。产品是用一张照片做的 AI 视频。',
        },
      },
      {
        q: { en: 'Is ViralReel affiliated with KAROL G?', zh: 'ViralReel 和 KAROL G 有关系吗？' },
        a: {
          en: 'No. ViralReel is an independent template site. It is not affiliated with KAROL G, Judeline, or rusowsky.',
          zh: '没有。ViralReel 是独立的模板站。它与 KAROL G、Judeline 或 rusowsky 没有关系。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby ai',
    slug: 'dime-dime-baby-ai',
    title: {
      en: 'Dime Dime Baby AI – Not That TikTok; the Party Remake',
      zh: 'Dime Dime Baby AI：不是那条 TikTok，是派对重拍',
    },
    description: {
      en: 'dime dime baby ai: ViralReel does not host @bigbowee’s TikTok or license that sound. It makes the bread-bite party AI remake from one photo. Add any trend audio on the platform you post to.',
      zh: 'dime dime baby ai：ViralReel 不托管 @bigbowee 的 TikTok，也不授权那段声音。它用一张照片做咬面包派对的 AI 重拍。热梗音频在你发布的平台里另加。',
    },
    h1: { en: 'Dime dime baby AI', zh: 'Dime dime baby AI' },
    lead: {
      en: '“Dime dime baby” is the phrase on a dance TikTok, not a file here. ViralReel makes the bread-bite party remake from one photo and does not license that sound.',
      zh: '「Dime dime baby」是一条舞蹈 TikTok 上的说法，不是这里的文件。ViralReel 用一张照片做咬面包派对重拍，并且不授权那段声音。',
    },
    guideTitle: {
      en: 'That phrase is a post, not a download',
      zh: '这句话是一条帖子，不是下载',
    },
    body: {
      en: [
        '“Dime dime baby” is attached to @bigbowee’s dance clip on the BbY WOW sound, a post that passed 15 million views in the late-2026 wave. A dime dime baby ai search often wants that video, that audio, or an AI copy of the dance.',
        'ViralReel does not host that TikTok and does not license the audio. It also does not reproduce that choreography as an official dance. The AI video you can make is the party format: one photo, the bread bite, the stare, and the dance exit. If a post needs the trend sound, add it inside TikTok, Reels, or Shorts.',
        `The phrase is an alias of the Bby Wow template, not a second product. The sound, the bread-bite meme, and a new MP4 are three different files: ${EN_WHAT}. How to make and post one is ${EN_DIME_HOW}. The template is ${EN_HUB}.`,
      ],
      zh: [
        '「Dime dime baby」挂在 @bigbowee 配着 BbY WOW 原声的舞蹈帖上，那条在 2026 年下半年这波里播放超过 1500 万。搜 dime dime baby ai 常常是想要那条视频、那段音频，或那段舞的 AI 拷贝。',
        'ViralReel 不托管那条 TikTok，也不授权音频。它也不会把那段编舞做成官方舞蹈。你能做的 AI 视频是派对格式：一张照片、咬面包、对视和跳舞离场。如果帖子需要热梗原声，在 TikTok、Reels 或 Shorts 里另加。',
        `这句话是 Bby Wow 模板的别名，不是第二个产品。声音、咬面包梗和一条新的 MP4 是三个不同的文件：${ZH_WHAT}。制作和发布在 ${ZH_DIME_HOW}。模板在 ${ZH_HUB}。`,
      ],
    },
    steps: [
      {
        name: { en: 'This is not the dime dime baby TikTok', zh: '这不是 dime dime baby 那条 TikTok' },
        text: {
          en: 'ViralReel does not host @bigbowee’s clip and does not license the “dime dime baby” sound.',
          zh: 'ViralReel 不托管 @bigbowee 的片子，也不授权「dime dime baby」这段声音。',
        },
      },
      {
        name: { en: 'Make the party remake instead', zh: '改为做派对重拍' },
        text: {
          en: 'Upload one photo on the Bby Wow template and generate the fictional bread-bite exit.',
          zh: '在 Bby Wow 模板上传一张照片，生成虚构的咬面包离场。',
        },
      },
      {
        name: { en: 'Add the sound on the platform', zh: '在平台上加声音' },
        text: {
          en: 'Download the MP4. If you want the trend audio, add it in TikTok, Reels, or Shorts and label the post as AI.',
          zh: '下载 MP4。如果需要热梗音频，在 TikTok、Reels 或 Shorts 里另加，并把帖子标成 AI。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Can I download the dime dime baby video here?', zh: '可以在这里下载 dime dime baby 的视频吗？' },
        a: {
          en: 'No. ViralReel does not host that TikTok. The download is a separate party remake from your photo.',
          zh: '不能。ViralReel 不托管那条 TikTok。下载的是用你的照片另做的派对重拍。',
        },
      },
      {
        q: { en: 'Is “dime dime baby” included as audio?', zh: '「dime dime baby」会作为音频附上吗？' },
        a: {
          en: 'No. ViralReel does not license that sound. Add it in the app you post to, under that platform’s rules.',
          zh: '不会。ViralReel 不授权这段声音。请在发布的应用里、按该平台的规则另加。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow tiktok',
    slug: 'bby-wow-tiktok',
    title: {
      en: 'Bby Wow TikTok – ViralReel Does Not Host the Original',
      zh: 'Bby Wow TikTok：ViralReel 不托管原片',
    },
    description: {
      en: 'bby wow tiktok: ViralReel does not have the original TikTok file. It makes an AI remake MP4 from one photo that you can post to TikTok yourself, with that app’s sound and AI label.',
      zh: 'bby wow tiktok：ViralReel 没有原始 TikTok 文件。它用一张照片做 AI 重拍 MP4，你可以自己发到 TikTok，并使用该应用的原声和 AI 标注。',
    },
    h1: { en: 'Bby Wow TikTok', zh: 'Bby Wow TikTok' },
    lead: {
      en: 'ViralReel does not host the Bby Wow TikTok. It makes an AI remake MP4 from one photo, which you can post yourself.',
      zh: 'ViralReel 不托管 Bby Wow 的 TikTok。它用一张照片做 AI 重拍 MP4，你可以自己发布。',
    },
    guideTitle: {
      en: 'The TikTok is not a file on this site',
      zh: '那条 TikTok 不是本站上的文件',
    },
    body: {
      en: [
        'A bby wow tiktok search usually wants the source dance, the bread-bite post, or a copy of either. ViralReel does not store, sell, or reupload those TikToks. Look to the uploaders’ own posts if you need a source.',
        'What you can make here is a separate vertical MP4 of the party format. When you post that remake, add the trend sound from TikTok’s library and use TikTok’s AI label. ViralReel does not license the sound and is not an official TikTok account for the trend or the artists.',
      ],
      zh: [
        '搜 bby wow tiktok 通常是想要源舞蹈、咬面包那条帖子，或其中一份拷贝。ViralReel 不存储、不出售、也不转载那些 TikTok。如果你需要源头，去上传者自己的帖子。',
        '你在这里能做的是派对格式的另一条竖屏 MP4。发布这条重拍时，从 TikTok 的曲库加上热梗原声，并使用 TikTok 的 AI 标注。ViralReel 不授权这段声音，也不是这条趋势或这些歌手的官方 TikTok 账号。',
      ],
    },
    steps: [
      {
        name: { en: 'Do not expect the original TikTok', zh: '不要期待拿到原始 TikTok' },
        text: {
          en: 'ViralReel does not host or sell the Bby Wow TikToks. The sources stay with the uploaders.',
          zh: 'ViralReel 不托管也不出售 Bby Wow 的 TikTok。源头留在上传者那里。',
        },
      },
      {
        name: { en: 'Make a fictional remake instead', zh: '改为做一条虚构重拍' },
        text: {
          en: 'Upload one photo you have permission to use and generate a new party clip on the ViralReel template.',
          zh: '上传一张你有权使用的照片，在 ViralReel 模板上生成一条新的派对短片。',
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
        q: { en: 'Can I download the Bby Wow TikTok here?', zh: '可以在这里下载 Bby Wow 的 TikTok 吗？' },
        a: {
          en: 'No. ViralReel does not provide the original TikTok file. The download is an AI remake MP4 from your photo.',
          zh: '不能。ViralReel 不提供原始 TikTok 文件。下载的是用你的照片做的 AI 重拍 MP4。',
        },
      },
      {
        q: { en: 'Is ViralReel the official TikTok?', zh: 'ViralReel 是官方 TikTok 吗？' },
        a: {
          en: 'No. ViralReel is an independent AI video template site. It is not an official account for the artists or the trend.',
          zh: '不是。ViralReel 是独立的 AI 视频模板站。它不是歌手或这条趋势的官方账号。',
        },
      },
    ],
  },
  {
    keyword: 'quince concha meme',
    slug: 'quince-concha-meme',
    title: {
      en: 'Quince Concha Meme – AI Remake of the Bread Bite',
      zh: 'Quince Concha Meme：咬面包那段的 AI 重拍',
    },
    description: {
      en: 'quince concha meme: the quinceañera guest who bites a concha and stares. ViralReel does not host that original party video. It makes a fictional AI remake from one photo.',
      zh: 'quince concha meme：在成人礼派对上咬一口 concha 然后对视的客人。ViralReel 不托管那场派对的原视频。它用一张照片做虚构 AI 重拍。',
    },
    h1: { en: 'Quince concha meme', zh: 'Quince concha meme' },
    lead: {
      en: 'The quince concha meme is the party guest biting a concha. ViralReel does not host that video. It makes a fictional remake from one photo.',
      zh: 'Quince concha meme 是咬一口 concha 的派对客人。ViralReel 不托管该视频。它用一张照片做虚构重拍。',
    },
    guideTitle: {
      en: 'The concha bite is the joke, not a file here',
      zh: '咬 concha 是笑点，不是这里的文件',
    },
    body: {
      en: [
        'A quince concha meme search points at the quinceañera party clip: a guest walks up, takes a big bite of a concha — the round sweet bread — and stares into the camera while chewing. That is the same bread-bite beat people later paired with the Bby Wow sound. ViralReel does not host the quince footage.',
        'The template stages a fictional version of that exit from one photo. It does not film a quinceañera, does not name the original guest, and does not include the song. Use a photo you have permission to use, download the MP4, and label it as AI when you post.',
      ],
      zh: [
        '搜 quince concha meme 指的是成人礼派对那条片子：客人走上前，咬一大口 concha——那种圆形甜面包——然后嚼着直视镜头。这就是后来被配上 Bby Wow 原声的同一个咬面包节拍。ViralReel 不托管那场 quince 的画面。',
        '模板用一张照片搭建这个离场的虚构版本。它不拍摄成人礼，不点名原来的客人，也不附带歌曲。请使用你有权使用的照片，下载 MP4，发布时标注为 AI。',
      ],
    },
    steps: [
      {
        name: { en: 'This is not the quince video', zh: '这不是那场 quince 的视频' },
        text: {
          en: 'ViralReel does not host the original quinceañera clip or a download of the concha bite.',
          zh: 'ViralReel 不托管原来的成人礼片子，也不提供咬 concha 那段的下载。',
        },
      },
      {
        name: { en: 'Make a fictional remake', zh: '做一条虚构重拍' },
        text: {
          en: 'Upload one photo on the Bby Wow template. The generator keeps the walk, the bite, the stare, and the dance exit.',
          zh: '在 Bby Wow 模板上传一张照片。生成器留着入场、咬一口、对视和跳舞离场。',
        },
      },
      {
        name: { en: 'Do not present it as the original party', zh: '不要把它当成原来的那场派对' },
        text: {
          en: 'Download the MP4, add any trend sound in the posting app, and mark it as AI-generated. ViralReel does not license that audio.',
          zh: '下载 MP4，在发布的应用里另加热梗原声，并标注为 AI 生成。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Is the quince concha meme on ViralReel?', zh: 'quince concha meme 的原片在 ViralReel 上吗？' },
        a: {
          en: 'The original party video is not. ViralReel makes a new AI clip of that bread-bite format from your photo.',
          zh: '原派对视频不在。ViralReel 用你的照片新做一条这个咬面包格式的 AI 短片。',
        },
      },
      {
        q: { en: 'Do you include the concha and the song?', zh: '你们会带上 concha 和歌曲吗？' },
        a: {
          en: 'The staged scene includes the bread bite. The song is not in the file. ViralReel does not license “BbY WOW” or any other track.',
          zh: '搭好的场景包含咬面包。歌曲不在文件里。ViralReel 不授权《BbY WOW》或任何其他音轨。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby',
    slug: 'dime-dime-baby',
    title: {
      en: 'Dime Dime Baby – Sound Alias for the Bby Wow Template',
      zh: 'Dime Dime Baby：Bby Wow 模板的声音别名',
    },
    description: {
      en: 'dime dime baby: a nickname for the BbY WOW sound and for one dance TikTok. ViralReel does not host that post or license the song. The alias points at the Bby Wow party remake: one photo, Suit Original, White Tee, or Staff Polo.',
      zh: 'dime dime baby：BbY WOW 原声和一条舞蹈 TikTok 的别名。ViralReel 不托管那条帖子，也不授权歌曲。这个别名指向 Bby Wow 派对重拍：一张照片，西装原版、白 T 派对版或黑 Polo 版。',
    },
    h1: { en: 'Dime dime baby', zh: 'Dime dime baby' },
    lead: {
      en: '“Dime dime baby” is a nickname for the BbY WOW sound and for one dance TikTok. On ViralReel it is an alias of the Bby Wow template, not a second product and not a song download.',
      zh: '「Dime dime baby」是 BbY WOW 原声和一条舞蹈 TikTok 的别名。在 ViralReel 上，它是 Bby Wow 模板的别名，不是第二个产品，也不是歌曲下载。',
    },
    guideTitle: {
      en: 'Three things this phrase points at',
      zh: '这句话指向的三样东西',
    },
    body: {
      en: [
        'A dime dime baby search mixes three files. The first is the song “BbY WOW” by KAROL G, Judeline, and rusowsky, and the nickname people type when they want that sound. The second is @bigbowee’s dance TikTok on that sound, a post that passed 15 million views in the late-2026 wave. The third is the older bread-bite party clip: walk in, bite a sweet bread, stare while chewing, dance away. People later played the same sound under that party exit.',
        'ViralReel does not sell the song, does not host the dance TikTok, and does not reupload the party footage. The product under this alias is a new fictional party MP4 from one photo. Suit Original, White Tee, and Staff Polo are three outfits of the same four beats. The page opens on 9:16. Do not upload minors, celebrities, or a screenshot of the original guest.',
        `The citeable split is ${EN_WHAT}. The make-and-post steps are ${EN_DIME_HOW}. The template itself is ${EN_HUB}. Add the trend sound inside TikTok, Reels, or Shorts, and turn on the AI label. ViralReel does not license that audio and is not affiliated with the artists or the original creators.`,
      ],
      zh: [
        '搜 dime dime baby 会把三个文件混在一起。第一个是 KAROL G、Judeline 和 rusowsky 的歌《BbY WOW》，以及大家想要这段声音时打出来的别名。第二个是 @bigbowee 配着这段原声的舞蹈 TikTok，那条在 2026 年下半年这波里播放超过 1500 万。第三个是更早的咬面包派对片子：入场、咬一口甜面包、嚼着对视、跳舞离场。后来有人把同一段声音配在这段派对离场下面。',
        'ViralReel 不出售这首歌，不托管那条舞蹈 TikTok，也不转载派对原片。这个别名底下的产品，是用一张照片做的新的虚构派对 MP4。西装原版、白 T 派对版和黑 Polo 版是同一组四拍的三种穿着。页面默认 9:16。不要上传未成年人、名人或原客人的截图。',
        `可引用的拆分在 ${ZH_WHAT}。制作和发布的步骤在 ${ZH_DIME_HOW}。模板本身在 ${ZH_HUB}。在 TikTok、Reels 或 Shorts 里另加热梗原声，并打开 AI 标注。ViralReel 不授权这段音频，也与歌手或原作者没有关系。`,
      ],
    },
    steps: [
      {
        name: { en: 'Separate the three files', zh: '先把三个文件分开' },
        text: {
          en: 'Dime dime baby is a sound nickname and a dance TikTok. The bread-bite party clip is a different file. ViralReel hosts neither original.',
          zh: 'Dime dime baby 是声音别名和一条舞蹈 TikTok。咬面包派对片子是另一个文件。ViralReel 不托管其中任何原片。',
        },
      },
      {
        name: { en: 'Open the Bby Wow template', zh: '打开 Bby Wow 模板' },
        text: {
          en: 'Upload one photo you have permission to use. Pick Suit Original, White Tee, or Staff Polo, and generate a new 9:16 MP4.',
          zh: '上传一张你有权使用的照片。选西装原版、白 T 派对版或黑 Polo 版，生成一条新的 9:16 MP4。',
        },
      },
      {
        name: { en: 'Add the sound on the platform', zh: '在平台上加声音' },
        text: {
          en: 'Download the MP4. Add the trend sound in TikTok, Reels, or Shorts and turn on the AI label. ViralReel does not license that audio.',
          zh: '下载 MP4。在 TikTok、Reels 或 Shorts 里加热梗原声并打开 AI 标注。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Is dime dime baby a different template from Bby Wow?', zh: 'Dime dime baby 是和 Bby Wow 不同的模板吗？' },
        a: {
          en: 'No. It is a search alias for the same Bby Wow template. ViralReel does not run a second generator under that name.',
          zh: '不是。它是同一个 Bby Wow 模板的搜索别名。ViralReel 没有用这个名字另开一个生成器。',
        },
      },
      {
        q: { en: 'Can I download dime dime baby here?', zh: '可以在这里下载 dime dime baby 吗？' },
        a: {
          en: 'Not the song and not the TikTok. The download is a new party remake from your photo.',
          zh: '不是歌曲，也不是那条 TikTok。下载的是用你的照片做的新派对重拍。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby tiktok',
    slug: 'dime-dime-baby-tiktok',
    title: {
      en: 'Dime Dime Baby TikTok – ViralReel Does Not Host It',
      zh: 'Dime Dime Baby TikTok：ViralReel 不托管原片',
    },
    description: {
      en: 'dime dime baby tiktok: ViralReel does not host @bigbowee’s TikTok or sell that sound. Make a separate party-remake MP4 from one photo, then post it on TikTok with the in-app sound and the AI label.',
      zh: 'dime dime baby tiktok：ViralReel 不托管 @bigbowee 的 TikTok，也不出售那段声音。用一张照片另做一条派对重拍 MP4，再在 TikTok 上用应用内原声和 AI 标注发布。',
    },
    h1: { en: 'Dime dime baby TikTok', zh: 'Dime dime baby TikTok' },
    lead: {
      en: 'ViralReel does not host the dime dime baby TikTok. It makes a separate party-remake MP4 you can post to TikTok yourself, with that app’s sound and AI label.',
      zh: 'ViralReel 不托管 dime dime baby 那条 TikTok。它另做一条派对重拍 MP4，你可以自己发到 TikTok，并使用该应用的原声和 AI 标注。',
    },
    guideTitle: {
      en: 'The TikTok stays on TikTok',
      zh: '那条 TikTok 留在 TikTok',
    },
    body: {
      en: [
        'Dime dime baby tiktok points at @bigbowee’s dance post on the BbY WOW sound. That is a file on TikTok. ViralReel does not store it, sell it, or reupload it, and it is not an official TikTok account for the trend or for KAROL G, Judeline, or rusowsky.',
        'What you can take to TikTok is a different vertical MP4: the bread-bite party exit, generated from one photo on the Bby Wow template. When you upload that remake, pick the trend sound from TikTok’s library and use TikTok’s AI-generated label. The sound is not inside the ViralReel download.',
        `Posting steps, including the AI label, are ${EN_DIME_HOW}. Which file is the TikTok and which file is the meme is ${EN_WHAT}. Start the remake at ${EN_HUB}.`,
      ],
      zh: [
        'Dime dime baby tiktok 指的是 @bigbowee 配着 BbY WOW 原声的舞蹈帖。那是 TikTok 上的文件。ViralReel 不存储、不出售、也不转载它，而且不是这条趋势或 KAROL G、Judeline、rusowsky 的官方 TikTok 账号。',
        '你可以带到 TikTok 的是另一条竖屏 MP4：用一张照片在 Bby Wow 模板上生成的咬面包派对离场。上传这条重拍时，从 TikTok 曲库选热梗原声，并使用 TikTok 的 AI 生成标注。这段声音不在 ViralReel 的下载文件里。',
        `包含 AI 标注的发布步骤在 ${ZH_DIME_HOW}。哪一个文件是 TikTok、哪一个是梗，在 ${ZH_WHAT}。重拍从 ${ZH_HUB} 开始。`,
      ],
    },
    steps: [
      {
        name: { en: 'Do not expect the original TikTok', zh: '不要期待拿到原始 TikTok' },
        text: {
          en: 'ViralReel does not host the dime dime baby TikTok. The source stays with the uploader.',
          zh: 'ViralReel 不托管 dime dime baby 那条 TikTok。源头留在上传者那里。',
        },
      },
      {
        name: { en: 'Make a party remake to post', zh: '做一条用来发布的派对重拍' },
        text: {
          en: 'Upload one photo on the Bby Wow template and download a new 9:16 MP4. It is not a copy of that TikTok.',
          zh: '在 Bby Wow 模板上传一张照片，下载一条新的 9:16 MP4。它不是那条 TikTok 的拷贝。',
        },
      },
      {
        name: { en: 'Use TikTok’s sound and AI label', zh: '用 TikTok 的原声和 AI 标注' },
        text: {
          en: 'Upload the MP4 in TikTok, add the trend sound from that app, and turn on the AI label. ViralReel does not license the audio.',
          zh: '在 TikTok 上传这条 MP4，从该应用加热梗原声，并打开 AI 标注。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Where is the dime dime baby TikTok file?', zh: 'dime dime baby 的 TikTok 文件在哪里？' },
        a: {
          en: 'On TikTok, with the uploader. ViralReel does not provide that file.',
          zh: '在 TikTok 上，在上传者那里。ViralReel 不提供那个文件。',
        },
      },
      {
        q: { en: 'Will TikTok’s sound be baked into the MP4?', zh: 'TikTok 的原声会烧进 MP4 吗？' },
        a: {
          en: 'No. Add it from TikTok’s library after you upload the remake, and label the post as AI.',
          zh: '不会。上传重拍之后，从 TikTok 曲库另加，并把帖子标成 AI。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby meme',
    slug: 'dime-dime-baby-meme',
    title: {
      en: 'Dime Dime Baby Meme – Dance Caption, or the Bread Bite',
      zh: 'Dime Dime Baby Meme：舞蹈标题，还是咬面包',
    },
    description: {
      en: 'dime dime baby meme: two jokes share the nickname. One is a dance caption. The other is the bread-bite party exit. ViralReel remakes the party exit from one photo and does not host the original meme.',
      zh: 'dime dime baby meme：两个笑话共用这个别名。一个是舞蹈标题。另一个是咬面包后的派对离场。ViralReel 用一张照片重拍派对离场，不托管原始梗。',
    },
    h1: { en: 'Dime dime baby meme', zh: 'Dime dime baby meme' },
    lead: {
      en: 'The dime dime baby meme name covers two jokes that share a sound: a dance caption, and the bread-bite party exit. ViralReel remakes the party exit from one photo. It does not archive the original meme.',
      zh: 'Dime dime baby meme 这个名字盖住了共用一段声音的两个笑话：一个舞蹈标题，以及咬面包后的派对离场。ViralReel 用一张照片重拍派对离场。它不存档原始梗。',
    },
    guideTitle: {
      en: 'Which meme this page remakes',
      zh: '这一页重拍的是哪一个梗',
    },
    body: {
      en: [
        'People say dime dime baby meme for the caption on the dance posts, and also for the party guest who bites a round sweet bread and stares. Those are not the same clip. The dance posts are the late-2026 BbY WOW choreography. The bread bite is older: a quince-style party video from June 2025 that came back in October 2026 under that sound.',
        'ViralReel’s remake is the party joke, not a saved copy of either original. The recognizable order is walk in, bite, stare, dance away. One photo replaces the lead. Suit Original is the black-suit look, White Tee is the casual party look, and Staff Polo is the deadpan staff look. None of those cards is the source meme.',
        `A short page for the party meme under the Bby Wow name is https://www.viralreel.app/bby-wow-meme. The quince wording is https://www.viralreel.app/quince-concha-meme. The three-file explainer is ${EN_WHAT}. Make the remake at ${EN_HUB}, then follow ${EN_DIME_HOW} when you post.`,
      ],
      zh: [
        '大家说 dime dime baby meme，有时指舞蹈帖上的那句标题，有时指咬一口圆形甜面包然后对视的派对客人。这不是同一条片子。舞蹈帖是 2026 年下半年的 BbY WOW 编舞。咬面包更早：2025 年 6 月的一段 quince 风格派对视频，2026 年 10 月配着这段声音翻红。',
        'ViralReel 的重拍是派对这个笑话，不是两条原片中任何一条的存档。能认出来的顺序是入场、咬一口、对视、跳舞离场。一张照片换掉主角。西装原版是黑西装造型，白 T 派对版是随意的派对造型，黑 Polo 版是面无表情的工作人员造型。这些卡片都不是源梗。',
        `用 Bby Wow 这个名字讲派对梗的短页是 https://www.viralreel.app/zh/bby-wow-meme。quince 的说法在 https://www.viralreel.app/zh/quince-concha-meme。三个文件的说明在 ${ZH_WHAT}。在 ${ZH_HUB} 做重拍，发布时按 ${ZH_DIME_HOW}。`,
      ],
    },
    steps: [
      {
        name: { en: 'Pick which meme you mean', zh: '先确定你说的是哪个梗' },
        text: {
          en: 'The dance caption and the bread-bite exit are different clips that share a sound. ViralReel remakes the bread bite.',
          zh: '舞蹈标题和咬面包离场是共用一段声音的不同片子。ViralReel 重拍的是咬面包。',
        },
      },
      {
        name: { en: 'Stage a new party, not a reupload', zh: '搭一场新派对，不要转载' },
        text: {
          en: 'Upload one photo. The template keeps the four beats and does not hand over the original meme file.',
          zh: '上传一张照片。模板留着四个节拍，不会把原始梗文件交给你。',
        },
      },
      {
        name: { en: 'Label the post as AI', zh: '把帖子标成 AI' },
        text: {
          en: 'Download the MP4, add a trend sound in the posting app, and turn on the AI label. ViralReel does not license the audio.',
          zh: '下载 MP4，在发布的应用里加热梗原声，并打开 AI 标注。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Is the dime dime baby meme the bread bite?', zh: 'dime dime baby meme 就是咬面包吗？' },
        a: {
          en: 'Sometimes people mean that, and sometimes they mean the dance caption. This page remakes the bread-bite party exit. It does not host either original.',
          zh: '有时指那个，有时指舞蹈标题。这一页重拍的是咬面包后的派对离场。它不托管任何一条原片。',
        },
      },
      {
        q: { en: 'Do you keep a meme archive?', zh: '你们有梗的存档吗？' },
        a: {
          en: 'No. ViralReel generates a new clip from your photo. The source posts stay with their uploaders.',
          zh: '没有。ViralReel 用你的照片生成一条新片子。源帖留在上传者那里。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby song',
    slug: 'dime-dime-baby-song',
    title: {
      en: 'Dime Dime Baby Song – A Nickname, Not a Download',
      zh: 'Dime Dime Baby Song：是别名，不是下载',
    },
    description: {
      en: 'dime dime baby song: the phrase is a nickname for “BbY WOW” by KAROL G, Judeline, and rusowsky. ViralReel does not sell or license that recording. It makes an AI party video from one photo.',
      zh: 'dime dime baby song：这句话是 KAROL G、Judeline 和 rusowsky 的《BbY WOW》的别名。ViralReel 不出售也不授权这条录音。它用一张照片做 AI 派对视频。',
    },
    h1: { en: 'Dime dime baby song', zh: 'Dime dime baby song' },
    lead: {
      en: 'There is no dime dime baby song to download here. The phrase is a nickname for the BbY WOW sound. ViralReel makes the AI video and does not license that recording.',
      zh: '这里没有可下载的 dime dime baby 歌曲。这句话是 BbY WOW 原声的别名。ViralReel 做的是 AI 视频，并且不授权这条录音。',
    },
    guideTitle: {
      en: 'The song search, answered without a file',
      zh: '歌曲搜索：不提供文件的回答',
    },
    body: {
      en: [
        'Dime dime baby song is not a separate single with that title on ViralReel. Searchers want the sound under the dance posts. That sound is “BbY WOW,” by KAROL G, Judeline, and rusowsky. The page that uses the song’s own name is https://www.viralreel.app/bby-wow-song. Neither page streams the track.',
        'ViralReel does not license the studio recording, does not export it as an audio file, and is not affiliated with the artists. A generation may follow an admin reference, generate other audio, or export a quiet picture. Treat the download as picture. If the post needs the trend sound, add it from the TikTok, Reels, or Shorts library.',
        `The video people pair with that nickname is the party remake at ${EN_HUB}. One photo, 9:16, Suit Original or White Tee or Staff Polo. The explainer that keeps the song apart from the meme and the MP4 is ${EN_WHAT}. Posting steps are ${EN_DIME_HOW}.`,
      ],
      zh: [
        'Dime dime baby song 在 ViralReel 上不是一首用这个标题单独发行的歌。搜索的人要的是舞蹈帖底下的那段声音。那段声音是 KAROL G、Judeline 和 rusowsky 的《BbY WOW》。用歌曲本名的页面是 https://www.viralreel.app/zh/bby-wow-song。两个页面都不串流这条音轨。',
        'ViralReel 不授权录音室录音，不把它导出成音频文件，也与这些歌手没有关系。一次生成可能跟随管理员参考音轨，也可能生成别的声音，或导出安静的画面。把下载当成画面。如果帖子需要热梗原声，从 TikTok、Reels 或 Shorts 的曲库另加。',
        `大家拿来配这个别名的视频，是 ${ZH_HUB} 上的派对重拍。一张照片，9:16，西装原版、白 T 派对版或黑 Polo 版。把歌曲、梗和 MP4 分开的说明在 ${ZH_WHAT}。发布步骤在 ${ZH_DIME_HOW}。`,
      ],
    },
    steps: [
      {
        name: { en: 'Treat it as a nickname', zh: '把它当成别名' },
        text: {
          en: '“Dime dime baby” is how people search the BbY WOW sound. ViralReel does not license that recording.',
          zh: '「Dime dime baby」是大家搜索 BbY WOW 原声的方式。ViralReel 不授权这条录音。',
        },
      },
      {
        name: { en: 'Make the picture on ViralReel', zh: '在 ViralReel 做画面' },
        text: {
          en: 'Upload one photo on the Bby Wow template and download the party MP4. The file is not a soundtrack.',
          zh: '在 Bby Wow 模板上传一张照片，下载派对 MP4。这个文件不是配乐。',
        },
      },
      {
        name: { en: 'Add audio in the posting app', zh: '在发布的应用里加音频' },
        text: {
          en: 'If you want the trend sound, add it inside TikTok, Reels, or Shorts, then label the post as AI.',
          zh: '如果需要热梗原声，在 TikTok、Reels 或 Shorts 里另加，然后把帖子标成 AI。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Is “dime dime baby” the official song title?', zh: '「dime dime baby」是官方歌名吗？' },
        a: {
          en: 'It is the nickname on the dance posts. The recording people mean is “BbY WOW” by KAROL G, Judeline, and rusowsky. ViralReel does not license it.',
          zh: '它是舞蹈帖上的别名。大家指的录音是 KAROL G、Judeline 和 rusowsky 的《BbY WOW》。ViralReel 不授权它。',
        },
      },
      {
        q: { en: 'Is ViralReel affiliated with KAROL G?', zh: 'ViralReel 和 KAROL G 有关系吗？' },
        a: {
          en: 'No. ViralReel is an independent template site. It is not affiliated with KAROL G, Judeline, or rusowsky.',
          zh: '没有。ViralReel 是独立的模板站。它与 KAROL G、Judeline 或 rusowsky 没有关系。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby dance',
    slug: 'dime-dime-baby-dance',
    title: {
      en: 'Dime Dime Baby Dance – Not the Choreography Class',
      zh: 'Dime Dime Baby Dance：不是编舞课',
    },
    description: {
      en: 'dime dime baby dance: ViralReel does not teach @bigbowee’s choreography or host that dance video. It makes the bread-bite party exit from one photo, including the dance-away beat. No song license.',
      zh: 'dime dime baby dance：ViralReel 不教 @bigbowee 的编舞，也不托管那段舞蹈视频。它用一张照片做咬面包派对离场，包含跳舞离场那一拍。没有歌曲授权。',
    },
    h1: { en: 'Dime dime baby dance', zh: 'Dime dime baby dance' },
    lead: {
      en: 'Dime dime baby dance usually means the bouncy TikTok choreography. ViralReel does not teach that dance. The clip it makes is the bread-bite party exit, including the dance-away beat.',
      zh: 'Dime dime baby dance 通常指 TikTok 上那段弹跳舞。ViralReel 不教那段舞。它做的片子是咬面包后的派对离场，包含跳舞离场那一拍。',
    },
    guideTitle: {
      en: 'Two dances, one product',
      zh: '两种舞，一个产品',
    },
    body: {
      en: [
        'Dime dime baby dance is the search for the choreography that spread with the BbY WOW sound: @bigbowee’s post, later dance-crew versions, and KAROL G’s own October clip with her crew. ViralReel does not host those videos and does not run a dance tutorial.',
        'The dance inside a ViralReel file is the last beat of the party format. The lead walks in, bites the bread, holds the stare, and dances back into the room. That exit is pre-built. You do not describe the steps in a prompt, and you do not upload a video of the original dancer. One still photo of an adult you have permission to use is the input.',
        `The Bby Wow dance landing, under the other name, is https://www.viralreel.app/bby-wow-ai-dance. The explainer is ${EN_WHAT}. Photo and posting steps are ${EN_DIME_HOW}. Open the template at ${EN_HUB}.`,
      ],
      zh: [
        'Dime dime baby dance 搜的是跟着 BbY WOW 原声传开的那段编舞：@bigbowee 的帖子、后来的舞团版本，以及 KAROL G 十月和团队跳的那条。ViralReel 不托管这些视频，也不开舞蹈教程。',
        'ViralReel 文件里的舞，是派对格式的最后一拍。主角入场、咬面包、保持对视，然后跳回房间。这段离场是预设的。你不用在提示词里描述舞步，也不用上传原舞者的视频。输入是一张你有权使用的成年人静帧照片。',
        `用另一个名字讲 Bby Wow 舞蹈的页面是 https://www.viralreel.app/zh/bby-wow-ai-dance。说明在 ${ZH_WHAT}。照片和发布步骤在 ${ZH_DIME_HOW}。模板在 ${ZH_HUB}。`,
      ],
    },
    steps: [
      {
        name: { en: 'This is not a choreography download', zh: '这不是编舞下载' },
        text: {
          en: 'ViralReel does not teach the dime dime baby dance and does not host the dance TikTok.',
          zh: 'ViralReel 不教 dime dime baby 那段舞，也不托管那条舞蹈 TikTok。',
        },
      },
      {
        name: { en: 'Generate the party exit', zh: '生成派对离场' },
        text: {
          en: 'One photo on the Bby Wow template. The dance in the file is the exit beat, not the official routine.',
          zh: '在 Bby Wow 模板上传一张照片。文件里的舞是离场节拍，不是官方舞步。',
        },
      },
      {
        name: { en: 'Add the sound when you post', zh: '发布时再加声音' },
        text: {
          en: 'Download the MP4 and add the trend sound in TikTok, Reels, or Shorts. Label the post as AI. ViralReel does not license the audio.',
          zh: '下载 MP4，在 TikTok、Reels 或 Shorts 里加热梗原声。把帖子标成 AI。ViralReel 不授权这段音频。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Will the AI copy the viral dance moves?', zh: 'AI 会复制那支爆火的舞吗？' },
        a: {
          en: 'No. The template performs the party exit: walk, bite, stare, dance away. It is not a class in the other choreography.',
          zh: '不会。模板做的是派对离场：入场、咬一口、对视、跳舞离开。它不是另一套编舞的课程。',
        },
      },
      {
        q: { en: 'Do I upload a dance video as the reference?', zh: '要把舞蹈视频当参考上传吗？' },
        a: {
          en: 'No. Upload one photo. Do not upload the original dancer, a celebrity, or a minor.',
          zh: '不用。上传一张照片。不要上传原舞者、名人或未成年人。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby ai video',
    slug: 'dime-dime-baby-ai-video',
    title: {
      en: 'Dime Dime Baby AI Video – The MP4, Not the TikTok',
      zh: 'Dime Dime Baby AI 视频：是 MP4，不是那条 TikTok',
    },
    description: {
      en: 'dime dime baby ai video: ViralReel exports a new party MP4 from one photo. It is not @bigbowee’s TikTok, not a GIF, and not a licensed copy of the song. 9:16 by default.',
      zh: 'dime dime baby ai video：ViralReel 用一张照片导出一条新的派对 MP4。它不是 @bigbowee 的 TikTok，不是 GIF，也不是这首歌的授权拷贝。默认 9:16。',
    },
    h1: { en: 'Dime dime baby AI video', zh: 'Dime dime baby AI 视频' },
    lead: {
      en: 'A dime dime baby AI video on ViralReel is a new MP4 of the bread-bite party, made from one photo. It is not a download of the dance TikTok.',
      zh: 'ViralReel 上的 dime dime baby AI 视频，是用一张照片做的咬面包派对新 MP4。它不是那条舞蹈 TikTok 的下载。',
    },
    guideTitle: {
      en: 'What file you actually download',
      zh: '你实际下载的是什么文件',
    },
    body: {
      en: [
        'Dime dime baby ai video is the file question. The answer is an MP4 of a fictional party: the lead crosses the floor, bites the bread, stares, and dances off. The recognizable joke is the serious chew in a lively room. ViralReel builds that from your photo. It does not hand over the dance TikTok that made the phrase famous.',
        'Leave the ratio on 9:16. Pick Suit Original, White Tee, or Staff Polo before you generate, and read the credit cost the page shows. Paid packs and monthly plans export without a ViralReel watermark. The file is the picture. It is not a separate audio track named dime dime baby.',
        `The same download described as Bby Wow is https://www.viralreel.app/bby-wow-ai-video. How to make it and post it with the in-app sound is ${EN_DIME_HOW}. What the phrase means is ${EN_WHAT}. The generator page is ${EN_HUB}.`,
      ],
      zh: [
        'Dime dime baby ai video 问的是文件。答案是一条虚构派对的 MP4：主角穿过舞池、咬面包、对视、跳舞离开。能认出来的笑点是热闹房间里那口严肃的咀嚼。ViralReel 用你的照片搭出这条。它不会把让这句话出名的舞蹈 TikTok 交给你。',
        '画幅保持 9:16。生成前选西装原版、白 T 派对版或黑 Polo 版，并看清页面显示的积分。付费积分包和月付方案导出时没有 ViralReel 水印。文件是画面。它不是一条名叫 dime dime baby 的独立音轨。',
        `用 Bby Wow 来描述的同一份下载在 https://www.viralreel.app/zh/bby-wow-ai-video。如何制作并配上应用内原声发布，在 ${ZH_DIME_HOW}。这句话是什么意思，在 ${ZH_WHAT}。生成器页面是 ${ZH_HUB}。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the dime dime baby AI video the original clip?', zh: 'dime dime baby AI 视频是原片吗？' },
        a: {
          en: 'No. It is a new MP4 from your photo. ViralReel does not reupload the dance TikTok or the party source.',
          zh: '不是。它是用你的照片做的新 MP4。ViralReel 不转载舞蹈 TikTok 或派对源片。',
        },
      },
      {
        q: { en: 'What do I download?', zh: '我下载到什么？' },
        a: {
          en: 'An MP4. Not the original TikTok, not a GIF, and not the song.',
          zh: '一条 MP4。不是原始 TikTok，不是 GIF，也不是歌曲。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby original',
    slug: 'dime-dime-baby-original',
    title: {
      en: 'Dime Dime Baby Original – Three Files, None Hosted Here',
      zh: 'Dime Dime Baby Original：三个文件，这里都不托管',
    },
    description: {
      en: 'dime dime baby original: the song, @bigbowee’s TikTok, or the June 2025 bread-bite clip. ViralReel hosts none of them. Suit Original is an outfit on the template, not the source file.',
      zh: 'dime dime baby original：歌曲、@bigbowee 的 TikTok，或 2025 年 6 月的咬面包片子。ViralReel 都不托管。西装原版是模板上的一套穿着，不是源文件。',
    },
    h1: { en: 'Dime dime baby original', zh: 'Dime dime baby original' },
    lead: {
      en: '“Original” is three different files, and ViralReel hosts none of them. Suit Original is an outfit name on the template, not the source video.',
      zh: '「原版」是三个不同的文件，ViralReel 都不托管。西装原版是模板上的一套穿着名称，不是源视频。',
    },
    guideTitle: {
      en: 'Which original you might mean',
      zh: '你可能指的是哪一个原版',
    },
    body: {
      en: [
        'Dime dime baby original splits three ways. One is the recording “BbY WOW.” One is @bigbowee’s dance TikTok, the post the nickname stuck to. One is the bread-bite guest, an older quince-style party clip first posted in June 2025 and paired with that sound again in October 2026. ViralReel does not identify that guest and does not rehost any of the three.',
        'On the template, Suit Original means the black suit, white shirt, and black tie in the pink party light. It is the outfit people recognize first. It is not a toggle that fetches the source file. White Tee and Staff Polo are the other two outfits of the same four beats.',
        `If you want the new fictional clip, open ${EN_HUB} and upload one photo you have permission to use. The write-up of the three files is ${EN_WHAT}. Posting the result is ${EN_DIME_HOW}. The party-guest page, under the other name, is https://www.viralreel.app/bby-wow-guy.`,
      ],
      zh: [
        'Dime dime baby original 可以拆成三条。一条是录音《BbY WOW》。一条是 @bigbowee 的舞蹈 TikTok，别名就是贴在那条帖子上的。一条是咬面包的客人，更早的 quince 风格派对片子，2025 年 6 月首次发布，2026 年 10 月再次配上这段声音。ViralReel 不指认那位客人，也不转载这三条中的任何一条。',
        '在模板上，西装原版指的是粉紫灯光里的黑西装、白衬衫和黑领带。这是大家最先认出来的穿着。它不是一个用来取回源文件的开关。白 T 派对版和黑 Polo 版是同一组四拍的另外两套穿着。',
        `如果你要的是新的虚构短片，打开 ${ZH_HUB}，上传一张你有权使用的照片。三个文件的说明在 ${ZH_WHAT}。发布成片在 ${ZH_DIME_HOW}。用另一个名字讲派对客人的页面是 https://www.viralreel.app/zh/bby-wow-guy。`,
      ],
    },
    steps: [
      {
        name: { en: 'Name the file you wanted', zh: '先说出你要的是哪个文件' },
        text: {
          en: 'Song, dance TikTok, or the June 2025 party clip. ViralReel hosts none of those originals.',
          zh: '歌曲、舞蹈 TikTok，或 2025 年 6 月的派对片子。这些原片 ViralReel 都不托管。',
        },
      },
      {
        name: { en: 'Read Suit Original as an outfit', zh: '把西装原版读成一套穿着' },
        text: {
          en: 'Suit Original is the black-suit look on the template. It does not download the source video.',
          zh: '西装原版是模板上的黑西装造型。它不会下载源视频。',
        },
      },
      {
        name: { en: 'Generate a new clip instead', zh: '改为生成一条新片子' },
        text: {
          en: 'Upload one photo, download the MP4, and add any trend sound in the posting app. Label it as AI.',
          zh: '上传一张照片，下载 MP4，在发布的应用里另加热梗原声。把它标成 AI。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Does Suit Original mean the original video?', zh: '西装原版是指原视频吗？' },
        a: {
          en: 'No. It is the black-suit outfit. The original party video and the original TikTok are not files on ViralReel.',
          zh: '不是。它是黑西装这套穿着。原来的派对视频和原来的 TikTok 都不是 ViralReel 上的文件。',
        },
      },
      {
        q: { en: 'Who is in the original party clip?', zh: '原来的派对片子里是谁？' },
        a: {
          en: 'ViralReel does not identify him. Upload your own photo, or a photo of an adult who agreed. Do not upload his screenshot.',
          zh: 'ViralReel 不指认他。请上传你自己的照片，或一位同意的成年人的照片。不要上传他的截图。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby generator',
    slug: 'dime-dime-baby-generator',
    title: {
      en: 'Dime Dime Baby Generator – The Bby Wow Template',
      zh: 'Dime Dime Baby 生成器：就是 Bby Wow 模板',
    },
    description: {
      en: 'dime dime baby generator: ViralReel’s browser template for this alias. No prompt. One photo. Suit Original, White Tee, or Staff Polo. Not the original TikTok. No song license.',
      zh: 'dime dime baby generator：这个别名在 ViralReel 上对应的浏览器模板。不用写提示词。一张照片。西装原版、白 T 派对版或黑 Polo 版。不是原始 TikTok。没有歌曲授权。',
    },
    h1: { en: 'Dime dime baby generator', zh: 'Dime dime baby 生成器' },
    lead: {
      en: 'The dime dime baby generator on ViralReel is the Bby Wow template in the browser. You upload one photo. You do not write a prompt, and you do not get the original TikTok.',
      zh: 'ViralReel 上的 dime dime baby 生成器就是浏览器里的 Bby Wow 模板。你上传一张照片。不用写提示词，也拿不到原始 TikTok。',
    },
    guideTitle: {
      en: 'What the generator does',
      zh: '这个生成器做什么',
    },
    body: {
      en: [
        `A dime dime baby generator search wants the tool. On ViralReel the tool is ${EN_HUB}. The hall, the guests, and the four beats are already in the scene. You change who walks in. There is no blank box where you type the party.`,
        'The upload is one photo of one adult you have permission to use. Suit Original, White Tee, and Staff Polo are the three outfit choices. Default ratio is 9:16. The credit cost is on the page before you generate. Packs are listed on the pricing page and monthly plans are on the subscribe page. Do not upload minors, celebrities, or a screen recording of the source.',
        `The same tool under the Bby Wow name is https://www.viralreel.app/bby-wow-ai-generator. Full make-and-post steps are ${EN_DIME_HOW}. The explainer is ${EN_WHAT}. CapCut is a different path: https://www.viralreel.app/dime-dime-baby-capcut. ViralReel is not affiliated with CapCut, TikTok, or the artists.`,
      ],
      zh: [
        `搜 dime dime baby generator 要的是工具。在 ViralReel，这个工具是 ${ZH_HUB}。宴会厅、宾客和四个节拍已经在场景里。你换的是走进来的人。这里没有一个让你把派对打成提示词的空白框。`,
        '上传的是一张你有权使用的成年人单人照片。西装原版、白 T 派对版和黑 Polo 版是三种穿着。默认画幅 9:16。积分在生成前显示在页面上。积分包在定价页，月付方案在订阅页。不要上传未成年人、名人或源片的屏幕录制。',
        `同一个工具用 Bby Wow 这个名字，在 https://www.viralreel.app/zh/bby-wow-ai-generator。完整的制作和发布步骤在 ${ZH_DIME_HOW}。说明在 ${ZH_WHAT}。CapCut 是另一条路径：https://www.viralreel.app/zh/dime-dime-baby-capcut。ViralReel 与 CapCut、TikTok 或这些歌手没有关系。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I write a prompt in the dime dime baby generator?', zh: 'dime dime baby 生成器要写提示词吗？' },
        a: {
          en: 'No. Pick Suit Original, White Tee, or Staff Polo and upload one photo. The template already holds the party.',
          zh: '不用。选西装原版、白 T 派对版或黑 Polo 版，上传一张照片。派对已经在模板里。',
        },
      },
      {
        q: { en: 'Is the generator an app I install?', zh: '这个生成器是要安装的 App 吗？' },
        a: {
          en: 'No. It runs in the browser on ViralReel. You do not need a CapCut project to use it.',
          zh: '不是。它在 ViralReel 的浏览器里运行。不用 CapCut 工程也能用。',
        },
      },
    ],
  },
  {
    keyword: 'make dime dime baby ai',
    slug: 'make-dime-dime-baby-ai',
    title: {
      en: 'Make Dime Dime Baby AI – One Photo on ViralReel',
      zh: '制作 Dime Dime Baby AI：在 ViralReel 用一张照片',
    },
    description: {
      en: 'make dime dime baby ai: open the Bby Wow template, upload one photo, read the credits, download a 9:16 MP4. Add the trend sound and an AI label in TikTok, Reels, or Shorts. No song license.',
      zh: 'make dime dime baby ai：打开 Bby Wow 模板，上传一张照片，看清积分，下载 9:16 MP4。在 TikTok、Reels 或 Shorts 里加热梗原声和 AI 标注。没有歌曲授权。',
    },
    h1: { en: 'Make Dime Dime Baby AI', zh: '制作 Dime Dime Baby AI' },
    lead: {
      en: 'To make a dime dime baby AI clip on ViralReel, upload one photo to the Bby Wow template and download a new MP4. Then add the trend sound in the app you post to.',
      zh: '在 ViralReel 制作 dime dime baby AI，是把一张照片放进 Bby Wow 模板并下载一条新的 MP4。然后在你发布的应用里加热梗原声。',
    },
    guideTitle: {
      en: 'How to make one from this search',
      zh: '从这次搜索开始怎么做',
    },
    body: {
      en: [
        'Make dime dime baby ai is the action query. The action is short. Open the template, choose an outfit that matches the photo, upload one clear front-facing picture, keep 9:16, read the credit cost, and generate. You do not install ViralReel and you do not write “a guy eating bread at a party.” A sentence like that invents a new room. The template keeps this room.',
        'Photo fit matters more than a prompt. Suit Original wants a photo that can read as dressed up. White Tee wants a casual, front-facing shot. Staff Polo wants a plain face with even light, because the joke is the deadpan chew. Waist-up or full-body is better than a tiny headshot. Skip sunglasses, group shots, and heavy filters. Use a photo of yourself or of an adult who agreed.',
        `The long version, including how to attach the sound and the AI label, is ${EN_DIME_HOW}. The tool name is https://www.viralreel.app/dime-dime-baby-generator. What you are making, as distinct from the song and the TikTok, is ${EN_WHAT}. Start at ${EN_HUB}.`,
      ],
      zh: [
        'Make dime dime baby ai 是动作查询。动作很短。打开模板，选一套和照片相配的穿着，上传一张清晰的正面照，保持 9:16，看清积分，然后生成。你不用安装 ViralReel，也不用写「一个在派对上吃面包的人」。那样的句子会另搭一个房间。模板留的是这个房间。',
        '照片是否合适，比提示词更要紧。西装原版适合看起来正式一点的照片。白 T 派对版适合随意的正面照。黑 Polo 版适合光线均匀的普通脸，因为笑点是那口面无表情的咀嚼。半身或全身比很小的大头贴好。不要墨镜、合照和重滤镜。用你自己的照片，或一位同意的成年人的照片。',
        `包含如何加上声音和 AI 标注的长版本在 ${ZH_DIME_HOW}。工具名在 https://www.viralreel.app/zh/dime-dime-baby-generator。你在做的东西和歌曲、TikTok 有什么不同，在 ${ZH_WHAT}。从 ${ZH_HUB} 开始。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How many photos does it take to make one?', zh: '做一条要几张照片？' },
        a: {
          en: 'One. Suit Original, White Tee, and Staff Polo each use a single photo.',
          zh: '一张。西装原版、白 T 派对版和黑 Polo 版都只用一张照片。',
        },
      },
      {
        q: { en: 'Where do I add “dime dime baby” after it renders?', zh: '渲染完之后在哪里加「dime dime baby」？' },
        a: {
          en: 'In TikTok, Reels, or Shorts, from that app’s sound library. ViralReel does not put a licensed copy of the song in the MP4.',
          zh: '在 TikTok、Reels 或 Shorts 里，从该应用的曲库加。ViralReel 不会把这首歌的授权拷贝放进 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby capcut',
    slug: 'dime-dime-baby-capcut',
    title: {
      en: 'Dime Dime Baby CapCut – And the Browser Alternative',
      zh: 'Dime Dime Baby CapCut：以及浏览器里的另一种做法',
    },
    description: {
      en: 'dime dime baby capcut: CapCut pastes a photo into a fixed template inside the app. ViralReel makes a new browser MP4 of the bread-bite party without a CapCut project. Fair comparison. No song license.',
      zh: 'dime dime baby capcut：CapCut 是在 App 里把照片贴进固定模板。ViralReel 在浏览器里生成咬面包派对的新 MP4，不用找 CapCut 工程。公平对照。没有歌曲授权。',
    },
    h1: { en: 'Dime dime baby CapCut', zh: 'Dime dime baby CapCut' },
    lead: {
      en: 'Dime dime baby CapCut is the in-app template path. ViralReel is the browser path to a new party MP4. Neither one is the original TikTok, and neither one licenses the song.',
      zh: 'Dime dime baby CapCut 是 App 里的模板路径。ViralReel 是在浏览器里做新派对 MP4 的路径。两者都不是原始 TikTok，也都不授权这首歌。',
    },
    guideTitle: {
      en: 'CapCut template versus a browser MP4',
      zh: 'CapCut 模板和浏览器 MP4',
    },
    body: {
      en: [
        'People searching dime dime baby capcut, or bby wow capcut, usually want the in-app workflow: open CapCut, find a project someone shared, and drop one photo onto a fixed template on the timeline. That is a normal way to edit if you already live in CapCut and want this clip next to other cuts. ViralReel is not affiliated with CapCut and does not ship that project.',
        `ViralReel’s path never asks you to hunt a project. At ${EN_HUB} you pick Suit Original, White Tee, or Staff Polo and generate a new MP4 in the browser from one photo. The result is a fictional party, not a paste of the original guest. You can still drop that MP4 into CapCut afterward if you want to keep editing there.`,
        `The no-CapCut wording is https://www.viralreel.app/dime-dime-baby-without-capcut. Steps that assume the browser are ${EN_DIME_HOW}. What the phrase refers to is ${EN_WHAT}. Add the trend sound in TikTok, Reels, or Shorts either way, and label the post as AI. ViralReel does not license the audio.`,
      ],
      zh: [
        '搜 dime dime baby capcut 或 bby wow capcut 的人，通常要的是 App 里的流程：打开 CapCut，找到别人分享的工程，把一张照片放到时间线上的固定模板里。如果你本来就在 CapCut 里剪辑，还想把这段和别的镜头放在一起，这是正常做法。ViralReel 与 CapCut 没有关系，也不提供那个工程。',
        `ViralReel 的路径不要求你去找工程。在 ${ZH_HUB} 选西装原版、白 T 派对版或黑 Polo 版，用一张照片在浏览器里生成一条新的 MP4。结果是一场虚构派对，不是把原客人贴上去。如果你还想在 CapCut 里继续剪，之后可以把这条 MP4 再放进去。`,
        `「不用 CapCut」的说法在 https://www.viralreel.app/zh/dime-dime-baby-without-capcut。已经决定用浏览器之后的步骤在 ${ZH_DIME_HOW}。这句话指什么，在 ${ZH_WHAT}。两条路径都请在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI。ViralReel 不授权这段音频。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does ViralReel open inside CapCut?', zh: 'ViralReel 是在 CapCut 里面打开的吗？' },
        a: {
          en: 'No. A CapCut template stays inside CapCut. ViralReel generates the party MP4 in the browser. You can import that MP4 into CapCut later if you want.',
          zh: '不是。CapCut 模板留在 CapCut 里。ViralReel 在浏览器里生成派对 MP4。如果你愿意，之后可以把这条 MP4 导入 CapCut。',
        },
      },
      {
        q: { en: 'Is a CapCut project hidden on this site?', zh: '本站是不是藏了一个 CapCut 工程？' },
        a: {
          en: 'No. ViralReel does not host the CapCut project. It generates its own MP4 from the three outfits.',
          zh: '没有。ViralReel 不托管 CapCut 工程。它用三套穿着生成自己的 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'dime dime baby without capcut',
    slug: 'dime-dime-baby-without-capcut',
    title: {
      en: 'Dime Dime Baby Without CapCut – Make It in the Browser',
      zh: '不用 CapCut 的 Dime Dime Baby：在浏览器里做',
    },
    description: {
      en: 'dime dime baby without capcut: skip the CapCut project. ViralReel generates a new bread-bite party MP4 in the browser from one photo. Not affiliated with CapCut. No song license.',
      zh: 'dime dime baby without capcut：不用去找 CapCut 工程。ViralReel 在浏览器里用一张照片生成新的咬面包派对 MP4。与 CapCut 无关。没有歌曲授权。',
    },
    h1: { en: 'Dime dime baby without CapCut', zh: '不用 CapCut 的 Dime dime baby' },
    lead: {
      en: 'You can make a dime dime baby clip without CapCut. ViralReel generates a new MP4 in the browser from one photo.',
      zh: '不做 CapCut 也能做 dime dime baby。ViralReel 在浏览器里用一张照片生成一条新的 MP4。',
    },
    guideTitle: {
      en: 'The path that never opens CapCut',
      zh: '从头到尾不用打开 CapCut 的路径',
    },
    body: {
      en: [
        'Dime dime baby without capcut means you do not want to install CapCut or paste a still into someone else’s project. The CapCut path is fine if you already edit there. This page is the other path: a browser template, one photo slot, a downloaded MP4.',
        `Stay on ${EN_HUB}. Choose Suit Original, White Tee, or Staff Polo. Upload one photo you have permission to use. Leave 9:16 on. Read the credits, generate, and download. Nothing in that sequence opens CapCut, and the site does not hide a CapCut file behind the button.`,
        `The CapCut keyword itself is https://www.viralreel.app/dime-dime-baby-capcut. The photo-by-photo steps are ${EN_DIME_HOW}. What the nickname refers to is ${EN_WHAT}. ViralReel does not license “BbY WOW” or the dime dime baby sound. Add the trend sound on TikTok, Reels, or Shorts and turn on the AI label.`,
      ],
      zh: [
        'Dime dime baby without capcut 的意思是：你不想安装 CapCut，也不想把一张静帧贴进别人的工程。如果你本来就在 CapCut 里剪，那条路径没问题。这一页是另一条路径：浏览器模板、一个照片位、一条下载的 MP4。',
        `留在 ${ZH_HUB}。选西装原版、白 T 派对版或黑 Polo 版。上传一张你有权使用的照片。保持 9:16。看清积分，生成，下载。这一串里不会打开 CapCut，按钮后面也没有藏着一个 CapCut 文件。`,
        `CapCut 这个关键词本身在 https://www.viralreel.app/zh/dime-dime-baby-capcut。按照片逐步做的教程在 ${ZH_DIME_HOW}。这个别名指什么，在 ${ZH_WHAT}。ViralReel 不授权《BbY WOW》或 dime dime baby 这段声音。请在 TikTok、Reels 或 Shorts 里加热梗原声并打开 AI 标注。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I finish the clip without opening CapCut?', zh: '不打开 CapCut 能做完这条片子吗？' },
        a: {
          en: 'Yes. Use the ViralReel template in the browser, download the MP4, then add the trend sound in TikTok, Reels, or Shorts.',
          zh: '可以。在浏览器里用 ViralReel 模板，下载 MP4，然后在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Do I still need CapCut to get the song?', zh: '歌曲还是得靠 CapCut 吗？' },
        a: {
          en: 'No. Neither path licenses the track. Add the trend sound from the TikTok, Reels, or Shorts library when you post.',
          zh: '不用。两条路径都不授权这首曲目。发布时请从 TikTok、Reels 或 Shorts 的曲库加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow ai generator',
    slug: 'bby-wow-ai-generator',
    title: {
      en: 'Bby Wow AI Generator – Template, Not a Prompt Box',
      zh: 'Bby Wow AI 生成器：是模板，不是提示词框',
    },
    description: {
      en: 'bby wow ai generator: an AI template, not a blank prompt. ViralReel places one photo in the bread-bite party. Suit Original, White Tee, Staff Polo. “Dime dime baby” is the sound alias. No song license.',
      zh: 'bby wow ai generator：这是 AI 模板，不是空白提示词。ViralReel 把一张照片放进咬面包派对。西装原版、白 T 派对版、黑 Polo 版。「Dime dime baby」是声音别名。没有歌曲授权。',
    },
    h1: { en: 'Bby Wow AI generator', zh: 'Bby Wow AI 生成器' },
    lead: {
      en: 'The Bby Wow AI generator is a fixed party template, not a blank prompt box. One photo goes in. A new 9:16 MP4 comes out. “Dime dime baby” is the sound alias, not a second generator.',
      zh: 'Bby Wow AI 生成器是固定的派对模板，不是空白提示词框。一张照片进去。一条新的 9:16 MP4 出来。「Dime dime baby」是声音别名，不是第二个生成器。',
    },
    guideTitle: {
      en: 'How this generator differs from a prompt box',
      zh: '这个生成器和提示词框有什么不同',
    },
    body: {
      en: [
        'Bby wow ai generator searches often land on general video tools that want a paragraph of instructions. ViralReel is the opposite for this trend. The AI part is the photo-to-scene render inside a template that already stages the party. The result is a new fictional clip, not the original TikTok and not KAROL G’s dance video.',
        `Open ${EN_HUB}. The wording without “AI” redirects to this page. The dime dime baby name for the same tool is https://www.viralreel.app/dime-dime-baby-generator. One photo. Three outfits: Suit Original, White Tee, Staff Polo. Default 9:16. Credits show before generate.`,
        `Steps are ${EN_DIME_HOW}. The three files people mix up — sound, bread-bite meme, and this MP4 — are ${EN_WHAT}. Add “BbY WOW” or “dime dime baby” in TikTok, Reels, or Shorts if the post needs that sound. ViralReel does not license it and is not affiliated with the artists.`,
      ],
      zh: [
        '搜 bby wow ai generator 常常落到要你写一整段说明的通用视频工具上。对这条趋势，ViralReel 相反。AI 的部分是模板内部的照片到场景渲染，模板本身已经搭好了这场派对。成片是新的虚构短片，不是原始 TikTok，也不是 KAROL G 的舞蹈视频。',
        `打开 ${ZH_HUB}。不带「AI」的说法会重定向到这一页。同一个工具的 dime dime baby 名字在 https://www.viralreel.app/zh/dime-dime-baby-generator。一张照片。三套穿着：西装原版、白 T 派对版、黑 Polo 版。默认 9:16。积分在生成前显示。`,
        `步骤在 ${ZH_DIME_HOW}。大家混在一起的三个文件——声音、咬面包梗，以及这条 MP4——在 ${ZH_WHAT}。如果帖子需要那段声音，在 TikTok、Reels 或 Shorts 里另加《BbY WOW》或「dime dime baby」。ViralReel 不授权它，也与这些歌手没有关系。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Bby Wow AI generator the same as the template?', zh: 'Bby Wow AI 生成器和模板是同一个吗？' },
        a: {
          en: `Yes. It is the Bby Wow template at ${EN_HUB}. There is no separate prompt generator under this name.`,
          zh: `是的。它就是 ${ZH_HUB} 上的 Bby Wow 模板。这个名字下面没有另一个提示词生成器。`,
        },
      },
      {
        q: { en: 'Will it recreate the original dancers or the artists?', zh: '它会重现原舞者或歌手吗？' },
        a: {
          en: 'No. It uses the photo you upload. Do not upload the original guest, the artists, other celebrities, or minors.',
          zh: '不会。它用的是你上传的照片。不要上传原客人、歌手、其他名人或未成年人。',
        },
      },
    ],
  },
  {
    keyword: 'bby wow from photo',
    slug: 'bby-wow-from-photo',
    title: {
      en: 'Bby Wow from a Photo – One Picture, Three Outfits',
      zh: '用一张照片做 Bby Wow：一张图，三套穿着',
    },
    description: {
      en: 'bby wow from photo: ViralReel turns one photo into the bread-bite party clip. Suit Original, White Tee, or Staff Polo. Not a screenshot of the original guest. No minors or celebrities. No song license.',
      zh: 'bby wow from photo：ViralReel 把一张照片做成咬面包派对短片。西装原版、白 T 派对版或黑 Polo 版。不是原客人的截图。不要未成年人或名人。没有歌曲授权。',
    },
    h1: { en: 'Bby Wow from a photo', zh: '用一张照片做 Bby Wow' },
    lead: {
      en: 'A Bby Wow clip on ViralReel starts from one photo you have permission to use. Suit Original, White Tee, and Staff Polo each take that single photo.',
      zh: 'ViralReel 上的 Bby Wow 短片，从一张你有权使用的照片开始。西装原版、白 T 派对版和黑 Polo 版都只用这一张。',
    },
    guideTitle: {
      en: 'Which photo to upload',
      zh: '上传哪一种照片',
    },
    body: {
      en: [
        'Bby wow from a photo is the input question. The template has one slot. A clear, front-facing photo of one adult works. Waist-up or full-body shows the outfit on the walk-in and the dance exit. Both eyes visible, light in front of the face, no sunglasses, no group crop, no heavy filter. JPG, PNG, and WebP are the formats the generator accepts.',
        'Match the outfit to the picture you have. Suit Original reads best when the person already looks dressed for an event. White Tee is the casual party version. Staff Polo is the plain dark-polo look, and it needs a readable face because the stare is the punchline. Do not upload a screenshot of the original guest, a celebrity, a public figure, or a minor. The render is a new fictional party, not a face-swap of the source file.',
        `Upload on ${EN_HUB}. The generator name is https://www.viralreel.app/bby-wow-ai-generator. Outfit-by-outfit notes and the posting steps are ${EN_DIME_HOW}. “Dime dime baby” as the sound alias is ${EN_WHAT}. After the MP4 downloads, add the trend sound in TikTok, Reels, or Shorts and turn on the AI label. ViralReel does not license that audio.`,
      ],
      zh: [
        'Bby wow from a photo 问的是输入。模板只有一个位置。一张清晰的、正面的成年人照片就可以。半身或全身能在入场和跳舞离场时看出穿着。两只眼睛都看得见，光线在脸的前面，不要墨镜，不要从合照里裁，不要重滤镜。生成器接受 JPG、PNG 和 WebP。',
        '让穿着和你手头的照片相配。西装原版在人看起来已经是去活动的打扮时最好认。白 T 派对版是随意的派对版本。黑 Polo 版是普通的深色 Polo 造型，它需要一张能看清的脸，因为对视是笑点。不要上传原客人的截图、名人、公众人物或未成年人。成片是一场新的虚构派对，不是源文件的换脸。',
        `在 ${ZH_HUB} 上传。生成器的名字在 https://www.viralreel.app/zh/bby-wow-ai-generator。按穿着写的说明和发布步骤在 ${ZH_DIME_HOW}。「Dime dime baby」作为声音别名，在 ${ZH_WHAT}。MP4 下载之后，在 TikTok、Reels 或 Shorts 里加热梗原声并打开 AI 标注。ViralReel 不授权这段音频。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I use two photos?', zh: '可以用两张照片吗？' },
        a: {
          en: 'The Bby Wow template takes one. Pick the single photo that should cross the party floor.',
          zh: 'Bby Wow 模板只要一张。选出应该穿过舞池的那一张。',
        },
      },
      {
        q: { en: 'Can I start from a screenshot of the original guy?', zh: '可以从原来那位的截图开始吗？' },
        a: {
          en: 'No. Use a photo you have permission to use. Do not upload the original guest, a celebrity, or a minor.',
          zh: '不能。请使用你有权使用的照片。不要上传原客人、名人或未成年人。',
        },
      },
    ],
  },
];

export function getBbyLongTail(slug: string) {
  return BBY_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly BbyHowToStep[] {
  return entry.steps === 'shared' ? BBY_HOW_TO_STEPS : entry.steps;
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
        ['需要几张照片？', '一张。西装原版、白 T 派对版和黑 Polo 版都只用一张你有权使用的单人照片。不要用未成年人、名人或公众人物的照片。'],
        ['要多少积分？', templateLiveCostAnswer(BBY_PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        ['这是官方页面吗？', '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 KAROL G、Judeline、rusowsky，或咬面包派对原片的作者没有隶属、官方或合作关系。模板用一张照片搭建新的虚构场景。'],
      ]
    : [
        ['How many photos do I need?', 'One. Suit Original, White Tee, and Staff Polo each take one photo of one person you have permission to use. Do not use photos of minors, celebrities, or public figures.'],
        ['How many credits does it cost?', templateLiveCostAnswer(BBY_PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        ['Is this an official page?', 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with KAROL G, Judeline, rusowsky, or the creators of the bread-bite party clip. The templates stage a new fictional scene from one photo.'],
      ];
  return [...own, ...shared];
}

export interface BbyLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function bbyLinkGroups(zh: boolean): BbyLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: BBY_TEMPLATE_PATH, label: zh ? 'Bby Wow AI 跳舞模板' : 'Bby Wow AI dance template' },
        { href: '/bby-wow-ai', label: 'Bby Wow AI' },
        { href: '/bby-wow-ai-video', label: 'Bby Wow AI video' },
        { href: '/bby-wow-ai-dance', label: 'Bby Wow AI dance' },
        { href: '/bby-wow-ai-generator', label: zh ? 'Bby Wow AI 生成器' : 'Bby Wow AI generator' },
        { href: '/bby-wow-from-photo', label: zh ? '用一张照片做 Bby Wow' : 'Bby Wow from a photo' },
        { href: '/dime-dime-baby-generator', label: zh ? 'Dime dime baby 生成器' : 'Dime dime baby generator' },
        { href: '/make-dime-dime-baby-ai', label: zh ? '制作 Dime Dime Baby AI' : 'Make Dime Dime Baby AI' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: 'Dime dime baby',
      links: [
        { href: '/dime-dime-baby', label: 'Dime dime baby' },
        { href: '/dime-dime-baby-ai', label: 'Dime dime baby AI' },
        { href: '/dime-dime-baby-ai-video', label: zh ? 'Dime dime baby AI 视频' : 'Dime dime baby AI video' },
        { href: '/dime-dime-baby-tiktok', label: 'Dime dime baby TikTok' },
        { href: '/dime-dime-baby-meme', label: 'Dime dime baby meme' },
        { href: '/dime-dime-baby-song', label: zh ? 'Dime dime baby 歌曲' : 'Dime dime baby song' },
        { href: '/dime-dime-baby-dance', label: 'Dime dime baby dance' },
        { href: '/dime-dime-baby-original', label: zh ? 'Dime dime baby 原版' : 'Dime dime baby original' },
        { href: '/dime-dime-baby-capcut', label: 'Dime dime baby CapCut' },
        { href: '/dime-dime-baby-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/bby-wow-guy', label: 'Bby Wow guy' },
        { href: '/bby-wow-meme', label: 'Bby Wow meme' },
        { href: '/bby-wow-song', label: 'Bby Wow song' },
        { href: '/bby-wow-tiktok', label: 'Bby Wow TikTok' },
        { href: '/quince-concha-meme', label: 'Quince concha meme' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: BBY_POSTS.dimeWhat, label: zh ? 'Dime dime baby 是什么' : 'What dime dime baby is' },
        { href: BBY_POSTS.dimeHowTo, label: zh ? '制作并发布 Dime Dime Baby AI 视频' : 'Make and post a Dime Dime Baby AI video' },
        { href: BBY_POSTS.howTo, label: zh ? '如何制作 Bby Wow AI 跳舞视频' : 'How to make a Bby Wow AI dance video' },
        { href: BBY_POSTS.comparison, label: zh ? '模板和提示词工具对比' : 'Template vs a prompt tool' },
        { href: '/blog/october-2026-viral-ai-meme-videos', label: zh ? '2026 年 10 月梗视频盘点' : 'October 2026 meme roundup' },
      ],
    },
  ];
}

export const BBY_LONG_TAIL_ROUTES = BBY_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
