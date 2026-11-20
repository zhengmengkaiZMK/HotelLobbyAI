import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

/**
 * GTA 5 Goodbye AI template family — the November 2026 farewell trend from
 * the week GTA VI launched (19 November 2026). AI short films where three men
 * styled like Michael, Franklin and Trevor say goodbye to the player on a
 * sunset pier: a game case, the car keys, a handshake, a teary close-up and
 * the drive off down a palm-lined beach road in a pink sports car.
 * Preview videos live at /templates/{id}.mp4. All templates share the
 * `gta5_goodbye` admin family. The source scene is a 4:3 live-action-style
 * clip (the "Sunset Pier Swap"), so the generator keeps ratio on auto.
 */
const family = 'gta5_goodbye';

/** Shared GTA 5 Goodbye scene: the pier, the trio, the gift, the pink car. */
const scene =
  "Recreate the viral 'GTA 5 Goodbye AI' clip from the reference video shot for shot: a wooden pier at golden hour over the Pacific, palm trees and a Ferris wheel far behind, warm film grain, shallow depth of field, cinematic live-action look. Three older men styled like video-game crime-drama leads (one in a suit, one in a henley, one scruffy in a white tee) stand on the pier with the person from the uploaded photo: a handshake, one hands over a video-game case, another gives the car keys, a tearful close-up of the person saying a quiet thanks, two game cases land on the seat of a pink retro sports car, and the person drives off down a palm-lined beach road into the sunset while the three men wave from the pier. Preserve the person's face, hairstyle and outfit exactly from the photo. Keep the pier, the three men, the pink car, the golden-hour light, the camera cuts, the timing and the soft score of the reference video unchanged. The three men are AI-generated characters, not real actors, and are never swapped.";

export const gtaGoodbyeTemplates = [
  {
    id: 'gta-goodbye-original-hf',
    family,
    name: ['The Original', '原版完整告别'],
    colors: ['#f59e0b', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The traveler is the person from the uploaded photo, wearing exactly what the photo shows, taking the leaving fan's place in every shot: from behind in the sunset, side-on in the handshakes, front-on in the teary close-up and at the wheel of the pink car.`,
  },
  {
    id: 'gta-goodbye-boy-2013',
    family,
    name: ['The Kid From 2013', '2013 男孩版'],
    colors: ['#38bdf8', '#0f172a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The traveler is a young boy in a teal T-shirt hugging a video-game case on the same pier in 2013, meeting the three men as a kid — the person from the uploaded photo supplies the boy's face, hair and outfit.`,
  },
  {
    id: 'gta-goodbye-vertical',
    family,
    name: ['Vertical Cut', '竖屏完整版'],
    colors: ['#a78bfa', '#1e1b4b'],
    slots: 1,
    images: [null],
    prompt: `${scene} The traveler is the person from the uploaded photo. This cut is framed for a vertical feed: the handshake, the gift, the teary close-up and the drive in the pink car all stay centered on your face.`,
  },
  {
    id: 'gta-goodbye-teal-traveler',
    family,
    name: ['The Traveler', '旅行者版'],
    colors: ['#2dd4bf', '#134e4a'],
    slots: 1,
    images: [null],
    prompt: `${scene} The traveler is the person from the uploaded photo, holding the video-game case up toward the camera in the opening close-up, then taking the keys, the hug and the drive down the beach road.`,
  },
  {
    id: 'gta-goodbye-trevor-2026',
    family,
    name: ['Trevor, 2026', '2026 告别特写'],
    colors: ['#f97316', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The close-up belongs to the scruffy older man: he looks at the person from the uploaded photo with a proud, sad smile as the year 2026 appears over the pier, then the farewell and the drive follow.`,
  },
  {
    id: 'gta-goodbye-trio-keys',
    family,
    name: ['The Trio & The Keys', '三人组与车钥匙'],
    colors: ['#eab308', '#1c1917'],
    slots: 1,
    images: [null],
    prompt: `${scene} The wide shot leads: the three men stand together on the pier while the person from the uploaded photo takes the car keys, and the pink retro sports car with its loud paint job waits right behind them for the final drive.`,
  },
  {
    id: 'gta-goodbye-handshake',
    family,
    name: ['The Handshake', '码头握手版'],
    colors: ['#34d399', '#064e3b'],
    slots: 1,
    images: [null],
    prompt: `${scene} The handshake leads: the person from the uploaded photo, in the striped tee from the photo, grips the hand of the calm older man in the grey work shirt while the ocean horizon glows behind them, then the gift, the tears and the drive follow.`,
  },
] as const satisfies readonly TemplateDef[];

export type GtaGoodbyeTemplate = (typeof gtaGoodbyeTemplates)[number];
