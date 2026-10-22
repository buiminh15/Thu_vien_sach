// Android Architecture – Chương 2: HAL và HIDL.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 2,
  title: 'Hardware Abstraction Layer (HAL) và HIDL',
  intro: 'HAL là lớp trừu tượng có giao diện chuẩn do vendor phần cứng cài đặt, cho phép thêm tính năng cấp thấp mà không động đến mã tầng trên. Chương này nói về các loại HAL (AIDL, HIDL, binderized, Same Process, wrapped), vai trò client/interface/service, và <b>HIDL</b> — ngôn ngữ định nghĩa giao diện đã bị khai tử (deprecated).',
  sections: [
    { icon: '🔌', title: 'HAL: khái niệm và các loại', blocks: [
      { t: 'p', x: 'HAL đã có từ trước Android 8, nhưng <b>Android 8 chuẩn hoá giao diện của từng HAL</b>. Thiết kế trước Android 8 được ghi ở mục Legacy HALs (AOSP ≤ v7).' },
      { t: 'table', head: ['Loại', 'Mô tả'], rows: [
        ['<b>AIDL</b>', 'Ngôn ngữ định nghĩa giao diện kiểu Java, độc lập ngôn ngữ lập trình; <b>khuyến nghị cho HAL mới</b>; là cơ chế giao tiếp giữa HAL client và service'],
        ['<b>HIDL</b>', 'Hardware Interface Definition Language; <b>deprecated từ Android 13</b> (trang HIDL ghi từ Android 10 đã được thay bằng AIDL); các HIDL HAL hiện có vẫn được hỗ trợ'],
        ['<b>Binderized HAL</b>', 'Giao tiếp qua binder IPC, chạy ở tiến trình riêng so với client, đăng ký với service manager để client tìm thấy; mọi HAL viết cho Android 8+ là binderized'],
        ['<b>Same Process (SP) HAL</b>', 'Tập hạn chế các HAL được bọc, danh sách do Google kiểm soát: stable C mapper 5, OpenGL, Vulkan, android.hidl.memory@1.0, android.hardware.renderscript@1.0'],
        ['<b>Wrapped HAL</b>', 'HAL dịch vụ trước Android 8 được đặt trong lớp bọc AIDL/HIDL để chạy trên Android 8+']
      ] },
      { t: 'h3', x: 'Các vai trò' },
      { t: 'list', items: [
        '<b>HAL client</b>: tiến trình truy cập HAL service.',
        '<b>HAL interface</b>: giao diện chung mà cả client và service dùng.',
        '<b>HAL service</b>: bản cài đặt riêng cho phần cứng (ví dụ mã nói chuyện với một camera cụ thể). Vendor phải cài đặt <b>mọi HAL bắt buộc</b> trong compatibility matrix của bản phát hành mục tiêu, đặt trong partition <code>vendor</code>; cũng có thể tạo HAL mới hoặc mở rộng HAL có sẵn.'
      ] },
      { t: 'key', x: 'Mục tiêu thiết kế: thay đổi framework mà <b>không phải build lại HAL</b>. Vendor build HAL vào <code>/vendor</code> nên framework có thể cập nhật qua OTA.' }
    ] },
    { icon: '📜', title: 'HIDL', blocks: [
      { t: 'p', x: 'HIDL là ngôn ngữ mô tả giao diện giữa HAL và người dùng nó: định nghĩa kiểu, lời gọi phương thức, interface và package, dùng để giao tiếp giữa các codebase có thể biên dịch độc lập.' },
      { t: 'table', head: ['Thuật ngữ', 'Ý nghĩa'], rows: [
        ['<b>Binderized</b>', 'Dùng HIDL cho RPC giữa các tiến trình qua cơ chế kiểu Binder; HAL chạy tiến trình riêng'],
        ['<b>Passthrough</b>', 'Server là thư viện chia sẻ được client nạp bằng <code>dlopen</code> → cùng tiến trình; để đưa mã cũ vào mô hình HIDL; không hỗ trợ Java; thiết bị ra mắt Android O+ phải binderized hoàn toàn'],
        ['<b>Client / Server</b>', 'Client gọi phương thức, server cài đặt; một tiến trình có thể là cả hai với interface khác nhau'],
        ['<b>Interface, package, version</b>', 'Interface giống class; package gom interface và kiểu dưới một version major.minor; minor chỉ được thêm, không đổi kiểu/phương thức đã có'],
        ['<b>Transport</b>', 'Hạ tầng HIDL chuyển dữ liệu giữa server và client'],
        ['<b>oneway / generates</b>', '<code>oneway</code> không trả về và không chặn; <code>generates</code> trả giá trị qua callback đồng bộ']
      ] },
      { t: 'h3', x: 'Nguyên tắc thiết kế' },
      { t: 'list', items: [
        '<b>Interoperability</b>: interface có version và không thể đổi sau khi công bố.',
        '<b>Efficiency</b>: dữ liệu đến C++ ở dạng standard-layout; có shared memory và <b>Fast Message Queue (FMQ)</b> để chuyển dữ liệu không cần RPC.',
        '<b>Intuitiveness</b>: tham số RPC chỉ là đầu vào; giá trị không trả trực tiếp được thì trả qua callback; quyền sở hữu luôn thuộc hàm gọi nên dữ liệu chỉ cần tồn tại trong suốt lời gọi.'
      ] },
      { t: 'h3', x: 'Passthrough → binderized' },
      { t: 'list', items: [
        'Có thể bọc HAL cũ bằng giao diện HIDL phục vụ cả hai chế độ, trong suốt với HAL và framework. Biên dịch <code>.hal</code> bằng <code>hidl-gen</code> sinh header passthrough (ví dụ <code>BsFoo.h</code>).',
        'Phương thức <code>oneway</code> chạy trên thread riêng ở passthrough nên bản cài đặt phải thread-safe.',
        'Binderize bằng hai package: <code>-impl</code> (xuất <code>HIDL_FETCH_IFoo</code>) và <code>-service</code> (đăng ký bản cài đặt làm dịch vụ binderized). Client lấy interface bằng <code>getService(name, getStub)</code>.',
        'Ngữ pháp giống C nhưng không có preprocessor: <code>struct</code>, <code>union</code>, <code>safe_union</code>, <code>enum</code>, <code>typedef</code>, kiểu <code>vec&lt;T&gt;</code>, <code>memory</code>, <code>bitfield&lt;T&gt;</code>, <code>fmq_sync/fmq_unsync</code>, chú thích kiểu Java <code>@</code>.'
      ] },
      { t: 'tip', x: 'Menu HIDL còn có: Interfaces and packages, Interface hashing, Services and data transfer, Fast Message Queue, Use Binder IPC, MemoryBlock, Model threading, Convert HAL modules, Data types, Safe union, Interface versioning, Code style guide, HIDL C++, HIDL Java, Dynamically available HALs, HIDL framework backward-compatibility verification.' },
      { t: 'widget', name: 'hal-type-picker', title: 'Chọn loại HAL cho từng tình huống' }
    ] }
  ],
  summary: [
    'HAL = giao diện chuẩn do vendor cài đặt; Android 8 chuẩn hoá giao diện từng HAL.',
    'HAL mới nên dùng AIDL; HIDL deprecated nhưng HAL hiện có vẫn được hỗ trợ.',
    'Binderized HAL chạy tiến trình riêng qua binder IPC; Android 8+ dùng binderized; SP HAL là ngoại lệ do Google kiểm soát.',
    'HIDL: interface/package/version, oneway/generates, FMQ, passthrough (dlopen) → binderized (-impl, -service).'
  ],
  cards: [
    ['HAL là gì?', 'Lớp trừu tượng có giao diện chuẩn do vendor phần cứng cài đặt.'],
    ['Android 8 thay đổi gì với HAL?', 'Chuẩn hoá giao diện của từng HAL.'],
    ['HAL mới nên dùng gì?', 'AIDL.'],
    ['HIDL đã bị thay bằng?', 'AIDL (deprecated; HAL cũ vẫn được hỗ trợ).'],
    ['Binderized HAL?', 'Chạy tiến trình riêng, giao tiếp qua binder IPC, đăng ký với service manager.'],
    ['SP HAL?', 'Same Process HAL: tập hạn chế (OpenGL, Vulkan, mapper…) do Google kiểm soát.'],
    ['Wrapped HAL?', 'HAL trước Android 8 đặt trong lớp bọc AIDL/HIDL.'],
    ['HAL service phải đặt ở partition nào?', 'vendor.'],
    ['Passthrough HIDL?', 'Server là thư viện được client dlopen, cùng tiến trình.'],
    ['oneway?', 'Phương thức không trả về và không chặn.'],
    ['generates?', 'Trả giá trị qua callback đồng bộ.'],
    ['FMQ?', 'Fast Message Queue: chuyển dữ liệu không cần RPC.'],
    ['hidl-gen?', 'Công cụ sinh mã (kể cả header passthrough) từ file .hal.'],
    ['Package -impl và -service?', 'impl xuất HIDL_FETCH_IFoo; service đăng ký dịch vụ binderized.'],
    ['Quy tắc minor version?', 'Chỉ được thêm, không đổi kiểu/phương thức đã có.']
  ],
  quiz: [
    { q: 'Ngôn ngữ khuyến nghị cho HAL mới:', o: ['HIDL', 'AIDL', 'CORBA', 'Thrift'], a: 1, e: 'HIDL đã deprecated.' },
    { q: 'Binderized HAL chạy:', o: ['Cùng tiến trình client', 'Tiến trình riêng', 'Trong kernel', 'Trong ART'], a: 1, e: 'Giao tiếp qua binder IPC.' },
    { q: 'Passthrough HAL nạp bằng:', o: ['dlopen', 'fork', 'ioctl', 'mmap'], a: 0, e: 'Cùng tiến trình client.' },
    { q: 'Thiết bị ra mắt Android O trở lên:', o: ['Cho phép passthrough', 'Phải binderized hoàn toàn', 'Chỉ Java HAL', 'Không HAL'], a: 1, e: 'Passthrough service bị cấm.' },
    { q: 'HAL service của vendor nằm ở:', o: ['/system', '/vendor', '/data', '/cache'], a: 1, e: 'Cho phép cập nhật framework qua OTA.' },
    { q: 'Ví dụ SP HAL:', o: ['Vulkan', 'Camera HAL', 'Audio HAL', 'GNSS'], a: 0, e: 'Cùng OpenGL, mapper 5…' },
    { q: 'Phương thức oneway:', o: ['Trả về đồng bộ', 'Không trả về và không chặn', 'Chỉ trong Java', 'Chặn tới khi xong'], a: 1, e: 'Ở passthrough chạy trên thread riêng.' },
    { q: 'Kiểu nào KHÔNG thuộc ngữ pháp HIDL?', o: ['vec<T>', 'safe_union', 'bitfield<T>', 'template<T>'], a: 3, e: 'HIDL không có preprocessor/template kiểu C++.' },
    { q: 'Quy tắc nâng minor version:', o: ['Đổi tuỳ ý', 'Chỉ thêm, không đổi cái cũ', 'Xoá method cũ', 'Đổi package'], a: 1, e: 'Giữ tương thích nhị phân.' },
    { q: 'Wrapped HAL dành cho:', o: ['HAL trước Android 8', 'HAL mới nhất', 'Kernel module', 'App'], a: 0, e: 'Đặt trong wrapper AIDL/HIDL.' }
  ],
  match: [
    ['AIDL', 'Ngôn ngữ giao diện khuyến nghị'],
    ['HIDL', 'Deprecated'],
    ['Binderized', 'Tiến trình riêng + binder'],
    ['Passthrough', 'dlopen cùng tiến trình'],
    ['FMQ', 'Hàng đợi tin nhắn nhanh'],
    ['hidl-gen', 'Sinh mã từ .hal'],
    ['SP HAL', 'Cùng tiến trình, Google kiểm soát']
  ]
});
