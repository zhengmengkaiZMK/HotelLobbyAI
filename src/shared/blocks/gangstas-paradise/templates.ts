import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Gangsta's Paradise template family — the November 2026 AI music-performance
 * meme. Two performers from two photos take over a staged scene: one raps the
 * verse of Coolio's "Gangsta's Paradise" (feat. L.V., 1995) into a handheld
 * microphone, the other walks past and sings the closing chorus, and the
 * backing cast rises as a choir on the payoff. The reference format is the
 * Star Wars hangar parody (unofficial fan-made AI clip).
 * Preview videos live at /templates/{id}.mp4. All templates share the
 * `gangstas_paradise` admin family and the multi-video slots
 * (viral_family_video_1..5_gangstas_paradise). Clips are 4:3, 20-30 seconds.
 */
const family = 'gangstas_paradise';

/** Shared performance structure: verse rap, silent walk-past, chorus payoff. */
const scene =
  'A staged music-performance video with theatrical lighting. Two performers from the two uploaded reference photos take the lead: the first performer raps the verse of a classic 1995 hip-hop song into a handheld microphone with complete commitment — close-ups at the mic, walking shots, a pointing-at-the-camera moment — while the second performer walks past silently and then steps in to sing the emotional chorus at the end. A costumed backing cast rises holding microphones as a choir on the final payoff. Each performer keeps the face, hair, build and outfit from their own photo; there is no costume swap. Keep the scene, the backing cast, the camera moves and the shot cuts from the reference video unchanged. The mouths follow the tracked performance motion; the song audio is restored separately, not generated. Stage-worthy lighting, one continuous choreographed take with fixed cuts.';

export const gangstasParadiseTemplates = [
  {
    id: 'gangsta-hangar',
    family,
    variantSlot: 1,
    name: ['Galactic Hangar', '银河机库版'],
    colors: ['#e7e5e4', '#1c1917'],
    slots: 2 as const,
    images: [null, null],
    prompt: `${scene} The setting is a gleaming white sci-fi hangar lined with rows of white-armoured troopers standing at attention, a starfield window and reflective floor. The backing troopers raise microphones as the choir on the final chorus.`,
  },
  {
    id: 'gangsta-silver',
    family,
    variantSlot: 2,
    name: ['Silver Rapper', '银发老爹版'],
    colors: ['#d6d3d1', '#44403c'],
    slots: 2 as const,
    images: [null, null],
    prompt: `${scene} The setting is a teal-lit studio stage with a full gospel choir in long crimson robes swaying behind the performer. The first performer is a confident silver-haired dad type in casual clothes; the second performer joins him for the closing chorus in front of the swaying choir.`,
  },
  {
    id: 'gangsta-throne',
    family,
    variantSlot: 3,
    name: ['Dark Throne', '黑暗王座版'],
    colors: ['#1c1917', '#7f1d1d'],
    slots: 2 as const,
    images: [null, null],
    prompt: `${scene} The setting is a dark fantasy throne hall with towering black architecture, cold blue rim lighting and an assembly of robed figures. The first performer is a black-robed villain delivering the verse with theatrical menace; the second performer steps out for the chorus as the robed assembly rises.`,
  },
  {
    id: 'gangsta-crimson',
    family,
    variantSlot: 4,
    name: ['Crimson Chant', '绯红合唱版'],
    colors: ['#fecaca', '#991b1b'],
    slots: 2 as const,
    images: [null, null],
    prompt: `${scene} The setting is a temple corridor lined with glowing red-robed spirit figures. The first performer wears dramatic red-and-black face paint with small horns and delivers the verse with wild energy; the second performer in dark robes sings the chorus as the crimson spirits sway as the choir.`,
  },
  {
    id: 'gangsta-tuxedo',
    family,
    variantSlot: 5,
    name: ['Tuxedo Duet', '燕尾服二重奏'],
    colors: ['#e7e5e4', '#78350f'],
    slots: 2 as const,
    images: [null, null],
    prompt: `${scene} The setting is a wood-panelled gentleman's mansion study with warm lamps, leather chairs and a crowd of suited onlookers. The first performer in formal evening wear delivers the verse like a dinner-toast-gone-dramatic; the second performer in a suit takes the chorus while the onlookers rise as the choir.`,
  },
] as const satisfies readonly TemplateDef[];

export type GangstasParadiseTemplate = (typeof gangstasParadiseTemplates)[number];
