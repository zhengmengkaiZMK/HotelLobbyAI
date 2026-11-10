/**
 * Approximate how many videos a credit balance can pay for.
 * Uses the same resolution/duration table as the pricing page
 * (`getVideoCostTable`), so the "≈ N videos" line cannot drift
 * from the credits a generation actually costs.
 *
 * Counts are floored: a plan never claims a clip the balance cannot cover.
 */

export interface VideoCostCell {
  duration: number;
  credits: number;
}

export interface VideoCostRow {
  resolution: string;
  costs: VideoCostCell[];
}

export type VideoCostTable = VideoCostRow[];

export interface VideoYield {
  baselineCost: number;
  cheapCost: number;
  expensiveCost: number;
  atBaseline: number;
  atCheapest: number;
  atPriciest: number;
}

/** Default public clip: 15s at 720p. Do not count packs from the 8s row. */
const BASELINE = { resolution: '720p', duration: 15 } as const;
const CHEAP = { resolution: '480p', duration: 15 } as const;
const EXPENSIVE = { resolution: '1080p', duration: 30 } as const;

/**
 * Published per-second rates behind the public 15-second table
 * (60 / 75 / 90). Used only when a template's length is not a table row
 * (10s, 20s, 7s, 4s, 6s). The generator button remains the charge.
 */
const PUBLISHED_PER_SECOND: Record<string, number> = {
  '480p': 4,
  '720p': 5,
  '1080p': 6,
};

export function videoCreditCost(
  table: VideoCostTable,
  resolution: string,
  duration: number
): number {
  const row = table.find((item) => item.resolution === resolution);
  const cell = row?.costs.find((item) => item.duration === duration);
  const credits = cell?.credits ?? 0;
  return Number.isFinite(credits) && credits > 0 ? credits : 0;
}

/**
 * Credits for one clip at a resolution and length.
 * Table rows (8 / 12 / 15 / 30) win. Other lengths scale from the 15s cell,
 * then from the published 4 / 5 / 6 credits-per-second rates.
 */
export function creditsForDuration(
  table: VideoCostTable,
  resolution: string,
  seconds: number
): number {
  const exact = videoCreditCost(table, resolution, seconds);
  if (exact > 0 && [8, 12, 15, 30].includes(seconds)) return exact;
  const base15 = videoCreditCost(table, resolution, 15);
  const perSecond =
    base15 > 0 ? base15 / 15 : (PUBLISHED_PER_SECOND[resolution] ?? 5);
  if (!Number.isFinite(seconds) || seconds <= 0) return 0;
  return Math.max(1, Math.round(perSecond * seconds));
}

/** How many whole clips `credits` pays for at one credit price. */
export function videosAtCost(credits: number, cost: number): number {
  if (!Number.isFinite(credits) || credits <= 0) return 0;
  if (!Number.isFinite(cost) || cost <= 0) return 0;
  return Math.floor(credits / cost);
}

export function videoYieldFromCredits(
  credits: number,
  table: VideoCostTable
): VideoYield {
  const baselineCost = creditsForDuration(table, BASELINE.resolution, BASELINE.duration);
  const cheapCost = creditsForDuration(table, CHEAP.resolution, CHEAP.duration);
  const expensiveCost = creditsForDuration(table, EXPENSIVE.resolution, EXPENSIVE.duration);
  return {
    baselineCost,
    cheapCost,
    expensiveCost,
    atBaseline: videosAtCost(credits, baselineCost),
    atCheapest: videosAtCost(credits, cheapCost),
    atPriciest: videosAtCost(credits, expensiveCost),
  };
}

/** Published 15-second rates (4 / 5 / 6 credits per second) for answer-first copy. */
export function publishedCreditSentence(zh: boolean, seconds: number): string {
  const p480 = Math.round(4 * seconds);
  const p720 = Math.round(5 * seconds);
  const p1080 = Math.round(6 * seconds);
  const usd = (p720 / 12).toFixed(2);
  if (zh) {
    return `这条 ${seconds} 秒片子，480p 是 ${p480} 积分，720p 是 ${p720} 积分（约 $${usd}），1080p 是 ${p1080} 积分。没有免费积分。以生成器按钮为准。`;
  }
  return `This ${seconds}-second clip is ${p480} credits at 480p, ${p720} at 720p (about $${usd}), and ${p1080} at 1080p. There are no free credits. The generator button is the exact price.`;
}

export function formatCreditCount(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

/** Dollar value of a credit amount at the public top-up rate. */
export function usdFromCredits(credits: number, creditsPerUsd: number): string {
  if (!Number.isFinite(credits) || !Number.isFinite(creditsPerUsd) || creditsPerUsd <= 0) {
    return '';
  }
  const usd = credits / creditsPerUsd;
  return `$${usd.toFixed(2)}`;
}

/**
 * Pack/plan yield at the default 15-second 720p clip, not the 8-second floor.
 * Longer templates cost more. The generator button is the exact charge.
 */
export function maxVideoLine(credits: number, table: VideoCostTable, zh: boolean): string {
  const cost = creditsForDuration(table, '720p', 15);
  const count = videosAtCost(credits, cost);
  const price = formatCreditCount(cost);
  if (zh) {
    return count < 1
      ? `按默认 720p / 15 秒（${price} 积分）不足 1 条。更长的模板更贵，以生成器按钮上的本次积分为准。`
      : `按默认 720p / 15 秒（${price} 积分）大约 ${formatCreditCount(count)} 条。更长的模板更贵，以生成器按钮上的本次积分为准。`;
  }
  return count < 1
    ? `Fewer than 1 video at default 720p / 15s (${price} credits). Longer templates cost more. The generator button is the price for this render.`
    : `About ${formatCreditCount(count)} videos at default 720p / 15s (${price} credits). Longer templates cost more. The generator button is the price for this render.`;
}

const PRIORITY_PRODUCTS = new Set([
  'credits-once-creator',
  'credits-once-max',
  'pro-monthly',
  'pro-yearly',
]);

function creditGrantLine(
  credits: number,
  interval: string | undefined,
  zh: boolean
): string {
  const amount = formatCreditCount(credits);
  if (zh) {
    if (interval === 'one-time') return `一次性 ${amount} 积分`;
    if (interval === 'year') return `每年 ${amount} 积分`;
    if (interval === 'month') return `每月 ${amount} 积分`;
    return `${amount} 积分`;
  }
  if (interval === 'one-time') return `${amount} credits, one-time`;
  if (interval === 'year') return `${amount} credits per year`;
  if (interval === 'month') return `${amount} credits every month`;
  return `${amount} credits`;
}

/** Feature bullets shared by pack, monthly, and yearly cards. */
export function planFeatureLines(
  item: { product_id?: string; credits?: number; interval?: string },
  table: VideoCostTable,
  zh: boolean
): string[] {
  const credits = item.credits || 0;
  const priority = PRIORITY_PRODUCTS.has(item.product_id || '');
  const lines = [
    creditGrantLine(credits, item.interval, zh),
    maxVideoLine(credits, table, zh),
    zh ? '全部模板可用' : 'All templates included',
    zh ? '支持 720p 和 1080p 导出，无水印' : '720p and 1080p export, watermark-free',
    priority
      ? zh
        ? '优先渲染队列——不用排队'
        : 'Priority queue — skip the line'
      : zh
        ? '标准渲染队列'
        : 'Standard rendering queue',
    zh ? '积分不够可随时加购' : 'Instant credit top-ups whenever you need',
  ];
  return lines;
}
