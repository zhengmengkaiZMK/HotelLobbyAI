import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Dance with Santa template family — the November 2026 "Bailando con Santa"
 * trend. AI puts one photo next to Santa Claus on the red carpet of a
 * wood-panelled Christmas hall, and the two dance the same routine:
 * bounce, hand behind the head, knee lift, hip shake, turn, big smiles.
 * Preview videos live at /templates/{id}.mp4 and are sourced from the
 * TikTok trend — each template carries a `credit` handle shown as a small
 * badge. Play counts are per ViralRemix's 15 November 2026 check.
 * All templates share the `dance_with_santa` admin family.
 */
const family = 'dance_with_santa';

/** Shared Dance with Santa scene: the hall, the red carpet, the routine. */
const scene =
  "Recreate the viral 'Dance with Santa' clip from the reference video: a cozy wood-panelled Christmas hall with a red carpet, two tall decorated Christmas trees, wrapped presents, warm fairy lights and blue arched windows. A classic Santa Claus — full white beard, red velvet suit with white fur trim, black belt and black boots — stands beside the person from the uploaded photo. Santa waves at the camera, then the two dance side by side in sync: a bounce, a hand behind the head, a knee lift, a hip shake, a full turn with their backs to the camera, and big smiles at the end. Preserve the person's face, hairstyle and outfit exactly from the photo, head to toe. Keep the hall, the red carpet, the lighting, the camera, the timing and the dance moves from the reference video unchanged. Slight handheld phone-camera feel, one continuous take.";

export const danceWithSantaTemplates = [
  {
    id: 'dance-with-santa-little-girl',
    family,
    name: ['Little Dancer', '小舞者织裙版'],
    credit: '@user8611429988322',
    colors: ['#f472b6', '#166534'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a small child in a colorful woven skirt and tee, copying every one of Santa's moves at half his height.`,
  },
  {
    id: 'dance-with-santa-burgundy-dress',
    family,
    name: ['Burgundy Satin', '勃艮第缎裙版'],
    credit: '@blancamendoza4245',
    colors: ['#fb7185', '#4c0519'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in an off-shoulder burgundy satin dress with a sash and heels, laughing through every move.`,
  },
  {
    id: 'dance-with-santa-black-tank',
    family,
    name: ['Black Tank Moves', '黑背心运动版'],
    credit: '@viridianahernadeznuye0',
    colors: ['#334155', '#0f172a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in a black tank top and black leggings with sneakers, keeping up with Santa bounce for bounce.`,
  },
  {
    id: 'dance-with-santa-cream-suit',
    family,
    name: ['Cream & Stripes', '米白条纹裤版'],
    credit: '@j3ssy502',
    colors: ['#fef3c7', '#78350f'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in a cream sleeveless top and striped trousers, dancing beside him with her hands on her hips between moves.`,
  },
  {
    id: 'dance-with-santa-embroidered',
    family,
    name: ['Embroidered & Shades', '刺绣墨镜版'],
    credit: '@cecy.lopez63',
    colors: ['#4ade80', '#14532d'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in an embroidered blouse, a woven skirt and dark shades, giving the routine a festive folk flair.`,
  },
  {
    id: 'dance-with-santa-mustard-sweater',
    family,
    name: ['Mustard Sweater', '芥末毛衣版'],
    credit: '@elida_314',
    colors: ['#fbbf24', '#78350f'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a young woman in a mustard sweater, a long scarf, dark jeans and knee-high boots, swaying beside Santa with a huge grin.`,
  },
  {
    id: 'dance-with-santa-patterned-dress',
    family,
    name: ['Patterned Dress', '碎花短裙版'],
    credit: '@soledadbella11',
    colors: ['#a78bfa', '#1e1b4b'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in a short patterned dress with a white shrug and tights, strutting the routine in heels.`,
  },
  {
    id: 'dance-with-santa-blue-gown',
    family,
    name: ['Blue Satin Gown', '蓝缎长裙版'],
    credit: '@www..com.dk6',
    colors: ['#60a5fa', '#172554'],
    slots: 1,
    images: [null],
    prompt: `${scene} The person next to Santa is a woman in a floor-length blue satin gown, dancing the whole routine in formal-wear.`,
  },
] as const satisfies readonly TemplateDef[];

export type DanceWithSantaTemplate = (typeof danceWithSantaTemplates)[number];
