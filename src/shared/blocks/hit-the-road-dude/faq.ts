import { CANONICAL_PRICING } from '@/shared/lib/pricing-copy';
import { getVideoCostTable } from '@/shared/lib/video-cost';
import {
  formatCreditCount,
  usdFromCredits,
  videoCreditCost,
  type VideoCostTable,
} from '@/shared/lib/video-yield';

export interface HitTheRoadFaqContext {
  videoCosts?: VideoCostTable;
  creditsPerUsd?: number;
}

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

export function hitTheRoadCostFacts(ctx: HitTheRoadFaqContext = {}) {
  const table = ctx.videoCosts?.length ? ctx.videoCosts : getVideoCostTable();
  const creditsPerUsd =
    ctx.creditsPerUsd && ctx.creditsPerUsd > 0
      ? ctx.creditsPerUsd
      : CANONICAL_PRICING.creditsPerUsd;
  const p480 = videoCreditCost(table, '480p', 8);
  const p720 = videoCreditCost(table, '720p', 8);
  const p72012 = videoCreditCost(table, '720p', 12);
  const p1080 = videoCreditCost(table, '1080p', 15);
  return {
    p480,
    p720,
    p72012,
    p1080,
    creditsPerUsd,
    usd: usdFromCredits(p720, creditsPerUsd),
    packs: CANONICAL_PRICING,
  };
}

/** Credit-table answer. Numbers come from the same table the pricing page renders. */
export function hitTheRoadCostAnswer(zh: boolean, ctx: HitTheRoadFaqContext = {}) {
  const { p480, p720, p72012, p1080, creditsPerUsd, usd, packs } = hitTheRoadCostFacts(ctx);
  const pricing = site(zh, '/pricing');
  const subscribe = site(zh, '/subscribe');
  if (zh) {
    return `ViralReel 按积分计费，Hit the Road Dude 生成器会在开始前显示本次消耗。当前积分表上，480p / 8 秒是 ${formatCreditCount(p480)} 积分，720p / 8 秒是 ${formatCreditCount(p720)} 积分（按 ${creditsPerUsd} 积分 = 1 美元，约 ${usd}），720p / 12 秒是 ${formatCreditCount(p72012)} 积分，1080p / 15 秒是 ${formatCreditCount(p1080)} 积分。一次性积分包 ${packs.packStarterPrice} 起（${packs.packStarterCredits} 积分），见 ${pricing}。月付 ${packs.monthlyStarterPrice}/月起（每月 ${packs.monthlyStarterCredits} 积分），见 ${subscribe}；Plus 为 ${packs.plusPrice}/月（${packs.plusCredits} 积分），Pro 为 ${packs.proPrice}/月（${packs.proCredits} 积分）。加购为 ${creditsPerUsd} 积分 = 1 美元。`;
  }
  return `ViralReel charges credits, and the Hit the Road Dude generator shows the exact cost before you start. On the current credit table, 480p / 8s is ${formatCreditCount(p480)} credits, 720p / 8s is ${formatCreditCount(p720)} credits (about ${usd} at ${creditsPerUsd} credits = $1), 720p / 12s is ${formatCreditCount(p72012)} credits, and 1080p / 15s is ${formatCreditCount(p1080)} credits. One-time packs start at ${packs.packStarterPrice} (${packs.packStarterCredits} credits) at ${pricing}. Monthly plans start at ${packs.monthlyStarterPrice}/mo (${packs.monthlyStarterCredits} credits) at ${subscribe}; Plus is ${packs.plusPrice}/mo (${packs.plusCredits} credits) and Pro is ${packs.proPrice}/mo (${packs.proCredits} credits). Top-ups are ${creditsPerUsd} credits = $1.`;
}

export function hitTheRoadWatermarkAnswer(zh: boolean) {
  const pricing = site(zh, '/pricing');
  if (zh) {
    return `付费积分包以及月付方案导出时没有 ViralReel 水印，720p 和 1080p 都支持。每个积分包和套餐都列在 ${pricing}。`;
  }
  return `Paid credit packs and monthly plans export without a ViralReel watermark, at both 720p and 1080p. Every pack and plan is listed at ${pricing}.`;
}

export function hitTheRoadRefundAnswer(zh: boolean) {
  if (zh) {
    return '生成被接受时扣除积分。如果这次任务失败或被取消，包括模型拒绝这张照片，这些积分会退回余额。已经付给积分包或套餐的钱，不会仅仅因为积分没用完就按现金退回。';
  }
  return 'Credits are deducted when a generation is accepted. If that job fails or is canceled, including when the model rejects the photo, those credits return to your balance. Money already paid for a pack or a plan is not refunded as cash just because credits went unused.';
}

export function hitTheRoadOfficialAnswer(zh: boolean) {
  if (zh) {
    return '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，不是 Hit the Road Dude 梗、原始 TikTok，或片中人物的官方账号、官方视频或权利方。模板用一张照片搭建新的虚构场景。';
  }
  return 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not the official account, video, or rights holder of the Hit the Road Dude meme, the original TikTok, or the people in that clip. The templates stage a new fictional scene from one photo.';
}

export function hitTheRoadPhotoAnswer(zh: boolean) {
  if (zh) {
    return '一张。州有土地、司机反应和私人领地都只用一张你有权使用的单人照片。宠物照片也可以试，不同模型效果有差异。不要用未成年人、名人或公众人物的照片。';
  }
  return 'One. State Property, Driver Reaction, and Private Property each take one photo of one person you have permission to use. A pet photo can be tried, and results vary by model. Do not use photos of minors, celebrities, or public figures.';
}

/** Shared by the visible FAQ and the page's FAQPage JSON-LD. */
export function getHitTheRoadDudeFaq(
  zh: boolean,
  ctx: HitTheRoadFaqContext = {}
): [string, string][] {
  const template = site(zh, '/hit-the-road-dude-ai-template');
  if (zh) {
    return [
      ['Hit the Road Dude AI 视频是什么？', '它是用一张照片新做的短片，不是原片搬运。场景是停在路边的白色皮卡，车外有人朝看起来像私人领地的地方比画，司机反应之后用一句平淡的 “hit the road dude” 让对方离开。同一段对话也被叫做 State Property、Private Property 或 Lock ’Em Up。ViralReel 的模板搭的是这个节奏的虚构版本，不是原争执的画面，也不是这个梗的官方视频。'],
      ['Hit the Road Dude 和 State Property 梗是同一个吗？', '是。Hit the Road Dude、State Property、Private Property 指的都是皮卡车窗边那次对话：来访者说以为钓鱼的池塘是公共土地，司机难以置信地重复 “State?”，随后让对方离开。Lock ’Em Up 则出自原片更靠后的部分。大家搜 AI 二创时这些叫法是混用的。'],
      ['“hit the road, dude”是什么意思？', '意思是“走吧、离开这里”，是一句不带情绪起伏的驱赶语，和歌曲 Hit the Road Jack 没有关系。在这个梗里，这句台词就是司机停顿之后的包袱。'],
      ['Hit the Road Dude 梗最早来自哪里？', '据 Know Your Meme 记载，原始 TikTok 由 @bird28thegr8 于 2025 年 8 月 21 日上传，标题是 “Angry grandpa kicks me out my fishing spot”，从钓鱼者一侧拍下池塘边的真实争执。把司机换成别人或宠物的 AI 二创从 2026 年 10 月开始大范围传播。'],
      ['怎么制作 Hit the Road Dude AI 视频？', `打开 ViralReel 的模板：${template}。上传一张清晰照片，用 9:16 生成，下载 MP4，再在 TikTok、Reels 或 Shorts 里加上热梗原声和 AI 标注。ViralReel 不授权这段音频。生成前可选州有土地、司机反应或私人领地，页面会先显示积分。`],
      ['需要几张照片？', hitTheRoadPhotoAnswer(true)],
      ['需要原视频或原声吗？', '不需要，上传一张照片即可开始。站点管理员可以另外配置参考视频或音频；模板并不承诺还原原声、真人说话内容或精确台词。卡片上的视频是该格式的授权参考片段，不是 AI 生成结果，也不是原始 TikTok。'],
      ['什么样的照片效果最好？', '用一张光线均匀的单人清晰照片，眼睛和嘴巴要看得见——司机的表情就是这个梗的笑点。不要用合照、戴墨镜或重滤镜的照片。支持 JPG、PNG、WebP，且只上传你有权使用的图片。'],
      ['可以让狗或猫坐进驾驶座吗？', '可以尝试——模板只需要一个参考主体，部分图生视频模型能处理宠物照片。不同模型效果差异较大，请先预览再分享。使用你自己的宠物照片，或获得授权的宠物照片。'],
      ['可以用别人的照片吗？', '仅在获得对方授权的前提下使用，且仅限成年人。不要使用未成年人、名人或公众人物的照片，也不要把成片当作某人真实言行的记录来传播。'],
      ['视频多长？用什么画幅？', '生成器默认 9:16 竖屏，也就是这条趋势在 TikTok、Reels 和 Shorts 上使用的画幅。可选时长和分辨率取决于所选模型，生成前在弹窗里确认。'],
      ['需要装 App、用 CapCut 模板或写提示词吗？', '不需要。ViralReel 在浏览器里运行：选模板、传一张照片、直接生成。场景、构图和动作方向都已预设，不用写空白提示词，也不用安装任何东西。'],
      ['制作 Hit the Road Dude AI 视频需要多少积分？', hitTheRoadCostAnswer(true, ctx)],
      ['付费导出有水印吗？', hitTheRoadWatermarkAnswer(true)],
      ['生成失败积分会退吗？', hitTheRoadRefundAnswer(true)],
      ['生成结果会用原声吗？', '不保证。部分模型可使用站点管理员另行配置的已授权参考音频；否则由模型自行生成声音。ViralReel 不授权原梗音频或任何歌曲。口型精准同步同样不做承诺——发布前请完整观看并收听成片。'],
      ['发布前需要检查什么？', '检查面部、驱赶手势和声音。以 AI 生成娱乐内容的名义分享，遵守各平台的 AI 标注规则，绝不用二创视频冒充、骚扰或欺骗他人。热梗原声在 TikTok、Reels 或 Shorts 里另加。'],
      ['这是官方视频或官方账号吗？', hitTheRoadOfficialAnswer(true)],
    ];
  }
  return [
    ['What is the Hit the Road Dude AI video?', 'It is a new clip made from one photo, not a repost of the original. The scene is a white pickup stopped at the roadside, a person outside the window gesturing toward private-looking property, and the driver reacting before a flat “hit the road dude” dismissal. The same exchange is also called the State Property meme, the Private Property meme, or Lock ’Em Up. On ViralReel the templates stage a fictional version of that beat. They are not footage of the original dispute and not an official video of the meme.'],
    ['Is Hit the Road Dude the same as the State Property meme?', 'Yes. Hit the Road Dude, State Property, and Private Property all refer to the same pickup-truck exchange: a visitor says he thought the fishing spot was public land, the driver reacts with a stunned “State?”, then tells him to leave. Lock ’Em Up comes from a later part of the original clip. People use the names interchangeably when searching for AI remakes.'],
    ['What does “hit the road, dude” mean?', 'It means “leave, get out of here” — a flat dismissal. It has nothing to do with the song Hit the Road Jack. In the meme, the line is the punchline after the driver’s incredulous pause.'],
    ['Where did the Hit the Road Dude meme come from?', 'Know Your Meme records the original TikTok as an August 21, 2025 upload by @bird28thegr8, captioned “Angry grandpa kicks me out my fishing spot”. It shows a real disagreement by a pond, filmed from the fishermen’s side. AI remakes that swap the driver spread widely in October 2026.'],
    ['How do I make a Hit the Road Dude video?', `Open the ViralReel template at ${template}. Upload one clear photo, generate at 9:16, download the MP4, then add the trend sound and the AI label in TikTok, Reels, or Shorts. ViralReel does not license that audio. Pick State Property, Driver Reaction, or Private Property before you generate. The page shows the credit cost first.`],
    ['How many photos do I need?', hitTheRoadPhotoAnswer(false)],
    ['Do I need the original clip or its audio?', 'No. You can upload one photo to start. An optional reference video or audio may be added by the site administrator. No original audio, real-person speech, or exact dialogue is promised. The videos on the template cards are authorized reference clips of the format, not AI outputs and not the original TikTok.'],
    ['What kind of photo works best?', 'Use a clear, well-lit portrait of one person with the eyes and mouth visible — the driver’s expression carries the joke. Avoid group photos, sunglasses, and heavy filters. JPG, PNG, or WebP images work; use only a photo you have permission to upload.'],
    ['Can I put a dog or a cat in the driver seat?', 'You can try — the template takes one reference subject, and some image-to-video models handle pet photos. Results vary by model, so preview before sharing. Use a photo of your own pet or one you have permission to use.'],
    ['Can I use a friend’s photo?', 'Only with their permission, and only for an adult. Do not use photos of minors, celebrities, or public figures, and do not present the finished clip as a real recording of that person.'],
    ['How long is the video and what ratio is it?', 'The generator opens at 9:16 vertical, the ratio TikTok, Reels, and Shorts use for this trend. Available lengths and resolutions depend on the selected model; check the options in the dialog before you generate.'],
    ['Do I need an app, a CapCut template, or a prompt?', 'No. ViralReel runs in the browser: pick a template, upload one photo, and generate. The scene, framing, and motion direction are pre-built, so there is no blank prompt to write and nothing to install.'],
    ['How much does a Hit the Road Dude AI video cost?', hitTheRoadCostAnswer(false, ctx)],
    ['Are paid exports watermark-free?', hitTheRoadWatermarkAnswer(false)],
    ['What if a generation fails?', hitTheRoadRefundAnswer(false)],
    ['Will the result use the original voice?', 'Not guaranteed. Some models can take a separately licensed reference audio configured by the site administrator; otherwise the model generates its own sound. ViralReel does not license the trend audio or any song. Frame-perfect lip sync is never promised — watch and listen to the full result before posting.'],
    ['What should I check before posting?', 'Check the face, the dismissal gesture, and the sound. Share the clip as AI-generated entertainment, follow each platform’s AI-disclosure rule, and never use the remake to impersonate, harass, or deceive. Add the trend sound inside TikTok, Reels, or Shorts.'],
    ['Is this an official video or account?', hitTheRoadOfficialAnswer(false)],
  ];
}
