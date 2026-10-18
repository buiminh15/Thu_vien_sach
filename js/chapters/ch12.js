CH[12] = {
sections: [

{id:'why', icon:'🧱', title:'Vì sao cần SELinux? DAC vs MAC', html:`
<p>Sandbox “truyền thống” của Android dựa vào <b>DAC</b> (Discretionary Access Control) của Linux. DAC nhẹ, dễ hiểu nhưng có nhược điểm:</p>
<ul>
<li><b>Độ mịn thô</b> của quyền (chủ/nhóm/khác – rwx).</li>
<li>Chương trình <b>cấu hình sai</b> có thể làm rò dữ liệu.</li>
<li>Không áp được ràng buộc chi tiết lên tiến trình chạy bằng <b>root</b>. (POSIX capabilities cho phép cấp chỉ một số đặc quyền cho root nhưng vẫn thô, và đặc quyền áp cho <i>mọi</i> đối tượng tiến trình truy cập.)</li>
</ul>
<p><b>MAC</b> (Mandatory Access Control) như SELinux thi hành một <b>chính sách toàn hệ thống, chi tiết hơn</b>, chỉ quản trị hệ thống đổi được – người dùng/chương trình không có đặc quyền thì không.</p>
<div class="compare">
 <div class="mini r"><h4>DAC</h4><p>Chủ tài nguyên tự quyết. Root có quyền tuyệt đối. Lỗi cấu hình dễ gây rò.</p></div>
 <div class="mini g"><h4>MAC (SELinux)</h4><p>Mọi truy cập phải khớp <b>policy</b> toàn hệ thống. Ngay cả tiến trình root bị giới hạn theo domain của nó.</p></div>
</div>
<div class="callout c-info"><b>Thứ tự kiểm tra</b>Policy MAC chỉ được hỏi <b>khi DAC đã cho phép</b>. DAC từ chối là quyết định cuối cùng. Vậy MAC chỉ có thể <i>thắt chặt thêm</i>, không bao giờ mở rộng quyền DAC.</div>
`},

{id:'arch', icon:'🏗', title:'Kiến trúc SELinux', html:`
<p>SELinux là cơ chế MAC của kernel Linux, cài đặt dưới dạng <b>Linux Security Module (LSM)</b>.</p>
<ul>
<li>LSM = chuỗi <b>hook</b> (upcall) + cấu trúc dữ liệu cắm vào các mô-đun kernel liên quan kiểm soát truy cập: thực thi chương trình, thao tác tệp/inode, netlink, socket…</li>
<li>Không cài security module → Linux chỉ dùng DAC. Có module → Linux hỏi cả module <b>ngoài DAC</b> để ra quyết định cuối.</li>
<li>LSM còn mở rộng <code>/proc</code> với thuộc tính bảo mật theo tiến trình/luồng, và dùng <b>thuộc tính mở rộng (xattr)</b> của hệ tệp để lưu thuộc tính bảo mật bền vững.</li>
<li>SELinux là LSM đầu tiên vào kernel (2.6). Sau đó có thêm <b>AppArmor, Smack, TOMOYO</b> – các MAC thay thế dựa trên mô hình khác.</li>
</ul>
<h3>4 thành phần chính</h3>
<div class="flow"><div class="node">Subject<br><small>tiến trình</small></div><span class="arr">1. action</span><div class="node hl">Object Manager (OM)</div><span class="arr">2. hỏi</span><div class="node hl">Access Vector Cache (AVC)</div><span class="arr">3. không có cache</span><div class="node hl">Security Server</div><span class="arr">4. tra</span><div class="node">Policy</div></div>
<div class="stepper" data-stepper>
 <div class="step"><b>1. Subject yêu cầu hành động</b>Ví dụ tiến trình muốn ghi một tệp.</div>
 <div class="step"><b>2. OM hỏi AVC</b>Object manager (quản lý đối tượng kernel) hỏi bộ nhớ đệm quyết định truy cập.</div>
 <div class="step"><b>3–4. Nếu cache không có</b>AVC hỏi <b>security server</b> (nằm trong kernel); server tra <b>policy</b> đang nạp, ra quyết định và trả về AVC để cache.</div>
 <div class="step"><b>5. OM thi hành</b>Cho phép hoặc từ chối hành động.</div>
</div>
<ul>
<li>Security server nằm trong kernel; <b>policy được nạp từ userspace</b> qua thư viện hỗ trợ.</li>
<li>OM và AVC có thể ở kernel (quản lý đối tượng kernel) hoặc <b>userspace</b> (app “SELinux-aware” tự có MAC).</li>
</ul>
<h3>🧪 Mô phỏng quyết định</h3>
<div class="sim" data-sesim></div>
`},

{id:'model', icon:'🧩', title:'Mô hình MAC: subject, object, type, mode', html:`
<p>MAC của SELinux có 3 khái niệm: <b>subject</b> (chủ thể chủ động – thường là tiến trình), <b>object</b> (tài nguyên kernel: tệp, socket… – tiến trình cũng có thể là object) và <b>action</b>. Hành động chỉ thực hiện nếu <b>policy cho phép</b>. Khi SELinux bật, subject <b>không thể bỏ qua hay ảnh hưởng</b> luật → “bắt buộc”.</p>
<div class="callout c-tip"><b>Hai dạng MAC</b><b>Type Enforcement (TE)</b>: mọi subject/object có <b>type</b>, policy dùng type để thi hành luật – <b>Android dùng cái này</b>. <b>MLS</b> (multi-level security – các mức truy cập thông tin hạn chế) – Android <b>không dùng</b>.</div>
<ul>
<li><b>Type</b> là một chuỗi định nghĩa trong policy, gắn với object hoặc subject. Type của <b>tiến trình</b> gọi là <b>domain</b>; type của <b>object</b> thường chỉ vai trò (tệp hệ thống, tệp dữ liệu app…).</li>
</ul>
<h3>3 chế độ</h3>
<div class="cards">
 <div class="mini r"><h4>Disabled</h4><p>Không nạp policy; chỉ DAC.</p></div>
 <div class="mini a"><h4>Permissive</h4><p>Nạp policy, kiểm tra truy cập, nhưng <b>chỉ ghi log</b> vi phạm, không chặn.</p></div>
 <div class="mini g"><h4>Enforcing</h4><p>Nạp và <b>thi hành</b> policy; vi phạm bị chặn (và ghi log).</p></div>
</div>
<pre># getenforce
Enforcing
# setenforce 0        <span class="c">← không bền, mất khi reboot</span>
# getenforce
Permissive</pre>
<p>Dù SELinux ở enforcing, policy vẫn có thể đặt <b>từng domain</b> ở permissive bằng câu lệnh <code>permissive &lt;domain&gt;;</code>.</p>
<h3>Security context (nhãn)</h3>
<p>Chuỗi 4 trường ngăn bởi dấu hai chấm: <code>user:role:type:level</code> (level = MLS range, tùy chọn).</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>user (u)</h4><p>Danh tính SELinux (vd user_u, admin_u); gắn với nhóm người dùng. Android chỉ có <b>một</b> user: <code>u</code>.</p>">u</button>
  <button class="chip" data-info="<h4>role (r / object_r)</h4><p>Dùng cho RBAC: mỗi role liên kết một hay nhiều domain. Android: <code>r</code> cho tiến trình, <code>object_r</code> (có sẵn) cho đối tượng.</p>">r / object_r</button>
  <button class="chip" data-info="<h4>type (untrusted_app…)</h4><p>Nhóm tiến trình thành domain hoặc xác định kiểu logic của đối tượng. <b>Đây là trường duy nhất Android thực sự dùng.</b></p>">type</button>
  <button class="chip" data-info="<h4>level (s0)</h4><p>Khoảng bảo mật MLS; Android luôn đặt <code>s0</code>.</p>">s0</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một trường của <code>u:r:untrusted_app:s0</code>.</p></div>
</div>
<pre># ps -Z
u:r:init:s0            root   /init
u:r:vold:s0            root   /system/bin/vold
u:r:untrusted_app:s0   u0_a7  com.google.android.gms

# ls -Z
u:object_r:system_data_file:s0  data
u:object_r:rootfs:s0            init</pre>
<h3>Gán và lưu context</h3>
<ul>
<li><b>Đối tượng (tệp)</b>: context <b>bền</b>, lưu ở xattr tên <code>security.selinux</code> (ext4 hỗ trợ xattr). Đặt khi khởi tạo hệ tệp (<b>labeling</b>) hoặc ngầm khi tạo: thường <b>kế thừa type của thư mục cha</b>; nếu policy cho phép có thể nhận nhãn khác – gọi là <b>type transition</b>.</li>
<li><b>Tiến trình</b>: kế thừa context của cha, hoặc đổi qua <b>domain transition</b> nếu policy cho phép (có thể tự động theo domain cha + type của binary được chạy). Vì daemon do <code>init</code> (<code>u:r:init:s0</code>) sinh ra nên đáng lẽ thừa domain init; Android dùng <b>domain transition tự động</b> để mỗi daemon có domain riêng (vold, servicemanager…).</li>
</ul>
`},

{id:'policy', icon:'📜', title:'Ngôn ngữ policy', html:`
<p>Policy kernel ở dạng <b>nhị phân</b> (biên dịch từ nhiều tệp nguồn). Nguồn gồm <b>statement</b> (định nghĩa thực thể: type, user, role…) và <b>rule</b> (access vector, type enforcement, default). Policy lớn làm <b>chậm</b> vì mọi truy cập kernel đều phải kiểm → Android cố giữ policy nhỏ.</p>
<h3>Statement</h3>
<pre>attribute file_type;
attribute domain;
type system_data_file, file_type, data_file_type;   <span class="c">← type + các attribute của nó</span>
type untrusted_app, domain;                         <span class="c">← domain = type dùng cho tiến trình</span>

user u roles { r } level s0 range s0 - mls_systemhigh;
role r;
role r types domain;

permissive adbd;                                    <span class="c">← domain adbd chạy permissive</span>
class file   class dir   class binder               <span class="c">← object class (security_classes)</span></pre>
<ul>
<li><b>type / attribute</b>: khai báo type và nhóm type (attribute giống “thẻ nhóm”).</li>
<li><b>user / role</b>: Android chỉ có user <code>u</code> và role <code>r</code> (gắn với attribute <code>domain</code>).</li>
<li><b>class</b>: lớp đối tượng (<code>file, dir, sock_file, binder…</code>), do object manager kernel xác định, tĩnh trong policy (tệp <code>security_classes</code>).</li>
<li><b>permission (access vector)</b>: định nghĩa trong <code>access_vectors</code>; riêng lớp hoặc dùng chung (<code>common</code>), được <code>inherits</code> – vd lớp <code>dir</code> kế thừa quyền <code>file</code> và thêm <code>add_name, remove_name, search, rmdir…</code>.</li>
</ul>
<h3>Rule</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="allow" data-desc="<p>Rule phổ biến nhất: subject type được làm gì lên object type/class.</p><pre>allow vold sdcard_type:filesystem { mount remount unmount };\nallow vold self:capability { sys_ptrace kill };</pre><p><code>self</code> = domain đích trùng domain nguồn. Có thể liệt kê nhiều type/class/permission trong <code>{}</code>; hỗ trợ <code>*</code> (tất cả) và <code>~</code> (tất cả trừ…).</p>"><span>allow</span><small>cho phép</small></button>
  <button class="layer" data-c="2" data-title="auditallow" data-desc="<p>Ghi <b>log khi thao tác được cho phép</b> (mặc định SELinux chỉ ghi khi bị từ chối). Không tự cấp quyền – cần allow khớp.</p>"><span>auditallow</span><small>ghi log khi cho phép</small></button>
  <button class="layer" data-c="3" data-title="dontaudit" data-desc="<p><b>Tắt log từ chối</b> với sự kiện đã biết là an toàn.</p><pre>dontaudit installd self:capability sys_admin;</pre><p>⚠ Có thể che lỗi chương trình nên không khuyến khích dùng.</p>"><span>dontaudit</span><small>bỏ qua log</small></button>
  <button class="layer" data-c="5" data-title="neverallow" data-desc="<p>Khai báo thao tác <b>không bao giờ</b> được cho phép, <b>kể cả khi có allow rule</b> (kiểm lúc biên dịch policy).</p><pre>neverallow { domain -init } kernel:security load_policy;</pre><p>→ chỉ domain init được nạp policy.</p>"><span>neverallow</span><small>cấm tuyệt đối</small></button>
  <button class="layer" data-c="4" data-title="type_transition" data-desc="<p>Quy định khi nào được chuyển domain/type (type enforcement rule).</p><pre>type_transition wpa wifi_data_file:sock_file wpa_socket;</pre><p>Nguồn = domain của wpa_supplicant; đích = type:class trước chuyển; kết quả = type sau chuyển. Nếu không có rule, socket sẽ thừa type của thư mục cha (<code>wifi_data_file</code>). <i>Lưu ý:</i> chỉ type_transition là chưa đủ – cần thêm quyền trên thư mục cha và tệp socket.</p>"><span>type_transition</span><small>chuyển type/domain</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một loại rule.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ công thức AV rule</b><div class="mnemo">rule  nguồn  đích : lớp  { quyền };</div>VD: <code>allow vold sdcard_type:filesystem { mount remount unmount };</code></div>
<h3>Macro m4: chuyển domain</h3>
<p>Quy trình biên dịch dùng <b>m4</b> mở rộng macro trước khi gộp nguồn.</p>
<pre>define('domain_trans', '
  allow $1 $2:file { getattr open read execute };
  allow $1 $3:process transition;
  allow $3 $2:file { entrypoint read execute };
  allow $3 $1:process sigchld;
  ...')
define('domain_auto_trans', '
  domain_trans($1,$2,$3)
  type_transition $1 $2:process $3;')
define('init_daemon_domain', '
  domain_auto_trans(init, $1_exec, $1)
  tmpfs_domain($1)')</pre>
<ul>
<li><code>domain_trans</code>: cho phép chuyển sang domain mới. <code>domain_auto_trans</code>: chuyển <b>tự động</b>. <code>init_daemon_domain(x)</code>: khi <code>init</code> chạy binary <code>x_exec</code> thì tiến trình vào domain <code>x</code>.</li>
</ul>
`},

{id:'android-impl', icon:'🤖', title:'Tích hợp SELinux vào Android (SEAndroid)', html:`
<p>Android 4.2 đã có mã SELinux nhưng tắt khi biên dịch release. <b>4.3</b> bật trong mọi bản build nhưng mặc định <b>permissive</b> (và các domain đều permissive + unconfined). <b>4.4</b> là bản đầu tiên chạy <b>enforcing</b> trong release, chỉ với các domain daemon lõi.</p>
<p>Phần lớn thay đổi do dự án <b>Security Enhancements for Android (SEAndroid)</b> thực hiện rồi tích hợp vào AOSP.</p>
<h3>Thay đổi ở kernel: Binder</h3>
<p>Binder là driver riêng của Android, ban đầu không có hook LSM nên SELinux không kiểm soát được. SEAndroid thêm hook và lớp đối tượng <code>binder</code>:</p>
<table>
<tr><th>Hook</th><th>Kiểm soát</th></tr>
<tr><td><code>security_binder_set_context_mgr</code></td><td>Tiến trình nào được làm <b>context manager</b></td></tr>
<tr><td><code>security_binder_transaction</code></td><td>Tiến trình nào được <b>gọi</b> giao dịch Binder</td></tr>
<tr><td><code>security_binder_transfer_binder</code></td><td>Ai được chuyển <b>tham chiếu Binder</b> cho tiến trình khác</td></tr>
<tr><td><code>security_binder_transfer_file</code></td><td>Ai được chuyển <b>tệp đang mở</b> qua Binder</td></tr>
</table>
<p>Lớp <code>binder</code> có các quyền: <code>impersonate</code>, <code>call</code>, <code>set_context_mgr</code>, <code>transfer</code>.</p>
<h3>Thay đổi ở userspace</h3>
<ul>
<li><b>bionic</b>: thêm wrapper xattr (<code>getxattr, setxattr, listxattr…</code>) để đọc/ghi nhãn tệp.</li>
<li>Bản port <b>libselinux</b> cho Android + công cụ trong binary <code>toolbox</code> (symlink).</li>
</ul>
<table>
<tr><th>Lệnh</th><th>Chức năng</th></tr>
<tr><td><code>chcon</code></td><td>Đổi context của tệp</td></tr>
<tr><td><code>getenforce / setenforce</code></td><td>Xem / đổi chế độ</td></tr>
<tr><td><code>getsebool / setsebool</code></td><td>Xem / đổi Boolean của policy</td></tr>
<tr><td><code>restorecon</code></td><td>Khôi phục context mặc định của tệp</td></tr>
<tr><td><code>runcon</code></td><td>Chạy chương trình trong context chỉ định</td></tr>
<tr><td><code>load_policy</code></td><td>Nạp tệp policy</td></tr>
<tr><td><code>ls -Z</code>, <code>ps -Z</code>, <code>id</code></td><td>Hiện context tệp / tiến trình</td></tr>
</table>
<h3>Khởi tạo hệ thống (init)</h3>
<p>Kịch bản init (init.rc…) do <code>init</code> tự diễn giải. SEAndroid thêm lệnh:</p>
<table>
<tr><th>Lệnh init</th><th>Ý nghĩa</th></tr>
<tr><td><code>seclabel</code></td><td>Đặt context của một service (dùng cho tiến trình khởi động rất sớm như ueventd)</td></tr>
<tr><td><code>restorecon</code></td><td>Khôi phục nhãn mặc định (vd <code>/data</code> sau factory reset)</td></tr>
<tr><td><code>setcon</code></td><td>Đặt context của chính init (<code>u:r:init:s0</code>)</td></tr>
<tr><td><code>setenforce</code>, <code>setsebool</code></td><td>Đặt chế độ / Boolean</td></tr>
</table>
<div class="stepper" data-stepper>
 <div class="step"><b>init nạp policy</b>Từ <code>/sepolicy</code> (policy nhị phân trong root của boot image).</div>
 <div class="step"><b>Đặt chế độ</b>Theo thuộc tính <code>ro.boot.selinux</code> (lấy từ tham số kernel <code>androidboot.selinux</code>): giá trị <code>permissive</code> → permissive; mọi giá trị khác hoặc không có → <b>enforcing</b>.</div>
 <div class="step"><b>init.rc</b>Chạy <code>setcon u:r:init:s0</code>; ueventd có <code>seclabel u:r:ueventd:s0</code>; mount xong thì <code>restorecon /data</code>.</div>
 <div class="step"><b>Daemon khác</b>Domain gán tự động qua type_transition (macro <code>init_daemon_domain</code>).</div>
 <div class="step"><b>Nạp lại</b>Đặt <code>selinux.reload_policy=1</code> → init restart <code>ueventd</code>, <code>installd</code> để policy mới có hiệu lực.</div>
</div>
`},

{id:'labeling', icon:'🏷', title:'Gán nhãn: file_contexts, property_contexts, seapp_contexts', html:`
<h3>file_contexts – nhãn tệp</h3>
<pre>/                    u:object_r:rootfs:s0
/dev(/.*)?           u:object_r:device:s0
/system(/.*)?        u:object_r:system_file:s0
/system/bin/mksh     u:object_r:shell_exec:s0
/data(/.*)?          u:object_r:system_data_file:s0</pre>
<p>Mỗi dòng: đường dẫn (có wildcard) + context. Dùng ở nhiều thời điểm:</p>
<ul>
<li>Hệ tệp trong bộ nhớ (rootfs <code>/</code>, <code>/dev</code>) không bền → tất cả tệp có cùng context theo <code>genfs_contexts</code> hoặc tùy chọn mount <code>context=</code>; <code>init</code> dùng <code>restorecon</code> tra file_contexts để gán nhãn riêng.</li>
<li>Lúc build: <code>make_ext4fs</code> tra để gán nhãn ảnh <code>/system</code> và <code>/data</code>.</li>
<li>Mỗi lần boot: khôi phục nhãn điểm mount của partition dữ liệu.</li>
<li><b>Recovery</b> cũng có bản sao file_contexts để gán nhãn tệp tạo khi cập nhật → hệ thống không cần gán nhãn lại toàn bộ sau OTA.</li>
</ul>
<h3>property_contexts – nhãn system property</h3>
<p>Thuộc tính hệ thống (toàn cục, ai cũng thấy) dùng để báo trạng thái phần cứng, bật/tắt dịch vụ, kích hoạt mã hóa đĩa, nạp lại policy… Đọc thuộc tính <code>ro.*</code> không hạn chế; <b>ghi</b> thuộc tính read-write chỉ cho UID đặc quyền (system, radio…). SEAndroid <b>bổ sung MAC</b>: property (không phải object SELinux gốc) được gán context qua <code>property_contexts</code>; <code>property_service</code> (trong init) nạp bảng tra. Lớp <code>property_service</code> có một quyền: <code>set</code>.</p>
<pre># vold.te
allow vold vold_prop:property_service set;
allow vold powerctl_prop:property_service set;
allow vold ctl_default_prop:property_service set;

# property_contexts
vold.         u:object_r:vold_prop:s0
sys.powerctl  u:object_r:powerctl_prop:s0
ctl.          u:object_r:ctl_default_prop:s0</pre>
<p>Kết quả: vold đặt được mọi thuộc tính bắt đầu bằng <code>vold.</code>, <code>sys.powerctl</code> hoặc <code>ctl.</code>.</p>
<h3>seapp_contexts – nhãn tiến trình ứng dụng</h3>
<p>Mọi app (và system_server) đều fork từ <b>zygote</b> (root). Zygote đã được mở rộng (lớp <code>ZygoteConnection</code>) để kiểm context của client và <b>đặt context cho tiến trình app</b> theo luật trong <code>seapp_contexts</code>. Mỗi luật có <b>bộ chọn đầu vào</b> (UID/user, tên gói, <code>isSystemServer</code>, <code>seinfo</code>) và <b>thuộc tính đầu ra</b> (<code>domain</code>, <code>type</code>…); khớp khi <b>mọi</b> bộ chọn khớp (AND).</p>
<pre>isSystemServer=true domain=system
user=system domain=system_app type=system_data_file
user=radio domain=radio type=radio_data_file
user=_app domain=untrusted_app type=app_data_file levelFrom=none
user=_app seinfo=platform domain=platform_app type=platform_app_data_file
user=_app seinfo=shared   domain=shared_app   type=platform_app_data_file
user=_isolated domain=isolated_app
user=shell domain=shell type=shell_data_file</pre>
<ul>
<li><b>user</b> suy ra từ UID: người dùng dựng sẵn (system, radio, nfc… trong <code>android_filesystem_config.h</code>); service isolated → <code>_isolated</code>; mọi tiến trình khác → <code>_app</code>.</li>
<li><b>type</b>: kiểu của tệp thuộc tiến trình đó. VD <code>app_data_file</code> → thư mục dữ liệu app có context <code>u:object_r:app_data_file:s0</code> (do <code>installd</code> đặt lúc cài – chương 3).</li>
<li><b>seinfo</b> phân biệt các app không phải hệ thống (xem MMAC bên dưới). Isolated service chạy UID riêng khác app chủ và không truy cập được dịch vụ hệ thống nào.</li>
</ul>
<h3>🧪 Domain nào được gán?</h3>
<div class="sim" data-seapp></div>
`},

{id:'mmac', icon:'🧬', title:'Middleware MAC (MMAC) và các tệp policy', html:`
<p><b>seinfo</b> thuộc tính của một tính năng SEAndroid gọi là <b>middleware MAC (MMAC)</b> – lớp MAC <b>mức cao</b>, tách khỏi MAC mức kernel. Thiết kế để áp MAC lên <b>mô hình quyền</b> của Android (hoạt động ở mức framework, khó ánh xạ sang MAC kernel).</p>
<div class="cards">
 <div class="mini g"><h4>Install-time MAC</h4><p>Giới hạn quyền được cấp cho mỗi gói theo <b>tên gói và chứng chỉ ký</b>, <b>bất kể người dùng đồng ý</b>. Ngay cả khi người dùng cấp mọi quyền, MMAC vẫn có thể chặn cài đặt.</p></div>
 <div class="mini b"><h4>Intent MAC</h4><p>Policy kiểm soát intent nào trao đổi được giữa các app.</p></div>
 <div class="mini a"><h4>Content provider MAC</h4><p>Policy truy cập dữ liệu content provider.</p></div>
</div>
<div class="callout c-warn"><b>Chỉ còn một phần</b>Bản MMAC gốc chỉ được hợp nhất một phần vào Android: tính năng duy nhất còn lại là <b>gán seinfo dựa trên chứng chỉ ký</b>. (Từ 4.3 có “intent firewall” thử nghiệm với luật kiểu tường lửa, tương tự intent MMAC nhưng không tích hợp SELinux.)</div>
<p>Cấu hình: <code>/system/etc/security/mac_permissions.xml</code> (tạo từ mẫu ở <code>external/sepolicy/mac_permissions.xml</code>):</p>
<pre>&lt;policy&gt;
  &lt;signer signature="@PLATFORM"&gt; &lt;seinfo value="platform" /&gt; &lt;/signer&gt;
  &lt;signer signature="@MEDIA"&gt;    &lt;seinfo value="media" /&gt;    &lt;/signer&gt;
  &lt;signer signature="@SHARED"&gt;   &lt;seinfo value="shared" /&gt;   &lt;/signer&gt;
  &lt;signer signature="@RELEASE"&gt;  &lt;seinfo value="release" /&gt;  &lt;/signer&gt;
  &lt;default&gt; &lt;seinfo value="default" /&gt; &lt;/default&gt;
&lt;/policy&gt;</pre>
<p>Các macro <code>@PLATFORM, @MEDIA, @SHARED, @RELEASE</code> là 4 khóa platform (chương 2), thay bằng chứng chỉ hex khi build policy. Khi quét gói, <b>PackageManagerService</b> so chứng chỉ ký với tệp này và gán <code>seinfo</code>; không khớp → <code>default</code>. Nhờ đó <code>seapp_contexts</code> dùng <b>chứng chỉ ký làm bộ chọn domain</b> (cột cuối của <code>packages.list</code>, chương 1, chính là seinfo!).</p>
<h3>Các tệp policy trên thiết bị</h3>
<table>
<tr><th>Tệp</th><th>Mục đích</th></tr>
<tr><td><code>/sepolicy</code></td><td>Policy nhị phân kernel</td></tr>
<tr><td><code>/file_contexts</code></td><td>Context tệp (gán nhãn hệ tệp)</td></tr>
<tr><td><code>/property_contexts</code></td><td>Context system property</td></tr>
<tr><td><code>/seapp_contexts</code></td><td>Context tiến trình app + tệp của nó</td></tr>
<tr><td><code>/system/etc/security/mac_permissions.xml</code></td><td>Ánh xạ chứng chỉ ký → seinfo</td></tr>
</table>
<div class="callout c-info"><b>Không cập nhật policy tại chỗ nữa (4.4.3)</b>Các bản trước 4.4.3 cho ghi đè bằng tệp ở <code>/data/security/current/</code> và <code>/data/system/</code> để cập nhật policy không cần OTA. 4.4.3 <b>bỏ</b> vì có thể gây lệch giữa nhãn trên hệ tệp và nhãn trong policy mới. Nay chỉ nạp từ vị trí chỉ-đọc mặc định.</div>
<h3>Log sự kiện policy</h3>
<p>Từ chối truy cập (và cấp phép có auditallow) ghi vào kernel log:</p>
<pre># dmesg | grep 'avc:'
avc: denied { getattr } for pid=9574 comm="zygote" path="socket:[8692]"
  scontext=<span class="h">u:r:untrusted_app:s0</span> tcontext=<span class="h">u:r:zygote:s0</span> tclass=<span class="h">unix_stream_socket</span></pre>
<p>Đọc: app thường (<code>scontext</code>) bị từ chối quyền <code>getattr</code> trên socket Unix của zygote (<code>tcontext</code>, lớp <code>unix_stream_socket</code>).</p>
`},

{id:'policy44', icon:'🧾', title:'Policy của Android 4.4 và các domain', html:`
<p>Nguồn policy gốc ở <code>external/sepolicy/</code>: các tệp <code>access_vectors</code>, <code>file_contexts</code>, <code>mac_permissions.xml</code>… và nhiều tệp <b>.te</b> (type enforcement) – thường một tệp cho mỗi domain. Gộp lại thành <code>sepolicy</code> trong root của boot image. Có thể khảo sát bằng <code>seinfo</code>, <code>sesearch</code>, <code>sedispol</code>.</p>
<pre>$ seinfo sepolicy
Classes: 84    Permissions: 249    Types: 267    Users: 1
Allow: 1140    Neverallow: 1    Type_trans: 132    Permissives: 42
$ seinfo -adomain -x sepolicy          <span class="c">← liệt kê mọi domain</span>
$ sesearch --allow -s zygote -d sepolicy</pre>
<p>Policy khá phức tạp: <b>84 class, 267 type, 1140 luật allow</b> (4.4.x).</p>
<h3>Enforcing domains (4.4)</h3>
<p>Dù SELinux enforcing, chỉ <b>4 domain</b> của daemon lõi thực sự enforcing: <b>installd, netd, vold, zygote</b>. Chúng chạy root hoặc có đặc quyền vì phải làm việc quản trị hộ tiến trình khác, và từng là mục tiêu của nhiều lỗi leo thang đặc quyền.</p>
<div class="cards">
 <div class="mini g"><h4>installd</h4><p>Tạo thư mục dữ liệu app, đổi chủ sở hữu.</p></div>
 <div class="mini b"><h4>netd</h4><p>Quản lý kết nối mạng, lọc gói và định tuyến.</p></div>
 <div class="mini a"><h4>vold</h4><p>Mount bộ nhớ ngoài và container bảo mật.</p></div>
 <div class="mini v"><h4>zygote</h4><p>Đổi thông tin xác thực (UID/GID…) của tiến trình app.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">I · N · V · Z = installd · netd · vold · zygote</div></div>
<h3>Ví dụ: policy của installd</h3>
<pre>init_daemon_domain(installd)               <span class="c">← domain riêng khi init chạy</span>
relabelto_domain(installd)                 <span class="c">← được đặt nhãn cho tệp nó tạo</span>
typeattribute installd mlstrustedsubject;  <span class="c">← bỏ qua luật MLS</span>
allow installd self:capability { chown dac_override fowner fsetid setgid setuid };
allow installd dalvikcache_data_file:file create_file_perms;   <span class="c">← ghi ODEX</span>
allow installd data_file_type:dir create_dir_perms;
allow installd data_file_type:dir { relabelfrom relabelto };
allow installd apk_data_file:file r_file_perms;                <span class="c">← đọc APK để dexopt</span>
allow installd system_file:file x_file_perms;                  <span class="c">← chạy lệnh hệ thống</span></pre>
<p>Nguyên tắc: <b>cấp đủ tối thiểu</b> để cài gói. Nếu installd bị chiếm, kẻ tấn công chỉ chạm được một số tệp/thư mục giới hạn, mọi quyền không được allow đều bị từ chối.</p>
<div class="callout c-modern"><b>Android hiện đại</b>Về sau mọi domain đều enforcing trong bản release (đã nói trong ghi chú của sách về nhánh master), không còn permissive/unconfined; từ Android 5.0 app cũng bị MAC thi hành. Đây là hướng đi mà sách dự báo.</div>
<h3>Unconfined domains</h3>
<p><code>unconfineddomain</code> là domain “mẫu” được cho gần như <b>mọi đặc quyền</b> hệ thống, làm cha cho nhiều domain khác qua macro <code>unconfined_domain()</code>. Quyền gồm: mọi capability, toàn quyền với security server (trừ nạp policy: <code>~load_policy</code>), mọi quyền process, tệp, socket, binder (<code>call transfer set_context_mgr</code>), đặt property…</p>
<pre>allow unconfineddomain self:capability_class_set *;
allow unconfineddomain kernel:security ~load_policy;
allow unconfineddomain domain:process *;
allow unconfineddomain domain:binder { call transfer set_context_mgr };
allow unconfineddomain property_type:property_service set;</pre>
<p>Ở 4.4: <b>mọi domain permissive đều là unconfined</b> → gần như không bị hạn chế (trong giới hạn DAC). Ở nhánh master unconfineddomain bị siết chặt nhiều và dùng làm policy cơ sở cho dịch vụ đặc quyền, sắp bị loại bỏ.</p>
<h3>App domains</h3>
<ul>
<li>Các domain app (<code>untrusted_app, platform_app, shared_app, media_app, release_app, isolated_app</code>) đều kế thừa <b><code>appdomain</code></b> (macro <code>app_domain()</code> ở <code>app.te</code>) – gồm quyền chung mọi app cần: nhận/dùng fd từ zygote, đọc property của zygote, liên lạc với system_server (pipe, socket, Binder), surfaceflinger, tạo tệp trong sandbox <code>app_data_file</code>…</li>
<li>Thao tác app không cần (truy cập block device thô, bộ nhớ kernel, chuyển domain SELinux) bị cấm bằng <code>neverallow</code>.</li>
<li><code>untrusted_app</code> (mọi app không phải hệ thống) kế thừa appdomain + <code>net_domain</code> + <code>bluetooth_domain</code>, thêm: thiết bị tun (VPN), bộ nhớ ngoài, container ASEC…</li>
</ul>
<pre>type untrusted_app, domain;
<span class="h">permissive untrusted_app;</span>          <span class="c">← 4.4: mọi domain app đều permissive</span>
app_domain(untrusted_app)
net_domain(untrusted_app)
bluetooth_domain(untrusted_app)
allow untrusted_app tun_device:chr_file rw_file_perms;</pre>
<div class="callout c-info"><b>Nhánh master</b>Đơn giản hóa phân cấp: bỏ media_app, shared_app, release_app (gộp vào untrusted_app); chỉ system_app còn unconfined.</div>
`}

],

cards: [
 {f:'Nhược điểm của DAC mà SELinux muốn khắc phục?',b:'Độ mịn thô, chương trình cấu hình sai có thể rò dữ liệu, không giới hạn chi tiết được tiến trình root (POSIX capabilities vẫn thô).'},
 {f:'MAC khác DAC thế nào?',b:'MAC thi hành <b>chính sách toàn hệ thống</b> chi tiết, chỉ quản trị đổi được; subject không thể bỏ qua/ảnh hưởng.'},
 {f:'Thứ tự kiểm tra DAC và MAC?',b:'MAC chỉ được hỏi khi <b>DAC cho phép</b>; DAC từ chối là quyết định cuối. MAC chỉ thắt chặt thêm.'},
 {f:'LSM là gì?',b:'Linux Security Modules: khung hook (upcall) trong kernel (exec, tệp/inode, netlink, socket…) cho phép cắm cơ chế truy cập ngoài DAC. SELinux là LSM đầu tiên; còn AppArmor, Smack, TOMOYO.'},
 {f:'4 thành phần kiến trúc SELinux?',b:'<b>Object manager</b>, <b>AVC</b> (access vector cache), <b>security server</b> (trong kernel), <b>security policy</b>.'},
 {f:'Luồng quyết định truy cập?',b:'Subject → OM → AVC. Có cache thì trả luôn; không thì hỏi security server (tra policy) → cache → OM thi hành.'},
 {f:'Subject, object, action; vì sao “mandatory”?',b:'Subject (tiến trình) thực hiện action lên object (tệp, socket…). Subject không bỏ qua/đổi luật nên bắt buộc.'},
 {f:'SELinux có hai dạng MAC nào? Android dùng gì?',b:'Type Enforcement (TE) và Multi-Level Security (MLS). Android chỉ dùng <b>TE</b>.'},
 {f:'Type và domain?',b:'Type: chuỗi trong policy gắn với object/subject. Type của tiến trình = <b>domain</b>; type của object chỉ vai trò (system file, app data file…).'},
 {f:'3 chế độ SELinux?',b:'<b>Disabled</b> (không policy) · <b>Permissive</b> (kiểm tra, chỉ log) · <b>Enforcing</b> (thi hành + log).'},
 {f:'getenforce/setenforce? Có bền không?',b:'Xem/đổi chế độ; setenforce <b>không bền</b>, mất sau reboot. Domain có thể được đặt permissive riêng bằng câu lệnh <code>permissive</code>.'},
 {f:'Security context gồm gì? Android dùng trường nào?',b:'<code>user:role:type:level</code>. Android chỉ dùng <b>type</b>; user=<code>u</code>, role=<code>r</code> (tiến trình) hoặc <code>object_r</code> (đối tượng), level=<code>s0</code>.'},
 {f:'Xem context tiến trình và tệp bằng lệnh gì?',b:'<code>ps -Z</code> và <code>ls -Z</code>.'},
 {f:'Context tệp lưu ở đâu?',b:'Thuộc tính mở rộng <code>security.selinux</code> (ext4 xattr). Thừa type từ thư mục cha, hoặc đổi bằng type transition.'},
 {f:'Type transition và domain transition?',b:'Type transition: đối tượng mới nhận type khác cha. Domain transition: tiến trình đổi domain (tự động theo domain cha + type binary). Android dùng để daemon do init sinh ra có domain riêng.'},
 {f:'type và attribute statement?',b:'Khai báo type và gắn với attribute (nhóm type), vd <code>type untrusted_app, domain;</code>.'},
 {f:'Vì sao Android giữ policy nhỏ?',b:'Mọi truy cập kernel đều kiểm policy; policy lớn làm giảm hiệu năng, nhất là máy yếu.'},
 {f:'Object class và permission lấy ở đâu?',b:'Class: <code>security_classes</code>; permission: <code>access_vectors</code> (riêng lớp hoặc <code>common</code> + <code>inherits</code>, vd dir kế thừa file).'},
 {f:'Dạng của AV rule?',b:'<code>rule source_type target_type : class perm_set;</code> – rule: allow/dontaudit/auditallow/neverallow; hỗ trợ <code>{}</code>, <code>*</code>, <code>~</code>, <code>self</code>.'},
 {f:'auditallow, dontaudit, neverallow?',b:'auditallow: log khi cho phép (không tự cấp quyền). dontaudit: tắt log từ chối (có thể che lỗi). neverallow: cấm tuyệt đối kể cả khi có allow.'},
 {f:'init_daemon_domain làm gì?',b:'Macro: khi init chạy <code>$1_exec</code> thì tiến trình vào domain <code>$1</code> (domain_auto_trans + tmpfs_domain).'},
 {f:'Policy được xử lý bằng công cụ nào lúc build?',b:'<b>m4</b> mở rộng macro trước khi gộp nguồn và biên dịch thành policy nhị phân.'},
 {f:'SEAndroid là gì?',b:'Security Enhancements for Android: dự án (ban đầu SE Android) thực hiện hầu hết thay đổi để tích hợp SELinux, sau hợp nhất vào AOSP.'},
 {f:'Binder được SELinux hóa thế nào?',b:'Thêm hook LSM (set_context_mgr, transaction, transfer_binder, transfer_file) và lớp <code>binder</code> với quyền impersonate, call, set_context_mgr, transfer.'},
 {f:'Công cụ SELinux nào có trên Android?',b:'chcon, getenforce, getsebool, id, load_policy, ls -Z, ps -Z, restorecon, runcon, setenforce, setsebool (trong toolbox).'},
 {f:'Lệnh init thêm cho SELinux?',b:'<code>seclabel</code>, <code>restorecon</code>, <code>setcon</code>, <code>setenforce</code>, <code>setsebool</code>.'},
 {f:'Cách init xác định chế độ SELinux?',b:'Nạp <code>/sepolicy</code>; theo <code>ro.boot.selinux</code> (từ kernel param androidboot.selinux): <code>permissive</code> → permissive, còn lại/không có → enforcing.'},
 {f:'file_contexts dùng để làm gì?',b:'Danh sách đường dẫn → context ban đầu của tệp. Dùng bởi restorecon (init), make_ext4fs (build) và recovery (sau OTA).'},
 {f:'Vì sao recovery cũng có file_contexts?',b:'Để gán nhãn đúng cho tệp tạo khi cập nhật → không phải gán nhãn lại toàn hệ thống sau OTA.'},
 {f:'property_contexts và lớp property_service?',b:'Gán context cho system property; lớp <code>property_service</code> có quyền <code>set</code>. Bổ sung MAC cho kiểm soát UID. VD vold được set mọi thuộc tính <code>vold.*</code>.'},
 {f:'seapp_contexts làm gì?',b:'Luật zygote dùng để gán context cho tiến trình app/system_server. Bộ chọn đầu vào (user, seinfo, isSystemServer…) AND với nhau → domain/type.'},
 {f:'user=_app và user=_isolated trong seapp_contexts?',b:'<code>_app</code>: mọi tiến trình app không thuộc user dựng sẵn → <code>untrusted_app</code> (nếu seinfo=default). <code>_isolated</code>: isolated service → <code>isolated_app</code>.'},
 {f:'seinfo là gì và đến từ đâu?',b:'Thuộc tính gán cho gói theo chứng chỉ ký, qua <code>mac_permissions.xml</code> (platform/media/shared/release/default); cột cuối của packages.list.'},
 {f:'MMAC là gì? Phần nào còn lại?',b:'Middleware MAC của SEAndroid: install-time, intent, content provider MAC. Chỉ phần <b>gán seinfo theo chứng chỉ</b> được hợp nhất vào AOSP.'},
 {f:'Các tệp policy trên thiết bị?',b:'<code>/sepolicy</code>, <code>/file_contexts</code>, <code>/property_contexts</code>, <code>/seapp_contexts</code>, <code>/system/etc/security/mac_permissions.xml</code>.'},
 {f:'Vì sao 4.4.3 bỏ cập nhật policy tại chỗ?',b:'Có thể lệch giữa nhãn trên hệ tệp và nhãn trong policy mới; nay chỉ nạp từ vị trí chỉ-đọc.'},
 {f:'Cách xem log từ chối SELinux?',b:'<code>dmesg | grep avc:</code> – hiện scontext, tcontext, tclass, quyền bị từ chối.'},
 {f:'Lịch sử trạng thái SELinux: 4.2, 4.3, 4.4?',b:'4.2: có mã nhưng tắt khi biên dịch release. 4.3: bật, mặc định permissive, mọi domain permissive + unconfined. 4.4: enforcing, chỉ 4 domain lõi enforcing.'},
 {f:'4 enforcing domain của 4.4?',b:'<b>installd, netd, vold, zygote</b> – daemon đặc quyền từng bị khai thác leo thang.'},
 {f:'Policy 4.4 lớn cỡ nào?',b:'Khoảng 84 class, 267 type, 1140 allow rule, 42 permissive domain.'},
 {f:'unconfineddomain là gì?',b:'Domain mẫu gần như mọi đặc quyền hệ thống (trừ nạp policy), làm cha qua <code>unconfined_domain()</code>. Ở 4.4 mọi domain permissive đều unconfined.'},
 {f:'appdomain và untrusted_app?',b:'appdomain: quyền chung của mọi app (macro app_domain); untrusted_app kế thừa thêm net/bluetooth domain và quyền riêng (tun, bộ nhớ ngoài, ASEC). Ở 4.4 mọi domain app đều permissive.'}
],

quiz: [
 {q:'Điều nào KHÔNG phải nhược điểm của DAC được nêu?',o:['Quyền thô','Chương trình cấu hình sai có thể rò dữ liệu','Không giới hạn chi tiết được tiến trình root','Quá nhiều chính sách để duy trì'],a:3,e:'DAC nhẹ và dễ hiểu; ba nhược điểm còn lại đúng.'},
 {q:'MAC khác DAC ở điểm:',o:['MAC cho chủ tài nguyên tự quyết','MAC thi hành chính sách toàn hệ thống mà chỉ quản trị đổi được','MAC không cần kernel','MAC chỉ dùng cho mạng'],a:1,e:'Subject không bỏ qua được chính sách.'},
 {q:'Khi DAC từ chối một truy cập thì:',o:['SELinux có thể cho phép','Từ chối là quyết định cuối cùng','AVC cache cho phép','Chuyển sang permissive'],a:1,e:'MAC chỉ được hỏi khi DAC cho phép.'},
 {q:'LSM là:',o:['Một chương trình userspace','Khung hook trong kernel để cắm cơ chế kiểm soát truy cập như SELinux','Một hệ tệp','Một thư viện mật mã'],a:1,e:'SELinux là LSM đầu tiên; còn AppArmor, Smack, TOMOYO.'},
 {q:'Thành phần nào chứa quyết định truy cập đã lưu để tăng tốc?',o:['Security server','AVC (Access Vector Cache)','Object manager','Policy'],a:1,e:'Không có cache thì AVC hỏi security server.'},
 {q:'Security server nằm ở đâu?',o:['Userspace','Trong kernel (policy nạp từ userspace)','Trong zygote','Trong init.rc'],a:1,e:'Thư viện userspace nạp policy vào kernel.'},
 {q:'Dạng MAC nào Android dùng?',o:['MLS','Type Enforcement','RBAC thuần','Chỉ DAC'],a:1,e:'Android chỉ dùng trường type; MLS không dùng.'},
 {q:'“Domain” là gì?',o:['Tên miền DNS','Type gán cho tiến trình','Một loại tệp','Một người dùng'],a:1,e:'Type của object chỉ vai trò đối tượng.'},
 {q:'Chế độ nào chỉ ghi log vi phạm mà không chặn?',o:['Enforcing','Permissive','Disabled','Strict'],a:1,e:'Disabled thì không nạp policy.'},
 {q:'setenforce 0 có hiệu lực:',o:['Vĩnh viễn','Đến lần reboot kế tiếp','Chỉ một giờ','Chỉ cho shell'],a:1,e:'Chế độ mặc định được khôi phục sau reboot.'},
 {q:'Context u:r:untrusted_app:s0 có type là:',o:['u','r','untrusted_app','s0'],a:2,e:'Android chỉ dùng trường type.'},
 {q:'Context của tệp lưu ở đâu?',o:['Trong inode thông thường','Thuộc tính mở rộng security.selinux','Trong /proc','Trong policy'],a:1,e:'ext4 hỗ trợ xattr.'},
 {q:'Domain transition tự động cho daemon hệ thống dựa trên:',o:['UID','Domain cha + type của binary được chạy','Tên tiến trình','Thời gian'],a:1,e:'Macro init_daemon_domain triển khai điều này.'},
 {q:'Rule neverallow có tác dụng:',o:['Ghi log','Cấm thao tác kể cả khi có allow rule','Tắt log','Chuyển domain'],a:1,e:'Kiểm khi biên dịch policy.'},
 {q:'dontaudit khiến điều gì xảy ra?',o:['Chặn truy cập','Không ghi log từ chối','Cho phép truy cập','Ghi nhiều log hơn'],a:1,e:'Có thể che lỗi chương trình nên không khuyến khích.'},
 {q:'allow vold self:capability { sys_ptrace kill }; – “self” nghĩa là:',o:['Mọi domain','Domain đích trùng domain nguồn (vold)','Kernel','Init'],a:1,e:'Cấp capability cho chính domain vold.'},
 {q:'Điều nào đúng về Binder và SELinux?',o:['Binder mặc định có hook LSM','SEAndroid thêm hook LSM và lớp binder (impersonate, call, set_context_mgr, transfer)','Binder không thể bị SELinux kiểm soát','Chỉ dùng cho socket'],a:1,e:'Binder là driver riêng của Android.'},
 {q:'init xác định chế độ SELinux từ:',o:['Tệp config','ro.boot.selinux (từ androidboot.selinux)','Mật khẩu','Zygote'],a:1,e:'Giá trị permissive → permissive; khác/không có → enforcing.'},
 {q:'Lệnh init nào đặt context của một service sớm như ueventd?',o:['setcon','seclabel','restorecon','setenforce'],a:1,e:'setcon đặt context của chính init.'},
 {q:'Vì sao init gọi restorecon /data khi mount?',o:['Để mã hóa','Factory reset có thể đã xóa nhãn nên khôi phục nhãn mặc định','Để tăng tốc','Để mount ext4'],a:1,e:'Đảm bảo nhãn nhất quán mỗi lần boot.'},
 {q:'file_contexts được recovery dùng để:',o:['Mã hóa','Gán nhãn đúng cho tệp tạo khi cập nhật, tránh gán nhãn lại toàn bộ','Xóa tệp','Ký OTA'],a:1,e:'Hệ thống luôn được gán nhãn an toàn sau cập nhật.'},
 {q:'Lớp property_service có quyền gì?',o:['read','set','write','exec'],a:1,e:'Dùng để quy định domain nào được đặt thuộc tính nào.'},
 {q:'Ai gán context cho tiến trình app và theo tệp nào?',o:['installd – file_contexts','zygote – seapp_contexts','init – property_contexts','vold – mac_permissions.xml'],a:1,e:'Luật khớp theo user, seinfo, isSystemServer…'},
 {q:'Theo seapp_contexts 4.4.3, app thường (user=_app, seinfo=default) được gán domain:',o:['platform_app','untrusted_app','system_app','shell'],a:1,e:'seinfo=platform → platform_app, shared → shared_app…'},
 {q:'seinfo của một gói được quyết định bởi:',o:['Tên gói','Chứng chỉ ký, qua mac_permissions.xml','UID','Thời điểm cài'],a:1,e:'Không khớp thì seinfo=default.'},
 {q:'Phần nào của MMAC còn được hợp nhất vào Android?',o:['Install-time MAC','Intent MAC','Gán seinfo theo chứng chỉ ký','Content provider MAC'],a:2,e:'Phần còn lại chỉ có trong SEAndroid gốc.'},
 {q:'Vì sao bỏ cập nhật policy từ /data/security/current ở 4.4.3?',o:['Quá chậm','Có thể lệch giữa nhãn trên hệ tệp và nhãn trong policy mới','Vì bị cấm','Vì quá lớn'],a:1,e:'Chỉ nạp từ vị trí chỉ-đọc mặc định.'},
 {q:'Log “avc: denied { getattr } … scontext=u:r:untrusted_app:s0 tcontext=u:r:zygote:s0” nghĩa là:',o:['Zygote bị từ chối truy cập app','App thường bị từ chối getattr trên socket của zygote','App được cho phép','Lỗi DAC'],a:1,e:'scontext = nguồn; tcontext = đích.'},
 {q:'Android 4.3 vs 4.4 về SELinux:',o:['Cả hai enforcing','4.3 mặc định permissive; 4.4 enforcing nhưng chỉ vài domain lõi','4.3 enforcing, 4.4 permissive','Cả hai tắt'],a:1,e:'4.4 là bản đầu tiên enforcing trong release.'},
 {q:'Bốn domain enforcing ở Android 4.4:',o:['init, adbd, zygote, vold','installd, netd, vold, zygote','system_server, app, shell, radio','vold, netd, rild, nfc'],a:1,e:'Các daemon đặc quyền từng bị khai thác leo thang.'},
 {q:'unconfineddomain là gì?',o:['Domain không có quyền','Domain mẫu gần như mọi đặc quyền (trừ nạp policy), làm cha cho nhiều domain','Domain của app','Domain của kernel'],a:1,e:'Domain permissive ở 4.4 đều unconfined.'},
 {q:'Nhờ appdomain, mọi app:',o:['Có quyền root','Có quyền chung cần thiết (fd từ zygote, Binder tới system_server, tạo tệp sandbox…)','Truy cập block device thô','Đổi domain SELinux'],a:1,e:'Các thao tác app không cần bị cấm bằng neverallow.'}
],

order: [
 {id:'o-avc',title:'Luồng quyết định truy cập SELinux',intro:'Sắp xếp theo thứ tự (trường hợp cache không có).',
  items:['Subject yêu cầu hành động (vd ghi tệp)','Object manager hỏi AVC','AVC không có quyết định cache → hỏi security server','Security server tra policy đang nạp','AVC cache quyết định và trả cho object manager','Object manager cho phép hoặc từ chối'],
  explain:'Có cache thì bỏ qua bước 3–5.'},
 {id:'o-boot',title:'init khởi tạo SELinux',intro:'Sắp xếp các bước.',
  items:['init nạp policy từ /sepolicy','Đặt chế độ theo ro.boot.selinux','setcon u:r:init:s0 trong init.rc','ueventd khởi động với seclabel u:r:ueventd:s0','Mount /data và restorecon /data','Daemon khác nhận domain tự động qua type_transition'],
  explain:'Từ nạp policy tới gán domain.'},
 {id:'o-app',title:'Gán context cho tiến trình app',intro:'Sắp xếp theo thứ tự.',
  items:['PackageManagerService so chứng chỉ ký với mac_permissions.xml → seinfo','Lưu seinfo (cột cuối packages.list)','Zygote nhận yêu cầu fork tiến trình app','Zygote tra seapp_contexts theo user/seinfo/tên gói','Tiến trình con nhận context (vd u:r:untrusted_app:s0)','Thư mục dữ liệu app có nhãn type theo luật (app_data_file)'],
  explain:'Chứng chỉ ký → seinfo → domain.'}
],

classify: [
 {id:'c-rule',title:'Loại rule nào?',intro:'Gán mô tả cho loại rule.',buckets:['allow','auditallow','dontaudit','neverallow'],
  items:[
   {t:'Cho vold mount/unmount hệ tệp sdcard',b:0},{t:'Ghi log cả khi thao tác được phép',b:1},{t:'Tắt log từ chối cho sự kiện an toàn',b:2},
   {t:'Chỉ init được nạp policy',b:3},{t:'Có thể che lỗi chương trình',b:2},{t:'Cấm ngay cả khi có rule khác cho phép',b:3}],
  explain:'allow cho · auditallow ghi khi cho · dontaudit im lặng · neverallow cấm tuyệt đối.'},
 {id:'c-file',title:'Tệp cấu hình nào?',intro:'Gán nhiệm vụ cho tệp.',buckets:['file_contexts','property_contexts','seapp_contexts','mac_permissions.xml'],
  items:[
   {t:'Nhãn ban đầu của tệp theo đường dẫn',b:0},{t:'Nhãn của system property',b:1},{t:'Domain cho tiến trình app theo user/seinfo',b:2},
   {t:'Ánh xạ chứng chỉ ký → seinfo',b:3},{t:'Recovery dùng để gán nhãn khi OTA',b:0},{t:'vold.* → vold_prop',b:1}],
  explain:'Mỗi tệp một loại đối tượng cần gán nhãn.'},
 {id:'c-domain',title:'Domain nào?',intro:'Gán mô tả cho domain.',buckets:['installd','netd','vold','zygote'],
  items:[
   {t:'Tạo thư mục dữ liệu app, chown',b:0},{t:'Quản lý định tuyến và lọc gói',b:1},{t:'Mount bộ nhớ ngoài và ASEC',b:2},
   {t:'Đặt UID/GID, capabilities của tiến trình app',b:3},{t:'Có capability dac_override, chown',b:0},{t:'Có quyền mount trên sdcard_type',b:2}],
  explain:'Bốn domain enforcing của Android 4.4.'}
],

cheat: [
 {title:'🧱 DAC vs MAC',html:'<ul><li>DAC: chủ tự quyết, root tuyệt đối</li><li>MAC: policy toàn hệ thống</li><li>DAC hỏi trước; từ chối = cuối cùng</li></ul>'},
 {title:'🏗 Kiến trúc',html:'<div class="mnemo">OM → AVC → Security Server → Policy</div><ul><li>LSM hook</li><li>Chế độ: disabled / permissive / enforcing</li></ul>'},
 {title:'🧩 Context',html:'<div class="mnemo">u : r : type : s0</div><ul><li>Chỉ type thực dụng</li><li>Tệp: xattr security.selinux</li><li>ps -Z / ls -Z</li></ul>'},
 {title:'📜 Rule',html:'<ul><li>rule nguồn đích : lớp { quyền };</li><li>allow · auditallow · dontaudit · neverallow</li><li>type_transition; init_daemon_domain</li></ul>'},
 {title:'🏷 Nhãn',html:'<ul><li>file_contexts · property_contexts · seapp_contexts</li><li>mac_permissions.xml → seinfo</li><li>/sepolicy</li></ul>'},
 {title:'🤖 Lịch sử',html:'<ul><li>4.2 tắt khi build · 4.3 permissive · 4.4 enforcing</li><li>Enforcing: installd, netd, vold, zygote</li><li>4.4.3: bỏ cập nhật policy tại chỗ</li></ul>'},
 {title:'🌐 Domain',html:'<ul><li>unconfineddomain: gần mọi đặc quyền</li><li>appdomain → untrusted_app…</li><li>4.4: app domain permissive</li></ul>'}
]
};
