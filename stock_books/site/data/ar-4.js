// Android Architecture – Chương 4: Configuration và Device Tree Overlays.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 4,
  title: 'Configuration và Device Tree Overlays',
  intro: 'Hai chủ đề về cấu hình thiết bị: (1) năm cách lưu <b>cấu hình</b> trong AOSP (system properties, init_dev_config, HAL properties, XML config, resource overlays) và (2) <b>Device Tree Overlays (DTO)</b> — cách mô tả phần cứng không tự phát hiện được và áp lớp phủ riêng thiết bị lên device tree chung của SoC.',
  sections: [
    { icon: '⚙️', title: 'Năm cách lưu cấu hình', blocks: [
      { t: 'table', head: ['Cách', 'Đặc điểm / khi nào dùng'], rows: [
        ['<b>System properties</b>', 'Cặp key/value chuỗi trong từ điển <code>build.prop</code>; đọc rẻ, không cần IPC kể cả khi nhiều tiến trình dùng chung. Vì giống biến toàn cục nên dùng sai có thể gây lỗ hổng bảo mật hoặc làm ứng dụng không truy cập được → cân nhắc các lựa chọn khác trước. Hướng dẫn: “Implement system properties as APIs”, “Add system properties”'],
        ['<b>Early boot device configuration</b> (Android 17+)', 'Dịch vụ <code>init_dev_config</code> chạy đồng bộ ở pha <code>early-init</code>, trước <code>apexd-bootstrap</code>; cho một image hỗ trợ nhiều biến thể phần cứng bằng cách đặt property trước khi các service phụ thuộc khởi động'],
        ['<b>HAL properties</b>', 'Giá trị xuất phát từ phần cứng nên do chính HAL cung cấp: thêm phương thức vào HAL interface hiện có. Không dùng system properties như kênh phụ để giao tiếp với HAL'],
        ['<b>System config XML</b>', 'Dữ liệu tĩnh nhưng phức tạp, schema ổn định; luật build <code>xsd_config</code> ép schema và sinh parser (Config File Schema API)'],
        ['<b>Resource overlays</b>', 'Overlay chuẩn tuỳ biến sản phẩm lúc build; <b>RRO</b> (runtime resource overlay) đổi giá trị tài nguyên của gói đích lúc chạy, có thể nằm ở partition khác với app']
      ] },
      { t: 'h3', x: 'Tích hợp init_dev_config' },
      { t: 'steps', items: [
        'Đặt <code>ro.vendor.init_dev_config.path</code> qua <code>PRODUCT_VENDOR_PROPERTIES</code> (nếu không đặt, <code>init</code> bỏ qua dịch vụ).',
        'Build binary với <code>bootstrap: true</code> vì thư viện bionic từ APEX chưa có ở thời điểm này.',
        'Gán nhãn binary <code>init_dev_config_exec</code>.',
        'Cấp quyền cho domain <code>init_dev_config</code> đặt các loại property cần thiết.'
      ] },
      { t: 'warn', x: '<b>ConfigStore HAL đã deprecated</b> (trước Android 10 dùng để lưu system properties) và không nên dùng nữa; tài liệu còn trong mục Archive (ConfigStore, tạo HAL interface, cài đặt service, client-side, thêm class/item).' },
      { t: 'widget', name: 'config-picker', title: 'Chọn cơ chế cấu hình phù hợp' }
    ] },
    { icon: '🌲', title: 'Device Tree Overlays', blocks: [
      { t: 'list', items: [
        '<b>Device tree (DT)</b>: cấu trúc dữ liệu gồm node và property có tên, mô tả “phần cứng không tự phát hiện được” (non-discoverable).',
        'Vendor viết <b>DTS</b>; trình biên dịch <code>dtc</code> tạo <b>DTB</b> (flattened device tree) cho bootloader.',
        '<b>DTBO</b> (device tree blob for overlay): cho bootloader giữ một device tree chung của SoC và áp động overlay riêng thiết bị; overlay có thể thêm node và sửa property của cây hiện có.',
        'Từ <b>Android 9</b>, bootloader <b>không được sửa</b> property đã định nghĩa trong DTO trước khi chuyển DTB hợp nhất cho kernel.'
      ] },
      { t: 'steps', items: [
        '<b>Build và flash</b>: biên dịch DTS thành DTB bằng <code>dtc</code> rồi flash vào nơi bootloader truy cập được lúc chạy.',
        '<b>Partition</b>: lưu DTB ở vị trí tin cậy — nối vào kernel trong boot image hoặc partition DTB riêng.',
        '<b>Load và boot</b>: bootloader nạp DTB vào bộ nhớ và khởi động kernel kèm địa chỉ device tree đã nạp.'
      ] },
      { t: 'tip', x: 'Các trang con của mục DTO: Implement DTOs, DTO syntax, Compile and verify, Use multiple DTs, DTB and DTBO partitions, Optimize DTO.' },
      { t: 'widget', name: 'dto-flow', title: 'Quy trình nạp device tree' }
    ] }
  ],
  summary: [
    'Cấu hình: system properties (dùng cẩn thận), init_dev_config, HAL properties, XML + xsd_config, resource overlays/RRO.',
    'ConfigStore HAL đã deprecated.',
    'DTO: DTS → dtc → DTB; DTBO overlay lên cây chung của SoC; Android 9+ bootloader không sửa property trong DTO.',
    'DTB lưu ở boot image hoặc partition DTB riêng, bootloader nạp rồi truyền địa chỉ cho kernel.'
  ],
  cards: [
    ['System properties là gì?', 'Cặp key/value chuỗi trong build.prop; đọc rẻ nhưng như biến toàn cục nên dễ dùng sai.'],
    ['init_dev_config chạy khi nào?', 'Pha early-init, trước apexd-bootstrap (Android 17+).'],
    ['Biến cho init_dev_config?', 'ro.vendor.init_dev_config.path qua PRODUCT_VENDOR_PROPERTIES.'],
    ['Vì sao bootstrap: true?', 'Chưa có bionic từ APEX ở pha đó.'],
    ['Giá trị từ phần cứng nên lưu ở đâu?', 'Phương thức của HAL interface.'],
    ['Dữ liệu tĩnh phức tạp?', 'XML với schema ổn định + xsd_config.'],
    ['RRO là gì?', 'Runtime resource overlay: đổi tài nguyên gói đích lúc chạy.'],
    ['ConfigStore?', 'HAL cũ đã deprecated, không dùng nữa.'],
    ['DTS / DTB / DTBO?', 'Mã nguồn / blob biên dịch / blob overlay.'],
    ['Công cụ biên dịch device tree?', 'dtc.'],
    ['DTO cho phép gì?', 'Giữ DT chung của SoC và áp overlay riêng thiết bị.'],
    ['Quy tắc bootloader từ Android 9?', 'Không sửa property đã định nghĩa trong DTO.'],
    ['DTB lưu ở đâu?', 'Nối vào kernel trong boot image hoặc partition DTB riêng.']
  ],
  quiz: [
    { q: 'Giá trị cấu hình xuất phát từ phần cứng nên do:', o: ['System property', 'HAL cung cấp', 'XML', 'RRO'], a: 1, e: 'Thêm phương thức vào HAL interface.' },
    { q: 'Công cụ tạo DTB từ DTS:', o: ['dtc', 'aidl', 'hidl-gen', 'make_ext4fs'], a: 0, e: 'Device tree compiler.' },
    { q: 'DTBO dùng để:', o: ['Thay toàn bộ kernel', 'Áp overlay lên DT chung của SoC', 'Nén ramdisk', 'Ký boot'], a: 1, e: 'Thêm node, sửa property.' },
    { q: 'Từ Android 9 bootloader:', o: ['Được sửa mọi property', 'Không sửa property đã định nghĩa trong DTO', 'Bỏ qua DTB', 'Cần root'], a: 1, e: 'Trước khi chuyển DTB hợp nhất cho kernel.' },
    { q: 'ConfigStore HAL hiện:', o: ['Khuyến nghị', 'Deprecated', 'Bắt buộc', 'Mới'], a: 1, e: 'Dùng cách khác.' },
    { q: 'Schema XML được ép bằng:', o: ['xsd_config', 'bpfmt', 'lint', 'gki_defconfig'], a: 0, e: 'Và sinh parser.' },
    { q: 'Overlay đổi tài nguyên lúc chạy gọi là:', o: ['DTBO', 'RRO', 'APEX', 'VINTF'], a: 1, e: 'Có thể nằm partition khác app.' },
    { q: 'Vì sao system properties cần cẩn thận?', o: ['Chậm', 'Như biến toàn cục, dễ gây lỗ hổng', 'Không đọc được', 'Cần IPC'], a: 1, e: 'Cân nhắc lựa chọn khác trước.' },
    { q: 'DTB được bootloader nạp vào:', o: ['Đĩa', 'Bộ nhớ, rồi truyền địa chỉ cho kernel', 'Cache', 'GPU'], a: 1, e: 'Bước load và boot.' }
  ],
  match: [
    ['init_dev_config', 'Chọn biến thể phần cứng sớm'],
    ['xsd_config', 'Schema XML + parser'],
    ['RRO', 'Overlay tài nguyên runtime'],
    ['DTBO', 'Blob overlay device tree'],
    ['dtc', 'Biên dịch DTS'],
    ['ConfigStore', 'Deprecated'],
    ['build.prop', 'Nơi lưu system properties']
  ]
});
