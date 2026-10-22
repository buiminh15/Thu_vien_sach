// Android Audio – Chương 4: MIDI, USB audio, TV audio, debugging, warmup.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospaudio = BOOK_DATA.aospaudio || { chapters: [] };
BOOK_DATA.aospaudio.chapters.push({
  n: 4,
  title: 'MIDI, USB audio, TV audio, debugging và warmup',
  intro: 'Các mục hỗ trợ trong menu Audio: <b>MIDI</b> (giao thức nhạc cụ), <b>USB digital audio</b>, <b>TV audio</b> (định tuyến cổng và patch), công cụ <b>debug</b> (tee sink, NBLog) và <b>audio warmup</b>.',
  sections: [
    { icon: '🎹', title: 'MIDI', blocks: [
      { t: 'p', x: 'MIDI (Musical Instrument Digital Interface) là giao thức chuẩn nối máy tính, nhạc cụ, đèn sân khấu… Android đặt trong tài liệu audio vì chủ yếu dùng cho nhạc, dù MIDI bản thân không phải audio.' },
      { t: 'table', head: ['Phiên bản / transport', 'Chi tiết'], rows: [
        ['<b>MIDI 1.0</b>', 'Chuẩn gốc, vật lý 5-pin DIN (Android hỗ trợ qua adapter ngoài)'],
        ['<b>MIDI 2.0</b>', 'Định nghĩa 2020: hai chiều, độ phân giải cao, property exchange. Android 13 thêm qua USB (luôn bật khi nền tảng bật MIDI); Android 15+ hỗ trợ cả trên transport ảo'],
        ['<b>USB host</b>', 'USB On-The-Go; kernel cần <code>CONFIG_SND_RAWMIDI</code> và <code>CONFIG_SND_USB_MIDI</code>; theo USB-IF MIDI Device Class Definition 1.0'],
        ['<b>USB peripheral</b>', 'Cần patch kernel tích hợp <code>f_midi.c</code> vào USB gadget driver (nhắm kernel 3.10, không hỗ trợ ConfigFS, chưa upstream); bật qua Developer options > Networking hoặc menu thông báo USB'],
        ['<b>BLE MIDI</b>', 'Luôn bật trên thiết bị hỗ trợ BLE'],
        ['<b>Virtual (liên app)</b>', 'Luôn bật']
      ] },
      { t: 'list', items: [
        '<b>API app</b>: Android 10 thêm NDK <b>AMidi</b> (C/C++); Java dùng gói <code>android.media.midi</code> — <code>MidiManager</code> phát hiện, mở, đóng <code>MidiDevice</code> và truyền dữ liệu qua cổng input/output.',
        '<b>ALSA</b>: MIDI 1.0 dựa trên ALSA cho USB host và peripheral; BLE và virtual không dùng ALSA.',
        '<b>Khai báo tính năng</b>: <code>android.software.midi</code>; nhà sản xuất thêm <code>PRODUCT_COPY_FILES</code> trong <code>device.mk</code> sao chép <code>android.software.midi.xml</code> vào <code>/system/etc/permissions/</code>; CDD liệt kê điều kiện. ADB qua USB không dùng được khi ở USB host mode — dùng ADB không dây.',
        '<b>Kiến thức nền</b>: MIDI là giao thức hướng sự kiện; mỗi sự kiện là một message (gói nguyên tử, tự mã hoá độ dài, thường 1–3 byte, SysEx dài hơn). Timestamp không thuộc MIDI 1.0 mà do API nền tảng cấp (thiếu thì lấy timestamp trước đó hoặc thời gian hiện tại; độ chính xác ảnh hưởng độ tin cậy). Cổng: OUT (nguồn), IN (đích), THRU (IN nối thẳng ra OUT); mỗi OUT nối tối đa một IN/THRU ở MIDI 1.0. Mỗi luồng có 16 kênh (1–16, biểu diễn 0–15); nhiều kênh/thông lượng hơn cần nhiều cổng; USB MIDI một endpoint chứa nhiều cổng nhận diện bằng số cable.'
      ] },
      { t: 'widget', name: 'midi-transport', title: 'Transport MIDI nào?' }
    ] },
    { icon: '🔌', title: 'USB digital audio', blocks: [
      { t: 'p', x: 'USB là bus có một host khởi tạo mọi truyền tải. Audio dùng truyền <b>isochronous</b>: đảm bảo băng thông, có CRC nhưng <b>không truyền lại</b> dữ liệu lỗi.' },
      { t: 'table', head: ['Chế độ USB Android', 'Mô tả'], rows: [
        ['<b>Development</b>', 'Thiết bị là peripheral với PC (fastboot hoặc adb); <b>không hỗ trợ</b> USB audio'],
        ['<b>Host</b>', 'Từ Android 3.1 (API 12); Android làm host (thường qua adapter OTG); có thể cần hub có nguồn'],
        ['<b>Accessory</b>', 'Android là peripheral dưới host như dock; Android 3.1 (backport 2.3.4); audio từ Android 4.1; hạn chế, không khuyến nghị cho thiết kế mới']
      ] },
      { t: 'list', items: [
        '<b>USB Audio Class</b>: UAC1 và UAC2; class-compliant (“driverless”). Android nhắm tới tập con của UAC1, nhà cung cấp nên chuẩn bị UAC2.',
        '<b>Ba sub-mode isochronous</b>: <i>Adaptive</i> (peripheral thích ứng sample rate của host; dùng cho audio), <i>Asynchronous</i> (implicit feedback — peripheral đặt sample rate, có thể giảm jitter đồng hồ; dùng cho audio), <i>Synchronous</i> (số byte cố định mỗi frame, ít dùng cho audio). Thông lượng lý thuyết ≈ 1.023.000 byte/s full speed, 8.192.000 byte/s high speed (thực tế thấp hơn).',
        '<b>Host mode (Android 5.0 / API 21+)</b>: PCM (interface type I); bit depth 16, 24, 32 (24-bit căn trái trong từ 32-bit); sample rate 48, 44,1, 32, 24, 22,05, 16, 12, 11,025, 8 kHz; mono hoặc stereo.',
        '<b>Accessory mode audio</b>: phát từ thiết bị tới host; 16-bit PCM, 44,1 kHz, stereo.',
        '<b>Định tuyến</b>: Android phát hiện ngoại vi tương thích và định tuyến theo audio policy; nội dung stereo phát trên hai kênh đầu; không có API USB riêng; app nhận biết USB có thể cần tắt định tuyến tự động trong Developer Options (mục Media).',
        '<b>Yêu cầu OEM/SoC</b>: phần cứng hỗ trợ host mode; khai báo <code>android.hardware.usb.host.xml</code>; bật tuỳ chọn kernel USB host, USB audio, isochronous; kernel mới (có workaround thiết bị lạ); thêm <code>audio.usb.default</code> vào <code>PRODUCT_PACKAGES</code>; module <code>usb</code> trong <code>audio_policy.conf</code> (output <code>usb_accessory</code>, <code>usb_device</code>; input <code>usb_device</code>; rate/channel/format động). HAL ở <code>hardware/libhardware/modules/usbaudio/</code>, phụ thuộc tinyalsa.',
        '<b>Nhà sản xuất ngoại vi</b>: thiết kế class-compliant, tránh quirk, test với thiết bị Android tham chiếu và phổ biến, ghi rõ tính năng/nguồn/tuân thủ. <b>Đánh đổi</b>: DAC ngoài có thể tăng chất lượng và cách ly analog khỏi bo mạch ồn, nhưng thêm chi phí, độ phức tạp, điểm lỗi và độ trễ bộ điều khiển USB.'
      ] },
      { t: 'widget', name: 'usb-audio-limits', title: 'Cấu hình USB audio host có hợp lệ?' }
    ] },
    { icon: '📺', title: 'TV audio', blocks: [
      { t: 'p', x: '<b>TV Input Framework (TIF)</b> phối hợp với API định tuyến audio để đổi đường âm thanh linh hoạt. SoC cài TV HAL cấp cho mỗi TV input (HDMI IN, tuner) <code>TvInputHardwareInfo</code> mô tả <b>AudioPort</b>. Đầu vào/ra vật lý ánh xạ sang <code>AudioPort</code>; luồng phần mềm là <code>AudioMixPort</code> (lớp con).' },
      { t: 'list', items: [
        '<b>Yêu cầu audio HAL</b>: mỗi đầu vào audio TV có source port, mỗi đầu ra có sink port; tạo được <b>audio patch</b> giữa mọi cổng vào và cổng ra TV; trên Android TV, AudioRecord với nguồn DEFAULT phải chiếm virtual null input cho <code>AUDIO_DEVICE_IN_DEFAULT</code>; <code>AUDIO_DEVICE_IN_LOOPBACK</code> phải mang bản trộn đầy đủ mọi đầu ra TV ở 11 kHz hoặc 48 kHz, 16-bit mono (chỉ để capture).',
        '<b>Thiết bị trong audio.h</b>: đầu ra HDMI (<code>AUDIO_DEVICE_OUT_HDMI</code>), HDMI ARC (<code>AUDIO_DEVICE_OUT_HDMI_ARC</code>), S/PDIF; đầu vào HDMI, TV tuner, S/PDIF, loopback.',
        '<b>Mở rộng HAL</b>: cấu trúc <code>audio_port_config</code>, <code>audio_port</code>; <code>audio_hw_device</code> thêm <code>create_audio_patch</code>, <code>release_audio_patch</code>, <code>get_audio_port</code>, <code>set_audio_port_config</code>.',
        '<b>Ví dụ loopback</b>: tìm source port loopback và sink port mix, tạo patch, ghi 5 giây PCM mono 48 kHz ra <code>/sdcard/record_loopback.raw</code> (cần quyền <code>MODIFY_AUDIO_ROUTING</code>, <code>WRITE_EXTERNAL_STORAGE</code>); kéo về bằng adb, phát bằng FFmpeg.',
        '<b>Use case</b>: tuner + loa — khi tuner hoạt động, routing API tạo patch từ tuner tới output mặc định (không cần giải mã, mix cuối với luồng phần mềm); HDMI out khi xem live TV — người dùng chuyển sang HDMI thì mọi output stream chuyển sang cổng HDMI_OUT, TIF đổi sink port của patch tuner sang HDMI_OUT.'
      ] }
    ] },
    { icon: '🐞', title: 'Debug audio và warmup', blocks: [
      { t: 'table', head: ['Công cụ', 'Đặc điểm'], rows: [
        ['<b>Tee sink</b> (AudioFlinger)', 'Chỉ trong build tuỳ chỉnh; giữ cửa sổ ngắn âm thanh gần nhất để so với kỳ vọng. Mặc định tắt cả lúc biên dịch lẫn chạy: cần build userdebug/eng, build lại <code>libaudioflinger.so</code> với <code>TEE_SINK</code>, đặt property <code>af.tee</code> (0–7 = tổng ba cờ: input, đầu ra FastMixer, từng track AudioRecord/AudioTrack). Dump .wav ở <code>/data/misc/audioserver</code> (Android 5.x–6.x: <code>/data/misc/media</code>)'],
        ['<b><code>dumpsys media.audio_flinger</code></b>', 'Báo nơi file tee sink được ghi; dump theo track không hiện trong đầu ra nhưng được lưu khi track đóng'],
        ['<b>ALOGx</b>', 'Macro log native: spam có thể tràn buffer chung; lời gọi kernel có thể chặn và gây priority inversion ở luồng quan trọng (FastMixer, FastCapture); log đã tắt không khôi phục được'],
        ['<b>NBLog / media.log / MediaLogService</b>', 'Buffer vòng không chặn, lock-free trong shared memory, ghi không cần lời gọi kernel (ngoài timestamp tuỳ chọn); <code>dumpsys media.log</code> dump và xoá theo yêu cầu; log sống sót khi <code>mediaserver</code> crash; chỉ hoạt động khi <code>ro.test_harness</code> = 1; mỗi luồng một timeline (dùng chung cần mutex hoặc <code>NBLog::LockedWriter</code> làm mất lợi ích không chặn)'],
        ['<b>ADB</b>', '<code>adb root</code>, <code>adb remount</code>, <code>adb disable-verity</code>; kiểm tra <code>ro.debuggable</code>']
      ] },
      { t: 'warn', x: 'Sau khi debug: tắt tee sink, xoá <code>/data/local.prop</code> và các file .wav còn lại, xem xét vấn đề riêng tư của file dump trước khi chia sẻ; chạy <code>dumpsys</code> sớm sau bài test vì không gian ghi có hạn.' },
      { t: 'h3', x: 'Audio warmup' },
      { t: 'list', items: [
        '<b>Định nghĩa</b>: thời gian mạch khuếch đại audio cần để cấp đủ nguồn và hoạt động bình thường; góp phần chính là quản lý nguồn và logic “de-pop” ổn định mạch.',
        '<b>Đo output warmup</b>: FastMixer tự đo và báo qua <code>dumpsys media.audio_flinger</code> — trong warmup nó gọi HAL <code>write()</code> liên tục tới khi khoảng cách giữa các lần ghi khớp giá trị kỳ vọng. Các bước: bảo đảm FastMixer bật; bật touch sounds; để audio rảnh ≥ 3 giây (tốt hơn ≥ 5 giây); nhấn Home tạo tiếng click; chạy <code>adb shell dumpsys media.audio_flinger | grep measuredWarmup</code> (báo <code>measuredWarmup</code> ms và <code>warmupCycles</code>); đo 5 lần lấy trung bình — biến thiên lớn là đo sai (rảnh chưa đủ thì giá trị thấp giả).',
        '<b>Đo input warmup</b>: không có công cụ riêng; ước lượng bằng thời gian <code>startRecording()</code> trả về.',
        '<b>Giảm warmup</b>: thiết kế mạch tốt; trì hoãn chính xác trong driver kernel; chạy song song các thao tác warmup độc lập; giữ mạch có điện hoặc tránh cấu hình lại clock (đổi lại tăng điện năng khi rảnh); cache tham số đã tính. Tối ưu quá mức gây tiếng pop ở chuyển tiếp nguồn.'
      ] }
    ] }
  ],
  summary: [
    'MIDI 1.0 (5-pin DIN/USB/BLE/virtual), MIDI 2.0 qua USB từ Android 13; AMidi NDK từ Android 10; tính năng android.software.midi.',
    'USB audio: isochronous không truyền lại; host mode PCM 16/24/32-bit, mono/stereo; accessory mode hạn chế; thêm audio.usb.default.',
    'TV audio: AudioPort, audio patch, loopback 11/48 kHz mono 16-bit; tuner + HDMI out chuyển bằng patch.',
    'Debug: tee sink (af.tee), NBLog lock-free (ro.test_harness=1); warmup đo bằng measuredWarmup.'
  ],
  cards: [
    ['MIDI là gì?', 'Giao thức chuẩn nối nhạc cụ, máy tính, đèn sân khấu (không phải audio).'],
    ['MIDI 2.0 trên Android?', 'USB từ Android 13; transport ảo từ Android 15.'],
    ['AMidi?', 'NDK API cho MIDI (Android 10).'],
    ['Cờ kernel MIDI USB host?', 'CONFIG_SND_RAWMIDI, CONFIG_SND_USB_MIDI.'],
    ['Số kênh MIDI?', '16 (1–16, biểu diễn 0–15).'],
    ['Isochronous nghĩa là?', 'Đảm bảo băng thông, CRC nhưng không truyền lại.'],
    ['USB audio không hỗ trợ ở mode nào?', 'Development.'],
    ['Host mode audio hỗ trợ?', 'PCM 16/24/32-bit, mono/stereo, 8–48 kHz.'],
    ['Module HAL USB audio?', 'hardware/libhardware/modules/usbaudio/ (tinyalsa).'],
    ['TV audio patch?', 'Nối bất kỳ cổng vào TV tới bất kỳ cổng ra TV.'],
    ['AUDIO_DEVICE_IN_LOOPBACK?', 'Bản trộn mọi đầu ra TV, 11/48 kHz mono 16-bit, chỉ capture.'],
    ['Tee sink bật bằng?', 'TEE_SINK + af.tee (0–7).'],
    ['NBLog điều kiện hoạt động?', 'ro.test_harness = 1.'],
    ['Đo output warmup?', 'dumpsys media.audio_flinger | grep measuredWarmup.'],
    ['Giảm warmup rủi ro?', 'Tiếng pop ở chuyển tiếp nguồn nếu tối ưu quá mức.']
  ],
  quiz: [
    { q: 'Android 13 thêm MIDI 2.0 qua:', o: ['BLE', 'USB', 'Virtual', 'DIN'], a: 1, e: 'Android 15 thêm virtual.' },
    { q: 'Số kênh trong một luồng MIDI:', o: ['8', '16', '32', '64'], a: 1, e: 'Cần nhiều cổng cho nhiều hơn.' },
    { q: 'USB audio KHÔNG hỗ trợ ở:', o: ['Host', 'Accessory', 'Development', 'Mọi mode'], a: 2, e: 'Chỉ lộ fastboot/adb.' },
    { q: 'Isochronous khi lỗi dữ liệu:', o: ['Truyền lại', 'Không truyền lại', 'Dừng bus', 'Giảm tốc'], a: 1, e: 'Có CRC phát hiện lỗi.' },
    { q: 'Bit depth USB host hỗ trợ:', o: ['8, 16', '16, 24, 32', '12, 20', 'Chỉ 24'], a: 1, e: '24-bit căn trái trong từ 32-bit.' },
    { q: 'Thành phần TIF mô tả AudioPort cho input:', o: ['TvInputHardwareInfo', 'AudioTrack', 'MidiDevice', 'USBManager'], a: 0, e: 'SoC cung cấp.' },
    { q: 'Loopback TV là:', o: ['11 hoặc 48 kHz, 16-bit mono, chỉ capture', '44,1 kHz stereo', '96 kHz 24-bit', 'Chỉ playback'], a: 0, e: 'Mang bản trộn mọi đầu ra.' },
    { q: 'af.tee có giá trị:', o: ['0–1', '0–7', '0–255', 'true/false'], a: 1, e: 'Tổng ba cờ.' },
    { q: 'NBLog chỉ hoạt động khi:', o: ['ro.test_harness = 1', 'ro.debuggable = 0', 'af.tee = 7', 'Luôn luôn'], a: 0, e: 'Dump bằng dumpsys media.log.' },
    { q: 'Input warmup đo bằng:', o: ['measuredWarmup', 'Thời gian startRecording()', 'af.tee', 'NBLog'], a: 1, e: 'Không có công cụ riêng.' }
  ],
  match: [
    ['AMidi', 'MIDI cho NDK'],
    ['isochronous', 'Truyền audio USB không retransmit'],
    ['audio.usb.default', 'Module HAL USB audio'],
    ['AudioPort', 'Cổng audio trong TV HAL'],
    ['tee sink', 'Giữ audio gần nhất để debug'],
    ['NBLog', 'Log lock-free'],
    ['measuredWarmup', 'Kết quả đo warmup']
  ]
});
