import { Pagination } from './common';

export interface TableColumn {
  name?: string;
  title?: string;
  type?:
    | 'copy'
    | 'image'
    | 'time'
    | 'label'
    | 'dropdown'
    | 'user'
    | 'json_preview';
  placeholder?: string;
  metadata?: any;
  className?: string;
  callback?: (item: any) => any;
}

export interface Table {
  title?: string;
  columns: TableColumn[];
  data: any[];
  emptyMessage?: string;
  pagination?: Pagination;
  actions?: Button[];
  /** optional class for the div wrapping the table (e.g. fixed-height areas) */
  wrapperClassName?: string;
  /** optional extra class for the <table> element (e.g. min-width for horizontal scroll) */
  tableClassName?: string;
}
