'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera, Download, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link, useRouter } from '@/core/i18n/navigation';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/shared/components/ui/dialog';
import { Progress } from '@/shared/components/ui/progress';
import { useAppContext } from '@/shared/contexts/app';
import { useIsMobile } from '@/shared/hooks/use-mobile';
import { getRelayModels, getTaskRelayModels, getFalReferenceModel, getFalWanReferenceModel, getFalKlingV4ReferenceModel, getBaiduSeedanceModel, BAIDU_SEEDANCE_MODEL } from '@/shared/lib/ai-models';
import { track } from '@/shared/lib/analytics';
import { TemplateDef } from './templates';
import { StarterPackDialog } from './starter-pack-dialog';
import { getVideoGenerationCost, getOmniVideoCost, getFalReferenceVideoCost, getFalWanReferenceVideoCost, getFalKlingV4VideoCost } from '@/shared/lib/video-cost';

const defaults = [
  { value: 'google/veo-3.1', label: 'Veo 3.1 · Replicate', provider: 'replicate' },
  { value: 'openai/sora-2', label: 'Sora 2 · Replicate', provider: 'replicate' },
  { value: 'fal-ai/wan-pro/image-to-video', label: 'Wan Pro · Fal', provider: 'fal' },
  { value: 'sora-2-pro-image-to-video', label: 'Sora 2 Pro · Kie', provider: 'kie' },
];
function urls(raw: string | null): string[] {
  try {
    const data = JSON.parse(raw || '{}');
    const output = data.videos ?? data.output ?? data.video ?? data.data ?? [];
    return (Array.isArray(output) ? output : [output]).map((v: any) => typeof v === 'string' ? v : v?.url ?? v?.uri ?? v?.videoUrl ?? v?.src).filter((v: unknown): v is string => typeof v === 'string' && /^https?:\/\//.test(v));
  } catch { return []; }
}
export function TemplateGenerator({ template, open, onOpenChange, allowPromptEdit = false, preferModel, embedded = false }: { template: TemplateDef; open: boolean; onOpenChange: (open: boolean) => void; allowPromptEdit?: boolean; preferModel?: string; embedded?: boolean }) {
  const zh = useLocale() === 'zh';
  const text = (en: string, cn: string) => zh ? cn : en;
  const { user, configs, setIsShowSignModal, fetchUserCredits, isCheckSign } = useAppContext();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [showStarterPack, setShowStarterPack] = useState(false);
  // The embedded form is in the server HTML. AUTH_SECRET exists only on the
  // server, so isCheckSign starts true there and false in the browser. Hold
  // the account-check label until after mount so both renders match.
  const [embedHydrated, setEmbedHydrated] = useState(false);
  useEffect(() => {
    if (embedded) setEmbedHydrated(true);
  }, [embedded]);
  const checkingAccount = embedded ? !embedHydrated || isCheckSign : isCheckSign;
  const relay = getRelayModels(configs, 'video').filter((m) => m.scenes.includes('image-to-video'));
  const taskRelay = getTaskRelayModels(configs, 'video').filter((m) => m.scenes.includes('image-to-video'));
  const falRefModel = getFalReferenceModel(configs);
  const falRefList = falRefModel ? [falRefModel] : [];
  const falWanModel = getFalWanReferenceModel(configs);
  const falWanList = falWanModel ? [falWanModel] : [];
  const falV4Model = getFalKlingV4ReferenceModel(configs);
  const falV4List = falV4Model ? [falV4Model] : [];
  const baiduSeedanceModel = getBaiduSeedanceModel(configs);
  const baiduSeedanceList = baiduSeedanceModel ? [baiduSeedanceModel] : [];
  const relayList = configs.media_relay_enabled === 'true' ? relay : [];
  const taskRelayList = configs.task_relay_enabled === 'true' ? taskRelay : [];
  // per-family model gating: the admin multi-select (viral_family_models_*)
  // stores a JSON array of model values; only checked models show in the
  // dialog and are accepted by the generate route. Empty/unset → show all
  // (compatibility fallback for families the admin has not configured yet).
  const family = template.family || (template.id.startsWith('party-') ? 'burning_bridges' : 'hotel');
  const familyAllowedModels: string[] = (() => {
    const raw = (configs[`viral_family_models_${family}`] as string | undefined)?.trim();
    if (!raw) return [];
    try { const v = JSON.parse(raw); return Array.isArray(v) ? v.filter((x: unknown) => typeof x === 'string') : []; } catch { return []; }
  })();
  const familyDefaultModel = (configs[`viral_family_default_model_${family}`] as string | undefined)?.trim() || '';
  const models = relayList.length || taskRelayList.length || falRefList.length || falWanList.length || falV4List.length || baiduSeedanceList.length ? [...relayList, ...taskRelayList, ...falRefList, ...falWanList, ...falV4List, ...baiduSeedanceList] : defaults;
  // family gating: only admin-checked models are selectable for this family;
  // if the checked list no longer intersects the connected models (e.g. a
  // relay source was disabled after checking), fall back to the full list so
  // the dialog stays usable — the generate route still enforces the list
  const gatedModels = models.filter((m) => familyAllowedModels.includes(m.value));
  const allowedModels = gatedModels.length ? gatedModels : models;
  const [selected, setSelected] = useState('');
  const selectedModel = allowedModels.find((m) => `${m.provider}:${m.value}` === selected);
  const model = selectedModel
    ?? (preferModel ? allowedModels.find((m) => m.value.toLowerCase() === preferModel.toLowerCase()) : undefined)
    ?? (familyDefaultModel ? allowedModels.find((m) => m.value === familyDefaultModel) : undefined)
    ?? allowedModels.find((m) => m.value === 'grok-imagine-video-1.5')
    ?? allowedModels[0];
  const unsupported1080 = model?.value === 'grok-imagine-video-1.5';
  const single = model?.provider === 'media-relay' && model.value !== 'grok-imagine-video-1.5';
  const isTaskRelay = model?.provider === 'task-relay';
  // fal / baidu Kling O3 Pro Reference: template motion video + user photos, billed per second
  const isFalRef = ['fal', 'baidu'].includes(model?.provider || '') && !!falRefModel && model.value === falRefModel.value;
  // fal / baidu Wan 3.0 Reference: same family behavior, plus resolution tiers.
  // Upstream allows 2-30s; the dialog hides 20s and 30s until we turn them back on.
  const isFalWan = ['fal', 'baidu'].includes(model?.provider || '') && !!falWanModel && model.value === falWanModel.value;
  // fal Kling v4 Reference: fal channel only, 720p/1080p tiers, 3-30s, no audio switch — audio is generated natively
  const isFalV4 = model?.provider === 'fal' && !!falV4Model && model.value === falV4Model.value;
  // baidu Seedance 2.5: net-new model, same dialog behavior as the Wan reference
  const isBaiduSeedance = model?.provider === 'baidu' && model.value === BAIDU_SEEDANCE_MODEL;
  // gemini-omni-1.1-flash: 3-10s, 360p/720p/1080p, reference clips capped at 10s
  const isOmni = isTaskRelay && !!model && model.value.toLowerCase().startsWith('gemini-omni');
  // Kling reference: output resolution follows the reference video — show only 720p
  const resolutionOptions = isFalRef
    ? ['720p']
    : isFalV4
      ? ['720p', '1080p']
      : isFalWan || isBaiduSeedance
      ? ['480p', '720p', '1080p']
      : !isTaskRelay
        ? ['480p', '720p', '1080p']
        : isOmni
          ? ['360p', '720p', '1080p']
          : model!.value.toLowerCase() === 'minimax-h3' ? ['768P', '2K'] : ['720p'];
  // Families whose template videos have a fixed length: only that duration
  // option is offered, everything else stays hidden.
  const familyFixedDurations: Record<string, number[]> = {
    cat_clapping: [4, 6],
    baba_dance: [20, 30],
    tiny_desk_outstanding: [15],
    window_peeper: [15],
    bby_wow: [10],
    pedra_do_sal: [15],
    hit_the_road_dude: [10],
    wassup_in_a_minute: [10],
  };
  const durationOptions =
    familyFixedDurations[family] ??
    (isFalV4 || isBaiduSeedance
      ? [5, 10, 15, 20, 30]
      : isFalWan ? [5, 10, 15] : isFalRef ? [3, 5, 8, 10, 12, 15] : isOmni ? [4, 6, 8, 10] : [8, 12, 15]);
  // Omni only supports 16:9 / 9:16 / auto; Kling reference + v4 add auto + 1:1;
  // Wan reference / Seedance use "adaptive" (shown as auto) + fixed ratios
  const ratioOptions = isFalWan || isBaiduSeedance ? ['adaptive', '16:9', '9:16', '1:1'] : isFalRef || isFalV4 ? ['auto', '16:9', '9:16', '1:1'] : isOmni ? ['16:9', '9:16'] : ['16:9', '9:16', '1:1'];
  const defaultKeepAudio = configs.fal_kling_reference_keep_audio !== 'false';
  const [keepAudio, setKeepAudio] = useState(defaultKeepAudio);
  // family-level admin config: all templates of a family share one prompt and
  // one reference video (hotel lobby family vs burning bridges family);
  // `family` and the model-gating parse live above (before the model list)
  const familyRefVideo = (configs[`viral_family_reference_video_${family}`] as string | undefined)?.trim() || '';
  const familyRefAudio = (configs[`viral_family_reference_audio_${family}`] as string | undefined)?.trim() || '';
  // admin switch: allow the user to pick model-generated audio for Wan 3.0
  // (off = reference audio or no audio only)
  const wanAllowGenerated = configs.fal_wan_reference_allow_generated_audio !== 'false';
  // TEMP DEBUG (remove after testing): request-payload viewer state
  const [debugOpen, setDebugOpen] = useState(false);
  const [debugPayload, setDebugPayload] = useState('');
  const effectivePrompt = (configs[`viral_family_prompt_${family}`] as string | undefined)?.trim() || template.prompt;
  // prompt is sent to the model VERBATIM — no hidden suffixes are appended.
  // The admin-configured family prompt (or the user's own edit) is the whole
  // instruction; casting/motion guidance belongs in the admin prompt itself.
  const maxSlots = template.slots ?? 2;
  const previewVideo = template.previewVideo === undefined ? `/templates/${template.id}.mp4` : template.previewVideo;
  const defaultImages = template.images ? [...template.images] : [`/templates/frames/${template.id}-a.jpg`, `/templates/frames/${template.id}-b.jpg`];
  const [images, setImages] = useState<(string | null)[]>(defaultImages);
  const [custom, setCustom] = useState<boolean[]>(defaultImages.map(() => false));
  const imageCacheKey = `viral-gen-images:${template.id}`;
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(imageCacheKey);
      if (!raw) return;
      const saved = JSON.parse(raw) as { images?: (string | null)[]; custom?: boolean[] };
      if (Array.isArray(saved.images) && saved.images.some(Boolean)) {
        setImages(saved.images);
        if (Array.isArray(saved.custom)) setCustom(saved.custom);
      }
    } catch {
      // ignore restore errors
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template.id]);
  useEffect(() => {
    if (!custom.some(Boolean)) return;
    try {
      sessionStorage.setItem(imageCacheKey, JSON.stringify({ images, custom }));
    } catch {
      // ignore quota errors
    }
  }, [images, custom, imageCacheKey]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (new URLSearchParams(window.location.search).get('checkout') !== 'success') return;
    void fetchUserCredits();
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [fetchUserCredits]);
  const [uploading, setUploading] = useState<boolean[]>(defaultImages.map(() => false));
  const [promptDraft, setPromptDraft] = useState('');
  // keep the editable prompt in sync with the template / config override
  useEffect(() => {
    if (embedded || open) setPromptDraft(effectivePrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, embedded, template.id]);
  const prompt = allowPromptEdit && promptDraft.trim() ? promptDraft.trim() : effectivePrompt;
  const [ratio, setRatio] = useState(['bulin_47', 'ozil_goal', 'cat_clapping', 'hit_the_road_dude', 'pedra_do_sal', 'bby_wow', 'window_peeper', 'tiny_desk_outstanding', 'baba_dance'].includes(family) ? '9:16' : '16:9');
  const [resolution, setResolution] = useState('720p');
  const [duration, setDuration] = useState(family === 'cat_clapping' ? 4 : 8);
  // transient-safe values: while switching models the state may briefly hold the
  // previous model's tier (the reset effects run after render) — cost functions
  // throw on invalid tiers, so always compute from clamped values, never in-render raw state
  const activeRatio = ratioOptions.includes(ratio) ? ratio : ratioOptions[0];
  const activeResolution = resolutionOptions.includes(resolution) ? resolution : resolutionOptions[0];
  const activeDuration = durationOptions.includes(duration) ? duration : durationOptions[0];
  // keep the selected ratio / resolution / duration valid for the current model
  useEffect(() => {
    if (model && !ratioOptions.includes(ratio)) setRatio(ratioOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model?.provider, model?.value]);
  useEffect(() => {
    if (model && !resolutionOptions.includes(resolution)) setResolution(resolutionOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model?.provider, model?.value]);
  // plan entitlement: starter-tier / free users are capped at 480p/720p —
  // demote an already-selected HD tier once credits (and hdAllowed) load
  const hdAllowed = user?.credits?.hdAllowed !== false;
  const isHdTier = (v: string) => v === '1080p' || v === '2K';
  useEffect(() => {
    if (!hdAllowed && isHdTier(resolution)) {
      setResolution(resolutionOptions.find((v) => !isHdTier(v)) ?? resolutionOptions[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hdAllowed, resolution, model?.provider, model?.value]);
  useEffect(() => {
    if (model && !durationOptions.includes(duration)) setDuration(durationOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model?.provider, model?.value]);
  const costTier = activeResolution === '768P' ? '720p' : activeResolution === '2K' ? '1080p' : activeResolution;
  const costCredits = isFalRef
    ? getFalReferenceVideoCost(activeDuration, configs)
    : isFalV4
      ? getFalKlingV4VideoCost(activeResolution, activeDuration, configs)
      : isFalWan || isBaiduSeedance
      ? getFalWanReferenceVideoCost(activeResolution, activeDuration, configs)
      : isOmni
        ? getOmniVideoCost(activeResolution, activeDuration, configs)
        : getVideoGenerationCost(costTier, activeDuration, configs);
  const [busy, setBusy] = useState(false);
  const [task, setTask] = useState<{ id: string; start: number } | null>(null);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'uploading' | 'pending' | 'processing' | null>(null);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [previewMuted, setPreviewMuted] = useState(true);
  const previewRef = useRef<HTMLVideoElement | null>(null);
  const resultRef = useRef<HTMLVideoElement | null>(null);
  // autoplay the finished video — browsers allow sound playback because the
  // user clicked "Generate" (user activation); fall back to muted autoplay
  // if the engine still refuses
  useEffect(() => {
    if (!result) return;
    const el = resultRef.current;
    if (!el) return;
    el.play().catch(() => {
      el.muted = true;
      el.play().catch(() => {});
    });
  }, [result]);
  const togglePreviewSound = () => {
    setPreviewMuted((m) => {
      const next = !m;
      const el = previewRef.current;
      if (el) { el.muted = next; if (!next) el.play().catch(() => {}); }
      return next;
    });
  };
  const lock = useRef(false);
  const creditsRef = useRef(fetchUserCredits);
  creditsRef.current = fetchUserCredits;
  // progress creeps smoothly toward the cap of the current stage between polls
  useEffect(() => {
    if (!busy || !stage) return;
    const cap = stage === 'processing' ? 92 : stage === 'pending' ? 45 : 20;
    const timer = setInterval(() => setProgress((p) => Math.min(cap, p + Math.max(0.4, (cap - p) * 0.035))), 700);
    return () => clearInterval(timer);
  }, [busy, stage]);
  useEffect(() => {
    if (!task) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        if (Date.now() - task.start > 900000) throw new Error(text('Timed out. Check your task history before retrying.', '等待超时，请先在生成记录中查看任务，避免重复扣费。'));
        const response = await fetch('/api/ai/query', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ taskId: task.id }) });
        const payload = await response.json();
        if (!response.ok || payload.code !== 0) throw new Error(payload.message || 'Query failed');
        if (cancelled) return;
        const data = payload.data;
        if (data.status === 'pending') { setStage((s) => (s === 'processing' ? s : 'pending')); setProgress((p) => Math.max(p, 30)); }
        if (data.status === 'processing') { setStage('processing'); setProgress((p) => Math.max(p, 55)); }
        if (data.status === 'failed' || data.status === 'canceled') {
          const rawError = String((data.taskInfo as { errorMessage?: string } | null)?.errorMessage || '');
          const rejectedReference = /invalid argument|HTTP 400|real person|sensitive content|privacy|content policy/i.test(rawError);
          throw new Error(rejectedReference
            ? text('The model rejected this request — the reference material likely contains restricted content such as real people, movie characters or celebrity faces. Try your own photos or switch to another model. Credits were refunded.', '模型拒绝了本次请求——参考素材可能包含受限制内容（如真人、影视角色或名人面孔）。请更换为你自己的照片，或改用其他模型。积分已退回。')
            : text('Generation canceled or failed. Credits were refunded.', '生成已取消或失败，积分已退回。'));
        }
        if (data.status === 'success') {
          const video = [...urls(data.taskInfo), ...urls(data.taskResult)][0];
          if (!video) throw new Error(text('No video returned.', '模型没有返回视频。'));
          track('render_success', {
            template: family,
            model: model?.value,
            credits: costCredits,
            render_seconds: Math.round((Date.now() - task.start) / 1000),
          });
          setProgress(100); setStage(null);
          setResult(video); setTask(null); setBusy(false); lock.current = false;
          void creditsRef.current();
          return;
        }
        timer = setTimeout(poll, 15000);
      } catch (e) {
        if (cancelled) return;
        track('render_failed', {
          template: family,
          reason: (e instanceof Error ? e.message : 'query failed').slice(0, 120),
        });
        setError(e instanceof Error ? e.message : 'Query failed'); setTask(null); setBusy(false); setStage(null); setProgress(0); lock.current = false;
        void creditsRef.current();
      }
    };
    void poll();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [task, zh]);
  async function upload(file: File | undefined, index: number) {
    if (!file) return;
    if (!user) { track('signup_wall', { template: family, surface: 'upload' }); onOpenChange(false); setIsShowSignModal(true); return; }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) {
      setError(text('Use a JPG, PNG or WebP image under 10 MB.', '请上传 10 MB 以内的 JPG、PNG 或 WebP 图片。')); return;
    }
    setUploading((s) => s.map((v, i) => i === index ? true : v)); setError('');
    try {
      const body = new FormData(); body.append('files', file);
      const response = await fetch('/api/storage/upload-image', { method: 'POST', body });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.urls?.[0]) throw new Error(payload.message || 'Upload failed');
      setImages((s) => s.map((v, i) => i === index ? payload.data.urls[0] : v));
      setCustom((s) => s.map((v, i) => i === index ? true : v));
      track('upload_photo', { template: family, slot: index + 1 });
    } catch (e) { setError(e instanceof Error ? e.message : 'Upload failed'); }
    finally { setUploading((s) => s.map((v, i) => i === index ? false : v)); }
  }
  const uploadedCache = useRef<Record<string, string>>({});
  async function ensureUploadable(src: string): Promise<string> {
    if (/^https?:\/\//.test(src)) return src;
    if (uploadedCache.current[src]) return uploadedCache.current[src];
    const blob = await (await fetch(src)).blob();
    const file = new File([blob], `${template.id}-${src.endsWith('-a.jpg') ? 'a' : 'b'}.jpg`, { type: blob.type || 'image/jpeg' });
    const body = new FormData(); body.append('files', file);
    const response = await fetch('/api/storage/upload-image', { method: 'POST', body });
    const payload = await response.json();
    if (!response.ok || payload.code !== 0 || !payload.data?.urls?.[0]) throw new Error(payload.message || 'Upload failed');
    uploadedCache.current[src] = payload.data.urls[0];
    return payload.data.urls[0];
  }
  async function generate() {
    // 1) must be signed in — reuse the framework sign modal
    if (!user) { track('signup_wall', { template: family, surface: 'generator' }); if (!embedded) onOpenChange(false); setIsShowSignModal(true); return; }
    if (lock.current || !model) return;
    // 2) credits / plan check — not enough: send the user to the pricing page
    if ((user.credits?.remainingCredits ?? 0) < costCredits) {
      track('insufficient_credits', {
        template: family,
        cost_credits: costCredits,
        balance: user.credits?.remainingCredits ?? 0,
        surface: isMobile ? 'mobile_pack' : 'pricing',
      });
      if (isMobile) {
        setShowStarterPack(true);
        return;
      }
      setError(text('Insufficient credits. Taking you to the pricing page…', '积分不足，正在前往购买页…'));
      setTimeout(() => router.push('/pricing'), 1200);
      return;
    }
    if (unsupported1080 && activeResolution === '1080p') { setError(text('This model supports up to 720p. Choose another model for 1080p.', '当前模型最高支持 720p，1080p 请切换其他模型。')); return; }
    if (!hdAllowed && isHdTier(activeResolution)) { setError(text('1080p export is available on the Popular plan and above — your plan supports 480p and 720p.', '1080p 导出为 Popular 及以上方案权益，当前方案支持 480p 和 720p。')); return; }
    const usable = images.slice(0, maxSlots);
    // wassup_in_a_minute: 1–4 photos, position-free — a row of as many
    // swaying characters as the uploaded photos; at least one is required.
    const input = single ? usable.slice(0, 1) : family === 'wassup_in_a_minute' ? usable.filter(Boolean) : usable;
    if (!input.length || input.some((v) => !v)) { setError(text('Please upload the reference images.', '请先上传参考图片。')); return; }
    // 2b) reference models (Kling / Wan / Baidu Seedance): the family's
    // admin-configured reference video is required — never fall back to a
    // built-in clip silently
    if ((isFalRef || isFalWan || isFalV4 || isBaiduSeedance) && !familyRefVideo) {
      setError(text('This template has no reference video configured yet. Please try again later.', '该模板尚未配置参考视频，请稍后再试。'));
      return;
    }
    // 3) all checks passed — start generation
    lock.current = true; setBusy(true); setError(''); setResult('');
    setProgress(8); setStage('uploading');
    try {
      const resolved = await Promise.all(input.map((v) => ensureUploadable(v!)));
      setProgress(18); setStage('pending');
      // task-relay models: the family's admin-configured reference video
      // (业务素材) is the single motion-reference source — configured means
      // passed, missing means photos + prompt only (no built-in fallback).
      // Omni caps reference clips at 10s, but the 12ai Omni channel rejects
      // ANY video reference (verified 2026-10: even clean clips fail with
      // "invalid argument"), so Omni always runs photo-only.
      // fal reference models (Kling / Wan) use exactly one motion video: the
      // family's admin-configured reference video (validated above), and
      // replace the people with the user photos.
      const body = buildPayload(resolved);
      if (!body) throw new Error('No model selected');
      const response = await fetch('/api/ai/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.id) throw new Error(payload.message || 'Generation failed');
      track('generate_submit', {
        template: family,
        model: model.value,
        resolution: activeResolution,
        duration: activeDuration,
        credits: costCredits,
      });
      setTask({ id: payload.data.id, start: Date.now() });
      void creditsRef.current();
    } catch (e) { setError(e instanceof Error ? e.message : 'Generation failed'); setBusy(false); setStage(null); setProgress(0); lock.current = false; }
  }
  // TEMP DEBUG (remove after testing): builds the exact body posted to
  // /api/ai/generate. generate() calls it with the uploaded image URLs; the
  // debug panel calls it with the pre-upload image paths — everything else
  // (prompt, reference video/audio, flags) is byte-identical to the request.
  function buildPayload(resolved: string[]) {
    if (!model) return null;
    const videoInput = isFalRef || isFalWan || isFalV4 || isBaiduSeedance
      ? [familyRefVideo]
      : isTaskRelay && !isOmni && familyRefVideo
        ? [familyRefVideo]
        : [];
    const isMinimax = isTaskRelay && model.value === 'MiniMax-H3';
    const audioRef = isMinimax && configs.minimax_h3_reference_audio_enabled !== 'false' ? familyRefAudio : '';
    const scene = isFalRef || isFalWan || isFalV4 || isBaiduSeedance ? 'video-to-video' : 'image-to-video';
    // Wan 3.0 audio: when the admin switch forbids generated audio and the
    // family has no reference audio, the audio flag is forced off.
    const wanAudioOn = familyRefAudio ? keepAudio : wanAllowGenerated && keepAudio;
    const options: Record<string, unknown> = isFalRef
      ? { image_input: resolved, video_input: videoInput, duration: activeDuration, aspect_ratio: activeRatio, keep_audio: keepAudio }
      : isFalWan
        ? { image_input: resolved, video_input: videoInput, ...(familyRefAudio ? { audio_input: [familyRefAudio] } : {}), duration: activeDuration, aspect_ratio: activeRatio, resolution: activeResolution, audio: wanAudioOn }
        : isFalV4
          ? { image_input: resolved, video_input: videoInput, duration: activeDuration, aspect_ratio: activeRatio, resolution: activeResolution }
          : isBaiduSeedance
          ? { image_input: resolved, video_input: videoInput, duration: activeDuration, aspect_ratio: activeRatio, resolution: activeResolution }
          : { image_input: resolved, ...(videoInput.length ? { video_input: videoInput } : {}), ...(audioRef ? { audio_input: [audioRef] } : {}), duration: activeDuration, aspect_ratio: activeRatio, resolution: activeResolution };
    return { mediaType: 'video', scene, provider: model.provider, model: model.value, prompt, options, family };
  }
  async function download() {
    setDownloading(true);
    try {
      const response = await fetch(`/api/proxy/file?url=${encodeURIComponent(result)}`);
      if (!response.ok) throw new Error('Download failed');
      const url = URL.createObjectURL(await response.blob());
      const a = document.createElement('a'); a.href = url; a.download = `viralreel-${template.id}.mp4`; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) { setError(e instanceof Error ? e.message : 'Download failed'); }
    finally { setDownloading(false); }
  }
  const liveLabel = (value: string) => {
    const base = value.replace(/[.…]+$/u, '');
    return <>{base}<span className="gp-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span></>;
  };
  const panel = <div className="gen-modal">
    <div className="gen-left">{embedded ? <h2>{template.name[zh ? 1 : 0]}</h2> : <DialogTitle>{template.name[zh ? 1 : 0]}</DialogTitle>}<div className="gp-video">{result ? <video ref={resultRef} src={result} controls autoPlay playsInline /> : previewVideo ? <video ref={previewRef} src={previewVideo} muted={previewMuted} loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}/> : <div className="gp-placeholder" style={{ width: '100%', height: '100%', minHeight: 380, display: 'grid', placeItems: 'center', background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }} role="img" aria-label={text('Preview media not available yet', '预览媒体暂未提供')}><span style={{ color: '#fff', background: '#0008', padding: '8px 14px', borderRadius: 8 }}>{text('Preview coming soon', '预览即将提供')}</span></div>}{!result && <><span className="gp-badge">{previewVideo ? text('TEMPLATE PREVIEW', '模板示意') : text('PREVIEW COMING SOON', '预览待上线')}</span>{previewVideo && <span className="gp-sound" role="button" tabIndex={0} aria-label={previewMuted ? text('Unmute video', '开启声音') : text('Mute video', '关闭声音')} onClick={togglePreviewSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') togglePreviewSound(); }}>{previewMuted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span>}</>}</div>{result && <div className="result-actions"><button className="btn btn-primary" disabled={downloading} onClick={download}><Download size={16}/>{text('Download', '下载视频')}</button></div>}</div>
    <div className="gen-right"><p className="g-label">{text('Upload Image', '上传照片')}</p><fieldset disabled={busy} className="border-0 p-0"><div className="up-row">{Array.from({ length: maxSlots }).map((_, index) => <label key={index} className={`up-card ${images[index] ? 'upfilled' : ''}`} style={single && index > 0 ? { opacity: .4, pointerEvents: 'none' } : undefined}><input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" disabled={uploading[index] || (single && index === 1)} onChange={(e) => { void upload(e.target.files?.[0], index); e.target.value = ''; }}/><div className="up-ph">{images[index] ? <img src={images[index]!} alt={text('Reference image', '参考图片')}/> : <Camera size={28}/>}</div><span className="up-txt"><b>{single ? text('Reference image', '参考图片') : maxSlots === 1 ? text(family === 'bulin_47' || family === 'ozil_goal' || family === 'hit_the_road_dude' ? 'Your photo' : family === 'cat_clapping' ? 'Your cat' : 'Main dancer photo', family === 'bulin_47' || family === 'ozil_goal' || family === 'hit_the_road_dude' ? '你的照片' : family === 'cat_clapping' ? '你的猫' : '领舞主角照片') : family === 'cat_clapping' ? text(index === 0 ? 'Your photo' : 'Your cat', index === 0 ? '你的照片' : '你的猫') : family === 'tiny_desk_outstanding' ? text(['Center Lead', 'Left Role', 'Right Role'][index] ?? `Performer ${index + 1}`, ['中间主角', '左边角色', '右边角色'][index] ?? `主角 ${index + 1}`) : family === 'baba_dance' ? text(['Left Dancer', 'Right Dancer'][index] ?? `Dancer ${index + 1}`, ['左舞者', '右舞者'][index] ?? `舞者 ${index + 1}`) : family === 'wassup_in_a_minute' ? text(`Character ${index + 1}`, `角色 ${index + 1}`) : text(`Performer ${index + 1}`, `主角 ${index === 0 ? 'A' : 'B'}`)}</b><small>{uploading[index] ? text('Uploading…', '上传中…') : images[index] ? (custom[index] ? text('uploaded · tap to replace', '已上传 · 点击更换') : text('template cast · tap to replace', '模板角色 · 点击更换')) : text('tap to upload', '点击上传')}</small></span></label>)}</div>
    {allowPromptEdit && <div className="prompt-edit"><p className="g-label">{text('Prompt', '文字提示词')}</p><textarea className="prompt-input" rows={4} value={promptDraft} onChange={(e) => setPromptDraft(e.target.value)} placeholder={text('Describe the scene or how to cast your photo — the template prompt is pre-filled.', '描述场景或如何使用你的照片——已预填模板提示词。')}/><p className="notice">{text('The template prompt is pre-filled. Add casting notes like "put my dad in the suit as the main dancer".', '已预填模板提示词，可追加说明，例如"把照片里的爸爸换成领舞者、穿上西装"。')}</p></div>}
    {(family !== 'tiny_desk_outstanding' && (isFalRef || (isFalWan && (familyRefAudio || wanAllowGenerated)))) && <div className="param-row"><div className="seg" aria-label={text('Audio', '音频')}><button type="button" aria-pressed={keepAudio} className={keepAudio ? 'sel' : ''} onClick={() => setKeepAudio((v) => !v)}>{keepAudio ? (isFalWan ? (familyRefAudio ? text('Use reference audio', '使用参考音频') : text('Generate audio', '生成音频')) : text('Keep original audio', '保留参考视频原声')) : text('No audio', '不带原声')}</button></div></div>}
    <div className="param-row"><div className="seg" aria-label={text('Aspect ratio', '画幅比例')}>{ratioOptions.map((v) => <button key={v} aria-pressed={activeRatio === v} className={activeRatio === v ? 'sel' : ''} onClick={() => setRatio(v)}>{v === 'adaptive' ? text('auto', '自动') : v}</button>)}</div><div className="seg" aria-label={text('Resolution', '分辨率')}>{resolutionOptions.map((v) => { const hdLocked = isHdTier(v) && !hdAllowed; const modelLocked = !isTaskRelay && v === '1080p' && unsupported1080; return <button key={v} disabled={hdLocked || modelLocked} title={hdLocked ? text('1080p is available on the Popular plan and above', '1080p 为 Popular 及以上方案权益') : modelLocked ? text('This model supports up to 720p', '此模型最高支持720p') : undefined} aria-pressed={activeResolution === v} className={activeResolution === v ? 'sel' : ''} onClick={() => setResolution(v)}>{v}</button>; })}</div><div className="seg" aria-label={text('Duration', '视频时长')}>{durationOptions.map((v) => <button key={v} aria-pressed={activeDuration === v} className={activeDuration === v ? 'sel' : ''} onClick={() => setDuration(v)}>{text(`${v}s`, `${v} 秒`)}</button>)}</div></div>
    {configs.viral_show_model_selector !== 'false' && <details className="advanced"><summary>{text('Model', '模型')}</summary><label>{text('Model', '模型')}<select value={model ? `${model.provider}:${model.value}` : ''} onChange={(e) => setSelected(e.target.value)}>{allowedModels.map((m) => <option key={`${m.provider}:${m.value}`} value={`${m.provider}:${m.value}`}>{m.label}</option>)}</select></label></details>}</fieldset>
    <button className="btn-gen" disabled={busy || checkingAccount || uploading.some(Boolean) || !model || !prompt.trim()} onClick={generate}>{checkingAccount ? text('Checking account…', '登录状态检查中…') : busy ? liveLabel(text('Generating…', '生成中…')) : text('Generate', '立即生成')}</button><p className="gen-hint">{text('Minimum image resolution: 240×240 or above', '图片分辨率最低要求 240×240 以上')}</p>{busy && (() => { const label = stage === 'uploading' ? text('Uploading reference photos…', '正在上传参考照片…') : stage === 'pending' ? text('Waiting in queue…', '排队等待模型…') : text('Generating your video…', '正在生成视频…'); return <div className="gen-progress" role="status"><div className="gp-row"><span>{liveLabel(label)}</span><b>{Math.round(progress)}%</b></div><Progress value={progress} className="gp-bar"/><p className="gp-hint">{text('Video generation usually takes 2–3 minutes. Please keep this window open and wait patiently.', '视频生成通常需要 2-3 分钟，请耐心等待，不要关闭当前窗口。')}</p></div>; })()}<p className="credits">{text(`This generation = ${costCredits} credits`, `本次生成 = ${costCredits} 积分`)}{family === 'baba_dance' && ` · ${text('the full video is 30s — the Popular credit pack is recommended', '本视频完整版共 30s，建议购买 Popular 积分包')}`}{user && ` · ${text('Balance', '余额')} ${user.credits?.remainingCredits ?? 0}`}</p>{!model && <p className="error">{text('No image-to-video model configured.', '尚未配置图生视频模型。')}</p>}{error && <p role="alert" className="error">{error}</p>}<div className="result-actions"><Link className="btn btn-outline" href="/activity/ai-tasks">{text('My generations', '生成记录')}</Link><Link className="btn btn-outline" href="/pricing">{text('Get credits', '购买积分')}</Link></div>
    {configs.debug_show_request_payload === 'true' && <div className="result-actions"><button type="button" className="btn btn-outline" style={{ fontSize: 12, opacity: .7 }} onClick={() => { if (debugOpen) { setDebugOpen(false); return; } setDebugPayload(JSON.stringify(buildPayload(images.slice(0, maxSlots).filter(Boolean) as string[]), null, 2)); setDebugOpen(true); }}>{text('Debug: request payload', '调试：查看 Request 参数')}</button></div>}
    {configs.debug_show_request_payload === 'true' && debugOpen && <pre style={{ maxHeight: 260, overflow: 'auto', fontSize: 11, lineHeight: 1.5, background: 'rgba(127,127,127,.12)', padding: '8px 10px', borderRadius: 8, whiteSpace: 'pre-wrap', wordBreak: 'break-all', textAlign: 'left', margin: 0 }}>{debugPayload}</pre>}
    </div></div>;
  const starter = (
    <StarterPackDialog
      open={showStarterPack}
      onOpenChange={setShowStarterPack}
      costCredits={costCredits}
      balance={user?.credits?.remainingCredits ?? 0}
    />
  );
  if (embedded) return <><div id="generator" className="viral-dialog viral-embed">{panel}</div>{starter}</>;
  return <><Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="viral-dialog"><DialogDescription className="sr-only">{text('Create a video from your reference photos', '上传参考照片生成视频')}</DialogDescription>{panel}</DialogContent></Dialog>{starter}</>;
}
