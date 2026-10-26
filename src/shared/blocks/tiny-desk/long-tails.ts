import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

import { TINY_DESK_HOW_TO_STEPS, type TinyDeskHowToStep } from './steps';

/**
 * Long-tail landings for the Tiny Desk Outstanding template.
 *
 * To add another keyword: append an entry here (the sitemap reads
 * TINY_DESK_LONG_TAIL_ROUTES) and add a thin route at
 * src/app/[locale]/(home)/<slug>/page.tsx that renders LongTailRoute.
 * Do not reuse the main `tiny-desk-outstanding-ai-template` slug.
 */

export const TINY_DESK_TEMPLATE_PATH = '/tiny-desk-outstanding-ai-template';

export const TINY_DESK_POSTS = {
  howTo: '/blog/how-to-make-tiny-desk-outstanding-ai-video',
  explainer: '/blog/all-loss-tiny-desk-and-outstanding',
  roundup: '/blog/october-2026-viral-ai-meme-videos',
  capcut: '/blog/viralreel-vs-capcut-tiny-desk-outstanding',
  photoTips: '/blog/tiny-desk-outstanding-photo-tips',
} as const;

const PRODUCT = { en: 'Tiny Desk Outstanding', zh: 'Tiny Desk Outstanding' };

const EN_TEMPLATE = 'https://www.viralreel.app/tiny-desk-outstanding-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/tiny-desk-outstanding-ai-template';
const EN_CAPCUT_POST = 'https://www.viralreel.app/blog/viralreel-vs-capcut-tiny-desk-outstanding';
const ZH_CAPCUT_POST = 'https://www.viralreel.app/zh/blog/viralreel-vs-capcut-tiny-desk-outstanding';
const EN_PHOTO_POST = 'https://www.viralreel.app/blog/tiny-desk-outstanding-photo-tips';
const ZH_PHOTO_POST = 'https://www.viralreel.app/zh/blog/tiny-desk-outstanding-photo-tips';
const EN_HOWTO = 'https://www.viralreel.app/blog/how-to-make-tiny-desk-outstanding-ai-video';
const ZH_HOWTO = 'https://www.viralreel.app/zh/blog/how-to-make-tiny-desk-outstanding-ai-video';

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
  steps: 'shared' | readonly TinyDeskHowToStep[];
  faq: LongTailFaqItem[];
}

const makeVideoSteps = 'shared' as const;

const SLOTS_EN =
  'The generator shows three slots labeled Center Lead, Left Role, and Right Role. Put the singer in Center Lead. Left Role and Right Role fill the band beside them, which is where the sax solo sits in the scene. The buttons are not labeled sax, and the render does not promise a specific photo is holding the saxophone.';
const SLOTS_ZH =
  '生成器有三个位置，按钮写的是中间主角、左边角色、右边角色。主唱放在中间主角。左边角色和右边角色填两边的乐队，萨克斯独奏就在这个场景里。按钮上没有“萨克斯”，成片也不保证某一张照片一定拿着萨克斯。';

export const TINY_DESK_LONG_TAILS: readonly LongTailEntry[] = [
  {
    keyword: 'tiny desk outstanding ai video',
    slug: 'tiny-desk-outstanding-ai-video',
    title: {
      en: 'Tiny Desk Outstanding AI Video – Make the MP4 on ViralReel',
      zh: 'Tiny Desk Outstanding AI 视频：在 ViralReel 制作 MP4',
    },
    description: {
      en: 'tiny desk outstanding ai video: ViralReel makes a fan-parody MP4 from your photos. Six Outstanding sets, three slots (Center Lead, Left Role, Right Role). Not NPR. Add the trend sound on TikTok, Reels, or Shorts.',
      zh: 'tiny desk outstanding ai video：ViralReel 用你的照片做粉丝向戏仿 MP4。六套阵容，三个位置（中间主角、左边角色、右边角色）。不是 NPR。热梗原声在 TikTok、Reels 或 Shorts 里另加。',
    },
    h1: { en: 'Tiny Desk Outstanding AI video', zh: 'Tiny Desk Outstanding AI 视频' },
    lead: {
      en: 'A Tiny Desk Outstanding AI video on ViralReel is a new MP4, not a download of the NPR concert or the TikTok that started the wave.',
      zh: 'ViralReel 上的 Tiny Desk Outstanding AI 视频是一条新的 MP4，不是 NPR 演唱会的下载，也不是带火这波的那条 TikTok。',
    },
    guideTitle: {
      en: 'How to make a Tiny Desk Outstanding AI video',
      zh: '如何制作 Tiny Desk Outstanding AI 视频',
    },
    body: {
      en: [
        'A tiny desk outstanding ai video search wants the file: the cramped office, the desk, the grin, the hand wave, and a band swapped in for the joke. The clip people mean recreates Charlie Wilson closing his NPR Tiny Desk concert with the Gap Band song “Outstanding.” ViralReel does not host that concert or the 18 October 2026 TikTok.',
        `Make the fan parody at ${EN_TEMPLATE}. Pick All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie. ${SLOTS_EN} Leave the ratio on 9:16 and read the credit cost before you generate.`,
        'The download is an MP4 of a new scene. ViralReel does not license “Outstanding” or NPR’s audio. Add the trend sound inside TikTok, Reels, or Shorts, and turn on the AI label. A CapCut template spread on 24 October 2026; this page is the browser path, with no CapCut project to hunt down and no prompt to write.',
      ],
      zh: [
        '搜 tiny desk outstanding ai video 要的是那个文件：狭小的办公室、桌子、咧嘴笑、挥手，以及被换掉的乐队。大家说的片子复刻的是 Charlie Wilson 用 Gap Band 的《Outstanding》为 NPR Tiny Desk 演唱会收尾。ViralReel 不托管那场演唱会，也不托管 2026 年 10 月 18 日那条 TikTok。',
        `粉丝向戏仿在 ${ZH_TEMPLATE} 。输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子或真身 Charlie 任选。${SLOTS_ZH} 画幅保持 9:16，生成前看清积分。`,
        '下载的是一条新场景的 MP4。ViralReel 不授权《Outstanding》，也不授权 NPR 的音频。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。2026 年 10 月 24 日 CapCut 模板传开过；这一页是浏览器路径，不用去找 CapCut 工程，也不用写提示词。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Tiny Desk Outstanding AI video the original clip?', zh: 'Tiny Desk Outstanding AI 视频是原片吗？' },
        a: {
          en: 'No. It is a new MP4 generated from your photos. ViralReel does not reupload the NPR Tiny Desk concert or the original TikTok.',
          zh: '不是。它是用你的照片新生成的 MP4。ViralReel 不转载 NPR Tiny Desk 演唱会，也不转载原始 TikTok。',
        },
      },
      {
        q: { en: 'What file do I download?', zh: '下载的是什么文件？' },
        a: {
          en: 'An MP4 of the fan parody. ViralReel does not export the original concert, a GIF, or a licensed Gap Band soundtrack.',
          zh: '粉丝向戏仿的 MP4。ViralReel 不导出原演唱会、GIF 或已获授权的 Gap Band 配乐。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding ai',
    slug: 'tiny-desk-outstanding-ai',
    title: {
      en: 'Tiny Desk Outstanding AI – Fan Parody on ViralReel',
      zh: 'Tiny Desk Outstanding AI：ViralReel 上的粉丝向戏仿',
    },
    description: {
      en: 'tiny desk outstanding ai: ViralReel turns your photos into the Outstanding desk parody. Not affiliated with NPR, Tiny Desk, or Charlie Wilson. Six sets. Add the trend sound on the platform.',
      zh: 'tiny desk outstanding ai：ViralReel 用你的照片做 Outstanding 桌子戏仿。与 NPR、Tiny Desk、Charlie Wilson 无关。六套阵容。热梗原声在平台上另加。',
    },
    h1: { en: 'Tiny Desk Outstanding AI', zh: 'Tiny Desk Outstanding AI' },
    lead: {
      en: 'Tiny Desk Outstanding AI on ViralReel is a fan parody from your photos. It is not the NPR concert and not an official Charlie Wilson video.',
      zh: 'ViralReel 上的 Tiny Desk Outstanding AI 是用你的照片做的粉丝向戏仿。它不是 NPR 演唱会，也不是 Charlie Wilson 的官方视频。',
    },
    guideTitle: {
      en: 'What Tiny Desk Outstanding AI is',
      zh: 'Tiny Desk Outstanding AI 是什么',
    },
    body: {
      en: [
        'Tiny Desk Outstanding AI is the October 2026 trend of swapping a new band into one fixed scene: Charlie Wilson at the NPR Tiny Desk, singing “Outstanding.” The office, the mugs, the grin, the hand wave, and the sax solo stay readable. Only the people change. That contrast — a celebration song, a week that did not earn it — is the joke.',
        `You do not write the office as a prompt. Open ${EN_TEMPLATE}, pick a set, and upload photos. ${SLOTS_EN} ViralReel (viralreel.app) is an independent template site. It is not affiliated with NPR, NPR Music, Tiny Desk Concerts, Charlie Wilson, or the Gap Band.`,
        'After the MP4 downloads, add the trend sound in TikTok, Reels, or Shorts and label the post as AI-generated. ViralReel does not license that recording.',
      ],
      zh: [
        'Tiny Desk Outstanding AI 是 2026 年 10 月的换乐队玩法：场景固定在 Charlie Wilson 的 NPR Tiny Desk，唱《Outstanding》。办公室、马克杯、咧嘴笑、挥手和萨克斯独奏都要一眼能认出来，变的只有人。反差就是笑点——庆祝之歌，配上一周并不配庆祝的成绩。',
        `你不用把办公室写成提示词。打开 ${ZH_TEMPLATE} ，选一套阵容，上传照片。${SLOTS_ZH} ViralReel（viralreel.app）是独立的模板站，与 NPR、NPR Music、Tiny Desk Concerts、Charlie Wilson 和 Gap Band 均无关联。`,
        'MP4 下载之后，在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI 生成。ViralReel 不授权那段录音。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The Tiny Desk Outstanding template already sets the office, the desk, and the band blocking. You pick a set and upload photos.',
          zh: '不需要。Tiny Desk Outstanding 模板已经定好了办公室、桌子和乐队站位。你选一套阵容然后上传照片。',
        },
      },
      {
        q: { en: 'Is this the real Tiny Desk concert?', zh: '这是真的 Tiny Desk 演唱会吗？' },
        a: {
          en: 'No. It is a fan parody. ViralReel is not connected to NPR, Tiny Desk Concerts, or Charlie Wilson.',
          zh: '不是。这是粉丝向戏仿。ViralReel 与 NPR、Tiny Desk Concerts 和 Charlie Wilson 都没有关系。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding meme',
    slug: 'tiny-desk-outstanding-meme',
    title: {
      en: 'Tiny Desk Outstanding Meme – The Desk Parody, Explained',
      zh: 'Tiny Desk Outstanding 梗：这张桌子上的戏仿',
    },
    description: {
      en: 'tiny desk outstanding meme: the fan parody that recasts Charlie Wilson’s Outstanding Tiny Desk. ViralReel makes a new clip from your photos and does not host the original meme file.',
      zh: 'tiny desk outstanding meme：把 Charlie Wilson 的 Outstanding Tiny Desk 换人重排的粉丝戏仿。ViralReel 用你的照片做新片子，不托管原始梗文件。',
    },
    h1: { en: 'Tiny Desk Outstanding meme', zh: 'Tiny Desk Outstanding 梗' },
    lead: {
      en: 'The Tiny Desk Outstanding meme is a fan parody of one Charlie Wilson performance. ViralReel makes a new version from your photos. It does not host the original meme.',
      zh: 'Tiny Desk Outstanding 梗是对 Charlie Wilson 一段演出的粉丝向戏仿。ViralReel 用你的照片做新版本。它不托管原始梗文件。',
    },
    guideTitle: {
      en: 'The meme, and the clip you can make',
      zh: '这个梗，以及你能做的片子',
    },
    body: {
      en: [
        'The meme is the mismatch. “Outstanding” is a pure celebration, and the funniest casts are the ones least entitled to celebrate: coaches the day after a loss, a roster mid-slump, a friend group after a bad weekend. The scene is fixed, so every remake is readable in a second.',
        'It took off on 18 October 2026, when @theburnerfromhe11 posted “College Football’s Week 8 All-Loss Tiny Desk Concert,” the day after five of the top seven ranked college teams lost on 17 October. Later sets put NFL sidelines and one basketball team behind the same desk. Sports TikTok already called the Charlie Wilson clip the washed anthem. The meme is that joke, one step louder.',
        `ViralReel does not sell the meme file. The fan-parody template is at ${EN_TEMPLATE}. ${SLOTS_EN} Do not upload the coaches, players, or Charlie Wilson. Use photos you have permission to use, then add the trend sound and the AI label on the platform.`,
      ],
      zh: [
        '梗在错位。《Outstanding》是纯粹的庆祝，最有笑点的阵容恰恰最没资格庆祝：昨天刚输球的教练、正处低谷的名单、周末刚崩盘的朋友团。场景是固定的，所以每条重拍一秒就能读懂。',
        '它在 2026 年 10 月 18 日爆开：@theburnerfromhe11 发布了「College Football’s Week 8 All-Loss Tiny Desk Concert」。前一天（10 月 17 日）排名前七的大学球队有五支同日输球。之后 NFL 场边和一支篮球队也站到了同一张桌子后面。体育 TikTok 更早把 Charlie Wilson 这段叫做 washed anthem（过气赞歌）。这个梗是那个笑话再大声一点。',
        `ViralReel 不出售梗文件。粉丝向戏仿模板在 ${ZH_TEMPLATE} 。${SLOTS_ZH} 不要上传教练、球员或 Charlie Wilson。只用你有权使用的照片，然后在平台上加热梗原声和 AI 标注。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the original Tiny Desk Outstanding meme?', zh: '能下载原始 Tiny Desk Outstanding 梗吗？' },
        a: {
          en: 'No. ViralReel does not host the TikTok, the NPR concert, or a GIF of either. It makes a new fan-parody MP4 from your photos.',
          zh: '不能。ViralReel 不托管那条 TikTok、NPR 演唱会，或两者的 GIF。它用你的照片做一条新的粉丝向戏仿 MP4。',
        },
      },
      {
        q: { en: 'Why is the meme funny?', zh: '这个梗为什么好笑？' },
        a: {
          en: 'The song celebrates, and the people behind the desk usually should not be celebrating. The office stays identical so the only variable is the band.',
          zh: '歌在庆祝，桌子后面的人通常不该庆祝。办公室保持一模一样，唯一的变量是乐队。',
        },
      },
    ],
  },
  {
    keyword: 'charlie wilson tiny desk ai',
    slug: 'charlie-wilson-tiny-desk-ai',
    title: {
      en: 'Charlie Wilson Tiny Desk AI – Fan Parody, Not the Concert',
      zh: 'Charlie Wilson Tiny Desk AI：粉丝戏仿，不是那场演唱会',
    },
    description: {
      en: 'charlie wilson tiny desk ai: ViralReel does not recreate Charlie Wilson and is not affiliated with him or NPR. The Outstanding template is a fan parody from your own photos.',
      zh: 'charlie wilson tiny desk ai：ViralReel 不会去生成 Charlie Wilson，也与他或 NPR 没有关系。Outstanding 模板是用你自己的照片做的粉丝戏仿。',
    },
    h1: { en: 'Charlie Wilson Tiny Desk AI', zh: 'Charlie Wilson Tiny Desk AI' },
    lead: {
      en: 'Charlie Wilson Tiny Desk AI searches point at his real NPR concert. ViralReel does not host that video and does not generate his face.',
      zh: '搜 Charlie Wilson Tiny Desk AI 指向的是他真实的 NPR 演唱会。ViralReel 不托管那个视频，也不会去生成他的脸。',
    },
    guideTitle: {
      en: 'His concert, and the parody you can make',
      zh: '他的演唱会，以及你能做的戏仿',
    },
    body: {
      en: [
        'Charlie Wilson, frontman of the Gap Band, closed his NPR Tiny Desk concert with “Outstanding.” NPR Music posted that concert on 5 June 2023. The real performance — blue beanie, gold shades, the band behind the cluttered desk — is on NPR Music’s channel. ViralReel is not affiliated with Charlie Wilson, NPR, NPR Music, or Tiny Desk Concerts.',
        'The AI trend borrows that framing. Uncle Charlie on the ViralReel template is a costume of the look (beanie, shades, patterned shirt), not a generator that builds Charlie Wilson’s face from his name. Do not upload his photo, a screenshot, or any celebrity.',
        `If you want your own fan parody of the format, use ${EN_TEMPLATE}. ${SLOTS_EN} ViralReel does not license “Outstanding.” Add the trend sound on TikTok, Reels, or Shorts.`,
      ],
      zh: [
        'Gap Band 主唱 Charlie Wilson 用《Outstanding》为他的 NPR Tiny Desk 演唱会收尾。NPR Music 于 2023 年 6 月 5 日发布那场演唱会。真实演出——蓝色毛线帽、金色墨镜、杂乱桌子后面的乐队——在 NPR Music 的频道上。ViralReel 与 Charlie Wilson、NPR、NPR Music 和 Tiny Desk Concerts 均无关联。',
        'AI 趋势借用的是这个构图。ViralReel 模板上的「真身 Charlie」是那套造型（毛线帽、墨镜、花衬衫），不是输入名字就能生成 Charlie Wilson 的脸。不要上传他的照片、截图或任何名人。',
        `如果你想做这个格式的粉丝戏仿，用 ${ZH_TEMPLATE} 。${SLOTS_ZH} ViralReel 不授权《Outstanding》。热梗原声请在 TikTok、Reels 或 Shorts 里另加。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Will ViralReel generate Charlie Wilson?', zh: 'ViralReel 会生成 Charlie Wilson 吗？' },
        a: {
          en: 'No. The generator uses the photos you upload. Do not upload Charlie Wilson, other celebrities, or screenshots of the NPR concert.',
          zh: '不会。生成器用的是你上传的照片。不要上传 Charlie Wilson、其他名人或 NPR 演唱会截图。',
        },
      },
      {
        q: { en: 'Is the Uncle Charlie set the original concert?', zh: '真身 Charlie 套装是原演唱会吗？' },
        a: {
          en: 'No. It is a fan-parody look inspired by the outfit in the concert. It is not NPR’s file and not an official Charlie Wilson video.',
          zh: '不是。它是借鉴演唱会造型的粉丝戏仿外观。不是 NPR 的文件，也不是 Charlie Wilson 的官方视频。',
        },
      },
    ],
  },
  {
    keyword: 'all loss tiny desk',
    slug: 'all-loss-tiny-desk',
    title: {
      en: 'All-Loss Tiny Desk – The Coaches Concert, and the Parody',
      zh: 'All-Loss Tiny Desk：教练演唱会，以及戏仿',
    },
    description: {
      en: 'all loss tiny desk: the 18 October 2026 coaches TikTok. ViralReel does not host that clip and does not generate those coaches. The All-Loss Coaches set is a fan-parody format for your own photos.',
      zh: 'all loss tiny desk：2026 年 10 月 18 日的教练 TikTok。ViralReel 不托管那条片子，也不会生成那些教练。输球教练团是给你自己照片用的粉丝戏仿格式。',
    },
    h1: { en: 'All-Loss Tiny Desk', zh: 'All-Loss Tiny Desk' },
    lead: {
      en: 'All-Loss Tiny Desk is the coaches TikTok from 18 October 2026. ViralReel does not host it. The template is a fan parody for photos you have permission to use.',
      zh: 'All-Loss Tiny Desk 是 2026 年 10 月 18 日那条教练 TikTok。ViralReel 不托管它。模板是给有权使用的照片做的粉丝戏仿。',
    },
    guideTitle: {
      en: 'The All-Loss concert, and what you can make',
      zh: '输球演唱会，以及你能做的版本',
    },
    body: {
      en: [
        '“College Football’s Week 8 All-Loss Tiny Desk Concert” is the TikTok @theburnerfromhe11 posted on 18 October 2026, the day after five of the top seven ranked teams lost on 17 October — reported as a first for the regular season. The 19-second AI clip put Alabama’s Kalen DeBoer on lead, Texas’ Steve Sarkisian and Indiana’s Curt Cignetti on backing vocals, Georgia’s Kirby Smart on tambourine, and Notre Dame’s Marcus Freeman on sax. It passed two million TikTok plays in two days. The Athletic wrote it up on 23 October. ViralReel does not host that file.',
        'The All-Loss Coaches card on ViralReel is the same joke as a format: team gear, a lead, backing vocals, a tambourine, a sax in the scene. It does not look up those coaches by name, and you should not upload their photos.',
        `Make a fan parody with people who agreed to be in it at ${EN_TEMPLATE}. ${SLOTS_EN} This is not an NCAA, school, NPR, or Charlie Wilson production.`,
      ],
      zh: [
        '「College Football’s Week 8 All-Loss Tiny Desk Concert」是 @theburnerfromhe11 在 2026 年 10 月 18 日发的 TikTok。前一天（10 月 17 日）排名前七的球队有五支同日输球，报道称这是常规赛第一次。这条 19 秒的 AI 片子让阿拉巴马的 Kalen DeBoer 领唱，德州的 Steve Sarkisian 和印第安纳的 Curt Cignetti 和声，佐治亚的 Kirby Smart 打铃鼓，圣母大学的 Marcus Freeman 吹萨克斯。两天内 TikTok 播放破 200 万。《The Athletic》在 10 月 23 日写了报道。ViralReel 不托管那个文件。',
        'ViralReel 上的「输球教练团」是同一个笑话的格式：队服、主唱、和声、铃鼓、场景里的萨克斯。它不会按名字去造那些教练，你也不应该上传他们的照片。',
        `用同意出镜的人做粉丝戏仿：${ZH_TEMPLATE} 。${SLOTS_ZH} 这不是 NCAA、学校、NPR 或 Charlie Wilson 的作品。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this the All-Loss Tiny Desk Concert video?', zh: '这是 All-Loss Tiny Desk Concert 原片吗？' },
        a: {
          en: 'No. That TikTok was posted by @theburnerfromhe11 on 18 October 2026. ViralReel does not host it and does not generate those coaches.',
          zh: '不是。那条 TikTok 由 @theburnerfromhe11 在 2026 年 10 月 18 日发布。ViralReel 不托管它，也不会生成那些教练。',
        },
      },
      {
        q: { en: 'Which set is the coaches version?', zh: '哪一套是教练版？' },
        a: {
          en: 'All-Loss Coaches on the Tiny Desk Outstanding template. It is a fan-parody format. Upload photos you have permission to use, not the coaches from the TikTok.',
          zh: 'Tiny Desk Outstanding 模板上的输球教练团。它是粉丝戏仿格式。上传你有权使用的照片，不要上传 TikTok 里的教练。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk concert ai',
    slug: 'tiny-desk-concert-ai',
    title: {
      en: 'Tiny Desk Concert AI – The Outstanding Parody on ViralReel',
      zh: 'Tiny Desk Concert AI：ViralReel 上的 Outstanding 戏仿',
    },
    description: {
      en: 'tiny desk concert ai: ViralReel’s Tiny Desk page is the Outstanding fan parody, not a generator for every NPR Tiny Desk concert. Not affiliated with NPR.',
      zh: 'tiny desk concert ai：ViralReel 的 Tiny Desk 页面是 Outstanding 粉丝戏仿，不是用来生成每一场 NPR Tiny Desk 的工具。与 NPR 无关。',
    },
    h1: { en: 'Tiny Desk concert AI', zh: 'Tiny Desk concert AI' },
    lead: {
      en: 'Tiny Desk concert AI on ViralReel means one fan parody: the Outstanding desk. It is not an official NPR concert generator.',
      zh: 'ViralReel 上的 Tiny Desk concert AI 只指一种粉丝戏仿：Outstanding 那张桌子。它不是 NPR 的官方演唱会生成器。',
    },
    guideTitle: {
      en: 'One concert format, not the whole NPR catalog',
      zh: '一种演唱会格式，不是整份 NPR 目录',
    },
    body: {
      en: [
        'A tiny desk concert ai search is broad. People use it for any AI clip staged like an NPR Tiny Desk: small room, desk, mics, a band inches from the lens. The clip that actually spread in October 2026 is narrower. It is the Outstanding performance, recast with new faces, under tags such as #tinydeskconcertai.',
        `ViralReel does not generate arbitrary Tiny Desk sets, other NPR episodes, or a licensed concert. The live template is the Outstanding fan parody at ${EN_TEMPLATE}. Six sets, 9:16, your photos. ${SLOTS_EN}`,
        'ViralReel is not affiliated with NPR or Tiny Desk Concerts. The real concerts stay on NPR Music. Add the trend sound on the platform you post to. ViralReel does not license it.',
      ],
      zh: [
        '搜 tiny desk concert ai 很宽。人们用它指任何摆成 NPR Tiny Desk 样子的 AI 片子：小房间、桌子、话筒、离镜头很近的乐队。2026 年 10 月真正传开的更窄。它是《Outstanding》那段演出，换上新的脸，标签常是 #tinydeskconcertai。',
        `ViralReel 不会生成任意 Tiny Desk 阵容、其他 NPR 集数或一场已授权的演唱会。上线的模板是 Outstanding 粉丝戏仿：${ZH_TEMPLATE} 。六套阵容、9:16、你的照片。${SLOTS_ZH}`,
        'ViralReel 与 NPR 和 Tiny Desk Concerts 没有关系。真实演唱会仍在 NPR Music。热梗原声在你发布的平台上另加。ViralReel 不授权它。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I make any Tiny Desk concert?', zh: '能做任意一场 Tiny Desk 演唱会吗？' },
        a: {
          en: 'No. This template is the Outstanding fan parody only. It is not a tool for other NPR Tiny Desk episodes.',
          zh: '不能。这个模板只做 Outstanding 粉丝戏仿。它不是用来做其他 NPR Tiny Desk 集数的工具。',
        },
      },
      {
        q: { en: 'Is #tinydeskconcertai this template?', zh: '#tinydeskconcertai 就是这个模板吗？' },
        a: {
          en: 'That tag collected the October 2026 Outstanding remakes, including CapCut tutorials. ViralReel is a separate browser template for the same fan-parody format.',
          zh: '这个标签收的是 2026 年 10 月的 Outstanding 重拍，包括 CapCut 教程。ViralReel 是同一粉丝戏仿格式的独立浏览器模板。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding tiktok',
    slug: 'tiny-desk-outstanding-tiktok',
    title: {
      en: 'Tiny Desk Outstanding TikTok – Make a Post, Not a Repost',
      zh: 'Tiny Desk Outstanding TikTok：做一条帖子，而不是搬运',
    },
    description: {
      en: 'tiny desk outstanding tiktok: ViralReel does not host the TikTok. Make a 9:16 fan parody, then add the trend sound and the AI label inside TikTok.',
      zh: 'tiny desk outstanding tiktok：ViralReel 不托管那条 TikTok。先做一条 9:16 粉丝戏仿，再在 TikTok 里加热梗原声和 AI 标注。',
    },
    h1: { en: 'Tiny Desk Outstanding TikTok', zh: 'Tiny Desk Outstanding TikTok' },
    lead: {
      en: 'ViralReel does not host the Tiny Desk Outstanding TikTok. It makes a new 9:16 fan parody you can post with the trend sound and an AI label.',
      zh: 'ViralReel 不托管 Tiny Desk Outstanding 的 TikTok。它做一条新的 9:16 粉丝戏仿，你可以配上热梗原声和 AI 标注再发。',
    },
    guideTitle: {
      en: 'From the template to a TikTok post',
      zh: '从模板到一条 TikTok',
    },
    body: {
      en: [
        'The TikTok that set the format was @theburnerfromhe11 on 18 October 2026. Remakes followed from team accounts and friend groups, and on 24 October a CapCut template pushed #tinydeskconcertai tutorials. ViralReel does not host any of those posts.',
        `The browser alternative is ${EN_TEMPLATE}. No CapCut link to find, no prompt. ${SLOTS_EN} The page opens on 9:16, the ratio TikTok uses.`,
        'Download the MP4 and post it natively in TikTok. Add the Outstanding trend sound from TikTok’s library and turn on the AI-generated label. ViralReel does not license that sound, and cross-posting tools can watermark the file and cut reach. The same steps work for Reels and Shorts.',
      ],
      zh: [
        '定下这个格式的 TikTok 是 @theburnerfromhe11 在 2026 年 10 月 18 日发的。之后球队账号和朋友团跟进，10 月 24 日 CapCut 模板把 #tinydeskconcertai 教程推开。ViralReel 不托管这些帖子。',
        `浏览器里的做法是 ${ZH_TEMPLATE} 。不用去找 CapCut 链接，也不用写提示词。${SLOTS_ZH} 页面默认 9:16，也就是 TikTok 用的画幅。`,
        '下载 MP4，在 TikTok 里原生发布。从 TikTok 曲库加上《Outstanding》热梗原声，并打开 AI 生成标注。ViralReel 不授权这段声音，跨平台工具还可能加水印、压到达。Reels 和 Shorts 也是同样的步骤。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Where is the original Tiny Desk Outstanding TikTok?', zh: '原始 Tiny Desk Outstanding TikTok 在哪？' },
        a: {
          en: 'Not on ViralReel. The origin post cited in coverage is @theburnerfromhe11 on 18 October 2026. This site does not reupload it.',
          zh: '不在 ViralReel。报道里引用的起点是 @theburnerfromhe11 在 2026 年 10 月 18 日的帖子。本站不转载它。',
        },
      },
      {
        q: { en: 'How do I post it on TikTok?', zh: '怎么发到 TikTok？' },
        a: {
          en: 'Download the MP4, upload it in the TikTok app, add the Outstanding trend sound from TikTok’s library, and turn on the AI label. ViralReel does not license that audio.',
          zh: '下载 MP4，在 TikTok 应用里上传，从 TikTok 曲库加上《Outstanding》热梗原声，并打开 AI 标注。ViralReel 不授权这段音频。',
        },
      },
    ],
  },
  {
    keyword: 'washed anthem ai',
    slug: 'washed-anthem-ai',
    title: {
      en: 'Washed Anthem AI – The Outstanding Nickname, Made as a Parody',
      zh: 'Washed Anthem AI：Outstanding 的外号，做成戏仿',
    },
    description: {
      en: 'washed anthem ai: sports TikTok’s nickname for Charlie Wilson’s Outstanding Tiny Desk clip. ViralReel’s fan parody is the Tiny Desk Outstanding template. Not an official song page.',
      zh: 'washed anthem ai：体育 TikTok 给 Charlie Wilson 的 Outstanding Tiny Desk 片段起的外号。ViralReel 的粉丝戏仿就是 Tiny Desk Outstanding 模板。不是官方歌曲页。',
    },
    h1: { en: 'Washed anthem AI', zh: 'Washed anthem AI' },
    lead: {
      en: 'Washed anthem is the sports-TikTok nickname for the Charlie Wilson “Outstanding” clip. The AI video of that joke is the Tiny Desk Outstanding fan parody.',
      zh: 'Washed anthem 是体育 TikTok 给 Charlie Wilson《Outstanding》片段起的外号。这个笑话的 AI 视频就是 Tiny Desk Outstanding 粉丝戏仿。',
    },
    guideTitle: {
      en: 'Why sports feeds call Outstanding the washed anthem',
      zh: '为什么体育信息流把 Outstanding 叫过气赞歌',
    },
    body: {
      en: [
        'Long before the October 2026 AI wave, sports TikTok laid Charlie Wilson singing “Outstanding” at the Tiny Desk over players and teams past their best. The celebration in the song against a decline on the field is why the clip picked up the nickname washed anthem. Putting five losing coaches behind the desk on 18 October 2026 was the same joke with a full band.',
        'A washed anthem ai search is asking for that picture, not a separate product and not a licensed audio download. ViralReel does not sell the song, the nickname, or the old sports edits.',
        `The fan-parody template for the format is ${EN_TEMPLATE}. ${SLOTS_EN} Add the Outstanding trend sound — the washed-anthem sound — inside TikTok, Reels, or Shorts. ViralReel does not license it and is not affiliated with NPR or Charlie Wilson.`,
      ],
      zh: [
        '在 2026 年 10 月的 AI 浪潮之前很久，体育 TikTok 就把 Charlie Wilson 在 Tiny Desk 唱《Outstanding》的片段配在状态下滑的球员和球队身上。歌里的庆祝对着场上的下滑，这段才得了 washed anthem（过气赞歌）这个外号。2026 年 10 月 18 日让五位输球教练站上桌子，是同一个笑话加上一整支乐队。',
        '搜 washed anthem ai 要的是这个画面，不是另一个产品，也不是已授权音频的下载。ViralReel 不出售这首歌、这个外号或那些旧的体育剪辑。',
        `这个格式的粉丝戏仿模板是 ${ZH_TEMPLATE} 。${SLOTS_ZH} 在 TikTok、Reels 或 Shorts 里加上《Outstanding》热梗原声，也就是过气赞歌那条声音。ViralReel 不授权它，也与 NPR 或 Charlie Wilson 没有关系。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What is the washed anthem?', zh: 'Washed anthem 是什么？' },
        a: {
          en: 'It is the sports-TikTok nickname for Charlie Wilson’s Tiny Desk performance of the Gap Band song “Outstanding,” played over athletes or teams seen as past their peak.',
          zh: '它是体育 TikTok 的外号，指 Charlie Wilson 在 Tiny Desk 演唱 Gap Band 的《Outstanding》，并配在被认为已过巅峰的球员或球队身上。',
        },
      },
      {
        q: { en: 'Is there a separate washed anthem generator?', zh: '有单独的 washed anthem 生成器吗？' },
        a: {
          en: `No. On ViralReel that search lands on the Tiny Desk Outstanding template at ${EN_TEMPLATE}.`,
          zh: `没有。在 ViralReel，这个搜索对应的是 Tiny Desk Outstanding 模板：${ZH_TEMPLATE} 。`,
        },
      },
    ],
  },
  {
    keyword: 'tiny desk ai template',
    slug: 'tiny-desk-ai-template',
    title: {
      en: 'Tiny Desk AI Template – Outstanding Fan Parody on ViralReel',
      zh: 'Tiny Desk AI 模板：ViralReel 上的 Outstanding 粉丝戏仿',
    },
    description: {
      en: 'tiny desk ai template: ViralReel’s Tiny Desk template is the Outstanding fan parody. Six sets, three photo slots, 9:16. Not an official NPR template.',
      zh: 'tiny desk ai template：ViralReel 的 Tiny Desk 模板是 Outstanding 粉丝戏仿。六套阵容、三个照片位、9:16。不是 NPR 的官方模板。',
    },
    h1: { en: 'Tiny Desk AI template', zh: 'Tiny Desk AI 模板' },
    lead: {
      en: 'The Tiny Desk AI template on ViralReel is the Outstanding fan parody. It is not an official NPR template and not a blank Tiny Desk for every song.',
      zh: 'ViralReel 上的 Tiny Desk AI 模板是 Outstanding 粉丝戏仿。它不是 NPR 的官方模板，也不是能套任何一首歌的空白 Tiny Desk。',
    },
    guideTitle: {
      en: 'What this Tiny Desk AI template includes',
      zh: '这个 Tiny Desk AI 模板里有什么',
    },
    body: {
      en: [
        `The template lives at ${EN_TEMPLATE}. You pick one of six Outstanding sets — All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie — and generate in the browser. No app install and no prompt.`,
        `${SLOTS_EN} Reference models expect all three photos. The page opens on 9:16. The credit cost is on the generator before you start, from the same table as pricing.`,
        'Preview cards on the template page are sourced from the TikTok trend and carry a credit handle. They are not your render and not the NPR master. ViralReel is not affiliated with NPR, Tiny Desk, Charlie Wilson, or the Gap Band, and it does not license the song. Add the trend sound when you post, and label the clip as AI.',
      ],
      zh: [
        `模板在 ${ZH_TEMPLATE} 。六套 Outstanding 阵容里选一套——输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子或真身 Charlie——在浏览器里生成。不用装 App，也不用写提示词。`,
        `${SLOTS_ZH} 参考模型需要三张照片都传上。页面默认 9:16。积分在生成前按和定价页同一张表显示。`,
        '模板页上的预览卡片来自 TikTok 趋势，并标了来源账号。它们不是你的成片，也不是 NPR 母带。ViralReel 与 NPR、Tiny Desk、Charlie Wilson 和 Gap Band 均无关联，也不授权这首歌。发布时加热梗原声，并把片子标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this an official Tiny Desk template?', zh: '这是官方 Tiny Desk 模板吗？' },
        a: {
          en: 'No. It is a fan parody on ViralReel. NPR, Tiny Desk Concerts, and Charlie Wilson are not involved.',
          zh: '不是。这是 ViralReel 上的粉丝戏仿。NPR、Tiny Desk Concerts 和 Charlie Wilson 都没有参与。',
        },
      },
      {
        q: { en: 'Where is the generator?', zh: '生成器在哪？' },
        a: {
          en: `On the template page: ${EN_TEMPLATE}. This long-tail page explains the search. The generator is the template.`,
          zh: `在模板页：${ZH_TEMPLATE} 。这个长尾页解释的是搜索词。生成器在模板上。`,
        },
      },
    ],
  },
  {
    keyword: 'college football coaches tiny desk',
    slug: 'college-football-coaches-tiny-desk',
    title: {
      en: 'College Football Coaches Tiny Desk – Parody Format, Not Their Faces',
      zh: '大学橄榄球教练 Tiny Desk：戏仿格式，不是他们的脸',
    },
    description: {
      en: 'college football coaches tiny desk: the All-Loss coaches joke. ViralReel does not generate those coaches. All-Loss Coaches is a fan-parody set for photos you are allowed to use.',
      zh: 'college football coaches tiny desk：输球教练的笑话。ViralReel 不会生成那些教练。输球教练团是给有权使用的照片用的粉丝戏仿套装。',
    },
    h1: { en: 'College football coaches Tiny Desk', zh: '大学橄榄球教练 Tiny Desk' },
    lead: {
      en: 'The college football coaches Tiny Desk is the All-Loss joke. ViralReel does not build those coaches’ faces. The set is a fan parody for your own photos.',
      zh: '大学橄榄球教练 Tiny Desk 就是输球教练那个笑话。ViralReel 不会去造那些教练的脸。这套是给你自己照片用的粉丝戏仿。',
    },
    guideTitle: {
      en: 'The coaches clip, without generating the coaches',
      zh: '教练片子，但不生成那些教练',
    },
    body: {
      en: [
        'The coaches version is the origin of the AI trend: five college football coaches staged as a Tiny Desk band the day after a historic Saturday of losses. Coverage names Kalen DeBoer, Steve Sarkisian, Curt Cignetti, Kirby Smart, and Marcus Freeman in the @theburnerfromhe11 post. That is a description of the TikTok, not a casting list ViralReel will render.',
        'All-Loss Coaches on the template keeps the readable costume of that joke — team gear, a lead, backing singers, a tambourine, a sax in the scene — and waits for photos you have permission to use. A fantasy league, an office, or a group chat is the intended cast. Uploading a coach, a player, or a screenshot is not.',
        `Start at ${EN_TEMPLATE}. ${SLOTS_EN} ViralReel is not affiliated with the schools, the NCAA, NPR, or Charlie Wilson.`,
      ],
      zh: [
        '教练版是这波 AI 趋势的起点：一个历史性的周六连败之后，五位大学橄榄球教练被摆成一支 Tiny Desk 乐队。报道点名 @theburnerfromhe11 帖子里的 Kalen DeBoer、Steve Sarkisian、Curt Cignetti、Kirby Smart 和 Marcus Freeman。这是对那条 TikTok 的描述，不是 ViralReel 会渲染的演员表。',
        '模板上的输球教练团保留这个笑话能认出来的服装——队服、主唱、和声、铃鼓、场景里的萨克斯——然后等你有权使用的照片。幻想联赛、办公室或群聊才是该放进去的人。上传教练、球员或截图不是。',
        `从 ${ZH_TEMPLATE} 开始。${SLOTS_ZH} ViralReel 与这些学校、NCAA、NPR 或 Charlie Wilson 没有关系。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I type a coach’s name and get his face?', zh: '输入教练名字就能得到他的脸吗？' },
        a: {
          en: 'No. The generator uses uploaded photos only. Do not upload college coaches, other celebrities, or minors.',
          zh: '不能。生成器只用上传的照片。不要上传大学教练、其他名人或未成年人。',
        },
      },
      {
        q: { en: 'Which template is the coaches Tiny Desk?', zh: '教练 Tiny Desk 用哪个模板？' },
        a: {
          en: `All-Loss Coaches on ${EN_TEMPLATE}. It is a fan-parody set, not the original TikTok.`,
          zh: `${ZH_TEMPLATE} 上的输球教练团。它是粉丝戏仿套装，不是原始 TikTok。`,
        },
      },
    ],
  },
  {
    keyword: 'nfl tiny desk meme',
    slug: 'nfl-tiny-desk-meme',
    title: {
      en: 'NFL Tiny Desk Meme – Fan Parody Sets, Not an Official NFL Video',
      zh: 'NFL Tiny Desk 梗：粉丝戏仿阵容，不是 NFL 官方视频',
    },
    description: {
      en: 'nfl tiny desk meme: Cowboys, NFC East, and Rams sets on the Outstanding fan parody. ViralReel is not the NFL, not those teams, and not NPR.',
      zh: 'nfl tiny desk meme：Outstanding 粉丝戏仿里的牛仔、国联东区和公羊套装。ViralReel 不是 NFL，不是这些球队，也不是 NPR。',
    },
    h1: { en: 'NFL Tiny Desk meme', zh: 'NFL Tiny Desk 梗' },
    lead: {
      en: 'The NFL Tiny Desk meme is team fanbases recasting the Outstanding desk. ViralReel is not an official NFL, team, or NPR page.',
      zh: 'NFL Tiny Desk 梗是各队粉丝把 Outstanding 那张桌子换成人。ViralReel 不是 NFL、球队或 NPR 的官方页面。',
    },
    guideTitle: {
      en: 'The NFL sets, as a fan parody',
      zh: '这些 NFL 阵容，作为粉丝戏仿',
    },
    body: {
      en: [
        'After the coaches clip, NFL fanbases put their own sidelines behind the same desk. The versions people search are the Cowboys legends in suits, the NFC East band with an owner on sax, and the Rams band in team gear. A Spurs set took the joke into basketball. None of those posts are NFL Films, and ViralReel does not host them.',
        'Cowboys Legends, NFC East Band, and Rams Band on ViralReel are fan-parody looks of that wave. They do not generate players, coaches, or owners by name. Do not upload those people.',
        `The template is ${EN_TEMPLATE}. ${SLOTS_EN} ViralReel is not affiliated with the NFL, any club, NPR, or Charlie Wilson. Add the trend sound on the platform and label the post as AI.`,
      ],
      zh: [
        '教练片之后，NFL 粉丝圈把自家场边换到了同一张桌子后面。大家会搜的版本是西装牛仔传奇、老板吹萨克斯的国联东区乐队，以及队服公羊乐队。马刺那套把笑话带进了篮球。这些帖子都不是 NFL Films，ViralReel 也不托管它们。',
        'ViralReel 上的牛仔传奇、国联东区乐队和公羊队是这波的粉丝戏仿造型。它们不会按名字生成球员、教练或老板。不要上传这些人。',
        `模板是 ${ZH_TEMPLATE} 。${SLOTS_ZH} ViralReel 与 NFL、任何俱乐部、NPR 或 Charlie Wilson 均无关联。在平台上加热梗原声，并把帖子标成 AI。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is this an official NFL Tiny Desk?', zh: '这是 NFL 官方 Tiny Desk 吗？' },
        a: {
          en: 'No. It is a fan parody. ViralReel is not affiliated with the NFL, the teams, NPR, or Charlie Wilson.',
          zh: '不是。这是粉丝戏仿。ViralReel 与 NFL、这些球队、NPR 和 Charlie Wilson 都没有关系。',
        },
      },
      {
        q: { en: 'Which sets match the NFL meme?', zh: '哪些套装对得上 NFL 梗？' },
        a: {
          en: 'Cowboys Legends, NFC East Band, and Rams Band. Spurs Big Men is the basketball cousin on the same template. Upload your own photos, not players or owners.',
          zh: '牛仔传奇、国联东区乐队和公羊队。马刺大个子是同一模板上的篮球亲戚。上传你自己的照片，不要上传球员或老板。',
        },
      },
    ],
  },
  {
    keyword: 'gap band outstanding ai',
    slug: 'gap-band-outstanding-ai',
    title: {
      en: 'Gap Band Outstanding AI – The Song in the Desk Parody',
      zh: 'Gap Band Outstanding AI：桌子戏仿里的那首歌',
    },
    description: {
      en: 'gap band outstanding ai: “Outstanding” is the 1982 Gap Band song Charlie Wilson sang at Tiny Desk. ViralReel does not license it. The video template is a fan parody. Add the trend sound on the platform.',
      zh: 'gap band outstanding ai：《Outstanding》是 Charlie Wilson 在 Tiny Desk 唱的 Gap Band 1982 年的歌。ViralReel 不授权它。视频模板是粉丝戏仿。热梗原声在平台上另加。',
    },
    h1: { en: 'Gap Band Outstanding AI', zh: 'Gap Band Outstanding AI' },
    lead: {
      en: 'Gap Band Outstanding AI searches are about the song. ViralReel does not sell or license that recording. It makes the desk fan parody from your photos.',
      zh: '搜 Gap Band Outstanding AI 找的是这首歌。ViralReel 不出售也不授权那段录音。它用你的照片做桌子上的粉丝戏仿。',
    },
    guideTitle: {
      en: 'The song, and the video that is not a download of it',
      zh: '这首歌，以及并不是它的下载的视频',
    },
    body: {
      en: [
        '“Outstanding” is the Gap Band’s 1982 hit, written and sung by Charlie Wilson with the group. The stretch the meme uses is the live Tiny Desk close: he turns to the band, grins into the camera, and waves on the hook while the sax takes a solo. NPR Music posted the concert on 5 June 2023. That master is not a ViralReel file.',
        'ViralReel does not license the Gap Band recording, Charlie Wilson’s live vocal, or NPR’s audio. Some generation models can follow an admin-configured reference track. That is not a promise that the MP4 contains the song, and it is not a license you can treat as the original soundtrack. If the post needs the trend, add the sound inside TikTok, Reels, or Shorts.',
        `The video people make from the song’s meme is the fan parody at ${EN_TEMPLATE}. ${SLOTS_EN} There is no Gap Band audio product on this site.`,
      ],
      zh: [
        '《Outstanding》是 Gap Band 1982 年的热单，由 Charlie Wilson 和乐队一起创作并演唱。梗用的是 Tiny Desk 收尾那一段：他转向乐队，对着镜头咧嘴笑，在副歌挥手，萨克斯来一段独奏。NPR Music 于 2023 年 6 月 5 日发布这场演唱会。那段母带不是 ViralReel 的文件。',
        'ViralReel 不授权 Gap Band 的录音、Charlie Wilson 的现场人声或 NPR 的音频。部分生成模型可以跟随管理员配置的参考音轨。那不代表 MP4 里一定有这首歌，也不能当成原声授权。如果帖子需要这条趋势，请在 TikTok、Reels 或 Shorts 里另加声音。',
        `大家用这首歌的梗做出来的视频，是 ${ZH_TEMPLATE} 上的粉丝戏仿。${SLOTS_ZH} 本站没有 Gap Band 的音频产品。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the Gap Band song here?', zh: '能在这里下载 Gap Band 的歌吗？' },
        a: {
          en: 'No. ViralReel does not sell or license “Outstanding.” Add the trend sound in the app you post to.',
          zh: '不能。ViralReel 不出售也不授权《Outstanding》。热梗原声请在你发布的应用里另加。',
        },
      },
      {
        q: { en: 'Does the MP4 include the original Outstanding audio?', zh: 'MP4 里带原版 Outstanding 音频吗？' },
        a: {
          en: 'Not as a licensed soundtrack. Some models can follow an admin reference track; others generate their own sound or export silence if audio is off. Treat the file as a picture. Add the trend sound on TikTok, Reels, or Shorts.',
          zh: '不是作为已授权的原声。部分模型可以跟随管理员参考音轨；其他模型会自己生成声音，或者在关掉音频时导出无声。把文件当成画面。热梗原声请在 TikTok、Reels 或 Shorts 里另加。',
        },
      },
    ],
  },
  {
    keyword: 'outstanding tiny desk ai',
    slug: 'outstanding-tiny-desk-ai',
    title: {
      en: 'Outstanding Tiny Desk AI – Fan Parody, Song Title First',
      zh: 'Outstanding Tiny Desk AI：歌名在前的粉丝戏仿',
    },
    description: {
      en: 'outstanding tiny desk ai: the same ViralReel fan parody as Tiny Desk Outstanding AI, with the song title typed first. Six sets. Center Lead, Left Role, Right Role. Not NPR. No Outstanding license.',
      zh: 'outstanding tiny desk ai：和 Tiny Desk Outstanding AI 是同一个 ViralReel 粉丝戏仿，只是歌名打在前面。六套阵容。中间主角、左边角色、右边角色。不是 NPR。不授权《Outstanding》。',
    },
    h1: { en: 'Outstanding Tiny Desk AI', zh: 'Outstanding Tiny Desk AI' },
    lead: {
      en: 'Outstanding Tiny Desk AI is Tiny Desk Outstanding AI with the words reversed. ViralReel answers both with one fan-parody template, not an NPR page.',
      zh: 'Outstanding Tiny Desk AI 就是把 Tiny Desk Outstanding AI 的词序倒过来。ViralReel 用同一套粉丝戏仿模板回答这两个搜索，不是 NPR 页面。',
    },
    guideTitle: {
      en: 'Same desk, song title typed first',
      zh: '同一张桌子，歌名打在前面',
    },
    body: {
      en: [
        'The outstanding tiny desk ai query starts with the Gap Band hook. The scene people mean is still Charlie Wilson closing his NPR Tiny Desk concert with “Outstanding”: cramped office, cluttered desk, grin, hand wave, sax solo. ViralReel does not host that concert. It is not affiliated with NPR, NPR Music, Tiny Desk Concerts, Charlie Wilson, or the Gap Band, and it does not license the song.',
        `The other word order already has a page at https://www.viralreel.app/tiny-desk-outstanding-ai. Make the clip at ${EN_TEMPLATE}. Pick All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie. ${SLOTS_EN}`,
        `Leave the ratio on 9:16 and read the credit cost before you generate. The download is a new MP4. Add the trend sound in TikTok, Reels, or Shorts and turn on the AI label. Photo prep for the three slots is at ${EN_PHOTO_POST}.`,
      ],
      zh: [
        '搜 outstanding tiny desk ai 的人先想起 Gap Band 的副歌。大家说的场景仍是 Charlie Wilson 用《Outstanding》为 NPR Tiny Desk 演唱会收尾：狭小的办公室、杂乱的桌子、咧嘴笑、挥手、萨克斯独奏。ViralReel 不托管那场演唱会。它与 NPR、NPR Music、Tiny Desk Concerts、Charlie Wilson 和 Gap Band 均无关联，也不授权这首歌。',
        `另一种词序已经有页面：https://www.viralreel.app/zh/tiny-desk-outstanding-ai 。在 ${ZH_TEMPLATE} 制作。输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子或真身 Charlie 任选。${SLOTS_ZH}`,
        `画幅保持 9:16，生成前看清积分。下载的是一条新的 MP4。请在 TikTok、Reels 或 Shorts 里加热梗原声，并打开 AI 标注。三个位置的照片准备在 ${ZH_PHOTO_POST} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is Outstanding Tiny Desk AI a second product?', zh: 'Outstanding Tiny Desk AI 是另一个产品吗？' },
        a: {
          en: 'No. It is the same Tiny Desk Outstanding template. This URL matches the word order people type. The generator, the six sets, and the three slots do not change.',
          zh: '不是。它就是同一个 Tiny Desk Outstanding 模板。这个网址对应大家打字的词序。生成器、六套阵容和三个位置都不变。',
        },
      },
      {
        q: { en: 'Does typing Outstanding first make this an NPR page?', zh: '把 Outstanding 打在前面，这一页就变成 NPR 了吗？' },
        a: {
          en: 'No. The official concert stays on NPR Music. This page sends the search to a fan parody you make from your own photos.',
          zh: '不会。官方演唱会仍在 NPR Music。这一页把搜索送到用你自己的照片做的粉丝戏仿。',
        },
      },
    ],
  },
  {
    keyword: 'outstanding tiny desk ai video',
    slug: 'outstanding-tiny-desk-ai-video',
    title: {
      en: 'Outstanding Tiny Desk AI Video – The MP4, Not the Concert',
      zh: 'Outstanding Tiny Desk AI 视频：要的是 MP4，不是演唱会',
    },
    description: {
      en: 'outstanding tiny desk ai video: ViralReel downloads a new fan-parody MP4, not the NPR concert and not the original TikTok. Six sets. Default 9:16. Add the trend sound on the platform.',
      zh: 'outstanding tiny desk ai video：ViralReel 下载的是新的粉丝戏仿 MP4，不是 NPR 演唱会，也不是原始 TikTok。六套阵容。默认 9:16。热梗原声在平台上另加。',
    },
    h1: { en: 'Outstanding Tiny Desk AI video', zh: 'Outstanding Tiny Desk AI 视频' },
    lead: {
      en: 'An Outstanding Tiny Desk AI video from ViralReel is a new MP4. It is not a download of NPR’s concert or of the TikTok that started the wave.',
      zh: 'ViralReel 上的 Outstanding Tiny Desk AI 视频是一条新的 MP4。它不是 NPR 演唱会的下载，也不是带火这波的那条 TikTok。',
    },
    guideTitle: {
      en: 'What file this search actually gets',
      zh: '这个搜索实际拿到的是什么文件',
    },
    body: {
      en: [
        'Outstanding tiny desk ai video is the file search: people want the office, the desk, and a band they chose, saved as something they can post. The sibling page at https://www.viralreel.app/tiny-desk-outstanding-ai-video covers the same download with the desk named first. Neither page hosts the NPR master or the 18 October 2026 TikTok.',
        `Generate at ${EN_TEMPLATE}. ${SLOTS_EN} The six sets are All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, and Uncle Charlie. Uncle Charlie is a costume (beanie, shades, patterned shirt), not a generator that builds Charlie Wilson’s face.`,
        'The page opens on 9:16. Credits are shown before you generate. ViralReel does not license “Outstanding” or NPR’s audio, and it does not export the Gap Band track. Add the trend sound from the TikTok, Reels, or Shorts library and label the post as AI.',
      ],
      zh: [
        'Outstanding tiny desk ai video 是在找文件：大家要的是办公室、桌子，以及自己选的乐队，存成可以发布的片子。姊妹页 https://www.viralreel.app/zh/tiny-desk-outstanding-ai-video 讲的是同一份下载，只是桌子的名字放在前面。两个页面都不托管 NPR 母带，也不托管 2026 年 10 月 18 日那条 TikTok。',
        `在 ${ZH_TEMPLATE} 生成。${SLOTS_ZH} 六套阵容是输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子和真身 Charlie。真身 Charlie 是一套造型（毛线帽、墨镜、花衬衫），不是用来生成 Charlie Wilson 的脸的工具。`,
        '页面默认 9:16。积分在生成前显示。ViralReel 不授权《Outstanding》或 NPR 的音频，也不导出 Gap Band 的曲目。请从 TikTok、Reels 或 Shorts 的曲库加热梗原声，并把帖子标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the Outstanding Tiny Desk AI video the NPR file?', zh: 'Outstanding Tiny Desk AI 视频是 NPR 的文件吗？' },
        a: {
          en: 'No. You download a new fan-parody MP4 made from your photos. ViralReel does not reupload the concert.',
          zh: '不是。你下载的是用你的照片做成的新粉丝戏仿 MP4。ViralReel 不转载那场演唱会。',
        },
      },
      {
        q: { en: 'Which ratio should the video use?', zh: '视频该用什么画幅？' },
        a: {
          en: 'Leave it on 9:16, the ratio TikTok, Reels, and Shorts use for this trend. Read the credit cost for the resolution and length before you generate.',
          zh: '保持 9:16，这是这条趋势在 TikTok、Reels 和 Shorts 上的画幅。生成前看清分辨率和时长对应的积分。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding generator',
    slug: 'tiny-desk-outstanding-generator',
    title: {
      en: 'Tiny Desk Outstanding Generator – Browser Template on ViralReel',
      zh: 'Tiny Desk Outstanding 生成器：ViralReel 上的浏览器模板',
    },
    description: {
      en: 'tiny desk outstanding generator: ViralReel’s browser generator for the Outstanding desk parody. No prompt. Six sets. Three slots labeled Center Lead, Left Role, and Right Role. Not NPR.',
      zh: 'tiny desk outstanding generator：ViralReel 的浏览器生成器，用来做 Outstanding 桌子戏仿。不用写提示词。六套阵容。三个位置写的是中间主角、左边角色、右边角色。不是 NPR。',
    },
    h1: { en: 'Tiny Desk Outstanding generator', zh: 'Tiny Desk Outstanding 生成器' },
    lead: {
      en: 'The Tiny Desk Outstanding generator is a fixed template in the browser. You pick a set and upload photos. You do not describe the office in a prompt.',
      zh: 'Tiny Desk Outstanding 生成器是浏览器里的固定模板。你选一套阵容并上传照片。你不用在提示词里描述办公室。',
    },
    guideTitle: {
      en: 'What the generator does',
      zh: '这个生成器做什么',
    },
    body: {
      en: [
        'A tiny desk outstanding generator search wants the tool, not a recap of the meme. On ViralReel the tool is the template at ' + EN_TEMPLATE + '. The office, the desk, the grin, the hand wave, and the band blocking are already in the scene. You change who stands there.',
        `${SLOTS_EN} Reference models need all three photos. The sets are All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, and Uncle Charlie. Do not upload minors, celebrities, coaches, players, or NPR screenshots.`,
        `The more specific name, tiny desk outstanding ai generator, is at https://www.viralreel.app/tiny-desk-outstanding-ai-generator. Full steps are at ${EN_HOWTO}. Default ratio is 9:16. The credit cost is on the page before you generate. ViralReel does not license “Outstanding.”`,
      ],
      zh: [
        '搜 tiny desk outstanding generator 要的是工具，不是梗的复述。在 ViralReel，这个工具就是 ' + ZH_TEMPLATE + ' 上的模板。办公室、桌子、咧嘴笑、挥手和乐队站位已经在场景里。你换的是站在那里的人。',
        `${SLOTS_ZH} 参考模型需要三张都传上。阵容是输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子和真身 Charlie。不要上传未成年人、名人、教练、球员或 NPR 截图。`,
        `更具体的名字 tiny desk outstanding ai generator 在 https://www.viralreel.app/zh/tiny-desk-outstanding-ai-generator 。完整步骤在 ${ZH_HOWTO} 。默认画幅 9:16。积分在生成前显示在页面上。ViralReel 不授权《Outstanding》。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Do I write a prompt in the Tiny Desk Outstanding generator?', zh: 'Tiny Desk Outstanding 生成器要写提示词吗？' },
        a: {
          en: 'No. Pick one of the six sets and upload photos into Center Lead, Left Role, and Right Role. The template already holds the desk.',
          zh: '不用。六套阵容里选一套，把照片放进中间主角、左边角色和右边角色。桌子已经在模板里。',
        },
      },
      {
        q: { en: 'Is the generator an app I install?', zh: '这个生成器是要安装的 App 吗？' },
        a: {
          en: 'No. It runs in the browser on ViralReel. You do not hunt a CapCut project to use it. The comparison is at ' + EN_CAPCUT_POST + '.',
          zh: '不是。它在 ViralReel 的浏览器里运行。不用去找 CapCut 工程。对照说明在 ' + ZH_CAPCUT_POST + ' 。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding ai generator',
    slug: 'tiny-desk-outstanding-ai-generator',
    title: {
      en: 'Tiny Desk Outstanding AI Generator – Photos In, Fan-Parody MP4 Out',
      zh: 'Tiny Desk Outstanding AI 生成器：照片进去，粉丝戏仿 MP4 出来',
    },
    description: {
      en: 'tiny desk outstanding ai generator: an AI template, not a blank prompt box. ViralReel places your photos in the Outstanding desk parody. Six sets. Not affiliated with NPR. No song license.',
      zh: 'tiny desk outstanding ai generator：这是 AI 模板，不是空白提示词框。ViralReel 把你的照片放进 Outstanding 桌子戏仿。六套阵容。与 NPR 无关。没有歌曲授权。',
    },
    h1: { en: 'Tiny Desk Outstanding AI generator', zh: 'Tiny Desk Outstanding AI 生成器' },
    lead: {
      en: 'The Tiny Desk Outstanding AI generator builds a new fan parody from photos. It does not hand you a blank prompt and ask you to invent the NPR office.',
      zh: 'Tiny Desk Outstanding AI 生成器用照片做一条新的粉丝戏仿。它不会给你一个空白提示词，让你自己发明 NPR 的办公室。',
    },
    guideTitle: {
      en: 'How the AI generator is different from a prompt box',
      zh: '这个 AI 生成器和提示词框有什么不同',
    },
    body: {
      en: [
        'Tiny desk outstanding ai generator searches often land on general video tools that want a paragraph of instructions. ViralReel is the opposite for this trend. The AI part is the photo-to-scene render inside a template that already looks like the Outstanding desk. You are not licensed to claim the result is the NPR concert.',
        `Open ${EN_TEMPLATE}. The plain “generator” wording, without “AI” in the query, is the sibling page https://www.viralreel.app/tiny-desk-outstanding-generator. ${SLOTS_EN}`,
        'Six sets only: All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, Uncle Charlie. Default 9:16. Credits show before generate. ViralReel does not license or export the Gap Band track. Add that sound in TikTok, Reels, or Shorts, and label the post as AI.',
      ],
      zh: [
        '搜 tiny desk outstanding ai generator 常常落到要你写一整段说明的通用视频工具上。对这条趋势，ViralReel 相反。AI 的部分是模板内部的照片到场景渲染，模板本身已经像 Outstanding 那张桌子。你不能把成片说成 NPR 演唱会。',
        `打开 ${ZH_TEMPLATE} 。查询里不带“AI”的“生成器”说法，姊妹页是 https://www.viralreel.app/zh/tiny-desk-outstanding-generator 。${SLOTS_ZH}`,
        '只有六套：输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie。默认 9:16。积分在生成前显示。ViralReel 不授权也不导出 Gap Band 的曲目。请在 TikTok、Reels 或 Shorts 里加上那段声音，并把帖子标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Will the AI generator make any Tiny Desk artist I name?', zh: '这个 AI 生成器能做我点名的任何 Tiny Desk 艺人吗？' },
        a: {
          en: 'No. It only makes the Outstanding desk fan parody, in one of the six sets, from photos you upload. It does not generate Charlie Wilson or other NPR performers.',
          zh: '不能。它只用你上传的照片，在六套阵容里做 Outstanding 桌子戏仿。它不会生成 Charlie Wilson 或其他 NPR 演出者。',
        },
      },
      {
        q: { en: 'Where do I start the AI generator?', zh: '从哪里打开这个 AI 生成器？' },
        a: {
          en: 'At the Tiny Desk Outstanding template on ViralReel: ' + EN_TEMPLATE + '. Read the credit cost, then generate.',
          zh: '在 ViralReel 的 Tiny Desk Outstanding 模板：' + ZH_TEMPLATE + ' 。先看清积分再生成。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding capcut',
    slug: 'tiny-desk-outstanding-capcut',
    title: {
      en: 'Tiny Desk Outstanding CapCut – And the Browser Alternative',
      zh: 'Tiny Desk Outstanding CapCut：以及浏览器里的另一种做法',
    },
    description: {
      en: 'tiny desk outstanding capcut: CapCut pastes photos into a fixed template inside the app. ViralReel makes a new browser MP4 of the same fan parody without a CapCut project. Fair comparison. Not NPR.',
      zh: 'tiny desk outstanding capcut：CapCut 是在 App 里把照片贴进固定模板。ViralReel 在浏览器里生成同一粉丝戏仿的新 MP4，不用找 CapCut 工程。公平对照。不是 NPR。',
    },
    h1: { en: 'Tiny Desk Outstanding CapCut', zh: 'Tiny Desk Outstanding CapCut' },
    lead: {
      en: 'Tiny Desk Outstanding CapCut is the in-app template path. ViralReel is the browser path to a new fan-parody MP4. Neither one is the NPR concert.',
      zh: 'Tiny Desk Outstanding CapCut 是 App 里的模板路径。ViralReel 是在浏览器里做新粉丝戏仿 MP4 的路径。两者都不是 NPR 演唱会。',
    },
    guideTitle: {
      en: 'CapCut template versus a browser MP4',
      zh: 'CapCut 模板和浏览器 MP4',
    },
    body: {
      en: [
        'On 24 October 2026 a CapCut template spread #tinydeskconcertai tutorials. In that workflow you open CapCut, find the project, and paste photos into a fixed template inside the app. That is a normal way to edit if you already live in CapCut and want the clip on a timeline with your other cuts.',
        `ViralReel does not ship a CapCut project and does not ask you to hunt one. At ${EN_TEMPLATE} you pick a set and generate a new MP4 in the browser. ${SLOTS_EN} The buttons are not a promise about which photo holds the sax.`,
        `The citeable comparison, including when each path fits, is ${EN_CAPCUT_POST}. The no-CapCut wording is https://www.viralreel.app/tiny-desk-outstanding-without-capcut. ViralReel does not license “Outstanding.” Add the trend sound in TikTok, Reels, or Shorts either way, and label the post as AI. Credits show before you generate. Default ratio is 9:16.`,
      ],
      zh: [
        '2026 年 10 月 24 日，一个 CapCut 模板把 #tinydeskconcertai 教程传开。那条流程是打开 CapCut，找到工程，在 App 里把照片贴进固定模板。如果你本来就在 CapCut 里剪辑，还想把这段和别的镜头放在同一条时间线上，这是正常做法。',
        `ViralReel 不提供 CapCut 工程，也不要求你去找一个。在 ${ZH_TEMPLATE} 选一套阵容，在浏览器里生成一条新的 MP4。${SLOTS_ZH} 按钮并不保证哪张照片拿着萨克斯。`,
        `可引用的对照，包括各自适合什么时候，在 ${ZH_CAPCUT_POST} 。“不用 CapCut”的说法在 https://www.viralreel.app/zh/tiny-desk-outstanding-without-capcut 。ViralReel 不授权《Outstanding》。两条路径都请在 TikTok、Reels 或 Shorts 里加热梗原声，并把帖子标成 AI。积分在生成前显示。默认画幅 9:16。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Does ViralReel open inside CapCut?', zh: 'ViralReel 是在 CapCut 里面打开的吗？' },
        a: {
          en: 'No. CapCut keeps its template inside the CapCut app. ViralReel generates the fan-parody MP4 in the browser. You can still drop that MP4 into CapCut afterward if you want to keep editing there.',
          zh: '不是。CapCut 的模板留在 CapCut App 里。ViralReel 在浏览器里生成粉丝戏仿 MP4。如果你还想在 CapCut 里继续剪，可以把这条 MP4 再放进去。',
        },
      },
      {
        q: { en: 'Is the CapCut template the same file as the NPR concert?', zh: 'CapCut 模板和 NPR 演唱会是同一个文件吗？' },
        a: {
          en: 'No. The concert stays on NPR Music. A CapCut template and the ViralReel render are both fan-parody workflows. ViralReel does not host the CapCut project.',
          zh: '不是。演唱会仍在 NPR Music。CapCut 模板和 ViralReel 的成片都是粉丝戏仿流程。ViralReel 不托管 CapCut 工程。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding without capcut',
    slug: 'tiny-desk-outstanding-without-capcut',
    title: {
      en: 'Tiny Desk Outstanding Without CapCut – Make It in the Browser',
      zh: '不用 CapCut 的 Tiny Desk Outstanding：在浏览器里做',
    },
    description: {
      en: 'tiny desk outstanding without capcut: skip the CapCut project. ViralReel generates a new Outstanding desk MP4 in the browser from three photos. Six sets. Not NPR. No Outstanding license.',
      zh: 'tiny desk outstanding without capcut：不用去找 CapCut 工程。ViralReel 在浏览器里用三张照片生成新的 Outstanding 桌子 MP4。六套阵容。不是 NPR。不授权《Outstanding》。',
    },
    h1: { en: 'Tiny Desk Outstanding without CapCut', zh: '不用 CapCut 的 Tiny Desk Outstanding' },
    lead: {
      en: 'You can make a Tiny Desk Outstanding fan parody without CapCut. ViralReel generates a new MP4 in the browser. It does not hide a CapCut project somewhere on the site.',
      zh: '不做 CapCut 也能做 Tiny Desk Outstanding 粉丝戏仿。ViralReel 在浏览器里生成一条新的 MP4。本站没有藏着一个 CapCut 工程。',
    },
    guideTitle: {
      en: 'The path that never opens CapCut',
      zh: '从头到尾不用打开 CapCut 的路径',
    },
    body: {
      en: [
        'Tiny desk outstanding without capcut means you do not want to install CapCut, search #tinydeskconcertai for the 24 October 2026 template, or paste stills into someone else’s project. That CapCut path is fine if you already edit there. This page is the other path.',
        `Stay in the browser at ${EN_TEMPLATE}. ${SLOTS_EN} Choose All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie. Leave 9:16 on. Read the credits, generate, download the MP4.`,
        `A side-by-side of the two workflows is ${EN_CAPCUT_POST}. The CapCut keyword itself is https://www.viralreel.app/tiny-desk-outstanding-capcut. ViralReel does not license the Gap Band song. Add the trend sound on TikTok, Reels, or Shorts and turn on the AI label. Photo checks are at ${EN_PHOTO_POST}.`,
      ],
      zh: [
        'Tiny desk outstanding without capcut 的意思是：你不想安装 CapCut，不想在 #tinydeskconcertai 里翻 2026 年 10 月 24 日那个模板，也不想把静帧贴进别人的工程。如果你本来就在 CapCut 里剪，那条路径没问题。这一页是另一条路径。',
        `留在浏览器里，打开 ${ZH_TEMPLATE} 。${SLOTS_ZH} 在输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie 里选一套。保持 9:16。看清积分，生成，下载 MP4。`,
        `两条流程的并排说明在 ${ZH_CAPCUT_POST} 。CapCut 这个关键词本身在 https://www.viralreel.app/zh/tiny-desk-outstanding-capcut 。ViralReel 不授权 Gap Band 的歌。请在 TikTok、Reels 或 Shorts 里加热梗原声并打开 AI 标注。照片检查在 ${ZH_PHOTO_POST} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I finish a Tiny Desk Outstanding clip without opening CapCut?', zh: '不打开 CapCut 能做完一条 Tiny Desk Outstanding 吗？' },
        a: {
          en: 'Yes. Use the ViralReel template in the browser, download the MP4, then add the trend sound in TikTok, Reels, or Shorts.',
          zh: '可以。在浏览器里用 ViralReel 模板，下载 MP4，然后在 TikTok、Reels 或 Shorts 里加热梗原声。',
        },
      },
      {
        q: { en: 'Is a CapCut file hidden on ViralReel?', zh: 'ViralReel 上是不是藏了一个 CapCut 文件？' },
        a: {
          en: 'No. ViralReel does not host the CapCut template. It generates its own fan-parody MP4.',
          zh: '没有。ViralReel 不托管 CapCut 模板。它生成自己的粉丝戏仿 MP4。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding remix',
    slug: 'tiny-desk-outstanding-remix',
    title: {
      en: 'Tiny Desk Outstanding Remix – Swap the Band, Not the Song File',
      zh: 'Tiny Desk Outstanding 翻拍：换乐队，不提供歌曲文件',
    },
    description: {
      en: 'tiny desk outstanding remix: remix the people behind the Outstanding desk. ViralReel does not sell an audio remix or export the Gap Band track. Fan parody only. Add the platform sound yourself.',
      zh: 'tiny desk outstanding remix：翻拍的是 Outstanding 桌子后面的人。ViralReel 不出售音频混音，也不导出 Gap Band 曲目。只做粉丝戏仿。平台原声请自己加。',
    },
    h1: { en: 'Tiny Desk Outstanding remix', zh: 'Tiny Desk Outstanding 翻拍' },
    lead: {
      en: 'A Tiny Desk Outstanding remix on ViralReel swaps the band in one fixed scene. It is not a licensed audio remix of the Gap Band record.',
      zh: 'ViralReel 上的 Tiny Desk Outstanding 翻拍，是在一个固定场景里换乐队。它不是 Gap Band 唱片的授权音频混音。',
    },
    guideTitle: {
      en: 'What “remix” means on this template',
      zh: '在这个模板上“翻拍”指什么',
    },
    body: {
      en: [
        'Tiny desk outstanding remix sounds like a music product. On this site the remix is visual. The office stays. The people change. All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, and Uncle Charlie are six looks of that swap. ViralReel does not license “Outstanding,” does not export the Gap Band track, and does not sell a DJ remix of it.',
        `Make the fan parody at ${EN_TEMPLATE}. ${SLOTS_EN} Use photos you have permission to use. The song question, including what to add after download, is at https://www.viralreel.app/tiny-desk-outstanding-song.`,
        'Default 9:16. Credits show before generate. If the post needs the trend, add the sound from the TikTok, Reels, or Shorts library and label the video as AI. Some models can follow an admin-configured reference track. That is not a license and not an export of the original master.',
      ],
      zh: [
        'Tiny desk outstanding remix 听起来像音乐产品。在本站，翻拍是画面上的。办公室不动，人变了。输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子和真身 Charlie 是同一次换人的六种造型。ViralReel 不授权《Outstanding》，不导出 Gap Band 曲目，也不出售它的 DJ 混音。',
        `粉丝戏仿在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} 只用你有权使用的照片。关于歌曲、以及下载后要加什么，在 https://www.viralreel.app/zh/tiny-desk-outstanding-song 。`,
        '默认 9:16。积分在生成前显示。如果帖子需要这条趋势，请从 TikTok、Reels 或 Shorts 的曲库加声音，并把视频标成 AI。部分模型可以跟随管理员配置的参考音轨。那不是授权，也不是原版母带的导出。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download a Tiny Desk Outstanding audio remix here?', zh: '能在这里下载 Tiny Desk Outstanding 的音频混音吗？' },
        a: {
          en: 'No. ViralReel does not sell or export an audio remix of “Outstanding.” The template remixes who is in the picture.',
          zh: '不能。ViralReel 不出售也不导出《Outstanding》的音频混音。模板翻拍的是画面里的人。',
        },
      },
      {
        q: { en: 'What stays the same in the remix?', zh: '翻拍里什么是不变的？' },
        a: {
          en: 'The desk scene stays recognizable. You choose the set and the three photos. You do not rewrite the office as a prompt.',
          zh: '桌子上的场景保持认得出来。你选阵容和三张照片。你不用把办公室改写成提示词。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk outstanding song',
    slug: 'tiny-desk-outstanding-song',
    title: {
      en: 'Tiny Desk Outstanding Song – Add It on the Platform, Not Here',
      zh: 'Tiny Desk Outstanding 的歌：在平台上加，不在这里下',
    },
    description: {
      en: 'tiny desk outstanding song: “Outstanding” is the Gap Band track Charlie Wilson sang at Tiny Desk. ViralReel does not license or export that song. Make the fan-parody video, then add the sound from TikTok, Reels, or Shorts.',
      zh: 'tiny desk outstanding song：《Outstanding》是 Charlie Wilson 在 Tiny Desk 唱的 Gap Band 曲目。ViralReel 不授权也不导出这首歌。先做粉丝戏仿视频，再从 TikTok、Reels 或 Shorts 加声音。',
    },
    h1: { en: 'Tiny Desk Outstanding song', zh: 'Tiny Desk Outstanding 的歌' },
    lead: {
      en: 'The Tiny Desk Outstanding song is the Gap Band’s “Outstanding.” ViralReel does not license it and does not export the track. You add a platform-library sound after the MP4 downloads.',
      zh: 'Tiny Desk Outstanding 的歌是 Gap Band 的《Outstanding》。ViralReel 不授权它，也不导出这首曲目。MP4 下载之后，你从平台曲库加声音。',
    },
    guideTitle: {
      en: 'The song is not a download on ViralReel',
      zh: '这首歌不是 ViralReel 上的下载',
    },
    body: {
      en: [
        'Tiny desk outstanding song points at “Outstanding,” the Gap Band’s 1982 hit, the one Charlie Wilson used to close his NPR Tiny Desk on the concert NPR Music posted 5 June 2023. Sports TikTok later nicknamed that live close the washed anthem. The recording is not a ViralReel product. The Gap Band question with a different slug is https://www.viralreel.app/gap-band-outstanding-ai.',
        'ViralReel does not license the studio master, Charlie Wilson’s live vocal, or NPR’s audio, and it does not export the Gap Band track as a file you can take to another editor. Some generation models can follow an admin-configured reference track. That follow is not a promise that the MP4 contains the song, and it is not a license. Treat the download as picture.',
        `The video people pair with the song is the fan parody at ${EN_TEMPLATE}. ${SLOTS_EN} After you download, open TikTok, Reels, or Shorts and add the trend sound from that app’s library, then turn on the AI label. Steps are at ${EN_HOWTO}.`,
      ],
      zh: [
        'Tiny desk outstanding song 指向《Outstanding》，Gap Band 1982 年的热单，也是 Charlie Wilson 为 NPR Tiny Desk 收尾用的那首。NPR Music 于 2023 年 6 月 5 日发布那场演唱会。体育 TikTok 后来把这段现场收尾叫做过气赞歌。这段录音不是 ViralReel 的产品。另一个网址上的 Gap Band 问题在 https://www.viralreel.app/zh/gap-band-outstanding-ai 。',
        'ViralReel 不授权录音室母带、Charlie Wilson 的现场人声或 NPR 的音频，也不把 Gap Band 曲目导出成你可以拿到别的剪辑软件里的文件。部分生成模型可以跟随管理员配置的参考音轨。跟随不等于 MP4 里一定有这首歌，也不是授权。把下载当成画面。',
        `大家拿来配这首歌的视频，是 ${ZH_TEMPLATE} 上的粉丝戏仿。${SLOTS_ZH} 下载之后，打开 TikTok、Reels 或 Shorts，从该应用曲库加热梗原声，再打开 AI 标注。步骤在 ${ZH_HOWTO} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the Tiny Desk Outstanding song from ViralReel?', zh: '能从 ViralReel 下载 Tiny Desk Outstanding 的歌吗？' },
        a: {
          en: 'No. ViralReel does not license or export the Gap Band track. Add the sound from the TikTok, Reels, or Shorts library when you post.',
          zh: '不能。ViralReel 不授权也不导出 Gap Band 的曲目。发布时请从 TikTok、Reels 或 Shorts 的曲库加声音。',
        },
      },
      {
        q: { en: 'Does the MP4 ship with the original Outstanding audio?', zh: 'MP4 会带上原版 Outstanding 音频吗？' },
        a: {
          en: 'Not as a licensed soundtrack. A model may follow an admin reference track, generate other audio, or export silence. Add the trend sound on the platform if the post needs that song.',
          zh: '不是作为已授权的原声。模型可能跟随管理员参考音轨，也可能生成别的声音，或导出无声。如果帖子需要这首歌，请在平台上加热梗原声。',
        },
      },
    ],
  },
  {
    keyword: 'npr tiny desk outstanding ai',
    slug: 'npr-tiny-desk-outstanding-ai',
    title: {
      en: 'NPR Tiny Desk Outstanding AI – Not an NPR Page',
      zh: 'NPR Tiny Desk Outstanding AI：这不是 NPR 的页面',
    },
    description: {
      en: 'npr tiny desk outstanding ai: this is not NPR, NPR Music, or Tiny Desk. ViralReel is an independent fan-parody tool for the Outstanding desk. No affiliation. No Outstanding license. Do not upload NPR screenshots.',
      zh: 'npr tiny desk outstanding ai：这不是 NPR、NPR Music 或 Tiny Desk。ViralReel 是独立的 Outstanding 桌子粉丝戏仿工具。没有隶属关系。不授权《Outstanding》。不要上传 NPR 截图。',
    },
    h1: { en: 'NPR Tiny Desk Outstanding AI', zh: 'NPR Tiny Desk Outstanding AI' },
    lead: {
      en: 'NPR Tiny Desk Outstanding AI is a search, not an official NPR product. This page is the fan-parody tool. The real concert stays on NPR Music.',
      zh: 'NPR Tiny Desk Outstanding AI 是一个搜索，不是 NPR 的官方产品。这一页是粉丝戏仿工具。真实演唱会仍在 NPR Music。',
    },
    guideTitle: {
      en: 'Read this before you treat the URL as NPR',
      zh: '先读这段，再决定要不要把网址当成 NPR',
    },
    body: {
      en: [
        'If you searched npr tiny desk outstanding ai for the official concert, stop here. ViralReel (viralreel.app) is not NPR, not NPR Music, not Tiny Desk Concerts, and not a partner of Charlie Wilson or the Gap Band. It does not host the 5 June 2023 Tiny Desk, it does not speak for NPR, and it does not license “Outstanding.” The performance people recognize — Charlie Wilson closing that concert with the Gap Band song — remains NPR Music’s video.',
        `This URL exists so that search lands on a disclaimer and then on the fan-parody generator, not on a fake NPR page. Make a new clip only at ${EN_TEMPLATE}. ${SLOTS_EN} Do not upload NPR screenshots, Charlie Wilson, hosts, or any celebrity. The six sets (All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, Uncle Charlie) are costumes for photos you have permission to use.`,
        `A shorter non-AI alias, /npr-tiny-desk-outstanding, already redirects to the same template hub. Default 9:16. Credits show before generate. Add the trend sound yourself on TikTok, Reels, or Shorts and label the post as AI. The broader “what is this AI” page is https://www.viralreel.app/tiny-desk-outstanding-ai.`,
      ],
      zh: [
        '如果你搜 npr tiny desk outstanding ai 是为了找官方演唱会，请停在这里。ViralReel（viralreel.app）不是 NPR，不是 NPR Music，不是 Tiny Desk Concerts，也不是 Charlie Wilson 或 Gap Band 的合作方。它不托管 2023 年 6 月 5 日那场 Tiny Desk，不代表 NPR 发言，也不授权《Outstanding》。大家认得的演出——Charlie Wilson 用 Gap Band 的歌为那场演唱会收尾——仍是 NPR Music 的视频。',
        `这个网址的作用是让搜索先看到免责声明，再进入粉丝戏仿生成器，而不是落到一个假的 NPR 页面。新片子只在 ${ZH_TEMPLATE} 制作。${SLOTS_ZH} 不要上传 NPR 截图、Charlie Wilson、主持人或任何名人。六套阵容（输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie）是给有权使用的照片准备的造型。`,
        `更短的、不带 AI 的别名 /npr-tiny-desk-outstanding 已经重定向到同一个模板主页。默认 9:16。积分在生成前显示。热梗原声请自己在 TikTok、Reels 或 Shorts 里加，并把帖子标成 AI。更宽的“这是什么 AI”页面在 https://www.viralreel.app/zh/tiny-desk-outstanding-ai 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is NPR Tiny Desk Outstanding AI an official NPR tool?', zh: 'NPR Tiny Desk Outstanding AI 是 NPR 的官方工具吗？' },
        a: {
          en: 'No. ViralReel is independent. Nothing on this page is published by NPR or endorsed by Tiny Desk, Charlie Wilson, or the Gap Band.',
          zh: '不是。ViralReel 是独立站点。这一页上的内容不是 NPR 发布的，也没有 Tiny Desk、Charlie Wilson 或 Gap Band 的背书。',
        },
      },
      {
        q: { en: 'Can I upload a screenshot of the NPR concert?', zh: '可以上传 NPR 演唱会的截图吗？' },
        a: {
          en: 'No. Use photos you have permission to use. Do not upload NPR screenshots, minors, celebrities, coaches, or players.',
          zh: '不可以。只用你有权使用的照片。不要上传 NPR 截图、未成年人、名人、教练或球员。',
        },
      },
    ],
  },
  {
    keyword: 'tiny desk ai video generator',
    slug: 'tiny-desk-ai-video-generator',
    title: {
      en: 'Tiny Desk AI Video Generator – The Outstanding Parody Only',
      zh: 'Tiny Desk AI 视频生成器：只有 Outstanding 这一种戏仿',
    },
    description: {
      en: 'tiny desk ai video generator: ViralReel does not generate every NPR Tiny Desk episode. It makes one fan parody, the Outstanding desk, from your photos. Six sets. Three slots. No Outstanding license.',
      zh: 'tiny desk ai video generator：ViralReel 不会生成每一集 NPR Tiny Desk。它只用你的照片做一种粉丝戏仿，就是 Outstanding 这张桌子。六套阵容。三个位置。不授权《Outstanding》。',
    },
    h1: { en: 'Tiny Desk AI video generator', zh: 'Tiny Desk AI 视频生成器' },
    lead: {
      en: 'A Tiny Desk AI video generator on ViralReel covers one format: the Outstanding desk fan parody. It is not a catalog of every NPR Tiny Desk concert.',
      zh: 'ViralReel 上的 Tiny Desk AI 视频生成器只覆盖一种格式：Outstanding 桌子的粉丝戏仿。它不是每一场 NPR Tiny Desk 演唱会的目录。',
    },
    guideTitle: {
      en: 'What this generator will and will not make',
      zh: '这个生成器会做什么、不会做什么',
    },
    body: {
      en: [
        'Tiny desk ai video generator is a wide query. People sometimes want a tool that rebuilds any artist’s Tiny Desk. ViralReel does not do that. It does not generate NPR hosts, it does not offer a menu of other Tiny Desk episodes, and it is not affiliated with NPR. The only scene is Charlie Wilson’s Outstanding close, remade as a fan parody from your photos.',
        `Start at ${EN_TEMPLATE}. The template-shaped search is https://www.viralreel.app/tiny-desk-ai-template and the concert-shaped search is https://www.viralreel.app/tiny-desk-concert-ai. ${SLOTS_EN}`,
        'Sets: All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, Uncle Charlie. Default 9:16. The credit cost appears before generate. The output is an MP4 of a new scene. ViralReel does not license or export the Gap Band song. Add the trend sound on TikTok, Reels, or Shorts and label it AI.',
      ],
      zh: [
        'Tiny desk ai video generator 是一个很宽的查询。有人想要一个能重做任何艺人 Tiny Desk 的工具。ViralReel 不做这个。它不生成 NPR 主持人，不提供其他 Tiny Desk 场次的菜单，也与 NPR 没有关系。唯一的场景是 Charlie Wilson 的 Outstanding 收尾，用你的照片做成粉丝戏仿。',
        `从 ${ZH_TEMPLATE} 开始。偏“模板”的搜索在 https://www.viralreel.app/zh/tiny-desk-ai-template ，偏“演唱会”的搜索在 https://www.viralreel.app/zh/tiny-desk-concert-ai 。${SLOTS_ZH}`,
        '阵容：输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie。默认 9:16。积分在生成前出现。输出是一条新场景的 MP4。ViralReel 不授权也不导出 Gap Band 的歌。请在 TikTok、Reels 或 Shorts 里加热梗原声并标成 AI。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can this Tiny Desk AI video generator make other NPR episodes?', zh: '这个 Tiny Desk AI 视频生成器能做其他 NPR 场次吗？' },
        a: {
          en: 'No. Only the Outstanding fan parody, in the six sets on the template. Other Tiny Desk concerts are not a product here.',
          zh: '不能。只有模板上六套阵容里的 Outstanding 粉丝戏仿。其他 Tiny Desk 演唱会不是本站的产品。',
        },
      },
      {
        q: { en: 'What do I download?', zh: '我下载到的是什么？' },
        a: {
          en: 'A new 9:16 MP4. Not the NPR video, not a GIF of it, and not the Gap Band song as a separate file.',
          zh: '一条新的 9:16 MP4。不是 NPR 的视频，不是它的 GIF，也不是单独的 Gap Band 歌曲文件。',
        },
      },
    ],
  },
  {
    keyword: 'outstanding tiny desk meme',
    slug: 'outstanding-tiny-desk-meme',
    title: {
      en: 'Outstanding Tiny Desk Meme – The Joke, Not the Original File',
      zh: 'Outstanding Tiny Desk 梗：笑话本身，不是原始文件',
    },
    description: {
      en: 'outstanding tiny desk meme: the fan parody that puts a new band behind Charlie Wilson’s Outstanding desk. ViralReel does not host the original meme. Make a new MP4 from photos you have permission to use.',
      zh: 'outstanding tiny desk meme：把新乐队放在 Charlie Wilson 的 Outstanding 桌子后面的粉丝戏仿。ViralReel 不托管原始梗文件。用你有权使用的照片做一条新的 MP4。',
    },
    h1: { en: 'Outstanding Tiny Desk meme', zh: 'Outstanding Tiny Desk 梗' },
    lead: {
      en: 'The Outstanding Tiny Desk meme is the mismatch: a celebration song, and a band that should not be celebrating. ViralReel makes a new version. It does not host the original meme.',
      zh: 'Outstanding Tiny Desk 梗是错位：一首庆祝的歌，配上一支不该庆祝的乐队。ViralReel 做的是新版本。它不托管原始梗。',
    },
    guideTitle: {
      en: 'The meme people mean by this word order',
      zh: '这个词序指的是哪个梗',
    },
    body: {
      en: [
        'Outstanding tiny desk meme leads with the song, then the desk. It is the same joke as the page at https://www.viralreel.app/tiny-desk-outstanding-meme. “Outstanding” celebrates. The funniest casts — all-loss coaches on 18 October 2026, a slumping roster, a friend group after a bad weekend — have not earned the chorus. The scene stays fixed so the swap reads in a second.',
        'ViralReel does not sell that TikTok, the NPR concert, or a GIF of either. The fan-parody maker is ' + EN_TEMPLATE + '. ' + SLOTS_EN + ' Do not upload the coaches, players, Charlie Wilson, or a screenshot of the meme.',
        'Six sets carry the joke: All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, Uncle Charlie. Default 9:16. Credits show before generate. Add the trend sound on the platform and the AI label. There is no Outstanding license on this site.',
      ],
      zh: [
        'Outstanding tiny desk meme 先说歌，再说桌子。它和 https://www.viralreel.app/zh/tiny-desk-outstanding-meme 是同一个笑话。《Outstanding》在庆祝。最好笑的阵容——2026 年 10 月 18 日的输球教练、正处低谷的名单、周末崩盘的朋友团——配不上这段副歌。场景固定，所以换人一秒就能看懂。',
        'ViralReel 不出售那条 TikTok、NPR 演唱会，或两者的 GIF。粉丝戏仿工具在 ' + ZH_TEMPLATE + ' 。' + SLOTS_ZH + ' 不要上传教练、球员、Charlie Wilson 或梗的截图。',
        '六套阵容承载这个笑话：输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie。默认 9:16。积分在生成前显示。在平台上加热梗原声和 AI 标注。本站没有《Outstanding》的授权。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I download the original Outstanding Tiny Desk meme?', zh: '能下载原始的 Outstanding Tiny Desk 梗吗？' },
        a: {
          en: 'No. ViralReel does not host the original post. It makes a new fan-parody MP4 from your photos.',
          zh: '不能。ViralReel 不托管原帖。它用你的照片做一条新的粉丝戏仿 MP4。',
        },
      },
      {
        q: { en: 'Is this a different meme from Tiny Desk Outstanding meme?', zh: '它和 Tiny Desk Outstanding 梗是两个梗吗？' },
        a: {
          en: 'No. Same desk, same song, same joke. This page matches the word order that puts Outstanding first.',
          zh: '不是。同一张桌子、同一首歌、同一个笑话。这一页对应把 Outstanding 放在前面的词序。',
        },
      },
    ],
  },
  {
    keyword: 'make tiny desk outstanding ai',
    slug: 'make-tiny-desk-outstanding-ai',
    title: {
      en: 'Make Tiny Desk Outstanding AI – Steps on ViralReel',
      zh: '制作 Tiny Desk Outstanding AI：ViralReel 上的步骤',
    },
    description: {
      en: 'make tiny desk outstanding ai: pick a set, fill Center Lead, Left Role, and Right Role, read the credits, download a 9:16 fan-parody MP4. Not NPR. Add the trend sound and an AI label. No Outstanding license.',
      zh: 'make tiny desk outstanding ai：选一套阵容，填好中间主角、左边角色和右边角色，看清积分，下载 9:16 粉丝戏仿 MP4。不是 NPR。加热梗原声和 AI 标注。不授权《Outstanding》。',
    },
    h1: { en: 'Make Tiny Desk Outstanding AI', zh: '制作 Tiny Desk Outstanding AI' },
    lead: {
      en: 'To make Tiny Desk Outstanding AI on ViralReel you upload three photos into a fixed template. You do not install an app and you do not write a prompt.',
      zh: '在 ViralReel 制作 Tiny Desk Outstanding AI，是把三张照片放进固定模板。不用装 App，也不用写提示词。',
    },
    guideTitle: {
      en: 'How to make one from this search',
      zh: '从这次搜索开始怎么做',
    },
    body: {
      en: [
        `Make tiny desk outstanding ai is the action query. The long version of the steps is ${EN_HOWTO}. The short version is the template at ${EN_TEMPLATE}. ViralReel is not affiliated with NPR, Tiny Desk, Charlie Wilson, or the Gap Band.`,
        `${SLOTS_EN} Then pick All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie. Keep 9:16. The page shows the credit cost before you generate. The result is a new fan parody, not a copy of the concert or the original TikTok.`,
        `Download the MP4. In TikTok, Reels, or Shorts, add the Outstanding sound from that app’s library and turn on the AI-generated label. ViralReel does not license or export that track. If you were about to open CapCut instead, read ${EN_CAPCUT_POST}. Face and lighting checks are at ${EN_PHOTO_POST}.`,
      ],
      zh: [
        `Make tiny desk outstanding ai 是动手查询。步骤的长版本在 ${ZH_HOWTO} 。短版本是 ${ZH_TEMPLATE} 上的模板。ViralReel 与 NPR、Tiny Desk、Charlie Wilson 和 Gap Band 均无关联。`,
        `${SLOTS_ZH} 然后在输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子、真身 Charlie 里选一套。保持 9:16。页面会在生成前显示积分。成片是新的粉丝戏仿，不是演唱会或原始 TikTok 的拷贝。`,
        `下载 MP4。在 TikTok、Reels 或 Shorts 里从该应用曲库加上《Outstanding》，并打开 AI 生成标注。ViralReel 不授权也不导出这段曲目。如果你本来要打开 CapCut，先读 ${ZH_CAPCUT_POST} 。脸和光线的检查在 ${ZH_PHOTO_POST} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What are the steps to make Tiny Desk Outstanding AI?', zh: '制作 Tiny Desk Outstanding AI 的步骤是什么？' },
        a: {
          en: 'Open the ViralReel template, pick one of six sets, upload Center Lead, Left Role, and Right Role, keep 9:16, read the credit cost, generate, then add the trend sound and an AI label on the platform.',
          zh: '打开 ViralReel 模板，六套里选一套，上传中间主角、左边角色和右边角色，保持 9:16，看清积分，生成，然后在平台上加热梗原声和 AI 标注。',
        },
      },
      {
        q: { en: 'Do I need CapCut to make it?', zh: '制作时需要 CapCut 吗？' },
        a: {
          en: 'No. The browser template is enough. CapCut is a separate in-app workflow if you already edit there. ViralReel does not require it.',
          zh: '不需要。浏览器模板就够了。CapCut 是你本来就在那个 App 里剪辑时的另一条流程。ViralReel 不要求用它。',
        },
      },
    ],
  },
];

export function getTinyDeskLongTail(slug: string) {
  return TINY_DESK_LONG_TAILS.find((item) => item.slug === slug);
}

export function resolveLongTailSteps(entry: LongTailEntry): readonly TinyDeskHowToStep[] {
  return entry.steps === 'shared' ? TINY_DESK_HOW_TO_STEPS : entry.steps;
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
          `在 ViralReel 制作：${template} 。上传你有权使用的照片，生成一条粉丝向戏仿，下载 MP4。ViralReel 不授权《Outstanding》或 NPR 的录音。`,
        ],
        [
          '照片位怎么排？',
          '三个位置，按钮写的是中间主角、左边角色、右边角色。主唱放中间主角。左边和右边填乐队，萨克斯独奏在这个场景里，按钮上没有“萨克斯”。参考模型需要三张都传上。不要用未成年人、名人、教练、球员或 NPR 截图。',
        ],
        ['要多少积分？', templateLiveCostAnswer(PRODUCT, true, ctx)],
        ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
        ['生成失败会退积分吗？', failedJobCreditRefundAnswer(true)],
        [
          '这是 NPR 或官方页面吗？',
          '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 NPR、NPR Music、Tiny Desk Concerts、Charlie Wilson、Gap Band、NFL 或任何球队没有隶属、官方或合作关系。这是粉丝向戏仿。',
        ],
      ]
    : [
        [
          'Where do I make it?',
          `Make it on ViralReel at ${template}. Upload photos you have permission to use, generate a fan parody, and download the MP4. ViralReel does not license “Outstanding” or NPR’s recording.`,
        ],
        [
          'How are the photo slots labeled?',
          'Three slots, labeled Center Lead, Left Role, and Right Role. Put the singer in Center Lead. Left Role and Right Role fill the band, which is where the sax solo sits in the scene. The buttons are not labeled sax. Reference models require all three photos. Do not use minors, celebrities, coaches, players, or NPR screenshots.',
        ],
        ['How many credits does it cost?', templateLiveCostAnswer(PRODUCT, false, ctx)],
        ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
        ['Are failed jobs refunded?', failedJobCreditRefundAnswer(false)],
        [
          'Is this an NPR or official page?',
          'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with NPR, NPR Music, Tiny Desk Concerts, Charlie Wilson, the Gap Band, the NFL, or any team. This is a fan parody.',
        ],
      ];
  return [...own, ...shared];
}

export interface TinyDeskLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

export function tinyDeskLinkGroups(zh: boolean): TinyDeskLinkGroup[] {
  return [
    {
      title: zh ? '制作视频' : 'Make the video',
      links: [
        { href: TINY_DESK_TEMPLATE_PATH, label: zh ? 'Tiny Desk Outstanding 模板' : 'Tiny Desk Outstanding template' },
        { href: '/tiny-desk-outstanding-ai-video', label: zh ? 'Tiny Desk Outstanding AI 视频' : 'Tiny Desk Outstanding AI video' },
        { href: '/tiny-desk-outstanding-ai', label: 'Tiny Desk Outstanding AI' },
        { href: '/tiny-desk-ai-template', label: zh ? 'Tiny Desk AI 模板' : 'Tiny Desk AI template' },
        { href: '/tiny-desk-concert-ai', label: zh ? 'Tiny Desk concert AI' : 'Tiny Desk concert AI' },
        { href: '/pricing', label: zh ? '积分包定价' : 'Credit pack pricing' },
        { href: '/subscribe', label: zh ? '月付方案' : 'Monthly plans' },
        { href: '/', label: zh ? '全部模板' : 'All templates' },
      ],
    },
    {
      title: zh ? '梗和搜索词' : 'Meme and searches',
      links: [
        { href: '/tiny-desk-outstanding-meme', label: zh ? 'Tiny Desk Outstanding 梗' : 'Tiny Desk Outstanding meme' },
        { href: '/tiny-desk-outstanding-tiktok', label: 'Tiny Desk Outstanding TikTok' },
        { href: '/charlie-wilson-tiny-desk-ai', label: 'Charlie Wilson Tiny Desk AI' },
        { href: '/all-loss-tiny-desk', label: 'All-Loss Tiny Desk' },
        { href: '/college-football-coaches-tiny-desk', label: zh ? '大学教练 Tiny Desk' : 'College football coaches Tiny Desk' },
        { href: '/nfl-tiny-desk-meme', label: zh ? 'NFL Tiny Desk 梗' : 'NFL Tiny Desk meme' },
        { href: '/washed-anthem-ai', label: zh ? '过气赞歌 AI' : 'Washed anthem AI' },
        { href: '/gap-band-outstanding-ai', label: 'Gap Band Outstanding AI' },
        { href: '/outstanding-tiny-desk-ai', label: zh ? 'Outstanding Tiny Desk AI（词序）' : 'Outstanding Tiny Desk AI (word order)' },
        { href: '/outstanding-tiny-desk-meme', label: zh ? 'Outstanding Tiny Desk 梗' : 'Outstanding Tiny Desk meme' },
        { href: '/npr-tiny-desk-outstanding-ai', label: zh ? 'NPR 搜索免责声明' : 'NPR search disclaimer' },
        { href: '/tiny-desk-outstanding-remix', label: zh ? '桌子翻拍' : 'Desk remix' },
        { href: '/tiny-desk-outstanding-song', label: zh ? '这首歌（不提供下载）' : 'The song (no download)' },
      ],
    },
    {
      title: zh ? '生成器和 CapCut' : 'Generator and CapCut',
      links: [
        { href: '/tiny-desk-outstanding-generator', label: zh ? 'Tiny Desk Outstanding 生成器' : 'Tiny Desk Outstanding generator' },
        { href: '/tiny-desk-outstanding-ai-generator', label: zh ? 'AI 生成器' : 'AI generator' },
        { href: '/tiny-desk-ai-video-generator', label: zh ? 'Tiny Desk AI 视频生成器' : 'Tiny Desk AI video generator' },
        { href: '/make-tiny-desk-outstanding-ai', label: zh ? '制作步骤' : 'Make one' },
        { href: '/outstanding-tiny-desk-ai-video', label: zh ? 'Outstanding Tiny Desk AI 视频' : 'Outstanding Tiny Desk AI video' },
        { href: '/tiny-desk-outstanding-capcut', label: zh ? '和 CapCut 对照' : 'CapCut comparison' },
        { href: '/tiny-desk-outstanding-without-capcut', label: zh ? '不用 CapCut' : 'Without CapCut' },
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: TINY_DESK_POSTS.howTo, label: zh ? '如何制作 Tiny Desk Outstanding AI 视频' : 'How to make a Tiny Desk Outstanding AI video' },
        { href: TINY_DESK_POSTS.explainer, label: zh ? 'All-Loss 和过气赞歌' : 'All-Loss and the washed anthem' },
        { href: TINY_DESK_POSTS.capcut, label: zh ? 'ViralReel 和 CapCut' : 'ViralReel vs CapCut' },
        { href: TINY_DESK_POSTS.photoTips, label: zh ? '三个位置的照片建议' : 'Photo tips for the three slots' },
        { href: TINY_DESK_POSTS.roundup, label: zh ? '2026 年 10 月 AI 梗视频' : 'October 2026 AI meme videos' },
      ],
    },
  ];
}

export const TINY_DESK_LONG_TAIL_ROUTES = TINY_DESK_LONG_TAILS.map((item) => ({
  path: `/${item.slug}`,
  priority: 0.7,
  changeFrequency: 'weekly' as const,
}));
