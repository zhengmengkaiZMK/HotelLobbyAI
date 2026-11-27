/** Canonical four-step HowTo for the Aura Farming AI video. */
export interface AuraFarmingHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const AURA_FARMING_HOW_TO_STEPS: readonly AuraFarmingHowToStep[] = [
  {
    name: { en: 'Upload one clear photo', zh: '上传一张清晰照片' },
    text: {
      en: 'On ViralReel, open the Aura Farming AI template and upload one photo of one person — you, a friend who agreed, or the calmest person in your group chat. Face toward the lens, well lit, no sunglasses, no heavy filter. A photo showing the outfit matters, because the last seconds of the clip show the subject from the side, head to knees. Any background works: the boat, the water and the crew are generated.',
      zh: '在 ViralReel 打开 Aura Farming AI 模板，上传一张一个人的照片——你自己、同意出镜的朋友，或者群里最淡定的人。脸朝镜头、光线足、不戴墨镜、不加重度滤镜。照片里能看到穿搭最好，因为片尾有从侧面拍到膝盖的镜头。背景随意：船、水面和划手都是生成的。',
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
      en: 'Press Generate. Rendering usually takes 2–7 minutes at 720p. The result is a new clip of you at the tip of the red dragon boat: steady claps, a side-to-side sway, the crew pulling hard behind you, and a final profile shot with both arms swung wide. Keep the window open while it renders.',
      zh: '点「立即生成」。渲染通常需要 2–7 分钟（720p）。成片是一条全新的视频：你站在红色龙舟船头，节奏平稳地拍手、左右摇摆，身后整队划手奋力划桨，最后侧身张开双臂收尾。渲染期间别关窗口。',
    },
  },
  {
    name: { en: 'Download and label it AI', zh: '下载并标注 AI' },
    text: {
      en: 'Download the MP4 — the trend sound is already in the file, so it plays with audio out of the box. Post it in TikTok, Reels, or Shorts with the AI-generated label turned on, a deadpan caption, and let the calm do the talking.',
      zh: '下载 MP4——热梗原声已经内置在成片里，下载即可直接带声音发布。在 TikTok、Reels 或 Shorts 里发布时打开 AI 生成标注，配文面无表情、越淡定越好。',
    },
  },
];
