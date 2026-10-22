// Android Architecture – Chương 8: Partitions.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 8,
  title: 'Partitions (phân vùng)',
  intro: 'Thiết bị Android chia bộ nhớ thành các <b>partition</b>, mỗi cái chứa một image (file IMG) hoặc snapshot của một phần phần mềm. Chia thành ba nhóm: <b>system</b>, <b>vendor</b> và <b>nonupdatable</b>. Cách chia system/vendor bắt nguồn từ <b>Project Treble</b>, cho phép OEM cập nhật OS và app mà không đụng mã phụ thuộc phần cứng.',
  sections: [
    { icon: '🗂️', title: 'Ba nhóm partition', blocks: [
      { t: 'h3', x: 'System partitions (cập nhật cùng OS)' },
      { t: 'table', head: ['Partition', 'Nội dung'], rows: [
        ['<code>boot</code>', 'Generic Kernel Image (GKI); với Android 12 trở xuống còn chứa generic ramdisk'],
        ['<code>init_boot</code>', '(Android 13+) Generic ramdisk; Android 11–12 ramdisk này nằm trong <code>boot</code>'],
        ['<code>system</code>', 'System image cho sản phẩm OEM; chứa thư viện VNDK (product/vendor liên kết được với VNDK nhưng không với thư viện system khác)'],
        ['<code>system_ext</code>', 'Tài nguyên và module độc quyền mở rộng <code>system</code>; SSI (single system image) có thể gộp <code>system</code> + <code>system_ext</code> cho nhiều thiết bị'],
        ['<code>system_dlkm</code>', 'Module kernel GKI'],
        ['<code>product</code>', 'Module riêng sản phẩm không gộp vào partition khác'],
        ['<code>pvmfw</code>', 'Protected Virtual Machine Firmware — mã đầu tiên chạy trong VM được bảo vệ'],
        ['<code>generic_bootloader</code>', 'Generic bootloader']
      ] },
      { t: 'h3', x: 'Vendor partitions (mã riêng thiết bị/phần cứng, có thể không đổi sau phát hành)' },
      { t: 'table', head: ['Partition', 'Nội dung'], rows: [
        ['<code>vendor_boot</code>', 'Mã boot riêng vendor'],
        ['<code>recovery</code>', 'Recovery image cho OTA; thiết bị seamless-update có thể lưu dạng ramdisk trong <code>boot</code>/<code>init_boot</code>'],
        ['<code>misc</code>', 'Dùng bởi recovery; ≥ 4 KB'],
        ['<code>vbmeta</code>', 'Dữ liệu Verified Boot xác nhận image mỗi partition đáng tin'],
        ['<code>vendor</code>', 'Binary riêng vendor quá chuyên biệt cho AOSP'],
        ['<code>vendor_dlkm</code>', 'Module kernel vendor, cập nhật được mà không cập nhật <code>vendor</code>'],
        ['<code>odm</code>', 'Tuỳ biến của ODM lên BSP của SoC; tuỳ chọn, cho một vendor image phục vụ nhiều SKU'],
        ['<code>odm_dlkm</code>', 'Module kernel ODM, tách khỏi <code>odm</code>'],
        ['<code>radio</code>', 'Radio image, chỉ khi phần mềm radio có partition riêng']
      ] },
      { t: 'h3', x: 'Nonupdatable (không cập nhật bằng OTA, hoặc chỉ cùng dữ liệu người dùng)' },
      { t: 'list', items: [
        '<code>cache</code>: dữ liệu tạm; tuỳ chọn trên thiết bị seamless-update, thường 50–100 MB.',
        '<code>userdata</code>: app và dữ liệu người dùng cài, cả dữ liệu tuỳ biến.',
        '<code>metadata</code>: chứa khoá mã hoá metadata khi bật metadata encryption; ≥ 16 MB, không mã hoá, bị xoá khi factory reset.'
      ] },
      { t: 'widget', name: 'partition-quiz', title: 'Partition nào chứa nội dung này?' }
    ] },
    { icon: '🔄', title: 'Quy tắc cập nhật và biến thể build', blocks: [
      { t: 'list', items: [
        'Google khuyến nghị cập nhật <b>mọi system partition cùng nhau</b> và <b>mọi vendor partition cùng nhau</b> để kiểm thử giao diện giữa các image. Một số nhóm luôn cập nhật cùng nhau: <code>boot</code> với <code>system_dlkm</code>, và <code>init_boot</code>, <code>system</code>, <code>system_ext</code>, <code>product</code>. <code>product</code> chỉ cập nhật độc lập khi ABI với các system partition khác ổn định.',
        'Thiết bị seamless-update dùng slot <b>A/B</b> cho <code>boot</code>, <code>system</code>, <code>vendor</code>, <code>radio</code>.',
        '<b>Dynamic partitions</b> (Android 11+): hệ thống userspace tạo, đổi kích thước hoặc xoá partition trong OTA.',
        '<b>Build variants (Soong)</b>: module native của tiến trình system ánh xạ vào biến thể <i>core</i>, mã tiến trình vendor vào biến thể <i>vendor</i>; module ở biến thể này không link với biến thể kia. Android 12+: <code>vendor_available: true</code> thêm biến thể vendor, <code>product_available: true</code> thêm biến thể product.'
      ] }
    ] },
    { icon: '🏗️', title: 'Partition layout: system-as-root', blocks: [
      { t: 'list', items: [
        '<b>Android 10</b>: root filesystem không còn đóng gói trong <code>ramdisk.img</code> mà gộp vào <code>system.img</code>, build luôn tạo như thể đặt <code>BOARD_BUILD_SYSTEM_ROOT_IMAGE</code>. Thiết bị ra mắt Android 10 phải dùng ramdisk (cần cho dm-linear) và đặt <code>BOARD_BUILD_SYSTEM_ROOT_IMAGE := false</code> (cờ chỉ phân biệt thiết bị có ramdisk với thiết bị mount thẳng <code>system.img</code>).',
        '<b>Android 9</b>: cờ true buộc gộp root vào <code>system.img</code> rồi mount làm rootfs — bắt buộc khi ra mắt Android 9, tuỳ chọn khi nâng cấp.',
        '<b>A/B</b> mount <code>system</code> làm rootfs nên đã là system-as-root; <b>non-A/B</b> mount ở <code>/system</code> và phải chuyển đổi, đồng thời phải giữ <code>/recovery</code> riêng (vì A/B dùng <code>/boot</code> làm recovery, không slot dự phòng thì cập nhật <code>/boot</code> hỏng sẽ phá recovery).',
        '<b>dm-verity</b>: kernel mount <code>system.img</code> tại <code>/</code> với dm-verity. vboot 1.0: kernel parse metadata Android chuyển thành tham số dm-verity; vboot 2.0 (AVB): bootloader dùng libavb parse hashtree descriptor và truyền tham số qua kernel command line.',
        '<b>First-stage init & dynamic partitions</b>: kernel không còn mount được partition logical <code>system</code> trên Android 10, nên first-stage init làm việc đó.',
        '<b>Vendor overlay (AOSP 14 trở xuống)</b>: lúc first-stage mount, init mount thư mục con trong <code>/product/vendor_overlay/&lt;target_vendor_version&gt;</code> lên các thư mục <code>/vendor</code> tương ứng (cần OverlayFS và file contexts khớp).',
        '<b>Thư mục root riêng thiết bị</b>: flash GSI system-as-root thay toàn bộ root; thư mục thêm bằng <code>BOARD_ROOT_EXTRA_FOLDERS</code> biến mất và có thể làm máy không boot — hãy dùng <code>/mnt/vendor/&lt;mount point&gt;</code>.'
      ] }
    ] },
    { icon: '🧰', title: 'vendor_boot', blocks: [
      { t: 'p', x: '<code>vendor_boot</code> ra đời ở Android 11 trong nỗ lực GKI: chuyển dữ liệu riêng vendor ra khỏi <code>boot</code> để một GKI khởi động được nhiều thiết bị. Dùng boot header v3 (Android 11), v4 (Android 12); cập nhật A/B (virtual A/B) và được AVB bảo vệ.' },
      { t: 'table', head: ['Header', 'Bố cục'], rows: [
        ['<b>v3</b>', 'Header + vendor ramdisk + DTB; mỗi phần theo trang. Header chứa trường chuyển từ boot: page size, địa chỉ nạp kernel/ramdisk, kích thước vendor ramdisk, command line 2048 byte, tags address, tên sản phẩm, header size, kích thước và địa chỉ nạp DTB'],
        ['<b>v4</b>', 'Header + các vendor ramdisk fragment nối nhau + DTB + <b>vendor ramdisk table</b> + <b>bootconfig</b>; mỗi entry bảng ghi size, offset, type, tên (≤ 32 byte), tối đa 16 board ID']
      ] },
      { t: 'table', head: ['Loại ramdisk', 'Ý nghĩa'], rows: [
        ['NONE', 'Không xác định'],
        ['PLATFORM', 'Nội dung theo nền tảng, bootloader luôn phải nạp'],
        ['RECOVERY', 'Tài nguyên recovery, chỉ nạp khi boot vào recovery'],
        ['DLKM', 'Module kernel nạp động']
      ] },
      { t: 'list', items: [
        '<b>Bootloader</b> phải đọc cả <code>boot</code> và <code>vendor_boot</code>. Generic ramdisk nạp ngay sau vendor ramdisk, không căn trang/đệm; cả hai cùng định dạng nén (thiết bị tuân thủ GKI dùng vendor ramdisk nén <b>lz4</b>). Với v4 có thể nạp tập con (bỏ fragment recovery khi boot thường để tiết kiệm bộ nhớ) và chọn thứ tự, miễn generic ramdisk nạp sau cùng.',
        '<b>Recovery</b> có thể đóng gói thành fragment riêng tên <code>recovery</code>, kiểu RECOVERY. fstab thiết bị thuộc <code>/first_stage_ramdisk</code> của vendor_boot, không phải boot.',
        '<b>Biến build</b>: <code>BOARD_BOOT_HEADER_VERSION</code> (≥ 3; 4 cho nhiều ramdisk/recovery fragment), <code>BOARD_RAMDISK_USE_LZ4</code>, <code>BOARD_VENDOR_BOOTIMAGE_PARTITION_SIZE</code>, <code>BOARD_VENDOR_RAMDISK_FRAGMENTS</code>, <code>BOARD_VENDOR_RAMDISK_FRAGMENT.&lt;name&gt;.PREBUILT/.KERNEL_MODULE_DIRS/.MKBOOTIMG_ARGS</code>, <code>BOARD_MOVE_RECOVERY_RESOURCES_TO_VENDOR_BOOT</code>, <code>BOARD_INCLUDE_RECOVERY_RAMDISK_IN_VENDOR_BOOT</code>; mkbootimg có <code>--board_id[0-15]</code>, <code>--ramdisk_type</code>; tên <code>default</code> bị dành riêng.'
      ] },
      { t: 'tip', x: 'Các trang con còn lại của mục Partitions: Vendor và ODM DLKM, Shared system image, Ramdisk partitions, Generic boot partition, ODM, Product partitions, Implement a GKI module partition, Enforce product partition interfaces, Trusty OS partitions.' }
    ] }
  ],
  summary: [
    'Ba nhóm: system (cập nhật cùng OS), vendor (mã riêng phần cứng), nonupdatable (cache, userdata, metadata).',
    'init_boot (Android 13+) chứa generic ramdisk; vendor_boot (Android 11+) chứa mã boot riêng vendor.',
    'Cập nhật nhóm system cùng nhau, nhóm vendor cùng nhau; dynamic partitions từ Android 11.',
    'Android 10 system-as-root; vendor_boot v3/v4 với ramdisk fragment và bootconfig.'
  ],
  cards: [
    ['Ba nhóm partition?', 'System, vendor, nonupdatable.'],
    ['boot chứa gì?', 'GKI (Android 12 trở xuống còn generic ramdisk).'],
    ['init_boot?', 'Generic ramdisk (Android 13+).'],
    ['system_ext?', 'Module độc quyền mở rộng system; SSI có thể gộp với system.'],
    ['system_dlkm vs vendor_dlkm?', 'Module kernel GKI vs module kernel vendor.'],
    ['vbmeta?', 'Dữ liệu Verified Boot xác nhận mỗi partition.'],
    ['odm?', 'Tuỳ biến ODM lên BSP SoC; một vendor image phục vụ nhiều SKU.'],
    ['metadata?', 'Chứa khoá mã hoá metadata; ≥ 16 MB, không mã hoá, xoá khi factory reset.'],
    ['pvmfw?', 'Firmware cho VM được bảo vệ.'],
    ['Dynamic partitions?', 'Tạo/đổi kích thước/xoá partition trong OTA (Android 11+).'],
    ['vendor_available: true?', 'Thêm biến thể vendor cho module (Android 12+).'],
    ['System-as-root Android 10?', 'Root gộp vào system.img; dùng ramdisk (cần cho dm-linear).'],
    ['Vì sao non-A/B giữ /recovery riêng?', 'Không có slot dự phòng, cập nhật /boot hỏng sẽ phá recovery.'],
    ['Vendor ramdisk type RECOVERY?', 'Chỉ nạp khi boot vào recovery.'],
    ['Thứ tự nạp ramdisk?', 'Generic ramdisk nạp sau cùng, không đệm giữa chúng.']
  ],
  quiz: [
    { q: 'Generic ramdisk nằm ở init_boot từ:', o: ['Android 10', 'Android 11', 'Android 12', 'Android 13'], a: 3, e: 'Android 11–12 nằm trong boot.' },
    { q: 'Module kernel GKI nằm ở:', o: ['vendor_dlkm', 'system_dlkm', 'odm_dlkm', 'boot'], a: 1, e: 'Vendor module ở vendor_dlkm.' },
    { q: 'Partition giữ khoá mã hoá metadata:', o: ['cache', 'metadata', 'misc', 'radio'], a: 1, e: 'Không mã hoá, xoá khi factory reset.' },
    { q: 'Nhóm KHÔNG cập nhật bằng OTA:', o: ['system', 'vendor', 'userdata', 'boot'], a: 2, e: 'Cùng cache, metadata.' },
    { q: 'vbmeta để:', o: ['Chứa app', 'Xác nhận image mỗi partition đáng tin', 'Lưu log', 'Chứa kernel'], a: 1, e: 'Dữ liệu Verified Boot.' },
    { q: 'Header vendor_boot hỗ trợ nhiều ramdisk fragment:', o: ['v2', 'v3', 'v4', 'v1'], a: 2, e: 'Cùng bootconfig và bảng ramdisk.' },
    { q: 'Generic ramdisk phải nạp:', o: ['Đầu tiên', 'Sau vendor ramdisk (sau cùng)', 'Chỉ khi recovery', 'Không bao giờ'], a: 1, e: 'Không đệm giữa chúng.' },
    { q: 'Định dạng nén vendor ramdisk của thiết bị GKI:', o: ['gzip', 'lz4', 'xz', 'zstd'], a: 1, e: 'BOARD_RAMDISK_USE_LZ4.' },
    { q: 'Thay vì BOARD_ROOT_EXTRA_FOLDERS nên dùng:', o: ['/data', '/mnt/vendor/<mount point>', '/sdcard', '/tmp'], a: 1, e: 'Tránh mất thư mục khi flash GSI.' },
    { q: 'Dynamic partitions từ:', o: ['Android 9', 'Android 10/11', 'Android 14', 'Android 7'], a: 1, e: 'Tài liệu partitions: Android 11+ có thể dùng; layout nhắc Android 10 hỗ trợ.' },
    { q: 'Partition pvmfw dùng cho:', o: ['Radio', 'Protected VM firmware', 'Recovery', 'Cache'], a: 1, e: 'Mã đầu tiên trong VM được bảo vệ.' }
  ],
  match: [
    ['init_boot', 'Generic ramdisk'],
    ['vendor_boot', 'Mã boot vendor + DTB'],
    ['system_dlkm', 'Module GKI'],
    ['vbmeta', 'Dữ liệu Verified Boot'],
    ['metadata', 'Khoá mã hoá metadata'],
    ['super / dynamic', 'Partition co giãn'],
    ['pvmfw', 'Firmware VM bảo vệ']
  ]
});
