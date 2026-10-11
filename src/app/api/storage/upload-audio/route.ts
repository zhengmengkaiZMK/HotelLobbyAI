import { md5 } from '@/shared/lib/hash';
import { respData, respErr } from '@/shared/lib/resp';
import { getStorageService } from '@/shared/services/storage';
import { getUserInfo } from '@/shared/models/user';

// MiniMax-H3 driving-audio limits: WAV/MP3, up to 15 MB per file
const MAX_AUDIO_BYTES = 15 * 1024 * 1024;
const extFromMime = (mimeType: string, filename: string) => {
  if (mimeType === 'audio/mpeg' || mimeType === 'audio/mp3') return 'mp3';
  if (mimeType === 'audio/wav' || mimeType === 'audio/x-wav' || mimeType === 'audio/wave') return 'wav';
  const ext = filename.split('.').pop()?.toLowerCase();
  return ext === 'mp3' || ext === 'wav' ? ext : '';
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
      return respErr('No audio file provided');
    }

    const ext = extFromMime(file.type, file.name);
    if (!ext) {
      return respErr('Only MP3 or WAV audio files are supported');
    }
    if (file.size > MAX_AUDIO_BYTES) {
      return respErr('Audio file exceeds the 15MB limit');
    }

    const storageService = await getStorageService();
    const body = new Uint8Array(await file.arrayBuffer());
    const key = `audio/reference/${md5(body)}.${ext}`;

    // dedupe by content hash — same audio reuses the existing URL
    const exists = await storageService.exists({ key });
    if (!exists) {
      const result = await storageService.uploadFile({
        body,
        key,
        contentType: `audio/${ext}`,
        disposition: 'inline',
      });
      if (!result.success) {
        console.error('[API] audio upload failed:', result.error);
        return respErr(result.error || 'Upload failed');
      }
    }

    const publicUrl = storageService.getPublicUrl({ key });
    if (!publicUrl) {
      return respErr('Storage provider does not expose a public URL');
    }

    return respData({ url: publicUrl, key, filename: file.name });
  } catch (e) {
    console.error('upload audio failed:', e);
    return respErr('upload audio failed');
  }
}
