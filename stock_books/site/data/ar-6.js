// Android Architecture – Chương 6: AIDL và Binder IPC.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aosparch = BOOK_DATA.aosparch || { chapters: [] };
BOOK_DATA.aosparch.chapters.push({
  n: 6,
  title: 'AIDL và Binder (IPC)',
  intro: '<b>Binder</b> là hệ thống giao tiếp liên tiến trình của Android; <b>AIDL</b> là cách định nghĩa giao diện Binder (khuyến nghị thay HIDL). Chương này nói về luồng gọi Binder, thread pool và deadlock, <b>Stable AIDL</b> với versioning/freeze, và cách xử lý app ở trạng thái cached/frozen.',
  sections: [
    { icon: '🔁', title: 'Binder: giao tiếp liên tiến trình', blocks: [
      { t: 'p', x: 'Binder cho phép một lời gọi hàm chạy ở tiến trình khác trong khi trông như lời gọi cục bộ. Tiến trình gọi là <b>client</b> (đầu cuối là <b>binder proxy</b>); tiến trình được gọi là <b>server</b> (đầu cuối là <b>binder node</b>).' },
      { t: 'steps', items: [
        'Proxy đóng gói <b>node ID</b>, <b>method ID</b> và buffer đối số thành một transaction.',
        '<b>Binder kernel driver</b> sao chép transaction sang tiến trình server.',
        'Một thread trong server chuyển nó cho node.',
        'Kết quả quay về theo cùng đường.'
      ] },
      { t: 'list', items: [
        'Ví dụ dùng: app gọi system server; app camera gọi camera server và HAL; app gọi app khác; <code>installd</code> làm việc với <code>artd</code>.',
        'Giao diện nên định nghĩa bằng <b>AIDL</b>; HIDL deprecated, không khuyến nghị cho bản cài đặt mới.'
      ] },
      { t: 'h3', x: 'Thread và deadlock' },
      { t: 'list', items: [
        'Mọi tiến trình chứa node cần một <b>pool từ một thread trở lên</b> để xử lý transaction đến; thread chờ trong driver, kernel đánh thức một thread khi có transaction. Thread tạo theo nhu cầu tới mức tối đa và sống tới khi tiến trình thoát; libbinder mặc định <b>15 thread</b>, đổi bằng <code>setThreadPoolMaxThreadCount</code>.',
        '<b>Đồng bộ</b>: caller chờ đến khi callee trả. Giao dịch lồng nhau: nếu handler gọi ngược vào tiến trình đã nằm trong chuỗi, kernel có thể dùng lại thread đang chờ ban đầu (giống lời gọi cục bộ, có thể gây đệ quy bất ngờ).',
        '<b>Bất đồng bộ (<code>oneway</code>)</b>: caller tiếp tục ngay khi kernel nhận transaction, không lồng. Hàm không có <code>oneway</code> vẫn đồng bộ dù trả <code>void</code>. Binder tuần tự hoá các giao dịch bất đồng bộ từ cùng một node: có thể chạy trên thread khác nhau nhưng không bao giờ cùng lúc. Callee có thể chết/bị đóng băng mà không xử lý và không báo lỗi.',
        '<b>Quy tắc deadlock</b>: tránh giữ bất kỳ khoá nào khi thực hiện lời gọi binder (thứ tự khoá khó duy trì xuyên tiến trình). Một mutex duy nhất vẫn deadlock được vì lời gọi lồng quay lại đúng thread giữ khoá; giữ khoá qua lời gọi oneway cũng nguy hiểm vì sau này có thể đổi thành đồng bộ; tiến trình đơn thread vẫn cần khoá do reentrancy (sửa danh sách đang duyệt trong lúc gọi ra ngoài).'
      ] },
      { t: 'widget', name: 'binder-deadlock', title: 'Có nguy cơ deadlock không?' }
    ] },
    { icon: '🥶', title: 'App cached và frozen', blocks: [
      { t: 'list', items: [
        '<b>Cached</b>: app không có activity/service hiển thị; giữ trong bộ nhớ để người dùng quay lại nhưng không được làm việc chủ động. Khi một tiến trình bind tới tiến trình khác (<code>bindService</code>), trạng thái server được nâng ít nhất bằng client (trừ <code>Context.BIND_WAIVE_PRIORITY</code>); quan hệ một chiều. Tạm dừng gửi callback khi bên nhận cached; theo dõi bằng <code>ActivityManager.OnUidImportanceListener</code> lọc <code>IMPORTANCE_CACHED</code>.',
        '<b>Frozen</b>: không có CPU, không chạy được gì. Gọi <b>đồng bộ</b> tới tiến trình frozen → hệ thống <b>kill</b> tiến trình đó (để thread gọi không bị chặn mãi gây starvation/deadlock). Gọi <b>oneway</b> được <b>đệm</b> tới khi unfreeze; tràn buffer thì bên nhận có thể crash; sự kiện có thể đã cũ.',
        'Theo dõi bằng <code>IBinder.addFrozenStateChangeCallback</code> (Java/Kotlin; C++ có API tương đương).'
      ] },
      { t: 'table', head: ['RemoteCallbackList – frozen callee policy', 'Hành vi / dùng cho'], rows: [
        ['<code>FROZEN_CALLEE_POLICY_DROP</code>', 'Bỏ callback tới app frozen — dữ liệu không còn ý nghĩa khi app cached (cảm biến thời gian thực)'],
        ['<code>FROZEN_CALLEE_POLICY_ENQUEUE_MOST_RECENT</code>', 'Chỉ giữ callback mới nhất, gửi khi unfreeze — cập nhật theo trạng thái (âm lượng hiện tại)'],
        ['<code>FROZEN_CALLEE_POLICY_ENQUEUE_ALL</code>', 'Xếp hàng tất cả — có thể tràn buffer hoặc tích sự kiện cũ']
      ] },
      { t: 'tip', x: 'System service (<code>system_server</code>, native daemon) nên theo dõi importance/frozen của app mà nó tương tác: dùng <code>Binder.getCallingUid()</code> để khớp lời gọi với dữ liệu importance, và đăng ký <code>FrozenStateChangeCallback</code> trên đúng <code>IBinder</code> khi app truyền binder (đăng ký callback). Tiến trình native/daemon hệ thống không chịu vòng đời cached/frozen này.' }
    ] },
    { icon: '📝', title: 'AIDL', blocks: [
      { t: 'list', items: [
        'AIDL (Android Interface Definition Language) trừu tượng hoá IPC: công cụ <code>aidl</code> biến file <code>.aidl</code> thành binding C++/Java (cũng NDK, Rust).',
        'Dùng giữa bất kỳ tiến trình Android nào (thành phần nền tảng hoặc app) nhưng <b>không phải API hướng ứng dụng</b>: SDK API không lộ AIDL trực tiếp (nền tảng có thể dùng AIDL để cài đặt SDK API).',
        'Thành phần cập nhật riêng — <b>APEX</b> (Android 10+) hoặc <b>HAL</b> (Android 11+) — phải dùng <b>Stable AIDL versioning</b>.',
        'Cơ chế: server đăng ký interface; client gọi; driver binder sao chép method ID + đối tượng vào buffer sang tiến trình khác, thread binder giải nén gọi object cục bộ. Cùng tiến trình và cùng backend thì không cần proxy → gọi trực tiếp.',
        'Gỡ lỗi: <code>adb shell dumpsys --help</code> (liệt kê/dump service), <code>adb shell service --help</code> (gửi lệnh thử).'
      ] },
      { t: 'h3', x: 'Stable AIDL (Android 10+)' },
      { t: 'p', x: 'Hoạt động như AIDL nhưng <b>hệ thống build theo dõi tương thích giao diện</b>. Bắt buộc dùng <b>structured AIDL</b> (parcelable khai báo trường trực tiếp trong AIDL) để build system đánh giá thay đổi parcelable có tương thích không. Interface không ổn định nếu build bằng core build system hoặc đặt <code>unstable: true</code>.' },
      { t: 'table', head: ['Thuộc tính <code>aidl_interface</code>', 'Ý nghĩa'], rows: [
        ['<code>name, srcs, local_include_dir</code>', 'Định danh module, file nguồn, gốc đường dẫn package'],
        ['<code>imports</code>', 'aidl_interface khác dùng tới, có thể ghim version (<code>-V1</code>)'],
        ['<code>versions_with_info</code>', 'Các phiên bản đã freeze — do build system quản lý, không sửa tay'],
        ['<code>stability</code>', 'Chỉ hỗ trợ <code>"vintf"</code>: cam kết ổn định phải giữ chừng nào còn được dùng'],
        ['<code>backend</code>', 'Bật Java, C++, NDK, Rust (Java/C++/NDK mặc định bật; Rust tắt mặc định đến Android 15)'],
        ['<code>frozen</code>', 'Từ Android 14: true khi không có thay đổi từ phiên bản freeze gần nhất']
      ] },
      { t: 'list', items: [
        '<b>Freeze</b>: <code>foo-freeze-api</code> lưu phiên bản mới ở <code>aidl_api/name</code>, tạo file <code>.hash</code>, cập nhật <code>versions_with_info</code>; <code>foo-update-api</code> làm mới <code>aidl_api/name/current</code> (top-of-tree). Build kiểm tra tương thích giữa các bản freeze và giữa ToT với bản freeze mới nhất.',
        '<b>Thay đổi được phép</b>: thêm method ở cuối (hoặc serial mới tường minh); thêm phần tử parcelable ở cuối kèm giá trị mặc định; thêm hằng số; thêm enumerator (Android 11); thêm trường union ở cuối (Android 12). Chỉ chủ sở hữu được sửa interface.',
        '<b>Tên stub</b>: <code>ifacename-Vversion-backend</code> (ví dụ <code>foo-V2-ndk</code>); từ Android 12 luôn có version trong tên. C++/NDK có macro <code>AIDL_VERSION_&lt;MODULE_NAME&gt;</code> để rẽ nhánh lúc biên dịch.',
        '<b>Khác biệt lúc chạy</b>: gọi method mới trên server cũ → <code>STATUS_UNKNOWN_TRANSACTION</code> (NDK), <code>UNKNOWN_TRANSACTION</code> (C++), <code>RemoteException</code> (Java); trường parcelable mới nhận giá trị mặc định khi peer cũ gửi; enumerator/hằng chưa biết nên bỏ qua/từ chối; union có trường chưa biết gửi cho receiver cũ → <code>BAD_VALUE</code> (trừ oneway); client dùng <code>getInterfaceVersion()</code>, <code>getInterfaceHash()</code>; một linker namespace chỉ chứa một version của một aidl_interface; <code>setDefaultImpl</code> deprecated, dùng <code>I*Delegator</code>.',
        '<b>Phát triển theo cờ</b>: interface chưa freeze không được ship trên thiết bị release; cờ <code>RELEASE_AIDL_USE_UNFROZEN</code> = true dùng bản chưa freeze, = false thì hành xử như bản freeze gần nhất. Từ Android 15, <code>libvintf</code> đổi version trong manifest từ N xuống N-1 khi cờ false. Cuttlefish là mục tiêu phát triển.',
        '<b>VINTF</b> mô tả version mong đợi/cung cấp ở hai phía. <b>Chuyển đổi</b> AIDL hiện có: làm mọi phụ thuộc ổn định → viết lại parcelable với trường tường minh → tạo aidl_interface có version và freeze.'
      ] },
      { t: 'widget', name: 'aidl-compat', title: 'Thay đổi này có tương thích với Stable AIDL?' },
      { t: 'tip', x: 'Mục AIDL còn có: AIDL language, backends, AIDL for HALs, run AIDL services dynamically, annotations, FMQ with AIDL, AIDL fuzzing, style guide. Mục Binder còn có: priority inheritance.' }
    ] }
  ],
  summary: [
    'Binder: proxy → transaction (node ID, method ID, buffer) → driver → thread pool server; AIDL là cách định nghĩa giao diện.',
    'Thread pool mặc định 15; tránh giữ khoá khi gọi binder; oneway tuần tự hoá theo node.',
    'App frozen: sync call → kill; oneway → đệm; RemoteCallbackList có 3 frozen callee policy.',
    'Stable AIDL: structured, aidl_interface, freeze/hash, chỉ thêm ở cuối; APEX (10+) và HAL (11+) phải dùng.'
  ],
  cards: [
    ['Binder là gì?', 'Hệ thống IPC của Android, gọi hàm xuyên tiến trình như cục bộ.'],
    ['Client/server endpoint?', 'Client: binder proxy; server: binder node.'],
    ['Transaction chứa gì?', 'Node ID, method ID, buffer đối số.'],
    ['libbinder mặc định bao nhiêu thread?', '15.'],
    ['oneway nghĩa là?', 'Bất đồng bộ, caller tiếp tục ngay khi kernel nhận.'],
    ['Hàm void không oneway?', 'Vẫn đồng bộ.'],
    ['Quy tắc chống deadlock?', 'Không giữ khoá nào khi gọi binder.'],
    ['Sync call tới app frozen?', 'Hệ thống kill tiến trình frozen.'],
    ['Oneway tới app frozen?', 'Được đệm tới khi unfreeze; tràn buffer có thể crash.'],
    ['DROP vs ENQUEUE_MOST_RECENT?', 'Bỏ callback vs giữ cái mới nhất.'],
    ['Stable AIDL từ khi nào?', 'Android 10.'],
    ['Thành phần nào bắt buộc Stable AIDL?', 'APEX (10+), HAL (11+).'],
    ['Thay đổi được phép của Stable AIDL?', 'Thêm method/trường ở cuối (có default), hằng, enumerator, trường union.'],
    ['Lệnh freeze?', 'foo-freeze-api.'],
    ['Gọi method mới trên server cũ (NDK)?', 'STATUS_UNKNOWN_TRANSACTION.']
  ],
  quiz: [
    { q: 'Binder node nằm ở:', o: ['Client', 'Server', 'Kernel', 'Bootloader'], a: 1, e: 'Client có proxy.' },
    { q: 'Số thread mặc định của libbinder:', o: ['4', '15', '32', '1'], a: 1, e: 'Đổi bằng setThreadPoolMaxThreadCount.' },
    { q: 'Giữ khoá khi gọi binder là:', o: ['Khuyến nghị', 'Nên tránh vì dễ deadlock', 'Bắt buộc', 'Vô hại'], a: 1, e: 'Thứ tự khoá khó duy trì xuyên tiến trình.' },
    { q: 'Gọi đồng bộ tới tiến trình frozen:', o: ['Được đệm', 'Tiến trình bị kill', 'Bị bỏ', 'Chờ vô hạn'], a: 1, e: 'Tránh thread bị chặn mãi.' },
    { q: 'Callback state-based (âm lượng) nên dùng:', o: ['DROP', 'ENQUEUE_MOST_RECENT', 'ENQUEUE_ALL', 'Không dùng'], a: 1, e: 'Chỉ cần giá trị mới nhất.' },
    { q: 'Stable AIDL yêu cầu parcelable:', o: ['Unstructured', 'Structured', 'Java Serializable', 'JSON'], a: 1, e: 'Để build đánh giá tương thích.' },
    { q: 'Thêm trường parcelable mới phải:', o: ['Ở đầu', 'Ở cuối với giá trị mặc định', 'Xoá trường cũ', 'Đổi tên'], a: 1, e: 'Peer cũ nhận default.' },
    { q: 'Stability duy nhất được hỗ trợ:', o: ['"vintf"', '"local"', '"system"', '"vendor"'], a: 0, e: 'Cam kết ổn định.' },
    { q: 'Cờ dùng interface chưa freeze:', o: ['RELEASE_AIDL_USE_UNFROZEN', 'AIDL_DEBUG', 'USE_NEW_AIDL', 'FREEZE_ALL'], a: 0, e: 'False thì hành xử như bản freeze gần nhất.' },
    { q: 'Cùng tiến trình, cùng backend thì AIDL:', o: ['Vẫn qua kernel', 'Gọi trực tiếp, không proxy', 'Lỗi', 'Dùng socket'], a: 1, e: 'Không cần proxy object.' }
  ],
  match: [
    ['binder proxy', 'Đầu client'],
    ['binder node', 'Đầu server'],
    ['oneway', 'Bất đồng bộ'],
    ['aidl_interface', 'Module khai báo Stable AIDL'],
    ['foo-freeze-api', 'Freeze phiên bản'],
    ['FrozenStateChangeCallback', 'Theo dõi frozen'],
    ['dumpsys', 'Liệt kê/dump service']
  ]
});
