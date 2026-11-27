/** Canonical four-step HowTo for the Huss Huss Huss AI video. */
export interface HussHussHussHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const HUSS_HUSS_HUSS_HOW_TO_STEPS: readonly HussHussHussHowToStep[] = [
  {
    name: { en: 'Upload one photo per dancer', zh: '每位舞者各传一张照片' },
    text: {
      en: 'On ViralReel, open the Huss Huss Huss AI template and upload two photos — one person per slot, because the trend is a two-dancer format. You and a friend, two siblings, you and your cat, whatever duo you like. Each photo: one person, face clear and well lit, full body or knee-up so the outfits survive the turn-around move. The living room and the choreography are generated — your photos only cast the dancers.',
      zh: '在 ViralReel 打开 Huss Huss Huss AI 模板，上传两张照片——每个上传位一个人，因为这个梗是双人舞格式。情侣、闺蜜、兄弟、你和你的猫都行。每张照片：一个人、脸清楚光线足、全身或膝盖以上入画，让转身动作里穿搭也能保留。客厅和编舞都是生成的——你的照片只负责选角。',
    },
  },
  {
    name: { en: 'Check the fixed settings', zh: '确认固定参数' },
    text: {
      en: 'The template opens on 9:16 with a fixed 18-second duration, matching the full dance routine of the viral clips. Read the credit cost shown on the generate button before you start — the price depends on the resolution you pick.',
      zh: '模板默认 9:16、固定 18 秒，和爆火版本的完整舞蹈长度一致。生成前先看清按钮上显示的积分——费用取决于你选的分辨率。',
    },
  },
  {
    name: {
      en: 'Generate and wait a few minutes',
      zh: '生成并等待几分钟',
    },
    text: {
      en: 'Press Generate. Rendering usually takes 2–4 minutes. The result is a new clip of your two dancers in the living room: the side-to-side groove, the wave, the synchronized turn away from the camera, the spin back, and the sprinter run-in-place on the final huss beat. Keep the window open while it renders.',
      zh: '点「立即生成」。渲染通常需要 2-4 分钟。成片是一条全新的视频：你的两位舞者在客厅里左右摇摆、挥手、一起转身背对镜头、再转回来，最后一个 huss 节拍原地冲刺摆臂收尾。渲染期间别关窗口。',
    },
  },
  {
    name: { en: 'Download and label it AI', zh: '下载并标注 AI' },
    text: {
      en: 'Download the MP4 — the huss huss huss sound is already in the file, so it plays with audio out of the box. Post it in TikTok, Reels, or Shorts with the AI-generated label turned on, caption it "in this town everybody goes out partying except me", and let the grind do the talking.',
      zh: '下载 MP4——huss huss huss 原声已经内置在成片里，下载即可直接带声音发布。在 TikTok、Reels 或 Shorts 里发布时打开 AI 生成标注，配文「in this town everybody goes out partying except me」，让整活自己说话。',
    },
  },
];
