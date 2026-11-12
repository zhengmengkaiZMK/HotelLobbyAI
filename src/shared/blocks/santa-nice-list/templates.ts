import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Santa Nice List template family — the Christmas 2025/2026 "quién se portó
 * bien" AI trend. Santa sits in his workshop, checks the Naughty & Nice List
 * (or holds a glass snow globe, or opens a golden gift box), gold sparkles
 * settle, and the big reveal is the uploaded photo inside the frame, globe or
 * gift box. Originated with Spanish-speaking CapCut creators (@memovich01's
 * snow-globe template, Nov 2025, 8.2M plays) and carried into 2026 by a new
 * workshop-scroll template. The reference format is unofficial fan-made
 * AI/CapCut material.
 * Preview videos live at /templates/{id}.mp4. All templates share the
 * `santa_nice_list` admin family and the multi-video slots
 * (viral_family_video_1..5_santa_nice_list). Clips are 9:16, ~10 seconds.
 */
const family = 'santa_nice_list';

/** Shared reveal structure: Santa + prop, sparkles, photo reveal. */
const scene =
  'A warm, cinematic vertical video inside Santa\'s workshop at the North Pole — elves at their benches, candles, garlands and toys on every shelf. Santa keeps his own face, outfit and voice; only the final picture takes the face, hair, skin tone, age and clothes from the uploaded reference photo. Keep the scene, the lighting, the sparkles, the camera moves, every cut, the timing and the sound of the reference clip exactly as they are. The reveal is the happy ending, so the photo appears sharp and clearly recognisable.';

export const santaNiceListTemplates = [
  {
    id: 'santa-nice-list-scroll',
    family,
    variantSlot: 1,
    name: ['Nice List Scroll', '乖巧名单卷轴'],
    colors: ['#fef2f2', '#7f1d1d'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa sits in a carved wooden chair and unrolls a long parchment scroll titled "The Naughty & Nice List" down to the floor, reads it, smiles and nods. He stands, opens his hands, and a spiral of gold sparkles sweeps across the screen; the sparkles settle into an ornate golden frame wrapped in pine and red bows, and inside the frame is the photo from the uploaded image.`,
  },
  {
    id: 'santa-nice-list-snow-globe-baby',
    family,
    variantSlot: 2,
    name: ['Baby Snow Globe', '宝宝雪球'],
    colors: ['#eff6ff', '#1e3a8a'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa holds up a large glass snow globe in his gloves and looks inside. The glass clouds over with swirling snow, then clears to reveal the baby photo from the uploaded image sitting inside the globe, snow gently falling around it as Santa smiles in wonder.`,
  },
  {
    id: 'santa-nice-list-gift-box-frame',
    family,
    variantSlot: 3,
    name: ['Gift Box Frame', '礼盒金相框'],
    colors: ['#fffbeb', '#92400e'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa kneels beside a large golden gift box under glowing bokeh lights, lifts the lid, and an ornate golden picture frame rises out of the box wrapped in gold sparkles. Inside the frame is the photo from the uploaded image; Santa holds it up to the camera and grins.`,
  },
  {
    id: 'santa-nice-list-fireplace-sisters',
    family,
    variantSlot: 4,
    name: ['Fireplace Sisters', '壁炉姐妹'],
    colors: ['#fef2f2', '#991b1b'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa crouches by a glowing fireplace holding a small glass globe. Inside the globe, the child from the uploaded photo appears together with the second child from the reference scene — two kids sharing the reveal, presents and garlands around them, as Santa looks on warmly.`,
  },
  {
    id: 'santa-nice-list-quien-se-porto-bien',
    family,
    variantSlot: 5,
    name: ['¿Quién Se Portó Bien?', '今年谁乖？'],
    colors: ['#f0fdf4', '#166534'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} A festive caption reads "¡QUIÉN SE PORTÓ BIEN ESTE AÑO!" above Santa as he holds up a glass snow globe by the stockings and garlands. The glass swirls with snow and clears to reveal the photo from the uploaded image inside the globe, and Santa laughs his warm "ho ho ho".`,
  },
  {
    id: 'santa-nice-list-living-room-globe',
    family,
    variantSlot: 6,
    name: ['Living Room Globe', '客厅雪球'],
    colors: ['#fefce8', '#713f12'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa walks into a cozy family living room carrying a large glass snow globe, past the decorated Christmas tree and warm lamp light. He raises the globe to the camera; the glass clouds and clears to reveal the photo from the uploaded image inside, with Santa leaning in to look.`,
  },
  {
    id: 'santa-nice-list-close-up-globe',
    family,
    variantSlot: 7,
    name: ['Close-Up Globe', '雪球特写'],
    colors: ['#f5f3ff', '#4c1d95'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} An extreme close-up fills the frame with Santa's face behind a glass snow globe he holds up to his eye. The glass clouds with swirling snow, then wipes clear in one smooth move to reveal the photo from the uploaded image inside the globe, reflected in Santa's delighted eyes.`,
  },
  {
    id: 'santa-nice-list-snow-globe-girl',
    family,
    variantSlot: 8,
    name: ['Girl Snow Globe', '女孩雪球'],
    colors: ['#fdf2f8', '#831843'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa holds the ornate base of a glass snow globe with both gloved hands, gentle snow drifting around him. The glass clears to reveal the photo from the uploaded image inside the globe, framed by miniature Christmas trees, as Santa tips the globe toward the camera and smiles.`,
  },
  {
    id: 'santa-nice-list-glowing-globe-boy',
    family,
    variantSlot: 9,
    name: ['Glowing Globe', '金光雪球'],
    colors: ['#fffbeb', '#b45309'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa cradles a glass snow globe that glows from within with warm golden light, snow swirling inside like a tiny storm. The glow settles and the photo from the uploaded image appears inside the globe, bathed in gold, as snow sparkles drift around Santa's beard.`,
  },
  {
    id: 'santa-nice-list-grown-up-frame',
    family,
    variantSlot: 10,
    name: ['Grown-Up Frame', '大人金相框'],
    colors: ['#f7fee7', '#3f6212'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} Santa sits by the fireplace holding a rolled parchment, then gestures and an ornate golden frame wrapped in pine branches and red bows appears beside him. Inside the frame is the adult photo from the uploaded image — even grown-ups make the Nice List — as Santa gives a proud nod.`,
  },
  {
    id: 'santa-nice-list-real-santa-call',
    family,
    variantSlot: 11,
    name: ['Real Santa Call', '真人圣诞老人'],
    colors: ['#e7e5e4', '#1c1917'],
    slots: 1 as const,
    images: [null],
    prompt: `${scene} A real-life Santa sits in his snowy living room with a big golden book, flips through the pages, finds the entry, looks into the camera and delivers a warm personalized greeting — the classic "real Santa reads the list" format this trend grew out of.`,
  },
] as const satisfies readonly TemplateDef[];

export type SantaNiceListTemplate = (typeof santaNiceListTemplates)[number];
