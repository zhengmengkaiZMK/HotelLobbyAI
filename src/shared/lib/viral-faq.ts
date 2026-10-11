// Shared FAQ content for ViralReel homepage.
// Single source of truth used by both the visible FAQ section (home.tsx)
// and the FAQPage JSON-LD structured data (home/page.tsx).

export interface ViralFaqPricing {
  starterPrice: string;
  starterCredits: number;
  plusPrice: string;
  plusCredits: number;
  proPrice: string;
  proCredits: number;
}

const defaultPricing: ViralFaqPricing = {
  starterPrice: '$9.9',
  starterCredits: 90,
  plusPrice: '$19.9',
  plusCredits: 200,
  proPrice: '$39.9',
  proCredits: 500,
};

interface FaqEntry {
  q: { en: string; zh: string };
  a: (p: ViralFaqPricing) => { en: string; zh: string };
}

const FAQ_ENTRIES: FaqEntry[] = [
  {
    q: { en: 'How much does ViralReel cost?', zh: 'ViralReel 怎么收费？' },
    a: (p) => ({
      en: `Starter is ${p.starterPrice}/mo with ${p.starterCredits} credits. Plus is ${p.plusPrice}/mo with ${p.plusCredits} credits. Pro is ${p.proPrice}/mo with ${p.proCredits} credits. A video costs 7–22 credits depending on resolution and duration; failed or canceled jobs are refunded.`,
      zh: `Starter 每月 ${p.starterPrice}，含 ${p.starterCredits} 积分；Plus 每月 ${p.plusPrice}，含 ${p.plusCredits} 积分；Pro 每月 ${p.proPrice}，含 ${p.proCredits} 积分。单条视频按清晰度和时长消耗 7–22 积分，失败或取消会退回积分。`,
    }),
  },
  {
    q: { en: 'Why do I need two photos?', zh: '为什么需要两张照片？' },
    a: () => ({
      en: 'The format is a two-person back-and-forth performance. Two separate front-facing photos keep each identity clean and prevent face blending.',
      zh: '这个玩法是双人你来我往的对唱，两张独立正面照能保持各自身份清晰，避免人脸融合。',
    }),
  },
  {
    q: { en: 'Can I use pets or babies?', zh: '可以用宠物或宝宝吗？' },
    a: () => ({
      en: 'Absolutely — pet and baby versions are the most-shared variants of the trend. Just keep each performer on their own side in every photo you upload.',
      zh: '当然可以——宠物版和宝宝版是这波趋势传播最广的变体。只要保证每位主角在照片里始终各占一边就行。',
    }),
  },
  {
    q: { en: 'What happens to my photos?', zh: '我的照片会怎么处理？' },
    a: () => ({
      en: 'Photos are used only to render your video and are automatically deleted after 24 hours. We never train models on your uploads.',
      zh: '照片仅用于渲染你的视频，24 小时后自动删除。我们绝不会用你上传的内容训练模型。',
    }),
  },
  {
    q: { en: 'Do I own the videos I make?', zh: '生成的视频归我所有吗？' },
    a: () => ({
      en: 'Yes. Videos you generate are yours to post anywhere — TikTok, Reels, Shorts or client work. No watermark on paid plans, no strings attached.',
      zh: '是的。你生成的视频完全归你所有，可以发布到任何平台——TikTok、Reels、Shorts 或商业项目。付费方案无水印，没有任何附加条件。',
    }),
  },
];

export function getViralFaqPairs(
  zh: boolean,
  pricing: ViralFaqPricing = defaultPricing
): [string, string][] {
  return FAQ_ENTRIES.map((entry) => [
    zh ? entry.q.zh : entry.q.en,
    zh ? entry.a(pricing).zh : entry.a(pricing).en,
  ]);
}

export function buildViralFaqJsonLd(
  pricing: ViralFaqPricing = defaultPricing
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ENTRIES.map((entry) => ({
      '@type': 'Question',
      name: entry.q.en,
      acceptedAnswer: { '@type': 'Answer', text: entry.a(pricing).en },
    })),
  };
}
