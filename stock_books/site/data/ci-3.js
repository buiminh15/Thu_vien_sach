// Android Connectivity – Chương 3: Calling and messaging.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 3,
  title: 'Calling and messaging: IMS, khẩn cấp, RTT, app gọi bên thứ ba',
  intro: 'Mục Calling and messaging nói về cách nền tảng xử lý cuộc gọi/tin nhắn: <b>ImsService</b> (VoLTE/video/SMS qua IMS), <b>số khẩn cấp và gọi khẩn cấp</b>, <b>Domain selection service</b>, <b>RTT</b> (văn bản thời gian thực) và <b>app gọi bên thứ ba</b> qua Telecom framework.',
  sections: [
    { icon: '📞', title: 'Implement IMS (ImsService)', blocks: [
      { t: 'p', x: 'Android 9 đưa vào SystemApi <b>ImsService</b>: giao diện xác định giữa nền tảng và bản cài đặt IMS của vendor/nhà mạng, để truyền tín hiệu như trạng thái đăng ký IMS, SMS qua IMS và các tính năng <b>MmTel</b> (thoại, video). Vì là System API nên build trực tiếp với Android SDK; app IMS cài sẵn có thể cập nhật qua Play Store.' },
      { t: 'list', items: [
        '<b>Kiến trúc</b>: IMS chạy hoàn toàn trên AP, hoặc offload một phần/toàn bộ xuống modem. Android <b>không có HAL công khai</b> cho offload baseband nên cần mở rộng HAL tuỳ chỉnh tới modem. Thiết bị dùng IMS cũ phải chuyển AIDL interface và lớp wrapper sang namespace <code>android.telephony.ims.compat</code> và cập nhật action intent-filter.',
        '<b>Đăng ký service</b> trong <code>AndroidManifest.xml</code>: <code>directBootAware</code> (telephony tìm thấy và chạy trước khi mở khoá, vẫn không truy cập được storage mã hoá thiết bị), <code>persistent</code> (hệ thống không kill để lấy lại RAM — chỉ cho system app), <code>permission</code> = <code>BIND_IMS_SERVICE</code>, và intent filter action <code>android.telephony.ims.ImsService</code>.'
      ] },
      { t: 'table', head: ['Tính năng ImsFeature', 'Mô tả'], rows: [
        ['<b>MMTel</b>', 'Media IMS cho thoại và video theo IR.92, IR.94; không gồm emergency attach vào IMS PDN; extends <code>MmTelFeature</code>'],
        ['<b>Emergency MMTel</b>', 'Báo có thể emergency attach vào IMS PDN; không có thì mặc định Circuit Switch Fallback; yêu cầu MMTel'],
        ['<b>RCS</b>', 'Framework không có API RCS nhưng xử lý binding và dọn dẹp khi SIM đổi']
      ] },
      { t: 'list', items: [
        '<b>Binding</b>: hai loại ImsService — <i>carrier override</i> (cài sẵn, gắn với nhà mạng qua CarrierConfig cho MMTel/RCS, chỉ bind khi có SIM khớp) và <i>device default</i> (OEM đặt trong device overlay, phục vụ khi không có carrier service hoặc không có SIM, <b>phải hỗ trợ Emergency MMTel</b>). Mỗi SIM slot, mỗi feature bind tối đa một ImsService; kiểm tra carrier override trước rồi mới tới mặc định.',
        'Không hỗ trợ ImsService bên thứ ba tải về: phải là system app trong thư mục priv-app, tên gói khớp giá trị cấu hình. Framework hỏi tính năng qua <code>querySupportedImsFeatures</code>; app gọi <code>onUpdateSupportedImsFeatures</code> để tính lại. Nếu không báo tính năng nào, ImsService bị unbind tới khi reboot hoặc có SIM khớp.',
        '<b>Phát triển app</b>: dùng <code>ImsManager</code> để lấy <code>ImsMmTelManager</code>, <code>ImsRcsManager</code>, <code>ProvisioningManager</code>. Android 13+: đăng ký <code>ImsStateCallback</code> trước khi dùng; nếu telephony crash, app nhận lỗi và phải đăng ký lại.'
      ] },
      { t: 'widget', name: 'ims-binding', title: 'ImsService nào sẽ được bind?' }
    ] },
    { icon: '🚨', title: 'Số khẩn cấp và gọi khẩn cấp', blocks: [
      { t: 'p', x: 'Android 10 mở rộng nguồn số khẩn cấp, phân loại theo loại dịch vụ và tách cuộc gọi khẩn cấp khỏi cuộc gọi thường trong radio HAL.' },
      { t: 'table', head: ['Nguồn số khẩn cấp', 'Ghi chú'], rows: [
        ['Network signaling', 'Số do mạng nhà cung cấp gửi'],
        ['SIM card', 'Số lưu trên SIM'],
        ['Modem configuration', 'Số định nghĩa trong modem'],
        ['Platform database', 'Danh sách do nền tảng Android duy trì'],
        ['Default list', 'Theo 3GPP: <b>112</b> và <b>911</b> luôn có; khi không có SIM thêm 000, 08, 110, 999, 118, 119…']
      ] },
      { t: 'list', items: [
        '<b>Danh mục dịch vụ</b>: cảnh sát, cứu thương, cứu hoả, marine guard, mountain rescue, hai loại eCall (khởi tạo thủ công/tự động) và loại chung.',
        '<b>API TelephonyManager</b>: <code>getEmergencyNumberList</code>, <code>isEmergencyNumber</code>, <code>isPotentialEmergencyNumber</code> (trùng chữ số đầu với số khẩn cấp — hữu ích khi đang quay số); đa SIM chia sẻ danh sách giữa các subscription (Android 10).',
        '<b>Radio HAL 1.4</b>: <code>emergencyDial</code> (<code>IRadio.hal</code>) + <code>emergencyDialResponse</code> (<code>IRadioResponse.hal</code>); <code>currentEmergencyNumberList</code> (<code>IRadioIndication.hal</code>) với kiểu <code>EmergencyNumber</code> (địa chỉ, MCC, MNC, danh mục, URN, nguồn); <code>EmergencyCallRouting</code> chỉ định định tuyến khẩn cấp hay thường (unknown thì implementation quyết định).',
        '<b>Kiểm chứng</b>: CTS <code>testGetEmergencyNumberList</code>, <code>testIsEmergencyNumber</code>, <code>testIsPotentialEmergencyNumber</code>; VTS <code>emergencyDial</code>, <code>emergencyDial_withServices</code>, <code>emergencyDial_withEmergencyRouting</code>. Tham chiếu 3GPP TS 22.101 §10, TS 24.008, TS 23.167, TS 24.503, RFC 5031 (URN dịch vụ khẩn cấp).'
      ] },
      { t: 'widget', name: 'emergency-number', title: 'Số này có phải số khẩn cấp mặc định?' }
    ] },
    { icon: '🧭', title: 'Domain selection service (Android 15+)', blocks: [
      { t: 'p', x: 'Cho thiết bị chọn giữa dịch vụ <b>IMS</b> và dịch vụ cũ qua mạng circuit-switched, qua System API <code>DomainSelectionService</code> — giao diện giữa nền tảng và bản cài đặt domain selection của vendor (domain cho cuộc gọi đi/SMS, ưu tiên loại mạng khi quét).' },
      { t: 'list', items: [
        '<b>Gọi khẩn cấp</b>: quét mạng khẩn cấp qua radio HAL (đặt emergency mode, kích hoạt/huỷ quét, thoát mode); kết quả báo qua radio indication.',
        '<b>Triển khai tham chiếu</b>: package <code>TelephonyDomainSelectionService</code> trong <code>packages/services/Telephony</code>.',
        '<b>Yêu cầu</b>: (1) system app khai báo service với <code>directBootAware="true"</code>, <code>persistent="true"</code>, quyền <code>BIND_DOMAIN_SELECTION_SERVICE</code>, intent filter <code>android.telephony.DomainSelectionService</code>; (2) device overlay <code>config_domain_selection_service_component_name</code>; app nằm trong <code>/system_ext/priv-app/</code> hoặc <code>/product/priv-app/</code> (không hỗ trợ bản tải về); (3) radio HAL hỗ trợ AIDL <code>IRadioNetwork</code> và <code>IRadioNetworkIndication</code>.',
        '<b>Kiểm chứng</b>: CTS <code>DomainSelectionServiceTestOnMockModem</code>.'
      ] }
    ] },
    { icon: '⌨️', title: 'RTT: Real-Time Text', blocks: [
      { t: 'list', items: [
        '<b>RTT</b> là tính năng tiếp cận cho người khiếm thính/nặng tai, thay thế teletypewriter (TTY): một số điện thoại dùng cho cả cuộc gọi thoại và RTT; văn bản truyền <b>từng ký tự</b> khi gõ; hỗ trợ liên lạc 911 và tương thích ngược TTY. Cần modem/SoC hỗ trợ RTT (trang nhắm Android 9; Android 8.0 có thể backport patch telephony).',
        '<b>Framework</b>: <code>Call.RttCall</code> và <code>Connection.RttTextStream</code> trong <code>android.telecom</code>; dùng Telecom API công khai và <code>@SystemApi</code> trong <code>android.telephony.ims</code>; IMS và modem là độc quyền của vendor.',
        '<b>IMS stack cần</b>: bật/tắt RTT qua <code>ImsConfig#setProvisionedValue(RTT_SETTING_ENABLED)</code>; báo trạng thái qua <code>ImsStreamMediaProfile#mRttMode</code>; cài <code>sendRttMessage</code>, <code>sendRttModifyRequest</code>, <code>sendRttModifyResponse</code> trong <code>ImsCallSession</code>; gọi callback trên <code>ImsCallSessionListener</code>.',
        '<b>Tuỳ biến</b>: overlay <code>config_support_rtt</code> và carrier flag <code>CarrierConfigManager.RTT_SUPPORTED_BOOL</code>; khi bật, xuất hiện trong Accessibility settings; mặc định tắt.',
        '<b>UI</b> trong <code>com.android.phone</code> và AOSP Dialer: thông báo khi RTT tắt, chọn chế độ RTT, màn hình in-call có bàn phím và điều khiển giọng nói, điều khiển trả lời riêng RTT, bản ghi có dấu thời gian.',
        '<b>Kiểm chứng</b>: CTS <code>android.cts.telecom.RttOperationsTest</code> (phần AOSP); vendor tự viết test cho IMS stack; test Dialer thủ công.'
      ] }
    ] },
    { icon: '📲', title: 'App gọi bên thứ ba', blocks: [
      { t: 'p', x: 'Trước Android 9 app gọi bên thứ ba dựa trên API Telephony (broadcast <code>PHONE_STATE</code>) và phải nhường ưu tiên cho cuộc gọi nhà mạng (thường từ chối cuộc gọi đến hoặc kết thúc cuộc gọi của chính mình). Android 9 thêm API cho gọi đồng thời: app nhận được cuộc gọi bên thứ ba trong lúc đang có cuộc gọi nhà mạng, framework <b>giữ (hold)</b> cuộc gọi nhà mạng khi người dùng trả lời.' },
      { t: 'list', items: [
        '<b>Self-managed ConnectionService</b>: cách khuyến nghị tích hợp Telecom framework (xem thư viện Core-Telecom).',
        '<b>Hold</b>: đặt <code>CAPABILITY_SUPPORT_HOLD</code> và <code>CAPABILITY_HOLD</code>; framework có xử lý dự phòng khi app không giữ được.',
        '<b>Call log</b>: app chọn tham gia bằng <code>EXTRA_LOG_SELF_MANAGED_CALLS</code> để ghi cuộc gọi vào call log hệ thống.',
        '<b>Yêu cầu với Dialer</b>: cảnh báo khi trả lời cuộc gọi nhà mạng sẽ ngắt cuộc gọi bên thứ ba không giữ được (kiểm tra <code>EXTRA_ANSWERING_DROPS_FG_CALL</code>, <code>EXTRA_ANSWERING_DROPS_FG_CALL_APP_NAME</code>); hiển thị mục bên thứ ba kèm tên app gốc — lấy <code>PhoneAccountHandle</code> từ cột <code>PHONE_ACCOUNT_COMPONENT_NAME</code>/<code>PHONE_ACCOUNT_ID</code>, hỏi <code>TelecomManager</code>, kiểm tra <code>CAPABILITY_SELF_MANAGED</code>, đọc <code>getLabel()</code> (CDD §7.4.1.2).',
        '<b>Android 17 (API 37)</b>: app VoIP tích hợp Core-Telecom/<code>CallsManager</code> có thể ghi lịch sử vào <code>CallLog.Calls</code>; thiết bị có telecom feature flag và vai trò <code>DIALER</code> phải có điều khiển tích hợp theo từng app (thường Settings > Calling accounts > Integrated call logs), phải có <code>PhoneAccountSettingsActivity</code> và resolve được <code>ACTION_CONFIGURE_CALL_LOG_INTEGRATION</code>; miễn với thiết bị không có flag/vai trò (một số tablet, laptop).',
        '<b>Kiểm chứng</b>: build test app Telecomm (<code>packages/services/Telecomm/testapps/</code>) bằng <code>mmma</code>, <code>adb install -g -r</code>; <code>CtsTelecomTestCases</code> (lỗi sẽ chặn chứng nhận Android 17+).'
      ] },
      { t: 'tip', x: 'Các trang khác của mục này (chưa đi sâu ở đây): 5G non-standalone, chặn số điện thoại, call notifications, Emergency Affordance, cơ sở dữ liệu số khẩn cấp Android, IMS service entitlement, IMS single registration, phone account suggestion, visual voicemail.' }
    ] }
  ],
  summary: [
    'ImsService (Android 9): MMTel, Emergency MMTel, RCS; bind carrier override trước, device default sau; chỉ system app priv-app.',
    'Số khẩn cấp lấy từ 5 nguồn; 112 và 911 luôn có; Radio HAL 1.4 có emergencyDial.',
    'Domain selection (Android 15+) chọn IMS hay CS; cần quyền BIND_DOMAIN_SELECTION_SERVICE và AIDL IRadioNetwork.',
    'RTT gửi từng ký tự; app gọi bên thứ ba dùng self-managed ConnectionService/Core-Telecom và hold cuộc gọi nhà mạng.'
  ],
  cards: [
    ['ImsService từ Android mấy?', 'Android 9.'],
    ['Quyền bind ImsService?', 'BIND_IMS_SERVICE.'],
    ['directBootAware nghĩa là?', 'Telephony chạy service trước khi mở khoá, nhưng không truy cập storage mã hoá thiết bị.'],
    ['persistent?', 'Hệ thống không kill service để lấy RAM (chỉ system app).'],
    ['MMTel là gì?', 'Media IMS cho thoại và video (IR.92, IR.94).'],
    ['Emergency MMTel?', 'Cho phép emergency attach vào IMS PDN; thiếu thì dùng CSFB.'],
    ['Carrier override vs device default?', 'Theo SIM/nhà mạng vs mặc định OEM (phải hỗ trợ Emergency MMTel).'],
    ['Số khẩn cấp luôn có theo 3GPP?', '112 và 911.'],
    ['Năm nguồn số khẩn cấp?', 'Network signaling, SIM, modem config, platform database, default list.'],
    ['isPotentialEmergencyNumber?', 'Số trùng chữ số đầu với số khẩn cấp (khi đang quay số).'],
    ['HAL gọi khẩn cấp?', 'emergencyDial trong IRadio (Radio HAL 1.4).'],
    ['Domain selection từ khi nào?', 'Android 15.'],
    ['Overlay domain selection?', 'config_domain_selection_service_component_name.'],
    ['RTT là gì?', 'Văn bản thời gian thực từng ký tự, thay TTY.'],
    ['Cờ bật RTT?', 'config_support_rtt và CarrierConfig RTT_SUPPORTED_BOOL.'],
    ['Self-managed ConnectionService?', 'Cách khuyến nghị để app gọi tích hợp Telecom.']
  ],
  quiz: [
    { q: 'ImsService được đưa vào ở:', o: ['Android 7', 'Android 9', 'Android 12', 'Android 15'], a: 1, e: 'System API giữa nền tảng và IMS vendor.' },
    { q: 'ImsService bên thứ ba tải từ Play:', o: ['Được hỗ trợ', 'Không được hỗ trợ', 'Chỉ Android 13', 'Chỉ khi root'], a: 1, e: 'Phải là system app trong priv-app.' },
    { q: 'Device default ImsService phải hỗ trợ:', o: ['RCS', 'Emergency MMTel', 'Video', 'Wi-Fi Calling'], a: 1, e: 'Phục vụ khi không có SIM.' },
    { q: 'Số luôn khả dụng theo 3GPP:', o: ['000', '112 và 911', '999', '110'], a: 1, e: 'Các số khác khi không có SIM.' },
    { q: 'Nguồn số khẩn cấp KHÔNG phải:', o: ['SIM', 'Network signaling', 'Danh bạ người dùng', 'Modem config'], a: 2, e: 'Danh bạ không phải nguồn.' },
    { q: 'Radio HAL gọi khẩn cấp:', o: ['dial', 'emergencyDial', 'sosCall', 'callEmergency'], a: 1, e: 'Từ Radio HAL 1.4.' },
    { q: 'Domain selection service từ:', o: ['Android 10', 'Android 12', 'Android 15', 'Android 17'], a: 2, e: 'Chọn IMS hay CS.' },
    { q: 'RTT truyền văn bản:', o: ['Cả câu khi gửi', 'Từng ký tự khi gõ', 'Theo lô 10 giây', 'Qua SMS'], a: 1, e: 'Real-time.' },
    { q: 'Cờ carrier bật RTT:', o: ['RTT_SUPPORTED_BOOL', 'ENABLE_RTT', 'RTT_ON', 'SUPPORT_TEXT'], a: 0, e: 'CarrierConfigManager.' },
    { q: 'Cuộc gọi bên thứ ba cần capability để được giữ:', o: ['CAPABILITY_HOLD', 'CAPABILITY_MUTE', 'CAPABILITY_RTT', 'CAPABILITY_VIDEO'], a: 0, e: 'Cùng CAPABILITY_SUPPORT_HOLD.' },
    { q: 'Ghi cuộc gọi self-managed vào call log bằng:', o: ['EXTRA_LOG_SELF_MANAGED_CALLS', 'LOG_ALL', 'EXTRA_RECORD', 'CALL_LOG_ON'], a: 0, e: 'App tự chọn tham gia.' }
  ],
  match: [
    ['MmTelFeature', 'Thoại/video qua IMS'],
    ['Emergency MMTel', 'Emergency attach IMS PDN'],
    ['emergencyDial', 'HAL gọi khẩn cấp'],
    ['DomainSelectionService', 'Chọn IMS hay CS'],
    ['RttCall', 'API văn bản thời gian thực'],
    ['Core-Telecom', 'Thư viện cho app gọi'],
    ['BIND_IMS_SERVICE', 'Quyền bind ImsService']
  ]
});
