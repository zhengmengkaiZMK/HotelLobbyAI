import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Ba Ba Ba Dance template family — the October 2026 TikTok duo-dance trend.
 * Two dancers stand side by side close to the camera, each takes a solo
 * stretch while the other hypes them up, and they finish the routine in sync
 * to the "Don't You Worry 'Bout a Thing" (Tori Kelly's Meena version from
 * Sing) remix with the ba-ba-ba hook. AI swaps the two dancers for the
 * uploaded photos; the room, the framing, the moves and the song stay.
 * Preview videos live at /templates/{id}.mp4 and are sourced from TikTok —
 * each template carries a `credit` handle shown as a small badge.
 * All templates share the `baba_dance` admin family.
 */
const family = 'baba_dance';

/** Shared ba ba ba dance scene: two dancers, solo turns, sync finish. */
const scene =
  "A photorealistic vertical video: two dancers stand side by side, close to the camera, performing the viral ba ba ba dance — first one dancer takes a solo stretch of the routine while the other waits, watches and hypes them up, then they trade, and they finish the routine together in perfect sync, stepping side to side and hitting the arm moves on the beat of the upbeat Latin-tinged pop remix with the ba-ba-ba hook. Preserve each reference subject's face and appearance exactly. Keep the room, the framing, the blocking, the camera moves and the song from the reference video unchanged. Handheld phone-camera feel, one continuous take, not cinematic.";

export const babaDanceTemplates = [
  {
    id: 'baba-original',
    family,
    name: ['Library Original', '图书馆原版'],
    credit: '@otr.j5',
    colors: ['#d9f99d', '#3f6212'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a school library with tall bookshelves and warm ceiling lights. The cast is two friends: the left dancer wears a grey hoodie with a beanie, and the right dancer wears a black track jacket with white headphones around the neck.`,
  },
  {
    id: 'baba-bella',
    family,
    name: ['Night Lot Duo', '夜间停车场版'],
    credit: '@be.llanelson',
    colors: ['#fbcfe8', '#831843'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a parking lot at night lit by streetlights with parked cars behind. The cast is two friends in going-out outfits: one in a black top with a long beaded necklace, the other in a white crop top and jeans.`,
  },
  {
    id: 'baba-cameron',
    family,
    name: ['Stairwell Tag', '楼梯轮舞版'],
    credit: '@thatss_cam3ron',
    colors: ['#bae6fd', '#0c4a6e'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a modern concrete stairwell with black railings. The cast is two friends in streetwear — one in an oversized dark tee over a white long-sleeve with camo cargo shorts, one in a grey hoodie and beanie — who trade solo stretches before dancing the finish together.`,
  },
  {
    id: 'baba-dad-daughter',
    family,
    name: ['Dad & Daughter', '爸爸和女儿版'],
    credit: '@solely.who',
    colors: ['#fde68a', '#92400e'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a warm family living room with a ceiling fan and the kitchen in the background. The cast is a father and his daughter: the daughter in a magenta tee leads the routine and the dad, in a blue shirt, jumps in for his turn.`,
  },
  {
    id: 'baba-jolie',
    family,
    name: ['Classroom Cadets', '教室学员版'],
    credit: '@joliepolyascko',
    colors: ['#bbf7d0', '#14532d'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a school classroom with rows of desks, backpacks and a green board behind. The cast is two students: one in a plain black tee, the other in a military-style cadet uniform.`,
  },
  {
    id: 'baba-nylaaa',
    family,
    name: ['Sibling Lesson', '姐弟教学版'],
    credit: '@nylaaa.camm1',
    colors: ['#e9d5ff', '#5b21b6'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The setting is a cozy wood-paneled hallway at home. The cast is an older sister in leopard-print pajamas teaching the routine to her younger brother, who takes his turn and lands the sync finish with her.`,
  },
] as const satisfies readonly TemplateDef[];

export type BabaDanceTemplate = (typeof babaDanceTemplates)[number];
