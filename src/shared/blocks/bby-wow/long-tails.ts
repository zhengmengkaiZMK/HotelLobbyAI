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
} as const;

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
      ],
      zh: [
        '「Dime dime baby」挂在 @bigbowee 配着 BbY WOW 原声的舞蹈帖上，那条在 2026 年下半年这波里播放超过 1500 万。搜 dime dime baby ai 常常是想要那条视频、那段音频，或那段舞的 AI 拷贝。',
        'ViralReel 不托管那条 TikTok，也不授权音频。它也不会把那段编舞做成官方舞蹈。你能做的 AI 视频是派对格式：一张照片、咬面包、对视和跳舞离场。如果帖子需要热梗原声，在 TikTok、Reels 或 Shorts 里另加。',
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
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/bby-wow-guy', label: 'Bby Wow guy' },
        { href: '/bby-wow-meme', label: 'Bby Wow meme' },
        { href: '/bby-wow-song', label: 'Bby Wow song' },
        { href: '/dime-dime-baby-ai', label: 'Dime dime baby AI' },
        { href: '/bby-wow-tiktok', label: 'Bby Wow TikTok' },
        { href: '/quince-concha-meme', label: 'Quince concha meme' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: BBY_POSTS.howTo, label: zh ? '如何制作 Bby Wow AI 跳舞视频' : 'How to make a Bby Wow AI dance video' },
        { href: BBY_POSTS.comparison, label: zh ? '模板和提示词工具对比' : 'Template vs a prompt tool' },
      ],
    },
  ];
}

export const BBY_LONG_TAIL_ROUTES = BBY_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
