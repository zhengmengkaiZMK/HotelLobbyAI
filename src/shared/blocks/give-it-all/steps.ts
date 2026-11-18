/** Canonical four-step HowTo for the Give It All AI video. */
export interface GiveItAllHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const GIVE_IT_ALL_HOW_TO_STEPS: readonly GiveItAllHowToStep[] = [
  {
    name: { en: 'Pick a clip', zh: '选一条片段' },
    text: {
      en: "On ViralReel, open the Give It All AI template and pick one of seven clips: The Original, White Tee, Blonde in Pink, Golden Cat, Leopard Jacket, Maroon Jacket, or The Real Performance. Same lobby, same hanging mic, same crowd — pick the cast closest to your photo.",
      zh: '在 ViralReel 打开 Give It All AI 模板，七条片段任选：原版场景复刻、白 T 恤、金发粉衫、金毛猫、豹纹外套、酒红夹克或真实演出原片。大厅、挂式麦克风、人群都一样——选一条和你的照片最像的阵容。',
    },
  },
  {
    name: { en: 'Upload one photo', zh: '上传一张照片' },
    text: {
      en: 'The generator shows one slot. Use a clear, front-facing photo, chest up or full length, face well lit — your face, hair and outfit come from the photo. Adults only: upload photos of yourself or adults who agreed, never a child, and no celebrities or public figures.',
      zh: '生成器只有一个照片位。用清晰正脸照，胸口以上或全身，光线好——你的脸、发型和衣服都来自照片。仅限成年人：只上传你自己的或经对方同意的成年人照片，不要用孩子的照片，也不要用名人或公众人物。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on 9:16. The length is fixed at 15 seconds — the length the trend settled on. Choose the resolution and read the credit cost shown before you generate. The result is a new fan-style clip, not a copy of the original performance.',
      zh: '画幅保持 9:16。时长固定 15 秒——趋势定型后的长度。选好分辨率，生成前先看清页面上的积分。成片是一条新的粉丝向片段，不是原始演出的拷贝。',
    },
  },
  {
    name: { en: 'Download, add the song, and label it AI', zh: '下载，加歌曲原声，并标注 AI' },
    text: {
      en: "Download the MP4. Post it with #giveitall and #bigxthaplug, add \"Give It All\" from the TikTok, Reels, or Shorts library — ViralReel does not license the song or the audio in the preview clips — and turn on the AI-generated label. The song carries explicit lyrics.",
      zh: '下载 MP4。发布时带上 #giveitall 和 #bigxthaplug，在 TikTok、Reels 或 Shorts 的曲库里加《Give It All》——ViralReel 不授权歌曲，也不授权预览片段里的音频——并打开 AI 生成标注。注意歌曲含露骨歌词。',
    },
  },
];
