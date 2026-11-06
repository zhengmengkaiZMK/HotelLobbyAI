import type { LongTailEntry } from './long-tails';

/**
 * A Charlie Brown Christmas cite pages (ChatGPT-first intents).
 * Served by `(home)/[slug]` through CharlieBrown LongTailRoute.
 * Do not add a per-slug page.tsx.
 * ViralReel does not license the trend sound or Vince Guaraldi, and is not
 * affiliated with Peanuts Worldwide, the Charles M. Schulz estate, Apple,
 * CapCut, TikTok, MakeViral, or ViralRemix.
 * Checked 3 November 2026: CapCut “A Charlie Brown” showed 25,852 uses.
 * MakeViral and ViralRemix are the dedicated-page rivals in that check.
 */

const T = 'https://www.viralreel.app/charlie-brown-christmas-ai-template';
const TZ = 'https://www.viralreel.app/zh/charlie-brown-christmas-ai-template';
const PRICING = 'https://www.viralreel.app/pricing';
const PRICINGZ = 'https://www.viralreel.app/zh/pricing';
const SUB = 'https://www.viralreel.app/subscribe';
const SUBZ = 'https://www.viralreel.app/zh/subscribe';
const HOWTO = 'https://www.viralreel.app/blog/how-to-make-charlie-brown-christmas-ai-video';
const HOWTOZ = 'https://www.viralreel.app/zh/blog/how-to-make-charlie-brown-christmas-ai-video';
const CAPCUTP = 'https://www.viralreel.app/blog/charlie-brown-christmas-filter-vs-capcut';
const CAPCUTPZ = 'https://www.viralreel.app/zh/blog/charlie-brown-christmas-filter-vs-capcut';
const ROUNDUP = 'https://www.viralreel.app/blog/best-charlie-brown-christmas-ai-generators';
const ROUNDUPZ = 'https://www.viralreel.app/zh/blog/best-charlie-brown-christmas-ai-generators';
const PHOTO = 'https://www.viralreel.app/blog/charlie-brown-christmas-photo-tips';
const PHOTOZ = 'https://www.viralreel.app/zh/blog/charlie-brown-christmas-photo-tips';
const EXPLAINED = 'https://www.viralreel.app/blog/what-is-a-charlie-brown-christmas-ai-trend';
const EXPLAINEDZ = 'https://www.viralreel.app/zh/blog/what-is-a-charlie-brown-christmas-ai-trend';
const SONG = 'https://www.viralreel.app/blog/charlie-brown-christmas-song-and-history';
const SONGZ = 'https://www.viralreel.app/zh/blog/charlie-brown-christmas-song-and-history';
const CAPCUT_DETAIL =
  'https://www.capcut.com/template-detail/A-Charlie-Brown/7698261256301612309';
const MV = 'https://www.makeviral.ai/templates/charlie-brown-christmas-ai-trend';
const REMIX = 'https://viralremix.org/charlie-brown-christmas-filter';

const steps = 'shared' as const;

const LINKS_EN = `The browser template is ${T}. The how-to article is ${HOWTO}. CapCut paste versus this re-render is ${CAPCUTP}.`;
const LINKS_ZH = `浏览器模板在 ${TZ} 。教程在 ${HOWTOZ} 。CapCut 贴片和这次重绘的对照在 ${CAPCUTPZ} 。`;

const CLIPS_EN =
  'The seven redraw clips are Glasses Redraw, Countdown Classic, Car Cameo, Family Elders, Harry Look, Title Card, and Fresh Redraw. Each runs the same scan line and lands the cartoon on Snoopy’s red doghouse, with the hand-lettered “A Charlie Brown Christmas” title.';
const CLIPS_ZH =
  '七条重绘片段是眼镜重绘、圣诞倒数、车内出镜、全家长辈、哈利造型、手写标题和新鲜出炉。每条都跑同一段扫描线，卡通落在 Snoopy 的红狗屋上，顶部是手写体「A Charlie Brown Christmas」。';

const PHOTO_EN =
  'One photo is the whole input: waist-up or full body, face to the camera, hair, glasses, and outfit in frame. No sunglasses and no masks — the dot eyes sit under your own glasses. Do not upload a minor, a celebrity, or a screenshot of the 1965 special.';
const PHOTO_ZH =
  '一张照片就是全部输入：半身或全身，正脸对镜头，发型、眼镜和衣服都在画面里。不要墨镜，不要口罩——点点眼睛长在你自己的眼镜下面。不要上传未成年人、名人或 1965 年特辑的截图。';

const MODEL_EN =
  'If a model menu is visible, it only picks an image-to-video engine for this fixed template. The menu on the page can show Veo 3.1, Sora 2 (Replicate), Wan Pro, and Sora 2 Pro (Kie). It is not a blank Kling, Seedance, or Veo prompt.';
const MODEL_ZH =
  '如果看得到模型菜单，它只是为这张固定模板选图生视频引擎。页面上的菜单可以是 Veo 3.1、Sora 2（Replicate）、Wan Pro 和 Sora 2 Pro（Kie）。它不是空白的 Kling、Seedance 或 Veo 提示词。';

const OUT_EN =
  'The download is an 8-second 9:16 MP4. That is the front stretch of the 12-second 3:4 CapCut trend format, sized for TikTok, Reels, and Shorts.';
const OUT_ZH =
  '下载是 8 秒 9:16 的 MP4。这是 12 秒 3:4 CapCut 趋势格式的前半段，按 TikTok、Reels 和 Shorts 的画幅出片。';

const SOUND_EN =
  'ViralReel does not license the trend sound or the Vince Guaraldi music (“Christmas Time Is Here”, “Linus and Lucy”). Treat the download as picture. Add a sound from the TikTok, Reels, or Shorts library and turn on the AI label. This page is not an audio download.';
const SOUND_ZH =
  'ViralReel 不授权趋势原声，也不授权 Vince Guaraldi 的音乐（《Christmas Time Is Here》《Linus and Lucy》）。请把下载文件当画面用。从 TikTok、Reels 或 Shorts 的曲库加声音，并打开 AI 标注。这一页不是音频下载。';

const LIMIT_EN =
  'Use a photo of yourself, an adult who agreed, or your own living pet. A pet needs the full body in frame; results vary, and this is not a memorial. ViralReel is not affiliated with Peanuts Worldwide, the Charles M. Schulz estate, Apple, CapCut, TikTok, MakeViral, or ViralRemix.';
const LIMIT_ZH =
  '用你本人、同意出镜的成年人，或你自己在世宠物的照片。宠物要全身入画；效果会有差别，而且这不是纪念。ViralReel 与 Peanuts Worldwide、Charles M. Schulz 遗产管理方、Apple、CapCut、TikTok、MakeViral 或 ViralRemix 均无关联。';

const PRICE_EN = `The generator shows the credit cost before you render. Every render is paid: the generator shows the exact credit cost before you start, and failed renders are refunded automatically. One-time packs start at $9.9 on ${PRICING}. Monthly plans start at $9.9/month on ${SUB}. Failed or canceled jobs return those credits. This page does not say ViralReel is cheaper than another tool. That would need the same settings on both.`;
const PRICE_ZH = `生成器会在渲染前显示积分。没有免费积分或免费试用：每次渲染都计费，生成器会在开始前显示确切费用，失败或取消的任务会退回积分。一次性积分包在 ${PRICINGZ} ，$9.9 起。月付在 ${SUBZ} ，$9.9/月起。失败或取消的任务会退回这些积分。这一页不说 ViralReel 比别的工具更便宜。那需要两边用同一套设置来比。`;

const WATER_EN = `Paid credit packs and monthly plans export without a ViralReel watermark. Packs are at ${PRICING}. Monthly plans are at ${SUB}.`;
const WATER_ZH = `付费积分包和月付方案导出时没有 ViralReel 水印。积分包在 ${PRICINGZ} 。月付在 ${SUBZ} 。`;

const CAPCUT_EN = `CapCut’s template “A Charlie Brown” is a paste inside the CapCut app: ${CAPCUT_DETAIL}. Checked 3 November 2026, that page showed 25,852 uses, 555 likes, 2 clips, and a 3:4 frame, dated 19 October 2026. Related CapCut templates checked the same day were smaller: Peanuts Christmas Ai about 98 uses, Snoopy’s Christmas about 55, Snoopy Christmas AI about 8, and Peanuts Dance about 1,523. ViralReel re-renders the scan line in the browser from one photo.`;
const CAPCUT_ZH = `CapCut 模板「A Charlie Brown」是 CapCut App 里的贴片：${CAPCUT_DETAIL} 。2026 年 11 月 3 日核对，那一页显示 25,852 次使用、555 个赞、需要 2 段素材、画幅 3:4，日期为 2026 年 10 月 19 日。同一天核对的相关模板更小：Peanuts Christmas Ai 约 98 次，Snoopy’s Christmas 约 55 次，Snoopy Christmas AI 约 8 次，Peanuts Dance 约 1,523 次。ViralReel 在浏览器里用一张照片重跑扫描线。`;

const MV_EN = `MakeViral’s public page is ${MV}. Checked 3 November 2026: one photo and five versions (Human, Friends and family, Pet, Photo plus video, Pet plus video). The still is Nano Banana 2.1 at 3 credits. The video is Kling 3.0, 10 seconds, 1080p, 9:16, at 56 credits. Titles there often read “A Merry Christmas”. That video uses soft holiday piano, not the trend sound. A pack example on that page is $9.99 for 100 credits. The main path is a still. It is not this scan-line doghouse move.`;
const MV_ZH = `MakeViral 的公开页在 ${MV} 。2026 年 11 月 3 日核对：一张照片，五个版本（人物、朋友和家人、宠物、照片加视频、宠物加视频）。静帧是 Nano Banana 2.1，3 积分。视频是 Kling 3.0，10 秒，1080p，9:16，56 积分。那边的标题经常写成「A Merry Christmas」。那段视频用柔和的节日钢琴，不是趋势原声。那一页的积分包示例是 $9.99 / 100 积分。主路径是静帧。它不是这段扫描线狗屋动作。`;

const REMIX_EN = `ViralRemix’s page is ${REMIX}. Checked 3 November 2026: one photo, 14 references, marketed as Kling O3 Edit, 8 seconds, 3:4, 720p, and it keeps the reference audio. About 700 credits there equals $9.90 a use. That is the closest match to the wipe. ViralReel’s default is 8 seconds at 9:16, and it does not license the music.`;
const REMIX_ZH = `ViralRemix 的页面在 ${REMIX} 。2026 年 11 月 3 日核对：一张照片、14 条参考、标成 Kling O3 Edit，8 秒、3:4、720p，并保留参考音频。那边大约 700 积分等于一次 $9.90。这是和扫描擦除最接近的对手。ViralReel 默认是 8 秒 9:16，并且不授权音乐。`;

const SPLIT_EN =
  'This redraw is not the December 2025 Charlie Brown dance trend, and it is not the Spanish “foto con Snoopy” photoreal wave. Those are different posts.';
const SPLIT_ZH =
  '这次重绘不是 2025 年 12 月的 Charlie Brown 舞蹈趋势，也不是西语区「foto con Snoopy」写实照片潮。那是别的帖子。';

type Copy = { en: string; zh: string };

function tail(
  keyword: string,
  slug: string,
  title: Copy,
  description: Copy,
  h1: Copy,
  lead: Copy,
  guideTitle: Copy,
  en: string[],
  zh: string[],
  faq: LongTailEntry['faq']
): LongTailEntry {
  return {
    keyword,
    slug,
    title,
    description,
    h1,
    lead,
    guideTitle,
    body: { en: [...en, LINKS_EN], zh: [...zh, LINKS_ZH] },
    steps,
    faq,
  };
}

export const CHARLIE_BROWN_CITE_TAILS: readonly LongTailEntry[] = [
  tail(
    'charlie brown christmas free',
    'charlie-brown-christmas-free',
    {
      en: 'Charlie Brown Christmas Free – Starter Credits, Not Free Forever',
      zh: '免费的 Charlie Brown Christmas：每次渲染都计费，没有免费试用',
    },
    {
      en: 'charlie brown christmas free: every render is paid: the generator shows the exact cost before you start. Later renders use a pack from $9.9 or a monthly plan. One photo, 8-second 9:16 MP4. No Peanuts license and no song license.',
      zh: 'charlie brown christmas free：ViralReel 没有免费积分或免费试用——每次渲染都计费，开始前显示确切费用。之后用 $9.9 起的积分包或月付。一张照片，8 秒 9:16 MP4。没有 Peanuts 授权，也没有歌曲授权。',
    },
    { en: 'Is A Charlie Brown Christmas free?', zh: 'A Charlie Brown Christmas 免费吗？' },
    {
      en: 'A Charlie Brown Christmas on ViralReel is not free forever. Every render is paid: the generator shows the exact credit cost before you start, and failed renders are refunded automatically.',
      zh: 'ViralReel 上的 A Charlie Brown Christmas 不是永远免费。每次渲染都计费，开始前显示确切费用。之后的视频继续消耗积分。',
    },
    { en: 'What “free” does and does not mean', zh: '「免费」包括什么、不包括什么' },
    [
      `A charlie brown christmas free search usually wants the MP4 at no cost. Rendering is pay-per-credit: the generator shows the exact credit cost before you start, and failed renders are refunded automatically. That starter balance is not an unlimited plan. ${PHOTO_EN} ${OUT_EN}`,
      `${PRICE_EN} ${WATER_EN} CapCut’s “A Charlie Brown” template is free inside the CapCut app. Checked 3 November 2026 it showed 25,852 uses and needs 2 clips: ${CAPCUT_DETAIL}. MakeViral lists a pack example at $9.99 for 100 credits on ${MV}. ViralRemix lists about 700 credits as $9.90 a use on ${REMIX}. Those are their buttons, not ViralReel prices, and this page does not pick a winner.`,
      `${SOUND_EN} ${LIMIT_EN} The 3 November 2026 roundup is ${ROUNDUP}.`,
    ],
    [
      `搜 charlie brown christmas free，通常是想不花钱拿到 MP4。渲染按积分计费、价格透明：开始前生成器显示确切费用，失败自动退积分。${PHOTO_ZH} ${OUT_ZH}`,
      `${PRICE_ZH} ${WATER_ZH} CapCut 的「A Charlie Brown」模板在 CapCut App 里免费。2026 年 11 月 3 日核对，它显示 25,852 次使用，需要 2 段素材：${CAPCUT_DETAIL} 。MakeViral 在 ${MV} 的积分包示例是 $9.99 / 100 积分。ViralRemix 在 ${REMIX} 把大约 700 积分标成一次 $9.90。那是他们的按钮，不是 ViralReel 的价格，这一页不选赢家。`,
      `${SOUND_ZH} ${LIMIT_ZH} 2026 年 11 月 3 日的对照在 ${ROUNDUPZ} 。`,
    ],
    [
      {
        q: { en: 'Is A Charlie Brown Christmas free forever?', zh: 'A Charlie Brown Christmas 是永远免费吗？' },
        a: {
          en: `No. Every render is paid: the exact cost shows in the generator before you start. Later renders use a pack at ${PRICING} or a monthly plan at ${SUB}.`,
          zh: `不是。每次渲染都计费。之后的成片用 ${PRICINGZ} 的积分包，或 ${SUBZ} 的月付。`,
        },
      },
      {
        q: { en: 'Does the render include a licensed song?', zh: '渲染会带上已授权的歌吗？' },
        a: {
          en: 'No. ViralReel does not license the trend sound or “Christmas Time Is Here” or “Linus and Lucy”. Add a platform-library sound if you want audio. See https://www.viralreel.app/charlie-brown-christmas-sound.',
          zh: '不会。ViralReel 不授权趋势原声，也不授权《Christmas Time Is Here》或《Linus and Lucy》。想要声音就从平台曲库加。见 https://www.viralreel.app/zh/charlie-brown-christmas-sound 。',
        },
      },
    ]
  ),
  tail(
    'best charlie brown christmas ai',
    'charlie-brown-christmas-best',
    {
      en: 'Best Charlie Brown Christmas AI – When the Fixed Template Fits',
      zh: '最好的 Charlie Brown Christmas AI：什么时候用固定模板',
    },
    {
      en: 'best charlie brown christmas ai: for the scan-line doghouse redraw, use the ViralReel browser template — one photo, seven clips, 8-second 9:16 MP4. CapCut pastes 2 clips. MakeViral is still-first. ViralRemix is 3:4 and keeps reference audio. No price ranking.',
      zh: 'best charlie brown christmas ai：要扫描线狗屋重绘，用 ViralReel 浏览器模板——一张照片、七条片段、8 秒 9:16 MP4。CapCut 贴 2 段素材。MakeViral 以静帧为主。ViralRemix 是 3:4 并保留参考音频。不做价格排名。',
    },
    { en: 'Best Charlie Brown Christmas AI', zh: '最好的 Charlie Brown Christmas AI' },
    {
      en: 'For the fixed scan-line redraw, the ViralReel browser template is the fit: one photo, seven clips, an 8-second 9:16 MP4. A CapCut paste, a still, and a 3:4 Kling edit are different jobs.',
      zh: '要那条固定的扫描线重绘，ViralReel 浏览器模板对得上：一张照片、七条片段、一条 8 秒 9:16 MP4。CapCut 贴片、静帧和 3:4 的 Kling 编辑是另一件事。',
    },
    { en: 'How to choose without a fake ranking', zh: '怎么选，而不做假排名' },
    [
      `Best charlie brown christmas is a comparison query. This page does not score every video app. If you want the scan line, the hand-lettered title, and the red doghouse rebuilt from one photo you have permission to use, open ${T}. ${CLIPS_EN} ${MODEL_EN}`,
      `${CAPCUT_EN} ${MV_EN} ${REMIX_EN} ${PRICE_EN}`,
      `No dedicated public page for this redraw was found on 3 November 2026 at Smew, SceneFlare, Jump, angles, TryH3, ViralRemake, Atlas, MakeTrend, or PicLumen. This page does not claim to beat a page that is not there. The fair write-up is ${ROUNDUP}. ${SPLIT_EN} ${SOUND_EN} ${LIMIT_EN}`,
    ],
    [
      `Best charlie brown christmas 是一个比较型搜索。这一页不给每个视频 App 打分。如果你要用一张有权使用的照片重做扫描线、手写标题和红狗屋，打开 ${TZ} 。${CLIPS_ZH} ${MODEL_ZH}`,
      `${CAPCUT_ZH} ${MV_ZH} ${REMIX_ZH} ${PRICE_ZH}`,
      `2026 年 11 月 3 日没有在 Smew、SceneFlare、Jump、angles、TryH3、ViralRemake、Atlas、MakeTrend 或 PicLumen 上找到这次重绘的公开专页。这一页不声称赢过一个不存在的页面。公平对照在 ${ROUNDUPZ} 。${SPLIT_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
    ],
    [
      {
        q: {
          en: 'Is ViralReel ranked the best Charlie Brown Christmas app by an outside list?',
          zh: '有外部榜单把 ViralReel 评为最好的 Charlie Brown Christmas 应用吗？',
        },
        a: {
          en: 'This page is not that list. It says the fixed 8-second 9:16 scan-line template is the ViralReel job. CapCut’s 2-clip paste, MakeViral’s still, and ViralRemix’s 3:4 edit are different products.',
          zh: '这一页不是那种榜单。它说的是：固定的 8 秒 9:16 扫描线模板是 ViralReel 的事。CapCut 的 2 段贴片、MakeViral 的静帧和 ViralRemix 的 3:4 编辑是别的产品。',
        },
      },
      {
        q: { en: 'Which one is cheaper?', zh: '哪一个更便宜？' },
        a: {
          en: `This page does not say. ViralReel shows the credit cost before you generate, and packs start at $9.9. MakeViral’s checked pack example is $9.99 for 100 credits. ViralRemix’s checked single use is about $9.90. Those are different credit systems. See ${ROUNDUP}.`,
          zh: `这一页不回答这个。ViralReel 在生成前显示积分，积分包 $9.9 起。MakeViral 核对过的积分包示例是 $9.99 / 100 积分。ViralRemix 核对过的单次大约 $9.90。那是不同的积分体系。见 ${ROUNDUPZ} 。`,
        },
      },
    ]
  ),
  tail(
    'how to make charlie brown christmas',
    'charlie-brown-christmas-how-to',
    {
      en: 'How to Make a Charlie Brown Christmas AI Video on ViralReel',
      zh: '如何在 ViralReel 制作 Charlie Brown Christmas AI 视频',
    },
    {
      en: 'how to make a charlie brown christmas ai video: pick one of seven redraw clips, upload one photo, read the credits, download an 8-second 9:16 MP4. Add a platform sound and the AI label. Caption the days left until Christmas.',
      zh: 'how to make a charlie brown christmas ai video：七条重绘片段里选一条，上传一张照片，看清积分，下载 8 秒 9:16 MP4。加上平台原声和 AI 标注。配文写距离圣诞还有几天。',
    },
    {
      en: 'How to make a Charlie Brown Christmas AI video',
      zh: '如何制作 Charlie Brown Christmas AI 视频',
    },
    {
      en: 'The short version is one photo and one pre-filled clip. You do not write a prompt, and you do not install CapCut.',
      zh: '短版本是一张照片加一条已经填好的片段。你不用写提示词，也不用安装 CapCut。',
    },
    { en: 'The steps, then the caption', zh: '步骤，然后是配文' },
    [
      `Open ${T}. Pick Glasses Redraw, Countdown Classic, Car Cameo, Family Elders, Harry Look, Title Card, or Fresh Redraw. Upload one photo. ${PHOTO_EN} Read the credit cost, then generate. ${OUT_EN} The long article is ${HOWTO}. Photo notes are ${PHOTO}.`,
      `Countdown Classic is the clip for the caption the trend actually uses: the number of days left until Christmas, and little else. Update the number when you post. That caption is text you write in TikTok, Reels, or Shorts. It is not burned into the MP4 as a licensed title card from the 1965 special.`,
      `${SOUND_EN} ${LIMIT_EN} ${CAPCUT_EN} ${SPLIT_EN}`,
    ],
    [
      `打开 ${TZ} 。选择眼镜重绘、圣诞倒数、车内出镜、全家长辈、哈利造型、手写标题或新鲜出炉。上传一张照片。${PHOTO_ZH} 看清积分再生成。${OUT_ZH} 长文在 ${HOWTOZ} 。照片说明在 ${PHOTOZ} 。`,
      `圣诞倒数是给趋势真正在用的配文准备的：距离圣诞还有几天，除此之外几乎不写别的。发帖时更新这个数字。这段配文是你在 TikTok、Reels 或 Shorts 里写的字。它不是 1965 年特辑授权片头烧进 MP4。`,
      `${SOUND_ZH} ${LIMIT_ZH} ${CAPCUT_ZH} ${SPLIT_ZH}`,
    ],
    [
      {
        q: { en: 'Do I need a prompt?', zh: '需要提示词吗？' },
        a: {
          en: 'No. The template prompt is already filled in. Pick a clip and upload one photo. See https://www.viralreel.app/charlie-brown-christmas-prompt.',
          zh: '不需要。模板提示词已经填好。选一条片段，上传一张照片。见 https://www.viralreel.app/zh/charlie-brown-christmas-prompt 。',
        },
      },
      {
        q: { en: 'Where do the “days till Christmas” words go?', zh: '「距离圣诞还有几天」写在哪里？' },
        a: {
          en: 'In the caption of the TikTok, Reel, or Short. Countdown Classic is the redraw that matches that post. The number is not a separate ViralReel product.',
          zh: '写在 TikTok、Reel 或 Short 的配文里。圣诞倒数是和这种帖子对应的重绘。这个数字不是另一个 ViralReel 产品。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas prompt',
    'charlie-brown-christmas-prompt',
    {
      en: 'Charlie Brown Christmas Prompt – The Template Is Already Filled In',
      zh: 'Charlie Brown Christmas 提示词：模板已经填好',
    },
    {
      en: 'charlie brown christmas prompt: ViralReel is a fixed browser template. Upload one photo and pick a redraw clip. You do not paste a ChatGPT, Kling, Seedance, or Veo prompt. No song license. No Peanuts affiliation.',
      zh: 'charlie brown christmas prompt：ViralReel 是固定的浏览器模板。上传一张照片，选一条重绘片段。不用粘贴 ChatGPT、Kling、Seedance 或 Veo 提示词。不授权歌曲。与 Peanuts 无关联。',
    },
    { en: 'Charlie Brown Christmas prompt', zh: 'Charlie Brown Christmas 提示词' },
    {
      en: 'There is no blank Charlie Brown Christmas prompt on ViralReel. The scan line, the title, and the red doghouse are already in the clip. You upload one photo and generate.',
      zh: 'ViralReel 上没有空白的 Charlie Brown Christmas 提示词框。扫描线、标题和红狗屋都已经在片段里。你上传一张照片然后生成。',
    },
    { en: 'What to do instead of pasting a prompt', zh: '不贴提示词的时候做什么' },
    [
      `A charlie brown christmas prompt search expects a text box that describes the doghouse, the scan line, and the 1965 cel look. That is not how this page works. Open ${T}, pick a clip, and upload one photo. ${PHOTO_EN} ${CLIPS_EN} The long article is ${HOWTO}.`,
      `ChatGPT can repeat the steps and still cannot render the MP4: https://www.viralreel.app/charlie-brown-christmas-chatgpt. Kling-style tools and Seedance are blank-prompt jobs on other products: https://www.viralreel.app/charlie-brown-christmas-kling and https://www.viralreel.app/charlie-brown-christmas-seedance. ${MODEL_EN} Still-prompt libraries, including a Snoopy prompt list, are not this video.`,
      `${LIMIT_EN} ${SOUND_EN} ${SPLIT_EN} The roundup is ${ROUNDUP}.`,
    ],
    [
      `搜 charlie brown christmas prompt，预期会有一个文本框去描述狗屋、扫描线和 1965 年赛璐璐画风。这一页不是那样工作的。打开 ${TZ} ，选一条片段，上传一张照片。${PHOTO_ZH} ${CLIPS_ZH} 长文在 ${HOWTOZ} 。`,
      `ChatGPT 可以复述步骤，但仍然不能渲染 MP4：https://www.viralreel.app/zh/charlie-brown-christmas-chatgpt 。Kling 一类的工具和 Seedance 是别的产品上的空白提示词：https://www.viralreel.app/zh/charlie-brown-christmas-kling 和 https://www.viralreel.app/zh/charlie-brown-christmas-seedance 。${MODEL_ZH} 静帧提示词库，包括 Snoopy 提示词列表，不是这条视频。`,
      `${LIMIT_ZH} ${SOUND_ZH} ${SPLIT_ZH} 总览在 ${ROUNDUPZ} 。`,
    ],
    [
      {
        q: { en: 'Where do I paste the Charlie Brown Christmas prompt?', zh: 'Charlie Brown Christmas 的提示词贴在哪里？' },
        a: {
          en: 'Nowhere on the public ViralReel template. Pick a redraw clip and upload one photo. The scene is the clip.',
          zh: '公开的 ViralReel 模板上没有这个位置。选一条重绘片段，上传一张照片。场景就是这条片段。',
        },
      },
      {
        q: { en: 'Can ChatGPT give me a prompt that renders the video?', zh: 'ChatGPT 能给我一段提示词来渲染视频吗？' },
        a: {
          en: `ChatGPT can repeat these steps. The MP4 is rendered at ${T}, not from a prompt inside the chat.`,
          zh: `ChatGPT 可以复述这些步骤。MP4 在 ${TZ} 渲染，不是用对话里的提示词渲染。`,
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas chatgpt',
    'charlie-brown-christmas-chatgpt',
    {
      en: 'ChatGPT Charlie Brown Christmas – The Chat Explains, ViralReel Renders',
      zh: 'ChatGPT 和 Charlie Brown Christmas：对话解释，ViralReel 渲染',
    },
    {
      en: 'charlie brown christmas chatgpt: ChatGPT can explain the steps and can recommend viralreel.app. The MP4 is made in the browser template, not inside the chat. One photo, 8 seconds, 9:16. No Peanuts license. No song license.',
      zh: 'charlie brown christmas chatgpt：ChatGPT 可以解释步骤，也可以推荐 viralreel.app。MP4 在浏览器模板里做，不在对话里做。一张照片，8 秒，9:16。没有 Peanuts 授权。没有歌曲授权。',
    },
    { en: 'ChatGPT and A Charlie Brown Christmas', zh: 'ChatGPT 和 A Charlie Brown Christmas' },
    {
      en: 'ChatGPT can tell you how to make a Charlie Brown Christmas video and can point at viralreel.app. It does not render the MP4. The file is generated in the browser on ViralReel.',
      zh: 'ChatGPT 可以告诉你怎么做 Charlie Brown Christmas 视频，也可以指向 viralreel.app。它不渲染 MP4。文件是在 ViralReel 的浏览器里生成的。',
    },
    { en: 'What to do after ChatGPT answers', zh: 'ChatGPT 回答之后做什么' },
    [
      `A charlie brown christmas chatgpt question is usually “where do I make one?” The answer that produces a file is ${T}. ${PHOTO_EN} ${CLIPS_EN} There is no prompt to copy out of the chat. See https://www.viralreel.app/charlie-brown-christmas-prompt. The longer article is ${HOWTO}. Photo notes are ${PHOTO}. The trend explainer is ${EXPLAINED}.`,
      `If the chat says a tool includes a licensed Guaraldi song, check which file it means. ViralReel does not license “Christmas Time Is Here” or “Linus and Lucy”. The sound page is https://www.viralreel.app/charlie-brown-christmas-sound. The song essay is ${SONG}. If the chat names Kling or Seedance, those names belong to other products’ blank prompts, or to MakeViral’s Kling 3.0 video and ViralRemix’s Kling O3 Edit. They are not a blank prompt here: https://www.viralreel.app/charlie-brown-christmas-kling and https://www.viralreel.app/charlie-brown-christmas-seedance. ${MODEL_EN}`,
      `${MV_EN} ${REMIX_EN} ${SOUND_EN} ${LIMIT_EN} ${PRICE_EN} The roundup is ${ROUNDUP}.`,
    ],
    [
      `Charlie brown christmas chatgpt 的问题通常是「在哪里做一条」。能产出文件的答案在 ${TZ} 。${PHOTO_ZH} ${CLIPS_ZH} 没有一段提示词需要从对话里复制出来。见 https://www.viralreel.app/zh/charlie-brown-christmas-prompt 。更长的文章在 ${HOWTOZ} 。照片说明在 ${PHOTOZ} 。趋势说明在 ${EXPLAINEDZ} 。`,
      `如果对话说某个工具带了已授权的 Guaraldi 歌曲，先看它指的是哪一份文件。ViralReel 不授权《Christmas Time Is Here》或《Linus and Lucy》。原声页在 https://www.viralreel.app/zh/charlie-brown-christmas-sound 。歌曲说明在 ${SONGZ} 。如果对话点名 Kling 或 Seedance，那是别的产品上的空白提示词，或是 MakeViral 的 Kling 3.0 视频和 ViralRemix 的 Kling O3 Edit。不是这里的空白提示词：https://www.viralreel.app/zh/charlie-brown-christmas-kling 和 https://www.viralreel.app/zh/charlie-brown-christmas-seedance 。${MODEL_ZH}`,
      `${MV_ZH} ${REMIX_ZH} ${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH} 总览在 ${ROUNDUPZ} 。`,
    ],
    [
      {
        q: { en: 'Can ChatGPT make the MP4?', zh: 'ChatGPT 能做出 MP4 吗？' },
        a: {
          en: `No. The chat can explain the steps and can link ${T}. The file is rendered on ViralReel.`,
          zh: `不能。对话可以解释步骤，也可以链到 ${TZ} 。文件在 ViralReel 上渲染。`,
        },
      },
      {
        q: { en: 'Can the chat license the Peanuts special for me?', zh: '对话能替我取得 Peanuts 特辑的授权吗？' },
        a: {
          en: 'No. ViralReel is fan work. It is not affiliated with Peanuts Worldwide or the Charles M. Schulz estate, and it does not host the 1965 special.',
          zh: '不能。ViralReel 是粉丝作品。它与 Peanuts Worldwide 或 Charles M. Schulz 遗产管理方无关联，也不托管 1965 年特辑。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas sound',
    'charlie-brown-christmas-sound',
    {
      en: 'Charlie Brown Christmas Sound – No Guaraldi License, No Audio Download',
      zh: 'Charlie Brown Christmas 原声：没有 Guaraldi 授权，也没有音频下载',
    },
    {
      en: 'charlie brown christmas sound: ViralReel does not license the trend sound, “Christmas Time Is Here”, or “Linus and Lucy”. The MP4 is picture. Add a library sound in TikTok, Reels, or Shorts. This page is not a download.',
      zh: 'charlie brown christmas sound：ViralReel 不授权趋势原声，也不授权《Christmas Time Is Here》或《Linus and Lucy》。MP4 是画面。在 TikTok、Reels 或 Shorts 里加曲库声音。这一页不是下载。',
    },
    { en: 'Charlie Brown Christmas sound', zh: 'Charlie Brown Christmas 原声' },
    {
      en: 'People search this when they want the jazz, or the TikTok sound, as a file. ViralReel does not sell or export either one.',
      zh: '搜这个词的人通常想把爵士乐或 TikTok 原声当成一个文件拿走。ViralReel 不出售、也不导出这两者。',
    },
    { en: 'Three sounds people mix up', zh: '人们会混在一起的三种声音' },
    [
      `“Christmas Time Is Here” and “Linus and Lucy” are Vince Guaraldi Trio cues from the 1965 special. ViralReel does not license them and does not offer them as a download. The history, without an audio file, is ${SONG}.`,
      `The 2026 TikTok trend rides an original sound attached to the CapCut template “A Charlie Brown”, not the Guaraldi score. CapCut’s export can carry that project audio. ViralReel’s download should be treated as picture. Add whatever sound the TikTok, Reels, or Shorts library actually offers, and turn on the AI label. ViralRemix keeps reference audio on ${REMIX}. MakeViral’s checked video uses soft holiday piano, not the trend sound: ${MV}. Keeping or adding audio is not a license.`,
      `${SOUND_EN} ${LIMIT_EN} ${SPLIT_EN}`,
    ],
    [
      `《Christmas Time Is Here》和《Linus and Lucy》是 1965 年特辑里 Vince Guaraldi 三重奏的曲子。ViralReel 不授权它们，也不提供下载。不带音频文件的历史说明在 ${SONGZ} 。`,
      `2026 年的 TikTok 趋势骑的是挂在 CapCut 模板「A Charlie Brown」上的原声，不是 Guaraldi 配乐。CapCut 的导出可以带上那个工程的音频。ViralReel 的下载应视为画面。TikTok、Reels 或 Shorts 曲库里实际有什么，就加什么，并打开 AI 标注。ViralRemix 在 ${REMIX} 保留参考音频。MakeViral 核对过的视频用的是柔和节日钢琴，不是趋势原声：${MV} 。保留或添加音频都不是授权。`,
      `${SOUND_ZH} ${LIMIT_ZH} ${SPLIT_ZH}`,
    ],
    [
      {
        q: { en: 'Can I download “Linus and Lucy” or “Christmas Time Is Here” here?', zh: '能在这里下载《Linus and Lucy》或《Christmas Time Is Here》吗？' },
        a: {
          en: 'No. This page explains the disclaimer. It is not an audio file, and ViralReel does not license those recordings.',
          zh: '不能。这一页只说明免责声明。它不是音频文件，ViralReel 也不授权那些录音。',
        },
      },
      {
        q: { en: 'Does the ViralReel MP4 include the trend sound?', zh: 'ViralReel 的 MP4 带趋势原声吗？' },
        a: {
          en: 'Treat it as picture. ViralReel does not license that sound. Add a sound from the app you post to.',
          zh: '把它当画面。ViralReel 不授权那个声音。在你发布的 App 里加声音。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas no watermark',
    'charlie-brown-christmas-no-watermark',
    {
      en: 'Charlie Brown Christmas No Watermark – Paid Packs and Plans',
      zh: 'Charlie Brown Christmas 无水印：付费积分包和方案',
    },
    {
      en: 'charlie brown christmas no watermark: paid ViralReel credit packs and monthly plans export the 8-second 9:16 MP4 without a ViralReel watermark. Packs start at $9.9. That is not a Peanuts license and not a song license.',
      zh: 'charlie brown christmas no watermark：付费的 ViralReel 积分包和月付方案导出 8 秒 9:16 MP4 时没有 ViralReel 水印。积分包 $9.9 起。这不是 Peanuts 授权，也不是歌曲授权。',
    },
    { en: 'Charlie Brown Christmas with no watermark', zh: '无水印的 Charlie Brown Christmas' },
    {
      en: '“No watermark” on ViralReel means no ViralReel logo on a paid export. It does not mean the 1965 special, and it does not remove a platform’s own AI label.',
      zh: 'ViralReel 上的「无水印」指的是付费导出没有 ViralReel 标志。它不是 1965 年特辑，也不会替你关掉平台自己的 AI 标注。',
    },
    { en: 'Which exports skip the ViralReel watermark', zh: '哪些导出会去掉 ViralReel 水印' },
    [
      `${WATER_EN} The file is still ${OUT_EN} ${PHOTO_EN}`,
      `${PRICE_EN} A free starter render is a first template video, not a promise about watermarks on every future file. Read the generator before you start.`,
      `${SOUND_EN} ${LIMIT_EN} The AI label is separate: https://www.viralreel.app/charlie-brown-christmas-ai-label.`,
    ],
    [
      `${WATER_ZH} 文件仍然是${OUT_ZH} ${PHOTO_ZH}`,
      `${PRICE_ZH} 免费的起始渲染是第一条模板视频，不是承诺以后每个文件都没有水印。开始前先看生成器。`,
      `${SOUND_ZH} ${LIMIT_ZH} AI 标注是另一件事：https://www.viralreel.app/zh/charlie-brown-christmas-ai-label 。`,
    ],
    [
      {
        q: { en: 'Do paid Charlie Brown Christmas exports have a ViralReel watermark?', zh: '付费的 Charlie Brown Christmas 导出有 ViralReel 水印吗？' },
        a: {
          en: 'Paid credit packs and monthly plans export without a ViralReel watermark. The AI label in TikTok, Reels, or Shorts is still yours to turn on.',
          zh: '付费积分包和月付方案导出时没有 ViralReel 水印。TikTok、Reels 或 Shorts 里的 AI 标注仍要你自己打开。',
        },
      },
      {
        q: { en: 'Is a watermark-free file an official Peanuts download?', zh: '无水印文件是官方 Peanuts 下载吗？' },
        a: {
          en: 'No. It is a new fan-made MP4 of your photo. ViralReel is not affiliated with Peanuts Worldwide or the Schulz estate.',
          zh: '不是。它是用你的照片做的一条新的粉丝 MP4。ViralReel 与 Peanuts Worldwide 或 Schulz 遗产管理方无关联。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas with friends',
    'charlie-brown-christmas-with-friends',
    {
      en: 'Charlie Brown Christmas with Friends – One Photo per Person',
      zh: '和朋友一起的 Charlie Brown Christmas：每个人一张照片',
    },
    {
      en: 'charlie brown christmas with friends: ViralReel renders one photo per pass. Make a clip for each adult who agreed. CapCut’s “A Charlie Brown” template takes 2 clips and can hold a group. No minors. No song license.',
      zh: 'charlie brown christmas with friends：ViralReel 每次渲染一张照片。每位同意出镜的成年人各做一条。CapCut 的「A Charlie Brown」模板需要 2 段素材，可以放一组人。不要未成年人。不授权歌曲。',
    },
    { en: 'Charlie Brown Christmas with friends', zh: '和朋友一起的 Charlie Brown Christmas' },
    {
      en: 'A group selfie does not auto-split into a cast. On ViralReel, one photo is one cartoon on the doghouse. Render each person who agreed, one pass at a time.',
      zh: '一张合影不会自动拆成一组角色。在 ViralReel，一张照片就是狗屋上的一个卡通。每位同意的人各渲染一次。',
    },
    { en: 'Friends, family, and the CapCut group path', zh: '朋友、家人和 CapCut 的合照路径' },
    [
      `Open ${T} and pick a clip. Glasses Redraw keeps everyday glasses. Family Elders is one older adult who agreed — grey hair, glasses, and a cardigan stay as flat shapes. Car Cameo keeps an everyday outfit. Harry Look is round glasses, not a celebrity. ${PHOTO_EN}`,
      `CapCut’s “A Charlie Brown” template, checked 3 November 2026, needs 2 clips and showed 25,852 uses: ${CAPCUT_DETAIL}. That in-app paste can take a group from one photo, up to about four people. ViralReel keeps one photo per render so the glasses and the outfit stay readable. MakeViral’s “Friends and family” version is one of five options on ${MV}, and its main path is a still, not this scan line.`,
      `${LIMIT_EN} ${SOUND_EN} Post each MP4 with the days-left caption and the AI label.`,
    ],
    [
      `打开 ${TZ} 并选一条片段。眼镜重绘保留日常眼镜。全家长辈是一位同意出镜的年长家人——灰发、眼镜和开衫会变成扁平形状。车内出镜保留日常穿搭。哈利造型是圆框眼镜，不是名人。${PHOTO_ZH}`,
      `CapCut 的「A Charlie Brown」模板在 2026 年 11 月 3 日核对时需要 2 段素材，显示 25,852 次使用：${CAPCUT_DETAIL} 。那个 App 内贴片可以从一张合照里取出一组人，大约最多四人。ViralReel 每次只渲染一张照片，好让眼镜和衣服仍然认得出来。MakeViral 的「朋友和家人」是 ${MV} 上五个选项之一，它的主路径是静帧，不是这段扫描线。`,
      `${LIMIT_ZH} ${SOUND_ZH} 每条 MP4 都配上剩余天数和 AI 标注再发。`,
    ],
    [
      {
        q: { en: 'Can I upload one photo of four friends?', zh: '我能上传一张四个人的合照吗？' },
        a: {
          en: 'ViralReel uses one face per render. A group photo makes the model guess. Crop to one consenting adult, or render each person separately. CapCut’s template is the group paste.',
          zh: 'ViralReel 每次渲染一张脸。合照会让模型去猜。裁成一位同意的成年人，或每人各渲染一次。CapCut 的模板才是合照贴片。',
        },
      },
      {
        q: { en: 'Can the clip include a child?', zh: '片段里可以有小孩吗？' },
        a: {
          en: 'No. Do not upload minors. Family Elders is for an older adult who agreed.',
          zh: '不行。不要上传未成年人。全家长辈是给同意出镜的年长家人用的。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas pets',
    'charlie-brown-christmas-pets',
    {
      en: 'Charlie Brown Christmas Pets – A Full-Body Pet Photo, Not a Memorial',
      zh: 'Charlie Brown Christmas 宠物：全身照，不是纪念',
    },
    {
      en: 'charlie brown christmas pets: a living pet can be tried on ViralReel if the full body is in frame. Results vary. It is not a memorial, not a Snoopy costume guarantee, and not the photoreal “foto con Snoopy” wave.',
      zh: 'charlie brown christmas pets：在世宠物可以在 ViralReel 上试，只要全身入画。效果会有差别。这不是纪念，不保证变成 Snoopy 的衣服，也不是写实的「foto con Snoopy」。',
    },
    { en: 'Charlie Brown Christmas for a pet', zh: '给宠物的 Charlie Brown Christmas' },
    {
      en: 'The template is written for a person. A living pet can be tried. Use a full-body photo, expect variation, and do not use it as a memorial.',
      zh: '模板是按人来写的。在世宠物可以试。用全身照，接受效果差异，不要拿它做纪念。',
    },
    { en: 'What the pet photo needs', zh: '宠物照片需要什么' },
    [
      `Upload one photo of the pet alone, full body in frame, face visible, nothing covering the eyes. Open ${T} and pick a clip — Fresh Redraw is the one posed for head-to-paw detail. ${OUT_EN} Photo notes are ${PHOTO}.`,
      `MakeViral lists a Pet version and a Pet-plus-video version on ${MV}. The still is Nano Banana 2.1 at 3 credits; the video is a different Kling 3.0 clip, not this scan line. ViralReel does not promise the pet will read as Snoopy. It redraws the photo it was given.`,
      `${LIMIT_EN} ${SOUND_EN} ${SPLIT_EN} A photoreal picture of a person standing with Snoopy is a different search: https://www.viralreel.app/snoopy-ai-photo.`,
    ],
    [
      `上传一张只有宠物的照片，全身入画，脸清楚，眼睛不要被挡住。打开 ${TZ} 选一条片段——新鲜出炉是为了从头到脚（或爪）的细节。${OUT_ZH} 照片说明在 ${PHOTOZ} 。`,
      `MakeViral 在 ${MV} 列出了宠物版和宠物加视频版。静帧是 Nano Banana 2.1，3 积分；视频是另一段 Kling 3.0，不是这条扫描线。ViralReel 不保证宠物会被认成 Snoopy。它重绘的是你给的那张照片。`,
      `${LIMIT_ZH} ${SOUND_ZH} ${SPLIT_ZH} 人和 Snoopy 站在一起的写实照片是另一个搜索：https://www.viralreel.app/zh/snoopy-ai-photo 。`,
    ],
    [
      {
        q: { en: 'Will my dog come back as Snoopy?', zh: '我的狗会变成 Snoopy 吗？' },
        a: {
          en: 'Not as a promise. The redraw keeps what the photo shows and flattens it into the 1965 cel look on the doghouse. Results vary. It is not an official Snoopy costume.',
          zh: '没有这个承诺。重绘保留照片里有的东西，再把它压成狗屋上的 1965 赛璐璐画风。效果会有差别。这不是官方 Snoopy 服装。',
        },
      },
      {
        q: { en: 'Can I use a pet that has died?', zh: '可以用已经去世的宠物吗？' },
        a: {
          en: 'This page is not a memorial. It is a redraw of a living pet, and results vary.',
          zh: '这一页不是纪念。它是在世宠物的重绘，而且效果会有差别。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas from photo',
    'charlie-brown-christmas-from-photo',
    {
      en: 'Charlie Brown Christmas from a Photo – One Picture, One Redraw',
      zh: '用一张照片做 Charlie Brown Christmas：一张图，一次重绘',
    },
    {
      en: 'charlie brown christmas from a photo: waist-up or full body, glasses on if you wear them, no sunglasses or masks. ViralReel turns that one photo into an 8-second 9:16 MP4. No minors, celebrities, or 1965 screenshots.',
      zh: 'charlie brown christmas from a photo：半身或全身，平时戴眼镜就让眼镜入画，不要墨镜或口罩。ViralReel 把这一张照片变成 8 秒 9:16 MP4。不要未成年人、名人和 1965 年截图。',
    },
    { en: 'Charlie Brown Christmas from a photo', zh: '用照片做 Charlie Brown Christmas' },
    {
      en: 'The input is one photo you have permission to use. The output is a new cartoon on the red doghouse, not a filter stuck on the original file.',
      zh: '输入是一张你有权使用的照片。输出是红狗屋上的一个新卡通，不是贴在原文件上的滤镜。',
    },
    { en: 'The photo that survives the scan line', zh: '扫描线留得住的照片' },
    [
      `${PHOTO_EN} A tight headshot can still run. Waist-up or full body gives the doghouse pose more of you to keep. Even light in front beats a window behind you. The longer notes are ${PHOTO}.`,
      `Open ${T}, pick one of the seven clips, and generate. ${OUT_EN} ${MODEL_EN} You do not paste a prompt.`,
      `${LIMIT_EN} ${SOUND_EN} ${CAPCUT_EN}`,
    ],
    [
      `${PHOTO_ZH} 紧凑的大头照也能跑。半身或全身能让狗屋上的姿势留下更多你的样子。正面均匀的光，好过背后一扇窗。更长的说明在 ${PHOTOZ} 。`,
      `打开 ${TZ} ，七条片段里选一条，然后生成。${OUT_ZH} ${MODEL_ZH} 你不用贴提示词。`,
      `${LIMIT_ZH} ${SOUND_ZH} ${CAPCUT_ZH}`,
    ],
    [
      {
        q: { en: 'Do sunglasses work?', zh: '墨镜可以吗？' },
        a: {
          en: 'No. The recognizable detail is your real glasses, with the dot eyes under the frames. Sunglasses and masks hide the face the redraw needs.',
          zh: '不行。认得出你的细节是你自己的眼镜，点点眼睛在镜框下面。墨镜和口罩会挡住重绘需要的脸。',
        },
      },
      {
        q: { en: 'Can the photo be a screenshot of the special?', zh: '照片可以是特辑截图吗？' },
        a: {
          en: 'No. Do not upload frames from the 1965 special, celebrities, or minors.',
          zh: '不行。不要上传 1965 年特辑的画面、名人或未成年人。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas online',
    'charlie-brown-christmas-online',
    {
      en: 'Charlie Brown Christmas Online – In the Browser, No CapCut Install',
      zh: '在线 Charlie Brown Christmas：浏览器里做，不用装 CapCut',
    },
    {
      en: 'charlie brown christmas online: make the scan-line redraw at viralreel.app in the browser. One photo, seven clips, 8-second 9:16 MP4. No CapCut account. Paid packs export without a ViralReel watermark.',
      zh: 'charlie brown christmas online：在 viralreel.app 的浏览器里做扫描线重绘。一张照片，七条片段，8 秒 9:16 MP4。不用 CapCut 账号。付费积分包导出没有 ViralReel 水印。',
    },
    { en: 'Charlie Brown Christmas online', zh: '在线的 Charlie Brown Christmas' },
    {
      en: 'Online means the browser template. You do not install CapCut, and you do not hunt for a template link inside TikTok.',
      zh: '在线指的是浏览器模板。你不用安装 CapCut，也不用在 TikTok 里找模板链接。',
    },
    { en: 'The browser path', zh: '浏览器路径' },
    [
      `Go to ${T}. Pick a clip, upload one photo, read the credits, and download the MP4. ${OUT_EN} ${MODEL_EN} ${PHOTO_EN}`,
      `${CAPCUT_EN} The no-CapCut page is https://www.viralreel.app/charlie-brown-christmas-without-capcut. ${WATER_EN}`,
      `${PRICE_EN} ${SOUND_EN} ${LIMIT_EN}`,
    ],
    [
      `打开 ${TZ} 。选一条片段，上传一张照片，看清积分，下载 MP4。${OUT_ZH} ${MODEL_ZH} ${PHOTO_ZH}`,
      `${CAPCUT_ZH} 不用 CapCut 的页面在 https://www.viralreel.app/zh/charlie-brown-christmas-without-capcut 。${WATER_ZH}`,
      `${PRICE_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
    ],
    [
      {
        q: { en: 'Do I need the CapCut app?', zh: '需要 CapCut App 吗？' },
        a: {
          en: 'Not for the ViralReel render. CapCut is a separate 2-clip paste inside that app. This page runs in the browser.',
          zh: 'ViralReel 的渲染不需要。CapCut 是那个 App 里另一套 2 段素材的贴片。这一页在浏览器里跑。',
        },
      },
      {
        q: { en: 'Does online mean the file is hosted as the 1965 special?', zh: '在线是不是意味着文件就是 1965 年特辑？' },
        a: {
          en: 'No. You download a new MP4 of your photo. ViralReel does not stream or host the CBS special.',
          zh: '不是。你下载的是自己照片的一条新 MP4。ViralReel 不串流、也不托管那部 CBS 特辑。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas mp4',
    'charlie-brown-christmas-mp4',
    {
      en: 'Charlie Brown Christmas MP4 – 8 Seconds, 9:16, Picture File',
      zh: 'Charlie Brown Christmas MP4：8 秒，9:16，画面文件',
    },
    {
      en: 'charlie brown christmas mp4: ViralReel downloads a new 8-second 9:16 MP4. It is not a GIF, not the 1965 special, and not a separate audio file. Paid packs and plans have no ViralReel watermark.',
      zh: 'charlie brown christmas mp4：ViralReel 下载一条新的 8 秒 9:16 MP4。它不是 GIF，不是 1965 年特辑，也不是单独的音频文件。付费积分包和方案没有 ViralReel 水印。',
    },
    { en: 'Charlie Brown Christmas MP4', zh: 'Charlie Brown Christmas MP4' },
    {
      en: 'The file you download is a new vertical MP4: photo, scan line, then the cartoon on the red doghouse.',
      zh: '你下载的文件是一条新的竖屏 MP4：照片、扫描线，然后是红狗屋上的卡通。',
    },
    { en: 'What is in the file', zh: '文件里有什么' },
    [
      `${OUT_EN} Trend posts from CapCut are often 12 seconds in 3:4. ViralRemix’s checked sample is 8 seconds in 3:4 at 720p and keeps reference audio. MakeViral’s checked video is 10 seconds, 1080p, 9:16, with holiday piano. ViralReel’s default is the 8-second 9:16 redraw.`,
      `${WATER_EN} ${SOUND_EN} The file is not a GIF and not a soundtrack you can peel off.`,
      `${PHOTO_EN} ${LIMIT_EN} ${PRICE_EN}`,
    ],
    [
      `${OUT_ZH} CapCut 的趋势帖经常是 12 秒 3:4。ViralRemix 核对过的样本是 8 秒 3:4、720p，并保留参考音频。MakeViral 核对过的视频是 10 秒、1080p、9:16，配节日钢琴。ViralReel 的默认是 8 秒 9:16 重绘。`,
      `${WATER_ZH} ${SOUND_ZH} 文件不是 GIF，也不是可以拆出来的原声。`,
      `${PHOTO_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
    ],
    [
      {
        q: { en: 'Is the download 12 seconds?', zh: '下载是 12 秒吗？' },
        a: {
          en: 'No. The ViralReel render is 8 seconds at 9:16. Twelve seconds in 3:4 is the CapCut trend shape.',
          zh: '不是。ViralReel 渲染是 8 秒 9:16。12 秒 3:4 是 CapCut 趋势的画幅。',
        },
      },
      {
        q: { en: 'Can I download just the song as MP3?', zh: '我能只把歌下载成 MP3 吗？' },
        a: {
          en: 'No. There is no audio download. See https://www.viralreel.app/charlie-brown-christmas-sound.',
          zh: '不能。没有音频下载。见 https://www.viralreel.app/zh/charlie-brown-christmas-sound 。',
        },
      },
    ]
  ),
  tail(
    'make charlie brown christmas ai',
    'make-charlie-brown-christmas-ai',
    {
      en: 'Make a Charlie Brown Christmas AI Video – A New MP4, Not the Viral Post',
      zh: '制作 Charlie Brown Christmas AI 视频：一条新 MP4，不是那条爆款',
    },
    {
      en: 'make a charlie brown christmas ai video: pick a redraw clip, upload one photo, read the live credit cost, download the 8-second 9:16 MP4. This does not hand you the original TikTok or the 1965 special.',
      zh: 'make a charlie brown christmas ai video：选一条重绘片段，上传一张照片，看清当时的积分，下载 8 秒 9:16 MP4。这不会把原版 TikTok 或 1965 年特辑交给你。',
    },
    { en: 'Make a Charlie Brown Christmas AI video', zh: '制作 Charlie Brown Christmas AI 视频' },
    {
      en: 'Making one means rendering a new file from a photo you can use. It does not transfer someone else’s viral post to your camera roll.',
      zh: '制作的意思是用一张你能用的照片渲染一个新文件。它不会把别人的爆款帖子转到你的相册里。',
    },
    { en: 'Create the clip', zh: '创建这条片子' },
    [
      `Open ${T}. Choose one of seven clips. ${CLIPS_EN} Upload one photo. ${PHOTO_EN} The generator shows the credit cost before it starts. Packs start at $9.9. ${OUT_EN}`,
      `Then post it yourself. Add a library sound, write the days left until Christmas, and turn on the AI label. The long steps are ${HOWTO}.`,
      `${SOUND_EN} ${LIMIT_EN} ${MODEL_EN}`,
    ],
    [
      `打开 ${TZ} 。七条片段里选一条。${CLIPS_ZH} 上传一张照片。${PHOTO_ZH} 生成器在开始前显示积分。积分包 $9.9 起。${OUT_ZH}`,
      `然后你自己发布。加上曲库声音，写上距离圣诞还有几天，并打开 AI 标注。详细步骤在 ${HOWTOZ} 。`,
      `${SOUND_ZH} ${LIMIT_ZH} ${MODEL_ZH}`,
    ],
    [
      {
        q: { en: 'Will this give me the TikTok that started the trend?', zh: '这会把带火趋势的那条 TikTok 给我吗？' },
        a: {
          en: 'No. You get a new MP4 of your photo. ViralReel does not host the original posts.',
          zh: '不会。你得到的是自己照片的一条新 MP4。ViralReel 不托管那些原帖。',
        },
      },
      {
        q: { en: 'Is “create” a different tool from the template?', zh: '「创建」是模板之外的另一个工具吗？' },
        a: {
          en: `No. Create, make, and the template are the same browser page: ${T}.`,
          zh: `不是。创建、制作和模板是同一个浏览器页面：${TZ} 。`,
        },
      },
    ]
  ),
  tail(
    'original charlie brown christmas',
    'charlie-brown-christmas-original',
    {
      en: 'Original A Charlie Brown Christmas – Special, Trend, or a New MP4',
      zh: '原版 A Charlie Brown Christmas：特辑、趋势，还是一条新 MP4',
    },
    {
      en: 'original a charlie brown christmas: the 1965 CBS special, the 2026 CapCut trend, and a new ViralReel MP4 are three different files. ViralReel hosts neither original and does not license Guaraldi.',
      zh: 'original a charlie brown christmas：1965 年 CBS 特辑、2026 年 CapCut 趋势，和一条新的 ViralReel MP4 是三个不同的文件。ViralReel 两个原版都不托管，也不授权 Guaraldi。',
    },
    { en: 'The original A Charlie Brown Christmas', zh: '原版 A Charlie Brown Christmas' },
    {
      en: '“Original” can mean the 1965 special or the first TikTok on the CapCut template. ViralReel is neither. It renders a new fan MP4.',
      zh: '「原版」可以指 1965 年特辑，也可以指 CapCut 模板上的第一条 TikTok。ViralReel 两者都不是。它渲染一条新的粉丝 MP4。',
    },
    { en: 'Which file the word points at', zh: '这个词指向哪一个文件' },
    [
      `A Charlie Brown Christmas first aired on CBS on 9 December 1965, directed by Bill Melendez, with the Vince Guaraldi Trio. Peanuts Worldwide and the Charles M. Schulz estate own that special. ViralReel does not host it, does not stream it, and does not license the score. The background page is https://www.viralreel.app/charlie-brown-christmas-1965. The essay is ${SONG}.`,
      `The 2026 redraw trend started on the CapCut template “A Charlie Brown”. The first post was a mirror selfie by @jason_l_smith on 22–23 October 2026. The post that took off was @nanceesjourney on 26 October, captioned “Sixty days till Christmas!”. ViralReel does not host those TikToks. The explainer is ${EXPLAINED}.`,
      `A ViralReel original, in the only sense this site uses the word, is a new MP4 from your photo at ${T}. ${SPLIT_EN} ${SOUND_EN} ${LIMIT_EN}`,
    ],
    [
      `《A Charlie Brown Christmas》于 1965 年 12 月 9 日在 CBS 首播，Bill Melendez 执导，Vince Guaraldi 三重奏配乐。这部特辑归 Peanuts Worldwide 和 Charles M. Schulz 遗产管理方所有。ViralReel 不托管、不串流，也不授权配乐。背景页在 https://www.viralreel.app/zh/charlie-brown-christmas-1965 。文章在 ${SONGZ} 。`,
      `2026 年的重绘趋势起于 CapCut 模板「A Charlie Brown」。第一条帖子是 @jason_l_smith 在 2026 年 10 月 22–23 日的镜子自拍。火起来的那条是 @nanceesjourney 在 10 月 26 日发的，配文是 “Sixty days till Christmas!”。ViralReel 不托管那些 TikTok。说明在 ${EXPLAINEDZ} 。`,
      `ViralReel 所说的「原版」，唯一的意思是用你的照片在 ${TZ} 做出的一条新 MP4。${SPLIT_ZH} ${SOUND_ZH} ${LIMIT_ZH}`,
    ],
    [
      {
        q: { en: 'Where do I watch the 1965 special?', zh: '1965 年特辑在哪里看？' },
        a: {
          en: 'On an official streamer each December. Not on ViralReel.',
          zh: '每年 12 月的正版流媒体。不在 ViralReel。',
        },
      },
      {
        q: { en: 'Is the December 2025 dance the same original?', zh: '2025 年 12 月的舞蹈是同一个原版吗？' },
        a: {
          en: 'No. That was a dance trend. This page is the 2026 scan-line redraw onto the red doghouse.',
          zh: '不是。那是一波舞蹈趋势。这一页是 2026 年扫到红狗屋上的重绘。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas instagram',
    'charlie-brown-christmas-instagram',
    {
      en: 'Charlie Brown Christmas on Instagram – Post the MP4 as a Reel',
      zh: 'Instagram 上的 Charlie Brown Christmas：把 MP4 发成 Reel',
    },
    {
      en: 'charlie brown christmas instagram: download the 8-second 9:16 MP4 from ViralReel, upload it as an Instagram Reel, add Instagram’s library sound, and turn on the AI label. No Guaraldi license.',
      zh: 'charlie brown christmas instagram：从 ViralReel 下载 8 秒 9:16 MP4，作为 Instagram Reel 上传，加上 Instagram 曲库的声音，并打开 AI 标注。没有 Guaraldi 授权。',
    },
    { en: 'Charlie Brown Christmas on Instagram', zh: 'Instagram 上的 Charlie Brown Christmas' },
    {
      en: 'Instagram does not render the redraw. You upload a finished 9:16 MP4 and add the sound inside Reels.',
      zh: 'Instagram 不渲染这段重绘。你上传一条做好的 9:16 MP4，然后在 Reels 里加声音。',
    },
    { en: 'How to post the Reel', zh: '怎么发这条 Reel' },
    [
      `Make the file at ${T}. ${OUT_EN} Save the MP4, open Instagram, and upload it as a Reel. Add a sound from Instagram’s library. Write the days left until Christmas. Turn on the AI-generated label. Hashtags people use are #charliebrownchristmas and #snoopyfilter.`,
      `ViralReel does not post for you and does not license the audio Instagram may offer. ${SOUND_EN}`,
      `${LIMIT_EN} ${WATER_EN} The same file can go to TikTok or Shorts. Shorts notes are https://www.viralreel.app/charlie-brown-christmas-youtube-shorts.`,
    ],
    [
      `在 ${TZ} 制作文件。${OUT_ZH} 保存 MP4，打开 Instagram，作为 Reel 上传。从 Instagram 曲库加一个声音。写上距离圣诞还有几天。打开 AI 生成标注。大家在用的标签是 #charliebrownchristmas 和 #snoopyfilter。`,
      `ViralReel 不替你发布，也不授权 Instagram 可能提供的音频。${SOUND_ZH}`,
      `${LIMIT_ZH} ${WATER_ZH} 同一份文件也可以发到 TikTok 或 Shorts。Shorts 的说明在 https://www.viralreel.app/zh/charlie-brown-christmas-youtube-shorts 。`,
    ],
    [
      {
        q: { en: 'Does /charlie-brown-christmas-reels go somewhere else?', zh: '/charlie-brown-christmas-reels 会去别的地方吗？' },
        a: {
          en: 'It redirects here. A Reel is the Instagram upload of this same MP4.',
          zh: '它会重定向到这里。Reel 就是这份 MP4 在 Instagram 上的上传。',
        },
      },
      {
        q: { en: 'Will Instagram add the Guaraldi song for me?', zh: 'Instagram 会替我加上 Guaraldi 的歌吗？' },
        a: {
          en: 'Only if that recording is in Instagram’s library, under Instagram’s rules. ViralReel does not license it and does not place it in the file.',
          zh: '只有当那段录音在 Instagram 曲库里、并符合 Instagram 的规则时才会。ViralReel 不授权它，也不会把它放进文件。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas youtube shorts',
    'charlie-brown-christmas-youtube-shorts',
    {
      en: 'Charlie Brown Christmas YouTube Shorts – Upload the 9:16 MP4',
      zh: 'Charlie Brown Christmas YouTube Shorts：上传 9:16 MP4',
    },
    {
      en: 'charlie brown christmas youtube shorts: upload ViralReel’s 8-second 9:16 MP4 as a YouTube Short. Disclose AI where YouTube asks. Add a library sound. No Guaraldi soundtrack in the file.',
      zh: 'charlie brown christmas youtube shorts：把 ViralReel 的 8 秒 9:16 MP4 上传为 YouTube Short。在 YouTube 要求的地方披露 AI。加上曲库声音。文件里没有 Guaraldi 原声。',
    },
    { en: 'Charlie Brown Christmas on YouTube Shorts', zh: 'YouTube Shorts 上的 Charlie Brown Christmas' },
    {
      en: 'YouTube Shorts wants a vertical video. The ViralReel file is already 9:16 and 8 seconds. You still disclose that it is AI.',
      zh: 'YouTube Shorts 要的是竖屏视频。ViralReel 的文件已经是 9:16、8 秒。你仍然要披露它是 AI。',
    },
    { en: 'Upload, disclose, then the sound', zh: '上传、披露，然后是声音' },
    [
      `Render at ${T}. ${OUT_EN} In YouTube, upload it as a Short. Use the AI disclosure YouTube shows. Add a sound from YouTube’s library if you want audio. Caption the days left until Christmas.`,
      `${SOUND_EN} ViralReel does not put “Christmas Time Is Here” or “Linus and Lucy” in the file.`,
      `${LIMIT_EN} ${WATER_EN} Instagram notes are https://www.viralreel.app/charlie-brown-christmas-instagram.`,
    ],
    [
      `在 ${TZ} 渲染。${OUT_ZH} 在 YouTube 里作为 Short 上传。使用 YouTube 显示的 AI 披露。如果想要声音，从 YouTube 曲库加。配文写距离圣诞还有几天。`,
      `${SOUND_ZH} ViralReel 不会把《Christmas Time Is Here》或《Linus and Lucy》放进文件。`,
      `${LIMIT_ZH} ${WATER_ZH} Instagram 的说明在 https://www.viralreel.app/zh/charlie-brown-christmas-instagram 。`,
    ],
    [
      {
        q: { en: 'Is 8 seconds long enough for a Short?', zh: '8 秒够发一条 Short 吗？' },
        a: {
          en: 'Yes. The ViralReel file is 8 seconds at 9:16. That is the length this template exports.',
          zh: '够。ViralReel 的文件是 8 秒 9:16。这就是这个模板导出的时长。',
        },
      },
      {
        q: { en: 'Does ViralReel flip YouTube’s AI switch?', zh: 'ViralReel 会替我打开 YouTube 的 AI 开关吗？' },
        a: {
          en: 'No. You disclose it in YouTube. See https://www.viralreel.app/charlie-brown-christmas-ai-label.',
          zh: '不会。你在 YouTube 里披露。见 https://www.viralreel.app/zh/charlie-brown-christmas-ai-label 。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas ai label',
    'charlie-brown-christmas-ai-label',
    {
      en: 'Charlie Brown Christmas AI Label – Turn It On When You Post',
      zh: 'Charlie Brown Christmas 的 AI 标注：发布时打开',
    },
    {
      en: 'charlie brown christmas ai label: the redraw is AI. Turn on the AI-generated label in TikTok, Instagram, or YouTube when you post. ViralReel does not flip that switch for you.',
      zh: 'charlie brown christmas ai label：这段重绘是 AI。在 TikTok、Instagram 或 YouTube 发布时打开 AI 生成标注。ViralReel 不替你拨这个开关。',
    },
    { en: 'Charlie Brown Christmas AI label', zh: 'Charlie Brown Christmas 的 AI 标注' },
    {
      en: 'The label belongs to the app you post in. The video is AI whether or not the watermark is gone.',
      zh: '标注属于你用来发布的那个 App。就算水印没了，视频也仍然是 AI。',
    },
    { en: 'Where the label lives', zh: '标注在哪里' },
    [
      `Make the MP4 at ${T}. Download it. In TikTok, Instagram Reels, or YouTube Shorts, use that app’s AI-generated control before you publish. Caption who is in the photo. ${LIMIT_EN}`,
      `A missing ViralReel watermark is not an AI disclosure. Paid packs and plans export without that watermark. The platform label is separate. ${SOUND_EN}`,
      `Do not present the file as a frame from the 1965 special or as official Peanuts. ${SPLIT_EN}`,
    ],
    [
      `在 ${TZ} 制作 MP4。下载它。在 TikTok、Instagram Reels 或 YouTube Shorts 里，发布前使用那个 App 的 AI 生成开关。配文说明照片里是谁。${LIMIT_ZH}`,
      `没有 ViralReel 水印不等于做了 AI 披露。付费积分包和方案导出时没有那个水印。平台标注是另一件事。${SOUND_ZH}`,
      `不要把文件说成 1965 年特辑的一帧，或官方 Peanuts。${SPLIT_ZH}`,
    ],
    [
      {
        q: { en: 'Does ViralReel turn on TikTok’s AI label?', zh: 'ViralReel 会打开 TikTok 的 AI 标注吗？' },
        a: {
          en: 'No. You do that in TikTok after upload. The same is true for Instagram and YouTube.',
          zh: '不会。上传之后你在 TikTok 里打开。Instagram 和 YouTube 也一样。',
        },
      },
      {
        q: { en: 'Is the label optional because it is fan art?', zh: '因为是粉丝作品，标注就可以不打吗？' },
        a: {
          en: 'No. It is AI, and it is unofficial. Keep the label on. Fan work is not a reason to hide that.',
          zh: '不行。它是 AI，而且是非官方的。请保持标注。粉丝作品不是藏起这一点的理由。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas kling',
    'charlie-brown-christmas-kling',
    {
      en: 'Charlie Brown Christmas and Kling – A Different Job From This Template',
      zh: 'Charlie Brown Christmas 和 Kling：和这个模板不是同一件事',
    },
    {
      en: 'charlie brown christmas kling: Kling-style tools generate from a prompt. MakeViral’s checked video is Kling 3.0. ViralRemix markets Kling O3 Edit. ViralReel is a fixed browser template. The model menu is not a Kling prompt.',
      zh: 'charlie brown christmas kling：Kling 一类的工具用提示词生成。MakeViral 核对过的视频是 Kling 3.0。ViralRemix 标成 Kling O3 Edit。ViralReel 是固定的浏览器模板。模型菜单不是 Kling 提示词。',
    },
    { en: 'Charlie Brown Christmas and Kling', zh: 'Charlie Brown Christmas 和 Kling' },
    {
      en: 'Kling is a name on other products’ video paths. On ViralReel the scene is already the clip. A model menu only picks an engine for that clip.',
      zh: 'Kling 是别的产品视频路径上的名字。在 ViralReel，场景已经是这条片段。模型菜单只为这条片段选引擎。',
    },
    { en: 'What those Kling pages actually are', zh: '那些 Kling 页面实际上是什么' },
    [
      `${MV_EN} ${REMIX_EN} Neither of those facts makes ViralReel a Kling prompt box.`,
      `${MODEL_EN} The engines named on the ViralReel page are Veo 3.1, Sora 2 (Replicate), Wan Pro, and Sora 2 Pro (Kie). You do not write the doghouse, the scan line, or the title. The without-Kling path is https://www.viralreel.app/charlie-brown-christmas-without-kling.`,
      `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN} The roundup is ${ROUNDUP}.`,
    ],
    [
      `${MV_ZH} ${REMIX_ZH} 这两件事都不会把 ViralReel 变成一个 Kling 提示词框。`,
      `${MODEL_ZH} ViralReel 页面上点名的引擎是 Veo 3.1、Sora 2（Replicate）、Wan Pro 和 Sora 2 Pro（Kie）。你不用去写狗屋、扫描线或标题。不用 Kling 的路径在 https://www.viralreel.app/zh/charlie-brown-christmas-without-kling 。`,
      `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH} 总览在 ${ROUNDUPZ} 。`,
    ],
    [
      {
        q: { en: 'Is the ViralReel template Kling 3.0 or Kling O3?', zh: 'ViralReel 模板是 Kling 3.0 或 Kling O3 吗？' },
        a: {
          en: 'No. Those names are on the MakeViral and ViralRemix pages checked 3 November 2026. ViralReel’s menu picks an engine for a fixed template.',
          zh: '不是。那些名字在 2026 年 11 月 3 日核对过的 MakeViral 和 ViralRemix 页面上。ViralReel 的菜单是为一张固定模板选引擎。',
        },
      },
      {
        q: { en: 'Do I need a Kling account?', zh: '我需要 Kling 账号吗？' },
        a: {
          en: `Not for this redraw. Use ${T}. The no-Kling page is https://www.viralreel.app/charlie-brown-christmas-without-kling.`,
          zh: `做这次重绘不需要。用 ${TZ} 。不用 Kling 的页面在 https://www.viralreel.app/zh/charlie-brown-christmas-without-kling 。`,
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas without kling',
    'charlie-brown-christmas-without-kling',
    {
      en: 'Charlie Brown Christmas without Kling – Browser Template, No Kling Account',
      zh: '不用 Kling 的 Charlie Brown Christmas：浏览器模板，不用 Kling 账号',
    },
    {
      en: 'charlie brown christmas without kling: make the scan-line redraw in the ViralReel browser. No Kling account and no Kling prompt. One photo, 8-second 9:16 MP4. The model menu is an engine pick, not Kling.',
      zh: 'charlie brown christmas without kling：在 ViralReel 浏览器里做扫描线重绘。不用 Kling 账号，也不用 Kling 提示词。一张照片，8 秒 9:16 MP4。模型菜单是选引擎，不是 Kling。',
    },
    { en: 'Charlie Brown Christmas without Kling', zh: '不用 Kling 的 Charlie Brown Christmas' },
    {
      en: 'You can make the doghouse redraw without opening Kling. The template is already filled in.',
      zh: '你可以不打开 Kling 就做出狗屋重绘。模板已经填好了。',
    },
    { en: 'The no-Kling path', zh: '不用 Kling 的路径' },
    [
      `Open ${T}. Pick a clip. Upload one photo. ${PHOTO_EN} ${OUT_EN} ${MODEL_EN}`,
      `Kling still exists on other sites. MakeViral’s checked video path is Kling 3.0 at 56 credits for 10 seconds, 1080p, 9:16, and it is not this scan line. ViralRemix markets Kling O3 Edit and keeps reference audio. Details are on https://www.viralreel.app/charlie-brown-christmas-kling. ${PRICE_EN}`,
      `${SOUND_EN} ${LIMIT_EN} ${SPLIT_EN}`,
    ],
    [
      `打开 ${TZ} 。选一条片段。上传一张照片。${PHOTO_ZH} ${OUT_ZH} ${MODEL_ZH}`,
      `Kling 仍然存在于别的网站。MakeViral 核对过的视频路径是 Kling 3.0，10 秒 1080p 9:16 为 56 积分，而且不是这条扫描线。ViralRemix 标成 Kling O3 Edit，并保留参考音频。细节在 https://www.viralreel.app/zh/charlie-brown-christmas-kling 。${PRICE_ZH}`,
      `${SOUND_ZH} ${LIMIT_ZH} ${SPLIT_ZH}`,
    ],
    [
      {
        q: { en: 'Is “without Kling” a second generator?', zh: '「不用 Kling」是另一个生成器吗？' },
        a: {
          en: `No. It is the same template at ${T}.`,
          zh: `不是。它就是 ${TZ} 上的同一个模板。`,
        },
      },
      {
        q: { en: 'Does skipping Kling remove the need for an AI label?', zh: '不用 Kling 就可以不打 AI 标注吗？' },
        a: {
          en: 'No. The redraw is still AI. Turn the label on where you post.',
          zh: '不行。重绘仍然是 AI。在发布的地方打开标注。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas seedance',
    'charlie-brown-christmas-seedance',
    {
      en: 'Charlie Brown Christmas and Seedance – Not a Seedance Prompt',
      zh: 'Charlie Brown Christmas 和 Seedance：不是 Seedance 提示词',
    },
    {
      en: 'charlie brown christmas seedance: Seedance is a blank-prompt model name. ViralReel is the fixed 8-second 9:16 scan-line template. You do not need a Seedance account. No music license.',
      zh: 'charlie brown christmas seedance：Seedance 是空白提示词模型的名字。ViralReel 是固定的 8 秒 9:16 扫描线模板。你不需要 Seedance 账号。没有音乐授权。',
    },
    { en: 'Charlie Brown Christmas and Seedance', zh: 'Charlie Brown Christmas 和 Seedance' },
    {
      en: 'A Seedance search wants a prompt box. This template does not have one. “Without Seedance” is the same browser page.',
      zh: '搜 Seedance 的人想要一个提示词框。这个模板没有。 「不用 Seedance」就是同一个浏览器页面。',
    },
    { en: 'Why this is not a Seedance job', zh: '为什么这不是 Seedance 的工作' },
    [
      `${MODEL_EN} Open ${T}, pick a clip, and upload one photo. ${CLIPS_EN} ${OUT_EN} You do not write a Seedance prompt, and you do not need a Seedance account.`,
      `No dedicated Seedance page for this redraw was part of the 3 November 2026 rival check. This page does not invent a Seedance price or a Seedance use count. Kling pages that do exist are separate: https://www.viralreel.app/charlie-brown-christmas-kling.`,
      `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN} The roundup is ${ROUNDUP}.`,
    ],
    [
      `${MODEL_ZH} 打开 ${TZ} ，选一条片段，上传一张照片。${CLIPS_ZH} ${OUT_ZH} 你不用写 Seedance 提示词，也不需要 Seedance 账号。`,
      `2026 年 11 月 3 日的对手核对里，没有这次重绘的 Seedance 专页。这一页不编造 Seedance 的价格或使用次数。已经存在的 Kling 页面是另一件事：https://www.viralreel.app/zh/charlie-brown-christmas-kling 。`,
      `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH} 总览在 ${ROUNDUPZ} 。`,
    ],
    [
      {
        q: { en: 'Where is the page without Seedance?', zh: '不用 Seedance 的页面在哪里？' },
        a: {
          en: 'It is this page. /charlie-brown-christmas-without-seedance redirects here, because the browser template is the no-Seedance path.',
          zh: '就是这一页。/charlie-brown-christmas-without-seedance 会重定向到这里，因为浏览器模板就是不用 Seedance 的路径。',
        },
      },
      {
        q: { en: 'Can I paste a Seedance prompt into ViralReel?', zh: '我能把 Seedance 提示词贴进 ViralReel 吗？' },
        a: {
          en: 'No. There is no prompt box. The clip already has the scene.',
          zh: '不能。没有提示词框。片段里已经有场景。',
        },
      },
    ]
  ),
  tail(
    'charlie brown christmas without capcut',
    'charlie-brown-christmas-without-capcut',
    {
      en: 'Charlie Brown Christmas without CapCut – The Browser MP4',
      zh: '不用 CapCut 的 Charlie Brown Christmas：浏览器 MP4',
    },
    {
      en: 'charlie brown christmas without capcut: skip the CapCut app. ViralReel re-renders the scan line in the browser from one photo, as an 8-second 9:16 MP4. CapCut’s “A Charlie Brown” template had 25,852 uses and needs 2 clips (checked 3 November 2026).',
      zh: 'charlie brown christmas without capcut：跳过 CapCut App。ViralReel 在浏览器里用一张照片重跑扫描线，导出 8 秒 9:16 MP4。CapCut 的「A Charlie Brown」模板有 25,852 次使用，需要 2 段素材（2026 年 11 月 3 日核对）。',
    },
    { en: 'Charlie Brown Christmas without CapCut', zh: '不用 CapCut 的 Charlie Brown Christmas' },
    {
      en: 'Without CapCut means the browser. You still get the scan line, the hand-lettered title, and the red doghouse. You do not get CapCut’s project audio.',
      zh: '不用 CapCut 指的是浏览器。你仍然得到扫描线、手写标题和红狗屋。你不会得到 CapCut 工程里的音频。',
    },
    { en: 'Paste versus re-render', zh: '贴片和重绘' },
    [
      `${CAPCUT_EN} The long comparison is ${CAPCUTP}.`,
      `The browser path is ${T}. One photo, not a 2-clip timeline. ${CLIPS_EN} ${OUT_EN} ${MODEL_EN} ${WATER_EN}`,
      `${SOUND_EN} ${LIMIT_EN} ${PRICE_EN}`,
    ],
    [
      `${CAPCUT_ZH} 长文对照在 ${CAPCUTPZ} 。`,
      `浏览器路径在 ${TZ} 。一张照片，不是 2 段素材的时间线。${CLIPS_ZH} ${OUT_ZH} ${MODEL_ZH} ${WATER_ZH}`,
      `${SOUND_ZH} ${LIMIT_ZH} ${PRICE_ZH}`,
    ],
    [
      {
        q: { en: 'Is the CapCut template required?', zh: '必须用 CapCut 模板吗？' },
        a: {
          en: `No. Open ${T}. CapCut remains the in-app paste if you want that 3:4 project.`,
          zh: `不必。打开 ${TZ} 。如果你想要那个 3:4 工程，CapCut 仍然是 App 内贴片。`,
        },
      },
      {
        q: { en: 'Will the browser file include CapCut’s baked-in sound?', zh: '浏览器文件会带上 CapCut 里烤好的声音吗？' },
        a: {
          en: 'No. Treat the ViralReel download as picture and add a sound in the app you post to. ViralReel does not license that sound.',
          zh: '不会。把 ViralReel 的下载当画面，在你发布的 App 里加声音。ViralReel 不授权那个声音。',
        },
      },
    ]
  ),
  tail(
    'snoopy ai photo',
    'snoopy-ai-photo',
    {
      en: 'Snoopy AI Photo – A Still Is Not This Christmas Redraw',
      zh: 'Snoopy AI 照片：静帧不是这次圣诞重绘',
    },
    {
      en: 'snoopy ai photo: a photoreal “foto con Snoopy” still, or a Snoopy prompt image, is not the ViralReel redraw. ViralReel makes an 8-second 9:16 video: your photo, a scan line, then a 1965 cel cartoon on the red doghouse.',
      zh: 'snoopy ai photo：写实的「foto con Snoopy」静帧，或一张 Snoopy 提示词图片，不是 ViralReel 的重绘。ViralReel 做的是 8 秒 9:16 视频：你的照片、一道扫描线，然后是红狗屋上的 1965 赛璐璐卡通。',
    },
    { en: 'Snoopy AI photo', zh: 'Snoopy AI 照片' },
    {
      en: 'Searchers who want a still of themselves next to a photoreal Snoopy are on a different job. ViralReel’s Snoopy result is a video redraw of the person or pet in the photo.',
      zh: '想要一张自己和写实 Snoopy 站在一起的静帧，那是另一件事。ViralReel 的 Snoopy 结果是视频：把照片里的人或宠物重绘出来。',
    },
    { en: 'Still, filter, and redraw', zh: '静帧、滤镜和重绘' },
    [
      `The video is ${T}. ${CLIPS_EN} ${OUT_EN} The filter alias is https://www.viralreel.app/snoopy-christmas-filter. Peanuts Christmas filter is https://www.viralreel.app/peanuts-christmas-filter. ${SPLIT_EN}`,
      `A Snoopy prompt library of stills, including media.io-style prompt lists, does not render this MP4. MakeViral’s main path on ${MV} is also a still (Nano Banana 2.1, 3 credits), and its video is a different Kling clip titled like “A Merry Christmas”, with holiday piano. ${MV_EN}`,
      `${PHOTO_EN} ${LIMIT_EN} ${SOUND_EN} ViralReel does not generate a licensed Snoopy character sheet or a screenshot of the 1965 special.`,
    ],
    [
      `视频在 ${TZ} 。${CLIPS_ZH} ${OUT_ZH} 滤镜别名在 https://www.viralreel.app/zh/snoopy-christmas-filter 。Peanuts 圣诞滤镜在 https://www.viralreel.app/zh/peanuts-christmas-filter 。${SPLIT_ZH}`,
      `一套 Snoopy 静帧提示词，包括 media.io 那种提示词列表，不会渲染这条 MP4。MakeViral 在 ${MV} 的主路径也是静帧（Nano Banana 2.1，3 积分），它的视频是另一段 Kling，标题常像「A Merry Christmas」，配节日钢琴。${MV_ZH}`,
      `${PHOTO_ZH} ${LIMIT_ZH} ${SOUND_ZH} ViralReel 不生成授权的 Snoopy 角色表，也不生成 1965 年特辑的截图。`,
    ],
    [
      {
        q: { en: 'Can I get a photoreal photo with Snoopy here?', zh: '我能在这里得到和 Snoopy 的写实合影吗？' },
        a: {
          en: 'No. That is the “foto con Snoopy” still wave. ViralReel exports the scan-line cartoon video.',
          zh: '不能。那是「foto con Snoopy」静帧潮。ViralReel 导出的是扫描线卡通视频。',
        },
      },
      {
        q: { en: 'Is /snoopy-filter this page?', zh: '/snoopy-filter 是这一页吗？' },
        a: {
          en: 'No. /snoopy-filter redirects to the Snoopy Christmas filter page, which is the video filter. This page is the still-versus-video split.',
          zh: '不是。/snoopy-filter 会重定向到 Snoopy 圣诞滤镜页，那是视频滤镜。这一页专门区分静帧和视频。',
        },
      },
    ]
  ),
];
