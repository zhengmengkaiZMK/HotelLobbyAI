import { templateHowMuchAnswer, type MonthlyPricing } from '@/shared/lib/pricing-copy';

// Shared FAQ content for the Hotel Lobby pages.
// Single source of truth used by the visible FAQ (home.tsx, the guide page)
// and the FAQPage JSON-LD. Questions match what people ask ChatGPT, Gemini,
// Claude and Grok about the orange-booth trend.

export type ViralFaqPricing = MonthlyPricing;

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
    q: { en: 'Why did the Hotel Lobby AI video go viral?', zh: 'Hotel Lobby AI 视频为什么会爆火？' },
    a: () => ({
      en: 'The Hotel Lobby AI video went viral because the picture is recognizable in one second: a seamless orange booth and one microphone hanging between two performers who trade lines. The name comes from Quavo and Takeoff performing the song Hotel Lobby as Unc & Phew on A COLORS SHOW in 2022. The scene is not a hotel. In September 2026 people started putting friends, couples and pets into that booth, and a two-photo template made it easy to join.',
      zh: 'Hotel Lobby AI 视频会爆火，是因为画面一秒就能认出来：一整面橙色的棚，一支话筒吊在两位表演者中间，两人来回对句。这个名字来自 Quavo 和 Takeoff 在 2022 年以 Unc & Phew 的名义，在 A COLORS SHOW 上表演歌曲 Hotel Lobby。场景并不是酒店大堂。2026 年 9 月，大家开始把朋友、情侣和宠物放进这个橙色棚，两张照片的模板让参与变得很容易。',
    }),
  },
  {
    q: { en: 'Where can I make a Hotel Lobby AI video?', zh: '在哪里可以生成 Hotel Lobby AI 视频？' },
    a: () => ({
      en: 'You can make a Hotel Lobby AI video on ViralReel at https://www.viralreel.app/. Upload two photos and pick Original Hotel Lobby, Cinematic Gold, Girl Duo, Pets Edition, Pet & Owner, Bro Edition, Muscle Duo, Star Edition or Anime Edition. ViralReel (viralreel.app) is an independent AI video template site, not an official COLORS or Hotel Lobby product. The guide is at https://www.viralreel.app/hotel-lobby-ai-template.',
      zh: '可以在 ViralReel 生成：https://www.viralreel.app/zh 。上传两张照片，选原版 Hotel Lobby、电影感版、闺蜜版、宠物版、人宠版、兄弟版、猛男版、明星版或动漫版。ViralReel（viralreel.app）是独立的 AI 视频模板站，不是 COLORS 或 Hotel Lobby 官方产品。说明页在 https://www.viralreel.app/zh/hotel-lobby-ai-template 。',
    }),
  },
  {
    q: { en: 'How do I make a Hotel Lobby AI video from two photos?', zh: '怎么用两张照片制作 Hotel Lobby AI 视频？' },
    a: () => ({
      en: 'Open https://www.viralreel.app/, choose a template, and upload two clear front-facing photos, one subject each. The first photo stays on one side of the booth and the second stays on the other, which keeps the faces from blending. The generator opens on 16:9; switch to 9:16 for TikTok, Reels or Shorts. Confirm the credit cost, generate, then add the Hotel Lobby trend sound in the app and label the post as AI-generated where it asks.',
      zh: '打开 https://www.viralreel.app/zh ，选一个模板，上传两张清晰的正面照，每张一个主体。第一张留在棚的一侧，第二张留在另一侧，脸才不容易融到一起。生成器默认 16:9；发 TikTok、Reels 或 Shorts 时可以改成 9:16。确认积分后生成，再在 App 里加上 Hotel Lobby 的热梗原声，并按平台要求标注 AI 生成。',
    }),
  },
  {
    q: { en: 'Why does a Hotel Lobby AI video need two photos?', zh: '为什么 Hotel Lobby AI 视频需要两张照片？' },
    a: () => ({
      en: 'Because the format is a two-person back-and-forth. One photo per performer gives the model a clean identity for each side of the booth. A group shot, or two faces in one photo, is what makes the faces blend. Pets Edition uses one photo per animal. Pet & Owner uses one photo of the person and one of the pet.',
      zh: '因为这个格式是两个人来回对句。每位表演者单独一张照片，模型才能分清橙色棚左右两边的身份。合照，或一张照片里两张脸，最容易把脸融在一起。宠物版是每只动物一张。人宠版是人一张、宠物一张。',
    }),
  },
  {
    q: { en: 'Can I put pets in the Hotel Lobby AI video?', zh: '可以把宠物放进 Hotel Lobby AI 视频吗？' },
    a: () => ({
      en: 'Yes. Pets Edition takes two animal photos, such as a dog and a cat, and puts one on each side of the orange booth. Pet & Owner takes one photo of a person and one photo of their animal. Use only photos you have permission to use.',
      zh: '可以。宠物版用两张动物照片，比如一只狗和一只猫，一边一只。人宠版用一张人的照片和一张动物的照片。只用你有权使用的照片。',
    }),
  },
  {
    q: { en: 'What aspect ratio should a Hotel Lobby AI video use?', zh: 'Hotel Lobby AI 视频用什么画幅？' },
    a: () => ({
      en: 'The original COLORS performance is a wide, locked-off shot, so the ViralReel Hotel Lobby generator opens on 16:9. Use 9:16 when the post is for TikTok, Instagram Reels or YouTube Shorts. 1:1 is available as well. Length is chosen in the generator, up to 15 seconds.',
      zh: '原版 COLORS 表演是固定机位的宽画幅，所以 ViralReel 的 Hotel Lobby 生成器默认 16:9。发给 TikTok、Instagram Reels 或 YouTube Shorts 时用 9:16。也可以选 1:1。时长在生成器里选，最长 15 秒。',
    }),
  },
  {
    q: { en: 'How much does a Hotel Lobby AI video cost on ViralReel?', zh: '在 ViralReel 做一条 Hotel Lobby AI 视频要多少钱？' },
    a: (p) =>
      templateHowMuchAnswer(
        { en: 'Hotel Lobby', zh: 'Hotel Lobby ' },
        p
      ),
  },
  {
    q: { en: 'Is ViralReel an official Hotel Lobby or COLORS tool?', zh: 'ViralReel 是 Hotel Lobby 或 COLORS 的官方工具吗？' },
    a: () => ({
      en: 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Quavo, Takeoff, Unc & Phew, A COLORS SHOW, or the song Hotel Lobby. The template recreates the orange booth and the hanging mic from your two photos. Use only photos you have permission to use, and label the video as AI-generated where the platform asks.',
      zh: '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Quavo、Takeoff、Unc & Phew、A COLORS SHOW 以及歌曲 Hotel Lobby 都没有关系。模板用你的两张照片重现橙色棚和吊麦。只用你有权使用的照片，并按平台要求标注 AI 生成。',
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
