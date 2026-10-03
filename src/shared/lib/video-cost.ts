export const VIDEO_COST_DEFAULTS = {
  '480p:8': 6,
  '480p:12': 10,
  '480p:15': 12,
  '720p:8': 8,
  '720p:12': 12,
  '720p:15': 15,
  '1080p:8': 12,
  '1080p:12': 15,
  '1080p:15': 18,
} as const;

export type VideoResolution = '480p' | '720p' | '1080p';
export type VideoDuration = 8 | 12 | 15;

export function getVideoGenerationCost(
  resolution: string | undefined,
  duration: number | string | undefined,
  configs?: Record<string, unknown>
): number {
  const r = resolution === undefined ? '720p' : resolution;
  if (!['480p', '720p', '1080p'].includes(r)) throw new Error('Unsupported video resolution');
  const d = duration === undefined ? 8 : Number(duration);
  if (d !== 8 && d !== 12 && d !== 15) throw new Error('Unsupported video duration');
  const key = `${r}:${d}` as keyof typeof VIDEO_COST_DEFAULTS;
  const configured = Number(configs?.[`video_cost_${r}_${d}`]);
  return Number.isSafeInteger(configured) && configured > 0 ? configured : VIDEO_COST_DEFAULTS[key];
}

export function getVideoCostTable(configs?: Record<string, unknown>) {
  return (['480p', '720p', '1080p'] as const).map((resolution) => ({
    resolution,
    costs: ([8, 12, 15] as const).map((duration) => ({ duration, credits: getVideoGenerationCost(resolution, duration, configs) })),
  }));
}
