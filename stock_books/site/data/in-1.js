// Android Input & Interaction – Chương 1: Hệ thống Input.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 1,
  title: 'Input: pipeline, key layout, key character map, IDC, touch và bàn phím',
  intro: 'Hệ thống input của Android là <b>pipeline sự kiện</b> đưa tín hiệu từ phần cứng qua kernel và framework tới cửa sổ cần nhận. Chương này nói về các tầng pipeline, các điểm cấu hình, ba loại file cấu hình (<code>.kl</code> key layout, <code>.kcm</code> key character map, <code>.idc</code> input device configuration), cũng như thiết bị cảm ứng và bàn phím.',
  sections: [
    { icon: '🔀', title: 'Pipeline input', blocks: [
      { t: 'steps', items: [
        '<b>Thiết bị vật lý và firmware</b>: tạo thay đổi trạng thái (nhấn phím, chạm) và truyền qua bus như USB HID hoặc I2C.',
        '<b>Linux kernel driver</b>: giải mã tín hiệu thành giao thức input chuẩn Linux (<code>linux/input.h</code>); OEM thường cần driver riêng cho linh kiện nhúng như màn hình cảm ứng.',
        '<b>EventHub</b>: đọc sự kiện thô từ driver <code>evdev</code> của từng thiết bị.',
        '<b>InputReader</b>: giải mã sự kiện thô theo lớp thiết bị và tạo sự kiện input Android; áp key layout, character map và bảng ánh xạ.',
        '<b>InputDispatcher</b>: chuyển sự kiện tới cửa sổ phù hợp.'
      ] },
      { t: 'table', head: ['Điểm điều khiển', 'Tác dụng'], rows: [
        ['Driver và firmware', 'Thanh ghi/cài đặt firmware (thường là tham số module kernel): hiệu chuẩn, độ nhạy, khử nhiễu'],
        ['Board configuration properties', 'BSP kernel lộ thuộc tính qua SysFS; InputReader dùng (ví dụ đặt virtual key trên màn hình cảm ứng)'],
        ['Resource overlays', '<code>config.xml</code>: tác dụng của công tắc nắp, nhấn giữ nút nguồn, hướng màn hình…'],
        ['Key maps', 'Ánh xạ mã sự kiện Linux ↔ Android cho phím, nút và trục joystick; có thể phụ thuộc thiết bị hoặc ngôn ngữ'],
        ['Input device configuration files', 'Đặc tính riêng thiết bị, ví dụ cách báo kích thước chạm']
      ] },
      { t: 'h3', x: 'Các loại định danh' },
      { t: 'list', items: [
        '<b>Physical scan code</b> (riêng thiết bị), <b>HID usage</b> (chuẩn HID), <b>Linux key code</b> (<code>KEY_</code>, <code>BTN_</code> trong <code>EV_KEY</code>), <b>Linux axis code</b> (<code>REL_</code>, <code>ABS_</code> trong <code>EV_REL</code>/<code>EV_ABS</code>), <b>Linux switch code</b> (<code>SW_</code> trong <code>EV_SW</code>, ví dụ nắp máy; app thường không nhận trực tiếp).',
        '<b>Android key code</b> (<code>KEYCODE_</code> trong <code>KeyEvent</code>), <b>Android axis code</b> (<code>AXIS_</code> trong <code>MotionEvent</code>) — key layout ánh xạ từ Linux sang đây; <b>meta state</b> (<code>META_</code>) và <b>button state</b> (<code>BUTTON_</code>) do InputReader xác định. Key character map đổi tổ hợp key code Android thành ký tự (Shift + A → “A”).'
      ] },
      { t: 'widget', name: 'input-pipeline', title: 'Tầng nào xử lý bước này?' }
    ] },
    { icon: '🗺️', title: 'Key layout files (.kl)', blocks: [
      { t: 'p', x: 'Ánh xạ mã phím và trục Linux sang mã Android, kèm cờ chính sách. Thiết bị tích hợp có phím (âm lượng, nguồn, phím tai nghe) cần file riêng; thiết bị khác thì không bắt buộc (bàn phím/joystick chuyên dụng nên có). Không có file thì dùng mặc định.' },
      { t: 'steps', items: [
        'Thư mục tìm theo thứ tự: <code>/odm/usr/keylayout</code>, <code>/vendor/usr/keylayout</code>, <code>/system/usr/keylayout</code>, <code>/data/system/devices/keylayout</code>.',
        'Trong mỗi thư mục, tên file theo thứ tự: <code>Vendor_XXXX_Product_XXXX_Version_XXXX.kl</code> → <code>Vendor_XXXX_Product_XXXX.kl</code> → <code>DEVICE_NAME.kl</code> (ký tự lạ thành gạch dưới) → <code>Generic.kl</code> (không sửa).'
      ] },
      { t: 'list', items: [
        '<b>Cú pháp</b>: văn bản thuần, chú thích <code>#</code>. Khai báo <code>key &lt;Linux code&gt; &lt;ANDROID_KEYCODE&gt;</code> hoặc <code>key usage &lt;32-bit HID usage&gt;</code> (page 16 bit cao, ID 16 bit thấp); cờ tuỳ chọn: <code>FUNCTION</code> (coi như đang nhấn Function), <code>GESTURE</code> (phím sinh từ cử chỉ như đặt lòng bàn tay), <code>VIRTUAL</code> (phím mềm/capacitive, debounce đặc biệt).',
        '<b>Trục</b>: <code>axis &lt;Linux axis&gt; …</code> — trục cơ bản, <i>split axis</i> (chia một trục vật lý tại ngưỡng thành hai trục Android, ví dụ gas/brake), <i>inverted</i> (đảo giá trị), <code>flat</code> (vùng chết ở giữa lọc nhiễu joystick; giá trị trong file theo toạ độ driver).',
        '<b>Phím mềm</b>: ba cách — đồ hoạ trên màn hình (navigation bar của System UI), vùng mở rộng của màn hình cảm ứng với virtual key map, hoặc nút capacitive riêng (hai cách sau dùng cờ <code>VIRTUAL</code>). Framework bỏ qua virtual key trong một “quiet time” ngắn sau khi chạm (<code>config_virtualKeyQuietTimeMillis</code>, khuyến nghị ≤ 250 ms; đa số thiết bị nên tắt).',
        '<b>Kiểm tra</b>: công cụ validatekeymaps.'
      ] }
    ] },
    { icon: '🔤', title: 'Key character map files (.kcm)', blocks: [
      { t: 'p', x: 'Chuyển tổ hợp key code Android và phím bổ trợ thành ký tự Unicode. Thiết bị tích hợp có phím cần file riêng, chủ yếu để đánh dấu là thiết bị chuyên dụng chứ không phải bàn phím đầy đủ; bàn phím ngoài thường dùng map chung.' },
      { t: 'table', head: ['Loại bàn phím', 'Mô tả'], rows: [
        ['<b>NUMERIC</b>', 'Bố cục 12 phím, nhập multi-tap'],
        ['<b>PREDICTIVE</b>', 'Đủ chữ cái, mỗi phím vài chữ'],
        ['<b>ALPHA</b>', 'Chữ cái và một số chữ số, bố cục gọn; có hỗ trợ framework như tự viết hoa, bổ trợ dạng toggle'],
        ['<b>FULL</b>', 'Bố cục PC, mọi ký hiệu truy cập trực tiếp'],
        ['<b>SPECIAL_FUNCTION</b>', 'Chỉ phím không gõ chữ (HOME, POWER)']
      ] },
      { t: 'list', items: [
        '<b>Tìm file</b>: theo vendor/product ID (kèm version tuỳ chọn) → tên thiết bị → tên chung; thư mục /odm, /vendor, /system, /data/system/devices. Có sẵn <code>Generic.kcm</code> (bàn phím ngoài, giả định US English) và <code>Virtual.kcm</code> (bàn phím ảo ID −1, QWERTY chuẩn); không sửa hai file này.',
        '<b>Cú pháp</b>: khai báo kiểu bàn phím + các khối key. Thuộc tính: <code>label</code> (chữ in trên phím), <code>number</code> (ký tự gõ trong trường số), <code>base</code> (không có bổ trợ) và các bổ trợ <code>shift</code>, <code>ctrl</code>, <code>alt</code>, <code>meta</code>, <code>capslock</code>, <code>numlock</code>, <code>sym</code>, <code>fn</code> (kèm biến thể trái/phải, nối bằng “+”). Thuộc tính sau ghi đè thuộc tính trước.',
        '<b>Hành vi</b>: <code>none</code> (không gõ gì), ký tự literal (có escape), <code>fallback KEYCODE</code> (nếu app không xử lý thì gửi phím thay thế, ví dụ ESCAPE → BACK; app nhận cả hai sự kiện, fallback bị huỷ nếu phím gốc được xử lý ở key-up), ký tự dành riêng U+EF00 (đổi bốn số hex đứng trước thành ký tự Unicode) và U+EF01 (mở bộ chọn ký hiệu), <b>dead key</b> (grave, acute, circumflex, tilde, umlaut).',
        'File nhị phân <code>.kcm.bin</code> trước Android 3.0 không còn được nhận; bàn phím đa ngôn ngữ chưa được hỗ trợ trực tiếp (OEM có thể cấp map tuỳ chỉnh).'
      ] }
    ] },
    { icon: '⚙️', title: 'Input device configuration files (.idc)', blocks: [
      { t: 'p', x: 'File văn bản đặt thuộc tính riêng của thiết bị ảnh hưởng cách input system đối xử với nó. Ngoại vi chuẩn (bàn phím HID, chuột) thường không cần; thiết bị nhúng, nhất là <b>màn hình cảm ứng</b>, thường cần vì Android không luôn suy ra được ý định từ loại sự kiện driver báo (màn hình cảm ứng đa điểm và touch pad cùng báo năng lực <code>EV_ABS</code> tương tự).' },
      { t: 'list', items: [
        '<b>Thứ tự tìm</b>: <code>Vendor_XXXX_Product_XXXX_Version_XXXX.idc</code> → <code>Vendor_XXXX_Product_XXXX.idc</code> → <code>device-name.idc</code>; trong mỗi nhóm lần lượt qua <code>/product</code>, <code>/system_ext</code>, <code>/odm</code>, <code>/vendor</code>, <code>/system</code>, <code>/data/system/devices/idc/</code>; khớp đầu tiên thắng.',
        '<b>Cú pháp</b>: mỗi dòng <code>name = value</code>; tên/giá trị không rỗng, không khoảng trắng, không chứa <code>\\</code> hay <code>"</code>; giá trị là chuỗi, số nguyên hoặc số thực; phân biệt hoa thường; <code>#</code> là chú thích.',
        '<b><code>device.internal</code></b>: 0 = ngoài, 1 = trong; mặc định 0 với USB/Bluetooth, 1 với bus khác. Quy định hành vi đánh thức mặc định: thiết bị trong thường không đánh thức màn hình trừ khi key layout/chính sách cho phép (tránh đánh thức nhầm trong túi), thiết bị ngoài đánh thức dễ hơn.',
        '<b>Touch</b>: ví dụ <code>touch.deviceType = touchScreen</code> (vai trò thiết bị) và <code>touch.orientationAware = 1</code> (căn toạ độ theo hướng màn hình tích hợp). Thuộc tính hiệu chuẩn khác ở tài liệu từng lớp thiết bị. Kiểm tra bằng validatekeymaps.'
      ] }
    ] },
    { icon: '👆', title: 'Thiết bị cảm ứng', blocks: [
      { t: 'list', items: [
        '<b>Phân loại</b>: touch screen (gắn với màn hình) và touch pad (không gắn, ví dụ digitizer tablet); có thể có nút kiểu chuột, dùng ngón tay/bút, và virtual key. <i>Multi-touch</i>: báo trục X/Y multi-touch tuyệt đối và không có nút gamepad; <i>single-touch</i>: trục X/Y tuyệt đối chuẩn + key chạm. Kiểu thiết bị: <code>touch.deviceType</code> ưu tiên; không thì dựa thuộc tính input (trục X/Y tương đối ⇒ touch pad; còn lại mặc định pointer). Thiết bị cảm ứng tích hợp nên có file IDC, nếu không hệ thống áp mặc định dành cho ngoại vi và có thể hoạt động sai.',
        '<b>Tool type</b>: ngón tay (mặc định), bút, tẩy, cọ, bút chì, airbrush, chuột. <b>Touching vs hovering</b>: tool chạm tạo sự kiện chạm chuẩn; tool lơ lửng (bút RF cảm biến gần) tạo hover; áp suất 0 hoặc giá trị 0 ở touch key = hover; chuột và lens không bao giờ hover.',
        '<b>Yêu cầu driver</b>: chỉ đăng ký trục/phím thật sự hỗ trợ (đăng ký sai làm hỏng phân loại); đa điểm dùng trục theo từng contact (vị trí, áp suất, kích thước, hướng, tracking ID, slot) — ưu tiên Protocol B, Protocol A vẫn dùng được; <b>không clamp toạ độ</b> vào vùng active (chạm ngoài vùng báo là ngoài hoặc không báo) để chuyển động mượt qua mép màn hình; khi mọi contact nhấc lên gửi empty sync report thay vì tín hiệu “up” áp suất 0 kiểu cũ.',
        '<b>Pipeline</b>: EventHub đọc evdev → InputReader cập nhật vị trí tool và trạng thái nút → nút back/forward và virtual key sang InputDispatcher → chạm trong vùng hiển thị, hover, pointer được chuyển tiếp → InputDispatcher áp chính sách cửa sổ, quyết định đánh thức, giao cho app.',
        '<b>Hiệu chuẩn</b> (nội suy tuyến tính): vị trí (scale về pixel, bù xoay màn hình khi orientation-aware), kích thước (hình học/đường kính/diện tích với scale, bias, summing), áp suất chuẩn hoá 0,0–1,0 (hoặc fallback), orientation/tilt chuyển thành góc, distance scale hoặc 0.',
        '<b>Virtual key</b>: kernel lộ virtual key map mô tả mã phím Linux, tâm, rộng, cao theo toạ độ màn hình; cần key layout và key character map đi kèm.',
        '<b>Cử chỉ pointer gián tiếp</b>: một ngón di chuyển con trỏ, chạm là click; nhiều ngón kéo, cuộn, zoom, xoay.',
        '<b>Palm rejection (Android 13+)</b>: phân tích 90 ms đầu của contact, khoảng cách tới mép, kích thước; pointer bị từ chối bị bỏ hoặc cancel. Bật cần đặt độ phân giải trục chạm trong driver, kiểm bằng <code>getevent</code>, bật cờ cấu hình thiết bị và khởi động lại <code>system_server</code>.'
      ] },
      { t: 'widget', name: 'touch-classify', title: 'Phân loại thiết bị cảm ứng' }
    ] },
    { icon: '⌨️', title: 'Bàn phím vật lý', blocks: [
      { t: 'list', items: [
        '<b>Phân loại</b>: thiết bị là bàn phím nếu báo Linux key code 0–0xff (hoặc <code>KEY_OK</code>–<code>KEY_MAX</code>) hoặc mã nút joystick/gamepad như <code>BTN_0</code>–<code>BTN_9</code>; joystick và gamepad vì thế dùng key map. Sau đó nạp IDC và key layout rồi kiểm tra: bàn phím chữ (có phím ánh xạ <code>KEYCODE_Q</code> ⇒ <code>KEYBOARD_QWERTY</code>), D-pad (đủ năm phím ⇒ <code>NAVIGATION_DPAD</code>), gamepad (<code>KEYCODE_BUTTON_A</code>…).',
        '<b>Layout</b>: thuộc tính <code>keyboard.layout</code> (khoảng trắng thành gạch dưới) và <code>keyboard.characterMap</code>; mặc định <code>Generic.kl</code> từ Honeycomb (trước đó <code>qwerty.kl</code>). Cùng một phím vật lý cho key code khác nhau theo layout ngôn ngữ (HID usage không đổi: phím trên-trái “Q” kiểu US là <code>KEYCODE_Q</code>, kiểu Pháp là <code>KEYCODE_A</code>).',
        '<b>Phím bổ trợ</b>: InputReader cập nhật meta state (nhấn Shift trái đặt <code>META_SHIFT_LEFT_ON</code> và <code>META_SHIFT_ON</code>); phím Function gửi với <code>META_FUNCTION</code>; HID usage 0x07 0xE0–0xE7 là Control, Shift, Alt, GUI. Caps Lock ánh xạ <code>KEYCODE_CAPS_LOCK</code>; driver nên hỗ trợ LED Caps/Scroll/Num Lock khi bàn phím có đèn.',
        '<b>Hard keyboard</b>: bàn phím tích hợp được gán device ID 0 qua <code>keyboard.builtIn</code> (mặc định 1 với tên kết thúc <code>-keypad</code>); bàn phím chức năng đặc biệt không bao giờ đăng ký là built-in.',
        '<b>IME</b>: sự kiện phím trước tiên tới xử lý pre-IME của view focus; nếu app không xử lý và IME đang hoạt động thì IME nhận; IME không tiêu thụ thì tiếp tục dispatch chuẩn.',
        '<b>Wake keys</b>: InputDispatcher gọi <code>WindowManagerPolicy.interceptKeyBeforeQueueing</code> để đánh thức máy; EventHub giữ wake lock suốt đường này. Driver keypad nhúng nên gửi release cho phím đang giữ trước khi ngủ để tránh phím kẹt tự lặp.'
      ] }
    ] }
  ],
  summary: [
    'Pipeline: thiết bị → kernel driver (evdev) → EventHub → InputReader → InputDispatcher → cửa sổ.',
    'Key layout (.kl): Linux code → Android code + cờ FUNCTION/GESTURE/VIRTUAL; key character map (.kcm): key code → ký tự; IDC (.idc): thuộc tính riêng thiết bị (device.internal, touch.deviceType…).',
    'Touch: multi-touch Protocol B, không clamp toạ độ, empty sync khi nhấc hết; palm rejection từ Android 13.',
    'Bàn phím: phân loại theo key code Linux, layout theo ngôn ngữ, meta state, IME nhận sự kiện sau pre-IME.'
  ],
  cards: [
    ['Các tầng pipeline input?', 'Thiết bị → kernel driver → EventHub → InputReader → InputDispatcher.'],
    ['EventHub làm gì?', 'Đọc sự kiện thô từ evdev của từng thiết bị.'],
    ['InputReader làm gì?', 'Giải mã sự kiện thô theo lớp thiết bị, áp key layout/character map.'],
    ['InputDispatcher làm gì?', 'Chuyển sự kiện tới cửa sổ phù hợp, áp chính sách, quyết định đánh thức.'],
    ['.kl là gì?', 'Key layout: ánh xạ mã Linux sang Android + cờ chính sách.'],
    ['Cờ VIRTUAL?', 'Đánh dấu phím mềm/capacitive với debounce đặc biệt.'],
    ['Thứ tự tên file .kl?', 'Vendor_Product_Version → Vendor_Product → DEVICE_NAME → Generic.'],
    ['.kcm là gì?', 'Key character map: đổi key code + bổ trợ thành ký tự Unicode.'],
    ['Năm kiểu bàn phím trong .kcm?', 'NUMERIC, PREDICTIVE, ALPHA, FULL, SPECIAL_FUNCTION.'],
    ['fallback trong .kcm?', 'Gửi phím thay thế nếu app không xử lý (ESCAPE → BACK).'],
    ['.idc là gì?', 'Input device configuration: thuộc tính riêng của thiết bị (đặc biệt màn hình cảm ứng).'],
    ['device.internal ảnh hưởng gì?', 'Thiết bị trong thường không đánh thức màn hình; ngoài thì dễ đánh thức.'],
    ['Phân biệt touch screen và touch pad?', 'Touch screen gắn với màn hình; touch pad không (digitizer tablet).'],
    ['Palm rejection từ Android mấy?', 'Android 13 (phân tích 90 ms đầu).'],
    ['Lệnh kiểm trục chạm?', 'getevent.'],
    ['Công cụ kiểm tra file keymap?', 'validatekeymaps.']
  ],
  quiz: [
    { q: 'Thành phần đọc sự kiện thô từ evdev:', o: ['InputDispatcher', 'EventHub', 'WindowManager', 'ViewRoot'], a: 1, e: 'InputReader xử lý sau đó.' },
    { q: 'Thành phần chuyển sự kiện tới cửa sổ:', o: ['EventHub', 'InputReader', 'InputDispatcher', 'SurfaceFlinger'], a: 2, e: 'Cuối pipeline.' },
    { q: 'Key layout mặc định cho bàn phím/joystick ngoài:', o: ['Virtual.kl', 'Generic.kl', 'qwerty.kl (hiện nay)', 'Default.kl'], a: 1, e: 'Từ Honeycomb.' },
    { q: 'Cờ dành cho nút capacitive:', o: ['FUNCTION', 'GESTURE', 'VIRTUAL', 'WAKE'], a: 2, e: 'Cho phím mềm.' },
    { q: 'Kiểu .kcm chỉ có HOME, POWER:', o: ['FULL', 'ALPHA', 'NUMERIC', 'SPECIAL_FUNCTION'], a: 3, e: 'Phím không gõ chữ.' },
    { q: 'Hành vi fallback KEYCODE dùng khi:', o: ['App không xử lý phím gốc', 'Luôn luôn', 'Phím kẹt', 'Tắt máy'], a: 0, e: 'Ví dụ ESCAPE → BACK.' },
    { q: 'Thuộc tính IDC mặc định = 1 cho:', o: ['USB', 'Bluetooth', 'Bus khác (nhúng)', 'Không đâu'], a: 2, e: 'device.internal.' },
    { q: 'Touch driver KHÔNG nên:', o: ['Dùng Protocol B', 'Clamp toạ độ vào vùng active', 'Báo empty sync', 'Đăng ký đúng trục'], a: 1, e: 'Để chuyển động mượt qua mép.' },
    { q: 'Phím bấm đầu tiên tới đâu khi có IME:', o: ['IME', 'Pre-IME của view focus', 'WindowManager', 'Kernel'], a: 1, e: 'Rồi IME, rồi dispatch chuẩn.' },
    { q: 'Bàn phím tích hợp có device ID:', o: ['−1', '0', '1', '255'], a: 1, e: 'Qua keyboard.builtIn; ảo là −1.' },
    { q: 'Virtual key quiet time khuyến nghị tối đa:', o: ['50 ms', '100 ms', '250 ms', '1 s'], a: 2, e: 'Đa số thiết bị nên tắt.' }
  ],
  match: [
    ['EventHub', 'Đọc evdev'],
    ['InputReader', 'Giải mã theo lớp thiết bị'],
    ['InputDispatcher', 'Gửi tới cửa sổ'],
    ['.kl', 'Key layout'],
    ['.kcm', 'Key character map'],
    ['.idc', 'Cấu hình thiết bị input'],
    ['getevent', 'Xem sự kiện input thô']
  ]
});
