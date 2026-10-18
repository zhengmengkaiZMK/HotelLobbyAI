import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Bulin 47 template family — the October 2026 street-freestyle format.
 * One person (the user's photo) freestyles at a red-lit restaurant entrance
 * while a man holds a portable speaker and the crowd films. Preview videos
 * live at /templates/{id}.mp4. All templates share the `bulin_47` admin family.
 */
const family = 'bulin_47';

export const bulin47Templates = [
  {
    id: 'bulin-street',
    family,
    name: ['Street Freestyle', '街头原版'],
    colors: ['#fecaca', '#b91c1c'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night outside a restaurant entrance washed in red LED light, glass door glowing behind the crowd. In the center, the reference subject in a black T-shirt, silver chain and light jeans freestyles into a portable speaker: fist tapping the chest, pointing at the speaker, a sudden wide-eyed look to camera, then the crowd cheers. A man in the foreground holds the big speaker on his shoulder and films. Others around them film on their phones. Preserve the reference subject\'s face and appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
  {
    id: 'bulin-suit',
    family,
    name: ['Suit Edition', '西装版'],
    colors: ['#bfdbfe', '#1d4ed8'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night outside a restaurant entrance washed in red LED light. In the center, the reference subject in an olive military dress jacket, with shoulder boards and medal ribbons, freestyles with open-hand gestures toward a portable speaker, then looks into the camera. A man in the foreground holds the speaker and films. A small crowd behind films on their phones and reacts. Preserve the reference subject\'s face and appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
  {
    id: 'bulin-leopard',
    family,
    name: ['Leopard Print', '豹纹版'],
    colors: ['#fde68a', '#92400e'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night outside a restaurant entrance washed in red LED light. In the center, the reference subject in a leopard-print dress freestyles with sharp hand gestures toward a portable speaker, one arm lifting, then turns toward the crowd. A man in the foreground holds the big speaker and films. People around them film on their phones. Preserve the reference subject\'s face and appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
  {
    id: 'bulin-night',
    family,
    name: ['Night Crowd', '夜场人群版'],
    colors: ['#fda4af', '#9f1239'],
    slots: 1,
    images: [null, null],
    prompt:
      'A packed handheld phone video at night under heavy red light at a restaurant entrance. In the center, the reference subject in dark clothes freestyles in a tight circle of people, gesturing at a portable speaker while the crowd presses in and films. A man in the foreground holds the speaker up toward them. At the end several arms rise and the group cheers. Preserve the reference subject\'s face and appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
  {
    id: 'bulin-vest',
    family,
    name: ['Sharp Vest', '马甲绅士版'],
    colors: ['#e7e5e4', '#44403c'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night outside a red-lit restaurant entrance. In the center, the reference subject in a white shirt and dark vest freestyles with sharp, controlled hand gestures toward a portable speaker, then a surprised look to camera. A man in the foreground holds the speaker on his shoulder. Friends around them film on phones and lean in. Preserve the reference subject\'s face and appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
  {
    id: 'bulin-pet',
    family,
    name: ['Pet Freestyle', '宠物说唱版'],
    colors: ['#fde68a', '#d97706'],
    slots: 1,
    images: [null, null],
    prompt:
      'A handheld phone video at night outside a restaurant entrance washed in red LED light. In the center, the reference pet takes the freestyle spot — upright among the crowd, playful rhythmic movement, looking toward a portable speaker and then at the camera. A man in the foreground holds the big speaker on his shoulder and films. People around them film on their phones and cheer at the end. Preserve the reference pet\'s appearance exactly. Shaky close phone-camera feel, slight noise, vertical framing, not cinematic.',
  },
] as const satisfies readonly TemplateDef[];

export type BulinTemplate = (typeof bulin47Templates)[number];
