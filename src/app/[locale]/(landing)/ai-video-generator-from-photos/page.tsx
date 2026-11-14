import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/core/i18n/navigation';
import { getMetadata } from '@/shared/lib/seo';

export const revalidate = 3600;

export const generateMetadata = getMetadata({
  title: 'AI Video Generator from Photos | ViralReel',
  description: 'Turn one or more photos into a short AI video with ViralReel. See how photo-based templates work, what to prepare, and how pricing is calculated.',
  canonicalUrl: '/ai-video-generator-from-photos',
});

export default async function AiVideoFromPhotosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const zh = locale === 'zh';
  const t = (en: string, cn: string) => (zh ? cn : en);
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">{t('Photo to video', '照片转视频')}</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t('AI video generator from photos', '照片 AI 视频生成器')}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{t('ViralReel turns approved photos into short, ready-to-post videos using fixed templates. Choose a format, upload the required photos, and review the exact credit cost before you render.', 'ViralReel 使用固定模板把你有权使用的照片变成适合发布的短视频。选择格式、上传所需照片，并在生成前查看确切积分费用。')}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/ai-video-generator" className="rounded-md bg-primary px-5 py-3 text-primary-foreground">{t('Start generating', '开始生成')}</Link><Link href="/pricing" className="rounded-md border px-5 py-3">{t('See pricing', '查看定价')}</Link></div>
      <section className="mt-16 space-y-8">
        <div><h2 className="text-2xl font-semibold">{t('What you need', '开始前需要什么')}</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground"><li>{t('A clear photo for each subject required by the selected template.', '按所选模板准备每个主体的一张清晰照片。')}</li><li>{t('Permission to use every uploaded image.', '确认你有权使用上传的每张图片。')}</li><li>{t('Credits or a plan: new users do not receive free credits or a free trial.', '积分或套餐：新用户没有免费积分，也没有免费试用。')}</li></ul></div>
        <div><h2 className="text-2xl font-semibold">{t('How it works', '使用步骤')}</h2><ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground"><li>{t('Choose a photo-based template.', '选择一个照片模板。')}</li><li>{t('Upload the requested photos and choose the available settings.', '上传所需照片并选择可用设置。')}</li><li>{t('Review the exact credit cost shown by the generator.', '查看生成器显示的确切积分费用。')}</li><li>{t('Generate and download the finished MP4.', '生成并下载 MP4 成片。')}</li></ol></div>
        <div><h2 className="text-2xl font-semibold">{t('Common questions', '常见问题')}</h2><div className="mt-4 space-y-4"><details className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">{t('Is it free?', '免费吗？')}</summary><p className="mt-2 text-muted-foreground">{t('No. ViralReel has no free credits or free trial. The generator shows the exact cost before every render. Current prices are maintained on the Pricing page.', '不免费。ViralReel 没有免费积分或免费试用。每次生成前都会显示确切费用，当前价格以定价页为准。')}</p></details><details className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">{t('Does it use a text prompt?', '需要文字提示词吗？')}</summary><p className="mt-2 text-muted-foreground">{t('Photo templates use a fixed scene and instructions, so most do not require you to write a prompt.', '照片模板使用固定场景和指令，大多数情况下不需要自己写提示词。')}</p></details></div></div>
      </section>
      <nav className="mt-16 border-t pt-8 text-sm"><span className="mr-4 font-semibold">{t('Related resources', '相关资源')}</span><Link href="/ai-video-generator" className="mr-4 text-primary hover:underline">{t('AI video generator', 'AI 视频生成器')}</Link><Link href="/blog" className="mr-4 text-primary hover:underline">{t('How-to guides', '使用教程')}</Link><Link href="/pricing" className="text-primary hover:underline">{t('Pricing', '定价')}</Link></nav>
    </main>
  );
}
