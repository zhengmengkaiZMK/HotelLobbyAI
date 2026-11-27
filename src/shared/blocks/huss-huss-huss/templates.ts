import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Huss Huss Huss template family — the "in this town everybody goes out
 * partying except me" TikTok wave. Two friends stand side by side in a living
 * room, groove side to side to the funk remix, wave, turn their backs to the
 * camera in sync, spin back, and on the final "huss, huss, huss" beat run in
 * place with their fists pumping like sprinters. The sample clip follows the
 * two-person dance format that took over the trend after 17 November 2026, so
 * the template takes one photo per dancer. Example clip sourced from the
 * TikTok trend. All templates share the `huss_huss_huss` admin family; the
 * admin uploads one reference video that drives the generator.
 */
const family = 'huss_huss_huss';

/**
 * Shared Huss Huss Huss scene: the living room, the side-to-side groove, the
 * synced turn, the sprinter finish. Written to be pasted into any
 * photo-to-video model. Slot 1 = the dancer who ends on the left of frame,
 * slot 2 = the dancer who ends on the right.
 */
const scene =
  'A photorealistic vertical video of two people dancing side by side in a cozy carpeted living room, one continuous static shot facing them, no cuts. The two reference subjects stand shoulder to shoulder facing the camera — the subject from the first photo on the left, the subject from the second photo on the right — both in their own everyday clothes. They groove side to side on the beat, wave one hand toward the camera, then turn around together to face away from the camera while still dancing, spin back to face the lens, and on the final huss huss huss beat they run in place pumping their fists like sprinters, laughing. Both dancers move in sync with the rhythm of the reference video. Preserve both reference subjects\' faces, hairstyles and outfits exactly in every frame. Keep the living room, the choreography, the timing and the camera framing from the reference video unchanged. Slight phone-camera feel, not cinematic, no text or watermark.';

export const hussHussHussTemplates = [
  {
    id: 'husshuss-duo',
    family,
    name: ['Two-Dancer Grind', '双人合拍版'],
    colors: ['#4ade80', '#14532d'],
    slots: 2 as const,
    images: [null, null],
    uploadHints: [
      '/templates/husshuss-demo-photo-dancer1.jpg',
      '/templates/husshuss-demo-photo-dancer2.jpg',
    ],
    prompt: `${scene} Each dancer wears their own everyday outfit from their photo — the two friends who stayed home to grind while the town went out partying.`,
  },
] as const satisfies readonly TemplateDef[];

export type HussHussHussTemplate = (typeof hussHussHussTemplates)[number];
