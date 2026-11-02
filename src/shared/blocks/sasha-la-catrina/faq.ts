import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const SASHA_LA_CATRINA_PRODUCT = { en: 'Sasha La Catrina', zh: 'Sasha La Catrina' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** Sasha La Catrina FAQ — shared by the page JSON-LD and the landing layout. */
export function getSashaLaCatrinaFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/sasha-la-catrina-ai-template');
  if (zh) {
    return [
      ['Sasha La Catrina 是什么？', '它是 2026 年亡灵节期间 TikTok 上最火的 AI 变身趋势：一张照片进，一朵花划过画面或双手掩面，万寿菊金光扫过，照片里的人就变回了《生命之书》里的 La Catrina——白金糖骷髅妆、织入万寿菊的刺绣蕾丝裙、橙紫花冠或宽檐蕾丝帽。西语区叫她 Sasha，CapCut 模板也因此得名 Sasha La Catrina。'],
      ['Sasha 是谁？是新角色吗？', '不是新角色。Sasha 是西语区 TikTok 在这条趋势里对 La Catrina 本尊的爱称——文案写「adiós Sasha, adiós señora bonita」。她的原型是亡灵节的优雅骷髅女士，童话形象出自 2014 年动画电影《生命之书》（The Book of Life）。'],
      ['La Catrina 最早是怎么来的？', '约 1910 年，墨西哥版画家 José Guadalupe Posada 创作了 la calavera garbancera——一个戴欧式羽帽的骷髅，讽刺刻意掩盖原住民根基的人。1947 年 Diego Rivera 在壁画里给她穿上完整裙装并命名 La Catrina。此后她成为 11 月 1-2 日亡灵节的标志性形象。'],
      ['这条趋势是怎么火起来的？', '2026 年 9 月 24 日第一条走红的 Catrina AI 片（祭坛前变身）拿下 21.66 万播放；10 月 20 日越南创作者 Đan Thy（@thybui.__）的撒花变身爆了——4060 万播放、700 万点赞；10 月 25 日她的续作把台词「Adiós señora bonita」配上变身、破 3100 万；10 月 26 日 CapCut 模板 Sasha La Catrina 让变身一张照片就能玩；10 月 27 日宠物版入场；11 月 1 日亡灵节当天浪潮登顶。'],
      ['怎么用一张照片制作 Sasha La Catrina 视频？', `打开 ${template} ，在样本列表里选一个变身（撒花、同款另一张脸、歌声变身、祭坛揭面、男版 Catrín、猫咪变身、游行奶奶），上传一张清晰的正面照，浏览器里直接生成 5-15 秒的竖屏视频。发布时配上《Adiós señora bonita》原声并按平台要求标注 AI。`],
      ['需要几张照片？', '几乎每个变身都只要一张。人物版用清晰正面照——脸无遮挡、手别挡脸、想出全裙装就半身；宠物版用一张宠物头部和花纹都清楚的照片。双人版才需要第二张照片。'],
      ['可以做宠物版吗？', '可以。猫咪变身样本对猫狗都适用，生成时保留花纹和特征。照片里只放宠物。注意区分：给在世宠物换装是萌宠玩法；用离世宠物的照片「穿过万寿菊之门回来」是另一个纪念向趋势，两者不要搞混。'],
      ['视频带原声吗？', '成片保留样本原声——这条趋势用的是《生命之书》的《Adiós señora bonita》。如果下载的文件没声音，发布时在 TikTok 站内曲库添加，这样算法才会把你的视频归进 #fairytalecatrina。ViralReel 不授权这首歌。'],
      ['视频是多大画幅、多长？', '全部 9:16 竖屏，时长跟样本走：5、10 或 15 秒——选中样本后时长档自动锁定，和原片段一致。'],
      ['这和 Catrina 妆容趋势是一回事吗？', '不是，它们是同一造型的两半。Catrina 妆容趋势是几小时的真实化妆和教程——线下半场，任何照片都替代不了；Sasha La Catrina AI 是单照片变身——几秒出片。想学真妆就搜「catrina makeup」，想秒出造型就用 AI。'],
      ['有 Sasha La Catrina 的 CapCut 模板吗？', '有，10 月 26 日起在模板账号间传播，节前使用量破 960 次。但 CapCut 模板是把脸贴到固定片段上；ViralReel 是从你的照片重新生成整个人——糖骷髅妆之下的脸、发型、身材都还是你。'],
      ['在 ViralReel 做一条要多少积分？', templateLiveCostAnswer(SASHA_LA_CATRINA_PRODUCT, true, ctx)],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      ['可以用名人或孩子的照片吗？', '不可以。只使用你本人、家人或宠物的照片。不要用未成年人单独出镜、名人或陌生人的照片，也不要把成片冒充真实妆造。发布时保持 AI 生成标注。'],
      ['ViralReel 和原作者是何关系？', '没有关联。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Đan Thy、TikTok、《生命之书》版权方均无隶属或授权关系。样本片段的创意归各自的创作者，二创请致谢原作者并标注 AI。'],
    ];
  }
  return [
    ['What is the Sasha La Catrina trend?', 'It is the biggest AI-transformation wave of Día de Muertos 2026: one photo in, a flower crosses the frame or hands cover the face, marigold light sweeps over, and the person comes back as La Catrina of The Book of Life — sugar-skull paint in white and gold, an embroidered lace gown, a marigold crown. The Spanish side of TikTok calls her Sasha, which is where the CapCut template\'s name comes from.'],
    ['Who is Sasha? Is she a new character?', 'No. Sasha is the affectionate name the Spanish side of TikTok gave La Catrina herself in this trend — the caption runs "adiós Sasha, adiós señora bonita". She is the elegant skeleton of Día de Muertos, with her fairytale look from the 2014 film The Book of Life.'],
    ['Where does La Catrina originally come from?', 'Around 1910, the Mexican printmaker José Guadalupe Posada created la calavera garbancera — a skeleton in a European plumed hat mocking people who hid their indigenous roots. In 1947 Diego Rivera gave her the full gown and the name La Catrina in his Alameda Park mural. She has been the face of Día de Muertos (November 1-2) ever since.'],
    ['How did the trend take off?', '24 September 2026: the first traveling Catrina AI clip (a reveal at an ofrenda) took 216.6K plays. 20 October: Đan Thy (@thybui.__) threw a flower across her bedroom — 40.6M plays, 7M likes. 25 October: her "adios SHASHA" follow-up put "Adiós señora bonita" on the reveal and passed 31M. 26 October: the CapCut template Sasha La Catrina made the reveal one photo long. 27 October: pets joined, a kitten in lace passing 453K. 1 November, Día de Muertos: the wave peaked.'],
    ['How do I make a Sasha La Catrina video with one photo?', `Open ${template}, pick a reveal from the sample list — Flower Toss, Second Face, Song Reveal, Ofrenda Reveal, Catrín, Catrina Cat, or Grandmother — upload one clear front-facing photo, and generate a 5-15 second vertical video in the browser. Post it with the "Adiós señora bonita" sound and the AI label.`],
    ['How many photos does it need?', 'Almost every reveal takes one. People: a clear front-facing photo, face unobstructed, hands away from the face, waist-up for the full gown. Pets: one photo with the whole head and markings visible. A pair version takes a second photo as Image 2.'],
    ['Can I make a pet version?', 'Yes — the Catrina Cat sample works for cats and dogs, keeping the markings and whiskers. Keep the pet alone in the photo. Note the difference: dressing a living pet is the costume trend; bringing back a pet that has passed through the marigold gate is a separate memorial trend — do not mix them up.'],
    ['Does the video come with the sound?', 'The render keeps the sample\'s original sound — "Adiós señora bonita" from The Book of Life is the track the trend rides. If your download is silent, add the track from the TikTok sound library when posting so the algorithm files your clip under #fairytalecatrina. ViralReel does not license the song.'],
    ['What ratio and length is the video?', 'Everything is vertical 9:16, and the length follows the sample: 5, 10 or 15 seconds. The duration locks to your sample when you select it, matching the original clip.'],
    ['Is this the same as the Catrina makeup trend?', 'No — they are two halves of one look. The Catrina makeup trend is hours of real face paint and tutorials; Sasha La Catrina AI is the one-photo reveal that takes seconds. Want the craft, search "catrina makeup". Want the look without the three hours, use the AI.'],
    ['Is there a Sasha La Catrina CapCut template?', 'Yes — it spread through template accounts from 26 October and passed 960 uses before the holiday. But CapCut pastes a face onto a fixed clip; ViralReel re-renders the whole person from your photo — your face, hair and build stay yours under the paint.'],
    ['How many credits does one video cost on ViralReel?', templateLiveCostAnswer(SASHA_LA_CATRINA_PRODUCT, false, ctx)],
    ['Do paid exports have a watermark?', paidExportWatermarkAnswer(false)],
    ['Are credits refunded if generation fails?', failedJobCreditRefundAnswer(false)],
    ['Can I use celebrity or children\'s photos?', 'No. Use your own, your family\'s, or your pet\'s photos. Do not upload minors solo, celebrities, or strangers, and do not pass the output off as real face paint. Keep the AI-generated label on when you post.'],
    ['What is ViralReel\'s relationship with the creators?', 'None. ViralReel (viralreel.app) is an independent AI video template site, not affiliated with Đan Thy, TikTok, or The Book of Life rights holders. The sample clips\' ideas belong to their creators — credit the originals and label your post as AI.'],
  ];
}
