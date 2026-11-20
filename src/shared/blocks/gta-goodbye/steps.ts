/** Canonical four-step HowTo for the GTA 5 Goodbye AI video. */
export interface GtaGoodbyeHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const GTA_GOODBYE_HOW_TO_STEPS: readonly GtaGoodbyeHowToStep[] = [
  {
    name: { en: 'Pick a goodbye scene', zh: '选一条告别场景' },
    text: {
      en: "On ViralReel, open the GTA 5 Goodbye AI template and pick one of seven clips: The Original, The Kid From 2013, Vertical Cut, The Traveler, Trevor 2026, The Trio & The Keys, or The Handshake. Same pier, same three men, same pink car — pick the framing closest to the post you want.",
      zh: '在 ViralReel 打开 GTA 5 Goodbye AI 模板，七条片段任选：原版完整告别、2013 男孩版、竖屏完整版、旅行者版、2026 告别特写、三人组与车钥匙或码头握手版。码头、三人组、粉色跑车都一样——选一条和你想要的成片最接近的构图。',
    },
  },
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'The generator shows one slot. Use a clear, front-facing photo, chest up or full length, face well lit — your face, hair and outfit come from the photo, and the three men on the pier stay as they are. Adults only: upload photos of yourself or adults who agreed, never a child, and no celebrities or public figures.',
      zh: '生成器只有一个照片位。用清晰正脸照，胸口以上或全身，光线好——你的脸、发型和衣服来自照片，码头上的三个人保持不变。仅限成年人：只上传你自己的或经对方同意的成年人照片，不要用孩子的照片，也不要用名人或公众人物。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on auto so the framing follows the 4:3 reference scene. The length is fixed at 30 seconds — the full pier farewell, from the handshake to the drive. Choose the resolution and read the credit cost shown before you generate. The result is a new fan-style clip, not game footage.',
      zh: '画幅保持 auto，构图跟随 4:3 参考场景。时长固定 30 秒——完整码头告别，从握手到驶离。选好分辨率，生成前先看清页面上的积分。成片是一条新的粉丝向片段，不是游戏画面。',
    },
  },
  {
    name: { en: 'Download, add the song, and label it AI', zh: '下载，加歌曲原声，并标注 AI' },
    text: {
      en: "Download the MP4. Post it with #gta5goodbye and #goodbyegta5, add a farewell song from the TikTok, Reels, or Shorts library — most posts use \"See You Again\" — and turn on the AI-generated label. GTA and its characters belong to Rockstar Games and Take-Two; your video is fan-made.",
      zh: '下载 MP4。发布时带上 #gta5goodbye 和 #goodbyegta5，在 TikTok、Reels 或 Shorts 的曲库里加一首告别曲——大多数帖子用《See You Again》——并打开 AI 生成标注。GTA 及其角色归 Rockstar Games 和 Take-Two 所有；你的视频是粉丝向作品。',
    },
  },
];
