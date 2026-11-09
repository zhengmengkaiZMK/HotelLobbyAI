/** Canonical five-step HowTo for the Gangsta's Paradise AI video. */
export interface GangstasParadiseHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const GANGSTAS_PARADISE_HOW_TO_STEPS: readonly GangstasParadiseHowToStep[] = [
  {
    name: { en: 'Pick your scene', zh: '选一个场景' },
    text: {
      en: 'On ViralReel, open the Gangsta\'s Paradise template and pick one of five staged performances — Galactic Hangar, Silver Rapper, Dark Throne, Crimson Chant, or Tuxedo Duet. The scene, the backing cast and the shot cuts stay; the two performers are yours.',
      zh: '在 ViralReel 打开 Gangsta\'s Paradise 模板，五场舞台表演任选——银河机库、银发老爹、黑暗王座、绯红合唱或燕尾服二重奏。场景、伴唱阵容和镜头切换不变，两位表演者由你决定。',
    },
  },
  {
    name: { en: 'Upload two photos — rapper and singer', zh: '上传两张照片——说唱者和演唱者' },
    text: {
      en: 'Photo 1 is the rapper, who carries the verse and fills the frame in several close-ups — use a sharp, front-facing photo with the whole head visible. Photo 2 is the singer, who walks past and takes the chorus — a full-body or waist-up photo helps. Pick two people who look different so they stay easy to tell apart.',
      zh: '照片 1 是说唱者——verse 全程由他撑，还有多个特写，用清晰正脸、整头可见的照片。照片 2 是演唱者——走过场后在结尾唱副歌，全身或半身照更稳。选两个长相有区分度的人，并肩走时才认得出谁是谁。',
    },
  },
  {
    name: { en: 'Check settings: 20 or 30 seconds, 4:3', zh: '确认参数：20 或 30 秒、4:3' },
    text: {
      en: 'Keep the ratio on auto — the 4:3 reference clips drive the framing, so the output follows their landscape shape. Pick 20 or 30 seconds, choose the resolution, and read the exact credit cost before you generate. Failed or canceled jobs are refunded automatically.',
      zh: '画幅保持 auto 即可——4:3 参考片段决定构图，成片会跟随它们的横版画幅。时长选 20 或 30 秒，选好分辨率，生成前看清本次积分。失败或取消的任务会自动退回积分。',
    },
  },
  {
    name: { en: 'Generate and check the performance', zh: '生成并检查表演效果' },
    text: {
      en: 'Press Generate. The AI uses your two photos and the template\'s reference performance to stage the verse-and-chorus structure. A longer clip with several cuts gives the model more chances to drift — check that both faces still match their photos after every cut, and that the mouths follow the verse before you post.',
      zh: '点击生成。AI 会用你的两张照片和模板的参考表演，排出「verse + 副歌」结构。片长更长、切换更多，模型跑偏的机会也更多——每个切换点都要检查两张脸是否还像照片、嘴型是否跟上 verse，再决定发布。',
    },
  },
  {
    name: { en: 'Download and post with the AI label', zh: '下载，配 AI 标注发布' },
    text: {
      en: 'Download the watermark-free MP4 and post it on TikTok, Reels, or Shorts with a short caption. The soundtrack is a commercial recording — "Gangsta\'s Paradise" by Coolio featuring L.V. (1995) — so add the sound from the platform\'s library and follow its music rules. Always turn on the AI-generated content label.',
      zh: '下载无水印 MP4，发布到 TikTok、Reels 或 Shorts 并配简短文案。原声是商业录音——Coolio feat. L.V. 1995 年的《Gangsta\'s Paradise》——请从平台曲库添加声音并遵守平台音乐规则，发布时务必打开 AI 生成标注。',
    },
  },
];
