/** Canonical four-step HowTo for the Sasha La Catrina AI video. */
export interface SashaLaCatrinaHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const SASHA_LA_CATRINA_HOW_TO_STEPS: readonly SashaLaCatrinaHowToStep[] = [
  {
    name: { en: 'Pick a reveal, upload one photo', zh: '选一个变身，上传一张照片' },
    text: {
      en: 'Open the Sasha La Catrina template, pick the reveal you want from the sample list — the flower toss, the ofrenda hands-over-face, the Catrín, or the pet versions — and upload one clear front-facing photo. Face toward the camera, hands away from the face, waist-up if you want the gown. For a pet, a photo where the whole head and its markings show. JPG, PNG, and WebP work.',
      zh: '打开 Sasha La Catrina 模板，在样本列表里选一个你想要的变身——撒花、祭坛掩面、男版 Catrín 或宠物版——然后上传一张清晰的正面照。脸朝镜头、手别挡脸，想出全裙装就拍半身。宠物版用一张头和花纹都拍清楚的照片。支持 JPG、PNG 和 WebP。',
    },
  },
  {
    name: { en: 'Generate the transformation', zh: '生成变身' },
    text: {
      en: 'The clip\'s reveal, camera, gown and sound are all pre-built — your photo only supplies the face. Check the credit cost shown before you start and generate. The AI keeps your face under the sugar-skull paint and rebuilds the gown, the candles and the petals around it at the clip\'s own length.',
      zh: '变身的运镜、裙装、 trigger 和声音都内置在样本里——你的照片只提供脸。看清页面上的积分后点生成。AI 会把你的脸保留在糖骷髅妆下面，在样本原有时长里重建裙装、蜡烛和花瓣。',
    },
  },
  {
    name: { en: 'Download the MP4', zh: '下载 MP4' },
    text: {
      en: 'Download the vertical MP4 when the render finishes — the reveal lands on the marigold light, with the sample\'s original sound already kept. Paid credit packs and monthly plans export without a ViralReel watermark.',
      zh: '渲染完成后下载竖屏 MP4——变身落在万寿菊金光里，样本原声已经保留。付费积分包和月付方案导出没有 ViralReel 水印。',
    },
  },
  {
    name: { en: 'Post with the trend sound and the AI label', zh: '配原声、标 AI，发布' },
    text: {
      en: 'Post on TikTok under #fairytalecatrina, #lacatrina and #sashalacatrina — or on Reels and Shorts. If the sound is missing from your download, add "Adiós señora bonita" (from The Book of Life) from the in-app library, and turn on the AI-generated label where the platform asks. The trend peaks on Día de Muertos, November 1-2.',
      zh: '在 TikTok 用 #fairytalecatrina、#lacatrina 和 #sashalacatrina 发布——Reels 和 Shorts 也一样。如果下载的文件缺声音，就在站内曲库加《Adiós señora bonita》（出自《生命之书》），并按平台要求打开 AI 生成标注。趋势在 11 月 1-2 日亡灵节达到峰值。',
    },
  },
];
