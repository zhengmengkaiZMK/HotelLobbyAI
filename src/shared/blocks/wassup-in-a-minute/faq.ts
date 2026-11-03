import {
  failedJobCreditRefundAnswer,
  paidExportWatermarkAnswer,
  type TemplateCostContext,
} from '@/shared/lib/pricing-copy';
import { wassupFifteenSecondCostAnswer } from '@/shared/lib/wassup-cost';

const WASSUP_PRODUCT = { en: 'Wassup in a Minute', zh: 'Wassup in a Minute' };

function site(zh: boolean, path: string) {
  return zh ? `https://www.viralreel.app/zh${path}` : `https://www.viralreel.app${path}`;
}

/** Wassup in a minute FAQ — shared by the page JSON-LD and the landing layout. */
export function getWassupFaq(
  zh: boolean,
  ctx: TemplateCostContext = {}
): [string, string][] {
  const template = site(zh, '/wassup-in-a-minute-ai-template');
  const cost = wassupFifteenSecondCostAnswer(WASSUP_PRODUCT, zh, ctx);
  if (zh) {
    return [
      ['Wassup in a minute 是什么趋势？', `Wassup in a minute 是 2026 年 10 月下旬的白底摇摆：街服角色左右摇摆，成片是 15 秒、9:16。在 ViralReel 用一至四张照片做一条新的：${template} 。Atlanta Lock 只是这种街服观感的粉丝昵称，不是会画出来的 Blue Lock 角色。`],
      ['怎么制作 wassup in a minute？', `制作 wassup in a minute 就四步：打开 ${template} ，上传一至四张照片，在五种造型里选一套，下载 15 秒 9:16 的 MP4。渲染通常要 2–3 分钟。然后在 TikTok、Reels 或 Shorts 里加热梗原声和 AI 标注。公开页面没有空白提示词框。`],
      ['Wassup in a minute 能免费试吗？', '可以先试。新的 ViralReel 账号带有免费积分，够先做一条模板视频。之后的 wassup in a minute 消耗积分。'],
      ['Wassup in a minute 是永远免费吗？', '不是。Wassup in a minute 不是永远免费。起始积分只够先做一条模板视频。之后用 $9.9 起、90 积分的一次性积分包，或 $9.9/月起、每月 90 积分的月付。'],
      ['Wassup in a minute 要多少钱？', cost],
      ['Wassup in a minute 要等多久才好？', '一条 wassup in a minute 通常要 2–3 分钟才渲染完。「in a minute」是歌词，不是等待时间。做好的成片是 15 秒。'],
      ['Wassup in a minute 的片长是多少？', 'ViralReel 上的 wassup in a minute 是 15 秒、9:16。不是 10 秒，不是 8 秒，也不是一分钟。'],
      ['Wassup in a minute 的视频带歌吗？', '不带。Wassup in a minute 的下载文件不含那首歌。请在 TikTok、Reels 或 Shorts 里另加 jersey club 混音。ViralReel 不授权这段音频。'],
      ['做 wassup in a minute 需要提示词、ChatGPT、Kling 或 Seedance 吗？', `不需要。ViralReel 上的 wassup in a minute 不用写提示词，不用把 ChatGPT 的文字贴进来，也不是 Kling 或 Seedance 工程。上传一至四张照片然后生成。说明页：${site(true, '/wassup-in-a-minute-prompt')} 、${site(true, '/wassup-in-a-minute-chatgpt')} 。`],
      ['Wassup in a minute 用 CapCut 还是 ViralReel？', `CapCut 公开的 WASSUP 模板是 App 里的 10 段贴素材。ViralReel 上的 wassup in a minute 是浏览器里用一至四张照片新做的 15 秒 9:16 MP4：${template} 。ViralReel 不托管 CapCut 工程，也不引用 CapCut 使用次数。对照在 ${site(true, '/wassup-in-a-minute-capcut')} 。`],
      ['能不能不打开 CapCut、Kling 或 Seedance 来做 wassup in a minute？', `可以。Wassup in a minute 不用 CapCut、不用 Kling、也不用 Seedance。浏览器模板就是全部：一至四张照片、15 秒、9:16。见 ${site(true, '/wassup-in-a-minute-without-capcut')} 、${site(true, '/wassup-in-a-minute-without-kling')} 、${site(true, '/wassup-in-a-minute-without-seedance')} 。`],
      ['Wassup in a minute 导出有水印吗？', `付费导出的 wassup in a minute 没有 ViralReel 水印。${paidExportWatermarkAnswer(true)} 文件仍然是 15 秒，仍然没有那首歌。`],
      ['Wassup in a minute 要几张照片？能和朋友一起吗？', 'Wassup in a minute 用一至四张照片，每张一个成年人。同意出镜的朋友会在白底上排成一排一起摇摆。不要把合影塞进同一个位置，也不要用未成年人、名人或陌生人的照片。'],
      ['Wassup in a minute 一张照片和四张照片有什么区别？', '一张照片做出一个 wassup in a minute 角色，不会自动补上另外三个人，也不会变成同一个人的四个姿势。四张是上限：四个人，排成一排。'],
      ['宠物能进 wassup in a minute 吗？', '在世宠物的照片可以试一个 wassup in a minute 位置，但模板是按人写的，结果会不稳定。这不是纪念视频，也不给未成年人用。'],
      ['Wassup in a minute 能做出 Blue Lock 角色吗？', '不能。ViralReel 上的 wassup in a minute 不画 Blue Lock 或任何其他影视角色。你得到的是照片里这个人的原创街服角色。'],
      ['Wassup in a minute 里的 Atlanta Lock 是什么？', 'Atlanta Lock 是 wassup in a minute 里那种街服观感的粉丝昵称：羽绒服、链子、阔腿裤。它不是 ViralReel 会去画的 Blue Lock 阵容。'],
      ['Wassup in a minute 有哪些造型？', 'Wassup in a minute 模板是同一种 15 秒摇摆上的五套衣服：甩钱原版、黑羽绒经典、全黑装、球衣版、大块头。'],
      ['发 wassup in a minute 要标 AI 吗？', '要。发布 wassup in a minute 时，在 TikTok、Reels 或 Shorts 打开 AI 标注，并在同一个 App 里加热梗原声。'],
      ['是 wassup been a minute、From Time、wait a minute，还是 wasala？', '歌词是「wassup, been a minute」。「Wassup in a minute」「wassup wait a minute」和「wasala」都是这句 hook 的听法。混音底下的原曲是 Drake 与 Jhené Aiko 的《From Time》。ViralReel 不导出这段音频，也与他们无关。'],
      ['Wassup in a minute 发到 Instagram、YouTube Shorts，还是下 MP4？', `Wassup in a minute 可以发 TikTok、Instagram Reel 或 YouTube Short。文件是 15 秒 9:16 的 MP4，也可以直接下载。在浏览器里用照片在线做：${template} 。每个 App 的原声要另加，MP4 里没有那首歌。`],
      ['Wassup in a minute 生成失败积分会退吗？', `如果 wassup in a minute 生成失败或被取消，积分会退回。${failedJobCreditRefundAnswer(true)}`],
      ['ViralReel 和 wassup in a minute 的作者有关系吗？', '没有。ViralReel 与 wassup in a minute 的发起者、Blue Lock、Drake 或那首歌都没有隶属关系。模板用你的照片做一条新的 15 秒摇摆。'],
    ];
  }
  return [
    ['What is the wassup in a minute trend?', `Wassup in a minute is the late-October 2026 sway: streetwear characters rocking side to side on white, as a 15-second 9:16 clip. On ViralReel you make a new one from one to four photos at ${template}. Atlanta Lock is only the fan nickname for that streetwear look, not a Blue Lock character the template will draw.`],
    ['How do I make a wassup in a minute video?', `Make a wassup in a minute video in four steps: open ${template}, upload one to four photos, pick one of five outfits, and download the 15-second 9:16 MP4. A render usually takes 2–3 minutes. Then add the trend sound and the AI label in TikTok, Reels, or Shorts. The public page has no blank prompt box.`],
    ['Can I try wassup in a minute for free?', 'Yes, you can try it. A new ViralReel account starts with free credits, enough for a first template video. Later wassup in a minute clips spend credits.'],
    ['Is wassup in a minute free forever?', 'No. Wassup in a minute is not free forever. Starter credits cover a first template video. After that, use a one-time pack from $9.9 for 90 credits or a monthly plan from $9.9/month for 90 credits.'],
    ['How much does a wassup in a minute video cost?', cost],
    ['How long until a wassup in a minute video is ready?', 'A wassup in a minute render usually takes 2–3 minutes. “In a minute” is the lyric, not the wait. The finished clip is 15 seconds.'],
    ['How long is a wassup in a minute clip?', 'A wassup in a minute clip on ViralReel is 15 seconds at 9:16. It is not 10 seconds, not 8 seconds, and not one minute long.'],
    ['Does a wassup in a minute video include the song?', 'No. A wassup in a minute download does not include the song. Add the jersey-club remix in TikTok, Reels, or Shorts. ViralReel does not license that audio.'],
    ['Do I need a prompt, ChatGPT, Kling, or Seedance for wassup in a minute?', `No. Wassup in a minute on ViralReel does not need a prompt, a ChatGPT paste, a Kling project, or a Seedance prompt. Upload one to four photos and generate. See ${site(false, '/wassup-in-a-minute-prompt')} and ${site(false, '/wassup-in-a-minute-chatgpt')}.`],
    ['Is wassup in a minute on CapCut or ViralReel?', `CapCut’s public WASSUP template is a 10-clip paste inside the CapCut app. Wassup in a minute on ViralReel is a new 15-second 9:16 MP4 made in the browser from one to four photos: ${template}. ViralReel does not host a CapCut project and does not quote CapCut use counts. The comparison is ${site(false, '/wassup-in-a-minute-capcut')}.`],
    ['Can I make wassup in a minute without CapCut, Kling, or Seedance?', `Yes. You can make wassup in a minute without CapCut, without Kling, and without Seedance. The browser template is the whole job: one to four photos, 15 seconds, 9:16. See ${site(false, '/wassup-in-a-minute-without-capcut')}, ${site(false, '/wassup-in-a-minute-without-kling')}, and ${site(false, '/wassup-in-a-minute-without-seedance')}.`],
    ['Does a wassup in a minute export have a watermark?', `A paid wassup in a minute export has no ViralReel watermark. ${paidExportWatermarkAnswer(false)} The file is still 15 seconds and still has no song.`],
    ['How many photos does wassup in a minute take? Can friends be in it?', 'Wassup in a minute takes one to four photos, one adult per photo. Friends who agreed stand in a row on white and sway together. Do not put a group selfie in one slot, and do not use minors, celebrities, or strangers.'],
    ['What is the difference between one photo and four photos for wassup in a minute?', 'One photo makes one wassup in a minute character. It does not invent the other three people, and it does not turn one person into four poses. Four photos is the cap: four people, one row.'],
    ['Can a pet be in a wassup in a minute video?', 'A photo of a living pet can be tried in a wassup in a minute slot, but the template is written for people, so the result varies. It is not a memorial, and it is not for minors.'],
    ['Can wassup in a minute make a Blue Lock character?', 'No. Wassup in a minute on ViralReel does not draw Blue Lock or any other show character. You get an original streetwear character from the photo.'],
    ['What is Atlanta Lock in wassup in a minute?', 'Atlanta Lock is the fan nickname for the streetwear look inside wassup in a minute: puffer, chains, baggy jeans. It is not a Blue Lock cast that ViralReel will draw.'],
    ['Which outfits does the wassup in a minute template have?', 'The wassup in a minute template has five outfits on the same 15-second sway: Money Fan, Puffer Classic, All Black, Jersey Look, and Heavyweight.'],
    ['Do I label a wassup in a minute post as AI?', 'Yes. When you post a wassup in a minute clip, turn on the AI label on TikTok, Reels, or Shorts, and add the trend sound in that same app.'],
    ['Is it wassup been a minute, From Time, wait a minute, or wasala?', 'The lyric is “wassup, been a minute.” “Wassup in a minute,” “wassup wait a minute,” and “wasala” are mishearings of that same hook. The record under the remix is Drake’s “From Time” with Jhené Aiko. ViralReel does not export that audio and is not affiliated with them.'],
    ['Do I post wassup in a minute on Instagram, YouTube Shorts, or as an MP4?', `Post wassup in a minute as a TikTok, an Instagram Reel, or a YouTube Short. The file is a 15-second 9:16 MP4 you can also download. Make it online in the browser from a photo: ${template}. Add each app’s sound; the MP4 does not include the song.`],
    ['What if a wassup in a minute generation fails?', `If a wassup in a minute generation fails or is canceled, those credits come back. ${failedJobCreditRefundAnswer(false)}`],
    ['Is ViralReel affiliated with the wassup in a minute trend?', 'No. ViralReel is not affiliated with the wassup in a minute originators, Blue Lock, Drake, or the song. The template makes a new 15-second sway from your photos.'],
  ];
}
