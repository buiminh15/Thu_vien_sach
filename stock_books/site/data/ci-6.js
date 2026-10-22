// Android Connectivity – Chương 6: Wi-Fi.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 6,
  title: 'Wi-Fi: kiến trúc, HAL, MAC randomization, chọn mạng, WPA3',
  intro: 'Framework Wi-Fi mặc định của Android hỗ trợ STA (hạ tầng), hotspot Soft AP, Wi-Fi Direct (P2P), Wi-Fi Aware (NAN) và Wi-Fi RTT. Chương này nói về kiến trúc và <b>Wi-Fi HAL</b> (AIDL), <b>MAC randomization</b>, thuật toán <b>chọn mạng</b> và <b>WPA3 / Enhanced Open</b>.',
  sections: [
    { icon: '🏛️', title: 'Kiến trúc Wi-Fi', blocks: [
      { t: 'p', x: 'Ứng dụng gọi <code>android.net.wifi</code> API; lời gọi qua Binder IPC vào các Wi-Fi service. Tính năng hỗ trợ: infrastructure STA, Soft AP (tethered và local-only), Wi-Fi Direct (P2P), Wi-Fi Aware (NAN), Wi-Fi RTT (IEEE 802.11mc FTM).' },
      { t: 'table', head: ['Thành phần', 'Vai trò / vị trí'], rows: [
        ['<b>Wi-Fi Service</b>', 'Điều khiển chính cho STA và AP; ở <code>packages/modules/Wifi/service/</code> (chạy trong System Service)'],
        ['<b>Wi-Fi P2P Service</b>', 'Quản lý Wi-Fi Direct'],
        ['<b>Wi-Fi Aware Service</b>', 'Quản lý Wi-Fi Aware'],
        ['<b>Wi-Fi RTT Service</b>', 'Quản lý 802.11mc FTM'],
        ['<b>wificond</b>', 'Tiến trình riêng ở <code>system/connectivity/wificond</code>, nói chuyện với driver Wi-Fi bằng lệnh <b>nl80211</b> chuẩn — cầu nối framework ↔ driver kernel'],
        ['<b>Lớp HAL</b>', 'Vendor HAL, Supplicant HAL, Hostapd HAL; Wi-Fi service giao tiếp với HAL qua AIDL']
      ] }
    ] },
    { icon: '🔌', title: 'Wi-Fi HAL', blocks: [
      { t: 'p', x: 'Ba bề mặt HAL. Từ <b>Android 14</b> cả ba là gói AIDL ổn định; trước đó là HIDL.' },
      { t: 'table', head: ['HAL', 'Chi tiết'], rows: [
        ['<b>Vendor HAL</b>', 'Lệnh Wi-Fi riêng Android. <b>Tuỳ chọn</b> cho chế độ STA và SAP nhưng <b>bắt buộc</b> cho Wi-Fi Aware và Wi-Fi RTT. Android 14+: AIDL; Android 13 trở xuống: HIDL. Trước Android 8.0 là “legacy HAL”; bản AIDL/HIDL mặc định bọc legacy HAL qua shim'],
        ['<b>Supplicant HAL</b>', 'Giao diện tới daemon <code>wpa_supplicant</code>; AIDL từ Android 13 (trước đó HIDL); mã tham chiếu AIDL ở thư mục con <code>aidl</code> của wpa_supplicant'],
        ['<b>Hostapd HAL</b>', 'Giao diện tới daemon <code>hostapd</code>; cùng mô hình: AIDL từ Android 13, HIDL trước đó']
      ] },
      { t: 'h3', x: 'Đồng thời nhiều interface' },
      { t: 'list', items: [
        'HAL định nghĩa các tổ hợp interface đồng thời và lộ cho framework; định dạng đặc tả ở <code>IWifiChip.aidl</code> (và bản tương đương HAL cũ). AIDL HAL (Android 14+) và Wi-Fi HAL 1.6 (Android 13) có thể khai báo <b>bridged AP</b> (dual-band đồng thời) như một mục tổ hợp tường minh.',
        'Cấu hình qua cờ build <code>WIFI_HAL_INTERFACE_COMBINATIONS</code> trong <code>BoardConfig-common.mk</code>. Ví dụ: hai STA + một interface là NAN hoặc P2P (không cả hai); hoặc một STA với một AP hay bridged AP và không interface nào khác.',
        'HAL tham chiếu còn có cấu hình định sẵn cho STA/AP, STA/STA và Wi-Fi Aware bật qua cờ build legacy.'
      ] },
      { t: 'widget', name: 'wifi-hal-version', title: 'HAL Wi-Fi dùng ngôn ngữ nào?' }
    ] },
    { icon: '🎭', title: 'MAC randomization', blocks: [
      { t: 'p', x: 'Thiết bị kết nối Wi-Fi bằng MAC ngẫu nhiên thay vì MAC gốc toàn cầu duy nhất (MAC gửi không mã hoá nên có thể bị dùng để theo dõi). Địa chỉ ngẫu nhiên đặt bit <i>locally administered</i> = 1, bit <i>unicast</i> = 0, 46 bit còn lại ngẫu nhiên. Android 10+ <b>bật mặc định</b>; người dùng tắt cho từng mạng trong Network details (khi đó dùng MAC gốc).' },
      { t: 'table', head: ['Loại', 'Hành vi'], rows: [
        ['<b>Persistent</b> (mặc định)', 'Địa chỉ suy ra từ tham số profile mạng (SSID, loại bảo mật, hoặc FQDN với Passpoint); <b>không đổi cho tới factory reset</b>; quên rồi thêm lại mạng không tạo địa chỉ mới; hỗ trợ tính năng cần định danh ổn định (bỏ qua trang đăng nhập, kiểm soát của phụ huynh). Android 10–11: áp dụng cho mọi mạng khi bật'],
        ['<b>Non-persistent</b> (Android 12+ cho một số mạng)', 'Dùng khi app network suggestion yêu cầu qua <code>WifiNetworkSuggestion.Builder#setMacRandomizationSetting</code>, hoặc mạng mở chưa kích hoạt captive portal và overlay <code>config_wifiAllowEnhancedMacRandomizationOnOpenSsids</code> bật (mặc định tắt). Tạo địa chỉ mới khi bắt đầu kết nối nếu DHCP lease hết hạn và đã > 4 giờ từ lần ngắt gần nhất, hoặc địa chỉ hiện tại tạo > 24 giờ trước. Không ép ngắt kết nối để đổi']
      ] },
      { t: 'list', items: [
        'Settings chỉ bật/tắt randomization cho một mạng, không chọn persistent hay non-persistent.',
        'Android 11+: tuỳ chọn nhà phát triển <i>Wi-Fi non-persistent MAC randomization</i> bật non-persistent cho mọi mạng đã bật randomization.'
      ] }
    ] },
    { icon: '🧭', title: 'Chọn mạng Wi-Fi (Android 12)', blocks: [
      { t: 'list', items: [
        '<b>Quét</b>: màn hình sáng + đang kết nối: bỏ quét nếu link “đủ tốt”, ngược lại quét; sáng + chưa kết nối: quét theo exponential backoff, bắt đầu 20 giây; tắt màn hình + chưa kết nối: firmware chạy <b>PNO</b> (preferred network offload) và đánh thức host khi có mạng ưu tiên.',
        '<b>Lọc và nominator</b>: lọc theo ngưỡng RSSI vào, BSSID bị chặn, mức di chuyển (khi di chuyển nhanh thường loại mạng nhà mạng trừ khi carrier ID nằm trong allowlist). Nominator lấy cấu hình từ mạng đã lưu và mạng gợi ý qua Suggestion API.',
        '<b>Chấm điểm</b> (ThroughputScorer mặc định): điểm gốc từ RSSI (giới hạn −73 dBm với 2,4 GHz, −70 dBm với 5/6 GHz) + thưởng theo throughput (công nghệ, tần số, băng thông, spatial streams) + thưởng cho mạng người dùng/app vừa chọn, mạng hiện tại, bảo mật, unmetered, mạng đã lưu (so với gợi ý) − phạt mạng untrusted và mạng từng không có internet. Thứ tự ưu tiên mặc định: <b>saved unmetered > suggested unmetered > saved metered > suggested metered</b>; lựa chọn gần đây của người dùng có thể vượt qua.',
        '<b>User connect choice</b>: ghi lại các mạng nhìn thấy và cường độ lúc người dùng chọn thủ công; sau đó ưu tiên mạng đó nếu từng có internet và tín hiệu trong biên sai số <code>config_wifiEstimateRssiErrorMarginDb</code>; bền qua reboot.',
        '<b>Đánh giá mạng đang kết nối</b>: Wi-Fi service poll RSSI và link stats mỗi 3 giây (6 giây khi đứng yên tín hiệu mạnh); điểm kết nối tính bằng mô hình ML mặc định (hoặc mô hình thay đổi RSSI cũ). OEM thay bằng <code>WifiConnectedNetworkScorer</code> (đánh dấu usable/unusable, yêu cầu reachability check, blocklist BSSID hiện tại).',
        '<b>Chặn</b>: BSSID — đếm lỗi theo loại (sai mật khẩu, lỗi DHCP, ngắt bất thường), chặn tăng dần theo cấp số nhân tới trần, xoá khi bật/tắt Wi-Fi, reboot, hết hạn, hoặc người dùng chọn. SSID — vô hiệu tạm (ví dụ sau 5 lỗi DHCP) hoặc vĩnh viễn (ví dụ sai mật khẩu ở mạng chưa từng kết nối).',
        '<b>FAQ</b>: mạng bảo mật không phải lúc nào cũng hơn mạng mở (chất lượng kết nối nặng hơn; dữ liệu có mã hoá đầu-cuối); mạng đã lưu hơn mạng gợi ý vì người dùng chủ động thêm. Không nên đổi giá trị bonus mặc định. Với thiết bị dual concurrent STA, make-before-break dùng cùng logic; OEM có thể chỉ định mạng restricted kết nối song song làm link phụ.'
      ] },
      { t: 'widget', name: 'wifi-score', title: 'Mạng nào được chọn?' }
    ] },
    { icon: '🔒', title: 'WPA3 và Wi-Fi Enhanced Open (Android 10+)', blocks: [
      { t: 'table', head: ['Chuẩn', 'Ý nghĩa'], rows: [
        ['<b>WPA3-Personal</b>', 'Thay PSK bằng <b>SAE</b> (Simultaneous Authentication of Equals), chống tấn công từ điển offline, khôi phục khoá, giả mạo thông điệp'],
        ['<b>WPA3-Enterprise</b>', 'Xác thực và mã hoá link-layer mạnh hơn; tuỳ chọn chế độ 192-bit'],
        ['<b>Enhanced Open (OWE)</b>', 'Opportunistic Wireless Encryption: mã hoá lưu lượng trên mạng mở công cộng (quán cà phê, thư viện) nhưng <b>không xác thực</b>']
      ] },
      { t: 'list', items: [
        '<b>Transition mode</b>: WPA2/WPA3 (AP cấp WPA3 cho Android 10+, WPA2 cho thiết bị cũ); WPA2/WPA3-Enterprise; OWE transition (OWE cùng truy cập mở, thiết bị cũ kết nối không mã hoá).',
        '<b>Android 12</b>: thêm <b>Transition Disable</b> (bảo thiết bị bỏ WPA2 và dùng WPA3 trên mạng transition) và WPA3 <b>Hash-to-Element (H2E)</b>. WPA3 và Enhanced Open chỉ chạy ở chế độ client (station).',
        '<b>Yêu cầu</b>: cài Supplicant HAL (AIDL từ Android 13; HIDL cần supplicant HAL ≥ 1.2); patch kernel SAE và OWE trong cfg80211/nl80211; <code>wpa_supplicant</code> build với SAE, SUITEB192, OWE; driver, firmware, chip hỗ trợ WPA3 và OWE.',
        '<b>API</b>: <code>WifiManager.isWpa3SaeSupported</code>, <code>isWpa3SuiteBSupported</code>, <code>isEnhancedOpenSupported</code>; <code>WifiConfiguration</code> thêm key management, cipher cho OWE, WPA3-Personal, WPA3-Enterprise.',
        '<b>Bật tính năng</b> (compile-time trong cấu hình wpa_supplicant): <code>CONFIG_SAE=y</code> (WPA3-Personal), <code>CONFIG_SUITEB=y</code> + <code>CONFIG_SUITEB192=y</code> (WPA3-Enterprise), <code>CONFIG_OWE=y</code> (Enhanced Open). Thiếu thì không thể thêm/quét/kết nối các loại mạng này.',
        '<b>Kiểm chứng</b>: unit test <code>SupplicantStaIfaceHalTest</code>, <code>WifiManagerTest</code>; VTS <code>VtsHalWifiSupplicantV1_3TargetTest</code> (HIDL) hoặc <code>VtsHalWifiSupplicantStaIfaceTargetTest</code> (AIDL).'
      ] },
      { t: 'tip', x: 'Các trang Wi-Fi khác (chưa đi sâu): infrastructure features, test/debug/tune, Android Packet Filter, Carrier Wi-Fi, Custom Tabs captive portal, implement MAC randomization, Passpoint, STA/AP, STA/STA, AP/AP concurrency, TOFU, Wi-Fi Aware, coex channel avoidance, Wi-Fi Direct, Easy Connect, hotspot Soft AP, low-latency mode, PNO scanning, Round Trip Time, Wi-Fi 7.' }
    ] }
  ],
  summary: [
    'Wi-Fi service (packages/modules/Wifi) + wificond (nl80211) + ba HAL: Vendor, Supplicant, Hostapd (AIDL từ Android 14 / 13).',
    'Vendor HAL tuỳ chọn cho STA/SAP, bắt buộc cho Aware/RTT; tổ hợp interface qua WIFI_HAL_INTERFACE_COMBINATIONS.',
    'MAC randomization bật mặc định từ Android 10; persistent theo profile, non-persistent từ Android 12.',
    'Chọn mạng: ThroughputScorer, saved unmetered > suggested unmetered > saved metered > suggested metered; WPA3 (SAE), OWE cần kernel + wpa_supplicant + driver.'
  ],
  cards: [
    ['wificond là gì?', 'Tiến trình giao tiếp driver Wi-Fi bằng nl80211.'],
    ['Wi-Fi service nằm ở đâu?', 'packages/modules/Wifi/service/.'],
    ['Ba bề mặt Wi-Fi HAL?', 'Vendor HAL, Supplicant HAL, Hostapd HAL.'],
    ['Wi-Fi HAL là AIDL từ Android mấy?', 'Android 14 (Supplicant/Hostapd từ Android 13).'],
    ['Vendor HAL bắt buộc cho?', 'Wi-Fi Aware và Wi-Fi RTT.'],
    ['Cờ tổ hợp interface?', 'WIFI_HAL_INTERFACE_COMBINATIONS.'],
    ['Bridged AP?', 'Dual-band simultaneous AP.'],
    ['MAC randomization mặc định từ?', 'Android 10.'],
    ['Persistent randomization?', 'Địa chỉ suy ra từ profile mạng, không đổi tới factory reset.'],
    ['Khi nào tạo MAC mới (non-persistent)?', 'DHCP hết hạn + >4 giờ ngắt, hoặc địa chỉ >24 giờ tuổi.'],
    ['PNO là gì?', 'Preferred network offload — firmware quét khi màn hình tắt.'],
    ['Thứ tự ưu tiên mạng mặc định?', 'Saved unmetered > suggested unmetered > saved metered > suggested metered.'],
    ['Scorer thay thế của OEM?', 'WifiConnectedNetworkScorer.'],
    ['SAE là gì?', 'Simultaneous Authentication of Equals — nền của WPA3-Personal.'],
    ['OWE mã hoá nhưng không?', 'Xác thực.'],
    ['Android 12 thêm gì cho WPA3?', 'Transition Disable và Hash-to-Element (H2E).']
  ],
  quiz: [
    { q: 'wificond giao tiếp driver bằng:', o: ['ioctl riêng', 'nl80211', 'Binder', 'USB'], a: 1, e: 'Cầu nối framework ↔ kernel.' },
    { q: 'Vendor HAL là AIDL từ:', o: ['Android 11', 'Android 12', 'Android 13', 'Android 14'], a: 3, e: 'Trước đó HIDL.' },
    { q: 'Vendor HAL bắt buộc cho:', o: ['STA', 'SAP', 'Aware và RTT', 'Không bắt buộc'], a: 2, e: 'STA/SAP tuỳ chọn.' },
    { q: 'MAC randomization mặc định bật từ:', o: ['Android 8', 'Android 9', 'Android 10', 'Android 12'], a: 2, e: 'Người dùng tắt từng mạng.' },
    { q: 'Persistent randomization đổi MAC khi:', o: ['Mỗi lần kết nối', 'Factory reset', 'Mỗi 24 giờ', 'Quên mạng'], a: 1, e: 'Dựa trên tham số profile.' },
    { q: 'Tạo MAC mới (non-persistent) nếu địa chỉ cũ hơn:', o: ['1 giờ', '4 giờ', '24 giờ', '7 ngày'], a: 2, e: 'Hoặc DHCP hết hạn và >4 giờ.' },
    { q: 'Ưu tiên cao nhất mặc định:', o: ['Suggested metered', 'Saved unmetered', 'Saved metered', 'Suggested unmetered'], a: 1, e: 'Chọn của người dùng có thể vượt.' },
    { q: 'Tần suất poll RSSI khi kết nối (màn hình sáng):', o: ['1 giây', '3 giây', '10 giây', '30 giây'], a: 1, e: 'Kéo lên 6 giây khi đứng yên tín hiệu mạnh.' },
    { q: 'OWE cung cấp:', o: ['Mã hoá không xác thực', 'Xác thực mạnh', 'VPN', 'Không gì'], a: 0, e: 'Cho mạng mở công cộng.' },
    { q: 'Cờ wpa_supplicant bật WPA3-Personal:', o: ['CONFIG_SAE=y', 'CONFIG_OWE=y', 'CONFIG_WPA3=y', 'CONFIG_SUITEB=y'], a: 0, e: 'OWE cho Enhanced Open; SUITEB cho Enterprise.' }
  ],
  match: [
    ['wificond', 'nl80211 bridge'],
    ['Supplicant HAL', 'Giao diện wpa_supplicant'],
    ['Hostapd HAL', 'Giao diện hostapd'],
    ['PNO', 'Quét khi tắt màn hình'],
    ['SAE', 'WPA3-Personal'],
    ['OWE', 'Enhanced Open'],
    ['Transition Disable', 'Bỏ WPA2 trên mạng transition']
  ]
});
