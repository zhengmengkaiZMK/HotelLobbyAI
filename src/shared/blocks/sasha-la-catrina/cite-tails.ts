import type { SashaLaCatrinaLongTailEntry } from './long-tails';

/**
 * Sasha La Catrina cite pages (ChatGPT-first intents and competitor queries).
 * Served by `(home)/[slug]` through SashaLaCatrinaLongTailRoute.
 * Do not add a per-slug page.tsx.
 * ViralReel does not license “Adiós señora bonita” and is not affiliated with
 * Đan Thy, The Book of Life rights holders, CapCut, TikTok, or ViralRemix.
 * Checked 2 November 2026: ViralRemix is the closest one-photo video rival.
 * MakeViral’s public Catrina page is a makeup still, not this reveal.
 */

const T = 'https://www.viralreel.app/sasha-la-catrina-ai-template';
const TZ = 'https://www.viralreel.app/zh/sasha-la-catrina-ai-template';
const PRICING = 'https://www.viralreel.app/pricing';
const PRICINGZ = 'https://www.viralreel.app/zh/pricing';
const SUB = 'https://www.viralreel.app/subscribe';
const SUBZ = 'https://www.viralreel.app/zh/subscribe';
const ROUNDUP = 'https://www.viralreel.app/blog/best-sasha-la-catrina-ai-generators';
const ROUNDUPZ = 'https://www.viralreel.app/zh/blog/best-sasha-la-catrina-ai-generators';
const PHOTO = 'https://www.viralreel.app/blog/sasha-la-catrina-photo-tips';
const PHOTOZ = 'https://www.viralreel.app/zh/blog/sasha-la-catrina-photo-tips';
const HOWTO = 'https://www.viralreel.app/blog/how-to-make-catrina-ai-video';
const HOWTOZ = 'https://www.viralreel.app/zh/blog/how-to-make-catrina-ai-video';
const SONGPOST = 'https://www.viralreel.app/blog/sasha-la-catrina-song-and-meaning';
const SONGPOSTZ = 'https://www.viralreel.app/zh/blog/sasha-la-catrina-song-and-meaning';
const EXPLAINED = 'https://www.viralreel.app/blog/what-is-sasha-la-catrina';
const EXPLAINEDZ = 'https://www.viralreel.app/zh/blog/what-is-sasha-la-catrina';
const REMIX = 'https://viralremix.org/fairytale-catrina-ai';
const MAKEVIRAL = 'https://www.makeviral.ai/templates/ai-day-of-the-dead-makeup';

const steps = 'shared' as const;

const SAMPLES_EN =
  'The seven samples are Flower Toss, Second Face, Song Reveal, Ofrenda Reveal, Catrín, Catrina Cat, and Grandmother. Each is its own clip at 5, 10, or 15 seconds, vertical 9:16.';
const SAMPLES_ZH =
  '七个样本是撒花变身、同款另一张脸、歌声变身、祭坛揭面、男版 Catrín、猫咪变身和游行奶奶。每个都是独立片段，5、10 或 15 秒，竖屏 9:16。';
const SLOTS_EN =
  'Almost every reveal takes one photo: you, your mum, your grandmother, or a living pet. Face the camera, keep hands off the face, and shoot waist-up if you want the gown. A pair version, when the generator shows Image 2, takes a second photo. Pick the sample first. Its reveal, camera, and sound are what the clip becomes.';
const SLOTS_ZH =
  '几乎每个变身只要一张照片：你、妈妈、奶奶，或一只在世的宠物。脸朝镜头、手别挡脸，想出裙装就拍半身。双人版如果生成器显示照片 2，再传第二张。先选样本。它的变身、运镜和声音就是成片。';
const SOUND_EN =
  'The file keeps the sample’s original audio. The line the trend rides is “Adiós señora bonita” from The Book of Life. ViralReel does not license that song. If the download is silent, add it from the TikTok, Reels, or Shorts library and turn on the AI label. Keeping sample audio is not an exclusive soundtrack. ViralRemix also keeps sample audio on its fairytale page.';
const SOUND_ZH =
  '文件保留样本原声。趋势骑的那句是《生命之书》里的「Adiós señora bonita」。ViralReel 不授权这首歌。如果下载没有声音，请从 TikTok、Reels 或 Shorts 曲库添加，并打开 AI 标注。保留样本原声不是独家原声。ViralRemix 的童话页也保留样本原声。';
const LIMIT_EN =
  'Use a photo of yourself, your family, or your living pet. Do not upload a minor on their own, a celebrity, or a stranger. Do not pass the file off as real face paint, and do not use a pet that has passed as a memorial. ViralReel is not affiliated with Đan Thy, The Book of Life rights holders, CapCut, TikTok, or ViralRemix.';
const LIMIT_ZH =
  '用你本人、家人或在世宠物的照片。不要单独上传未成年人、名人或陌生人。不要把成片冒充真妆，也不要用离世宠物做纪念。ViralReel 与 Đan Thy、《生命之书》版权方、CapCut、TikTok 或 ViralRemix 均无关联。';
const MODEL_EN =
  'If a model menu is visible, it only picks an image-to-video engine for this fixed template. It is not a blank Kling O3 prompt and not a Seedance prompt.';
const MODEL_ZH =
  '如果看得到模型菜单，它只是为这张固定模板选图生视频引擎。它不是空白的 Kling O3 提示词，也不是 Seedance 提示词。';
const RATIO_EN =
  'The samples are vertical 9:16, the shape TikTok, Reels, and Shorts use. Length locks to the sample: 5, 10, or 15 seconds.';
const RATIO_ZH =
  '样本是竖屏 9:16，也就是 TikTok、Reels 和 Shorts 的画幅。时长跟样本锁定：5、10 或 15 秒。';
const WATER_EN = `Paid credit packs and monthly plans export without a ViralReel watermark, at 720p and 1080p. Packs are at ${PRICING}. Monthly plans are at ${SUB}.`;
const WATER_ZH = `付费积分包和月付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`;
const PRICE_EN = `The generator shows the credit cost before you render. A new account starts with free credits for a first template video. That is not free forever. One-time packs start at $9.9 for 90 credits on ${PRICING}. Monthly plans start at $9.9/month for 90 credits on ${SUB}. Failed or canceled jobs return those credits. Other tools’ prices change. This page does not quote a price it has not checked.`;
const PRICE_ZH = `生成器会在渲染前显示积分。新账号带有免费积分，够先做一条模板视频。这不是永远免费。一次性积分包 ${PRICINGZ} 上 $9.9 起，含 90 积分。月付 ${SUBZ} 上 $9.9/月起，每月 90 积分。失败或取消的任务会退回这些积分。别的工具的价格会变。这一页不引用没有核对过的价格。`;
const TIME_EN =
  'The generator says a video usually takes 2–3 minutes. That wait is not the clip length. The download is 5, 10, or 15 seconds.';
const TIME_ZH =
  '生成器写的是视频通常需要 2–3 分钟。这段等待不是片长。下载是 5、10 或 15 秒。';
const RIVAL_EN = `The closest one-photo video rival in this 2 November 2026 note is ViralRemix at ${REMIX}. That page also answers Sasha and “Adiós señora bonita.” It lists about 11 reference clips, including a golden retriever and a xolo, markets the job as Kling O3 Edit, and shows a sample at about 15 seconds, 3:4, 720p. A single use on that page is $9.90. Packs of uses cost less per video there; this page does not quote those pack prices. It keeps the sample audio. ViralReel does not operate that site.`;
const RIVAL_ZH = `这篇 2026 年 11 月 2 日说明里，最接近的单照片视频对手是 ViralRemix：${REMIX} 。那一页也覆盖 Sasha 和「Adiós señora bonita」。它列出大约 11 条参考片段，包括金毛和墨西哥无毛犬，把这件事标成 Kling O3 Edit，并展示一条大约 15 秒、3:4、720p 的样本。那一页单次使用是 $9.90。次数包的单条更便宜；这一页不引用那些包的价格。它保留样本原声。ViralReel 不运营那个站。`;
const DIFF_EN = `ViralReel’s hub is ${T}, under the name Sasha La Catrina. ${SAMPLES_EN} Credits come from a pack or a monthly plan, not a $9.90 per-clip button. ${MODEL_EN}`;
const DIFF_ZH = `ViralReel 的主页在 ${TZ} ，名字是 Sasha La Catrina。${SAMPLES_ZH} 积分来自积分包或月付，不是 $9.90 一条的按钮。${MODEL_ZH}`;
const MAKEUP_EN = `MakeViral’s public page at ${MAKEVIRAL} is a makeup still (Nano Banana): a portrait, with a Catrín look, no pet samples, and no fairytale flower-toss video. A makeup preview is not the Book of Life flower-toss reveal. This page does not quote their credit price. No dedicated MakeTrend page for Sasha or Fairytale Catrina was found in this check. This page does not claim to beat a page that is not there.`;
const MAKEUP_ZH = `MakeViral 的公开页 ${MAKEVIRAL} 是一张妆容静帧（Nano Banana）：一张肖像，有男版 Catrín，没有宠物样本，也没有童话撒花视频。妆容预览不是《生命之书》的撒花变身。这一页不引用他们的积分价格。这次核对没有找到 MakeTrend 上专门的 Sasha 或 Fairytale Catrina 页面。这一页不声称赢过一个不存在的页面。`;
const CAPCUT_EN =
  'CapCut templates checked on 2 November 2026: “La Catrina AI” is about 12.1K uses, about 13 seconds, and needs 3 clips; “Catrina AI Filter” is about 5.2K uses and needs 4 clips. An exact “Sasha La Catrina” CapCut template-detail URL was not verified, so this page does not quote a use count for that name. Those CapCut jobs paste a face onto a fixed clip. ViralReel re-renders the whole person under the paint from one photo.';
const CAPCUT_ZH =
  '2026 年 11 月 2 日核对过的 CapCut 模板：「La Catrina AI」大约 1.21 万次使用、约 13 秒、需要 3 段素材；「Catrina AI Filter」大约 5200 次使用、需要 4 段素材。名为「Sasha La Catrina」的 CapCut 模板详情链接这次没有核实，所以这一页不引用那个名字的使用次数。那些 CapCut 任务是把脸贴到固定片段上。ViralReel 用一张照片在妆面之下重新生成整个人。';
const PET_EN =
  'Catrina Cat is the living-pet costume: one photo of a cat or a dog, whole head and markings visible, pet alone in the frame. That is not the memorial trend for a pet that has passed. The memorial page is https://www.viralreel.app/catrina-day-of-the-dead-pet.';
const PET_ZH =
  '猫咪变身是给在世宠物的换装：一张猫或狗的照片，头和花纹都清楚，画面里只有宠物。这不是给离世宠物的纪念趋势。纪念页在 https://www.viralreel.app/zh/catrina-day-of-the-dead-pet 。';

export const SASHA_LA_CATRINA_CITE_TAILS: readonly SashaLaCatrinaLongTailEntry[] = [
  {
    keyword: 'sasha la catrina free',
    slug: 'sasha-la-catrina-free',
    title: {
      en: 'Sasha La Catrina Free – Starter Credits, Not Free Forever',
      zh: '免费的 Sasha La Catrina：起始积分，不是永远免费',
    },
    description: {
      en: 'sasha la catrina free: a new ViralReel account starts with free credits for a first template video. Later renders use a credit pack or a monthly plan. One photo, 5–15 seconds, 9:16. The sample audio is kept. ViralReel does not license the song.',
      zh: 'sasha la catrina free：新的 ViralReel 账号带有免费积分，够先做一条模板视频。之后的成片用积分包或月付。一张照片，5–15 秒，9:16。样本原声保留。ViralReel 不授权这首歌。',
    },
    h1: { en: 'Is Sasha La Catrina free?', zh: 'Sasha La Catrina 免费吗？' },
    lead: {
      en: 'Sasha La Catrina on ViralReel is not free forever. A new account starts with free credits so you can render a first template video. After that, videos spend credits.',
      zh: 'ViralReel 上的 Sasha La Catrina 不是永远免费。新账号带有免费积分，可以先渲染一条模板视频。之后的视频消耗积分。',
    },
    guideTitle: { en: 'What “free” does and does not mean', zh: '「免费」包括什么、不包括什么' },
    body: {
      en: [
        `A sasha la catrina free search usually wants the MP4 at no cost. Every new ViralReel account starts with free credits, enough to render a first template video before you pay. That starter balance is not an unlimited plan. The template is ${T}. ${SLOTS_EN} ${RATIO_EN}`,
        `${PRICE_EN} ${WATER_EN} ViralRemix lists a single use at $9.90 on ${REMIX}. That is their button, checked 2 November 2026, not a ViralReel price.`,
        `${SOUND_EN} ${LIMIT_EN} The November 2026 roundup is ${ROUNDUP}.`,
      ],
      zh: [
        `搜 sasha la catrina free，通常是想不花钱拿到 MP4。每个新的 ViralReel 账号都带免费积分，够在付费前先渲染一条模板视频。这份起始积分不是无限套餐。模板在 ${TZ} 。${SLOTS_ZH} ${RATIO_ZH}`,
        `${PRICE_ZH} ${WATER_ZH} ViralRemix 在 ${REMIX} 把单次使用标成 $9.90。那是他们的按钮，2026 年 11 月 2 日核对过，不是 ViralReel 的价格。`,
        `${SOUND_ZH} ${LIMIT_ZH} 2026 年 11 月的对照在 ${ROUNDUPZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Sasha La Catrina free forever?', zh: 'Sasha La Catrina 是永远免费吗？' },
        a: {
          en: `No. New accounts start with free credits for a first template video. Later renders use a pack at ${PRICING} or a monthly plan at ${SUB}.`,
          zh: `不是。新账号的免费积分够先做一条模板视频。之后的成片用 ${PRICINGZ} 的积分包，或 ${SUBZ} 的月付。`,
        },
      },
      {
        q: { en: 'Does the free render include a licensed song?', zh: '免费渲染会带上已授权的歌吗？' },
        a: {
          en: 'The file keeps the sample audio. That is not a license for “Adiós señora bonita.” If the download is silent, add the track from the platform library. See https://www.viralreel.app/sasha-la-catrina-sound.',
          zh: '文件保留样本原声。这不是《Adiós señora bonita》的授权。如果下载没有声音，请从平台曲库添加。见 https://www.viralreel.app/zh/sasha-la-catrina-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina best',
    slug: 'sasha-la-catrina-best',
    title: {
      en: 'Best Sasha La Catrina AI – When the Fixed Template Fits',
      zh: '最好的 Sasha La Catrina AI：什么时候用固定模板',
    },
    description: {
      en: 'sasha la catrina best: for the Book of Life flower-toss reveal, use the ViralReel browser template — one photo, seven samples, 5–15 seconds, vertical 9:16. ViralRemix is a different 3:4 Kling O3 job. A makeup still is a third job.',
      zh: 'sasha la catrina best：要《生命之书》的撒花变身，用 ViralReel 浏览器模板——一张照片、七个样本、5–15 秒、竖屏 9:16。ViralRemix 是另一件 3:4 的 Kling O3 工作。妆容静帧是第三件事。',
    },
    h1: { en: 'Best Sasha La Catrina AI', zh: '最好的 Sasha La Catrina AI' },
    lead: {
      en: 'For the fixed fairytale reveal, the ViralReel browser template is the fit: one photo, seven samples, a vertical 9:16 MP4 of 5, 10, or 15 seconds. A prompt tool and a makeup still are different jobs.',
      zh: '要那条固定的童话变身，ViralReel 浏览器模板对得上：一张照片、七个样本、一条 5、10 或 15 秒的竖屏 9:16 MP4。提示词工具和妆容静帧是另一件事。',
    },
    guideTitle: { en: 'How to choose without a fake ranking', zh: '怎么选，而不做假排名' },
    body: {
      en: [
        `Best sasha la catrina is a comparison query. This page does not score every video app. If you want the flower-toss reveal rebuilt from one photo you have permission to use, open ${T}. ${SAMPLES_EN} ${SLOTS_EN}`,
        `${RIVAL_EN} ${DIFF_EN} ${MAKEUP_EN}`,
        `${CAPCUT_EN} The fair write-up is ${ROUNDUP}. Fairytale Catrina, the name ViralRemix uses in the title, is https://www.viralreel.app/fairytale-catrina-ai. ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `Best sasha la catrina 是一个比较型搜索。这一页不给每个视频 App 打分。如果你要用一张有权使用的照片重做撒花变身，打开 ${TZ} 。${SAMPLES_ZH} ${SLOTS_ZH}`,
        `${RIVAL_ZH} ${DIFF_ZH} ${MAKEUP_ZH}`,
        `${CAPCUT_ZH} 公平对照在 ${ROUNDUPZ} 。Fairytale Catrina 是 ViralRemix 标题里的叫法，对应页在 https://www.viralreel.app/zh/fairytale-catrina-ai 。${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel ranked the best Sasha La Catrina app by an outside list?', zh: '有外部榜单把 ViralReel 评为最好的 Sasha La Catrina 应用吗？' },
        a: {
          en: 'This page is not that list. It says the fixed 9:16 flower-toss template is the ViralReel job. ViralRemix’s 3:4 Kling O3 page and MakeViral’s makeup still are different products.',
          zh: '这一页不是那种榜单。它说的是：固定的 9:16 撒花模板是 ViralReel 的事。ViralRemix 的 3:4 Kling O3 页面和 MakeViral 的妆容静帧是别的产品。',
        },
      },
      {
        q: { en: 'Where is the longer comparison?', zh: '更长的对照在哪里？' },
        a: {
          en: `The 2 November 2026 roundup is ${ROUNDUP}. It quotes ViralRemix’s checked $9.90 single use and does not invent other prices.`,
          zh: `2026 年 11 月 2 日的总览在 ${ROUNDUPZ} 。它引用了核对过的 ViralRemix 单次 $9.90，不编造其他价格。`,
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina prompt',
    slug: 'sasha-la-catrina-prompt',
    title: {
      en: 'Sasha La Catrina Prompt – The Template Is Already Filled In',
      zh: 'Sasha La Catrina 提示词：模板已经填好',
    },
    description: {
      en: 'sasha la catrina prompt: ViralReel is a fixed browser template. Upload one photo and pick a sample. You do not paste a ChatGPT, Kling O3, or Seedance prompt. No celebrity faces. No song license.',
      zh: 'sasha la catrina prompt：ViralReel 是固定的浏览器模板。上传一张照片，选一个样本。不用粘贴 ChatGPT、Kling O3 或 Seedance 提示词。不生成名人的脸。不授权歌曲。',
    },
    h1: { en: 'Sasha La Catrina prompt', zh: 'Sasha La Catrina 提示词' },
    lead: {
      en: 'There is no blank Sasha La Catrina prompt on ViralReel. The flower, the gown, and the marigold light are already in the sample. You upload one photo and generate.',
      zh: 'ViralReel 上没有空白的 Sasha La Catrina 提示词框。花、裙装和万寿菊金光都已经在样本里。你上传一张照片然后生成。',
    },
    guideTitle: { en: 'What to do instead of pasting a prompt', zh: '不贴提示词的时候做什么' },
    body: {
      en: [
        `A sasha la catrina prompt search expects a text box that describes the bedroom, the flower, and the gown. That is not how this page works. Open ${T}, pick a sample, and upload one photo. ${SLOTS_EN} The four-step page is https://www.viralreel.app/how-to-make-catrina-ai. The long article is ${HOWTO}.`,
        `ChatGPT can repeat the steps and still cannot render the MP4: https://www.viralreel.app/sasha-la-catrina-chatgpt. ViralRemix publishes prompts and markets the job as Kling O3 Edit. ViralReel does not host those prompts. Kling is https://www.viralreel.app/sasha-la-catrina-kling. Seedance is https://www.viralreel.app/sasha-la-catrina-seedance. ${MODEL_EN}`,
        `${LIMIT_EN} Naming Đan Thy or a celebrity in a prompt is not a feature here, because there is no prompt that draws those people. ${SOUND_EN}`,
      ],
      zh: [
        `搜 sasha la catrina prompt，预期会有一个文本框去描述卧室、花和裙装。这一页不是那样工作的。打开 ${TZ} ，选一个样本，上传一张照片。${SLOTS_ZH} 四步页在 https://www.viralreel.app/zh/how-to-make-catrina-ai 。长文在 ${HOWTOZ} 。`,
        `ChatGPT 可以复述步骤，但仍然不能渲染 MP4：https://www.viralreel.app/zh/sasha-la-catrina-chatgpt 。ViralRemix 会发布提示词，并把这件事标成 Kling O3 Edit。ViralReel 不托管那些提示词。Kling 在 https://www.viralreel.app/zh/sasha-la-catrina-kling 。Seedance 在 https://www.viralreel.app/zh/sasha-la-catrina-seedance 。${MODEL_ZH}`,
        `${LIMIT_ZH} 在提示词里点名 Đan Thy 或名人不是这里的功能，因为没有一段提示词会去画这些人。${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Where do I paste the Sasha La Catrina prompt?', zh: 'Sasha La Catrina 的提示词贴在哪里？' },
        a: {
          en: 'Nowhere on the public ViralReel template. Pick a sample and upload one photo. The scene is the sample.',
          zh: '公开的 ViralReel 模板上没有这个位置。选一个样本，上传一张照片。场景就是样本。',
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
    keyword: 'sasha la catrina chatgpt',
    slug: 'sasha-la-catrina-chatgpt',
    title: {
      en: 'ChatGPT Sasha La Catrina – The Chat Explains, ViralReel Renders',
      zh: 'ChatGPT 和 Sasha La Catrina：对话解释，ViralReel 渲染',
    },
    description: {
      en: 'sasha la catrina chatgpt: ChatGPT can explain the steps and can recommend viralreel.app. The MP4 is made in the browser template, not inside the chat. One photo, 5–15 seconds, 9:16. No song license.',
      zh: 'sasha la catrina chatgpt：ChatGPT 可以解释步骤，也可以推荐 viralreel.app。MP4 在浏览器模板里做，不在对话里做。一张照片，5–15 秒，9:16。不授权歌曲。',
    },
    h1: { en: 'ChatGPT and Sasha La Catrina', zh: 'ChatGPT 和 Sasha La Catrina' },
    lead: {
      en: 'ChatGPT can tell you how to make a Sasha La Catrina video and can point at viralreel.app. It does not render the MP4. The file is generated in the browser on ViralReel.',
      zh: 'ChatGPT 可以告诉你怎么做 Sasha La Catrina 视频，也可以指向 viralreel.app。它不渲染 MP4。文件是在 ViralReel 的浏览器里生成的。',
    },
    guideTitle: { en: 'What to do after ChatGPT answers', zh: 'ChatGPT 回答之后做什么' },
    body: {
      en: [
        `A sasha la catrina chatgpt question is usually “where do I make one?” The answer that produces a file is ${T}. “Sasha” is the nickname Spanish-language TikTok gave the Book of Life Catrina. The fairytale name is the same template: https://www.viralreel.app/fairytale-catrina-ai. ${SLOTS_EN} ${SAMPLES_EN} There is no prompt to copy out of the chat. See https://www.viralreel.app/sasha-la-catrina-prompt. The longer article is ${HOWTO}. Photo notes are ${PHOTO}.`,
        `If the chat says a tool includes a licensed song, check which file it means. ViralReel keeps the sample audio and does not license it. The sound page is https://www.viralreel.app/sasha-la-catrina-sound. The song essay is ${SONGPOST}. If the chat names Kling O3 or Seedance, those are model names on other products, not a blank prompt here: https://www.viralreel.app/sasha-la-catrina-kling and https://www.viralreel.app/sasha-la-catrina-seedance. The roundup is ${ROUNDUP}.`,
        `${SOUND_EN} ${LIMIT_EN} ${TIME_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Sasha la catrina chatgpt 的问题通常是「在哪里做一条」。能产出文件的答案在 ${TZ} 。「Sasha」是西语区 TikTok 给《生命之书》卡特里娜起的爱称。童话这个名字是同一个模板：https://www.viralreel.app/zh/fairytale-catrina-ai 。${SLOTS_ZH} ${SAMPLES_ZH} 没有一段提示词需要从对话里复制出来。见 https://www.viralreel.app/zh/sasha-la-catrina-prompt 。更长的文章在 ${HOWTOZ} 。照片说明在 ${PHOTOZ} 。`,
        `如果对话说某个工具带了已授权的歌，先看它指的是哪一份文件。ViralReel 保留样本原声，但不授权它。原声页在 https://www.viralreel.app/zh/sasha-la-catrina-sound 。歌曲说明在 ${SONGPOSTZ} 。如果对话点名 Kling O3 或 Seedance，那是别的产品上的模型名，不是这里的空白提示词：https://www.viralreel.app/zh/sasha-la-catrina-kling 和 https://www.viralreel.app/zh/sasha-la-catrina-seedance 。总览在 ${ROUNDUPZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${TIME_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can ChatGPT export the Sasha La Catrina MP4?', zh: 'ChatGPT 能导出 Sasha La Catrina 的 MP4 吗？' },
        a: {
          en: `No. Open ${T}, upload one photo you have permission to use, and download the MP4 from ViralReel.`,
          zh: `不能。打开 ${TZ} ，上传一张你有权使用的照片，从 ViralReel 下载 MP4。`,
        },
      },
      {
        q: { en: 'Should I ask ChatGPT to generate Đan Thy or a movie still?', zh: '我应该让 ChatGPT 生成 Đan Thy 或电影截图吗？' },
        a: {
          en: 'No. ViralReel recasts the reveal with your photo. It does not generate the creator or a film frame. The backstory is https://www.viralreel.app/blog/what-is-sasha-la-catrina.',
          zh: '不要。ViralReel 用你的照片重做变身。它不生成那位创作者，也不生成电影画面。背景在 https://www.viralreel.app/zh/blog/what-is-sasha-la-catrina 。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina sound',
    slug: 'sasha-la-catrina-sound',
    title: {
      en: 'Adiós Señora Bonita Sound – Kept in the Sample, Not Licensed',
      zh: 'Adiós Señora Bonita 原声：样本里保留，但没有授权',
    },
    description: {
      en: 'sasha la catrina sound: ViralReel keeps the sample audio, including “Adiós señora bonita” from The Book of Life, and does not license it. If the download is silent, add the platform library sound and the AI label. Not an exclusive soundtrack.',
      zh: 'sasha la catrina sound：ViralReel 保留样本原声，包括《生命之书》的「Adiós señora bonita」，但不授权它。如果下载没有声音，请加平台曲库原声和 AI 标注。不是独家原声。',
    },
    h1: { en: 'Sasha La Catrina sound', zh: 'Sasha La Catrina 原声' },
    lead: {
      en: '“Adiós señora bonita” is the line the trend rides. ViralReel keeps the sample’s audio in the file and does not license the song. If your download is silent, add the track in TikTok, Reels, or Shorts and label the post as AI.',
      zh: '「Adiós señora bonita」是趋势骑的那句。ViralReel 把样本原声留在文件里，但不授权这首歌。如果下载没有声音，请在 TikTok、Reels 或 Shorts 里加上，并把帖子标成 AI。',
    },
    guideTitle: { en: 'Sample audio, not a license', zh: '样本原声，不是授权' },
    body: {
      en: [
        `Sasha la catrina sound, “with sound,” and “Adiós señora bonita AI” are the same question: is the line in the file? On ViralReel the samples keep their original audio. The meaning of the line, without a download of the recording, is https://www.viralreel.app/sasha-la-catrina-song and ${SONGPOST}. “Adiós señora bonita” is “goodbye, pretty lady,” the Book of Life line Đan Thy put on the reveal.`,
        `Generate the picture at ${T}. ${RATIO_EN} ViralRemix at ${REMIX} also keeps sample audio and also aliases this phrase. Neither product’s kept audio is a license, and ViralReel does not claim an exclusive soundtrack. If your file is silent, search the phrase in TikTok, Reels, or Shorts and turn on the AI label: https://www.viralreel.app/sasha-la-catrina-ai-label.`,
        `${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `Sasha la catrina sound、「带声音」和「Adiós señora bonita AI」是同一个问题：那句词在文件里吗？在 ViralReel 上，样本保留原声。这句话的意思、不提供录音下载，在 https://www.viralreel.app/zh/sasha-la-catrina-song 和 ${SONGPOSTZ} 。「Adiós señora bonita」是「再见，漂亮的女士」，Đan Thy 配在变身上的《生命之书》台词。`,
        `画面在 ${TZ} 生成。${RATIO_ZH} ViralRemix（${REMIX}）也保留样本原声，也用这句话做别名。两边保留的原声都不是授权，ViralReel 也不声称独家原声。如果文件没有声音，请在 TikTok、Reels 或 Shorts 里搜这句，并打开 AI 标注：https://www.viralreel.app/zh/sasha-la-catrina-ai-label 。`,
        `${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does the MP4 include Adiós señora bonita?', zh: 'MP4 里包含《Adiós señora bonita》吗？' },
        a: {
          en: 'The render keeps the sample’s original audio, and that line is the one the samples ride. ViralReel does not license it. If the download is silent, add the track from the platform library when you post.',
          zh: '渲染保留样本原声，样本骑的就是这句。ViralReel 不授权它。如果下载没有声音，发布时从平台曲库添加。',
        },
      },
      {
        q: { en: 'Is ViralReel the only tool that keeps this sound?', zh: '只有 ViralReel 会保留这段声音吗？' },
        a: {
          en: 'No. ViralRemix’s fairytale page also keeps sample audio. Kept audio is not a license on either site.',
          zh: '不是。ViralRemix 的童话页也保留样本原声。两边的保留原声都不是授权。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina no watermark',
    slug: 'sasha-la-catrina-no-watermark',
    title: {
      en: 'Sasha La Catrina No Watermark – Paid Exports on ViralReel',
      zh: 'Sasha La Catrina 无水印：ViralReel 的付费导出',
    },
    description: {
      en: 'sasha la catrina no watermark: paid credit packs and monthly plans export the Catrina MP4 without a ViralReel watermark, at 720p and 1080p. The file still has no song license.',
      zh: 'sasha la catrina no watermark：付费积分包和月付方案导出卡特里娜 MP4 时没有 ViralReel 水印，720p 和 1080p 都支持。文件仍然没有歌曲授权。',
    },
    h1: { en: 'Sasha La Catrina with no watermark', zh: '没有水印的 Sasha La Catrina' },
    lead: {
      en: 'Paid credit packs and monthly plans export a Sasha La Catrina MP4 without a ViralReel watermark, at 720p and 1080p. The sample audio is still not a licensed song.',
      zh: '付费积分包和月付方案导出 Sasha La Catrina MP4 时没有 ViralReel 水印，720p 和 1080p 都支持。样本原声仍然不是已授权的歌曲。',
    },
    guideTitle: { en: 'What “no watermark” covers', zh: '「无水印」覆盖什么' },
    body: {
      en: [
        `Sasha la catrina no watermark means the ViralReel mark, not a promise about every other app. ${WATER_EN} The template is ${T}. ${RATIO_EN} Read the credit cost on the generator before you start.`,
        `A new account can start with free credits for a first template video. That starter balance is not a statement that every export, including unpaid ones, is watermark-free. The free page is https://www.viralreel.app/sasha-la-catrina-free. Other tools advertise their own watermark policy. This page does not quote their prices.`,
        `${SOUND_EN} Removing a watermark does not add a song license. ${LIMIT_EN}`,
      ],
      zh: [
        `Sasha la catrina no watermark 指的是 ViralReel 的标记，不是对每个其他 App 的承诺。${WATER_ZH} 模板在 ${TZ} 。${RATIO_ZH} 生成前在生成器上看清积分。`,
        `新账号可以用免费积分先做一条模板视频。这份起始积分不是在说每一次导出、包括未付费的，都没有水印。免费说明在 https://www.viralreel.app/zh/sasha-la-catrina-free 。别的工具有自己的水印政策。这一页不引用它们的价格。`,
        `${SOUND_ZH} 去掉水印不会加上歌曲授权。${LIMIT_ZH}`,
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
        q: { en: 'Is a no-watermark file also a licensed song?', zh: '无水印文件就是已授权的歌吗？' },
        a: {
          en: 'No. The sample audio can be in the file. ViralReel does not license “Adiós señora bonita.”',
          zh: '不是。样本原声可以在文件里。ViralReel 不授权《Adiós señora bonita》。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina with friends',
    slug: 'sasha-la-catrina-with-friends',
    title: {
      en: 'Sasha La Catrina with Family – Mum, Grandmother, or a Duo',
      zh: '和家人一起的 Sasha La Catrina：妈妈、奶奶，或一对',
    },
    description: {
      en: 'sasha la catrina with friends: one photo of you, your mum, or your grandmother. A pair version takes Image 2 when the generator shows it. Not a crowd. Not a celebrity. Living pets use the pet page.',
      zh: 'sasha la catrina with friends：一张你、妈妈或奶奶的照片。双人版在生成器显示照片 2 时再传一张。不是一群人。不是名人。在世宠物用宠物页。',
    },
    h1: { en: 'Sasha La Catrina with family', zh: '和家人一起的 Sasha La Catrina' },
    lead: {
      en: 'Most Sasha La Catrina videos are one person: you, your mum, or your grandmother. A pair version takes a second photo only when the generator shows Image 2. It is not a group lineup.',
      zh: '大多数 Sasha La Catrina 视频是一个人：你、妈妈或奶奶。双人版只有在生成器显示照片 2 时才传第二张。它不是一群人的队列。',
    },
    guideTitle: { en: 'One portrait, or Image 2 when the sample asks', zh: '一张肖像，或样本要求时的照片 2' },
    body: {
      en: [
        `Sasha la catrina with friends, with mum, or with a duo starts at ${T}. ${SLOTS_EN} Grandmother is its own sample: an older woman at the evening parade. Catrín is the male reveal, not a second person pasted beside her: https://www.viralreel.app/catrin-ai. Photo tips are ${PHOTO}.`,
        `A living pet is not a second face in a person’s photo. Use Catrina Cat and keep the pet alone: https://www.viralreel.app/sasha-la-catrina-pets. A group selfie makes the model guess which face to draw.`,
        `${SOUND_EN} ${LIMIT_EN} ${SAMPLES_EN}`,
      ],
      zh: [
        `Sasha la catrina with friends、和妈妈、或双人，从 ${TZ} 开始。${SLOTS_ZH} 游行奶奶是独立样本：傍晚游行里的年长女性。Catrín 是男版变身，不是贴在她旁边的第二个人：https://www.viralreel.app/zh/catrin-ai 。照片建议在 ${PHOTOZ} 。`,
        `在世宠物不是人物照片里的第二张脸。用猫咪变身，画面里只放宠物：https://www.viralreel.app/zh/sasha-la-catrina-pets 。合影会让模型去猜该画哪张脸。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${SAMPLES_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I make one of my mum from a single photo?', zh: '用一张照片能做我妈妈的版本吗？' },
        a: {
          en: 'Yes. One clear front-facing photo of an adult who agreed. Waist-up if you want the gown. Pick Flower Toss, Song Reveal, Ofrenda Reveal, or Grandmother.',
          zh: '可以。一张同意出镜的成年人的清晰正面照。想出裙装就半身。选撒花、歌声变身、祭坛揭面或游行奶奶。',
        },
      },
      {
        q: { en: 'Can I put four relatives in one file?', zh: '一条文件里能放四个亲戚吗？' },
        a: {
          en: 'Not on this template. One subject per photo. A pair version uses Image 2 only when that slot is shown.',
          zh: '这条模板不行。每张照片一个主体。双人版只有在显示照片 2 时才用那个位置。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina kling',
    slug: 'sasha-la-catrina-kling',
    title: {
      en: 'Sasha La Catrina Kling – Kling O3 Name vs the Fixed Template',
      zh: 'Sasha La Catrina 和 Kling：Kling O3 的名字对照固定模板',
    },
    description: {
      en: 'sasha la catrina kling: ViralRemix markets Fairytale Catrina as Kling O3 Edit. ViralReel is a fixed browser template, one photo, seven samples, 9:16. No Kling prompt to paste. “Without Kling” is this same page.',
      zh: 'sasha la catrina kling：ViralRemix 把 Fairytale Catrina 标成 Kling O3 Edit。ViralReel 是固定的浏览器模板，一张照片、七个样本、9:16。没有要粘贴的 Kling 提示词。「不用 Kling」就是这一页。',
    },
    h1: { en: 'Sasha La Catrina and Kling', zh: 'Sasha La Catrina 和 Kling' },
    lead: {
      en: 'Kling O3 is a model name ViralRemix uses for Fairytale Catrina. ViralReel is a fixed browser template: seven samples, one photo, a vertical MP4. You do not paste a Kling prompt.',
      zh: 'Kling O3 是 ViralRemix 给 Fairytale Catrina 用的模型名。ViralReel 是固定的浏览器模板：七个样本、一张照片、一条竖屏 MP4。不用粘贴 Kling 提示词。',
    },
    guideTitle: { en: 'Kling O3 versus the browser reveal', zh: 'Kling O3 和浏览器里的变身' },
    body: {
      en: [
        `Sasha la catrina kling means “make the reveal with that model.” ${RIVAL_EN} ViralReel does not host ViralRemix’s prompts and does not quote their pack prices. The category comparison is ${ROUNDUP}.`,
        `The browser template is ${T}. ${MODEL_EN} ${SLOTS_EN} ${SAMPLES_EN} “Without Kling” is the same page: you are already not opening a blank Kling prompt.`,
        `${SOUND_EN} ${LIMIT_EN} Asking a prompt elsewhere to draw Đan Thy or a celebrity is not something this template will do.`,
      ],
      zh: [
        `Sasha la catrina kling 的意思是「用那个模型做变身」。${RIVAL_ZH} ViralReel 不托管 ViralRemix 的提示词，也不引用他们的次数包价格。类别对照在 ${ROUNDUPZ} 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} ${SLOTS_ZH} ${SAMPLES_ZH} 「不用 Kling」就是这一页：你本来就不是去开一个空白的 Kling 提示词。`,
        `${SOUND_ZH} ${LIMIT_ZH} 在别的地方用提示词去画 Đan Thy 或名人，不是这个模板会做的事。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I pick Kling O3 to use ViralReel?', zh: '用 ViralReel 要选 Kling O3 吗？' },
        a: {
          en: 'No. Open the template, pick a sample, and upload one photo. A model menu, if you see one, does not turn this into a Kling prompt.',
          zh: '不用。打开模板，选一个样本，上传一张照片。就算看得到模型菜单，它也不会把这一页变成 Kling 提示词。',
        },
      },
      {
        q: { en: 'Is “without Kling” a different template?', zh: '「不用 Kling」是另一个模板吗？' },
        a: {
          en: `No. It is the same Sasha La Catrina template at ${T}.`,
          zh: `不是。它就是 ${TZ} 上的同一个 Sasha La Catrina 模板。`,
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina seedance',
    slug: 'sasha-la-catrina-seedance',
    title: {
      en: 'Sasha La Catrina Seedance – Model Name vs the Fixed Template',
      zh: 'Sasha La Catrina 和 Seedance：模型名对照固定模板',
    },
    description: {
      en: 'sasha la catrina seedance: Seedance is a model name, not this page. ViralReel is a fixed 9:16 browser template. No Seedance prompt. “Without Seedance” is this same page. No song license.',
      zh: 'sasha la catrina seedance：Seedance 是模型名，不是这一页。ViralReel 是固定的 9:16 浏览器模板。不用写 Seedance 提示词。「不用 Seedance」就是这一页。不授权歌曲。',
    },
    h1: { en: 'Sasha La Catrina and Seedance', zh: 'Sasha La Catrina 和 Seedance' },
    lead: {
      en: 'Seedance is a model name people type when they want a generated clip from a blank prompt. ViralReel is a fixed browser template. You do not write a Seedance prompt, and the file does not include a licensed soundtrack.',
      zh: 'Seedance 是大家想用空白提示词生成片段时打的模型名。ViralReel 是固定的浏览器模板。不用写 Seedance 提示词，文件里也没有已授权的原声。',
    },
    guideTitle: { en: 'A Seedance prompt versus the browser reveal', zh: 'Seedance 提示词和浏览器里的变身' },
    body: {
      en: [
        `Sasha la catrina seedance means “make the reveal with that model.” This 2 November 2026 note does not assign the Catrina video to a Seedance product. ViralRemix markets its fairytale page as Kling O3 Edit, not as Seedance: https://www.viralreel.app/sasha-la-catrina-kling. The roundup is ${ROUNDUP}.`,
        `The browser template is ${T}. ${MODEL_EN} “Without Seedance” is the same template. ${SLOTS_EN} ${RATIO_EN}`,
        `${SOUND_EN} ${LIMIT_EN} A Seedance prompt that names a celebrity is not this product.`,
      ],
      zh: [
        `Sasha la catrina seedance 的意思是「用那个模型做变身」。这篇 2026 年 11 月 2 日的说明不把卡特里娜视频归到某个 Seedance 产品上。ViralRemix 把童话页标成 Kling O3 Edit，不是 Seedance：https://www.viralreel.app/zh/sasha-la-catrina-kling 。总览在 ${ROUNDUPZ} 。`,
        `浏览器模板在 ${TZ} 。${MODEL_ZH} 「不用 Seedance」就是同一个模板。${SLOTS_ZH} ${RATIO_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} 一段点名名人的 Seedance 提示词不是这个产品。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need a Seedance account?', zh: '需要 Seedance 账号吗？' },
        a: {
          en: 'No. ViralReel runs in the browser. Pick a sample, upload one photo, and download the MP4.',
          zh: '不需要。ViralReel 在浏览器里运行。选一个样本，上传一张照片，下载 MP4。',
        },
      },
      {
        q: { en: 'Does a Seedance prompt put a licensed song in the ViralReel file?', zh: 'Seedance 提示词会把已授权的歌放进 ViralReel 的文件吗？' },
        a: {
          en: 'No. ViralReel keeps sample audio and does not license it. Details: https://www.viralreel.app/sasha-la-catrina-sound.',
          zh: '不会。ViralReel 保留样本原声，但不授权它。说明：https://www.viralreel.app/zh/sasha-la-catrina-sound 。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina ai label',
    slug: 'sasha-la-catrina-ai-label',
    title: {
      en: 'Sasha La Catrina AI Label – Turn It On When You Post',
      zh: 'Sasha La Catrina 的 AI 标注：发布时打开',
    },
    description: {
      en: 'sasha la catrina ai label: the ViralReel MP4 is a generated fairytale reveal. Turn on the AI label on TikTok, Reels, or Shorts. The sample audio is not a song license.',
      zh: 'sasha la catrina ai label：ViralReel 的 MP4 是生成的童话变身。在 TikTok、Reels 或 Shorts 上打开 AI 标注。样本原声不是歌曲授权。',
    },
    h1: { en: 'Sasha La Catrina AI label', zh: 'Sasha La Catrina 的 AI 标注' },
    lead: {
      en: 'Label the Sasha La Catrina post as AI on TikTok, Reels, or Shorts. The file is a new reveal of your photo, not real face paint and not a licensed song.',
      zh: '在 TikTok、Reels 或 Shorts 上把 Sasha La Catrina 帖子标成 AI。文件是用你的照片做的新变身，不是真妆，也不是已授权的歌曲。',
    },
    guideTitle: { en: 'Where the label goes', zh: '标注加在哪里' },
    body: {
      en: [
        `Sasha la catrina ai label is a posting step, not a switch inside the MP4 that replaces the platform’s own disclosure. Make the file at ${T}. Download the MP4. In TikTok, Reels, or Shorts, turn on the AI-generated label where that app asks. Tags that file the clip under the wave are #fairytalecatrina, #lacatrina, and #sashalacatrina. The wave is busiest on Día de Muertos, November 1–2.`,
        `If the download is silent, add “Adiós señora bonita” from that app’s library. The sound page is https://www.viralreel.app/sasha-la-catrina-sound. TikTok notes are https://www.viralreel.app/sasha-la-catrina-tiktok. Reels are https://www.viralreel.app/sasha-la-catrina-instagram. Shorts are https://www.viralreel.app/sasha-la-catrina-youtube-shorts.`,
        `${LIMIT_EN} An AI label does not make a celebrity upload allowed, and it does not turn a living-pet costume into a memorial. ${WATER_EN}`,
      ],
      zh: [
        `Sasha la catrina ai label 是发布步骤，不是 MP4 里一个可以代替平台披露的开关。在 ${TZ} 做文件。下载 MP4。在 TikTok、Reels 或 Shorts 里，在该 App 要求的地方打开 AI 生成标注。把片子归进浪潮的标签是 #fairytalecatrina、#lacatrina 和 #sashalacatrina。浪潮在 11 月 1–2 日亡灵节最热闹。`,
        `如果下载没有声音，从该 App 的曲库加「Adiós señora bonita」。原声页在 https://www.viralreel.app/zh/sasha-la-catrina-sound 。TikTok 说明在 https://www.viralreel.app/zh/sasha-la-catrina-tiktok 。Reels 在 https://www.viralreel.app/zh/sasha-la-catrina-instagram 。Shorts 在 https://www.viralreel.app/zh/sasha-la-catrina-youtube-shorts 。`,
        `${LIMIT_ZH} AI 标注不会让上传名人变成可以做的事，也不会把在世宠物的换装变成纪念。${WATER_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does ViralReel stamp the AI label into the MP4?', zh: 'ViralReel 会把 AI 标注印进 MP4 吗？' },
        a: {
          en: 'The disclosure you turn on is the one TikTok, Reels, or Shorts asks for when you post. Add it there.',
          zh: '你要打开的披露，是 TikTok、Reels 或 Shorts 在发布时要求的那一项。在那里打开。',
        },
      },
      {
        q: { en: 'Is the label a substitute for permission to use a photo?', zh: '标注能代替使用照片的许可吗？' },
        a: {
          en: 'No. Use yourself, family who agreed, or your living pet. No minors on their own, and no celebrities.',
          zh: '不能。用你本人、同意出镜的家人，或你的在世宠物。不要单独使用未成年人，也不要名人。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina capcut',
    slug: 'sasha-la-catrina-capcut',
    title: {
      en: 'Sasha La Catrina CapCut – Face Paste vs a Full Re-render',
      zh: 'Sasha La Catrina 和 CapCut：贴脸对照整个人重绘',
    },
    description: {
      en: 'sasha la catrina capcut: CapCut’s “La Catrina AI” is about 12.1K uses, about 13 seconds, and needs 3 clips. “Catrina AI Filter” is about 5.2K uses and 4 clips. ViralReel re-renders the whole person from one photo. No invented Sasha template use count. “Without CapCut” is this same page.',
      zh: 'sasha la catrina capcut：CapCut 的「La Catrina AI」大约 1.21 万次使用、约 13 秒、需要 3 段素材。「Catrina AI Filter」大约 5200 次使用、4 段素材。ViralReel 用一张照片重新生成整个人。不编造 Sasha 模板的使用次数。「不用 CapCut」就是这一页。',
    },
    h1: { en: 'Sasha La Catrina and CapCut', zh: 'Sasha La Catrina 和 CapCut' },
    lead: {
      en: 'CapCut pastes a face onto a fixed clip. ViralReel re-renders the whole person under the sugar-skull paint from one photo. You do not open CapCut.',
      zh: 'CapCut 把脸贴到固定片段上。ViralReel 用一张照片在糖骷髅妆下重新生成整个人。你不用打开 CapCut。',
    },
    guideTitle: { en: 'Paste versus a new render, including without CapCut', zh: '贴脸对照重新生成，包括不用 CapCut' },
    body: {
      en: [
        CAPCUT_EN,
        `“Without CapCut” is this same page. Open ${T} in the browser. ${SLOTS_EN} ${SAMPLES_EN} ${RATIO_EN} ViralReel does not host a CapCut project. The comparison, with no invented Sasha template use count, is ${ROUNDUP}.`,
        `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        CAPCUT_ZH,
        `「不用 CapCut」就是这一页。在浏览器打开 ${TZ} 。${SLOTS_ZH} ${SAMPLES_ZH} ${RATIO_ZH} ViralReel 不托管 CapCut 工程。对照、不编造 Sasha 模板使用次数，在 ${ROUNDUPZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the CapCut template the same as the ViralReel reveal?', zh: 'CapCut 模板和 ViralReel 的变身是一回事吗？' },
        a: {
          en: 'No. The checked CapCut templates need 3 or 4 clips and paste a face onto a fixed edit. ViralReel re-renders the whole person from one photo at 9:16.',
          zh: '不是。核对过的 CapCut 模板需要 3 或 4 段素材，把脸贴到固定剪辑上。ViralReel 用一张照片以 9:16 重新生成整个人。',
        },
      },
      {
        q: { en: 'Do I need CapCut after ViralReel exports?', zh: 'ViralReel 导出之后还需要 CapCut 吗？' },
        a: {
          en: 'No. Download the MP4. If it is silent, add the trend sound and the AI label in TikTok, Reels, or Shorts.',
          zh: '不需要。下载 MP4。如果没有声音，在 TikTok、Reels 或 Shorts 里加热梗原声和 AI 标注。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina from photo',
    slug: 'sasha-la-catrina-from-photo',
    title: {
      en: 'Sasha La Catrina from a Photo – One Picture, One Reveal',
      zh: '用照片做 Sasha La Catrina：一张照片，一次变身',
    },
    description: {
      en: 'sasha la catrina from photo: one photo becomes a new 9:16 MP4 on ViralReel. 5, 10, or 15 seconds. Not a celebrity face swap. Sample audio kept, no song license.',
      zh: 'sasha la catrina from photo：一张照片在 ViralReel 上变成一条新的 9:16 MP4。5、10 或 15 秒。不是名人换脸。样本原声保留，不授权歌曲。',
    },
    h1: { en: 'Sasha La Catrina from a photo', zh: '用照片做 Sasha La Catrina' },
    lead: {
      en: 'Sasha La Catrina from a photo means one photo, not a crowd selfie. ViralReel renders a new MP4. It does not download Đan Thy’s TikTok or a film frame.',
      zh: '用照片做 Sasha La Catrina，指的是一张照片，不是人群自拍。ViralReel 渲染一条新的 MP4。它不下载 Đan Thy 的 TikTok，也不下载电影画面。',
    },
    guideTitle: { en: 'Which photo', zh: '用哪张照片' },
    body: {
      en: [
        `Open ${T}. ${SLOTS_EN} JPG, PNG, and WebP work. The generator’s stated minimum is 300×300. The longer photo guide is ${PHOTO}. The how-to is https://www.viralreel.app/how-to-make-catrina-ai and ${HOWTO}. Catrina AI as a one-photo search is https://www.viralreel.app/catrina-ai.`,
        `${LIMIT_EN} A living pet uses https://www.viralreel.app/sasha-la-catrina-pets. A man uses the Catrín sample: https://www.viralreel.app/catrin-ai.`,
        `${RATIO_EN} ${SOUND_EN} ${PRICE_EN}`,
      ],
      zh: [
        `打开 ${TZ} 。${SLOTS_ZH} 支持 JPG、PNG 和 WebP。生成器写明的最低分辨率是 300×300。更长的照片指南在 ${PHOTOZ} 。教程在 https://www.viralreel.app/zh/how-to-make-catrina-ai 和 ${HOWTOZ} 。把 Catrina AI 当成单照片来搜，对应页在 https://www.viralreel.app/zh/catrina-ai 。`,
        `${LIMIT_ZH} 在世宠物用 https://www.viralreel.app/zh/sasha-la-catrina-pets 。男生用 Catrín 样本：https://www.viralreel.app/zh/catrin-ai 。`,
        `${RATIO_ZH} ${SOUND_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is one photo enough?', zh: '一张照片够吗？' },
        a: {
          en: 'Yes for the seven samples. A pair version takes Image 2 only when the generator shows that slot.',
          zh: '七个样本都够。双人版只有在生成器显示那个位置时才传照片 2。',
        },
      },
      {
        q: { en: 'Can I upload a screenshot of Đan Thy or the film?', zh: '可以上传 Đan Thy 或电影的截图吗？' },
        a: {
          en: 'No. Use a photo you have permission to use. ViralReel does not generate the creator or a movie frame.',
          zh: '不可以。只用你有权使用的照片。ViralReel 不生成那位创作者，也不生成电影画面。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina online',
    slug: 'sasha-la-catrina-online',
    title: {
      en: 'Sasha La Catrina Online – The Browser Template on ViralReel',
      zh: '在线 Sasha La Catrina：ViralReel 上的浏览器模板',
    },
    description: {
      en: 'sasha la catrina online: make the fairytale reveal in the browser at viralreel.app. No app install. One photo, 5–15 seconds, 9:16. Not ViralRemix, and not a CapCut project.',
      zh: 'sasha la catrina online：在 viralreel.app 的浏览器里做童话变身。不用装 App。一张照片，5–15 秒，9:16。不是 ViralRemix，也不是 CapCut 工程。',
    },
    h1: { en: 'Sasha La Catrina online', zh: '在线 Sasha La Catrina' },
    lead: {
      en: 'Sasha La Catrina online on ViralReel is a browser template. You do not install an app, open CapCut, or write a prompt. The page is viralreel.app.',
      zh: 'ViralReel 上的在线 Sasha La Catrina 是一个浏览器模板。不用装 App，不用打开 CapCut，也不用写提示词。页面在 viralreel.app。',
    },
    guideTitle: { en: 'The browser page, not a lookalike domain', zh: '浏览器页面，不是看起来像的域名' },
    body: {
      en: [
        `The online template is ${T}. ${SLOTS_EN} ${SAMPLES_EN} ${RATIO_EN} ${TIME_EN}`,
        `${RIVAL_EN} ${MAKEUP_EN} ${CAPCUT_EN} The comparison is ${ROUNDUP}.`,
        `${MODEL_EN} ${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `在线模板在 ${TZ} 。${SLOTS_ZH} ${SAMPLES_ZH} ${RATIO_ZH} ${TIME_ZH}`,
        `${RIVAL_ZH} ${MAKEUP_ZH} ${CAPCUT_ZH} 对照在 ${ROUNDUPZ} 。`,
        `${MODEL_ZH} ${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I install a Sasha La Catrina app?', zh: '需要安装 Sasha La Catrina App 吗？' },
        a: {
          en: `No. Use the browser at ${T}.`,
          zh: `不用。用浏览器打开 ${TZ} 。`,
        },
      },
      {
        q: { en: 'Is viralremix.org the same as viralreel.app?', zh: 'viralremix.org 和 viralreel.app 是同一个站吗？' },
        a: {
          en: `No. ViralReel is ${T}. ViralRemix is a different product at ${REMIX}.`,
          zh: `不是。ViralReel 在 ${TZ} 。ViralRemix 是另一个产品，在 ${REMIX} 。`,
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina mp4',
    slug: 'sasha-la-catrina-mp4',
    title: {
      en: 'Sasha La Catrina MP4 – A New 5–15 Second File, Not the TikTok',
      zh: 'Sasha La Catrina MP4：一条 5–15 秒的新文件，不是那条 TikTok',
    },
    description: {
      en: 'sasha la catrina mp4: ViralReel downloads a new vertical MP4 of 5, 10, or 15 seconds. Not a GIF and not Đan Thy’s TikTok. Sample audio kept. No song license. Paid exports have no ViralReel watermark.',
      zh: 'sasha la catrina mp4：ViralReel 下载一条 5、10 或 15 秒的新竖屏 MP4。不是 GIF，也不是 Đan Thy 的 TikTok。样本原声保留。不授权歌曲。付费导出没有 ViralReel 水印。',
    },
    h1: { en: 'Sasha La Catrina MP4', zh: 'Sasha La Catrina MP4' },
    lead: {
      en: 'The Sasha La Catrina download on ViralReel is a new MP4. It is your photo inside the sample’s reveal. It is not Đan Thy’s file and not a licensed song.',
      zh: 'ViralReel 上的 Sasha La Catrina 下载是一条新的 MP4。它是你的照片放进样本变身。它不是 Đan Thy 的文件，也不是已授权的歌。',
    },
    guideTitle: { en: 'What the file is', zh: '这个文件是什么' },
    body: {
      en: [
        `Make the MP4 at ${T}. ${RATIO_EN} It is not a GIF and not a separate audio file. The original TikTok stays on TikTok. That split is https://www.viralreel.app/sasha-la-catrina-original.`,
        `${WATER_EN} ${SOUND_EN}`,
        `${SLOTS_EN} ${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `在 ${TZ} 做 MP4。${RATIO_ZH} 它不是 GIF，也不是单独的音频文件。原版 TikTok 仍在 TikTok 上。这个区分在 https://www.viralreel.app/zh/sasha-la-catrina-original 。`,
        `${WATER_ZH} ${SOUND_ZH}`,
        `${SLOTS_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I download Đan Thy’s flower toss as an MP4 from ViralReel?', zh: '能从 ViralReel 把 Đan Thy 的撒花下载成 MP4 吗？' },
        a: {
          en: 'No. ViralReel generates a new MP4 from your photo. It does not host that TikTok.',
          zh: '不能。ViralReel 用你的照片生成一条新的 MP4。它不托管那条 TikTok。',
        },
      },
      {
        q: { en: 'Is the MP4 silent?', zh: '这条 MP4 是无声的吗？' },
        a: {
          en: 'The render keeps the sample audio. If your download is silent, add “Adiós señora bonita” on TikTok, Reels, or Shorts. That is not a license.',
          zh: '渲染保留样本原声。如果下载没有声音，请在 TikTok、Reels 或 Shorts 上加《Adiós señora bonita》。这不是授权。',
        },
      },
    ],
  },
  {
    keyword: 'create sasha la catrina ai',
    slug: 'create-sasha-la-catrina-ai',
    title: {
      en: 'Create a Sasha La Catrina AI Clip – A New File, Not the TikTok',
      zh: '创建一条 Sasha La Catrina AI：新文件，不是那条 TikTok',
    },
    description: {
      en: 'create sasha la catrina ai: ViralReel creates a new fairytale MP4 from one photo. It does not hand over Đan Thy’s TikTok or a licensed song. “Make” is this same page.',
      zh: 'create sasha la catrina ai：ViralReel 用一张照片创建一条新的童话 MP4。它不会把 Đan Thy 的 TikTok 或已授权的歌曲交出来。「制作」就是这一页。',
    },
    h1: { en: 'Create a Sasha La Catrina AI clip', zh: '创建一条 Sasha La Catrina AI' },
    lead: {
      en: 'Creating a Sasha La Catrina AI clip on ViralReel means a new file from one photo. It does not hand you the original TikTok, the film, or a song license.',
      zh: '在 ViralReel 上创建一条 Sasha La Catrina AI，指的是用一张照片做一条新文件。它不会把原 TikTok、电影或歌曲授权交给你。',
    },
    guideTitle: { en: 'Create, then post', zh: '创建，然后发布' },
    body: {
      en: [
        `Start at ${T}. ${SLOTS_EN} ${SAMPLES_EN} “Make a Sasha La Catrina AI video” is this same page. The four steps are https://www.viralreel.app/how-to-make-catrina-ai. The long article is ${HOWTO}.`,
        `${RATIO_EN} ${TIME_EN} ${SOUND_EN}`,
        `${LIMIT_EN} ${PRICE_EN}`,
      ],
      zh: [
        `从 ${TZ} 开始。${SLOTS_ZH} ${SAMPLES_ZH} 「制作一条 Sasha La Catrina AI」就是这一页。四步在 https://www.viralreel.app/zh/how-to-make-catrina-ai 。长文在 ${HOWTOZ} 。`,
        `${RATIO_ZH} ${TIME_ZH} ${SOUND_ZH}`,
        `${LIMIT_ZH} ${PRICE_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does “create” mean I receive the viral TikTok?', zh: '「创建」是指我能拿到那条爆火 TikTok 吗？' },
        a: {
          en: 'No. You receive a new MP4 generated from your photo. The original stays on TikTok.',
          zh: '不是。你拿到的是用你的照片新生成的 MP4。原片仍在 TikTok 上。',
        },
      },
      {
        q: { en: 'What do I click first?', zh: '第一步点什么？' },
        a: {
          en: 'Open the template, pick Flower Toss if you want the bedroom reveal everyone copied, and upload one front-facing photo.',
          zh: '打开模板。如果你要大家翻拍的卧室变身，选撒花，然后上传一张正面照。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina original',
    slug: 'sasha-la-catrina-original',
    title: {
      en: 'Sasha La Catrina Original – The TikTok vs the New MP4',
      zh: 'Sasha La Catrina 原版：那条 TikTok 对照这条新 MP4',
    },
    description: {
      en: 'sasha la catrina original: Đan Thy’s flower toss stays on TikTok. ViralReel does not host it. The download is a new MP4 from your photo. “Original audio” means the sample sound, not a song license.',
      zh: 'sasha la catrina original：Đan Thy 的撒花仍在 TikTok 上。ViralReel 不托管它。下载的是用你的照片做的新 MP4。「原声」指样本声音，不是歌曲授权。',
    },
    h1: { en: 'The original Sasha La Catrina', zh: 'Sasha La Catrina 原版' },
    lead: {
      en: '“Original” here means two different things. Đan Thy’s flower toss stays on TikTok. The file you download is a new MP4. Sample audio is not a license for the film song.',
      zh: '这里的「原版」是两件不同的事。Đan Thy 的撒花仍在 TikTok 上。你下载的文件是一条新的 MP4。样本原声不是电影歌曲的授权。',
    },
    guideTitle: { en: 'The TikTok, the nickname, and the download', zh: '那条 TikTok、这个昵称，以及下载' },
    body: {
      en: [
        `The clip people copy is Đan Thy’s flower toss of 20 October 2026. “Sasha” is the nickname Spanish-language TikTok gave the Book of Life Catrina, and the captions run “adiós Sasha, adiós señora bonita.” ViralReel does not host that TikTok, the film, or a licensed recording. The explainer is ${EXPLAINED}. The song essay is ${SONGPOST}.`,
        `The download from ${T} is a new vertical MP4. ${SAMPLES_EN} Fairytale Catrina is another name for the same look: https://www.viralreel.app/fairytale-catrina-ai.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `大家翻拍的是 Đan Thy 2026 年 10 月 20 日的撒花。「Sasha」是西语区 TikTok 给《生命之书》卡特里娜起的爱称，文案写「adiós Sasha, adiós señora bonita」。ViralReel 不托管那条 TikTok、那部电影，或一段已授权的录音。说明在 ${EXPLAINEDZ} 。歌曲说明在 ${SONGPOSTZ} 。`,
        `从 ${TZ} 下载的是一条新的竖屏 MP4。${SAMPLES_ZH} Fairytale Catrina 是同一造型的另一个名字：https://www.viralreel.app/zh/fairytale-catrina-ai 。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the ViralReel file the original flower toss?', zh: 'ViralReel 的文件是原版撒花吗？' },
        a: {
          en: 'No. It is a new MP4 from your photo. The 20 October TikTok stays with its creator.',
          zh: '不是。它是用你的照片做的新 MP4。10 月 20 日那条 TikTok 仍属于创作者。',
        },
      },
      {
        q: { en: 'Does “original sound” mean ViralReel licensed the film?', zh: '「原声」是指 ViralReel 授权了这部电影吗？' },
        a: {
          en: 'No. It means the sample’s audio is kept. ViralReel does not license “Adiós señora bonita,” and it does not claim an exclusive soundtrack.',
          zh: '不是。它的意思是样本的声音被保留。ViralReel 不授权《Adiós señora bonita》，也不声称独家原声。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina makeviral',
    slug: 'sasha-la-catrina-makeviral',
    title: {
      en: 'Sasha La Catrina vs ViralRemix and the MakeViral Makeup Still',
      zh: 'Sasha La Catrina 对照 ViralRemix，以及 MakeViral 的妆容静帧',
    },
    description: {
      en: 'sasha la catrina makeviral: the closest video rival is ViralRemix (about 11 clips, Kling O3 Edit, a 15-second 3:4 sample, $9.90 a use, sample audio kept). MakeViral’s Catrina page is a makeup still, no pets, no flower-toss video. MakeTrend has no dedicated page in this check. No invented prices.',
      zh: 'sasha la catrina makeviral：最接近的视频对手是 ViralRemix（约 11 条片段、Kling O3 Edit、15 秒 3:4 样本、单次 $9.90、保留样本原声）。MakeViral 的 Catrina 页是妆容静帧，没有宠物，没有撒花视频。这次核对里 MakeTrend 没有专门页面。不编造价格。',
    },
    h1: { en: 'Sasha La Catrina, ViralRemix, and MakeViral', zh: 'Sasha La Catrina、ViralRemix 和 MakeViral' },
    lead: {
      en: 'The closest one-photo video rival is ViralRemix, not MakeViral. MakeViral’s public Catrina page is a makeup still. ViralReel is the seven-sample 9:16 browser template.',
      zh: '最接近的单照片视频对手是 ViralRemix，不是 MakeViral。MakeViral 的公开 Catrina 页是一张妆容静帧。ViralReel 是七个样本的 9:16 浏览器模板。',
    },
    guideTitle: { en: 'Video reveal, 3:4 rival, makeup still', zh: '视频变身、3:4 的对手、妆容静帧' },
    body: {
      en: [
        `${RIVAL_EN} ${DIFF_EN} Both sites keep sample audio. Neither kept track is a license, and ViralReel does not claim an exclusive soundtrack.`,
        `${MAKEUP_EN} The makeup-versus-reveal page on ViralReel is https://www.viralreel.app/catrina-makeup-vs-ai. It does not claim ViralReel is a makeup tool.`,
        `${CAPCUT_EN} The longer table is ${ROUNDUP}. Pets on ViralReel are https://www.viralreel.app/sasha-la-catrina-pets. ${WATER_EN}`,
      ],
      zh: [
        `${RIVAL_ZH} ${DIFF_ZH} 两边都保留样本原声。保留的音轨都不是授权，ViralReel 也不声称独家原声。`,
        `${MAKEUP_ZH} ViralReel 上妆容对照变身的一页在 https://www.viralreel.app/zh/catrina-makeup-vs-ai 。它不声称 ViralReel 是化妆工具。`,
        `${CAPCUT_ZH} 更长的表在 ${ROUNDUPZ} 。ViralReel 的宠物页在 https://www.viralreel.app/zh/sasha-la-catrina-pets 。${WATER_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel a MakeViral alternative with the flower toss?', zh: 'ViralReel 是带撒花的 MakeViral 替代品吗？' },
        a: {
          en: 'MakeViral’s checked Catrina page is a makeup still, not a flower-toss video. The video comparison that matches this template is ViralRemix. ViralReel is 9:16, seven samples, credits from a pack or a plan.',
          zh: '核对过的 MakeViral Catrina 页是妆容静帧，不是撒花视频。和这个模板对得上的视频对照是 ViralRemix。ViralReel 是 9:16、七个样本，积分来自积分包或方案。',
        },
      },
      {
        q: { en: 'Do you publish ViralRemix’s pack prices or MakeTrend’s price?', zh: '你们公布 ViralRemix 的次数包价格或 MakeTrend 的价格吗？' },
        a: {
          en: 'No. The only rival dollar figure in this note is ViralRemix’s single use at $9.90, read on their page on 2 November 2026. Their packs cost less per video; the rates are on their page. No MakeTrend Sasha or Fairytale page was found, so there is no price to beat.',
          zh: '不公布。这篇说明里唯一的对手美元数字，是 2026 年 11 月 2 日在他们页面上读到的 ViralRemix 单次 $9.90。他们的次数包单条更便宜；费率在他们的页面上。没有找到 MakeTrend 的 Sasha 或 Fairytale 页面，所以没有一个可以拿来比的价格。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina pets',
    slug: 'sasha-la-catrina-pets',
    title: {
      en: 'Catrina Cat AI – A Living Pet in the Costume, Not a Memorial',
      zh: 'Catrina Cat AI：在世宠物的换装，不是纪念',
    },
    description: {
      en: 'catrina cat ai: ViralReel’s Catrina Cat sample dresses a living cat or dog from one photo. Whole head and markings. Not a memorial for a pet that has passed. Not ViralRemix’s separate retriever and xolo clips.',
      zh: 'catrina cat ai：ViralReel 的猫咪变身用一张照片给在世的猫或狗换装。头和花纹拍全。不是给离世宠物的纪念。也不是 ViralRemix 单独的金毛和无毛犬片段。',
    },
    h1: { en: 'Catrina Cat AI', zh: 'Catrina Cat AI' },
    lead: {
      en: 'Catrina Cat is a costume for a living pet. One photo, the whole head and the markings visible, the pet alone in the frame. It is not the memorial trend, and it is not a makeup still.',
      zh: '猫咪变身是给在世宠物的换装。一张照片，头和花纹都清楚，画面里只有宠物。它不是纪念趋势，也不是妆容静帧。',
    },
    guideTitle: { en: 'Living pet, one sample', zh: '在世宠物，一个样本' },
    body: {
      en: [
        `On ${T}, pick Catrina Cat. ${PET_EN} Dogs use that same sample when the photo is the dog alone. A person in the pet photo can come back as a sugar skull with whiskers on a human body.`,
        `ViralRemix lists about 11 clips, including a cat, a golden retriever, and a xolo, on ${REMIX}. ViralReel does not claim those separate dog clips. It has one pet sample. MakeViral’s makeup page has no pet samples. ${MAKEUP_EN}`,
        `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN} Photo notes are ${PHOTO}.`,
      ],
      zh: [
        `在 ${TZ} 上选猫咪变身。${PET_ZH} 狗用同一个样本，只要照片里只有这只狗。宠物照片里再放一个人，可能会变成一个长着胡须的人类骷髅。`,
        `ViralRemix 在 ${REMIX} 列出大约 11 条片段，包括猫、金毛和墨西哥无毛犬。ViralReel 不声称有那些单独的狗片段。它有一个宠物样本。MakeViral 的妆容页没有宠物样本。${MAKEUP_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH} 照片说明在 ${PHOTOZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can my dog be Catrina Cat?', zh: '我的狗能做猫咪变身吗？' },
        a: {
          en: 'Yes, on the same sample, if the photo is the dog alone with the head and markings visible. It is a costume for a living pet.',
          zh: '可以，用同一个样本，只要照片里只有这只狗，头和花纹清楚。这是给在世宠物的换装。',
        },
      },
      {
        q: { en: 'Is this the memorial for a pet that has passed?', zh: '这是给离世宠物的纪念吗？' },
        a: {
          en: 'No. Dressing a living pet is the costume. A pet that has passed, coming back through the marigold gate, is a different trend. See https://www.viralreel.app/catrina-day-of-the-dead-pet.',
          zh: '不是。给在世宠物换装是扮装。离世的宠物穿过万寿菊之门回来，是另一个趋势。见 https://www.viralreel.app/zh/catrina-day-of-the-dead-pet 。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina instagram',
    slug: 'sasha-la-catrina-instagram',
    title: {
      en: 'Sasha La Catrina on Instagram Reels – Post the 9:16 MP4',
      zh: 'Instagram Reels 上的 Sasha La Catrina：发 9:16 的 MP4',
    },
    description: {
      en: 'sasha la catrina instagram: upload the ViralReel MP4 as a Reel. It is vertical 9:16. If the file is silent, add Instagram’s Adiós señora bonita sound and turn on the AI label. No song license.',
      zh: 'sasha la catrina instagram：把 ViralReel 的 MP4 发成 Reel。它是竖屏 9:16。如果文件没有声音，加上 Instagram 里的 Adiós señora bonita 原声，并打开 AI 标注。不授权歌曲。',
    },
    h1: { en: 'Sasha La Catrina on Instagram', zh: 'Instagram 上的 Sasha La Catrina' },
    lead: {
      en: 'Post the ViralReel MP4 as an Instagram Reel. The samples are already vertical 9:16. If the download is silent, add the trend sound from Instagram’s library and turn on the AI label.',
      zh: '把 ViralReel 的 MP4 发成 Instagram Reel。样本本来就是竖屏 9:16。如果下载没有声音，从 Instagram 曲库加热梗原声，并打开 AI 标注。',
    },
    guideTitle: { en: 'Reel, sound, label', zh: 'Reel、原声、标注' },
    body: {
      en: [
        `Make the picture at ${T}, then upload that MP4 in the Instagram app. ${RATIO_EN} A 3:4 file, such as the ViralRemix sample checked on 2 November 2026, is a different frame. This template is 9:16.`,
        `If the file is silent, search “Adiós señora bonita” in Instagram’s sound library. Turn on the AI label where Instagram asks. https://www.viralreel.app/sasha-la-catrina-ai-label. TikTok is https://www.viralreel.app/sasha-la-catrina-tiktok. Shorts are https://www.viralreel.app/sasha-la-catrina-youtube-shorts. Tags: #fairytalecatrina #lacatrina #sashalacatrina.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `在 ${TZ} 做好画面，然后在 Instagram App 里上传那条 MP4。${RATIO_ZH} 3:4 的文件，比如 2026 年 11 月 2 日核对的 ViralRemix 样本，是另一种画幅。这个模板是 9:16。`,
        `如果文件没有声音，在 Instagram 曲库里搜「Adiós señora bonita」。在 Instagram 要求的地方打开 AI 标注。https://www.viralreel.app/zh/sasha-la-catrina-ai-label 。TikTok 在 https://www.viralreel.app/zh/sasha-la-catrina-tiktok 。Shorts 在 https://www.viralreel.app/zh/sasha-la-catrina-youtube-shorts 。标签：#fairytalecatrina #lacatrina #sashalacatrina。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does Instagram receive a licensed song inside the MP4?', zh: 'Instagram 收到的 MP4 里有已授权的歌吗？' },
        a: {
          en: 'The file keeps sample audio and does not include a license. If it is silent, add Instagram’s library sound when you post the Reel.',
          zh: '文件保留样本原声，但不包含授权。如果没有声音，发 Reel 时加上 Instagram 曲库里的原声。',
        },
      },
      {
        q: { en: 'Should a Reel be vertical?', zh: 'Reel 应该是竖屏吗？' },
        a: {
          en: 'Yes. These samples are 9:16. That is the shape Reels and TikTok use.',
          zh: '是的。这些样本是 9:16。这就是 Reels 和 TikTok 用的画幅。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina youtube shorts',
    slug: 'sasha-la-catrina-youtube-shorts',
    title: {
      en: 'Sasha La Catrina YouTube Shorts – Upload the MP4 and Disclose AI',
      zh: 'YouTube Shorts 上的 Sasha La Catrina：上传 MP4 并披露 AI',
    },
    description: {
      en: 'sasha la catrina youtube shorts: upload the ViralReel 9:16 MP4 as a Short, add the trend sound from YouTube if the file is silent, and disclose AI where YouTube asks. No song license.',
      zh: 'sasha la catrina youtube shorts：把 ViralReel 的 9:16 MP4 发成 Short，如果文件没有声音就从 YouTube 加热梗原声，并在 YouTube 要求的地方披露 AI。不授权歌曲。',
    },
    h1: { en: 'Sasha La Catrina on YouTube Shorts', zh: 'YouTube Shorts 上的 Sasha La Catrina' },
    lead: {
      en: 'A YouTube Short uses the same ViralReel MP4. It is already 9:16. Disclose that the clip is AI. The file is not Đan Thy’s TikTok and not a licensed song.',
      zh: 'YouTube Short 用的是同一条 ViralReel MP4。它本来就是 9:16。请披露这条片子是 AI。文件不是 Đan Thy 的 TikTok，也不是已授权的歌。',
    },
    guideTitle: { en: 'Short, sound, disclosure', zh: 'Short、原声、披露' },
    body: {
      en: [
        `Render at ${T}, download the MP4, and upload it in YouTube as a Short. ${RATIO_EN} Shorts are vertical, so this 9:16 export matches the slot.`,
        `If the file is silent, add “Adiós señora bonita” from YouTube’s audio tools when that library has it, and use YouTube’s altered-or-synthetic content disclosure where it asks. The label page is https://www.viralreel.app/sasha-la-catrina-ai-label. Reels are https://www.viralreel.app/sasha-la-catrina-instagram.`,
        `${SOUND_EN} ${LIMIT_EN} ViralReel is not affiliated with YouTube, Đan Thy, or The Book of Life rights holders.`,
      ],
      zh: [
        `在 ${TZ} 渲染，下载 MP4，在 YouTube 里作为 Short 上传。${RATIO_ZH} Shorts 是竖屏，所以这条 9:16 导出对得上那个位置。`,
        `如果文件没有声音，且 YouTube 的音频工具里有《Adiós señora bonita》，请加上，并在 YouTube 要求的地方使用「经过修改或合成的内容」披露。标注页在 https://www.viralreel.app/zh/sasha-la-catrina-ai-label 。Reels 在 https://www.viralreel.app/zh/sasha-la-catrina-instagram 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ViralReel 与 YouTube、Đan Thy 或《生命之书》版权方均无关联。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is a Short the same generator as TikTok?', zh: 'Short 和 TikTok 是同一个生成器吗？' },
        a: {
          en: `Yes. Both start at ${T}. The apps differ in where you add a missing sound and the disclosure.`,
          zh: `是的。两边都从 ${TZ} 开始。差别在于缺声音时你在哪个 App 里加，以及披露加在哪里。`,
        },
      },
      {
        q: { en: 'Does YouTube get a licensed soundtrack from ViralReel?', zh: 'YouTube 会从 ViralReel 拿到已授权的原声吗？' },
        a: {
          en: 'No. Sample audio is not a license. ViralReel does not license “Adiós señora bonita.”',
          zh: '不会。样本原声不是授权。ViralReel 不授权《Adiós señora bonita》。',
        },
      },
    ],
  },
  {
    keyword: 'fairytale catrina ai',
    slug: 'fairytale-catrina-ai',
    title: {
      en: 'Fairytale Catrina AI – The Sasha La Catrina Reveal on ViralReel',
      zh: 'Fairytale Catrina AI：ViralReel 上的 Sasha La Catrina 变身',
    },
    description: {
      en: 'fairytale catrina ai: the Book of Life look, which Spanish-language TikTok nicknames Sasha. One photo on ViralReel, seven samples, vertical 9:16, 5–15 seconds. Not ViralRemix’s 3:4 Kling O3 page. No song license.',
      zh: 'fairytale catrina ai：《生命之书》的造型，西语区 TikTok 昵称 Sasha。在 ViralReel 用一张照片、七个样本、竖屏 9:16、5–15 秒。不是 ViralRemix 的 3:4 Kling O3 页面。不授权歌曲。',
    },
    h1: { en: 'Fairytale Catrina AI', zh: 'Fairytale Catrina AI' },
    lead: {
      en: 'Fairytale Catrina is the Book of Life look. Spanish-language TikTok calls her Sasha. On ViralReel you make it from one photo at the Sasha La Catrina hub: seven samples, vertical 9:16.',
      zh: 'Fairytale Catrina 就是《生命之书》的造型。西语区 TikTok 叫她 Sasha。在 ViralReel，你用一张照片在 Sasha La Catrina 主页上做：七个样本，竖屏 9:16。',
    },
    guideTitle: { en: 'Same reveal, the name the rival uses in the title', zh: '同一次变身，对手写在标题里的名字' },
    body: {
      en: [
        `Fairytale Catrina AI is not a second product. It is the sugar-skull paint, the lace gown, and the marigold light from The Book of Life. “Sasha” is the nickname on the captions — “adiós Sasha, adiós señora bonita” — and the hub that renders it is ${T}. ${SAMPLES_EN} ${SLOTS_EN}`,
        `${RIVAL_EN} ${DIFF_EN} ViralReel’s frame is 9:16, which is the TikTok and Reels shape. Their checked example is 3:4.`,
        `${SOUND_EN} ${CAPCUT_EN} ${LIMIT_EN} ChatGPT can point here and still cannot render the file: https://www.viralreel.app/sasha-la-catrina-chatgpt. The roundup is ${ROUNDUP}.`,
      ],
      zh: [
        `Fairytale Catrina AI 不是第二个产品。它是《生命之书》里的糖骷髅妆、蕾丝裙和万寿菊金光。「Sasha」是文案里的爱称——「adiós Sasha, adiós señora bonita」——渲染它的主页在 ${TZ} 。${SAMPLES_ZH} ${SLOTS_ZH}`,
        `${RIVAL_ZH} ${DIFF_ZH} ViralReel 的画幅是 9:16，也就是 TikTok 和 Reels 的形状。他们核对过的示例是 3:4。`,
        `${SOUND_ZH} ${CAPCUT_ZH} ${LIMIT_ZH} ChatGPT 可以指向这里，但仍然不能渲染文件：https://www.viralreel.app/zh/sasha-la-catrina-chatgpt 。总览在 ${ROUNDUPZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Fairytale Catrina the same as Sasha La Catrina?', zh: 'Fairytale Catrina 和 Sasha La Catrina 是同一个吗？' },
        a: {
          en: `Yes on ViralReel. Sasha is the nickname. The generator is ${T}.`,
          zh: `在 ViralReel 上是的。Sasha 是爱称。生成器在 ${TZ} 。`,
        },
      },
      {
        q: { en: 'Is this ViralRemix’s Fairytale Catrina page?', zh: '这是 ViralRemix 的 Fairytale Catrina 页面吗？' },
        a: {
          en: `No. Their page is ${REMIX}: about 11 clips, Kling O3 Edit, a sample at about 15 seconds, 3:4, 720p, $9.90 a single use, checked 2 November 2026. ViralReel is seven samples at 9:16.`,
          zh: `不是。他们的页面在 ${REMIX}：大约 11 条片段、Kling O3 Edit、样本大约 15 秒、3:4、720p、单次 $9.90，2026 年 11 月 2 日核对。ViralReel 是七个样本、9:16。`,
        },
      },
    ],
  },
  {
    keyword: 'catrin ai',
    slug: 'catrin-ai',
    title: {
      en: 'Catrín AI – The Male Video Reveal, Not a Makeup Still',
      zh: 'Catrín AI：男版视频变身，不是妆容静帧',
    },
    description: {
      en: 'catrin ai: the male Book of Life reveal on ViralReel. One photo, the Catrín sample, sugar-skull paint, suit, wide hat, 9:16. Not MakeViral’s Catrín makeup portrait. No song license.',
      zh: 'catrin ai：ViralReel 上的男版《生命之书》变身。一张照片、Catrín 样本、糖骷髅妆、西装、宽檐帽、9:16。不是 MakeViral 的 Catrín 妆容肖像。不授权歌曲。',
    },
    h1: { en: 'Catrín AI', zh: 'Catrín AI' },
    lead: {
      en: 'Catrín is the male version of the fairytale reveal: sugar-skull paint, a sharp suit, a wide hat. On ViralReel it is a video sample, not a makeup still. One photo of a man who agreed.',
      zh: 'Catrín 是童话变身的男版：糖骷髅妆、利落的西装、宽檐帽。在 ViralReel 上它是一个视频样本，不是妆容静帧。一张同意出镜的男士照片。',
    },
    guideTitle: { en: 'A video reveal, not face paint in a still', zh: '一次视频变身，不是静帧里的面妆' },
    body: {
      en: [
        `Open ${T} and pick Catrín. The sample covers the face at the ofrenda and comes back as the male counterpart. ${RATIO_EN} ${SLOTS_EN} La Catrina is the gown. A Catrín is the suit. They are not the same card.`,
        `MakeViral’s page at ${MAKEVIRAL} includes a Catrín look, and it is a makeup still (Nano Banana), not this flower-toss or ofrenda video. The split is https://www.viralreel.app/catrina-makeup-vs-ai. ViralReel is not a makeup tool. ViralRemix also shows male reference clips on ${REMIX}. Those are their clips. This page is the ViralReel sample.`,
        `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN} Grandmother, the older woman’s parade sample, stays on the hub. It is not the male card.`,
      ],
      zh: [
        `打开 ${TZ} ，选 Catrín。样本在祭坛前掩面，再以男版回来。${RATIO_ZH} ${SLOTS_ZH} La Catrina 是裙装。Catrín 是西装。它们不是同一张卡片。`,
        `MakeViral 的页面 ${MAKEVIRAL} 有 Catrín 造型，而且它是妆容静帧（Nano Banana），不是这次撒花或祭坛视频。区分在 https://www.viralreel.app/zh/catrina-makeup-vs-ai 。ViralReel 不是化妆工具。ViralRemix 在 ${REMIX} 也展示男版参考片段。那些是他们的片段。这一页是 ViralReel 的样本。`,
        `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH} 游行奶奶，年长女性的游行样本，仍在主页上。它不是男版卡片。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Catrín AI a makeup filter?', zh: 'Catrín AI 是化妆滤镜吗？' },
        a: {
          en: 'Not on ViralReel. It is a video reveal of the male look. A makeup still, including MakeViral’s Catrín portrait, is a different product.',
          zh: '在 ViralReel 上不是。它是男版造型的视频变身。妆容静帧，包括 MakeViral 的 Catrín 肖像，是另一个产品。',
        },
      },
      {
        q: { en: 'How many photos does the male version take?', zh: '男版要几张照片？' },
        a: {
          en: 'One clear front-facing photo. Hands off the face. A pair version takes Image 2 only when the generator shows that slot.',
          zh: '一张清晰的正面照。手别挡脸。双人版只有在生成器显示那个位置时才传照片 2。',
        },
      },
    ],
  },
];
