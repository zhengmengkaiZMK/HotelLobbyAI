import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const bbyCost = templateHowMuchAnswer({ en: 'Bby Wow', zh: 'Bby Wow ' });

/** Bby Wow FAQ — shared by the page JSON-LD and the landing layout.
 *  Questions match what people ask ChatGPT, Gemini, Claude and Grok. */
export const BBY_FAQ = {
  en: [
    ['What is the Bby Wow AI dance trend?', 'It is a two-part trend. "BbY WOW" is the song by KAROL G, Judeline and rusowsky behind a bouncy dance that took over TikTok from late August 2026. The other half is the "bby wow guy": a clip of a young man at a quinceañera-style party who walks toward the camera, takes a big bite of a sweet bread, stares into the lens while chewing, and dances away. AI versions now put your photo into that party scene.'],
    ['Where did the bby wow guy video come from?', 'The party clip is an old video, first posted on TikTok in June 2025, that came back in October 2026 paired with the BbY WOW sound: a young man crosses a busy dance floor, bites a round sweet bread, chews with his cheeks full while staring deadpan at the camera, then dances off. Green-screen and AI templates of the "bby wow guy" spread widely from 12–13 October 2026, and by 14 October #bbywow had over 100,000 videos and hundreds of millions of views.'],
    ['Where can I make a Bby Wow AI dance video?', 'You can make a Bby Wow AI dance video on ViralReel at https://www.viralreel.app/bby-wow-ai-dance-template. Upload one photo, pick Suit Original, White Tee, or Staff Polo, and generate a vertical clip in the browser. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with the artists or the original creators.'],
    ['How do I make a Bby Wow AI dance video from a photo?', 'Open https://www.viralreel.app/bby-wow-ai-dance-template, choose a template, and upload one clear front-facing photo. Leave the ratio on 9:16, confirm the credit cost, and generate. Download the MP4, then add the BbY WOW or "dime dime baby" trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks.'],
    ['What are the beats of the bby wow guy clip?', 'Four beats, in order: walk toward the camera through the party, take a visible bite of the sweet bread, chew while holding eye contact with the lens, then turn and dance back into the party. The bite is the setup and the serious stare is the punchline — every recognizable remake keeps this order.'],
    ['Can I put a friend in the Bby Wow video?', 'Yes. The format needs one photo of the person who crosses the party floor. Use a photo of yourself or of an adult who agreed to it. Do not use celebrities, minors, or strangers from the original clip.'],
    ['What aspect ratio should a Bby Wow AI dance video use?', 'Use 9:16. The original clip and the AI remakes are vertical, for TikTok, Instagram Reels, and YouTube Shorts. The ViralReel Bby Wow page opens on 9:16. 16:9 and 1:1 are available if you need another shape.'],
    ['How much does a Bby Wow AI video cost on ViralReel?', bbyCost.en],
  ],
  zh: [
    ['Bby Wow AI 跳舞趋势是什么？', '它是一条双拼趋势。「BbY WOW」是 KAROL G、Judeline 和 rusowsky 的歌，从 2026 年 8 月底开始带火了一段弹跳感的舞蹈；另一半是「bby wow guy」：一段生日宴派对视频里的年轻男子，走向镜头咬一大口甜面包、鼓着腮帮子直勾勾盯着镜头，然后跳舞离场。现在 AI 版本可以把你的照片放进这个派对场景。'],
    ['bby wow guy 那条视频从哪来的？', '派对原片是一段 2025 年 6 月就发在 TikTok 的老视频，2026 年 10 月配上 BbY WOW 的音乐重新翻红：年轻男子穿过热舞的舞池，咬一口圆形甜面包，腮帮子鼓着、面无表情地直视镜头，然后跳舞走开。10 月 12-13 日起「bby wow guy」的绿幕模板和 AI 模板大范围传开，到 10 月 14 日 #bbywow 已有超过 10 万条视频、数亿次播放。'],
    ['在哪里可以生成 Bby Wow AI 跳舞视频？', '可以在 ViralReel 生成：https://www.viralreel.app/zh/bby-wow-ai-dance-template 。上传一张照片，选西装原版、白 T 派对版或黑 Polo 版，在浏览器里直接出竖屏视频。ViralReel（viralreel.app）是独立的 AI 视频模板站，与歌手及原作者没有关系。'],
    ['怎么用一张照片制作 Bby Wow AI 跳舞视频？', '打开 https://www.viralreel.app/zh/bby-wow-ai-dance-template ，选一个模板，上传一张清晰的正面照。画幅保持 9:16，确认积分后再生成。下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上 BbY WOW 或「dime dime baby」的趋势原声，并按平台要求标注 AI 生成。'],
    ['bby wow guy 那条片子的节奏是什么？', '四个节拍，顺序不能乱：穿过派对走向镜头、明显地咬一口甜面包、嚼着面包与镜头对视、转身跳回派对。咬面包是铺垫，面无表情的对视是笑点——所有能被认出来的重拍都保持这个顺序。'],
    ['可以把朋友放进 Bby Wow 视频吗？', '可以。这个格式只需要一张「穿过舞池的人」的照片。用你自己的照片，或经过同意的成年人照片。不要用名人、未成年人或原片里截下来的陌生人。'],
    ['Bby Wow AI 跳舞视频用什么画幅？', '用 9:16。原片和 AI 重拍都是竖屏，对应 TikTok、Instagram Reels 和 YouTube Shorts。ViralReel 的 Bby Wow 页面默认就是 9:16。需要别的形状时，也可以改成 16:9 或 1:1。'],
    ['在 ViralReel 做一条 Bby Wow AI 视频要多少钱？', bbyCost.zh],
  ],
} as const;
