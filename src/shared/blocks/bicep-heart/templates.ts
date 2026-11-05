import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Bicep Heart template family — the late-October 2026 flex-and-heart
 * format. AI replays the bicep heart pose with the person (or pet) from
 * one photo: the shy smile, the sleeve push, the one-arm flex with the
 * fist by the head, and the other hand curled against the bicep so hand
 * and muscle close into one small heart. The pose holds to the end.
 * Preview videos live at /templates/{id}.mp4. The ex-* samples are
 * AI-generated from fictional adults / pets and carry no TikTok audio,
 * so no credit handle is required. All templates share the
 * `bicep_heart` admin family. One photo, 7-second export, 9:16.
 */
const family = 'bicep_heart';

/** Shared bicep heart scene: one person (or pet), one static take, one heart. */
const scene =
  "One continuous single take, static camera, vertical video. Recreate the reference video with the subject from the reference image: same face, hair, skin tone, body and clothes, in the same setting and framing as the reference image, waist-up. The subject gives the camera a soft smile, one hand crosses the chest and pushes up the other sleeve, then that arm bends up into a bicep flex with the fist closed beside the head, and the crossing hand rises and curls against the bicep — fingers hooking under the fist, thumb resting on the muscle — so the hand and the curve of the arm close into one small heart. The heart holds still to the end with a proud little smile and a slow blink. Preserve the subject's face and appearance exactly. Keep the shy-to-proud expression, the timing and the static selfie-style camera of the reference video unchanged.";

export const bicepHeartTemplates = [
  {
    id: 'bicep-buff',
    family,
    name: ['Gym Buff Heart', '健身猛男版'],
    colors: ['#2563eb', '#1e3a8a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a muscular gym-goer in a fitted T-shirt: the flexed bicep is pronounced, so the heart reads big and clear against the muscle.`,
  },
  {
    id: 'bicep-normal',
    family,
    name: ['Everyday Heart', '日常小心心版'],
    colors: ['#86efac', '#15803d'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is an everyday person in a casual T-shirt: a regular arm makes the same readable heart — the joke is that no gym membership is required.`,
  },
  {
    id: 'bicep-cat',
    family,
    name: ['Cat Bicep Heart', '猫咪比心版'],
    colors: ['#fda4af', '#be123c'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a cat: one front leg bends up like a tiny flex while a paw curls against it, so paw and leg close into one small heart. Preserve the cat's fur colors and markings exactly; keep the room from the reference image.`,
  },
  {
    id: 'bicep-dog',
    family,
    name: ['Dog Bicep Heart', '狗狗比心版'],
    colors: ['#fcd34d', '#b45309'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a dog: one front leg bends up like a tiny flex while a paw curls against it, so paw and leg close into one small heart. Preserve the dog's fur colors and markings exactly; keep the room from the reference image.`,
  },
  {
    id: 'bicep-original',
    family,
    name: ['Original Trend', '原梗复刻版'],
    colors: ['#a5b4fc', '#4338ca'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject follows the original trend framing: a shy closed-mouth smile at the start, the sleeve push, the flex landing on the beat, the heart landing on the next, and the held reveal into the lens.`,
  },
] as const satisfies readonly TemplateDef[];

export type BicepHeartTemplate = (typeof bicepHeartTemplates)[number];
