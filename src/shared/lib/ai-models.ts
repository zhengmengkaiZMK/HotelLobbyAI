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
