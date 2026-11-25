import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * 365 Elevator template family — the November 2026 Sampagne "365" elevator
 * duo format. One fixed front-facing shot of a brushed-steel elevator: one
 * person is already inside singing, the doors open, a second walks in, turns
 * round, puts in an earbud, and both mouth "365" straight down the lens.
 * Example clip sourced from TikTok — the `credit` handle is shown as a badge.
 * All templates share the `elevator_365` admin family; the admin uploads one
 * reference video that drives the generator.
 */
const family = 'elevator_365';

/**
 * Shared 365 Elevator scene: the steel box, the strip lights, the walk-in,
 * the deadpan lip-sync. Written to be pasted into any photo-to-video model.
 */
const scene =
  'A photorealistic 4:3 video inside a brushed-steel elevator under two bright overhead strip lights, locked front-facing camera, one continuous take, no cuts, no dialogue. Person 1 already stands inside on the right, waiting calmly. The sliding doors open, Person 2 walks in from the foreground with their back to the camera, steps to the left, turns round to face the lens, puts in an earbud, brushes their hair back and glances at their phone. The two then mouth the song straight at the camera with deadpan faces, counting on their fingers. Preserve each reference subject\'s face, hairstyle and outfit exactly, one head per person, exactly two people. Keep the elevator, the strip lights, the camera angle and the timing from the reference video unchanged. Slight phone-camera feel, not cinematic, no text or watermark.';

export const elevator365Templates = [
  {
    id: 'elevator-365',
    family,
    name: ['365 Elevator Duo', '365 电梯双人版'],
    credit: '@neoausdermatrix33',
    colors: ['#facc15', '#1c1917'],
    slots: 2,
    images: [null, null],
    uploadHints: ['/templates/elevator-365-singer.jpg', '/templates/elevator-365-walkin.jpg'],
    prompt: `${scene} The cast is the GOAT-debate duo: the person already inside wears a white-and-teal number 7 football jersey with a captain armband and sings first, and the person who walks in wears an Argentina number 10 jersey with taped wrists, earbud in one ear and phone in hand.`,
  },
] as const satisfies readonly TemplateDef[];

export type Elevator365Template = (typeof elevator365Templates)[number];
