// Android Architecture – Chương 3: Kernel, ACK và GKI.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 3,
  title: 'Kernel: ACK, GKI và KMI',
  intro: 'Kernel Android bắt đầu từ Linux LTS cộng thêm patch của Android (<b>ACK</b>). Từ 5.10 trở đi, ACK trở thành <b>GKI</b>: lõi kernel chung + module nạp được, với giao diện <b>KMI</b> ổn định giữa kernel và module của vendor. Chương này nói về động lực, kiến trúc, đặt tên, nhánh phát triển và quy tắc giữ KMI ổn định.',
  sections: [
    { icon: '🐧', title: 'Từ Linux LTS đến ACK', blocks: [
      { t: 'list', items: [
        '<b>Android Common Kernel (ACK)</b> = Linux <b>LTS</b> upstream + patch Android, build từ repo <code>kernel/common</code>. Patch đó là thứ Google/cộng đồng cho là quan trọng nhưng chưa vào Linux mainline hay nhánh GKI dài hạn.',
        'LTS được hỗ trợ <b>2–6 năm</b>, ra khoảng mỗi năm một lần; mỗi LTS là nền của một tập ACK.',
        '<b>Đặt tên</b>: theo phiên bản nền tảng và kernel, ví dụ <code>android15-6.6</code> = kernel cho Android 15 dựa trên Linux 6.6.',
        '<b>Nhánh</b>: Linux mainline (upstream, gồm LTS) → <code>android-mainline</code> (nhánh chính của Google cho tính năng kernel Android; khi upstream công bố LTS mới thì nhánh GKI mới tách ra) → các nhánh <b>ACK KMI</b> (nơi build GKI).',
        '<b>Ràng buộc phiên bản</b>: tính năng Android 12 không backport được cho kernel 4.19; thiết bị ra mắt 4.19 với Android 11 rồi nâng lên Android 12 có bộ tính năng tương tự khi ra mắt.'
      ] }
    ] },
    { icon: '🧩', title: 'GKI: Generic Kernel Image', blocks: [
      { t: 'warn', x: '<b>Vấn đề trước GKI</b>: thiết bị chạy kernel tuỳ biến dựa trên ACK với thay đổi của SoC vendor và OEM — có thể tới <b>50% mã kernel nằm ngoài cây upstream</b>. Hậu quả: backport bảo mật tốn kém, bản vá LTS đến thiết bị chậm tới <b>18 tháng</b>, tính năng nền tảng mới chậm, khó upstream patch.' },
      { t: 'key', x: 'GKI thống nhất <b>lõi kernel</b> và chuyển hỗ trợ SoC/board vào <b>module vendor nạp được</b>, cung cấp <b>KMI</b> ổn định để kernel và module cập nhật độc lập. Từ <b>Android 12</b>, thiết bị ra mắt với kernel 5.10+ phải dùng GKI.' },
      { t: 'table', head: ['Khái niệm', 'Mô tả'], rows: [
        ['<b>Lõi kernel chung</b>', 'Mã độc lập phần cứng, chung cho mọi thiết bị'],
        ['<b>GKI modules</b>', 'Module Google build kèm kernel, nạp động khi cần; phân phối trong <code>system_dlkm_staging_archive.tar.gz</code>, ký bằng khoá build-time, chỉ chạy với đúng GKI kernel đi kèm'],
        ['<b>Vendor modules</b>', 'Mã riêng của SoC/thiết bị do đối tác phát triển, dạng DLKM (<code>.ko</code>)'],
        ['<b>KMI</b> (Kernel Module Interface)', 'Biên giới giữa GKI kernel và module vendor: hàm kernel và dữ liệu global mà module phụ thuộc; đối tác xác định phụ thuộc qua <b>symbol list</b> theo từng đối tác'],
        ['<b>GKI kernel</b>', 'Biến thể chỉ <b>aarch64</b> của ACK 5.10 trở lên'],
        ['<b>Certified boot image</b>', 'Kernel dạng nhị phân <code>boot.img</code> flash vào thiết bị, chứa chứng chỉ nhúng để Google xác minh thiết bị chạy kernel được Google chứng nhận']
      ] },
      { t: 'list', items: [
        'Đặc tính GKI: build từ nguồn ACK; <b>một binary kernel cho mỗi kiến trúc trên mỗi LTS</b> cùng module nạp được; kiểm thử với mọi bản Android hỗ trợ ACK đó, <b>không loại bỏ tính năng</b> trong vòng đời; giữ KMI ổn định trong một LTS; không chứa mã riêng SoC/board.',
        'Do KMI binary ổn định, có thể cài GKI boot image mà <b>không đổi các image vendor</b>.',
        '<b>Mục tiêu</b>: không suy giảm đáng kể hiệu năng/điện năng khi thay kernel sản phẩm; đối tác phát hành bản vá bảo mật/bug mà không cần vendor tham gia; giảm chi phí nâng cấp kernel major; một binary mỗi kiến trúc với quy trình nâng cấp rõ ràng.'
      ] },
      { t: 'widget', name: 'gki-split', title: 'Phần mã này thuộc GKI hay vendor module?' }
    ] },
    { icon: '🔒', title: 'Giữ KMI ổn định', blocks: [
      { t: 'p', x: 'GKI kernel là binary dựng sẵn còn module vendor build ở cây riêng; hai bên phải hoạt động “như thể build cùng nhau”.' },
      { t: 'list', items: [
        '<b>Phạm vi</b>: chỉ cấu hình <code>gki_defconfig</code> được dùng để build kernel; KMI ổn định chỉ trong một cặp LTS+Android (android14-6.1, android15-6.6, android16-6.12…); <b>android-mainline không có</b> ổn định KMI; chỉ dùng toolchain Clang do AOSP cung cấp cho nhánh tương ứng.',
        '<b>Build hermetic</b>: manifest repo trong <code>kernel/manifest</code> mô tả toàn bộ môi trường (toolchain, hệ build); <code>BUILD.bazel</code> đảm bảo công cụ dùng nhất quán, cho kết quả lặp lại.',
        '<b>Symbol list</b>: chỉ symbol được symbol list xác định là module dùng mới được giám sát và coi là KMI symbol. Module vendor chỉ được dùng KMI symbol; hệ thống ép bằng cách làm thất bại việc nạp module cần symbol ngoài KMI.',
        '<b>Mô tả ABI</b>: KMI được mô tả bằng file ABI (ví dụ <code>gki/aarch64/abi.stg</code> cho android16-6.12); công cụ tạo và so sánh nằm trong repo build kernel.',
        '<b>Sau khi KMI bị đóng băng (frozen)</b>: vẫn được đổi cấu hình, mã kernel và toolchain (kể cả nâng cấp) nhưng <b>không được phá KMI</b>.',
        '<b>Quy tắc module vendor</b>: chỉ dùng KMI symbol; build bằng toolchain LLVM cho cùng ABI như toolchain AOSP; dùng công cụ build được cung cấp; đảm bảo KMI tương thích với GKI kernel.'
      ] }
    ] },
    { icon: '📚', title: 'Phần còn lại của menu Kernel', blocks: [
      { t: 'tip', x: 'Menu Kernel còn gồm: kernel release notes, stable kernel releases, Android common kernels, GKI development/versioning, <b>GKI release builds</b> (android12-5.10 … android17-6.18, kèm deprecated builds), GKI release process, respin, errata, <b>Kernel ABI monitoring</b> (overview, run, symbol lists), <b>Modules</b> (cấu hình tính năng thành GKI module, vendor module guidelines, loadable kernel modules, kernel module support, test), boot time optimization, debug features, develop kernel code for GKI, kernel file system support, <b>eBPF</b> (mở rộng kernel, telemetry), DebugFS, <b>FIPS 140-3 crypto module</b>, <b>EROFS</b>, FAQ, network unit tests, chuyển ION → DMA-BUF heaps, Incremental File System.' }
    ] }
  ],
  summary: [
    'ACK = Linux LTS + patch Android; đặt tên androidNN-X.Y; LTS hỗ trợ 2–6 năm.',
    'GKI (ACK ≥ 5.10, aarch64) = lõi chung + GKI modules; bắt buộc từ Android 12 với kernel 5.10+.',
    'KMI là biên giới ổn định kernel ↔ vendor module, xác định bằng symbol list và file ABI.',
    'Giữ KMI: chỉ gki_defconfig, toolchain AOSP, build hermetic, không phá KMI sau khi frozen.'
  ],
  cards: [
    ['ACK là gì?', 'Android Common Kernel: Linux LTS + patch Android, build từ kernel/common.'],
    ['android15-6.6 nghĩa là?', 'Kernel cho Android 15 dựa trên Linux 6.6.'],
    ['LTS được hỗ trợ bao lâu?', '2–6 năm, ra khoảng mỗi năm.'],
    ['GKI là gì?', 'Generic Kernel Image: lõi kernel chung + module nạp được, KMI ổn định.'],
    ['GKI áp dụng từ khi nào?', 'Android 12, thiết bị kernel 5.10+ phải dùng GKI.'],
    ['GKI kernel là biến thể nào?', 'aarch64 của ACK 5.10 trở lên.'],
    ['Vấn đề trước GKI?', 'Tới 50% mã ngoài upstream; vá LTS chậm tới 18 tháng.'],
    ['KMI là gì?', 'Giao diện (hàm và dữ liệu global) giữa GKI kernel và vendor module.'],
    ['Symbol list để làm gì?', 'Xác định symbol mà module dùng để được giám sát như KMI symbol.'],
    ['GKI modules phân phối ở đâu?', 'system_dlkm_staging_archive.tar.gz, ký bằng khoá build-time.'],
    ['KMI có ổn định ở android-mainline?', 'Không.'],
    ['Cấu hình duy nhất build GKI?', 'gki_defconfig.'],
    ['Sau khi KMI frozen được đổi gì?', 'Config, mã, toolchain — nhưng không được phá KMI.'],
    ['Nhánh nào tách ra khi có LTS mới?', 'GKI mới tách từ android-mainline.'],
    ['Certified boot image chứa gì?', 'Chứng chỉ nhúng để xác minh kernel do Google chứng nhận.']
  ],
  quiz: [
    { q: 'GKI áp dụng bắt buộc cho kernel từ:', o: ['4.19', '5.4', '5.10', '6.1'], a: 2, e: 'Với thiết bị Android 12+.' },
    { q: 'KMI ổn định ở:', o: ['android-mainline', 'Trong một cặp LTS+Android', 'Mọi nhánh', 'Không đâu'], a: 1, e: 'Ví dụ android15-6.6.' },
    { q: 'Module vendor chỉ được dùng:', o: ['Mọi symbol', 'KMI symbol', 'Chỉ syscalls', 'Không symbol'], a: 1, e: 'Nạp thất bại nếu cần symbol ngoài KMI.' },
    { q: 'Vấn đề lớn nhất trước GKI:', o: ['Màn hình', 'Phân mảnh kernel, vá LTS chậm', 'Pin', 'Giá'], a: 1, e: 'Tới 18 tháng.' },
    { q: 'GKI modules được ký bằng:', o: ['Khoá build-time', 'Không ký', 'Khoá OEM', 'Khoá người dùng'], a: 0, e: 'Chỉ chạy với GKI kernel đi cùng.' },
    { q: 'File mô tả ABI ví dụ:', o: ['abi.stg', 'kernel.cfg', 'sym.map', 'dtb.img'], a: 0, e: 'gki/aarch64/abi.stg.' },
    { q: 'Build hermetic dựa vào:', o: ['Máy tuỳ ý', 'Manifest kernel/manifest + BUILD.bazel', 'Docker bắt buộc', 'Python 2'], a: 1, e: 'Kết quả lặp lại.' },
    { q: 'Mã riêng SoC nằm ở:', o: ['Lõi GKI', 'Vendor modules', 'Bootloader', 'ART'], a: 1, e: 'GKI không chứa mã riêng SoC.' },
    { q: 'Mục tiêu GKI KHÔNG gồm:', o: ['Vá bảo mật không cần vendor', 'Giảm chi phí nâng cấp', 'Mỗi SoC một kernel riêng', 'Một binary mỗi kiến trúc'], a: 2, e: 'Ngược với mục tiêu.' },
    { q: 'Nhánh Google dùng cho tính năng kernel Android:', o: ['android-mainline', 'master-old', 'lts-only', 'vendor-main'], a: 0, e: 'GKI mới tách từ đây khi có LTS mới.' }
  ],
  match: [
    ['ACK', 'LTS + patch Android'],
    ['GKI', 'Lõi chung + module'],
    ['KMI', 'Giao diện kernel ↔ module'],
    ['DLKM', 'Module nạp được (.ko)'],
    ['gki_defconfig', 'Cấu hình build GKI'],
    ['symbol list', 'Danh sách symbol module dùng'],
    ['abi.stg', 'Mô tả ABI']
  ]
});
