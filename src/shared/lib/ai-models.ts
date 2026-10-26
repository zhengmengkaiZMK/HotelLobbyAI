export interface ConfiguredModel {
  name: string;
  title: string;
  scenes: string[];
}

export const DEFAULT_CHAT_MODELS: ConfiguredModel[] = [
  { name: 'moonshotai/kimi-k2-thinking', title: 'Kimi K2 Thinking', scenes: [] },
  { name: 'deepseek/deepseek-r1', title: 'Deepseek R1', scenes: [] },
  { name: 'openai/gpt-5', title: 'GPT-5', scenes: [] },
  { name: 'anthropic/claude-4.5-sonnet', title: 'Claude 4.5 Sonnet', scenes: [] },
];

export function parseModelList(value: string = '', media: 'chat' | 'image' | 'video' = 'chat'): ConfiguredModel[] {
  const allowedScenes = media === 'image'
    ? ['text-to-image', 'image-to-image']
    : media === 'video' ? ['text-to-video', 'image-to-video'] : [];
  const names = new Set<string>();
  return value.split(/\r?\n/).filter((line) => line.trim()).map((line, index) => {
    const parts = line.split('|').map((part) => part.trim());
    const [name, title, sceneList] = parts;
    if (!name || /\s/.test(name) || parts.length > 3 || names.has(name)) {
      throw new Error(`模型列表第 ${index + 1} 行无效或模型 ID 重复 / Invalid or duplicate model`);
    }
    names.add(name);
    const scenes = sceneList ? [...new Set(sceneList.split(',').map((s) => s.trim()))] : allowedScenes;
    if (scenes.some((scene) => !allowedScenes.includes(scene))) {
      throw new Error(`模型 ${name} 的生成方式无效 / Invalid model scene`);
    }
    return { name, title: title || name, scenes };
  });
}

export function getChatModels(value?: string): ConfiguredModel[] {
  return value?.trim() ? parseModelList(value) : DEFAULT_CHAT_MODELS;
}

export function getRelayModels(configs: Record<string, string>, media: 'image' | 'video') {
  if (configs.media_relay_enabled !== 'true') return [];
  return parseModelList(configs[`media_relay_${media}_models`], media).map((model) => ({
    value: model.name,
    label: model.title,
    provider: 'media-relay',
    scenes: model.scenes,
  }));
}

/** friendly display names for known task-relay models; falls back to prettified ID */
const TASK_RELAY_TITLES: Record<string, string> = {
  'seedance-2.0': 'Seedance 2.0',
  'seedance-2.0-fast': 'Seedance 2.0 Fast',
  'seedance-2.5': 'Seedance 2.5',
  'minimax-h3': 'MiniMax H3',
  'gemini-omni-1.1-flash': 'Gemini Omni 1.1 Flash',
};

/**
 * unified async-task relay models (e.g. 12ai.org Seedance 2.0 / MiniMax-H3).
 * One model ID per line — `seedance-2.0`, `MiniMax-H3` — display name is
 * derived automatically. `ID | Title` is also accepted for custom labels.
 */
export function getTaskRelayModels(configs: Record<string, string>, media: 'image' | 'video') {
  if (configs.task_relay_enabled !== 'true') return [];
  const names = new Set<string>();
  return (configs[`task_relay_${media}_models`] || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, title] = line.split('|').map((part) => part.trim());
      if (!name || /\s/.test(name) || names.has(name)) {
        throw new Error(`任务式中转站模型列表第 ${names.size + 1} 行无效或模型 ID 重复 / Invalid or duplicate model ID`);
      }
      names.add(name);
      return {
        value: name,
        label: title || TASK_RELAY_TITLES[name.toLowerCase()] || name.replace(/[-_]+/g, ' ').replace(/(^|\s)([a-z])/g, (_, s, c) => s + c.toUpperCase()),
        provider: 'task-relay',
        scenes: ['text-to-video', 'image-to-video'],
      };
    });
}

export const FAL_KLING_REFERENCE_DEFAULT_MODEL = 'fal-ai/kling-video/o3/pro/video-to-video/reference';

/**
 * fal.ai Kling O3 Pro Reference video-to-video model, gated by its admin
 * switch. Requires the Fal API key to be configured (otherwise the provider
 * is never registered and the model cannot run). The admin source switch
 * (baidu_kling_source) reroutes the SAME model id to the Baidu Cloud channel
 * so the model value / family gating / billing stay untouched.
 */
export function getFalReferenceModel(configs: Record<string, string>) {
  // The Fal/Baidu API keys are intentionally never exposed in public configs.
  // The frontend therefore gates visibility only on the public feature switch;
  // the server still verifies the private key/provider before generation.
  if (configs.fal_kling_reference_enabled !== 'true') return null;
  const value = configs.fal_kling_reference_model?.trim() || FAL_KLING_REFERENCE_DEFAULT_MODEL;
  return {
    value,
    label: configs.fal_kling_reference_title?.trim() || 'Kling O3 Pro Reference',
    provider: configs.baidu_kling_source === 'baidu' ? 'baidu' : 'fal',
    scenes: ['video-to-video'],
  };
}

export const FAL_WAN_REFERENCE_DEFAULT_MODEL = 'alibaba/wan-3.0/reference-to-video';

/**
 * fal.ai Wan 3.0 Reference-to-Video model, gated by its admin switch. Same
 * family behavior as the Kling reference model: template reference video +
 * user photos, billed per second. Unlike Kling it accepts a resolution tier
 * (480p/720p/1080p), durations of 2-30s, and bills input reference video
 * seconds in addition to output seconds.
 */
export function getFalWanReferenceModel(configs: Record<string, string>) {
  if (configs.fal_wan_reference_enabled !== 'true') return null;
  const value = configs.fal_wan_reference_model?.trim() || FAL_WAN_REFERENCE_DEFAULT_MODEL;
  return {
    value,
    label: configs.fal_wan_reference_title?.trim() || 'Wan 3.0 Reference',
    provider: configs.baidu_wan_source === 'baidu' ? 'baidu' : 'fal',
    scenes: ['video-to-video'],
  };
}

export const FAL_KLING_V4_DEFAULT_MODEL = 'kling/v4/reference-to-video';

/**
 * fal.ai Kling v4 Reference-to-Video model, gated by its admin switch. fal
 * channel only (no Baidu reroute). Template reference video + user photos,
 * billed per output second by resolution tier (720p/1080p — no 480p tier).
 * Upstream accepts 3-30s output, up to 10 reference images and up to 5
 * reference videos; the dialog keeps the family cap at 15s and sends one
 * motion video, same as the Kling O3 / Wan reference flows. Audio is
 * generated natively by the model — the schema has no audio switch, so the
 * dialog hides the audio toggle for this model.
 */
export function getFalKlingV4ReferenceModel(configs: Record<string, string>) {
  if (configs.fal_kling_v4_enabled !== 'true') return null;
  const value = configs.fal_kling_v4_model?.trim() || FAL_KLING_V4_DEFAULT_MODEL;
  return {
    value,
    label: configs.fal_kling_v4_title?.trim() || 'Kling v4 Reference',
    provider: 'fal',
    scenes: ['video-to-video'],
  };
}

export const BAIDU_SEEDANCE_MODEL = 'seedance-2.5';

/**
 * Baidu Cloud Seedance 2.5 — net-new model behind the Baidu API key, gated by
 * its own admin switch. Billed with the same per-second resolution-tier
 * formula as the Wan reference model (user-side credits stay unchanged).
 */
export function getBaiduSeedanceModel(configs: Record<string, string>) {
  if (configs.baidu_seedance_enabled !== 'true') return null;
  return {
    value: BAIDU_SEEDANCE_MODEL,
    label: configs.baidu_seedance_title?.trim() || 'Seedance 2.5',
    provider: 'baidu',
    scenes: ['video-to-video'],
  };
}
