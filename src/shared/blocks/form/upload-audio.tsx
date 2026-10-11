'use client';

import { useRef, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { Loader, X } from 'lucide-react';

import { FormField } from '@/shared/types/blocks/form';

interface UploadAudioProps {
  field: FormField;
  formField: ControllerRenderProps<Record<string, unknown>, string>;
  data?: any;
}

// Admin settings widget for a single reference-audio file (MiniMax-H3 driving
// audio). Uploads to /api/storage/upload-audio and stores the public URL as the
// field value; shows an inline player for the current audio.
export function UploadAudio({ field, formField }: UploadAudioProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const url = typeof formField.value === 'string' ? formField.value.trim() : '';

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      const response = await fetch('/api/storage/upload-audio', { method: 'POST', body });
      const payload = await response.json();
      if (!response.ok || payload.code !== 0) throw new Error(payload.message || 'Upload failed');
      formField.onChange(payload.data.url);
    } catch (e) {
      console.error('upload audio failed', e);
      alert(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept=".mp3,.wav,audio/mpeg,audio/wav"
        disabled={uploading}
        className="block w-full cursor-pointer text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium hover:file:bg-secondary/80"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
        }}
      />
      {uploading && (
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Loader className="size-3.5 animate-spin" /> Uploading…
        </p>
      )}
      {url && !uploading && (
        <div className="flex items-center gap-2 rounded-md border p-2">
          <audio controls src={url} className="h-8 w-full" preload="metadata" />
          <button
            type="button"
            aria-label="Remove audio"
            className="shrink-0 rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
            onClick={() => formField.onChange('')}
          >
            <X className="size-4" />
          </button>
        </div>
      )}
      {!url && !uploading && field.placeholder && (
        <p className="text-sm text-muted-foreground">{field.placeholder}</p>
      )}
    </div>
  );
}
