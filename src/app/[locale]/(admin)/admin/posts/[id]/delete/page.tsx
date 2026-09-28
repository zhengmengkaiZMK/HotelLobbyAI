import { revalidatePath } from 'next/cache';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { PERMISSIONS, requirePermission } from '@/core/rbac';
import { Empty } from '@/shared/blocks/common';
import { Header, Main, MainHeader } from '@/shared/blocks/dashboard';
import { FormCard } from '@/shared/blocks/form';
import { deletePost, findPost, PostType } from '@/shared/models/post';
import { Form } from '@/shared/types/blocks/form';

export default async function PostDeletePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  await requirePermission({
    code: PERMISSIONS.POSTS_DELETE,
    redirectUrl: '/admin/no-permission',
    locale,
  });

  const t = await getTranslations('admin.posts');
  const post = await findPost({ id });
  if (!post || post.type !== PostType.ARTICLE) {
    return <Empty message={t('delete.not_found')} />;
  }

  const form: Form = {
    fields: [],
    submit: {
      button: { title: t('delete.confirm'), variant: 'destructive' },
      handler: async () => {
        'use server';
        await requirePermission({ code: PERMISSIONS.POSTS_DELETE });
        const t = await getTranslations({ locale, namespace: 'admin.posts' });
        const current = await findPost({ id });
        if (!current || current.type !== PostType.ARTICLE) {
          return { status: 'error', message: t('delete.not_found') };
        }
        const result = await deletePost(id);
        if (!result) return { status: 'error', message: t('delete.failed') };
        revalidatePath('/[locale]/admin/posts', 'page');
        revalidatePath('/[locale]/blog', 'layout');
        return {
          status: 'success',
          message: t('delete.success'),
          redirect_url: '/admin/posts',
        };
      },
    },
  };

  return (
    <>
      <Header crumbs={[
        { title: t('list.crumbs.admin'), url: '/admin' },
        { title: t('list.crumbs.posts'), url: '/admin/posts' },
        { title: t('list.buttons.delete'), is_active: true },
      ]} />
      <Main>
        <MainHeader title={t('list.buttons.delete')} actions={[
          { title: t('delete.cancel'), url: '/admin/posts', variant: 'outline' },
        ]} />
        <p className="mb-4 max-w-xl break-words">{post.title || post.slug}</p>
        <FormCard description={t('delete.description')} form={form} className="md:max-w-xl" />
      </Main>
    </>
  );
}
