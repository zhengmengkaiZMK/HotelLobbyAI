import type { BicepHeartLongTailEntry } from './long-tails';

/**
 * Cite/disambiguation pages for Bicep Heart — searches that mix the trend up
 * with neighboring poses, tools, or questions. Served by `(home)/[slug]`
 * through BicepHeartLongTailRoute. Do not add a per-slug page.tsx.
 * No competitors named or priced. No minors, celebrities, or public figures.
 */

const T = 'https://www.viralreel.app/bicep-heart-ai-template';
const TZ = 'https://www.viralreel.app/zh/bicep-heart-ai-template';
const POSE = 'https://www.viralreel.app/bicep-heart-pose';
const POSEZ = 'https://www.viralreel.app/zh/bicep-heart-pose';
const SONG = 'https://www.viralreel.app/bicep-heart-song';
const SONGZ = 'https://www.viralreel.app/zh/bicep-heart-song';
const MEANING = 'https://www.viralreel.app/bicep-heart-meaning';
const MEANINGZ = 'https://www.viralreel.app/zh/bicep-heart-meaning';
const TREND = 'https://www.viralreel.app/bicep-heart-trend';
const TRENDZ = 'https://www.viralreel.app/zh/bicep-heart-trend';
const PHOTOT = 'https://www.viralreel.app/bicep-heart-photo-tips';
const PHOTOTZ = 'https://www.viralreel.app/zh/bicep-heart-photo-tips';

const steps = 'shared' as const;

const PHOTO_EN =
  'One clear photo of a consenting adult: waist-up, facing the camera, both arms visible and not crossed, hands free, with space beside both elbows.';
const PHOTO_ZH =
  '一张清晰的成年人照片（经本人同意）：半身入镜、正对镜头、双臂可见且没有交叉、双手空着，两侧手肘外留出空间。';
const SOUND_EN =
  'The export is silent; add the bicep heart trend sound in TikTok, Reels, or Shorts and turn on the AI-generated label.';
const SOUND_ZH =
  '导出无声；在 TikTok、Reels 或 Shorts 里加 bicep heart 热梗原声，并打开 AI 生成标注。';

export const BICEP_HEART_CITE_TAILS: readonly BicepHeartLongTailEntry[] = [
  {
    keyword: 'bicep heart vs overhead heart',
    slug: 'bicep-heart-vs-overhead-heart',
    title: {
      en: 'Bicep Heart vs Overhead Heart – Two Different Poses',
      zh: 'Bicep Heart 与双手比心：两种不同的姿势',
    },
    description: {
      en: 'bicep heart vs overhead heart: one is a small heart closed against a flexed bicep, the other is both arms raised above the head. The poses, the meanings, and the search terms, kept straight.',
      zh: 'bicep heart vs overhead heart：一个是贴在弯举肱二头肌上的小心心，一个是双臂举过头顶拼成的心。姿势、含义和搜索词，一次分清。',
    },
    h1: { en: 'Bicep heart vs overhead heart', zh: 'Bicep heart 与双手比心' },
    lead: {
      en: 'A bicep heart is small and sits against one flexed upper arm. An overhead heart is big and made with both arms above the head. Different poses, different vibes.',
      zh: 'Bicep heart 是贴在一条弯曲上臂上的小心心。Overhead heart 是双臂举过头顶拼成的大心。不同姿势，不同气质。',
    },
    guideTitle: {
      en: 'Two hearts, kept straight',
      zh: '两颗心，一次分清',
    },
    body: {
      en: [
        'The bicep heart: one arm bends up with the fist beside the head; the other hand curls against the bicep, fingers under the fist, thumb on the muscle. It is small, personal, and slightly ironic — a strength flex carrying a soft message, usually sent to one person.',
        'The overhead heart: both arms rise above the head and the hands meet to form one big heart. It is a celebration gesture — concerts, group photos, sports — with none of the gym framing. The two poses share almost nothing except the word heart, which is exactly why mixing the search terms returns the wrong videos.',
        `If you came for the bicep heart, make it at ${T}. ${PHOTO_EN} The finger placement is at ${POSE}, and the meaning comparison is at ${MEANING}.`,
      ],
      zh: [
        'Bicep heart：一条手臂弯起、拳头靠在头边；另一只手扣在肱二头肌上，手指勾在拳头下、拇指抵在肌肉上。它小、私人、带一点反讽——健身的硬核姿势装着柔软的心意，通常只发给一个人。',
        'Overhead heart：双臂举过头顶、双手合拢拼成一颗大心。它是庆祝手势——演唱会、合影、体育看台——没有任何健身语境。两个姿势除了「心」这个词几乎没有任何共同点，这也正是搜索词混用会搜错视频的原因。',
        `如果你要的是 bicep heart，在 ${TZ} 制作。${PHOTO_ZH} 手指位置在 ${POSEZ} ，含义对照在 ${MEANINGZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Which one is the TikTok trend?', zh: 'TikTok 上流行的是哪一个？' },
        a: {
          en: 'The bicep heart — the #bicepheart trend of late October 2026 is the one-arm flex with the hand curled against the bicep.',
          zh: '是 bicep heart——2026 年 10 月底的 #bicepheart 趋势，就是单臂弯举加另一只手扣肱二头肌的那个。',
        },
      },
      {
        q: { en: 'Can the template do an overhead heart?', zh: '模板能做双手比心吗？' },
        a: {
          en: 'Not this template — it is fixed to the bicep heart pose, 7 seconds, one photo. An overhead heart is a different format.',
          zh: '这个模板不能——它固定为比心弯举姿势、7 秒、一张照片。双手比心是另一种格式。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart prompt',
    slug: 'bicep-heart-prompt',
    title: {
      en: 'Bicep Heart Prompt – There Is No Prompt Box on ViralReel',
      zh: 'Bicep Heart 提示词：ViralReel 上没有提示词框',
    },
    description: {
      en: 'bicep heart prompt: you do not write one. The ViralReel template presets the pose, timing and camera — one photo is the only input. What a prompt-style tool would need, for comparison.',
      zh: 'bicep heart prompt：不用写。ViralReel 模板预设了姿势、节奏和机位——唯一的输入是一张照片。顺带讲清提示词类工具需要什么，作对照。',
    },
    h1: { en: 'Bicep heart prompt', zh: 'Bicep heart 提示词' },
    lead: {
      en: 'Searching for a bicep heart prompt? On ViralReel there is none to write: the template carries the whole scene, and your photo is the only input.',
      zh: '在搜 bicep heart 提示词？在 ViralReel 上不用写：模板自带整个场景，你的照片是唯一输入。',
    },
    guideTitle: {
      en: 'Why no prompt is needed',
      zh: '为什么不需要提示词',
    },
    body: {
      en: [
        'Prompt-based video tools ask you to describe the subject, the motion, the camera and the timing in text, and then hope the model follows. The bicep heart needs none of that: the shy smile, the sleeve push, the flex on the beat, the heart on the next, and the held reveal are preset in the template. You supply one photo; the scene and the motion come with the page.',
        `That is the difference between a fixed template and a prompt box. Open ${T}, upload one photo, pick a set, generate. ${PHOTO_EN} The credit cost shows before you start.`,
        `${SOUND_EN} If you do use a prompt-style tool, describe the exact pose (fist beside the head, fingers hooking under the fist, thumb on the bicep) — the beat-by-beat breakdown at ${POSE} doubles as the description.`,
      ],
      zh: [
        '提示词类视频工具要求你用文字描述主体、动作、镜头和节奏，然后指望模型听话。Bicep heart 这些都不需要：害羞一笑、推袖子、踩节拍的弯举、下一拍的比心、定格的揭晓，全部预设在模板里。你只提供一张照片；场景和动作随页面自带。',
        `这就是固定模板和提示词框的区别。打开 ${TZ} ，上传一张照片，选一套阵容，生成。${PHOTO_ZH} 开始前会显示积分。`,
        `${SOUND_ZH} 如果你用的是提示词类工具，就把姿势描述准确（拳头靠头边、手指勾在拳下、拇指抵在肱二头肌上）—— ${POSEZ} 的逐拍拆解可以直接当描述用。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I edit the prompt to change the pose?', zh: '能改提示词换姿势吗？' },
        a: {
          en: 'Not on this template — the pose is the product. Changing the pose is what the prompt-style tools are for.',
          zh: '这个模板不能——姿势就是产品本身。换姿势是提示词类工具的活。',
        },
      },
      {
        q: { en: 'Is there a Kling-style prompt for the bicep heart?', zh: '有 Kling 那种风格的 bicep heart 提示词吗？' },
        a: {
          en: 'ViralReel does not use one — the template fixes the scene. Any prompt you find elsewhere describes a different tool\'s flow.',
          zh: 'ViralReel 不用提示词——场景由模板固定。别处看到的提示词描述的是其他工具的流程。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart kling',
    slug: 'bicep-heart-kling',
    title: {
      en: 'Bicep Heart on Kling-Style Tools vs the ViralReel Template',
      zh: 'Bicep Heart：Kling 类工具与 ViralReel 模板对照',
    },
    description: {
      en: 'bicep heart kling: what a motion-transfer video tool needs from you (prompt, reference clip, settings) versus what ViralReel needs (one photo). Output, cost, and effort compared.',
      zh: 'bicep heart kling：动作迁移类视频工具需要你准备什么（提示词、参考片段、参数），ViralReel 需要什么（一张照片）。输出、费用、人力一次比清。',
    },
    h1: { en: 'Bicep heart and Kling-style tools', zh: 'Bicep heart 与 Kling 类工具' },
    lead: {
      en: 'A Kling-style tool can make a bicep heart clip — if you bring the reference video, the prompt, and the settings. The ViralReel template needs one photo.',
      zh: 'Kling 类工具也能做比心片子——前提是你自带参考视频、提示词和参数。ViralReel 模板只要一张照片。',
    },
    guideTitle: {
      en: 'Two tool categories, one trend',
      zh: '两类工具，同一个趋势',
    },
    body: {
      en: [
        'Motion-transfer tools reproduce a reference video with the person from your image. For the bicep heart that means: find a trend clip you are allowed to use as reference, write a prompt describing the pose beat by beat, pick the model and settings, and iterate until the heart closes cleanly. Powerful — and a workflow, not a product page.',
        `The ViralReel template collapses that workflow: the reference motion, the timing and the camera are preset, and the only input is one photo. Open ${T}, upload, generate. ${PHOTO_EN} The credit cost shows before you start, and failed jobs refund.`,
        `${SOUND_EN} Whichever category you use, the posting step is identical: 9:16, the sound from the app library, the AI label on.`,
      ],
      zh: [
        '动作迁移类工具用你图里的人复现参考视频。做比心意味着：找一条你有权用作参考的趋势片段、写一段逐拍描述姿势的提示词、选模型和参数，再反复迭代直到心合干净。很强大——但那是一个工作流，不是产品页。',
        `ViralReel 模板把这个工作流压缩掉了：参考动作、节奏和机位都已预设，唯一输入是一张照片。打开 ${TZ} ，上传，生成。${PHOTO_ZH} 开始前显示积分，失败自动退。`,
        `${SOUND_ZH} 无论用哪类工具，发布步骤完全一样：9:16、从应用曲库加原声、打开 AI 标注。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need Kling for the bicep heart trend?', zh: '玩 bicep heart 需要 Kling 吗？' },
        a: {
          en: 'No. The ViralReel template renders the same pose from one photo, with no prompt and no reference clip to source.',
          zh: '不需要。ViralReel 模板用一张照片渲染同样的姿势，不用写提示词，也不用找参考片段。',
        },
      },
      {
        q: { en: 'Which gives better hands?', zh: '哪条路手部效果更好？' },
        a: {
          en: 'Hands vary in both categories. On ViralReel a re-roll is one click and failed jobs refund automatically; on prompt tools each iteration is a fresh setup.',
          zh: '两类工具的手部都会有波动。在 ViralReel 上重跑一键完成、失败自动退积分；在提示词工具上每次迭代都要重新设置。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart sleeper build',
    slug: 'bicep-heart-sleeper-build',
    title: {
      en: 'Bicep Heart vs Sleeper Build – Flex Trend vs Heart Trend',
      zh: 'Bicep Heart 与 Sleeper Build：弯举亮肌与弯举比心',
    },
    description: {
      en: 'bicep heart vs sleeper build: the older flex trend reveals muscle; the new one closes a heart against it. How the two formats relate, and which one the ViralReel template makes.',
      zh: 'bicep heart vs sleeper build：更早的弯举趋势是亮肌肉；新的这波是在肌肉上合一颗心。两种格式的关系，以及 ViralReel 模板做的是哪一个。',
    },
    h1: { en: 'Bicep heart vs sleeper build', zh: 'Bicep heart 与 sleeper build' },
    lead: {
      en: 'Sleeper build flexes to reveal muscle. Bicep heart flexes to close a heart. The second grew out of the first — but they are different formats.',
      zh: 'Sleeper build 弯举是为了亮肌肉。Bicep heart 弯举是为了合上一颗心。后者长在前者的土壤上——但它们是两种格式。',
    },
    guideTitle: {
      en: 'The flex trend and the heart trend',
      zh: '弯举趋势与比心趋势',
    },
    body: {
      en: [
        'Sleeper build is gym slang for someone who looks unassuming until they flex. Through 2026 TikTok ran a whole bicep trend on that reveal: a seemingly skinny arm bends, and real muscle appears. No heart, no send — the payoff is the muscle itself.',
        'The bicep heart keeps the flex and changes the payoff: the other hand curls against the bicep and the pose ends in a small heart, sent to someone as a bit of love. The captions ("send bicep hearts") belong to the heart format, not the muscle-reveal format.',
        `ViralReel\'s template is the heart format: one photo, 7 seconds, the shy smile through the held heart. Make it at ${T}. ${PHOTO_EN} The meaning comparison is at ${MEANING}.`,
      ],
      zh: [
        'Sleeper build 是健身房黑话：看着不起眼，一弯举全是肌肉。整个 2026 年 TikTok 都在玩这种揭秘式弯举：看似很瘦的手臂一弯，真肌肉出现。没有心、不发人——爆点就是肌肉本身。',
        'Bicep heart 保留了弯举、换掉了爆点：另一只手扣上肱二头肌，姿势定格在一颗小心心上，作为心意发给某个人。那些文案（「send bicep hearts」）属于比心格式，不属于亮肌格式。',
        `ViralReel 的模板是比心格式：一张照片、7 秒，从害羞一笑到定格的心。在 ${TZ} 制作。${PHOTO_ZH} 含义对照在 ${MEANINGZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the bicep heart part of the sleeper build trend?', zh: 'Bicep heart 算 sleeper build 趋势的一部分吗？' },
        a: {
          en: 'They share the flex culture, but no — the bicep heart is its own format with its own hashtag (#bicepheart) and its own captions.',
          zh: '它们共享弯举文化，但不算——bicep heart 是独立格式，有自己的标签（#bicepheart）和自己的文案。',
        },
      },
      {
        q: { en: 'Can the template make a muscle-reveal video?', zh: '模板能做亮肌视频吗？' },
        a: {
          en: 'No. The template is fixed to the bicep heart pose. A sleeper-build reveal is a different format.',
          zh: '不能。模板固定为比心弯举姿势。Sleeper build 揭秘是另一种格式。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart 7 seconds',
    slug: 'bicep-heart-7-seconds',
    title: {
      en: 'The Bicep Heart 7 Seconds, Beat by Beat',
      zh: 'Bicep Heart 的 7 秒，逐拍拆解',
    },
    description: {
      en: 'The 7-second bicep heart clip broken down second by second — smile, sleeve, flex, heart, hold — and why the ViralReel template locks that exact length.',
      zh: '7 秒比心逐秒拆解——微笑、袖子、弯举、比心、定格——以及 ViralReel 模板为什么锁定这个时长。',
    },
    h1: { en: 'The bicep heart 7 seconds', zh: 'Bicep heart 的 7 秒' },
    lead: {
      en: 'Seven seconds is the format: shy smile (0–0.5s), sleeve push (0.5–2.4s), flex on the beat (2.4–3s), heart on the next (3–4.2s), held reveal (4.2–7s).',
      zh: '7 秒就是格式：害羞一笑（0–0.5 秒）、推袖子（0.5–2.4 秒）、踩节拍弯举（2.4–3 秒）、下一拍比心（3–4.2 秒）、定格揭晓（4.2–7 秒）。',
    },
    guideTitle: {
      en: 'Why the clip is exactly 7 seconds',
      zh: '为什么片子正好 7 秒',
    },
    body: {
      en: [
        'The 7-second length is not a shortcut — it is the choreography. The smile buys attention, the sleeve push telegraphs that something is coming, the flex lands on a beat of the trend sound, the heart lands on the next, and the last three seconds hold the reveal long enough to screenshot.',
        `The ViralReel template locks that length on purpose: the only duration option for the bicep heart family is 7 seconds, so every render matches the timing of the viral originals. Make it at ${T}. ${PHOTO_EN}`,
        `${SOUND_EN} Watching your own render: judge the whole clip, not the last frame — a transition can look odd in isolation and read perfectly at full speed. The hand-by-hand pose guide is at ${POSE}.`,
      ],
      zh: [
        '7 秒不是图省事——它就是编排本身。微笑买下注意力，推袖子预告有事情要发生，弯举落在热梗原声的一个节拍上，比心落在下一个，最后三秒把揭晓保持到能截图为止。',
        `ViralReel 模板有意锁定这个时长：bicep heart 系列唯一的时长选项就是 7 秒，所以每次渲染都与爆火原片的时间轴对齐。在 ${TZ} 制作。${PHOTO_ZH}`,
        `${SOUND_ZH} 看自己的成片时，请看完整条而不是只看最后一帧——单独看转场可能怪，全速播放时却刚好。逐指姿势指南在 ${POSEZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I make a longer bicep heart video?', zh: '能做更长的比心视频吗？' },
        a: {
          en: 'Not on this template — 7 seconds is the only duration it offers, and it matches the trend. Longer clips would drift off the format.',
          zh: '这个模板不能——它只提供 7 秒一档，正好对齐趋势。更长的片子会跑出格式。',
        },
      },
      {
        q: { en: 'Do the beats line up with the sound?', zh: '节拍会和原声对上吗？' },
        a: {
          en: "The render is timed to the trend's beat pattern; add the sound in TikTok and the flex and heart land on their beats.",
          zh: '渲染节奏按趋势的节拍模式设计；在 TikTok 里加上原声后，弯举和比心会落在各自的节拍上。',
        },
      },
    ],
  },
  {
    keyword: 'bicep heart online',
    slug: 'bicep-heart-online',
    title: {
      en: 'Bicep Heart Online – Make the Clip in Your Browser',
      zh: 'Bicep Heart 在线做：在浏览器里完成整条片子',
    },
    description: {
      en: 'bicep heart online: the whole flow — upload, generate, download — runs in the browser on ViralReel. Nothing to install, nothing to edit, 7-second 9:16 MP4 out.',
      zh: 'bicep heart online：上传、生成、下载，全流程在 ViralReel 的浏览器里完成。不装任何东西、不剪任何东西，产出 7 秒 9:16 MP4。',
    },
    h1: { en: 'Bicep heart online', zh: 'Bicep heart 在线制作' },
    lead: {
      en: 'Bicep heart online means no app and no editor: the ViralReel template renders the whole 7-second clip in the browser from one photo.',
      zh: 'Bicep heart 在线做，意味着不用 App、不用剪辑：ViralReel 模板在浏览器里用一张照片渲染完整 7 秒片子。',
    },
    guideTitle: {
      en: 'The full online flow',
      zh: '完整的在线流程',
    },
    body: {
      en: [
        `Open ${T} in any modern browser, on desktop or phone. Pick one of nine sets — Gym Buff Heart, Everyday Heart, Cat Bicep Heart, Dog Bicep Heart, Original Trend, or a new trend replay. Upload one photo into the slot labeled Your Photo. ${PHOTO_EN}`,
        'Keep 9:16 and the fixed 7-second length, check the credit line, and generate. The render takes about 2–3 minutes; the finished MP4 waits in My generations, and the same photo can be re-run in another set without re-uploading.',
        `${SOUND_EN} From opening the page to having a postable file, the whole loop is one page — there is no second tool in the chain.`,
      ],
      zh: [
        `在任何现代浏览器的 ${TZ} 打开，桌面手机都行。九套阵容选一套——健身猛男、日常小心心、猫咪比心、狗狗比心、原梗复刻或新复刻版本。把一张照片传进「你的照片」。${PHOTO_ZH}`,
        '保持 9:16 和固定 7 秒时长，核对积分行，生成。渲染约 2-3 分钟；成片 MP4 在「我的生成」里等下载，同一张照片换阵容重跑不用重新上传。',
        `${SOUND_ZH} 从打开页面到拿到可发布文件，全程只有这一个页面——链路里没有第二个工具。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does it work on mobile Safari or Chrome?', zh: '手机 Safari 或 Chrome 上能用吗？' },
        a: {
          en: 'Yes. The flow is built for the mobile browser — shoot or pick a photo, generate, download, and post from the same device.',
          zh: '可以。整个流程为手机浏览器设计——拍照或选图、生成、下载，然后同一台设备直接发布。',
        },
      },
      {
        q: { en: 'Where do my videos go after rendering?', zh: '渲染完成后视频存在哪？' },
        a: {
          en: 'In My generations on your account, ready to download. Failed jobs are listed there too and their credits are refunded.',
          zh: '在你账号的「我的生成」里，随时可下载。失败任务也会列在那里，积分自动退回。',
        },
      },
    ],
  },
  {
    keyword: 'create bicep heart ai',
    slug: 'create-bicep-heart-ai',
    title: {
      en: 'Create a Bicep Heart AI Video – Start From One Photo',
      zh: 'Create a Bicep Heart AI：从一张照片开始',
    },
    description: {
      en: 'create bicep heart ai: create a new 7-second bicep heart clip on ViralReel from one photo — nine sets including pets, credit cost shown before you start, sound added in the app.',
      zh: 'create bicep heart ai：在 ViralReel 用一张照片创建新的 7 秒比心——九套阵容含宠物，开始前显示积分，原声在 App 里加。',
    },
    h1: { en: 'Create a bicep heart AI video', zh: 'Create a bicep heart AI 视频' },
    lead: {
      en: 'To create a bicep heart AI video you need one photo and one decision: which of the nine sets flexes it.',
      zh: '创建 bicep heart AI 视频需要一张照片和一个决定：让九套阵容里的哪一套来演它。',
    },
    guideTitle: {
      en: 'Creating your clip',
      zh: '创建你的片子',
    },
    body: {
      en: [
        `Create it at ${T}. The sets: Gym Buff Heart for a pronounced flex, Everyday Heart for a regular arm, Cat Bicep Heart and Dog Bicep Heart for pets, and Original Trend for the classic framing. ${PHOTO_EN}`,
        'The generator fixes the format for you: 9:16, 7 seconds, silent export. The credit cost appears under the button before you start, and the render lands in My generations in about 2–3 minutes.',
        `${SOUND_EN} The trend timeline, if you want the context before you post, is at ${TREND}, and the sound is at ${SONG}.`,
      ],
      zh: [
        `在 ${TZ} 创建。阵容：健身猛男（明显弯举）、日常小心心（普通手臂）、猫咪比心和狗狗比心（宠物）、原梗复刻（经典取景）。${PHOTO_ZH}`,
        '生成器替你把格式定死：9:16、7 秒、无声导出。开始前按钮下方显示积分，渲染约 2-3 分钟后落在「我的生成」里。',
        `${SOUND_ZH} 想在发布前了解背景，趋势时间线在 ${TRENDZ} ，原声在 ${SONGZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What do I need before I start?', zh: '开始前需要准备什么？' },
        a: {
          en: 'One photo that meets the checklist, an account, and enough credits — buy a credit pack or a plan in advance, since every render is paid and the generator shows the exact cost before you start. Nothing else.',
          zh: '一张符合清单的照片、一个账号、足够的积分——提前买好积分包或月付，每次渲染都计费，开始前生成器会显示确切费用。其他都不需要。',
        },
      },
      {
        q: { en: 'Can I create one for someone else?', zh: '可以替别人创建吗？' },
        a: {
          en: 'Yes, with their permission — a consenting adult\'s photo, or your own pet. Not celebrities or strangers.',
          zh: '可以，经对方同意——用同意的成年人照片，或你自己的宠物。不要用名人或陌生人。',
        },
      },
    ],
  },
];
