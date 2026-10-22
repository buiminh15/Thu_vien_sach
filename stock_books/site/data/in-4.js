// Android Input & Interaction – Chương 4: Peripherals.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 4,
  title: 'Peripherals: phụ kiện âm thanh, Android Open Accessory, stylus',
  intro: 'Android dùng bộ giao thức chuẩn để xây phụ kiện và ngoại vi. Mục Peripherals có hai nhóm: <b>audio accessories</b> (giắc 3.5 mm, USB, Bluetooth) và <b>custom accessories</b> (giao thức <b>Android Open Accessory — AOA</b> và <b>stylus</b>). Chương này cũng nêu hành vi mong đợi của headset.',
  sections: [
    { icon: '🎧', title: 'Phụ kiện âm thanh', blocks: [
      { t: 'p', x: 'Gồm headset, bộ khuếch đại tai nghe, micro, DAC/ADC, dock. Ba đường truyền: giắc 3.5 mm, USB, Bluetooth (MIDI qua USB và BLE).' },
      { t: 'table', head: ['Đường truyền', 'Chi tiết'], rows: [
        ['<b>Giắc 3.5 mm</b>', 'Âm thanh stereo ra, micro mono vào; đặc tả headset định nghĩa trở kháng chuẩn và hành vi chức năng để headset chạy trên nhiều thiết bị (có hai đặc tả: headset và headset jack device)'],
        ['<b>USB</b>', 'Ba chế độ: <i>Development</i> (không hỗ trợ audio); <i>Accessory</i> (qua AOA 2.0, audio hạn chế cho phụ kiện tuỳ chỉnh); <i>Host</i> (Android cấp nguồn và điều khiển bus, hợp với headset USB theo đặc tả USB headset). Phụ kiện audio đầy đủ nên dùng host mode'],
        ['<b>Bluetooth</b>', 'Stream nhạc qua <b>A2DP</b>: phát cơ bản từ Android 1.5 (API 3); từ Android 3.0 (API 11) app quản lý kết nối A2DP bằng lớp <code>BluetoothA2dp</code>. Tài liệu tham khảo ADK 2012 (stack Bluetooth mã nguồn mở cho chip TI CC2564, dùng được với chip có HCI chuẩn)']
      ] },
      { t: 'h3', x: 'Hành vi mong đợi của headset (3.5 mm và USB)' },
      { t: 'p', x: 'Chỉ áp dụng khi không có phụ kiện audio khác (như Bluetooth) đang kết nối và mô tả hành vi mặc định, không điều khiển app dùng API định tuyến audio.' },
      { t: 'list', items: [
        '<b>Media</b>: âm thanh chỉ phát qua headset khi đã kết nối; nút play/pause chuyển đổi phát; volume up/down đổi theo bước cố định, giữ nút thì tăng/giảm dần tới tối đa hoặc im lặng; volume up từ trạng thái tắt tiếng tăng từng bước từ im lặng. Khi rút tai nghe app nên dừng đầu ra và pause; cắm lại không tự phát tiếp cho tới khi người dùng nhấn play.',
        '<b>Điện thoại</b>: cuộc gọi đang diễn ra chuyển sang headset mà không ngắt, micro không bị tắt khi chuyển; nút volume như media; mute/hang-up tuỳ thiết bị (thường nhấn ngắn = mute, nhấn dài = cúp máy).',
        '<b>Nút voice command</b>: điều khiển nội tuyến chuẩn mở trợ lý giọng nói; nhấn phát earcon hai âm báo thiết bị đang lắng nghe.',
        '<b>Thiết kế vật lý</b>: nút hướng về phía trước, đủ cách nhau để tìm bằng sờ; rộng > 5 mm, cách nhau ≥ 5 mm; headset 4 nút: nút D cách các nút khác ≥ 9 mm; nhãn A trống hoặc chấm, B dấu cộng hoặc mũi tên lên, C dấu trừ hoặc mũi tên xuống, D biểu tượng giọng nói; ngón tay không che cổng micro khi bấm.'
      ] },
      { t: 'widget', name: 'headset-behavior', title: 'Headset phản ứng thế nào?' }
    ] },
    { icon: '🔌', title: 'Android Open Accessory (AOA)', blocks: [
      { t: 'p', x: 'AOA cho phần cứng USB bên ngoài tương tác với thiết bị Android ở <b>accessory mode</b>: phụ kiện đóng vai <b>USB host</b> (cấp nguồn bus, liệt kê thiết bị), còn thiết bị Android là <b>USB accessory</b> — đảo ngược vai trò thông thường, giúp cả thiết bị Android cũ chỉ làm được USB device.' },
      { t: 'list', items: [
        '<b>Yêu cầu phụ kiện</b>: tuân AOA và cấp <b>500 mA tại 5 V</b> để sạc.',
        '<b>Phụ thuộc phần cứng</b>: không phải thiết bị nào cũng hỗ trợ accessory mode; app lọc bằng <code>&lt;uses-feature&gt;</code> trong manifest.',
        '<b>Phiên bản</b>: <b>AOAv1</b> — giao tiếp phụ kiện chung và gỡ lỗi adb; <b>AOAv2</b> — thêm hỗ trợ <b>HID</b> (và audio hạn chế như nêu ở trên), có từ Android 4.1 (API 16).',
        'Ví dụ ứng dụng: đồng hồ báo thức, bàn phím, bộ điều nhiệt, robot. Chi tiết giao thức ở các trang AOA 1.0, AOA 2.0 và “Disable data signaling over USB”.'
      ] }
    ] },
    { icon: '🖊️', title: 'Stylus', blocks: [
      { t: 'list', items: [
        '<b>Nền tảng</b>: Android 6.0+ dùng bút Bluetooth qua Bluetooth cổ điển, BTLE hoặc USB với định dạng dữ liệu chung. OEM phải hỗ trợ <b>Bluetooth cổ điển</b>; BTLE được khuyến nghị để tương thích rộng. Nền tảng căn thời gian giữa chạm và dữ liệu bút rồi giao các sự kiện kết hợp cho app đang hoạt động dạng <code>MotionEvent</code>.',
        '<b>Mô tả dữ liệu bằng HID descriptor</b>: có thể gồm áp suất, tẩy, nút, ID thiết bị, mức pin, trạng thái sạc. Descriptor mẫu: áp suất đầu bút 10-bit (0–1023), công tắc barrel và secondary barrel, công tắc đầu bút, cờ invert, số seri transducer 128-bit. Descriptor phải khớp với những gì bút thực sự báo (tập con bất kỳ).',
        '<b>Nút bấm</b>: Android 14+ nhấn nút bút còn sinh <code>KeyEvent</code> nội bộ; test <code>StylusButtonInputEventTest</code> giả lập bút để kiểm báo cáo nút. Phiên bản cũ hơn: tự dựng phụ kiện/giả lập bút.',
        '<b>Nhà phát triển ứng dụng</b>: nền tảng lo ghép đôi và tương quan sự kiện nên app mới và cũ đều hỗ trợ bút Bluetooth mặc định.'
      ] }
    ] }
  ],
  summary: [
    'Audio accessories: 3.5 mm, USB (host mode cho audio đầy đủ), Bluetooth A2DP.',
    'Headset: nút play/pause, volume theo bước, rút tai nghe nên pause, kích thước nút > 5 mm.',
    'AOA: phụ kiện làm USB host, cấp 500 mA @ 5 V; AOAv2 thêm HID (Android 4.1+).',
    'Stylus (Android 6.0+): Bluetooth cổ điển bắt buộc, HID descriptor, nút bút tạo KeyEvent từ Android 14.'
  ],
  cards: [
    ['Ba đường truyền audio accessory?', 'Giắc 3.5 mm, USB, Bluetooth.'],
    ['USB mode nào cho audio đầy đủ?', 'Host mode.'],
    ['Accessory mode audio?', 'Hạn chế, qua AOA 2.0.'],
    ['A2DP là gì?', 'Advanced Audio Distribution Profile để stream nhạc qua Bluetooth.'],
    ['Lớp quản lý A2DP trong app?', 'BluetoothA2dp (API 11+).'],
    ['Rút tai nghe nên làm gì?', 'Dừng đầu ra và pause; cắm lại không tự phát tiếp.'],
    ['Cuộc gọi khi cắm headset?', 'Chuyển sang headset không ngắt, micro không bị tắt.'],
    ['Kích thước nút headset?', '> 5 mm, cách nhau ≥ 5 mm (nút D 4-nút: ≥ 9 mm).'],
    ['AOA là gì?', 'Android Open Accessory — phụ kiện USB host tương tác thiết bị Android.'],
    ['AOA yêu cầu nguồn?', '500 mA tại 5 V.'],
    ['AOAv2 thêm gì?', 'HID (Android 4.1 / API 16).'],
    ['Lọc thiết bị hỗ trợ accessory mode?', '<uses-feature> trong manifest.'],
    ['Stylus yêu cầu kết nối nào?', 'Bluetooth cổ điển (BTLE khuyến nghị).'],
    ['Stylus mô tả dữ liệu bằng?', 'HID descriptor.'],
    ['Nút stylus từ Android 14?', 'Sinh thêm KeyEvent nội bộ.']
  ],
  quiz: [
    { q: 'USB mode hỗ trợ audio phụ kiện đầy đủ:', o: ['Development', 'Accessory', 'Host', 'Không mode nào'], a: 2, e: 'Accessory chỉ hạn chế.' },
    { q: 'Rút tai nghe thì app nên:', o: ['Tăng volume', 'Dừng đầu ra và pause', 'Tự phát tiếp', 'Tắt máy'], a: 1, e: 'Cắm lại không tự resume.' },
    { q: 'Trong AOA, phụ kiện đóng vai:', o: ['USB device', 'USB host', 'Hub', 'Charger thuần'], a: 1, e: 'Cấp nguồn và liệt kê.' },
    { q: 'Nguồn tối thiểu phụ kiện AOA phải cấp:', o: ['100 mA @ 5 V', '500 mA @ 5 V', '1 A @ 9 V', '2 A @ 12 V'], a: 1, e: 'Để sạc thiết bị.' },
    { q: 'AOAv2 có từ:', o: ['Android 2.3', 'Android 4.1 (API 16)', 'Android 6.0', 'Android 10'], a: 1, e: 'Thêm HID.' },
    { q: 'OEM phải hỗ trợ stylus qua:', o: ['Chỉ USB', 'Bluetooth cổ điển', 'Chỉ BLE', 'Wi-Fi'], a: 1, e: 'BTLE là khuyến nghị.' },
    { q: 'Từ Android 14 nút stylus cũng tạo:', o: ['Broadcast', 'KeyEvent', 'Notification', 'Intent'], a: 1, e: 'Test StylusButtonInputEventTest.' },
    { q: 'Voice command button phát:', o: ['Rung', 'Earcon hai âm', 'Đèn', 'Không gì'], a: 1, e: 'Báo thiết bị đang lắng nghe.' },
    { q: 'Nhãn nút D của headset 4 nút:', o: ['Dấu cộng', 'Dấu trừ', 'Biểu tượng giọng nói', 'Chấm'], a: 2, e: 'A trống/chấm, B +, C −.' },
    { q: 'Cuộc gọi khi cắm headset:', o: ['Bị ngắt', 'Chuyển sang headset, micro không tắt', 'Chuyển loa ngoài', 'Tạm dừng'], a: 1, e: 'Theo hành vi mong đợi.' }
  ],
  match: [
    ['A2DP', 'Stream nhạc Bluetooth'],
    ['AOA', 'Phụ kiện USB host'],
    ['HID descriptor', 'Mô tả dữ liệu stylus'],
    ['USB host mode', 'Audio đầy đủ'],
    ['BluetoothA2dp', 'Lớp quản lý A2DP'],
    ['StylusButtonInputEventTest', 'Test nút stylus'],
    ['earcon', 'Âm báo ngắn']
  ]
});
