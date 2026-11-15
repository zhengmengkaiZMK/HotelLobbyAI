/** Canonical five-step HowTo for the Never Let Her Pay AI video. */
export interface NeverLetHerPayHowToStep {
  name: { en: string; zh: string };
  text: { en: string; zh: string };
}

export const NEVER_LET_HER_PAY_HOW_TO_STEPS: readonly NeverLetHerPayHowToStep[] = [
  {
    name: { en: 'Pick a take of the skit', zh: '选一套造型' },
    text: {
      en: 'On ViralReel, open the Never Let Her Pay template and pick one of nine takes: the original "I Got This", Mushroom Cut, White Tux, Black Tux & Bow Tie, Pink Suit, Tracksuit, Streetwear, Black Suit, or Propeller Hat. The restaurant, the waiter and the kitchen stay. The man at the table changes.',
      zh: '在 ViralReel 打开 Never Let Her Pay 模板，九套造型里选一套：原版「我来付」、蘑菇头、白色礼服、黑色礼服领结、粉色西装、运动服、街头潮服、黑西装或螺旋桨帽。餐厅、服务员和后厨不动，换的是桌边的人。',
    },
  },
  {
    name: { en: 'Upload the diner (photo 1) and the waiter (photo 2)', zh: '上传主角（照片 1）和服务员（照片 2）' },
    text: {
      en: 'Photo 1 is the diner who pays — your star. A clear, front-facing, chest-up photo in good light works best; the smarter he looks, the harder the sponge lands. Photo 2 is the waiter, who presents the card machine and walks him to the kitchen — give him his own clear front-facing photo so his face stays consistent in every cut. Use photos of yourself or adults who agreed to appear. Do not upload minors or celebrities.',
      zh: '照片 1 是买单的主角——你的主演。清晰正脸、胸像以上、光线充足效果最好；他穿得越体面，海绵落地越响。照片 2 是服务员——递刷卡机、护送进后厨的都是他，单独给一张清晰正脸照，他的脸才能在每个镜头里保持一致。只用你自己的或经同意的成年人照片。不要上传未成年人或名人。',
    },
  },
  {
    name: { en: 'Set ratio, resolution, and length', zh: '选画幅、清晰度和时长' },
    text: {
      en: 'Leave the ratio on 9:16 — the ratio TikTok, Reels and Shorts use for this trend. Pick 12 seconds to match the original skit\'s pacing, choose the resolution, and read the credit cost shown before you generate. The result is a new fan skit, not a copy of the original TikTok.',
      zh: '画幅保持 9:16——这条趋势在 TikTok、Reels 和 Shorts 上的竖屏规格。时长选 12 秒，对齐原版短剧的节奏；选好分辨率，先看清页面上的积分再生成。成片是一条新的粉丝向短剧，不是原始 TikTok 的拷贝。',
    },
  },
  {
    name: { en: 'Download the MP4', zh: '下载 MP4' },
    text: {
      en: 'Rendering takes a few minutes and the finished clip lands in your History. Download the MP4 and check the two close-ups — the sponge reveal and the calm look — came out sharp. A render that fails is refunded automatically.',
      zh: '渲染通常几分钟，成片在你的历史记录里。下载 MP4，检查两处怼脸特写——海绵揭晓和平静的表情——是否清晰。失败或取消的生成会自动退回积分。',
    },
  },
  {
    name: { en: 'Add the trend sound and label it AI', zh: '加热梗原声，并标注 AI' },
    text: {
      en: 'In TikTok, Reels, or Shorts, add "original sound - georgethegem" from that app\'s library and turn on the AI-generated label. ViralReel does not license the audio. Post it the night he actually grabbed the bill, and tag the one who never lets you pay.',
      zh: '在 TikTok、Reels 或 Shorts 里从该应用曲库加上「original sound - georgethegem」原声，并打开 AI 生成标注。ViralReel 不授权该音频。最好在他真的抢着买了单的那晚发布，并 @ 那个永远不让你买单的人。',
    },
  },
];
