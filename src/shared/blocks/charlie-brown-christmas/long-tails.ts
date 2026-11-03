import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { CHARLIE_BROWN_CITE_TAILS } from './cite-tails';
import { CHARLIE_BROWN_HOW_TO_STEPS, type CharlieBrownHowToStep } from './steps';

/**
 * Long-tail landings for the A Charlie Brown Christmas template.
 *
 * To add another keyword: append an entry here or in `cite-tails.ts`.
 * The sitemap reads CHARLIE_BROWN_LONG_TAIL_ROUTES. Public URLs are served
 * by the single `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `charlie-brown-christmas-ai-template` slug.
 */

export const CHARLIE_BROWN_TEMPLATE_PATH = '/charlie-brown-christmas-ai-template';

export const CHARLIE_BROWN_POSTS = {
  howTo: '/blog/how-to-make-charlie-brown-christmas-ai-video',
  explained: '/blog/what-is-a-charlie-brown-christmas-ai-trend',
  capcut: '/blog/charlie-brown-christmas-filter-vs-capcut',
  song: '/blog/charlie-brown-christmas-song-and-history',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
  generators: '/blog/best-charlie-brown-christmas-ai-generators',
  photos: '/blog/charlie-brown-christmas-photo-tips',
} as const;

const PRODUCT = { en: 'A Charlie Brown Christmas', zh: 'A Charlie Brown Christmas' };

const EN_TEMPLATE = 'https://www.viralreel.app/charlie-brown-christmas-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/charlie-brown-christmas-ai-template';
const EN_CAPCUT_POST = 'https://www.viralreel.app/blog/charlie-brown-christmas-filter-vs-capcut';
const ZH_CAPCUT_POST = 'https://www.viralreel.app/zh/blog/charlie-brown-christmas-filter-vs-capcut';
const EN_HOWTO = 'https://www.viralreel.app/blog/how-to-make-charlie-brown-christmas-ai-video';
const ZH_HOWTO = 'https://www.viralreel.app/zh/blog/how-to-make-charlie-brown-christmas-ai-video';
const EN_EXPLAINED = 'https://www.viralreel.app/blog/what-is-a-charlie-brown-christmas-ai-trend';
const ZH_EXPLAINED = 'https://www.viralreel.app/zh/blog/what-is-a-charlie-brown-christmas-ai-trend';

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
  steps: 'shared' | readonly CharlieBrownHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTO_EN =
  'One photo is the whole input: waist-up or full body, face to the camera, hair, glasses and outfit in frame. No sunglasses and no masks — the dot eyes sit under your own glasses, which is the single most recognizable thing in the trend. Do not upload minors, celebrities, or screenshots of the 1965 special.';
const PHOTO_ZH =
  '一张照片就是全部输入：半身或全身，正脸对镜头，发型、眼镜和衣服都在画面里。不要戴墨镜和口罩——点点眼睛长在你自己的眼镜下面，是全趋势最有辨识度的细节。不要上传未成年人、名人或 1965 年特辑的截图。';

export const CHARLIE_BROWN_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'a charlie brown christmas ai',
    slug: 'charlie-brown-christmas-ai',
    title: {
      en: 'A Charlie Brown Christmas AI – Turn Your Photo Into the 1965 Cartoon',
      zh: 'A Charlie Brown Christmas AI：把你的照片变成 1965 年卡通',
    },
    description: {
      en: 'a charlie brown christmas ai: one photo becomes a 1965 Peanuts-style cartoon on Snoopy\'s red doghouse. 8-second 9:16 MP4 in the browser. Fan work, not official Peanuts. Label it AI.',
      zh: 'a charlie brown christmas ai：一张照片变成站在 Snoopy 红狗屋上的 1965 花生漫画风卡通。浏览器直出 8 秒 9:16 MP4。粉丝作品，非官方 Peanuts。请标注 AI。',
    },
    h1: { en: 'A Charlie Brown Christmas AI', zh: 'A Charlie Brown Christmas AI' },
    lead: {
      en: 'A Charlie Brown Christmas AI search wants the redraw: your real photo, a scan line, and a flat 1965 cel-style cartoon standing on the red doghouse.',
      zh: '搜 a charlie brown christmas ai 要的是重绘：你真实的照片、一道扫描线，以及站在红色狗屋顶上的 1965 平涂卡通。',
    },
    guideTitle: {
      en: 'How to make an A Charlie Brown Christmas AI video',
      zh: '如何制作 A Charlie Brown Christmas AI 视频',
    },
    body: {
      en: [
        'The trend runs on a CapCut template named "A Charlie Brown", but you do not need the app. The A Charlie Brown Christmas AI page on ViralReel runs the same move in the browser: pick one of seven redraw clips, upload one photo, and the image-to-video model sweeps a scan line from your head to your feet, redraws you as a 1965 Peanuts-style cartoon, and lands you on Snoopy\'s red doghouse with the hand-lettered title on top.',
        `Make it at ${EN_TEMPLATE}. ${PHOTO_EN} The page opens on 9:16 and the length is fixed at 8 seconds — the front stretch of the 12-second trend format. Read the credit cost before you generate.`,
        'The download is a new MP4 of a new scene. ViralReel does not license the trend sound, the Vince Guaraldi music ("Christmas Time Is Here", "Linus and Lucy"), or any Peanuts recording. Add the trend sound from the TikTok, Reels, or Shorts library, caption the post with the days left until Christmas, and turn on the AI-generated label. December is the window — the trend started the moment the countdown became postable and search interest in "snoopy filter" peaks in November.',
      ],
      zh: [
        '趋势跑在名为「A Charlie Brown」的 CapCut 模板上，但你不需要那个 App。ViralReel 的 A Charlie Brown Christmas AI 页面在浏览器里跑同一个动作：七条重绘片段任选，上传一张照片，图生视频模型让扫描线从你的头顶扫到脚，把你重绘成 1965 年花生漫画风卡通，最后落在 Snoopy 的红色狗屋上，顶部是手写体标题。',
        `制作入口：${ZH_TEMPLATE} 。${PHOTO_ZH} 页面默认 9:16，时长固定 8 秒——即 12 秒趋势格式的前半段。生成前先看清积分。`,
        '下载的是一条新场景的新 MP4。ViralReel 不授权趋势原声，也不授权 Vince Guaraldi 的音乐（《Christmas Time Is Here》《Linus and Lucy》）或任何 Peanuts 录音。在 TikTok、Reels 或 Shorts 的曲库里加热梗原声，配文写圣诞倒数天数，并打开 AI 生成标注。12 月就是窗口——趋势在倒数变得可发的那一刻起飞，而「snoopy filter」的搜索量每年 11 月见顶。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is A Charlie Brown Christmas AI official Peanuts?', zh: 'A Charlie Brown Christmas AI 是官方 Peanuts 出品吗？' },
        a: {
          en: 'No. The CapCut template, every TikTok post, and this ViralReel page are fan works. Peanuts characters and the 1965 special are owned by Peanuts Worldwide and the Charles M. Schulz estate.',
          zh: '不是。CapCut 模板、每一条 TikTok 和本 ViralReel 页面都是粉丝作品。花生漫画角色和 1965 年特辑版权归 Peanuts Worldwide 及 Charles M. Schulz 遗产管理方。',
        },
      },
      {
        q: { en: 'Does the cartoon keep my glasses?', zh: '卡通会保留我的眼镜吗？' },
        a: {
          en: 'Yes — that is the point. The redraw keeps your hairstyle, glasses as simple bold frames, facial hair, and outfit colors and prints. The two dot eyes sit under your own frames.',
          zh: '会——这正是它的精髓。重绘保留你的发型、简化成粗框的眼镜、胡子和衣服的颜色图案。两个点点眼睛就长在你自己的镜框下面。',
        },
      },
    ],
  },
  {
    keyword: 'a charlie brown christmas ai video',
    slug: 'charlie-brown-christmas-ai-video',
    title: {
      en: 'A Charlie Brown Christmas AI Video – Make the MP4 on ViralReel',
      zh: 'A Charlie Brown Christmas AI 视频：在 ViralReel 制作 MP4',
    },
    description: {
      en: 'a charlie brown christmas ai video: ViralReel renders the scan-line redraw from one photo. 8 seconds, 9:16, watermark-free MP4. Seven redraw clips. Add the trend sound in the app and label it AI.',
      zh: 'a charlie brown christmas ai video：ViralReel 用一张照片渲染扫描线重绘。8 秒、9:16、无水印 MP4。七条重绘片段。原声在 App 里加，记得标注 AI。',
    },
    h1: { en: 'A Charlie Brown Christmas AI video', zh: 'A Charlie Brown Christmas AI 视频' },
    lead: {
      en: 'An A Charlie Brown Christmas AI video on ViralReel is a new MP4 — not a download of the 1965 special and not a copy of the TikTok that started the wave.',
      zh: 'ViralReel 上的 A Charlie Brown Christmas AI 视频是一条新的 MP4——不是 1965 年特辑的下载，也不是带火这波的那条 TikTok 的拷贝。',
    },
    guideTitle: {
      en: 'What the AI video is, and how it renders',
      zh: 'AI 视频是什么、怎么渲染',
    },
    body: {
      en: [
        'The clip people mean has a fixed three-beat structure: the real photo with a hand-lettered "A Charlie Brown Christmas" title, the scan line sweeping head to feet, and the finished flat-color cartoon standing on Snoopy\'s red doghouse in the snow. Trend posts run 12 seconds in 3:4; the ViralReel render is 8 seconds in 9:16 — the front stretch of the same move, sized for TikTok, Reels, and Shorts.',
        `Render it at ${EN_TEMPLATE}. ${PHOTO_EN} The render takes a few minutes; the MP4 downloads without a ViralReel watermark on paid plans, and failed jobs return the credits.`,
        'The file is picture only. ViralReel does not license or bake in the trend sound or the Vince Guaraldi Trio score. Plan to add the sound in the app you post to, caption it with the Christmas countdown, and disclose the AI label. A CapCut template named "A Charlie Brown" spread the trend in late October 2026; this page is the browser path with no CapCut project to hunt down. The comparison is ' + EN_CAPCUT_POST + '.',
      ],
      zh: [
        '大家说的片子有固定的三拍结构：真实照片加手写体「A Charlie Brown Christmas」标题、扫描线从头扫到脚、成品平涂卡通站在雪地的 Snoopy 红狗屋上。趋势原帖是 12 秒 3:4；ViralReel 渲染 8 秒 9:16——同一个动作的前半段，按 TikTok、Reels 和 Shorts 的画幅出片。',
        `渲染入口：${ZH_TEMPLATE} 。${PHOTO_ZH} 渲染需要几分钟；付费方案下载的 MP4 无 ViralReel 水印，失败任务退还积分。`,
        '文件只有画面。ViralReel 不授权、也不内置趋势原声或 Vince Guaraldi 三重奏的配乐。发布时在平台里加声音、配圣诞倒数文案、打开 AI 标注。2026 年 10 月下旬，名为「A Charlie Brown」的 CapCut 模板带火了趋势；本页是浏览器路径，不用去找 CapCut 工程。对照见 ' + ZH_CAPCUT_POST + '。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the MP4 12 seconds like the trend?', zh: 'MP4 是 12 秒吗，和趋势一样？' },
        a: {
          en: 'No. Trend posts are 12-second 3:4 clips. The ViralReel render is 8 seconds at 9:16 — the front stretch of the move, which covers photo, scan line, and the landed cartoon.',
          zh: '不是。趋势原帖是 12 秒 3:4。ViralReel 渲染 8 秒 9:16——动作的前半段，覆盖照片、扫描线和定格的卡通。',
        },
      },
      {
        q: { en: 'Does the MP4 include the sound?', zh: 'MP4 带声音吗？' },
        a: {
          en: 'The render may follow the reference clip\'s audio, but ViralReel does not license the trend sound or the Guaraldi score, so treat the download as picture. Add the sound from the TikTok, Reels, or Shorts library.',
          zh: '渲染可能会跟随参考片段的音频，但 ViralReel 不授权趋势原声或 Guaraldi 配乐，所以请把下载文件当画面用。声音从 TikTok、Reels 或 Shorts 的曲库加。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas template',
    slug: 'charlie-brown-christmas-template',
    title: {
      en: 'Charlie Brown Christmas Template – Seven Redraw Clips on ViralReel',
      zh: 'Charlie Brown Christmas 模板：ViralReel 七条重绘片段',
    },
    description: {
      en: 'charlie brown christmas template: seven redraw clips, one photo each, 8-second 9:16 MP4 in the browser. Glasses Redraw, Countdown Classic, Car Cameo, Family Elders, Harry Look, Title Card, Fresh Redraw.',
      zh: 'charlie brown christmas template：七条重绘片段，每条一张照片，浏览器直出 8 秒 9:16 MP4。眼镜重绘、圣诞倒数、车内出镜、全家长辈、哈利造型、手写标题、新鲜出炉。',
    },
    h1: { en: 'Charlie Brown Christmas template', zh: 'Charlie Brown Christmas 模板' },
    lead: {
      en: 'The Charlie Brown Christmas template on ViralReel is seven clips that run the same scan-line redraw with different casts — you pick one and upload a single photo.',
      zh: 'ViralReel 的 Charlie Brown Christmas 模板是七条片段：同一段扫描线重绘，出镜阵容不同——选一条，传一张照片。',
    },
    guideTitle: {
      en: 'How the template works',
      zh: '模板怎么用',
    },
    body: {
      en: [
        'Every clip holds the same scene and the same move: the real photo with the hand-lettered title, the scan line sweeping head to feet, and the 1965 cel-style cartoon landing on Snoopy\'s red doghouse. The casts differ — the Glasses Redraw is the trend\'s signature look, Countdown Classic is made for the "days till Christmas" caption, Car Cameo keeps your everyday outfit, Family Elders redraws grandparents, Harry Look handles round glasses, Title Card keeps the lettering readable, and Fresh Redraw is the newest sample.',
        `Open ${EN_TEMPLATE}, click any card, and the generator opens with that clip preselected. ${PHOTO_EN} The template prompt is pre-filled — there is no prompt box to write.`,
        'One photo renders one cartoon. For a couple or a family, render one person per pass, or pick a solo frame for each family member — the trend itself supports up to four people from a group photo, but the ViralReel template keeps it to one photo per render for the cleanest redraw.',
      ],
      zh: [
        '每条片段都是同一个场景同一个动作：真实照片加手写体标题、扫描线从头扫到脚、1965 赛璐璐风卡通落在 Snoopy 红狗屋上。差别在出镜阵容——眼镜重绘是趋势的招牌造型，圣诞倒数专为「距离圣诞还有几天」的配文而设，车内出镜保留你的日常穿搭，全家长辈负责爷爷奶奶，哈利造型搞定圆框眼镜，手写标题保持字样清晰，新鲜出炉是最新样本。',
        `打开 ${ZH_TEMPLATE} ，点任意卡片，生成器会带着那条片段打开。${PHOTO_ZH} 模板提示词已预填——没有需要你写的提示词框。`,
        '一张照片渲染一个卡通。情侣或全家可以一人一条逐个生成，或给每位家人各选一帧单人构图——趋势本身支持一张合影最多四人，但 ViralReel 模板每次渲染只收一张照片，重绘效果最干净。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this the CapCut template?', zh: '这是那个 CapCut 模板吗？' },
        a: {
          en: 'No. The CapCut template is named "A Charlie Brown" and lives inside CapCut. The ViralReel template runs the same move in the browser with an image-to-video model — no app, and paid exports without a ViralReel watermark.',
          zh: '不是。CapCut 模板名为「A Charlie Brown」，在 CapCut App 内。ViralReel 模板用图生视频模型在浏览器里跑同一个动作——不用装 App，付费导出无 ViralReel 水印。',
        },
      },
      {
        q: { en: 'Can the template take a group photo?', zh: '模板能收合影吗？' },
        a: {
          en: 'One photo renders one cartoon. A group photo works best when the generator has one clear subject; for up to four people the trend\'s CapCut route handles group shots. On ViralReel, render one person per pass.',
          zh: '一张照片渲染一个卡通。合影在生成器里最好只有一位清晰主体；最多四人的合影玩法走 CapCut 路线。在 ViralReel，每次渲染一个人。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas filter',
    slug: 'charlie-brown-christmas-filter',
    title: {
      en: 'Charlie Brown Christmas Filter – How to Get It, No CapCut Needed',
      zh: 'Charlie Brown Christmas 滤镜：怎么玩，不用 CapCut',
    },
    description: {
      en: 'charlie brown christmas filter: the TikTok trend that redraws your photo as a 1965 Peanuts cartoon on Snoopy\'s red doghouse. Get it on ViralReel in the browser — one photo, 8-second 9:16 MP4.',
      zh: 'charlie brown christmas filter：把照片重绘成站在 Snoopy 红狗屋上的 1965 花生漫画卡通的 TikTok 趋势。在 ViralReel 浏览器里玩——一张照片，8 秒 9:16 MP4。',
    },
    h1: { en: 'Charlie Brown Christmas filter', zh: 'Charlie Brown Christmas 滤镜' },
    lead: {
      en: 'The Charlie Brown Christmas filter is not an effect inside TikTok — it is a CapCut template, and on ViralReel it is a browser page that runs the same redraw without any app.',
      zh: 'Charlie Brown Christmas 滤镜不是 TikTok 里的特效——它是一个 CapCut 模板，而在 ViralReel，它是一个不用装任何 App 就能跑同款重绘的浏览器页面。',
    },
    guideTitle: {
      en: 'How to get the Charlie Brown Christmas filter',
      zh: '怎么玩 Charlie Brown Christmas 滤镜',
    },
    body: {
      en: [
        'Two routes exist. The TikTok route: find a post using the trend, tap the CapCut template link named "A Charlie Brown", and drop your photo into the app. The browser route: open ' + EN_TEMPLATE + ', pick one of seven redraw clips, upload one photo, and the video renders in a few minutes as a watermark-free MP4 you download and post like any clip.',
        `${PHOTO_EN} The joke only lands when the cartoon is still obviously you, so a clear, bright, face-to-camera photo matters more here than in most AI trends. Avoid sunglasses, masks, and costume photos.`,
        'The filter has many names — snoopy christmas filter, snoopy ai photo, peanuts christmas filter, charlie brown filter, charlie brown christmas filter effect, charlie brown christmas cartoon filter — they all describe the same 1965 doghouse redraw. None of them is an official Peanuts effect; the whole trend is fan work, and posts carry the AI-generated label.',
      ],
      zh: [
        '两条路线。TikTok 路线：找一条用趋势的帖子，点开名为「A Charlie Brown」的 CapCut 模板链接，把照片丢进 App。浏览器路线：打开 ' + ZH_TEMPLATE + ' ，七条重绘片段任选，上传一张照片，几分钟渲染出无水印 MP4，像普通视频一样下载发布。',
        `${PHOTO_ZH} 只有画出来明显还是你，笑点才成立，所以清晰、明亮、正脸对镜头的照片在这里比多数 AI 趋势都重要。别用墨镜、口罩和万圣节装扮照。`,
        '这个滤镜还有很多名字——snoopy christmas filter、snoopy ai photo、peanuts christmas filter、charlie brown filter、charlie brown christmas filter effect、charlie brown christmas cartoon filter——说的都是同一个 1965 狗屋重绘。没有一个是官方 Peanuts 特效；整个趋势都是粉丝作品，帖子都带 AI 生成标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How do I get the Charlie Brown Christmas filter on TikTok?', zh: '在 TikTok 上怎么找到 Charlie Brown Christmas 滤镜？' },
        a: {
          en: 'Search #charliebrownchristmas or #snoopyfilter, open a post, and tap the CapCut template link above the caption. Or skip the app: make the same clip in the browser at ' + EN_TEMPLATE + '.',
          zh: '搜 #charliebrownchristmas 或 #snoopyfilter，打开一条帖子，点配文上方的 CapCut 模板链接。或者跳过 App：直接在浏览器里做同款——' + ZH_TEMPLATE + '。',
        },
      },
      {
        q: { en: 'Is the filter free?', zh: '滤镜免费吗？' },
        a: {
          en: 'The CapCut template is free inside CapCut. A new ViralReel account starts with free credits — enough for a first template video — and later videos use a credit pack or a monthly plan. The generator shows the cost before you render.',
          zh: 'CapCut 模板在 App 内免费。新的 ViralReel 账号自带免费积分——够先做一条模板视频——之后的视频用积分包或月付。生成前会显示积分。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas tiktok',
    slug: 'charlie-brown-christmas-tiktok',
    title: {
      en: 'Charlie Brown Christmas TikTok Trend – Timeline and How to Join',
      zh: 'Charlie Brown Christmas TikTok 趋势：时间线与参与方式',
    },
    description: {
      en: 'charlie brown christmas tiktok: started by @jason_l_smith on 22–23 October 2026, took off with @nanceesjourney\'s countdown post, exploded 29 October. Make your own in the browser on ViralReel.',
      zh: 'charlie brown christmas tiktok：@jason_l_smith 2026 年 10 月 22–23 日首发，@nanceesjourney 的倒数帖走红，10 月 29 日全面爆发。在 ViralReel 浏览器里做你自己的。',
    },
    h1: { en: 'Charlie Brown Christmas TikTok trend', zh: 'Charlie Brown Christmas TikTok 趋势' },
    lead: {
      en: 'The Charlie Brown Christmas TikTok trend turned the Christmas countdown into a redraw: one photo, a scan line, and Snoopy\'s doghouse.',
      zh: 'Charlie Brown Christmas TikTok 趋势把圣诞倒数变成了重绘：一张照片、一道扫描线、Snoopy 的狗屋。',
    },
    guideTitle: {
      en: 'How the TikTok trend unfolded, and how to post yours',
      zh: 'TikTok 趋势怎么走起来的，你怎么发',
    },
    body: {
      en: [
        'The timeline: 22–23 October 2026, @jason_l_smith posts the first result of the CapCut template "A Charlie Brown" — a mirror selfie, under 600 plays. 26 October, @nanceesjourney posts "Sixty days till Christmas!" — the first post to take off, near 70,000 plays within days. 29 October the trend explodes: a tutorial by @sm5bhbjno8 passes 270,000 views, @lisahoesman\'s selfie passes 139,000, and most of the posts on the sound arrive that day. By 1 November the template had about 23,700 uses and #charliebrownchristmas sat near 253 million views.',
        'The caption format is the whole gag: the number of days left until Christmas, nothing else. The casts widened through the weekend — couples, whole families, grandparents, pets — and the trend keeps a Christmas clock: search interest in "snoopy filter" peaks in November, and December is the posting window.',
        `To join without the app: render your clip at ${EN_TEMPLATE}, download the 8-second 9:16 MP4, caption it with the days left, add #charliebrownchristmas and #snoopyfilter, add the trend sound from the TikTok library, and turn on the AI-generated label. Full steps are ${EN_HOWTO}.`,
      ],
      zh: [
        '时间线：2026 年 10 月 22–23 日，@jason_l_smith 发出 CapCut 模板「A Charlie Brown」的第一条成片——镜子自拍，播放不到 600。10 月 26 日，@nanceesjourney 发出「Sixty days till Christmas!」——第一条火起来的帖子，几天内播放近 7 万。10 月 29 日趋势爆发：@sm5bhbjno8 的教程帖播放破 27 万，@lisahoesman 的自拍破 13.9 万，这个原声下的大多数帖子都集中在当天。到 11 月 1 日，模板使用量约 23,700 次，#charliebrownchristmas 观看量逼近 2.53 亿。',
        '配文格式就是全部笑点：只写「距离圣诞节还有几天」，其他什么都不写。周末之间出镜阵容不断扩大——情侣、全家、爷爷奶奶、宠物——趋势挂着圣诞时钟走：「snoopy filter」搜索量 11 月见顶，12 月是发布窗口。',
        `不用 App 的参与方式：在 ${ZH_TEMPLATE} 渲染你的片段，下载 8 秒 9:16 的 MP4，配文写倒数天数，加 #charliebrownchristmas 和 #snoopyfilter，从 TikTok 曲库加热梗原声，打开 AI 生成标注。完整步骤见 ${ZH_HOWTO}。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this the same as the Charlie Brown dance trend?', zh: '这和 Charlie Brown 舞蹈趋势是一回事吗？' },
        a: {
          en: 'No. The dance trend (December 2025) recreated the special\'s awkward dance scene to a GloRilla x Guaraldi mashup. This trend is the redraw: flat 1965 cel style, scan line, red doghouse.',
          zh: '不是。舞蹈趋势（2025 年 12 月）是复刻特辑里的笨拙舞蹈，配 GloRilla x Guaraldi 混音。这一波是重绘：1965 平涂画风、扫描线、红色狗屋。',
        },
      },
      {
        q: { en: 'When should I post mine?', zh: '我该什么时候发？' },
        a: {
          en: 'Any morning works — the caption is the countdown, so every day is a new post. The window runs through December; last year "snoopy filter" searches peaked in November.',
          zh: '任何一天的早上都行——配文就是倒数，每一天都是新帖。窗口开到 12 月底；去年「snoopy filter」的搜索量 11 月见顶。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas generator',
    slug: 'charlie-brown-christmas-generator',
    title: {
      en: 'Charlie Brown Christmas AI Video Generator – In the Browser, No App',
      zh: 'Charlie Brown Christmas AI 视频生成器：浏览器直出，不用装 App',
    },
    description: {
      en: 'charlie brown christmas generator: ViralReel renders the scan-line redraw in the browser. One photo, seven clips, 8-second 9:16 MP4, no watermark on paid plans. Not CapCut, not an official Peanuts tool.',
      zh: 'charlie brown christmas generator：ViralReel 在浏览器里渲染扫描线重绘。一张照片、七条片段、8 秒 9:16 MP4、付费无水印。不是 CapCut，也不是官方 Peanuts 工具。',
    },
    h1: { en: 'Charlie Brown Christmas generator', zh: 'Charlie Brown Christmas 生成器' },
    lead: {
      en: 'A Charlie Brown Christmas generator is any tool that turns one photo into the doghouse redraw. ViralReel does it in the browser with an image-to-video model — no CapCut, no prompt.',
      zh: 'Charlie Brown Christmas 生成器泛指把一张照片变成狗屋重绘的工具。ViralReel 用图生视频模型在浏览器里完成——不用 CapCut，不用写提示词。',
    },
    guideTitle: {
      en: 'How the generator works',
      zh: '生成器怎么工作',
    },
    body: {
      en: [
        'The generator page shows seven redraw clips. Click one and the panel opens: upload one photo into the single slot, check the ratio (9:16) and the fixed 8-second length, read the credit cost, and press Generate. The image-to-video model receives your photo plus the family\'s reference clip and produces the three-beat move: title, scan line, doghouse.',
        `${PHOTO_EN} Renders take a few minutes — keep the window open. Failed or canceled jobs return the credits, and paid plans download without a ViralReel watermark.`,
        'A prompt-based tool (Kling, Seedance, Wan) asks you to describe the scene and still needs a reference video. The ViralReel generator is template-driven: the prompt is pre-filled and hidden, and the admin-configured reference clip holds the move. That is why there is no prompt box on this page and why results stay consistent across users.',
      ],
      zh: [
        '生成器页面展示七条重绘片段。点开一条，面板打开：往唯一的照片位传一张照片，确认画幅（9:16）和固定的 8 秒时长，看清积分，点生成。图生视频模型收到你的照片和系列参考片段，输出三拍动作：标题、扫描线、狗屋。',
        `${PHOTO_ZH} 渲染需要几分钟——别关窗口。失败或取消的任务退还积分，付费方案下载无 ViralReel 水印。`,
        '提示词类工具（Kling、Seedance、Wan）要你描述场景，还得自己找参考视频。ViralReel 生成器是模板驱动的：提示词已预填且不需要你操心，参考片段由后台配置承载动作。这就是本页没有提示词框、而所有用户出片风格一致的原因。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need a prompt for the generator?', zh: '用生成器需要写提示词吗？' },
        a: {
          en: 'No. The template prompt is pre-filled and the reference clip holds the move. You only pick a clip and upload a photo.',
          zh: '不需要。模板提示词已预填，动作由参考片段承载。你只需要选片段、传照片。',
        },
      },
      {
        q: { en: 'How long does a render take?', zh: '渲染要多久？' },
        a: {
          en: 'A few minutes for an 8-second clip. Keep the browser window open until the progress bar finishes; the video also lands in your generations history.',
          zh: '8 秒的片子需要几分钟。进度条走完前别关窗口；成片也会存进你的生成记录。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas meme',
    slug: 'charlie-brown-christmas-meme',
    title: {
      en: 'The Charlie Brown Christmas Meme, Explained – 1965 to TikTok',
      zh: 'Charlie Brown Christmas 梗，一页讲清：从 1965 到 TikTok',
    },
    description: {
      en: 'The Charlie Brown Christmas meme explained: the 1965 CBS special, Snoopy\'s doghouse scene, the October 2026 redraw trend, and what is fan work vs official. Make your own on ViralReel.',
      zh: 'Charlie Brown Christmas 梗 explained：1965 年 CBS 特辑、Snoopy 狗屋名场面、2026 年 10 月重绘趋势，以及哪些是粉丝作品。在 ViralReel 做你自己的。',
    },
    h1: { en: 'The Charlie Brown Christmas meme, explained', zh: 'Charlie Brown Christmas 梗，一页讲清' },
    lead: {
      en: 'Two things share the name: the 1965 TV special, and the 2026 redraw meme that borrows its look. Here is how they fit together.',
      zh: '这个名字对应两样东西：1965 年的电视特辑，和 2026 年借用它画风的梗。这里讲清它们的关系。',
    },
    guideTitle: {
      en: 'The special, the meme, and your MP4',
      zh: '特辑、梗、和你的 MP4',
    },
    body: {
      en: [
        'The source is A Charlie Brown Christmas, the Peanuts special that first aired on CBS on 9 December 1965 — directed by Bill Melendez, scored by the Vince Guaraldi Trio, and famous for its flat hand-drawn cel look and the scene where Snoopy decorates his red doghouse. That doghouse, the flat colors, the thick outlines, and the dot eyes are exactly what the meme borrows.',
        'The meme is the 2026 TikTok trend: a CapCut template named "A Charlie Brown" redraws your photo with a scan line into a 1965-style cartoon standing on that doghouse, and posts are captioned with the days left until Christmas. It started 22–23 October 2026 with @jason_l_smith, took off 26 October with @nanceesjourney, and exploded 29 October. The third file is your ViralReel render — a new MP4 from a photo you have permission to use, made at ' + EN_TEMPLATE + '.',
        'Keep the three apart when you post: the special belongs to Peanuts Worldwide and the Schulz estate, the meme is fan work, and your MP4 is your own post — label it AI, add the trend sound from the app library, and do not upload minors, celebrities, or stills from the special. The long-form explainer is ' + EN_EXPLAINED + '.',
      ],
      zh: [
        '源头是《A Charlie Brown Christmas》——1965 年 12 月 9 日在 CBS 首播的花生漫画特辑，Bill Melendez 执导，Vince Guaraldi 三重奏配乐，以平涂手绘赛璐璐画风和 Snoopy 装饰红色狗屋的名场面闻名。狗屋、平涂色块、粗黑描线、点点眼睛——梗借的正是这些。',
        '梗是 2026 年的 TikTok 趋势：名为「A Charlie Brown」的 CapCut 模板用扫描线把你的照片重绘成站在狗屋上的 1965 风卡通，帖子配文写圣诞倒数。它 2026 年 10 月 22–23 日由 @jason_l_smith 首发，26 日随 @nanceesjourney 走红，29 日爆发。第三个文件是你的 ViralReel 成片——用你有权使用的照片做的新 MP4，制作入口 ' + ZH_TEMPLATE + '。',
        '发帖时分清三者：特辑属于 Peanuts Worldwide 和 Schulz 遗产管理方，梗是粉丝作品，你的 MP4 是你自己的帖子——标注 AI、从 App 曲库加热梗原声、不要上传未成年人、名人或特辑截图。长文解释见 ' + ZH_EXPLAINED + '。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who owns A Charlie Brown Christmas?', zh: '《A Charlie Brown Christmas》版权归谁？' },
        a: {
          en: 'Peanuts Worldwide and the Charles M. Schulz estate own the Peanuts characters and the special. Nothing in the trend — the CapCut template, TikTok posts, or ViralReel — is official or affiliated.',
          zh: '花生漫画角色和特辑归 Peanuts Worldwide 及 Charles M. Schulz 遗产管理方所有。趋势里的任何东西——CapCut 模板、TikTok 帖子、ViralReel——都不是官方或关联方。',
        },
      },
      {
        q: { en: 'Is the meme the dance or the redraw?', zh: '这个梗是舞蹈还是重绘？' },
        a: {
          en: 'The 2026 meme is the redraw — scan line, doghouse, caption countdown. The dance (December 2025) was a separate trend with its own mashup sound.',
          zh: '2026 年的梗是重绘——扫描线、狗屋、倒数配文。舞蹈（2025 年 12 月）是另一个趋势，用的是另一段混音原声。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas capcut',
    slug: 'charlie-brown-christmas-capcut',
    title: {
      en: 'Charlie Brown Christmas: ViralReel vs the CapCut Template',
      zh: 'Charlie Brown Christmas：ViralReel 和 CapCut 模板对照',
    },
    description: {
      en: 'charlie brown christmas capcut comparison: the CapCut template "A Charlie Brown" drops your photo into a fixed scene; ViralReel runs the move with an image-to-video model. Formats, watermarks, and group photos compared.',
      zh: 'charlie brown christmas capcut 对照：CapCut 模板「A Charlie Brown」把照片放进固定场景；ViralReel 用图生视频模型跑动作。格式、水印、合影玩法逐项对比。',
    },
    h1: { en: 'ViralReel vs the CapCut template', zh: 'ViralReel 和 CapCut 模板对照' },
    lead: {
      en: 'The CapCut template "A Charlie Brown" is where the trend started. ViralReel runs the same move in the browser — here is what actually differs.',
      zh: 'CapCut 模板「A Charlie Brown」是趋势的起点。ViralReel 在浏览器里跑同一个动作——真正有差别的是这些。',
    },
    guideTitle: {
      en: 'Which route fits your post',
      zh: '哪条路线适合你的帖子',
    },
    body: {
      en: [
        'CapCut route: the template is free inside the app, supports up to four people from one group photo, and outputs the 12-second 3:4 format with the template\'s own sound. You need the CapCut app, and the template\'s fixed scene means your photo is placed at a fixed size.',
        `ViralReel route: open ${EN_TEMPLATE}, pick one of seven clips, upload one photo, and the image-to-video model puts you through the move itself — you are not dropped into a scene at a fixed size. The render is 8 seconds at 9:16, paid exports carry no ViralReel watermark, and there is no app to install and no prompt to write.`,
        'Both routes are fan work — neither is official Peanuts. Pick CapCut for free group shots with the sound baked in; pick ViralReel for a browser render, a cleaner single-subject redraw, and a watermark-free MP4 on paid plans. The long-form comparison is ' + EN_CAPCUT_POST + '.',
      ],
      zh: [
        'CapCut 路线：模板在 App 内免费，一张合影最多支持四人，输出 12 秒 3:4 格式并自带模板原声。需要装 CapCut，且模板的固定场景意味着你的照片按固定尺寸贴进去。',
        `ViralReel 路线：打开 ${ZH_TEMPLATE} ，七条片段任选，上传一张照片，图生视频模型把动作本身跑一遍——你不会被按固定尺寸贴进场景。渲染 8 秒 9:16，付费导出无 ViralReel 水印，不用装 App，也不用写提示词。`,
        '两条路线都是粉丝作品——都不是官方 Peanuts。要免费合影、原声自带选 CapCut；要浏览器渲染、单人重绘更干净、付费 MP4 无水印选 ViralReel。长文对照见 ' + ZH_CAPCUT_POST + '。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need CapCut for the Charlie Brown Christmas filter?', zh: '玩 Charlie Brown Christmas 滤镜必须装 CapCut 吗？' },
        a: {
          en: 'No. The CapCut template is one route. ViralReel runs the same redraw in the browser from one photo — no app, no template hunt.',
          zh: '不需要。CapCut 模板只是其中一条路线。ViralReel 用一张照片在浏览器里跑同款重绘——不用装 App，不用找模板。',
        },
      },
      {
        q: { en: 'Which route supports group photos?', zh: '哪条路线支持合影？' },
        a: {
          en: 'The CapCut template handles up to four people from one group photo. The ViralReel template renders one photo per pass — for couples and families, render one person per clip.',
          zh: 'CapCut 模板一张合影最多四人。ViralReel 模板每次渲染一张照片——情侣和全家可以一人一条逐个出。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas song',
    slug: 'charlie-brown-christmas-song',
    title: {
      en: 'The Charlie Brown Christmas Song Question – Trend Sound vs Vince Guaraldi',
      zh: 'Charlie Brown Christmas 的歌：趋势原声和 Vince Guaraldi 是两回事',
    },
    description: {
      en: 'charlie brown christmas song: the trend sound is @jason_l_smith\'s original sound, not the Vince Guaraldi Trio score. ViralReel licenses neither. Add the sound in TikTok, Reels, or Shorts and label it AI.',
      zh: 'charlie brown christmas song：趋势原声是 @jason_l_smith 的 original sound，不是 Vince Guaraldi 三重奏的配乐。ViralReel 两者都不授权。在 TikTok、Reels 或 Shorts 里加声音，并标注 AI。',
    },
    h1: { en: 'What song is in the Charlie Brown Christmas filter?', zh: 'Charlie Brown Christmas 滤镜里的是什么歌？' },
    lead: {
      en: 'Two different musics get mixed up: the trend sound that plays under the redraw posts, and the 1965 special\'s jazz score by the Vince Guaraldi Trio.',
      zh: '两段不同的音乐经常被搞混：重绘帖子下面放的趋势原声，和 1965 年特辑里 Vince Guaraldi 三重奏的爵士配乐。',
    },
    guideTitle: {
      en: 'What plays in the trend, and what you may use',
      zh: '趋势里放的是什么，你能用什么',
    },
    body: {
      en: [
        'The trend sound is the original sound from @jason_l_smith\'s first post — a Christmas track, not the Guaraldi score. That sound is why the posts read as one trend. The special\'s famous music is a different thing entirely: "Christmas Time Is Here" and "Linus and Lucy", composed by Vince Guaraldi for the 1965 broadcast.',
        'ViralReel does not license the trend sound, the Guaraldi compositions, or any recording of them, and it does not export them inside the MP4. The download is picture (renders may follow the reference clip\'s audio, which is not a license). Plan to add whichever sound your posting app offers — the trend sound lives in the TikTok, Reels, and Shorts libraries.',
        'The posting flow: download the 8-second 9:16 MP4, upload it in the app, add the trend sound or a licensed library track, caption the countdown, and turn on the AI-generated label. That keeps your post inside the platforms\' music licensing, which is exactly where it belongs.',
      ],
      zh: [
        '趋势原声来自 @jason_l_smith 第一条帖子的 original sound——一首圣诞歌曲，不是 Guaraldi 的配乐。正是这段声音让所有帖子读起来像同一个趋势。特辑里的名曲完全是另一回事：「Christmas Time Is Here」和「Linus and Lucy」，Vince Guaraldi 为 1965 年播出所作。',
        'ViralReel 不授权趋势原声、Guaraldi 的作品或它们的任何录音，也不会把它们打进 MP4。下载的文件只有画面（渲染可能跟随参考片段的音频，那不算授权）。发布时用你平台曲库里提供的声音——趋势原声就躺在 TikTok、Reels 和 Shorts 的曲库里。',
        '发布流程：下载 8 秒 9:16 的 MP4，在 App 里上传，加趋势原声或曲库里的授权音乐，配倒数文案，打开 AI 生成标注。这样你的帖子就落在平台自己的音乐授权范围内——它本来就该在那里。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Vince Guaraldi score in the video?', zh: '视频里有 Vince Guaraldi 的配乐吗？' },
        a: {
          en: 'No. ViralReel does not license or export the Guaraldi compositions or any Peanuts recording. Add a sound from the app library when you post.',
          zh: '没有。ViralReel 不授权、也不导出 Guaraldi 的作品或任何 Peanuts 录音。发布时从 App 曲库加声音。',
        },
      },
      {
        q: { en: 'Why do trend posts all sound the same?', zh: '为什么趋势帖子的音乐都一样？' },
        a: {
          en: 'They use the same trend audio — the original sound from the first @jason_l_smith post. TikTok spreads a trend through one sound page.',
          zh: '它们用的都是同一段趋势音频——@jason_l_smith 第一条帖子的 original sound。TikTok 上一个趋势就是靠一个声音页传开的。',
        },
      },
    ],
  },
  {
    keyword: 'snoopy christmas filter',
    slug: 'snoopy-christmas-filter',
    title: {
      en: 'Snoopy Christmas Filter – Turn Yourself Into a Snoopy-Style Cartoon',
      zh: 'Snoopy 圣诞滤镜：把自己变成 Snoopy 风格卡通',
    },
    description: {
      en: 'snoopy christmas filter: the alias of the Charlie Brown Christmas redraw — one photo becomes a 1965 Peanuts-style cartoon on Snoopy\'s red doghouse. Make it in the browser on ViralReel.',
      zh: 'snoopy christmas filter：Charlie Brown Christmas 重绘的别名——一张照片变成站在 Snoopy 红狗屋上的 1965 花生漫画风卡通。在 ViralReel 浏览器里做。',
    },
    h1: { en: 'Snoopy Christmas filter', zh: 'Snoopy 圣诞滤镜' },
    lead: {
      en: 'The Snoopy Christmas filter is the same trend under another name: the red doghouse, the scan line, and your photo redrawn as a 1965 cel-style cartoon.',
      zh: 'Snoopy 圣诞滤镜是同一趋势的另一个名字：红色狗屋、扫描线、和被重绘成 1965 赛璐璐风卡通的你的照片。',
    },
    guideTitle: {
      en: 'How to use the Snoopy Christmas filter',
      zh: 'Snoopy 圣诞滤镜怎么用',
    },
    body: {
      en: [
        'Searches for "snoopy filter" have peaked in November for two years running, and in 2026 the search lands on the Charlie Brown Christmas redraw: your photo with the hand-lettered title, the scan line, and the flat-color cartoon standing on Snoopy\'s red doghouse with a wreath on the roof.',
        `Make it at ${EN_TEMPLATE}. ${PHOTO_EN} For pets, use a full-body photo sitting or standing so the fur pattern is visible — a headshot of a black cat comes back as a grey blob.`,
        'The output is an 8-second 9:16 MP4. Add the trend sound from the app library, caption the countdown, and label it AI. Snoopy and Peanuts belong to Peanuts Worldwide and the Schulz estate — this page and the whole trend are fan work.',
      ],
      zh: [
        '「snoopy filter」的搜索量连续两年在 11 月见顶，2026 年这个搜索落到 Charlie Brown Christmas 重绘上：你的照片加手写体标题、扫描线、以及站在挂花环的红狗屋上的平涂卡通。',
        `制作入口：${ZH_TEMPLATE} 。${PHOTO_ZH} 宠物用坐姿或站姿的全身照让毛色花纹看得见——黑猫大头照会被画成一团灰。`,
        '产出是 8 秒 9:16 的 MP4。从 App 曲库加热梗原声，配倒数文案，标注 AI。Snoopy 和花生漫画属于 Peanuts Worldwide 和 Schulz 遗产管理方——本页和整个趋势都是粉丝作品。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Snoopy filter the same as the Charlie Brown Christmas filter?', zh: 'Snoopy 滤镜和 Charlie Brown Christmas 滤镜是同一个吗？' },
        a: {
          en: 'Yes — two names for the same redraw. TikTok spread it under #charliebrownchristmas and #snoopyfilter at the same time.',
          zh: '是——同一个重绘的两个名字。TikTok 上 #charliebrownchristmas 和 #snoopyfilter 是同时传开的。',
        },
      },
      {
        q: { en: 'Can my dog or cat get the filter?', zh: '我的猫狗能玩这个滤镜吗？' },
        a: {
          en: 'Yes. Use a full-body photo, sitting or standing, with the fur pattern visible. Keep the background simple so the redraw has a clean subject.',
          zh: '可以。用坐姿或站姿的全身照，毛色花纹清晰可见。背景尽量简单，让重绘有个干净的主体。',
        },
      },
    ],
  },
  {
    keyword: 'peanuts christmas filter',
    slug: 'peanuts-christmas-filter',
    title: {
      en: 'Peanuts Christmas Filter – The 1965-Style Redraw of Your Photo',
      zh: 'Peanuts 圣诞滤镜：你照片的 1965 风重绘',
    },
    description: {
      en: 'peanuts christmas filter: one photo redrawn as a 1965 Peanuts-style cartoon — flat colors, dot eyes, thick outlines — standing on the red doghouse. Browser render on ViralReel, one photo, 8s 9:16.',
      zh: 'peanuts christmas filter：一张照片重绘成 1965 年花生漫画风卡通——平涂色块、点点眼睛、粗黑描线——站在红狗屋上。ViralReel 浏览器渲染，一张照片，8 秒 9:16。',
    },
    h1: { en: 'Peanuts Christmas filter', zh: 'Peanuts 圣诞滤镜' },
    lead: {
      en: 'The Peanuts Christmas filter is what the 2026 TikTok trend looks like from the outside: your photo goes in, a 1965-style cartoon comes out standing on Snoopy\'s doghouse.',
      zh: 'Peanuts 圣诞滤镜是 2026 年 TikTok 趋势的外部视角：照片进去，1965 风卡通站在 Snoopy 狗屋上出来。',
    },
    guideTitle: {
      en: 'What the filter does to your photo',
      zh: '滤镜对你的照片做了什么',
    },
    body: {
      en: [
        'The style it applies is the 1965 TV special\'s: flat blocks of color with no shading, thick even black outlines, a big round head, two small dot eyes, short-line eyebrows, a small curved smile — while keeping everything that makes you recognizable: hairstyle, glasses as bold frames, facial hair, and your outfit\'s colors and prints.',
        `The filter is not inside TikTok. The trend runs on a CapCut template named "A Charlie Brown", and ViralReel runs the same move in the browser at ${EN_TEMPLATE}: pick a clip, upload one photo, download an 8-second 9:16 MP4.`,
        'It is a fan filter end to end — the CapCut template, the posts, and this page. Peanuts Worldwide and the Charles M. Schulz estate own the characters. Use photos you have permission to use, skip minors and celebrities, and turn on the AI label when you post.',
      ],
      zh: [
        '它套用的画风来自 1965 年特辑：无阴影平涂色块、均匀粗黑描线、大脑袋、两个小点眼睛、短眉、小弧度微笑——同时保留让你成为你的一切：发型、粗框眼镜、胡子、衣服的颜色和图案。',
        '滤镜不在 TikTok 里。趋势跑在名为「A Charlie Brown」的 CapCut 模板上，ViralReel 在浏览器里跑同一个动作：' + ZH_TEMPLATE + ' ——选片段、传一张照片、下载 8 秒 9:16 的 MP4。',
        '从头到尾都是粉丝滤镜——CapCut 模板、帖子、本页。花生漫画角色归 Peanuts Worldwide 和 Charles M. Schulz 遗产管理方所有。只用你有权使用的照片，跳过未成年人和名人，发帖时打开 AI 标注。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Peanuts Christmas filter official?', zh: 'Peanuts 圣诞滤镜是官方的吗？' },
        a: {
          en: 'No. Nothing in this trend is official Peanuts — it is fan work on CapCut, TikTok, and ViralReel alike.',
          zh: '不是。这波趋势里没有任何官方 Peanuts 成分——CapCut、TikTok 和 ViralReel 上都是粉丝作品。',
        },
      },
      {
        q: { en: 'What makes the cartoon look like me?', zh: '卡通为什么会像我？' },
        a: {
          en: 'A clear photo. The redraw keeps hairstyle, glasses, facial hair, and outfit — the dot eyes sit under your own frames. Blur, shadows, or a mask take away exactly the details the style needs.',
          zh: '一张清晰的照片。重绘保留发型、眼镜、胡子和衣服——点点眼睛长在你自己的镜框下。模糊、阴影或口罩拿走的恰好是这种画风最需要的细节。',
        },
      },
    ],
  },
  {
    keyword: 'charlie brown christmas filter effect',
    slug: 'charlie-brown-christmas-filter-effect',
    title: {
      en: 'Charlie Brown Christmas Filter Effect – What It Does, Step by Step',
      zh: 'Charlie Brown Christmas 滤镜效果：一步步拆解',
    },
    description: {
      en: 'charlie brown christmas filter effect explained: title card, scan line, 1965 cel-style redraw, red doghouse landing. Recreate it from one photo on ViralReel.',
      zh: 'charlie brown christmas filter effect 拆解：标题卡、扫描线、1965 赛璐璐风重绘、落在红狗屋。在 ViralReel 用一张照片复刻。',
    },
    h1: { en: 'Charlie Brown Christmas filter effect, step by step', zh: 'Charlie Brown Christmas 滤镜效果，逐步拆解' },
    lead: {
      en: 'The effect is one continuous 8-second move. Here is exactly what happens, frame by frame.',
      zh: '这个特效是一段连续的 8 秒动作。逐帧拆给你看。',
    },
    guideTitle: {
      en: 'The effect, frame by frame',
      zh: '特效逐帧拆解',
    },
    body: {
      en: [
        'Frames 0–2s: your real photo fills the frame, waist-up or full body, and a hand-lettered white "A Charlie Brown Christmas" title sits across the top. The photo stays photographic — that contrast is the setup.',
        'Frames 2–5s: a bright horizontal scan line sweeps from the top of the head to the feet. Above the line the photo is already a flat 2D cartoon — 1965 cel style: flat colors, no shading, thick even outlines, big round head, dot eyes, short-line eyebrows, your own hair and outfit as flat shapes.',
        'Frames 5–8s: the sweep completes and the finished cartoon stands full-body on Snoopy\'s red wooden doghouse — red sloped roof, dark plank lines, snow on the edges, a green wreath with a red bow, snow falling — facing the camera. That landed shot is what posts freeze on, which is why the countdown caption format works. Recreate it at ' + EN_TEMPLATE + '.',
      ],
      zh: [
        '第 0–2 秒：你真实的照片充满画面，半身或全身，顶部一行手写体白色「A Charlie Brown Christmas」标题。照片保持摄影质感——这个反差是铺垫。',
        '第 2–5 秒：一道亮横向扫描线从头顶扫到脚。线扫过的地方照片已经变成平涂 2D 卡通——1965 赛璐璐风：平涂色块、无阴影、均匀粗描线、大脑袋、点眼睛、短眉，你自己的发型和衣服变成扁平色块。',
        '第 5–8 秒：扫描完成，成品卡通全身站在 Snoopy 红色木狗屋上——红色斜屋顶、深色木板线、屋沿积雪、绿花环配红蝴蝶结、雪花飘落——面向镜头。定格就是这个画面，所以倒数配文格式才成立。复刻入口 ' + ZH_TEMPLATE + '。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I recreate the effect without editing?', zh: '不学剪辑能复刻这个特效吗？' },
        a: {
          en: 'Yes. The whole effect is one template move. On ViralReel you upload one photo and the render produces the title, scan line, and doghouse automatically.',
          zh: '可以。整个特效就是一段模板动作。在 ViralReel 传一张照片，渲染会自动产出标题、扫描线和狗屋。',
        },
      },
      {
        q: { en: 'Why does the effect start on the real photo?', zh: '特效为什么从真实照片开始？' },
        a: {
          en: 'The before/after is the joke. Showing the real you first makes the flat cartoon readable — and keeps your glasses, hair, and outfit as the punchline.',
          zh: '前后反差就是笑点。先给真实的你，平涂卡通才读得懂——你的眼镜、发型和衣服就是包袱。',
        },
      },
    ],
  },
  {
    keyword: 'a charlie brown christmas 1965',
    slug: 'charlie-brown-christmas-1965',
    title: {
      en: 'A Charlie Brown Christmas 1965 – The Special Behind the Filter',
      zh: 'A Charlie Brown Christmas 1965：滤镜背后的那部特辑',
    },
    description: {
      en: 'A Charlie Brown Christmas 1965: the CBS special that first aired 9 December 1965 — Bill Melendez, Vince Guaraldi, Snoopy\'s doghouse — and how it became a 2026 TikTok filter. Fan tools only.',
      zh: 'A Charlie Brown Christmas 1965：1965 年 12 月 9 日在 CBS 首播的特辑——Bill Melendez、Vince Guaraldi、Snoopy 的狗屋——以及它如何变成 2026 年的 TikTok 滤镜。仅粉丝工具。',
    },
    h1: { en: 'A Charlie Brown Christmas (1965)', zh: 'A Charlie Brown Christmas（1965）' },
    lead: {
      en: 'The 2026 filter borrows everything from a 1965 broadcast: the flat cel look, the jazz score, and Snoopy\'s red doghouse.',
      zh: '2026 年的滤镜从一个 1965 年的电视节目借走了所有元素：平涂赛璐璐画风、爵士配乐、Snoopy 的红色狗屋。',
    },
    guideTitle: {
      en: 'The 1965 special, and the trend it started 61 years later',
      zh: '1965 年的特辑，和 61 年后它带起的趋势',
    },
    body: {
      en: [
        'A Charlie Brown Christmas first aired on CBS on 9 December 1965. It was directed by Bill Melendez, scored by the Vince Guaraldi Trio — "Christmas Time Is Here" and "Linus and Lucy" — and it famously looked unlike any cartoon on TV: flat blocks of color, no shading, thick hand-drawn outlines, actual children voicing the characters, and a jazz score nobody expected in a kids\' special.',
        'The scene the trend borrows is Snoopy\'s doghouse: he decorates his red doghouse with lights and a wreath for the Christmas play, which is where the trend\'s red doghouse with the wreath comes from. The special\'s hand-lettered title card is the same lettering the filter puts across the top of your photo.',
        'The special belongs to Peanuts Worldwide and the Charles M. Schulz estate. The 2026 TikTok trend — the CapCut template "A Charlie Brown", the posts, and ViralReel\'s page — is fan work. If this page is what you found first: the 1965 special streams officially each December, and the redraw is what you make at ' + EN_TEMPLATE + '.',
      ],
      zh: [
        '《A Charlie Brown Christmas》于 1965 年 12 月 9 日在 CBS 首播。Bill Melendez 执导，Vince Guaraldi 三重奏配乐——《Christmas Time Is Here》和《Linus and Lucy》——它在当时看起来完全不像电视上的任何动画：平涂色块、无阴影、手绘粗描线、真小孩配音，以及谁都没料到会出现在儿童特辑里的爵士乐。',
        '趋势借的名场面是 Snoopy 的狗屋：他为圣诞节节目给红色狗屋挂上彩灯和花环——趋势里带花环的红狗屋就出自这里。特辑手写体的片名字幕，正是滤镜加在你照片顶部的那行字。',
        '特辑归 Peanuts Worldwide 和 Charles M. Schulz 遗产管理方所有。2026 年的 TikTok 趋势——CapCut 模板「A Charlie Brown」、各条帖子、ViralReel 的页面——都是粉丝作品。如果你是先搜到这里：1965 年特辑每年 12 月都会正版上线，重绘则是在 ' + ZH_TEMPLATE + ' 做的。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'When did A Charlie Brown Christmas first air?', zh: '《A Charlie Brown Christmas》首播是什么时候？' },
        a: {
          en: '9 December 1965, on CBS. It has aired every holiday season since and streams officially each December.',
          zh: '1965 年 12 月 9 日，CBS。此后每个假日季都会播出，每年 12 月正版上线流媒体。',
        },
      },
      {
        q: { en: 'Who made the music in the 1965 special?', zh: '1965 年特辑的音乐是谁做的？' },
        a: {
          en: 'The Vince Guaraldi Trio — "Christmas Time Is Here" and "Linus and Lucy". ViralReel does not license or export that music; the trend sound on TikTok is a different track.',
          zh: 'Vince Guaraldi 三重奏——《Christmas Time Is Here》和《Linus and Lucy》。ViralReel 不授权、也不导出这些音乐；TikTok 上的趋势原声是另一首歌。',
        },
      },
    ],
  },
  ...CHARLIE_BROWN_CITE_TAILS,
];

export function getCharlieBrownLongTail(slug: string) {
  return CHARLIE_BROWN_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly CharlieBrownHowToStep[] {
  return entry.steps === 'shared' ? CHARLIE_BROWN_HOW_TO_STEPS : entry.steps;
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
          `在 ViralReel 制作：${template} 。七条重绘片段任选，上传一张你有权使用的照片，生成 8 秒 9:16 的 MP4。ViralReel 不授权趋势原声或 Vince Guaraldi 的音乐。`,
        ],
        [
          '照片有什么要求？',
          '半身或全身，正脸对镜头，发型、眼镜和衣服都在画面里。不要墨镜和口罩——点点眼睛长在你自己的眼镜下面。不要用未成年人、名人或 1965 年特辑的截图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是官方 Peanuts 页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Peanuts Worldwide、Charles M. Schulz 遗产管理方、Apple、CapCut 或 TikTok 均无关联。这是粉丝作品。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Pick one of seven redraw clips, upload one photo you have permission to use, and generate an 8-second 9:16 MP4. ViralReel does not license the trend sound or the Vince Guaraldi music.`,
        ],
        [
          'What does the photo need?',
          'Waist-up or full body, face to the camera, hair, glasses and outfit in frame. No sunglasses and no masks — the dot eyes sit under your own glasses. Do not use minors, celebrities, or screenshots of the 1965 special.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an official Peanuts page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Peanuts Worldwide, the Charles M. Schulz estate, Apple, CapCut, or TikTok. This is fan work.',
        ],
      ];
  return [...own, ...shared];
}

export interface CharlieBrownLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function charlieBrownLinkGroups(zh: boolean): CharlieBrownLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: CHARLIE_BROWN_TEMPLATE_PATH, label: zh ? 'A Charlie Brown Christmas 模板' : 'A Charlie Brown Christmas template' },
        { href: '/charlie-brown-christmas-ai', label: 'A Charlie Brown Christmas AI' },
        { href: '/charlie-brown-christmas-ai-video', label: zh ? 'AI 视频' : 'AI video' },
        { href: '/charlie-brown-christmas-template', label: zh ? 'Charlie Brown Christmas 模板' : 'Charlie Brown Christmas template' },
        { href: '/charlie-brown-christmas-generator', label: zh ? 'AI 视频生成器' : 'AI video generator' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '滤镜和搜索别名' : 'Filter and search aliases',
      links: [
        { href: '/charlie-brown-christmas-filter', label: zh ? 'Charlie Brown Christmas 滤镜' : 'Charlie Brown Christmas filter' },
        { href: '/charlie-brown-christmas-filter-effect', label: zh ? '滤镜效果拆解' : 'Filter effect, step by step' },
        { href: '/snoopy-christmas-filter', label: zh ? 'Snoopy 圣诞滤镜' : 'Snoopy Christmas filter' },
        { href: '/peanuts-christmas-filter', label: zh ? 'Peanuts 圣诞滤镜' : 'Peanuts Christmas filter' },
        { href: '/charlie-brown-christmas-tiktok', label: zh ? 'TikTok 趋势' : 'The TikTok trend' },
        { href: '/charlie-brown-christmas-meme', label: zh ? '梗，一页讲清' : 'The meme, explained' },
        { href: '/charlie-brown-christmas-1965', label: zh ? '1965 年特辑' : 'The 1965 special' },
      ],
    },
    {
      title: zh ? '对照和答疑' : 'Comparisons and answers',
      links: [
        { href: '/charlie-brown-christmas-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: '/charlie-brown-christmas-song', label: zh ? '趋势原声 vs Guaraldi' : 'Trend sound vs Guaraldi' },
        { href: CHARLIE_BROWN_POSTS.capcut, label: zh ? '长文对照：ViralReel 和 CapCut' : 'Long read: ViralReel vs CapCut' },
        { href: CHARLIE_BROWN_POSTS.song, label: zh ? '长文：歌与历史' : 'Long read: the song and the history' },
        { href: '/charlie-brown-christmas-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
        { href: '/charlie-brown-christmas-kling', label: zh ? '和 Kling 对照' : 'Kling comparison' },
        { href: '/charlie-brown-christmas-seedance', label: zh ? '不是 Seedance 提示词' : 'Not a Seedance prompt' },
      ],
    },
    {
      title: zh ? '怎么做（ChatGPT 常问）' : 'How to make it',
      links: [
        { href: '/charlie-brown-christmas-chatgpt', label: zh ? 'ChatGPT 解释，模板出片' : 'ChatGPT explains, the template renders' },
        { href: '/charlie-brown-christmas-prompt', label: zh ? '没有空白提示词' : 'No blank prompt' },
        { href: '/charlie-brown-christmas-how-to', label: zh ? '怎么做' : 'How to make it' },
        { href: '/charlie-brown-christmas-best', label: zh ? '固定模板怎么选' : 'When the fixed template fits' },
        { href: '/charlie-brown-christmas-free', label: zh ? '积分，不是永远免费' : 'Credits, not free forever' },
        { href: '/charlie-brown-christmas-sound', label: zh ? '原声没有授权' : 'Sound, no license' },
        { href: '/charlie-brown-christmas-no-watermark', label: zh ? '付费导出无水印' : 'Paid export, no watermark' },
        { href: '/charlie-brown-christmas-ai-label', label: zh ? '发布时的 AI 标注' : 'AI label when you post' },
        { href: '/charlie-brown-christmas-pets', label: zh ? '宠物，不是纪念' : 'Pets, not a memorial' },
        { href: '/snoopy-ai-photo', label: zh ? 'Snoopy 静帧不是这条视频' : 'A Snoopy still is not this video' },
        { href: '/make-charlie-brown-christmas-ai', label: zh ? '制作一条新 MP4' : 'Make a new MP4' },
        { href: '/charlie-brown-christmas-from-photo', label: zh ? '用一张照片' : 'From a photo' },
        { href: '/charlie-brown-christmas-online', label: zh ? '浏览器里做' : 'Make it online' },
        { href: '/charlie-brown-christmas-mp4', label: zh ? '8 秒 9:16 MP4' : '8-second 9:16 MP4' },
        { href: '/charlie-brown-christmas-instagram', label: 'Instagram Reels' },
        { href: '/charlie-brown-christmas-youtube-shorts', label: 'YouTube Shorts' },
        { href: '/charlie-brown-christmas-with-friends', label: zh ? '和朋友一起' : 'With friends' },
        { href: '/charlie-brown-christmas-original', label: zh ? '原版指哪一个文件' : 'Which file “original” means' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: CHARLIE_BROWN_POSTS.howTo, label: zh ? '如何制作 A Charlie Brown Christmas AI 视频' : 'How to make an A Charlie Brown Christmas AI video' },
        { href: CHARLIE_BROWN_POSTS.explained, label: zh ? '趋势是什么、从哪来' : 'What the trend is and where it came from' },
        { href: CHARLIE_BROWN_POSTS.generators, label: zh ? '2026 年 11 月生成器对照' : 'November 2026 generator roundup' },
        { href: CHARLIE_BROWN_POSTS.photos, label: zh ? '照片怎么拍' : 'Photo tips' },
        { href: CHARLIE_BROWN_POSTS.roundup, label: zh ? '2026 年 10 月 AI 梗视频盘点' : 'October 2026 AI meme videos' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding AI 模板' : 'Tiny Desk Outstanding AI template' },
      ],
    },
  ];
}

export const CHARLIE_BROWN_LONG_TAIL_ROUTES = CHARLIE_BROWN_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
