import {
  getPosts,
  getPostsCount,
  PostStatus,
  PostType,
} from '@/shared/models/post';
import {
  findTaxonomy,
  getTaxonomies,
  TaxonomyStatus,
  TaxonomyType,
} from '@/shared/models/taxonomy';

export const dynamic = 'force-dynamic';

// Public read-only API for external frontends (e.g. static sites).
// Returns published articles only. CORS is open because the data is public.
//
// Query params:
//   page / limit         - pagination (limit max 50)
//   category             - optional. Category slug OR title (e.g. "游戏").
//                          When given, only posts in that category are returned;
//                          if the category does not exist, an empty list is returned.
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// Resolve a category slug/title (or raw id) to a taxonomy id.
async function resolveCategoryId(param: string): Promise<string | null> {
  const bySlug = await findTaxonomy({
    slug: param,
    status: TaxonomyStatus.PUBLISHED,
  });
  if (bySlug && bySlug.type === TaxonomyType.CATEGORY) return bySlug.id;

  const all = await getTaxonomies({
    type: TaxonomyType.CATEGORY,
    status: TaxonomyStatus.PUBLISHED,
    limit: 100,
  });
  const byTitleOrSlug = all.find((t) => t.title === param || t.slug === param);
  return byTitleOrSlug ? byTitleOrSlug.id : null;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1') || 1);
    const limit = Math.min(
      50,
      Math.max(1, parseInt(searchParams.get('limit') || '12') || 12)
    );
    const categoryParam = (searchParams.get('category') || '').trim();

    let categoryId: string | null = null;
    if (categoryParam) {
      categoryId = await resolveCategoryId(categoryParam);
      if (!categoryId) {
        // requested category does not exist -> no posts to show
        return Response.json(
          { code: 0, message: 'ok', data: { total: 0, page, limit, posts: [] } },
          { headers: CORS_HEADERS }
        );
      }
    }

    const filter = {
      type: PostType.ARTICLE,
      status: PostStatus.PUBLISHED,
      ...(categoryId ? { category: categoryId } : {}),
    };

    const [rows, total] = await Promise.all([
      getPosts({ ...filter, page, limit }),
      getPostsCount(filter),
    ]);

    // strip markdown body from list payload
    const posts = rows.map((p) => ({
      slug: p.slug,
      title: p.title || '',
      description: p.description || '',
      image: p.image || '',
      tags: p.tags || '',
      categories: p.categories || '',
      author_name: p.authorName || '',
      created_at: p.createdAt,
      updated_at: p.updatedAt,
    }));

    return Response.json(
      { code: 0, message: 'ok', data: { total, page, limit, posts } },
      { headers: CORS_HEADERS }
    );
  } catch (e: any) {
    console.log('list public posts failed:', e);
    return Response.json(
      { code: -1, message: 'Failed to load posts' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
