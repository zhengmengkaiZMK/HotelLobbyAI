/** Canonical four-step HowTo for the Hand of God AI video. */
export interface HandOfGodHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const HAND_OF_GOD_HOW_TO_STEPS: readonly HandOfGodHowToStep[] = [
  {
    name: { en: 'Upload one clear photo', zh: '上传一张清晰照片' },
    text: {
      en: 'On ViralReel, open the Hand of God AI template and upload one photo of one person. Waist-up or full body works best, with the face clearly visible and well lit, and some open space above the head so the golden hands can reach in cleanly. Avoid tight close-ups that crop the arms, photos with more than one person, and photos of minors or celebrities.',
      zh: '在 ViralReel 打开 Hand of God AI 模板，上传一张一个人的照片。半身或全身最好，脸清楚、光线足，头顶留出空间让金色巨手干净地伸进来。避免把手臂裁掉的特写、多人合照，以及未成年人和名人的照片。',
    },
  },
  {
    name: { en: 'Check the fixed settings', zh: '确认固定参数' },
    text: {
      en: 'The template opens on 9:16 and a fixed 10-second duration, matching the viral clips. Read the credit cost shown on the generate button before you start — the price depends on the resolution you pick.',
      zh: '模板默认 9:16、固定 10 秒，和爆火版本一致。生成前先看清按钮上显示的积分——费用取决于你选的分辨率。',
    },
  },
  {
    name: { en: 'Generate and wait a few minutes', zh: '生成并等待几分钟' },
    text: {
      en: 'Press Generate. Rendering usually takes 2–7 minutes at 720p. The result is a new clip of you on the promenade: the golden hands take your hands, the flash turns your clothes white, and you rise above the turquoise sea. Keep the window open while it renders.',
      zh: '点「立即生成」。渲染通常需要 2–7 分钟（720p）。成片是一条全新的视频：金色巨手牵起你的手，白光一闪衣服变白，你被举到碧海之上。渲染期间别关窗口。',
    },
  },
  {
    name: { en: 'Download and label it AI', zh: '下载并标注 AI' },
    text: {
      en: 'Download the MP4 — the trend sound is already in the file, so it plays with audio out of the box. Post it with the caption style the trend uses ("God literally picked me up") and turn on the AI-generated label in TikTok, Reels, or Shorts.',
      zh: '下载 MP4——热梗原声已经内置在成片里，下载即可直接带声音发布。在 TikTok、Reels 或 Shorts 里按趋势的配文风格发布（“God literally picked me up”），并打开 AI 生成标注。',
    },
  },
];
