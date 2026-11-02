import type { TemplateCostContext } from '@/shared/lib/pricing-copy';

import { SASHA_LA_CATRINA_INTENT_TAILS } from './intent-tails';
import { SASHA_LA_CATRINA_HOW_TO_STEPS, type SashaLaCatrinaHowToStep } from './steps';

/**
 * Long-tail landings for the Sasha La Catrina template.
 *
 * To add another keyword: append an entry here or in `intent-tails.ts`.
 * The sitemap reads SASHA_LA_CATRINA_LONG_TAIL_ROUTES. Public URLs are served by
 * the single `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `sasha-la-catrina-ai-template` slug.
 */

export const SASHA_LA_CATRINA_TEMPLATE_PATH = '/sasha-la-catrina-ai-template';

export const SASHA_LA_CATRINA_POSTS = {
  howTo: '/blog/how-to-make-catrina-ai-video',
  explained: '/blog/what-is-sasha-la-catrina',
  song: '/blog/sasha-la-catrina-song-and-meaning',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
} as const;

const EN_TEMPLATE = 'https://www.viralreel.app/sasha-la-catrina-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/sasha-la-catrina-ai-template';

type Copy = { en: string; zh: string };

export interface SashaLaCatrinaLongTailFaqItem {
  q: Copy;
  a: Copy;
}

export interface SashaLaCatrinaLongTailEntry {
  keyword: string;
  slug: string;
  title: Copy;
  description: Copy;
  h1: Copy;
  lead: Copy;
  guideTitle: Copy;
  body: { en: string[]; zh: string[] };
  steps: 'shared' | readonly SashaLaCatrinaHowToStep[];
  faq: SashaLaCatrinaLongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const SAMPLES_EN =
  'The samples on ViralReel are Flower Toss (the bedroom reveal that started it), Second Face (the same reveal recast), Song Reveal, Ofrenda Reveal, Catrín (the male version), Catrina Cat and Grandmother — each its own clip with its own length of 5, 10 or 15 seconds.';
const SAMPLES_ZH =
  'ViralReel 上的样本有撒花变身（开创这条趋势的卧室变身）、同款另一张脸、歌声变身、祭坛揭面、男版 Catrín、猫咪变身和游行奶奶——每个样本都是一条独立片段，时长分别为 5、10 或 15 秒。';

const SLOTS_EN =
  'Almost every reveal takes one photo — a clear front-facing portrait, hands away from the face, waist-up if you want the gown. The pet versions take one photo of the pet with its whole head and markings visible. Pick the sample first: its reveal, camera and sound are what your clip becomes.';
const SLOTS_ZH =
  '几乎每个变身都只需要一张照片——清晰的正面照、手别挡脸、想出全裙装就拍半身。宠物版用一张宠物头部和花纹都清楚的照片。先选样本：它的变身、运镜和原声就是你成片的全部模板。';

const SOUND_EN =
  'The clip keeps the sample\'s original sound — "Adiós señora bonita" from The Book of Life is the one the trend rides. If the sound is missing from your download, add it inside TikTok from the in-app library, and turn on the AI label. ViralReel does not license the song.';
const SOUND_ZH =
  '成片保留样本原声——这条趋势用的就是《生命之书》里的《Adiós señora bonita》。如果下载的文件缺声音，在 TikTok 站内曲库添加并打开 AI 标注。ViralReel 不授权这首歌。';

const LIMIT_EN =
  'Use photos of yourself, your family, or your pet. Do not pass the output off as real face paint, and keep the AI-generated label on when you post — the whole point of the look is that it was drawn, not painted.';
const LIMIT_ZH =
  '用你自己、家人或宠物的照片。不要把成片冒充真实妆造，发布时保持 AI 生成标注——这个造型的本意就是「画出来的」，不是真画的。';

export const SASHA_LA_CATRINA_LONG_TAILS: readonly SashaLaCatrinaLongTailEntry[] = [
  {
    keyword: 'sasha la catrina',
    slug: 'sasha-la-catrina-ai',
    title: {
      en: 'Sasha La Catrina AI – The Fairytale Catrina Reveal From One Photo | ViralReel',
      zh: 'Sasha La Catrina AI：一张照片变身的童话卡特里娜 | ViralReel',
    },
    description: {
      en: 'sasha la catrina: the one-photo AI reveal that turns you into the Book of Life Catrina — sugar-skull paint, lace gown, marigold crown. Seven samples, 5-15s, sound kept. On ViralReel, not affiliated with the original creators.',
      zh: 'sasha la catrina：一张照片变身《生命之书》卡特里娜的 AI 玩法——糖骷髅妆、蕾丝裙、万寿菊花冠。七个样本、5-15 秒、保留原声。ViralReel 出品，与原作者无关联。',
    },
    h1: { en: 'Sasha La Catrina', zh: 'Sasha La Catrina' },
    lead: {
      en: 'Sasha La Catrina is the Día de Muertos 2026 wave: one photo in, a flower crosses the frame, marigold light sweeps over, and you come back as the fairytale Catrina. ViralReel does it from one photo in the browser.',
      zh: 'Sasha La Catrina 是 2026 年亡灵节这波玩法：一张照片进，一朵花划过画面，万寿菊金光扫过，你就变回了童话版卡特里娜。ViralReel 在浏览器里一张照片完成。',
    },
    guideTitle: {
      en: 'What Sasha La Catrina is, and how to make one',
      zh: 'Sasha La Catrina 是什么，以及怎么做一条',
    },
    body: {
      en: [
        'Sasha La Catrina is the name the Spanish side of TikTok gave the fairytale Catrina look: La Catrina dressed for a storybook, the way she appears in The Book of Life — sugar-skull paint in white and gold, an embroidered lace gown with marigolds worked into it, a crown of orange and purple flowers or a wide lace hat, candlelight and cempasúchil petals behind. The 2026 wave turns that look into a one-photo AI reveal: a flower crosses the frame, marigold light sweeps over it, and the person in the photo comes back as her.',
        `You make one at ${EN_TEMPLATE}. ${SLOTS_EN} ${SAMPLES_EN}`,
        'The wave was shaped by Đan Thy\'s flower toss on 20 October 2026 — 40.6M plays and 7M likes — and by the CapCut template named Sasha La Catrina that made the reveal one photo long a week later. It peaks on Día de Muertos, November 1-2, and the copies credit her by name. A render that fails is refunded automatically.',
      ],
      zh: [
        'Sasha La Catrina 是西语区 TikTok 对童话版卡特里娜造型的叫法：《生命之书》里为故事书而装扮的 La Catrina——白金两色糖骷髅妆、织入万寿菊的刺绣蕾丝裙、橙紫两色花冠或宽檐蕾丝帽，身后是烛光和万寿菊花瓣。2026 年这波把造型变成了单照片 AI 变身：一朵花划过画面，万寿菊金光扫过，照片里的人就以她的样子回来了。',
        `在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} ${SAMPLES_ZH}`,
        '这波浪潮的定型是 Đan Thy 在 2026 年 10 月 20 日的撒花变身——4060 万播放、700 万点赞——一周后，名为 Sasha La Catrina 的 CapCut 模板让变身只要一张照片。趋势在 11 月 1-2 日亡灵节达到峰值，二创都在文案里致谢她。渲染失败自动退积分。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The sample already fixes the reveal, the gown, the camera and the sound. You pick a sample and upload one photo.',
          zh: '不需要。样本已经定好了变身、裙装、运镜和声音。你选一个样本，上传一张照片。',
        },
      },
      {
        q: { en: 'Who is Sasha La Catrina?', zh: 'Sasha La Catrina 是谁？' },
        a: {
          en: 'She is La Catrina herself — the elegant skeleton of Día de Muertos as she appears in The Book of Life. "Sasha" is what the Spanish side of TikTok calls her in this trend, and the CapCut template is named after her. She is not a new character.',
          zh: '她就是 La Catrina 本尊——亡灵节里优雅的骷髅女士，《生命之书》中的样子。「Sasha」是西语区 TikTok 在这条趋势里对她的爱称，CapCut 模板也以她命名。她不是新角色。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina template',
    slug: 'sasha-la-catrina-template',
    title: {
      en: 'Sasha La Catrina Template – Seven Reveals, One Photo Each | ViralReel',
      zh: 'Sasha La Catrina 模板——七个变身，每个一张照片 | ViralReel',
    },
    description: {
      en: 'The Sasha La Catrina template samples on ViralReel: Flower Toss, Second Face, Song Reveal, Ofrenda Reveal, Catrín, Catrina Cat and Grandmother. One photo each, 5-15 seconds, original sound kept.',
      zh: 'ViralReel 上的 Sasha La Catrina 模板样本：撒花变身、同款另一张脸、歌声变身、祭坛揭面、男版 Catrín、猫咪变身、游行奶奶。每个一张照片，5-15 秒，保留原声。',
    },
    h1: { en: 'Sasha La Catrina template', zh: 'Sasha La Catrina 模板' },
    lead: {
      en: 'Every Sasha La Catrina sample is a different way to come back as Catrina. Pick the reveal you want — your photo does the rest.',
      zh: '每个 Sasha La Catrina 样本都是一种变回卡特里娜的方式。选好变身——剩下的交给你的照片。',
    },
    guideTitle: {
      en: 'Choosing a Catrina reveal to copy',
      zh: '选一个要翻拍的卡特里娜变身',
    },
    body: {
      en: [
        `The wave has a reveal for almost everyone, and ViralReel ships the seven that traveled widest. ${SAMPLES_EN}`,
        `Open ${EN_TEMPLATE} and pick the sample whose reveal you want — the picker sits beside the preview, and the clip you choose is the exact reference the model renders from. ${SLOTS_EN}`,
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `这波浪潮几乎给每个人都准备了变身，ViralReel 收录了传播最广的七个。${SAMPLES_ZH}`,
        `打开 ${ZH_TEMPLATE} ，选一个你想要的变身——选择器就在预览旁边，你选中的片段就是模型渲染的参照。${SLOTS_ZH}`,
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this the CapCut template?', zh: '这是 CapCut 模板吗？' },
        a: {
          en: 'No. CapCut templates cut a face onto a fixed clip. ViralReel re-renders the whole person from your photo — face, hair and build stay yours under the paint — and keeps the sample\'s reveal and sound.',
          zh: '不是。CapCut 模板是把脸贴到固定片段上。ViralReel 从你的照片重新生成整个人——妆面之下脸、发型、身材都还是你——并保留样本的变身和原声。',
        },
      },
      {
        q: { en: 'Which sample should I pick for a pet?', zh: '宠物该选哪个样本？' },
        a: {
          en: 'Catrina Cat is the cat version — one photo of the cat, whole head and markings visible. Dogs work in the same sample; keep the pet alone in the photo or you get a sugar skull with whiskers on a human body.',
          zh: '猫咪变身就是宠物版——一张猫的照片，头和花纹拍清楚。狗也能用同一个样本；照片里只放宠物，不然会生成一个长胡须的人类骷髅。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina video',
    slug: 'sasha-la-catrina-video',
    title: {
      en: 'Sasha La Catrina Video – Make Yours From One Photo | ViralReel',
      zh: 'Sasha La Catrina 视频——一张照片做你的版本 | ViralReel',
    },
    description: {
      en: 'What a Sasha La Catrina video looks like: the flower crosses, the marigold light lands, and your face comes back under the sugar-skull paint. Lengths of 5-15 seconds, vertical, sound kept — make yours from one photo on ViralReel.',
      zh: 'Sasha La Catrina 视频长什么样：花划过、金光落下、你的脸在糖骷髅妆下回来。5-15 秒、竖屏、保留原声——在 ViralReel 用一张照片做你的版本。',
    },
    h1: { en: 'Sasha La Catrina video', zh: 'Sasha La Catrina 视频' },
    lead: {
      en: 'One photo, one reveal, and the marigold light does the rest — that is the whole format.',
      zh: '一张照片、一次变身，剩下的交给万寿菊金光——格式就是这么简单。',
    },
    guideTitle: {
      en: 'The anatomy of a Sasha La Catrina video',
      zh: '一条 Sasha La Catrina 视频的解剖',
    },
    body: {
      en: [
        'Every video in the wave shares the same skeleton: a person (or pet) sits or stands in an ordinary room; a flower crosses the frame or hands cover the face; marigold light bursts; and the reveal lands — sugar-skull paint in white and gold, the embroidered lace gown, the flower crown or wide lace hat, candles and cempasúchil petals drifting. The samples on ViralReel are 5, 10 or 15 seconds, vertical 9:16, with the original sound kept.',
        `You make one at ${EN_TEMPLATE}. ${SLOTS_EN} ${SAMPLES_EN}`,
        'What makes it read at a glance is the light: the whole transformation happens inside one warm marigold sweep, so every copy is recognizable even before the gown lands. Post it while Día de Muertos is still running — the wave is at its busiest on November 1-2.',
      ],
      zh: [
        '这波浪潮里的每条视频都共享同一副骨架：一个人（或宠物）坐在普通房间里；一朵花划过画面或双手掩面；万寿菊金光爆开；变身落地——白金糖骷髅妆、刺绣蕾丝裙、花冠或宽檐帽、烛光和万寿菊花瓣飘落。ViralReel 的样本是 5、10 或 15 秒，9:16 竖屏，保留原声。',
        `在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} ${SAMPLES_ZH}`,
        '让人一眼读懂的是那道光：整个变身都发生在一次温暖的万寿菊金光里，所以每条二创在裙装落地前就被认出来。趁亡灵节还没结束快发——11 月 1-2 日是浪潮最热闹的时候。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'How long is the video?', zh: '视频多长？' },
        a: {
          en: 'It depends on the sample you pick — 5, 10 or 15 seconds, matching the clip the sample came from. The duration locks to your sample when you select it.',
          zh: '取决于你选的样本——5、10 或 15 秒，与样本来源片段一致。选中样本后时长自动锁定。',
        },
      },
      {
        q: { en: 'Does it come with the sound?', zh: '带声音吗？' },
        a: {
          en: 'The render keeps the sample\'s original sound — "Adiós señora bonita" from The Book of Life. If your download is silent, add the track from the TikTok library when you post.',
          zh: '渲染保留样本原声——《生命之书》的《Adiós señora bonita》。如果下载的文件没声音，发布时从 TikTok 曲库添加。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina tiktok',
    slug: 'sasha-la-catrina-tiktok',
    title: {
      en: 'Sasha La Catrina on TikTok – Hashtags, Sound and Posting Guide | ViralReel',
      zh: 'TikTok 上的 Sasha La Catrina——标签、原声与发布指南 | ViralReel',
    },
    description: {
      en: 'How to post a Sasha La Catrina video on TikTok: #fairytalecatrina #lacatrina #sashalacatrina, the Adiós señora bonita sound, the AI label, and the Día de Muertos timing that makes the wave peak on November 1-2.',
      zh: 'Sasha La Catrina 视频怎么发 TikTok：#fairytalecatrina #lacatrina #sashalacatrina、《Adiós señora bonita》原声、AI 标注，以及让浪潮在 11 月 1-2 日冲顶的亡灵节时点。',
    },
    h1: { en: 'Sasha La Catrina on TikTok', zh: 'TikTok 上的 Sasha La Catrina' },
    lead: {
      en: 'The posting half of the trend: the tags that file your clip under the wave, the sound it rides, and the two days that matter most.',
      zh: '趋势的发布半场：把你的视频归进浪潮的标签、它骑的那段原声，以及最重要的两天。',
    },
    guideTitle: {
      en: 'Posting a Catrina AI video the right way',
      zh: '正确发布一条 Catrina AI 视频',
    },
    body: {
      en: [
        'The wave travels under three tags: #fairytalecatrina (the format), #lacatrina (the holiday) and #sashalacatrina (the CapCut template name the Spanish side uses). The sound is "Adiós señora bonita" from The Book of Life — Đan Thy\'s second video put the line on the reveal and passed 31M plays, and every copy since rides it.',
        'Timing is the trend\'s hidden ingredient: it climbs into its peak on Día de Muertos, November 1-2, when the whole feed is ofrendas and marigolds, and it falls away right after. #fairytalecatrina was taking about 72 new posts a day at the peak, with the template used 83 times a day.',
        `ViralReel does not host TikToks and is not affiliated with TikTok or the original creators. ${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        '浪潮在三个标签下传播：#fairytalecatrina（格式）、#lacatrina（节日）和 #sashalacatrina（西语区对 CapCut 模板的叫法）。原声是《生命之书》的《Adiós señora bonita》——Đan Thy 的第二条视频把这句词配在变身里拿下 3100 万播放，之后的二创都骑着它。',
        '时点是趋势的隐藏配方：它在 11 月 1-2 日亡灵节冲上峰值——整个信息流都是祭坛和万寿菊——节后立刻退潮。峰值时 #fairytalecatrina 每天新增约 72 条帖子，模板每天被使用 83 次。',
        `ViralReel 不托管 TikTok，与 TikTok 和原作者均无关联。${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Which hashtags should I use?', zh: '该用哪些标签？' },
        a: {
          en: '#fairytalecatrina, #lacatrina and #sashalacatrina together — the format tag, the holiday tag, and the template name the Spanish side searches.',
          zh: '#fairytalecatrina、#lacatrina 和 #sashalacatrina 一起用——格式标签、节日标签，以及西语区会搜索的模板名。',
        },
      },
      {
        q: { en: 'When should I post?', zh: '什么时候发？' },
        a: {
          en: 'Now — the wave peaks on Día de Muertos (November 1-2) and drops right after the holiday. Posts land hardest while the feed is full of marigolds.',
          zh: '现在就发——浪潮在亡灵节（11 月 1-2 日）冲顶，节后立刻回落。信息流满是万寿菊的时候，帖子落点最狠。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina generator',
    slug: 'sasha-la-catrina-generator',
    title: {
      en: 'Sasha La Catrina Generator – One Photo, Seven Reveals | ViralReel',
      zh: 'Sasha La Catrina 生成器——一张照片，七个变身 | ViralReel',
    },
    description: {
      en: 'The Sasha La Catrina generator on ViralReel: pick a reveal from the sample list, upload one photo, and the model re-renders the whole person under the sugar-skull paint. 5-15 seconds per sample, sound kept, no watermark on paid exports.',
      zh: 'ViralReel 的 Sasha La Catrina 生成器：在样本列表选一个变身，上传一张照片，模型在糖骷髅妆下重新生成整个人。每个样本 5-15 秒，保留原声，付费导出无水印。',
    },
    h1: { en: 'Sasha La Catrina generator', zh: 'Sasha La Catrina 生成器' },
    lead: {
      en: 'The generator puts the sample list beside the preview: pick the reveal, watch it play, upload one photo, generate.',
      zh: '生成器把样本列表放在预览旁边：选变身、看预览、传一张照片、点生成。',
    },
    guideTitle: {
      en: 'How the generator works',
      zh: '生成器是怎么工作的',
    },
    body: {
      en: [
        `The generator at ${EN_TEMPLATE} works differently from a CapCut template: instead of pasting a face onto a fixed clip, it re-renders the whole person from your photo inside the sample\'s scene — the face under the paint stays yours, the gown, the candles and the petals are generated around it, and the clip\'s own length and sound are kept.`,
        `${SLOTS_EN} ${SAMPLES_EN}`,
        'Generation usually takes a few minutes; finished clips land in your task history, and a failed render is refunded automatically. Paid exports carry no ViralReel watermark.',
      ],
      zh: [
        `ViralReel（ ${ZH_TEMPLATE} ）的生成器和 CapCut 模板的思路不同：它不是把脸贴到固定片段上，而是用你的照片在样本场景里重新生成整个人——妆面下的脸还是你，裙装、蜡烛和花瓣围绕生成，片段自带的时长和原声保留。`,
        `${SLOTS_ZH} ${SAMPLES_ZH}`,
        '生成通常需要几分钟；成片进入你的任务历史，失败自动退积分。付费导出没有 ViralReel 水印。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need an app?', zh: '需要装 App 吗？' },
        a: {
          en: 'No — it runs in the browser. Upload one photo, pick a sample, generate, download the MP4.',
          zh: '不需要——浏览器里就能跑。传一张照片、选一个样本、生成、下载 MP4。',
        },
      },
      {
        q: { en: 'What photo works best?', zh: '什么样的照片效果最好？' },
        a: {
          en: 'A clear front-facing photo, face unobstructed, hands away from the face, even light. Waist-up if you want the full gown. For pets: whole head, markings visible.',
          zh: '清晰的正面照，脸无遮挡、手别挡脸、光线均匀。想出全裙装就半身。宠物：头部完整、花纹可见。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina meme',
    slug: 'sasha-la-catrina-meme',
    title: {
      en: 'Sasha La Catrina Meme, Explained – Origin, Timeline and Rules | ViralReel',
      zh: 'Sasha La Catrina 梗详解——起源、时间线与规则 | ViralReel',
    },
    description: {
      en: 'The Sasha La Catrina meme explained: Đan Thy\'s 40.6M flower toss, the CapCut template that made it one photo long, the hundred-year history of La Catrina herself, and the trends it gets mistaken for.',
      zh: 'Sasha La Catrina 梗详解：Đan Thy 的 4060 万播放撒花变身、让它一张照片就能玩的 CapCut 模板、La Catrina 本尊的一百年历史，以及容易被搞混的其他趋势。',
    },
    h1: { en: 'Sasha La Catrina meme', zh: 'Sasha La Catrina 梗' },
    lead: {
      en: 'A hundred-year-old skeleton, a 2026 flower toss, and one photo — the whole meme in three sentences.',
      zh: '一百岁的骷髅、2026 年的一次撒花、一张照片——三句话讲完整个梗。',
    },
    guideTitle: {
      en: 'The meme from the top',
      zh: '从头讲这个梗',
    },
    body: {
      en: [
        'The meme is a costume swap with a hundred-year-old costume. La Catrina started as José Guadalupe Posada\'s etching of about 1910 — la calavera garbancera, a skeleton in a plumed European hat mocking Mexicans who dressed European and hid their indigenous roots. Diego Rivera gave her the full gown and the name in his 1947 Alameda Park mural, and Día de Muertos (November 1-2) made her the holiday\'s face. The fairytale end — the glowing gown, the flowered hat, the candle-lit land of the remembered — comes from the 2014 film The Book of Life.',
        'The 2026 wave: on 24 September the first traveling Catrina AI clip (an elegant reveal at an ofrenda) took 216.6K plays. On 20 October Đan Thy threw a flower across her bedroom and came back as Catrina — 40.6M plays, 7M likes. On 25 October her "adios SHASHA" follow-up put the film line "Adiós señora bonita" on the reveal and passed 31M. On 26 October the CapCut template named Sasha La Catrina turned the reveal into one photo. On 27 October pets joined — a kitten in lace passed 453K. On 1 November, Día de Muertos, the wave hit its peak.',
        'Do not confuse it with: the Catrina makeup trend (hours of real face paint and tutorials — the offline half of the same look), the Day of the Dead pet memorial (a pet that has passed coming back through the marigold gate — a memorial, not a costume), and the Halloween transition trend (a costume reveal filmed twice, ending on whatever the clip ends on). The AI Catrina wave is specifically the one-photo reveal of the Book of Life look.',
      ],
      zh: [
        '这个梗是一场「百年戏服的换装」。La Catrina 始于 José Guadalupe Posada 约 1910 年的版画——la calavera garbancera，一个戴欧式羽帽的骷髅，讽刺那些穿欧式服装、掩盖原住民根基的墨西哥人。Diego Rivera 在 1947 年的阿拉梅达公园壁画里给了她完整的裙装和这个名字，亡灵节（11 月 1-2 日）让她成为节日的面孔。童话化的那一段——发光的裙装、花冠、烛光中的回忆之地——来自 2014 年电影《生命之书》。',
        '2026 年这波：9 月 24 日，第一条走红的 Catrina AI 片（祭坛前的优雅变身）拿下 21.66 万播放。10 月 20 日，Đan Thy 把一朵花扔过卧室，回来时已是卡特里娜——4060 万播放、700 万点赞。10 月 25 日她的续作「adios SHASHA」把电影台词「Adiós señora bonita」配进变身，破 3100 万。10 月 26 日，名为 Sasha La Catrina 的 CapCut 模板把变身变成一张照片的事。10 月 27 日宠物入场——蕾丝裙小猫破 45.3 万。11 月 1 日亡灵节，浪潮登顶。',
        '别和这些搞混：Catrina 妆容趋势（几小时的真实化妆和教程——同一造型的线下半场）、亡灵节宠物纪念（去世的宠物穿过万寿菊之门回来——那是纪念不是换装）、万圣节变装转场（拍两遍的服装变身，结尾落在什么服装算什么）。AI 卡特里娜浪潮特指《生命之书》造型的单照片变身。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Why is she called Sasha?', zh: '为什么叫 Sasha？' },
        a: {
          en: '"Sasha" is the name the Spanish side of TikTok gave the Book of Life Catrina in this trend — the caption runs "adiós Sasha, adiós señora bonita", and the CapCut template took the name. It is an affectionate nickname for La Catrina, not a new character.',
          zh: '「Sasha」是西语区 TikTok 在这条趋势里给《生命之书》卡特里娜起的爱称——文案写的是「adiós Sasha, adiós señora bonita」，CapCut 模板也用了这个名字。它是对 La Catrina 的昵称，不是新角色。',
        },
      },
      {
        q: { en: 'Who made the original flower toss?', zh: '原版撒花是谁做的？' },
        a: {
          en: 'Đan Thy (@thybui.__), a Vietnamese creator with 13M+ followers known for transformation videos. Her flower toss on 20 October 2026 passed 40.6M plays, and every copy credits her.',
          zh: 'Đan Thy（@thybui.__），越南创作者，1300 万+ 粉丝，以变装视频闻名。她 2026 年 10 月 20 日的撒花变身破 4060 万播放，每条二创都在致谢她。',
        },
      },
    ],
  },
  ...SASHA_LA_CATRINA_INTENT_TAILS,
];

export function getSashaLaCatrinaLongTail(slug: string): SashaLaCatrinaLongTailEntry | undefined {
  return SASHA_LA_CATRINA_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveSashaLaCatrinaLongTailSteps(entry: SashaLaCatrinaLongTailEntry): readonly SashaLaCatrinaHowToStep[] {
  return entry.steps === 'shared' ? SASHA_LA_CATRINA_HOW_TO_STEPS : entry.steps;
}

export function buildSashaLaCatrinaLongTailFaq(
  entry: SashaLaCatrinaLongTailEntry,
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  void ctx;
  return entry.faq.map((item) => [item.q[zh ? 'zh' : 'en'], item.a[zh ? 'zh' : 'en']]);
}

export function sashaLaCatrinaLinkGroups(zh: boolean) {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: SASHA_LA_CATRINA_TEMPLATE_PATH, label: zh ? 'Sasha La Catrina AI 模板' : 'Sasha La Catrina AI template' },
        { href: '/sasha-la-catrina-ai', label: 'Sasha La Catrina AI' },
        { href: '/sasha-la-catrina-video', label: zh ? 'Sasha La Catrina 视频' : 'Sasha La Catrina video' },
        { href: '/sasha-la-catrina-template', label: zh ? '七个变身样本' : 'Seven reveals' },
        { href: '/sasha-la-catrina-generator', label: zh ? '生成器' : 'Generator' },
        { href: '/catrina-ai', label: 'Catrina AI' },
        { href: '/catrina-ai-filter', label: zh ? 'Catrina AI 滤镜' : 'Catrina AI filter' },
        { href: '/how-to-make-catrina-ai', label: zh ? '图文教程' : 'Step-by-step how-to' },
        { href: '/pricing', label: zh ? '定价与积分' : 'Pricing and credits' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗与背景' : 'Meme and background',
      links: [
        { href: '/sasha-la-catrina-meme', label: zh ? '梗详解' : 'The meme, explained' },
        { href: '/sasha-la-catrina-tiktok', label: zh ? 'TikTok 发布指南' : 'TikTok posting guide' },
        { href: '/sasha-la-catrina-song', label: zh ? '原声与含义' : 'The song and meaning' },
        { href: '/la-catrina-history', label: zh ? 'La Catrina 百年史' : 'La Catrina history' },
        { href: '/catrina-makeup-vs-ai', label: zh ? '真妆 vs AI' : 'Makeup vs AI' },
        { href: '/catrina-day-of-the-dead-pet', label: zh ? '宠物版与纪念版' : 'Pet & memorial versions' },
      ],
    },
    {
      title: zh ? '其他趋势' : 'Other trends',
      links: [
        { href: '/alors-on-danse-ai-template', label: 'Alors On Danse' },
        { href: '/nostalgia-ai-template', label: 'NostalgIA CapCut' },
        { href: '/wassup-in-a-minute-ai-template', label: 'Wassup in a Minute' },
        { href: '/tiny-desk-outstanding-ai-template', label: 'Tiny Desk Outstanding' },
        { href: '/bby-wow-ai-dance-template', label: 'Bby Wow' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: '/blog/what-is-sasha-la-catrina', label: zh ? 'Sasha La Catrina 是什么' : 'What Sasha La Catrina is' },
        { href: '/blog/how-to-make-catrina-ai-video', label: zh ? '如何制作 Catrina AI 视频' : 'How to make a Catrina AI video' },
        { href: '/blog/sasha-la-catrina-song-and-meaning', label: zh ? '原声与 La Catrina 的故事' : 'The song and La Catrina\'s story' },
        { href: '/blog/october-2026-viral-ai-meme-videos', label: zh ? '2026 年 10 月梗视频盘点' : 'October 2026 meme roundup' },
      ],
    },
  ];
}

export const SASHA_LA_CATRINA_LONG_TAIL_ROUTES = SASHA_LA_CATRINA_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
