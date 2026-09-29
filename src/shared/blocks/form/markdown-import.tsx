'use client';

import { useRef, useState } from 'react';
import { FileUp, Loader } from 'lucide-react';
import { toast } from 'sonner';
import type { UseFormReturn } from 'react-hook-form';

function parseMarkdownFile(raw: string): { title: string; description: string; body: string } {
  let text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').trim();

  let title = '';
  let description = '';

  // YAML front matter: ---\ntitle: ...\ndescription: ...\n---
  const frontMatter = text.match(/^---\n([\s\S]*?)\n---(\s*\n)?/);
  if (frontMatter) {
    const meta = frontMatter[1];
    const getMeta = (keys: string[]) => {
      for (const key of keys) {
        const matched = meta.match(new RegExp(`^${key}\\s*:\\s*(.+)$`, 'mi'));
        if (matched) {
          return matched[1].trim().replace(/^["']|["']$/g, '');
        }
      }
      return '';
    };
    title = getMeta(['title']);
    description = getMeta(['description', 'excerpt', 'summary', 'subtitle', 'seo_description']);
    text = text.slice(frontMatter[0].length).trim();
  }

  // No front matter: use the first H1 as title
  if (!title) {
    const heading = text.match(/^\s*#\s+(.+?)\s*$/m);
    if (heading) {
      title = heading[1].trim();
      text = text.replace(heading[0], '').trim();
    }
  }

  return { title, description, body: text };
}

export function MarkdownImport({ form }: { form: UseFormReturn<Record<string, unknown>> }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    if (!/\.(md|markdown|txt)$/i.test(file.name)) {
      toast.error('Please select a Markdown file (.md / .markdown / .txt)');
      return;
    }
    setLoading(true);
    try {
      const raw = await file.text();
      const { title, description, body } = parseMarkdownFile(raw);
      const fieldNames = Object.keys(form.getValues());

      if (fieldNames.includes('title')) {
        form.setValue('title', title || file.name.replace(/\.(md|markdown|txt)$/i, ''), { shouldValidate: true, shouldDirty: true });
      }
      if (fieldNames.includes('description')) {
        form.setValue('description', description, { shouldValidate: true, shouldDirty: true });
      }
      if (fieldNames.includes('content')) {
        form.setValue('content', body, { shouldValidate: true, shouldDirty: true });
      }

      const filled = [title && '标题', description && '描述', body && '内容'].filter(Boolean).join('、');
      toast.success(`导入成功，已填充${filled || '内容'}`);
    } catch {
      toast.error('文件读取失败，请重试');
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div className="flex items-center justify-end">
      <input
        ref={inputRef}
        type="file"
        accept=".md,.markdown,.txt"
        className="hidden"
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
        }}
      />
      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors hover:border-orange-400 hover:text-orange-600"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
      >
        {loading ? <Loader className="size-3.5 animate-spin" /> : <FileUp className="size-3.5" />}
        导入 Markdown
      </button>
    </div>
  );
}
