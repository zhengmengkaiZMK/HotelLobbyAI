import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Hand of God template family — the late-November 2026 "God literally picked
 * me up" TikTok trend. AI drops the uploaded person onto a sunny seaside
 * promenade: two enormous glowing golden hands of light take their hands, a
 * burst of white light turns their clothes into flowing white, and the hands
 * lift them high above the turquoise sea. Example clip sourced from TikTok —
 * the `credit` handle is shown as a badge. All templates share the
 * `hand_of_god` admin family; the admin uploads one reference video that
 * drives the generator.
 */
const family = 'hand_of_god';

/**
 * Shared Hand of God scene: the promenade, the palms, the golden hands, the
 * flash, the lift. Written to be pasted into any photo-to-video model.
 */
const scene =
  'A photorealistic vertical video on a sunny seaside promenade with palm trees, a white sand beach and turquoise sea behind, one continuous rising take, no cuts. The reference subject stands in their own clothes looking up as two enormous glowing golden hands of warm light reach down from the sunlit clouds and gently take their hands. A bright burst of white light flashes at their chest; when it fades their clothes have turned into long, flowing white garments and they already float. The hands lift the subject high above the coast — the palm trees, the beach and the hotel towers drop away below while they look up, open-mouthed, then laugh, held safely between the golden hands. Preserve the reference subject\'s face, hairstyle and appearance exactly in every frame. Keep the promenade, the golden hands, the light flash, the rising speed and the camera move from the reference video unchanged. Slight phone-camera feel, not cinematic, no text or watermark.';

export const handOfGodTemplates = [
  {
    id: 'handofgod-golden',
    family,
    name: ['Golden Hands Lift', '金色巨手牵起飞'],
    credit: '@lunita35787',
    colors: ['#fcd34d', '#92400e'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/handofgod-sample-photo.jpg',
    prompt: `${scene} The subject wears their own everyday outfit at the start; from the light flash on they wear simple, long, flowing white clothes.`,
  },
] as const satisfies readonly TemplateDef[];

export type HandOfGodTemplate = (typeof handOfGodTemplates)[number];
