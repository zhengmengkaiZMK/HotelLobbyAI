import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Never Let Her Pay template family — the November 2026 restaurant skit.
 * A man on a date stops his partner from tapping her card, pulls a kitchen
 * sponge out of his wallet, and the waiter walks him to the kitchen to wash
 * the dishes instead. The scene, waiter and kitchen stay shot for shot;
 * only the man at the table changes.
 * Preview videos live at /templates/{id}.mp4 and are sourced from TikTok —
 * each template carries a `credit` handle shown as a small badge.
 * All templates share the `never_let_her_pay` admin family.
 * Photos: slot 1 is the diner who pays (the star), slot 2 is the waiter.
 */
const family = 'never_let_her_pay';

/** Shared restaurant scene: the table, the card machine, the sponge, the kitchen. */
const scene =
  "A photorealistic vertical video inside a warm, dimly lit upscale restaurant: round marble table, small shared plates and tall glasses, brass pendant lights overhead. A waiter in a dark apron stands beside the table holding a card payment terminal. The diner in reference image 1 sits at the table with his date; when she leans in to tap her card he gently stops her hand, unzips his small black bag and, in close-up, pulls out a yellow-and-green kitchen sponge, then gives the waiter a calm, confident nod. The waiter, whose face and appearance come from reference image 2, puts an arm around his shoulder and walks him into the restaurant kitchen, where he rolls up his sleeves and faces a counter of stacked dirty plates. Preserve each reference subject's face and appearance exactly. Keep the restaurant, the waiter's movements, the camera cuts and the pacing from the reference video unchanged. Slight handheld phone-camera feel, quick cuts, not cinematic.";

export const neverLetHerPayTemplates = [
  {
    id: 'never-let-her-pay-original',
    family,
    name: ['Original — I Got This', '原版「我来付」'],
    credit: '@georgethegem',
    colors: ['#f5f0e6', '#1c1917'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a white blazer over a bare chest with a cross necklace and has a groomed beard.`,
  },
  {
    id: 'never-let-her-pay-mushroom-hair',
    family,
    name: ['Mushroom Cut', '蘑菇头版'],
    credit: '@boby.biggsjohnson',
    colors: ['#e7e5e4', '#0c0a09'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner has a neat black bowl-cut hairstyle and wears a cream blazer over a blue shirt with red trousers.`,
  },
  {
    id: 'never-let-her-pay-white-tux',
    family,
    name: ['White Tux', '白色礼服版'],
    credit: '@s.nemz',
    colors: ['#fafaf9', '#27272a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a crisp white tuxedo jacket with a black bow tie.`,
  },
  {
    id: 'never-let-her-pay-black-tux',
    family,
    name: ['Black Tux & Bow Tie', '黑色礼服领结版'],
    credit: '@eduardtok',
    colors: ['#e4e4e7', '#18181b'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a dark tuxedo with a bow tie and a wristwatch.`,
  },
  {
    id: 'never-let-her-pay-pink-suit',
    family,
    name: ['Pink Suit', '粉色西装版'],
    credit: '@barbieboytv',
    colors: ['#fbcfe8', '#831843'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a bright pink suit with matching pink hair and carries a pink bag.`,
  },
  {
    id: 'never-let-her-pay-tracksuit',
    family,
    name: ['Tracksuit', '运动服版'],
    credit: '@tayoricci',
    colors: ['#d6d3d1', '#1c1917'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a dark zip-up tracksuit top.`,
  },
  {
    id: 'never-let-her-pay-streetwear',
    family,
    name: ['Streetwear', '街头潮服版'],
    credit: '@kingdripppp',
    colors: ['#fef3c7', '#78350f'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a colorful graphic tee with chains.`,
  },
  {
    id: 'never-let-her-pay-black-suit',
    family,
    name: ['Black Suit', '黑西装版'],
    credit: '@lord_dermott',
    colors: ['#e7e5e4', '#0c0a09'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a tailored black suit with a white pocket square.`,
  },
  {
    id: 'never-let-her-pay-propeller-hat',
    family,
    name: ['Propeller Hat', '螺旋桨帽版'],
    credit: '@unclegrandpairl',
    colors: ['#fef08a', '#7c2d12'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The diner wears a rainbow-striped shirt and a beanie with a spinning propeller on top, with a full beard.`,
  },
] as const satisfies readonly TemplateDef[];

export type NeverLetHerPayTemplate = (typeof neverLetHerPayTemplates)[number];
