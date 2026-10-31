import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const WASSUP_PRODUCT = { en: 'Wassup in a Minute', zh: 'Wassup in a Minute' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** Wassup in a Minute FAQ — shared by the page JSON-LD and the landing layout. */
export function getWassupFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/wassup-in-a-minute-ai-template');
  if (zh) {
    return [
      ['Wassup in a Minute 是什么趋势？', '它是 2026 年 10 月下旬爆火的 TikTok 动画剪辑：手绘风的街服动漫角色（黑色羽绒服、粗链子、阔腿牛仔裤）在纯白背景上跟着 jersey club 节拍左右摇摆，配的歌词是「wassup, been a minute」。这股潮流的叫法源自 10 月 23 日起爆火的那条「Wassup in a minute」摇摆剪辑。ViralReel 的模板用一张照片把你画成同款角色并做出摇摆动画。'],
      ['wassup in a minute 的歌是什么？', '是一段 jersey club 风格的混音，取自 Drake 与 Jhené Aiko 的《From Time》，其中的歌词「wassup, been a minute」被大多数人听成「wassup in a minute」，也有人听成「wassup wait a minute」或「wasala in a minute」。ViralReel 不授权这段音频——发布时请在 TikTok 曲库里另加这条热梗原声。'],
      ['Atlanta Lock 是什么？和 Blue Lock 有关系吗？', 'Atlanta Lock 是粉丝圈对「把足球动漫《Blue Lock》角色画成亚特兰大说唱歌手」这一画风的昵称：羽绒服、金链子、阔腿裤、手挥一沓现金。摇摆剪辑把这种画风带火了。ViralReel 不绘制任何动漫或影视角色——你得到的是你本人的原创街服动漫形象。'],
      ['如何用一张照片制作 wassup in a minute AI 视频？', `打开 ${template} ，上传一张清晰正面照，选择一个模板变体，在浏览器里直接生成 9:16 竖屏视频：先把你画成全身街服动漫角色，再让角色按节拍摇摆。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上「wassup in a minute」原声并按平台要求标注 AI 生成。`],
      ['视频里带原声吗？', '不带。ViralReel 导出的是画面文件。发布时在 TikTok、Reels 或 Shorts 的曲库里搜索「wassup in a minute」添加热梗原声，这样你的帖子才会进入同一条趋势。ViralReel 不授权那段音频。'],
      ['可以用动漫角色或 Blue Lock 的角色吗？', '不可以。ViralReel 只用你的照片生成原创动漫形象，不绘制任何现有动漫、游戏或影视角色，也不使用粉丝画手的原画。Kling、Seedance 或 ChatGPT 提示词也不会让这个模板画出 Blue Lock 阵容。这正是这个模板可以放心发布的原因：画面是你自己的角色。'],
      ['最多可以用几张照片？', '最多四张，每张一个人物。角色会像原版剪辑一样在白底上排成一排、依次摇摆。少于此数也可以：上传几张就出几个角色。只使用你本人或经同意的成年人（18+）照片，不要用未成年人、名人或陌生人的照片。'],
      ['wassup in a minute AI 视频用多大画幅？', '用 9:16。原趋势是竖屏，对应 TikTok、Instagram Reels 和 YouTube Shorts。ViralReel 的页面默认 9:16。'],
      ['需要写提示词吗？', '不需要。模板已内置白底、街服造型和摇摆动作。公开页面没有空白提示词框。你上传照片然后生成。'],
      ['能用 CapCut 做吗？', `CapCut 是在 App 里把照片贴进固定模板。CapCut 里名为 WASSUP 的多镜头模板不是这条 AI 动漫摇摆。ViralReel 在浏览器里生成一条新的 MP4：${template} 。对照页是 ${site(true, '/wassup-in-a-minute-capcut')} ，不用 CapCut 的路径是 ${site(true, '/wassup-in-a-minute-without-capcut')} 。ViralReel 不托管 CapCut 工程，也不授权那段 jersey club 混音。`],
      ['这是 Kling 或 Seedance 提示词吗？', `不是。ViralReel 是固定的浏览器模板。如果看得到模型菜单，它只为这条模板选图生视频引擎，不是 Kling 3.0、Kling 4.0、Seedance 2.5 或 Seedance Mini 提示词。说明在 ${site(true, '/wassup-in-a-minute-kling')} 和 ${site(true, '/wassup-in-a-minute-seedance')} 。`],
      ['「in a minute」是不是生成只要一分钟？', '不是。那是歌词「wassup, been a minute」的常见听法。生成器写的是视频通常需要 2–3 分钟。导出的成片是 15 秒，不是一分钟，也不是 10 秒。'],
      ['在 ViralReel 做一条要多少积分？', templateLiveCostAnswer(WASSUP_PRODUCT, true, ctx)],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      ['能和朋友一起出现在一条里吗？', '可以。最多四个人，每张照片一个成年人，在白底上排成一排一起摇摆。一张合影不要塞进同一个位置。只用同意出镜的成年人照片。'],
      ['ViralReel 和趋势作者有关系吗？', '没有。ViralReel（viralreel.app）是独立的 AI 视频模板站，与趋势的发起者、画手或原帖作者没有隶属或合作关系。模板用一张照片生成新的虚构动画。页面上的预览视频用于展示格式，均标注了来源作者。'],
    ];
  }
  return [
    ['What is the wassup in a minute trend?', 'It is a TikTok animation edit that took off in late October 2026: hand-drawn anime characters in baggy streetwear — puffer jackets, chains, baggy jeans — sway side to side on a pure white background to a jersey-club beat with the line "wassup, been a minute". The name comes from the viral "Wassup in a minute" sway edit of 23 October. On ViralReel the template draws you as that character from one photo and animates the sway.'],
    ['What is the wassup in a minute song?', 'It is a jersey-club remix built on "From Time" by Drake with Jhené Aiko. The line "wassup, been a minute" is what most people hear as "wassup in a minute"; others hear "wassup wait a minute" or "wasala in a minute". ViralReel does not license that audio — add the trend sound inside TikTok when you post.'],
    ['What is Atlanta Lock, and is it Blue Lock?', 'Atlanta Lock is a fan nickname for drawings of the Blue Lock football anime cast as Atlanta rappers: puffer jackets, gold chains, baggy jeans, fanned-out cash. The sway edit made that look go viral. ViralReel never draws show characters — you get an original anime drawing of yourself in generic streetwear.'],
    ['How do I make a wassup in a minute AI video from a photo?', `Open ${template}, upload one clear front-facing photo, pick a template variant, and generate a 9:16 vertical clip in the browser: you are first drawn as a full-body streetwear anime character, then the character sways on the beat. Download the MP4, add the "wassup in a minute" sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks.`],
    ['Does my video come with the trend sound?', 'No. ViralReel exports the picture only. When you post, search "wassup in a minute" in the TikTok, Reels, or Shorts sound picker so your video joins the trend. ViralReel does not license that audio.'],
    ['Can I get a Blue Lock or anime character?', 'No. ViralReel works only from your photo and produces an original anime drawing of you. It does not draw existing anime, game, or movie characters and does not use fan artists\' drawings. A Kling, Seedance, or ChatGPT prompt will not make this template draw the Blue Lock cast either. That is also why the output is safe to post: the character is yours.'],
    ['Can I use a photo of a child or a celebrity?', 'No. Use photos of yourself or of adults (18+) who agreed to it. ViralReel does not make this video of minors, celebrities, or strangers.'],
    ['How many photos can I upload?', 'Up to four, one person per photo. The characters stand in a row on the white background and sway one after another, like the original edit. Fewer works too: the video shows as many characters as the photos you upload.'],
    ['What aspect ratio should a wassup in a minute video use?', 'Use 9:16. The trend is vertical, for TikTok, Instagram Reels, and YouTube Shorts. The ViralReel page opens on 9:16.'],
    ['Do I need to write a prompt?', 'No. The white background, the streetwear look, and the sway are already in the template. The public page has no blank prompt box. Upload your photos and generate.'],
    ['Can I make this in CapCut?', `CapCut pastes photos into a template inside the CapCut app. A CapCut multi-shot template named WASSUP is not this AI anime sway. ViralReel generates a new MP4 in the browser at ${template}. The comparison is ${site(false, '/wassup-in-a-minute-capcut')} and the no-CapCut path is ${site(false, '/wassup-in-a-minute-without-capcut')}. ViralReel does not host a CapCut project and does not license the jersey-club remix.`],
    ['Is this a Kling or Seedance prompt?', `No. ViralReel is a fixed browser template. If a model menu is visible, it only picks an image-to-video engine for this template. It is not a Kling 3.0, Kling 4.0, Seedance 2.5, or Seedance Mini prompt. See ${site(false, '/wassup-in-a-minute-kling')} and ${site(false, '/wassup-in-a-minute-seedance')}.`],
    ['Does “in a minute” mean generation takes one minute?', 'No. That is the common mishearing of the lyric “wassup, been a minute.” The generator says a video usually takes 2–3 minutes. The export is 15 seconds, not one minute and not 10 seconds.'],
    ['How much does a wassup in a minute AI video cost on ViralReel?', templateLiveCostAnswer(WASSUP_PRODUCT, false, ctx)],
    ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
    ['What if a generation fails?', failedJobCreditRefundAnswer(false)],
    ['Can my friends and I be in one video?', 'Yes. Up to four people, one adult per photo, standing in a row on white and swaying together. Do not put a group selfie in a single slot. Use photos of adults who agreed.'],
    ['Is ViralReel affiliated with the trend creators?', 'No. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with the trend originators, fan artists, or the original posters. The template generates a new fictional animation from one photo. Preview videos on this page show the format and credit their source creators.'],
  ];
}
