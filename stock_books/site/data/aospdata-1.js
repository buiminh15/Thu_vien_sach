// Android data use (source.android.com/docs/core/data) – bản tiếng Việt dễ hiểu – Chương 1–3.
// Khối "📚 Bổ sung ngoài tài liệu" = giải thích thêm để dễ hiểu (không nằm trong trang docs).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospdata = BOOK_DATA.aospdata || { chapters: [] };
const D1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.aospdata.chapters.push(

{
  n: 1,
  title: 'Tổng quan: Android theo dõi và kiểm soát dữ liệu mạng thế nào',
  intro: 'Android giúp người dùng <b>hiểu và kiểm soát</b> lượng dữ liệu mạng thiết bị dùng: đo tổng mức dùng, đặt ngưỡng <b>cảnh báo</b> hoặc <b>giới hạn</b>, xem <b>theo từng ứng dụng</b>, và hạn chế dữ liệu nền. Tài liệu này dành cho <b>nhà tích hợp hệ thống (OEM) và nhà mạng</b> khi đưa Android lên thiết bị cụ thể, nên tập trung vào kỹ thuật phía hệ thống chứ không phải API cho lập trình viên app.',
  sections: [
    { icon: '🎯', title: 'Hệ thống làm được gì?', blocks: [
      { t: 'table', head: ['Chức năng', 'Ý nghĩa'], rows: [
        ['<b>Giám sát tổng mức dùng</b>', 'Đếm lưu lượng mạng của cả thiết bị theo thời gian'],
        ['<b>Cảnh báo / giới hạn</b>', 'Vượt <b>ngưỡng cảnh báo</b> → thông báo; vượt <b>hạn mức</b> (limit) → có thể <b>tắt dữ liệu di động</b>'],
        ['<b>Theo từng ứng dụng</b>', 'Lưu lượng gắn với <b>UID</b> của app; người dùng xem lịch sử trong Cài đặt (Settings)'],
        ['<b>Hạn chế dữ liệu nền</b>', 'Người dùng chặn app dùng mạng khi chạy nền (và <b>Data Saver</b> – chương 2)'],
        ['<b>Chu kỳ dùng dữ liệu</b>', 'Ngày reset hằng tháng do người dùng chọn (chương 6)'],
        ['<b>Loại trừ loại mạng</b>', 'Nhà mạng có thể không tính một số lưu lượng (“zero-rated”, chương 6)']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> hãy hình dung Android như <b>công tơ điện kiểu từng phòng</b>: không chỉ đo cả nhà (tổng dữ liệu) mà còn gắn công tơ cho <b>từng phòng</b> (từng app theo UID), có <b>còi báo</b> khi gần hết hạn mức và <b>cầu dao</b> để ngắt khi vượt hạn mức hoặc khi app chạy nền.' },
      { t: 'key', x: '<b>Nền tảng của mọi thứ là UID:</b> mỗi app Android chạy với một UID Linux riêng, và mỗi <b>socket</b> mạng thuộc về UID của tiến trình mở nó. Kernel đếm byte theo socket/UID rồi framework tổng hợp thành số liệu “app nào dùng bao nhiêu”.' }
    ] },
    { icon: '🧱', title: 'Các tầng của hệ thống', blocks: [
      { t: 'table', head: ['Tầng', 'Thành phần', 'Vai trò'], rows: [
        ['<b>Ứng dụng</b>', 'Settings (<code>packages/apps/Settings/.../datausage</code>), app dùng <code>TrafficStats</code>/<code>NetworkStatsManager</code>', 'Hiển thị cho người dùng, app tự gắn nhãn lưu lượng'],
        ['<b>Framework</b>', '<code>NetworkStatsService</code>, <code>NetworkPolicyManager</code>, <code>ConnectivityService</code>', 'Tổng hợp thống kê, áp chính sách (cảnh báo/giới hạn/chặn nền)'],
        ['<b>Native / netd</b>', '<code>system/netd</code> (<code>TrafficController</code>, <code>bpfloader</code>)', 'Cầu nối giữa framework và kernel'],
        ['<b>Kernel</b>', 'Cũ: <code>xt_qtaguid</code> + <code>xt_quota2</code>. Mới (Android 9+): <b>eBPF</b>', 'Đếm byte theo socket/UID/giao diện, chặn lưu lượng'],
        ['<b>Driver mạng</b>', '<code>dev_get_stats()</code> của từng thiết bị mạng', 'Cung cấp số liệu byte theo interface']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> chương 3 và 4 mô tả hai thế hệ cơ chế đếm trong kernel (<b>xt_qtaguid</b> cũ và <b>eBPF</b> mới); chương 5 nói về yêu cầu với driver và interface; chương 6 gom các cấu hình nhỏ (chu kỳ, loại mạng, tethering).' }
    ] },
    { icon: '🔐', title: 'Góc nhìn bảo mật và riêng tư', blocks: [
      { t: 'list', items: [
        '<b>Số liệu lưu lượng là dữ liệu nhạy cảm:</b> nó tiết lộ app nào đang liên lạc và lúc nào. Vì vậy Android <b>không cho app đọc trực tiếp</b> các file thống kê của kernel; app chỉ dùng API công khai (với giới hạn quyền).',
        '<b>Gán lại quyền sở hữu lưu lượng</b> (ví dụ dịch vụ tải xuống tính theo app yêu cầu) cần quyền đặc quyền <code>android.permission.MODIFY_NETWORK_ACCOUNTING</code> (chương 3).',
        '<b>Chặn truy cập</b> file kernel cũ (<code>/proc/net/xt_qtaguid</code>) bằng <b>SELinux</b> đối với app SDK 28 trở lên (chương 4).',
        '<b>Firewall theo UID</b> trong kernel cho phép hệ thống ngăn app có mạng tùy trạng thái máy (tiết kiệm pin, chờ, doze).'
      ] }
    ] },
    { icon: '🗺️', title: 'Bản đồ phần còn lại', blocks: [
      { t: 'steps', items: [
        '<b>Chương 2 – Data Saver:</b> chế độ tiết kiệm dữ liệu (Android 7.0), vai trò của OEM và app.',
        '<b>Chương 3 – Kernel cũ (xt_qtaguid, quota2) và tag:</b> cách tag lưu lượng theo UID + nhãn.',
        '<b>Chương 4 – eBPF traffic monitoring:</b> cơ chế hiện đại (Android 9+): maps, trafficController, bpfloader.',
        '<b>Chương 5 – Thống kê interface và driver:</b> điều kiện để số liệu đúng.',
        '<b>Chương 6 – Chu kỳ, loại mạng, tethering và offload.</b>'
      ] }
    ] }
  ],
  summary: [
    'Android đo lưu lượng tổng và theo từng app (UID), có cảnh báo/giới hạn và chặn dữ liệu nền.',
    'Các tầng: Settings/app → framework (NetworkStatsService, NetworkPolicy) → netd → kernel (qtaguid cũ / eBPF mới) → driver.',
    'Số liệu lưu lượng nhạy cảm: app không đọc trực tiếp kernel; gán lại quyền sở hữu cần MODIFY_NETWORK_ACCOUNTING.'
  ],
  cards: [
    ['Android đo dữ liệu theo gì?', 'Theo UID của app (và theo interface).'],
    ['Cảnh báo vs giới hạn?', 'Cảnh báo: thông báo; giới hạn: có thể tắt dữ liệu di động.'],
    ['Ai đọc tài liệu này?', 'OEM và nhà mạng khi port Android.'],
    ['Dịch vụ tổng hợp thống kê?', 'NetworkStatsService.'],
    ['Cơ chế đếm trong kernel (mới)?', 'eBPF (Android 9+).'],
    ['Cơ chế đếm cũ?', 'xt_qtaguid + xt_quota2.']
  ],
  quiz: [
    { q: 'Lưu lượng của một app được gắn với:', o: ['UID của app', 'Tên gói', 'Địa chỉ MAC', 'IMEI'], a: 0, e: 'Socket thuộc UID của tiến trình mở nó.' },
    { q: 'Dịch vụ framework tổng hợp thống kê lưu lượng:', o: ['NetworkStatsService', 'AudioService', 'PackageManager', 'WindowManager'], a: 0, e: 'Đọc dữ liệu từ kernel (eBPF maps/qtaguid).' },
    { q: 'Vượt hạn mức (limit) có thể dẫn đến:', o: ['Tắt dữ liệu di động', 'Xóa app', 'Khởi động lại', 'Đổi SIM'], a: 0, e: 'Cảnh báo thì chỉ thông báo.' },
    { q: 'Vì sao app không được đọc trực tiếp file thống kê kernel?', o: ['Nhạy cảm về riêng tư', 'File quá lớn', 'Không có file', 'Chỉ do tốc độ'], a: 0, e: 'Chặn bằng SELinux; dùng API công khai.' }
  ],
  match: [
    ['NetworkStatsService', 'Tổng hợp thống kê dùng mạng'],
    ['NetworkPolicyManager', 'Áp chính sách cảnh báo/giới hạn/chặn nền'],
    ['UID', 'Nền để quy lưu lượng cho app'],
    ['Settings datausage', 'Giao diện cho người dùng'],
    ['eBPF', 'Cơ chế đếm trong kernel mới']
  ]
},

{
  n: 2,
  title: 'Data Saver: chế độ tiết kiệm dữ liệu',
  intro: 'Dữ liệu di động có thể đắt, nhất là ở nơi gói cước không rẻ. <b>Data Saver</b> (Android 7.0) cho người dùng <b>giảm hoặc chặn hẳn</b> dữ liệu của app, đặc biệt khi chạy nền. App dùng API riêng để biết Data Saver đang bật và tự điều chỉnh. Chương này nêu mục đích, nơi mã nguồn, giao diện, trách nhiệm của app/OEM, và cách kiểm tra.',
  sections: [
    { icon: '💡', title: 'Data Saver làm gì', blocks: [
      { t: 'list', items: [
        'Người dùng <b>bật/tắt</b> Data Saver; khi bật, <b>app nền bị chặn dùng mạng</b> (trừ app được người dùng cho phép).',
        'Người dùng chọn app nào được dữ liệu <b>chỉ khi ở foreground</b> và app nào được <b>dùng nền</b> kể cả khi Data Saver bật.',
        '<b>App developer</b> dùng một API mới để kiểm tra Data Saver có đang bật không và xử lý nhẹ nhàng (giao diện “lite”, ít ảnh, ít video…).',
        '<b>Thiết bị OEM</b> có tính năng này <b>mặc định</b> từ bản N (Android 7.0): mã nguồn ở <code>packages/apps/Settings/src/com/android/settings/datausage</code>.'
      ] },
      { t: 'widget', name: 'ad-datasaver-sim', title: 'Thử: Data Saver bật/tắt, app nền/foreground và được cho phép hay không' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> Data Saver như <b>chế độ “tiết kiệm điện” của nước máy</b>: chỉ khi bạn đang đứng ở vòi (foreground) mới có nước; các vòi tự chảy trong nhà (nền) bị khóa, trừ vòi bạn tự tay mở khóa cho.' }
    ] },
    { icon: '⚙️', title: 'Giao diện cài đặt trong AOSP', blocks: [
      { t: 'list', items: [
        'AOSP cung cấp sẵn <b>giao diện Settings</b> mặc định cho Data Saver.',
        'Màn hình thường thấy: bật/tắt Data Saver; trạng thái khi <b>cả Battery Saver và Data Saver</b> cùng bật; màn hình <b>dữ liệu theo app</b> (Settings → Apps → Data usage); trạng thái của Data Saver trên <b>Quick Settings</b>.'
      ] }
    ] },
    { icon: '📱', title: 'Trách nhiệm của ứng dụng (kể cả app cài sẵn)', blocks: [
      { t: 'warn', x: '<b>Nhà sản xuất thiết bị không nên tự “whitelist” (cho phép) app.</b> Dù có làm, người dùng vẫn có thể bỏ. Thêm app vào danh sách cho phép chỉ khiến người dùng phải tự quyết định thêm cho từng app. <b>Mọi nhà phát triển app đều phải hỗ trợ Data Saver</b>, bao gồm OEM và nhà mạng với app cài sẵn.' },
      { t: 'table', head: ['Nên làm khi Data Saver bật', 'Không nên'], rows: [
        ['Bỏ ảnh không cần thiết', 'Tự phát video (autoplay)'],
        ['Dùng ảnh độ phân giải thấp hơn', 'Tải trước nội dung/tệp đính kèm (prefetch)'],
        ['Dùng video bitrate thấp', 'Tải bản cập nhật/mã'],
        ['Kích hoạt trải nghiệm “lite” có sẵn', 'Xin được whitelist nếu dữ liệu nền không thật sự là chức năng cốt lõi'],
        ['Nén dữ liệu', 'Coi whitelist là giấy phép dùng thêm băng thông'],
        ['<b>Tôn trọng mạng metered/unmetered</b> ngay cả khi Data Saver tắt', '']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> trên phía app, hướng dẫn nằm ở <b>developer.android.com – Data Saver</b>: dùng <code>ConnectivityManager.getRestrictBackgroundStatus()</code> (kết quả như <code>DISABLED</code>, <code>WHITELISTED</code>, <code>ENABLED</code>) và <code>isActiveNetworkMetered()</code>, và nghe broadcast <code>ACTION_RESTRICT_BACKGROUND_CHANGED</code>.' }
    ] },
    { icon: '✅', title: 'Kiểm tra (validation)', blocks: [
      { t: 'list', items: [
        '<b>CTS (Compatibility Test Suite):</b> chạy bài kiểm tra Data Saver tương ứng để xác nhận tính năng hoạt động đúng.',
        '<b>adb thủ công:</b> dùng lệnh của dịch vụ <code>netpolicy</code> (ví dụ <code>adb shell cmd netpolicy</code> để xem các lựa chọn) rồi thử như liệt kê UID được whitelist (<code>list restrict-background-whitelist</code>) hoặc bật/tắt chế độ (<code>set restrict-background true|false</code>).',
        'Xác nhận hành vi khi <b>kết hợp Battery Saver</b> và khi app foreground/background.'
      ] },
      { t: 'tip', x: '📚 Tên lệnh chính xác có thể khác theo phiên bản; chạy <code>adb shell cmd netpolicy help</code> để xem danh sách bản bạn đang dùng.' }
    ] }
  ],
  summary: [
    'Data Saver (Android 7.0): chặn dữ liệu nền theo ý người dùng; app dùng API để thích ứng; OEM có sẵn mặc định.',
    'OEM không nên whitelist app; mọi app (kể cả cài sẵn) phải tiết kiệm: bớt ảnh/video, không prefetch, không autoplay.',
    'Kiểm tra bằng CTS và lệnh adb của netpolicy.'
  ],
  cards: [
    ['Data Saver ra mắt khi nào?', 'Android 7.0 (N).'],
    ['Khi Data Saver bật, app nền?', 'Bị chặn dữ liệu (trừ app được whitelist).'],
    ['OEM có nên whitelist app?', 'Không.'],
    ['Nên làm gì khi Data Saver bật?', 'Giảm ảnh/video, nén, dùng bản lite.'],
    ['Không nên làm gì?', 'Autoplay, prefetch, tải cập nhật.'],
    ['Mã nguồn UI ở đâu?', 'packages/apps/Settings/.../datausage.']
  ],
  quiz: [
    { q: 'Điều nào KHÔNG nên làm khi Data Saver bật?', o: ['Tự phát video', 'Nén dữ liệu', 'Dùng ảnh nhỏ hơn', 'Dùng giao diện lite'], a: 0, e: 'Autoplay tốn dữ liệu.' },
    { q: 'OEM nên:', o: ['Whitelist thật nhiều app cài sẵn', 'Không whitelist app', 'Tắt Data Saver', 'Ẩn Data Saver'], a: 1, e: 'Whitelist đẩy việc quyết định sang người dùng.' },
    { q: 'Data Saver có sẵn mặc định từ bản:', o: ['Android 4.0', 'Android 7.0 (N)', 'Android 9', 'Android 12'], a: 1, e: 'Thiết bị OEM nhận tính năng này từ bản N.' },
    { q: 'App nên tôn trọng điều gì ngay cả khi Data Saver tắt?', o: ['Mạng metered/unmetered', 'Ngôn ngữ', 'Độ sáng', 'Múi giờ'], a: 0, e: 'Theo loại mạng tính cước.' }
  ],
  match: [
    ['Whitelist', 'Danh sách app được dùng nền khi Data Saver bật'],
    ['Metered network', 'Mạng tính cước'],
    ['CTS', 'Bộ kiểm tra tương thích'],
    ['Quick Settings', 'Hiển thị trạng thái Data Saver'],
    ['Prefetch', 'Tải trước – nên tránh']
  ]
},

{
  n: 3,
  title: 'Kernel cũ: xt_qtaguid, quota2 và “tag” lưu lượng',
  intro: 'Trước Android 9, việc đếm dữ liệu theo từng app dựa vào module kernel <b>xt_qtaguid</b> (do Android thêm vào), cùng module <b>xt_quota2</b> để đặt hạn mức. Hiểu nó giúp bạn đọc code/tài liệu cũ và hiểu vì sao <b>eBPF</b> ra đời. Chương này cũng giải thích khái niệm <b>tag</b> (UID + nhãn kế toán).',
  sections: [
    { icon: '🏷️', title: 'xt_qtaguid hoạt động thế nào', blocks: [
      { t: 'list', items: [
        'Module netfilter <code>xt_qtaguid</code> theo dõi lưu lượng <b>theo từng socket</b>, quy về <b>UID</b> của app sở hữu socket (Linux cho phép gán chủ sở hữu socket cho UID tiến trình gọi).',
        'Framework dùng <b>giao diện proc</b> <code>/proc/net/xt_qtaguid/ctrl</code> để gắn tag (<code>system/core/libcutils/qtaguid.c</code>), và đọc thống kê qua các file proc khác.',
        'Mỗi socket có <b>hai thành phần tag</b>: (1) <b>UID</b> – app chịu trách nhiệm cho lưu lượng; (2) <b>nhãn kế toán</b> (accounting tag, <code>acct_tag</code>) do app đặt để phân loại lưu lượng thành nhiều nhóm con.',
        '<b>Ủy quyền sở hữu:</b> dịch vụ làm hộ (download manager, streaming) có thể gán lưu lượng cho <b>UID của app yêu cầu</b> bằng <code>TrafficStats.setThreadStatsUid()</code>; người gọi cần quyền <code>android.permission.MODIFY_NETWORK_ACCOUNTING</code>.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> mỗi gói hàng (socket) dán <b>hai nhãn</b>: nhãn “người gửi” (UID – bắt buộc, dùng để tính cước và áp hạn mức) và nhãn “loại hàng” (acct_tag – tùy app, dùng để biết tiền đi vào đâu: ảnh, video, quảng cáo…). Công ty vận chuyển tính hạn mức theo người gửi, nhưng báo cáo chi tiết theo loại hàng.' }
    ] },
    { icon: '🔖', title: 'Tag được giải thích', blocks: [
      { t: 'p', x: 'Một <b>tag</b> là một trong các chỉ số mà bộ đếm dữ liệu được ghi nhận. Mặc định (ngầm định) tag chỉ dựa trên UID; UID là cơ sở để <b>áp chính sách</b> và <b>không thể bỏ qua</b>.' },
      { t: 'table', head: ['Thành phần', 'Ý nghĩa'], rows: [
        ['<code>uid_tag</code>', 'UID của app — luôn có; dùng để <b>kiểm soát/hạn mức</b>'],
        ['<code>acct_tag</code>', 'Nhãn kế toán do app đặt bằng <code>TrafficStats.setThreadStatsTag()</code>; thống kê thu thập <b>riêng</b> cho nhãn này'],
        ['<code>default_tag</code>', '<code>{acct_tag=0, uid_tag=10003}</code> (ví dụ): chứa <b>tổng lưu lượng của UID</b> gồm cả phần chưa gắn nhãn; dùng để áp quota']
      ] },
      { t: 'widget', name: 'ad-tag-sim', title: 'Gắn nhãn lưu lượng của một app và xem tổng theo UID / theo nhãn' },
      { t: 'list', items: [
        'Thao tác gắn nhãn xảy ra ở cấp <b>socket</b> và có thể <b>gỡ, đặt lại, đổi</b> lúc chạy.',
        'Nếu không gắn nhãn tường minh, mọi lưu lượng rơi vào tag mặc định (<code>acct_tag = 0</code>).',
        'Chính sách dùng phần <code>uid_tag</code>; <b>thống kê</b> được tách theo <code>acct_tag</code>.'
      ] }
    ] },
    { icon: '📏', title: 'xt_quota2 và hạn mức', blocks: [
      { t: 'list', items: [
        '<b><code>xt_quota2</code></b> (nguồn gốc từ dự án xtables-addons, đã chỉnh sửa) cho phép đặt <b>hạn mức đặt tên</b> (named quota) và <b>thông báo userspace</b> khi chạm ngưỡng nhờ <b>NFLOG</b>.',
        '<b>Hết quota → module hủy (drop) mọi lưu lượng sau đó</b> — chính là cơ chế “cầu dao”.',
        'Framework còn đặt thêm luật để <b>hạn chế dữ liệu nền</b> của app (xem <code>NetworkManagementSocketTagger.setKernelCounterSet</code> và <code>NetworkPolicyManager.POLICY_REJECT_METERED_BACKGROUND</code>).',
        '<b>Counter set:</b> tách bộ đếm <b>foreground</b> và <b>background</b> để biết app dùng dữ liệu lúc nào.'
      ] }
    ] },
    { icon: '🛠️', title: 'Thay đổi kernel so với mainline', blocks: [
      { t: 'list', items: [
        'Thêm <code>net/netfilter/xt_qtaguid*</code>.',
        'Nhập và chỉnh <code>net/netfilter/xt_quota2.c</code> từ xtables-addons.',
        'Sửa trong <code>net/netfilter/ip6_tables.c</code>, <code>ip*t_REJECT.c</code>, <code>xt_socket.c</code>.'
      ] },
      { t: 'table', head: ['Lưu ý cấu hình kernel', 'Chi tiết'], rows: [
        ['<code>xt_qtaguid</code> “đội lốt” <code>xt_owner</code>', 'Dựa vào <code>xt_socket</code> và cả bộ theo dõi kết nối (connection tracker)'],
        ['Connection tracker', 'Không xử lý được gói SIP lớn → phải <b>tắt</b>'],
        ['<code>xt_quota2</code>', 'Dùng NFLOG để báo userspace'],
        ['Tương lai', 'Hỗ trợ xt_qtaguid <b>giảm dần từ Android 9</b>, thay bằng eBPF (chương 4)']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> vì code nằm <b>ngoài</b> kernel mainline (out-of-tree) nên mỗi lần nâng kernel nhà sản xuất phải port lại → tốn công và rủi ro. Đó là lý do chính Android chuyển sang eBPF, cơ chế có sẵn trong kernel chuẩn.' },
      { t: 'widget', name: 'ad-pick', title: 'Luyện: cơ chế nào đảm nhiệm việc nào?' }
    ] }
  ],
  summary: [
    'xt_qtaguid đếm byte theo socket → UID (+ nhãn acct_tag); xt_quota2 đặt hạn mức, hết quota thì drop lưu lượng.',
    'Tag = uid_tag (bắt buộc, dùng áp chính sách) + acct_tag (tùy app, dùng phân loại thống kê); default_tag gom tổng.',
    'Cơ chế này nằm ngoài kernel mainline và giảm dần từ Android 9 để nhường chỗ cho eBPF.'
  ],
  cards: [
    ['xt_qtaguid là gì?', 'Module kernel đếm lưu lượng theo socket/UID.'],
    ['acct_tag đặt bằng?', 'TrafficStats.setThreadStatsTag()'],
    ['Gán lưu lượng cho app yêu cầu?', 'TrafficStats.setThreadStatsUid() + MODIFY_NETWORK_ACCOUNTING.'],
    ['xt_quota2 làm gì?', 'Hạn mức đặt tên + báo userspace; hết quota thì drop.'],
    ['Vì sao tắt connection tracker?', 'Không xử lý được gói SIP lớn.'],
    ['Vì sao thay bằng eBPF?', 'qtaguid nằm ngoài mainline, khó bảo trì.']
  ],
  quiz: [
    { q: 'Thành phần tag nào luôn hiện diện và dùng để áp hạn mức?', o: ['uid_tag', 'acct_tag', 'Cả hai tùy chọn', 'Không có'], a: 0, e: 'UID là cơ sở chính sách, không thể bỏ qua.' },
    { q: 'Hàm app dùng để đặt nhãn kế toán cho lưu lượng của luồng:', o: ['TrafficStats.setThreadStatsTag()', 'setUid()', 'WifiManager.tag()', 'Socket.close()'], a: 0, e: 'Xác định acct_tag.' },
    { q: 'Quyền cần để gán lại lưu lượng cho UID khác:', o: ['MODIFY_NETWORK_ACCOUNTING', 'INTERNET', 'READ_PHONE_STATE', 'CAMERA'], a: 0, e: 'Quyền đặc quyền của hệ thống.' },
    { q: 'Khi chạm quota trong xt_quota2:', o: ['Drop lưu lượng sau đó', 'Tăng tốc mạng', 'Xóa tag', 'Đổi SIM'], a: 0, e: 'Và thông báo userspace qua NFLOG.' }
  ],
  match: [
    ['xt_qtaguid', 'Đếm lưu lượng theo socket/UID'],
    ['xt_quota2', 'Hạn mức + thông báo'],
    ['NFLOG', 'Cách quota2 báo userspace'],
    ['default_tag', 'Tổng lưu lượng của UID'],
    ['setThreadStatsUid', 'Gán lưu lượng cho app yêu cầu']
  ]
}
);
