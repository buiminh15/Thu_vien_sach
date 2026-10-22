// Android Architecture – Chương 9: 16 KB page size.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 9,
  title: '16 KB page size',
  intro: '<b>Page</b> là đơn vị mà hệ điều hành quản lý bộ nhớ. Hầu hết CPU dùng trang 4 KB, nhưng CPU ARM cũng hỗ trợ trang <b>16 KB</b>. Từ Android 15, AOSP có thể build Android cho trang 16 KB: tốn bộ nhớ hơn nhưng cải thiện hiệu năng hệ thống. Chương này nói về yêu cầu, cách build, ảnh hưởng tới native code và cách kiểm tra.',
  sections: [
    { icon: '📏', title: 'Tổng quan và yêu cầu', blocks: [
      { t: 'p', x: 'Ở Android 15 tuỳ chọn này <b>tắt mặc định</b>; có qua developer mode/developer options để OEM và nhà phát triển ứng dụng chuẩn bị cho việc chuyển sang 16 KB ở mọi nơi trong tương lai.' },
      { t: 'table', head: ['Hạng mục', 'Chi tiết'], rows: [
        ['<b>Phần cứng / kernel</b>', 'Chỉ <code>arm64</code> chạy kernel 16 KB. 16 KB ELF alignment (Android 15+) chạy được với cả kernel 4 KB và 16 KB từ nhánh <code>android14-6.1</code>. Với <code>x86_64</code> có thể mô phỏng userspace 16 KB trên Cuttlefish'],
        ['<b>Build kernel</b>', 'Kleaf: cờ <code>--page_size=16k</code>. Cấu hình Linux trực tiếp: bật <code>CONFIG_ARM64_16K_PAGES</code> thay <code>CONFIG_ARM64_4K_PAGES</code>. Có GKI 16 KB dựng sẵn trong tài liệu GKI release'],
        ['<b>Build userspace</b>', '<code>PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO := true</code> (bỏ define <code>PAGE_SIZE</code> lúc biên dịch → xác định page size lúc chạy); <code>PRODUCT_MAX_PAGE_SIZE_SUPPORTED := 16384</code> (căn ELF nền tảng ở 16 KB; lớn hơn mức cần thiết để tương thích tương lai)'],
        ['<b>Thư viện ngoài cây AOSP</b>', 'Truyền cờ linker <code>-Wl,-z,max-page-size=16384</code>; thư viện trong cây chỉ cần hai thiết lập sản phẩm trên']
      ] },
      { t: 'key', x: 'Kernel luôn làm tròn yêu cầu lên <b>cả trang</b>. Trên hệ 4 KB, vùng 5 KB tốn 8 KB; trên kernel 16 KB, vùng 1–5 KB tốn 16 KB và vùng 17 KB tốn 32 KB. Hai vùng 4 KB (8 KB trên hệ 4 KB) nếu mỗi vùng thành một trang 16 KB thì tốn 32 KB.' },
      { t: 'widget', name: 'page-waste', title: 'Tính bộ nhớ thực tế theo page size' }
    ] },
    { icon: '🛠️', title: 'Tác động tới ứng dụng và native code', blocks: [
      { t: 'list', items: [
        'Phần lớn code ứng dụng không động tới page size; hướng dẫn chủ yếu cho native code quản lý bộ nhớ, thành phần tối ưu cao, giao tiếp trực tiếp kernel, thao tác file nhiều.',
        '<b>mmap</b>: luôn truyền kích thước là <b>bội của page size</b> để bộ nhớ kernel cấp hiển thị với tiến trình thay vì bị tiêu hao âm thầm. Yêu cầu 4096 byte trên hệ 16 KB lãng phí 12 KB.',
        '<b>Gộp</b> các vùng read-write anonymous nhỏ vào một trang khi có thể.',
        '<b>Phát hiện lãng phí</b>: xem <code>/proc/&lt;pid&gt;/maps</code>, <code>/proc/&lt;pid&gt;/smaps</code>, công cụ <code>showmap</code>, hoặc <code>strace</code> tiến trình.',
        '<b>Dung lượng đĩa</b>: thiết bị ra mắt Android 15+ ship ELF căn 16 KB mặc định (nhiều app cũng vậy) nên file có thể có nhiều padding hơn; so sánh <code>du</code> (kích thước thật trên đĩa) với <code>du -b</code> (kích thước biểu kiến). Biểu kiến > thật: file nén hoặc sparse; thật > biểu kiến: nhiều metadata hoặc phân mảnh.'
      ] }
    ] },
    { icon: '✅', title: 'Kiểm chứng', blocks: [
      { t: 'steps', items: [
        'Sau khi chọn target <code>lunch</code>, chạy <code>get_build_var TARGET_MAX_PAGE_SIZE_SUPPORTED</code> (kỳ vọng <code>16384</code>) và <code>TARGET_NO_BIONIC_PAGE_SIZE_MACRO</code> (kỳ vọng <code>true</code>).',
        'Build qua không đảm bảo chạy đúng — <b>kiểm thử trên kernel 16 KB</b> là cách tin cậy nhất.',
        '<b>Android 16+</b>: <code>PRODUCT_CHECK_PREBUILT_MAX_PAGE_SIZE := true</code> kiểm prebuilt lúc build; tạm bỏ qua bằng <code>ignore_max_page_size: true</code> (Android.bp) hoặc <code>LOCAL_IGNORE_MAX_PAGE_SIZE := true</code> (Android.mk).',
        '<b>Android 15+</b>: <code>atest elf_alignment_test</code> kiểm căn chỉnh ELF trên thiết bị.'
      ] },
      { t: 'tip', x: 'Các trang con: dùng Cuttlefish 16 KB trên ARM64, mô phỏng trên x86-64, flash Pixel hỗ trợ 16 KB, lấy page size (getting-page-size), system properties, bật toggle 16 KB trong developer option, bật backcompat option.' }
    ] }
  ],
  summary: [
    'Page 16 KB chỉ cho arm64; tốn bộ nhớ hơn nhưng nhanh hơn; mặc định tắt ở Android 15.',
    'Userspace: PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO và PRODUCT_MAX_PAGE_SIZE_SUPPORTED := 16384; ngoài cây: -Wl,-z,max-page-size=16384.',
    'Native code: mmap theo bội của page size, gộp vùng nhỏ.',
    'Kiểm: get_build_var, elf_alignment_test, PRODUCT_CHECK_PREBUILT_MAX_PAGE_SIZE (Android 16+), chạy thật trên kernel 16 KB.'
  ],
  cards: [
    ['Page là gì?', 'Đơn vị OS quản lý bộ nhớ (thường 4 KB; ARM hỗ trợ cả 16 KB).'],
    ['16 KB từ Android mấy?', 'Android 15 (tuỳ chọn, mặc định tắt).'],
    ['Đánh đổi của 16 KB?', 'Tốn bộ nhớ hơn, hiệu năng hệ thống tốt hơn.'],
    ['Cờ Kleaf build kernel 16 KB?', '--page_size=16k.'],
    ['Cấu hình Linux?', 'CONFIG_ARM64_16K_PAGES (thay CONFIG_ARM64_4K_PAGES).'],
    ['PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO?', 'Bỏ define PAGE_SIZE lúc biên dịch → xác định lúc chạy.'],
    ['PRODUCT_MAX_PAGE_SIZE_SUPPORTED?', 'Căn ELF nền tảng ở 16 KB (16384).'],
    ['Cờ linker cho thư viện ngoài cây?', '-Wl,-z,max-page-size=16384.'],
    ['Vùng 17 KB trên kernel 16 KB tốn?', '32 KB.'],
    ['Lời khuyên về mmap?', 'Truyền kích thước là bội của page size.'],
    ['Phát hiện lãng phí bộ nhớ?', '/proc/maps, /proc/smaps, showmap, strace.'],
    ['Kiểm căn chỉnh ELF trên thiết bị?', 'atest elf_alignment_test.'],
    ['Kiểm prebuilt lúc build (Android 16+)?', 'PRODUCT_CHECK_PREBUILT_MAX_PAGE_SIZE := true.'],
    ['Mô phỏng 16 KB trên x86_64?', 'Cuttlefish.']
  ],
  quiz: [
    { q: 'Kiến trúc hỗ trợ kernel 16 KB:', o: ['x86', 'arm64', 'mips', 'riscv'], a: 1, e: 'x86_64 chỉ mô phỏng userspace trên Cuttlefish.' },
    { q: 'Vùng 5 KB trên kernel 16 KB tốn:', o: ['5 KB', '8 KB', '16 KB', '32 KB'], a: 2, e: 'Kernel làm tròn lên cả trang.' },
    { q: 'Cấu hình kernel bật 16 KB:', o: ['CONFIG_ARM64_16K_PAGES', 'CONFIG_PAGE_16K', 'CONFIG_HUGEPAGE', 'CONFIG_64BIT'], a: 0, e: 'Thay vì ARM64_4K_PAGES.' },
    { q: 'Cờ linker căn 16 KB:', o: ['-Wl,-z,max-page-size=16384', '-m16k', '-fPIC', '-O2'], a: 0, e: 'Cho thư viện ngoài cây.' },
    { q: 'get_build_var TARGET_MAX_PAGE_SIZE_SUPPORTED kỳ vọng:', o: ['4096', '16384', '65536', 'true'], a: 1, e: 'Kiểm sau lunch.' },
    { q: 'Công cụ kiểm căn ELF trên thiết bị:', o: ['atest elf_alignment_test', 'readelf -h', 'lint', 'gdb'], a: 0, e: 'Android 15+.' },
    { q: 'Khi mmap nên truyền:', o: ['Bất kỳ kích thước', 'Bội của page size', 'Luôn 4096', 'Luôn 1 MB'], a: 1, e: 'Tránh lãng phí âm thầm.' },
    { q: 'Phát hiện lãng phí bằng:', o: ['/proc/smaps', '/proc/cpuinfo', '/proc/version', '/etc/hosts'], a: 0, e: 'Cùng maps, showmap, strace.' },
    { q: '16 KB mặc định ở Android 15 là:', o: ['Bật', 'Tắt (qua developer options)', 'Bắt buộc', 'Bị xoá'], a: 1, e: 'Chuẩn bị cho tương lai.' },
    { q: 'Build qua nghĩa là:', o: ['Chắc chắn chạy đúng', 'Chưa chắc; cần test trên kernel 16 KB', 'Đã kiểm ELF', 'Đã kiểm kernel'], a: 1, e: 'Tài liệu nhấn mạnh test runtime.' }
  ],
  match: [
    ['--page_size=16k', 'Cờ Kleaf kernel 16 KB'],
    ['CONFIG_ARM64_16K_PAGES', 'Kernel config'],
    ['PRODUCT_MAX_PAGE_SIZE_SUPPORTED', 'Căn ELF nền tảng'],
    ['max-page-size', 'Cờ linker'],
    ['elf_alignment_test', 'Kiểm ELF trên thiết bị'],
    ['showmap', 'Xem ánh xạ bộ nhớ'],
    ['Cuttlefish', 'Mô phỏng 16 KB']
  ]
});
