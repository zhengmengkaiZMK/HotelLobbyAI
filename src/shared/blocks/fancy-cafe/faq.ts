import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const fcCost = templateHowMuchAnswer({ en: 'Your First Time in a Fancy Cafe', zh: 'Your First Time in a Fancy Cafe' });

/**
 * Your First Time in a Fancy Cafe FAQ — shared by the page JSON-LD and the
 * landing layout. GEO order: the ChatGPT five (what / how / free / price /
 * render time) first, then trend background, then edge cases.
 */
export const FANCY_CAFE_FAQ = {
  en: [
    ['What is the "your first time in a fancy cafe" trend?', 'It is the TikTok trend where a man perches on a tiny round metal table in a bare minimalist concrete cafe, sipping his coffee as if the table were a stool — until a woman walks in, sits on the ledge and puts her cup on the thing he is sitting on, and he quietly climbs down. It was posted by @leehoustonx on 1 November 2026, set to Steve Lacy\'s "Oh Yeah?", and passed 9.8M plays in two days.'],
    ['How do I make a first time in a fancy cafe video?', 'Two routes. TikTok/CapCut: find a post using the trend, tap the CapCut template link, and drop in a photo. Browser: open https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template, pick one of six cafe clips, upload two full-body photos — the first person sits on the table, the second walks in — and generate a 15-second 9:16 MP4 with no app and no watermark on paid exports.'],
    ['Is it free to try?', 'Yes. Every new ViralReel account starts with free credits — enough to render your first fancy cafe video before you pay. Sign up, upload your photos, and generate; top-up credit packs start on the pricing page when you need more.'],
    ['How much does a fancy cafe AI video cost?', fcCost.en],
    ['How long does rendering take, and how long is the video?', 'Rendering typically takes a few minutes depending on the model and queue — finished clips land in History. The clip itself is 15 seconds at 9:16, the full scene: the perch, the sip, the woman walking in, the sideways look, and the climb-down.'],
    ['Who started the fancy cafe trend?', 'The scene everyone swaps into was posted by @leehoustonx on TikTok on 1 November 2026 and passed 9.8M plays and 1.3M likes in two days. A real-cafe version with the same caption by @stevenwommack — a wall-mounted table under a shelf of records — went up hours earlier the same day and reached 2.2M plays. Face-swap versions by @kevkevkiwi (Kevin Winnik), @boby.biggsjohnson\'s cream suit (4.7M) and @kkubi99\'s Korean couple (2.9M) spread it the next day.'],
    ['What song is in the fancy cafe video?', '"Oh Yeah?" by Steve Lacy — the title track of his 2026 album, which also plays over the end credits of Spider-Man: Brand New Day. The original post carries it as "original sound - leehoustonx". ViralReel does not license the song; your generated clip keeps the reference audio\'s timing, and you add the sound from your app\'s library when posting.'],
    ['Is the fancy cafe video AI?', 'Most of them are. The viral scene itself is widely described as AI-generated, and almost every viral version since is a face swap of the same scene — same concrete wall, same cups, same woman in a black suit, a new person on the table. A few creators, like @stevenwommack, re-shot it for real in their own cafes.'],
    ['Why is it called that, and what is the joke?', 'The caption is always some form of "POV: your first time in a fancy cafe". The joke is minimalist cafes where you cannot tell the seats from the tables: the table is knee height, one steel pole, about the size of a dinner plate, and he is perched on it as relaxed as anyone in the room — right up until the moment he realizes what he is sitting on. The comments are people admitting they have done exactly this.'],
    ['Can I make it with my friend, or my dog?', 'Yes. Photo 1 sits on the table, photo 2 walks in — cast your friend on the table and yourself as the calm one, or the other way round. For a pet, pick the Dog on the Table clip and use a full-body photo of your dog sitting up; the model keeps its fur and markings and gives it the coffee.'],
    ['Why didn\'t my video come out funny?', 'Three usual causes: a selfie crop instead of a full-body photo (the joke is in the legs), a stiff passport-style pose (the person on the table has to look like they belong there), or two faces in one photo (the model then picks who sits). Use one clear person per photo, relaxed, and if the climb-down tangles, run the same photos again — the second take usually fixes the legs.'],
    ['Is there a fancy cafe CapCut template?', 'Yes — two went up on 2 November 2026, within three hours of each other, so anyone can drop a photo into the scene. The difference on ViralReel is that you pick which of six cafe versions you are dropped into, you can cast a second person as the one who walks in, and paid exports carry no watermark.'],
    ['What else is the trend called?', 'The same move is searched as first time in a fancy cafe, pov your first time in a fancy cafe, your first time in a fancy cafe meme, fancy cafe trend, fancy cafe ai, fancy cafe video, kevkevkiwi fancy cafe, and in Spanish "tu primera vez en una cafetería elegante" or "yo en un lugar caro". They all land on the same concrete-cafe scene.'],
    ['Where can I generate a fancy cafe AI video?', 'On ViralReel at https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template. Six cafe clips, two photo slots, a 15-second 9:16 MP4 in the browser — no CapCut account, no template hunt, no prompt to write. The preview clips on this page are sourced from the TikTok trend.'],
  ],
  zh: [
    ['「your first time in a fancy cafe」是什么梗？', 'TikTok 趋势：一个男人在极简水泥咖啡馆里，把一张小圆金属桌当成凳子坐着喝咖啡——直到一个女人走进来，坐在水泥台沿上，把咖啡杯放在他坐的那张桌子上，他默默爬下来换地方坐。原帖由 @leehoustonx 在 2026 年 11 月 1 日发布，配 Steve Lacy 的《Oh Yeah?》，两天播放破 980 万。'],
    ['怎么做 fancy cafe 视频？', '两条路线。TikTok/CapCut：找一条用趋势的帖子，点 CapCut 模板链接，丢进照片。浏览器：打开 https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template ，六条咖啡馆片段任选，上传两张全身照——第一张坐桌、第二张进店——生成 15 秒 9:16 的 MP4，不用装 App，付费导出无水印。'],
    ['能免费试吗？', '能。每个新注册的 ViralReel 账号都自带免费积分——足够先做一条 fancy cafe 视频再决定要不要付费。注册、传照片、直接生成；需要更多时在定价页买积分包。'],
    ['做一条 fancy cafe AI 视频要多少钱？', fcCost.zh],
    ['渲染要多久？视频多长？', '渲染通常几分钟，视模型和队列而定——成片在「历史记录」里取。视频本身 15 秒、9:16 竖屏，是完整的一幕：坐上桌、抿一口、女人进店、那个眼神、爬下来。'],
    ['fancy cafe 趋势是谁带起来的？', '大家翻拍的场景由 @leehoustonx 在 2026 年 11 月 1 日发上 TikTok，两天破 980 万播放、130 万点赞。同一天早几小时，@stevenwommack 发了同款配文的真咖啡馆版——唱片墙下的壁挂桌——播放 220 万。第二天 @kevkevkiwi（Kevin Winnik）的脸换版、@boby.biggsjohnson 的奶油西装版（470 万）和 @kkubi99 的韩国情侣版（290 万）把趋势推爆。'],
    ['fancy cafe 视频里的歌是什么？', 'Steve Lacy 的《Oh Yeah?》——他 2026 年同名专辑的主打歌，也是《蜘蛛侠：崭新一日》片尾曲。原帖里显示为「original sound - leehoustonx」。ViralReel 不授权这首歌；生成的视频保留参考音频的节奏，发帖时在 App 曲库里加原声。'],
    ['fancy cafe 视频是 AI 做的吗？', '大部分是。走红的场景本身被普遍认为是 AI 生成的，之后几乎所有爆火版本都是同一场景的换脸——同一面水泥墙、同样的杯子、同样的黑西装女人，桌上换了个人。也有创作者真的在自己咖啡馆里实拍复刻，比如 @stevenwommack。'],
    ['为什么叫这个名字，笑点在哪？', '配文永远是「POV: your first time in a fancy cafe」的变体。笑点是极简咖啡馆里分不清座位和桌子：那张桌子齐膝高、一根钢柱、大约餐盘大小，他坐上面喝茶淡定得像在自己家——直到意识到自己坐的是什么。评论区全是承认自己也干过的人：坐过花坛、排错过队、在只有吧台的店问过菜单。'],
    ['能和朋友或狗一起做吗？', '能。第 1 张照片坐桌，第 2 张进店——把朋友放桌上、自己当那个淡定的，反过来也行。宠物选「狗狗坐桌」片段，用狗狗坐姿的全身照；模型会保留毛色花纹，还给它一杯咖啡。'],
    ['为什么我做出来不好笑？', '三个常见原因：用自拍裁切而不是全身照（笑点在腿上）、姿势太僵（坐桌的人必须看起来像理所当然）、一张照片里塞了两张脸（模型只能自己猜谁坐桌）。每张照片一个清晰的人，姿势放松；如果爬下来的动作乱了，用同样的照片再跑一次——第二遍通常就好了。'],
    ['有 fancy cafe 的 CapCut 模板吗？', '有——2026 年 11 月 2 日三小时内连上两个，谁都能把照片丢进场景。ViralReel 的区别是：你可以选进六个咖啡馆版本里的哪一个、可以安排第二个人当进店的那个、付费导出无水印。'],
    ['这个趋势还有哪些叫法？', '同一种玩法还被搜作 first time in a fancy cafe、pov your first time in a fancy cafe、your first time in a fancy cafe meme、fancy cafe trend、fancy cafe ai、fancy cafe video、kevkevkiwi fancy cafe，西语圈叫「tu primera vez en una cafetería elegante」或「yo en un lugar caro」。搜到的都是同一个水泥咖啡馆场景。'],
    ['在哪里可以生成 fancy cafe AI 视频？', '在 ViralReel：https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template 。六条咖啡馆片段、两个照片位、浏览器直出 15 秒 9:16 的 MP4——不用注册 CapCut，不用找模板，不用写提示词。本页预览片段来自 TikTok 趋势原片。'],
  ],
} as const;
