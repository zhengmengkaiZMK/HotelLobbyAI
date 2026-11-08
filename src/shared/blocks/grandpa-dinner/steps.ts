/** Canonical five-step HowTo for the Grandpa Said He'd Handle Dinner AI video. */
export interface GrandpaDinnerHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const GRANDPA_DINNER_HOW_TO_STEPS: readonly GrandpaDinnerHowToStep[] = [
  {
    name: { en: 'Pick your dinner character', zh: '选一个晚餐角色' },
    text: {
      en: 'On ViralReel, open the Grandpa Said He\'d Handle Dinner template and pick one of eight character versions — Classic Muscle Grandpa, Full Swing, Precise Entries, Football Jersey, Tuxedo Grandpa, White Suit & Fedora, Kaftan Style, or Mickey Puffs. The kitchen, the giant fish and the chopping routine stay. The character is you.',
      zh: '在 ViralReel 打开 Grandpa Said He\'d Handle Dinner 模板，八个人物版本任选——经典肌肉爷爷、赤膊上阵、精准入场、球衣球星、燕尾服爷爷、白西装礼帽、长袍大厨或米奇爆炸头。厨房、大鱼和剁鱼流程不变，角色就是你。',
    },
  },
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'Upload one clear, front-facing photo of yourself or someone who has agreed to participate. Keep the face visible and well lit. Avoid group photos, sunglasses, heavy filters and blurry shots. Do not upload minors, celebrities, or people who did not agree.',
      zh: '上传一张你自己或同意出镜者的清晰正脸照片。脸要看得清、光线要好。避免合影、墨镜、重度滤镜和模糊图。不要上传未成年人、名人或未经同意的人。',
    },
  },
  {
    name: { en: 'Check the settings and the credit cost', zh: '确认参数和积分' },
    text: {
      en: 'Leave the ratio on 9:16 — the shape TikTok, Reels and Shorts use for this trend. The clip length is fixed at 10 seconds. Read the exact credit cost shown before you generate; failed or canceled jobs are refunded automatically.',
      zh: '画幅保持 9:16——这条趋势在 TikTok、Reels 和 Shorts 上的标准竖屏。时长固定 10 秒。生成前看清本次积分；失败或取消的任务会自动退回积分。',
    },
  },
  {
    name: { en: 'Generate your dinner video', zh: '生成你的晚餐视频' },
    text: {
      en: 'Press Generate. The AI uses your photo and the template\'s reference scene to put your character behind the kitchen island with the giant fish and the cleaver, keeping the chopping action and camera from the original format. Rendering usually takes a few minutes.',
      zh: '点击生成。AI 会用你的照片和模板参考场景，把你的角色放进厨房岛台后面，配上巨鱼和菜刀，保留原格式的剁鱼动作和运镜。渲染通常只需几分钟。',
    },
  },
  {
    name: { en: 'Download, caption, and post', zh: '下载、配文、发布' },
    text: {
      en: 'Preview the MP4 and download it without a watermark. Add a POV caption that matches your character — "POV: Grandpa said he\'d handle dinner" is the classic — and add the trend sound inside TikTok, Reels, or Shorts. Turn on the AI-generated content label when you post. ViralReel does not license the original audio.',
      zh: '预览并下载无水印 MP4。配一条符合角色的 POV 文案——经典的「POV: Grandpa said he\'d handle dinner」——再在 TikTok、Reels 或 Shorts 里加热梗原声，发布时打开 AI 生成标注。ViralReel 不授权原声。',
    },
  },
];
