import type { SashaLaCatrinaLongTailEntry } from './long-tails';
import { SASHA_LA_CATRINA_HOW_TO_STEPS } from './steps';

/**
 * Intent long-tails for the Sasha La Catrina family — the "Catrina ai"
 * extension keyword and the questions around it. Same entry shape as the
 * core long-tails; served by the same dispatcher.
 */

const makeVideoSteps = 'shared' as const;

const EN_TEMPLATE = 'https://www.viralreel.app/sasha-la-catrina-ai-template';
const ZH_TEMPLATE = 'https://www.viralreel.app/zh/sasha-la-catrina-ai-template';

export const SASHA_LA_CATRINA_INTENT_TAILS: readonly SashaLaCatrinaLongTailEntry[] = [
  {
    keyword: 'catrina ai',
    slug: 'catrina-ai',
    title: {
      en: 'Catrina AI – Turn One Photo Into the Book of Life Catrina | ViralReel',
      zh: 'Catrina AI——一张照片变成《生命之书》卡特里娜 | ViralReel',
    },
    description: {
      en: 'Catrina AI is the one-photo reveal that dresses you as La Catrina: sugar-skull paint, embroidered lace gown, marigold crown, candle light. Seven samples, 5-15 seconds, sound kept — make yours on ViralReel.',
      zh: 'Catrina AI 是单照片变身：糖骷髅妆、刺绣蕾丝裙、万寿菊花冠、烛光。七个样本、5-15 秒、保留原声——在 ViralReel 做你的版本。',
    },
    h1: { en: 'Catrina AI', zh: 'Catrina AI' },
    lead: {
      en: 'Catrina AI is the short name the wave goes by: AI that reads one photo and returns the person as La Catrina of The Book of Life — the reveal that took over TikTok in the week before Día de Muertos 2026.',
      zh: 'Catrina AI 是这波浪潮的简称：AI 读一张照片，把人变成《生命之书》里的 La Catrina——2026 年亡灵节前一周席卷 TikTok 的那个变身。',
    },
    guideTitle: {
      en: 'What Catrina AI is, and how to run it',
      zh: 'Catrina AI 是什么，以及怎么玩',
    },
    body: {
      en: [
        'Catrina AI is the one-photo version of the fairytale Catrina look. The look itself is La Catrina dressed for a storybook — sugar-skull paint in white and gold around the eyes and along the jaw, an embroidered lace gown with marigolds worked into the bodice, a crown of orange and purple flowers or a wide lace hat, candles and cempasúchil petals in the air. The AI reads a photo, keeps the face under the paint, and generates the gown, the candles and the petals around it, in the clip\'s own length and with its own sound.',
        `You run it at ${EN_TEMPLATE}. Pick a reveal from the sample list — the flower toss, the ofrenda hands-over-face, the Catrín, or the pet versions — upload one clear front-facing photo (for a pet, its whole head and markings), and generate. Samples run 5, 10 or 15 seconds, vertical 9:16.`,
        'The trend\'s shape came from Đan Thy\'s flower toss (40.6M plays on 20 October 2026) and the CapCut template named Sasha La Catrina that made the reveal one photo long. Post with the AI-generated label on, and ride the peak on November 1-2.',
      ],
      zh: [
        'Catrina AI 是童话卡特里娜造型的单照片版。造型本身是为故事书而装扮的 La Catrina——眼周和下颌的白金糖骷髅妆、织入万寿菊的刺绣蕾丝裙、橙紫花冠或宽檐蕾丝帽，空气中飘着烛光和万寿菊花瓣。AI 读取照片、把脸保留在妆面之下，围绕生成裙装、蜡烛和花瓣，时长和声音都随片段。',
        `在 ${ZH_TEMPLATE} 玩。从样本列表选一个变身——撒花、祭坛掩面、男版 Catrín 或宠物版——上传一张清晰正面照（宠物用头部和花纹清楚的），生成。样本时长 5、10 或 15 秒，9:16 竖屏。`,
        '趋势的定型来自 Đan Thy 的撒花变身（2026 年 10 月 20 日，4060 万播放）和让它一张照片就能玩的 CapCut 模板 Sasha La Catrina。发布时打开 AI 标注，趁 11 月 1-2 日的峰值上车。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is Catrina AI the same as the Catrina filter?', zh: 'Catrina AI 和 Catrina 滤镜是一回事吗？' },
        a: {
          en: 'People use both names for the same effect. On TikTok and CapCut it travels as the Sasha La Catrina template, and viewers call it the Catrina AI filter or effect when they see it in the feed. ViralReel runs it as a one-photo generation with seven reveal samples.',
          zh: '大家用两个名字说同一件事。在 TikTok 和 CapCut 上它以 Sasha La Catrina 模板的形式传播，观众刷到时叫它 Catrina AI 滤镜或特效。ViralReel 把它做成单照片生成，带七个变身样本。',
        },
      },
      {
        q: { en: 'How many photos does it need?', zh: '需要几张照片？' },
        a: {
          en: 'One. Most reveals have a single person in them. The pet versions take one photo of the pet; a pair version would take a second photo as Image 2.',
          zh: '一张。大多数变身里只有一个人。宠物版用一张宠物照片；双人版才会用第二张照片作为照片 2。',
        },
      },
    ],
  },
  {
    keyword: 'catrina ai filter',
    slug: 'catrina-ai-filter',
    title: {
      en: 'Catrina AI Filter – What It Is and How to Get the Look | ViralReel',
      zh: 'Catrina AI 滤镜——是什么、怎么玩出同款 | ViralReel',
    },
    description: {
      en: 'The Catrina AI filter explained: the TikTok effect everyone means by it, where it actually lives (the Sasha La Catrina template), and how to get the same reveal from one photo on ViralReel.',
      zh: 'Catrina AI 滤镜详解：大家说的那个 TikTok 特效是什么、它真正藏在哪（Sasha La Catrina 模板）、以及如何在 ViralReel 用一张照片玩出同款变身。',
    },
    h1: { en: 'Catrina AI filter', zh: 'Catrina AI 滤镜' },
    lead: {
      en: 'People searching "Catrina AI filter" want the reveal they saw in the feed. Here is where that effect actually lives, and the browser way to run it.',
      zh: '搜「Catrina AI 滤镜」的人想要的是信息流里看到的那个变身。这里讲清它到底在哪，以及浏览器里怎么玩。',
    },
    guideTitle: {
      en: 'The filter, the template, and the generator',
      zh: '滤镜、模板与生成器',
    },
    body: {
      en: [
        'There is no standalone "Catrina AI filter" button in TikTok\'s effect tray — what viewers call the filter is the reveal clip traveling as the CapCut template named Sasha La Catrina. You tap "Use template", add one photo, and CapCut cuts your face into the fixed reveal. It works, but the face is pasted, not rebuilt.',
        `ViralReel's generator is the rebuilt version: at ${EN_TEMPLATE} you pick one of seven reveal samples, upload one photo, and the model renders the whole person — face, hair and build stay yours under the sugar-skull paint, the gown and the candle light are generated around you, and the sample's length and sound are kept.`,
        'Either way, label the post as AI-generated when the platform asks. The look only reads honestly when people know the paint was drawn, not painted.',
      ],
      zh: [
        'TikTok 的特效栏里并没有一个独立的「Catrina AI 滤镜」按钮——观众说的滤镜，是那条以 CapCut 模板「Sasha La Catrina」之名传播的变身片段。点「使用模板」、加一张照片，CapCut 把你的脸贴进固定变身。能玩，但脸是贴上去的，不是重建的。',
        `ViralReel 的生成器是重建版：在 ${ZH_TEMPLATE} 选七个变身样本之一，上传一张照片，模型重新生成整个人——糖骷髅妆之下脸、发型、身材都是你的，裙装和烛光围绕你生成，样本的时长和原声保留。`,
        '无论哪种玩法，平台要求时都请打开 AI 生成标注。只有当大家知道妆是「画的」而不是「真画的」，这个造型才成立。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is there a real Catrina filter in TikTok?', zh: 'TikTok 里有真的 Catrina 滤镜吗？' },
        a: {
          en: 'There are Día de Muertos-themed effects, but the viral reveal travels as the Sasha La Catrina CapCut template, not an effect. That is why every post looks like the same clip with a different face.',
          zh: '有亡灵节主题特效，但爆火的那条变身是以 CapCut 模板「Sasha La Catrina」传播的，不是特效。这就是为什么每条帖子看起来都是同一条片段换了张脸。',
        },
      },
      {
        q: { en: 'Does the filter keep my face?', zh: '滤镜会保留我的脸吗？' },
        a: {
          en: 'CapCut pastes your face onto the clip\'s face. ViralReel keeps your actual face under the paint — face shape, skin tone, eye colour and hair colour come from your photo and stay yours.',
          zh: 'CapCut 是把你的脸贴到片段里的脸上。ViralReel 把你真实的脸保留在妆面之下——脸型、肤色、瞳色、发色都来自你的照片，都还是你的。',
        },
      },
    ],
  },
  {
    keyword: 'sasha la catrina song',
    slug: 'sasha-la-catrina-song',
    title: {
      en: 'The Sasha La Catrina Song – "Adiós Señora Bonita" and The Book of Life | ViralReel',
      zh: 'Sasha La Catrina 的原声——《Adiós Señora Bonita》与《生命之书》 | ViralReel',
    },
    description: {
      en: 'The sound behind the Sasha La Catrina trend: "Adiós señora bonita" from The Book of Life, the "adios SHASHA" video that put it on the reveal, and how to add it when you post.',
      zh: 'Sasha La Catrina 趋势的原声：《生命之书》的《Adiós señora bonita》、把这句词配上变身的「adios SHASHA」视频，以及发布时怎么加。',
    },
    h1: { en: 'Sasha La Catrina song', zh: 'Sasha La Catrina 的原声' },
    lead: {
      en: 'One line of Spanish, one animated film, and 70 million plays — the sound is half the meme.',
      zh: '一句西语、一部动画、七千万播放——声音是这个梗的另一半。',
    },
    guideTitle: {
      en: 'The sound, the line, and the film',
      zh: '原声、台词与电影',
    },
    body: {
      en: [
        'The trend rides "Adiós señora bonita" ("goodbye, pretty lady"), the line associated with La Catrina\'s farewell scene in the 2014 animated film The Book of Life — the same film that gave the trend its whole fairytale look: the glowing gown, the flowered hat, the candle-lit land of the remembered. In the trend\'s captions the line runs "adiós Sasha, adiós señora bonita", which is where her nickname comes from.',
        'The sound and the reveal fused on 25 October 2026, when Đan Thy\'s second video — captioned "adios SHASHA" — put the line on her flower-toss reveal and passed 31M plays. Every copy since keeps the sound on, which is why the sample clips on ViralReel render with their original audio.',
        `If your download comes back silent, add the track from the TikTok sound library when you post — that is also how the algorithm files your clip under #fairytalecatrina. ViralReel does not license the song. Make the video at ${EN_TEMPLATE}.`,
      ],
      zh: [
        '趋势骑的是《Adiós señora bonita》（「再见，美丽的女士」）——2014 年动画电影《生命之书》里与 La Catrina 告别场景相连的台词，也是给这条趋势提供整个童话造型的同一部电影：发光的裙装、花冠、烛光中的回忆之地。趋势文案里这句词写作「adiós Sasha, adiós señora bonita」——她的昵称就从这来。',
        '声音和变身在 2026 年 10 月 25 日合体：Đan Thy 的第二条视频——文案「adios SHASHA」——把这句词配进撒花变身，破 3100 万播放。之后的二创全都保留原声，这也是 ViralReel 的样本片段带着原声渲染的原因。',
        `如果下载的成片没声音，发布时从 TikTok 曲库添加——这也是算法把你的视频归进 #fairytalecatrina 的方式。ViralReel 不授权这首歌。制作页： ${ZH_TEMPLATE} 。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'What song is in the Catrina AI videos?', zh: 'Catrina AI 视频里的是什么歌？' },
        a: {
          en: 'The line "Adiós señora bonita" from The Book of Life (El libro de la vida, 2014). The trend also calls it the "adios Sasha" sound, after Đan Thy\'s second video.',
          zh: '《生命之书》（El libro de la vida，2014）里的台词《Adiós señora bonita》。因为 Đan Thy 的第二条视频，大家也叫它「adios Sasha」原声。',
        },
      },
      {
        q: { en: 'Is the sound in my download?', zh: '下载的成片里有声音吗？' },
        a: {
          en: 'The render keeps the sample\'s original audio. If your file is silent, add "Adiós señora bonita" from the TikTok sound library when posting.',
          zh: '渲染保留样本原声。如果文件没声音，发布时从 TikTok 曲库添加《Adiós señora bonita》。',
        },
      },
    ],
  },
  {
    keyword: 'la catrina history',
    slug: 'la-catrina-history',
    title: {
      en: 'La Catrina History – From Posada\'s 1910 Etching to the AI Reveal | ViralReel',
      zh: 'La Catrina 的历史——从 Posada 1910 年版画到 AI 变身 | ViralReel',
    },
    description: {
      en: 'The hundred-year history behind the Sasha La Catrina trend: Posada\'s calavera garbancera (~1910), Diego Rivera\'s 1947 mural that named her, Día de Muertos, The Book of Life, and the 2026 AI reveal.',
      zh: 'Sasha La Catrina 趋势背后的一百年：Posada 的 calavera garbancera（约 1910）、Diego Rivera 1947 年为她命名的壁画、亡灵节、《生命之书》，以及 2026 年的 AI 变身。',
    },
    h1: { en: 'La Catrina history', zh: 'La Catrina 的历史' },
    lead: {
      en: 'The skeleton in the trend is older than the movies, older than television — she started as a political joke in etching ink.',
      zh: '趋势里这位骷髅女士比电影老、比电视老——她最初是版画墨水里的一句政治讽刺。',
    },
    guideTitle: {
      en: 'A hundred years of the elegant skeleton',
      zh: '优雅骷髅的一百年',
    },
    body: {
      en: [
        'Around 1910, the Mexican printmaker José Guadalupe Posada etched a skeleton in a wide plumed European hat and called her la calavera garbancera — a jab at Mexicans who dressed European and pretended their indigenous roots away. The hat was the tell: garbancera referred to people who sold chickpeas and aped French manners.',
        'In 1947, Diego Rivera painted her into his mural Dream of a Sunday Afternoon in Alameda Park, gave her the full elegant gown — and the name La Catrina, Mexican slang for a well-dressed woman. From there she became the elegant face of Día de Muertos, the Day of the Dead celebrated on November 1-2: sugar-skull face paint, marigolds (cempasúchil), candles, ofrendas with photos of the departed.',
        'The fairytale layer — the glowing gown, the flowered hat, the candle-lit land of the remembered — comes from the 2014 animated film The Book of Life, which is exactly the look the 2026 AI trend reproduces from one photo. The paint is a hundred years older than the film; the film is what the feed fell in love with.',
      ],
      zh: [
        '约 1910 年，墨西哥版画家 José Guadalupe Posada 画了一个戴宽檐欧式羽帽的骷髅，取名 la calavera garbancera——讽刺那些穿欧式服装、装作没有原住民根基的墨西哥人。那顶帽子就是罪证：garbancera 指卖鹰嘴豆、盲目模仿法国做派的人。',
        '1947 年，Diego Rivera 把她画进壁画《阿拉梅达公园周日下午的梦》，给她穿上完整的优雅长裙——并留下名字 La Catrina（墨西哥俚语里的「穿着体面的女士」）。从此她成为 11 月 1-2 日亡灵节的优雅面孔：糖骷髅面妆、万寿菊（cempasúchil）、蜡烛、摆着逝者照片的祭坛（ofrenda）。',
        '童话化的那一段——发光的裙装、花冠、烛光中的回忆之地——来自 2014 年动画电影《生命之书》，而这正是 2026 年 AI 趋势用一张照片复刻的造型。妆比电影老一百岁；让信息流沦陷的，是电影。',
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Who originally created La Catrina?', zh: 'La Catrina 最早是谁创造的？' },
        a: {
          en: 'José Guadalupe Posada, around 1910, as la calavera garbancera. Diego Rivera named her La Catrina in his 1947 mural. Neither could have imagined the one-photo AI version — but the plumed hat survived a century to end up on TikTok.',
          zh: 'José Guadalupe Posada，约 1910 年，名为 la calavera garbancera。Diego Rivera 在 1947 年的壁画里为她命名 La Catrina。两位都想不到单照片 AI 版——但这顶羽帽穿越一个世纪，落到了 TikTok 上。',
        },
      },
      {
        q: { en: 'Is dressing as Catrina on TikTok disrespectful?', zh: '在 TikTok 玩 Catrina 变装会不会不尊重文化？' },
        a: {
          en: 'La Catrina is a shared cultural symbol of Día de Muertos, and the holiday itself has always mixed satire with remembrance. Keep the AI label on, treat the holiday with respect, and do not pass the render off as real face paint or as memorial content.',
          zh: 'La Catrina 是亡灵节共享的文化符号，这个节日本来就讽刺与追思并存。保持 AI 标注、尊重节日，别把成片冒充真实妆造或纪念内容。',
        },
      },
    ],
  },
  {
    keyword: 'catrina makeup vs ai',
    slug: 'catrina-makeup-vs-ai',
    title: {
      en: 'Catrina Makeup vs Catrina AI – Two Halves of One Trend | ViralReel',
      zh: 'Catrina 真妆 vs Catrina AI——一个趋势的两半 | ViralReel',
    },
    description: {
      en: 'The Catrina makeup trend and the Catrina AI trend keep getting mixed up. One is hours of real face paint; the other is a one-photo reveal. Here is the difference — and when to do which.',
      zh: 'Catrina 真妆趋势和 Catrina AI 趋势老被搞混。一个是几小时的真实化妆；另一个是单照片变身。区别在这——以及什么时候该玩哪个。',
    },
    h1: { en: 'Catrina makeup vs AI', zh: 'Catrina 真妆 vs AI' },
    lead: {
      en: 'Same skeleton, two ways to wear her: three hours in a chair, or one photo and a marigold sweep.',
      zh: '同一个骷髅女士，两种穿戴方式：椅子上三小时，或一张照片加一道金光。',
    },
    guideTitle: {
      en: 'The offline half and the one-photo half',
      zh: '线下的半场和单照片的半场',
    },
    body: {
      en: [
        'The Catrina makeup trend is the craft: white base paint, the sugar-skull details around the eyes and jaw, the petals and cobwebs drawn by hand, the rented gown, three hours in a chair and a gallery of tutorials every October. It is the offline half of the same look the AI wave renders — and no photo can replace it, which is exactly its value.',
        'The Catrina AI trend is the reveal: a flower crosses the frame, marigold light sweeps over, and you come back with the full look in seconds. It cannot replace the makeup either — it is a different post. The AI version works when you want the character, not the craft: a last-minute post before November 2, a version for your pet, a grandmother who would never sit for three hours of paint.',
        `On ViralReel you get the AI half: pick a reveal at ${EN_TEMPLATE}, upload one photo, and the paint, gown and candles are generated around your face. If you want the tutorial half, search "catrina makeup" — the brush artists deserve the view.`,
      ],
      zh: [
        'Catrina 真妆趋势是手艺：白色打底、眼周和下颌的糖骷髅细节、手绘的花瓣和蛛网、租来的裙装、椅子上三小时，以及每年十月铺天盖地的教程。它是 AI 浪潮所渲染的同一造型的线下半场——任何照片都替代不了它，这正是它的价值。',
        'Catrina AI 趋势是变身：一朵花划过、万寿菊金光扫过，几秒后你带着完整造型回来。它也替代不了化妆——这是两种不同的帖子。AI 版适合你要的是角色而不是手艺的时候：11 月 2 日前的临门一脚、给宠物的版本、给那位绝不可能坐三小时妆造的奶奶。',
        `在 ViralReel 你拿到的是 AI 半场：在 ${ZH_TEMPLATE} 选一个变身，上传一张照片，妆、裙和蜡烛围绕你的脸生成。想要教程半场，搜「catrina makeup」——刷子艺术家们值得那些播放量。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Is the AI version disrespectful to makeup artists?', zh: 'AI 版对化妆师不尊重吗？' },
        a: {
          en: 'They are different posts for different intentions. Label AI content honestly, credit the template creators, and if the look inspires you, the real tutorial half is one search away — the two halves feed each other.',
          zh: '它们是不同意图的不同帖子。诚实标注 AI、致谢模板作者；如果这个造型激发了你的兴趣，真实教程半场一搜就有——两个半场互相导流。',
        },
      },
      {
        q: { en: 'Which one looks more real?', zh: '哪个看起来更真实？' },
        a: {
          en: 'The makeup, obviously — and that is the point of the AI label. The AI version is a fairytale render, not a costume; the paint in it was drawn, not painted.',
          zh: '当然是真妆——这正是 AI 标注存在的意义。AI 版是童话渲染，不是真 costume；里面的妆是「画的」，不是「真画的」。',
        },
      },
    ],
  },
  {
    keyword: 'day of the dead catrina pet',
    slug: 'catrina-day-of-the-dead-pet',
    title: {
      en: 'Day of the Dead Catrina Pet Videos – Cute vs Memorial, Explained | ViralReel',
      zh: '亡灵节 Catrina 宠物视频——萌宠版 vs 纪念版，一次讲清 | ViralReel',
    },
    description: {
      en: 'Two Day of the Dead pet trends share one aesthetic: dressing your living pet as Catrina (the cute one, one photo) and the memorial trend for pets that have passed. Here is the difference, and how to make the cute one.',
      zh: '两个亡灵节宠物趋势共享一套美学：给在世的宠物穿 Catrina 装（萌宠版，一张照片）和给逝去宠物的纪念趋势。区别在这，以及萌宠版怎么做。',
    },
    h1: { en: 'Day of the Dead Catrina pet', zh: '亡灵节 Catrina 宠物' },
    lead: {
      en: 'One aesthetic, two very different intentions — knowing which is which keeps you from posting the wrong thing.',
      zh: '一套美学、两种完全不同的意图——分清两者，才不会发错内容。',
    },
    guideTitle: {
      en: 'The pet costume trend and the memorial trend',
      zh: '宠物换装趋势与纪念趋势',
    },
    body: {
      en: [
        'The cute one is the costume trend: a living pet dressed as Catrina. It joined the wave on 27 October 2026, when a kitten in a lace Catrina dress passed 453K plays, and the dog and cat versions arrived the same week. On ViralReel the Catrina Cat sample does it from one photo — the whole head and its markings visible — and the pet comes back in the tiny lace dress and flower crown, whiskers kept.',
        'The other one is the memorial trend: a pet that has passed coming back through the marigold gate, made from photos of the pet that died. It shares the aesthetic and the holiday but it is a memorial, not a costume — do not confuse the two, and never reply to one with the other.',
        `ViralReel makes the costume version only: ${EN_TEMPLATE}, pick the Catrina Cat sample, upload one photo of your pet. If your pet has passed and you want a memorial piece, commission it thoughtfully and label it as AI — this is not that tool.`,
      ],
      zh: [
        '萌宠版是换装趋势：给在世的宠物穿 Catrina 装。2026 年 10 月 27 日入场——蕾丝裙小猫破 45.3 万播放，猫狗版本同一周涌出。ViralReel 的猫咪变身样本用一张照片就能做——头部和花纹拍清楚——宠物会穿着小蕾丝裙、戴着花冠回来，胡须和花纹保留。',
        '另一个是纪念趋势：逝去的宠物穿过万寿菊之门回来，用离世宠物的照片制作。它共享美学和节日，但那是纪念不是换装——别把两者搞混，也别用一条去回复另一条。',
        `ViralReel 只做换装版： ${ZH_TEMPLATE} ，选猫咪变身样本，上传一张宠物照片。如果你的宠物已经离开、想要纪念作品，请郑重委托并标注 AI——这不是那个工具。`,
      ],
    },
    steps: makeVideoSteps,
    faq: [
      {
        q: { en: 'Can I make one for my dog?', zh: '可以给我的狗做一个吗？' },
        a: {
          en: 'Yes — the Catrina Cat sample works for any pet with a clear head-and-markings photo. Keep the pet alone in the photo, or you get a sugar skull with whiskers on a human body.',
          zh: '可以——猫咪变身样本对任何宠物都适用，只要照片里头部和花纹清楚。照片里只放宠物，不然会生成一个长胡须的人类骷髅。',
        },
      },
      {
        q: { en: 'Is this the memorial trend?', zh: '这是纪念趋势吗？' },
        a: {
          en: 'No. This dresses a living pet as Catrina for fun. The memorial trend uses photos of pets that have passed and is a different, much more sensitive thing.',
          zh: '不是。这是给在世宠物做的好玩换装。纪念趋势用的是离世宠物的照片，是完全不同、敏感得多的东西。',
        },
      },
    ],
  },
  {
    keyword: 'how to make catrina ai video',
    slug: 'how-to-make-catrina-ai',
    title: {
      en: 'How to Make a Catrina AI Video (One Photo, 5-15 Seconds) | ViralReel',
      zh: '如何制作 Catrina AI 视频（一张照片，5-15 秒） | ViralReel',
    },
    description: {
      en: 'A step-by-step guide to making a Catrina AI video: pick the reveal, upload one photo, generate the transformation, post with the Adiós señora bonita sound and the AI label while Día de Muertos is still running.',
      zh: 'Catrina AI 视频制作指南：选变身、传一张照片、生成变身、趁亡灵节未散配上《Adiós señora bonita》原声和 AI 标注发布。',
    },
    h1: { en: 'How to make a Catrina AI video', zh: '如何制作 Catrina AI 视频' },
    lead: {
      en: 'Four steps, one photo, and the marigold light does the rest — the full walkthrough.',
      zh: '四步、一张照片，剩下的交给万寿菊金光——完整攻略。',
    },
    guideTitle: {
      en: 'From photo to reveal, step by step',
      zh: '从照片到变身，一步步来',
    },
    body: {
      en: [
        'What you need: one clear front-facing photo (yours, a family member\'s, or your pet\'s — whole head and markings for pets), and a browser. No app, no editor, no prompt: the reveal, the gown, the camera and the sound are pre-built into every sample.',
        `Open ${EN_TEMPLATE} and pick the reveal whose mood you want — the flower toss in the bedroom, the hands-over-the-face at the ofrenda, the walk down the candle path, the Catrín in the top hat, or the pet clips. The sample you pick decides the length (5, 10 or 15 seconds), the camera and the sound.`,
        'Tips that separate good versions from great ones: a photo where the face is unobstructed and evenly lit reads best under the paint; waist-up if you want the full gown; render two or three reveals and post in batches; and ride the timing — the wave peaks on November 1-2 and fades right after.',
      ],
      zh: [
        '你需要：一张清晰的正面照（你自己的、家人的、或宠物的——宠物要头部完整花纹清楚），和一个浏览器。不用装 App、不用剪辑、不用写提示词：变身、裙装、运镜和声音都内置在每个样本里。',
        `打开 ${ZH_TEMPLATE} ，选一个你想要氛围的变身——卧室撒花、祭坛掩面、烛光小径漫步、戴礼帽的 Catrín，或宠物版。你选的样本决定时长（5、10 或 15 秒）、运镜和声音。`,
        '让版本更出彩的技巧：脸无遮挡、光线均匀的照片在妆面下还原度最高；想出全裙装就半身照；渲染两三个变身分批发；踩准时点——浪潮 11 月 1-2 日冲顶，节后立刻退潮。',
      ],
    },
    steps: SASHA_LA_CATRINA_HOW_TO_STEPS,
    faq: [
      {
        q: { en: 'Can two people be in one video?', zh: '可以两个人出现在一条视频里吗？' },
        a: {
          en: 'The pair versions take a second photo as Image 2. Most reveals are single-person — pick a sample first and it tells you how many photos it needs.',
          zh: '双人版会用第二张照片作为照片 2。大多数变身是单人——先选样本，它会告诉你需要几张照片。',
        },
      },
      {
        q: { en: 'How long does rendering take?', zh: '渲染要多久？' },
        a: {
          en: 'Usually a few minutes. Finished clips land in your task history, and a failed render is refunded automatically.',
          zh: '通常几分钟。成片进入任务历史，失败自动退积分。',
        },
      },
    ],
  },
];
