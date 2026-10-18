CH[2] = {
sections: [

{id:'nature', icon:'🏷', title:'Quyền là gì? Xin quyền thế nào?', html:`
<p>Ở chương 1 ta biết app bị nhốt trong sandbox. Muốn làm điều gì đó ngoài sandbox, app phải có <b>permission (quyền)</b>.</p>
<div class="callout c-tip"><b>Định nghĩa gọn</b>Permission chỉ đơn giản là một <b>chuỗi (string)</b> thể hiện khả năng thực hiện một thao tác: truy cập thẻ nhớ, đọc danh bạ, hoặc khởi động một thành phần của app khác.</div>
<ul>
<li>Quyền được cấp <b>lúc cài đặt</b> và nhìn chung không đổi sau đó (có ngoại lệ ở phần “development”).</li>
<li>Tên quyền có dạng <i>tên-gói-định-nghĩa</i> + <code>.permission.</code> + TÊN. Quyền dựng sẵn thuộc gói <code>android</code> nên bắt đầu bằng <code>android.permission.</code>; quyền <b>tùy chỉnh</b> do app (hệ thống hoặc người dùng) định nghĩa.</li>
<li>Xem danh sách: <code>pm list permissions</code> (thêm <code>-f</code> để xem chi tiết).</li>
</ul>
<div class="callout c-warn"><b>targetSdkVersion</b>Quyền mới thêm vào để khóa tính năng cũ được <b>cấp ngầm</b> cho app nhắm phiên bản trước đó (vì app chưa biết quyền đó) nhưng vẫn hiển thị trong màn hình cài đặt. App nhắm phiên bản mới phải xin tường minh.</div>

<h3>Xin quyền bằng manifest</h3>
<pre>&lt;manifest ... package="com.example.app"&gt;
  <span class="h">&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</span>
  <span class="h">&lt;uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /&gt;</span>
  &lt;application ...&gt; ... &lt;/application&gt;
&lt;/manifest&gt;</pre>
<ul><li><code>&lt;uses-permission&gt;</code> = <b>xin</b> một quyền.</li><li><code>&lt;permission&gt;</code> = <b>định nghĩa</b> quyền mới.</li></ul>

<h3>Ai quản lý? Package Manager & packages.xml</h3>
<p>Quyền được gán cho từng gói lúc cài bởi <b>package manager service</b>. Nó giữ cơ sở dữ liệu mọi gói (đường dẫn, phiên bản, chứng chỉ ký, quyền đã cấp) cùng danh sách quyền toàn máy, lưu trong <code>/data/system/packages.xml</code> (cập nhật mỗi khi cài/cập nhật/gỡ).</p>
<pre>&lt;package name="com.google.android.apps.translate" ...
         <span class="h">userId="10204"</span> installer="com.android.vending"&gt;
  &lt;sigs count="1"&gt;&lt;cert index="7" /&gt;&lt;/sigs&gt;    <span class="c">&lt;!-- chứng chỉ ký --&gt;</span>
  <span class="h">&lt;perms&gt;</span>
    &lt;item name="android.permission.CAMERA" /&gt;
    &lt;item name="android.permission.INTERNET" /&gt;
    &lt;item name="android.permission.READ_SMS" /&gt; ...
  &lt;/perms&gt;
&lt;/package&gt;</pre>
<p>Lấy thông tin gói bằng code: <code>PackageManager.getPackageInfo()</code>.</p>
`},

{id:'levels', icon:'🚦', title:'4 mức bảo vệ (protection level)', html:`
<p>Câu hỏi then chốt: nếu quyền cấp lúc cài, vậy package manager <i>dựa vào đâu</i> để cấp hay không? → Dựa vào <b>protection level</b>: mô tả rủi ro của quyền và quy trình cấp.</p>
<div class="cards">
 <div class="mini g"><span class="em">🟢</span><h4>normal</h4><p>Mặc định. Rủi ro thấp → <b>tự động cấp</b>, không hỏi.</p><p>VD: <code>ACCESS_NETWORK_STATE</code>, <code>GET_ACCOUNTS</code> (theo sách)</p></div>
 <div class="mini a"><span class="em">🟠</span><h4>dangerous</h4><p>Đụng dữ liệu người dùng / quyền điều khiển máy → hiện <b>hộp thoại xác nhận</b>. (4.4: chấp nhận hết hoặc không cài.)</p><p>VD: <code>READ_SMS</code>, <code>CAMERA</code></p></div>
 <div class="mini r"><span class="em">🔴</span><h4>signature</h4><p>Chỉ cấp cho app <b>ký cùng khóa</b> với app khai báo quyền. Mạnh nhất vì cần sở hữu khóa mật mã.</p><p>VD: <code>NET_ADMIN</code>, <code>ACCESS_ALL_EXTERNAL_STORAGE</code></p></div>
 <div class="mini v"><span class="em">🟣</span><h4>signatureOrSystem</h4><p>Cấp cho app <b>cùng khóa</b> HOẶC app trong <b>ảnh hệ thống</b>. Nhà sản xuất chia sẻ tính năng mà không phải chia sẻ khóa.</p><p>4.3 trở về: mọi app trong /system. <b>4.4+: phải ở <code>/system/priv-app/</code></b></p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ – thang “cửa”</b>
<div class="mnemo">Normal: cửa mở · Dangerous: hỏi khách · Signature: thẻ cùng công ty · SignatureOrSystem: thẻ công ty HOẶC nhân viên nội bộ</div></div>
<p>Hộp thoại cài mặc định hiển thị các quyền dangerous; Google Play hiển thị theo <b>nhóm quyền</b> và ẩn quyền normal.</p>

<h3>🧪 Thử nghiệm: package manager có cấp quyền không?</h3>
<div class="sim" data-permsim></div>
<details><summary>Ghi chú về cách mô phỏng</summary>
<p>Trong XML của framework, <code>signature|system</code> là cách viết của signatureOrSystem – nghĩa là <b>một trong hai</b> điều kiện. Bản mô phỏng trên dùng cách hiểu đó. Cờ <code>development</code> thêm khả năng cấp/thu hồi bằng <code>pm grant/revoke</code>.</p></details>
`},

{id:'gid', icon:'🔢', title:'Từ quyền xuống kernel: ánh xạ quyền → GID', html:`
<p>Cấp cao (app, system service) hỏi package manager “app này có quyền gì?”. Nhưng cấp thấp như <b>native daemon và kernel</b> không hỏi package manager – chúng chỉ nhìn <b>UID, GID và GID phụ</b> của tiến trình, đối chiếu với chủ sở hữu và bit truy cập của tài nguyên (tệp thiết bị, socket).</p>
<p>Cầu nối là tệp <code>/etc/permissions/platform.xml</code>: nó ánh xạ <b>quyền → GID</b>.</p>
<pre>&lt;permission name="android.permission.INTERNET"&gt;
  &lt;group gid="<span class="h">inet</span>" /&gt;
&lt;/permission&gt;
&lt;permission name="android.permission.WRITE_EXTERNAL_STORAGE"&gt;
  &lt;group gid="<span class="h">sdcard_r</span>" /&gt;
  &lt;group gid="<span class="h">sdcard_rw</span>" /&gt;
&lt;/permission&gt;
<span class="c">&lt;!-- chiều ngược lại: gán quyền cho tiến trình hệ thống không có gói --&gt;</span>
&lt;assign-permission name="android.permission.MODIFY_AUDIO_SETTINGS" uid="media" /&gt;</pre>
<p>Tên nhóm → số GID được cố định trong <code>android_filesystem_config.h</code> (Android không có <code>/etc/group</code>).</p>
<p><b>Bấm để xem:</b></p>
<div data-chipinfo>
 <div class="chips"><button class="chip" data-info="<h4>INTERNET → nhóm <code>inet</code> (GID 3003)</h4><p>Zygote gọi <code>setgroups()</code> thêm GID 3003 cho tiến trình app. Kernel (paranoid networking) chỉ cho tạo socket mạng nếu tiến trình thuộc nhóm inet hoặc có CAP_NET_RAW.</p>">INTERNET</button><button class="chip" data-info="<h4>WRITE_EXTERNAL_STORAGE → <code>sdcard_r</code> (1028) + <code>sdcard_rw</code> (1015)</h4><p>Thư mục bộ nhớ ngoài thuộc các nhóm này, nên tiến trình có hai GID phụ đó mới đọc/ghi được theo quyền tệp thông thường của kernel.</p>">WRITE_EXTERNAL_STORAGE</button><button class="chip" data-info="<h4>MODIFY_AUDIO_SETTINGS (uid=media)</h4><p>Đây là chiều ngược lại: thẻ <code>&amp;lt;assign-permission&amp;gt;</code> gán quyền cho tiến trình hệ thống (mediaserver chạy UID media) vốn không có gói để xin quyền.</p>">MODIFY_AUDIO_SETTINGS</button></div>
 <div class="info-panel chipout"><p class="hint">Chọn một quyền.</p></div>
</div>
<div class="callout c-info"><b>Hai chiều ánh xạ</b><b>&lt;permission&gt;&lt;group&gt;</b>: quyền → GID phụ cho app. <b>&lt;assign-permission&gt;</b>: UID hệ thống → quyền (cho tiến trình không có gói).</div>
<p>Package manager đọc platform.xml lúc khởi động. Khi cấp quyền, nếu quyền có GID đi kèm, GID được thêm vào <b>danh sách GID phụ</b> của app – chính là trường cuối của <code>packages.list</code> (chương 1).</p>
<table>
<tr><th>Hằng</th><th>GID</th><th>Ý nghĩa</th></tr>
<tr><td>AID_INET</td><td>3003</td><td>tạo socket AF_INET/AF_INET6</td></tr>
<tr><td>AID_NET_RAW</td><td>3004</td><td>kernel cho thêm <code>CAP_NET_RAW</code></td></tr>
<tr><td>AID_NET_ADMIN</td><td>3005</td><td>kernel cho thêm <code>CAP_NET_ADMIN</code></td></tr>
<tr><td>AID_SDCARD_R / RW / ALL</td><td>1028 / 1015 / 1035</td><td>đọc / ghi / mọi người dùng — bộ nhớ ngoài</td></tr>
<tr><td>AID_MOUNT</td><td>1009</td><td>gửi lệnh tới vold</td></tr>
</table>
`},

{id:'zygote', icon:'🧬', title:'Zygote: nơi gắn UID/GID cho tiến trình app', html:`
<p>Vậy app nhận UID/GID/GID phụ vào lúc nào? Lúc <b>tiến trình app được tạo từ zygote</b>.</p>
<p>Mỗi app thực chất là một tiến trình Dalvik. Khởi động một VM mới cho mỗi app thì chậm và tốn RAM, nên Android dùng một tiến trình <b>khởi tạo sẵn một phần</b> tên <b>zygote</b> và <code>fork()</code> nó khi cần chạy app mới.</p>
<div class="analogy">Zygote giống <b>tế bào gốc</b>: ban đầu chưa chuyên biệt (đã nạp sẵn lớp framework), mỗi lần “nhân đôi” thì cái mới <b>chuyên biệt hóa (specialize)</b> thành một app cụ thể.</div>
<ul>
<li>Con kế thừa bộ nhớ đã nạp sẵn; nhờ <b>copy-on-write</b>, mọi app <b>chia sẻ</b> một bản lớp framework.</li>
<li>Khác với tiến trình native (gọi <code>exec()</code>), con của zygote chỉ chạy <code>main()</code> của một lớp Java.</li>
<li>Zygote do <code>init.rc</code> khởi động, nhận lệnh qua <b>Unix domain socket</b> tên <code>zygote</code>.</li>
</ul>
<h3>Các bước “chuyên biệt hóa” (bấm để chạy từng bước)</h3>
<div class="stepper" data-stepper>
 <div class="step"><b><code>fork()</code></b>Tạo tiến trình con, vẫn chạy với quyền <b>root</b> như zygote cha.</div>
 <div class="step"><b><code>setgroups()</code></b>Đặt <b>GID phụ</b> – chính là các GID được map từ quyền (inet, sdcard_rw…).</div>
 <div class="step"><b><code>setrlimit()</code></b>Đặt giới hạn tài nguyên.</div>
 <div class="step"><b><code>setresgid()</code> rồi <code>setresuid()</code></b>Đặt GID và UID thật/hiệu lực/saved về UID của app. Vì <i>saved UID</i> cũng khác 0 nên tiến trình <b>không thể quay lại root</b>.</div>
 <div class="step"><b><code>capset()</code></b>Đặt các Linux capabilities.</div>
 <div class="step"><b>Scheduling & SELinux</b>Vào control group lập lịch; đặt <b>nice name</b> (tên gói) và nhãn <b>seinfo</b> cho SELinux.</div>
 <div class="step"><b>Bật debug (nếu yêu cầu)</b>Rồi tiến trình chạy code app với danh tính đã hạ quyền.</div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b>Thứ tự chính: <div class="mnemo">Fork → Groups → Limits → gid/uid → Caps → SELinux</div>Vì phải còn là root mới được đổi các thuộc tính này, nên <b>đổi UID là bước gần cuối</b> – hạ quyền xong thì hết đường lùi.</div>
<p>Trong <code>ps</code>, bạn thấy zygote (PID 181) do <code>init</code> (PID 1) sinh ra, và mọi app có <b>PPID = 181</b>, mỗi app chạy dưới một user riêng (radio, nfc, u0_a7…) và tên tiến trình là tên gói.</p>
<div class="callout c-modern"><b>Android hiện đại</b>ART thay Dalvik nhưng vẫn dùng mô hình zygote như vậy (sách cũng ghi chú điều này cho ART thử nghiệm ở 4.4).</div>
`},

{id:'enforce', icon:'🧱', title:'Ba tầng thực thi quyền', html:`
<svg class="dia" viewBox="0 0 640 230" role="img" aria-label="Ba tầng thực thi quyền">
  <rect class="blu" x="10" y="15" width="620" height="60" rx="10"/><text x="320" y="40" text-anchor="middle" font-weight="700">Framework / System Service (Java)</text><text x="320" y="60" text-anchor="middle" class="sm">hỏi Package Manager: UID này có quyền X không? → SecurityException</text>
  <rect class="amb" x="10" y="85" width="620" height="60" rx="10"/><text x="320" y="110" text-anchor="middle" font-weight="700">Native daemon</text><text x="320" y="130" text-anchor="middle" class="sm">quyền socket (chủ/nhóm/mode) + SO_PEERCRED để đọc UID người gọi</text>
  <rect class="acc" x="10" y="155" width="620" height="60" rx="10"/><text x="320" y="180" text-anchor="middle" font-weight="700">Kernel</text><text x="320" y="200" text-anchor="middle" class="sm">quyền tệp/thiết bị theo UID/GID + paranoid networking (nhóm inet)</text>
</svg>
<h3>① Kernel: paranoid network security</h3>
<p>Truy cập tệp, thiết bị, local socket do kernel kiểm bằng UID/GID như Linux thường. Android thêm một luật: <b>muốn tạo socket mạng phải thuộc nhóm <code>inet</code> (GID 3003)</b> hoặc có <code>CAP_NET_RAW</code>.</p>
<pre>static inline int current_has_network(void)
{ return in_egroup_p(AID_INET) || capable(CAP_NET_RAW); }
...
static int inet_create(...) {
  if (!<span class="h">current_has_network()</span>) return -EACCES;   <span class="c">// từ chối!</span>
}</pre>
<div class="flow"><div class="node">App xin INTERNET</div><span class="arr">→</span><div class="node">platform.xml: GID inet</div><span class="arr">→</span><div class="node">zygote setgroups()</div><span class="arr">→</span><div class="node hl">kernel cho phép tạo socket</div></div>
<p>Kernel cũng cấp capability theo GID (net_raw 3004 → CAP_NET_RAW; net_admin 3005 → CAP_NET_ADMIN) và dùng cơ chế này cho Bluetooth socket và tunneling (VPN).</p>

<h3>② Native daemon</h3>
<p>Binder là IPC ưa thích, nhưng daemon cấp thấp thường dùng <b>Unix domain socket</b>. Socket là nút trên hệ tệp nên dùng <b>quyền tệp</b> để kiểm soát. Các socket được <code>init</code> tạo từ <code>init.rc</code> trong <code>/dev/socket/</code>.</p>
<pre>service vold /system/bin/vold
    class core
    socket vold stream <span class="h">0660 root mount</span></pre>
<p>Socket <code>vold</code> mode 0660, chủ <code>root</code>, nhóm <code>mount</code> (GID 1009): thành viên nhóm mount gửi lệnh được mà không cần là root.</p>
<p>Kiểm soát chi tiết hơn bằng <b>peer credentials</b>: <code>getsockopt(SO_PEERCRED)</code> (hoặc <code>SCM_CREDENTIALS</code>) cho daemon biết UID/GID/PID đối tác – do kernel kiểm nên <b>không giả được</b>, giống Binder.</p>
<pre>if ((cli-&gt;getUid() != 0) &amp;&amp; (cli-&gt;getUid() != AID_SYSTEM)) {
  cli-&gt;sendMsg(ResponseCode::CommandNoPermission,
               "No permission to run cryptfs commands", false);
  return 0;
}</pre>
<p>Java dùng lớp <code>android.net.LocalSocket</code> để nói chuyện với daemon (vd <code>MountService</code> → vold) mà không cần JNI.</p>

<h3>③ Framework: tĩnh (declarative) vs động (imperative)</h3>
<div class="compare">
 <div class="mini b"><h4>Static / Declarative</h4><p>Khai báo quyền trong <b>manifest</b> (metadata); <b>hệ thống</b> tự thực thi. Tách quyết định bảo mật khỏi logic nghiệp vụ nhưng ít linh hoạt.</p></div>
 <div class="mini a"><h4>Dynamic / Imperative</h4><p><b>Thành phần tự kiểm tra</b> trong code bằng <code>checkPermission()</code>/<code>enforcePermission()</code>. Linh hoạt, kiểm soát mịn hơn, nhưng phải tự viết.</p></div>
</div>
`},

{id:'dyn-static', icon:'🔍', title:'Kiểm tra động và tĩnh trong framework', html:`
<h3>Kiểm tra động (dynamic)</h3>
<p>Binder không tự có kiểm soát truy cập: có tham chiếu là gọi được mọi hàm qua <code>transact()</code>. Nên mỗi system service tự kiểm. Chỉ so sánh UID (như <code>getCallingUid() == SYSTEM_UID</code>) chỉ hợp với UID cố định (root, system); đa số dịch vụ chỉ quan tâm “người gọi <i>có quyền X</i> không”.</p>
<p>Các hàm trong <code>Context</code>:</p>
<table>
<tr><th>Hàm</th><th>Hành vi</th></tr>
<tr><td><code>checkPermission(perm, pid, uid)</code></td><td>Trả <code>PERMISSION_GRANTED</code> / <code>PERMISSION_DENIED</code></td></tr>
<tr><td><code>checkCallingOrSelfPermission(perm)</code></td><td>Tự lấy pid/uid người gọi rồi kiểm</td></tr>
<tr><td><code>enforcePermission(...)</code> / <code>enforceCallingPermission(...)</code></td><td>Không trả giá trị, <b>ném SecurityException</b> nếu thiếu</td></tr>
</table>
<p>Quy trình của <code>checkPermission</code>:</p>
<div class="stepper" data-stepper>
 <div class="step"><b>root hoặc system?</b>→ tự động <b>cấp</b>.</div>
 <div class="step"><b>Quyền do chính app đó khai báo?</b>→ cấp (tối ưu hiệu năng).</div>
 <div class="step"><b>Thành phần đích có private (không exported)?</b>→ <b>từ chối</b> mọi người gọi bên ngoài.</div>
 <div class="step"><b>Hỏi PackageManagerService</b>→ UID → app ID → tập quyền đã cấp (nếu là UID hệ thống không có gói thì xem <code>&lt;assign-permission&gt;</code>). Có thì GRANTED, không thì DENIED.</div>
</div>
<pre>public byte[] getStatistics() {
  mContext.<span class="h">enforceCallingPermission</span>(
      android.Manifest.permission.BATTERY_STATS, null);   <span class="c">// thiếu quyền → SecurityException</span>
  Parcel out = Parcel.obtain();
  mStats.writeToParcel(out, 0); ...
}</pre>

<h3>Kiểm tra tĩnh (static)</h3>
<p>Xảy ra khi app tương tác với thành phần của app khác có khai báo quyền. <b>Intent</b> mô tả thao tác cần làm: <b>explicit</b> (chỉ rõ gói + lớp đích) hoặc <b>implicit</b> (chỉ có action như <code>ACTION_SEND</code>; hệ thống tìm thành phần khớp, nhiều thì hỏi người dùng).</p>
<div class="flow"><div class="node">Intent</div><span class="arr">→</span><div class="node">ActivityManagerService phân giải</div><span class="arr">→</span><div class="node">Đích có quyền yêu cầu?</div><span class="arr">→</span><div class="node hl">hỏi PackageManager: người gọi có quyền?</div><span class="arr">→</span><div class="node">cho chạy / SecurityException</div></div>
<p>Cách lấy danh tính người gọi vẫn là <code>getCallingUid()</code>/<code>getCallingPid()</code> → gói → quyền.</p>

<h3>Mỗi thành phần kiểm tra khi nào?</h3>
<table>
<tr><th>Thành phần</th><th>Lúc kiểm tra</th><th>Khi thiếu quyền</th></tr>
<tr><td><b>Activity</b></td><td><code>startActivity()</code> / <code>startActivityForResult()</code></td><td>SecurityException</td></tr>
<tr><td><b>Service</b></td><td><code>startService()</code>, <code>stopService()</code>, <code>bindService()</code></td><td>SecurityException</td></tr>
<tr><td><b>Content Provider</b></td><td>Đồng bộ ở <code>query()</code> (quyền đọc); <code>insert/update/delete</code> (quyền ghi)</td><td>SecurityException</td></tr>
<tr><td><b>Broadcast</b></td><td><b>Lúc phân phối</b> tới receiver (broadcast bất đồng bộ)</td><td><b>Bỏ qua im lặng</b> – receiver không nhận, không có exception</td></tr>
</table>
<div class="callout c-warn"><b>Broadcast có tới 2 lần kiểm tra</b>(1) Sender có thể yêu cầu receiver phải có quyền (<code>sendBroadcast(intent, receiverPermission)</code>). (2) Receiver có thể yêu cầu sender phải có quyền (manifest hoặc <code>registerReceiver(..., broadcastPermission, ...)</code>).</div>
<h3>Broadcast đặc biệt</h3>
<ul>
<li><b>Protected broadcast</b> (vd <code>BOOT_COMPLETED</code>, <code>PACKAGE_INSTALLED</code>): chỉ gửi được bởi tiến trình chạy là SYSTEM, PHONE, SHELL, BLUETOOTH hoặc root; kẻ khác gửi → SecurityException.</li>
<li><b>Sticky broadcast</b> (hệ thống giữ lại Intent sau khi phát): người gửi cần quyền <code>BROADCAST_STICKY</code>.</li>
</ul>
`},

{id:'system-perm', icon:'🏛', title:'Quyền hệ thống, platform key, development, shared UID', html:`
<h3>Quyền dựng sẵn nằm ở đâu?</h3>
<p>Trong <code>framework-res.apk</code> (thư mục <code>/system/framework/</code>): APK này <b>không có code</b>, chỉ chứa tài nguyên framework nhưng quan trọng vì nó <b>định nghĩa gói <code>android</code></b> và các quyền hệ thống trong manifest: khai báo <code>&lt;protected-broadcast&gt;</code>, <code>&lt;permission-group&gt;</code> và <code>&lt;permission&gt;</code> kèm <code>protectionLevel</code>.</p>
<ul>
<li><b>Permission group</b> chỉ để <b>hiển thị</b> nhóm các quyền liên quan trên giao diện; app vẫn phải <b>xin từng quyền</b>, không thể xin “cả nhóm”.</li>
<li><b>Cờ bảo vệ</b> kết hợp với mức: <code>system</code> (0x10) – app phải thuộc ảnh hệ thống; <code>development</code> (0x20) – quyền dev.</li>
</ul>
<pre>&lt;permission android:name="android.permission.NET_ADMIN"
            android:protectionLevel="<span class="h">signature</span>" /&gt;
&lt;permission android:name="android.permission.MANAGE_USB"
            android:protectionLevel="<span class="h">signature|system</span>" /&gt;
&lt;permission android:name="android.permission.WRITE_SECURE_SETTINGS"
            android:protectionLevel="<span class="h">signature|system|development</span>" /&gt;</pre>

<h3>Platform key – 4 khóa có sẵn trong AOSP</h3>
<table>
<tr><th>Khóa</th><th>Ký cho</th></tr>
<tr><td><code>platform</code></td><td>Các gói lõi: System UI, Settings, Phone, Bluetooth… và cả <code>framework-res.apk</code></td></tr>
<tr><td><code>shared</code></td><td>Gói liên quan tìm kiếm và danh bạ</td></tr>
<tr><td><code>media</code></td><td>Gallery và các provider media</td></tr>
<tr><td><code>testkey</code> (<code>releasekey</code> khi release)</td><td>Mọi gói còn lại</td></tr>
</table>
<p>Vì <code>framework-res.apk</code> ký bằng platform key, nên app muốn có quyền <code>signature</code> của hệ thống (như NET_ADMIN) phải ký cùng platform key.</p>
<div class="callout c-danger"><b>⚠ Test key là công khai!</b>AOSP kèm sẵn khóa test mà ai tải mã nguồn cũng có. Tuyệt đối <b>không dùng cho bản build thật</b> – phải tạo khóa mới (script <code>make_key</code>).</div>

<h3>Quyền development (từ Android 4.2)</h3>
<p>Phá lệ quy tắc “quyền cố định lúc cài”: nhóm như <code>READ_LOGS</code>, <code>WRITE_SECURE_SETTINGS</code> có thể được <b>cấp/thu hồi theo yêu cầu</b>:</p>
<pre>$ pm grant com.example.app android.permission.READ_LOGS
$ pm revoke com.example.app android.permission.READ_LOGS</pre>
<p>Không phải ai cũng làm được: cần quyền <code>GRANT_REVOKE_PERMISSIONS</code> (signature), nên chỉ <b>shell (UID 2000)</b> và các tiến trình khởi chạy từ shell mới dùng được.</p>

<h3>Shared User ID – quyền được gộp</h3>
<ul>
<li>Bật bằng <code>android:sharedUserId</code> ở thẻ gốc manifest; tên dạng package (có ít nhất một dấu chấm).</li>
<li>Chưa có thì tạo; đã có gói khác dùng thì so chứng chỉ – lệch → <code>INSTALL_FAILED_SHARED_USER_INCOMPATIBLE</code>. Thêm sharedUserId vào bản cập nhật → <code>INSTALL_FAILED_UID_CHANGED</code>.</li>
<li>Shared user là <b>đối tượng hạng nhất</b> trong CSDL gói: có chứng chỉ và quyền riêng. Các gói thành viên <b>thừa hưởng</b> quyền = <b>hợp</b> các quyền mọi gói cùng shared UID xin.</li>
<li>Hệ quả: một gói có thể dùng API mà <i>chưa từng xin</i> quyền nếu gói khác cùng shared UID đã xin. Và quyền thay đổi khi cài/gỡ gói.</li>
<li>Cùng shared UID có thể chạy <b>chung tiến trình</b> bằng cùng giá trị <code>process</code> trong <code>&lt;application&gt;</code> (vd các app Google chạy chung tiến trình với dịch vụ đăng nhập, thuộc <code>com.google.uid.shared</code>).</li>
</ul>
<p>5 shared UID dựng sẵn:</p>
<div class="chips"><span class="chip">android.uid.system · 1000</span><span class="chip">android.uid.phone · 1001</span><span class="chip">android.uid.bluetooth · 1002</span><span class="chip">android.uid.log · 1007</span><span class="chip">android.uid.nfc · 1027</span></div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">System · Phone · Bluetooth · Log · NFC</div>→ “Sao Phải Băn Khoăn Nhiều”. Thứ tự UID: 1000 · 1001 · 1002 · 1007 · 1027.</div>
`},

{id:'custom', icon:'🛠', title:'Quyền tùy chỉnh & thành phần public / private', html:`
<h3>Quyền tùy chỉnh (custom)</h3>
<p>App bên thứ ba có thể khai báo <code>&lt;permission&gt;</code>, <code>&lt;permission-group&gt;</code> và <code>&lt;permission-tree&gt;</code>; sau đó gắn vào thành phần để hệ thống kiểm tĩnh, hoặc tự kiểm động bằng <code>checkPermission()</code>/<code>enforcePermission()</code>.</p>
<pre>&lt;permission-tree android:name="com.example.app.permission" /&gt;
&lt;permission-group android:name="com.example.app.permission-group.TEST_GROUP" ... /&gt;
&lt;permission android:name="com.example.app.permission.PERMISSION1"
            android:permissionGroup="com.example.app.permission-group.TEST_GROUP"
            android:protectionLevel="<span class="h">signature</span>" /&gt;</pre>
<div class="callout c-warn"><b>Muốn giới hạn người được cấp? Dùng <code>signature</code>.</b> Nếu để <code>normal</code>/<code>dangerous</code>, app nào cũng được cấp sau khi người dùng bấm OK.</div>
<div class="callout c-info"><b>Thứ tự cài đặt</b>Hệ thống chỉ cấp được quyền mà nó <i>đã biết</i>. App định nghĩa quyền phải được cài <b>trước</b> app dùng quyền đó. Quyền chưa biết bị bỏ qua, không cấp.</div>
<h3>Quyền động</h3>
<p>Dùng <code>PackageManager.addPermission()</code> / <code>removePermission()</code>. Quyền thêm phải nằm trong một <b>permission tree</b> của app (tên quyền = tên cây + “.” + hậu tố) – chỉ app sở hữu cây, hoặc app khác cùng shared UID, được thêm/xóa. Quyền động được lưu trong <code>packages.xml</code> với <code>type="dynamic"</code> và bền qua khởi động lại.</p>

<h3>Public & private</h3>
<div class="cards">
 <div class="mini g"><h4>Private (mặc định)</h4><p>Chỉ app khai báo gọi được. Áp dụng cho activity, service, receiver.</p></div>
 <div class="mini a"><h4>Public / exported</h4><p>App khác gọi được. Bật bằng <code>android:exported="true"</code> hoặc <b>ngầm</b> khi khai báo <code>&lt;intent-filter&gt;</code>.</p></div>
</div>
<ul>
<li>Muốn có intent-filter mà vẫn private → đặt <code>exported="false"</code>.</li>
<li>Thành phần không exported: lời gọi từ ngoài bị Activity Manager <b>chặn</b> dù người gọi có quyền gì (trừ root/system).</li>
<li><b>Ngoại lệ: content provider</b> – ban đầu mặc định public. Từ Android 4.2 (API 17), app nhắm API ≥ 17 thì provider mặc định <b>private</b>; nhắm thấp hơn vẫn public để tương thích.</li>
<li>Khuyến nghị: thành phần public nên được bảo vệ bằng <b>quyền tùy chỉnh</b>.</li>
</ul>
<pre>&lt;service android:name=".MyService" android:<span class="h">exported="false"</span>&gt;
  &lt;intent-filter&gt; &lt;action android:name="com.example.FETCH_DATA" /&gt; &lt;/intent-filter&gt;
&lt;/service&gt;</pre>
<div class="selfcheck"><b>🧪 Tự kiểm tra:</b> Service có intent-filter nhưng không đặt exported. Nó public hay private?<br><button class="btn ghost" style="margin-top:6px">Xem đáp án</button><div class="ans">Có intent-filter → <b>public ngầm</b> (với service/activity/receiver). Muốn private phải ghi <code>exported="false"</code> tường minh.</div></div>
`},

{id:'comp-perm', icon:'🗝', title:'Gắn quyền vào từng thành phần', html:`
<h3>Activity & Service</h3>
<p>Mỗi thành phần có <b>một</b> quyền qua thuộc tính <code>android:permission</code>. Kiểm tra khi app khác gọi <code>startActivity()</code> (hay start/stop/bind service) với intent trỏ tới nó.</p>
<pre>&lt;activity android:name=".MyActivity"
          android:permission="com.example.permission.START_MY_ACTIVITY"&gt; ... &lt;/activity&gt;
&lt;service  android:name=".MyService"
          android:permission="com.example.permission.USE_MY_SERVICE"&gt; ... &lt;/service&gt;</pre>

<h3>Broadcast Receiver – hai chiều</h3>
<ul>
<li>Người gửi hạn chế người nhận: <code>sendBroadcast(intent, receiverPermission)</code>; hoặc từ Android 4.0, <code>Intent.setPackage()</code> để chỉ gửi cho một gói.</li>
<li>Người nhận hạn chế người gửi: thuộc tính <code>permission</code> của <code>&lt;receiver&gt;</code>, hoặc tham số <code>broadcastPermission</code> khi <code>registerReceiver()</code>.</li>
<li>Đa người dùng: app hệ thống có <code>INTERACT_ACROSS_USERS</code> dùng <code>sendBroadcastAsUser()</code> để gửi tới một người dùng.</li>
</ul>
<p>Ví dụ: receiver của device admin đòi quyền <code>BIND_DEVICE_ADMIN</code> (mức signature) → chỉ hệ thống mới kích hoạt được:</p>
<pre>&lt;receiver android:name=".SecurityPolicy$PolicyAdmin"
          android:permission="<span class="h">android.permission.BIND_DEVICE_ADMIN</span>"&gt;
  &lt;intent-filter&gt;&lt;action android:name="android.app.action.DEVICE_ADMIN_ENABLED" /&gt;&lt;/intent-filter&gt;
&lt;/receiver&gt;</pre>

<h3>Content Provider – phức tạp nhất</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="1) Quyền cho cả provider" data-desc="<p>Thuộc tính <code>android:permission</code> áp cho toàn bộ provider.</p>"><span>permission</span><small>toàn provider</small></button>
  <button class="layer" data-c="2" data-title="2) Tách đọc / ghi" data-desc="<p><code>readPermission</code> → cho <code>query()</code>. <code>writePermission</code> → cho <code>insert/update/delete</code>.</p><p>Ví dụ ContactsProvider2: READ_CONTACTS để đọc, WRITE_CONTACTS để ghi. Muốn cả hai phải có cả hai quyền.</p>"><span>readPermission / writePermission</span><small>tách đọc ghi</small></button>
  <button class="layer" data-c="3" data-title="3) Quyền theo URI (path-permission)" data-desc="<p><code>&amp;lt;path-permission&amp;gt;</code> bảo vệ một tập con dữ liệu và <b>ưu tiên cao hơn</b> quyền cấp provider. Ai đã có quyền của URI thì <b>không cần</b> quyền cấp provider.</p><p>Ví dụ: ảnh danh bạ <code>/contacts/.*/photo</code> chỉ cần <code>GLOBAL_SEARCH</code> chứ không cần READ_CONTACTS.</p>"><span>path-permission</span><small>per-URI (tĩnh)</small></button>
  <button class="layer" data-c="4" data-title="4) Cấp tạm thời theo URI (động)" data-desc="<p>Cấp quyền <b>tạm</b> cho một URI cụ thể, không cần app nhận có quyền gì. Bật bằng <code>grantUriPermissions=&quot;true&quot;</code> hoặc <code>&amp;lt;grant-uri-permission&amp;gt;</code>.</p><p>Phổ biến nhất: gắn cờ <code>FLAG_GRANT_READ_URI_PERMISSION</code> / <code>WRITE</code> vào intent. Tự thu hồi khi task của app nhận kết thúc.</p>"><span>grantUriPermission</span><small>per-URI (động)</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm từng cấp độ để xem.</p></div>
</div>
<div class="analogy">Quyền tĩnh per-URI giống <b>thẻ ra vào cho một khu vực</b>. Cấp tạm theo URI giống <b>vé một lần</b>: email app đưa “vé xem đúng ảnh đính kèm này” cho app xem ảnh, thay vì mở cả hộp thư.</div>
<pre>Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setDataAndType(contentUri, mContentType);
intent.addFlags(Intent.<span class="h">FLAG_GRANT_READ_URI_PERMISSION</span>);   <span class="c">// vé xem đúng URI này</span></pre>
<ul>
<li>Android 4.4 (API 19): <code>FLAG_GRANT_PERSISTABLE_URI_PERMISSION</code> + <code>takePersistableUriPermission()</code> giữ quyền qua khởi động lại; lưu ở <code>/data/system/urigrants.xml</code>; thu hồi bằng <code>releasePersistableUriPermission()</code>.</li>
<li>Android 4.1 (API 16): <code>ClipData</code> cho phép cấp nhiều URI cùng lúc.</li>
<li>Do <code>ActivityManagerService</code> quản lý cả cấp tạm lẫn vĩnh viễn.</li>
</ul>
`},

{id:'pending', icon:'⏳', title:'Pending Intent – “ủy quyền” cho app khác', html:`
<p>Pending intent không phải thành phần cũng không phải quyền, nhưng cho phép app <b>trao quyền của chính mình</b> cho app khác nên được bàn ở đây.</p>
<p>Nó gói: <b>một intent + hành động</b> (start activity, gửi broadcast…) + <b>danh tính của app tạo ra</b>. Nhờ đó app nhận có thể thực hiện hành động đó <b>với danh tính và quyền của app gốc</b>.</p>
<div class="analogy">Pending intent giống <b>giấy ủy quyền có chữ ký</b>: bạn đưa cho người khác và họ có thể “nhân danh bạn” làm đúng một việc ghi trên giấy, kể cả khi bạn không có mặt.</div>
<ul>
<li>Ứng dụng chủ yếu: <b>alarm</b> (hẹn giờ) và <b>notification</b> (bấm thông báo) – app có thể đã tắt, hệ thống vẫn khởi chạy giúp.</li>
<li>Danh tính do <code>ActivityManagerService</code> đảm bảo: lúc tạo, hệ thống lấy UID/PID qua Binder, lưu tên gói + user ID cùng intent gốc vào <code>PendingIntentRecord</code>. Khi kích hoạt, nó “nhập vai” app tạo ra rồi chạy bình thường, nên mọi kiểm tra quyền vẫn như thường.</li>
</ul>
<pre>Intent i = new Intent(this, MailboxAlarmReceiver.class);
i.putExtra("mailbox", id);
PendingIntent pi = PendingIntent.<span class="h">getBroadcast</span>(this, 0, i, 0);
am.set(AlarmManager.RTC_WAKEUP, System.currentTimeMillis() + millis, pi);</pre>
<div class="callout c-danger"><b>Rủi ro</b>App nhận pending intent (kể cả app thường) có đúng quyền và danh tính của người tạo. Vì thế phải dựng intent gốc <b>càng cụ thể càng tốt</b> – chỉ rõ tên thành phần (explicit) – để chắc chắn tới đúng nơi.</div>
`}

],

cards: [
 {f:'Permission trong Android thực chất là gì?',b:'Một <b>chuỗi (string)</b> biểu thị khả năng thực hiện một thao tác nào đó (truy cập tài nguyên, dữ liệu, hoặc khởi động thành phần).'},
 {f:'Tên quyền dựng sẵn bắt đầu bằng gì? Tên quyền tùy chỉnh thì sao?',b:'<code>android.permission.</code> (định nghĩa trong gói android). Quyền tùy chỉnh dùng tiền tố là gói của app định nghĩa, vd <code>com.example.app.permission.X</code>.'},
 {f:'Lệnh xem danh sách quyền hiện có?',b:'<code>pm list permissions</code> (thêm <code>-f</code> để thấy gói định nghĩa, label, protection level).'},
 {f:'&lt;uses-permission&gt; và &lt;permission&gt; khác nhau thế nào?',b:'<code>&lt;uses-permission&gt;</code> = <b>xin</b> quyền. <code>&lt;permission&gt;</code> = <b>định nghĩa</b> quyền mới.'},
 {f:'Ai gán quyền cho app và lưu ở đâu?',b:'<b>Package manager service</b> gán lúc cài; CSDL gói lưu trong <code>/data/system/packages.xml</code>.'},
 {f:'Quyền implicit-granted là gì (liên quan targetSdkVersion)?',b:'Quyền mới khóa tính năng cũ được cấp ngầm cho app nhắm phiên bản cũ (chưa biết quyền đó); vẫn hiển thị khi cài. App nhắm bản mới phải xin tường minh.'},
 {f:'4 protection level?',b:'<b>normal</b> · <b>dangerous</b> · <b>signature</b> · <b>signatureOrSystem</b>.'},
 {f:'Quyền normal được cấp thế nào? Ví dụ?',b:'Tự động, không hỏi người dùng (rủi ro thấp). VD: ACCESS_NETWORK_STATE.'},
 {f:'Quyền dangerous được cấp thế nào? Ví dụ?',b:'Hiện hộp thoại xác nhận lúc cài (4.4: đồng ý hết hoặc hủy cài). VD: READ_SMS, CAMERA.'},
 {f:'Quyền signature chỉ cấp cho ai?',b:'App ký bằng <b>cùng khóa</b> với app khai báo quyền. Mức mạnh nhất. VD: NET_ADMIN.'},
 {f:'signatureOrSystem khác signature ở điểm nào? Thay đổi ở 4.4?',b:'Thêm điều kiện: app nằm trong ảnh hệ thống. Từ 4.4 phải ở <code>/system/priv-app/</code>, không phải mọi app trong /system.'},
 {f:'Quyền được ánh xạ xuống GID bằng tệp nào?',b:'<code>/etc/permissions/platform.xml</code> (thẻ <code>&lt;permission&gt;&lt;group gid=…/&gt;</code>).'},
 {f:'INTERNET ánh xạ tới GID nào? Tác dụng?',b:'Nhóm <b>inet</b> (GID 3003). Kernel chỉ cho tiến trình thuộc inet (hoặc có CAP_NET_RAW) tạo socket mạng.'},
 {f:'WRITE_EXTERNAL_STORAGE ánh xạ tới các GID nào?',b:'<code>sdcard_r</code> (1028) và <code>sdcard_rw</code> (1015).'},
 {f:'&lt;assign-permission&gt; dùng làm gì?',b:'Gán quyền cấp cao cho tiến trình hệ thống chạy dưới một UID nhất định mà không có gói (vd uid="media").'},
 {f:'Zygote là gì? Vì sao dùng?',b:'Tiến trình Dalvik khởi tạo sẵn một phần; <code>fork()</code> ra mỗi app. Giảm bộ nhớ, khởi động nhanh, các app chia sẻ lớp framework (copy-on-write).'},
 {f:'“Specialization” trong zygote?',b:'Con vừa fork từ zygote biến thành app cụ thể: đặt GID phụ, rlimit, gid/uid, capabilities, scheduling, SELinux context, rồi chạy main() của lớp Java của app.'},
 {f:'Thứ tự các lời gọi chính khi specialize một tiến trình app?',b:'fork → setgroups → setrlimit → setresgid → setresuid → capset → sched policy → SELinux context → bật debug.'},
 {f:'Vì sao app không thể quay lại root sau khi zygote đặt UID?',b:'Vì <code>setresuid()</code> đặt cả real, effective và <b>saved</b> UID khác 0.'},
 {f:'Paranoid network security là gì?',b:'Tùy chọn kernel Android (<code>CONFIG_ANDROID_PARANOID_NETWORK</code>): chỉ tiến trình thuộc nhóm inet hoặc có CAP_NET_RAW mới tạo được socket; nếu không → <code>-EACCES</code>.'},
 {f:'GID 3004 và 3005 cho capability gì?',b:'AID_NET_RAW (3004) → CAP_NET_RAW; AID_NET_ADMIN (3005) → CAP_NET_ADMIN.'},
 {f:'Local socket của daemon được tạo bởi ai, nằm ở đâu?',b:'Do <code>init</code> tạo theo <code>init.rc</code> trong <code>/dev/socket/</code>, với chủ/nhóm/mode chỉ định (vd vold 0660 root mount).'},
 {f:'SO_PEERCRED dùng làm gì?',b:'Cho daemon biết UID/GID/PID của client qua local socket – do kernel kiểm nên không giả được, dùng để kiểm soát chi tiết.'},
 {f:'Declarative vs imperative security?',b:'Declarative: quyền khai báo trong manifest, hệ thống thực thi (tĩnh). Imperative: component tự kiểm trong code (động), linh hoạt hơn.'},
 {f:'Các hàm kiểm tra quyền động trong Context?',b:'<code>checkPermission</code>, <code>checkCallingOrSelfPermission</code> (trả GRANTED/DENIED) và <code>enforcePermission</code>/<code>enforceCallingPermission</code> (ném SecurityException).'},
 {f:'checkPermission tự động cấp cho ai?',b:'<b>root</b> và <b>system</b>. Ngoài ra cấp nếu quyền do chính app đó khai báo; từ chối nếu thành phần private; còn lại hỏi package manager.'},
 {f:'Kiểm tra quyền broadcast khác activity/service thế nào?',b:'Vì bất đồng bộ, kiểm lúc <b>phân phối</b>: receiver thiếu quyền chỉ bị bỏ qua, <b>không có exception</b>. Có thể cần 2 lần kiểm (phía sender và receiver).'},
 {f:'Protected broadcast và sticky broadcast?',b:'Protected (BOOT_COMPLETED…): chỉ gửi được bởi system/phone/shell/bluetooth/root. Sticky: người gửi cần <code>BROADCAST_STICKY</code>.'},
 {f:'framework-res.apk chứa gì?',b:'Chỉ tài nguyên framework (không code) nhưng định nghĩa gói <code>android</code>, permission group, permission và protected broadcast. Ký bằng platform key.'},
 {f:'Cờ protection “system” và “development” nghĩa là gì?',b:'<code>system</code> (0x10): app phải thuộc ảnh hệ thống. <code>development</code> (0x20): quyền dev có thể cấp/thu hồi bằng pm grant/revoke.'},
 {f:'4 platform key trong AOSP?',b:'<b>platform</b> (lõi), <b>shared</b> (search/contacts), <b>media</b> (gallery/media), <b>testkey/releasekey</b> (còn lại). Test key là công khai → không dùng cho bản release.'},
 {f:'Lệnh cấp/thu hồi quyền development? Ai dùng được?',b:'<code>pm grant</code> / <code>pm revoke</code>. Cần <code>GRANT_REVOKE_PERMISSIONS</code>, thuộc shell (UID 2000).'},
 {f:'Quyền của gói trong shared user được tính ra sao?',b:'Thừa hưởng <b>hợp</b> mọi quyền các gói cùng shared UID xin → một gói có thể dùng API chưa xin; tập quyền đổi khi cài/gỡ gói.'},
 {f:'Lỗi INSTALL_FAILED_SHARED_USER_INCOMPATIBLE vs INSTALL_FAILED_UID_CHANGED?',b:'Cái đầu: khác chứng chỉ ký với gói đang dùng shared UID. Cái sau: bản cập nhật thêm sharedUserId vào app vốn không có.'},
 {f:'5 shared UID dựng sẵn?',b:'system (1000), phone (1001), bluetooth (1002), log (1007), nfc (1027).'},
 {f:'Permission tree để làm gì?',b:'Là “không gian tên” cho quyền động: quyền thêm bằng <code>addPermission()</code> phải có tên bắt đầu bằng tên cây + “.”. Chỉ chủ cây hoặc app cùng shared UID thêm/xóa được.'},
 {f:'Khi nào một thành phần là public?',b:'Khi <code>exported="true"</code> hoặc <b>ngầm</b> khi có <code>&lt;intent-filter&gt;</code>. Provider: trước 4.2 mặc định public; target API ≥ 17 mặc định private.'},
 {f:'Content provider có những loại quyền nào?',b:'permission (toàn bộ) · readPermission/writePermission · path-permission (per-URI, ưu tiên cao hơn) · grantUriPermission (cấp tạm).'},
 {f:'Cấp quyền tạm thời theo URI làm thế nào?',b:'Gắn <code>FLAG_GRANT_READ_URI_PERMISSION</code> / <code>WRITE</code> vào intent (hoặc <code>grantUriPermission()</code>). Cần provider bật grantUriPermissions. Tự thu hồi khi task xong.'},
 {f:'Pending intent là gì và rủi ro?',b:'Intent + hành động + <b>danh tính app tạo</b>; app nhận thực hiện với quyền của app gốc. Rủi ro: nhận quyền của bạn → dùng intent explicit và cụ thể.'}
],

quiz: [
 {q:'Về bản chất, một permission trong Android là gì?',o:['Một khóa mật mã RSA','Một chuỗi (string) biểu thị khả năng thực hiện một thao tác','Một UID đặc biệt','Một tệp cấu hình SELinux'],a:1,e:'Permission đơn giản là một string, ví dụ android.permission.INTERNET.'},
 {q:'Quyền nào dưới đây là quyền dựng sẵn (built-in)?',o:['com.google.android.gallery3d.permission.GALLERY_PROVIDER','android.permission.REBOOT','com.android.launcher3.permission.RECEIVE_LAUNCH_BROADCASTS','com.example.permission.USE_MY_SERVICE'],a:1,e:'Quyền dựng sẵn thuộc gói android nên có tiền tố android.permission.'},
 {q:'Thẻ nào trong manifest dùng để XIN một quyền?',o:['&lt;permission&gt;','&lt;uses-permission&gt;','&lt;permission-tree&gt;','&lt;grant-uri-permission&gt;'],a:1,e:'&lt;uses-permission&gt; xin quyền; &lt;permission&gt; định nghĩa quyền mới.'},
 {q:'Quyền ACCESS_NETWORK_STATE (mức normal) được xử lý ra sao khi cài?',o:['Hỏi người dùng từng lần dùng','Tự động cấp, không cần xác nhận','Chỉ cấp cho app hệ thống','Bị từ chối'],a:1,e:'Mức normal là rủi ro thấp: cấp tự động.'},
 {q:'Mức bảo vệ nào yêu cầu app ký bằng cùng khóa với app khai báo quyền?',o:['normal','dangerous','signature','development'],a:2,e:'signature = cùng khóa ký – mức mạnh nhất vì cần sở hữu khóa mật mã.'},
 {q:'Từ Android 4.4, app muốn nhận quyền signatureOrSystem nhờ nằm trong ảnh hệ thống phải ở đâu?',o:['/data/app/','/system/app/ là đủ','/system/priv-app/','/sdcard/'],a:2,e:'Từ 4.4 chỉ app trong /system/priv-app/ được xem là privileged.'},
 {q:'Tệp nào ánh xạ quyền sang GID?',o:['/etc/passwd','/data/system/packages.list','/etc/permissions/platform.xml','/init.rc'],a:2,e:'platform.xml định nghĩa &lt;permission&gt; → &lt;group gid&gt;.'},
 {q:'Một app có quyền INTERNET sẽ có điều gì trong tiến trình của nó?',o:['UID bằng 0','GID phụ inet (3003)','Capability CAP_SYS_ADMIN','Thư mục dữ liệu trên thẻ SD'],a:1,e:'INTERNET → nhóm inet (3003) được thêm vào GID phụ.'},
 {q:'Vì sao mọi app Android đều có thể “chia sẻ” các lớp framework đã nạp mà không tốn thêm RAM?',o:['Vì chạy trong cùng một tiến trình','Vì được fork từ zygote và dùng cơ chế copy-on-write','Vì framework nằm trong GPU','Vì dùng chung UID'],a:1,e:'Zygote nạp sẵn lớp framework; các con fork dùng chung bản sao nhờ copy-on-write.'},
 {q:'Trong quá trình specialize ở zygote, vì sao thao tác đặt UID phải đến sau khi đặt GID phụ/rlimit?',o:['Quy ước cho đẹp','Vì đổi UID xong tiến trình không còn root nên không thể đổi các thuộc tính đặc quyền nữa','Vì kernel yêu cầu','Vì UID dùng cho logging'],a:1,e:'Chỉ khi còn root mới đổi được groups/rlimit; sau setresuid thì mất quyền root vĩnh viễn (saved UID ≠ 0).'},
 {q:'App không có quyền INTERNET cố mở socket TCP sẽ nhận gì?',o:['Mở được nhưng chậm','Lỗi -EACCES (access denied) từ kernel','SecurityException từ ActivityManager','Hộp thoại xin quyền'],a:1,e:'Paranoid network: current_has_network() = false → inet_create trả -EACCES.'},
 {q:'Socket /dev/socket/vold có mode 0660, chủ root, nhóm mount. Ai gửi được lệnh tới vold?',o:['Chỉ root','root và thành viên nhóm mount','Mọi app','Chỉ system'],a:1,e:'Chủ (root) và nhóm (mount) có quyền rw, còn lại thì không.'},
 {q:'getsockopt(SO_PEERCRED) trên local socket cho daemon biết điều gì?',o:['Mật khẩu client','UID/GID/PID của client, do kernel xác nhận','Danh sách quyền của client','Địa chỉ IP của client'],a:1,e:'Giống PID/EUID của Binder: kernel xác nhận nên không giả được.'},
 {q:'Hình thức nào là “imperative security” (kiểm soát động)?',o:['Khai báo android:permission trong manifest','Gọi enforceCallingPermission() trong code của service','Đặt protectionLevel="signature"','Đặt exported="false"'],a:1,e:'Imperative: component tự quyết định bằng code. Còn manifest = declarative.'},
 {q:'enforceCallingPermission() khi người gọi thiếu quyền sẽ:',o:['Trả về PERMISSION_DENIED','Ném SecurityException','Bỏ qua im lặng','Kill tiến trình người gọi'],a:1,e:'enforce* ném SecurityException; check* trả về giá trị.'},
 {q:'Một broadcast được gửi với receiverPermission. Receiver KHÔNG có quyền đó. Điều gì xảy ra?',o:['Người gửi nhận SecurityException','Receiver bị bỏ qua và không nhận broadcast, không có ngoại lệ','Receiver vẫn nhận','Hệ thống khởi động lại'],a:1,e:'Broadcast bất đồng bộ: kiểm khi phân phối, receiver không đủ quyền chỉ bị bỏ qua.'},
 {q:'Ai gửi được protected broadcast như BOOT_COMPLETED?',o:['Bất kỳ app nào có INTERNET','Chỉ tiến trình hệ thống (SYSTEM/PHONE/SHELL/BLUETOOTH UID hoặc root)','Chỉ app đã ký platform key','Chỉ launcher'],a:1,e:'Tiến trình UID khác gửi sẽ bị SecurityException.'},
 {q:'Nhóm quyền (permission group) có tác dụng gì?',o:['Cho phép xin cả nhóm bằng một dòng','Chỉ dùng để hiển thị các quyền liên quan trong giao diện; vẫn phải xin từng quyền','Tăng mức bảo vệ lên signature','Thay thế permission tree'],a:1,e:'App không thể xin “tất cả quyền trong nhóm”.'},
 {q:'framework-res.apk có đặc điểm nào sau đây?',o:['Chứa toàn bộ code của system services','Không có code, nhưng định nghĩa gói android và các quyền hệ thống, ký bằng platform key','Là APK của launcher','Do người dùng cài'],a:1,e:'Nó mang tài nguyên framework và manifest chứa các khai báo permission.'},
 {q:'Vì sao không nên dùng test key của AOSP cho bản release?',o:['Vì chúng hết hạn','Vì chúng công khai: ai tải mã nguồn cũng có, nên có thể ký app giả mạo thành app hệ thống','Vì làm máy chậm','Vì Google cấm xuất bản'],a:1,e:'Khóa công khai = ai cũng ký được app đạt quyền signature của nền tảng.'},
 {q:'Quyền “development” (vd READ_LOGS) khác quyền thường ở chỗ:',o:['Không bao giờ cấp được','Có thể cấp/thu hồi theo yêu cầu bằng pm grant / pm revoke','Chỉ dùng trong emulator','Tự cấp cho mọi app'],a:1,e:'Từ Android 4.2, cờ development cho phép thay đổi sau khi cài (cần GRANT_REVOKE_PERMISSIONS, thuộc shell).'},
 {q:'Hai app cùng sharedUserId nhưng một app xin CAMERA, app kia thì không. Điều gì đúng?',o:['App kia không bao giờ dùng được camera','Quyền thuộc về shared user (hợp các quyền) nên app kia cũng dùng được camera','App kia bị gỡ','Cả hai phải xin CAMERA thì mới dùng được'],a:1,e:'Gói thừa hưởng hợp quyền của shared user, kể cả quyền chưa tự xin.'},
 {q:'App v2 thêm android:sharedUserId trong khi v1 không có. Kết quả cập nhật?',o:['Thành công, UID đổi','Bị từ chối với INSTALL_FAILED_UID_CHANGED','Gỡ app và cài lại tự động','Chỉ cảnh báo'],a:1,e:'Đổi UID làm mất quyền với dữ liệu cũ nên bị từ chối.'},
 {q:'Muốn một quyền tùy chỉnh chỉ cấp cho app cùng tác giả, nên đặt protectionLevel nào?',o:['normal','dangerous','signature','Không đặt gì'],a:2,e:'normal/dangerous sẽ được cấp cho bất kỳ app nào (dangerous chỉ cần người dùng bấm OK).'},
 {q:'Bạn viết app B dùng quyền tùy chỉnh do app A định nghĩa. Thứ tự cài đặt đúng?',o:['B trước, A sau','A (định nghĩa quyền) trước, B sau','Thứ tự không quan trọng','Cài đồng thời'],a:1,e:'Hệ thống chỉ cấp quyền mà nó đã biết; quyền lạ bị bỏ qua.'},
 {q:'Một service khai báo &lt;intent-filter&gt; nhưng không đặt exported. Nó là:',o:['Private','Public (ngầm)','Bị hệ thống từ chối','Chỉ hoạt động với root'],a:1,e:'intent-filter ngầm làm thành phần public; muốn private phải ghi exported="false".'},
 {q:'Với app nhắm API ≥ 17, content provider không ghi exported sẽ là:',o:['Public','Private','Bị cấm','Chỉ đọc'],a:1,e:'Từ Android 4.2, provider mặc định private với app nhắm API 17+.'},
 {q:'Provider có readPermission=READ_CONTACTS và writePermission=WRITE_CONTACTS. App chỉ có READ_CONTACTS gọi insert() sẽ:',o:['Thành công','Bị SecurityException','Bị bỏ qua im lặng','Tự được cấp WRITE'],a:1,e:'insert/update/delete cần writePermission; query cần readPermission.'},
 {q:'<path-permission> cho một URI yêu cầu GLOBAL_SEARCH. App chỉ có GLOBAL_SEARCH (không có READ_CONTACTS) đọc URI đó sẽ:',o:['Bị từ chối','Được phép, vì quyền theo URI ưu tiên cao hơn quyền cấp provider','Chỉ được ghi','Phải xin cả hai quyền'],a:1,e:'Per-URI permission override quyền đọc cấp provider.'},
 {q:'Email app muốn cho app xem ảnh xem đúng 1 tệp đính kèm mà không cấp quyền đọc toàn bộ attachment. Cách tốt nhất?',o:['Đặt provider là public không quyền','Gắn FLAG_GRANT_READ_URI_PERMISSION vào intent ACTION_VIEW','Chia sẻ UID','Dùng quyền signature'],a:1,e:'Cấp quyền tạm theo URI, tự thu hồi khi task kết thúc.'},
 {q:'Pending intent cho phép app nhận hành động với danh tính nào?',o:['Của chính app nhận','Của app đã tạo pending intent','Của root','Của người dùng'],a:1,e:'ActivityManagerService lưu danh tính người tạo trong PendingIntentRecord và nhập vai khi kích hoạt.'},
 {q:'Vì sao nên dùng intent explicit khi tạo pending intent trao cho app khác?',o:['Để tiết kiệm bộ nhớ','Để chắc chắn hành động tới đúng thành phần, vì app nhận hưởng đúng quyền của bạn','Để bỏ kiểm tra quyền','Vì implicit intent không dùng được'],a:1,e:'Intent chung chung có thể bị chuyển tới thành phần ngoài ý muốn với danh tính/quyền của bạn.'}
],

order: [
 {id:'o-zyg',title:'Quy trình zygote “chuyên biệt hóa” tiến trình app',intro:'Sắp xếp các bước đúng thứ tự thực hiện trong zygote.',
  items:['fork() từ tiến trình zygote','setgroups(): đặt các GID phụ (từ quyền)','setrlimit(): đặt giới hạn tài nguyên','setresgid() rồi setresuid(): đặt GID/UID của app','capset(): đặt capabilities','Đặt scheduling policy và SELinux context','Chạy main() của lớp Java của app'],
  explain:'Phải còn root mới đổi được groups/rlimit nên đổi UID đứng gần cuối; sau đó không thể trở lại root.'},
 {id:'o-chk',title:'Quy trình checkPermission() của Context',intro:'Sắp xếp các bước kiểm tra theo thứ tự hệ thống thực hiện.',
  items:['Người gọi là root hoặc system? → cấp ngay','Quyền do chính app người gọi khai báo? → cấp','Thành phần đích có private (không exported)? → từ chối','Hỏi PackageManagerService: UID có quyền trong tập đã cấp?','Không có → kiểm tra &lt;assign-permission&gt;','Cuối cùng trả PERMISSION_GRANTED hoặc PERMISSION_DENIED'],
  explain:'Từ trường hợp ngoại lệ rẻ nhất tới tra cứu package manager.'},
 {id:'o-net',title:'Từ manifest tới việc mở được socket mạng',intro:'Xếp chuỗi sự kiện đúng thứ tự thời gian.',
  items:['App khai báo &lt;uses-permission INTERNET&gt; trong manifest','Lúc cài, package manager cấp quyền (mức normal)','Package manager tra platform.xml → thêm GID inet vào GID phụ','Khởi động app: zygote fork() rồi setgroups() với GID inet','App gọi socket(); kernel kiểm tra nhóm inet','Socket được tạo thành công'],
  explain:'Manifest → cài đặt → platform.xml → zygote → kernel.'}
],

classify: [
 {id:'c-level',title:'Protection level nào?',intro:'Bấm mỗi quyền/tình huống, rồi bấm mức bảo vệ tương ứng.',buckets:['normal','dangerous','signature','signatureOrSystem'],
  items:[
   {t:'ACCESS_NETWORK_STATE',b:0},{t:'READ_SMS',b:1},{t:'NET_ADMIN (cần platform key)',b:2},
   {t:'CAMERA',b:1},{t:'Cấp cho app trong /system/priv-app/ hoặc cùng khóa',b:3},
   {t:'Tự động cấp, không hỏi',b:0},{t:'Cần cùng khóa ký với bên khai báo',b:2},{t:'Hiện hộp thoại xác nhận lúc cài',b:1}],
  explain:'normal – tự động · dangerous – hỏi · signature – cùng khóa · signatureOrSystem – cùng khóa hoặc system.'},
 {id:'c-enf',title:'Kiểm tra quyền xảy ra ở tầng nào?',intro:'Mỗi cơ chế thuộc kernel, native daemon hay framework?',buckets:['Kernel','Native daemon','Framework (Java)'],
  items:[
   {t:'Nhóm inet để tạo socket mạng',b:0},{t:'SO_PEERCRED trong vold',b:1},{t:'enforceCallingPermission() trong BatteryStatsService',b:2},
   {t:'Quyền rw- của tệp thiết bị theo UID/GID',b:0},{t:'Mode 0660 root:mount của socket /dev/socket/vold',b:1},
   {t:'ActivityManagerService kiểm tra quyền của Activity đích',b:2},{t:'PackageManagerService.checkUidPermission()',b:2}],
  explain:'Kernel: UID/GID + paranoid network. Daemon: quyền socket + peer credentials. Framework: Package Manager + SecurityException.'},
 {id:'c-comp',title:'Khi thiếu quyền, chuyện gì xảy ra?',intro:'Phân biệt thành phần ném SecurityException với thành phần bị bỏ qua im lặng.',buckets:['Ném SecurityException','Bị bỏ qua im lặng'],
  items:[
   {t:'startActivity() tới activity có permission',b:0},{t:'Broadcast tới receiver thiếu quyền',b:1},
   {t:'bindService() tới service có permission',b:0},{t:'ContentResolver.query() thiếu readPermission',b:0},
   {t:'sendBroadcast(intent, receiverPermission) – receiver không có quyền',b:1}],
  explain:'Chỉ broadcast là bất đồng bộ nên thiếu quyền chỉ bị bỏ qua.'}
],

cheat: [
 {title:'🚦 4 mức bảo vệ',html:'<div class="mnemo">Mở · Hỏi · Cùng thẻ · Thẻ hoặc nội bộ</div><ul><li><b>normal</b>: tự cấp</li><li><b>dangerous</b>: hộp thoại xác nhận</li><li><b>signature</b>: cùng khóa ký</li><li><b>signatureOrSystem</b>: cùng khóa HOẶC /system/priv-app (4.4+)</li><li>Cờ: system (0x10), development (0x20)</li></ul>'},
 {title:'🔗 Quyền → GID',html:'<ul><li><code>platform.xml</code>: permission → GID</li><li>INTERNET → inet 3003</li><li>WRITE_EXT_STORAGE → sdcard_r 1028 + sdcard_rw 1015</li><li>net_raw 3004 / net_admin 3005 → capability</li><li>GID phụ nằm cuối <code>packages.list</code></li></ul>'},
 {title:'🧬 Zygote',html:'<div class="mnemo">Fork → Groups → Limits → gid/uid → Caps → SELinux</div><ul><li>init.rc khởi động zygote, nghe socket <code>zygote</code></li><li>Fork từ zygote (PPID = 181 trong ví dụ)</li><li>Copy-on-write chia sẻ framework</li><li>Đặt uid xong không về root được</li></ul>'},
 {title:'🧱 3 tầng thực thi',html:'<ul><li><b>Kernel</b>: UID/GID, paranoid network (EACCES)</li><li><b>Native daemon</b>: quyền socket + SO_PEERCRED</li><li><b>Framework</b>: tĩnh (manifest) + động (check/enforce)</li></ul>'},
 {title:'📬 Quyền theo thành phần',html:'<ul><li>Activity/Service: <code>permission</code>; SecurityException</li><li>Provider: permission, read/write, path-permission, grantUriPermission</li><li>Broadcast: kiểm lúc phân phối, <b>không</b> exception; 2 chiều</li><li>Protected broadcast: chỉ system/phone/shell/bluetooth/root</li><li>Sticky: BROADCAST_STICKY</li></ul>'},
 {title:'🤝 Shared UID',html:'<div class="mnemo">System · Phone · Bluetooth · Log · NFC</div><ul><li>1000 · 1001 · 1002 · 1007 · 1027</li><li>Cùng khóa ký; quyền = <b>hợp</b></li><li>Không thêm retroactively → UID_CHANGED</li><li>Khác cert → SHARED_USER_INCOMPATIBLE</li></ul>'},
 {title:'🛠 Tùy chỉnh & public',html:'<ul><li>Cần giới hạn người được cấp → <b>signature</b></li><li>Cài app định nghĩa quyền <b>trước</b></li><li>permission-tree cho quyền động</li><li>intent-filter ⇒ exported ngầm; <code>exported="false"</code> để private</li><li>Provider mặc định private từ API 17</li></ul>'},
 {title:'⏳ Pending intent',html:'<ul><li>Intent + hành động + danh tính người tạo</li><li>Dùng cho alarm & notification</li><li>ActivityManagerService lưu <code>PendingIntentRecord</code></li><li>Nhận = có quyền của bạn → dùng intent <b>explicit</b></li></ul>'}
]
};
