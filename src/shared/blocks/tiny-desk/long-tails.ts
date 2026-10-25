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
} as const;

const PRODUCT = { en: 'Tiny Desk Outstanding', zh: 'Tiny Desk Outstanding' };

const EN_TEMPLATE = 'https://www.viralreel.app/tiny-desk-outstanding-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/tiny-desk-outstanding-ai-template';

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
      ],
    },
    {
      title: zh ? '指南' : 'Guides',
      links: [
        { href: TINY_DESK_POSTS.howTo, label: zh ? '如何制作 Tiny Desk Outstanding AI 视频' : 'How to make a Tiny Desk Outstanding AI video' },
        { href: TINY_DESK_POSTS.explainer, label: zh ? 'All-Loss 和过气赞歌' : 'All-Loss and the washed anthem' },
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
