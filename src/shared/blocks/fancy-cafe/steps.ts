/** Canonical four-step HowTo for the Your First Time in a Fancy Cafe AI video. */
export interface FancyCafeHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const FANCY_CAFE_HOW_TO_STEPS: readonly FancyCafeHowToStep[] = [
  {
    name: { en: 'Pick the cafe clip you want to be in', zh: '选一条你想进的咖啡馆片段' },
    text: {
      en: 'On ViralReel, open the Your First Time in a Fancy Cafe template and pick one of six clips: Original Table Sitter, Cream Suit, Korean Couple, Spanish POV, Green Trousers, or the Dog on the Table. Each one keeps its own room, its own walk-in and its own timing.',
      zh: '在 ViralReel 打开 Your First Time in a Fancy Cafe 模板，六条片段任选：原版坐桌、奶油西装、韩国情侣、西语 POV、绿裤、狗狗坐桌。每条保留自己的房间、自己的进店人、自己的节奏。',
    },
  },
  {
    name: { en: 'Upload two full-body photos — table first', zh: '上传两张全身照——坐桌的人放第一张' },
    text: {
      en: 'Photo 1 is whoever should sit on the table; photo 2 is the one who walks in and shows how it is done. Use full-body shots, one person per photo, relaxed poses. The joke is in the legs — knees up on the table, then the climb-down — so a selfie crop leaves the model guessing.',
      zh: '第 1 张照片是坐上小桌的人；第 2 张是走进来、示范正确用法的人。用全身照，每张一个人，姿势放松。笑点全在腿上——膝盖顶着桌子、再默默爬下来——所以自拍裁切会让模型瞎猜。',
    },
  },
  {
    name: { en: 'Set ratio and length', zh: '选画幅和时长' },
    text: {
      en: 'Trend posts are vertical, so the page opens on 9:16 and the length is fixed at 15 seconds — the full scene from the perch to the climb-down. Read the credit cost shown before you generate. The result is a new fan-style scene, not a copy of the original TikTok.',
      zh: '趋势原帖都是竖屏，页面默认 9:16，时长固定 15 秒——从坐上桌子到爬下来的完整一幕。生成前先看清页面上的积分。成片是一条新的粉丝向场景，不是原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download, cast your friend, and label it AI', zh: '下载，@ 上坐桌的朋友，并标注 AI' },
    text: {
      en: 'Download the MP4 and post it with #yourfirsttimeinafancycafe. Caption it the way everyone does — "POV: your first time in a fancy cafe" or "can\'t take bro anywhere nice" — and tag whoever is on the table. Add the trend sound from the TikTok, Reels, or Shorts library — ViralReel does not license the sound — and turn on the AI-generated label.',
      zh: '下载 MP4，带 #yourfirsttimeinafancycafe 发布。配文照大家的写法——「POV: your first time in a fancy cafe」或「can\'t take bro anywhere nice」，并 @ 坐在桌上的那位。在 TikTok、Reels 或 Shorts 的曲库里加热梗原声——ViralReel 不授权该声音——并打开 AI 生成标注。',
    },
  },
];
