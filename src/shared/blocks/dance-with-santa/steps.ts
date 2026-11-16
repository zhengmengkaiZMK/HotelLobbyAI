/** Canonical four-step HowTo for the Dance with Santa AI video. */
export interface DanceWithSantaHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const DANCE_WITH_SANTA_HOW_TO_STEPS: readonly DanceWithSantaHowToStep[] = [
  {
    name: { en: 'Pick a dance clip', zh: '选一条舞蹈片段' },
    text: {
      en: 'On ViralReel, open the Dance with Santa template and pick one of eight clips: Little Dancer, Burgundy Satin, Black Tank Moves, Cream & Stripes, Embroidered & Shades, Mustard Sweater, Patterned Dress, or Blue Satin Gown. Same Santa, same hall, same routine — pick the cast closest to your photo.',
      zh: '在 ViralReel 打开 Dance with Santa 模板，八条片段任选：小舞者织裙、勃艮第缎裙、黑背心运动、米白条纹裤、刺绣墨镜、芥末毛衣、碎花短裙或蓝缎长裙。圣诞老人、大厅、舞步都一样——选一条和你的照片最像的阵容。',
    },
  },
  {
    name: { en: 'Upload one full-body photo', zh: '上传一张全身照' },
    text: {
      en: 'The generator shows one slot. Use a full-body, standing photo, face clearly visible and well lit — the clip shows both dancers from head to toe, so a full-body photo gives the AI your real shoes and trousers instead of inventing them. One person per photo. Upload only photos of yourself or people who agreed — for a child, only that child\'s parent uploads the photo, and keep the AI label when you post.',
      zh: '生成器只有一个照片位。用全身站立照，正脸清晰、光线好——片段里两个人都是从头到脚入镜，全身照能让 AI 用你真实的鞋和裤子，而不是凭空编。一张照片一个人。只上传你自己的或经对方同意的照片——如果是孩子，只能由孩子的家长上传照片，发布时保留 AI 标注。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on 9:16. The length is fixed at 15 seconds — the length of the trend clips. Choose the resolution and read the credit cost shown before you generate. The result is a new fan-style clip, not a copy of the original TikTok.',
      zh: '画幅保持 9:16。时长固定 15 秒——即趋势片段的长度。选好分辨率，生成前先看清页面上的积分。成片是一条新的粉丝向片段，不是原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, add the trend sound, and label it AI', zh: '下载，加热梗原声，并标注 AI' },
    text: {
      en: 'Download the MP4. Post it with #bailandoconsanta and #santa, add the trend sound from the TikTok, Reels, or Shorts library — ViralReel does not license the template\'s sound — and turn on the AI-generated label.',
      zh: '下载 MP4。发布时带上 #bailandoconsanta 和 #santa，在 TikTok、Reels 或 Shorts 的曲库里加热梗原声——ViralReel 不授权模板原声——并打开 AI 生成标注。',
    },
  },
];
