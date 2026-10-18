CH[1] = {
sections: [

{id:'arch', icon:'🏗', title:'Kiến trúc Android: 6 tầng từ dưới lên', html:`
<p>Để hiểu bảo mật Android, trước hết phải biết hệ điều hành này được xếp từ những tầng nào. Hãy <b>bấm vào từng tầng</b> bên dưới để xem mỗi tầng làm gì.</p>
<div class="stack-explorer">
  <div class="layers">
    <button class="layer" data-c="1" data-title="Tầng 6 – Ứng dụng (Apps)" data-desc="<p>Là chương trình người dùng tương tác trực tiếp. Chia hai loại:</p><ul><li><b>App hệ thống</b>: nằm trong ảnh hệ thống chỉ-đọc (<code>/system</code>), không gỡ được, được cấp nhiều đặc quyền hơn.</li><li><b>App người dùng cài</b>: nằm ở phân vùng đọc-ghi <code>/data</code>, gỡ được, mỗi app một sandbox riêng.</li></ul>"><span>6 · Ứng dụng</span><small>Settings, Phone, Launcher…</small></button>
    <button class="layer" data-c="2" data-title="Tầng 5 – Android Framework" data-desc="<p>Các thư viện Java <b>không thuộc</b> Java chuẩn, nằm chủ yếu trong gói <code>android.*</code>: lớp cơ sở cho activity/service/provider, widget giao diện, truy cập CSDL/tệp…</p><p>Chức năng hệ điều hành thật ra do <b>system service</b> làm, nhưng app không gọi trực tiếp mà gọi qua các lớp “mặt tiền” gọi là <b>manager</b> (vd <code>BluetoothManager</code> ↔ <code>BluetoothManagerService</code>).</p>"><span>5 · Framework</span><small>android.*</small></button>
    <button class="layer" data-c="3" data-title="Tầng 4 – System Services" data-desc="<p>“Bộ não” của Android: <b>79 dịch vụ</b> (tính đến 4.4) như Activity Manager, Package Manager, Window Manager, telephony, mạng… Phần lớn viết bằng Java, một số lõi viết bằng native.</p><p>Mỗi dịch vụ có một <b>giao diện từ xa</b> để các tiến trình khác gọi qua <b>Binder</b> → biến Android thành một “hệ điều hành hướng đối tượng” chạy trên Linux.</p>"><span>4 · System Services</span><small>Activity/Package/Window Mgr…</small></button>
    <button class="layer" data-c="4" data-title="Tầng 3 – Dalvik VM + Thư viện Java" data-desc="<p><b>Dalvik</b> là máy ảo chạy phần lớn Android. Nó đọc bytecode <code>.dex</code> (không đọc <code>.class</code>). Thư viện Java <code>java.*</code>, <code>javax.*</code> gốc từ <b>Apache Harmony</b>, nối với code native qua <b>JNI</b>.</p>"><span>3 · Dalvik + Java libs</span><small>java.*, javax.*</small></button>
    <button class="layer" data-c="5" data-title="Tầng 2 – Native userspace" data-desc="<p>Gồm <code>init</code> (tiến trình đầu tiên, sinh ra mọi tiến trình khác), các <b>native daemon</b>, vài trăm thư viện native và <b>HAL</b> (lớp trừu tượng phần cứng).</p><p>Giống Linux về hình thức, nhưng <code>init</code> và script khởi động của Android được viết lại từ đầu, khác bản Linux gốc.</p>"><span>2 · Native userspace</span><small>init, daemon, libs, HAL</small></button>
    <button class="layer" data-c="6" data-title="Tầng 1 – Linux Kernel" data-desc="<p>Nền móng: driver phần cứng, mạng, hệ tệp, quản lý tiến trình. Kernel Android có thêm các tính năng <b>“Androidisms”</b>: low memory killer, wakelocks, ashmem, alarms, <b>paranoid networking</b> và <b>Binder</b>.</p><p>Với bảo mật, 2 cái quan trọng nhất là <b>Binder</b> (IPC + danh tính người gọi) và <b>paranoid networking</b> (chỉ app có quyền mới tạo được socket mạng).</p>"><span>1 · Linux Kernel</span><small>Binder, paranoid networking…</small></button>
  </div>
  <div class="info-panel"><p class="hint">👈 Bấm một tầng để xem chi tiết.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ thứ tự (dưới → trên)</b>
<div class="mnemo">Kernel → Native → Dalvik → Services → Framework → Apps</div>
Câu thần chú: <i>“Khi Nào Dậy, Sẽ Fix App”</i> (K-N-D-S-F-A).</div>
`},

{id:'dalvik', icon:'⚙️', title:'Dalvik so với JVM', html:`
<p>Phần lớn Android viết bằng Java, nhưng không chạy trên JVM của Oracle. Dalvik được thiết kế cho thiết bị di động nên:</p>
<table>
<tr><th></th><th>JVM (Oracle)</th><th>Dalvik</th></tr>
<tr><td>Kiến trúc</td><td>Dựa trên <b>stack</b></td><td>Dựa trên <b>thanh ghi (register)</b></td></tr>
<tr><td>Định dạng đầu vào</td><td><code>.class</code></td><td><code>.dex</code> (Dalvik Executable)</td></tr>
<tr><td>Số lệnh</td><td>Nhiều hơn</td><td>Ít hơn (nhưng mỗi lệnh dài hơn)</td></tr>
</table>
<p>Ví dụ hàm cộng hai số nguyên:</p>
<div class="compare">
<pre><span class="c">// JVM – 4 lệnh</span>
iload_0
iload_1
iadd
ireturn</pre>
<pre><span class="c">// Dalvik – 2 lệnh</span>
add-int v0, p0, p1
return v0</pre>
</div>
<div class="analogy">JVM giống bạn phải <b>lấy từng món bỏ vào giỏ</b> (đẩy lên stack) rồi mới tính tiền. Dalvik cho bạn <b>tính thẳng trên hai ô nhớ</b> (thanh ghi) rồi trả kết quả → ít bước hơn.</div>
<h3>Đường đi của file .dex</h3>
<div class="flow"><div class="node">Java source</div><span class="arr">→</span><div class="node">.class</div><span class="arr">→</span><div class="node hl">.dex</div><span class="arr">→</span><div class="node">đóng trong JAR hoặc APK</div><span class="arr">→</span><div class="node hl">.odex (tối ưu theo thiết bị)</div></div>
<p>Trên máy thật, thư viện hệ thống và app cài sẵn thường được chuyển sang <b>.odex</b> – định dạng phụ thuộc thiết bị – để chạy nhanh hơn. App người dùng cũng được tối ưu như vậy lúc cài.</p>
<div class="callout c-modern"><b>Android hiện đại</b>Từ Android 5.0, <b>ART</b> thay hoàn toàn Dalvik (biên dịch trước – AOT). Sách mới chỉ nhắc ART là runtime “thử nghiệm” ở 4.4. Mô hình “fork từ zygote” (chương 2) vẫn giữ nguyên.</div>
`},

{id:'ipc', icon:'📞', title:'IPC và Binder – “tổng đài” của Android', html:`
<p>Trong Linux, mỗi tiến trình có <b>không gian bộ nhớ riêng</b> (process isolation) – tốt cho ổn định và bảo mật. Nhưng muốn cung cấp dịch vụ cho tiến trình khác thì cần một cơ chế <b>IPC</b> (Inter-Process Communication).</p>
<p>Android dùng một phần các cơ chế cũ (local socket), bỏ hẳn System V IPC (semaphore, shared memory, message queue) và tạo ra <b>Binder</b> – dựa trên ý tưởng OpenBinder.</p>
<div class="analogy">Binder giống một <b>tổng đài viên</b> ngồi trong kernel. Mọi cuộc gọi giữa hai tiến trình đều phải qua tổng đài; tổng đài tự <b>ghi số máy người gọi</b> vào cuộc gọi nên không ai giả mạo được.</div>

<svg class="dia" viewBox="0 0 640 250" role="img" aria-label="Sơ đồ Binder IPC">
  <rect class="box" x="20" y="20" width="250" height="140" rx="12"/><text x="145" y="42" text-anchor="middle" font-weight="700">Tiến trình A (Client)</text>
  <rect class="blu" x="50" y="60" width="190" height="60" rx="8"/><text x="145" y="85" text-anchor="middle">Binder Proxy</text><text x="145" y="105" text-anchor="middle" class="sm">transact(code, data)</text>
  <rect class="box" x="370" y="20" width="250" height="140" rx="12"/><text x="495" y="42" text-anchor="middle" font-weight="700">Tiến trình B (Server)</text>
  <rect class="acc" x="400" y="60" width="190" height="60" rx="8"/><text x="495" y="85" text-anchor="middle">Binder object</text><text x="495" y="105" text-anchor="middle" class="sm">onTransact(code) { switch… }</text>
  <rect class="amb" x="20" y="185" width="600" height="50" rx="10"/><text x="320" y="208" text-anchor="middle" font-weight="700">Linux Kernel – Binder driver (/dev/binder)</text><text x="320" y="225" text-anchor="middle" class="sm">gắn PID + EUID của người gọi · copy dữ liệu sang bộ nhớ B</text>
  <path class="ln" d="M145 120 V185 M495 185 V120" marker-end="url(#a)"/>
  <path class="ln" d="M240 90 H400" stroke-dasharray="6 5"/><text x="320" y="82" text-anchor="middle" class="sm">gọi logic</text>
</svg>

<h3>Binder hoạt động thế nào?</h3>
<ul>
<li>Mọi lời gọi đi qua thiết bị <code>/dev/binder</code> bằng <b>một lệnh <code>ioctl()</code></b>, trao đổi cấu trúc <code>binder_write_read</code>.</li>
<li>Driver quản lý một vùng nhớ trong mỗi tiến trình: vùng này <b>chỉ-đọc</b> với tiến trình, chỉ kernel mới được ghi. Khi gửi tin, kernel cấp chỗ trong bộ nhớ bên nhận và <b>copy thẳng</b> một lần.</li>
<li>Bên trên Binder là các khái niệm quen thuộc: <b>Intent</b>, <b>Messenger</b>, <b>ContentProvider</b>. Còn <b>AIDL</b> tự sinh <i>stub</i> và <i>proxy</i> để gọi từ xa như gọi đối tượng Java cục bộ (có đóng gói/giải gói tham số – marshalling).</li>
<li>Binder tự nó “không có kiểu”, nên proxy AIDL thêm <b>tên interface</b> vào mỗi giao dịch và stub kiểm tra lại → an toàn kiểu.</li>
</ul>
<div class="callout c-info"><b>So với COM / CORBA</b>Binder cùng họ với COM (Windows) và CORBA (Unix) nhưng chỉ chạy <b>trên một thiết bị</b>, không có RPC qua mạng.</div>
`},

{id:'binder-sec', icon:'🔐', title:'Bảo mật của Binder: danh tính & token', html:`
<h3>1. Danh tính người gọi không thể giả</h3>
<p>Mỗi <b>giao dịch Binder</b> gồm: tham chiếu đối tượng đích, ID của phương thức, và buffer dữ liệu. <b>Kernel tự động thêm PID và EUID</b> của tiến trình gọi vào giao dịch. Vì do kernel điền, tiến trình gọi <b>không thể nói dối</b> mình là ai → không leo thang đặc quyền được.</p>
<p>Bên nhận lấy thông tin này qua <code>Binder.getCallingUid()</code> và <code>Binder.getCallingPid()</code>.</p>
<div class="callout c-warn"><b>Lưu ý</b>Một EUID có thể ứng với nhiều app nếu họ dùng chung UID (shared user ID). Không sao, vì các app đó vốn được cấp cùng bộ quyền.</div>
<pre><span class="c">// Ví dụ: chỉ system (UID 1000) mới được bật Bluetooth im lặng</span>
public boolean enable() {
  if ((Binder.<span class="h">getCallingUid()</span> != Process.SYSTEM_UID) &amp;&amp;
      (!checkIfCallerIsForegroundUser())) {
    Log.w(TAG,"enable(): not allowed for non-active and non-system user");
    return false;
  }
  ...
}</pre>

<h3>2. Binder object = thẻ khả năng (capability)</h3>
<p>Mỗi đối tượng Binder có <b>danh tính duy nhất xuyên tiến trình</b>. Tiến trình A tạo object rồi đưa cho B, B đưa C – cả ba gọi vào <i>cùng một</i> object. A tham chiếu trực tiếp, còn B và C chỉ nhận một <b>handle</b>; kernel giữ bảng ánh xạ.</p>
<p>Vì kernel quản lý, ứng dụng <b>không thể tự tạo bản sao hay đoán ra</b> một tham chiếu – chỉ có được nếu ai đó trao cho qua IPC. Nên Binder object là thứ <b>duy nhất, không thể giả mạo, có thể chuyển giao</b> → dùng làm “chìa khóa”.</p>
<div class="analogy"><b>Capability-based security</b> giống <b>thẻ từ vào phòng</b>: ai cầm thẻ là vào được, không cần tra danh sách tên (ACL) ở cửa. Ngược lại, kiểu ACL giống bảo vệ cầm danh sách và hỏi “bạn là ai?”.</div>

<h3>3. Binder token</h3>
<p>Khi một Binder object được dùng như capability thì gọi là <b>Binder token</b>. Có hai kiểu dùng:</p>
<div class="cards">
 <div class="mini g"><span class="em">🧰</span><h4>Token = dịch vụ</h4><p>Có tham chiếu là gọi được mọi action. Muốn kiểm soát chi tiết, service phải tự kiểm tra PID/EUID. Mẫu thường gặp: cho phép <code>system</code> (1000) và <code>root</code> (0), các tiến trình khác phải qua kiểm tra quyền thêm.</p></div>
 <div class="mini b"><span class="em">🎫</span><h4>Token = vé xác thực</h4><p>Hai bên cùng giữ một object; server dùng nó để xác thực client giống <b>session cookie</b> của web. Ví dụ công khai: <b>window token</b> – app chỉ có token của cửa sổ mình, không thể thêm/xóa cửa sổ của app khác.</p></div>
</div>
<p>Vậy quyền truy cập một Binder object được kiểm soát ở <b>hai lớp</b>: (1) ai được lấy tham chiếu, (2) kiểm tra danh tính trước khi thực hiện action.</p>

<h3>4. Tìm dịch vụ qua servicemanager</h3>
<p>Không thể phát tham chiếu mọi dịch vụ cho mọi tiến trình, nên có một <b>context manager</b> duy nhất: daemon <code>servicemanager</code>, khởi động rất sớm. Hãy xem quá trình:</p>
<div class="stepper" data-stepper>
 <div class="step"><b>Dịch vụ đăng ký</b>Khi khởi động, dịch vụ gửi <i>tên + tham chiếu Binder</i> cho servicemanager. Chỉ một tập nhỏ tiến trình hệ thống trong danh sách trắng mới được đăng ký (vd chỉ UID 1002 <code>AID_BLUETOOTH</code> đăng ký được dịch vụ <code>bluetooth</code>).</div>
 <div class="step"><b>Client hỏi theo tên</b>Bất kỳ client nào cũng hỏi servicemanager “cho tôi dịch vụ <code>phone</code>”, nhận lại một <b>handle</b>.</div>
 <div class="step"><b>Client gọi transact()</b>Giao dịch đi qua <code>/dev/binder</code>; kernel gắn PID + EUID của client.</div>
 <div class="step"><b>Dịch vụ tự kiểm tra quyền</b>Có tham chiếu <u>chưa chắc</u> được dùng mọi tính năng: dịch vụ đọc UID người gọi, hỏi package manager quyền đã cấp, nếu thiếu → ném <code>SecurityException</code>.</div>
</div>
<details><summary>Xem lệnh <code>service list</code> (Android 4.4)</summary>
<pre>$ service list
Found 79 services:
0  sip: [android.net.sip.ISipService]
1  phone: [com.android.internal.telephony.ITelephony]
2  iphonesubinfo: [com.android.internal.telephony.IPhoneSubInfo]
3  simphonebook: [com.android.internal.telephony.IIccPhoneBook]
4  isms: [com.android.internal.telephony.ISms]
5  nfc: [android.nfc.INfcAdapter]
...</pre></details>
<h3>5. Hai tính năng Binder khác (không liên quan bảo mật)</h3>
<ul><li><b>Reference counting</b>: object tự được giải phóng khi không còn ai tham chiếu.</li><li><b>Death notification</b> (<code>linkToDeath()</code>): app được báo khi tiến trình giữ object bị kernel kill để dọn dẹp.</li></ul>
<div class="selfcheck"><b>🧪 Tự kiểm tra:</b> Vì sao tiến trình độc hại không thể “đóng giả” UID 1000 khi gọi một system service?<br><button class="btn ghost" style="margin-top:6px">Xem đáp án</button><div class="ans">Vì PID/EUID trong giao dịch Binder do <b>kernel</b> điền, không phải do tiến trình gọi tự khai. Mã người dùng không can thiệp được.</div></div>
`},

{id:'components', icon:'🧩', title:'4 thành phần của một ứng dụng', html:`
<p>Khác chương trình truyền thống chỉ có một cửa vào (<code>main</code>), app Android gồm nhiều <b>thành phần lỏng lẻo</b>, mỗi thành phần có thể có nhiều <b>điểm vào</b> – do người dùng bấm, do app khác gọi, hoặc do sự kiện hệ thống kích hoạt. Tất cả được khai báo trong <code>AndroidManifest.xml</code>.</p>
<div class="cards">
 <div class="mini g"><span class="em">📱</span><h4>Activity</h4><p>Một <b>màn hình</b> có giao diện. App có nhiều activity, mỗi cái có thể được khởi chạy độc lập (kể cả từ app khác, nếu cho phép).</p></div>
 <div class="mini b"><span class="em">⚙️</span><h4>Service</h4><p>Chạy <b>nền</b>, không giao diện (tải file, phát nhạc). Có thể mở giao diện từ xa bằng AIDL. Khác system service: service của app chạy theo nhu cầu.</p></div>
 <div class="mini a"><span class="em">🗄</span><h4>Content Provider</h4><p><b>Cửa sổ dữ liệu</b> của app (CSDL/tệp), dùng IPC để chia sẻ với app khác, kiểm soát chi tiết phần dữ liệu nào được xem.</p></div>
 <div class="mini v"><span class="em">📢</span><h4>Broadcast Receiver</h4><p>Nghe <b>sự kiện toàn hệ thống</b> (đổi mạng, đồng bộ xong…) do hệ thống hoặc app khác phát ra.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Activity = Mặt · Service = Nền · Provider = Kho · Receiver = Tai</div></div>
<h3>Manifest & tên gói</h3>
<ul>
<li><code>AndroidManifest.xml</code> được biên dịch sang <b>XML nhị phân</b> (nhỏ hơn, parse nhanh) trước khi đóng vào APK, và được phân tích <b>lúc cài đặt</b> để đăng ký gói và thành phần.</li>
<li><b>Tên gói</b> (vd <code>com.google.email</code>, dạng tên miền ngược) định danh duy nhất app trong hệ thống.</li>
<li>Mọi app phải được <b>ký</b> bằng khóa của nhà phát triển → app khác không thể “thay thế” app của bạn chỉ bằng cách trùng tên gói (trừ khi ký cùng khóa → khi đó là bản cập nhật).</li>
</ul>
`},

{id:'sandbox', icon:'📦', title:'Sandbox: mỗi app một người dùng Linux', html:`
<p>Linux là hệ điều hành đa người dùng: người này không đọc được tệp người kia, và mỗi tiến trình chạy với <b>UID/GID</b> của người khởi động nó. Android tận dụng điều này nhưng <b>dùng khác</b>:</p>
<div class="compare">
 <div class="mini"><h4>Linux truyền thống</h4><p>UID đại diện cho <b>người dùng thật</b> hoặc <b>daemon</b> hệ thống.</p></div>
 <div class="mini g"><h4>Android</h4><p>Điện thoại vốn là thiết bị cá nhân (1 người), nên UID đại diện cho <b>ứng dụng</b>. Đây là gốc rễ của <b>application sandbox</b>.</p></div>
</div>
<div class="analogy">Mỗi app là <b>một căn phòng khách sạn</b> có khóa riêng (UID riêng) và tủ đồ riêng (thư mục dữ liệu riêng). Không có chìa chủ thì không mở được phòng người khác.</div>

<h3>Cách sandbox hoạt động</h3>
<ul>
<li>Khi cài, Android cấp cho app một <b>UID duy nhất</b> (app ID) và chạy app trong tiến trình riêng với UID đó.</li>
<li>App có <b>thư mục dữ liệu riêng</b> chỉ nó đọc/ghi được → cô lập ở <b>mức tiến trình</b> và <b>mức tệp</b>.</li>
<li>Là sandbox <b>cấp kernel</b>: áp dụng cho mọi app, dù chạy bằng VM hay code native.</li>
</ul>
<h3>Bảng UID cần nhớ</h3>
<table>
<tr><th>Khoảng / giá trị</th><th>Ý nghĩa</th></tr>
<tr><td><code>0</code></td><td>root (rất ít daemon chạy bằng root)</td></tr>
<tr><td><code>1000</code></td><td><code>AID_SYSTEM</code> – user system, đặc quyền đặc biệt (nhưng vẫn giới hạn)</td></tr>
<tr><td><code>1000+</code></td><td>UID của các dịch vụ hệ thống, định nghĩa cố định trong <code>android_filesystem_config.h</code> (không có <code>/etc/passwd</code>)</td></tr>
<tr><td><code>10000+</code></td><td><code>AID_APP</code> – UID tự cấp cho app. Username dạng <code>app_XXX</code> hoặc <code>uY_aXXX</code></td></tr>
</table>
<p>Ví dụ: UID <b>10037</b> ↔ username <b>u0_a37</b> (user 0, app offset 37) → app email của Google.</p>
<pre>$ ls -l /data/data/com.google.android.email
drwxrwx--x  <span class="h">u0_a37 u0_a37</span>  databases
drwxrwx--x  u0_a37 u0_a37  files
drwxrwx--x  u0_a37 u0_a37  cache</pre>
<p class="cap">Thư mục dữ liệu mang tên gói, thuộc về “người dùng” u0_a37.</p>
<div class="callout c-warn"><b>MODE_WORLD_READABLE / WRITEABLE</b>App có thể cố ý mở tệp cho người khác (đặt bit <code>S_IROTH</code>/<code>S_IWOTH</code>) nhưng bị khuyến cáo không dùng và <b>deprecated từ Android 4.2</b>.</div>

<h3>Nơi lưu UID: packages.list</h3>
<pre>com.google.android.email <span class="h">10037</span> 0 /data/data/com.google.android.email default <span class="h">3003,1028,1015</span></pre>
<table>
<tr><th>Trường</th><th>Ý nghĩa</th></tr>
<tr><td>1</td><td>Tên gói</td></tr><tr><td>2</td><td>UID được cấp</td></tr><tr><td>3</td><td>Cờ debuggable (1 = debug được)</td></tr><tr><td>4</td><td>Thư mục dữ liệu</td></tr><tr><td>5</td><td>nhãn <b>seinfo</b> (cho SELinux)</td></tr><tr><td>6</td><td>Danh sách <b>GID phụ</b> (sinh ra từ các quyền đã cấp)</td></tr>
</table>
<p>Nguồn gốc chính xác là <code>/data/system/packages.xml</code>; <code>packages.list</code> là bản ghi dễ đọc.</p>

<h3>Shared User ID – nhiều app, một UID</h3>
<p>Các app <b>ký cùng khóa</b> có thể xin chạy chung UID (và cả chung tiến trình), chia sẻ tệp. App hệ thống dùng rất nhiều (vd <code>systemui</code> và <code>keyguard</code> chung UID 10012). Với app thường thì <b>không khuyến khích</b>, và vì đổi UID làm mất dữ liệu cũ nên <b>không thể thêm shared UID vào bản cập nhật</b> – phải thiết kế từ phiên bản đầu tiên.</p>
`},

{id:'perm-sign', icon:'🔑', title:'Quyền, IPC và chữ ký mã', html:`
<h3>Permission (quyền)</h3>
<p>Sandbox mặc định chỉ cho app dùng tệp riêng và tài nguyên công khai. Muốn làm được nhiều hơn (camera, Internet, danh bạ…), app <b>xin quyền</b> trong manifest; hệ thống kiểm tra lúc cài và quyết định có cấp không. (Chi tiết ở chương 2.)</p>
<ul>
<li>Quyền có thể kiểm soát: phần cứng, Internet, dữ liệu, dịch vụ hệ điều hành.</li>
<li>Với tính năng nhạy cảm (khóa riêng, tài khoản), còn cần <b>người dùng xác nhận từng lần</b> dù app đã có quyền (chương 7, 8).</li>
<li>App bên thứ ba có thể tự định nghĩa <b>quyền tùy chỉnh</b> với <b>mức bảo vệ</b> để giới hạn truy cập cho app cùng tác giả.</li>
</ul>
<p>Thực thi ở nhiều tầng:</p>
<div class="flow">
 <div class="node">Tài nguyên cấp thấp (tệp, thiết bị)</div><span class="arr">→</span><div class="node hl">Kernel kiểm tra UID/GID</div>
</div>
<div class="flow">
 <div class="node">Thành phần Android cấp cao</div><span class="arr">→</span><div class="node hl">Android OS và/hoặc chính thành phần kiểm tra</div>
</div>

<h3>IPC & kiểm tra quyền</h3>
<p>Binder đảm bảo UID/PID người gọi không giả được; nhiều dịch vụ dựa vào đó để kiểm soát động. Với quyền gắn lên <b>cả thành phần</b> (khai báo trong manifest), hệ thống tự làm: lấy UID người gọi từ Binder → tra package manager ra gói và danh sách quyền → nếu có quyền cần thiết thì cho qua, nếu không → <code>SecurityException</code>.</p>

<h3>Ký mã & platform key</h3>
<p>Mọi APK (kể cả app hệ thống) phải được ký. APK là mở rộng của JAR nên dùng cách ký của JAR. Chữ ký có hai công dụng, đều dựa trên <b>so sánh chứng chỉ ký</b>:</p>
<div class="cards">
 <div class="mini g"><h4>① Same-origin policy</h4><p>Bản cập nhật phải do <b>cùng tác giả</b> (cùng chứng chỉ) mới được thay bản cũ.</p></div>
 <div class="mini b"><h4>② Thiết lập tin cậy</h4><p>Hai app cùng khóa mới được chia sẻ UID hoặc được cấp quyền <code>signature</code> của nhau.</p></div>
</div>
<p>App hệ thống được ký bằng các <b>platform key</b>, do bên duy trì bản Android đó kiểm soát (nhà sản xuất, nhà mạng, Google cho Nexus, hoặc người dùng với bản tự build). Các thành phần ký chung platform key có thể chia sẻ tài nguyên và chạy chung tiến trình.</p>
`},

{id:'newer', icon:'🚀', title:'Bổ sung mới: đa người dùng, SELinux, cập nhật, verified boot', html:`
<h3>1. Hỗ trợ nhiều người dùng (từ Android 4.2)</h3>
<ul>
<li>Chỉ bật trên <b>tablet</b>; điện thoại đặt số người dùng tối đa = 1.</li>
<li>Mỗi người dùng có ID (bắt đầu từ 0) và thư mục hệ thống riêng <code>/data/system/users/&lt;userId&gt;/</code> (cài đặt, tài khoản, danh sách app).</li>
<li>Binary app dùng chung, nhưng mỗi người dùng có <b>bản sao thư mục dữ liệu riêng</b> và một <b>UID hiệu lực mới</b> = f(user ID, app ID) → cùng một app cài bởi 2 người vẫn có 2 sandbox khác nhau.</li>
<li>Người khởi tạo thiết bị đầu tiên là <b>device owner</b>: chỉ họ quản lý người dùng khác và làm việc quản trị toàn máy (vd factory reset).</li>
</ul>

<h3>2. SELinux – từ DAC sang MAC</h3>
<p>Mô hình cũ chỉ dựa UID/GID là <b>DAC</b> (discretionary access control – kiểm soát truy cập tùy ý): chủ sở hữu có thể “tùy ý” chia sẻ, kể cả chia sẻ nhầm → nhiều lỗ hổng Android bắt nguồn từ quyền tệp/socket quá rộng.</p>
<div class="compare">
 <div class="mini r"><h4>DAC (Linux mặc định)</h4><p>Có quyền với tài nguyên → <b>tự quyết</b> chuyển tiếp cho người khác (vd đặt tệp world-readable).</p></div>
 <div class="mini g"><h4>MAC (SELinux)</h4><p>Mọi truy cập phải khớp một <b>chính sách toàn hệ thống</b>; chỉ quản trị viên đổi được, người dùng không thể vượt qua.</p></div>
</div>
<ul>
<li>Từ <b>Android 4.3</b> tích hợp bản SELinux sửa đổi từ dự án <b>SEAndroid</b> (hỗ trợ cả Binder).</li>
<li>SELinux chia daemon hệ thống và app vào các <b>domain</b> bảo mật khác nhau, mỗi domain một chính sách.</li>
<li><b>Android 4.4</b>: chế độ <b>enforcing</b> nhưng chỉ áp dụng cho các daemon lõi; app vẫn ở <b>permissive</b> (vi phạm chỉ được ghi log).</li>
</ul>

<h3>3. Cập nhật hệ thống (OTA) & recovery</h3>
<ul>
<li>Cập nhật có thể qua mạng (OTA) hoặc đẩy từ PC bằng adb. Vì có thể phải sửa cả baseband, bootloader…, nên dùng một HĐH tối giản đặc biệt là <b>recovery</b> có toàn quyền phần cứng.</li>
<li>Gói OTA là file ZIP kèm chữ ký (đặt trong phần comment của ZIP) chứa script cho recovery. Máy thật chỉ chấp nhận bản ký bởi <b>nhà sản xuất</b>.</li>
<li>Trên Nexus, máy dev và một số máy khác, chủ máy có thể <b>mở khóa bootloader</b> để thay recovery/tắt kiểm tra chữ ký. Việc này thường kèm <b>xóa sạch dữ liệu</b> (để ảnh hệ thống lạ không đọc được dữ liệu cũ) và thường làm mất bảo hành. Đừng nhầm với <i>SIM-unlock</i>.</li>
</ul>

<h3>4. Verified boot với dm-verity (Android 4.4)</h3>
<p><b>dm-verity</b> kiểm tra toàn vẹn thiết bị khối bằng <b>cây băm</b>: lá chứa băm của từng khối dữ liệu, nút trong chứa băm của các nút con. Vì băm ở gốc phụ thuộc mọi nút khác nên <b>chỉ cần tin cậy root hash</b> là xác thực được toàn bộ. Hãy thử: <b>bấm vào một khối 💾</b> để “sửa lén” nó.</p>
<div class="merkle" data-merkle></div>
<ul>
<li>Xác minh bằng <b>khóa công khai RSA</b> trong partition boot. Mỗi khối được băm lúc đọc và so với cây; lệch → lỗi I/O “hệ tệp hỏng”.</li>
<li>Do kernel kiểm tra, nên phải xác thực được cả kernel: dùng khóa phần cứng “đốt” vào thiết bị để xác thực từng tầng bootloader, rồi tới kernel (chương 10).</li>
</ul>
<div class="callout c-modern"><b>Android hiện đại</b>SELinux ở chế độ enforcing cho <i>toàn bộ</i> (kể cả app) từ Android 5.0; verified boot nay là AVB (Android Verified Boot) và quyền xin lúc chạy (runtime permission) từ Android 6.0. Nguyên lý nền vẫn như sách mô tả.</div>
`}

],

cards: [
 {f:'Android được xây trên nền nào? Liệt kê 6 tầng dưới → trên.',b:'Linux Kernel → Native userspace (init, daemon, lib, HAL) → Dalvik + thư viện Java → System Services → Framework → Apps.'},
 {f:'“Androidisms” là gì? Kể 3 cái.',b:'Các tính năng thêm vào kernel Linux để hỗ trợ Android: low memory killer, wakelocks, ashmem, alarms, <b>paranoid networking</b>, <b>Binder</b>. Hai cái quan trọng nhất cho bảo mật: Binder và paranoid networking.'},
 {f:'Dalvik khác JVM ở đâu?',b:'Dalvik dựa trên <b>thanh ghi</b> (JVM dựa trên stack), đọc <b>.dex</b> (không phải .class), ít lệnh hơn. Có thể tối ưu thành .odex.'},
 {f:'Thư viện Java của Android bắt nguồn từ dự án nào? Gọi code native bằng gì?',b:'Apache Harmony; gọi code native qua <b>JNI</b> (Java Native Interface).'},
 {f:'System service là gì? Có bao nhiêu ở Android 4.4?',b:'Các dịch vụ lõi của OS (hiển thị, telephony, mạng…) – <b>79</b> dịch vụ ở 4.4. Mỗi dịch vụ có giao diện từ xa gọi qua Binder.'},
 {f:'“Manager” trong framework là gì?',b:'Lớp “mặt tiền” (facade) mà app gọi để dùng một system service. VD <code>BluetoothManager</code> ↔ <code>BluetoothManagerService</code>.'},
 {f:'IPC là gì? Android bỏ loại IPC nào của Unix?',b:'Inter-Process Communication – cơ chế để các tiến trình (vốn bị cô lập bộ nhớ) giao tiếp. Android <b>không hỗ trợ System V IPC</b> (semaphore, shared memory, message queue).'},
 {f:'Binder nói chuyện với userspace qua thiết bị nào, bằng lệnh gì?',b:'Thiết bị <code>/dev/binder</code>; chỉ một lệnh <code>ioctl()</code> trao đổi cấu trúc <code>binder_write_read</code>.'},
 {f:'Kernel đính kèm gì vào mỗi giao dịch Binder? Vì sao quan trọng?',b:'<b>PID và EUID</b> của người gọi. Do kernel điền nên không thể giả mạo → chống leo thang đặc quyền; nền tảng của mọi cơ chế permission.'},
 {f:'Lấy UID / PID người gọi trong service bằng hàm nào?',b:'<code>Binder.getCallingUid()</code> và <code>Binder.getCallingPid()</code>.'},
 {f:'AIDL dùng để làm gì?',b:'Định nghĩa giao diện dịch vụ để app gọi từ xa như đối tượng cục bộ. Tool <code>aidl</code> sinh <b>stub</b> và <b>proxy</b> lo marshalling tham số và kiểm tra kiểu (tên interface).'},
 {f:'Capability-based security là gì?',b:'Mô hình cấp quyền bằng cách đưa cho chương trình một <b>capability không thể giả mạo</b> gắn với tài nguyên + quyền truy cập. Có capability là đủ, không cần ACL.'},
 {f:'Vì sao Binder object dùng làm capability được?',b:'Vì danh tính duy nhất, do kernel quản lý (handle), không thể sao chép/đoán, chỉ có được khi ai đó trao qua IPC.'},
 {f:'Window token là gì?',b:'Binder token gắn với cửa sổ cấp cao nhất của một activity. App chỉ lấy được token của mình → app khác không thể thêm/xóa cửa sổ của bạn.'},
 {f:'servicemanager làm gì?',b:'Là <b>context manager</b> của Binder: dịch vụ đăng ký (tên + tham chiếu), client tra tên để lấy tham chiếu. Chỉ một số tiến trình hệ thống mới đăng ký được (vd UID 1002 cho <code>bluetooth</code>).'},
 {f:'Lệnh nào liệt kê các system service đã đăng ký?',b:'<code>service list</code>'},
 {f:'Death notification (link to death) dùng làm gì?',b:'Báo cho app biết khi tiến trình chứa Binder object bị kill để dọn dẹp. API: <code>linkToDeath()</code>/<code>unlinkToDeath()</code>.'},
 {f:'4 thành phần chính của app Android?',b:'<b>Activity</b> (màn hình), <b>Service</b> (nền), <b>Content Provider</b> (chia sẻ dữ liệu), <b>Broadcast Receiver</b> (nghe sự kiện hệ thống).'},
 {f:'Thành phần/điểm vào của app được khai báo ở đâu? Có gì đặc biệt?',b:'Trong <code>AndroidManifest.xml</code>, biên dịch thành XML nhị phân, parse khi cài đặt. Tên gói (dạng tên miền ngược) định danh duy nhất app.'},
 {f:'Sandbox của Android được tạo bằng cách nào?',b:'Mỗi app một <b>UID Linux riêng</b> + tiến trình riêng + thư mục dữ liệu riêng → cô lập ở mức tiến trình và tệp, ngay trong kernel.'},
 {f:'UID 1000, 10000 và 10037 lần lượt là gì?',b:'1000 = <code>system</code> (AID_SYSTEM); 10000 = bắt đầu dải UID cho app (AID_APP); 10037 → username <code>u0_a37</code> (offset 37 từ AID_APP).'},
 {f:'Sáu trường của một dòng packages.list?',b:'Tên gói · UID · cờ debuggable · thư mục dữ liệu · seinfo (SELinux) · danh sách GID phụ.'},
 {f:'Shared User ID là gì? Hạn chế?',b:'Nhiều app <b>cùng khóa ký</b> chạy chung UID (có thể chung tiến trình, chia sẻ tệp). Không thể thêm vào bản cập nhật sau → phải dùng từ bản đầu tiên.'},
 {f:'Chữ ký APK dùng cho hai mục đích nào?',b:'(1) Same-origin: cập nhật phải cùng tác giả. (2) Xây quan hệ tin cậy giữa các app (shared UID, quyền signature).'},
 {f:'Platform key là gì và ai kiểm soát?',b:'Khóa ký các app/phần hệ thống; do bên duy trì bản Android đó kiểm soát (OEM, nhà mạng, Google với Nexus, hoặc người tự build).'},
 {f:'DAC là gì? Vì sao dễ sinh lỗ hổng?',b:'Discretionary Access Control: chủ tài nguyên tùy ý chia sẻ (vd chmod world-readable). Cấp quá rộng do cố ý hoặc lỗi lập trình → nhiều lỗ hổng.'},
 {f:'MAC (SELinux) khác DAC thế nào?',b:'MAC buộc mọi truy cập khớp <b>chính sách toàn hệ thống</b> do quản trị đặt; người dùng không thể vượt qua hay tự mở rộng.'},
 {f:'SELinux ở Android 4.3 vs 4.4?',b:'4.3: tích hợp bản SEAndroid. 4.4: chế độ <b>enforcing</b> nhưng chỉ cho daemon lõi; app vẫn <b>permissive</b> (chỉ log).'},
 {f:'Recovery là gì? OTA update chứa gì?',b:'HĐH tối giản có toàn quyền phần cứng, dùng để cập nhật. OTA = ZIP có chữ ký (ở comment) kèm script cho recovery; máy thật chỉ nhận bản ký bởi nhà sản xuất.'},
 {f:'Mở khóa bootloader gây ra hệ quả gì?',b:'Cho phép thay recovery/system, tắt kiểm tra chữ ký; thường <b>xóa sạch dữ liệu</b> (factory reset) và mất bảo hành. Khác SIM-unlock.'},
 {f:'dm-verity hoạt động ra sao?',b:'Cây băm: lá = băm khối dữ liệu, nút trong = băm của con. Chỉ cần tin <b>root hash</b> (ký RSA trong boot partition). Khối bị sửa → băm lệch → lỗi I/O.'},
 {f:'Ai là device owner trên máy nhiều người dùng?',b:'Người đầu tiên khởi tạo thiết bị; chỉ họ quản lý người dùng khác và thao tác toàn máy (vd factory reset).'}
],

quiz: [
 {q:'Trong sơ đồ kiến trúc Android, tầng nằm ngay trên Linux Kernel là gì?',o:['System Services','Native userspace (init, daemon, thư viện native, HAL)','Dalvik VM','Ứng dụng'],a:1,e:'Ngay trên kernel là tầng native userspace gồm init, daemon, thư viện native và HAL. Dalvik và Java runtime nằm trên đó.'},
 {q:'Điểm khác biệt đúng giữa Dalvik và JVM của Oracle là gì?',o:['Dalvik dựa trên stack, JVM dựa trên thanh ghi','Dalvik đọc .dex và dựa trên thanh ghi; JVM đọc .class và dựa trên stack','Cả hai đều đọc .class','Dalvik chỉ chạy code native'],a:1,e:'Dalvik: register-based, đầu vào .dex. JVM: stack-based, đầu vào .class.'},
 {q:'Hai Androidism quan trọng nhất đối với bảo mật là:',o:['ashmem và alarms','wakelocks và low memory killer','Binder và paranoid networking','zygote và init'],a:2,e:'Binder (IPC + danh tính người gọi) và paranoid networking (giới hạn socket mạng theo quyền).'},
 {q:'Vì sao một app không thể giả mạo UID khi gọi một system service qua Binder?',o:['Vì app được ký bằng khóa riêng','Vì PID và EUID được kernel (Binder driver) điền vào giao dịch','Vì service luôn hỏi mật khẩu','Vì SELinux chặn'],a:1,e:'Binder driver tự thêm PID/EUID của tiến trình gọi vào dữ liệu giao dịch; tiến trình gọi không can thiệp được.'},
 {q:'Binder object có thể dùng làm capability vì:',o:['Nó được mã hóa bằng RSA','Nó có danh tính duy nhất do kernel quản lý, không thể tự tạo/đoán, chỉ nhận được qua IPC','Nó luôn công khai cho mọi tiến trình','Nó chỉ tồn tại trong tiến trình tạo ra nó'],a:1,e:'Tính duy nhất + không thể giả mạo + có thể chuyển giao là điều kiện của capability.'},
 {q:'servicemanager đóng vai trò gì?',o:['Cài đặt app','Context manager của Binder: lưu tham chiếu dịch vụ theo tên cho client tra cứu','Quản lý quyền của app','Khởi động zygote'],a:1,e:'Dịch vụ đăng ký tên + tham chiếu; client tra theo tên. Chỉ một số tiến trình hệ thống được đăng ký.'},
 {q:'Sau khi client lấy được tham chiếu một system service, điều nào đúng?',o:['Mặc định được dùng mọi tính năng của dịch vụ','Dịch vụ thường vẫn tự kiểm tra UID/quyền người gọi trước khi thực hiện action','Kernel tự kiểm tra mọi quyền','Phải ký lại app'],a:1,e:'Có tham chiếu ≠ được phép làm mọi thứ; hầu hết dịch vụ có thêm kiểm tra quyền.'},
 {q:'Thành phần nào của app chạy nền, không có giao diện, ví dụ phát nhạc?',o:['Activity','Service','Content Provider','Broadcast Receiver'],a:1,e:'Service dùng cho tác vụ dài chạy nền như tải file, phát nhạc.'},
 {q:'Một app muốn chia sẻ có kiểm soát một phần CSDL của mình cho app khác nên dùng thành phần nào?',o:['Activity','Broadcast Receiver','Content Provider','Window token'],a:2,e:'Content Provider cung cấp giao diện quản lý dữ liệu qua IPC với kiểm soát chi tiết.'},
 {q:'Android cách ly các ứng dụng chủ yếu bằng cách nào?',o:['Mỗi app chạy trong một máy ảo Java riêng','Mỗi app có UID Linux riêng, tiến trình riêng và thư mục dữ liệu riêng','Mỗi app có ổ đĩa riêng','Mã hóa toàn bộ bộ nhớ RAM'],a:1,e:'Application sandbox cấp kernel dựa trên UID duy nhất + thư mục dữ liệu riêng.'},
 {q:'UID 10037 tương ứng username nào theo quy ước của Android?',o:['app_1037','u0_a37','u10_a37','system37'],a:1,e:'UID = 10000 + 37 → user 0, app offset 37: u0_a37.'},
 {q:'Điều kiện để hai app dùng chung một UID (shared user ID) là:',o:['Cùng tên gói','Cùng khóa ký mã','Cùng nhà phát hành trên Play Store','Cùng phiên bản'],a:1,e:'Hai app phải ký bằng cùng khóa; nếu không, cài đặt báo lỗi không tương thích shared user.'},
 {q:'Vì sao không thể thêm sharedUserId vào bản cập nhật của một app đã cài?',o:['Vì Play Store cấm','Vì app sẽ đổi UID và mất quyền truy cập dữ liệu riêng của chính nó','Vì APK sẽ quá lớn','Vì chữ ký sẽ hết hạn'],a:1,e:'Đổi UID làm mất quyền với tệp cũ nên hệ thống từ chối bản cập nhật.'},
 {q:'“Same origin policy” của chữ ký APK nghĩa là:',o:['App chỉ chạy được trên cùng một thiết bị','Bản cập nhật chỉ được thay app cũ nếu ký bằng cùng chứng chỉ','Hai app phải cùng tên','App phải tải từ cùng một cửa hàng'],a:1,e:'So sánh chứng chỉ ký của app đã cài với bản cập nhật.'},
 {q:'DAC khác MAC chủ yếu ở điểm nào?',o:['DAC mã hóa, MAC thì không','Trong DAC chủ tài nguyên có thể tùy ý chia sẻ; trong MAC mọi truy cập phải tuân chính sách toàn hệ thống','DAC chỉ dùng cho mạng','Không khác gì nhau'],a:1,e:'Discretionary = tùy ý; Mandatory = bắt buộc theo policy do quản trị đặt.'},
 {q:'Ở Android 4.4, SELinux hoạt động thế nào?',o:['Tắt hoàn toàn','Enforcing cho mọi thứ','Enforcing cho các daemon lõi, còn app ở permissive (chỉ log)','Chỉ chạy trên tablet'],a:2,e:'Theo sách: enforcing nhưng chỉ áp dụng cho daemon hệ thống lõi; app vẫn permissive.'},
 {q:'Vì sao cập nhật hệ thống cần một recovery OS riêng?',o:['Để tiết kiệm pin','Vì cần một HĐH tối giản có toàn quyền phần cứng để sửa cả bootloader/baseband mà Android đang chạy không truy cập được','Để chơi game','Để chống virus'],a:1,e:'Cập nhật có thể đụng tới các phần ngoài tầm với của Android đang chạy.'},
 {q:'Điều gì thường xảy ra khi mở khóa bootloader?',o:['Dữ liệu người dùng được giữ nguyên','Dữ liệu thường bị xóa (factory reset) và có thể mất bảo hành','Máy tự động root','SIM được mở khóa'],a:1,e:'Xóa dữ liệu để ảnh hệ thống lạ không đọc được dữ liệu cũ; mở khóa bootloader khác SIM-unlock.'},
 {q:'Trong dm-verity, bạn chỉ cần tin cậy giá trị nào để xác thực cả cây băm?',o:['Mọi nút lá','Root hash (nút gốc)','Tên partition','Kích thước ổ đĩa'],a:1,e:'Băm gốc phụ thuộc mọi nút khác nên chỉ cần tin root hash.'},
 {q:'Điều gì xảy ra khi một khối dữ liệu trên partition bị sửa và dm-verity phát hiện?',o:['Hệ thống tự sửa lại khối đó','Thao tác đọc trả về lỗi I/O báo hệ tệp hỏng','Máy tự khởi động lại vào recovery','Không có gì'],a:1,e:'Băm tính lúc đọc không khớp cây băm → lỗi I/O.'},
 {q:'Kịch bản: app A xin chạy cùng UID với app B nhưng ký bằng khóa khác. Kết quả?',o:['Cài đặt thành công','Cài đặt thất bại vì shared user không tương thích','App A bị gỡ khi app B chạy','App A nhận mọi quyền của B'],a:1,e:'So sánh chứng chỉ không khớp → lỗi INSTALL_FAILED_SHARED_USER_INCOMPATIBLE (chi tiết ở chương 2).'}
],

order: [
 {id:'o-stack',title:'Xếp các tầng Android từ dưới lên trên',intro:'Kéo thả (hoặc dùng ▲▼) để sắp từ tầng thấp nhất đến cao nhất.',
  items:['Linux Kernel (Binder, paranoid networking…)','Native userspace: init, daemon, thư viện native, HAL','Dalvik VM + thư viện Java runtime (java.*, javax.*)','System services (Activity Mgr, Package Mgr…)','Android Framework (android.*) và các lớp manager','Ứng dụng (hệ thống + người dùng cài)'],
  explain:'Kernel → Native → Dalvik/Java libs → Services → Framework → Apps.'},
 {id:'o-binder',title:'Một lần gọi dịch vụ hệ thống qua Binder',intro:'Sắp xếp các bước theo đúng trình tự từ lúc dịch vụ khởi động đến khi nó thực thi yêu cầu.',
  items:['Dịch vụ đăng ký tên + tham chiếu Binder với servicemanager','Client hỏi servicemanager theo tên dịch vụ và nhận handle','Client gọi transact() qua /dev/binder','Binder driver gắn PID + EUID của client vào giao dịch','Dịch vụ đọc UID người gọi và kiểm tra quyền','Dịch vụ thực hiện hành động (hoặc ném SecurityException)'],
  explain:'Đăng ký → tra cứu → transact → kernel gắn danh tính → dịch vụ kiểm tra → thực thi.'}
],

classify: [
 {id:'c-dacmac',title:'DAC hay MAC?',intro:'Bấm một mô tả, rồi bấm nhóm phù hợp.',buckets:['DAC (Linux mặc định)','MAC (SELinux)'],
  items:[
   {t:'Chủ tệp chmod cho “world-readable”',b:0},
   {t:'Chính sách toàn hệ thống, người dùng không thể ghi đè',b:1},
   {t:'Kiểm soát dựa trên UID/GID và bit rwx của tệp',b:0},
   {t:'Tách daemon vào các domain bảo mật với chính sách riêng',b:1},
   {t:'Người dùng tự quyết chia sẻ tài nguyên của mình',b:0},
   {t:'Chỉ quản trị viên mới thay đổi được luật truy cập',b:1}],
  explain:'DAC: tùy ý chủ sở hữu. MAC: chính sách bắt buộc.'},
 {id:'c-components',title:'Đây là thành phần nào của app?',intro:'Xếp mỗi tình huống vào đúng loại thành phần.',buckets:['Activity','Service','Content Provider','Broadcast Receiver'],
  items:[
   {t:'Màn hình đăng nhập',b:0},
   {t:'Tải file lớn khi người dùng đã thoát app',b:1},
   {t:'Chia sẻ danh sách danh bạ cho app khác (có kiểm soát)',b:2},
   {t:'Nhận thông báo “mạng vừa thay đổi”',b:3},
   {t:'Trình phát nhạc chạy nền',b:1},
   {t:'Trang cài đặt của app',b:0},
   {t:'Cung cấp ảnh đính kèm cho app xem ảnh',b:2},
   {t:'Phản ứng khi máy khởi động xong (BOOT_COMPLETED)',b:3}],
  explain:'Mặt (Activity) · Nền (Service) · Kho (Provider) · Tai (Receiver).'}
],

cheat: [
 {title:'🏗 6 tầng Android',html:'<div class="mnemo">Kernel → Native → Dalvik → Services → Framework → Apps</div><ul><li>Kernel có <b>Binder</b> & <b>paranoid networking</b></li><li>Dalvik: register-based, .dex</li><li>System services: 79 (4.4), gọi qua <b>manager</b></li></ul>'},
 {title:'📞 Binder',html:'<ul><li>IPC qua <code>/dev/binder</code>, 1 lệnh <code>ioctl()</code></li><li>Kernel gắn <b>PID + EUID</b> → không thể giả</li><li>Binder object = capability / token</li><li><code>servicemanager</code>: tra dịch vụ theo tên</li><li>Có tham chiếu ≠ được làm mọi thứ → service tự kiểm tra</li><li>AIDL: stub + proxy, marshalling</li></ul>'},
 {title:'🧩 4 thành phần',html:'<div class="mnemo">Mặt – Nền – Kho – Tai</div><ul><li>Activity = màn hình</li><li>Service = chạy nền</li><li>Content Provider = chia sẻ dữ liệu</li><li>Broadcast Receiver = nghe sự kiện</li><li>Khai báo trong <code>AndroidManifest.xml</code></li></ul>'},
 {title:'📦 Sandbox & UID',html:'<ul><li>Mỗi app: UID riêng + tiến trình + thư mục dữ liệu riêng</li><li>1000 = system · 10000+ = app</li><li>10037 ↔ <code>u0_a37</code></li><li>packages.xml (gốc) / packages.list (6 trường)</li><li>Shared UID: cùng khóa ký, phải dùng từ bản đầu</li></ul>'},
 {title:'✍️ Chữ ký mã',html:'<ul><li>Mọi APK phải ký (dựa JAR signing)</li><li>Same-origin cho cập nhật</li><li>Nền tảng của quan hệ tin cậy (signature permission, shared UID)</li><li>Platform key do bên duy trì ROM kiểm soát</li></ul>'},
 {title:'🛡 Lớp bảo vệ mới',html:'<ul><li><b>Multi-user</b> (4.2, tablet): UID hiệu lực = f(user, app)</li><li><b>SELinux</b> (4.3+): DAC → MAC; 4.4 enforcing cho daemon, app permissive</li><li><b>Verified boot</b> (4.4): dm-verity, cây băm, tin root hash</li><li><b>Recovery</b>: OTA ZIP có chữ ký; unlock bootloader → xóa dữ liệu</li></ul>'}
]
};
