export const VIDEO_COST_DEFAULTS = {
  '480p:8': 7,
  '480p:12': 12,
  '480p:15': 14,
  '480p:30': 28,
  '720p:8': 10,
  '720p:12': 14,
  '720p:15': 18,
  '720p:30': 36,
  '1080p:8': 14,
  '1080p:12': 18,
  '1080p:15': 22,
  '1080p:30': 44,
} as const;

export type VideoResolution = '480p' | '720p' | '1080p';
export type VideoDuration = 8 | 12 | 15 | 30;

export function getVideoGenerationCost(
  resolution: string | undefined,
  duration: number | string | undefined,
  configs?: Record<string, unknown>
): number {
  const r = resolution === undefined ? '720p' : resolution;
  if (!['480p', '720p', '1080p'].includes(r)) throw new Error('Unsupported video resolution');
  const d = duration === undefined ? 8 : Number(duration);
  if (!Number.isInteger(d) || d < 2 || d > 60) throw new Error('Unsupported video duration');
  // Bill by duration tier: clips are rounded UP to the next billing tier —
  // <=8s bills as 8s, 9-12s as 12s, 13-15s as 15s and anything longer as 30s.
  const tier = d <= 8 ? 8 : d <= 12 ? 12 : d <= 15 ? 15 : 30;
  const key = `${r}:${tier}` as keyof typeof VIDEO_COST_DEFAULTS;
  const configured = Number(configs?.[`video_cost_${r}_${tier}`]);
  return Number.isSafeInteger(configured) && configured > 0 ? configured : VIDEO_COST_DEFAULTS[key];
}

/**
 * Credit table shown on the homepage / pricing page. Computed with the Wan
 * 3.0 Reference billing formula (the model users actually pay for): unit
 * price from `fal_wan_reference_credits_per_second_{480p|720p|1080p}` plus
 * the configured reference-video input seconds — identical to what the
 * generation dialog charges, so the displayed table never drifts from real
 * billing when the admin edits per-second rates in the panel.
 */
export function getVideoCostTable(configs?: Record<string, unknown>) {
  return (['480p', '720p', '1080p'] as const).map((resolution) => ({
    resolution,
    costs: ([8, 12, 15, 30] as const).map((duration) => ({ duration, credits: getFalWanReferenceVideoCost(resolution, duration, configs) })),
  }));
}

/**
 * Per-second billing for task-relay models with free duration (e.g.
 * gemini-omni-1.1-flash: 3-10s, 360p/720p/1080p). Derives the unit price from
 * the configured 8-second tier of the nearest resolution and scales linearly,
 * rounding up so short clips are never undercharged.
 */
export function getOmniVideoCost(
  resolution: string | undefined,
  duration: number | string | undefined,
  configs?: Record<string, unknown>
): number {
  const tier = ({ '360p': '480p', '720p': '720p', '1080p': '1080p' } as Record<string, string>)[resolution || '720p'];
  if (!tier) throw new Error('Unsupported video resolution');
  const d = Number(duration || 8);
  if (!Number.isInteger(d) || d < 3 || d > 10) throw new Error('Unsupported video duration');
  const unitPrice = getVideoGenerationCost(tier, 8, configs) / 8;
  return Math.max(1, Math.ceil(unitPrice * d));
}

/**
 * Per-second billing for the fal.ai Kling O3 Pro Reference video-to-video
 * model. The upstream price is $0.168/s — at the default 12 credits/USD rate
 * that is 2.016 credits/s. Admins can override the per-second credits via
 * `fal_kling_reference_credits_per_second`. Durations follow the upstream
 * schema: whole seconds from 3 to 15. Total cost rounds up so short clips
 * are never undercharged.
 */
export const FAL_REFERENCE_VIDEO_MODEL = 'fal-ai/kling-video/o3/pro/video-to-video/reference';

export function getFalReferenceVideoCost(
  duration: number | string | undefined,
  configs?: Record<string, unknown>
): number {
  const d = Number(duration);
  if (!Number.isInteger(d) || d < 3 || d > 15) throw new Error('Unsupported video duration');
  const configured = Number(configs?.[`fal_kling_reference_credits_per_second`]);
  const unitPrice = Number.isFinite(configured) && configured > 0 ? configured : 2.016;
  return Math.max(1, Math.ceil(unitPrice * d));
}

/**
 * Per-second billing for the fal.ai Wan 3.0 Reference-to-Video model.
 * Billed by OUTPUT seconds only — the reference video is not charged to
 * users (the upstream input-second cost is absorbed by the admin, who
 * prices it into the per-second rates). Defaults are $0.05/s at 480p,
 * $0.10/s at 720p and $0.20/s at 1080p — at the default 12 credits/USD
 * rate that is 0.6 / 1.2 / 2.4 credits/s. Admins can override the
 * per-second credits via `fal_wan_reference_credits_per_second_{480p|720p|1080p}`.
 * Durations follow the upstream schema: whole seconds from 2 to 30.
 */
export const FAL_WAN_REFERENCE_VIDEO_MODEL = 'alibaba/wan-3.0/reference-to-video';
const FAL_WAN_REFERENCE_RATES: Record<string, number> = { '480p': 0.6, '720p': 1.2, '1080p': 2.4 };

export function getFalWanReferenceVideoCost(
  resolution: string | undefined,
  duration: number | string | undefined,
  configs?: Record<string, unknown>
): number {
  const r = ['480p', '720p', '1080p'].includes(resolution || '') ? resolution! : '720p';
  const d = Number(duration);
  if (!Number.isInteger(d) || d < 2 || d > 30) throw new Error('Unsupported video duration');
  const rateConfigured = Number(configs?.[`fal_wan_reference_credits_per_second_${r}`]);
  const unitPrice = Number.isFinite(rateConfigured) && rateConfigured > 0 ? rateConfigured : FAL_WAN_REFERENCE_RATES[r];
  return Math.max(1, Math.ceil(unitPrice * d));
}
