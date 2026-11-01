/** Canonical four-step HowTo for the Alors On Danse AI video. */
export interface AlorsOnDanseHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const ALORS_ON_DANSE_HOW_TO_STEPS: readonly AlorsOnDanseHowToStep[] = [
  {
    name: { en: 'Upload two photos', zh: '上传两张照片' },
    text: {
      en: 'On ViralReel, open the Alors On Danse template and upload two clear front-facing photos — Image 1 is whoever plays the keyboard, Image 2 is whoever dances beside them. Use photos of yourself or adults who agreed. A half-body photo with the face clear works best; pets and babies take the dance role well. JPG, PNG, and WebP work.',
      zh: '在 ViralReel 打开 Alors On Danse 模板，上传两张清晰正面照——照片 1 是弹键盘的人，照片 2 是旁边伴舞的人。只用你本人或经同意的成年人照片。脸部清晰的半身照效果最好；宠物和小孩放伴舞位也很出彩。支持 JPG、PNG 和 WebP。',
    },
  },
  {
    name: { en: 'Pick a version and generate', zh: '选一个版本并生成' },
    text: {
      en: 'Pick the version closest to the pair you are casting — Studio Giant, Original Sketch, Football Duo and more. Keep the 16:9 landscape ratio like the studio versions, check the credit cost shown before you start, and generate. The AI re-shoots the white-studio sketch around your two faces: same room, same beat, same joke.',
      zh: '选一个和你要排的两人组最接近的版本——白棚巨人版、原版小剧场、足球双人版等。画幅保持 16:9 横屏（与白棚版本一致），看清页面上的积分后生成。AI 会围绕你的两张脸重拍这条白棚小品：同一个房间、同一段节拍、同一个笑点。',
    },
  },
  {
    name: { en: 'Download', zh: '下载' },
    text: {
      en: 'Download the MP4 when the render finishes — about 30 seconds, with the contrast joke intact: one person plays it straight at the keyboard, the other commits far too hard beside them. Paid credit packs and monthly plans export without a ViralReel watermark.',
      zh: '渲染完成后下载 MP4——约 30 秒，反差笑点原样保留：一个人在键盘前面无表情，另一个人在旁边用力过猛。付费积分包和月付方案导出没有 ViralReel 水印。',
    },
  },
  {
    name: { en: 'Add the sound and the AI label', zh: '加上原声和 AI 标注' },
    text: {
      en: 'In TikTok, Reels, or Shorts, search for the Alors on danse trend sound (the Stromae classic or the Extended Mix people use), post with a caption about who is who, and turn on the AI-generated label where the platform asks. ViralReel does not license the song.',
      zh: '在 TikTok、Reels 或 Shorts 的曲库搜索 Alors on danse 趋势原声（Stromae 经典原曲或大家用的 Extended Mix 版），配上一条「谁是谁」的文案发布，并在平台要求时打开 AI 生成标注。ViralReel 不授权这首歌。',
    },
  },
];
