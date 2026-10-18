CH[4] = {
sections: [

{id:'overview', icon:'👥', title:'Tổng quan hỗ trợ nhiều người dùng', html:`
<p>Android ban đầu giả định <b>một thiết bị = một người dùng</b>. Khi tablet phổ biến, <b>Android 4.2</b> thêm hỗ trợ nhiều người dùng: mỗi người có <b>môi trường riêng biệt</b> – màn hình chính, widget, ứng dụng, tài khoản online và tệp riêng, không ai truy cập được của nhau.</p>
<ul>
<li>Người dùng được định danh bằng <b>user ID</b> (<i>không phải</i> Linux UID). Chỉ <b>hệ thống</b> mới chuyển đổi người dùng, thường chọn từ <b>màn hình khóa</b> (có thể kèm PIN/mật khẩu).</li>
<li>App lấy thông tin người dùng qua API <code>UserManager</code>; thường <b>không cần sửa code</b> để chạy đa người dùng (trừ khi cần xử lý <i>restricted profile</i>).</li>
<li>Tính năng có sẵn trong lõi từ 4.2, nhưng cấu hình mặc định chỉ cho <b>1 người dùng</b> (tức tắt). Bật bằng tài nguyên <code>config_multiuserMaximumUsers</code> &gt; 1 trong overlay của thiết bị (vd Nexus 7 2013 đặt 8).</li>
</ul>
<pre>&lt;integer name="config_multiuserMaximumUsers"&gt;<span class="h">8</span>&lt;/integer&gt;</pre>
<div class="callout c-warn"><b>Điện thoại không bật đa người dùng</b>Tài liệu Android Compatibility Definition (CDD) yêu cầu thiết bị có <b>telephony</b> không được bật multi-user vì hành vi telephony với nhiều người dùng “chưa được định nghĩa”. Nên mọi handset đều cấu hình 1 người dùng; chỉ tablet được dùng.</div>
<div class="analogy">Thiết bị giống <b>một tòa nhà chung cư</b>: mỗi người dùng một căn hộ (dữ liệu, tài khoản, cài đặt riêng), nhưng <b>hệ thống điện nước</b> (APK, Wi-Fi, kernel) là chung.</div>
`},

{id:'types', icon:'🎭', title:'Các loại người dùng', html:`
<p>Android không có quản lý người dùng đầy đủ (nhiều admin, nhóm…) nhưng có vài <b>loại người dùng</b> với đặc quyền khác nhau. <b>Bấm vào từng loại:</b></p>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="👑 Primary user (Owner)" data-desc="<ul><li>Người dùng <b>đầu tiên</b> (hoặc duy nhất), luôn tồn tại, <b>user ID = 0</b>.</li><li>Có mọi đặc quyền: tạo/xóa người dùng và đổi cài đặt ảnh hưởng toàn máy (bảo mật, mạng, quản lý app).</li><li>Cơ chế: chỉ hiện màn hình cài đặt cho owner + các dịch vụ hệ thống <b>kiểm tra danh tính người gọi</b>.</li><li>Máy 1 người dùng: UID/thư mục app y như các bản Android cũ (tương thích ngược).</li></ul><p>Màn hình chỉ owner thấy (4.4): <i>Cell broadcasts, Manage mobile plan, Mobile network, Tethering, VPN, WiMAX</i>; và trong Security: <i>Device encryption, SIM card lock, Unknown sources, Verify apps</i>.</p>"><span>Primary (Owner)</span><small>ID 0 · toàn quyền</small></button>
  <button class="layer" data-c="2" data-title="🧑 Secondary user" data-desc="<ul><li>Mọi người dùng thêm vào (trừ restricted profile).</li><li>Có thư mục hệ thống riêng, danh sách app riêng và thư mục dữ liệu app riêng.</li><li><b>Không</b> thêm/quản lý người dùng; chỉ đổi tên của mình. Không làm được thao tác đặc quyền của owner.</li><li>Nhưng vẫn cài app, đổi giao diện/cài đặt.</li></ul><p><b>Tác động chéo:</b> kết nối Wi-Fi là trạng thái toàn hệ thống (người này chọn mạng thì người sau vẫn dùng); có thể bật airplane mode, NFC, đổi âm thanh/màn hình toàn cục; và nếu cập nhật app thêm quyền mới thì <b>quyền áp dụng cho mọi người dùng</b> mà không hỏi họ.</p>"><span>Secondary user</span><small>ID ≥ 10 · riêng biệt</small></button>
  <button class="layer" data-c="3" data-title="🔒 Restricted profile (từ Android 4.3)" data-desc="<ul><li><b>Dựa trên owner</b>: dùng chung ứng dụng, dữ liệu, tài khoản của owner, nhưng bị <b>hạn chế</b>.</li><li>Owner phải đặt <b>mật khẩu màn hình khóa</b> trước (nếu chưa, hệ thống bắt đặt).</li><li>Mặc định mọi app bị <b>tắt</b>; owner bật từng app cho profile.</li><li>Cờ: FLAG_INITIALIZED | FLAG_RESTRICTED.</li></ul><p>Dùng cho trẻ em, khách… với kiểm soát chi tiết.</p>"><span>Restricted profile</span><small>giới hạn, dựa trên owner</small></button>
  <button class="layer" data-c="4" data-title="🧳 Guest user" data-desc="<p>Hỗ trợ <b>một</b> guest, nhưng <b>tắt mặc định</b>, bật bằng <code>UserManager.setGuestEnabled()</code>. Gần như chỉ được tham chiếu trong <code>UserManager</code> và lớp liên quan; mục đích chưa rõ – có vẻ là tàn dư của tính năng bị từ chối hoặc chưa hoàn thiện.</p>"><span>Guest</span><small>tắt, ít dùng</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một loại người dùng.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Owner = 0 · Phụ ≥ 10 · Restricted = “đi nhờ” owner</div></div>
<h3>Cờ (flags) xác định loại người dùng</h3>
<table>
<tr><th>Cờ</th><th>Giá trị</th><th>Ý nghĩa</th></tr>
<tr><td>FLAG_PRIMARY</td><td>0x01</td><td>Người dùng chính</td></tr>
<tr><td>FLAG_ADMIN</td><td>0x02</td><td>Quản trị: tạo/xóa người dùng</td></tr>
<tr><td>FLAG_GUEST</td><td>0x04</td><td>Khách</td></tr>
<tr><td>FLAG_RESTRICTED</td><td>0x08</td><td>Restricted profile</td></tr>
<tr><td>FLAG_INITIALIZED</td><td>0x10</td><td>Đã khởi tạo xong</td></tr>
</table>
<div class="cards">
 <div class="mini g"><h4>Owner</h4><p>INITIALIZED | ADMIN | PRIMARY<br><b>0x13 = 19</b></p></div>
 <div class="mini b"><h4>Secondary</h4><p>INITIALIZED<br><b>0x10 = 16</b></p></div>
 <div class="mini a"><h4>Restricted</h4><p>INITIALIZED | RESTRICTED<br><b>0x18 = 24</b></p></div>
</div>
`},

{id:'restrict', icon:'🚧', title:'Hạn chế (restrictions) & truy cập tài khoản', html:`
<p>Android định nghĩa các <b>user restriction</b> dạng key → boolean (mặc định đều <b>false</b>). Giá trị trong ngoặc là mặc định của <b>restricted profile</b>:</p>
<table>
<tr><th>Restriction</th><th>Ngăn người dùng…</th><th>Restricted</th></tr>
<tr><td>DISALLOW_CONFIG_BLUETOOTH</td><td>cấu hình Bluetooth</td><td>false</td></tr>
<tr><td>DISALLOW_CONFIG_CREDENTIALS</td><td>cấu hình thông tin xác thực (thêm CA tin cậy, nhập khóa riêng)</td><td>false</td></tr>
<tr><td>DISALLOW_CONFIG_WIFI</td><td>đổi điểm truy cập Wi-Fi</td><td>false</td></tr>
<tr><td>DISALLOW_INSTALL_APPS</td><td>cài ứng dụng</td><td>false</td></tr>
<tr><td>DISALLOW_INSTALL_UNKNOWN_SOURCES</td><td>bật “Unknown sources”</td><td>false</td></tr>
<tr><td>DISALLOW_MODIFY_ACCOUNTS</td><td>thêm/xóa tài khoản</td><td><b>true</b></td></tr>
<tr><td>DISALLOW_REMOVE_USER</td><td>xóa người dùng</td><td>false</td></tr>
<tr><td>DISALLOW_SHARE_LOCATION</td><td>bật/tắt chia sẻ vị trí</td><td><b>true</b></td></tr>
<tr><td>DISALLOW_UNINSTALL_APPS</td><td>gỡ ứng dụng</td><td>false</td></tr>
<tr><td>DISALLOW_USB_FILE_TRANSFER</td><td>chuyển tệp qua USB</td><td>false</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b>Restricted profile mặc định chỉ có <b>2</b> restriction bật: <span class="mnemo" style="display:inline-block">MODIFY_ACCOUNTS + SHARE_LOCATION</span> (không đổi tài khoản, không chia sẻ vị trí).</div>
<h3>Cách áp dụng</h3>
<ul>
<li><code>UserManager.getUserRestrictions()</code> trả về <code>Bundle</code> (key → bool). App dùng để vô hiệu hóa tính năng. VD Settings kiểm <code>DISALLOW_SHARE_LOCATION</code>; PackageManagerService kiểm <code>DISALLOW_INSTALL_APPS/UNINSTALL_APPS</code> và trả <code>INSTALL_FAILED_USER_RESTRICTED</code>.</li>
<li>Owner chọn app nào dùng được trong restricted profile: khi tạo, <b>mọi app bị tắt</b> – owner phải bật từng app.</li>
<li><b>Restriction tùy chỉnh</b>: app tạo <code>BroadcastReceiver</code> nhận <code>ACTION_GET_RESTRICTION_ENTRIES</code>; Android tự dựng giao diện bật/tắt. Đọc bằng <code>UserManager.getApplicationRestrictions()</code>.</li>
</ul>
<h3>Truy cập tài khoản online</h3>
<p>Restricted profile có thể dùng tài khoản của owner qua <code>AccountManager</code> nhưng <b>tắt mặc định</b>. Hai thuộc tính trong thẻ <code>&lt;application&gt;</code>:</p>
<div class="compare">
 <div class="mini g"><h4>restrictedAccountType</h4><p>App <b>xin</b> dùng loại tài khoản của owner trong restricted profile. VD <code>android:restrictedAccountType="com.google"</code>.</p></div>
 <div class="mini r"><h4>requiredAccountType</h4><p>App <b>không muốn</b> lộ thông tin tài khoản: Android <b>tự tắt</b> app trong restricted profile. Dấu <code>*</code> = mọi loại. Ví dụ: Calendar khai báo <code>"*"</code> nên bị vô hiệu.</p></div>
</div>
`},

{id:'manager', icon:'🛠', title:'UserManagerService, lệnh pm và trạng thái người dùng', html:`
<ul>
<li><b>UserManagerService</b>: đọc/lưu thông tin người dùng, giữ danh sách người dùng đang chạy. PackageManagerService gọi nó khi cài/gỡ gói.</li>
<li><b>android.os.UserManager</b>: lớp “mặt tiền” cho app. Không cần quyền đặc biệt để hỏi: số người dùng, serial number, tên + restrictions của người dùng hiện tại, restrictions của một gói.</li>
<li>Mọi thao tác khác (liệt kê, thêm, xóa, sửa người dùng) cần quyền signature <code>MANAGE_USERS</code>.</li>
</ul>
<h3>Công cụ dòng lệnh <code>pm</code></h3>
<p>Chạy được từ shell <b>không cần root</b>, vì shell (UID 2000) được cấp <code>MANAGE_USERS</code>.</p>
<pre>pm create-user &lt;tên&gt;     pm remove-user &lt;id&gt;
pm get-max-users         pm list users

$ pm list users
UserInfo{0:Owner:13}       <span class="c">// {id:tên:flags (hex)}</span>
UserInfo{10:User1:10}
UserInfo{13:Profile1:18}</pre>
<h3>Trạng thái người dùng & broadcast</h3>
<div class="cards">
 <div class="mini g"><h4>Tối đa 8 người dùng</h4><p>…nhưng chỉ <b>3 người dùng chạy cùng lúc</b>. Người dùng được khởi động khi lần đầu chuyển sang; người ít dùng nhất bị dừng theo thuật toán <b>LRU</b>.</p></div>
 <div class="mini b"><h4>Khi bị dừng</h4><p>Tiến trình bị kill, không nhận broadcast nữa. <b>Primary</b> tự khởi động lúc boot và <b>không bao giờ bị dừng</b>.</p></div>
</div>
<table>
<tr><th>Sự kiện</th><th>Broadcast</th></tr>
<tr><td>Thêm / xóa / đổi thông tin</td><td><code>USER_ADDED</code> · <code>USER_REMOVED</code> · <code>USER_INFO_CHANGED</code></td></tr>
<tr><td>Chuyển người dùng</td><td><code>USER_BACKGROUND</code> · <code>USER_FOREGROUND</code> · <code>USER_SWITCHED</code> (kèm user ID)</td></tr>
<tr><td>Khởi động / dừng</td><td><code>USER_STARTING</code> · <code>USER_STARTED</code> · <code>USER_STOPPING</code> · <code>USER_STOPPED</code></td></tr>
</table>
<ul>
<li>Start/stop/switch hoặc gửi broadcast tới một người dùng cần <code>INTERACT_ACROSS_USERS</code> – mức <b>signature + development</b> nên có thể cấp động cho app không phải hệ thống bằng <code>pm grant</code> (chương 2).</li>
<li><code>INTERACT_ACROSS_USERS_FULL</code> (signature) cho phép gửi broadcast cho <b>mọi</b> người dùng, đổi device administrator…</li>
</ul>
`},

{id:'metadata', icon:'🗂', title:'Siêu dữ liệu người dùng trên đĩa', html:`
<p>Tất cả nằm trong <code>/data/system/users/</code>:</p>
<pre>/data/system/users/
├── userlist.xml          <span class="c">← danh sách mọi người dùng</span>
├── 0.xml     0/          <span class="c">← metadata + thư mục hệ thống của owner</span>
├── 10.xml    10/
├── 11.xml    11/
└── 13.xml    13/</pre>
<pre>&lt;users nextSerialNumber="19" version="4"&gt;
  &lt;user id="0" /&gt; &lt;user id="10" /&gt; ... &lt;user id="13" /&gt;
&lt;/users&gt;</pre>
<ul>
<li>Owner luôn có ID <b>0</b>; người dùng phụ và restricted profile bắt đầu từ <b>10</b>.</li>
<li>Nhờ UID app tính theo user ID, nên máy 1 người dùng giữ nguyên UID app như trước khi có multi-user.</li>
</ul>
<h3>File metadata của từng người dùng</h3>
<pre>&lt;user id="13" serialNumber="18" <span class="h">flags="24"</span> created="1394551856450"
      lastLoggedIn="1394551882324" icon="/data/system/users/13/photo.png"&gt;
  &lt;name&gt;Profile1&lt;/name&gt;
  &lt;restrictions no_modify_accounts="true" no_share_location="true" /&gt;
&lt;/user&gt;</pre>
<table>
<tr><th>Thuộc tính</th><th>Ý nghĩa</th></tr>
<tr><td>id / serialNumber</td><td>ID người dùng / số serial</td></tr>
<tr><td>flags</td><td>Loại người dùng</td></tr>
<tr><td>created / lastLoggedIn</td><td>Thời điểm tạo / đăng nhập gần nhất (ms)</td></tr>
<tr><td>icon</td><td>Đường dẫn ảnh đại diện</td></tr>
<tr><td>partial</td><td>Người dùng chưa khởi tạo đầy đủ</td></tr>
<tr><td>pinHash / salt</td><td>Băm SHA1+MD5 có salt của PIN bảo vệ restriction</td></tr>
<tr><td>failedAttempts / lastAttemptMs</td><td>Số lần nhập PIN sai / thời điểm lần thử cuối</td></tr>
</table>
<h3>Thư mục hệ thống của người dùng (không chứa dữ liệu app)</h3>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>accounts.db</h4><p>CSDL SQLite chứa tài khoản online của người dùng (chương 8).</p>">accounts.db</button>
  <button class="chip" data-info="<h4>appwidgets.xml</h4><p>Các widget người dùng đã thêm vào màn hình chính.</p>">appwidgets.xml</button>
  <button class="chip" data-info="<h4>device_policies.xml</h4><p>Chính sách thiết bị hiện hành (device administration, chương 9).</p>">device_policies.xml</button>
  <button class="chip" data-info="<h4>gesture.key / password.key</h4><p>Băm của mẫu hình (pattern) / PIN-mật khẩu khóa màn hình (chương 10).</p>">gesture.key · password.key</button>
  <button class="chip" data-info="<h4>package-restrictions.xml</h4><p>Quyết định <b>app nào được cài/bật</b> cho người dùng này và trạng thái của chúng (xem phần chia sẻ ứng dụng).</p>">package-restrictions.xml</button>
  <button class="chip" data-info="<h4>settings.db</h4><p>Cài đặt hệ thống riêng của người dùng.</p>">settings.db</button>
  <button class="chip" data-info="<h4>inputmethod/, photo.png, wallpaper</h4><p>Thông tin bộ gõ, ảnh đại diện và hình nền hiện tại.</p>">inputmethod · photo · wallpaper</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một tệp.</p></div>
</div>
`},

{id:'apps', icon:'📱', title:'Ứng dụng theo từng người dùng', html:`
<p>Mỗi người dùng có <b>bản sao dữ liệu riêng</b> của app; Android đạt được bằng cách gán <b>UID hiệu lực riêng</b> cho app của từng người dùng và tạo thư mục dữ liệu thuộc UID đó.</p>
<h3>Thư mục dữ liệu</h3>
<ul>
<li>Owner: vẫn <code>/data/data/</code> (tương thích ngược).</li>
<li>Người dùng khác: <code>/data/user/&lt;userId&gt;/</code>. Thư mục <code>/data/user/0</code> là <b>symlink</b> tới <code>/data/data/</code>.</li>
<li>Khi cài app mà đã có nhiều người dùng, PMS nhờ installd (lệnh <code>mkuserdata</code>) tạo thư mục cho từng người dùng.</li>
</ul>
<pre>/data/data/com.android.browser       <span class="c">chủ: </span><span class="h">u0_a16</span>
/data/user/13/com.android.browser    <span class="c">chủ: </span><span class="h">u13_a16</span></pre>
<h3>Công thức UID</h3>
<div class="callout c-tip"><b>uid = userId × 100000 + (appId % 100000)</b></div>
<p>Thử ngay: bạn sẽ thấy browser của owner (UID 10016) và của user 13 (UID 1310016) là hai tiến trình, hai sandbox khác nhau.</p>
<div class="sim" data-uidcalc></div>
<div class="analogy">App giống <b>cùng một mẫu căn hộ</b> trong nhiều tòa nhà (người dùng): bản thiết kế (APK) chỉ lưu một lần nhưng mỗi tòa có khóa và tủ đồ riêng.</div>

<h3>Chia sẻ APK giữa các người dùng</h3>
<ul>
<li><b>APK</b> trong /data/app/ (world-readable), <b>thư viện native</b> (/data/app-lib/ symlink vào /data/user/&lt;id&gt;/&lt;gói&gt;/lib), và <b>DEX tối ưu</b> (/data/dalvik-cache/) dùng chung → tiết kiệm đĩa.</li>
<li>Mỗi người dùng có <code>package-restrictions.xml</code> để biết app nào <b>được bật</b> cho mình.</li>
</ul>
<pre>&lt;package-restrictions&gt;
  &lt;pkg name="com.example.app" <span class="h">inst="false"</span> stopped="true" nl="true" /&gt;
  &lt;pkg name="com.example.app2" stopped="true" nl="true" /&gt;
  &lt;pkg name="com.android.settings"&gt;
    &lt;disabled-components&gt;&lt;item name="...CryptKeeper" /&gt;&lt;/disabled-components&gt;
  &lt;/pkg&gt;
  &lt;preferred-activities /&gt;
&lt;/package-restrictions&gt;</pre>
<table>
<tr><th>Thuộc tính</th><th>Ý nghĩa</th></tr>
<tr><td><code>inst="false"</code></td><td>App có trên máy nhưng <b>chưa cài cho người dùng này</b> (không hiện trong launcher/Settings)</td></tr>
<tr><td><code>stopped="true"</code></td><td>Đã cài nhưng đang ở trạng thái stopped</td></tr>
<tr><td><code>nl="true"</code></td><td>Chưa bao giờ được khởi chạy (“not launched”)</td></tr>
<tr><td><code>blocked="true"</code></td><td>Owner chặn gói với người dùng này</td></tr>
<tr><td><code>&lt;disabled-components&gt;</code></td><td>Thành phần bị tắt</td></tr>
<tr><td><code>&lt;preferred-activities&gt;</code></td><td>App ưu tiên mở khi nhiều app xử lý cùng intent</td></tr>
</table>
<h3>Cài / gỡ nhiều người dùng</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Người dùng A cài app</b>APK vào /data/app/; <code>package-restrictions.xml</code> của <b>mọi người dùng khác</b> được thêm <code>inst="false"</code>.</div>
 <div class="step"><b>Người dùng B cài cùng app</b>Thuộc tính <code>inst</code> bị gỡ → app “đã cài” cho B (tùy cách cài mà APK có thể bị ghi đè như cập nhật).</div>
 <div class="step"><b>Restricted profile</b>Không tự cài; khi owner bật app, gọi <code>installExistingPackageAsUser()</code> để đặt cờ installed.</div>
 <div class="step"><b>Một người dùng gỡ app</b>Xóa dữ liệu của họ, đặt <code>inst="false"</code>. APK và thư viện native chỉ bị xóa khi <b>người dùng cuối cùng</b> gỡ.</div>
 <div class="step"><b>Owner “Uninstall for all users”</b>Có cảnh báo; nếu OK, xóa thư mục dữ liệu mọi người và xóa APK.</div>
</div>
<div class="callout c-danger"><b>⚠ Điểm yếu của mô hình chia sẻ</b>Vì APK dùng chung, <b>bất kỳ người dùng nào cũng cập nhật được app</b>. Nếu bản cập nhật thêm quyền nhạy cảm (vd READ_CONTACTS) và người cập nhật chấp nhận, quyền áp dụng cho <b>mọi người dùng</b>, những người còn lại <b>không được thông báo</b> (chỉ có cảnh báo chung khi bật multi-user lần đầu).</div>
`},

{id:'storage', icon:'💾', title:'Bộ nhớ ngoài đa người dùng', html:`
<h3>“External storage” không nhất thiết là thẻ SD</h3>
<p>Định nghĩa: hệ tệp <b>không phân biệt hoa thường</b> với <b>quyền POSIX cố định</b>. Máy đời mới thường <b>giả lập</b> external storage (có thể không có khe SD).</p>
<p>Từ Android 4.4, app có thể tự quản lý thư mục riêng <code>Android/data/&lt;gói&gt;/</code> trên external storage <b>không cần</b> <code>WRITE_EXTERNAL_STORAGE</code> (“synthesized permissions”). Triển khai dựa trên daemon <b>FUSE</b> bọc lấy kho lưu trữ thô và quản lý quyền truy cập.</p>
<div class="callout c-info"><b>FUSE là gì?</b>Filesystem in Userspace: module kernel chung chuyển mọi lời gọi VFS cho một chương trình userspace (qua <code>/dev/fuse</code>) để nó tự hiện thực hệ tệp.</div>
<p>Yêu cầu CDD: <b>mỗi người dùng phải có thư mục external storage riêng, cô lập</b>. Khó vì external storage vốn world-readable dùng FAT (không có quyền). Google giải quyết bằng 3 tính năng kernel Linux:</p>
<div class="cards">
 <div class="mini g"><span class="em">🔭</span><h4>Mount namespace</h4><p>Mỗi tiến trình có <b>tập mount point riêng</b> (<code>CLONE_NEWNS</code> với <code>clone()</code>/<code>unshare()</code>) nên thấy cây thư mục khác nhau.</p></div>
 <div class="mini b"><span class="em">🔗</span><h4>Bind mount</h4><p>Gắn một thư mục/tệp vào <b>đường dẫn khác</b> (<code>MS_BIND</code>) – cùng nội dung hiện ở nhiều nơi.</p></div>
 <div class="mini v"><span class="em">📡</span><h4>Shared subtree</h4><p>Điều khiển cách mount <b>lan truyền</b> giữa namespace. Android dùng <b>shared</b> và <b>slave</b>: slave nhận mount từ master nhưng mount của slave <b>không lan ngược</b>.</p></div>
</div>
<h3>Cách Android 4.4 làm (cấu hình dùng /data/media)</h3>
<ul>
<li>Daemon <code>sdcard</code> (FUSE) chạy với UID/GID <code>media_rw</code> (1023), lấy nguồn <code>/data/media/</code> và tạo hệ tệp ảo ở <code>/mnt/shell/emulated</code> (chỉ shell truy cập, mode 0700).</li>
<li>Mỗi người dùng một thư mục con tên theo user ID (0, 10, 11…) cùng <code>legacy</code> và <code>obb</code>.</li>
<li>Biến môi trường: <code>EMULATED_STORAGE_SOURCE</code> (/mnt/shell/emulated), <code>EMULATED_STORAGE_TARGET</code> (/storage/emulated), <code>EXTERNAL_STORAGE</code> (/storage/emulated/legacy). <code>/sdcard</code> là symlink tới legacy để tương thích.</li>
</ul>
<h3>Thiết lập theo hai giai đoạn (bấm chạy)</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Giai đoạn 1 – trong zygote (chung cho mọi app)</b><code>unshare(CLONE_NEWNS)</code> tạo namespace riêng của zygote.</div>
 <div class="step"><b>Đánh dấu rootfs là slave</b><code>mount("rootfs","/",…, MS_SLAVE|MS_REC)</code>: thay đổi từ namespace mặc định (container mã hóa, thẻ rời) chảy xuống con, nhưng mount của con <b>không lan ngược</b>.</div>
 <div class="step"><b>Tạo tmpfs</b>Dựng tmpfs tại <code>EMULATED_STORAGE_TARGET</code> (/storage/emulated) làm chỗ để các app bind mount.</div>
 <div class="step"><b>Giai đoạn 2 – mỗi app lúc specialize</b>Từ UID lấy <b>userId</b>, rồi <code>unshare(CLONE_NEWNS)</code> lần nữa → namespace riêng của app.</div>
 <div class="step"><b>Bind mount thư mục của người dùng</b><code>/mnt/shell/emulated/&lt;id&gt;</code> → <code>/storage/emulated/&lt;id&gt;</code>.</div>
 <div class="step"><b>Bind mount (đệ quy) tới legacy</b><code>/storage/emulated/&lt;id&gt;</code> → <code>/storage/emulated/legacy</code> (nên <code>/sdcard</code> của mỗi app trỏ vào kho của đúng người dùng).</div>
</div>
<p><b>Kết quả:</b> tiến trình của owner chỉ có mount <code>/storage/emulated/0</code>; tiến trình của user 10 chỉ có <code>/storage/emulated/10</code>. Cả hai đều có <code>/storage/emulated/legacy</code> nhưng trỏ tới hai nơi khác nhau; còn <code>/mnt/shell/emulated</code> thấy được nhưng 0700 cho shell nên app không đọc được nội dung.</p>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Zygote: chia chung (slave + tmpfs) → App: chia riêng (namespace + bind mount)</div></div>

<h3>Quyền trên external storage (do FUSE gán cố định)</h3>
<p>Để giả lập FAT: chủ/nhóm/quyền do daemon quyết định; <b>không đổi được</b>, không hỗ trợ symlink/hardlink. Tùy <b>chế độ suy ra quyền (permission derivation)</b>:</p>
<div class="compare">
 <div class="mini a"><h4>Legacy (-l) – mặc định 4.4</h4><p>Hầu hết tệp: chủ <code>root</code>, nhóm <code>sdcard_r</code>. App có <code>READ_EXTERNAL_STORAGE</code> thuộc nhóm <code>sdcard_r</code> nên đọc được hầu hết tệp, kể cả của app khác. Riêng thư mục <code>Android/data/&lt;gói&gt;/</code> thuộc app tạo ra nên không cần WRITE_EXTERNAL_STORAGE – nhưng nhóm vẫn là sdcard_r nên app có quyền READ/WRITE vẫn truy cập được.</p></div>
 <div class="mini g"><h4>Theo cấu trúc thư mục (-d)</h4><p>Gán nhóm riêng: <code>Pictures/</code> → <code>sdcard_pics</code>, <code>Music/</code> → <code>sdcard_av</code>; thư mục người dùng nằm dưới <code>Android/user/</code>. Cho phép kiểm soát mịn (cần thêm quyền ánh xạ vào các nhóm này). Hỗ trợ ở 4.4 nhưng Nexus vẫn dùng legacy.</p></div>
</div>
`},

{id:'other', icon:'🧩', title:'Các tính năng khác hỗ trợ đa người dùng', html:`
<p>Từ Android 4.4 nhiều tính năng đã “nhận biết” người dùng:</p>
<div class="cards">
 <div class="mini g"><span class="em">🔑</span><h4>Credential storage</h4><p>Mỗi người dùng có kho khóa riêng (chương 7).</p></div>
 <div class="mini b"><span class="em">👤</span><h4>Tài khoản online</h4><p>Người dùng phụ có tài khoản riêng; restricted profile chia sẻ một số tài khoản của owner nếu app hỗ trợ (chương 8).</p></div>
 <div class="mini a"><span class="em">🏢</span><h4>Chính sách thiết bị</h4><p>Có thể đặt device administration khác nhau cho từng người dùng (chương 9).</p></div>
 <div class="mini v"><span class="em">🛡</span><h4>VPN theo người dùng</h4><p>VPN chỉ định tuyến traffic của <b>một</b> người dùng và người khác không truy cập được.</p></div>
</div>
`}

],

cards: [
 {f:'Android hỗ trợ nhiều người dùng từ phiên bản nào?',b:'<b>Android 4.2</b> (mở rộng ở các bản sau). Mặc định vẫn chỉ 1 người dùng.'},
 {f:'User ID khác Linux UID thế nào?',b:'User ID định danh người dùng vật lý (0, 10, 11…); Linux UID là định danh tiến trình/app. UID app được tính từ cả hai.'},
 {f:'Bật multi-user bằng cách nào?',b:'Đặt tài nguyên <code>config_multiuserMaximumUsers</code> &gt; 1 trong overlay cấu hình của thiết bị (vd Nexus 7 2013 = 8).'},
 {f:'Vì sao điện thoại không bật multi-user?',b:'CDD: hành vi telephony với nhiều người dùng “chưa được định nghĩa” → thiết bị có telephony phải để 1 người dùng; chỉ tablet.'},
 {f:'Primary user (Owner) có đặc điểm gì?',b:'Người dùng đầu tiên/duy nhất, <b>user ID 0</b>, luôn tồn tại, toàn quyền: tạo/xóa người dùng, đổi cài đặt toàn máy; luôn chạy và không bị dừng.'},
 {f:'Cơ chế nào giới hạn đặc quyền owner?',b:'(1) Chỉ hiển thị các màn hình cài đặt cho owner; (2) system service kiểm tra danh tính người gọi trước thao tác ảnh hưởng toàn máy.'},
 {f:'Kể vài màn hình chỉ owner thấy (4.4).',b:'VPN, Tethering, Mobile network; trong Security: Device encryption, SIM card lock, Unknown sources, Verify apps.'},
 {f:'Secondary user làm được/không làm được gì?',b:'Không thêm/quản lý người dùng, không làm việc đặc quyền của owner; làm được mọi thứ còn lại (cài app, đổi cài đặt). Nhưng tác động chéo: Wi-Fi, airplane, NFC, âm thanh/màn hình, và quyền app cập nhật.'},
 {f:'Restricted profile là gì? Điều kiện?',b:'Từ 4.3, dựa trên owner: dùng chung app/dữ liệu/tài khoản nhưng bị hạn chế. Owner phải đặt <b>mật khẩu khóa màn hình</b>. Mặc định mọi app bị tắt.'},
 {f:'Restricted profile có những restriction mặc định nào bật?',b:'Chỉ <code>DISALLOW_MODIFY_ACCOUNTS</code> và <code>DISALLOW_SHARE_LOCATION</code> = true.'},
 {f:'Lấy restriction của người dùng bằng API nào? Lỗi khi vi phạm lúc cài app?',b:'<code>UserManager.getUserRestrictions()</code> → Bundle. PMS trả <code>INSTALL_FAILED_USER_RESTRICTED</code> nếu DISALLOW_INSTALL_APPS/UNINSTALL_APPS bật.'},
 {f:'App tạo restriction tùy chỉnh thế nào?',b:'Tạo BroadcastReceiver nhận <code>ACTION_GET_RESTRICTION_ENTRIES</code>; đọc giá trị bằng <code>getApplicationRestrictions()</code>.'},
 {f:'restrictedAccountType và requiredAccountType?',b:'<b>restrictedAccountType</b>: app xin dùng tài khoản của owner trong restricted profile. <b>requiredAccountType</b>: app không muốn lộ tài khoản → tự bị tắt trong restricted profile (vd Calendar với "*").'},
 {f:'Guest user trong Android 4.4?',b:'Hỗ trợ 1 guest, tắt mặc định (<code>setGuestEnabled()</code>); mục đích không rõ, có vẻ là tính năng chưa hoàn thiện.'},
 {f:'UserManagerService vs UserManager?',b:'Service: đọc/lưu người dùng, danh sách active. UserManager: facade cho app. Quản lý người dùng đầy đủ cần quyền signature <code>MANAGE_USERS</code>.'},
 {f:'Vì sao shell chạy được pm create-user không cần root?',b:'Shell (UID 2000) được cấp quyền <code>MANAGE_USERS</code>.'},
 {f:'Bao nhiêu người dùng tối đa và chạy cùng lúc?',b:'Tối đa <b>8</b>; chỉ <b>3</b> chạy đồng thời. Người ít dùng nhất (LRU) bị dừng.'},
 {f:'Khi người dùng bị dừng thì sao?',b:'Tiến trình bị kill và không nhận broadcast. Primary khởi động khi boot, không bao giờ bị dừng.'},
 {f:'Quyền INTERACT_ACROSS_USERS có gì đặc biệt?',b:'Signature + cờ development → có thể cấp bằng <code>pm grant</code> cho app thường. Dùng để start/stop/switch người dùng, gửi broadcast tới người dùng cụ thể. Bản _FULL cho phép gửi tới mọi người dùng.'},
 {f:'userlist.xml chứa gì?',b:'Danh sách <code>&lt;user id=…/&gt;</code> mọi người dùng, thuộc tính <code>nextSerialNumber</code> và <code>version</code>.'},
 {f:'Các cờ người dùng (flags)?',b:'PRIMARY 0x1 · ADMIN 0x2 · GUEST 0x4 · RESTRICTED 0x8 · INITIALIZED 0x10. Owner=19 (0x13), secondary=16, restricted=24.'},
 {f:'Owner, secondary, restricted có flags là bao nhiêu?',b:'Owner <b>19</b> (INITIALIZED|ADMIN|PRIMARY); Secondary <b>16</b>; Restricted <b>24</b> (INITIALIZED|RESTRICTED).'},
 {f:'ID bắt đầu của người dùng phụ?',b:'<b>10</b> (owner luôn 0).'},
 {f:'Thư mục hệ thống người dùng chứa gì?',b:'accounts.db, appwidgets.xml, device_policies.xml, gesture.key/password.key, inputmethod/, package-restrictions.xml, photo.png, settings.db, wallpaper – <b>không</b> chứa dữ liệu app.'},
 {f:'Dữ liệu app của người dùng khác owner nằm đâu?',b:'<code>/data/user/&lt;userId&gt;/&lt;gói&gt;/</code>; <code>/data/user/0</code> là symlink tới <code>/data/data/</code>.'},
 {f:'Công thức tính UID app đa người dùng?',b:'<code>uid = userId * 100000 + (appId % 100000)</code>. VD browser: owner 10016 (u0_a16), user 13 → 1310016 (u13_a16).'},
 {f:'Phần nào của app được chia sẻ giữa các người dùng?',b:'APK (/data/app), thư viện native (/data/app-lib), DEX tối ưu (/data/dalvik-cache). Không chia sẻ thư mục dữ liệu.'},
 {f:'package-restrictions.xml ghi gì? Giải thích inst, stopped, nl.',b:'Trạng thái app cho từng người dùng. <code>inst="false"</code>: chưa cài cho người này; <code>stopped</code>: ở trạng thái stopped; <code>nl</code>: chưa từng chạy. Cũng có disabled-components và preferred-activities.'},
 {f:'Khi nào APK thực sự bị xóa?',b:'Khi người dùng cuối cùng gỡ, hoặc owner chọn “Uninstall for all users”.'},
 {f:'Rủi ro của app chia sẻ giữa người dùng?',b:'Bất kỳ ai cũng cập nhật được app; nếu thêm quyền nhạy cảm, nó áp dụng cho <b>mọi</b> người dùng mà không thông báo riêng cho họ.'},
 {f:'Định nghĩa “external storage”?',b:'Hệ tệp không phân biệt hoa thường với quyền POSIX cố định; có thể là SD card hoặc giả lập (FUSE).'},
 {f:'Synthesized permissions (4.4) là gì?',b:'App tự quản lý <code>Android/data/&lt;gói&gt;/</code> trên external storage mà không cần WRITE_EXTERNAL_STORAGE. Do FUSE daemon quản lý quyền.'},
 {f:'3 tính năng kernel dùng cho external storage đa người dùng?',b:'<b>Mount namespace</b> + <b>bind mount</b> + <b>shared subtree</b> (shared/slave).'},
 {f:'Slave mount khác shared mount thế nào?',b:'Shared: mount lan tới mọi namespace con. Slave: nhận mount từ master nhưng mount của slave <b>không lan ngược</b> – giữ mount riêng tư mà vẫn thấy mount chung.'},
 {f:'Trong zygote, mount được thiết lập thế nào?',b:'<code>unshare(CLONE_NEWNS)</code> → rootfs đánh dấu <code>MS_SLAVE|MS_REC</code> → tạo tmpfs ở <code>EMULATED_STORAGE_TARGET</code>. Rồi mỗi app: unshare lần nữa + bind mount thư mục người dùng + bind tới /storage/emulated/legacy.'},
 {f:'Vì sao hai app của hai người dùng cùng thấy /sdcard nhưng nội dung khác?',b:'/sdcard → legacy; legacy được <b>bind mount</b> tới thư mục riêng của người dùng trong namespace riêng của từng tiến trình.'},
 {f:'Daemon sdcard chạy với UID nào? Nguồn dữ liệu?',b:'UID/GID <b>media_rw (1023)</b>; nguồn <code>/data/media/</code>; hệ tệp ảo ở <code>/mnt/shell/emulated</code> (0700, shell).'},
 {f:'Legacy vs directory-structure permission mode?',b:'Legacy (-l): hầu hết tệp root:sdcard_r. Cấu trúc thư mục (-d): nhóm riêng sdcard_pics/sdcard_av, người dùng dưới Android/user/. Nexus 4.4 vẫn dùng legacy.'},
 {f:'Tính năng nào khác đã hỗ trợ per-user ở 4.4?',b:'Credential storage, tài khoản online, chính sách thiết bị (device admin), VPN theo người dùng.'}
],

quiz: [
 {q:'Android bắt đầu hỗ trợ nhiều người dùng từ phiên bản nào?',o:['4.0','4.2','4.3','4.4'],a:1,e:'Multi-user xuất hiện ở 4.2; restricted profile ở 4.3.'},
 {q:'Vì sao các điện thoại (handset) không bật multi-user?',o:['Thiếu RAM','Do CDD yêu cầu thiết bị có telephony không bật vì hành vi chưa được định nghĩa','Vì Linux không hỗ trợ','Vì thiếu SELinux'],a:1,e:'Theo Compatibility Definition, telephony + multi-user chưa được định nghĩa.'},
 {q:'Primary user (owner) có user ID là:',o:['1000','10','0','1'],a:2,e:'Owner luôn có ID 0; người dùng khác bắt đầu từ 10.'},
 {q:'Quyền hạn của secondary user so với owner:',o:['Bằng nhau','Không quản lý được người dùng và các cài đặt toàn máy đặc quyền, nhưng vẫn cài/dùng app','Chỉ xem được','Không cài được app'],a:1,e:'Secondary user chỉ đổi tên mình, không làm thao tác đặc quyền của owner.'},
 {q:'Một secondary user kết nối Wi-Fi mạng mới. Hệ quả?',o:['Chỉ người đó dùng được','Trạng thái Wi-Fi là toàn hệ thống nên người dùng khác chuyển sang vẫn dùng mạng đó','Wi-Fi tắt khi chuyển người dùng','Mạng bị xóa'],a:1,e:'Một số trạng thái (Wi-Fi, airplane, NFC, âm thanh/màn hình) là toàn cục.'},
 {q:'Điều kiện bắt buộc trước khi tạo restricted profile là:',o:['Cài VPN','Owner đặt mật khẩu màn hình khóa','Bật Unknown sources','Root thiết bị'],a:1,e:'Restricted profile truy cập dữ liệu của owner nên owner phải khóa màn hình.'},
 {q:'Khi mới tạo restricted profile, các ứng dụng có trạng thái nào?',o:['Tất cả được bật','Tất cả bị tắt, owner phải bật từng app','Chỉ app hệ thống được bật','Tất cả bị gỡ'],a:1,e:'Owner chọn app cho từng profile.'},
 {q:'Hai restriction nào mặc định BẬT trong restricted profile?',o:['DISALLOW_INSTALL_APPS và DISALLOW_REMOVE_USER','DISALLOW_MODIFY_ACCOUNTS và DISALLOW_SHARE_LOCATION','DISALLOW_CONFIG_WIFI và DISALLOW_USB_FILE_TRANSFER','Không cái nào'],a:1,e:'Hai restriction này mặc định true cho restricted profile.'},
 {q:'App muốn tắt chính nó trong restricted profile để không lộ tài khoản sẽ khai báo:',o:['restrictedAccountType','requiredAccountType (vd "*")','exported="false"','sharedUserId'],a:1,e:'requiredAccountType khiến Android tự vô hiệu app trong restricted profile (Calendar làm vậy).'},
 {q:'Cái nào đúng về số người dùng?',o:['Tối đa 3 người dùng','Tối đa 8, chạy đồng thời tối đa 3','Tối đa 8, chạy tất cả cùng lúc','Không giới hạn'],a:1,e:'Người dùng ít dùng nhất (LRU) bị dừng.'},
 {q:'Người dùng nào không bao giờ bị dừng?',o:['Guest','Primary','Người dùng vừa được chuyển','Restricted profile'],a:1,e:'Primary được khởi động lúc boot và không bao giờ dừng.'},
 {q:'Vì sao shell chạy được lệnh pm create-user mà không cần root?',o:['Shell chạy với UID 0','Shell (UID 2000) được cấp quyền MANAGE_USERS','pm bỏ qua kiểm tra quyền','Dùng SELinux'],a:1,e:'MANAGE_USERS là quyền signature cấp cho shell.'},
 {q:'Flags của một secondary user thông thường là:',o:['19','16','24','8'],a:1,e:'Chỉ có FLAG_INITIALIZED (0x10 = 16).'},
 {q:'Flags 24 (0x18) biểu thị:',o:['Owner','Restricted profile (INITIALIZED|RESTRICTED)','Guest','Người dùng chưa khởi tạo'],a:1,e:'0x10 | 0x08 = 0x18 = 24.'},
 {q:'Thư mục dữ liệu app của user có ID 13 nằm ở:',o:['/data/data/','/data/user/13/','/data/system/users/13/','/sdcard/13/'],a:1,e:'/data/system/users/13/ chỉ chứa cài đặt hệ thống của user, không phải dữ liệu app.'},
 {q:'Tính UID của app có app ID 10016 khi chạy bởi user 13:',o:['10016','1310016','130016','13016'],a:1,e:'13 × 100000 + 10016 = 1310016.'},
 {q:'Linux username tương ứng với UID 1310016 là:',o:['u13_a16','u10_a13','app_16','u0_a16'],a:0,e:'userId = 13, app offset = 10016 − 10000 = 16.'},
 {q:'Thành phần nào của ứng dụng được CHIA SẺ giữa các người dùng?',o:['Thư mục dữ liệu','APK, thư viện native và DEX tối ưu','SharedPreferences','Cơ sở dữ liệu'],a:1,e:'Chia sẻ để tiết kiệm đĩa; dữ liệu thì riêng.'},
 {q:'Trong package-restrictions.xml, thuộc tính nào cho biết app có trên máy nhưng chưa cài cho người dùng?',o:['stopped="true"','inst="false"','nl="true"','blocked="true"'],a:1,e:'inst="false": không cài cho người dùng này.'},
 {q:'APK của một app bị xóa khỏi máy khi nào?',o:['Khi bất kỳ người dùng nào gỡ','Khi người dùng cuối cùng gỡ hoặc owner chọn “Uninstall for all users”','Khi chuyển người dùng','Khi reboot'],a:1,e:'APK dùng chung nên chỉ bị xóa khi không còn ai dùng.'},
 {q:'Rủi ro bảo mật chính của việc chia sẻ APK giữa người dùng là gì?',o:['Lộ dữ liệu app giữa người dùng','Một người dùng cập nhật app thêm quyền, quyền đó áp dụng cho mọi người dùng mà không được thông báo','APK bị mã hóa','Hai user cùng UID'],a:1,e:'Quyền cấp lúc cài/cập nhật nên ảnh hưởng toàn bộ.'},
 {q:'Điều nào đúng về tính năng “synthesized permissions” ở Android 4.4?',o:['App cần WRITE_EXTERNAL_STORAGE để ghi bất cứ đâu','App tự quản lý Android/data/&lt;gói&gt;/ trên external storage mà không cần WRITE_EXTERNAL_STORAGE','Chỉ dành cho app hệ thống','Chỉ dành cho SD card thật'],a:1,e:'Do FUSE daemon quản lý quyền.'},
 {q:'Ba tính năng kernel dùng để cô lập external storage từng người dùng là:',o:['SELinux, cgroup, seccomp','Mount namespace, bind mount, shared subtree','chroot, ptrace, netfilter','dm-verity, FUSE, ext4'],a:1,e:'Kết hợp 3 tính năng này (cùng FUSE daemon sdcard).'},
 {q:'Vì sao zygote đánh dấu rootfs là slave (MS_SLAVE | MS_REC)?',o:['Để tăng tốc fork','Để thay đổi từ namespace mặc định chảy xuống con nhưng mount của con không lan ngược','Để mã hóa rootfs','Để tắt SELinux'],a:1,e:'Slave mount truyền một chiều.'},
 {q:'Tại sao app của hai người dùng cùng đọc đường dẫn /sdcard nhưng thấy nội dung khác?',o:['Có hai thẻ SD','/sdcard → legacy, được bind mount tới thư mục riêng của người dùng trong namespace riêng của từng tiến trình','Hệ thống đổi tên tệp','Dữ liệu bị mã hóa khác nhau'],a:1,e:'Mount namespace riêng + bind mount.'},
 {q:'Tại sao app không đọc được nội dung /mnt/shell/emulated dù có thể “thấy” mount này?',o:['Bị mã hóa','Thư mục thuộc shell với mode 0700','Chưa được mount','Nằm trong RAM'],a:1,e:'Mode 0700 chủ shell.'},
 {q:'Trong chế độ permission legacy (-l) của daemon sdcard, app có READ_EXTERNAL_STORAGE đọc được hầu hết tệp vì:',o:['Là root','Thuộc nhóm bổ sung sdcard_r','Dùng chung UID','Được SELinux ưu tiên'],a:1,e:'Hầu hết tệp là root:sdcard_r.'},
 {q:'Chế độ derivation theo cấu trúc thư mục (-d) khác legacy ở điểm nào?',o:['Không dùng FUSE','Gán nhóm riêng cho Pictures/ (sdcard_pics) và Music/ (sdcard_av), người dùng dưới Android/user/','Bỏ nhóm sdcard_r','Cho phép chmod'],a:1,e:'Cho kiểm soát mịn hơn; Nexus 4.4 vẫn dùng legacy.'},
 {q:'INTERACT_ACROSS_USERS có thể cấp động cho app thường nhờ:',o:['Là quyền normal','Có cờ development cùng mức signature, dùng pm grant','Là quyền dangerous','Chỉ cần ký cùng khóa'],a:1,e:'Cờ development cho phép pm grant/revoke (chương 2).'}
],

order: [
 {id:'o-ext',title:'Thiết lập external storage cho một tiến trình app',intro:'Sắp xếp theo thứ tự thực hiện (từ khi zygote khởi động tới khi app sẵn sàng).',
  items:['Zygote: unshare(CLONE_NEWNS) – namespace riêng của zygote','Zygote: đánh dấu rootfs là MS_SLAVE | MS_REC','Zygote: tạo tmpfs tại EMULATED_STORAGE_TARGET (/storage/emulated)','App fork: lấy userId từ UID, unshare(CLONE_NEWNS) lần nữa','Bind mount /mnt/shell/emulated/&lt;id&gt; → /storage/emulated/&lt;id&gt;','Bind mount đệ quy /storage/emulated/&lt;id&gt; → /storage/emulated/legacy'],
  explain:'Giai đoạn chung ở zygote rồi giai đoạn riêng cho từng app.'},
 {id:'o-multi',title:'Cài app khi có nhiều người dùng',intro:'Sắp xếp các bước đúng thứ tự.',
  items:['Người dùng A cài app: APK vào /data/app/','PMS gọi installd (mkuserdata) tạo thư mục dữ liệu cho từng người dùng','package-restrictions.xml của người dùng khác được thêm inst="false"','Người dùng B cài cùng app: thuộc tính inst bị gỡ','Mỗi người dùng chạy app dưới UID riêng (userId*100000 + appId)'],
  explain:'APK dùng chung, dữ liệu và UID riêng từng người dùng.'}
],

classify: [
 {id:'c-user',title:'Loại người dùng nào?',intro:'Gán đặc điểm cho đúng loại người dùng.',buckets:['Primary (Owner)','Secondary','Restricted profile'],
  items:[
   {t:'User ID 0, luôn tồn tại',b:0},{t:'Có thư mục dữ liệu app riêng, danh sách app riêng, không quản lý người dùng khác',b:1},
   {t:'Dùng chung app và tài khoản của owner, mặc định mọi app bị tắt',b:2},{t:'Flags = 19',b:0},
   {t:'Flags = 24',b:2},{t:'Flags = 16',b:1},{t:'Cần owner đặt mật khẩu màn hình khóa trước',b:2},{t:'Chỉ người này thấy màn hình VPN và Unknown sources',b:0}],
  explain:'Owner = 0, toàn quyền · Secondary = riêng biệt · Restricted = “đi nhờ” owner.'},
 {id:'c-share',title:'Chia sẻ hay riêng?',intro:'Mỗi mục được chia sẻ giữa các người dùng hay riêng cho từng người?',buckets:['Chia sẻ giữa người dùng','Riêng từng người dùng'],
  items:[
   {t:'APK trong /data/app/',b:0},{t:'Thư mục dữ liệu app',b:1},{t:'DEX tối ưu trong /data/dalvik-cache/',b:0},
   {t:'accounts.db',b:1},{t:'Thư viện native trong /data/app-lib/',b:0},{t:'package-restrictions.xml',b:1},
   {t:'Trạng thái kết nối Wi-Fi',b:0},{t:'Thư mục external storage /storage/emulated/<id>',b:1}],
  explain:'Chia sẻ để tiết kiệm đĩa; dữ liệu và cài đặt cá nhân thì riêng.'},
 {id:'c-kernel',title:'Tính năng kernel nào?',intro:'Gán mô tả cho đúng tính năng.',buckets:['Mount namespace','Bind mount','Shared subtree (slave)'],
  items:[
   {t:'Mỗi tiến trình có tập mount point riêng (CLONE_NEWNS)',b:0},{t:'Gắn một thư mục vào đường dẫn khác (MS_BIND)',b:1},
   {t:'Mount lan một chiều từ master xuống slave',b:2},{t:'unshare() tạo namespace mới',b:0},
   {t:'Làm cùng thư mục hiện ở nhiều nơi',b:1},{t:'Mount mới ở slave không lan ngược lên master',b:2}],
  explain:'Ba công cụ phối hợp để mỗi người dùng chỉ thấy kho riêng.'}
],

cheat: [
 {title:'👥 Loại người dùng',html:'<div class="mnemo">Owner=0 · Phụ≥10 · Restricted đi nhờ</div><ul><li>Owner 19 · Phụ 16 · Restricted 24</li><li>Tối đa 8, chạy 3 (LRU)</li><li>Owner không bao giờ dừng</li><li>Guest: tắt, chưa rõ mục đích</li></ul>'},
 {title:'🚧 Restrictions',html:'<ul><li>Mặc định false, trừ restricted: MODIFY_ACCOUNTS + SHARE_LOCATION = true</li><li>getUserRestrictions() → Bundle</li><li>INSTALL_FAILED_USER_RESTRICTED</li><li>restrictedAccountType / requiredAccountType</li></ul>'},
 {title:'🗂 File hệ thống',html:'<ul><li>/data/system/users/: userlist.xml, N.xml, N/</li><li>Thư mục N/: accounts.db, settings.db, password.key, package-restrictions.xml…</li><li>pm list users, create-user, remove-user</li></ul>'},
 {title:'🧮 UID',html:'<div class="mnemo">uid = userId×100000 + appId%100000</div><ul><li>10016 → u0_a16; 1310016 → u13_a16</li><li>/data/user/0 → /data/data</li></ul>'},
 {title:'📱 Chia sẻ app',html:'<ul><li>Chung: APK, native lib, DEX</li><li>Riêng: dữ liệu, restrictions, tài khoản</li><li>inst=false / stopped / nl / blocked</li><li>⚠ Một người cập nhật thêm quyền → ảnh hưởng tất cả</li></ul>'},
 {title:'💾 External storage',html:'<div class="mnemo">Namespace + Bind mount + Slave</div><ul><li>FUSE daemon sdcard (UID 1023), nguồn /data/media</li><li>Zygote: slave + tmpfs; App: unshare + bind</li><li>Legacy: root:sdcard_r; -d: sdcard_pics/av</li></ul>'}
]
};
