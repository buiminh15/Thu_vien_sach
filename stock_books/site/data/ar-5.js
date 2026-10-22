// Android Architecture – Chương 5: VNDK, VINTF và Vendor API level.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 5,
  title: 'VNDK, VINTF và Vendor API level',
  intro: 'Ba cơ chế giúp <b>framework và vendor cập nhật độc lập</b> (Treble): <b>VNDK</b> (bộ thư viện vendor được phép dùng, đã deprecated từ Android 15), <b>VINTF</b> (manifest + compatibility matrix mô tả và đối chiếu những gì mỗi bên cung cấp/đòi hỏi) và <b>Vendor API level</b> (phiên bản giao diện mà partition vendor hỗ trợ).',
  sections: [
    { icon: '📚', title: 'VNDK (Vendor NDK, ≤ AOSP 14)', blocks: [
      { t: 'p', x: 'VNDK là tập thư viện mà các thư viện/binary ở partition <code>vendor</code> hoặc <code>product</code> nạp lúc chạy bằng <code>dlopen</code>. Android 8.0 đưa vào để có API giữa framework và vendor, hỗ trợ <b>cập nhật chỉ framework</b>: nâng cấp system partition trong khi vendor giữ nguyên mà hai bên vẫn chạy cùng nhau.' },
      { t: 'warn', x: '<b>Deprecated từ Android 15</b> (vấn đề dung lượng và khả năng cập nhật): VNDK APEX cho Android 15 bị loại bỏ; <code>ro.vndk.version</code> và <code>ro.product.vndk.version</code> không còn được đặt cho vendor/product build cho Android 15. VNDK APEX phiên bản ≤ 14 vẫn được hỗ trợ cho vendor image hiện có. LL-NDK không thuộc VNDK nên không bị ảnh hưởng.' },
      { t: 'table', head: ['Nhóm thư viện framework', 'Ý nghĩa'], rows: [
        ['<b>LL-NDK</b> (Low-Level NDK)', 'Nhà phát triển cam kết giữ API và ABI ổn định. Ví dụ <code>libc.so</code>, <code>libdl.so</code>, <code>liblog.so</code>, <code>libm.so</code>, <code>libEGL.so</code>, <code>libvulkan.so</code>'],
        ['<b>Eligible VNDK</b>', 'Có thể nạp an toàn hai lần (một bởi framework, một bởi module vendor). Điều kiện: không trao đổi IPC với framework, không liên quan ART VM, không đọc/ghi file định dạng không ổn định, không có license cần rà soát pháp lý, code owner không phản đối vendor dùng'],
        ['<b>FWK-ONLY</b>', 'Chi tiết cài đặt nội bộ framework; vendor không được truy cập, ABI/API không ổn định, không được sao chép. Ngoại lệ Renderscript: <code>libft2.so</code>, <code>libmediandk.so</code> (FWK-ONLY-RS)']
      ] },
      { t: 'list', items: [
        '<b>VNDK-SP</b>: tập con định sẵn của eligible VNDK mà Google đã rà soát là an toàn khi nạp hai lần vào tiến trình framework; đánh dấu <code>vndk: { support_system_process: true }</code> trong Android.bp. Thêm <code>vndk: {private: true}</code> → VNDK-SP-Private, ẩn với SP-HAL.',
        '<b>Same-Process HAL (SP-HAL)</b>: thư viện chia sẻ của vendor nạp vào tiến trình framework, cô lập bằng <b>linker namespace</b>, chỉ được phụ thuộc LL-NDK và VNDK-SP. Được duyệt: driver GLES, EGL, Vulkan, RenderScript, graphics mapper.',
        '<b>Module phía vendor</b>: executable và shared library dưới <code>/vendor</code>; framework và vendor process giao tiếp qua HIDL và hardware binder.',
        '<b>Versioning</b>: <code>ro.vndk.version</code> quyết định tên APEX <code>com.android.vndk.v${ro.vndk.version}</code>; VTS yêu cầu property này không rỗng (ví dụ <code>VtsVndkFilesTest</code>).'
      ] },
      { t: 'tip', x: 'Các trang con: Enable VNDK, build system support, extensions, snapshot design/generate, vendor snapshots, <b>linker namespace</b>, directories/rules/sepolicy, RenderScript, ABI stability, prebuilt ABI usages checker.' },
      { t: 'widget', name: 'vndk-classify', title: 'Phân loại thư viện' }
    ] },
    { icon: '📜', title: 'VINTF: Vendor Interface Object', blocks: [
      { t: 'p', x: 'VINTF object gom thông tin về thiết bị và cung cấp qua <b>API truy vấn</b>; một phần thu thập lúc chạy, phần còn lại định nghĩa tĩnh trong manifest XML. Từ Android 8.0 có API runtime báo những gì có trên thiết bị — gửi tới server OTA và các bên khác như CTS <code>DeviceInfo</code>.' },
      { t: 'key', x: '<b>Manifest mô tả cái được cung cấp; compatibility matrix mô tả cái được đòi hỏi.</b> Mỗi cặp manifest/matrix được đối chiếu ở thời điểm OTA để thiết bị chỉ nhận bản cập nhật framework mà nó hỗ trợ.' },
      { t: 'table', head: ['Artifact', 'Vai trò', 'Cách tạo'], rows: [
        ['<b>Device manifest</b>', 'Mô tả tĩnh những gì thiết bị cung cấp cho framework', 'Viết khi phát triển thiết bị'],
        ['<b>Framework compatibility matrix</b>', 'Những gì framework đòi hỏi từ thiết bị', 'Tĩnh, xác định thủ công khi phát triển framework'],
        ['<b>Framework manifest</b>', 'Dịch vụ cấp cao framework cung cấp cho thiết bị', 'Tĩnh'],
        ['<b>Device compatibility matrix</b>', 'Dịch vụ vendor image đòi hỏi từ framework', 'Xác định thủ công khi phát triển thiết bị']
      ] },
      { t: 'list', items: [
        '<b>Phía thiết bị</b>: schema cho device manifest, hỗ trợ build sinh manifest, API truy vấn runtime trả manifest + dữ liệu runtime. <b>Phía framework</b>: schema framework manifest và API trả framework manifest.',
        '<b>FCM lifecycle</b>: cách HIDL HAL bị deprecate/gỡ và file Framework Compatibility Matrix thay đổi theo trạng thái phiên bản HAL. <b>Device manifest development</b>: vendor khai báo <b>Target FCM Version</b> và tăng khi nâng cấp vendor image. <b>Match rules</b>: điều kiện để matrix khớp manifest.'
      ] },
      { t: 'widget', name: 'vintf-match', title: 'Manifest có khớp compatibility matrix không?' }
    ] },
    { icon: '🔢', title: 'Vendor API level', blocks: [
      { t: 'p', x: 'Vendor API level là phiên bản giao diện mà partition vendor hỗ trợ — theo cả hai chiều: <b>HAL</b> vendor cung cấp cho system và <b>LLNDK</b> vendor đòi hỏi từ system. Nó cũng quyết định VSR nào áp dụng cho phần mềm vendor.' },
      { t: 'table', head: ['Property', 'Ý nghĩa'], rows: [
        ['<code>ro.board.api_level</code>', 'Vendor API level mà phần mềm chipset hỗ trợ; build system tự đặt cho mọi chipset'],
        ['<code>ro.board.first_api_level</code>', 'Mức chipset ra mắt lần đầu; SoC vendor đặt qua <code>BOARD_SHIPPING_API_LEVEL</code>, coi như cuối cùng'],
        ['<code>ro.product.first_api_level</code>', 'SDK API level lúc thiết bị ra mắt; OEM đặt một lần, không bao giờ cập nhật'],
        ['<code>ro.vendor.api_level</code>', 'Vendor API level dẫn xuất của thiết bị'],
        ['<code>ro.board.api_frozen</code>', 'Boolean, mặc định false, thành true khi mức được chốt'],
        ['<code>ro.llndk.api_level</code>', 'Mức LLNDK mà system partition cung cấp; vendor image ≤ mức này có thể flash cùng system image đó']
      ] },
      { t: 'list', items: [
        'Từ <b>Android 14 QPR3</b>: vendor API level phát hành theo lịch riêng, tách khỏi SDK API level, dùng định dạng <b>YYYYMM</b> (SDK vẫn là số nguyên). Hàm <code>AVendorSupport_getVendorApiLevelOf()</code> ánh xạ — SDK 35 → 202404.',
        '<b>Dẫn xuất</b>: chipset đang <b>vendor freeze</b> → <code>ro.vendor.api_level</code> = min(<code>ro.board.api_level</code>, mức vendor ánh xạ từ <code>ro.product.first_api_level</code>); chưa freeze → chỉ mức ánh xạ.',
        '<b>Android 13</b>: là số nguyên theo SDK, đổi mỗi năm; <code>ro.board.*</code> chỉ đặt cho chipset đủ điều kiện vendor freeze; <code>ro.vndk.version</code> bị bỏ từ Android 14 QPR3.',
        '<b>Vendor freeze</b>: vendor cố định partition vendor ở một phiên bản VSR; lúc chạy system partition điều chỉnh hành vi theo mức vendor (ví dụ bỏ qua tính năng mới mà vendor không hỗ trợ). Chỉ áp dụng cho thiết bị Android-compatible.'
      ] }
    ] }
  ],
  summary: [
    'VNDK cho phép cập nhật chỉ framework nhưng đã deprecated từ Android 15; LL-NDK vẫn còn.',
    'Thư viện framework chia LL-NDK / eligible VNDK (VNDK-SP) / FWK-ONLY; SP-HAL chỉ phụ thuộc LL-NDK + VNDK-SP.',
    'VINTF: manifest = cung cấp, compatibility matrix = đòi hỏi; đối chiếu lúc OTA; Target FCM Version.',
    'Vendor API level: tách khỏi SDK từ Android 14 QPR3, định dạng YYYYMM; vendor freeze cố định VSR.'
  ],
  cards: [
    ['VNDK là gì?', 'Tập thư viện vendor/product được nạp lúc chạy, tạo API giữa framework và vendor (Android 8.0+).'],
    ['VNDK deprecated từ khi nào?', 'Android 15; APEX ≤ 14 vẫn hỗ trợ.'],
    ['LL-NDK ví dụ?', 'libc, libdl, liblog, libm, libEGL, libvulkan.'],
    ['FWK-ONLY?', 'Nội bộ framework, vendor không được dùng.'],
    ['VNDK-SP?', 'Tập con eligible VNDK an toàn khi nạp hai lần vào tiến trình framework.'],
    ['SP-HAL phụ thuộc gì?', 'Chỉ LL-NDK và VNDK-SP, cô lập bằng linker namespace.'],
    ['VINTF object?', 'Đối tượng gom thông tin thiết bị, có API truy vấn runtime.'],
    ['Manifest vs matrix?', 'Manifest mô tả cái cung cấp; matrix mô tả cái đòi hỏi.'],
    ['Bốn artifact VINTF?', 'Device manifest, framework manifest, framework compat matrix, device compat matrix.'],
    ['Khi nào đối chiếu manifest/matrix?', 'Lúc OTA.'],
    ['Target FCM Version?', 'Phiên bản FCM mà device manifest khai báo, tăng khi nâng cấp vendor image.'],
    ['Vendor API level là gì?', 'Phiên bản giao diện partition vendor hỗ trợ (HAL cung cấp + LLNDK đòi hỏi).'],
    ['Định dạng từ Android 14 QPR3?', 'YYYYMM, tách khỏi SDK API level.'],
    ['ro.product.first_api_level?', 'SDK level lúc ra mắt, OEM đặt một lần.'],
    ['Vendor freeze?', 'Cố định partition vendor ở một phiên bản VSR; system điều chỉnh theo.']
  ],
  quiz: [
    { q: 'VNDK bị deprecate từ:', o: ['Android 10', 'Android 13', 'Android 15', 'Android 8'], a: 2, e: 'Do vấn đề dung lượng và cập nhật.' },
    { q: 'Thư viện nào thuộc LL-NDK?', o: ['libui', 'libc.so', 'libmedia', 'libandroid_runtime'], a: 1, e: 'Cam kết API/ABI ổn định.' },
    { q: 'SP-HAL chỉ được phụ thuộc:', o: ['Mọi thư viện', 'LL-NDK và VNDK-SP', 'FWK-ONLY', 'Chỉ app'], a: 1, e: 'Cô lập bằng linker namespace.' },
    { q: 'Manifest mô tả:', o: ['Cái được cung cấp', 'Cái được đòi hỏi', 'Cái bị cấm', 'Cái deprecated'], a: 0, e: 'Matrix mới là cái đòi hỏi.' },
    { q: 'Đối chiếu manifest/matrix diễn ra khi:', o: ['Boot', 'OTA', 'Cài app', 'Tắt máy'], a: 1, e: 'Chỉ nhận cập nhật framework hỗ trợ được.' },
    { q: 'Định dạng vendor API level từ 14 QPR3:', o: ['Số nguyên SDK', 'YYYYMM', 'x.y.z', 'Hex'], a: 1, e: 'SDK 35 → 202404.' },
    { q: 'Property OEM đặt một lần cho SDK level lúc ra mắt:', o: ['ro.board.api_level', 'ro.product.first_api_level', 'ro.vendor.api_level', 'ro.llndk.api_level'], a: 1, e: 'Không bao giờ cập nhật.' },
    { q: 'ro.llndk.api_level cho biết:', o: ['Mức LLNDK system cung cấp', 'Mức chipset', 'Phiên bản kernel', 'Mức SDK'], a: 0, e: 'Vendor image ≤ mức này flash được.' },
    { q: 'Điều kiện eligible VNDK KHÔNG gồm:', o: ['Không IPC với framework', 'Không liên quan ART VM', 'Phải ghi file định dạng không ổn định', 'Code owner không phản đối'], a: 2, e: 'Ngược lại: không được dùng file định dạng không ổn định.' },
    { q: 'Vendor freeze chỉ áp dụng cho:', o: ['Mọi thiết bị', 'Thiết bị Android-compatible', 'Emulator', 'App'], a: 1, e: 'Theo tài liệu.' }
  ],
  match: [
    ['LL-NDK', 'API/ABI ổn định'],
    ['FWK-ONLY', 'Nội bộ framework'],
    ['SP-HAL', 'HAL nạp vào tiến trình framework'],
    ['Device manifest', 'Cái thiết bị cung cấp'],
    ['Compatibility matrix', 'Cái được đòi hỏi'],
    ['ro.board.api_frozen', 'Chốt vendor API level'],
    ['YYYYMM', 'Định dạng vendor API level']
  ]
});
