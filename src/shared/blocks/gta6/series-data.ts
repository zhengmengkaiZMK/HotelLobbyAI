import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

/**
 * Per-series content for the six GTA 6 AI templates. Every series page is
 * built from this file — the shot breakdowns, trend stories, how-to steps
 * and FAQs are all series-specific on purpose (no shared boilerplate text
 * between pages), so each page reads as its own topic for search engines.
 * Facts cross-checked against the trend coverage in November 2026: GTA VI
 * shipped 19 November 2026 on PS5 and Xbox Series X|S with dual protagonists
 * Jason and Lucia in the state of Leonida / Vice City.
 */

export interface Gta6Scene {
  name: readonly [string, string];
  desc: readonly [string, string];
}

export interface Gta6Series {
  slug: string;
  family: string;
  templateId: string;
  duration: number;
  photos: 1 | 2;
  /** Display-only ratio note ([en, zh]). */
  ratio: readonly [string, string];
  name: readonly [string, string];
  h1: readonly [string, string];
  badge: readonly [string, string];
  pitch: readonly [string, string];
  meta: {
    title: readonly [string, string];
    description: readonly [string, string];
    keywords: readonly [string, string];
  };
  accent: readonly [string, string];
  /** Upload-slot labels for two-photo series. */
  slotLabels?: readonly [readonly [string, string], readonly [string, string]];
  uploadHints: readonly string[];
  showcase: {
    heading: readonly [string, string];
    beforeAlt: readonly [string, string];
    afterAlt: readonly [string, string];
    note: readonly [string, string];
  };
  scenes: readonly Gta6Scene[];
  photoTips: readonly [string, string];
  howTo: readonly { name: readonly [string, string]; text: readonly [string, string] }[];
  trend: readonly { heading: readonly [string, string]; text: readonly [string, string] }[];
  faqEn: readonly [string, string][];
  faqZh: readonly [string, string][];
}

const cost = (en: string, zh: string) => templateHowMuchAnswer({ en, zh });

const BF_END = 'Black Friday sale prices run through Nov 30, 2026, 24:00 UTC+8.';
const BF_END_ZH = '黑五优惠价截止 2026 年 11 月 30 日 24:00（东八区）。';

export const GTA6_SERIES: readonly Gta6Series[] = [
  // ───────────────────────────── GTA 6 Trailer AI ─────────────────────────────
  {
    slug: 'gta-6-trailer-ai',
    family: 'gta6_trailer_ai',
    templateId: 'gta-6-trailer-ai',
    duration: 12,
    photos: 1,
    ratio: ['9:16 vertical, like the original trend clips', '9:16 竖屏，和原趋势片段一致'],
    name: ['GTA 6 Trailer AI', 'GTA 6 Trailer AI 预告片'],
    h1: ['GTA 6 Trailer AI — a four-shot fan trailer starring your photo', 'GTA 6 Trailer AI — 一张照片主演的四镜头粉丝预告片'],
    badge: ['GTA VI shipped Nov 19, 2026', 'GTA VI 已于 2026 年 11 月 19 日发售'],
    pitch: [
      'One clear photo puts you in a 12-second GTA VI-style trailer: a sunset convertible run, a gas-station face covering, an airboat sprint past an alligator, and a rooftop turn into the searchlight.',
      '一张清晰照片，让你主演 12 秒 GTA VI 风格预告片：日落敞篷车、加油站拉面巾、气垫船掠过鳄鱼、天台转身迎上探照灯。',
    ],
    meta: {
      title: [
        'GTA 6 Trailer AI – Make a GTA VI-Style Fan Trailer from One Photo',
        'GTA 6 Trailer AI：一张照片做 GTA VI 风格粉丝预告片',
      ],
      description: [
        'GTA 6 Trailer AI on ViralReel: upload one clear photo and get a 12-second, 9:16 GTA VI-style fan trailer in four fixed shots — sunset convertible, gas station, airboat, rooftop. Rendered in about 2–3 minutes. Not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Trailer AI：上传一张清晰照片，生成 12 秒 9:16 竖屏、四个固定镜头的 GTA VI 风格粉丝预告片——日落敞篷车、加油站、气垫船、天台。约 2-3 分钟出片。与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 trailer ai, gta 6 ai trailer, gta 6 ai video generator, gta 6 trailer from photo, gta vi ai template, gta 6 fan trailer',
        'gta 6 trailer ai, gta 6 ai 预告片, gta 6 ai 视频, 照片生成 gta 6 预告片, gta vi ai 模板',
      ],
    },
    accent: ['#fb923c', '#7c2d12'],
    uploadHints: ['/templates/gta6-trailer-source.jpg'],
    showcase: {
      heading: ['One photo in, a four-shot trailer out', '一张照片进去，一条四镜头预告片出来'],
      beforeAlt: ['Example source photo for the GTA 6 Trailer AI template — one clear front-facing portrait', 'GTA 6 Trailer AI 模板的示例原图——一张清晰正脸人像'],
      afterAlt: ['GTA 6 Trailer AI result: the same person stars in a GTA VI-style trailer on ViralReel', 'GTA 6 Trailer AI 效果：同一个人主演 GTA VI 风格预告片'],
      note: [
        'This is the whole flow: upload one clear front-facing photo of one adult, and the four shots below keep that face, hairstyle and build while the scenes change around it. The example on the left is the kind of photo to use; the clip on the right shows the kind of trailer it produces.',
        '整个流程就是这样：上传一张清晰正脸的单人成年人照片，下面四个镜头会保住这张脸、发型和身形，场景在周围切换。左边是适合上传的照片类型，右边是它能做出的预告片效果。',
      ],
    },
    scenes: [
      {
        name: ['Shot 1 · Sunset convertible', '镜头 1 · 日落敞篷车'],
        desc: ['You drive a convertible down a palm-lined beach boulevard into the sunset, hands on the wheel, face clearly readable.', '你开着敞篷车，沿棕榈成排的海滨大道迎着落日驶去，双手握方向盘，脸看得清清楚楚。'],
      },
      {
        name: ['Shot 2 · Gas station', '镜头 2 · 加油站'],
        desc: ['A hard cut to a lonely gas-station lot: you walk across the frame and pull a bandana up over your nose.', '硬切到空旷的加油站空地：你走过画面，抬手把面巾拉上鼻梁。'],
      },
      {
        name: ['Shot 3 · Airboat sprint', '镜头 3 · 气垫船冲刺'],
        desc: ['You pilot an airboat across the swamp at full speed, spray kicking up, an alligator sliding past the hull.', '你驾驶气垫船全速划过沼泽，水花四溅，一条鳄鱼从船身旁滑过。'],
      },
      {
        name: ['Shot 4 · Rooftop searchlight', '镜头 4 · 天台探照灯'],
        desc: ['On a rooftop helipad above the glowing city, a helicopter searchlight sweeps past as you turn and look straight into the camera.', '在城市上空的天台停机坪上，直升机探照灯扫过，你转身直视镜头。'],
      },
    ],
    photoTips: [
      'The airboat shot is the hardest on your photo: the subject sits mid-frame surrounded by swamp and spray, so a blurry, dark or heavily filtered photo loses the face there first. Pick a recent, well-lit photo of one adult facing the camera — head-and-shoulders is enough, a half-body shot carries your build too. No sunglasses, no group photos.',
      '气垫船那一镜最吃照片质量：人物在画面里只占中等大小，周围全是沼泽和水花，照片一模糊、偏暗或滤镜过重，这一镜最先丢脸。选一张近期的、光线充足的单人正脸成年人照片——头肩照就够，半身照还能带上身形。不要墨镜，不要多人合照。',
    ],
    howTo: [
      {
        name: ['Upload one clear photo', '上传一张清晰照片'],
        text: ['Open the GTA 6 Trailer AI template on ViralReel and upload one photo of one adult: front-facing, well lit, eyes visible. The generator shows exactly one slot — this trailer is a single-star format.', '在 ViralReel 打开 GTA 6 Trailer AI 模板，上传一张单人成年人照片：正脸、光线充足、眼睛可见。生成器只有一个上传位——这个预告片是单人主角格式。'],
      },
      {
        name: ['Confirm the fixed spec', '确认固定规格'],
        text: ['The clip is locked to 12 seconds with the four shots in a fixed order. Framing defaults to 9:16 vertical — 16:9 and 1:1 are selectable in the generator if you need another shape, but the shots are framed for vertical. Pick the resolution (480p or 720p; 1080p is available on the Popular plan and above).', '成片固定 12 秒，四个镜头按固定顺序排列。默认 9:16 竖屏——需要别的形状时，生成器里也可以选 16:9 或 1:1，但模板镜头是按竖屏构图的。选好分辨率（480p 或 720p；1080p 为 Popular 及以上方案权益）。'],
      },
      {
        name: ['Generate and wait 2–3 minutes', '生成，等 2-3 分钟'],
        text: ['Read the credit cost on the generate button, start the render, and keep the tab open — video generation usually takes 2–3 minutes. Failed or canceled renders are refunded automatically.', '看清生成按钮上的积分，开始渲染，别关页面——视频生成通常需要 2-3 分钟。失败或取消的生成会自动退回积分。'],
      },
      {
        name: ['Download and post it as your launch trailer', '下载，当作你的发售预告发出去'],
        text: ['Download the MP4 and post it on TikTok, Reels or Shorts during GTA VI launch week — launch day, or pinned to your profile for the week. The trailer has no text, so add your own caption on top in the app.', '下载 MP4，在 GTA VI 发售周内发到 TikTok、Reels 或 Shorts——发售当天发，或整周置顶。预告片里没有文字，可以在 App 里自己加文案。'],
      },
    ],
    trend: [
      {
        heading: ['What is the GTA 6 Trailer AI trend?', 'GTA 6 Trailer AI 趋势是什么？'],
        text: [
          'It is the launch-week wave of AI-made, GTA VI-style fan trailers. Grand Theft Auto VI shipped on 19 November 2026 for PS5 and Xbox Series X|S, and for days around that date, social feeds filled with trailer-style clips that look like game cinematics but star real people. The GTA 6 Trailer AI format is the four-shot version: sunset convertible, gas station, airboat, rooftop — one continuous character trailer cut from a single photo.',
          '它是 GTA VI 发售周的 AI 粉丝预告片风潮。《侠盗猎车手 VI》于 2026 年 11 月 19 日登陆 PS5 和 Xbox Series X|S，发售前后几天，社交平台上涌满了看起来像游戏过场、主角却是真人的预告片式片段。GTA 6 Trailer AI 是其中的四镜头版本：日落敞篷车、加油站、气垫船、天台——一张照片剪出一条完整的角色预告。',
        ],
      },
      {
        heading: ['Why it works during launch week', '为什么它在发售周特别好使'],
        text: [
          'Two things stack. First, timing: everyone scrolling that week wants GTA 6 content, and the people who cannot play yet post instead — a personal trailer is the cheapest way to join the moment. Second, the format is a real trailer structure: four escalating locations, hard cuts, no text, ending on a look into the camera. It reads as cinematic in one second, and the only variable is whose face carries it.',
          '两层原因叠加。第一是时机：那一周刷到的所有人都想要 GTA 6 内容，还没玩上的人就靠发视频参与——一条个人预告片是加入这个时刻最便宜的方式。第二是格式本身就是真的预告片结构：四个场景层层升级、硬切、无文字、结尾一个直视镜头。一秒就能看出「电影感」，唯一的变量是这张脸是谁的。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 12-second 9:16 MP4 generated from your photo, with sound. It is fan-made visual content, not official game footage, not a Rockstar trailer, and not captured gameplay. ViralReel (viralreel.app) is an independent template site and is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive. Do not upload minors, celebrities, or anyone who has not agreed to appear.',
          '下载的是用你的照片新生成的 12 秒 9:16 MP4，带声音。它是粉丝向视觉内容，不是官方游戏画面，不是 Rockstar 的预告片，也不是实机录制。ViralReel（viralreel.app）是独立模板站，与 Rockstar Games 或 Take-Two Interactive 无关联、未获背书。不要上传未成年人、名人或未同意出镜者的照片。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Trailer AI?', 'It is a ViralReel template that turns one clear photo into a 12-second, 9:16 GTA VI-style fan trailer in four fixed shots — sunset convertible, gas-station face covering, airboat sprint past an alligator, and a rooftop turn into a helicopter searchlight. The face, hairstyle and build from your photo carry through all four shots.'],
      ['How much does a GTA 6 Trailer AI video cost?', cost('GTA 6 Trailer AI', 'GTA 6 Trailer AI').en],
      ['Is GTA 6 Trailer AI free?', 'No. ViralReel does not offer free credits — every render is paid, and the exact cost shows on the generate button before you start. Failed or canceled renders are refunded automatically. Credit packs are at viralreel.app/pricing and monthly plans at viralreel.app/subscribe.'],
      ['How long does a GTA 6 Trailer AI render take?', 'About 2–3 minutes for the 12-second clip. Keep the tab open while it renders; the progress bar shows the queue and generation stages. Failed renders return your credits.'],
      ['What happens in the four shots?', 'Shot 1: you drive a convertible down a palm-lined boulevard at sunset. Shot 2: you cross a gas-station lot and pull a bandana over your nose. Shot 3: you race an airboat across the swamp past an alligator. Shot 4: on a rooftop above the glowing city, a searchlight sweeps past as you turn into the camera. The order is fixed and there is no text overlay.'],
      ['What photo should I upload?', 'One recent photo of one adult: front-facing, evenly lit, eyes visible, no sunglasses or heavy filters. Head-and-shoulders works; a half-body shot also carries your build. The airboat shot is the hardest on photo quality, so the sharper the original, the better that shot looks.'],
      ['What aspect ratio is the result?', '9:16 vertical, matching the launch-week clips on TikTok, Instagram Reels and YouTube Shorts. 16:9 and 1:1 are selectable in the generator if you need another shape, but the template shots are framed for vertical.'],
      ['Is this the official GTA 6 trailer or Rockstar content?', 'No. It is fan-made AI visual content styled after GTA VI. ViralReel is not affiliated with, endorsed by, or connected to Rockstar Games or Take-Two Interactive, and the render is not captured gameplay. Label your post as AI-generated when you publish it.'],
      ['Can I make one for a friend?', 'Yes — with their permission and a photo they approve, one adult per photo. It is a popular launch-week gift: their own trailer posted the day the game ships. Do not use photos of minors, celebrities, or anyone who did not agree.'],
      ['Can ChatGPT make this MP4?', 'ChatGPT can describe the shots, but the MP4 is rendered in the browser at viralreel.app/gta-6-trailer-ai from your uploaded photo — not inside a chat and not from a text-to-video prompt alone.'],
    ['Which resolution should I choose, 480p, 720p or 1080p?', 'All three render the same four shots at the same 12 seconds; 720p is simply sharper and shows more detail in the swamp spray and the rooftop night scene. If the clip is going to TikTok, Reels or Shorts, pick 720p; 480p is there for the lowest credit cost, and 1080p is available on the Popular plan and above. The exact credit cost for the resolution you pick shows on the generate button before you start.'],
    ['Does the trailer come with sound?', 'The render carries the scene audio the model generates — engine, wind, rotor thump — and no licensed music. ViralReel does not license any GTA soundtrack; if you want a trend sound, add it in the TikTok, Reels or Shorts editor and keep the AI label on.'],
    ['Will the four shots look exactly like the preview every time?', 'The shots, their order and the 12-second length are fixed; small details — lighting, background extras, framing within a shot — vary from render to render. If a take is not what you wanted, generate again; failed renders are refunded automatically.'],
    ['Is my uploaded photo kept private?', 'Your photo is used to generate your video and does not become a public template or a reusable character. Only upload photos of yourself or of adults who agreed to appear — never minors or celebrities.'],
    ['Can I make a GTA 6 Trailer AI video with a pet or a kid?', 'No — this template is built for one adult face. Pets and children are not accepted for the trailer. For pet formats, the site has dedicated pet templates elsewhere.'],
    ],
    faqZh: [
      ['GTA 6 Trailer AI 是什么？', '它是 ViralReel 的一个模板：一张清晰照片，生成 12 秒 9:16 竖屏、四个固定镜头的 GTA VI 风格粉丝预告片——日落敞篷车、加油站拉面巾、气垫船掠过鳄鱼、天台转身迎上直升机探照灯。照片里的脸、发型和身形贯穿全部四个镜头。'],
      ['做一条 GTA 6 Trailer AI 视频要多少钱？', cost('GTA 6 Trailer AI', 'GTA 6 Trailer AI').zh],
      ['GTA 6 Trailer AI 免费吗？', '不免费。ViralReel 不提供免费积分——每次渲染都计费，开始前生成按钮上会显示确切费用。失败或取消的生成会自动退回积分。积分包在 viralreel.app/zh/pricing，月付在 viralreel.app/zh/subscribe。'],
      ['GTA 6 Trailer AI 生成要多久？', '12 秒的成片大约 2-3 分钟。渲染时保持页面打开；进度条会显示排队和生成阶段。失败的渲染会退回积分。'],
      ['四个镜头里会发生什么？', '镜头 1：你开敞篷车沿棕榈大道迎着落日驶去。镜头 2：你穿过加油站空地，把面巾拉上鼻梁。镜头 3：你开气垫船全速穿过沼泽，掠过一条鳄鱼。镜头 4：在城市上空的天台，探照灯扫过，你转身面向镜头。顺序固定，画面上没有文字。'],
      ['应该上传什么照片？', '一张近期拍摄的单人成年人照片：正脸、光线均匀、眼睛可见，不要墨镜和重滤镜。头肩照就可以，半身照还能带上身形。气垫船那一镜最吃照片质量，原图越清晰，那一镜越好看。'],
      ['成片是什么画幅？', '9:16 竖屏，和发售周 TikTok、Instagram Reels、YouTube Shorts 上的片段一致。需要别的形状时，生成器里也可以选 16:9 或 1:1，但模板镜头是按竖屏构图的。'],
      ['这是官方 GTA 6 预告片或 Rockstar 内容吗？', '不是。它是 GTA VI 风格的粉丝向 AI 视觉内容。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联、未获背书，成片也不是实机录制。发布时请打开 AI 生成标注。'],
      ['可以帮朋友做一个吗？', '可以——征得同意并使用对方认可的照片，每张照片一位成年人。这是发售周很流行的玩法：游戏发售当天把「他的专属预告片」发出去。不要用未成年人、名人或未同意者的照片。'],
      ['ChatGPT 能做出这条 MP4 吗？', 'ChatGPT 可以描述镜头，但 MP4 是在 viralreel.app/zh/gta-6-trailer-ai 浏览器里用你上传的照片渲染的——不在对话里，也不是纯文字生成视频。'],
    ['480p、720p 和 1080p 该选哪个？', '三档渲染的都是同样的四个镜头、同样的 12 秒；720p 只是更清晰，沼泽水花和天台夜景的细节差别最明显。发 TikTok、Reels 或 Shorts 建议 720p；想要最低积分成本就选 480p；1080p 为 Popular 及以上方案权益。所选分辨率的确切积分会在开始前显示在生成按钮上。'],
    ['预告片带声音吗？', '成片带模型生成的场景声音——引擎、风、旋翼声——没有授权音乐。ViralReel 不授权任何 GTA 配乐；想加热梗原声就在 TikTok、Reels 或 Shorts 的编辑器里加，并保持 AI 标注开启。'],
    ['四个镜头每次都会和预览一模一样吗？', '镜头、顺序和 12 秒时长是固定的；小细节——光线、背景路人、镜头内的构图——每次渲染会有差异。不满意可以重新生成；失败的渲染会自动退回积分。'],
    ['我上传的照片会保密吗？', '照片只用于生成你的视频，不会变成公开模板或可复用角色。只上传你自己的照片或已同意出镜的成年人照片——绝不上传未成年人和名人。'],
    ['可以用宠物或孩子的照片做 GTA 6 Trailer AI 吗？', '不可以——这条模板按一位成年人的脸构建，不接受宠物和儿童。想给宠物做视频，站内有专门的宠物模板。'],
    ],
  },

  // ───────────────────────────── GTA 6 Wanted Level ─────────────────────────────
  {
    slug: 'gta-6-wanted-level',
    family: 'gta6_wanted_level',
    templateId: 'gta-6-wanted-level',
    duration: 10,
    photos: 1,
    ratio: ['9:16 vertical, one continuous take', '9:16 竖屏，一镜到底'],
    name: ['GTA 6 Wanted Level', 'GTA 6 Wanted Level 五星通缉'],
    h1: ['GTA 6 Wanted Level — a five-star one-take chase starring you', 'GTA 6 Wanted Level — 五星通缉一镜到底，主角是你'],
    badge: ['Looks like captured gameplay', '看起来就像实机录制'],
    pitch: [
      'One photo becomes a 10-second third-person gameplay clip: you walk into frame on a pastel beach street, sprint to a yellow supercar, and drive into the pink sunset with five wanted stars lighting up and two cruisers on your tail.',
      '一张照片变成 10 秒第三人称游戏画面：你沿粉彩海滨大街走向镜头，冲向黄色超跑，在五颗通缉星点亮、两辆警车紧咬下驶向粉色日落。',
    ],
    meta: {
      title: [
        'GTA 6 Wanted Level – Five-Star AI Gameplay Clip from One Photo',
        'GTA 6 Wanted Level：一张照片做五星通缉 AI 实机画面',
      ],
      description: [
        'GTA 6 Wanted Level on ViralReel: one photo becomes a 10-second, 9:16 one-take clip that looks like GTA VI gameplay — HUD minimap, five wanted stars, yellow supercar, police chase into a pink sunset. Rendered in about 2–3 minutes. Fan-made AI content, not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Wanted Level：一张照片生成 10 秒 9:16 一镜到底、看起来像 GTA VI 实机的片段——小地图 HUD、五颗通缉星、黄色超跑、警车追进粉色日落。约 2-3 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 wanted level, gta 6 ai gameplay, gta 6 wanted level ai, gta 6 police chase ai video, gta 6 five stars ai, gta 6 gameplay from photo',
        'gta 6 wanted level, gta 6 ai 实机画面, gta 6 五星通缉 ai, gta 6 警车追逐 ai 视频, 照片生成 gta 6 实机',
      ],
    },
    accent: ['#f472b6', '#831843'],
    uploadHints: ['/templates/gta6-wanted-source.jpg'],
    showcase: {
      heading: ['One photo → one continuous five-star chase', '一张照片 → 一镜到底的五星追逐'],
      beforeAlt: ['Example source photo for the GTA 6 Wanted Level template — one clear front-facing portrait', 'GTA 6 Wanted Level 模板的示例原图——一张清晰正脸人像'],
      afterAlt: ['GTA 6 Wanted Level result: the same person in a five-star gameplay-style chase', 'GTA 6 Wanted Level 效果：同一个人主演五星通缉风格的追逐画面'],
      note: [
        'The first seconds are where your face does the work: the clip opens with you walking toward the camera, so a clear, evenly-lit front-facing photo of one adult is all it takes. From the moment the camera swings behind you, the HUD — minimap bottom-left, five stars top-right — stays fixed like real game footage.',
        '开头几秒是照片发挥作用的地方：片段开场是你走向镜头，所以只需要一张清晰、光线均匀的单人正脸照片。从镜头绕到你身后的那一刻起，HUD——左下角小地图、右上角五颗星——会像真的游戏画面一样固定不动。',
      ],
    },
    scenes: [
      {
        name: ['Walk-in', '入场'],
        desc: ['You walk toward the camera down a pastel art-deco beach street lined with palms, face fully readable.', '你沿粉彩色装饰艺术风格的海滨大街走向镜头，两旁是棕榈树，脸完整清晰。'],
      },
      {
        name: ['The swing', '镜头绕后'],
        desc: ['The camera swings behind you game-style as you break into a sprint toward a yellow supercar parked at the curb.', '镜头像游戏里那样绕到你身后，你开始冲刺，奔向停在路边的一辆黄色超跑。'],
      },
      {
        name: ['Scissor doors', '剪刀门'],
        desc: ['The scissor doors lift, you drop into the driver seat, and the engine takes over.', '剪刀门升起，你坐进驾驶位，引擎声接管一切。'],
      },
      {
        name: ['Five stars', '五星点亮'],
        desc: ['The five wanted stars light up one by one as two police cars tack onto the chase and a helicopter circles overhead — the whole pursuit rolls into the pink sunset.', '两辆警车咬上追逐、直升机在头顶盘旋的同时，五颗通缉星一颗颗点亮——整场追逐冲进粉色日落。'],
      },
    ],
    photoTips: [
      'Your face matters most in the first seconds, while you walk toward the camera; after the camera swings behind you it sees your back. Choose a photo with a clear, evenly-lit face looking at or near the camera. Sunglasses, low hats, masks and heavy filters all blur that opening moment. One adult per photo — the clip features a single character.',
      '开头几秒、也就是你走向镜头的时候最吃脸；镜头绕到身后之后就只能看到背影了。选一张脸部清晰、光线均匀、看着镜头或接近正脸的照片。墨镜、压低的帽檐、口罩和重滤镜都会让开场那几秒不像你。每张照片一个人——这条片段只有一位主角。',
    ],
    howTo: [
      {
        name: ['Upload one front-facing photo', '上传一张正脸照片'],
        text: ['Open the GTA 6 Wanted Level template and upload one photo of one adult. The opening walk-to-camera is where your face is checked, so a clear, well-lit front-facing shot beats everything else.', '打开 GTA 6 Wanted Level 模板，上传一张单人成年人照片。开场走向镜头的几秒是验脸关键，清晰、光线充足的正脸照效果最好。'],
      },
      {
        name: ['Keep the 10-second spec', '保持 10 秒规格'],
        text: ['The clip is locked to 10 seconds, one continuous take with the HUD fixed in place. Framing defaults to 9:16 vertical — 16:9 and 1:1 are selectable in the generator. Pick 480p or 720p (1080p is available on the Popular plan and above) — the take, the stars and the chase are identical at every tier.', '成片固定 10 秒，一镜到底、HUD 固定在原位。默认 9:16 竖屏，生成器里也可选 16:9 或 1:1。选 480p 或 720p（1080p 为 Popular 及以上方案权益）——每一档的镜头、星星和追逐完全一样。'],
      },
      {
        name: ['Generate and wait 2–3 minutes', '生成，等 2-3 分钟'],
        text: ['Check the credit cost on the button, start the render, and leave the tab open. Generation usually takes 2–3 minutes; failed or canceled renders are refunded automatically.', '看清按钮上的积分，开始渲染，别关页面。生成通常需要 2-3 分钟；失败或取消的生成会自动退回积分。'],
      },
      {
        name: ['Post it with a crime-worthy caption', '配一个「罪名」发出去'],
        text: ['Download the MP4 and post it as "my first 10 seconds in Vice City", or add a caption naming the crime that earned five stars — running late, eating the last slice. Keep captions off the HUD corners: bottom-left is the minimap, top-right the stars.', '下载 MP4，配上「我在罪恶都市的头 10 秒」发布，或者用一句话说明你为什么拿到五星——上班迟到、偷吃了最后一块披萨。字幕避开两个角落：左下是小地图，右上是通缉星。'],
      },
    ],
    trend: [
      {
        heading: ['What is the GTA 6 Wanted Level trend?', 'GTA 6 Wanted Level 趋势是什么？'],
        text: [
          'It is the AI-clip wave that looks like leaked GTA VI gameplay: third-person camera, fixed HUD, a wanted-level chase. Around the 19 November 2026 launch, gameplay-looking AI clips circulated so widely that several were mistaken for real captures — which is exactly why the honest version of this format works: it keeps the look and openly labels itself as AI. The Wanted Level template is the five-star version: one continuous take from a beach walk-in to a supercar getaway with two cruisers and a helicopter.',
          '它是一波看起来像「GTA VI 实机泄露」的 AI 片段风潮：第三人称镜头、固定 HUD、通缉追逐。2026 年 11 月 19 日发售前后，这类游戏画面风格的 AI 片段传播太广，好几条被当成了真的实机——这正是这个格式的「诚实版本」能成立的原因：保留那个画面风格，同时大方标注 AI。Wanted Level 模板是它的五星版本：从海滨入场到超跑逃亡一镜到底，两辆警车加一架直升机。',
        ],
      },
      {
        heading: ['Why the wanted stars sell it', '为什么通缉星是点睛之笔'],
        text: [
          'The wanted-level system is the most recognizable piece of GTA UI — players have spent two decades watching stars climb from one to five. Lighting them up one by one over a chase gives viewers an instant story without a single word of dialogue: you did something, the city noticed, and the engine note says you are not stopping. In a 10-second vertical clip, that is the whole plot.',
          '通缉等级系统是 GTA 界面里最有辨识度的元素——玩家看了二十年星星从一颗爬到五颗。在追逐过程中让星星一颗颗点亮，不用一句台词就讲完了整个故事：你干了什么、全城都知道了、而引擎声说明你不会停下。在一条 10 秒竖屏片段里，这就是全部剧情。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 10-second 9:16 MP4 generated from your photo, with footsteps, sirens and engine audio and no dialogue. It is fan-made AI content styled after GTA VI — not captured gameplay, not a leak, and not official Rockstar material. ViralReel (viralreel.app) is independent and not affiliated with Rockstar Games or Take-Two Interactive. Post it with the AI label on, and use only photos of adults who agreed to appear.',
          '下载的是用你的照片新生成的 10 秒 9:16 MP4，带脚步声、警笛和引擎声，没有对白。它是 GTA VI 风格的粉丝向 AI 内容——不是实机录制、不是泄露画面、也不是 Rockstar 官方素材。ViralReel（viralreel.app）是独立站点，与 Rockstar Games 或 Take-Two Interactive 无关联。发布时打开 AI 标注，只使用已同意出镜的成年人照片。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Wanted Level?', 'It is a ViralReel template that turns one photo into a 10-second, 9:16 one-take clip styled like GTA VI gameplay: you walk toward the camera on a pastel beach street, sprint to a yellow supercar, and drive into a pink sunset with two police cars and a helicopter behind you while five wanted stars light up on a fixed HUD.'],
      ['How much does a GTA 6 Wanted Level video cost?', cost('GTA 6 Wanted Level', 'GTA 6 Wanted Level').en],
      ['Is GTA 6 Wanted Level free?', 'No. Every render is paid — the exact credit cost shows on the generate button before you start, and ViralReel does not offer free credits. Failed or canceled renders are refunded. Packs: viralreel.app/pricing; monthly: viralreel.app/subscribe.'],
      ['How long does the render take?', 'About 2–3 minutes for the 10-second clip. Keep the tab open; the progress bar covers upload, queue and generation. Failed renders return the credits automatically.'],
      ['What happens in the clip?', 'One continuous take: you walk into frame on a pastel art-deco beach street, the camera swings behind you, you sprint to a yellow supercar with scissor doors, and the chase rolls out toward a pink sunset — two cruisers and a helicopter on your tail while the five stars light up one by one. The minimap sits bottom-left and the stars top-right the whole time.'],
      ['What photo works best?', 'One adult, front-facing, evenly lit, eyes visible. The opening seconds show your face to the camera; after that the shot is your back. Sunglasses, masks, low hats and heavy filters hurt exactly where it matters. No group photos — the clip has one character.'],
      ['What aspect ratio is it?', '9:16 vertical, one continuous take — the shape TikTok, Reels and Shorts use for this trend. 16:9 and 1:1 are selectable in the generator, but the HUD and framing are built for vertical.'],
      ['Is this real GTA 6 gameplay or a leak?', 'No. It is AI-generated fan content that imitates the gameplay look, complete with a fake HUD. It is not captured gameplay, not a leak, and not official Rockstar Games material. ViralReel is not affiliated with Rockstar Games or Take-Two Interactive. Always publish with the AI-generated label.'],
      ['Why does it look like gameplay rather than a movie?', 'Because that is the format: third-person camera, fixed minimap and wanted stars, engine-and-siren audio. The game-style HUD is what makes viewers read it as GTA in the first second — and what makes honest AI-labeling important, since gameplay-looking clips have been mistaken for real captures during launch week.'],
      ['Who can I put in the driver seat?', 'Yourself or an adult who agreed to appear, from a photo you have permission to use. You cannot cast real officers, celebrities, or minors, and the render does not include real police officers or real vehicles.'],
    ['Which resolution should I choose, 480p or 720p?', 'Both give the same 10-second take with the same HUD; 720p keeps the opening walk-to-camera crisp — exactly where your face is checked. Pick 720p unless you specifically want the lowest-cost option.'],
    ['Does the clip include police siren audio?', 'Yes — the audio is footsteps, sirens and the engine, generated with the scene, and there is no dialogue. ViralReel does not license any game soundtrack; the HUD, stars and sirens are stylized fan content, not Rockstar assets.'],
    ['Will the five stars always light up?', 'Yes — the minimap and the five-star wanted level are fixed parts of the scene, and the stars light up one by one as the chase starts. Small render-to-render details like the number of cruisers can vary; a failed render is refunded automatically.'],
    ['Is my photo kept private?', 'Your photo is used to render your clip and does not become a public template or reusable character. Upload only your own photo or one an adult has agreed to; never minors, officers, or celebrities.'],
    ['Can I make one with a pet or a child?', 'No. The Wanted Level clip is a single adult character — children and pets are not accepted. For a game-styled pet video, use a dedicated pet template on the site.'],
    ],
    faqZh: [
      ['GTA 6 Wanted Level 是什么？', '它是 ViralReel 的一个模板：一张照片生成 10 秒 9:16 一镜到底、GTA VI 实机风格的片段：你沿粉彩海滨大街走向镜头，冲向黄色超跑，在两辆警车和一架直升机的追逐下驶向粉色日落，固定 HUD 上的五颗通缉星一颗颗点亮。'],
      ['做一条 GTA 6 Wanted Level 视频要多少钱？', cost('GTA 6 Wanted Level', 'GTA 6 Wanted Level').zh],
      ['GTA 6 Wanted Level 免费吗？', '不免费。每次渲染都计费——开始前生成按钮上会显示确切积分，ViralReel 不提供免费积分。失败或取消的生成会退回。积分包：viralreel.app/zh/pricing；月付：viralreel.app/zh/subscribe。'],
      ['生成要多久？', '10 秒的成片大约 2-3 分钟。保持页面打开；进度条覆盖上传、排队和生成。失败会自动退回积分。'],
      ['片段里会发生什么？', '一镜到底：你走上粉彩色装饰艺术风格的海滨大街，镜头绕到你身后，你冲向一辆剪刀门黄色超跑，追逐冲向粉色日落——两辆警车和一架直升机紧追，五颗通缉星一颗颗点亮。小地图全程固定在左下角，星星在右上角。'],
      ['什么照片最合适？', '一位成年人、正脸、光线均匀、眼睛可见。开场几秒会把你的脸给到镜头，之后就只剩背影。墨镜、口罩、压低的帽檐和重滤镜坏的都是最关键的那几秒。不要合照——片段里只有一位主角。'],
      ['成片是什么画幅？', '9:16 竖屏、一镜到底——这条趋势在 TikTok、Reels 和 Shorts 上的标准形状。生成器里也可以选 16:9 或 1:1，但 HUD 和构图都是按竖屏设计的。'],
      ['这是真的 GTA 6 实机或泄露画面吗？', '不是。它是模仿实机画面风格的 AI 生成粉丝内容，HUD 是仿造的。它不是实机录制、不是泄露、也不是 Rockstar Games 官方素材。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联。发布时务必打开 AI 生成标注。'],
      ['为什么它看起来像游戏而不是电影？', '因为格式就是这样：第三人称镜头、固定的小地图和通缉星、引擎加警笛的声音。游戏风格的 HUD 让观众第一秒就把它读成 GTA——也正因如此，诚实的 AI 标注很重要：发售周里这类画面风格的片段已经被当成过真实机。'],
      ['驾驶位可以放谁？', '你自己，或同意出镜的成年人，用你有权使用的照片。不能让真实警员、名人或未成年人出镜，成片里也不包含真实警察或真实车辆。'],
    ['480p 和 720p 该选哪个？', '两档都是同样的 10 秒一镜到底、同样的 HUD；720p 能让开场走向镜头的几秒保持清晰——那正是验脸的关键时刻。除非就想省积分，否则直接选 720p。'],
    ['片段里有警笛声吗？', '有——声音是脚步声、警笛和引擎，随场景一起生成，没有对白。ViralReel 不授权任何游戏配乐；HUD、通缉星和警笛都是风格化粉丝内容，不是 Rockstar 素材。'],
    ['五颗星每次都会点亮吗？', '会——小地图和五星通缉等级是场景的固定元素，追逐开始时星星一颗颗点亮。警车数量等小细节每次渲染可能不同；失败的渲染自动退回积分。'],
    ['我上传的照片会保密吗？', '照片只用于渲染你的片段，不会变成公开模板或可复用角色。只上传你自己的照片或已同意出镜的成年人照片；绝不上传未成年人、警察或名人。'],
    ['可以用宠物或孩子的照片吗？', '不可以。Wanted Level 片段只有一位成年主角——不接受儿童和宠物。想要游戏风格的宠物视频，请用站内专门的宠物模板。'],
    ],
  },

  // ────────────────────────── GTA 6 Lovers on the Run ──────────────────────────
  {
    slug: 'gta-6-lovers-on-the-run',
    family: 'gta6_lovers_on_the_run',
    templateId: 'gta-6-lovers-on-the-run',
    duration: 15,
    photos: 2,
    ratio: ['9:16 vertical, five cinematic shots', '9:16 竖屏，五个电影感镜头'],
    name: ['GTA 6 Lovers on the Run', 'GTA 6 Lovers on the Run 亡命情侣'],
    h1: ['GTA 6 Lovers on the Run — a two-photo chase romance', 'GTA 6 Lovers on the Run — 两张照片演一场追逐爱情'],
    badge: ['Jason & Lucia energy', '杰森与露西亚的感觉'],
    pitch: [
      'Two photos — a driver and a passenger — become a 15-second GTA VI-style chase romance: a drifting muscle car, a searchlight through the windshield, a fire-escape sprint, and a slow-motion rooftop kiss under the helicopter.',
      '两张照片——一位司机一位副驾——变成 15 秒 GTA VI 风格的追逐爱情：漂移的肌肉车、透过挡风玻璃的探照灯、消防梯狂奔，以及直升机下的慢镜头天台之吻。',
    ],
    meta: {
      title: [
        'GTA 6 Lovers on the Run – Two-Photo AI Chase Romance from Your Photos',
        'GTA 6 Lovers on the Run：两张照片做 AI 追车爱情短片',
      ],
      description: [
        'GTA 6 Lovers on the Run on ViralReel: two photos become a 15-second, 9:16 GTA VI-style chase romance — muscle car drift, helicopter searchlight, fire-escape run, rooftop kiss. Rendered in about 2–3 minutes. Fan-made AI content, not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Lovers on the Run：两张照片生成 15 秒 9:16 的 GTA VI 风格追逐爱情——肌肉车漂移、直升机探照灯、消防梯狂奔、天台之吻。约 2-3 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 lovers on the run, gta 6 lovers ai, gta 6 couple chase video, gta 6 jason lucia ai video, gta 6 kiss rooftop ai, two photo gta 6 template',
        'gta 6 lovers on the run, gta 6 亡命情侣 ai, gta 6 情侣追逐视频, gta 6 杰森露西亚 ai, 天台之吻 ai, 两张照片 gta 6 模板',
      ],
    },
    accent: ['#e879f9', '#701a75'],
    slotLabels: [
      ['Driver photo', '司机照片'],
      ['Passenger photo', '副驾照片'],
    ],
    uploadHints: ['/templates/gta6-lovers-a.jpg', '/templates/gta6-lovers-b.jpg'],
    showcase: {
      heading: ['Two photos, one chase, one kiss', '两张照片，一场追逐，一个吻'],
      beforeAlt: ['Example source photos for GTA 6 Lovers on the Run — two separate adult portraits, driver and passenger', 'GTA 6 Lovers on the Run 的示例原图——两张分开的成年人人像，司机与副驾'],
      afterAlt: ['GTA 6 Lovers on the Run result: the two people from the photos in a GTA VI-style rooftop kiss scene', 'GTA 6 Lovers on the Run 效果：照片里的两个人出现在 GTA VI 风格的天台之吻场景'],
      note: [
        'Photo order is the plot: the first photo drives, the second rides shotgun and looks back. Both faces, hairstyles and outfits are redrawn in the game\'s 3D look — not pasted onto the frame — so both photos should be clear, front-facing portraits of adults who agreed to appear together.',
        '照片顺序就是剧情：第一张开车，第二张坐副驾回头张望。两张脸、发型和穿搭都会按游戏的 3D 画风重画——不是贴图——所以两张照片都应该是清晰正脸、且双方同意一起出镜的成年人照片。',
      ],
    },
    scenes: [
      {
        name: ['Shot 1 · The drift', '镜头 1 · 漂移'],
        desc: ['A dark muscle car drifts hard around a wet corner with two police cars drifting in right behind.', '一辆深色肌肉车在湿滑弯道猛甩尾，两辆警车跟着从同一个弯漂出来。'],
      },
      {
        name: ['Shot 2 · Inside the cab', '镜头 2 · 车内'],
        desc: ['Through the windshield: the driver grips the wheel while the passenger twists around to look back — the helicopter searchlight rakes the cabin and both duck.', '隔着挡风玻璃：司机握紧方向盘，副驾回头张望——直升机探照灯扫进车厢，两人一起低头躲开。'],
      },
      {
        name: ['Shot 3 · Neon avenue', '镜头 3 · 霓虹大道'],
        desc: ['The car flies down a palm-lined neon avenue, helicopter hugging the street, one cruiser spinning out in sparks.', '车辆沿种满棕榈的霓虹大道飞驰，直升机压在街道上空，一辆警车打滑撞出火花。'],
      },
      {
        name: ['Shot 4 · Fire escape', '镜头 4 · 消防梯'],
        desc: ['The car screeches into an alley; the two of you run hand in hand up the fire escape.', '急刹停进后巷；你们牵着手冲上消防梯。'],
      },
      {
        name: ['Shot 5 · Rooftop kiss', '镜头 5 · 天台之吻'],
        desc: ['Slow motion: a kiss on the rooftop while the camera orbits, the helicopter still circling and police lights strobing across the far streets.', '慢镜头：天台上的吻，镜头环绕，直升机还在盘旋，远处街道警灯闪成一片。'],
      },
    ],
    photoTips: [
      'Two separate photos, one adult each, in the right order: first the driver, second the passenger. Swap the photos and you swap the seats. Front-facing, evenly lit portraits work best because both faces are redrawn as game characters — eyes, nose and jawline need to be readable. Hairstyles survive the render best, so pick photos whose hair looks how you want it in the film. Head-only close-ups leave the wardrobe to the template; if the outfit matters, use a photo with more of it.',
      '两张分开的照片，每张一个人，顺序要对：第一张司机，第二张副驾。对调照片等于对调座位。正脸、光线均匀的人像最好，因为两张脸都会重画成游戏角色——眼睛、鼻子和下颌线要能看清。发型在渲染里保留得最稳，挑发型就是你想在片中呈现的样子的照片。只拍到肩膀的大头照会把穿搭交给模板自由发挥；在意穿搭就用拍到更多衣服的照片。',
    ],
    howTo: [
      {
        name: ['Upload the driver photo first', '先上传司机照片'],
        text: ['Open GTA 6 Lovers on the Run and upload the first photo into the slot labeled Driver photo: one adult, front-facing, well lit. This face sits behind the wheel in every cab and chase shot.', '打开 GTA 6 Lovers on the Run，把第一张照片传进「司机照片」上传位：一位成年人、正脸、光线充足。车内和追逐镜头里握方向盘的都是这张脸。'],
      },
      {
        name: ['Upload the passenger photo', '上传副驾照片'],
        text: ['Upload the second photo into the slot labeled Passenger photo — the person who looks back and shares the rooftop. Swap the two photos before generating if you want to change who drives.', '把第二张照片传进「副驾照片」上传位——回头张望、共赴天台的那个人。想让另一个人开车，在生成前对调两张照片即可。'],
      },
      {
        name: ['Generate the 15-second chase', '生成 15 秒追逐'],
        text: ['The clip is locked to 15 seconds with the five shots in order. Framing defaults to 9:16 vertical — 16:9 and 1:1 are selectable in the generator. Pick the resolution, read the credit cost, and start — rendering usually takes 2–3 minutes. Failed renders are refunded.', '成片固定 15 秒，五个镜头按顺序排列。默认 9:16 竖屏，生成器里也可选 16:9 或 1:1。选好分辨率，看清积分，开始生成——渲染通常 2-3 分钟。失败会退回积分。'],
      },
      {
        name: ['Post it as your launch-week love story', '当作发售周的爱情故事发出去'],
        text: ['Download the MP4 and post it on TikTok, Reels or Shorts — an anniversary drop, a launch-week date video, or the answer to "which of us drives". Both people must have agreed to appear, and the post should carry the AI label.', '下载 MP4 发到 TikTok、Reels 或 Shorts——纪念日投放、发售周约会视频，或者回答「我们俩谁负责开车」。两个人都必须同意出镜，发布时打开 AI 标注。'],
      },
    ],
    trend: [
      {
        heading: ['What is the Lovers on the Run trend?', 'Lovers on the Run 趋势是什么？'],
        text: [
          'It is the romance branch of the GTA 6 AI wave. GTA VI ships with dual protagonists — Jason and Lucia, a couple hunted across the state of Leonida — and that Bonnie-and-Clyde setup became the launch season\'s favorite fan-fiction canvas. The Lovers on the Run format is a five-shot chase romance: drift, searchlight, neon avenue, fire escape, rooftop kiss, cut from two photos.',
          '它是 GTA 6 AI 热潮的爱情线。GTA VI 采用双主角设定——杰森和露西亚，一对在全莱昂尼达州被通缉的情侣——这个雌雄大盗设定成了发售季最受喜爱的同人画布。Lovers on the Run 是它的五镜头追逐爱情版：漂移、探照灯、霓虹大道、消防梯、天台之吻，用两张照片剪成。',
        ],
      },
      {
        heading: ['Why couples adopted it first', '为什么情侣最先玩起来'],
        text: [
          'Most GTA trends are single-star; this one needs two people, which makes it the format couples and best friends post together. It answers a question every pair finds funny — who drives, who looks back — and it ends on a kiss instead of a crash, which is why anniversary and launch-week date posts adopted it immediately. The chase supplies the spectacle; the relationship supplies the joke.',
          '大多数 GTA 趋势都是单人主角；这个需要两个人，所以成了情侣和挚友一起发的格式。它回答了一个每对人都觉得好笑的问题——谁开车、谁回头——而且结尾是吻不是撞车，纪念日和发售周约会帖立刻收编了它。追逐负责场面，关系负责笑点。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 15-second 9:16 MP4 with sound, both faces redrawn in the game\'s 3D style. There are no weapons in any shot and no dialogue. It is fan-made AI content styled after GTA VI — not official footage. ViralReel (viralreel.app) is not affiliated with Rockstar Games or Take-Two Interactive. Only use photos of two adults who both agreed to appear — the closing scene is a kiss, so consent from both sides is not optional.',
          '下载的是一条新的 15 秒 9:16 MP4，带声音，两张脸都按游戏 3D 画风重绘。任何镜头都没有武器，也没有对白。它是 GTA VI 风格的粉丝向 AI 内容——不是官方素材。ViralReel（viralreel.app）与 Rockstar Games 或 Take-Two Interactive 无关联。只使用两位都同意出镜的成年人照片——结尾是吻戏，所以双方的同意不是可选项。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Lovers on the Run?', 'It is a ViralReel template that turns two photos into a 15-second, 9:16 GTA VI-style chase romance: a muscle-car drift, an in-cab searchlight moment, a neon-avenue flyby, a fire-escape sprint, and a slow-motion rooftop kiss under the helicopter. The first photo drives; the second rides shotgun.'],
      ['How much does a GTA 6 Lovers on the Run video cost?', cost('GTA 6 Lovers on the Run', 'GTA 6 Lovers on the Run').en],
      ['Is it free?', 'No. ViralReel has no free credits — the generate button shows the exact cost before you start, and failed or canceled renders are refunded automatically. Credit packs: viralreel.app/pricing; monthly plans: viralreel.app/subscribe.'],
      ['How long does the render take?', 'About 2–3 minutes for the 15-second clip. Keep the tab open while it renders; failed renders return your credits.'],
      ['What happens in the five shots?', 'Shot 1: the muscle car drifts a wet corner with two cruisers behind. Shot 2: through the windshield — the driver grips the wheel, the passenger looks back, the searchlight sweeps the cabin. Shot 3: the neon-avenue flyby with the helicopter low. Shot 4: the alley stop and fire-escape run. Shot 5: the slow-motion rooftop kiss, camera orbiting, police lights in the distance.'],
      ['Which photo goes first?', 'The first photo is the driver and the second is the passenger — swap them to swap the seats. Each photo should be a separate, front-facing, evenly-lit portrait of one adult. Hairstyles carry through best, so choose photos whose hair is how you want it on screen.'],
      ['What aspect ratio is the result?', '9:16 vertical across five cinematic shots — the format TikTok, Reels and Shorts use for this trend. 16:9 and 1:1 are selectable, but the shots are framed for vertical.'],
      ['Is the kiss scene appropriate to post?', 'The kiss is a cinematic slow-motion moment with no explicit content, and there are no weapons in any shot. Both people in the video must be adults who agreed to appear together — that consent is required before you generate, not after.'],
      ['Is this official GTA 6 content?', 'No. It is fan-made AI visual content inspired by the Jason-and-Lucia setup of GTA VI. ViralReel is not affiliated with, endorsed by, or connected to Rockstar Games or Take-Two Interactive, and the render is not captured gameplay. Label the post as AI when you publish.'],
      ['Can we make one as just friends?', 'Yes — the format works for any two adults who agree: best friends, siblings, teammates. The roles are labeled driver and passenger, not spouses; who drives is the only casting decision the template actually asks you to make.'],
    ['Which resolution should we pick?', 'Both options render the same five shots at 15 seconds; 720p is the better choice for the neon-avenue shot and the rooftop kiss, where the details are densest. The photos, roles and duration are identical either way.'],
    ['Does the film come with sound?', 'Yes — the render carries generated scene audio (engine, rotors, city) with no dialogue and no licensed music. Post it with the AI label on; if you want a song behind it, add one from the TikTok, Reels or Shorts library.'],
    ['Will our faces match the photos exactly?', 'Both faces are redrawn in the game\'s 3D style, so the match is "clearly you", not pixel-perfect. Hairstyles and outfits carry through best; every render differs slightly, and you can generate again if a take misses. Failed renders are refunded.'],
    ['Do we both need to agree before we generate?', 'Yes — the video closes on a kiss, so both people must be adults who agreed to appear before you upload their photos. That consent is a requirement, not a courtesy, and it applies to every re-render.'],
    ['Can we use one couple photo instead of two singles?', 'No — upload two separate single-person portraits so the driver and the passenger each get a clear face. A group or couple photo blurs both roles at once and weakens every shot.'],
    ],
    faqZh: [
      ['GTA 6 Lovers on the Run 是什么？', '它是 ViralReel 的一个模板：两张照片生成 15 秒 9:16 的 GTA VI 风格追逐爱情：肌肉车漂移、车内探照灯、霓虹大道飞驰、消防梯狂奔，以及直升机下的慢镜头天台之吻。第一张照片开车，第二张坐副驾。'],
      ['做一条 GTA 6 Lovers on the Run 视频要多少钱？', cost('GTA 6 Lovers on the Run', 'GTA 6 Lovers on the Run').zh],
      ['免费吗？', '不免费。ViralReel 没有免费积分——生成按钮开始前会显示确切费用，失败或取消的生成自动退回。积分包：viralreel.app/zh/pricing；月付：viralreel.app/zh/subscribe。'],
      ['生成要多久？', '15 秒的成片大约 2-3 分钟。渲染时保持页面打开；失败会退回积分。'],
      ['五个镜头里会发生什么？', '镜头 1：肌肉车在湿弯漂移，两辆警车紧随。镜头 2：挡风玻璃内——司机握方向盘，副驾回头张望，探照灯扫进车厢。镜头 3：直升机压低飞过霓虹大道。镜头 4：后巷急停、冲上消防梯。镜头 5：慢镜头天台之吻，镜头环绕，远处警灯闪烁。'],
      ['哪张照片放第一？', '第一张是司机，第二张是副驾——对调照片就是对调座位。每张都应该是分开的、正脸、光线均匀的单人成年人人像。发型保留得最稳，挑发型就是你想在片中呈现的样子的照片。'],
      ['成片是什么画幅？', '9:16 竖屏，五个电影感镜头——这条趋势在 TikTok、Reels 和 Shorts 上的格式。也可以选 16:9 或 1:1，但镜头是按竖屏构图的。'],
      ['吻戏镜头适合发出去吗？', '这个吻是电影感的慢镜头，没有露骨内容，任何镜头也没有武器。视频里的两个人必须是同意一起出镜的成年人——这个同意要在生成之前拿到，而不是发布之后。'],
      ['这是官方 GTA 6 内容吗？', '不是。它是受 GTA VI 杰森与露西亚设定启发的粉丝向 AI 视觉内容。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联、未获背书，成片也不是实机录制。发布时请标注 AI。'],
      ['朋友俩可以一起做吗？', '可以——这个格式适合任何同意出镜的两位成年人：挚友、兄弟姐妹、队友。上传位写的是司机和副驾，不是夫妻；谁开车是模板唯一真正要你决定的选角问题。'],
    ['我们该选哪个分辨率？', '两档渲染的都是同样的五个镜头、15 秒；霓虹大道和天台之吻两镜细节最密，720p 更占优势。无论选哪档，照片、角色和时长都一样。'],
    ['成片带声音吗？', '带——渲染会带上生成的场景声音（引擎、旋翼、城市环境声），没有对白也没有授权音乐。发布时打开 AI 标注；想要配乐就从 TikTok、Reels 或 Shorts 曲库里加。'],
    ['我们的脸会和照片一模一样吗？', '两张脸都会按游戏 3D 画风重绘，效果是「一眼认出是你」，不是逐像素复刻。发型和穿搭保留得最好；每次渲染略有差异，不满意可以重做。失败的渲染自动退回积分。'],
    ['生成前我们俩都需要同意吗？', '需要——视频结尾是吻戏，所以两个人都必须是同意出镜的成年人，然后才能上传照片。这个同意是硬性要求，每次重新生成也同样适用。'],
    ['可以用一张情侣合照代替两张单人照吗？', '不可以——请上传两张分开的单人正脸照，让司机和副驾各有一张清晰的脸。合照会让两个角色同时变糊，影响所有镜头。'],
    ],
  },

  // ────────────────────────── GTA 6 Vice City Story ──────────────────────────
  {
    slug: 'gta-6-vice-city-story',
    family: 'gta6_vice_city_story',
    templateId: 'gta-6-vice-city-story',
    duration: 15,
    photos: 1,
    ratio: ['16:9 landscape — auto follows the 16:9 reference', '16:9 横版——auto 画幅跟随 16:9 参考片'],
    name: ['GTA 6 Vice City Story', 'GTA 6 Vice City Story 都市故事'],
    h1: ['GTA 6 Vice City Story — a six-shot landscape crime saga', 'GTA 6 Vice City Story — 六镜头横版罪恶都市故事'],
    badge: ['The one widescreen format in the series', '本系列唯一的横版格式'],
    pitch: [
      'One photo makes you the lead of a 15-second 16:9 game-cutscene story: a neon street intro, a beach meetup, a diner bag grab, a coastal chase, and a hero close-up under the neon to close.',
      '一张照片让你主演 15 秒 16:9 游戏过场故事：霓虹街头亮相、海边会合、餐厅取包、滨海追逐，最后回到霓虹灯下的主角特写收尾。',
    ],
    meta: {
      title: [
        'GTA 6 Vice City Story – Landscape AI Cutscene from One Photo',
        'GTA 6 Vice City Story：一张照片做横版 AI 过场故事',
      ],
      description: [
        'GTA 6 Vice City Story on ViralReel: one photo becomes a 15-second, 16:9 GTA VI-style cutscene story in six shots — neon intro, beach meetup, diner pickup, coastal chase, hero close-up. Rendered in about 2–3 minutes. Fan-made AI content, not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Vice City Story：一张照片生成 15 秒 16:9、六镜头的 GTA VI 风格过场故事——霓虹亮相、海边会合、餐厅取包、滨海追逐、主角特写。约 2-3 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 vice city story, gta 6 vice city ai video, gta 6 cutscene ai, gta 6 story from photo, gta 6 landscape ai video, vice city ai template',
        'gta 6 vice city story, gta 6 罪恶都市 ai 视频, gta 6 过场 ai, 照片生成 gta 6 故事, gta 6 横版 ai 视频, 罪恶都市 ai 模板',
      ],
    },
    accent: ['#22d3ee', '#155e75'],
    uploadHints: ['/templates/gta6-vice-source.jpg'],
    showcase: {
      heading: ['One photo becomes the lead of a six-shot story', '一张照片成为六镜头故事的主角'],
      beforeAlt: ['Example source photo for GTA 6 Vice City Story — one clear front-facing portrait', 'GTA 6 Vice City Story 的示例原图——一张清晰正脸人像'],
      afterAlt: ['GTA 6 Vice City Story result: the same person as the lead of a landscape game-cutscene story', 'GTA 6 Vice City Story 效果：同一个人主演横版游戏过场故事'],
      note: [
        'Your photo decides only the lead — the two accomplices, the diner contact and the chase are generated by the scene. The story repeats your face at the intro, in the cab and in the closing close-up, so a clear front-facing photo of one adult is the single input this template needs.',
        '你的照片只决定主角——两位同伙、餐厅接头人和追逐戏都由场景生成。故事会在开场、驾驶室和结尾特写反复给到你的脸，所以一张清晰正脸的单人成年人照片就是这条模板需要的全部输入。',
      ],
    },
    scenes: [
      {
        name: ['Shot 1 · Neon intro', '镜头 1 · 霓虹亮相'],
        desc: ['A close-up under rain-slick neon street signs introduces the lead — your face, set against the city.', '雨后湿亮的霓虹街牌下的人物近景介绍主角——你的脸，衬着整座城市。'],
      },
      {
        name: ['Shot 2 · Beach meetup', '镜头 2 · 海边会合'],
        desc: ['Golden hour by the water: you meet two accomplices beside a dark muscle car under the palms.', '水边的黄金时刻：你在棕榈树下的深色肌肉车旁与两位同伙碰面。'],
      },
      {
        name: ['Shot 3 · The diner', '镜头 3 · 餐厅接头'],
        desc: ['Inside a warmly lit diner, you take the duffel bag off the table.', '暖色灯光的餐厅里，你从桌上拿起旅行包。'],
      },
      {
        name: ['Shot 4 · Coastal chase', '镜头 4 · 滨海追逐'],
        desc: ['A coastal-highway run with police lights strobing in the mirror and a searchlight raking the road.', '滨海公路狂飙，后视镜里警灯闪烁，探照光扫过路面。'],
      },
      {
        name: ['Shot 5 · Cab close-up', '镜头 5 · 驾驶室特写'],
        desc: ['Through the windshield: your face, set and focused, hands steady on the wheel.', '挡风玻璃内：你的脸，沉着专注，双手稳稳握着方向盘。'],
      },
      {
        name: ['Shot 6 · Hero shot', '镜头 6 · 主角收尾'],
        desc: ['Back under the neon, a confident final pose beside the car closes the story.', '回到霓虹灯下，车旁一个自信的收尾姿势结束整个故事。'],
      },
    ],
    photoTips: [
      'A front-facing or slightly angled portrait of one adult, evenly lit and in focus, head-and-shoulders or half-body. The face is re-rendered in the game\'s cutscene style, so eyes, nose and mouth must be clear; skip sunglasses, masks, heavy beautification and distant shots. The lead\'s wardrobe can shift between shots — if you care about the outfit, a photo with an open jacket over a plain shirt survives the render most consistently.',
      '一位成年人的正脸或轻微侧脸人像，光线均匀、对焦清楚，头肩照或半身照都可以。脸会按游戏过场风格重绘，所以眼睛、鼻子和嘴必须清晰；不要墨镜、口罩、重度美颜和远景小人。主角的穿搭在镜头间可能变化——在意造型的话，开衫配浅色内搭的照片在渲染里最稳。',
    ],
    howTo: [
      {
        name: ['Upload one portrait', '上传一张人像'],
        text: ['Open GTA 6 Vice City Story and upload one clear photo of one adult — front-facing or slightly angled, eyes visible. This is the only input; accomplices and extras are generated by the scene.', '打开 GTA 6 Vice City Story，上传一张清晰的单人成年人照片——正脸或轻微侧脸，眼睛可见。这是唯一输入；同伙和路人由场景生成。'],
      },
      {
        name: ['Leave the ratio on auto (16:9)', '画幅保持 auto（16:9）'],
        text: ['The template renders in 16:9 landscape — the only widescreen format in the GTA 6 series. The ratio control defaults to auto, which follows the 16:9 reference clip; leave it untouched unless you specifically want a vertical reframe.', '这条模板输出 16:9 横版——GTA 6 系列里唯一的宽屏格式。画幅控件默认 auto，会跟随 16:9 参考片；除非你明确想要竖版重构图，否则不要动它。'],
      },
      {
        name: ['Generate the 15-second story', '生成 15 秒故事'],
        text: ['The clip is locked to 15 seconds with the six shots in order. Choose the resolution, check the credit cost on the button, and start the render — it usually takes 2–3 minutes, and failures are refunded.', '成片固定 15 秒，六个镜头按顺序。选好分辨率，看清按钮上的积分，开始渲染——通常 2-3 分钟，失败会退回。'],
      },
      {
        name: ['Post it where widescreen wins', '发到横版吃香的地方'],
        text: ['Download the MP4 and use it as a channel intro on YouTube, a gaming-account character trailer, or the opening of your own gameplay compilation. Landscape fills with cars, palms and city light — that is the point of this format.', '下载 MP4，用作 YouTube 频道片头、游戏账号的角色预告，或你自己游戏合集的开场。横版画面装得下跑车、棕榈和城市灯光——这就是这个格式的意义。'],
      },
    ],
    trend: [
      {
        heading: ['What is the Vice City Story trend?', 'Vice City Story 趋势是什么？'],
        text: [
          'It is the cinematic branch of the GTA 6 AI wave: instead of a chase or a dance, it tells a six-beat crime story in the game\'s cutscene style — meet the crew, take the bag, outrun the heat, end on the hero. Vice City is the setting GTA fans have waited over twenty years to return to, and launch week (the game shipped 19 November 2026) turned any cutscene-styled clip into instant content.',
          '它是 GTA 6 AI 热潮的电影线：不追车也不跳舞，而是用游戏过场风格讲一个六拍犯罪故事——认识同伙、拿起包、甩掉追捕、主角收尾。罪恶都市是玩家等了二十多年才等回的舞台，发售周（游戏于 2026 年 11 月 19 日发售）让任何过场风格的片段都成了即时内容。',
        ],
      },
      {
        heading: ['Why a widescreen format exists at all', '为什么会有一个横版格式'],
        text: [
          'Every other format in this series is vertical because TikTok, Reels and Shorts are vertical. The Vice City Story format is 16:9 on purpose: cutscenes are how GTA actually tells stories, and a landscape frame fits the whole crew, the car, the palms and the skyline in one composition. It is the branch built for YouTube, gaming channels and compilations — the places game trailers actually live.',
          '本系列其他格式都是竖屏，因为 TikTok、Reels 和 Shorts 是竖屏的。Vice City Story 刻意做成 16:9：过场动画才是 GTA 真正讲故事的方式，横版构图能同时装下整个团队、车、棕榈树和天际线。它是为 YouTube、游戏频道和合集准备的分支——游戏预告片真正 living 的地方。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 15-second 16:9 MP4 with sound, rendered in the game\'s cutscene look. Your photo provides the lead only — it is a personal fan trailer, not real gameplay, not a Rockstar cutscene, and it does not modify any game files. ViralReel (viralreel.app) is independent and not affiliated with Rockstar Games or Take-Two Interactive. Use a photo of an adult who agreed to appear, and label the post as AI.',
          '下载的是一条新的 15 秒 16:9 MP4，带声音，按游戏过场质感渲染。你的照片只提供主角——这是个人粉丝预告，不是真实机、不是 Rockstar 过场，也不会修改任何游戏文件。ViralReel（viralreel.app）是独立站点，与 Rockstar Games 或 Take-Two Interactive 无关联。使用已同意出镜的成年人照片，发布时标注 AI。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Vice City Story?', 'It is a ViralReel template that turns one photo into a 15-second, 16:9 landscape story in the GTA VI cutscene style, in six fixed shots: neon street intro, beach meetup with two accomplices, diner bag pickup, coastal-highway chase, in-cab close-up, and a final hero shot under the neon.'],
      ['How much does a GTA 6 Vice City Story video cost?', cost('GTA 6 Vice City Story', 'GTA 6 Vice City Story').en],
      ['Is it free?', 'No. Every render is paid; the exact cost shows on the generate button before you start. ViralReel does not offer free credits, and failed or canceled renders are refunded. Packs: viralreel.app/pricing; monthly: viralreel.app/subscribe.'],
      ['How long does the render take?', 'About 2–3 minutes for the 15-second clip. Keep the tab open; the progress bar shows the stages, and failed renders return the credits automatically.'],
      ['What happens in the six shots?', 'Shot 1: your close-up under rain-slick neon. Shot 2: the beach meetup beside the dark muscle car. Shot 3: the diner, where you take the duffel bag. Shot 4: the coastal-highway chase with police lights behind. Shot 5: the in-cab close-up of your face. Shot 6: the confident hero pose beside the car under the neon.'],
      ['Why is this one 16:9 landscape?', 'Because it is built like a game cutscene: the widescreen frame holds the crew, the car, the palms and the skyline together, which is what a story format needs. The generator\'s ratio control defaults to auto and follows the 16:9 reference; the other five GTA 6 formats are 9:16 vertical.'],
      ['What photo should I upload?', 'One adult, front-facing or slightly angled, evenly lit and in focus — head-and-shoulders or half-body. Only the lead comes from your photo; the accomplices are generated. Skip sunglasses, masks, heavy beautification and faraway shots.'],
      ['Where should I post a landscape GTA 6 video?', 'YouTube and gaming channels are the natural home: channel intros, character trailers, and the opening of gameplay compilations. It also plays fine on X and Discord where landscape clips are standard.'],
      ['Is this official Rockstar content?', 'No. It is fan-made AI content styled after GTA VI cutscenes — not captured gameplay and not official material. ViralReel is not affiliated with Rockstar Games or Take-Two Interactive. Label the post as AI-generated.'],
      ['Can my friends be the accomplices?', 'No — the template accepts exactly one photo, and it casts the lead. The two accomplices, the diner contact and the chase drivers are all generated by the scene, so a group photo will not distribute your friends into those roles.'],
    ['Which resolution should I pick for a 16:9 clip?', '720p is the recommended pick: on a widescreen frame the extra detail shows in the diner interior, the chase and the closing hero shot. The story, duration and photo count are identical at 480p.'],
    ['Does the story include dialogue or music?', 'No dialogue — the audio is generated scene sound (city, engine, diner ambience). ViralReel does not license any game soundtrack, so add music from your publishing app\'s library and keep the AI-generated label on.'],
    ['Will my outfit stay the same across the six shots?', 'The face and build carry through all six shots; wardrobe can shift between scenes because each is rendered separately. If the outfit matters to you, choose a photo with an open jacket over a plain shirt — that combination survives the render most consistently.'],
    ['Can I direct the two accomplices to be my friends?', 'No — the template accepts exactly one photo, which casts the lead. The accomplices, the diner contact and the drivers are generated by the scene, so there is no way to assign friends to those roles.'],
    ['Is my photo kept private?', 'Your photo is used to generate your video only; it does not become a public template or a reusable character. Upload a photo of yourself or of an adult who agreed to appear, and never a minor or a celebrity.'],
    ],
    faqZh: [
      ['GTA 6 Vice City Story 是什么？', '它是 ViralReel 的一个模板：一张照片生成 15 秒 16:9 横版、GTA VI 过场风格的六镜头故事：霓虹街头亮相、海边与两位同伙会合、餐厅取包、滨海公路追逐、驾驶室特写、霓虹灯下的主角收尾。'],
      ['做一条 GTA 6 Vice City Story 视频要多少钱？', cost('GTA 6 Vice City Story', 'GTA 6 Vice City Story').zh],
      ['免费吗？', '不免费。每次渲染都计费；开始前生成按钮上会显示确切费用。ViralReel 不提供免费积分，失败或取消的生成会退回。积分包：viralreel.app/zh/pricing；月付：viralreel.app/zh/subscribe。'],
      ['生成要多久？', '15 秒的成片大约 2-3 分钟。保持页面打开；进度条会显示各阶段，失败自动退回积分。'],
      ['六个镜头里会发生什么？', '镜头 1：雨后霓虹下的人物近景。镜头 2：深色肌肉车旁的海边会合。镜头 3：餐厅，你拿起旅行包。镜头 4：滨海公路追逐，警灯在后。镜头 5：驾驶室里你的脸部特写。镜头 6：霓虹灯下车旁的自信收尾。'],
      ['为什么这条是 16:9 横版？', '因为它按游戏过场动画构建：横版构图能同时装下同伙、车、棕榈树和天际线，这是故事格式的需要。生成器的画幅控件默认 auto 并跟随 16:9 参考片；本系列其他五个格式都是 9:16 竖屏。'],
      ['应该上传什么照片？', '一位成年人，正脸或轻微侧脸，光线均匀、对焦清楚——头肩照或半身照。只有主角来自你的照片；同伙由场景生成。不要墨镜、口罩、重度美颜和远景小人。'],
      ['横版 GTA 6 视频适合发在哪里？', 'YouTube 和游戏频道是天然主场：频道片头、角色预告、游戏合集开场。在 X 和 Discord 这类横版为主的地方也很合适。'],
      ['这是 Rockstar 官方内容吗？', '不是。它是 GTA VI 过场风格的粉丝向 AI 内容——不是实机录制，也不是官方素材。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联。发布时请标注 AI 生成。'],
      ['可以让朋友演同伙吗？', '不行——这条模板只接受一张照片，而且只选主角。两位同伙、餐厅接头人和追逐司机都由场景生成，合照不会把朋友们分配进那些角色。'],
    ['16:9 横版该选哪个分辨率？', '推荐 720p：横版画幅上，餐厅内景、追逐戏和结尾主角镜头的细节差别最明显。480p 的剧情、时长和照片数完全一样。'],
    ['故事里有对白或配乐吗？', '没有对白——声音是生成的场景声（城市、引擎、餐厅环境声）。ViralReel 不授权任何游戏配乐，发布时从 App 曲库加音乐，并保持 AI 生成标注开启。'],
    ['我的穿搭在六个镜头里会保持一致吗？', '脸和身形贯穿全部六个镜头；穿搭可能随镜头切换而变化，因为每个镜头是单独渲染的。在意造型的话，选一张开衫配浅色内搭的照片——这个组合在渲染里最稳定。'],
    ['可以让两位同伙由我的朋友来演吗？', '不可以——这条模板只接受一张照片，只选主角。同伙、餐厅接头人和追逐司机都由场景生成，没有办法把朋友分配进那些角色。'],
    ['我上传的照片会保密吗？', '照片只用于生成你的视频，不会变成公开模板或可复用角色。上传你自己的照片或已同意出镜的成年人照片，绝不上传未成年人和名人。'],
    ],
  },

  // ───────────────────────────── GTA 6 Nightclub ─────────────────────────────
  {
    slug: 'gta-6-nightclub',
    family: 'gta6_nightclub',
    templateId: 'gta-6-nightclub',
    duration: 12,
    photos: 1,
    ratio: ['9:16 vertical, three hard cuts', '9:16 竖屏，三个硬切镜头'],
    name: ['GTA 6 Nightclub', 'GTA 6 Nightclub 夜店之夜'],
    h1: ['GTA 6 Nightclub — from supercar to dance floor in three cuts', 'GTA 6 Nightclub — 三个镜头，从超跑跳进舞池'],
    badge: ['The launch-night party format', '发售之夜的派对格式'],
    pitch: [
      'One photo rides a supercar to a neon Vice City nightclub, walks past the velvet rope, and ends up dancing in the middle of a packed floor — 12 seconds, three cuts, your outfit carried straight from the photo.',
      '一张照片开着超跑来到霓虹夜店门口，越过天鹅绒围绳，最后在挤满人的舞池中央跳舞——12 秒，三个硬切，穿搭直接从照片带过去。',
    ],
    meta: {
      title: [
        'GTA 6 Nightclub – AI Dance Clip from One Photo, Supercar to Dance Floor',
        'GTA 6 Nightclub：一张照片做超跑进夜店的 AI 跳舞视频',
      ],
      description: [
        'GTA 6 Nightclub on ViralReel: one photo becomes a 12-second, 9:16 GTA VI-style club night in three shots — supercar arrival, walk past the bouncer, dancing in the center of the packed floor. Rendered in about 2–3 minutes. Fan-made AI content, not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Nightclub：一张照片生成 12 秒 9:16、三镜头的 GTA VI 风格夜店之夜——超跑到场、越过保安、舞池中央跳舞。约 2-3 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 nightclub, gta 6 nightclub ai, gta 6 dance ai video, gta 6 vice city club template, gta 6 party ai, nightclub ai from photo',
        'gta 6 nightclub, gta 6 夜店 ai, gta 6 跳舞 ai 视频, gta 6 罪恶都市夜店模板, gta 6 派对 ai, 照片生成夜店 ai',
      ],
    },
    accent: ['#c084fc', '#4c1d95'],
    uploadHints: ['/templates/gta6-nightclub-source.jpg'],
    showcase: {
      heading: ['What you wear in the photo is what you wear in the club', '照片里穿什么，夜店里就穿什么'],
      beforeAlt: ['Example source photo for GTA 6 Nightclub — one clear front-facing portrait', 'GTA 6 Nightclub 的示例原图——一张清晰正脸人像'],
      afterAlt: ['GTA 6 Nightclub result: the same person dancing in a GTA VI-style club', 'GTA 6 Nightclub 效果：同一个人在 GTA VI 风格夜店里跳舞'],
      note: [
        'This template carries your outfit as well as your face: the person who steps out of the scissor doors and the one dancing under the lasers wear the clothes from the photo. That makes a half-body or full-body photo in your going-out clothes the best input — the club look is decided before you generate.',
        '这条模板带走的除了脸还有穿搭：从剪刀门下车的人和激光下跳舞的人穿的都是照片里的衣服。所以最好的输入是一张穿着出门行头的半身或全身照——夜店造型在生成之前就定了。',
      ],
    },
    scenes: [
      {
        name: ['Shot 1 · The arrival', '镜头 1 · 到场'],
        desc: ['Night: a low supercar glides down a neon beachfront street and parks at the glowing club entrance, velvet rope out, bouncer on the door.', '夜色里：一辆低趴超跑沿霓虹海滨街道滑行，停在发光的夜店门口，天鹅绒围绳拉开，保安站门。'],
      },
      {
        name: ['Shot 2 · The walk-in', '镜头 2 · 进场'],
        desc: ['The scissor door lifts; you step out facing the camera and walk straight past the bouncer into the neon doorway.', '剪刀门升起；你面向镜头下车，径直越过保安走进霓虹门洞。'],
      },
      {
        name: ['Shot 3 · The floor', '镜头 3 · 舞池'],
        desc: ['Inside a packed club — lasers through smoke, DJ booth glowing — you own the center of the floor while the camera orbits and the crowd cheers.', '挤满人的场子里——激光穿过烟雾、DJ 台发光——你占住舞池中央，镜头环绕，人群欢呼。'],
      },
    ],
    photoTips: [
      'Pick the outfit first: the clothes in your photo are the clothes in the club, so a half-body or full-body shot in your going-out clothes beats a tight face crop. Then check the face: the walk-out moment in shot 2 is where it reads, so a clear, evenly-lit front-facing photo of one adult wins. The dance moves are generated — your photo does not need to show you dancing. The neon sign above the door sometimes invents letters; treat it as set dressing.',
      '先挑衣服：照片里穿什么，夜店里就穿什么，所以穿出门行头的半身或全身照胜过脸部特写。再看脸：镜头 2 下车那一刻是验脸时刻，清晰、光线均匀的单人正脸成年人照片最好。舞步由模板生成——照片不需要你在跳舞。门口的霓虹招牌有时会拼出不存在的字母，把它当布景就好。',
    ],
    howTo: [
      {
        name: ['Upload a going-out photo', '上传一张出门行头的照片'],
        text: ['Open GTA 6 Nightclub and upload one photo of one adult in the outfit you want on the dance floor — half-body or full-body, front-facing, well lit.', '打开 GTA 6 Nightclub，上传一张穿着你想在舞池里穿的衣服的单人成年人照片——半身或全身、正脸、光线充足。'],
      },
      {
        name: ['Keep the 12-second spec', '保持 12 秒规格'],
        text: ['The clip is locked to 12 seconds with three fixed cuts. Framing defaults to 9:16 vertical — 16:9 and 1:1 are selectable in the generator. Pick 480p or 720p (1080p is available on the Popular plan and above) — 720p pays off most in the laser-lit dance-floor shot where details are dense.', '成片固定 12 秒，三个固定硬切。默认 9:16 竖屏，生成器里也可选 16:9 或 1:1。选 480p 或 720p（1080p 为 Popular 及以上方案权益）——灯光密集的舞池镜头最能体现 720p 的价值。'],
      },
      {
        name: ['Generate and wait 2–3 minutes', '生成，等 2-3 分钟'],
        text: ['Check the credit cost, start the render, and keep the tab open. Generation usually takes 2–3 minutes; failed or canceled renders return your credits automatically.', '看清积分，开始渲染，保持页面打开。生成通常 2-3 分钟；失败或取消自动退回积分。'],
      },
      {
        name: ['Post it as your launch-night plan', '当作发售之夜的去处发出去'],
        text: ['Download the MP4 and post it on launch night with a caption about where you actually are — on the couch, controller in hand. It also works as a birthday drop for a friend, or as the night-time sequel to your GTA 6 Trailer AI clip.', '下载 MP4，在发售当晚配上你此刻真实所在地的文案发出去——沙发上、手柄在手。也可以给朋友做生日投放，或者当作 GTA 6 Trailer AI 片段的夜晚续集。'],
      },
    ],
    trend: [
      {
        heading: ['What is the GTA 6 Nightclub trend?', 'GTA 6 Nightclub 趋势是什么？'],
        text: [
          'It is the nightlife branch of the GTA 6 AI wave: three cuts that take one person from a supercar arrival to the center of a Vice City dance floor. GTA VI\'s launch (19 November 2026) made every club-and-neon clip instantly readable as GTA content, and nightclubs have been part of the series\' fantasy since the original Vice City radio stations — this template is that fantasy with your face and your outfit in it.',
          '它是 GTA 6 AI 热潮的夜生活线：三个硬切，把一个人从超跑送到罪恶都市舞池中央。GTA VI 发售（2026 年 11 月 19 日）让任何夜店加霓虹的片段都立刻能被读成 GTA 内容，而从初代罪恶都市的电台开始，夜店就是这个系列幻想的一部分——这条模板就是把你的脸和穿搭放进那个幻想里。',
        ],
      },
      {
        heading: ['Why the outfit detail matters', '为什么穿搭细节是关键'],
        text: [
          'Most photo-to-video trends carry the face and improvise the wardrobe; this format carries both, because the whole arc is about arriving in style — the car, the rope, the floor. That turns photo choice into a casting decision: what you upload is literally what you wear in the film. It is the rare template where the outfit is content, not noise.',
          '大多数照片转视频的趋势只带走脸、穿搭靠发挥；这个格式两个都带走，因为整条弧线讲的就是「盛装到场」——车、围绳、舞池。这让选照片变成了选角决策：你上传什么，片子里就穿什么。穿搭即内容而非噪点，这样的模板很少见。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 12-second 9:16 MP4 with club audio generated by the model. It is fan-made AI content styled after GTA VI — not a real club, not recorded gameplay, not official material. ViralReel (viralreel.app) is not affiliated with Rockstar Games or Take-Two Interactive. Use a photo of an adult who agreed to appear, and publish with the AI label on.',
          '下载的是一条新的 12 秒 9:16 MP4，夜店音效由模型生成。它是 GTA VI 风格的粉丝向 AI 内容——不是真的夜店、不是录制的实机、也不是官方素材。ViralReel（viralreel.app）与 Rockstar Games 或 Take-Two Interactive 无关联。使用已同意出镜的成年人照片，发布时打开 AI 标注。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Nightclub?', 'It is a ViralReel template that turns one photo into a 12-second, 9:16 GTA VI-style club night in three fixed cuts: a supercar pulling up to a neon nightclub, you stepping out and walking past the bouncer, and you dancing in the center of a packed, laser-lit floor while the camera orbits.'],
      ['How much does a GTA 6 Nightclub video cost?', cost('GTA 6 Nightclub', 'GTA 6 Nightclub').en],
      ['Is it free?', 'No. ViralReel does not offer free credits — the exact cost shows on the generate button before you start, and failed renders are refunded automatically. Credit packs: viralreel.app/pricing; monthly plans: viralreel.app/subscribe.'],
      ['How long does the render take?', 'About 2–3 minutes for the 12-second clip. Keep the tab open while it renders; failed or canceled renders return your credits.'],
      ['What happens in the three shots?', 'Shot 1: the supercar glides up to the velvet-roped club entrance at night. Shot 2: you step out of the scissor doors facing the camera and walk past the bouncer inside. Shot 3: you dance in the center of the packed floor — lasers, smoke, DJ booth — while the camera circles you.'],
      ['Does my outfit carry into the video?', 'Yes — that is this template\'s signature. The face, hairstyle, build and clothes from your photo are what appear in the club, so upload a half-body or full-body photo in the outfit you want. A face-only crop leaves the wardrobe to the template.'],
      ['What aspect ratio is it?', '9:16 vertical across three cuts — the format TikTok, Reels and Shorts use. 16:9 and 1:1 are selectable, but the club shots are framed for vertical.'],
      ['Do I need a photo of me dancing?', 'No. The dance moves are generated by the template; your photo only needs you standing clearly in your outfit. A normal front-facing portrait works.'],
      ['Is this a real nightclub or official content?', 'No. It is fan-made AI visual content styled after GTA VI\'s Vice City nightlife — the club is generated, and the neon sign sometimes invents letters. ViralReel is not affiliated with Rockstar Games or Take-Two Interactive. Label your post as AI-generated.'],
      ['Can I make one for a friend\'s birthday?', 'Yes — with their permission and a going-out photo they approve, one adult per photo. Pairs well as a launch-night gift: "you were at the club, I was on the couch." Do not use photos of minors or celebrities.'],
      ['Which resolution looks sharpest for a club video?', '720p. The dance-floor shot is the densest frame of the clip — lasers, smoke, crowd — so the difference shows there first. Both tiers render the same three hard cuts and the same 12 seconds.'],
      ['What music is in the video?', 'The clip carries generated club sound — room feel, crowd, beat energy — no licensed track. ViralReel does not license music; add your own track in the TikTok, Reels or Shorts editor and keep the AI-generated label on.'],
      ['I am just standing in my photo — will the video dance?', 'Yes — the choreography is generated by the template. Your photo only needs you standing clearly in your going-out outfit; a normal front-facing portrait is enough.'],
      ['Will the club name or neon sign be real?', 'No — the venue is generated and the neon sign sometimes invents letters. Treat it as a set. ViralReel is not affiliated with any club, and the clip is not real footage.'],
      ['Is my uploaded photo kept private?', 'Your photo is used only to render your clip. Upload your own photo or one of an adult who agreed to appear; never upload minors or celebrities. The outfit you upload is the outfit in the club, so pick it first.'],
    ],
    faqZh: [
      ['GTA 6 Nightclub 是什么？', '它是 ViralReel 的一个模板：一张照片生成 12 秒 9:16、三个固定硬切的 GTA VI 风格夜店之夜：超跑停在霓虹夜店门口，你下车越过保安进场，最后在挤满人、激光乱舞的舞池中央跳舞，镜头环绕。'],
      ['做一条 GTA 6 Nightclub 视频要多少钱？', cost('GTA 6 Nightclub', 'GTA 6 Nightclub').zh],
      ['免费吗？', '不免费。ViralReel 不提供免费积分——开始前生成按钮上会显示确切费用，失败自动退回积分。积分包：viralreel.app/zh/pricing；月付：viralreel.app/zh/subscribe。'],
      ['生成要多久？', '12 秒的成片大约 2-3 分钟。渲染时保持页面打开；失败或取消会退回积分。'],
      ['三个镜头里会发生什么？', '镜头 1：夜晚超跑滑行停在拉着天鹅绒围绳的夜店门口。镜头 2：你从剪刀门下车面向镜头，越过保安走进场内。镜头 3：你在挤满人的舞池中央跳舞——激光、烟雾、DJ 台——镜头绕着你转。'],
      ['我的穿搭会带进视频吗？', '会——这正是这条模板的招牌。夜库里出现的就是照片里的脸、发型、身形和衣服，所以上传一张你想要造型的半身或全身照。只拍脸的特写会把穿搭交给模板自由发挥。'],
      ['成片是什么画幅？', '9:16 竖屏、三个硬切——TikTok、Reels 和 Shorts 的格式。也可以选 16:9 或 1:1，但夜店镜头是按竖屏构图的。'],
      ['需要我在跳舞的照片吗？', '不需要。舞步由模板生成；照片只需要你清楚站着、穿着想穿的行头。普通正脸照就可以。'],
      ['这是真的夜店或官方内容吗？', '不是。它是 GTA VI 罪恶都市夜生活风格的粉丝向 AI 视觉内容——夜店是生成的，霓虹招牌有时会拼出不存在的字母。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联。发布时请标注 AI 生成。'],
      ['可以给朋友做生日投放吗？', '可以——征得同意并使用对方认可的出门照，每张照片一位成年人。很适合当发售之夜的礼物：「你在夜店，我在沙发。」不要使用未成年人或名人的照片。'],
    ['哪个分辨率看夜店最清楚？', '720p。舞池镜头是全片信息最密的一帧——激光、烟雾、人群——细节差别在那里最明显。两档渲染的都是同样的三个硬切、12 秒。'],
    ['视频里的音乐是什么？', '成片带生成的夜店声音——场地感、人群、节拍感——没有授权曲目。ViralReel 不授权音乐，在 TikTok、Reels 或 Shorts 编辑器里加你的音乐，并保持 AI 标注开启。'],
    ['照片里我是站着的，视频里会跳舞吗？', '会——舞步由模板生成。照片只需要你穿着出门行头清楚站立，普通正脸照就可以。'],
    ['夜店名字或霓虹招牌会是真的吗？', '不会——场地是生成的，霓虹招牌有时会拼出不存在的字母。把它当布景就好。ViralReel 与任何夜店无关联，成片也不是实拍录像。'],
    ['我上传的照片会保密吗？', '照片只用于渲染你的片段。上传你自己的照片或已同意出镜的成年人照片；绝不上传未成年人和名人。你上传的穿搭就是夜店里的穿搭，所以先挑衣服。'],
    ],
  },

  // ───────────────────────────── GTA 6 Getaway Duo ─────────────────────────────
  {
    slug: 'gta-6-getaway-duo',
    family: 'gta6_getaway_duo',
    templateId: 'gta-6-getaway-duo',
    duration: 12,
    photos: 2,
    ratio: ['9:16 vertical, four getaway shots', '9:16 竖屏，四个逃亡镜头'],
    name: ['GTA 6 Getaway Duo', 'GTA 6 Getaway Duo 双人逃亡'],
    h1: ['GTA 6 Getaway Duo — two photos, one muscle car, zero dialogue', 'GTA 6 Getaway Duo — 两张照片，一辆肌肉车，全程无对白'],
    badge: ['No weapons, chase optional charm', '全程无武器，追逐只负责气氛'],
    pitch: [
      'Two photos — a driver and a bag partner — become a 12-second GTA VI-style getaway: face scarves at the gas station, a sprint from the convenience store, laughing in the cab with police lights behind, and a palm-highway charge at the camera.',
      '两张照片——司机和拿包搭档——变成 12 秒 GTA VI 风格逃亡：加油站拉面巾、冲出便利店、警灯之下车内大笑，最后沿棕榈公路冲向镜头。',
    ],
    meta: {
      title: [
        'GTA 6 Getaway Duo – Two-Photo AI Getaway Video with a Friend',
        'GTA 6 Getaway Duo：两张照片和朋友一起做 AI 逃亡视频',
      ],
      description: [
        'GTA 6 Getaway Duo on ViralReel: two photos become a 12-second, 9:16 GTA VI-style getaway in four shots — gas-station scarves, convenience-store sprint, in-cab laughter with police lights, palm-highway charge. Rendered in about 2–3 minutes. Fan-made AI content, not affiliated with Rockstar Games.',
        'ViralReel 的 GTA 6 Getaway Duo：两张照片生成 12 秒 9:16、四镜头的 GTA VI 风格逃亡——加油站面巾、便利店冲刺、车内大笑配警灯、棕榈公路冲锋。约 2-3 分钟出片。粉丝向 AI 内容，与 Rockstar Games 无关联。',
      ],
      keywords: [
        'gta 6 getaway duo, gta 6 duo ai video, gta 6 two person template, gta 6 getaway ai, gta 6 friends ai video, duo photo gta 6',
        'gta 6 getaway duo, gta 6 双人 ai 视频, gta 6 两人模板, gta 6 逃亡 ai, gta 6 朋友 ai 视频, 双人照片 gta 6',
      ],
    },
    accent: ['#fbbf24', '#78350f'],
    slotLabels: [
      ['Driver photo', '司机照片'],
      ['Bag partner photo', '搭档照片'],
    ],
    uploadHints: ['/templates/gta6-getaway-a.jpg', '/templates/gta6-getaway-b.jpg'],
    showcase: {
      heading: ['One drives, one carries the bag — you choose who', '一个开车，一个拿包——你来定谁是谁'],
      beforeAlt: ['Example source photos for GTA 6 Getaway Duo — two separate adult portraits, driver and bag partner', 'GTA 6 Getaway Duo 的示例原图——两张分开的成年人人像，司机与拿包搭档'],
      afterAlt: ['GTA 6 Getaway Duo result: the two people from the photos in a GTA VI-style getaway', 'GTA 6 Getaway Duo 效果：照片里的两个人出现在 GTA VI 风格的逃亡场景'],
      note: [
        'Upload two separate single-person photos in order: first the driver, second the partner with the travel bag. Faces, hairstyles and outfits hold through all four shots — and because the scarves cover the nose and mouth early on, eyes, hair and clothes do most of the recognition work.',
        '按顺序上传两张分开的单人照：第一张司机，第二张拿旅行袋的搭档。脸、发型和穿搭贯穿全部四个镜头——面巾早早遮住口鼻，所以眼睛、发型和衣服承担了大部分的认人工作。',
      ],
    },
    scenes: [
      {
        name: ['Shot 1 · Gas station', '镜头 1 · 加油站'],
        desc: ['Golden hour: the two of you walk into frame at a roadside gas station and pull your face scarves up together.', '黄金时刻：你们并肩走进路边加油站的画面，一起把面巾拉上。'],
      },
      {
        name: ['Shot 2 · The sprint', '镜头 2 · 冲刺'],
        desc: ['You burst out of the convenience store — one of you with the travel bag — sprinting for the dark vintage muscle car.', '你们从便利店冲出来——其中一个抱着旅行袋——奔向那辆深色老式肌肉车。'],
      },
      {
        name: ['Shot 3 · In the cab', '镜头 3 · 车内'],
        desc: ['Through the windshield at speed: both scarves come down, you laugh, and police lights strobe through the rear window.', '飞驰中的挡风玻璃内：面巾拉下，你们笑成一团，警灯透过车后窗闪烁。'],
      },
      {
        name: ['Shot 4 · The charge', '镜头 4 · 冲锋'],
        desc: ['The muscle car charges toward the camera down a palm-lined highway, police cars tight behind.', '肌肉车沿棕榈夹道的公路正面冲向镜头，警车紧咬在后面。'],
      },
    ],
    photoTips: [
      'Two separate photos, one adult each, in order: first the driver, second the bag partner — swapping the photos swaps the seats. Since the scarves hide the lower face in the opening shots, photos where the eyes, hairstyle and outfit are distinctive work best. Front-facing, evenly lit, no sunglasses in the first shot; the in-cab shot is where both faces get their close-up.',
      '两张分开的照片，每张一位成年人，按顺序：第一张司机，第二张拿包搭档——对调照片就是对调座位。开场几个镜头面巾会遮住下半张脸，所以眼睛、发型和穿搭有辨识度的照片效果最好。正脸、光线均匀，第一张不要戴墨镜；车内那一镜才是两张脸的特写时刻。',
    ],
    howTo: [
      {
        name: ['Upload the driver photo', '上传司机照片'],
        text: ['Open GTA 6 Getaway Duo and upload the first photo into the slot labeled Driver photo — one adult, front-facing, well lit. This person holds the wheel in shots 3 and 4.', '打开 GTA 6 Getaway Duo，把第一张照片传进「司机照片」上传位——一位成年人、正脸、光线充足。镜头 3 和 4 里握方向盘的就是这个人。'],
      },
      {
        name: ['Upload the bag partner photo', '上传搭档照片'],
        text: ['Upload the second photo into the slot labeled Bag partner photo — the person sprinting with the travel bag in shot 2. Swap photos before generating to change who drives.', '把第二张照片传进「搭档照片」上传位——镜头 2 里抱着旅行袋冲刺的人。生成前对调照片即可换谁开车。'],
      },
      {
        name: ['Generate the 12-second getaway', '生成 12 秒逃亡'],
        text: ['The clip is locked to 12 seconds with four fixed shots and no dialogue. Framing defaults to 9:16 vertical — 16:9 and 1:1 are selectable in the generator. Pick the resolution, read the credit cost, and start — rendering usually takes 2–3 minutes, and failures are refunded.', '成片固定 12 秒，四个固定镜头、全程无对白。默认 9:16 竖屏，生成器里也可选 16:9 或 1:1。选好分辨率，看清积分，开始生成——渲染通常 2-3 分钟，失败会退回。'],
      },
      {
        name: ['Post it as the duo answer', '当作双人档的回答发出去'],
        text: ['Download the MP4 and post it on TikTok, Reels or Shorts — a launch-week date video, a duo-opening for your gaming squad, or the answer to "which of us is the wheelman". Both people must have agreed to appear; add the AI label when publishing.', '下载 MP4 发到 TikTok、Reels 或 Shorts——发售周约会视频、开黑小队的双人开场，或者回答「我们俩谁是车手」。两个人都必须同意出镜；发布时打开 AI 标注。'],
      },
    ],
    trend: [
      {
        heading: ['What is the Getaway Duo trend?', 'Getaway Duo 趋势是什么？'],
        text: [
          'It is the two-person getaway branch of the GTA 6 AI wave. GTA VI built its whole marketing around a pair — Jason and Lucia, partners in crime across Leonida — and the duo getaway is the fan version of that poster: scarves up, bag out, muscle car, palms whipping past. Four shots, twelve seconds, no dialogue and, deliberately, no weapons — the escape is carried entirely by wardrobe, luggage and police lights.',
          '它是 GTA 6 AI 热潮的双人逃亡线。GTA VI 的整个营销都建立在一对搭档上——杰森与露西亚，纵横莱昂尼达州的犯罪拍档——双人逃亡就是那张海报的粉丝版：面巾拉起、拎包就跑、肌肉车、棕榈树向后飞掠。四个镜头，十二秒，没有对白，而且刻意没有武器——整场逃亡全靠穿搭、行李和警灯撑起来。',
        ],
      },
      {
        heading: ['Why duos post it', '为什么双人档都爱发'],
        text: [
          'Single-star trends leave one half of a couple or a friendship group out of frame. Getaway Duo needs exactly two people and gives them distinct jobs — the wheel and the bag — which is the part everyone argues about anyway. That makes it the launch-week post for pairs: couples, siblings, duo teammates, and the friend pairs who already call themselves the getaway crew.',
          '单人主角的趋势总会让情侣或朋友组里的另一半没画面。Getaway Duo 恰好需要两个人，而且给了分工——方向盘和旅行袋——这本来就是大家最爱争的部分。于是它成了双人档的发售周帖子：情侣、姐弟、双人小队，还有早就自称「逃亡小组」的朋友档。',
        ],
      },
      {
        heading: ['What the render is — and is not', '这条成片是什么、不是什么'],
        text: [
          'The download is a new 12-second 9:16 MP4 with audio, both faces and outfits carried from the two photos. No weapons appear in any shot. It is fan-made AI content styled after GTA VI — not official footage. ViralReel (viralreel.app) is not affiliated with Rockstar Games or Take-Two Interactive. Only use photos of two adults who both agreed to appear, and publish with the AI label.',
          '下载的是一条新的 12 秒 9:16 MP4，带声音，两张脸和穿搭都来自照片。任何镜头都没有武器。它是 GTA VI 风格的粉丝向 AI 内容——不是官方素材。ViralReel（viralreel.app）与 Rockstar Games 或 Take-Two Interactive 无关联。只使用两位都同意出镜的成年人照片，发布时打开 AI 标注。',
        ],
      },
    ],
    faqEn: [
      ['What is GTA 6 Getaway Duo?', 'It is a ViralReel template that turns two photos into a 12-second, 9:16 GTA VI-style getaway in four fixed shots: pulling face scarves up at a sunset gas station, sprinting from the convenience store with a travel bag, laughing in the cab with police lights behind, and charging toward the camera down a palm highway. Photo one drives; photo two carries the bag.'],
      ['How much does a GTA 6 Getaway Duo video cost?', cost('GTA 6 Getaway Duo', 'GTA 6 Getaway Duo').en],
      ['Is it free?', 'No. Every render is paid — the exact credit cost shows on the generate button before you start, and ViralReel does not offer free credits. Failed or canceled renders are refunded. Packs: viralreel.app/pricing; monthly: viralreel.app/subscribe.'],
      ['How long does the render take?', 'About 2–3 minutes for the 12-second clip. Keep the tab open; failed renders return the credits automatically.'],
      ['What happens in the four shots?', 'Shot 1: the two of you pull scarves up at the gas station in golden light. Shot 2: you burst out of the convenience store, bag in hand, sprinting for the muscle car. Shot 3: scarves come down in the cab as you laugh with police lights behind. Shot 4: the muscle car charges toward the camera down the palm-lined highway.'],
      ['Which photo goes where?', 'The first photo is the driver and the second is the bag partner — swap them to swap the roles. Each photo should be a separate single-person portrait of an adult, front-facing and evenly lit. Eyes, hair and outfits matter most because the scarves cover the lower face in the opening shots.'],
      ['Are there weapons in the video?', 'No. The template is built without weapons in any shot — the getaway feel comes from scarves, the travel bag, the muscle car and the police lights. That is also why it posts comfortably on every platform.'],
      ['What aspect ratio is it?', '9:16 vertical across four shots — the format TikTok, Reels and Shorts use. 16:9 and 1:1 are selectable, but the shots are framed for vertical.'],
      ['Is this official GTA 6 content?', 'No. It is fan-made AI content inspired by the Jason-and-Lucia partner setup of GTA VI. ViralReel is not affiliated with Rockstar Games or Take-Two Interactive, and the render is not captured gameplay. Publish with the AI-generated label.'],
      ['Can we use one group photo of both of us?', 'No — upload two separate single-person photos. The generator needs one clear face per role: the driver in the first slot, the bag partner in the second. A group photo blurs both roles at once.'],
    ['Which resolution should we choose?', 'Both render the same four shots at 12 seconds; 720p keeps the in-cab laughing shot and the highway charge sharper. The roles, duration and photo count do not change with resolution.'],
    ['Does the getaway have sound?', 'Yes — engine, tires and police sirens generated with the scene, no dialogue. There is no licensed music in the render; add your trend sound in the publishing app and keep the AI-generated label on.'],
    ['Will our faces survive the face scarves?', 'The scarves cover the lower face in the opening shots, so eyes, hairstyles and outfits do the early recognition work; the in-cab shot gives both faces a clear close-up. Pick photos with distinctive eyes and hair for the best match.'],
    ['Can we switch who drives after uploading?', 'Yes — swap the two photos before you generate: the first slot drives, the second carries the bag. Each render costs credits; failed renders are refunded automatically.'],
    ['Is there any violence or weapons in the video?', 'No — the template has no weapons in any shot; the escape is carried by scarves, the travel bag, the muscle car and police lights. That is deliberate, and it is why the clip posts safely on every platform.'],
    ],
    faqZh: [
      ['GTA 6 Getaway Duo 是什么？', '它是 ViralReel 的一个模板：两张照片生成 12 秒 9:16、四个固定镜头的 GTA VI 风格逃亡：日落加油站拉面巾、抱着旅行袋冲出便利店、警灯之下车内大笑、沿棕榈公路冲向镜头。第一张照片开车，第二张拿包。'],
      ['做一条 GTA 6 Getaway Duo 视频要多少钱？', cost('GTA 6 Getaway Duo', 'GTA 6 Getaway Duo').zh],
      ['免费吗？', '不免费。每次渲染都计费——开始前生成按钮上会显示确切积分，ViralReel 不提供免费积分。失败或取消的生成会退回。积分包：viralreel.app/zh/pricing；月付：viralreel.app/zh/subscribe。'],
      ['生成要多久？', '12 秒的成片大约 2-3 分钟。保持页面打开；失败自动退回积分。'],
      ['四个镜头里会发生什么？', '镜头 1：金色光线下你们在加油站一起拉上面巾。镜头 2：你们从便利店冲出来，拎着包奔向肌肉车。镜头 3：车内面巾拉下，你们大笑，警灯在身后闪烁。镜头 4：肌肉车沿棕榈公路正面冲向镜头。'],
      ['哪张照片放哪个位置？', '第一张是司机，第二张是拿包搭档——对调照片就是对调角色。每张都应该是分开的单人成年人人像，正脸、光线均匀。开场几个镜头面巾遮住下半张脸，所以眼睛、发型和穿搭最关键。'],
      ['视频里有武器吗？', '没有。这条模板任何镜头都不出现武器——逃亡感全部来自面巾、旅行袋、肌肉车和警灯。这也是它在所有平台都能放心发布的原因。'],
      ['成片是什么画幅？', '9:16 竖屏、四个镜头——TikTok、Reels 和 Shorts 的格式。也可以选 16:9 或 1:1，但镜头是按竖屏构图的。'],
      ['这是官方 GTA 6 内容吗？', '不是。它是受 GTA VI 杰森与露西亚搭档设定启发的粉丝向 AI 内容。ViralReel 与 Rockstar Games、Take-Two Interactive 无关联，成片也不是实机录制。发布时请标注 AI 生成。'],
      ['可以用一张两人合照吗？', '不行——请上传两张分开的单人照。生成器每个角色需要一张清晰的脸：第一个上传位司机，第二个拿包搭档。合照会让两个角色同时变糊。'],
    ['我们该选哪个分辨率？', '两档渲染的都是同样的四个镜头、12 秒；车内大笑和公路冲锋两镜 720p 更清晰。角色、时长和照片数不随分辨率变化。'],
    ['逃亡片段有声音吗？', '有——引擎、轮胎和警笛随场景生成，没有对白。成片没有授权音乐；发布时在 App 里加热梗原声，并保持 AI 生成标注开启。'],
    ['拉上面巾后还能认出我们吗？', '开场几个镜头面巾遮住下半张脸，认人靠眼睛、发型和穿搭；车内那一镜会给两张脸清晰的特写。挑眼睛和发型有辨识度的照片，匹配度最好。'],
    ['上传之后还能换谁开车吗？', '可以——生成前对调两张照片即可：第一个上传位开车，第二个拿包。每次渲染都计费；失败的渲染自动退回积分。'],
    ['视频里有暴力或武器吗？', '没有——这条模板任何镜头都不出现武器；逃亡感全部来自面巾、旅行袋、肌肉车和警灯。这是刻意设计，也是它在所有平台都能放心发布的原因。'],
    ],
  },
] as const;

export type Gta6SeriesData = (typeof GTA6_SERIES)[number];

export function getGta6Series(slug: string): Gta6SeriesData | undefined {
  return GTA6_SERIES.find((s) => s.slug === slug);
}

/**
 * Hub-level FAQ: "which template should I pick" questions. Rendered visibly
 * on the hub page AND emitted as the hub's FAQPage JSON-LD — the markup and
 * the visible content are always the same list.
 */
export const GTA6_HUB_FAQ: readonly { q: readonly [string, string]; a: readonly [string, string] }[] = [
  {
    q: ['Which GTA 6 AI template should I pick?', '哪个 GTA 6 AI 模板适合我？'],
    a: [
      'Pick by scene and cast. Solo and cinematic: GTA 6 Trailer AI (four-shot fan trailer) or GTA 6 Vice City Story (widescreen cutscene). Two people: GTA 6 Lovers on the Run (getaway romance) or GTA 6 Getaway Duo (driver-and-passenger escape). Night out: GTA 6 Nightclub. Pure action chase: GTA 6 Wanted Level. Every series renders in about 2–3 minutes and costs credits by the resolution you pick.',
      '按场景和人数选。单人、电影感：GTA 6 Trailer AI（四镜头预告片）或 GTA 6 Vice City Story（横版过场）。两个人：GTA 6 Lovers on the Run（逃亡爱情）或 GTA 6 Getaway Duo（驾驶座与副驾逃亡）。夜店之夜：GTA 6 Nightclub。纯动作追逐：GTA 6 Wanted Level。每个系列约 2-3 分钟出片，积分按所选分辨率计算。',
    ],
  },
  {
    q: ['What is GTA 6 Trailer AI?', 'GTA 6 Trailer AI 是什么？'],
    a: [
      'A solo, 9:16 vertical template: one photo becomes a fixed 12-second, four-shot fan trailer — sunset convertible, gas station, airboat sprint, rooftop searchlight. Rendered in about 2–3 minutes.',
      '单人 9:16 竖屏模板：一张照片生成固定 12 秒、四镜头的粉丝预告片——日落敞篷车、加油站、气垫船冲刺、天台探照灯。约 2-3 分钟出片。',
    ],
  },
  {
    q: ['What is GTA 6 Wanted Level?', 'GTA 6 Wanted Level 是什么？'],
    a: [
      'A solo, 9:16 vertical template: one photo becomes a fixed 10-second one-take chase through traffic while the five-star wanted HUD stacks up. Rendered in about 2–3 minutes.',
      '单人 9:16 竖屏模板：一张照片生成固定 10 秒的一镜到底追逐，五星通缉 HUD 全程在位。约 2-3 分钟出片。',
    ],
  },
  {
    q: ['What is GTA 6 Lovers on the Run?', 'GTA 6 Lovers on the Run 是什么？'],
    a: [
      'A duo, 9:16 vertical template: two photos (you and your partner) become a fixed 15-second, five-shot getaway romance — muscle-car drift, motel stop, desert road. Rendered in about 2–3 minutes.',
      '双人 9:16 竖屏模板：两张照片（你和搭档）生成固定 15 秒、五镜头的逃亡爱情——肌肉车漂移、汽车旅馆、荒漠公路。约 2-3 分钟出片。',
    ],
  },
  {
    q: ['What is GTA 6 Vice City Story?', 'GTA 6 Vice City Story 是什么？'],
    a: [
      'A solo, 16:9 landscape cutscene story — the only widescreen series: one photo becomes a fixed 15-second, six-shot Vice City narrative under rain-slick neon. Built for YouTube and gaming channels; rendered in about 2–3 minutes.',
      '单人 16:9 横版过场故事——全系列唯一的宽屏：一张照片生成固定 15 秒、六镜头的罪恶都市叙事，雨夜霓虹开场。适合 YouTube 和游戏频道；约 2-3 分钟出片。',
    ],
  },
  {
    q: ['What is GTA 6 Nightclub?', 'GTA 6 Nightclub 是什么？'],
    a: [
      'A solo, 9:16 vertical template: one photo becomes a fixed 12-second, three-cut club night — supercar arrival, entrance past the bouncer, dance-floor orbit under lasers. Rendered in about 2–3 minutes.',
      '单人 9:16 竖屏模板：一张照片生成固定 12 秒、三硬切的夜店之夜——超跑到场、越过保安进场、激光舞池环绕运镜。约 2-3 分钟出片。',
    ],
  },
  {
    q: ['What is GTA 6 Getaway Duo?', 'GTA 6 Getaway Duo 是什么？'],
    a: [
      'A duo, 9:16 vertical template: two photos become a fixed 12-second, four-shot escape — driver and passenger trading looks mid-chase, cut by fixed hard cuts. Rendered in about 2–3 minutes.',
      '双人 9:16 竖屏模板：两张照片生成固定 12 秒、四镜头的双人逃亡——驾驶座与副驾在追逐中交换眼神，硬切固定。约 2-3 分钟出片。',
    ],
  },
];
