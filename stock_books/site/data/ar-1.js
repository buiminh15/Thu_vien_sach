// Android Architecture – Chương 1: Tổng quan kiến trúc AOSP.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 1,
  title: 'Tổng quan kiến trúc AOSP',
  intro: 'AOSP (Android Open Source Project) là mã nguồn Android công khai, có thể chỉnh sửa và là một bản cài đặt hoàn chỉnh của nền tảng di động Android. Chương này nói về hai mức tương thích (AOSP-compatible và Android-compatible), và <b>10 tầng</b> của software stack từ ứng dụng xuống kernel.',
  sections: [
    { icon: '📦', title: 'AOSP là gì và không gồm gì', blocks: [
      { t: 'p', x: 'AOSP là nền tảng Android hoàn chỉnh mà ai cũng có thể tải về và tuỳ biến cho thiết bị của mình. Tuy nhiên nó <b>không</b> bao gồm mọi thứ một thiết bị thương mại cần: ứng dụng phụ thuộc dịch vụ backend (nhắn tin đám mây, dịch vụ vị trí nâng cao) không được hỗ trợ, và thiếu nhiều ứng dụng người dùng cuối mà một số loại thiết bị yêu cầu.' },
      { t: 'table', head: ['Mức tương thích', 'Yêu cầu'], rows: [
        ['<b>AOSP-compatible</b>', 'Đáp ứng <b>CDD</b> (Compatibility Definition Document) — đường cơ sở về hành vi nền tảng'],
        ['<b>Android-compatible</b>', 'Đáp ứng CDD <b>và</b> VSR (Vendor Software Requirements), đồng thời vượt qua bộ kiểm thử <b>VTS</b> (Vendor Test Suite) và <b>CTS</b> (Compatibility Test Suite)']
      ] },
      { t: 'key', x: 'CDD định nghĩa nền tảng phải làm gì; VSR là nghĩa vụ phía vendor; VTS/CTS là bài kiểm thử tự động xác minh sự tuân thủ. Chương trình tương thích Android gắn các mảnh này lại với nhau.' },
      { t: 'tip', x: 'Về mô hình phát hành: từ 2026, mã nguồn được đẩy lên AOSP vào <b>Q2 và Q4</b> theo mô hình trunk-stable. Khi build hoặc đóng góp, dùng nhánh manifest <code>android-latest-release</code> (luôn trỏ tới bản phát hành mới nhất trên AOSP).' }
    ] },
    { icon: '🧱', title: 'Software stack: từ ứng dụng đến kernel', blocks: [
      { t: 'table', head: ['Tầng', 'Mô tả'], rows: [
        ['1. <b>Android apps</b>', 'Chỉ dùng Android API công khai; phát hành qua Google Play hoặc kênh khác; nhà sản xuất cũng có thể cài sẵn'],
        ['2. <b>Privileged apps</b>', 'Dùng Android API + System API; phải được cài sẵn dưới dạng privileged app'],
        ['3. <b>Device manufacturer apps</b>', 'Dùng Android API, System API và truy cập trực tiếp cài đặt framework; phải cài sẵn và chỉ cập nhật cùng bản cập nhật hệ thống'],
        ['4. <b>System API / Android API</b>', 'Android API là giao diện công khai cho nhà phát triển bên thứ ba; System API là tập mở rộng dành cho đối tác/OEM, đánh dấu <code>@SystemApi</code> trong mã nguồn'],
        ['5. <b>Android framework</b>', 'Các lớp Java, interface và mã biên dịch sẵn để ứng dụng xây dựng lên; chạy <b>bên trong tiến trình của từng ứng dụng</b>'],
        ['6. <b>System services</b>', 'Thành phần mô-đun như <code>system_server</code>, SurfaceFlinger, MediaService; framework API gọi các service này để truy cập phần cứng thay cho ứng dụng'],
        ['7. <b>Android Runtime (ART)</b>', 'Java runtime của AOSP, dịch bytecode của ứng dụng thành lệnh riêng của CPU để chạy native'],
        ['8. <b>HAL</b>', 'Giao diện chuẩn mà vendor phần cứng cài đặt, tách Android khỏi chi tiết driver cấp thấp'],
        ['9. <b>Native daemons và libraries</b>', 'Daemon: <code>init</code>, <code>healthd</code>, <code>logd</code>, <code>storaged</code>. Thư viện: <code>libc</code>, <code>liblog</code>, <code>libutils</code>, <code>libbinder</code>, <code>libselinux</code>. Làm việc trực tiếp với kernel, không cần HAL userspace'],
        ['10. <b>Kernel</b>', 'Lõi hệ điều hành giao tiếp với phần cứng; kernel AOSP được cấu trúc để tách module độc lập phần cứng khỏi module riêng của vendor']
      ] },
      { t: 'widget', name: 'aosp-stack', title: 'Tầng nào đảm nhiệm việc này?' },
      { t: 'mnemo', x: 'Đi từ trên xuống: <b>Apps → API → Framework → Services → ART → HAL → Native → Kernel</b>. Mỗi tầng chỉ nói chuyện với tầng kế bên để ranh giới vendor/framework giữ ổn định.' }
    ] }
  ],
  summary: [
    'AOSP là nền tảng hoàn chỉnh nhưng không có dịch vụ backend và nhiều app người dùng cuối.',
    'AOSP-compatible = CDD; Android-compatible = CDD + VSR + VTS + CTS.',
    'Stack 10 tầng: apps, privileged apps, OEM apps, API, framework, system services, ART, HAL, native daemons/libs, kernel.',
    'HAL tách vendor khỏi framework; kernel tách phần chung khỏi phần của vendor.'
  ],
  cards: [
    ['AOSP là gì?', 'Mã nguồn Android công khai, có thể chỉnh sửa, là bản cài đặt hoàn chỉnh của nền tảng di động.'],
    ['AOSP không gồm gì?', 'App phụ thuộc backend (nhắn tin đám mây, vị trí nâng cao) và nhiều app người dùng cuối.'],
    ['AOSP-compatible cần gì?', 'Đáp ứng CDD.'],
    ['Android-compatible cần gì?', 'CDD + VSR + vượt qua VTS và CTS.'],
    ['CDD là gì?', 'Compatibility Definition Document — định nghĩa nền tảng phải làm gì.'],
    ['VSR là gì?', 'Vendor Software Requirements — nghĩa vụ phía vendor.'],
    ['VTS vs CTS?', 'VTS kiểm thử phần vendor; CTS kiểm thử tính tương thích nền tảng (API/hành vi).'],
    ['Privileged app khác app thường?', 'Dùng thêm System API, phải cài sẵn dưới dạng privileged.'],
    ['@SystemApi để làm gì?', 'Đánh dấu phần System API dành cho đối tác/OEM.'],
    ['Framework chạy ở đâu?', 'Bên trong tiến trình của từng ứng dụng.'],
    ['System services ví dụ?', 'system_server, SurfaceFlinger, MediaService.'],
    ['ART làm gì?', 'Dịch bytecode thành lệnh native của CPU.'],
    ['Native daemons ví dụ?', 'init, healthd, logd, storaged.'],
    ['Nhánh manifest nên dùng?', 'android-latest-release.'],
    ['Lịch đẩy mã AOSP từ 2026?', 'Q2 và Q4.']
  ],
  quiz: [
    { q: 'Thiết bị AOSP-compatible phải đáp ứng:', o: ['CDD', 'CTS và VTS', 'Chỉ VSR', 'Không gì'], a: 0, e: 'Android-compatible mới cần thêm VSR + VTS/CTS.' },
    { q: 'Android-compatible cần thêm so với AOSP-compatible:', o: ['VSR và vượt VTS/CTS', 'Chỉ Google Play', 'Chỉ root', 'Chỉ CDD'], a: 0, e: 'Kiểm thử tuân thủ tự động.' },
    { q: 'Framework Android chạy trong:', o: ['Kernel', 'Tiến trình của từng app', 'Bootloader', 'HAL'], a: 1, e: 'Còn system services chạy ở tiến trình riêng.' },
    { q: 'SurfaceFlinger thuộc tầng:', o: ['System services', 'ART', 'Kernel', 'Apps'], a: 0, e: 'Cùng system_server, MediaService.' },
    { q: 'Tầng nào dịch bytecode ra lệnh CPU?', o: ['HAL', 'ART', 'libc', 'init'], a: 1, e: 'Android Runtime.' },
    { q: 'libbinder thuộc nhóm:', o: ['Native libraries', 'Apps', 'Framework Java', 'HAL service'], a: 0, e: 'Cùng libc, liblog, libutils, libselinux.' },
    { q: 'Tầng cho phép vendor đổi hỗ trợ phần cứng mà không sửa tầng trên:', o: ['HAL', 'Framework', 'ART', 'Apps'], a: 0, e: 'Giao diện chuẩn do vendor cài đặt.' },
    { q: 'Ứng dụng của nhà sản xuất dùng framework nội bộ nên:', o: ['Cập nhật độc lập qua Play', 'Chỉ cập nhật cùng hệ thống', 'Không cần cài sẵn', 'Không chạy được'], a: 1, e: 'Phụ thuộc API không ổn định.' },
    { q: 'Dùng nhánh manifest nào để build AOSP mới nhất?', o: ['main-old', 'android-latest-release', 'stable', 'lts'], a: 1, e: 'Luôn trỏ tới bản mới nhất.' },
    { q: 'init là:', o: ['App', 'Native daemon', 'HAL', 'Service Java'], a: 1, e: 'Cùng healthd, logd, storaged.' }
  ],
  match: [
    ['CDD', 'Định nghĩa hành vi nền tảng'],
    ['VSR', 'Yêu cầu phần mềm vendor'],
    ['CTS', 'Kiểm thử tương thích'],
    ['@SystemApi', 'API dành cho OEM'],
    ['system_server', 'System service'],
    ['ART', 'Runtime Java'],
    ['libselinux', 'Thư viện native']
  ]
});
