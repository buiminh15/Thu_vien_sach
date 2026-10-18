CH[7] = {
sections: [

{id:'why', icon:'🎫', title:'Vì sao cần kho lưu thông tin xác thực?', html:`
<p>PKI không chỉ để xác thực <i>máy chủ</i> mà còn để xác thực <i>bạn</i> với họ (<b>client authentication</b>) – phổ biến trong doanh nghiệp: đăng nhập máy tính, truy cập máy chủ công ty. Client phải chứng minh nó <b>sở hữu khóa xác thực</b> (thường là khóa riêng RSA) bằng các phép toán mật mã mà server tự kiểm. Do đó bảo mật phụ thuộc vào việc <b>bảo vệ khóa khỏi bị dùng trái phép</b>.</p>
<p>Hệ điều hành thường cung cấp một <b>dịch vụ hệ thống</b> để ứng dụng lưu/dùng khóa mà không phải tự cài đặt bảo vệ khóa. Android có từ <b>1.6</b>, cải thiện mạnh từ <b>4.0</b>.</p>
<h3>Hai ví dụ điển hình</h3>
<div class="cards">
 <div class="mini b"><span class="em">🛜</span><h4>VPN</h4><p>Tạo <b>đường hầm mã hóa</b> tới mạng nội bộ. Doanh nghiệp thường dùng xác thực client bằng PKI (không chỉ khóa chia sẻ/mật khẩu).</p></div>
 <div class="mini g"><span class="em">📶</span><h4>Wi-Fi EAP-TLS</h4><p>EAP là khung xác thực cho mạng không dây/point-to-point. <b>EAP-TLS</b> được ưa chuộng trong doanh nghiệp đã có PKI.</p></div>
</div>
<h3>Khóa và chứng chỉ xác thực nằm ở đâu?</h3>
<ul>
<li><b>Thiết bị chống giả mạo</b> (smart card, USB token): khóa <b>không thể xuất</b>; cần cả <i>sở hữu vật lý</i> lẫn <i>biết PIN</i> → an toàn nhất.</li>
<li><b>Tệp PKCS#12</b> (.pfx/.p12): khóa riêng mã hóa bằng khóa đối xứng suy ra từ mật khẩu. Thường được <b>import</b> vào kho của hệ thống/ứng dụng trước khi dùng – Android cũng vậy.</li>
</ul>
<p>Cách người dùng nhập khóa: chép tệp PKCS#12 (và CA nếu cần) vào bộ nhớ ngoài → <i>Settings → Security → Install from storage</i> → Android tìm tệp .pfx/.p12 ở thư mục gốc, hỏi mật khẩu rồi đưa khóa vào kho thông tin xác thực hệ thống.</p>
`},

{id:'store', icon:'🏦', title:'System credential store & lịch sử phát triển', html:`
<p><b>System credential store</b> là một dịch vụ hệ thống có hai việc chính:</p>
<ul>
<li><b>Mã hóa</b> thông tin xác thực đã import trước khi lưu xuống đĩa. Khóa mã hóa suy ra từ <b>mật khẩu do người dùng cung cấp</b>: mật khẩu riêng của kho (trước 4.0) hoặc <b>mẫu hình/PIN/mật khẩu mở khóa thiết bị</b> (từ 4.0).</li>
<li><b>Kiểm soát truy cập</b>: đảm bảo chỉ ứng dụng được cấp quyền rõ ràng mới truy cập được khóa.</li>
</ul>
<h3>Tiến trình tính năng</h3>
<table>
<tr><th>Android</th><th>API</th><th>Thay đổi</th></tr>
<tr><td><b>1.6</b></td><td>4</td><td>Có kho cho <b>VPN và Wi-Fi</b> (chỉ hệ thống truy cập, không có API công khai)</td></tr>
<tr><td><b>4.0</b></td><td>14</td><td>API công khai <b>KeyChain</b></td></tr>
<tr><td><b>4.1</b></td><td>16</td><td>Sinh và dùng khóa <b>không cần xuất</b>; giới thiệu <b>keymaster HAL</b> và hỗ trợ ban đầu khóa RSA nền phần cứng</td></tr>
<tr><td><b>4.3</b></td><td>18</td><td><b>AndroidKeyStore</b> JCA provider: khóa <b>riêng của từng app</b>; API kiểm tra phần cứng hỗ trợ RSA</td></tr>
<tr><td><b>4.4</b></td><td>19</td><td>Thêm <b>ECDSA và DSA</b> cho AndroidKeyStore</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">1.6 VPN/Wi-Fi · 4.0 KeyChain · 4.1 keymaster · 4.3 AndroidKeyStore · 4.4 EC/DSA</div></div>
`},

{id:'keystore', icon:'🗝', title:'Dịch vụ keystore: tệp, khóa chủ và key blob', html:`
<p>Ban đầu là <b>một daemon native</b> <code>keystore</code> giao tiếp qua local socket (mỗi client tự quản lý trạng thái và kết nối). Từ <b>Android 4.3</b> thay bằng <b>dịch vụ Binder tập trung</b> (đăng ký tên <code>android.security.keystore</code>, viết bằng C++ ở <code>system/security/keystore/</code>) để dễ tích hợp với các dịch vụ khác.</p>
<pre>service keystore /system/bin/keystore /data/misc/keystore
    class main
    <span class="h">user keystore</span>
    group keystore drmrpc</pre>
<p>Chạy bằng người dùng riêng <code>keystore</code>, lưu tệp tại <code>/data/misc/keystore/</code> (mỗi người dùng Android một thư mục <code>user_N/</code>).</p>
<h3>Tên tệp key blob</h3>
<p>Dạng <code>UID_LOẠI_alias</code>: UID của app tạo ra (1000 = system), loại entry (<code>CACERT</code>, <code>USRCERT</code>, <code>USRPKEY</code>), và alias. Từ 4.3, UID gồm cả user ID (<code>userId = UID / 100000</code>, chương 4). Thử giải mã:</p>
<div class="sim" data-blobdec></div>
<ul>
<li>Khi app bị gỡ với <b>một</b> người dùng: chỉ khóa của người dùng đó bị xóa. Gỡ hẳn khỏi hệ thống: xóa cho mọi người dùng. Vì khóa gắn với <b>app ID</b> nên app khác “tình cờ” nhận lại cùng UID không truy cập được khóa cũ.</li>
<li><b>Keystore reset</b> xóa tệp khóa và master key – chỉ cho người dùng hiện tại.</li>
</ul>
<h3>Bảo vệ bằng phần mềm (mặc định)</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="Mật khẩu / PIN / mẫu hình khóa màn hình" data-desc="<p>Nguồn gốc bí mật. Không được lưu; chỉ dùng để suy ra khóa.</p>"><span>1 · Mật khẩu mở khóa</span><small>người dùng nhập</small></button>
  <button class="layer" data-c="2" data-title="PBKDF2 → khóa AES-128" data-desc="<p><b>PBKDF2 với 8192 lần lặp</b> và <b>salt ngẫu nhiên 128-bit</b> (salt lưu trong header của <code>.masterkey</code>). Lặp nhiều làm mỗi lần đoán mật khẩu rất đắt; salt chống bảng tính sẵn.</p>"><span>2 · PBKDF2 (8192, salt 128-bit)</span><small>suy ra khóa</small></button>
  <button class="layer" data-c="3" data-title="File .masterkey" data-desc="<p>Chứa <b>khóa chủ</b> (master key) được mã hóa bằng khóa AES-128 ở bước 2.</p>"><span>3 · .masterkey</span><small>khóa chủ AES-128</small></button>
  <button class="layer" data-c="4" data-title="Các key blob" data-desc="<p>Mỗi blob: <b>metadata header</b> + <b>IV</b> + <b>Enc(MD5(data) ‖ data)</b> mã hóa bằng master key (AES-128-CBC). Công thức: <code>metadata ‖ Enc(MD5(data) ‖ data)</code>.</p><p>⚠ MD5 không phải MAC chuẩn (như HMAC) – tàn dư của bản gốc, giữ vì tương thích, có thể bị thay.</p>"><span>4 · Key blob</span><small>metadata ‖ Enc(MD5 ‖ data)</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm từng tầng bảo vệ.</p></div>
</div>
<div class="callout c-info"><b>Mức an toàn thực tế</b>Dù có root và trích được blob, vẫn cần mật khẩu để suy ra master key; mỗi lần thử mật khẩu tốn ≥ 8192 vòng, và salt ngẫu nhiên khiến bảng tính sẵn vô dụng → khá an toàn cho giải pháp phần mềm.</div>
<h3>Phiên bản, loại và cờ của blob (từ 4.1)</h3>
<ul>
<li><b>version</b> hiện tại là 2, tự nâng cấp khi app truy cập lần đầu.</li>
<li><b>type</b>: <code>TYPE_ANY</code> (khớp mọi loại), <code>TYPE_GENERIC</code> (giao diện get/put gốc – dữ liệu nhị phân tùy ý), <code>TYPE_MASTER_KEY</code>, <code>TYPE_KEY_PAIR</code> (tạo bởi generate_keypair/import_keypair, mới ở 4.1).</li>
<li><b>flags</b> (từ 4.3): phân biệt blob <b>mã hóa</b> (mặc định) với <b>không mã hóa</b> – blob do phần cứng bảo vệ không cần mã hóa thêm.</li>
</ul>
<h3>Hạn chế truy cập của keystore service</h3>
<table>
<tr><th>Người gọi</th><th>Quyền</th></tr>
<tr><td><b>root</b></td><td>Không khóa/mở khóa keystore được, nhưng truy cập được khóa hệ thống</td></tr>
<tr><td><b>system</b></td><td>Làm hầu hết thao tác quản lý (khởi tạo, reset…) và lưu khóa; <b>không</b> dùng/lấy khóa của người dùng khác</td></tr>
<tr><td><b>người dùng thường</b></td><td>Thêm, xóa, truy cập khóa nhưng chỉ <b>thấy khóa của mình</b></td></tr>
</table>
`},

{id:'keymaster', icon:'🧩', title:'keymaster HAL và khóa nền phần cứng', html:`
<p>Bản daemon gốc làm cả quản lý blob lẫn mã hóa trong một binary. <b>Android 4.1</b> giới thiệu module <b>keymaster HAL</b> chịu trách nhiệm <b>sinh khóa bất đối xứng và ký/kiểm dữ liệu mà không cần xuất khóa</b>. Mục đích: tách dịch vụ keystore khỏi cài đặt thao tác khóa, dễ gắn cài đặt <b>nền phần cứng</b> của từng thiết bị (vendor library + thư viện “keo” HAL).</p>
<pre>generate_keypair   import_keypair   sign_data   verify_data
get_keypair_public delete_keypair   delete_all        <span class="c">// hardware/keymaster.h</span></pre>
<p>Mọi thao tác khóa bất đối xứng của keystore đều gọi keymaster → nếu keymaster dùng phần cứng, <b>mọi lệnh/API phía trên tự dùng phần cứng</b>. Các thao tác còn lại do dịch vụ keystore tự làm.</p>
<h3>softkeymaster (mặc định phần mềm)</h3>
<ul>
<li>Làm mọi thứ bằng <b>OpenSSL</b> hệ thống; dùng trên emulator và máy không có phần cứng mật mã.</li>
<li>Ban đầu chỉ RSA 2048 bit. <b>Android 4.4</b>: chọn kích thước khóa, thêm <b>DSA</b> và <b>ECDSA</b>.</li>
<li>RSA/DSA: 512–8192 bit; mặc định RSA <b>2048</b>, DSA <b>1024</b>. EC: kích thước ánh xạ sang đường cong chuẩn (384 → <code>secp384r1</code>); hỗ trợ <code>prime192v1, secp224r1, prime256v1, secp384r1, secp521r1</code>.</li>
<li>Có thể import khóa nếu đã chuyển sang <b>PKCS#8</b>.</li>
</ul>
<h3>Ví dụ phần cứng: Nexus 4 và ARM TrustZone</h3>
<svg class="dia" viewBox="0 0 640 230" role="img" aria-label="Kiến trúc TrustZone">
 <rect class="box" x="10" y="10" width="290" height="150" rx="12"/><text x="155" y="32" text-anchor="middle" font-weight="700">Normal World</text>
 <rect class="blu" x="30" y="45" width="110" height="40" rx="8"/><text x="85" y="70" text-anchor="middle">Android + apps</text>
 <rect class="blu" x="160" y="45" width="120" height="40" rx="8"/><text x="220" y="70" text-anchor="middle">keymaster (glue)</text>
 <rect class="amb" x="340" y="10" width="290" height="150" rx="12"/><text x="485" y="32" text-anchor="middle" font-weight="700">Secure World</text>
 <rect class="acc" x="360" y="45" width="120" height="40" rx="8"/><text x="420" y="70" text-anchor="middle">Trusted app</text>
 <rect class="acc" x="500" y="45" width="110" height="40" rx="8"/><text x="555" y="70" text-anchor="middle">Secure OS (QSEE)</text>
 <rect class="red" x="10" y="175" width="620" height="45" rx="10"/><text x="320" y="202" text-anchor="middle" font-weight="700">ARM CPU với TrustZone · /dev/qseecom (giao diện hạn chế)</text>
 <path class="ln" d="M280 65 H360" stroke-dasharray="6 5"/>
</svg>
<ul>
<li><b>TrustZone</b> chia SoC thành hai “thế giới” ảo, có kiểm soát truy cập bằng phần cứng: <b>Secure world</b> (hệ thống con bảo mật, chứa <i>trusted app</i>) và <b>Normal world</b> (Android và app). Normal world chỉ gọi trusted app qua <b>giao diện hạn chế</b> mà chúng chủ động mở.</li>
<li>Nexus 4: Snapdragon S4 Pro + <b>QSEE</b> (Qualcomm Secure Execution Environment). Giao tiếp qua thiết bị <code>/dev/qseecom</code> và thư viện <code>libQSEEComAPI.so</code>; chỉ trao đổi <b>blob mờ</b> (lệnh/phản hồi). Các lệnh keymaster: GENERATE_KEYPAIR, IMPORT_KEYPAIR, SIGN_DATA, VERIFY_DATA – bản keymaster của Android <b>không chứa code mật mã</b>.</li>
<li>Trusted app <b>không trả tham chiếu</b> mà trả <b>blob khóa mã hóa độc quyền</b>: phần cứng chỉ bảo vệ một <b>khóa mã hóa khóa (KEK)</b>; khóa người dùng được bảo vệ gián tiếp bằng KEK. Ưu điểm: số khóa gần như không giới hạn. Nhược điểm: lộ KEK → lộ mọi blob lưu ngoài.</li>
<li>Cấu trúc blob Qualcomm (AOSP): magic “KMKB”, modulus, public exponent, IV (AES-128-CBC), <b>private exponent đã mã hóa</b>, <b>HMAC-SHA256</b> kiểm toàn vẹn.</li>
</ul>
<div class="callout c-info"><b>Có thể dùng phần cứng khác?</b>Về lý thuyết keymaster không bắt buộc TrustZone: Secure Element (SE) hay TPM cũng được, nhưng thiết bị phổ thông không có TPM và các flagship bắt đầu bỏ SE → khó phổ biến. UICC (SIM) có thể sinh/lưu khóa nhưng Android <b>chưa có API chuẩn</b> để truy cập, nên cần ROM tùy biến và nhà mạng hỗ trợ.</div>
`},

{id:'integration', icon:'🔌', title:'Tích hợp vào framework', html:`
<p>Dịch vụ keystore là dịch vụ Binder chuẩn nên client chỉ cần lấy tham chiếu từ <code>ServiceManager</code>.</p>
<div class="cards">
 <div class="mini g"><h4>android.security.KeyStore (ẩn)</h4><p>Singleton lấy tham chiếu dịch vụ và làm <b>proxy</b> cho giao diện <code>IKeystoreService</code>. Dùng bởi ứng dụng hệ thống (vd trình import PKCS#12) và cài đặt của một số API công khai.</p></div>
 <div class="mini b"><h4>Android keystore engine (OpenSSL engine)</h4><p>Thư viện native/JCA lõi dùng OpenSSL không thuộc framework → tích hợp <b>gián tiếp</b> qua một <b>OpenSSL engine</b> (module mật mã cắm thêm, dạng thư viện động). Engine này gọi keymaster HAL; chỉ hỗ trợ <b>nạp và ký</b> bằng khóa riêng RSA/DSA/EC – đủ cho xác thực dựa trên khóa (như SSL client authentication).</p></div>
</div>
<p>Nhờ engine, code native dùng OpenSSL API <b>không cần sửa</b> vẫn dùng được khóa trong credential store. Có lớp bọc Java <code>OpenSSLEngine</code> để JCA truy cập khóa do keystore quản lý.</p>
<div class="flow"><div class="node">App / JCA</div><span class="arr">→</span><div class="node">OpenSSLEngine</div><span class="arr">→</span><div class="node">Keystore engine (OpenSSL)</div><span class="arr">→</span><div class="node">keymaster HAL</div><span class="arr">→</span><div class="node hl">Phần mềm hoặc phần cứng</div></div>
<div class="callout c-info"><b>Vì sao không công khai giao diện keystore?</b>Các giao diện AIDL của daemon/proxy quá gắn với cài đặt nên không đưa vào API công khai. Thay vào đó cung cấp <b>KeyChain API</b> và <b>AndroidKeyStore provider</b>.</div>
`},

{id:'keychain', icon:'🔗', title:'KeyChain API', html:`
<p>Từ 1.6 có kho hệ thống nhưng chỉ VPN/Wi-Fi EAP dùng được; khóa cài qua Settings không truy cập được bởi app bên thứ ba. <b>Android 4.0</b> thêm lớp <code>KeyChain</code> để quản lý chứng chỉ tin cậy và lưu thông tin xác thực; <b>4.3</b> mở rộng cho phần cứng.</p>
<h3>Cài PKCS#12 / CA</h3>
<pre>Intent intent = KeyChain.createInstallIntent();        <span class="c">// cùng intent mà Settings dùng</span>
intent.putExtra(KeyChain.<span class="h">EXTRA_PKCS12</span>, p12Bytes);          <span class="c">// hoặc EXTRA_CERTIFICATE cho chứng chỉ CA</span>
startActivity(intent);</pre>
<ul>
<li>Hệ thống hỏi mật khẩu PKCS#12 → hỏi tên (alias) – là chuỗi dùng sau này để tra khóa; nếu chưa có thì bắt đặt khóa màn hình.</li>
<li>Với chứng chỉ có Basic Constraints <code>CA:TRUE</code> → coi là CA và nhập vào user trust store (cần xác thực).</li>
</ul>
<div class="callout c-danger"><b>⚠ Hộp thoại import CA thiếu thông tin</b>Không hiện DN hay băm của chứng chỉ → người dùng không biết mình đang cài gì; ít ai kiểm tra → ứng dụng độc hại có thể lừa cài CA giả.</div>
<h3>Dùng khóa riêng</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Chọn alias</b><code>KeyChain.choosePrivateKeyAlias(activity, callback, keyTypes, issuers, host, port, preselectedAlias)</code>. Callback <code>alias()</code> chạy trên <b>luồng Binder</b>, không phải main thread.</div>
 <div class="step"><b>Người dùng cấp quyền</b>Hộp thoại chọn khóa đồng thời là bước <b>cấp quyền</b> cho app dùng khóa đó.</div>
 <div class="step"><b>Lấy khóa</b><code>KeyChain.getPrivateKey(context, alias)</code> và <code>getCertificateChain(context, alias)</code> – phải gọi ở <b>luồng nền</b> (không phải main thread). Trả null nếu alias không tồn tại.</div>
 <div class="step"><b>Dùng khóa</b>Khóa trả về là tham chiếu; thao tác (ký…) đi qua keystore. Lần sau không cần hộp thoại nữa.</div>
</div>
<h3>Quản lý & thông tin</h3>
<ul>
<li>Xóa riêng từng CA được; nhưng <b>không xóa được từng khóa/chứng chỉ người dùng</b>, chỉ có <b>Clear credentials</b> xóa tất cả.</li>
<li>Còn khóa trong kho thì <b>không gỡ được khóa màn hình</b> (khóa màn hình bảo vệ keystore).</li>
<li><code>isBoundKeyAlgorithm(alg)</code>: khóa thuật toán đó có <b>bị buộc vào thiết bị</b> (phần cứng, không sao chép ra) không. <code>isKeyAlgorithmSupported(alg)</code>: có hỗ trợ loại khóa đó không.</li>
</ul>
<h3>Cài đặt phía sau</h3>
<p>Gói <code>android.security</code> chứa API công khai và AIDL ẩn <code>IKeyChainService</code>, <code>IKeyChainAliasCallback</code>. Cài đặt nằm trong <b>ứng dụng hệ thống KeyChain</b> với <code>sharedUserId = android.uid.system</code> (kế thừa mọi đặc quyền hệ thống):</p>
<div class="cards">
 <div class="mini g"><h4>KeyChainService</h4><p>Bọc <code>android.security.KeyStore</code>. 4 nhóm việc: quản lý keystore (lấy khóa/chứng chỉ) · quản lý trust store (cài/xóa CA người dùng) · khởi tạo/<code>reset()</code> (xóa mọi mục keystore kể cả master key + CA người dùng) · truy vấn/thêm <b>grant</b>.</p></div>
 <div class="mini b"><h4>KeyChainActivity</h4><p>Hiện hộp thoại chọn khóa; nhấn <b>Allow</b> gọi <code>KeyChainService.setGrant()</code> thêm vào grants.db.</p></div>
 <div class="mini a"><h4>KeyChainBroadcastReceiver</h4><p>Nghe <code>PACKAGE_REMOVED</code>, chuyển cho service để <b>dọn grants.db</b> (xóa entry của gói đã gỡ).</p></div>
</div>
<h3>Kiểm soát truy cập</h3>
<ul>
<li>Vì app KeyChain chạy UID system, <code>KeyChainService</code> tự thêm kiểm soát theo <b>UID người gọi</b>: chỉ <b>system</b> xóa CA và reset kho; chỉ <b>system</b> hoặc trình cài chứng chỉ (<code>com.android.certinstaller</code>) cài CA tin cậy.</li>
<li>Kiểm soát từng khóa bằng <b>grants.db</b> (<code>/data/data/com.android.keychain/databases/grants.db</code>), bảng <code>grants(alias, uid)</code>: ánh xạ UID → alias được dùng. Mỗi <code>getPrivateKey()/getCertificate()</code> đều tra bảng này, thiếu grant → ngoại lệ.</li>
</ul>
<pre>sqlite&gt; select * from grants;
test|10044
key1|10044          <span class="c">← UID 10044 được dùng 2 khóa: test, key1</span></pre>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b>Hai lớp: <b>quyền thao tác</b> theo UID (system hay không) + <b>grant theo từng khóa</b> do người dùng bấm Allow. Dù app có đủ quyền, người dùng vẫn phải <b>mở khóa keystore và cho phép từng khóa</b>.</div>
<div class="flow"><div class="node">Settings / CertInstaller</div><span class="arr">→</span><div class="node">KeyChainService</div><span class="arr">→</span><div class="node">TrustedCertificateStore (CA)</div><span class="arr">·</span><div class="node">keystore service (khóa)</div></div>
`},

{id:'androidkeystore', icon:'🔐', title:'AndroidKeyStore provider (4.3+): khóa riêng của từng app', html:`
<p>Khóa nhập bằng KeyChain thuộc sở hữu của <b>system</b> và <b>mọi app có thể xin dùng</b>. <b>Android 4.3</b> thêm <b>khóa riêng của app (app-private keys)</b>: app tự sinh và lưu khóa chỉ <b>chính nó</b> truy cập được, app khác không thấy.</p>
<p>Thay vì tạo API riêng, Android dùng JCA chuẩn: <code>KeyPairGenerator</code> và <code>KeyStore</code> với tên loại/provider <code>AndroidKeyStore</code> (<code>AndroidKeyStoreProvider</code>).</p>
<pre>KeyPairGeneratorSpec spec = new KeyPairGeneratorSpec.Builder(ctx)
    .setAlias("key1").setKeyType("RSA").setKeySize(2048)
    .setSubject(new X500Principal("CN=test"))
    .setSerialNumber(BigInteger.ONE)
    .setStartDate(notBefore).setEndDate(notAfter).build();
KeyPairGenerator g = KeyPairGenerator.getInstance("RSA", "<span class="h">AndroidKeyStore</span>");
g.initialize(spec);
KeyPair kp = g.generateKeyPair();

<span class="c">// nơi khác trong app</span>
KeyStore ks = KeyStore.getInstance("AndroidKeyStore");
ks.load(null);
KeyStore.PrivateKeyEntry e = (KeyStore.PrivateKeyEntry) ks.getEntry("key1", null);</pre>
<ul>
<li>Spec mô tả khóa muốn tạo và <b>chứng chỉ tự ký</b> tự động sinh kèm (bắt buộc vì mỗi PrivateKeyEntry cần một chuỗi chứng chỉ; sau có thể thay bằng chứng chỉ do CA ký).</li>
<li><b>Alias</b> là tham số quan trọng nhất: dùng với <code>getEntry()</code> để lấy lại khóa.</li>
<li>Đối tượng khóa trả về <b>không chứa vật liệu khóa</b>, chỉ là <b>con trỏ tới đối tượng do phần cứng quản lý</b> → không dùng được với provider cần truy cập trực tiếp byte khóa.</li>
</ul>
<div class="compare">
 <div class="mini g"><h4>Có phần cứng (hardware-backed)</h4><p>Khóa được sinh <b>ngoài HĐH Android</b>, không truy cập trực tiếp được ngay cả với user <b>system hoặc root</b>.</p></div>
 <div class="mini a"><h4>Chỉ phần mềm</h4><p>Khóa mã hóa bằng <b>khóa chủ riêng từng người dùng</b> suy ra từ PIN/mật khẩu mở khóa.</p></div>
</div>
<h3>So sánh nhanh KeyChain và AndroidKeyStore</h3>
<table>
<tr><th></th><th>KeyChain (4.0)</th><th>AndroidKeyStore (4.3)</th></tr>
<tr><td>Chủ sở hữu khóa</td><td>system – dùng chung</td><td><b>từng app</b> – riêng tư</td></tr>
<tr><td>Nguồn khóa</td><td>Người dùng import PKCS#12</td><td>App tự sinh (hoặc import)</td></tr>
<tr><td>Cấp quyền</td><td>Người dùng chọn/Allow từng khóa (grants.db)</td><td>Tự động cho chính app tạo</td></tr>
<tr><td>API</td><td>Lớp <code>KeyChain</code></td><td>JCA chuẩn (<code>KeyStore</code>, <code>KeyPairGenerator</code>)</td></tr>
<tr><td>Dùng cho</td><td>Chứng chỉ client doanh nghiệp, VPN, EAP</td><td>Khóa riêng của app</td></tr>
</table>
`}

],

cards: [
 {f:'Client authentication là gì? Điều quan trọng nhất để an toàn?',b:'PKI xác thực <b>bạn</b> với máy chủ: client chứng minh sở hữu khóa riêng bằng phép toán mật mã. An toàn phụ thuộc vào <b>bảo vệ khóa khỏi dùng trái phép</b>.'},
 {f:'EAP-TLS dùng làm gì?',b:'Phương thức EAP xác thực bằng TLS/chứng chỉ, ưa chuộng trong Wi-Fi doanh nghiệp đã có PKI.'},
 {f:'Khóa xác thực thường được lưu ở đâu?',b:'Thiết bị chống giả mạo (smart card/USB token, không xuất được, cần PIN) hoặc tệp <b>PKCS#12</b> (khóa mã hóa bằng khóa suy ra từ mật khẩu), thường import vào kho hệ thống.'},
 {f:'System credential store làm hai việc gì?',b:'(1) Mã hóa thông tin xác thực trước khi lưu (khóa suy ra từ mật khẩu/PIN/mẫu hình mở khóa); (2) kiểm soát truy cập: chỉ app được cấp quyền mới dùng được khóa.'},
 {f:'Tiến trình tính năng credential store qua các phiên bản?',b:'1.6: VPN/Wi-Fi · 4.0: KeyChain API · 4.1: keymaster HAL + RSA phần cứng · 4.3: AndroidKeyStore (khóa riêng app) · 4.4: ECDSA, DSA.'},
 {f:'Keystore trước và sau Android 4.3?',b:'Trước: <b>daemon native</b> với local socket. Từ 4.3: <b>dịch vụ Binder</b> tập trung (<code>android.security.keystore</code>, C++).'},
 {f:'Dịch vụ keystore chạy bằng user nào, lưu ở đâu?',b:'User <code>keystore</code> (group keystore, drmrpc); lưu tệp ở <code>/data/misc/keystore/user_N/</code>.'},
 {f:'Quy ước tên tệp key blob?',b:'<code>UID_LOẠI_alias</code>, vd <code>10019_USRPKEY_myKey</code>. Loại: CACERT, USRCERT, USRPKEY. userId = UID/100000.'},
 {f:'Vì sao khóa gắn với app ID?',b:'Để app khác tình cờ nhận lại cùng UID không truy cập được khóa của app đã gỡ.'},
 {f:'.masterkey bảo vệ thế nào?',b:'Mã hóa bằng khóa AES-128 suy ra từ mật khẩu mở khóa bằng <b>PBKDF2, 8192 lần lặp, salt 128-bit</b> (salt ở header .masterkey).'},
 {f:'Cấu trúc một key blob phần mềm?',b:'<code>metadata ‖ Enc(MD5(data) ‖ data)</code>, mã hóa AES-128-CBC bằng master key, kèm IV.'},
 {f:'Điểm yếu của cơ chế toàn vẹn trong key blob?',b:'Dùng <b>MD5</b> thay vì MAC chuẩn (HMAC) – tàn dư của bản gốc, giữ để tương thích, có thể được thay.'},
 {f:'Các loại key blob (4.1+)?',b:'TYPE_ANY, TYPE_GENERIC, TYPE_MASTER_KEY, TYPE_KEY_PAIR. Version hiện tại 2; từ 4.3 thêm flags (mã hóa/không).'},
 {f:'Quyền của root, system và user thường với keystore?',b:'Root: không khóa/mở khóa nhưng truy cập khóa hệ thống. System: quản lý (init, reset), không dùng khóa người khác. User thường: chỉ thấy khóa của mình.'},
 {f:'Keymaster HAL là gì? Các thao tác?',b:'Module trừu tượng phần cứng (4.1) để sinh khóa bất đối xứng và ký/kiểm không xuất khóa: generate_keypair, import_keypair, sign_data, verify_data, get_keypair_public, delete_keypair, delete_all.'},
 {f:'softkeymaster hỗ trợ gì?',b:'Phần mềm (OpenSSL): RSA/DSA 512–8192 bit (mặc định RSA 2048, DSA 1024), EC qua đường cong chuẩn (prime192v1, secp224r1, prime256v1, secp384r1, secp521r1); import khóa PKCS#8.'},
 {f:'ARM TrustZone là gì?',b:'Chia SoC thành hai “thế giới” bằng phần cứng: <b>Secure world</b> (trusted app) và <b>Normal world</b> (Android + app), giao tiếp qua giao diện hạn chế.'},
 {f:'Nexus 4: keymaster giao tiếp với QSEE thế nào?',b:'Qua <code>/dev/qseecom</code> + <code>libQSEEComAPI.so</code>; chỉ gửi blob lệnh/phản hồi (GENERATE_KEYPAIR…); keymaster không chứa code mật mã.'},
 {f:'Mô hình KEK trong khóa phần cứng?',b:'Phần cứng chỉ bảo vệ <b>khóa mã hóa khóa (KEK)</b>; khóa người dùng được trả về dạng blob mã hóa bằng KEK. Số khóa gần như vô hạn, nhưng lộ KEK = lộ mọi blob.'},
 {f:'Vì sao khó có keymaster dùng SE/TPM/UICC?',b:'Máy phổ thông không có TPM, flagship bỏ SE; UICC chưa có API chuẩn trên Android và phụ thuộc nhà mạng.'},
 {f:'android.security.KeyStore (ẩn) là gì?',b:'Singleton làm proxy tới <code>IKeystoreService</code> của dịch vụ keystore, dùng bởi app hệ thống và vài API công khai.'},
 {f:'Android keystore engine là gì?',b:'<b>OpenSSL engine</b> gọi keymaster HAL, chỉ hỗ trợ nạp/ký bằng khóa riêng RSA/DSA/EC; cho code native/JCA dùng khóa trong credential store mà không sửa code.'},
 {f:'Vì sao Android làm KeyChain và AndroidKeyStore thay vì công khai AIDL của keystore?',b:'Giao diện keystore quá gắn với cài đặt nên không đưa vào API công khai.'},
 {f:'Cài PKCS#12 bằng KeyChain thế nào?',b:'<code>KeyChain.createInstallIntent()</code> + extra <code>EXTRA_PKCS12</code> (hoặc <code>EXTRA_CERTIFICATE</code> cho CA) rồi <code>startActivity</code>.'},
 {f:'Quy trình dùng khóa riêng qua KeyChain?',b:'<code>choosePrivateKeyAlias()</code> (callback trên luồng Binder) → người dùng cấp quyền bằng hộp thoại → <code>getPrivateKey()/getCertificateChain()</code> (luồng nền).'},
 {f:'Hộp thoại import CA có vấn đề gì?',b:'Không hiện DN hay băm của chứng chỉ → người dùng không biết đang cài gì; app độc hại có thể lừa cài CA giả.'},
 {f:'Xóa khóa/chứng chỉ người dùng thế nào? Ràng buộc với khóa màn hình?',b:'Không xóa riêng lẻ được, chỉ “Clear credentials” xóa hết (CA thì xóa riêng được). Còn khóa trong kho thì không gỡ được khóa màn hình.'},
 {f:'isBoundKeyAlgorithm() cho biết gì?',b:'Khóa của thuật toán đó có bị <b>buộc vào thiết bị</b> (phần cứng, không sao chép ra) hay không.'},
 {f:'Ứng dụng KeyChain có đặc điểm gì?',b:'<code>sharedUserId = android.uid.system</code>; gồm KeyChainService, KeyChain activity, KeyChainBroadcastReceiver.'},
 {f:'KeyChainService làm 4 nhóm việc nào?',b:'Quản lý keystore (lấy khóa/chứng chỉ), quản lý trust store (cài/xóa CA), khởi tạo/<code>reset()</code>, truy vấn/thêm grant.'},
 {f:'Ai cài/xóa CA và reset keystore qua KeyChainService?',b:'Xóa CA & reset: chỉ <b>system</b>. Cài CA tin cậy: system hoặc <code>com.android.certinstaller</code>.'},
 {f:'grants.db lưu gì? Khi nào thêm grant?',b:'Bảng <code>grants(alias, uid)</code> trong <code>/data/data/com.android.keychain/databases/</code>. Thêm khi người dùng bấm <b>Allow</b> ở KeyChainActivity (<code>setGrant()</code>).'},
 {f:'KeyChainBroadcastReceiver làm gì?',b:'Nghe <code>PACKAGE_REMOVED</code> → service xóa các grant của gói không còn tồn tại.'},
 {f:'AndroidKeyStore (4.3) khác KeyChain thế nào?',b:'Khóa <b>riêng của từng app</b>, truy cập bằng JCA chuẩn (KeyStore/KeyPairGenerator với “AndroidKeyStore”), app tự sinh khóa; KeyChain: khóa dùng chung của system do người dùng import và cấp quyền.'},
 {f:'KeyPairGeneratorSpec chứa gì và vì sao có chứng chỉ?',b:'Alias, loại + kích thước khóa, subject, serial, ngày bắt đầu/kết thúc. Mỗi PrivateKeyEntry cần chuỗi chứng chỉ nên Android tự sinh chứng chỉ <b>tự ký</b> (có thể thay sau).'},
 {f:'Khóa trả về từ AndroidKeyStore chứa gì?',b:'Không chứa byte khóa; chỉ là <b>con trỏ</b> tới khóa do phần cứng/dịch vụ quản lý → không dùng được với provider cần truy cập trực tiếp vật liệu khóa.'},
 {f:'Khóa AndroidKeyStore được bảo vệ thế nào nếu có / không có phần cứng?',b:'Có: sinh ngoài HĐH, ngay cả system/root không truy cập trực tiếp. Không: mã hóa bằng khóa chủ riêng người dùng suy ra từ PIN/mật khẩu.'}
],

quiz: [
 {q:'Client authentication dựa trên điều gì?',o:['Mật khẩu gửi dạng rõ','Client chứng minh sở hữu khóa riêng bằng phép toán mật mã mà server tự kiểm','Địa chỉ IP','Số serial của thiết bị'],a:1,e:'Vì vậy bảo vệ khóa là then chốt.'},
 {q:'Cách lưu khóa xác thực an toàn nhất là:',o:['Tệp PKCS#12 trên thẻ SD','Smart card/USB token – khóa không thể xuất và cần PIN','Biến môi trường','Ghi trong mã nguồn'],a:1,e:'Cần cả sở hữu vật lý lẫn PIN.'},
 {q:'Khóa mã hóa của credential store (từ Android 4.0) được suy ra từ:',o:['Số IMEI','Mẫu hình/PIN/mật khẩu mở khóa thiết bị','Địa chỉ MAC','Một khóa cố định trong ROM'],a:1,e:'Trước 4.0 dùng mật khẩu riêng cho kho.'},
 {q:'Phiên bản nào thêm API công khai KeyChain?',o:['1.6','4.0','4.3','4.4'],a:1,e:'Android 4.0 (API 14).'},
 {q:'AndroidKeyStore JCA provider xuất hiện từ:',o:['4.0','4.1','4.3','4.4'],a:2,e:'4.3 cho khóa riêng của app; 4.4 thêm ECDSA/DSA.'},
 {q:'Từ Android 4.3, keystore được cài đặt dưới dạng:',o:['Daemon native dùng local socket','Dịch vụ Binder tập trung đăng ký là android.security.keystore','Dịch vụ Java thuần','Module kernel'],a:1,e:'Để tích hợp tốt với các dịch vụ framework.'},
 {q:'Tên tệp 1310044_USRPKEY_key1 cho biết điều gì?',o:['Của app 44, người dùng 13, là khóa riêng','Của app system','Là chứng chỉ CA','Là master key'],a:0,e:'UID 1310044 → user 13, app ID 10044; USRPKEY = khóa riêng.'},
 {q:'Master key của keystore được bảo vệ bằng:',o:['RSA','AES-128 với khóa suy ra bằng PBKDF2 (8192 lần lặp, salt 128-bit) từ mật khẩu mở khóa','MD5 của PIN','Khóa phần cứng luôn luôn'],a:1,e:'Đó là bảo vệ phần mềm mặc định.'},
 {q:'Vì sao bảng tính sẵn (rainbow table) vô dụng với master key?',o:['Vì PIN quá dài','Vì PBKDF2 được seed bởi salt ngẫu nhiên 128-bit','Vì dùng MD5','Vì khóa là RSA'],a:1,e:'Salt khác nhau cho mỗi thiết bị/người dùng.'},
 {q:'Điểm yếu của cấu trúc key blob phần mềm là:',o:['Không có IV','Kiểm tra toàn vẹn dùng MD5 thay vì MAC chuẩn như HMAC','Không mã hóa','Dùng DES'],a:1,e:'Tồn tại để tương thích ngược.'},
 {q:'Người dùng system (UID 1000) có thể làm gì với keystore?',o:['Đọc khóa của mọi người dùng khác','Làm hầu hết thao tác quản lý (khởi tạo, reset) nhưng không dùng/lấy khóa của người dùng khác','Không làm được gì','Chỉ mở khóa'],a:1,e:'Root cũng không lock/unlock được keystore.'},
 {q:'Mục đích của keymaster HAL là:',o:['Quản lý quyền ứng dụng','Tách dịch vụ keystore khỏi cài đặt thao tác khóa bất đối xứng, dễ gắn phần cứng','Mã hóa đĩa','Quản lý Wi-Fi'],a:1,e:'Sinh khóa và ký/kiểm không cần xuất khóa.'},
 {q:'softkeymaster mặc định dùng gì và khi nào?',o:['Dùng TrustZone trên mọi máy','Dùng OpenSSL phần mềm; trên emulator và máy không có phần cứng mật mã','Dùng SE','Dùng UICC'],a:1,e:'Không có phần cứng thì dùng phần mềm.'},
 {q:'Trong mô hình TrustZone của Nexus 4, điều gì thực sự được phần cứng bảo vệ?',o:['Từng khóa riêng của app','Một khóa mã hóa khóa (KEK); khóa người dùng được bảo vệ gián tiếp qua blob','Chỉ mật khẩu','Mọi tệp trong /data'],a:1,e:'Nhược điểm: lộ KEK thì lộ mọi blob.'},
 {q:'Android keystore engine (OpenSSL) giúp ích gì?',o:['Mã hóa đĩa','Cho code native/JCA dùng OpenSSL truy cập khóa riêng trong credential store (nạp & ký) mà không sửa code','Sinh số ngẫu nhiên','Quản lý CA'],a:1,e:'Hỗ trợ RSA/DSA/EC, đủ cho SSL client authentication.'},
 {q:'Khi gọi KeyChain.getPrivateKey() trên main thread sẽ:',o:['Chạy bình thường','Ném ngoại lệ – phải gọi ở luồng nền','Trả null','Kill app'],a:1,e:'Có thể chặn lâu vì phải gọi dịch vụ.'},
 {q:'Callback alias() của choosePrivateKeyAlias được gọi trên:',o:['Main thread','Luồng Binder (không phải main thread)','Luồng kernel','Luồng của dịch vụ keystore'],a:1,e:'Đừng thao tác UI trực tiếp trong callback.'},
 {q:'Hộp thoại chọn khóa (key selection) trong KeyChain có ý nghĩa gì?',o:['Chỉ để chọn tên','Vừa chọn alias vừa là bước người dùng cấp quyền cho app dùng khóa','Chỉ hiển thị thông tin','Đổi mật khẩu'],a:1,e:'KeyChainActivity gọi setGrant() khi bấm Allow.'},
 {q:'grants.db dùng để:',o:['Lưu khóa riêng','Ánh xạ UID → alias khóa được phép dùng','Lưu CA','Lưu mật khẩu'],a:1,e:'Bảng grants(alias, uid).'},
 {q:'Vì sao ứng dụng KeyChain cần thêm kiểm soát truy cập theo UID người gọi?',o:['Vì chạy bằng UID system nên bất kỳ tiến trình bind vào dịch vụ đều có thể làm mọi thao tác nếu không kiểm','Vì chạy trên emulator','Vì dùng SELinux','Vì không có Binder'],a:0,e:'Nó kế thừa đặc quyền system qua sharedUserId.'},
 {q:'Ai có thể reset kho khóa và xóa CA qua KeyChainService?',o:['Mọi app','Chỉ system (thường qua Settings)','Chỉ app tạo khóa','Chỉ root'],a:1,e:'Cài CA cho phép thêm com.android.certinstaller.'},
 {q:'Vấn đề bảo mật của hộp thoại import CA qua KeyChain là:',o:['Quá chậm','Không hiện DN/băm nên người dùng không biết mình đang cài chứng chỉ gì','Không có mật khẩu','Không hỗ trợ PEM'],a:1,e:'Ứng dụng độc hại có thể lừa cài CA giả.'},
 {q:'Điều nào đúng về việc xóa credential?',o:['Xóa được từng khóa riêng lẻ','Không xóa được từng khóa/chứng chỉ người dùng riêng lẻ, chỉ Clear credentials xóa hết (CA thì xóa riêng được)','Không xóa được gì','Chỉ root xóa'],a:1,e:'Và còn khóa thì không gỡ được khóa màn hình.'},
 {q:'Sự khác biệt chính của AndroidKeyStore so với KeyChain là:',o:['Không dùng được RSA','Khóa thuộc riêng từng app, truy cập bằng JCA chuẩn, app tự sinh khóa','Khóa thuộc system và dùng chung','Chỉ dùng cho VPN'],a:1,e:'KeyChain: khóa dùng chung do người dùng import.'},
 {q:'Vì sao KeyPairGeneratorSpec cần subject, serial, ngày hiệu lực?',o:['Để ký APK','Vì Android sinh kèm chứng chỉ tự ký (mỗi PrivateKeyEntry cần chuỗi chứng chỉ)','Để gửi cho CA','Không cần'],a:1,e:'Có thể thay bằng chứng chỉ do CA ký sau.'},
 {q:'Một khóa lấy từ AndroidKeyStore có hardware-backed sẽ:',o:['Chứa byte khóa để xuất','Chỉ là con trỏ tới khóa do phần cứng quản lý, ngay cả system/root không đọc trực tiếp được','Được lưu trên thẻ SD','Bị mã hóa bằng MD5'],a:1,e:'Vì vậy không dùng được với provider cần vật liệu khóa.'},
 {q:'Nếu thiết bị không có phần cứng, AndroidKeyStore bảo vệ khóa bằng:',o:['Không bảo vệ','Mã hóa bằng khóa chủ riêng từng người dùng suy ra từ PIN/mật khẩu','Gửi lên Google','Chỉ quyền tệp'],a:1,e:'Giống credential store phần mềm.'},
 {q:'Tại sao không thể gỡ khóa màn hình khi đang có khóa trong credential store?',o:['Lỗi hệ điều hành','Vì khóa màn hình dùng để bảo vệ/suy ra khóa mã hóa của keystore','Vì PIN quá ngắn','Vì SELinux'],a:1,e:'Mất khóa màn hình thì mất nền tảng bảo vệ.'}
],

order: [
 {id:'o-kc',title:'Dùng khóa riêng qua KeyChain',intro:'Sắp xếp theo thứ tự thực hiện.',
  items:['Cài PKCS#12 bằng KeyChain.createInstallIntent() + EXTRA_PKCS12','Nhập mật khẩu PKCS#12 và đặt alias','Gọi choosePrivateKeyAlias() → hộp thoại chọn khóa','Người dùng bấm Allow → KeyChainService.setGrant() ghi grants.db','Callback alias() nhận alias','Gọi getPrivateKey()/getCertificateChain() trên luồng nền'],
  explain:'Cài → đặt tên → chọn → cấp quyền → nhận alias → lấy khóa.'},
 {id:'o-prot',title:'Chuỗi bảo vệ trong keystore phần mềm',intro:'Sắp xếp từ bí mật gốc đến dữ liệu khóa.',
  items:['Mật khẩu/PIN/mẫu hình khóa màn hình','PBKDF2 (8192 lần lặp, salt 128-bit) → khóa AES-128','Giải mã .masterkey để có master key','Master key giải mã key blob (AES-128-CBC): metadata ‖ Enc(MD5 ‖ data)','Khóa riêng/chứng chỉ ở dạng sử dụng được'],
  explain:'Mỗi tầng bảo vệ tầng dưới.'},
 {id:'o-ver',title:'Mốc phiên bản credential store',intro:'Sắp xếp theo thời gian từ cũ đến mới.',
  items:['1.6 – kho cho VPN và Wi-Fi','4.0 – KeyChain API công khai','4.1 – keymaster HAL, RSA phần cứng','4.3 – AndroidKeyStore, dịch vụ Binder keystore','4.4 – ECDSA và DSA cho AndroidKeyStore'],
  explain:'1.6 → 4.0 → 4.1 → 4.3 → 4.4.'}
],

classify: [
 {id:'c-api',title:'KeyChain hay AndroidKeyStore?',intro:'Gán đặc điểm cho đúng API.',buckets:['KeyChain','AndroidKeyStore'],
  items:[
   {t:'Khóa thuộc system, nhiều app có thể xin dùng',b:0},{t:'Khóa riêng tư chỉ app tạo ra truy cập được',b:1},
   {t:'Người dùng chọn/Allow từng khóa (grants.db)',b:0},{t:'Dùng JCA chuẩn KeyStore.getInstance("AndroidKeyStore")',b:1},
   {t:'Cài PKCS#12 bằng createInstallIntent()',b:0},{t:'App tự sinh cặp khóa bằng KeyPairGeneratorSpec',b:1},{t:'Ra mắt Android 4.0',b:0},{t:'Ra mắt Android 4.3',b:1}],
  explain:'KeyChain: dùng chung/do người dùng import. AndroidKeyStore: riêng từng app.'},
 {id:'c-who',title:'Thành phần nào?',intro:'Gán nhiệm vụ cho thành phần của credential store.',buckets:['keystore service','keymaster HAL','KeyChainService','AndroidKeyStore provider'],
  items:[
   {t:'Lưu key blob trong /data/misc/keystore',b:0},{t:'sign_data, generate_keypair',b:1},{t:'Quản lý grants.db',b:2},
   {t:'Cho app dùng JCA để sinh khóa riêng',b:3},{t:'Giữ .masterkey',b:0},{t:'Gắn với phần cứng như TrustZone',b:1},{t:'Chạy trong app KeyChain (UID system)',b:2}],
  explain:'Mỗi thành phần một vai trò.'},
 {id:'c-lvl',title:'Ai được làm gì với keystore?',intro:'Gán quyền cho đúng người gọi.',buckets:['root','system','người dùng thường'],
  items:[
   {t:'Không khóa/mở khóa được keystore nhưng truy cập khóa hệ thống',b:0},{t:'Khởi tạo/reset keystore',b:1},{t:'Chỉ thấy khóa của chính mình',b:2},
   {t:'Không dùng được khóa của người dùng khác',b:1},{t:'Thêm, xóa, truy cập khóa của mình',b:2}],
  explain:'Phân quyền theo UID.'}
],

cheat: [
 {title:'🎫 Vì sao?',html:'<ul><li>Client authentication (VPN, EAP-TLS)</li><li>Khóa: smart card hoặc PKCS#12</li><li>Bảo vệ khóa = tất cả</li></ul>'},
 {title:'📅 Lịch sử',html:'<div class="mnemo">1.6 · 4.0 · 4.1 · 4.3 · 4.4</div><ul><li>VPN/Wi-Fi · KeyChain · keymaster · AndroidKeyStore · EC/DSA</li></ul>'},
 {title:'🗝 keystore service',html:'<ul><li>User keystore, /data/misc/keystore/user_N</li><li>UID_LOẠI_alias</li><li>.masterkey: PBKDF2 8192, AES-128</li><li>blob: metadata ‖ Enc(MD5 ‖ data)</li><li>root/system/user: quyền khác nhau</li></ul>'},
 {title:'🧩 keymaster',html:'<ul><li>HAL (4.1): generate/sign/verify không xuất khóa</li><li>softkeymaster = OpenSSL; RSA 2048, DSA 1024</li><li>TrustZone (Nexus 4): KEK + blob</li></ul>'},
 {title:'🔗 KeyChain',html:'<ul><li>createInstallIntent, choosePrivateKeyAlias, getPrivateKey (luồng nền)</li><li>App KeyChain = UID system</li><li>grants.db (alias, uid) + Allow từng khóa</li><li>Không xóa lẻ khóa; có khóa → không gỡ khóa màn hình</li></ul>'},
 {title:'🔐 AndroidKeyStore',html:'<ul><li>JCA: "AndroidKeyStore"</li><li>Khóa riêng từng app</li><li>Cert tự ký kèm theo</li><li>Hardware-backed: ngay cả root cũng không lấy được</li></ul>'}
]
};
