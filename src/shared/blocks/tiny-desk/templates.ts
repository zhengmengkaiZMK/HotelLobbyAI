import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * Tiny Desk Outstanding template family — the October 2026 Tiny Desk parody
 * format. AI swaps new faces into the NPR Tiny Desk performance of the Gap
 * Band's "Outstanding": the cramped NPR office, the headphones, the grin,
 * the hand wave and the sax solo all stay, only the band changes.
 * Preview videos live at /templates/{id}.mp4 and are sourced from TikTok —
 * each template carries a `credit` handle shown as a small badge.
 * All templates share the `tiny_desk_outstanding` admin family.
 */
const family = 'tiny_desk_outstanding';

/** Shared Tiny Desk scene: the office, the desk, the band, the song. */
const scene =
  "A photorealistic vertical video inside the cramped NPR Tiny Desk office: shelves of books, records and random office stuff behind a cluttered desk, warm office lighting, microphones on small stands in front. The reference subjects stand behind the desk as a tiny band, joyfully singing the upbeat 1980s funk song 'Outstanding' — the lead singer grins into the camera and waves a hand on the hook, the backup singers sway and clap on the beat, and one player takes a sax solo. Preserve each reference subject's face and appearance exactly. Keep the office, the desk, the band moves, the camera and the song from the reference video unchanged. Slight handheld phone-camera feel, one continuous take, not cinematic.";

export const tinyDeskTemplates = [
  {
    id: 'tinydesk-coaches',
    family,
    name: ['All-Loss Coaches', '输球教练团版'],
    credit: '@theburnerfromhe11',
    colors: ['#1e3a5f', '#7f1d1d'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is five football coaches in team gear: the lead wears a dark quarter-zip pullover and a white team cap, a coach in a white long-sleeve team shirt and one in a red team pullover belt the backing vocals, a coach in a red jacket taps a tambourine, and the saxophone player wears a dark jacket.`,
  },
  {
    id: 'tinydesk-cowboys',
    family,
    name: ['Cowboys Legends', '牛仔传奇版'],
    credit: '@dr.swiftyswift',
    colors: ['#94a3b8', '#1e3a5f'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is a band of suit-and-tie legends: a silver-haired lead in a grey suit with a striped tie hits every note, and the backup singers behind the desk wear dark suits with shirts and ties.`,
  },
  {
    id: 'tinydesk-nfceast',
    family,
    name: ['NFC East Band', '国联东区乐队版'],
    credit: '@lawsnation',
    colors: ['#bfdbfe', '#172554'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is four division coaches and staff behind one desk: the lead wears a navy team visor and a navy quarter-zip jacket, another coach in a white team quarter-zip sings behind him, a grinning man in a red zip jacket claps on the beat, and an older executive in a suit takes the sax solo.`,
  },
  {
    id: 'tinydesk-rams',
    family,
    name: ['Rams Band', '公羊队版'],
    credit: '@ojsglovee',
    colors: ['#fde047', '#1e3a8a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is a team band: the lead is a bearded head coach in a royal-blue team hoodie with white drawstrings, singing wide-eyed at the mic, and the backup singers behind the desk wear white and yellow team jerseys and caps.`,
  },
  {
    id: 'tinydesk-spurs',
    family,
    name: ['Spurs Big Men', '马刺大个子版'],
    credit: '@millions1127',
    colors: ['#e2e8f0', '#334155'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is a band of tall basketball players in white jerseys with silver-and-black trim: the lead singer in a number 40 jersey belts the hook at the keyboard mic while his teammates sway and clap behind the desk, one of them taking the sax solo.`,
  },
  {
    id: 'tinydesk-original',
    family,
    name: ['Uncle Charlie', '真身 Charlie 版'],
    credit: '@musicianexp',
    colors: ['#60a5fa', '#1e3a8a'],
    slots: 2,
    images: [null, null],
    prompt: `${scene} The cast is a vintage funk band: the lead wears a bright blue beanie, gold aviator shades and a colorful baroque-pattern shirt over a black tee, and the backup singers behind the desk wear casual eighties stage outfits.`,
  },
] as const satisfies readonly TemplateDef[];

export type TinyDeskTemplate = (typeof tinyDeskTemplates)[number];
