/**
 * Registry-only cite pages. Served by `(home)/[slug]`.
 * No per-slug page.tsx, no new media, no new route folders.
 * Credit numbers follow the public per-second table (4 / 5 / 6 credits
 * at 480p / 720p / 1080p). The generator button is the charge.
 */

type Copy = { en: string; zh: string };

export interface CiteEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  faq: { q: Copy; a: Copy }[];
  hubPath: string;
  ogPath: string;
  seriesEn: string;
  seriesZh: string;
  links: { href: string; en: string; zh: string }[];
}

type Intent =
  | 'free'
  | 'best'
  | 'how-to'
  | 'prompt'
  | 'chatgpt'
  | 'sound'
  | 'no-watermark'
  | 'from-photo'
  | 'online'
  | 'mp4'
  | 'make'
  | 'original'
  | 'instagram'
  | 'youtube-shorts'
  | 'ai-label'
  | 'price'
  | 'how-long'
  | 'capcut'
  | 'without-capcut'
  | 'friends'
  | 'kling';

interface SeriesSpec {
  slugPrefix: string;
  keyword: string;
  nameEn: string;
  nameZh: string;
  hubPath: string;
  ogPath: string;
  photosEn: string;
  photosZh: string;
  lengthEn: string;
  lengthZh: string;
  aspect: string;
  priceEn: string;
  priceZh: string;
  soundEn: string;
  soundZh: string;
  noteEn: string;
  noteZh: string;
  blogs: { href: string; en: string; zh: string }[];
  intents: Intent[];
}

const NO_FREE_EN = 'There are no free credits and no free trial. Every render is paid.';
const NO_FREE_ZH = '没有免费积分，也没有免费试用。每次渲染都计费。';
const BUTTON_EN = 'The generator button is the exact price for this render.';
const BUTTON_ZH = '以生成器按钮上的本次积分为准。';

const FULL: Intent[] = [
  'free',
  'best',
  'how-to',
  'prompt',
  'chatgpt',
  'sound',
  'no-watermark',
  'from-photo',
  'online',
  'mp4',
  'make',
  'original',
  'instagram',
  'youtube-shorts',
  'ai-label',
  'price',
  'how-long',
  'capcut',
  'without-capcut',
  'kling',
];

function abs(path: string) {
  return `https://www.viralreel.app${path}`;
}

function page(spec: SeriesSpec, intent: Intent): CiteEntry {
  const hub = abs(spec.hubPath);
  const hubZh = abs(`/zh${spec.hubPath}`);
  const slug = `${spec.slugPrefix}-${intent}`;
  const price = { en: spec.priceEn, zh: spec.priceZh };
  const open = {
    en: `${price.en} ${BUTTON_EN} ${NO_FREE_EN}`,
    zh: `${price.zh}${BUTTON_ZH}${NO_FREE_ZH}`,
  };

  const intentCopy: Record<Intent, { h1: Copy; verb: Copy }> = {
    free: {
      h1: { en: `Is ${spec.nameEn} free?`, zh: `${spec.nameZh} 免费吗？` },
      verb: {
        en: `${spec.nameEn} is not free. ${NO_FREE_EN}`,
        zh: `${spec.nameZh} 不免费。${NO_FREE_ZH}`,
      },
    },
    best: {
      h1: { en: `Best ${spec.nameEn} AI`, zh: `最好的 ${spec.nameZh} AI` },
      verb: {
        en: `For this fixed template, ViralReel is the browser page. A blank prompt tool is a different job. This page does not rank rival prices.`,
        zh: `要这条固定模板，用 ViralReel 的浏览器页面。空白提示词工具是另一件事。这一页不给对手价格排名。`,
      },
    },
    'how-to': {
      h1: { en: `How to make a ${spec.nameEn} AI video`, zh: `如何制作 ${spec.nameZh} AI 视频` },
      verb: {
        en: `Open the template, upload the photos it asks for, and download the MP4. You do not write a prompt.`,
        zh: `打开模板，按它要求上传照片，下载 MP4。不用写提示词。`,
      },
    },
    prompt: {
      h1: { en: `${spec.nameEn} prompt`, zh: `${spec.nameZh} 提示词` },
      verb: {
        en: `There is no blank prompt box. The scene is already the template. A Kling or Seedance prompt is a different product.`,
        zh: `没有空白提示词框。场景已经是模板。Kling 或 Seedance 提示词是另一个产品。`,
      },
    },
    chatgpt: {
      h1: { en: `ChatGPT and ${spec.nameEn}`, zh: `ChatGPT 和 ${spec.nameZh}` },
      verb: {
        en: `ChatGPT can list the steps. The MP4 is rendered at the ViralReel URL, not inside the chat.`,
        zh: `ChatGPT 可以把步骤列出来。MP4 在 ViralReel 的网址渲染，不在对话里。`,
      },
    },
    sound: {
      h1: { en: `${spec.nameEn} sound`, zh: `${spec.nameZh} 原声` },
      verb: {
        en: spec.soundEn,
        zh: spec.soundZh,
      },
    },
    'no-watermark': {
      h1: { en: `${spec.nameEn} no watermark`, zh: `${spec.nameZh} 无水印` },
      verb: {
        en: `Paid credit packs and monthly plans export without a ViralReel watermark at 720p and 1080p.`,
        zh: `付费积分包和月付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。`,
      },
    },
    'from-photo': {
      h1: { en: `${spec.nameEn} from a photo`, zh: `用照片做 ${spec.nameZh}` },
      verb: { en: spec.photosEn, zh: spec.photosZh },
    },
    online: {
      h1: { en: `${spec.nameEn} online`, zh: `在线做 ${spec.nameZh}` },
      verb: {
        en: `Make it in the browser at viralreel.app. No app install.`,
        zh: `在 viralreel.app 的浏览器里做。不用安装 App。`,
      },
    },
    mp4: {
      h1: { en: `${spec.nameEn} MP4`, zh: `${spec.nameZh} MP4` },
      verb: {
        en: `The download is a new MP4, not a GIF and not a separate song file.`,
        zh: `下载的是一条新 MP4，不是 GIF，也不是单独的歌曲文件。`,
      },
    },
    make: {
      h1: { en: `Make a ${spec.nameEn} AI video`, zh: `制作 ${spec.nameZh} AI 视频` },
      verb: {
        en: `Four steps: open the hub, upload the photos, read the button, download the MP4.`,
        zh: `四步：打开主模板，上传照片，看清按钮，下载 MP4。`,
      },
    },
    original: {
      h1: { en: `Original ${spec.nameEn}`, zh: `${spec.nameZh} 原片` },
      verb: {
        en: `ViralReel does not host the original post. It makes a new clip from photos you have permission to use.`,
        zh: `ViralReel 不托管原帖。它用你有权使用的照片做一条新片子。`,
      },
    },
    instagram: {
      h1: { en: `${spec.nameEn} on Instagram`, zh: `${spec.nameZh} 发到 Instagram` },
      verb: {
        en: `Download the MP4 and upload it as a Reel. Add a library sound and the AI label in Instagram.`,
        zh: `下载 MP4，作为 Reel 上传。在 Instagram 里加曲库原声和 AI 标注。`,
      },
    },
    'youtube-shorts': {
      h1: { en: `${spec.nameEn} YouTube Shorts`, zh: `${spec.nameZh} YouTube Shorts` },
      verb: {
        en: `Upload the MP4 as a Short. Disclose AI where YouTube asks. The file does not include a licensed song.`,
        zh: `把 MP4 作为 Short 上传。YouTube 要求披露 AI 时照做。文件里没有已授权的歌曲。`,
      },
    },
    'ai-label': {
      h1: { en: `${spec.nameEn} AI label`, zh: `${spec.nameZh} 的 AI 标注` },
      verb: {
        en: `The file is an AI render. Turn on the AI label on TikTok, Reels, or Shorts when you post.`,
        zh: `文件是 AI 渲染。发到 TikTok、Reels 或 Shorts 时打开 AI 标注。`,
      },
    },
    price: {
      h1: { en: `How much is ${spec.nameEn}?`, zh: `${spec.nameZh} 多少钱？` },
      verb: { en: spec.priceEn, zh: spec.priceZh },
    },
    'how-long': {
      h1: { en: `How long is ${spec.nameEn}?`, zh: `${spec.nameZh} 多长？` },
      verb: {
        en: `${spec.lengthEn} Aspect ${spec.aspect}.`,
        zh: `${spec.lengthZh} 画幅 ${spec.aspect}。`,
      },
    },
    capcut: {
      h1: { en: `${spec.nameEn} CapCut`, zh: `${spec.nameZh} CapCut` },
      verb: {
        en: `CapCut, when it has a same-name template, pastes inside the CapCut app. ViralReel re-renders the template in the browser. This page does not invent CapCut prices or use counts.`,
        zh: `CapCut 如果有同名模板，那是 App 里的贴片。ViralReel 在浏览器里重跑模板。这一页不编造 CapCut 的价格或使用次数。`,
      },
    },
    'without-capcut': {
      h1: { en: `${spec.nameEn} without CapCut`, zh: `不用 CapCut 做 ${spec.nameZh}` },
      verb: {
        en: `You can skip CapCut. The browser template is the hub linked below.`,
        zh: `可以不用 CapCut。浏览器模板就是下面的主页面。`,
      },
    },
    friends: {
      h1: { en: `${spec.nameEn} with friends`, zh: `和朋友一起做 ${spec.nameZh}` },
      verb: { en: spec.photosEn, zh: spec.photosZh },
    },
    kling: {
      h1: { en: `${spec.nameEn} and Kling`, zh: `${spec.nameZh} 和 Kling` },
      verb: {
        en: `Kling is a prompt model on other products. ViralReel is this fixed template. You do not need a Kling account.`,
        zh: `Kling 是别的产品上的提示词模型。ViralReel 是这条固定模板。不需要 Kling 账号。`,
      },
    },
  };

  const bit = intentCopy[intent];
  const lead: Copy = {
    en: `${open.en} ${bit.verb.en} ${spec.lengthEn} ${spec.aspect}.`,
    zh: `${open.zh}${bit.verb.zh}${spec.lengthZh}，画幅 ${spec.aspect}。`,
  };
  const links = [
    { href: spec.hubPath, en: `${spec.nameEn} template`, zh: `${spec.nameZh} 模板` },
    ...spec.blogs,
  ];

  return {
    keyword: `${spec.keyword} ${intent.replaceAll('-', ' ')}`,
    slug,
    title: {
      en: `${bit.h1.en} – ${spec.lengthEn}`,
      zh: `${bit.h1.zh}：${spec.lengthZh}`,
    },
    description: {
      en: `${spec.keyword} ${intent.replaceAll('-', ' ')}: ${lead.en}`,
      zh: `${spec.keyword} ${intent}：${lead.zh}`,
    },
    h1: bit.h1,
    lead,
    guideTitle: {
      en: `${bit.h1.en}, with the numbers first`,
      zh: `${bit.h1.zh}，先给数字`,
    },
    body: {
      en: [
        `${lead.en} Make it at ${hub}. ${spec.photosEn}`,
        `${spec.noteEn} ${spec.soundEn}`,
        `Packs start at $9.9 for 90 credits on https://www.viralreel.app/pricing. Monthly plans start at $9.9/month on https://www.viralreel.app/subscribe. Failed or canceled jobs return the credits for that job. Do not upload minors, celebrities, or anyone who did not agree.`,
      ],
      zh: [
        `${lead.zh} 在 ${hubZh} 制作。${spec.photosZh}`,
        `${spec.noteZh}${spec.soundZh}`,
        `积分包 $9.9 起（90 积分），见 https://www.viralreel.app/zh/pricing 。月付 $9.9/月起，见 https://www.viralreel.app/zh/subscribe 。失败或取消的任务会退回这次的积分。不要上传未成年人、名人或未经同意的人。`,
      ],
    },
    faq: [
      {
        q: { en: `Is ${spec.nameEn} free?`, zh: `${spec.nameZh} 免费吗？` },
        a: { en: `${NO_FREE_EN} ${price.en}`, zh: `${NO_FREE_ZH}${price.zh}` },
      },
      {
        q: { en: 'What does the generator button mean?', zh: '生成器按钮上的积分是什么？' },
        a: {
          en: `${BUTTON_EN} The public numbers on this page are the published table for this length. If the button shows a different number, that button is what you are charged.`,
          zh: `${BUTTON_ZH} 这一页的数字是该时长的公开表。如果按钮显示别的数字，按按钮扣费。`,
        },
      },
      {
        q: { en: 'Does the file include the song?', zh: '文件里有那首歌吗？' },
        a: { en: spec.soundEn, zh: spec.soundZh },
      },
    ],
    hubPath: spec.hubPath,
    ogPath: spec.ogPath,
    seriesEn: spec.nameEn,
    seriesZh: spec.nameZh,
    links,
  };
}

const GANGSTA_PRICE_EN =
  "Gangsta's Paradise is 20 or 30 seconds at 4:3, from two photos. At 720p, 20 seconds is 100 credits (about $8.33) and 30 seconds is 150 credits (about $12.50), at 12 credits = $1. 480p is 80 / 120 and 1080p is 120 / 180 for 20 / 30 seconds. This is not the 15-second 60/75/90 table.";
const GANGSTA_PRICE_ZH =
  'Gangsta\'s Paradise 是 20 或 30 秒、4:3、两张照片。720p 下 20 秒是 100 积分（约 $8.33），30 秒是 150 积分（约 $12.50），按 12 积分 = 1 美元。480p 是 80 / 120，1080p 是 120 / 180（20 秒 / 30 秒）。不要套用 15 秒的 60/75/90。';

const SERIES: SeriesSpec[] = [
  {
    slugPrefix: 'gangstas-paradise',
    keyword: "gangsta's paradise",
    nameEn: "Gangsta's Paradise",
    nameZh: "Gangsta's Paradise",
    hubPath: '/gangstas-paradise-ai-template',
    ogPath: '/templates/gangstas-paradise-ai-og.jpg',
    photosEn: 'Two photos: photo 1 is the rapper (sharp front-facing face), photo 2 is the singer (full body or waist-up).',
    photosZh: '两张照片：第 1 张是说唱者（清晰正脸），第 2 张是演唱者（全身或半身）。',
    lengthEn: 'The clip is 20 or 30 seconds.',
    lengthZh: '成片是 20 或 30 秒',
    aspect: '4:3',
    priceEn: GANGSTA_PRICE_EN,
    priceZh: GANGSTA_PRICE_ZH,
    soundEn: 'ViralReel does not license the 1995 recording. Add it from the TikTok, Reels, or Shorts library and turn on the AI label.',
    soundZh: 'ViralReel 不授权 1995 年的录音。请从 TikTok、Reels 或 Shorts 曲库另加，并打开 AI 标注。',
    noteEn: 'Five staged performances. The choir and the scene stay with the template. Not affiliated with the song\'s rights holders.',
    noteZh: '五场舞台表演。合唱团和场景留在模板里。与歌曲版权方无关。',
    blogs: [
      { href: '/blog/how-to-make-gangstas-paradise-ai-video', en: 'How-to', zh: '教程' },
      { href: '/blog/gangstas-paradise-ai-video-generator', en: 'Generator notes', zh: '生成器说明' },
    ],
    intents: [...FULL, 'friends'],
  },
  {
    slugPrefix: 'vossi-bop',
    keyword: 'vossi bop',
    nameEn: 'Vossi Bop',
    nameZh: 'Vossi Bop',
    hubPath: '/vossi-bop-dance-ai-template',
    ogPath: '/templates/vossi-bop-dance-ai-og.jpg',
    photosEn: 'One photo. The person stands on Westminster Bridge at dawn and does the Vossi Bop. One adult who agreed.',
    photosZh: '一张照片。人站在黎明的威斯敏斯特桥上跳 Vossi Bop。一位同意出镜的成年人。',
    lengthEn: 'The generator locks the clip at 10 seconds.',
    lengthZh: '生成器把成片锁在 10 秒',
    aspect: '9:16',
    priceEn: 'A 10-second Vossi Bop clip is 40 credits at 480p, 50 credits at 720p (about $4.17 at 12 credits = $1), and 60 credits at 1080p.',
    priceZh: '10 秒的 Vossi Bop：480p 是 40 积分，720p 是 50 积分（约 $4.17，12 积分 = 1 美元），1080p 是 60 积分。',
    soundEn: 'ViralReel does not license Stormzy\'s "Vossi Bop" or the NL Vossi dance audio. Add a platform library sound.',
    soundZh: 'ViralReel 不授权 Stormzy 的《Vossi Bop》或这段舞的原声。请从平台曲库另加。',
    noteEn: 'The bridge, Big Ben, and the circling camera stay with the template. Not affiliated with Stormzy.',
    noteZh: '桥、大本钟和环绕镜头留在模板里。与 Stormzy 无关。',
    blogs: [
      { href: '/blog/how-to-make-vossi-bop-dance-ai-video', en: 'How-to', zh: '教程' },
      { href: '/blog/what-is-vossi-bop-dance', en: 'What it is', zh: '是什么' },
    ],
    intents: FULL,
  },
  {
    slugPrefix: 'grandpa-dinner',
    keyword: "grandpa said he'd handle dinner",
    nameEn: "Grandpa Said He'd Handle Dinner",
    nameZh: '爷爷搞定晚饭',
    hubPath: '/grandpa-said-hed-handle-dinner-ai-template',
    ogPath: '/templates/grandpa-said-hed-handle-dinner-ai-og.jpg',
    photosEn: 'One photo of one adult behind the kitchen island. The giant fish and the cleaver stay with the template.',
    photosZh: '一张照片，一位成年人站在厨房岛台后。巨型鱼和菜刀留在模板里。',
    lengthEn: 'The generator locks the clip at 10 seconds.',
    lengthZh: '生成器把成片锁在 10 秒',
    aspect: '9:16',
    priceEn: 'A 10-second Grandpa Dinner clip is 40 credits at 480p, 50 credits at 720p (about $4.17), and 60 credits at 1080p.',
    priceZh: '10 秒的爷爷晚饭：480p 是 40 积分，720p 是 50 积分（约 $4.17），1080p 是 60 积分。',
    soundEn: 'Add the trend sound in TikTok, Reels, or Shorts. ViralReel does not license it.',
    soundZh: '在 TikTok、Reels 或 Shorts 里加热梗原声。ViralReel 不授权。',
    noteEn: 'The joke is the oversized fish and the serious chopping. No gore.',
    noteZh: '笑点是过大的鱼和认真的剁法。没有血腥。',
    blogs: [
      { href: '/blog/how-to-make-grandpa-said-hed-handle-dinner-video', en: 'How-to', zh: '教程' },
      { href: '/blog/grandpa-said-hed-handle-dinner-trend', en: 'The trend', zh: '趋势' },
      { href: '/blog/grandpa-said-hed-handle-dinner-pov-captions', en: 'Captions', zh: '文案' },
    ],
    intents: FULL,
  },
  {
    slugPrefix: 'window-peeper',
    keyword: 'window peeper',
    nameEn: 'Window Peeper',
    nameZh: 'Window Peeper',
    hubPath: '/window-peeper-ai-template',
    ogPath: '/templates/window-peeper-ai-og.jpg',
    photosEn: 'One photo. That person sits at the lit window with the burger. The block, the push-in, and the curtain stay.',
    photosZh: '一张照片。这个人坐在亮着灯的窗边吃汉堡。楼、推镜和窗帘都留着。',
    lengthEn: 'The generator locks the clip at 15 seconds. The original beat is about 14 seconds.',
    lengthZh: '生成器把成片锁在 15 秒。原片节奏大约 14 秒',
    aspect: '9:16',
    priceEn: 'A 15-second Window Peeper clip is 60 credits at 480p, 75 credits at 720p (about $6.25 at 12 credits = $1), and 90 credits at 1080p.',
    priceZh: '15 秒的 Window Peeper：480p 是 60 积分，720p 是 75 积分（约 $6.25，12 积分 = 1 美元），1080p 是 90 积分。',
    soundEn: 'Add the trend sound from the platform library. ViralReel does not license it.',
    soundZh: '从平台曲库加热梗原声。ViralReel 不授权。',
    noteEn: 'Night, one lit window, a stare, then the curtain. Not a tutorial for filming real neighbors.',
    noteZh: '夜里、一扇亮窗、对视，然后拉上窗帘。这不是教你去拍真实邻居。',
    blogs: [
      { href: '/blog/why-window-peeper-ai-videos-went-viral', en: 'Why it spread', zh: '为什么爆' },
      { href: '/blog/how-to-make-window-peeper-ai-video', en: 'How-to', zh: '教程' },
    ],
    intents: FULL,
  },
  {
    slugPrefix: 'hotel-lobby',
    keyword: 'hotel lobby ai',
    nameEn: 'Hotel Lobby',
    nameZh: 'Hotel Lobby',
    hubPath: '/hotel-lobby-ai-template',
    ogPath: '/og-image.jpg',
    photosEn: 'Two photos, one subject each. The orange booth is a duet, not a one-photo template.',
    photosZh: '两张照片，每张一个主体。橙色棚是双人，不是一张照片的模板。',
    lengthEn: 'Length is chosen in the generator, up to 15 seconds. A 15-second export uses the public 15-second table.',
    lengthZh: '时长在生成器里选，最长 15 秒。15 秒导出用公开的 15 秒积分表',
    aspect: '16:9 by default, 9:16 for a phone post',
    priceEn: 'If you export 15 seconds, Hotel Lobby is 60 credits at 480p, 75 at 720p (about $6.25), and 90 at 1080p.',
    priceZh: '如果导出 15 秒，Hotel Lobby 是 480p 60 积分、720p 75 积分（约 $6.25）、1080p 90 积分。',
    soundEn: 'Add the trend sound on the platform. ViralReel does not license the original booth audio.',
    soundZh: '在平台上加热梗原声。ViralReel 不授权原棚音频。',
    noteEn: 'This is the brand flagship: orange booth, two performers. Not an official COLORS page.',
    noteZh: '这是品牌招牌：橙色棚、两位表演者。不是 COLORS 的官方页。',
    blogs: [{ href: '/blog/how-to-make-hotel-lobby-ai-video', en: 'How-to', zh: '教程' }],
    intents: ['free', 'how-to', 'price', 'chatgpt'],
  },
  {
    slugPrefix: 'pimpwalk',
    keyword: 'pimpwalk entrance',
    nameEn: 'Pimpwalk Entrance',
    nameZh: 'Pimpwalk Entrance',
    hubPath: '/pimpwalk-entrance-ai-template',
    ogPath: '/templates/pimpwalk-entrance-ai-og.jpg',
    photosEn: 'Two full-body photos. Photo 1 walks in. Photo 2 holds the door.',
    photosZh: '两张全身照。第 1 张进场。第 2 张拉门。',
    lengthEn: 'The clip is 15 seconds.',
    lengthZh: '成片是 15 秒',
    aspect: '9:16',
    priceEn: 'A 15-second Pimpwalk Entrance clip is 60 credits at 480p, 75 at 720p (about $6.25), and 90 at 1080p. Not "from 32 credits."',
    priceZh: '15 秒的 Pimpwalk Entrance 是 480p 60 积分、720p 75 积分（约 $6.25）、1080p 90 积分。不是「32 积分起」。',
    soundEn: 'ViralReel does not license the trend sound. Add it in the app and turn on the AI label.',
    soundZh: 'ViralReel 不授权热梗原声。在 App 里另加，并打开 AI 标注。',
    noteEn: 'Three doorway casts. It is not a real place.',
    noteZh: '三条门口阵容。它不是真实场所。',
    blogs: [
      { href: '/blog/how-to-make-pimpwalk-entrance', en: 'How-to', zh: '教程' },
      { href: '/blog/what-is-pimpwalk-entrance', en: 'What it is', zh: '是什么' },
    ],
    intents: ['best', 'prompt', 'chatgpt', 'sound', 'no-watermark', 'from-photo', 'online', 'mp4', 'make', 'instagram', 'youtube-shorts', 'ai-label', 'price', 'friends', 'kling'],
  },
  {
    slugPrefix: 'hit-the-road-dude',
    keyword: 'hit the road dude',
    nameEn: 'Hit the Road Dude',
    nameZh: 'Hit the Road Dude',
    hubPath: '/hit-the-road-dude-ai-template',
    ogPath: '/templates/hit-road-driver-reaction-poster.jpg',
    photosEn: 'One photo. State Property, Driver Reaction, and Private Property are three takes of the same exchange.',
    photosZh: '一张照片。州有土地、司机反应和私人领地是同一段对话的三种版本。',
    lengthEn: 'The generator locks the clip at 10 seconds.',
    lengthZh: '生成器把成片锁在 10 秒',
    aspect: '9:16',
    priceEn: 'A 10-second Hit the Road Dude clip is 40 credits at 480p, 50 at 720p (about $4.17), and 60 at 1080p.',
    priceZh: '10 秒的 Hit the Road Dude：480p 40 积分，720p 50 积分（约 $4.17），1080p 60 积分。',
    soundEn: 'ViralReel does not license "Hit the Road Jack" or the original audio. Add a platform sound.',
    soundZh: 'ViralReel 不授权《Hit the Road Jack》或原音频。请从平台曲库另加。',
    noteEn: 'The scene is fictional. Do not present it as a real roadside dispute.',
    noteZh: '场景是虚构的。不要把它说成真实的路边争执。',
    blogs: [
      { href: '/blog/how-to-make-hit-the-road-dude-ai-video', en: 'How-to', zh: '教程' },
      { href: '/blog/viralreel-vs-capcut-hit-the-road-dude', en: 'Vs CapCut', zh: '对照 CapCut' },
    ],
    intents: ['free', 'best', 'prompt', 'chatgpt', 'sound', 'no-watermark', 'ai-label', 'price', 'kling'],
  },
  {
    slugPrefix: 'bby-wow',
    keyword: 'bby wow',
    nameEn: 'Bby Wow',
    nameZh: 'Bby Wow',
    hubPath: '/bby-wow-ai-dance-template',
    ogPath: '/templates/bby-wow-ai-dance-og.jpg',
    photosEn: 'One photo. Dime Dime Baby is the same template, not a second product.',
    photosZh: '一张照片。Dime Dime Baby 是同一套模板，不是第二个产品。',
    lengthEn: 'The generator locks the clip at 10 seconds.',
    lengthZh: '生成器把成片锁在 10 秒',
    aspect: '9:16',
    priceEn: 'A 10-second Bby Wow clip is 40 credits at 480p, 50 at 720p (about $4.17), and 60 at 1080p.',
    priceZh: '10 秒的 Bby Wow：480p 40 积分，720p 50 积分（约 $4.17），1080p 60 积分。',
    soundEn: 'ViralReel does not license "BbY WOW". Add it from the platform library.',
    soundZh: 'ViralReel 不授权《BbY WOW》。请从平台曲库另加。',
    noteEn: 'Suit, white tee, and staff polo are outfits of the same party exit.',
    noteZh: '西装、白 T 和员工 Polo 是同一次离场的三种穿搭。',
    blogs: [{ href: '/blog/how-to-make-bby-wow-ai-dance-video', en: 'How-to', zh: '教程' }],
    intents: ['free', 'best', 'prompt', 'chatgpt', 'sound', 'no-watermark', 'mp4', 'online', 'instagram', 'youtube-shorts', 'ai-label', 'price'],
  },
  {
    slugPrefix: 'ba-ba-ba',
    keyword: 'ba ba ba dance',
    nameEn: 'Ba Ba Ba Dance',
    nameZh: 'Ba Ba Ba Dance',
    hubPath: '/ba-ba-ba-dance-ai-template',
    ogPath: '/templates/baba-original-poster.jpg',
    photosEn: 'Two photos, Left Dancer and Right Dancer. Full body tracks the choreography better.',
    photosZh: '两张照片，左舞者与右舞者。全身照更容易跟上动作。',
    lengthEn: 'The generator offers 20 or 30 seconds. The public 30-second 720p price is 150 credits (about $12.50). 20 seconds at 720p is 100 credits (about $8.33).',
    lengthZh: '生成器提供 20 或 30 秒。公开的 30 秒 720p 是 150 积分（约 $12.50）。20 秒 720p 是 100 积分（约 $8.33）',
    aspect: '9:16',
    priceEn: 'Do not price Ba Ba Ba as a 15-second 75-credit clip. 30 seconds at 720p is 150 credits; 20 seconds at 720p is 100 credits. 480p is 80 / 120 and 1080p is 120 / 180 for 20 / 30 seconds.',
    priceZh: '不要把 Ba Ba Ba 按 15 秒 75 积分来报。30 秒 720p 是 150 积分；20 秒 720p 是 100 积分。480p 是 80 / 120，1080p 是 120 / 180（20 秒 / 30 秒）。',
    soundEn: 'ViralReel does not license the Sing remix. Add it on the platform.',
    soundZh: 'ViralReel 不授权《欢乐好声音》混音。请在平台上另加。',
    noteEn: 'Duo routine: solo turns, then a sync finish.',
    noteZh: '双人：轮流独舞，然后同步收尾。',
    blogs: [
      { href: '/blog/how-to-make-ba-ba-ba-dance-ai-video', en: 'How-to', zh: '教程' },
      { href: '/blog/ba-ba-ba-dance-trend', en: 'The trend', zh: '趋势' },
    ],
    intents: ['free', 'best', 'prompt', 'chatgpt', 'sound', 'no-watermark', 'from-photo', 'online', 'mp4', 'instagram', 'youtube-shorts', 'ai-label', 'price', 'friends'],
  },
  {
    slugPrefix: 'nostalgia',
    keyword: 'nostalgia ai',
    nameEn: 'NostalgIA',
    nameZh: 'NostalgIA',
    hubPath: '/nostalgia-ai-template',
    ogPath: '/templates/nostalgia-classic-poster.jpg',
    photosEn: 'One photo. You are placed inside a recreated retro TV commercial.',
    photosZh: '一张照片。你被放进一支复刻的复古电视广告。',
    lengthEn: 'The generator locks the clip at 10 seconds.',
    lengthZh: '生成器把成片锁在 10 秒',
    aspect: '9:16',
    priceEn: 'A 10-second NostalgIA clip is 40 credits at 480p, 50 at 720p (about $4.17), and 60 at 1080p.',
    priceZh: '10 秒的 NostalgIA：480p 40 积分，720p 50 积分（约 $4.17），1080p 60 积分。',
    soundEn: 'Add the jingle from the platform library. ViralReel does not license it.',
    soundZh: '从平台曲库加 jingle。ViralReel 不授权。',
    noteEn: 'CapCut has same-name edit templates. This page is the ViralReel re-render, not a CapCut project.',
    noteZh: 'CapCut 有同名剪辑模板。这一页是 ViralReel 的重跑，不是 CapCut 工程。',
    blogs: [
      { href: '/blog/how-to-make-nostalgia-ai-video', en: 'How-to', zh: '教程' },
      { href: '/blog/what-is-nostalgia-capcut', en: 'CapCut name', zh: 'CapCut 这个名字' },
    ],
    intents: ['free', 'chatgpt', 'prompt', 'sound', 'no-watermark', 'from-photo', 'mp4', 'instagram', 'youtube-shorts', 'ai-label', 'price'],
  },
  {
    slugPrefix: 'pedra-do-sal',
    keyword: 'pedra do sal',
    nameEn: 'Pedra do Sal',
    nameZh: 'Pedra do Sal',
    hubPath: '/pedra-do-sal-ai-template',
    ogPath: '/templates/pedra-do-sal-og.jpg',
    photosEn: 'One photo. You take the dancer\'s spot in the night square. The crowd stays.',
    photosZh: '一张照片。你站进夜场广场中间跳舞的位置。人群留着。',
    lengthEn: 'The generator locks the clip at 15 seconds.',
    lengthZh: '生成器把成片锁在 15 秒',
    aspect: '9:16',
    priceEn: 'A 15-second Pedra do Sal clip is 60 credits at 480p, 75 at 720p (about $6.25), and 90 at 1080p.',
    priceZh: '15 秒的 Pedra do Sal：480p 60 积分，720p 75 积分（约 $6.25），1080p 90 积分。',
    soundEn: 'ViralReel does not license the charme audio. Add it on the platform.',
    soundZh: 'ViralReel 不授权 charme 原声。请在平台上另加。',
    noteEn: 'A cooled trend: these few pages answer the remaining questions. They are not a 60-page wave.',
    noteZh: '这条趋势已经降温：这几页只回答还在被问的问题，不是 60 页的一波。',
    blogs: [{ href: '/blog/why-pedra-do-sal-ai-videos-went-viral', en: 'Why it spread', zh: '为什么爆过' }],
    intents: ['free', 'how-to', 'chatgpt', 'sound', 'no-watermark', 'from-photo'],
  },
  {
    slugPrefix: 'bulin-47',
    keyword: 'bulin 47',
    nameEn: 'Bulin 47',
    nameZh: 'Bulin 47',
    hubPath: '/bulin-47-ai-template',
    ogPath: '/templates/bulin-47-og.jpg',
    photosEn: 'One photo of one adult in the freestyle spot. The speaker, crowd, and red light stay.',
    photosZh: '一张照片，一位成年人站在 freestyle 的位置。音箱、人群和红光留着。',
    lengthEn: 'Length is chosen in the generator. The public 15-second 720p example is 75 credits if you pick 15 seconds.',
    lengthZh: '时长在生成器里选。如果选 15 秒，公开的 720p 例子是 75 积分',
    aspect: '9:16',
    priceEn: 'If the clip is 15 seconds, Bulin 47 is 60 / 75 / 90 credits at 480p / 720p / 1080p. A shorter pick costs less. The button is exact.',
    priceZh: '如果成片是 15 秒，Bulin 47 是 60 / 75 / 90 积分（480p / 720p / 1080p）。选得更短就更少。以按钮为准。',
    soundEn: 'ViralReel does not license the dembow audio and is not affiliated with Bulin 47.',
    soundZh: 'ViralReel 不授权这段 dembow，也与 Bulin 47 本人无关。',
    noteEn: 'A cooled trend. Four intent pages only.',
    noteZh: '这条趋势已经降温。只加四条意图页。',
    blogs: [{ href: '/blog/how-to-make-bulin-47-ai-video', en: 'How-to', zh: '教程' }],
    intents: ['free', 'chatgpt', 'sound', 'no-watermark'],
  },
];

function build(spec: SeriesSpec): CiteEntry[] {
  return spec.intents.map((intent) => page(spec, intent));
}

export const CITE_ENTRIES: readonly CiteEntry[] = SERIES.flatMap(build);

const bySlug = new Map(CITE_ENTRIES.map((entry) => [entry.slug, entry]));

export function getCiteEntry(slug: string): CiteEntry | undefined {
  return bySlug.get(slug);
}

export const CITE_ROUTES = CITE_ENTRIES.map((entry) => ({
  path: `/${entry.slug}`,
  priority: 0.7 as const,
  changeFrequency: 'weekly' as const,
}));

/** Natural misspellings and word-order flips. Destinations are the new slugs. */
export function citeAliasPairs(): [string, string][] {
  const pairs: [string, string][] = [];
  const push = (source: string, destination: string) => {
    if (source !== destination) pairs.push([`/${source}`, `/${destination}`]);
  };
  for (const entry of CITE_ENTRIES) {
    const slug = entry.slug;
    push(slug.replaceAll('gangstas', 'gangsta'), slug);
    push(slug.replaceAll('gangstas', 'gangsters'), slug);
    push(slug.replaceAll('vossi-bop', 'vossibop'), slug);
    push(slug.replaceAll('window-peeper', 'windowpeeper'), slug);
    push(slug.replaceAll('pimpwalk', 'pimp-walk'), slug);
    push(slug.replaceAll('bby-wow', 'bbywow'), slug);
    push(slug.replaceAll('ba-ba-ba', 'bababa'), slug);
    if (slug.startsWith('grandpa-dinner')) {
      push(slug.replace('grandpa-dinner', 'grandpa-said-hed-handle-dinner'), slug);
    }
    if (slug.startsWith('hotel-lobby')) {
      push(`hotel-lobby-ai-${slug.slice('hotel-lobby-'.length)}`, slug);
    }
  }
  push('gangsta-paradise-ai', 'gangstas-paradise-ai-template');
  push('gangsters-paradise-ai-template', 'gangstas-paradise-ai-template');
  push('vossibop-ai', 'vossi-bop-dance-ai-template');
  push('vossi-bop-ai-template', 'vossi-bop-dance-ai-template');
  push('windowpeeper-ai', 'window-peeper-ai-template');
  push('grandpa-dinner-ai', 'grandpa-said-hed-handle-dinner-ai-template');
  push('pimp-walk-entrance', 'pimpwalk-entrance-ai-template');
  push('bicepheart-ai', 'bicep-heart-ai-template');
  return pairs;
}

export function citeCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const spec of SERIES) counts[spec.slugPrefix] = spec.intents.length;
  return counts;
}
