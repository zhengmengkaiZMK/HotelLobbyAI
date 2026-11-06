import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Bicep Heart template family — the late-October 2026 flex-and-heart
 * format. AI replays the bicep heart pose with the person (or pet) from
 * one photo: the shy smile, the sleeve push, the one-arm flex with the
 * fist by the head, and the other hand curled against the bicep so hand
 * and muscle close into one small heart. The pose holds to the end.
 * Preview videos live at /templates/{id}.mp4. The ex-* samples are
 * AI-generated from fictional adults / pets and carry no TikTok audio,
 * so no credit handle is required. The four replay cards at the top
 * (have-you-heard / trend-boy / tattoo-girl / tank-boy) are preview
 * clips sourced from public TikTok posts and carry a `credit` handle.
 * All templates share the
 * `bicep_heart` admin family. One photo, 7-second export, 9:16.
 */
const family = 'bicep_heart';

/** Shared bicep heart scene: one person (or pet), one static take, one heart. */
const scene =
  "One continuous single take, static camera, vertical video. Recreate the reference video with the subject from the reference image: same face, hair, skin tone, body and clothes, in the same setting and framing as the reference image, waist-up. The subject gives the camera a soft smile, one hand crosses the chest and pushes up the other sleeve, then that arm bends up into a bicep flex with the fist closed beside the head, and the crossing hand rises and curls against the bicep — fingers hooking under the fist, thumb resting on the muscle — so the hand and the curve of the arm close into one small heart. The heart holds still to the end with a proud little smile and a slow blink. Preserve the subject's face and appearance exactly. Keep the shy-to-proud expression, the timing and the static selfie-style camera of the reference video unchanged.";

export const bicepHeartTemplates = [
  {
    id: 'bicep-have-you-heard',
    family,
    name: ['Have You Heard Heart', '「听说过吗」开场版'],
    bestFor: ['Best for: anyone — the dim-room opener that started the wave; works with any waist-up photo.', '适用：任何人——带火这波趋势的昏暗房间开场版，任意半身照都能用。'],
    colors: ['#0ea5e9', '#0c4a6e'],
    slots: 1,
    credit: '@kavithageorge',
    images: [null],
    prompt: `${scene} The subject is a fit young woman with an athletic build in a dark sleeveless top, filmed in a dim teal-toned room, opening on a soft knowing smile before the sleeve push and the flex — the classic have-you-ever-heard-of-a-bicep-heart opener.`,
  },
  {
    id: 'bicep-trend-boy',
    family,
    name: ['Trend Boy Heart', '门口 trend 男生版'],
    bestFor: ['Best for: casual everyday photos; recreates the white-doorway street take.', '适用：日常休闲照片，复刻白门口街拍版本。'],
    colors: ['#94a3b8', '#334155'],
    slots: 1,
    credit: '@in_the_nic_of_time',
    images: [null],
    prompt: `${scene} The subject is a young man in a gray tank top standing in front of a white interior door, grinning through the sleeve push and landing the flex-and-heart on the beat like the door doorway trend clips.`,
  },
  {
    id: 'bicep-tattoo-girl',
    family,
    name: ['Tattoo Girl Heart', '纹身女生版'],
    bestFor: ['Best for: portraits with visible tattoos or bold personal style; the cozy bedroom take.', '适用：有纹身或个性穿搭的半身照，居家卧室场景。'],
    colors: ['#f472b6', '#9d174d'],
    slots: 1,
    credit: '@hannahinthegym',
    images: [null],
    prompt: `${scene} The subject is a young woman with arm tattoos in a striped tank top sitting on a bed: she lifts one arm into the flex, then curls the other hand against the bicep so the heart closes in front of her face. Preserve the tattoos exactly.`,
  },
  {
    id: 'bicep-tank-boy',
    family,
    name: ['Black Tank Heart', '黑背心男生版'],
    bestFor: ['Best for: gym and sporty photos; the black-tank TikTok Live style take.', '适用：健身房和运动风照片，黑背心直播风场景。'],
    colors: ['#fbbf24', '#92400e'],
    slots: 1,
    credit: '@seantristan_',
    images: [null],
    prompt: `${scene} The subject is a young man in a black tank top with a leafy plant behind him: the flex rises slowly, the hand hooks under the fist, and the heart holds with a calm confident smile, trend-caption style.`,
  },
  {
    id: 'bicep-buff',
    family,
    name: ['Gym Buff Heart', '健身猛男版'],
    bestFor: ['Best for: athletic or muscular physiques — the gym-buff version that leans hardest into the flex.', '适用：健美或肌肉线条明显的身材——最突出弯举力量的版本。'],
    colors: ['#2563eb', '#1e3a8a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a muscular gym-goer in a fitted T-shirt: the flexed bicep is pronounced, so the heart reads big and clear against the muscle.`,
  },
  {
    id: 'bicep-normal',
    family,
    name: ['Everyday Heart', '日常小心心版'],
    bestFor: ['Best for: regular everyday photos of any build — the safe default for first tries.', '适用：任意身材的日常照片——第一次尝试的稳妥之选。'],
    colors: ['#86efac', '#15803d'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is an everyday person in a casual T-shirt: a regular arm makes the same readable heart — the joke is that no gym membership is required.`,
  },
  {
    id: 'bicep-cat',
    family,
    name: ['Cat Bicep Heart', '猫咪比心版'],
    bestFor: ['Best for: cat photos — one clear side or front view where the front leg is visible.', '适用：猫咪照片——一张能看清前腿的正脸或侧脸照。'],
    colors: ['#fda4af', '#be123c'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a cat: one front leg bends up like a tiny flex while a paw curls against it, so paw and leg close into one small heart. Preserve the cat's fur colors and markings exactly; keep the room from the reference image.`,
  },
  {
    id: 'bicep-dog',
    family,
    name: ['Dog Bicep Heart', '狗狗比心版'],
    bestFor: ['Best for: dog photos — sitting or standing, front legs visible, face toward the camera.', '适用：狗狗照片——坐姿或站姿、前腿可见、面向镜头。'],
    colors: ['#fcd34d', '#b45309'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject is a dog: one front leg bends up like a tiny flex while a paw curls against it, so paw and leg close into one small heart. Preserve the dog's fur colors and markings exactly; keep the room from the reference image.`,
  },
  {
    id: 'bicep-original',
    family,
    name: ['Original Trend', '原梗复刻版'],
    bestFor: ['Best for: recreating the original wave as closely as possible, human or pet.', '适用：尽可能贴近原梗的复刻，人和宠物都行。'],
    colors: ['#a5b4fc', '#4338ca'],
    slots: 1,
    images: [null],
    prompt: `${scene} The subject follows the original trend framing: a shy closed-mouth smile at the start, the sleeve push, the flex landing on the beat, the heart landing on the next, and the held reveal into the lens.`,
  },
] as const satisfies readonly TemplateDef[];

export type BicepHeartTemplate = (typeof bicepHeartTemplates)[number];
