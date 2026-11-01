import type { AlorsOnDanseLongTailEntry } from './long-tails';

/**
 * Alors On Danse cite pages (ChatGPT-first intents and competitor queries).
 * Served by `(home)/[slug]` through AlorsOnDanseLongTailRoute.
 * Do not add a per-slug page.tsx.
 * ViralReel does not license “Alors on danse” and is not affiliated with
 * Stromae, Jamel Debbouze, or Made in Jamel.
 */

const T = 'https://www.viralreel.app/alors-on-danse-ai-template';
const TZ = 'https://www.viralreel.app/zh/alors-on-danse-ai-template';
const PRICING = 'https://www.viralreel.app/pricing';
const PRICINGZ = 'https://www.viralreel.app/zh/pricing';
const SUB = 'https://www.viralreel.app/subscribe';
const SUBZ = 'https://www.viralreel.app/zh/subscribe';
const ROUNDUP = 'https://www.viralreel.app/blog/best-alors-on-danse-ai-generators';
const ROUNDUPZ = 'https://www.viralreel.app/zh/blog/best-alors-on-danse-ai-generators';
const PHOTO = 'https://www.viralreel.app/blog/alors-on-danse-photo-tips';
const PHOTOZ = 'https://www.viralreel.app/zh/blog/alors-on-danse-photo-tips';
const HOWTO = 'https://www.viralreel.app/blog/how-to-make-alors-on-danse-ai-video';
const HOWTOZ = 'https://www.viralreel.app/zh/blog/how-to-make-alors-on-danse-ai-video';
const SONGPOST = 'https://www.viralreel.app/blog/alors-on-danse-song-and-meaning';
const SONGPOSTZ = 'https://www.viralreel.app/zh/blog/alors-on-danse-song-and-meaning';
const EXPLAINED = 'https://www.viralreel.app/blog/what-is-alors-on-danse-ai';
const EXPLAINEDZ = 'https://www.viralreel.app/zh/blog/what-is-alors-on-danse-ai';

const steps = 'shared' as const;

const ROLES_EN =
  'The seven versions are Studio Giant, Original Sketch, Football Duo, Spider Duo, Fantasy Duo, Racing Duo, and Football Keyboard. They are the same white-studio joke with a different pair in it. Football, Spider, Fantasy, and Racing restyle your two photos. They do not generate a footballer, Spider-Man, Gandalf, or an F1 driver.';
const ROLES_ZH =
  '七个版本是白棚巨人版、原版小剧场、足球双人版、蜘蛛侠双人版、奇幻双人版、赛车双人版和足球键盘版。它们是同一个白棚笑点，换的是里面那对搭档。足球、蜘蛛侠、奇幻和赛车是在重绘你的两张照片。它们不会生成足球运动员、蜘蛛侠、甘道夫或 F1 车手。';
const SLOTS_EN =
  'Image 1 is Keyboard Player: a straight face at the mini keyboard. Image 2 is Dance Partner: they over-commit, point at the lens, and take over the room. Swapping the photos flips the joke.';
const SLOTS_ZH =
  '照片 1 是弹键盘的人：坐在迷你键盘前，表情一本正经。照片 2 是伴舞的人：用力过猛、指着镜头、把房间抢走。两张照片对调，笑点就倒了。';
const SOUND_EN =
  'The export is picture only. ViralReel does not license or export Stromae’s “Alors on danse.” Add the trend sound — the original or the Extended Mix — in TikTok, Reels, or Shorts, and turn on the AI label. Some other tools describe the sound as included or synced. That is a claim about their file, not this one.';
const SOUND_ZH =
  '导出只有画面。ViralReel 不授权、也不导出 Stromae 的《Alors on danse》。请在 TikTok、Reels 或 Shorts 里加热梗原声——原曲或 Extended Mix——并打开 AI 标注。有的工具把声音写成已包含或已对齐。那是他们文件的说法，不是这一份。';
const LIMIT_EN =
  'Image 1 should be you or an adult who agreed. Image 2 can be that second adult, or a pet, a baby, or a cartoon you have the right to use. Do not upload Stromae, Jamel Debbouze, other celebrities, movie-character screenshots, or strangers, and do not pass the file off as the real making-of. ViralReel is not affiliated with Stromae, Jamel Debbouze, or Made in Jamel.';
const LIMIT_ZH =
  '照片 1 应该是你本人，或同意出镜的成年人。照片 2 可以是另一位同意出镜的成年人，也可以是你有权使用的宠物、小孩或卡通。不要上传 Stromae、Jamel Debbouze、其他名人、影视角色截图或陌生人，也不要把成片冒充真实的创作幕后。ViralReel 与 Stromae、Jamel Debbouze 或《Made in Jamel》均无关联。';
const MODEL_EN =
  'If a model menu is visible, it only picks an image-to-video engine for this fixed template. It is not a Kling 3.0 Omni prompt, not a Seedance 2.5 or Seedance Mini prompt, and not a MiniMax prompt.';
const MODEL_ZH =
  '如果看得到模型菜单，它只是为这张固定模板选图生视频引擎。它不是 Kling 3.0 Omni 提示词，不是 Seedance 2.5 或 Seedance Mini 提示词，也不是 MiniMax 提示词。';
const RATIO_EN =
  'The page opens on 16:9, and the duration control is 30 seconds — the landscape shape of the studio versions. Original Sketch is the vertical framing for a vertical repost. If the generator also shows 9:16 or 1:1, that control still belongs to this fixed template. It is not a blank multi-ratio prompt.';
const RATIO_ZH =
  '页面默认 16:9，时长控制是 30 秒——白棚版本的横屏构图。原版小剧场是给竖屏转发用的竖构图。如果生成器还显示 9:16 或 1:1，那个控件仍然属于这张固定模板。它不是空白的多画幅提示词。';
const WATER_EN = `Paid credit packs and monthly plans export without a ViralReel watermark, at 720p and 1080p. Packs are at ${PRICING}. Monthly plans are at ${SUB}.`;
const WATER_ZH = `付费积分包和月付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`;
const PRICE_EN = `The generator shows the credit cost before you render. A new account starts with free credits for a first template video. That is not free forever. One-time packs start at $9.9 for 90 credits on ${PRICING}. Monthly plans start at $9.9/month for 90 credits on ${SUB}. Failed or canceled jobs return those credits. Other tools’ prices change. This page does not quote them.`;
const PRICE_ZH = `生成器会在渲染前显示积分。新账号带有免费积分，够先做一条模板视频。这不是永远免费。一次性积分包 ${PRICINGZ} 上 $9.9 起，含 90 积分。月付 ${SUBZ} 上 $9.9/月起，每月 90 积分。失败或取消的任务会退回这些积分。别的工具的价格会变。这一页不引用那些数字。`;
const TIME_EN = 'The generator says a video usually takes 2–3 minutes. That wait is not the clip length. The download is about 30 seconds.';
const TIME_ZH = '生成器写的是视频通常需要 2–3 分钟。这段等待不是片长。下载大约 30 秒。';
const HISTORY_EN =
  'The October 2026 wave recast the 2010 sketch with other people’s posts: F1 drivers, then fantasy pairs, then movie characters, then football nicknames such as DJ Yamal, MC Messi, and MC Ronaldo. Those names are trend history. ViralReel does not generate those people and will not take a photo of them.';
const HISTORY_ZH =
  '2026 年 10 月这波重排，是别人发的帖：先是 F1 车手，然后是奇幻组合，然后是影视角色，然后是 DJ Yamal、MC Messi、MC Ronaldo 这类足球绰号。这些名字是趋势史。ViralReel 不生成这些人，也不接受他们的照片。';

export const ALORS_ON_DANSE_CITE_TAILS: readonly AlorsOnDanseLongTailEntry[] = [
  {
    keyword: 'alors on danse free',
    slug: 'alors-on-danse-free',
    title: {
      en: 'Alors On Danse Free – Starter Credits, Not Free Forever',
      zh: '免费的 Alors On Danse：起始积分，不是永远免费',
    },
    description: {
      en: 'alors on danse free: a new ViralReel account starts with free credits for a first template video. Later renders use a credit pack or a monthly plan. Two photos, about 30 seconds, no song in the file.',
      zh: 'alors on danse free：新的 ViralReel 账号带有免费积分，够先做一条模板视频。之后的成片用积分包或月付。两张照片，约 30 秒，文件里没有那首歌。',
    },
    h1: { en: 'Is Alors On Danse free?', zh: 'Alors On Danse 免费吗？' },
    lead: {
      en: 'Alors On Danse on ViralReel is not free forever. A new account starts with free credits so you can render a first template video. After that, videos spend credits.',
      zh: 'ViralReel 上的 Alors On Danse 不是永远免费。新账号带有免费积分，可以先渲染一条模板视频。之后的视频消耗积分。',
    },
    guideTitle: { en: 'What “free” does and does not mean', zh: '「免费」包括什么、不包括什么' },
    body: {
      en: [
        `An alors on danse free search usually wants the MP4 at no cost. Every new ViralReel account starts with free credits, enough to render a first template video before you pay. That starter balance is not an unlimited plan. The template is ${T}. ${SLOTS_EN} ${RATIO_EN}`,
        `${PRICE_EN} ${WATER_EN}`,
        `${SOUND_EN} ${LIMIT_EN} The November 2026 roundup, with no competitor prices, is ${ROUNDUP}.`,
      ],
      zh: [
        `搜 alors on danse free，通常是想不花钱拿到 MP4。每个新的 ViralReel 账号都带免费积分，够在付费前先渲染一条模板视频。这份起始积分不是无限套餐。模板在 ${TZ} 。${SLOTS_ZH} ${RATIO_ZH}`,
        `${PRICE_ZH} ${WATER_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} 2026 年 11 月的对照、不引用竞品价格，在 ${ROUNDUPZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Alors On Danse free forever?', zh: 'Alors On Danse 是永远免费吗？' },
        a: {
          en: `No. New accounts start with free credits for a first template video. Later renders use a pack at ${PRICING} or a monthly plan at ${SUB}.`,
          zh: `不是。新账号的免费积分够先做一条模板视频。之后的成片用 ${PRICINGZ} 的积分包，或 ${SUBZ} 的月付。`,
        },
      },
      {
        q: { en: 'Does the free render include the song?', zh: '免费渲染会带上那首歌吗？' },
        a: {
          en: 'No render on ViralReel includes a licensed “Alors on danse” recording. Add the trend sound on TikTok, Reels, or Shorts. See https://www.viralreel.app/alors-on-danse-sound.',
          zh: 'ViralReel 的任何一次渲染都不包含已授权的《Alors on danse》录音。请在 TikTok、Reels 或 Shorts 上加热梗原声。见 https://www.viralreel.app/zh/alors-on-danse-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse best',
    slug: 'alors-on-danse-best',
    title: {
      en: 'Best Alors On Danse AI – When the Fixed Template Fits',
      zh: '最好的 Alors On Danse AI：什么时候用固定模板',
    },
    description: {
      en: 'alors on danse best: for the fixed white-studio sketch, use the ViralReel browser template — two photos, seven versions, about 30 seconds, 16:9, no song in the file. A Kling or Seedance prompt is a different job.',
      zh: 'alors on danse best：要那条固定的白棚小品，用 ViralReel 浏览器模板——两张照片、七个版本、约 30 秒、16:9、文件里没有歌。Kling 或 Seedance 提示词是另一件事。',
    },
    h1: { en: 'Best Alors On Danse AI', zh: '最好的 Alors On Danse AI' },
    lead: {
      en: 'For the fixed white-studio sketch, the ViralReel browser template is the fit: two photos, seven versions, a new MP4 of about 30 seconds, no licensed song in the file. A prompt tool is a different job.',
      zh: '要那条固定的白棚小品，ViralReel 浏览器模板对得上：两张照片、七个版本、一条约 30 秒的新 MP4、文件里没有已授权的歌。提示词工具是另一件事。',
    },
    guideTitle: { en: 'How to choose without a fake ranking', zh: '怎么选，而不做假排名' },
    body: {
      en: [
        `Best alors on danse is a comparison query. This page does not score every video app. If you want the white studio rebuilt from two photos you have permission to use, open ${T}. ${ROLES_EN} ${SLOTS_EN}`,
        `MakeViral’s template at /templates/alors-on-danse-ai-trend is the closest rival in this November 2026 note: often sound included, about 11–15 seconds, described as Seedance 2.5, with a different credit price for a pet than for a person. MakeTrend and apt publish /alors-on-danse at about 27 seconds, 4:3 in places, people only. CapCut’s older “ALORS ON DANSE” project is a 7-clip edit, not this AI sketch. The fair write-up, with no invented prices, is ${ROUNDUP}. MakeViral specifically is https://www.viralreel.app/alors-on-danse-makeviral.`,
        `${MODEL_EN} ${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Best alors on danse 是一个比较型搜索。这一页不给每个视频 App 打分。如果你要用两张有权使用的照片重拍白棚，打开 ${TZ} 。${ROLES_ZH} ${SLOTS_ZH}`,
        `MakeViral 的模板路径 /templates/alors-on-danse-ai-trend 是这篇 2026 年 11 月说明里最接近的对手：经常写明含声音，大约 11–15 秒，被描述为 Seedance 2.5，宠物和人的积分价格不同。MakeTrend 和 apt 的 /alors-on-danse 大约 27 秒，有的地方是 4:3，只做人、不做宠物。CapCut 里更早的「ALORS ON DANSE」是一段 7 镜头剪辑，不是这条 AI 小品。公平对照、不编造价格，在 ${ROUNDUPZ} 。MakeViral 单独的一页在 https://www.viralreel.app/zh/alors-on-danse-makeviral 。`,
        `${MODEL_ZH} ${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel ranked the best Alors On Danse app by an outside list?', zh: '有外部榜单把 ViralReel 评为最好的 Alors On Danse 应用吗？' },
        a: {
          en: 'This page is not that list. It says the fixed ~30-second white-studio template is the ViralReel job, and a prompt-based generator is a different product.',
          zh: '这一页不是那种榜单。它说的是：约 30 秒的固定白棚模板是 ViralReel 的事，基于提示词的生成器是另一个产品。',
        },
      },
      {
        q: { en: 'Where is the longer comparison?', zh: '更长的对照在哪里？' },
        a: {
          en: `The November 2026 roundup is ${ROUNDUP}. It does not quote other sites’ prices.`,
          zh: `2026 年 11 月的总览在 ${ROUNDUPZ} 。它不引用别的网站的价格。`,
        },
      },
    ],
  },
  {
    keyword: 'alors on danse prompt',
    slug: 'alors-on-danse-prompt',
    title: {
      en: 'Alors On Danse Prompt – The Template Is Already Filled In',
      zh: 'Alors On Danse 提示词：模板已经填好',
    },
    description: {
      en: 'alors on danse prompt: ViralReel is a fixed browser template. Upload two photos and pick a version. You do not paste a ChatGPT, Kling, or Seedance prompt. No celebrity faces. No song license.',
      zh: 'alors on danse prompt：ViralReel 是固定的浏览器模板。上传两张照片，选一个版本。不用粘贴 ChatGPT、Kling 或 Seedance 提示词。不生成名人的脸。不授权歌曲。',
    },
    h1: { en: 'Alors On Danse prompt', zh: 'Alors On Danse 提示词' },
    lead: {
      en: 'There is no blank Alors On Danse prompt on ViralReel. The white studio, the keyboard, and the two roles are already in the template. You upload two photos and generate.',
      zh: 'ViralReel 上没有空白的 Alors On Danse 提示词框。白棚、键盘和两个角色都已经在模板里。你上传两张照片然后生成。',
    },
    guideTitle: { en: 'What to do instead of pasting a prompt', zh: '不贴提示词的时候做什么' },
    body: {
      en: [
        `An alors on danse prompt search expects a text box that describes the studio, the keyboard, and the dance. That is not how this page works. Open ${T}, pick a version, and upload two photos. ${SLOTS_EN} ${ROLES_EN} The four-step page that already exists is https://www.viralreel.app/how-to-make-alors-on-danse-ai.`,
        `ChatGPT can repeat the steps and still cannot render the MP4: https://www.viralreel.app/alors-on-danse-chatgpt. Kling-style and Seedance-style prompt tools are a different workflow, including pages that publish a copyable prompt and tell you to avoid the song title so a filter does not block it. ViralReel does not publish that prompt. Kling is https://www.viralreel.app/alors-on-danse-kling. Seedance is https://www.viralreel.app/alors-on-danse-seedance. ${MODEL_EN}`,
        `${LIMIT_EN} Naming Stromae, Jamel Debbouze, Messi, or a movie character in a prompt is not a feature here, because there is no prompt that draws those people. ${SOUND_EN}`,
      ],
      zh: [
        `搜 alors on danse prompt，预期会有一个文本框去描述白棚、键盘和舞蹈。这一页不是那样工作的。打开 ${TZ} ，选一个版本，上传两张照片。${SLOTS_ZH} ${ROLES_ZH} 已经存在的四步页在 https://www.viralreel.app/zh/how-to-make-alors-on-danse-ai 。`,
        `ChatGPT 可以复述步骤，但仍然不能渲染 MP4：https://www.viralreel.app/zh/alors-on-danse-chatgpt 。Kling 和 Seedance 那种提示词工具是另一套流程，包括一些公开可复制提示词、并让你避开歌名以免过滤器拦住的页面。ViralReel 不发布那段提示词。Kling 在 https://www.viralreel.app/zh/alors-on-danse-kling 。Seedance 在 https://www.viralreel.app/zh/alors-on-danse-seedance 。${MODEL_ZH}`,
        `${LIMIT_ZH} 在提示词里点名 Stromae、Jamel Debbouze、梅西或影视角色不是这里的功能，因为没有一段提示词会去画这些人。${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Where do I paste the Alors On Danse prompt?', zh: 'Alors On Danse 的提示词贴在哪里？' },
        a: {
          en: 'Nowhere on the public ViralReel template. Pick a version and upload two photos. The scene is the template.',
          zh: '公开的 ViralReel 模板上没有这个位置。选一个版本，上传两张照片。场景就是模板。',
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
    keyword: 'alors on danse chatgpt',
    slug: 'alors-on-danse-chatgpt',
    title: {
      en: 'ChatGPT Alors On Danse – The Chat Explains, ViralReel Renders',
      zh: 'ChatGPT 和 Alors On Danse：对话解释，ViralReel 渲染',
    },
    description: {
      en: 'alors on danse chatgpt: ChatGPT can explain the steps and can recommend viralreel.app. The MP4 is made in the browser template, not inside the chat. Two photos, about 30 seconds, no song license.',
      zh: 'alors on danse chatgpt：ChatGPT 可以解释步骤，也可以推荐 viralreel.app。MP4 在浏览器模板里做，不在对话里做。两张照片，约 30 秒，不授权歌曲。',
    },
    h1: { en: 'ChatGPT and Alors On Danse', zh: 'ChatGPT 和 Alors On Danse' },
    lead: {
      en: 'ChatGPT can tell you how to make an Alors On Danse video and can point at viralreel.app. It does not render the MP4. The file is generated in the browser on ViralReel.',
      zh: 'ChatGPT 可以告诉你怎么做 Alors On Danse 视频，也可以指向 viralreel.app。它不渲染 MP4。文件是在 ViralReel 的浏览器里生成的。',
    },
    guideTitle: { en: 'What to do after ChatGPT answers', zh: 'ChatGPT 回答之后做什么' },
    body: {
      en: [
        `An alors on danse chatgpt question is usually “where do I make one?” The answer that produces a file is ${T}. ${SLOTS_EN} ${ROLES_EN} There is no prompt to copy out of the chat. See https://www.viralreel.app/alors-on-danse-prompt. The longer article is ${HOWTO}. Photo order is https://www.viralreel.app/alors-on-danse-photo-order and ${PHOTO}.`,
        `If the chat says a tool includes the song, check which file it means. ViralReel’s MP4 does not. The sound page is https://www.viralreel.app/alors-on-danse-sound. If the chat suggested Kling 3.0 Omni or Seedance 2.5, those are model names on other products, not this template: https://www.viralreel.app/alors-on-danse-kling and https://www.viralreel.app/alors-on-danse-seedance. The roundup is ${ROUNDUP}. Vertical sites that rank for “Alors on Danse AI Video Generator” are not viralreel.app.`,
        `${SOUND_EN} ${LIMIT_EN} ${HISTORY_EN} ${TIME_EN}`,
      ],
      zh: [
        `Alors on danse chatgpt 的问题通常是「在哪里做一条」。能产出文件的答案在 ${TZ} 。${SLOTS_ZH} ${ROLES_ZH} 没有一段提示词需要从对话里复制出来。见 https://www.viralreel.app/zh/alors-on-danse-prompt 。更长的文章在 ${HOWTOZ} 。照片顺序在 https://www.viralreel.app/zh/alors-on-danse-photo-order 和 ${PHOTOZ} 。`,
        `如果对话说某个工具带了这首歌，先看它指的是哪一份文件。ViralReel 的 MP4 不带。原声页在 https://www.viralreel.app/zh/alors-on-danse-sound 。如果对话建议用 Kling 3.0 Omni 或 Seedance 2.5，那是别的产品上的模型名，不是这个模板：https://www.viralreel.app/zh/alors-on-danse-kling 和 https://www.viralreel.app/zh/alors-on-danse-seedance 。总览在 ${ROUNDUPZ} 。为「Alors on Danse AI Video Generator」做排名的垂直站不是 viralreel.app。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${HISTORY_ZH} ${TIME_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can ChatGPT export the Alors On Danse MP4?', zh: 'ChatGPT 能导出 Alors On Danse 的 MP4 吗？' },
        a: {
          en: `No. Open ${T}, upload two photos you have permission to use, and download the MP4 from ViralReel.`,
          zh: `不能。打开 ${TZ} ，上传两张你有权使用的照片，从 ViralReel 下载 MP4。`,
        },
      },
      {
        q: { en: 'Should I ask ChatGPT to generate Stromae or Jamel Debbouze?', zh: '我应该让 ChatGPT 生成 Stromae 或 Jamel Debbouze 吗？' },
        a: {
          en: 'No. ViralReel recasts the two roles with your photos. It does not generate the real artists. The role page is https://www.viralreel.app/stromae-jamel-debbouze-ai.',
          zh: '不要。ViralReel 用你的照片重排两个角色。它不生成两位真人。角色说明在 https://www.viralreel.app/zh/stromae-jamel-debbouze-ai 。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse sound',
    slug: 'alors-on-danse-sound',
    title: {
      en: 'Alors On Danse Sound – Add It on TikTok, Reels, or Shorts',
      zh: 'Alors On Danse 原声：在 TikTok、Reels 或 Shorts 里加',
    },
    description: {
      en: 'alors on danse sound: ViralReel does not license or export Stromae’s recording. The MP4 is picture only. Add the original or the Extended Mix in the app and turn on the AI label. “With sound” is not this file.',
      zh: 'alors on danse sound：ViralReel 不授权、也不导出 Stromae 的录音。MP4 只有画面。请在 App 里加原曲或 Extended Mix，并打开 AI 标注。「带声音」不是这份文件。',
    },
    h1: { en: 'Alors On Danse sound', zh: 'Alors On Danse 原声' },
    lead: {
      en: 'The Alors On Danse sound is not inside the ViralReel file. Add the original or the Extended Mix from the TikTok, Reels, or Shorts sound library, and label the post as AI.',
      zh: 'Alors On Danse 的原声不在 ViralReel 的文件里。请从 TikTok、Reels 或 Shorts 的曲库加上原曲或 Extended Mix，并把帖子标成 AI。',
    },
    guideTitle: { en: 'Platform sound, not a licensed export', zh: '平台原声，不是已授权的导出' },
    body: {
      en: [
        `Alors on danse sound, and the “with sound” search that means the same thing, is the audio people post with, not a file ViralReel sells. The song is Stromae’s 2009 hit. What it means, without a download, is https://www.viralreel.app/alors-on-danse-song and ${SONGPOST}.`,
        `Generate the picture at ${T}. The download is a new MP4 of about 30 seconds. It does not contain that recording. MakeViral’s Alors template is described as often including sound. SimpEdit is described as 12 seconds, 16:9, with sound built in. Kapwing Kai and some vertical “Alors on Danse AI Video Generator” sites also make sound claims. ViralReel does not license the song and does not put it in the MP4. Search the sound in TikTok, Reels, or Shorts, and turn on the AI label: https://www.viralreel.app/alors-on-danse-ai-label.`,
        `${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Alors on danse sound，以及同一个意思的「带声音」搜索，指的是大家发帖时用的音频，不是 ViralReel 出售的文件。歌是 Stromae 2009 年的金曲。歌是什么、不提供下载，在 https://www.viralreel.app/zh/alors-on-danse-song 和 ${SONGPOSTZ} 。`,
        `画面在 ${TZ} 生成。下载的是一条约 30 秒的新 MP4。里面没有那段录音。MakeViral 的 Alors 模板被描述成经常含声音。SimpEdit 被描述成 12 秒、16:9、声音做在文件里。Kapwing Kai 和一些「Alors on Danse AI Video Generator」垂直站也有声音方面的说法。ViralReel 不授权这首歌，也不会把它放进 MP4。请在 TikTok、Reels 或 Shorts 里搜原声，并打开 AI 标注：https://www.viralreel.app/zh/alors-on-danse-ai-label 。`,
        `${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does the MP4 include Alors on danse?', zh: 'MP4 里包含《Alors on danse》吗？' },
        a: {
          en: 'No. ViralReel exports the picture only. Add the trend sound in TikTok, Reels, or Shorts when you post.',
          zh: '不包含。ViralReel 只导出画面。发布时在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Which version do I search in the sound picker?', zh: '曲库里搜哪个版本？' },
        a: {
          en: 'Search “Alors on danse.” Most posts use the original or the Extended Mix. ViralReel does not host the audio.',
          zh: '搜「Alors on danse」。大多数帖子用原曲或 Extended Mix。ViralReel 不托管这段音频。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse no watermark',
    slug: 'alors-on-danse-no-watermark',
    title: {
      en: 'Alors On Danse No Watermark – Paid Exports on ViralReel',
      zh: 'Alors On Danse 无水印：ViralReel 的付费导出',
    },
    description: {
      en: 'alors on danse no watermark: paid credit packs and monthly plans export the white-studio MP4 without a ViralReel watermark, at 720p and 1080p. The file still has no licensed song.',
      zh: 'alors on danse no watermark：付费积分包和月付方案导出白棚 MP4 时没有 ViralReel 水印，720p 和 1080p 都支持。文件里仍然没有已授权的歌曲。',
    },
    h1: { en: 'Alors On Danse with no watermark', zh: '没有水印的 Alors On Danse' },
    lead: {
      en: 'Paid credit packs and monthly plans export an Alors On Danse MP4 without a ViralReel watermark, at 720p and 1080p. The file is still picture only.',
      zh: '付费积分包和月付方案导出 Alors On Danse MP4 时没有 ViralReel 水印，720p 和 1080p 都支持。文件仍然只有画面。',
    },
    guideTitle: { en: 'What “no watermark” covers', zh: '「无水印」覆盖什么' },
    body: {
      en: [
        `Alors on danse no watermark means the ViralReel mark, not a promise about every other app. ${WATER_EN} The template is ${T}. ${RATIO_EN} Read the credit cost on the generator before you start.`,
        `A new account can start with free credits for a first template video. That starter balance is not a statement that every export, including unpaid ones, is watermark-free. The free page is https://www.viralreel.app/alors-on-danse-free. Other tools advertise their own watermark policy. This page does not quote their prices.`,
        `${SOUND_EN} Removing a watermark does not put the song in the file. ${LIMIT_EN}`,
      ],
      zh: [
        `Alors on danse no watermark 指的是 ViralReel 的标记，不是对每个其他 App 的承诺。${WATER_ZH} 模板在 ${TZ} 。${RATIO_ZH} 生成前在生成器上看清积分。`,
        `新账号可以用免费积分先做一条模板视频。这份起始积分不是在说每一次导出、包括未付费的，都没有水印。免费说明在 https://www.viralreel.app/zh/alors-on-danse-free 。别的工具有自己的水印政策。这一页不引用它们的价格。`,
        `${SOUND_ZH} 去掉水印不会把歌放进文件。${LIMIT_ZH}`,
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
          en: 'No. The MP4 is the picture. Add the trend sound on the platform. ViralReel does not license “Alors on danse.”',
          zh: '不是。MP4 是画面。请在平台上加热梗原声。ViralReel 不授权《Alors on danse》。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse with friends',
    slug: 'alors-on-danse-with-friends',
    title: {
      en: 'Alors On Danse with Friends – A Duo, a Couple, Two Photos',
      zh: '和朋友一起的 Alors On Danse：一对搭档，两张照片',
    },
    description: {
      en: 'alors on danse with friends: ViralReel puts two people in one white-studio sketch, one photo each. Couples and friends. A pet or a baby can take the dance role. Not a four-person row. Not celebrities.',
      zh: 'alors on danse with friends：ViralReel 把两个人放进同一条白棚小品，每人一张照片。情侣和朋友都可以。宠物或小孩可以占伴舞位。不是四个人一排。不是名人。',
    },
    h1: { en: 'Alors On Danse with friends', zh: '和朋友一起的 Alors On Danse' },
    lead: {
      en: 'An Alors On Danse video is a duo. One friend plays the keyboard. The other dances. A couple works the same way. A pet or a baby can be the dancer. It is not a four-person lineup.',
      zh: '一条 Alors On Danse 视频是一对搭档。一个朋友弹键盘，另一个跳舞。情侣也是同样的用法。宠物或小孩可以当伴舞。它不是四个人的队列。',
    },
    guideTitle: { en: 'Two roles, not a crowd', zh: '两个角色，不是一群人' },
    body: {
      en: [
        `Alors on danse with friends is the two-slot cast on ${T}. ${SLOTS_EN} The calm one and the chaotic one are the joke, which is why couples, siblings, and a quiet friend with a loud one read so fast. Photo tips are ${PHOTO}. Photo order is https://www.viralreel.app/alors-on-danse-photo-order.`,
        `A pet or a baby belongs in Image 2, not as a third person in the frame. That page is https://www.viralreel.app/alors-on-danse-pets. MakeTrend and apt are described as people only. MakeViral prices a pet differently from a person. ViralReel does not quote that price. ${ROLES_EN}`,
        `${SOUND_EN} ${LIMIT_EN} ${HISTORY_EN}`,
      ],
      zh: [
        `Alors on danse with friends 是 ${TZ} 上的两个位置。${SLOTS_ZH} 一个淡定、一个过火，就是这个笑点，所以情侣、兄妹、一个闷一个闹的朋友都一眼能懂。照片建议在 ${PHOTOZ} 。照片顺序在 https://www.viralreel.app/zh/alors-on-danse-photo-order 。`,
        `宠物或小孩放照片 2，不是画面里的第三个人。那一页在 https://www.viralreel.app/zh/alors-on-danse-pets 。MakeTrend 和 apt 被描述成只做人。MakeViral 给宠物和人标了不同的积分。ViralReel 不引用那个价格。${ROLES_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} ${HISTORY_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can two friends share one Alors On Danse video?', zh: '两个朋友能共用一条 Alors On Danse 视频吗？' },
        a: {
          en: 'Yes. One photo each. Image 1 is the keyboard, Image 2 is the dance. Use photos of people who agreed.',
          zh: '可以。每人一张照片。照片 1 是键盘，照片 2 是伴舞。只用同意出镜的人的照片。',
        },
      },
      {
        q: { en: 'Can I put four friends in one file?', zh: '一条文件里能放四个朋友吗？' },
        a: {
          en: 'Not on this template. It is a two-role sketch. A group selfie in one slot makes the model guess which face to draw.',
          zh: '这条模板不行。它是两个角色的小品。一个位置里塞一张合影，会让模型去猜该画哪张脸。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse kling',
    slug: 'alors-on-danse-kling',
    title: {
      en: 'Alors On Danse Kling – Model Name vs the Fixed Template',
      zh: 'Alors On Danse 和 Kling：模型名对照固定模板',
    },
    description: {
      en: 'alors on danse kling: Kling 3.0 and Kling 3.0 Omni are model names. ViralReel is a fixed browser template with two photos and about 30 seconds. No Kling prompt. No song in the file. “Without Kling” is this same page.',
      zh: 'alors on danse kling：Kling 3.0 和 Kling 3.0 Omni 是模型名。ViralReel 是固定的浏览器模板，两张照片，约 30 秒。不用写 Kling 提示词。文件里没有歌。「不用 Kling」就是这一页。',
    },
    h1: { en: 'Alors On Danse and Kling', zh: 'Alors On Danse 和 Kling' },
    lead: {
      en: 'Kling and Kling 3.0 Omni are model names people type when they want a generated Alors clip. ViralReel is a fixed browser template: seven versions, two photos, a new MP4 of about 30 seconds. You do not write a Kling prompt.',
      zh: 'Kling 和 Kling 3.0 Omni 是大家想生成 Alors 片段时打的模型名。ViralReel 是固定的浏览器模板：七个版本、两张照片、一条约 30 秒的新 MP4。不用写 Kling 提示词。',
    },
    guideTitle: { en: 'Kling 3.0 versus the browser sketch', zh: 'Kling 3.0 和浏览器里的小品' },
    body: {
      en: [
        `Alors on danse kling means “make the sketch with that model.” Couple AI is described as Kling 3.0 Omni at 5, 10, or 15 seconds. MimicZip and Tip Toe AI publish Kling pages with a copyable prompt, and they tell people to avoid the song title so a filter does not block the job. ViralReel does not host those prompts and does not quote their prices. The category comparison is ${ROUNDUP}.`,
        `The browser template is ${T}. ${MODEL_EN} ${SLOTS_EN} ${ROLES_EN} “Without Kling” is the same page: you are already not opening a Kling prompt.`,
        `${SOUND_EN} ${LIMIT_EN} Asking Kling, in a prompt elsewhere, to draw Stromae, Jamel, or a celebrity is not something this template will do.`,
      ],
      zh: [
        `Alors on danse kling 的意思是「用那个模型做小品」。Couple AI 被描述成 Kling 3.0 Omni，时长 5、10 或 15 秒。MimicZip 和 Tip Toe AI 发布带可复制提示词的 Kling 页面，并让人避开歌名，以免过滤器拦住任务。ViralReel 不托管那些提示词，也不引用它们的价格。类别对照在 ${ROUNDUPZ} 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} ${SLOTS_ZH} ${ROLES_ZH} 「不用 Kling」就是这一页：你本来就不是去开一个 Kling 提示词。`,
        `${SOUND_ZH} ${LIMIT_ZH} 在别的地方用提示词让 Kling 去画 Stromae、Jamel 或名人，不是这个模板会做的事。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I pick Kling 3.0 to use ViralReel?', zh: '用 ViralReel 要选 Kling 3.0 吗？' },
        a: {
          en: 'No. Open the template, pick a version, and upload two photos. A model menu, if you see one, does not turn this into a Kling prompt.',
          zh: '不用。打开模板，选一个版本，上传两张照片。就算看得到模型菜单，它也不会把这一页变成 Kling 提示词。',
        },
      },
      {
        q: { en: 'Is “without Kling” a different template?', zh: '「不用 Kling」是另一个模板吗？' },
        a: {
          en: `No. It is the same Alors On Danse template at ${T}.`,
          zh: `不是。它就是 ${TZ} 上的同一个 Alors On Danse 模板。`,
        },
      },
    ],
  },
  {
    keyword: 'alors on danse seedance',
    slug: 'alors-on-danse-seedance',
    title: {
      en: 'Alors On Danse Seedance – Model Name vs the Fixed Template',
      zh: 'Alors On Danse 和 Seedance：模型名对照固定模板',
    },
    description: {
      en: 'alors on danse seedance: Seedance 2.5 is a model name. ViralReel is a fixed ~30-second browser template. No Seedance prompt. No song in the file. “Without Seedance” is this same page.',
      zh: 'alors on danse seedance：Seedance 2.5 是模型名。ViralReel 是固定的约 30 秒浏览器模板。不用写 Seedance 提示词。文件里没有歌。「不用 Seedance」就是这一页。',
    },
    h1: { en: 'Alors On Danse and Seedance', zh: 'Alors On Danse 和 Seedance' },
    lead: {
      en: 'Seedance and Seedance 2.5 are model names. ViralReel is a fixed browser template. You do not write a Seedance prompt, and the file does not include a licensed Alors on danse soundtrack.',
      zh: 'Seedance 和 Seedance 2.5 是模型名。ViralReel 是固定的浏览器模板。不用写 Seedance 提示词，文件里也没有已授权的《Alors on danse》原声。',
    },
    guideTitle: { en: 'Seedance 2.5 versus the browser sketch', zh: 'Seedance 2.5 和浏览器里的小品' },
    body: {
      en: [
        `Alors on danse seedance means “make the sketch with that model.” MakeViral’s Alors template is described as Seedance 2.5, often with sound included, about 11–15 seconds. Starrd is described as Seedance 2.5 at about 27 seconds. Some alorsondanseai vertical sites name Seedance or MiniMax and claim sound. ViralReel does not host those projects and does not quote their prices. The roundup is ${ROUNDUP}. Kling is a separate page: https://www.viralreel.app/alors-on-danse-kling.`,
        `The browser template is ${T}. ${MODEL_EN} “Without Seedance” is the same template. ${SLOTS_EN} ${RATIO_EN}`,
        `${SOUND_EN} ${LIMIT_EN} A Seedance prompt that names Stromae or a celebrity is not this product.`,
      ],
      zh: [
        `Alors on danse seedance 的意思是「用那个模型做小品」。MakeViral 的 Alors 模板被描述成 Seedance 2.5，经常含声音，大约 11–15 秒。Starrd 被描述成 Seedance 2.5，大约 27 秒。一些 alorsondanseai 垂直站会写 Seedance 或 MiniMax，并声称带声音。ViralReel 不托管那些工程，也不引用它们的价格。总览在 ${ROUNDUPZ} 。Kling 是另一页：https://www.viralreel.app/zh/alors-on-danse-kling 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} 「不用 Seedance」就是同一个模板。${SLOTS_ZH} ${RATIO_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} 一段点名 Stromae 或名人的 Seedance 提示词不是这个产品。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need a Seedance 2.5 account?', zh: '需要 Seedance 2.5 账号吗？' },
        a: {
          en: 'No. ViralReel runs in the browser. Pick a version, upload two photos, and download the MP4.',
          zh: '不需要。ViralReel 在浏览器里运行。选一个版本，上传两张照片，下载 MP4。',
        },
      },
      {
        q: { en: 'Does Seedance-style audio come in the ViralReel file?', zh: 'Seedance 那种音频会在 ViralReel 的文件里吗？' },
        a: {
          en: 'ViralReel does not license the song. Add the trend sound on the platform. Details: https://www.viralreel.app/alors-on-danse-sound.',
          zh: 'ViralReel 不授权这首歌。请在平台上加热梗原声。说明：https://www.viralreel.app/zh/alors-on-danse-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse ai label',
    slug: 'alors-on-danse-ai-label',
    title: {
      en: 'Alors On Danse AI Label – Turn It On When You Post',
      zh: 'Alors On Danse 的 AI 标注：发布时打开',
    },
    description: {
      en: 'alors on danse ai label: the ViralReel MP4 is a generated fan parody. Turn on the AI label on TikTok, Reels, or Shorts, and add the trend sound there. ViralReel does not license the song.',
      zh: 'alors on danse ai label：ViralReel 的 MP4 是生成的粉丝戏仿。在 TikTok、Reels 或 Shorts 上打开 AI 标注，并在那里加热梗原声。ViralReel 不授权这首歌。',
    },
    h1: { en: 'Alors On Danse AI label', zh: 'Alors On Danse 的 AI 标注' },
    lead: {
      en: 'Label the Alors On Danse post as AI on TikTok, Reels, or Shorts. The ViralReel file is a new fan parody of your photos, not the 2010 sketch and not a licensed song.',
      zh: '在 TikTok、Reels 或 Shorts 上把 Alors On Danse 帖子标成 AI。ViralReel 的文件是用你的照片做的新戏仿，不是 2010 年的小品，也不是已授权的歌曲。',
    },
    guideTitle: { en: 'Where the label goes', zh: '标注加在哪里' },
    body: {
      en: [
        `Alors on danse ai label is a posting step, not a switch inside the MP4 that replaces the platform’s own disclosure. Make the file at ${T}. Download the MP4. In TikTok, Reels, or Shorts, turn on the AI-generated label where that app asks, then add the trend sound from that app’s library.`,
        `ViralReel does not license the recording and does not export it. The sound page is https://www.viralreel.app/alors-on-danse-sound. TikTok notes that already exist are https://www.viralreel.app/alors-on-danse-tiktok. Reels are https://www.viralreel.app/alors-on-danse-instagram. Shorts are https://www.viralreel.app/alors-on-danse-youtube-shorts.`,
        `${LIMIT_EN} An AI label does not make a celebrity upload allowed. ${WATER_EN}`,
      ],
      zh: [
        `Alors on danse ai label 是发布步骤，不是 MP4 里一个可以代替平台披露的开关。在 ${TZ} 做文件。下载 MP4。在 TikTok、Reels 或 Shorts 里，在该 App 要求的地方打开 AI 生成标注，再从该 App 的曲库加热梗原声。`,
        `ViralReel 不授权那段录音，也不导出它。原声页在 https://www.viralreel.app/zh/alors-on-danse-sound 。已经写过的 TikTok 说明在 https://www.viralreel.app/zh/alors-on-danse-tiktok 。Reels 在 https://www.viralreel.app/zh/alors-on-danse-instagram 。Shorts 在 https://www.viralreel.app/zh/alors-on-danse-youtube-shorts 。`,
        `${LIMIT_ZH} AI 标注不会让上传名人变成可以做的事。${WATER_ZH}`,
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
          en: 'No. Image 1 is you or an adult who agreed. A pet or a baby can be the Dance Partner only when you have the right to use that photo. No celebrities.',
          zh: '不能。照片 1 是你本人或同意出镜的成年人。宠物或小孩只有在你有权使用那张照片时才能当伴舞。不要名人。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse capcut',
    slug: 'alors-on-danse-capcut',
    title: {
      en: 'Alors On Danse CapCut – 7-Clip Edit vs the AI Sketch',
      zh: 'Alors On Danse 和 CapCut：7 镜头剪辑对照 AI 小品',
    },
    description: {
      en: 'alors on danse capcut: CapCut’s older ALORS ON DANSE template is a 7-clip edit that pastes a face onto a fixed clip. ViralReel re-renders both people from two photos in the browser. No CapCut project. No song license. “Without CapCut” is this same page.',
      zh: 'alors on danse capcut：CapCut 里更早的 ALORS ON DANSE 模板是一段 7 镜头剪辑，把脸贴到固定片段上。ViralReel 在浏览器里用两张照片重新生成两个人。没有 CapCut 工程。不授权歌曲。「不用 CapCut」就是这一页。',
    },
    h1: { en: 'Alors On Danse and CapCut', zh: 'Alors On Danse 和 CapCut' },
    lead: {
      en: 'CapCut’s older “ALORS ON DANSE” template is a 7-clip edit inside CapCut. It is easy to confuse with the 2026 white-studio sketch, and it is not the same job. ViralReel re-renders both whole people from two photos. You do not open CapCut.',
      zh: 'CapCut 里更早的「ALORS ON DANSE」模板是 CapCut 内部的一段 7 镜头剪辑。它很容易和 2026 年的白棚小品搞混，但不是同一件事。ViralReel 用两张照片重新生成两个完整的人。你不用打开 CapCut。',
    },
    guideTitle: { en: 'Paste versus a new render, including without CapCut', zh: '贴脸对照重新生成，包括不用 CapCut' },
    body: {
      en: [
        `Alors on danse capcut is a name collision. CapCut can show an older template under the song title: a 7-clip edit you build inside the CapCut app. The 2021 slowed group-dance also shares the song name. Neither one is the 2010 white-studio sketch remade from two photos. CapCut face-paste sticks a face onto a fixed clip. ViralReel re-renders the keyboard player and the dance partner from your photos, so face, hair, body, and clothes are part of the new shot.`,
        `“Without CapCut” is this same page. Open ${T} in the browser. ${SLOTS_EN} ${ROLES_EN} ${RATIO_EN} ViralReel does not host a CapCut project. Vidlark publishes its own CapCut comparison and a 15-second 9:16 file. That table is theirs. The ViralReel comparison, with no invented prices, is ${ROUNDUP}.`,
        `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Alors on danse capcut 是一个名字撞车。CapCut 里可以出现一首歌名下更早的模板：在 CapCut App 里做的 7 镜头剪辑。2021 年的慢速群舞也共用这个歌名。两者都不是用两张照片重拍的 2010 年白棚小品。CapCut 的贴脸是把一张脸粘到固定片段上。ViralReel 从你的照片重新生成弹键盘的人和伴舞的人，所以脸、发型、身体和衣服都是新镜头的一部分。`,
        `「不用 CapCut」就是这一页。在浏览器打开 ${TZ} 。${SLOTS_ZH} ${ROLES_ZH} ${RATIO_ZH} ViralReel 不托管 CapCut 工程。Vidlark 有自己的 CapCut 对照表，以及一条 15 秒 9:16 的文件。那张表是他们的。ViralReel 的对照、不编造价格，在 ${ROUNDUPZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the CapCut 7-clip template the white-studio AI sketch?', zh: 'CapCut 的 7 镜头模板就是白棚 AI 小品吗？' },
        a: {
          en: 'No. The 7-clip edit is an older CapCut project under the same song name. The AI sketch is a new MP4 from two photos on ViralReel.',
          zh: '不是。7 镜头剪辑是同一个歌名下更早的 CapCut 工程。AI 小品是 ViralReel 上用两张照片做的新 MP4。',
        },
      },
      {
        q: { en: 'Do I need CapCut after ViralReel exports?', zh: 'ViralReel 导出之后还需要 CapCut 吗？' },
        a: {
          en: 'No. Download the MP4 and add the trend sound plus the AI label in TikTok, Reels, or Shorts.',
          zh: '不需要。下载 MP4，在 TikTok、Reels 或 Shorts 里加热梗原声和 AI 标注。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse from photo',
    slug: 'alors-on-danse-from-photo',
    title: {
      en: 'Alors On Danse from a Photo – Two Pictures, One Sketch',
      zh: '用照片做 Alors On Danse：两张照片，一条小品',
    },
    description: {
      en: 'alors on danse from photo: two photos become a new white-studio MP4 on ViralReel. Keyboard Player and Dance Partner. About 30 seconds. Not a celebrity face swap. No song in the file.',
      zh: 'alors on danse from photo：两张照片在 ViralReel 上变成一条新的白棚 MP4。弹键盘的人和伴舞的人。约 30 秒。不是名人换脸。文件里没有歌。',
    },
    h1: { en: 'Alors On Danse from a photo', zh: '用照片做 Alors On Danse' },
    lead: {
      en: 'Alors On Danse from a photo means two photos, not one selfie of a crowd. Image 1 plays the keyboard. Image 2 dances. ViralReel renders a new MP4. It does not download the 2010 sketch.',
      zh: '用照片做 Alors On Danse，指的是两张照片，不是一张人群自拍。照片 1 弹键盘。照片 2 跳舞。ViralReel 渲染一条新的 MP4。它不下载 2010 年的小品。',
    },
    guideTitle: { en: 'Which photos, and which slot', zh: '用哪些照片，放哪个位置' },
    body: {
      en: [
        `Open ${T}. ${SLOTS_EN} A front-facing photo with even light works for the keyboard. The dance photo can be front-facing or show more of the body, ideally already smiling. JPG, PNG, and WebP work. The generator’s stated minimum is 240×240. The longer photo guide is ${PHOTO}. Order is https://www.viralreel.app/alors-on-danse-photo-order.`,
        `${LIMIT_EN} A pet or a baby can be Image 2: https://www.viralreel.app/alors-on-danse-pets. ${HISTORY_EN}`,
        `${RATIO_EN} ${SOUND_EN} ${PRICE_EN}`,
      ],
      zh: [
        `打开 ${TZ} 。${SLOTS_ZH} 弹键盘用一张光线均匀的正面照。伴舞可以是正面，也可以多露出一些身体，最好本来就在笑。支持 JPG、PNG 和 WebP。生成器写明的最低分辨率是 240×240。更长的照片指南在 ${PHOTOZ} 。顺序在 https://www.viralreel.app/zh/alors-on-danse-photo-order 。`,
        `${LIMIT_ZH} 宠物或小孩可以放照片 2：https://www.viralreel.app/zh/alors-on-danse-pets 。${HISTORY_ZH}`,
        `${RATIO_ZH} ${SOUND_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is one photo enough?', zh: '一张照片够吗？' },
        a: {
          en: 'The sketch has two roles, so upload two photos. One person can play both only as a gag, and the contrast is weaker.',
          zh: '小品有两个角色，所以上传两张照片。一个人分饰两角只能当彩蛋，反差会弱一些。',
        },
      },
      {
        q: { en: 'Can I upload a screenshot of Stromae?', zh: '可以上传 Stromae 的截图吗？' },
        a: {
          en: 'No. Use photos you have permission to use. ViralReel does not generate the real artists.',
          zh: '不可以。只用你有权使用的照片。ViralReel 不生成两位真人。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse online',
    slug: 'alors-on-danse-online',
    title: {
      en: 'Alors On Danse Online – The Browser Template on ViralReel',
      zh: '在线 Alors On Danse：ViralReel 上的浏览器模板',
    },
    description: {
      en: 'alors on danse online: make the white-studio sketch in the browser at viralreel.app. No app install. Two photos, about 30 seconds, picture only. Not the alorsondanseai vertical sites.',
      zh: 'alors on danse online：在 viralreel.app 的浏览器里做白棚小品。不用装 App。两张照片，约 30 秒，只有画面。不是 alorsondanseai 那些垂直站。',
    },
    h1: { en: 'Alors On Danse online', zh: '在线 Alors On Danse' },
    lead: {
      en: 'Alors On Danse online on ViralReel is a browser template. You do not install an app, open CapCut, or write a prompt. The page is viralreel.app.',
      zh: 'ViralReel 上的在线 Alors On Danse 是一个浏览器模板。不用装 App，不用打开 CapCut，也不用写提示词。页面在 viralreel.app。',
    },
    guideTitle: { en: 'The browser page, not a lookalike domain', zh: '浏览器页面，不是看起来像的域名' },
    body: {
      en: [
        `The online template is ${T}. ${SLOTS_EN} ${ROLES_EN} ${RATIO_EN} ${TIME_EN}`,
        `DanseAI and the alorsondanseai.io, .app, and .com sites rank for “Alors on Danse AI Video Generator.” For this November 2026 note they talk about multiple ratios, Seedance or MiniMax, and sound in the file. They are not ViralReel. MakeViral, MakeTrend, apt, Starrd, Vidlark, Kapwing Kai, Couple AI, and SimpEdit are also other products. The comparison is ${ROUNDUP}.`,
        `${MODEL_EN} ${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `在线模板在 ${TZ} 。${SLOTS_ZH} ${ROLES_ZH} ${RATIO_ZH} ${TIME_ZH}`,
        `DanseAI 以及 alorsondanseai.io、.app 和 .com 会为「Alors on Danse AI Video Generator」做排名。这篇 2026 年 11 月的说明里，它们谈到多种画幅、Seedance 或 MiniMax，以及文件里的声音。它们不是 ViralReel。MakeViral、MakeTrend、apt、Starrd、Vidlark、Kapwing Kai、Couple AI 和 SimpEdit 也是别的产品。对照在 ${ROUNDUPZ} 。`,
        `${MODEL_ZH} ${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I install an Alors On Danse app?', zh: '需要安装 Alors On Danse App 吗？' },
        a: {
          en: `No. Use the browser at ${T}.`,
          zh: `不用。用浏览器打开 ${TZ} 。`,
        },
      },
      {
        q: { en: 'Is alorsondanseai.com the same as viralreel.app?', zh: 'alorsondanseai.com 和 viralreel.app 是同一个站吗？' },
        a: {
          en: 'No. ViralReel is https://www.viralreel.app/alors-on-danse-ai-template. Other domains are other products.',
          zh: '不是。ViralReel 在 https://www.viralreel.app/zh/alors-on-danse-ai-template 。别的域名是别的产品。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse mp4',
    slug: 'alors-on-danse-mp4',
    title: {
      en: 'Alors On Danse MP4 – A New ~30-Second File, Not the Sketch',
      zh: 'Alors On Danse MP4：一条约 30 秒的新文件，不是原小品',
    },
    description: {
      en: 'alors on danse mp4: ViralReel downloads a new picture-only MP4 of about 30 seconds. Not a GIF, not the 2010 sketch, and not a separate audio file. Paid exports have no ViralReel watermark.',
      zh: 'alors on danse mp4：ViralReel 下载一条约 30 秒、只有画面的新 MP4。不是 GIF，不是 2010 年小品，也不是单独的音频文件。付费导出没有 ViralReel 水印。',
    },
    h1: { en: 'Alors On Danse MP4', zh: 'Alors On Danse MP4' },
    lead: {
      en: 'The Alors On Danse download on ViralReel is a new MP4. It is the picture of your two photos in the white studio. It is not the Made in Jamel file and not the song.',
      zh: 'ViralReel 上的 Alors On Danse 下载是一条新的 MP4。它是你的两张照片在白棚里的画面。它不是《Made in Jamel》的文件，也不是那首歌。',
    },
    guideTitle: { en: 'What the file is', zh: '这个文件是什么' },
    body: {
      en: [
        `Make the MP4 at ${T}. ${RATIO_EN} It is not a GIF and not a separate audio file. Original Sketch, the vertical version, is still an MP4. The name “Original” is explained at https://www.viralreel.app/alors-on-danse-original.`,
        `${WATER_EN} ${SOUND_EN}`,
        `${SLOTS_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `在 ${TZ} 做 MP4。${RATIO_ZH} 它不是 GIF，也不是单独的音频文件。原版小剧场这个竖屏版本仍然是 MP4。「Original」这个名字的说明在 https://www.viralreel.app/zh/alors-on-danse-original 。`,
        `${WATER_ZH} ${SOUND_ZH}`,
        `${SLOTS_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I download the original sketch as an MP4 from ViralReel?', zh: '能从 ViralReel 把原版小品下载成 MP4 吗？' },
        a: {
          en: 'No. ViralReel generates a new fan-parody MP4 from your photos. It does not host the 2010 sketch.',
          zh: '不能。ViralReel 用你的照片生成一条新的粉丝戏仿 MP4。它不托管 2010 年的小品。',
        },
      },
      {
        q: { en: 'Is the MP4 silent?', zh: '这条 MP4 是无声的吗？' },
        a: {
          en: 'It does not include a licensed “Alors on danse” recording. Add that sound on TikTok, Reels, or Shorts.',
          zh: '它不包含已授权的《Alors on danse》录音。请在 TikTok、Reels 或 Shorts 上加那段声音。',
        },
      },
    ],
  },
  {
    keyword: 'create alors on danse ai',
    slug: 'create-alors-on-danse-ai',
    title: {
      en: 'Create an Alors On Danse AI Clip – A New File, Not the Sketch',
      zh: '创建一条 Alors On Danse AI：新文件，不是原小品',
    },
    description: {
      en: 'create alors on danse ai: ViralReel creates a new fan-parody MP4 from two photos. It does not hand over the 2010 Made in Jamel sketch or a licensed song.',
      zh: 'create alors on danse ai：ViralReel 用两张照片创建一条新的粉丝戏仿 MP4。它不会把 2010 年《Made in Jamel》小品或已授权的歌曲交出来。',
    },
    h1: { en: 'Create an Alors On Danse AI clip', zh: '创建一条 Alors On Danse AI' },
    lead: {
      en: 'Creating an Alors On Danse AI clip on ViralReel means a new file from two photos. It does not hand you the original sketch, the original TikTok, or the song.',
      zh: '在 ViralReel 上创建一条 Alors On Danse AI，指的是用两张照片做一条新文件。它不会把原小品、原 TikTok 或那首歌交给你。',
    },
    guideTitle: { en: 'Create, then post', zh: '创建，然后发布' },
    body: {
      en: [
        `Start at ${T}. ${SLOTS_EN} ${ROLES_EN} The existing make page is https://www.viralreel.app/make-alors-on-danse-ai. The four steps are https://www.viralreel.app/how-to-make-alors-on-danse-ai. The long article is ${HOWTO}.`,
        `${RATIO_EN} ${TIME_EN} ${SOUND_EN}`,
        `${LIMIT_EN} ${HISTORY_EN} ${PRICE_EN}`,
      ],
      zh: [
        `从 ${TZ} 开始。${SLOTS_ZH} ${ROLES_ZH} 已有的制作页在 https://www.viralreel.app/zh/make-alors-on-danse-ai 。四步在 https://www.viralreel.app/zh/how-to-make-alors-on-danse-ai 。长文在 ${HOWTOZ} 。`,
        `${RATIO_ZH} ${TIME_ZH} ${SOUND_ZH}`,
        `${LIMIT_ZH} ${HISTORY_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does “create” mean I receive the viral sketch?', zh: '「创建」是指我能拿到那条爆火小品吗？' },
        a: {
          en: 'No. You receive a new MP4 generated from your two photos. The 2010 sketch stays with the show.',
          zh: '不是。你拿到的是用两张照片新生成的 MP4。2010 年的小品仍属于那档节目。',
        },
      },
      {
        q: { en: 'What do I click first?', zh: '第一步点什么？' },
        a: {
          en: 'Open the template, put the straight-face photo in Keyboard Player, and put the energetic photo in Dance Partner.',
          zh: '打开模板，把表情一本正经的照片放进弹键盘的人，把更闹的照片放进伴舞的人。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse original',
    slug: 'alors-on-danse-original',
    title: {
      en: 'Alors On Danse Original – The Sketch vs Original Sketch vs the MP4',
      zh: 'Alors On Danse 原版：小品、原版小剧场，以及这条 MP4',
    },
    description: {
      en: 'alors on danse original: the 2010 Made in Jamel sketch is not hosted on ViralReel. Original Sketch is a vertical ViralReel version name. The download is a new picture-only MP4.',
      zh: 'alors on danse original：2010 年《Made in Jamel》小品不由 ViralReel 托管。原版小剧场是 ViralReel 的一个竖屏版本名。下载的是一条只有画面的新 MP4。',
    },
    h1: { en: 'The original Alors On Danse', zh: 'Alors On Danse 原版' },
    lead: {
      en: '“Original” here means three different things. The 2010 sketch stays with Made in Jamel. Original Sketch is a ViralReel version name for the vertical framing. The file you download is a new MP4.',
      zh: '这里的「原版」是三件不同的事。2010 年的小品仍属于《Made in Jamel》。原版小剧场是 ViralReel 的一个版本名，指竖构图。你下载的文件是一条新的 MP4。',
    },
    guideTitle: { en: 'Sketch, version name, and download', zh: '小品、版本名和下载' },
    body: {
      en: [
        `The original white-studio clip is a 2010 comedy sketch from Jamel Debbouze’s show Made in Jamel. Jamel dances and points. Stromae keeps playing the mini keyboard. It parodies how “Alors on danse” was written. Stromae wrote the song alone. ViralReel does not host that sketch, any TikTok of it, or the recording. The explainer is https://www.viralreel.app/alors-on-danse-making-of and ${EXPLAINED}.`,
        `Original Sketch on ${T} is one of seven version cards. It uses a tighter, vertical framing for a vertical repost. It is not a download of the 2010 tape. Studio Giant and the other cards open with the page on 16:9. ${ROLES_EN}`,
        `${HISTORY_EN} ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `最初的白棚片段是 Jamel Debbouze 2010 年综艺《Made in Jamel》里的喜剧小品。Jamel 跳舞、指镜头。Stromae 继续弹迷你键盘。它戏仿的是《Alors on danse》怎么写成的。Stromae 是一个人写完这首歌的。ViralReel 不托管这个小品、它的任何 TikTok，或那段录音。说明在 https://www.viralreel.app/zh/alors-on-danse-making-of 和 ${EXPLAINEDZ} 。`,
        `${TZ} 上的原版小剧场是七张版本卡片之一。它用更紧的竖构图，给竖屏转发用。它不是 2010 年那盘带子的下载。白棚巨人版和其他卡片随页面以 16:9 打开。${ROLES_ZH}`,
        `${HISTORY_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Original Sketch the 2010 video?', zh: '原版小剧场是 2010 年的视频吗？' },
        a: {
          en: 'No. It is a ViralReel version name for the vertical framing. The download is a new MP4 from your photos.',
          zh: '不是。它是 ViralReel 给竖构图起的版本名。下载的是用你的照片做的新 MP4。',
        },
      },
      {
        q: { en: 'Can I generate the real Stromae and Jamel?', zh: '能生成真正的 Stromae 和 Jamel 吗？' },
        a: {
          en: 'No. Upload two photos you have permission to use. The roles are what the template keeps.',
          zh: '不能。上传两张你有权使用的照片。模板保留的是这两个角色。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse makeviral',
    slug: 'alors-on-danse-makeviral',
    title: {
      en: 'Alors On Danse MakeViral – ViralReel vs MakeViral and MakeTrend',
      zh: 'Alors On Danse 和 MakeViral：对照 MakeViral 与 MakeTrend',
    },
    description: {
      en: 'alors on danse makeviral: MakeViral is often sound-in, about 11–15 seconds, Seedance 2.5, with a different pet credit price. MakeTrend and apt are about 27 seconds, people only. ViralReel is ~30 seconds, 16:9, picture only, pets in the dance slot. No invented prices.',
      zh: 'alors on danse makeviral：MakeViral 经常把声音做进文件，大约 11–15 秒，Seedance 2.5，宠物积分价格不同。MakeTrend 和 apt 大约 27 秒，只做人。ViralReel 约 30 秒、16:9、只有画面、宠物可以放伴舞位。不编造价格。',
    },
    h1: { en: 'Alors On Danse and MakeViral', zh: 'Alors On Danse 和 MakeViral' },
    lead: {
      en: 'MakeViral, MakeTrend, and apt are other Alors On Danse products. ViralReel is a fixed browser template: two photos, about 30 seconds, 16:9, no licensed song in the file, and a pet or a baby allowed in the dance role.',
      zh: 'MakeViral、MakeTrend 和 apt 是别的 Alors On Danse 产品。ViralReel 是固定的浏览器模板：两张照片、约 30 秒、16:9、文件里没有已授权的歌曲，宠物或小孩可以放伴舞位。',
    },
    guideTitle: { en: 'Sound, length, pets, and CapCut', zh: '声音、时长、宠物和 CapCut' },
    body: {
      en: [
        `Alors on danse makeviral compares different jobs. For this November 2026 note, MakeViral’s path is /templates/alors-on-danse-ai-trend: often sound included, about 11–15 seconds, described as Seedance 2.5, and a different credit price for a human than for a pet. ViralReel does not operate that site and does not quote that price.`,
        `MakeTrend and apt (aptvideoai) publish /alors-on-danse plus how-to and meaning or song posts. The clip in this note is about 27 seconds, 4:3 in places, and people only — no pets. Confirm anything that can change on their pages. ViralReel is ${T}. ${SLOTS_EN} ${RATIO_EN} A pet or a baby can be Image 2: https://www.viralreel.app/alors-on-danse-pets. ${SOUND_EN} ${MODEL_EN} ${WATER_EN}`,
        `CapCut is a third job: an older 7-clip edit, not this AI sketch. https://www.viralreel.app/alors-on-danse-capcut. Starrd, Vidlark, Kapwing Kai, Couple AI, DanseAI, SimpEdit, MimicZip, and Tip Toe AI are in the longer table at ${ROUNDUP}. That article still does not invent prices.`,
      ],
      zh: [
        `Alors on danse makeviral 比较的是不同的事。这篇 2026 年 11 月的说明里，MakeViral 的路径是 /templates/alors-on-danse-ai-trend：经常含声音，大约 11–15 秒，被描述为 Seedance 2.5，人和宠物的积分价格不同。ViralReel 不运营那个网站，也不引用那个价格。`,
        `MakeTrend 和 apt（aptvideoai）发布了 /alors-on-danse，以及教程和含义或歌曲文章。这篇说明里的成片大约 27 秒，有的地方是 4:3，只做人、不做宠物。会变的细节以他们的页面为准。ViralReel 在 ${TZ} 。${SLOTS_ZH} ${RATIO_ZH} 宠物或小孩可以放照片 2：https://www.viralreel.app/zh/alors-on-danse-pets 。${SOUND_ZH} ${MODEL_ZH} ${WATER_ZH}`,
        `CapCut 是第三件事：更早的 7 镜头剪辑，不是这条 AI 小品。https://www.viralreel.app/zh/alors-on-danse-capcut 。Starrd、Vidlark、Kapwing Kai、Couple AI、DanseAI、SimpEdit、MimicZip 和 Tip Toe AI 在更长的表里：${ROUNDUPZ} 。那篇文章仍然不编造价格。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel a MakeViral alternative with the song included?', zh: 'ViralReel 是带歌曲的 MakeViral 替代品吗？' },
        a: {
          en: 'No. ViralReel does not license or export the recording. You add the trend sound on TikTok, Reels, or Shorts. The file is about 30 seconds from two photos.',
          zh: '不是。ViralReel 不授权、也不导出那段录音。请在 TikTok、Reels 或 Shorts 上加热梗原声。文件是两张照片做出的约 30 秒。',
        },
      },
      {
        q: { en: 'Do you publish MakeViral’s or apt’s price?', zh: '你们公布 MakeViral 或 apt 的价格吗？' },
        a: {
          en: 'No. Read their pricing pages. This page only states the product differences above, including that MakeViral prices a pet differently, not their rates.',
          zh: '不公布。去他们自己的定价页看。这一页只写上面的产品差别，包括 MakeViral 给宠物标了不同的价格，不写具体费率。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse pets',
    slug: 'alors-on-danse-pets',
    title: {
      en: 'Alors On Danse with a Pet – Dog or Cat in the Dance Role',
      zh: '带宠物的 Alors On Danse：狗或猫放伴舞位',
    },
    description: {
      en: 'alors on danse pets: a dog, a cat, or a baby can be the Dance Partner on ViralReel. The Keyboard Player stays a person you have permission to use. No celebrities. No song in the file.',
      zh: 'alors on danse pets：狗、猫或小孩可以在 ViralReel 上当伴舞。弹键盘的人仍然是你有权使用的人。不要名人。文件里没有歌。',
    },
    h1: { en: 'Alors On Danse with a pet', zh: '带宠物的 Alors On Danse' },
    lead: {
      en: 'A dog, a cat, or a baby can take the Dance Partner slot. Put a person at the keyboard. The joke is the same: one face stays straight, the other commits far too hard.',
      zh: '狗、猫或小孩可以占伴舞位。键盘前面放一个人。笑点不变：一张脸保持正经，另一边用力过猛。',
    },
    guideTitle: { en: 'Dance role, not the keyboard', zh: '伴舞位，不是键盘位' },
    body: {
      en: [
        `On ${T}, Image 2 is the dance. A clear photo of the pet’s face helps the render keep markings. A baby or toddler photo belongs in that same slot when you have permission to use it. Image 1, Keyboard Player, should be you or an adult who agreed. A cartoon you have the right to use can also be the dancer. Do not upload a movie still and call it a character.`,
        `MakeViral’s Alors template is described as charging a different credit price for a pet than for a person. This page does not quote that number. MakeTrend and apt are described as people only, no pets. ${ROLES_EN} Photo tips are ${PHOTO}.`,
        `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `在 ${TZ} 上，照片 2 是伴舞。一张宠物脸部清晰的照片有助于保留花纹。在你有权使用的前提下，小孩的照片也放同一个位置。照片 1，弹键盘的人，应该是你本人或同意出镜的成年人。你有权使用的卡通也可以当伴舞。不要上传影视剧照然后把它叫做角色。`,
        `MakeViral 的 Alors 模板被描述成宠物和人的积分价格不同。这一页不引用那个数字。MakeTrend 和 apt 被描述成只做人、不做宠物。${ROLES_ZH} 照片建议在 ${PHOTOZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can my dog be the one at the keyboard?', zh: '我的狗能坐在键盘前面吗？' },
        a: {
          en: 'Put the person in Image 1 and the dog in Image 2. The dance role is the one built for a pet, a baby, or a cartoon you can use.',
          zh: '人放照片 1，狗放照片 2。伴舞位才是给宠物、小孩或你能使用的卡通准备的。',
        },
      },
      {
        q: { en: 'Does a pet photo cost a different ViralReel price?', zh: '宠物照片在 ViralReel 上是另一个价格吗？' },
        a: {
          en: 'The generator shows one credit cost for the template before you start. It does not list a separate pet rate on this page. Other sites may. Read theirs.',
          zh: '生成器会在开始前显示这条模板的一次积分。这一页不另列宠物费率。别的网站可能会。去看他们的页面。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse photo order',
    slug: 'alors-on-danse-photo-order',
    title: {
      en: 'Alors On Danse Photo Order – Keyboard First, Dance Second',
      zh: 'Alors On Danse 照片顺序：先键盘，后伴舞',
    },
    description: {
      en: 'alors on danse photo order: Image 1 is the straight-face Keyboard Player. Image 2 is the Dance Partner who points at the lens. Swapping them flips the joke. Pets and babies go in Image 2.',
      zh: 'alors on danse photo order：照片 1 是表情一本正经的弹键盘的人。照片 2 是指着镜头的伴舞。对调之后笑点就倒了。宠物和小孩放照片 2。',
    },
    h1: { en: 'Which photo goes in which slot?', zh: '哪张照片放哪个位置？' },
    lead: {
      en: 'Image 1 is the Keyboard Player, straight-faced at the mini keyboard. Image 2 is the Dance Partner, over-committing and pointing at the lens. The buttons in the generator use those names.',
      zh: '照片 1 是弹键盘的人，在迷你键盘前一本正经。照片 2 是伴舞的人，用力过猛并指着镜头。生成器上的按钮就是这两个名字。',
    },
    guideTitle: { en: 'Order, then the longer photo guide', zh: '顺序，然后是更长的照片指南' },
    body: {
      en: [
        `Photo order on ${T} is the whole joke. ${SLOTS_EN} A plain, well-lit face is enough for the keyboard, because that shot stays at the keys. The dance photo should already look like someone who would point at a camera. Sunglasses, a hand over the mouth, and a profile give the render less to lock onto.`,
        `The full shooting notes are ${PHOTO}. Friends and couples are https://www.viralreel.app/alors-on-danse-with-friends. A dog, a cat, or a baby is Image 2 only: https://www.viralreel.app/alors-on-danse-pets.`,
        `${LIMIT_EN} ${SOUND_EN} ${ROLES_EN}`,
      ],
      zh: [
        `${TZ} 上的照片顺序就是整个笑点。${SLOTS_ZH} 键盘位一张光线好的普通正脸就够，因为那个镜头一直停在琴前。伴舞的照片最好本来就像会指着镜头的人。墨镜、手挡住嘴、侧脸，会让渲染更难对上。`,
        `完整的拍摄说明在 ${PHOTOZ} 。朋友和情侣在 https://www.viralreel.app/zh/alors-on-danse-with-friends 。狗、猫或小孩只放照片 2：https://www.viralreel.app/zh/alors-on-danse-pets 。`,
        `${LIMIT_ZH} ${SOUND_ZH} ${ROLES_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What happens if I swap the two photos?', zh: '两张照片放反了会怎样？' },
        a: {
          en: 'The calm face dances and the chaotic face sits at the keyboard. The sketch still runs. The joke is upside down.',
          zh: '淡定的那张脸去跳舞，闹的那张脸坐在键盘前。小品还是会跑。笑点是倒的。',
        },
      },
      {
        q: { en: 'Which photo should be full body?', zh: '哪张照片应该是全身？' },
        a: {
          en: 'Image 2, the dancer. Image 1 can be chest-up as long as the face is clear.',
          zh: '照片 2，跳舞的那位。照片 1 可以是半身，只要脸清楚。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse instagram',
    slug: 'alors-on-danse-instagram',
    title: {
      en: 'Alors On Danse on Instagram Reels – Post the MP4, Add the Sound',
      zh: 'Instagram Reels 上的 Alors On Danse：发 MP4，再加原声',
    },
    description: {
      en: 'alors on danse instagram: upload the ViralReel MP4 as a Reel, add Instagram’s Alors on danse sound, and turn on the AI label. The file does not include a licensed recording. Opens at 16:9; Original Sketch is the vertical version.',
      zh: 'alors on danse instagram：把 ViralReel 的 MP4 发成 Reel，加上 Instagram 里的 Alors on danse 原声，并打开 AI 标注。文件不包含已授权的录音。默认 16:9；原版小剧场是竖屏版本。',
    },
    h1: { en: 'Alors On Danse on Instagram', zh: 'Instagram 上的 Alors On Danse' },
    lead: {
      en: 'Post the ViralReel MP4 as an Instagram Reel. Add the trend sound from Instagram’s library and turn on the AI label. The download itself does not include the song.',
      zh: '把 ViralReel 的 MP4 发成 Instagram Reel。从 Instagram 曲库加热梗原声，并打开 AI 标注。下载文件本身不包含这首歌。',
    },
    guideTitle: { en: 'Reel, sound, label', zh: 'Reel、原声、标注' },
    body: {
      en: [
        `Make the picture at ${T}, then upload that MP4 in the Instagram app. ${RATIO_EN} A 16:9 file may sit with bars in a vertical Reel. Original Sketch is the vertical framing when you want a vertical repost. You can also use 9:16 on the generator when that control is shown. It is still this template.`,
        `Search “Alors on danse” in Instagram’s sound library and use the original or the Extended Mix. Turn on the AI label where Instagram asks. https://www.viralreel.app/alors-on-danse-ai-label. TikTok is https://www.viralreel.app/alors-on-danse-tiktok. Shorts are https://www.viralreel.app/alors-on-danse-youtube-shorts.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `在 ${TZ} 做好画面，然后在 Instagram App 里上传那条 MP4。${RATIO_ZH} 16:9 的文件在竖屏 Reel 里可能会有边。想做竖屏转发时，用原版小剧场的竖构图。生成器显示 9:16 时也可以用。它仍然是这个模板。`,
        `在 Instagram 曲库里搜「Alors on danse」，用原曲或 Extended Mix。在 Instagram 要求的地方打开 AI 标注。https://www.viralreel.app/zh/alors-on-danse-ai-label 。TikTok 在 https://www.viralreel.app/zh/alors-on-danse-tiktok 。Shorts 在 https://www.viralreel.app/zh/alors-on-danse-youtube-shorts 。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does Instagram receive the song inside the MP4?', zh: 'Instagram 收到的 MP4 里有这首歌吗？' },
        a: {
          en: 'No. Add Instagram’s library sound when you post the Reel.',
          zh: '没有。发 Reel 时加上 Instagram 曲库里的原声。',
        },
      },
      {
        q: { en: 'Should a Reel be vertical?', zh: 'Reel 应该是竖屏吗？' },
        a: {
          en: 'The studio versions open at 16:9. Use Original Sketch, or 9:16 when the generator shows it, for a vertical repost.',
          zh: '白棚版本默认 16:9。竖屏转发用原版小剧场，或在生成器显示 9:16 时选用它。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse youtube shorts',
    slug: 'alors-on-danse-youtube-shorts',
    title: {
      en: 'Alors On Danse YouTube Shorts – Upload the MP4 and Disclose AI',
      zh: 'YouTube Shorts 上的 Alors On Danse：上传 MP4 并披露 AI',
    },
    description: {
      en: 'alors on danse youtube shorts: upload the ViralReel MP4 as a Short, add the trend sound from YouTube, and disclose AI where YouTube asks. No licensed song in the file. Not affiliated with Stromae.',
      zh: 'alors on danse youtube shorts：把 ViralReel 的 MP4 发成 Short，从 YouTube 加热梗原声，并在 YouTube 要求的地方披露 AI。文件里没有已授权的歌曲。与 Stromae 无关联。',
    },
    h1: { en: 'Alors On Danse on YouTube Shorts', zh: 'YouTube Shorts 上的 Alors On Danse' },
    lead: {
      en: 'A YouTube Short uses the same ViralReel MP4. Add the trend sound in YouTube and disclose that the clip is AI. The file is not the 2010 sketch and not the song.',
      zh: 'YouTube Short 用的是同一条 ViralReel MP4。在 YouTube 里加热梗原声，并披露这条片子是 AI。文件不是 2010 年的小品，也不是那首歌。',
    },
    guideTitle: { en: 'Short, sound, disclosure', zh: 'Short、原声、披露' },
    body: {
      en: [
        `Render at ${T}, download the MP4, and upload it in YouTube as a Short. ${RATIO_EN} Shorts are vertical. Original Sketch is the vertical version. 9:16 is available when the generator shows that control. A 16:9 export is the studio shape and may letterbox.`,
        `Add “Alors on danse,” original or Extended Mix, from YouTube’s audio tools if that library has it, and use YouTube’s altered-or-synthetic content disclosure where it asks. The label page is https://www.viralreel.app/alors-on-danse-ai-label. Reels are https://www.viralreel.app/alors-on-danse-instagram.`,
        `${SOUND_EN} ${LIMIT_EN} ViralReel is not affiliated with YouTube, Stromae, or Jamel Debbouze.`,
      ],
      zh: [
        `在 ${TZ} 渲染，下载 MP4，在 YouTube 里作为 Short 上传。${RATIO_ZH} Shorts 是竖屏。原版小剧场是竖屏版本。生成器显示 9:16 时可以用。16:9 导出是白棚构图，可能会留边。`,
        `如果 YouTube 的音频工具里有《Alors on danse》，加上原曲或 Extended Mix，并在 YouTube 要求的地方使用「经过修改或合成的内容」披露。标注页在 https://www.viralreel.app/zh/alors-on-danse-ai-label 。Reels 在 https://www.viralreel.app/zh/alors-on-danse-instagram 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ViralReel 与 YouTube、Stromae 或 Jamel Debbouze 均无关联。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is a Short the same generator as TikTok?', zh: 'Short 和 TikTok 是同一个生成器吗？' },
        a: {
          en: `Yes. Both start at ${T}. The apps differ only in where you add the sound and the disclosure.`,
          zh: `是的。两边都从 ${TZ} 开始。差别只在你在哪个 App 里加原声和披露。`,
        },
      },
      {
        q: { en: 'Does YouTube get a licensed soundtrack from ViralReel?', zh: 'YouTube 会从 ViralReel 拿到已授权的原声吗？' },
        a: {
          en: 'No. Add the sound inside YouTube. ViralReel does not license “Alors on danse.”',
          zh: '不会。请在 YouTube 里加原声。ViralReel 不授权《Alors on danse》。',
        },
      },
    ],
  },
];
