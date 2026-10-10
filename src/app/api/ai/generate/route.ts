import { envConfigs } from '@/config';
import { AIMediaType } from '@/extensions/ai';
import { getRelayModels, getTaskRelayModels } from '@/shared/lib/ai-models';
import { getAllConfigs } from '@/shared/models/config';
import { getUuid } from '@/shared/lib/hash';
import { respData, respErr } from '@/shared/lib/resp';
import { createAITask, NewAITask } from '@/shared/models/ai_task';
import { getRemainingCredits } from '@/shared/models/credit';
import { getUserInfo } from '@/shared/models/user';
import { getAIService } from '@/shared/services/ai';
import { getVideoGenerationCost, getOmniVideoCost } from '@/shared/lib/video-cost';

export async function POST(request: Request) {
  try {
    let { provider, mediaType, model, prompt, options, scene } =
      await request.json();

    if (!provider || !mediaType || !model) {
      throw new Error('invalid params');
    }

    if (!prompt && !options) {
      throw new Error('prompt or options is required');
    }

    const configs = await getAllConfigs();
    const aiService = await getAIService(configs);
    if (provider === 'media-relay') {
      if (mediaType !== AIMediaType.IMAGE && mediaType !== AIMediaType.VIDEO) {
        throw new Error('unsupported relay media type');
      }
      const configured = getRelayModels(configs, mediaType);
      if (!configured.some((item) => item.value === model && item.scenes.includes(scene))) {
        throw new Error('model or scene is not configured');
      }
      const images = options?.image_input;
      const requiresImage = scene === 'image-to-image' || scene === 'image-to-video';
      const supportsReferenceImages = mediaType === AIMediaType.VIDEO && model === 'grok-imagine-video-1.5' && scene === 'image-to-video';
      const validImageCount = supportsReferenceImages
        ? Array.isArray(images) && images.length >= 1 && images.length <= 7
        : Array.isArray(images) && images.length === 1;
      if (requiresImage && !validImageCount) {
        throw new Error(
          supportsReferenceImages
            ? 'Please provide between one and seven reference images for the relay'
            : 'Please provide exactly one reference image for the relay'
        );
      }
      if (requiresImage) {
        const allowedOrigins = [configs.r2_domain, configs.s3_domain, configs.r2_endpoint, configs.s3_endpoint]
          .filter(Boolean).map((url) => new URL(url).origin);
        for (const imageUrl of images) {
          const image = new URL(imageUrl);
          if (image.protocol !== 'https:' || image.username || image.password || !allowedOrigins.includes(image.origin)) {
            throw new Error('Reference image must come from the configured HTTPS storage domain');
          }
        }
      }
      options = {
        ...(requiresImage ? { image_input: images } : {}),
        ...(mediaType === AIMediaType.VIDEO
          ? {
              duration: options?.duration,
              aspect_ratio: options?.aspect_ratio,
              resolution: options?.resolution,
            }
          : {}),
      };
    } else if (provider === 'task-relay') {
      if (mediaType !== AIMediaType.VIDEO) {
        throw new Error('task relay only supports video generation');
      }
      const configured = getTaskRelayModels(configs, 'video');
      if (!configured.some((item) => item.value === model && item.scenes.includes(scene))) {
        throw new Error('model or scene is not configured');
      }
      const images = options?.image_input;
      if (!Array.isArray(images) || images.length < 1 || images.length > 9) {
        throw new Error('Please provide between one and nine reference images');
      }
      // reference materials must be publicly reachable: user uploads come from
      // our storage domain; the motion reference video comes from our own site
      const storageOrigins = [configs.r2_domain, configs.s3_domain, configs.r2_endpoint, configs.s3_endpoint]
        .filter(Boolean).map((url: string) => new URL(url).origin);
      const allowedOrigins = [...storageOrigins, new URL(envConfigs.app_url).origin];
      const validateUrl = (rawUrl: string) => {
        const parsed = new URL(rawUrl);
        if (parsed.protocol !== 'https:' || parsed.username || parsed.password || !allowedOrigins.includes(parsed.origin)) {
          throw new Error('Reference material must come from a configured HTTPS domain');
        }
      };
      for (const imageUrl of images) validateUrl(imageUrl);
      const videos = options?.video_input;
      if (videos !== undefined && videos !== null) {
        if (!Array.isArray(videos) || videos.length < 1 || videos.length > 3) {
          throw new Error('Please provide up to three reference videos');
        }
        for (const videoUrl of videos) validateUrl(videoUrl);
      }
      options = {
        image_input: images,
        ...(Array.isArray(videos) && videos.length ? { video_input: videos } : {}),
        duration: options?.duration,
        aspect_ratio: options?.aspect_ratio,
        resolution: options?.resolution,
      };
    }

    // check generate type
    if (!aiService.getMediaTypes().includes(mediaType)) {
      throw new Error('invalid mediaType');
    }

    // check ai provider
    const aiProvider = aiService.getProvider(provider);
    if (!aiProvider) {
      throw new Error('invalid provider');
    }

    // get current user
    const user = await getUserInfo();
    if (!user) {
      throw new Error('no auth, please sign in');
    }

    // todo: get cost credits from settings
    let costCredits = 2;

    if (mediaType === AIMediaType.IMAGE) {
      // generate image
      if (scene === 'image-to-image') {
        costCredits = 4;
      } else if (scene === 'text-to-image') {
        costCredits = 2;
      } else {
        throw new Error('invalid scene');
      }
    } else if (mediaType === AIMediaType.VIDEO) {
      // generate video
      if (scene === 'text-to-video') {
        costCredits = 6;
      } else if (scene === 'image-to-video') {
        // gemini-omni-* models: free duration 3-10s billed per-second at the
        // configured 8s-tier unit price; MiniMax-H3 768P/2K bill at 720p/1080p tiers
        const isOmniModel = provider === 'task-relay' && model.toLowerCase().startsWith('gemini-omni');
        costCredits = isOmniModel
          ? getOmniVideoCost(options?.resolution, options?.duration, configs)
          : getVideoGenerationCost(
              ({ '768P': '720p', '2K': '1080p' } as Record<string, string>)[options?.resolution] ?? options?.resolution,
              options?.duration,
              configs
            );
        options = { ...options, resolution: options?.resolution ?? '720p', duration: Number(options?.duration ?? 8) };
      } else if (scene === 'video-to-video') {
        costCredits = 10;
      } else {
        throw new Error('invalid scene');
      }
    } else if (mediaType === AIMediaType.MUSIC) {
      // generate music
      costCredits = 10;
      scene = 'text-to-music';
    } else {
      throw new Error('invalid mediaType');
    }

    // check credits
    const remainingCredits = await getRemainingCredits(user.id);
    if (remainingCredits < costCredits) {
      throw new Error('insufficient credits');
    }

    const callbackUrl = `${envConfigs.app_url}/api/ai/notify/${provider}`;

    const params: any = {
      mediaType,
      model,
      prompt,
      callbackUrl,
      options,
    };

    // generate content
    const result = await aiProvider.generate({ params });
    if (!result?.taskId) {
      throw new Error(
        `ai generate failed, mediaType: ${mediaType}, provider: ${provider}, model: ${model}`
      );
    }

    // create ai task
    const newAITask: NewAITask = {
      id: getUuid(),
      userId: user.id,
      mediaType,
      provider,
      model,
      prompt,
      scene,
      options: options ? JSON.stringify(options) : null,
      status: result.taskStatus,
      costCredits,
      taskId: result.taskId,
      taskInfo: result.taskInfo ? JSON.stringify(result.taskInfo) : null,
      taskResult: result.taskResult ? JSON.stringify(result.taskResult) : null,
    };
    await createAITask(newAITask);

    return respData(newAITask);
  } catch (e: any) {
    console.log('generate failed', e);
    return respErr(e.message);
  }
}
