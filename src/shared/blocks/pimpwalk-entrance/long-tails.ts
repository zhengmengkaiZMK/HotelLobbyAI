import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { PIMPWALK_HOW_TO_STEPS, type PimpwalkHowToStep } from './steps';

/**
 * Long-tail landings for the Pimpwalk Entrance template.
 *
 * To add another keyword: append an entry here. The sitemap reads
 * PIMPWALK_LONG_TAIL_ROUTES. Public URLs are served by the single
 * `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `pimpwalk-entrance-ai-template` slug.
 */

export const PIMPWALK_TEMPLATE_PATH = '/pimpwalk-entrance-ai-template';

export const PIMPWALK_POSTS = {
  howTo: '/blog/how-to-make-pimpwalk-entrance',
  explained: '/blog/what-is-pimpwalk-entrance',
  capcut: '/blog/pimpwalk-entrance-capcut-vs-viralreel',
  song: '/blog/pimpwalk-entrance-song',
  place: '/blog/is-pimpwalk-entrance-a-real-place',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
} as const;

const PRODUCT = { en: 'Pimpwalk Entrance', zh: 'Pimpwalk Entrance' };

const EN_TEMPLATE = 'https://www.viralreel.app/pimpwalk-entrance-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/pimpwalk-entrance-ai-template';

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
  steps: 'shared' | readonly PimpwalkHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTOS_EN =
  'Two photos are the whole input. Photo 1 makes the entrance; photo 2 holds the door. Full body beats waist-up — the whole walk happens below the chest — one person per photo, sharp, no sunglasses and no beauty filter. Do not upload minors, celebrities, or people who did not agree.';
const PHOTOS_ZH =
  '两张照片就是全部输入。第 1 张进场，第 2 张拉门。全身照优于半身——整个动作都在胸部以下——每张一个人，照片清晰，不要墨镜和美颜。不要上传未成年人、名人或未经同意的人。';

export const PIMPWALK_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'pimpwalk entrance ai',
    slug: 'pimpwalk-entrance-ai',
    title: {
      en: 'Pimpwalk Entrance AI – Two Photos Through the Doorway',
      zh: 'Pimpwalk Entrance AI：两张照片走进那扇门',
    },
    description: {
      en: 'pimpwalk entrance ai: two photos put you through the viral hold-the-door doorway — 15-second 9:16 MP4 in the browser. Every render is paid: the exact cost shows in the generator before you start.',
      zh: 'pimpwalk entrance ai：两张照片把你送进爆火扶门场景——浏览器直出 15 秒 9:16 MP4，每次渲染都计费，开始前显示确切费用。',
    },
    h1: { en: 'Pimpwalk Entrance AI', zh: 'Pimpwalk Entrance AI' },
    lead: {
      en: 'A pimpwalk entrance AI search wants the doorway: your face strutting in low and slow while a friend holds the door — 15 seconds, 9:16.',
      zh: '搜 pimpwalk entrance ai 要的是那扇门：你低慢进场、朋友拉门——15 秒，9:16。',
    },
    guideTitle: {
      en: 'How to make a Pimpwalk Entrance AI video',
      zh: '如何制作 Pimpwalk Entrance AI 视频',
    },
    body: {
      en: [
        'The trend runs on AI renders of the scene @mrdanielkimchi posted on 17 October 2026 — the one whose sound carries the whole trend — and the breakout @mrmiltonfrost burger-shop dandy passed 592K plays. You do not need the app: the Pimpwalk Entrance AI page on ViralReel runs the same doorway in the browser from two photos.',
        `Make it at ${EN_TEMPLATE}. ${PHOTOS_EN} Pick the cast — Burger Shop Dandy, Walter White on the Door, or Yellow Shirt Strut — and the page opens on 9:16 with the length fixed at 15 seconds. Rendering typically takes a few minutes, and every render is paid: the exact cost shows in the generator before you start.`,
        'The download is a new MP4 of a new scene. ViralReel does not license the trend sound ("original sound - mrdanielkimchi"). Post with #pimpwalkentrance and #holdthedoor, caption the destination — "me walking into the barbershop" — and turn on the AI-generated label.',
      ],
      zh: [
        '趋势跑在 @mrdanielkimchi 2026 年 10 月 17 日发布的场景的 AI 渲染上——他的原声带火了整个趋势，破圈的 @mrmiltonfrost 汉堡店花花公子播放破 59 万。你不需要那个 App：ViralReel 的 Pimpwalk Entrance AI 页面在浏览器里用两张照片跑同一扇门。',
        `制作入口：${ZH_TEMPLATE} 。${PHOTOS_ZH} 阵容任选——汉堡店花花公子、门后老白、黄衫进场——页面默认 9:16，时长固定 15 秒。渲染通常几分钟；每次渲染都计费，开始前显示确切费用。`,
        '下载的是一条新场景的新 MP4。ViralReel 不授权趋势原声（「original sound - mrdanielkimchi」）。带 #pimpwalkentrance 和 #holdthedoor 发布，配文写「走进了哪里」——「me walking into the barbershop」——并打开 AI 生成标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the pimpwalk entrance scene AI-generated?', zh: 'pimpwalk entrance 场景是 AI 生成的吗？' },
        a: {
          en: 'Yes — the original doorway clip is widely described as AI-generated, and every viral version since is a new AI render of the same scene with a new cast. ViralReel makes another new render from your photos.',
          zh: '是——原版门口片段被普遍认为是 AI 生成的，之后所有爆火版本都是对同一场景的新 AI 渲染、只换阵容。ViralReel 用你的照片再做一条新渲染。',
        },
      },
      {
        q: { en: 'Do I need both photos?', zh: '两张照片都必须传吗？' },
        a: {
          en: 'With one photo you make the entrance and the clip keeps its own door holder. Add photo 2 to cast whoever should hold the door — friends, a sibling, your dad.',
          zh: '一张照片时你负责进场，片段保留自己的拉门人。加第 2 张就能安排谁来拉门——朋友、兄弟、你爸。',
        },
      },
    ],
  },
  {
    keyword: 'how to make pimpwalk entrance',
    slug: 'how-to-make-pimpwalk-entrance',
    title: {
      en: 'How to Make a Pimpwalk Entrance Video (Two Photos, 15 Seconds)',
      zh: '怎么做 Pimpwalk Entrance 视频（两张照片，15 秒）',
    },
    description: {
      en: 'How to make a pimpwalk entrance video: pick a doorway cast, upload walker first and door holder second, generate a 15-second 9:16 MP4 in minutes. Transparent pay-per-credit pricing.',
      zh: '怎么做 pimpwalk entrance 视频：选门口阵容、进门照放第一张拉门照放第二张、几分钟生成 15 秒 9:16 MP4。按积分计费、价格透明。',
    },
    h1: { en: 'How to Make a Pimpwalk Entrance Video', zh: '怎么做 Pimpwalk Entrance 视频' },
    lead: {
      en: 'Making a pimpwalk entrance video takes two photos and about five minutes of rendering — here is the full walkthrough and the photo rules that make it funny.',
      zh: '做一条 pimpwalk entrance 视频需要两张照片和约五分钟渲染——这是完整教程，以及决定它好不好笑的照片规则。',
    },
    guideTitle: {
      en: 'Making the pimpwalk entrance, end to end',
      zh: '从照片到成片：pimpwalk entrance 全流程',
    },
    body: {
      en: [
        'The entrance everyone is making has a fixed four-beat structure: the shop doorway at night, the door swinging wide with the friend grooving, the guest strutting through in a low, leaned-back pimp walk, and the rise into the close-up. An AI video generator recreates that scene with your faces in it — ViralReel does it from two photos in the browser, and the render typically takes a few minutes.',
        'Photo rules that decide whether it is funny: full body beats waist-up, because the whole walk happens below the chest — bent knees, the drop, the rise. One person per photo. Sharp, no sunglasses, no beauty filter: the last second is a face filling the frame. And dress on purpose — a suit sells the strut, a grey hoodie makes it funnier.',
        `Make it at ${EN_TEMPLATE}. Pick the Burger Shop Dandy for the classic read (the 592K-play cast), Walter White on the Door for the celebrity set, or the Yellow Shirt Strut. Post with #pimpwalkentrance and #holdthedoor, caption the destination, add the trend sound from your app's library, and label it AI.`,
      ],
      zh: [
        '所有人都在做的这条进场有固定的四拍结构：夜晚的小店门口、门拉开朋友摇摆、客人低姿后仰 pimp walk 进场、起身特写。AI 视频生成器用你的脸重建这个场景——ViralReel 在浏览器里用两张照片完成，渲染通常几分钟。',
        '决定好不好笑的照片规则：全身优于半身，因为整个动作都在胸部以下——屈膝、下蹲、起身。每张照片一个人。清晰、不要墨镜、不要美颜：最后一秒是一张脸填满画面。穿着要有意图——西装撑住排面，灰色卫衣更好笑。',
        `制作入口：${ZH_TEMPLATE} 。经典读法选汉堡店花花公子（592K 播放阵容），名人套件选门后老白，或者黄衫进场。带 #pimpwalkentrance 和 #holdthedoor 发布，配文写「走进了哪里」，在发布 App 曲库加原声，并标注 AI。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long does the pimpwalk entrance render take?', zh: 'pimpwalk entrance 渲染要多久？' },
        a: {
          en: 'Typically a few minutes depending on the model and queue; finished clips appear in History and failed jobs are refunded automatically.',
          zh: '通常几分钟，视模型和队列而定；成片出现在「历史记录」，失败任务自动退积分。',
        },
      },
      {
        q: { en: 'What caption should I use?', zh: '配文写什么？' },
        a: {
          en: 'The destination: "me walking into the barbershop", "dad entering the family BBQ", "first day back at work" — plus #pimpwalkentrance and #holdthedoor.',
          zh: '写「走进了哪里」：「me walking into the barbershop」「dad entering the family BBQ」「上班第一天」——再加 #pimpwalkentrance 和 #holdthedoor。',
        },
      },
    ],
  },
  {
    keyword: 'is pimpwalk entrance free',
    slug: 'is-pimpwalk-entrance-free',
    title: {
      en: 'Is Pimpwalk Entrance Free? What "Getting In" Actually Costs',
      zh: 'Pimpwalk Entrance 免费吗？「进场」到底要花什么',
    },
    description: {
      en: 'Is pimpwalk entrance free? There is no venue to pay for — it is a meme. On ViralReel every render is paid: the exact credit cost shows on the button before you render.',
      zh: 'pimpwalk entrance 免费吗？没有场所可付钱——它是梗。ViralReel 每次渲染都按积分计费，开始前显示确切费用。',
    },
    h1: { en: 'Is Pimpwalk Entrance Free?', zh: 'Pimpwalk Entrance 免费吗？' },
    lead: {
      en: 'Short answer: there is nothing to buy a ticket for — Pimpwalk Entrance is a TikTok meme, not a venue. Making your own version on ViralReel is pay-per-credit: the exact cost shows before you render.',
      zh: '简短回答：没有门票可买——Pimpwalk Entrance 是 TikTok 梗，不是场所。在 ViralReel 做你自己的版本按次计费：开始前显示确切积分。',
    },
    guideTitle: {
      en: 'What Pimpwalk Entrance costs, honestly',
      zh: 'Pimpwalk Entrance 到底要花多少钱',
    },
    body: {
      en: [
        'If you searched "is pimpwalk entrance free" expecting a club door and a cover charge: there is no venue. The pimpwalk entrance is the hold-the-door meme — a drawn shop doorway from an AI clip posted on 17 October 2026 — and "getting in" means making your own version of the entrance, not entering anywhere.',
        'On ViralReel every render is paid. Each video costs credits — the exact number is shown on the button before you generate, and pricing scales with credit packs on the pricing page. Rendering typically takes a few minutes, and failed jobs are refunded automatically.',
        'The other routes are free too, with catches: the two CapCut templates (8,387 and 4,694 uses by 3 November) cost nothing but export with a CapCut watermark unless you pay CapCut, and most hold a single photo. Whatever route you take, the sound is free to add from your posting app\'s library — nobody licenses "original sound - mrdanielkimchi".',
      ],
      zh: [
        '如果你搜「pimpwalk entrance 免费吗」以为有一扇俱乐部大门和入场费：没有场所。pimpwalk entrance 是扶门梗——2026 年 10 月 17 日一条 AI 片段里画出来的小店门口——「进场」的意思是做一条你自己的进场视频，不是进入任何地方。',
        '在 ViralReel，每次渲染都计费：确切积分在生成前的按钮上标明，积分包定价见定价页。渲染通常几分钟，失败任务自动退积分。',
        '其他路线也免费，但有代价：两个 CapCut 模板（截至 11 月 3 日 8,387 和 4,694 次使用）不花钱，但导出带 CapCut 水印（付费去），且多数一次只能放一张照片。无论走哪条，原声都能在发布 App 曲库免费加——没有人授权「original sound - mrdanielkimchi」。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I pay to watch pimpwalk entrance videos?', zh: '看 pimpwalk entrance 视频要付费吗？' },
        a: {
          en: 'No — watching is free on TikTok. Only making your own version costs credits (or a CapCut watermark).',
          zh: '不用——在 TikTok 看是免费的。只有做你自己的版本才花积分（或者忍受 CapCut 水印）。',
        },
      },
      {
        q: { en: 'Are failed renders charged?', zh: '渲染失败收费吗？' },
        a: {
          en: 'No — failed jobs are refunded automatically as credits; retry with brighter, full-body photos.',
          zh: '不收——失败任务自动退积分；换更亮、更全身的照片重试。',
        },
      },
    ],
  },
  {
    keyword: 'how do i get into pimpwalk',
    slug: 'how-do-i-get-into-pimpwalk',
    title: {
      en: 'How Do I Get Into Pimpwalk? You Make the Entrance',
      zh: '怎么「进入」Pimpwalk？做一条进场视频就进了',
    },
    description: {
      en: 'How do I get into pimpwalk? There is no door to walk through — it is a meme. The way in: pick a doorway clip, upload two photos, and the AI walks you through. Steps inside.',
      zh: '怎么进入 pimpwalk？没有真的门可以走——它是梗。进入的方式：选门口片段、传两张照片，AI 送你过门。步骤在内。',
    },
    h1: { en: 'How Do I Get Into Pimpwalk?', zh: '怎么「进入」Pimpwalk？' },
    lead: {
      en: 'Short answer: by making your own version. Pimpwalk Entrance is not a club or a scene to join — it is a drawn doorway from a TikTok meme, and every render is somebody new walking through it.',
      zh: '简短回答：做一条你自己的版本。Pimpwalk Entrance 不是俱乐部也不是可以加入的圈子——它是 TikTok 梗里画出来的门，每次渲染都是某个新的人穿过它。',
    },
    guideTitle: {
      en: 'Getting "into" pimpwalk, literally',
      zh: '字面意义地「进」pimpwalk',
    },
    body: {
      en: [
        'The question makes sense once you have seen the meme: a shop door swings open at night, a friend grooves beside it, and somebody struts through like the whole street is theirs. It looks exclusive. It is the opposite — the format exists to put a new person through the door with every render. The dad, the boss, the dog, you.',
        `The way in: ${EN_TEMPLATE}. Pick one of three doorway casts — the Burger Shop Dandy (the 592K-play version), Walter White on the Door, or the Yellow Shirt Strut. Upload a full-body photo of whoever should make the entrance, and a second photo of who holds the door. The AI renders the 15-second scene: the door, the strut, the drop, the rise into the close-up.`,
        'Then post it like everyone does: #pimpwalkentrance, #holdthedoor, a caption naming the destination ("me walking into the barbershop", "first day back at work"), and the AI-generated label. That is the whole initiation — no list, no cover, no password.',
      ],
      zh: [
        '看过梗你就懂这个问题了：夜晚店门被拉开，朋友在门边摇摆，有人大摇大摆走进来像整条街都是他的。看起来很有门槛。其实正好相反——这个格式的存在意义就是每次渲染都送一个新的人进门。你爸、老板、狗、你。',
        `进入方式：${ZH_TEMPLATE} 。三条门口阵容任选——汉堡店花花公子（592K 播放版）、门后老白、黄衫进场。上传进场者的全身照，再传一张拉门人的照片。AI 渲染 15 秒场景：门、步伐、下蹲、起身特写。`,
        '然后照大家的发法发出去：#pimpwalkentrance、#holdthedoor、配文写「走进了哪里」（「me walking into the barbershop」「上班第一天」），加 AI 生成标注。入会仪式就这些——没有名单、没有门票、没有暗号。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a real Pimpwalk event or venue?', zh: '有真的 Pimpwalk 活动或场所吗？' },
        a: {
          en: 'No. The doorway is drawn — a fast-food shop in the AI clip @mrdanielkimchi posted on 17 October 2026. Everything since is a render of that same doorway.',
          zh: '没有。门是画出来的——@mrdanielkimchi 2026 年 10 月 17 日 AI 片段里的一家快餐店。之后的一切都是对同一扇门的渲染。',
        },
      },
      {
        q: { en: 'Who should I put through the door?', zh: '让谁进门比较好？' },
        a: {
          en: 'Whoever is least likely to walk like that — the dad, the boss, the dog. The 2026 pimp walk is an entrance someone else is made to do; that is the joke.',
          zh: '最不可能这么走的那个——你爸、老板、狗。2026 版 pimp walk 是「让别人替你完成的进场」；这就是笑点。',
        },
      },
    ],
  },
  {
    keyword: 'where is pimpwalk entrance located',
    slug: 'where-is-pimpwalk-entrance-located',
    title: {
      en: 'Where Is Pimpwalk Entrance Located? Nowhere — It Is Drawn',
      zh: 'Pimpwalk Entrance 在哪里？哪都不在——它是画出来的',
    },
    description: {
      en: 'Where is pimpwalk entrance located? There is no address: the doorway is a drawn fast-food shop from an AI TikTok clip posted 17 October 2026. Here is what it is and where to make one.',
      zh: 'pimpwalk entrance 在哪里？没有地址：那是 2026 年 10 月 17 日 AI 片段里画出来的快餐店门口。这里说清它是什么、在哪做。',
    },
    h1: { en: 'Where Is Pimpwalk Entrance Located?', zh: 'Pimpwalk Entrance 在哪里？' },
    lead: {
      en: 'Short answer: nowhere. Pimpwalk Entrance is not a place — it is a drawn shop doorway from the AI clip @mrdanielkimchi posted on 17 October 2026, and every version of the meme keeps the same doorway with a new cast.',
      zh: '简短回答：哪都不在。Pimpwalk Entrance 不是一个地方——它是 @mrdanielkimchi 2026 年 10 月 17 日 AI 片段里画出来的小店门口，梗的每个版本都保留同一扇门、只换人。',
    },
    guideTitle: {
      en: 'The doorway, traced to its source',
      zh: '把这扇门查到源头',
    },
    body: {
      en: [
        'The searches "where is pimpwalk entrance located" and "pimpwalk entrance address" come from the meme looking too real. The scene: a small shop at night, red-trimmed cream walls, a dark doormat, camera at chest height inside. It reads like somewhere you could find. But the original clip — a man in a tank top holding the door while a blue-suited figure pimp-walks in — is widely described as AI-generated, and the shop is part of that generation, not a location on a map.',
        'What you can trace: the trend timeline. 17 October 2026, @mrdanielkimchi posts the scene; 25 October, @mrmiltonfrost\'s burger-shop dandy makes it a format at 592K plays; 30 October, @thegurst\'s costumed sisters at 192K; 31 October, the CapCut wave; 1 November, the "pimpwalk into barbershop" celebrity set (Mr Bean, Walter White, Gus Fring, Messi) at 361K. Same drawn doorway in every one of them.',
        'If what you wanted was to walk through it yourself, that part is real: ' + EN_TEMPLATE + ' renders the same doorway from two of your photos — one walks in, one holds the door — as a 15-second 9:16 MP4. The address is the URL.',
      ],
      zh: [
        '「pimpwalk entrance 在哪里」「pimpwalk entrance 地址」这类搜索，是因为梗看起来太真实了。场景：夜晚的小店、红边奶油色墙面、深色门垫、机位在店内齐胸高度。看起来像你真能找到的地方。但原版片段——背心男拉门、蓝西装男低姿进场——被普遍认为是 AI 生成的，那家店是生成的一部分，不是地图上的坐标。',
        '你能查到的是趋势时间线：2026 年 10 月 17 日 @mrdanielkimchi 发出场景；10 月 25 日 @mrmiltonfrost 的汉堡店花花公子以 59 万播放把它变成格式；10 月 30 日 @thegurst 的戏装姐妹 19.2 万；10 月 31 日 CapCut 浪潮；11 月 1 日「pimpwalk into barbershop」名人套件（Mr Bean、Walter White、Gus Fring、Messi）36.1 万。每一条里都是同一扇画出来的门。',
        '如果你真正想要的是自己走进去，这部分是真的：' + ZH_TEMPLATE + ' 用你的两张照片渲染同一扇门——一张进场、一张拉门——出 15 秒 9:16 的 MP4。地址就是这个网址。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What shop is in the pimpwalk entrance video?', zh: 'pimpwalk entrance 视频里是哪家店？' },
        a: {
          en: 'A fast-food shop in the original AI clip; later versions use a burger shop and a barbershop. All of them are generated backdrops, not real businesses.',
          zh: '原版 AI 片段里是一家快餐店；后来的版本是汉堡店和理发店。都是生成的背景，不是真实店铺。',
        },
      },
      {
        q: { en: 'Can I visit the pimpwalk barbershop?', zh: '能去那家 pimpwalk 理发店吗？' },
        a: {
          en: 'No — the barbershop is a generated backdrop from the 1 November celebrity versions, not a business you can book.',
          zh: '不能——理发店是 11 月 1 日名人版里生成的背景，不是可以预约的店。',
        },
      },
    ],
  },
  {
    keyword: 'what happened at pimpwalk entrance',
    slug: 'what-happened-at-pimpwalk-entrance',
    title: {
      en: 'What Happened at Pimpwalk Entrance? The Meme Timeline, Not News',
      zh: 'Pimpwalk Entrance 发生了什么？是梗的时间线，不是新闻',
    },
    description: {
      en: 'What happened at pimpwalk entrance recently? Nothing at a place — here is the meme timeline: the 17 Oct original, the 592K burger-shop dandy, the barbershop celebrity set, and the CapCut wave.',
      zh: 'pimpwalk entrance 最近发生了什么？没有地方发生事——这是梗的时间线：10-17 原版、59 万播放的汉堡店花花公子、理发店名人套件、CapCut 浪潮。',
    },
    h1: { en: 'What Happened at Pimpwalk Entrance?', zh: 'Pimpwalk Entrance 发生了什么？' },
    lead: {
      en: 'Short answer: nothing happened at a place, because Pimpwalk Entrance is not a place. What "happened" is a meme timeline — and it moved fast over three days.',
      zh: '简短回答：没有什么地方发生了事，因为 Pimpwalk Entrance 不是地方。真正「发生」的是一条梗时间线——三天里跑得飞快。',
    },
    guideTitle: {
      en: 'The pimpwalk entrance timeline, day by day',
      zh: 'pimpwalk entrance 时间线，一天一天看',
    },
    body: {
      en: [
        'If you searched this expecting an incident report: the only thing that "happened" at the pimpwalk entrance is the same thing that happens in every clip — a friend holds the door and somebody struts through like they own the block. The doorway is drawn; nothing at any real location is involved.',
        'What actually happened, in order: 17 October 2026 — @mrdanielkimchi posts the scene, tank-top doorman, blue suit and fedora guest, and his sound becomes the trend audio. 25 October — @mrmiltonfrost\'s burger-shop dandy passes 592K plays and 28K likes, the biggest post of the trend. 30 October — @thegurst\'s sisters in green-and-gold costumes, 192K plays. 31 October — the CapCut tutorial wave starts. 1 November — the "pimpwalk into barbershop" account runs Gus Fring, Mr Bean, Walter White and Messi through; the top clip hits 361K. 3 November — the two CapCut templates stand at 8,387 and 4,694 uses, the sound at 511 videos.',
        'The next thing to "happen" can be your version: ' + EN_TEMPLATE + ' renders the same doorway from two of your photos, 15 seconds at 9:16, with the entrance AI-made and the caption yours.',
      ],
      zh: [
        '如果你在等一份事故报告：pimpwalk entrance「发生」的唯一事情，和每一条片子里的一样——朋友拉门，有人大摇大摆走进来像整条街都是他的。门是画出来的；没有任何真实地点参与其中。',
        '真正发生的，按顺序：2026 年 10 月 17 日——@mrdanielkimchi 发出场景，背心门童、蓝西装礼帽客人，他的原声成为趋势音频。10 月 25 日——@mrmiltonfrost 的汉堡店花花公子破 59 万播放、2.8 万点赞，趋势最大帖。10 月 30 日——@thegurst 的绿金戏装姐妹，19.2 万播放。10 月 31 日——CapCut 教程潮启动。11 月 1 日——「pimpwalk into barbershop」账号把 Gus Fring、Mr Bean、Walter White、Messi 依次送进门，最高一条 36.1 万。11 月 3 日——两个 CapCut 模板分别 8,387 和 4,694 次使用、原声 511 条视频。',
        '下一件「发生」的事可以是你的版本：' + ZH_TEMPLATE + ' 用你的两张照片渲染同一扇门，15 秒 9:16，进场交给 AI，配文归你。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Was there an incident at Pimpwalk Entrance?', zh: 'Pimpwalk Entrance 出过什么事吗？' },
        a: {
          en: 'No. There is no venue; the searches usually mean the meme\'s latest versions. The only recurring event is a new person strutting through the drawn doorway.',
          zh: '没有。没有场所；这类搜索通常指梗的最新版本。唯一反复发生的事，是又一个新的人从画出来的门里走出来。',
        },
      },
      {
        q: { en: 'Why do people ask about it like a place?', zh: '为什么大家像问地点一样问它？' },
        a: {
          en: 'Because the scene looks real: a shop at night, a doorman, a guest. AI renders blur the line, so location-style searches pile onto meme names.',
          zh: '因为场景看起来太真实：夜晚的店、门童、客人。AI 渲染模糊了界线，于是地点式搜索堆到了梗名上。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance tiktok',
    slug: 'pimpwalk-entrance-tiktok',
    title: {
      en: 'Pimpwalk Entrance on TikTok – the Sound, the Casts, the Numbers',
      zh: 'Pimpwalk Entrance 在 TikTok：原声、阵容、数据',
    },
    description: {
      en: 'The pimpwalk entrance TikTok trend: @mrdanielkimchi\'s 17 Oct original, the 592K burger-shop dandy, two CapCut templates at 8,387 and 4,694 uses, the sound at 511 videos.',
      zh: 'pimpwalk entrance TikTok 趋势：@mrdanielkimchi 10-17 原版、59 万播放的汉堡店花花公子、两个 CapCut 模板 8,387/4,694 次使用、原声 511 条视频。',
    },
    h1: { en: 'Pimpwalk Entrance on TikTok', zh: 'Pimpwalk Entrance 在 TikTok 上' },
    lead: {
      en: 'On TikTok, Pimpwalk Entrance is the hold-the-door scene from 17 October 2026 — 592K plays on the breakout clip, two CapCut templates inside two weeks, and the trend still rising.',
      zh: '在 TikTok 上，Pimpwalk Entrance 是 2026 年 10 月 17 日开始的扶门场景——破圈条 59 万播放、两周内两个 CapCut 模板，趋势仍在上升。',
    },
    guideTitle: {
      en: 'The TikTok trend, from the original post to your version',
      zh: '从原帖到你的版本：TikTok 趋势全解',
    },
    body: {
      en: [
        'The original: 17 October 2026, @mrdanielkimchi posts a man in a tank top and chains holding the door of a fast-food shop while a figure in a shiny blue suit and fedora pimp-walks through — low, slow, rising with a red card by his face. The audio, "original sound - mrdanielkimchi", is now on 511 videos.',
        'The wave: 25 October, @mrmiltonfrost\'s burger-shop dandy (592K plays, 28K likes). 30 October, @thegurst\'s costumed sisters (192K). 31 October, the CapCut template wave with screen-recorded tutorials — the biggest tutorial post sits at 442K plays. 1 November, the "pimpwalk into barbershop" set: Gus Fring, Mr Bean, Walter White, Messi — 361K on the top clip. By 3 November the two templates total 13,081 uses.',
        'To join from the browser, make your version at ' + EN_TEMPLATE + ' — two full-body photos, one of three doorway casts, 15 seconds at 9:16. Post with #pimpwalkentrance and #holdthedoor, caption the destination, and label it AI.',
      ],
      zh: [
        '原帖：2026 年 10 月 17 日，@mrdanielkimchi 发布背心金链男拉住快餐店门、亮蓝西装礼帽男低慢 pimp walk 进场——起身时手里举着一张红卡。音频「original sound - mrdanielkimchi」现在已有 511 条视频使用。',
        '浪潮：10 月 25 日，@mrmiltonfrost 的汉堡店花花公子（59 万播放、2.8 万点赞）。10 月 30 日，@thegurst 的戏装姐妹（19.2 万）。10 月 31 日，CapCut 模板潮带录屏教程——最大教程帖 44.2 万播放。11 月 1 日，「pimpwalk into barbershop」套件：Gus Fring、Mr Bean、Walter White、Messi——最高一条 36.1 万。到 11 月 3 日两个模板合计 13,081 次使用。',
        '在浏览器里加入：到 ' + ZH_TEMPLATE + ' 做你的版本——两张全身照、三条门口阵容选一、15 秒 9:16。带 #pimpwalkentrance 和 #holdthedoor 发布，配文写「走进了哪里」，标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What hashtags do pimpwalk entrance posts use?', zh: 'pimpwalk entrance 帖子用什么标签？' },
        a: {
          en: '#pimpwalkentrance and #holdthedoor, plus a caption naming the destination. The barbershop set travels under "pimpwalk into barbershop".',
          zh: '#pimpwalkentrance 和 #holdthedoor，配文写「走进了哪里」。理发店套件以「pimpwalk into barbershop」传播。',
        },
      },
      {
        q: { en: 'How long is the original pimpwalk entrance?', zh: '原版 pimpwalk entrance 多长？' },
        a: {
          en: 'The original runs 15 seconds; the barbershop takes run 10, and the tutorial cuts run 4. ViralReel renders the full 15-second scene.',
          zh: '原版 15 秒；理发店版 10 秒；教程短片 4 秒。ViralReel 渲染完整的 15 秒场景。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance template',
    slug: 'pimpwalk-entrance-template',
    title: {
      en: 'Pimpwalk Entrance Template – Three Doorway Casts, Two Photo Slots',
      zh: 'Pimpwalk Entrance 模板：三条门口阵容，两个照片位',
    },
    description: {
      en: 'The pimpwalk entrance template on ViralReel: three doorway casts, two photo slots (walker and door holder), 15-second 9:16 MP4. Transparent pay-per-credit pricing.',
      zh: 'ViralReel 的 pimpwalk entrance 模板：三条门口阵容、两个照片位（进场的和拉门的）、15 秒 9:16 MP4。按积分计费、价格透明。',
    },
    h1: { en: 'Pimpwalk Entrance Template', zh: 'Pimpwalk Entrance 模板' },
    lead: {
      en: 'The pimpwalk entrance template is the fixed hold-the-door scene — drawn shop, grooving door holder, low strut — that swaps only the people. ViralReel runs it in three casts from two photos.',
      zh: 'pimpwalk entrance 模板是固定的扶门场景——画出来的店、摇摆的拉门人、低姿进场——只换人。ViralReel 用两张照片跑三套阵容。',
    },
    guideTitle: {
      en: 'What the template fixes, and what you control',
      zh: '模板固定什么、你能改什么',
    },
    body: {
      en: [
        'The template trend works because the scene never changes: the shop at night, the door swinging wide, the friend grooving beside it, the strut, the drop, the rise into the close-up. The template holds all of it so the only variable is who walks through — which is why every render reads as the same meme.',
        `The ViralReel pimpwalk entrance template gives you three casts: the Burger Shop Dandy (the 592K-play version), Walter White on the Door, and the Yellow Shirt Strut. You control the cast — photo 1 walks in, photo 2 holds the door — while the ratio stays 9:16 and the length stays 15 seconds. Make it at ${EN_TEMPLATE}.`,
        'The CapCut route has two templates (8,387 and 4,694 uses by 3 November); the difference here is the cast choice, the second photo slot, and no watermark on paid exports. The preview clips on this page are sourced from the TikTok trend.',
      ],
      zh: [
        '模板趋势成立的前提是场景永远不变：夜晚的店、门拉开、朋友在门边摇摆、低姿进场、下蹲、起身特写。模板固定这一切，唯一的变量是谁走进来——这正是每个渲染都读成同一个梗的原因。',
        `ViralReel 的 pimpwalk entrance 模板提供三套阵容：汉堡店花花公子（59 万播放版）、门后老白、黄衫进场。你控制阵容——第 1 张进场、第 2 张拉门——比例固定 9:16，时长固定 15 秒。制作入口：${ZH_TEMPLATE} 。`,
        'CapCut 路线有两个模板（截至 11 月 3 日 8,387 和 4,694 次使用）；这里的区别是：可以选阵容、第二个照片位、付费导出无水印。本页预览片段来自 TikTok 趋势原片。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which doorway cast should I pick?', zh: '门口阵容怎么选？' },
        a: {
          en: 'Burger Shop Dandy for the classic 15-second read, Walter White on the Door for the celebrity-set joke, Yellow Shirt Strut for the loudest outfit in the doorway.',
          zh: '经典 15 秒读法选汉堡店花花公子，名人套件玩笑选门后老白，门口最抢眼的衣服选黄衫进场。',
        },
      },
      {
        q: { en: 'Does the template keep the original sound?', zh: '模板会保留原声吗？' },
        a: {
          en: 'Your clip keeps the reference timing; ViralReel does not license the trend sound, so you add it from your posting app\'s library.',
          zh: '成片保留参考节奏；ViralReel 不授权趋势原声，发帖时在发布 App 曲库里加。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance song',
    slug: 'pimpwalk-entrance-song',
    title: {
      en: 'The Pimpwalk Entrance Song — It Is an Original Sound, Not a Track',
      zh: 'Pimpwalk Entrance 的歌——是原声，不是发行曲目',
    },
    description: {
      en: 'The pimpwalk entrance sound is "original sound - mrdanielkimchi" — 511 videos use it as of 3 November. What it is, why there is no commercial song, and how to add it.',
      zh: 'pimpwalk entrance 的音频是「original sound - mrdanielkimchi」——截至 11 月 3 日 511 条视频使用。它是什么、为什么没有商业歌曲、怎么加。',
    },
    h1: { en: 'The Pimpwalk Entrance Song', zh: 'Pimpwalk Entrance 的歌' },
    lead: {
      en: 'Searching the pimpwalk entrance song comes up empty on Spotify because there is none — the audio is "original sound - mrdanielkimchi", from the 17 October clip that started the trend.',
      zh: '在 Spotify 搜 pimpwalk entrance 的歌会一无所获，因为它不存在——音频是「original sound - mrdanielkimchi」，来自 10 月 17 日引爆趋势的那条片子。',
    },
    guideTitle: {
      en: 'What plays in the pimpwalk entrance trend, and how to add it',
      zh: 'pimpwalk entrance 里放的是什么，怎么加',
    },
    body: {
      en: [
        'On the original @mrdanielkimchi post the audio reads "original sound - mrdanielkimchi": a beat-led groove that the door holder grooves to and the strut rides. As of 3 November, 511 videos use the sound. There is no artist name and no streaming release — which is why "pimpwalk entrance song" searches dead-end.',
        'ViralReel does not license the sound or any recording of it. Your clip keeps the reference timing, so when you post, open the sound from any trend clip or search "original sound - mrdanielkimchi" in the TikTok, Reels, or Shorts library. The strut lands on the beat, so posts that keep the sound read as part of the trend; posts without it read as random doorway footage.',
        'If you want a track underneath a different version, the pimp walk itself has a musical history — the strut comes out of 1970s blaxploitation films — but the trend audio is the original sound, and the meme is keyed to it.',
      ],
      zh: [
        '在 @mrdanielkimchi 原帖上，音频显示为「original sound - mrdanielkimchi」：一段节奏律动，拉门人跟着摇摆、进场者踩着它走。截至 11 月 3 日，511 条视频使用该声音。没有艺人名、没有流媒体发行——这就是「pimpwalk entrance song」搜索查不到的原因。',
        'ViralReel 不授权该声音及其任何录音。你的成片保留参考节奏，发布时从任意趋势片子点开声音，或在 TikTok、Reels、Shorts 曲库搜「original sound - mrdanielkimchi」。步伐是踩着节拍的，加了对的声音才读成趋势的一部分；没加的看起来像随机门口素材。',
        '如果你想给别的版本配歌，pimp walk 本身有音乐史——步伐出自 1970 年代电影——但趋势音频就是那条原声，梗也是跟着它设计的。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What song is in the pimpwalk entrance?', zh: 'pimpwalk entrance 里是什么歌？' },
        a: {
          en: '"original sound - mrdanielkimchi" — the audio from the 17 October 2026 clip, with no commercial release. 511 videos use it as of 3 November.',
          zh: '「original sound - mrdanielkimchi」——2026 年 10 月 17 日那条的音频，没有商业发行。截至 11 月 3 日 511 条视频使用。',
        },
      },
      {
        q: { en: 'Does my ViralReel export include the sound?', zh: 'ViralReel 导出的视频带声音吗？' },
        a: {
          en: 'It carries the reference timing but ViralReel does not license the audio — add the original sound from your posting app\'s library when you publish.',
          zh: '成片带参考节奏，但 ViralReel 不授权该音频——发布时在发布 App 曲库里加原声。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance meme',
    slug: 'pimpwalk-entrance-meme',
    title: {
      en: 'The Pimpwalk Entrance Meme, Explained – Door, Strut, Close-Up',
      zh: 'Pimpwalk Entrance 梗全解：门、步伐、特写',
    },
    description: {
      en: 'The pimpwalk entrance meme explained: the hold-the-door scene, @mrdanielkimchi\'s original, the 592K dandy, the barbershop celebrity set, and why every render casts a new legend.',
      zh: 'pimpwalk entrance 梗全解：扶门场景、@mrdanielkimchi 原版、59 万播放的花花公子、理发店名人套件，以及为什么每次渲染都诞生一个新传奇。',
    },
    h1: { en: 'The Pimpwalk Entrance Meme', zh: 'Pimpwalk Entrance 梗' },
    lead: {
      en: 'The pimpwalk entrance meme is one drawn doorway and a different legend every render — a 1970s dandy, costumed sisters, Mr Bean, Walter White, Messi, and now you.',
      zh: 'pimpwalk entrance 梗是同一扇画出来的门，每次渲染一个新传奇——1970 年代花花公子、戏装姐妹、Mr Bean、Walter White、Messi，现在轮到你。',
    },
    guideTitle: {
      en: 'What the pimpwalk entrance meme means, beat by beat',
      zh: 'pimpwalk entrance 梗是什么意思，一拍一拍拆',
    },
    body: {
      en: [
        'The setup: night, a small shop, the door pulled wide by a friend who grooves in place. The arrival: the guest comes through in a slow, low, leaned-back pimp walk — knees bent, shoulders rolled — drops almost to a crouch while gliding forward. The payoff: the rise, straight up into a close-up, like the camera has been waiting all night. No words; the beat and the strut do everything.',
        'It went viral because it is status played for laughs. The entrance is pure main-character energy, and the format exists to hand that energy to someone unlikely — the dad at the BBQ, the boss on Monday, the dog. TikTok obliged: a 1970s dandy at 592K plays, sisters in golden armour at 192K, and a barbershop set of Gus Fring, Mr Bean, Walter White and Messi at 361K.',
        'The pimp walk itself is older than the app — the exaggerated strut of 1970s films — but the 2026 version is an entrance someone else is made to do, which is why it survives the jump to face swaps: make your own at ' + EN_TEMPLATE + ' with two photos.',
      ],
      zh: [
        '铺垫：夜晚、小店、朋友把门拉到最开、在门边原地摇摆。登场：客人低、慢、后仰地 pimp walk 进门——屈膝、塌肩——一边向前滑一边几乎蹲到底。收尾：起身，直直升到镜头前的特写，像镜头等了他一整晚。没有台词；节拍和步伐包办一切。',
        '它爆火是因为把排面拿来搞笑。进场是纯粹的主角光环，而这个格式的存在意义就是把光环交给最不可能的人——烧烤架前的爸爸、周一的老板、狗。TikTok 也配合：1970 年代花花公子 59 万播放、金甲姐妹 19.2 万、Gus Fring/Mr Bean/Walter White/Messi 理发店套件 36.1 万。',
        'pimp walk 本身比这个 App 老——1970 年代电影的夸张步伐——但 2026 版是「让别人替你完成的进场」，这就是它能无缝跳到换脸的原因：到 ' + ZH_TEMPLATE + ' 用两张照片做你自己的。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What does the pimpwalk entrance mean?', zh: 'pimpwalk entrance 是什么意思？' },
        a: {
          en: 'It means arriving like you own the place — held door, low strut, close-up. The caption names where you are arriving: the barbershop, the BBQ, your first day back.',
          zh: '意思是「像全场都是他一样登场」——拉门、低姿步伐、特写。配文负责说你到了哪里：理发店、烧烤局、上班第一天。',
        },
      },
      {
        q: { en: 'Is it the same as "then I walk in"?', zh: '和「then I walk in」是一回事吗？' },
        a: {
          en: 'No. "Then I walk in" is a deadpan selfie walk toward the camera. The pimpwalk entrance is a two-person scene at a drawn shop door: one holds it grooving, one struts through low.',
          zh: '不是。「then I walk in」是面无表情冲镜头的自拍走。pimpwalk entrance 是画出来的店门口的双人戏：一个边拉门边摇摆，一个低姿进场。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk barbershop',
    slug: 'pimpwalk-barbershop',
    title: {
      en: 'The Pimpwalk Barbershop Trend – Gus Fring, Mr Bean, Walter White, Messi',
      zh: 'Pimpwalk Barbershop：Gus Fring、Mr Bean、Walter White、Messi',
    },
    description: {
      en: 'The pimpwalk into barbershop trend: the same doorway renamed on 1 November, running Gus Fring, Mr Bean, Walter White and Messi through it — top clip 361K plays. Make your own cast.',
      zh: 'pimpwalk into barbershop：11 月 1 日被改名的同一扇门——Gus Fring、Mr Bean、Walter White、Messi 依次进场，最高一条 36.1 万播放。做你自己的阵容。',
    },
    h1: { en: 'The Pimpwalk Barbershop Trend', zh: 'Pimpwalk Barbershop 趋势' },
    lead: {
      en: '"Pimpwalk into barbershop" is the same hold-the-door meme renamed on 1 November 2026, when a template account sent Gus Fring, Mr Bean, Walter White and Messi through the doorway — the top clip at 361K plays.',
      zh: '「pimpwalk into barbershop」是同一个扶门梗在 2026 年 11 月 1 日被改的名字——一个模板账号把 Gus Fring、Mr Bean、Walter White、Messi 依次送进门，最高一条 36.1 万播放。',
    },
    guideTitle: {
      en: 'The barbershop set, explained',
      zh: '理发店名人套件，拆解',
    },
    body: {
      en: [
        'The scene never moved — it is the same drawn doorway as the 17 October original — but the caption changed the frame: instead of a burger shop, the guest is "walking into the barbershop", and the guest list went celebrity. Gus Fring, Mr Bean, Walter White holding the door, Messi on the deck; the top clip passed 361K plays.',
        'The name stuck because it gives the caption a destination: "me walking into the barbershop" is the most-used line of the whole trend. Searches for "pimpwalk barbershop" and "pimpwalk into barbershop trend" now point at the same meme as "pimpwalk entrance".',
        'You do not need the celebrity photos to join — the doorway is rebuilt from your friends: ' + EN_TEMPLATE + ' renders the same scene from two photos (one walks in, one holds the door), 15 seconds at 9:16, and the caption is yours. Label it AI when you post.',
      ],
      zh: [
        '场景从未移动——和 10 月 17 日原版同一扇画出来的门——但配文改了框架：客人不再是进汉堡店，而是「走进理发店」，客人名单也换成了名人。Gus Fring、Mr Bean、拉门的 Walter White、踩点的 Messi；最高一条破 36.1 万播放。',
        '这个名字站住了，因为它给了配文一个目的地：「me walking into the barbershop」是整个趋势用得最多的一句。现在搜「pimpwalk barbershop」「pimpwalk into barbershop trend」指向的都是和「pimpwalk entrance」同一个梗。',
        '加入不需要名人照片——门可以用你的朋友重建：' + ZH_TEMPLATE + ' 用两张照片渲染同一场景（一张进场、一张拉门），15 秒 9:16，配文归你。发布时标注 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the pimpwalk barbershop a real barbershop?', zh: 'pimpwalk 理发店是真的店吗？' },
        a: {
          en: 'No — it is a generated backdrop from the 1 November celebrity versions, not a business. The doorway is drawn in every version of the trend.',
          zh: '不是——它是 11 月 1 日名人版里生成的背景，不是真实店铺。趋势的每个版本里门都是画出来的。',
        },
      },
      {
        q: { en: 'Why is the barbershop version so popular?', zh: '理发店版为什么这么火？' },
        a: {
          en: 'The caption gives everyone a destination they know, and the guest list went celebrity — Mr Bean and Walter White holding doors reads instantly. Same doorway, better joke setup.',
          zh: '配文给了每个人都知道的目的地，客人名单也换成了名人——Mr Bean 和拉门的 Walter White 一眼就懂。同一扇门，更好的笑点铺垫。',
        },
      },
    ],
  },
  {
    keyword: 'hold the door trend',
    slug: 'hold-the-door-trend',
    title: {
      en: 'The Hold the Door Trend – the Other Name for Pimpwalk Entrance',
      zh: '扶门趋势——Pimpwalk Entrance 的另一个名字',
    },
    description: {
      en: 'The hold the door trend of autumn 2026 is the pimpwalk entrance: a friend holds the door, someone struts through low. How the names relate and how to make your version.',
      zh: '2026 年秋天的扶门趋势就是 pimpwalk entrance：朋友拉门，有人低姿进场。名字之间什么关系、怎么做你的版本。',
    },
    h1: { en: 'The Hold the Door Trend', zh: '扶门趋势' },
    lead: {
      en: '"Hold the door trend", "doorway entrance trend" and "pimpwalk entrance" are three names for one scene: a friend holds a shop door open at night, and someone struts through low and slow.',
      zh: '「hold the door trend」「doorway entrance trend」「pimpwalk entrance」是同一个场景的三个名字：朋友在夜里拉住店门，有人低慢地走进来。',
    },
    guideTitle: {
      en: 'Which hold-the-door trend is which',
      zh: '分清各个「扶门」趋势',
    },
    body: {
      en: [
        'The 2026 hold the door trend is the pimpwalk entrance: 17 October 2026, @mrdanielkimchi posts a tank-top doorman and a blue-suited guest; 25 October, the burger-shop dandy passes 592K plays; 31 October, the CapCut tutorials adopt the name "hold the door". The names "doorway entrance trend" and "pimpwalk entrance hold the door" come from those tutorial titles.',
        'Do not confuse it with older hold-the-door memes: the Game of Thrones "Hodor" edits, or door-closing pranks. And not with "then I walk in", the deadpan selfie walk. This one is specifically a two-person scene at a drawn shop door — one grooves, one struts — with the original sound carrying it.',
        'Make your version of the hold the door trend at ' + EN_TEMPLATE + ': two full-body photos, three doorway casts, 15 seconds at 9:16, transparent pay-per-credit pricing. Post it with #holdthedoor and #pimpwalkentrance.',
      ],
      zh: [
        '2026 年的扶门趋势就是 pimpwalk entrance：2026 年 10 月 17 日 @mrdanielkimchi 发出背心门童和蓝西装客人；10 月 25 日汉堡店花花公子破 59 万播放；10 月 31 日 CapCut 教程采用了「hold the door」这个名字。「doorway entrance trend」「pimpwalk entrance hold the door」都来自那些教程标题。',
        '别和更早的扶门梗搞混：《权力的游戏》Hodor 剪辑、关门整蛊。也别和「then I walk in」的自拍走搞混。这一条特指画出来的店门口的双人戏——一个摇摆、一个低姿进场——原声贯穿。',
        '到 ' + ZH_TEMPLATE + ' 做你的扶门趋势版本：两张全身照、三条门口阵容、15 秒 9:16，按积分计费、价格透明。发布带 #holdthedoor 和 #pimpwalkentrance。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the hold the door trend the pimpwalk entrance?', zh: '扶门趋势就是 pimpwalk entrance 吗？' },
        a: {
          en: 'Yes — the CapCut tutorials use both names for the same scene. The original is @mrdanielkimchi\'s 17 October 2026 clip and its sound.',
          zh: '是——CapCut 教程对同一场景用两个名字。原版是 @mrdanielkimchi 2026 年 10 月 17 日的片段及其原声。',
        },
      },
      {
        q: { en: 'What is the Game of Thrones hold the door meme?', zh: '权力的游戏扶门梗是什么？' },
        a: {
          en: 'A much older meme built on the "Hodor" reveal. It shares only the words — the 2026 hold the door trend is the pimpwalk doorway scene.',
          zh: '一个基于「Hodor」揭示的更老梗。只共用了词——2026 年的扶门趋势是 pimpwalk 门口场景。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance capcut',
    slug: 'pimpwalk-entrance-capcut',
    title: {
      en: 'Pimpwalk Entrance CapCut Template vs ViralReel — Which Route Fits',
      zh: 'Pimpwalk Entrance CapCut 模板 vs ViralReel：哪条路线适合你',
    },
    description: {
      en: 'Two pimpwalk entrance CapCut templates (8,387 and 4,694 uses by 3 Nov). Compare CapCut vs the ViralReel browser generator — casts, second photo, watermark, render time.',
      zh: '两个 pimpwalk entrance CapCut 模板（截至 11 月 3 日 8,387/4,694 次使用）。对比 CapCut 与 ViralReel 浏览器生成器——阵容、第二张照片、水印、渲染时间。',
    },
    h1: { en: 'Pimpwalk Entrance CapCut Template vs ViralReel', zh: 'Pimpwalk Entrance CapCut 模板 vs ViralReel' },
    lead: {
      en: 'Two pimpwalk entrance CapCut templates exist (8,387 and 4,694 uses by 3 November 2026). ViralReel runs the same scene in the browser with three casts and two photo slots.',
      zh: 'pimpwalk entrance 有两个 CapCut 模板（截至 2026 年 11 月 3 日 8,387 和 4,694 次使用）。ViralReel 在浏览器里跑同一场景，三套阵容、两个照片位。',
    },
    guideTitle: {
      en: 'Choosing between the CapCut template and the browser generator',
      zh: 'CapCut 模板和浏览器生成器怎么选',
    },
    body: {
      en: [
        'The CapCut route: find a post using either template, tap the template link, drop in a photo, and CapCut edits inside the app. Free and fast, but you get whichever scene the template holds, most versions take one photo, and exports carry the CapCut watermark unless you pay CapCut. The tutorial posts ("how to make the viral doorway entrance pimpwalk hold the door trend") show the flow: render, then screen-recorded steps.',
        `The ViralReel route at ${EN_TEMPLATE}: three doorway casts to choose from, two photo slots so you can cast the door holder, the full 15-second scene rendered by an image-to-video model in minutes, paid exports with no watermark, failed jobs refunded automatically, and transparent pay-per-credit pricing.`,
        'Both routes are fan work on an AI-generated scene; neither is official. Whichever you use, add the trend sound from your posting app\'s library and turn on the AI-generated label.',
      ],
      zh: [
        'CapCut 路线：找一条用任一模板的帖子，点模板链接，丢进照片，CapCut 在 App 里完成。免费又快，但场景就是模板固定那一个，多数版本一次一张照片，导出带 CapCut 水印（付费去）。教程帖（「how to make the viral doorway entrance pimpwalk hold the door trend」）展示了流程：先成片、后录屏步骤。',
        `ViralReel 路线（${ZH_TEMPLATE} ）：三条门口阵容可选、两个照片位可以安排拉门人、图生视频模型几分钟渲染完整 15 秒场景、付费导出无水印、失败任务自动退积分、按积分计费、价格透明。`,
        '两条路线都是基于 AI 生成场景的粉丝作品；都不是官方。无论用哪条，发帖时在发布 App 曲库加原声，并打开 AI 生成标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How many pimpwalk CapCut templates are there?', zh: 'pimpwalk 的 CapCut 模板有几个？' },
        a: {
          en: 'Two, since the 31 October wave — 8,387 and 4,694 uses by 3 November, with the biggest tutorial post at 442K plays.',
          zh: '两个，10 月 31 日浪潮以来——截至 11 月 3 日 8,387 和 4,694 次使用，最大教程帖 44.2 万播放。',
        },
      },
      {
        q: { en: 'Which route renders the full 15-second scene?', zh: '哪条路线渲染完整 15 秒场景？' },
        a: {
          en: 'ViralReel renders the full scene — door, strut, drop, rise into the close-up — from your photos. Some CapCut versions hold shorter cuts of the trend.',
          zh: 'ViralReel 从你的照片渲染完整场景——开门、步伐、下蹲、起身特写。部分 CapCut 版本是更短的剪辑。',
        },
      },
    ],
  },
  {
    keyword: 'pimpwalk entrance generator',
    slug: 'pimpwalk-entrance-generator',
    title: {
      en: 'Pimpwalk Entrance AI Video Generator – Two Photos, No App',
      zh: 'Pimpwalk Entrance AI 视频生成器：两张照片，不用装 App',
    },
    description: {
      en: 'A pimpwalk entrance AI video generator that runs in the browser: two photos into the doorway scene, 15-second 9:16 MP4, renders in minutes, transparent pay-per-credit pricing.',
      zh: '浏览器里跑的 pimpwalk entrance AI 视频生成器：两张照片进门口场景，15 秒 9:16 MP4，几分钟出片，按积分计费、价格透明。',
    },
    h1: { en: 'Pimpwalk Entrance AI Video Generator', zh: 'Pimpwalk Entrance AI 视频生成器' },
    lead: {
      en: 'A pimpwalk entrance generator is any tool that rebuilds the hold-the-door scene from photos. ViralReel does it in the browser — two photos, three casts, a 15-second 9:16 MP4 in minutes.',
      zh: 'pimpwalk entrance 生成器指任何能用照片重建扶门场景的工具。ViralReel 在浏览器里完成——两张照片、三套阵容、几分钟出 15 秒 9:16 MP4。',
    },
    guideTitle: {
      en: 'Using the pimpwalk entrance generator on ViralReel',
      zh: '在 ViralReel 使用 pimpwalk entrance 生成器',
    },
    body: {
      en: [
        'The generator at ' + EN_TEMPLATE + ' works without a prompt box: the scene prompt is pre-filled from the reference clip, and your two photos are the only input. Photo 1 walks in; photo 2 holds the door. You pick the cast — Burger Shop Dandy, Walter White on the Door, or Yellow Shirt Strut — and the model renders the full 15-second scene.',
        'Rendering typically takes a few minutes; finished clips land in History, failed jobs are refunded automatically, and paid exports carry no watermark. Every render is paid, so buy a credit pack or a plan before your first pimpwalk entrance.',
        'Compared with writing a raw image-to-video prompt yourself, the fixed template keeps the timing that makes the joke land: the door swinging wide, the drop to the crouch, and the rise into the close-up. That timing is the hard part of this trend, and it is what a blank prompt usually gets wrong.',
      ],
      zh: [
        ZH_TEMPLATE + ' 的生成器不用写提示词：场景提示词已按参考片段预填，你唯一的输入就是两张照片。第 1 张进场；第 2 张拉门。阵容任选——汉堡店花花公子、门后老白、黄衫进场——模型渲染完整的 15 秒场景。',
        '渲染通常几分钟；成片在「历史记录」，失败任务自动退积分，付费导出无水印。每次渲染都计费，第一次 pimpwalk entrance 前先买好积分包或月付。',
        '比起自己从零写图生视频提示词，固定模板保住了让笑点成立的节奏：门拉开、蹲到底、起身特写。这个节奏是本趋势最难的部分，也正是空白提示词经常做错的地方。',
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
        q: { en: 'What if the walk looks wrong?', zh: '步伐看起来不对怎么办？' },
        a: {
          en: 'Use a full-body photo — the walk happens below the chest — and rerun the same photos; the second take usually fixes the legs and the rise.',
          zh: '用全身照——动作都在胸部以下——同样的照片再跑一次；第二遍通常就能修好腿部和起身。',
        },
      },
    ],
  },
];

export function getPimpwalkLongTail(slug: string) {
  return PIMPWALK_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly PimpwalkHowToStep[] {
  return entry.steps === 'shared' ? PIMPWALK_HOW_TO_STEPS : entry.steps;
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
          `在 ViralReel 制作：${template} 。三条门口阵容任选，上传两张你有权使用的照片，生成 15 秒 9:16 的 MP4。ViralReel 不授权趋势原声。`,
        ],
        [
          '照片有什么要求？',
          '两张全身照，每张一个人，照片清晰：第 1 张进场，第 2 张拉门。不要墨镜和美颜——最后一秒是一张脸填满画面。不要用未成年人、名人或未经同意的人。',
        ],
        ['能免费试吗？', '不免费。每次渲染都计费，开始前生成器显示确切费用，失败自动退积分。'],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['渲染要多久？', '通常几分钟，视模型和队列而定；成片在「历史记录」里取，失败任务自动退积分。'],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        [
          '这是官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与趋势背后的创作者、CapCut 或 TikTok 均无关联。这是粉丝作品。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Pick one of three doorway casts, upload two photos you have permission to use, and generate a 15-second 9:16 MP4. ViralReel does not license the trend sound.`,
        ],
        [
          'What do the photos need?',
          'Two full-body photos, one person each, sharp: photo 1 walks in, photo 2 holds the door. No sunglasses and no beauty filter — the last second is a face filling the frame. Do not use minors, celebrities, or people who did not agree.',
        ],
        ['Can I try it free?', 'No. Rendering is pay-per-credit — the exact cost shows in the generator before every render, and failed renders are refunded automatically.'],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['How long does rendering take?', 'Typically a few minutes depending on the model and queue; finished clips land in History and failed jobs are refunded automatically.'],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        [
          'Is this an official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with the creators behind the trend, CapCut, or TikTok. This is fan work.',
        ],
      ];
  return [...own, ...shared];
}

export interface PimpwalkLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function pimpwalkLinkGroups(zh: boolean): PimpwalkLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: PIMPWALK_TEMPLATE_PATH, label: zh ? 'Pimpwalk Entrance 模板' : 'Pimpwalk Entrance template' },
        { href: '/pimpwalk-entrance-ai', label: 'Pimpwalk Entrance AI' },
        { href: '/pimpwalk-entrance-template', label: zh ? '模板页' : 'Template page' },
        { href: '/pimpwalk-entrance-generator', label: zh ? 'AI 视频生成器' : 'AI video generator' },
        { href: '/how-to-make-pimpwalk-entrance', label: zh ? '怎么做' : 'How to make it' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '趋势和搜索别名' : 'Trend and search aliases',
      links: [
        { href: '/pimpwalk-entrance-tiktok', label: zh ? 'TikTok 趋势' : 'The TikTok trend' },
        { href: '/pimpwalk-entrance-meme', label: zh ? '梗，一页讲清' : 'The meme, explained' },
        { href: '/pimpwalk-barbershop', label: zh ? '理发店名人版' : 'The barbershop cast' },
        { href: '/hold-the-door-trend', label: zh ? '扶门趋势（同名）' : 'Hold the door trend' },
        { href: '/pimpwalk-entrance-song', label: zh ? '原声解析' : 'The sound, explained' },
      ],
    },
    {
      title: zh ? '场所混淆四问（ChatGPT 常问）' : 'The place confusion (often asked)',
      links: [
        { href: '/is-pimpwalk-entrance-free', label: zh ? '免费吗' : 'Is it free?' },
        { href: '/how-do-i-get-into-pimpwalk', label: zh ? '怎么「进入」' : 'How do I get in?' },
        { href: '/where-is-pimpwalk-entrance-located', label: zh ? '在哪里' : 'Where is it located?' },
        { href: '/what-happened-at-pimpwalk-entrance', label: zh ? '最近发生了什么' : 'What happened recently?' },
      ],
    },
    {
      title: zh ? '对照和答疑' : 'Comparisons and answers',
      links: [
        { href: '/pimpwalk-entrance-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: PIMPWALK_POSTS.capcut, label: zh ? '长文对照：ViralReel 和 CapCut' : 'Long read: ViralReel vs CapCut' },
        { href: PIMPWALK_POSTS.place, label: zh ? '长文：它是真实场所吗' : 'Long read: is it a real place?' },
        { href: PIMPWALK_POSTS.song, label: zh ? '长文：原声解析' : 'Long read: the sound' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: PIMPWALK_POSTS.howTo, label: zh ? '如何制作 pimpwalk entrance 视频' : 'How to make a pimpwalk entrance video' },
        { href: PIMPWALK_POSTS.explained, label: zh ? '趋势是什么、从哪来' : 'What the trend is and where it came from' },
        { href: PIMPWALK_POSTS.roundup, label: zh ? '2026 年 10 月 AI 梗视频盘点' : 'October 2026 AI meme videos' },
        { href: '/first-time-in-a-fancy-cafe-ai-template', label: zh ? 'First Time in a Fancy Cafe AI 模板' : 'First Time in a Fancy Cafe AI template' },
      ],
    },
  ];
}

export const PIMPWALK_LONG_TAIL_ROUTES = PIMPWALK_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
