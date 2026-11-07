import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const vbCost = templateHowMuchAnswer({ en: 'Vossi Bop Dance', zh: 'Vossi Bop Dance' });

/** Vossi Bop Dance FAQ — shared by the page JSON-LD and the landing layout.
 *  Questions match what people ask ChatGPT, Gemini, Claude and Grok. */
export const VOSSI_BOP_FAQ = {
  en: [
    ['What is the Vossi Bop Dance AI Video Generator?', 'It is ViralReel\'s tool for making a Vossi Bop-inspired dance video from one photo. You pick one of eight bridge sets, upload a clear photo, and the AI animates that person doing the Vossi Bop in the dawn Westminster Bridge shot made famous by Stormzy\'s 2019 music video — no filming, no editing, no prompt to write.'],
    ['How do I make a Vossi Bop dance video with AI?', 'Choose the Vossi Bop AI template on ViralReel, upload one clear photo, keep the 9:16 ratio and the fixed 10-second length, and press Generate. Preview the finished clip and download the MP4 when it is ready. Most renders take a few minutes.'],
    ['Can I turn my photo into a Vossi Bop dance video?', 'Yes. Upload one compatible photo — a clear, well-lit, full-body shot of one person — and the template animates that person doing the dance while the bridge, the camera move and the beat stay the same.'],
    ['Do I need to know how to dance?', 'No. The AI template generates the dance animation, so you never perform or record the movements yourself. The only thing you provide is one photo.'],
    ['Is the Vossi Bop AI video generator free?', 'No. ViralReel does not offer free credits or a free trial — rendering is pay-per-credit, and the exact cost shows in the generator before every render. Credit packs start at https://www.viralreel.app/pricing and monthly plans at https://www.viralreel.app/subscribe. Failed renders are refunded automatically.'],
    ['How many photos do I need?', 'One. Every Vossi Bop Dance template on this page takes a single photo of one person. A clear full-body shot works best, because the dance moves the whole body.'],
    ['Can I make a Vossi Bop dance video for TikTok?', 'Yes. The template exports a 9:16 MP4 in the shape TikTok, Instagram Reels and YouTube Shorts use. Download it, add the trend sound in the app, and post it with the AI-generated label.'],
    ['Does the generated video include the original Vossi Bop song?', 'ViralReel does not license Stormzy\'s "Vossi Bop". If a model follows an admin-configured reference track the audio comes from that reference clip; otherwise the clip is generated without the song. To use the official sound, add it from TikTok\'s, Reels\', or Shorts\' own library when you post, subject to that platform\'s music rights.'],
    ['Can I use a cartoon character?', 'Illustrated and cartoon-style characters can work if the photo is clear and the character has a visible full body. Results depend on the image and the AI model, so preview the render before sharing it.'],
    ['How long does video generation take?', 'Most renders finish in a few minutes; the exact wait depends on the resolution you pick and current processing demand. You can follow the live progress in the generator, and finished clips stay in your generations list.'],
    ['Can I download the generated video?', 'Yes. Once generation is complete you can preview the clip and download a watermark-free MP4 from the generator or from your generations list.'],
    ['Is ViralReel affiliated with Stormzy or NL Vossi?', 'No. ViralReel is an independent AI video platform. Its Vossi Bop-inspired templates are fan-made tools and are not official products endorsed by Stormzy, NL Vossi, Atlantic Records or TikTok.'],
  ],
  zh: [
    ['Vossi Bop Dance AI Video Generator 是什么？', '它是 ViralReel 的工具：用一张照片生成 Vossi Bop 风格的舞蹈视频。八套桥上阵容任选，上传一张清晰照片，AI 就会让照片里的人在 Stormzy 2019 年 MV 那个黎明威斯敏斯特桥镜头里跳 Vossi Bop——不用拍摄、不用剪辑、不用写提示词。'],
    ['怎么用 AI 做一条 Vossi Bop 舞蹈视频？', '在 ViralReel 选 Vossi Bop AI 模板，上传一张清晰照片，画幅保持 9:16、时长固定 10 秒，点「立即生成」。生成完预览并下载 MP4，大多数渲染几分钟完成。'],
    ['可以把我的照片变成 Vossi Bop 舞蹈视频吗？', '可以。上传一张合适的照片——清晰、光线好、一个人全身——模板就会让这个人跳这支舞，桥、镜头和节拍都保持原样。'],
    ['我需要会跳舞吗？', '不需要。舞蹈动画由 AI 模板生成，你不用自己跳，也不用录制任何动作，只需要提供一张照片。'],
    ['Vossi Bop AI 视频生成器免费吗？', '不免费。ViralReel 不提供免费积分或免费试用——按积分计费，每次渲染前生成器都会显示确切费用。积分包见 https://www.viralreel.app/zh/pricing ，月付套餐见 https://www.viralreel.app/zh/subscribe 。渲染失败会自动退还积分。'],
    ['需要几张照片？', '一张。本页每个 Vossi Bop Dance 模板都只需要一张单人照片。清晰全身照效果最好，因为这支舞会动到全身。'],
    ['可以做 Vossi Bop 的 TikTok 视频吗？', '可以。模板导出 9:16 的 MP4，就是 TikTok、Instagram Reels 和 YouTube Shorts 用的竖屏。下载后在 App 里加热梗原声，带上 AI 生成标注发布即可。'],
    ['生成的视频里有 Vossi Bop 原曲吗？', 'ViralReel 不授权 Stormzy 的《Vossi Bop》。如果模型跟随了管理员配置的参考音轨，音频来自那段参考视频；否则成片不带原曲。想用官方原声，发布时从 TikTok、Reels 或 Shorts 自己的曲库添加，音乐版权按平台规则处理。'],
    ['可以用卡通角色吗？', '插画和卡通风格的角色可以尝试，前提是图片清晰、角色全身可见。效果取决于图片和 AI 模型，发布前请先预览成片。'],
    ['生成一条视频要多久？', '大多数渲染几分钟完成，具体时间取决于所选分辨率和当前的排队情况。生成器里有实时进度，完成的视频会保存在生成记录里。'],
    ['生成的视频可以下载吗？', '可以。生成完成后可以直接预览，并从生成器或生成记录下载无水印的 MP4。'],
    ['ViralReel 和 Stormzy 或 NL Vossi 有关系吗？', '没有。ViralReel 是独立的 AI 视频平台，Vossi Bop 风格模板是粉丝向工具，与 Stormzy、NL Vossi、Atlantic Records 或 TikTok 的官方产品无关。'],
  ],
} as const;
