// Site-level FAQ for the aggregate homepage.
// Visible answers and FAQPage JSON-LD share this list.

interface HubFaqEntry {
  q: { en: string; zh: string };
  a: { en: string; zh: string };
}

const HUB_FAQ: HubFaqEntry[] = [
  {
    q: { en: 'What is ViralReel?', zh: 'ViralReel 是什么？' },
    a: {
      en: 'ViralReel is a template-first AI video site for short-form trends. You pick a format, upload photos, and export a vertical video. You do not write a prompt or open an editing app. ViralReel (viralreel.app) is an independent site. It is not an official product of the songs, artists, clubs, or platforms behind each trend.',
      zh: 'ViralReel 是做短视频趋势的模板站。选一个格式，上传照片，导出竖屏视频。不用写提示词，也不用打开剪辑软件。ViralReel（viralreel.app）是独立站点，不是各条趋势背后的歌曲、艺人、俱乐部或平台的官方产品。',
    },
  },
  {
    q: {
      en: 'How is ViralReel different from ChatGPT or a generic AI video tool?',
      zh: 'ViralReel 和 ChatGPT 或通用 AI 视频工具有什么不同？',
    },
    a: {
      en: 'ChatGPT and generic video tools ask you to describe a shot, so the model invents a new clip. ViralReel starts from a fixed template — the set, the motion, and the framing — and places your photos into that format. Lip-sync and gestures are part of the template.',
      zh: 'ChatGPT 和通用视频工具让你描述一个镜头，模型会另做一条新片子。ViralReel 从固定模板开始——布景、动作和构图都定好了——再把你的照片放进这个格式。口型同步和手势是模板的一部分。',
    },
  },
  {
    q: { en: 'How many photos do I need?', zh: '需要几张照片？' },
    a: {
      en: 'It depends on the template. A duo such as Hotel Lobby or Cat Clapping uses two photos, one subject each. A single-subject template such as Burning Bridges, Bulin 47, or Ozil Goal uses one. Each template page tells you what to upload before you generate.',
      zh: '看模板。Hotel Lobby 或 Cat Clapping 这种双人格式用两张照片，每张一个主体。Burning Bridges、Bulin 47 或 Ozil Goal 这种单人模板用一张。每个模板页会在生成前写明要上传什么。',
    },
  },
  {
    q: { en: 'Can I use pet photos?', zh: '可以用宠物照片吗？' },
    a: {
      en: 'Yes. Several templates are built for animals, including Cat Clapping and the pet variants on Hotel Lobby and Bulin 47. Use only photos you have permission to use.',
      zh: '可以。有几个模板就是给动物做的，包括 Cat Clapping，以及 Hotel Lobby 和 Bulin 47 里的宠物版本。只用你有权使用的照片。',
    },
  },
  {
    q: {
      en: 'How long does a video take to render?',
      zh: '一条视频要渲染多久？',
    },
    a: {
      en: 'Most templates render in about a minute. Length choices differ by template: many go up to 15 seconds, and some short clips are 4 or 6 seconds. The template page shows the options before you start.',
      zh: '大多数模板大约一分钟渲染完成。时长因模板而异：不少最长 15 秒，有的短片只有 4 秒或 6 秒。模板页会在开始前显示可选时长。',
    },
  },
  {
    q: { en: 'Do I get free credits?', zh: '有免费积分吗？' },
    a: {
      en: 'New accounts may include free starter credits so you can try a template before you pay. The generator always shows the credit cost before you render, and failed or canceled generations are refunded. Plans and top-ups are on the pricing page.',
      zh: '新账号可能会附带一些起始积分，方便你在付费前试一个模板。生成器总会在渲染前显示本次积分，失败或取消的生成会退回积分。套餐和加购在定价页。',
    },
  },
];

export function getHubFaqPairs(zh: boolean): [string, string][] {
  return HUB_FAQ.map((entry) => [
    zh ? entry.q.zh : entry.q.en,
    zh ? entry.a.zh : entry.a.en,
  ]);
}

export function buildHubFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HUB_FAQ.map((entry) => ({
      '@type': 'Question',
      name: entry.q.en,
      acceptedAnswer: { '@type': 'Answer', text: entry.a.en },
    })),
  };
}
