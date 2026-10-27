import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Wassup in a Minute template family — the October 2026 Atlanta Lock sway.
 * One photo becomes a full-body anime streetwear character on a pure white
 * background, swaying side to side on the jersey-club beat. Preview videos
 * live at /templates/{id}.mp4. All templates share the
 * `wassup_in_a_minute` admin family.
 */
const family = 'wassup_in_a_minute';

const SWAY =
  'Every uploaded person becomes a character in the same outfit, standing in a row on the white background like the original edit, and the characters sway one after another from left to right. Each character sways side to side on the beat, about two sways per second, rocking from the planted feet with the head and shoulders bobbing just behind the body, hands and clothes carrying small secondary motion. The white background stays completely still with the soft drop shadow moving with the figures. One continuous shot, no camera movement.';

export const wassupInAMinuteTemplates = [
  {
    id: 'wassup-money',
    family,
    name: ['Money Fan', '甩钱原版'],
    colors: ['#86efac', '#14532d'],
    slots: 4,
    images: [null, null, null, null],
    previewVideo: '/templates/wassup-money.mp4',
    credit: '@ristyisvalid',
    prompt:
      `A full-body anime character in a polished digital illustration style with clean linework and soft cel shading, drawn from the uploaded people as original characters (never an existing anime figure). Outfit: an oversized glossy olive puffer jacket worn open over a plain black T-shirt, a thin silver chain necklace, baggy burgundy jeans with a brown leather belt, and chunky white sneakers. Pose: a calm, cocky half smile, one hand fanning out a thick stack of plain green banknotes at chest height, the other hand holding the collar of the open jacket. Background: completely solid pure white with only a soft grey drop shadow behind the character. ${SWAY}`,
  },
  {
    id: 'wassup-puffer',
    family,
    name: ['Puffer Classic', '黑羽绒经典'],
    colors: ['#e5e5e5', '#171717'],
    slots: 4,
    images: [null, null, null, null],
    previewVideo: '/templates/wassup-money.mp4',
    prompt:
      `A full-body anime character in a polished digital illustration style with clean linework and soft cel shading, drawn from the uploaded people as original characters (never an existing anime figure). Outfit: a glossy black puffer jacket worn open over a plain white T-shirt, baggy black jeans, a black baseball cap worn straight, and black-and-white sneakers. Pose: hands resting at the waistband, chin slightly up, a relaxed confident expression. Background: completely solid pure white with only a soft grey drop shadow behind the character. ${SWAY}`,
  },
  {
    id: 'wassup-blackout',
    family,
    name: ['All Black', '全黑装'],
    colors: ['#a1a1aa', '#18181b'],
    slots: 4,
    images: [null, null, null, null],
    previewVideo: '/templates/wassup-money.mp4',
    credit: '@nova.friend',
    prompt:
      `A full-body anime character in a polished digital illustration style with clean linework and soft cel shading, drawn from the uploaded people as original characters (never an existing anime figure). Outfit: an all-black fit — black hoodie layered under an open black jacket, loose black cargo pants, a chunky silver chain, a wristwatch, and dark sneakers. Pose: one hand raised near the chin with two fingers up, a sly closed-mouth grin. Background: completely solid pure white with only a soft grey drop shadow behind the character. ${SWAY}`,
  },
  {
    id: 'wassup-jersey',
    family,
    name: ['Jersey Look', '球衣版'],
    colors: ['#93c5fd', '#1e3a8a'],
    slots: 4,
    images: [null, null, null, null],
    previewVideo: '/templates/wassup-money.mp4',
    credit: '@ristyisvalid',
    prompt:
      `A full-body anime character in a polished digital illustration style with clean linework and soft cel shading, drawn from the uploaded people as original characters (never an existing anime figure). Outfit: an oversized blue-and-green sports-style jersey with abstract white patterns and no readable letters or numbers, layered over a white long-sleeve shirt, with ripped grey jeans, a black glove on one hand, and white sneakers. Pose: one arm stretched toward the viewer pointing a smartphone, the other hand making a loose gesture, an intense focused stare. Background: completely solid pure white with only a soft grey drop shadow behind the character. ${SWAY}`,
  },
  {
    id: 'wassup-heavy',
    family,
    name: ['Heavyweight', '大块头'],
    colors: ['#d6d3d1', '#292524'],
    slots: 4,
    images: [null, null, null, null],
    previewVideo: '/templates/wassup-money.mp4',
    credit: '@2quan4',
    prompt:
      `A full-body anime character with a big heavyweight build in a polished digital illustration style with clean linework and soft cel shading, drawn from the uploaded people as original characters (never an existing anime figure), keeping a broad imposing silhouette. Outfit: a bulky black puffer jacket with a high collar, a baggy belted streetwear fit, a gold chain, and white sneakers. Pose: weight shifted onto one leg, arms loose at the sides, a slow confident stare straight ahead. Background: completely solid pure white with only a soft grey drop shadow behind the character. ${SWAY}`,
  },
] as const satisfies readonly TemplateDef[];

export type WassupInAMinuteTemplate = (typeof wassupInAMinuteTemplates)[number];
