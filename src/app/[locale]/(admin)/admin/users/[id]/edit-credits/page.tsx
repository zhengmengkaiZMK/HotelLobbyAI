import { getTranslations, setRequestLocale } from 'next-intl/server';

import { PERMISSIONS, requirePermission } from '@/core/rbac';
import { Empty } from '@/shared/blocks/common';
import { Header, Main, MainHeader } from '@/shared/blocks/dashboard';
import { FormCard } from '@/shared/blocks/form';
import {
  adjustUserCreditsTo,
  getRemainingCredits,
} from '@/shared/models/credit';
import { findUserById } from '@/shared/models/user';
import { Crumb } from '@/shared/types/blocks/common';
import { Form } from '@/shared/types/blocks/form';

export default async function UserEditCreditsPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  await requirePermission({
    code: PERMISSIONS.USERS_WRITE,
    redirectUrl: '/admin/no-permission',
    locale,
  });

  const user = await findUserById(id);
  if (!user) {
    return <Empty message="User not found" />;
  }

  const currentCredits = await getRemainingCredits(user.id);

  const t = await getTranslations('admin.users');

  const crumbs: Crumb[] = [
    { title: t('edit_credits.crumbs.admin'), url: '/admin' },
    { title: t('edit_credits.crumbs.users'), url: '/admin/users' },
    { title: t('edit_credits.crumbs.edit_credits'), is_active: true },
  ];

  const form: Form = {
    fields: [
      {
        name: 'name',
        type: 'text',
        title: t('fields.name'),
        validation: { required: true },
        attributes: { disabled: true },
      },
      {
        name: 'email',
        type: 'text',
        title: t('fields.email'),
        validation: { required: true },
        attributes: { disabled: true },
      },
      {
        name: 'current_credits',
        type: 'text',
        title: t('edit_credits.fields.current_credits'),
        validation: { required: true },
        attributes: { disabled: true },
      },
      {
        name: 'credits',
        type: 'number',
        title: t('edit_credits.fields.credits'),
        tip: t('edit_credits.fields.credits_tip'),
        placeholder: '0',
        validation: { required: true, min: 0 },
      },
      {
        name: 'description',
        type: 'textarea',
        title: t('edit_credits.fields.description'),
        placeholder: t('edit_credits.fields.description_placeholder'),
      },
    ],
    passby: {
      user: user,
    },
    data: {
      ...user,
      current_credits: String(currentCredits),
      credits: currentCredits,
    },
    submit: {
      button: {
        title: t('edit_credits.buttons.submit'),
      },
      handler: async (data, passby) => {
        'use server';

        const { user } = passby;

        if (!user) {
          throw new Error('no auth');
        }

        const targetCredits = parseInt(data.get('credits') as string);

        if (isNaN(targetCredits) || targetCredits < 0) {
          throw new Error('credits amount must be 0 or greater');
        }

        const description = data.get('description') as string;

        const result = await adjustUserCreditsTo({
          user: user,
          targetCredits: targetCredits,
          description: description || undefined,
        });

        return {
          status: 'success',
          message:
            result.delta === 0
              ? 'credits balance unchanged'
              : `credits balance updated to ${targetCredits}`,
          redirect_url: `/admin/users?email=${user.email}`,
        };
      },
    },
  };

  return (
    <>
      <Header crumbs={crumbs} />
      <Main>
        <MainHeader title={t('edit_credits.title')} />
        <FormCard form={form} className="md:max-w-xl" />
      </Main>
    </>
  );
}
