CH[6] = {
sections: [

{id:'ssl', icon:'🔒', title:'SSL/TLS và chứng chỉ khóa công khai', html:`
<p>Tự ghép các primitive mật mã để làm kênh liên lạc rất dễ sai (một lỗi nhỏ cũng thành lỗ hổng), nên cách chuẩn là dùng giao thức có sẵn: <b>SSL/TLS</b>. Android hỗ trợ bằng <b>JSSE</b> (Java Secure Socket Extension). Sách dùng “SSL” chỉ chung cả SSL lẫn TLS.</p>
<p>TLS cung cấp giữa hai bên qua TCP/IP: <b>xác thực</b> (tùy chọn), <b>bí mật</b> và <b>toàn vẹn</b> thông điệp – kết hợp mã hóa đối xứng + bất đối xứng, và dựa nhiều vào <b>chứng chỉ khóa công khai</b>.</p>
<h3>Bắt tay (handshake) đơn giản hóa</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Client hello</b>Client gửi phiên bản SSL hỗ trợ + danh sách <b>cipher suite</b> đề xuất (bộ thuật toán + kích thước khóa cho xác thực, thỏa thuận khóa, mã hóa, toàn vẹn).</div>
 <div class="step"><b>Thương lượng</b>Hai bên chọn một cipher suite cùng hỗ trợ.</div>
 <div class="step"><b>Xác thực bằng chứng chỉ</b>Thường chỉ xác thực <b>máy chủ</b> (server authentication); xác thực <b>client</b> được hỗ trợ nhưng hiếm dùng.</div>
 <div class="step"><b>Thỏa thuận khóa</b>Hai bên thống nhất thuật toán đối xứng và tính <b>cùng một khóa đối xứng</b>.</div>
 <div class="step"><b>Truyền dữ liệu</b>Toàn bộ liên lạc sau đó được mã hóa bằng khóa đối xứng đó.</div>
</div>
<div class="callout c-warn"><b>Cipher suite ẩn danh</b>Như <code>TLS_DH_anon_WITH_AES_128_CBC_SHA</code> không xác thực nên dễ bị <b>MITM</b>; chỉ hợp lý khi giao thức bên trên có cách xác thực khác.</div>
<h3>Chứng chỉ khóa công khai (X.509)</h3>
<p>Chứng chỉ <b>gắn một danh tính với một khóa công khai</b> bằng chữ ký số lên khóa và các thuộc tính. Chữ ký bởi khóa của chính thực thể → <b>tự ký (self-signed)</b>; bởi bên thứ ba tin cậy → <b>CA (Certificate Authority)</b>.</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>Subject (DN)</h4><p>Danh tính: CN (common name), O (tổ chức), L (nơi chốn)… VD <code>CN=*.googlecode.com, O=Google Inc</code>.</p>">Subject</button>
  <button class="chip" data-info="<h4>Issuer</h4><p>DN của CA đã ký chứng chỉ. VD <code>CN=Google Internet Authority G2</code>.</p>">Issuer</button>
  <button class="chip" data-info="<h4>Validity</h4><p>Khoảng thời gian hợp lệ (Not Before / Not After). Chứng chỉ máy chủ thường ~1 năm; chứng chỉ CA 20+ năm.</p>">Validity</button>
  <button class="chip" data-info="<h4>Subject Public Key Info</h4><p>Khóa công khai của thực thể (vd RSA 2048 bit).</p>">Public key</button>
  <button class="chip" data-info="<h4>Subject Alternative Name</h4><p>Danh sách tên DNS thay thế mà chứng chỉ áp dụng (vd *.code.google.com).</p>">SAN</button>
  <button class="chip" data-info="<h4>Basic Constraints: CA:FALSE</h4><p>Cho biết đây là chứng chỉ thực thể cuối (EE), không được phép ký chứng chỉ khác.</p>">Basic Constraints</button>
  <button class="chip" data-info="<h4>CRL Distribution Points / AIA (OCSP)</h4><p>Đường dẫn để kiểm tra thu hồi: URL của CRL và OCSP responder.</p>">CRL · OCSP</button>
  <button class="chip" data-info="<h4>Serial number</h4><p>Số duy nhất trong phạm vi một CA; dùng để liệt kê chứng chỉ bị thu hồi.</p>">Serial</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Bấm một trường của chứng chỉ X.509.</p></div>
</div>
`},

{id:'pki', icon:'🏛', title:'Mô hình tin cậy: CA, PKI và chuỗi chứng chỉ', html:`
<h3>Hai mô hình tin cậy</h3>
<div class="compare">
 <div class="mini a"><h4>Tin trực tiếp & CA riêng</h4><p>Client biết trước các máy chủ → cài sẵn chứng chỉ của họ làm <b>trust anchor</b>. Kiểm soát chặt nhưng khó thay khóa. Dùng <b>CA riêng</b> làm anchor duy nhất thì đổi khóa/chứng chỉ trong suốt, nhưng thành <b>điểm yếu duy nhất</b>: lộ khóa CA = kẻ tấn công cấp chứng chỉ giả mà mọi client tin.</p></div>
 <div class="mini b"><h4>CA công cộng</h4><p>Với client tổng quát (trình duyệt, email…) không biết trước máy chủ, hệ điều hành cài sẵn <b>100+ CA công cộng</b> làm trust anchor. Tiêu chí chọn khác nhau (Mozilla yêu cầu CP/CPS công khai, đa yếu tố, CA gốc không cấp trực tiếp chứng chỉ cuối…).</p></div>
</div>
<h3>PKI – các thực thể</h3>
<svg class="dia" viewBox="0 0 640 250" role="img" aria-label="Các thực thể trong PKI">
 <rect class="amb" x="240" y="10" width="160" height="40" rx="8"/><text x="320" y="35" text-anchor="middle" font-weight="700">Root CA (offline)</text>
 <rect class="blu" x="240" y="85" width="160" height="40" rx="8"/><text x="320" y="110" text-anchor="middle" font-weight="700">Issuing CA</text>
 <rect class="box" x="30" y="85" width="150" height="40" rx="8"/><text x="105" y="110" text-anchor="middle">Registration Authority</text>
 <rect class="box" x="460" y="85" width="150" height="40" rx="8"/><text x="535" y="110" text-anchor="middle">Repository (CRL)</text>
 <rect class="acc" x="30" y="190" width="150" height="40" rx="8"/><text x="105" y="215" text-anchor="middle" font-weight="700">End Entity 1</text>
 <rect class="acc" x="460" y="190" width="150" height="40" rx="8"/><text x="535" y="215" text-anchor="middle" font-weight="700">End Entity 2</text>
 <path class="ln" d="M320 50 V85 M180 105 H240 M400 105 H460 M105 190 V125 M320 125 L180 190 M535 190 V125"/>
 <text x="330" y="70" class="sm">ký chứng chỉ</text><text x="185" y="98" class="sm">yêu cầu</text><text x="410" y="98" class="sm">CRL</text>
</svg>
<ul>
<li><b>End entity (EE)</b>: người/máy chủ giữ chứng chỉ. Gửi yêu cầu cấp chứng chỉ cho <b>RA</b>, RA xác minh danh tính (từ xác nhận email tự động cho chứng chỉ rẻ tới giấy tờ nhà nước cho chứng chỉ EV) rồi chuyển cho <b>issuing CA</b> ký.</li>
<li><b>Issuing CA</b>: ký chứng chỉ EE và quản lý thông tin thu hồi.</li>
<li><b>Root CA</b>: chỉ ký chứng chỉ của issuing CA, hiếm khi dùng, thường để <b>offline</b>.</li>
</ul>
<div class="flow"><div class="node">Chứng chỉ EE (máy chủ)</div><span class="arr">→</span><div class="node">Chứng chỉ Issuing CA</div><span class="arr">→</span><div class="node hl">Chứng chỉ Root CA = trust anchor</div></div>
<p>Ba chứng chỉ trên tạo thành <b>chuỗi chứng chỉ (certification path)</b>: bắt đầu từ EE, kết thúc ở CA gốc. Muốn tin EE, chuỗi phải dẫn tới chứng chỉ mà hệ thống <b>tin tưởng sẵn</b> (trust anchor, thường là root CA, đôi khi là CA trung gian).</p>

<h3>Thu hồi chứng chỉ (revocation)</h3>
<ul>
<li><b>CRL</b>: danh sách (do CA ký, phát hành định kỳ) chứa serial + lý do thu hồi. Người kiểm tra tìm serial trong CRL hiện hành của CA.</li>
<li><b>OCSP</b>: hỏi trạng thái từng chứng chỉ, không cần tải cả danh sách.</li>
<li><b>OCSP stapling</b>: máy chủ “ghim” sẵn phản hồi OCSP (do CA ký) vào handshake.</li>
</ul>
<div class="callout c-warn"><b>Vì sao client thường bỏ qua thu hồi (soft-fail)?</b>CRL của CA lớn rất nặng (thêm độ trễ), OCSP cần kết nối thêm tới máy chủ khác; thông tin thu hồi có thể không có do sự cố; và người dùng sẽ chuyển sang client khác “chạy được”. Chrome vì vậy tắt kiểm tra online và <b>đẩy sẵn</b> “CRL set” cho trình duyệt.</div>
`},

{id:'jsse', icon:'🧰', title:'Kiến trúc JSSE', html:`
<p>JSSE nằm trong <code>javax.net</code> và <code>javax.net.ssl</code>. Giống JCA, JSSE có <b>provider</b> cài đặt các engine class; người dùng API chỉ tương tác với engine class.</p>
<p><b>Bấm vào từng lớp:</b></p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>SSLContext</h4><p>Trung tâm cấu hình: chứa KeyManager, TrustManager, SecureRandom và tạo ra socket factory + SSLEngine. Nếu không cấu hình → dùng <b>mặc định hệ thống</b>.</p>">SSLContext</button>
  <button class="chip" data-info="<h4>SSLSocket / SSLServerSocket</h4><p>Socket SSL kiểu stream, blocking I/O. Tạo bởi <code>SSLSocketFactory</code> hoặc <code>accept()</code> của SSLServerSocket.</p>">SSLSocket</button>
  <button class="chip" data-info="<h4>SSLEngine</h4><p>I/O <b>không chặn</b> (NIO): chứa máy trạng thái SSL, làm việc trên byte buffer; I/O và luồng do ứng dụng lo → cần hiểu giao thức SSL.</p>">SSLEngine</button>
  <button class="chip" data-info="<h4>TrustManager (X509TrustManager)</h4><p>Quyết định có <b>tin</b> thông tin xác thực của đối tác không. Với PKIX = kiểm tra chuỗi chứng chỉ dựa trên trust anchor. Phương thức: <code>checkClientTrusted</code>, <code>checkServerTrusted</code>, <code>getAcceptedIssuers</code>.</p>">TrustManager</button>
  <button class="chip" data-info="<h4>KeyManager (X509KeyManager)</h4><p>Quyết định <b>gửi thông tin xác thực nào</b> cho đối tác – tức chọn chứng chỉ client để xác thực với máy chủ. Có <code>X509ExtendedKeyManager</code> cho việc chọn theo từng kết nối.</p>">KeyManager</button>
  <button class="chip" data-info="<h4>KeyManagerFactory / TrustManagerFactory</h4><p>Tạo KeyManager/TrustManager từ <b>KeyStore</b>. Trên thực tế chỉ có thuật toán <b>PKIX</b> (bí danh X.509).</p>">*ManagerFactory</button>
  <button class="chip" data-info="<h4>HttpsURLConnection</h4><p>HTTPS qua JSSE; dùng SSLSocketFactory mặc định. Thay toàn cục bằng <code>setDefaultSSLSocketFactory()</code> hoặc riêng từng kết nối bằng <code>setSSLSocketFactory()</code>. Có <b>kiểm tra hostname</b>.</p>">HttpsURLConnection</button>
  <button class="chip" data-info="<h4>HostnameVerifier / SSLSession</h4><p>SSL <b>không bắt buộc</b> khớp hostname; HTTPS thì có. <code>boolean verify(String hostname, SSLSession session)</code>; SSLSession chứa giao thức, cipher suite, chuỗi chứng chỉ, hostname, cổng.</p>">HostnameVerifier</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một thành phần JSSE.</p></div>
</div>
<div class="flow">
 <div class="node">KeyStore (neo tin cậy)</div><span class="arr">→</span><div class="node">TrustManagerFactory</div><span class="arr">→</span><div class="node">TrustManager</div><span class="arr">→</span><div class="node hl">SSLContext.init(km, tm, random)</div><span class="arr">→</span><div class="node">SSLSocketFactory / SSLEngine</div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Trust = tin người khác · Key = tôi gửi gì</div>TrustManager quyết định có tin <i>đối tác</i> không; KeyManager chọn <i>khóa/chứng chỉ của mình</i> để gửi đi.</div>
<ul>
<li>Chuỗi chứng chỉ được kiểm bằng <b>CertPath API</b> (dựng + xác thực chuỗi theo PKIX). TrustManager PKIX mặc định cấu hình các lớp CertPath bằng trust anchor trong KeyStore. Cần cấu hình chi tiết hơn → <code>CertPathTrustManagerParameters</code>; không đủ thì tự cài <code>X509TrustManager</code> (có thể ủy quyền trường hợp cơ bản cho bản mặc định).</li>
<li>Hostname: với <b>raw SSL socket</b> chứng chỉ không tự khớp hostname → app phải tự kiểm.</li>
</ul>
<div class="callout c-danger"><b>⚠ Lỗi kinh điển</b>TrustManager “tin tất cả” hay HostnameVerifier luôn trả true làm mất hoàn toàn xác thực máy chủ → MITM dễ dàng.</div>
`},

{id:'android-jsse', icon:'🤖', title:'JSSE trên Android', html:`
<div class="compare">
 <div class="mini g"><h4>AndroidOpenSSL (mặc định)</h4><p>Phần lớn <b>native</b> (OpenSSL) nối bằng JNI; hỗ trợ <b>TLS 1.1 và 1.2</b>; cung cấp <code>SSLSocketFactory.getDefault()</code> và <code>SSLServerSocketFactory.getDefault()</code>. Hỗ trợ <b>SNI</b>.</p></div>
 <div class="mini a"><h4>HarmonyJSSE (deprecated)</h4><p>Java thuần trên socket + JCA. Chỉ <b>SSLv3.0 và TLSv1.0</b>. Không còn bảo trì, có thể bị xóa.</p></div>
</div>
<ul>
<li>Cả hai nằm trong thư viện lõi (<code>core.jar</code>, <code>libjavacore.so</code>); phần native của AndroidOpenSSL ở <code>libjavacrypto.so</code>. Hai provider <b>dùng chung</b> code TrustManager và KeyManager.</li>
<li><b>SNI</b> (Server Name Indication, RFC 3546): client nói tên host muốn truy cập để máy chủ nhiều virtual host trả đúng chứng chỉ. Mặc định dùng với <code>HttpsURLConnection</code> từ Android 3.0 (2.3 hỗ trợ một phần); <b>không</b> hỗ trợ trong Apache HTTP client đi kèm.</li>
<li>Trước Android 4.2, HTTP stack (kể cả HttpsURLConnection) dựa trên Apache Harmony; từ 4.2 thay bằng <b>OkHttp</b> của Square.</li>
<li>Khác biệt lớn nhất so với Java SE: <b>kho tin cậy hệ thống</b> (Java SE: một tệp <code>cacerts</code>, vị trí qua <code>javax.net.ssl.trustStore</code>). Android còn bổ sung <b>blacklist</b> và <b>pinning</b> – không có trong đặc tả JSSE gốc.</li>
</ul>
`},

{id:'truststore', icon:'🗃', title:'Kho tin cậy hệ thống (system trust store)', html:`
<p>Khi app không cung cấp trust store riêng, JSSE dùng <b>kho tin cậy hệ thống</b>. Với trình duyệt/email trên di động càng quan trọng vì chúng không tự quản lý kho riêng.</p>
<h3>Lịch sử</h3>
<div class="compare">
 <div class="mini r"><h4>Trước Android 4.0</h4><p>Kho là <b>một tệp</b> <code>/system/etc/security/cacerts.bks</code> (BKS) trên phân vùng chỉ-đọc. Nhà sản xuất/nhà mạng chọn CA; người dùng <b>không thể</b> thay đổi (trừ root và đóng gói lại) – rào cản lớn với PKI doanh nghiệp.</p></div>
 <div class="mini g"><h4>Từ Android 4.0</h4><p>Lớp <code>TrustedCertificateStore</code> cho phép giữ CA có sẵn và <b>thêm/bớt</b>, có UI quản lý (Settings → Security → Trusted credentials).</p></div>
</div>
<h3>Cấu trúc trong 4.x</h3>
<pre>/system/etc/security/            <span class="c">← CA có sẵn (chỉ-đọc)</span>
/data/misc/keychain/
├── cacerts-added/               <span class="c">← CA người dùng thêm (0775 system)</span>
│   └── <span class="h">30ef493b.0</span>
├── cacerts-removed/             <span class="c">← CA hệ thống bị tắt</span>
│   └── <span class="h">00673b5b.0</span>
├── pubkey_blacklist.txt
├── serial_blacklist.txt
└── pins</pre>
<ul>
<li>Mỗi tệp = một chứng chỉ CA. Tên tệp = <b>băm MD5 của subject DN</b> (hàm OpenSSL <code>X509_NAME_hash_old()</code>) + <code>.0</code> → tìm nhanh chứng chỉ không cần quét toàn bộ.</li>
<li>Thư mục 0775 <code>system:system</code>: <b>chỉ system</b> thêm/xóa được, ai cũng đọc được.</li>
<li><b>Thêm CA</b> = ghi vào <code>cacerts-added/</code>.</li>
<li><b>Tắt CA hệ thống</b> (vì /system chỉ-đọc) = <b>chép bản sao</b> chứng chỉ vào <code>cacerts-removed/</code>; bật lại = xóa tệp đó.</li>
</ul>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">added = thêm tin · removed = rút tin · hệ thống chỉ đọc</div></div>
<h3>Truy cập bằng code: KeyStore “AndroidCAStore”</h3>
<pre>KeyStore ks = KeyStore.getInstance("<span class="h">AndroidCAStore</span>");
ks.load(null, null);
Enumeration&lt;String&gt; aliases = ks.aliases();   <span class="c">// alias: "user:..." hoặc "system:..." + băm subject</span></pre>
<p>Thực tế app ít cần liệt kê neo; <code>TrustManagerFactory</code> mặc định đã dùng kho này, nên <code>HttpsURLConnection</code>/<code>HttpClient</code> tự động kiểm theo CA hiện hành.</p>
<h3>Cài CA riêng (vd CA doanh nghiệp)</h3>
<ul>
<li>Chuyển sang DER, chép vào thiết bị. Trước 4.4.1: gốc bộ nhớ ngoài, đuôi <code>.crt/.cer</code>. Từ 4.4.1: chọn từ bất kỳ kho nào qua <b>storage access framework</b>.</li>
<li>Settings → Security → Credential storage → <b>Install from storage</b>. Chứng chỉ hiện ở tab <b>User</b> của Trusted credentials; có thể xóa ở màn hình chi tiết.</li>
<li><b>Android 4.4+</b>: có CA do người dùng cài thì hệ thống hiện <b>cảnh báo “mạng có thể bị giám sát”</b>. Lý do: proxy chặn bắt có thể cấp chứng chỉ tự sinh bởi CA đó và hầu hết ứng dụng không phân biệt được với máy chủ thật (trừ app dùng <b>pinning</b>).</li>
</ul>
<h3>API cho ứng dụng</h3>
<ul>
<li><b>KeyChain API</b> (4.0+): app đề nghị người dùng import chứng chỉ (chương 7).</li>
<li><b>Device admin</b> có quyền <code>MANAGE_CA_CERTIFICATES</code> (4.4+): cài CA <b>âm thầm</b> (chương 9).</li>
</ul>
<pre>TrustManagerFactory tmf = TrustManagerFactory.getInstance("X509");
tmf.init((KeyStore) null);                         <span class="c">// null = dùng kho hệ thống</span>
X509TrustManager xtm = (X509TrustManager) tmf.getTrustManagers()[0];
xtm.checkServerTrusted(chain, "RSA");              <span class="c">// ném CertificateException nếu không hợp lệ</span></pre>
<div class="callout c-danger"><b>⚠ Android không kiểm tra thu hồi online</b>TrustManager mặc định <b>tắt</b> kiểm tra thu hồi: dù chứng chỉ có CRL Distribution Point/OCSP (AIA) và thực sự đã bị thu hồi, Android vẫn chấp nhận. Android thay thế bằng <b>blacklist</b> (phần sau).</div>
`},

{id:'blacklist', icon:'⛔', title:'Blacklist chứng chỉ (Android 4.1+)', html:`
<p><b>Blacklisting</b> = chủ động chặn một số chứng chỉ <i>bất kể</i> trạng thái trong PKI. Nó không thuộc triết lý PKI gốc nhưng cần trong thực tế vì xử lý lộ khóa rất kém:</p>
<div class="compare">
 <div class="mini a"><h4>Lộ khóa CA</h4><p>Chứng chỉ CA sống 20+ năm và được tin ngầm nên lộ khóa có thể không bị phát hiện lâu. <b>Thu hồi chứng chỉ gốc về cơ bản không được hỗ trợ.</b> Cách xử lý: yêu cầu người dùng gỡ (phi thực tế) hoặc <b>cập nhật khẩn cấp</b> xóa CA – nhưng người dùng vẫn có thể cài lại, và nhiều người chậm cập nhật. Giải pháp: <b>băm khóa công khai</b> của CA bị lộ vào blacklist để HĐH/trình duyệt từ chối kể cả khi nằm trong kho người dùng.</p></div>
 <div class="mini b"><h4>Lộ khóa EE</h4><p>Xảy ra hàng ngày (máy chủ bị xâm nhập, mất laptop/smart card). Thiết kế PKI có CRL/OCSP, nhưng cần truy cập mạng tới máy khác nên <b>hay thất bại</b> – client bỏ qua lỗi (soft-fail) hoặc chỉ hiện cảnh báo.</p></div>
</div>
<p>Vì Android không kiểm tra thu hồi online và cập nhật OS chậm, <b>Android 4.1</b> thêm <b>2 blacklist có thể sửa không cần cập nhật OS</b>:</p>
<div class="cards">
 <div class="mini r"><h4>pubkey_blacklist</h4><p>Danh sách <b>băm khóa công khai</b> → xử lý CA bị xâm phạm.</p></div>
 <div class="mini a"><h4>serial_blacklist</h4><p>Danh sách <b>số serial</b> → xử lý chứng chỉ EE bị xâm phạm.</p></div>
</div>
<h3>Triển khai</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Secure settings</b>Hai URI trong cơ sở dữ liệu cài đặt: <code>content://settings/secure/pubkey_blacklist</code> và <code>.../serial_blacklist</code>. “Secure settings” chỉ hệ thống (Settings hoặc app hệ thống) mới ghi được.</div>
 <div class="step"><b>CertBlacklister</b>Component khởi động trong system server, đăng ký <b>ContentObserver</b> với hai URI. Có giá trị mới → nó được báo.</div>
 <div class="step"><b>Ghi ra tệp</b>Ghi danh sách hex (phân tách bằng dấu phẩy) vào <code>/data/misc/keychain/pubkey_blacklist.txt</code> và <code>serial_blacklist.txt</code>.</div>
 <div class="step"><b>Vì sao phải ghi tệp?</b>Bên dùng blacklist là lớp CertPath chuẩn của Java <b>không biết gì về</b> CSDL của Android: <code>PKIXCertPathValidatorSpi</code> (một phần của Bouncy Castle đã sửa).</div>
 <div class="step"><b>Khi kiểm chuỗi</b>Chứng chỉ <b>EE</b>: serial có trong blacklist → báo lỗi như bị thu hồi. Chứng chỉ <b>CA</b>: băm khóa công khai có trong blacklist → cũng báo lỗi như thu hồi.</div>
</div>
<ul>
<li>Bộ kiểm chứng chỉ dùng toàn hệ thống nên blacklist ảnh hưởng cả HTTP client, trình duyệt gốc và WebView.</li>
<li>AOSP không có app nào gọi API này; ứng viên hợp lý là dịch vụ Google (đẩy qua <b>GCM</b>).</li>
</ul>
<div class="callout c-warn"><b>Điểm yếu của serial</b>Serial chỉ duy nhất trong <i>một</i> CA. Nếu hai CA khác nhau cấp trùng serial, chặn một cái là chặn cả hai. Thực tế CA công cộng dùng serial dài, ngẫu nhiên nên xác suất trùng rất thấp.</div>
`},

{id:'pinning', icon:'📌', title:'Khủng hoảng niềm tin PKI & Certificate Pinning', html:`
<h3>Vấn đề của PKI hiện nay</h3>
<ul>
<li><b>Quá nhiều CA công cộng</b>: EFF SSL Observatory thấy 650+ CA được trình duyệt tin; Android có 100+; trước 4.0 chỉ nhà sản xuất cập nhật mới gỡ được.</li>
<li><b>Không có giới hạn kỹ thuật</b> CA được cấp chứng chỉ cho tên nào: sự cố <b>Comodo, DigiNotar, ANSSI</b> cho thấy ai cũng cấp được chứng chỉ cho <code>*.google.com</code>.</li>
<li>CA không công khai các chứng chỉ đã cấp → chủ website không biết có chứng chỉ giả (<b>Certificate Transparency</b> nhằm giải quyết).</li>
<li>CA từng cấp hàng trăm chứng chỉ cho tên không đủ điều kiện (localhost, webmail…) → MITM vào mạng nội bộ; và nguy cơ bị buộc cấp chứng chỉ giả.</li>
</ul>
<h3>Hướng giải quyết</h3>
<table>
<tr><th>Hướng</th><th>Ý tưởng</th><th>Hạn chế</th></tr>
<tr><td><b>DNSSEC</b> (cấp tiến)</td><td>Thay PKI bằng DNS có chữ ký</td><td>Chưa phổ biến; còn <b>cứng nhắc hơn</b> (phân cấp theo quốc gia)</td></tr>
<tr><td><b>TOFU</b> (như SSH)</td><td>Không tin ai trước, người dùng quyết định lần đầu</td><td>Số site quá lớn, không thực tế</td></tr>
<tr><td><b>Convergence / trust agility</b></td><td>Ủy quyền cho các <b>notary</b>: nhiều notary xác nhận từng thấy chứng chỉ đó thì tin</td><td>Ít notary, Chrome không hỗ trợ</td></tr>
<tr><td><b>Blacklist</b> (tiến hóa)</td><td>Chặn chứng chỉ/khóa đã biết là xấu</td><td>Chỉ chặn sau khi biết</td></tr>
<tr><td><b>Pinning</b> (tiến hóa)</td><td><b>Whitelist</b> khóa được phép ký chứng chỉ cho một host</td><td>Danh sách cứng khó mở rộng</td></tr>
</table>
<div class="analogy">Blacklist là <b>danh sách cấm cửa</b> (chặn người xấu đã biết). Pinning là <b>danh sách khách mời</b> (chỉ cho vào đúng người đã định cho host đó).</div>
<h3>Certificate (public key) pinning</h3>
<ul>
<li>Giới hạn CA/khóa được phép cấp chứng chỉ cho một DNS name. Chrome 13 dùng cho các trang Google.</li>
<li>Thực tế lưu <b>băm SPKI</b> (SubjectPublicKeyInfo) – pin <b>khóa công khai</b> chứ không pin cả chứng chỉ → thay chứng chỉ vẫn hợp lệ miễn giữ khóa.</li>
<li>Chuỗi không chứa ít nhất một khóa được whitelist → <b>validation thất bại</b>.</li>
<li>Danh sách cứng khó mở rộng → hai đề xuất: <b>PKPE</b> (header HTTP <code>Public-Key-Pins</code>: băm khóa, thời hạn, cờ subdomain, <code>report-uri</code>, chế độ <code>Report-Only</code>) và <b>TACK</b> (TLS extension với khóa TACK riêng).</li>
</ul>
<h3>Pinning trong Android (4.2+)</h3>
<pre># /data/misc/keychain/pins
hostname=<span class="h">enforcing</span>|SPKI_SHA512_hash,SPKI_SHA512_hash,...</pre>
<ul>
<li>HĐH <b>không có pin dựng sẵn</b>; đọc từ tệp <code>pins</code>. <code>enforcing</code> = true/false; <b>không có thời hạn</b> (hiệu lực đến khi xóa). Hơn 40 mục trên Nexus (Gmail, YouTube, Play Store…).</li>
<li>Tích hợp vào libcore: <code>TrustManagerImpl</code> tra danh sách pin khi kiểm chuỗi.</li>
<li><b>Nhưng</b>: <code>checkServerTrusted(chain, authType)</code> chuẩn <b>không</b> tra pin (để tương thích với thư viện cũ). Muốn có pin phải dùng <code>X509TrustManagerExtensions.checkServerTrusted(chain, authType, <b>host</b>)</code> – trả chuỗi đã xác thực hoặc ném <code>CertificateException</code>.</li>
<li>JSSE mặc định (<code>ClientHandshakeImpl</code>, <code>OpenSSLSocketImpl</code>) kiểm pin ở <b>tầng TLS</b>, thất bại thì không thiết lập kết nối.</li>
<li><b>Cập nhật pin</b>: broadcast <code>android.intent.action.UPDATE_PINS</code> mang đường dẫn tệp pin mới, version (lưu ở <code>/data/misc/keychain/metadata/version/</code>), băm pin hiện tại và chữ ký <b>SHA512withRSA</b>. <code>CertPinInstallReceiver</code> kiểm version/băm/chữ ký rồi thay tệp <b>nguyên tử</b>. Khóa công khai kiểm chữ ký nằm ở secure setting <code>config_update_certificate</code>.</li>
</ul>
<h3>🧪 Thử nghiệm: chuỗi chứng chỉ có được chấp nhận?</h3>
<div class="sim" data-chainsim></div>
`}

],

cards: [
 {f:'SSL/TLS cung cấp những gì?',b:'Giữa hai bên qua TCP/IP: <b>xác thực</b> (tùy chọn), <b>bí mật</b>, <b>toàn vẹn</b> thông điệp – kết hợp mã hóa đối xứng + bất đối xứng và chứng chỉ khóa công khai.'},
 {f:'Cipher suite là gì?',b:'Bộ thuật toán và kích thước khóa dùng cho xác thực, thỏa thuận khóa, mã hóa và toàn vẹn; client đề xuất, hai bên thương lượng chọn một.'},
 {f:'Server authentication vs client authentication?',b:'Thường chỉ xác thực <b>máy chủ</b>. Xác thực client được SSL hỗ trợ nhưng ít dùng.'},
 {f:'Vì sao cipher suite “anon” nguy hiểm?',b:'Không xác thực → dễ bị <b>MITM</b>; chỉ dùng khi giao thức bên trên có cách xác thực khác.'},
 {f:'Chứng chỉ khóa công khai làm gì? Tự ký vs CA?',b:'Gắn danh tính với khóa công khai bằng chữ ký số. Tự ký: ký bằng khóa của chính nó; CA: ký bởi bên thứ ba tin cậy.'},
 {f:'Các trường chính của X.509?',b:'Subject DN, Issuer DN, validity, public key, serial, extensions (SAN, Key Usage, Basic Constraints, CRL DP, AIA/OCSP…).'},
 {f:'Trust anchor là gì?',b:'Chứng chỉ mà hệ thống tin tưởng ngầm (thường là root CA); chuỗi chứng chỉ phải dẫn tới nó.'},
 {f:'Nhược điểm của CA riêng làm neo duy nhất?',b:'Điểm yếu duy nhất: lộ khóa CA → kẻ tấn công cấp chứng chỉ giả mà mọi client tin; phục hồi phải cập nhật tất cả client.'},
 {f:'Ai là RA, issuing CA và root CA trong PKI?',b:'RA: xác minh danh tính EE. Issuing CA: ký chứng chỉ EE, quản lý thu hồi. Root CA: chỉ ký chứng chỉ issuing CA, thường offline.'},
 {f:'Chuỗi chứng chỉ gồm gì?',b:'EE → issuing CA → root CA (trust anchor). Chứng chỉ trung gian cũng có thể làm neo nhưng thường là root.'},
 {f:'CRL, OCSP, OCSP stapling?',b:'CRL: danh sách serial bị thu hồi do CA ký. OCSP: hỏi trạng thái từng chứng chỉ. Stapling: máy chủ đính sẵn phản hồi OCSP vào handshake.'},
 {f:'Vì sao nhiều client bỏ qua kiểm tra thu hồi?',b:'Độ trễ (CRL lớn, OCSP cần kết nối thêm), dữ liệu có thể không có (soft-fail), và người dùng ghét lỗi kết nối.'},
 {f:'Các lớp chính của JSSE?',b:'SSLContext, SSLSocket/SSLServerSocket (+ factory), SSLEngine, KeyManager/TrustManager (+ Factory), HttpsURLConnection, HostnameVerifier, SSLSession.'},
 {f:'SSLSocket vs SSLEngine?',b:'SSLSocket: stream, blocking, che giấu độ phức tạp. SSLEngine: non-blocking, máy trạng thái SSL trên byte buffer, I/O và luồng do app lo.'},
 {f:'TrustManager vs KeyManager?',b:'TrustManager: có <b>tin</b> thông tin xác thực của đối tác không. KeyManager: chọn thông tin xác thực nào <b>gửi</b> (vd chứng chỉ client).'},
 {f:'Ba phương thức của X509TrustManager?',b:'<code>checkClientTrusted</code>, <code>checkServerTrusted</code>, <code>getAcceptedIssuers</code>.'},
 {f:'Thuật toán duy nhất của KeyManagerFactory/TrustManagerFactory?',b:'<b>PKIX</b> (bí danh X.509).'},
 {f:'SSLContext.init(km, tm, random) – tham số null nghĩa là gì?',b:'Dùng mặc định hệ thống cho thành phần đó.'},
 {f:'Hostname verification: SSL hay HTTPS?',b:'SSL <b>không bắt buộc</b>; HTTPS bắt buộc nên <code>HttpsURLConnection</code> tự kiểm. Raw SSL socket phải tự kiểm. Tùy biến bằng <code>HostnameVerifier.verify()</code>.'},
 {f:'Cách đổi SSLSocketFactory cho HttpsURLConnection?',b:'<code>setDefaultSSLSocketFactory()</code> (toàn cục) hoặc <code>setSSLSocketFactory()</code> (từng kết nối).'},
 {f:'Hai JSSE provider của Android?',b:'<b>AndroidOpenSSL</b> (native, TLS 1.1/1.2, mặc định) và <b>HarmonyJSSE</b> (Java, SSLv3/TLS 1.0, deprecated). Dùng chung TrustManager/KeyManager.'},
 {f:'SNI là gì?',b:'Server Name Indication: client gửi tên host để máy chủ nhiều virtual host trả đúng chứng chỉ. Mặc định với HttpsURLConnection từ Android 3.0; không có trong Apache HTTP client.'},
 {f:'HTTP stack của Android thay đổi gì ở 4.2?',b:'Từ Apache Harmony sang <b>OkHttp</b> (Square).'},
 {f:'Kho tin cậy trước Android 4.0?',b:'Một tệp <code>/system/etc/security/cacerts.bks</code> chỉ-đọc, nhà sản xuất chọn CA, người dùng không đổi được.'},
 {f:'Cấu trúc trust store Android 4.x?',b:'CA hệ thống ở <code>/system/etc/security/</code>; thêm: <code>/data/misc/keychain/cacerts-added/</code>; tắt: <code>cacerts-removed/</code>. Tệp đặt tên theo băm MD5 của subject DN + .0.'},
 {f:'Làm sao tắt CA hệ thống khi /system chỉ-đọc?',b:'Chép bản sao chứng chỉ vào <code>cacerts-removed/</code>; bật lại bằng cách xóa tệp.'},
 {f:'KeyStore “AndroidCAStore” cho phép gì? Tiền tố alias?',b:'Liệt kê/đọc các CA tin cậy qua JCA. Alias bắt đầu <code>system:</code> (cài sẵn) hoặc <code>user:</code> (người dùng cài).'},
 {f:'Cài CA riêng vào Android thế nào?',b:'Chuyển DER, chép vào máy; Settings → Security → Credential storage → Install from storage (4.4.1+ qua storage access framework). Hiện ở tab User.'},
 {f:'Android 4.4 cảnh báo gì khi có CA người dùng?',b:'Cảnh báo “mạng có thể bị giám sát”, vì proxy chặn bắt có thể cấp chứng chỉ giả bởi CA đó mà hầu hết app không phát hiện (trừ app pin).'},
 {f:'Cách app/admin cài CA vào trust store?',b:'App: <b>KeyChain API</b> (nhắc người dùng, 4.0+). Device admin có <code>MANAGE_CA_CERTIFICATES</code> (4.4+): cài âm thầm.'},
 {f:'TrustManager mặc định của Android có kiểm tra thu hồi online không?',b:'<b>Không</b>: tắt rõ ràng; bỏ qua CRL DP và OCSP (AIA) dù chứng chỉ bị thu hồi. Thay bằng blacklist.'},
 {f:'Hai blacklist của Android 4.1 là gì?',b:'<b>pubkey_blacklist</b> (băm khóa công khai CA bị lộ) và <b>serial_blacklist</b> (serial chứng chỉ EE bị lộ).'},
 {f:'Luồng cập nhật blacklist trong Android?',b:'Secure settings (<code>content://settings/secure/…</code>) → CertBlacklister (ContentObserver) → ghi <code>/data/misc/keychain/*.txt</code> → <code>PKIXCertPathValidatorSpi</code> (Bouncy Castle) đọc tệp khi kiểm chuỗi.'},
 {f:'Vì sao blacklist phải ghi ra tệp?',b:'Bộ kiểm chuỗi CertPath chuẩn của Java không biết CSDL cài đặt của Android.'},
 {f:'Điểm yếu của serial blacklist?',b:'Serial chỉ duy nhất trong một CA; hai CA trùng serial thì chặn một cái chặn cả hai (hiếm vì serial ngẫu nhiên dài).'},
 {f:'Vấn đề của PKI công cộng?',b:'Quá nhiều CA (650+), CA có thể cấp chứng chỉ cho bất kỳ tên nào, CA không công bố chứng chỉ đã cấp, CA từng cấp cho tên nội bộ, rủi ro bị cưỡng chế.'},
 {f:'Convergence/trust agility?',b:'Bỏ tập CA chọn sẵn; ủy quyền cho các <b>notary</b> xác nhận chứng chỉ đã thấy. Hạn chế: ít notary, Chrome không hỗ trợ.'},
 {f:'Certificate pinning là gì? Pin gì?',b:'<b>Whitelist</b> khóa được phép ký chứng chỉ cho một host; lưu băm <b>SPKI</b> (pin khóa công khai, không pin chứng chỉ) → đổi chứng chỉ không vỡ.'},
 {f:'PKPE và TACK?',b:'PKPE: header HTTP <code>Public-Key-Pins</code> (băm, max-age, includeSubdomains, report-uri). TACK: TLS extension mang pin có chữ ký riêng.'},
 {f:'Định dạng tệp pins của Android?',b:'<code>hostname=enforcing|SPKI_SHA512_hash,SPKI_SHA512_hash,…</code> trong <code>/data/misc/keychain/pins</code>; không có hạn dùng.'},
 {f:'Bẫy khi dùng pinning hệ thống của Android?',b:'<code>checkServerTrusted(chain, authType)</code> chuẩn <b>không</b> tra pin (tương thích). Phải dùng <code>X509TrustManagerExtensions.checkServerTrusted(chain, authType, host)</code>.'},
 {f:'Cập nhật pins ở Android làm thế nào?',b:'Broadcast <code>UPDATE_PINS</code> kèm đường dẫn, version, băm pin cũ và chữ ký SHA512withRSA; <code>CertPinInstallReceiver</code> xác minh rồi thay tệp nguyên tử. Khóa công khai: <code>config_update_certificate</code>.'},
 {f:'Chrome xử lý thu hồi khác thế nào?',b:'Tắt kiểm tra online; đẩy sẵn “CRL set” qua cơ chế cập nhật của trình duyệt (một dạng blacklist).'}
],

quiz: [
 {q:'Trong bắt tay SSL, ai thường được xác thực?',o:['Chỉ client','Chỉ máy chủ (server authentication)','Cả hai luôn luôn','Không ai'],a:1,e:'Xác thực client được hỗ trợ nhưng hiếm dùng.'},
 {q:'Cipher suite là gì?',o:['Một chứng chỉ','Bộ thuật toán và kích thước khóa cho xác thực, thỏa thuận khóa, mã hóa, toàn vẹn','Danh sách CA','Một loại socket'],a:1,e:'Client và máy chủ thương lượng một cipher suite chung.'},
 {q:'Chứng chỉ khóa công khai làm gì?',o:['Mã hóa dữ liệu trực tiếp','Gắn một danh tính với một khóa công khai bằng chữ ký số','Lưu mật khẩu','Tạo số ngẫu nhiên'],a:1,e:'Binding danh tính ↔ khóa, được ký bởi CA hoặc tự ký.'},
 {q:'Chứng chỉ máy chủ có Basic Constraints “CA:FALSE” nghĩa là:',o:['Không hợp lệ','Chứng chỉ thực thể cuối, không được ký chứng chỉ khác','Là root CA','Đã bị thu hồi'],a:1,e:'Chỉ chứng chỉ CA mới có quyền ký chứng chỉ khác.'},
 {q:'Vì sao root CA thường được giữ offline?',o:['Để tiết kiệm điện','Chỉ ký chứng chỉ issuing CA rất hiếm, nên offline giúp bảo vệ khóa','Vì không có Internet','Vì không hợp lệ'],a:1,e:'Khóa root rất nhạy cảm.'},
 {q:'Chuỗi chứng chỉ được tin khi nào?',o:['Khi chứng chỉ máy chủ tự ký','Khi dẫn tới một chứng chỉ mà hệ thống tin tưởng ngầm (trust anchor)','Khi có hơn 3 chứng chỉ','Khi người dùng bấm OK'],a:1,e:'Trust anchor thường là root CA.'},
 {q:'Điểm yếu của việc dùng một CA riêng làm neo duy nhất?',o:['Không đổi được chứng chỉ','Điểm yếu duy nhất: lộ khóa CA cho phép cấp chứng chỉ giả mà mọi client tin','Quá chậm','Không dùng được TLS'],a:1,e:'Phục hồi cần cập nhật mọi client.'},
 {q:'OCSP stapling là gì?',o:['Máy chủ đính sẵn phản hồi trạng thái chứng chỉ do CA ký vào bắt tay SSL','Nén chứng chỉ','Tải toàn bộ CRL','Ký lại chứng chỉ'],a:0,e:'Client không cần tự hỏi OCSP responder.'},
 {q:'Vì sao nhiều SSL client bỏ qua lỗi thu hồi?',o:['Vì luật cấm','Độ trễ, hạ tầng thu hồi có thể không sẵn sàng và người dùng ghét lỗi kết nối','Vì chứng chỉ không có serial','Vì CA không hỗ trợ'],a:1,e:'Hậu quả: soft-fail.'},
 {q:'TrustManager làm việc gì?',o:['Chọn chứng chỉ client để gửi','Quyết định có tin thông tin xác thực của đối tác không','Mã hóa dữ liệu','Tạo socket'],a:1,e:'KeyManager mới là bên chọn thông tin xác thực để gửi.'},
 {q:'KeyManager làm việc gì?',o:['Kiểm tra chuỗi chứng chỉ của máy chủ','Chọn thông tin xác thực (khóa + chứng chỉ client) gửi cho đối tác','Quản lý blacklist','Sinh IV'],a:1,e:'Với PKIX: chọn chứng chỉ client xác thực với máy chủ.'},
 {q:'Điều gì đúng về hostname verification?',o:['SSL luôn tự kiểm tra hostname','SSL không bắt buộc; HTTPS bắt buộc nên HttpsURLConnection tự kiểm, raw SSL socket thì phải tự làm','Không cần ở đâu cả','Chỉ dùng cho client certificate'],a:1,e:'Dùng HostnameVerifier để tùy biến.'},
 {q:'Một TrustManager “tin tất cả” sẽ gây ra điều gì?',o:['Tăng tốc độ','Mất xác thực máy chủ, dễ bị MITM','Không có gì','Tắt mã hóa'],a:1,e:'Lỗi bảo mật phổ biến trong ứng dụng.'},
 {q:'So sánh hai JSSE provider của Android:',o:['HarmonyJSSE hỗ trợ TLS 1.2, AndroidOpenSSL thì không','AndroidOpenSSL (native) hỗ trợ TLS 1.1/1.2; HarmonyJSSE chỉ SSLv3/TLS 1.0 và đã deprecated','Cả hai đều Java thuần','Cả hai chỉ SSLv3'],a:1,e:'AndroidOpenSSL là mặc định.'},
 {q:'Từ Android 4.2, HTTP stack lõi (kể cả HttpsURLConnection) dựa trên:',o:['Apache Harmony','OkHttp (Square)','curl','WebKit'],a:1,e:'Trước đó dựa trên Apache Harmony.'},
 {q:'Trước Android 4.0 kho CA tin cậy là:',o:['Người dùng tự quản lý hoàn toàn','Một tệp cacerts.bks chỉ-đọc trên /system do nhà sản xuất chọn','Cơ sở dữ liệu trên /data','Chỉ có CA của Google'],a:1,e:'Muốn đổi phải root và đóng gói lại.'},
 {q:'Muốn “tắt” một CA có sẵn trong /system (chỉ-đọc) của Android 4.x, hệ thống làm gì?',o:['Xóa tệp trong /system','Chép bản sao chứng chỉ vào /data/misc/keychain/cacerts-removed/','Sửa cacerts.bks','Gỡ app'],a:1,e:'Bật lại bằng cách xóa tệp trong cacerts-removed/.'},
 {q:'Tên tệp chứng chỉ trong cacerts-added/ (vd 30ef493b.0) được tạo từ:',o:['Tên tệp gốc','Băm MD5 của subject DN (X509_NAME_hash_old) + .0','Serial','Ngày cài'],a:1,e:'Giúp tìm nhanh chứng chỉ theo DN.'},
 {q:'Alias trong AndroidCAStore bắt đầu bằng “user:” nghĩa là:',o:['CA cài sẵn trong hệ thống','CA do người dùng cài','CA bị blacklist','CA hết hạn'],a:1,e:'“system:” là CA cài sẵn.'},
 {q:'Tại sao Android 4.4 hiện cảnh báo khi có CA do người dùng cài?',o:['CA đó chắc chắn là xấu','Proxy chặn bắt có thể dùng CA đó cấp chứng chỉ giả mà hầu hết ứng dụng không phân biệt được','Pin bị hết hạn','Hết dung lượng'],a:1,e:'Chỉ app dùng pinning mới phân biệt được.'},
 {q:'Ai có thể cài CA vào trust store âm thầm (không hỏi người dùng) từ Android 4.4?',o:['Mọi app có INTERNET','Device admin có quyền MANAGE_CA_CERTIFICATES','Chỉ trình duyệt','Không ai'],a:1,e:'Quyền hệ thống dành cho quản trị thiết bị.'},
 {q:'TrustManager mặc định của Android đối với kiểm tra thu hồi online:',o:['Luôn bật','Tắt rõ ràng; không dùng CRL DP / OCSP dù có trong chứng chỉ','Chỉ bật cho Google','Bật nếu có Wi-Fi'],a:1,e:'Android dùng blacklist thay thế.'},
 {q:'Pubkey blacklist của Android dùng để xử lý:',o:['Chứng chỉ máy chủ hết hạn','CA bị xâm phạm (băm khóa công khai của CA)','Pin bị sai','Lỗi hostname'],a:1,e:'Serial blacklist xử lý chứng chỉ EE.'},
 {q:'Thứ tự đúng của luồng blacklist trong Android:',o:['Tệp → settings → validator','Secure settings → CertBlacklister → tệp trong /data/misc/keychain → PKIXCertPathValidatorSpi','Validator → settings','Tệp → CertBlacklister'],a:1,e:'Validator dùng tệp vì không biết CSDL của Android.'},
 {q:'Vì sao nói “thu hồi chứng chỉ gốc về cơ bản không được hỗ trợ” trong PKI?',o:['CA gốc không thể ký','Không có cơ chế chuẩn để thu hồi trust anchor; phải cập nhật OS/trình duyệt hay bảo người dùng gỡ','Vì CRL quá nhỏ','Vì root CA luôn tự ký lại'],a:1,e:'Do đó cần blacklist khóa công khai.'},
 {q:'Điểm khác nhau giữa blacklist và pinning là:',o:['Blacklist là whitelist','Blacklist chặn khóa/chứng chỉ đã biết là xấu; pinning chỉ cho phép khóa đã định cho một host','Hai thứ như nhau','Pinning chỉ dùng cho Wi-Fi'],a:1,e:'Pinning = whitelist theo host.'},
 {q:'Vì sao pin băm SPKI (khóa công khai) thay vì cả chứng chỉ?',o:['Vì băm nhanh hơn','Vì thay chứng chỉ vẫn hợp lệ nếu giữ khóa, không phải cập nhật pin','Vì chứng chỉ không có băm','Vì dung lượng nhỏ'],a:1,e:'Cho phép gia hạn/đổi chứng chỉ mà không đổi pin.'},
 {q:'Điều nào đúng về pinning hệ thống của Android 4.2?',o:['checkServerTrusted() chuẩn luôn tra pin','Pin chỉ được kiểm khi dùng X509TrustManagerExtensions hoặc các JSSE mặc định hỗ trợ pin; checkServerTrusted(chain, authType) chuẩn bỏ qua pin','OS có sẵn rất nhiều pin dựng sẵn trong ROM','Pin có thời hạn 30 ngày'],a:1,e:'Để tương thích ngược với thư viện cũ.'},
 {q:'Cập nhật tệp pins của hệ thống được xác thực bằng:',o:['Mật khẩu','Chữ ký SHA512withRSA trong broadcast UPDATE_PINS, khóa công khai ở config_update_certificate','Root','Không xác thực'],a:1,e:'CertPinInstallReceiver kiểm version, băm và chữ ký.'},
 {q:'Chrome xử lý vấn đề thu hồi bằng cách:',o:['Bật OCSP bắt buộc','Tắt kiểm tra online và đẩy sẵn “CRL set” cho trình duyệt','Bỏ qua thu hồi hoàn toàn','Dùng DNSSEC'],a:1,e:'Một dạng blacklist do nhà phát triển trình duyệt quản lý.'}
],

order: [
 {id:'o-hs',title:'Bắt tay SSL/TLS',intro:'Sắp xếp các giai đoạn đúng thứ tự.',
  items:['Client gửi phiên bản hỗ trợ + danh sách cipher suite đề xuất','Hai bên thương lượng chọn cipher suite chung','Xác thực máy chủ bằng chứng chỉ (và client nếu cần)','Thống nhất thuật toán đối xứng và tính khóa đối xứng chung','Truyền dữ liệu được mã hóa bằng khóa đối xứng'],
  explain:'Thương lượng → xác thực → thỏa thuận khóa → truyền mã hóa.'},
 {id:'o-bl',title:'Cập nhật blacklist chứng chỉ trong Android',intro:'Xếp luồng từ lúc giá trị mới được ghi đến lúc bị chặn khi kiểm chuỗi.',
  items:['Hệ thống ghi giá trị mới vào secure setting (pubkey_blacklist/serial_blacklist)','CertBlacklister (ContentObserver) được thông báo','Ghi danh sách hex vào /data/misc/keychain/*_blacklist.txt','PKIXCertPathValidatorSpi đọc tệp khi kiểm chuỗi','Serial EE hoặc băm khóa CA khớp → trả lỗi như chứng chỉ bị thu hồi'],
  explain:'Settings → observer → tệp → validator → lỗi thu hồi.'},
 {id:'o-pin',title:'Cập nhật pin hệ thống',intro:'Xếp quy trình UPDATE_PINS.',
  items:['Broadcast android.intent.action.UPDATE_PINS được gửi kèm đường dẫn, version, băm pin cũ, chữ ký','CertPinInstallReceiver nhận broadcast','Kiểm tra version, băm và chữ ký SHA512withRSA bằng khóa config_update_certificate','Thay thế tệp pins nguyên tử','TrustManagerImpl dùng pin mới khi kiểm chuỗi'],
  explain:'Chữ ký đảm bảo chỉ bên giữ khóa ký mới cập nhật được pin.'}
],

classify: [
 {id:'c-store',title:'Thư mục/tệp nào?',intro:'Gán mỗi mục vào đúng nơi trong kho tin cậy/khóa của Android.',buckets:['/system/etc/security/','cacerts-added/','cacerts-removed/','/data/misc/keychain/ (tệp khác)'],
  items:[
   {t:'CA cài sẵn (chỉ-đọc)',b:0},{t:'CA do người dùng cài',b:1},{t:'Bản sao CA hệ thống để tắt nó',b:2},
   {t:'pubkey_blacklist.txt',b:3},{t:'serial_blacklist.txt',b:3},{t:'Tệp pins',b:3},{t:'Chứng chỉ hiển thị ở tab “User”',b:1},{t:'Chứng chỉ hiển thị “disabled” ở tab “System”',b:2}],
  explain:'added = thêm tin · removed = rút tin · hệ thống chỉ đọc.'},
 {id:'c-ctl',title:'Blacklist hay Pinning?',intro:'Cơ chế nào mô tả đặc điểm này?',buckets:['Blacklist','Pinning'],
  items:[
   {t:'Chặn khóa/chứng chỉ đã biết là xấu',b:0},{t:'Chỉ cho phép khóa được chỉ định cho một host',b:1},
   {t:'Dùng băm khóa công khai của CA và serial của EE',b:0},{t:'Dùng băm SPKI (SHA-512) cho từng hostname',b:1},
   {t:'Xử lý CA bị xâm phạm mà không cần cập nhật OS',b:0},{t:'Giới hạn CA nào được cấp chứng chỉ cho Google',b:1},
   {t:'Cần X509TrustManagerExtensions để được áp dụng ở mức API',b:1}],
  explain:'Blacklist = danh sách cấm; Pinning = danh sách khách mời.'},
 {id:'c-mgr',title:'TrustManager hay KeyManager?',intro:'Mỗi mô tả thuộc thành phần nào?',buckets:['TrustManager','KeyManager'],
  items:[
   {t:'checkServerTrusted()',b:0},{t:'chooseClientAlias()',b:1},{t:'Kiểm chuỗi chứng chỉ của đối tác theo trust anchor',b:0},
   {t:'Chọn chứng chỉ client gửi cho máy chủ',b:1},{t:'getAcceptedIssuers()',b:0},{t:'getPrivateKey(alias)',b:1}],
  explain:'Trust = tin người khác · Key = tôi gửi gì.'}
],

cheat: [
 {title:'🔒 SSL/TLS',html:'<ul><li>Xác thực (thường chỉ server) + bí mật + toàn vẹn</li><li>Cipher suite thương lượng</li><li>Anon suite → MITM</li><li>SNI: gửi tên host</li></ul>'},
 {title:'🏛 PKI',html:'<div class="mnemo">EE → Issuing CA → Root CA (anchor)</div><ul><li>RA xác minh danh tính</li><li>Root CA offline</li><li>CRL / OCSP / stapling</li><li>Client hay soft-fail thu hồi</li></ul>'},
 {title:'🧰 JSSE',html:'<div class="mnemo">Trust = tin · Key = gửi</div><ul><li>SSLContext → factory/engine</li><li>X509TrustManager: check*Trusted</li><li>KeyManager: chọn cert client</li><li>HostnameVerifier (HTTPS có, raw SSL không)</li></ul>'},
 {title:'🤖 Android JSSE',html:'<ul><li>AndroidOpenSSL (TLS 1.2) vs HarmonyJSSE (deprecated)</li><li>OkHttp từ 4.2</li><li>KeyStore "AndroidCAStore"</li></ul>'},
 {title:'🗃 Trust store',html:'<ul><li>&lt;4.0: cacerts.bks cố định</li><li>4.0+: cacerts-added / cacerts-removed</li><li>Tên tệp = MD5(subject DN).0</li><li>4.4: cảnh báo giám sát mạng</li><li>Không kiểm tra thu hồi online!</li></ul>'},
 {title:'⛔ Blacklist (4.1)',html:'<ul><li>pubkey_blacklist (CA) · serial_blacklist (EE)</li><li>Settings → CertBlacklister → tệp → PKIXCertPathValidatorSpi</li></ul>'},
 {title:'📌 Pinning (4.2)',html:'<ul><li>/data/misc/keychain/pins: host=enforcing|SPKI SHA-512…</li><li>Chuẩn checkServerTrusted KHÔNG tra pin</li><li>Dùng X509TrustManagerExtensions(host)</li><li>UPDATE_PINS + chữ ký SHA512withRSA</li></ul>'}
]
};
