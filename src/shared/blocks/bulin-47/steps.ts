/** Canonical four-step HowTo for the Bulin 47 AI video. */
export interface BulinHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const BULIN_HOW_TO_STEPS: readonly BulinHowToStep[] = [
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'On ViralReel, open https://www.viralreel.app/bulin-47-ai-template and upload one clear photo of one person you have permission to use. Pick Street Freestyle, Suit Edition, Leopard Print, Night Crowd, Sharp Vest, or Pet Freestyle. JPG, PNG, and WebP work. Skip group shots, sunglasses, and heavy filters — red light hides a dark face.',
      zh: '在 ViralReel 打开 https://www.viralreel.app/zh/bulin-47-ai-template ，上传一张你有权使用的单人清晰照片。选择街头原版、西装、豹纹、夜场人群、马甲绅士或宠物说唱。支持 JPG、PNG 和 WebP。不要用合照、墨镜或重滤镜——红光会把偏暗的脸压没。',
    },
  },
  {
    name: { en: 'Generate', zh: '生成' },
    text: {
      en: 'Leave the ratio on 9:16. Choose the resolution and length, read the credit cost shown before you start, and generate. The result is a new fictional street-freestyle clip, not a copy of the Madrid footage and not the Dame Hombro music video.',
      zh: '画幅保持 9:16。选好分辨率和时长，先看清页面上的积分再生成。成片是一条新的虚构街头 freestyle，不是马德里原片，也不是 Dame Hombro 的 MV。',
    },
  },
  {
    name: { en: 'Download', zh: '下载' },
    text: {
      en: 'Download the MP4 when the render finishes. Most clips are ready in about a minute. Paid credit packs and monthly plans export without a ViralReel watermark.',
      zh: '渲染完成后下载 MP4。大多数片子大约一分钟就能好。付费积分包和月付方案导出时没有 ViralReel 水印。',
    },
  },
  {
    name: {
      en: 'Add the trend sound and the AI label',
      zh: '加上热梗原声和 AI 标注',
    },
    text: {
      en: 'In TikTok, Reels, or Shorts, add the Bulin 47 or Dame Hombro trend sound from that app’s library and turn on the AI-generated label where the platform asks. ViralReel does not license that audio or the Dame Hombro song.',
      zh: '在 TikTok、Reels 或 Shorts 里，从该应用的曲库添加 Bulin 47 或 Dame Hombro 热梗原声，并在平台要求时打开 AI 生成标注。ViralReel 不授权这段音频，也不授权 Dame Hombro 这首歌。',
    },
  },
];
