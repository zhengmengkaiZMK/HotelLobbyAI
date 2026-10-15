import { envConfigs } from '@/config';
import { AIMediaType } from '@/extensions/ai';
import { getRelayModels, getTaskRelayModels, getFalReferenceModel, getFalWanReferenceModel, FAL_KLING_REFERENCE_DEFAULT_MODEL, FAL_WAN_REFERENCE_DEFAULT_MODEL } from '@/shared/lib/ai-models';
import { getAllConfigs } from '@/shared/models/config';
import { getUuid } from '@/shared/lib/hash';
import { respData, respErr } from '@/shared/lib/resp';
import { createAITask, NewAITask } from '@/shared/models/ai_task';
import { getRemainingCredits } from '@/shared/models/credit';
import { getUserInfo } from '@/shared/models/user';
import { getAIService } from '@/shared/services/ai';
import { getVideoGenerationCost, getOmniVideoCost, getFalReferenceVideoCost, getFalWanReferenceVideoCost } from '@/shared/lib/video-cost';

export async function POST(request: Request) {
  try {
    let { provider, mediaType, model, prompt, options, scene, family } =
      await request.json();

    if (!provider || !mediaType || !model) {
      throw new Error('invalid params');
    }

    if (!prompt && !options) {
      throw new Error('prompt or options is required');
    }

    // fresh read: model gating, whitelist and billing keys must reflect admin
    // changes immediately (unstable_cache is per-isolate on Cloudflare)
    const configs = await getAllConfigs(true);
    const aiService = await getAIService(configs);
    // per-family model gating (server-side enforcement of the admin
    // multi-select in 业务素材): when the family has a non-empty checked list,
    // the requested model must be in it — blocks bypassing the dialog filter.
    // Unset/empty list = allow all (same fallback as the dialog).
    const familyId = typeof family === 'string' && /^[a-z0-9_]{1,64}$/.test(family) ? family : '';
    if (familyId) {
      let familyAllowed: string[] = [];
      const allowedRaw = configs[`viral_family_models_${familyId}`];
      if (allowedRaw) {
        try {
          const parsed = JSON.parse(allowedRaw);
          if (Array.isArray(parsed)) familyAllowed = parsed.filter((x: unknown) => typeof x === 'string');
        } catch { /* malformed list → treat as unset */ }
      }
      if (familyAllowed.length > 0 && !familyAllowed.includes(model)) {
        throw new Error('model is not allowed for this template family');
      }
    }
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
      // driving audio is a MiniMax-H3 capability (≤3 clips, 2-15s each; audio
      // cannot be the only reference — the image check above already enforces
      // at least one image). One admin-uploaded file for now.
      const isMinimaxModel = model === 'MiniMax-H3';
      const audios = options?.audio_input;
      if (audios !== undefined && audios !== null) {
        if (!isMinimaxModel) {
          throw new Error('Reference audio is only supported for MiniMax-H3');
        }
        if (!Array.isArray(audios) || audios.length < 1 || audios.length > 3) {
          throw new Error('Please provide up to three reference audio files');
        }
        for (const audioUrl of audios) validateUrl(audioUrl);
      }
      // gemini-omni models only accept 16:9 / 9:16 / auto
      const isOmniModel = model.toLowerCase().startsWith('gemini-omni');
      if (isOmniModel && options?.aspect_ratio && !['16:9', '9:16', 'auto'].includes(options.aspect_ratio)) {
        throw new Error('This model only supports 16:9, 9:16 or auto aspect ratio');
      }
      options = {
        image_input: images,
        // gemini-omni upstream rejects ANY video reference (verified 2026-10:
        // even clean self-produced clips fail with 400 invalid argument) —
        // drop the videos for Omni; other task-relay models receive whatever
        // the client sent (the client only includes the family reference
        // video when the admin configured one in 业务素材)
        ...(!isOmniModel && Array.isArray(videos) && videos.length ? { video_input: videos } : {}),
        ...(isMinimaxModel && Array.isArray(audios) && audios.length ? { audio_input: audios } : {}),
        duration: options?.duration,
        aspect_ratio: options?.aspect_ratio,
        resolution: options?.resolution,
      };
    } else if (provider === 'fal' && model === (configs.fal_kling_reference_model?.trim() || FAL_KLING_REFERENCE_DEFAULT_MODEL)) {
      // Kling O3 Pro Reference V2V — dedicated whitelist so the generic fal
      // image-to-video flow is untouched. Admin switch gates the model.
      const configured = getFalReferenceModel(configs);
      if (!configured || configured.value !== model) {
        throw new Error('model is not configured');
      }
      if (mediaType !== AIMediaType.VIDEO || scene !== 'video-to-video') {
        throw new Error('Kling O3 Pro Reference only supports video-to-video');
      }

      const storageOrigins = [configs.r2_domain, configs.s3_domain, configs.r2_endpoint, configs.s3_endpoint]
        .filter(Boolean).map((url: string) => new URL(url).origin);
      const allowedOrigins = [...storageOrigins, new URL(envConfigs.app_url).origin];
      const validateUrl = (rawUrl: string) => {
        const parsed = new URL(rawUrl);
        if (parsed.protocol !== 'https:' || parsed.username || parsed.password || !allowedOrigins.includes(parsed.origin)) {
          throw new Error('Reference material must come from a configured HTTPS domain');
        }
      };

      const videos = options?.video_input;
      if (!Array.isArray(videos) || videos.length !== 1 || typeof videos[0] !== 'string') {
        throw new Error('Please provide exactly one reference video for Kling O3 Pro Reference');
      }
      validateUrl(videos[0]);

      const images = options?.image_input;
      if (images !== undefined && images !== null) {
        if (!Array.isArray(images) || images.length < 1 || images.length > 4) {
          throw new Error('Please provide between one and four reference images');
        }
        for (const imageUrl of images) validateUrl(imageUrl);
      }

      const duration = Number(options?.duration);
      if (!Number.isInteger(duration) || duration < 3 || duration > 15) {
        throw new Error('Duration must be a whole number between 3 and 15 seconds');
      }
      if (options?.aspect_ratio && !['auto', '16:9', '9:16', '1:1'].includes(options.aspect_ratio)) {
        throw new Error('Aspect ratio must be auto, 16:9, 9:16 or 1:1');
      }

      options = {
        video_input: videos,
        ...(Array.isArray(images) && images.length ? { image_input: images } : {}),
        duration,
        aspect_ratio: options?.aspect_ratio || 'auto',
        keep_audio: options?.keep_audio !== false,
      };
    } else if (provider === 'fal' && model === (configs.fal_wan_reference_model?.trim() || FAL_WAN_REFERENCE_DEFAULT_MODEL)) {
      // Wan 3.0 Reference-to-Video — dedicated whitelist so the generic fal
      // image-to-video flow is untouched. Admin switch gates the model.
      const configured = getFalWanReferenceModel(configs);
      if (!configured || configured.value !== model) {
        throw new Error('model is not configured');
      }
      if (mediaType !== AIMediaType.VIDEO || scene !== 'video-to-video') {
        throw new Error('Wan 3.0 Reference only supports video-to-video');
      }

      const storageOrigins = [configs.r2_domain, configs.s3_domain, configs.r2_endpoint, configs.s3_endpoint]
        .filter(Boolean).map((url) => new URL(url).origin);
      const allowedOrigins = [...storageOrigins, new URL(envConfigs.app_url).origin];
      const validateUrl = (rawUrl: string) => {
        const parsed = new URL(rawUrl);
        if (parsed.protocol !== 'https:' || parsed.username || parsed.password || !allowedOrigins.includes(parsed.origin)) {
          throw new Error('Reference material must come from a configured HTTPS domain');
        }
      };

      const videos = options?.video_input;
      if (!Array.isArray(videos) || videos.length !== 1 || typeof videos[0] !== 'string') {
        throw new Error('Please provide exactly one reference video for Wan 3.0 Reference');
      }
      validateUrl(videos[0]);

      const images = options?.image_input;
      if (images !== undefined && images !== null) {
        if (!Array.isArray(images) || images.length < 1 || images.length > 10) {
          throw new Error('Please provide between one and ten reference images');
        }
        for (const imageUrl of images) validateUrl(imageUrl);
      }

      // reference audio (admin-uploaded family audio track) guides the
      // generated soundtrack; up to 5 clips totaling 15 seconds upstream
      const audios = options?.audio_input;
      if (audios !== undefined && audios !== null) {
        if (!Array.isArray(audios) || audios.length < 1 || audios.length > 5) {
          throw new Error('Please provide up to five reference audio files');
        }
        for (const audioUrl of audios) validateUrl(audioUrl);
      }

      const duration = Number(options?.duration);
      if (!Number.isInteger(duration) || duration < 2 || duration > 30) {
        throw new Error('Duration must be a whole number between 2 and 30 seconds');
      }
      if (options?.aspect_ratio && !['adaptive', '16:9', '4:3', '1:1', '3:4', '9:16'].includes(options.aspect_ratio)) {
        throw new Error('Aspect ratio must be adaptive, 16:9, 4:3, 1:1, 3:4 or 9:16');
      }
      if (options?.resolution && !['480p', '720p', '1080p'].includes(options.resolution)) {
        throw new Error('Resolution must be 480p, 720p or 1080p');
      }

      options = {
        video_input: videos,
        ...(Array.isArray(images) && images.length ? { image_input: images } : {}),
        ...(Array.isArray(audios) && audios.length ? { audio_input: audios } : {}),
        duration,
        aspect_ratio: options?.aspect_ratio || 'adaptive',
        resolution: options?.resolution || '720p',
        audio: options?.audio !== false,
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
        // Kling O3 Pro Reference bills per output second (admin-configured
        // credits/s); Wan 3.0 Reference bills per second by resolution tier
        // including input reference video seconds; other video-to-video
        // models keep the flat price
        const isFalReference =
          provider === 'fal' &&
          model === (configs.fal_kling_reference_model?.trim() || FAL_KLING_REFERENCE_DEFAULT_MODEL);
        const isFalWanReference =
          provider === 'fal' &&
          model === (configs.fal_wan_reference_model?.trim() || FAL_WAN_REFERENCE_DEFAULT_MODEL);
        costCredits = isFalReference
          ? getFalReferenceVideoCost(options?.duration, configs)
          : isFalWanReference
            ? getFalWanReferenceVideoCost(options?.resolution, options?.duration, configs)
            : 10;
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
