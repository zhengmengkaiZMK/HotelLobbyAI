import { md5 } from '@/shared/lib/hash';
import { respData, respErr } from '@/shared/lib/resp';
import { getStorageService } from '@/shared/services/storage';
import { getUserInfo } from '@/shared/models/user';

// Kling O3 Pro reference-video limits: MP4/MOV/WebM, up to 200 MB per file
const MAX_VIDEO_BYTES = 200 * 1024 * 1024;
const extFromMime = (mimeType: string, filename: string) => {
  if (mimeType === 'video/mp4') return 'mp4';
  if (mimeType === 'video/quicktime') return 'mov';
  if (mimeType === 'video/webm') return 'webm';
  const ext = filename?.split('.').pop()?.toLowerCase();
  return ext && ['mp4', 'mov', 'webm'].includes(ext) ? ext : '';
};

export async function POST(req: Request) {
  try {
    const user = await getUserInfo();
    if (!user) {
      return respErr('no auth, please sign in');
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
      return respErr('No video file provided');
    }

    const ext = extFromMime(file.type, file.name);
    if (!ext) {
      return respErr('Only MP4, MOV or WebM video files are supported');
    }
    if (file.size > MAX_VIDEO_BYTES) {
      return respErr('Video file exceeds the 200MB limit');
    }

    const storageService = await getStorageService();
    const body = new Uint8Array(await file.arrayBuffer());
    const key = `video/reference/${md5(body)}.${ext}`;

    // dedupe by content hash — same video reuses the existing URL
    const exists = await storageService.exists({ key });
    if (!exists) {
      const result = await storageService.uploadFile({
        body,
        key,
        contentType: `video/${ext === 'mov' ? 'quicktime' : ext}`,
        disposition: 'inline',
      });
      if (!result.success) {
        console.error('[API] video upload failed:', result.error);
        return respErr(result.error || 'Upload failed');
      }
    }

    const publicUrl = storageService.getPublicUrl({ key });
    if (!publicUrl) {
      return respErr('Storage provider does not expose a public URL');
    }

    return respData({ url: publicUrl, key, filename: file.name });
  } catch (e) {
    console.error('upload video failed:', e);
    return respErr('upload video failed');
  }
}
