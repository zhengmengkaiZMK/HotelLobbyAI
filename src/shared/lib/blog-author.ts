/**
 * Bylines for ViralReel guides. "ViralReel Team" is not a person, so those
 * posts use Lena Ortiz and link to her bio.
 */
export const BLOG_AUTHOR = {
  name: 'Lena Ortiz',
  role: 'Template editor',
  roleZh: '模板编辑',
  path: '/authors/lena-ortiz',
  bioEn:
    'Lena Ortiz edits ViralReel’s template guides. She checks every price against the live pricing table, in US dollars, and writes down how many credits a clip uses, whether those credits expire, and what happens when a generation fails.',
  bioZh:
    'Lena Ortiz 负责 ViralReel 的模板教程。她对照实时定价表核对每一处美元价格，并写明一条片子用多少积分、积分会不会过期，以及生成失败时怎么退回。',
} as const;

export function resolveBlogAuthor(name?: string) {
  if (!name || name === 'ViralReel Team' || name === BLOG_AUTHOR.name) {
    return {
      name: BLOG_AUTHOR.name,
      url: BLOG_AUTHOR.path,
      role: BLOG_AUTHOR.role,
    };
  }
  return { name, url: '', role: '' };
}

export function postIsoDate(value?: string) {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}
