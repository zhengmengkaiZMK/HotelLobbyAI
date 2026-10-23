import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Pedra do Sal template family — the October 2026 Rio street-party format.
 * One person (the user's photo) dances in the middle of a packed open-air
 * square at night: floodlit stone steps, market tents, a dense crowd dancing
 * around them, one handheld take. Preview videos live at /templates/{id}.mp4.
 * All templates share the `pedra_do_sal` admin family.
 */
const family = 'pedra_do_sal';

export const pedraDoSalTemplates = [
  {
    id: 'pedra-party',
    family,
    name: ['Night Party', '夜街派对版'],
    colors: ['#f9a8d4', '#9d174d'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night in a packed open-air stone square during a street party, market tents and a floodlit old building in the background, bright spotlights glowing above the crowd. In the center, the reference subject in a casual outfit with a backpack dances in place to the samba beat: relaxed shoulder sway, a loose two-step, occasionally glancing at the camera with a calm deadpan look while the dense crowd dances and films around them. Preserve the reference subject\'s face and appearance exactly. Shaky bystander phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
  {
    id: 'pedra-goth',
    family,
    name: ['Goth Look', '暗黑大衣版'],
    colors: ['#c7d2fe', '#1e1b4b'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night in a packed open-air stone square during a street party, market tents and a floodlit old building in the background, bright spotlights glowing above the crowd. In the center, the reference subject in a long black high-collared coat with long dark hair dances calmly in place to the beat: a slow shoulder sway, a poised two-step, staring into the camera with a serious unbothered expression while the dense crowd dances and films around them. Preserve the reference subject\'s face and appearance exactly. Shaky bystander phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
  {
    id: 'pedra-wizard',
    family,
    name: ['Wizard Elder', '巫师长老版'],
    colors: ['#e0e7ff', '#3730a3'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night in a packed open-air stone square during a street party, market tents and a floodlit old building in the background, bright spotlights glowing above the crowd. In the center, the reference subject as a silver-bearded elder in a flowing grey robe and a brimmed hat dances gently in place to the beat: a slow dignified sway, small steps, a calm knowing look at the camera while the dense crowd dances and films around them. Preserve the reference subject\'s face and appearance exactly. Shaky bystander phone-camera feel, slight noise, vertical framing, one continuous take, not cinematic.',
  },
] as const satisfies readonly TemplateDef[];

export type PedraTemplate = (typeof pedraDoSalTemplates)[number];
