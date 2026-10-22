// Android Connectivity – Chương 4: Carrier.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 4,
  title: 'Carrier: CarrierConfig, APN, eSIM, vệ tinh, UICC privileges',
  intro: 'Mục Carrier gom các cơ chế để nhà mạng tuỳ biến hành vi thiết bị: <b>CarrierConfig</b> và <b>APN</b>, <b>eSIM (eUICC/LPA)</b>, <b>kết nối vệ tinh (NTN)</b> và <b>UICC carrier privileges</b> (quyền cho app ký bằng chứng chỉ trên SIM).',
  sections: [
    { icon: '🏷️', title: 'Carrier configuration', blocks: [
      { t: 'p', x: 'Từ Android 6.0, app nhà mạng có đặc quyền cấp cấu hình telephony cho nền tảng qua giao diện công khai, thay cho cấu hình trước đây chủ yếu nằm trong overlay XML nội bộ của framework. Hỗ trợ cấu hình động theo nhà mạng, kể cả MVNO và thiết bị bán qua kênh mở.' },
      { t: 'steps', items: [
        '<b>Carrier app</b> (tuỳ chọn, nơi ưu tiên để tuỳ biến vượt AOSP mặc định).',
        '<b>Platform config app</b> trong system image: <code>packages/apps/CarrierConfig</code> (OEM/nhà mạng nên sửa tối thiểu).',
        '<b>Giá trị mặc định cứng của framework</b> (khớp hành vi trước 6.0).'
      ] },
      { t: 'key', x: 'Ưu tiên theo thứ tự: nguồn nào có giá trị cho khoá trước thì thắng. Bundle được dựng lại khi SIM nạp (boot hoặc hot swap), khi carrier app yêu cầu reload, hoặc khi carrier app cập nhật. Nền tảng cache bundle nên cần cập nhật gói hoặc gọi <code>notifyConfigChangedForSubId</code>. Carrier app nhận MCC, MNC, SPN, IMSI, GID1, GID2 và carrier ID để quyết định giá trị trả về.' },
      { t: 'list', items: [
        '<b>Quyền</b> gắn với chứng chỉ: carrier app phải ký bằng cùng chứng chỉ có trên SIM (xem UICC carrier privileges). <b>Carrier ID</b> cho phép áp cấu hình theo danh tính nhà mạng thay vì chỉ MCC/MNC.',
        '<b>APN</b>: carrier app thêm APN (ví dụ lúc kích hoạt SIM) qua <code>ContentResolver</code> trên URI <code>Telephony.Carriers</code>.',
        '<b>Điểm tuỳ biến</b>: <code>CarrierService.onLoadConfig</code> (VoLTE, thay RAT…; đăng ký với quyền <code>BIND_CARRIER_SERVICES</code>); khoá <code>CarrierConfigManager</code> (SDK, cố định trong một API level); override tài nguyên hệ thống (khả năng thoại/SMS/data của thiết bị đặt lúc sản xuất); Android 15+: <code>KEY_CELLULAR_SERVICE_CAPABILITIES_INT_ARRAY</code> (ví dụ subscription chỉ data), đọc bằng <code>SubscriptionInfo.getServiceCapabilities()</code>. Android 15 đổi tên <code>isVoiceCapable()</code>/<code>isSmsCapable()</code> thành <code>isDeviceVoiceCapable()</code>/<code>isDeviceSmsCapable()</code>.',
        '<b>Kiểm thử</b>: cần SIM có chữ ký chứng chỉ khớp và thiết bị Android 6.0+.'
      ] },
      { t: 'h3', x: 'Cập nhật APN và CarrierConfig trong AOSP' },
      { t: 'list', items: [
        'Đây là hướng dẫn cho nhà mạng muốn đổi dữ liệu trong AOSP: cần tài khoản Google gắn email doanh nghiệp (tránh liên kết Gmail); mở issue ở Google Issue Tracker (Android Public Tracker > Framework) — APN bug ghi rõ cài đặt APN; CarrierConfig bug mô tả thay đổi.',
        '<b>APN</b>: mẫu <code>etc/apns-full-conf.xml</code> trong <code>device/sample</code> (thuộc tính carrier, MCC/MNC, apn, type, MMS center/proxy, bearer bitmask). <b>Chỉ là mẫu</b> nên sửa file không đổi hành vi thiết bị.',
        '<b>CarrierConfig</b>: file XML trong assets của <code>platform/packages/apps/CarrierConfig</code>, nhận diện theo MCC/MNC; khoá định nghĩa trong <code>CarrierConfigManager</code>, hậu tố <code>_int</code>, <code>_string</code>, <code>_bool</code> cho kiểu giá trị.',
        'Gửi qua Gerrit (<code>repo upload</code>) và thêm nhóm review <code>android-carrier-config-review@google.com</code>. Merge vào AOSP <b>không đảm bảo OEM sẽ ship</b>; carrier cần làm việc với OEM.',
        'Kiểm thử APN trên máy rooted: thêm, reset cấu hình APN, xác nhận profile nạp, kiểm tra data, Wi-Fi hotspot, MMS.'
      ] },
      { t: 'widget', name: 'carrier-config-priority', title: 'Giá trị cấu hình nào thắng?' }
    ] },
    { icon: '🔑', title: 'UICC carrier privileges', blocks: [
      { t: 'p', x: 'Từ Android 5.1 (mở rộng ở 7.0): app ký bằng chứng chỉ lưu trên UICC của SIM được gọi tập API nhà mạng hạn chế, giúp nhà mạng quản lý app phát hành qua kênh thường mà không cần ký platform hay cài sẵn. “Carriers have full control of the UICC.”' },
      { t: 'list', items: [
        '<b>Quy tắc trong ARA-M</b>: lưu trên UICC dưới AID của access rule application <code>A00000015141434C00</code>, theo đặc tả GlobalPlatform Secure Element Access Control; Android lấy bằng lệnh <code>GET DATA</code>; nhà mạng cập nhật qua OTA của thẻ. Mỗi rule (REF-AR-DO, tag E2) = <b>REF-DO</b> (hash chứng chỉ SHA-1 20 byte hoặc SHA-256 32 byte, tuỳ chọn tên gói ≤ 127 byte; không có tên gói thì mọi app ký bằng chứng chỉ đó đều đủ điều kiện) + <b>AR-DO</b> (bitmask quyền 8 byte, 64 quyền, ánh xạ bit dành cho tương lai).',
        '<b>Dự phòng</b>: nếu không tìm thấy ARA, Android dùng access rule file (ARF) qua PKCS15 AID, đọc mục AID <code>FFFFFFFFFFFF</code>.',
        '<b>API được bật</b>: <code>TelephonyManager</code> (kênh UICC, định danh, chọn mạng, voicemail, cài đặt data, điều khiển modem), <code>TelephonyCallback</code>, <code>SubscriptionManager</code>, <code>SmsManager</code>, <code>CarrierConfigManager</code>, <code>NetworkStatsManager</code>, IMS/RCS manager, <code>EuiccManager</code>, <code>CarrierMessagingService</code>, <code>CarrierService</code>, telephony provider, <code>WifiNetworkSuggestion</code>.',
        '<b>Cài đặt</b>: <code>UiccCarrierPrivilegeRules.java</code> nạp và parse khi phát hiện UICC, cache trong bộ nhớ, so khớp chứng chỉ tuyến tính; tháo UICC thì huỷ cache.',
        '<b>Kiểm chứng</b>: <code>CtsCarrierApiTestCases.apk</code> với UICC phát triển (rule cho cả SHA-1 và SHA-256 vì khoá ký APK đổi ở Android 12, theo cấu trúc profile GSMA TS.48); token thiết bị <code>sim-card-with-certs</code>; UICC không cần dịch vụ di động.',
        '<b>FAQ</b>: cập nhật chứng chỉ qua OTA thẻ; không giới hạn số chứng chỉ nhưng nhiều rule làm tăng độ trễ kiểm tra; đa SIM dùng SIM mặc định do người dùng chọn; khuyến nghị SHA-256; OEM không thể tắt một phần API nhà mạng.'
      ] }
    ] },
    { icon: '📟', title: 'eSIM (eUICC)', blocks: [
      { t: 'p', x: 'eSIM cho phép tải và quản lý profile nhà mạng không cần SIM tháo rời, theo GSMA Remote SIM Provisioning (RSP). Android 9: API eUICC công khai; Android 10: nhiều eSIM; Android 13: nhiều profile cùng bật.' },
      { t: 'table', head: ['Thành phần', 'Vai trò'], rows: [
        ['<b>LPA</b> (Local Profile Assistant)', 'App hệ thống đặc quyền giữa SM-DP+ server và chip eUICC; backend mở rộng <code>EuiccService</code> + LPA UI (LUI) tuỳ chọn; có thể cùng hoặc tách APK; framework chọn LPA ưu tiên cao nhất, không có thì tắt eSIM'],
        ['<b>Carrier apps</b>', 'Dùng <code>EuiccManager</code> để tải, chuyển, xoá subscription; bất đồng bộ qua <code>PendingIntent</code> tới <code>BroadcastReceiver</code>; Android 14+: mutable PendingIntent phải nêu rõ component/package'],
        ['<b>Resolvable errors</b>', 'Khi cần người dùng can thiệp (mã xác nhận, đồng ý tắt SIM đang hoạt động): callback trả lỗi resolvable, carrier app gọi <code>startResolutionActivity</code>, LUI xử lý'],
        ['<b>EuiccCardManager</b>', 'System API bọc lệnh ES10 (APDU, ASN.1); chỉ LPA gọi được']
      ] },
      { t: 'list', items: [
        '<b>Carrier privileges</b>: metadata mỗi profile có tag độc quyền <code>BF76</code> chứa access rules; app được cấp quyền nếu hash chứng chỉ ký khớp (tuỳ chọn cả tên gói); metadata phải phản chiếu rule trong profile; thiếu tag thì <code>downloadSubscription</code> bị từ chối (luồng activation code bỏ qua kiểm tra này).',
        '<b>Ba luồng kích hoạt</b>: (1) activation code qua AIDL — LPA bind <code>ICarrierEuiccProvisioningService</code>, xin mã (có thể gắn EID để nhà mạng gán sẵn profile) rồi tải; (2) carrier-launched LPA flow (Android 11+); (3) carrier UI từ LPA (Android 11+) — LPA <b>không bao giờ</b> nhận activation code trực tiếp từ result intent để app không phải LPA không lấy được mã.',
        '<b>Phần cứng/modem</b>: eUICC và LPA hỗ trợ GSMA RSP v2.0 hoặc v2.2 cùng SM-DP+/SM-DS khớp; modem báo khả năng eUICC và cài <code>setSimPower</code> (IRadio 1.1), <code>getIccCardStatus</code> (IRadio 1.2), <code>getSimSlotsStatus</code> (RadioConfig 1.0), <code>getAllowedCarriers</code> (AIDL; trạng thái khoá nhà mạng giúp LPA chặn tải cho nhà mạng chưa unlock); boot profile mặc định phải nhận là SIM hợp lệ và giữ nguồn; Android 10 có eUICC gắn cứng phải định nghĩa mảng <code>non_removable_euicc_slots</code>.',
        '<b>Nhiều eSIM</b>: cần nhiều eUICC và radio HAL ≥ 1.2 (khuyến nghị 1.4); dùng <code>createForCardId</code> để ghim <code>EuiccManager</code> vào card cụ thể.',
        '<b>Kiểm chứng</b>: AOSP không có LPA và không có CTS end-to-end, nhưng có CTS cho API eUICC công khai; LPA theo kế hoạch GSMA SGP.23.'
      ] },
      { t: 'widget', name: 'esim-flow', title: 'Luồng kích hoạt eSIM nào?' }
    ] },
    { icon: '🛰️', title: 'Kết nối vệ tinh (Android 15+)', blocks: [
      { t: 'p', x: 'Hỗ trợ <b>non-terrestrial networks (NTN)</b>: thiết bị kết nối và dùng dịch vụ quan trọng khi không có mạng di động mặt đất và Wi-Fi.' },
      { t: 'table', head: ['Tính năng', 'Mô tả'], rows: [
        ['Dịch vụ khẩn cấp', 'Liên lạc dịch vụ khẩn cấp, gồm text-to-911, khi roaming ngoài vùng phủ mặt đất'],
        ['Nhắn tin P2P', 'SMS, MMS, RCS qua vệ tinh; telephony quản lý hàng đợi, khả năng liên kết, kích thước payload'],
        ['Chia sẻ vị trí', 'Ứng dụng như Google Maps chia sẻ toạ độ chính xác; tích hợp <code>LocationManager</code>'],
        ['Dữ liệu', '<i>Constrained (light)</i>: hạn chế nền, chỉ dịch vụ lõi và app trong allowlist; <i>Unconstrained</i>: định tuyến IP đầy đủ, tuỳ khả dụng, phần cứng, carrier config']
      ] },
      { t: 'list', items: [
        '<b>Kiến trúc</b>: AOSP satellite framework (máy trạng thái, ghi đè định tuyến mặt đất khi attach, giám sát chất lượng tín hiệu, API <code>SatelliteManager</code>); <b>modem HAL <code>ISatellite</code></b> (AIDL từ Android 15) điều khiển nguồn modem, cửa sổ lắng nghe vệ tinh và truyền gói; khi attach PLMN NTN, chuỗi firewall tuỳ chỉnh và mở rộng data saver bảo vệ liên kết khỏi app chưa tối ưu.',
        '<b>Cấu hình động</b>: URL entitlement server, danh sách PLMN cho phép, chế độ hỗ trợ mặc định — qua <code>CarrierConfigManager</code> XML hoặc xác thực động qua entitlement server GSMA TS.43.',
        '<b>Xác minh</b>: modem phải qua mọi bộ kiểm thử Android liên quan. Nhà mạng/đối tác có quy trình onboarding tự phục vụ.'
      ] },
      { t: 'tip', x: 'Các trang khác của mục Carrier (chưa đi sâu): 5G network slicing, carrier identification, data plans, device identifiers, eSIM modem requirements/eUICC APIs/multiple enabled profiles/error handling/test profiles/transfer, VPN UX, multi-operator network, out-of-balance users, RIL refactoring, small cell.' }
    ] }
  ],
  summary: [
    'CarrierConfig: carrier app > platform config app > mặc định framework; cache cần notifyConfigChangedForSubId.',
    'UICC carrier privileges: rule ARA-M (hash chứng chỉ + tên gói) trên SIM → app ký đúng chứng chỉ được gọi API nhà mạng.',
    'eSIM: LPA + EuiccService + EuiccManager, GSMA RSP v2.0/2.2; ba luồng activation, LPA không nhận mã từ result intent.',
    'Vệ tinh (Android 15+): SatelliteManager + ISatellite HAL; khẩn cấp, nhắn tin, vị trí, dữ liệu constrained/unconstrained.'
  ],
  cards: [
    ['CarrierConfig từ Android mấy?', 'Android 6.0.'],
    ['Thứ tự ưu tiên cấu hình?', 'Carrier app → platform CarrierConfig app → mặc định framework.'],
    ['Reload CarrierConfig?', 'Cập nhật gói hoặc notifyConfigChangedForSubId.'],
    ['Quyền bind CarrierService?', 'BIND_CARRIER_SERVICES.'],
    ['apns-full-conf.xml có đổi hành vi thiết bị?', 'Không, chỉ là file mẫu.'],
    ['Android 15 CarrierConfig mới?', 'KEY_CELLULAR_SERVICE_CAPABILITIES_INT_ARRAY.'],
    ['UICC carrier privileges từ Android mấy?', '5.1 (mở rộng 7.0).'],
    ['ARA AID?', 'A00000015141434C00.'],
    ['REF-DO chứa gì?', 'Hash chứng chỉ (SHA-1/SHA-256) và tuỳ chọn tên gói.'],
    ['LPA là gì?', 'Local Profile Assistant, app đặc quyền giữa SM-DP+ và eUICC.'],
    ['Tag access rule của profile eSIM?', 'BF76.'],
    ['eSIM nhiều profile cùng bật từ?', 'Android 13.'],
    ['Quy tắc bảo mật activation code?', 'LPA không nhận mã trực tiếp từ result intent.'],
    ['HAL vệ tinh?', 'AIDL ISatellite (Android 15).'],
    ['Constrained data?', 'Hạn chế nền, chỉ dịch vụ lõi và app trong allowlist.']
  ],
  quiz: [
    { q: 'Nguồn cấu hình ưu tiên cao nhất:', o: ['Mặc định framework', 'Carrier app', 'Platform config app', 'OEM overlay'], a: 1, e: 'Rồi tới platform CarrierConfig app.' },
    { q: 'Để carrier app có quyền cần:', o: ['Ký platform', 'Ký bằng chứng chỉ khớp trên SIM', 'Root', 'Được Play duyệt'], a: 1, e: 'UICC carrier privileges.' },
    { q: 'File apns-full-conf.xml trong device/sample:', o: ['Có hiệu lực ngay', 'Chỉ là mẫu', 'Được flash', 'Bắt buộc'], a: 1, e: 'Không tự đổi hành vi.' },
    { q: 'Rule ARA-M được lấy bằng lệnh:', o: ['GET DATA', 'SELECT', 'READ BINARY', 'VERIFY'], a: 0, e: 'Theo GlobalPlatform.' },
    { q: 'Hash chứng chỉ dùng trong REF-DO:', o: ['MD5', 'SHA-1 hoặc SHA-256', 'CRC32', 'AES'], a: 1, e: 'Khuyến nghị SHA-256.' },
    { q: 'LPA UI viết tắt:', o: ['LUI', 'LPU', 'LUA', 'LIU'], a: 0, e: 'Tuỳ chọn.' },
    { q: 'Mutable PendingIntent ở Android 14+ phải:', o: ['Rỗng', 'Nêu component/package', 'Có action', 'Có extra'], a: 1, e: 'Yêu cầu an toàn.' },
    { q: 'Nhiều eSIM cần radio HAL tối thiểu:', o: ['1.0', '1.2', '1.5', '2.0'], a: 1, e: 'Khuyến nghị 1.4.' },
    { q: 'Hỗ trợ vệ tinh từ:', o: ['Android 12', 'Android 13', 'Android 15', 'Android 11'], a: 2, e: 'Qua SatelliteManager và ISatellite.' },
    { q: 'Entitlement động cho vệ tinh qua:', o: ['GSMA TS.43', 'RFC 5031', 'GSMA TS.48', 'IR.92'], a: 0, e: 'Hoặc CarrierConfigManager XML.' }
  ],
  match: [
    ['CarrierService', 'Cấp CarrierConfig'],
    ['ARA-M', 'Rule đặc quyền trên UICC'],
    ['LPA', 'Quản lý profile eSIM'],
    ['BF76', 'Tag access rules'],
    ['ISatellite', 'HAL vệ tinh'],
    ['SatelliteManager', 'API vệ tinh'],
    ['notifyConfigChangedForSubId', 'Reload CarrierConfig']
  ]
});
