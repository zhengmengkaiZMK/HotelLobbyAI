import type { LongTailEntry } from './long-tails';

/**
 * Fourth-wave intent pages for Tiny Desk Outstanding (ChatGPT-style “how do I make…” queries).
 * Served by `(home)/[slug]` through LongTailRoute. Do not add a per-slug page.tsx.
 * Not NPR. No Outstanding license. No minors, celebrities, or public figures.
 */

const T = 'https://www.viralreel.app/tiny-desk-outstanding-ai-template';
const TZ = 'https://www.viralreel.app/zh/tiny-desk-outstanding-ai-template';
const KLING = 'https://www.viralreel.app/blog/viralreel-vs-kling-tiny-desk-outstanding';
const KLINGZ = 'https://www.viralreel.app/zh/blog/viralreel-vs-kling-tiny-desk-outstanding';
const SPORTS = 'https://www.viralreel.app/blog/sports-fans-outstanding-tiny-desk-ai';
const SPORTSZ = 'https://www.viralreel.app/zh/blog/sports-fans-outstanding-tiny-desk-ai';
const HOWTO = 'https://www.viralreel.app/blog/how-to-make-tiny-desk-outstanding-ai-video';
const HOWTOZ = 'https://www.viralreel.app/zh/blog/how-to-make-tiny-desk-outstanding-ai-video';
const POST = 'https://www.viralreel.app/blog/post-tiny-desk-outstanding-tiktok-reels-shorts';
const POSTZ = 'https://www.viralreel.app/zh/blog/post-tiny-desk-outstanding-tiktok-reels-shorts';
const PHOTO = 'https://www.viralreel.app/blog/tiny-desk-outstanding-photo-tips';
const PHOTOZ = 'https://www.viralreel.app/zh/blog/tiny-desk-outstanding-photo-tips';
const SONG = 'https://www.viralreel.app/tiny-desk-outstanding-song';
const SONGZ = 'https://www.viralreel.app/zh/tiny-desk-outstanding-song';
const PRICING = 'https://www.viralreel.app/pricing';
const PRICINGZ = 'https://www.viralreel.app/zh/pricing';
const SUB = 'https://www.viralreel.app/subscribe';
const SUBZ = 'https://www.viralreel.app/zh/subscribe';
const CAPCUT = 'https://www.viralreel.app/blog/viralreel-vs-capcut-tiny-desk-outstanding';
const CAPCUTZ = 'https://www.viralreel.app/zh/blog/viralreel-vs-capcut-tiny-desk-outstanding';

const steps = 'shared' as const;

const SLOTS_EN =
  'The buttons read Center Lead, Left Role, and Right Role. Put the singer in Center Lead. The side slots fill the band, which is where the sax solo sits in the scene. They are not labeled sax.';
const SLOTS_ZH =
  '按钮写的是中间主角、左边角色、右边角色。主唱放中间主角。两边填乐队，萨克斯独奏就在这个场景里。按钮上没有“萨克斯”。';
const SETS_EN =
  'The six sets are All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, and Uncle Charlie. Uncle Charlie is a costume, not a tool that builds Charlie Wilson’s face.';
const SETS_ZH =
  '六套阵容是输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子和真身 Charlie。真身 Charlie 是一套造型，不是用来生成 Charlie Wilson 的脸的工具。';
const LIMIT_EN =
  'Use photos of people who agreed. Do not upload minors, celebrities, or public figures, and do not upload screenshots of the NPR concert.';
const LIMIT_ZH =
  '只用同意出镜的人的照片。不要上传未成年人、名人或公众人物，也不要上传 NPR 演唱会截图。';
const SOUND_EN =
  'ViralReel does not license or export “Outstanding.” Add the trend sound from the TikTok, Reels, or Shorts library and turn on the AI label.';
const SOUND_ZH =
  'ViralReel 不授权、也不导出《Outstanding》。请从 TikTok、Reels 或 Shorts 的曲库加热梗原声，并打开 AI 标注。';

export const TINY_DESK_INTENT_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'tiny desk outstanding kling',
    slug: 'tiny-desk-outstanding-kling',
    title: {
      en: 'Tiny Desk Outstanding Kling – Generative Clips vs the Browser Template',
      zh: 'Tiny Desk Outstanding 和 Kling：生成式片段对照浏览器模板',
    },
    description: {
      en: 'tiny desk outstanding kling: Kling-style tools invent a clip from a prompt. ViralReel keeps one fixed Outstanding desk and three photo slots. Neither licenses the song. Not NPR. No celebrities or public figures.',
      zh: 'tiny desk outstanding kling：Kling 这类工具用提示词生成片段。ViralReel 保留一张固定的 Outstanding 桌子和三个照片位。两边都不授权这首歌。不是 NPR。不要名人或公众人物。',
    },
    h1: { en: 'Tiny Desk Outstanding and Kling', zh: 'Tiny Desk Outstanding 和 Kling' },
    lead: {
      en: 'A Kling-style Tiny Desk Outstanding clip is generated from a prompt or from images inside a generative video tool. ViralReel is the other path: one fixed desk, three photos, no prompt box.',
      zh: 'Kling 风格的 Tiny Desk Outstanding 片段，是在生成式视频工具里用提示词或图片做出来的。ViralReel 是另一条路：一张固定的桌子、三张照片、没有提示词框。',
    },
    guideTitle: {
      en: 'Kling-style clips versus the ViralReel template',
      zh: 'Kling 风格片段和 ViralReel 模板',
    },
    body: {
      en: [
        `People searching tiny desk outstanding kling want the cramped office and a new band, and they have heard that a generative video tool can invent the shot. ViralReel does not host those projects and does not rank them. The fair comparison, including what neither tool licenses, is ${KLING}.`,
        `The browser template is ${T}. ${SETS_EN} ${SLOTS_EN} There is no prompt to write and no Kling account to open. The page for skipping that tool is https://www.viralreel.app/tiny-desk-outstanding-without-kling.`,
        `${SOUND_EN} ${LIMIT_EN} ViralReel is not affiliated with NPR, Charlie Wilson, the Gap Band, or Kling. Credit packs are at ${PRICING}. Monthly plans are at ${SUB}. The generator shows the cost before you render.`,
      ],
      zh: [
        `搜 tiny desk outstanding kling，是想要那间狭小的办公室和一支新乐队，并且听说生成式视频工具能把镜头做出来。ViralReel 不托管那些工程，也不给它们排名。公平对照，包括两边都不授权什么，在 ${KLINGZ} 。`,
        `浏览器模板在 ${TZ} 。${SETS_ZH} ${SLOTS_ZH} 不用写提示词，也不用开 Kling 账号。跳过那个工具的页面是 https://www.viralreel.app/zh/tiny-desk-outstanding-without-kling 。`,
        `${SOUND_ZH} ${LIMIT_ZH} ViralReel 与 NPR、Charlie Wilson、Gap Band 和 Kling 均无关联。积分包在 ${PRICINGZ} 。月付方案在 ${SUBZ} 。生成器会在渲染前显示积分。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the ViralReel template a Kling project?', zh: 'ViralReel 模板是一个 Kling 工程吗？' },
        a: {
          en: `No. It is a fixed browser template at ${T}. You pick a set and upload three photos. You do not write a Kling prompt.`,
          zh: `不是。它是 ${TZ} 上的固定浏览器模板。选一套阵容，上传三张照片。不用写 Kling 提示词。`,
        },
      },
      {
        q: { en: 'Does either tool include the Outstanding soundtrack?', zh: '两边的工具会带上 Outstanding 原声吗？' },
        a: {
          en: `No. ViralReel does not license the Gap Band track. Add the trend sound in TikTok, Reels, or Shorts. The limit is also on ${SONG}.`,
          zh: `不会。ViralReel 不授权 Gap Band 的曲目。请在 TikTok、Reels 或 Shorts 里加热梗原声。同一条限制也写在 ${SONGZ} 。`,
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding without kling',
    slug: 'tiny-desk-outstanding-without-kling',
    title: {
      en: 'Tiny Desk Outstanding without Kling – Browser Template on ViralReel',
      zh: '不用 Kling 的 Tiny Desk Outstanding：ViralReel 浏览器模板',
    },
    description: {
      en: 'tiny desk outstanding without kling: make the fan-parody MP4 in the browser. Six sets, Center Lead, Left Role, Right Role. No Kling prompt. No Outstanding license. Not NPR.',
      zh: 'tiny desk outstanding without kling：在浏览器里做粉丝戏仿 MP4。六套阵容，中间主角、左边角色、右边角色。不用 Kling 提示词。不授权《Outstanding》。不是 NPR。',
    },
    h1: { en: 'Tiny Desk Outstanding without Kling', zh: '不用 Kling 的 Tiny Desk Outstanding' },
    lead: {
      en: 'You can make a Tiny Desk Outstanding fan parody without Kling. Open the ViralReel template, pick a set, and upload three photos you have permission to use.',
      zh: '做 Tiny Desk Outstanding 粉丝戏仿可以不用 Kling。打开 ViralReel 模板，选一套阵容，上传三张你有权使用的照片。',
    },
    guideTitle: {
      en: 'The browser path when you are not opening Kling',
      zh: '不开 Kling 时的浏览器路径',
    },
    body: {
      en: [
        `Tiny desk outstanding without kling means the fixed desk, not a generated scene. Start at ${T}. ${SETS_EN} ${SLOTS_EN}`,
        `The longer comparison is ${KLING}. The Kling-query landing page is https://www.viralreel.app/tiny-desk-outstanding-kling. CapCut is a different in-app paste workflow, covered at ${CAPCUT}. This page is only the “no Kling account” path.`,
        `The step-by-step assuming you have already chosen ViralReel is ${HOWTO}. ${SOUND_EN} ${LIMIT_EN} Pricing is ${PRICING}. Monthly plans are ${SUB}.`,
      ],
      zh: [
        `Tiny desk outstanding without kling 指的是那张固定的桌子，不是生成出来的新场景。从 ${TZ} 开始。${SETS_ZH} ${SLOTS_ZH}`,
        `更长的对照在 ${KLINGZ} 。Kling 搜索的落地页是 https://www.viralreel.app/zh/tiny-desk-outstanding-kling 。CapCut 是另一种在 App 里贴照片的流程，见 ${CAPCUTZ} 。这一页只讲「不用 Kling 账号」这条路。`,
        `已经决定用 ViralReel 之后的步骤在 ${HOWTOZ} 。${SOUND_ZH} ${LIMIT_ZH} 定价在 ${PRICINGZ} 。月付在 ${SUBZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need a Kling login to use ViralReel?', zh: '用 ViralReel 需要登录 Kling 吗？' },
        a: {
          en: 'No. ViralReel runs in the browser. Pick a set, upload Center Lead, Left Role, and Right Role, and download the MP4.',
          zh: '不需要。ViralReel 在浏览器里运行。选一套阵容，上传中间主角、左边角色和右边角色，下载 MP4。',
        },
      },
      {
        q: { en: 'Is “without Kling” a different template?', zh: '「不用 Kling」是另一个模板吗？' },
        a: {
          en: `No. It is the same Tiny Desk Outstanding template at ${T}.`,
          zh: `不是。它就是 ${TZ} 上的同一个 Tiny Desk Outstanding 模板。`,
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding sound',
    slug: 'tiny-desk-outstanding-sound',
    title: {
      en: 'Tiny Desk Outstanding Sound – Add It on TikTok, Reels, or Shorts',
      zh: 'Tiny Desk Outstanding 原声：在 TikTok、Reels 或 Shorts 里加',
    },
    description: {
      en: 'tiny desk outstanding sound: the trend audio is in the TikTok, Reels, and Shorts libraries. ViralReel does not export the Gap Band track. Make the MP4, then add the sound and the AI label in the app.',
      zh: 'tiny desk outstanding sound：热梗音频在 TikTok、Reels 和 Shorts 的曲库里。ViralReel 不导出 Gap Band 的曲目。先做 MP4，再在 App 里加原声和 AI 标注。',
    },
    h1: { en: 'Tiny Desk Outstanding sound', zh: 'Tiny Desk Outstanding 原声' },
    lead: {
      en: 'The Tiny Desk Outstanding sound is the trend audio in TikTok, Reels, and Shorts. ViralReel makes the picture. It does not export “Outstanding.”',
      zh: 'Tiny Desk Outstanding 的原声是 TikTok、Reels 和 Shorts 里的热梗音频。ViralReel 做的是画面。它不导出《Outstanding》。',
    },
    guideTitle: {
      en: 'Where the Outstanding sound actually is',
      zh: 'Outstanding 的原声到底在哪',
    },
    body: {
      en: [
        `A tiny desk outstanding sound search is asking for the audio, not for a second video template. The song people mean is the Gap Band’s “Outstanding,” sung by Charlie Wilson at the NPR Tiny Desk. ViralReel does not sell that recording and does not put a licensed soundtrack in the download. The same limit is on ${SONG}.`,
        `Make the fan-parody MP4 at ${T}, leave the ratio on 9:16, and download the file. In TikTok, Reels, or Shorts, upload that MP4 and add the Outstanding sound from that app’s library. Turn on the AI label. The posting pass is ${POST}.`,
        `Some renders follow an admin reference track, generate other audio, or export silence. Treat the file as video. ${LIMIT_EN} This page is not an NPR audio download and not a Gap Band store.`,
      ],
      zh: [
        `搜 tiny desk outstanding sound 要的是音频，不是第二个视频模板。大家说的歌是 Gap Band 的《Outstanding》，Charlie Wilson 在 NPR Tiny Desk 演唱。ViralReel 不卖这段录音，下载文件里也没有已授权的原声。同一条限制在 ${SONGZ} 。`,
        `在 ${TZ} 做粉丝戏仿 MP4，画幅保持 9:16，然后下载。在 TikTok、Reels 或 Shorts 里上传这个 MP4，从该 App 曲库加上《Outstanding》。打开 AI 标注。发布流程在 ${POSTZ} 。`,
        `有的成片会跟随管理员参考音轨，有的生成别的声音，有的导出无声。把文件当成视频。${LIMIT_ZH} 这一页不是 NPR 的音频下载，也不是 Gap Band 的商店。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I download the Outstanding sound from ViralReel?', zh: '能从 ViralReel 下载 Outstanding 原声吗？' },
        a: {
          en: 'No. Add it from the TikTok, Reels, or Shorts library after you upload the MP4. ViralReel does not license the track.',
          zh: '不能。上传 MP4 之后，从 TikTok、Reels 或 Shorts 的曲库里加。ViralReel 不授权这首歌。',
        },
      },
      {
        q: { en: 'Which file do I upload before I add the sound?', zh: '加原声之前要上传哪个文件？' },
        a: {
          en: `The new 9:16 MP4 from ${T}. Not the NPR concert and not someone else’s viral upload.`,
          zh: `来自 ${TZ} 的新 9:16 MP4。不是 NPR 演唱会，也不是别人那条已经火了的片子。`,
        },
      },
    ],
  },
  {
    keyword: 'sports fan tiny desk outstanding',
    slug: 'sports-fan-tiny-desk-outstanding',
    title: {
      en: 'Sports Fan Tiny Desk Outstanding – A New MP4, Not the Coaches Clip',
      zh: '体育迷的 Tiny Desk Outstanding：新的 MP4，不是教练原片',
    },
    description: {
      en: 'sports fan tiny desk outstanding: the parody spread with sports weeks. ViralReel makes a new MP4 of people who agreed to be in it. It does not reupload coaches, players, or the viral file. Not the NFL. Not NPR.',
      zh: 'sports fan tiny desk outstanding：这个戏仿是跟着赛程传开的。ViralReel 用同意出镜的人做一条新 MP4。不转载教练、球员或那条爆火文件。不是 NFL。不是 NPR。',
    },
    h1: { en: 'Sports-fan Tiny Desk Outstanding', zh: '体育迷的 Tiny Desk Outstanding' },
    lead: {
      en: 'Sports fans use the Outstanding desk as a parody of a week that did not earn a celebration. ViralReel makes a new MP4. It does not hand you the viral coaches file.',
      zh: '体育迷用 Outstanding 这张桌子，戏仿一个不该庆祝的星期。ViralReel 做的是一条新 MP4。它不会把那条爆火的教练片交给你。',
    },
    guideTitle: {
      en: 'What a sports fan can make on ViralReel',
      zh: '体育迷在 ViralReel 上能做什么',
    },
    body: {
      en: [
        `The sports-fan version of this trend is the same joke as the rest of the wave: “Outstanding” celebrates, and the week did not. All-Loss coaches, NFL looks, and later friend groups all reused one desk. ViralReel does not host those uploads. Context for the coaches clip is https://www.viralreel.app/all-loss-tiny-desk and https://www.viralreel.app/college-football-coaches-tiny-desk. The NFL nickname page is https://www.viralreel.app/nfl-tiny-desk-meme. Why the clips keep spreading is ${SPORTS}.`,
        `To make a new one, open ${T} and pick a set as a costume for your own group — a watch party, a fantasy league, an office pool — using photos of people who agreed. ${SLOTS_EN} ${SETS_EN} Do not upload coaches, players, owners, or other public figures to recreate a viral cast.`,
        `Download the 9:16 MP4 and post it with the platform sound and the AI label. Steps for posting are ${POST}. ${SOUND_EN} This is not an NFL, NCAA, or NPR page.`,
      ],
      zh: [
        `这个趋势的体育迷版本，和整波是同一个笑话：《Outstanding》在庆祝，这个星期却不配。输球教练、NFL 造型，以及后来的朋友团，用的都是同一张桌子。ViralReel 不托管那些上传。教练片的说明在 https://www.viralreel.app/zh/all-loss-tiny-desk 和 https://www.viralreel.app/zh/college-football-coaches-tiny-desk 。NFL 外号页在 https://www.viralreel.app/zh/nfl-tiny-desk-meme 。为什么这些片子还在传，写在 ${SPORTSZ} 。`,
        `要做一条新的，打开 ${TZ} ，把一套阵容当成你们自己人的造型——看球局、幻想联赛、办公室竞猜——用同意出镜的人的照片。${SLOTS_ZH} ${SETS_ZH} 不要上传教练、球员、老板或其他公众人物去复刻一支爆火阵容。`,
        `下载 9:16 的 MP4，配上平台原声和 AI 标注再发。发布步骤在 ${POSTZ} 。${SOUND_ZH} 这不是 NFL、NCAA 或 NPR 的页面。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I upload the coaches or players from the viral clip?', zh: '可以把爆火片段里的教练或球员传上去吗？' },
        a: {
          en: 'No. Use photos of people who agreed. The sets are costumes. ViralReel does not generate public figures and does not reupload the viral file.',
          zh: '不可以。用同意出镜的人的照片。阵容是造型。ViralReel 不生成公众人物，也不转载那条爆火文件。',
        },
      },
      {
        q: { en: 'Is the All-Loss set the original coaches video?', zh: '输球教练团套装就是原来那条教练视频吗？' },
        a: {
          en: `No. It is a look on ${T}. The original TikTok stays where it was posted. You download a new MP4.`,
          zh: `不是。它是 ${TZ} 上的一套造型。原来的 TikTok 还在它发布的地方。你下载的是一条新 MP4。`,
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding with friends',
    slug: 'tiny-desk-outstanding-with-friends',
    title: {
      en: 'Tiny Desk Outstanding with Friends – Three Photos, One Desk',
      zh: '和朋友一起的 Tiny Desk Outstanding：三张照片，一张桌子',
    },
    description: {
      en: 'tiny desk outstanding with friends: put people who agreed into Center Lead, Left Role, and Right Role. A new fan-parody MP4 on ViralReel. Not a download of someone else’s band. No Outstanding license.',
      zh: 'tiny desk outstanding with friends：把同意出镜的人放进中间主角、左边角色和右边角色。ViralReel 上一条新的粉丝戏仿 MP4。不是别人乐队的下载。不授权《Outstanding》。',
    },
    h1: { en: 'Tiny Desk Outstanding with friends', zh: '和朋友一起的 Tiny Desk Outstanding' },
    lead: {
      en: 'A Tiny Desk Outstanding with friends puts three people who agreed behind the same desk. It is a new MP4, not a copy of a viral band.',
      zh: '和朋友一起的 Tiny Desk Outstanding，是让三个同意出镜的人站到同一张桌子后面。它是一条新 MP4，不是某支爆火乐队的拷贝。',
    },
    guideTitle: {
      en: 'How a friend group fills the desk',
      zh: '一桌朋友怎么填这张桌子',
    },
    body: {
      en: [
        `The generator has three slots, so a friends clip is three photos, not a guaranteed five-piece band. Open ${T}. ${SLOTS_EN} Photo prep is ${PHOTO}. The “band of friends” wording has its own page at https://www.viralreel.app/ai-tiny-desk-band.`,
        `${SETS_EN} Pick the set that fits the joke — a bad sports week, an office, a group chat — and keep the people as themselves. ${LIMIT_EN}`,
        `The longer how-to is ${HOWTO}. The song-title-first version of that question is https://www.viralreel.app/how-to-make-outstanding-tiny-desk-ai. ${SOUND_EN} Credits show before generate. Packs are ${PRICING}. Monthly plans are ${SUB}.`,
      ],
      zh: [
        `生成器有三个位置，所以朋友版是三张照片，不是保证凑齐五人乐队。打开 ${TZ} 。${SLOTS_ZH} 照片准备在 ${PHOTOZ} 。「一桌朋友当乐队」这个说法另有一页：https://www.viralreel.app/zh/ai-tiny-desk-band 。`,
        `${SETS_ZH} 选一套和笑话相称的阵容——糟糕的比赛周、办公室、群聊——人还是他们自己。${LIMIT_ZH}`,
        `更长的教程在 ${HOWTOZ} 。歌名放在前面的问法在 https://www.viralreel.app/zh/how-to-make-outstanding-tiny-desk-ai 。${SOUND_ZH} 积分在生成前显示。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I put five friends in one Tiny Desk Outstanding video?', zh: '一条 Tiny Desk Outstanding 能放五个朋友吗？' },
        a: {
          en: 'The generator asks for three photos: Center Lead, Left Role, and Right Role. It does not offer five labeled seats.',
          zh: '生成器要三张照片：中间主角、左边角色、右边角色。它没有五个写好名字的座位。',
        },
      },
      {
        q: { en: 'Do my friends need to sing “Outstanding”?', zh: '朋友需要真的唱《Outstanding》吗？' },
        a: {
          en: 'No. The template builds a fan-parody picture. The trend sound is added later in TikTok, Reels, or Shorts. ViralReel does not license the song.',
          zh: '不用。模板做的是粉丝戏仿的画面。热梗原声之后在 TikTok、Reels 或 Shorts 里加。ViralReel 不授权这首歌。',
        },
      },
    ],
  },
  {
    keyword: 'ai tiny desk band',
    slug: 'ai-tiny-desk-band',
    title: {
      en: 'AI Tiny Desk Band – Friends at the Outstanding Desk on ViralReel',
      zh: 'AI Tiny Desk 乐队：ViralReel 上 Outstanding 桌子边的朋友',
    },
    description: {
      en: 'ai tiny desk band: a band of friends at one fixed desk. ViralReel uses three photo slots, not a prompt that writes a song or casts celebrities. Fan parody only. No Outstanding license.',
      zh: 'ai tiny desk band：一桌朋友站在同一张固定的桌子后面。ViralReel 用三个照片位，不是用来写歌或选角名人的提示词。只是粉丝戏仿。不授权《Outstanding》。',
    },
    h1: { en: 'AI Tiny Desk band', zh: 'AI Tiny Desk 乐队' },
    lead: {
      en: 'An AI Tiny Desk band on ViralReel is your people at the Outstanding desk. It is not a blank prompt, and it is not a tool for casting celebrities.',
      zh: 'ViralReel 上的 AI Tiny Desk 乐队，是你的人站在 Outstanding 这张桌子后面。它不是空白提示词，也不是用来给名人选角的工具。',
    },
    guideTitle: {
      en: 'What “AI Tiny Desk band” means here',
      zh: '这里的「AI Tiny Desk 乐队」是什么意思',
    },
    body: {
      en: [
        `An ai tiny desk band search wants a group behind the desk. On ViralReel that group is three photos at ${T}. ${SLOTS_EN} The friends page is https://www.viralreel.app/tiny-desk-outstanding-with-friends.`,
        `You do not describe the office in a prompt, and you do not ask the model to invent a famous lineup. ${SETS_EN} ${LIMIT_EN} The prompt clarification is https://www.viralreel.app/tiny-desk-outstanding-prompt.`,
        `What you download is a new fan-parody MP4. ${SOUND_EN} What the fan parody is, as distinct from the NPR concert and the original meme file, is https://www.viralreel.app/blog/what-is-tiny-desk-outstanding-fan-parody.`,
      ],
      zh: [
        `搜 ai tiny desk band，要的是桌子后面的一群人。在 ViralReel，这群人是 ${TZ} 上的三张照片。${SLOTS_ZH} 朋友页在 https://www.viralreel.app/zh/tiny-desk-outstanding-with-friends 。`,
        `你不用在提示词里描述办公室，也不用让模型编一支著名阵容。${SETS_ZH} ${LIMIT_ZH} 关于提示词的说明在 https://www.viralreel.app/zh/tiny-desk-outstanding-prompt 。`,
        `你下载的是一条新的粉丝戏仿 MP4。${SOUND_ZH} 粉丝戏仿和 NPR 演唱会、原始梗文件有什么不同，见 https://www.viralreel.app/zh/blog/what-is-tiny-desk-outstanding-fan-parody 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Will the AI write an original song for the band?', zh: 'AI 会给这支乐队写一首原创歌吗？' },
        a: {
          en: 'No. The template recreates the desk picture. ViralReel does not license “Outstanding” and does not compose a replacement song.',
          zh: '不会。模板重做的是桌子上的画面。ViralReel 不授权《Outstanding》，也不会另写一首替代歌曲。',
        },
      },
      {
        q: { en: 'Can I name celebrities and have the band appear?', zh: '我写出名人的名字，乐队就会出现吗？' },
        a: {
          en: 'No. Upload photos of people who agreed. Do not use minors, celebrities, or public figures.',
          zh: '不会。上传同意出镜的人的照片。不要用未成年人、名人或公众人物。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding free',
    slug: 'tiny-desk-outstanding-free',
    title: {
      en: 'Tiny Desk Outstanding Free – Credits, Not Free Forever',
      zh: '免费的 Tiny Desk Outstanding：有起始积分，不是永远免费',
    },
    description: {
      en: 'tiny desk outstanding free: a new ViralReel account starts with free credits for a first template video. Later renders use a credit pack or a monthly plan. Not free forever. No Outstanding license.',
      zh: 'tiny desk outstanding free：新的 ViralReel 账号带有免费积分，够先做一条模板视频。之后的成片用积分包或月付。不是永远免费。不授权《Outstanding》。',
    },
    h1: { en: 'Is Tiny Desk Outstanding free?', zh: 'Tiny Desk Outstanding 免费吗？' },
    lead: {
      en: 'Tiny Desk Outstanding on ViralReel is not free forever. A new account starts with free credits so you can render a first template video. After that, videos spend credits.',
      zh: 'ViralReel 上的 Tiny Desk Outstanding 不是永远免费。新账号带有免费积分，可以先渲染一条模板视频。之后的视频消耗积分。',
    },
    guideTitle: {
      en: 'What “free” does and does not mean',
      zh: '「免费」包括什么、不包括什么',
    },
    body: {
      en: [
        `A tiny desk outstanding free search usually wants the MP4 at no cost. The honest split is: every new ViralReel account starts with free credits, enough to render a first template video before you pay. That starter balance is not an unlimited plan. The template is ${T}.`,
        `One-time credit packs start at $9.9 for 90 credits on ${PRICING}. Monthly plans start at $9.9/month for 90 credits on ${SUB}. The generator shows the exact credit cost for the resolution and length you pick before you start. Failed or canceled jobs return those credits. Money already paid for a pack or a plan is not refunded as cash just because credits went unused.`,
        `${SETS_EN} ${SLOTS_EN} ${SOUND_EN} ${LIMIT_EN} A free render is still a fan parody, not an NPR file and not a licensed song.`,
      ],
      zh: [
        `搜 tiny desk outstanding free，通常是想不花钱拿到 MP4。老实的分法是：每个新的 ViralReel 账号都带免费积分，够在付费前先渲染一条模板视频。这份起始积分不是无限套餐。模板在 ${TZ} 。`,
        `一次性积分包 ${PRICINGZ} 上 $9.9 起，含 90 积分。月付 ${SUBZ} 上 $9.9/月起，每月 90 积分。生成器会在开始前按你选的分辨率和时长显示本次积分。失败或取消的任务会退回这些积分。已经付给积分包或套餐的钱，不会仅仅因为积分没用完就按现金退回。`,
        `${SETS_ZH} ${SLOTS_ZH} ${SOUND_ZH} ${LIMIT_ZH} 一次免费渲染仍然是粉丝戏仿，不是 NPR 的文件，也不是已授权的歌曲。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Tiny Desk Outstanding free forever?', zh: 'Tiny Desk Outstanding 是永远免费吗？' },
        a: {
          en: `No. New accounts start with free credits for a first template video. Later renders use a pack at ${PRICING} or a monthly plan at ${SUB}.`,
          zh: `不是。新账号的免费积分够先做一条模板视频。之后的成片用 ${PRICINGZ} 的积分包，或 ${SUBZ} 的月付。`,
        },
      },
      {
        q: { en: 'Where do I see the price before I generate?', zh: '生成前在哪里看价格？' },
        a: {
          en: 'On the template itself. The credit cost for the resolution and length you selected is shown before you start. The same table is on the pricing page.',
          zh: '就在模板页上。你选的分辨率和时长对应的积分，会在开始前显示。同一张表也在定价页。',
        },
      },
    ],
  },
  {
    keyword: 'best tiny desk outstanding ai',
    slug: 'best-tiny-desk-outstanding-ai',
    title: {
      en: 'Best Tiny Desk Outstanding AI – When the Browser Template Fits',
      zh: '最好的 Tiny Desk Outstanding AI：什么时候用浏览器模板',
    },
    description: {
      en: 'best tiny desk outstanding ai: for the fixed Outstanding desk, use the ViralReel browser template — six sets, three photo slots, no prompt. A generative tool fits a different job. No Outstanding license. Not NPR.',
      zh: 'best tiny desk outstanding ai：要那张固定的 Outstanding 桌子，用 ViralReel 浏览器模板——六套阵容、三个照片位、不写提示词。生成式工具适合另一件事。不授权《Outstanding》。不是 NPR。',
    },
    h1: { en: 'Best Tiny Desk Outstanding AI', zh: '最好的 Tiny Desk Outstanding AI' },
    lead: {
      en: 'For a fixed Outstanding desk, the ViralReel browser template is the fit: six sets, three photo slots, no prompt. A generative tool is a different job, not a second version of this page.',
      zh: '要一张固定的 Outstanding 桌子，ViralReel 浏览器模板对得上：六套阵容、三个照片位、不写提示词。生成式工具是另一件事，不是这一页的第二个版本。',
    },
    guideTitle: {
      en: 'How to choose without a fake ranking',
      zh: '怎么选，而不做假排名',
    },
    body: {
      en: [
        `Best tiny desk outstanding ai is a comparison query. This page does not score every video app. It answers the job. If you want Charlie Wilson’s NPR desk, the grin, the hand wave, and a band swapped in, use ${T}. ${SETS_EN} ${SLOTS_EN}`,
        `If you want to describe a brand-new scene in a prompt, a generative video tool such as Kling is the other category. ViralReel does not operate that product. The comparison is ${KLING}, and the Kling landing page is https://www.viralreel.app/tiny-desk-outstanding-kling. CapCut, which pastes photos inside an app project, is ${CAPCUT}.`,
        `Neither category licenses “Outstanding.” ${SOUND_EN} ${LIMIT_EN} The credit cost is on the generator before you render. Packs: ${PRICING}. Monthly plans: ${SUB}.`,
      ],
      zh: [
        `Best tiny desk outstanding ai 是一个比较型搜索。这一页不给每个视频 App 打分。它回答的是你要做的事。如果你要的是 Charlie Wilson 的 NPR 桌子、咧嘴笑、挥手，以及换上去的乐队，用 ${TZ} 。${SETS_ZH} ${SLOTS_ZH}`,
        `如果你想在提示词里描述一个全新场景，Kling 这类生成式视频工具是另一类产品。ViralReel 不运营那个产品。对照在 ${KLINGZ} ，Kling 落地页在 https://www.viralreel.app/zh/tiny-desk-outstanding-kling 。CapCut 是在 App 工程里贴照片，见 ${CAPCUTZ} 。`,
        `两类都不授权《Outstanding》。${SOUND_ZH} ${LIMIT_ZH} 积分在渲染前显示在生成器上。积分包：${PRICINGZ} 。月付：${SUBZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is ViralReel ranked the best Outstanding app by an outside list?', zh: '有外部榜单把 ViralReel 评为最好的 Outstanding 应用吗？' },
        a: {
          en: 'This page is not that list. It says the fixed desk with three photo slots is the ViralReel template, and a prompt-based generator is a different product.',
          zh: '这一页不是那种榜单。它说的是：三个照片位的固定桌子是 ViralReel 模板，基于提示词的生成器是另一个产品。',
        },
      },
      {
        q: { en: 'Do I still add the song myself?', zh: '歌还是要我自己加吗？' },
        a: {
          en: 'Yes. ViralReel does not license “Outstanding.” Add the trend sound in TikTok, Reels, or Shorts and label the post as AI.',
          zh: '对。ViralReel 不授权《Outstanding》。在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI。',
        },
      },
    ],
  },
  {
    keyword: 'how to make outstanding tiny desk ai',
    slug: 'how-to-make-outstanding-tiny-desk-ai',
    title: {
      en: 'How to Make an Outstanding Tiny Desk AI Video on ViralReel',
      zh: '如何在 ViralReel 制作 Outstanding Tiny Desk AI 视频',
    },
    description: {
      en: 'how to make outstanding tiny desk ai: pick one of six sets, fill Center Lead, Left Role, and Right Role, download the MP4, then add the trend sound and the AI label. Not a prompt. Not NPR. No song license.',
      zh: 'how to make outstanding tiny desk ai：六套阵容里选一套，填好中间主角、左边角色和右边角色，下载 MP4，再加热梗原声和 AI 标注。不是提示词。不是 NPR。不授权歌曲。',
    },
    h1: { en: 'How to make an Outstanding Tiny Desk AI video', zh: '如何制作 Outstanding Tiny Desk AI 视频' },
    lead: {
      en: 'To make an Outstanding Tiny Desk AI video, open the ViralReel template, pick a set, fill the three photo slots, download the MP4, then add the trend sound and the AI label in the app you post to.',
      zh: '要做一条 Outstanding Tiny Desk AI 视频，打开 ViralReel 模板，选一套阵容，填好三个照片位，下载 MP4，再在你发布的 App 里加热梗原声和 AI 标注。',
    },
    guideTitle: {
      en: 'Outstanding Tiny Desk, song title first',
      zh: 'Outstanding Tiny Desk，歌名在前',
    },
    body: {
      en: [
        `How to make outstanding tiny desk ai is the same job as the desk-first how-to, with the song typed first. The template is ${T}. ${SETS_EN} ${SLOTS_EN} You do not write a prompt. That limit is spelled out at https://www.viralreel.app/tiny-desk-outstanding-prompt.`,
        `The longer desk-first article is ${HOWTO}. Photo choices are ${PHOTO}. If the question arrived from ChatGPT, the chat can explain these steps and still cannot render the file. That split is https://www.viralreel.app/chatgpt-tiny-desk-outstanding.`,
        `${SOUND_EN} Posting for TikTok, Reels, and Shorts is ${POST}. ${LIMIT_EN} Read the credit cost before you generate. Packs are ${PRICING}. Monthly plans are ${SUB}.`,
      ],
      zh: [
        `How to make outstanding tiny desk ai 和桌子在前的教程是同一件事，只是歌名打在前面。模板在 ${TZ} 。${SETS_ZH} ${SLOTS_ZH} 不用写提示词。这条限制写在 https://www.viralreel.app/zh/tiny-desk-outstanding-prompt 。`,
        `更长的、桌子在前的文章在 ${HOWTOZ} 。照片怎么选在 ${PHOTOZ} 。如果问题来自 ChatGPT，对话可以解释这些步骤，但仍然不能渲染文件。这个区分在 https://www.viralreel.app/zh/chatgpt-tiny-desk-outstanding 。`,
        `${SOUND_ZH} TikTok、Reels 和 Shorts 的发布在 ${POSTZ} 。${LIMIT_ZH} 生成前看清积分。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is this a different generator from “how to make a Tiny Desk Outstanding AI video”?', zh: '这和「如何制作 Tiny Desk Outstanding AI 视频」是两个生成器吗？' },
        a: {
          en: `No. Song title first, desk second. Both open ${T}. The long article is ${HOWTO}.`,
          zh: `不是。歌名在前，桌子在后。两边都打开 ${TZ} 。长文在 ${HOWTOZ} 。`,
        },
      },
      {
        q: { en: 'What do I click first?', zh: '第一步点什么？' },
        a: {
          en: 'Open the template and pick one of the six sets. Then upload Center Lead, Left Role, and Right Role. The credit cost appears before you generate.',
          zh: '打开模板，六套阵容里选一套。然后上传中间主角、左边角色和右边角色。积分在生成前出现。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding prompt',
    slug: 'tiny-desk-outstanding-prompt',
    title: {
      en: 'Tiny Desk Outstanding Prompt – There Is No Prompt Box',
      zh: 'Tiny Desk Outstanding 提示词：没有提示词框',
    },
    description: {
      en: 'tiny desk outstanding prompt: the ViralReel template is fixed. Pick a set and upload Center Lead, Left Role, and Right Role. You do not describe the office in a prompt. Not NPR. No Outstanding license.',
      zh: 'tiny desk outstanding prompt：ViralReel 模板是固定的。选一套阵容，上传中间主角、左边角色和右边角色。不用在提示词里描述办公室。不是 NPR。不授权《Outstanding》。',
    },
    h1: { en: 'Tiny Desk Outstanding prompt', zh: 'Tiny Desk Outstanding 提示词' },
    lead: {
      en: 'There is no blank Tiny Desk Outstanding prompt on ViralReel. You pick one of six sets and upload three photos. The desk is already in the template.',
      zh: 'ViralReel 上没有空白的 Tiny Desk Outstanding 提示词框。六套阵容里选一套，上传三张照片。桌子已经在模板里。',
    },
    guideTitle: {
      en: 'What to do instead of writing a prompt',
      zh: '不写提示词的时候做什么',
    },
    body: {
      en: [
        `A tiny desk outstanding prompt search expects a text box: “describe the band, the office, the sax.” That is not this product. Open ${T}, choose a set, and fill the slots. ${SLOTS_EN} ${SETS_EN}`,
        `Generative tools that do take a prompt, including Kling-style clip tools, are a different workflow. The comparison is ${KLING}. The no-prompt how-to, with the song title first, is https://www.viralreel.app/how-to-make-outstanding-tiny-desk-ai.`,
        `${LIMIT_EN} Naming a celebrity in a prompt is not a feature here, because there is no prompt, and public figures are not accepted as uploads. ${SOUND_EN}`,
      ],
      zh: [
        `搜 tiny desk outstanding prompt，预期会有一个文本框：「描述乐队、办公室、萨克斯」。这不是这个产品。打开 ${TZ} ，选一套阵容，填好位置。${SLOTS_ZH} ${SETS_ZH}`,
        `真的接收提示词的生成式工具，包括 Kling 风格的片段工具，是另一套流程。对照在 ${KLINGZ} 。不写提示词的教程、歌名在前，在 https://www.viralreel.app/zh/how-to-make-outstanding-tiny-desk-ai 。`,
        `${LIMIT_ZH} 在提示词里写名人的名字不是这里的功能，因为没有提示词框，上传也不接受公众人物。${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Where do I paste the Tiny Desk Outstanding prompt?', zh: 'Tiny Desk Outstanding 的提示词贴在哪里？' },
        a: {
          en: 'Nowhere on ViralReel. Pick a set and upload Center Lead, Left Role, and Right Role. The scene is the template.',
          zh: '在 ViralReel 上没有这个位置。选一套阵容，上传中间主角、左边角色和右边角色。场景就是模板。',
        },
      },
      {
        q: { en: 'Can ChatGPT give me a prompt that renders the video?', zh: 'ChatGPT 能给我一段提示词来渲染视频吗？' },
        a: {
          en: `ChatGPT can repeat these steps. The MP4 is rendered at ${T}, not from a prompt inside the chat. See https://www.viralreel.app/chatgpt-tiny-desk-outstanding.`,
          zh: `ChatGPT 可以复述这些步骤。MP4 在 ${TZ} 渲染，不是用对话里的提示词渲染。见 https://www.viralreel.app/zh/chatgpt-tiny-desk-outstanding 。`,
        },
      },
    ],
  },
  {
    keyword: 'chatgpt tiny desk outstanding',
    slug: 'chatgpt-tiny-desk-outstanding',
    title: {
      en: 'ChatGPT Tiny Desk Outstanding – The Chat Explains, ViralReel Renders',
      zh: 'ChatGPT 和 Tiny Desk Outstanding：对话解释，ViralReel 渲染',
    },
    description: {
      en: 'chatgpt tiny desk outstanding: ChatGPT can explain the steps. The MP4 is made in the ViralReel browser template, not inside the chat. Three photo slots, six sets, no prompt. No Outstanding license.',
      zh: 'chatgpt tiny desk outstanding：ChatGPT 可以解释步骤。MP4 在 ViralReel 浏览器模板里做，不在对话里做。三个照片位，六套阵容，不写提示词。不授权《Outstanding》。',
    },
    h1: { en: 'ChatGPT and Tiny Desk Outstanding', zh: 'ChatGPT 和 Tiny Desk Outstanding' },
    lead: {
      en: 'ChatGPT can tell you how to make a Tiny Desk Outstanding fan parody. It does not render the MP4. The file is generated in the browser on ViralReel.',
      zh: 'ChatGPT 可以告诉你怎么做 Tiny Desk Outstanding 粉丝戏仿。它不渲染 MP4。文件是在 ViralReel 的浏览器里生成的。',
    },
    guideTitle: {
      en: 'What to do after ChatGPT answers',
      zh: 'ChatGPT 回答之后做什么',
    },
    body: {
      en: [
        `A chatgpt tiny desk outstanding question is usually “how do I make one?” The answer that produces a file is ${T}. ${SETS_EN} ${SLOTS_EN} There is no prompt to copy out of the chat. See https://www.viralreel.app/tiny-desk-outstanding-prompt.`,
        `The song-title-first steps are https://www.viralreel.app/how-to-make-outstanding-tiny-desk-ai. The longer article is ${HOWTO}. If the chat suggested Kling, the comparison is ${KLING}.`,
        `${SOUND_EN} ${LIMIT_EN} Do not ask the chat for a face swap of a public figure and do not upload those photos here. Pricing is ${PRICING}. Monthly plans are ${SUB}.`,
      ],
      zh: [
        `Chatgpt tiny desk outstanding 的问题通常是「我怎么做一条」。能产出文件的答案在 ${TZ} 。${SETS_ZH} ${SLOTS_ZH} 没有一段提示词需要从对话里复制出来。见 https://www.viralreel.app/zh/tiny-desk-outstanding-prompt 。`,
        `歌名在前的步骤在 https://www.viralreel.app/zh/how-to-make-outstanding-tiny-desk-ai 。更长的文章在 ${HOWTOZ} 。如果对话建议用 Kling，对照在 ${KLINGZ} 。`,
        `${SOUND_ZH} ${LIMIT_ZH} 不要让对话去做公众人物换脸，也不要在这里上传那些照片。定价在 ${PRICINGZ} 。月付在 ${SUBZ} 。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can ChatGPT export the Tiny Desk Outstanding MP4?', zh: 'ChatGPT 能导出 Tiny Desk Outstanding 的 MP4 吗？' },
        a: {
          en: `No. Open ${T}, upload three photos you have permission to use, and download the MP4 from ViralReel.`,
          zh: `不能。打开 ${TZ} ，上传三张你有权使用的照片，从 ViralReel 下载 MP4。`,
        },
      },
      {
        q: { en: 'Should I paste a list of famous people into ChatGPT?', zh: '我应该把一串名人贴进 ChatGPT 吗？' },
        a: {
          en: 'No. This template is for people who agreed to be in the clip. It is not a cast list of celebrities or other public figures.',
          zh: '不要。这个模板给同意出镜的人用。它不是名人或其他公众人物的选角名单。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding ai label',
    slug: 'tiny-desk-outstanding-ai-label',
    title: {
      en: 'Tiny Desk Outstanding AI Label – Disclose the Fan Parody When You Post',
      zh: 'Tiny Desk Outstanding 的 AI 标注：发布时标明粉丝戏仿',
    },
    description: {
      en: 'tiny desk outstanding ai label: the ViralReel MP4 is a generated fan parody. Turn on the AI label on TikTok, Reels, or Shorts, and add the trend sound from that app. ViralReel does not license Outstanding.',
      zh: 'tiny desk outstanding ai label：ViralReel 的 MP4 是生成的粉丝戏仿。在 TikTok、Reels 或 Shorts 上打开 AI 标注，并从该 App 加热梗原声。ViralReel 不授权《Outstanding》。',
    },
    h1: { en: 'Tiny Desk Outstanding AI label', zh: 'Tiny Desk Outstanding 的 AI 标注' },
    lead: {
      en: 'Label a Tiny Desk Outstanding post as AI. The ViralReel download is a generated fan parody, and TikTok, Reels, and Shorts ask for that disclosure.',
      zh: '把 Tiny Desk Outstanding 的帖子标成 AI。ViralReel 的下载是生成的粉丝戏仿，TikTok、Reels 和 Shorts 都要求做这个披露。',
    },
    guideTitle: {
      en: 'When to turn the AI label on',
      zh: '什么时候打开 AI 标注',
    },
    body: {
      en: [
        `The tiny desk outstanding ai label is a posting step, not a switch inside the template. Make the MP4 at ${T}. Download it. Upload it in TikTok, Instagram Reels, or YouTube Shorts, and use the AI-generated control that app shows. The cross-platform steps are ${POST}.`,
        `Instagram Reels are covered at https://www.viralreel.app/tiny-desk-outstanding-instagram. YouTube Shorts are at https://www.viralreel.app/tiny-desk-outstanding-youtube-shorts. A Reel search redirects to the Instagram page because that page is already the Reels upload.`,
        `${SOUND_EN} A caption that calls the clip a fan parody matches the file. ${LIMIT_EN} ViralReel is not affiliated with NPR, Charlie Wilson, or the Gap Band.`,
      ],
      zh: [
        `Tiny desk outstanding ai label 是发布步骤，不是模板里的一个开关。在 ${TZ} 做 MP4。下载。在 TikTok、Instagram Reels 或 YouTube Shorts 里上传，并使用该 App 显示的 AI 生成开关。跨平台步骤在 ${POSTZ} 。`,
        `Instagram Reels 写在 https://www.viralreel.app/zh/tiny-desk-outstanding-instagram 。YouTube Shorts 在 https://www.viralreel.app/zh/tiny-desk-outstanding-youtube-shorts 。搜 Reel 会转到 Instagram 那一页，因为那一页已经是 Reels 的上传说明。`,
        `${SOUND_ZH} 文案里写明这是粉丝戏仿，和文件是一致的。${LIMIT_ZH} ViralReel 与 NPR、Charlie Wilson 和 Gap Band 均无关联。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does ViralReel turn on the TikTok or Instagram AI label for me?', zh: 'ViralReel 会替我打开 TikTok 或 Instagram 的 AI 标注吗？' },
        a: {
          en: 'No. You turn it on in the app where you upload the MP4. ViralReel only renders the file.',
          zh: '不会。你在上传 MP4 的那个 App 里打开。ViralReel 只负责渲染文件。',
        },
      },
      {
        q: { en: 'Is the label optional because the clip is a parody?', zh: '因为是戏仿，标注就可以不打吗？' },
        a: {
          en: 'No. The file is AI-generated. Use the AI label the platform provides, and describe the post as a fan parody.',
          zh: '不行。文件是 AI 生成的。使用平台提供的 AI 标注，并把帖子写成粉丝戏仿。',
        },
      },
    ],
  },
];
