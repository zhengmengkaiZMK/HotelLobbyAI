import type { TemplateDef } from '@/shared/blocks/viral-home/templates';

const family = 'alors_on_danse';
const scene = 'Recreate the two-person Alors On Danse white-studio comedy sketch. Image 1 is the calm person seated at the small keyboard beside the laptop; Image 2 is the energetic person dancing, pointing at camera and mouthing along beside them. Preserve the reference video camera, timing, keyboard, laptop, beat, studio blocking and 30-second structure. Keep both uploaded faces recognizable, natural proportions and one continuous take. No extra people, readable logos or added text.';

export const alorsOnDanseTemplates = [
  { id: 'alors-on-danse-ai-giant', family, name: ['Studio Giant', '白棚巨人版'], colors: ['#dbeafe', '#1e3a8a'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-giant.mp4', prompt: `${scene} Use the broad Studio Giant composition.` },
  { id: 'alors-on-danse-ai-sketch', family, name: ['Original Sketch', '原版小剧场'], colors: ['#f8fafc', '#475569'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-sketch.mp4', prompt: `${scene} Use the vertical Original Sketch framing.` },
  { id: 'alors-on-danse-ai-football', family, name: ['Football Duo', '足球双人版'], colors: ['#dcfce7', '#166534'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-football.mp4', prompt: `${scene} Use the wide Football Duo parody framing. Avoid readable team logos.` },
  { id: 'alors-on-danse-ai-spider', family, name: ['Spider Duo', '蜘蛛侠双人版'], colors: ['#fee2e2', '#991b1b'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-spider.mp4', prompt: `${scene} Use a playful comic-book parody framing with no franchise logos.` },
  { id: 'alors-on-danse-ai-lotr', family, name: ['Fantasy Duo', '奇幻双人版'], colors: ['#fef3c7', '#78350f'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-lotr.mp4', prompt: `${scene} Use theatrical fantasy contrast without readable character marks.` },
  { id: 'alors-on-danse-ai-f1', family, name: ['Racing Duo', '赛车双人版'], colors: ['#fee2e2', '#7f1d1d'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-f1.mp4', prompt: `${scene} Use clean racing-fan parody energy without readable logos.` },
  { id: 'alors-on-danse-ai-fener', family, name: ['Football Keyboard', '足球键盘版'], colors: ['#dbeafe', '#1d4ed8'], slots: 2, images: [null, null], previewVideo: '/templates/alors-on-danse-ai-fener.mp4', prompt: `${scene} Use the football-keyboard fan mood without readable club marks.` },
] as const satisfies readonly TemplateDef[];
export type AlorsOnDanseTemplate = (typeof alorsOnDanseTemplates)[number];
