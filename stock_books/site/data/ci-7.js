// Android Connectivity – Chương 7: Các mục kết nối khác.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 7,
  title: 'Companion device, Connectivity Diagnostics, signal strength, chọn mạng',
  intro: 'Bốn mục độc lập còn lại của menu Connectivity: <b>Companion device profiles</b> (một lần xin quyền cho cả nhóm thiết bị), <b>Connectivity Diagnostics API</b> (chẩn đoán cho app sở hữu mạng), <b>Signal strength reporting</b> (cường độ tín hiệu và ngưỡng) và <b>Network selection</b> (xếp hạng mạng đồng thời bằng <code>NetworkScore</code>).',
  sections: [
    { icon: '⌚', title: 'Companion device profiles (Android 12+)', blocks: [
      { t: 'p', x: 'Cho companion app yêu cầu một <b>bộ quyền định sẵn</b> theo loại thiết bị (ví dụ smartwatch) bằng <b>một hộp thoại đồng ý duy nhất</b> trên điện thoại thay vì nhiều hộp thoại, giúp tăng tỷ lệ chấp thuận. Mỗi profile tương ứng một <b>role</b> Android.' },
      { t: 'list', items: [
        '<b>Điều kiện</b>: app quản lý thiết bị companion và có tính năng/gọi API cần <b>mọi quyền</b> trong profile.',
        '<b>Cấp và thu hồi</b>: khi người dùng chấp nhận association request, CDM gán role của profile cho app (cấp mọi quyền). CDM thu hồi khi người dùng xoá dữ liệu gói hoặc xoá hết thiết bị khỏi app — chỉ khi app không ở foreground và không chạy foreground service. Người dùng có thể thu hồi từng quyền; association còn nhưng một số tính năng ngừng chạy, app phải xin quyền thông thường.',
        '<b>Triển khai</b>: <code>AssociationRequest.Builder#setDeviceProfile</code> với hằng như <code>DEVICE_PROFILE_WATCH</code>. Nhà sản xuất có thể bỏ hộp thoại đồng ý cho app companion được chứng nhận bằng cách liệt kê tên gói và chứng chỉ SHA-256 trong hai mảng song song <code>config_companionDevicePackages</code> và <code>config_companionDeviceCerts</code> (lấy chứng chỉ bằng <code>keytool -printcert</code>). Nếu yêu cầu cùng association lặp lại trong thời gian ngắn, hệ thống quay về hiển thị prompt. Kiểm chứng bằng CTS <code>cts/tests/tests/companion/</code>.'
      ] },
      { t: 'table', head: ['Profile', 'Quyền / yêu cầu'], rows: [
        ['<b>Watch</b> (Android 12, <code>COMPANION_DEVICE_WATCH</code>)', 'Thông báo, điện thoại, SMS, danh bạ, lịch, thiết bị lân cận, cấp phát eSIM, quản lý cuộc gọi đang diễn ra; <code>POST_NOTIFICATIONS</code> thêm ở Android 15. Cần kết nối Bluetooth và/hoặc Wi-Fi và màn hình; quyền điện thoại cần micro và loa hỗ trợ thoại'],
        ['<b>Glasses</b> (Android 14, <code>COMPANION_DEVICE_GLASSES</code>)', 'Thông báo, điện thoại, SMS, danh bạ, micro, thiết bị lân cận, quản lý cuộc gọi; không có lịch và eSIM. Yêu cầu tương tự (màn hình, Bluetooth/Wi-Fi)']
      ] },
      { t: 'widget', name: 'companion-profile', title: 'Profile nào có quyền này?' }
    ] },
    { icon: '🩺', title: 'Connectivity Diagnostics API', blocks: [
      { t: 'p', x: 'Cho app sở hữu hoặc quản lý mạng nhận thông tin chẩn đoán kết nối từ framework. Đối tượng đủ điều kiện: carrier app có carrier privileges cho subscription, app Wi-Fi suggestion sở hữu mạng gợi ý, app VPN quản lý mạng mà VPN dùng (chỉ khi là VPN đang hoạt động). “Apps won’t receive notifications for networks that aren’t owned or managed by the app.”' },
      { t: 'table', head: ['Callback', 'Khi nào / dữ liệu'], rows: [
        ['<b>Network validation</b>', 'Hệ thống đánh giá xong mạng; <code>ConnectivityReport</code>: network, timestamp, <code>LinkProperties</code>, <code>NetworkCapabilities</code>, <code>PersistableBundle</code> thông tin kiểm tra'],
        ['<b>Data stall suspected</b>', 'Nghi ngờ data stall (gói IP không chảy đúng); <code>DataStallReport</code>: network, timestamp, phương pháp phát hiện, link properties, capabilities, chi tiết'],
        ['<b>Connectivity reported</b>', 'App báo kết nối qua <code>ConnectivityManager#reportNetworkConnectivity</code>; chia sẻ network và việc app tin là có kết nối']
      ] },
      { t: 'list', items: [
        '<b>Quyền</b>: app đăng ký callback cần <code>ACCESS_FINE_LOCATION</code> (kết nối mạng đặc thù vị trí có thể lộ vị trí chính xác).',
        '<b>Triển khai</b>: lấy <code>ConnectivityDiagnosticsManager</code>, subclass <code>ConnectivityDiagnosticsCallback</code> (phương thức không override thì không làm gì), đăng ký với <code>NetworkRequest</code> (ví dụ lọc cellular), <code>Executor</code> và callback; huỷ đăng ký phải dùng <b>cùng UID</b>. Kiểm chứng: CTS <code>ConnectivityDiagnosticsManagerTest</code>.'
      ] }
    ] },
    { icon: '📶', title: 'Signal strength reporting (Android 11+)', blocks: [
      { t: 'p', x: 'Framework telephony báo cường độ tín hiệu di động bằng nhiều loại phép đo; giá trị điều khiển số vạch sóng và cho phép tuỳ biến tiêu chí modem báo thay đổi — giảm báo cáo thừa của modem → giảm điện năng. Từ Android 11 có thể tuỳ biến nhiều loại phép đo cho 4G LTE và 5G NR.' },
      { t: 'table', head: ['RAN', 'Phép đo'], rows: [
        ['NGRAN (5G NR)', 'SSRSRP, SSRSQ, SSSINR'],
        ['EUTRAN (4G LTE)', 'RSRP, RSRQ, RSSNR']
      ] },
      { t: 'list', items: [
        '<b>Ba chức năng</b>: tiêu chí báo cáo (điều kiện kích hoạt modem báo), <b>ngưỡng</b> (danh sách bốn số nguyên để gợi ý mức tín hiệu và tiêu chí), và <b>mức tín hiệu</b> gồm năm mức: NONE, POOR, MODERATE, GOOD, GREAT.',
        '<b>Modem/HAL</b>: cài <code>setSignalStrengthReportingCriteria_1_5</code> của <code>IRadio</code> để đặt tiêu chí theo RAN; hỗ trợ nhiều loại phép đo mỗi RAN. Nếu RAN không có tiêu chí nào bật, framework tự định nghĩa; bật một loại cho một RAN sẽ tắt các loại khác của RAN đó.',
        '<b>Ngưỡng (CarrierConfig)</b>: <code>KEY_5G_NR_SSRSRP_THRESHOLDS_INT_ARRAY</code>, <code>KEY_5G_NR_SSRSRQ_THRESHOLDS_INT_ARRAY</code>, <code>KEY_5G_NR_SSSINR_THRESHOLDS_INT_ARRAY</code>, <code>KEY_LTE_RSRQ_THRESHOLDS_INT_ARRAY</code>, <code>KEY_LTE_RSSNR_THRESHOLDS_INT_ARRAY</code>.',
        '<b>Chọn phép đo cho thanh sóng</b>: <code>KEY_PARAMETERS_USED_FOR_LTE_SIGNAL_BAR_INT</code>, <code>KEY_PARAMETERS_USE_FOR_5G_NR_SIGNAL_BAR_INT</code>.',
        '<b>Kiểm chứng</b>: CTS <code>testGetConfig</code> trong <code>CarrierConfigManagerTest</code>; VTS <code>setSignalStrengthReportingCriteria_1_5_*</code>.'
      ] }
    ] },
    { icon: '🥇', title: 'Network selection (NetworkScore)', blocks: [
      { t: 'p', x: 'Trang “Network selection” mô tả cách Android chọn giữa các mạng khả dụng đồng thời, chủ yếu qua lớp <code>NetworkScore</code> (không phải chọn nhà mạng PLMN).' },
      { t: 'table', head: ['Phiên bản', 'Cơ chế'], rows: [
        ['<b>Android 12+</b>', 'Cờ chính sách trong <code>NetworkScore</code>: <code>POLICY_TRANSPORT_PRIMARY</code> (ưu tiên mạng khi có nhiều mạng cùng transport — ví dụ dual-SIM), <code>POLICY_EXITING</code> (mạng sắp ngắt, tránh khi còn lựa chọn khác), <code>KEEP_CONNECTED_FOR_HANDOVER</code> (giữ kết nối mạng dự kiến mà chưa làm mạng chính tới khi đánh giá hiệu năng)'],
        ['<b>Android 11 trở xuống</b>', 'Mỗi mạng có điểm số nguyên từ agent, điều chỉnh bởi thưởng/phạt (validation, VPN); điểm cao nhất thoả yêu cầu thắng; điểm bằng nhau cho hành vi không xác định']
      ] },
      { t: 'list', items: [
        'Logic chính sách nằm ở <code>NetworkRanker</code> trong Connectivity module nên nhà sản xuất <b>không tuỳ biến trực tiếp</b>, chỉ truyền thông tin bằng cờ. Điểm số nguyên cũ chỉ giữ cho logging và chống hồi quy; mã Android 11 có thể không build được trên Android 12. <code>NetworkFactory</code> chỉ nhận request khớp bộ lọc điểm đã khai báo, trừ khi đăng ký bằng <code>registerIgnoringScore</code>.',
        'Ví dụ: <code>TelephonyNetworkAgent</code> (mạng di động), <code>ClientModeImpl.WifiNetworkAgent</code> (Wi-Fi). Kiểm chứng: CTS <code>NetworkScoreTest</code> và unit test <code>NetworkRanker</code>; cài sai có thể lộ mạng bất ngờ cho app qua <code>NetworkCallback</code> hoặc hao pin khi agent kết nối/ngắt lặp lại.'
      ] }
    ] }
  ],
  summary: [
    'Companion device profiles: một prompt cấp cả bộ quyền theo role (watch Android 12, glasses Android 14).',
    'Connectivity Diagnostics API: 3 callback (validation, data stall, connectivity reported) cho app sở hữu/quản lý mạng, cần ACCESS_FINE_LOCATION.',
    'Signal strength: ngưỡng và phép đo tuỳ biến qua CarrierConfig, modem cài setSignalStrengthReportingCriteria_1_5.',
    'Network selection Android 12+: cờ NetworkScore (POLICY_TRANSPORT_PRIMARY, POLICY_EXITING, KEEP_CONNECTED_FOR_HANDOVER) thay điểm số nguyên.'
  ],
  cards: [
    ['Lợi ích của companion device profile?', 'Một hộp thoại cấp cả bộ quyền thay vì nhiều prompt.'],
    ['Watch profile từ Android mấy?', 'Android 12.'],
    ['Glasses profile từ Android mấy?', 'Android 14.'],
    ['Hằng cho watch profile?', 'COMPANION_DEVICE_WATCH / DEVICE_PROFILE_WATCH.'],
    ['Bỏ hộp thoại cho app của OEM?', 'config_companionDevicePackages + config_companionDeviceCerts (SHA-256).'],
    ['Ai dùng Connectivity Diagnostics API?', 'Carrier app, Wi-Fi suggestion app, VPN app đang hoạt động.'],
    ['Ba callback chẩn đoán?', 'Network validation, data stall suspected, connectivity reported.'],
    ['Quyền cần cho diagnostics callback?', 'ACCESS_FINE_LOCATION.'],
    ['Năm mức tín hiệu?', 'NONE, POOR, MODERATE, GOOD, GREAT.'],
    ['Phép đo LTE?', 'RSRP, RSRQ, RSSNR.'],
    ['Phép đo 5G NR?', 'SSRSRP, SSRSQ, SSSINR.'],
    ['HAL đặt tiêu chí báo tín hiệu?', 'IRadio.setSignalStrengthReportingCriteria_1_5.'],
    ['POLICY_EXITING?', 'Mạng sắp ngắt — tránh khi còn mạng khác.'],
    ['Lớp xếp hạng mạng?', 'NetworkRanker trong Connectivity module.']
  ],
  quiz: [
    { q: 'CDM thu hồi profile khi:', o: ['Xoá dữ liệu gói của app', 'Mở Bluetooth', 'Sạc pin', 'Đổi theme'], a: 0, e: 'Và app không ở foreground/FGS.' },
    { q: 'Glasses profile KHÔNG gồm:', o: ['Micro', 'Lịch và eSIM provisioning', 'SMS', 'Thông báo'], a: 1, e: 'Khác watch profile.' },
    { q: 'Mảng cấu hình chứng chỉ app companion OEM:', o: ['config_companionDeviceCerts', 'config_trustedApps', 'config_cdmKeys', 'config_signing'], a: 0, e: 'Cùng config_companionDevicePackages.' },
    { q: 'Callback nào báo nghi ngờ gói IP không chảy?', o: ['onNetworkConnectivityReported', 'onDataStallSuspected', 'onConnectivityReportAvailable', 'onLost'], a: 1, e: 'DataStallReport.' },
    { q: 'Huỷ đăng ký diagnostics callback phải dùng:', o: ['Cùng UID', 'Cùng PID', 'Quyền root', 'Mạng khác'], a: 0, e: 'Theo tài liệu.' },
    { q: 'Mức tín hiệu thấp nhất:', o: ['POOR', 'NONE', 'MODERATE', 'GOOD'], a: 1, e: 'Năm mức: NONE → GREAT.' },
    { q: 'Từ Android 11 có thể tuỳ biến phép đo cho:', o: ['2G', '3G', '4G LTE và 5G NR', 'Chỉ Wi-Fi'], a: 2, e: 'Giảm báo cáo thừa.' },
    { q: 'Network selection Android 12 dùng:', o: ['Điểm số nguyên', 'Cờ NetworkScore', 'Chỉ RSSI', 'Ngẫu nhiên'], a: 1, e: 'Điểm số nguyên chỉ để logging.' },
    { q: 'Nhà sản xuất tuỳ biến NetworkRanker:', o: ['Trực tiếp', 'Không; chỉ truyền cờ', 'Qua adb', 'Qua CarrierConfig'], a: 1, e: 'Nằm trong Connectivity module.' },
    { q: 'Test CTS cho NetworkScore:', o: ['NetworkScoreTest', 'ScoreTest', 'RankerCts', 'NetTest'], a: 0, e: 'Cùng unit test NetworkRanker.' }
  ],
  match: [
    ['CompanionDeviceManager', 'Quản lý association'],
    ['ConnectivityDiagnosticsManager', 'Chẩn đoán cho app sở hữu mạng'],
    ['DataStallReport', 'Báo nghi ngờ stall'],
    ['SSRSRP', 'Phép đo 5G NR'],
    ['RSSNR', 'Phép đo LTE'],
    ['NetworkScore', 'Cờ chính sách xếp hạng mạng'],
    ['NetworkRanker', 'Logic chọn mạng']
  ]
});
