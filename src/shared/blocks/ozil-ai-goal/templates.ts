import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Ozil Goal template family — the October 2026 remake of the 2016 chip finish.
 * One photo takes the run: chip over a diving keeper, two slides that miss, then
 * the ball is walked into the empty net. Preview videos live at /templates/{id}.mp4.
 * All templates share the `ozil_goal` admin family. Prompts describe the look and
 * the sequence; they do not name a player or a club.
 */
const family = 'ozil_goal';

export const ozilGoalTemplates = [
  {
    id: 'ozil-night',
    family,
    name: ['Night Match', '夜场原版'],
    colors: ['#fde68a', '#1e3a8a'],
    slots: 1,
    images: [null, null],
    prompt:
      'A vertical broadcast clip of a night football match under floodlights, side camera tracking the reference subject. The reference subject wears a dark kit, bright shorts and neon-yellow boots, runs onto a loose ball, chips it over a diving goalkeeper in white, lets the ball drop, and watches two defenders slide past and miss. The reference subject then walks the ball into the empty net. Preserve the reference subject\'s face and appearance exactly. Stadium crowd, broadcast camera, vertical framing, not a cinematic advertisement. Plain kit, no crest, no sponsor text.',
  },
  {
    id: 'ozil-training',
    family,
    name: ['Training Kit', '训练背心版'],
    colors: ['#fef08a', '#111827'],
    slots: 1,
    images: [null, null],
    prompt:
      'A vertical broadcast clip of a night football match under floodlights. The reference subject wears a black sleeveless training top and neon-yellow boots, runs onto a loose ball, chips it over a diving goalkeeper, lets the ball drop while two defenders slide and miss, then walks the ball into the empty net. Preserve the reference subject\'s face and appearance exactly. Side camera, stadium crowd, vertical framing, not a cinematic advertisement. Plain kit, no crest, no sponsor text.',
  },
  {
    id: 'ozil-suit',
    family,
    name: ['Park Suit', '公园西装版'],
    colors: ['#bbf7d0', '#166534'],
    slots: 1,
    images: [null, null],
    prompt:
      'A vertical phone clip on a sunny park pitch. The reference subject in a dark suit runs onto a loose ball, chips it over a person diving on the grass, lets the ball drop while two people slide and miss, then walks the ball into an empty goal. Preserve the reference subject\'s face and appearance exactly. Handheld side camera, daylight, trees behind the goal, vertical framing, not a cinematic advertisement.',
  },
  {
    id: 'ozil-vest',
    family,
    name: ['Waistcoat Finish', '马甲进球版'],
    colors: ['#fed7aa', '#9a3412'],
    slots: 1,
    images: [null, null],
    prompt:
      'A vertical broadcast clip of a night football match under floodlights. The reference subject wears a cream shirt and a brown waistcoat, runs onto a loose ball, chips it over a diving goalkeeper in white, lets the ball drop while two defenders slide and miss, then walks the ball into the empty net. Preserve the reference subject\'s face and appearance exactly. Side camera, stadium crowd, vertical framing, not a cinematic advertisement. Plain clothes, no crest, no sponsor text.',
  },
  {
    id: 'ozil-creature',
    family,
    name: ['Creature Goal', '怪兽进球版'],
    colors: ['#d9f99d', '#3f6212'],
    slots: 1,
    images: [null, null],
    prompt:
      'A vertical clip on a dirt football pitch in daylight. The reference pet or creature runs onto a loose ball, chips it over a diving creature in the goal, lets the ball drop while two figures slide and miss, then walks the ball into the empty net. Preserve the reference subject\'s appearance exactly. Side camera, vertical framing, not a cinematic advertisement.',
  },
] as const satisfies readonly TemplateDef[];

export type OzilGoalTemplate = (typeof ozilGoalTemplates)[number];
