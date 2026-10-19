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

const BASELINE = { resolution: '720p', duration: 8 } as const;
const CHEAP = { resolution: '480p', duration: 8 } as const;
const EXPENSIVE = { resolution: '1080p', duration: 15 } as const;

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
  const baselineCost = videoCreditCost(table, BASELINE.resolution, BASELINE.duration);
  const cheapCost = videoCreditCost(table, CHEAP.resolution, CHEAP.duration);
  const expensiveCost = videoCreditCost(table, EXPENSIVE.resolution, EXPENSIVE.duration);
  return {
    baselineCost,
    cheapCost,
    expensiveCost,
    atBaseline: videosAtCost(credits, baselineCost),
    atCheapest: videosAtCost(credits, cheapCost),
    atPriciest: videosAtCost(credits, expensiveCost),
  };
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

function approxCount(count: number, zh: boolean): string {
  if (count < 1) return zh ? '不足 1 条' : 'fewer than 1';
  return formatCreditCount(count);
}

export function baselineVideoLine(credits: number, table: VideoCostTable, zh: boolean): string {
  const yieldInfo = videoYieldFromCredits(credits, table);
  const count = approxCount(yieldInfo.atBaseline, zh);
  const each = formatCreditCount(yieldInfo.baselineCost);
  if (zh) {
    return yieldInfo.atBaseline < 1
      ? `720p / 8 秒不足 1 条（每条 ${each} 积分）`
      : `720p / 8 秒约 ${count} 条（每条 ${each} 积分）`;
  }
  return yieldInfo.atBaseline < 1
    ? `fewer than 1 video at 720p / 8s (${each} credits each)`
    : `≈ ${count} videos at 720p / 8s (${each} credits each)`;
}

export function videoRangeLine(credits: number, table: VideoCostTable, zh: boolean): string | null {
  const yieldInfo = videoYieldFromCredits(credits, table);
  const low = Math.min(yieldInfo.atPriciest, yieldInfo.atCheapest);
  const high = Math.max(yieldInfo.atPriciest, yieldInfo.atCheapest);
  if (high <= 0 || low === high) return null;
  const cheap = formatCreditCount(yieldInfo.cheapCost);
  const expensive = formatCreditCount(yieldInfo.expensiveCost);
  if (zh) {
    return `按积分表大约 ${formatCreditCount(low)}–${formatCreditCount(high)} 条：1080p / 15 秒 ${expensive} 积分，480p / 8 秒 ${cheap} 积分。`;
  }
  return `About ${formatCreditCount(low)}–${formatCreditCount(high)} videos across the table (1080p / 15s is ${expensive} credits; 480p / 8s is ${cheap} credits).`;
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
  table: VideoCostTable,
  zh: boolean
): string {
  const amount = formatCreditCount(credits);
  const approx = baselineVideoLine(credits, table, zh);
  if (zh) {
    if (interval === 'one-time') return `一次性 ${amount} 积分，${approx}`;
    if (interval === 'year') return `每年 ${amount} 积分，${approx}`;
    if (interval === 'month') return `每月 ${amount} 积分，${approx}`;
    return `${amount} 积分，${approx}`;
  }
  if (interval === 'one-time') return `${amount} credits, one-time — ${approx}`;
  if (interval === 'year') return `${amount} credits per year — ${approx}`;
  if (interval === 'month') return `${amount} credits every month — ${approx}`;
  return `${amount} credits — ${approx}`;
}

/** Feature bullets shared by pack, monthly, and yearly cards. */
export function planFeatureLines(
  item: { product_id?: string; credits?: number; interval?: string },
  table: VideoCostTable,
  zh: boolean
): string[] {
  const credits = item.credits || 0;
  const priority = PRIORITY_PRODUCTS.has(item.product_id || '');
  const range = videoRangeLine(credits, table, zh);
  const lines = [
    creditGrantLine(credits, item.interval, table, zh),
    ...(range ? [range] : []),
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
