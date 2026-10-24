import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Window Peeper template family — the October 2026 night-window format.
 * The camera pushes in from across the street on the one lit window of a
 * dark block: the reference subject eats a burger, freezes mid-chew, stares
 * straight into the lens, then stands and yanks the curtain shut.
 * Preview videos live at /templates/{id}.mp4 and are sourced from TikTok —
 * each template carries a `credit` handle shown as a small badge.
 * All templates share the `window_peeper` admin family.
 */
const family = 'window_peeper';

/** Shared six-beat scene, timed like the original clip. */
const scene =
  'A photorealistic vertical phone video filmed from across the street at night: a dark apartment block with one warm-lit window, the camera slowly pushing in toward it. Inside the lit window the reference subject sits at a small table by the glass with a red takeout box and a paper bag, eating a burger with both hands. Mid-chew the subject freezes and stares straight into the lens without blinking for a few seconds, then sets the burger down next to the red box, stands up, grabs the dark curtain and yanks it across the window with half the face still visible for a moment, until the curtain closes and only the lamp glows through. Preserve the reference subject\'s face and appearance exactly. Slight handheld phone-camera feel, vertical framing, one continuous take, not cinematic.';

export const windowPeeperTemplates = [
  {
    id: 'wp-hoodie',
    family,
    name: ['Hoodie Teen', '白卫衣少年版'],
    credit: '@isabellacapcut',
    colors: ['#bae6fd', '#1e3a8a'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject wears an oversized white-and-blue hoodie.`,
  },
  {
    id: 'wp-bean',
    family,
    name: ['Bean Look', '憨豆同款版'],
    credit: '@isabellacapcut',
    colors: ['#d6d3d1', '#44403c'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject wears a tweed suit with a white shirt and a thin dark-red tie.`,
  },
  {
    id: 'wp-jersey',
    family,
    name: ['Football Jersey', '球衣球星版'],
    credit: '@therealrodentspawn',
    colors: ['#fca5a5', '#991b1b'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject wears a red football jersey with white trim.`,
  },
  {
    id: 'wp-shades',
    family,
    name: ['Shades Dude', '墨镜大叔版'],
    credit: '@isabellacapcut',
    colors: ['#fed7aa', '#7c2d12'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject is a laid-back adult in a grey T-shirt with suspenders, dark sunglasses and a full beard.`,
  },
  {
    id: 'wp-redhead',
    family,
    name: ['Redhead', '红发夹克版'],
    credit: '@isabellacapcut',
    colors: ['#e2e8f0', '#334155'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject is a young person with bright red hair wearing a dark rain jacket.`,
  },
  {
    id: 'wp-snacks',
    family,
    name: ['Late-Night Snacks', '深夜快餐版'],
    credit: '@therealrodentspawn',
    colors: ['#fde68a', '#92400e'],
    slots: 1,
    images: [null, null],
    prompt: `${scene} The reference subject is a smiling adult in a brown jacket, with a fast-food paper bag on the table.`,
  },
] as const satisfies readonly TemplateDef[];

export type WindowPeeperTemplate = (typeof windowPeeperTemplates)[number];
