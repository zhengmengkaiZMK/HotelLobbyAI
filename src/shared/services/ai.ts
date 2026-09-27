import {
  AIManager,
  FalProvider,
  GeminiProvider,
  KieProvider,
  MediaRelayProvider,
  ReplicateProvider,
} from '@/extensions/ai';
import { Configs, getAllConfigs } from '@/shared/models/config';

/**
 * get ai manager with configs
 */
export function getAIManagerWithConfigs(configs: Configs) {
  const aiManager = new AIManager();

  if (configs.media_relay_api_key && configs.media_relay_base_url) {
    aiManager.addProvider(new MediaRelayProvider({
      apiKey: configs.media_relay_api_key,
      baseUrl: configs.media_relay_base_url,
    }));
  }

  if (configs.kie_api_key) {
    aiManager.addProvider(
      new KieProvider({
        apiKey: configs.kie_api_key,
        customStorage: configs.kie_custom_storage === 'true',
      })
    );
  }

  if (configs.replicate_api_token) {
    aiManager.addProvider(
      new ReplicateProvider({
        apiToken: configs.replicate_api_token,
        customStorage: configs.replicate_custom_storage === 'true',
      })
    );
  }

  if (configs.fal_api_key) {
    aiManager.addProvider(
      new FalProvider({
        apiKey: configs.fal_api_key,
        customStorage: configs.fal_custom_storage === 'true',
      })
    );
  }

  if (configs.gemini_api_key) {
    aiManager.addProvider(
      new GeminiProvider({
        apiKey: configs.gemini_api_key,
      })
    );
  }

  return aiManager;
}

/**
 * global ai service
 */
let aiService: AIManager | null = null;

/**
 * get ai service manager
 */
export async function getAIService(configs?: Configs): Promise<AIManager> {
  if (!configs) {
    configs = await getAllConfigs();
  }
  aiService = getAIManagerWithConfigs(configs);

  return aiService;
}
