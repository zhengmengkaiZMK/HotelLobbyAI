/** Canonical four-step HowTo for the Wassup in a Minute AI video. */
export interface WassupHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const WASSUP_HOW_TO_STEPS: readonly WassupHowToStep[] = [
  {
    name: { en: 'Upload your photos', zh: '上传照片' },
    text: {
      en: 'On ViralReel, open the Wassup in a Minute template and upload one to four clear photos of people you have permission to use — face toward the camera, knees up or full body. JPG, PNG, and WebP work. Skip group shots, sunglasses, and heavy filters.',
      zh: '在 ViralReel 打开 Wassup in a Minute 模板，上传一至四张你有权使用的人物清晰照片，正对镜头，半身或全身。支持 JPG、PNG 和 WebP。不要用合照、墨镜或重滤镜。',
    },
  },
  {
    name: { en: 'Generate', zh: '生成' },
    text: {
      en: 'Leave the ratio on 9:16, check the credit cost shown before you start, and generate. Everyone is drawn as an original streetwear anime character on a white background, then animated with the side-to-side sway.',
      zh: '画幅保持 9:16，看清页面上的积分后生成。所有人会被画成白底街服动漫角色，然后按节拍左右摇摆。',
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
      en: 'In TikTok, Reels, or Shorts, search "wassup in a minute" in the sound picker and add the jersey-club trend sound, then turn on the AI-generated label where the platform asks. ViralReel does not license that audio.',
      zh: '在 TikTok、Reels 或 Shorts 的曲库搜索「wassup in a minute」加上 jersey club 热梗原声，并在平台要求时打开 AI 生成标注。ViralReel 不授权这段音频。',
    },
  },
];
