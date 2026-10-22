// Android Input & Interaction – Chương 6: Context Hub Runtime Environment (CHRE).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 6,
  title: 'Context Hub Runtime Environment (CHRE)',
  intro: '<b>CHRE</b> là môi trường phần mềm chung để chạy các ứng dụng native nhỏ (<b>nanoapp</b>) trên bộ xử lý công suất thấp, nhờ đó bộ xử lý ứng dụng (AP) có thể ngủ trong các tác vụ nền. CHRE giúp nhà sản xuất và đối tác tin cậy tiết kiệm pin và bật tính năng luôn-bật, nhận biết ngữ cảnh — nhất là học máy trên dữ liệu cảm biến xung quanh.',
  sections: [
    { icon: '🧩', title: 'Kiến trúc', blocks: [
      { t: 'table', head: ['Thành phần', 'Mô tả'], rows: [
        ['<b>Nanoapp</b>', 'Chương trình native C hoặc C++ (không hỗ trợ Java). App client Android truy cập qua system API bị hạn chế của <code>ContextHubManager</code>; chỉ app được hệ thống tin cậy mới truy cập'],
        ['<b>CHRE framework</b>', 'Hướng sự kiện: nanoapp nhận sự kiện tại các điểm vào <code>nanoappStart()</code>, <code>nanoappHandleEvent()</code>, <code>nanoappEnd()</code>; một nanoapp không bao giờ chạy trên nhiều luồng cùng lúc'],
        ['<b>PAL</b> (platform abstraction layers)', 'Nối bản cài đặt tham chiếu AOSP với phần cứng và phần mềm cụ thể'],
        ['<b>Context Hub HAL</b>', 'Giao diện giữa Android và CHRE']
      ] },
      { t: 'list', items: [
        '<b>Context Hub HAL</b>: lúc boot, <code>getHubs()</code> là lời gọi chặn phải nhanh và chính xác. Hỗ trợ nanoapp nạp sẵn và các thao tác nạp, gỡ, bật động. Nanoapp nạp động lưu trong bộ nhớ không bay hơi phải <b>khởi động ở trạng thái tắt</b>. Nếu CHRE tự khởi động lại, HAL gửi sự kiện <code>RESTARTED</code> sau khi khởi tạo lại. Định nghĩa HAL được ưu tiên hơn tài liệu.',
        '<b>CHRE không phải sensor hub</b>: nó là client của framework cảm biến riêng của thiết bị.'
      ] },
      { t: 'widget', name: 'chre-event', title: 'Điểm vào nanoapp nào?' }
    ] },
    { icon: '🧰', title: 'Nanoapp API', blocks: [
      { t: 'list', items: [
        'API định nghĩa bằng header <b>C99</b>; bản tham chiếu dùng tập con hạn chế của <b>C++11</b>. Theo <b>semantic versioning</b>: nhị phân nanoapp tương thích qua các minor version; nanoapp kiểm tra tính năng lúc chạy.',
        '<b>Tính năng bắt buộc</b>: timer, gửi thông điệp tới AP, logging.',
        '<b>Thư viện bị hạn chế</b>: loại trừ exception C++, RTTI, STL, cấp phát động, I/O chuẩn, threading; bắt buộc có hàm cơ bản về bộ nhớ, chuỗi, toán.',
        'Nanoapp vẫn phải build và nạp được trên nền tảng thiếu một tính năng nào đó.'
      ] },
      { t: 'table', head: ['Nhóm tính năng tuỳ chọn', 'Nội dung'], rows: [
        ['<b>Sensors</b>', 'Gia tốc, con quay, từ kế, ánh sáng, tiệm cận, có batching'],
        ['<b>GNSS</b>', 'Fix định kỳ và raw measurements'],
        ['<b>Wi-Fi</b>', 'Theo dõi quét và quét theo yêu cầu; RTT từ v1.2'],
        ['<b>WWAN</b>', 'Nhận diện cell phục vụ và lân cận'],
        ['<b>Audio</b>', 'Dữ liệu micro công suất thấp theo lô'],
        ['<b>Bluetooth</b>', 'Quét BLE, theo dõi RSSI, xử lý advertisement, offload socket']
      ] }
    ] },
    { icon: '🔋', title: 'Trường hợp dùng và công suất', blocks: [
      { t: 'list', items: [
        '<b>Ứng dụng điển hình</b>: định vị trong nhà và ngoài trời, xử lý chuyển động, âm thanh kết hợp cảm biến chuyển động, giám sát BLE.',
        '<b>Tiết kiệm điện</b>: giữ AP ngủ trong phiên GNSS, xử lý quét Wi-Fi mà không đánh thức AP, tái sử dụng kết quả quét kết nối.',
        '<b>Build</b>: hệ build GNU Make cho nanoapp và (tuỳ chọn) framework; OEM thêm hỗ trợ build cho thiết bị đích. Cài đặt tham chiếu C++11 ở <code>system/chre</code> được khuyến nghị làm nền, giữ mở rộng của vendor gần với nó.',
        '<b>Khoảng trống tài liệu</b>: trang gốc ít chi tiết về cơ chế bảo mật, quy trình kiểm thử và yêu cầu phần cứng ngoài các tính năng bắt buộc nêu trên.'
      ] }
    ] }
  ],
  summary: [
    'CHRE chạy nanoapp native trên bộ xử lý công suất thấp để AP ngủ; chỉ app hệ thống tin cậy truy cập qua ContextHubManager.',
    'Hướng sự kiện: nanoappStart/HandleEvent/End; một luồng tại một thời điểm.',
    'Context Hub HAL: getHubs() nhanh, nanoapp nạp động khởi động ở trạng thái tắt, sự kiện RESTARTED.',
    'API C99 + C++11 hạn chế; bắt buộc timer, messaging, logging; tuỳ chọn sensors, GNSS, Wi-Fi, WWAN, audio, BLE.'
  ],
  cards: [
    ['CHRE là gì?', 'Môi trường chạy ứng dụng native nhỏ trên bộ xử lý công suất thấp.'],
    ['Nanoapp viết bằng?', 'C hoặc C++ (không hỗ trợ Java).'],
    ['Ba điểm vào nanoapp?', 'nanoappStart(), nanoappHandleEvent(), nanoappEnd().'],
    ['CHRE có phải sensor hub?', 'Không, là client của framework cảm biến riêng thiết bị.'],
    ['Ai được truy cập nanoapp từ Android?', 'Chỉ app hệ thống tin cậy qua ContextHubManager.'],
    ['PAL là gì?', 'Platform abstraction layers nối bản tham chiếu với phần cứng/phần mềm.'],
    ['getHubs() yêu cầu?', 'Lời gọi chặn phải nhanh và chính xác lúc boot.'],
    ['Nanoapp nạp động lưu NVM khi boot?', 'Phải ở trạng thái tắt.'],
    ['Sự kiện khi CHRE tự restart?', 'RESTARTED.'],
    ['Tính năng bắt buộc của API?', 'Timer, gửi thông điệp tới AP, logging.'],
    ['Thư viện bị loại trừ?', 'Exception C++, RTTI, STL, cấp phát động, I/O chuẩn, threading.'],
    ['Header API và chuẩn C++?', 'C99; bản tham chiếu dùng tập con C++11.'],
    ['Ví dụ tính năng tuỳ chọn?', 'Sensors, GNSS, Wi-Fi, WWAN, audio, Bluetooth.'],
    ['Mã tham chiếu CHRE?', 'system/chre.']
  ],
  quiz: [
    { q: 'Nanoapp KHÔNG viết bằng:', o: ['C', 'C++', 'Java', 'Cả C và C++'], a: 2, e: 'Chỉ native.' },
    { q: 'Điểm vào xử lý sự kiện của nanoapp:', o: ['nanoappStart', 'nanoappHandleEvent', 'nanoappEnd', 'main'], a: 1, e: 'Hướng sự kiện.' },
    { q: 'Nanoapp chạy trên mấy luồng cùng lúc?', o: ['Một', 'Hai', 'Nhiều', 'Tuỳ thích'], a: 0, e: 'Không bao giờ nhiều luồng.' },
    { q: 'CHRE là:', o: ['Sensor hub', 'Client của sensor framework riêng', 'Kernel', 'Launcher'], a: 1, e: 'Không phải sensor hub.' },
    { q: 'Nanoapp nạp động lưu NVM khi boot ở trạng thái:', o: ['Bật', 'Tắt', 'Suspend', 'Hỏng'], a: 1, e: 'Theo yêu cầu HAL.' },
    { q: 'Sự kiện báo CHRE tự restart:', o: ['RESET', 'RESTARTED', 'REBOOT', 'CRASHED'], a: 1, e: 'Gửi sau khi khởi tạo lại.' },
    { q: 'API CHRE định nghĩa bằng:', o: ['Java', 'C99 header', 'Rust', 'Python'], a: 1, e: 'Cài tham chiếu dùng C++11 hạn chế.' },
    { q: 'Tính năng KHÔNG bắt buộc:', o: ['Timer', 'Logging', 'Wi-Fi', 'Messaging tới AP'], a: 2, e: 'Wi-Fi là tuỳ chọn.' },
    { q: 'Điều KHÔNG được dùng trong nanoapp:', o: ['Hàm chuỗi cơ bản', 'Exception C++', 'Hàm toán cơ bản', 'Timer'], a: 1, e: 'Cùng RTTI, STL, cấp phát động.' },
    { q: 'Thư mục mã tham chiếu CHRE:', o: ['system/chre', 'frameworks/chre', 'hardware/chre', 'vendor/chre'], a: 0, e: 'Hệ build GNU Make.' }
  ],
  match: [
    ['nanoapp', 'Ứng dụng native nhỏ'],
    ['nanoappHandleEvent', 'Điểm vào xử lý sự kiện'],
    ['PAL', 'Lớp trừu tượng nền tảng'],
    ['Context Hub HAL', 'Giao diện Android ↔ CHRE'],
    ['ContextHubManager', 'API system cho client Android'],
    ['RESTARTED', 'Sự kiện CHRE khởi động lại'],
    ['system/chre', 'Mã tham chiếu']
  ]
});
