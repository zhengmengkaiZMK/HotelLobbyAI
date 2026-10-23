import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Bby Wow template family — the October 2026 party-dance format.
 * One person (the user's photo) crosses a quinceañera-style party floor,
 * bites a sweet bread, stares into the lens while chewing, then dances
 * away. Preview videos live at /templates/{id}.mp4. All templates share
 * the `bby_wow` admin family.
 */
const family = 'bby_wow';

export const bbyWowTemplates = [
  {
    id: 'bbywow-suit',
    family,
    name: ['Suit Original', '西装原版'],
    colors: ['#f0abfc', '#701a75'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at a lively indoor party with saturated pink and magenta uplighting, banquet tables, chairs and dancing guests in the soft-focus background. The reference subject — long dark hair, a groomed beard, wearing a tailored black suit with a white shirt and black tie — steps into frame and walks toward the camera with a loose shoulder bounce, eats a small bite of food while staring straight into the lens and chewing with a completely deadpan expression, then turns and dances away into the party crowd. Preserve the reference subject\'s face and appearance exactly. Shaky phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
  {
    id: 'bbywow-white',
    family,
    name: ['White Tee', '白 T 派对版'],
    colors: ['#fecdd3', '#9f1239'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at a lively indoor quinceañera-style party, soft pink and purple uplighting, round tables with flower arrangements and stacked chairs behind, guests dancing in the background. The reference subject in an oversized white T-shirt and black pants walks toward the camera across the dance floor with a loose shoulder bounce, takes a big bite of a round sweet bread, chews while staring straight into the lens with a completely deadpan expression, then turns and dances away into the party. Preserve the reference subject\'s face and appearance exactly. Shaky phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
  {
    id: 'bbywow-staff',
    family,
    name: ['Staff Polo', '黑 Polo 版'],
    colors: ['#e7e5e4', '#18181b'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at a lively indoor quinceañera-style party, soft pink and purple uplighting, round tables with flower arrangements behind, guests dancing in the background. The reference subject in a dark staff-style polo shirt with a silver chain walks toward the camera across the dance floor with a confident shoulder bounce, takes a big bite of a round sweet bread, chews while staring straight into the lens with a completely deadpan expression, then turns and dances away into the party. Preserve the reference subject\'s face and appearance exactly. Shaky phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
] as const satisfies readonly TemplateDef[];

export type BbyWowTemplate = (typeof bbyWowTemplates)[number];
