/** 365 Elevator how-to steps — shared by the page HowTo JSON-LD and the
 *  visible tutorial block. Kept to five concrete steps. */
export const ELEVATOR_365_STEPS = [
  {
    name: {
      en: 'Save the trend sound',
      zh: '先收好热梗原声',
    },
    text: {
      en: 'Open the "365" sound by @sampagnebaby in TikTok and tap "Use this sound" or save it to favorites. ViralReel renders the video; the song gets attached in the app when you post.',
      zh: '在 TikTok 打开 @sampagnebaby 的《365》原声，点「使用此声音」或收藏。ViralReel 负责渲染视频；发帖时在 App 里挂上这首歌。',
    },
  },
  {
    name: {
      en: 'Pick the two portraits',
      zh: '挑好两张正脸照',
    },
    text: {
      en: 'Slot 1 is the person already inside (the one who sings first, standing right). Slot 2 is the person who walks in (ending on the left). Waist-up or knee-up, front-on, one person per photo.',
      zh: '位置 1 是已经在电梯里的人（先开口唱、站右边）。位置 2 是走进去的人（最后站左边）。半身或膝盖以上、正脸、一张照片一个人。',
    },
  },
  {
    name: {
      en: 'Upload in order at viralreel.app/365-elevator-ai-template',
      zh: '按顺序上传到 viralreel.app/365-elevator-ai-template',
    },
    text: {
      en: 'The page opens with the generator and the framing already follows the reference clip (4:3). Drop the inside person into the first slot and the walk-in into the second — order decides who stands where.',
      zh: '页面打开就是生成器，画幅自动跟随参考片段（4:3）。把电梯里的人放进第一个位置、走进去的人放进第二个——顺序决定站位。',
    },
  },
  {
    name: {
      en: 'Check the cost and render',
      zh: '看清积分，开始渲染',
    },
    text: {
      en: 'The exact credit cost for your resolution and the 15-second length shows on the generate button before you start. Rendering usually takes a few minutes; failed renders are refunded.',
      zh: '生成按钮上会先显示所选分辨率和 15 秒时长对应的确切积分。渲染通常几分钟；失败会退回积分。',
    },
  },
  {
    name: {
      en: 'Download, add the sound, post as AI',
      zh: '下载、挂原声、标注 AI',
    },
    text: {
      en: 'Download the 4:3 MP4, post it with Sampagne\'s "365" sound, turn on the platform\'s AI-generated label, and caption it with your duo joke — "the duo nobody expected" works. Ask the comments who rides next.',
      zh: '下载 4:3 的 MP4，挂上 Sampagne 的《365》原声，打开平台的 AI 生成标注，文案配你的双人梗——「没人想到的二人组」就很好用。评论区问一句「下一个想看谁」。',
    },
  },
] as const;
