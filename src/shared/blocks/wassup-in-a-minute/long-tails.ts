import type { TemplateCostContext } from '@/shared/lib/pricing-copy';

import { WASSUP_HOW_TO_STEPS, type WassupHowToStep } from './steps';

/**
 * Long-tail landings for the Wassup in a Minute template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * WASSUP_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `wassup-in-a-minute-ai-template` slug.
 */

export const WASSUP_TEMPLATE_PATH = '/wassup-in-a-minute-ai-template';

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
  steps: 'shared' | readonly WassupHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

export const WASSUP_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'wassup in a minute ai',
    slug: 'wassup-in-a-minute-ai',
    title: {
      en: 'Wassup in a Minute AI – Make the Sway Edit on ViralReel',
      zh: 'Wassup in a Minute AI：在 ViralReel 制作摇摆动画',
    },
    description: {
      en: 'wassup in a minute ai: ViralReel turns one photo into a swaying streetwear anime character on a white background. Download the MP4, add the trend sound in TikTok. Not the original animation and not the song.',
      zh: 'wassup in a minute ai：ViralReel 用一张照片生成白底街服动漫角色并做摇摆动画。下载 MP4，在 TikTok 加原声。不是原动画，也不是那首歌。',
    },
    h1: { en: 'Wassup in a Minute AI', zh: 'Wassup in a Minute AI' },
    lead: {
      en: 'Wassup in a Minute AI on ViralReel is a new animation from one photo: you as a streetwear anime character, swaying on the beat. It is not the original edit and not the song.',
      zh: 'ViralReel 上的 Wassup in a Minute AI 是用一张照片做的新动画：你被画成街服动漫角色，按节拍摇摆。这不是原片，也不是那首歌。',
    },
    guideTitle: {
      en: 'How to make a Wassup in a Minute AI video',
      zh: '如何制作 Wassup in a Minute AI 视频',
    },
    body: {
      en: [
        'A wassup in a minute ai search usually means one thing: the TikTok edit where hand-drawn streetwear anime characters sway side to side on a white background to a jersey-club beat. ViralReel makes the AI version of that format with you as the character.',
        'You do not write a prompt and you do not paste your photo into a drawing app. Open the template, upload one photo you have permission to use, and generate a 9:16 MP4. Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight are five outfits of the same sway. The card videos show the format; they are not the original footage.',
        'The download does not include the sound. Search "wassup in a minute" in the TikTok, Reels, or Shorts sound picker and add the jersey-club remix there, then turn on the AI label where the app asks. ViralReel does not license that audio and is not affiliated with the trend creators.',
      ],
      zh: [
        '搜 wassup in a minute ai 通常指向同一件事：TikTok 上手绘风街服动漫角色在白底上按 jersey club 节拍左右摇摆的剪辑。ViralReel 做的是这个格式的 AI 版，主角是你。',
        '你不用写提示词，也不用把照片贴进绘图软件。打开模板，上传一张你有权使用的照片，生成一条 9:16 的 MP4。甩钱原版、黑羽绒经典、全黑装、球衣版和大块头是同一种摇摆的五种造型。卡片视频用来展示格式；它们不是原片。',
        '下载文件不包含原声。在 TikTok、Reels 或 Shorts 的曲库里搜索「wassup in a minute」另加热梗原声，并在应用要求时打开 AI 标注。ViralReel 不授权这段音频，也与趋势作者没有关系。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is Wassup in a Minute AI on ViralReel?', zh: 'ViralReel 上的 Wassup in a Minute AI 是什么？' },
        a: {
          en: 'A new AI animation made from one photo: you as an original streetwear anime character, swaying on the beat. It is not the original TikTok edit, not a fan artist\'s drawing, and not the song.',
          zh: '用一张照片生成的新 AI 动画：你被画成原创街服动漫角色并按节拍摇摆。它不是原始 TikTok 剪辑，不是粉丝画手的原画，也不是那首歌。',
        },
      },
      {
        q: { en: 'Which AI model makes the sway?', zh: '摇摆动画用什么 AI 模型？' },
        a: {
          en: 'ViralReel runs the scene through the video models configured for this family (image-to-video models such as Kling reference and Seedance). You pick the model in the generator; the credit cost is shown before you start.',
          zh: 'ViralReel 用该系列配置的视频模型跑这个场景（Kling reference、Seedance 等图生视频模型）。生成器里可以选模型，积分在生成前显示。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute ai video',
    slug: 'wassup-in-a-minute-ai-video',
    title: {
      en: 'Wassup in a Minute AI Video – Make the MP4 on ViralReel',
      zh: 'Wassup in a Minute AI 视频：在 ViralReel 制作 MP4',
    },
    description: {
      en: 'wassup in a minute ai video: ViralReel generates a swaying anime-character MP4 from one photo. The download is a new fictional animation, not the original TikTok and not a licensed copy of the sound.',
      zh: 'wassup in a minute ai video：ViralReel 用一张照片生成摇摆动漫角色 MP4。下载的是新的虚构动画，不是原 TikTok，也不是那段声音的授权拷贝。',
    },
    h1: { en: 'Wassup in a Minute AI video', zh: 'Wassup in a Minute AI 视频' },
    lead: {
      en: 'A Wassup in a Minute AI video on ViralReel is an MP4 made from one photo: a full-body streetwear anime character on white, swaying side to side.',
      zh: 'ViralReel 上的 Wassup in a Minute AI 视频是用一张照片做成的 MP4：白底全身街服动漫角色左右摇摆。',
    },
    guideTitle: {
      en: 'How to make a Wassup in a Minute AI video',
      zh: '如何制作 Wassup in a Minute AI 视频',
    },
    body: {
      en: [
        'A wassup in a minute ai video here is the sway remake: a full-body anime streetwear drawing on a plain white background, rocking side to side on the jersey-club beat with a soft drop shadow moving behind it. ViralReel exports that as a new MP4 from your photo.',
        'Pick Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight, keep 9:16, and read the credit cost the generator shows before you start. The file is the picture only. It is not the original TikTok and it does not contain the trend audio.',
      ],
      zh: [
        '这里的 wassup in a minute ai video 是摇摆重拍：纯白背景上的全身街服动漫形象，按 jersey club 节拍左右摇摆，身后跟着一道会动的软阴影。ViralReel 用你的照片把它导出成一条新的 MP4。',
        '选甩钱原版、黑羽绒经典、全黑装、球衣版或大块头，保持 9:16，生成前看清生成器显示的积分。文件只有画面。它不是原始 TikTok，也不包含那段热梗原声。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Wassup in a Minute AI video the original clip?', zh: 'Wassup in a Minute AI 视频是原片吗？' },
        a: {
          en: 'No. It is a new MP4 generated from your photo. ViralReel does not reupload the original animation or the fan artists\' drawings.',
          zh: '不是。它是用你的照片新生成的 MP4。ViralReel 不转载原动画，也不使用粉丝画手的原画。',
        },
      },
      {
        q: { en: 'How long is the video?', zh: '视频有多长？' },
        a: {
          en: 'Fifteen seconds. The template only offers the 15s option so the sway lands on the beat.',
          zh: '十五秒。模板只提供 15s 一档，保证摇摆落在节拍上。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute template',
    slug: 'wassup-in-a-minute-template',
    title: {
      en: 'Wassup in a Minute Template – One Photo, Five Outfits | ViralReel',
      zh: 'Wassup in a Minute 模板：一张照片，五种造型 | ViralReel',
    },
    description: {
      en: 'wassup in a minute template: five ready-made variants on ViralReel — Money Fan, Puffer Classic, All Black, Jersey Look, Heavyweight. Upload one photo, generate a 9:16 MP4, add the trend sound in TikTok.',
      zh: 'wassup in a minute template：ViralReel 的五个现成变体——甩钱原版、黑羽绒经典、全黑装、球衣版、大块头。上传一张照片，生成 9:16 MP4，在 TikTok 加原声。',
    },
    h1: { en: 'Wassup in a Minute template', zh: 'Wassup in a Minute 模板' },
    lead: {
      en: 'The Wassup in a Minute template on ViralReel packages the trend: the white background, the streetwear anime look, and the sway are pre-built. You bring one photo.',
      zh: 'ViralReel 的 Wassup in a Minute 模板把这条趋势打包好了：白底、街服动漫造型和摇摆动作都是现成的。你只需要一张照片。',
    },
    guideTitle: {
      en: 'What the Wassup in a Minute template includes',
      zh: 'Wassup in a Minute 模板包含什么',
    },
    body: {
      en: [
        'A wassup in a minute template saves you the two-step workflow creators used in late October 2026: an AI image prompt to draw the character, then keyframing the sway by hand in an editor. ViralReel folds both steps into one generation from one photo.',
        'The template family has five variants: Money Fan (the fanned stack of banknotes from the original edit), Puffer Classic (glossy black puffer over a white tee and cap), All Black (hoodie, chains, cargos), Jersey Look (oversized sports jersey), and Heavyweight (a broad imposing build). Each variant is the same white-background sway in a different outfit.',
        'Prompt editing stays open: if you want a different jacket color or pose, edit the pre-filled prompt before you generate. The ratio stays 9:16 and the length stays 15 seconds so the result still reads as this trend.',
      ],
      zh: [
        'wassup in a minute template 替你省掉了 2026 年 10 月底创作者们用的两步流程：先用 AI 图像提示词画出角色，再在剪辑软件里手动打关键帧做摇摆。ViralReel 把两步合并成一次生成，只需要一张照片。',
        '模板系列有五个变体：甩钱原版（原片里挥开的那沓钞票）、黑羽绒经典（亮面黑羽绒服配白 T 和棒球帽）、全黑装（连帽衫、链子、工装裤）、球衣版（宽松运动球衣）和大块头（宽厚的壮硕身形）。每个变体都是同一套白底摇摆，换的是造型。',
        '提示词保持可编辑：想换外套颜色或姿势，生成前直接改预填的提示词。画幅保持 9:16，时长保持 15 秒，成片才能被认成这条趋势。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How many Wassup in a Minute templates are there?', zh: 'Wassup in a Minute 模板有几个？' },
        a: {
          en: 'Five: Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight. All five are the same sway with different outfits.',
          zh: '五个：甩钱原版、黑羽绒经典、全黑装、球衣版和大块头。五个都是同一种摇摆，换的是造型。',
        },
      },
      {
        q: { en: 'Can I edit the template prompt?', zh: '可以改模板提示词吗？' },
        a: {
          en: 'Yes. The prompt is pre-filled for each variant and stays editable before you generate. Keep the white background and the sway so the result still reads as the trend.',
          zh: '可以。每个变体的提示词已预填，生成前可编辑。保留白底和摇摆动作，成片才能被认成这条趋势。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute meme',
    slug: 'wassup-in-a-minute-meme',
    title: {
      en: 'Wassup in a Minute Meme, Explained | ViralReel',
      zh: 'Wassup in a Minute 梗详解 | ViralReel',
    },
    description: {
      en: 'wassup in a minute meme explained: the Atlanta Lock streetwear anime drawings, the "wassup, been a minute" jersey-club sound, and the sway edit that named the trend. Make your own AI version on ViralReel.',
      zh: 'wassup in a minute 梗详解：Atlanta Lock 街服动漫画风、「wassup, been a minute」jersey club 声音，以及给趋势命名的摇摆剪辑。在 ViralReel 制作你自己的 AI 版。',
    },
    h1: { en: 'Wassup in a Minute meme', zh: 'Wassup in a Minute 梗' },
    lead: {
      en: 'The wassup in a minute meme is a row of swaying streetwear anime characters on a white background — Atlanta Lock drawings moving to a two-word hook.',
      zh: 'wassup in a minute 梗就是一排在白底上摇摆的街服动漫角色——Atlanta Lock 画风配两词hook。',
    },
    guideTitle: {
      en: 'Where the Wassup in a Minute meme comes from',
      zh: 'Wassup in a Minute 梗的来源',
    },
    body: {
      en: [
        'The look is older than the sound\'s fame. For years, fans of the football anime Blue Lock have drawn its players as Atlanta rappers — puffer jackets, gold chains, baggy jeans, a fanned stack of cash. The fan nickname for that style is Atlanta Lock.',
        'The sound is a jersey-club remix built on "From Time", the 2013 Drake song with Jhené Aiko. Its line "wassup, been a minute" is what most people hear as "wassup in a minute", which is why the trend is spelled so many ways: wassup been a minute, wassup wait a minute, wasala in a minute.',
        'On 22 October 2026 the US animator @ristyisvalid posted several of those streetwear drawings swaying side to side on a white background; the follow-up post captioned "Wassup in a minute" passed a million views within days and gave the trend its name. Through 24–25 October fans redrew the edit with characters from other anime and AI "upload one photo" tutorials spread, which is the version ViralReel automates: you become the swaying character instead of a show character.',
      ],
      zh: [
        '画风的走红早于声音。几年来，《Blue Lock》足球动漫的粉丝一直把角色画成亚特兰大说唱歌手——羽绒服、金链子、阔腿裤、挥开的一沓现金。粉丝给这种画风的昵称是 Atlanta Lock。',
        '声音是一段 jersey club 混音，取自 Drake 与 Jhené Aiko 2013 年的《From Time》。歌词「wassup, been a minute」被大多数人听成「wassup in a minute」，所以这条趋势的写法五花八门：wassup been a minute、wassup wait a minute、wasala in a minute。',
        '2026 年 10 月 22 日，美国动画师 @ristyisvalid 发布了几张街服角色在白底上左右摇摆的动画；次日标注「Wassup in a minute」的后续帖几天内破百万播放，趋势由此得名。10 月 24-25 日起，粉丝用其他动漫角色重绘这条剪辑，AI「上传一张照片」的教程也开始扩散——这正是 ViralReel 自动化的版本：成为摇摆角色的不是动漫人物，而是你。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Why do people call it wassup been a minute?', zh: '为什么也有人叫它 wassup been a minute？' },
        a: {
          en: 'Because the lyric in the trend sound is "wassup, been a minute". "Wassup in a minute" is the mishearing that became the name, so both spellings point at the same trend.',
          zh: '因为原声里的歌词是「wassup, been a minute」。「Wassup in a minute」是将错就错的听写，后来成了趋势的名字，所以两种写法指的是同一条趋势。',
        },
      },
      {
        q: { en: 'Is the meme only for Blue Lock fans?', zh: '这个梗只有 Blue Lock 粉丝玩吗？' },
        a: {
          en: 'No. It started in that fandom, but the AI wave is about putting yourself in the outfit. Anyone can make one from a photo on ViralReel.',
          zh: '不是。它起于那个粉丝圈，但 AI 浪潮的核心是把自己放进这身造型。任何人在 ViralReel 用一张照片都能做。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute tiktok',
    slug: 'wassup-in-a-minute-tiktok',
    title: {
      en: 'Wassup in a Minute on TikTok – How to Join the Trend | ViralReel',
      zh: 'Wassup in a Minute TikTok：怎么上这条趋势 | ViralReel',
    },
    description: {
      en: 'wassup in a minute TikTok: how the trend works, which sound to add, which hashtags to use, and how to make your own sway edit from one photo on ViralReel.',
      zh: 'wassup in a minute TikTok：趋势怎么玩、加什么原声、用什么话题标签，以及如何在 ViralReel 用一张照片做你自己的摇摆剪辑。',
    },
    h1: { en: 'Wassup in a Minute on TikTok', zh: 'Wassup in a Minute 上的 TikTok' },
    lead: {
      en: 'Here is how to join the wassup in a minute trend on TikTok: make your character, download the MP4, add the trend sound, post with the right hashtags.',
      zh: '上 wassup in a minute 趋势的四步：做你的角色、下载 MP4、加热梗原声、带对标签发布。',
    },
    guideTitle: {
      en: 'How to post a wassup in a minute TikTok',
      zh: '怎么发布 wassup in a minute TikTok',
    },
    body: {
      en: [
        'The wassup in a minute TikTok format is simple to recognize: a hand-drawn streetwear anime character sways side to side on a white background, and the jersey-club remix lands the line "wassup, been a minute" right as the sway starts.',
        'On ViralReel you make your own version in three taps: upload one photo, generate, download the 9:16 MP4. Then, in TikTok, search "wassup in a minute" in the sound picker and add the trend sound so your post joins the format — ViralReel exports the picture only and does not license that audio.',
        'Posting tips from the top trend posts: start the clip on the first beat so your sway lands on "wassup"; make one for each friend and post them back to back like the original row of characters; use #wassupinaminute and #animation so the right people find it; keep the AI-generated label on, because the character is a drawing of you, not real animation.',
      ],
      zh: [
        'wassup in a minute 的 TikTok 格式一眼就能认出来：白底上的手绘街服动漫角色左右摇摆，jersey club 混音里「wassup, been a minute」那句正好压在摇摆起步上。',
        '在 ViralReel，做你自己的版本只要三下：上传一张照片、生成、下载 9:16 的 MP4。然后在 TikTok 曲库里搜索「wassup in a minute」加热梗原声，你的帖子才会进同一条格式——ViralReel 只导出画面，不授权那段音频。',
        '热门帖子的发布技巧：让片段从第一拍开始，摇摆正好落在「wassup」上；给每个朋友各做一条，像原版角色排排站那样连着发；用 #wassupinaminute 和 #animation 让对的人刷到你；保留 AI 生成标注，因为角色是你的画像，不是真实动画。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which sound do I add on TikTok?', zh: 'TikTok 上加哪个声音？' },
        a: {
          en: 'The jersey-club remix people call the wassup in a minute sound. Search "wassup in a minute" or "wassup been a minute" in the TikTok sound picker and pick the top trend sound.',
          zh: '大家叫它 wassup in a minute 声音的那段 jersey club 混音。在 TikTok 曲库搜「wassup in a minute」或「wassup been a minute」，选最热的那条趋势原声。',
        },
      },
      {
        q: { en: 'Which hashtags should I use?', zh: '用什么话题标签？' },
        a: {
          en: '#wassupinaminute is the trend hashtag, with #animation and #atlantalock for the art style. Keep the AI label on as required.',
          zh: '#wassupinaminute 是趋势标签，再配 #animation 和 #atlantalock 标记画风。按平台要求保留 AI 标注。',
        },
      },
    ],
  },
  {
    keyword: 'wassup been a minute',
    slug: 'wassup-been-a-minute',
    title: {
      en: 'Wassup Been a Minute – the Line Behind the Trend | ViralReel',
      zh: 'Wassup Been a Minute：这条趋势背后的那句歌词 | ViralReel',
    },
    description: {
      en: 'wassup been a minute: the jersey-club line that named the October 2026 sway trend, why people spell it wassup in a minute, and how to make your own version on ViralReel.',
      zh: 'wassup been a minute：命名 2026 年 10 月摇摆趋势的那句歌词，为什么有人拼成 wassup in a minute，以及如何在 ViralReel 制作你自己的版本。',
    },
    h1: { en: 'Wassup been a minute', zh: 'Wassup been a minute' },
    lead: {
      en: '"Wassup, been a minute" is the line in the trend sound. "Wassup in a minute" is what people heard. Same trend, two spellings.',
      zh: '「Wassup, been a minute」是趋势原声里的歌词。「Wassup in a minute」是大家听出来的版本。同一条趋势，两种拼法。',
    },
    guideTitle: {
      en: 'Why the trend has two names',
      zh: '这条趋势为什么有两个名字',
    },
    body: {
      en: [
        'The trend sound is a jersey-club remix of "From Time", the 2013 Drake track with Jhené Aiko. Early in the remix the vocal says "wassup, been a minute" — a greeting. Listeners split between "wassup in a minute", "wassup wait a minute", and even "wasala in a minute", and the hashtag #wassupinaminute settled the official spelling.',
        'The character animation underneath is the Atlanta Lock sway: full-body streetwear anime drawings rocking side to side on a white background. ViralReel makes the AI version of that format from one photo — Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight — and you add the sound yourself in TikTok, because the audio belongs to its creators and ViralReel does not license it.',
      ],
      zh: [
        '趋势原声是一段 jersey club 混音，取自 Drake 与 Jhené Aiko 2013 年的《From Time》。混音开头的人声是「wassup, been a minute」——一句打招呼。听众各听各的：wassup in a minute、wassup wait a minute，甚至 wasala in a minute，最终话题标签 #wassupinaminute 定下了官方拼法。',
        '角色动画是 Atlanta Lock 摇摆：白底上的全身街服动漫形象左右摇摆。ViralReel 用一张照片做这个格式的 AI 版——甩钱原版、黑羽绒经典、全黑装、球衣版或大块头——原声由你在 TikTok 里自己加，因为音频归创作者所有，ViralReel 不做授权。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is it wassup in a minute or wassup been a minute?', zh: '到底是 wassup in a minute 还是 wassup been a minute？' },
        a: {
          en: 'Both spellings point at the same trend. The lyric is "wassup, been a minute"; the hashtag is #wassupinaminute.',
          zh: '两种拼法都指向同一条趋势。歌词是「wassup, been a minute」；话题标签是 #wassupinaminute。',
        },
      },
      {
        q: { en: 'Does ViralReel include the sound?', zh: 'ViralReel 的成片带声音吗？' },
        a: {
          en: 'The MP4 carries only the picture. Add the trend sound inside TikTok, Reels, or Shorts when you post.',
          zh: 'MP4 只有画面。发布时在 TikTok、Reels 或 Shorts 里另加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'wassup wait a minute',
    slug: 'wassup-wait-a-minute',
    title: {
      en: 'Wassup Wait a Minute – Another Name for the Sway Trend | ViralReel',
      zh: 'Wassup Wait a Minute：摇摆趋势的另一个名字 | ViralReel',
    },
    description: {
      en: 'wassup wait a minute: the misheard spelling of the October 2026 sway trend, why one sound has three names, and how to make your own wassup in a minute AI video on ViralReel.',
      zh: 'wassup wait a minute：2026 年 10 月摇摆趋势的另一种听写，为什么一段声音有三个名字，以及如何在 ViralReel 制作你自己的 wassup in a minute AI 视频。',
    },
    h1: { en: 'Wassup wait a minute', zh: 'Wassup wait a minute' },
    lead: {
      en: '"Wassup wait a minute" is one of the three ways people hear the same trend sound. Same edit, same sway, same hashtag.',
      zh: '「Wassup wait a minute」是同一段趋势声音的三种听法之一。同一条剪辑，同一种摇摆，同一个话题标签。',
    },
    guideTitle: {
      en: 'Why the trend sound has three names',
      zh: '趋势声音为什么有三个名字',
    },
    body: {
      en: [
        'The wassup in a minute sound is a jersey-club remix built on "From Time", the 2013 Drake track with Jhené Aiko. Early in the remix the vocal greets with "wassup, been a minute" — and listeners split three ways: wassup in a minute, wassup been a minute, and wassup wait a minute. Some even hear "wasala in a minute".',
        'The hashtag #wassupinaminute settled the official spelling, but search volume splits across all three phrases, and the animation underneath is the same: streetwear anime characters swaying side to side on a white background. ViralReel makes the AI version of that format from one to four photos — Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight — and you add the trend sound yourself in TikTok.',
        'Whichever spelling you searched, the way in is the same: upload your photo, generate the 9:16 MP4, then search the sound in TikTok, Reels, or Shorts and post with the AI label on. ViralReel does not license the audio.',
      ],
      zh: [
        'wassup in a minute 的原声是一段 jersey club 混音，取自 Drake 与 Jhené Aiko 2013 年的《From Time》。混音开头的人声是「wassup, been a minute」——听众分成三派：wassup in a minute、wassup been a minute 和 wassup wait a minute，甚至还有人听成「wasala in a minute」。',
        '话题标签 #wassupinaminute 定下了官方拼法，但搜索量分散在三种写法上；下面的动画是同一个：街服动漫角色在白底上左右摇摆。ViralReel 用一至四张照片做这个格式的 AI 版——甩钱原版、黑羽绒经典、全黑装、球衣版或大块头——原声由你在 TikTok 里自己加。',
        '不管你搜的是哪种拼法，入场方式都一样：上传照片、生成 9:16 的 MP4，然后在 TikTok、Reels 或 Shorts 里搜原声、带上 AI 标注发布。ViralReel 不授权那段音频。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is wassup wait a minute a different trend?', zh: 'wassup wait a minute 是另一条趋势吗？' },
        a: {
          en: 'No. It is one of the misheard spellings of the same October 2026 sway trend. The hashtag spelling is #wassupinaminute.',
          zh: '不是。它是同一条 2026 年 10 月摇摆趋势的误听拼法之一。话题标签的拼法是 #wassupinaminute。',
        },
      },
      {
        q: { en: 'Which spelling should I use in my caption?', zh: '发帖时该用哪种拼法？' },
        a: {
          en: 'Use #wassupinaminute for the hashtag, and any spelling in the caption text — the sound and the format are what carry the post.',
          zh: '话题标签用 #wassupinaminute，文案里用哪种拼法都行——带着帖子走的是原声和格式。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute song',
    slug: 'wassup-in-a-minute-song',
    title: {
      en: 'The Wassup in a Minute Song – the Sound Behind the Sway | ViralReel',
      zh: 'Wassup in a Minute 的歌：摇摆背后的那段声音 | ViralReel',
    },
    description: {
      en: "wassup in a minute song: the jersey-club remix of Drake's \"From Time\" that powers the October 2026 sway trend — what it is, who made it, and how to add it to your own video from ViralReel.",
      zh: 'wassup in a minute song：驱动 2026 年 10 月摇摆趋势的《From Time》jersey club 混音——它是什么、谁做的，以及如何把它加到你从 ViralReel 导出的视频里。',
    },
    h1: { en: 'The wassup in a minute song', zh: 'wassup in a minute 的歌' },
    lead: {
      en: 'The wassup in a minute song is a jersey-club remix of "From Time" by Drake with Jhené Aiko — the line "wassup, been a minute" is the hook the whole trend sways to.',
      zh: 'wassup in a minute 的歌是《From Time》（Drake 与 Jhené Aiko）的 jersey club 混音——「wassup, been a minute」这句就是全趋势跟着摇摆的 hook。',
    },
    guideTitle: {
      en: 'What the wassup in a minute song is',
      zh: 'wassup in a minute 的歌是什么',
    },
    body: {
      en: [
        'People searching for the wassup in a minute song want the sound behind the swaying anime edits. It is a jersey-club remix built on "From Time", Drake\'s 2013 track with Jhené Aiko. Early in the remix the vocal says "wassup, been a minute", which most listeners hear as "wassup in a minute" — the mishearing that named the trend.',
        'The song belongs to its creators and rights holders. ViralReel does not license it, and the MP4 you download from ViralReel carries only the picture. That is by design: adding the official sound inside TikTok is what pushes your post into the trend\'s feed.',
        'To use it: search "wassup in a minute" or "wassup been a minute" in the TikTok, Reels, or Shorts sound picker, pick the top trend sound, and start your clip on the first beat. Pair it with your ViralReel sway video and the hashtags #wassupinaminute and #animation.',
      ],
      zh: [
        '搜 wassup in a minute song 的人要的是摇摆动画背后的那段声音。它是一段 jersey club 混音，取自 Drake 与 Jhené Aiko 2013 年的《From Time》。混音开头的人声是「wassup, been a minute」，大多数人听成「wassup in a minute」——这条趋势的名字就来自这个误听。',
        '这首歌归创作者和版权方所有。ViralReel 不做授权，你从 ViralReel 下载的 MP4 只有画面。这是刻意的设计：在 TikTok 里加官方原声，你的帖子才会进趋势的信息流。',
        '用法：在 TikTok、Reels 或 Shorts 的曲库里搜「wassup in a minute」或「wassup been a minute」，选最热的那条趋势原声，让片段从第一拍开始。配上你的 ViralReel 摇摆视频和 #wassupinaminute、#animation 标签。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who made the wassup in a minute sound?', zh: 'wassup in a minute 的声音是谁做的？' },
        a: {
          en: 'A jersey-club remix of "From Time" (Drake with Jhené Aiko) that circulated on TikTok from January 2026 and became the trend sound in late October 2026. ViralReel is not affiliated with the rights holders.',
          zh: '一段《From Time》（Drake 与 Jhené Aiko）的 jersey club 混音，2026 年 1 月起在 TikTok 流传，10 月底成为趋势原声。ViralReel 与版权方没有关系。',
        },
      },
      {
        q: { en: 'Does my ViralReel download include the song?', zh: 'ViralReel 的成片带这首歌吗？' },
        a: {
          en: 'No. The MP4 is picture only. Add the trend sound inside TikTok, Reels, or Shorts when you post.',
          zh: '不带。MP4 只有画面。发布时在 TikTok、Reels 或 Shorts 里另加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute original',
    slug: 'wassup-in-a-minute-original',
    title: {
      en: 'The Original Wassup in a Minute Edit – Where It Started | ViralReel',
      zh: 'Wassup in a Minute 原版：趋势从哪条开始 | ViralReel',
    },
    description: {
      en: 'wassup in a minute original: the 22 October 2026 @ristyisvalid post that started the sway trend, the follow-up that named it, and how to make your own AI version on ViralReel instead of reuploading the original.',
      zh: 'wassup in a minute original：2026 年 10 月 22 日 @ristyisvalid 那条起点帖、定名的后续帖，以及如何在 ViralReel 制作你自己的 AI 版而不是转载原片。',
    },
    h1: { en: 'The wassup in a minute original', zh: 'wassup in a minute 原版' },
    lead: {
      en: "The original wassup in a minute edit is @ristyisvalid's 22 October 2026 animation: streetwear anime drawings swaying on a white background. Make your own version instead of reposting it.",
      zh: 'wassup in a minute 的原版是 @ristyisvalid 2026 年 10 月 22 日的动画：街服动漫形象在白底上摇摆。做你自己的版本，不要转载原片。',
    },
    guideTitle: {
      en: 'The original posts behind the trend',
      zh: '趋势背后的原始帖子',
    },
    body: {
      en: [
        "The wassup in a minute original is a pair of TikTok posts by the US animator @ristyisvalid. On 22 October 2026 the first post showed hand-drawn streetwear anime characters swaying side to side on a plain white background; the next day's follow-up, captioned \"Wassup in a minute\", passed a million views within days and gave the trend its name.",
        'Reuploading the original clip is not the move. The format spread because people remake it with new characters — and the AI wave put your own face in the row. On ViralReel you upload one to four photos and get a new 9:16 animation of original streetwear characters swaying to the beat, with no fan artist\'s drawing and no show character involved.',
        'If you want to credit the trend when you post, link the sound rather than the video: add the official "wassup in a minute" sound inside TikTok, use #wassupinaminute, and keep the AI-generated label on. Your clip is a new fictional animation, not a copy of the original file.',
      ],
      zh: [
        'wassup in a minute 的原版是美国动画师 @ristyisvalid 的两条 TikTok。2026 年 10 月 22 日第一条展示了手绘街服动漫角色在纯白背景上左右摇摆；次日标注「Wassup in a minute」的后续帖几天内破百万播放，趋势由此得名。',
        '转载原片不是正确玩法。这个格式能传开是因为大家不断换角色重拍——AI 浪潮则把你自己的脸放进了那排角色里。在 ViralReel，你上传一至四张照片，就能得到一条全新的 9:16 动画：原创街服角色按节拍摇摆，不涉及粉丝画手的原画，也没有任何动漫角色。',
        '发布时如果想致敬趋势，链接声音而不是视频：在 TikTok 里加官方「wassup in a minute」原声，用 #wassupinaminute，保留 AI 生成标注。你的片子是一条新的虚构动画，不是原文件的拷贝。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who made the original wassup in a minute edit?', zh: 'wassup in a minute 原版是谁做的？' },
        a: {
          en: 'The US animator @ristyisvalid — the 22 October 2026 post started the trend and the 23 October follow-up named it. ViralReel is not affiliated with the creator.',
          zh: '美国动画师 @ristyisvalid——10 月 22 日的帖子开启了趋势，10 月 23 日的后续帖给它定了名。ViralReel 与该创作者没有关系。',
        },
      },
      {
        q: { en: 'Can I repost the original video?', zh: '可以转载原视频吗？' },
        a: {
          en: 'No. The original belongs to its creator. Make your own AI version from your photo on ViralReel — that is the version the trend format wants.',
          zh: '不可以。原片归创作者所有。在 ViralReel 用你的照片做你自己的 AI 版——趋势格式要的正是这个。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute filter',
    slug: 'wassup-in-a-minute-filter',
    title: {
      en: 'Wassup in a Minute Filter – the AI Version That Works | ViralReel',
      zh: 'Wassup in a Minute 滤镜：真正能用的 AI 版 | ViralReel',
    },
    description: {
      en: 'Looking for a wassup in a minute filter? There is no official TikTok filter — ViralReel is the working AI version: upload one to four photos, get the swaying streetwear anime character MP4.',
      zh: '在找 wassup in a minute 滤镜？TikTok 并没有官方滤镜——ViralReel 是真正能用的 AI 版：上传一至四张照片，直接导出摇摆街服动漫角色 MP4。',
    },
    h1: { en: 'Wassup in a minute filter', zh: 'wassup in a minute 滤镜' },
    lead: {
      en: 'People search for a wassup in a minute filter expecting a TikTok effect. There is none — here is the AI way that actually produces the clip.',
      zh: '很多人搜 wassup in a minute 滤镜，以为 TikTok 有个特效。其实没有——真正能出片的是 AI 流程。',
    },
    guideTitle: {
      en: 'How the "wassup in a minute filter" actually works',
      zh: '「wassup in a minute 滤镜」实际上怎么用',
    },
    body: {
      en: [
        'A wassup in a minute filter does not exist as a TikTok effect. The trend is hand-drawn animation, and the AI versions are made with image-to-video tools, not camera filters. That is why filter searches end on template sites like this one.',
        'The ViralReel version works like a filter with better output: upload one to four photos, pick an outfit (Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight), and generate. The site draws you as an original streetwear anime character on a white background and animates the side-to-side sway — a 9:16 MP4 you can post with the trend sound.',
        'Compared with the manual workflow (AI image prompt, then keyframing the shake in an editor), this is the one-tap path. The result is a new fictional animation of you, which is also what keeps it postable: no show characters, no fan-art reuploads.',
      ],
      zh: [
        'wassup in a minute 滤镜并不是一个 TikTok 特效。这条趋势是手绘动画，AI 版用的是图生视频工具，不是摄像头滤镜——所以搜滤镜最终都会落到模板站上。',
        'ViralReel 的版本用起来像滤镜，但产出更好：上传一至四张照片，选一套造型（甩钱原版、黑羽绒经典、全黑装、球衣版或大块头），生成。网站把你画成白底原创街服动漫角色并做出左右摇摆——一条可以配原声发布的 9:16 MP4。',
        '对比手工流程（先跑 AI 图像提示词，再在剪辑软件里打关键帧做抖动），这是一键路径。结果是一条以你为主角的新虚构动画，这也是它可以直接发布的原因：没有动漫角色，没有搬运粉丝画稿。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there an official wassup in a minute filter on TikTok?', zh: 'TikTok 上有官方的 wassup in a minute 滤镜吗？' },
        a: {
          en: 'No. The trend is animation, not a camera effect. AI template sites like ViralReel are how people make their own version.',
          zh: '没有。这条趋势是动画，不是摄像头特效。大家用 ViralReel 这类 AI 模板站做自己的版本。',
        },
      },
      {
        q: { en: 'How is this different from a filter?', zh: '这和滤镜有什么区别？' },
        a: {
          en: 'A filter changes your camera image live. This generates a new animation file from your photo — you upload, wait a few minutes, and download an MP4.',
          zh: '滤镜实时改变摄像头画面；这个是用你的照片生成一条新的动画文件——上传、等几分钟、下载 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute blue lock',
    slug: 'wassup-in-a-minute-blue-lock',
    title: {
      en: 'Wassup in a Minute Blue Lock – the Atlanta Lock Connection | ViralReel',
      zh: 'Wassup in a Minute 与 Blue Lock：Atlanta Lock 的渊源 | ViralReel',
    },
    description: {
      en: 'wassup in a minute Blue Lock: why the sway trend looks like Blue Lock characters as Atlanta rappers, and how ViralReel makes you the character instead — original art, no show characters.',
      zh: 'wassup in a minute Blue Lock：为什么摇摆趋势看着像 Blue Lock 角色扮亚特兰大说唱歌手，以及 ViralReel 如何让你本人成为角色——原创画风，不用动漫角色。',
    },
    h1: { en: 'Wassup in a minute Blue Lock', zh: 'wassup in a minute 与 Blue Lock' },
    lead: {
      en: 'The wassup in a minute trend grew out of Blue Lock fan art — but the AI version that works for posting draws you, not a show character.',
      zh: 'wassup in a minute 趋势脱胎于 Blue Lock 粉丝画——但真正适合发布的 AI 版画的是你，不是动漫角色。',
    },
    guideTitle: {
      en: 'The Blue Lock connection, explained',
      zh: '与 Blue Lock 的渊源，一次说清',
    },
    body: {
      en: [
        'The drawing style behind the wassup in a minute trend is Atlanta Lock: a fan nickname for drawings of the Blue Lock football anime cast as Atlanta rappers — glossy puffer jackets, gold chains, baggy jeans, and a fanned stack of cash. The original edit and many early remakes used Blue Lock characters.',
        'There is a hard line between enjoying that fan art and posting it. The drawings belong to fan artists, and the characters belong to the show. ViralReel takes neither: your video is an original anime drawing of you (or your friends, one per photo, up to four) in the same streetwear style on the same white background.',
        'That is also why the AI version is safe to post: no Blue Lock character appears in it, no fan artist\'s work is reused, and the outfit is generic streetwear with no logos or numbers. You keep the look of the trend and lose the copyright problem.',
      ],
      zh: [
        'wassup in a minute 趋势背后的画风是 Atlanta Lock：粉丝对「把《Blue Lock》足球动漫角色画成亚特兰大说唱歌手」的昵称——亮面羽绒服、金链子、阔腿牛仔裤、挥开的一沓现金。原版剪辑和早期大量重拍用的都是 Blue Lock 角色。',
        '「欣赏粉丝画」和「发布粉丝画」之间有一条硬线：画稿归粉丝画手所有，角色归作品方。ViralReel 两者都不碰：你的视频是以你（或你的朋友，一张照片一个人，最多四人）为原型的原创动漫形象，同样的街服画风、同样的白底。',
        '这也是 AI 版可以放心发布的原因：画面里没有 Blue Lock 角色，没有复用任何粉丝画稿，造型是无 logo、无号码的通用街服。你保住了趋势的观感，避开了版权问题。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can ViralReel draw a Blue Lock character?', zh: 'ViralReel 能画 Blue Lock 角色吗？' },
        a: {
          en: 'No. ViralReel draws original characters from your photos only. The output keeps the Atlanta Lock streetwear style without using any show character or fan artist\'s drawing.',
          zh: '不能。ViralReel 只用你的照片画原创角色。输出保留 Atlanta Lock 街服画风，但不使用任何动漫角色或粉丝画稿。',
        },
      },
      {
        q: { en: 'Is the Atlanta Lock look still recognizable without the characters?', zh: '没有那些角色，Atlanta Lock 的观感还在吗？' },
        a: {
          en: 'Yes — the look is the outfit, the white background, and the sway. Those three carry the trend, and all three are in every ViralReel version.',
          zh: '在——观感来自造型、白底和摇摆。这三样撑起整条趋势，ViralReel 的每个版本都有。',
        },
      },
    ],
  },
  {
    keyword: 'atlanta lock ai',
    slug: 'atlanta-lock-ai',
    title: {
      en: 'Atlanta Lock AI – Make the Streetwear Anime Sway on ViralReel',
      zh: 'Atlanta Lock AI：在 ViralReel 制作街服动漫摇摆',
    },
    description: {
      en: 'atlanta lock ai: the fan drawing style of Blue Lock characters as Atlanta rappers, turned into an AI trend. ViralReel draws you in the same style from one photo — original art, up to four people, 9:16 MP4.',
      zh: 'atlanta lock ai：把 Blue Lock 角色画成亚特兰大说唱歌手的粉丝画风演变成的 AI 趋势。ViralReel 用一张照片把你画成同款画风——原创画稿，最多四人，9:16 MP4。',
    },
    h1: { en: 'Atlanta Lock AI', zh: 'Atlanta Lock AI' },
    lead: {
      en: 'Atlanta Lock is the fan art style behind the wassup in a minute trend: anime characters drawn as Atlanta rappers. The AI version on ViralReel draws you in that style.',
      zh: 'Atlanta Lock 是 wassup in a minute 趋势背后的粉丝画风：把动漫角色画成亚特兰大说唱歌手。ViralReel 的 AI 版用这种画风画你。',
    },
    guideTitle: {
      en: 'How to make an Atlanta Lock AI video of yourself',
      zh: '如何制作你自己的 Atlanta Lock AI 视频',
    },
    body: {
      en: [
        'Atlanta Lock is what fans call the drawings of the Blue Lock football anime cast as Atlanta rappers: glossy puffer jackets, chains, baggy jeans, banknotes fanned in one hand. In late October 2026 those drawings started swaying side to side on white backgrounds to a jersey-club remix, and the wassup in a minute trend took off.',
        'An Atlanta Lock AI version that posts safely draws you — not Isagi, not Bachira, not any show character. On ViralReel you upload one to four photos and the template renders original streetwear anime characters in the same style: white background, soft drop shadow, the side-to-side sway on the beat, 9:16 vertical.',
        'Post it with the wassup in a minute trend sound added inside TikTok, Reels, or Shorts, plus #wassupinaminute and #atlantalock. The drawing, the outfit and the animation are generated fresh from your photos — no fan artist\'s file is reused, which is what keeps the post clean.',
      ],
      zh: [
        'Atlanta Lock 是粉丝对「把《Blue Lock》足球动漫角色画成亚特兰大说唱歌手」这批画作的昵称：亮面羽绒服、链子、阔腿牛仔裤、单手挥开的钞票。2026 年 10 月底，这些画作开始在白底上跟着 jersey club 混音左右摇摆，wassup in a minute 趋势随之爆火。',
        '能安全发布的 Atlanta Lock AI 版画的是你——不是洁世一，不是蜂乐，不是任何动漫角色。在 ViralReel 上传一至四张照片，模板按同款画风渲染原创街服动漫角色：白底、会动的软阴影、踩着节拍的左右摇摆、9:16 竖屏。',
        '发布时在 TikTok、Reels 或 Shorts 里加 wassup in a minute 趋势原声，带上 #wassupinaminute 和 #atlantalock。画稿、造型和动画都是从你的照片新生成的——没有复用任何粉丝画稿文件，帖子因此干净。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What does Atlanta Lock mean?', zh: 'Atlanta Lock 是什么意思？' },
        a: {
          en: 'A fan nickname for drawings of the Blue Lock anime cast as Atlanta rappers — puffer jackets, chains, baggy jeans, fanned cash. It is the art style behind the wassup in a minute trend.',
          zh: '粉丝对「把《Blue Lock》角色画成亚特兰大说唱歌手」画作的昵称——羽绒服、链子、阔腿裤、挥开的钞票。它是 wassup in a minute 趋势背后的画风。',
        },
      },
      {
        q: { en: 'Is Atlanta Lock AI legal to post?', zh: 'Atlanta Lock AI 发布出去合规吗？' },
        a: {
          en: 'The ViralReel version is: it draws original characters from your photos in a similar style, and does not reproduce any show character or fan artist\'s file. Keep the AI label on when you post.',
          zh: 'ViralReel 的版本合规：它用你的照片画同风格的原创角色，不复现任何动漫角色或粉丝画稿。发布时保留 AI 标注。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute generator',
    slug: 'wassup-in-a-minute-generator',
    title: {
      en: 'Wassup in a Minute Generator – One Tap, Your Swaying Character | ViralReel',
      zh: 'Wassup in a Minute 生成器：一键做出你的摇摆角色 | ViralReel',
    },
    description: {
      en: 'wassup in a minute generator: ViralReel turns one to four photos into a swaying streetwear anime character — no prompt, no keyframes, browser only. Download the 9:16 MP4 and post with the trend sound.',
      zh: 'wassup in a minute generator：ViralReel 用一至四张照片生成摇摆街服动漫角色——不写提示词、不打关键帧，浏览器直接出 9:16 MP4。',
    },
    h1: { en: 'Wassup in a minute generator', zh: 'wassup in a minute 生成器' },
    lead: {
      en: 'The wassup in a minute generator on ViralReel runs the whole trend for you: draw the character, animate the sway, export the MP4.',
      zh: 'ViralReel 的 wassup in a minute 生成器替你跑完整条趋势：画角色、做摇摆、导出 MP4。',
    },
    guideTitle: {
      en: 'Using the wassup in a minute generator',
      zh: '怎么用 wassup in a minute 生成器',
    },
    body: {
      en: [
        'The wassup in a minute generator is the one-tap path into the trend. Open it, upload one to four photos of people you have permission to use, and press generate. You get a 9:16 MP4 of original streetwear anime characters swaying side to side on a white background — the full format, no editing.',
        'Everything the trend needs is pre-built: the pure white background, the soft drop shadow, the streetwear outfits (Money Fan, Puffer Classic, All Black, Jersey Look, Heavyweight), and the side-to-side sway. The credit cost shows before you start, and the 15s length is fixed so the result reads as this trend.',
        'You write no prompt and touch no keyframes. Download the MP4, add the "wassup in a minute" sound inside TikTok, Reels, or Shorts, and post with #wassupinaminute and the AI label on.',
      ],
      zh: [
        'wassup in a minute 生成器是进这条趋势的一键路径。打开它，上传一至四张你有权使用的人物照片，点生成。你得到一条 9:16 的 MP4：原创街服动漫角色在白底上左右摇摆——完整格式，零剪辑。',
        '趋势需要的东西都预置好了：纯白背景、会动的软阴影、街服造型（甩钱原版、黑羽绒经典、全黑装、球衣版、大块头），以及左右摇摆。积分在生成前显示，15s 时长固定，成片才能被认成这条趋势。',
        '你不用写提示词，也不用碰关键帧。下载 MP4，在 TikTok、Reels 或 Shorts 里加「wassup in a minute」原声，带 #wassupinaminute 和 AI 标注发布。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the wassup in a minute generator free?', zh: 'wassup in a minute 生成器免费吗？' },
        a: {
          en: 'It runs on credits. The exact cost shows on the generator before you start, and failed jobs are refunded.',
          zh: '按积分计费。确切的积分在生成前显示在生成器上，失败的任务会退积分。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt in the generator?', zh: '生成器里需要写提示词吗？' },
        a: {
          en: 'No. The prompt is pre-filled per template variant and the admin settings tune it. You only upload photos and generate.',
          zh: '不需要。每个模板变体的提示词已预填，后台配置统一调优。你只管上传照片然后生成。',
        },
      },
    ],
  },
];

export function getWassupLongTail(slug: string): LongTailEntry | undefined {
  return WASSUP_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly WassupHowToStep[] {
  return entry.steps === 'shared' ? WASSUP_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  return entry.faq.map((item) => [item.q[zh ? 'zh' : 'en'], item.a[zh ? 'zh' : 'en']]);
}

export function wassupLinkGroups(zh: boolean) {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: WASSUP_TEMPLATE_PATH, label: zh ? 'Wassup in a Minute 模板' : 'Wassup in a Minute template' },
        { href: '/wassup-in-a-minute-ai', label: 'Wassup in a Minute AI' },
        { href: '/wassup-in-a-minute-ai-video', label: zh ? 'Wassup in a Minute AI 视频' : 'Wassup in a Minute AI video' },
        { href: '/wassup-in-a-minute-template', label: zh ? '模板变体' : 'Template variants' },
        { href: '/wassup-in-a-minute-generator', label: zh ? '生成器' : 'Generator' },
        { href: '/wassup-in-a-minute-filter', label: zh ? '滤镜版' : 'Filter version' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/wassup-in-a-minute-meme', label: zh ? '梗详解' : 'Wassup in a Minute meme' },
        { href: '/wassup-in-a-minute-tiktok', label: zh ? 'TikTok 玩法' : 'Wassup in a Minute TikTok' },
        { href: '/wassup-in-a-minute-original', label: zh ? '原版出处' : 'The original edit' },
        { href: '/wassup-in-a-minute-song', label: zh ? '趋势原声' : 'The trend song' },
        { href: '/wassup-been-a-minute', label: zh ? 'Wassup been a minute' : 'Wassup been a minute' },
        { href: '/wassup-wait-a-minute', label: 'Wassup wait a minute' },
      ],
    },
    {
      title: 'Atlanta Lock',
      links: [
        { href: '/atlanta-lock-ai', label: 'Atlanta Lock AI' },
        { href: '/wassup-in-a-minute-blue-lock', label: zh ? '与 Blue Lock 的关系' : 'Blue Lock connection' },
        { href: '/wassup-in-a-minute-filter', label: zh ? '滤镜版' : 'Filter version' },
      ],
    },
    {
      title: zh ? '其他趋势' : 'Other trends',
      links: [
        { href: '/tiny-desk-outstanding-ai-template', label: 'Tiny Desk Outstanding' },
        { href: '/window-peeper-ai-template', label: 'Window Peeper' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
        { href: '/pedra-do-sal-ai-template', label: 'Pedra do Sal' },
        { href: '/ba-ba-ba-dance-ai-template', label: 'Ba Ba Ba Dance' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: '/blog/what-is-wassup-in-a-minute', label: zh ? 'Wassup in a Minute 是什么' : 'What wassup in a minute is' },
        { href: '/blog/how-to-make-wassup-in-a-minute-ai-video', label: zh ? '如何制作 wassup in a minute AI 视频' : 'How to make a wassup in a minute AI video' },
        { href: '/blog/wassup-in-a-minute-song-and-atlanta-lock', label: zh ? '原声与 Atlanta Lock 画风' : 'The song and the Atlanta Lock style' },
        { href: '/blog/october-2026-viral-ai-meme-videos', label: zh ? '2026 年 10 月梗视频盘点' : 'October 2026 meme roundup' },
        { href: '/blog/how-to-make-bby-wow-ai-dance-video', label: zh ? '如何制作 Bby Wow AI 跳舞视频' : 'How to make a Bby Wow AI dance video' },
      ],
    },
  ];
}

export const WASSUP_LONG_TAIL_ROUTES = WASSUP_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
