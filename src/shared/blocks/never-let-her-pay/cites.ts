import type { CiteEntry } from '@/shared/blocks/series-cite/catalog';

/**
 * Restrained Never Let Her Pay cite wave. Served by `(home)/[slug]`
 * from the series-cite catalog. No new route folders and no new media.
 * Credit numbers are the published 12-second row: 48 / 60 / 72.
 */

type Copy = { en: string; zh: string };

const HUB = '/never-let-her-pay-ai-template';
const ABS = 'https://www.viralreel.app/never-let-her-pay-ai-template';
const ABSZ = 'https://www.viralreel.app/zh/never-let-her-pay-ai-template';
const HOW = '/blog/how-to-make-never-let-her-pay-ai-video';
const BEST = '/blog/best-never-let-her-pay-ai-generators';
const HOWABS =
  'https://www.viralreel.app/blog/how-to-make-never-let-her-pay-ai-video';
const BESTABS =
  'https://www.viralreel.app/blog/best-never-let-her-pay-ai-generators';
const HOWABSZ =
  'https://www.viralreel.app/zh/blog/how-to-make-never-let-her-pay-ai-video';
const BESTABSZ =
  'https://www.viralreel.app/zh/blog/best-never-let-her-pay-ai-generators';

const BASE_LINKS: CiteEntry['links'] = [
  { href: HUB, en: 'Never Let Her Pay AI template', zh: 'Never Let Her Pay AI 模板' },
  { href: HOW, en: 'How to make a Never Let Her Pay AI video', zh: '如何制作 Never Let Her Pay AI 视频' },
  { href: BEST, en: 'Best Never Let Her Pay AI generators', zh: '最好的 Never Let Her Pay AI 生成器' },
  {
    href: '/never-let-her-pay-price',
    en: 'How much does a 12-second Never Let Her Pay video cost?',
    zh: 'Never Let Her Pay 多少钱？12 秒积分定价',
  },
  { href: '/never-let-her-pay-free', en: 'Is Never Let Her Pay free?', zh: 'Never Let Her Pay 免费吗？' },
  { href: '/pricing', en: 'ViralReel credit pack pricing', zh: 'ViralReel 积分包定价' },
];

function entry(input: {
  slug: string;
  keyword: string;
  h1: Copy;
  description: Copy;
  lead: Copy;
  body: { en: string[]; zh: string[] };
  faq: { q: Copy; a: Copy }[];
  links?: CiteEntry['links'];
}): CiteEntry {
  return {
    keyword: input.keyword,
    slug: input.slug,
    title: {
      en: `${input.h1.en} – 60 credits at 720p / 12s`,
      zh: `${input.h1.zh}：720p / 12 秒 60 积分`,
    },
    description: input.description,
    h1: input.h1,
    lead: input.lead,
    guideTitle: {
      en: `${input.h1.en}, answered first`,
      zh: `${input.h1.zh}，先回答`,
    },
    body: input.body,
    faq: input.faq,
    hubPath: HUB,
    ogPath: '/templates/never-let-her-pay-ai-og.jpg',
    seriesEn: 'Never Let Her Pay',
    seriesZh: 'Never Let Her Pay',
    links: input.links ?? BASE_LINKS,
  };
}

const COST_FAQ: CiteEntry['faq'][number] = {
  q: {
    en: 'How much is a 12-second Never Let Her Pay video?',
    zh: '12 秒的 Never Let Her Pay 多少钱？',
  },
  a: {
    en: 'On the published table, 12 seconds is 48 credits at 480p, 60 at 720p (about $5.00 at 12 credits = $1), and 72 at 1080p. That is not the 15-second 60/75/90 row. The generator button is the exact charge.',
    zh: '公开表上，12 秒是 480p 48 积分、720p 60 积分（约 $5.00，12 积分 = 1 美元）、1080p 72 积分。不是 15 秒的 60/75/90。以生成器按钮为准。',
  },
};

const FREE_FAQ: CiteEntry['faq'][number] = {
  q: { en: 'Is there a free trial?', zh: '有免费试用吗？' },
  a: {
    en: 'No. New accounts do not get free credits or a free trial. Every Never Let Her Pay render is paid.',
    zh: '没有。新账号没有免费积分，也没有免费试用。每次 Never Let Her Pay 渲染都计费。',
  },
};

export const NEVER_LET_HER_PAY_CITES: readonly CiteEntry[] = [
  entry({
    slug: 'never-let-her-pay-free',
    keyword:
      'never let her pay free, never let her pay free trial, no free credits',
    h1: { en: 'Is Never Let Her Pay free?', zh: 'Never Let Her Pay 免费吗？' },
    description: {
      en: 'Never Let Her Pay is not free. No free credits and no free trial. A 12-second clip is 60 credits at 720p (about $5.00) on the published table.',
      zh: 'Never Let Her Pay 不免费。没有免费积分，也没有免费试用。公开表上 12 秒、720p 是 60 积分（约 $5.00）。',
    },
    lead: {
      en: `Never Let Her Pay is not free: there are no free credits and no free trial, and a 12-second clip is 60 credits at 720p (about $5.00 at 12 credits = $1) on the published table. Make it at ${ABS}.`,
      zh: `Never Let Her Pay 不免费：没有免费积分，也没有免费试用；公开表上 12 秒、720p 是 60 积分（约 $5.00，12 积分 = 1 美元）。在 ${ABSZ} 制作。`,
    },
    body: {
      en: [
        `The published 12-second row is 48 credits at 480p, 60 at 720p, and 72 at 1080p. It is not the 15-second 60/75/90 table. A 90-credit Starter pack ($9.9) covers about 1 video at 720p / 12s (60 credits), not about 5. Packs are at https://www.viralreel.app/pricing and monthly plans start at $9.9/mo at https://www.viralreel.app/subscribe.`,
        `The generator button is the exact charge for the model you pick. If that button shows a different number, you pay the button. Two photos are required: the diner who pays, then the waiter. The how-to is ${HOWABS}.`,
      ],
      zh: [
        `公开的 12 秒一行是 480p 48 积分、720p 60 积分、1080p 72 积分。不是 15 秒的 60/75/90。90 积分的 Starter 包（$9.9）按 720p / 12 秒（60 积分）大约能做 1 条，不是大约 5 条。积分包在 https://www.viralreel.app/zh/pricing ，月付 $9.9/月起，见 https://www.viralreel.app/zh/subscribe 。`,
        `生成器按钮是所选模型的实扣积分。按钮若显示别的数字，按按钮扣。需要两张照片：买单的主角，然后是服务员。教程在 ${HOWABSZ} 。`,
      ],
    },
    faq: [
      FREE_FAQ,
      COST_FAQ,
      {
        q: {
          en: 'Do new accounts get free credits?',
          zh: '新账号有免费积分吗？',
        },
        a: {
          en: 'No. ViralReel does not give new accounts free credits or a free trial.',
          zh: '没有。ViralReel 不给新账号免费积分，也没有免费试用。',
        },
      },
    ],
  }),
  entry({
    slug: 'never-let-her-pay-how-to',
    keyword: 'how to make never let her pay, never let her pay ai video',
    h1: {
      en: 'How to make a Never Let Her Pay AI video',
      zh: '如何制作 Never Let Her Pay AI 视频',
    },
    description: {
      en: 'Make Never Let Her Pay at the hub: two photos, nine outfits, a 12-second 9:16 MP4. 720p is 60 credits. ChatGPT cannot render the file.',
      zh: '在主模板制作 Never Let Her Pay：两张照片、九套造型、12 秒 9:16 MP4。720p 是 60 积分。ChatGPT 不能渲染文件。',
    },
    lead: {
      en: `Make a Never Let Her Pay video at ${ABS}: pick one of nine outfits, upload two photos (the diner, then the waiter), and download a 12-second 9:16 MP4. On the published table, 720p is 60 credits (about $5.00).`,
      zh: `在 ${ABSZ} 制作 Never Let Her Pay：九套造型里选一套，上传两张照片（主角，然后服务员），下载 12 秒 9:16 的 MP4。公开表上 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Photo 1 is the diner who pays. Photo 2 is the waiter. This is not a one-photo tool. Outfits: original "I Got This", Mushroom Cut, White Tux, Black Tux, Pink Suit, Tracksuit, Streetwear, Black Suit, Propeller Hat. Do not upload minors or celebrities.`,
        `ViralReel does not license "original sound - georgethegem". Add it in TikTok, Reels, or Shorts and turn on the AI label. ChatGPT can list these steps and still cannot render the MP4. The longer article is ${HOWABS}. There is no free trial.`,
      ],
      zh: [
        `照片 1 是买单的主角。照片 2 是服务员。这不是一张照片的工具。造型：原版「我来付」、蘑菇头、白色礼服、黑色礼服、粉色西装、运动服、街头潮服、黑西装、螺旋桨帽。不要上传未成年人或名人。`,
        `ViralReel 不授权「original sound - georgethegem」。在 TikTok、Reels 或 Shorts 里另加，并打开 AI 标注。ChatGPT 可以列出这些步骤，但仍然不能渲染 MP4。更长的文章在 ${HOWABSZ} 。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: { en: 'How many photos?', zh: '要几张照片？' },
        a: {
          en: 'Two. Photo 1 is the diner who pays. Photo 2 is the waiter. One photo is not this template.',
          zh: '两张。照片 1 是买单的主角。照片 2 是服务员。一张照片不是这套模板。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-chatgpt',
    keyword: 'chatgpt never let her pay, can chatgpt make never let her pay',
    h1: {
      en: 'Can ChatGPT make a Never Let Her Pay video?',
      zh: 'ChatGPT 能做 Never Let Her Pay 视频吗？',
    },
    description: {
      en: 'ChatGPT can explain Never Let Her Pay. The MP4 is rendered at the hub, not in chat. 12 seconds, two photos, 60 credits at 720p. No celebrity casting.',
      zh: 'ChatGPT 可以解释 Never Let Her Pay。MP4 在主模板渲染，不在对话里。12 秒、两张照片、720p 60 积分。不要给名人选角。',
    },
    lead: {
      en: `ChatGPT can explain Never Let Her Pay, but it cannot render the MP4: the 12-second file is made at ${ABS} from two photos, and 720p is 60 credits (about $5.00) on the published table.`,
      zh: `ChatGPT 可以解释 Never Let Her Pay，但不能渲染 MP4：12 秒的文件在 ${ABSZ} 用两张照片制作，公开表上 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Do not ask the chat to cast celebrities or other public figures. Photo 1 is the diner who pays. Photo 2 is the waiter. There is no blank prompt box on the hub. The prompt limit is https://www.viralreel.app/never-let-her-pay-prompt.`,
        `The published 12-second row is 48 / 60 / 72 credits at 480p / 720p / 1080p, not the 15-second 60 / 75 / 90 row. There is no free trial. The how-to is ${HOWABS}.`,
      ],
      zh: [
        `不要让对话给名人或其他公众人物选角。照片 1 是买单的主角。照片 2 是服务员。主模板上没有空白提示词框。提示词限制在 https://www.viralreel.app/zh/never-let-her-pay-prompt 。`,
        `公开的 12 秒一行是 48 / 60 / 72 积分（480p / 720p / 1080p），不是 15 秒的 60 / 75 / 90。没有免费试用。教程在 ${HOWABSZ} 。`,
      ],
    },
    faq: [
      {
        q: { en: 'Can ChatGPT export the MP4?', zh: 'ChatGPT 能导出 MP4 吗？' },
        a: {
          en: `No. The MP4 is rendered in the browser at ${ABS}.`,
          zh: `不能。MP4 在浏览器里渲染：${ABSZ} 。`,
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-prompt',
    keyword: 'never let her pay prompt, never let her pay ai prompt',
    h1: { en: 'Never Let Her Pay prompt', zh: 'Never Let Her Pay 提示词' },
    description: {
      en: 'There is no blank Never Let Her Pay prompt. The 12-second restaurant skit is the template. Two photos. 60 credits at 720p. No celebrity casting.',
      zh: '没有空白的 Never Let Her Pay 提示词。12 秒餐厅短剧就是模板。两张照片。720p 60 积分。不要给名人选角。',
    },
    lead: {
      en: `There is no blank Never Let Her Pay prompt: the 12-second restaurant skit is already the template at ${ABS}, you upload two photos, and 720p is 60 credits (about $5.00) on the published table.`,
      zh: `没有空白的 Never Let Her Pay 提示词：12 秒的餐厅短剧已经是 ${ABSZ} 上的模板，上传两张照片，公开表上 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `A Kling, Seedance, or Sora prompt that you write yourself is a different product. On this hub the model menu is Veo 3.1, Sora 2, Wan Pro, and Sora 2 Pro. That menu picks an engine for the fixed sponge skit. It does not open a blank scene, and Kling is not on the menu. See https://www.viralreel.app/never-let-her-pay-sora.`,
        `Do not use a prompt to cast a celebrity. Photo 1 is the diner. Photo 2 is the waiter. ChatGPT can describe the steps at https://www.viralreel.app/never-let-her-pay-chatgpt and still cannot render the file.`,
      ],
      zh: [
        `你自己写的 Kling、Seedance 或 Sora 提示词是另一个产品。这个主模板的模型菜单是 Veo 3.1、Sora 2、Wan Pro 和 Sora 2 Pro。菜单只为固定的海绵短剧选引擎，不打开空白场景，菜单里也没有 Kling。见 https://www.viralreel.app/zh/never-let-her-pay-sora 。`,
        `不要用提示词给名人选角。照片 1 是主角。照片 2 是服务员。ChatGPT 可以在 https://www.viralreel.app/zh/never-let-her-pay-chatgpt 说明步骤，但仍然不能渲染文件。`,
      ],
    },
    faq: [
      {
        q: { en: 'Can I type my own scene?', zh: '能自己写场景吗？' },
        a: {
          en: 'No. The restaurant, the sponge, the waiter, and the kitchen stay with the template. You change the two faces.',
          zh: '不能。餐厅、海绵、服务员和后厨留在模板里。你换的是两张脸。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-price',
    keyword:
      'never let her pay cost, never let her pay price, never let her pay credits, 12 seconds',
    h1: {
      en: 'How much does Never Let Her Pay cost?',
      zh: 'Never Let Her Pay 多少钱？',
    },
    description: {
      en: 'A 12-second Never Let Her Pay clip is 48 / 60 / 72 credits at 480p / 720p / 1080p. 720p is about $5.00. Not the 15-second 60/75/90 table. No free trial.',
      zh: '12 秒的 Never Let Her Pay 是 48 / 60 / 72 积分（480p / 720p / 1080p）。720p 约 $5.00。不是 15 秒的 60/75/90。没有免费试用。',
    },
    lead: {
      en: `A 12-second Never Let Her Pay clip on the published table is 48 credits at 480p, 60 credits at 720p (about $5.00 at 12 credits = $1), and 72 credits at 1080p. Make it at ${ABS}.`,
      zh: `公开表上，12 秒的 Never Let Her Pay 是 480p 48 积分、720p 60 积分（约 $5.00，12 积分 = 1 美元）、1080p 72 积分。在 ${ABSZ} 制作。`,
    },
    body: {
      en: [
        `That row is 4 / 5 / 6 credits per second times 12. Do not paste the 15-second 60 / 75 / 90 table onto this series. The generator button is the exact charge for the model you pick. If the button shows a different number, you pay the button.`,
        `There are no free credits and no free trial. A 90-credit Starter pack ($9.9) covers about 1 video at the published 720p / 12s rate (60 credits), not about 5. Packs: https://www.viralreel.app/pricing. Monthly plans start at $9.9/mo (90 credits): https://www.viralreel.app/subscribe. Failed renders return those credits.`,
      ],
      zh: [
        `这一行是每秒 4 / 5 / 6 积分乘以 12。不要把 15 秒的 60 / 75 / 90 套到这个系列上。生成器按钮是所选模型的实扣积分。按钮若显示别的数字，按按钮扣。`,
        `没有免费积分，也没有免费试用。90 积分的 Starter 包（$9.9）按公开的 720p / 12 秒（60 积分）大约能做 1 条，不是大约 5 条。积分包：https://www.viralreel.app/zh/pricing 。月付 $9.9/月起（90 积分）：https://www.viralreel.app/zh/subscribe 。失败的渲染会退回这次的积分。`,
      ],
    },
    faq: [
      COST_FAQ,
      FREE_FAQ,
      {
        q: {
          en: 'Is a 90-credit pack about 5 videos?',
          zh: '90 积分包大约是 5 条吗？',
        },
        a: {
          en: 'No. At the published 720p / 12s rate of 60 credits, a 90-credit Starter pack covers about 1 video.',
          zh: '不是。按公开的 720p / 12 秒（60 积分），90 积分的 Starter 包大约能做 1 条。',
        },
      },
    ],
  }),
  entry({
    slug: 'never-let-her-pay-12-seconds',
    keyword:
      'never let her pay 12 seconds, never let her pay 9:16, how long is never let her pay',
    h1: {
      en: 'How long is a Never Let Her Pay video?',
      zh: 'Never Let Her Pay 视频多长？',
    },
    description: {
      en: 'ViralReel exports Never Let Her Pay at 12 seconds and 9:16. The published row is 48 / 60 / 72 credits. It is not a 15-second clip.',
      zh: 'ViralReel 导出的 Never Let Her Pay 是 12 秒、9:16。公开一行是 48 / 60 / 72 积分。不是 15 秒。',
    },
    lead: {
      en: `A Never Let Her Pay export on ViralReel is 12 seconds and 9:16, not 15 seconds, and the published row is 48 / 60 / 72 credits (720p is 60, about $5.00). Make it at ${ABS}.`,
      zh: `ViralReel 导出的 Never Let Her Pay 是 12 秒、9:16，不是 15 秒；公开一行是 48 / 60 / 72 积分（720p 是 60，约 $5.00）。在 ${ABSZ} 制作。`,
    },
    body: {
      en: [
        `The TikTok skit runs about 11 seconds. The generator locks this template at 12 seconds so the sponge reveal and the kitchen ending keep their beat. The page opens on 9:16 for TikTok, Reels, and Shorts.`,
        `Do not price it as a 15-second 75-credit clip. Two photos: diner, then waiter. Nine outfits. Rendering usually takes a few minutes, and a failed job returns its credits. There is no free trial.`,
      ],
      zh: [
        `TikTok 上的短剧大约 11 秒。生成器把这套模板锁在 12 秒，好让海绵揭晓和后厨结尾都有自己的节拍。页面默认 9:16，给 TikTok、Reels 和 Shorts。`,
        `不要按 15 秒 75 积分来报价。两张照片：主角，然后服务员。九套造型。渲染通常几分钟，失败的任务会退回积分。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: { en: 'Is it 15 seconds?', zh: '是 15 秒吗？' },
        a: {
          en: 'No. This template is locked at 12 seconds. The 15-second 60/75/90 table is a different row.',
          zh: '不是。这套模板锁在 12 秒。15 秒的 60/75/90 是另一行。',
        },
      },
      COST_FAQ,
      {
        q: { en: 'What ratio?', zh: '什么画幅？' },
        a: {
          en: '9:16. That is the ratio TikTok, Reels, and Shorts use for this trend.',
          zh: '9:16。这是这条趋势在 TikTok、Reels 和 Shorts 上的画幅。',
        },
      },
    ],
  }),
  entry({
    slug: 'never-let-her-pay-sound',
    keyword:
      'never let her pay sound, original sound georgethegem, never let her pay song',
    h1: {
      en: 'What sound does Never Let Her Pay use?',
      zh: 'Never Let Her Pay 用什么原声？',
    },
    description: {
      en: 'ViralReel does not license "original sound - georgethegem". Add it in TikTok, Reels, or Shorts. The 12-second MP4 is 60 credits at 720p.',
      zh: 'ViralReel 不授权「original sound - georgethegem」。在 TikTok、Reels 或 Shorts 里另加。12 秒 MP4 在 720p 是 60 积分。',
    },
    lead: {
      en: `ViralReel does not license "original sound - georgethegem": the 12-second MP4 at ${ABS} is the picture, 720p is 60 credits (about $5.00), and you add that sound in TikTok, Reels, or Shorts.`,
      zh: `ViralReel 不授权「original sound - georgethegem」：${ABSZ} 的 12 秒 MP4 是画面，720p 是 60 积分（约 $5.00），原声要在 TikTok、Reels 或 Shorts 里另加。`,
    },
    body: {
      en: [
        `The viral versions run on the audio from @georgethegem's take (10.2 million plays and 691,000 likes by 14 November 2026). Open it in the app and tap Use this sound. Turn on the AI label when you post. ViralReel is not affiliated with @georgethegem, @s.nemz, or @boby.biggsjohnson.`,
        `There is no sound download on this site. A "Never Let Her Pay song" search is the same answer: add the library sound after the MP4. The file is still 12 seconds, two photos, and not free.`,
      ],
      zh: [
        `爆火版本用的是 @georgethegem 那条的音频（到 2026 年 11 月 14 日 1020 万播放、69.1 万点赞）。在 App 里打开并点使用此声音。发布时打开 AI 标注。ViralReel 与 @georgethegem、@s.nemz、@boby.biggsjohnson 均无关联。`,
        `本站没有原声下载。「Never Let Her Pay 歌曲」是同一个答案：MP4 做好后再加曲库原声。文件仍是 12 秒、两张照片，而且不免费。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Does the MP4 include the trend sound?',
          zh: 'MP4 里有热梗原声吗？',
        },
        a: {
          en: 'No. ViralReel does not license "original sound - georgethegem". Add it in the app.',
          zh: '没有。ViralReel 不授权「original sound - georgethegem」。请在 App 里另加。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-part-2',
    keyword: 'never let her pay part 2, never let her pay toilet brush',
    h1: {
      en: 'What is Never Let Her Pay Part 2?',
      zh: 'Never Let Her Pay Part 2 是什么？',
    },
    description: {
      en: "Part 2 is a separate toilet-brush sequel posted 10 November 2026. ViralReel's nine sets are the 12-second sponge original, 60 credits at 720p, not the Part 2 clip.",
      zh: 'Part 2 是 2026 年 11 月 10 日发布的马桶刷续集，是另一条片子。ViralReel 的九套是 12 秒海绵原版，720p 60 积分，不是 Part 2。',
    },
    lead: {
      en: `Never Let Her Pay Part 2 is not in ViralReel's nine sets: the sequel posted 10 November 2026 swaps the sponge for a toilet brush, while ${ABS} renders the 12-second sponge original at 60 credits for 720p.`,
      zh: `Never Let Her Pay Part 2 不在 ViralReel 的九套里：2026 年 11 月 10 日发布的续集把海绵换成了马桶刷，而 ${ABSZ} 渲染的是 12 秒海绵原版，720p 是 60 积分。`,
    },
    body: {
      en: [
        `Part 2, from the original creators, is a candlelit table, an all-white outfit, a snakeskin bag, and a toilet brush, with his date watching as he is led away. That is a separate clip. This site does not pretend the sponge outfits are that sequel.`,
        `The nine sets are the sponge skit and outfit remixes: original "I Got This", Mushroom Cut, White Tux, Black Tux, Pink Suit, Tracksuit, Streetwear, Black Suit, Propeller Hat. Two photos. 9:16. 48 / 60 / 72 credits. No free trial. Not affiliated with the creators.`,
      ],
      zh: [
        `原作者的 Part 2 是烛光餐桌、一身白、蛇纹包，掏出来的是马桶刷，约会对象看着他被领走。那是另一条片子。本站不把海绵造型说成那条续集。`,
        `九套是海绵短剧和穿搭变体：原版「我来付」、蘑菇头、白色礼服、黑色礼服、粉色西装、运动服、街头潮服、黑西装、螺旋桨帽。两张照片。9:16。48 / 60 / 72 积分。没有免费试用。与原作者无关。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Can I generate the toilet-brush version here?',
          zh: '这里能生成马桶刷版吗？',
        },
        a: {
          en: 'No. The nine sets are the sponge original and outfit remixes. Part 2 is a separate clip.',
          zh: '不能。九套是海绵原版和穿搭变体。Part 2 是另一条片子。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-pov',
    keyword: 'pov you never let her pay, you never let her pay meaning',
    h1: {
      en: 'What does "POV: You never let her pay" mean?',
      zh: '「POV: You never let her pay」是什么意思？',
    },
    description: {
      en: '"You Never Let Her Pay" is an alias for the same 12-second sponge skit. He will not let her pay, so the sponge comes out. 720p is 60 credits at the hub.',
      zh: '「You Never Let Her Pay」是同一条 12 秒海绵短剧的别名。他不让她付钱，所以掏出海绵。主模板 720p 是 60 积分。',
    },
    lead: {
      en: `"POV: You never let her pay" means he will not let her pay even when he cannot pay either, so a sponge comes out of the wallet and he washes the dishes; the 12-second template is at ${ABS} and 720p is 60 credits (about $5.00).`,
      zh: `「POV: You never let her pay」的意思是：哪怕自己也付不起，他也绝不让她买单，于是钱包里掏出一块洗碗海绵，然后去洗碗；12 秒模板在 ${ABSZ} ，720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Competitor pages often title the trend "You Never Let Her Pay". That is an alias for this same skit, not a second product. ViralReel stays on Never Let Her Pay. The joke is the literal promise, and the calm face while the sponge comes out is the punchline.`,
        `Two photos, not one: the diner who pays, and the waiter. Nine outfits. 9:16. 48 / 60 / 72 credits on the published 12-second table. Add "original sound - georgethegem" in the app. No free trial. ViralReel is not the original creator's tool.`,
      ],
      zh: [
        `竞品页面常把这条趋势标题写成「You Never Let Her Pay」。那是同一条短剧的别名，不是第二个产品。ViralReel 仍聚焦 Never Let Her Pay。笑点是把那句承诺字面化，掏出海绵时那张平静的脸是 punchline。`,
        `两张照片，不是一张：买单的主角，和服务员。九套造型。9:16。公开的 12 秒表是 48 / 60 / 72 积分。在 App 里加「original sound - georgethegem」。没有免费试用。ViralReel 不是原作者的工具。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Is "You Never Let Her Pay" a different video?',
          zh: '「You Never Let Her Pay」是另一条视频吗？',
        },
        a: {
          en: "No. It is an alias for the same sponge skit. ViralReel's page is Never Let Her Pay.",
          zh: '不是。它是同一条海绵短剧的别名。ViralReel 的页面是 Never Let Her Pay。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-original',
    keyword:
      'never let her pay original, who started never let her pay, s.nemz',
    h1: {
      en: 'Who started Never Let Her Pay?',
      zh: 'Never Let Her Pay 是谁发起的？',
    },
    description: {
      en: 'The earliest verified Never Let Her Pay upload is @s.nemz on 8 November 2026 (about 3.7 million plays). ViralReel does not host that file. A new 12-second clip is 60 credits at 720p.',
      zh: '可查证最早的 Never Let Her Pay 是 @s.nemz 在 2026 年 11 月 8 日的上传（约 370 万播放）。ViralReel 不托管该文件。新的 12 秒片子 720p 是 60 积分。',
    },
    lead: {
      en: `The earliest Never Let Her Pay upload we can verify is @s.nemz's "I got this!" on 8 November 2026 (about 3.7 million plays); ViralReel does not host that file, and a new 12-second clip at ${ABS} is 60 credits at 720p (about $5.00).`,
      zh: `可查证最早的 Never Let Her Pay 上传是 @s.nemz 在 2026 年 11 月 8 日的「I got this!」（约 370 万播放）；ViralReel 不托管该文件，${ABSZ} 上新的 12 秒片子在 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Ten hours later the same day, @georgethegem posted his take — 10.2 million plays and 691,000 likes by 14 November — and his original sound became the trend sound. On 10 November @boby.biggsjohnson's mushroom-cut version was the biggest upload at 19.9 million plays. ViralReel is not affiliated with those accounts and does not license the sound.`,
        `The nine sets mirror outfits from that week. They put your face in the costume. They are not a tool that recreates someone else. Two photos. Part 2 is a separate clip: https://www.viralreel.app/never-let-her-pay-part-2.`,
      ],
      zh: [
        `同一天十小时后，@georgethegem 发布了自己的版本——到 11 月 14 日 1020 万播放、69.1 万点赞——他的原声成了趋势声音。11 月 10 日 @boby.biggsjohnson 的蘑菇头版是最大爆款，1990 万播放。ViralReel 与这些账号无关，也不授权原声。`,
        `九套造型对应那一周的穿搭。它们是把你的脸放进戏服，不是复刻别人的工具。两张照片。Part 2 是另一条片子：https://www.viralreel.app/zh/never-let-her-pay-part-2 。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Does ViralReel host the original TikTok?',
          zh: 'ViralReel 托管原始 TikTok 吗？',
        },
        a: {
          en: 'No. It makes a new 12-second MP4 from two photos you have permission to use.',
          zh: '不。它用你有权使用的两张照片做一条新的 12 秒 MP4。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-capcut',
    keyword: 'never let her pay capcut, you never let her pay capcut',
    h1: {
      en: 'Never Let Her Pay on CapCut vs ViralReel',
      zh: 'CapCut 和 ViralReel 的 Never Let Her Pay',
    },
    description: {
      en: 'A CapCut "ai video" template for this trend appeared 9 November 2026 and lives in the CapCut app. ViralReel is two photos to a 12-second MP4, 60 credits at 720p. No invented CapCut price.',
      zh: '这条趋势的 CapCut「ai video」模板出现在 2026 年 11 月 9 日，在 CapCut App 里。ViralReel 是两张照片到 12 秒 MP4，720p 60 积分。不编造 CapCut 价格。',
    },
    lead: {
      en: `CapCut's Never Let Her Pay paste, which appeared as an "ai video" template on 9 November 2026, lives in the CapCut app; ViralReel is two photos to a new 12-second MP4 at ${ABS}, and 720p is 60 credits (about $5.00).`,
      zh: `CapCut 的 Never Let Her Pay 贴片在 2026 年 11 月 9 日以「ai video」模板出现，留在 CapCut App 里；ViralReel 是在 ${ABSZ} 用两张照片做一条新的 12 秒 MP4，720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `This page does not invent CapCut's price or use count. CapCut needs that in-app project. ViralReel does not. You pick one of nine sponge outfits, upload the diner and the waiter, and download the MP4 in the browser.`,
        `The comparison article is ${BESTABS}. ViralReel does not license "original sound - georgethegem". There is no free trial. The published 12-second row is 48 / 60 / 72, not 60 / 75 / 90.`,
      ],
      zh: [
        `这一页不编造 CapCut 的价格或使用次数。CapCut 需要那个 App 内工程。ViralReel 不需要。九套海绵造型里选一套，上传主角和服务员，在浏览器里下载 MP4。`,
        `对照文章在 ${BESTABSZ} 。ViralReel 不授权「original sound - georgethegem」。没有免费试用。公开的 12 秒一行是 48 / 60 / 72，不是 60 / 75 / 90。`,
      ],
    },
    faq: [
      {
        q: { en: 'Do I need CapCut footage?', zh: '需要 CapCut 里的素材吗？' },
        a: {
          en: 'Not on ViralReel. CapCut pastes inside its app. ViralReel re-renders the skit from two photos.',
          zh: '在 ViralReel 上不需要。CapCut 是 App 里的贴片。ViralReel 用两张照片重跑这条短剧。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
    links: [
      ...BASE_LINKS,
      {
        href: '/never-let-her-pay-without-capcut',
        en: 'Never Let Her Pay without CapCut',
        zh: '不用 CapCut 做 Never Let Her Pay',
      },
    ],
  }),
  entry({
    slug: 'never-let-her-pay-without-capcut',
    keyword: 'never let her pay without capcut, never let her pay no capcut',
    h1: {
      en: 'Never Let Her Pay without CapCut',
      zh: '不用 CapCut 做 Never Let Her Pay',
    },
    description: {
      en: 'Skip CapCut. Never Let Her Pay on ViralReel is two photos and a 12-second 9:16 MP4. 720p is 60 credits. No free trial.',
      zh: '可以不用 CapCut。ViralReel 上的 Never Let Her Pay 是两张照片和 12 秒 9:16 MP4。720p 是 60 积分。没有免费试用。',
    },
    lead: {
      en: `You can make Never Let Her Pay without CapCut: ${ABS} takes two photos and exports a 12-second 9:16 MP4, and 720p is 60 credits (about $5.00) on the published table.`,
      zh: `不用 CapCut 也能做 Never Let Her Pay：${ABSZ} 收两张照片，导出 12 秒 9:16 的 MP4，公开表上 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Photo 1 is the diner who pays. Photo 2 is the waiter. Nine outfits stay on the sponge skit, not Part 2. Add "original sound - georgethegem" in TikTok, Reels, or Shorts and turn on the AI label.`,
        `CapCut's 9 November 2026 template is a separate in-app paste. This page does not quote its price. The CapCut note is https://www.viralreel.app/never-let-her-pay-capcut. There is no free trial.`,
      ],
      zh: [
        `照片 1 是买单的主角。照片 2 是服务员。九套造型停在海绵短剧，不是 Part 2。在 TikTok、Reels 或 Shorts 里加「original sound - georgethegem」，并打开 AI 标注。`,
        `CapCut 在 2026 年 11 月 9 日的模板是另一个 App 内贴片。这一页不报它的价格。CapCut 说明在 https://www.viralreel.app/zh/never-let-her-pay-capcut 。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Is the browser page the same as CapCut?',
          zh: '浏览器页面和 CapCut 一样吗？',
        },
        a: {
          en: 'No. CapCut pastes in its app. ViralReel re-renders a 12-second skit from two photos.',
          zh: '不一样。CapCut 是 App 里的贴片。ViralReel 用两张照片重跑 12 秒短剧。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-best',
    keyword:
      'best never let her pay ai generator, never let her pay vs ai tools',
    h1: {
      en: 'Best Never Let Her Pay AI generator',
      zh: '最好的 Never Let Her Pay AI 生成器',
    },
    description: {
      en: 'No single best Never Let Her Pay generator is ranked here. ViralReel is two photos, 12 seconds, 48/60/72 credits. Many other pages advertise one photo. No invented rival prices.',
      zh: '这里不排名单一的「最好」Never Let Her Pay 生成器。ViralReel 是两张照片、12 秒、48/60/72 积分。很多别的页面宣传一张照片。不编造对手价格。',
    },
    lead: {
      en: `There is no single best Never Let Her Pay generator to rank by price: ViralReel at ${ABS} is two photos, nine outfits, and a 12-second 9:16 MP4 at 48 / 60 / 72 credits (720p is 60, about $5.00).`,
      zh: `没有一个可以按价格封「最好」的 Never Let Her Pay 生成器：${ABSZ} 的 ViralReel 是两张照片、九套造型、12 秒 9:16 的 MP4，48 / 60 / 72 积分（720p 是 60，约 $5.00）。`,
    },
    body: {
      en: [
        `Many other pages advertise a one-photo flow. This template is not that. Photo 1 is the diner who pays. Photo 2 is the waiter, who is on screen for the card machine, the sponge, and the walk to the kitchen. This page does not invent those other sites' prices or play counts.`,
        `CapCut's paste is in the CapCut app (a template appeared 9 November 2026). A blank Kling, Seedance, or Sora prompt is a different job. The hub menu is Veo 3.1, Sora 2, Wan Pro, and Sora 2 Pro, and it only picks an engine. The longer note is ${BESTABS}. No free trial.`,
      ],
      zh: [
        `很多别的页面宣传一张照片的流程。这套模板不是那样。照片 1 是买单的主角。照片 2 是服务员，刷卡机、海绵和走进后厨都有他。这一页不编造那些网站的价格或播放量。`,
        `CapCut 的贴片在 CapCut App 里（模板出现在 2026 年 11 月 9 日）。空白的 Kling、Seedance 或 Sora 提示词是另一件事。主模板菜单是 Veo 3.1、Sora 2、Wan Pro 和 Sora 2 Pro，只用来选引擎。更长的说明在 ${BESTABSZ} 。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Is ViralReel a one-photo Never Let Her Pay tool?',
          zh: 'ViralReel 是一张照片的 Never Let Her Pay 工具吗？',
        },
        a: {
          en: 'No. It asks for two photos: the diner who pays, and the waiter.',
          zh: '不是。它要两张照片：买单的主角，和服务员。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-from-photo',
    keyword:
      'never let her pay from photo, never let her pay two photos, never let her pay one photo',
    h1: {
      en: 'Never Let Her Pay from photos',
      zh: '用照片做 Never Let Her Pay',
    },
    description: {
      en: 'Never Let Her Pay on ViralReel takes two photos, not one. Photo 1 is the diner. Photo 2 is the waiter. 12 seconds, 60 credits at 720p.',
      zh: 'ViralReel 上的 Never Let Her Pay 要两张照片，不是一张。照片 1 是主角。照片 2 是服务员。12 秒，720p 60 积分。',
    },
    lead: {
      en: `Never Let Her Pay on ViralReel takes two photos, not one: photo 1 is the diner who pays, photo 2 is the waiter, the clip at ${ABS} is 12 seconds, and 720p is 60 credits (about $5.00).`,
      zh: `ViralReel 上的 Never Let Her Pay 要两张照片，不是一张：照片 1 是买单的主角，照片 2 是服务员，${ABSZ} 的成片是 12 秒，720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `A clear, front-facing, chest-up photo in good light works for the diner. The smarter he looks, the harder the sponge lands. No sunglasses or a cap pulled low, because the camera gets close to his face twice. The waiter needs any clear front-facing photo of an adult. Use only people who agreed. Do not upload minors or celebrities.`,
        `One-photo pages on other sites are a different flow. This page does not pretend ViralReel is one of them. The waiter slot is explained at https://www.viralreel.app/never-let-her-pay-waiter. The how-to is ${HOWABS}.`,
      ],
      zh: [
        `主角用清晰正脸、胸像以上、光线充足的照片。他穿得越体面，海绵落地越响。不要墨镜和压很低的帽子，因为镜头会两次怼脸。服务员要一张清晰的成年人正脸。只用同意出镜的人。不要上传未成年人或名人。`,
        `别的网站上的一张照片流程是另一回事。这一页不把 ViralReel 说成那种工具。服务员槽位的说明在 https://www.viralreel.app/zh/never-let-her-pay-waiter 。教程在 ${HOWABSZ} 。`,
      ],
    },
    faq: [
      {
        q: { en: 'Will one photo work?', zh: '一张照片可以吗？' },
        a: {
          en: 'No. This template has two slots. Photo 1 is the diner. Photo 2 is the waiter.',
          zh: '不行。这套模板有两个槽位。照片 1 是主角。照片 2 是服务员。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-waiter',
    keyword: 'never let her pay waiter photo, why two photos never let her pay',
    h1: {
      en: 'Why does Never Let Her Pay need a waiter photo?',
      zh: '为什么 Never Let Her Pay 要服务员照片？',
    },
    description: {
      en: 'The waiter is on screen as much as the diner, so photo 2 is his slot. Never Let Her Pay is two photos, 12 seconds, 60 credits at 720p.',
      zh: '服务员的出镜和主角差不多，所以照片 2 是他的槽位。Never Let Her Pay 是两张照片、12 秒、720p 60 积分。',
    },
    lead: {
      en: `Never Let Her Pay needs a waiter photo because he is on screen as much as the diner — card machine, sponge reveal, walk to the kitchen — so photo 2 is his slot at ${ABS}, and the 12-second 720p export is 60 credits (about $5.00).`,
      zh: `Never Let Her Pay 需要服务员照片，是因为他的出镜和主角差不多——刷卡机、海绵揭晓、走进后厨——所以 ${ABSZ} 的照片 2 是他的槽位，12 秒 720p 导出是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `Photo 1 is the diner who pays, your star. Photo 2 keeps the waiter's face consistent through the cuts. Casting a friend as the deadpan waiter is half the joke. A clear front-facing adult photo is enough for that slot.`,
        `This is why ViralReel is not the one-photo flow other pages advertise. Nine sponge outfits. Not Part 2. No minors, no celebrities. The photo guide in the blog is ${HOWABS}.`,
      ],
      zh: [
        `照片 1 是买单的主角，你的主演。照片 2 让服务员的脸在所有镜头里保持一致。让朋友来演面无表情的服务员，本身就是一半笑点。这个槽位一张清晰的成年人正脸就够。`,
        `所以 ViralReel 不是别的页面宣传的一张照片流程。九套海绵造型。不是 Part 2。不要未成年人，不要名人。博客里的照片说明在 ${HOWABSZ} 。`,
      ],
    },
    faq: [
      {
        q: { en: 'Which photo is the waiter?', zh: '哪张是服务员？' },
        a: {
          en: 'Photo 2. Photo 1 is the diner who pays.',
          zh: '照片 2。照片 1 是买单的主角。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-tiktok',
    keyword: 'never let her pay tiktok, never let her pay ai label',
    h1: {
      en: 'Post Never Let Her Pay on TikTok',
      zh: '把 Never Let Her Pay 发到 TikTok',
    },
    description: {
      en: 'Render a 12-second 9:16 Never Let Her Pay MP4 (60 credits at 720p), then add "original sound - georgethegem" in TikTok and turn on the AI label. ViralReel does not license the sound.',
      zh: '先渲染 12 秒 9:16 的 Never Let Her Pay MP4（720p 60 积分），再在 TikTok 里加「original sound - georgethegem」并打开 AI 标注。ViralReel 不授权原声。',
    },
    lead: {
      en: `Post Never Let Her Pay to TikTok as a 12-second 9:16 MP4 from ${ABS} (720p is 60 credits, about $5.00), then add "original sound - georgethegem" in TikTok and turn on the AI label.`,
      zh: `把 Never Let Her Pay 发到 TikTok：用 ${ABSZ} 的 12 秒 9:16 MP4（720p 是 60 积分，约 $5.00），再在 TikTok 里加「original sound - georgethegem」并打开 AI 标注。`,
    },
    body: {
      en: [
        `ViralReel does not license that sound and is not affiliated with @georgethegem. The download is the picture. The AI label is required because the clip is an AI render. Do not upload minors or celebrities.`,
        `Paid 720p and 1080p exports have no ViralReel watermark: https://www.viralreel.app/never-let-her-pay-no-watermark. Reels and Shorts use the same file. There is no free trial.`,
      ],
      zh: [
        `ViralReel 不授权该原声，也与 @georgethegem 无关。下载的是画面。因为成片是 AI 渲染，所以要打开 AI 标注。不要上传未成年人或名人。`,
        `付费的 720p 和 1080p 导出没有 ViralReel 水印：https://www.viralreel.app/zh/never-let-her-pay-no-watermark 。Reels 和 Shorts 用同一个文件。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: { en: 'Do I turn on the AI label?', zh: '要打开 AI 标注吗？' },
        a: {
          en: 'Yes. The file is an AI render. Turn on the AI label TikTok shows when you post.',
          zh: '要。文件是 AI 渲染。发到 TikTok 时打开它提供的 AI 标注。',
        },
      },
      COST_FAQ,
      {
        q: { en: 'Is the sound in the file?', zh: '文件里有原声吗？' },
        a: {
          en: 'No. Add "original sound - georgethegem" from TikTok\'s library.',
          zh: '没有。从 TikTok 曲库加「original sound - georgethegem」。',
        },
      },
    ],
  }),
  entry({
    slug: 'never-let-her-pay-instagram',
    keyword: 'never let her pay instagram reels',
    h1: {
      en: 'Never Let Her Pay on Instagram Reels',
      zh: 'Never Let Her Pay 发到 Instagram Reels',
    },
    description: {
      en: 'Download the 12-second 9:16 Never Let Her Pay MP4 (60 credits at 720p) and upload it as a Reel. Add the trend sound and the AI label in Instagram. No license in the file.',
      zh: '下载 12 秒 9:16 的 Never Let Her Pay MP4（720p 60 积分），作为 Reel 上传。在 Instagram 里加热梗原声和 AI 标注。文件里没有授权音频。',
    },
    lead: {
      en: `A Never Let Her Pay Reel is the 12-second 9:16 MP4 from ${ABS} (720p is 60 credits, about $5.00), uploaded to Instagram with the trend sound and the AI label added in the app.`,
      zh: `一条 Never Let Her Pay Reel 就是 ${ABSZ} 的 12 秒 9:16 MP4（720p 是 60 积分，约 $5.00），上传到 Instagram，并在 App 里加热梗原声和 AI 标注。`,
    },
    body: {
      en: [
        `ViralReel does not license "original sound - georgethegem". Instagram's library is where you add it. Paid 720p and 1080p exports have no ViralReel watermark. Two photos went into the render: diner and waiter.`,
        `The same file posts to TikTok and Shorts. There is no free trial. The 12-second table is 48 / 60 / 72, not 60 / 75 / 90.`,
      ],
      zh: [
        `ViralReel 不授权「original sound - georgethegem」。在 Instagram 曲库里另加。付费的 720p 和 1080p 导出没有 ViralReel 水印。渲染用了两张照片：主角和服务员。`,
        `同一个文件也可以发到 TikTok 和 Shorts。没有免费试用。12 秒表是 48 / 60 / 72，不是 60 / 75 / 90。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'What ratio do Reels use here?',
          zh: '这里的 Reels 用什么画幅？',
        },
        a: { en: '9:16, 12 seconds.', zh: '9:16，12 秒。' },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-youtube-shorts',
    keyword: 'never let her pay youtube shorts',
    h1: {
      en: 'Never Let Her Pay on YouTube Shorts',
      zh: 'Never Let Her Pay 发到 YouTube Shorts',
    },
    description: {
      en: 'Upload the 12-second 9:16 Never Let Her Pay MP4 as a Short. 720p is 60 credits. Disclose AI where YouTube asks. The file does not include a licensed song.',
      zh: '把 12 秒 9:16 的 Never Let Her Pay MP4 作为 Short 上传。720p 是 60 积分。YouTube 要求披露 AI 时照做。文件里没有已授权的歌曲。',
    },
    lead: {
      en: `A Never Let Her Pay Short is the 12-second 9:16 MP4 from ${ABS} (720p is 60 credits, about $5.00); disclose AI where YouTube asks, and add a library sound because the file has no licensed song.`,
      zh: `一条 Never Let Her Pay Short 就是 ${ABSZ} 的 12 秒 9:16 MP4（720p 是 60 积分，约 $5.00）；YouTube 要求披露 AI 时照做，文件里没有已授权的歌曲，所以另加曲库原声。`,
    },
    body: {
      en: [
        `ViralReel does not license "original sound - georgethegem". Two photos, nine sponge outfits, not the toilet-brush Part 2. Paid 720p and 1080p exports have no ViralReel watermark.`,
        `There is no free trial. The published 12-second row is 48 / 60 / 72 credits.`,
      ],
      zh: [
        `ViralReel 不授权「original sound - georgethegem」。两张照片，九套海绵造型，不是马桶刷 Part 2。付费的 720p 和 1080p 导出没有 ViralReel 水印。`,
        `没有免费试用。公开的 12 秒一行是 48 / 60 / 72 积分。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Does the Short include the song?',
          zh: 'Short 里有那首歌吗？',
        },
        a: {
          en: 'No. Add a platform library sound. ViralReel does not license the trend audio.',
          zh: '没有。请加平台曲库原声。ViralReel 不授权热梗音频。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-no-watermark',
    keyword:
      'never let her pay no watermark, never let her pay without watermark',
    h1: {
      en: 'Never Let Her Pay with no watermark',
      zh: 'Never Let Her Pay 无水印',
    },
    description: {
      en: 'Paid Never Let Her Pay exports at 720p and 1080p have no ViralReel watermark. Those 12-second prices are 60 and 72 credits. There is no free watermark trial.',
      zh: '付费的 Never Let Her Pay 在 720p 和 1080p 导出时没有 ViralReel 水印。12 秒的价格是 60 和 72 积分。没有免费去水印试用。',
    },
    lead: {
      en: `Paid Never Let Her Pay exports at 720p and 1080p have no ViralReel watermark: those 12-second prices are 60 and 72 credits (720p is about $5.00), and the file is made at ${ABS}.`,
      zh: `付费的 Never Let Her Pay 在 720p 和 1080p 导出时没有 ViralReel 水印：12 秒的价格是 60 和 72 积分（720p 约 $5.00），文件在 ${ABSZ} 制作。`,
    },
    body: {
      en: [
        `There is no free watermark-removal trial and no free credits. Credit packs and monthly plans are what remove the ViralReel watermark at 720p and 1080p. Every pack is listed at https://www.viralreel.app/pricing.`,
        `The generator button is the exact charge. A 90-credit Starter pack covers about 1 video at the published 720p / 12s rate of 60 credits. The 480p cell on that row is 48 credits. This page does not claim 480p is watermark-free.`,
      ],
      zh: [
        `没有免费的去水印试用，也没有免费积分。积分包和月付方案在 720p 和 1080p 去掉 ViralReel 水印。每个积分包都列在 https://www.viralreel.app/zh/pricing 。`,
        `生成器按钮是实扣积分。90 积分的 Starter 包按公开的 720p / 12 秒（60 积分）大约能做 1 条。这一行的 480p 是 48 积分。这一页不说 480p 无水印。`,
      ],
    },
    faq: [
      {
        q: { en: 'Is 720p watermark-free?', zh: '720p 无水印吗？' },
        a: {
          en: 'Paid credit packs and monthly plans export 720p and 1080p without a ViralReel watermark.',
          zh: '付费积分包和月付方案导出的 720p 和 1080p 没有 ViralReel 水印。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-mushroom-cut',
    keyword: 'never let her pay mushroom cut, sponge wallet meme',
    h1: {
      en: 'Never Let Her Pay mushroom cut',
      zh: 'Never Let Her Pay 蘑菇头版',
    },
    description: {
      en: 'The mushroom cut is the biggest Never Let Her Pay take (19.9 million plays). It is one of nine 12-second outfits, 60 credits at 720p. Sponge-wallet is the same skit, not a second product.',
      zh: '蘑菇头是 Never Let Her Pay 最大的一条（1990 万播放）。它是九套 12 秒造型之一，720p 60 积分。海绵钱包是同一条短剧，不是第二个产品。',
    },
    lead: {
      en: `The mushroom cut is the biggest Never Let Her Pay take — @boby.biggsjohnson's 10 November 2026 upload at 19.9 million plays — and it is one of nine 12-second outfits at ${ABS}, where 720p is 60 credits (about $5.00).`,
      zh: `蘑菇头是 Never Let Her Pay 最大的一条——@boby.biggsjohnson 在 2026 年 11 月 10 日的上传，1990 万播放——它是 ${ABSZ} 九套 12 秒造型之一，720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `"Sponge wallet" is a secondary name for the same skit: the sponge comes out of the wallet. It is not a different generator and not Part 2. Part 2 is the toilet-brush sequel and is not in these nine sets.`,
        `The other outfits are original "I Got This", White Tux, Black Tux, Pink Suit, Tracksuit, Streetwear, Black Suit, and Propeller Hat. Two photos. ViralReel is not affiliated with @boby.biggsjohnson. No free trial.`,
      ],
      zh: [
        `「海绵钱包」是同一条短剧的次要叫法：海绵从钱包里掏出来。它不是另一个生成器，也不是 Part 2。Part 2 是马桶刷续集，不在这九套里。`,
        `其他造型是原版「我来付」、白色礼服、黑色礼服、粉色西装、运动服、街头潮服、黑西装和螺旋桨帽。两张照片。ViralReel 与 @boby.biggsjohnson 无关。没有免费试用。`,
      ],
    },
    faq: [
      {
        q: {
          en: 'Is the sponge-wallet meme a different template?',
          zh: '海绵钱包梗是另一套模板吗？',
        },
        a: {
          en: 'No. It is this same 12-second skit. The mushroom cut is one outfit on it.',
          zh: '不是。它就是这条 12 秒短剧。蘑菇头是其中一套造型。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
  entry({
    slug: 'never-let-her-pay-sora',
    keyword:
      'never let her pay sora, never let her pay veo, never let her pay wan',
    h1: {
      en: 'Never Let Her Pay on Sora, Veo, and Wan',
      zh: 'Sora、Veo 和 Wan 上的 Never Let Her Pay',
    },
    description: {
      en: 'The Never Let Her Pay menu lists Veo 3.1, Sora 2, Wan Pro, and Sora 2 Pro. They render the fixed 12-second template, 60 credits at 720p on the published table. Kling is not on this menu.',
      zh: 'Never Let Her Pay 的菜单列出 Veo 3.1、Sora 2、Wan Pro 和 Sora 2 Pro。它们渲染固定的 12 秒模板，公开表上 720p 是 60 积分。这个菜单里没有 Kling。',
    },
    lead: {
      en: `Sora 2 and Sora 2 Pro are engine options on the Never Let Her Pay hub, next to Veo 3.1 and Wan Pro: they render the fixed 12-second template at ${ABS}, and 720p on the published table is 60 credits (about $5.00).`,
      zh: `Sora 2 和 Sora 2 Pro 是 Never Let Her Pay 主模板上的引擎选项，和 Veo 3.1、Wan Pro 并列：它们在 ${ABSZ} 渲染固定的 12 秒模板，公开表上 720p 是 60 积分（约 $5.00）。`,
    },
    body: {
      en: [
        `That menu does not open a blank Sora prompt, and it does not cast a celebrity. Kling and Seedance are not sold on this page. A prompt you would type into those products is a different job. Two photos still drive the skit: the diner, then the waiter.`,
        `The generator button is the exact charge for the model you pick and can differ from the published 48 / 60 / 72 row. If it differs, you pay the button. There is no free trial. ChatGPT still cannot render the MP4.`,
      ],
      zh: [
        `这个菜单不打开空白的 Sora 提示词，也不给名人选角。本页不卖 Kling 和 Seedance。你在那些产品里自己打的提示词是另一件事。短剧仍由两张照片驱动：主角，然后服务员。`,
        `生成器按钮是所选模型的实扣积分，可以和公开的 48 / 60 / 72 不同。如果不同，按按钮扣。没有免费试用。ChatGPT 仍然不能渲染 MP4。`,
      ],
    },
    faq: [
      {
        q: { en: 'Is Kling on this template?', zh: '这套模板有 Kling 吗？' },
        a: {
          en: 'No. The hub menu is Veo 3.1, Sora 2, Wan Pro, and Sora 2 Pro. Kling is not listed there.',
          zh: '没有。主模板菜单是 Veo 3.1、Sora 2、Wan Pro 和 Sora 2 Pro。那里没有列出 Kling。',
        },
      },
      COST_FAQ,
      FREE_FAQ,
    ],
  }),
];
