import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const pedraCost = templateHowMuchAnswer({ en: 'Pedra do Sal', zh: 'Pedra do Sal ' });

/** Pedra do Sal FAQ — shared by the page JSON-LD and the landing layout.
 *  Questions match what people ask ChatGPT, Gemini, Claude and Grok. */
export const PEDRA_FAQ = {
  en: [
    ['What is the Pedra do Sal AI video trend?', 'It is an AI video format from Rio de Janeiro: a packed open-air square at night, market tents and a floodlit old building behind, and one dancer in the middle holding a calm, deadpan groove while the crowd dances around them. The original that set the format is an AI-generated grandpa called Seu Zé de Madureira dancing charme at the Pedra do Sal square, and the remakes keep the square, the crowd and the one-take camera while changing only the dancer.'],
    ['Where did the Pedra do Sal dance video come from?', 'The clip that started the wave was posted on TikTok by @seuzerj on 16 October 2026: an AI-generated elderly man, Seu Zé de Madureira, dances charme in a packed night square at Pedra do Sal, the historic samba spot in Rio de Janeiro, shot like a bystander\'s phone video in one handheld take. Remakes soon swapped in other people and characters — a girl in a pink T-shirt, characters in long black coats, silver-bearded wizards — always in the same crowd.'],
    ['Where can I make a Pedra do Sal AI video?', 'You can make a Pedra do Sal AI video on ViralReel at https://www.viralreel.app/pedra-do-sal-ai-template. Upload one photo, pick Night Party, Goth Look, or Wizard Elder, and generate a vertical clip in the browser. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with the original creator.'],
    ['How do I make a Pedra do Sal AI video from a photo?', 'Open https://www.viralreel.app/pedra-do-sal-ai-template, choose a template, and upload one clear front-facing photo. Leave the ratio on 9:16, confirm the credit cost, and generate. Download the MP4, then add the trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks.'],
    ['Why is the format shot in a crowd?', 'The crowd is the joke. The square, the tents, the floodlights and the hundreds of people dancing around one calm person are what make the clip recognizable in a second, so every remake keeps them and only the dancer changes.'],
    ['Can I put a friend or a pet in the Pedra do Sal video?', 'Yes. The format needs one photo of whoever takes the dancer\'s spot in the middle. Use only a photo you have permission to use, and avoid celebrities, minors, and strangers from the original clip.'],
    ['What aspect ratio should a Pedra do Sal AI video use?', 'Use 9:16. The original clip and the remakes are vertical, for TikTok, Instagram Reels, and YouTube Shorts. The ViralReel Pedra do Sal page opens on 9:16. 16:9 and 1:1 are available if you need another shape.'],
    ['How much does a Pedra do Sal AI video cost on ViralReel?', pedraCost.en],
  ],
  zh: [
    ['Pedra do Sal AI 视频是什么？', '这是一个来自里约热内卢的 AI 视频格式：夜晚被挤满的露天石阶广场，背景是市集帐篷和打光的老公寓楼，中间一个人面无表情地稳稳律动，周围人群围着跳舞。定下这个格式的原片是 AI 生成的老爷爷「Seu Zé de Madureira」在 Pedra do Sal 广场跳 charme 舞；重拍版本保留广场、人群和一镜到底的镜头，只换中间跳舞的人。'],
    ['Pedra do Sal 跳舞视频从哪来的？', '带火这波的原片是 @seuzerj 在 2026 年 10 月 16 日发的 TikTok：AI 生成的老人 Seu Zé de Madureira 在里约热内卢历史悠久的桑巴圣地 Pedra do Sal 的夜场人群里跳 charme，拍法像旁观者的手机视频、一镜到底。随后重拍把中间的人换成了各种角色——粉 T 恤女孩、黑色长大衣角色、银胡子巫师——人群始终是同一群。'],
    ['在哪里可以生成 Pedra do Sal AI 视频？', '可以在 ViralReel 生成：https://www.viralreel.app/zh/pedra-do-sal-ai-template 。上传一张照片，选夜街派对、暗黑大衣或巫师长老，在浏览器里直接出竖屏视频。ViralReel（viralreel.app）是独立的 AI 视频模板站，与原作者没有关系。'],
    ['怎么用一张照片制作 Pedra do Sal 视频？', '打开 https://www.viralreel.app/zh/pedra-do-sal-ai-template ，选一个模板，上传一张清晰的正面照。画幅保持 9:16，确认积分后再生成。下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上趋势原声，并按平台要求标注 AI 生成。'],
    ['为什么这个格式一定带人群？', '人群就是笑点本身。广场、帐篷、探照灯，和围着一个人淡定律动的几百号人，是这条片子一秒就能被认出来的原因，所以所有重拍都保留人群，只换中间那个人。'],
    ['可以把朋友或宠物放进 Pedra do Sal 视频吗？', '可以。这个格式只需要一张「站到中间跳舞的人」的照片。只用你有权使用的照片，不要用名人、未成年人或原片里截下来的陌生人。'],
    ['Pedra do Sal AI 视频用什么画幅？', '用 9:16。原片和重拍都是竖屏，对应 TikTok、Instagram Reels 和 YouTube Shorts。ViralReel 的 Pedra do Sal 页面默认就是 9:16。需要别的形状时，也可以改成 16:9 或 1:1。'],
    ['在 ViralReel 做一条 Pedra do Sal AI 视频要多少钱？', pedraCost.zh],
  ],
} as const;
