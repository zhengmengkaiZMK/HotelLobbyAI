import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const burningCost = templateHowMuchAnswer({
  en: 'Burning Bridges',
  zh: 'Burning Bridges ',
});

/** Burning Bridges FAQ — shared by the page JSON-LD and the home-style layout.
 *  Questions match what people ask ChatGPT, Gemini, Claude and Grok. */
export const BB_FAQ = {
  en: [
    ['Why did the Burning Bridges AI video go viral?', 'The Burning Bridges AI video went viral because the party is recognizable in one second: crystal chandeliers, a packed room, a metal cup, and the "where she at?" gesture with a hand over the eyes. The scene comes from the end of the Drake song Burning Bridges, released in May 2026 on the album Iceman. One photo is enough to put a friend or a pet in the center, so the format spread as fast as people could post it.'],
    ['Where can I make a Burning Bridges AI video?', 'You can make a Burning Bridges AI video on ViralReel at https://www.viralreel.app/burning-bridges-ai-template. Upload one photo and pick Office Party Classic, Fantasy Queen, Party Legend, Drama Lead or Pop Star. Dance Duo uses two photos, one per dancer. ViralReel (viralreel.app) is an independent AI video template site, not an official Drake product.'],
    ['How do I make a Burning Bridges AI video from a photo?', 'Open https://www.viralreel.app/burning-bridges-ai-template, choose a template, and upload one clear front-facing photo. Dance Duo needs a second photo. The generator opens on 16:9, which matches the widescreen party; switch to 9:16 for TikTok, Reels or Shorts. Confirm the credit cost, generate, then add the Burning Bridges trend sound in the app and label the post as AI-generated where it asks.'],
    ['What is the "where she at?" gesture in the Burning Bridges video?', 'It is the moment in the party scene when the person in the center covers their eyes with one hand on the line "where she at?", metal cup in the other hand, while the crowd reacts. AI remakes keep that room, that cup and that gesture, and change who stands in the center. The ViralReel templates follow that party format.'],
    ['Can I put a friend or a pet in the Burning Bridges video?', 'Yes. Most templates need one photo of whoever takes the center: you, a friend, or a pet. Dance Duo needs two photos, one per dancer. Use only photos you have permission to use. Skip sunglasses and group shots, because the amber party light hides a dark or blocked face.'],
    ['What aspect ratio should a Burning Bridges AI video use?', 'The original party scene is widescreen, so the ViralReel Burning Bridges generator opens on 16:9. Use 9:16 for TikTok, Instagram Reels and YouTube Shorts. 1:1 is available as well. Length is chosen in the generator, up to 15 seconds.'],
    ['How much does a Burning Bridges AI video cost on ViralReel?', burningCost.en],
    ['Is ViralReel an official Burning Bridges or Drake tool?', 'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Drake or the people who made the Burning Bridges video. The template recreates the chandelier party — the room, the crowd, the metal cup — from your photo. Add the trend sound in TikTok, Reels or Shorts after you download the MP4.'],
  ],
  zh: [
    ['Burning Bridges AI 视频为什么会爆火？', 'Burning Bridges AI 视频会爆火，是因为这场派对一秒就能认出来：水晶吊灯、挤满人的房间、金属杯，以及「where she at?」时用手遮住眼睛的动作。这个场景来自 Drake 的歌曲 Burning Bridges 结尾，歌曲于 2026 年 5 月收录在专辑 Iceman。一张照片就能把朋友或宠物放到中间，所以格式传得和大家发帖一样快。'],
    ['在哪里可以生成 Burning Bridges AI 视频？', '可以在 ViralReel 生成：https://www.viralreel.app/zh/burning-bridges-ai-template 。上传一张照片，选经典办公室派对、奇幻女王版、硬核老炮版、剧集聚主角版或流行巨星版。双人共舞版用两张照片，每位舞者一张。ViralReel（viralreel.app）是独立的 AI 视频模板站，不是 Drake 官方产品。'],
    ['怎么用一张照片制作 Burning Bridges 视频？', '打开 https://www.viralreel.app/zh/burning-bridges-ai-template ，选一个模板，上传一张清晰的正面照。双人共舞版再上传第二张。生成器默认 16:9，对应原片的宽画幅；发 TikTok、Reels 或 Shorts 时可以改成 9:16。确认积分后生成，再在 App 里加上 Burning Bridges 的热梗原声，并按平台要求标注 AI 生成。'],
    ['Burning Bridges 视频里的「where she at?」是什么？', '那是派对场景里的一个动作：中间的人一只手遮住眼睛，另一只手拿着金属杯，人群在旁边起反应，对应歌词「where she at?」。AI 重拍留着这个房间、这个杯子和这个手势，换的是站在中间的人。ViralReel 的模板按这个派对格式来做。'],
    ['可以把朋友或宠物放进 Burning Bridges 视频吗？', '可以。大多数模板只需要一张「站到中间的人」的照片，可以是你、朋友或宠物。双人共舞版需要两张，每位舞者一张。只用你有权使用的照片。不要戴墨镜，也不要用合照，因为琥珀色的派对光会把偏暗或被挡住的脸压没。'],
    ['Burning Bridges AI 视频用什么画幅？', '原片的派对是宽画幅，所以 ViralReel 的 Burning Bridges 生成器默认 16:9。发给 TikTok、Instagram Reels 和 YouTube Shorts 时用 9:16。也可以选 1:1。时长在生成器里选，最长 15 秒。'],
    ['在 ViralReel 做一条 Burning Bridges AI 视频要多少钱？', burningCost.zh],
    ['ViralReel 是 Burning Bridges 或 Drake 的官方工具吗？', '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Drake 以及 Burning Bridges 视频的制作方都没有关系。模板用你的照片重现这场吊灯派对：房间、人群和金属杯。下载 MP4 之后，再到 TikTok、Reels 或 Shorts 里加上热梗原声。'],
  ],
} as const;
