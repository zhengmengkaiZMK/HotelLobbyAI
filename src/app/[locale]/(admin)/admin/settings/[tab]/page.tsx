import { getTranslations, setRequestLocale } from 'next-intl/server';

import { PERMISSIONS, requireAllPermissions } from '@/core/rbac';
import { Header, Main, MainHeader } from '@/shared/blocks/dashboard';
import { FormCard } from '@/shared/blocks/form';
import { getChatModels, parseModelList, getRelayModels, getTaskRelayModels, getFalReferenceModel, getFalWanReferenceModel, getFalKlingV4ReferenceModel, getBaiduSeedanceModel } from '@/shared/lib/ai-models';
import { getConfigsFresh, saveConfigs } from '@/shared/models/config';
import { getUserInfo } from '@/shared/models/user';
import {
  getSettingGroups,
  getSettings,
  getSettingTabs,
} from '@/shared/services/settings';
import { Crumb } from '@/shared/types/blocks/common';
import { Form as FormType } from '@/shared/types/blocks/form';

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: string; tab: string }>;
}) {
  const { locale, tab } = await params;
  setRequestLocale(locale);

  // Check if user has permission to read settings
  await requireAllPermissions({
    codes: [PERMISSIONS.SETTINGS_READ, PERMISSIONS.SETTINGS_WRITE],
    redirectUrl: '/admin/no-permission',
    locale,
  });

  // fresh read: the admin must see (and re-save) current values, never a
  // stale isolate cache snapshot
  const configs = await getConfigsFresh();

  const settingGroups = await getSettingGroups();
  const settings = await getSettings();

  // per-family model gating: the checkbox (可用模型) and select (默认模型)
  // options are the currently connected video models, mirroring the generator
  // dialog's list order (relay → task-relay → Kling Reference → Wan Reference
  // → Baidu Seedance)
  const falRefOption = getFalReferenceModel(configs);
  const falWanOption = getFalWanReferenceModel(configs);
  const falV4Option = getFalKlingV4ReferenceModel(configs);
  const baiduSeedanceOption = getBaiduSeedanceModel(configs);
  const videoModelOptions = [
    ...getRelayModels(configs, 'video'),
    ...getTaskRelayModels(configs, 'video'),
    ...(falRefOption ? [falRefOption] : []),
    ...(falWanOption ? [falWanOption] : []),
    ...(falV4Option ? [falV4Option] : []),
    ...(baiduSeedanceOption ? [baiduSeedanceOption] : []),
  ].map((m) => ({ title: m.label, value: m.value }));
  const familyModelSettingNames = new Set([
    'viral_family_models_hotel',
    'viral_family_models_burning_bridges',
    'viral_family_models_bulin_47',
    'viral_family_models_hit_the_road_dude',
    'viral_family_models_ozil_goal',
    'viral_family_models_cat_clapping',
    'viral_family_models_pedra_do_sal',
    'viral_family_models_bby_wow',
    'viral_family_models_window_peeper',
    'viral_family_models_tiny_desk_outstanding',
    'viral_family_models_baba_dance',
    'viral_family_models_wassup_in_a_minute',
    'viral_family_default_model_hotel',
    'viral_family_default_model_burning_bridges',
    'viral_family_default_model_bulin_47',
    'viral_family_default_model_hit_the_road_dude',
    'viral_family_default_model_ozil_goal',
    'viral_family_default_model_cat_clapping',
    'viral_family_default_model_pedra_do_sal',
    'viral_family_default_model_bby_wow',
    'viral_family_default_model_window_peeper',
    'viral_family_default_model_tiny_desk_outstanding',
    'viral_family_default_model_baba_dance',
    'viral_family_default_model_wassup_in_a_minute',
  ]);
  for (const setting of settings) {
    if (familyModelSettingNames.has(setting.name)) {
      setting.options = videoModelOptions;
    }
  }

  const t = await getTranslations('admin.settings');

  const crumbs: Crumb[] = [
    { title: t('edit.crumbs.admin'), url: '/admin' },
    { title: t('edit.crumbs.settings'), is_active: true },
  ];

  const tabs = await getSettingTabs(tab ?? 'auth');

  const handleSubmit = async (data: FormData, passby: any) => {
    'use server';

    const user = await getUserInfo();

    if (!user) {
      throw new Error('no auth');
    }

    await requireAllPermissions({ codes: [PERMISSIONS.SETTINGS_WRITE], locale });
    const updates: Record<string, string> = {};
    const allowedNames = settings.filter((setting) => setting.tab === tab).map((setting) => setting.name);
    data.forEach((value, name) => {
      if (allowedNames.includes(name) && typeof value === 'string') updates[name] = value;
    });

    if ('chat_models' in updates) getChatModels(updates.chat_models);
    for (const media of ['image', 'video'] as const) {
      const key = `media_relay_${media}_models`;
      if (key in updates) parseModelList(updates[key], media);
    }
    const mediaRelayKeys = allowedNames.filter((name) => name.startsWith('media_relay_'));
    if (mediaRelayKeys.some((name) => name in updates)) {
      const merged = { ...await getConfigsFresh(), ...updates };
      const assertUrl = (url: string) => {
        const parsed = new URL(url);
        if (parsed.protocol !== 'https:' || parsed.username || parsed.password || parsed.search || parsed.hash) {
          throw new Error('Base URL 必须是无凭据、无查询参数的 HTTPS 地址');
        }
      };
      if (merged.media_relay_enabled === 'true') {
        if (!merged.media_relay_image_models?.trim() && !merged.media_relay_video_models?.trim()) {
          throw new Error('请至少配置一个图片或视频模型');
        }
        const labels: Record<string, string> = { image: '绘画', video: '视频' };
        for (const media of ['image', 'video'] as const) {
          if (!merged[`media_relay_${media}_models` as keyof typeof merged]?.trim()) continue;
          const baseUrl = merged[`media_relay_${media}_base_url` as keyof typeof merged]?.trim();
          const apiKey = merged[`media_relay_${media}_api_key` as keyof typeof merged]?.trim();
          if (baseUrl && apiKey) {
            assertUrl(baseUrl);
            continue;
          }
          throw new Error(`请完整填写${labels[media]}中转站的 Base URL 和 API Key`);
        }
      } else {
        for (const media of ['image', 'video'] as const) {
          const baseUrl = merged[`media_relay_${media}_base_url` as keyof typeof merged]?.trim();
          const apiKey = merged[`media_relay_${media}_api_key` as keyof typeof merged]?.trim();
          if ((baseUrl || apiKey) && !(baseUrl && apiKey)) {
            const labels: Record<string, string> = { image: '绘画', video: '视频' };
            throw new Error(`${labels[media]}中转站的 Base URL 和 API Key 需同时填写`);
          }
        }
      }
    }
    await saveConfigs(updates);

    return {
      status: 'success',
      message: 'Settings updated',
    };
  };

  let forms: FormType[] = [];

  settingGroups.forEach((group) => {
    if (group.tab !== tab) {
      return;
    }

    forms.push({
      title: group.title,
      description: group.description,
      fields: settings
        .filter((setting) => setting.group === group.name)
        .map((setting) => ({
          name: setting.name,
          title: setting.title,
          type: setting.type as any,
          placeholder: setting.placeholder,
          group: setting.group,
          options: setting.options,
          tip: setting.tip,
          value: setting.value,
          attributes: setting.attributes,
        })),
      passby: {
        provider: group.name,
        tab: group.tab,
      },
      data: configs,
      submit: {
        button: {
          title: t('edit.buttons.submit'),
        },
        handler: handleSubmit as any,
      },
    });
  });

  return (
    <>
      <Header crumbs={crumbs} />
      <Main>
        <MainHeader title={t('edit.title')} tabs={tabs} />
        {forms.map((form) => (
          <FormCard
            key={form.title}
            title={form.title}
            description={form.description}
            form={form}
            className="mb-8 md:max-w-xl"
            defaultCollapsed={false}
            collapsible={true}
          />
        ))}
      </Main>
    </>
  );
}
