'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera, Download } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '@/core/i18n/navigation';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/shared/components/ui/dialog';
import { useAppContext } from '@/shared/contexts/app';
import { getRelayModels } from '@/shared/lib/ai-models';
import { HomeTemplate } from './templates';

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
export function TemplateGenerator({ template, open, onOpenChange }: { template: HomeTemplate; open: boolean; onOpenChange: (open: boolean) => void }) {
  const zh = useLocale() === 'zh';
  const text = (en: string, cn: string) => zh ? cn : en;
  const { user, configs, setIsShowSignModal, fetchUserCredits } = useAppContext();
  const relay = getRelayModels(configs, 'video').filter((m) => m.scenes.includes('image-to-video'));
  const models = configs.media_relay_enabled === 'true' ? relay : defaults;
  const [selected, setSelected] = useState('');
  const model = models.find((m) => `${m.provider}:${m.value}` === selected) ?? models[0];
  const single = model?.provider === 'media-relay' && model.value !== 'grok-imagine-video-1.5';
  const [images, setImages] = useState<(string | null)[]>([null, null]);
  const [uploading, setUploading] = useState([false, false]);
  const [ratio, setRatio] = useState('16:9');
  const [resolution, setResolution] = useState('720p');
  const [prompt, setPrompt] = useState<string>(template.prompt);
  const [busy, setBusy] = useState(false);
  const [task, setTask] = useState<{ id: string; start: number } | null>(null);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const lock = useRef(false);
  const creditsRef = useRef(fetchUserCredits);
  creditsRef.current = fetchUserCredits;
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
        if (data.status === 'failed') throw new Error(text('Generation failed. Check task history for details.', '生成失败，请在生成记录中查看详情。'));
        if (data.status === 'success') {
          const video = [...urls(data.taskInfo), ...urls(data.taskResult)][0];
          if (!video) throw new Error(text('No video returned.', '模型没有返回视频。'));
          setResult(video); setTask(null); setBusy(false); lock.current = false;
          void creditsRef.current();
          return;
        }
        timer = setTimeout(poll, 15000);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : 'Query failed'); setTask(null); setBusy(false); lock.current = false;
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
    } catch (e) { setError(e instanceof Error ? e.message : 'Upload failed'); }
    finally { setUploading((s) => s.map((v, i) => i === index ? false : v)); }
  }
  async function generate() {
    if (!user) { onOpenChange(false); setIsShowSignModal(true); return; }
    if (lock.current || !model) return;
    if ((user.credits?.remainingCredits ?? 0) < 8) { setError(text('Insufficient credits. Please top up.', '积分不足，请先购买积分。')); return; }
    const input = single ? images.slice(0, 1) : images;
    if (input.some((v) => !v)) { setError(text('Please upload the reference images.', '请先上传参考图片。')); return; }
    lock.current = true; setBusy(true); setError(''); setResult('');
    try {
      const response = await fetch('/api/ai/generate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mediaType: 'video', scene: 'image-to-video', provider: model.provider, model: model.value, prompt, options: { image_input: input, duration: 8, aspect_ratio: ratio, resolution } }) });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0 || !payload.data?.id) throw new Error(payload.message || 'Generation failed');
      setTask({ id: payload.data.id, start: Date.now() });
      void creditsRef.current();
    } catch (e) { setError(e instanceof Error ? e.message : 'Generation failed'); setBusy(false); lock.current = false; }
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
    <div className="gen-left"><DialogTitle>{template.name[zh ? 1 : 0]}</DialogTitle><div className="gp-video">{result ? <video src={result} controls playsInline /> : <video src={`/templates/${template.id}.mp4`} muted loop autoPlay playsInline preload="metadata" style={{ background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})` }}/>}{!result && <span className="gp-badge">{text('TEMPLATE PREVIEW', '模板示意')}</span>}</div>{result && <div className="result-actions"><button className="btn btn-primary" disabled={downloading} onClick={download}><Download size={16}/>{text('Download', '下载视频')}</button></div>}</div>
    <div><p className="g-label">{text('Upload Image', '上传照片')}</p><fieldset disabled={busy} className="border-0 p-0"><div className="up-row">{[0, 1].map((index) => <label key={index} className={`up-card ${images[index] ? 'upfilled' : ''}`} style={single && index === 1 ? { opacity: .4, pointerEvents: 'none' } : undefined}><input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" disabled={uploading[index] || (single && index === 1)} onChange={(e) => { void upload(e.target.files?.[0], index); e.target.value = ''; }}/><div className="up-ph">{images[index] ? <img src={images[index]!} alt={text('Reference image', '参考图片')}/> : <Camera size={28}/>}</div><b>{single ? text('Reference image', '参考图片') : text(`Performer ${index + 1}`, `主角 ${index === 0 ? 'A' : 'B'}`)}</b><small>{uploading[index] ? text('Uploading…', '上传中…') : images[index] ? text('uploaded · tap to replace', '已上传 · 点击更换') : text('tap to upload', '点击上传')}</small></label>)}</div>
    {single && <p className="notice">{text('This model accepts one image. Upload a photo containing both subjects, or select a multi-image model below.', '此模型仅支持一张图片，请上传包含两位主角的合照，或在下方选择多图模型。')}</p>}
    <div className="param-row"><div className="seg" aria-label={text('Aspect ratio', '画幅比例')}>{['16:9','9:16','1:1'].map((v) => <button key={v} aria-pressed={ratio === v} className={ratio === v ? 'sel' : ''} onClick={() => setRatio(v)}>{v}</button>)}</div><div className="seg" aria-label={text('Resolution', '分辨率')}>{['480p','720p'].map((v) => <button key={v} aria-pressed={resolution === v} className={resolution === v ? 'sel' : ''} onClick={() => setResolution(v)}>{v}</button>)}</div></div>
    <details className="advanced"><summary>{text('Model & prompt', '模型与提示词')}</summary><label>{text('Model', '模型')}<select value={model ? `${model.provider}:${model.value}` : ''} onChange={(e) => setSelected(e.target.value)}>{models.map((m) => <option key={`${m.provider}:${m.value}`} value={`${m.provider}:${m.value}`}>{m.label}</option>)}</select></label><label>{text('Prompt', '提示词')}<textarea rows={4} value={prompt} onChange={(e) => setPrompt(e.target.value)}/></label></details></fieldset>
    <button className="btn-gen" disabled={busy || uploading.some(Boolean) || !model || !prompt.trim()} onClick={generate}>{busy ? text('Generating…', '生成中…') : text('Generate', '立即生成')}</button><p className="credits">{text('1 generation = 8 credits', '1 次生成 = 8 积分')}{user && ` · ${text('Balance', '余额')} ${user.credits?.remainingCredits ?? 0}`}</p>{!model && <p className="error">{text('No image-to-video model configured.', '尚未配置图生视频模型。')}</p>}{error && <p role="alert" className="error">{error}</p>}<p className="notice">{text('Rendering time and output depend on the selected model. No built-in music or guaranteed lip sync.', '生成时长及效果取决于模型，不包含内置音乐或保证口型同步。')}</p><div className="result-actions"><Link className="btn btn-outline" href="/activity/ai-tasks">{text('My generations', '生成记录')}</Link><Link className="btn btn-outline" href="/pricing">{text('Get credits', '购买积分')}</Link></div>
    </div></div></DialogContent></Dialog>;
}
