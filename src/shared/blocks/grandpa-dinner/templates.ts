import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Grandpa Said He'd Handle Dinner template family — the November 2026
 * giant-fish-kitchen meme. AI places the uploaded person behind a kitchen
 * island chopping an enormous fish with an oversized cleaver: the kitchen,
 * the counter, the fish and the chopping routine stay, only the character
 * changes. Preview videos live at /templates/{id}.mp4.
 * All templates share the `grandpa_dinner` admin family.
 */
const family = 'grandpa_dinner';

/** Shared giant-fish dinner scene: the kitchen, the counter, the fish, the chops. */
const scene =
  'A photorealistic vertical video in a modern family kitchen at night. A single adult character stands behind a large kitchen island. An enormous shiny silver fish stretches across the countertop, far larger than an ordinary fish. The character wears their original outfit from the uploaded reference photo and keeps their recognizable facial appearance. They hold a large kitchen cleaver and perform an exaggerated but non-graphic fish-preparation routine with serious determination, swinging the cleaver high and bringing it down in steady, rhythmic chops, shuffling slightly along the counter between cuts. The scene feels absurdly dramatic while staying playful and comedic. Keep the kitchen layout, the lighting, the camera and the giant fish from the reference video unchanged. Preserve the character\'s face and appearance exactly. Slight handheld phone-camera feel, one continuous take, no blood, no gore, no additional people.';

export const grandpaDinnerTemplates = [
  {
    id: 'grandpa-classic',
    family,
    name: ['Classic Muscle Grandpa', '经典肌肉爷爷版'],
    colors: ['#fde68a', '#92400e'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a broad-shouldered older man with long gray hair and a thick gray mustache, wearing a black tank top, chopping with the confidence of someone who has done this his whole life.`,
  },
  {
    id: 'grandpa-shirtless',
    family,
    name: ['Full Swing', '赤膊上阵版'],
    colors: ['#fca5a5', '#7f1d1d'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a shirtless athletic young man who takes the dinner job extremely seriously, bringing the cleaver down in full, dramatic swings over the giant fish.`,
  },
  {
    id: 'grandpa-trading',
    family,
    name: ['Precise Entries', '精准入场版'],
    colors: ['#bbf7d0', '#166534'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is an athletic man in a white football jersey who treats every chop like a calculated trade — he measures the fish with his flat hand before each perfectly placed cut, like a trader waiting for precise entries.`,
  },
  {
    id: 'grandpa-jersey',
    family,
    name: ['Football Jersey', '球衣球星版'],
    colors: ['#e2e8f0', '#1e3a5f'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a man with long curly hair wearing a white football jersey, handling the giant fish like a post-match ritual.`,
  },
  {
    id: 'grandpa-tuxedo',
    family,
    name: ['Tuxedo Grandpa', '燕尾服爷爷版'],
    colors: ['#e5e7eb', '#111827'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a distinguished older gentleman with a white mustache in a formal black tailcoat tuxedo and crisp white gloves, preparing dinner like it is a black-tie ceremony.`,
  },
  {
    id: 'grandpa-white-suit',
    family,
    name: ['White Suit & Fedora', '白西装礼帽版'],
    colors: ['#fef3c7', '#78350f'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a silver-haired man in a crisp white suit and a fedora hat, chopping the giant fish with smooth, unhurried style.`,
  },
  {
    id: 'grandpa-kaftan',
    family,
    name: ['Kaftan Style', '长袍大厨版'],
    colors: ['#fef9c3', '#a16207'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a man in a long white kaftan robe and a soft cap, chopping the giant fish with calm, deliberate house-proud energy.`,
  },
  {
    id: 'grandpa-mickey',
    family,
    name: ['Mickey Puffs', '米奇爆炸头版'],
    colors: ['#fbcfe8', '#831843'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/grandpa-sample-photo.jpg',
    prompt: `${scene} The character is a man with two big round afro puffs styled like mouse ears, wearing a tan blazer, chopping the giant fish with playful, showman energy.`,
  },
] as const satisfies readonly TemplateDef[];

export type GrandpaDinnerTemplate = (typeof grandpaDinnerTemplates)[number];
