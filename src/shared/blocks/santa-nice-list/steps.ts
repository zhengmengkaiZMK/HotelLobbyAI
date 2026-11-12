/** Canonical five-step HowTo for the Santa Nice List AI video. */
export interface SantaNiceListHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const SANTA_NICE_LIST_HOW_TO_STEPS: readonly SantaNiceListHowToStep[] = [
  {
    name: { en: 'Pick your Santa clip', zh: '选一个圣诞老人片段' },
    text: {
      en: 'On ViralReel, open the Santa Nice List template and pick one of eleven clips — the Nice List scroll, a snow globe, the gift box, the fireplace sisters, or the real-Santa call. The clip you pick decides the Santa, the room, the prop and the sound you get.',
      zh: '在 ViralReel 打开 Santa Nice List 模板，十一个片段任选——乖巧名单卷轴、雪球、礼盒、壁炉姐妹或真人圣诞老人。选的片段决定了你得到的圣诞老人、房间、道具和声音。',
    },
  },
  {
    name: { en: 'Upload one photo of the good kid', zh: '上传一张乖娃的照片' },
    text: {
      en: 'One photo is all the trend needs: a clear, smiling, front-facing shot with the whole head visible. It can be a baby, a teenager, a grown-up or the dog. A close photo keeps the face recognisable inside the small frame or globe; Christmas clothes blend in nicely but any outfit works.',
      zh: '这个趋势只需要一张照片：清晰、带笑容、正脸、整头可见。宝宝、大孩子、大人或狗狗都可以。相框和雪球在画面里很小，近一点的照片才能保住五官辨识度；圣诞配色的衣服更搭，其他穿搭也完全可行。',
    },
  },
  {
    name: { en: 'Check settings: about 10 seconds, 9:16', zh: '确认参数：约 10 秒、9:16' },
    text: {
      en: 'Keep the default 9:16 vertical ratio and the 10-second duration — they match the reference clips and are ready for TikTok, Reels and Shorts. Choose the resolution and read the exact credit cost before you generate. Failed or canceled jobs are refunded automatically.',
      zh: '保持默认的 9:16 竖版和 10 秒时长——与参考片段一致，发 TikTok、Reels、Shorts 都合适。选好分辨率，生成前看清本次积分。失败或取消的任务会自动退回积分。',
    },
  },
  {
    name: { en: 'Generate and check the reveal', zh: '生成并检查揭晓画面' },
    text: {
      en: 'Press Generate. The AI uses your photo and the template\'s reference clip to rebuild the sparkle reveal with your child in it. The reveal is the payoff — check that the face in the frame or globe still matches your photo and looks sharp before you share.',
      zh: '点击生成。AI 会用你的照片和模板参考片段，把金光揭晓重演一遍、把你家孩子放进画面。揭晓是压轴——分享前检查相框或雪球里的脸是否还像照片、是否清晰。',
    },
  },
  {
    name: { en: 'Download and send the Christmas magic', zh: '下载，把圣诞魔法发给家人' },
    text: {
      en: 'Download the watermark-free 9:16 MP4 and post it with #nicelist or "who was good this year?" — or send it straight to the grandparents. Turn on the AI-generated content label: TikTok and Instagram both require disclosure, and Santa revealing your kid is exactly that.',
      zh: '下载无水印的 9:16 MP4，配 #nicelist 或「今年谁表现好？」发布——或者直接发给爷爷奶奶外公外婆。记得打开 AI 生成内容标注：TikTok 和 Instagram 都要求披露，「圣诞老人揭晓你家孩子」正属于此类。',
    },
  },
];
