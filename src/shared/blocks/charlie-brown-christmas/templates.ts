import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * A Charlie Brown Christmas template family — the November 2026 redraw
 * trend. The AI takes one photo, sweeps a scan line over it, and redraws
 * the person as a 1965 Peanuts-style cartoon standing on Snoopy's red
 * doghouse in the snow, with the hand-lettered "A Charlie Brown Christmas"
 * title card on top. Preview videos live at /templates/{id}.mp4 and are
 * sourced from the TikTok trend. All templates share the
 * `charlie_brown_christmas` admin family. Not affiliated with Peanuts
 * Worldwide or the Charles M. Schulz estate.
 */
const family = 'charlie_brown_christmas';

/**
 * Shared redraw scene: the photo, the title, the scan line, the doghouse.
 * Based on the public prompt pattern of the trend (makeviral.ai and the
 * CapCut template "A Charlie Brown"): the person must stay recognizable —
 * same hair, glasses, beard, outfit — while everything else flattens into
 * 1965 cel style: flat colors, thick black outlines, dot eyes.
 */
const scene =
  "Recreate the viral 'A Charlie Brown Christmas' redraw from the reference video: the video opens on the real uploaded photo with a hand-lettered white 'A Charlie Brown Christmas' title across the top, then a bright scan line sweeps from head to feet, and behind the sweep the photo is redrawn as a flat 2D cartoon in the style of a 1965 hand-drawn animated holiday TV special: even black ink lines, flat solid colors with no shading, no gradients and no 3D. The character keeps everything that makes the person recognizable — exact hairstyle, hair length and color, any beard or moustache, glasses as simple bold frames, earrings, hat, skin tone, and the clothes with their colors and prints — but has a big round head, a simple cartoon face with two small black dot eyes, short-line eyebrows, a small curved smile, a short body with short arms and legs. The cartoon character then stands full-body on top of a red wooden doghouse seen straight from the front, its red sloped roof with dark plank lines and a little snow on the edges, a green wreath with a red bow on the front of the roof, snow falling around, facing the camera. Keep the scan-line move, timing, camera and sound from the reference video unchanged.";

export const charlieBrownTemplates = [
  {
    id: 'charlie-glasses',
    family,
    name: ['Glasses Redraw', '眼镜重绘版'],
    colors: ['#dc2626', '#14532d'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject wears their everyday glasses — the two dot eyes sit under the same bold glasses frames, which is the signature look of this trend.`,
  },
  {
    id: 'charlie-countdown',
    family,
    name: ['Countdown Classic', '圣诞倒数版'],
    colors: ['#bef264', '#166534'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject poses casually for the photo, ready to be captioned with the number of days left until Christmas.`,
  },
  {
    id: 'charlie-car',
    family,
    name: ['Car Cameo', '车内出镜版'],
    colors: ['#fca5a5', '#7f1d1d'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject is photographed inside a car in everyday clothes; the cartoon version keeps the same outfit as it lands on the red doghouse.`,
  },
  {
    id: 'charlie-elders',
    family,
    name: ['Family Elders', '全家长辈版'],
    colors: ['#fde68a', '#92400e'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject is an older family member; the redraw keeps their grey hair, glasses and cardigan as flat cartoon shapes on the doghouse roof.`,
  },
  {
    id: 'charlie-harry',
    family,
    name: ['Harry Look', '哈利造型版'],
    colors: ['#c4b5fd', '#3730a3'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject has round dark-framed glasses and messy hair; the redraw turns them into a round-headed wizard-school-style cartoon still standing on the red doghouse.`,
  },
  {
    id: 'charlie-title',
    family,
    name: ['Title Card', '手写标题版'],
    colors: ['#bae6fd', '#1e3a5f'],
    slots: 1,
    images: [null],
    prompt: `${scene} The white hand-lettered 'A Charlie Brown Christmas' title card stays clearly readable across the top of the frame through the whole scan.`,
  },
  {
    id: 'charlie-fresh',
    family,
    name: ['Fresh Redraw', '新鲜出炉版'],
    colors: ['#a7f3d0', '#065f46'],
    slots: 1,
    images: [null],
    prompt: `${scene} The single subject stands relaxed, full body in frame, so the cartoon has head-to-shoe detail on the doghouse roof.`,
  },
] as const satisfies readonly TemplateDef[];

export type CharlieBrownTemplate = (typeof charlieBrownTemplates)[number];
