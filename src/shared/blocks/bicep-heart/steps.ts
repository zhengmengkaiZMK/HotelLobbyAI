/** Canonical four-step HowTo for the Bicep Heart AI video. */
export interface BicepHeartHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const BICEP_HEART_HOW_TO_STEPS: readonly BicepHeartHowToStep[] = [
  {
    name: { en: 'Pick a heart set', zh: '选一套比心阵容' },
    text: {
      en: 'On ViralReel, open the Bicep Heart Trend template and pick one of nine sets: Gym Buff Heart, Everyday Heart, Cat Bicep Heart, Dog Bicep Heart, Original Trend, or one of the four new trend replays. The pose stays the same; who flexes changes.',
      zh: '在 ViralReel 打开 Bicep Heart Trend 模板，九套阵容里选一套：健身猛男、日常小心心、猫咪比心、狗狗比心、原梗复刻，或四款新复刻版本。动作不变，换的是比心的那个人（或宠物）。',
    },
  },
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'The generator shows a single slot labeled Your Photo. Use one clear photo of an adult who agreed: waist-up, facing the camera, both arms in view and not crossed, short sleeves work best, leave room beside both elbows. Do not upload minors, celebrities, or public figures.',
      zh: '生成器只有一个位置，写的是「你的照片」。用一张清晰的照片：成年人且经对方同意，半身入镜、正对镜头、双臂可见且没有交叉，短袖效果最好，两侧手肘外留出空间。不要上传未成年人、名人或公众人物。',
    },
  },
  {
    name: { en: 'Keep 9:16 and 7 seconds', zh: '画幅 9:16，时长 7 秒' },
    text: {
      en: 'The page opens on 9:16 and a fixed 7-second length — the same shape and duration as the viral clips. Choose the resolution and read the credit cost shown before you generate. The result is a new AI clip, not a copy of another creator\'s video.',
      zh: '页面默认 9:16，时长固定 7 秒——和爆火版本的形状、时长一致。选好分辨率，先看清页面上的积分再生成。成片是一条新的 AI 视频，不是其他创作者视频的拷贝。',
    },
  },
  {
    name: { en: 'Download, add the trend sound, and label it AI', zh: '下载，加热梗原声，并标注 AI' },
    text: {
      en: 'Download the MP4. It is silent: in TikTok, Reels, or Shorts, add the bicep heart trend sound from that app\'s library and turn on the AI-generated label. ViralReel does not license the trend audio. Caption ideas people use: "have you ever heard of a bicep heart...", "im sad please send bicep hearts", or "send this to a special someone".',
      zh: '下载 MP4。文件是无声的：在 TikTok、Reels 或 Shorts 里从该应用曲库加上 bicep heart 热梗原声，并打开 AI 生成标注。ViralReel 不授权该热梗音频。大家常用的文案：「have you ever heard of a bicep heart...」「im sad please send bicep hearts」「send this to a special someone」。',
    },
  },
];
