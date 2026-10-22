// Android Connectivity – Chương 5: Time và Ultra-wideband.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 5,
  title: 'Time (thời gian, múi giờ) và Ultra-wideband',
  intro: 'Android theo dõi hai trạng thái độc lập: <b>thời gian epoch Unix</b> và <b>múi giờ</b>. Phần đầu chương nói về <code>time_detector</code>, <code>time_zone_detector</code>, nguồn (origin) và ưu tiên, phát hiện múi giờ bằng vị trí; phần sau nói về <b>Ultra-wideband (UWB)</b> — stack, HAL AIDL dựa trên FiRa UCI và cấu hình mã quốc gia.',
  sections: [
    { icon: '🕒', title: 'Phát hiện thời gian tự động', blocks: [
      { t: 'p', x: 'Epoch time tự chạy và được sửa khi phát hiện sai (ví dụ sau khi mất điện). Múi giờ biến epoch thành giờ địa phương dựa trên cơ sở dữ liệu IANA tz có trên mọi thiết bị. Người dùng điều khiển hai trạng thái riêng biệt.' },
      { t: 'key', x: 'Dịch vụ <code>time_detector</code> (Android 10+) luôn ở trạng thái <b>certain</b> hoặc <b>uncertain</b> dựa trên <i>time suggestion</i> từ các <i>origin</i>. Certain: ghi đè đồng hồ nếu đề xuất khác. Uncertain: không đụng đồng hồ (chưa có đề xuất hoặc đề xuất quá cũ vì đồng hồ elapsed-realtime được giả định trôi theo thời gian dài). Dịch vụ có trạng thái: giữ đề xuất mới nhất của từng origin và đánh giá lại khi có đề xuất mới.' },
      { t: 'table', head: ['Origin mặc định', 'Mô tả'], rows: [
        ['<b>Network</b>', 'Máy chủ thời gian NTP'],
        ['<b>Telephony</b>', 'Tín hiệu NITZ từ mạng di động'],
        ['<b>GNSS</b>', 'Thời gian từ GPS (Android 12+, không bật mặc định)'],
        ['<b>External</b>', 'Hook chung cho nguồn do nhà sản xuất cung cấp (Android 12+, không bật mặc định)']
      ] },
      { t: 'list', items: [
        '<b>Khó khăn</b>: Unix time không đồng nhất UTC (giây nhuận); origin có thể không có hoặc sai; độ trễ truyền/lập lịch thêm sai số. Network và telephony cần kết nối bên ngoài.',
        '<b>Giới hạn hợp lệ</b>: Android 12 — cận dưới theo timestamp build (thời gian hợp lệ không thể trước system image); Android 14 — cận trên cho tiến trình 32-bit chống Y2038.',
        '<b>Ưu tiên origin</b>: từ Android 12 đặt bằng <code>config_autoTimeSourcesPriority</code> trong <code>core/res/res/values/config.xml</code> — mặc định <b>network trên telephony</b> (NTP chính xác và đáng tin hơn NITZ; NITZ là dự phòng khi không có NTP, chạy được khi có SIM mà không có internet). Android 11 trở xuống: telephony hard-code lên trước. Đây là cài đặt build-time; kiểu nguồn định nghĩa trong <code>TimeDetectorStrategy.java</code>.',
        'Đề xuất ưu tiên cao có thể bị bỏ qua nếu quá cũ hoặc không hợp lệ; thiết bị không đổi đồng hồ nếu đề xuất tốt nhất đã khớp trong vài giây (tránh làm app lắng nghe broadcast đổi giờ phải làm việc thừa).',
        '<b>Người dùng</b>: bật/tắt tự động trong System > Date and Time; tắt thì nhập giờ địa phương và thiết bị suy ra epoch từ múi giờ hiện tại.',
        '<b>Kiểm thử NITZ fallback</b>: tắt mobile data, Wi-Fi, radio; đặt đồng hồ sai trong tương lai; reboot; khôi phục kết nối; xem <code>adb shell dumpsys time_detector</code> — lịch sử telephony có dữ liệu, lịch sử network trống.'
      ] },
      { t: 'widget', name: 'time-priority', title: 'Nguồn thời gian nào được chọn?' }
    ] },
    { icon: '🌍', title: 'Phát hiện múi giờ tự động', blocks: [
      { t: 'p', x: 'Dịch vụ <code>time_zone_detector</code> (Android 11+). Đề xuất đến từ một <i>thuật toán</i> và có dạng: uncertain; certain một zone ID; certain không có zone ID (ví dụ vùng biển quốc tế); certain nhiều zone ứng viên (nếu zone hiện tại nằm trong ứng viên thì giữ nguyên — ổn định gần biên giới hoặc sau khi chọn thủ công).' },
      { t: 'table', head: ['Thuật toán', 'Đặc điểm'], rows: [
        ['<b>Telephony</b>', 'Thụ động, tiết kiệm điện; phụ thuộc SIM và chất lượng NITZ; dữ liệu qua APEX Time Zone Data có thể cập nhật'],
        ['<b>Location</b> (Android 12+)', 'Qua <code>location_time_zone_manager</code> cấp đề xuất cho <code>time_zone_detector</code>; tuỳ chọn, phụ thuộc location provider/plug-in của nhà sản xuất; cũng dùng được cho thiết bị không có telephony']
      ] },
      { t: 'list', items: [
        'Chỉ thuật toán đang dùng mới quyết định zone. <b>Telephony fallback</b> (Android 13): telephony tạm thay khi location không xác định được hoặc chậm; Android 14 thêm <b>LTZP status APIs</b> để kích hoạt fallback khi location không chắc chắn do môi trường.',
        '<b>Cài đặt</b>: “Set time zone automatically” (toàn hệ thống), “Use location to set time zone” (theo người dùng, chỉ hiện khi hỗ trợ location detection), “Use location” (vị trí chung). Tự động bật + vị trí tắt → telephony; vị trí bật + công tắc zone bật → location. Android 14 thiết bị chỉ có location: ẩn công tắc, coi như đã bật.',
        '<b>Riêng tư</b>: người dùng tắt được thuật toán location; telephony thụ động không tốn riêng tư; location chủ động có thể gửi toạ độ qua mạng nhưng AOSP không xử lý vị trí trực tiếp (plug-in nhà sản xuất làm).',
        '<b>Cấu hình</b>: <code>config_supportTelephonyTimeZoneFallback</code> (mặc định true); <code>def_auto_time_zone</code> trong SettingsProvider; loại <code>auto_time_zone</code> khỏi backup bằng <code>blocked_settings.xml</code>.',
        '<b>Gỡ lỗi</b>: <code>adb shell cmd time_detector dump</code>, <code>adb shell cmd time_zone_detector dump</code>; <code>device_config set_sync_disabled_for_tests persistent</code> khi test dài (khôi phục cần reboot). Cú pháp/đầu ra có thể đổi giữa các bản.'
      ] },
      { t: 'h3', x: 'Location time zone detection' },
      { t: 'list', items: [
        'Thành phần: logic trong system server; tuỳ chọn Settings chọn telephony hay location (Android 12+; từ Android 14 chỉ hiện trên thiết bị hỗ trợ telephony); giao diện plug-in <b>Location Time Zone Provider (LTZP)</b> — tối đa hai; LTZP tham chiếu; công cụ host dựng dataset từ OpenStreetMap.',
        '<code>location_time_zone_manager</code> chỉ quản lý vòng đời LTZP, không chứa logic phát hiện. <b>Primary LTZP</b> chạy khi người dùng cho phép; <b>Secondary LTZP</b> chỉ chạy nếu primary báo uncertain, thất bại vĩnh viễn hoặc hết thời gian khởi tạo, và dừng khi primary đưa ra đề xuất certain. Đổi thuật toán hoặc người dùng thêm vài giây trễ.',
        '<b>Riêng tư</b>: không cần hộp thoại quyền runtime; đề xuất theo vị trí không chia sẻ giữa người dùng; <b>vị trí thiết bị không được chuyển cho dịch vụ nền tảng</b> — LTZP chỉ gửi time zone ID.',
        '<b>Cấu hình</b>: <code>config_enableGeolocationTimeZoneDetection</code> (mặc định true), <code>config_enablePrimaryLocationTimeZoneProvider</code> và <code>...Secondary...</code> (mặc định false), các khoá <code>…PackageName</code>. AOSP <b>không kèm LTZP</b> nên phải bật ít nhất một mới hiện trong Settings.',
        '<b>Triển khai</b>: chạy LTZP trong tiến trình sống lâu (tốt nhất system server); với thành phần module, cập nhật dữ liệu địa lý LTZP phải đồng bộ với <code>com.android.tzdata</code>. LTZP tham chiếu ở <code>packages/modules/GeoTZ</code>. Gỡ lỗi: <code>adb shell cmd location_time_zone_manager dump</code>.'
      ] },
      { t: 'tip', x: '<b>Chính sách cập nhật múi giờ</b>: Android lấy từ IANA Time Zone Database cùng vùng địa lý và bản dịch từ ICU. Đề nghị với chính phủ: thông báo trước <b>ít nhất 6 tháng</b>, đăng trên website chính phủ đáng tin và gửi link tới mailing list IANA, nêu rõ quy tắc, vùng bị ảnh hưởng và thời điểm hiệu lực.' }
    ] },
    { icon: '📡', title: 'Ultra-wideband (UWB)', blocks: [
      { t: 'p', x: 'Từ Android 13, Android có framework UWB mặc định cho phép đo khoảng cách (ranging) an toàn, chính xác giữa các thiết bị hỗ trợ. Stack AOSP UWB là mainline module tuỳ chọn <code>com.google.android.uwb</code>.' },
      { t: 'table', head: ['Phần', 'Thành phần / vị trí'], rows: [
        ['<b>AOSP stack (module)</b>', 'Platform API (<code>packages/modules/Uwb/framework</code>); support library (<code>.../service/support_lib</code>); <code>UwbService</code> và <b>CSML</b> (Common Service Management Layer, do FiRa Consortium định nghĩa) trong <code>.../service</code>; lớp UCI native bằng Rust (<code>external/uwb</code>); UWB HAL dựa trên FiRa UCI (<code>hardware/interfaces/uwb</code>)'],
        ['<b>Vendor stack</b>', 'Chip vendor cung cấp cài đặt HAL, driver UWB và phần cứng']
      ] },
      { t: 'list', items: [
        '<b>API</b>: system app dùng system API <code>android.uwb.UwbManager</code> (phải qua support library); app bên thứ ba dùng Jetpack <code>androidx.core.uwb</code>. Kiểm chứng bằng UWB CTS trong <code>/cts/tests/uwb</code>.',
        '<b>HAL</b>: dùng giao diện FiRa <b>UCI</b>, định nghĩa bằng AIDL ổn định gói <code>android.hardware.uwb</code>, truyền thông điệp UCI như đường ống byte mờ. Mọi vendor UWB Android phải hỗ trợ mọi thông điệp FiRa định nghĩa; framework chạy với phiên bản UCI vendor cài và có thể áp dụng các change request (CR) đã duyệt từ bản nháp FiRa.',
        '<b>IUwbChip</b>: <code>getName()</code>, <code>open()</code>, <code>close()</code>, <code>coreInit()</code>, <code>sessionInit()</code>, <code>getSupportedAndroidUciVersion()</code>, <code>sendUciMessage()</code>. <b>IUwbClientCallback</b>: <code>onUciMessage()</code>, <code>onHalEvent()</code>.',
        '<b>Mã quốc gia</b>: lúc khởi tạo framework gửi lệnh vendor <code>ANDROID_SET_COUNTRY_CODE</code>. Thứ tự nguồn (dừng ở nguồn đầu tiên có mã): (1) override bắt buộc qua adb; (2) mã telephony hiện tại; (3) mã Wi-Fi (802.11ad); (4) mã telephony biết gần nhất; (5) vị trí từ fused location provider; (6) mặc định OEM. Không có thì gửi mã unknown <code>00</code> và báo stack <code>DISABLED</code>; có mã hợp lệ thì chuyển <code>READY</code>; quy định cấm UWB → controller trả regulation-off và stack bị tắt; sang nước mới có thể đổi mã và trạng thái.',
        '<b>Vendor extension</b> (gói <code>android.hardware.uwb.fira_android</code>): <code>ANDROID_GET_POWER_STATS</code> (OID 0x0), <code>ANDROID_SET_COUNTRY_CODE</code> (0x1), <code>ANDROID_RANGE_DIAGNOSTICS</code> (0x2); GID 0xE và 0xF dành cho OEM. Vendor TLV cho session app config (số lần interleaving antenna cho AoA, azimuth/elevation, diagnostics) và capability info (cờ hỗ trợ power stats, AoA interleaving, RSSI, diagnostics; min ranging interval, min slot duration, số session tối đa, bitmask kênh AoA).',
        '<b>Mã trạng thái/lý do</b>: status vendor trong <code>SESSION_START_RSP</code> (xung đột session CCC/FiRa, tắt do quy định); reason code trong <code>SESSION_STATUS_NTF</code> (cấu hình kênh AoA sai, xung đột, tắt do quy định).'
      ] },
      { t: 'tip', x: 'Mục UWB/Ranging còn có: đặc tả thông điệp out-of-band (OOB v1/v2/v3) và yêu cầu hiệu chuẩn presence — chưa đi sâu ở đây.' },
      { t: 'widget', name: 'uwb-country', title: 'Mã quốc gia UWB được lấy từ đâu?' }
    ] }
  ],
  summary: [
    'time_detector (Android 10+) và time_zone_detector (Android 11+); origin: network, telephony, GNSS, external; mặc định NTP ưu tiên hơn NITZ từ Android 12.',
    'Múi giờ: telephony hoặc location (Android 12+); LTZP primary/secondary; telephony fallback (Android 13); vị trí không đưa cho nền tảng.',
    'Thông báo thay đổi quy tắc múi giờ cho Android ít nhất 6 tháng trước.',
    'UWB (Android 13+): module com.google.android.uwb, HAL AIDL dựa trên FiRa UCI, mã quốc gia xác định theo thứ tự ưu tiên 6 nguồn.'
  ],
  cards: [
    ['Hai trạng thái thời gian độc lập?', 'Epoch Unix time và múi giờ.'],
    ['time_detector từ Android mấy?', 'Android 10.'],
    ['time_zone_detector từ Android mấy?', 'Android 11.'],
    ['Origin mặc định cho time?', 'Network (NTP) và Telephony (NITZ); GNSS, External không bật mặc định.'],
    ['Ưu tiên mặc định từ Android 12?', 'Network trên telephony.'],
    ['Khoá cấu hình ưu tiên?', 'config_autoTimeSourcesPriority.'],
    ['Cận dưới thời gian hợp lệ (Android 12)?', 'Timestamp build của system image.'],
    ['Cận trên (Android 14)?', 'Chống Y2038 cho tiến trình 32-bit.'],
    ['Thuật toán múi giờ?', 'Telephony và Location (Android 12+).'],
    ['LTZP primary vs secondary?', 'Primary chạy khi cho phép; secondary chạy khi primary uncertain/lỗi/timeout.'],
    ['Vị trí có được đưa cho nền tảng?', 'Không; LTZP chỉ gửi time zone ID.'],
    ['AOSP có LTZP mặc định?', 'Không; phải bật ít nhất một.'],
    ['Thông báo đổi quy tắc múi giờ?', 'Ít nhất 6 tháng trước.'],
    ['UWB mainline module?', 'com.google.android.uwb (Android 13+).'],
    ['HAL UWB dựa trên?', 'FiRa UCI, AIDL android.hardware.uwb.'],
    ['Mã quốc gia khi không tìm thấy?', '00 và stack DISABLED.']
  ],
  quiz: [
    { q: 'Ưu tiên mặc định từ Android 12:', o: ['Telephony > Network', 'Network > Telephony', 'GNSS > Network', 'External > Telephony'], a: 1, e: 'NTP chính xác hơn NITZ.' },
    { q: 'time_detector uncertain thì:', o: ['Ghi đè đồng hồ', 'Không đụng đồng hồ', 'Reboot', 'Tắt NTP'], a: 1, e: 'Chưa có đề xuất hoặc quá cũ.' },
    { q: 'Cận dưới thời gian (Android 12) lấy từ:', o: ['Ngày release', 'Timestamp build', 'NTP', 'RTC'], a: 1, e: 'Không thể trước system image.' },
    { q: 'Location time zone detection từ:', o: ['Android 10', 'Android 11', 'Android 12', 'Android 14'], a: 2, e: 'Là lựa chọn thay telephony.' },
    { q: 'Số LTZP tối đa:', o: ['1', '2', '3', '4'], a: 1, e: 'Primary và secondary.' },
    { q: 'LTZP gửi gì cho nền tảng?', o: ['Toạ độ', 'Time zone ID', 'Danh bạ', 'IMSI'], a: 1, e: 'Vị trí không đi vào platform.' },
    { q: 'Thông báo thay đổi múi giờ tối thiểu:', o: ['1 tuần', '1 tháng', '6 tháng', '2 năm'], a: 2, e: 'Cần thời gian chuẩn bị bản cập nhật.' },
    { q: 'API UWB cho app bên thứ ba:', o: ['android.uwb.UwbManager', 'androidx.core.uwb', 'android.net.uwb', 'NfcAdapter'], a: 1, e: 'Jetpack; system app dùng UwbManager.' },
    { q: 'Nguồn mã quốc gia UWB ưu tiên đầu:', o: ['OEM default', 'Override bằng adb', 'Vị trí fused', 'Wi-Fi'], a: 1, e: 'Theo thứ tự dừng ở nguồn đầu có mã.' },
    { q: 'GID dành cho OEM trong UWB vendor extension:', o: ['0x0 và 0x1', '0xE và 0xF', '0x2 và 0x3', 'Không có'], a: 1, e: 'Cùng OID Android 0x0–0x2.' }
  ],
  match: [
    ['NITZ', 'Thời gian từ mạng di động'],
    ['NTP', 'Thời gian từ internet'],
    ['LTZP', 'Provider múi giờ theo vị trí'],
    ['com.android.tzdata', 'Dữ liệu múi giờ'],
    ['UCI', 'Giao diện lệnh UWB của FiRa'],
    ['CSML', 'Lớp quản lý dịch vụ chung của FiRa'],
    ['ANDROID_SET_COUNTRY_CODE', 'Đặt mã quốc gia UWB']
  ]
});
