/**
 * Homepage trending templates.
 *
 * Reorder this array to change the hub. Leave `href` null while a template
 * has no route — the card shows Coming soon and does not link anywhere.
 * `poster` and `video` are optional files under /public.
 */

export const TRENDING_VIBES = [
  { id: 'couples', label: ['Couples & friends', '情侣与朋友'] },
  { id: 'meme', label: ['Meme & characters', '梗与角色'] },
  { id: 'dance', label: ['Dance & music', '舞蹈与音乐'] },
  { id: 'classic', label: ['Classic', '经典'] },
  { id: 'pets', label: ['Pets', '宠物'] },
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
  /** Optional source attribution shown as a small badge on preview media (e.g. '@isabellacapcut'). */
  credit?: string;
  colors: readonly [string, string];
}

export const TRENDING_TEMPLATES: TrendingTemplate[] = [
  {
    id: 'window-peeper',
    name: ['Window Peeper', 'Window Peeper'],
    pitch: [
      'One photo, and you are caught eating at the lit window.',
      '一张照片，坐进那扇亮灯的窗边被「抓住」。',
    ],
    href: '/window-peeper-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/wp-hoodie-poster.jpg',
    video: '/templates/wp-hoodie.mp4',
    credit: '@isabellacapcut',
    colors: ['#bae6fd', '#1e3a8a'],
  },
  {
    id: 'pedra-do-sal',
    name: ['Pedra do Sal', 'Pedra do Sal'],
    pitch: [
      'One photo joins the plaza crowd for the Pedra do Sal charme dance.',
      '一张照片走进广场人群，跳起 Pedra do Sal 的 charme 舞。',
    ],
    href: '/pedra-do-sal-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/pedra-party-poster.jpg',
    video: '/templates/pedra-party.mp4',
    colors: ['#f9a8d4', '#9d174d'],
  },
  {
    id: 'bby-wow',
    name: ['Bby Wow', 'Bby Wow'],
    pitch: [
      'One photo takes the bite, the stare, and the bby wow dance.',
      '一张照片完成咬面包、瞪镜头和 bby wow 舞步。',
    ],
    href: '/bby-wow-ai-dance-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/bbywow-white-poster.jpg',
    video: '/templates/bbywow-white.mp4',
    colors: ['#fecdd3', '#9f1239'],
  },
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
    pitch: [
      'One photo takes the driver seat in a fictional roadside exchange.',
      '一张照片坐进司机位，演一段虚构的路边争执。',
    ],
    href: '/hit-the-road-dude-ai-template',
    badge: 'hot',
    vibes: ['meme'],
    poster: '/templates/hit-road-state-property-poster.jpg',
    video: '/templates/hit-road-state-property.mp4',
    colors: ['#fbbf24', '#78350f'],
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
