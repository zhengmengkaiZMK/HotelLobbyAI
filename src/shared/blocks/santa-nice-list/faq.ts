import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const snlCost = templateHowMuchAnswer({
  en: 'Santa Nice List',
  zh: 'Santa Nice List',
});

/** Santa Nice List FAQ — shared by the page JSON-LD and the landing layout.
 *  Commercial questions come first (GEO): cost? free? how long? refund? — then the trend, photos, sound and posting. */
export const SANTA_NICE_LIST_FAQ = {
  en: [
    ['How much does a Santa Nice List AI video cost on ViralReel?', snlCost.en],
    ['Is the Santa Nice List AI video generator free?', 'ViralReel does not offer free trials on this template — every render is paid with credits, and the exact cost shows in the generator before you start. Credit packs and monthly plans are on the Pricing page; failed or canceled generations are refunded automatically.'],
    ['How long does it take to generate the video?', 'A Santa Nice List clip renders in a few minutes depending on the selected model and system demand — shorter meme clips are usually faster than long cinematic ones. You can follow the live progress bar in ViralReel, and the finished video runs about 10 seconds.'],
    ['What happens if my video generation fails?', 'If the generation fails or is canceled, the credits used for that job are automatically returned to your ViralReel account. If the refund does not appear, contact support with your generation ID. An automatic credit refund is not a cash refund of a purchased pack — payment refunds follow the Terms of Service.'],
    ['What is the Santa Nice List trend?', 'It is a Christmas AI video trend: Santa sits in his workshop, checks his Naughty & Nice List (or holds a snow globe, or opens a golden gift box), gold sparkles settle, and the big reveal is your child\'s photo inside the frame, globe or gift box. Parents post it with captions like "who was good this year?". Last season\'s versions reached 8.2 million plays, and the 2026 workshop-scroll template passed 100,000 uses in its first four days.'],
    ['Where can I make a Santa Nice List video?', 'On ViralReel, at https://www.viralreel.app/santa-nice-list-ai-template. Pick one of eleven Santa clips — the scroll, snow globes, the gift box, the fireplace sisters — upload one photo, and generate in the browser. No app, no CapCut template, no prompt to write. ViralReel is an independent AI video template site and is not affiliated with the original creators.'],
    ['How do I make a Santa Nice List video with my child\'s photo?', 'Choose one of the eleven Santa Nice List clips on ViralReel, upload one clear photo of your child (or a grown-up, or the dog), keep the default 9:16 and 10-second settings, and press Generate. Preview and download the finished MP4, then post it with the AI-generated label.'],
    ['What photo works best for a Santa Nice List video?', 'A clear, smiling, front-facing photo with the whole head visible. The reveal is the happy ending and the AI keeps the expression from your photo, so a big smile or a laugh reads best inside the frame. Frames and globes are small on screen — a close, sharp photo keeps the face recognisable; a full-body shot from far away gets lost.'],
    ['Can I put an adult or a pet on the Nice List?', 'Yes. Any photo works — the grown-up clip shows an adult in the golden frame, and pets can sit in Santa\'s snow globe. Results with animals vary more, so check the reveal before posting.'],
    ['What does "quién se portó bien" mean?', 'It is Spanish for "who was good?", usually "quién se portó bien este año?" — who was good this year. It is the caption most Santa Nice List templates are posted with, and the name of the 2026 CapCut template that revived the trend.'],
    ['Where did the Santa Nice List trend come from?', 'It grew out of the old "Santa is making a list" Christmas promise. Real-life Santas reading kids\' names went viral first (October-November 2025), then Spanish-speaking CapCut creator @memovich01 posted free snow-globe templates in late November 2025 — his second one reached 8.2M plays and 336,849 uses — and @aure_cut\'s gift-box version followed in December. A new workshop-scroll template brought the trend back in November 2026.'],
    ['Is the Santa Nice List video real or AI-generated?', 'The template videos are AI-generated (or made in CapCut): Santa is a generated character and the reveal is built from your photo — nobody filmed your child at the North Pole. Real-life Santa reading-names videos are a separate trend. Keep the AI-generated content label on when you post your own version.'],
    ['What ratio and length should a Santa Nice List video use?', '9:16 vertical, like every TikTok and Reels clip — the reveal is framed for a phone screen. Length: about 10 seconds, which matches the reference clips and is enough for the sparkle payoff. ViralReel\'s page defaults to both.'],
    ['Does the generated video include the original sound?', 'The reference clips carry their own music and sound, and sound handling depends on the selected model — some exports keep the reference audio, others generate audio separately. If the sound is missing, add a Christmas track from TikTok, Reels, or Shorts\' music libraries when you post and follow each platform\'s music rules.'],
    ['Can Santa say my child\'s name?', 'Not in his voice: the remix keeps the clip\'s own sound rather than generating speech. You can put the name on screen instead — type it into the prompt box (for example "the name under the frame reads Emma") and the AI writes it in where the templates show a name card.'],
    ['Can I use photos of my friends or family?', 'Yes, provided each person has agreed to appear. Use one person per photo, face clearly visible. Do not upload photos of minors without their guardians\' consent, and never photos of actors, celebrities, or anyone who has not agreed.'],
    ['Why does my video look different from the preview?', 'The AI uses your photo and the template\'s reference clip as a guide — faces, sparkles and small timing details vary with each render. If the face in the reveal loses resemblance, try a sharper, closer photo and generate again.'],
    ['Can I download my video without a watermark?', 'Yes. Eligible ViralReel exports download as a clean MP4 without a ViralReel watermark, ready to edit or post.'],
    ['Can I post my Santa Nice List video on TikTok?', 'Yes. Download the 9:16 MP4, upload it in the app, add a Christmas sound from the platform\'s library if needed, and turn on the AI-generated content label — TikTok requires disclosure for realistic AI content, and Christmas videos of "Santa revealing your kid" are exactly that.'],
    ['Is ViralReel affiliated with the original creators or rights holders?', 'No. ViralReel is an independent AI video platform. Its Santa Nice List templates are fan-made tools not endorsed by the original CapCut creators, the TikTok accounts that started the trend, or any rights holders.'],
  ],
  zh: [
    ['在 ViralReel 做一条 Santa Nice List AI 视频要多少钱？', snlCost.zh],
    ['Santa Nice List AI 视频生成器免费吗？', '本模板不提供免费生成——每次渲染都消耗积分。开始前生成器会显示本次确切费用。积分包和月付套餐见 Pricing 页；生成失败或取消会自动退回积分。'],
    ['生成视频要多久？', 'Santa Nice List 片段渲染通常只需几分钟，视所选模型和系统负载而定——短梗视频一般比长电影感视频更快。页面有实时进度条可跟踪，成片约 10 秒。'],
    ['生成失败了怎么办？', '生成失败或取消时，本次消耗的积分会自动退回你的 ViralReel 账户。如果积分没有退回，请携带生成 ID 联系客服。自动退积分不等于现金退款——已购积分包的付款退款按服务条款处理。'],
    ['Santa Nice List 是什么趋势？', '这是圣诞季的 AI 视频趋势：圣诞老人坐在工作坊里查看「淘气与乖巧名单」（或举起雪球、打开金色礼盒），金光闪过，压轴揭晓的是你家孩子的照片出现在相框、雪球或礼盒里。家长们配文「今年谁表现好？」发布。上一季的版本最高 820 万播放，2026 年的新版工作坊卷轴模板上线 4 天使用量就破 10 万。'],
    ['在哪里可以做 Santa Nice List 视频？', '在 ViralReel：https://www.viralreel.app/zh/santa-nice-list-ai-template 。十一个圣诞老人片段任选——卷轴、雪球、礼盒、壁炉姐妹——上传一张照片，浏览器里直接生成。不用装 App，不用找 CapCut 模板，也不用写提示词。ViralReel 是独立的 AI 视频模板站，与原作者无关。'],
    ['怎么用我家孩子的照片做 Santa Nice List 视频？', '在 ViralReel 十一个片段里选一个，上传一张孩子的清晰照片（大人或宠物的照片也行），保持默认的 9:16 和 10 秒设置，点生成。完成后预览并下载 MP4，发布时打开 AI 生成标注。'],
    ['什么照片做 Santa Nice List 效果最好？', '清晰、带笑容、正脸、整头可见的照片。揭晓是故事的圆满结局，AI 会保留照片里的表情——大笑或微笑在相框里效果最好。相框和雪球在屏幕上很小，近距离的清晰照片才能保住五官辨识度；远距离全身照会看不清。'],
    ['大人或宠物能上乖巧名单吗？', '可以。任何照片都行——有专门的大人版（金相框里的成年人），宠物也可以坐进圣诞老人的雪球。动物照片的稳定性稍差，发布前重点检查揭晓画面。'],
    ['"quién se portó bien" 是什么意思？', '西班牙语「谁表现好？」，完整说法 "quién se portó bien este año?"——今年谁表现好。这是大多数 Santa Nice List 模板发布时配的文字，也是 2026 年让趋势回火的那支 CapCut 模板的名字。'],
    ['Santa Nice List 趋势从哪来的？', '它脱胎于「圣诞老人在列名单」的圣诞传统。先是真人圣诞老人念孩子名字的视频爆火（2025 年 10-11 月）；随后西班牙语区 CapCut 创作者 @memovich01 在 2025 年 11 月底发布免费雪球模板——第二条 820 万播放、33.6 万次使用——12 月 @aure_cut 的礼盒版接力；2026 年 11 月新的工作坊卷轴模板让趋势再次升温。'],
    ['Santa Nice List 视频是真的还是 AI 做的？', '模板视频是 AI 生成（或 CapCut 制作）的：圣诞老人是生成角色，揭晓画面用你的照片合成——没有人真的在北极拍你家孩子。真人圣诞老人念名单是另一类视频。发布你自己的版本时请保留 AI 生成标注。'],
    ['Santa Nice List 视频用什么画幅和时长？', '9:16 竖版，和所有 TikTok、Reels 视频一致——揭晓画面就是按手机屏幕设计的。时长约 10 秒，与参考片段一致，足够完成金光压轴。ViralReel 页面默认就是这两项。'],
    ['生成的视频里有原声吗？', '参考片段自带音乐和音效，声音处理取决于所选模型——部分导出保留参考音频，部分单独生成音频。如果缺声音，发布时从 TikTok、Reels 或 Shorts 的曲库添加圣诞音乐，并遵守各平台音乐规则。'],
    ['圣诞老人能念出我家孩子的名字吗？', '不能用人声念：混剪保留片段自带的声音，不单独生成语音。但可以把名字放到画面上——在提示词框里写明（比如「相框下方的名字写着 Emma」），AI 会把名字写在模板显示名牌的位置。'],
    ['可以用朋友或家人的照片吗？', '可以，前提是每个人都同意出镜。一张照片一个人、脸清晰可见。未经监护人同意不要用未成年人的照片，绝不用演员、名人或未同意者的照片。'],
    ['为什么我的视频和预览不一样？', 'AI 用你的照片和模板参考片段做引导——脸、金光和细微时序每次渲染都会不同。如果揭晓画面里的脸不像了，换一张更清晰、更近的照片重跑。'],
    ['下载的视频有水印吗？', '没有。符合条件的导出是无 ViralReel 水印的干净 MP4，可以直接编辑或发布。'],
    ['可以把 Santa Nice List 视频发到 TikTok 吗？', '可以。下载 9:16 的 MP4，在 App 里上传，需要的话从平台曲库添加圣诞音乐，并打开 AI 生成内容标注——TikTok 要求对逼真 AI 内容披露，「圣诞老人揭晓你家孩子」正属于此类。'],
    ['ViralReel 和原作者或版权方有关系吗？', '没有。ViralReel 是独立的 AI 视频平台，Santa Nice List 系列模板是粉丝向工具，未获得原 CapCut 创作者、发起趋势的 TikTok 账号或任何版权方的背书。'],
  ],
} as const;
