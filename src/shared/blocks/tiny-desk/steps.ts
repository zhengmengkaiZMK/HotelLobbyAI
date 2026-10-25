/** Canonical four-step HowTo for the Tiny Desk Outstanding AI video. */
export interface TinyDeskHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const TINY_DESK_HOW_TO_STEPS: readonly TinyDeskHowToStep[] = [
  {
    name: { en: 'Pick an Outstanding set', zh: '选一套阵容' },
    text: {
      en: 'On ViralReel, open the Tiny Desk Outstanding template and pick one of six sets: All-Loss Coaches, Cowboys Legends, NFC East Band, Rams Band, Spurs Big Men, or Uncle Charlie. The desk stays. The band changes.',
      zh: '在 ViralReel 打开 Tiny Desk Outstanding 模板，六套阵容里选一套：输球教练团、牛仔传奇、国联东区乐队、公羊队、马刺大个子或真身 Charlie。桌子不动，换的是乐队。',
    },
  },
  {
    name: { en: 'Fill Center Lead, Left Role, and Right Role', zh: '填好中间主角、左边角色、右边角色' },
    text: {
      en: 'The generator shows three slots labeled Center Lead, Left Role, and Right Role. Put the singer in Center Lead. Left Role and Right Role fill the band beside them, which is where the sax solo sits in the scene. The buttons are not labeled sax, and the render does not promise a specific photo is holding the saxophone. Use front-facing photos you have permission to use. Do not upload minors, celebrities, or screenshots of the NPR concert.',
      zh: '生成器有三个位置，按钮写的是中间主角、左边角色、右边角色。主唱放在中间主角。左边角色和右边角色填两边的乐队，萨克斯独奏就在这个场景里。按钮上没有“萨克斯”，成片也不保证某一张照片一定拿着萨克斯。只用你有权使用的正脸照片。不要上传未成年人、名人或 NPR 演唱会截图。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on 9:16. Choose the resolution and length, and read the credit cost shown before you generate. The result is a new fan-parody clip, not a copy of the NPR concert or the original TikTok.',
      zh: '画幅保持 9:16。选好分辨率和时长，先看清页面上的积分再生成。成片是一条新的粉丝向戏仿，不是 NPR 演唱会或原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, add the trend sound, and label it AI', zh: '下载，加热梗原声，并标注 AI' },
    text: {
      en: 'Download the MP4. In TikTok, Reels, or Shorts, add the Outstanding trend sound from that app’s library and turn on the AI-generated label. ViralReel does not license the Gap Band song or NPR’s Tiny Desk audio. Some models can follow an admin-configured reference track; that is not a licensed soundtrack.',
      zh: '下载 MP4。在 TikTok、Reels 或 Shorts 里从该应用曲库加上《Outstanding》热梗原声，并打开 AI 生成标注。ViralReel 不授权 Gap Band 的歌曲，也不授权 NPR 的 Tiny Desk 音频。部分模型可以跟随管理员配置的参考音轨，那不是已授权的原声。',
    },
  },
];
