/** Canonical four-step HowTo for the Vossi Bop Dance AI video. */
export interface VossiBopHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const VOSSI_BOP_HOW_TO_STEPS: readonly VossiBopHowToStep[] = [
  {
    name: { en: 'Choose the Vossi Bop Dance Template', zh: '选择 Vossi Bop Dance 模板' },
    text: {
      en: 'Open the Vossi Bop Dance AI Template on ViralReel and pick one of the eight bridge sets — Angry Ginge, TV Presenter, Schoolmates, Talent Judge, Car Show Host, Saturday Night TV, Benidorm Holiday, or School Uniform. The bridge stays. The dancer changes.',
      zh: '在 ViralReel 打开 Vossi Bop Dance AI 模板，八套桥上阵容任选：姜发主播、主持人、同学团、选秀评委、车秀主持、周六夜 TV、度假剧或校服版。桥不动，换的是跳舞的人。',
    },
  },
  {
    name: { en: 'Upload Your Photo', zh: '上传你的照片' },
    text: {
      en: 'Upload one clear, well-lit, full-body photo of the person you want to animate — yourself or someone who agreed. Keep one person per photo, face and outfit visible, no blurry images and no crowded backgrounds. Do not upload minors, celebrities, or photos you do not have permission to use.',
      zh: '上传一张清晰、光线好、能看到全身的照片——你自己或同意出镜的人。一张照片一个人，脸和穿搭都要看得清，不要模糊图，背景别太乱。不要上传未成年人、名人或你没有使用权的照片。',
    },
  },
  {
    name: { en: 'Generate Your Dance Video', zh: '生成你的舞蹈视频' },
    text: {
      en: 'Keep the ratio on 9:16 and the fixed 10-second length, pick a resolution, and read the credit cost shown under the Generate button before you start. The template does the dance — no filming, no editing, no prompt to write.',
      zh: '画幅保持 9:16、时长固定 10 秒，选好分辨率，开始前先看清「立即生成」按钮下方显示的积分。舞蹈由模板完成——不用拍摄、不用剪辑、不用写提示词。',
    },
  },
  {
    name: { en: 'Download and Share', zh: '下载并分享' },
    text: {
      en: 'Preview the finished clip, download the MP4, and post it to TikTok, Instagram Reels, or YouTube Shorts. Add the "Vossi Bop" trend sound from that app\'s own library and turn on the AI-generated label. ViralReel does not license the song.',
      zh: '预览成片、下载 MP4，发布到 TikTok、Instagram Reels 或 YouTube Shorts。在对应 App 曲库里加《Vossi Bop》热梗原声，并打开 AI 生成标注。ViralReel 不授权这首歌。',
    },
  },
];
