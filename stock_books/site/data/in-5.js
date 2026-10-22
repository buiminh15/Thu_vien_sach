// Android Input & Interaction – Chương 5: Sensors.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 5,
  title: 'Sensors: stack, loại cảm biến, batching, reporting mode, HAL AIDL',
  intro: 'Cảm biến Android gồm gia tốc kế, con quay, từ kế, khí áp, độ ẩm, ánh sáng, tiệm cận, nhịp tim… Mỗi cảm biến là một “thiết bị ảo” cung cấp dữ liệu, được đặc tả trong HAL (<code>sensors.h</code>). Camera, vân tay, micro và màn hình cảm ứng <b>không</b> thuộc phạm vi vì có cơ chế riêng và băng thông lớn hơn nhiều.',
  sections: [
    { icon: '🧱', title: 'Sensor stack', blocks: [
      { t: 'p', x: 'Điều khiển đi xuống từ app tới cảm biến, dữ liệu đi lên; mỗi tầng chỉ giao tiếp với tầng ngay trên/dưới (một số cảm biến có thể bỏ qua sensor hub).' },
      { t: 'table', head: ['Tầng', 'Vai trò'], rows: [
        ['<b>SDK</b>', 'App liệt kê cảm biến và đăng ký; nêu tần số lấy mẫu mong muốn và độ trễ báo cáo tối đa — nền tảng có thể giao nhanh/sớm hơn yêu cầu'],
        ['<b>Framework</b>', 'Ghép kênh truy cập cảm biến giữa các app vì HAL là <b>single-client</b>: app đầu tiên đăng ký thì kích hoạt cảm biến trong HAL; nhiều app thì dùng tần số cao nhất và độ trễ thấp nhất được yêu cầu; app cuối huỷ đăng ký thì tắt cảm biến để tiết kiệm điện. App không cấu hình thêm tham số hay gửi dữ liệu xuống cảm biến. Có sensor fusion mặc định cho rotation vector, gravity, linear acceleration khi có cảm biến phần cứng mà thiếu cảm biến hợp nhất (không được bảo trì, kém chính xác và kém tiết kiệm điện hơn bản vendor, có thể làm CTS thất bại)'],
        ['<b>Framework internals</b>', 'JNI ở <code>frameworks/base/core/jni/</code> nối gói Java <code>android.hardware</code> với native; native framework ở <code>frameworks/native/</code>; proxy Binder IPC'],
        ['<b>HAL</b>', 'Ranh giới framework ↔ driver phần cứng; giao diện <code>sensors.h</code> ở <code>hardware/libhardware/include/hardware</code>; nhà sản xuất cài. Phiên bản khai báo trong device structure; framework hỗ trợ 1.0 và 1.3 (1.0 sắp bỏ, nên lên 1.3)'],
        ['<b>Kernel drivers</b>', 'Tương tác trực tiếp phần cứng cảm biến; có khi gộp với HAL, có khi chip vendor cấp driver còn integrator viết HAL'],
        ['<b>Sensor hub</b> (tuỳ chọn)', 'Tính toán công suất thấp khi AP ngủ (đếm bước, sensor fusion) và thường cung cấp batching qua FIFO phần cứng; nên đủ bộ nhớ cho batching và tiêu thụ rất thấp; gợi ý hai đường ngắt hub → SoC, một cho cảm biến wake-up và một cho non-wake-up'],
        ['<b>Cảm biến vật lý</b>', 'Chip MEMS; một chip thường gồm nhiều cảm biến (gia tốc, con quay, từ kế), có chip kèm phát hiện chuyển động/bước. Yêu cầu CDD về độ chính xác và điện năng áp dụng cho cảm biến Android, ràng buộc việc chọn cảm biến vật lý']
      ] },
      { t: 'list', items: [
        'Android không quy định cách kết nối cảm biến với SoC: hub công suất thấp, I2C/SPI, kiến trúc phân cấp (xử lý đơn giản tại chip cảm biến, phức tạp hơn tại vi điều khiển), batching.',
        '<b>Sensor type</b>: tên chính thức tiền tố <code>SENSOR_TYPE_</code> (có trong SDK và được CTS kiểm); nhà sản xuất có thể định nghĩa loại tạm không tài liệu cho phần cứng mới (CTS không kiểm, phải chuyển sang loại chính thức khi có). Một thiết bị có thể có nhiều cảm biến cùng loại, thường cặp wake-up/non-wake-up; app thường xin cảm biến mặc định của loại đó (thường là cái đầu danh sách).',
        '<b>Sensor event</b>: handle của cảm biến, timestamp theo <code>SystemClock.elapsedRealtimeNanos()</code>, dữ liệu phụ thuộc loại. Nguồn chuẩn cho nhà sản xuất là <code>sensors.h</code>; CDD có yêu cầu cảm biến nhưng khá “dễ dãi” nên đạt CDD chưa chắc cảm biến chất lượng cao.'
      ] }
    ] },
    { icon: '🧭', title: 'Các loại cảm biến', blocks: [
      { t: 'p', x: 'Giá trị cảm biến theo hệ trục gắn với thiết bị. Trên di động, trục theo hướng tự nhiên của màn hình và <b>không đổi khi xoay màn hình</b>. Trên ô tô: hệ trục thân xe, gốc ở tâm trục sau, X sang phải, Y về phía trước, Z lên trên.' },
      { t: 'h3', x: 'Base sensors' },
      { t: 'p', x: 'Đặt tên theo cảm biến vật lý. Dữ liệu <b>không phải raw</b>: đã hiệu chỉnh bias, nhiệt độ… nên đặc tính thực (bias, điện năng) có thể khác datasheet.' },
      { t: 'table', head: ['Cảm biến', 'Đơn vị / đầu ra'], rows: [
        ['Accelerometer', 'm/s² (có cả trọng lực: máy đặt phẳng đọc ≈ +9,81 trên Z)'],
        ['Gyroscope', 'rad/s, dương ngược chiều kim đồng hồ theo quy tắc bàn tay phải'],
        ['Magnetometer', 'µT'],
        ['Light', 'lux (SI)'],
        ['Pressure (barometer)', 'hPa'],
        ['Proximity', 'cm khoảng cách tới bề mặt gần nhất (một số chỉ near/far)'],
        ['Ambient temperature', '°C'],
        ['Relative humidity', '%'],
        ['Heart rate', 'BPM, có trường status bắt đầu unreliable khi vừa kích hoạt'],
        ['Hinge angle', 'độ giữa hai phần thiết bị']
      ] },
      { t: 'h3', x: 'Composite sensors' },
      { t: 'list', items: [
        'Suy ra bằng hợp nhất/xử lý từ một hay nhiều cảm biến vật lý. Nhóm: <b>Activity</b> (linear acceleration, significant motion, step counter, step detector, tilt detector), <b>Attitude</b> (rotation vector, game rotation vector, geomagnetic rotation vector, gravity, orientation — deprecated), <b>Interaction</b> (wake-up/pick-up/glance gesture; phần cứng không quy định nhưng phải công suất thấp), <b>Uncalibrated</b> (gyroscope/magnetometer/accelerometer báo bias riêng thay vì tự hiệu chỉnh).',
        'Rotation vector báo quaternion đơn vị và độ chính xác heading ước lượng (radian); game rotation vector không dùng từ kế và đặt accuracy = 0; orientation deprecated, báo azimuth/pitch/roll (độ). Step detector, step counter, significant motion, tilt detector bắt buộc low power và một số không được giả lập trong HAL.',
        '<b>Limited-axes IMU</b> (Android 13+): báo trục X/Y/Z nào được hỗ trợ bằng 1,0 hoặc 0 ở ba giá trị cuối (trục không hỗ trợ phải đọc 0); composite limited-axes chỉ bật trên ô tô. <b>Heading ô tô</b>: hướng so với bắc thật, độ chính xác 68%.'
      ] },
      { t: 'widget', name: 'sensor-units', title: 'Cảm biến nào đo đại lượng này?' }
    ] },
    { icon: '📣', title: 'Reporting modes và wake-up', blocks: [
      { t: 'key', x: 'Mỗi loại cảm biến có <b>một và chỉ một</b> reporting mode.' },
      { t: 'table', head: ['Mode', 'Hành vi', 'Ví dụ'], rows: [
        ['<b>Continuous</b>', 'Phát sự kiện theo tần số cố định đặt bởi <code>sampling_period_ns</code> truyền cho <code>batch</code>', 'Accelerometer, gyroscope, rotation vector'],
        ['<b>On-change</b>', 'Chỉ báo khi giá trị khác lần đọc trước. Kích hoạt ở mức HAL (<code>activate(..., enable=1)</code>) phải tạo sự kiện ngay. <code>sampling_period_ns</code> là khoảng cách tối thiểu giữa các sự kiện', 'Step counter, proximity, heart rate, light'],
        ['<b>One-shot</b> (trigger)', 'Tự tắt sau khi phát hiện sự kiện rồi báo một lần qua HAL; im lặng tới khi kích hoạt lại. Phải <b>tắt trước khi báo</b> để tránh race. Bỏ qua <code>sampling_period_ns</code> và <code>max_report_latency_ns</code>; không giữ trong FIFO phần cứng, báo ngay', 'Significant motion, gesture'],
        ['<b>Special</b>', 'Thời điểm sự kiện định nghĩa theo từng loại (một sự kiện mỗi bước, mỗi lần nghiêng…)', 'Step detector, tilt detector']
      ] },
      { t: 'list', items: [
        'Ví dụ on-change: step counter với chu kỳ 10 s, đi bộ 55 s rồi đứng yên 1 phút → khoảng mỗi 10 s có sự kiện trong phút đi bộ (kể cả t=0 và t=60, tổng 7); phút đứng yên không có vì số đếm không đổi.',
        '<code>getDefaultSensor()</code> trả cảm biến <b>wake-up</b> (đánh thức SoC khỏi suspend) hoặc <b>non-wake-up</b>. Proximity, significant motion, tilt detector, hinge angle, gesture thường là wake-up; phần lớn còn lại non-wake-up.'
      ] },
      { t: 'widget', name: 'sensor-mode', title: 'Reporting mode nào?' }
    ] },
    { icon: '🗃️', title: 'Batching', blocks: [
      { t: 'p', x: '“Batching refers to buffering sensor events in a sensor hub and/or hardware FIFO.” Không batching thì sự kiện báo ngay khi có. Batching khác với hàm HAL <code>batch()</code> (cấu hình tần số báo cáo và độ trễ tối đa). Chỉ áp dụng khi cảm biến có FIFO phần cứng hoặc đệm ở sensor hub và phải báo <code>SensorInfo.fifoMaxEventCount</code> (và <code>fifoReservedEventCount</code> nếu có dành riêng).' },
      { t: 'list', items: [
        '<b>Khi nào gom</b>: độ trễ báo cáo tối đa > 0, hoặc AP đang suspend và cảm biến là non-wake-up.',
        '<b><code>sampling_period_ns</code></b>: ý nghĩa theo reporting mode (continuous: tần số lấy mẫu; on-change: giới hạn tốc độ; one-shot: bỏ qua); giá trị ngoài <code>minDelay</code>/<code>maxDelay</code> bị kẹp; Android không hỗ trợ > 1000 Hz. <b><code>max_report_latency_ns</code></b>: thời gian giữ trong FIFO khi AP thức; 0 = báo ngay; timestamp phản ánh lúc sự kiện vật lý xảy ra chứ không phải lúc báo.',
        '<b>FIFO riêng</b> cho wake-up và non-wake-up, không được xen kẽ. FIFO wake-up đánh thức AP khi đầy hoặc khi độ trễ cảm biến hết hạn; FIFO non-wake-up là bộ đệm vòng khi suspend (ghi đè sự kiện cũ), và <code>max_report_latency</code> không có tác dụng trong lúc suspend.',
        '<b>Khi AP thức</b>: không được mất sự kiện; FIFO đầy trước hạn thì báo sớm; khi hạn của FIFO dùng chung hết thì giao toàn bộ kể cả cảm biến chưa hết hạn riêng; khi AP thoát suspend tạo một batch chứa toàn bộ FIFO (giảm khả năng suspend lại ngay). FIFO wake-up cần dư chỗ cho độ trễ đánh thức AP để không tràn. Với cảm biến on-change non-wake-up dùng FIFO chung, sự kiện cuối phải lưu ngoài FIFO chung để không bị ghi đè (nếu không app có thể bỏ lỡ thay đổi, ví dụ số bước).',
        '<b>Lợi ích điện</b>: giảm đánh thức AP và ngắt — ví dụ gom 10 sự kiện gyroscope 240 Hz giảm ngắt từ 240 xuống 24 mỗi giây. Driver thường không giữ wake lock nên AP ngủ được trong lúc thu thập (ngoại lệ: cảm biến wake-up liên tục với độ trễ dưới 1 giây).',
        '<b>Ưu tiên phân bổ FIFO</b> (theo giá trị): pedestrian dead reckoning công suất thấp (1–10 phút), nhận diện cử chỉ gián đoạn (3 giây), giảm ngắt (dưới 1 giây). Độ trễ có thể đổi khi cảm biến đang hoạt động mà không mất sự kiện.'
      ] },
      { t: 'widget', name: 'sensor-batch', title: 'Tính số lần ngắt khi batching' }
    ] },
    { icon: '🔌', title: 'Sensors AIDL HAL (Android 13+)', blocks: [
      { t: 'p', x: 'Giao diện giữa sensor framework và cảm biến thiết bị, dựa trên Sensors HAL 2.1, dùng AIDL, lộ loại <b>head tracker</b> và <b>limited-axis IMU</b>. Định nghĩa chuẩn ở <code>ISensors.aidl</code>; HAL phải extends <code>ISensors</code> và cài mọi hàm.' },
      { t: 'list', items: [
        '<b>Khởi tạo</b>: <code>initialize()</code> gọi đầu tiên — framework truyền hai FMQ descriptor (Event FMQ, Wake Lock FMQ) và con trỏ <code>ISensorsCallback</code>. <code>getSensorsList()</code> trả mọi cảm biến tĩnh với handle; handle phải <b>ổn định qua các lần restart</b> của HAL (có thể suy từ thuộc tính cố định hoặc file cấu hình thứ tự); danh sách đổi sau restart có thể buộc restart Android runtime; cảm biến đầu tiên cùng loại và thuộc tính wake-up là mặc định. Danh sách phải giống nhau suốt một lần boot.',
        '<b>Điều khiển</b>: <code>batch()</code> (gọi lúc nào cũng được mà không mất dữ liệu), <code>activate()</code> (tắt rồi sự kiện phải ngừng vào Event FMQ), <code>flush()</code> (bất đồng bộ đẩy sự kiện đã gom ra, thêm sự kiện flush complete; trả <code>BAD_VALUE</code> với one-shot), <code>injectSensorData()</code> và <code>setOperationMode()</code> (kiểm thử; <code>DATA_INJECTION</code> phải hỗ trợ cho cảm biến <code>WAKE_UP</code>), <code>configDirectReport()</code>/<code>registerDirectChannel()</code>/<code>unregisterDirectChannel()</code> (direct channel ghi sự kiện vào bộ nhớ riêng, bỏ qua framework).',
        '<b>Event FMQ</b> đồng bộ: ghi vượt chỗ trống thì thất bại, HAL phải quyết định chia nhỏ hay chờ; sau khi ghi đặt <code>READ_AND_PROCESS</code> trên event flag để báo framework. HAL phải <b>chủ động đẩy</b> sự kiện khi có, không chờ <code>poll()</code>.',
        '<b>Wake lock</b>: sự kiện <code>WAKE_UP</code> yêu cầu HAL giữ wake lock tới khi framework nhận quyền sở hữu; framework ghi số sự kiện <code>WAKE_UP</code> đã xử lý vào Wake Lock FMQ, HAL chỉ nhả khi không còn sự kiện chưa xử lý; tên wake lock bắt đầu bằng <code>SensorsHAL_WAKEUP</code>.',
        '<b>Dynamic sensors</b> (ví dụ gamepad có gia tốc kế): HAL gọi <code>onDynamicSensorConnected</code>/<code>onDynamicSensorDisconnected</code> trên <code>ISensorsCallback</code> mỗi khi kết nối đổi.',
        '<b>So với HAL cũ</b>: HAL 1.0 dùng <code>poll()</code> còn AIDL đẩy chủ động; HAL 1.0 nhả wake lock ở lần <code>poll()</code> sau, AIDL dùng Wake Lock FMQ; dynamic sensor HAL 1.0 trả qua <code>poll()</code>, AIDL qua callback.',
        '<b>Kiểm chứng</b>: CTS (kích hoạt, batching, tốc độ sự kiện; CTS Verifier kiểm thủ công độ chính xác — cần đạt để tuân CDD); VTS ở <code>hardware/interfaces/sensors/aidl/vts/</code>.'
      ] },
      { t: 'tip', x: 'Các trang khác của mục Sensors (chưa đi sâu): Interaction, Head tracker HID protocol, Power consumption, Suspend mode, Sensors off, Sensors Multi-HAL, Sensors HAL 2.0/1.0, HAL version deprecation.' }
    ] }
  ],
  summary: [
    'Stack: SDK → framework (ghép kênh, HAL single-client) → HAL (sensors.h/AIDL) → driver → sensor hub → MEMS.',
    'Loại: base (accelerometer, gyroscope, magnetometer, light, pressure, proximity…) và composite (activity, attitude, interaction, uncalibrated).',
    'Reporting mode: continuous, on-change, one-shot (tự tắt), special; wake-up khác non-wake-up.',
    'Batching dùng FIFO để giảm ngắt và điện năng; Sensors AIDL HAL (Android 13+) dùng Event FMQ + Wake Lock FMQ và đẩy sự kiện chủ động.'
  ],
  cards: [
    ['HAL cảm biến là single-client — hệ quả?', 'Framework ghép kênh giữa các app, dùng tần số cao nhất và độ trễ thấp nhất.'],
    ['Header HAL cảm biến?', 'sensors.h (hardware/libhardware/include/hardware).'],
    ['Phiên bản HAL framework hỗ trợ (cũ)?', '1.0 và 1.3 (nên lên 1.3).'],
    ['Sensor hub làm gì?', 'Tính toán công suất thấp khi AP ngủ và batching bằng FIFO.'],
    ['Timestamp sự kiện dựa trên?', 'SystemClock.elapsedRealtimeNanos().'],
    ['Trục di động khi xoay màn hình?', 'Không đổi (theo hướng tự nhiên).'],
    ['Accelerometer máy đặt phẳng?', '≈ +9,81 m/s² trên Z.'],
    ['Đơn vị gyroscope?', 'rad/s.'],
    ['Bốn reporting mode?', 'Continuous, on-change, one-shot, special.'],
    ['One-shot đặc biệt?', 'Tự tắt trước khi báo; bỏ qua sampling/latency; không gom FIFO.'],
    ['On-change khi kích hoạt?', 'Phải báo ngay một sự kiện.'],
    ['Cảm biến thường là wake-up?', 'Proximity, significant motion, tilt detector, hinge angle, gesture.'],
    ['max_report_latency_ns = 0?', 'Báo ngay khi đo.'],
    ['Giới hạn tần số?', 'Android không hỗ trợ > 1000 Hz.'],
    ['Sensors AIDL HAL từ Android mấy?', 'Android 13 (dựa trên HAL 2.1).'],
    ['Tên wake lock của Sensors HAL?', 'Bắt đầu bằng SensorsHAL_WAKEUP.']
  ],
  quiz: [
    { q: 'Cảm biến nào KHÔNG thuộc phạm vi mục Sensors?', o: ['Barometer', 'Heart rate', 'Camera', 'Proximity'], a: 2, e: 'Camera, vân tay, micro, touchscreen có cơ chế riêng.' },
    { q: 'Framework dùng tần số nào khi nhiều app đăng ký?', o: ['Thấp nhất', 'Cao nhất yêu cầu', 'Trung bình', 'Ngẫu nhiên'], a: 1, e: 'Và độ trễ thấp nhất.' },
    { q: 'Step counter có reporting mode:', o: ['Continuous', 'On-change', 'One-shot', 'Special'], a: 1, e: 'Chỉ báo khi số đếm đổi.' },
    { q: 'Significant motion là:', o: ['Continuous', 'One-shot', 'On-change', 'Special'], a: 1, e: 'Tự tắt sau khi báo.' },
    { q: 'Đơn vị khí áp:', o: ['Pa', 'hPa', 'bar', 'psi'], a: 1, e: 'Hectopascal.' },
    { q: 'Game rotation vector khác rotation vector ở chỗ:', o: ['Dùng GPS', 'Không dùng từ kế', 'Không dùng gyroscope', 'Báo Euler'], a: 1, e: 'Accuracy đặt 0.' },
    { q: 'Batching giảm điện bằng cách:', o: ['Giảm độ sáng', 'Giảm đánh thức AP và ngắt', 'Tắt cảm biến', 'Nén dữ liệu'], a: 1, e: 'Ví dụ 240 → 24 ngắt/giây.' },
    { q: 'FIFO wake-up và non-wake-up:', o: ['Dùng chung xen kẽ', 'Phải tách riêng', 'Không có FIFO', 'Chỉ có wake-up'], a: 1, e: 'Không được xen kẽ.' },
    { q: 'Sensors AIDL HAL đẩy sự kiện qua:', o: ['poll()', 'Event FMQ', 'Socket', 'Broadcast'], a: 1, e: 'Cùng Wake Lock FMQ.' },
    { q: 'flush() với cảm biến one-shot trả:', o: ['OK', 'BAD_VALUE', 'NOT_SUPPORTED', 'TIMEOUT'], a: 1, e: 'Theo ISensors.' },
    { q: 'Dynamic sensor kết nối được báo qua:', o: ['poll()', 'onDynamicSensorConnected', 'Intent', 'Log'], a: 1, e: 'Trên ISensorsCallback.' }
  ],
  match: [
    ['sensors.h', 'Giao diện HAL cảm biến'],
    ['sensor hub', 'Xử lý công suất thấp + FIFO'],
    ['one-shot', 'Tự tắt sau khi báo'],
    ['on-change', 'Chỉ báo khi giá trị đổi'],
    ['FIFO', 'Bộ đệm batching'],
    ['Event FMQ', 'Hàng đợi sự kiện AIDL HAL'],
    ['wake-up sensor', 'Đánh thức SoC']
  ]
});
