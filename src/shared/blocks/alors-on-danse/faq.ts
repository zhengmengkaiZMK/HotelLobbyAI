import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  templateLiveCostAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';

const ALORS_ON_DANSE_PRODUCT = { en: 'Alors On Danse', zh: 'Alors On Danse' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** Alors On Danse FAQ — shared by the page JSON-LD and the landing layout. */
export function getAlorsOnDanseFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/alors-on-danse-ai-template');
  if (zh) {
    return [
      ['Alors On Danse AI 趋势是什么？', '它是 2026 年 10 月初起在 TikTok 走红的 AI 换人玩法：把两张新脸放进 2010 年 Jamel Debbouze 综艺《Made in Jamel》里的白棚小品——Jamel 闯进 Stromae 的录音棚、在旁边跳舞指镜头耍宝，而 Stromae 面无表情地继续弹迷你键盘。AI 版本保留同一个房间、同一段《Alors on danse》的节拍，只换这两个人。'],
      ['视频里「另一个人」是谁？', '弹键盘、一脸淡定的是比利时歌手 Stromae（本名 Paul Van Haver），在旁边跳舞、指着镜头假装指导节拍的是法国喜剧演员 Jamel Debbouze。这个小品是对《Alors on danse》创作过程的恶搞，出自 2010 年的《Made in Jamel》。'],
      ['这是真实的创作幕后吗？', '不是。它是 2010 年 Jamel Debbouze 秀里的喜剧小品，戏仿了这首歌「怎么写出来的」。Stromae 其实是自己一个人写出《Alors on danse》的——这正是这个段子好笑的原因。'],
      ['Alors on danse 是什么意思？', '法语「那么我们跳舞吧」。Stromae 这首 2009 年的歌讲的是跳舞来忘掉房租、工作和生活的烦——所以这句词配什么画面都成立，也是这条趋势文案好写的原因。'],
      ['怎么用两张照片制作 Alors On Danse AI 视频？', `打开 ${template} ，照片 1 放弹键盘的人，照片 2 放伴舞的人，选一个最接近你们组合的版本，在浏览器里直接生成约 30 秒的视频。下载 MP4 后，在 TikTok、Reels 或 Shorts 加上趋势原声并按平台要求标注 AI 生成。`],
      ['哪张照片放哪个位置？', '照片 1 是键盘位——镜头从头拍到胸口、低头的角度，一张脸部清晰的普通照片就够。照片 2 是伴舞位——动作大、还要指镜头，选一张本来就在笑或大笑中的照片，保留度更高。位置放反了笑点就倒了，上传前看清按钮。'],
      ['可以用宠物、小孩或动漫角色吗？', '可以。伴舞位完全可以放狗、猫、小孩或卡通角色，弹键盘位放人。给宠物一张脸部清晰的照片，生成时模型会保留它的花纹和特征。'],
      ['视频带原声吗？', 'ViralReel 导出的是画面文件，不含已授权的《Alors on danse》录音。发布时在 TikTok、Reels 或 Shorts 的曲库搜索这条趋势原声（原曲或 Extended Mix 版），这样你的帖子才会进入同一条趋势。'],
      ['视频是多大画幅、多长？', '大部分白棚版本是横屏或方形构图，模板默认 16:9，时长固定约 30 秒——和这条趋势里流传最广的版本一致。竖屏版（原版小剧场）也有对应变体。'],
      ['这和 2021 年的 Alors on danse 趋势是一回事吗？', '不是。2021 年流行的是这首歌的慢速版配群舞，大家把自己剪进群舞里；2026 年这波是双人白棚小品，AI 从两张照片重新生成两个完整的人，不是把脸贴上去。'],
      ['有 Alors on danse 的 CapCut 模板吗？', 'App 里能搜到同名模板，但大多是 2021 年的群舞版；就算是白棚小品模板，也只是把脸贴到固定片段上。ViralReel 是从你的照片重新生成整个人物——脸、发型、身体、衣服都和片段匹配。对照页是 ' + site(true, '/alors-on-danse-template') + ' 。'],
      ['在 ViralReel 做一条要多少积分？', templateLiveCostAnswer(ALORS_ON_DANSE_PRODUCT, true, ctx)],
      ['付费导出有水印吗？', paidExportWatermarkAnswer(true)],
      ['生成失败积分会退吗？', failedJobCreditRefundAnswer(true)],
      ['可以用名人或孩子的照片吗？', '不可以。只使用你本人或经同意的成年人（18+）照片。不要用未成年人、名人、影视角色或陌生人的照片，也不要用这条视频冒充真实的创作幕后。'],
      ['ViralReel 和 Stromae、Jamel Debbouze 有关系吗？', '没有。ViralReel（viralreel.app）是独立的 AI 视频模板站，与 Stromae、Jamel Debbouze 或任何版权方没有隶属或授权关系。这个小品属于 Jamel Debbouze 和 Stromae，《Alors on danse》是 Stromae 的歌——AI 重制是粉丝向戏仿，发布时请标注 AI。'],
    ];
  }
  return [
    ['What is the Alors On Danse AI trend?', 'It is the TikTok trend from early October 2026 of AI-swapping two new faces into the 2010 white-studio sketch from Jamel Debbouze\'s show Made in Jamel: Jamel crashes Stromae\'s session, dances and points at the camera, while Stromae keeps playing the mini keyboard with a straight face. The AI versions keep the same room and the same "Alors on danse" beat and change only the two people.'],
    ['Who is the other guy in the Alors on danse video?', 'The calm one at the keyboard is the Belgian artist Stromae (Paul Van Haver); the one dancing, pointing at the lens and pretending to coach the beat is the French comedian Jamel Debbouze. The sketch is a parody of how the song was written, from the 2010 show Made in Jamel.'],
    ['Is that studio clip the real making-of?', 'No. It is a comedy sketch from Jamel Debbouze\'s 2010 show, a parody of how the song was made. Stromae actually wrote "Alors on danse" by himself — which is part of why the clip is funny.'],
    ['What does "alors on danse" mean?', 'It is French for "so we dance". Stromae\'s 2009 song is about dancing to forget rent, work and everything else — which is why the phrase works as a caption on almost anything, and why this trend is so easy to caption.'],
    ['How do I make an Alors On Danse AI video with two photos?', `Open ${template} , put the keyboard person in Image 1 and the dancer in Image 2, pick the version closest to your pair, and generate a ~30-second clip in the browser. Download the MP4, add the trend sound in TikTok, Reels, or Shorts, and label the post as AI.`],
    ['Which photo goes in which slot?', 'Image 1 is the keyboard role — filmed from the chest up, head down, so a plain photo with the face clear and no sunglasses is enough. Image 2 is the dance role — it moves a lot and points at the lens, so a photo where the person is already smiling or mid-laugh keeps more of them. The slots are labeled in the generator; swapping them flips the joke.'],
    ['Can I use a pet, a baby, or a character?', 'Yes. The dance role takes a dog, a cat, a toddler or a cartoon character without changing the rest of the clip. Put the person at the keyboard as Image 1 and give the model a clear picture of the animal\'s face so it keeps the markings.'],
    ['Does the video include the sound?', 'No. ViralReel exports the picture only and does not license the "Alors on danse" recording. Add the trend sound inside TikTok, Reels, or Shorts (the original or the Extended Mix people use) so your post joins the same feed.'],
    ['What ratio and length is the video?', 'Most studio versions are landscape or square, so the template opens on 16:9 with a fixed ~30-second length — the shape of the versions that traveled the widest. A vertical variant (Original Sketch) covers the vertical repost of the original.'],
    ['Is this the same as the 2021 Alors on danse trend?', 'No. In 2021 the slowed version of the song carried a group dance and people edited themselves into that group. This one is the two-person white-studio sketch, and the AI rebuilds both people from one photo each instead of pasting a face on top.'],
    ['Is there an Alors on danse CapCut template?', 'There are templates with the song\'s name, but most are the 2021 dance; even the sketch ones paste your face onto a fixed clip. ViralReel renders the whole person from your photo so face, hair, body and outfit match the clip. The comparison is at ' + site(false, '/alors-on-danse-template') + '.'],
    ['How much does it cost on ViralReel?', templateLiveCostAnswer(ALORS_ON_DANSE_PRODUCT, false, ctx)],
    ['Do paid exports have a watermark?', paidExportWatermarkAnswer(false)],
    ['Are credits refunded if a render fails?', failedJobCreditRefundAnswer(false)],
    ['Can I use celebrity or kids\' photos?', 'No. Only upload photos of yourself or adults (18+) who agreed. Do not upload minors, celebrities, movie characters, or strangers, and do not pass the output off as the real making-of.'],
    ['Is ViralReel affiliated with Stromae or Jamel Debbouze?', 'No. ViralReel (viralreel.app) is an independent AI video template site with no affiliation or license from Stromae, Jamel Debbouze, or any rights holder. The sketch belongs to Jamel Debbouze and Stromae, and "Alors on danse" is Stromae\'s song — these recasts are fan remixes, so label your post as AI.'],
  ];
}
