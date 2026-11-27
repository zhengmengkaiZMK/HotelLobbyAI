/**
 * The one place that states how long a render takes.
 *
 * Before this file, three pages described the same wait three ways: the template
 * pages' stat strip said "60 s average", the wassup step list said "2–3 minutes",
 * and the same pages said "~60s" again in the how-to step. Nothing measured it.
 *
 * Measured 2026-11-27 against production `ai_task` (media_type = video,
 * status = success, span = updated_at − created_at, one 16-hour retry outlier
 * dropped, n = 156):
 *
 *   all jobs                    median 209 s (P25 139 s, P75 278 s)
 *   kling/v4/reference-to-video median 220 s — the default model for the Hotel
 *     Lobby and Wassup in a Minute families (n = 43):
 *       720p /  5 s  median 115 s (n = 6)
 *       720p / 15 s  median 226 s (n = 27)
 *       720p / 30 s  median 412 s (n = 5)
 *       1080p        median ~225 s (n = 2, weak sample)
 *
 * The span includes queueing but not the client's polling interval, so treat
 * these as a floor. Render time clearly tracks clip length, so the copy states
 * the range and names the length it applies to instead of one flat number. Do
 * not turn these into a guarantee ("finishes within X minutes").
 */
export const RENDER_TIME = {
  /** Big number in the stat strip. */
  statValue: '2–7',
  statUnit: { en: 'min', zh: '分钟' },
  statLabel: {
    en: 'Render time at 720p: about 2 min for 5s, 4 min for 15s, 7 min for 30s',
    zh: '渲染时长（720p）：5 秒约 2 分钟，15 秒约 4 分钟，30 秒约 7 分钟',
  },
  /** Inline sentence, for how-to steps and guides. */
  range: {
    en: 'usually 2–7 minutes at 720p depending on clip length (about 2 minutes for 5 seconds, 4 for 15)',
    zh: '通常 2–7 分钟（720p），取决于片长（5 秒约 2 分钟，15 秒约 4 分钟）',
  },
  /** Wassup in a Minute is fixed at 15 seconds, so it can name its own number. */
  fifteenSecond: {
    en: 'about 4 minutes for the 15-second clip at 720p',
    zh: '15 秒、720p 的片子约 4 分钟',
  },
  /** When a claim needs to stay vague on purpose. */
  fewMinutes: { en: 'a few minutes', zh: '几分钟' },
  /** In-progress hint in the generator, shown while a job is running. */
  hint: {
    en: 'Rendering usually takes 2–7 minutes at 720p, depending on clip length. Please keep this window open and wait patiently.',
    zh: '渲染通常需要 2–7 分钟（720p），取决于片长。请耐心等待，不要关闭当前窗口。',
  },
} as const;

/** `RENDER_TIME.x[renderLang(zh)]` reads better than repeating the ternary. */
export function renderLang(zh: boolean): 'en' | 'zh' {
  return zh ? 'zh' : 'en';
}
