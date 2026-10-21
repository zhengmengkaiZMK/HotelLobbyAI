import {
  hitTheRoadCostAnswer,
  hitTheRoadOfficialAnswer,
  hitTheRoadPhotoAnswer,
  hitTheRoadRefundAnswer,
  hitTheRoadWatermarkAnswer,
  type HitTheRoadFaqContext,
} from './faq';
import { HIT_THE_ROAD_HOW_TO_STEPS, type HitTheRoadHowToStep } from './steps';

/**
 * Long-tail landings for the Hit the Road Dude template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * HIT_THE_ROAD_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `hit-the-road-dude-ai-template` slug.
 */

export const HIT_THE_ROAD_TEMPLATE_PATH = '/hit-the-road-dude-ai-template';

export const HIT_THE_ROAD_POSTS = {
  howTo: '/blog/how-to-make-hit-the-road-dude-ai-video',
  explainer: '/blog/hit-the-road-dude-meme-and-original',
} as const;

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
  steps: 'shared' | readonly HitTheRoadHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

export const HIT_THE_ROAD_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'hit the road dude ai video',
    slug: 'hit-the-road-dude-ai-video',
    title: {
      en: 'Hit the Road Dude AI Video – Make It on ViralReel',
      zh: 'Hit the Road Dude AI 视频：在 ViralReel 用一张照片制作',
    },
    description: {
      en: 'hit the road dude ai video: ViralReel turns one photo into a fictional white-pickup private-property clip. Download the MP4, then add the trend sound and the AI label on TikTok, Reels, or Shorts.',
      zh: 'hit the road dude ai video：ViralReel 用一张照片做成虚构的白色皮卡私人领地短片。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上热梗原声和 AI 标注。',
    },
    h1: { en: 'Hit the Road Dude AI video', zh: 'Hit the Road Dude AI 视频' },
    lead: {
      en: 'ViralReel makes the Hit the Road Dude AI video from one photo: a white pickup, a roadside gesture, and a fictional “hit the road dude” dismissal. It is not the original clip.',
      zh: 'ViralReel 用一张照片制作 Hit the Road Dude AI 视频：白色皮卡、路边比画，以及一句虚构的 “hit the road dude” 驱赶。这不是原片。',
    },
    guideTitle: {
      en: 'How to make a Hit the Road Dude AI video',
      zh: '如何制作 Hit the Road Dude AI 视频',
    },
    body: {
      en: [
        'A hit the road dude ai video is an AI remake of the pickup-truck meme, not a download of the TikTok. The recognizable scene is a white pickup stopped on private-looking land, someone outside the window, and the driver sending them off with the flat line “hit the road dude.”',
        'On ViralReel you do not write that scene as a prompt. Open the template, upload one photo you have permission to use, and generate a new 9:16 clip. State Property, Driver Reaction, and Private Property are three setups of the same beat. The card videos are authorized reference clips of the format so you can see the timing; they are not AI outputs and not the original footage.',
        'After you download the MP4, add the trend sound inside TikTok, Reels, or Shorts and turn on the AI label where the app asks. ViralReel does not license that audio.',
      ],
      zh: [
        'hit the road dude ai video 是皮卡梗的 AI 重拍，不是那条 TikTok 的下载。能认出来的场景是停在看起来像私人领地上的白色皮卡、车窗外的人，以及司机用一句平淡的 “hit the road dude” 把对方送走。',
        '在 ViralReel 你不用把这个场景写成提示词。打开模板，上传一张你有权使用的照片，生成一条新的 9:16 短片。州有土地、司机反应和私人领地是同一节奏的三种搭法。卡片视频是该格式的授权参考片段，方便你看清节奏；它们不是 AI 生成结果，也不是原片。',
        '下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上热梗原声，并在应用要求时打开 AI 标注。ViralReel 不授权这段音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is a Hit the Road Dude AI video?', zh: 'Hit the Road Dude AI 视频是什么？' },
        a: {
          en: 'It is a fictional vertical remake of the white-pickup roadside meme, made on ViralReel from one photo. It is not a copy of the original TikTok and not an official video of the meme.',
          zh: '它是白色皮卡路边梗的虚构竖屏重拍，在 ViralReel 用一张照片做成。不是原始 TikTok 的拷贝，也不是这个梗的官方视频。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The Hit the Road Dude template already sets the truck, the window, and the roadside reaction. You upload one photo and generate.',
          zh: '不需要。Hit the Road Dude 模板已经定好了皮卡、车窗和路边反应。你上传一张照片然后生成。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude song',
    slug: 'hit-the-road-dude-song',
    title: {
      en: 'Hit the Road Dude Song – ViralReel Makes the AI Video',
      zh: 'Hit the Road Dude Song：ViralReel 做的是 AI 视频',
    },
    description: {
      en: 'hit the road dude song is the meme’s spoken dismissal, not a track ViralReel sells and not Hit the Road Jack. ViralReel makes the AI remake video from one photo. Add any trend sound inside the app you post to.',
      zh: 'hit the road dude song 是梗里的那句驱赶，不是 ViralReel 出售的歌曲，也不是 Hit the Road Jack。ViralReel 用一张照片做 AI 重拍视频。热梗原声请在发布的应用里另加。',
    },
    h1: { en: 'Hit the Road Dude song', zh: 'Hit the Road Dude song' },
    lead: {
      en: 'There is no Hit the Road Dude song to download here. ViralReel makes the AI remake video from one photo, and it does not license a soundtrack.',
      zh: '这里没有可下载的 Hit the Road Dude 歌曲。ViralReel 用一张照片做 AI 重拍视频，并且不授权配乐。',
    },
    guideTitle: {
      en: 'What to do if you searched for the song',
      zh: '如果你搜的是歌曲',
    },
    body: {
      en: [
        '“Hit the road dude” in this trend is a spoken line: a flat “leave.” It is not the Ray Charles song “Hit the Road Jack,” and ViralReel does not sell, stream, or license either one.',
        'If the clip you actually want is the white-pickup meme with a new face in the driver seat, that is the AI video. The template takes one photo and exports an MP4. Any trend audio stays in TikTok, Reels, or Shorts, under that platform’s music rules.',
      ],
      zh: [
        '这条趋势里的 “hit the road dude” 是一句口头的驱赶，意思是“走吧”。它不是 Ray Charles 的歌 “Hit the Road Jack”，ViralReel 也不出售、串流或授权其中任何一首。',
        '如果你真正想要的是白色皮卡梗、司机位换成一张新脸，那是 AI 视频。模板用一张照片，导出 MP4。热梗音频留在 TikTok、Reels 或 Shorts 里，受该平台的音乐规则约束。',
      ],
    },
    steps: [
      {
        name: { en: 'Separate the line from a song', zh: '把台词和歌分开' },
        text: {
          en: 'The meme line is spoken dialogue, not a single ViralReel can license. It is also not “Hit the Road Jack.”',
          zh: '梗里的这句是对白，不是 ViralReel 能授权的单曲。它也不是 “Hit the Road Jack”。',
        },
      },
      {
        name: { en: 'Make the AI video from one photo', zh: '用一张照片做 AI 视频' },
        text: {
          en: 'Open the Hit the Road Dude template on ViralReel, upload one photo you have permission to use, and generate the fictional roadside clip.',
          zh: '在 ViralReel 打开 Hit the Road Dude 模板，上传一张你有权使用的照片，生成虚构的路边短片。',
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
        q: { en: 'Is there a Hit the Road Dude song?', zh: '有一首 Hit the Road Dude 的歌吗？' },
        a: {
          en: 'Not as a product on ViralReel. The phrase is the meme’s dismissal line. ViralReel makes an AI video from one photo and does not license a song.',
          zh: 'ViralReel 上没有这首歌这种产品。这句话是梗里的驱赶台词。ViralReel 用一张照片做 AI 视频，不授权歌曲。',
        },
      },
      {
        q: { en: 'Is this Hit the Road Jack?', zh: '这是 Hit the Road Jack 吗？' },
        a: {
          en: 'No. Hit the Road Jack is a different, older song. The meme line “hit the road dude” is a roadside dismissal, not that recording.',
          zh: '不是。Hit the Road Jack 是另一首更早的歌。梗里的 “hit the road dude” 是路边的驱赶，不是那条录音。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude gif',
    slug: 'hit-the-road-dude-gif',
    title: {
      en: 'Hit the Road Dude GIF – ViralReel Exports an MP4',
      zh: 'Hit the Road Dude GIF：ViralReel 导出的是 MP4',
    },
    description: {
      en: 'hit the road dude gif: ViralReel does not export a GIF. It makes the AI remake video from one photo and downloads an MP4 you can convert yourself if you need a loop.',
      zh: 'hit the road dude gif：ViralReel 不导出 GIF。它用一张照片做 AI 重拍视频，下载的是 MP4；如果你需要循环图，可以自己转换。',
    },
    h1: { en: 'Hit the Road Dude GIF', zh: 'Hit the Road Dude GIF' },
    lead: {
      en: 'ViralReel does not make a Hit the Road Dude GIF file. It makes the AI remake video from one photo and downloads an MP4.',
      zh: 'ViralReel 不做 Hit the Road Dude 的 GIF 文件。它用一张照片做 AI 重拍视频，下载的是 MP4。',
    },
    guideTitle: {
      en: 'If you wanted a GIF',
      zh: '如果你想要的是 GIF',
    },
    body: {
      en: [
        'A hit the road dude gif search usually wants a short loop of the pickup-truck reaction. ViralReel’s download is an MP4 of an AI remake, not a GIF of the original clip and not a GIF export.',
        'Make the video on the template from one photo, then convert that MP4 in your own editor if a loop is what you need to post. The template still will not hand you the original footage.',
      ],
      zh: [
        '搜 hit the road dude gif 通常是想要皮卡反应的一小段循环。ViralReel 下载的是 AI 重拍的 MP4，不是原片的 GIF，也不是 GIF 导出。',
        '在模板里用一张照片做出视频，如果发布需要循环图，再用你自己的工具把 MP4 转过去。模板仍然不会把原片交给你。',
      ],
    },
    steps: [
      {
        name: { en: 'Expect an MP4, not a GIF', zh: '得到的是 MP4，不是 GIF' },
        text: {
          en: 'The Hit the Road Dude template downloads a vertical MP4. It does not export a GIF and it does not host the original clip.',
          zh: 'Hit the Road Dude 模板下载的是竖屏 MP4。它不导出 GIF，也不托管原片。',
        },
      },
      {
        name: { en: 'Make the AI video from one photo', zh: '用一张照片做 AI 视频' },
        text: {
          en: 'Upload one photo you have permission to use, generate the fictional white-pickup scene, and download the MP4.',
          zh: '上传一张你有权使用的照片，生成虚构的白色皮卡场景，下载 MP4。',
        },
      },
      {
        name: { en: 'Convert it yourself if you need a loop', zh: '需要循环图就自己转' },
        text: {
          en: 'Use your own editor to turn the MP4 into a GIF after download. Label the post as AI-generated where the platform asks.',
          zh: '下载后再用你自己的工具把 MP4 转成 GIF。平台要求标注 AI 生成时，按要求标注。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Can I download a Hit the Road Dude GIF from ViralReel?', zh: '能从 ViralReel 下载 Hit the Road Dude GIF 吗？' },
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
  {
    keyword: 'hit the road dude meme',
    slug: 'hit-the-road-dude-meme',
    title: {
      en: 'Hit the Road Dude Meme – White Pickup AI Remake',
      zh: 'Hit the Road Dude Meme：白色皮卡 AI 重拍',
    },
    description: {
      en: 'hit the road dude meme: the white-pickup private-property clip, also called State Property. ViralReel makes a fictional AI remake from one photo. It is not the official meme page.',
      zh: 'hit the road dude meme：白色皮卡私人领地那段，也叫 State Property。ViralReel 用一张照片做虚构 AI 重拍。这不是官方梗页面。',
    },
    h1: { en: 'Hit the Road Dude meme', zh: 'Hit the Road Dude meme' },
    lead: {
      en: 'The Hit the Road Dude meme is the white-pickup roadside dismissal. ViralReel lets you remake that beat from one photo. It is not an official meme archive.',
      zh: 'Hit the Road Dude 梗是白色皮卡路边的那句驱赶。ViralReel 让你用一张照片重拍这个节奏。它不是官方梗档案。',
    },
    guideTitle: {
      en: 'What the meme is, and how the remake works',
      zh: '这个梗是什么，重拍怎么做',
    },
    body: {
      en: [
        'The hit the road dude meme is a short roadside argument filmed from outside a white pickup. A visitor thought a fishing spot was public land. The driver freezes, repeats “State?”, then tells him to hit the road. The same clip is searched as State Property, Private Property, and, for a later line, Lock ’Em Up.',
        'Know Your Meme records the original TikTok as an August 21, 2025 upload by @bird28thegr8, captioned “Angry grandpa kicks me out my fishing spot.” AI remakes that keep the truck and swap the driver spread in October 2026. ViralReel’s version is one of those remakes: one photo, a fictional scene, no claim that the original people said or did anything new.',
      ],
      zh: [
        'hit the road dude meme 是从白色皮卡外面拍下的一小段路边争执。来访者以为钓鱼的地方是公共土地。司机愣住，重复 “State?”，然后让他上路离开。同一条片子也会被搜成 State Property、Private Property，后半句则是 Lock ’Em Up。',
        '据 Know Your Meme 记载，原始 TikTok 由 @bird28thegr8 于 2025 年 8 月 21 日上传，标题是 “Angry grandpa kicks me out my fishing spot”。把皮卡留着、司机换人的 AI 二创在 2026 年 10 月传开。ViralReel 的版本就是这种重拍：一张照片、一个虚构场景，不声称原片里的人又说了或做了什么新的事。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What happens in the Hit the Road Dude meme?', zh: 'Hit the Road Dude 梗里发生了什么？' },
        a: {
          en: 'A white pickup is stopped by private-looking land. Someone outside the window talks about public land. The driver reacts with “State?” and then a flat “hit the road dude” dismissal.',
          zh: '一辆白色皮卡停在看起来像私人领地的地方。车窗外有人说这里是公共土地。司机用 “State?” 反应，然后用一句平淡的 “hit the road dude” 让对方离开。',
        },
      },
      {
        q: { en: 'Can I remake the meme with my photo?', zh: '能用我的照片重拍这个梗吗？' },
        a: {
          en: 'Yes, on the ViralReel template, from one photo you have permission to use. The result is a fictional AI clip. Label it as AI when you post, and do not present it as the original.',
          zh: '可以，在 ViralReel 模板里，用一张你有权使用的照片。结果是虚构的 AI 短片。发布时按要求标注 AI，不要把它当成原片。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude guy',
    slug: 'hit-the-road-dude-guy',
    title: {
      en: 'Hit the Road Dude Guy – AI Remake, Not a Profile',
      zh: 'Hit the Road Dude Guy：AI 重拍，不是人物页',
    },
    description: {
      en: 'hit the road dude guy usually means the driver in the original pickup clip. ViralReel does not identify him. It makes a fictional AI remake from one photo you have permission to use.',
      zh: 'hit the road dude guy 通常指原片皮卡里的司机。ViralReel 不指认他是谁。它用一张你有权使用的照片做虚构 AI 重拍。',
    },
    h1: { en: 'Hit the Road Dude guy', zh: 'Hit the Road Dude guy' },
    lead: {
      en: 'ViralReel does not identify the Hit the Road Dude guy. It puts a photo you have permission to use into a fictional driver seat.',
      zh: 'ViralReel 不指认 Hit the Road Dude 里的那个人。它把一张你有权使用的照片放进虚构的司机位。',
    },
    guideTitle: {
      en: 'The driver search, answered directly',
      zh: '关于司机的搜索',
    },
    body: {
      en: [
        'People searching hit the road dude guy usually want the driver in the white pickup: the man who pauses, says “State?”, and tells the person outside to leave. ViralReel does not name him, host his footage, or run an official page about him.',
        'What you can make here is an AI remake. One photo you are allowed to use becomes the driver in a new fictional roadside clip. Do not use a stranger’s, a minor’s, or a public figure’s photo, and do not post the result as if that person really had the argument.',
      ],
      zh: [
        '搜 hit the road dude guy 通常是在找白色皮卡里的司机：那个停顿、说 “State?”、再让车外的人离开的人。ViralReel 不公布他的名字，不托管他的画面，也没有关于他的官方页。',
        '你在这里能做的是 AI 重拍。一张你被允许使用的照片，会成为一条新的虚构路边短片里的司机。不要用陌生人、未成年人或公众人物的照片，也不要把结果发成仿佛那个人真的发生过这场争执。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who is the Hit the Road Dude guy?', zh: 'Hit the Road Dude 里的那个人是谁？' },
        a: {
          en: 'ViralReel does not identify the driver. Know Your Meme records the original upload as @bird28thegr8 on August 21, 2025. This site is not a biography and not his official page.',
          zh: 'ViralReel 不指认司机是谁。据 Know Your Meme 记载，原片由 @bird28thegr8 于 2025 年 8 月 21 日上传。本站不是人物介绍，也不是他的官方页。',
        },
      },
      {
        q: { en: 'Can I put my own face in the driver seat?', zh: '能把我自己的脸放进司机位吗？' },
        a: {
          en: 'Yes. Upload one photo you have permission to use. The clip is a fictional remake. It is not a recording of the original driver.',
          zh: '可以。上传一张你有权使用的照片。片子是虚构重拍，不是原司机的录像。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude ai',
    slug: 'hit-the-road-dude-ai',
    title: {
      en: 'Hit the Road Dude AI – One-Photo Template on ViralReel',
      zh: 'Hit the Road Dude AI：ViralReel 的单张照片模板',
    },
    description: {
      en: 'hit the road dude ai on ViralReel is a template, not a blank prompt. One photo becomes a fictional white-pickup clip. It is not an official AI of the meme.',
      zh: 'ViralReel 上的 hit the road dude ai 是模板，不是空白提示词。一张照片变成虚构的白色皮卡短片。它不是这个梗的官方 AI。',
    },
    h1: { en: 'Hit the Road Dude AI', zh: 'Hit the Road Dude AI' },
    lead: {
      en: 'Hit the Road Dude AI on ViralReel means the template: one photo in, a fictional roadside MP4 out. You do not prompt-engineer the truck.',
      zh: 'ViralReel 上的 Hit the Road Dude AI 指的是模板：一张照片进去，一条虚构的路边 MP4 出来。你不用自己写皮卡的提示词。',
    },
    guideTitle: {
      en: 'What “Hit the Road Dude AI” means here',
      zh: '这里的 “Hit the Road Dude AI” 指什么',
    },
    body: {
      en: [
        'A hit the road dude ai search can mean “make the meme with AI” or “ask a chatbot what the clip is.” This page is the first one. ViralReel is a template site. The white pickup, the window, and the roadside reaction are already built. Your photo supplies the driver.',
        'A general prompt such as “man in a truck says hit the road” invents a new shot. The template is built to keep this format. It is still fiction: not the original people’s voices, and not an official AI product of the meme.',
      ],
      zh: [
        '搜 hit the road dude ai 可能是“用 AI 做这个梗”，也可能是“问聊天机器人这段片子是什么”。这个页面是第一种。ViralReel 是模板站。白色皮卡、车窗和路边反应都已经搭好。你的照片提供司机。',
        '如果只写一句“卡车里的人说 hit the road”，模型会另拍一条新片子。模板是按这个格式来的。它仍然是虚构：不是原片人物的声音，也不是这个梗的官方 AI 产品。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How is ViralReel different from a prompt tool?', zh: 'ViralReel 和提示词工具有什么不同？' },
        a: {
          en: 'A prompt tool asks you to describe the shot, so the model invents a clip. ViralReel starts from the Hit the Road Dude template and places one photo into that roadside format.',
          zh: '提示词工具让你描述镜头，模型会另做一条片子。ViralReel 从 Hit the Road Dude 模板开始，把一张照片放进这个路边格式。',
        },
      },
      {
        q: { en: 'Is the AI output the original driver?', zh: 'AI 成片是原来的司机吗？' },
        a: {
          en: 'No. It is a new fictional scene using the photo you upload. Do not present it as footage of the person in the original clip.',
          zh: '不是。它是用你上传的照片做成的新虚构场景。不要把它当成原片人物的画面。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude original',
    slug: 'hit-the-road-dude-original',
    title: {
      en: 'Hit the Road Dude Original – ViralReel Does Not Host It',
      zh: 'Hit the Road Dude Original：ViralReel 不托管原片',
    },
    description: {
      en: 'hit the road dude original: Know Your Meme records an August 21, 2025 TikTok by @bird28thegr8. ViralReel does not host that file. It makes a fictional AI remake from one photo.',
      zh: 'hit the road dude original：据 Know Your Meme 记载，这是 @bird28thegr8 于 2025 年 8 月 21 日发的 TikTok。ViralReel 不托管该文件。它用一张照片做虚构 AI 重拍。',
    },
    h1: { en: 'Hit the Road Dude original', zh: 'Hit the Road Dude original' },
    lead: {
      en: 'ViralReel does not host the original Hit the Road Dude video. The template makes a fictional AI remake from one photo.',
      zh: 'ViralReel 不托管 Hit the Road Dude 原片。模板用一张照片做虚构 AI 重拍。',
    },
    guideTitle: {
      en: 'Original clip versus the AI remake',
      zh: '原片和 AI 重拍',
    },
    body: {
      en: [
        'The hit the road dude original is the roadside TikTok, not a file on this site. Know Your Meme records it as an August 21, 2025 upload by @bird28thegr8, captioned “Angry grandpa kicks me out my fishing spot,” filmed from the fishermen’s side of a pond. ViralReel does not reupload that video, its audio, or a “clean” copy.',
        'The template cards play authorized reference clips of the format so you can see the beat before you generate. Those clips are not the original TikTok and not an AI render of your photo. If you want your own version, upload one photo and generate a new fictional scene.',
      ],
      zh: [
        'hit the road dude original 是那条路边 TikTok，不是本站上的文件。据 Know Your Meme 记载，它由 @bird28thegr8 于 2025 年 8 月 21 日上传，标题是 “Angry grandpa kicks me out my fishing spot”，从钓鱼者一侧拍下池塘边的争执。ViralReel 不转载该视频、它的音频，或一份“干净”拷贝。',
        '模板卡片播放的是该格式的授权参考片段，方便你在生成前看清节奏。这些片段不是原始 TikTok，也不是用你的照片渲染的 AI 结果。如果你想要自己的版本，上传一张照片，生成一条新的虚构场景。',
      ],
    },
    steps: [
      {
        name: { en: 'Do not expect the original file', zh: '不要期待拿到原片文件' },
        text: {
          en: 'ViralReel does not host or sell the original Hit the Road Dude TikTok. Look to the uploader’s own post if you need that source.',
          zh: 'ViralReel 不托管也不出售 Hit the Road Dude 原始 TikTok。如果你需要那个源头，去上传者自己的帖子。',
        },
      },
      {
        name: { en: 'Make a fictional remake instead', zh: '改为做一条虚构重拍' },
        text: {
          en: 'Upload one photo you have permission to use and generate a new white-pickup scene on the ViralReel template.',
          zh: '上传一张你有权使用的照片，在 ViralReel 模板上生成一条新的白色皮卡场景。',
        },
      },
      {
        name: { en: 'Label the remake as AI', zh: '把重拍标注为 AI' },
        text: {
          en: 'Download the MP4 and, where TikTok, Reels, or Shorts asks, mark it as AI-generated. Do not present it as the original.',
          zh: '下载 MP4，并在 TikTok、Reels 或 Shorts 要求时标注为 AI 生成。不要把它当成原片。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Where is the original Hit the Road Dude video?', zh: 'Hit the Road Dude 原片在哪里？' },
        a: {
          en: 'Not on ViralReel. Know Your Meme records the original TikTok as an August 21, 2025 upload by @bird28thegr8. This site does not rehost it.',
          zh: '不在 ViralReel。据 Know Your Meme 记载，原始 TikTok 由 @bird28thegr8 于 2025 年 8 月 21 日上传。本站不转载它。',
        },
      },
      {
        q: { en: 'Are the preview videos the original?', zh: '预览视频是原片吗？' },
        a: {
          en: 'No. They are authorized reference clips of the format, shown so you can see the beat. Your generate is a separate AI clip from your photo.',
          zh: '不是。它们是该格式的授权参考片段，用来让你看清节奏。你点生成之后，是用你的照片另做的一条 AI 短片。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude in german',
    slug: 'hit-the-road-dude-in-german',
    title: {
      en: 'Hit the Road Dude in German – No German Dub on ViralReel',
      zh: 'Hit the Road Dude in German：ViralReel 没有德语配音',
    },
    description: {
      en: 'hit the road dude in german: ViralReel has no German voice track and no German UI. The site locales are English and Chinese. The meme lines people quote are English. You can still make the AI video from one photo.',
      zh: 'hit the road dude in german：ViralReel 没有德语配音，也没有德语界面。站点语言是英文和中文。大家引用的梗台词是英文。你仍然可以用一张照片做 AI 视频。',
    },
    h1: { en: 'Hit the Road Dude in German', zh: 'Hit the Road Dude in German' },
    lead: {
      en: 'ViralReel does not dub Hit the Road Dude into German. The meme lines are English, and the site UI is English or Chinese. The AI video is still one photo.',
      zh: 'ViralReel 不把 Hit the Road Dude 配成德语。梗里的台词是英文，站点界面是英文或中文。AI 视频仍然是一张照片。',
    },
    guideTitle: {
      en: 'German search, English meme, two site languages',
      zh: '德语搜索、英文梗、两种站点语言',
    },
    body: {
      en: [
        'A hit the road dude in german search often wants a translation of the line or a German voiceover. ViralReel does not ship a German voice track, a German subtitle file, or a licensed German dub. The lines people quote from the meme — “State?” and “hit the road dude” — are English.',
        'The site itself has two locales, English and Chinese (the /zh path). There is no German locale in the language switcher. You can still make the AI remake video from one photo in either locale. The picture is the product; the dialogue is not translated into German by the template.',
      ],
      zh: [
        '搜 hit the road dude in german 常常是想要这句台词的翻译，或一条德语配音。ViralReel 不提供德语语音、德语字幕文件，或已获授权的德语配音。大家从梗里引用的台词——“State?” 和 “hit the road dude”——是英文。',
        '站点本身有两种语言：英文和中文（/zh 路径）。语言切换里没有德语。你仍然可以在任一语言界面里用一张照片做 AI 重拍视频。产品是画面；模板不会把对白翻成德语。',
      ],
    },
    steps: [
      {
        name: { en: 'There is no German voice track', zh: '没有德语语音' },
        text: {
          en: 'ViralReel does not generate a German dub of “hit the road dude” or “State?”. The quoted meme lines are English.',
          zh: 'ViralReel 不会把 “hit the road dude” 或 “State?” 生成成德语配音。被引用的梗台词是英文。',
        },
      },
      {
        name: { en: 'The UI is English or Chinese', zh: '界面是英文或中文' },
        text: {
          en: 'The language switcher offers English and 中文. There is no German locale. Chinese pages live under /zh.',
          zh: '语言切换提供 English 和中文。没有德语。中文页面在 /zh 下。',
        },
      },
      {
        name: { en: 'Make the AI video anyway', zh: '仍然可以做 AI 视频' },
        text: {
          en: 'Upload one photo on the Hit the Road Dude template and download the MP4. That is the remake, not a German translation of the original.',
          zh: '在 Hit the Road Dude 模板上传一张照片并下载 MP4。那是重拍，不是原片的德语翻译。',
        },
      },
    ],
    faq: [
      {
        q: { en: 'Does ViralReel have Hit the Road Dude in German?', zh: 'ViralReel 有德语版 Hit the Road Dude 吗？' },
        a: {
          en: 'No German voice track and no German interface. Locales are English and Chinese. The AI template still makes the roadside video from one photo.',
          zh: '没有德语语音，也没有德语界面。语言是英文和中文。AI 模板仍然用一张照片做路边视频。',
        },
      },
      {
        q: { en: 'What does the line mean?', zh: '这句台词是什么意思？' },
        a: {
          en: '“Hit the road, dude” means “leave.” In the meme it comes after the driver’s stunned “State?”. ViralReel does not provide an official German translation track.',
          zh: '“Hit the road, dude” 的意思是“离开”。在梗里，它出现在司机难以置信的 “State?” 之后。ViralReel 不提供官方德语翻译音轨。',
        },
      },
    ],
  },
  {
    keyword: 'hit the road dude remix',
    slug: 'hit-the-road-dude-remix',
    title: {
      en: 'Hit the Road Dude Remix – AI Remake from One Photo',
      zh: 'Hit the Road Dude Remix：一张照片的 AI 重拍',
    },
    description: {
      en: 'hit the road dude remix on ViralReel means an AI remake video from one photo, not a music remix and not an edit of the original file. ViralReel does not license the trend audio.',
      zh: 'ViralReel 上的 hit the road dude remix 指用一张照片做的 AI 重拍视频，不是音乐混音，也不是原片剪辑。ViralReel 不授权热梗音频。',
    },
    h1: { en: 'Hit the Road Dude remix', zh: 'Hit the Road Dude remix' },
    lead: {
      en: 'A Hit the Road Dude remix on ViralReel is an AI remake from one photo. It is not a music remix and not a recut of the original file.',
      zh: 'ViralReel 上的 Hit the Road Dude remix 是用一张照片做的 AI 重拍。它不是音乐混音，也不是原片的重新剪辑。',
    },
    guideTitle: {
      en: 'Remix means a new AI clip, not a new track',
      zh: '这里的 remix 是新的 AI 短片，不是新歌',
    },
    body: {
      en: [
        'Searchers for a hit the road dude remix sometimes want a music edit, and sometimes want the meme with a different person in the truck. ViralReel only does the second, and only as a new generation: one photo becomes the driver in a fictional white-pickup scene.',
        'That is not a remix of the original video file and not a remix of a song. ViralReel does not license trend audio. If the post needs the sound that groups it with the meme, add that sound inside TikTok, Reels, or Shorts.',
      ],
      zh: [
        '搜 hit the road dude remix 的人，有的想要音乐改编，有的想要卡车里换成另一个人的梗。ViralReel 只做第二种，而且是重新生成：一张照片变成虚构白色皮卡场景里的司机。',
        '这不是原视频文件的混剪，也不是歌曲的混音。ViralReel 不授权热梗音频。如果帖子需要那段能把它归进梗里的声音，请在 TikTok、Reels 或 Shorts 里另加。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is a Hit the Road Dude remix a music remix?', zh: 'Hit the Road Dude remix 是音乐混音吗？' },
        a: {
          en: 'Not on ViralReel. The remix you can make here is an AI video from one photo. ViralReel does not license or remix a song.',
          zh: '在 ViralReel 上不是。你在这里能做的 remix 是用一张照片生成的 AI 视频。ViralReel 不授权也不混音任何歌曲。',
        },
      },
      {
        q: { en: 'Do you edit the original file?', zh: '你们会剪辑原片文件吗？' },
        a: {
          en: 'No. The generator creates a new fictional clip from your photo. It does not recut the original TikTok.',
          zh: '不会。生成器用你的照片做一条新的虚构短片。它不重新剪辑原始 TikTok。',
        },
      },
    ],
  },
];

export function getHitTheRoadLongTail(slug: string) {
  return HIT_THE_ROAD_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly HitTheRoadHowToStep[] {
  return entry.steps === 'shared' ? HIT_THE_ROAD_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
  zh: boolean,
  ctx: HitTheRoadFaqContext = {}
): [string, string][] {
  const lang = zh ? 'zh' : 'en';
  const own = entry.faq.map((item) => [item.q[lang], item.a[lang]] as [string, string]);
  const shared: [string, string][] = zh
    ? [
        ['需要几张照片？', hitTheRoadPhotoAnswer(true)],
        ['要多少积分？', hitTheRoadCostAnswer(true, ctx)],
        ['付费导出有水印吗？', hitTheRoadWatermarkAnswer(true)],
        ['生成失败会退积分吗？', hitTheRoadRefundAnswer(true)],
        ['这是官方页面吗？', hitTheRoadOfficialAnswer(true)],
      ]
    : [
        ['How many photos do I need?', hitTheRoadPhotoAnswer(false)],
        ['How many credits does it cost?', hitTheRoadCostAnswer(false, ctx)],
        ['Are paid exports watermark-free?', hitTheRoadWatermarkAnswer(false)],
        ['Are failed jobs refunded?', hitTheRoadRefundAnswer(false)],
        ['Is this an official page?', hitTheRoadOfficialAnswer(false)],
      ];
  return [...own, ...shared];
}

export interface HitTheRoadLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function hitTheRoadLinkGroups(zh: boolean): HitTheRoadLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: HIT_THE_ROAD_TEMPLATE_PATH, label: zh ? 'Hit the Road Dude AI 模板' : 'Hit the Road Dude AI template' },
        { href: '/hit-the-road-dude-ai-video', label: 'Hit the Road Dude AI video' },
        { href: '/hit-the-road-dude-ai', label: 'Hit the Road Dude AI' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/hit-the-road-dude-meme', label: 'Hit the Road Dude meme' },
        { href: '/hit-the-road-dude-original', label: 'Hit the Road Dude original' },
        { href: '/hit-the-road-dude-guy', label: 'Hit the Road Dude guy' },
        { href: '/hit-the-road-dude-song', label: 'Hit the Road Dude song' },
        { href: '/hit-the-road-dude-gif', label: 'Hit the Road Dude GIF' },
        { href: '/hit-the-road-dude-remix', label: 'Hit the Road Dude remix' },
        { href: '/hit-the-road-dude-in-german', label: 'Hit the Road Dude in German' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: HIT_THE_ROAD_POSTS.howTo, label: zh ? '如何制作 Hit the Road Dude AI 视频' : 'How to make a Hit the Road Dude AI video' },
        { href: HIT_THE_ROAD_POSTS.explainer, label: zh ? '梗、原片和歌' : 'Meme, original, and the song' },
      ],
    },
  ];
}

export const HIT_THE_ROAD_LONG_TAIL_ROUTES = HIT_THE_ROAD_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
