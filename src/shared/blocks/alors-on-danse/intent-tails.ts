import type { AlorsOnDanseLongTailEntry } from './long-tails';

/**
 * Second-wave intent pages for Alors On Danse AI.
 * Thin content only — routes reuse AlorsOnDanseLongTailRoute and the shared OG
 * image. Do not claim a brand affiliation, a song license, or real sketch dates
 * beyond what the trend reporting covers.
 */

const T = 'https://www.viralreel.app/alors-on-danse-ai-template';
const TZ = 'https://www.viralreel.app/zh/alors-on-danse-ai-template';
const steps = 'shared' as const;

const ROLES_EN =
  'Studio Giant, Original Sketch, Football Duo, Spider Duo, Fantasy Duo, Racing Duo, and Football Keyboard are seven versions of the same white-studio sketch on ViralReel.';
const ROLES_ZH = '白棚巨人版、原版小剧场、足球双人版、蜘蛛侠双人版、奇幻双人版、赛车双人版和足球键盘版是 ViralReel 上同一个白棚小品的七个版本。';
const SOUND_EN =
  'The download carries the picture only. Add the Alors on danse trend sound in the TikTok, Reels, or Shorts sound picker and keep the AI label on. ViralReel does not license the song.';
const SOUND_ZH =
  '下载文件只有画面。在 TikTok、Reels 或 Shorts 的曲库里另加 Alors on danse 趋势原声，并保留 AI 标注。ViralReel 不授权这首歌。';
const LIMIT_EN =
  'Use photos of yourself or adults (18+) who agreed to it. No minors, no celebrities, no movie characters, no strangers, and do not pass the output off as the real making-of.';
const LIMIT_ZH =
  '用你本人或经同意的成年人（18+）的照片。不要未成年人、名人、影视角色或陌生人，也不要把成片冒充真实的创作幕后。';

export const ALORS_ON_DANSE_INTENT_TAILS: readonly AlorsOnDanseLongTailEntry[] = [
  {
    keyword: 'alors on danse song',
    slug: 'alors-on-danse-song',
    title: {
      en: 'Alors On Danse Song – Stromae\'s 2009 Hit Behind the Meme',
      zh: 'Alors On Danse 这首歌：梗背后的 Stromae 2009 年金曲',
    },
    description: {
      en: 'alors on danse song: the 2009 Stromae hit that carries the white-studio recast trend. What the song is, when it came out, the Kanye West remix, and which TikTok sound the posts use.',
      zh: 'alors on danse song：承载白棚重排趋势的 Stromae 2009 年金曲。歌是什么、什么时候发的、Kanye West 混音版，以及帖子们用的那条 TikTok 原声。',
    },
    h1: { en: 'The Alors On Danse song', zh: '《Alors On Danse》这首歌' },
    lead: {
      en: 'Every version of the meme rides the same song: "Alors on danse" by Stromae, the 2009 track that went to number one across Europe.',
      zh: '每条版本的底都是同一首歌：Stromae 的《Alors on danse》，2009 年横扫欧洲多国冠军的单曲。',
    },
    guideTitle: {
      en: 'The song, and the sound the trend uses',
      zh: '这首歌，以及趋势用的那条原声',
    },
    body: {
      en: [
        '"Alors on danse" is French for "so we dance". Stromae — the Belgian artist Paul Van Haver — released it in 2009, and it went to number one across Europe, with a Kanye West remix following in 2010. The song is about dancing to forget rent, work and everything else, which is why the phrase works as a caption on almost anything.',
        'The sketch that the meme rebuilds parodies the song\'s creation: Jamel Debbouze "helping" while Stromae plays a mini keyboard. The TikTok posts use the song itself — usually the original or the Extended Mix upload; search the sound picker and tap "Use this sound".',
        `ViralReel does not license the recording. Make the picture at ${T} with two photos, then add the sound in the app when you post. ${LIMIT_EN}`,
      ],
      zh: [
        '《Alors on danse》是法语「那么我们跳舞吧」。Stromae——比利时音乐人 Paul Van Haver——2009 年发行了这首歌，拿下欧洲多国冠军，2010 年还出了 Kanye West 混音版。歌唱的是用跳舞忘掉房租、工作和一切烦心事，所以这句词配什么画面都成立。',
        '梗所重拍的小品戏仿了这首歌的创作过程：Jamel Debbouze 一边「帮忙」，Stromae 一边弹迷你键盘。TikTok 帖子用的就是这首歌——通常是原版或 Extended Mix 上传版；在曲库搜索后点「使用这个声音」。',
        `ViralReel 不授权这段录音。在 ${TZ} 用两张照片做好画面，发布时在 App 里加原声。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Who sings Alors on danse?', zh: '《Alors on danse》是谁唱的？' },
        a: {
          en: 'Stromae, the Belgian singer and producer Paul Van Haver. He released it in 2009; a Kanye West remix followed in 2010.',
          zh: 'Stromae，比利时歌手兼制作人 Paul Van Haver。2009 年发行，2010 年出了 Kanye West 混音版。',
        },
      },
      {
        q: { en: 'Which sound do the recasts use?', zh: '重排版用的哪条原声？' },
        a: {
          en: 'The song itself — most posts use the original or the Extended Mix upload in TikTok\'s sound picker.',
          zh: '就是这首歌——大多数帖子用的是 TikTok 曲库里的原版或 Extended Mix 版。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse meaning',
    slug: 'alors-on-danse-meaning',
    title: {
      en: 'What Does Alors On Danse Mean? – "So We Dance", Explained',
      zh: 'Alors On Danse 是什么意思？——「那么我们跳舞吧」',
    },
    description: {
      en: 'alors on danse meaning: French for "so we dance", the hook of Stromae\'s 2009 hit and the name of the white-studio recast trend. The lyric, the joke, and the caption it makes possible.',
      zh: 'alors on danse meaning：法语「那么我们跳舞吧」，Stromae 2009 年金曲的副歌，也是白棚重排趋势的名字。歌词、笑点，以及它带来的文案玩法。',
    },
    h1: { en: 'Alors on danse meaning', zh: 'Alors on danse 的意思' },
    lead: {
      en: '"Alors on danse" means "so we dance" — a French phrase that became a 2009 hit, a 2010 sketch, and a 2026 meme name.',
      zh: '「Alors on danse」意思是「那么我们跳舞吧」——一句法语，先后成了 2009 年的金曲、2010 年的小品和 2026 年的梗名。',
    },
    guideTitle: {
      en: 'The phrase, the lyric, and the meme',
      zh: '这句话、这段歌词，以及这个梗',
    },
    body: {
      en: [
        'In the song, "alors on danse" is the answer to everything the verse lists: rent, work, deadlines, stress — "so we dance". Stromae sings about dancing to forget, which is why the phrase caps almost any situation and why caption writers love it.',
        'In the 2010 Made in Jamel sketch, the phrase is being born: Jamel Debbouze turns a writing session into a party while Stromae keeps playing the mini keyboard. The 2026 meme rebuilds that sketch with two new faces, so the name carries the song, the sketch and the joke at once.',
        `To make your own version, open ${T}, upload two photos, and generate. ${LIMIT_EN}`,
      ],
      zh: [
        '在歌里，「alors on danse」是对主歌列出的一切的回答：房租、工作、deadline、压力——「那么我们跳舞吧」。Stromae 唱的是用跳舞来忘记，所以这句话能收尾任何处境，写文案的人也因此爱用它。',
        '在 2010 年的《Made in Jamel》小品里，这句话正在「诞生」：Jamel Debbouze 把一次创作变成一场派对，而 Stromae 继续弹着迷你键盘。2026 年的梗用两张新脸重拍这个小品，这个名字同时承载了歌、小品和笑点。',
        `想做你自己的版本，打开 ${TZ} ，上传两张照片，直接生成。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Is "alors on danse" correct French?', zh: '「Alors on danse」是标准法语吗？' },
        a: {
          en: 'Yes — "alors" (so/then), "on" (we, informal), "danse" (dance). "So we dance" is the standard translation.',
          zh: '是的——alors（那么）、on（我们，口语）、danse（跳舞）。通行译法就是「那么我们跳舞吧」。',
        },
      },
      {
        q: { en: 'Does the caption have to be French?', zh: '文案必须用法语吗？' },
        a: {
          en: 'No. Most posts caption in their own language and let the sound carry the phrase. A who-is-who line works best.',
          zh: '不用。大多数帖子用自己的语言写文案，让原声承载这句话。一条「谁是谁」的效果最好。',
        },
      },
    ],
  },
  {
    keyword: 'stromae jamel debbouze ai',
    slug: 'stromae-jamel-debbouze-ai',
    title: {
      en: 'Stromae & Jamel Debbouze AI – The Two Roles, Recast',
      zh: 'Stromae 与 Jamel Debbouze AI：两个角色，重排',
    },
    description: {
      en: 'stromae jamel debbouze ai: who plays what in the white-studio sketch, and how ViralReel recasts both roles from your photos without generating the real artists.',
      zh: 'stromae jamel debbouze ai：白棚小品里谁演什么，以及 ViralReel 如何用你的照片重排两个角色、而不去生成两位真人。',
    },
    h1: { en: 'Stromae & Jamel Debbouze AI', zh: 'Stromae 与 Jamel Debbouze AI' },
    lead: {
      en: 'Searches for Stromae and Jamel Debbouze AI point at the 2010 sketch. ViralReel does not generate the real artists — it recasts the roles with your photos.',
      zh: '搜 Stromae 和 Jamel Debbouze AI 指向的是 2010 年的小品。ViralReel 不生成两位真人——它用你的照片重排这两个角色。',
    },
    guideTitle: {
      en: 'The two roles, and who can play them',
      zh: '两个角色，以及谁能来演',
    },
    body: {
      en: [
        'In the sketch, Stromae — the Belgian artist Paul Van Haver — sits at a mini keyboard, playing the "Alors on danse" beat with a straight face. Jamel Debbouze, the French comedian, bursts in, dances, points at the camera and mouths along. The sketch is from his 2010 show Made in Jamel and parodies how the song was written.',
        `ViralReel does not recreate either artist. The template at ${T} replaces both roles with your two uploaded photos: Image 1 takes the keyboard, Image 2 takes the dance. ${LIMIT_EN}`,
        `${SOUND_EN}`,
      ],
      zh: [
        '在小品里，Stromae——比利时音乐人 Paul Van Haver——坐在迷你键盘前，面无表情地弹着《Alors on danse》的节拍。法国喜剧演员 Jamel Debbouze 闯进来，跳舞、指镜头、对口型。小品出自他 2010 年的综艺《Made in Jamel》，戏仿了这首歌的创作过程。',
        `ViralReel 不会去生成这两位艺术家。${TZ} 上的模板用你上传的两张照片替换两个角色：照片 1 接管键盘位，照片 2 接管伴舞位。${LIMIT_ZH}`,
        `${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Can I generate Stromae or Jamel Debbouze?', zh: '能生成 Stromae 或 Jamel Debbouze 吗？' },
        a: {
          en: 'No. ViralReel does not generate real people. Use photos of yourself or adults who agreed — the roles are what matter, not the faces.',
          zh: '不能。ViralReel 不生成真人。用你本人或经同意的成年人照片——重要的是角色，不是脸。',
        },
      },
      {
        q: { en: 'Who is who in the sketch?', zh: '小品里谁是谁？' },
        a: {
          en: 'Stromae plays the mini keyboard and never breaks; Jamel Debbouze dances, points and mouths the words. Your Image 1 takes the Stromae role, Image 2 takes the Jamel role.',
          zh: 'Stromae 弹迷你键盘、从头到尾不动摇；Jamel Debbouze 跳舞、指镜头、对口型。你的照片 1 接 Stromae 的角色，照片 2 接 Jamel 的角色。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse making of ai',
    slug: 'alors-on-danse-making-of',
    title: {
      en: 'Is the Alors On Danse Making-Of Real? – The Sketch, Explained',
      zh: 'Alors On Danse 创作幕后是真的吗？——小品详解',
    },
    description: {
      en: 'alors on danse making of: the white-studio clip is a 2010 comedy sketch from Made in Jamel, not a real studio session. What it parodies, and how the AI recasts work.',
      zh: 'alors on danse making of：白棚片段是 2010 年《Made in Jamel》的喜剧小品，不是真实的录音棚花絮。它戏仿了什么，AI 重排版又是怎么回事。',
    },
    h1: { en: 'The Alors On Danse making-of, explained', zh: 'Alors On Danse「创作幕后」详解' },
    lead: {
      en: 'The white-studio clip is not a real making-of — it is a scripted 2010 comedy sketch that the 2026 AI wave rebuilds with new faces.',
      zh: '白棚片段不是真实的创作幕后——它是一段 2010 年有剧本的喜剧小品，2026 年的 AI 浪潮正用新脸重拍它。',
    },
    guideTitle: {
      en: 'What the sketch is, and what the AI version is',
      zh: '小品是什么，AI 版本又是什么',
    },
    body: {
      en: [
        'The clip comes from Made in Jamel, Jamel Debbouze\'s 2010 show. In it, Jamel "helps" Stromae write "Alors on danse" — dancing, coaching, pointing — while Stromae plays a mini keyboard and ignores all of it. The joke is that Stromae actually wrote the song alone; the sketch is a parody of session mythology, not documentation.',
        'The 2026 AI versions keep the sketch shot-for-shot and replace the two people from photos. That is why the recasts feel so readable: the script, the room and the timing never change — only the casting does.',
        `ViralReel\'s version is a fan remix made from your two photos at ${T}. ${LIMIT_EN}`,
      ],
      zh: [
        '片段出自 Jamel Debbouze 2010 年的综艺《Made in Jamel》。片子里 Jamel 「帮」Stromae 写《Alors on danse》——跳舞、指导、指指点点——而 Stromae 弹着迷你键盘，完全不接茬。笑点在于：Stromae 其实是一个人写出这首歌的；小品戏仿的是「录音棚神话」，不是纪实。',
        '2026 年的 AI 版本逐镜头保留小品、用照片替换两个人。这就是重排版一眼能读懂的原因：剧本、房间、节奏从不变，变的只有选角。',
        `ViralReel 的版本是在 ${TZ} 用你的两张照片做的粉丝向重排。${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'Did Stromae write the song with Jamel?', zh: '这首歌是 Stromae 和 Jamel 一起写的吗？' },
        a: {
          en: 'No. Stromae composed "Alors on danse" himself. The sketch pretends otherwise — that is the joke.',
          zh: '不是。Stromae 独自创作了《Alors on danse》。小品假装的不是这样——这正是笑点。',
        },
      },
      {
        q: { en: 'Is the AI version a real making-of?', zh: 'AI 版本是真实的幕后吗？' },
        a: {
          en: 'No. It is a fan remix generated from uploaded photos. Label your post as AI and do not present it as documentation.',
          zh: '不是。它是用上传照片生成的粉丝向重排。发布时标注 AI，不要当作纪实内容。',
        },
      },
    ],
  },
  {
    keyword: 'alors on danse ai generator',
    slug: 'alors-on-danse-ai-generator',
    title: {
      en: 'Alors On Danse AI Generator – Browser Recast in Minutes',
      zh: 'Alors On Danse AI 生成器：几分钟出白棚重排版',
    },
    description: {
      en: 'alors on danse ai generator: two photos in, a ~30-second white-studio recast out. Keyboard Player and Dance Partner slots, seven versions, credit cost shown upfront, failed renders refunded.',
      zh: 'alors on danse ai generator：两张照片进，约 30 秒白棚重排版出。弹键盘位和伴舞位，七个版本，费用提前显示，失败退款。',
    },
    h1: { en: 'Alors On Danse AI generator', zh: 'Alors On Danse AI 生成器' },
    lead: {
      en: 'The Alors On Danse AI generator on ViralReel re-shoots the sketch around your two photos — no app, no prompt, no editing.',
      zh: 'ViralReel 的 Alors On Danse AI 生成器围绕你的两张照片重拍小品——不用 App、不用提示词、不用剪辑。',
    },
    guideTitle: {
      en: 'From two photos to a finished recast',
      zh: '从两张照片到一条成片',
    },
    body: {
      en: [
        `The generator lives on the template page: ${T}. ${ROLES_EN} Pick the version whose framing matches your pair, then fill the two slots.`,
        'Rendering takes a few minutes. The output is a ~30-second MP4 at 16:9 with the version\'s camera and timing. The cost shows before you start, and a failed render is refunded automatically.',
        `${SOUND_EN} ${LIMIT_EN}`,
      ],
      zh: [
        `生成器在模板页：${TZ} 。${ROLES_ZH} 选一个构图跟你们组合匹配的版本，然后填满两个位置。`,
        '渲染需要几分钟。输出是约 30 秒的 16:9 MP4，带该版本的运镜和节奏。费用在开始前显示，渲染失败自动退积分。',
        `${SOUND_ZH} ${LIMIT_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'How long does a render take?', zh: '渲染要多久？' },
        a: {
          en: 'Usually a few minutes, depending on the model you pick. Finished clips land in your history.',
          zh: '通常几分钟，取决于所选模型。成片会进入你的历史记录。',
        },
      },
      {
        q: { en: 'Do I need to write a prompt?', zh: '需要写提示词吗？' },
        a: {
          en: 'No. The template fixes the scene and the beat. You pick a version and upload two photos.',
          zh: '不需要。模板已固定场景和节拍。你选版本、上传两张照片。',
        },
      },
    ],
  },
  {
    keyword: 'make alors on danse ai',
    slug: 'make-alors-on-danse-ai',
    title: {
      en: 'Make an Alors On Danse AI Video – Two Photos, One Sketch',
      zh: '制作 Alors On Danse AI 视频：两张照片，一条小品',
    },
    description: {
      en: 'make alors on danse ai: the direct path — upload two photos on ViralReel, pick a version, download the ~30s MP4, add the trend sound. Not affiliated with the artists.',
      zh: 'make alors on danse ai：最短路径——在 ViralReel 上传两张照片，选版本，下载约 30 秒 MP4，再加趋势原声。与两位艺术家无关联。',
    },
    h1: { en: 'Make an Alors On Danse AI video', zh: '制作 Alors On Danse AI 视频' },
    lead: {
      en: 'Making an Alors On Danse AI video is two photos and one decision: which version of the sketch you want to be in.',
      zh: '做一条 Alors On Danse AI 视频只需要两张照片和一个决定：你想进哪个版本的小品。',
    },
    guideTitle: {
      en: 'The direct path to your recast',
      zh: '直达你的重排版',
    },
    body: {
      en: [
        `Open ${T} . ${ROLES_EN} Pick the one closest to your duo — a couple, siblings, a quiet friend and a loud one, or a person and a pet.`,
        `Upload two photos: Keyboard Player first, Dance Partner second. ${LIMIT_EN} Generate, wait a few minutes, and download the ~30-second MP4.`,
        `${SOUND_EN}`,
      ],
      zh: [
        `打开 ${TZ} 。${ROLES_ZH} 选一个和你们最像的——情侣、兄妹、一个闷一个闹的朋友，或者人和宠物。`,
        `上传两张照片：先弹键盘的人，再伴舞的人。${LIMIT_ZH} 生成，等几分钟，下载约 30 秒的 MP4。`,
        `${SOUND_ZH}`,
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What photos work best?', zh: '什么样的照片最好用？' },
        a: {
          en: 'Half-body, face clear, no sunglasses. The keyboard role is filmed from the chest up; the dance role moves a lot, so a mid-laugh photo keeps more of the person.',
          zh: '半身、脸部清晰、不戴墨镜。键盘位镜头从胸口往上拍；伴舞位动作大，一张大笑中的照片保留度更高。',
        },
      },
      {
        q: { en: 'Can two people share one account?', zh: '两个人能共用一个账号吗？' },
        a: {
          en: 'Yes — anyone can upload both photos and generate once. The output belongs to the account that made it.',
          zh: '可以——任何人都能一次上传两张照片并生成。成片归属生成的账号。',
        },
      },
    ],
  },
  {
    keyword: 'how to make alors on danse ai',
    slug: 'how-to-make-alors-on-danse-ai',
    title: {
      en: 'How to Make an Alors On Danse AI Video (2026 Guide)',
      zh: '如何制作 Alors On Danse AI 视频（2026 指南）',
    },
    description: {
      en: 'how to make alors on danse ai: the four steps — two photos, pick a version, generate ~30 seconds, post with the trend sound and an AI label. Browser-based, no prompt.',
      zh: 'how to make alors on danse ai：四步——两张照片、选版本、生成约 30 秒、带趋势原声和 AI 标注发布。浏览器操作，不用提示词。',
    },
    h1: { en: 'How to make an Alors On Danse AI video', zh: '如何制作 Alors On Danse AI 视频' },
    lead: {
      en: 'Four steps from two photos to a posted recast. The whole thing runs in the browser at ViralReel.',
      zh: '从两张照片到发布重排版，一共四步。全程在 ViralReel 的浏览器里完成。',
    },
    guideTitle: {
      en: 'The four-step guide',
      zh: '四步指南',
    },
    body: {
      en: [
        `Step zero is the template: ${T}. ${ROLES_EN}`,
        'Step one: upload two photos — Keyboard Player in Image 1, Dance Partner in Image 2. Step two: keep the 16:9 landscape ratio, read the credit cost, and generate. Step three: download the ~30-second MP4 when the render finishes. Step four: post it with the Alors on danse trend sound and the AI label.',
        'The two most common mistakes are swapping the slots and uploading sunglasses photos. The keyboard role needs a clear, straight-on face; the dance role rewards a photo that is already mid-laugh.',
      ],
      zh: [
        `第零步是模板本身：${TZ} 。${ROLES_ZH}`,
        '第一步：上传两张照片——照片 1 弹键盘的人，照片 2 伴舞的人。第二步：保持 16:9 横屏画幅，看清积分，生成。第三步：渲染完成后下载约 30 秒的 MP4。第四步：带 Alors on danse 趋势原声和 AI 标注发布。',
        '两个最常见的错误：位置放反、照片戴墨镜。键盘位需要清晰的正脸；伴舞位用一张本来就在笑的照片效果最好。',
      ],
    },
    steps,
    faq: [
      {
        q: { en: 'What ratio should I generate at?', zh: '生成用什么画幅？' },
        a: {
          en: '16:9 landscape, like most studio versions. The vertical repost of the original has its own variant, but landscape is the shape the trend traveled in.',
          zh: '16:9 横屏，和大多数白棚版本一致。竖屏转发的原片有对应变体，但这波趋势传播用的是横屏。',
        },
      },
      {
        q: { en: 'Is it free?', zh: '免费吗？' },
        a: {
          en: 'Every render is paid: the exact cost shows before you generate. After that, credit packs or a monthly plan cover it, and failed renders are refunded automatically.',
          zh: '每次渲染都计费，开始前显示确切费用。之后用积分包或月付。费用在生成前显示。',
        },
      },
    ],
  },
];
