CH[5] = {
sections: [

{id:'jca', icon:'🏭', title:'Kiến trúc JCA: provider & engine', html:`
<p><b>JCA</b> (Java Cryptography Architecture) là khung mật mã mở rộng của Java mà Android dùng. Mục tiêu: <b>độc lập với cách cài đặt</b> và <b>dễ mở rộng</b>. App chỉ nói <i>“tôi cần thuật toán X”</i> mà (thường) không phụ thuộc provider cụ thể; muốn thêm thuật toán mới chỉ cần đăng ký thêm một provider.</p>
<div class="analogy">JCA giống <b>một sàn giao dịch</b>: bạn nói “cho tôi mua SHA-256” (engine class), sàn tìm <b>nhà cung cấp</b> (provider) còn hàng theo thứ tự ưu tiên rồi giao cho bạn.</div>
<h3>3 khái niệm cốt lõi</h3>
<div class="cards">
 <div class="mini g"><span class="em">⚙️</span><h4>Engine class</h4><p>Lớp API cho một <b>dịch vụ mật mã trừu tượng</b>. VD <code>Cipher</code> (mã hóa), <code>Signature</code> (chữ ký).</p></div>
 <div class="mini b"><span class="em">🏢</span><h4>Provider (CSP)</h4><p>Gói cài đặt <b>cụ thể</b> các dịch vụ; khai báo thuật toán mình hỗ trợ để JCA lập sổ đăng ký.</p></div>
 <div class="mini a"><span class="em">🔌</span><h4>SPI class</h4><p>Lớp trừu tượng cho mỗi engine mà provider phải cài (vd <code>CipherSpi</code> ↔ <code>Cipher</code>). Nhờ SPI mọi cài đặt đều theo cùng giao diện.</p></div>
</div>
<p>Mỗi provider còn có một lớp con của <code>java.security.Provider</code> mô tả <b>tên, phiên bản, danh sách thuật toán ↔ lớp SPI</b>; khung JCA dựa vào đó dựng sổ đăng ký.</p>
<pre>Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
<span class="c">// JCA tìm provider phù hợp → trả về Cipher chuyển mọi lời gọi tới CipherSpi của provider đó</span></pre>

<h3>Chọn provider theo thứ tự ưu tiên</h3>
<p>Sổ đăng ký có <b>thứ tự ưu tiên</b> (1 = cao nhất). Nếu không chỉ định provider, thuật toán được lấy từ provider <b>đứng trước nhất</b> có hỗ trợ.</p>
<div class="sim" data-provsim></div>
<ul>
<li><b>Delayed provider selection</b> (Cipher, KeyAgreement, Mac, Signature): chọn provider lúc <b>init</b> dựa vào đối tượng Key – hữu ích với khóa phần cứng, vì chỉ tên thuật toán thì không tìm ra provider phần cứng. <b>Android hiện chưa hỗ trợ</b> (có thể ở bản sau).</li>
<li>Không nên chỉ định provider trừ khi bạn tự đóng gói provider đó hoặc xử lý được fallback.</li>
</ul>

<h3>Đăng ký provider</h3>
<table>
<tr><th>Cách</th><th>Chi tiết</th><th>Trên Android</th></tr>
<tr><td><b>Tĩnh</b></td><td>Sửa <code>security.provider.n=ClassName</code> (n là thứ tự ưu tiên, bắt đầu từ 1) trong security.properties</td><td>❌ Không hỗ trợ: tệp nằm trong core.jar, không sửa được</td></tr>
<tr><td><b>Động</b></td><td><code>Security.addProvider()</code>, <code>insertProviderAt(p, 1)</code>, <code>removeProvider()</code> (trả -1 nếu đã có)</td><td>✅ Chỉ ảnh hưởng <b>tiến trình app hiện tại</b>, nên <b>không cần quyền đặc biệt</b></td></tr>
</table>
<pre>static {
  Security.<span class="h">insertProviderAt</span>(new MyProvider(), 1);   <span class="c">// đặt trong static block để chạy trước code app</span>
}</pre>
<div class="callout c-info"><b>Vì sao Java SE cần quyền còn Android thì không?</b>Trên Java SE, chèn provider lên đầu có thể thay thế cả hệ thống mật mã của JVM. Trên Android, mỗi app một tiến trình riêng nên thay đổi chỉ trong phạm vi app đó – không động tới hệ thống hay app khác.</div>
`},

{id:'engines', icon:'🔧', title:'Các engine class (1): nhận instance, tên thuật toán, SecureRandom, MessageDigest, Signature', html:`
<p>Engine class cung cấp một trong ba dịch vụ: <b>(1) thao tác mật mã</b> (mã hóa/giải mã, ký/kiểm, băm), <b>(2) sinh/chuyển đổi vật liệu mật mã</b> (khóa, tham số), <b>(3) quản lý/lưu trữ</b> đối tượng mật mã (khóa, chứng chỉ).</p>
<h3>Cách lấy instance: <code>getInstance()</code></h3>
<p>Không dùng <code>new</code> (tách client khỏi cài đặt). Ba dạng:</p>
<pre>getInstance(String algorithm)                      <span class="c">// dùng phổ biến nhất</span>
getInstance(String algorithm, String provider)     <span class="c">// + NoSuchProviderException</span>
getInstance(String algorithm, Provider provider)</pre>
<p>Mọi dạng ném <code>NoSuchAlgorithmException</code> nếu thuật toán không có. Tên thuật toán <b>không phân biệt hoa thường</b>, có thể có <b>bí danh</b>; tên có cấu trúc (vd <code>SHA256withRSA</code> = băm SHA-256 + ký RSA). Tên chuẩn: <i>JCA Standard Algorithm Names</i>. Liệt kê mọi provider/thuật toán bằng <code>Security.getProviders()</code>.</p>

<h3>🎲 SecureRandom</h3>
<ul>
<li>Bộ sinh số ngẫu nhiên mật mã (CSPRNG). Chất lượng phụ thuộc vào <b>seed</b>. Hầu hết thao tác mật mã dùng nó ngầm để sinh khóa, IV…</li>
<li>Android seed từ <code>/dev/urandom</code> (CSPRNG của kernel). Ngay sau khi khởi động trạng thái có thể còn dễ đoán nên Android <b>lưu trạng thái 4096 byte</b> vào <code>/data/system/entropy.dat</code> và ghi lại vào /dev/urandom lúc boot (do dịch vụ <b>EntropyMixer</b>).</li>
<li>Cách đúng: <code>new SecureRandom()</code> (constructor không tham số). Dùng <code>getInstance()</code> thì phải truyền <code>SHA1PRNG</code> – tên duy nhất phổ biến.</li>
<li><b>Không tự seed</b> trừ khi bắt buộc – seed sai → chuỗi đoán được. <code>setSeed()</code> có thể chỉ <i>bổ sung</i> chứ không thay thế trạng thái, nên không dùng khi cần giá trị <b>tất định</b> (dùng hash hoặc KDF).</li>
</ul>
<pre>SecureRandom sr = new SecureRandom();
byte[] out = new byte[16];
sr.nextBytes(out);</pre>

<h3>#️⃣ MessageDigest (hàm băm)</h3>
<p>Biến chuỗi byte bất kỳ thành <b>digest</b> cố định. Ba tính chất của hàm băm tốt:</p>
<div class="cards">
 <div class="mini g"><h4>Kháng va chạm</h4><p>Khó tìm hai đầu vào khác nhau cho cùng hash.</p></div>
 <div class="mini b"><h4>Kháng tiền ảnh (pre-image)</h4><p>Khó tìm đầu vào cho một hash cho trước.</p></div>
 <div class="mini a"><h4>Kháng tiền ảnh thứ hai</h4><p>Cho m1, khó tìm m2 ≠ m1 có cùng hash.</p></div>
</div>
<pre>MessageDigest md = MessageDigest.getInstance("SHA-256");
byte[] digest = md.digest(data);       <span class="c">// hoặc update() nhiều lần rồi digest()</span></pre>

<h3>✍️ Signature (chữ ký số)</h3>
<p>Lấy thông điệp + <b>khóa riêng</b> → chữ ký. Kiểm bằng <b>khóa công khai</b>: tính hash thông điệp rồi so với hash trong chữ ký → bảo đảm <b>toàn vẹn</b> và (nếu khóa riêng còn bí mật) <b>xác thực</b>.</p>
<p>Tên dạng <code>&lt;digest&gt;with&lt;encryption&gt;</code>: <code>SHA512withRSA</code>; với MGF: <code>SHA256withRSAandMGF1</code>.</p>
<pre>Signature sig = Signature.getInstance("SHA256withRSA");
sig.initSign(privKey);  sig.update(data);  byte[] s = sig.sign();
sig.initVerify(pubKey); sig.update(data);  boolean ok = sig.verify(s);</pre>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Ký: Riêng → Sign · Kiểm: Công khai → Verify</div>“Riêng ký, công khai kiểm”.</div>
`},

{id:'cipher', icon:'🔐', title:'Engine class (2): Cipher, chế độ khối, Mac', html:`
<h3>Mã hóa là gì?</h3>
<div class="compare">
 <div class="mini b"><h4>Đối xứng (symmetric / secret key)</h4><p><b>Cùng một khóa</b> để mã hóa và giải mã.</p></div>
 <div class="mini v"><h4>Bất đối xứng (asymmetric)</h4><p>Cặp <b>khóa công khai + riêng</b>: dữ liệu mã hóa bằng khóa này chỉ giải mã bằng khóa kia.</p></div>
</div>
<ul>
<li><b>Block cipher</b>: xử lý theo khối cố định; khối cuối thiếu thì <b>độn (padding)</b>, bỏ khi giải mã.</li>
<li><b>Stream cipher</b>: xử lý từng byte/bit, không cần padding.</li>
</ul>
<h3>Chế độ hoạt động của block cipher</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="5" data-title="ECB (Electronic Code Book)" data-desc="<p>Chia khối rồi mã hóa <b>từng khối độc lập</b>, nối lại. Đơn giản nhưng <b>khối plaintext giống nhau → khối ciphertext giống nhau</b>, nên cấu trúc dữ liệu lộ ra ngoài (hiệu ứng “ECB Penguin”: ảnh mã hóa ECB vẫn nhận ra hình).</p><p><b>⛔ Tránh dùng.</b></p>"><span>ECB</span><small>độc lập từng khối ⛔</small></button>
  <button class="layer" data-c="2" data-title="Chế độ phản hồi: CBC, CFB, OFB" data-desc="<p>Trộn khối ciphertext trước đó với plaintext khối hiện tại trước khi mã hóa. Khối đầu tiên cần <b>IV (initialization vector)</b> – chuỗi byte có kích thước khối, <b>không</b> nằm trong plaintext. Cipher có thể dùng IV do client đưa hoặc tự sinh.</p><p>Ví dụ phổ biến: <b>CBC</b>, CFB, OFB.</p>"><span>CBC / CFB / OFB</span><small>có IV, che mẫu</small></button>
  <button class="layer" data-c="3" data-title="CTR (Counter)" data-desc="<p>Mã hóa các giá trị <b>bộ đếm liên tiếp</b> để tạo luồng khóa cho từng khối. Biến block cipher thành <b>stream cipher</b> → <b>không cần padding</b>.</p>"><span>CTR</span><small>như stream cipher</small></button>
  <button class="layer" data-c="1" data-title="GCM (Galois/Counter) – authenticated encryption" data-desc="<p>Vừa che giấu mẫu vừa <b>xác thực ciphertext</b> (AE / AEAD). Tag xác thực được <b>nối vào cuối</b> ciphertext. API Cipher hỗ trợ từ Java 7 → Android 4.4.</p><p>Khi giải mã: tag được kiểm <b>ngầm</b> lúc <code>doFinal()</code>; đừng dùng kết quả của <code>update()</code> cho tới khi doFinal thành công.</p>"><span>GCM</span><small>mã hóa + xác thực ✅</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một chế độ.</p></div>
</div>
<h3>Chuỗi transformation: <code>thuật toán/chế độ/đệm</code></h3>
<p>Thử dựng và xem lời khuyên:</p>
<div class="sim" data-ciphersim></div>
<div class="callout c-danger"><b>Đừng chỉ ghi tên thuật toán!</b><code>Cipher.getInstance("AES")</code> dùng <b>mặc định của provider</b> (có thể là ECB) – không portable và có thể làm yếu bảo mật. Sách gọi đây là <b>lỗi thiết kế lớn của JCA</b>.</div>

<h3>Dùng Cipher</h3>
<pre>Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
byte[] iv = new byte[cipher.getBlockSize()];
new SecureRandom().nextBytes(iv);                          <span class="c">// IV ngẫu nhiên</span>
cipher.<span class="h">init</span>(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(iv));
byte[] part = cipher.update(plaintext);                    <span class="c">// có thể null</span>
byte[] last = cipher.<span class="h">doFinal</span>();                          <span class="c">// khối cuối</span></pre>
<table>
<tr><th>Mode</th><th>Dùng để</th></tr>
<tr><td>ENCRYPT_MODE / DECRYPT_MODE</td><td>Mã hóa/giải mã dữ liệu bất kỳ</td></tr>
<tr><td>WRAP_MODE / UNWRAP_MODE</td><td>Mã hóa (wrap) / giải mã (unwrap) <b>vật liệu khóa</b> của một Key bằng khóa khác</td></tr>
</table>
<p>Giải mã: init <code>DECRYPT_MODE</code> với <b>cùng khóa và IV</b>, rồi update + doFinal.</p>
<div class="callout c-info"><b>PKCS là gì?</b>Public Key Cryptography Standards (RSA Security, thập niên 90; nay đa số thành RFC). <b>#1</b>: RSA mã hóa/ký · <b>#5</b>: mã hóa dựa trên mật khẩu (PBE) · <b>#7</b>: mã hóa/ký thông điệp (nền của S/MIME) · <b>#8</b>: mã hóa khóa riêng · <b>#12</b>: container chứa khóa + chứng chỉ.</div>

<h3>🏷 Mac – mã xác thực thông điệp</h3>
<p>MAC dùng <b>khóa bí mật chung</b> để tính “tag” giúp xác thực và kiểm tra toàn vẹn thông điệp qua kênh không tin cậy. Cùng khóa dùng để kiểm → hai bên phải chia sẻ khóa. Thường kết hợp với cipher để vừa bí mật vừa toàn vẹn (như APK mã hóa ở chương 3: AES/CBC + HMAC-SHA1).</p>
<pre>Mac mac = Mac.getInstance("HmacSha256");
mac.init(secretKey);
byte[] tag = mac.doFinal(message);</pre>
<div class="callout c-tip"><b>Chữ ký số vs MAC</b>Chữ ký: <b>khóa riêng ký, khóa công khai kiểm</b> (ai cũng kiểm được, chống chối bỏ). MAC: <b>một khóa chung</b> cho cả tạo và kiểm.</div>
`},

{id:'keys', icon:'🗝', title:'Engine class (3): Key, KeySpec, Factory, Generator, KeyAgreement', html:`
<h3>Key – khóa “mờ” (opaque)</h3>
<p>Giao diện <code>Key</code> đại diện khóa mà thường <b>không lộ byte khóa</b>. Nhờ vậy cùng một API dùng được cho khóa trong bộ nhớ lẫn khóa nằm trong <b>phần cứng</b> (smart card, HSM) không thể xuất.</p>
<table>
<tr><th>Phương thức</th><th>Trả về</th></tr>
<tr><td><code>getAlgorithm()</code></td><td>Tên thuật toán (AES, RSA…)</td></tr>
<tr><td><code>getEncoded()</code></td><td>Dạng mã hóa chuẩn để truyền đi (khóa phần cứng không xuất được thường trả <b>null</b>)</td></tr>
<tr><td><code>getFormat()</code></td><td>RAW, X.509 hoặc PKCS#8</td></tr>
</table>
<p>3 cách có Key: <b>sinh</b> (KeyGenerator/KeyPairGenerator) · <b>chuyển đổi</b> từ dạng mã hóa (KeyFactory) · <b>lấy từ</b> KeyStore.</p>

<h3>Các loại key</h3>
<div class="cards">
 <div class="mini g"><h4>SecretKey</h4><p>Khóa đối xứng (marker interface). Cài đặt trực tiếp: <code>SecretKeySpec</code> (vừa là Key vừa là KeySpec).</p></div>
 <div class="mini b"><h4>PBEKey</h4><p>Khóa sinh từ <b>mật khẩu</b>. PBE dùng <b>salt</b> (chống tấn công bảng tính sẵn) + <b>số lần lặp lớn</b> (key stretching, làm chậm brute-force). Phải giữ salt + iteration để sinh lại cùng khóa.</p></div>
 <div class="mini a"><h4>PublicKey / PrivateKey / KeyPair</h4><p>Khóa bất đối xứng (marker); <code>KeyPair</code> chỉ là cặp chứa hai khóa. Có lớp riêng như <code>RSAPublicKey</code>, <code>RSAPrivateCrtKey</code>.</p></div>
</div>
<h3>Key vs KeySpec</h3>
<div class="compare">
 <div class="mini v"><h4>Key (mờ)</h4><p>Dùng trực tiếp để thao tác mật mã; có thể chỉ giữ <b>handle</b> tới khóa phần cứng.</p></div>
 <div class="mini g"><h4>KeySpec (trong suốt)</h4><p>Cho phép đọc <b>từng tham số</b> khóa (vd modulus, private exponent). Có thể là dạng mã hóa độc lập thuật toán (<code>PKCS8EncodedKeySpec</code>, <code>X509EncodedKeySpec</code>) hoặc riêng thuật toán (<code>RSAPrivateKeySpec</code>).</p></div>
</div>
<p>Với khóa trong phần cứng, <code>getPrivateExponent()</code> trả <b>null</b>.</p>
<h3>Các “nhà máy” và “bộ sinh”</h3>
<table>
<tr><th>Lớp</th><th>Việc làm</th><th>Ví dụ</th></tr>
<tr><td><b>KeyFactory</b></td><td>KeySpec ⇄ Key (bất đối xứng). Cũng có <b>key translation</b> (<code>translateKey</code>): đổi Key của provider khác sang tương thích provider hiện tại.</td><td><code>KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(bytes))</code></td></tr>
<tr><td><b>SecretKeyFactory</b></td><td>Như KeyFactory nhưng cho khóa đối xứng. Dùng nhiều nhất để sinh khóa từ <b>mật khẩu (PBE)</b>.</td><td><code>"PBKDF2WithHmacSHA1"</code> + <code>PBEKeySpec(password, salt, 1000, 256)</code></td></tr>
<tr><td><b>KeyPairGenerator</b></td><td>Sinh cặp khóa; khởi tạo bằng <b>kích thước</b> hoặc <b>tham số riêng</b> (vd tên đường cong EC).</td><td><code>"ECDH"</code> + <code>ECGenParameterSpec("secp256r1")</code></td></tr>
<tr><td><b>KeyGenerator</b></td><td>Sinh khóa <b>đối xứng</b>. Tốt hơn tự lấy byte ngẫu nhiên: kiểm tra khóa yếu, đặt bit parity (DES…), tận dụng phần cứng.</td><td><code>KeyGenerator.getInstance("AES").init(256)</code></td></tr>
</table>
<div class="callout c-warn"><b>Tên đường cong EC</b>Đặc tả JCA của Oracle không định nghĩa tên đường cong; tên Android hỗ trợ có thể khác theo phiên bản.</div>

<h3>🤝 KeyAgreement – thỏa thuận khóa</h3>
<p>Cho hai (hay nhiều) bên tạo ra <b>khóa chung mà không phải trao đổi bí mật</b>. Phổ biến: <b>Diffie-Hellman (DH)</b> và biến thể đường cong elliptic <b>ECDH</b>.</p>
<div class="stepper" data-stepper>
 <div class="step"><b>Mỗi bên có một cặp khóa</b>Hai cặp sinh với <b>cùng tham số</b> (DH: modulus nguyên tố + generator; ECDH: cùng đường cong).</div>
 <div class="step"><b>Trao đổi khóa công khai</b>Hai bên gửi cho nhau <b>public key</b> (không lộ bí mật).</div>
 <div class="step"><b>Chạy thuật toán</b><code>init(myPrivKey)</code> → <code>doPhase(remotePubKey, true)</code> (gọi N−1 lần với N bên; <code>true</code> ở pha cuối).</div>
 <div class="step"><b>generateSecret()</b>Cả hai nhận <b>cùng một bí mật chung</b>.</div>
</div>
<div class="callout c-info"><b>Nên đưa qua KDF</b>Không dùng trực tiếp bí mật chung làm khóa (mất entropy, khó sinh nhiều khóa). Hãy dùng <b>KDF</b> (có salt) để lấy khóa. <code>generateSecret(String alg)</code> trả SecretKey; nếu tên có KDF (vd <code>ECDHwithSHA1KDF</code>) thì áp KDF, nếu không phần lớn cài đặt chỉ <b>cắt bớt</b> bí mật.</div>
`},

{id:'keystore', icon:'🗄', title:'KeyStore, PKCS#12 và chứng chỉ', html:`
<h3>KeyStore</h3>
<p>Cơ sở dữ liệu khóa và chứng chỉ, mỗi <b>entry</b> gắn với một <b>alias</b> (chuỗi). Ba loại entry:</p>
<div class="cards">
 <div class="mini g"><h4>PrivateKeyEntry</h4><p>Khóa riêng + chuỗi chứng chỉ. Bản phần mềm thường mã hóa khóa bằng passphrase.</p></div>
 <div class="mini b"><h4>SecretKeyEntry</h4><p>Khóa đối xứng (không phải KeyStore nào cũng hỗ trợ).</p></div>
 <div class="mini a"><h4>TrustedCertificateEntry</h4><p>Chứng chỉ công khai của bên khác (thường là CA). KeyStore chỉ chứa loại này = <b>truststore</b>.</p></div>
</div>
<h3>Loại (type) KeyStore</h3>
<ul>
<li>Type quyết định <b>định dạng lưu trữ</b> và cách bảo vệ khóa; mặc định đặt bởi thuộc tính <code>keystore.type</code>.</li>
<li>Định dạng riêng: <b>JKS</b> (Java SE gốc), <b>JCEKS</b> (JKS bảo mật hơn), <b>BKS</b> (Bouncy Castle KeyStore – <b>mặc định trên Android</b>).</li>
<li>Chuẩn công khai: <b>PKCS#12</b> (còn gọi PFX).</li>
<li>KeyStore có thể lưu nhiều tệp, CSDL hoặc ngoài thiết bị (smart card, HSM). Android có KeyStore riêng cho trust store (chương 6) và credential storage (chương 7).</li>
</ul>
<h3>PKCS#12 / PFX</h3>
<p>Container ASN.1 chứa nhiều đối tượng trong các <b>SafeBag</b>: <code>CertBag</code> (chứng chỉ), <code>KeyBag</code> (khóa riêng), <code>PKCS8ShroudedKeyBag</code> (khóa riêng đã mã hóa).</p>
<ul>
<li><b>Toàn vẹn</b> cả tệp: <b>MAC</b> với khóa suy ra từ <i>mật khẩu toàn vẹn</i>.</li>
<li><b>Bí mật</b> của từng khóa riêng: mã hóa bằng khóa suy ra từ <i>mật khẩu riêng tư</i>. Thực tế hai mật khẩu thường giống nhau.</li>
</ul>
<pre>KeyStore ks = KeyStore.getInstance("PKCS12");
ks.load(new FileInputStream("mykey.pfx"), "password".toCharArray());
KeyStore.PrivateKeyEntry e = (KeyStore.PrivateKeyEntry) ks.getEntry("mykey", null);
X509Certificate cert = (X509Certificate) e.getCertificate();
PrivateKey key = e.getPrivateKey();</pre>
<p>Thao tác khác: <code>aliases()</code>, <code>setEntry()</code>, <code>deleteEntry()</code>, <code>store(out, password)</code> để lưu.</p>

<h3>CertificateFactory & CertPath</h3>
<ul>
<li><b>CertificateFactory</b> = bộ phân tích chứng chỉ và CRL; thường chỉ có loại <code>"X.509"</code>. Có thể dựng <b>CertPath</b> (chuỗi chứng chỉ) bằng <code>generateCertPath()</code>.</li>
<li><b>CertPathValidator</b> (<code>"PKIX"</code>): kiểm tra chuỗi chứng chỉ theo chuẩn PKIX (chương 6). Cần tập <b>trust anchor</b> (thường là CA tin cậy) trong <code>PKIXParameters</code>. Thành công trả <code>PKIXCertPathValidatorResult</code>; thất bại ném <code>CertPathValidatorException</code>.</li>
<li><b>CertPathBuilder</b> + <b>CertStore</b>: tự tìm chứng chỉ còn thiếu để dựng chuỗi.</li>
</ul>
<div class="flow"><div class="node">Tệp .cer</div><span class="arr">→</span><div class="node">CertificateFactory</div><span class="arr">→</span><div class="node">X509Certificate</div><span class="arr">→</span><div class="node">CertPath</div><span class="arr">→</span><div class="node hl">CertPathValidator (PKIX) + trust anchors</div></div>
`},

{id:'providers', icon:'🧱', title:'Các provider có sẵn của Android', html:`
<p>Android dựa trên JCA. Thành phần cấp thấp gọi thẳng thư viện native (OpenSSL), còn <b>JCA là API mật mã chính</b> cho cả hệ thống lẫn app. Có <b>3 provider JCA lõi</b> và 2 provider JSSE cho SSL (chương 6).</p>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="2" data-title="AndroidOpenSSL (ưu tiên 1) – Conscrypt" data-desc="<p>Provider <b>native</b>, dựa trên <b>OpenSSL</b> qua JNI (lớp chính <code>NativeCrypto</code>). Ban đầu chỉ cho SSL socket; đến 4.4 phủ hầu hết chức năng của Bouncy Castle với hiệu năng tốt hơn.</p><ul><li><b>Ưu tiên cao nhất (1)</b> → nếu không chỉ định Bouncy Castle thì bạn nhận bản này.</li><li>Từ 4.4 được tách khỏi libcore thành <b>Conscrypt</b> (<code>org.conscrypt</code>; trong nền tảng: <code>com.android.org.conscrypt</code>) để app có thể đóng gói riêng, ổn định không phụ thuộc phiên bản Android.</li></ul>"><span>AndroidOpenSSL</span><small>native · ưu tiên 1</small></button>
  <button class="layer" data-c="3" data-title="Bouncy Castle (bản sửa của Android)" data-desc="<p>Provider <b>Java thuần</b>, đầy đủ nhất; trước Android 4.0 là provider đầy đủ duy nhất. Android dùng bản đã vá:</p><ul><li>Xóa thuật toán/mode không có trong Java RI (RIPEMD, SHA-224, GOST3411, Twofish, CMAC, El Gamal, RSA-PSS, ECMQV…).</li><li>Xóa thuật toán <b>không an toàn</b> (MD2, RC2).</li><li>Băm MD5/SHA thay bằng <b>native</b>.</li><li>Xóa một số PBE, xóa hỗ trợ chứng chỉ qua LDAP.</li><li>Thêm hỗ trợ <b>blacklist chứng chỉ</b> (chương 6).</li><li>Đổi gói thành <code>com.android.org.bouncycastle</code> (từ Android 3.0) tránh xung đột với app đóng gói BC.</li></ul><p>Mặc định KeyStore: <b>BKS</b>.</p>"><span>Bouncy Castle</span><small>Java thuần · BC 1.49</small></button>
  <button class="layer" data-c="6" data-title="Crypto (Harmony) – ưu tiên thấp nhất" data-desc="<p>Provider hạn chế từ Apache Harmony; chỉ giữ để tương thích ngược. <b>Ưu tiên thấp nhất</b> nên không bao giờ được trả về trừ khi chỉ định rõ.</p><p>Hỗ trợ (4.4.4): KeyFactory DSA · MessageDigest SHA-1 · SecureRandom <b>SHA1PRNG</b> · Signature SHA1withDSA. Về sau chỉ giữ lại SHA1PRNG.</p>"><span>Crypto</span><small>cũ · ưu tiên thấp nhất</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một provider.</p></div>
</div>
<table>
<tr><th>Provider</th><th>Cài bằng</th><th>Ưu tiên</th><th>Ghi chú</th></tr>
<tr><td>AndroidOpenSSL</td><td>Native (OpenSSL)</td><td><b>cao nhất</b></td><td>Hiệu năng; Conscrypt</td></tr>
<tr><td>Bouncy Castle</td><td>Java</td><td>giữa</td><td>Đầy đủ hơn, đã lược; BKS</td></tr>
<tr><td>Crypto</td><td>Java (Harmony)</td><td><b>thấp nhất</b></td><td>Tương thích ngược</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Open (nhanh, số 1) → Bouncy (đầy đủ) → Crypto (cổ)</div></div>
<h3>OpenSSL trên Android</h3>
<ul>
<li>Bộ công cụ mã nguồn mở SSL/TLS, là thư viện hệ thống (4.4 dùng 1.0.1e + các bản vá).</li>
<li><b>Không có API OpenSSL công khai ổn định</b> → app cần OpenSSL phải <b>tự đóng gói</b>. API mật mã công khai ổn định duy nhất là <b>JCA</b>.</li>
</ul>
<h3>Dùng provider tùy chỉnh</h3>
<p>Provider có sẵn không có hết các thuật toán lạ (RSA-PSS, Twofish…). Bạn có thể đăng ký provider riêng – <b>chỉ cho app của mình</b>.</p>
<div class="cards">
 <div class="mini a"><h4>Đóng gói Bouncy Castle đầy đủ</h4><p>Có thể <b>xung đột class loader</b>, nhất là trên Android &lt; 3.0 (chưa đổi tên gói BC hệ thống). Giải quyết: đổi gói bằng <code>jarjar</code> hoặc dùng Spongy Castle.</p></div>
 <div class="mini g"><h4>Spongy Castle</h4><p>Bản BC đã đổi gói: <code>org.bouncycastle.*</code> → <code>org.spongycastle.*</code>, tên provider <b>BC → SC</b>; không đổi tên lớp nên API giữ nguyên.</p></div>
</div>
<pre>static {
  Security.insertProviderAt(
      new org.spongycastle.jce.provider.BouncyCastleProvider(), 1);
}
Signature sig = Signature.getInstance("SHA1withRSA/PSS", "SC");   <span class="c">// RSA-PSS mà Android không có</span></pre>
<ul>
<li>Đóng gói Spongy Castle còn cho phép dùng <b>API nhẹ</b> của BC (linh hoạt hơn JCA) và các việc JCA không có API: ký chứng chỉ X.509, tạo thông điệp S/MIME.</li>
</ul>
`}

],

cards: [
 {f:'JCA là gì? Mục tiêu thiết kế?',b:'Java Cryptography Architecture – khung mật mã <b>độc lập cài đặt</b> và <b>mở rộng được</b>: app chỉ nêu tên thuật toán; thêm thuật toán bằng cách đăng ký thêm provider.'},
 {f:'Engine class là gì? Ví dụ?',b:'Lớp API cho một dịch vụ mật mã trừu tượng: <code>Cipher</code> (mã hóa), <code>Signature</code> (ký), <code>MessageDigest</code> (băm)…'},
 {f:'Provider (CSP) là gì?',b:'Gói cài đặt cụ thể một số dịch vụ/thuật toán mật mã và công bố chúng để JCA lập sổ đăng ký.'},
 {f:'SPI class là gì?',b:'Service Provider Interface – lớp trừu tượng ứng với mỗi engine (vd CipherSpi ↔ Cipher) mà provider phải cài; Cipher chuyển mọi lời gọi tới SPI.'},
 {f:'Lớp java.security.Provider dùng làm gì?',b:'Mô tả tên, phiên bản và danh sách <b>thuật toán ↔ lớp SPI</b>; JCA dùng nó dựng sổ đăng ký.'},
 {f:'Nếu 2 provider cùng hỗ trợ thuật toán, và không chỉ định provider thì sao?',b:'JCA trả về bản của provider có <b>thứ tự ưu tiên cao hơn</b> (số nhỏ hơn).'},
 {f:'Delayed provider selection là gì? Android có hỗ trợ không?',b:'Chọn provider lúc <b>init</b> dựa vào Key (cho Cipher, KeyAgreement, Mac, Signature) – hữu ích với khóa phần cứng. Android 4.4 <b>chưa hỗ trợ</b>.'},
 {f:'Khi nào nên chỉ định provider cụ thể?',b:'Chỉ khi bạn tự đóng gói provider đó hoặc xử lý được fallback khi nó không có.'},
 {f:'Đăng ký provider tĩnh vs động trên Android?',b:'Tĩnh (<code>security.provider.n=</code>): <b>không hỗ trợ</b> (security.properties nằm trong core.jar). Động (<code>addProvider/insertProviderAt</code>): hỗ trợ, chỉ trong tiến trình app, không cần quyền.'},
 {f:'insertProviderAt() trả về gì?',b:'Vị trí thực tế đã chèn, hoặc <b>-1</b> nếu provider đã được cài sẵn.'},
 {f:'Vì sao Java SE đòi quyền đăng ký provider còn Android thì không?',b:'Ở Java SE chèn provider lên đầu có thể thay thế cả hệ thống mật mã; ở Android thay đổi chỉ trong tiến trình app, không ảnh hưởng hệ thống/app khác.'},
 {f:'3 dịch vụ mà engine class cung cấp?',b:'(1) Thao tác mật mã (mã hóa/ký/băm). (2) Sinh/chuyển đổi vật liệu mật mã (khóa, tham số). (3) Quản lý/lưu trữ khóa & chứng chỉ.'},
 {f:'Vì sao engine class không new trực tiếp?',b:'Để tách client khỏi cài đặt: dùng factory <code>getInstance()</code>; ném NoSuchAlgorithmException nếu không có thuật toán.'},
 {f:'Tên thuật toán JCA: đặc điểm?',b:'Không phân biệt hoa thường; có bí danh; có thể có cấu trúc (<code>SHA256withRSA</code>). Chuẩn: JCA Standard Names.'},
 {f:'Cách đúng để lấy SecureRandom trên Android?',b:'<code>new SecureRandom()</code> (không tham số). Qua getInstance chỉ có <code>SHA1PRNG</code> phổ biến.'},
 {f:'Android seed CSPRNG thế nào? EntropyMixer?',b:'Từ <code>/dev/urandom</code>; lưu trạng thái 4096 byte vào <code>/data/system/entropy.dat</code> và ghi lại lúc boot (dịch vụ EntropyMixer).'},
 {f:'Vì sao không nên tự seed SecureRandom?',b:'Seed kém → chuỗi đoán được. Ngoài ra <code>setSeed()</code> có thể chỉ bổ sung trạng thái nên không tất định; cần giá trị tất định thì dùng hash/KDF.'},
 {f:'3 tính chất của hàm băm tốt?',b:'Kháng va chạm · kháng tiền ảnh (pre-image) · kháng tiền ảnh thứ hai.'},
 {f:'Cách dùng MessageDigest?',b:'<code>MessageDigest.getInstance("SHA-256")</code> rồi <code>digest(data)</code> hoặc nhiều <code>update()</code> + <code>digest()</code>.'},
 {f:'Chữ ký số: khóa nào ký, khóa nào kiểm?',b:'<b>Khóa riêng ký</b>, <b>khóa công khai kiểm</b>. Đảm bảo toàn vẹn và xác thực (nếu khóa riêng còn bí mật).'},
 {f:'SHA256withRSAandMGF1 có nghĩa gì?',b:'Chữ ký RSA kiểu có hàm mask generation (như RSA-PSS), băm SHA-256. Định dạng <code>&lt;digest&gt;with&lt;enc&gt;and&lt;mgf&gt;</code>.'},
 {f:'Quy trình ký/kiểm trong API Signature?',b:'<code>initSign(priv)</code> → <code>update</code> → <code>sign()</code>; <code>initVerify(pub)</code> → <code>update</code> → <code>verify(sig)</code>.'},
 {f:'Đối xứng vs bất đối xứng?',b:'Đối xứng: một khóa chung. Bất đối xứng: cặp khóa công khai/riêng – mã hóa bằng khóa này, giải mã bằng khóa kia.'},
 {f:'Block cipher vs stream cipher; padding?',b:'Block: theo khối cố định, khối cuối được <b>độn (padding)</b>. Stream: từng byte/bit, không cần padding.'},
 {f:'ECB có vấn đề gì?',b:'Khối plaintext giống nhau → ciphertext giống nhau → lộ cấu trúc (ECB Penguin). Tránh dùng.'},
 {f:'IV là gì và dùng ở chế độ nào?',b:'Initialization Vector: chuỗi byte kích thước khối kết hợp với khối đầu ở các chế độ phản hồi (CBC, CFB, OFB). Phải ngẫu nhiên/khó đoán mỗi lần mã hóa.'},
 {f:'CTR mode đặc biệt ở điểm nào?',b:'Mã hóa các giá trị bộ đếm để tạo luồng khóa → biến block cipher thành stream cipher, <b>không cần padding</b>.'},
 {f:'GCM và authenticated encryption?',b:'GCM vừa che mẫu vừa <b>xác thực</b> ciphertext (AEAD); tag nối cuối ciphertext, kiểm ở <code>doFinal()</code>. Android 4.4+ (Java 7). Đừng dùng output update() trước khi doFinal xác thực.'},
 {f:'Chuỗi transformation của Cipher?',b:'<code>thuật toán/chế độ/đệm</code>, ví dụ <code>AES/CBC/PKCS5Padding</code>.'},
 {f:'Vì sao không nên getInstance("AES") không kèm mode/padding?',b:'Dùng mặc định của provider: không portable, có thể là ECB → giảm bảo mật. Đây là “lỗi thiết kế lớn” của JCA.'},
 {f:'WRAP_MODE/UNWRAP_MODE là gì?',b:'Mã hóa/giải mã <b>vật liệu khóa</b> của một Key bằng khóa khác (khác ENCRYPT/DECRYPT cho dữ liệu bất kỳ).'},
 {f:'PKCS#1, #5, #7, #8, #12 là gì?',b:'#1: RSA mã hóa/ký · #5: mã hóa dựa mật khẩu · #7: thông điệp mã hóa/ký (S/MIME) · #8: khóa riêng · #12: container khóa + chứng chỉ.'},
 {f:'MAC là gì? Khác chữ ký số ở đâu?',b:'Mã xác thực thông điệp bằng <b>khóa bí mật chung</b>, kiểm toàn vẹn + xác thực. Chữ ký số dùng cặp khóa bất đối xứng.'},
 {f:'Ba phương thức của interface Key?',b:'<code>getAlgorithm()</code>, <code>getEncoded()</code> (null với khóa phần cứng), <code>getFormat()</code> (RAW/X.509/PKCS#8).'},
 {f:'Key vs KeySpec?',b:'Key: biểu diễn <b>mờ</b>, có thể chỉ là handle phần cứng. KeySpec: biểu diễn <b>trong suốt</b>, cho đọc từng tham số (hoặc dạng mã hóa như PKCS8EncodedKeySpec).'},
 {f:'PBE (password-based encryption) dựa trên 2 ý tưởng nào?',b:'<b>Salt</b> (chống bảng tính sẵn) và <b>số lần lặp lớn</b> (key stretching – làm chậm brute-force).'},
 {f:'KeyFactory làm gì? Key translation?',b:'Chuyển KeySpec ⇄ Key (bất đối xứng). <code>translateKey</code> đổi Key của provider khác thành key tương thích provider hiện tại.'},
 {f:'Cách sinh khóa từ mật khẩu?',b:'<code>PBEKeySpec(password, salt, iterations, keyLength)</code> + <code>SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1")</code> → <code>generateSecret()</code>.'},
 {f:'KeyGenerator vs tự lấy byte ngẫu nhiên?',b:'KeyGenerator kiểm khóa yếu, đặt bit parity (DES), tận dụng phần cứng → nên dùng.'},
 {f:'KeyAgreement hoạt động thế nào (ECDH)?',b:'Mỗi bên có cặp khóa cùng tham số; trao đổi public key; <code>init(myPriv)</code> → <code>doPhase(remotePub,true)</code> → <code>generateSecret()</code> → cả hai ra cùng bí mật. Nên đưa qua KDF.'},
 {f:'3 loại entry của KeyStore? Truststore là gì?',b:'PrivateKeyEntry · SecretKeyEntry · TrustedCertificateEntry. Truststore = KeyStore chỉ chứa TrustedCertificateEntry.'},
 {f:'KeyStore mặc định của Android?',b:'<b>BKS</b> (Bouncy Castle KeyStore). Ngoài ra JKS, JCEKS, PKCS12.'},
 {f:'PKCS#12 gồm gì? Bảo vệ ra sao?',b:'Container ASN.1 với SafeBag (CertBag, KeyBag, PKCS8ShroudedKeyBag). MAC (mật khẩu toàn vẹn) bảo vệ cả tệp; từng khóa riêng mã hóa bằng mật khẩu riêng tư.'},
 {f:'CertPathValidator("PKIX") cần gì?',b:'Một CertPath (từ CertificateFactory) và PKIXParameters chứa tập <b>trust anchor</b>; lỗi ném CertPathValidatorException.'},
 {f:'3 provider JCA lõi của Android và thứ tự ưu tiên?',b:'<b>AndroidOpenSSL</b> (ưu tiên 1, native) → <b>Bouncy Castle</b> (Java) → <b>Crypto</b> (Harmony, thấp nhất).'},
 {f:'Android Bouncy Castle khác bản gốc thế nào?',b:'Bỏ thuật toán ngoài Java RI & không an toàn (MD2, RC2), băm chuyển native, thêm blacklist chứng chỉ, bỏ LDAP, đổi gói thành <code>com.android.org.bouncycastle</code>.'},
 {f:'AndroidOpenSSL / Conscrypt là gì?',b:'Provider native dựa OpenSSL qua JNI (<code>NativeCrypto</code>). Từ 4.4 tách khỏi libcore thành <b>Conscrypt</b> để app đóng gói riêng.'},
 {f:'Vì sao không dùng trực tiếp OpenSSL của hệ thống trong app?',b:'Android không có API OpenSSL công khai ổn định (phiên bản và bản vá đổi theo bản Android). Muốn dùng phải tự đóng gói; API ổn định duy nhất là JCA.'},
 {f:'Spongy Castle là gì?',b:'Bản BC đổi gói <code>org.spongycastle.*</code>, tên provider <b>SC</b>, để tránh xung đột class loader với BC hệ thống; API không đổi.'}
],

quiz: [
 {q:'Mục tiêu chính của kiến trúc JCA là:',o:['Tăng tốc độ mã hóa','Độc lập cài đặt và mở rộng được qua provider','Thay thế OpenSSL','Chỉ hỗ trợ RSA'],a:1,e:'App chỉ nêu thuật toán; thêm thuật toán bằng cách đăng ký provider.'},
 {q:'Engine class trong JCA là:',o:['Một cài đặt thuật toán cụ thể','Lớp API cho một dịch vụ mật mã trừu tượng (Cipher, Signature…)','Một thư viện native','Một tệp cấu hình'],a:1,e:'Provider mới là bên cài đặt cụ thể.'},
 {q:'ProviderA (1) có SHA-1, SHA-384; ProviderB (2) có SHA-256, SHA-512; ProviderC (3) có SHA-1, SHA-256. MessageDigest.getInstance("SHA-256") không chỉ định provider trả về bản của:',o:['ProviderA','ProviderB','ProviderC','Lỗi'],a:1,e:'ProviderB là provider đầu tiên trong thứ tự ưu tiên có SHA-256.'},
 {q:'Cùng cấu hình trên, getInstance("SHA-256", "ProviderC") trả về:',o:['ProviderB vì ưu tiên cao hơn','ProviderC theo yêu cầu','NoSuchAlgorithmException','ProviderA'],a:1,e:'Chỉ định provider thì lấy đúng provider đó.'},
 {q:'Đăng ký provider TĨNH (security.provider.n) trên Android:',o:['Được hỗ trợ đầy đủ','Không được hỗ trợ vì security.properties nằm trong core.jar','Cần quyền root','Chỉ cho app hệ thống'],a:1,e:'Chỉ có đăng ký động.'},
 {q:'Vì sao app Android không cần quyền đặc biệt để đăng ký JCA provider?',o:['Vì Android bỏ qua provider','Vì thay đổi chỉ ảnh hưởng tiến trình app hiện tại','Vì có SELinux','Vì provider chạy trong kernel'],a:1,e:'Không tác động hệ thống hay app khác.'},
 {q:'Cách an toàn để lấy SecureRandom đã được seed đúng trên Android là:',o:['new SecureRandom(new byte[0])','new SecureRandom() không tham số','Dùng System.currentTimeMillis() làm seed','Random của java.util'],a:1,e:'Constructor mặc định seed đúng từ hệ thống (/dev/urandom).'},
 {q:'EntropyMixer của Android làm gì?',o:['Mã hóa ổ đĩa','Lưu trạng thái CSPRNG vào entropy.dat và ghi lại vào /dev/urandom khi boot','Sinh khóa RSA','Tạo chứng chỉ'],a:1,e:'Giúp kernel CSPRNG không ở trạng thái dễ đoán ngay sau khi khởi động.'},
 {q:'Cần một giá trị tất định từ đầu vào cho trước. Nên dùng:',o:['SecureRandom với setSeed','Hàm băm hoặc KDF','Cipher ECB','KeyAgreement'],a:1,e:'SecureRandom không đảm bảo tất định ngay cả khi cùng seed.'},
 {q:'“Kháng tiền ảnh thứ hai” (second pre-image resistance) nghĩa là:',o:['Khó tìm hai đầu vào bất kỳ cùng hash','Cho trước m1, khó tìm m2 ≠ m1 có cùng hash','Khó tìm đầu vào cho hash cho trước','Hash phải dài hơn đầu vào'],a:1,e:'Khác với kháng va chạm (tự do chọn cả hai) và pre-image (chỉ biết hash).'},
 {q:'Tên thuật toán chữ ký SHA256withRSA nghĩa là:',o:['Băm bằng RSA, ký bằng SHA-256','Băm bằng SHA-256 rồi ký bằng RSA','Mã hóa bằng SHA-256','Chỉ băm'],a:1,e:'Định dạng &lt;digest&gt;with&lt;encryption&gt;.'},
 {q:'Với chữ ký số, ai dùng khóa nào?',o:['Ký bằng khóa công khai, kiểm bằng khóa riêng','Ký bằng khóa riêng, kiểm bằng khóa công khai','Cả hai dùng khóa riêng','Cả hai dùng khóa công khai'],a:1,e:'Chỉ chủ khóa riêng mới tạo được chữ ký; ai cũng kiểm được.'},
 {q:'Điểm yếu chính của chế độ ECB là:',o:['Quá chậm','Khối plaintext giống nhau cho ciphertext giống nhau, lộ cấu trúc dữ liệu','Cần quá nhiều RAM','Không hỗ trợ AES'],a:1,e:'Hiệu ứng ECB Penguin.'},
 {q:'Chế độ nào biến block cipher thành stream cipher và không cần padding?',o:['ECB','CBC','CTR','Tất cả'],a:2,e:'CTR mã hóa bộ đếm tạo luồng khóa.'},
 {q:'Ưu điểm của GCM so với CBC:',o:['Nhanh hơn luôn','Vừa che giấu mẫu vừa xác thực ciphertext (AEAD)','Không cần khóa','Không cần IV'],a:1,e:'GCM cung cấp authenticated encryption; tag được nối vào cuối ciphertext.'},
 {q:'Khi dùng GCM giải mã, bạn nên:',o:['Dùng ngay output của update()','Chỉ tin dữ liệu sau khi doFinal() xác thực tag thành công','Bỏ qua tag','Dùng ECB cho khối cuối'],a:1,e:'Tag được kiểm ngầm ở doFinal().'},
 {q:'Cipher.getInstance("AES") (không có mode/padding) nguy hiểm vì:',o:['Không chạy được','Dùng mặc định của provider có thể là ECB, không portable','Quá chậm','Chỉ chạy trên emulator'],a:1,e:'Luôn chỉ định đầy đủ thuật toán/chế độ/đệm.'},
 {q:'Chuỗi transformation nào đúng định dạng?',o:['AES-CBC-PKCS5','AES/CBC/PKCS5Padding','CBC/AES/PKCS5','AES:CBC:PKCS5'],a:1,e:'algorithm/mode/padding.'},
 {q:'WRAP_MODE của Cipher dùng để:',o:['Nén dữ liệu','Mã hóa vật liệu khóa của một Key bằng khóa khác','Sinh IV','Băm khóa'],a:1,e:'UNWRAP_MODE làm ngược lại.'},
 {q:'PKCS#12 thường dùng để:',o:['Ký chứng chỉ','Đóng gói khóa riêng và chứng chỉ trong một tệp (.pfx)','Mã hóa HTTPS','Sinh số ngẫu nhiên'],a:1,e:'PKCS#12 = container khóa + chứng chỉ (PFX).'},
 {q:'MAC khác chữ ký số ở điểm chính nào?',o:['MAC dùng cặp khóa bất đối xứng','MAC dùng một khóa bí mật chung cho cả tạo và kiểm','MAC không đảm bảo toàn vẹn','MAC chỉ mã hóa'],a:1,e:'Cả hai bên phải chia sẻ khóa MAC.'},
 {q:'Giao diện Key được thiết kế “mờ” (opaque) để:',o:['Giấu thuật toán','Dùng chung API cho cả khóa trong bộ nhớ lẫn khóa phần cứng không xuất được','Nén khóa','Tăng tốc'],a:1,e:'getEncoded() trả null với khóa phần cứng.'},
 {q:'PBE chống brute-force mật khẩu bằng cách nào?',o:['Mã hóa hai lần','Dùng salt và số lần lặp lớn (key stretching)','Cắt ngắn mật khẩu','Dùng ECB'],a:1,e:'Salt chống bảng tính sẵn; lặp nhiều làm chậm mỗi lần thử.'},
 {q:'Để chuyển một khóa công khai RSA dạng X.509 thành đối tượng RSAPublicKey bạn dùng:',o:['KeyGenerator','KeyFactory với X509EncodedKeySpec','SecretKeyFactory','KeyAgreement'],a:1,e:'KeyFactory.generatePublic(new X509EncodedKeySpec(bytes)).'},
 {q:'Vì sao nên dùng KeyGenerator thay vì tự lấy byte ngẫu nhiên làm khóa AES?',o:['Vì nhanh hơn','Vì nó kiểm tra khóa yếu, đặt bit parity (DES) và có thể dùng phần cứng','Vì không cần SecureRandom','Vì khóa ngắn hơn'],a:1,e:'KeyGenerator xử lý các chi tiết đúng cách.'},
 {q:'Với ECDH giữa A và B, mỗi bên phải làm gì?',o:['Gửi khóa riêng cho nhau','Trao đổi khóa công khai rồi tính cùng bí mật bằng khóa riêng của mình + khóa công khai đối phương','Dùng chung một khóa riêng','Dùng ECB'],a:1,e:'Không cần trao đổi bí mật.'},
 {q:'Vì sao nên đưa bí mật chung từ KeyAgreement qua một KDF?',o:['Để thêm khóa công khai','Để tránh mất entropy, khuếch tán cấu trúc, và sinh được nhiều khóa (có salt)','Để mã hóa nó','Để giảm kích thước'],a:1,e:'Dùng trực tiếp có thể mất entropy và hạn chế số khóa.'},
 {q:'KeyStore mặc định của Android là:',o:['JKS','JCEKS','BKS','PKCS12'],a:2,e:'BKS = Bouncy Castle KeyStore.'},
 {q:'Một KeyStore chỉ chứa các TrustedCertificateEntry được gọi là:',o:['Keyring','Truststore','Wallet','Vault'],a:1,e:'Thường chứa chứng chỉ CA.'},
 {q:'Provider nào có ưu tiên cao nhất (1) trên Android 4.4?',o:['Bouncy Castle','Crypto','AndroidOpenSSL','Spongy Castle'],a:2,e:'AndroidOpenSSL dùng OpenSSL native, hiệu năng tốt.'},
 {q:'Provider Crypto (Harmony) trên Android có đặc điểm gì?',o:['Ưu tiên cao nhất','Giữ để tương thích ngược; ưu tiên thấp nhất nên chỉ trả về khi chỉ định rõ','Là provider native','Dùng cho TLS'],a:1,e:'Về sau chỉ giữ lại SHA1PRNG.'},
 {q:'Điều nào KHÔNG đúng về Bouncy Castle của Android?',o:['Đã xóa MD2 và RC2','Băm MD5/SHA dùng cài đặt native','Có đầy đủ mọi thuật toán của BC gốc','Đổi gói thành com.android.org.bouncycastle'],a:2,e:'Nhiều thuật toán (RIPEMD, SHA-224, Twofish, RSA-PSS…) đã bị xóa.'},
 {q:'Conscrypt là gì?',o:['Provider dựa trên OpenSSL được tách khỏi libcore để app có thể đóng gói riêng','Một thuật toán băm','Một loại KeyStore','Một chế độ Cipher'],a:0,e:'Tên gói org.conscrypt, trong nền tảng com.android.org.conscrypt.'},
 {q:'Vì sao app không nên dựa vào OpenSSL của hệ thống?',o:['Quá chậm','Không có API OpenSSL công khai ổn định; phiên bản/bản vá thay đổi theo bản Android','Bị cấm bởi Google Play','Không có OpenSSL'],a:1,e:'API công khai ổn định duy nhất là JCA; cần OpenSSL thì tự đóng gói.'},
 {q:'Bạn cần RSA-PSS (không có sẵn). Giải pháp phù hợp nhất:',o:['Đăng ký Spongy Castle và dùng provider "SC"','Sửa security.properties','Cài provider vào hệ thống','Dùng ECB'],a:0,e:'Spongy Castle đổi gói/tên provider để tránh xung đột.'}
],

order: [
 {id:'o-cipher',title:'Mã hóa AES/CBC bằng Cipher',intro:'Sắp xếp các bước đúng thứ tự khi mã hóa.',
  items:['Cipher.getInstance("AES/CBC/PKCS5Padding")','Sinh IV ngẫu nhiên bằng SecureRandom','cipher.init(ENCRYPT_MODE, key, ivParams)','cipher.update(plaintext) – nhận kết quả trung gian (có thể null)','cipher.doFinal() – nhận khối cuối','Nối các phần thành ciphertext'],
  explain:'Chọn transformation → IV → init → update → doFinal → ghép kết quả.'},
 {id:'o-ecdh',title:'Thỏa thuận khóa ECDH',intro:'Sắp xếp quy trình cho một bên (A).',
  items:['A và B sinh cặp khóa với cùng đường cong','A và B trao đổi khóa công khai','KeyAgreement.getInstance("ECDH")','keyAgreement.init(privKeyCủaA)','keyAgreement.doPhase(pubKeyCủaB, true)','generateSecret() → (tốt nhất) đưa qua KDF'],
  explain:'Hai bên chạy cùng chuỗi lệnh với khóa của mình để ra cùng bí mật.'},
 {id:'o-sign',title:'Ký và kiểm chữ ký',intro:'Sắp xếp theo thứ tự đúng (ký trước, kiểm sau).',
  items:['Signature.getInstance("SHA256withRSA")','initSign(privateKey)','update(data)','sign() → chữ ký','initVerify(publicKey)','update(data) rồi verify(signature)'],
  explain:'Ký bằng khóa riêng; kiểm bằng khóa công khai.'}
],

classify: [
 {id:'c-prov',title:'Provider nào?',intro:'Gán đặc điểm cho đúng provider của Android.',buckets:['AndroidOpenSSL','Bouncy Castle','Crypto (Harmony)'],
  items:[
   {t:'Ưu tiên cao nhất (1)',b:0},{t:'Java thuần, đã bị lược bớt thuật toán, KeyStore mặc định BKS',b:1},
   {t:'Chỉ giữ để tương thích ngược, ưu tiên thấp nhất',b:2},{t:'Dựa trên OpenSSL qua JNI (NativeCrypto)',b:0},
   {t:'Đổi gói thành com.android.org.bouncycastle',b:1},{t:'SecureRandom SHA1PRNG là thứ còn được giữ lại',b:2},
   {t:'Tách thành Conscrypt từ Android 4.4',b:0}],
  explain:'Open (nhanh, số 1) → Bouncy (đầy đủ) → Crypto (cổ).'},
 {id:'c-mode',title:'Chế độ block cipher nào?',intro:'Gán mô tả cho chế độ phù hợp.',buckets:['ECB','CBC (phản hồi)','CTR','GCM'],
  items:[
   {t:'Khối giống nhau → ciphertext giống nhau',b:0},{t:'Cần IV, trộn khối trước với khối hiện tại',b:1},
   {t:'Mã hóa bộ đếm, không cần padding',b:2},{t:'Có tag xác thực (AEAD)',b:3},
   {t:'Hiệu ứng “ECB Penguin”',b:0},{t:'Biến block cipher thành stream cipher',b:2},{t:'Hỗ trợ API Cipher từ Android 4.4 (Java 7)',b:3}],
  explain:'ECB ⛔ · CBC/CFB/OFB phản hồi · CTR đếm · GCM mã hóa + xác thực.'},
 {id:'c-engine',title:'Engine class nào?',intro:'Mỗi nhiệm vụ do engine class nào đảm nhiệm?',buckets:['Cipher','Signature','KeyAgreement','KeyFactory'],
  items:[
   {t:'Mã hóa AES/CBC',b:0},{t:'Ký dữ liệu bằng khóa riêng RSA',b:1},{t:'Tạo bí mật chung ECDH',b:2},
   {t:'Chuyển X509EncodedKeySpec thành PublicKey',b:3},{t:'Wrap/unwrap khóa',b:0},{t:'doPhase(remotePubKey, true)',b:2},{t:'Kiểm tra chữ ký bằng verify()',b:1}],
  explain:'Mỗi engine một nhiệm vụ rõ ràng.'}
],

cheat: [
 {title:'🏭 Kiến trúc JCA',html:'<div class="mnemo">Engine – SPI – Provider</div><ul><li>Engine class = API; SPI = giao diện cài đặt; Provider = nhà cung cấp</li><li>getInstance() → provider ưu tiên cao nhất</li><li>Chỉ đăng ký ĐỘNG (trong tiến trình app)</li><li>Delayed selection: chưa hỗ trợ</li></ul>'},
 {title:'🎲 # ✍ Cơ bản',html:'<ul><li><code>new SecureRandom()</code>, seed từ /dev/urandom + entropy.dat</li><li>MessageDigest: 3 kháng (va chạm, tiền ảnh, tiền ảnh 2)</li><li>Signature: riêng ký, công khai kiểm</li><li>Tên: <code>SHA256withRSA</code></li></ul>'},
 {title:'🔐 Cipher',html:'<div class="mnemo">algorithm/mode/padding</div><ul><li>ECB ⛔ · CBC cần IV · CTR không padding · GCM xác thực</li><li>Không bao giờ getInstance("AES") trơ trọi</li><li>init(mode, key, params) → update → doFinal</li><li>WRAP/UNWRAP cho khóa</li></ul>'},
 {title:'🗝 Key & Factory',html:'<ul><li>Key mờ; KeySpec trong suốt</li><li>KeyFactory/SecretKeyFactory (PBKDF2)</li><li>KeyPairGenerator, KeyGenerator</li><li>KeyAgreement: DH/ECDH + KDF</li><li>PBE = salt + lặp nhiều</li></ul>'},
 {title:'🗄 KeyStore',html:'<ul><li>Entry: PrivateKey · SecretKey · TrustedCert</li><li>Mặc định BKS; còn JKS, JCEKS, PKCS12</li><li>PKCS#12: SafeBags, MAC + mã hóa khóa</li><li>CertPathValidator("PKIX") + trust anchors</li></ul>'},
 {title:'🧱 Provider Android',html:'<div class="mnemo">Open → Bouncy → Crypto</div><ul><li>AndroidOpenSSL (native, #1, Conscrypt)</li><li>Bouncy Castle đã vá (Java, BKS)</li><li>Crypto Harmony (cổ)</li><li>Muốn thuật toán lạ: Spongy Castle (SC)</li><li>Không có API OpenSSL ổn định</li></ul>'}
]
};
