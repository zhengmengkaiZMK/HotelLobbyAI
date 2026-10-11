'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera, Download, Volume2, VolumeX } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link, useRouter } from '@/core/i18n/navigation';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/shared/components/ui/dialog';
import { Progress } from '@/shared/components/ui/progress';
import { useAppContext } from '@/shared/contexts/app';
import { getRelayModels, getTaskRelayModels } from '@/shared/lib/ai-models';
import { TemplateDef } from './templates';
import { getVideoGenerationCost, getOmniVideoCost } from '@/shared/lib/video-cost';

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
export function TemplateGenerator({ template, open, onOpenChange, allowPromptEdit = false, preferModel }: { template: TemplateDef; open: boolean; onOpenChange: (open: boolean) => void; allowPromptEdit?: boolean; preferModel?: string }) {
  const zh = useLocale() === 'zh';
  const text = (en: string, cn: string) => zh ? cn : en;
  const { user, configs, setIsShowSignModal, fetchUserCredits, isCheckSign } = useAppContext();
  const router = useRouter();
  const relay = getRelayModels(configs, 'video').filter((m) => m.scenes.includes('image-to-video'));
  const taskRelay = getTaskRelayModels(configs, 'video').filter((m) => m.scenes.includes('image-to-video'));
  const relayList = configs.media_relay_enabled === 'true' ? relay : [];
  const taskRelayList = configs.task_relay_enabled === 'true' ? taskRelay : [];
  const models = relayList.length || taskRelayList.length ? [...relayList, ...taskRelayList] : defaults;
  const [selected, setSelected] = useState('');
  const selectedModel = models.find((m) => `${m.provider}:${m.value}` === selected);
  const model = selectedModel
    ?? (preferModel ? models.find((m) => m.value.toLowerCase() === preferModel.toLowerCase()) : undefined)
    ?? models.find((m) => m.value === 'grok-imagine-video-1.5')
    ?? models[0];
  const unsupported1080 = model?.value === 'grok-imagine-video-1.5';
  const single = model?.provider === 'media-relay' && model.value !== 'grok-imagine-video-1.5';
  const isTaskRelay = model?.provider === 'task-relay';
  // gemini-omni-1.1-flash: 3-10s, 360p/720p/1080p, reference clips capped at 10s
  const isOmni = isTaskRelay && !!model && model.value.toLowerCase().startsWith('gemini-omni');
  const resolutionOptions = !isTaskRelay
    ? ['480p', '720p', '1080p']
    : isOmni
      ? ['360p', '720p', '1080p']
      : model!.value.toLowerCase() === 'minimax-h3' ? ['768P', '2K'] : ['720p'];
  const durationOptions = isOmni ? [4, 6, 8, 10] : [8, 12, 15];
  // Omni only supports 16:9 / 9:16 / auto — no square output
  const ratioOptions = isOmni ? ['16:9', '9:16'] : ['16:9', '9:16', '1:1'];
  const effectivePrompt = (configs[`viral_template_prompt_${template.id}`] as string | undefined)?.trim() || template.prompt;
  const maxSlots = template.slots ?? 2;
  const defaultImages = template.images ? [...template.images] : [`/templates/frames/${template.id}-a.jpg`, `/templates/frames/${template.id}-b.jpg`];
  const [images, setImages] = useState<(string | null)[]>(defaultImages);
  const [custom, setCustom] = useState([false, false]);
  const [uploading, setUploading] = useState([false, false]);
  const [promptDraft, setPromptDraft] = useState('');
  // keep the editable prompt in sync with the template / config override
  useEffect(() => {
    if (open) setPromptDraft(effectivePrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, template.id]);
  const prompt = allowPromptEdit && promptDraft.trim() ? promptDraft.trim() : effectivePrompt;
  const [ratio, setRatio] = useState('16:9');
  const [resolution, setResolution] = useState('720p');
  const [duration, setDuration] = useState(8);
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
  useEffect(() => {
    if (model && !durationOptions.includes(duration)) setDuration(durationOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model?.provider, model?.value]);
  const costTier = activeResolution === '768P' ? '720p' : activeResolution === '2K' ? '1080p' : activeResolution;
  const costCredits = isOmni
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
        if (Date.now() - task.start > 600000) throw new Error(text('Timed out. Check your task history before retrying.', '等待超时，请先在生成记录中查看任务，避免重复扣费。'));
        const response = await fetch('/api/ai/query', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ taskId: task.id }) });
        const payload = await response.json();
        if (!response.ok || payload.code !== 0) throw new Error(payload.message || 'Query failed');
        if (cancelled) return;
        const data = payload.data;
        if (data.status === 'pending') { setStage((s) => (s === 'processing' ? s : 'pending')); setProgress((p) => Math.max(p, 30)); }
        if (data.status === 'processing') { setStage('processing'); setProgress((p) => Math.max(p, 55)); }
        if (data.status === 'failed' || data.status === 'canceled') {
          const rawError = String((data.taskInfo as { errorMessage?: string } | null)?.errorMessage || '');
          const rejectedReference = /invalid argument|HTTP 400/i.test(rawError);
          throw new Error(rejectedReference
            ? text('The model rejected this request — the reference material likely contains restricted content such as movie characters or celebrity faces. Try your own photos or switch to MiniMax-H3 / Seedance. Credits were refunded.', '模型拒绝了本次请求——参考素材可能包含受限制内容（如影视角色或名人面孔）。请更换为你自己的照片，或改用 MiniMax-H3 / Seedance。积分已退回。')
            : text('Generation canceled or failed. Credits were refunded.', '生成已取消或失败，积分已退回。'));
        }
        if (data.status === 'success') {
          const video = [...urls(data.taskInfo), ...urls(data.taskResult)][0];
          if (!video) throw new Error(text('No video returned.', '模型没有返回视频。'));
          setProgress(100); setStage(null);
          setResult(video); setTask(null); setBusy(false); lock.current = false;
          void creditsRef.current();
          return;
        }
        timer = setTimeout(poll, 15000);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : 'Query failed'); setTask(null); setBusy(false); setStage(null); setProgress(0); lock.current = false;
        void creditsRef.current();
      }
    };
    void poll();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [task, zh]);
  async function upload(file: File | undefined, index: number) {
    if (!file) return;
    if (!user) { onOpenChange(false); setIsShowSignModal(true); return; }
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
    if (!user) { onOpenChange(false); setIsShowSignModal(true); return; }
    if (lock.current || !model) return;
    // 2) credits / plan check — not enough: send the user to the pricing page
    if ((user.credits?.remainingCredits ?? 0) < costCredits) {
      setError(text('Insufficient credits. Taking you to the pricing page…', '积分不足，正在前往购买页…'));
      setTimeout(() => router.push('/subscribe'), 1200);
      return;
    }
    if (unsupported1080 && activeResolution === '1080p') { setError(text('This model supports up to 720p. Choose another model for 1080p.', '当前模型最高支持 720p，1080p 请切换其他模型。')); return; }
    const usable = images.slice(0, maxSlots);
    const input = single ? usable.slice(0, 1) : usable;
    if (input.some((v) => !v)) { setError(text('Please upload the reference images.', '请先上传参考图片。')); return; }
    // 3) all checks passed — start generation
    lock.current = true; setBusy(true); setError(''); setResult('');
    setProgress(8); setStage('uploading');
    try {
      const resolved = await Promise.all(input.map((v) => ensureUploadable(v!)));
      setProgress(18); setStage('pending');
      // task-relay models: the template video serves as the motion reference —
      // admin can disable it via task_relay_include_template_video (then only
      // photos + prompt drive the generation). Omni caps reference clips at 10s
      // so it used to get the 10s preview cut — but the 12ai Omni channel
      // rejects ANY video reference (verified 2026-10: even clean clips fail
      // with "invalid argument"), so Omni always runs photo-only.
      const includeTemplateVideo = configs.task_relay_include_template_video !== 'false';
      const motionClause = !isTaskRelay
        ? ''
        : isOmni || !includeTemplateVideo
          ? ' Cast the person(s) from the reference images as the performers, preserving their facial identity, hairstyle and outfit exactly.'
          : ' The reference video defines the choreography, camera work, crowd energy and scene layout only. Replace every person in the reference video with the person(s) from the reference images, preserving their facial identity, hairstyle and outfit exactly.';
      const videoInput = isTaskRelay && !isOmni && includeTemplateVideo ? [`${window.location.origin}/templates/reference/${template.id}.mp4`] : [];
      // MiniMax-H3 driving audio: admin-uploaded reference audio in the panel
      // (task_relay_minimax_audio) rides along as audio_references; other
      // models reject audio input so it is attached only for MiniMax-H3.
      const isMinimax = isTaskRelay && model!.value === 'MiniMax-H3';
      const audioRef = isMinimax ? String(configs.task_relay_minimax_audio || '').trim() : '';
      const response = await fetch('/api/ai/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mediaType: 'video', scene: 'image-to-video', provider: model.provider, model: model.value, prompt: prompt + motionClause, options: { image_input: resolved, ...(videoInput.length ? { video_input: videoInput } : {}), ...(audioRef ? { audio_input: [audioRef] } : {}), duration: activeDuration, aspect_ratio: activeRatio, resolution: activeResolution } }) });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.id) throw new Error(payload.message || 'Generation failed');
      setTask({ id: payload.data.id, start: Date.now() });
      void creditsRef.current();
    } catch (e) { setError(e instanceof Error ? e.message : 'Generation failed'); setBusy(false); setStage(null); setProgress(0); lock.current = false; }
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
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="viral-dialog"><DialogDescription className="sr-only">{text('Create a video from your reference photos', '上传参考照片生成视频')}</DialogDescription><div className="gen-modal">
    <div className="gen-left"><DialogTitle>{template.name[zh ? 1 : 0]}</DialogTitle><div className="gp-video">{result ? <video src={result} controls playsInline /> : <video ref={previewRef} src={`/templates/${template.id}.mp4`} muted={previewMuted} loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}/>}{!result && <><span className="gp-badge">{text('TEMPLATE PREVIEW', '模板示意')}</span><span className="gp-sound" role="button" tabIndex={0} aria-label={previewMuted ? text('Unmute video', '开启声音') : text('Mute video', '关闭声音')} onClick={togglePreviewSound} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') togglePreviewSound(); }}>{previewMuted ? <VolumeX size={15}/> : <Volume2 size={15}/>}</span></>}</div>{result && <div className="result-actions"><button className="btn btn-primary" disabled={downloading} onClick={download}><Download size={16}/>{text('Download', '下载视频')}</button></div>}</div>
    <div><p className="g-label">{text('Upload Image', '上传照片')}</p><fieldset disabled={busy} className="border-0 p-0"><div className="up-row">{Array.from({ length: maxSlots }).map((_, index) => <label key={index} className={`up-card ${images[index] ? 'upfilled' : ''}`} style={single && index === 1 ? { opacity: .4, pointerEvents: 'none' } : undefined}><input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" disabled={uploading[index] || (single && index === 1)} onChange={(e) => { void upload(e.target.files?.[0], index); e.target.value = ''; }}/><div className="up-ph">{images[index] ? <img src={images[index]!} alt={text('Reference image', '参考图片')}/> : <Camera size={28}/>}</div><b>{single ? text('Reference image', '参考图片') : maxSlots === 1 ? text('Main dancer photo', '领舞主角照片') : text(`Performer ${index + 1}`, `主角 ${index === 0 ? 'A' : 'B'}`)}</b><small>{uploading[index] ? text('Uploading…', '上传中…') : images[index] ? (custom[index] ? text('uploaded · tap to replace', '已上传 · 点击更换') : text('template cast · tap to replace', '模板角色 · 点击更换')) : text('tap to upload', '点击上传')}</small></label>)}</div>
    {allowPromptEdit && <div className="prompt-edit"><p className="g-label">{text('Prompt', '文字提示词')}</p><textarea className="prompt-input" rows={4} value={promptDraft} onChange={(e) => setPromptDraft(e.target.value)} placeholder={text('Describe the scene or how to cast your photo — the template prompt is pre-filled.', '描述场景或如何使用你的照片——已预填模板提示词。')}/><p className="notice">{text('The template prompt is pre-filled. Add casting notes like "put my dad in the suit as the main dancer".', '已预填模板提示词，可追加说明，例如"把照片里的爸爸换成领舞者、穿上西装"。')}</p></div>}
    {single && <p className="notice">{text('This model accepts one image. Upload a photo containing both subjects, or select a multi-image model below.', '此模型仅支持一张图片，请上传包含两位主角的合照，或在下方选择多图模型。')}</p>}
    {isOmni && <p className="notice">{text('This model generates from your photos and the prompt only (no video reference). Movie-still photos with celebrity faces may be rejected — upload your own photos for best results.', '该模型仅根据你上传的照片和提示词生成（不使用视频参考）。含名人面孔的影视画面照片可能被拒绝，建议上传你自己的照片。')}</p>}
    {isTaskRelay && !isOmni && (configs.task_relay_include_template_video !== 'false'
      ? <p className="notice">{text('This model uses the template video above as the motion reference and your photos as the cast.', '该模型会自动把上方模板视频作为动作参考，配合你上传的照片生成。')}</p>
      : <p className="notice">{text('This model generates from your photos and the prompt only — no template video is sent.', '该模型仅使用你上传的照片与提示词生成，不携带模板参考视频。')}</p>)}
    {isTaskRelay && model!.value === 'MiniMax-H3' && String(configs.task_relay_minimax_audio || '').trim() && (
      <p className="notice">{text('A reference audio track configured by the site will be sent with this generation to drive vocals and sound.', '本次生成会附带站点配置的参考音频，用于驱动人声与声音风格。')}</p>
    )}
    <div className="param-row"><div className="seg" aria-label={text('Aspect ratio', '画幅比例')}>{ratioOptions.map((v) => <button key={v} aria-pressed={activeRatio === v} className={activeRatio === v ? 'sel' : ''} onClick={() => setRatio(v)}>{v}</button>)}</div><div className="seg" aria-label={text('Resolution', '分辨率')}>{resolutionOptions.map((v) => <button key={v} disabled={!isTaskRelay && v === '1080p' && unsupported1080} title={!isTaskRelay && v === '1080p' && unsupported1080 ? text('This model supports up to 720p', '此模型最高支持720p') : undefined} aria-pressed={activeResolution === v} className={activeResolution === v ? 'sel' : ''} onClick={() => setResolution(v)}>{v}</button>)}</div><div className="seg" aria-label={text('Duration', '视频时长')}>{durationOptions.map((v) => <button key={v} aria-pressed={activeDuration === v} className={activeDuration === v ? 'sel' : ''} onClick={() => setDuration(v)}>{text(`${v}s`, `${v} 秒`)}</button>)}</div></div>
    <details className="advanced"><summary>{text('Model', '模型')}</summary><label>{text('Model', '模型')}<select value={model ? `${model.provider}:${model.value}` : ''} onChange={(e) => setSelected(e.target.value)}>{models.map((m) => <option key={`${m.provider}:${m.value}`} value={`${m.provider}:${m.value}`}>{m.label}</option>)}</select></label></details></fieldset>
    <button className="btn-gen" disabled={busy || isCheckSign || uploading.some(Boolean) || !model || !prompt.trim()} onClick={generate}>{isCheckSign ? text('Checking account…', '登录状态检查中…') : busy ? text('Generating…', '生成中…') : text('Generate', '立即生成')}</button>{busy && (() => { const label = stage === 'uploading' ? text('Uploading reference photos…', '正在上传参考照片…') : stage === 'pending' ? text('Waiting in queue…', '排队等待模型…') : text('Generating your video…', '正在生成视频…'); return <div className="gen-progress" role="status"><div className="gp-row"><span>{label}</span><b>{Math.round(progress)}%</b></div><Progress value={progress} className="gp-bar"/></div>; })()}<p className="credits">{text(`This generation = ${costCredits} credits`, `本次生成 = ${costCredits} 积分`)}{user && ` · ${text('Balance', '余额')} ${user.credits?.remainingCredits ?? 0}`}</p>{!model && <p className="error">{text('No image-to-video model configured.', '尚未配置图生视频模型。')}</p>}{error && <p role="alert" className="error">{error}</p>}<p className="notice">{text('Rendering time and output depend on the selected model. No built-in music or guaranteed lip sync.', '生成时长及效果取决于模型，不包含内置音乐或保证口型同步。')}</p><div className="result-actions"><Link className="btn btn-outline" href="/activity/ai-tasks">{text('My generations', '生成记录')}</Link><Link className="btn btn-outline" href="/subscribe">{text('Get credits', '购买积分')}</Link></div>
    </div></div></DialogContent></Dialog>;
}
