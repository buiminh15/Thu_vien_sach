// Android Audio – Chương 3: Latency, AAudio/MMAP, priority inversion, resampling.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospaudio = BOOK_DATA.aospaudio || { chapters: [] };
BOOK_DATA.aospaudio.chapters.push({
  n: 3,
  title: 'Latency: FAST mixer, AAudio/MMAP, priority inversion, resampling',
  intro: '“Audio latency is the time delay as an audio signal passes through a system.” Yêu cầu nằm ở mục 5.6 (Audio Latency) của CDD. Chương này nói về nguyên nhân gây độ trễ và glitch, thiết kế giảm trễ bằng <b>FAST mixer</b>, <b>AAudio/MMAP</b>, cách tránh <b>priority inversion</b> và <b>sample rate conversion</b>.',
  sections: [
    { icon: '⏱️', title: 'Yếu tố góp phần vào độ trễ', blocks: [
      { t: 'list', items: [
        '<b>Bề mặt</b>: ứng dụng; tổng số buffer trong pipeline; kích thước mỗi buffer (frame); độ trễ thêm sau AP (ví dụ DSP). Mạch analog được giả định đóng góp ít.',
        '<b>Số lượng và kích thước buffer là hệ quả, không phải nguyên nhân gốc</b>: nhà thiết kế hay tăng buffer sau underrun/overrun để hết click/pop — làm tăng trễ. Nên tìm và sửa nguyên nhân gốc, có thể cho phép buffer nhỏ hơn.'
      ] },
      { t: 'table', head: ['Nguyên nhân underrun/overrun', 'Chi tiết'], rows: [
        ['<b>CFS</b> (Completely Fair Scheduler)', 'Công bằng trong thời gian dài nhưng trong cửa sổ ngắn có thể chiếm quyền luồng ưu tiên cao bằng luồng thấp. Luồng audio dùng <code>SCHED_FIFO</code> (Android 4.1+)'],
        ['<b>Ưu tiên SCHED_FIFO</b>', 'Luồng audio ở ưu tiên 2 hoặc 3; luồng ưu tiên thấp hơn nên dùng 1; để dành 4–99 cho luồng có thời gian thực thi bị chặn và không ảnh hưởng audio'],
        ['<b>Rate-monotonic</b>', 'Ưu tiên cố định theo chu kỳ luồng (chu kỳ ngắn hơn → ưu tiên cao hơn), không theo mức “quan trọng” cảm nhận'],
        ['<b>Priority inversion</b>', 'Luồng ưu tiên cao bị chặn vô hạn khi luồng thấp giữ mutex'],
        ['<b>Độ trễ lập lịch</b>', 'Trên khoảng 2 ms gây vấn đề audio; dễ xảy ra khi chuyển chế độ CPU'],
        ['<b>Ngắt</b>', 'Handler dài hoặc tắt ngắt lâu trên CPU 0 trì hoãn ngắt hoàn tất DMA audio; handler nên xong nhanh và đẩy việc sang luồng'],
        ['<b>Quản lý điện/nhiệt</b>', 'Thao tác làm đứng bộ xử lý phải có thời gian xấu nhất chấp nhận được khi audio hoạt động'],
        ['<b>Kernel bảo mật (DRM)</b>', 'Có thể làm đứng lõi theo cách không hiện trong trace context-switch (“dark time”)']
      ] }
    ] },
    { icon: '🚀', title: 'Thiết kế giảm độ trễ: FAST mixer', blocks: [
      { t: 'p', x: 'Dành cho OEM/SoC vendor. Hai tính năng: <b>FAST mixer</b> trong AudioFlinger (Android 4.1) và <b>AAudio MMAP</b> (Android 8.1) cho độ trễ thấp hơn nữa với ứng dụng native.' },
      { t: 'list', items: [
        '<b>Tạo track</b>: client đặt cờ FAST khi tạo AudioTrack — native audio (OpenSL ES, AAudio), <code>SoundPool</code>, <code>ToneGenerator</code>. Yêu cầu qua ba điểm kiểm: client AudioTrack có thể từ chối; server AudioFlinger có thể từ chối (báo qua một bit trong control block bộ nhớ chia sẻ); quyết định dựa trên việc có fast mixer cho output, sample rate và buffer size của track, có callback thread, còn slot fast track. Chấp nhận → <b>fast track</b>, ngược lại → <b>normal track</b>. FAST chỉ là gợi ý, không đảm bảo.',
        '<code>AUDIO_OUTPUT_FLAG_FAST</code> là khái niệm phía client, không xuất hiện ở server; <code>TRACK_FAST</code> là yêu cầu client → server.'
      ] },
      { t: 'table', head: ['', 'Fast mixer', 'Normal mixer'], rows: [
        ['Số track', 'Tối đa 7 fast track + sub-mix của normal mixer', 'Tối đa 32 track'],
        ['Tính năng', 'Chỉ attenuation từng track; <b>không</b> SRC, <b>không</b> effects', 'Attenuation, sample rate conversion, effects'],
        ['Chu kỳ', '≈ 2–3 ms (5 ms nếu lập lịch cần), mục tiêu tổng ≈ 10 ms; tới 20 ms làm xấu độ trễ', 'Bội số nguyên đầu tiên của chu kỳ fast mixer mà ≥ 20 ms'],
        ['Lập lịch', '<code>SCHED_FIFO</code> nâng cao; jitter gây underrun nếu chạy trễ, kéo sớm nếu chạy sớm', '<code>SCHED_OTHER</code>; có thể chặn trên mutex và pipe'],
        ['Đồng bộ', 'Tránh chặn (trừ ghi HAL), dùng thuật toán lock-free', 'Cấp sub-mix qua pipe chặn vào track 0 của fast mixer'],
        ['Đầu ra', 'Chủ yếu tới audio HAL', '—']
      ] },
      { t: 'widget', name: 'audio-latency-calc', title: 'Tính độ trễ đầu ra từ buffer' }
    ] },
    { icon: '⚡', title: 'AAudio và MMAP', blocks: [
      { t: 'p', x: 'AAudio là API audio C native (Android 8.0). Android 8.1 giảm độ trễ khi HAL và driver hỗ trợ MMAP. “Enable the MMAP feature only on Android O MR1 or higher.”' },
      { t: 'table', head: ['Chế độ', 'Mô tả'], rows: [
        ['<b>EXCLUSIVE</b>', 'Client ghi trực tiếp vào buffer memory-mapped chia sẻ với driver ALSA, bỏ qua mixer → độ trễ thấp nhất'],
        ['<b>SHARED</b>', 'Buffer MMAP được mixer trong AudioServer đọc — đường dùng cho đa số âm thanh khác'],
        ['<b>Capture</b>', 'Cùng mô hình, dữ liệu PCM chảy ngược chiều']
      ] },
      { t: 'list', items: [
        '<b>Timing</b>: buffer MMAP chạy NOIRQ nên không có bộ đếm đọc/ghi chung; client giữ mô hình thời gian của phần cứng. AAudio service định kỳ lấy timestamp từ HAL và chuyển cho client qua atomic message queue (SHARED: mô hình nằm trong AAudioService).',
        '<b>Yêu cầu HAL</b>: báo khả năng MMAP; cài <code>start</code>, <code>stop</code>, <code>createMmapBuffer</code>, <code>getMmapPosition</code> (HAL cũ/HIDL; với TinyALSA dùng <code>pcm_mmap_begin</code>, <code>pcm_mmap_get_hw_ptr</code>); tuỳ chọn ioctl riêng cho buffer EXCLUSIVE; cung cấp thêm đường dữ liệu phần cứng (DSP software mixer hoặc hardware mixer của SoC) chạy song song với đường AudioFlinger; khai báo mixPort MMAP/NOIRQ cho output/input trong <code>audio_policy_configuration.xml</code>.',
        '<b>Shared memory / fd</b>: SELinux chặn client nhận fd <code>/dev/snd/</code> (quyền quá rộng); EXCLUSIVE phải đổi fd của driver sang <code>anon_inode:dmabuf</code> (tạo bằng ION allocator) rồi chuyển cho client. HAL báo hỗ trợ qua kích thước buffer MMAP trước Android 10, và qua cờ <code>AUDIO_MMAP_APPLICATION_SHAREABLE</code> từ Android 10.',
        '<b>Fallback</b>: AAudio quay về đường AudioFlinger cũ nếu MMAP không hỗ trợ hoặc mở stream thất bại.'
      ] },
      { t: 'table', head: ['Giá trị <code>aaudio.mmap_policy</code>', 'Ý nghĩa'], rows: [
        ['1 — <code>AAUDIO_POLICY_NEVER</code>', 'Chỉ dùng đường cũ'],
        ['2 — <code>AAUDIO_POLICY_AUTO</code>', 'Thử MMAP rồi fallback đường cũ'],
        ['3 — <code>AAUDIO_POLICY_ALWAYS</code>', 'Chỉ MMAP, không fallback']
      ] },
      { t: 'list', items: [
        '<code>aaudio.mmap_exclusive_policy</code> = 2 cho phép fallback từ EXCLUSIVE sang SHARED. Đặt trong Makefile qua <code>PRODUCT_PROPERTY_OVERRIDES</code> hoặc sau boot bằng <code>adb setprop</code> rồi <code>killall audioserver</code>.',
        '<b>Kiểm thử</b>: <code>AAudio_setMMapPolicy()</code> (trong <code>AAudioTesting.h</code>); <code>AAudioStream_isMMapUsed()</code> báo stream có thật sự dùng MMAP không (tránh test vô tình chạy đường cũ).'
      ] },
      { t: 'widget', name: 'mmap-policy', title: 'mmap_policy nào?' }
    ] },
    { icon: '🔒', title: 'Tránh priority inversion', blocks: [
      { t: 'warn', x: 'Priority inversion là lỗi thời gian thực kinh điển: luồng ưu tiên cao bị chặn (có thể vô hạn) khi luồng thấp giữ tài nguyên chung như mutex. Trong audio biểu hiện là click, pop, mất tiếng, lặp âm từ bộ đệm vòng hoặc phản hồi lệnh trễ. Tăng buffer chỉ là cách chữa tạm, thêm trễ và che nguyên nhân.' },
      { t: 'list', items: [
        '<b>Điểm nóng</b>: giữa normal và fast mixer trong AudioFlinger; giữa callback thread của fast AudioTrack/AudioRecord và fast mixer/capture thread; bên trong audio HAL (telephony, khử vọng); trong driver audio kernel; giữa callback thread và các luồng khác của app (nền tảng không kiểm soát được).',
        '<b>Giải pháp phổ biến và hạn chế</b>: tắt ngắt không thực tế ở user space Linux và không hiệu quả trên SMP; futex kế thừa ưu tiên bị tránh vì nặng và giả định client tin cậy.',
        '<b>Kỹ thuật Android dùng</b>: try-lock/timed lock (có thể làm đói server khi client bận, timeout cộng dồn dài); thao tác nguyên tử (increment/OR/AND trả giá trị cũ, có rào SMP); FIFO không chặn một-đọc-một-ghi; <b>sao chép</b> thay vì chia sẻ trạng thái; trạng thái chia sẻ cỡ một từ; <b>state queue</b> cho trạng thái nhiều từ (writer gộp các push liền kề); memory barrier; kiểm tra tính hợp lệ trạng thái chia sẻ liên tiến trình (kiểm biên chỉ số…), bỏ qua với luồng cùng tiến trình, tiến trình cùng UID tin cậy lẫn nhau và dữ liệu PCM.',
        'Thuật toán không chặn ngoài FIFO một-đọc-một-ghi phức tạp và dễ sai; <code>nbaio</code> và <code>StateQueue</code> chỉ dành cho AudioFlinger. Ví dụ FIFO cho app: <code>frameworks/av/audio_utils</code>.',
        '<b>Công cụ</b>: không có công cụ tự động đáng tin cậy phát hiện trước; Systrace và <code>ps -t -p</code> giúp chẩn đoán sau khi xảy ra; review mã cẩn thận là quan trọng nhất. Mutex vẫn ổn cho mã thường không nhạy thời gian.'
      ] }
    ] },
    { icon: '🎚️', title: 'Sample rate conversion', blocks: [
      { t: 'p', x: 'Resampling đổi tần số lấy mẫu; bộ đổi gọi là <i>resampler</i> (đầu vào là <i>source</i>, đầu ra là <i>sink</i>). Android dùng khi tần số nội dung khác tần số nội bộ của thiết bị (ví dụ MP3 44,1 kHz phát trên thiết bị trộn ở 48 kHz).' },
      { t: 'list', items: [
        '<b>Thước đo chất lượng</b>: giữ biên độ; giữ băng thông (bị giới hạn bởi sink rate); độ trễ tổng; pha và group delay nhất quán; chi phí tính toán; tỷ lệ source→sink và định dạng mẫu hỗ trợ; đổi tỷ lệ động. Không resampler nào thoả mọi thước đo: “ideal resamplers do not exist”.',
        '<b>Bốn resampler mặc định</b> (từ méo nhiều/ít tốn CPU đến méo ít/tốn nhất): <b>Linear → Cubic → Sinc (hệ số gốc) → Sinc (hệ số sửa đổi)</b>. Sinc hợp nhạc chất lượng cao; linear/cubic hợp âm thanh ít đòi hỏi như tiếng bấm phím. Chọn theo use case, tải hệ thống và property <code>af.resampler.quality</code>; OEM tuỳ biến được và tài liệu cảnh báo các bản cài đặt thay đổi thường xuyên (xem mã trong AudioFlinger).'
      ] },
      { t: 'widget', name: 'resampler-pick', title: 'Chọn resampler' }
    ] }
  ],
  summary: [
    'Buffer lớn là hệ quả; tìm nguyên nhân gốc (CFS, ưu tiên, priority inversion, ngắt, nhiệt/điện).',
    'FAST mixer: tối đa 7 fast track, không SRC/effect, chu kỳ 2–3 ms (~10 ms tổng); normal mixer 32 track, ≥ 20 ms.',
    'AAudio/MMAP (8.1+): EXCLUSIVE bỏ qua mixer, SHARED qua mixer; mmap_policy 1/2/3; fd dmabuf thay /dev/snd.',
    'Tránh priority inversion bằng lock-free FIFO, state queue, sao chép; resampler: linear < cubic < sinc.'
  ],
  cards: [
    ['Audio latency là gì?', 'Độ trễ khi tín hiệu âm thanh đi qua hệ thống.'],
    ['Yêu cầu độ trễ ở đâu?', 'CDD mục 5.6 (Audio Latency).'],
    ['Vì sao tăng buffer không phải cách tốt?', 'Che nguyên nhân gốc và tăng trễ.'],
    ['Lập lịch của luồng audio?', 'SCHED_FIFO (Android 4.1+), ưu tiên 2 hoặc 3.'],
    ['Độ trễ lập lịch gây vấn đề?', 'Trên khoảng 2 ms.'],
    ['FAST mixer từ Android mấy?', 'Android 4.1.'],
    ['Số fast track tối đa?', '7 (normal mixer: 32 track).'],
    ['Fast mixer không có gì?', 'Sample rate conversion và effects.'],
    ['Chu kỳ fast mixer?', '≈ 2–3 ms (mục tiêu ≈ 10 ms tổng).'],
    ['AAudio từ Android mấy; MMAP?', 'AAudio 8.0; MMAP giảm trễ từ 8.1.'],
    ['EXCLUSIVE khác SHARED?', 'Bỏ qua mixer vs qua mixer AudioServer.'],
    ['mmap_policy giá trị?', '1 NEVER, 2 AUTO, 3 ALWAYS.'],
    ['Vì sao đổi fd sang dmabuf?', 'SELinux chặn chuyển fd /dev/snd/ cho client.'],
    ['Kiểm stream có dùng MMAP?', 'AAudioStream_isMMapUsed().'],
    ['Thứ tự resampler?', 'Linear, Cubic, Sinc (gốc), Sinc (sửa đổi).']
  ],
  quiz: [
    { q: 'Luồng audio thường chạy ở:', o: ['SCHED_OTHER', 'SCHED_FIFO', 'SCHED_IDLE', 'CFS thuần'], a: 1, e: 'Từ Android 4.1.' },
    { q: 'Fast mixer KHÔNG làm:', o: ['Attenuation', 'Sample rate conversion', 'Trộn fast track', 'Ghi ra HAL'], a: 1, e: 'Cũng không effects.' },
    { q: 'Cờ FAST là:', o: ['Bảo đảm', 'Gợi ý, có thể bị từ chối', 'Bắt buộc', 'Chỉ HAL'], a: 1, e: 'Client hoặc server có thể từ chối.' },
    { q: 'EXCLUSIVE mode của AAudio:', o: ['Qua mixer', 'Bỏ qua mixer', 'Chỉ capture', 'Chỉ Java'], a: 1, e: 'Độ trễ thấp nhất.' },
    { q: 'mmap_policy = 3 nghĩa:', o: ['Never', 'Auto', 'Always, không fallback', 'Tắt'], a: 2, e: 'AAUDIO_POLICY_ALWAYS.' },
    { q: 'Cách đổi fd driver để chia sẻ với client:', o: ['Giữ nguyên /dev/snd', 'anon_inode:dmabuf qua ION', 'Socket', 'Binder object'], a: 1, e: 'SELinux chặn /dev/snd/.' },
    { q: 'Priority inversion gây:', o: ['Click/pop/mất tiếng', 'Tăng độ phân giải', 'Giảm CPU', 'Cải thiện pin'], a: 0, e: 'Luồng cao bị chặn bởi luồng thấp giữ mutex.' },
    { q: 'Cách tránh dùng trong AudioFlinger:', o: ['FIFO không chặn một-đọc-một-ghi', 'Mutex dài', 'Tắt ngắt user space', 'Futex PI cho mọi nơi'], a: 0, e: 'Cùng state queue, sao chép.' },
    { q: 'Resampler tốn CPU nhất:', o: ['Linear', 'Cubic', 'Sinc sửa đổi', 'Không resample'], a: 2, e: 'Méo ít nhất.' },
    { q: 'Property chọn chất lượng resampler:', o: ['af.resampler.quality', 'audio.src.mode', 'ro.audio.quality', 'sys.src'], a: 0, e: 'OEM có thể tuỳ biến.' }
  ],
  match: [
    ['SCHED_FIFO', 'Lập lịch thời gian thực cho audio'],
    ['fast track', 'Track độ trễ thấp qua FAST mixer'],
    ['EXCLUSIVE', 'Ghi thẳng buffer MMAP'],
    ['aaudio.mmap_policy', 'Chính sách dùng MMAP'],
    ['StateQueue', 'Trạng thái nhiều từ không chặn'],
    ['dark time', 'Khoảng đứng do kernel bảo mật'],
    ['af.resampler.quality', 'Chọn chất lượng resampler']
  ]
});
