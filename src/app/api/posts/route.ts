import {
  getPosts,
  getPostsCount,
  PostStatus,
  PostType,
} from '@/shared/models/post';

export const dynamic = 'force-dynamic';

// Public read-only API for external frontends (e.g. static sites).
// Returns published articles only. CORS is open because the data is public.
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1') || 1);
    const limit = Math.min(
      50,
      Math.max(1, parseInt(searchParams.get('limit') || '12') || 12)
    );

    const [rows, total] = await Promise.all([
      getPosts({
        type: PostType.ARTICLE,
        status: PostStatus.PUBLISHED,
        page,
        limit,
      }),
      getPostsCount({
        type: PostType.ARTICLE,
        status: PostStatus.PUBLISHED,
      }),
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
