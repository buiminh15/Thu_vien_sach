CH[8] = {
sections: [

{id:'overview', icon:'👤', title:'Tổng quan quản lý tài khoản online', html:`
<p>Doanh nghiệp dùng PKI, còn phần lớn dịch vụ online công cộng dùng <b>mật khẩu</b> – mà gõ mật khẩu phức tạp trên màn hình cảm ứng nhiều lần mỗi ngày rất khó chịu. Android cung cấp một <b>sổ đăng ký tài khoản tập trung</b> có thể <b>lưu đệm và dùng lại</b> thông tin xác thực, để ứng dụng truy cập dịch vụ web <b>thay mặt người dùng mà không phải tự xử lý mật khẩu</b>.</p>
<div class="analogy"><b>AccountManager</b> giống <b>nhân viên lễ tân khách sạn</b> giữ chìa khóa các phòng: bạn đưa thông tin một lần, sau đó ai cần vào phòng thì xin lễ tân một <b>thẻ tạm (token)</b> – không ai phải biết mật khẩu gốc.</div>
<ul>
<li><b>Android 2.0 (API 5)</b>: có API công khai với lớp <code>AccountManager</code>. Người dùng nhập thông tin xác thực <b>một lần</b>, ứng dụng được cấp quyền “một chạm”.</li>
<li>Tính năng chính khác: lấy <b>authentication token</b> cho tài khoản được hỗ trợ → xác thực với dịch vụ online mà <b>không cần chạm vào mật khẩu</b>.</li>
<li>Ở một số bản cũ, AccountManager còn theo dõi SIM và xóa thông tin lưu đệm khi đổi SIM – đã bỏ từ Android 2.3.4.</li>
</ul>
<h3>Đăng ký loại tài khoản mới đem lại gì?</h3>
<div class="cards">
 <div class="mini g"><span class="em">🗄</span><h4>Kho tập trung</h4><p>Lưu thông tin xác thực trong <b>CSDL hệ thống</b>.</p></div>
 <div class="mini b"><span class="em">🎟</span><h4>Phát token</h4><p>Cấp token cho ứng dụng bên thứ ba.</p></div>
 <div class="mini a"><span class="em">🔄</span><h4>Đồng bộ nền tự động</h4><p>Dùng sync adapter của Android.</p></div>
</div>
`},

{id:'architecture', icon:'🏗', title:'Kiến trúc: AccountManager, Service và Authenticator', html:`
<svg class="dia" viewBox="0 0 760 270" role="img" aria-label="Các thành phần quản lý tài khoản" style="font-size:14px">
 <rect class="blu" x="10" y="100" width="130" height="56" rx="10"/><text x="75" y="124" text-anchor="middle" font-weight="700">App</text><text x="75" y="144" text-anchor="middle" class="sm">AccountManager</text>
 <rect class="acc" x="200" y="100" width="210" height="56" rx="10"/><text x="305" y="124" text-anchor="middle" font-weight="700">AccountManagerService</text><text x="305" y="144" text-anchor="middle" class="sm">điều phối + kiểm tra quyền</text>
 <rect class="amb" x="480" y="10" width="270" height="60" rx="10"/><text x="615" y="36" text-anchor="middle" font-weight="700">AccountAuthenticatorCache</text><text x="615" y="56" text-anchor="middle" class="sm">registered_services/*.xml</text>
 <rect class="box" x="480" y="100" width="270" height="60" rx="10"/><text x="615" y="126" text-anchor="middle" font-weight="700">Authenticator module</text><text x="615" y="146" text-anchor="middle" class="sm">IAccountAuthenticator · trong app</text>
 <rect class="red" x="200" y="200" width="210" height="60" rx="10"/><text x="305" y="226" text-anchor="middle" font-weight="700">accounts.db</text><text x="305" y="246" text-anchor="middle" class="sm">/data/system/users/&lt;id&gt;/</text>
 <path class="ln" d="M140 128 H200 M410 128 H480 M305 100 V40 H480 M305 156 V200"/>
</svg>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="AccountManager (facade, phía app)" data-desc="<p>Lớp “mặt tiền” lộ một phần chức năng của service cho app bên thứ ba. Khởi động <b>luồng worker</b> cho phương thức bất đồng bộ và gửi kết quả/lỗi về cho người gọi. Hiện <b>account chooser</b> khi nhiều tài khoản cùng đáp ứng.</p><p><b>Không tự kiểm tra quyền</b> – mọi kiểm tra quyền do AccountManagerService làm.</p>"><span>AccountManager</span><small>facade</small></button>
  <button class="layer" data-c="2" data-title="AccountManagerService" data-desc="<p>Trung tâm điều phối: gọi vào authenticator hoặc dùng dữ liệu đã lưu đệm trong <code>accounts.db</code>. <b>Không cài sẵn</b> hình thức xác thực nào – chỉ điều phối các <b>module authenticator cắm thêm</b> (Google, Twitter, Exchange…).</p><p>Ứng dụng chỉ dùng API của service, <b>không truy cập trực tiếp</b> authenticator hay CSDL → đảm bảo quy trình và quy tắc truy cập.</p>"><span>AccountManagerService</span><small>điều phối + quyền</small></button>
  <button class="layer" data-c="3" data-title="Authenticator module" data-desc="<p>Là một <b>bound service</b> do ứng dụng cài đặt, cài giao diện AIDL <code>IAccountAuthenticator</code> (thêm tài khoản, hỏi thông tin xác thực, lấy token, cập nhật metadata). Thực tế mở rộng <code>AbstractAccountAuthenticator</code>.</p><p>Lớp này đảm bảo mọi lời gọi tới stub AIDL phải có quyền <b>ACCOUNT_MANAGER</b> (signature, chỉ hệ thống) → chỉ AccountManagerService gọi được.</p>"><span>Authenticator</span><small>IAccountAuthenticator</small></button>
  <button class="layer" data-c="4" data-title="AccountAuthenticatorCache" data-desc="<p>Quét các gói khai báo authenticator (qua PackageManagerService) và cung cấp cho AccountManagerService. Dựng <b>lười (on demand)</b>, cập nhật bằng broadcast khi gói thêm/cập nhật/gỡ, và <b>lưu xuống đĩa</b> ở <code>/data/system/registered_services/android.accounts.AccountAuthenticator.xml</code>.</p>"><span>AccountAuthenticatorCache</span><small>registered services</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một thành phần.</p></div>
</div>
<h3>Loại tài khoản (account type)</h3>
<ul>
<li>Chuỗi định danh duy nhất, thường dạng tên miền ngược: <code>com.example.account</code>, <code>org.foo.account</code>. Android không bắt buộc quy ước đặt tên.</li>
<li>Authenticator = service bind được bằng intent action <code>android.accounts.AccountAuthenticator</code>; loại tài khoản và metadata gắn qua thẻ <code>&lt;meta-data&gt;</code> trỏ tới tệp XML tài nguyên.</li>
</ul>
<pre>&lt;service uid="10023" type="com.android.email" /&gt;       <span class="c">&lt;!-- cache cho user 0 --&gt;</span>
&lt;service uid="1010023" type="com.android.email" /&gt;     <span class="c">&lt;!-- cache cho user 10 (UID = 10×100000 + app) --&gt;</span></pre>
<p>Trên máy đa người dùng, cache có mục riêng cho từng người dùng. Người dùng nào không có mục cho một loại tài khoản thì không dùng được loại đó.</p>
<div class="callout c-info"><b>&lt;meta-data&gt; là gì?</b>Cặp tên–giá trị tùy ý gắn với một thành phần (literal hoặc tham chiếu tài nguyên). Giá trị của mọi thẻ meta-data gom vào một <code>Bundle</code> ở trường <code>metaData</code> của <code>PackageItemInfo</code>; cách hiểu tùy thành phần.</div>
`},

{id:'permissions', icon:'🛂', title:'Thao tác và quyền của AccountManagerService', html:`
<p>AccountManagerService kết hợp <b>quyền</b> với <b>kiểm tra UID/chữ ký người gọi</b>. Bốn quyền cần nhớ:</p>
<table>
<tr><th>Quyền</th><th>Mức</th><th>Cho phép</th></tr>
<tr><td><code>GET_ACCOUNTS</code></td><td>normal</td><td>Liệt kê tài khoản, kiểm tính năng</td></tr>
<tr><td><code>MANAGE_ACCOUNTS</code></td><td>dangerous</td><td>Thêm (có UI), xóa, sửa thuộc tính/thông tin xác thực</td></tr>
<tr><td><code>AUTHENTICATE_ACCOUNTS</code></td><td>dangerous</td><td>Thao tác “bên authenticator”: thêm âm thầm, đọc/ghi mật khẩu, token, user data – <b>kèm cùng UID với authenticator</b></td></tr>
<tr><td><code>USE_CREDENTIALS</code></td><td>(dùng token)</td><td>Lấy/hủy token xác thực</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">GET = xem · MANAGE = quản · AUTHENTICATE = chủ · USE = dùng</div></div>
<h3>Liệt kê & thêm tài khoản</h3>
<ul>
<li><code>getAccounts()</code>, <code>hasFeatures()</code> → <code>GET_ACCOUNTS</code>.</li>
<li><code>addAccount()</code> (mở UI của authenticator để hỏi thông tin) → <code>MANAGE_ACCOUNTS</code>.</li>
<li><code>addAccountExplicitly()</code> (thêm âm thầm với account, password, user data) → <code>AUTHENTICATE_ACCOUNTS</code> <b>và cùng UID</b> với authenticator. Yêu cầu cùng UID đảm bảo chỉ <b>chính app đó</b> (hoặc cùng shared user ID) mới thêm được tài khoản không cần tương tác.</li>
</ul>
<p>Các thao tác cũng cần <code>AUTHENTICATE_ACCOUNTS</code> + cùng UID: <code>getPassword()</code> (mật khẩu thô đã lưu), <code>getUserData()</code>, <code>peekAuthToken()</code>, <code>setAuthToken()</code>, <code>setPassword()</code>, <code>setUserData()</code>.</p>
<h3>Quản lý tài khoản</h3>
<ul>
<li><code>removeAccount()</code> → <code>MANAGE_ACCOUNTS</code>. Nhưng nếu người dùng có restriction <code>DISALLOW_MODIFY_ACCOUNTS</code> (chương 4) thì <b>không thêm/xóa được</b> dù app có quyền.</li>
<li>Cũng <code>MANAGE_ACCOUNTS</code>: <code>clearPassword()</code>, <code>confirmCredentials()</code> (hiện UI xác nhận mật khẩu), <code>editProperties()</code>, <code>invalidateAuthToken()</code> (cũng cho phép nếu có <code>USE_CREDENTIALS</code>), <code>updateCredentials()</code>.</li>
</ul>
<h3>Dùng thông tin xác thực: token</h3>
<ul>
<li><b>Authentication token</b>: chuỗi phụ thuộc dịch vụ; client dùng để xác thực yêu cầu mà không gửi mật khẩu mỗi lần. Server cấp sau khi xác thực thành công; được nhận diện bằng <b>token type</b> (vd chỉ-đọc hay đọc-ghi). Dùng lại được nhiều lần, có thể có hạn.</li>
<li>Đổi mật khẩu/nghi ngờ bị lộ → server thường vô hiệu mọi token → yêu cầu dùng token đã lưu sẽ lỗi xác thực.</li>
<li>AccountManagerService <b>không tự vô hiệu</b> token cũ (không hiểu giao thức) → <b>ứng dụng phải gọi <code>invalidateAuthToken()</code></b> để dọn token hỏng.</li>
<li><code>getAuthToken()</code> cần <code>USE_CREDENTIALS</code> <b>và</b> được cấp quyền với loại token đó.</li>
</ul>
<h3>Hộp thoại xin quyền token</h3>
<p>Hộp thoại hiển thị: tên app yêu cầu, loại và tên tài khoản, mô tả quyền truy cập. Người dùng đồng ý → quyết định được <b>lưu đệm</b> (lần sau không hỏi lại).</p>
<div class="cards">
 <div class="mini g"><h4>Không hiện hộp thoại khi…</h4><p>App <b>cùng UID</b> với authenticator, hoặc là <b>app hệ thống đặc quyền</b> (ngầm cho phép mọi loại token).</p></div>
 <div class="mini a"><h4>Hiện hộp thoại khi…</h4><p>Lần đầu một app bên thứ ba xin loại token đó.</p></div>
</div>
<h3>🧪 Thử nghiệm</h3>
<div class="sim" data-acctsim></div>
`},

{id:'database', icon:'🗃', title:'Cơ sở dữ liệu accounts.db', html:`
<p>SQLite, mỗi người dùng một bản: <code>/data/system/users/&lt;userId&gt;/accounts.db</code> (<code>.../users/0/</code> cho owner). Có 6 bảng: <code>accounts</code>, <code>extras</code>, <code>authtokens</code>, <code>grants</code>, <code>shared_accounts</code> và <code>meta</code> (có vẻ không dùng).</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>accounts</h4><p>Bảng gốc: <code>_id, name, type, password</code>. Các bảng khác trỏ vào đây. VD: <code>user1@gmail.com | com.google | 1/......</code>; <code>user1@example.com | com.google.android.pop3 | password</code>.</p>">accounts</button>
  <button class="chip" data-info="<h4>extras</h4><p>Cặp <b>key–value</b> metadata của tài khoản (<code>accounts_id, key, value</code>) – vd <code>device_id</code>, <code>last_sync</code>, <code>user_id</code>.</p>">extras</button>
  <button class="chip" data-info="<h4>authtokens</h4><p>Token đã phát: <code>accounts_id, type, authtoken</code>. VD token type <code>com.example.auth</code>.</p>">authtokens</button>
  <button class="chip" data-info="<h4>grants</h4><p>Liên kết <b>UID ứng dụng ↔ loại token</b> được dùng: <code>accounts_id, auth_token_type, uid</code>. Thêm khi người dùng bấm đồng ý ở hộp thoại; một dòng cho mỗi tổ hợp tài khoản/loại token/UID.</p>">grants</button>
  <button class="chip" data-info="<h4>shared_accounts</h4><p>Dùng khi chia sẻ tài khoản của owner cho restricted profile. Cấu trúc như <code>accounts</code> nhưng <b>không có cột password</b>.</p>">shared_accounts</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một bảng.</p></div>
</div>
<h3>Phương thức ↔ bảng</h3>
<table>
<tr><th>Phương thức</th><th>Bảng bị tác động</th></tr>
<tr><td><code>addAccount()</code></td><td>chèn dòng vào <b>accounts</b></td></tr>
<tr><td><code>getPassword / setPassword / clearPassword</code></td><td>cột password của <b>accounts</b></td></tr>
<tr><td><code>getUserData / setUserData</code></td><td><b>extras</b></td></tr>
<tr><td><code>getAuthToken / invalidateAuthToken</code></td><td><b>authtokens</b>, <b>grants</b></td></tr>
<tr><td><code>removeAccount</code></td><td>xóa dòng <b>accounts</b>; <b>trigger</b> dọn authtokens, extras, grants</td></tr>
</table>
<h3>Luồng getAuthToken()</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Chưa từng cấp loại token này?</b>Hiện hộp thoại xin phép; đồng ý → lưu (UID, loại token) vào <b>grants</b>.</div>
 <div class="step"><b>Đã có grant</b>Tra <b>authtokens</b>: có token hợp lệ → trả ngay.</div>
 <div class="step"><b>Chưa có token</b>Tìm authenticator trong cache và gọi <code>getAuthToken()</code> của nó – thường lấy tên + mật khẩu từ accounts (<code>getPassword()</code>) rồi gọi dịch vụ online để lấy token mới.</div>
 <div class="step"><b>Lưu & trả</b>Token mới được lưu vào <b>authtokens</b> rồi trả cho app (thường bất đồng bộ qua callback).</div>
</div>
<div class="callout c-info"><b>Custom tokens</b>Authenticator đặt metadata <code>customTokens="true"</code> thì <b>tự quản lý token</b>: Android không hiện hộp thoại xin phép token và không tự lưu vào authtokens.</div>
<h3>⚠ Bảo mật mật khẩu</h3>
<ul>
<li>CSDL nằm ở <code>/data/system/</code>, chỉ hệ thống truy cập, nhưng <b>thông tin xác thực không được mã hóa</b> – bảo vệ là việc của authenticator. Trên máy root thường thấy mật khẩu ở dạng <b>cleartext</b> (nhất là app email gốc).</li>
<li>App email có thể phải lưu mật khẩu thô (thay vì băm/token) để hỗ trợ các cơ chế challenge-response lấy mật khẩu làm đầu vào như DIGEST-MD5, CRAM-MD5.</li>
<li><code>getPassword()</code> chỉ app <b>cùng UID</b> với authenticator gọi được nên app khác không đọc được lúc chạy, nhưng mật khẩu có thể lọt vào <b>bản sao lưu / dump thiết bị</b>.</li>
<li>Cách giảm rủi ro: <b>mã hóa mật khẩu bằng khóa riêng thiết bị</b>, hoặc sau xác thực lần đầu thay bằng <b>token chủ có thể thu hồi</b>. Twitter client chỉ lưu token (authtokens); tài khoản Google (<code>com.google</code>) lưu <b>master token</b> thay mật khẩu.</li>
</ul>
`},

{id:'multiuser', icon:'👥', title:'Đa người dùng & tài khoản dùng chung', html:`
<ul>
<li><b>Mỗi người dùng một accounts.db</b> (<code>/data/system/users/&lt;id&gt;/accounts.db</code>): có tài khoản riêng, thậm chí cùng loại tài khoản nhưng khác bản. Mọi thứ khác (quyền, grants…) y hệt owner. Xóa người dùng → xóa luôn CSDL.</li>
<li><b>Restricted profile</b> (4.3): không độc lập hoàn toàn mà dùng chung app với owner; app dùng AccountManager có thể hỗ trợ thấy và dùng <b>một phần tài khoản của owner</b>.</li>
</ul>
<h3>Cơ chế chia sẻ tài khoản (shared accounts)</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Tạo restricted profile</b>Tên + loại tài khoản hiện có của owner được chép vào bảng <code>shared_accounts</code> của profile mới (chưa có mật khẩu; bảng accounts còn rỗng nên chưa dùng được).</div>
 <div class="step"><b>Chờ người dùng khởi động</b>AccountManagerService <b>trì hoãn việc nhân bản</b> cho đến khi restricted user thật sự được khởi động. Tài khoản mới của owner thêm sau cũng được thêm vào shared_accounts và nhân bản tương tự.</div>
 <div class="step"><b>Nhân bản qua authenticator</b>Không chép dữ liệu thẳng; thực hiện qua authenticator đã khai báo tài khoản: <code>getAccountCredentialsForCloning()</code> (trả Bundle chứa dữ liệu) và <code>addAccountFromCredentials()</code> (tạo tài khoản từ Bundle). Mặc định <code>AbstractAccountAuthenticator</code> <b>không hỗ trợ</b> – phải ghi đè rõ ràng (4.3+).</div>
 <div class="step"><b>Lọc theo ứng dụng</b>App trong restricted profile chỉ thấy tài khoản có loại khớp thuộc tính <code>restrictedAccountType</code> trong manifest (hiện chỉ <b>một</b> loại).</div>
</div>
<div class="callout c-info"><b>Secondary user</b> không chia sẻ tài khoản với owner: <code>shared_accounts</code> luôn rỗng, tài khoản owner không bao giờ được nhân bản sang họ.</div>
`},

{id:'authenticator', icon:'🔧', title:'Viết một Authenticator Module', html:`
<p>Phần lớn logic (thêm tài khoản, kiểm tra thông tin, lấy token) nằm trong lớp mở rộng <b><code>AbstractAccountAuthenticator</code></b>. Phải cài mọi phương thức trừu tượng nhưng chức năng không cần có thể trả <code>null</code> hoặc ném <code>UnsupportedOperationException</code>. Muốn lưu mật khẩu, tối thiểu cài <code>addAccount()</code> để hiện UI thu thập rồi gọi <code>addAccountExplicitly()</code>. Activity đăng nhập có thể kế thừa <code>AccountAuthenticatorActivity</code>.</p>
<div class="callout c-warn"><b>Nhớ</b><code>addAccountExplicitly()</code> <b>không mã hóa</b> mật khẩu – lưu cleartext theo mặc định. Nếu cần bảo vệ, mã hóa riêng rồi truyền bản mã/token thay vì mật khẩu rõ.</div>
<h3>3 bước khai báo</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>1. Service trả về Binder của authenticator</b><pre>public IBinder onBind(Intent intent) {
  if (AccountManager.ACTION_AUTHENTICATOR_INTENT.equals(intent.getAction()))
    return authenticator.getIBinder();
  return null;
}</pre></div>
 <div class="step"><b>2. Khai báo trong manifest</b><pre>&lt;uses-permission android:name="android.permission.AUTHENTICATE_ACCOUNTS" /&gt;
&lt;service android:name=".ExampleAuthenticatorService"&gt;
  &lt;intent-filter&gt;
    &lt;action android:name="android.accounts.AccountAuthenticator" /&gt;
  &lt;/intent-filter&gt;
  &lt;meta-data android:name="android.accounts.AccountAuthenticator"
             android:resource="@xml/authenticator" /&gt;
&lt;/service&gt;</pre>Cần quyền <code>AUTHENTICATE_ACCOUNTS</code> (tối thiểu để <code>addAccountExplicitly()</code>).</div>
 <div class="step"><b>3. Tệp XML mô tả tài khoản</b><pre>&lt;account-authenticator
    android:accountType="com.example.account"
    android:label="@string/account_label"
    android:icon="@drawable/ic_launcher"
    android:smallIcon="@drawable/ic_launcher" /&gt;</pre></div>
 <div class="step"><b>Xong</b>Cài app → loại <code>com.example.account</code> xuất hiện ở <i>Settings → Add an account</i> và dùng được qua AccountManager API.</div>
</div>
<div class="callout c-tip"><b>Khi nào nên tạo tài khoản tùy chỉnh?</b>Chỉ để tiện cho chính app đó, hoặc khi cần <b>sync adapter</b> (bắt buộc có tài khoản riêng). Muốn app bên thứ ba xác thực bằng tài khoản của bạn thì <b>phải cài token</b> – vì app khác không gọi được <code>getPassword()</code> (trừ khi ký cùng khóa và cùng UID).</div>
`},

{id:'google', icon:'🅶', title:'Tài khoản Google: GLS, ClientLogin, OAuth 2.0 và Play Services', html:`
<p>Mục tiêu ban đầu của quản lý tài khoản là tích hợp dịch vụ Google và đồng bộ nền; sau đó được tách thành một phần của HĐH. Từ Android 2.0, hỗ trợ Google được đóng gói thành bộ thành phần dùng API chuẩn: authenticator cho loại <code>com.google</code> + sync adapter (Gmail, Calendar, Contacts…). Khác module bên thứ ba ở 3 điểm:</p>
<ul>
<li>Là thành phần hệ thống → được cấp <b>thêm quyền</b>.</li>
<li>Nhiều chức năng cài đặt <b>phía server</b>.</li>
<li>Authenticator <b>không lưu mật khẩu rõ</b> trên thiết bị.</li>
</ul>
<h3>GSF và GLS</h3>
<div class="compare">
 <div class="mini b"><h4>Google Services Framework (GSF)</h4><p>Dịch vụ chung cho mọi ứng dụng Google: cài đặt tập trung, bật/tắt tính năng.</p></div>
 <div class="mini g"><h4>Google Login Service (GLS)</h4><p>(Nay hiện là “Google Account Manager”) – authenticator cho tài khoản Google. Gọi một dịch vụ online riêng <code>android.clients.google.com</code> (xác thực, cấp token, feed dữ liệu).</p></div>
</div>
<h3>Master token – “chìa khóa vạn năng”</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Thêm tài khoản</b>Người dùng nhập tên + mật khẩu → gửi lên dịch vụ GLS.</div>
 <div class="step"><b>2FA (nếu bật)</b>Nhập thêm mã xác minh (OTP) trong WebView nhúng.</div>
 <div class="step"><b>Nhận master token</b>Server trả một <b>master token</b> mờ (có thể là OAuth refresh token); GLS lưu nó trong cột <b>password</b> của bảng accounts thay cho mật khẩu.</div>
 <div class="step"><b>Dùng về sau</b>Mọi yêu cầu xác thực sau đó dùng master token để đổi lấy <b>token riêng cho từng dịch vụ/phạm vi</b> (đồng bộ, đăng nhập web tự động). Không cần nhập lại OTP.</div>
</div>
<div class="callout c-danger"><b>⚠ Đánh đổi tiện lợi lấy an toàn</b>Master token cho <b>toàn quyền</b> tài khoản (đồng bộ lẫn đăng nhập web) nên đã dẫn tới một số kiểu tấn công; nhiều dịch vụ Google nay đòi xác thực thêm khi xem dữ liệu nhạy cảm hay đổi cài đặt. Token bị vô hiệu khi: <b>đổi mật khẩu</b>, <b>bật 2FA</b>, hoặc <b>gỡ thiết bị</b> khỏi trang Account Permissions.</div>
<h3>Giao thức cho “installed applications”</h3>
<p>Ứng dụng web chạy trong trình duyệt (UI phong phú, cookie, redirect). Ứng dụng cài đặt (như app Android) không có cách native để giữ phiên và có thể không đủ khả năng web.</p>
<table>
<tr><th></th><th>ClientLogin</th><th>OAuth 2.0</th></tr>
<tr><td>Tình trạng</td><td>Cũ nhất, từng phổ biến; <b>deprecated tháng 4/2012</b></td><td>Chuẩn Internet cuối 2012 (RFC 6749); xu hướng hiện tại (cùng OpenID Connect)</td></tr>
<tr><td>Cần mật khẩu thô?</td><td><b>Có</b> – phải lưu mật khẩu trên máy (rủi ro)</td><td>Không – client không xử lý thông tin xác thực người dùng (authorization code grant, implicit grant)</td></tr>
<tr><td>Token</td><td>Sống tới ~2 tuần, <b>không refresh</b>; không cách kiểm tra hợp lệ ngoài việc gọi dịch vụ (200 = ok, 403 = lỗi)</td><td>Có phạm vi (scope) chi tiết, token hết hạn có thể làm mới</td></tr>
<tr><td>Độ chi tiết</td><td>Tất cả hoặc không gì (không chỉ-đọc/tài nguyên cụ thể)</td><td>Chi tiết theo scope</td></tr>
<tr><td>Dịch vụ nhận diện</td><td>Tên dịch vụ riêng (<code>cl</code> = Calendar, <code>ah</code> = App Engine, <code>ac2dm</code>, <code>androidmarket</code>…)</td><td>Scope, vd <code>oauth2:https://www.googleapis.com/auth/tasks</code></td></tr>
</table>
<p>Android tránh lưu mật khẩu thô: lưu master token và dùng GLS đổi lấy token ClientLogin (gọi một phương thức AccountManager).</p>
<h3>OAuth 2.0 trên app native</h3>
<ul>
<li>Trình duyệt web dễ: chuyển hướng tới trang đăng nhập, rồi trang cấp quyền, rồi redirect kèm token. App native khó hơn: dùng <b>trình duyệt hệ thống</b> (phải chuyển app và tìm cách trả token về) hoặc nhúng <b>WebView</b> (UI web không native, code phức tạp để phát hiện kết quả và trích token). Cả hai gây khó hiểu cho người dùng.</li>
<li><b>Giải pháp Android</b>: lấy token OAuth 2.0 qua <b>AccountManager</b> với cú pháp token type <code>oauth2:scope</code> hoặc qua <b>Google Play Services</b>. GLS dùng master token xác thực ở server và hiện <b>hộp thoại cấp quyền native</b> của AccountManager thay vì WebView; sau khi đồng ý, gửi yêu cầu thứ hai và nhận token trực tiếp. Chỉ hoạt động với tài khoản Google; dịch vụ khác (vd Twitter) vẫn thường dùng WebView.</li>
</ul>
<h3>Google Play Services (GPS)</h3>
<ul>
<li>Công bố tại Google I/O 2012; nay là gói khổng lồ (14.000+ phương thức Java) cung cấp API Google và mở rộng HĐH độc quyền.</li>
<li>OAuth 2.0 qua AccountManager (từ Android 2.2) <b>không đáng tin</b> giữa các bản build (khác phiên bản GLS) và hộp thoại có thể hiện scope thô khó hiểu.</li>
<li><b>GPS cấp token qua 2 bước</b>: (1) yêu cầu gửi tên tài khoản, master token, dịch vụ <code>oauth2:scope</code> <b>+ tên gói của app + SHA-1 chứng chỉ ký</b> → server trả mô tả dễ hiểu về scope và ứng dụng để hiện hộp thoại; (2) nếu đồng ý, quyết định được lưu ở bảng <b>extras</b> (định dạng độc quyền, <b>không dùng grants</b>), rồi gửi lại với <code>has_permission=1</code> → nhận token + hạn dùng (hạn lưu ở extras, token ở authtokens).</li>
<li>GPS cùng shared user ID <code>com.google.uid.shared</code> với GSF và GLS nên ghi trực tiếp thông tin Google vào accounts.db.</li>
<li>Ưu điểm: là <b>app cài được, tự cập nhật qua Google Play</b> (trong khi GLS/GSF là hệ thống, chỉ cập nhật bằng OTA). Nếu app dùng token OAuth 2.0 để xác thực với Google API (cách ưu tiên), nên dùng GPS thay vì AccountManager thô.</li>
</ul>
<div class="callout c-info"><b>Đăng ký app trong Google API console</b>Phải đăng ký <b>tên gói + khóa ký</b> để server xác thực token biết token cấp cho app nào → <b>không phải nhúng API key</b> trong app. Tuy nhiên với app công khai, tên gói và chứng chỉ ký dễ biết nên vẫn có thể xin token “nhân danh” app khác (không qua API chính thức).</div>
`}

],

cards: [
 {f:'AccountManager giải quyết vấn đề gì?',b:'Sổ đăng ký tài khoản tập trung: người dùng nhập thông tin xác thực một lần; app truy cập dịch vụ qua <b>token</b> mà không xử lý mật khẩu.'},
 {f:'Android bắt đầu có AccountManager API từ bản nào?',b:'<b>Android 2.0</b> (API Level 5).'},
 {f:'Đăng ký loại tài khoản mới mang lại gì?',b:'Kho thông tin xác thực tập trung trong CSDL hệ thống, phát token cho app bên thứ ba, đồng bộ nền tự động (sync adapter).'},
 {f:'AccountManagerService vs AccountManager vs Authenticator?',b:'AccountManager: facade cho app (không kiểm quyền). Service: điều phối + kiểm quyền. Authenticator: module cắm thêm cho từng loại tài khoản.'},
 {f:'Authenticator module là gì?',b:'Bound service cài <code>IAccountAuthenticator</code> (thực tế mở rộng <code>AbstractAccountAuthenticator</code>), bind được qua action <code>android.accounts.AccountAuthenticator</code>.'},
 {f:'Quyền nào bảo vệ giao diện AIDL của authenticator?',b:'<code>ACCOUNT_MANAGER</code> (signature, chỉ hệ thống) – nên chỉ AccountManagerService gọi được authenticator.'},
 {f:'Account type là gì?',b:'Chuỗi định danh loại tài khoản (dạng tên miền ngược), vd <code>com.example.account</code>.'},
 {f:'AccountAuthenticatorCache làm gì? Lưu ở đâu?',b:'Quét gói khai báo authenticator; dựng lười, cập nhật bằng broadcast; lưu <code>/data/system/registered_services/android.accounts.AccountAuthenticator.xml</code>; có mục riêng cho từng người dùng.'},
 {f:'Quyền cần để liệt kê tài khoản?',b:'<code>GET_ACCOUNTS</code> (mức normal).'},
 {f:'Quyền cần cho addAccount() và removeAccount()?',b:'<code>MANAGE_ACCOUNTS</code> (dangerous). Không dùng được nếu người dùng có <code>DISALLOW_MODIFY_ACCOUNTS</code>.'},
 {f:'addAccountExplicitly() yêu cầu gì?',b:'<code>AUTHENTICATE_ACCOUNTS</code> <b>và cùng UID với authenticator</b> → chỉ chính app (hoặc cùng shared UID) thêm âm thầm được.'},
 {f:'Kể các thao tác cần AUTHENTICATE_ACCOUNTS + cùng UID.',b:'<code>getPassword, setPassword, getUserData, setUserData, peekAuthToken, setAuthToken</code> (và addAccountExplicitly).'},
 {f:'Quyền cho getAuthToken() và invalidateAuthToken()?',b:'<code>USE_CREDENTIALS</code> (invalidateAuthToken cũng chấp nhận <code>MANAGE_ACCOUNTS</code>). getAuthToken còn cần được cấp quyền cho loại token.'},
 {f:'Authentication token là gì? Token type?',b:'Chuỗi phụ thuộc dịch vụ để xác thực yêu cầu mà không gửi mật khẩu; token type mô tả loại truy cập (chỉ-đọc, đọc-ghi…). Dùng lại được, có thể hết hạn.'},
 {f:'Vì sao app phải tự gọi invalidateAuthToken()?',b:'AccountManagerService không hiểu giao thức nên không tự biết token hết hạn/bị vô hiệu; app phải xóa token hỏng khỏi cache.'},
 {f:'Khi nào hộp thoại xin quyền token không hiện?',b:'App cùng UID với authenticator, hoặc app hệ thống đặc quyền; hoặc đã có grant trong bảng grants.'},
 {f:'accounts.db nằm ở đâu? Có những bảng nào?',b:'<code>/data/system/users/&lt;id&gt;/accounts.db</code>; bảng: accounts, extras, authtokens, grants, shared_accounts, meta (không dùng).'},
 {f:'Chức năng từng bảng?',b:'accounts: name/type/password · extras: key-value metadata · authtokens: token đã phát · grants: UID ↔ loại token · shared_accounts: tài khoản chia sẻ cho restricted profile.'},
 {f:'Luồng getAuthToken()?',b:'Chưa có grant → hộp thoại, lưu grants → tra authtokens → không có thì gọi authenticator (thường getPassword + gọi online) → lưu authtokens → trả cho app.'},
 {f:'customTokens="true" nghĩa là gì?',b:'Authenticator tự quản lý token: Android không hiện hộp thoại token và không lưu vào authtokens.'},
 {f:'Mật khẩu trong accounts.db được bảo vệ thế nào?',b:'<b>Không mã hóa</b> – để authenticator tự lo. Trên máy root có thể thấy cleartext (nhất là email); có thể lọt vào backup/dump.'},
 {f:'Hai cách giảm rủi ro lưu mật khẩu?',b:'Mã hóa mật khẩu bằng khóa riêng của thiết bị, hoặc thay bằng <b>token chủ có thể thu hồi</b> sau lần xác thực đầu (Twitter chỉ lưu token; Google lưu master token).'},
 {f:'Tài khoản đa người dùng: lưu thế nào?',b:'Mỗi người dùng một accounts.db; xóa người dùng xóa luôn CSDL. Secondary user không chia sẻ tài khoản với owner.'},
 {f:'Restricted profile nhận tài khoản của owner thế nào?',b:'Tên + loại chép vào <code>shared_accounts</code> lúc tạo; nhân bản thật sự (qua authenticator: getAccountCredentialsForCloning / addAccountFromCredentials) khi profile được khởi động; app phải khai báo <code>restrictedAccountType</code> mới thấy.'},
 {f:'Authenticator mặc định có hỗ trợ nhân bản tài khoản không?',b:'Không; phải ghi đè <code>getAccountCredentialsForCloning()</code> và <code>addAccountFromCredentials()</code> (từ 4.3).'},
 {f:'3 bước tạo authenticator module?',b:'(1) Service trả Binder khi action AccountAuthenticator; (2) manifest: intent-filter + meta-data trỏ XML + quyền AUTHENTICATE_ACCOUNTS; (3) XML <code>&lt;account-authenticator&gt;</code> (accountType, label, icon).'},
 {f:'Vì sao app bên thứ ba cần token từ tài khoản tùy chỉnh của bạn?',b:'Họ không gọi được <code>getPassword()</code> (trừ khi cùng khóa ký/UID), nên bạn phải cài authentication token.'},
 {f:'GSF và GLS là gì?',b:'GSF: dịch vụ chung cho app Google (cài đặt, bật/tắt tính năng). GLS: Google Login Service (Google Account Manager) – authenticator tài khoản Google.'},
 {f:'Master token của Google lưu ở đâu và làm gì?',b:'Ở cột password của accounts (thay cho mật khẩu); đổi lấy token riêng từng dịch vụ; cho toàn quyền tài khoản. Vô hiệu khi đổi mật khẩu, bật 2FA hoặc gỡ thiết bị.'},
 {f:'ClientLogin vs OAuth 2.0?',b:'ClientLogin: cần mật khẩu thô, token ~2 tuần không refresh, tất cả-hoặc-không, deprecated 4/2012. OAuth 2.0: không cần mật khẩu, theo scope, chuẩn 2012.'},
 {f:'Vì sao OAuth 2.0 trên native app khó? Android giải quyết sao?',b:'Phải dùng trình duyệt hệ thống hoặc WebView, UI gượng. Android: token type <code>oauth2:scope</code> qua AccountManager/GPS → hộp thoại cấp quyền native bằng master token.'},
 {f:'Google Play Services cải thiện gì?',b:'Cấp token OAuth qua 2 bước kèm package name + SHA-1 chứng chỉ, hộp thoại thân thiện, là app tự cập nhật qua Play (GLS/GSF chỉ qua OTA), cùng shared UID <code>com.google.uid.shared</code>.'},
 {f:'Vì sao phải đăng ký tên gói + khóa ký trong Google API console?',b:'Để server biết token cấp cho app nào; khỏi nhúng API key. Nhưng tên gói và chứng chỉ của app công khai dễ biết nên vẫn có thể xin token nhân danh app khác (ngoài API chính thức).'}
],

quiz: [
 {q:'AccountManager API công khai xuất hiện từ phiên bản nào?',o:['1.6','2.0','4.0','4.3'],a:1,e:'Android 2.0 (API Level 5).'},
 {q:'Ai kiểm tra quyền của người gọi khi dùng AccountManager?',o:['AccountManager (facade)','AccountManagerService','Authenticator','Kernel'],a:1,e:'AccountManager không tự thực thi quyền nào.'},
 {q:'Authenticator module thực chất là gì?',o:['Một Activity','Một bound service cài IAccountAuthenticator','Một content provider','Một broadcast receiver'],a:1,e:'Bind bằng action android.accounts.AccountAuthenticator.'},
 {q:'Vì sao app thường không gọi trực tiếp được authenticator?',o:['Vì nó là native','Vì AbstractAccountAuthenticator đòi quyền ACCOUNT_MANAGER (signature, chỉ hệ thống)','Vì bị mã hóa','Vì chạy trong kernel'],a:1,e:'Mọi client khác phải đi qua AccountManagerService.'},
 {q:'Quyền nào cần để liệt kê danh sách tài khoản?',o:['MANAGE_ACCOUNTS','GET_ACCOUNTS','USE_CREDENTIALS','AUTHENTICATE_ACCOUNTS'],a:1,e:'GET_ACCOUNTS có mức normal.'},
 {q:'addAccountExplicitly() yêu cầu điều kiện nào?',o:['Chỉ cần GET_ACCOUNTS','AUTHENTICATE_ACCOUNTS và cùng UID với authenticator','USE_CREDENTIALS','Chữ ký platform'],a:1,e:'Đảm bảo chỉ chính app/cùng shared UID thêm âm thầm được.'},
 {q:'App thường (khác UID) gọi getPassword() cho tài khoản của app khác sẽ:',o:['Nhận mật khẩu','Bị từ chối – chỉ app cùng UID với authenticator có AUTHENTICATE_ACCOUNTS mới đọc được','Nhận hash','Nhận null mà không lỗi'],a:1,e:'Vì vậy app cần cung cấp token cho bên thứ ba.'},
 {q:'Người dùng có DISALLOW_MODIFY_ACCOUNTS; app có MANAGE_ACCOUNTS gọi removeAccount() sẽ:',o:['Thành công','Bị từ chối vì restriction','Hiện hộp thoại','Xóa nhưng không báo'],a:1,e:'Restriction ưu tiên hơn quyền.'},
 {q:'Khi nào hộp thoại xin quyền loại token KHÔNG hiển thị?',o:['Luôn hiển thị','Khi app cùng UID với authenticator, hoặc là app hệ thống đặc quyền, hoặc đã có grant','Khi có Internet','Khi là Wi-Fi'],a:1,e:'Ngoài ra, người dùng đồng ý một lần thì được lưu.'},
 {q:'Ai chịu trách nhiệm dọn token đã hết hạn/bị server vô hiệu?',o:['AccountManagerService tự động','Ứng dụng, bằng invalidateAuthToken()','Kernel','Server'],a:1,e:'Service không hiểu giao thức nên không tự phát hiện.'},
 {q:'Bảng nào lưu liên kết giữa UID app và loại token được phép dùng?',o:['accounts','extras','grants','authtokens'],a:2,e:'grants(accounts_id, auth_token_type, uid).'},
 {q:'Khi removeAccount() được gọi, các dòng liên quan ở authtokens, extras, grants bị xóa nhờ:',o:['App tự xóa','Trigger của cơ sở dữ liệu','Cron job','Service khác'],a:1,e:'Database trigger dọn dẹp.'},
 {q:'Mật khẩu trong accounts.db:',o:['Luôn được mã hóa bằng khóa hệ thống','Không được mã hóa theo mặc định – bảo vệ là việc của authenticator','Chỉ lưu hash','Không bao giờ được lưu'],a:1,e:'Trên máy root có thể thấy cleartext.'},
 {q:'Cách tốt để tránh lưu mật khẩu thô trong accounts.db:',o:['Dùng MD5','Mã hóa bằng khóa riêng thiết bị hoặc thay bằng token chủ có thể thu hồi','Lưu trong SharedPreferences','Lưu trên thẻ SD'],a:1,e:'Twitter chỉ lưu token; Google lưu master token.'},
 {q:'Vì sao app email có thể phải lưu mật khẩu thô?',o:['Vì lười','Để hỗ trợ cơ chế challenge-response lấy mật khẩu làm đầu vào như DIGEST-MD5, CRAM-MD5','Vì Android bắt buộc','Vì dùng SSL'],a:1,e:'Hạn chế kỹ thuật của một số cơ chế xác thực.'},
 {q:'Restricted profile nhận tài khoản của owner bằng cách:',o:['Truy cập thẳng accounts.db của owner','Nhân bản tài khoản qua authenticator (getAccountCredentialsForCloning/addAccountFromCredentials) khi profile khởi động','Chép tệp accounts.db','Dùng chung mật khẩu'],a:1,e:'Authenticator mặc định không hỗ trợ, phải ghi đè.'},
 {q:'App trong restricted profile thấy tài khoản của owner khi:',o:['Luôn thấy','Khai báo restrictedAccountType khớp loại tài khoản trong manifest','Có quyền root','Ký cùng khóa'],a:1,e:'Hiện chỉ hỗ trợ một loại.'},
 {q:'Secondary user (không phải restricted) có dùng chung tài khoản của owner không?',o:['Có','Không – shared_accounts luôn rỗng','Chỉ Google','Tùy app'],a:1,e:'Chỉ restricted profile mới chia sẻ.'},
 {q:'Ba thành phần khai báo authenticator trong app gồm:',o:['Activity, service, provider','Service trả Binder + khai báo manifest (intent-filter, meta-data) + XML mô tả tài khoản','Chỉ XML','Chỉ intent'],a:1,e:'Cần thêm quyền AUTHENTICATE_ACCOUNTS.'},
 {q:'Master token của tài khoản Google được lưu ở đâu trên máy?',o:['SharedPreferences của Gmail','Cột password trong bảng accounts của accounts.db','Bảng grants','Thẻ SD'],a:1,e:'Thay cho mật khẩu thật.'},
 {q:'Điều nào làm master token Google bị vô hiệu?',o:['Khởi động lại máy','Đổi mật khẩu, bật 2FA, hoặc gỡ thiết bị khỏi Account Permissions','Xóa cache','Tắt Wi-Fi'],a:1,e:'Người dùng sẽ phải đăng nhập lại.'},
 {q:'Hạn chế lớn nhất của ClientLogin với app di động là:',o:['Quá phức tạp','Cần mật khẩu thô của người dùng','Không có token','Chỉ chạy trên web'],a:1,e:'Nên Android dùng master token + GLS đổi sang token ClientLogin.'},
 {q:'ClientLogin đã bị deprecated vào:',o:['2008','Tháng 4/2012','2015','2020'],a:1,e:'Được khuyến khích chuyển sang OAuth 2.0.'},
 {q:'OAuth 2.0 trên Android native tránh dùng WebView nhờ:',o:['Mở trình duyệt','Token type oauth2:scope qua AccountManager/Play Services với hộp thoại cấp quyền native dựa trên master token','Gửi mật khẩu','Dùng SMS'],a:1,e:'Chỉ áp dụng cho tài khoản Google.'},
 {q:'Lợi thế chính của Google Play Services so với AccountManager thô cho OAuth là gì?',o:['Nhanh hơn','Là app cài được, tự cập nhật qua Play, hành vi nhất quán, hộp thoại thân thiện','Không cần Internet','Không cần tài khoản'],a:1,e:'GLS/GSF chỉ cập nhật qua OTA.'},
 {q:'Ở bước đầu GPS gửi thêm thông tin nào cho server?',o:['Mật khẩu','Tên gói của app và SHA-1 chứng chỉ ký','IMEI','Danh bạ'],a:1,e:'Server dùng để mô tả app và xác định app nào xin token.'},
 {q:'GPS lưu quyết định cấp quyền OAuth ở đâu?',o:['Bảng grants','Bảng extras theo định dạng độc quyền','Thẻ SD','SharedPreferences'],a:1,e:'Không dùng bảng grants.'},
 {q:'Vì sao phải đăng ký tên gói và khóa ký trong Google API console?',o:['Để trả phí','Để server xác thực token biết token cấp cho app nào, khỏi nhúng API key','Để ký APK','Để bật SELinux'],a:1,e:'Nhưng tên gói/cert của app công khai dễ biết.'},
 {q:'Tài khoản tùy chỉnh dùng để cho app bên thứ ba xác thực thì cần:',o:['Chia sẻ mật khẩu','Cài authentication token','Root','Ký cùng khóa platform'],a:1,e:'App khác không gọi được getPassword().'}
],

order: [
 {id:'o-token',title:'Luồng getAuthToken()',intro:'Sắp xếp theo thứ tự xử lý trong AccountManagerService.',
  items:['App gọi getAuthToken(account, tokenType) (có USE_CREDENTIALS)','Chưa có grant → hiện hộp thoại xin phép; đồng ý thì lưu vào bảng grants','Tra bảng authtokens tìm token đúng loại','Không có → gọi authenticator.getAuthToken() (thường getPassword rồi gọi dịch vụ online)','Lưu token mới vào authtokens','Trả token cho app (thường qua callback bất đồng bộ)'],
  explain:'Grant → cache → authenticator → lưu → trả.'},
 {id:'o-google',title:'Thêm tài khoản Google và dùng master token',intro:'Sắp xếp quy trình.',
  items:['Người dùng nhập tên + mật khẩu (và OTP nếu có 2FA)','GLS gửi lên dịch vụ online và nhận master token','Master token lưu vào cột password của bảng accounts','App xin token cho một dịch vụ qua AccountManager','GLS đổi master token lấy token riêng của dịch vụ/scope','Token được lưu vào authtokens và trả cho app'],
  explain:'Mật khẩu chỉ dùng một lần ở đầu.'},
 {id:'o-clone',title:'Chia sẻ tài khoản cho restricted profile',intro:'Sắp xếp theo thứ tự thời gian.',
  items:['Owner tạo restricted profile','Tên + loại tài khoản của owner chép vào shared_accounts của profile','Restricted user được khởi động','AccountManagerService nhân bản qua authenticator (getAccountCredentialsForCloning → addAccountFromCredentials)','App khai báo restrictedAccountType phù hợp được thấy tài khoản'],
  explain:'Nhân bản trễ, qua authenticator, lọc theo restrictedAccountType.'}
],

classify: [
 {id:'c-perm',title:'Quyền nào?',intro:'Gán thao tác cho quyền tương ứng.',buckets:['GET_ACCOUNTS','MANAGE_ACCOUNTS','AUTHENTICATE_ACCOUNTS (+ cùng UID)','USE_CREDENTIALS'],
  items:[
   {t:'getAccounts()',b:0},{t:'addAccount() (hiện UI)',b:1},{t:'removeAccount()',b:1},{t:'addAccountExplicitly()',b:2},
   {t:'getPassword()',b:2},{t:'getAuthToken()',b:3},{t:'setAuthToken()',b:2},{t:'hasFeatures()',b:0}],
  explain:'GET xem · MANAGE quản · AUTHENTICATE chủ · USE dùng.'},
 {id:'c-table',title:'Bảng nào của accounts.db?',intro:'Dữ liệu thuộc bảng nào?',buckets:['accounts','extras','authtokens','grants'],
  items:[
   {t:'Tên, loại, mật khẩu/master token của tài khoản',b:0},{t:'device_id, last_sync',b:1},{t:'Token loại com.example.auth',b:2},
   {t:'UID 10291 được dùng token com.example.auth',b:3},{t:'Quyết định OAuth của Play Services (định dạng độc quyền)',b:1},{t:'Token OAuth và hạn dùng được lưu cache',b:2}],
  explain:'Mỗi bảng một mục đích.'},
 {id:'c-proto',title:'ClientLogin hay OAuth 2.0?',intro:'Gán đặc điểm.',buckets:['ClientLogin','OAuth 2.0'],
  items:[
   {t:'Cần mật khẩu thô của người dùng',b:0},{t:'Token theo scope chi tiết',b:1},{t:'Deprecated tháng 4/2012',b:0},
   {t:'Có authorization code grant và implicit grant',b:1},{t:'Token tối đa ~2 tuần, không refresh',b:0},{t:'Chuẩn Internet RFC 6749',b:1}],
  explain:'OAuth 2.0 là hướng hiện đại.'}
],

cheat: [
 {title:'👤 Kiến trúc',html:'<div class="mnemo">App → AccountManager → Service → Authenticator</div><ul><li>AccountManager: facade, KHÔNG kiểm quyền</li><li>Service: điều phối + quyền</li><li>Authenticator: IAccountAuthenticator, cần ACCOUNT_MANAGER</li><li>Cache: registered_services/*.xml</li></ul>'},
 {title:'🛂 Quyền',html:'<div class="mnemo">GET xem · MANAGE quản · AUTH chủ · USE dùng</div><ul><li>AUTHENTICATE + cùng UID: password, userdata, setAuthToken, addAccountExplicitly</li><li>DISALLOW_MODIFY_ACCOUNTS chặn thêm/xóa</li><li>Hộp thoại token: lưu grants</li></ul>'},
 {title:'🗃 accounts.db',html:'<ul><li>accounts · extras · authtokens · grants · shared_accounts</li><li>Mật khẩu KHÔNG mã hóa</li><li>invalidateAuthToken: app tự gọi</li><li>removeAccount → trigger dọn</li></ul>'},
 {title:'👥 Đa người dùng',html:'<ul><li>Mỗi user một accounts.db</li><li>Restricted: shared_accounts, nhân bản trễ qua authenticator</li><li>restrictedAccountType (1 loại)</li><li>Secondary: không chia sẻ</li></ul>'},
 {title:'🔧 Tạo authenticator',html:'<ul><li>Service onBind (ACTION_AUTHENTICATOR_INTENT)</li><li>Manifest: intent-filter + meta-data</li><li>XML account-authenticator</li><li>Cần token cho app khác</li></ul>'},
 {title:'🅶 Google',html:'<ul><li>GSF + GLS; master token ở cột password</li><li>ClientLogin (deprecated 2012) → OAuth 2.0</li><li>oauth2:scope; hộp thoại native</li><li>Play Services: 2 bước, package + SHA-1, extras</li></ul>'}
]
};
