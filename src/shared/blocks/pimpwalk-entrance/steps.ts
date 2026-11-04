/** Canonical four-step HowTo for the Pimpwalk Entrance AI video. */
export interface PimpwalkHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const PIMPWALK_HOW_TO_STEPS: readonly PimpwalkHowToStep[] = [
  {
    name: { en: 'Pick the doorway you want to enter', zh: '选一条你想进的门口片段' },
    text: {
      en: 'On ViralReel, open the Pimpwalk Entrance template and pick one of three doorway clips: the Burger Shop Dandy (the 592K-play version), Walter White on the Door, or the Yellow Shirt Strut. Each keeps its own shop, its own door holder and its own timing.',
      zh: '在 ViralReel 打开 Pimpwalk Entrance 模板，三条门口片段任选：汉堡店花花公子（592K 播放那条）、门后老白、黄衫进场。每条保留自己的小店、自己的拉门人和自己的节奏。',
    },
  },
  {
    name: { en: 'Upload two photos — walker first', zh: '上传两张照片——进门的人放第一张' },
    text: {
      en: 'Photo 1 is whoever makes the entrance; photo 2 is the friend who holds the door. Full body beats waist-up: the whole entrance happens below the chest — bent knees, the drop, the rise. One person per photo, sharp, no sunglasses and no beauty filter; the last second is a face filling the frame.',
      zh: '第 1 张照片是进场的人；第 2 张是拉门的朋友。全身照优于半身：整个进场动作都发生在胸部以下——屈膝、下蹲、起身。每张一个人，照片要清晰，不要墨镜和美颜——最后一秒是一张脸填满画面。',
    },
  },
  {
    name: { en: 'Set ratio and length', zh: '选画幅和时长' },
    text: {
      en: 'Trend posts are vertical, so the page opens on 9:16 and the length is fixed at 15 seconds — the full scene: the door opening, the strut, and the close-up. Read the credit cost shown before you generate. The result is a new fan-style scene, not a copy of the original TikTok.',
      zh: '趋势原帖都是竖屏，页面默认 9:16，时长固定 15 秒——完整一幕：开门、进场、特写。生成前先看清页面上的积分。成片是一条新的粉丝向场景，不是原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, caption the destination, and label it AI', zh: '下载，配「走进哪里」的文案，并标注 AI' },
    text: {
      en: 'Download the MP4 and post it with #pimpwalkentrance and #holdthedoor. Caption it with the place they are walking into — "me walking into the barbershop", "dad entering the family BBQ", "first day back at work". Add the trend sound from the TikTok, Reels, or Shorts library — ViralReel does not license the sound — and turn on the AI-generated label.',
      zh: '下载 MP4，带 #pimpwalkentrance 和 #holdthedoor 发布。配文写「走进了哪里」——「me walking into the barbershop」「dad entering the family BBQ」「上班第一天」。在 TikTok、Reels 或 Shorts 的曲库里加热梗原声——ViralReel 不授权该声音——并打开 AI 生成标注。',
    },
  },
];
