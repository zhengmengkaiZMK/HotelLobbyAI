import type { NostalgiaLongTailEntry } from './long-tails';

/**
 * Second-wave intent pages for NostalgIA CapCut.
 * Thin content only — routes reuse NostalgiaLongTailRoute and the shared OG
 * image. Do not claim a brand affiliation, a song license, or real ad dates.
 */

const T = 'https://www.viralreel.app/nostalgia-ai-template';
const TZ = 'https://www.viralreel.app/zh/nostalgia-ai-template';
const steps = 'shared' as const;

const ROLES_EN =
  "Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, and Star '85 are five lead roles of the same retro ad.";
const ROLES_ZH = '经典女主版、金发波波版、长发少年版、蝴蝶项链版和星条 85 版是同一支复古广告的五个主角位。';
const SOUND_EN =
  'The download carries the picture only. Add the trend sound in the TikTok, Reels, or Shorts sound picker and keep the AI label on. ViralReel does not license the audio.';
const SOUND_ZH =
  '下载文件只有画面。在 TikTok、Reels 或 Shorts 的曲库里另加热梗原声，并保留 AI 标注。ViralReel 不授权这段音频。';
const LIMIT_EN =
  'Use one clear photo of yourself or an adult (18+) who agreed to it. No minors, no celebrities, no strangers, and do not pass the output off as a genuine old commercial.';
const LIMIT_ZH =
  '用一张你本人或经同意的成年人（18+）的清晰照片。不要未成年人、名人或陌生人，也不要把成片伪装成真实的老广告。';

export const NOSTALGIA_INTENT_TAILS: readonly NostalgiaLongTailEntry[] = [
  {
    keyword: 'nostalgia template',
    slug: 'nostalgia-template',
    title: {
      en: 'NostalgIA Template – Five Lead Roles of the Retro Ad | ViralReel',
      zh: 'NostalgIA 模板：复古老广告的五个主角位 | ViralReel',
    },
    description: {
      en: 'nostalgia template: the five NostalgIA lead roles on ViralReel — Classic Sweetheart, Blonde Bob, Long Hair, Butterfly Necklace, Star 85. One photo, 8 seconds, 9:16, retro ad format built in.',
      zh: 'nostalgia template：ViralReel 的五个 NostalgIA 主角位——经典女主、金发波波、长发少年、蝴蝶项链、星条 85。一张照片，8 秒，9:16，复古广告格式内置。',
    },
    h1: { en: 'NostalgIA template variants', zh: 'NostalgIA 模板变体' },
    lead: {
      en: 'The NostalgIA template ships in five lead roles — the ad never changes, only who stars in it.',
      zh: 'NostalgIA 模板有五个主角位——广告从未变过，变的只是主角是谁。',
    },
    guideTitle: {
      en: 'Choosing a NostalgIA lead role',
      zh: '选择你的 NostalgIA 主角位',
    },
    body: {
      en: [
        `Every NostalgIA variant recreates the same retro TV commercial: the letterboxed SD picture, the sunny backyard set, the chocolate crisp bar, the bite, the grin, the red jingle text. What changes is the lead character's styling. ${ROLES_EN}`,
        'Pick the role closest to your photo — the AI keeps your face, hairstyle, and skin tone either way. The template is at ' + T + '. Upload one photo, keep 9:16, and the credit cost shows before you generate.',
        `${SOUND_EN}`,
      ],
      zh: [
        `每个 NostalgIA 变体复刻的都是同一支复古电视广告：黑边 SD 画质、阳光后院布景、巧克力棒道具、咬一口、对镜头笑、红色 jingle 文字。变的是主角造型。${ROLES_ZH}`,
        `选一个和你的照片最接近的主角位——无论选哪个，AI 都会保留你的脸、发型和肤色。模板在 ${TZ} 。上传一张照片，保持 9:16，积分在生成前显示。`,
        `${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do the variants change the ad?', zh: '变体会改变广告吗？' },
        a: {
          en: 'No. The scene, the prop, and the jingle text are identical; only the lead character styling differs.',
          zh: '不变。场景、道具和 jingle 文字完全一致，变的只是主角造型。',
        },
      },
      {
        q: { en: 'Can I edit the prompt?', zh: '可以改提示词吗？' },
        a: {
          en: 'Yes. Each variant ships with a pre-filled prompt that stays editable before you generate — keep the retro set and the jingle text so the result still reads as this trend.',
          zh: '可以。每个变体自带预填提示词，生成前可编辑——保留复古布景和 jingle 文字，成片才能被认成这条趋势。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia trend',
    slug: 'nostalgia-trend',
    title: {
      en: 'The NostalgIA Trend on TikTok – Retro Ads, Explained | ViralReel',
      zh: 'TikTok 上的 NostalgIA 趋势：复古广告详解 | ViralReel',
    },
    description: {
      en: 'nostalgia trend: the late-October 2026 TikTok format where AI drops you inside a recreated retro TV commercial. What it is, why it spread, and how to join it with one photo.',
      zh: 'nostalgia trend：2026 年 10 月底的 TikTok 格式——AI 把你放进复刻的怀旧电视广告。它是什么、为什么传开，以及如何用一张照片加入。',
    },
    h1: { en: 'The NostalgIA trend', zh: 'NostalgIA 趋势' },
    lead: {
      en: 'The NostalgIA trend is the week AI finally put people inside the commercials they grew up watching.',
      zh: 'NostalgIA 趋势是这一周 AI 终于把人放进了他们从小看到大的广告里。',
    },
    guideTitle: {
      en: 'What the NostalgIA trend is and why it spread',
      zh: 'NostalgIA 趋势是什么，为什么能传开',
    },
    body: {
      en: [
        'The NostalgIA trend is a TikTok video format from late October 2026: AI-generated clips styled as recreated retro TV commercials. A letterboxed SD frame, a sunny suburban backyard, a chocolate crisp bar with an unreadable wrapper, one bite, then a straight-to-camera pitch with a red jingle text card flashing across the screen. The caption carries the joke: "pov: you always wanted to know how you\'d look in this ad."',
        'It spread for three reasons. The format is one fixed scene, so every remake is readable at a glance. The variable is exactly one person — you — which makes it a perfect photo-to-video job. And nostalgia is already the dominant TikTok aesthetic: the trend hands everyone a personal piece of the 2000s broadcast era.',
        'To join it, make your own at ' + T + '. One photo, eight seconds, 9:16. Then add the trend sound in the app and post with the pov caption. ViralReel is not affiliated with the trend posters or any brand.',
      ],
      zh: [
        'NostalgIA 趋势是 2026 年 10 月底出现的 TikTok 视频格式：AI 生成的、仿复古老电视广告的片段。黑边 SD 画框、阳光下的郊区后院、包装没有可读标识的巧克力棒、咬一口，然后对镜头来一段推销，红色 jingle 文字卡在屏幕上一闪而过。文案负责抖包袱：「pov: you always wanted to know how you\'d look in this ad」。',
        '它能传开有三个原因。格式是单一固定场景，每条重制一眼就能读懂。变量只有一个人——你——这正好是图生视频最擅长的事。而怀旧本来就是 TikTok 的主流审美：这条趋势把 2000 年代电视广播时代变成了每个人可以认领的私人物品。',
        `加入的方法是在 ${TZ} 做一条你自己的。一张照片，8 秒，9:16。然后在应用里加趋势原声，带 pov 文案发布。ViralReel 与趋势作者和任何品牌无关。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'When did the NostalgIA trend start?', zh: 'NostalgIA 趋势是什么时候开始的？' },
        a: {
          en: 'It surfaced on TikTok in late October 2026 and is still climbing. The format is too new for press coverage — the trend pages on ViralReel track what the posts themselves show.',
          zh: '它于 2026 年 10 月底在 TikTok 出现，目前仍在上升期。格式太新还没有媒体报道——ViralReel 的趋势页面以帖子本身呈现的内容为准。',
        },
      },
      {
        q: { en: 'Is NostalgIA the same as the 2023 Bad Bunny song?', zh: 'NostalgIA 和 2023 年 Bad Bunny 那首歌是同一回事吗？' },
        a: {
          en: 'No. Same word, unrelated memes. The 2026 NostalgIA trend is the retro-ad video format; the song is a separate 2023 AI-voice track.',
          zh: '不是。同一个词，两个不相干的梗。2026 年的 NostalgIA 趋势是复古广告视频格式；那首歌是 2023 年独立的 AI 换声作品。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia without capcut',
    slug: 'nostalgia-without-capcut',
    title: {
      en: 'NostalgIA Without CapCut – One Photo, No Editor | ViralReel',
      zh: '不用 CapCut 做 NostalgIA：一张照片，不用剪辑 | ViralReel',
    },
    description: {
      en: 'nostalgia without capcut: skip the editor entirely. ViralReel generates the whole retro TV-ad scene from one photo in the browser — 8 seconds, 9:16, no app install, no project files.',
      zh: 'nostalgia without capcut：完全跳过剪辑软件。ViralReel 在浏览器里用一张照片生成整段复古老广告场景——8 秒，9:16，不用装 App，没有工程文件。',
    },
    h1: { en: 'NostalgIA without CapCut', zh: '不用 CapCut 做 NostalgIA' },
    lead: {
      en: 'You do not need CapCut — or any editor — for the NostalgIA trend. The video is generated, not edited.',
      zh: '做 NostalgIA 不需要 CapCut——也不需要任何剪辑软件。这条视频是生成的，不是剪出来的。',
    },
    guideTitle: {
      en: 'The no-editor path to a NostalgIA video',
      zh: '不装剪辑软件做 NostalgIA 视频的路径',
    },
    body: {
      en: [
        'A NostalgIA video is AI-generated footage: a model recreates the retro commercial with you as the star. Editing apps paste clips together; they cannot film you inside an ad that never existed. That is why the viral posts are not CapCut projects — the whole video comes out of the model in one pass.',
        `The no-editor workflow: open ${T}, upload one clear photo, pick a lead role, and generate. Download the 8-second 9:16 MP4 when the render finishes. Paid exports carry no watermark.`,
        `${SOUND_EN} Add it in TikTok, Reels, or Shorts — that step lives in the app you already post from, not in an editor. ${LIMIT_EN}`,
      ],
      zh: [
        'NostalgIA 视频是 AI 生成的画面：模型复刻复古广告，主角是你。剪辑软件只能把素材拼到一起，拍不出「你进了一支不存在的广告」这种画面。所以爆款帖都不是 CapCut 工程——整条视频由模型一次生成。',
        `免剪辑流程：打开 ${TZ} ，上传一张清晰照片，选一个主角位，点生成。渲染完成后下载 8 秒 9:16 的 MP4。付费导出无水印。`,
        `${SOUND_ZH} 在 TikTok、Reels 或 Shorts 里加——这一步在你平时发布的应用里完成，不在剪辑软件里。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need any editing app at all?', zh: '还需要任何剪辑 App 吗？' },
        a: {
          en: 'No. Generation, download, and posting all happen without an editor. The sound is added inside TikTok, Reels, or Shorts when you post.',
          zh: '不需要。生成、下载、发布都不经过剪辑软件。原声在你发布时的 TikTok、Reels 或 Shorts 里加。',
        },
      },
      {
        q: { en: 'What if I already have CapCut?', zh: '我已经装了 CapCut 怎么办？' },
        a: {
          en: 'You can still use ViralReel for the generation — the comparison is at /nostalgia-capcut. CapCut adds nothing to this format after the MP4 is downloaded.',
          zh: '生成这一步仍然用 ViralReel——对照页在 /nostalgia-capcut。MP4 下载完成后，CapCut 对这个格式没有任何附加价值。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia online',
    slug: 'nostalgia-online',
    title: {
      en: 'Make a NostalgIA Video Online – Browser AI | ViralReel',
      zh: '在线制作 NostalgIA 视频：浏览器 AI | ViralReel',
    },
    description: {
      en: 'nostalgia online: create the retro TV-ad trend video in your browser. One photo, 8-second 9:16 MP4, no app, no download until the render is done.',
      zh: 'nostalgia online：在浏览器里做复古电视广告趋势视频。一张照片，8 秒 9:16 MP4，不用装 App，渲染完成才需要下载。',
    },
    h1: { en: 'NostalgIA video online', zh: '在线制作 NostalgIA 视频' },
    lead: {
      en: 'The NostalgIA trend runs fully online: one photo in the browser, a finished retro ad out.',
      zh: 'NostalgIA 趋势全程在线完成：浏览器里上传一张照片，一条完整的复古广告出来。',
    },
    guideTitle: {
      en: 'Making the NostalgIA ad online',
      zh: '在线制作 NostalgIA 广告',
    },
    body: {
      en: [
        `Making a NostalgIA video online means opening ${T} and working in the browser: upload one clear front-facing photo, pick one of the five lead roles, and generate. Nothing installs and nothing uploads to a timeline — the AI recreates the retro TV ad around your face.`,
        'The render returns an 8-second 9:16 MP4 with the letterboxed SD picture, the backyard set, the bite, the grin, and the jingle text. The credit cost shows before you start, and failed jobs are refunded.',
        `${SOUND_EN}`,
      ],
      zh: [
        `在线制作 NostalgIA 视频，就是打开 ${TZ} 在浏览器里完成：上传一张清晰正面照，选五个主角位之一，点生成。不用装任何东西，也没有时间线——AI 会围绕你的脸复刻整支复古电视广告。`,
        '渲染返回一条 8 秒的 9:16 MP4：黑边 SD 画质、后院布景、咬一口、对镜头笑、jingle 文字。积分在生成前显示，失败的任务会退积分。',
        `${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does it work on a phone?', zh: '手机上能用吗？' },
        a: {
          en: 'Yes. The template runs in the mobile browser, and the MP4 downloads straight to your camera roll for posting.',
          zh: '可以。模板在手机浏览器里运行，MP4 直接下载到相册就可以发布。',
        },
      },
      {
        q: { en: 'How long does a render take?', zh: '渲染要多久？' },
        a: {
          en: 'A few minutes for the 8-second clip, depending on the model. Failed jobs are refunded to your balance.',
          zh: '8 秒的片段通常几分钟，取决于所选模型。失败的任务会退积分。',
        },
      },
    ],
  },
  {
    keyword: 'nostalgia ai generator',
    slug: 'nostalgia-ai-generator',
    title: {
      en: 'NostalgIA AI Generator – Photo to Retro Ad | ViralReel',
      zh: 'NostalgIA AI 生成器：照片到复古老广告 | ViralReel',
    },
    description: {
      en: 'nostalgia ai generator: ViralReel turns one photo into a recreated retro TV commercial. No prompt. No brand logos in the output. The MP4 does not include the sound.',
      zh: 'nostalgia ai generator：ViralReel 用一张照片生成复刻的复古电视广告。不写提示词。成片不含品牌标识。MP4 不含原声。',
    },
    h1: { en: 'NostalgIA AI generator', zh: 'NostalgIA AI 生成器' },
    lead: {
      en: 'The NostalgIA AI generator is the photo-to-video engine behind the trend: one upload, a whole retro commercial out.',
      zh: 'NostalgIA AI 生成器是趋势背后的图生视频引擎：一次上传，一整支复古广告出来。',
    },
    guideTitle: {
      en: 'What the AI generator actually runs',
      zh: '这个 AI 生成器实际在跑什么',
    },
    body: {
      en: [
        `A nostalgia ai generator search wants the photo-to-video tool, not a description of the meme. Open ${T}. Upload one clear front-facing photo, pick a lead role, and generate an 8-second 9:16 MP4. ${ROLES_EN}`,
        'You do not write a prompt and you do not composite anything. The letterboxed retro frame, the SD grading, the prop action, and the red jingle text are already in the template. The plain generator page is https://www.viralreel.app/nostalgia-generator.',
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `搜 nostalgia ai generator 要的是照片生成工具，不是梗介绍。打开 ${TZ} 。上传一张清晰正面照，选一个主角位，生成 8 秒 9:16 的 MP4。${ROLES_ZH}`,
        '你不用写提示词，也不用做任何合成。黑边复古画框、SD 调色、道具动作、红色 jingle 文字都已经在模板里。普通「生成器」页是 https://www.viralreel.app/zh/nostalgia-generator 。',
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the AI generator a different product from the template?', zh: 'AI 生成器和模板是两个产品吗？' },
        a: {
          en: `No. Both open ${T}. "AI generator" means the photo goes through the video model inside that template.`,
          zh: `不是。两边都打开 ${TZ} 。「AI 生成器」指的是照片在这个模板里走视频模型。`,
        },
      },
      {
        q: { en: 'Does the output include brand logos?', zh: '成片里有品牌标识吗？' },
        a: {
          en: 'No. The chocolate bar prop has an unreadable wrapper with no brand logos — the output is an original parody, not a copy of a real commercial.',
          zh: '没有。巧克力棒道具的包装没有可读的品牌标识——成片是原创戏仿，不是真实广告的拷贝。',
        },
      },
    ],
  },
  {
    keyword: 'make nostalgia ai',
    slug: 'make-nostalgia-ai',
    title: {
      en: 'Make a NostalgIA AI Video from Photos | ViralReel',
      zh: '用照片制作 NostalgIA AI 视频 | ViralReel',
    },
    description: {
      en: 'make nostalgia ai: upload one photo on ViralReel, pick a lead role, download the 8-second 9:16 MP4, then add the trend sound yourself. No song license, no brand affiliation.',
      zh: 'make nostalgia ai：在 ViralReel 上传一张照片，选主角位，下载 8 秒 9:16 MP4，再自己加热梗原声。不授权歌曲，与品牌无关。',
    },
    h1: { en: 'Make a NostalgIA AI video', zh: '制作 NostalgIA AI 视频' },
    lead: {
      en: 'To make a NostalgIA AI video, use the ViralReel template. One photo is the whole production.',
      zh: '制作 NostalgIA AI 视频用 ViralReel 模板。一张照片就是全部制作成本。',
    },
    guideTitle: {
      en: 'How to make a NostalgIA AI video',
      zh: '如何制作 NostalgIA AI 视频',
    },
    body: {
      en: [
        `To make a NostalgIA AI video, open ${T} and upload one clear photo of yourself — face toward the camera, chest up. Pick the lead role that matches your photo: ${ROLES_EN}`,
        'Keep 9:16 and generate. The template recreates the retro TV-ad scene — the letterboxed SD picture, the backyard, the bite, the grin, the jingle text — with you as the star. The length is fixed at 8 seconds so the clip loops like the trend posts.',
        `${SOUND_EN} Then post with the "pov: you always wanted to know how you'd look in this ad" caption people recognize. ${LIMIT_EN}`,
      ],
      zh: [
        `制作 NostalgIA AI 视频，打开 ${TZ} 上传一张你的清晰照片——正对镜头、胸像以上。选一个和照片匹配的主角位：${ROLES_ZH}`,
        '保持 9:16 并生成。模板会复刻复古电视广告场景——黑边 SD 画质、后院、咬一口、对镜头笑、jingle 文字——主角是你。时长固定 8 秒，成片和趋势帖一样适合循环。',
        `${SOUND_ZH} 发布时配上大家熟悉的「pov: you always wanted to know how you'd look in this ad」文案。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What photo works best?', zh: '什么照片效果最好？' },
        a: {
          en: 'A clear, front-facing photo with even light — chest up or half body. Skip sunglasses, group shots, and heavy filters; the face carries the whole ad.',
          zh: '光线均匀的清晰正面照——胸像或半身。不要墨镜、合照和重滤镜；脸是整支广告的主角。',
        },
      },
      {
        q: { en: 'Can I make one for a friend?', zh: '可以给朋友做一条吗？' },
        a: {
          en: 'Yes, with their permission — one photo, one video, one star. Posting a run of them back to back recreates the "channel surfing" effect.',
          zh: '可以，经对方同意——一张照片、一条视频、一个主角。把几条连着发，就是「换台」的效果。',
        },
      },
    ],
  },
  {
    keyword: "how you'd look in this ad",
    slug: 'how-youd-look-in-this-ad',
    title: {
      en: '"POV: You Always Wanted to Know How You\'d Look in This Ad" – the NostalgIA Trend | ViralReel',
      zh: '「POV：你一直想知道自己在这支广告里长什么样」——NostalgIA 趋势 | ViralReel',
    },
    description: {
      en: 'The caption behind the retro TV-ad trend: what "pov: you always wanted to know how you\'d look in this ad" means, which ad it points at, and how to star in your own version.',
      zh: '复古电视广告趋势背后的文案：「pov: you always wanted to know how you\'d look in this ad」是什么意思、指向哪支广告，以及如何主演你自己的版本。',
    },
    h1: { en: '"How you\'d look in this ad", explained', zh: '「你会在这支广告里长什么样」详解' },
    lead: {
      en: 'One caption carries the whole NostalgIA trend — and it lands because everyone remembers an ad they were never in.',
      zh: '一句文案撑起整条 NostalgIA 趋势——它之所以戳人，是因为每个人都记得一条自己从没进过的广告。',
    },
    guideTitle: {
      en: 'What the pov caption means and how to use it',
      zh: 'pov 文案的含义与用法',
    },
    body: {
      en: [
        '"POV: you always wanted to know how you\'d look in this ad" is the caption on almost every NostalgIA post: an AI video that drops the poster inside a recreated retro TV commercial — the letterboxed SD picture, the backyard set, the chocolate crisp bar, the bite, the grin, the jingle text. The ad never really existed; that is the joke. It is a shared-memory ad, assembled from the look of classic 2000s candy-bar spots.',
        'The caption is the format. Keep it verbatim when you post — it is what tells viewers which memory the joke lands on, and it is how the algorithm groups your clip with the trend. Add the trend sound in the app, not in the file: the MP4 you download is the picture only.',
        `To be the person in the ad, make your own at ${T}: one photo, one lead role, eight seconds. ${LIMIT_EN}`,
      ],
      zh: [
        '「POV：你一直想知道自己在这支广告里长什么样」几乎出现在每条 NostalgIA 帖子上：AI 视频把发帖人放进复刻的怀旧电视广告——黑边 SD 画质、后院布景、巧克力棒、咬一口、对镜头笑、jingle 文字。这支广告从未真实存在过；这正是笑点。它是一条「共同记忆广告」，用经典 2000 年代糖果广告的观感拼装而成。',
        '文案本身就是格式的一部分。发布时原样保留——它告诉观众梗落在哪段记忆上，也是算法把你的视频归进这条趋势的依据。原声在应用里加，不进文件：你下载的 MP4 只有画面。',
        `想成为广告里的人，在 ${TZ} 做一条你自己的：一张照片、一个主角位、八秒钟。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Which ad is "this ad"?', zh: '「这支广告」是哪支广告？' },
        a: {
          en: 'None specifically — and that is the point. It is the shared memory of 2000s candy-bar TV spots: the backyard, the bite, the jingle text. The viral posts are AI parodies, not real commercials.',
          zh: '不特指哪一支——这正是要点。它是 2000 年代糖果电视广告的共同记忆：后院、咬一口、jingle 文字。爆款帖都是 AI 戏仿，不是真实广告。',
        },
      },
      {
        q: { en: 'Should I change the caption?', zh: '可以改文案吗？' },
        a: {
          en: 'Keep it verbatim for the trend feed. Your personal spin goes in the TikTok caption below it, not in the on-screen pov line.',
          zh: '进趋势信息流就原样保留。个人发挥放在 TikTok 的帖子文案里，不要改画面上的 pov 行。',
        },
      },
    ],
  },
];
