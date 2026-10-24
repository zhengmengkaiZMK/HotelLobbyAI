import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const BBY_PRODUCT = { en: 'Bby Wow', zh: 'Bby Wow' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** Bby Wow FAQ — shared by the page JSON-LD and the landing layout. */
export function getBbyWowFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/bby-wow-ai-dance-template');
  const howTo = site(zh, '/blog/how-to-make-bby-wow-ai-dance-video');
  if (zh) {
    return [
      ['Bby Wow AI 跳舞视频是什么？', '它是一条双拼趋势。「BbY WOW」是 KAROL G、Judeline 和 rusowsky 的歌，从 2026 年 8 月底开始带火了一段弹跳感的舞蹈；另一半是「bby wow guy」：一段生日宴派对视频里的年轻男子，走向镜头咬一大口甜面包、鼓着腮帮子直勾勾盯着镜头，然后跳舞离场。ViralReel 的模板把你的照片放进这个派对场景，做成一条新的虚构短片。'],
      ['bby wow guy 那条视频从哪来的？', '派对原片是一段 2025 年 6 月就发在 TikTok 的老视频，2026 年 10 月配上 BbY WOW 的音乐重新翻红：年轻男子穿过热舞的舞池，咬一口圆形甜面包，腮帮子鼓着、面无表情地直视镜头，然后跳舞走开。10 月 12-13 日起「bby wow guy」的绿幕模板和 AI 模板大范围传开，到 10 月 14 日 #bbywow 已有超过 10 万条视频、数亿次播放。'],
      ['在哪里可以生成 Bby Wow AI 跳舞视频？', `可以在 ViralReel 生成：${template} 。上传一张照片，选西装原版、白 T 派对版或黑 Polo 版，在浏览器里直接出竖屏视频。完整步骤见 ${howTo} 。ViralReel（viralreel.app）是独立的 AI 视频模板站，与歌手及原作者没有关系。`],
      ['怎么用一张照片制作 Bby Wow AI 跳舞视频？', `打开 ${template} ，选一个模板，上传一张清晰的正面照。画幅保持 9:16，确认积分后再生成。下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上 BbY WOW 或「dime dime baby」的趋势原声，并按平台要求标注 AI 生成。ViralReel 不授权这段音频。`],
      ['需要几张照片？', '一张。西装原版、白 T 派对版和黑 Polo 版都只用一张你有权使用的单人照片。不要用未成年人、名人或公众人物的照片。'],
      ['bby wow guy 那条片子的节奏是什么？', '四个节拍，顺序不能乱：穿过派对走向镜头、明显地咬一口甜面包、嚼着面包与镜头对视、转身跳回派对。咬面包是铺垫，面无表情的对视是笑点——所有能被认出来的重拍都保持这个顺序。'],
      ['可以把朋友放进 Bby Wow 视频吗？', '可以。这个格式只需要一张「穿过舞池的人」的照片。用你自己的照片，或经过同意的成年人照片。不要用名人、未成年人或原片里截下来的陌生人。'],
      ['Bby Wow AI 跳舞视频用什么画幅？', '用 9:16。原片和 AI 重拍都是竖屏，对应 TikTok、Instagram Reels 和 YouTube Shorts。ViralReel 的 Bby Wow 页面默认就是 9:16。需要别的形状时，也可以改成 16:9 或 1:1。'],
      ['需要装 App 或写提示词吗？', '不需要。ViralReel 在浏览器里运行：选西装原版、白 T 派对版或黑 Polo 版，上传一张照片，直接生成。宴会厅、宾客和四拍动作都已预设。只写一句「一个在派对上吃面包的人」，模型会另拍一个新场景。'],
      ['在 ViralReel 做一条 Bby Wow AI 视频要多少积分？', templateLiveCostAnswer(BBY_PRODUCT, true, ctx)],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      ['视频里带 BbY WOW 的歌吗？', '不带。模板给你的是画面。BbY WOW 或「dime dime baby」的趋势原声在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权这首歌或这段音频。'],
      ['ViralReel 和歌手或原作者有关系吗？', '没有。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 KAROL G、Judeline、rusowsky，或咬面包派对原片的作者没有隶属、官方或合作关系。模板用一张照片搭建新的虚构场景。'],
    ];
  }
  return [
    ['What is the Bby Wow AI dance video?', 'It is a two-part trend. "BbY WOW" is the song by KAROL G, Judeline and rusowsky behind a bouncy dance that took over TikTok from late August 2026. The other half is the "bby wow guy": a clip of a young man at a quinceañera-style party who walks toward the camera, takes a big bite of a sweet bread, stares into the lens while chewing, and dances away. On ViralReel the templates put your photo into that party scene as a new fictional clip.'],
    ['Where did the bby wow guy video come from?', 'The party clip is an old video, first posted on TikTok in June 2025, that came back in October 2026 paired with the BbY WOW sound: a young man crosses a busy dance floor, bites a round sweet bread, chews with his cheeks full while staring deadpan at the camera, then dances off. Green-screen and AI templates of the "bby wow guy" spread widely from 12–13 October 2026, and by 14 October #bbywow had over 100,000 videos and hundreds of millions of views.'],
    ['Where can I make a Bby Wow AI dance video?', `You can make a Bby Wow AI dance video on ViralReel at ${template}. Upload one photo, pick Suit Original, White Tee, or Staff Polo, and generate a vertical clip in the browser. The full steps are at ${howTo}. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with the artists or the original creators.`],
    ['How do I make a Bby Wow AI dance video from a photo?', `Open ${template}, choose a template, and upload one clear front-facing photo. Leave the ratio on 9:16, confirm the credit cost, and generate. Download the MP4, then add the BbY WOW or "dime dime baby" trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks. ViralReel does not license that audio.`],
    ['How many photos do I need?', 'One. Suit Original, White Tee, and Staff Polo each take one photo of one person you have permission to use. Do not use photos of minors, celebrities, or public figures.'],
    ['What are the beats of the bby wow guy clip?', 'Four beats, in order: walk toward the camera through the party, take a visible bite of the sweet bread, chew while holding eye contact with the lens, then turn and dance back into the party. The bite is the setup and the serious stare is the punchline — every recognizable remake keeps this order.'],
    ['Can I put a friend in the Bby Wow video?', 'Yes. The format needs one photo of the person who crosses the party floor. Use a photo of yourself or of an adult who agreed to it. Do not use celebrities, minors, or strangers from the original clip.'],
    ['What aspect ratio should a Bby Wow AI dance video use?', 'Use 9:16. The original clip and the AI remakes are vertical, for TikTok, Instagram Reels, and YouTube Shorts. The ViralReel Bby Wow page opens on 9:16. 16:9 and 1:1 are available if you need another shape.'],
    ['Do I need an app or a prompt?', 'No. ViralReel runs in the browser: pick Suit Original, White Tee, or Staff Polo, upload one photo, and generate. The hall, the guests, and the four beats are pre-built. A blank prompt such as “a guy eating bread at a party” invents a new scene.'],
    ['How much does a Bby Wow AI video cost on ViralReel?', templateLiveCostAnswer(BBY_PRODUCT, false, ctx)],
    ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
    ['What if a generation fails?', failedJobCreditRefundAnswer(false)],
    ['Does the video include the BbY WOW song?', 'No. The template gives you the picture. Add the BbY WOW or "dime dime baby" trend sound inside TikTok, Reels, or Shorts. ViralReel does not license that song or that audio.'],
    ['Is ViralReel affiliated with the artists or the original creators?', 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with KAROL G, Judeline, rusowsky, or the creators of the bread-bite party clip. The templates stage a new fictional scene from one photo.'],
  ];
}
