import { NextRequest, NextResponse } from 'next/server';

import { resolveOwnedImageUrl } from '@/shared/lib/image-tool';
import { getAllConfigs } from '@/shared/models/config';
import { findAITaskById } from '@/shared/models/ai_task';
import { getUserInfo } from '@/shared/models/user';

export async function GET(req: NextRequest) {
  const user = await getUserInfo();
  if (!user) return new NextResponse('Sign in to view this image', { status: 401 });

  const taskId = req.nextUrl.searchParams.get('taskId') || '';
  if (!taskId) return new NextResponse('Image not found', { status: 404 });

  const task = await findAITaskById(taskId);
  const configs = await getAllConfigs(true);
  const decision = resolveOwnedImageUrl(task, user.id, configs);
  if (!decision.ok) return new NextResponse(decision.message, { status: decision.status });

  let upstream: Response;
  try {
    upstream = await fetch(decision.url);
  } catch (error) {
    console.error('owned image fetch failed', error);
    return new NextResponse('Image file could not be read', { status: 502 });
  }
  if (!upstream.ok || !upstream.body) {
    return new NextResponse('Image file could not be read', { status: 502 });
  }

  const contentType = upstream.headers.get('content-type') || 'image/png';
  if (!contentType.startsWith('image/')) {
    return new NextResponse('Image file could not be read', { status: 502 });
  }
  const download = req.nextUrl.searchParams.get('download') === '1';
  const filename = `viralreel-image-${taskId.slice(0, 8)}.png`;
  return new NextResponse(upstream.body, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="${filename}"`,
      'Cache-Control': 'private, max-age=60',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
