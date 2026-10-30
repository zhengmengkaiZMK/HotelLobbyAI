/** Canonical four-step HowTo for the NostalgIA CapCut AI video. */
export interface NostalgiaHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const NOSTALGIA_HOW_TO_STEPS: readonly NostalgiaHowToStep[] = [
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'On ViralReel, open the NostalgIA CapCut template and upload one clear front-facing photo of yourself (or an adult who agreed to it) — face toward the camera, chest up or half body. JPG, PNG, and WebP work. Skip group shots, sunglasses, and heavy filters.',
      zh: '在 ViralReel 打开 NostalgIA CapCut 模板，上传一张清晰正面照（你本人或经同意的成年人），正对镜头，胸像或半身。支持 JPG、PNG 和 WebP。不要用合照、墨镜或重滤镜。',
    },
  },
  {
    name: { en: 'Generate', zh: '生成' },
    text: {
      en: 'Leave the ratio on 9:16, check the credit cost shown before you start, and generate. The template recreates the retro TV-ad scene — the letterboxed SD picture, the backyard set, the bite, the grin — with you as the star.',
      zh: '画幅保持 9:16，看清页面上的积分后生成。模板会复刻复古电视广告场景——黑边 SD 画质、后院布景、咬一口、对镜头笑——主角是你。',
    },
  },
  {
    name: { en: 'Download', zh: '下载' },
    text: {
      en: 'Download the MP4 when the render finishes. Paid credit packs and monthly plans export without a ViralReel watermark.',
      zh: '渲染完成后下载 MP4。付费积分包和月付方案导出时没有 ViralReel 水印。',
    },
  },
  {
    name: { en: 'Add the trend sound and the AI label', zh: '加上热梗原声和 AI 标注' },
    text: {
      en: 'In TikTok, Reels, or Shorts, search for the NostalgIA trend sound (or the classic candy-bar jingle people use) in the sound picker, add the "pov: you always wanted to know how you\'d look in this ad" caption, and turn on the AI-generated label where the platform asks. ViralReel does not license that audio.',
      zh: '在 TikTok、Reels 或 Shorts 的曲库搜索 NostalgIA 趋势原声（或大家用的经典巧克力广告 jingle），配上「pov: you always wanted to know how you\'d look in this ad」文案，并在平台要求时打开 AI 生成标注。ViralReel 不授权这段音频。',
    },
  },
];
