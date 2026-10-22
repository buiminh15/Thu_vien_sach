// Android data use – Chương 4–7: eBPF, thống kê interface, chu kỳ/loại mạng/tethering, bản đồ tra cứu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.aospdata = BOOK_DATA.aospdata || { chapters: [] };
const D2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.aospdata.chapters.push(

{
  n: 4,
  title: 'eBPF traffic monitoring: cơ chế hiện đại (Android 9+)',
  intro: 'Công cụ <b>eBPF</b> giám sát lưu lượng bằng kết hợp <b>kernel + userspace</b>: đếm dữ liệu từ lần khởi động gần nhất, <b>gắn tag socket</b>, tách lưu lượng <b>foreground/background</b> và có <b>firewall theo UID</b> để chặn app dùng mạng tùy trạng thái máy. Số liệu lưu trong <b>eBPF map</b> của kernel rồi <code>NetworkStatsService</code> đọc để tạo thống kê bền vững. Đây là cơ chế thay thế <code>xt_qtaguid</code>.',
  sections: [
    { icon: '🧠', title: 'eBPF là gì (giải thích dễ hiểu)', blocks: [
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> <b>eBPF</b> (extended Berkeley Packet Filter) cho phép nạp <b>những chương trình nhỏ, đã được kernel kiểm chứng an toàn</b> vào kernel để chạy ở các “điểm móc” (hook), ví dụ mỗi khi gói tin đi qua. Chương trình ghi dữ liệu vào <b>map</b> (bảng khóa–giá trị) mà userspace đọc được.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> eBPF như <b>cắm một camera đếm xe có phần mềm riêng</b> vào đường quốc lộ (kernel) mà <b>không phải xây lại đường</b> (không sửa kernel mainline). Camera ghi số xe vào <b>sổ</b> (map); văn phòng (userspace) đến đọc sổ khi cần.' },
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['<b>eBPF program</b>', 'Mã nhỏ được kernel kiểm chứng, chạy khi gói tin đi qua điểm móc'],
        ['<b>eBPF map</b>', 'Cấu trúc dữ liệu trong kernel để chương trình lưu số liệu và userspace đọc/ghi'],
        ['<b>cgroup eBPF filter</b>', 'Bộ lọc gắn vào cgroup; xử lý gói tin theo socket/UID ở tầng transport'],
        ['<b>xt_bpf</b>', 'Module netfilter cho phép dùng eBPF trong luật netfilter']
      ] }
    ] },
    { icon: '🏗️', title: 'Kiến trúc và luồng hoạt động', blocks: [
      { t: 'list', items: [
        '<b>Thiết kế mới</b> của <code>trafficController</code> dựa trên <b>eBPF filter theo cgroup</b> cùng module netfilter <b>xt_bpf</b>. Bộ lọc áp lên gói tin <b>khi gửi/nhận</b> (tx/rx).',
        '<b>cgroup eBPF filter</b> nằm ở <b>tầng transport</b>, chịu trách nhiệm <b>đếm lưu lượng cho đúng UID</b> (theo UID của socket và cài đặt userspace).',
        '<b>xt_bpf netfilter</b> móc vào chuỗi <code>bw_raw_PREROUTING</code> và <code>bw_mangle_POSTROUTING</code>, chịu trách nhiệm đếm lưu lượng cho đúng <b>interface</b>.',
        'Mã nguồn chính: <code>system/netd/server/TrafficController*</code>, <code>system/netd/bpfloader</code>, <code>system/netd/libbpf/</code>; thêm vài thay đổi trong <code>framework/base</code> và <code>system/core</code>.'
      ] },
      { t: 'widget', name: 'ad-ebpf-flow', title: 'Bấm từng bước: từ lúc khởi động đến khi đọc số liệu' },
      { t: 'steps', items: [
        '<b>Lúc boot:</b> tiến trình userspace <code>trafficController</code> <b>tạo các eBPF map</b> dùng để thu thập dữ liệu và <b>ghim (pin)</b> chúng thành file ảo ở <code>/sys/fs/bpf</code>.',
        'Tiến trình đặc quyền <code>bpfloader</code> <b>nạp chương trình eBPF đã biên dịch sẵn</b> vào kernel và <b>gắn vào đúng cgroup</b> (một cgroup gốc duy nhất cho mọi lưu lượng, nên mọi tiến trình mặc định nằm trong đó).',
        '<b>Lúc chạy:</b> <code>trafficController</code> <b>tag/untag socket</b> bằng cách ghi vào <code>traffic_cookie_tag_map</code> và <code>traffic_uid_counterSet_map</code>.',
        '<code>NetworkStatsService</code> <b>đọc số liệu</b> từ <code>traffic_tag_stats_map</code>, <code>traffic_uid_stats_map</code>, <code>traffic_iface_stats_map</code>.',
        '<b>Chặn lưu lượng theo UID</b> (thay thế <code>xt_owner</code>): cấu hình bằng cách ghi vào <code>traffic_powersave_uid_map</code>, <code>traffic_standby_uid_map</code>, <code>traffic_dozable_uid_map</code> (tương ứng chế độ tiết kiệm pin, standby, doze).'
      ] },
      { t: 'table', head: ['eBPF map', 'Dùng để'], rows: [
        ['<code>traffic_cookie_tag_map</code>', 'Gắn tag cho từng socket (theo cookie)'],
        ['<code>traffic_uid_counterSet_map</code>', 'Chọn bộ đếm (foreground/background) cho UID'],
        ['<code>traffic_tag_stats_map</code>', 'Thống kê theo <b>tag</b>'],
        ['<code>traffic_uid_stats_map</code>', 'Thống kê theo <b>UID</b>'],
        ['<code>traffic_iface_stats_map</code>', 'Thống kê theo <b>interface</b>'],
        ['<code>traffic_powersave_uid_map</code>, <code>traffic_standby_uid_map</code>, <code>traffic_dozable_uid_map</code>', 'Danh sách UID bị/được chặn trong từng chế độ nguồn']
      ] },
      { t: 'key', x: '<b>Tương thích ngược:</b> triển khai mới <b>bám theo hành vi của qtaguid</b>, nên <code>TrafficController</code> và <code>NetworkStatsService</code> chạy được với cả hai. App dùng API công khai <b>không thấy khác biệt</b> dù bên dưới là xt_qtaguid hay eBPF.' }
    ] },
    { icon: '✅', title: 'Yêu cầu và lộ trình loại bỏ qtaguid', blocks: [
      { t: 'table', head: ['Điều kiện', 'Chi tiết'], rows: [
        ['<b>Bắt buộc dùng eBPF</b>', 'Từ Android 9: thiết bị chạy <b>kernel 4.9 trở lên</b> và <b>xuất xưởng với bản P</b> PHẢI dùng eBPF thay <code>xt_qtaguid</code>'],
        ['<b>Kernel config phải bật</b>', '<code>CONFIG_CGROUP_BPF=y</code>, <code>CONFIG_BPF=y</code>, <code>CONFIG_BPF_SYSCALL=y</code>, <code>CONFIG_NETFILTER_XT_MATCH_BPF=y</code>, <code>CONFIG_INET_UDP_DIAG=y</code>'],
        ['<b>Kernel 4.9 common</b>', 'Nếu dựa trên Android common kernel 4.9 (SHA từ <code>39c85666…</code> trở lên) thì <b>không cần sửa HAL, driver hay kernel</b> để triển khai eBPF'],
        ['<b>Thiết bị cũ nâng cấp lên 9</b>', 'Nên cập nhật sang eBPF nếu kernel hỗ trợ, nhưng <b>không có CTS ép buộc</b>']
      ] },
      { t: 'p', x: D2(`# Kiểm tra cấu hình kernel bằng VTS kernel config test, hoặc xem nhanh:
adb shell zcat /proc/config.gz | grep -E "CONFIG_(CGROUP_BPF|BPF|BPF_SYSCALL|NETFILTER_XT_MATCH_BPF|INET_UDP_DIAG)="`) },
      { t: 'list', items: [
        '<b>Android 9:</b> xt_qtaguid vẫn bật trên mọi thiết bị, nhưng <b>mọi API đọc trực tiếp file proc của xt_qtaguid được chuyển vào NetworkManagement Service</b>. Dịch vụ tự biết (theo bản kernel và first API level) eBPF có bật không để chọn module đúng.',
        '<b>SELinux:</b> app có <b>SDK 28 trở lên bị sepolicy chặn</b> truy cập file proc của xt_qtaguid.',
        '<b>Bản sau Android 9:</b> truy cập của app vào các file proc đó bị chặn hoàn toàn; bắt đầu <b>gỡ module xt_qtaguid khỏi Android common kernel</b> mới và tắt tường minh trong base config.',
        '<b>Loại bỏ hoàn toàn</b> khi yêu cầu kernel tối thiểu của một bản Android là 4.9 trở lên.'
      ] }
    ] },
    { icon: '🧪', title: 'Kiểm thử và gỡ lỗi', blocks: [
      { t: 'table', head: ['Loại', 'Công cụ / vị trí'], rows: [
        ['<b>Kiểm cấu hình kernel</b>', '<b>VTS kernel config test</b>'],
        ['<b>Kernel net_tests</b>', 'Đảm bảo bật đủ tính năng và đã backport patch kernel (tích hợp vào VTS của Android 9)'],
        ['<b>Unit test</b>', '<code>netd_unit_test</code>, <code>libbpf_test</code> (trong <code>system/netd/</code>), <code>netd_integration_test</code> kiểm hành vi tổng thể'],
        ['<b>CTS</b>', '<code>TrafficStatsTest</code>, <code>NetworkUsageStatsTest</code>, <code>CtsNativeNetTestCases</code>; với thiết bị kernel &gt; 4.9, xuất xưởng bản 9 (first API level ≥ 28) có CTS trên GSI kiểm cấu hình đúng'],
        ['<b>Thủ công</b>', '<code>dumpsys netd</code> (trạng thái <code>trafficController</code>, eBPF bật chưa); <code>dumpsys netd trafficcontroller</code> (nội dung từng map: socket đã tag, stats theo tag/UID/iface, khớp UID chủ sở hữu)']
      ] },
      { t: 'p', x: D2(`adb shell dumpsys netd                       # trạng thái chung, eBPF có bật không
adb shell dumpsys netd trafficcontroller      # chi tiết từng eBPF map`) },
      { t: 'tip', x: '💡 Khuyến nghị khi tích hợp: thường xuyên <b>lấy patch từ Android common kernel và AOSP main</b>, bảo đảm đạt VTS/CTS, <code>netd_unit_test</code> và <code>libbpf_test</code>.' }
    ] }
  ],
  summary: [
    'eBPF (Android 9+): chương trình cgroup + xt_bpf đếm theo UID và interface, ghi vào eBPF map ghim ở /sys/fs/bpf; NetworkStatsService đọc map.',
    'Luồng: trafficController tạo map → bpfloader nạp chương trình → tag/untag socket lúc chạy → đọc stats; firewall UID bằng các map powersave/standby/dozable.',
    'Bắt buộc với thiết bị kernel ≥ 4.9 xuất xưởng bản 9; cần 5 CONFIG kernel; app SDK ≥ 28 không đọc được proc của qtaguid; kiểm bằng VTS/CTS/dumpsys netd.'
  ],
  cards: [
    ['eBPF map là gì?', 'Bảng khóa–giá trị trong kernel để lưu số liệu.'],
    ['Ai nạp chương trình eBPF?', 'bpfloader (tiến trình đặc quyền).'],
    ['Map pin ở đâu?', '/sys/fs/bpf.'],
    ['Map thống kê theo UID?', 'traffic_uid_stats_map.'],
    ['Chặn theo trạng thái nguồn?', 'powersave/standby/dozable UID maps.'],
    ['Lệnh kiểm tra thủ công?', 'dumpsys netd; dumpsys netd trafficcontroller.']
  ],
  quiz: [
    { q: 'Từ Android 9, thiết bị nào PHẢI dùng eBPF?', o: ['Kernel ≥ 4.9 và xuất xưởng với bản P', 'Mọi thiết bị cũ', 'Chỉ thiết bị Wi-Fi', 'Không bắt buộc'], a: 0, e: 'Thiết bị nâng cấp thì chỉ khuyến nghị.' },
    { q: 'Tiến trình nạp chương trình eBPF vào kernel:', o: ['bpfloader', 'zygote', 'surfaceflinger', 'vold'], a: 0, e: 'Và gắn vào đúng cgroup.' },
    { q: 'NetworkStatsService đọc số liệu từ:', o: ['eBPF maps', 'File ảnh', 'Logcat', 'SMS'], a: 0, e: 'Như traffic_uid_stats_map.' },
    { q: 'App có SDK 28 trở lên truy cập /proc/net/xt_qtaguid:', o: ['Bị SELinux chặn', 'Được phép', 'Cần root', 'Chỉ qua adb'], a: 0, e: 'Phải dùng API công khai.' }
  ],
  match: [
    ['bpfloader', 'Nạp chương trình eBPF'],
    ['traffic_uid_stats_map', 'Thống kê theo UID'],
    ['xt_bpf', 'Netfilter dùng eBPF'],
    ['/sys/fs/bpf', 'Nơi ghim map'],
    ['dumpsys netd', 'Xem trạng thái trafficController']
  ]
},

{
  n: 5,
  title: 'Thống kê theo interface và điều kiện với driver mạng',
  intro: 'Từ Android 4.0, thống kê do các <b>network interface Linux</b> báo cáo được ghi lại theo thời gian để <b>thực thi hạn mức</b>, vẽ <b>biểu đồ</b> cho người dùng… Muốn số liệu đúng, <b>driver mạng</b> (kể cả Wi-Fi) và cách <b>đăng ký interface với framework</b> phải tuân thủ vài quy tắc quan trọng.',
  sections: [
    { icon: '📟', title: 'Quy tắc cho driver mạng', blocks: [
      { t: 'list', items: [
        'Mỗi driver mạng phải theo <b>vòng đời chuẩn</b> của thiết bị kernel và trả số liệu đúng qua <code>dev_get_stats()</code>.',
        '<b>Số liệu phải đơn điệu tăng (strictly monotonic)</b> khi interface còn hoạt động. Driver chỉ được <b>reset</b> số liệu sau khi hoàn tất <code>unregister_netdev()</code> (hoặc tương đương) sinh ra sự kiện <code>NETDEV_UNREGISTER</code> cho các callback đã đăng ký qua <code>register_netdevice_notifier()</code>, <code>register_inetaddr_notifier()</code>, <code>register_inet6addr_notifier()</code>.',
        '<b>Đếm ở tầng IP:</b> nhà mạng thường đo cước ở <b>lớp Internet (IP)</b>. Android dựa vào việc <code>rx_bytes</code>/<code>tx_bytes</code> từ <code>dev_get_stats()</code> đúng bằng <b>số byte IP</b> đã truyền.',
        'Driver mới <b>nên giữ tính chất này</b>: giá trị <b>không bao gồm overhead của tầng dưới</b> (như header Ethernet) và tốt nhất <b>không gồm lưu lượng khác</b> (như ARP) trừ khi không đáng kể.'
      ] },
      { t: 'warn', x: '<b>Vì sao “đơn điệu tăng” quan trọng?</b> Hệ thống lấy hiệu số giữa hai lần đọc để biết dữ liệu mới dùng. Nếu số liệu <b>tụt xuống</b> (reset sớm), hiệu số âm/sai → lưu lượng bị tính <b>sai</b> hoặc bị bỏ, ảnh hưởng cả cước lẫn hạn mức.' },
      { t: 'widget', name: 'ad-monotonic', title: 'Mô phỏng: đọc bộ đếm hai lần liên tiếp và tính lượng dùng' }
    ] },
    { icon: '🧭', title: 'Đăng ký interface với framework', blocks: [
      { t: 'list', items: [
        'Android framework <b>chỉ thu thống kê</b> từ các interface <b>gắn với một <code>NetworkStateTracker</code> trong <code>ConnectivityService</code></b>.',
        'Nhờ đó framework <b>xác định chính xác</b> từng interface, gồm <b>loại</b> (<code>TYPE_MOBILE</code>, <code>TYPE_WIFI</code>…) và <b>định danh thuê bao</b> (ví dụ IMSI).',
        '<b>Mọi interface dùng để định tuyến dữ liệu</b> phải được đại diện bởi một <code>NetworkStateTracker</code> để thống kê được tính đúng.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> tên lớp <code>NetworkStateTracker</code> thuộc kiến trúc kết nối cũ; ở các bản Android mới, vai trò “mô tả mạng và interface” do <code>ConnectivityService</code> cùng <code>NetworkAgent</code>/<code>NetworkCapabilities</code> đảm nhiệm. Nguyên tắc vẫn giữ: <b>interface phải gắn với một mạng đã biết (loại + thuê bao)</b> thì mới được tính thống kê.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> công tơ chỉ tính tiền cho <b>ống nước đã đăng ký</b>. Ống chui lén (interface không gắn mạng) thì nước chảy qua mà không ai ghi vào sổ → mất số liệu.' }
    ] },
    { icon: '📦', title: 'Danh sách kiểm tra khi tích hợp driver', blocks: [
      { t: 'table', head: ['Kiểm tra', 'Câu hỏi'], rows: [
        ['Đơn điệu tăng', 'Số liệu có tụt xuống khi interface đang chạy không?'],
        ['Đúng tầng', 'rx/tx bytes có chỉ tính payload IP (không gồm header Ethernet)?'],
        ['Reset đúng lúc', 'Chỉ reset sau <code>unregister_netdev()</code>/<code>NETDEV_UNREGISTER</code>?'],
        ['Đăng ký mạng', 'Interface có gắn với mạng (type + subscriber) trong ConnectivityService?']
      ] }
    ] }
  ],
  summary: [
    'dev_get_stats() phải đơn điệu tăng, đếm byte ở tầng IP (không gồm header tầng dưới), chỉ reset sau unregister_netdev/NETDEV_UNREGISTER.',
    'Framework chỉ thu thống kê từ interface gắn với một mạng đã đăng ký (loại + IMSI); mọi interface dẫn dữ liệu phải được đại diện.',
    'Sai số liệu ở driver kéo theo sai cước, sai hạn mức và sai biểu đồ.'
  ],
  cards: [
    ['dev_get_stats() cần?', 'Đơn điệu tăng khi interface hoạt động.'],
    ['Khi nào driver được reset?', 'Sau unregister_netdev / NETDEV_UNREGISTER.'],
    ['Đếm byte ở tầng nào?', 'Tầng IP – không gồm header Ethernet.'],
    ['Interface nào được thống kê?', 'Interface gắn với mạng trong ConnectivityService.'],
    ['Định danh thuê bao ví dụ?', 'IMSI.'],
    ['Vì sao quan trọng?', 'Hiệu số hai lần đọc quyết định lượng dùng.']
  ],
  quiz: [
    { q: 'Số liệu rx/tx của driver cần có tính chất:', o: ['Đơn điệu tăng khi interface còn hoạt động', 'Reset mỗi giây', 'Giảm dần', 'Ngẫu nhiên'], a: 0, e: 'Để hiệu số giữa hai lần đọc đúng.' },
    { q: 'rx_bytes nên tính:', o: ['Byte IP, không gồm header Ethernet', 'Cả header Ethernet', 'Chỉ ARP', 'Chỉ TCP'], a: 0, e: 'Nhà mạng đo cước ở tầng IP.' },
    { q: 'Framework chỉ thu thống kê từ interface:', o: ['Gắn với một mạng đã đăng ký (tracker/network)', 'Bất kỳ', 'Chỉ Wi-Fi', 'Chỉ loopback'], a: 0, e: 'Để biết loại mạng và thuê bao.' },
    { q: 'Driver được reset thống kê khi:', o: ['Sau unregister_netdev/NETDEV_UNREGISTER', 'Bất kỳ lúc nào', 'Mỗi phút', 'Khi có ARP'], a: 0, e: 'Tuân vòng đời kernel.' }
  ],
  match: [
    ['dev_get_stats()', 'Hàm kernel trả thống kê interface'],
    ['NETDEV_UNREGISTER', 'Sự kiện cho phép reset thống kê'],
    ['Tầng IP', 'Mức nhà mạng đo cước'],
    ['ConnectivityService', 'Nơi đăng ký mạng/interface'],
    ['IMSI', 'Định danh thuê bao']
  ]
},

{
  n: 6,
  title: 'Chu kỳ dùng dữ liệu, loại trừ loại mạng và tethering',
  intro: 'Các mảng nhỏ nhưng thực tế: <b>ngày reset chu kỳ</b> theo tháng, <b>loại trừ</b> một số loại mạng khỏi tổng dữ liệu (zero-rating), cách tính <b>dữ liệu tethering</b> và <b>tethering offload</b> (đẩy việc chuyển tiếp xuống phần cứng để tiết kiệm pin).',
  sections: [
    { icon: '📅', title: 'Ngày reset chu kỳ dùng dữ liệu', blocks: [
      { t: 'list', items: [
        'Người dùng chọn <b>một ngày trong tháng</b> để reset mức dùng dữ liệu.',
        'Nội bộ, ranh giới chu kỳ <b>kết thúc lúc 00:00 UTC</b> của ngày đó.',
        '<b>Tháng ngắn hơn ngày yêu cầu</b>: chu kỳ reset vào <b>ngày 1 của tháng kế tiếp</b>. Ví dụ chọn ngày <b>30</b>: reset vào <b>30/1 lúc 00:00 UTC</b> và <b>1/3 lúc 00:00 UTC</b> (bỏ qua tháng 2).'
      ] },
      { t: 'widget', name: 'ad-cycle', title: 'Nhập ngày reset và xem chu kỳ từng tháng' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> dùng <b>UTC</b> nghĩa là ranh giới chu kỳ có thể lệch giờ địa phương (ở Việt Nam, UTC+7, mốc 00:00 UTC là <b>07:00 sáng</b>), nên lượng dùng sát nửa đêm giờ địa phương có thể rơi vào chu kỳ trước/sau.' }
    ] },
    { icon: '🚫', title: 'Loại trừ loại mạng khỏi tổng dữ liệu', blocks: [
      { t: 'list', items: [
        '<b>Nhu cầu:</b> nhà mạng có thể muốn <b>không tính</b> một số loại mạng vào tổng dữ liệu (ví dụ lưu lượng MMS qua APN MMS được <b>“zero-rated”</b>).',
        '<b>Cách làm:</b> cấu hình tập loại mạng dùng để tính tổng bằng tài nguyên <code>config_data_usage_network_types</code> <b>lúc build</b>.',
        '<b>Hạn chế:</b> một số modem có <b>interface Linux riêng cho từng APN</b>, số khác lại ép <b>nhiều APN dùng chung một interface</b>. Android thu được thống kê ở cả hai thiết kế, nhưng <code>config_data_usage_network_types</code> <b>không loại trừ được</b> APN bị ép chung interface vì không tách nổi lưu lượng.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> giống hóa đơn điện: nhà cung cấp có thể “miễn phí” một vài ổ cắm (APN MMS). Nhưng nếu hai ổ cắm đấu chung <b>một đồng hồ</b>, đồng hồ không phân biệt được ổ nào nên không thể miễn một ổ.' }
    ] },
    { icon: '🔗', title: 'Dữ liệu tethering', blocks: [
      { t: 'list', items: [
        '<b>Tethering</b> = chuyển tiếp lưu lượng từ <b>interface này sang interface khác</b> bằng luật <b>iptables forwarding</b> (ví dụ phát Wi-Fi hotspot từ dữ liệu di động).',
        'Framework <b>định kỳ ghi thống kê tethering</b> giữa các <b>cặp interface</b> do <code>ConnectivityService.getTetheredIfacePairs()</code> trả về.'
      ] }
    ] },
    { icon: '⚡', title: 'Tethering hardware offload (Android 8.1+)', blocks: [
      { t: 'p', x: '<b>Offload</b> giúp thiết bị <b>tiết kiệm pin và tăng hiệu năng</b> bằng cách chuyển lưu lượng tethering (USB, Wi-Fi) xuống <b>phần cứng</b>: tạo <b>đường đi trực tiếp giữa modem và ngoại vi</b>, bỏ qua bộ xử lý ứng dụng (AP).' },
      { t: 'table', head: ['Nội dung', 'Chi tiết'], rows: [
        ['<b>Phạm vi</b>', 'Offload chuyển tiếp <b>IPv4, IPv6 hoặc cả hai</b>. Không cần offload mọi gói: framework xử lý bằng phần mềm bất kỳ gói nào'],
        ['<b>Gói điều khiển</b>', 'Thường xử lý bằng phần mềm. Với IPv4, gói <b>thiết lập/kết thúc phiên</b> (SYN, SYN+ACK, FIN) <b>phải</b> qua phần mềm để kernel tạo trạng thái flow (vì cổng IPv4 dùng chung giữa lưu lượng tethering và của thiết bị)'],
        ['<b>IPv4 NAT</b>', 'Gói thiết lập NAT tới CPU; kernel tạo entry NAT; HAL quan sát entry qua <b>file descriptor do framework cấp</b> và xử lý flow trong phần cứng → HAL <b>không cần CAP_NET_*</b> (nhận socket <code>NF_NETLINK_CONNTRACK</code> đã mở sẵn)'],
        ['<b>Cập nhật trạng thái</b>', 'Phần cứng định kỳ gửi cập nhật trạng thái NAT cho các flow đang hoạt động; framework làm mới trạng thái connection tracking của kernel'],
        ['<b>IPv6</b>', 'Framework lập trình danh sách <b>prefix đích IPv6 KHÔNG được offload</b>; mọi gói tethering khác có thể offload'],
        ['<b>Tính cước</b>', '<code>NetworkStatsService</code> thăm dò → framework hỏi phần cứng số liệu; framework gửi <b>hạn mức dữ liệu</b> xuống phần cứng qua HAL']
      ] },
      { t: 'widget', name: 'ad-offload-pick', title: 'Gói nào offload xuống phần cứng, gói nào phải qua phần mềm?' },
      { t: 'p', x: '<b>Yêu cầu phần cứng:</b> phải chuyển tiếp được gói IP giữa modem và Wi-Fi/USB <b>mà không đi qua bộ xử lý chính</b>. <b>Triển khai</b> cần hai HAL:' },
      { t: 'table', head: ['HAL', 'Vai trò / phương thức'], rows: [
        ['<code>IOffloadConfig</code> (config HAL)', 'Khởi động triển khai offload; framework đưa cho HAL các socket <code>NF_NETLINK_CONNTRACK</code> đã kết nối sẵn để quan sát flow IPv4; <b>chỉ cần tăng tốc luồng được forward</b>'],
        ['<code>IOffloadControl</code> (control HAL)', '<code>initOffload</code>/<code>stopOffload</code> (bật/tắt), <code>setLocalPrefixes</code> (loại IP nội bộ khỏi offload), <code>setUpstreamParameters</code> (interface upstream, IPv4, gateway IPv6), <code>addDownstream</code>/<code>removeDownstream</code>, <code>getForwardedStats</code>/<code>setDataLimit</code> (tính cước/hạn mức)'],
        ['<code>ITetheringOffloadCallback</code>', 'HAL <b>gọi ngược</b> để báo: sự kiện bất đồng bộ (bắt đầu/dừng offload – <code>OffloadCallbackEvent</code>) và <b>cập nhật NAT timeout</b> định kỳ để kernel không đóng flow IPv4 còn lưu lượng']
      ] },
      { t: 'key', x: '<b>Kiểm tra:</b> thử thủ công/tự động rằng <b>tethering và Wi-Fi hotspot</b> hoạt động; <b>VTS</b> (Vendor Test Suite) có bài kiểm tra cho các HAL tethering offload.' }
    ] }
  ],
  summary: [
    'Chu kỳ: reset lúc 00:00 UTC của ngày chọn; tháng ngắn hơn thì reset ngày 1 tháng sau (30 → 30/1 và 1/3).',
    'config_data_usage_network_types loại loại mạng khỏi tổng (zero-rating), nhưng không loại được APN dùng chung interface.',
    'Tethering: ghi thống kê theo cặp interface; offload cần IOffloadConfig + IOffloadControl + callback; gói điều khiển IPv4 vẫn qua phần mềm; hết lượng → framework đặt data limit.'
  ],
  cards: [
    ['Chu kỳ kết thúc lúc?', '00:00 UTC của ngày reset.'],
    ['Ngày 31 trong tháng 30 ngày?', 'Reset ngày 1 tháng kế tiếp.'],
    ['Cấu hình loại mạng tính cước?', 'config_data_usage_network_types (build time).'],
    ['Tethering ghi thống kê theo?', 'Cặp interface (getTetheredIfacePairs).'],
    ['Hai HAL của offload?', 'IOffloadConfig và IOffloadControl.'],
    ['Gói nào luôn qua phần mềm?', 'SYN/SYN+ACK/FIN (thiết lập/kết thúc phiên IPv4).']
  ],
  quiz: [
    { q: 'Chọn ngày reset 30; tháng 2 không có ngày 30. Chu kỳ reset vào:', o: ['Ngày 1 tháng 3', 'Ngày 28 tháng 2', 'Không reset', 'Ngày 30 tháng 3'], a: 0, e: 'Tháng ngắn hơn → ngày 1 tháng kế.' },
    { q: 'Khó khăn khi loại trừ một APN khỏi tổng dữ liệu:', o: ['Modem ép nhiều APN chung một interface', 'Thiếu RAM', 'Thiếu Wi-Fi', 'Không có UID'], a: 0, e: 'Không tách được lưu lượng.' },
    { q: 'Mục đích của tethering offload:', o: ['Tiết kiệm pin, tăng hiệu năng bằng chuyển tiếp ở phần cứng', 'Tăng bảo mật', 'Chặn mạng', 'Tăng RAM'], a: 0, e: 'Bỏ qua AP.' },
    { q: 'Ai quan sát entry NAT IPv4 và xử lý flow phần cứng?', o: ['HAL implementation qua fd do framework cấp', 'App', 'Zygote', 'Kernel module qtaguid'], a: 0, e: 'Không cần CAP_NET_* cho HAL.' }
  ],
  match: [
    ['IOffloadConfig', 'Khởi động offload + cấp socket conntrack'],
    ['IOffloadControl', 'Điều khiển offload, tính cước'],
    ['config_data_usage_network_types', 'Loại mạng được tính vào tổng'],
    ['getTetheredIfacePairs', 'Cặp interface tethering'],
    ['00:00 UTC', 'Mốc kết thúc chu kỳ']
  ]
},

{
  n: 7,
  title: 'Bản đồ tra cứu: vấn đề → cơ chế → cách kiểm tra',
  intro: 'Chương cuối gom lại toàn bộ chủ đề thành một “bản đồ” để bạn nhanh chóng biết <b>vấn đề nào do thành phần nào xử lý</b>, tra cứu thuật ngữ và nhớ các điểm mấu chốt khi tích hợp Android trên thiết bị thực.',
  sections: [
    { icon: '🗺️', title: 'Vấn đề → thành phần', blocks: [
      { t: 'table', head: ['Tôi muốn…', 'Cơ chế / chỗ cần xem'], rows: [
        ['Biết app nào dùng bao nhiêu dữ liệu', 'UID → eBPF maps (<code>traffic_uid_stats_map</code>) → <code>NetworkStatsService</code>'],
        ['Phân loại lưu lượng trong một app', '<b>acct_tag</b> bằng <code>TrafficStats.setThreadStatsTag()</code>'],
        ['Gán lưu lượng cho app yêu cầu', '<code>TrafficStats.setThreadStatsUid()</code> + <code>MODIFY_NETWORK_ACCOUNTING</code>'],
        ['Chặn app nền / tiết kiệm dữ liệu', 'Data Saver + <code>NetworkPolicyManager</code> + firewall UID (eBPF)'],
        ['Chặn app theo trạng thái nguồn', '<code>traffic_powersave/standby/dozable_uid_map</code>'],
        ['Đặt hạn mức và tắt dữ liệu khi vượt', 'Chính sách (NetworkPolicy) + quota (qtaguid/quota2 cũ, eBPF mới)'],
        ['Reset theo ngày người dùng chọn', 'Chu kỳ: 00:00 UTC, tháng ngắn → ngày 1 tháng sau'],
        ['Không tính một loại mạng (zero-rating)', '<code>config_data_usage_network_types</code> (không dùng được nếu APN chung interface)'],
        ['Số liệu driver sai', '<code>dev_get_stats()</code>: đơn điệu tăng, byte IP, đăng ký interface'],
        ['Tiết kiệm pin khi phát hotspot', 'Tethering offload (IOffloadConfig/IOffloadControl)'],
        ['Kiểm tra eBPF đã bật chưa', '<code>dumpsys netd</code>, VTS kernel config, 5 CONFIG kernel']
      ] },
      { t: 'widget', name: 'ad-pick', title: 'Luyện: cơ chế nào đảm nhiệm việc nào?' }
    ] },
    { icon: '🔎', title: 'Tra cứu thuật ngữ', blocks: [
      { t: 'widget', name: 'ad-lookup', title: 'Gõ từ khóa để tra (ví dụ: ebpf, tag, offload, cycle…)' }
    ] },
    { icon: '📈', title: 'Dòng thời gian các thay đổi', blocks: [
      { t: 'timeline', items: [
        ['Android 4.0', 'Ghi thống kê interface theo thời gian để thực thi quota và vẽ biểu đồ.'],
        ['Android 7.0 (N)', 'Data Saver có sẵn trong nền tảng.'],
        ['Android 8.1', 'Tethering hardware offload (IPv4/IPv6).'],
        ['Android 9', 'eBPF thay xt_qtaguid cho thiết bị kernel ≥ 4.9 xuất xưởng bản P; app SDK ≥ 28 bị chặn proc qtaguid.'],
        ['Sau Android 9', 'Chặn hoàn toàn truy cập proc của app; bắt đầu gỡ xt_qtaguid khỏi common kernel; loại bỏ hẳn khi kernel tối thiểu ≥ 4.9.']
      ] }
    ] },
    { icon: '🧭', title: 'Lời khuyên tổng kết cho người tích hợp', blocks: [
      { t: 'steps', items: [
        '<b>Dùng eBPF</b> trên thiết bị mới (kernel ≥ 4.9): bật đủ 5 CONFIG, chạy VTS/CTS, <code>netd_unit_test</code>, <code>libbpf_test</code>.',
        '<b>Đừng whitelist app Data Saver</b>; viết app cài sẵn tôn trọng Data Saver và mạng metered.',
        '<b>Kiểm tra driver:</b> số liệu đơn điệu tăng, đếm ở tầng IP, interface gắn với mạng đã đăng ký.',
        '<b>Cẩn trọng đa APN chung một interface</b> nếu nhà mạng yêu cầu zero-rating.',
        '<b>Offload tethering:</b> chỉ làm khi phần cứng chuyển tiếp được modem ↔ Wi-Fi/USB; giữ gói điều khiển ở phần mềm; báo NAT timeout định kỳ.',
        '<b>Thường xuyên lấy patch</b> từ Android common kernel và AOSP; dùng <code>dumpsys netd trafficcontroller</code> khi gỡ lỗi.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này bám phần <b>“Android data use”</b> của source.android.com/docs/core/data (Data Saver, eBPF, interface stats, loại mạng, tethering, chu kỳ). Phần API cho lập trình viên app (<code>NetworkStatsManager</code>, <code>TrafficStats</code>, Data Saver trên developer.android.com) và các chủ đề kết nối khác nằm ở giáo trình “Android Connectivity” và tài liệu developer.' }
    ] }
  ],
  summary: [
    'Mỗi nhu cầu có thành phần chuyên trách: UID/eBPF map (đếm), tag (phân loại), NetworkPolicy+Data Saver (chặn), config loại mạng (zero-rating), offload (tiết kiệm pin).',
    'Mốc chính: 4.0 thống kê interface; 7.0 Data Saver; 8.1 offload; 9 eBPF thay qtaguid.',
    'Khi tích hợp: bật CONFIG eBPF, kiểm VTS/CTS/dumpsys netd, chuẩn hóa driver và đăng ký interface.'
  ],
  cards: [
    ['Đếm lưu lượng theo app?', 'UID + eBPF maps.'],
    ['Phân loại lưu lượng trong app?', 'acct_tag.'],
    ['Tiết kiệm dữ liệu nền?', 'Data Saver.'],
    ['Zero-rating?', 'config_data_usage_network_types.'],
    ['Hotspot tiết kiệm pin?', 'Tethering offload.'],
    ['Kiểm tra eBPF?', 'dumpsys netd / VTS kernel config.']
  ],
  quiz: [
    { q: 'Để biết eBPF traffic monitoring đã bật:', o: ['dumpsys netd', 'ping', 'logcat -b radio', 'getprop'], a: 0, e: 'Cho thấy trạng thái trafficController.' },
    { q: 'Mốc Android nào bắt đầu bắt buộc eBPF cho thiết bị mới kernel ≥ 4.9?', o: ['Android 9', 'Android 4.0', 'Android 7', 'Android 12'], a: 0, e: 'Thay xt_qtaguid.' },
    { q: 'Cơ chế phân loại lưu lượng trong cùng một app:', o: ['acct_tag', 'IMSI', 'APN', 'SSID'], a: 0, e: 'Đặt bằng setThreadStatsTag().' },
    { q: 'Điều kiện số liệu driver đúng:', o: ['Đơn điệu tăng, đếm ở tầng IP', 'Ngẫu nhiên', 'Gồm header Ethernet', 'Reset liên tục'], a: 0, e: 'Hiệu số hai lần đọc phải đúng.' }
  ],
  match: [
    ['Data Saver', 'Chặn dữ liệu nền theo người dùng'],
    ['eBPF map', 'Nơi kernel lưu thống kê'],
    ['Zero-rating', 'Không tính cước một loại lưu lượng'],
    ['Offload', 'Chuyển tiếp ở phần cứng'],
    ['NetworkStatsService', 'Tổng hợp thống kê']
  ]
}
);
