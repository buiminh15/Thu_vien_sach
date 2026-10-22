// Android Input & Interaction – Chương 2: Haptics.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 2,
  title: 'Haptics (phản hồi xúc giác)',
  intro: 'Haptics là phần cứng và phần mềm tạo phản hồi bằng xúc giác. Việc <b>tạo</b> hiệu ứng phụ thuộc phần cứng rất nhiều, còn việc <b>cảm nhận</b> phụ thuộc sở thích người dùng — nhà sản xuất phải xử lý cả hai. Chương này nói về checklist triển khai, hằng số và primitive, hiệu ứng <b>PWLE</b> (Android 16+) và quy trình đánh giá phần cứng.',
  sections: [
    { icon: '📋', title: 'Checklist triển khai', blocks: [
      { t: 'p', x: 'API haptics phải hoạt động nhất quán giữa các thiết bị, nên cần cấu hình phần cứng mà nhà sản xuất có thể cài trên mọi thiết bị. Năm bước:' },
      { t: 'steps', items: [
        '<b>Implement constants</b>: xây danh sách hằng số cần cho haptics.',
        '<b>Implement primitives</b>: theo hướng dẫn composition primitive của HAL.',
        '<b>Map constants between HAL and API</b>: ánh xạ hằng số API công khai (là “chỗ giữ chỗ có tên” trong framework) sang hằng số HAL thực thi chúng.',
        '<b>Implement PWLE effects</b>: hiệu ứng đường bao biên độ và tần số.',
        '<b>Assess the hardware</b>: kiểm tra nhanh các hiệu ứng mục tiêu.'
      ] },
      { t: 'tip', x: 'Các trang liên quan: UX foundation (nguyên tắc cải tiến haptic Android), Haptics UX design (ảnh hưởng của mức tuân thủ phần cứng tới chất lượng người dùng), hardware assessment. Yêu cầu tương thích tham chiếu CDD.' }
    ] },
    { icon: '🔔', title: 'Hằng số và primitive', blocks: [
      { t: 'p', x: 'Hằng số và primitive do <b>vibrator HAL</b> định nghĩa và framework ánh xạ tới API công khai. Ba nhóm:' },
      { t: 'table', head: ['Nhóm', 'API', 'Nội dung'], rows: [
        ['<b>Predefined effect</b>', '<code>VibrationEffect.createPredefined()</code>', '<code>EFFECT_TICK</code>, <code>EFFECT_CLICK</code>, <code>EFFECT_HEAVY_CLICK</code>, <code>EFFECT_DOUBLE_CLICK</code> — biểu diễn mức năng lượng, không phải sự kiện UI'],
        ['<b>Feedback constants</b>', '<code>View.performHapticFeedback()</code>', '<code>KEYBOARD_PRESS</code>, <code>KEYBOARD_RELEASE</code>, <code>VIRTUAL_KEY</code>, <code>LONG_PRESS</code>, <code>CONFIRM</code>, <code>REJECT</code>, <code>GESTURE_START</code>/<code>GESTURE_END</code>…'],
        ['<b>Composition primitives</b>', '<code>VibrationEffect.Composition#addPrimitive(id, scale, delay)</code>', 'Cường độ co giãn được']
      ] },
      { t: 'list', items: [
        '<b>Fallback</b> khi thiết bị không hỗ trợ native: dùng waveform từ <code>createWaveform()</code>. <code>EFFECT_CLICK</code> và <code>EFFECT_HEAVY_CLICK</code> dùng timing của <code>config_virtualKeyVibePattern</code> và <code>config_longPressVibePattern</code>; <code>EFFECT_TICK</code> dùng <code>config_clockTickVibePattern</code>; <code>EFFECT_DOUBLE_CLICK</code> dùng (0, 30, 100, 30).',
        '<b>Primitive ngắn</b> (thường dưới 20 ms): <code>CLICK</code>, <code>TICK</code>, <code>LOW_TICK</code>. Chất lượng đo bằng <b>pulse-to-ring ratio (PRR)</b> — tỷ lệ dB giữa RMS xung chính và RMS “dư âm”. Hiệu chuẩn tick trong ngữ cảnh lớn (ví dụ 100 tick liên tiếp) vì cường độ cảm nhận cộng dồn.',
        '<b>Primitive chirp</b> (biên độ và tần số thay đổi, dài hơn): <code>SLOW_RISE</code>, <code>QUICK_RISE</code>, <code>QUICK_FALL</code>, <code>THUD</code>, <code>SPIN</code>.'
      ] },
      { t: 'table', head: ['Primitive', 'Thời lượng', 'Gia tốc đỉnh', 'Tần số'], rows: [
        ['CLICK', '12 ms (giới hạn < 30 ms)', '2 G (> 1 G)', 'Gần tần số cộng hưởng'],
        ['TICK', '5 ms (< 20 ms)', 'Nửa CLICK, 1 G (0,5–1 G)', '2× cộng hưởng (< 500 Hz)'],
        ['LOW_TICK', '12 ms (< 30 ms)', '0,25 G (0,2–0,5 G)', '2/3 cộng hưởng (< 100 Hz)'],
        ['SLOW_RISE', '500 ms ± 20', '0,5 G (0,5–1 G)', '1/2 đến 2/3 cộng hưởng'],
        ['QUICK_RISE', '150 ms ± 20', 'Như SLOW_RISE', 'Như SLOW_RISE'],
        ['QUICK_FALL', '100 ms ± 20', '1 G (0,5–2 G)', '2× đến 1× cộng hưởng'],
        ['THUD', '300 ms ± 20', '0,25 G (0,2–0,5 G)', '1/2 đến 1/3 cộng hưởng (tốt nhất < 100 Hz)'],
        ['SPIN', '150 ms ± 20', '0,5 G (0,25–0,75 G)', '2/3 → 1/3 rồi về 1/2 cộng hưởng']
      ] },
      { t: 'list', items: [
        '<b>Gợi ý cài đặt</b>: primitive ngắn dùng motor overdrive ở lúc bắt đầu và active braking ở lúc kết thúc để tăng/giảm nhanh (sóng vuông có thể làm một số motor tăng tốc nhanh hơn sóng sin). Nếu đáp ứng ngoài cộng hưởng yếu: SLOW_RISE dùng quét sin 1/2× → 1× cộng hưởng; THUD bắt đầu cường độ đầy ở cộng hưởng rồi giảm xuống tần số thấp nhất cảm nhận được (có thể tăng cường độ drive ở tần số thấp); SPIN quét sin nhanh 1/2× → 1× rồi quay lại. Gọi SPIN hai lần liên tiếp (hoặc ba lần trong composition) cho cảm giác quay không đều.',
        'Vị trí accelerometer và cách cầm máy ảnh hưởng mạnh tới phép đo — làm theo hướng dẫn hardware assessment trước khi so với bảng mục tiêu.'
      ] },
      { t: 'widget', name: 'haptic-primitive', title: 'Primitive nào phù hợp?' }
    ] },
    { icon: '📈', title: 'Hiệu ứng PWLE (Android 16+)', blocks: [
      { t: 'p', x: '<b>PWLE</b> (piecewise linear envelope) là chuỗi điểm xác định tần số rung và gia tốc theo thời gian, cho phản hồi phong phú hơn. Android 16+ có hai API và yêu cầu thiết bị cài ba khả năng HAL: báo <b>tần số cộng hưởng</b>, ánh xạ <b>FOAM</b> (frequency → output acceleration) và <b>compose PWLE waveform</b>.' },
      { t: 'table', head: ['API', 'Tham số / quy tắc'], rows: [
        ['<b>Basic</b> (<code>BasicEnvelopeBuilder</code>)', 'Tham số cảm nhận: <b>intensity</b> (0–1, độ mạnh cảm nhận), <b>sharpness</b> (0–1, mượt vs sắc), <b>duration</b> (ms chuyển tới điểm kế). Framework đổi intensity → biên độ vật lý bằng luật luỹ thừa vì cảm nhận không tuyến tính theo gia tốc. Phải bắt đầu và kết thúc ở intensity 0 (API ép điểm đầu, ném exception nếu điểm cuối ≠ 0). Thiết bị hỗ trợ ≥ 20 ms giữa các điểm và ≥ 16 điểm (VTS kiểm)'],
        ['<b>Advanced</b> (<code>WaveformEnvelopeBuilder</code>)', 'Biên độ chuẩn hoá (0–1, so với tối đa FOAM ở tần số đó), tần số Hz, duration; framework giữ nguyên nhưng chèn điểm biên độ 0 đầu. Tần số ngoài dải thiết bị ⇒ không rung, nên cần truy vấn dải trước']
      ] },
      { t: 'list', items: [
        '<b>FOAM</b> ánh xạ tần số (Hz) → gia tốc đầu ra tối đa (G đỉnh): định nghĩa dải tần đầy đủ, làm mỏ neo cho ánh xạ intensity/sharpness của Basic API, và lộ cho app qua <code>VibratorFrequencyProfile</code>. Với Basic API, dải sharpness gồm các tần số mà đầu ra vượt ngưỡng phát hiện của con người 10 dB và phải chứa tần số cộng hưởng. Có thể suy FOAM từ đường cong điện áp tối đa; với LRA dùng mô hình khối-lò xo bậc hai (điện áp, điện trở cuộn dây, khối lượng, tần số tự nhiên, hệ số phẩm chất); đổi tần số góc sang Hz; lấy mẫu dày (ví dụ bước 1 Hz trong ±10 Hz quanh đỉnh) để nội suy chính xác.',
        '<b>Mô hình cảm nhận</b>: cường độ cảm nhận là <i>sensation level (SL)</i> — dB trên ngưỡng phát hiện ở tần số đó; gia tốc G = 10^(dB/20) với dB = SL + ngưỡng — giúp cường độ cảm nhận đổi tuyến tính giữa các điểm điều khiển.',
        '<b>Khả năng HAL</b>: <code>CAP_COMPOSE_PWLE_EFFECTS_V2</code> (từ <code>IVibrator.getCapabilities</code>), <code>getFrequencyToOutputAccelerationMap</code>, <code>getPwleV2PrimitiveDurationMinMillis</code>/<code>MaxMillis</code>, <code>getPwleV2CompositionSizeMax</code> (giới hạn số primitive của <code>composePwleV2</code>). Hiệu ứng Basic vượt giới hạn sẽ được framework tự điều chỉnh để giữ ý đồ nhà thiết kế.',
        '<b>Mẹo</b>: suy FOAM từ giới hạn điện áp đã đo (dữ liệu không an toàn có thể hỏng actuator); đảm bảo dải tần chứa cộng hưởng và vượt ngưỡng phát hiện 10 dB; tôn trọng giới hạn thời lượng và kích thước composition; mọi envelope bắt đầu và kết thúc ở 0.'
      ] }
    ] },
    { icon: '🔬', title: 'Đánh giá phần cứng haptic', blocks: [
      { t: 'p', x: 'Đo hiệu năng haptic bằng kết quả định lượng cho <b>ba hiệu ứng mục tiêu</b>, mỗi cái lấy mẫu qua phương pháp chung. Kết quả đưa vào <b>performance map</b> để so sánh theo ngữ cảnh (không phải đạt/không đạt): so với đối thủ cùng phân khúc giá và loại actuator, có đạt kỳ vọng không, cần cải thiện gì.' },
      { t: 'table', head: ['Hiệu ứng mục tiêu', 'Chi tiết'], rows: [
        ['1. <b>Predefined short constant</b>', '<code>VibrationEffect.EFFECT_CLICK</code> — mẫu số chung trong ánh xạ HAL–API, tương ứng <code>HapticFeedbackConstants.KEYBOARD_PRESS</code> (phản hồi phổ biến nhất); chỉ báo mức sẵn sàng cho “clear haptics”'],
        ['2. <b>Short custom effect</b>', '<code>VibrationEffect.createOneShot(20, 255)</code>; 20 ms là tối đa khuyến nghị cho một xung đơn (dài hơn thành rung “buzzy”)'],
        ['3. <b>Long custom effect có đổi biên độ</b>', '<code>createWaveform()</code> với timings {500, 500}, amplitudes {128, 255} — dốc biên độ 500 ms từ 50% lên 100%; chỉ báo hỗ trợ “rich haptics”; nhanh: <code>Vibrator.hasAmplitudeControl()</code> phải trả true']
      ] },
      { t: 'steps', items: ['Set up the testing equipment', 'Set up the test software', 'Measure and record the target effects', 'Analyze the waveform', 'Compare results using the performance map'] }
    ] }
  ],
  summary: [
    'Checklist 5 bước: constants, primitives, mapping HAL↔API, PWLE, đánh giá phần cứng.',
    'Primitive ngắn (CLICK/TICK/LOW_TICK) và chirp (SLOW_RISE/QUICK_RISE/QUICK_FALL/THUD/SPIN) với mục tiêu thời lượng, gia tốc, tần số.',
    'PWLE (Android 16+): Basic (intensity/sharpness) và Advanced (amplitude/frequency); FOAM, tối thiểu 20 ms/16 điểm.',
    'Đánh giá phần cứng: 3 hiệu ứng mục tiêu → performance map để so sánh.'
  ],
  cards: [
    ['Hai mặt của haptics?', 'Tạo hiệu ứng (phụ thuộc phần cứng) và cảm nhận (phụ thuộc người dùng).'],
    ['Bốn predefined effect?', 'EFFECT_TICK, CLICK, HEAVY_CLICK, DOUBLE_CLICK.'],
    ['API cho feedback constants?', 'View.performHapticFeedback().'],
    ['Primitive ngắn?', 'CLICK, TICK, LOW_TICK.'],
    ['Primitive chirp?', 'SLOW_RISE, QUICK_RISE, QUICK_FALL, THUD, SPIN.'],
    ['PRR là gì?', 'Pulse-to-ring ratio: tỷ lệ dB RMS xung chính so với RMS dư âm.'],
    ['CLICK mục tiêu?', '12 ms, 2 G, gần tần số cộng hưởng.'],
    ['TICK mục tiêu?', '5 ms, nửa CLICK (1 G), 2× cộng hưởng.'],
    ['THUD mục tiêu?', '300 ms, 0,25 G, 1/2–1/3 cộng hưởng.'],
    ['PWLE là gì?', 'Piecewise linear envelope: chuỗi điểm tần số/gia tốc theo thời gian (Android 16+).'],
    ['FOAM?', 'Ánh xạ tần số → gia tốc đầu ra tối đa.'],
    ['Basic PWLE tham số?', 'Intensity, sharpness, duration.'],
    ['Giới hạn tối thiểu Basic PWLE?', '≥ 20 ms giữa các điểm, ≥ 16 điểm.'],
    ['Envelope phải bắt đầu/kết thúc ở?', 'Intensity/biên độ 0.'],
    ['Ba hiệu ứng đánh giá phần cứng?', 'EFFECT_CLICK, one-shot 20 ms, waveform dốc biên độ 500 ms.']
  ],
  quiz: [
    { q: 'API phát hiệu ứng định sẵn:', o: ['createPredefined()', 'createOneShot()', 'addPrimitive()', 'performFeedback()'], a: 0, e: 'VibrationEffect.' },
    { q: 'Primitive nào là chirp?', o: ['CLICK', 'TICK', 'SPIN', 'LOW_TICK'], a: 2, e: 'Cùng SLOW_RISE, QUICK_RISE, QUICK_FALL, THUD.' },
    { q: 'Thời lượng mục tiêu của CLICK:', o: ['5 ms', '12 ms', '100 ms', '500 ms'], a: 1, e: 'Giới hạn < 30 ms.' },
    { q: 'Tần số mục tiêu của TICK:', o: ['1/2 cộng hưởng', '2× cộng hưởng', '1/3 cộng hưởng', 'Đúng cộng hưởng'], a: 1, e: 'Giới hạn < 500 Hz.' },
    { q: 'PWLE có từ:', o: ['Android 12', 'Android 14', 'Android 15', 'Android 16'], a: 3, e: 'Hai API Basic/Advanced.' },
    { q: 'Basic PWLE: intensity nằm trong khoảng:', o: ['0–1', '0–255', '0–100 Hz', '−1–1'], a: 0, e: 'Cùng sharpness 0–1.' },
    { q: 'Hạn chế tối thiểu điểm của Basic PWLE:', o: ['4 điểm', '8 điểm', '16 điểm', '64 điểm'], a: 2, e: 'Và ≥ 20 ms giữa các điểm.' },
    { q: 'Tần số ngoài dải thiết bị với Advanced API:', o: ['Rung nhẹ', 'Không rung', 'Lỗi build', 'Rung mạnh'], a: 1, e: 'Nên truy vấn dải trước.' },
    { q: 'Khoảng thời gian tối đa khuyến nghị cho xung đơn:', o: ['5 ms', '20 ms', '100 ms', '1 s'], a: 1, e: 'Dài hơn thành buzzy.' },
    { q: 'Kiểm nhanh hỗ trợ rich haptics:', o: ['hasAmplitudeControl()', 'isVibrating()', 'getResonantFrequency()', 'cancel()'], a: 0, e: 'Phải trả true cho waveform đổi biên độ.' }
  ],
  match: [
    ['EFFECT_CLICK', 'Hiệu ứng định sẵn mẫu số chung'],
    ['PRR', 'Chất lượng primitive ngắn'],
    ['FOAM', 'Tần số → gia tốc tối đa'],
    ['PWLE', 'Đường bao tần số/biên độ'],
    ['performHapticFeedback', 'Phản hồi UI qua View'],
    ['LRA', 'Actuator cộng hưởng tuyến tính'],
    ['performance map', 'So sánh kết quả đánh giá']
  ]
});
