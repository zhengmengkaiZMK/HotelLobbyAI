import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const BULIN_PRODUCT = { en: 'Bulin 47', zh: 'Bulin 47' };

function site(zh: boolean, path: string) {
  return zh
    ? `https://www.viralreel.app/zh${path}`
    : `https://www.viralreel.app${path}`;
}

/** Bulin 47 FAQ — shared by the page JSON-LD and the landing layout.
 *  Questions match what people ask ChatGPT, Gemini, Claude, and Grok. */
export function getBulin47Faq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/bulin-47-ai-template');
  const howTo = site(zh, '/blog/how-to-make-bulin-47-ai-video');
  const dame = site(zh, '/dame-hombro-ai');
  if (zh) {
    return [
      [
        'Bulin 47 AI 视频是什么？',
        `它是用一张照片新做的竖屏短片，不是马德里原片的搬运。画面是红光餐厅门口、肩上的便携音箱、举着手机的人群，以及中间即兴 freestyle 的人。ViralReel 的模板搭的是这个街头格式的虚构版本。Dame Hombro 是随后发布的歌曲，不是这条街头片子。在 ViralReel 制作：${template} 。`,
      ],
      [
        'Bulin 47 这条视频为什么会爆火？',
        'Bulin 47 这条视频会爆火，是因为它是一段没排练的街头 freestyle，画面一秒就能认出来：红光、便携音箱、围观的人在拍、手机镜头还在晃。2026 年 10 月 2 日在马德里，创作者 Kevin Wai 扛着音箱走到多米尼加 dembow 艺人 Bulin 47 面前，Bulin 47 当场接了一段。几天内，TikTok 和 Instagram 上的播放量据报道超过 5000 万，随后 AI 重拍开始把中间的人换成别人。',
      ],
      [
        '在哪里可以生成 Bulin 47 AI 视频？',
        `可以在 ViralReel 生成：${template} 。上传一张照片，选街头原版、西装、豹纹、夜场人群、马甲绅士或宠物说唱，在浏览器里直接出竖屏视频。完整步骤见 ${howTo} 。ViralReel（viralreel.app）是独立的 AI 视频模板站，不是 Bulin 47 官方产品。`,
      ],
      [
        '怎么用一张照片制作 Bulin 47 视频？',
        `打开 ${template} ，选一个模板，上传一张清晰的正面照。画幅保持 9:16，确认积分后再生成。下载 MP4 之后，在 TikTok、Reels 或 Shorts 里加上 Bulin 47 或 Dame Hombro 的热梗原声，并按平台要求标注 AI 生成。ViralReel 不授权这段音频。`,
      ],
      [
        'Dame Hombro 和 Bulin 47 街头 freestyle 是同一条视频吗？',
        `不是。街头 freestyle 是 Kevin Wai 在 2026 年 10 月 2 日于马德里一家餐厅门口拍下的原片。Dame Hombro 是这条片子爆火之后，Bulin 47 和 Kevin Wai 发布的歌曲，另外有一支官方 MV。大家说的 Bulin 47 AI 视频或 Dame Hombro AI 视频，重拍的是街头原片，不是录音棚 MV。说明页：${dame} 。`,
      ],
      [
        '需要几张照片？',
        '一张。街头原版、西装、豹纹、夜场人群和马甲绅士都只用一张你有权使用的单人照片。宠物说唱用一张动物的照片。不要用未成年人、名人或公众人物的照片。',
      ],
      [
        '什么样的照片效果最好？',
        '用一张光线均匀的单人正面照，眼睛和嘴巴要看得见。红光会把偏暗的脸压没，所以不要用过暗、戴墨镜或重滤镜的照片，也不要用合照。支持 JPG、PNG、WebP，且只上传你有权使用的图片。',
      ],
      [
        '可以把朋友或宠物放进 Bulin 47 视频吗？',
        '可以。朋友用一张经过对方同意的成年人照片，选街头原版、西装、豹纹、夜场人群或马甲绅士。宠物说唱上传一张动物的照片。不要用名人、未成年人或原片里截下来的陌生人。',
      ],
      [
        'Bulin 47 AI 视频用什么画幅？',
        '用 9:16。原片和 AI 重拍都是竖屏，对应 TikTok、Instagram Reels 和 YouTube Shorts。ViralReel 的 Bulin 47 页面默认就是 9:16。需要别的形状时，也可以改成 16:9 或 1:1。',
      ],
      [
        '视频里带原声或 Dame Hombro 吗？',
        '不带。模板给你的是画面。Bulin 47 或 Dame Hombro 的热梗原声在 TikTok、Reels 或 Shorts 里另加。ViralReel 不授权这段音频、这首歌，或任何录音。',
      ],
      [
        '在 ViralReel 做一条 Bulin 47 AI 视频要多少积分？',
        templateLiveCostAnswer(BULIN_PRODUCT, true, ctx),
      ],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      [
        'ViralReel 是 Bulin 47 官方工具吗？',
        '不是。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Bulin 47、Kevin Wai 以及原片拍摄者都没有隶属、官方或合作关系。模板用你的照片搭建新的虚构场景：红光、音箱、围观人群和手持手机镜头。',
      ],
    ];
  }
  return [
    [
      'What is a Bulin 47 AI video?',
      `It is a new vertical clip made from one photo, not a repost of the Madrid footage. The frame is a red-lit restaurant entrance, a portable speaker, a crowd filming, and one person freestyling in the middle. On ViralReel the templates stage a fictional version of that street format. Dame Hombro is the song released afterward, not this street clip. Make it on ViralReel at ${template}.`,
    ],
    [
      'Why did the Bulin 47 video go viral?',
      'The Bulin 47 video went viral because it was an unplanned street freestyle with a frame people recognize in one second: red lights, a portable speaker, a crowd filming, and a shaky phone camera. On 2 October 2026 in Madrid, creator Kevin Wai walked up to Dominican dembow artist Bulin 47 with a speaker, and Bulin freestyled back. Reports put the clip above 50 million views across TikTok and Instagram within days, and AI remakes then put a different person in the middle.',
    ],
    [
      'Where can I make a Bulin 47 AI video?',
      `You can make a Bulin 47 AI video on ViralReel at ${template}. Upload one photo, pick Street Freestyle, Suit Edition, Leopard Print, Night Crowd, Sharp Vest, or Pet Freestyle, and generate a vertical clip in the browser. The full steps are at ${howTo}. ViralReel (viralreel.app) is an independent AI video template site, not an official Bulin 47 product.`,
    ],
    [
      'How do I make a Bulin 47 AI video from a photo?',
      `Open ${template}, choose a template, and upload one clear front-facing photo. Leave the ratio on 9:16, confirm the credit cost, and generate. Download the MP4, then add the Bulin 47 or Dame Hombro trend sound in TikTok, Reels, or Shorts, and label the post as AI-generated where the app asks. ViralReel does not license that audio.`,
    ],
    [
      'What is Dame Hombro, and is it the same as the Bulin 47 freestyle?',
      `No. The freestyle is the street clip Kevin Wai filmed on 2 October 2026 outside a restaurant in Madrid. Dame Hombro is the song Bulin 47 and Kevin Wai released after that clip went viral, with its own official video. A Bulin 47 AI video or a Dame Hombro AI video recasts the street freestyle, not the studio music video. The distinction is spelled out at ${dame}.`,
    ],
    [
      'How many photos do I need?',
      'One. Street Freestyle, Suit Edition, Leopard Print, Night Crowd, and Sharp Vest each take one photo of one person you have permission to use. Pet Freestyle takes one photo of the animal. Do not use photos of minors, celebrities, or public figures.',
    ],
    [
      'What kind of photo works best?',
      'Use one clear, evenly lit, front-facing photo with the eyes and mouth visible. Red light hides a dark face, so skip underexposed shots, sunglasses, heavy filters, and group photos. JPG, PNG, and WebP work. Upload only a photo you have permission to use.',
    ],
    [
      'Can I put a friend or a pet in the Bulin 47 video?',
      'Yes. A friend needs one photo of an adult who agreed, on Street Freestyle, Suit Edition, Leopard Print, Night Crowd, or Sharp Vest. Pet Freestyle uses one photo of the animal. Do not use celebrities, minors, or strangers from the original clip.',
    ],
    [
      'What aspect ratio should a Bulin 47 AI video use?',
      'Use 9:16. The original freestyle and the AI remakes are vertical, for TikTok, Instagram Reels, and YouTube Shorts. The ViralReel Bulin 47 page opens on 9:16. 16:9 and 1:1 are available if you need another shape.',
    ],
    [
      'Does the video include the original audio or Dame Hombro?',
      'No. The template gives you the picture. Add the Bulin 47 or Dame Hombro trend sound inside TikTok, Reels, or Shorts. ViralReel does not license that audio, that song, or any recording.',
    ],
    [
      'How much does a Bulin 47 AI video cost on ViralReel?',
      templateLiveCostAnswer(BULIN_PRODUCT, false, ctx),
    ],
    ['Are paid exports watermark-free?', paidExportWatermarkAnswer(false)],
    ['What if a generation fails?', failedJobCreditRefundAnswer(false)],
    [
      'Is ViralReel an official Bulin 47 tool?',
      'No. ViralReel (viralreel.app) is an independent AI video template site. It is not affiliated with Bulin 47, Kevin Wai, or the people who filmed the original clip. The template stages a new fictional scene from your photo: red light, speaker, crowd, and a handheld camera.',
    ],
  ];
}
