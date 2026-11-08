import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const gpCost = templateHowMuchAnswer({
  en: "Gangsta's Paradise",
  zh: "Gangsta's Paradise",
});

/** Gangsta's Paradise FAQ — shared by the page JSON-LD and the landing layout.
 *  Commercial questions come first (GEO): cost? free? how long? refund? — then the trend, photos, sound and posting. */
export const GANGSTAS_PARADISE_FAQ = {
  en: [
    ['How much does a Gangsta\'s Paradise AI video cost on ViralReel?', gpCost.en],
    ['Is the Gangsta\'s Paradise AI video generator free?', 'ViralReel does not offer free trials on this template — every render is paid with credits, and a 20-30 second clip costs more than a short one because billing follows the duration. The exact cost shows in the generator before you start. Credit packs and monthly plans are on the Pricing page; failed or canceled generations are refunded automatically.'],
    ['How long does it take to generate the video?', 'A 20-30 second performance takes longer to render than a short meme clip — expect several minutes depending on the selected model and system demand. You can follow the live progress bar in ViralReel. The finished video runs 20 or 30 seconds, whichever you picked.'],
    ['What happens if my video generation fails?', 'If the generation fails or is canceled, the credits used for that job are automatically returned to your ViralReel account. If the refund does not appear, contact support with your generation ID. An automatic credit refund is not a cash refund of a purchased pack — payment refunds follow the Terms of Service.'],
    ['What is the Gangsta\'s Paradise AI trend?', 'It is an AI-generated music-performance meme: two performers stage a scene where one raps the verse of "Gangsta\'s Paradise" — Coolio\'s 1995 hit featuring L.V. — into a handheld microphone with complete seriousness, the second walks past silently and sings the closing chorus, and the backing cast rises holding microphones as a choir. The best-known version is set in a white sci-fi hangar full of armoured troopers.'],
    ['Where can I make a Gangsta\'s Paradise AI video?', 'On ViralReel, at https://www.viralreel.app/gangstas-paradise-ai-template. Pick one of five staged performances, upload two photos — one for the rapper, one for the singer — and generate in the browser. No app, no CapCut template, no prompt to write. ViralReel is an independent AI video template site and is not affiliated with the original creators.'],
    ['How do I make a Gangsta\'s Paradise AI video?', 'Choose a staged performance on ViralReel, upload two clear photos (rapper and singer), keep the 4:3 ratio, pick 20 or 30 seconds, and press Generate. Preview and download the finished MP4, then post it with the AI-generated label and the song added from your platform\'s music library.'],
    ['Why do I need two photos?', 'The format is a two-hander: the rapper performs the verse for most of the video and fills the frame in several close-ups, while the singer walks past and takes the chorus at the end. Both performers are replaced from your photos, so each slot needs one clear photo of a different person (or character).'],
    ['Who should be the rapper and who should be the singer?', 'The rapper carries almost the whole video — give that slot to whoever wants the attention, with a sharp front-facing photo. The singer stays silent until the chorus reveal — the deadpan friend, the quiet one, or whoever lands the payoff. A full-body or waist-up photo works for the singer because they are mostly seen walking in wide shots.'],
    ['What song is in the Gangsta\'s Paradise videos?', '"Gangsta\'s Paradise" by Coolio featuring L.V., released in 1995, built on a reworking of Stevie Wonder\'s "Pastime Paradise" and known from the film Dangerous Minds. The structure of the meme mirrors the song: Coolio raps the verses, L.V. sings the chorus — so one performer raps and the other waits for the hook.'],
    ['Where did the Gangsta\'s Paradise trend come from?', 'The format took off through an AI-made fan parody showing two look-alike performers in a white sci-fi hangar lined with armoured troopers, rapping and singing the 1995 Coolio track with complete seriousness before the troopers rise as a choir. It is an unofficial fan format — not connected to Lucasfilm, the films, or the song\'s rights holders — and the scene has since been recast with other characters, choirs and settings.'],
    ['Is the Gangsta\'s Paradise video real or AI-generated?', 'It is AI-generated. The performances are staged with AI video tools from reference clips and photos — nobody in these videos actually recorded the performance. Keep the AI-generated content label on when you post your own version.'],
    ['What ratio and length should a Gangsta\'s Paradise video use?', '4:3 landscape, like the reference clips — that retro TV shape is part of the joke. ViralReel\'s page defaults to 4:3. Length: 20 or 30 seconds — the verse needs room to breathe and the chorus payoff lands at the end, so shorter cuts lose the structure.'],
    ['Does the generated video include the original song?', 'The reference performances carry the track, and sound handling depends on the selected model — some exports keep the performance audio, others generate audio separately. The original recording is a commercial track, so ViralReel does not license it; add the song from TikTok, Reels, or Shorts\' music libraries when you post and follow each platform\'s music rules.'],
    ['Can I use photos of my friends or family?', 'Yes, provided each person has agreed to appear. Use one person per photo, face clearly visible. Do not upload photos of minors, actors, celebrities, or anyone who has not consented — including the performers the reference clips resemble.'],
    ['Can I use a pet photo?', 'Pets and drawn characters can work in either slot, but the microphone close-ups are less predictable with animals — check those shots before posting. The verse slot needs a mouth that can follow the rap, so results vary.'],
    ['Why does my video look different from the preview?', 'The AI uses your photos and the template\'s reference performance as a motion guide — faces, outfits and small timing details vary with each render. A longer clip with several cuts gives the model more chances to drift: check both faces after every cut and re-run if a face loses resemblance.'],
    ['Can I download my video without a watermark?', 'Yes. Eligible ViralReel exports download as a clean MP4 without a ViralReel watermark, ready to edit or post.'],
    ['Can I post my Gangsta\'s Paradise video on TikTok?', 'Yes. Download the 4:3 MP4, upload it in the app, add the song from the platform\'s library, and turn on the AI-generated content label — TikTok requires disclosure for realistic AI content showing people performing things they did not actually do. Music availability depends on your account type, region, and usage rights.'],
    ['Is ViralReel affiliated with the original creators or rights holders?', 'No. ViralReel is an independent AI video platform. Its Gangsta\'s Paradise templates are fan-made tools not endorsed by the original creators, Lucasfilm, or the song\'s rights holders.'],
  ],
  zh: [
    ['在 ViralReel 做一条 Gangsta\'s Paradise AI 视频要多少钱？', gpCost.zh],
    ['Gangsta\'s Paradise AI 视频生成器免费吗？', '本模板不提供免费生成——每次渲染都消耗积分，20-30 秒的长片按时长计费，比短视频贵。开始前生成器会显示本次确切费用。积分包和月付套餐见 Pricing 页；生成失败或取消会自动退回积分。'],
    ['生成视频要多久？', '20-30 秒的完整表演比短梗视频渲染更久——视所选模型和系统负载，通常需要几分钟。页面有实时进度条可跟踪。成片时长为你选择的 20 秒或 30 秒。'],
    ['生成失败了怎么办？', '生成失败或取消时，本次消耗的积分会自动退回你的 ViralReel 账户。如果积分没有退回，请携带生成 ID 联系客服。自动退积分不等于现金退款——已购积分包的付款退款按服务条款处理。'],
    ['Gangsta\'s Paradise AI 趋势是什么？', '这是一个 AI 生成的音乐表演梗：两位表演者搭档登台——一位手持麦克风无比认真地 rap《Gangsta\'s Paradise》（Coolio 1995 年 feat. L.V. 的名曲）的 verse，另一位一言不发地走过、在结尾接唱副歌，伴唱阵容集体举起麦克风化身合唱团。最出名的版本设定在满是白甲士兵的白色科幻机库里。'],
    ['在哪里可以做 Gangsta\'s Paradise AI 视频？', '在 ViralReel：https://www.viralreel.app/zh/gangstas-paradise-ai-template 。五场舞台表演任选，上传两张照片——一张说唱者、一张演唱者——浏览器里直接生成。不用装 App，不用找 CapCut 模板，也不用写提示词。ViralReel 是独立的 AI 视频模板站，与原作者无关。'],
    ['怎么用 AI 做 Gangsta\'s Paradise 视频？', '在 ViralReel 选一场舞台表演，上传两张清晰照片（说唱者 + 演唱者），保持 4:3 画幅，选 20 或 30 秒，点生成。完成后预览并下载 MP4，发布时打开 AI 生成标注、从平台曲库添加歌曲。'],
    ['为什么要两张照片？', '这个格式是双人对手戏：说唱者撑起大部分视频、还有多个特写；演唱者走过场后在结尾唱副歌。两位表演者都会被你的照片替换，所以每个位置都要一张不同的人（或角色）的清晰照片。'],
    ['谁当说唱者、谁当演唱者？', '说唱者撑起几乎整条视频——把位置给最想抢麦的那个人，照片要清晰正脸。演唱者憋到副歌才开口——面瘫脸朋友、安静的那位、负责压轴反转的人最合适。演唱者用全身或半身照更好，因为他大多出现在走位的全景里。'],
    ['Gangsta\'s Paradise 视频里的是什么歌？', 'Coolio feat. L.V. 1995 年的《Gangsta\'s Paradise》，改编自 Stevie Wonder 的《Pastime Paradise》，因电影《危险游戏》而广为人知。梗的结构完全照搬歌曲：Coolio 负责 rap，L.V. 唱副歌——所以视频里也是一个人 rap、另一个人等 hook。'],
    ['Gangsta\'s Paradise 趋势从哪来的？', '格式因一支 AI 粉丝向戏仿爆火：两位相似演员站在满是白甲士兵的白色科幻机库里，无比认真地表演 1995 年的 Coolio 名曲，最后士兵们举麦化身合唱团。这是非官方粉丝格式——与 Lucasfilm、电影或歌曲版权方无关——之后这个场景被各种角色、合唱团和设定翻拍。'],
    ['Gangsta\'s Paradise 视频是真的还是 AI 做的？', '是 AI 生成的。这些表演是用 AI 视频工具基于参考片段和照片排出来的——视频里没有人真的录过这首歌。发布你自己的版本时请保留 AI 生成标注。'],
    ['Gangsta\'s Paradise 视频用什么画幅和时长？', '4:3 横版，和参考片段一致——这种复古电视画幅本身就是笑点的一部分。ViralReel 页面默认 4:3。时长选 20 或 30 秒——verse 需要空间铺开、副歌压轴在结尾，剪短了结构就没了。'],
    ['生成的视频里有原曲吗？', '参考表演自带音轨，声音处理取决于所选模型——部分导出保留表演音频，部分单独生成音频。原曲是商业录音，ViralReel 不授权；发布时请从 TikTok、Reels 或 Shorts 的曲库添加歌曲，并遵守各平台音乐规则。'],
    ['可以用朋友或家人的照片吗？', '可以，前提是每个人都同意出镜。一张照片一个人、脸清晰可见。不要上传未成年人、演员、名人或未同意者的照片——包括参考片段里演员相似的人。'],
    ['可以用宠物照片吗？', '宠物和手绘角色可以放在任意位置，但动物完成持麦特写的稳定性较差——发布前请重点检查那些镜头。verse 位置需要嘴型跟上说唱，效果因照片而异。'],
    ['为什么我的视频和预览不一样？', 'AI 用你的照片和模板的参考表演做动作引导——脸、穿搭和细微时序每次渲染都会不同。长片、多切换意味着模型有更多跑偏机会：每个切换点都检查两张脸，发现不像就重跑。'],
    ['下载的视频有水印吗？', '没有。符合条件的导出是无 ViralReel 水印的干净 MP4，可以直接编辑或发布。'],
    ['可以把 Gangsta\'s Paradise 视频发到 TikTok 吗？', '可以。下载 4:3 的 MP4，在 App 里上传，从平台曲库添加歌曲，并打开 AI 生成内容标注——TikTok 要求对「真人表演了实际没做过的事」这类逼真 AI 内容进行披露。音乐可用性取决于账号类型、地区和使用权利。'],
    ['ViralReel 和原作者或版权方有关系吗？', '没有。ViralReel 是独立的 AI 视频平台，Gangsta\'s Paradise 系列模板是粉丝向工具，未获得原作者、Lucasfilm 或歌曲版权方的背书。'],
  ],
} as const;
