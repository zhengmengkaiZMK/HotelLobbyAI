import {
  AIManager,
  AITaskStatus,
  FalProvider,
  GeminiProvider,
  KieProvider,
  MediaRelayProvider,
  ReplicateProvider,
  type MediaRelayEndpointConfigs,
} from '@/extensions/ai';
import { Configs, getAllConfigs } from '@/shared/models/config';
import { AITask, getAITasks, updateAITaskById } from '@/shared/models/ai_task';

export type MediaRelayMediaType = 'image' | 'video';

export interface MediaRelayEndpoints {
  image?: MediaRelayEndpointConfigs;
  video?: MediaRelayEndpointConfigs;
  errors: string[];
}

function readRelayEndpoint(configs: Configs, media: MediaRelayMediaType): MediaRelayEndpointConfigs | undefined {
  const baseUrl = configs[`media_relay_${media}_base_url` as keyof Configs]?.trim();
  const apiKey = configs[`media_relay_${media}_api_key` as keyof Configs]?.trim();
  if (baseUrl && apiKey) return { apiKey, baseUrl };
  return undefined;
}

/**
 * resolve image / video relay endpoints (per media type, no legacy fallback).
 * errors contains messages for partially configured media types.
 */
export function resolveMediaRelayEndpoints(configs: Configs): MediaRelayEndpoints {
  const labels: Record<MediaRelayMediaType, string> = { image: '绘画', video: '视频' };
  const endpoints: MediaRelayEndpoints = { errors: [] };
  for (const media of ['image', 'video'] as const) {
    const endpoint = readRelayEndpoint(configs, media);
    if (endpoint) {
      endpoints[media] = endpoint;
      continue;
    }
    const baseUrl = configs[`media_relay_${media}_base_url` as keyof Configs]?.trim();
    const apiKey = configs[`media_relay_${media}_api_key` as keyof Configs]?.trim();
    if (baseUrl || apiKey) {
      endpoints.errors.push(`请完整填写${labels[media]}中转站的 Base URL 和 API Key`);
    }
  }
  return endpoints;
}

/**
 * get ai manager with configs
 */
export function getAIManagerWithConfigs(configs: Configs) {
  const aiManager = new AIManager();

  const relay = resolveMediaRelayEndpoints(configs);
  if (relay.image || relay.video) {
    aiManager.addProvider(new MediaRelayProvider({
      image: relay.image,
      video: relay.video,
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

/**
 * re-query pending/processing tasks that have not been updated for a while,
 * so results land in the database even if the user closed the page early.
 */
export async function refreshPendingAITasks(options: {
  userId?: string;
  olderThanMs?: number;
  limit?: number;
} = {}): Promise<number> {
  const olderThanMs = options.olderThanMs ?? 60_000;
  const limit = options.limit ?? 10;
  const tasks: AITask[] = [];
  for (const status of [AITaskStatus.PENDING, AITaskStatus.PROCESSING]) {
    const rows = await getAITasks({
      userId: options.userId,
      status,
      page: 1,
      limit,
    });
    tasks.push(...rows);
  }

  const now = Date.now();
  const stale = tasks.filter((task) => {
    const raw: any = task.createdAt;
    let created = typeof raw === 'number' ? raw : Date.parse(raw);
    if (!Number.isFinite(created)) return false;
    if (created < 1e12) created *= 1000; // seconds → milliseconds
    return now - created >= olderThanMs;
  });

  for (const task of stale) {
    try {
      const aiService = await getAIService();
      const aiProvider = aiService.getProvider(task.provider);
      if (!aiProvider?.query) continue;
      const result = await aiProvider.query({
        taskId: task.taskId,
        mediaType: task.mediaType,
        model: task.model,
      });
      if (!result?.taskStatus) continue;
      const update = {
        status: result.taskStatus,
        taskInfo: result.taskInfo ? JSON.stringify(result.taskInfo) : null,
        taskResult: result.taskResult ? JSON.stringify(result.taskResult) : null,
        creditId: task.creditId,
      };
      if (update.taskInfo !== task.taskInfo) {
        await updateAITaskById(task.id, update);
      }
    } catch (e) {
      console.error('refresh pending ai task failed', task.id, e);
    }
  }
  return stale.length;
}
