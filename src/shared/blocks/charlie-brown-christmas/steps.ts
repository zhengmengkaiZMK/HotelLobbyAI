/** Canonical four-step HowTo for the A Charlie Brown Christmas AI video. */
export interface CharlieBrownHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const CHARLIE_BROWN_HOW_TO_STEPS: readonly CharlieBrownHowToStep[] = [
  {
    name: { en: 'Pick a redraw clip', zh: '选一条重绘片段' },
    text: {
      en: 'On ViralReel, open the A Charlie Brown Christmas template and pick one of seven clips: Glasses Redraw, Countdown Classic, Car Cameo, Family Elders, Harry Look, Title Card, or Fresh Redraw. Each one runs the same scan-line move in a slightly different cast.',
      zh: '在 ViralReel 打开 A Charlie Brown Christmas 模板，七条片段任选：眼镜重绘、圣诞倒数、车内出镜、全家长辈、哈利造型、手写标题、新鲜出炉。每条跑的都是同一段扫描线动作，只是出镜的人不一样。',
    },
  },
  {
    name: { en: 'Upload one photo that can be redrawn', zh: '上传一张能被重绘的照片' },
    text: {
      en: 'The generator shows one slot. Use a waist-up or full-body photo, face to the camera, with hair, glasses and outfit in frame. No sunglasses and no masks — the whole joke is the two dot eyes sitting under your own glasses. Do not upload minors, celebrities, or screenshots of the 1965 special.',
      zh: '生成器只有一个照片位。用半身或全身照，正脸对镜头，发型、眼镜和衣服都在画面里。不要戴墨镜和口罩——这个梗的全部笑点，就是两个点点眼睛长在你自己的眼镜下面。不要上传未成年人、名人或 1965 年特辑的截图。',
    },
  },
  {
    name: { en: 'Set ratio and length', zh: '选画幅和时长' },
    text: {
      en: 'The trend posts are vertical, so the page opens on 9:16 and the length is fixed at 8 seconds — the front stretch of the 12-second trend format. Read the credit cost shown before you generate. The result is a new fan-style redraw, not a copy of the 1965 special or the original TikTok.',
      zh: '趋势原帖都是竖屏，页面默认 9:16，时长固定 8 秒——即 12 秒趋势格式的前半段。生成前先看清页面上的积分。成片是一条新的粉丝向重绘，不是 1965 年特辑或原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, caption the countdown, and label it AI', zh: '下载，配倒数文案，并标注 AI' },
    text: {
      en: 'Download the MP4. Most posts are captioned with nothing but the number of days left until Christmas, plus #charliebrownchristmas and #snoopyfilter. Add the trend sound from the TikTok, Reels, or Shorts library — ViralReel does not license the sound or the Vince Guaraldi music — and turn on the AI-generated label.',
      zh: '下载 MP4。大多数帖子的配文只有「距离圣诞节还有几天」，再加 #charliebrownchristmas 和 #snoopyfilter。在 TikTok、Reels 或 Shorts 的曲库里加热梗原声——ViralReel 不授权该声音，也不授权 Vince Guaraldi 的音乐——并打开 AI 生成标注。',
    },
  },
];
