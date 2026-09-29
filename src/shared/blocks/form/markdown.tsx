import { ControllerRenderProps } from 'react-hook-form';

import { FormField } from '@/shared/types/blocks/form';

import { MarkdownEditor } from '../common/markdown-editor';
import { MarkdownImport } from './markdown-import';

export function Markdown({
  field,
  formField,
  data,
  form,
}: {
  field: FormField;
  formField: ControllerRenderProps<Record<string, unknown>, string>;
  data?: any;
  form?: any;
}) {
  return (
    <div className="space-y-2">
      {form && <MarkdownImport form={form} />}
      <MarkdownEditor
        value={formField.value as string}
        onChange={formField.onChange}
        placeholder={field.placeholder || ''}
        {...field.attributes}
      />
    </div>
  );
}
