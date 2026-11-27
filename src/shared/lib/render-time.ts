/**
 * The one place that states how long a render takes.
 *
 * Before this file, three pages described the same wait three ways: the template
 * pages' stat strip said "60 s average", the wassup step list said "2-3 minutes",
 * and the same pages said "~60s" again in the how-to step. Nothing measured it.
 *
 * Measured 2026-11-27 against production `ai_task` (media_type = video,
 * status = success, span = updated_at - created_at, one 16-hour retry outlier
 * dropped, n = 156). These are MEDIANS, so half of the jobs took longer:
 *
 *   all jobs                    median 209 s (P25 139 s, P75 278 s)
 *   kling/v4/reference-to-video median 220 s - the default model for the Hotel
 *     Lobby and Wassup in a Minute families (n = 43):
 *       720p /  5 s  median 115 s (n = 6)
 *       720p / 15 s  median 226 s (n = 27)
 *       720p / 30 s  median 412 s (n = 5)
 *       1080p        median ~225 s (n = 2, weak sample)
 *
 * The span includes queueing but not the client's polling interval, so the floor
 * is real and the tail is long. Every string below therefore names the setting
 * it applies to and says "usually"/"参考", and none of them promises a finish
 * time: a median is a reference point, not an upper bound for every job. Do not
 * rewrite these into "finishes within X minutes", and do not drop the setting
 * from a sentence once the number has lost its context.
 */
export const RENDER_TIME = {
  /** Big number in the stat strip. */
  statValue: '2–7',
  statUnit: { en: 'min', zh: '分钟' },
  statLabel: {
    en: 'Reference time at 720p: about 2 min for 5s, 4 for 15s, 7 for 30s. 1080p or a busy queue takes longer.',
    zh: '720p 参考渲染时长：5 秒约 2 分钟、15 秒约 4 分钟、30 秒约 7 分钟；1080p 或排队时更久。',
  },
  /** Inline sentence, for how-to steps and guides. */
  range: {
    en: 'typically 2–7 minutes at 720p depending on clip length (about 2 minutes for 5 seconds, 4 for 15); longer at 1080p or in a busy queue',
    zh: '720p 下通常 2–7 分钟，取决于片长（5 秒约 2 分钟、15 秒约 4 分钟）；1080p 或排队时更久',
  },
  /** Wassup in a Minute is fixed at 15 seconds, so it can name its own number. */
  fifteenSecond: {
    en: 'typically about 4 minutes for the 15-second clip at 720p, longer at 1080p or in a busy queue',
    zh: '15 秒、720p 通常约 4 分钟；1080p 或排队时更久',
  },
  /** When a claim needs to stay vague on purpose. */
  fewMinutes: { en: 'a few minutes', zh: '几分钟' },
  /** In-progress hint in the generator, shown while a job is running. */
  hint: {
    en: 'Rendering at 720p usually takes 2–7 minutes depending on clip length; a busy queue can add a few minutes. Please keep this window open.',
    zh: '720p 下渲染通常 2–7 分钟，取决于片长；排队时可能更久。请保持窗口打开。',
  },
} as const;

/** `RENDER_TIME.x[renderLang(zh)]` reads better than repeating the ternary. */
export function renderLang(zh: boolean): 'en' | 'zh' {
  return zh ? 'zh' : 'en';
}
