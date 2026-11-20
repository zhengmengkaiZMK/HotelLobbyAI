import { connection } from 'next/server';
import { setRequestLocale } from 'next-intl/server';

import { Link } from '@/core/i18n/navigation';
import { GtaStyleTool } from '@/shared/blocks/gta-style/tool';
import { ViralHeader } from '@/shared/blocks/viral-home/header';
import '@/shared/blocks/viral-home/home.css';
import { buildImageCatalog } from '@/shared/lib/image-tool';
import { getMetadata } from '@/shared/lib/seo';
import { getAllConfigs } from '@/shared/models/config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PATH = '/gta-6-style-ai-image-generator';

const copy = {
  en: {
    title: 'GTA 6 Style AI Image Generator',
    description:
      'GTA 6 Style is an unofficial ViralReel image tool. Upload one person photo or start from a style, then generate one image. Signed-in users get one free image per Asia/Shanghai day. Later images cost 2 credits without a photo or 4 credits with a photo.',
  },
  zh: {
    title: 'GTA 6 Style 图片生成器',
    description:
      'GTA 6 Style 是 ViralReel 的非官方图片工具。上传一张人物照片，或只选风格，生成一张图片。登录用户每个上海自然日有一张免费图片。之后不上传照片 2 积分，上传照片 4 积分。',
  },
};

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const zh = locale.startsWith('zh');
  const text = zh ? copy.zh : copy.en;
  return getMetadata({
    title: text.title,
    description: text.description,
    canonicalUrl: PATH,
  })({ params });
};

function faq(zh: boolean) {
  if (zh) {
    return [
      ['GTA 6 Style 是什么？', '这是 ViralReel 上的一个图片工具。你选择一个风格模板，可以上传一张自己的人物照片，也可以不上传。页面不会让你写提示词，也不会让你选模型。它不是 Rockstar Games 的官方工具，也不包含官方游戏素材。'],
      ['免费规则是什么？', '每位已登录用户每个上海自然日可以成功生成一张图片。文生图和图生图共用这一张，不按风格或模型分开计算。它不会增加积分余额，也不能用来生成视频。上海时间 00:00 重置。'],
      ['用完免费图片之后呢？', '不上传照片是 2 积分，上传照片是 4 积分，每次只出一张。余额不够时打开一次性积分包购买，支付成功并刷新余额后可以再试。不会自动扣款。'],
      ['失败了会怎样？', '提供方拒绝、任务失败或取消时，免费额度或已扣积分会退回。页面等待超时只表示还没看到结果，不会当成失败，也不会再送一张免费图片。'],
      ['人脸一定一样吗？', '不一定。照片只作为风格参考。这个页面不承诺脸、衣服或姿势保持不变，也不承诺生成耗时或某个游戏分辨率。'],
    ];
  }
  return [
    ['What is GTA 6 Style?', 'It is an image tool on ViralReel. You pick a style template and can upload one photo of a person, or leave the photo empty. The page does not ask you to write a prompt or choose a model. It is not a Rockstar Games product and it does not include official game assets.'],
    ['What is the free image rule?', 'Each signed-in user can have one successful image per Asia/Shanghai calendar day. Text-to-image and image-to-image share that one image. It does not add credits to the balance and it does not apply to video. It resets at 00:00 Asia/Shanghai.'],
    ['What happens after the free image?', 'An image without a photo costs 2 credits. An image with a photo costs 4 credits. Each accepted attempt returns one image. If the balance is short, the page opens the one-time credit pack checkout. Nothing is purchased automatically. After a paid checkout, refresh the balance and try again.'],
    ['What if generation fails?', 'If the provider rejects the attempt or the task fails or is canceled, the free image or the debited credits are returned. A wait that times out on this page is not treated as a failure and does not grant another free success.'],
    ['Will the face match?', 'Not necessarily. The photo is a style reference. This page does not promise that the face, clothes, or pose will stay the same, and it does not promise a generation time or a game-native resolution.'],
  ] as [string, string][];
}

export default async function GtaStylePage({ params }: { params: Promise<{ locale: string }> }) {
  await connection();
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale.startsWith('zh');
  const t = (en: string, cn: string) => (zh ? cn : en);
  const configs = await getAllConfigs(true);
  const catalog = buildImageCatalog(configs, null);
  const questions = faq(zh);
  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  const appJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: zh ? copy.zh.title : copy.en.title,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    url: zh ? `https://www.viralreel.app/zh${PATH}` : `https://www.viralreel.app${PATH}`,
    description: zh ? copy.zh.description : copy.en.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: zh
        ? '登录用户每个上海自然日一张图片。之后文生图 2 积分，图生图 4 积分。'
        : 'One image per signed-in user each Asia/Shanghai day. After that, text-to-image costs 2 credits and image-to-image costs 4 credits.',
    },
  };

  return (
    <div className="viral-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <ViralHeader />
      <main className="container py-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">ViralReel</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{t('GTA 6 Style AI Image Generator', 'GTA 6 Style 图片生成器')}</h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-600">
          {t(
            'GTA 6 Style makes one unofficial illustrated image from a style template. Upload a photo of a person when you want that person in the picture, or leave the photo empty and generate from the style text. You do not write a prompt and you do not pick a model.',
            'GTA 6 Style 用风格模板生成一张非官方插画。想让某个人出现在画面里，就上传一张人物照片；也可以不上传，只按风格生成。你不用写提示词，也不用选模型。'
          )}
        </p>
        <p className="mt-3 max-w-3xl text-sm text-zinc-500">
          {t(
            'ViralReel is not affiliated with Rockstar Games. GTA and Grand Theft Auto are their trademarks. This page does not supply official screenshots, covers, or logos.',
            'ViralReel 与 Rockstar Games 没有关联。GTA 与 Grand Theft Auto 是其商标。本页不提供官方截图、封面或标志。'
          )}
        </p>
        <div className="mt-8">
          <GtaStyleTool initialCatalog={catalog} />
        </div>
        <section className="mt-14 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">{t('How to use it', '怎么用')}</h2>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-700">
            <li>{t('Sign in. The free image is tied to the account, not to the browser.', '先登录。免费图片记在账号上，不记在浏览器里。')}</li>
            <li>{t('Pick a style. If the card says no sample image has been uploaded, that is only a label, not an example result.', '选一个风格。如果卡片写着还没有上传示例图，那只是说明，不是生成结果。')}</li>
            <li>{t('Upload one photo you have the right to use, or skip the photo.', '上传一张你有权使用的照片，或者跳过照片。')}</li>
            <li>{t('Read the credit line. It shows whether today’s free image is still available and what the next image costs.', '先看积分说明。它会写今日免费图片是否还在，以及下一张要多少积分。')}</li>
            <li>{t('Generate one image. Open it full size or download it. Past attempts stay in My generations.', '生成一张图片。可以查看原图或下载。以前的任务在生成记录里。')}</li>
          </ol>
        </section>
        <section className="mt-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold">{t('Styles on this page', '本页风格')}</h2>
          {catalog.styles.length === 0 ? (
            <p className="text-zinc-700">
              {t(
                'No style is available until an admin saves the style list. Sample thumbnails are not borrowed from other sites.',
                '管理员保存风格列表之前，这里没有可选风格。示例缩略图不会从别的网站拿来冒充我们的作品。'
              )}
            </p>
          ) : (
            <ul className="space-y-2 text-zinc-700">
              {catalog.styles.map((style) => (
                <li key={style.id}>
                  <b>{zh ? style.nameZh || style.name : style.name}</b>
                  {style.size ? ` · ${style.size}` : t(' · default relay size', ' · 使用中转默认尺寸')}
                  {style.thumbnail ? '' : t(' · no sample image uploaded', ' · 还没有上传示例图')}
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm text-zinc-500">
            {t(
              'The relay client can send 1024×1024, 1024×1536, or 1536×1024 when a style sets one of those sizes. Otherwise it sends the relay default, 1024×1024. If the configured model rejects that size, the attempt fails and the free image or credits are returned.',
              '风格如果填写了 1024×1024、1024×1536 或 1536×1024，绘画中转会收到这个尺寸。否则使用中转默认的 1024×1024。如果配置的模型拒绝这个尺寸，这次生成失败，并退回免费图片或积分。'
            )}
          </p>
        </section>
        <section className="mt-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold">{t('Price and the daily image', '价格和每日图片')}</h2>
          <p className="text-zinc-700">
            {t(
              'Video prices, including a 15-second clip at 60, 75, or 90 credits, do not apply here. There is no signup credit grant. Video generation stays paid. One-time credit packs are on the pricing page.',
              '视频价格不适用于这里，包括 15 秒片子的 60、75 或 90 积分。没有注册赠送积分。视频仍然付费。一次性积分包在定价页。'
            )}
          </p>
          <p>
            <Link href="/pricing" className="text-orange-700 underline">
              {t('Buy a one-time credit pack', '购买一次性积分包')}
            </Link>
          </p>
        </section>
        <section className="mt-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold">{t('Limits', '限制')}</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>{t('Use a photo you have permission to use. The upload limit is 10 MB.', '只上传你有权使用的照片。单张不超过 10 MB。')}</li>
            <li>{t('The photo has to be stored on ViralReel’s own storage. Pasting an outside image URL does not start a generation.', '照片必须存在 ViralReel 自己的存储上。粘贴外部图片地址不会开始生成。')}</li>
            <li>{t('The tool uses the drawing relay selected in admin. It does not switch to a video model or another provider when that relay is missing.', '工具使用管理员选中的绘画中转。中转没配好时，不会改去视频模型或其他供应商。')}</li>
            <li>{t('This page does not say how many seconds a generation takes, and it does not promise likeness.', '本页不写生成需要多少秒，也不承诺像不像。')}</li>
          </ul>
        </section>
        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-semibold">{t('FAQ', '常见问题')}</h2>
          <div className="mt-4 space-y-4">
            {questions.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-zinc-200 px-4 py-3" open>
                <summary className="cursor-pointer font-medium">{question}</summary>
                <p className="mt-2 text-zinc-700">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
