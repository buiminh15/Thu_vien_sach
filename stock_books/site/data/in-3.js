// Android Input & Interaction – Chương 3: Neural Networks (NNAPI).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospinput = BOOK_DATA.aospinput || { chapters: [] };
BOOK_DATA.aospinput.chapters.push({
  n: 3,
  title: 'Neural Networks (NNAPI): driver, burst, cache, QoS',
  intro: 'Neural Networks HAL (NN HAL) trừu tượng hoá các thiết bị tính toán (GPU, DSP, NPU…) cho học máy. <b>Từ Android 15, NNAPI (NDK API) bị deprecated</b>, nhưng giao diện NN HAL vẫn được hỗ trợ. Chương này nói về kiến trúc driver, lịch sử phiên bản HAL, khám phá thiết bị, burst executions/FMQ, compilation caching và quality of service.',
  sections: [
    { icon: '🧠', title: 'Kiến trúc driver và vòng đời', blocks: [
      { t: 'list', items: [
        '<b>Kiến trúc</b>: mỗi driver thiết bị phải tuân giao diện HAL định nghĩa ở <code>hardware/interfaces/neuralnetworks</code>; driver mẫu ở <code>frameworks/ml/nn/driver/sample</code>.',
        '<b>Khởi tạo</b>: framework gọi <code>IDevice::getCapabilities_1_3</code> lấy kiểu dữ liệu hỗ trợ và hiệu năng (đo bằng ứng dụng benchmark NNAPI trên workload tham chiếu); cũng hỏi loại thiết bị, chuỗi phiên bản, extension, số file cache cần. Các giá trị này phải <b>không đổi giữa các lần reboot</b>.',
        '<b>Biên dịch</b>: framework gửi model cho driver ứng viên, driver báo phép toán nào hỗ trợ (lý do từ chối: kiểu dữ liệu, tham số hạn chế, giới hạn bộ nhớ); mỗi driver được chọn biên dịch phần của mình và trả handle prepared model. Tránh giữ tài nguyên lớn lúc này. Nếu chuẩn bị thất bại, framework chạy toàn bộ model trên <b>CPU</b>.',
        '<b>Thực thi</b>: đồng bộ (mặc định), bất đồng bộ, fenced (Android 11), burst. Fenced báo hai thời gian <code>timingLaunched</code> và <code>timingFenced</code>; khi kích thước output chưa biết, driver phải trả shape; buffer quá nhỏ thì chỉ ra output thiếu; thời gian báo bằng micro giây (framework đổi nano giây), <code>UINT64_MAX</code> khi không có.',
        '<b>Control flow & QoS</b> (Android 11): phép toán <code>IF</code> và <code>WHILE</code>; ưu tiên model và giới hạn thời gian chuẩn bị/thực thi.',
        '<b>Dọn dẹp</b>: framework nhả tham chiếu prepared model; driver thu hồi tài nguyên trong destructor. <b>CPU</b>: driver chỉ dùng CPU cho thiết lập, không tính đồ thị; framework cung cấp CPU implementation cho phép toán chuẩn (trừ phép toán vendor).',
        '<b>Tiện ích AOSP</b>: log chi tiết (<code>debug.nn.vlog</code>), chuyển/kiểm tra phiên bản, validate object, systrace, dump Graphviz.'
      ] },
      { t: 'table', head: ['NN HAL', 'Android', 'Bổ sung chính'], rows: [
        ['1.0', '8.1', 'Phiên bản đầu'],
        ['1.1', '9', '<code>ExecutionPreference</code>, phép toán mới, nới lỏng float32 → float16'],
        ['1.2', '10', 'Kiểu vô hướng, vendor extension, burst FMQ, AHardwareBuffer, output shape động, nhiều phép toán mới; bắt buộc device discovery'],
        ['1.3', '11', 'Lượng tử hoá signed 8-bit, fenced execution, control flow, QoS, memory domains']
      ] },
      { t: 'list', items: [
        '<b>Kiểm chứng</b>: VTS kiểm driver trực tiếp, CTS qua framework. Độ chính xác: float dùng sai số tuyệt đối/tương đối; lượng tử hoá cho lệch 1 (3 với <code>mobilenet_quantized</code>); boolean khớp chính xác. Fuzz bằng libFuzzer (<code>libneuralnetworks_driver_fuzzer</code>).',
        '<b>Bảo mật</b>: tiến trình app giao tiếp trực tiếp với tiến trình driver nên driver <b>phải validate mọi đối số</b> và ngăn app can thiệp lẫn nhau.',
        '<b>MLTS</b> (Android Machine Learning Test Suite): benchmark trong CTS/VTS đo độ trễ và độ chính xác trên model thật, so với TensorFlow Lite trên CPU; stress test báo SUCCESS, FAILURE, HANG hoặc CRASH.'
      ] }
    ] },
    { icon: '🔎', title: 'Device discovery và assignment (Android 10+)', blocks: [
      { t: 'p', x: 'Cho framework ML và app liệt kê thiết bị khả dụng và chọn thiết bị chạy model, thậm chí gán các phần khác nhau của model cho thiết bị khác nhau; báo chính xác phiên bản driver giúp tránh bất tương thích đã biết. <b>Bắt buộc</b> với NN HAL 1.2.' },
      { t: 'table', head: ['Loại thiết bị', 'Mô tả'], rows: [
        ['<b>OTHER</b>', 'Không thuộc loại nào, gồm driver dị thể quản lý nhiều thiết bị khác loại (nên lộ thêm <code>IDevice</code> riêng cho từng thiết bị bên dưới)'],
        ['<b>CPU</b>', 'CPU một hoặc nhiều nhân'],
        ['<b>GPU</b>', 'GPU chạy được model NNAPI và tăng tốc đồ hoạ (OpenGL ES, Vulkan)'],
        ['<b>ACCELERATOR</b>', 'Bộ xử lý thần kinh chuyên dụng (NPU)']
      ] },
      { t: 'list', items: [
        'Vendor cài hai phương thức trong <code>IDevice.hal</code>: <code>getType</code> và <code>getVersionString</code> (chuỗi dễ đọc, định dạng tuỳ vendor, <b>phải đổi mỗi phiên bản driver mới</b>). Tên interface theo mẫu <code>{VENDOR}-{DEVICE_NAME}</code>.'
      ] },
      { t: 'widget', name: 'nn-device', title: 'Thiết bị này thuộc loại nào?' }
    ] },
    { icon: '⚡', title: 'Burst executions và FMQ (HAL 1.2+)', blocks: [
      { t: 'p', x: '<b>Burst</b> là chuỗi lần chạy cùng một prepared model liên tiếp nhanh (khung hình camera, mẫu âm thanh). Đối tượng burst quản lý tập lần chạy và giữ tài nguyên giữa chúng để giảm overhead mỗi lần.' },
      { t: 'steps', items: [
        '<b>Gợi ý vòng đời</b>: burst tạo trước chuỗi và giải phóng sau → driver biết cần giữ trạng thái hiệu năng cao bao lâu.',
        '<b>Cache tài nguyên</b>: driver map memory object một lần và dùng lại; giải phóng khi burst bị huỷ hoặc runtime báo không cần.',
        '<b>Fast message queue (FMQ)</b>: request và result đi qua FIFO tròn trong shared memory thay vì HIDL → giảm độ trễ; bên nhận phát hiện dữ liệu mới bằng polling hoặc event flag dựa trên futex.'
      ] },
      { t: 'warn', x: 'FMQ không đảm bảo vòng đời và không phát hiện được peer đã chết → consumer có thể bị chặn mãi nếu producer crash; giảm thiểu bằng cách gắn mỗi FMQ với đối tượng burst cấp cao để driver biết khi burst kết thúc. FMQ chỉ chuyển plain-old-data nên giá trị phức tạp được tuần tự hoá vào vector; handle memory pool chuyển theo yêu cầu qua callback HIDL. Producer dùng <code>MessageQueue::writeBlocking</code> hoặc <code>write</code>.' },
      { t: 'list', items: [
        'Giao diện: <code>types.hal</code> (<code>FmqRequestDatum</code>, <code>FmqResultDatum</code>), <code>IBurstContext.hal</code>, <code>IBurstCallback.hal</code> (lấy memory object cho slot ID chưa biết), <code>IPreparedModel.hal</code> thêm <code>configureExecutionBurst</code>.',
        'Cài đặt dễ nhất: <code>ExecutionBurstServer::create</code> — overload nhận <code>IPreparedModel</code> (chạy qua <code>executeSynchronously</code>) hoặc <code>IBurstExecutorWithCache</code> (kiểm soát tinh hơn). Mỗi context có luồng lắng nghe đọc request queue, chạy suy luận, ghi result queue; tự dọn khi client nhả tham chiếu. Driver mẫu dùng overload có cache (thêm chút overhead so với tự cài).'
      ] }
    ] },
    { icon: '💾', title: 'Compilation caching (Android 10+)', blocks: [
      { t: 'p', x: 'Tuỳ chọn, hoạt động với NN HAL 1.2: lưu artifact đã biên dịch để app khởi động nhanh hơn.' },
      { t: 'table', head: ['Trường hợp', 'Luồng'], rows: [
        ['<b>Cache hit</b>', 'App cấp thư mục cache và checksum riêng model; runtime tìm file khớp, đưa handle cho driver qua <code>prepareModelFromCache</code> để dựng lại prepared model'],
        ['<b>Cache miss</b>', 'Runtime tạo file cache rỗng theo khoá (checksum, execution preference, kết quả partition) rồi gọi <code>prepareModel_1_2</code>; driver biên dịch và ghi dữ liệu cache'],
        ['<b>Không có thông tin cache</b>', 'Biên dịch bình thường']
      ] },
      { t: 'list', items: [
        '<b>Token</b>: định danh độ dài cố định của prepared model, dùng chung khi lưu và nạp; client chọn token ít va chạm vì driver không phát hiện được va chạm (có thể gây thực thi lỗi hoặc output sai âm thầm).',
        '<b>Hai loại file cache</b>: <i>data cache</i> (dữ liệu hằng như buffer tensor đã tiền xử lý — hỏng nhiều nhất cho output sai) và <i>model cache</i> (nội dung nhạy cảm bảo mật như mã máy đã biên dịch). Driver quyết định chia, báo số file qua <code>getNumberOfCacheFilesNeeded</code>; vì nhiều luồng có thể chuẩn bị cùng model nên driver phải <b>khoá file</b>.',
        '<b>Bảo mật</b>: client sửa được thư mục cache của app nên driver phải phát hiện hỏng model cache trước khi nạp — ví dụ lưu ánh xạ token → hash bền qua reboot (khởi tạo lại khi cập nhật driver); để chống <b>TOCTOU</b>, tính hash từ buffer nội bộ chứ không phải từ file, cả lúc lưu và lúc nạp. Có thể quản ánh xạ bằng keystore Android hoặc thư viện <code>framework/ml/nn/driver/cache</code> (có sẵn <code>nnCache</code> cho lưu trữ bền, dùng được với mọi phiên bản NN HAL).',
        '<b>Nâng cao</b>: JIT hoặc biên dịch nhiều giai đoạn có thể cần truy cập cache sau khi lệnh compile trả về → driver phải nhân bản handle file và tự cài khoá.'
      ] }
    ] },
    { icon: '🚦', title: 'Quality of service (Android 11+)', blocks: [
      { t: 'p', x: 'Cho app đặt ưu tiên tương đối giữa các model, giới hạn thời gian chuẩn bị/thực thi, và nhận mã lỗi cụ thể hơn.' },
      { t: 'list', items: [
        '<b>Priority</b>: áp dụng cho model chuẩn bị bằng NN HAL 1.3, chỉ <b>tương đối với các model của cùng một app</b>; thực thi ưu tiên cao có thể dùng nhiều tài nguyên hơn và chiếm quyền/làm đói thực thi thấp. Gọi: <code>IDevice::prepareModel_1_3</code> (truyền priority tường minh), <code>prepareModelFromCache_1_3</code> (priority nằm trong tham số cache). Chiến lược: truyền thẳng priority cho driver/accelerator hỗ trợ; hàng đợi ưu tiên theo app trước accelerator; tạm dừng/huỷ việc ưu tiên thấp qua checkpoint/submodel. Vì thực thi xác định nên việc ưu tiên thấp có thể chạy lại từ đầu; dịch vụ nhận diện app qua UID (<code>IPCThreadState::getCallingUid</code>).',
        '<b>Deadline</b>: <code>OptionalTimePoint</code> trong các lệnh <code>prepareModel_1_3</code>, <code>prepareModelFromCache_1_3</code>, <code>execute_1_3</code>, <code>executeSynchronously_1_3</code>, <code>executeFenced</code>; driver ước lượng được thời gian có thể huỷ việc dự đoán trễ hạn — <b>chỉ mang tính tư vấn</b>, giúp giải phóng tài nguyên và trả quyền điều khiển sớm.',
        '<b>Mã lỗi mới (HAL 1.3)</b>: <code>MISSED_DEADLINE_TRANSIENT</code>/<code>_PERSISTENT</code>, <code>RESOURCE_EXHAUSTED_TRANSIENT</code>/<code>_PERSISTENT</code> (trước đó chỉ <code>GENERAL_FAILURE</code>). <i>TRANSIENT</i> = tạm thời, thử lại sau có thể được; <i>PERSISTENT</i> = các lời gọi giống hệt sẽ tiếp tục thất bại (model quá lớn, không thể kịp hạn).',
        '<b>Kiểm chứng</b>: VTS <code>VtsHalNeuralnetworksV1_3Target</code>; <code>ValidationTest</code> (từ chối priority không hợp lệ), <code>DeadlineTest</code>.'
      ] },
      { t: 'widget', name: 'nn-errors', title: 'Mã lỗi NN: tạm thời hay vĩnh viễn?' }
    ] }
  ],
  summary: [
    'NNAPI (NDK) deprecated từ Android 15; NN HAL vẫn được hỗ trợ.',
    'HAL 1.0 (8.1) → 1.1 (9) → 1.2 (10: extension, burst FMQ, device discovery) → 1.3 (11: fenced, control flow, QoS).',
    'Loại thiết bị: OTHER, CPU, GPU, ACCELERATOR; chuỗi phiên bản phải đổi mỗi bản driver.',
    'Burst + FMQ giảm overhead; compilation cache cần token ít va chạm, khoá file, phòng TOCTOU; QoS: priority, deadline, mã lỗi TRANSIENT/PERSISTENT.'
  ],
  cards: [
    ['NNAPI deprecated từ khi nào?', 'Android 15 (NN HAL vẫn hỗ trợ).'],
    ['NN HAL 1.2 ở Android mấy?', 'Android 10.'],
    ['NN HAL 1.3 thêm gì?', 'Signed 8-bit quant, fenced execution, control flow, QoS, memory domains.'],
    ['Nếu prepare thất bại?', 'Framework chạy toàn model trên CPU.'],
    ['Driver dùng CPU để làm gì?', 'Chỉ thiết lập, không tính đồ thị.'],
    ['Bốn loại thiết bị?', 'OTHER, CPU, GPU, ACCELERATOR.'],
    ['getVersionString yêu cầu?', 'Phải đổi với mỗi phiên bản driver mới.'],
    ['Burst execution?', 'Chuỗi lần chạy cùng prepared model liên tiếp, giữ tài nguyên giữa các lần.'],
    ['FMQ?', 'Fast message queue — FIFO tròn trong shared memory thay HIDL.'],
    ['Rủi ro của FMQ?', 'Không phát hiện peer chết; consumer có thể chặn mãi.'],
    ['Cache hit dùng hàm nào?', 'prepareModelFromCache.'],
    ['Data cache vs model cache?', 'Dữ liệu hằng vs nội dung nhạy cảm bảo mật (mã máy).'],
    ['Chống TOCTOU khi cache?', 'Tính hash từ buffer nội bộ, không từ file.'],
    ['Priority của QoS tương đối với?', 'Các model cùng một app.'],
    ['Deadline có bắt buộc?', 'Không, chỉ tư vấn.'],
    ['Mã lỗi TRANSIENT vs PERSISTENT?', 'Thử lại có thể được vs sẽ tiếp tục thất bại.']
  ],
  quiz: [
    { q: 'NNAPI NDK bị deprecated từ:', o: ['Android 11', 'Android 13', 'Android 15', 'Android 17'], a: 2, e: 'HAL vẫn được hỗ trợ.' },
    { q: 'Device discovery bắt buộc cho:', o: ['NN HAL 1.0', 'NN HAL 1.1', 'NN HAL 1.2', 'Không bắt buộc'], a: 2, e: 'Từ Android 10.' },
    { q: 'NPU thuộc loại:', o: ['CPU', 'GPU', 'ACCELERATOR', 'OTHER'], a: 2, e: 'Neural processing unit chuyên dụng.' },
    { q: 'Burst thực hiện FMQ qua:', o: ['Socket', 'Shared-memory FIFO', 'HTTP', 'File'], a: 1, e: 'Giảm độ trễ so với HIDL.' },
    { q: 'Mã lỗi nghĩa “thử lại sau có thể được”:', o: ['*_PERSISTENT', '*_TRANSIENT', 'GENERAL_FAILURE', 'INVALID_ARGUMENT'], a: 1, e: 'Ví dụ driver đang bận.' },
    { q: 'Model quá lớn cho driver gây mã:', o: ['RESOURCE_EXHAUSTED_PERSISTENT', 'MISSED_DEADLINE_TRANSIENT', 'NONE', 'DEVICE_UNAVAILABLE'], a: 0, e: 'Cùng việc không thể kịp hạn.' },
    { q: 'Token cache nên có:', o: ['Tỷ lệ va chạm cao', 'Tỷ lệ va chạm thấp', 'Độ dài biến thiên', 'Ngẫu nhiên mỗi lần'], a: 1, e: 'Driver không phát hiện va chạm.' },
    { q: 'Hash dùng cho chống TOCTOU tính từ:', o: ['File cache', 'Buffer nội bộ', 'Tên file', 'Token'], a: 1, e: 'Cả lúc lưu và nạp.' },
    { q: 'Priority QoS áp dụng cho model chuẩn bị bằng:', o: ['HAL 1.0', 'HAL 1.1', 'HAL 1.2', 'HAL 1.3'], a: 3, e: 'prepareModel_1_3.' },
    { q: 'Fenced execution từ:', o: ['Android 9', 'Android 10', 'Android 11', 'Android 12'], a: 2, e: 'NN HAL 1.3.' }
  ],
  match: [
    ['NN HAL', 'Trừu tượng thiết bị tính toán'],
    ['FMQ', 'Hàng đợi shared-memory'],
    ['prepareModelFromCache', 'Dựng lại từ cache'],
    ['MLTS', 'Benchmark ML trong CTS/VTS'],
    ['ACCELERATOR', 'NPU'],
    ['TRANSIENT', 'Lỗi tạm thời'],
    ['OptionalTimePoint', 'Deadline']
  ]
});
