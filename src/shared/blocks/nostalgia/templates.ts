import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * NostalgIA CapCut template family — the late-October 2026 retro-TV-ad trend.
 * One photo puts you inside a recreated 2000s-style chocolate-bar TV spot:
 * letterboxed SD picture, a suburban backyard set, a bite, a grin at the
 * camera, and the red outlined jingle text. Preview videos live at
 * /templates/{id}.mp4. All templates share the `nostalgia_capcut` admin
 * family. Built-in prompts are fallbacks only — the admin setting
 * `viral_family_prompt_nostalgia_capcut` overrides them.
 */
const family = 'nostalgia_capcut';

const SCENE =
  'Scene: a low-resolution 2000s television commercial look — slightly soft interlaced picture, mild analog noise, muted warm color grading, the frame letterboxed with black bars top and bottom inside the vertical video. Setting: a sunny suburban backyard with a fence, green bushes, and a family house in the background, like a classic candy-bar TV ad. The uploaded person is the ad star, filmed from the waist up: first they raise a chocolate crisp bar with a blue-and-red wrapper (no readable brand logos) and take one confident bite, then they look straight into the camera and talk with an exaggerated delighted TV-ad smile while the bar rests toward the lens. Bright red bubbly outlined text flashes across the lower third in the style of an old jingle card, and a small red REC-style dot with a fake timestamp blinks in one corner. Warm afternoon light, handheld TV-camera framing, one continuous shot, no camera movement. Keep the exact face, hairstyle and skin tone of the uploaded photo; a fictional parody of a retro commercial, never an existing brand ad.';

export const nostalgiaTemplates = [
  {
    id: 'nostalgia-classic',
    family,
    name: ['Classic Sweetheart', '经典女主版'],
    colors: ['#fde68a', '#92400e'],
    slots: 1,
    images: [null],
    previewVideo: '/templates/nostalgia-classic.mp4',
    prompt: `A young TV-ad star with a warm girl-next-door look, casual 2000s outfit (a simple zip jacket over a T-shirt), straight clean hair. ${SCENE}`,
  },
  {
    id: 'nostalgia-blond',
    family,
    name: ['Blonde Bob', '金发波波版'],
    colors: ['#fef3c7', '#78350f'],
    slots: 1,
    images: [null],
    previewVideo: '/templates/nostalgia-blond.mp4',
    prompt: `A cheerful TV-ad star with a neat blonde bob haircut and round glasses, wearing a lilac retro jacket over a patterned blouse — the charming "neighborhood mom" character of an old candy-bar commercial. ${SCENE}`,
  },
  {
    id: 'nostalgia-longhair',
    family,
    name: ['Long Hair', '长发少年版'],
    colors: ['#e7e5e4', '#44403c'],
    slots: 1,
    images: [null],
    previewVideo: '/templates/nostalgia-longhair.mp4',
    prompt: `A laid-back TV-ad star with long straight hair falling past the shoulders, wearing a plain dark T-shirt — the effortlessly cool older-brother character of an old candy-bar commercial. ${SCENE}`,
  },
  {
    id: 'nostalgia-butterfly',
    family,
    name: ['Butterfly Necklace', '蝴蝶项链版'],
    colors: ['#fbcfe8', '#9d174d'],
    slots: 1,
    images: [null],
    previewVideo: '/templates/nostalgia-butterfly.mp4',
    prompt: `A playful TV-ad star with dark hair and a tiny butterfly necklace, wearing a simple black camisole — the bright Y2K-girl-next-door character of an old candy-bar commercial. ${SCENE}`,
  },
  {
    id: 'nostalgia-star85',
    family,
    name: ["Star '85", '星条 85 版'],
    colors: ['#fef9c3', '#713f12'],
    slots: 1,
    images: [null],
    previewVideo: '/templates/nostalgia-star85.mp4',
    prompt: `A sun-kissed TV-ad star with hair tied up loosely, wearing a black strapless tank printed with a white star and the number 85 — the sporty summer-camp character of an old candy-bar commercial. ${SCENE}`,
  },
] as const satisfies readonly TemplateDef[];

export type NostalgiaTemplate = (typeof nostalgiaTemplates)[number];
