// Android Architecture – Chương 7: Bootloader.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 7,
  title: 'Bootloader',
  intro: 'Bootloader là image độc quyền của vendor chịu trách nhiệm đưa kernel lên. Nó bảo vệ trạng thái thiết bị, khởi tạo <b>TEE</b> (neo gốc tin cậy, ví dụ Trusty) và kiểm tra tính toàn vẹn của partition <code>boot</code>, <code>recovery</code> trước khi giao quyền cho kernel. Chương này gồm luồng boot, boot image header, bootconfig, khoá/mở khoá, fastbootd và Generic Bootloader (GBL).',
  sections: [
    { icon: '🥾', title: 'Luồng boot và các tính năng', blocks: [
      { t: 'steps', items: [
        '<b>Thiết lập bộ nhớ</b>: nạp và khởi tạo bộ nhớ.',
        '<b>Xác minh thiết bị</b> theo Verified Boot.',
        '<b>Xác minh partition</b> <code>boot</code>, <code>dtbo</code>, <code>init_boot</code>, <code>recovery</code>; kiểm tra phiên bản boot image header và parse cho khớp.',
        '<b>Chọn slot</b> (khi dùng A/B updates).',
        '<b>Quyết định vào recovery hay không</b>.',
        '<b>Nạp image</b>: <code>boot.img</code>, <code>vendor_boot.img</code>, <code>init_boot.img</code>… mang kernel và ramdisk. Kernel nạp dạng nhị phân nén tự giải nén trong bộ nhớ; ramdisk và phần bootconfig được ghép thành <code>initramfs</code>.'
      ] },
      { t: 'table', head: ['Tính năng', 'Mô tả'], rows: [
        ['<b>Device tree overlays</b>', 'Một bootloader hỗ trợ nhiều cấu hình phần cứng; mỗi overlay biên dịch thành DTB'],
        ['<b>KASLR</b>', 'Bật <code>RANDOMIZE_BASE</code> trong kernel config để ngẫu nhiên hoá địa chỉ nạp ảo; bootloader phải cấp một u64 ngẫu nhiên trong node <code>/chosen/kaslr-seed</code>'],
        ['<b>Verified Boot</b>', 'Đảm bảo mọi mã được thực thi đến từ nguồn tin cậy'],
        ['<b>Bootconfig</b>', 'Từ Android 12: truyền cấu hình từ build và bootloader cho OS; trước đó dùng tham số kernel command line <code>androidboot.*</code>'],
        ['<b>OTA updates</b>', 'Ảnh hưởng thiết kế bootloader (hệ thống, app, quy tắc múi giờ cập nhật tại chỗ)'],
        ['<b>Version binding</b>', 'Gắn khoá bảo mật với phiên bản OS và patch level để kẻ tấn công không rollback về bản dễ tổn thương; bootloader phải cung cấp thông tin phiên bản qua AVB properties']
      ] },
      { t: 'key', x: '<b>Kernel command line</b> được nối từ 4 nguồn: tham số tĩnh/động của bootloader, node device tree <code>chosen/bootargs</code>, giá trị <code>CONFIG_CMDLINE</code> trong defconfig, và command line nhúng trong <code>boot.img</code>. Từ Android 12 tham số <code>androidboot.*</code> có thể đi qua bootconfig.' }
    ] },
    { icon: '🖼️', title: 'Boot image header (v0–v4)', blocks: [
      { t: 'p', x: 'Trường version trong header (đưa vào từ Android 9) cho phép đổi định dạng mà vẫn tương thích ngược; bootloader phải đọc và parse khớp. Trước Android 9 vị trí này là trường không dùng nên coi như version 0.' },
      { t: 'table', head: ['Version', 'Android', 'Thay đổi'], rows: [
        ['0', '8 trở xuống', 'Bố cục cũ: kernel, ramdisk, second-stage bootloader, trường không dùng'],
        ['1', '9 (bắt buộc cho thiết bị ra mắt Android 9)', 'Trường không dùng thành <code>header_version</code>; thêm kích thước/offset <code>recovery_[dtbo|acpio]</code> cho thiết bị non-A/B dùng recovery overlay, và <code>header_size</code>; <code>id</code> chứa SHA-1 phần recovery'],
        ['2', '10 (bắt buộc cho Android 10)', 'Thêm thông tin DTB: <code>dtb_size</code>, <code>dtb_addr</code>'],
        ['3', '11', 'Bỏ trường second-stage bootloader, recovery image và DTB (DTB chuyển sang vendor boot partition); không hỗ trợ recovery image nên A/B dùng cho boot, non-A/B GKI có thể ghép với recovery v2'],
        ['4', '12', 'Thêm <code>signature_size</code> cho <code>boot_signature</code> (VTS dùng kiểm tra toàn vẹn kernel/ramdisk — không phải một phần của verified boot riêng thiết bị); đi với vendor boot v4 hỗ trợ nhiều vendor ramdisk fragment']
      ] },
      { t: 'list', items: [
        '<b>Yêu cầu</b>: Android 9 ≥ v1 (VTS kiểm); Android 10 v2; Android 11 v3 cho boot image GKI chính; Android 12 v3 hoặc v4 (GKI chính là v4); Android 13 v3 hoặc v4, GKI v4 chính và <code>os_version</code> phải bằng 0 (bootloader lấy phiên bản từ AVB properties).',
        '<b>Công cụ</b>: <code>mkbootimg</code> nhận <code>header_version</code>, <code>recovery_dtbo</code>, <code>recovery_acpio</code>, <code>dtb</code>, <code>dtb_offset</code>; thường truyền qua <code>BOARD_MKBOOTIMG_ARGS</code> trong <code>BoardConfig.mk</code>; <code>recovery_dtbo</code> đặt từ <code>BOARD_PREBUILT_DTBOIMAGE</code>.'
      ] },
      { t: 'widget', name: 'bootimg-version', title: 'Header version nào cho bản Android này?' }
    ] },
    { icon: '🔓', title: 'Khoá và mở khoá bootloader', blocks: [
      { t: 'list', items: [
        'Mặc định bootloader <b>bị khoá</b>, chặn flash bootloader/partition thiết bị. Vào bootloader mode: <code>adb reboot bootloader</code> hoặc tổ hợp phím lúc boot.',
        '<code>fastboot flashing unlock</code> mở khoá; trạng thái giữ qua reboot. Thiết bị phải từ chối trừ khi <code>get_unlock_ability</code> = 1 (người dùng bật <b>OEM unlocking</b> trong Developer options; bền qua reboot và factory reset).',
        'Khi mở khoá: cảnh báo ảnh không chính thức → sau khi xác nhận thì <b>factory data reset</b> để chặn truy cập dữ liệu trái phép (phải reset dù không format tốt; cờ unlocked chỉ đặt sau reset). Ghi đè toàn bộ RAM không dùng; thiết bị mở khoá nên xoá RAM mỗi lần boot (trừ vùng <code>ramoops</code> của kernel).',
        '<code>fastboot flashing lock</code> khoá lại và reset; thiết bị bán lẻ ship ở trạng thái khoá với <code>get_unlock_ability</code> = 0.',
        '<code>ro.oem_unlock_supported</code> = 1 nếu hỗ trợ unlock; bootloader báo qua <code>androidboot.flash.locked</code> (1 khoá, 0 mở; từ Android 12 phải đặt trong bootconfig). Trên thiết bị dm-verity, <code>ro.boot.verifiedbootstate</code> = orange thì bootloader phải đang mở khoá.',
        '<b>Critical sections</b> (fuse, sensor-hub virtual partition, first-stage bootloader…): mã chạy (kernel, recovery, OTA) không được sửa; OTA phải thất bại khi ở trạng thái <code>lock_critical</code>; chuyển <code>lock_critical → unlock_critical</code> cần nhấn nút vật lý, không được làm bằng phần mềm, và không ship ở <code>unlock_critical</code>.'
      ] }
    ] },
    { icon: '⚡', title: 'fastbootd và Generic Bootloader', blocks: [
      { t: 'p', x: 'Android 10+ hỗ trợ partition co giãn bằng cách chuyển fastboot sang <b>userspace (fastbootd)</b>: logic flash nằm ở nơi chung, dễ kiểm thử; chỉ phần riêng vendor ở HAL. Android 12+ thêm lệnh flash ramdisk. fastbootd và recovery giống nhau nên dùng chung partition/binary (tiết kiệm chỗ, cùng kernel và thư viện).' },
      { t: 'list', items: [
        '<b>Vào fastbootd</b>: bootloader ghi lệnh <code>boot-fastboot</code> vào BCB (giữ nguyên trường recovery để việc dở dang tiếp tục), rồi boot recovery image, nó parse BCB và chuyển sang fastbootd. Từ ADB/fastboot: <code>reboot fastboot</code>.',
        '<b>Bootloader</b> flash <code>bootloader</code>, <code>radio</code>, <code>boot/recovery</code> rồi boot vào fastbootd để flash phần còn lại; cần lệnh <code>download</code>, <code>flash</code>, <code>getvar</code>, <code>reboot</code>, <code>oem</code>. <b>fastbootd</b> thêm <code>getvar is-userspace</code>, <code>is-logical:&lt;partition&gt;</code>, <code>create/delete/resize-logical-partition</code>, <code>flash</code>, <code>erase</code>, <code>set_active</code>.',
        '<b>Dynamic partitions</b>: bootloader không được cho flash/erase, phải trả lỗi (thiết bị retrofit có force mode, chủ yếu cho flash nhà máy). <code>fastboot oem off-mode-charge 0</code> phải bỏ qua chế độ sạc khi tắt.',
        '<b>HAL IFastboot</b>: <code>isVerifiedBootEnabled()</code>, <code>isOffModeChargeEnabled()</code>, <code>getBatteryVoltageFlashingThreshold()</code>, <code>getPartitionType()</code>, <code>doOemCommand()</code>.',
        '<b>Bật fastbootd</b>: thêm <code>fastbootd</code> vào <code>PRODUCT_PACKAGES</code>; đóng gói fastboot, boot control, health HAL vào recovery image; thêm SEPolicy; kiểm bằng VTS.',
        '<b>Flash vendor ramdisk (Android 12+)</b>: <code>fetch:vendor_boot</code> (chỉ trên build debuggable, mở khoá, trong max-fetch-size); <code>fastboot flash vendor_boot:default</code> thay ramdisk (v3: ramdisk duy nhất; v4: cả bảng ramdisk); <code>vendor_boot:&lt;foo&gt;</code> chỉ với header v4, thay fragment tên đó; tên <code>default</code> bị dành riêng.'
      ] },
      { t: 'h3', x: 'Generic Bootloader (GBL)' },
      { t: 'p', x: 'Giải pháp bootloader <b>chuẩn hoá và cập nhật được</b>, thay thế tập bootloader riêng vendor rời rạc bằng một thành phần được duy trì nhất quán (giảm trùng lặp, tăng bảo mật, đơn giản cập nhật). Từ <b>Android 16</b>, thiết bị chipset ARM-64 được khuyến nghị mạnh nên triển khai GBL bản Google chứng nhận mới nhất vào chuỗi boot.' },
      { t: 'table', head: ['Lớp của GBL', 'Vai trò'], rows: [
        ['Core Android boot logic', 'Vòng lặp chính, phát hiện boot mode, nạp kernel'],
        ['Fastboot', 'Giao thức flash/gỡ lỗi'],
        ['Vendor extensions (tuỳ chọn)', 'Giao thức silicon/OEM mở rộng — phải thống nhất trước khi thêm vào dependency'],
        ['UEFI protocol handlers', 'Block I/O, cấp phát bộ nhớ, RNG…; có tham chiếu trong EDK2, U-Boot, LK'],
        ['Android-specific UEFI protocols', 'AVB, Fastboot, chọn slot, cấu hình OS — do silicon vendor cài đặt']
      ] },
      { t: 'tip', x: 'Trang con của GBL: Deploy GBL, GBL respin process, GBL release builds. Các trang bootloader khác: canonical boot reason, bootconfig implementation, recovery images, DTB images, OTA updates, version info in AVB properties.' }
    ] }
  ],
  summary: [
    'Bootloader: bảo vệ trạng thái, khởi tạo TEE, xác minh boot/dtbo/init_boot/recovery, chọn slot, nạp kernel + ramdisk.',
    'Header v1 (9) → v2 (10) → v3 (11, bỏ recovery/DTB/second) → v4 (12, boot_signature, vendor ramdisk fragment).',
    'Mở khoá cần OEM unlocking + factory reset; critical sections cần nút vật lý.',
    'fastbootd (userspace) cho dynamic partitions; GBL là bootloader chuẩn hoá, khuyến nghị cho ARM-64 từ Android 16.'
  ],
  cards: [
    ['Bootloader là gì?', 'Image độc quyền vendor đưa kernel lên, bảo vệ trạng thái thiết bị, khởi tạo TEE.'],
    ['Partition được xác minh khi boot?', 'boot, dtbo, init_boot, recovery.'],
    ['KASLR cần gì từ bootloader?', 'u64 ngẫu nhiên trong /chosen/kaslr-seed.'],
    ['Bootconfig từ khi nào?', 'Android 12; trước đó androidboot.* trên command line.'],
    ['Bốn nguồn kernel command line?', 'Bootloader, chosen/bootargs, CONFIG_CMDLINE, command line trong boot.img.'],
    ['Header v3 thay đổi gì?', 'Bỏ second-stage, recovery, DTB (DTB sang vendor_boot).'],
    ['Header v4 thêm gì?', 'signature_size cho boot_signature; vendor boot v4 hỗ trợ nhiều ramdisk fragment.'],
    ['Công cụ tạo boot image?', 'mkbootimg (qua BOARD_MKBOOTIMG_ARGS).'],
    ['Mở khoá bootloader?', 'fastboot flashing unlock (cần get_unlock_ability = 1).'],
    ['Điều gì xảy ra khi unlock?', 'Cảnh báo rồi factory data reset; xoá RAM không dùng.'],
    ['Cờ báo trạng thái khoá?', 'androidboot.flash.locked (1 khoá, 0 mở) — bootconfig từ Android 12.'],
    ['lock_critical → unlock_critical?', 'Cần nhấn nút vật lý.'],
    ['fastbootd là gì?', 'Fastboot chạy trong userspace (recovery) để flash partition logic.'],
    ['Bootloader có flash dynamic partition?', 'Không; phải trả lỗi.'],
    ['GBL là gì?', 'Generic Bootloader chuẩn hoá, cập nhật được; khuyến nghị ARM-64 từ Android 16.']
  ],
  quiz: [
    { q: 'Bootloader KHÔNG làm việc nào sau?', o: ['Xác minh boot partition', 'Khởi tạo TEE', 'Render giao diện Launcher', 'Chọn slot A/B'], a: 2, e: 'Launcher chạy sau khi OS lên.' },
    { q: 'Node chứa seed cho KASLR:', o: ['/chosen/kaslr-seed', '/memory', '/cpus', '/soc'], a: 0, e: 'Bootloader cấp u64 ngẫu nhiên.' },
    { q: 'Bootconfig có từ:', o: ['Android 9', 'Android 10', 'Android 12', 'Android 14'], a: 2, e: 'Thay androidboot.* trên cmdline.' },
    { q: 'DTB chuyển sang vendor boot từ header version:', o: ['1', '2', '3', '4'], a: 2, e: 'Version 3 bỏ DTB khỏi boot header.' },
    { q: 'GKI boot image chính từ Android 12 là header:', o: ['v1', 'v2', 'v3', 'v4'], a: 3, e: 'Với GKI devices.' },
    { q: 'Mở khoá bootloader luôn kèm:', o: ['Cập nhật OTA', 'Factory data reset', 'Reflash kernel', 'Đổi slot'], a: 1, e: 'Chặn truy cập dữ liệu trái phép.' },
    { q: 'Điều kiện để chấp nhận unlock:', o: ['get_unlock_ability = 1', 'Root', 'Mạng', 'Pin 100%'], a: 0, e: 'Từ OEM unlocking trong Developer options.' },
    { q: 'Trạng thái verified boot orange nghĩa:', o: ['Bootloader mở khoá', 'Bootloader khoá', 'Lỗi', 'Đang sạc'], a: 0, e: 'Liên hệ với flash.locked = 0.' },
    { q: 'Dynamic partitions flash được ở:', o: ['Bootloader mode', 'fastbootd', 'Không đâu', 'ADB sideload'], a: 1, e: 'Bootloader phải trả lỗi.' },
    { q: 'Lệnh vào fastbootd từ adb:', o: ['reboot fastboot', 'reboot download', 'reboot edl', 'reboot ota'], a: 0, e: 'Hoặc từ recovery.' },
    { q: 'GBL được khuyến nghị cho thiết bị:', o: ['ARM-64 từ Android 16', 'x86 từ Android 10', 'Mọi thiết bị từ 8', 'Chỉ TV'], a: 0, e: 'Triển khai GBL Google-certified mới nhất.' }
  ],
  match: [
    ['mkbootimg', 'Tạo boot image'],
    ['kaslr-seed', 'Ngẫu nhiên hoá địa chỉ nạp'],
    ['bootconfig', 'Cấu hình thay androidboot.*'],
    ['fastbootd', 'Fastboot userspace'],
    ['BCB', 'Boot control block'],
    ['GBL', 'Bootloader chuẩn hoá'],
    ['OEM unlocking', 'Điều kiện unlock']
  ]
});
