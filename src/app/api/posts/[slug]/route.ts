import { findPost, PostStatus, PostType } from '@/shared/models/post';

export const dynamic = 'force-dynamic';

// Public read-only API: single published post (raw markdown content).
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const p = await findPost({ slug, status: PostStatus.PUBLISHED });
    if (!p || p.type !== PostType.ARTICLE) {
      return Response.json(
        { code: -1, message: 'post not found' },
        { status: 404, headers: CORS_HEADERS }
      );
    }

    return Response.json(
      {
        code: 0,
        message: 'ok',
        data: {
          slug: p.slug,
          title: p.title || '',
          description: p.description || '',
          image: p.image || '',
          content: p.content || '',
          tags: p.tags || '',
          categories: p.categories || '',
          author_name: p.authorName || '',
          author_image: p.authorImage || '',
          created_at: p.createdAt,
          updated_at: p.updatedAt,
        },
      },
      { headers: CORS_HEADERS }
    );
  } catch (e: any) {
    console.log('get public post failed:', e);
    return Response.json(
      { code: -1, message: 'Failed to load post' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
