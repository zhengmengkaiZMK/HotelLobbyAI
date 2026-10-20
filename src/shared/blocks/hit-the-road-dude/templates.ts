import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

const family = 'hit_the_road_dude';

/** Single-photo roadside argument templates. The scene is described without naming real people or asserting exact dialogue. */
export const hitTheRoadDudeTemplates = [
  {
    id: 'hit-road-state-property',
    family,
    name: ['State Property', '州有土地版'],
    colors: ['#fef3c7', '#92400e'],
    slots: 1,
    images: [null, null],
    previewVideo: null,
    prompt:
      'Vertical handheld phone footage from outside a stopped pickup truck on a quiet roadside in daylight. Keep the reference subject as the driver visible through the open pickup-truck window, staying in the driver seat. A person filming from outside the truck, dressed like an angler, gestures toward a generic roadside sign in a tense but non-violent disagreement; the driver gives a dry, exaggerated reaction, briefly raises one hand, then turns back toward the road. Use a fictional generic sign with no official seal, address, or real agency name. Preserve the reference subject’s face, hair, clothing, and identity. Natural car and road ambience, slight phone shake, short meme timing, no exact dialogue, no subtitles, no logos.',
  },
  {
    id: 'hit-road-driver-reaction',
    family,
    name: ['Driver Reaction', '司机反应版'],
    colors: ['#dbeafe', '#1e40af'],
    slots: 1,
    images: [null, null],
    previewVideo: null,
    prompt:
      'Vertical handheld phone footage filmed from just outside an ordinary stopped pickup truck. Preserve the reference subject as the driver in the front seat, framed through the open truck window. A person filming from outside, with casual fishing gear, gestures toward the roadside in a brief, heated-looking but non-violent disagreement; the driver looks from the camera to the road, makes a deadpan confused expression, and lightly shakes their head. Keep all speech indistinct and do not invent exact words. Preserve the reference subject’s facial features and appearance exactly. Daylight, realistic pickup-truck interior, subtle handheld motion, playful meme pacing, generic unbranded setting, no text or logos.',
  },
  {
    id: 'hit-road-private-property',
    family,
    name: ['Private Property', '私人领地版'],
    colors: ['#d1fae5', '#065f46'],
    slots: 1,
    images: [null, null],
    previewVideo: null,
    prompt:
      'Vertical handheld phone footage on a quiet country road in daylight, filmed from outside a stopped pickup truck. Keep the reference subject as the driver leaning toward the open truck window while an angler outside points at a fictional private-property sign on a fence. The exchange feels like a short roadside argument but remains non-violent: the driver gives a skeptical look, lifts both hands in a comic “really?” gesture, then turns back toward the steering wheel. The sign must be generic with no real address or owner. Preserve the reference subject’s identity and appearance. Natural light, ordinary vehicle, slight phone-camera shake, no exact dialogue, no subtitles, no logos.',
  },
] as const satisfies readonly TemplateDef[];

export type HitTheRoadDudeTemplate = (typeof hitTheRoadDudeTemplates)[number];
