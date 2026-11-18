import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Give It All AI template family — the November 2026 BigXthaPlug
 * "From The Block" trend. The performance went up on the 4 Shooters Only
 * YouTube channel on 3 November 2026: one take at a hanging vintage chrome
 * microphone in a packed cinema lobby under orange showtime boards and red
 * neon. AI versions put anyone (or any pet) at the mic from one photo.
 * Preview videos live at /templates/{id}.mp4 — each template may carry a
 * `credit` handle shown as a small badge. All templates share the
 * `give_it_all_ai` admin family.
 */
const family = 'give_it_all_ai';

/** Shared Give It All scene: the lobby, the hanging mic, the crowd, the verse. */
const scene =
  "Recreate the viral 'Give It All AI' clip from the reference video: a packed cinema lobby at night under glowing orange and red lights, LED showtime boards overhead, red neon coves, and a vintage chrome microphone hanging from the ceiling on its cable at mouth height. The person from the uploaded photo stands at the hanging microphone with a packed crowd pressed in right behind them and raps the verse: arms crossed at the start, a turn to the side with one arm swung out over the crowd, a wide shot of the whole room clapping and waving, a close-up at the mic, arms swinging on the beat, and arms crossed again to finish. Preserve the person's face, hairstyle and outfit exactly from the photo. Keep the lobby, the hanging mic, the crowd, the lighting, the camera cuts and the timing from the reference video unchanged. Slight handheld phone-camera feel.";

export const giveItAllTemplates = [
  {
    id: 'give-it-all-ai-the-original',
    family,
    name: ['The Original', '原版场景复刻'],
    colors: ['#f59e0b', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is a young man in a dark jacket over a white tee, rapping straight into the lens with the whole lobby behind him.`,
  },
  {
    id: 'give-it-all-ai-white-tee',
    family,
    name: ['White Tee', '白 T 恤版'],
    credit: '@ela75857',
    colors: ['#e2e8f0', '#0f172a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is a young man in a plain white T-shirt with a chunky watch, reaching up to grip the mic and rapping every line to the crowd.`,
  },
  {
    id: 'give-it-all-ai-blonde-pink',
    family,
    name: ['Blonde in Pink', '金发粉衫版'],
    colors: ['#f9a8d4', '#500724'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is a blonde woman in a soft pink cardigan over a white top, rapping the verse with a big grin and one arm out to the crowd.`,
  },
  {
    id: 'give-it-all-ai-golden-cat',
    family,
    name: ['Golden Cat', '金毛猫版'],
    colors: ['#fbbf24', '#422006'],
    slots: 1,
    images: [null],
    prompt: `${scene} The performer at the mic is a golden cat with a tiny silver chain, one paw stretched up to the hanging microphone while the crowd cheers behind it. Keep the cat's own fur and markings from the photo.`,
  },
  {
    id: 'give-it-all-ai-leopard-jacket',
    family,
    name: ['Leopard Jacket', '豹纹外套版'],
    colors: ['#d97706', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is a man with braids and clear glasses, in a leopard-print shirt under a rust plaid jacket with gold chains, rapping every line like he owns the room.`,
  },
  {
    id: 'give-it-all-ai-maroon-jacket',
    family,
    name: ['Maroon Jacket', '酒红夹克版'],
    colors: ['#9f1239', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is a man in a maroon jacket, arms thrown wide on the beat while the whole lobby claps and films behind him.`,
  },
  {
    id: 'give-it-all-ai-real-performance',
    family,
    name: ['The Real Performance', '真实演出原片'],
    credit: '4 Shooters Only',
    colors: ['#22d3ee', '#0f172a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person at the mic is the person from the uploaded photo, taking the rapper's place at the hanging microphone while the original crowd stays exactly as filmed.`,
  },
] as const satisfies readonly TemplateDef[];

export type GiveItAllTemplate = (typeof giveItAllTemplates)[number];
