// Android Audio – Chương 5: Tính năng nâng cao.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospaudio = BOOK_DATA.aospaudio || { chapters: [] };
BOOK_DATA.aospaudio.chapters.push({
  n: 5,
  title: 'Tính năng nâng cao: concurrent capture, Sound Trigger, spatial audio, sound dose, soundbar, SCO',
  intro: 'Các tính năng hiện đại của Audio: <b>concurrent capture</b> (Android 10), <b>Sound Trigger</b> (hotword công suất thấp), <b>combined audio device routing</b>, <b>spatial audio và head tracking</b> (Android 13), <b>sound dose</b> (Android 14), <b>dynamic soundbar mode</b> (Android 14) và <b>Audio Managed SCO</b> (Android 17).',
  sections: [
    { icon: '🎤', title: 'Concurrent capture (Android 10)', blocks: [
      { t: 'p', x: 'Cho nhiều phiên thu âm chạy cùng lúc (cuộc gọi VoIP, trình quay video điều khiển bằng giọng nói từ accessibility service). Framework chỉ cho <b>một số app đặc quyền</b> thu âm đồng thời với app thường.' },
      { t: 'key', x: '<b>Mô hình thực thi</b>: framework không chặn việc bắt đầu thu mà <b>làm im</b> âm thanh thu của client ưu tiên thấp; app lấy lại micro đầy đủ khi thu ưu tiên cao kết thúc. Vì vậy audio HAL phải hỗ trợ nhiều input stream hoạt động cùng lúc dù chỉ một luồng mang âm thanh thật.' },
      { t: 'list', items: [
        '<b>Luồng và thiết bị</b>: <code>audio_policy_configuration.xml</code> quyết định số input stream mở/hoạt động; HAL phải hỗ trợ ≥ một instance mỗi input profile. Framework chọn thiết bị theo use case ưu tiên; xung đột phần cứng thì HAL chọn stream điều khiển thiết bị, nhất quán, và khôi phục route ban đầu khi hết đồng thời; ưu tiên theo <code>source_priority()</code> trong <code>policy.h</code>. Preprocessing chỉ bật cho use case ưu tiên cao nhất trên mỗi stream.',
        '<b>Cuộc gọi</b>: capture RX/TX dùng <code>VOICE_UPLINK</code>, <code>VOICE_DOWNLINK</code> hoặc <code>IN_TELEPHONY_RX</code>; trong mode <code>IN_CALL</code> phải thu được ít nhất một stream từ <code>IN_TELEPHONY_RX</code>; cuộc gọi thắng app khi xung đột thiết bị/preprocessing.',
        '<b>DSP và hotword</b>: AP và DSP có thể thu đồng thời; sound trigger HAL báo <code>concurrentCapture = true</code>; audio HAL lộ input profile <code>HW_HOTWORD</code> hỗ trợ ít nhất bằng số sound model nạp đồng thời.',
        '<b>Quyền riêng tư với Assistant</b>: dữ liệu micro không rời thiết bị trừ khi người dùng đang tương tác với Assistant (sau hotword); app nghe đồng thời phải hiện dấu hiệu thị giác sau khi phát hiện; người dùng tắt được micro/trigger và xem, xoá bản ghi bất kỳ lúc nào.',
        '<b>Thay đổi hành vi Android 10</b>: Android 9 trở xuống chỉ một Assistant luôn bật nghe hotword; Android 10 Assistant mặc định nghe cùng Assistant khác và tiếp tục phát hiện hotword khi app như Shazam, Waze giữ micro.'
      ] }
    ] },
    { icon: '👂', title: 'Sound Trigger', blocks: [
      { t: 'p', x: 'Cho app lắng nghe sự kiện âm thanh (hotword…) theo cách công suất thấp, ưu tiên riêng tư (ví dụ Assistant, Now Playing). Stack chuyển <b>sự kiện trigger rời rạc</b>, thường không xử lý audio; sau trigger app mở <code>AudioRecord</code> qua Audio framework để thu quanh sự kiện. HAL Sound Trigger và Audio HAL thường chung tiến trình.' },
      { t: 'table', head: ['Tầng', 'Vai trò'], rows: [
        ['<b>HAL (STHAL)</b>', 'Vendor cài; nên cài trực tiếp thay vì bọc HAL cũ'],
        ['<b>SoundTriggerMiddleware</b>', 'Chia sẻ HAL giữa client; ghi log, ép quyền, tương thích HAL cũ'],
        ['<b>SoundTriggerService</b>', 'Tích hợp telephony/pin; giữ cơ sở dữ liệu model theo ID duy nhất'],
        ['<b>Tầng trên</b>', 'Xử lý Assistant và tính năng app chung riêng']
      ] },
      { t: 'list', items: [
        'Model và kiểu dữ liệu là <b>opaque</b> với framework: app và HAL phải có thoả thuận ngầm về định dạng, vì vậy app Sound Trigger do vendor cung cấp.',
        '<code>ISoundTriggerHw</code> hỗ trợ một hoặc nhiều phiên phát hiện; <code>getProperties()</code> mô tả khả năng; HAL có một hay nhiều <i>engine</i> (mỗi cái thuật toán cho một lớp âm thanh); engine phát hiện thì gửi sự kiện và <b>dừng phát hiện</b>.',
        '<b>Vòng đời model</b>: <code>loadSoundModel()</code>/<code>loadPhraseSoundModel()</code> (trả handle) → <code>startRecognition()</code> (dừng khi <code>stopRecognition()</code>, khi phát hiện, hoặc bị huỷ vì thiếu tài nguyên như use case ưu tiên cao hơn; sự kiện tới callback đăng ký lúc nạp; khởi động lại nhiều lần được) → <code>unloadModel()</code> với model không hoạt động. <code>forceRecognitionEvent()</code> tạo sự kiện trạng thái <code>FORCED</code> mà vẫn giữ nhận dạng chạy.',
        '<b>Lỗi (Android 11+)</b>: mã trả về khác thành công được coi là lỗi lập trình; khôi phục bằng restart tiến trình HAL (biện pháp cuối cùng); Android 11 đòi hỏi tuân thủ lúc chạy nghiêm ngặt hơn.'
      ] },
      { t: 'widget', name: 'soundtrigger-flow', title: 'Bước nào của vòng đời model?' }
    ] },
    { icon: '🔀', title: 'Combined audio device routing', blocks: [
      { t: 'p', x: 'Cho phép stream tới <b>nhiều thiết bị audio cùng lúc</b>. App đặc quyền dùng system API chọn nhiều thiết bị ưu tiên cho một audio strategy; app thường truy vấn khả năng thiết bị chính xác hơn qua API công khai. Use case: phát broadcast, multicast tới nhóm tai nghe BLE audio, chọn nhiều card âm thanh USB.' },
      { t: 'list', items: [
        '<b>Lịch sử</b>: Android 11 trở xuống hạn chế nhiều thiết bị cùng loại; Android 12 bỏ giới hạn nhưng chưa định tuyến tới nhiều USB cùng lúc; Android 14 cho phép USB tới nhiều thiết bị miễn các thiết bị thuộc <b>loại audio khác nhau</b> và kernel/vendor hỗ trợ.',
        '<b>Audio Policy Manager</b>: thêm system API đặt/lấy/xoá nhiều thiết bị ưu tiên cho mỗi strategy cùng listener thay đổi; khái niệm <i>active media devices</i> chọn theo ba quy tắc: mọi thiết bị ưu tiên khả dụng → thiết bị tháo rời kết nối gần nhất → chính sách mặc định. Output stream mở lại khi rảnh hoặc hoãn tới khi vào standby.',
        '<b>Yêu cầu</b>: vendor cài Audio HAL báo khả năng thiết bị (HIDL HAL V7: <code>AudioProfile</code>, <code>AudioTransport</code>, hàm legacy API 3.2 <code>get_audio_port_v7</code>; HAL cũ dùng <code>get_audio_port</code>). Kiểm chứng: CTS <code>AudioManagerTest</code> và GTS <code>AudioServiceHostTest</code> (GTS đóng nguồn).'
      ] }
    ] },
    { icon: '🎧', title: 'Spatial audio và head tracking (Android 13)', blocks: [
      { t: 'p', x: 'Khung chuẩn cho OEM hỗ trợ spatial audio và head tracking mà không cần SDK hay tuỳ biến riêng. Spatial audio tạo trường âm quanh người nghe để tai nghe hai transducer làm lời thoại như đến từ phía trước, hiệu ứng surround từ phía sau; head tracking giữ trường âm ổn định khi người nghe chuyển động, chỉ hiệu quả khi độ trễ thấp.' },
      { t: 'table', head: ['Thành phần', 'Vai trò'], rows: [
        ['<code>Spatializer</code> (API app)', 'API công khai cấp ứng dụng; app có thể tắt spatialization qua <code>AudioAttributes</code> hoặc đánh dấu nội dung đã spatialize'],
        ['<code>SpatializerHelper</code>', 'Trong audio service, phối hợp với System UI'],
        ['<code>Spatializer</code> (audio policy service)', 'Dựng đồ thị spatial audio'],
        ['<code>SpatializerThread</code>', 'Mixer cấp cho engine hậu xử lý'],
        ['<code>SpatializerPoseController</code>', 'Gộp và lọc tín hiệu cảm biến head tracking'],
        ['Head tracking', 'Dữ liệu từ driver Bluetooth qua giao thức HID; thư viện tiện ích bù bias, phát hiện đứng yên, giới hạn tốc độ; cảm biến <code>Sensor.TYPE_HEAD_TRACKER</code> (Android 13), Sensor HAL lộ như dynamic sensor qua Bluetooth hoặc USB']
      ] },
      { t: 'list', items: [
        '<b>Thiết kế</b>: spatializer nằm trong audio framework, tách khỏi decoder (OEM ghép vendor khác nhau cho giải mã và spatialization); nhận audio đã mix, xuất luồng stereo tới Audio HAL; nối với sensor framework để head tracking.',
        '<b>Cài đặt người dùng</b>: loa và tai nghe có dây — bật/tắt spatial audio (tuỳ chọn loa chỉ hiện nếu effect hỗ trợ chế độ transaural); thiết bị Bluetooth — bật/tắt spatial audio và head tracking theo thiết bị (head tracking chỉ hiện khi headset có cảm biến); mặc định bật nơi được hỗ trợ.',
        '<b>Yêu cầu</b>: Audio HAL và DSP có đường ra spatial audio riêng; tai nghe có cảm biến head tracker tích hợp tuân chuẩn HID cho Bluetooth headset; <b>Audio HAL v7.1+</b>.',
        '<b>Các bước</b>: (1) <code>ro.audio.spatializer_enabled=true</code> trong <code>device.mk</code>; (2) khai báo spatializer mix port với cờ <code>AUDIO_OUTPUT_FLAG_SPATIALIZER</code> trong <code>audio_policy_configuration.xml</code>; (3) đăng ký thư viện spatializer effect trong <code>audio_effects.xml</code>; (4) cài spatializer effect trong Effect HAL với các tham số: mức hỗ trợ, head tracking có hỗ trợ và chế độ, channel mask hỗ trợ, chế độ spatialization, cấu hình head-to-stage.',
        '<b>Khuyến nghị</b>: dùng LE Audio khi có; độ trễ vòng (chuyển động đầu → âm thanh tới tai nghe) dưới <b>150 ms</b>; với Bluetooth Classic A2DP dùng codec độ trễ thấp như Opus, cài điều khiển độ trễ trong Audio HAL để giảm điện khi tắt head tracking và tắt được khi điều kiện kém. Kiểm chứng: CTS <code>SpatializerTest.java</code>.'
      ] },
      { t: 'widget', name: 'spatial-latency', title: 'Độ trễ vòng head tracking' }
    ] },
    { icon: '🔊', title: 'Sound dose (Android 14)', blocks: [
      { t: 'p', x: 'Theo dõi liên tục mức tiếp xúc âm thanh và cảnh báo khi mức nghe có thể hại thính giác; nhắm vào thiết bị di động khi dùng tai nghe. Theo IEC 62368-1 (ấn bản 3) và EN 50332-3. OEM phải tuân đặc tả giao diện và quy định khi tuỳ biến, nhưng có thể thay bản cài đặt mặc định AOSP.' },
      { t: 'key', x: '<b>CSD</b> (calculated sound dose) tích phân <b>MEL</b> (momentary exposure level) theo thời gian, giữ trong cửa sổ trượt <b>7 ngày</b>. Khi CSD đạt <b>100%</b> hệ thống cảnh báo ở mỗi mốc 100% tiếp theo; nếu người dùng không xác nhận, âm lượng giảm về mức <b>RS1</b> (IEC 62368-1). Cảnh báo riêng khi MEL vượt mức <b>RS2</b> (mặc định 100 dBA, không thấp hơn 80 dBA). Phép đo phải phản ánh đúng điều người dùng nghe.' },
      { t: 'table', head: ['Thành phần', 'Vị trí / vai trò'], rows: [
        ['<b>SoundDoseHelper</b>', 'Trong system server: xử lý dữ liệu liều, lưu bền, khôi phục sau khi audioserver crash, kích hoạt thông báo System UI, hạ âm lượng khi cần'],
        ['<b>SoundDoseManager</b>', 'Trong audioserver (AudioFlinger): thu dữ liệu từ HAL hoặc tính dự phòng, chuyển cho SoundDoseHelper'],
        ['<b>MelProcessor / MelAggregator</b>', 'Trong libaudioutils: xử lý buffer audio và gộp bản ghi MEL qua các cổng trong cửa sổ 7 ngày']
      ] },
      { t: 'list', items: [
        '<b>Kiến trúc</b>: đặc tính phần cứng và transducer đổi mức đầu ra nên HAL được mở rộng báo MEL trực tiếp (tính cả xử lý DSP, trở kháng, độ nhạy, đáp ứng tần số loa). HAL không cấp được thì framework ước lượng CSD từ thông tin render và frame gửi DSP.',
        '<b>Cài đặt</b>: mở rộng HIDL deprecated từ Android 14; dùng giao diện AIDL <code>ISoundDose</code> (qua <code>IModule</code> của AIDL Audio HAL): đặt/đọc cận RS2, đăng ký callback nhận MEL và cảnh báo (đăng ký xong thì phần tính nội bộ của framework bị tắt vĩnh viễn). Chưa sẵn sàng AIDL Audio HAL đầy đủ có thể dùng tạm <code>ISoundDoseFactory</code> độc lập (sẽ deprecated).',
        '<b>Offload decoding</b>: framework không thấy audio đã giải mã nên không ước lượng được MEL → HAL <b>phải</b> cấp MEL để tuân EN 50332-3 và IEC 62368-1. Tính năng không có API hướng ngoài.',
        '<b>Bật CSD</b>: mặc định tắt ở Android 14; logic chỉ đúng từ Android 14 QPR1 (bật ở bản gốc có thể sai, nhất là Bluetooth). Từ QPR1 bật theo quy định quốc gia và cờ trong <code>config.xml</code>: cờ media safe volume nơi có quy định; cờ sound dosage cho tuân thủ EN 50332-3/IEC 62368-1 10.6.3; ghi đè theo MCC. Thiết bị offload thiếu giao diện sound dose HAL không nên bật cờ này. Nơi không bắt buộc, OEM có thể cho người dùng bật tắt trong System UI.',
        '<b>Kiểm chứng</b>: VTS <code>VtsHalAudioCoreTargetTest</code> (IModule AIDL Audio HAL) và <code>VtsHalSoundDoseFactoryTargetTest</code> (sound dose AIDL độc lập).'
      ] },
      { t: 'widget', name: 'sound-dose-calc', title: 'Mô phỏng liều âm CSD' }
    ] },
    { icon: '📺', title: 'Dynamic soundbar mode (Android 14)', blocks: [
      { t: 'p', x: 'Cho OEM cấu hình set-top box (STB) và thiết bị OTT có loa tích hợp/nối ngoài hoạt động như soundbar cho thiết bị kết nối, qua thuộc tính HDMI CEC như audio return channel (ARC) và system audio control. Chỉ nhắm <b>Android TV CEC playback device</b>; không hỗ trợ eARC Rx (ARC làm dự phòng).' },
      { t: 'list', items: [
        '<b>Hành vi</b>: khi bật, thiết bị hoạt động như soundbar theo quy tắc HDMI CEC và phát âm thanh TV qua loa của nó; khi không phải active source thì tạm dừng mọi media để tiết kiệm điện; framework cấp phát <b>logical address 5</b> khi bật và giải phóng khi tắt; ngắt loa thì giải phóng địa chỉ 5 để TV dùng lại loa riêng, giá trị cài đặt vẫn giữ cho lần nối lại và qua hotplug.',
        '<b>System UI</b>: nhãn nêu ARC, hướng dẫn dùng cổng ARC của TV, cảnh báo soundbar/AVR khác trên mạng HDMI, nhắc màn hình có thể nhấp nháy; DSM phải <b>tắt mặc định</b> nếu thiết bị không có loa tích hợp.',
        '<b>HAL và cấu hình</b>: cài cổng HDMI ARC trong driver; cấu hình audio policy cho loa; <code>persist.sys.hdmi.property_arc_support=true</code>; giữ nguyên mặc định RRO <code>config.xml</code> của soundbar mode (tắt mặc định để tránh race với hệ audio khác dùng địa chỉ 5). <code>HdmiControlManager</code> lưu cài đặt <code>soundbar_mode</code>; <code>HdmiControlService</code> xác thực playback device và hỗ trợ ARC, quản lý cấp phát địa chỉ. Gỡ lỗi: <code>adb shell cmd hdmi_control cec_setting set soundbar_mode &lt;1/0&gt;</code>.',
        '<b>Kiểm chứng</b>: thủ công (ARC bật/tắt, cổng không ARC, xung đột địa chỉ 5); <code>CtsHdmiCecHostTestCases</code> phải đạt khi DSM tắt; <code>HdmiCecSoundbarModeTest</code> khuyến nghị (không bắt buộc) chạy khi DSM bật.'
      ] }
    ] },
    { icon: '📞', title: 'Audio Managed SCO (Android 17)', blocks: [
      { t: 'warn', x: '<b>Vấn đề cũ</b>: BT stack sở hữu trạng thái kết nối SCO và gọi trực tiếp connect/disconnect audio → quyền điều khiển định tuyến bị chia giữa telecom và BT stack, SCO xử lý khác các profile BT khác như A2DP và LE Audio.' },
      { t: 'list', items: [
        '<b>Thiết kế mới</b> (AMSCO): framework audio quản lý định tuyến SCO; trạng thái kết nối SCO là <b>hệ quả</b> của hoạt động streaming chứ không do BT framework sở hữu. Audio HAL (AHAL) chỉ bắt đầu/tạm dừng phiên SCO khi có stream hoạt động được patch tới thiết bị SCO và audio mode đặt kèm patch tới thiết bị SCO. Framework chặn patch A2DP đồng thời trong điều kiện này và không còn gửi thay đổi trạng thái SCO hay A2DP suspend tới AHAL. BT stack không còn gọi connect/disconnect audio; khi ngắt chủ động hoặc lỗi, báo framework qua <code>AudioManager#onHfpAudioDisconnected</code>. Hysteresis thêm vào không được tồn tại qua các lần đổi audio mode.',
        '<b>Tương thích ngược</b>: một system property cho biết quản lý SCO mới có bật không (thiết bị nhận OS mới mà chưa có AHAL/BT AHAL mới vẫn chạy); đường cũ được giữ tối đa 6 năm.',
        '<b>Phiên HFP và codec</b>: AHAL dùng loại phiên hands-free profile (HFP) mới để bắt đầu/tạm dừng phát; BT stack ưu tiên offload phần cứng và thương lượng codec theo thứ tự cố định (phần cứng trên phần mềm); thương lượng lại khi audio gateway nhận lệnh available-codec mới.',
        '<b>Lớp Java</b>: <code>HeadsetStateMachine</code> gần như không đổi; trạng thái <code>AUDIO_CONNECTED</code> phản hồi sự kiện từ native stack thay vì Java khởi tạo kết nối.',
        '<b>Cài đặt</b>: báo framework khi thiết bị BT hoạt động đổi qua <code>AudioManager.handleBluetoothActiveDeviceChanged(HfpInfo)</code>; dùng callback device-added thay broadcast cũ; <code>setCommunicationDevice(AudioDeviceInfo)</code> là điểm điều khiển chính để bắt đầu SCO; nếu <code>HfpTransport::StartRequest</code> trả <code>PENDING</code> thì AHAL phải thử lại.',
        '<b>Bốn luồng</b>: cuộc gọi telecom (<code>phoneStateChanged</code> thành chặn), cuộc gọi VoIP (<code>startScoUsingVirtualVoiceCall</code>), nhận dạng giọng nói (BT stack yêu cầu SCO qua <code>setCommunicationDevice</code>), kết nối audio chung. Kiểm chứng: CTS Verifier (định tuyến âm thanh cuộc gọi tương tác), VTS cho AHAL và BT AHAL.'
      ] },
      { t: 'tip', x: 'Các trang còn lại của menu Audio chưa đi sâu: Audio HAL (HIDL) và Configure audio policies/shared library/preprocessing effects, Configurable Audio Policy trong AIDL HAL, High-resolution audio, Device type limit, Latency (measure, loopback dongle, app developers), Preferred mixer attributes trên USB, Spatial audio implementation và head tracking qua LE audio.' }
    ] }
  ],
  summary: [
    'Concurrent capture (Android 10): làm im client ưu tiên thấp thay vì chặn; HAL hỗ trợ nhiều input stream; HW_HOTWORD profile.',
    'Sound Trigger: STHAL → Middleware → Service; vòng đời load → start → (event dừng) → unload.',
    'Spatial audio (Android 13): Spatializer, HID head tracker, Audio HAL 7.1+, trễ vòng < 150 ms.',
    'Sound dose (Android 14): CSD 7 ngày, 100% cảnh báo, RS1/RS2, ISoundDose; DSM dùng logical address 5; AMSCO (Android 17) để audio framework quản lý SCO.'
  ],
  cards: [
    ['Concurrent capture từ Android mấy?', 'Android 10.'],
    ['Khi capture xung đột framework làm gì?', 'Làm im âm thanh của client ưu tiên thấp, không chặn bắt đầu thu.'],
    ['source_priority() ở đâu?', 'policy.h.'],
    ['concurrentCapture = true?', 'Sound trigger HAL báo AP và DSP thu đồng thời được.'],
    ['Sound Trigger cung cấp gì?', 'Sự kiện trigger rời rạc, không xử lý audio.'],
    ['Vòng đời model Sound Trigger?', 'load → startRecognition → (detect/stop) → unload.'],
    ['forceRecognitionEvent?', 'Tạo sự kiện FORCED, giữ nhận dạng chạy.'],
    ['Combined routing có từ?', 'Android 12 bỏ giới hạn; Android 14 USB nhiều thiết bị khác loại.'],
    ['Spatial audio có từ?', 'Android 13.'],
    ['Cảm biến head tracking?', 'Sensor.TYPE_HEAD_TRACKER (dynamic sensor).'],
    ['Độ trễ vòng khuyến nghị?', 'Dưới 150 ms.'],
    ['CSD là gì?', 'Calculated sound dose — tích phân MEL, cửa sổ 7 ngày.'],
    ['RS2 mặc định?', '100 dBA (không thấp hơn 80 dBA).'],
    ['Interface sound dose AIDL?', 'ISoundDose qua IModule.'],
    ['DSM dùng logical address?', 'Địa chỉ 5 (HDMI CEC).'],
    ['AMSCO từ Android mấy?', 'Android 17.']
  ],
  quiz: [
    { q: 'Concurrent capture làm gì với client ưu tiên thấp?', o: ['Chặn', 'Làm im âm thanh', 'Tắt app', 'Giảm tần số lấy mẫu'], a: 1, e: 'Lấy lại micro khi thu ưu tiên cao kết thúc.' },
    { q: 'Profile hotword trong audio HAL:', o: ['HW_HOTWORD', 'SOFT_HOTWORD', 'DSP_VOICE', 'LOW_POWER'], a: 0, e: 'Ít nhất bằng số model nạp đồng thời.' },
    { q: 'Sound Trigger model là:', o: ['Có cấu trúc công khai', 'Opaque với framework', 'JSON', 'Java'], a: 1, e: 'App và HAL thoả thuận ngầm.' },
    { q: 'Sau khi engine phát hiện:', o: ['Tiếp tục phát hiện', 'Gửi sự kiện và dừng', 'Tắt HAL', 'Unload model'], a: 1, e: 'Có thể start lại.' },
    { q: 'Audio HAL tối thiểu cho spatial audio:', o: ['6.0', '7.1', '5.0', '8.0'], a: 1, e: 'Cùng DSP có đường ra spatial.' },
    { q: 'Cờ output cho spatializer mix port:', o: ['AUDIO_OUTPUT_FLAG_SPATIALIZER', 'FAST', 'DEEP_BUFFER', 'MMAP_NOIRQ'], a: 0, e: 'Trong audio_policy_configuration.xml.' },
    { q: 'Cửa sổ CSD:', o: ['1 ngày', '3 ngày', '7 ngày', '30 ngày'], a: 2, e: 'Rolling.' },
    { q: 'Khi CSD = 100% mà người dùng không xác nhận:', o: ['Tắt máy', 'Âm lượng giảm về RS1', 'Bỏ qua', 'Ngắt tai nghe'], a: 1, e: 'Theo IEC 62368-1.' },
    { q: 'Thiết bị offload decoding phải làm gì cho sound dose?', o: ['Không cần', 'HAL cấp MEL', 'Tắt offload', 'Dùng estimation'], a: 1, e: 'Framework không thấy audio đã giải mã.' },
    { q: 'DSM giải phóng logical address 5 khi:', o: ['Tắt hoặc ngắt loa', 'Bật', 'Reboot', 'Khi có ARC'], a: 0, e: 'Cho TV dùng lại loa riêng.' },
    { q: 'Trong AMSCO, ai gọi connect/disconnect audio SCO?', o: ['BT stack', 'Không ai trong BT stack; audio framework quản lý', 'App', 'Telecom'], a: 1, e: 'BT stack chỉ báo ngắt qua onHfpAudioDisconnected.' }
  ],
  match: [
    ['Concurrent capture', 'Nhiều phiên thu cùng lúc'],
    ['STHAL', 'HAL Sound Trigger'],
    ['Spatializer', 'API spatial audio'],
    ['MEL', 'Momentary exposure level'],
    ['CSD', 'Liều âm tích luỹ'],
    ['DSM', 'Soundbar mode'],
    ['AMSCO', 'Audio Managed SCO']
  ]
});
