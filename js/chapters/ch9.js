CH[9] = {
sections: [

{id:'devadmin', icon:'🏢', title:'Device Administration: quản trị thiết bị', html:`
<p>Android ban đầu hướng tới người dùng phổ thông, ít tính năng doanh nghiệp. Khi thiết bị Android vào môi trường làm việc (email công ty, dữ liệu khách hàng), nhu cầu <b>bảo mật nền tảng</b> và <b>công cụ quản lý thiết bị nhân viên</b> tăng lên. Chương này nói về: Device Administration, VPN, và Wi-Fi EAP.</p>
<p><b>Android 2.2</b> có <b>Device Administration API</b>: cho phép app vừa <b>áp chính sách bảo mật toàn hệ thống</b> vừa <b>điều chỉnh tính năng</b> theo mức bảo mật hiện tại. Những app đó gọi là <b>device administrator</b>.</p>
<ul>
<li>Phải được <b>bật rõ ràng</b> trong cài đặt bảo mật; khi đang active thì <b>không gỡ cài đặt được</b>.</li>
<li>Khi bật, được cấp đặc quyền: <b>khóa máy</b>, <b>đổi mật khẩu màn hình khóa</b>, thậm chí <b>wipe</b> (xóa toàn bộ dữ liệu người dùng).</li>
<li>Thường gắn với tài khoản doanh nghiệp (Microsoft Exchange, Google Apps) để chỉ cho thiết bị <b>tuân thủ chính sách</b> truy cập dữ liệu công ty.</li>
<li>Chính sách có thể <b>dựng sẵn</b> trong app hoặc <b>cấu hình ở server</b> rồi gửi xuống qua giao thức provisioning/đồng bộ.</li>
</ul>
<h3>Các loại chính sách (Android 4.4)</h3>
<p>Hằng số trong <code>DeviceAdminInfo</code>; mỗi chính sách là một <b>bit</b>:</p>
<table>
<tr><th>Bit</th><th>Chính sách / thẻ XML</th><th>Tác dụng</th><th>API</th></tr>
<tr><td>0</td><td><code>limit-password</code></td><td>Giới hạn mật khẩu (độ dài/độ phức tạp tối thiểu)</td><td>8</td></tr>
<tr><td>1</td><td><code>watch-login</code></td><td>Theo dõi các lần đăng nhập</td><td>8</td></tr>
<tr><td>2</td><td><code>reset-password</code></td><td>Đặt lại mật khẩu người dùng</td><td>8</td></tr>
<tr><td>3</td><td><code>force-lock</code></td><td>Khóa máy / giới hạn thời gian tự khóa</td><td>8</td></tr>
<tr><td>4</td><td><code>wipe-data</code></td><td>Factory reset, xóa toàn bộ dữ liệu</td><td>8</td></tr>
<tr><td>5</td><td><code>set-global-proxy</code></td><td>Đặt proxy toàn cục (<b>ẩn</b> với app SDK)</td><td>9</td></tr>
<tr><td>6</td><td><code>expire-password</code></td><td>Bắt đổi mật khẩu sau thời hạn</td><td>11</td></tr>
<tr><td>7</td><td><code>encrypted-storage</code></td><td>Yêu cầu mã hóa dữ liệu lưu trữ</td><td>14</td></tr>
<tr><td>8</td><td><code>disable-camera</code></td><td>Tắt mọi camera</td><td>14</td></tr>
<tr><td>9</td><td><code>disable-keyguard-features</code></td><td>Tắt tính năng màn hình khóa (widget, camera…)</td><td>17</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ 5 chính sách đầu</b><div class="mnemo">Mật khẩu · Theo dõi · Reset · Khóa · Xóa</div>(limit-password, watch-login, reset-password, force-lock, wipe-data).</div>
<h3>🧮 Giải mã cờ flags</h3>
<div class="sim" data-bitflags></div>
`},

{id:'priv', icon:'🔑', title:'Cài đặt, quản lý đặc quyền và lưu chính sách', html:`
<p><b>DevicePolicyManager</b> là facade; việc thật do <b>DevicePolicyManagerService</b> làm (chạy trong <code>system_server</code> với user system, nên làm được hầu hết hành động đặc quyền). Điểm đặc biệt: nó có thể <b>trao một số hành động đặc quyền</b> (như đổi mật khẩu màn hình khóa) cho app bên thứ ba <b>không cần quyền hệ thống nào</b>. Điều này cho phép người dùng bật/tắt device admin tùy ý, và đảm bảo admin chỉ làm được chính sách mà nó đã <b>khai báo</b>. Quyền Android thông thường (cấp lúc cài, không thu hồi) không làm được vậy nên dịch vụ dùng cơ chế riêng.</p>
<h3>Quản lý đặc quyền</h3>
<ul>
<li>Service giữ danh sách <b>cấu trúc chính sách</b> trong bộ nhớ cho từng người dùng. Mỗi cấu trúc: <b>chính sách hiệu lực</b> (chọn mức <b>nghiêm ngặt nhất</b> trong mọi admin) + metadata từng admin đang active (gói khai báo + <b>bitmask</b> chính sách).</li>
<li>Cấp quyền cho một lời gọi chỉ khi: (1) app gọi là <b>admin đang active</b>; (2) nó đã <b>yêu cầu đúng chính sách</b> tương ứng; (3) <b>UID người gọi</b> (từ <code>Binder.getCallingUid()</code>) khớp UID của thành phần admin.</li>
</ul>
<div class="callout c-info"><b>Ví dụ: <code>resetPassword()</code></b>Phải là admin active, cùng UID với admin component đã đăng ký, và đã yêu cầu <code>USES_POLICY_RESET_PASSWORD</code>.</div>
<p>Chính sách được yêu cầu qua tệp XML dưới thẻ <code>&lt;uses-policies&gt;</code>. Trước khi kích hoạt hệ thống phân tích và hiện hộp thoại cho người dùng xem. Giống quyền Android: <b>tất cả hoặc không gì</b>, không bật chọn lọc.</p>
<pre>&lt;device-admin xmlns:android="http://schemas.android.com/apk/res/android"&gt;
  &lt;uses-policies&gt;
    &lt;limit-password /&gt; &lt;watch-login /&gt; &lt;reset-password /&gt; &lt;force-lock /&gt; &lt;wipe-data /&gt;
    &lt;expire-password /&gt; &lt;encrypted-storage /&gt; &lt;disable-camera /&gt; ...
  &lt;/uses-policies&gt;
&lt;/device-admin&gt;</pre>
<h3>Kích hoạt admin</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>App yêu cầu kích hoạt</b>Gửi intent implicit <code>ACTION_ADD_DEVICE_ADMIN</code> kèm <code>EXTRA_DEVICE_ADMIN</code> (ComponentName) và lời giải thích. App <b>không tự kích hoạt</b> được.</div>
 <div class="step"><b>Settings xử lý</b>Handler duy nhất là app <b>Settings</b> – có quyền <code>MANAGE_DEVICE_ADMINS</code> (signature). Nó kiểm tra app là device admin hợp lệ, trích chính sách, dựng hộp thoại xác nhận.</div>
 <div class="step"><b>Người dùng bấm Activate</b>Gọi <code>setActiveAdmin()</code> → thêm vào danh sách admin active của người dùng hiện tại.</div>
 <div class="step"><b>Gỡ kích hoạt</b>Admin đang active có thể tự gọi <code>removeActiveAdmin()</code>.</div>
</div>
<p>Chỉ <b>app hệ thống</b> (có MANAGE_DEVICE_ADMINS) mới thêm admin không cần tương tác người dùng.</p>
<h3>Lưu chính sách: device_policies.xml</h3>
<ul>
<li>Ghi lại khi admin kích hoạt/gỡ/đổi chính sách. Owner: <code>/data/system/device_policies.xml</code>; người dùng khác: thư mục hệ thống của họ. Chủ sở hữu system, mode <b>0600</b>.</li>
</ul>
<pre>&lt;admin name="com.example.android.apis/.DeviceAdminSampleReceiver"&gt;
  &lt;policies flags="<span class="h">1023</span>" /&gt;
  &lt;password-quality value="327680" /&gt;      <span class="c">&lt;!-- 0x50000 = ALPHANUMERIC --&gt;</span>
  &lt;min-password-length value="6" /&gt;
  &lt;max-time-to-unlock value="300000" /&gt;
  &lt;max-failed-password-wipe value="100" /&gt;
  &lt;encryption-requested value="true" /&gt;
&lt;/admin&gt;
&lt;password-owner value="10076" /&gt;           <span class="c">&lt;!-- UID app đã đặt mật khẩu qua resetPassword() --&gt;</span>
&lt;active-password quality="327680" length="6" ... /&gt;   <span class="c">&lt;!-- độ phức tạp mật khẩu hiện tại --&gt;</span></pre>
<p>Mỗi <code>&lt;admin&gt;</code> = một admin active; <code>flags</code> là bitmask chính sách (1023 = 0x3FF = cả 10 bit bật).</p>
`},

{id:'enforce', icon:'⚖️', title:'Thực thi từng chính sách', html:`
<p>Chính sách có độ chi tiết khác nhau: áp cho <b>người dùng hiện tại</b> hoặc <b>mọi người dùng</b>. Có chính sách <b>hệ thống không tự thực thi</b> – chỉ thông báo cho admin app để nó tự xử lý. Bấm xem từng chính sách:</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>limit-password</h4><p>Người dùng không được đặt mật khẩu không đạt chuẩn, nhưng mật khẩu <b>hiện tại vẫn còn hiệu lực</b> đến khi đổi. Admin có thể nhắc đổi bằng intent <code>ACTION_SET_NEW_PASSWORD</code>. Áp <b>theo từng người dùng</b>. Khi đặt chất lượng mật khẩu, các cách mở khóa <b>không đạt</b> bị tắt (vd <code>PASSWORD_QUALITY_ALPHANUMERIC</code> tắt Pattern và PIN).</p>">limit-password</button>
  <button class="chip" data-info="<h4>watch-login</h4><p>Admin nhận thông báo kết quả đăng nhập qua broadcast <code>ACTION_PASSWORD_FAILED</code> / <code>ACTION_PASSWORD_SUCCEEDED</code>. Receiver kế thừa <code>DeviceAdminReceiver</code> được gọi <code>onPasswordFailed()</code>/<code>onPasswordSucceeded()</code>.</p>">watch-login</button>
  <button class="chip" data-info="<h4>reset-password</h4><p><code>resetPassword()</code> đặt mật khẩu của người dùng; phải thỏa chất lượng hiện hành và có hiệu lực ngay. Nếu thiết bị đã <b>mã hóa</b>, đổi mật khẩu khóa màn hình của owner cũng <b>đổi mật khẩu mã hóa thiết bị</b> (chương 10).</p>">reset-password</button>
  <button class="chip" data-info="<h4>force-lock</h4><p><code>lockNow()</code> khóa ngay; <code>setMaximumTimeToLock()</code> đặt thời gian không hoạt động tối đa, có hiệu lực ngay và giới hạn tùy chọn trong Settings → Display.</p>">force-lock</button>
  <button class="chip" data-info="<h4>wipe-data</h4><p><code>wipeData()</code> xóa dữ liệu. Kèm watch-login có thể đặt <code>setMaximumFailedPasswordsForWipe()</code>: màn hình khóa báo service, hiện cảnh báo sau mỗi lần sai, và wipe khi đủ ngưỡng. Owner sai → <b>wipe toàn máy</b>; secondary user sai → chỉ <b>xóa người dùng đó</b> và chuyển về owner.</p><p>⚠ Wipe toàn máy <b>không tức thời</b>: ghi lệnh <code>wipe_data</code> vào cache partition rồi reboot vào <b>recovery</b> để recovery thực thi. Recovery tùy biến bỏ qua lệnh hoặc xóa tệp lệnh thì wipe có thể không xảy ra (chương 10, 13).</p>">wipe-data</button>
  <button class="chip" data-info="<h4>set-global-proxy</h4><p>Không dành cho app bên thứ ba (4.4). Ghi vào <code>Settings.Global.GLOBAL_HTTP_PROXY_HOST/PORT/EXCLUSION_LIST</code>. Chỉ <b>device owner</b> đặt được.</p>">set-global-proxy</button>
  <button class="chip" data-info="<h4>expire-password</h4><p><code>setPasswordExpirationTimeout()</code>: hệ thống đặt <b>alarm hằng ngày</b> kiểm hạn; mật khẩu hết hạn thì DevicePolicyManagerService đăng thông báo đổi mật khẩu mỗi ngày. Admin được báo qua <code>onPasswordExpiring()</code>.</p>">expire-password</button>
  <button class="chip" data-info="<h4>encrypted-storage</h4><p><code>setStorageEncryption()</code>; chỉ <b>owner</b> yêu cầu được. Việc yêu cầu <b>không tự bắt đầu</b> mã hóa: admin phải kiểm <code>getStorageEncryptionStatus()</code> (thuộc tính <code>ro.crypto.state</code>) rồi khởi động bằng intent <code>ACTION_START_ENCRYPTION</code>.</p>">encrypted-storage</button>
  <button class="chip" data-info="<h4>disable-camera</h4><p><code>setCameraDisabled()</code> đặt thuộc tính <code>sys.secpolicy.camera.disabled = 1</code>. <code>CameraService</code> (native) kiểm thuộc tính này và <b>từ chối mọi kết nối</b> – tắt camera với mọi người dùng.</p>">disable-camera</button>
  <button class="chip" data-info="<h4>disable-keyguard-features</h4><p><code>setKeyguardDisabledFeatures()</code>: keyguard kiểm chính sách và tắt tính năng (widget, camera…) cho người dùng đích.</p>">disable-keyguard</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một chính sách.</p></div>
</div>
`},

{id:'owner', icon:'👑', title:'Device Owner & thiết bị được quản lý', html:`
<h3>Viết một device admin</h3>
<ul>
<li>Khai báo một <b>receiver</b> yêu cầu quyền <code>BIND_DEVICE_ADMIN</code> (signature → chỉ hệ thống kích hoạt được), kèm <code>&lt;meta-data android:name="android.app.device_admin"&gt;</code> trỏ tới XML chính sách, và lắng nghe <code>DEVICE_ADMIN_ENABLED</code>.</li>
<li>Kế thừa <code>DeviceAdminReceiver</code>; tối thiểu ghi đè <code>onEnabled()</code>/<code>onDisabled()</code>. <b>Không dùng được API đặc quyền trước onEnabled() hay sau onDisabled().</b></li>
<li><code>isAdminActive()</code> kiểm admin còn active không.</li>
</ul>
<pre>&lt;receiver android:name=".MyDeviceAdminReceiver"
          android:permission="<span class="h">android.permission.BIND_DEVICE_ADMIN</span>"&gt;
  &lt;meta-data android:name="android.app.device_admin" android:resource="@xml/device_admin_policy" /&gt;
  &lt;intent-filter&gt;&lt;action android:name="android.app.action.DEVICE_ADMIN_ENABLED" /&gt;&lt;/intent-filter&gt;
&lt;/receiver&gt;</pre>
<h3>Device Owner (Android 4.4+)</h3>
<div class="compare">
 <div class="mini b"><h4>Device admin thường</h4><p>Người dùng bật/tắt được (trừ khi đang active thì không gỡ cài đặt được).</p></div>
 <div class="mini g"><h4>Device owner</h4><p>Loại admin đặc biệt <b>không thể tắt và không thể gỡ</b>. Phải nằm trong <b>ảnh hệ thống</b>.</p></div>
</div>
<ul>
<li>Đặt bằng <code>setDeviceOwner(packageName, ownerName)</code> (ẩn trong SDK). Không cần quyền đặc biệt nhưng chỉ gọi được <b>trước khi thiết bị được provision</b> (<code>Settings.Global.DEVICE_PROVISIONED = 0</code>) → chỉ app hệ thống chạy trong lúc khởi tạo thiết bị.</li>
<li>Kết quả ghi vào <code>/data/system/device_owner.xml</code>. Truy vấn: <code>getDeviceOwner()</code>, <code>isDeviceOwnerApp()</code>, <code>getDeviceOwnerName()</code>.</li>
</ul>
<h3>Thiết bị được quản lý (managed device)</h3>
<p>Thiết bị có device owner phản ứng khác với thay đổi bảo mật. Doanh nghiệp thường cần cài chứng chỉ tin cậy (root CA của PKI công ty). Device admin có quyền <code>MANAGE_CA_CERTIFICATES</code> cài/gỡ CA <b>âm thầm</b> qua <code>installCaCert()</code>/<code>uninstallCaCert()</code> (ẩn với SDK).</p>
<div class="flow"><div class="node bad">Thiết bị thường có CA do người dùng cài → cảnh báo “mạng có thể bị giám sát” (đáng sợ)</div><span class="arr">vs</span><div class="node hl">Thiết bị managed có CA bổ sung → chỉ hiện thông báo thông tin “nhẹ nhàng” hơn</div></div>
`},

{id:'enterprise', icon:'📧', title:'Tích hợp tài khoản doanh nghiệp', html:`
<p>Device admin thường đi kèm tài khoản doanh nghiệp để kiểm soát thiết bị truy cập dữ liệu công ty. Hai cách triển khai:</p>
<div class="cards">
 <div class="mini b"><span class="em">📨</span><h4>Microsoft Exchange ActiveSync (EAS)</h4><p>Giao thức đồng bộ email, danh bạ, lịch, tác vụ từ groupware tới thiết bị di động (Exchange, Google Apps…). App <b>Email</b> gốc hỗ trợ qua authenticator + sync adapter (chương 8). <b>Không cho đồng bộ</b> cho đến khi người dùng bật device admin tích hợp của Email.</p><p>Chính sách (mật khẩu, wipe, mã hóa, tắt camera…) <b>không dựng sẵn</b> mà <b>lấy từ server</b> bằng giao thức <b>EAS Provision</b>.</p></div>
 <div class="mini g"><span class="em">🅶</span><h4>Google Apps (Gmail doanh nghiệp)</h4><p>Nếu admin miền bật, có thể <b>định vị, đổ chuông, khóa, wipe</b> từ xa; hoặc <b>xóa có chọn lọc</b> tài khoản Google Apps và nội dung khỏi thiết bị mà không wipe toàn máy. Làm bởi app <b>Google Apps Device Policy</b>; chính sách đặt trong admin console và đẩy xuống bằng giao thức đồng bộ độc quyền của Google.</p></div>
</div>
<p>Tài khoản Google miễn phí không đặt được chính sách thiết bị, nhưng máy Google experience có device admin cơ bản trong <b>Google Play Services</b> (flags 28 = reset-password + force-lock + wipe-data) cho phép <b>Android Device Manager</b> định vị/wipe từ xa.</p>
`},

{id:'vpn', icon:'🛜', title:'VPN: các giao thức và hỗ trợ trên Android', html:`
<p><b>VPN</b> mở rộng mạng riêng qua mạng công cộng mà không cần đường truyền vật lý riêng. <b>Remote access VPN</b>: từng thiết bị kết nối vào mạng riêng; <b>site-to-site VPN</b>: nối hai mạng. Cấu hình thiết bị di động với IP động gọi là <b>road warrior</b> – phổ biến nhất trên Android. VPN xác thực client và đảm bảo bí mật + toàn vẹn bằng <b>giao thức đường hầm an toàn</b>.</p>
<table>
<tr><th>Giao thức</th><th>Cách hoạt động</th><th>Bảo mật</th></tr>
<tr><td><b>PPTP</b></td><td>Kênh điều khiển TCP + đường hầm <b>GRE</b> gói PPP. Xác thực: PAP, CHAP, MS-CHAP v1/v2, EAP-TLS</td><td>Chỉ <b>EAP-TLS</b> được coi là an toàn. Mã hóa MPPE (RC4) <b>không xác thực bản mã</b> → dễ bị <b>bit-flipping</b>; RC4 còn nhiều điểm yếu → PPTP yếu</td></tr>
<tr><td><b>L2TP/IPSec</b></td><td>L2TP (lớp 2) <b>không tự mã hóa</b>, nên chạy trên <b>IPSec</b> (xác thực, bí mật, toàn vẹn). Dựng kênh IPSec trước, rồi L2TP trong đó. Dùng <b>SA</b> (Security Association) thiết lập bằng <b>ISAKMP</b> + khóa chia sẻ trước hoặc <b>IKE/IKEv2</b> (chứng chỉ X.509 + Diffie-Hellman)</td><td>An toàn hơn PPTP</td></tr>
<tr><td><b>IPSec Xauth</b></td><td>Mở rộng IKE thêm xác thực người dùng (dùng được CSDL người dùng/RADIUS, 2FA). Kèm <b>Modecfg</b> để server đẩy IP riêng/DNS cho client → VPN “thuần IPSec”</td><td>Linh hoạt, doanh nghiệp</td></tr>
<tr><td><b>VPN dựa SSL</b> (OpenVPN…)</td><td>Dùng SSL/TLS để xác thực + trao khóa; mã hóa gói bằng giao thức riêng; <b>dồn kênh</b> trên một cổng UDP/TCP. <b>Không có chuẩn duy nhất</b></td><td>Đơn giản hơn IPSec, chạy hoàn toàn userspace, dễ qua firewall/NAT/proxy</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">PPTP yếu · L2TP cần IPSec · Xauth = IPSec + người dùng · SSL = userspace</div></div>

<h3>VPN “legacy” (có sẵn trong nền tảng)</h3>
<p>Trước Android 4.0 hỗ trợ VPN <b>tích hợp cứng</b>, không mở rộng được (PPTP, L2TP/IPSec; Xauth thêm ở 4.0). Chỉ <b>owner</b> điều khiển được qua Settings. Cài đặt:</p>
<ul>
<li><code>mtpd</code> (daemon PPP của Android) + driver kernel PPPoPNS/PPPoLAC cho PPTP/L2TP – <b>chỉ một phiên</b>; <code>racoon</code> (IKE daemon, chỉ IKEv1) + IPSec trong kernel.</li>
<li>Cả hai chạy với group <code>vpn net_admin inet</code> (mtpd thêm <code>net_raw</code> để tạo GRE socket); socket điều khiển <b>chỉ system truy cập</b>; không tự khởi động.</li>
<li>Daemon dựng đường hầm, tạo interface (thường <code>tun0</code>), ghi <b>state file</b> <code>/data/misc/vpn/state</code> (tên interface, IP/mask, route, DNS, search domain – mỗi dòng một mục). Framework đọc rồi nhờ <b>ConnectivityService</b> cấu hình định tuyến, DNS → gửi lệnh qua socket của <b>netd</b> (chạy root, sửa bảng lọc gói/định tuyến).</li>
</ul>
<h3>Hồ sơ VPN & thông tin xác thực</h3>
<ul>
<li>Mỗi cấu hình là một <b>VPN profile</b>, <b>mã hóa</b> bằng daemon keystore (khóa riêng thiết bị). Tệp: <code>1000_VPN_&lt;thời-gian-ms-hex&gt;</code> (chủ system → chỉ app hệ thống đọc).</li>
</ul>
<pre>psk-vpn|1|vpn1.example.com|test1|pass1234||||true|l2tpsecret|l2tpid|PSK|||
pptpvpn|0|vpn2.example.com|user1|password||||true||||||
certvpn|4|vpn3.example.com|user3|password||||true||||vpnclient|cacert|</pre>
<p>Trường: tên · <b>loại</b> (0 PPTP, 1 L2TP/IPSec PSK, 4 IPSec Xauth chứng chỉ) · gateway · user · password…; phân tách bằng ký tự NUL. Với khóa/chứng chỉ chỉ lưu <b>alias</b> (vd <code>vpnclient</code>, <code>cacert</code>) – khóa riêng thật nằm trong credential store; <code>racoon</code> dùng <b>keystore OpenSSL engine</b> nên ký bằng khóa mà không lấy ra (tận dụng phần cứng).</p>
<div class="callout c-warn"><b>Khóa chia sẻ trước (PSK) và mật khẩu</b>Keystore phần cứng chỉ hỗ trợ khóa <b>bất đối xứng</b>, chưa hỗ trợ khóa đối xứng → PSK và mật khẩu trong profile lưu <b>dạng rõ</b> (sau khi giải mã trong bộ nhớ) và có thể bị lấy trên máy root.</div>

<h3>Always-on VPN (4.2+)</h3>
<ul>
<li><b>Chặn mọi kết nối</b> của app cho đến khi VPN được thiết lập → ngăn dữ liệu đi qua kênh không an toàn (Wi-Fi công cộng).</li>
<li>Yêu cầu profile dùng <b>IP của gateway</b> và <b>IP DNS tường minh</b> (tránh DNS rò qua máy chủ DNS cục bộ bị chặn).</li>
<li>Lưu tên profile trong <code>LOCKDOWN_VPN</code> (cùng keystore). Có tệp này thì máy <b>tự kết nối VPN lúc boot</b> và khởi động lại VPN khi mạng đổi (vd đổi hotspot).</li>
<li><code>LockdownVpnTracker</code> theo dõi trạng thái VPN và gửi lệnh cho <b>netd → iptables</b> để chỉ cho gói đi qua interface VPN: cho phép mọi lưu lượng tới/từ mạng VPN và trên interface tunnel; tới/từ server VPN chỉ ở cổng IPSec (500, 4500) và L2TP (1701); <b>DROP</b> các gói vào khác, <b>REJECT</b> các gói ra khác.</li>
</ul>
`},

{id:'appvpn', icon:'📱', title:'VPN dựa trên ứng dụng & VPN đa người dùng', html:`
<h3>Application-based VPN (Android 4.0+)</h3>
<p><b>VpnService</b> (API công khai) cho app bên thứ ba tự xây giải pháp VPN <b>không cần quyền hệ thống</b>. App dùng <code>VpnService.Builder</code> chỉ định IP interface, route…; hệ thống tạo <b>interface ảo</b> và trả cho app một <b>file descriptor</b>: <b>đọc</b> = lấy gói IP đi ra, <b>ghi</b> = chèn gói IP đi vào.</p>
<div class="callout c-danger"><b>Vì sao luôn cần người dùng?</b>Truy cập thô tới gói tin = có thể chặn bắt và sửa mọi lưu lượng → <b>không tự khởi động được</b>, phải có tương tác người dùng, và có <b>thông báo thường trực</b> khi VPN chạy.</div>
<div class="stepper" data-stepper>
 <div class="step"><b>Khai báo service</b>Mở rộng <code>VpnService</code>, khai báo trong manifest với <code>android:permission="BIND_VPN_SERVICE"</code> (signature → chỉ hệ thống bind) và intent-filter <code>android.net.VpnService</code>.</div>
 <div class="step"><b>prepare()</b>Trả về intent mở <b>hộp thoại cảnh báo</b> để xin phép người dùng, đảm bảo <b>mỗi người dùng chỉ một VPN chạy</b> (gọi khi VPN của app khác đang chạy → kết nối đó bị ngắt). Lưu tên gói của app gọi; chỉ app này được establish cho đến khi prepare() lại hoặc hệ thống phá kết nối.</div>
 <div class="step"><b>Dựng đường hầm</b>App tạo đường hầm tới gateway, thương lượng tham số mạng, cấu hình <code>Builder</code>.</div>
 <div class="step"><b>establish()</b>Kiểm <b>UID người gọi</b> khớp app được cấp phép; kiểm người dùng có được tạo VPN; kiểm service <b>đòi BIND_VPN_SERVICE</b> (không thì coi là không an toàn và ném <code>SecurityException</code>). Rồi tạo interface bằng native, đặt route và DNS; trả file descriptor.</div>
 <div class="step"><b>Thông báo</b>Hiện notification thường trực; dialog quản lý thuộc gói <code>com.android.vpndialogs</code> – gói <b>duy nhất</b> (ngoài system) được quản lý VPN dựa ứng dụng → chỉ qua UI do hệ thống áp đặt. Khi VPN bị tắt, hệ thống gọi <code>onRevoke()</code>.</div>
</div>
<p>Vì mọi gói đi qua app VPN nên ngoài tunneling còn có thể ghi log, lọc, sửa lưu lượng (vd chặn quảng cáo). Ví dụ đầy đủ: <i>OpenVPN for Android</i> (dùng credential store).</p>
<h3>Đa người dùng</h3>
<ul>
<li>Legacy VPN: chỉ owner điều khiển.</li>
<li>Android 4.2: người dùng phụ (trừ restricted) chạy được VPN dựa ứng dụng, nhưng chỉ một VPN active nên <b>lưu lượng mọi người</b> đi qua VPN đang chạy.</li>
<li><b>Android 4.4: per-user VPN</b> – lưu lượng mỗi người dùng đi qua VPN <b>của họ</b>, cô lập khỏi người khác. Restricted profile <b>dùng chung VPN của owner</b>.</li>
</ul>
<h3>Kỹ thuật Linux: iptables owner + mark + routing</h3>
<pre># Chặn gói của UID 1234
iptables -A OUTPUT -m owner --uid-owner 1234 -j DROP
# Đánh dấu (mark) gói tới cổng 80
iptables -A PREROUTING -t mangle -p tcp --dport 80 -j MARK --set-mark 0x1
# Gói có mark 0x1 tra bảng định tuyến "web"
ip rule add fwmark 0x1 table web
ip route add default via 1.2.3.4 dev em3 table web</pre>
<p><b>NetworkManagementService</b> (gửi lệnh cho <b>netd</b> chạy root, gọi <code>iptables</code>/<code>ip</code>) đánh dấu gói theo <b>dải UID</b> của từng người dùng rồi định tuyến qua interface VPN của họ. Ví dụ: owner dùng <code>tun0</code>, user 10 dùng <code>tun1</code>, restricted 13 đi theo owner:</p>
<table>
<tr><th>Dải UID</th><th>Người dùng</th><th>Chuỗi/mark</th><th>Bảng định tuyến</th></tr>
<tr><td>0–99999</td><td>owner</td><td><code>st_mangle_tun0_OUTPUT</code> / 0x3c</td><td>60 → tun0</td></tr>
<tr><td>1300000–1399999</td><td>restricted 13</td><td>cùng chuỗi tun0 / 0x3c</td><td>60 → tun0</td></tr>
<tr><td>1000000–1099999</td><td>secondary 10</td><td><code>st_mangle_tun1_OUTPUT</code> / 0x3d</td><td>61 → tun1</td></tr>
</table>
<p>Gói đã có mark 0x1 hoặc UID <b>1016</b> (user <code>vpn</code>, chạy mtpd/racoon) được <b>miễn</b>.</p>
<h3>🧪 Thử nghiệm</h3>
<div class="sim" data-vpnroute></div>
<div class="callout c-info"><b>Hạn chế (4.4)</b>Cách triển khai còn lỗi khi chuyển giữa mạng vật lý (di động ↔ Wi-Fi); chiến lược nền tảng nhiều khả năng giữ nguyên.</div>
`},

{id:'wifi', icon:'📶', title:'Wi-Fi doanh nghiệp: 802.1X và EAP', html:`
<p>WPA/WPA2 chế độ <b>PSK (Personal)</b>: mọi thiết bị dùng chung một khóa 256 bit (từ khóa thô hoặc passphrase ASCII qua <b>PBKDF2</b>). Đơn giản nhưng <b>không mở rộng</b>: muốn thu hồi một người phải đổi passphrase chung → mọi người phải cấu hình lại; không phân biệt được người dùng/thiết bị để làm luật truy cập hay kế toán.</p>
<p>Giải pháp: <b>IEEE 802.1X</b> (đóng gói <b>EAP</b>) trong WPA/WPA2 Enterprise.</p>
<div class="flow"><div class="node">Supplicant<br><small>thiết bị Android</small></div><span class="arr">⇄ EAPOL ⇄</span><div class="node">Authenticator<br><small>Wi-Fi AP</small></div><span class="arr">⇄ RADIUS ⇄</span><div class="node hl">Authentication server<br><small>RADIUS</small></div></div>
<ul>
<li><b>Supplicant</b>: thiết bị muốn vào mạng. <b>Authenticator</b>: cổng vào mạng (AP). <b>Authentication server</b> (RADIUS): kiểm tra thông tin và quyết định theo chính sách.</li>
<li>Thông điệp EAP đóng gói bằng <b>EAPOL</b> (supplicant ↔ authenticator) và <b>RADIUS</b> (authenticator ↔ server).</li>
<li>EAP chỉ là <b>khung</b>; hai bên phải thương lượng một <b>phương thức xác thực</b> chung.</li>
</ul>
<h3>Phương thức EAP trên Android (4.4)</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="2" data-title="PEAP" data-desc="<p>Truyền thông điệp EAP qua kết nối <b>SSL</b> (bí mật + toàn vẹn). <b>Phase 1</b>: xác thực máy chủ bằng PKI + chứng chỉ server và dựng SSL. <b>Phase 2</b> (trong đường hầm): xác thực client – Android hỗ trợ <b>MSCHAPv2</b> (PEAPv0) và <b>GTC</b> (PEAPv2).</p>"><span>PEAP</span><small>SSL + phase 2</small></button>
  <button class="layer" data-c="1" data-title="EAP-TLS" data-desc="<p>TLS để <b>xác thực hai chiều</b>; từng là phương thức EAP duy nhất được cấp chứng nhận cho WPA Enterprise. Cần <b>chứng chỉ server</b> và <b>chứng chỉ client</b> X.509 → phải có PKI. Chặn client = thu hồi chứng chỉ. Android quản lý khóa/chứng chỉ client trong <b>system credential store</b>.</p>"><span>EAP-TLS</span><small>chứng chỉ 2 chiều</small></button>
  <button class="layer" data-c="3" data-title="EAP-TTLS" data-desc="<p>Dựa TLS nhưng <b>không bắt buộc chứng chỉ client</b>. Client xác thực ở Phase 1 (chứng chỉ) hoặc Phase 2 (giao thức khác). Android <b>không hỗ trợ</b> xác thực Phase 1; hỗ trợ Phase 2: <b>PAP, MSCHAP, MSCHAPv2, GTC</b>.</p>"><span>EAP-TTLS</span><small>TLS không cần cert client</small></button>
  <button class="layer" data-c="4" data-title="EAP-PWD" data-desc="<p>Dùng <b>mật khẩu chung</b> nhưng chống tấn công thụ động, chủ động và từ điển; có <b>forward secrecy</b> (lộ mật khẩu cũng không giải mã được phiên cũ). Dựa trên logarit rời rạc (trường hữu hạn hoặc đường cong elliptic). <b>Không dùng TLS</b> nên không cần cấu hình chứng chỉ.</p>"><span>EAP-PWD</span><small>mật khẩu, forward secrecy</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một phương thức.</p></div>
</div>
<h3>Kiến trúc Wi-Fi của Android</h3>
<ul>
<li>Driver kernel (theo SoC, thường đóng) → <code>wpa_supplicant</code> (daemon WPA supplicant, thường bị sửa theo SoC) → HAL (<code>libhardware_legacy</code>, chuyển lệnh qua socket điều khiển) → <code>WifiService</code> (facade <code>WifiManager</code>; <code>WifiStateMachine</code> với hơn chục trạng thái) → UI hệ thống (Settings, SystemUI).</li>
<li>Cấu hình ở <code>/data/misc/wifi/</code> (chủ user <b>wifi</b> UID 1010, tệp 0660 chủ system nhóm wifi): daemon cần thư mục ghi được. <code>wpa_supplicant.conf</code> gồm các khối <code>network={…}</code>.</li>
</ul>
<h3>Quản lý thông tin xác thực trong wpa_supplicant.conf</h3>
<table>
<tr><th>Chế độ</th><th>Lưu ở đâu</th></tr>
<tr><td><b>PSK</b></td><td><code>psk="password"</code> <b>cleartext</b> trong conf (không app thường truy cập được nhưng lấy được trên máy root)</td></tr>
<tr><td><b>PEAP</b></td><td>identity + password <b>cleartext</b>; CA qua <code>ca_cert="keystore://CACERT_eapclient"</code></td></tr>
<tr><td><b>EAP-TLS</b></td><td>CA + <code>client_cert="keystore://USRCERT_…"</code> + <code>engine="keystore"</code>, <code>key_id="USRPKEY_…"</code> → khóa client nằm trong <b>keystore</b> (bảo vệ cao nhất, có thể phần cứng)</td></tr>
<tr><td><b>EAP-TTLS</b></td><td>Chỉ tham chiếu CA; password cleartext</td></tr>
<tr><td><b>EAP-PWD</b></td><td>Không chứng chỉ; identity + password cleartext</td></tr>
</table>
<ul>
<li>Đường dẫn dạng URI <code>keystore://</code> là <b>mở rộng riêng của Android</b>: wpa_supplicant kết nối <code>IKeystoreService</code> và lấy chứng chỉ theo khóa là phần đường dẫn.</li>
<li><code>engine_id="keystore"</code>: dùng <b>OpenSSL keystore engine</b> (chương 7) nên ký bằng khóa trong credential store, tận dụng keymaster/phần cứng.</li>
<li>Từ 4.3 khi import có thể chọn chủ sở hữu khóa: đặt <i>Credential use = Wi-Fi</i> → chủ là user <b>wifi</b> (UID 1010), chỉ thành phần chạy bằng user wifi (như wpa_supplicant) truy cập được.</li>
</ul>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b>Mọi phương thức dùng <b>mật khẩu</b> → lưu cleartext trong conf. Chỉ <b>EAP-TLS</b> dựa vào khóa client → khóa ở keystore → an toàn nhất.</div>
<h3>Thêm mạng EAP bằng WifiManager (4.3+)</h3>
<p>Trước 4.3 chỉ cấu hình tay qua Settings. <b>API 18</b> thêm trường <code>enterpriseConfig</code> (kiểu <code>WifiEnterpriseConfig</code>) vào <code>WifiConfiguration</code> cho phép <b>tự động cung cấp mạng</b> trong doanh nghiệp. Cần quyền <code>CHANGE_WIFI_STATE</code> (dangerous).</p>
<pre>WifiEnterpriseConfig ec = new WifiEnterpriseConfig();
ec.setCaCertificate(caCert);
ec.setClientKeyEntry(clientKey, clientCert);
ec.setEapMethod(WifiEnterpriseConfig.Eap.TLS);
ec.setPhase2Method(WifiEnterpriseConfig.Phase2.NONE);   <span class="c">// TLS xác thực ở phase 1</span>
ec.setIdentity("android1");                              <span class="c">// bắt buộc dù server có thể không dùng</span>
WifiConfiguration cfg = new WifiConfiguration();
cfg.enterpriseConfig = ec;
cfg.SSID = "\\"eap-ap\\"";
cfg.allowedKeyManagement.set(WifiConfiguration.KeyMgmt.IEEE8021X);
cfg.allowedKeyManagement.set(WifiConfiguration.KeyMgmt.WPA_EAP);  <span class="c">// mặc định là WPA-PSK nên phải đặt</span>
int netId = wm.addNetwork(cfg);
if (netId != -1) wm.saveConfiguration();                 <span class="c">// ghi wpa_supplicant.conf</span></pre>
<ul>
<li>Khóa/chứng chỉ thường nằm trong PKCS#12 (đọc bằng KeyStore "PKCS12"); Android <b>tự import</b> vào system keystore khi thêm profile, và tự sinh alias (dựa trên tên AP, key management, phương thức EAP).</li>
</ul>
`}

],

cards: [
 {f:'Device Administration API ra đời ở phiên bản nào?',b:'<b>Android 2.2</b>.'},
 {f:'Device administrator làm được gì?',b:'Áp chính sách bảo mật toàn hệ thống, khóa máy, đổi mật khẩu màn hình khóa, wipe dữ liệu. Phải được bật rõ ràng và không gỡ được khi đang active.'},
 {f:'Nêu các chính sách và thứ tự bit (0–9).',b:'0 limit-password · 1 watch-login · 2 reset-password · 3 force-lock · 4 wipe-data · 5 set-global-proxy · 6 expire-password · 7 encrypted-storage · 8 disable-camera · 9 disable-keyguard-features.'},
 {f:'flags="28" nghĩa là gì? 1023?',b:'28 = 4+8+16 → reset-password, force-lock, wipe-data (Play Services). 1023 = 0x3FF = cả 10 chính sách.'},
 {f:'Chính sách nào ẩn với app SDK?',b:'<code>set-global-proxy</code> (bit 5) – chỉ device owner đặt được.'},
 {f:'DevicePolicyManagerService chạy ở đâu và đặc biệt thế nào?',b:'Trong system_server (user system). Khác dịch vụ khác, nó trao một số hành động đặc quyền cho app bên thứ ba <b>không cần quyền hệ thống</b>, nên bật/tắt admin tùy ý.'},
 {f:'Điều kiện để lời gọi API admin (vd resetPassword) được chấp nhận?',b:'Gọi từ admin <b>đang active</b>, <b>cùng UID</b> với admin component, và đã <b>yêu cầu đúng chính sách</b> (vd USES_POLICY_RESET_PASSWORD).'},
 {f:'Khi nhiều admin cùng active, chính sách hiệu lực là gì?',b:'Chọn mức <b>nghiêm ngặt nhất</b> giữa các admin.'},
 {f:'Chính sách được cấp theo kiểu nào?',b:'<b>Tất cả hoặc không gì</b>: người dùng xem danh sách và bật cả admin; không chọn lọc từng chính sách.'},
 {f:'Cách app xin kích hoạt device admin?',b:'Gửi intent <code>ACTION_ADD_DEVICE_ADMIN</code> + <code>EXTRA_DEVICE_ADMIN</code>; Settings (có MANAGE_DEVICE_ADMINS) hiện hộp thoại, bấm Activate → <code>setActiveAdmin()</code>.'},
 {f:'Quyền BIND_DEVICE_ADMIN và MANAGE_DEVICE_ADMINS?',b:'Cả hai mức <b>signature</b>. BIND_DEVICE_ADMIN đòi trên receiver admin (chỉ hệ thống kích hoạt); MANAGE_DEVICE_ADMINS cho phép gọi setActiveAdmin() không cần người dùng.'},
 {f:'Admin tự gỡ kích hoạt bằng gì?',b:'<code>removeActiveAdmin()</code> (khi đang active).'},
 {f:'device_policies.xml lưu gì? Quyền tệp?',b:'Từng admin (<code>&lt;admin&gt;</code> + flags + các giá trị chính sách), <code>password-owner</code> (UID), <code>active-password</code>. Chủ system, mode 0600.'},
 {f:'password-quality value 327680 là gì?',b:'0x50000 = <code>PASSWORD_QUALITY_ALPHANUMERIC</code>.'},
 {f:'limit-password ảnh hưởng thế nào đến phương thức mở khóa?',b:'Tắt các cách mở khóa không đạt chất lượng (vd ALPHANUMERIC tắt Pattern và PIN). Mật khẩu hiện tại vẫn dùng đến khi đổi; áp dụng theo từng người dùng.'},
 {f:'Watch-login nhận thông báo bằng gì?',b:'Broadcast <code>ACTION_PASSWORD_FAILED/SUCCEEDED</code>; DeviceAdminReceiver gọi onPasswordFailed()/onPasswordSucceeded().'},
 {f:'Reset password với thiết bị mã hóa có hệ quả gì?',b:'Đổi mật khẩu màn hình khóa của owner cũng đổi mật khẩu mã hóa thiết bị.'},
 {f:'wipeData() và wipe tự động khi sai mật khẩu?',b:'Kết hợp watch-login + <code>setMaximumFailedPasswordsForWipe()</code>. Owner sai → wipe toàn máy; secondary sai → chỉ xóa người dùng đó và chuyển về owner.'},
 {f:'Wipe toàn máy thực hiện bằng cách nào? Điểm yếu?',b:'Ghi lệnh <code>wipe_data</code> vào cache partition và reboot vào <b>recovery</b> thực thi. Recovery tùy biến bỏ qua/xóa lệnh thì wipe có thể không xảy ra.'},
 {f:'expire-password thực thi thế nào?',b:'Đặt alarm hằng ngày kiểm hạn; hết hạn thì đăng thông báo đổi mật khẩu hằng ngày; admin nhận onPasswordExpiring().'},
 {f:'encrypted-storage có tự mã hóa không?',b:'Không. Chỉ owner yêu cầu; admin phải kiểm <code>getStorageEncryptionStatus()</code> (ro.crypto.state) rồi khởi động bằng <code>ACTION_START_ENCRYPTION</code>.'},
 {f:'disable-camera thực thi ra sao?',b:'Đặt <code>sys.secpolicy.camera.disabled=1</code>; <code>CameraService</code> native từ chối mọi kết nối → tắt camera cho mọi người dùng.'},
 {f:'Device owner là gì?',b:'Device admin đặc biệt (4.4+) nằm trong ảnh hệ thống, <b>không thể tắt hay gỡ</b>. Đặt bằng <code>setDeviceOwner()</code> trước khi provision (DEVICE_PROVISIONED=0); lưu <code>/data/system/device_owner.xml</code>.'},
 {f:'Managed device thay đổi gì về cảnh báo CA?',b:'Có device owner + CA bổ sung (cài âm thầm qua installCaCert, quyền MANAGE_CA_CERTIFICATES) → cảnh báo giám sát mạng giảm thành thông báo thông tin “nhẹ”.'},
 {f:'EAS (Exchange ActiveSync) và Email app?',b:'Giao thức đồng bộ email/danh bạ/lịch/tác vụ. App Email không cho đồng bộ đến khi bật device admin tích hợp; chính sách lấy từ server bằng <b>EAS Provision</b>.'},
 {f:'Google Apps Device Policy làm gì?',b:'Áp chính sách miền Google Apps; cho định vị, đổ chuông, khóa, wipe từ xa và xóa chọn lọc tài khoản công ty. Chính sách đẩy bằng giao thức đồng bộ độc quyền.'},
 {f:'PPTP: điểm yếu?',b:'Chỉ EAP-TLS an toàn; MPPE (RC4) không xác thực bản mã → bit-flipping; RC4 có nhiều điểm yếu.'},
 {f:'L2TP/IPSec hoạt động thế nào?',b:'L2TP không tự mã hóa nên chạy trong IPSec: dựng kênh IPSec (SA qua ISAKMP/IKE: chứng chỉ X.509 + Diffie-Hellman hoặc PSK) rồi tạo đường hầm L2TP bên trong.'},
 {f:'IPSec Xauth và Modecfg?',b:'Xauth: xác thực người dùng bổ sung trong IKE (RADIUS, 2FA). Modecfg: server đẩy IP riêng, DNS cho client. Cả hai → VPN thuần IPSec.'},
 {f:'Ưu điểm VPN SSL (OpenVPN) so với IPSec?',b:'Đơn giản, chạy hoàn toàn userspace, dễ qua firewall/NAT/proxy (một cổng TCP/UDP). IPSec cần hỗ trợ kernel và nhiều giao thức.'},
 {f:'Legacy VPN: thành phần cài đặt?',b:'<code>mtpd</code> (PPTP/L2TP, một phiên) + driver PPPoPNS/PPPoLAC; <code>racoon</code> (IKEv1) + IPSec kernel. Chạy group vpn/net_admin/inet; tạo tun0; state file <code>/data/misc/vpn/state</code>.'},
 {f:'VPN profile được bảo vệ thế nào?',b:'Mã hóa bởi keystore (khóa thiết bị), lưu <code>1000_VPN_&lt;ms-hex&gt;</code>; chỉ chứa alias khóa/chứng chỉ; racoon dùng keystore OpenSSL engine. Nhưng PSK/mật khẩu lưu dạng rõ vì keystore phần cứng chưa hỗ trợ khóa đối xứng.'},
 {f:'Always-on VPN làm gì và triển khai ra sao?',b:'4.2+: chặn mọi mạng cho đến khi VPN kết nối. Profile dùng IP gateway + DNS tường minh; tên lưu ở <code>LOCKDOWN_VPN</code>; <code>LockdownVpnTracker</code> + netd/iptables: chỉ cho gói qua interface VPN, server chỉ cổng 500/4500/1701.'},
 {f:'VpnService: tại sao cần BIND_VPN_SERVICE và người dùng xác nhận?',b:'BIND_VPN_SERVICE (signature) chỉ cho hệ thống bind. Raw packet access cho phép chặn bắt lưu lượng nên cần hộp thoại prepare() + notification thường trực.'},
 {f:'prepare() và establish() khác nhau?',b:'prepare(): xin phép người dùng, đảm bảo một VPN/người dùng, lưu gói được phép. establish(): kiểm UID khớp, user được phép, service đòi BIND_VPN_SERVICE; tạo interface, route, DNS và trả file descriptor.'},
 {f:'Per-user VPN (4.4) hoạt động thế nào?',b:'NetworkManagementService → netd → iptables <code>owner UID</code> mark theo dải UID từng người dùng → <code>ip rule fwmark</code> → bảng định tuyến riêng → tun của VPN người đó. Restricted dùng VPN của owner.'},
 {f:'WPA-PSK có vấn đề gì? 802.1X giải quyết gì?',b:'PSK: khóa chung, thu hồi một người phải đổi cho tất cả, không phân biệt người dùng. 802.1X/EAP: xác thực từng người qua RADIUS.'},
 {f:'Supplicant, authenticator, authentication server?',b:'Supplicant: thiết bị Android. Authenticator: AP. Authentication server: RADIUS. Thông điệp EAP qua EAPOL và RADIUS.'},
 {f:'4 phương thức EAP Android 4.4 hỗ trợ?',b:'<b>PEAP</b> (MSCHAPv2, GTC) · <b>EAP-TLS</b> · <b>EAP-TTLS</b> (PAP, MSCHAP, MSCHAPv2, GTC) · <b>EAP-PWD</b>.'},
 {f:'EAP-TLS cần gì? Android lưu ở đâu?',b:'Chứng chỉ server và client X.509 (cần PKI). Khóa/chứng chỉ client trong system credential store; conf dùng <code>keystore://</code>, <code>engine_id=keystore</code>, <code>key_id</code>.'},
 {f:'EAP-PWD đặc biệt ở điểm nào?',b:'Mật khẩu chung nhưng chống tấn công thụ động/chủ động/từ điển, có forward secrecy; không dùng TLS nên không cần chứng chỉ.'},
 {f:'wpa_supplicant.conf cho mật khẩu thế nào?',b:'PSK, identity, password lưu <b>cleartext</b> trong <code>/data/misc/wifi/</code> (0660 system:wifi). Chỉ EAP-TLS giữ khóa trong keystore.'},
 {f:'keystore:// trong ca_cert nghĩa gì?',b:'Mở rộng riêng của Android: wpa_supplicant lấy chứng chỉ từ IKeystoreService theo đường dẫn.'},
 {f:'Credential use = Wi-Fi khi import là gì?',b:'(4.3+) Chủ khóa/chứng chỉ là user wifi (UID 1010) → chỉ thành phần chạy bằng user wifi (wpa_supplicant) truy cập được.'},
 {f:'Thêm mạng EAP bằng WifiManager cần gì?',b:'Quyền <code>CHANGE_WIFI_STATE</code>; <code>WifiEnterpriseConfig</code> (CA, client key/cert, Eap method, Phase2, identity); đặt KeyMgmt IEEE8021X + WPA_EAP; <code>addNetwork()</code> + <code>saveConfiguration()</code>. Từ API 18.'}
],

quiz: [
 {q:'Device Administration API xuất hiện từ:',o:['Android 1.6','Android 2.2','Android 4.0','Android 4.4'],a:1,e:'Android 2.2.'},
 {q:'Khi một device admin đang active, người dùng có thể:',o:['Gỡ cài đặt nó bình thường','Không gỡ cài đặt được cho đến khi tắt quyền admin','Sửa mã của nó','Ẩn nó'],a:1,e:'Phải tắt admin trước.'},
 {q:'flags=1023 của một admin cho biết điều gì?',o:['Chỉ khóa máy','Cả 10 chính sách đều được yêu cầu','Không chính sách nào','Chỉ wipe'],a:1,e:'1023 = 0x3FF = 10 bit cùng bật.'},
 {q:'Bit nào ứng với chính sách wipe-data?',o:['Bit 0','Bit 2','Bit 4','Bit 7'],a:2,e:'0 limit, 1 watch, 2 reset, 3 force-lock, 4 wipe.'},
 {q:'Điều kiện để resetPassword() thành công gồm:',o:['Chỉ cần có quyền INTERNET','Admin đang active, cùng UID với admin component và đã yêu cầu USES_POLICY_RESET_PASSWORD','Chỉ cần root','Chỉ cần ký platform'],a:1,e:'Kiểm tra UID qua Binder.getCallingUid().'},
 {q:'Nhiều admin cùng active, chính sách hiệu lực là:',o:['Của admin cài đầu tiên','Mức nghiêm ngặt nhất trong các admin','Mức dễ nhất','Của admin cài sau cùng'],a:1,e:'Hệ thống chọn strictest.'},
 {q:'Ai là handler của intent ACTION_ADD_DEVICE_ADMIN?',o:['Bất kỳ app nào','App Settings (có MANAGE_DEVICE_ADMINS)','Play Store','Launcher'],a:1,e:'Settings hiện hộp thoại và gọi setActiveAdmin().'},
 {q:'Vì sao BIND_DEVICE_ADMIN đặt trên receiver của admin?',o:['Để tăng tốc','Quyền signature đảm bảo chỉ hệ thống kích hoạt/gửi sự kiện admin','Để mã hóa','Để cho app khác bind'],a:1,e:'Nhờ đó app thường không tự kích hoạt admin.'},
 {q:'Đặt password quality ALPHANUMERIC sẽ gây ra điều gì?',o:['Mật khẩu hiện tại bị xóa ngay','Pattern và PIN bị tắt; mật khẩu hiện tại vẫn dùng đến khi đổi','Camera bị tắt','Máy bị wipe'],a:1,e:'Hiệu lực theo từng người dùng.'},
 {q:'Khi secondary user nhập sai mật khẩu đủ ngưỡng đã đặt cho wipe:',o:['Wipe toàn máy','Chỉ người dùng đó bị xóa và máy chuyển về owner','Máy tắt','Không gì xảy ra'],a:1,e:'Owner sai mới wipe toàn máy.'},
 {q:'Wipe toàn máy được thực hiện bởi:',o:['DevicePolicyManagerService trực tiếp','Recovery OS, sau khi lệnh wipe_data được ghi vào cache partition và máy reboot','vold','installd'],a:1,e:'Recovery tùy biến có thể bỏ qua lệnh.'},
 {q:'Việc yêu cầu encrypted-storage có tự mã hóa thiết bị không?',o:['Có, ngay lập tức','Không; admin phải kiểm trạng thái và bắt đầu bằng ACTION_START_ENCRYPTION','Chỉ trên tablet','Chỉ khi cắm sạc'],a:1,e:'Chỉ owner mới yêu cầu được.'},
 {q:'Camera bị disable-camera chặn bằng cơ chế nào?',o:['Gỡ driver','Thuộc tính sys.secpolicy.camera.disabled=1 được CameraService kiểm','SELinux','Xóa app camera'],a:1,e:'CameraService từ chối mọi kết nối.'},
 {q:'Device owner khác device admin thường ở điểm nào?',o:['Không có chính sách','Không thể tắt hay gỡ; thuộc ảnh hệ thống; đặt trước khi provision','Chỉ dùng cho tablet','Không cần manifest'],a:1,e:'setDeviceOwner() chỉ gọi khi DEVICE_PROVISIONED=0.'},
 {q:'Vì sao quyền Android thường không dùng để làm device admin?',o:['Vì tốn bộ nhớ','Vì quyền cấp lúc cài, không thu hồi; còn admin cần bật/tắt và giới hạn theo chính sách khai báo','Vì không có quyền admin','Vì bị cấm'],a:1,e:'Do đó dùng cơ chế quản lý đặc quyền riêng của DevicePolicyManagerService.'},
 {q:'Với EAS, chính sách bảo mật đến từ đâu?',o:['Dựng sẵn trong app Email','Lấy từ server bằng giao thức EAS Provision','Từ Play Store','Từ SIM'],a:1,e:'App Email chặn đồng bộ đến khi bật admin.'},
 {q:'PPTP bị coi là yếu chủ yếu vì:',o:['Dùng UDP','MPPE (RC4) không xác thực bản mã (bit-flipping) và RC4 có nhiều điểm yếu','Không có đường hầm','Dùng quá nhiều cổng'],a:1,e:'Chỉ EAP-TLS trong PPTP được xem là an toàn.'},
 {q:'Vì sao L2TP cần chạy cùng IPSec?',o:['L2TP quá nhanh','L2TP không tự cung cấp mã hóa/bí mật, IPSec bổ sung xác thực, bí mật, toàn vẹn','Vì L2TP dùng GRE','Vì Android bắt buộc'],a:1,e:'Kênh IPSec dựng trước, L2TP chạy bên trong.'},
 {q:'Ưu điểm của OpenVPN so với IPSec:',o:['Nhanh hơn luôn','Đơn giản, chạy hoàn toàn userspace, dễ qua firewall/NAT','Chuẩn hóa duy nhất','Không dùng SSL'],a:1,e:'IPSec cần hỗ trợ kernel và nhiều giao thức.'},
 {q:'PSK/mật khẩu trong VPN profile được lưu thế nào?',o:['Mã hóa bằng phần cứng','Profile mã hóa bởi keystore nhưng PSK/mật khẩu bên trong ở dạng rõ vì keystore phần cứng không hỗ trợ khóa đối xứng','Băm SHA-256','Không lưu'],a:1,e:'Khóa riêng chỉ lưu alias, được bảo vệ tốt hơn.'},
 {q:'Always-on VPN bảo đảm điều gì?',o:['Tăng tốc mạng','Chặn mọi kết nối cho đến khi VPN thiết lập, chỉ cho gói qua interface VPN bằng iptables','Tắt Wi-Fi','Mã hóa SD card'],a:1,e:'Profile phải dùng IP gateway và DNS tường minh.'},
 {q:'Vì sao Always-on VPN yêu cầu DNS tường minh?',o:['Để nhanh hơn','Để DNS không rò qua máy chủ DNS cục bộ bị chặn','Vì IPv6','Vì VPN legacy'],a:1,e:'Máy chủ DNS cục bộ bị chặn khi lockdown.'},
 {q:'VpnService cần BIND_VPN_SERVICE (signature) để:',o:['Dùng Internet','Đảm bảo chỉ hệ thống bind được vào service VPN','Mã hóa gói','Dùng camera'],a:1,e:'establish() ném SecurityException nếu service không đòi quyền này.'},
 {q:'Vì sao VPN dựa ứng dụng không thể tự khởi động?',o:['Do giới hạn pin','Vì có quyền truy cập thô gói tin nên cần người dùng xác nhận (prepare) và có notification thường trực','Do SELinux','Do giấy phép'],a:1,e:'Bảo vệ người dùng khỏi chặn bắt lưu lượng.'},
 {q:'Per-user VPN của Android 4.4 dựa trên kỹ thuật nào?',o:['SELinux','iptables owner match + packet mark + ip rule fwmark + bảng định tuyến riêng','Chỉ DNS','Proxy HTTP'],a:1,e:'Do netd (root) thực hiện qua NetworkManagementService.'},
 {q:'Restricted profile và VPN:',o:['Có VPN riêng','Dùng chung VPN của owner','Không có mạng','Dùng VPN của secondary'],a:1,e:'Restricted không tự bật được VPN.'},
 {q:'UID 1016 trong luật iptables VPN thuộc về:',o:['User system','User vpn (chạy mtpd/racoon) – được miễn định tuyến lại','App đầu tiên','Shell'],a:1,e:'Để daemon VPN legacy không bị đẩy vào chính đường hầm.'},
 {q:'WPA-PSK khó mở rộng vì:',o:['Quá chậm','Mọi người dùng chung một khóa – thu hồi một người buộc đổi khóa cho tất cả','Không mã hóa','Không dùng được trên điện thoại'],a:1,e:'802.1X/EAP giải quyết bằng xác thực từng người.'},
 {q:'Trong 802.1X, “authenticator” thường là:',o:['Thiết bị Android','Điểm truy cập Wi-Fi (AP)','Máy chủ RADIUS','Trình duyệt'],a:1,e:'Supplicant = thiết bị; authentication server = RADIUS.'},
 {q:'Phương thức EAP nào cho xác thực hai chiều bằng chứng chỉ, cần PKI?',o:['EAP-PWD','EAP-TLS','EAP-TTLS','PEAP'],a:1,e:'Cần chứng chỉ server và client.'},
 {q:'Android KHÔNG hỗ trợ điều gì với EAP-TTLS?',o:['Phase 2 PAP','Xác thực client bằng chứng chỉ ở Phase 1','Phase 2 MSCHAPv2','Phase 2 GTC'],a:1,e:'Chỉ hỗ trợ xác thực ở Phase 2.'},
 {q:'Cấu hình EAP nào lưu khóa client trong system keystore (bảo vệ cao nhất)?',o:['PEAP','EAP-TLS','EAP-TTLS','EAP-PWD'],a:1,e:'Các phương thức dùng mật khẩu lưu cleartext trong wpa_supplicant.conf.'},
 {q:'ca_cert="keystore://CACERT_eapclient" là:',o:['Đường dẫn tệp thường','Mở rộng riêng của Android để wpa_supplicant lấy chứng chỉ từ keystore service','Một URL web','Hash'],a:1,e:'Nó gọi IKeystoreService.'},
 {q:'Khi thêm mạng EAP-TLS bằng WifiManager, vì sao phải đặt KeyMgmt IEEE8021X và WPA_EAP?',o:['Để mã hóa mạnh hơn','Vì mặc định là WPA-PSK','Vì cần root','Vì có SIM'],a:1,e:'Cũng cần đặt identity dù server có thể không dùng.'},
 {q:'Quyền để dùng WifiManager.addNetwork():',o:['INTERNET','CHANGE_WIFI_STATE','MANAGE_ACCOUNTS','BIND_VPN_SERVICE'],a:1,e:'Mức dangerous.'}
],

order: [
 {id:'o-act',title:'Kích hoạt device admin',intro:'Sắp xếp quy trình đúng.',
  items:['App khai báo receiver (BIND_DEVICE_ADMIN) + XML uses-policies','App gửi intent ACTION_ADD_DEVICE_ADMIN','Settings xác minh admin và hiện hộp thoại liệt kê chính sách','Người dùng bấm Activate','setActiveAdmin() thêm vào danh sách admin active; onEnabled() được gọi','App được dùng API đặc quyền theo các chính sách đã khai báo'],
  explain:'App không tự kích hoạt: luôn qua Settings và xác nhận người dùng.'},
 {id:'o-vpn',title:'Thiết lập VPN dựa ứng dụng',intro:'Sắp xếp các bước đúng thứ tự.',
  items:['Khai báo service (BIND_VPN_SERVICE + action android.net.VpnService)','Gọi VpnService.prepare() → hộp thoại xin phép','Tạo đường hầm tới gateway, thương lượng tham số mạng','Cấu hình VpnService.Builder','Gọi establish(): kiểm UID, quyền, tạo interface, route, DNS','Hiện notification thường trực; đọc/ghi file descriptor để đưa gói qua tunnel'],
  explain:'prepare → tunnel → Builder → establish → notification.'},
 {id:'o-eap',title:'Quy trình xác thực 802.1X',intro:'Sắp xếp theo thứ tự.',
  items:['Supplicant (Android) kết nối AP','Hai bên (qua authenticator) thương lượng phương thức EAP chung','Thông điệp EAP đi qua EAPOL tới AP, rồi RADIUS tới authentication server','Server kiểm tra thông tin theo chính sách truy cập','Cấp hoặc từ chối truy cập mạng'],
  explain:'Supplicant → authenticator → server RADIUS.'}
],

classify: [
 {id:'c-pol',title:'Chính sách nào?',intro:'Gán mô tả cho chính sách device admin.',buckets:['limit-password','force-lock','wipe-data','disable-camera'],
  items:[
   {t:'Đặt sys.secpolicy.camera.disabled=1',b:3},{t:'lockNow() và setMaximumTimeToLock()',b:1},{t:'Ghi wipe_data vào cache và reboot vào recovery',b:2},
   {t:'Tắt Pattern và PIN khi yêu cầu ALPHANUMERIC',b:0},{t:'setMaximumFailedPasswordsForWipe()',b:2},{t:'Giới hạn thời gian tự khóa trong Display settings',b:1}],
  explain:'Mỗi chính sách một cơ chế thực thi.'},
 {id:'c-vpn',title:'Giao thức VPN nào?',intro:'Gán đặc điểm.',buckets:['PPTP','L2TP/IPSec','SSL (OpenVPN)'],
  items:[
   {t:'Đường hầm GRE gói PPP; MPPE/RC4',b:0},{t:'Cần SA, ISAKMP/IKE',b:1},{t:'Chạy hoàn toàn userspace, dồn kênh một cổng',b:2},
   {t:'Bị bit-flipping vì không xác thực bản mã',b:0},{t:'Gói L2TP luôn nằm trong gói IPSec',b:1},{t:'Dễ qua firewall/NAT/proxy',b:2}],
  explain:'PPTP yếu · L2TP cần IPSec · SSL đơn giản, userspace.'},
 {id:'c-eap',title:'Phương thức EAP nào?',intro:'Gán đặc điểm.',buckets:['PEAP','EAP-TLS','EAP-TTLS','EAP-PWD'],
  items:[
   {t:'Cần chứng chỉ client X.509',b:1},{t:'Forward secrecy, không dùng TLS',b:3},{t:'Phase 2: MSCHAPv2 hoặc GTC trong đường hầm SSL',b:0},
   {t:'Phase 2: PAP, MSCHAP, MSCHAPv2, GTC; Android không hỗ trợ xác thực Phase 1',b:2},{t:'Khóa client lưu trong system keystore',b:1},{t:'Không cần cấu hình chứng chỉ',b:3}],
  explain:'Chỉ EAP-TLS dựa vào khóa client.'}
],

cheat: [
 {title:'🏢 Device admin',html:'<div class="mnemo">Mật khẩu · Theo dõi · Reset · Khóa · Xóa</div><ul><li>10 bit chính sách; flags bitmask</li><li>UID + active + policy</li><li>Strictest wins; all-or-nothing</li><li>Kích hoạt qua Settings</li></ul>'},
 {title:'⚖️ Thực thi',html:'<ul><li>wipe: wipe_data → recovery</li><li>camera: sys.secpolicy.camera.disabled</li><li>encryption: admin phải tự start</li><li>owner sai → wipe máy; secondary → chỉ user</li></ul>'},
 {title:'👑 Device owner',html:'<ul><li>4.4+, ảnh hệ thống</li><li>setDeviceOwner() trước provision</li><li>Không tắt, không gỡ</li><li>CA managed → thông báo nhẹ</li></ul>'},
 {title:'🛜 VPN',html:'<ul><li>PPTP yếu · L2TP cần IPSec · Xauth · SSL</li><li>legacy: mtpd, racoon, state file</li><li>profile: 1000_VPN_*, PSK cleartext</li><li>always-on: LOCKDOWN_VPN + iptables</li></ul>'},
 {title:'📱 VpnService',html:'<ul><li>BIND_VPN_SERVICE (signature)</li><li>prepare → establish → fd</li><li>Notification, com.android.vpndialogs</li><li>4.4 per-user: owner UID match + mark + ip rule</li></ul>'},
 {title:'📶 Wi-Fi EAP',html:'<ul><li>Supplicant · AP · RADIUS</li><li>PEAP · EAP-TLS · EAP-TTLS · EAP-PWD</li><li>keystore:// ; EAP-TLS an toàn nhất</li><li>WifiEnterpriseConfig (4.3+)</li></ul>'}
]
};
