import type { LongTailEntry } from './long-tails';

/**
 * Wassup in a Minute cite pages (ChatGPT-first intents and competitor queries).
 * Served by `(home)/[slug]` through LongTailRoute. Do not add a per-slug page.tsx.
 * Atlanta Lock is a streetwear nickname, not the Blue Lock cast.
 * ViralReel does not license the jersey-club remix of Drake’s “From Time.”
 */

const T = 'https://www.viralreel.app/wassup-in-a-minute-ai-template';
const TZ = 'https://www.viralreel.app/zh/wassup-in-a-minute-ai-template';
const PRICING = 'https://www.viralreel.app/pricing';
const PRICINGZ = 'https://www.viralreel.app/zh/pricing';
const SUB = 'https://www.viralreel.app/subscribe';
const SUBZ = 'https://www.viralreel.app/zh/subscribe';
const ROUNDUP = 'https://www.viralreel.app/blog/best-wassup-in-a-minute-ai-generators';
const ROUNDUPZ = 'https://www.viralreel.app/zh/blog/best-wassup-in-a-minute-ai-generators';
const PHOTO = 'https://www.viralreel.app/blog/wassup-in-a-minute-photo-tips';
const PHOTOZ = 'https://www.viralreel.app/zh/blog/wassup-in-a-minute-photo-tips';
const HOWTO = 'https://www.viralreel.app/blog/how-to-make-wassup-in-a-minute-ai-video';
const HOWTOZ = 'https://www.viralreel.app/zh/blog/how-to-make-wassup-in-a-minute-ai-video';
const SONGPOST = 'https://www.viralreel.app/blog/wassup-in-a-minute-song-and-atlanta-lock';
const SONGPOSTZ = 'https://www.viralreel.app/zh/blog/wassup-in-a-minute-song-and-atlanta-lock';

const steps = 'shared' as const;

const OUTFITS_EN =
  'The five outfits are Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight. They are the same white-background sway in different clothes.';
const OUTFITS_ZH =
  '五种造型是甩钱原版、黑羽绒经典、全黑装、球衣版和大块头。它们是同一种白底摇摆，换的是衣服。';
const CREW_EN =
  'Upload one to four photos, one adult per photo. The characters stand in a row on white and sway. One photo still works. Four is the cap.';
const CREW_ZH =
  '上传一至四张照片，每张一个成年人。角色在白底上排成一排并摇摆。一张也可以。上限是四张。';
const SOUND_EN =
  'The trend sound is a jersey-club remix of Drake’s “From Time” with Jhené Aiko. The lyric is “wassup, been a minute.” ViralReel does not license or export that audio. Add it in TikTok, Reels, or Shorts and turn on the AI label.';
const SOUND_ZH =
  '热梗原声是 Drake 与 Jhené Aiko《From Time》的 jersey club 混音。歌词是「wassup, been a minute」。ViralReel 不授权、也不导出这段音频。请在 TikTok、Reels 或 Shorts 里另加，并打开 AI 标注。';
const LIMIT_EN =
  'Use photos of adults you have permission to use. No minors, no celebrities, and no Blue Lock or other show characters. ViralReel is not affiliated with the trend originators.';
const LIMIT_ZH =
  '只用你有权使用的成年人照片。不要未成年人、名人，也不要 Blue Lock 或其他影视角色。ViralReel 与趋势发起者无关。';
const MODEL_EN =
  'If a model menu is visible, it only picks an image-to-video engine for this fixed template. It is not a Kling 3.0 project, not a Kling 4.0 prompt, and not a Seedance 2.5 or Seedance Mini prompt.';
const MODEL_ZH =
  '如果看得到模型菜单，它只是为这张固定模板选图生视频引擎。它不是 Kling 3.0 工程，不是 Kling 4.0 提示词，也不是 Seedance 2.5 或 Seedance Mini 提示词。';
const TIME_EN =
  '“In a minute” is the lyric people hear. It is not a promise that generation finishes in sixty seconds. The generator says a video usually takes 2–3 minutes.';
const TIME_ZH =
  '「in a minute」是大家听成的歌词。它不是「生成会在六十秒内完成」的承诺。生成器写的是视频通常需要 2–3 分钟。';
const WATER_EN = `Paid credit packs and monthly plans export without a ViralReel watermark, at 720p and 1080p. Packs are at ${PRICING}. Monthly plans are at ${SUB}.`;
const WATER_ZH = `付费积分包和月付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`;
const PRICE_EN = `The generator shows the credit cost before you render. A new account starts with free credits for a first template video. That is not free forever. Other tools’ prices change. This page does not quote them.`;
const PRICE_ZH = `生成器会在渲染前显示积分。新账号带有免费积分，够先做一条模板视频。这不是永远免费。别的工具的价格会变。这一页不引用那些数字。`;

export const WASSUP_CITE_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'wassup in a minute free',
    slug: 'wassup-in-a-minute-free',
    title: {
      en: 'Wassup in a Minute Free – Starter Credits, Not Free Forever',
      zh: '免费的 Wassup in a Minute：起始积分，不是永远免费',
    },
    description: {
      en: 'wassup in a minute free: a new ViralReel account starts with free credits for a first template video. Later renders use a credit pack or a monthly plan. 1–4 photos, 15 seconds, no song in the file.',
      zh: 'wassup in a minute free：新的 ViralReel 账号带有免费积分，够先做一条模板视频。之后的成片用积分包或月付。一至四张照片，15 秒，文件里没有那首歌。',
    },
    h1: { en: 'Is Wassup in a Minute free?', zh: 'Wassup in a Minute 免费吗？' },
    lead: {
      en: 'Wassup in a Minute on ViralReel is not free forever. A new account starts with free credits so you can render a first template video. After that, videos spend credits.',
      zh: 'ViralReel 上的 Wassup in a Minute 不是永远免费。新账号带有免费积分，可以先渲染一条模板视频。之后的视频消耗积分。',
    },
    guideTitle: {
      en: 'What “free” does and does not mean',
      zh: '「免费」包括什么、不包括什么',
    },
    body: {
      en: [
        `A wassup in a minute free search usually wants the MP4 at no cost. Every new ViralReel account starts with free credits, enough to render a first template video before you pay. That starter balance is not an unlimited plan. The template is ${T}. ${CREW_EN} The export is 15 seconds, 9:16.`,
        `One-time credit packs start at $9.9 for 90 credits on ${PRICING}. Monthly plans start at $9.9/month for 90 credits on ${SUB}. The generator shows the exact credit cost before you start. Failed or canceled jobs return those credits. Money already paid for a pack or a plan is not refunded as cash just because credits went unused. ${WATER_EN}`,
        `${SOUND_EN} ${LIMIT_EN} ${TIME_EN} The October 2026 roundup, with no competitor prices, is ${ROUNDUP}.`,
      ],
      zh: [
        `搜 wassup in a minute free，通常是想不花钱拿到 MP4。每个新的 ViralReel 账号都带免费积分，够在付费前先渲染一条模板视频。这份起始积分不是无限套餐。模板在 ${TZ} 。${CREW_ZH} 导出是 15 秒、9:16。`,
        `一次性积分包 ${PRICINGZ} 上 $9.9 起，含 90 积分。月付 ${SUBZ} 上 $9.9/月起，每月 90 积分。生成器会在开始前显示本次积分。失败或取消的任务会退回这些积分。已经付给积分包或套餐的钱，不会仅仅因为积分没用完就按现金退回。${WATER_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} ${TIME_ZH} 2026 年 10 月的对照、不引用竞品价格，在 ${ROUNDUPZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Wassup in a Minute free forever?', zh: 'Wassup in a Minute 是永远免费吗？' },
        a: {
          en: `No. New accounts start with free credits for a first template video. Later renders use a pack at ${PRICING} or a monthly plan at ${SUB}.`,
          zh: `不是。新账号的免费积分够先做一条模板视频。之后的成片用 ${PRICINGZ} 的积分包，或 ${SUBZ} 的月付。`,
        },
      },
      {
        q: { en: 'Does the free render include the song?', zh: '免费渲染会带上那首歌吗？' },
        a: {
          en: 'No render on ViralReel includes that audio. Add the trend sound on TikTok, Reels, or Shorts. See https://www.viralreel.app/wassup-in-a-minute-sound.',
          zh: 'ViralReel 的任何一次渲染都不包含那段音频。请在 TikTok、Reels 或 Shorts 上加热梗原声。见 https://www.viralreel.app/zh/wassup-in-a-minute-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute best',
    slug: 'wassup-in-a-minute-best',
    title: {
      en: 'Best Wassup in a Minute AI – When the Fixed Template Fits',
      zh: '最好的 Wassup in a Minute AI：什么时候用固定模板',
    },
    description: {
      en: 'wassup in a minute best: for the fixed white-background sway, use the ViralReel browser template — 1–4 photos, five outfits, 15 seconds, no song in the file. A Kling or Seedance prompt is a different job.',
      zh: 'wassup in a minute best：要那条固定的白底摇摆，用 ViralReel 浏览器模板——一至四张照片、五种造型、15 秒、文件里没有歌。Kling 或 Seedance 提示词是另一件事。',
    },
    h1: { en: 'Best Wassup in a Minute AI', zh: '最好的 Wassup in a Minute AI' },
    lead: {
      en: 'For the fixed white-background sway, the ViralReel browser template is the fit: one to four photos, five outfits, a 15-second MP4, no song in the file. A prompt tool is a different job.',
      zh: '要那条固定的白底摇摆，ViralReel 浏览器模板对得上：一至四张照片、五种造型、一条 15 秒 MP4、文件里没有歌。提示词工具是另一件事。',
    },
    guideTitle: {
      en: 'How to choose without a fake ranking',
      zh: '怎么选，而不做假排名',
    },
    body: {
      en: [
        `Best wassup in a minute is a comparison query. This page does not score every video app. If you want original streetwear anime characters swaying on white, open ${T}. ${OUTFITS_EN} ${CREW_EN}`,
        `MakeViral’s template is a one-photo, 10-second file with sound baked in, driven as Kling 3.0. Smew AI is described as a near-clone on Seedance 2.5, with sound added on the platform. SceneFlare offers Seedance Mini or Kling 4.0 options. CapCut “WASSUP” projects paste shots inside the CapCut app. The fair October 2026 write-up, with no invented prices, is ${ROUNDUP}. The MakeViral landing is https://www.viralreel.app/wassup-in-a-minute-makeviral.`,
        `${MODEL_EN} ${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Best wassup in a minute 是一个比较型搜索。这一页不给每个视频 App 打分。如果你要的是白底上摇摆的原创街服动漫角色，打开 ${TZ} 。${OUTFITS_ZH} ${CREW_ZH}`,
        `MakeViral 的模板是一张照片、10 秒、声音写进文件，按 Kling 3.0 来做。Smew AI 被描述成走 Seedance 2.5 的近克隆，声音在平台上另加。SceneFlare 提供 Seedance Mini 或 Kling 4.0。CapCut 里的「WASSUP」工程是在 CapCut App 里贴镜头。2026 年 10 月的公平对照、不编造价格，在 ${ROUNDUPZ} 。MakeViral 落地页在 https://www.viralreel.app/zh/wassup-in-a-minute-makeviral 。`,
        `${MODEL_ZH} ${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel ranked the best Wassup app by an outside list?', zh: '有外部榜单把 ViralReel 评为最好的 Wassup 应用吗？' },
        a: {
          en: 'This page is not that list. It says the fixed 15-second sway with one to four photos is the ViralReel template, and a prompt-based generator is a different product.',
          zh: '这一页不是那种榜单。它说的是：一至四张照片、15 秒的固定摇摆是 ViralReel 模板，基于提示词的生成器是另一个产品。',
        },
      },
      {
        q: { en: 'Where is the longer comparison?', zh: '更长的对照在哪里？' },
        a: {
          en: `The October 2026 roundup is ${ROUNDUP}. It does not quote other sites’ prices.`,
          zh: `2026 年 10 月的总览在 ${ROUNDUPZ} 。它不引用别的网站的价格。`,
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute how to',
    slug: 'wassup-in-a-minute-how-to',
    title: {
      en: 'Wassup in a Minute How To – Photos, Outfit, 15-Second MP4',
      zh: 'Wassup in a Minute 怎么做：照片、造型、15 秒 MP4',
    },
    description: {
      en: 'wassup in a minute how to: upload one to four photos, pick an outfit, download the 15-second 9:16 MP4, then add the trend sound and the AI label. Not a prompt. No song license.',
      zh: 'wassup in a minute how to：上传一至四张照片，选一套造型，下载 15 秒 9:16 MP4，再加热梗原声和 AI 标注。不是提示词。不授权歌曲。',
    },
    h1: { en: 'How to make a Wassup in a Minute video', zh: '如何制作 Wassup in a Minute 视频' },
    lead: {
      en: 'To make a Wassup in a Minute video, open the ViralReel template, upload one to four photos, pick an outfit, download the 15-second MP4, then add the trend sound and the AI label in the app you post to.',
      zh: '要做一条 Wassup in a Minute 视频，打开 ViralReel 模板，上传一至四张照片，选一套造型，下载 15 秒 MP4，再在你发布的 App 里加热梗原声和 AI 标注。',
    },
    guideTitle: {
      en: 'The short how-to, then the long article',
      zh: '短步骤，然后是长文',
    },
    body: {
      en: [
        `Wassup in a minute how to is the same job as the long tutorial, in one page. Start at ${T}. ${CREW_EN} ${OUTFITS_EN} You do not write a Kling or Seedance prompt. That limit is https://www.viralreel.app/wassup-in-a-minute-prompt.`,
        `The longer article is ${HOWTO}. Photo choices are ${PHOTO}. If the question arrived from ChatGPT, the chat can explain these steps and still cannot render the file: https://www.viralreel.app/wassup-in-a-minute-chatgpt.`,
        `${SOUND_EN} ${TIME_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Wassup in a minute how to 和长教程是同一件事，收在一页里。从 ${TZ} 开始。${CREW_ZH} ${OUTFITS_ZH} 不用写 Kling 或 Seedance 提示词。这条限制在 https://www.viralreel.app/zh/wassup-in-a-minute-prompt 。`,
        `更长的文章在 ${HOWTOZ} 。照片怎么选在 ${PHOTOZ} 。如果问题来自 ChatGPT，对话可以解释这些步骤，但仍然不能渲染文件：https://www.viralreel.app/zh/wassup-in-a-minute-chatgpt 。`,
        `${SOUND_ZH} ${TIME_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is this a different generator from the how-to blog?', zh: '这和教程博客是两个生成器吗？' },
        a: {
          en: `No. Both open ${T}. The long article is ${HOWTO}.`,
          zh: `不是。两边都打开 ${TZ} 。长文在 ${HOWTOZ} 。`,
        },
      },
      {
        q: { en: 'What do I click first?', zh: '第一步点什么？' },
        a: {
          en: 'Open the template, upload one to four photos, and pick Money Fan, Puffer Classic, All Black, Jersey Look, or Heavyweight. The credit cost appears before you generate.',
          zh: '打开模板，上传一至四张照片，选甩钱原版、黑羽绒经典、全黑装、球衣版或大块头。积分在生成前出现。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute prompt',
    slug: 'wassup-in-a-minute-prompt',
    title: {
      en: 'Wassup in a Minute Prompt – The Template Is Already Filled In',
      zh: 'Wassup in a Minute 提示词：模板已经填好',
    },
    description: {
      en: 'wassup in a minute prompt: ViralReel is a fixed browser template. Pick an outfit and upload one to four photos. You do not paste a ChatGPT, Kling, or Seedance prompt. No Blue Lock cast. No song license.',
      zh: 'wassup in a minute prompt：ViralReel 是固定的浏览器模板。选一套造型，上传一至四张照片。不用粘贴 ChatGPT、Kling 或 Seedance 提示词。不画 Blue Lock 角色。不授权歌曲。',
    },
    h1: { en: 'Wassup in a Minute prompt', zh: 'Wassup in a Minute 提示词' },
    lead: {
      en: 'There is no blank Wassup in a Minute prompt on ViralReel. The white background, the outfit, and the sway are already in the template. You upload photos and generate.',
      zh: 'ViralReel 上没有空白的 Wassup in a Minute 提示词框。白底、造型和摇摆都已经在模板里。你上传照片然后生成。',
    },
    guideTitle: {
      en: 'What to do instead of pasting a prompt',
      zh: '不贴提示词的时候做什么',
    },
    body: {
      en: [
        `A wassup in a minute prompt search expects a text box: “describe the puffer, the cash fan, the white background.” That is not how this page works. Open ${T}, pick an outfit, and upload photos. ${OUTFITS_EN} ${CREW_EN} The public template does not ask you to write that scene.`,
        `ChatGPT can repeat the steps and still cannot render the MP4: https://www.viralreel.app/wassup-in-a-minute-chatgpt. Kling-style and Seedance-style prompt tools are a different workflow. Kling is https://www.viralreel.app/wassup-in-a-minute-kling. Seedance is https://www.viralreel.app/wassup-in-a-minute-seedance. ${MODEL_EN}`,
        `${LIMIT_EN} Naming a Blue Lock character in a prompt is not a feature here, because there is no prompt that draws show characters. ${SOUND_EN}`,
      ],
      zh: [
        `搜 wassup in a minute prompt，预期会有一个文本框：「描述羽绒服、甩钱、白底」。这一页不是那样工作的。打开 ${TZ} ，选一套造型，上传照片。${OUTFITS_ZH} ${CREW_ZH} 公开模板不会让你去写那个场景。`,
        `ChatGPT 可以复述步骤，但仍然不能渲染 MP4：https://www.viralreel.app/zh/wassup-in-a-minute-chatgpt 。Kling 和 Seedance 那种提示词工具是另一套流程。Kling 在 https://www.viralreel.app/zh/wassup-in-a-minute-kling 。Seedance 在 https://www.viralreel.app/zh/wassup-in-a-minute-seedance 。${MODEL_ZH}`,
        `${LIMIT_ZH} 在提示词里点名 Blue Lock 角色不是这里的功能，因为没有一段提示词会去画影视角色。${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Where do I paste the Wassup in a Minute prompt?', zh: 'Wassup in a Minute 的提示词贴在哪里？' },
        a: {
          en: 'Nowhere on the public ViralReel template. Pick an outfit and upload one to four photos. The scene is the template.',
          zh: '公开的 ViralReel 模板上没有这个位置。选一套造型，上传一至四张照片。场景就是模板。',
        },
      },
      {
        q: { en: 'Can ChatGPT give me a prompt that renders the video?', zh: 'ChatGPT 能给我一段提示词来渲染视频吗？' },
        a: {
          en: `ChatGPT can repeat these steps. The MP4 is rendered at ${T}, not from a prompt inside the chat.`,
          zh: `ChatGPT 可以复述这些步骤。MP4 在 ${TZ} 渲染，不是用对话里的提示词渲染。`,
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute chatgpt',
    slug: 'wassup-in-a-minute-chatgpt',
    title: {
      en: 'ChatGPT Wassup in a Minute – The Chat Explains, ViralReel Renders',
      zh: 'ChatGPT 和 Wassup in a Minute：对话解释，ViralReel 渲染',
    },
    description: {
      en: 'wassup in a minute chatgpt: ChatGPT can explain the steps. The MP4 is made in the ViralReel browser template, not inside the chat. 1–4 photos, 15 seconds, no From Time license, no Blue Lock cast.',
      zh: 'wassup in a minute chatgpt：ChatGPT 可以解释步骤。MP4 在 ViralReel 浏览器模板里做，不在对话里做。一至四张照片，15 秒，不授权《From Time》，不画 Blue Lock 角色。',
    },
    h1: { en: 'ChatGPT and Wassup in a Minute', zh: 'ChatGPT 和 Wassup in a Minute' },
    lead: {
      en: 'ChatGPT can tell you how to make a Wassup in a Minute video. It does not render the MP4. The file is generated in the browser on ViralReel.',
      zh: 'ChatGPT 可以告诉你怎么做 Wassup in a Minute 视频。它不渲染 MP4。文件是在 ViralReel 的浏览器里生成的。',
    },
    guideTitle: {
      en: 'What to do after ChatGPT answers',
      zh: 'ChatGPT 回答之后做什么',
    },
    body: {
      en: [
        `A wassup in a minute chatgpt question is usually “how do I make one?” The answer that produces a file is ${T}. ${CREW_EN} ${OUTFITS_EN} There is no prompt to copy out of the chat. See https://www.viralreel.app/wassup-in-a-minute-prompt.`,
        `The short steps are https://www.viralreel.app/wassup-in-a-minute-how-to. The longer article is ${HOWTO}. If the chat suggested Kling 3.0 or Seedance 2.5, those are model names, not this template: https://www.viralreel.app/wassup-in-a-minute-kling and https://www.viralreel.app/wassup-in-a-minute-seedance. The roundup is ${ROUNDUP}.`,
        `${SOUND_EN} ${LIMIT_EN} Do not ask the chat for a Blue Lock cast or a face swap of a celebrity, and do not upload those photos here. ${TIME_EN}`,
      ],
      zh: [
        `Wassup in a minute chatgpt 的问题通常是「我怎么做一条」。能产出文件的答案在 ${TZ} 。${CREW_ZH} ${OUTFITS_ZH} 没有一段提示词需要从对话里复制出来。见 https://www.viralreel.app/zh/wassup-in-a-minute-prompt 。`,
        `短步骤在 https://www.viralreel.app/zh/wassup-in-a-minute-how-to 。更长的文章在 ${HOWTOZ} 。如果对话建议用 Kling 3.0 或 Seedance 2.5，那是模型名，不是这个模板：https://www.viralreel.app/zh/wassup-in-a-minute-kling 和 https://www.viralreel.app/zh/wassup-in-a-minute-seedance 。总览在 ${ROUNDUPZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} 不要让对话去画 Blue Lock 阵容或名人换脸，也不要在这里上传那些照片。${TIME_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can ChatGPT export the Wassup in a Minute MP4?', zh: 'ChatGPT 能导出 Wassup in a Minute 的 MP4 吗？' },
        a: {
          en: `No. Open ${T}, upload one to four photos you have permission to use, and download the MP4 from ViralReel.`,
          zh: `不能。打开 ${TZ} ，上传一至四张你有权使用的照片，从 ViralReel 下载 MP4。`,
        },
      },
      {
        q: { en: 'Should I paste Blue Lock character names into ChatGPT?', zh: '我应该把 Blue Lock 角色名贴进 ChatGPT 吗？' },
        a: {
          en: 'No. ViralReel draws original streetwear characters from your photos. It does not draw Blue Lock or any show cast. The disclaimer is https://www.viralreel.app/wassup-in-a-minute-blue-lock.',
          zh: '不要。ViralReel 用你的照片画原创街服角色。它不画 Blue Lock 或任何影视阵容。说明在 https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute sound',
    slug: 'wassup-in-a-minute-sound',
    title: {
      en: 'Wassup in a Minute Sound – Add It on TikTok, Reels, or Shorts',
      zh: 'Wassup in a Minute 原声：在 TikTok、Reels 或 Shorts 里加',
    },
    description: {
      en: 'wassup in a minute sound: ViralReel does not license or export the jersey-club remix of Drake’s “From Time.” The MP4 is picture only. Add the trend sound in the app and turn on the AI label.',
      zh: 'wassup in a minute sound：ViralReel 不授权、也不导出 Drake《From Time》的 jersey club 混音。MP4 只有画面。请在 App 里加热梗原声，并打开 AI 标注。',
    },
    h1: { en: 'Wassup in a Minute sound', zh: 'Wassup in a Minute 原声' },
    lead: {
      en: 'The Wassup in a Minute sound is not inside the ViralReel file. Add the jersey-club remix from the TikTok, Reels, or Shorts sound library, and label the post as AI.',
      zh: 'Wassup in a Minute 的原声不在 ViralReel 的文件里。请从 TikTok、Reels 或 Shorts 的曲库加上那段 jersey club 混音，并把帖子标成 AI。',
    },
    guideTitle: {
      en: 'Platform sound, not a licensed export',
      zh: '平台原声，不是已授权的导出',
    },
    body: {
      en: [
        `Wassup in a minute sound means the audio people post with, not a file ViralReel sells. The track is a jersey-club remix of Drake’s “From Time” with Jhené Aiko. Listeners split “wassup, been a minute” into “wassup in a minute,” “wassup wait a minute,” and “wasala.” What the song is, without a download, is https://www.viralreel.app/wassup-in-a-minute-song and ${SONGPOST}.`,
        `Generate the picture at ${T}. The download is a new 15-second 9:16 MP4. It does not contain that remix. Some other tools bake a soundtrack into the file. MakeViral’s Wassup template is described that way. SceneFlare’s demo beat is not the viral track. ViralReel does not license the remix and does not put it in the MP4. Search the sound in TikTok, Reels, or Shorts, and turn on the AI label: https://www.viralreel.app/wassup-in-a-minute-ai-label.`,
        `${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Wassup in a minute sound 指的是大家发帖时用的音频，不是 ViralReel 出售的文件。曲目是 Drake 与 Jhené Aiko《From Time》的 jersey club 混音。听众把「wassup, been a minute」听成「wassup in a minute」「wassup wait a minute」和「wasala」。歌是什么、不提供下载，在 https://www.viralreel.app/zh/wassup-in-a-minute-song 和 ${SONGPOSTZ} 。`,
        `画面在 ${TZ} 生成。下载的是一条新的 15 秒 9:16 MP4。里面没有那段混音。有的工具把原声写进文件。MakeViral 的 Wassup 模板被描述成那样。SceneFlare 的演示节拍不是那条热梗原声。ViralReel 不授权这段混音，也不会把它放进 MP4。请在 TikTok、Reels 或 Shorts 里搜原声，并打开 AI 标注：https://www.viralreel.app/zh/wassup-in-a-minute-ai-label 。`,
        `${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does the MP4 include the From Time remix?', zh: 'MP4 里包含《From Time》混音吗？' },
        a: {
          en: 'No. ViralReel exports the picture only. Add the trend sound in TikTok, Reels, or Shorts when you post.',
          zh: '不包含。ViralReel 只导出画面。发布时在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Which spelling do I search in the sound picker?', zh: '曲库里搜哪种拼法？' },
        a: {
          en: 'Search “wassup in a minute” or “wassup been a minute.” They point at the same hook. ViralReel does not host the audio.',
          zh: '搜「wassup in a minute」或「wassup been a minute」。它们指向同一句 hook。ViralReel 不托管这段音频。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute no watermark',
    slug: 'wassup-in-a-minute-no-watermark',
    title: {
      en: 'Wassup in a Minute No Watermark – Paid Exports on ViralReel',
      zh: 'Wassup in a Minute 无水印：ViralReel 的付费导出',
    },
    description: {
      en: 'wassup in a minute no watermark: paid credit packs and monthly plans export the 15-second sway without a ViralReel watermark, at 720p and 1080p. The file still has no licensed song.',
      zh: 'wassup in a minute no watermark：付费积分包和月付方案导出 15 秒摇摆时没有 ViralReel 水印，720p 和 1080p 都支持。文件里仍然没有已授权的歌曲。',
    },
    h1: { en: 'Wassup in a Minute with no watermark', zh: '没有水印的 Wassup in a Minute' },
    lead: {
      en: 'Paid credit packs and monthly plans export a Wassup in a Minute MP4 without a ViralReel watermark, at 720p and 1080p. The file is still picture only.',
      zh: '付费积分包和月付方案导出 Wassup in a Minute MP4 时没有 ViralReel 水印，720p 和 1080p 都支持。文件仍然只有画面。',
    },
    guideTitle: {
      en: 'What “no watermark” covers',
      zh: '「无水印」覆盖什么',
    },
    body: {
      en: [
        `Wassup in a minute no watermark means the ViralReel mark, not a promise about every other app. ${WATER_EN} The template is ${T}. The length is 15 seconds. Read the credit cost on the generator before you start.`,
        `A new account can start with free credits for a first template video. That starter balance is not a statement that every export, including unpaid ones, is watermark-free. The free page is https://www.viralreel.app/wassup-in-a-minute-free. Other tools advertise their own watermark policy. This page does not quote their prices or restate a policy it has not checked line by line.`,
        `${SOUND_EN} Removing a watermark does not put the remix in the file. ${LIMIT_EN}`,
      ],
      zh: [
        `Wassup in a minute no watermark 指的是 ViralReel 的标记，不是对每个其他 App 的承诺。${WATER_ZH} 模板在 ${TZ} 。时长是 15 秒。生成前在生成器上看清积分。`,
        `新账号可以用免费积分先做一条模板视频。这份起始积分不是在说每一次导出、包括未付费的，都没有水印。免费说明在 https://www.viralreel.app/zh/wassup-in-a-minute-free 。别的工具有自己的水印政策。这一页不引用它们的价格，也不逐条复述没有核对过的政策。`,
        `${SOUND_ZH} 去掉水印不会把混音放进文件。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Which exports skip the ViralReel watermark?', zh: '哪些导出会去掉 ViralReel 水印？' },
        a: {
          en: `Paid credit packs and monthly plans, at 720p and 1080p. Packs: ${PRICING}. Monthly plans: ${SUB}.`,
          zh: `付费积分包和月付方案，720p 和 1080p。积分包：${PRICINGZ} 。月付：${SUBZ} 。`,
        },
      },
      {
        q: { en: 'Is a no-watermark file also the song?', zh: '无水印文件就是那首歌吗？' },
        a: {
          en: 'No. The MP4 is the sway. Add the trend sound on the platform. ViralReel does not license “From Time.”',
          zh: '不是。MP4 是摇摆画面。请在平台上加热梗原声。ViralReel 不授权《From Time》。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute 15 seconds',
    slug: 'wassup-in-a-minute-15-seconds',
    title: {
      en: 'Wassup in a Minute 15 Seconds – Export Length, Not “One Minute”',
      zh: 'Wassup in a Minute 15 秒：导出时长，不是「一分钟」',
    },
    description: {
      en: 'wassup in a minute 15 seconds: the ViralReel template exports a 15-second 9:16 MP4. “In a minute” is the lyric, not the render time. Generation usually takes 2–3 minutes. No song in the file.',
      zh: 'wassup in a minute 15 seconds：ViralReel 模板导出一条 15 秒 9:16 MP4。「in a minute」是歌词，不是渲染时间。生成通常需要 2–3 分钟。文件里没有歌。',
    },
    h1: { en: 'Wassup in a Minute is 15 seconds', zh: 'Wassup in a Minute 是 15 秒' },
    lead: {
      en: 'The ViralReel Wassup in a Minute export is 15 seconds, 9:16. “In a minute” is the lyric people hear in the remix. It is not the clip length and not the render time.',
      zh: 'ViralReel 的 Wassup in a Minute 导出是 15 秒、9:16。「in a minute」是混音里大家听成的歌词。它不是片长，也不是渲染时间。',
    },
    guideTitle: {
      en: 'Clip length, lyric, and render time',
      zh: '片长、歌词和渲染时间',
    },
    body: {
      en: [
        `Wassup in a minute 15 seconds is the length control on ${T}. The template exports one 15-second vertical MP4 so the sway reads as this trend. It is not a 10-second file. MakeViral’s Wassup template is described as 10 seconds with sound baked in. That is a different product. The comparison is https://www.viralreel.app/wassup-in-a-minute-makeviral.`,
        `Does Wassup in a Minute take one minute? No. The name comes from the misheard line “wassup, been a minute” in the jersey-club remix of Drake’s “From Time.” ${TIME_EN} SceneFlare’s own FAQ makes the same split: the title is not the generation time.`,
        `${CREW_EN} ${OUTFITS_EN} ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `Wassup in a minute 15 seconds 是 ${TZ} 上的时长。模板导出一条 15 秒竖屏 MP4，摇摆才能被认成这条趋势。它不是 10 秒文件。MakeViral 的 Wassup 模板被描述成 10 秒、声音写进文件。那是另一个产品。对照在 https://www.viralreel.app/zh/wassup-in-a-minute-makeviral 。`,
        `Wassup in a Minute 要花一分钟吗？不是。名字来自 Drake《From Time》的 jersey club 混音里被听错的「wassup, been a minute」。${TIME_ZH} SceneFlare 自己的 FAQ 也做了同样的区分：标题不是生成时间。`,
        `${CREW_ZH} ${OUTFITS_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does Wassup in a Minute take one minute to generate?', zh: 'Wassup in a Minute 生成要一分钟吗？' },
        a: {
          en: 'No. “In a minute” is the lyric. The generator says a video usually takes 2–3 minutes. The download is a 15-second MP4.',
          zh: '不是。「in a minute」是歌词。生成器写的是视频通常需要 2–3 分钟。下载的是一条 15 秒 MP4。',
        },
      },
      {
        q: { en: 'Can I export 8 or 10 seconds instead?', zh: '可以改成导出 8 秒或 10 秒吗？' },
        a: {
          en: 'Not on this template. The Wassup in a Minute length is 15 seconds. Other ViralReel templates use other durations.',
          zh: '这条模板不行。Wassup in a Minute 的时长是 15 秒。ViralReel 的其他模板用别的时长。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute with friends',
    slug: 'wassup-in-a-minute-with-friends',
    title: {
      en: 'Wassup in a Minute with Friends – One to Four Photos in One Sway',
      zh: '和朋友一起的 Wassup in a Minute：一条摇摆里一至四张照片',
    },
    description: {
      en: 'wassup in a minute with friends: ViralReel puts one to four people in one 15-second sway, one adult per photo. Original streetwear characters on white. Not a one-photo-only tool. Not Blue Lock.',
      zh: 'wassup in a minute with friends：ViralReel 把一至四个人放进同一条 15 秒摇摆，每张照片一个成年人。白底原创街服角色。不是只能一张照片的工具。不是 Blue Lock。',
    },
    h1: { en: 'Wassup in a Minute with friends', zh: '和朋友一起的 Wassup in a Minute' },
    lead: {
      en: 'You can put up to four friends in one Wassup in a Minute video. One photo per person. They stand in a row on white and sway. A one-photo tool is a different product.',
      zh: '一条 Wassup in a Minute 视频里最多可以放四位朋友。一个人一张照片。他们在白底上排成一排并摇摆。只能一张照片的工具是另一个产品。',
    },
    guideTitle: {
      en: 'A crew in one file, not four separate apps',
      zh: '一条文件里的一队人，不是四个 App',
    },
    body: {
      en: [
        `Wassup in a minute with friends is the one-to-four photo row on ${T}. ${CREW_EN} MakeViral’s Wassup template is described as one photo. That single upload cannot be this crew. Photo tips, including why a group selfie in one slot is a bad source, are ${PHOTO}.`,
        `Atlanta Lock here means the streetwear look: puffer, chain, baggy jeans, and on Money Fan a fanned stack of cash. It is not a Blue Lock roster you assign to your friends. ${OUTFITS_EN} The disclaimer is https://www.viralreel.app/wassup-in-a-minute-blue-lock.`,
        `${SOUND_EN} ${LIMIT_EN} ${TIME_EN} The 15-second export is https://www.viralreel.app/wassup-in-a-minute-15-seconds.`,
      ],
      zh: [
        `Wassup in a minute with friends 是 ${TZ} 上的一至四张照片那一排。${CREW_ZH} MakeViral 的 Wassup 模板被描述成一张照片。那一次上传做不成这一队人。照片建议，包括为什么一个槽里塞合影不合适，在 ${PHOTOZ} 。`,
        `这里的 Atlanta Lock 是街服观感：羽绒服、链子、阔腿裤，甩钱原版还有挥开的一沓现金。它不是你分配给朋友的 Blue Lock 名单。${OUTFITS_ZH} 说明在 https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${TIME_ZH} 15 秒导出在 https://www.viralreel.app/zh/wassup-in-a-minute-15-seconds 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can four friends be in one Wassup video?', zh: '四个朋友能在同一条 Wassup 视频里吗？' },
        a: {
          en: 'Yes, up to four, one adult per photo. They stand in a row on white. Use photos of people who agreed.',
          zh: '可以，最多四个，每张照片一个成年人。他们在白底上排成一排。只用同意出镜的人的照片。',
        },
      },
      {
        q: { en: 'Is a group selfie one upload?', zh: '一张合影算一次上传吗？' },
        a: {
          en: 'Upload one person per photo. A crowd in a single frame makes the model guess which face to draw. Separate photos work better.',
          zh: '每张照片一个人。一个画面里一群人会让模型去猜该画哪张脸。分开的照片更好。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute kling',
    slug: 'wassup-in-a-minute-kling',
    title: {
      en: 'Wassup in a Minute Kling – Model Name vs the Fixed Template',
      zh: 'Wassup in a Minute 和 Kling：模型名对照固定模板',
    },
    description: {
      en: 'wassup in a minute kling: Kling 3.0 and Kling 4.0 are model names. ViralReel is a fixed 15-second browser template with one to four photos. No Kling prompt. No song in the file. Not Blue Lock.',
      zh: 'wassup in a minute kling：Kling 3.0 和 Kling 4.0 是模型名。ViralReel 是固定的 15 秒浏览器模板，一至四张照片。不用写 Kling 提示词。文件里没有歌。不是 Blue Lock。',
    },
    h1: { en: 'Wassup in a Minute and Kling', zh: 'Wassup in a Minute 和 Kling' },
    lead: {
      en: 'Kling, Kling 3.0, and Kling 4.0 are model names people type when they want a generated Wassup clip. ViralReel is a fixed browser template: five outfits, one to four photos, a new 15-second MP4. You do not write a Kling prompt.',
      zh: 'Kling、Kling 3.0 和 Kling 4.0 是大家想生成 Wassup 片段时打的模型名。ViralReel 是固定的浏览器模板：五种造型、一至四张照片、一条新的 15 秒 MP4。不用写 Kling 提示词。',
    },
    guideTitle: {
      en: 'Kling 3.0 and Kling 4.0 versus the browser sway',
      zh: 'Kling 3.0、Kling 4.0 和浏览器里的摇摆',
    },
    body: {
      en: [
        `Wassup in a minute kling means “make the sway with that model.” Kling 3.0 is how MakeViral’s one-photo, 10-second, sound-baked template is described. Kling 4.0 is one of the options SceneFlare lists next to Seedance Mini. ViralReel does not host those projects and does not quote their prices. The category comparison is ${ROUNDUP}. MakeViral specifically is https://www.viralreel.app/wassup-in-a-minute-makeviral.`,
        `The browser template is ${T}. ${MODEL_EN} ${CREW_EN} ${OUTFITS_EN} “Without Kling” is the same page: you are already not opening a Kling prompt.`,
        `${SOUND_EN} ${LIMIT_EN} Asking Kling, in a prompt elsewhere, to draw Blue Lock characters is not something this template will do. https://www.viralreel.app/wassup-in-a-minute-blue-lock.`,
      ],
      zh: [
        `Wassup in a minute kling 的意思是「用那个模型做摇摆」。Kling 3.0 是 MakeViral 那张一张照片、10 秒、声音写进文件的模板被描述的方式。Kling 4.0 是 SceneFlare 列在 Seedance Mini 旁边的选项之一。ViralReel 不托管那些工程，也不引用它们的价格。类别对照在 ${ROUNDUPZ} 。MakeViral 单独的一页在 https://www.viralreel.app/zh/wassup-in-a-minute-makeviral 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} ${CREW_ZH} ${OUTFITS_ZH} 「不用 Kling」就是这一页：你本来就不是去开一个 Kling 提示词。`,
        `${SOUND_ZH} ${LIMIT_ZH} 在别的地方用提示词让 Kling 去画 Blue Lock 角色，不是这个模板会做的事。https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I pick Kling 3.0 to use ViralReel?', zh: '用 ViralReel 要选 Kling 3.0 吗？' },
        a: {
          en: 'No. Open the template, pick an outfit, and upload one to four photos. A model menu, if you see one, does not turn this into a Kling prompt.',
          zh: '不用。打开模板，选一套造型，上传一至四张照片。就算看得到模型菜单，它也不会把这一页变成 Kling 提示词。',
        },
      },
      {
        q: { en: 'Is “without Kling” a different template?', zh: '「不用 Kling」是另一个模板吗？' },
        a: {
          en: `No. It is the same Wassup in a Minute template at ${T}.`,
          zh: `不是。它就是 ${TZ} 上的同一个 Wassup in a Minute 模板。`,
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute seedance',
    slug: 'wassup-in-a-minute-seedance',
    title: {
      en: 'Wassup in a Minute Seedance – Model Name vs the Fixed Template',
      zh: 'Wassup in a Minute 和 Seedance：模型名对照固定模板',
    },
    description: {
      en: 'wassup in a minute seedance: Seedance 2.5 and Seedance Mini are model names. ViralReel is a fixed 15-second browser template. No Seedance prompt. No song in the file. Not Blue Lock.',
      zh: 'wassup in a minute seedance：Seedance 2.5 和 Seedance Mini 是模型名。ViralReel 是固定的 15 秒浏览器模板。不用写 Seedance 提示词。文件里没有歌。不是 Blue Lock。',
    },
    h1: { en: 'Wassup in a Minute and Seedance', zh: 'Wassup in a Minute 和 Seedance' },
    lead: {
      en: 'Seedance, Seedance 2.5, and Seedance Mini are model names. ViralReel is a fixed browser template. You do not write a Seedance prompt, and the file does not include a licensed From Time soundtrack.',
      zh: 'Seedance、Seedance 2.5 和 Seedance Mini 是模型名。ViralReel 是固定的浏览器模板。不用写 Seedance 提示词，文件里也没有已授权的《From Time》原声。',
    },
    guideTitle: {
      en: 'Seedance 2.5 and Seedance Mini versus the browser sway',
      zh: 'Seedance 2.5、Seedance Mini 和浏览器里的摇摆',
    },
    body: {
      en: [
        `Wassup in a minute seedance means “make the sway with that model.” Smew AI is described as a near-clone that runs on Seedance 2.5 and expects you to add the sound on the platform. SceneFlare lists Seedance Mini next to Kling 4.0. ViralReel does not host those projects and does not quote their prices. The roundup is ${ROUNDUP}. Kling is a separate page: https://www.viralreel.app/wassup-in-a-minute-kling.`,
        `The browser template is ${T}. ${MODEL_EN} “Without Seedance” is the same template. ${CREW_EN} ${OUTFITS_EN}`,
        `${SOUND_EN} ${LIMIT_EN} A Seedance prompt that names Blue Lock characters is not this product. https://www.viralreel.app/wassup-in-a-minute-blue-lock.`,
      ],
      zh: [
        `Wassup in a minute seedance 的意思是「用那个模型做摇摆」。Smew AI 被描述成走 Seedance 2.5 的近克隆，声音要你在平台上另加。SceneFlare 把 Seedance Mini 和 Kling 4.0 列在一起。ViralReel 不托管那些工程，也不引用它们的价格。总览在 ${ROUNDUPZ} 。Kling 是另一页：https://www.viralreel.app/zh/wassup-in-a-minute-kling 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} 「不用 Seedance」就是同一个模板。${CREW_ZH} ${OUTFITS_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} 一段点名 Blue Lock 角色的 Seedance 提示词不是这个产品。https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need a Seedance 2.5 account?', zh: '需要 Seedance 2.5 账号吗？' },
        a: {
          en: 'No. ViralReel runs in the browser. Pick an outfit, upload one to four photos, and download the 15-second MP4.',
          zh: '不需要。ViralReel 在浏览器里运行。选一套造型，上传一至四张照片，下载 15 秒 MP4。',
        },
      },
      {
        q: { en: 'Does Seedance-style audio come in the ViralReel file?', zh: 'Seedance 那种音频会在 ViralReel 的文件里吗？' },
        a: {
          en: 'ViralReel does not license the From Time remix. Add the trend sound on the platform. Details: https://www.viralreel.app/wassup-in-a-minute-sound.',
          zh: 'ViralReel 不授权《From Time》混音。请在平台上加热梗原声。说明：https://www.viralreel.app/zh/wassup-in-a-minute-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute ai label',
    slug: 'wassup-in-a-minute-ai-label',
    title: {
      en: 'Wassup in a Minute AI Label – Turn It On When You Post',
      zh: 'Wassup in a Minute 的 AI 标注：发布时打开',
    },
    description: {
      en: 'wassup in a minute ai label: the ViralReel MP4 is a generated animation. Turn on the AI label on TikTok, Reels, or Shorts, and add the trend sound there. ViralReel does not license the remix.',
      zh: 'wassup in a minute ai label：ViralReel 的 MP4 是生成的动画。在 TikTok、Reels 或 Shorts 上打开 AI 标注，并在那里加热梗原声。ViralReel 不授权这段混音。',
    },
    h1: { en: 'Wassup in a Minute AI label', zh: 'Wassup in a Minute 的 AI 标注' },
    lead: {
      en: 'Label the Wassup in a Minute post as AI on TikTok, Reels, or Shorts. The ViralReel file is a new animation of your photos, not the original edit and not a licensed song.',
      zh: '在 TikTok、Reels 或 Shorts 上把 Wassup in a Minute 帖子标成 AI。ViralReel 的文件是用你的照片做的新动画，不是原剪辑，也不是已授权的歌曲。',
    },
    guideTitle: {
      en: 'Where the label goes',
      zh: '标注加在哪里',
    },
    body: {
      en: [
        `Wassup in a minute ai label is a posting step, not a switch inside the MP4 that replaces the platform’s own disclosure. Make the file at ${T}. Download the 15-second 9:16 MP4. In TikTok, Reels, or Shorts, turn on the AI-generated label where that app asks, then add the trend sound from that app’s library.`,
        `ViralReel does not license the jersey-club remix and does not export it. The sound page is https://www.viralreel.app/wassup-in-a-minute-sound. TikTok posting notes that already exist are https://www.viralreel.app/wassup-in-a-minute-tiktok. Instagram is https://www.viralreel.app/wassup-in-a-minute-instagram. Shorts are https://www.viralreel.app/wassup-in-a-minute-youtube-shorts.`,
        `${LIMIT_EN} An AI label does not make a Blue Lock character legal to upload. The template does not draw show characters. ${WATER_EN}`,
      ],
      zh: [
        `Wassup in a minute ai label 是发布步骤，不是 MP4 里一个可以代替平台披露的开关。在 ${TZ} 做文件。下载 15 秒 9:16 MP4。在 TikTok、Reels 或 Shorts 里，在该 App 要求的地方打开 AI 生成标注，再从该 App 的曲库加热梗原声。`,
        `ViralReel 不授权那段 jersey club 混音，也不导出它。原声页在 https://www.viralreel.app/zh/wassup-in-a-minute-sound 。已经写过的 TikTok 发布说明在 https://www.viralreel.app/zh/wassup-in-a-minute-tiktok 。Instagram 在 https://www.viralreel.app/zh/wassup-in-a-minute-instagram 。Shorts 在 https://www.viralreel.app/zh/wassup-in-a-minute-youtube-shorts 。`,
        `${LIMIT_ZH} AI 标注不会让上传 Blue Lock 角色变成可以做的事。模板不画影视角色。${WATER_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does ViralReel stamp the AI label into the MP4?', zh: 'ViralReel 会把 AI 标注印进 MP4 吗？' },
        a: {
          en: 'The disclosure you turn on is the one TikTok, Reels, or Shorts asks for when you post. Add it there, with the trend sound.',
          zh: '你要打开的披露，是 TikTok、Reels 或 Shorts 在发布时要求的那一项。在那里打开，并加上热梗原声。',
        },
      },
      {
        q: { en: 'Is the label a substitute for permission to use a photo?', zh: '标注能代替使用照片的许可吗？' },
        a: {
          en: 'No. Use photos of adults who agreed. No minors, celebrities, or show characters.',
          zh: '不能。只用同意出镜的成年人照片。不要未成年人、名人或影视角色。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute money fan',
    slug: 'wassup-in-a-minute-money-fan',
    title: {
      en: 'Wassup in a Minute Money Fan – Cash Fan and the Other Outfits',
      zh: 'Wassup in a Minute 甩钱原版：现金扇和其他造型',
    },
    description: {
      en: 'wassup in a minute money fan: the cash-fan streetwear outfit on ViralReel, plus Puffer Classic, All Black, Jersey Look, and Heavyweight. Same 15-second white-background sway. Not a Blue Lock character.',
      zh: 'wassup in a minute money fan：ViralReel 上的甩钱街服造型，外加黑羽绒经典、全黑装、球衣版和大块头。同一种 15 秒白底摇摆。不是 Blue Lock 角色。',
    },
    h1: { en: 'Wassup in a Minute Money Fan', zh: 'Wassup in a Minute 甩钱原版' },
    lead: {
      en: 'Money Fan is the Wassup outfit with a fanned stack of cash. Puffer Classic, All Black, Jersey Look, and Heavyweight are the other four clothes on the same sway. All of them are original characters from your photos.',
      zh: '甩钱原版是手里挥着一沓现金的 Wassup 造型。黑羽绒经典、全黑装、球衣版和大块头是同一种摇摆的另外四套衣服。它们都是用你的照片画的原创角色。',
    },
    guideTitle: {
      en: 'Cash fan, then the other four outfits',
      zh: '现金扇，然后是另外四套造型',
    },
    body: {
      en: [
        `Wassup in a minute money fan, and the cash-fan search that means the same outfit, is one of five variants on ${T}. Money Fan draws an original streetwear anime character on white: an open puffer, a chain, baggy jeans, and one hand fanning plain banknotes. It does not draw a Blue Lock player holding that cash. Atlanta Lock is the fan nickname for the streetwear look, not a cast list.`,
        `The other outfits are the same 15-second sway in different clothes. Puffer Classic is the black puffer. All Black is the all-black fit. Jersey Look is a sports jersey with no readable letters or numbers. Heavyweight is the broader silhouette. Searches for those outfits use this same template. Pick the card, then upload photos.`,
        `${CREW_EN} ${SOUND_EN} ${LIMIT_EN} Photo tips are ${PHOTO}.`,
      ],
      zh: [
        `Wassup in a minute money fan，以及同一个造型的「现金扇」搜索，是 ${TZ} 上五个变体之一。甩钱原版把照片画成白底原创街服动漫角色：敞开的羽绒服、链子、阔腿裤，一只手挥开一沓普通钞票。它不会画一个拿着那沓钱的 Blue Lock 球员。Atlanta Lock 是街服观感的粉丝昵称，不是角色名单。`,
        `另外四套是同一种 15 秒摇摆、不同的衣服。黑羽绒经典是黑色羽绒服。全黑装是一身黑。球衣版是一件没有可读字母或号码的球衣。大块头是更宽的身形。搜这些造型，用的是同一个模板。选卡片，然后上传照片。`,
        `${CREW_ZH} ${SOUND_ZH} ${LIMIT_ZH} 照片建议在 ${PHOTOZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the cash fan a Blue Lock character?', zh: '现金扇是 Blue Lock 角色吗？' },
        a: {
          en: 'No. Money Fan is an original streetwear drawing of the person in the photo. ViralReel does not draw Blue Lock or any show characters.',
          zh: '不是。甩钱原版是照片里这个人的原创街服形象。ViralReel 不画 Blue Lock 或任何影视角色。',
        },
      },
      {
        q: { en: 'Do Puffer, Jersey, All Black, and Heavyweight need other pages?', zh: '黑羽绒、球衣、全黑和大块头需要别的页面吗？' },
        a: {
          en: `No. They are the other four cards on ${T}. This page is the outfit cluster.`,
          zh: `不需要。它们是 ${TZ} 上的另外四张卡片。这一页就是造型这一组。`,
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute makeviral',
    slug: 'wassup-in-a-minute-makeviral',
    title: {
      en: 'Wassup in a Minute MakeViral – ViralReel vs the One-Photo Template',
      zh: 'Wassup in a Minute 和 MakeViral：ViralReel 对照一张照片的模板',
    },
    description: {
      en: 'wassup in a minute makeviral: MakeViral’s template is 1 photo, 10 seconds, sound baked in, Kling 3.0. ViralReel is 1–4 photos, 15 seconds, no licensed sound in the file, a fixed browser template. No invented prices.',
      zh: 'wassup in a minute makeviral：MakeViral 的模板是 1 张照片、10 秒、声音写进文件、Kling 3.0。ViralReel 是 1–4 张照片、15 秒、文件里没有已授权的声音、固定的浏览器模板。不编造价格。',
    },
    h1: { en: 'Wassup in a Minute and MakeViral', zh: 'Wassup in a Minute 和 MakeViral' },
    lead: {
      en: 'MakeViral’s Wassup template is a one-photo, 10-second clip with the sound baked in, described as Kling 3.0. ViralReel is a fixed browser template: one to four photos, 15 seconds, and no licensed song in the file.',
      zh: 'MakeViral 的 Wassup 模板是一张照片、10 秒、声音写进文件，被描述为 Kling 3.0。ViralReel 是固定的浏览器模板：一至四张照片、15 秒、文件里没有已授权的歌曲。',
    },
    guideTitle: {
      en: 'ViralReel, MakeViral, and where the others sit',
      zh: 'ViralReel、MakeViral，以及其他工具各在哪',
    },
    body: {
      en: [
        `Wassup in a minute makeviral compares two different jobs. MakeViral’s template path is /templates/wassup-in-a-minute-ai-trend. As described publicly for this comparison: one photo becomes a streetwear anime character with a cash fan, swaying on white; the file is 10 seconds with sound baked in; the engine is Kling 3.0; it uses credits, no prompt, and no watermark on their terms; the page also talks about Atlanta Lock and the lyric. ViralReel does not operate that site.`,
        `ViralReel is ${T}. ${CREW_EN} The export is 15 seconds, not 10. ${SOUND_EN} ${MODEL_EN} ${WATER_EN} ${OUTFITS_EN}`,
        `Smew AI is a near-clone described as Seedance 2.5, with sound added on the platform. SceneFlare lists Seedance Mini or Kling 4.0, and its FAQ says “in a minute” is not the generation time; a demo beat there is not the viral track. CapCut “WASSUP” multi-shot templates paste inside CapCut and are not this AI anime sway. MakeTrend and apt had no Wassup template in this October 2026 pass. That absence can change. The full table, still with no invented prices, is ${ROUNDUP}.`,
      ],
      zh: [
        `Wassup in a minute makeviral 比较的是两件不同的事。MakeViral 的模板路径是 /templates/wassup-in-a-minute-ai-trend。这次对照里公开描述的是：一张照片变成带现金扇的街服动漫角色，在白底上摇摆；文件是 10 秒，声音写进文件；引擎是 Kling 3.0；按他们的说法用积分、不写提示词、无水印；页面也会谈到 Atlanta Lock 和歌词。ViralReel 不运营那个网站。`,
        `ViralReel 在 ${TZ} 。${CREW_ZH} 导出是 15 秒，不是 10 秒。${SOUND_ZH} ${MODEL_ZH} ${WATER_ZH} ${OUTFITS_ZH}`,
        `Smew AI 是被描述成 Seedance 2.5 的近克隆，声音在平台上另加。SceneFlare 列出 Seedance Mini 或 Kling 4.0，它的 FAQ 说「in a minute」不是生成时间；那里的演示节拍不是热梗原声。CapCut 的「WASSUP」多镜头模板是在 CapCut 里贴素材，不是这条 AI 动漫摇摆。MakeTrend 和 apt 在这次 2026 年 10 月的查看里没有 Wassup 模板。这个空缺以后可能变。完整的表、仍然不编造价格，在 ${ROUNDUPZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel a MakeViral alternative with the song included?', zh: 'ViralReel 是带歌曲的 MakeViral 替代品吗？' },
        a: {
          en: 'No. ViralReel does not license or export the remix. You add the trend sound on TikTok, Reels, or Shorts. The file is 15 seconds from one to four photos.',
          zh: '不是。ViralReel 不授权、也不导出那段混音。请在 TikTok、Reels 或 Shorts 上加热梗原声。文件是一至四张照片做出的 15 秒。',
        },
      },
      {
        q: { en: 'Do you publish MakeViral’s price?', zh: '你们公布 MakeViral 的价格吗？' },
        a: {
          en: 'No. Read their pricing page. This page only states the product differences above, not their rates.',
          zh: '不公布。去他们自己的定价页看。这一页只写上面的产品差别，不写他们的价格。',
        },
      },
    ],
  },
];
