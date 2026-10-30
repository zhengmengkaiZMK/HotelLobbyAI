import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const NOSTALGIA_PRODUCT = { en: 'NostalgIA CapCut', zh: 'NostalgIA CapCut' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** NostalgIA CapCut FAQ — shared by the page JSON-LD and the landing layout. */
export function getNostalgiaFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/nostalgia-ai-template');
  if (zh) {
    return [
      ['NostalgIA 是什么趋势？', '它是 2026 年 10 月底起在 TikTok 走红的 AI 短视频格式：AI 把你放进一支复刻的怀旧电视广告里——复古老巧克力棒广告的后院布景、黑边 SD 画质、咬一口巧克力棒、对着镜头露出夸张的电视广告式笑容，画面还带红色描边的 jingle 文字。帖子文案通常是「pov: you always wanted to know how you\'d look in this ad」。名字 NostalgIA 是 Nostalgia（怀旧）加 IA（AI 的双关拼写）。'],
      ['NostalgIA 和 CapCut 有什么关系？', '很多人搜「NostalgIA CapCut」是想找 CapCut 里的同名模板。CapCut 的做法是在 App 内把素材贴进固定工程；ViralReel 的做法是在浏览器里用 AI 直接生成一条新的广告复刻视频，主角是照片里的人。对照页是 ' + site(true, '/nostalgia-capcut') + '，不用 CapCut 的路径是 ' + site(true, '/nostalgia-without-capcut') + '。ViralReel 不托管 CapCut 工程，也不授权任何广告原声。'],
      ['NostalgIA 和 2023 年 Bad Bunny 的 AI 歌曲是一回事吗？', '不是。2023 年那首「NostalgIA」是智利制作人 FlowGPT 用 AI 模仿 Bad Bunny 嗓音创作的雷鬼顿歌曲，与本趋势无关。2026 年这波 NostalgIA CapCut 指的是把人 AI 换进复古老电视广告的视频格式。两个名字相同、内容完全不同，看到时要分清。'],
      ['NostalgIA 视频复刻的是哪支广告？', '这波格式复刻的是经典巧克力棒电视广告的套路：郊区后院布景、阳光、主角举起巧克力棒咬一口，再对着镜头念出 jingle——也就是 1980 年代起美国电视上「Scrumptious! \'Cause it\'s crunchous!」那类广告的样子。ViralReel 的版本是原创戏仿：道具没有可读品牌标识，与广告原品牌方没有任何隶属或授权关系。'],
      ['如何用一张照片制作 NostalgIA AI 视频？', `打开 ${template} ，上传一张清晰正面照，选一个模板变体，在浏览器里直接生成 9:16 竖屏视频：AI 会把你放进复古老广告场景，完成咬巧克力棒和对镜头微笑的整套动作。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上趋势原声并按平台要求标注 AI 生成。`],
      ['视频里带原声吗？', '不带。ViralReel 导出的是画面文件。发布时在 TikTok、Reels 或 Shorts 的曲库里另加热梗原声，并配上「pov: you always wanted to know how you\'d look in this ad」文案，这样你的帖子才会进入同一条趋势。ViralReel 不授权那段音频。'],
      ['NostalgIA AI 视频用多大画幅？', '用 9:16 竖屏导出。趋势原片是 9:16 里内嵌 4:3 黑边的复古老电视观感，这个黑边样式是格式的一部分，模板已内置。'],
      ['最多可以用几张照片？', '一张。这条趋势是单人广告主角位，一个视频只放一个角色。想给朋友也做，就每人各做一条，然后把它们连着发。'],
      ['需要写提示词吗？', '不需要。模板已内置复古广告布景、SD 画质、道具动作和 jingle 文字样式。你上传一张照片然后生成。生成前可以编辑提示词做微调，但大多数用户直接一键生成。'],
      ['在 ViralReel 做一条要多少积分？', templateLiveCostAnswer(NOSTALGIA_PRODUCT, true, ctx)],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      ['可以用名人或孩子的照片吗？', '不可以。只使用你本人或经同意的成年人（18+）照片。不要用未成年人、名人或陌生人照片，也不要试图把 AI 输出伪装成真实的老广告。'],
      ['ViralReel 和广告品牌方或趋势作者有关系吗？', '没有。ViralReel（viralreel.app）是独立的 AI 视频模板站，与任何糖果品牌、广告代理或趋势作者没有隶属或合作关系。模板用一张照片生成新的虚构戏仿视频。页面上的预览视频用于展示格式，均来自公开的 TikTok 趋势剪辑。'],
    ];
  }
  return [
    ['What is the NostalgIA trend?', 'It is an AI short-video format that took off on TikTok in late October 2026: AI drops you inside a recreated retro TV commercial — the backyard set, letterboxed SD picture, and jingle text of a classic chocolate-bar ad — as you bite the bar and grin at the camera. Posts are captioned "pov: you always wanted to know how you\'d look in this ad". The name NostalgIA is a pun on nostalgia plus IA (as in AI).'],
    ['What does NostalgIA have to do with CapCut?', 'Most "NostalgIA CapCut" searches are people hunting for a CapCut template of the trend. CapCut pastes clips into a fixed project inside the app; ViralReel generates a brand-new ad recreation from your photo in the browser. The comparison is ' + site(false, '/nostalgia-capcut') + ' and the no-CapCut path is ' + site(false, '/nostalgia-without-capcut') + '. ViralReel does not host a CapCut project and does not license any ad audio.'],
    ['Is NostalgIA the same as the 2023 Bad Bunny AI song?', 'No. The 2023 "NostalgIA" is a reggaeton track by the Chilean producer FlowGPT that cloned Bad Bunny\'s voice with AI — a different thing entirely. The 2026 NostalgIA CapCut trend is the video format that puts people inside recreated retro TV ads. Same word, two unrelated memes — keep them apart when you post.'],
    ['Which commercial does the NostalgIA video recreate?', 'The format recreates the classic chocolate-bar TV-ad routine: a sunny suburban backyard, the star raising the bar, taking one bite, and pitching to the camera — the world of the 1980s "Scrumptious! \'Cause it\'s crunchous!" jingle ads. The ViralReel version is an original parody: the prop carries no readable brand logos, and ViralReel is not affiliated with or licensed by the original brand.'],
    ['How do I make a NostalgIA AI video from a photo?', `Open ${template}, upload one clear front-facing photo, pick a template variant, and generate a 9:16 vertical clip in the browser: the AI places you inside the retro ad scene and performs the bite and the camera grin. Download the MP4, add the trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks.`],
    ['Does my video come with the trend sound?', 'No. ViralReel exports the picture only. When you post, add the trend sound in the TikTok, Reels, or Shorts sound picker and use the "pov: you always wanted to know how you\'d look in this ad" caption so your video joins the trend. ViralReel does not license that audio.'],
    ['What aspect ratio should a NostalgIA video use?', 'Export 9:16 vertical. The trend posts are 9:16 with a letterboxed 4:3 retro-TV picture inside — the black bars are part of the format and the template adds them for you.'],
    ['How many photos can I upload?', 'One. The trend is a single star in the ad, so the video features one character. To include your friends, make one video per person and post them back to back.'],
    ['Do I need to write a prompt?', 'No. The template has the retro set, the SD look, the prop action, and the jingle text built in. Upload one photo and generate. You can edit the prompt before generating for tweaks, but most people use the one-tap flow.'],
    ['How much does a NostalgIA AI video cost on ViralReel?', templateLiveCostAnswer(NOSTALGIA_PRODUCT, false, ctx)],
    ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
    ['What if a generation fails?', failedJobCreditRefundAnswer(false)],
    ['Can I use a photo of a child or a celebrity?', 'No. Use photos of yourself or of adults (18+) who agreed to it. Do not make this video of minors, celebrities, or strangers, and do not pass the output off as a genuine old commercial.'],
    ['Is ViralReel affiliated with the ad brand or the trend creators?', 'No. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with any candy brand, ad agency, or the trend posters. The template generates a new fictional parody video from one photo. Preview videos on this page show the format and come from public TikTok trend clips.'],
  ];
}
