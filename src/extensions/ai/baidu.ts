import { getUuid } from '@/shared/lib/hash';

import { saveFiles } from '.';
import {
  AIConfigs,
  AIFile,
  AIGenerateParams,
  AIMediaType,
  AIProvider,
  AITaskResult,
  AITaskStatus,
  AIVideo,
} from './types';

/**
 * Baidu Cloud (百度云 VOD 百炼) configs
 * @docs https://cloud.baidu.com/doc/VOD/index.html
 */
export interface BaiduConfigs extends AIConfigs {
  apiKey: string;
  // transload generated videos to our own storage — Baidu result URLs expire
  // after 24h, so this should stay enabled in production
  customStorage?: boolean;
}

// upstream model ids used inside the Baidu request bodies (admin-overridable)
export const BAIDU_WAN_API_MODEL_DEFAULT = 'wan3.0-video-prime';
export const BAIDU_SEEDANCE_API_MODEL_DEFAULT = 'doubao-seedance-2-5-260628';
export const BAIDU_KLING_API_MODEL_DEFAULT = 'kling-v3-omni';

// shared model values (must match the fal reference model values — the admin
// source switch only changes the provider, not the model id)
const WAN_REFERENCE_MODEL = 'alibaba/wan-3.0/reference-to-video';
const KLING_REFERENCE_MODEL = 'fal-ai/kling-video/o3/pro/video-to-video/reference';
export const BAIDU_SEEDANCE_MODEL = 'seedance-2.5';

type BaiduKind = 'wan' | 'seedance' | 'kling';

/**
 * Baidu Cloud provider — Wan 3.0 / Seedance 2.5 / Kling Omni video generation
 * through the Baidu VOD v3 gateway (API Key auth, async task + polling).
 *
 * All three channels are async: generate() submits a task and returns its id;
 * query() polls the channel-specific status endpoint. The channel is stored
 * in taskResult.kind at submit time so later polls (and the webhook-less
 * refresh path) always hit the right endpoint.
 */
export class BaiduProvider implements AIProvider {
  readonly name = 'baidu';
  configs: BaiduConfigs;

  private baseUrl = 'https://vod.bj.baidubce.com';

  constructor(configs: BaiduConfigs) {
    this.configs = configs;
  }

  // ------------------------------------------------------------------
  // generate
  // ------------------------------------------------------------------
  async generate({ params }: { params: AIGenerateParams }): Promise<AITaskResult> {
    const { model, prompt, options } = params;
    if (!model) throw new Error('model is required');
    if (!prompt) throw new Error('prompt is required');

    const kind = this.kindFromModel(model);
    const opts = options || {};

    if (kind === 'wan') {
      return this.generateWan(prompt, opts);
    }
    if (kind === 'seedance') {
      return this.generateSeedance(prompt, opts);
    }
    return this.generateKling(prompt, opts);
  }

  private async generateWan(prompt: string, options: any): Promise<AITaskResult> {
    // Bailian (百炼) video-synthesis, DashScope-style payload.
    // resolution must be UPPERCASE ('720P'); ratio accepts 'adaptive'.
    const media: Array<{ type: string; url: string }> = [];
    if (Array.isArray(options.video_input)) {
      for (const url of options.video_input.slice(0, 5)) {
        if (url) media.push({ type: 'reference_video', url });
      }
    }
    if (Array.isArray(options.image_input)) {
      for (const url of options.image_input.slice(0, 10)) {
        if (url) media.push({ type: 'reference_image', url });
      }
    }
    if (Array.isArray(options.audio_input)) {
      for (const url of options.audio_input.slice(0, 5)) {
        if (url) media.push({ type: 'reference_audio', url });
      }
    }

    const body: any = {
      model: this.configs.baidu_wan_model?.trim() || BAIDU_WAN_API_MODEL_DEFAULT,
      input: {
        prompt,
        ...(media.length ? { media } : {}),
      },
      parameters: {
        ...(options.duration !== undefined && options.duration !== null
          ? { duration: Number(options.duration) }
          : {}),
        ...(options.resolution
          ? { resolution: String(options.resolution).toUpperCase() }
          : {}),
        ...(options.aspect_ratio ? { ratio: options.aspect_ratio } : {}),
        ...(options.audio !== undefined ? { audio: !!options.audio } : {}),
      },
    };

    const data = await this.request(
      'POST',
      '/v3/aigc/bailian/api/v1/services/aigc/video-generation/video-synthesis',
      body,
      { 'X-DashScope-Async': 'enable' }
    );

    const taskId = data?.output?.task_id ?? data?.task_id ?? data?.taskId;
    if (!taskId) {
      throw new Error('baidu wan generate failed: no task_id');
    }
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId: String(taskId),
      taskInfo: {},
      taskResult: { kind: 'wan', ...data },
    };
  }

  private async generateSeedance(prompt: string, options: any): Promise<AITaskResult> {
    // Ark content-generation style payload on the Baidu seedance gateway.
    // Media items must use the nested {type, <type>: {url}, role} shape —
    // flat {type:'video', url} is rejected and nested items without a role
    // fail asynchronously ("reference media mode requires video role to be
    // reference_video"). Verified against the official qianfan-multimodal doc.
    const content: Array<Record<string, unknown>> = [{ type: 'text', text: prompt }];
    if (Array.isArray(options.video_input)) {
      for (const url of options.video_input.slice(0, 3)) {
        if (url)
          content.push({
            type: 'video_url',
            video_url: { url },
            role: 'reference_video',
          });
      }
    }
    if (Array.isArray(options.image_input)) {
      for (const url of options.image_input.slice(0, 10)) {
        if (url)
          content.push({
            type: 'image_url',
            image_url: { url },
            role: 'reference_image',
          });
      }
    }

    const body: any = {
      model: this.configs.baidu_seedance_model?.trim() || BAIDU_SEEDANCE_API_MODEL_DEFAULT,
      content,
      // Our seedance flow is always reference-based (reference video + images),
      // so declare it explicitly: the gateway pre-validates reference-mode
      // constraints at creation time instead of failing asynchronously.
      omni_reference_task_type: 'reference',
      ...(options.duration !== undefined && options.duration !== null
        ? { duration: Number(options.duration) }
        : {}),
      // 'adaptive' is valid for reference generation; other ratios pass through.
      ...(options.aspect_ratio ? { ratio: options.aspect_ratio } : {}),
    };

    const data = await this.request(
      'POST',
      '/v3/aigc/seedance/api/v3/contents/generations/tasks',
      body
    );

    const taskId = data?.id ?? data?.task_id ?? data?.taskId ?? data?.output?.task_id;
    if (!taskId) {
      throw new Error('baidu seedance generate failed: no task id');
    }
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId: String(taskId),
      taskInfo: {},
      taskResult: { kind: 'seedance', ...data },
    };
  }

  private async generateKling(prompt: string, options: any): Promise<AITaskResult> {
    // Kling Omni on the Baidu kl gateway. A reference video must first be
    // registered as a custom subject (主体) via the advanced-custom-elements
    // endpoint — that call is itself an async task, so the element id is
    // cached in the config table keyed by the source video URL: the first
    // generation for a template family pays the creation cost, later ones
    // reuse the cached element instantly.
    const videoUrl = Array.isArray(options.video_input) ? options.video_input[0] : '';
    let promptWithRef = prompt;
    const elementList: Array<{ element_id: number | string }> = [];

    if (videoUrl) {
      const elementId = await this.ensureKlingElement(videoUrl);
      elementList.push({
        element_id: /^\d+$/.test(String(elementId)) ? Number(elementId) : elementId,
      });
      if (!promptWithRef.includes('<<<element_1>>>')) {
        promptWithRef = `${promptWithRef}\n\nApply the appearance and motion of the subject reference <<<element_1>>> to the people in the scene.`;
      }
    }

    const body: any = {
      model_name: this.configs.baidu_kling_model?.trim() || BAIDU_KLING_API_MODEL_DEFAULT,
      prompt: promptWithRef,
      ...(elementList.length ? { element_list: elementList } : {}),
      sound: options.keep_audio === false ? 'off' : 'on',
      mode: this.configs.baidu_kling_mode?.trim() === 'pro' ? 'pro' : 'std',
      ...(options.aspect_ratio && options.aspect_ratio !== 'auto'
        ? { aspect_ratio: options.aspect_ratio }
        : {}),
      ...(options.duration !== undefined && options.duration !== null
        ? { duration: String(options.duration) }
        : {}),
      watermark_info: { enabled: false },
    };

    const data = await this.request('POST', '/v3/aigc/kl/videos/omni-video', body);

    const taskId = data?.taskId ?? data?.task_id ?? data?.data?.task_id;
    if (!taskId) {
      throw new Error('baidu kling generate failed: no taskId');
    }
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId: String(taskId),
      taskInfo: {},
      taskResult: { kind: 'kling', ...data },
    };
  }

  // ------------------------------------------------------------------
  // kling subject (element) registration + caching
  // ------------------------------------------------------------------
  private async ensureKlingElement(videoUrl: string): Promise<string> {
    const cacheRaw = this.configs.baidu_kling_element_cache;
    if (cacheRaw) {
      try {
        const map = JSON.parse(cacheRaw);
        if (map && typeof map[videoUrl] === 'string' && map[videoUrl]) {
          return map[videoUrl];
        }
      } catch {
        // malformed cache — fall through and re-create
      }
    }

    const createData = await this.request(
      'POST',
      '/v3/aigc/kl/general/advanced-custom-elements',
      {
        element_name: `vr-${Date.now()}`.slice(0, 20),
        element_description: 'ViralReel template motion reference',
        reference_type: 'video_refer',
        element_video_list: { refer_videos: [{ video_url: videoUrl }] },
      }
    );

    const elementTaskId =
      createData?.data?.task_id ?? createData?.taskId ?? createData?.task_id;
    if (!elementTaskId) {
      throw new Error('baidu kling element create failed: no task_id');
    }

    // The element task usually takes a while (video analysis). Poll briefly
    // so fast creations finish inside this request; when it is still running
    // we fail with a retry hint — the next attempt finds the finished task.
    const deadline = Date.now() + 55_000;
    let lastStatus = '';
    while (Date.now() < deadline) {
      await sleep(5_000);
      const statusData = await this.request(
        'GET',
        `/v3/aigc/kl/general/advanced-custom-elements/${elementTaskId}`
      ).catch(() => null);
      if (!statusData) continue;
      lastStatus = String(
        statusData?.data?.task_status ?? statusData?.task_status ?? ''
      ).toLowerCase();
      if (lastStatus.includes('fail')) {
        throw new Error('baidu kling element create failed upstream');
      }
      if (lastStatus.includes('succe') || lastStatus.includes('success')) {
        const elementId = this.extractElementId(statusData);
        if (elementId) {
          await this.cacheKlingElement(videoUrl, elementId);
          return elementId;
        }
      }
    }
    throw new Error(
      `百度可灵主体创建中（状态: ${lastStatus || 'processing'}），请约 1 分钟后重试`
    );
  }

  private extractElementId(payload: any): string | undefined {
    const candidates = [
      payload?.data?.element_id,
      payload?.element_id,
      payload?.data?.element_info?.element_id,
      payload?.data?.task_result?.element_id,
      payload?.task_result?.element_id,
      payload?.data?.result?.element_id,
      payload?.data?.elementList?.[0]?.element_id,
      payload?.data?.element_list?.[0]?.element_id,
    ];
    for (const candidate of candidates) {
      if (candidate !== undefined && candidate !== null && candidate !== '') {
        return String(candidate);
      }
    }
    return undefined;
  }

  private async cacheKlingElement(videoUrl: string, elementId: string) {
    try {
      const { saveConfigs } = await import('@/shared/models/config');
      let map: Record<string, string> = {};
      if (this.configs.baidu_kling_element_cache) {
        try {
          map = JSON.parse(this.configs.baidu_kling_element_cache) || {};
        } catch {
          map = {};
        }
      }
      map[videoUrl] = elementId;
      await saveConfigs({ baidu_kling_element_cache: JSON.stringify(map) });
      this.configs.baidu_kling_element_cache = JSON.stringify(map);
    } catch (error) {
      console.error('cache baidu kling element failed', error);
    }
  }

  // ------------------------------------------------------------------
  // query
  // ------------------------------------------------------------------
  async query({
    taskId,
    model,
    taskResult,
  }: {
    taskId: string;
    mediaType?: string;
    model?: string;
    taskResult?: any;
  }): Promise<AITaskResult> {
    const kind = taskResult?.kind || this.kindFromModel(model || '');
    if (kind === 'wan') {
      return this.queryWan(taskId);
    }
    if (kind === 'seedance') {
      return this.querySeedance(taskId);
    }
    return this.queryKling(taskId);
  }

  private async queryWan(taskId: string): Promise<AITaskResult> {
    const data = await this.request(
      'GET',
      `/v3/aigc/bailian/api/v1/tasks/${encodeURIComponent(taskId)}`
    );
    const rawStatus = String(data?.output?.task_status ?? data?.task_status ?? '');
    const taskStatus = this.mapStatus(rawStatus);
    const videoUrl = taskStatus === AITaskStatus.SUCCESS
      ? data?.output?.video_url ?? data?.video_url ?? data?.data?.video_url
      : undefined;

    return this.finishQuery(taskId, 'wan', taskStatus, rawStatus, data, videoUrl);
  }

  private async querySeedance(taskId: string): Promise<AITaskResult> {
    const data = await this.request(
      'GET',
      `/v3/aigc/seedance/api/v3/contents/generations/tasks/${encodeURIComponent(taskId)}`
    );
    const rawStatus = String(data?.status ?? data?.task_status ?? '');
    const taskStatus = this.mapStatus(rawStatus);
    const videoUrl = taskStatus === AITaskStatus.SUCCESS
      ? data?.content?.video_url ??
        data?.output?.video_url ??
        data?.video_url ??
        data?.videos?.[0]?.url
      : undefined;

    return this.finishQuery(taskId, 'seedance', taskStatus, rawStatus, data, videoUrl);
  }

  private async queryKling(taskId: string): Promise<AITaskResult> {
    // Primary: the documented per-model query path; fallback: the unified VOD
    // task query (works across bailian/kl/seedance).
    let data: any = null;
    try {
      data = await this.request(
        'GET',
        `/v3/aigc/kl/videos/text2video/${encodeURIComponent(taskId)}`
      );
    } catch (error) {
      console.error('baidu kling query primary path failed, trying unified', error);
      data = await this.request(
        'GET',
        `/v3/tasks/${encodeURIComponent(taskId)}`
      );
    }
    const rawStatus = String(
      data?.data?.task_status ?? data?.task_status ?? data?.status ?? data?.output?.task_status ?? ''
    );
    const taskStatus = this.mapStatus(rawStatus);
    const videoUrl = taskStatus === AITaskStatus.SUCCESS
      ? data?.data?.task_result?.videos?.[0]?.url ??
        data?.task_result?.videos?.[0]?.url ??
        data?.output?.video_url ??
        data?.video_url ??
        data?.videos?.[0]?.url
      : undefined;

    return this.finishQuery(taskId, 'kling', taskStatus, rawStatus, data, videoUrl);
  }

  private async finishQuery(
    taskId: string,
    kind: BaiduKind,
    taskStatus: AITaskStatus,
    rawStatus: string,
    data: any,
    videoUrl: string | undefined
  ): Promise<AITaskResult> {
    let videos: AIVideo[] | undefined = undefined;
    if (taskStatus === AITaskStatus.SUCCESS) {
      if (videoUrl) {
        videos = [{ id: '', createTime: new Date(), videoUrl }];
      } else {
        // Success without a URL would strand the user in "processing" forever.
        return {
          taskId,
          taskStatus: AITaskStatus.FAILED,
          taskInfo: {
            status: rawStatus,
            errorCode: 'missing_video_url',
            errorMessage: 'baidu task succeeded but no video url was returned',
          },
          taskResult: { kind, ...data },
        };
      }
    }

    // transload to own storage — baidu result urls expire after 24h
    if (videos && videos.length > 0 && this.configs.customStorage) {
      const filesToSave: AIFile[] = videos
        .filter((video) => video.videoUrl)
        .map((video, index) => ({
          url: video.videoUrl!,
          contentType: 'video/mp4',
          key: `baidu/video/${getUuid()}.mp4`,
          index,
          type: 'video',
        }));
      if (filesToSave.length > 0) {
        const uploadedFiles = await saveFiles(filesToSave);
        if (uploadedFiles) {
          uploadedFiles.forEach((file: AIFile) => {
            if (file?.url && videos && file.index !== undefined) {
              const video = videos[file.index];
              if (video) {
                video.videoUrl = file.url;
              }
            }
          });
        }
      }
    }

    return {
      taskId,
      taskStatus,
      taskInfo: {
        videos,
        status: rawStatus,
        errorCode: '',
        errorMessage: '',
        createTime: new Date(),
      },
      taskResult: { kind, ...data },
    };
  }

  // ------------------------------------------------------------------
  // helpers
  // ------------------------------------------------------------------
  private kindFromModel(model: string): BaiduKind {
    if (model === BAIDU_SEEDANCE_MODEL) return 'seedance';
    if (model === WAN_REFERENCE_MODEL) return 'wan';
    if (model === KLING_REFERENCE_MODEL) return 'kling';
    throw new Error(`baidu provider does not support model: ${model}`);
  }

  private async request(
    method: 'GET' | 'POST',
    path: string,
    body?: unknown,
    extraHeaders: Record<string, string> = {}
  ): Promise<any> {
    const resp = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.configs.apiKey}`,
        ...extraHeaders,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });

    const text = await resp.text();
    if (!resp.ok) {
      const snippet = text.slice(0, 500);
      console.error('baidu request failed', { method, path, status: resp.status, snippet });
      throw new Error(`baidu request failed (${resp.status}): ${snippet}`);
    }

    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`baidu request returned invalid json: ${text.slice(0, 300)}`);
    }
  }

  private mapStatus(raw: string): AITaskStatus {
    const status = raw.toLowerCase();
    if (!status) return AITaskStatus.PROCESSING;
    if (status.includes('fail')) return AITaskStatus.FAILED;
    if (status.includes('cancel')) return AITaskStatus.CANCELED;
    if (status.includes('succe') || status.includes('success')) return AITaskStatus.SUCCESS;
    if (status.includes('run') || status.includes('process')) return AITaskStatus.PROCESSING;
    if (status.includes('pending') || status.includes('submit') || status.includes('queue') || status.includes('wait')) {
      return AITaskStatus.PENDING;
    }
    return AITaskStatus.PROCESSING;
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
