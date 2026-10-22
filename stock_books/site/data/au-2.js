// Android Audio – Chương 2: Data formats, attributes, effects.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospaudio = BOOK_DATA.aospaudio || { chapters: [] };
BOOK_DATA.aospaudio.chapters.push({
  n: 2,
  title: 'Định dạng dữ liệu, audio attributes và effects',
  intro: 'Android dùng nhiều biểu diễn âm thanh nội bộ, nhưng chỉ một phần lộ ra API công khai, định dạng file và HAL. Chương này nói về <b>định dạng dữ liệu</b> (fixed-point Q, float), <b>AudioAttributes</b> (usage, content type, flags, context) và <b>device effects</b> (Android 11+).',
  sections: [
    { icon: '🔢', title: 'Định dạng dữ liệu audio', blocks: [
      { t: 'list', items: [
        '<b>Thuộc tính</b>: nén (không nén / lossless / lossy: PCM; FLAC; MP3, AAC), <b>bit depth</b> (số bit có nghĩa), <b>container size</b> (số bit lưu/truyền; 24-bit trong từ 32-bit), căn chỉnh (<i>packed</i> khi container = bit depth, ngược lại <i>unpacked</i>), có dấu hay không, fixed-point hay floating-point.',
        '<b>Fixed-point</b>: phổ biến nhất cho PCM không nén tại giao diện phần cứng; dùng bù hai cho số có dấu và ký hiệu <b>Q</b>: Qm.n = m bit nguyên + n bit thập phân, tổng m + n + 1 bit; số không dấu dùng ký hiệu U. Guard bit ở phần nguyên cho phép tính trung gian tràn miễn kết quả cuối vừa hoặc kẹp được.',
        '<b>Floating-point</b>: headroom và dải động lớn, hỗ trợ vô cực và NaN, thường dễ dùng; trên phần cứng hiện đại có thể nhanh hơn nếu luồng điều khiển không phụ thuộc giá trị tính toán.'
      ] },
      { t: 'table', head: ['Định dạng', 'Container', 'Dải động xấp xỉ'], rows: [
        ['Q0.7', '8 bit (gọi là “unsigned” nhưng thực chất có dấu kèm bias)', '≈ 42 dB'],
        ['Q0.15', '16 bit', '≈ 90 dB'],
        ['Q0.23', '24 bit packed hoặc 32 bit unpacked', '≈ 138 dB'],
        ['Q0.31', '32 bit', '138–186 dB'],
        ['Float', '32 bit, 25 bit có nghĩa', '≈ 900 dB; headroom ≈ 1,7e+38 cho giá trị trung gian']
      ] },
      { t: 'h3', x: 'Chuyển đổi' },
      { t: 'list', items: [
        '<b>Fixed → float</b>: chuyển số nguyên nguyên trạng rồi nhân 2<sup>−n</sup>. <b>Float → fixed</b>: kẹp về ±1,0 danh định; +1,0 thành một LSB dưới full scale; hành vi vô cực/NaN có thể khác nhau.',
        '<b>Giữa các fixed</b>: tăng bit nguyên = sign-extend, giảm = kẹp; tăng bit thập phân = zero-extend, giảm cần dither, làm tròn hoặc cắt.',
        '<b>Lossless</b>: fixed-point ≤ 25 bit có nghĩa chuyển sang float không mất; float → fixed luôn lossy.'
      ] },
      { t: 'widget', name: 'audio-q', title: 'Tính dải động theo số bit' }
    ] },
    { icon: '🏷️', title: 'Audio attributes', blocks: [
      { t: 'p', x: 'Cho app mô tả nguồn phát để hệ thống quyết định định tuyến, âm lượng, focus và thông báo thay đổi trạng thái audio. Android 4.4 trở xuống quyết định trộn chỉ bằng <i>stream type</i> — không cho kết quả tốt khi nhiều app/thiết bị; attributes thay thế cách đó. App truyền qua API <code>AudioAttributes</code>.' },
      { t: 'table', head: ['Thành phần', 'Chi tiết'], rows: [
        ['<b>Usage</b>', 'Vì sao âm thanh phát (17 giá trị như <code>USAGE_MEDIA</code>, <code>USAGE_ALARM</code>, <code>USAGE_NOTIFICATION</code>, <code>USAGE_GAME</code>, <code>USAGE_ASSISTANT</code>, <code>USAGE_UNKNOWN</code>); mỗi đối tượng đúng một giá trị, loại trừ lẫn nhau; tác động tới âm lượng và định tuyến'],
        ['<b>Content type</b>', 'Âm thanh là gì: movie, music, speech, sonification, unknown (mặc định). Framework dùng để cấu hình khối hậu xử lý audio; tuỳ chọn nhưng nên đặt khi biết'],
        ['<b>Contexts</b> (Android 9+)', 'HAL trừu tượng usage thành context: music, navigation, voice command, call, ringtone, notification, alarm, system sound…'],
        ['<b>Flags</b>', 'Không loại trừ, kết hợp được: <code>FLAG_AUDIBILITY_ENFORCED</code> (đảm bảo nghe được — thay stream system-enforced cũ, ví dụ tiếng chụp ảnh), <code>HW_AV_SYNC</code> (luồng đầu ra hỗ trợ đồng bộ A/V phần cứng)'],
        ['<b>Source, tags/bundle</b>', 'Nguồn ghi âm; cặp khoá-giá trị. Attributes cho ghi âm chưa thuộc API công khai']
      ] },
      { t: 'list', items: [
        '<b>Tương thích</b>: app target Android 5.0+ nên dùng attributes nhưng không bắt buộc. Nếu chỉ dùng stream type, framework tự dịch — <b>không đảm bảo</b> giữa thiết bị, nhà sản xuất, bản Android (<code>STREAM_VOICE_CALL</code> → speech + voice-communication; <code>STREAM_MUSIC</code> → music + vài usage; <code>STREAM_ALARM</code> → alarm).',
        '<b>Android 9</b> deprecate một số stream type cho ô tô (<code>STREAM_MUSIC</code>, <code>STREAM_ALARM</code>, <code>STREAM_NOTIFICATION</code>, <code>STREAM_BLUETOOTH_SCO</code>, <code>STREAM_TTS</code>, <code>STREAM_ACCESSIBILITY</code>) — xem tài liệu Automotive Audio.'
      ] },
      { t: 'widget', name: 'audio-usage', title: 'Usage nào phù hợp?' }
    ] },
    { icon: '🎛️', title: 'Device effects (Android 11+)', blocks: [
      { t: 'p', x: 'Nhà sản xuất có thể tự động gắn và bật effect khi chọn một thiết bị audio để thu/phát. Đường audio nằm hoàn toàn dưới audio HAL (ví dụ nối thẳng thiết bị vào ra) cũng được điều khiển bởi framework effect. Nhắm chủ yếu tới ô tô, áp dụng được cho form factor khác. Ví dụ: effect tăng cường giọng nói cho đầu ra FM tuner định tuyến tới loa qua DSP.' },
      { t: 'list', items: [
        '<b>Điều kiện</b>: effect cài trong thư viện vendor và liệt kê trong <code>audio_effects.xml</code>; là preprocessing/postprocessing (cờ <code>TYPE_PRE_PROC</code>/<code>TYPE_POST_PROC</code> trong <code>EffectDescriptor.flags</code>); effect tăng tốc phần cứng (<code>HW_ACC_TUNNEL</code>) gắn được vào đường nối hoàn toàn dưới HAL, không mở stream nào ở HAL.',
        '<b>Tạo bằng file cấu hình</b>: mục <code>deviceEffects</code> trong <code>audio_effects.xml</code> ánh xạ một <code>devicePort</code> (ví dụ micro tích hợp tại địa chỉ cụ thể) với effect như AGC — tự gắn và bật khi dùng thiết bị.',
        '<b>Tạo bằng System API</b>: constructor <code>@SystemApi</code> mới của <code>AudioEffect</code> nhận UUID effect và <code>AudioDeviceAttributes</code>; bật/tắt bằng API <code>AudioEffect</code> có sẵn; <code>isEffectSupportedForDevice()</code> kiểm tra hỗ trợ.',
        '<b>Thay đổi HAL</b>: Effect HAL V6.0 — <code>createEffect()</code> thêm tham số thiết bị, session phải là hằng <code>DEVICE</code>, I/O handle bị bỏ qua; thiết bị nhận diện bằng <code>AudioPortHandle</code> do framework gán khi định tuyến qua <code>IDevice::createAudioPatch()</code>. Audio HAL phải cài định tuyến bằng <code>createAudioPatch()</code> (báo bởi <code>supportsAudioPatches()</code> = true); thêm <code>addDeviceEffect()</code>/<code>removeDeviceEffect()</code> (tuỳ chọn) để phối hợp audio HAL và effect HAL.'
      ] }
    ] }
  ],
  summary: [
    'Định dạng: PCM fixed-point Qm.n (bù hai) và float; container ≠ bit depth khi unpacked; float → fixed luôn lossy.',
    'AudioAttributes: usage (17 giá trị), content type, flags, contexts (Android 9+); thay thế stream type của Android 4.4 trở xuống.',
    'Stream type cũ được dịch tự động nhưng không đảm bảo nhất quán.',
    'Device effects (Android 11+): deviceEffects trong audio_effects.xml hoặc System API; createEffect với session DEVICE.'
  ],
  cards: [
    ['Bit depth vs container size?', 'Số bit có nghĩa vs số bit lưu/truyền.'],
    ['Packed vs unpacked?', 'Container = bit depth vs lớn hơn (có padding).'],
    ['Ký hiệu Qm.n?', 'm bit nguyên + n bit thập phân, tổng m+n+1 bit.'],
    ['Dải động Q0.15?', '≈ 90 dB.'],
    ['Dải động Q0.23?', '≈ 138 dB.'],
    ['Float → fixed?', 'Kẹp về ±1,0; lossy.'],
    ['Fixed → float lossless khi?', '≤ 25 bit có nghĩa.'],
    ['Vì sao ra đời AudioAttributes?', 'Stream type không đủ biểu đạt cho nhiều app/thiết bị.'],
    ['Số usage?', '17 giá trị, loại trừ lẫn nhau.'],
    ['Content type mặc định?', 'Unknown.'],
    ['Contexts từ Android mấy?', 'Android 9.'],
    ['FLAG_AUDIBILITY_ENFORCED?', 'Đảm bảo nghe được (ví dụ tiếng chụp ảnh).'],
    ['HW_AV_SYNC?', 'Yêu cầu luồng đầu ra hỗ trợ đồng bộ A/V phần cứng.'],
    ['Device effect từ Android mấy?', 'Android 11.'],
    ['Hai cách tạo device effect?', 'deviceEffects trong audio_effects.xml, hoặc System API AudioEffect.']
  ],
  quiz: [
    { q: 'Dải động ≈ 90 dB là của:', o: ['Q0.7', 'Q0.15', 'Q0.23', 'Float'], a: 1, e: '16 bit.' },
    { q: 'Ký hiệu Qm.n có tổng số bit:', o: ['m+n', 'm+n+1', 'm×n', 'n'], a: 1, e: 'Cộng bit dấu.' },
    { q: 'Float → fixed là:', o: ['Lossless', 'Lossy', 'Không thể', 'Chỉ khi 16 bit'], a: 1, e: 'Cần kẹp và làm tròn.' },
    { q: 'Usage mô tả:', o: ['Âm thanh là gì', 'Vì sao âm thanh phát', 'Bit depth', 'Codec'], a: 1, e: 'Content type mô tả âm thanh là gì.' },
    { q: 'Mỗi AudioAttributes có bao nhiêu usage?', o: ['Một', 'Nhiều', 'Không có', 'Hai'], a: 0, e: 'Loại trừ lẫn nhau.' },
    { q: 'Flags có tính chất:', o: ['Loại trừ', 'Kết hợp được', 'Chỉ đọc', 'Chỉ HAL'], a: 1, e: 'Non-exclusive.' },
    { q: 'Contexts có từ:', o: ['Android 5', 'Android 7', 'Android 9', 'Android 12'], a: 2, e: 'HAL trừu tượng usage.' },
    { q: 'Effect gắn thiết bị phải là:', o: ['Pre/post-processing', 'Chỉ reverb', 'Chỉ EQ', 'Bất kỳ'], a: 0, e: 'TYPE_PRE_PROC/TYPE_POST_PROC.' },
    { q: 'Cờ effect tăng tốc phần cứng cho đường dưới HAL:', o: ['HW_ACC_TUNNEL', 'HW_AV_SYNC', 'OFFLOAD', 'FAST'], a: 0, e: 'Không mở stream nào ở HAL.' },
    { q: 'Session khi createEffect cho device effect:', o: ['0', 'DEVICE', 'SESSION_OUTPUT', 'Bất kỳ'], a: 1, e: 'I/O handle bị bỏ qua.' }
  ],
  match: [
    ['Q0.15', '16 bit, ≈ 90 dB'],
    ['AudioAttributes', 'Usage + content type + flags'],
    ['USAGE_ALARM', 'Giá trị usage'],
    ['FLAG_AUDIBILITY_ENFORCED', 'Đảm bảo nghe được'],
    ['deviceEffects', 'Cấu hình effect theo thiết bị'],
    ['AudioPortHandle', 'Định danh thiết bị trong HAL'],
    ['dither', 'Giảm lỗi khi giảm bit thập phân']
  ]
});
