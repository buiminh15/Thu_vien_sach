// Android Connectivity – Chương 1: Bluetooth.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospconn = BOOK_DATA.aospconn || { chapters: [] };
BOOK_DATA.aospconn.chapters.push({
  n: 1,
  title: 'Bluetooth: stack, BLE, ASHA và HCI',
  intro: 'Android có stack Bluetooth mặc định hỗ trợ cả <b>Classic Bluetooth</b> và <b>Bluetooth Low Energy (BLE)</b>. Chương này nói về kiến trúc các lớp, BLE (vai trò, quảng bá, quét, lọc ở controller), <b>ASHA</b> (âm thanh cho máy trợ thính qua BLE) và các yêu cầu <b>HCI</b> riêng của Android với controller.',
  sections: [
    { icon: '📶', title: 'Kiến trúc stack Bluetooth', blocks: [
      { t: 'list', items: [
        'Hỗ trợ Classic Bluetooth và BLE để tạo mạng cá nhân (PAN) gửi/nhận dữ liệu. <b>BLE</b> có từ Android 4.3 và yêu cầu chipset BLE + các <b>HCI requirements</b> của Android; không tương thích ngược với chipset cũ. Android 8.0 qualify đầy đủ <b>Bluetooth 5</b> — dùng tính năng BT5 cần chipset BT5.',
        'Stack được Bluetooth SIG qualify (QDID 169365); phát triển trong AOSP.'
      ] },
      { t: 'table', head: ['Lớp', 'Vị trí / vai trò'], rows: [
        ['1. <b>App framework</b>', 'Ứng dụng dùng API <code>android.bluetooth</code>, đến tiến trình Bluetooth qua Binder IPC'],
        ['2. <b>Bluetooth app</b>', '<code>packages/modules/Bluetooth/android/app</code> — cài đặt các profile Bluetooth ở tầng framework'],
        ['3. <b>JNI</b>', '<code>.../android/app/jni</code> — gọi vào stack (ví dụ discovery)'],
        ['4. <b>Bluetooth stack</b>', '<code>packages/modules/Bluetooth/system</code> — cài đặt Bluetooth HAL chung, tuỳ biến qua extension và cấu hình'],
        ['5. <b>Vendor implementation</b>', 'Vendor kết nối với stack qua interface trong <code>hardware/interfaces/bluetooth</code> (trang tài liệu nhắc HIDL)']
      ] },
      { t: 'tip', x: 'Các trang con của mục Bluetooth: Bluetooth services, Bluetooth Low Energy, Hearing aid audio support using BLE, BLE advertising, Verify and debug, HCI requirements, Android OS identification.' }
    ] },
    { icon: '🔋', title: 'Bluetooth Low Energy (BLE)', blocks: [
      { t: 'list', items: [
        'BLE gửi các cụm dữ liệu ngắn, <b>ngủ khi không kết nối</b> nên dùng ít năng lượng và băng thông hơn Classic; phù hợp cảm biến nhịp tim, bàn phím không dây.',
        'Mọi profile ứng dụng BLE hiện tại xây trên <b>GATT</b> (Generic Attribute Profile): thiết bị gửi thông tin là <b>GATT server</b>, thiết bị nhận là <b>client</b>; Android có API cho cả hai vai trò.',
        '<b>Vai trò</b>: <i>peripheral</i> (phát quảng bá — advertisement), <i>central</i> (quét), hoặc cả hai. Thiết bị Bluetooth 4.1 trở xuống chỉ hỗ trợ central; một số chipset cũ không có peripheral mode.',
        '<b>Quét và vị trí</b>: quét BLE có thể nhận diện đối tượng dùng định vị nên thường cần quyền vị trí; “tắt dịch vụ vị trí là tắt quét Bluetooth”. Android 12+: ứng dụng khai báo <code>neverForLocation</code> nhận kết quả quét khi vị trí tắt; các quyền <code>BLUETOOTH_SCAN</code>, <code>BLUETOOTH_ADVERTISE</code>, <code>BLUETOOTH_CONNECT</code> cho phép quét không cần quyền vị trí. Người dùng có thể tắt quét nền hệ thống.',
        '<b>Lọc và tiết kiệm điện</b>: từ Android 6.0, lọc và khớp kết quả quét chạy <b>trên controller</b>; controller báo <code>OnFound</code>/<code>OnLost</code> nên AP không phải thức cho mỗi advertisement; <b>batch scanning</b> đẩy việc cho firmware để giảm wakeup. Bộ lọc dùng lệnh HCI Advertising Packet Content Filter.'
      ] },
      { t: 'widget', name: 'ble-role', title: 'Vai trò BLE nào?' }
    ] },
    { icon: '🦻', title: 'ASHA: âm thanh máy trợ thính qua BLE', blocks: [
      { t: 'p', x: 'Máy trợ thính nhận âm thanh qua BLE bằng kênh <b>L2CAP connection-oriented (CoC)</b>. Thiết kế dùng <b>bộ đệm đàn hồi</b> vài gói âm thanh để giữ luồng ổn định khi mất gói, đổi lại thêm độ trễ. Theo Bluetooth Core Spec 6.0, giá trị nhiều byte là little-endian.' },
      { t: 'list', items: [
        '<b>Topology</b>: một <i>central</i> (thiết bị Android, quét advertisement) và hai <i>peripheral</i> (trợ thính trái/phải) được coi là <b>một audio sink</b>. Thiếu một bên thì central trộn hai kênh thành mono gửi bên còn lại; mất cả hai thì chuyển sang đầu ra khác. Không có audio ngược nên cuộc gọi dùng micro của central.',
        '<b>Yêu cầu hệ thống</b>: controller BT 4.2+ (khuyến nghị LE Secure Connections); hai link LE đồng thời ở central, ≥ 1 ở peripheral; LE credit-based flow control với MTU/MPS ≥ <b>167 byte</b> và đệm 8 gói; LE data length extension payload ≥ 167 byte; lệnh HCI LE Connection Update; khuyến nghị PHY 2M (link audio phải đạt ≥ 64 kbit/s ở cả 1M và 2M; <b>không dùng long-range PHY</b>); mã hoá link-layer và frequency hopping.',
        '<b>GATT service</b> UUID <code>0xFDF0</code> (quảng bá ở general discoverable mode; mọi streaming cần mã hoá). Characteristics: <b>ReadOnlyProperties</b> (version 0x01, capabilities, HiSyncId, feature map, RenderDelay ms, codec bitmask — codec duy nhất là <b>G.722 16 kHz, 64 kbit/s</b>), <b>AudioControlPoint</b> (Start = 1, Stop = 2, Status = 3), <b>AudioStatusPoint</b> (0 thành công, −1 lệnh lạ, −2 tham số sai), <b>Volume</b> (byte có dấu −128…0 tương ứng −48 dB…0 dB, −128 = tắt tiếng), <b>LE_PSM_OUT</b> (PSM kênh audio). Peripheral cũng phải có Device Information Service.',
        '<b>Advertising</b>: chứa UUID dịch vụ ASHA và service data (version, capability, 4 byte cao của HiSyncId); Complete Local Name không được ghi trái/phải; nên quảng bá nhanh khi ghép đôi ban đầu.',
        '<b>Đồng bộ</b>: số thứ tự 8-bit gắn trước mỗi gói audio, quay vòng mỗi 256 gói; central cấp cùng số cho các gói phải phát đồng thời; gửi trigger (Start/Status) khi kết nối/ngắt/đổi tham số có thể ảnh hưởng đồng bộ.',
        '<b>Định dạng gói</b>: mỗi frame khớp connection interval (20 ms @ 16 kHz = 320 mẫu); mỗi frame là một gói L2CAP trong một gói LE; mỗi connection event mang 2 gói audio + 2 gói rỗng để ack. G.722: interval 20 ms, độ dài event 5000 µs (1M PHY) hoặc 3750 µs (2M PHY), payload 160 byte.',
        '<b>Thiết lập stream</b>: đọc PSM (và RenderDelay) → mở CoC với 8 credit → connection update theo codec → chờ hoàn tất → khởi động lại encoder, reset sequence = 0, gửi <b>Start</b> và chờ success → peripheral phát frame 0. <b>Stop</b> kết thúc stream; central giữ kết nối GATT khi rảnh; peripheral không được yêu cầu connection update.',
        '<b>Độ trễ</b>: đệm sâu 8 frame ⇒ trễ mạng ≈ 8 × connection interval; interval ngắn hơn được ưu tiên.'
      ] },
      { t: 'widget', name: 'asha-latency', title: 'Độ trễ ASHA theo connection interval' }
    ] },
    { icon: '🧪', title: 'HCI requirements (vendor-specific)', blocks: [
      { t: 'p', x: 'Android định nghĩa các lệnh HCI riêng cho controller; host stack dùng khả năng controller báo để bật tính năng. Khi một tính năng trở thành chuẩn, Android ưu tiên cách HCI chuẩn. Tham chiếu Core Spec 5.2 cho hành vi chuẩn.' },
      { t: 'table', head: ['Lệnh (OCF)', 'Chức năng'], rows: [
        ['<code>0x153</code> LE_Get_Vendor_Capabilities', 'Trả về tập tính năng: dung lượng lưu kết quả quét, danh sách IRK, lọc, mask codec offload A2DP (SBC, AAC, aptX, aptX HD, LDAC, Opus), A2DP offload v2, ISO link feedback, sniff offload, ngưỡng proximity, khoảng connection handle vendor; version spec Google hiện v1.06. Một số trường cũ deprecated sau v0.98 (nhường cho LE Extended Advertising và Privacy)'],
        ['<code>0x156</code> Batch scanning', 'Lưu kết quả quét trong controller giảm wakeup host; chế độ truncated (MAC, TX power, RSSI, timestamp) và full (thêm adv + scan response); timestamp đơn vị 50 ms'],
        ['<code>0x157</code> APCF', 'Advertising Packet Content Filter: lọc trên controller theo địa chỉ, service UUID, solicitation UUID, tên, manufacturer data, service data, TDS, AD type; giao hàng immediate/batched/on-found; ngưỡng RSSI cao/thấp; OnFound/OnLost; không áp dụng cho periodic advertising'],
        ['<code>0x159</code> Energy', 'Báo tổng thời gian Tx, Rx, idle và năng lượng dùng; xoá bộ đếm khi đọc'],
        ['<code>0x15A</code> Extended scan params', 'Bỏ giới hạn 10,24 giây của Core spec cho scan interval/window'],
        ['<code>0x15B</code> Debug', 'Lấy dữ liệu debug nhị phân của controller (subevent 0x57)'],
        ['<code>0x15D</code> A2DP offload', 'Subcommand cũ 0x01/0x02 chỉ cho codec mã nguồn mở; 0x03/0x04 không phụ thuộc codec, truyền tham số vendor từ Bluetooth Audio HAL'],
        ['<code>0x15E</code> Bluetooth Quality Report', 'Bật/tắt sự kiện bằng mask 32-bit: giám sát chất lượng, sắp LSTO, choppiness A2DP/(e)SCO/LE Audio, connect failure, “root inflammation” (lỗi nghiêm trọng cần restart), energy, RF stats, debug/trace'],
        ['<code>0x15F</code> Dynamic audio buffer', 'Truy vấn thời gian buffer mặc định/min/max theo codec và đặt giá trị hiện tại (ms)'],
        ['<code>0xFD66</code> Connection proximity threshold (v1.06)', 'Thêm thiết bị vào Filter Accept List kèm ngưỡng path loss và RSSI dự phòng; chỉ kết nối khi tín hiệu đạt ngưỡng'],
        ['<code>0xFD65</code> LE BIG channel map classification (v1.06)', 'Cho nguồn broadcast điều chỉnh channel map BIG theo phân loại kênh của các peer ACL (earbuds trong Personal Audio Sharing); thuật toán gộp tuỳ vendor']
      ] },
      { t: 'list', items: [
        'Sự kiện vendor: <code>0x54</code> vượt ngưỡng lưu trữ, <code>0x55</code> đổi trạng thái multi-advertising, <code>0x56</code> tìm thấy/mất advertisement, <code>0x57</code> thông tin debug controller, <code>0x58</code> các subevent Bluetooth Quality Report (energy monitor 0x06, root inflammation 0x05).'
      ] },
      { t: 'warn', x: 'Trang HCI requirements rất dài và bản tôi đọc bị cắt ở phần cuối (khoảng 38 nghìn ký tự cuối chưa đọc) nên danh sách trên chỉ gồm các lệnh vendor-specific hiển thị; hãy xem trang gốc cho phần còn lại.' }
    ] }
  ],
  summary: [
    'Stack Bluetooth gồm 5 lớp: app framework → Bluetooth app → JNI → stack → vendor implementation.',
    'BLE xây trên GATT; central/peripheral; lọc và batch scan ngay trên controller giúp tiết kiệm điện.',
    'ASHA: G.722 16 kHz/64 kbit/s qua L2CAP CoC, service 0xFDF0, bộ đệm 8 frame, đồng bộ bằng sequence number.',
    'HCI vendor commands (OCF 0x153–0x15F, 0xFD65/66): capabilities, batch scan, APCF, A2DP offload, quality report…'
  ],
  cards: [
    ['BLE có từ Android nào?', 'Android 4.3.'],
    ['Android 8.0 và Bluetooth 5?', 'Qualify đầy đủ; cần chipset BT5 để dùng tính năng BT5.'],
    ['Bluetooth app nằm ở đâu?', 'packages/modules/Bluetooth/android/app.'],
    ['Stack Bluetooth nằm ở đâu?', 'packages/modules/Bluetooth/system.'],
    ['GATT server/client?', 'Server gửi thông tin; client nhận.'],
    ['Peripheral vs central?', 'Peripheral phát advertisement; central quét.'],
    ['Thiết bị BT 4.1 trở xuống?', 'Chỉ hỗ trợ central mode.'],
    ['neverForLocation (Android 12+)?', 'Nhận kết quả quét BLE khi vị trí tắt.'],
    ['Lọc quét từ Android 6.0?', 'Chạy trên controller, báo OnFound/OnLost.'],
    ['ASHA codec?', 'G.722 16 kHz, 64 kbit/s.'],
    ['UUID dịch vụ ASHA?', '0xFDF0.'],
    ['MTU/MPS tối thiểu ASHA?', '167 byte, đệm 8 gói.'],
    ['Độ trễ ASHA ≈?', '8 × connection interval.'],
    ['ASHA AudioControlPoint opcode?', 'Start = 1, Stop = 2, Status = 3.'],
    ['OCF 0x153?', 'LE_Get_Vendor_Capabilities.'],
    ['APCF là gì?', 'Advertising Packet Content Filter — lọc advertisement trên controller.']
  ],
  quiz: [
    { q: 'Profile ứng dụng BLE xây trên:', o: ['RFCOMM', 'GATT', 'SDP', 'AVRCP'], a: 1, e: 'Generic Attribute Profile.' },
    { q: 'Thiết bị phát advertisement đóng vai:', o: ['Central', 'Peripheral', 'Client', 'Host'], a: 1, e: 'Central quét.' },
    { q: 'Từ Android 6.0 lọc quét BLE chạy ở:', o: ['App', 'Controller', 'Kernel', 'Cloud'], a: 1, e: 'Giảm wakeup AP.' },
    { q: 'Quyền cho phép quét BLE không cần vị trí (Android 12):', o: ['BLUETOOTH_SCAN', 'INTERNET', 'CAMERA', 'READ_SMS'], a: 0, e: 'Cùng BLUETOOTH_ADVERTISE, BLUETOOTH_CONNECT.' },
    { q: 'ASHA dùng kênh nào để truyền audio?', o: ['SCO', 'L2CAP CoC', 'A2DP', 'RFCOMM'], a: 1, e: 'Connection-oriented channel.' },
    { q: 'Codec ASHA duy nhất được định nghĩa:', o: ['AAC', 'SBC', 'G.722 16 kHz', 'LC3'], a: 2, e: 'Bitrate 64 kbit/s.' },
    { q: 'Long-range PHY với ASHA:', o: ['Bắt buộc', 'Không được dùng', 'Khuyến nghị', 'Tuỳ chọn'], a: 1, e: 'Chỉ 1M và 2M.' },
    { q: 'Sequence number ASHA dài:', o: ['4 bit', '8 bit', '16 bit', '32 bit'], a: 1, e: 'Quay vòng mỗi 256 gói.' },
    { q: 'Volume -128 nghĩa là:', o: ['-48 dB', '0 dB', 'Tắt tiếng', 'Lỗi'], a: 2, e: 'Khoảng −128..0 ứng với −48..0 dB.' },
    { q: 'Lệnh HCI cho batch scanning (OCF):', o: ['0x153', '0x156', '0x15E', '0xFD66'], a: 1, e: '0x153 là capabilities.' },
    { q: 'Bluetooth Quality Report có OCF:', o: ['0x15E', '0x159', '0x15A', '0x157'], a: 0, e: 'Báo cáo chất lượng qua mask 32-bit.' }
  ],
  match: [
    ['GATT', 'Nền tảng profile BLE'],
    ['ASHA', 'Audio trợ thính qua BLE'],
    ['L2CAP CoC', 'Kênh audio ASHA'],
    ['APCF', 'Lọc quảng bá trên controller'],
    ['OCF 0x153', 'Vendor capabilities'],
    ['neverForLocation', 'Quét không cần vị trí'],
    ['G.722', 'Codec ASHA']
  ]
});
