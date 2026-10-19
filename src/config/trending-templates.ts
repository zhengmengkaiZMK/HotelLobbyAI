/**
 * Homepage trending templates.
 *
 * Reorder this array to change the hub. Leave `href` null while a template
 * has no route — the card shows Coming soon and does not link anywhere.
 * `poster` and `video` are optional files under /public.
 */

export const TRENDING_VIBES = [
  { id: 'pets', label: ['Pets', '宠物'] },
  { id: 'couples', label: ['Couples & friends', '情侣与朋友'] },
  { id: 'meme', label: ['Meme & characters', '梗与角色'] },
  { id: 'dance', label: ['Dance & music', '舞蹈与音乐'] },
  { id: 'classic', label: ['Classic', '经典'] },
] as const;

export type TrendingVibeId = (typeof TRENDING_VIBES)[number]['id'];

export type TrendingBadge = 'hot' | 'classic' | 'soon';

export interface TrendingTemplate {
  id: string;
  name: readonly [string, string];
  pitch: readonly [string, string];
  /** Locale-agnostic path. Null means the template is not live yet. */
  href: string | null;
  badge?: TrendingBadge;
  vibes: readonly TrendingVibeId[];
  poster?: string;
  video?: string;
  colors: readonly [string, string];
}

export const TRENDING_TEMPLATES: TrendingTemplate[] = [
  {
    id: 'burning-bridges',
    name: ['Burning Bridges', 'Burning Bridges'],
    pitch: [
      'One photo, and you are the dancer the office party is cheering for.',
      '一张照片，变成办公室派对中央的领舞者。',
    ],
    href: '/burning-bridges-ai-template',
    badge: 'hot',
    vibes: ['dance', 'couples'],
    poster: '/templates/party-office-poster.jpg',
    video: '/templates/party-office.mp4',
    colors: ['#fb923c', '#9a3412'],
  },
  {
    id: 'bulin-47',
    name: ['Bulin 47', 'Bulin 47'],
    pitch: [
      'One front-facing photo takes the red-lit freestyle.',
      '一张正面照，站进红光下的 freestyle。',
    ],
    href: '/bulin-47-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/bulin-street-poster.jpg',
    video: '/templates/bulin-street.mp4',
    colors: ['#ef4444', '#7f1d1d'],
  },
  {
    id: 'hit-the-road-dude',
    name: ['Hit the Road Dude', 'Hit the Road Dude'],
    pitch: ['This template is not live yet.', '这个模板还没上线。'],
    href: null,
    badge: 'soon',
    vibes: ['meme'],
    colors: ['#a1a1aa', '#3f3f46'],
  },
  {
    id: 'hotel-lobby',
    name: ['Hotel Lobby', 'Hotel Lobby'],
    pitch: [
      'Two photos, the orange booth, and a back-and-forth duet.',
      '两张照片，橙色棚，来回对唱。',
    ],
    href: '/hotel-lobby-ai-template',
    badge: 'classic',
    vibes: ['classic', 'couples'],
    poster: '/templates/classic-poster.jpg',
    video: '/templates/classic.mp4',
    colors: ['#fdba74', '#ea580c'],
  },
  {
    id: 'ozil-goal',
    name: ['Ozil Goal', 'Ozil Goal'],
    pitch: [
      'One photo takes the chip, the slides, and the empty net.',
      '一张照片完成挑球、滑铲和空门。',
    ],
    href: '/ozil-ai-goal-template',
    vibes: ['meme'],
    poster: '/templates/ozil-night-poster.jpg',
    video: '/templates/ozil-night.mp4',
    colors: ['#1d4ed8', '#0f172a'],
  },
  {
    id: 'cat-clapping',
    name: ['Cat Clapping', 'Cat Clapping'],
    pitch: [
      'You and a cat, in the clapping clip people keep remaking.',
      '你和一只猫，重现那段鼓掌视频。',
    ],
    href: '/cat-clapping-ai-template',
    vibes: ['pets'],
    poster: '/templates/cat-orange-poster.jpg',
    video: '/templates/cat-orange.mp4',
    colors: ['#fb923c', '#f59e0b'],
  },
];
