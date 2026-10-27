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
          en: 'Ten seconds — the length the trend uses. The template only offers the 10s option so the sway lands on the beat.',
          zh: '十秒——和趋势用的长度一致。模板只提供 10s 一档，保证摇摆落在节拍上。',
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
        'Prompt editing stays open: if you want a different jacket color or pose, edit the pre-filled prompt before you generate. The ratio stays 9:16 and the length stays 10 seconds so the result still reads as this trend.',
      ],
      zh: [
        'wassup in a minute template 替你省掉了 2026 年 10 月底创作者们用的两步流程：先用 AI 图像提示词画出角色，再在剪辑软件里手动打关键帧做摇摆。ViralReel 把两步合并成一次生成，只需要一张照片。',
        '模板系列有五个变体：甩钱原版（原片里挥开的那沓钞票）、黑羽绒经典（亮面黑羽绒服配白 T 和棒球帽）、全黑装（连帽衫、链子、工装裤）、球衣版（宽松运动球衣）和大块头（宽厚的壮硕身形）。每个变体都是同一套白底摇摆，换的是造型。',
        '提示词保持可编辑：想换外套颜色或姿势，生成前直接改预填的提示词。画幅保持 9:16，时长保持 10 秒，成片才能被认成这条趋势。',
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
        { href: '/wassup-been-a-minute', label: zh ? 'Wassup been a minute' : 'Wassup been a minute' },
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
