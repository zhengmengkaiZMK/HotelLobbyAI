import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Cat Clapping template family — the September 2026 clapping-cat meme.
 * Two photos: a person and a cat. The cat sits up, claps its paws, then
 * brings one paw to its mouth. Preview videos live at /templates/{id}.mp4.
 * All templates share the `cat_clapping` admin family. Prompts describe the
 * beat and the room; they do not name a creator or a pet.
 */
const family = 'cat_clapping';

const prompt =
  'A vertical phone video looking down at a beige tiled floor indoors, with a soft stool in the background. The second reference photo is the cat. The cat sits upright, claps its front paws together, then brings one paw up to its mouth. The first reference photo is the person, only a leg and bare foot in the foreground. Preserve the cat\'s face, fur, and markings exactly, and keep the person\'s appearance. Daylight, slight phone-camera shake, vertical framing, not a cinematic advertisement. No text, no logos.';

export const catClappingTemplates = [
  {
    id: 'cat-orange',
    family,
    name: ['Orange Tabby', '橘猫鼓掌'],
    colors: ['#fdba74', '#9a3412'],
    slots: 2,
    images: [null, null],
    prompt,
  },
  {
    id: 'cat-tuxedo',
    family,
    name: ['Tuxedo Clap', '黑白猫鼓掌'],
    colors: ['#e5e7eb', '#111827'],
    slots: 2,
    images: [null, null],
    prompt,
  },
] as const satisfies readonly TemplateDef[];

export type CatClappingTemplate = (typeof catClappingTemplates)[number];
