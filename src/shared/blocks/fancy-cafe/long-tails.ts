import { fancyCafeFifteenSecondCostAnswer } from '@/shared/lib/fancy-cafe-cost';
import {
  paidExportWatermarkAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { FANCY_CAFE_CITE_TAILS } from './cite-tails';
import { FANCY_CAFE_HOW_TO_STEPS, type FancyCafeHowToStep } from './steps';

/**
 * Long-tail landings for the Your First Time in a Fancy Cafe template.
 *
 * To add another keyword: append an entry here. The sitemap reads
 * FANCY_CAFE_LONG_TAIL_ROUTES. Public URLs are served by the single
 * `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `first-time-in-a-fancy-cafe-ai-template` slug.
 */

export const FANCY_CAFE_TEMPLATE_PATH = '/first-time-in-a-fancy-cafe-ai-template';

export const FANCY_CAFE_POSTS = {
  howTo: '/blog/how-to-make-fancy-cafe-ai-video',
  explained: '/blog/what-is-first-time-in-a-fancy-cafe',
  capcut: '/blog/fancy-cafe-capcut-vs-viralreel',
  song: '/blog/fancy-cafe-song-oh-yeah',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
  best: '/blog/best-fancy-cafe-ai-generators',
} as const;

const PRODUCT = { en: 'Your First Time in a Fancy Cafe', zh: 'Your First Time in a Fancy Cafe' };

const EN_TEMPLATE = 'https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template';

function templateUrl(zh: boolean) {
  return zh ? ZH_TEMPLATE : EN_TEMPLATE;
}

type Copy = { en: string; zh: string };

export interface LongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface LongTailEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  steps: 'shared' | readonly FancyCafeHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTOS_EN =
  'Two photos are the whole input. Photo 1 is whoever sits on the table; photo 2 is the one who walks in. Full body, one person per photo, relaxed poses — the joke is in the legs: knees up on the table, then the quiet climb-down. Do not upload minors, celebrities, or people who did not agree.';
const PHOTOS_ZH =
  '两张照片就是全部输入。第 1 张坐桌，第 2 张进店。全身照、每张一个人、姿势放松——笑点全在腿上：膝盖顶着桌子，再默默爬下来。不要上传未成年人、名人或未经同意的人。';

export const FANCY_CAFE_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'first time in a fancy cafe ai',
    slug: 'first-time-in-a-fancy-cafe-ai',
    title: {
      en: 'First Time in a Fancy Cafe AI – Two Photos, 15-Second MP4',
      zh: 'First Time in a Fancy Cafe AI：两张照片，15 秒 MP4',
    },
    description: {
      en: 'first time in a fancy cafe ai: two photos put you in the viral concrete-cafe scene — 15-second 9:16 MP4 in the browser. New accounts start with free credits.',
      zh: 'first time in a fancy cafe ai：两张照片把你放进爆火水泥咖啡馆场景——浏览器直出 15 秒 9:16 MP4，新账号自带免费积分。',
    },
    h1: { en: 'First Time in a Fancy Cafe AI', zh: 'First Time in a Fancy Cafe AI' },
    lead: {
      en: 'A first time in a fancy cafe AI search wants the concrete-cafe scene: your face perched on the tiny table, the walk-in, the sideways look, the climb-down — 15 seconds, 9:16.',
      zh: '搜 first time in a fancy cafe ai 要的是水泥咖啡馆场景：你坐在小桌上、有人进店、那个眼神、爬下来——15 秒，9:16。',
    },
    guideTitle: {
      en: 'How to make a First Time in a Fancy Cafe AI video',
      zh: '如何制作 First Time in a Fancy Cafe AI 视频',
    },
    body: {
      en: [
        'The trend runs on face swaps of the scene @leehoustonx posted on 1 November 2026 — the one that passed 9.8M plays in two days — but you do not need the app. The First Time in a Fancy Cafe AI page on ViralReel runs the same scene in the browser: pick one of six cafe clips, upload two full-body photos, and the image-to-video model puts photo 1 on the tiny table and photo 2 on the ledge with the coffee.',
        `Make it at ${EN_TEMPLATE}. ${PHOTOS_EN} The page opens on 9:16 and the length is fixed at 15 seconds — the full scene from the perch to the climb-down. Rendering typically takes a few minutes, and every new account starts with free credits, so the first video costs you a sign-up, not a card.`,
        'The download is a new MP4 of a new scene. ViralReel does not license the trend sound or Steve Lacy\'s "Oh Yeah?". Add the sound from the TikTok, Reels, or Shorts library, caption it "POV: your first time in a fancy cafe", tag whoever is on the table, and turn on the AI-generated label.',
      ],
      zh: [
        '趋势跑在 @leehoustonx 2026 年 11 月 1 日发布的场景的脸换版上——两天破 980 万播放那条——但你不需要那个 App。ViralReel 的 First Time in a Fancy Cafe AI 页面在浏览器里跑同一个场景：六条咖啡馆片段选一条，上传两张全身照，图生视频模型把第 1 张放到小桌上、第 2 张放到台沿上，咖啡都备好。',
        `制作入口：${ZH_TEMPLATE} 。${PHOTOS_ZH} 页面默认 9:16，时长固定 15 秒——从坐上桌到爬下来的完整一幕。渲染通常几分钟，新账号自带免费积分，第一条视频只需要注册，不需要刷卡。`,
        '下载的是一条新场景的新 MP4。ViralReel 不授权趋势原声，也不授权 Steve Lacy 的《Oh Yeah?》。在 TikTok、Reels 或 Shorts 的曲库里加原声，配文写「POV: your first time in a fancy cafe」，@ 坐桌的那位，并打开 AI 生成标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the fancy cafe AI scene the original video?', zh: 'fancy cafe AI 场景是原视频吗？' },
        a: {
          en: 'No. The concrete-cafe scene posted by @leehoustonx on 1 November 2026 is widely described as AI-generated, and every swap is a new AI render of that scene. ViralReel makes another new scene from your photos — it is fan work, not a copy of anyone\'s post.',
          zh: '不是。@leehoustonx 2026 年 11 月 1 日发布的水泥咖啡馆场景被普遍认为是 AI 生成的，每一条换脸都是对该场景的新一次 AI 渲染。ViralReel 用你的照片再生成一条新场景——这是粉丝作品，不是任何人帖子的拷贝。',
        },
      },
      {
        q: { en: 'Do I need both photos?', zh: '两张照片都必须传吗？' },
        a: {
          en: 'One photo can be enough on clips that support it — you sit on the table and the walk-in stays as filmed. With two photos you also cast the person who walks in, which is where most of the jokes about friends come from.',
          zh: '部分片段一张照片就够——你坐桌，进店的人保持原样。两张照片则可以把进店的人也换成你安排的演员——朋友们的大多数笑点都从这里来。',
        },
      },
    ],
  },
  {
    keyword: 'first time in a fancy cafe ai video',
    slug: 'first-time-in-a-fancy-cafe-ai-video',
    title: {
      en: 'First Time in a Fancy Cafe AI Video – Make Yours in the Browser',
      zh: 'First Time in a Fancy Cafe AI 视频：在浏览器里做你的版本',
    },
    description: {
      en: 'Make a first time in a fancy cafe AI video: two photos, six cafe casts, 15-second 9:16 MP4, renders in minutes. No app, no watermark on paid exports.',
      zh: '制作 first time in a fancy cafe AI 视频：两张照片、六套咖啡馆阵容、15 秒 9:16 MP4、几分钟出片。不用 App，付费导出无水印。',
    },
    h1: { en: 'First Time in a Fancy Cafe AI Video', zh: 'First Time in a Fancy Cafe AI 视频' },
    lead: {
      en: 'A first time in a fancy cafe AI video is a 15-second 9:16 clip that puts your photos into the viral cafe scene — it renders in minutes and lands in History.',
      zh: 'first time in a fancy cafe AI 视频是一条 15 秒 9:16 的短片，把你的照片放进爆火咖啡馆场景——几分钟渲染完成，在「历史记录」里取。',
    },
    guideTitle: {
      en: 'Making the fancy cafe AI video, end to end',
      zh: '从照片到成片：fancy cafe AI 视频全流程',
    },
    body: {
      en: [
        'The video everyone is making has a fixed five-beat structure: the bare concrete cafe, the man perched on the tiny steel table, the woman in the black suit walking in and placing her cup on his table, the sideways look, the quiet climb-down. An AI video generator recreates that scene with your faces in it — ViralReel does it from two photos in the browser, and the render typically takes a few minutes.',
        `${EN_TEMPLATE} is the page. ${PHOTOS_EN} Pick the cast that matches the post you want: the Original Table Sitter, the Cream Suit (the 4.7M-play version), the Korean Couple (2.9M), the Spanish POV, the Green Trousers, or the Dog on the Table.`,
        'You get a 15-second 9:16 MP4 with no watermark on paid exports. If the climb-down looks tangled, run the same photos again — the second take usually fixes the legs. Failed jobs are refunded automatically as credits.',
      ],
      zh: [
        '所有人都在做的这条视频有固定的五拍结构：空旷的水泥咖啡馆、坐在小钢桌上的男人、黑西装女人走进来把咖啡放在他桌上、那个眼神、默默爬下来。AI 视频生成器用你的脸重建这个场景——ViralReel 在浏览器里用两张照片完成，渲染通常几分钟。',
        `页面在 ${ZH_TEMPLATE} 。${PHOTOS_ZH} 选一条和你想发的帖子最接近的阵容：原版坐桌、奶油西装（470 万播放那条）、韩国情侣（290 万）、西语 POV、绿裤、狗狗坐桌。`,
        '你会得到一条 15 秒 9:16 的 MP4，付费导出无水印。如果爬下来的动作乱了，用同样的照片再跑一次——第二遍通常就好了。失败的任务自动退积分。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long does the fancy cafe video take to render?', zh: 'fancy cafe 视频渲染要多久？' },
        a: {
          en: 'Typically a few minutes depending on the model and queue; finished clips appear in History and failed jobs are refunded automatically.',
          zh: '通常几分钟，视模型和队列而定；成片出现在「历史记录」，失败任务自动退积分。',
        },
      },
      {
        q: { en: 'What ratio and length should I post?', zh: '发什么比例和时长？' },
        a: {
          en: 'Post the 15-second 9:16 export as-is — it matches TikTok, Instagram Reels and YouTube Shorts, and it is the full scene from the perch to the climb-down.',
          zh: '15 秒 9:16 的成片直接发——正好匹配 TikTok、Instagram Reels 和 YouTube Shorts，也是从坐桌到爬下来的完整一幕。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe template',
    slug: 'fancy-cafe-template',
    title: {
      en: 'Fancy Cafe Template – Six Cafe Casts, Two Photo Slots',
      zh: 'Fancy Cafe 模板：六套咖啡馆阵容，两个照片位',
    },
    description: {
      en: 'The fancy cafe template on ViralReel: six casts of the viral concrete-cafe scene, two photo slots, 15-second 9:16 MP4. Free credits for new accounts.',
      zh: 'ViralReel 的 fancy cafe 模板：爆火水泥咖啡馆场景的六套阵容、两个照片位、15 秒 9:16 MP4。新账号送免费积分。',
    },
    h1: { en: 'Fancy Cafe Template', zh: 'Fancy Cafe 模板' },
    lead: {
      en: 'The fancy cafe template is the fixed concrete-cafe scene — table, ledge, walk-in — that redraws only the people. ViralReel runs it in six casts from two photos.',
      zh: 'fancy cafe 模板是固定场景的水泥咖啡馆——桌子、台沿、进店人——只换人。ViralReel 用两张照片跑六套阵容。',
    },
    guideTitle: {
      en: 'What the fancy cafe template fixes, and what you control',
      zh: 'fancy cafe 模板固定什么、你能改什么',
    },
    body: {
      en: [
        'A template trend like this works because the scene never changes: the concrete cafe, the knee-high round steel table, the woman in the black suit, the timing of the walk-in and the climb-down. The template holds all of it so the only variable is who is on the table — which is exactly why the meme reads as a meme and not as a random video.',
        `The ViralReel fancy cafe template gives you six casts of that scene: Original Table Sitter, Cream Suit, Korean Couple, Spanish POV, Green Trousers and the Dog on the Table. You control the cast (two photos), the ratio stays 9:16, and the length stays 15 seconds. Make it at ${EN_TEMPLATE}.`,
        'The CapCut route has two templates from 2 November 2026; the difference here is that you pick the cast, you can cast a second person as the walk-in, and paid exports carry no watermark. The preview clips on this page are sourced from the TikTok trend.',
      ],
      zh: [
        '这类模板趋势成立的前提是场景永远不变：水泥咖啡馆、齐膝高的小圆钢桌、黑西装女人、进店和爬下来的节奏。模板固定这一切，唯一的变量是桌上坐的是谁——这正是它读起来是梗、而不是随机视频的原因。',
        `ViralReel 的 fancy cafe 模板给这个场景做了六套阵容：原版坐桌、奶油西装、韩国情侣、西语 POV、绿裤、狗狗坐桌。你控制阵容（两张照片），比例固定 9:16，时长固定 15 秒。制作入口：${ZH_TEMPLATE} 。`,
        'CapCut 路线有 2026 年 11 月 2 日的两个模板；这里的区别是：你可以选阵容、可以安排第二个人当进店者、付费导出无水印。本页预览片段来自 TikTok 趋势原片。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which fancy cafe cast should I pick?', zh: 'fancy cafe 阵容怎么选？' },
        a: {
          en: 'Match the post you want to make: the Original for the classic read, Cream Suit if the photo is overdressed (it makes the mistake land harder), Korean Couple for a friend joke, the Dog clip for pets.',
          zh: '按你想发的帖子选：经典版用原版、照片穿得隆重选奶油西装（错得越离谱越好笑）、朋友玩笑选韩国情侣、宠物选狗狗片段。',
        },
      },
      {
        q: { en: 'Does the template keep the original sound?', zh: '模板会保留原声吗？' },
        a: {
          en: 'Your clip keeps the reference timing; ViralReel does not license the trend sound or "Oh Yeah?", so you add the audio from your posting app\'s library.',
          zh: '成片保留参考节奏；ViralReel 不授权趋势原声和《Oh Yeah?》，发帖时在发布 App 的曲库里加音频。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe filter',
    slug: 'fancy-cafe-filter',
    title: {
      en: 'Fancy Cafe Filter – Where the "POV" Cafe Effect Actually Lives',
      zh: 'Fancy Cafe 滤镜：「POV」咖啡馆特效到底在哪做',
    },
    description: {
      en: 'Looking for the fancy cafe filter? The viral cafe effect is an AI scene swap, not a camera filter — make it from two photos at ViralReel, 15-second 9:16 MP4.',
      zh: '在找 fancy cafe 滤镜？爆火咖啡馆特效是 AI 场景换人，不是相机滤镜——ViralReel 两张照片直出 15 秒 9:16 MP4。',
    },
    h1: { en: 'Fancy Cafe Filter', zh: 'Fancy Cafe 滤镜' },
    lead: {
      en: 'There is no camera filter for the fancy cafe trend — it is an AI scene swap. The "filter" people mean is the concrete-cafe redraw, and it runs from photos.',
      zh: 'fancy cafe 趋势没有相机滤镜——它是 AI 场景换人。大家说的「滤镜」其实是水泥咖啡馆重绘，用照片跑。',
    },
    guideTitle: {
      en: 'The fancy cafe filter, explained honestly',
      zh: '把 fancy cafe「滤镜」说明白',
    },
    body: {
      en: [
        'Search "fancy cafe filter" and you are really looking for one of two things: the effect that puts a new person on the tiny table, or the original AI clip itself. Neither is a camera filter you toggle in an app — the scene is generated by an AI image-to-video model that keeps the cafe fixed and redraws the people. That is why every version has the same wall, the same cups and the same woman in the black suit.',
        'On ViralReel the "filter" runs in the browser at ' + EN_TEMPLATE + ': six cafe casts, two photo slots, and a 15-second 9:16 MP4. New accounts start with free credits; rendering takes a few minutes.',
        'If you saw the real-cafe version — a wall-mounted table under a shelf of records — that one was actually filmed, by @stevenwommack, with the same caption. Everything else under the hashtag with a new face on the table is AI.',
      ],
      zh: [
        '搜「fancy cafe filter」其实想找的是两样东西之一：把新人放上小桌的特效，或者原版 AI 片段本身。它们都不是 App 里可以打开的相机滤镜——场景由 AI 图生视频模型生成，咖啡馆固定、人被重绘。这就是为什么每个版本都有同一面墙、同样的杯子、同一个黑西装女人。',
        '在 ViralReel，这个「滤镜」在浏览器里跑：' + ZH_TEMPLATE + ' ，六套咖啡馆阵容、两个照片位、15 秒 9:16 MP4。新账号自带免费积分；渲染几分钟。',
        '如果你看到的是真咖啡馆版——唱片墙下的壁挂桌——那条是真实拍摄的，作者是 @stevenwommack，配文相同。标签下其他所有「桌上换了张脸」的版本都是 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a fancy cafe filter on TikTok or Instagram?', zh: 'TikTok 或 Instagram 上有 fancy cafe 滤镜吗？' },
        a: {
          en: 'No official effect exists. The trend spreads through CapCut templates and AI tools; posts carry the AI-generated label. ViralReel runs the same move from two photos, no app needed.',
          zh: '没有官方特效。趋势通过 CapCut 模板和 AI 工具传播；帖子都带 AI 生成标注。ViralReel 用两张照片跑同一个动作，不需要 App。',
        },
      },
      {
        q: { en: 'Why does every fancy cafe video look the same?', zh: '为什么每条 fancy cafe 视频都长得一样？' },
        a: {
          en: 'Because the scene is fixed on purpose — same cafe, same table, same walk-in — so the only variable is who sits on the table. That consistency is what makes the meme readable.',
          zh: '因为场景就是刻意固定的——同一间咖啡馆、同一张桌、同一个进店人——唯一变量是坐桌的人。这种一致性正是梗能被读懂的原因。',
        },
      },
    ],
  },
  {
    keyword: 'first time in a fancy cafe tiktok',
    slug: 'first-time-in-a-fancy-cafe-tiktok',
    title: {
      en: 'First Time in a Fancy Cafe TikTok – the 9.8M-Play Scene, Explained',
      zh: 'First Time in a Fancy Cafe TikTok：980 万播放的场景拆解',
    },
    description: {
      en: 'The first time in a fancy cafe TikTok: @leehoustonx, 1 November 2026, 9.8M plays in two days, Steve Lacy\'s "Oh Yeah?". Make your own version from two photos.',
      zh: 'first time in a fancy cafe TikTok：@leehoustonx，2026 年 11 月 1 日，两天 980 万播放，配 Steve Lacy《Oh Yeah?》。两张照片做你的版本。',
    },
    h1: { en: 'First Time in a Fancy Cafe on TikTok', zh: 'First Time in a Fancy Cafe 在 TikTok 上' },
    lead: {
      en: 'On TikTok, "first time in a fancy cafe" is the 15-second scene posted by @leehoustonx on 1 November 2026 — 9.8M plays and 1.3M likes in two days, and still rising.',
      zh: '在 TikTok 上，「first time in a fancy cafe」是 @leehoustonx 2026 年 11 月 1 日发布的 15 秒场景——两天 980 万播放、130 万点赞，还在涨。',
    },
    guideTitle: {
      en: 'The TikTok trend, from the original post to your version',
      zh: '从原帖到你的版本：TikTok 趋势全解',
    },
    body: {
      en: [
        'The original: 1 November 2026, @leehoustonx posts a fixed-camera clip of a bare concrete cafe. A man is perched on a tiny round steel table, coffee in hand. Six hours earlier @stevenwommack had posted a real-cafe take with the same caption; the concrete version is the one every remix uses. The sound is "original sound - leehoustonx" — Steve Lacy\'s "Oh Yeah?".',
        'Day two made it a format: @kevkevkiwi put his own face in, @boby.biggsjohnson\'s cream suit passed 4.7M plays, @kkubi99\'s Korean couple 2.9M, and #yourfirsttimeinafancycafe was born. Two CapCut templates went up within three hours of each other. By 3 November the hashtag held 1,023 posts, growing about 600 a day.',
        'To join it from the browser, make your version at ' + EN_TEMPLATE + ' — two full-body photos, one of six cafe casts, 15-second 9:16 MP4. Post it with the POV caption, tag the person on the table, add the sound from the TikTok library, and label it AI.',
      ],
      zh: [
        '原帖：2026 年 11 月 1 日，@leehoustonx 发布固定机位的水泥咖啡馆短片。男人坐在小圆钢桌上，手端咖啡。早六小时 @stevenwommack 发了同款配文的真咖啡馆版；水泥版成了所有翻拍的原型。声音是「original sound - leehoustonx」——Steve Lacy 的《Oh Yeah?》。',
        '第二天它成了格式：@kevkevkiwi 把自己的脸放进去，@boby.biggsjohnson 的奶油西装破 470 万播放，@kkubi99 的韩国情侣 290 万，#yourfirsttimeinafancycafe 诞生。两个 CapCut 模板三小时内先后上线。到 11 月 3 日标签下 1,023 条帖子，每天新增约 600 条。',
        '在浏览器里加入：到 ' + ZH_TEMPLATE + ' 做你的版本——两张全身照、六套咖啡馆阵容选一、15 秒 9:16 MP4。发帖配 POV 文案、@ 坐桌的人、在 TikTok 曲库加原声，并标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What hashtag do fancy cafe posts use?', zh: 'fancy cafe 帖子用什么标签？' },
        a: {
          en: '#yourfirsttimeinafancycafe, plus the POV caption. Spanish-language posts travel as "tu primera vez en una cafetería elegante" and "yo en un lugar caro".',
          zh: '#yourfirsttimeinafancycafe，配 POV 文案。西语帖子以「tu primera vez en una cafetería elegante」和「yo en un lugar caro」传播。',
        },
      },
      {
        q: { en: 'Is the original fancy cafe video on TikTok AI?', zh: 'TikTok 上的 fancy cafe 原视频是 AI 吗？' },
        a: {
          en: 'The concrete-cafe scene is widely described as AI-generated; @stevenwommack\'s record-wall version the same day was filmed for real. Every face-swap version since is AI.',
          zh: '水泥咖啡馆场景被普遍认为是 AI 生成的；同天 @stevenwommack 的唱片墙版是实拍。之后所有换脸版都是 AI。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe generator',
    slug: 'fancy-cafe-generator',
    title: {
      en: 'Fancy Cafe AI Video Generator – Two Photos, No App',
      zh: 'Fancy Cafe AI 视频生成器：两张照片，不用装 App',
    },
    description: {
      en: 'A fancy cafe AI video generator that runs in the browser: two photos into the viral cafe scene, 15-second 9:16 MP4, renders in minutes, free credits on signup.',
      zh: '浏览器里跑的 fancy cafe AI 视频生成器：两张照片进爆火咖啡馆场景，15 秒 9:16 MP4，几分钟出片，注册送免费积分。',
    },
    h1: { en: 'Fancy Cafe AI Video Generator', zh: 'Fancy Cafe AI 视频生成器' },
    lead: {
      en: 'A fancy cafe generator is any tool that rebuilds the viral cafe scene from photos. ViralReel does it in the browser — two photos, six casts, a 15-second 9:16 MP4 in minutes.',
      zh: 'fancy cafe 生成器指任何能用照片重建爆火咖啡馆场景的工具。ViralReel 在浏览器里完成——两张照片、六套阵容、几分钟出 15 秒 9:16 MP4。',
    },
    guideTitle: {
      en: 'Using the fancy cafe generator on ViralReel',
      zh: '在 ViralReel 使用 fancy cafe 生成器',
    },
    body: {
      en: [
        'The generator at ' + EN_TEMPLATE + ' works without a prompt box: the scene prompt is pre-filled from the reference clip, and your two photos are the only input. Photo 1 sits on the table, photo 2 walks in. You pick the cast — Original, Cream Suit, Korean Couple, Spanish POV, Green Trousers, or the Dog on the Table — and the model renders the full 15-second scene.',
        'Rendering typically takes a few minutes; finished clips land in History, failed jobs are refunded automatically, and paid exports carry no watermark. New accounts start with free credits, so your first fancy cafe video does not require a payment method.',
        'Compared with writing a raw image-to-video prompt yourself, the fixed template keeps the timing that makes the joke land: the walk-in, the sideways look, the climb-down. That timing is the hard part of this trend, and it is what a blank prompt usually gets wrong.',
      ],
      zh: [
        ZH_TEMPLATE + ' 的生成器不用写提示词：场景提示词已按参考片段预填，你唯一的输入就是两张照片。第 1 张坐桌，第 2 张进店。阵容任选——原版、奶油西装、韩国情侣、西语 POV、绿裤、狗狗坐桌——模型渲染完整的 15 秒场景。',
        '渲染通常几分钟；成片在「历史记录」，失败任务自动退积分，付费导出无水印。新账号自带免费积分，第一条 fancy cafe 视频不需要绑卡。',
        '比起自己从零写图生视频提示词，固定模板保住了让笑点成立的节奏：进店、那个眼神、爬下来。这个节奏是本趋势最难的部分，也正是空白提示词经常做错的地方。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The scene prompt is pre-filled; your two photos and the cast choice are the whole input.',
          zh: '不需要。场景提示词已预填；两张照片加阵容选择就是全部输入。',
        },
      },
      {
        q: { en: 'What if the render fails?', zh: '渲染失败了怎么办？' },
        a: {
          en: 'Failed jobs are refunded automatically as credits — retry with the same photos, ideally brighter and full-body.',
          zh: '失败任务自动退积分——用同样的照片重试，最好换更亮、更全身的照片。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe meme',
    slug: 'fancy-cafe-meme',
    title: {
      en: 'The Fancy Cafe Meme, Explained – Table, Walk-In, Climb-Down',
      zh: 'Fancy Cafe 梗全解：桌子、进店、爬下来',
    },
    description: {
      en: 'The fancy cafe meme explained: the table-as-stool joke, @leehoustonx\'s 9.8M-play original, the two-photo format, and why comment sections confess.',
      zh: 'fancy cafe 梗全解：把桌子当凳子的笑点、@leehoustonx 980 万播放原帖、两张照片格式，以及评论区为什么全是自首。',
    },
    h1: { en: 'The Fancy Cafe Meme', zh: 'Fancy Cafe 梗' },
    lead: {
      en: 'The fancy cafe meme is a joke about minimalist cafes where you cannot tell the seats from the tables — posted by @leehoustonx on 1 November 2026, 9.8M plays in two days.',
      zh: 'fancy cafe 梗是关于极简咖啡馆「分不清座位和桌子」的笑话——@leehoustonx 2026 年 11 月 1 日发布，两天 980 万播放。',
    },
    guideTitle: {
      en: 'What the fancy cafe meme means, beat by beat',
      zh: 'fancy cafe 梗是什么意思，一拍一拍拆',
    },
    body: {
      en: [
        'The setup: a bare concrete cafe with small round steel side tables, knee-high, one pole, about the size of a dinner plate. The mistake: a man is perched on one with his coffee, as relaxed as anyone in the room. The reveal: a woman walks in, sits on the ledge, and places her cup on the table he is sitting on. The reaction: a sideways look, a beat, and a quiet climb-down to a proper seat. No words at any point.',
        'It went viral because everyone has a version of this: the planter you sat on, the queue you stood in backwards, the menu you asked for at a counter-only place. The comment sections under the trend are confessions, not critiques — which is exactly the reaction that gets a meme shared. It travels in Spanish as "tu primera vez en una cafetería elegante" and "yo en un lugar caro".',
        'The meme\'s format is a two-hander, which is why it survives the jump to AI face swaps: you can cast a friend as the one who makes the mistake, and a joke about a specific person gets sent, not just scrolled. Make that version at ' + EN_TEMPLATE + ' — two photos, one of six cafe casts, 15 seconds.',
      ],
      zh: [
        '铺垫：空旷的水泥咖啡馆，小圆钢桌齐膝高、单柱、大约餐盘大小。错误：一个男人端着咖啡坐在上面，淡定得像在自己家。揭穿：一个女人走进来，坐在台沿上，把咖啡杯放在他坐的那张桌子上。反应：一个斜眼，一拍停顿，默默爬下来找正常座位。全程零台词。',
        '它爆火是因为每个人都有自己的版本：坐过的花坛、反着排的队、在只有吧台的店里要过的菜单。趋势下的评论区是自首大会，不是点评大会——这正是让梗被转发的反应。它在西语世界以「tu primera vez en una cafetería elegante」和「yo en un lugar caro」传播。',
        '这个梗的格式是双人戏，这就是它能无缝跳到 AI 换脸的原因：你可以把朋友安排成犯错的那个人，而关于具体某人的笑话会被转发，而不只是被划过。到 ' + ZH_TEMPLATE + ' 做那个版本——两张照片、六套阵容选一、15 秒。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What does "POV: your first time in a fancy cafe" mean?', zh: '「POV: your first time in a fancy cafe」是什么意思？' },
        a: {
          en: 'It frames the clip as your hypothetical first visit to a too-minimal cafe, where you mistake the furniture. POV captions put the viewer in the poster\'s seat — here, literally on the table.',
          zh: '它把片子框定为「你第一次走进一间过分极简的咖啡馆、认错家具」的假想情境。POV 文案让观众坐进发帖人的位置——这里是字面意义上的坐在桌上。',
        },
      },
      {
        q: { en: 'Who is kevkevkiwi in the fancy cafe meme?', zh: 'fancy cafe 梗里的 kevkevkiwi 是谁？' },
        a: {
          en: 'Kevin Winnik, a creator who put his own face into the scene on 2 November 2026. His version spread on Instagram and TikTok, which is why "kevkevkiwi fancy cafe" shows up next to the meme.',
          zh: 'Kevin Winnik，2026 年 11 月 2 日把自己的脸放进场景的创作者。他的版本在 Instagram 和 TikTok 上扩散，这也是「kevkevkiwi fancy cafe」会和这个梗一起出现的原因。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe capcut',
    slug: 'fancy-cafe-capcut',
    title: {
      en: 'Fancy Cafe CapCut Template vs ViralReel – Which Route Fits',
      zh: 'Fancy Cafe CapCut 模板 vs ViralReel：哪条路线适合你',
    },
    description: {
      en: 'Two fancy cafe CapCut templates went up on 2 November 2026. Compare the CapCut and ViralReel routes: casts, second person, watermark, render time.',
      zh: '2026 年 11 月 2 日上线了两个 fancy cafe CapCut 模板。CapCut 与 ViralReel 两条路线对比：阵容、第二人、水印、渲染时间。',
    },
    h1: { en: 'Fancy Cafe CapCut Template vs ViralReel', zh: 'Fancy Cafe CapCut 模板 vs ViralReel' },
    lead: {
      en: 'Two fancy cafe CapCut templates exist (both from 2 November 2026, about 900 uses each by the next day). ViralReel runs the same scene in the browser with six casts and two photo slots.',
      zh: 'fancy cafe 有两个 CapCut 模板（都是 2026 年 11 月 2 日上线，次日各约 900 次使用）。ViralReel 在浏览器里跑同一场景，六套阵容、两个照片位。',
    },
    guideTitle: {
      en: 'Choosing between the CapCut template and the browser generator',
      zh: 'CapCut 模板和浏览器生成器怎么选',
    },
    body: {
      en: [
        'The CapCut route: find a post using either template, tap the template link, drop in a photo, and edit inside the app. It is free and fast, but you get whichever scene the template holds, one photo at a time on most versions, and exports carry the CapCut watermark unless you pay CapCut.',
        'The ViralReel route at ' + EN_TEMPLATE + ': six cafe casts to choose from, two photo slots so you can cast the person who walks in, the full 15-second scene rendered by an image-to-video model in minutes, paid exports with no watermark, and failed jobs refunded as credits. No app install, no editing timeline.',
        'Both routes are fan work on an AI-generated scene; neither is official. Whichever you use, add the trend sound from your posting app\'s library and turn on the AI-generated label.',
      ],
      zh: [
        'CapCut 路线：找一条用任一模板的帖子，点模板链接，丢进照片，在 App 里完成。免费又快，但场景就是模板固定那一个，多数版本一次只能放一张照片，导出带 CapCut 水印（付费去水印）。',
        'ViralReel 路线（' + ZH_TEMPLATE + ' ）：六套咖啡馆阵容可选、两个照片位可以安排进店人、图生视频模型几分钟渲染完整 15 秒场景、付费导出无水印、失败任务退积分。不用装 App，不用碰时间线。',
        '两条路线都是基于 AI 生成场景的粉丝作品；都不是官方。无论用哪条，发帖时在发布 App 曲库加原声，并打开 AI 生成标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a fancy cafe CapCut template?', zh: '有 fancy cafe 的 CapCut 模板吗？' },
        a: {
          en: 'Yes — two went up on 2 November 2026 within three hours of each other, each around 900 uses by the next day. Search the trend on TikTok and tap the template link under a post.',
          zh: '有——2026 年 11 月 2 日三小时内上线两个，次日各约 900 次使用。在 TikTok 搜趋势，点帖子下方的模板链接。',
        },
      },
      {
        q: { en: 'Which route renders the full scene?', zh: '哪条路线能渲染完整场景？' },
        a: {
          en: 'ViralReel renders the full 15-second scene — perch, walk-in, sideways look, climb-down — from your photos. Some CapCut versions hold a shorter or single-photo cut.',
          zh: 'ViralReel 从你的照片渲染完整的 15 秒场景——坐桌、进店、眼神、爬下来。部分 CapCut 版本是更短或单照片的剪辑。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe song',
    slug: 'fancy-cafe-song',
    title: {
      en: 'The Fancy Cafe Song – Steve Lacy\'s "Oh Yeah?"',
      zh: 'Fancy Cafe 的歌：Steve Lacy《Oh Yeah?》',
    },
    description: {
      en: 'The fancy cafe trend sound is Steve Lacy\'s "Oh Yeah?" — the 2026 title track that plays over the Spider-Man: Brand New Day credits. Where to find it and how to add it.',
      zh: 'fancy cafe 趋势原声是 Steve Lacy 的《Oh Yeah?》——2026 年同名主打歌、《蜘蛛侠：崭新一日》片尾曲。在哪找、怎么加。',
    },
    h1: { en: 'The Fancy Cafe Song: "Oh Yeah?"', zh: 'Fancy Cafe 的歌：《Oh Yeah?》' },
    lead: {
      en: 'The song in every fancy cafe video is "Oh Yeah?" by Steve Lacy — the title track of his 2026 album and the end-credits song of Spider-Man: Brand New Day.',
      zh: '每条 fancy cafe 视频里的歌都是 Steve Lacy 的《Oh Yeah?》——他 2026 年专辑的主打歌、《蜘蛛侠：崭新一日》片尾曲。',
    },
    guideTitle: {
      en: 'What plays in the fancy cafe trend, and how to add it',
      zh: 'fancy cafe 趋势里放的是什么歌，怎么加',
    },
    body: {
      en: [
        'On the original @leehoustonx post the audio reads "original sound - leehoustonx", but the track is "Oh Yeah?" by Steve Lacy. The song\'s title line lands right as the man realizes what he is sitting on, which is why the pairing stuck and why searches like "fancy cafe oh yeah" point at the song.',
        'ViralReel does not license the song or any recording of it. Your generated clip keeps the reference timing, so when you post, add "Oh Yeah?" from the TikTok, Reels, or Shorts library — search the track name, not the meme. Posts that keep the song cut on the beat read as part of the trend; posts without it read as random cafe footage.',
        'Do not confuse it with the "Oh Yeah? City Walk" format from early autumn 2026, which uses the same song under walking shots — no table, no climb-down. Same track, different meme.',
      ],
      zh: [
        '在 @leehoustonx 的原帖上音频显示为「original sound - leehoustonx」，但曲目是 Steve Lacy 的《Oh Yeah?》。歌名那句正好落在男人意识到自己坐的是什么的那一刻，这个 pairing 因此成立，「fancy cafe oh yeah」这类搜索也都指向这首歌。',
        'ViralReel 不授权这首歌及其任何录音。你的成片保留参考节奏，发帖时在 TikTok、Reels 或 Shorts 的曲库里加《Oh Yeah?》——搜歌名，不是搜梗。卡上节拍的视频会被认作趋势的一部分；没加歌的看起来就像随机咖啡馆素材。',
        '别和 2026 年初秋的「Oh Yeah? City Walk」格式混淆——同一首歌配行走镜头，没有桌子，也没有爬下来。同一首歌，不同的梗。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What song is in the fancy cafe trend?', zh: 'fancy cafe 趋势里是什么歌？' },
        a: {
          en: '"Oh Yeah?" by Steve Lacy — his 2026 title track, also the end-credits song of Spider-Man: Brand New Day.',
          zh: 'Steve Lacy 的《Oh Yeah?》——他 2026 年的主打歌，也是《蜘蛛侠：崭新一日》的片尾曲。',
        },
      },
      {
        q: { en: 'Does my ViralReel export include the song?', zh: 'ViralReel 导出的视频带歌吗？' },
        a: {
          en: 'It carries the reference timing but ViralReel does not license the track — add "Oh Yeah?" from your posting app\'s library when you publish.',
          zh: '成片带参考节奏，但 ViralReel 不授权该曲目——发布时在发布 App 的曲库里加《Oh Yeah?》。',
        },
      },
    ],
  },
  {
    keyword: 'pov fancy cafe',
    slug: 'pov-fancy-cafe',
    title: {
      en: 'POV: Your First Time in a Fancy Cafe – the Caption That Built a Trend',
      zh: 'POV: Your First Time in a Fancy Cafe——撑起一个趋势的文案',
    },
    description: {
      en: 'The "POV: your first time in a fancy cafe" caption, its variants, and how to write yours — then make the matching 15-second clip from two photos.',
      zh: '「POV: your first time in a fancy cafe」文案的变体与写法——再用两张照片做配套的 15 秒成片。',
    },
    h1: { en: 'POV: Your First Time in a Fancy Cafe', zh: 'POV: Your First Time in a Fancy Cafe' },
    lead: {
      en: '"POV: your first time in a fancy cafe" is the caption under every version of the trend — and its variants carry the joke when the scene stays the same.',
      zh: '「POV: your first time in a fancy cafe」是每一条版本下面的固定文案——场景不变时，变体文案负责把笑点讲完。',
    },
    guideTitle: {
      en: 'The POV caption and its best variants',
      zh: 'POV 文案与它的高分变体',
    },
    body: {
      en: [
        'The canonical caption is "POV: your first time in a fancy cafe". The most-used variants are "can\'t take bro anywhere nice", the Spanish "tu primera vez en una cafetería elegante" and "yo en un lugar caro", and the Japanese table-chair mix-up framing. All of them do the same job: they tell the viewer the person on the table does not know yet.',
        'Write yours in one line, keep the word "first" or a "first time" feeling, and tag whoever is on the table — the tag is what turns a scene into a joke about someone specific. Pair it with #yourfirsttimeinafancycafe so the post joins the hashtag.',
        'The clip under the caption is the fixed cafe scene — make yours at ' + EN_TEMPLATE + ' with two full-body photos, one of six casts, 15 seconds at 9:16, and label it AI when you post.',
      ],
      zh: [
        '标准文案是「POV: your first time in a fancy cafe」。最常用的变体有「can\'t take bro anywhere nice」、西语的「tu primera vez en una cafetería elegante」和「yo en un lugar caro」、日式的「把桌子和椅子搞混」。它们做的是同一件事：告诉观众——桌上那个人还不知道。',
        '你的文案写一行就够，保留「first」或「第一次」的感觉，并 @ 坐桌的那位——这个 @ 才是把场景变成「关于某人的笑话」的关键。再加 #yourfirsttimeinafancycafe 让帖子进标签。',
        '文案下面的成片是固定的咖啡馆场景——到 ' + ZH_TEMPLATE + ' 用两张全身照做你的版本，六套阵容选一，15 秒 9:16，发布时标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What caption should I use for my fancy cafe video?', zh: 'fancy cafe 视频配什么文案？' },
        a: {
          en: '"POV: your first time in a fancy cafe" if you are the one on the table; "can\'t take bro anywhere nice" if you cast a friend. Add #yourfirsttimeinafancycafe and an AI label.',
          zh: '坐桌的是你就用「POV: your first time in a fancy cafe」；安排了朋友就用「can\'t take bro anywhere nice」。加 #yourfirsttimeinafancycafe 和 AI 标注。',
        },
      },
      {
        q: { en: 'Does the caption go inside the video?', zh: '文案要写进视频里吗？' },
        a: {
          en: 'No — the original scene has no text in frame. The caption lives in the post text; adding text on top is optional and most viral versions skip it.',
          zh: '不用——原场景画面里没有字。文案放在帖子文字里；画面加字是可选的，多数爆火版本都不加。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe with friend',
    slug: 'fancy-cafe-with-friend',
    title: {
      en: 'Fancy Cafe With a Friend – Two Photos, Two Roles',
      zh: '和朋友一起玩 fancy cafe：两张照片，两个角色',
    },
    description: {
      en: 'Make the fancy cafe video with a friend: photo 1 sits on the table, photo 2 walks in. 15-second 9:16 MP4, free credits for new accounts.',
      zh: '和朋友一起做 fancy cafe 视频：第 1 张照片坐桌，第 2 张进店。15 秒 9:16 MP4，新账号送免费积分。',
    },
    h1: { en: 'Fancy Cafe With a Friend', zh: '和朋友一起玩 Fancy Cafe' },
    lead: {
      en: 'The fancy cafe trend is a two-hander: photo 1 sits on the table, photo 2 walks in — cast your friend as the one who makes the mistake and the joke becomes about them.',
      zh: 'fancy cafe 趋势是双人戏：第 1 张照片坐桌，第 2 张进店——把朋友安排成犯错的那个人，笑话就变成了「关于他」。',
    },
    guideTitle: {
      en: 'Casting the fancy cafe scene with two people',
      zh: '两个人怎么分配 fancy cafe 的角色',
    },
    body: {
      en: [
        'The scene needs exactly two people: the one perched on the tiny table, and the one who walks in and uses the table as a table. On ViralReel you cast both — photo 1 is the table-sitter, photo 2 is the walk-in. The funniest casting is usually the confident friend on the table and the deadpan friend walking in.',
        'Photo rules that matter here: one person per photo, full body, relaxed. A stiff passport pose breaks the joke, because the person on the table has to look like they belong there. Do not upload photos of people who did not agree to be in the joke.',
        'Generate at ' + EN_TEMPLATE + ' — pick any cast except the dog clip, upload both photos, and post with "can\'t take bro anywhere nice" and #yourfirsttimeinafancycafe.',
      ],
      zh: [
        '这个场景只需要两个人：坐在小桌上的那个，和走进来把桌子当桌子用的那个。在 ViralReel 两个都能安排——第 1 张是坐桌者，第 2 张是进店人。最好笑的分配通常是：自信的那位坐桌，面瘫的那位进店。',
        '照片规则在这里尤其重要：每张一个人、全身、姿势放松。证件照式的僵硬姿势会毁掉笑点，因为坐桌的人必须看起来像理所当然。不要上传未经同意的人的照片。',
        '到 ' + ZH_TEMPLATE + ' 生成——选狗狗以外的任意阵容，上传两张照片，配「can\'t take bro anywhere nice」和 #yourfirsttimeinafancycafe 发布。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can two people be in one photo?', zh: '一张照片里可以有两个人吗？' },
        a: {
          en: 'Better not — with two faces in one photo the model picks who sits on the table. One clear person per photo keeps the casting in your hands.',
          zh: '最好别——一张照片两张脸时，模型会自己挑谁坐桌。每张照片一个清晰的人，选角权才在你手里。',
        },
      },
      {
        q: { en: 'Who should sit on the table?', zh: '谁坐桌子比较好？' },
        a: {
          en: 'Whoever can look the most unbothered in a photo. The joke needs the table-sitter relaxed, so pick the friend with the best "this is fine" energy.',
          zh: '照片里最能「毫不在意」的那个。笑点要求坐桌的人放松，选那位最有「这没什么」气质的朋友。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe dog',
    slug: 'fancy-cafe-dog',
    title: {
      en: 'Fancy Cafe Dog – Put Your Pet on the Tiny Table',
      zh: 'Fancy Cafe 狗狗版：把你家宠物放上小桌',
    },
    description: {
      en: 'The fancy cafe dog version: your pet perched on the tiny cafe table with its own coffee. One full-body photo of your dog, 15-second 9:16 MP4.',
      zh: 'fancy cafe 狗狗版：你家宠物坐在咖啡馆小桌上，还配了咖啡。一张狗狗全身照，15 秒 9:16 MP4。',
    },
    h1: { en: 'Fancy Cafe Dog', zh: 'Fancy Cafe 狗狗版' },
    lead: {
      en: 'The dog version of the fancy cafe trend puts a Great Pyrenees on the tiny table with its own coffee — you can put your pet there from one full-body photo.',
      zh: 'fancy cafe 趋势的狗狗版让一只大白熊犬坐在小桌上、配了自己的咖啡——一张全身照就能把你家宠物放上去。',
    },
    guideTitle: {
      en: 'Making the fancy cafe dog version',
      zh: '制作 fancy cafe 狗狗版',
    },
    body: {
      en: [
        'The pet version came from @bella_thepyrenees — a Great Pyrenees sitting up on the tiny steel table, paws forward, coffee included. It became one of the casts ViralReel offers because pets test the trend\'s whole premise: the model has to keep the fur, the markings and the size while giving the dog the man\'s calm.',
        'The photo rules: full body, sitting or standing, fur pattern visible against the background. A headshot of a dark-furred dog comes back as a shapeless blob; a bright, full-body sitting pose comes back as your dog, on the table, unbothered.',
        'Pick the Dog on the Table cast at ' + EN_TEMPLATE + ', upload your pet\'s photo (a second photo of the person who walks in is optional), and render the 15-second scene. Label it AI when you post.',
      ],
      zh: [
        '宠物版来自 @bella_thepyrenees——一只大白熊犬坐在小钢桌上、爪子朝前、咖啡自带。它成了 ViralReel 提供的阵容之一，因为宠物最考验这个趋势的核心：模型要保住毛色、花纹和体型，同时把那个男人的淡定给到狗。',
        '照片规则：全身、坐姿或站姿、毛色花纹和背景有区分。深毛色狗狗的大头照会被画成一团没形状的东西；明亮、全身、坐姿的照片会让你的狗淡定地坐上桌子。',
        '在 ' + ZH_TEMPLATE + ' 选「狗狗坐桌」阵容，上传宠物照片（第二张进店人的照片可选），渲染 15 秒场景。发布时标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can my cat do the fancy cafe trend?', zh: '我家猫能玩 fancy cafe 吗？' },
        a: {
          en: 'The dedicated cast is a dog clip, but the model handles cats from the same kind of photo — full body, fur visible. Expect less precision than with the dog clip.',
          zh: '专属阵容是狗狗片段，但模型用同类照片也能处理猫——全身、毛色可见。精度预期比狗狗片段低一些。',
        },
      },
      {
        q: { en: 'Does the dog video need two photos?', zh: '狗狗版需要两张照片吗？' },
        a: {
          en: 'One photo of your dog is enough — the person who walks in stays as filmed. Add a second photo only if you want to cast the human too.',
          zh: '一张狗狗照片就够——进店的人保持原样。想把人也换掉才需要第二张照片。',
        },
      },
    ],
  },
  {
    keyword: 'fancy cafe trend',
    slug: 'fancy-cafe-trend',
    title: {
      en: 'The Fancy Cafe Trend – Origin, Timeline, and How Long It Lasts',
      zh: 'Fancy Cafe 趋势：起源、时间线，还能火多久',
    },
    description: {
      en: 'The fancy cafe trend timeline: @leehoustonx on 1 Nov 2026, 9.8M plays in two days, two CapCut templates, 1,023 posts by 3 November. Where it goes next.',
      zh: 'fancy cafe 趋势时间线：@leehoustonx 2026 年 11 月 1 日，两天 980 万播放，两个 CapCut 模板，11 月 3 日 1,023 条帖子。接下来会怎么走。',
    },
    h1: { en: 'The Fancy Cafe Trend', zh: 'Fancy Cafe 趋势' },
    lead: {
      en: 'The fancy cafe trend started on 1 November 2026 and hit 1,023 posts under #yourfirsttimeinafancycafe by 3 November — growing about 600 posts a day.',
      zh: 'fancy cafe 趋势始于 2026 年 11 月 1 日，到 11 月 3 日 #yourfirsttimeinafancycafe 下已有 1,023 条帖子——每天新增约 600 条。',
    },
    guideTitle: {
      en: 'The fancy cafe trend, day by day',
      zh: 'fancy cafe 趋势，一天一天看',
    },
    body: {
      en: [
        '1 November 2026: @stevenwommack posts a real-cafe take under a wall of records (2.2M plays). Hours later @leehoustonx posts the concrete-cafe scene to Steve Lacy\'s "Oh Yeah?" — 9.8M plays and 1.3M likes in two days. 2 November: the face-swap wave (@kevkevkiwi, @boby.biggsjohnson\'s 4.7M cream suit, @kkubi99\'s 2.9M Korean couple), the hashtag is created, and two CapCut templates go up within three hours of each other. 3 November: 1,023 posts, about 600 new a day, casts widening to anime, hand-drawn, Colombian and dog versions.',
        'Why it is still climbing: the input is one or two photos, the scene is fixed so every post reads as the meme, and the two-person format lets people joke about specific friends — the engine that keeps a trend alive after the first viral post. Expect the usual arc: a week of peak novelty, then survival in niches (pets, couples, offices) for several more.',
        'The window to post is now, while the hashtag is still small enough to rank in. Make your version at ' + EN_TEMPLATE + ' — two photos, six casts, 15 seconds at 9:16 — caption the POV, and label it AI.',
      ],
      zh: [
        '2026 年 11 月 1 日：@stevenwommack 在唱片墙下发真咖啡馆版（220 万播放）。几小时后 @leehoustonx 发布配 Steve Lacy《Oh Yeah?》的水泥咖啡馆场景——两天 980 万播放、130 万点赞。11 月 2 日：脸换潮（@kevkevkiwi、@boby.biggsjohnson 的 470 万奶油西装、@kkubi99 的 290 万韩国情侣）、标签创建、两个 CapCut 模板三小时内先后上线。11 月 3 日：1,023 条帖子，每天新增约 600 条，阵容扩展到动漫、手绘、哥伦比亚和狗狗版。',
        '为什么还在涨：输入只要一两张照片、场景固定让每条帖子都被读成梗、双人格式让大家拿具体的朋友开玩笑——这是让趋势在第一波爆火后继续活着的引擎。按照常见弧线：一周的新鲜感高峰，然后在细分场景（宠物、情侣、办公室）里再活几周。',
        '现在正是发帖窗口——标签还小，能排上去。到 ' + ZH_TEMPLATE + ' 做你的版本——两张照片、六套阵容、15 秒 9:16——配 POV 文案，标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'When did the fancy cafe trend start?', zh: 'fancy cafe 趋势是什么时候开始的？' },
        a: {
          en: '1 November 2026 — @stevenwommack\'s real-cafe version first, @leehoustonx\'s concrete-cafe scene hours later. The meme wave and CapCut templates followed on 2 November.',
          zh: '2026 年 11 月 1 日——先有 @stevenwommack 的真咖啡馆版，几小时后是 @leehoustonx 的水泥咖啡馆场景。梗浪潮和 CapCut 模板在 11 月 2 日跟进。',
        },
      },
      {
        q: { en: 'Is the fancy cafe trend still worth posting?', zh: 'fancy cafe 趋势现在发还来得及吗？' },
        a: {
          en: 'Yes — at roughly 600 new posts a day the hashtag is still small, which is the best window for reach. Trends of this shape typically peak in week one.',
          zh: '来得及——每天约 600 条新增意味着标签还小，正是触达最好的窗口。这类趋势通常第一周见顶。',
        },
      },
    ],
  },
  {
    keyword: 'first time in a fancy cafe original',
    slug: 'first-time-in-a-fancy-cafe-original',
    title: {
      en: 'The Original Fancy Cafe Video – @leehoustonx and the Record-Wall Rival',
      zh: 'Fancy Cafe 原视频：@leehoustonx 与唱片墙竞争者',
    },
    description: {
      en: 'Which fancy cafe video is the original: @leehoustonx\'s AI concrete-cafe scene (9.8M plays) vs @stevenwommack\'s real record-wall cafe (2.2M). Both from 1 Nov 2026.',
      zh: '哪条才是 fancy cafe 原视频：@leehoustonx 的 AI 水泥咖啡馆（980 万播放）vs @stevenwommack 的真唱片墙咖啡馆（220 万）。都来自 2026 年 11 月 1 日。',
    },
    h1: { en: 'The Original Fancy Cafe Video', zh: 'Fancy Cafe 原视频' },
    lead: {
      en: 'The original fancy cafe video that every remix uses is @leehoustonx\'s concrete-cafe scene, posted 1 November 2026 — 9.8M plays in two days; a real-cafe rival went up the same day.',
      zh: '所有翻拍使用的 fancy cafe 原视频是 @leehoustonx 的水泥咖啡馆场景，2026 年 11 月 1 日发布——两天 980 万播放；同天还有一条真咖啡馆版。',
    },
    guideTitle: {
      en: 'Which file counts as the original — and what the remixes change',
      zh: '哪条才算「原版」——以及翻拍们改了什么',
    },
    body: {
      en: [
        'There are two "originals" people mean. The scene template: @leehoustonx\'s fixed-camera clip of the bare concrete cafe — the one every AI swap uses, widely described as AI-generated, with Steve Lacy\'s "Oh Yeah?" on it. The format ancestor: @stevenwommack\'s same-day, real-cafe version under a wall of records — genuinely filmed, same caption, 2.2M plays. Comment sections still argue about which came first; the concrete cafe won the remix war either way.',
        'What the remixes change is only the cast. Look at any version: the wall, the cups, the woman\'s black suit and the timing never move — a new person perches on the table and climbs down. That fixed-scene discipline is why a face swap reads instantly as this meme and not as generic cafe footage.',
        'You do not need the original files to join — the scene is rebuilt from your photos at ' + EN_TEMPLATE + ', with six casts including the original seating. Two full-body photos, 15 seconds, 9:16.',
      ],
      zh: [
        '大家说的「原版」有两个。场景模板：@leehoustonx 的固定机位空旷水泥咖啡馆短片——所有 AI 换脸用的那条，被普遍认为是 AI 生成的，配 Steve Lacy《Oh Yeah?》。格式祖先：@stevenwommack 同天的真咖啡馆版——真实拍摄、同款配文、220 万播放。评论区还在争谁先谁后；无论如何，水泥咖啡馆赢下了翻拍战争。',
        '翻拍改变的只有阵容。看任何版本：墙、杯子、女人的黑西装、节奏从不移动——只是新人坐上桌子再爬下来。这种固定场景的纪律，让换脸瞬间被读成这个梗、而不是随机咖啡馆素材。',
        '加入不需要原片——场景在 ' + ZH_TEMPLATE + ' 用你的照片重建，六套阵容里就包括原版坐法。两张全身照、15 秒、9:16。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Where is the original fancy cafe video?', zh: 'fancy cafe 原视频在哪看？' },
        a: {
          en: 'On TikTok: @leehoustonx\'s post from 1 November 2026 (the concrete cafe), and @stevenwommack\'s record-wall version from the same day. Both are linked all over the trend\'s comment sections.',
          zh: '在 TikTok：@leehoustonx 2026 年 11 月 1 日的帖子（水泥咖啡馆），和同天 @stevenwommack 的唱片墙版。趋势的评论区里到处都是链接。',
        },
      },
      {
        q: { en: 'Is the original video AI-generated?', zh: '原视频是 AI 生成的吗？' },
        a: {
          en: 'The concrete-cafe scene is widely described as AI-generated; the record-wall version was filmed for real. Every face-swap since is a new AI render.',
          zh: '水泥咖啡馆场景被普遍认为是 AI 生成的；唱片墙版是实拍。之后所有换脸都是新的 AI 渲染。',
        },
      },
    ],
  },
  ...FANCY_CAFE_CITE_TAILS,
];

export function getFancyCafeLongTail(slug: string) {
  return FANCY_CAFE_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly FancyCafeHowToStep[] {
  return entry.steps === 'shared' ? FANCY_CAFE_HOW_TO_STEPS : entry.steps;
}

export function buildLongTailFaq(
  entry: LongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const lang = zh ? 'zh' : 'en';
  const own = entry.faq.map((item) => [item.q[lang], item.a[lang]] as [string, string]);
  const template = templateUrl(zh);
  const shared: [string, string][] = zh
    ? [
        [
          '在哪里制作？',
          `在 ViralReel 制作：${template} 。六套咖啡馆阵容任选，上传两张你有权使用的照片，生成 15 秒 9:16 的 MP4。ViralReel 不授权趋势原声或 Steve Lacy 的《Oh Yeah?》。`,
        ],
        [
          '照片有什么要求？',
          '两张全身照，每张一个人，姿势放松：第 1 张坐桌，第 2 张进店。不要证件照式的僵硬姿势，也不要一张照片塞两张脸。不要用未成年人、名人或未经同意的人。',
        ],
        ['能免费试吗？', `新账号的免费积分够先做 1 条。之后不是永远免费。${fancyCafeFifteenSecondCostAnswer(PRODUCT, true, ctx)}`],
        ['要多少积分？', fancyCafeFifteenSecondCostAnswer(PRODUCT, true, ctx)],
        ['渲染要多久？', '通常几分钟，视模型和队列而定；成片在「历史记录」里取，失败任务自动退积分。'],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        [
          '这是官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Steve Lacy、其厂牌、CapCut 或 TikTok 均无关联。这是粉丝作品。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Pick one of six cafe casts, upload two photos you have permission to use, and generate a 15-second 9:16 MP4. ViralReel does not license the trend sound or Steve Lacy's "Oh Yeah?".`,
        ],
        [
          'What do the photos need?',
          'Two full-body photos, one person each, relaxed poses: photo 1 sits on the table, photo 2 walks in. No passport-stiff poses and no two faces in one photo. Do not use minors, celebrities, or people who did not agree.',
        ],
        ['Can I try it free?', `Starter credits cover 1 video. It is not free forever. ${fancyCafeFifteenSecondCostAnswer(PRODUCT, false, ctx)}`],
        ['How many credits does it cost?', fancyCafeFifteenSecondCostAnswer(PRODUCT, false, ctx)],
        ['How long does rendering take?', 'Typically a few minutes depending on the model and queue; finished clips land in History and failed jobs are refunded automatically.'],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        [
          'Is this an official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Steve Lacy, his label, CapCut, or TikTok. This is fan work.',
        ],
      ];
  return [...own, ...shared];
}

export interface FancyCafeLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function fancyCafeLinkGroups(zh: boolean): FancyCafeLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: FANCY_CAFE_TEMPLATE_PATH, label: zh ? 'Fancy cafe 模板' : 'Fancy cafe template' },
        { href: '/first-time-in-a-fancy-cafe-ai', label: 'First time in a fancy cafe AI' },
        { href: '/first-time-in-a-fancy-cafe-ai-video', label: zh ? 'AI 视频' : 'AI video' },
        { href: '/fancy-cafe-template', label: zh ? 'Fancy cafe 模板页' : 'Fancy cafe template page' },
        { href: '/fancy-cafe-generator', label: zh ? 'AI 视频生成器' : 'AI video generator' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '趋势和搜索别名' : 'Trend and search aliases',
      links: [
        { href: '/first-time-in-a-fancy-cafe-tiktok', label: zh ? 'TikTok 趋势' : 'The TikTok trend' },
        { href: '/fancy-cafe-trend', label: zh ? '趋势时间线' : 'The trend timeline' },
        { href: '/fancy-cafe-meme', label: zh ? '梗，一页讲清' : 'The meme, explained' },
        { href: '/pov-fancy-cafe', label: zh ? 'POV 文案写法' : 'The POV caption' },
        { href: '/first-time-in-a-fancy-cafe-original', label: zh ? '原视频是哪条' : 'Which video is the original' },
        { href: '/fancy-cafe-song', label: zh ? '歌：Oh Yeah?' : 'The song: Oh Yeah?' },
      ],
    },
    {
      title: zh ? '对照和答疑' : 'Comparisons and answers',
      links: [
        { href: '/fancy-cafe-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: '/fancy-cafe-filter', label: zh ? '「滤镜」到底在哪做' : 'Where the "filter" actually runs' },
        { href: FANCY_CAFE_POSTS.capcut, label: zh ? '长文对照：ViralReel 和 CapCut' : 'Long read: ViralReel vs CapCut' },
        { href: FANCY_CAFE_POSTS.song, label: zh ? '长文：Oh Yeah? 这首歌' : 'Long read: the Oh Yeah? song' },
      ],
    },
    {
      title: zh ? '角色和玩法' : 'Casting and variants',
      links: [
        { href: '/fancy-cafe-with-friend', label: zh ? '和朋友一起（双人）' : 'With a friend (two roles)' },
        { href: '/fancy-cafe-dog', label: zh ? '狗狗坐桌版' : 'The dog version' },
      ],
    },
    {
      title: zh ? 'ChatGPT 会问的问题' : 'Questions ChatGPT asks',
      links: [
        { href: '/fancy-cafe-free', label: zh ? '是否免费：60 / 75 / 90' : 'Is it free? 60 / 75 / 90' },
        { href: '/fancy-cafe-best', label: zh ? '什么时候用这个模板' : 'When this template fits' },
        { href: '/fancy-cafe-how-to', label: zh ? '短教程' : 'Short how-to' },
        { href: '/fancy-cafe-chatgpt', label: 'ChatGPT' },
        { href: '/fancy-cafe-prompt', label: zh ? '没有提示词框' : 'No prompt box' },
        { href: '/fancy-cafe-sound', label: zh ? '原声：Oh Yeah?' : 'The sound: Oh Yeah?' },
        { href: '/fancy-cafe-no-watermark', label: zh ? '无水印' : 'No watermark' },
        { href: '/fancy-cafe-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
        { href: '/fancy-cafe-kling', label: 'Kling' },
        { href: '/fancy-cafe-seedance', label: 'Seedance' },
        { href: '/kevkevkiwi-fancy-cafe', label: '@kevkevkiwi' },
        { href: '/first-time-at-a-fancy-cafe', label: zh ? 'at 和 in 是同一条' : '“at” is the same clip' },
        { href: '/fancy-cafe-first-time', label: zh ? '颠倒词序' : 'Flipped word order' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: FANCY_CAFE_POSTS.howTo, label: zh ? '如何制作 fancy cafe AI 视频' : 'How to make a fancy cafe AI video' },
        { href: FANCY_CAFE_POSTS.explained, label: zh ? '趋势是什么、从哪来' : 'What the trend is and where it came from' },
        { href: FANCY_CAFE_POSTS.best, label: zh ? '最好的 fancy cafe AI 生成器' : 'Best fancy cafe AI generators' },
        { href: FANCY_CAFE_POSTS.roundup, label: zh ? '2026 年 10 月 AI 梗视频盘点' : 'October 2026 AI meme videos' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding AI 模板' : 'Tiny Desk Outstanding AI template' },
      ],
    },
  ];
}

export const FANCY_CAFE_LONG_TAIL_ROUTES = FANCY_CAFE_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
