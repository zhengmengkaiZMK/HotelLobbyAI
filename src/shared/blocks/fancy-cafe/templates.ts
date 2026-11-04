import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Your First Time in a Fancy Cafe template family — the November 2026
 * minimalist-cafe trend. A man perches on a tiny round metal table in a
 * bare concrete cafe, sipping coffee as if the table were a stool, until
 * a woman walks in, sits on the ledge and puts her cup on that table —
 * and he quietly climbs down. The AI swaps new faces into the same scene;
 * the room, the timing and the sound stay. Preview videos live at
 * /templates/{id}.mp4 and are sourced from the TikTok trend — each
 * template carries a `credit` handle shown as a small badge. All
 * templates share the `fancy_cafe` admin family.
 */
const family = 'fancy_cafe';

/**
 * Shared cafe scene. Two photos: photo 1 is the person who sits on the
 * table, photo 2 is the one who walks in and shows how it is done.
 * The joke lives in the legs — knees up on the table, then the
 * climb-down — so full-body photos matter.
 */
const scene =
  "Recreate the viral 'POV: your first time in a fancy cafe' scene from the reference video: a fixed-camera vertical shot inside a bare minimalist concrete cafe — grey concrete walls, floor and ledges, small round steel side tables on single poles, no decor. Photo 1's subject is perched on one of the tiny round metal tables as if it were a stool, knees up, holding a coffee cup, looking completely relaxed and at home. A woman in a black suit walks in, sits down on the concrete ledge beside the table, and calmly places her coffee cup on top of the table the subject is sitting on. After a beat, the subject realizes the table is a table, and quietly climbs down to sit properly on the ledge. Preserve each reference subject's face and appearance exactly. Keep the cafe, the camera, the timing and the original sound from the reference video unchanged. Slight handheld phone-camera feel, one continuous take, not cinematic.";

export const fancyCafeTemplates = [
  {
    id: 'fancycafe-original',
    family,
    name: ['Original Table Sitter', '原版坐桌'],
    credit: '@leehoustonx',
    colors: ['#a8a29e', '#1c1917'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person on the table wears all black and sits perched with total confidence, and the woman who walks in wears a black suit with a slit dress.`,
  },
  {
    id: 'fancycafe-cream-suit',
    family,
    name: ['Cream Suit', '奶油西装版'],
    credit: '@boby.biggsjohnson',
    colors: ['#fde68a', '#78350f'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person on the table wears a sharp cream-colored suit and sits perched like they own the place — the overdressed look makes the mistake land harder.`,
  },
  {
    id: 'fancycafe-korean-couple',
    family,
    name: ['Korean Couple', '韩国情侣版'],
    credit: '@kkubi99',
    colors: ['#bfdbfe', '#1e3a8a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person on the table is a student in a casual campus outfit, and the woman who walks in is their friend dressed for class — the couple-cast version of the trend.`,
  },
  {
    id: 'fancycafe-spanish-pov',
    family,
    name: ['Spanish POV', '西语 POV 版'],
    credit: '@ceciarmy',
    colors: ['#fecaca', '#7f1d1d'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is dressed smart-casual, the version that circulates in Spanish-language feeds as "tu primera vez en una cafetería elegante".`,
  },
  {
    id: 'fancycafe-green',
    family,
    name: ['Green Trousers', '绿裤版'],
    credit: '@p3ter.grizzle',
    colors: ['#bbf7d0', '#14532d'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The person on the table wears eye-catching green trousers and a tucked shirt — the loudest outfit in the cafe, which makes the climb-down even funnier.`,
  },
  {
    id: 'fancycafe-pet',
    family,
    name: ['Dog on the Table', '狗狗坐桌版'],
    credit: '@bella_thepyrenees',
    colors: ['#fef3c7', '#92400e'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The one perched on the tiny table is a big fluffy dog sitting up with its paws forward, given its own coffee cup; the person who walks in reacts the same way. Keep the dog's fur, markings and size exactly.`,
  },
] as const satisfies readonly TemplateDef[];

export type FancyCafeTemplate = (typeof fancyCafeTemplates)[number];
