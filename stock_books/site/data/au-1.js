// Android Audio – Chương 1: Kiến trúc, thuật ngữ và Audio HAL.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospaudio = BOOK_DATA.aospaudio || { chapters: [] };
BOOK_DATA.aospaudio.chapters.push({
  n: 1,
  title: 'Kiến trúc audio, thuật ngữ và Audio HAL (AIDL/HIDL)',
  intro: 'Audio HAL nối các API âm thanh trong <code>android.media</code> với driver và phần cứng. Chương này đi qua các tầng kiến trúc, bảng thuật ngữ cốt lõi và so sánh <b>AIDL Audio HAL</b> (Android 14+, Stable AIDL) với HIDL.',
  sections: [
    { icon: '🏗️', title: 'Các tầng kiến trúc', blocks: [
      { t: 'table', head: ['Tầng', 'Vai trò / vị trí'], rows: [
        ['<b>Application framework</b>', 'App gọi API <code>android.media</code>, đi vào JNI'],
        ['<b>JNI</b>', '<code>frameworks/base/core/jni/</code> và <code>frameworks/base/media/jni</code>; gọi xuống mã native'],
        ['<b>Native framework</b>', 'Bản native của gói <code>android.media</code>, dùng proxy Binder tới audio service trong media server; <code>frameworks/av/media/libmedia</code>'],
        ['<b>Binder IPC</b>', 'Giao tiếp xuyên tiến trình; các proxy có tên bắt đầu bằng “I” cũng ở <code>libmedia</code>'],
        ['<b>Media server</b>', 'Chứa audio service tương tác trực tiếp với HAL; <code>frameworks/av/services/audioflinger</code>'],
        ['<b>HAL</b>', 'Giao diện chuẩn mà audio service gọi và nhà triển khai phải cung cấp'],
        ['<b>Kernel driver</b>', 'ALSA, OSS hoặc driver tuỳ chỉnh (HAL không phụ thuộc driver)']
      ] },
      { t: 'tip', x: 'Phần user-mode của driver ALSA nên dùng <code>external/tinyalsa</code> vì thư viện ALSA chuẩn theo giấy phép GPL. <b>OpenSL ES</b> (qua NDK) ngang tầng với <code>android.media</code>, không nằm bên dưới nó.' },
      { t: 'widget', name: 'audio-layers', title: 'Thành phần này thuộc tầng nào?' }
    ] },
    { icon: '📖', title: 'Thuật ngữ cốt lõi', blocks: [
      { t: 'table', head: ['Nhóm', 'Thuật ngữ'], rows: [
        ['<b>Audio số</b>', '<i>Sample</i> = giá trị một kênh tại một thời điểm; <i>frame</i> = một sample mỗi kênh; sample rate = số frame/giây; bit depth. <b>PCM</b> lưu mẫu rời rạc; <b>DSD</b> là luồng bit tốc độ rất cao (PDM). Lossless vs lossy; high-resolution = vượt chất lượng CD, không nén mất dữ liệu. Gain/attenuation, downmix/upmix, <b>underrun</b> (dữ liệu đến trễ) và <b>overrun</b> (không nhận kịp), ducking (hạ tạm âm lượng), muting'],
        ['<b>Kết nối giữa thiết bị</b>', 'Bluetooth: A2DP (nhạc), SCO (thoại), AVRCP (điều khiển từ xa); HDMI, DisplayPort, USB, S/PDIF, TOSLINK, jack điện thoại'],
        ['<b>Kết nối trong thiết bị</b>', 'I²S, SLIMbus, SoundWire, TDM, I²C, SPI; trong ASoC gọi là DAI'],
        ['<b>Đường tín hiệu</b>', 'ADC/DAC, codec, DSP, PDM/PWM, transducer (loa/micro)'],
        ['<b>Chuyển đổi tần số lấy mẫu</b>', 'Resampling (downsample/upsample), tần số Nyquist = nửa sample rate, source/sink'],
        ['<b>Thoại</b>', 'AEC (khử vọng), ANC, sidetone, chế độ TTY (TTY, TDD, HCO, VCO)'],
        ['<b>Riêng Android</b>', '<b>AudioFlinger</b> (sound server trong mediaserver), <b>AudioMixer</b>, audio policy service (định tuyến + âm lượng); client: AudioTrack, AudioRecord, MediaPlayer, SoundPool, ToneGenerator; <i>fast track</i>, FastMixer, FastCapture; audio focus, stream type, strategy; NBAIO, StateQueue; pro audio; silent mode']
      ] }
    ] },
    { icon: '🔌', title: 'AIDL Audio HAL (Android 14+)', blocks: [
      { t: 'p', x: 'Từ Android 14 Audio HAL định nghĩa bằng <b>Stable AIDL</b>; đối tác và SoC vendor được khuyến khích viết lại HAL bằng AIDL (framework hỗ trợ cả hai; vendor có thể ship bản nào cũng được trên vendor partition). Hỗ trợ cần mở rộng <code>libaudiohal</code>. Cấu hình audio policy chuyển vào HAL: Audio Policy Manager lấy cấu hình từ HAL thay vì file XML của vendor.' },
      { t: 'table', head: ['Gói', 'Interface chính'], rows: [
        ['<b>Core HAL</b>', '<code>IModule</code> (điểm vào), <code>IStreamOut</code>/<code>IStreamIn</code> (luồng một chiều cho AudioFlinger), <code>ITelephony</code>, <code>IBluetooth</code> (SCO, HFP), <code>IConfig</code> (tham số toàn hệ thống), <code>ISoundDose</code> (thư mục <code>core/sounddose</code>)'],
        ['<b>Effects HAL</b>', '<code>IFactory</code> (điểm vào), <code>Descriptor</code>, <code>Capability</code>, <code>Parameter</code>, <code>IEffect</code>, parcelable theo từng effect'],
        ['<b>Common HAL</b>', 'Cấu trúc dữ liệu và interface dùng chung cho Bluetooth, core, effects; kiểu dữ liệu ổn định dùng chung HAL và framework tách riêng']
      ] },
      { t: 'list', items: [
        'API đang phát triển ở <code>aidl/android/hardware/audio/core/</code>; bản đã phát hành ở <code>aidl_api/android.hardware.audio.core/</code>. Có VTS cho giao diện AIDL. Bản triển khai tham chiếu: <code>hardware/interfaces/audio/aidl/default/</code>.',
        '<b>Cấu trúc và tên</b>: <code>IDevice</code> → <code>IModule</code>; bỏ <code>IDevicesFactory</code> — module đăng ký thẳng với Service Manager theo tên (<code>bluetooth</code>, <code>r_submix</code>; <code>primary</code> đăng ký là <code>default</code>); bỏ <code>IPrimaryDevice</code>; framework gửi audio mode và xoay màn hình tới mọi <code>IModule</code>; SCO/HFP chuyển sang <code>IBluetooth</code>, telephony sang <code>ITelephony</code> (lấy từ primary <code>IModule</code>).',
        '<b>Cấu hình</b>: thiết lập hệ thống từng nằm trong XML audio policy nay qua <code>IConfig</code> (surround format qua <code>getSurroundSoundConfig</code>); vendor giữ XML cũ được vì <code>IConfig</code> tham chiếu chuyển đổi sang kiểu AIDL; <code>speaker_drc_enabled</code> bị bỏ — mọi thiết bị phải bật DRC.',
        '<b>Stream</b>: gom <code>IStream</code>/<code>IStreamIn</code>/<code>IStreamOut</code> của HIDL quanh <code>StreamDescriptor</code>, <code>IStreamCommon</code>; lệnh standby, pause, start, drain, flush qua <code>StreamDescriptor.Command</code>; trạng thái (độ trễ, phần cứng, số xrun) trả qua <code>StreamDescriptor.Reply</code>; kích thước buffer (byte) = số frame × kích thước frame.',
        '<b>Effects</b>: <code>IEffectsFactory</code> → <code>IFactory</code>; logic <code>effectProxy</code> trong XML chuyển vào framework (khám phá qua <code>queryEffects</code>, <code>queryProcessing</code>); nhiều lệnh <code>EFFECT_CMD_*</code> ánh xạ sang <code>IEffect.open</code>, <code>command</code> (START, STOP, RESET) hoặc <code>setParameter</code>/<code>getParameter</code>; xử lý offload chuyển vào framework; dump bằng <code>AIBinder_dump</code>.',
        '<b>Lỗi thời / bắt buộc</b>: <code>initCheck</code>, <code>close</code>, <code>supportsAudioPatches</code>, <code>supportsPauseAndResume</code>, <code>supportsDrain</code>, <code>getRenderPosition</code>, <code>getNextWriteTimestamp</code> bị bỏ; patch, pause, resume, drain nay bắt buộc. <code>getParameters</code>/<code>setParameters</code> dạng chuỗi thay bằng <code>getVendorParameters</code>/<code>setVendorParameters</code> (parcelable bọc trong <code>ParcelableHolder</code>); <code>ModuleDebug</code> hỗ trợ VTS (giả lập kết nối thiết bị ngoài).',
        '<b>Khởi động lại</b>: HAL service phải restart khi framework đặt <code>sys.audio.restart.hal</code> = 1; <code>audioserver.rc</code> liệt kê tên service; Android 14 thêm <code>vendor.audio-hal-aidl</code>.'
      ] },
      { t: 'widget', name: 'audio-hal-map', title: 'HIDL → AIDL: tên mới là gì?' }
    ] }
  ],
  summary: [
    'Stack: android.media → JNI → native framework → Binder → AudioFlinger (media server) → HAL → driver (ALSA/tinyalsa).',
    'Thuật ngữ: sample/frame, PCM, underrun/overrun, AudioFlinger/AudioMixer, fast track.',
    'AIDL Audio HAL (Android 14+): IModule, IStreamIn/Out, IConfig, ITelephony, IBluetooth, ISoundDose; Effects qua IFactory/IEffect.',
    'Patch, pause, resume, drain bắt buộc; module đăng ký trực tiếp với Service Manager.'
  ],
  cards: [
    ['Media server chứa gì?', 'Audio service (AudioFlinger) tương tác trực tiếp với HAL.'],
    ['AudioFlinger ở đâu?', 'frameworks/av/services/audioflinger.'],
    ['Vì sao dùng tinyalsa?', 'Thư viện ALSA chuẩn theo GPL; tinyalsa tránh ràng buộc giấy phép.'],
    ['OpenSL ES ở tầng nào?', 'Ngang tầng android.media (qua NDK).'],
    ['Sample vs frame?', 'Sample = 1 kênh; frame = 1 sample mỗi kênh.'],
    ['Underrun vs overrun?', 'Dữ liệu đến trễ vs không nhận kịp; đều gây glitch.'],
    ['Ducking?', 'Tạm hạ âm lượng một luồng (ví dụ khi có thông báo).'],
    ['A2DP / SCO / AVRCP?', 'Nhạc / thoại / điều khiển từ xa của Bluetooth.'],
    ['AIDL Audio HAL từ Android mấy?', 'Android 14 (Stable AIDL).'],
    ['IDevice của HIDL thành?', 'IModule.'],
    ['Cấu hình hệ thống ở AIDL?', 'IConfig (từ HAL, thay XML của vendor).'],
    ['Lệnh điều khiển stream AIDL?', 'StreamDescriptor.Command (standby, pause, start, drain, flush).'],
    ['Vendor parameters?', 'getVendorParameters/setVendorParameters qua ParcelableHolder.'],
    ['Restart HAL bằng?', 'sys.audio.restart.hal = 1.'],
    ['Tham chiếu triển khai?', 'hardware/interfaces/audio/aidl/default/.']
  ],
  quiz: [
    { q: 'Tầng chứa AudioFlinger:', o: ['App framework', 'Media server', 'Kernel', 'JNI'], a: 1, e: 'Tương tác trực tiếp với HAL.' },
    { q: 'Thư viện user-mode ALSA khuyến nghị:', o: ['alsa-lib', 'tinyalsa', 'OSS', 'PulseAudio'], a: 1, e: 'Vì giấy phép.' },
    { q: 'Underrun là:', o: ['Dữ liệu đến trễ', 'Không nhận kịp', 'Hạ âm lượng', 'Nén'], a: 0, e: 'Overrun là không nhận kịp.' },
    { q: 'SCO của Bluetooth dùng cho:', o: ['Nhạc', 'Thoại', 'Điều khiển', 'Video'], a: 1, e: 'A2DP cho nhạc.' },
    { q: 'Stable AIDL cho Audio HAL từ:', o: ['Android 11', 'Android 12', 'Android 14', 'Android 16'], a: 2, e: 'HIDL vẫn được hỗ trợ.' },
    { q: 'IDevice (HIDL) trong AIDL là:', o: ['IModule', 'IConfig', 'IFactory', 'IStream'], a: 0, e: 'Tránh nhầm với loại thiết bị audio.' },
    { q: 'SCO/HFP ở AIDL nằm trong:', o: ['IBluetooth', 'ITelephony', 'IConfig', 'IModule trực tiếp'], a: 0, e: 'Lấy từ primary IModule.' },
    { q: 'Buffer size (byte) =', o: ['Frame count × frame size', 'Sample rate × 2', 'Channel mask', 'Bit depth'], a: 0, e: 'Theo StreamDescriptor.' },
    { q: 'Tính năng nào nay bắt buộc ở AIDL?', o: ['Patch, pause, resume, drain', 'initCheck', 'getRenderPosition', 'supportsDrain'], a: 0, e: 'Các hàm supports* bị bỏ.' },
    { q: 'speaker_drc_enabled:', o: ['Được giữ', 'Bị bỏ, DRC bắt buộc bật', 'Tuỳ chọn', 'Chỉ ô tô'], a: 1, e: 'Mọi thiết bị phải bật DRC.' }
  ],
  match: [
    ['AudioFlinger', 'Sound server'],
    ['tinyalsa', 'Thư viện user-mode ALSA'],
    ['IModule', 'Điểm vào AIDL core HAL'],
    ['IConfig', 'Cấu hình hệ thống từ HAL'],
    ['StreamDescriptor', 'Lệnh/trạng thái stream'],
    ['IFactory', 'Điểm vào Effects HAL'],
    ['A2DP', 'Nhạc Bluetooth']
  ]
});
