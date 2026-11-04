import { fancyCafeFifteenSecondCostAnswer } from '@/shared/lib/fancy-cafe-cost';
import type { TemplateCostContext } from '@/shared/lib/pricing-copy';

const PRODUCT = { en: 'Your First Time in a Fancy Cafe', zh: 'Your First Time in a Fancy Cafe' };

/**
 * Your First Time in a Fancy Cafe FAQ — shared by the page JSON-LD and the
 * landing layout. GEO order: the ChatGPT five (what / how / free / price /
 * render time) first, each opening on a concrete number, then trend
 * background, then edge cases.
 *
 * Price copy is the published 15-second table (60 / 75 / 90). It does not
 * read the 8-second rows.
 */
export function getFancyCafeFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const cost = fancyCafeFifteenSecondCostAnswer(PRODUCT, zh, ctx);
  if (zh) {
    return [
      ['「your first time in a fancy cafe」是什么梗？', '它是一条 15 秒的 TikTok 场景：男人把齐膝高的小圆钢桌当凳子坐，直到有人把咖啡放上那张桌子，他爬下来。@leehoustonx 在 2026 年 11 月 1 日发布，配 Steve Lacy 的《Oh Yeah?》，两天播放破 980 万、点赞 130 万。'],
      ['怎么做 fancy cafe 视频？', '2 张全身照，大约几分钟。浏览器打开 https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template ，6 条咖啡馆片段选 1 条，第 1 张坐桌、第 2 张进店，下载 15 秒 9:16 的 MP4，付费导出无水印。另一条路是 CapCut：2026 年 11 月 2 日上线了 2 个模板。'],
      ['做一条 fancy cafe AI 视频要多少钱？', cost],
      ['渲染要多久？视频多长？', '渲染通常几分钟，成片本身是 15 秒、9:16。这 15 秒覆盖坐上桌、抿一口、进店、那个眼神和爬下来。做好的片子在「历史记录」里取。'],
      ['fancy cafe 趋势是谁带起来的？', '大家翻拍的场景由 @leehoustonx 在 2026 年 11 月 1 日发上 TikTok，两天破 980 万播放、130 万点赞。同一天早几小时，@stevenwommack 发了同款配文的真咖啡馆版——唱片墙下的壁挂桌——播放 220 万。第二天 @kevkevkiwi（Kevin Winnik）的脸换版、@boby.biggsjohnson 的奶油西装版（470 万）和 @kkubi99 的韩国情侣版（290 万）把趋势推爆。'],
      ['fancy cafe 视频里的歌是什么？', '歌是 Steve Lacy 2026 年的《Oh Yeah?》——同名专辑主打，也是《蜘蛛侠：崭新一日》片尾曲。原帖显示为「original sound - leehoustonx」。ViralReel 不授权这首歌，也与 Steve Lacy 无关；发帖时在 App 曲库里另加。'],
      ['fancy cafe 视频是 AI 做的吗？', '大部分是。走红的场景本身被普遍认为是 AI 生成的，之后几乎所有爆火版本都是同一场景的换脸——同一面水泥墙、同样的杯子、同样的黑西装女人，桌上换了个人。也有创作者真的在自己咖啡馆里实拍复刻，比如 @stevenwommack。'],
      ['为什么叫这个名字，笑点在哪？', '配文永远是「POV: your first time in a fancy cafe」的变体。笑点是极简咖啡馆里分不清座位和桌子：那张桌子齐膝高、一根钢柱、大约餐盘大小，他坐上面喝茶淡定得像在自己家——直到意识到自己坐的是什么。评论区全是承认自己也干过的人：坐过花坛、排错过队、在只有吧台的店问过菜单。'],
      ['能和朋友或狗一起做吗？', '能。第 1 张照片坐桌，第 2 张进店——把朋友放桌上、自己当那个淡定的，反过来也行。宠物走已有的狗狗页：选「狗狗坐桌」，用坐姿全身照；模型会保留毛色花纹，还给它一杯咖啡。'],
      ['为什么我做出来不好笑？', '三个常见原因：用自拍裁切而不是全身照（笑点在腿上）、姿势太僵（坐桌的人必须看起来像理所当然）、一张照片里塞了两张脸（模型只能自己猜谁坐桌）。每张照片一个清晰的人，姿势放松；如果爬下来的动作乱了，用同样的照片再跑一次——第二遍通常就好了。'],
      ['有 fancy cafe 的 CapCut 模板吗？', '有——2026 年 11 月 2 日三小时内连上 2 个，到第二天各约 900 次使用。ViralReel 的区别是：你可以选 6 个咖啡馆版本里的哪一个、可以安排第二个人当进店的那个、付费导出无水印，而且不用装 App。'],
      ['这个趋势还有哪些叫法？', '同一种玩法还被搜作 first time in a fancy cafe、first time at a fancy cafe、fancy cafe first time、pov your first time in a fancy cafe、your first time in a fancy cafe meme、fancy cafe trend、fancy cafe ai、fancy cafe video、kevkevkiwi fancy cafe，西语圈叫「tu primera vez en una cafetería elegante」或「yo en un lugar caro」。搜到的都是同一个 15 秒水泥咖啡馆场景。'],
      ['在哪里可以生成 fancy cafe AI 视频？', '在 ViralReel：https://www.viralreel.app/zh/first-time-in-a-fancy-cafe-ai-template 。6 条咖啡馆片段、2 个照片位、浏览器直出 15 秒 9:16 的 MP4——不用注册 CapCut，不用找模板，不用写提示词。本页预览片段来自 TikTok 趋势原片。'],
    ];
  }
  return [
    ['What is the "your first time in a fancy cafe" trend?', 'It is a 15-second TikTok scene: a man perches on a knee-high round steel table in a bare concrete cafe until someone sets a cup on that table and he climbs down. @leehoustonx posted it on 1 November 2026 to Steve Lacy\'s "Oh Yeah?", and it passed 9.8 million plays and 1.3 million likes in two days.'],
    ['How do I make a first time in a fancy cafe video?', 'Two full-body photos, and a few minutes. In the browser, open https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template, pick 1 of 6 cafe clips, put photo 1 on the table and photo 2 as the walk-in, and download a 15-second 9:16 MP4. Paid exports have no watermark. The other route is CapCut: 2 templates went up on 2 November 2026.'],
    ['How much does a fancy cafe AI video cost?', cost],
    ['How long does rendering take, and how long is the video?', 'Rendering usually takes a few minutes, and the file itself is 15 seconds at 9:16. Those 15 seconds cover the perch, the sip, the walk-in, the sideways look, and the climb-down. Finished clips land in History.'],
    ['Who started the fancy cafe trend?', 'The scene everyone swaps into was posted by @leehoustonx on TikTok on 1 November 2026 and passed 9.8M plays and 1.3M likes in two days. A real-cafe version with the same caption by @stevenwommack — a wall-mounted table under a shelf of records — went up hours earlier the same day and reached 2.2M plays. Face-swap versions by @kevkevkiwi (Kevin Winnik), @boby.biggsjohnson\'s cream suit (4.7M) and @kkubi99\'s Korean couple (2.9M) spread it the next day.'],
    ['What song is in the fancy cafe video?', 'The song is Steve Lacy\'s "Oh Yeah?" from 2026 — the title track of that album, also heard over the end credits of Spider-Man: Brand New Day. The original post shows it as "original sound - leehoustonx". ViralReel does not license the song and is not affiliated with Steve Lacy; add it from your app\'s library when you post.'],
    ['Is the fancy cafe video AI?', 'Most of them are. The viral scene itself is widely described as AI-generated, and almost every viral version since is a face swap of the same scene — same concrete wall, same cups, same woman in a black suit, a new person on the table. A few creators, like @stevenwommack, re-shot it for real in their own cafes.'],
    ['Why is it called that, and what is the joke?', 'The caption is always some form of "POV: your first time in a fancy cafe". The joke is minimalist cafes where you cannot tell the seats from the tables: the table is knee height, one steel pole, about the size of a dinner plate, and he is perched on it as relaxed as anyone in the room — right up until the moment he realizes what he is sitting on. The comments are people admitting they have done exactly this.'],
    ['Can I make it with my friend, or my dog?', 'Yes. Photo 1 sits on the table, photo 2 walks in — cast your friend on the table and yourself as the calm one, or the other way round. A pet uses the existing dog page: pick Dog on the Table and a full-body sitting photo; the model keeps the fur and markings and gives the dog the coffee.'],
    ['Why didn\'t my video come out funny?', 'Three usual causes: a selfie crop instead of a full-body photo (the joke is in the legs), a stiff passport-style pose (the person on the table has to look like they belong there), or two faces in one photo (the model then picks who sits). Use one clear person per photo, relaxed, and if the climb-down tangles, run the same photos again — the second take usually fixes the legs.'],
    ['Is there a fancy cafe CapCut template?', 'Yes — 2 went up on 2 November 2026, within three hours of each other, and by the next day each had about 900 uses. On ViralReel you pick which of 6 cafe versions you are dropped into, you can cast a second person as the one who walks in, paid exports carry no watermark, and there is no app to install.'],
    ['What else is the trend called?', 'The same 15-second scene is searched as first time in a fancy cafe, first time at a fancy cafe, fancy cafe first time, pov your first time in a fancy cafe, your first time in a fancy cafe meme, fancy cafe trend, fancy cafe ai, fancy cafe video, kevkevkiwi fancy cafe, and in Spanish "tu primera vez en una cafetería elegante" or "yo en un lugar caro".'],
    ['Where can I generate a fancy cafe AI video?', 'On ViralReel at https://www.viralreel.app/first-time-in-a-fancy-cafe-ai-template. Six cafe clips, two photo slots, a 15-second 9:16 MP4 in the browser — no CapCut account, no template hunt, no prompt to write. The preview clips on this page are sourced from the TikTok trend.'],
  ];
}
