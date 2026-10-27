import type { LongTailEntry } from './long-tails';

/**
 * Second-wave intent pages for Wassup in a Minute.
 * Thin content only — routes reuse LongTailRoute and the shared OG image.
 * Do not claim Blue Lock characters, a song license, or affiliation.
 */

const T = 'https://www.viralreel.app/wassup-in-a-minute-ai-template';
const TZ = 'https://www.viralreel.app/zh/wassup-in-a-minute-ai-template';
const steps = 'shared' as const;

const OUTFITS_EN =
  'Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight are five outfits of the same sway.';
const OUTFITS_ZH =
  '甩钱原版、黑羽绒经典、全黑装、球衣版和大块头是同一种摇摆的五种造型。';
const SOUND_EN =
  'The sound people search is a jersey-club remix of Drake’s “From Time” with Jhené Aiko. The line is “wassup, been a minute.” ViralReel does not license or export that audio.';
const SOUND_ZH =
  '大家搜的原声是 Drake 与 Jhené Aiko《From Time》的 jersey club 混音，歌词是「wassup, been a minute」。ViralReel 不授权、也不导出这段音频。';
const LIMIT_EN =
  'Use one to four photos of adults you have permission to use. No minors, no celebrities, and no Blue Lock or other show characters. ViralReel is not affiliated with the trend originators.';
const LIMIT_ZH =
  '用一至四张你有权使用的成年人照片。不要未成年人、名人，也不要 Blue Lock 或其他影视角色。ViralReel 与趋势发起者无关。';

export const WASSUP_INTENT_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'wassup in a minute ai generator',
    slug: 'wassup-in-a-minute-ai-generator',
    title: {
      en: 'Wassup in a Minute AI Generator – Photo to Sway MP4 | ViralReel',
      zh: 'Wassup in a Minute AI 生成器：照片到摇摆 MP4 | ViralReel',
    },
    description: {
      en: 'wassup in a minute ai generator: ViralReel turns one to four photos into a swaying streetwear anime character. No prompt. Not a Blue Lock character. The MP4 does not include the song.',
      zh: 'wassup in a minute ai generator：ViralReel 用一至四张照片生成摇摆街服动漫角色。不写提示词。不是 Blue Lock 角色。MP4 不含歌曲。',
    },
    h1: { en: 'Wassup in a Minute AI generator', zh: 'Wassup in a Minute AI 生成器' },
    lead: {
      en: 'The Wassup in a Minute AI generator is the same browser template as the one-tap generator: your photo becomes an original streetwear character that sways. It is not a blank prompt box.',
      zh: 'Wassup in a Minute AI 生成器和一键生成器是同一个浏览器模板：你的照片变成会摇摆的原创街服角色。它不是空白提示词框。',
    },
    guideTitle: {
      en: 'What the AI generator actually runs',
      zh: '这个 AI 生成器实际在跑什么',
    },
    body: {
      en: [
        `A wassup in a minute ai generator search wants the photo-to-video tool, not a description of the meme. Open ${T}. Upload one to four clear photos, one person each, and generate a 9:16 MP4. ${OUTFITS_EN} The length on this template is 15 seconds so the sway reads as the trend.`,
        `You do not write a prompt and you do not draw the character. The white background, the soft shadow, and the side-to-side sway are already in the template. The plain generator page is https://www.viralreel.app/wassup-in-a-minute-generator.`,
        `${SOUND_EN} Add it in TikTok, Reels, or Shorts and turn on the AI label. ${LIMIT_EN} The credit cost shows before you start.`,
      ],
      zh: [
        `搜 wassup in a minute ai generator 要的是照片生成工具，不是梗介绍。打开 ${TZ} 。上传一至四张清晰照片，每张一个人，生成 9:16 的 MP4。${OUTFITS_ZH} 这条模板时长是 15 秒，摇摆才能被认成这条趋势。`,
        `你不用写提示词，也不用自己画角色。白底、软阴影和左右摇摆都已经在模板里。普通「生成器」页是 https://www.viralreel.app/zh/wassup-in-a-minute-generator 。`,
        `${SOUND_ZH} 在 TikTok、Reels 或 Shorts 里另加，并打开 AI 标注。${LIMIT_ZH} 积分在生成前显示。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is the AI generator a different product from the template?', zh: 'AI 生成器和模板是两个产品吗？' },
        a: {
          en: `No. Both open ${T}. “AI generator” means the photo goes through the video model inside that template.`,
          zh: `不是。两边都打开 ${TZ} 。「AI 生成器」指的是照片在这个模板里走视频模型。`,
        },
      },
      {
        q: { en: 'Will it draw a Blue Lock character if I ask?', zh: '我要求的话会画出 Blue Lock 角色吗？' },
        a: {
          en: 'No. The output is an original anime drawing of the person in the photo, in generic streetwear. The disclaimer is at https://www.viralreel.app/wassup-in-a-minute-blue-lock.',
          zh: '不会。成片是照片里这个人的原创动漫形象，穿的是普通街服。说明在 https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。',
        },
      },
    ],
  },
  {
    keyword: 'make wassup in a minute ai',
    slug: 'make-wassup-in-a-minute-ai',
    title: {
      en: 'Make a Wassup in a Minute AI Video from Photos | ViralReel',
      zh: '用照片制作 Wassup in a Minute AI 视频 | ViralReel',
    },
    description: {
      en: 'make wassup in a minute ai: upload one to four photos on ViralReel, pick an outfit, download the 15-second 9:16 MP4, then add the trend sound yourself. No song license.',
      zh: 'make wassup in a minute ai：在 ViralReel 上传一至四张照片，选造型，下载 15 秒 9:16 MP4，再自己加热梗原声。不授权歌曲。',
    },
    h1: { en: 'Make a Wassup in a Minute AI video', zh: '制作 Wassup in a Minute AI 视频' },
    lead: {
      en: 'To make a Wassup in a Minute AI video, use the ViralReel template. One photo is enough. Four photos put a row of original characters on the white background.',
      zh: '制作 Wassup in a Minute AI 视频，用 ViralReel 模板。一张照片就够。四张照片会在白底上排出一排原创角色。',
    },
    guideTitle: {
      en: 'How to make the sway',
      zh: '怎么做出这段摇摆',
    },
    body: {
      en: [
        `Make wassup in a minute ai means: open ${T}, upload photos you have permission to use, and generate. ${OUTFITS_EN} Keep 9:16. The template fixes the clip at 15 seconds.`,
        `The step-by-step write-up is https://www.viralreel.app/blog/how-to-make-wassup-in-a-minute-ai-video. “Create” is the same job, at https://www.viralreel.app/create-wassup-in-a-minute-ai.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `Make wassup in a minute ai 的意思是：打开 ${TZ} ，上传你有权使用的照片，然后生成。${OUTFITS_ZH} 保持 9:16。模板把片子固定在 15 秒。`,
        `逐步教程在 https://www.viralreel.app/zh/blog/how-to-make-wassup-in-a-minute-ai-video 。「创建」是同一件事，在 https://www.viralreel.app/zh/create-wassup-in-a-minute-ai 。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'How many photos do I need to make one?', zh: '做一条需要几张照片？' },
        a: {
          en: 'One to four. One person per photo. Fewer photos means fewer characters in the row.',
          zh: '一到四张。每张一个人。照片越少，队列里的角色越少。',
        },
      },
      {
        q: { en: 'Does “make” include the song?', zh: '「制作」包含歌曲吗？' },
        a: {
          en: 'No. You make the picture. Add the jersey-club sound inside TikTok, Reels, or Shorts.',
          zh: '不包含。你做的是画面。jersey club 原声在 TikTok、Reels 或 Shorts 里另加。',
        },
      },
    ],
  },
  {
    keyword: 'create wassup in a minute ai',
    slug: 'create-wassup-in-a-minute-ai',
    title: {
      en: 'Create a Wassup in a Minute AI Clip | ViralReel',
      zh: '创建一条 Wassup in a Minute AI 短片 | ViralReel',
    },
    description: {
      en: 'create wassup in a minute ai: author a new sway MP4 of your own people. ViralReel does not hand over the original TikTok or a Blue Lock drawing.',
      zh: 'create wassup in a minute ai：用你自己的人做一条新的摇摆 MP4。ViralReel 不提供原始 TikTok，也不提供 Blue Lock 画稿。',
    },
    h1: { en: 'Create a Wassup in a Minute AI clip', zh: '创建 Wassup in a Minute AI 短片' },
    lead: {
      en: 'Create a Wassup in a Minute AI clip means a new file with your photos in it. It does not mean downloading the viral edit.',
      zh: '创建 Wassup in a Minute AI 短片，指的是一条放了你照片的新文件。不是去下载那条爆火剪辑。',
    },
    guideTitle: {
      en: 'Create a new clip, not a reupload',
      zh: '创建新片子，不是搬运',
    },
    body: {
      en: [
        `Create wassup in a minute ai at ${T}. The result is a new fictional animation: original streetwear anime characters swaying on white. ${OUTFITS_EN}`,
        'ViralReel does not host the original TikTok, a fan artist’s file, or any show character. If the search was really “what is this trend,” start at https://www.viralreel.app/blog/what-is-wassup-in-a-minute.',
        `${SOUND_EN} ${LIMIT_EN} Credits show before you generate. Paid packs and monthly plans export without a ViralReel watermark.`,
      ],
      zh: [
        `在 ${TZ} 创建 wassup in a minute ai。成片是新的虚构动画：原创街服动漫角色在白底上摇摆。${OUTFITS_ZH}`,
        'ViralReel 不托管原始 TikTok、粉丝画稿或任何影视角色。如果搜的其实是「这是什么趋势」，从 https://www.viralreel.app/zh/blog/what-is-wassup-in-a-minute 看起。',
        `${SOUND_ZH} ${LIMIT_ZH} 积分在生成前显示。付费积分包和月付方案导出时没有 ViralReel 水印。`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I create this from a screenshot of the original edit?', zh: '能用原剪辑的截图来创建吗？' },
        a: {
          en: 'No. Upload a photo of yourself or of an adult who agreed. Do not upload a screenshot of someone else’s animation.',
          zh: '不能。上传你自己的照片，或同意过的成年人的照片。不要上传别人动画的截图。',
        },
      },
      {
        q: { en: 'Is create the same as make?', zh: '创建和制作是一回事吗？' },
        a: {
          en: 'Yes. Both mean a new MP4 from the Wassup in a Minute template. The make page is https://www.viralreel.app/make-wassup-in-a-minute-ai.',
          zh: '是。两者都是用 Wassup in a Minute 模板做一条新 MP4。制作页在 https://www.viralreel.app/zh/make-wassup-in-a-minute-ai 。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute from photo',
    slug: 'wassup-in-a-minute-from-photo',
    title: {
      en: 'Wassup in a Minute from a Photo – One to Four Faces | ViralReel',
      zh: '用照片做 Wassup in a Minute：一到四张脸 | ViralReel',
    },
    description: {
      en: 'wassup in a minute from photo: a clear front-facing photo becomes an original streetwear anime character on white. Up to four photos. No Blue Lock cast. No song in the file.',
      zh: 'wassup in a minute from photo：一张清晰正面照变成白底原创街服动漫角色。最多四张。不是 Blue Lock 角色。文件里没有歌。',
    },
    h1: { en: 'Wassup in a Minute from a photo', zh: '用照片做 Wassup in a Minute' },
    lead: {
      en: 'Wassup in a Minute from a photo starts with a face you have permission to use. The template draws that person as an original streetwear character and sways them.',
      zh: '用照片做 Wassup in a Minute，起点是一张你有权使用的脸。模板把这个人画成原创街服角色并让他摇摆。',
    },
    guideTitle: {
      en: 'Which photo to upload',
      zh: '上传什么样的照片',
    },
    body: {
      en: [
        `Open ${T} and upload one to four photos. One person per photo, face toward the camera, knees up or full body. JPG, PNG, and WebP work. Skip group shots, sunglasses, and heavy filters — the face is what the drawing follows.`,
        `${OUTFITS_EN} The characters stand in a row on white, the way the original edit does. A screenshot of a Blue Lock drawing is not a source photo. The line is explained at https://www.viralreel.app/wassup-in-a-minute-blue-lock.`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `打开 ${TZ} ，上传一至四张照片。每张一个人，正对镜头，半身或全身。支持 JPG、PNG、WebP。不要合照、墨镜和重滤镜——画面跟的是这张脸。`,
        `${OUTFITS_ZH} 角色在白底上排成一排，和原剪辑一样。Blue Lock 画稿的截图不能当素材。界线写在 https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can four friends be in one clip?', zh: '四个朋友能出现在同一条里吗？' },
        a: {
          en: 'Yes. Upload up to four photos, one person each. They stand in a row and sway.',
          zh: '可以。最多上传四张，每张一个人。他们排成一排摇摆。',
        },
      },
      {
        q: { en: 'Can I use a child’s photo or a celebrity photo?', zh: '能用小孩或名人的照片吗？' },
        a: {
          en: 'No. Adults you have permission to use only. No minors, celebrities, or strangers.',
          zh: '不能。只用你有权使用的成年人照片。不要未成年人、名人和陌生人。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute online',
    slug: 'wassup-in-a-minute-online',
    title: {
      en: 'Wassup in a Minute Online – Browser Template, No App | ViralReel',
      zh: '在线 Wassup in a Minute：浏览器模板，不用装 App | ViralReel',
    },
    description: {
      en: 'wassup in a minute online: make the sway in the browser on ViralReel. No app install and no CapCut project. Download a new 9:16 MP4.',
      zh: 'wassup in a minute online：在 ViralReel 的浏览器里做这段摇摆。不用装 App，也没有 CapCut 工程。下载一条新的 9:16 MP4。',
    },
    h1: { en: 'Wassup in a Minute online', zh: '在线 Wassup in a Minute' },
    lead: {
      en: 'Wassup in a Minute online means the ViralReel page in your browser. There is no app to install and no project file to hunt down.',
      zh: '在线 Wassup in a Minute 指的是浏览器里的 ViralReel 页面。不用安装 App，也不用去找工程文件。',
    },
    guideTitle: {
      en: 'The browser path',
      zh: '浏览器里的路径',
    },
    body: {
      en: [
        `Go to ${T}. That is the online tool. Pick an outfit, upload one to four photos, read the credits, and generate. ${OUTFITS_EN}`,
        'If the search was “CapCut online,” CapCut stays inside the CapCut app. ViralReel does not host that project. See https://www.viralreel.app/wassup-in-a-minute-capcut and https://www.viralreel.app/wassup-in-a-minute-without-capcut.',
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `打开 ${TZ} 。这就是在线工具。选造型，上传一至四张照片，看清积分，生成。${OUTFITS_ZH}`,
        '如果搜的是「在线 CapCut」，CapCut 留在 CapCut App 里。ViralReel 不托管那个工程。见 https://www.viralreel.app/zh/wassup-in-a-minute-capcut 和 https://www.viralreel.app/zh/wassup-in-a-minute-without-capcut 。',
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Do I need to install ViralReel?', zh: '需要安装 ViralReel 吗？' },
        a: {
          en: 'No. It runs in the browser. Download the MP4 when the render finishes.',
          zh: '不需要。它在浏览器里运行。渲染完成后下载 MP4。',
        },
      },
      {
        q: { en: 'Is the online page the original animation?', zh: '这个在线页面是原动画吗？' },
        a: {
          en: 'No. It generates a new clip from your photos. ViralReel does not host the original TikTok.',
          zh: '不是。它用你的照片生成一条新片子。ViralReel 不托管原始 TikTok。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute capcut',
    slug: 'wassup-in-a-minute-capcut',
    title: {
      en: 'Wassup in a Minute CapCut – And the Browser Alternative',
      zh: 'Wassup in a Minute CapCut：以及浏览器里的另一种做法',
    },
    description: {
      en: 'wassup in a minute capcut: CapCut pastes photos into a template inside the app. ViralReel generates a new sway MP4 in the browser. Fair comparison. No song license. No Blue Lock characters.',
      zh: 'wassup in a minute capcut：CapCut 在 App 里把照片贴进模板。ViralReel 在浏览器里生成新的摇摆 MP4。公平对照。不授权歌曲。没有 Blue Lock 角色。',
    },
    h1: { en: 'Wassup in a Minute CapCut', zh: 'Wassup in a Minute CapCut' },
    lead: {
      en: 'Wassup in a Minute CapCut is the in-app paste. ViralReel is the browser path to a new sway MP4. Neither one is the original TikTok, and neither one licenses the song.',
      zh: 'Wassup in a Minute CapCut 是 App 里的贴图。ViralReel 是在浏览器里做新摇摆 MP4 的路径。两者都不是原始 TikTok，也都不授权歌曲。',
    },
    guideTitle: {
      en: 'CapCut template versus a browser MP4',
      zh: 'CapCut 模板和浏览器 MP4',
    },
    body: {
      en: [
        'A wassup in a minute capcut search usually wants a template inside CapCut: open the app, find the project, paste photos into fixed slots. That is reasonable if the rest of your edit already lives on a CapCut timeline. ViralReel does not operate CapCut and does not host or rank its templates.',
        `ViralReel stays in the browser at ${T}. ${OUTFITS_EN} You upload one to four photos and download a new 9:16 MP4. The no-CapCut wording is https://www.viralreel.app/wassup-in-a-minute-without-capcut.`,
        `You can use both: generate on ViralReel, then import the MP4 into CapCut if you still want a timeline. ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        '搜 wassup in a minute capcut 通常是想要 CapCut 里的模板：打开 App，找到工程，把照片贴进固定槽位。如果你其余的剪辑已经在 CapCut 时间线上，这很合理。ViralReel 不运营 CapCut，也不托管或给它的模板排名。',
        `ViralReel 留在浏览器里：${TZ} 。${OUTFITS_ZH} 上传一至四张照片，下载一条新的 9:16 MP4。不用 CapCut 的说法在 https://www.viralreel.app/zh/wassup-in-a-minute-without-capcut 。`,
        `两条路可以一起用：在 ViralReel 生成，如果还想要时间线，再把 MP4 导入 CapCut。${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does ViralReel open inside CapCut?', zh: 'ViralReel 是在 CapCut 里面打开的吗？' },
        a: {
          en: 'No. CapCut keeps its template in the CapCut app. ViralReel generates the MP4 in the browser.',
          zh: '不是。CapCut 的模板留在 CapCut App 里。ViralReel 在浏览器里生成 MP4。',
        },
      },
      {
        q: { en: 'Does either path include the Drake remix?', zh: '两条路都会带上 Drake 的混音吗？' },
        a: {
          en: 'ViralReel does not. A CapCut project is not a license either. Add the trend sound from the TikTok, Reels, or Shorts library when you post.',
          zh: 'ViralReel 不会。CapCut 工程也不是授权。发布时从 TikTok、Reels 或 Shorts 的曲库加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute without capcut',
    slug: 'wassup-in-a-minute-without-capcut',
    title: {
      en: 'Wassup in a Minute Without CapCut – Make It in the Browser',
      zh: '不用 CapCut 的 Wassup in a Minute：在浏览器里做',
    },
    description: {
      en: 'wassup in a minute without capcut: skip the CapCut project. ViralReel generates the sway MP4 in the browser from one to four photos. No song file.',
      zh: 'wassup in a minute without capcut：不用去找 CapCut 工程。ViralReel 在浏览器里用一至四张照片生成摇摆 MP4。没有歌曲文件。',
    },
    h1: { en: 'Wassup in a Minute without CapCut', zh: '不用 CapCut 的 Wassup in a Minute' },
    lead: {
      en: 'You can make the Wassup in a Minute sway without opening CapCut. ViralReel generates a new MP4 in the browser.',
      zh: '不打开 CapCut 也能做 Wassup in a Minute 摇摆。ViralReel 在浏览器里生成一条新的 MP4。',
    },
    guideTitle: {
      en: 'The path that never opens CapCut',
      zh: '从头到尾不用打开 CapCut 的路径',
    },
    body: {
      en: [
        `Wassup in a minute without capcut means you do not want to install CapCut or paste stills into someone else’s project. Stay at ${T}. ${OUTFITS_EN}`,
        'The CapCut keyword itself is https://www.viralreel.app/wassup-in-a-minute-capcut. ViralReel does not hide a CapCut file on the site.',
        `${SOUND_EN} Download the MP4, add the sound on the platform, and turn on the AI label. ${LIMIT_EN}`,
      ],
      zh: [
        `Wassup in a minute without capcut 的意思是：你不想安装 CapCut，也不想把静帧贴进别人的工程。留在 ${TZ} 。${OUTFITS_ZH}`,
        'CapCut 这个关键词本身在 https://www.viralreel.app/zh/wassup-in-a-minute-capcut 。ViralReel 站内没有藏着 CapCut 文件。',
        `${SOUND_ZH} 下载 MP4，在平台上加原声，并打开 AI 标注。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I finish the sway without CapCut?', zh: '不靠 CapCut 能做完这段摇摆吗？' },
        a: {
          en: 'Yes. Generate on ViralReel, download the MP4, then add the trend sound in TikTok, Reels, or Shorts.',
          zh: '可以。在 ViralReel 生成，下载 MP4，然后在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Is a CapCut template hidden on this page?', zh: '这个页面是不是藏了一个 CapCut 模板？' },
        a: {
          en: 'No. This page points at the browser template only.',
          zh: '没有。这一页只指向浏览器模板。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute instagram',
    slug: 'wassup-in-a-minute-instagram',
    title: {
      en: 'Wassup in a Minute on Instagram Reels | ViralReel',
      zh: '把 Wassup in a Minute 发到 Instagram Reels | ViralReel',
    },
    description: {
      en: 'wassup in a minute instagram: download the 9:16 MP4 from ViralReel, upload it as a Reel, add Instagram’s library sound, and turn on the AI label. ViralReel does not license the remix.',
      zh: 'wassup in a minute instagram：从 ViralReel 下载 9:16 MP4，作为 Reel 上传，加上 Instagram 曲库原声，并打开 AI 标注。ViralReel 不授权这段混音。',
    },
    h1: { en: 'Wassup in a Minute on Instagram', zh: 'Instagram 上的 Wassup in a Minute' },
    lead: {
      en: 'Post Wassup in a Minute on Instagram as a Reel. The file from ViralReel is the picture. Instagram’s sound picker is where the trend audio goes.',
      zh: '把 Wassup in a Minute 发到 Instagram，用 Reel。ViralReel 的文件是画面。热梗原声加在 Instagram 的曲库里。',
    },
    guideTitle: {
      en: 'How to post the Reel',
      zh: '怎么发这条 Reel',
    },
    body: {
      en: [
        `Make the clip at ${T} on 9:16, which is the Reel ratio. ${OUTFITS_EN} Download the MP4. Do not upload the original TikTok into Instagram.`,
        'In Instagram, upload your MP4 as a Reel. Search “wassup in a minute” or “wassup been a minute” in the sound picker and add that library sound. Turn on the AI label where Instagram asks.',
        `${SOUND_EN} TikTok steps are at https://www.viralreel.app/wassup-in-a-minute-tiktok. Shorts are at https://www.viralreel.app/wassup-in-a-minute-youtube-shorts. ${LIMIT_EN}`,
      ],
      zh: [
        `在 ${TZ} 用 9:16 做片子，这就是 Reel 的画幅。${OUTFITS_ZH} 下载 MP4。不要把原始 TikTok 上传到 Instagram。`,
        '在 Instagram 里把你的 MP4 作为 Reel 上传。在曲库搜索「wassup in a minute」或「wassup been a minute」并加上那条原声。在 Instagram 要求时打开 AI 标注。',
        `${SOUND_ZH} TikTok 步骤在 https://www.viralreel.app/zh/wassup-in-a-minute-tiktok 。Shorts 在 https://www.viralreel.app/zh/wassup-in-a-minute-youtube-shorts 。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Does the Reel file already contain the sound?', zh: 'Reel 文件里已经有声音了吗？' },
        a: {
          en: 'No. Add Instagram’s library sound after you upload the MP4.',
          zh: '没有。上传 MP4 之后再加 Instagram 曲库里的原声。',
        },
      },
      {
        q: { en: 'Should I cross-post the TikTok file?', zh: '应该把 TikTok 文件交叉发布吗？' },
        a: {
          en: 'Upload the ViralReel MP4 natively in Instagram and add the sound there. A reupload of someone else’s TikTok is a different file, and ViralReel does not host it.',
          zh: '在 Instagram 里原生上传 ViralReel 的 MP4，并在那里加原声。搬运别人的 TikTok 是另一个文件，ViralReel 不托管它。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute youtube shorts',
    slug: 'wassup-in-a-minute-youtube-shorts',
    title: {
      en: 'Wassup in a Minute YouTube Shorts | ViralReel',
      zh: 'Wassup in a Minute YouTube Shorts | ViralReel',
    },
    description: {
      en: 'wassup in a minute youtube shorts: upload the 9:16 ViralReel MP4 as a Short, add the trend sound from YouTube, and disclose AI where YouTube asks. No song in the download.',
      zh: 'wassup in a minute youtube shorts：把 ViralReel 的 9:16 MP4 作为 Short 上传，从 YouTube 加热梗原声，并在 YouTube 要求时披露 AI。下载文件里没有歌。',
    },
    h1: { en: 'Wassup in a Minute YouTube Shorts', zh: 'Wassup in a Minute YouTube Shorts' },
    lead: {
      en: 'A Wassup in a Minute YouTube Short is your new MP4, uploaded as a Short. The download is not a soundtrack.',
      zh: 'Wassup in a Minute YouTube Short 是你的新 MP4，作为 Short 上传。下载文件不是原声带。',
    },
    guideTitle: {
      en: 'How to post the Short',
      zh: '怎么发这条 Short',
    },
    body: {
      en: [
        `Generate at ${T} and leave the ratio on 9:16. ${OUTFITS_EN} Download the MP4 from https://www.viralreel.app/wassup-in-a-minute-mp4 if you landed on the file-format search first.`,
        'Upload that file as a YouTube Short. Add the trend sound from YouTube’s library if it is there, and use YouTube’s AI disclosure where it asks. Do not upload the original animation.',
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `在 ${TZ} 生成，画幅保持 9:16。${OUTFITS_ZH} 如果先搜到的是文件格式，MP4 说明在 https://www.viralreel.app/zh/wassup-in-a-minute-mp4 。`,
        '把这个文件作为 YouTube Short 上传。如果曲库里有热梗原声就加上，并在 YouTube 要求时使用 AI 披露。不要上传原动画。',
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What ratio should the Short use?', zh: 'Short 用什么画幅？' },
        a: {
          en: '9:16. The Wassup in a Minute template opens on that ratio.',
          zh: '9:16。Wassup in a Minute 模板默认就是这个画幅。',
        },
      },
      {
        q: { en: 'Does ViralReel upload the Short for me?', zh: 'ViralReel 会帮我上传 Short 吗？' },
        a: {
          en: 'No. You download the MP4 and upload it in YouTube yourself.',
          zh: '不会。你下载 MP4，自己在 YouTube 上传。',
        },
      },
    ],
  },
  {
    keyword: 'wassup in a minute mp4',
    slug: 'wassup-in-a-minute-mp4',
    title: {
      en: 'Wassup in a Minute MP4 – What You Download | ViralReel',
      zh: 'Wassup in a Minute MP4：你下载到的是什么 | ViralReel',
    },
    description: {
      en: 'wassup in a minute mp4: the ViralReel download is a new 9:16, 15-second sway video. It is not a GIF, not the original TikTok, and not a separate audio file. Paid exports have no ViralReel watermark.',
      zh: 'wassup in a minute mp4：ViralReel 的下载是一条新的 9:16、15 秒摇摆视频。不是 GIF，不是原始 TikTok，也不是单独的音频文件。付费导出没有 ViralReel 水印。',
    },
    h1: { en: 'Wassup in a Minute MP4', zh: 'Wassup in a Minute MP4' },
    lead: {
      en: 'The Wassup in a Minute MP4 is a new video file of your character swaying. It is not the song and not the original edit.',
      zh: 'Wassup in a Minute MP4 是你的角色在摇摆的新视频文件。不是那首歌，也不是原剪辑。',
    },
    guideTitle: {
      en: 'What the download contains',
      zh: '下载文件里有什么',
    },
    body: {
      en: [
        `Generate at ${T}. The download is an MP4: 9:16, 15 seconds, original streetwear characters on white. ${OUTFITS_EN} It is not a GIF. The GIF-style loop people remember is the motion inside this video.`,
        'Paid credit packs and monthly plans export without a ViralReel watermark. The generator shows the credit cost before you start. Failed jobs return those credits.',
        `${SOUND_EN} There is no separate audio download. ${LIMIT_EN}`,
      ],
      zh: [
        `在 ${TZ} 生成。下载的是 MP4：9:16，15 秒，白底原创街服角色。${OUTFITS_ZH} 它不是 GIF。大家记得的那种循环，是这条视频里的动作。`,
        '付费积分包和月付方案导出时没有 ViralReel 水印。生成器在开始前显示积分。失败的任务会退回这些积分。',
        `${SOUND_ZH} 没有单独的音频下载。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I download the song as MP3 from this MP4?', zh: '能从这个 MP4 里把歌下载成 MP3 吗？' },
        a: {
          en: 'No. ViralReel does not license or export the remix. The file is the picture.',
          zh: '不能。ViralReel 不授权也不导出这段混音。文件是画面。',
        },
      },
      {
        q: { en: 'Is the MP4 watermarked?', zh: 'MP4 有水印吗？' },
        a: {
          en: 'Paid credit packs and monthly plans export without a ViralReel watermark.',
          zh: '付费积分包和月付方案导出时没有 ViralReel 水印。',
        },
      },
    ],
  },
  {
    keyword: 'atlanta lock',
    slug: 'atlanta-lock',
    title: {
      en: 'Atlanta Lock – The Streetwear Style, Not Blue Lock | ViralReel',
      zh: 'Atlanta Lock：街服画风，不是 Blue Lock | ViralReel',
    },
    description: {
      en: 'atlanta lock: a fan nickname for streetwear drawings in the Blue Lock look — puffers, chains, baggy jeans — without being the show. ViralReel draws you, not the cast. The AI tool is Atlanta Lock AI.',
      zh: 'atlanta lock：粉丝对 Blue Lock 那种街服画风的昵称——羽绒服、链子、阔腿裤——但不是那部动画。ViralReel 画的是你，不是角色。AI 工具页是 Atlanta Lock AI。',
    },
    h1: { en: 'What Atlanta Lock means', zh: 'Atlanta Lock 是什么意思' },
    lead: {
      en: 'Atlanta Lock is a fan nickname for a drawing style: streetwear on an anime figure, puffer and chains, often holding cash. It is not a ViralReel license to generate Blue Lock characters.',
      zh: 'Atlanta Lock 是一种画风的粉丝昵称：动漫人物穿街服、羽绒服和链子，经常拿着现金。它不是 ViralReel 去生成 Blue Lock 角色的许可。',
    },
    guideTitle: {
      en: 'Atlanta Lock versus Blue Lock',
      zh: 'Atlanta Lock 和 Blue Lock',
    },
    body: {
      en: [
        'Atlanta Lock is what fans called drawings that restyle the football anime Blue Lock as Atlanta streetwear: puffer jackets, gold chains, baggy jeans, fanned-out cash. The late-October 2026 sway edit made that look travel. The name is a style, not a character list.',
        `ViralReel’s version is at ${T} and at https://www.viralreel.app/atlanta-lock-ai. It draws an original character from your photo in that streetwear sway. It does not draw Blue Lock players or any other show cast, and it does not use a fan artist’s file. The longer disclaimer is https://www.viralreel.app/wassup-in-a-minute-blue-lock. The style essay is https://www.viralreel.app/blog/wassup-in-a-minute-song-and-atlanta-lock.`,
        `${OUTFITS_EN} ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        'Atlanta Lock 是粉丝对一种画法的叫法：把足球动漫 Blue Lock 画成亚特兰大街服——羽绒服、金链、阔腿裤、手挥现金。2026 年 10 月下旬的摇摆剪辑让这个造型传开了。这个名字是画风，不是角色名单。',
        `ViralReel 的版本在 ${TZ} ，以及 https://www.viralreel.app/zh/atlanta-lock-ai 。它用你的照片画一个同款街服摇摆的原创角色。它不画 Blue Lock 球员或其他作品角色，也不使用粉丝画稿。更完整的说明在 https://www.viralreel.app/zh/wassup-in-a-minute-blue-lock 。画风文章在 https://www.viralreel.app/zh/blog/wassup-in-a-minute-song-and-atlanta-lock 。`,
        `${OUTFITS_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Atlanta Lock a Blue Lock character?', zh: 'Atlanta Lock 是 Blue Lock 的角色吗？' },
        a: {
          en: 'No. It is a nickname for the streetwear drawing style. ViralReel does not generate the show’s characters.',
          zh: '不是。它是街服画风的昵称。ViralReel 不生成那部动画的角色。',
        },
      },
      {
        q: { en: 'Where do I make the AI version?', zh: 'AI 版在哪里做？' },
        a: {
          en: `At ${T}. The shorter alias page is https://www.viralreel.app/atlanta-lock-ai.`,
          zh: `在 ${TZ} 。更短的别名页是 https://www.viralreel.app/zh/atlanta-lock-ai 。`,
        },
      },
    ],
  },
  {
    keyword: 'been a minute',
    slug: 'been-a-minute',
    title: {
      en: 'Been a Minute – The Real Lyric in the Wassup Trend | ViralReel',
      zh: 'Been a Minute：Wassup 趋势里真正的歌词 | ViralReel',
    },
    description: {
      en: 'been a minute: the lyric in the jersey-club remix is “wassup, been a minute,” from Drake’s “From Time.” People also hear “wassup in a minute.” ViralReel does not license the audio.',
      zh: 'been a minute：jersey club 混音里的歌词是「wassup, been a minute」，出自 Drake 的《From Time》。也有人听成「wassup in a minute」。ViralReel 不授权这段音频。',
    },
    h1: { en: 'Been a minute', zh: 'Been a minute' },
    lead: {
      en: '“Been a minute” is the lyric. “Wassup in a minute” is how most people hear it. Both names point at the same sway trend.',
      zh: '「Been a minute」是歌词。「Wassup in a minute」是大多数人的听法。两个名字指向同一条摇摆趋势。',
    },
    guideTitle: {
      en: 'Why the trend has two names',
      zh: '为什么这条趋势有两个名字',
    },
    body: {
      en: [
        'The jersey-club remix is built on “From Time” by Drake with Jhené Aiko. The sung line is “wassup, been a minute.” On TikTok that gets heard as “wassup in a minute,” which became the trend name. Other ears hear “wassup wait a minute” or “wasala in a minute.”',
        `Those are spellings of one sound, not four products. The sway template is ${T}. The longer lyric page is https://www.viralreel.app/wassup-been-a-minute. “Wait a minute” is https://www.viralreel.app/wassup-wait-a-minute. “Wasala” is https://www.viralreel.app/wasala.`,
        `${SOUND_EN} ${OUTFITS_EN} ${LIMIT_EN}`,
      ],
      zh: [
        '这段 jersey club 混音取自 Drake 与 Jhené Aiko 的《From Time》。唱出来的是「wassup, been a minute」。在 TikTok 上它被听成「wassup in a minute」，并成了趋势的名字。也有人听成「wassup wait a minute」或「wasala in a minute」。',
        `这些是同一段声音的不同拼法，不是四个产品。摇摆模板在 ${TZ} 。更长的歌词页是 https://www.viralreel.app/zh/wassup-been-a-minute 。「Wait a minute」在 https://www.viralreel.app/zh/wassup-wait-a-minute 。「Wasala」在 https://www.viralreel.app/zh/wasala 。`,
        `${SOUND_ZH} ${OUTFITS_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is “been a minute” a different song?', zh: '「been a minute」是另一首歌吗？' },
        a: {
          en: 'No. It is the line inside the same remix people caption as “wassup in a minute.”',
          zh: '不是。它就是大家标题写成「wassup in a minute」的同一段混音里的那句歌词。',
        },
      },
      {
        q: { en: 'Can I download “been a minute” here?', zh: '能在这里下载「been a minute」吗？' },
        a: {
          en: 'No. ViralReel does not license or export the audio. Add the trend sound in TikTok, Reels, or Shorts.',
          zh: '不能。ViralReel 不授权也不导出这段音频。在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'wasala',
    slug: 'wasala',
    title: {
      en: 'Wasala – A Mishearing of Wassup in a Minute | ViralReel',
      zh: 'Wasala：Wassup in a Minute 的一种听写 | ViralReel',
    },
    description: {
      en: 'wasala: some people hear the jersey-club hook as “wasala in a minute.” It is the same Wassup in a Minute sway, not a second song and not a Blue Lock clip. ViralReel does not license the audio.',
      zh: 'wasala：有人把这段 jersey club 副歌听成「wasala in a minute」。它就是同一条 Wassup in a Minute 摇摆，不是第二首歌，也不是 Blue Lock 片段。ViralReel 不授权音频。',
    },
    h1: { en: 'Wasala', zh: 'Wasala' },
    lead: {
      en: 'Wasala is a mishearing of “wassup.” The clip people want is still the white-background streetwear sway.',
      zh: 'Wasala 是「wassup」的一种听写。大家要的片子仍是白底街服摇摆。',
    },
    guideTitle: {
      en: 'What “wasala” is pointing at',
      zh: '「wasala」指向的是什么',
    },
    body: {
      en: [
        'Searchers type wasala, wasala in a minute, or wassala when the jersey-club hook does not sound like “wassup” to them. It is the same audio: a remix of Drake’s “From Time,” lyric “wassup, been a minute.” It is not a separate track and not a Blue Lock scene.',
        `The template that makes the AI sway is ${T}. Spellings are also covered at https://www.viralreel.app/been-a-minute and https://www.viralreel.app/wassup-been-a-minute. What the trend is: https://www.viralreel.app/blog/what-is-wassup-in-a-minute.`,
        `${SOUND_EN} ${OUTFITS_EN} ${LIMIT_EN}`,
      ],
      zh: [
        '当这段 jersey club 副歌听起来不像「wassup」时，有人会搜 wasala、wasala in a minute 或 wassala。音频是同一段：Drake《From Time》的混音，歌词是「wassup, been a minute」。它不是另一首歌，也不是 Blue Lock 的一场戏。',
        `做这条 AI 摇摆的模板在 ${TZ} 。拼写说明也在 https://www.viralreel.app/zh/been-a-minute 和 https://www.viralreel.app/zh/wassup-been-a-minute 。趋势是什么：https://www.viralreel.app/zh/blog/what-is-wassup-in-a-minute 。`,
        `${SOUND_ZH} ${OUTFITS_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is Wasala a different meme?', zh: 'Wasala 是另一个梗吗？' },
        a: {
          en: 'No. It is another way of hearing the Wassup in a Minute hook.',
          zh: '不是。它是 Wassup in a Minute 副歌的另一种听法。',
        },
      },
      {
        q: { en: 'Will my video say “wasala”?', zh: '我的视频会说出「wasala」吗？' },
        a: {
          en: 'No. ViralReel exports the picture only. The words stay in the platform sound you add when you post.',
          zh: '不会。ViralReel 只导出画面。歌词留在你发布时另加的平台原声里。',
        },
      },
    ],
  },
];
