import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Vossi Bop Dance template family — the October 2026 TikTok trend that puts
 * new faces into Stormzy's dawn shot on Westminster Bridge from the 2019
 * "Vossi Bop" music video: empty bridge, pale morning sky, Big Ben on the
 * right, the camera circling while the subject does the Vossi Bop.
 * The dance itself is NL Vossi's, viral on Twitter in 2015.
 * Preview videos live at /templates/{id}.mp4; some cards carry a `credit`
 * handle for the TikTok account the clip was sourced from.
 * All templates share the `vossi_bop_dance` admin family.
 */
const family = 'vossi_bop_dance';

/** Example photo shown inside the upload slot (the subject of clip 01). */
const uploadHint = '/templates/vossibop-sample-photo.jpg';

/** Shared Westminster Bridge dawn scene: the bridge, Big Ben, the Vossi Bop. */
const scene =
  'A photorealistic vertical video at dawn on an empty Westminster Bridge in London: pale blue morning sky, the London Eye on the left, Big Ben and the Houses of Parliament on the right, no cars and no other people. The reference subject stands in the middle of the bridge and does the Vossi Bop — loose shoulders, hands rolling in front of the chest, a clap, a relaxed step to each side, all on the beat like Stormzy in the 2019 music video. The camera circles slowly around the subject. Preserve the reference subject\'s face, hair and outfit exactly. Keep the bridge, the landmarks, the dawn light, the circling camera and the dance from the reference video unchanged. Slight handheld phone-camera feel, one continuous take.';

export const vossiBopTemplates = [
  {
    id: 'vossibop-angry-ginge',
    family,
    name: ['Angry Ginge', '姜发主播版'],
    colors: ['#cbd5e1', '#1e293b'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a young man with bright ginger hair in a black zip jacket over a white tee, bopping mid-bridge with Big Ben behind him.`,
  },
  {
    id: 'vossibop-clarkson',
    family,
    name: ['TV Presenter', '主持人版'],
    credit: '@brucey1036',
    colors: ['#d9f99d', '#3f6212'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a tall grey-haired TV presenter in a casual shirt, doing the Vossi Bop with deadpan confidence.`,
  },
  {
    id: 'vossibop-inbetweeners',
    family,
    name: ['Schoolmates', '同学团版'],
    colors: ['#bae6fd', '#1d4ed8'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a British schoolmate in a plain outfit, doing an awkward, joyful Vossi Bop like a classroom dare.`,
  },
  {
    id: 'vossibop-simon-cowell',
    family,
    name: ['Talent Judge', '选秀评委版'],
    credit: '@brucey1036',
    colors: ['#fde68a', '#92400e'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a sharp-dressed talent-show judge in a dark shirt, bopping with a raised eyebrow and total seriousness.`,
  },
  {
    id: 'vossibop-hammond',
    family,
    name: ['Car Show Host', '车秀主持版'],
    colors: ['#fecaca', '#7f1d1d'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a small, energetic car-show host with curly hair, doing the Vossi Bop with oversized enthusiasm.`,
  },
  {
    id: 'vossibop-ant',
    family,
    name: ['Saturday Night TV', '周六夜 TV 版'],
    credit: '@stevey767',
    colors: ['#c7d2fe', '#3730a3'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a cheery Saturday-night TV presenter in a dark jacket, bopping like the live studio audience is watching.`,
  },
  {
    id: 'vossibop-benidorm',
    family,
    name: ['Benidorm Holiday', '度假剧版'],
    credit: '@viral.dance.trend0',
    colors: ['#fef08a', '#a16207'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a sunburnt holidaymaker from a British sitcom, doing the Vossi Bop like it is the hotel pool dance.`,
  },
  {
    id: 'vossibop-school-uniform',
    family,
    name: ['School Uniform', '校服版'],
    colors: ['#a7f3d0', '#065f46'],
    slots: 1,
    images: [null],
    uploadHint,
    prompt: `${scene} The reference subject is a student in a British school uniform, doing the Vossi Bop on the way to class.`,
  },
] as const satisfies readonly TemplateDef[];

export type VossiBopTemplate = (typeof vossiBopTemplates)[number];
