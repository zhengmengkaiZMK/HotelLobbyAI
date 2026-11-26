import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Aura Farming template family — the dragon-boat bow-clap format that rules
 * the "aura farming" trend: you stand at the very tip of a red racing dragon
 * boat, clapping and swaying while the crew in orange vests rows behind you,
 * and the clip ends with a profile view, arms swung wide over the water.
 * Example clip sourced from a viral race video. All templates share the
 * `aura_farming` admin family; the admin uploads one reference video that
 * drives the generator.
 */
const family = 'aura_farming';

/**
 * Shared Aura Farming scene: the red dragon boat, the rowers, the bow, the
 * clap. Written to be pasted into any photo-to-video model.
 */
const scene =
  'A photorealistic vertical video of a dragon boat race on wide calm water, one continuous take that opens wide on the race and pushes in toward the bow, no cuts. The reference subject stands at the very tip of a long red dragon boat with a golden dragon motif, clapping a steady rhythm in front of their chest and swaying side to side with total calm, knees bent, unbothered by the speed, while a whole crew in orange life vests and white caps rows hard behind them and the crowd blurs past on the shore. Near the end the subject turns side-on in profile and swings both arms out wide over the water. Preserve the reference subject\'s face, hairstyle and outfit exactly in every frame. Keep the red boat, the rowers, the shore crowd, the camera moves and the timing from the reference video unchanged. Slight phone-camera feel, one continuous take, not cinematic, no text or watermark.';

export const auraFarmingTemplates = [
  {
    id: 'aurafarming-boat',
    family,
    name: ['Dragon Boat Bow', '龙舟船头领拍版'],
    colors: ['#f97316', '#7c2d12'],
    slots: 1 as const,
    images: [null],
    uploadHint: '/templates/aurafarming-sample-photo.jpg',
    prompt: `${scene} The subject wears their own everyday clothes from the photo — the calm, unbothered bow leader of the race.`,
  },
] as const satisfies readonly TemplateDef[];

export type AuraFarmingTemplate = (typeof auraFarmingTemplates)[number];
