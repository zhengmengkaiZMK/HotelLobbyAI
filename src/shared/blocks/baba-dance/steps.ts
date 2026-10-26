/** Canonical four-step HowTo for the Ba Ba Ba Dance AI video. */
export interface BabaHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const BABA_HOW_TO_STEPS: readonly BabaHowToStep[] = [
  {
    name: { en: 'Pick a ba ba ba dance take', zh: '选一套 ba ba ba 场景' },
    text: {
      en: 'On ViralReel, open the Ba Ba Ba Dance template and pick one of six takes: Library Original, Night Lot Duo, Stairwell Tag, Dad & Daughter, Classroom Cadets, or Sibling Lesson. The room and the routine stay. The dancers change.',
      zh: '在 ViralReel 打开 Ba Ba Ba Dance 模板，六套场景任选：图书馆原版、夜间停车场、楼梯轮舞、爸爸和女儿、教室学员或姐弟教学。房间和舞步不动，换的是舞者。',
    },
  },
  {
    name: { en: 'Upload one photo per dancer', zh: '每位舞者上传一张照片' },
    text: {
      en: 'The generator shows two slots. Use a full-body, front-facing photo for each dancer — head-to-toe photos track the choreography better than close-ups. The left photo fills the left dancer, the right photo fills the right dancer. Use photos you have permission to use. Do not upload minors without consent, celebrities, or screenshots of the original TikTok.',
      zh: '生成器有两个位置。每位舞者用一张正脸全身照——全身照比大头照更能跟住编舞。左边的照片对应左边的舞者，右边的对应右边。只用你有权使用的照片。不要未经同意上传未成年人、名人或原始 TikTok 截图。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on 9:16. Choose the resolution and length, and read the credit cost shown before you generate. The result is a new fan-made clip, not a copy of the original TikTok.',
      zh: '画幅保持 9:16。选好分辨率和时长，先看清页面上的积分再生成。成片是一条新的粉丝向作品，不是原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, add the trend sound, and label it AI', zh: '下载，加热梗原声，并标注 AI' },
    text: {
      en: 'Download the MP4. In TikTok, Reels, or Shorts, add the ba ba ba dance trend sound from that app’s library and turn on the AI-generated label. ViralReel does not license the song or the original creators’ audio. Some models can follow an admin-configured reference track; that is not a licensed soundtrack.',
      zh: '下载 MP4。在 TikTok、Reels 或 Shorts 里从该应用曲库加上 ba ba ba dance 热梗原声，并打开 AI 生成标注。ViralReel 不授权这首歌，也不授权原作者的音频。部分模型可以跟随管理员配置的参考音轨，那不是已授权的原声。',
    },
  },
];
