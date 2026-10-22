// Android Connectivity – Chương 2: NFC.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 2,
  title: 'NFC: FeliCa, Secure NFC, Quick Access Wallet, NCI',
  intro: 'Mục NFC của Android gồm: <b>HCE FeliCa</b>, <b>đồng bộ thanh toán off-host</b>, <b>Secure NFC</b>, <b>Quick Access Wallet</b> và các <b>lệnh NCI độc quyền của Android</b> (observe mode, polling-frame notification, power saving). Nền tảng chung: NFC controller hỗ trợ NCI 2.0 và NFC framework của AOSP.',
  sections: [
    { icon: '🈳', title: 'Host card emulation của FeliCa', blocks: [
      { t: 'list', items: [
        '<b>FeliCa</b>: hệ thẻ thông minh RFID và chuẩn NFC ở Nhật, Hồng Kông và các thị trường châu Á–Thái Bình Dương; dùng cho giao thông, bán lẻ, tích điểm.',
        '<b>Yêu cầu</b>: phần cứng NFC hỗ trợ <b>NFC-F (JIS 6319-4)</b>.',
        '<b>Kiến trúc</b>: HCE FeliCa chạy song song với HCE sẵn có, thêm các lớp riêng FeliCa và gộp vào mã hiện có khi hợp lý.',
        '<b>Thành phần AOSP</b>: lớp tiện ích công khai <code>HostNfcFService</code>, lớp ẩn <code>NfcFServiceInfo</code> (<code>@hide</code>), chỉnh sửa lõi NFC framework. Nhà phát triển viết driver nối phần cứng với API.',
        '<b>Kiểm chứng</b>: CTS; CTS Verifier (<code>NfcTestActivity</code>) cho thiết bị báo feature <code>android.hardware.nfc.hcef</code>.'
      ] }
    ] },
    { icon: '💳', title: 'Đồng bộ thanh toán off-host', blocks: [
      { t: 'p', x: 'Android hỗ trợ <b>off-host card emulation</b>: giả lập thẻ NFC dùng <b>secure element (SE)</b> thay vì bộ xử lý host. Vấn đề: dịch vụ thanh toán ưu tiên đặt trong “Tap & pay” có thể không khớp với app có trạng thái nằm trong SE → một dịch vụ không ưu tiên trong SE có thể trả lời đầu đọc thay cho dịch vụ người dùng chọn.' },
      { t: 'key', x: 'Android 11 đưa vào <b>off-host payment synchronization</b> để đồng bộ ba thành phần: <b>cấu hình Tap & pay</b> trên host, <b>cấu hình routing</b> trên contactless frontend (CLF) và <b>app-selected state</b> trong SE.' },
      { t: 'list', items: [
        '<b>Yêu cầu</b>: NFC controller hỗ trợ <b>NCI 2.0</b>, NFC framework AOSP và Open Mobile API (OMAPI) cho SE.',
        '<b>API</b>: <code>getAidsForPreferredPaymentService()</code>, <code>getRouteDestinationForPreferredPaymentService()</code>, <code>getDescriptionForPreferredPaymentService()</code>; quyền <code>NFC_PREFERRED_PAYMENT_INFO</code>; broadcast <code>PREFERRED_PAYMENT_CHANGED</code>.',
        '<b>Kiểm chứng</b>: cài app SE trên SE tương ứng, kiểm tra phản hồi từ đầu đọc NFC trong nhiều điều kiện để chắc dịch vụ đúng được dùng.'
      ] }
    ] },
    { icon: '🔐', title: 'Secure NFC (Android 10)', blocks: [
      { t: 'p', x: 'Off-host emulation vốn được phép khi màn hình khoá/tắt hoặc thiết bị tắt (ví dụ thẻ giao thông FeliCa). <b>Secure NFC</b> hạn chế để off-host emulation <b>chỉ hoạt động khi màn hình đã mở khoá</b>; người dùng chọn bật hay không.' },
      { t: 'list', items: [
        '<b>Yêu cầu</b>: NFC controller NCI 2.0 và NFC framework AOSP. Bật cho một SKU phần cứng bằng cách thêm <code>ro.boot.hardware.sku</code> vào file XML tài nguyên NFC với thuộc tính <code>config_skuSupportsSecureNfc</code>.',
        '<b>Ba API</b>: <code>isSecureNfcSupported()</code>, <code>isSecureNfcEnabled()</code>, <code>enableSecureNfc(boolean)</code>.',
        '<b>Settings</b>: công tắc (mặc định bật/tắt tuỳ chọn) — thiết kế tham chiếu: Settings > Connected devices > Connection preferences > NFC > “Require device unlock for NFC”. Khi bật và chạm đầu đọc lúc khoá, hiện thông báo “Unlock to use NFC”.',
        '<b>Hành vi</b>: chặn off-host emulation khi màn hình tắt, khoá, hoặc máy tắt; chỉ tiếp tục sau khi mở khoá.'
      ] },
      { t: 'widget', name: 'secure-nfc', title: 'Secure NFC có cho phép giao dịch không?' }
    ] },
    { icon: '👛', title: 'Quick Access Wallet (Android 11+)', blocks: [
      { t: 'p', x: 'Cho người dùng truy cập thẻ thanh toán và vé/pass <b>không cần mở app</b>: chọn phương thức trước khi giao dịch tại thiết bị NFC, hoặc mở nhanh boarding pass/vé sự kiện. Cần NFC + HCE; gắn với service của <b>app thanh toán NFC mặc định</b> (nếu cài một app thì tự thành mặc định).' },
      { t: 'list', items: [
        '<b>Wallet UI</b>: Android 12+ chạy trong System UI; Android 11 là gói QuickAccessWallet riêng (phải đưa vào và whitelist).',
        '<b>QuickAccessWalletService</b>: khai báo trong manifest và bảo vệ bằng quyền signature <code>android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE</code> (chỉ System UI bind được); cài ba phương thức <code>onWalletCardsRequested</code> (trả thẻ qua callback, nên ở luồng nền), <code>onWalletCardSelected</code>, <code>onWalletDismissed</code>. Khi giao dịch NFC mở activity thanh toán, gửi sự kiện <code>TYPE_NFC_PAYMENT_STARTED</code> để wallet UI tự đóng. Android 10 trở xuống app side-load có thể chiếm quyền → kiểm tra phiên bản trong <code>onCreate</code>, chỉ bật từ Android 11.',
        '<b>Bề mặt UI</b>: Android 12+ quick settings và màn hình khoá; Android 11 power menu (dịch chuyển bằng <code>GlobalActionsPanelPlugin</code>).',
        '<b>Cài đặt</b>: Android 12+ “Show wallet” (<code>LOCKSCREEN_SHOW_WALLET</code>, mặc định true); Android 11 <code>GLOBAL_ACTIONS_PANEL_ENABLED</code>/<code>_AVAILABLE</code> (Cards & passes).',
        '<b>Kiểm thử</b>: CTS ở <code>cts/tests/quickaccesswallet</code>; thủ công: sẵn sàng, zero-state/non-zero-state, trạng thái khoá, TalkBack; plugin qua Robolectric.'
      ] }
    ] },
    { icon: '🧬', title: 'Lệnh NCI độc quyền của Android', blocks: [
      { t: 'p', x: 'NCI (NFC Controller Interface) định nghĩa cách host làm việc với NFCC. Android mở rộng NCI bằng gói proprietary: <b>Group ID 0xF</b>, <b>Opcode ID 0x0C</b>; byte đầu của payload là <b>Android OID</b> xác định lệnh/phản hồi/thông báo.' },
      { t: 'table', head: ['OID', 'Thông điệp', 'Chức năng'], rows: [
        ['<code>0x00</code>', '<code>GET_CAPS</code>', 'Báo NFCC hỗ trợ tính năng độc quyền nào'],
        ['<code>0x01</code>, <code>0x0A</code>', '<code>POWER_SAVING</code>, <code>QUERY_POWER_SAVING</code>', 'Bật/truy vấn chế độ tiết kiệm điện'],
        ['<code>0x02</code>', '<code>PASSIVE_OBSERVE_MODE</code>', 'Bật/tắt observe mode'],
        ['<code>0x03</code>', '<code>POLLING_FRAME_NTF</code>', 'Thông báo các polling request nhận được'],
        ['<code>0x04</code>, <code>0x05</code>', '<code>QUERY_PASSIVE_OBSERVER_STATUS</code>, <code>SET_PASSIVE_OBSERVER_TECH</code>', 'Trạng thái và chọn công nghệ (NFC-A/B/F/V) bằng bit mask'],
        ['<code>0x06</code>, <code>0x07</code>', '<code>SET/GET_PASSIVE_OBSERVER_EXIT_FRAME</code>', 'Cấu hình khung RF thoát observe mode'],
        ['<code>0x08</code>', 'Blank NCI', 'Gửi dữ liệu khung thô'],
        ['<code>0x09</code>, <code>0x0D</code>', '<code>SET/GET_POLLING_LOOP_ANNOTATION</code>', 'Quản lý khung RF tuỳ chỉnh chèn vào discovery loop'],
        ['<code>0x0B</code>, <code>0x0C</code>', '<code>PASSIVE_OBSERVER_SUSPENDED_NTF</code>, <code>…RESUMED_NTF</code>', 'Thông báo đổi trạng thái observer']
      ] },
      { t: 'list', items: [
        '<b>Mặc định</b>: nếu NFCC không hỗ trợ <code>GET_CAPS</code> hoặc bỏ sót capability, host giả định giá trị mặc định.',
        '<b>Observe mode</b>: NFCC “không được phản hồi poll request trong polling loop ở listen mode” cho tới khi host cho phép; phải gửi <code>RF_FIELD_INFO_NTF</code> khi phát hiện trường; nên tắt observe mode khi host tắt để giao dịch Secure Element tiếp tục.',
        '<b>Polling frame notification</b> chỉ gửi khi observe mode hoạt động, sau mỗi polling frame; khi có cả hai thông báo, <code>POLLING_FRAME_NTF</code> theo sau <code>RF_FIELD_INFO_NTF</code>.',
        '<b>Power saving</b>: host không gửi lệnh, NFCC không gửi phản hồi/thông báo; NFCC hoặc SE nhúng vẫn nhận yêu cầu thanh toán theo routing hiện có; quay lại full power cần reset hoặc khởi tạo lại.',
        '<b>Giới hạn trạng thái</b>: exit frame và polling loop annotation chỉ gửi ở <code>RFST_IDLE</code>.',
        '<b>Phiên bản</b>: capability observe mode có hai giá trị — <code>0x01</code> cần deactivate RF từ host (Android 15), <code>0x02</code> không cần (Android 16+).',
        'Tham chiếu cài đặt: <code>NativeNfcManager.cpp</code>, <code>nci_defs.h</code>.'
      ] }
    ] }
  ],
  summary: [
    'HCE FeliCa cần NFC-F; thành phần HostNfcFService; CTS Verifier kiểm feature nfc.hcef.',
    'Off-host payment sync (Android 11) đồng bộ Tap & pay, routing CLF và app-selected state trong SE; cần NCI 2.0 + OMAPI.',
    'Secure NFC (Android 10): chỉ cho phép off-host emulation khi đã mở khoá.',
    'Quick Access Wallet (Android 11+) qua QuickAccessWalletService; NCI Android proprietary: GID 0xF, Opcode 0x0C, OID 0x00–0x0D.'
  ],
  cards: [
    ['FeliCa là gì?', 'Hệ thẻ RFID/chuẩn NFC phổ biến ở Nhật và châu Á–TBD.'],
    ['HCE FeliCa cần phần cứng gì?', 'NFC-F (JIS 6319-4).'],
    ['Feature constant của HCE FeliCa?', 'android.hardware.nfc.hcef.'],
    ['Off-host card emulation?', 'Giả lập thẻ NFC dùng secure element thay vì host.'],
    ['Vấn đề off-host payment sync giải quyết?', 'Dịch vụ không ưu tiên trong SE trả lời đầu đọc thay dịch vụ người dùng chọn.'],
    ['Quyền đọc thông tin payment ưu tiên?', 'NFC_PREFERRED_PAYMENT_INFO.'],
    ['Secure NFC từ Android mấy?', 'Android 10.'],
    ['Secure NFC làm gì?', 'Chỉ cho off-host emulation khi màn hình đã mở khoá.'],
    ['Ba API Secure NFC?', 'isSecureNfcSupported, isSecureNfcEnabled, enableSecureNfc.'],
    ['Quick Access Wallet từ Android mấy?', 'Android 11.'],
    ['Quyền bind QuickAccessWalletService?', 'BIND_QUICK_ACCESS_WALLET_SERVICE (signature).'],
    ['GID/Opcode NCI Android?', 'Group ID 0xF, Opcode ID 0x0C.'],
    ['GET_CAPS OID?', '0x00.'],
    ['Observe mode làm gì?', 'NFCC không trả lời poll request cho tới khi host cho phép.'],
    ['Quay lại full power từ power saving?', 'Cần reset hoặc khởi tạo lại NFCC.']
  ],
  quiz: [
    { q: 'Secure NFC giới hạn off-host emulation khi:', o: ['Màn hình mở khoá', 'Màn hình tắt/khoá', 'Wi-Fi bật', 'Sạc pin'], a: 1, e: 'Chỉ hoạt động khi đã mở khoá.' },
    { q: 'Off-host payment sync cần controller:', o: ['NCI 1.0', 'NCI 2.0', 'Không cần', 'USB'], a: 1, e: 'Cùng NFC framework và OMAPI.' },
    { q: 'Broadcast khi payment service ưu tiên đổi:', o: ['PREFERRED_PAYMENT_CHANGED', 'NFC_ON', 'PAY_UPDATE', 'WALLET_CHANGED'], a: 0, e: 'Kèm quyền NFC_PREFERRED_PAYMENT_INFO.' },
    { q: 'Wallet UI ở Android 12+ chạy trong:', o: ['Settings', 'System UI', 'Launcher', 'NFC service'], a: 1, e: 'Android 11 là gói riêng.' },
    { q: 'Sự kiện để wallet tự đóng khi payment activity mở:', o: ['TYPE_NFC_PAYMENT_STARTED', 'ON_DISMISS', 'CARD_USED', 'TAP_DONE'], a: 0, e: 'Tránh che màn hình thanh toán.' },
    { q: 'Proprietary NCI dùng Group ID:', o: ['0x0', '0x5', '0xF', '0x1'], a: 2, e: 'Opcode ID 0x0C.' },
    { q: 'Observe mode capability 0x02 (Android 16+) khác 0x01 ở:', o: ['Không cần RF deactivation từ host', 'Tắt NFC', 'Chỉ NFC-F', 'Nhanh gấp đôi'], a: 0, e: '0x01 cần deactivate RF (Android 15).' },
    { q: 'POLLING_FRAME_NTF gửi khi:', o: ['Luôn luôn', 'Chỉ khi observe mode hoạt động', 'Chỉ khi tắt máy', 'Khi power saving'], a: 1, e: 'Sau mỗi polling frame.' },
    { q: 'Thiết bị bật Secure NFC cho SKU qua:', o: ['config_skuSupportsSecureNfc', 'ro.nfc.secure', 'build.prop', 'AndroidManifest'], a: 0, e: 'Với ro.boot.hardware.sku trong XML tài nguyên NFC.' },
    { q: 'Công nghệ observer có thể chọn:', o: ['NFC-A/B/F/V', 'Wi-Fi', 'LTE', 'UWB'], a: 0, e: 'Bằng bit mask qua SET_PASSIVE_OBSERVER_TECH.' }
  ],
  match: [
    ['NFC-F', 'Chuẩn FeliCa'],
    ['OMAPI', 'Giao diện tới secure element'],
    ['Secure NFC', 'Chỉ emulation khi mở khoá'],
    ['QuickAccessWalletService', 'Cung cấp thẻ cho ví nhanh'],
    ['GID 0xF / OID 0x0C', 'NCI proprietary Android'],
    ['Observe mode', 'NFCC im lặng khi poll'],
    ['CLF', 'Contactless frontend']
  ]
});
