import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  formatCreditCount,
  usdFromCredits,
  videoCreditCost,
  videoYieldFromCredits,
  type VideoCostTable,
} from '@/shared/lib/video-yield';

// Site-level FAQ for the aggregate homepage.
// Visible answers and FAQPage JSON-LD share this list.

export interface HubFaqContext {
  videoCosts: VideoCostTable;
  creditsPerUsd: number;
}

interface HubFaqEntry {
  q: { en: string; zh: string };
  a: { en: string; zh: string };
}

function pricingPage(zh: boolean) {
  return zh ? 'https://www.viralreel.app/zh/pricing' : 'https://www.viralreel.app/pricing';
}

function subscribePage(zh: boolean) {
  return zh ? 'https://www.viralreel.app/zh/subscribe' : 'https://www.viralreel.app/subscribe';
}

function costFacts(ctx: HubFaqContext) {
  const table = ctx.videoCosts;
  const p480 = videoCreditCost(table, '480p', 8);
  const p720 = videoCreditCost(table, '720p', 8);
  const p1080 = videoCreditCost(table, '1080p', 15);
  const starter = videoYieldFromCredits(CANONICAL_PRICING.packStarterCredits, table);
  const usd = usdFromCredits(p720, ctx.creditsPerUsd);
  return { p480, p720, p1080, starterVideos: starter.atBaseline, usd };
}

function buildHubFaq(ctx: HubFaqContext): HubFaqEntry[] {
  const packs = CANONICAL_PRICING;
  const costs = costFacts(ctx);
  const pricingEn = pricingPage(false);
  const pricingZh = pricingPage(true);
  const subscribeEn = subscribePage(false);
  const subscribeZh = subscribePage(true);

  return [
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
      q: {
        en: 'How is a ViralReel remake different from a prompt tool?',
        zh: 'ViralReel 的重拍和提示词工具有什么不同？',
      },
      a: {
        en: 'A prompt tool such as Kling or a general studio such as Higgsfield asks you to describe the shot, so the model invents a new clip. ViralReel starts from a fixed template — the set, the motion, and the framing — and places your photos into that format. Lip-sync and gestures are part of the template. You do not prompt-engineer the trend.',
        zh: '可灵这类提示词工具，或 Higgsfield 这类通用工作室，需要你描述镜头，模型会另做一条新片子。ViralReel 从固定模板开始——布景、动作和构图都定好了——再把你的照片放进这个格式。口型同步和手势是模板的一部分。你不用为这条趋势写提示词。',
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
      q: { en: 'What kind of photo works?', zh: '什么样的照片效果好？' },
      a: {
        en: 'Use a clear, front-facing photo of one subject, with the face large enough to see and ordinary indoor light. A group shot, a profile, or two faces in one photo is the usual reason a face blends or drifts. The template page says whether it needs one photo or two, and which photo goes in which slot.',
        zh: '用一张清晰的正面照，只放一个主体，脸要看得清，普通室内光即可。合照、侧脸，或一张照片里两张脸，是脸融在一起或走形的常见原因。模板页会写明要一张还是两张，以及哪张放在哪个位置。',
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
      q: { en: 'Can I export 9:16?', zh: '可以导出 9:16 吗？' },
      a: {
        en: 'Yes. The generator includes 9:16 for TikTok, Instagram Reels, and YouTube Shorts. Some templates open on 16:9 because the source trend is widescreen; switch to 9:16 before you generate. 1:1 is on the same control.',
        zh: '可以。生成器有 9:16，对应 TikTok、Instagram Reels 和 YouTube Shorts。有的模板默认 16:9，因为原趋势是宽画幅；生成前改成 9:16 即可。同一组控件里也可以选 1:1。',
      },
    },
    {
      q: {
        en: 'How many credits does one remake cost?',
        zh: '重拍一条视频要多少积分？',
      },
      a: {
        en: `The generator shows the credit cost before you start. On the credit table, 480p / 8s is ${formatCreditCount(costs.p480)} credits, 720p / 8s is ${formatCreditCount(costs.p720)} credits (about ${costs.usd} at ${ctx.creditsPerUsd} credits = $1), and 1080p / 15s is ${formatCreditCount(costs.p1080)} credits. A one-time Starter pack is ${packs.packStarterPrice} for ${packs.packStarterCredits} credits, about ${formatCreditCount(costs.starterVideos)} videos at 720p / 8s. The full table is at ${pricingEn}.`,
        zh: `生成器会在开始前显示本次积分。积分表上，480p / 8 秒是 ${formatCreditCount(costs.p480)} 积分，720p / 8 秒是 ${formatCreditCount(costs.p720)} 积分（按 ${ctx.creditsPerUsd} 积分 = 1 美元，约 ${costs.usd}），1080p / 15 秒是 ${formatCreditCount(costs.p1080)} 积分。一次性 Starter 积分包 ${packs.packStarterPrice}，${packs.packStarterCredits} 积分，720p / 8 秒大约 ${formatCreditCount(costs.starterVideos)} 条。完整对照表见 ${pricingZh}。`,
      },
    },
    {
      q: { en: 'Do exports have a watermark?', zh: '导出的视频有水印吗？' },
      a: {
        en: `Paid credit packs and monthly or yearly plans export without a ViralReel watermark, at both 720p and 1080p. Every pack and plan on ${pricingEn} includes both resolutions.`,
        zh: `付费积分包以及月付、年付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。${pricingZh} 上的每个积分包和套餐都包含这两种清晰度。`,
      },
    },
    {
      q: { en: 'Can I post the video commercially?', zh: '视频可以商用或发到变现账号吗？' },
      a: {
        en: 'You can download the MP4 and post it, including on a creator account. You still need the right to use every photo. You also have to follow the model provider’s terms and the rules of the app where you post. ViralReel does not grant rights in someone else’s likeness, a song, or a brand.',
        zh: '你可以下载 MP4 并发布，包括发到创作者账号。你仍然需要对每张照片拥有使用权，并遵守模型提供方的条款，以及发布平台的规则。ViralReel 不授予他人肖像、歌曲或品牌的权利。',
      },
    },
    {
      q: {
        en: 'Does the video include the trend sound, and do I label it as AI?',
        zh: '视频带热梗原声吗？需要标注 AI 吗？',
      },
      a: {
        en: 'The template gives you the picture. Add the trend sound inside TikTok, Reels, or Shorts. That audio stays under the platform’s music rules; ViralReel does not license the original song. Where the app asks you to label AI-generated content, you add that label.',
        zh: '模板给你的是画面。热梗原声在 TikTok、Reels 或 Shorts 里另加。这段音频仍受平台音乐规则约束，ViralReel 不授权原曲。平台要求标注 AI 生成时，由你来标注。',
      },
    },
    {
      q: {
        en: 'What happens if a render fails?',
        zh: '渲染失败积分会退吗？',
      },
      a: {
        en: 'Credits are deducted when a generation is accepted. If that job fails or is canceled, including when the model rejects the photo, those credits return to your balance. The money already paid for a pack or a plan is not refunded as cash just because credits went unused.',
        zh: '生成被接受时扣除积分。如果任务失败或取消，包括模型拒绝这张照片，这些积分会退回余额。已经付给积分包或套餐的钱，不会仅仅因为积分没用完就按现金退回。',
      },
    },
    {
      q: {
        en: 'How long does a video take to render?',
        zh: '一条视频要渲染多久？',
      },
      a: {
        en: 'Most templates finish in about a minute. Length choices differ by template: many go up to 15 seconds, and some short clips are 4 or 6 seconds. The template page shows the options before you start.',
        zh: '大多数模板大约一分钟完成。时长因模板而异：不少最长 15 秒，有的短片只有 4 秒或 6 秒。模板页会在开始前显示可选时长。',
      },
    },
    {
      q: { en: 'Do I get free credits?', zh: '有免费积分吗？' },
      a: {
        en: `New accounts may include free starter credits so you can try a template before you pay. The generator always shows the credit cost before you render, and failed or canceled generations are refunded. One-time credit packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) on ${pricingEn}. Monthly plans start at ${packs.monthlyStarterPrice}/mo (${packs.monthlyStarterCredits} credits); the monthly detail page is ${subscribeEn}. Top-ups are ${ctx.creditsPerUsd} credits = $1.`,
        zh: `新账号可能会附带一些起始积分，方便你在付费前试一个模板。生成器总会在渲染前显示本次积分，失败或取消的生成会退回积分。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricingZh}。月付套餐 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），月付详情页是 ${subscribeZh}。加购为 ${ctx.creditsPerUsd} 积分 = 1 美元。`,
      },
    },
  ];
}

export function defaultHubFaqContext(): HubFaqContext {
  return {
    videoCosts: getVideoCostTable(),
    creditsPerUsd: CANONICAL_PRICING.creditsPerUsd,
  };
}

export function getHubFaqPairs(
  zh: boolean,
  ctx: HubFaqContext = defaultHubFaqContext()
): [string, string][] {
  return buildHubFaq(ctx).map((entry) => [
    zh ? entry.q.zh : entry.q.en,
    zh ? entry.a.zh : entry.a.en,
  ]);
}

export function buildHubFaqJsonLd(
  zh = false,
  ctx: HubFaqContext = defaultHubFaqContext()
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: buildHubFaq(ctx).map((entry) => ({
      '@type': 'Question',
      name: zh ? entry.q.zh : entry.q.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: zh ? entry.a.zh : entry.a.en,
      },
    })),
  };
}
