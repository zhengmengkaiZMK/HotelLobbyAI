import type { BicepHeartLongTailEntry } from './long-tails';

/**
 * Intent pages for Bicep Heart (ChatGPT-style "how do I make…" queries).
 * Served by `(home)/[slug]` through BicepHeartLongTailRoute. Do not add a
 * per-slug page.tsx. Thin content only — routes reuse LongTailRoute and the
 * shared OG image. No minors, celebrities, or public figures.
 */

const T = 'https://www.viralreel.app/bicep-heart-ai-template';
const TZ = 'https://www.viralreel.app/zh/bicep-heart-ai-template';
const POSE = 'https://www.viralreel.app/bicep-heart-pose';
const POSEZ = 'https://www.viralreel.app/zh/bicep-heart-pose';
const SONG = 'https://www.viralreel.app/bicep-heart-song';
const SONGZ = 'https://www.viralreel.app/zh/bicep-heart-song';
const PHOTOT = 'https://www.viralreel.app/bicep-heart-photo-tips';
const PHOTOTZ = 'https://www.viralreel.app/zh/bicep-heart-photo-tips';
const CAPCUT = 'https://www.viralreel.app/bicep-heart-capcut';
const CAPCUTZ = 'https://www.viralreel.app/zh/bicep-heart-capcut';
const TREND = 'https://www.viralreel.app/bicep-heart-trend';
const TRENDZ = 'https://www.viralreel.app/zh/bicep-heart-trend';
const FREE = 'https://www.viralreel.app/bicep-heart-free';
const FREEZ = 'https://www.viralreel.app/zh/bicep-heart-free';

const steps = 'shared' as const;

const PHOTO_EN =
  'One clear photo of a consenting adult: waist-up, facing the camera, both arms visible and not crossed, hands free. Short sleeves help, and leaving space beside both elbows keeps the flex in frame.';
const PHOTO_ZH =
  '一张清晰的成年人照片（经本人同意）：半身入镜、正对镜头、双臂可见且没有交叉、双手空着。短袖更好，两侧手肘外留出空间。';
const SOUND_EN =
  'The export is silent; add the bicep heart trend sound in TikTok, Reels, or Shorts and turn on the AI-generated label. ViralReel does not license the trend audio.';
const SOUND_ZH =
  '导出无声；在 TikTok、Reels 或 Shorts 里加 bicep heart 热梗原声，并打开 AI 生成标注。ViralReel 不授权热梗音频。';

export const BICEP_HEART_INTENT_TAILS: readonly BicepHeartLongTailEntry[] = [
  {
    keyword: 'how to make a bicep heart ai video',
    slug: 'how-to-make-bicep-heart-ai-video',
    title: {
      en: 'How to Make a Bicep Heart AI Video – 4 Steps, One Photo',
      zh: '如何制作 Bicep Heart AI 视频：4 步，一张照片',
    },
    description: {
      en: 'how to make a bicep heart ai video: pick a set, upload one photo, keep 9:16 and 7 seconds, download, add the trend sound and the AI label. Full steps for the ViralReel template.',
      zh: 'how to make a bicep heart ai video：选阵容、传照片、保持 9:16 和 7 秒、下载后加热梗原声和 AI 标注。ViralReel 模板的完整步骤。',
    },
    h1: { en: 'How to make a bicep heart AI video', zh: '如何制作 bicep heart AI 视频' },
    lead: {
      en: 'Four steps, one photo: pick a set, upload, generate, and post with the trend sound and an AI label. Nothing to film, nothing to edit.',
      zh: '四步，一张照片：选阵容、上传、生成，再配热梗原声和 AI 标注发布。不用拍，不用剪。',
    },
    guideTitle: {
      en: 'How to make a bicep heart AI video, step by step',
      zh: '如何制作 bicep heart AI 视频：逐步教程',
    },
    body: {
      en: [
        `Step zero is the photo. ${PHOTO_EN} A vertical original beats a recompressed screenshot.`,
        `Then the render. Open ${T}, pick one of five sets — Gym Buff Heart, Everyday Heart, Cat Bicep Heart, Dog Bicep Heart, or Original Trend — and upload the photo into the single slot labeled Your Photo. Keep the ratio on 9:16 and the length on 7 seconds, read the credit line, and press Generate. The clip lands in My generations in about 2–3 minutes; failed jobs refund automatically.`,
        `Then the posting. ${SOUND_EN} The pose, the timing, and the beat-by-beat breakdown are at ${POSE} if you want to understand what the render is doing.`,
      ],
      zh: [
        `第零步是照片。${PHOTO_ZH} 竖版原图胜过反复压缩的截图。`,
        `然后是渲染。打开 ${TZ} ，五套阵容里选一套——健身猛男、日常小心心、猫咪比心、狗狗比心、原梗复刻——把照片传进唯一的「你的照片」位置。画幅保持 9:16、时长 7 秒，看清积分行，点「立即生成」。约 2-3 分钟后出片在「我的生成」里；失败任务自动退积分。`,
        `最后是发布。${SOUND_ZH} 想理解渲染在做什么，姿势与逐拍拆解在 ${POSEZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can ChatGPT make the MP4?', zh: 'ChatGPT 能直接做出 MP4 吗？' },
        a: {
          en: 'No. ChatGPT can explain the steps — the MP4 is rendered in the browser at the ViralReel template page, not inside the chat.',
          zh: '不能。ChatGPT 可以讲步骤——MP4 在 ViralReel 模板页的浏览器里渲染，不在对话里。',
        },
      },
      {
        q: { en: 'How long does the whole flow take?', zh: '整个流程要多久？' },
        a: {
          en: 'Under a minute of setup and about 2–3 minutes of render. First-time accounts also need a sign-up, which is another minute.',
          zh: '设置不到一分钟，渲染约 2-3 分钟。新账号还要注册一次，再加一分钟。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart ai free',
    slug: 'bicep-heart-ai-free',
    title: {
      en: 'Bicep Heart AI Free – Starter Credits and What They Cover',
      zh: 'Bicep Heart AI 免费：新手积分能做什么',
    },
    description: {
      en: 'bicep heart ai free: new ViralReel accounts include starter credits that cover a first 7-second bicep heart render. Not free forever — packs and plans after that, cost shown before every render.',
      zh: 'bicep heart ai free：新 ViralReel 账号自带新手积分，够渲染第一条 7 秒比心。不是永远免费——之后用积分包或月付，每次渲染前显示费用。',
    },
    h1: { en: 'Bicep heart AI free', zh: 'Bicep heart AI 免费' },
    lead: {
      en: 'Yes, there is a free start: sign-up credits cover a first bicep heart render. It is not a daily free video, and it is not free forever.',
      zh: '有免费的开始：注册积分够做第一条 bicep heart。不是每日免费一条，也不是永远免费。',
    },
    guideTitle: {
      en: 'What free covers, and what comes after',
      zh: '免费覆盖什么，之后是什么',
    },
    body: {
      en: [
        'ViralReel runs on credits. The starter credits at sign-up are a one-time grant — enough to render a first template video at 720p, which covers the bicep heart\'s fixed 7-second format. The generator always shows the credit cost before you press Generate, so nothing is charged blind.',
        `After the starter credits: one-time credit packs at the pricing page or a monthly plan on the subscribe page. Failed renders refund automatically. The full cost picture is at ${FREE}.`,
        `Try it at ${T}. ${SOUND_EN}`,
      ],
      zh: [
        'ViralReel 按积分运行。注册时的新手积分是一次性发放——够在 720p 渲染第一条模板视频，覆盖 bicep heart 固定 7 秒的格式。生成器在你点「立即生成」之前总会显示积分费用，不会盲扣。',
        `新手积分之后：在定价页买一次性积分包，或在订阅页订月付。失败渲染自动退积分。完整的费用说明在 ${FREEZ} 。`,
        `在 ${TZ} 试第一条。${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is there a free trial without signing up?', zh: '不注册能免费试用吗？' },
        a: {
          en: 'No. Renders need an account so the output has somewhere to land and failed jobs can refund. Sign-up is one minute.',
          zh: '不能。渲染需要账号，这样成片有地方存、失败任务能退积分。注册只要一分钟。',
        },
      },
      {
        q: { en: 'Do free credits expire?', zh: '新手积分会过期吗？' },
        a: {
          en: 'Starter credits are granted once at sign-up; current pack and expiry terms are listed on the pricing page.',
          zh: '新手积分在注册时一次性发放；当前积分包与有效期条款以定价页为准。',
        },
      },
    ],
  },
  {
    keyword: 'make bicep heart ai',
    slug: 'make-bicep-heart-ai',
    title: {
      en: 'Make a Bicep Heart AI – The Shortest Path From Photo to Post',
      zh: 'Make a Bicep Heart AI：从照片到发布的最近路径',
    },
    description: {
      en: 'make bicep heart ai: the shortest path is one photo, one set, one click on the ViralReel template. No prompt, no app, no CapCut project. 7 seconds, 9:16, silent MP4.',
      zh: 'make bicep heart ai：最短路径是一张照片、一套阵容、在 ViralReel 模板上点一次生成。没有提示词、不用装 App、不用 CapCut 工程。7 秒，9:16，无声 MP4。',
    },
    h1: { en: 'Make a bicep heart AI', zh: 'Make a bicep heart AI' },
    lead: {
      en: 'To make a bicep heart AI clip you need exactly one input — one photo — and one page: the ViralReel template.',
      zh: '做 bicep heart AI 只需要一个输入——一张照片——和一个页面：ViralReel 模板。',
    },
    guideTitle: {
      en: 'The shortest path, end to end',
      zh: '最短路径，从头到尾',
    },
    body: {
      en: [
        `The whole flow: open ${T}, pick a set, upload one photo into Your Photo, keep 9:16 and 7 seconds, and generate. ${PHOTO_EN}`,
        'There is nothing between the upload and the render: no prompt box, no timeline, no keyframes. The template already contains the shy smile, the sleeve push, the flex on the beat, the heart on the next, and the held reveal.',
        `${SOUND_EN} If a friend asks "how did you make that", the answer is one URL and one photo.`,
      ],
      zh: [
        `整个流程：打开 ${TZ} ，选一套阵容，把一张照片传进「你的照片」，保持 9:16 和 7 秒，生成。${PHOTO_ZH}`,
        '上传和渲染之间没有任何步骤：没有提示词框、没有时间线、没有关键帧。模板里已经装好了害羞一笑、推袖子、踩节拍的弯举、下一拍的比心，和定格的揭晓。',
        `${SOUND_ZH} 如果朋友问「这怎么做的」，答案是一个网址加一张照片。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I make several sets from the same photo?', zh: '同一张照片可以做多套阵容吗？' },
        a: {
          en: 'Yes. Re-run the same photo in another set without uploading again — each render is a separate job and shows its own credit cost.',
          zh: '可以。同一张照片换阵容重跑，不用重新上传——每次渲染是独立任务，各自显示积分。',
        },
      },
      {
        q: { en: 'What if the heart does not close cleanly?', zh: '如果心没合干净怎么办？' },
        a: {
          en: 'Re-roll. Hand placement can vary between renders; a second run usually settles it, and failed jobs refund automatically.',
          zh: '重跑一次。每次渲染的手部形态会有差异；重跑通常就能合上，失败任务自动退积分。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart generator',
    slug: 'bicep-heart-generator',
    title: {
      en: 'Bicep Heart Generator – What It Takes and What It Returns',
      zh: 'Bicep Heart 生成器：需要什么，返回什么',
    },
    description: {
      en: 'bicep heart generator: inputs are one photo and a set; outputs are a silent 7-second 9:16 MP4 in about 2–3 minutes. Credit cost shown before you start, failed jobs refunded.',
      zh: 'bicep heart generator：输入是一张照片和一套阵容；输出是约 2-3 分钟后的一条无声 7 秒 9:16 MP4。开始前显示积分，失败自动退。',
    },
    h1: { en: 'Bicep heart generator', zh: 'Bicep heart 生成器' },
    lead: {
      en: 'The bicep heart generator takes one photo and returns the whole pose performed by the person in it — 7 seconds, 9:16, silent.',
      zh: 'Bicep heart 生成器只要一张照片，返回照片里的人演完整套姿势——7 秒，9:16，无声。',
    },
    guideTitle: {
      en: 'Inputs, outputs, and limits',
      zh: '输入、输出与限制',
    },
    body: {
      en: [
        'Inputs: one photo (waist-up adult, arms visible), the set you pick, the resolution, and nothing else — the pose is fixed. The Cat and Dog sets take a pet photo instead.',
        `Outputs: a new silent 7-second 9:16 MP4, usually ready in about 2–3 minutes, saved to My generations for download. Make it at ${T}. ${PHOTO_EN}`,
        `Limits: one person per render (the pose is single-subject), no licensed soundtrack in the file, and hand placement can vary between runs. ${SOUND_EN} The CapCut comparison is at ${CAPCUT}.`,
      ],
      zh: [
        '输入：一张照片（半身、成年人、双臂可见）、你选的阵容、分辨率，仅此而已——姿势是固定的。猫咪和狗狗套装改用宠物照片。',
        `输出：一条新的无声 7 秒 9:16 MP4，通常约 2-3 分钟完成，存到「我的生成」里下载。在 ${TZ} 制作。${PHOTO_ZH}`,
        `限制：每次渲染一个人（姿势是单人格式）、文件里没有已授权的配乐、每次运行的手部形态可能有差异。${SOUND_ZH} CapCut 对照在 ${CAPCUTZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can two people make one heart together in the generator?', zh: '两个人能一起在生成器里比一颗心吗？' },
        a: {
          en: 'Not in this template — the bicep heart is a single-subject pose with one photo slot. Generate each person separately.',
          zh: '这个模板不行——bicep heart 是单人姿势，只有一个照片位。请每个人单独生成。',
        },
      },
      {
        q: { en: 'Does the generator work on phones?', zh: '生成器在手机上能用吗？' },
        a: {
          en: 'Yes. The whole flow runs in the mobile browser: shoot or pick a photo, generate, download, and post from the same device.',
          zh: '可以。整个流程都在手机浏览器里完成：拍或选照片、生成、下载，然后在同一台设备上发布。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart without capcut',
    slug: 'bicep-heart-without-capcut',
    title: {
      en: 'Bicep Heart Without CapCut – The Browser Path',
      zh: 'Bicep Heart 不用 CapCut：浏览器路径',
    },
    description: {
      en: 'bicep heart without capcut: make the 7-second clip in the browser with the ViralReel template — one photo, no app install, no template hunting, credit cost shown up front.',
      zh: 'bicep heart without capcut：用 ViralReel 模板在浏览器里做 7 秒片子——一张照片、不装 App、不用找模板，开始前显示积分。',
    },
    h1: { en: 'Bicep heart without CapCut', zh: 'Bicep heart 不用 CapCut' },
    lead: {
      en: 'You do not need CapCut for the bicep heart trend. The whole clip renders in the browser from one photo.',
      zh: '玩 bicep heart 不需要 CapCut。整条片子在浏览器里用一张照片就能渲染。',
    },
    guideTitle: {
      en: 'Skipping the editing app entirely',
      zh: '完全跳过剪辑 App',
    },
    body: {
      en: [
        'CapCut is an editor — you open it to assemble clips. The bicep heart needs no assembly: the pose, the timing, and the camera are one fixed template. A browser generator skips the install, the template hunt among lookalikes, and the phone export queue.',
        `The path: open ${T}, upload one photo, pick a set, generate. ${PHOTO_EN} The download is a finished 7-second 9:16 MP4. The full comparison with the CapCut path is at ${CAPCUT}.`,
        `${SOUND_EN} Everything after the download happens inside TikTok, Reels, or Shorts anyway — so the editing app was never the missing piece.`,
      ],
      zh: [
        'CapCut 是剪辑工具——打开它是为了拼片子。Bicep heart 不需要拼：姿势、节奏和机位是一个固定模板。浏览器生成器省掉了安装、在一堆相似模板里翻找、以及手机导出排队。',
        `路径：打开 ${TZ} ，上传一张照片，选一套阵容，生成。${PHOTO_ZH} 下载到的就是成品 7 秒 9:16 MP4。与 CapCut 路径的完整对照在 ${CAPCUTZ} 。`,
        `${SOUND_ZH} 下载之后的一切本来就在 TikTok、Reels 或 Shorts 里发生——剪辑 App 从来都不是缺的那块。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the CapCut bicep heart template the same as ViralReel\'s?', zh: 'CapCut 的 bicep heart 模板和 ViralReel 的一样吗？' },
        a: {
          en: 'No. They are different products from different makers. ViralReel does not set CapCut\'s terms; its own template is fixed at 7 seconds, one photo, silent export.',
          zh: '不一样。两者是不同厂商的不同产品。ViralReel 不决定 CapCut 的条款；自己的模板固定为 7 秒、一张照片、无声导出。',
        },
      },
      {
        q: { en: 'Do I lose quality by skipping CapCut?', zh: '不用 CapCut 画质会变差吗？' },
        a: {
          en: 'No. You pick the resolution in the generator, and the MP4 downloads as rendered — there is no extra compression step.',
          zh: '不会。分辨率在生成器里选，MP4 按渲染结果直接下载——没有额外的压缩环节。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart ai label',
    slug: 'bicep-heart-ai-label',
    title: {
      en: 'Bicep Heart AI Label – Turn It On When You Post',
      zh: 'Bicep Heart AI 标注：发布时打开它',
    },
    description: {
      en: 'bicep heart ai label: AI-generated bicep heart clips should carry the AI label on TikTok, Instagram, and YouTube. What the label is, where the toggle is, and why it does not hurt reach.',
      zh: 'bicep heart ai label：AI 生成的比心视频在 TikTok、Instagram 和 YouTube 上应带 AI 标注。这个标注是什么、开关在哪里、为什么不影响流量。',
    },
    h1: { en: 'Bicep heart AI label', zh: 'Bicep heart AI 标注' },
    lead: {
      en: 'If your bicep heart clip is generated, the AI label is part of posting it properly — a toggle inside TikTok, Instagram, or YouTube, not inside the template.',
      zh: '如果你的比心片子是 AI 生成的，AI 标注就是正确发布的一部分——开关在 TikTok、Instagram 或 YouTube 里，不在模板里。',
    },
    guideTitle: {
      en: 'The label, the toggle, and the reach question',
      zh: '标注、开关，与流量问题',
    },
    body: {
      en: [
        `The AI label is a posting step, not a switch inside the template. Make the MP4 at ${T}. Download it. Upload it in TikTok, Instagram Reels, or YouTube Shorts, and turn on the AI-generated control that app shows before publishing.`,
        `ViralReel does not turn the label on for you — the file has no room for platform metadata, and the disclosure belongs to the platform where you publish. The sound step is the same: ${SOUND_EN}`,
        'Does the label hurt reach? On this trend, no — the biggest AI-adjacent formats spread with the label on, and TikTok\'s policy asks generated content to be disclosed regardless. A caption that says "AI bicep heart for you" matches the file and keeps the joke.',
      ],
      zh: [
        `AI 标注是发布步骤，不是模板里的开关。在 ${TZ} 做 MP4。下载。在 TikTok、Instagram Reels 或 YouTube Shorts 里上传，并在发布前打开该 App 显示的 AI 生成开关。`,
        `ViralReel 不会替你打开标注——文件里没有平台元数据的空间，披露义务属于你发布的平台。加原声的步骤同理：${SOUND_ZH}`,
        '标注影响流量吗？在这个趋势里不会——最火的相关格式都是带着标注传播的，而且 TikTok 的政策本就要求生成内容如实披露。文案写「AI bicep heart for you」既诚实又不影响笑点。',
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the AI label optional because the clip is a parody?', zh: '因为是玩梗，AI 标注可以不打吗？' },
        a: {
          en: 'No. The file is AI-generated. Use the AI label the platform provides — disclosure is about how the file was made, not about whether it is a joke.',
          zh: '不行。文件是 AI 生成的。请使用平台提供的 AI 标注——披露的是文件的制作方式，与是否玩梗无关。',
        },
      },
      {
        q: { en: 'Do I still label it if I only used my own photo?', zh: '只用我自己的照片也要标吗？' },
        a: {
          en: 'Yes. The label describes the content being AI-generated, not the rights to the photo. Both still apply: your consent covers the photo, the label covers the render.',
          zh: '要。标注说明的是内容为 AI 生成，与照片权利无关。两件事同时成立：同意书覆盖照片，标注覆盖渲染。',
        },
      },
    ],
  },
];
