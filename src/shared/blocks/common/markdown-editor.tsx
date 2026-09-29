'use client';

import { useEffect, useRef } from 'react';
// @ts-ignore
import { OverType } from 'overtype';

function svg(path: string) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

const ICONS = {
  bold: svg('<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>'),
  italic: svg('<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>'),
  link: svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
  code: svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
  quote: svg('<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>'),
  list: svg('<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>'),
  orderedList: svg('<line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>'),
  taskList: svg('<rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 3 2 2L9 1"/><line x1="12" x2="21" y1="8" y2="8"/><line x1="12" x2="21" y1="16" y2="16"/><rect x="3" y="13" width="6" height="6" rx="1"/>'),
  eye: svg('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
};

const TOOLBAR_BUTTONS = [
  { name: 'bold', icon: ICONS.bold, title: 'Bold (Ctrl+B)', action: 'toggleBold' },
  { name: 'italic', icon: ICONS.italic, title: 'Italic (Ctrl+I)', action: 'toggleItalic' },
  { separator: true },
  { name: 'h1', icon: '<b style="font-size:12px">H1</b>', title: 'Heading 1', action: 'insertH1' },
  { name: 'h2', icon: '<b style="font-size:12px">H2</b>', title: 'Heading 2', action: 'insertH2' },
  { name: 'h3', icon: '<b style="font-size:12px">H3</b>', title: 'Heading 3', action: 'insertH3' },
  { separator: true },
  { name: 'bullet-list', icon: ICONS.list, title: 'Bullet List', action: 'toggleBulletList' },
  { name: 'numbered-list', icon: ICONS.orderedList, title: 'Numbered List', action: 'toggleNumberedList' },
  { name: 'task-list', icon: ICONS.taskList, title: 'Task List', action: 'toggleTaskList' },
  { separator: true },
  { name: 'quote', icon: ICONS.quote, title: 'Quote', action: 'toggleQuote' },
  { name: 'code', icon: ICONS.code, title: 'Code (Ctrl+`)', action: 'toggleCode' },
  { name: 'link', icon: ICONS.link, title: 'Insert Link (Ctrl+K)', action: 'insertLink' },
  { separator: true },
  { name: 'view', icon: ICONS.eye, title: 'View mode', action: 'toggle-view-menu' },
];

export function MarkdownEditor({
  value,
  onChange,
  placeholder,
  minHeight = 400,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<OverType>(null);

  useEffect(() => {
    const [instance] = OverType.init(ref.current, {
      value,
      onChange,
      placeholder,
      autoResize: true,
      minHeight: `${minHeight}px`,
      maxHeight: null,
      showStats: true,
      statsFormatter: (stats: { chars: number; words: number }) =>
        `${stats.words} words · ${stats.chars} chars`,
      smartLists: true,
      toolbar: { buttons: TOOLBAR_BUTTONS },
    });
    editorRef.current = instance;

    return () => editorRef.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.getValue()) {
      editorRef.current.setValue(value);
    }
  }, [value]);

  return (
    <div
      className="overflow-hidden rounded-md border"
      ref={ref}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
}
