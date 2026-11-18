import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { GIVE_IT_ALL_HOW_TO_STEPS, type GiveItAllHowToStep } from './steps';

/**
 * Long-tail landings for the Give It All AI template.
 *
 * To add another keyword: append an entry here. The sitemap reads
 * GIVE_IT_ALL_LONG_TAIL_ROUTES. Public URLs are served by the single
 * `(home)/[slug]` dispatcher — do not add a per-slug page.tsx.
 * Do not reuse the main `give-it-all-ai-template` slug.
 */

export const GIVE_IT_ALL_TEMPLATE_PATH = '/give-it-all-ai-template';

export const GIVE_IT_ALL_POSTS = {
  howTo: '/blog/how-to-make-give-it-all-ai-video',
  explained: '/blog/what-is-give-it-all-ai-trend',
} as const;

const PRODUCT = { en: 'Give It All AI', zh: 'Give It All AI' };

const EN_TEMPLATE = 'https://www.viralreel.app/give-it-all-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/give-it-all-ai-template';
const EN_EXPLAINED = 'https://www.viralreel.app/blog/what-is-give-it-all-ai-trend';
const ZH_EXPLAINED = 'https://www.viralreel.app/zh/blog/what-is-give-it-all-ai-trend';
const EN_HOWTO = 'https://www.viralreel.app/blog/how-to-make-give-it-all-ai-video';
const ZH_HOWTO = 'https://www.viralreel.app/zh/blog/how-to-make-give-it-all-ai-video';

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
  steps: 'shared' | readonly GiveItAllHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const PHOTO_EN =
  'One clear photo is the whole input: front-facing, chest up or full length, face well lit, no sunglasses or hands covering the face. Your face, hair and outfit come from the photo — the rapper\'s grey cap, denim jacket and iced chain stay his. Adults only: one person per photo, never a child, no celebrities or public figures, and no screenshots of the original performance.';
const PHOTO_ZH =
  '一张清晰照片就是全部输入：正脸、胸口以上或全身、光线好、不戴墨镜、没有手遮脸。你的脸、发型和衣服来自照片——说唱歌手的灰帽、丹宁夹克和冰链是他的。仅限成年人：一张照片一个人，不要用孩子的照片，不要用名人或公众人物，也不要用原始演出的截图。';

const CASTS_EN =
  'The seven casts are The Original, White Tee, Blonde in Pink, Golden Cat (the pet version), Leopard Jacket, Maroon Jacket, and The Real Performance.';
const CASTS_ZH =
  '七套阵容是原版场景复刻、白 T 恤、金发粉衫、金毛猫（宠物版）、豹纹外套、酒红夹克和真实演出原片。';

export const GIVE_IT_ALL_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'bigxthaplug give it all ai',
    slug: 'bigxthaplug-give-it-all-ai',
    title: {
      en: 'BigXthaPlug Give It All AI – Rap His From The Block Verse',
      zh: 'BigXthaPlug Give It All AI：唱他的 From The Block 主歌',
    },
    description: {
      en: 'bigxthaplug give it all ai: one photo puts you at the hanging mic of his From The Block performance — packed cinema lobby, 15-second 9:16 MP4, in the browser. Not affiliated with BigXthaPlug or 4 Shooters Only.',
      zh: 'bigxthaplug give it all ai：一张照片把你放到他 From The Block 演出的挂麦前——爆满影院大厅，15 秒 9:16 MP4，浏览器直出。与 BigXthaPlug、4 Shooters Only 无关联。',
    },
    h1: { en: 'BigXthaPlug Give It All AI', zh: 'BigXthaPlug Give It All AI' },
    lead: {
      en: 'BigXthaPlug Give It All AI is the browser way to join the trend his From The Block performance started: one photo in, you at the hanging mic, 15 seconds out.',
      zh: 'BigXthaPlug Give It All AI 是加入这个由 From The Block 演出带起的趋势的浏览器方式：一张照片进，你站在挂麦前，15 秒出片。',
    },
    guideTitle: {
      en: 'The performance, the rapper, and what stays his',
      zh: '演出、歌手，以及哪些东西始终属于他',
    },
    body: {
      en: [
        'BigXthaPlug — the Dallas rapper, also spelled BigXtheplug or Big X the Plug — released "Give It All" on 30 October 2026 on his album "Better Over Time". Three days later the From The Block performance went up on the 4 Shooters Only YouTube channel: one take at a hanging vintage chrome microphone in a packed cinema lobby under orange showtime boards, his hype man beside him and the crowd pressed in close. Per Jump on the Trend\'s 15 November check it passed a million YouTube views within twelve days.',
        `The BigXthaPlug Give It All AI version swaps exactly one thing: the performer at the mic. His grey cap, teal denim jacket, iced-out chain, rings and watch stay his — your photo supplies your own face, hair and outfit. Make it at ${EN_TEMPLATE}. ${CASTS_EN}`,
        `${PHOTO_EN} The length is fixed at 15 seconds — the same verse as the performance — and the ratio stays on 9:16. The song carries explicit lyrics, so keep that in mind before you post it to the family chat. The trend facts and the timeline are in ${EN_EXPLAINED}.`,
      ],
      zh: [
        'BigXthaPlug——达拉斯说唱歌手，也写作 BigXtheplug 或 Big X the Plug——2026 年 10 月 30 日在专辑《Better Over Time》里发行了《Give It All》。三天后，From The Block 演出上线 4 Shooters Only YouTube 频道：橙色排片灯牌下、爆满影院大厅里挂式复古镀铬麦克风前的一条长镜头，身边是和声，身后是挤在一起的人群。据 Jump on the Trend 11 月 15 日的统计，12 天内 YouTube 播放破百万。',
        `BigXthaPlug Give It All AI 版只换一件事：麦克风前的表演者。他的灰帽、青绿丹宁夹克、冰链、戒指和手表都留在身上——你的照片提供你自己的脸、发型和穿搭。制作入口：${ZH_TEMPLATE} 。${CASTS_ZH}`,
        `${PHOTO_ZH} 时长固定 15 秒——和演出同一段主歌——画幅保持 9:16。歌曲含露骨歌词，发到家庭群之前想清楚。趋势事实和时间线见 ${ZH_EXPLAINED} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who is BigXthaPlug?', zh: 'BigXthaPlug 是谁？' },
        a: {
          en: 'A Dallas rapper. He released "Give It All" on 30 October 2026 on his album "Better Over Time", and his From The Block performance of it — one take at a hanging microphone in a packed cinema lobby — started this trend. He is also spelled BigXtheplug or Big X the Plug.',
          zh: '一位达拉斯说唱歌手。2026 年 10 月 30 日在专辑《Better Over Time》里发行《Give It All》，他的 From The Block 演出——爆满影院大厅挂麦前的一条长镜头——带起了这个趋势。他的名字也写作 BigXtheplug 或 Big X the Plug。',
        },
      },
      {
        q: { en: 'Do I get his outfit in my video?', zh: '我的视频里会有他的穿搭吗？' },
        a: {
          en: 'No. His cap, jacket and chain stay his; your outfit comes from your photo. If you want a chain at the mic, wear one in the photo.',
          zh: '不会。他的帽子、夹克和链子是他的；你的穿搭来自你的照片。想戴着链子站在麦克风前，就戴着链子拍照。',
        },
      },
    ],
  },
  {
    keyword: 'give it all ai generator',
    slug: 'give-it-all-ai-generator',
    title: {
      en: 'Give It All AI Generator – One Photo, 15 Seconds, No Prompt',
      zh: 'Give It All AI 生成器：一张照片，15 秒，无需提示词',
    },
    description: {
      en: 'give it all ai generator: upload one photo and generate the at-the-mic clip in the browser — seven casts, fixed 15-second 9:16 export, credit cost shown before you start, credits back if a render fails.',
      zh: 'give it all ai 生成器：上传一张照片，浏览器里生成挂麦说唱片段——七套阵容，固定 15 秒 9:16 导出，开始前显示积分，失败退还。',
    },
    h1: { en: 'Give It All AI generator', zh: 'Give It All AI 生成器' },
    lead: {
      en: 'The Give It All AI generator needs exactly one input — a photo — because the lobby, the mic, the crowd and the verse are all built in.',
      zh: 'Give It All AI 生成器只需要一个输入——一张照片——因为大厅、挂麦、人群和主歌全都内置。',
    },
    guideTitle: {
      en: 'What the generator does, and what it costs',
      zh: '生成器做什么，要花多少',
    },
    body: {
      en: [
        `There is no prompt to write and no template project to hunt down: the generator takes your photo, places the person in it at the hanging vintage microphone of a packed cinema lobby, and renders the performance with the same cuts and timing as the trend. Open it at ${EN_TEMPLATE}. ${CASTS_EN}`,
        `${PHOTO_EN} The length is fixed at 15 seconds, the ratio opens on 9:16, and the exact credit cost shows in the generator before you start. Paid exports are watermark-free, and failed jobs return their credits. The model list for this family comes from the ViralReel admin panel, and the generator shows which model is selected.`,
        'Nothing to install: everything runs in the browser, and the finished MP4 lands in your history. The full steps are in ' + EN_HOWTO + '.',
      ],
      zh: [
        `不用写提示词，也不用找模板工程：生成器拿到你的照片，把它里面的人放到爆满影院大厅的挂式复古麦克风前，按趋势同样的剪辑和节奏渲染演出。入口：${ZH_TEMPLATE} 。${CASTS_ZH}`,
        `${PHOTO_ZH} 时长固定 15 秒，画幅默认 9:16，开始前生成器会显示确切积分。付费导出无水印，失败任务退还积分。这个系列的模型清单来自 ViralReel 后台配置，生成器会显示当前选中的模型。`,
        '无需安装：一切在浏览器里完成，成片 MP4 进入你的历史记录。完整步骤见 ' + ZH_HOWTO + ' 。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a free preview?', zh: '有免费预览吗？' },
        a: {
          en: 'No. ViralReel does not offer free credits. Every render is paid, and the generator shows the exact cost before you start, so you always see the price before it charges.',
          zh: '没有。ViralReel 不提供免费积分。每次渲染都计费，开始前生成器会显示确切费用——扣费前你总能看到价格。',
        },
      },
      {
        q: { en: 'How long does the render take?', zh: '渲染要多久？' },
        a: {
          en: 'Usually a few minutes for the 15-second clip. When it is done the MP4 lands in your history; if a job fails, its credits go back to your balance.',
          zh: '15 秒的片段通常几分钟。完成后 MP4 进入历史记录；任务失败时积分退回余额。',
        },
      },
    ],
  },
  {
    keyword: 'give it all to me ai',
    slug: 'give-it-all-to-me-ai',
    title: {
      en: 'Give It All To Me AI – Same Trend, Same Hanging Mic',
      zh: 'Give It All To Me AI：同一个趋势，同一支挂麦',
    },
    description: {
      en: 'give it all to me ai is the name CapCut posts gave the BigXthaPlug Give It All trend from 15 November 2026 — one photo, 15-second 9:16 MP4 at the hanging mic, no app. Not affiliated with CapCut or BigXthaPlug.',
      zh: 'give it all to me ai 是 2026 年 11 月 15 日起 CapCut 帖子给 BigXthaPlug Give It All 趋势起的名字——一张照片，15 秒 9:16 挂麦 MP4，无需 App。与 CapCut、BigXthaPlug 无关联。',
    },
    h1: { en: 'Give It All To Me AI', zh: 'Give It All To Me AI' },
    lead: {
      en: '"Give It All To Me AI" is what CapCut posts started calling the BigXthaPlug Give It All trend from 15 November 2026 — same hanging mic, same verse, one photo.',
      zh: '「Give It All To Me AI」是 2026 年 11 月 15 日起 CapCut 帖子对 BigXthaPlug Give It All 趋势的叫法——同一支挂麦、同一段主歌、一张照片。',
    },
    guideTitle: {
      en: 'Why the trend has two names (and both are this template)',
      zh: '为什么这个趋势有两个名字（而且都是这个模板）',
    },
    body: {
      en: [
        'The hook of BigXthaPlug\'s "Give It All" repeats "give it all to me", and that line is what people quote in captions — so from 15 November 2026, CapCut template posts started labelling the trend "Give It All To Me AI", while the AI video sites had been listing it as "BigXthaPlug Give It All AI" since 10–14 November. They are the same trend: the From The Block performance, the hanging vintage microphone, the packed cinema lobby.',
        `On ViralReel both names point to one template: ${EN_TEMPLATE}. ${CASTS_EN} Pick the clip closest to your photo, upload it, and the AI puts that person at the mic for 15 seconds in 9:16.`,
        `${PHOTO_EN} You may also see "Big X From The Block" or "Big X Give It All rap" — again, the same template. Searchers sometimes confuse the hook with requests for the song itself; ViralReel does not license the song, so add it from the TikTok, Reels, or Shorts library when you post (it carries explicit lyrics).`,
      ],
      zh: [
        'BigXthaPlug《Give It All》的 hook 反复唱着「give it all to me」，这句就是大家在配文里引用的词——所以从 2026 年 11 月 15 日起，CapCut 模板帖子开始把这个趋势标成「Give It All To Me AI」，而 AI 视频站从 11 月 10–14 日起就一直用「BigXthaPlug Give It All AI」。它们是同一个趋势：From The Block 演出、挂式复古麦克风、爆满的影院大厅。',
        `在 ViralReel，两个名字指向同一个模板：${ZH_TEMPLATE} 。${CASTS_ZH} 选一条和你的照片最像的，上传，AI 让那个人在麦克风前站 15 秒，9:16。`,
        `${PHOTO_ZH} 你还会看到「Big X From The Block」或「Big X Give It All rap」——同样是这个模板。有人会把这句 hook 误解成找歌；ViralReel 不授权歌曲，发布时请在 TikTok、Reels 或 Shorts 的曲库里加（含露骨歌词）。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Are "Give It All AI" and "Give It All To Me AI" different trends?', zh: '「Give It All AI」和「Give It All To Me AI」是两个趋势吗？' },
        a: {
          en: 'No. Same performance, same hanging mic, same verse. "Give It All To Me AI" is the name CapCut posts adopted from 15 November 2026 because the hook repeats that line.',
          zh: '不是。同一场演出、同一支挂麦、同一段主歌。「Give It All To Me AI」是 CapCut 帖子从 2026 年 11 月 15 日起采用的叫法，因为 hook 里反复唱这句。',
        },
      },
      {
        q: { en: 'Is "Give It All To Me" a real song title?', zh: '《Give It All To Me》是真的歌名吗？' },
        a: {
          en: 'No. The song is "Give It All" by BigXthaPlug, from the album "Better Over Time" (30 October 2026). "Give it all to me" is a line inside it.',
          zh: '不是。歌是 BigXthaPlug 的《Give It All》，出自专辑《Better Over Time》（2026 年 10 月 30 日）。「give it all to me」是歌里的一句词。',
        },
      },
    ],
  },
];

export function getGiveItAllLongTail(slug: string) {
  return GIVE_IT_ALL_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly GiveItAllHowToStep[] {
  return entry.steps === 'shared' ? GIVE_IT_ALL_HOW_TO_STEPS : entry.steps;
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
          `在 ViralReel 制作：${template} 。上传一张清晰照片，七套阵容任选，浏览器里生成 15 秒 9:16 MP4。ViralReel 不授权歌曲。`,
        ],
        [
          '照片有什么要求？',
          '一张照片一个成年人，正脸清晰、光线好、胸口以上或全身，不戴墨镜、没有手遮脸。只上传你自己的或经对方同意的成年人照片；不要用孩子的照片、名人或原始演出的截图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是官方或合作页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 BigXthaPlug、4 Shooters Only、TikTok、CapCut 或任何趋势原作者没有隶属、官方或合作关系。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload one clear photo, pick one of seven casts, and generate a 15-second 9:16 MP4 in the browser. ViralReel does not license the song.`,
        ],
        [
          'What photo works best?',
          'One adult per photo, face clearly visible, chest up or full length, well lit, no sunglasses or hands covering the face. Upload only photos of yourself or adults who agreed; never a child, no celebrities, and no screenshots of the original performance.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an official or partner page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with BigXthaPlug, 4 Shooters Only, TikTok, CapCut, or any original trend creator.',
        ],
      ];
  return [...own, ...shared];
}

export interface GiveItAllLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function giveItAllLinkGroups(zh: boolean): GiveItAllLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: GIVE_IT_ALL_TEMPLATE_PATH, label: zh ? 'Give It All AI 模板' : 'Give It All AI template' },
        { href: '/give-it-all-ai-generator', label: zh ? '生成器（无提示词）' : 'Generator (no prompt)' },
        { href: '/bigxthaplug-give-it-all-ai', label: zh ? 'BigXthaPlug 版详解' : 'The BigXthaPlug version' },
        { href: '/give-it-all-to-me-ai', label: zh ? '「Give It All To Me」叫法' : 'The "Give It All To Me" naming' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: GIVE_IT_ALL_POSTS.howTo, label: zh ? '如何制作 Give It All AI 视频' : 'How to make a Give It All AI video' },
        { href: GIVE_IT_ALL_POSTS.explained, label: zh ? '趋势是什么、从哪来' : 'What the trend is and where it came from' },
        { href: '/tiny-desk-outstanding-ai-template', label: zh ? 'Tiny Desk Outstanding AI 模板' : 'Tiny Desk Outstanding AI template' },
        { href: '/dance-with-santa-ai-template', label: zh ? 'Dance with Santa AI 模板' : 'Dance with Santa AI template' },
      ],
    },
  ];
}

export const GIVE_IT_ALL_LONG_TAIL_ROUTES = GIVE_IT_ALL_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
