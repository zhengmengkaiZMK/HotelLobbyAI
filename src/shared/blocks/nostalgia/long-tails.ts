import type { TemplateCostContext } from '@/shared/lib/pricing-copy';

import { NOSTALGIA_INTENT_TAILS } from './intent-tails';
import { NOSTALGIA_HOW_TO_STEPS, type NostalgiaHowToStep } from './steps';

/**
 * Long-tail landings for the NostalgIA CapCut template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * NOSTALGIA_LONG_TAIL_ROUTES). Public URLs are served by the single
 * `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `nostalgia-ai-template` slug.
 */

export const NOSTALGIA_TEMPLATE_PATH = '/nostalgia-ai-template';

type Copy = { en: string; zh: string };

export interface NostalgiaLongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface NostalgiaLongTailEntry {
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
  steps: 'shared' | readonly NostalgiaHowToStep[];
  faq: NostalgiaLongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

export const NOSTALGIA_LONG_TAILS: readonly NostalgiaLongTailEntry[] = [
  {
    keyword: 'nostalgia ai',
    slug: 'nostalgia-ai',
    title: {
      en: 'NostalgIA AI – Step Into the Retro TV Ad on ViralReel',
      zh: 'NostalgIA AI：在 ViralReel 走进复古老广告',
    },
    description: {
      en: 'nostalgia ai: ViralReel puts you inside a recreated retro TV commercial from one photo — letterboxed SD picture, backyard set, the bite, the grin. Download the MP4, add the trend sound in TikTok. Not the original ad and not the song.',
      zh: 'nostalgia ai：ViralReel 用一张照片把你放进复刻的怀旧电视广告——黑边 SD 画质、后院布景、咬一口、对镜头笑。下载 MP4，在 TikTok 加原声。不是原广告，也不是那首歌。',
    },
    h1: { en: 'NostalgIA AI', zh: 'NostalgIA AI' },
    lead: {
      en: 'NostalgIA AI on ViralReel is a new parody commercial made from one photo: you as the star of a recreated retro chocolate-bar TV spot. It is not the original ad and not the jingle.',
      zh: 'ViralReel 上的 NostalgIA AI 是用一张照片做的全新戏仿广告：你成为复古老巧克力棒广告的主角。这不是原广告，也不是那段 jingle。',
    },
    guideTitle: {
      en: 'How to make a NostalgIA AI video',
      zh: '如何制作 NostalgIA AI 视频',
    },
    body: {
      en: [
        'A nostalgia ai search usually means one thing: the TikTok format captioned "pov: you always wanted to know how you\'d look in this ad", where AI drops you inside a recreated retro TV commercial — letterboxed SD picture, a sunny backyard set, one bite of a chocolate crisp bar, then a big TV-ad grin at the camera with red outlined jingle text across the screen. ViralReel makes that format from your photo.',
        'You do not write a prompt and you do not edit anything in an app. Open the template, upload one clear photo you have permission to use, and generate a 9:16 MP4 — 10 seconds, the retro black bars and jingle text built in. Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, and Star \'85 are five lead roles of the same ad.',
        'The download does not include the sound. Add the trend sound in the TikTok, Reels, or Shorts sound picker and turn on the AI label where the app asks. ViralReel does not license that audio and is not affiliated with the trend creators or any brand.',
      ],
      zh: [
        '搜 nostalgia ai 通常指向同一件事：TikTok 上文案为「pov: you always wanted to know how you\'d look in this ad」的格式——AI 把你放进复刻的怀旧电视广告：黑边 SD 画质、阳光后院布景、咬一口巧克力棒，再对着镜头露出夸张的电视广告式笑容，屏幕上闪过红色描边的 jingle 文字。ViralReel 用你的照片做这个格式。',
        '你不用写提示词，也不用进 App 剪辑。打开模板，上传一张你有权使用的清晰照片，生成 9:16 的 MP4——10 秒，复古黑边和 jingle 文字都已内置。经典女主版、金发波波版、长发少年版、蝴蝶项链版和星条 85 版是同一支广告的五个主角位。',
        '下载文件不包含原声。在 TikTok、Reels 或 Shorts 的曲库里另加热梗原声，并在应用要求时打开 AI 标注。ViralReel 不授权这段音频，与趋势作者和任何品牌都没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is NostalgIA AI on ViralReel?', zh: 'ViralReel 上的 NostalgIA AI 是什么？' },
        a: {
          en: 'A new parody TV ad made from one photo: you as the star of a recreated retro chocolate-bar commercial, with the letterboxed SD look and jingle text rebuilt. It is not the original commercial and not the sound.',
          zh: '用一张照片生成的全新戏仿电视广告：你成为复古老巧克力棒广告的主角，黑边 SD 画质和 jingle 文字都已复刻。它不是原广告，也不含原声。',
        },
      },
      {
        q: { en: 'Is NostalgIA AI the Bad Bunny song?', zh: 'NostalgIA AI 是 Bad Bunny 那首歌吗？' },
        a: {
          en: 'No. The 2023 "NostalgIA" is an AI voice track by FlowGPT — an unrelated meme. The 2026 NostalgIA CapCut trend is the retro-ad video format.',
          zh: '不是。2023 年的《NostalgIA》是 FlowGPT 的 AI 换声歌曲，属于另一个梗。2026 年的 NostalgIA CapCut 指的是复古老广告的视频格式。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia capcut',
    slug: 'nostalgia-capcut',
    title: {
      en: 'NostalgIA CapCut – Template vs One-Click AI | ViralReel',
      zh: 'NostalgIA CapCut：模板与一键 AI 的对照 | ViralReel',
    },
    description: {
      en: 'nostalgia capcut: how the CapCut route compares with ViralReel, where one photo generates the whole retro TV-ad scene in the browser. No app, no project, no watermark on paid exports.',
      zh: 'nostalgia capcut：CapCut 路径与 ViralReel 的对照——一张照片在浏览器里直接生成完整的复古老广告场景。不用装 App，不用工程，付费导出无水印。',
    },
    h1: { en: 'NostalgIA CapCut', zh: 'NostalgIA CapCut' },
    lead: {
      en: 'Searching NostalgIA CapCut usually means you want the trend without learning an editor. Here is the honest comparison, and the browser path that does the whole ad in one click.',
      zh: '搜 NostalgIA CapCut 通常是想不学剪辑就上这条趋势。这里是诚实的对照，以及一键生成整支广告的浏览器路径。',
    },
    guideTitle: {
      en: 'CapCut template or ViralReel: which makes the NostalgIA ad?',
      zh: 'CapCut 模板还是 ViralReel：谁能做出 NostalgIA 广告？',
    },
    body: {
      en: [
        'The NostalgIA trend is not really a CapCut edit. The viral posts are AI-generated videos: a model watched a reference and filmed a new retro chocolate-bar commercial starring one person. A CapCut template can only cut your clips together — it cannot put you inside the ad, and most "NostalgIA CapCut template" links are just regular retro edits wearing the name.',
        'ViralReel does the AI part at ' + NOSTALGIA_TEMPLATE_PATH + '. You upload one photo and the template recreates the whole scene: the letterboxed SD picture, the backyard set, the bite, the grin at the camera, the red jingle text. Eight seconds, 9:16, no app to install.',
        'What CapCut is still good for is the last step: none. Add the trend sound inside TikTok, Reels, or Shorts instead — the download from ViralReel carries the picture only, and adding the sound in the app is what files your post under the trend.',
      ],
      zh: [
        'NostalgIA 趋势其实不是 CapCut 剪出来的。爆款帖是 AI 生成的视频：模型看着参考素材，重拍了一支以你为主角的复古巧克力棒广告。CapCut 模板只能把你的素材剪到一起——它没法把你放进广告里，大部分「NostalgIA CapCut 模板」链接也只是借了名字的普通复古剪辑。',
        'AI 那一步由 ViralReel 完成：' + NOSTALGIA_TEMPLATE_PATH + ' 。上传一张照片，模板复刻整个场景：黑边 SD 画质、后院布景、咬一口、对镜头笑、红色 jingle 文字。10 秒，9:16，不用装 App。',
        'CapCut 剩下的用途是——没有。原声直接在 TikTok、Reels 或 Shorts 里加：ViralReel 的下载文件只有画面，在应用内加原声才能让你的帖子进趋势信息流。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there an official NostalgIA CapCut template?', zh: '有官方的 NostalgIA CapCut 模板吗？' },
        a: {
          en: 'Not that we can verify. The viral NostalgIA posts are AI-generated videos, not CapCut projects. Sites listing "NostalgIA CapCut templates" usually point at generic retro edits.',
          zh: '我们无法证实有官方模板。爆款 NostalgIA 帖是 AI 生成的视频，不是 CapCut 工程。列出「NostalgIA CapCut 模板」的网站通常指向普通复古剪辑。',
        },
      },
      {
        q: { en: 'Can CapCut put me inside the ad?', zh: 'CapCut 能把我放进广告里吗？' },
        a: {
          en: `No. CapCut cuts clips; it does not generate new footage of you. The AI generation happens at ${NOSTALGIA_TEMPLATE_PATH}, then you can post the MP4 anywhere.`,
          zh: `不能。CapCut 负责剪辑，不会生成你的新画面。AI 生成在 ${NOSTALGIA_TEMPLATE_PATH} 完成，之后 MP4 随便发哪里。`,
        },
      },
    ],
  },
  {
    keyword: 'nostalgia ai video',
    slug: 'nostalgia-ai-video',
    title: {
      en: 'NostalgIA AI Video – Make the Retro-Ad MP4 on ViralReel',
      zh: 'NostalgIA AI 视频：在 ViralReel 制作复古老广告 MP4',
    },
    description: {
      en: 'nostalgia ai video: ViralReel generates an 8-second 9:16 retro TV-ad MP4 from one photo — letterboxed SD look, backyard set, the bite and the grin. A new fictional parody, not the original ad.',
      zh: 'nostalgia ai video：ViralReel 用一张照片生成 10 秒 9:16 复古电视广告 MP4——黑边 SD 画质、后院布景、咬一口加对镜头笑。全新的虚构戏仿，不是原广告。',
    },
    h1: { en: 'NostalgIA AI video', zh: 'NostalgIA AI 视频' },
    lead: {
      en: 'A NostalgIA AI video here is the ad remake: one photo in, an 8-second retro commercial out, with you as the star.',
      zh: '这里的 NostalgIA AI 视频是广告重拍：一张照片进去，一条 10 秒复古广告出来，主角是你。',
    },
    guideTitle: {
      en: 'How to make a NostalgIA AI video',
      zh: '如何制作 NostalgIA AI 视频',
    },
    body: {
      en: [
        'A nostalgia ai video on ViralReel is a new 9:16 MP4 generated from your photo: the retro TV-ad frame with black bars, the sunny backyard, the chocolate crisp bar prop, the red outlined jingle text, and your bite-and-grin performance. The prop carries no readable brand logos — it is an original parody, not a copy of a real commercial.',
        'Pick a lead role — Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, or Star \'85 — keep 9:16, and read the credit cost the generator shows before you start. The length is fixed at 10 seconds so the clip loops like the trend posts.',
        'The file is the picture only. Add the trend sound in the app when you post, use the "pov" caption people recognize, and keep the AI label on. The output is safe to post precisely because it is a new fictional ad, not a reposted commercial.',
      ],
      zh: [
        'ViralReel 上的 NostalgIA AI 视频是用你的照片新生成的 9:16 MP4：带黑边的复古老电视画框、阳光后院、巧克力棒道具、红色描边 jingle 文字，以及你「咬一口 + 对镜头笑」的表演。道具没有可读品牌标识——这是原创戏仿，不是真实广告的拷贝。',
        '选一个主角位——经典女主版、金发波波版、长发少年版、蝴蝶项链版或星条 85 版——保持 9:16，生成前看清积分。时长固定 10 秒，成片和趋势帖一样适合循环播放。',
        '文件只有画面。发布时在应用里另加热梗原声，配上大家熟悉的「pov」文案，并保留 AI 标注。成片可以放心发布，正因为它是新拍的虚构广告，不是转发的真实广告。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long is a NostalgIA AI video?', zh: 'NostalgIA AI 视频多长？' },
        a: {
          en: 'Eight seconds, matching the trend posts, and it loops cleanly. The template fixes the length so the bite lands on the beat.',
          zh: '10 秒，与趋势帖一致，可以干净地循环。模板固定时长，保证咬一口落在节拍上。',
        },
      },
      {
        q: { en: 'Can two people be in one ad?', zh: '一条广告能放两个人吗？' },
        a: {
          en: 'The trend format is a single star, so one video shows one character. Make one for each friend and post them back to back.',
          zh: '趋势格式是单主角，一条视频一个角色。给每个朋友各做一条，然后连着发。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia tiktok',
    slug: 'nostalgia-tiktok',
    title: {
      en: 'NostalgIA TikTok – How the Retro-Ad Trend Is Posted | ViralReel',
      zh: 'NostalgIA TikTok：复古老广告趋势的发布玩法 | ViralReel',
    },
    description: {
      en: 'nostalgia tiktok: what the retro TV-ad posts look like, the pov caption people use, how the sound works, and how to make your own NostalgIA video on ViralReel. Not affiliated with TikTok or any brand.',
      zh: 'nostalgia tiktok：复古电视广告帖长什么样、大家用的 pov 文案、原声怎么用，以及如何在 ViralReel 制作你自己的 NostalgIA 视频。与 TikTok 和任何品牌无关。',
    },
    h1: { en: 'NostalgIA on TikTok', zh: 'TikTok 上的 NostalgIA' },
    lead: {
      en: 'The NostalgIA TikTok trend is AI videos styled as old TV commercials. This page explains the format, the caption, and the sound — then makes you the star.',
      zh: 'TikTok 上的 NostalgIA 趋势是 AI 生成的老电视广告风格视频。这篇讲清格式、文案和原声——然后让你当主角。',
    },
    guideTitle: {
      en: 'How NostalgIA posts work on TikTok',
      zh: 'NostalgIA 帖子在 TikTok 上怎么玩',
    },
    body: {
      en: [
        'Scroll the tag and every NostalgIA post shares the same skeleton: a letterboxed SD frame that looks like a 2000s TV broadcast, a sunny backyard, a person raising a chocolate crisp bar, one bite, then a straight-to-camera pitch with an over-the-top ad smile. The caption does the joke: "pov: you always wanted to know how you\'d look in this ad." The TikTok AI label sits in the corner, which is part of the honesty of the format.',
        'The posts are AI-generated, not filmed: no camera could put today\'s faces inside yesterday\'s commercial. That is why the trend runs on tools like ViralReel — one photo is the whole production budget. Pick a lead role, generate, and the clip is ready for the sound picker.',
        'To post: add the trend sound in TikTok (the retro jingle audio people attach), keep the pov caption format, turn on the AI label, and post natively. ViralReel does not host TikToks, is not affiliated with TikTok or the brands parodied, and does not license the audio.',
      ],
      zh: [
        '刷一下话题标签就会发现，每条 NostalgIA 帖都是同一副骨架：看起来像 2000 年代电视广播的黑边 SD 画框、阳光后院、举起巧克力棒的人物、咬一口，然后对镜头来一段夸张的广告式推销。文案负责抖包袱：「pov: you always wanted to know how you\'d look in this ad」。角落的 TikTok AI 标注也是格式的一部分——这是梗的诚实之处。',
        '这些帖子是 AI 生成的，不是实拍：没有摄像机能把今天的脸塞进昨天的广告。这就是趋势靠 ViralReel 这类工具跑起来的原因——一张照片就是全部制作成本。选主角位、生成，成片就可以进曲库配声了。',
        '发布：在 TikTok 里加热梗原声（大家配的复古 jingle 音频），保留 pov 文案格式，打开 AI 标注，从应用内直接发布。ViralReel 不托管 TikTok，与 TikTok 及被戏仿的品牌无关，也不授权音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What caption do NostalgIA posts use?', zh: 'NostalgIA 帖子用什么文案？' },
        a: {
          en: 'Almost all of them use "pov: you always wanted to know how you\'d look in this ad" — the caption is what tells viewers which memory the joke lands on.',
          zh: '几乎所有帖子都用「pov: you always wanted to know how you\'d look in this ad」——这句文案告诉观众梗落在哪段记忆上。',
        },
      },
      {
        q: { en: 'Does ViralReel host the original TikToks?', zh: 'ViralReel 托管原始 TikTok 吗？' },
        a: {
          en: 'No. The preview clips on the template page show the format and credit their sources. ViralReel generates a new fictional ad from your photo.',
          zh: '不托管。模板页的预览视频用于展示格式并标注来源。ViralReel 用你的照片生成新的虚构广告。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia generator',
    slug: 'nostalgia-generator',
    title: {
      en: 'NostalgIA Generator – Photo to Retro-Ad MP4 | ViralReel',
      zh: 'NostalgIA 生成器：照片到复古老广告 MP4 | ViralReel',
    },
    description: {
      en: 'nostalgia generator: the one-click path into the retro TV-ad trend. Upload one photo, generate an 8-second 9:16 ad with you as the star. No prompt needed. Credits shown before you start.',
      zh: 'nostalgia generator：进复古电视广告趋势的一键路径。上传一张照片，生成 10 秒 9:16、以你为主角的广告。不用写提示词。积分在生成前显示。',
    },
    h1: { en: 'NostalgIA generator', zh: 'NostalgIA 生成器' },
    lead: {
      en: 'The NostalgIA generator is the fastest way into the trend: one photo, one click, a finished retro commercial.',
      zh: 'NostalgIA 生成器是进这条趋势最快的路：一张照片，一次点击，一条完整的复古广告。',
    },
    guideTitle: {
      en: 'What the NostalgIA generator actually runs',
      zh: 'NostalgIA 生成器实际在跑什么',
    },
    body: {
      en: [
        'The NostalgIA generator is the same browser template as the one-tap flow at ' + NOSTALGIA_TEMPLATE_PATH + '. Upload one clear front-facing photo, pick one of the five lead roles, and generate. You get an 8-second 9:16 MP4: the letterboxed retro picture, the backyard set, the bite, the grin, the jingle text — the complete format, zero editing.',
        'Everything the trend needs is pre-built: the SD color grading, the analog noise, the prop action, the red outlined jingle text, the black bars. The credit cost shows before you start, and failed jobs are refunded.',
        'You do not write a prompt. Download the MP4, add the trend sound in TikTok, Reels, or Shorts, and post with the pov caption and the AI label.',
      ],
      zh: [
        'NostalgIA 生成器和一键流程用的是同一个浏览器模板：' + NOSTALGIA_TEMPLATE_PATH + ' 。上传一张清晰正面照，选五个主角位之一，点生成。你会得到一条 10 秒的 9:16 MP4：黑边复古画质、后院布景、咬一口、对镜头笑、jingle 文字——完整格式，零剪辑。',
        '趋势需要的东西都预置好了：SD 调色、模拟噪点、道具动作、红色描边 jingle 文字、黑边。积分在生成前显示，失败的任务会退积分。',
        '你不用写提示词。下载 MP4，在 TikTok、Reels 或 Shorts 里加趋势原声，带 pov 文案和 AI 标注发布。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the NostalgIA generator free?', zh: 'NostalgIA 生成器免费吗？' },
        a: {
          en: 'It runs on credits. The exact cost shows on the generator before you start, and failed jobs are refunded.',
          zh: '按积分计费。确切的积分在生成前显示在生成器上，失败的任务会退积分。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt in the generator?', zh: '生成器里需要写提示词吗？' },
        a: {
          en: 'No. The prompt is pre-filled per template variant and the admin settings tune it. You only upload a photo and generate.',
          zh: '不需要。每个模板变体的提示词已预填，后台配置统一调优。你只管上传照片然后生成。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia meme',
    slug: 'nostalgia-meme',
    title: {
      en: 'The NostalgIA Meme, Explained – Retro Ads, POV Caption, and the Name',
      zh: 'NostalgIA 梗详解：复古广告、POV 文案与名字的由来',
    },
    description: {
      en: 'The NostalgIA meme explained: why AI videos of recreated chocolate-bar TV ads took over TikTok, where the pov caption and the NostalgIA name come from, and how to make your own version.',
      zh: 'NostalgIA 梗详解：为什么复古老巧克力棒广告的 AI 视频刷屏 TikTok、pov 文案和 NostalgIA 名字的由来，以及怎么做你自己的版本。',
    },
    h1: { en: 'The NostalgIA meme', zh: 'NostalgIA 梗' },
    lead: {
      en: 'The NostalgIA meme is AI doing the one thing cameras cannot: putting today\'s you inside yesterday\'s commercial.',
      zh: 'NostalgIA 梗的本质是 AI 做到了摄像机做不到的事：把今天的你放进昨天的广告。',
    },
    guideTitle: {
      en: 'Why the NostalgIA meme spreads',
      zh: 'NostalgIA 梗为什么能传开',
    },
    body: {
      en: [
        'The joke has two layers. The surface layer is the format: a recreated retro TV commercial, complete with the letterboxed SD picture, the backyard set, the jingle text — instantly readable as "an ad from when I was a kid". The deeper layer is the caption: "pov: you always wanted to know how you\'d look in this ad." Everyone has an ad burned into their memory, and nobody ever got to be the person in it — until a photo upload was all it took.',
        'The name is the pun doing the filing: Nostalgia plus IA, the way AI is abbreviated in Spanish and Portuguese — and a word TikTok already knew from an unrelated 2023 AI song. The 2026 trend has nothing to do with that track; it is all video, no music cloning.',
        'The meme spreads because the variable is exactly one thing: you. Set, outfit, action, and text never change, so every remake reads at a glance — and the AI label in the corner is worn proudly, because the whole point is that the ad never existed.',
      ],
      zh: [
        '这个梗有两层笑点。表层是格式：复刻的怀旧电视广告，黑边 SD 画质、后院布景、jingle 文字——一眼就能认出「我小时候看的那种广告」。深层是文案：「pov: you always wanted to know how you\'d look in this ad」。每个人心里都刻着一条广告，但从没人当过里面的人——直到上传一张照片就够了。',
        '名字本身就是归档用的双关：Nostalgia 加 IA（西语/葡语里 AI 的缩写），也是 TikTok 用户从 2023 年一首不相干的 AI 歌曲里就认识的词。2026 年这波趋势和那首歌毫无关系——全是视频，没有换声。',
        '梗能传开是因为变量只有一个：你。布景、造型、动作、文字都不变，每条重制一眼就能读懂——角落的 AI 标注被骄傲地亮着，因为整条梗的核心就是：这支广告从未存在过。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Where does the name NostalgIA come from?', zh: 'NostalgIA 这个名字从哪来？' },
        a: {
          en: 'It is nostalgia + IA (the Spanish/Portuguese abbreviation for AI). An unrelated 2023 AI song used the same word, which is why search results mix the two — the 2026 trend is the retro-ad video format.',
          zh: '它是 nostalgia + IA（西语/葡语里 AI 的缩写）。2023 年一首不相干的 AI 歌曲用过同一个词，所以搜索结果会混在一起——2026 年的趋势指的是复古广告视频格式。',
        },
      },
      {
        q: { en: 'Is the ad in the meme real?', zh: '梗里的广告是真的吗？' },
        a: {
          en: 'The style is real — classic chocolate-bar jingle ads — but each viral post is an AI-generated parody. Nothing like it aired; the star is whoever uploaded the photo.',
          zh: '风格是真的——经典巧克力棒 jingle 广告——但每条爆款帖都是 AI 生成的戏仿。没有哪条真的播过；主角就是上传照片的那个人。',
        },
      },
    ],
  },
  ...NOSTALGIA_INTENT_TAILS,
];

export function getNostalgiaLongTail(slug: string): NostalgiaLongTailEntry | undefined {
  return NOSTALGIA_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveNostalgiaLongTailSteps(entry: NostalgiaLongTailEntry): readonly NostalgiaHowToStep[] {
  return entry.steps === 'shared' ? NOSTALGIA_HOW_TO_STEPS : entry.steps;
}

export function buildNostalgiaLongTailFaq(
  entry: NostalgiaLongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  return entry.faq.map((item) => [item.q[zh ? 'zh' : 'en'], item.a[zh ? 'zh' : 'en']]);
}

export function nostalgiaLinkGroups(zh: boolean) {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: NOSTALGIA_TEMPLATE_PATH, label: zh ? 'NostalgIA CapCut 模板' : 'NostalgIA CapCut template' },
        { href: '/nostalgia-ai', label: 'NostalgIA AI' },
        { href: '/nostalgia-ai-video', label: zh ? 'NostalgIA AI 视频' : 'NostalgIA AI video' },
        { href: '/nostalgia-template', label: zh ? '模板变体' : 'Template variants' },
        { href: '/nostalgia-generator', label: zh ? '生成器' : 'Generator' },
        { href: '/nostalgia-ai-generator', label: zh ? 'AI 生成器' : 'AI generator' },
        { href: '/make-nostalgia-ai', label: zh ? '制作' : 'Make one' },
        { href: '/nostalgia-online', label: zh ? '在线制作' : 'Online' },
        { href: '/nostalgia-capcut', label: 'NostalgIA CapCut' },
        { href: '/nostalgia-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/nostalgia-meme', label: zh ? '梗详解' : 'NostalgIA meme' },
        { href: '/nostalgia-tiktok', label: zh ? 'TikTok 玩法' : 'NostalgIA TikTok' },
        { href: '/nostalgia-trend', label: zh ? '趋势详解' : 'The trend' },
        { href: '/how-youd-look-in-this-ad', label: zh ? '「how you\'d look in this ad」' : '"How you\'d look in this ad"' },
      ],
    },
    {
      title: zh ? '其他趋势' : 'Other trends',
      links: [
        { href: '/tiny-desk-outstanding-ai-template', label: 'Tiny Desk Outstanding' },
        { href: '/wassup-in-a-minute-ai-template', label: 'Wassup in a Minute' },
        { href: '/window-peeper-ai-template', label: 'Window Peeper' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
        { href: '/ba-ba-ba-dance-ai-template', label: 'Ba Ba Ba Dance' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: '/blog/what-is-nostalgia-capcut', label: zh ? 'NostalgIA CapCut 是什么' : 'What NostalgIA CapCut is' },
        { href: '/blog/how-to-make-nostalgia-ai-video', label: zh ? '如何制作 NostalgIA AI 视频' : 'How to make a NostalgIA AI video' },
        { href: '/blog/what-does-nostalgia-ai-mean', label: zh ? 'NostalgIA AI 是什么意思' : 'What NostalgIA AI means' },
        { href: '/blog/october-2026-viral-ai-meme-videos', label: zh ? '2026 年 10 月梗视频盘点' : 'October 2026 meme roundup' },
      ],
    },
  ];
}

export const NOSTALGIA_LONG_TAIL_ROUTES = NOSTALGIA_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
