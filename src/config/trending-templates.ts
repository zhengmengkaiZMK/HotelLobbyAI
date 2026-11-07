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
    id: 'vossi-bop',
    name: ['Vossi Bop Dance', 'Vossi Bop Dance'],
    pitch: [
      'One photo puts you bopping on Westminster Bridge at dawn — the November TikTok trend.',
      '一张照片，让你在黎明的威斯敏斯特桥上跳 Vossi Bop——11 月的 TikTok 热梗。',
    ],
    href: '/vossi-bop-dance-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/vossibop-angry-ginge-poster.jpg',
    video: '/templates/vossibop-angry-ginge.mp4',
    colors: ['#cbd5e1', '#1e293b'],
  },
  {
    id: 'bicep-heart',
    name: ['Bicep Heart', 'Bicep Heart 比心'],
    pitch: [
      'One photo flexes a tiny heart against the bicep — the late-October trend, pets included.',
      '一张照片，弯起手臂比出一颗肱二头肌小心心——10 月底爆火的梗，宠物也能玩。',
    ],
    href: '/bicep-heart-ai-template',
    badge: 'hot',
    vibes: ['meme', 'pets'],
    poster: '/templates/bicep-buff-poster.jpg',
    video: '/templates/bicep-buff.mp4',
    colors: ['#2563eb', '#1e3a8a'],
  },
  {
    id: 'pimpwalk-entrance',
    name: ['Pimpwalk Entrance', 'Pimpwalk Entrance'],
    pitch: [
      'A friend holds the door, you strut through low — the hold-the-door entrance of autumn 2026, cast with your photos.',
      '朋友拉门，你低姿进场——2026 年秋天的扶门梗，用你的照片出镜。',
    ],
    href: '/pimpwalk-entrance-ai-template',
    badge: 'hot',
    vibes: ['meme', 'couples'],
    poster: '/templates/pimpwalk-burger-poster.jpg',
    video: '/templates/pimpwalk-burger.mp4',
    credit: '@mrmiltonfrost',
    colors: ['#166534', '#fde68a'],
  },
  {
    id: 'fancy-cafe',
    name: ['First Time in a Fancy Cafe', '第一次进高级咖啡馆'],
    pitch: [
      'Two photos put you in the viral cafe scene — perched on the tiny table until someone puts a coffee on it.',
      '两张照片进爆火咖啡馆场景——坐在小桌上，直到有人把咖啡放上你的桌子。',
    ],
    href: '/first-time-in-a-fancy-cafe-ai-template',
    badge: 'hot',
    vibes: ['couples', 'meme'],
    poster: '/templates/fancycafe-original-poster.jpg',
    video: '/templates/fancycafe-original.mp4',
    credit: '@leehoustonx',
    colors: ['#a8a29e', '#1c1917'],
  },
  {
    id: 'sasha-la-catrina',
    name: ['Sasha La Catrina', 'Sasha La Catrina'],
    pitch: [
      'One photo turns you into the fairy-tale Catrina — sugar-skull makeup, marigold crown, and the Adiós señora bonita reveal.',
      '一张照片变身童话版 Catrina——糖骷髅妆、万寿菊花冠，配「Adiós señora bonita」揭晓。',
    ],
    href: '/sasha-la-catrina-ai-template',
    badge: 'hot',
    vibes: ['meme', 'classic'],
    poster: '/templates/catrina-flower-toss-poster.jpg',
    video: '/templates/catrina-flower-toss.mp4',
    credit: '@thybui.__',
    colors: ['#fdba74', '#6b21a8'],
  },
  {
    id: 'charlie-brown',
    name: ['A Charlie Brown Christmas', 'A Charlie Brown Christmas'],
    pitch: [
      'One photo, one scan line — you become a 1965 Peanuts-style cartoon on Snoopy\'s red doghouse.',
      '一张照片一道扫描线——你变成站在 Snoopy 红狗屋上的 1965 花生漫画风卡通。',
    ],
    href: '/charlie-brown-christmas-ai-template',
    badge: 'hot',
    vibes: ['meme', 'classic'],
    poster: '/templates/charlie-glasses-poster.jpg',
    video: '/templates/charlie-glasses.mp4',
    colors: ['#dc2626', '#14532d'],
  },
  {
    id: 'alors-on-danse',
    name: ['Alors On Danse', 'Alors On Danse'],
    pitch: [
      'Two photos recast the Stromae white-studio sketch — one plays it straight, one commits far too hard.',
      '两张照片重排 Stromae 白棚小品——一个一本正经，一个用力过猛。',
    ],
    href: '/alors-on-danse-ai-template',
    badge: 'hot',
    vibes: ['meme', 'dance'],
    poster: '/templates/alors-on-danse-ai-giant-poster.jpg',
    video: '/templates/alors-on-danse-ai-giant.mp4',
    colors: ['#dbeafe', '#1e3a8a'],
  },
  {
    id: 'nostalgia',
    name: ['NostalgIA CapCut', 'NostalgIA CapCut'],
    pitch: [
      'One photo puts you inside a recreated retro TV commercial — the bite, the grin, the jingle.',
      '一张照片走进复刻的怀旧电视广告——咬一口、对镜头笑、jingle 文字。',
    ],
    href: '/nostalgia-ai-template',
    badge: 'hot',
    vibes: ['meme', 'classic'],
    poster: '/templates/nostalgia-classic-poster.jpg',
    video: '/templates/nostalgia-classic.mp4',
    colors: ['#fde68a', '#92400e'],
  },
  {
    id: 'wassup-in-a-minute',
    name: ['Wassup in a Minute', 'Wassup in a Minute'],
    pitch: [
      'One photo makes you the swaying streetwear anime character.',
      '一张照片，把你画成白底摇摆的街服动漫角色。',
    ],
    href: '/wassup-in-a-minute-ai-template',
    badge: 'hot',
    vibes: ['meme', 'dance'],
    poster: '/templates/wassup-money-poster.jpg',
    video: '/templates/wassup-money.mp4',
    credit: '@ristyisvalid',
    colors: ['#86efac', '#14532d'],
  },
  {
    id: 'ba-ba-ba-dance',
    name: ['Ba Ba Ba Dance', 'Ba Ba Ba Dance'],
    pitch: [
      'Two photos, one duo routine — solo turns and a sync finish to the Sing remix.',
      '两张照片跳爆火双人舞——轮流独舞，同步收尾，配《欢乐好声音》混音。',
    ],
    href: '/ba-ba-ba-dance-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/baba-original-poster.jpg',
    video: '/templates/baba-original.mp4',
    credit: '@otr.j5',
    colors: ['#d9f99d', '#3f6212'],
  },
  {
    id: 'tiny-desk',
    name: ['Tiny Desk Outstanding', 'Tiny Desk Outstanding'],
    pitch: [
      'One photo puts your crew behind the Tiny Desk singing Outstanding.',
      '一张照片，把你的人放进 Tiny Desk 现场唱《Outstanding》。',
    ],
    href: '/tiny-desk-outstanding-ai-template',
    badge: 'hot',
    vibes: ['dance', 'meme'],
    poster: '/templates/tinydesk-coaches-poster.jpg',
    video: '/templates/tinydesk-coaches.mp4',
    credit: '@theburnerfromhe11',
    colors: ['#1e3a5f', '#7f1d1d'],
  },
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
