import { templateHowMuchAnswer } from '@/shared/lib/pricing-copy';

const cost = templateHowMuchAnswer({ en: 'Hit the Road Dude', zh: 'Hit the Road Dude' });

/** Shared by the visible FAQ and the page's FAQ JSON-LD. */
export const HIT_THE_ROAD_DUDE_FAQ = {
  en: [
    ['What is the Hit the Road Dude AI video format?', 'It is a short vertical roadside exchange: a driver in a stopped car reacts while someone outside the car gestures toward the roadside. The “State Property” and “Lock ’Em Up” phrases identify the format, not verified statements about real people, ownership, or legal events. The ViralReel templates use a fictional setting and no exact dialogue.'],
    ['How do I make a Hit the Road Dude video?', 'Choose State Property, Driver Reaction, or Private Property, upload one clear photo of the person you have permission to use, and open the generator. Its default aspect ratio is 9:16. Review the model, length, and credit cost before generating; download the result if you like it.'],
    ['Do I need the original clip or its audio?', 'No. You can upload one photo to start. An optional reference video or audio may be added by the site administrator. No original audio, real-person speech, or exact dialogue is promised by this template.'],
    ['Can I use a photo of another person?', 'Only if you have permission to use it. Use a clear, well-lit portrait of one person for the driver; the person behind the camera is not based on an uploaded photo.'],
    ['What video shape does this template use?', 'It opens at a 9:16 vertical aspect ratio, suitable for short-form video. Available ratios, lengths, and resolutions depend on the selected model.'],
    ['How much does a Hit the Road Dude AI video cost?', cost.en],
    ['Is this an official video or account?', 'No. ViralReel is an independent AI video template site. These fictional remakes are not footage of any named person or an official account of a real dispute.'],
  ],
  zh: [
    ['Hit the Road Dude AI 视频是什么形式？', '这是一种竖屏路边争执短视频形式：停靠车辆里的司机做出反应，车外有人朝路边比画。“State Property”和“Lock ’Em Up”只是帮助识别这种画面形式，不代表我们核实了真人身份、归属或法律事件。ViralReel 的模板采用虚构场景，不复刻精确台词。'],
    ['怎么制作 Hit the Road Dude 视频？', '选择州有土地版、司机反应版或私人领地版，上传一张你有权使用的人物清晰照片，再打开生成器。画幅默认 9:16。生成前核对模型、时长和积分消耗；满意后下载视频。'],
    ['需要原视频或原声吗？', '不需要，上传一张照片即可开始。站点管理员可以另外配置参考视频或音频；模板并不承诺还原原声、真人说话内容或精确台词。'],
    ['可以用别人的照片吗？', '仅在获得授权的前提下使用。请上传一张清楚、光线良好的单人照作为司机形象；镜头后的车外人物不需要第二张照片。'],
    ['模板使用什么画幅？', '生成器默认打开 9:16 竖屏，适合短视频。实际可选画幅、时长和分辨率取决于选择的模型。'],
    ['制作 Hit the Road Dude AI 视频需要多少积分？', cost.zh],
    ['这是官方视频或官方账号吗？', '不是。ViralReel 是独立的 AI 视频模板网站。虚构重拍不是真实人物原片，也不是对真实争执的官方说明。'],
  ],
} as const;
