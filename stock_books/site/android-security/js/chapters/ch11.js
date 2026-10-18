CH[11] = {
sections: [

{id:'nfc', icon:'📡', title:'Tổng quan NFC', html:`
<p><b>NFC</b> (Near Field Communication) cho phép hai thiết bị ở gần nhau (thường ≤ <b>10 cm</b>) thiết lập liên lạc vô tuyến và trao đổi dữ liệu. NFC không phải một chuẩn mà là <b>tập các chuẩn</b> định nghĩa tần số, giao thức và định dạng dữ liệu; xây trên <b>RFID</b>, hoạt động ở <b>13,56 MHz</b>, tốc độ 106/212/424 kbps.</p>
<div class="compare">
 <div class="mini g"><h4>Active mode</h4><p>Cả <b>initiator</b> và <b>target</b> đều có nguồn điện và đều phát tín hiệu.</p></div>
 <div class="mini b"><h4>Passive mode</h4><p>Target <b>không có nguồn</b>, được cấp điện và kích hoạt bởi từ trường của initiator. Khi đó initiator = <b>reader</b>, target = <b>tag</b> (từ nhãn dán ít bộ nhớ tới thẻ thông minh không tiếp xúc có CPU).</p></div>
</div>
<h3>3 chế độ hoạt động</h3>
<div class="cards">
 <div class="mini a"><span class="em">📖</span><h4>Reader/Writer (R/W)</h4><p>Thiết bị là initiator chủ động, <b>đọc/ghi</b> tag bên ngoài.</p></div>
 <div class="mini b"><span class="em">🤝</span><h4>Peer-to-Peer (P2P)</h4><p>Hai thiết bị NFC trao đổi dữ liệu hai chiều.</p></div>
 <div class="mini v"><span class="em">💳</span><h4>Card Emulation (CE)</h4><p>Thiết bị <b>giả lập</b> tag/thẻ thông minh không tiếp xúc.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">R/W = Đọc thẻ · P2P = Bắt tay · CE = Làm thẻ</div></div>
<h3>NFC trong Android</h3>
<ul>
<li>Có từ <b>Android 2.3</b>; kiến trúc gần như không đổi cho đến <b>4.4</b> (thêm <b>HCE</b>).</li>
<li>Cài đặt trong <b>NfcService</b> (thuộc app hệ thống Nfc, gói <code>com.android.nfc</code>): bọc thư viện native cho từng NFC controller, thực thi kiểm soát truy cập, phát hiện/phân phối tag, điều khiển card emulation.</li>
<li>Không có API cấp thấp; dùng <b>khung hướng sự kiện</b> (đăng ký sự kiện NFC) cho cả ba chế độ.</li>
</ul>
`},

{id:'rw-p2p', icon:'🏷', title:'Reader/Writer và Peer-to-Peer', html:`
<h3>Reader/Writer</h3>
<p>App không tự đặt thiết bị vào chế độ R/W. App <b>khai báo loại tag quan tâm</b>, và <b>tag dispatch system</b> chọn app phù hợp khi phát hiện tag (dựa trên <i>công nghệ tag</i> và <i>nội dung tag</i>). Ba intent action, theo độ ưu tiên giảm dần:</p>
<div class="stepper" data-stepper>
 <div class="step"><b>ACTION_NDEF_DISCOVERED</b>Ưu tiên <b>cao nhất</b>: tag định dạng <b>NDEF</b> (NFC Data Exchange Format) và có kiểu dữ liệu được nhận ra.</div>
 <div class="step"><b>ACTION_TECH_DISCOVERED</b>Khi tag không có NDEF hoặc định dạng không có app nào xử lý; khớp theo <b>công nghệ tag</b> (qua tệp XML <code>&lt;tech-list&gt;</code>).</div>
 <div class="step"><b>ACTION_TAG_DISCOVERED</b>Catch-all khi không ai xử lý hai loại trên.</div>
</div>
<ul>
<li>Sự kiện chỉ gửi tới <b>activity</b> → không xử lý nền được nếu không có người dùng.</li>
<li>Cần quyền <code>android.permission.NFC</code> để dùng NFC controller.</li>
<li>Nhiều activity khớp → hộp thoại chọn; app đang ở foreground có thể bỏ qua bằng <code>NfcAdapter.enableForegroundDispatch()</code> để được ưu tiên.</li>
</ul>
<h3>Tag technology</h3>
<p>Thuật ngữ trừu tượng mô tả tag cụ thể, dựa trên giao thức, cấu trúc hoặc tính năng. VD tag dùng NFC-A (ISO 14443-3A) = <code>NfcA</code>; tag chứa NDEF = <code>Ndef</code>. Activity dùng TECH_DISCOVERED phải có XML liệt kê công nghệ; <b>khớp khi một tech-list là tập con</b> công nghệ của tag. Có thể khai báo nhiều tech-list độc lập:</p>
<pre>&lt;tech-list&gt; &lt;tech&gt;android.nfc.tech.IsoDep&lt;/tech&gt; &lt;tech&gt;android.nfc.tech.NfcA&lt;/tech&gt; &lt;/tech-list&gt;   <span class="c">← thẻ NXP ISO-DEP + NFC-A</span>
&lt;tech-list&gt; &lt;tech&gt;android.nfc.tech.NfcF&lt;/tech&gt; &lt;/tech-list&gt;                                        <span class="c">← thẻ Felica (NFC-F)</span></pre>
<h3>Đọc tag</h3>
<pre>Tag tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
IsoDep isoDep = IsoDep.get(tag);      <span class="c">// null nếu tag không hỗ trợ công nghệ đó</span>
isoDep.connect();
byte[] response = isoDep.transceive(command);</pre>
<p>Tag NDEF còn có <code>EXTRA_NDEF_MESSAGES</code>.</p>
<h3>Reader mode (Android 4.4)</h3>
<p>Cách lấy <code>Tag</code> sống <b>không qua intent</b>: khi activity ở foreground, <b>mọi chế độ khác của NFC controller (P2P, card emulation) bị tắt</b> – hữu ích khi quét thiết bị NFC chủ động như một Android khác chạy HCE (có thể kích hoạt P2P và cướp quyền điều khiển). <code>enableReaderMode()</code> khi vào foreground, <code>disableReaderMode()</code> khi rời; nhận tag qua <code>onTagDiscovered(Tag)</code>.</p>
<h3>Peer-to-Peer</h3>
<ul>
<li>Hạn chế: dùng <b>NDEF push</b> (độc quyền) và <b>SNEP</b> (chuẩn); trao đổi <b>một NDEF message</b> với thiết bị hỗ trợ giao thức. Thường dùng giữa hai Android: <b>Android Beam</b>.</li>
<li>Dữ liệu lớn (ảnh, video) không vừa NDEF: tạo <b>kết nối Bluetooth tạm</b> – gọi là <b>NFC handover</b> (Android 4.1).</li>
<li>Bật bằng <code>setNdefPushMessage()</code> hoặc <code>setNdefPushMessageCallback()</code>.</li>
</ul>
`},

{id:'se', icon:'🔐', title:'Secure Element (SE) và các dạng hiện diện', html:`
<p>Chế độ <b>Card Emulation</b>: thiết bị nhận lệnh qua NFC, xử lý và trả lời cũng qua NFC. Thành phần xử lý có thể là <b>Secure Element phần cứng</b> nối với NFC controller, hoặc <b>ứng dụng Android</b> (HCE).</p>
<h3>Secure Element là gì?</h3>
<p><b>SE</b> là chip thẻ thông minh <b>chống giả mạo (tamper-resistant)</b> chạy <b>applet/cardlet</b> với mức an toàn và cô lập nhất định. Smart card = máy tính tối giản trên một chip: CPU, ROM, EEPROM, RAM, cổng I/O; thẻ mới có cả co-processor mật mã (AES, RSA). OS nhiều ứng dụng dùng bảo vệ bộ nhớ để dữ liệu mỗi ứng dụng chỉ riêng nó; cài đặt và (tùy chọn) truy cập được kiểm soát bằng <b>khóa mật mã</b> cho từng thao tác.</p>
<div class="analogy">SE giống <b>két sắt chống phá trong ví điện tử</b>: ngay cả khi điện thoại bị chiếm quyền (root), kẻ tấn công vẫn không mở được két nếu không có khóa quản lý.</div>
<ul>
<li>Ứng dụng: thanh toán không tiếp xúc (động lực chính), vé giao thông, thẻ ra vào, thẻ khách hàng thân thiết, lưu thông tin xác thực VPN, bộ sinh OTP, lưu trữ khóa, kiểm tra giấy phép…</li>
<li>SE trong thiết bị có thể kiểm soát bởi HĐH (đòi PIN, passphrase, chữ ký mã) và có thể thay nhiều thẻ bằng một thiết bị.</li>
</ul>
<h3>Các hình thức SE trên di động</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="UICC (SIM)" data-desc="<p>Hầu hết thiết bị có. Thẻ thông minh chạy ứng dụng, nhưng truyền thống <b>chỉ nối với baseband processor</b> (không nối application processor chạy Android) → Android không truy cập trực tiếp mà qua <b>RIL</b>.</p><ul><li>Giao tiếp bằng lệnh AT mở rộng (<code>AT+CCHO, AT+CCHC, AT+CGLA</code>, 3GPP TS 27.007) – telephony manager hiện tại <b>không hỗ trợ</b>. Dự án <b>SEEK for Android</b> vá để dùng qua <b>SmartCard API</b> (cài đặt tham chiếu của <b>Open Mobile API</b>).</li><li>RIL gồm phần mở (<code>rild</code>) và thư viện độc quyền; nhà sản xuất tự quyết định thêm hỗ trợ.</li><li>SmartCard API chưa vào Android gốc (thư mục SmartCardService trong AOSP rỗng), nhưng máy của các hãng lớn (vd Samsung) có kèm.</li><li><b>SWP</b> (Single Wire Protocol): nối UICC với NFC controller để lộ UICC cho đầu đọc ngoài khi card emulation. Nexus 5 (BCM20793M) hỗ trợ SWP nhưng tắt mặc định.</li></ul>"><span>UICC (SIM)</span><small>nối baseband</small></button>
  <button class="layer" data-c="2" data-title="microSD SE (ASSD)" data-desc="<p><b>Advanced Security SD card</b>: thẻ SD có chip SE. Truy cập qua SmartCard API trên Android đã vá SEEK. Máy có khe SD ngày càng hiếm, và Android mới coi thẻ SD là bộ nhớ phụ chỉ truy cập qua API cấp cao hạn chế → khó thành xu hướng.</p>"><span>microSD (ASSD)</span><small>hiếm dần</small></button>
  <button class="layer" data-c="3" data-title="Embedded SE (eSE)" data-desc="<p>Không phải thiết bị riêng, thường <b>tích hợp cùng NFC controller</b> trong một vỏ. Ví dụ NXP <b>PN65N</b> = PN544 (NFC) + P5CN072 (SmartMX).</p><ul><li>Nexus S (đầu tiên có eSE và NFC), Galaxy Nexus, Nexus 4 có eSE; <b>Nexus 5 và Nexus 7 (2013) bỏ eSE</b> chuyển sang HCE.</li><li>Nối NFC controller qua <b>S2C</b> (SignalIn/SignalOut, chuẩn <b>NFC-WI</b>). 3 chế độ: <b>off</b> · <b>wired</b> (HĐH thấy SE như thẻ không tiếp xúc cắm vào đầu đọc) · <b>virtual</b> (đầu đọc ngoài thấy điện thoại như thẻ). Loại trừ nhau.</li></ul>"><span>Embedded SE</span><small>cùng chip NFC</small></button>
  <button class="layer" data-c="4" data-title="HCE – không có SE phần cứng" data-desc="<p>Lệnh nhận bởi NFC controller được giao cho <b>application processor</b> và xử lý bởi ứng dụng Android thường (host-based card emulation). Chi tiết ở các phần sau.</p>"><span>HCE (phần mềm)</span><small>Android 4.4</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một dạng SE.</p></div>
</div>
<div class="callout c-info"><b>Tại sao SE khó triển khai rộng?</b>Khóa quản lý để cài ứng dụng trên SE thường do <b>một bên duy nhất</b> (nhà sản xuất hoặc nhà mạng) nắm → phân phối ứng dụng SE rất khó.</div>
`},

{id:'ese-access', icon:'🔓', title:'Truy cập embedded SE: whitelist & nfc_extras', html:`
<p>Không có API SDK công khai để nói chuyện với eSE, nhưng Android có thư viện tùy chọn <b><code>nfc_extras</code></b> với giao diện ổn định.</p>
<h3>Cấp quyền truy cập eSE</h3>
<ul>
<li>Card emulation và API eSE nội bộ ra đời ở <b>2.3.4</b> (cùng Google Wallet). API ẩn khỏi SDK, cần quyền signature (<code>WRITE_SECURE_SETTINGS</code> hoặc <code>NFCEE_ADMIN</code>) ở 2.3.x và 4.0 đầu → chỉ bên nắm khóa nền tảng mới phát hành được app dùng eSE.</li>
<li><b>Android 4.0.4 (API 15)</b> bỏ quyền signature, thay bằng <b>whitelist chứng chỉ ký ở mức HĐH</b>: không cần ký app bằng khóa hãng, dễ phân phối hơn; whitelist là tệp nên cập nhật được bằng OTA. Vẫn cần sửa tệp lõi HĐH nên cần hãng hợp tác.</li>
<li>Thực hiện bởi lớp <code>NfceeAccessControl</code>, thi hành bởi <code>NfcService</code>; đọc whitelist từ <code>/etc/nfcee_access.xml</code>: danh sách chứng chỉ ký + (tùy chọn) tên gói. Không chỉ định gói = mọi app ký bằng khóa đó; có gói = chỉ app đó.</li>
</ul>
<pre>&lt;signer android:signature="308204a830820390a003..."&gt;
  &lt;package android:name="com.example.nfc"&gt;&lt;/package&gt;
&lt;/signer&gt;</pre>
<p>Máy thật thường chỉ có chứng chỉ của <b>Google Wallet</b> (từ 4.4 Wallet dùng HCE thay vì eSE). Sau khi được whitelist, chỉ cần quyền <code>NFC</code> chuẩn; nhưng phải khai báo <code>nfc_extras</code> trong manifest vì thư viện tùy chọn không nạp mặc định:</p>
<pre>&lt;uses-permission android:name="android.permission.NFC" /&gt;
&lt;uses-library android:name="com.android.nfc_extras" android:required="true" /&gt;</pre>
<h3>NfcExecutionEnvironment API</h3>
<p>Không dựa trên API smart card chuẩn (JSR 177, Open Mobile API) mà rất cơ bản:</p>
<pre>NfcAdapterExtras extras = NfcAdapterExtras.get(NfcAdapter.getDefaultAdapter(ctx));
NfcExecutionEnvironment ee = extras.getEmbeddedExecutionEnvironment();
ee.open();
byte[] resp = ee.transceive(new byte[]{0x00,(byte)0xA4,0x04,0x00,0x00});   <span class="c">// SELECT rỗng</span>
ee.close();</pre>
<p>Chỉ 3 phương thức: <code>open()</code>, <code>close()</code>, <code>transceive(byte[])</code>.</p>
<h3>Broadcast liên quan eSE</h3>
<p>App SE cần biết sự kiện NFC/eSE (phát hiện trường RF, chọn applet…). Lộ các sự kiện này cho app độc hại có thể rò thông tin hoặc gây từ chối dịch vụ → giới hạn cho app tin cậy. Dùng quyền signature thì chỉ app ký platform key nhận được → hạn chế quá. Vì vậy cũng dùng <b>whitelist chứng chỉ</b> (nfcee_access.xml): app nào có trong tệp thì nhận được broadcast.</p>
<table>
<tr><th>Action</th><th>Ý nghĩa</th></tr>
<tr><td><code>RF_FIELD_ON/OFF_DETECTED</code></td><td>Phát hiện bật/tắt trường RF</td></tr>
<tr><td><code>APDU_RECEIVED</code></td><td><b>Không cài đặt</b> – NFC controller định tuyến APDU thẳng tới eSE nên OS không thấy</td></tr>
<tr><td><code>AID_SELECTED</code></td><td>Applet được chọn qua NFC</td></tr>
<tr><td><code>MIFARE_ACCESS_DETECTED</code></td><td>Truy cập sector MIFARE</td></tr>
<tr><td><code>EMV_CARD_REMOVAL</code></td><td>Thẻ EMV rời khỏi trường</td></tr>
<tr><td><code>INTERNAL_TARGET_DESELECTED</code></td><td>Card emulation bị tắt</td></tr>
<tr><td><code>MASTER_CLEAR_NOTIFICATION</code></td><td>Nội dung eSE bị xóa (Google Wallet cũ cho xóa từ xa khi mất máy)</td></tr>
</table>
`},

{id:'smartcard', icon:'💳', title:'Môi trường thực thi SE: Java Card, GlobalPlatform, APDU', html:`
<p>SE về bản chất là thẻ thông minh trong vỏ khác nên áp dụng các chuẩn của thẻ thông minh.</p>
<ul>
<li>Thẻ truyền thống hướng <b>hệ tệp</b> (OS chủ yếu xử lý truy cập tệp + quyền). Thẻ mới có <b>máy ảo</b> trên OS gốc chạy ứng dụng “độc lập nền tảng” là <b>applet</b>; phổ biến nhất: <b>Java Card Runtime Environment (JCRE)</b> – applet viết bằng bản Java <b>rút gọn</b> với thư viện nhỏ (I/O, phân tích thông điệp, mật mã). JCRE không quy định cách <b>nạp, khởi tạo, xóa applet</b> trên thẻ thật.</li>
</ul>
<h3>GlobalPlatform (GP)</h3>
<p>Dịch vụ thanh toán cần kiểm soát việc nạp/khởi tạo ứng dụng (<b>personalization</b>) – chỉ bên được phép mới đổi trạng thái thẻ. Visa phát triển <b>Open Platform</b>, nay là <b>GlobalPlatform Card Specification</b>:</p>
<ul>
<li>Mỗi thẻ GP có <b>Issuer Security Domain (ISD)</b> bắt buộc (còn gọi <b>Card Manager</b>) cung cấp giao diện quản lý vòng đời thẻ + ứng dụng.</li>
<li>Thao tác ISD cần <b>xác thực bằng khóa mật mã lưu trên thẻ</b> → chỉ bên biết khóa mới đổi được trạng thái thẻ (<code>OP_READY, INITIALIZED, SECURED, CARD_LOCKED, TERMINATED</code>) hoặc quản lý applet.</li>
<li><b>Secure Channel</b>: giao thức liên lạc an toàn (xác thực, bí mật, toàn vẹn) với thẻ.</li>
</ul>
<h3>APDU</h3>
<p>Thông điệp trao đổi qua <code>transceive()</code> thực tế là <b>APDU</b> (ISO/IEC 7816-4). Đầu đọc (CAD) gửi <b>command APDU</b>:</p>
<div class="flow"><div class="node hl">CLA</div><div class="node hl">INS</div><div class="node hl">P1</div><div class="node hl">P2</div><span class="arr">+</span><div class="node">Lc<br><small>(tùy chọn)</small></div><div class="node">Data<br><small>(tùy chọn)</small></div><div class="node">Le<br><small>(tùy chọn)</small></div></div>
<p>Thẻ trả <b>response APDU</b>: dữ liệu tùy chọn + <b>status word</b> bắt buộc (SW1 SW2, 2 byte; <code>9000</code> = thành công). Dữ liệu lệnh truyền thống tối đa <b>255 byte</b> (tổng 261), phản hồi 256 (tổng 258); thẻ/đầu đọc mới có <b>extended APDU</b> tới 65.536 byte nhưng không phải lúc nào cũng dùng được (tương thích).</p>
<ul>
<li>Giao thức truyền cấp thấp: <b>T=0</b> (hướng byte) và <b>T=1</b> (hướng khối) – ISO 7816-3. T=0 không gửi trực tiếp dữ liệu phản hồi, chỉ báo số byte có sẵn → cần lệnh <code>GET RESPONSE</code>.</li>
<li>Thẻ không tiếp xúc dùng cùng mô hình APDU trên giao thức truyền không dây <b>ISO/IEC 14443-4</b> (giống T=1).</li>
</ul>
<h3>🔎 Thử giải mã APDU</h3>
<div class="sim" data-apdudec></div>
<h3>Hỏi eSE: AID và SELECT</h3>
<ul>
<li>eSE của Galaxy Nexus là chip NXP <b>SmartMX</b>, OS tương thích Java Card, ISD chuẩn GP. ISD đòi xác thực cho hầu hết thao tác; sai nhiều lần (thường <b>10</b>) thì <b>khóa ISD</b> (không cài/xóa applet được) → không thể brute-force khóa.</li>
<li>Mỗi ứng dụng có <b>AID (Application Identifier)</b> = <b>RID 5 byte</b> + <b>PIX</b> tối đa 11 byte → dài 5–16 byte. Muốn gửi lệnh cho applet phải <b>SELECT</b> (CLA=00, INS=A4) kèm AID.</li>
<li><b>SELECT rỗng</b> <code>00 A4 04 00 00</code> chọn ISD và trả <b>FCI</b> (File Control Information) – định dạng <b>TLV</b> (tag-length-value, lồng nhau) mô tả thẻ: AID của ISD (vd <code>A0 00 00 00 03 00 00 00</code>, RID của Visa), phiên bản GP (2.1.1), Secure Channel (SC02)… Lệnh GP khác không cần xác thực: <code>GET DATA</code>.</li>
</ul>
`},

{id:'uicc', icon:'📶', title:'UICC làm Secure Element & Open Mobile API', html:`
<h3>SIM và UICC</h3>
<ul>
<li><b>SIM</b> = Subscriber Identity Module: thẻ thông minh lưu định danh thuê bao và khóa dùng để nhận dạng/xác thực thiết bị với mạng di động (GSM, mở rộng cho 3G/LTE). Tuân ISO 7816, kích thước FF, Mini (2FF), Micro (3FF), Nano (4FF, 2012).</li>
<li>Từ 3G, tách rõ: thẻ vật lý là <b>UICC</b>, và các <b>ứng dụng mạng</b> chạy trên đó (GSM, CSIM, USIM, ISIM…). Một UICC chạy nhiều ứng dụng mạng (nên gọi “universal”).</li>
</ul>
<h3>Ví dụ GSM: vì sao SIM bảo mật?</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Điện thoại gửi IMSI</b>International Mobile Subscriber Identity (gắn với SIM). Số điện thoại MSISDN dùng định tuyến, có thể đổi.</div>
 <div class="step"><b>Mạng tra khóa Ki</b>Mỗi thuê bao có khóa xác thực chung <b>Ki</b> (mạng tra theo IMSI) và tạo thách thức <b>RAND</b>, đáp án mong đợi <b>SRES</b>, khóa phiên <b>Kc</b>.</div>
 <div class="step"><b>SIM tính</b>Mạng gửi RAND; điện thoại đưa cho SIM; SIM tự tính SRES và Kc bằng Ki.</div>
 <div class="step"><b>So khớp</b>SRES khớp giá trị mong đợi → liên lạc mã hóa bằng Kc.</div>
</div>
<p>An toàn <b>chỉ phụ thuộc bí mật của Ki</b>; mọi thao tác dùng Ki ở trong SIM, không tiếp xúc điện thoại hay mạng (dù thuật toán A5/1 từng bị phá bằng phần cứng thông dụng). Trên Android việc xác thực mạng do <b>baseband</b> làm, HĐH chính không thấy.</p>
<h3>Cài đặt ứng dụng UICC</h3>
<ul>
<li>Thẻ đời đầu theo mô hình <b>hệ tệp</b>: <b>EF</b> (elementary file) và <b>DF</b> (dedicated file) đặt tên bằng ID 2 byte; “ứng dụng” = chọn ID cho DF chứa tệp (<b>ADF</b>) (GSM ở <code>7F20</code>; USIM có <code>EF_imsi, EF_keys, EF_sms</code>…).</li>
<li>Gần như mọi UICC hiện nay dựa <b>Java Card</b> + <b>GlobalPlatform</b>, ứng dụng mạng là applet giả lập cấu trúc tệp cũ để tương thích. Nạp applet: xác thực ISD rồi lệnh <code>LOAD</code> và <code>INSTALL</code>.</li>
<li><b>OTA qua SMS nhị phân</b>: nhà mạng cài applet từ xa bằng cách đóng gói APDU trong <b>SMS T-PDU</b> gửi cho UICC. Với đa số UICC đây là <b>cách duy nhất</b> nạp applet, kể cả lúc personalization. Dùng chính để cài/quản lý <b>SIM Toolkit (STK)</b> (lệnh “proactive” thực chất qua polling: menu, mở web, gửi SMS). Android có app STK, tự tắt nếu thẻ không có applet STK.</li>
</ul>
<h3>Truy cập UICC từ Android</h3>
<div class="callout c-warn"><b>Chính sách chính thức</b>“Truy cập cấp thấp tới SIM không dành cho app bên thứ ba.” Android có thể tìm/lưu danh bạ trên SIM và hỗ trợ STK nên có hỗ trợ nội bộ.</div>
<ul>
<li>Mọi chức năng mạng đi qua <b>baseband</b> ↔ <code>rild</code> ↔ thư viện RIL HAL của hãng. UICC thường chỉ nối baseband (đôi khi cả NFC controller qua SWP).</li>
<li>Trao đổi APDU trong suốt không phải lúc nào cũng có: chuẩn là lệnh AT mở rộng <code>AT+CSIM</code>, <code>AT+CGLA</code>, nhưng một số hãng dùng mở rộng độc quyền.</li>
<li><b>SEEK for Android</b>: <b>SmartCardService</b> (resource manager nối eSE, ASSD hoặc UICC) + phần mở rộng telephony để trao đổi APDU với UICC. Cần máy và bản build tương thích (nhiều máy Samsung Galaxy gần đây có).</li>
</ul>
<h3>Open Mobile API</h3>
<p>API nhỏ, thống nhất truy cập SE (kể cả UICC): <code>SEService</code> (điểm vào, kết nối bất đồng bộ tới SmartcardService) → <code>Reader</code> → <code>Session</code> → <code>Channel</code> (kênh cơ sở = kênh 0 theo ISO 7816-4 hoặc kênh logic) → <code>transmit()</code>.</p>
<pre>&lt;uses-permission android:name="org.simalliance.openmobileapi.SMARTCARD" /&gt;
&lt;uses-library android:name="org.simalliance.openmobileapi" android:required="true" /&gt;

SEService se = new SEService(ctx, callback);
Reader[] readers = se.getReaders();           <span class="c">// không có eSE → chỉ 1 Reader = UICC</span>
Session session = readers[0].openSession();
Channel ch = session.openLogicalChannel(aid);
byte[] resp = ch.transmit(command);</pre>
`},

{id:'hce', icon:'🤖', title:'Host-based Card Emulation (HCE) – Android 4.4', html:`
<p><b>HCE</b> (software card emulation): lệnh do NFC controller nhận được giao cho <b>HĐH chính</b> xử lý bởi ứng dụng Android thường thay vì applet trên SE; phản hồi gửi về đầu đọc qua NFC → app trở thành thẻ không tiếp xúc ảo.</p>
<h3>Lịch sử</h3>
<ul>
<li>Trước chính thức, HCE là tính năng thử nghiệm của <b>CyanogenMod 9.1</b> (bản vá của Doug Yeager mở khóa HCE trên NFC controller PN544). Thêm 2 tag technology <code>IsoPcdA/B</code> (PCD = Proximity Coupling Device = đầu đọc không tiếp xúc).</li>
<li>Mô hình đó <b>đảo vai</b> đối tượng Tag (đầu đọc ngoài hiện như “tag”; “lệnh” gửi đi thật ra là <i>trả lời</i>) và <b>không hướng sự kiện</b> – phải I/O chặn chờ lệnh kế tiếp.</li>
<li><b>Android 4.4</b>: khung chuẩn, hướng sự kiện.</li>
</ul>
<h3>Kiến trúc 4.4</h3>
<ul>
<li>Khác R/W và P2P (chỉ activity), HCE chạy <b>nền</b> bằng một <b>service</b> mở rộng <code>HostApduService</code>, cài <code>processCommandApdu()</code> (hoặc processCommand) và <code>onDeactivated()</code>.</li>
<li>HostApduService là lớp trung gian mỏng giao tiếp hai chiều với <code>NfcService</code> bằng <b>Messenger</b>: <code>MSG_COMMAND_APDU</code> (tới) → processCommand → trả APDU → đóng gói <code>MSG_RESPONSE_APDU</code> → NfcService → NFC controller.</li>
<li>Chưa trả lời ngay (tác vụ lâu như sinh khóa bất đối xứng): trả <code>null</code> và gửi sau bằng <code>sendResponseApdu()</code>.</li>
</ul>
<h3>Định tuyến APDU theo AID</h3>
<ol>
<li>NFC controller nhận <b>mọi</b> APDU từ đầu đọc ngoài; quyết định gửi tới SE vật lý hay HCE dựa vào <b>bảng định tuyến AID</b> (dựng từ metadata trong manifest của app SE/HCE).</li>
<li>Lệnh SELECT không được gửi thẳng SE → chuyển cho <code>NfcService</code>, rút AID, tra bảng bằng <code>RegisteredAidCache.resolveAidPrefix()</code>.</li>
<li>Tìm thấy → NfcService <b>bind</b> tới service, lấy Messenger, gửi các APDU sau đó.</li>
</ol>
<div class="sim" data-aidroute></div>
<h3>Khai báo HCE service</h3>
<pre>&lt;service android:name=".MyHostApduService"
         android:exported="true"
         android:permission="<span class="h">android.permission.BIND_NFC_SERVICE</span>"&gt;
  &lt;intent-filter&gt;
    &lt;action android:name="android.nfc.cardemulation.action.HOST_APDU_SERVICE" /&gt;
  &lt;/intent-filter&gt;
  &lt;meta-data android:name="android.nfc.cardemulation.host_apdu_service"
             android:resource="@xml/apduservice" /&gt;
&lt;/service&gt;</pre>
<ul>
<li><code>BIND_NFC_SERVICE</code> (signature) → chỉ hệ thống (thực tế là NfcService) bind được → app độc hại không chèn APDU giả.</li>
<li>Intent action để nhận diện là HCE service khi quét gói.</li>
<li>Metadata XML liệt kê AID → dựng bảng định tuyến.</li>
</ul>
<pre>&lt;host-apdu-service android:description="@string/servicedesc"
                   android:requireDeviceUnlock="false"&gt;
  &lt;aid-group android:description="@string/aiddescription" android:category="other"&gt;
    &lt;aid-filter android:name="A0000000010101"/&gt;
  &lt;/aid-group&gt;
&lt;/host-apdu-service&gt;</pre>
<ul>
<li><b><code>requireDeviceUnlock</code></b>: có kích hoạt service khi máy khóa không (màn hình vẫn phải bật để NFC hoạt động).</li>
<li><b>AID group</b>: tập AID luôn do <b>một</b> service xử lý (một AID thuộc service nào thì cả nhóm thuộc service đó). Hai service trùng AID → hộp thoại chọn; người dùng xác nhận bằng cách chạm → các lệnh sau đi tới app đó.</li>
<li><b>Category</b>: cho phép đặt handler mặc định theo <b>nhóm</b> thay vì từng AID. Hiện có <code>CATEGORY_PAYMENT</code> và <code>CATEGORY_OTHER</code>. Chỉ <b>một payment category active</b> để người dùng chọn rõ app thanh toán (<i>Settings → Tap &amp; pay</i>). Kiểm tra: <code>CardEmulation.isDefaultServiceForCategory()</code>, <code>getSelectionModeForCategory()</code>.</li>
</ul>
<h3>Định tuyến cho applet trên SE (off-host)</h3>
<p>Nếu máy có HCE <b>và</b> SE vật lý, SELECT có thể nhắm HCE hoặc applet SE. Vì Android 4.4 chuyển <b>mọi AID không có trong bảng về host</b>, AID applet của SE phải được <b>thêm tường minh</b> vào bảng của NFC controller – bằng cùng cơ chế: khai báo service (dùng như <b>nhãn</b>, không có chức năng) mở rộng <code>OffHostApduService</code> với action <code>OFF_HOST_APDU_SERVICE</code> và metadata <code>off_host_apdu_service</code>:</p>
<pre>&lt;offhost-apdu-service android:description="@string/servicedesc"&gt;
  &lt;aid-group android:description="@string/se_applets" android:category="other"&gt;
    &lt;aid-filter android:name="F0000000000001"/&gt;
    &lt;aid-filter android:name="F0000000000002"/&gt;
  &lt;/aid-group&gt;
&lt;/offhost-apdu-service&gt;</pre>
<ul>
<li>Gốc là <code>&lt;offhost-apdu-service&gt;</code>, <b>không có</b> <code>requireDeviceUnlock</code> vì lệnh đi thẳng SE, host không can thiệp được bất kể trạng thái khóa.</li>
<li>AID gửi trực tiếp cho NFC controller lưu vào bảng riêng. APDU không có trong bảng → chuyển NfcService → HCE service khớp, hoặc trả lỗi.</li>
</ul>
<h3>Viết HCE service</h3>
<pre>public byte[] processCommandApdu(byte[] cmd, Bundle extras) {
  if (!selected) {
    if (Arrays.equals(cmd, SELECT_CMD)) { selected = true; return toBytes(SW_SUCCESS); }
    ...
  }
  if (cmd[OFFSET_CLA] != MY_CLA) return toBytes(SW_CLA_NOT_SUPPORTED);   <span class="c">// 6E00</span>
  switch (cmd[OFFSET_INS]) {
    case INS_CMD1: ...; return toBytes(SW_SUCCESS);                       <span class="c">// 9000</span>
    case INS_CMD2: /* chạy worker thread */ return null;                  <span class="c">// trả sau bằng sendResponseApdu()</span>
    default: return toBytes(SW_INS_NOT_SUPPORTED);                        <span class="c">// 6D00</span>
  }
}
public void onDeactivated(int reason) { selected = false; }              <span class="c">// dọn dẹp</span></pre>
<p>Mô hình lập trình rất giống <b>applet Java Card</b>: phân tích command APDU, trả response APDU. Nhưng HCE service là app Android thường nên <b>không nằm trong môi trường bị ràng buộc</b> và dùng được mọi tính năng Android → dễ cài chức năng phức tạp nhưng <b>ảnh hưởng bảo mật</b>.</p>
`},

{id:'hce-sec', icon:'⚖️', title:'Bảo mật HCE so với Secure Element', html:`
<h3>Android bảo vệ HCE thế nào?</h3>
<ul>
<li>Mọi app đều khai báo được HCE service; hệ thống đảm bảo app độc hại <b>không chèn được APDU</b> nhờ <code>BIND_NFC_SERVICE</code> (signature) để bind.</li>
<li><b>Sandbox</b> ngăn app khác đọc dữ liệu nhạy cảm do HCE app lưu hoặc gọi API truy cập dữ liệu (nếu API đó được bảo vệ đúng).</li>
</ul>
<div class="callout c-danger"><b>⚠ Nhưng nếu kẻ tấn công có root</b>(ví dụ khai thác lỗ hổng leo thang đặc quyền) thì có thể <b>xem và chèn APDU</b> nhắm HCE service và <b>đọc dữ liệu riêng</b>. App có thể thử phát hiện (kiểm danh tính + chứng chỉ ký của lời gọi <code>processCommandApdu()</code>) nhưng cuối cùng vẫn bị vượt qua khi có toàn quyền OS.</div>
<h3>Biện pháp giảm thiểu cho HCE</h3>
<ul>
<li><b>Mã hóa dữ liệu</b> trên đĩa, hoặc lưu khóa mật mã trong <b>system credential store</b> (chương 7).</li>
<li><b>Chuyển tiếp mọi lệnh tới máy chủ</b> qua kênh mã hóa và chỉ chuyển tiếp phản hồi, để code và dữ liệu nhạy cảm nằm ở server.</li>
<li>Nhưng các biện pháp phần mềm cuối cùng có thể bị kẻ tấn công có root vô hiệu hóa.</li>
</ul>
<h3>So sánh</h3>
<table>
<tr><th>Tiêu chí</th><th>Secure Element (phần cứng)</th><th>HCE (phần mềm)</th></tr>
<tr><td>Chống giả mạo vật lý</td><td>✅ Có (tamper-resistant)</td><td>❌ Không</td></tr>
<tr><td>Bề mặt tấn công</td><td>Nhỏ (chức năng bó hẹp)</td><td>Lớn (cả HĐH Android)</td></tr>
<tr><td>Kiểm soát cài applet</td><td>Rất chặt (khóa ISD của một bên)</td><td>Ai cũng phát hành được app</td></tr>
<tr><td>Phân phối ứng dụng</td><td>Khó (phải có khóa quản lý của hãng/nhà mạng)</td><td>Dễ (như app thường)</td></tr>
<tr><td>Khi HĐH bị root</td><td>Vẫn bảo vệ được dữ liệu</td><td>Có thể bị lộ</td></tr>
<tr><td>Phù hợp</td><td>Thanh toán, khóa nhạy cảm</td><td>Thẻ ra vào, khách hàng thân thiết, dùng kèm server</td></tr>
</table>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">SE = Két phần cứng · HCE = Khóa phần mềm</div>SE bảo vệ ngay cả khi OS bị vượt qua; HCE dựa hoàn toàn vào OS để thực thi bảo mật.</div>
<div class="callout c-modern"><b>Android hiện đại</b>Google Pay/HCE ngày nay thường dùng <b>tokenization</b> (token thay số thẻ thật) cùng khóa lưu trong phần cứng bảo mật (TEE/StrongBox) để bù lại điểm yếu của HCE; đó là bổ sung ngoài sách.</div>
`}

],

cards: [
 {f:'NFC là gì? Tần số và tầm hoạt động?',b:'Near Field Communication: liên lạc vô tuyến gần (≤ ~10 cm) trên nền RFID, <b>13,56 MHz</b>, tốc độ 106/212/424 kbps; là tập các chuẩn.'},
 {f:'Active vs passive mode?',b:'Active: cả initiator và target có nguồn và đều phát sóng. Passive: target không nguồn, được từ trường initiator cấp điện (initiator = reader, target = tag).'},
 {f:'3 chế độ hoạt động NFC?',b:'<b>Reader/Writer</b> (đọc/ghi tag), <b>Peer-to-Peer</b> (trao đổi hai chiều), <b>Card Emulation</b> (giả lập thẻ/tag).'},
 {f:'NFC có trong Android từ bản nào? HCE?',b:'NFC từ <b>2.3</b>; HCE từ <b>4.4</b>.'},
 {f:'NfcService là gì?',b:'Dịch vụ hệ thống trong app Nfc (<code>com.android.nfc</code>): bọc thư viện native cho NFC controller, kiểm soát truy cập, phát hiện/phân phối tag, điều khiển card emulation.'},
 {f:'3 intent action của tag dispatch theo thứ tự ưu tiên?',b:'<code>ACTION_NDEF_DISCOVERED</code> (cao nhất) → <code>ACTION_TECH_DISCOVERED</code> → <code>ACTION_TAG_DISCOVERED</code>.'},
 {f:'Sự kiện tag chỉ gửi tới thành phần nào? Quyền cần?',b:'Chỉ <b>activity</b> (không nền). Quyền <code>android.permission.NFC</code>.'},
 {f:'Tag technology và tech-list?',b:'Công nghệ mô tả tag (NfcA, NfcF, IsoDep, Ndef…). Activity khai báo tech-list trong XML; khớp khi tech-list là <b>tập con</b> công nghệ của tag; nhiều tech-list độc lập.'},
 {f:'enableForegroundDispatch() làm gì?',b:'App ở foreground được ưu tiên nhận intent NFC, bỏ qua hộp thoại chọn.'},
 {f:'Reader mode (4.4) khác gì?',b:'<code>enableReaderMode()</code>: nhận <code>Tag</code> sống qua <code>onTagDiscovered()</code>, khi activity ở foreground <b>mọi chế độ khác (P2P, CE) bị tắt</b> – tránh bị cướp quyền khi quét thiết bị HCE khác.'},
 {f:'P2P của Android và Android Beam?',b:'NDEF push + SNEP, một NDEF message. Dữ liệu lớn: NFC handover qua Bluetooth tạm (4.1). Bật bằng <code>setNdefPushMessage()</code>.'},
 {f:'Secure Element là gì?',b:'Chip thẻ thông minh chống giả mạo chạy applet với cô lập và bảo mật cao (CPU, ROM, EEPROM, RAM, I/O, co-processor mật mã).'},
 {f:'Các dạng SE trên di động?',b:'<b>UICC</b> (SIM), <b>microSD ASSD</b>, <b>embedded SE</b> (cùng NFC controller, vd PN65N), và (từ 4.4) HCE không cần SE phần cứng.'},
 {f:'Vì sao Android không truy cập UICC trực tiếp?',b:'UICC thường chỉ nối <b>baseband</b>; truy cập qua RIL (rild + thư viện độc quyền); cần AT command mở rộng hoặc mở rộng hãng; Android chính sách cấm app thứ ba truy cập cấp thấp.'},
 {f:'SWP là gì?',b:'Single Wire Protocol: nối UICC với NFC controller để lộ UICC cho đầu đọc ngoài khi card emulation. Nexus 5 hỗ trợ nhưng tắt mặc định.'},
 {f:'eSE có 3 chế độ nào?',b:'<b>off</b> · <b>wired</b> (HĐH thấy SE như thẻ cắm vào đầu đọc) · <b>virtual</b> (đầu đọc ngoài thấy điện thoại như thẻ); loại trừ nhau. Nối qua S2C/NFC-WI.'},
 {f:'Thiết bị Nexus nào có / không có eSE?',b:'Có: Nexus S, Galaxy Nexus, Nexus 4. Không: Nexus 5, Nexus 7 (2013) – chuyển sang HCE.'},
 {f:'Cách cấp quyền truy cập eSE thay đổi thế nào ở 4.0.4?',b:'Trước: quyền signature (WRITE_SECURE_SETTINGS/NFCEE_ADMIN). Từ 4.0.4: <b>whitelist chứng chỉ ký</b> trong <code>/etc/nfcee_access.xml</code> (NfceeAccessControl, thi hành bởi NfcService), cập nhật được bằng OTA.'},
 {f:'Dùng eSE trong app cần gì?',b:'Chứng chỉ ký (+ tên gói) có trong nfcee_access.xml, quyền NFC, và <code>&lt;uses-library com.android.nfc_extras required="true"&gt;</code>.'},
 {f:'NfcExecutionEnvironment có những phương thức nào?',b:'<code>open()</code>, <code>close()</code>, <code>transceive(byte[])</code>; lấy từ <code>NfcAdapterExtras.getEmbeddedExecutionEnvironment()</code>.'},
 {f:'Vì sao broadcast liên quan eSE cần giới hạn?',b:'Lộ sự kiện cho app độc hại có thể rò thông tin hoặc từ chối dịch vụ; dùng whitelist chứng chỉ thay vì signature để không giới hạn app của hãng. Vd RF_FIELD_ON_DETECTED, AID_SELECTED, MASTER_CLEAR_NOTIFICATION.'},
 {f:'APDU_RECEIVED có thật sự dùng không?',b:'Không cài đặt: NFC controller định tuyến APDU thẳng tới eSE nên OS không thấy.'},
 {f:'Java Card / applet / JCRE?',b:'Java Card: môi trường chạy applet viết bằng Java rút gọn trên thẻ thông minh; JCRE là runtime tham chiếu. JCRE không quy định cách nạp/xóa applet.'},
 {f:'GlobalPlatform và ISD?',b:'Chuẩn quản lý applet an toàn (xuất phát từ Visa Open Platform). ISD (Card Manager) bắt buộc; thao tác cần xác thực bằng khóa trên thẻ; trạng thái OP_READY/INITIALIZED/SECURED/CARD_LOCKED/TERMINATED; Secure Channel.'},
 {f:'Cấu trúc command APDU?',b:'Header 4 byte <b>CLA INS P1 P2</b> + tùy chọn <b>Lc</b> (độ dài dữ liệu) + dữ liệu + <b>Le</b> (số byte mong đợi). Response: dữ liệu tùy chọn + <b>SW1 SW2</b>.'},
 {f:'Status word thường gặp?',b:'<code>9000</code> thành công · <code>6E00</code> CLA không hỗ trợ · <code>6D00</code> INS không hỗ trợ.'},
 {f:'Giới hạn kích thước APDU và T=0 vs T=1?',b:'Lệnh ≤ 255 byte dữ liệu, phản hồi ≤ 256 (extended tới 65.536). T=0 hướng byte (cần GET RESPONSE), T=1 hướng khối. Không tiếp xúc: ISO 14443-4 giống T=1.'},
 {f:'AID là gì? Cấu trúc?',b:'Application Identifier 5–16 byte = <b>RID</b> 5 byte + <b>PIX</b> tối đa 11 byte. Dùng SELECT (00 A4 04 00) để chọn ứng dụng.'},
 {f:'SELECT rỗng làm gì?',b:'<code>00 A4 04 00 00</code>: chọn ISD và trả FCI (TLV) mô tả thẻ: AID ISD, phiên bản GP, secure channel…'},
 {f:'Vì sao không thể brute-force khóa ISD?',b:'Sai nhiều lần (thường 10) thì ISD bị khóa, không cài/xóa applet được nữa.'},
 {f:'UICC vs SIM? Ứng dụng mạng?',b:'SIM là tên gốc (thẻ lưu định danh thuê bao + khóa). Từ 3G: thẻ vật lý = UICC, chạy nhiều ứng dụng mạng (GSM, CSIM, USIM, ISIM).'},
 {f:'Bảo mật xác thực GSM của SIM dựa vào đâu?',b:'Chỉ bí mật <b>Ki</b>, nằm trong SIM; SIM tính SRES và Kc từ RAND; Ki không bao giờ tiếp xúc điện thoại hay mạng.'},
 {f:'OTA qua SMS nhị phân của SIM?',b:'Nhà mạng đóng gói APDU trong SMS T-PDU để cài/quản lý applet (kể cả SIM Toolkit). Với đa số UICC là cách duy nhất nạp applet.'},
 {f:'Open Mobile API gồm lớp nào?',b:'<code>SEService</code> → <code>Reader</code> → <code>Session</code> → <code>Channel</code> (<code>transmit()</code>). Cần quyền <code>org.simalliance.openmobileapi.SMARTCARD</code> và <code>uses-library</code>.'},
 {f:'SEEK for Android là gì?',b:'Dự án cung cấp SmartCardService (resource manager cho eSE/ASSD/UICC) và mở rộng telephony để trao đổi APDU với UICC – cần máy/bản build tương thích.'},
 {f:'HCE là gì? Khác R/W, P2P ở đâu?',b:'Lệnh từ NFC controller được xử lý bởi app Android (service <code>HostApduService</code>) thay vì SE. R/W và P2P chỉ activity; HCE chạy <b>nền</b>.'},
 {f:'Luồng xử lý APDU của HostApduService?',b:'NfcService gửi <code>MSG_COMMAND_APDU</code> (Messenger) → <code>processCommandApdu()</code> → trả APDU → <code>MSG_RESPONSE_APDU</code> → NFC controller. Chưa có kết quả: trả null, gửi sau bằng <code>sendResponseApdu()</code>.'},
 {f:'Định tuyến APDU: ai quyết định?',b:'NFC controller dùng bảng AID; SELECT không đi SE thì chuyển NfcService → <code>RegisteredAidCache.resolveAidPrefix()</code> → bind HCE service.'},
 {f:'Quyền bảo vệ HCE service là gì và để làm gì?',b:'<code>BIND_NFC_SERVICE</code> (signature) – chỉ hệ thống (NfcService) bind được → app khác không chèn APDU.'},
 {f:'requireDeviceUnlock và aid-group?',b:'requireDeviceUnlock: có kích hoạt khi máy khóa không (màn hình phải bật). aid-group: nhóm AID luôn do một service xử lý; AID trùng giữa các service → hộp thoại chọn.'},
 {f:'Category payment vs other?',b:'Chỉ hai category: PAYMENT và OTHER. Chỉ một app thanh toán mặc định (Settings → Tap & pay).'},
 {f:'Off-host APDU service dùng làm gì?',b:'Đăng ký AID của applet trên SE vào bảng NFC controller (vì 4.4 chuyển AID lạ về host). Gốc <code>&lt;offhost-apdu-service&gt;</code>, không có requireDeviceUnlock; service chỉ là nhãn.'},
 {f:'Rủi ro bảo mật của HCE?',b:'Dựa hoàn toàn vào OS: kẻ có root xem/chèn APDU và đọc dữ liệu riêng. Giảm thiểu: mã hóa dữ liệu, khóa trong credential store, chuyển tiếp lệnh về server – nhưng đều có thể bị vượt qua.'},
 {f:'Vì sao SE bảo mật hơn HCE?',b:'Chống giả mạo vật lý, bề mặt tấn công nhỏ (chức năng bó hẹp), kiểm soát chặt cài applet – bảo vệ ngay cả khi HĐH bị vượt qua. Đổi lại phân phối khó.'}
],

quiz: [
 {q:'NFC hoạt động ở tần số nào?',o:['2,4 GHz','13,56 MHz','900 MHz','5 GHz'],a:1,e:'Xây trên RFID, thường ≤ 10 cm.'},
 {q:'Ở chế độ passive, target (tag):',o:['Có nguồn riêng','Được cấp điện bởi từ trường của initiator','Luôn là điện thoại','Chỉ gửi dữ liệu'],a:1,e:'Initiator lúc đó gọi là reader.'},
 {q:'Chế độ NFC nào cho phép điện thoại giả lập thẻ thanh toán?',o:['Reader/Writer','Peer-to-peer','Card Emulation','Beam'],a:2,e:'CE có thể do SE phần cứng hoặc HCE.'},
 {q:'Thứ tự ưu tiên giảm dần của tag dispatch:',o:['TAG → TECH → NDEF','NDEF → TECH → TAG','TECH → NDEF → TAG','NDEF → TAG → TECH'],a:1,e:'NDEF_DISCOVERED cao nhất; TAG_DISCOVERED là catch-all.'},
 {q:'Sự kiện tag dispatch được gửi tới:',o:['Service nền','Activity (cần người dùng)','Broadcast receiver','Content provider'],a:1,e:'Không xử lý nền được nếu không có người dùng.'},
 {q:'Một activity khớp tag qua TECH_DISCOVERED khi:',o:['Mọi tech-list trùng hoàn toàn','Một tech-list của nó là tập con các công nghệ tag hỗ trợ','Tag có NDEF','Có quyền NFC'],a:1,e:'Có thể khai báo nhiều tech-list.'},
 {q:'Reader mode (4.4) khác tag dispatch ở điểm:',o:['Nhận Tag qua intent','Nhận Tag trực tiếp qua callback và tắt P2P/CE khi activity ở foreground','Chạy nền','Cần root'],a:1,e:'Tránh bị P2P cướp quyền khi quét thiết bị HCE.'},
 {q:'NFC handover (Android 4.1) dùng để:',o:['Tăng tốc NFC','Truyền dữ liệu lớn qua kết nối Bluetooth tạm khi bắt đầu bằng NFC','Mã hóa thẻ','Đọc tag NDEF'],a:1,e:'Android Beam truyền ảnh/video.'},
 {q:'Vì sao UICC không truy cập trực tiếp từ Android được?',o:['UICC bị mã hóa','UICC thường chỉ nối baseband, truy cập qua RIL','UICC không phải thẻ thông minh','Do SELinux'],a:1,e:'Cần AT command mở rộng hoặc mở rộng độc quyền.'},
 {q:'Embedded SE nối với NFC controller bằng:',o:['USB','S2C (NFC-WI)','SPI','HDMI'],a:1,e:'3 chế độ: off, wired, virtual.'},
 {q:'Ở chế độ virtual của eSE:',o:['HĐH thấy SE như thẻ cắm vào đầu đọc','Đầu đọc ngoài thấy điện thoại như một thẻ không tiếp xúc','SE tắt','SE chỉ đọc'],a:1,e:'Wired mới là HĐH thấy SE như thẻ.'},
 {q:'Từ Android 4.0.4, truy cập eSE được kiểm soát bằng:',o:['Quyền signature NFCEE_ADMIN','Whitelist chứng chỉ ký trong /etc/nfcee_access.xml','Mật khẩu','Root'],a:1,e:'Dễ phân phối hơn, cập nhật được bằng OTA.'},
 {q:'Ngoài whitelist, app muốn dùng eSE cần khai báo gì?',o:['uses-library com.android.nfc_extras required=true và quyền NFC','Quyền root','Quyền CAMERA','Không gì'],a:0,e:'Thư viện nfc_extras là tùy chọn, không nạp mặc định.'},
 {q:'Vì sao broadcast liên quan eSE dùng whitelist chứng chỉ thay vì quyền signature?',o:['Cho nhanh','Để app không thuộc hãng nhưng được whitelist vẫn nhận được','Vì không hỗ trợ quyền','Để mã hóa'],a:1,e:'Quyền signature giới hạn chỉ app ký platform key.'},
 {q:'Một command APDU gồm:',o:['Chỉ dữ liệu','Header CLA INS P1 P2 + tùy chọn Lc, Data, Le','Chỉ SW1 SW2','JSON'],a:1,e:'Response: dữ liệu + SW1 SW2.'},
 {q:'Status word 9000 nghĩa là:',o:['Lỗi CLA','Thành công','INS không hỗ trợ','Thẻ khóa'],a:1,e:'6E00: CLA; 6D00: INS không hỗ trợ.'},
 {q:'Lệnh SELECT có header:',o:['00 B0','00 A4','80 01','00 CA'],a:1,e:'CLA=00, INS=A4; dùng AID chọn ứng dụng.'},
 {q:'AID gồm:',o:['RID 5 byte + PIX tối đa 11 byte','PIN + PUK','IMSI + Ki','CLA + INS'],a:0,e:'Tổng độ dài 5–16 byte.'},
 {q:'SELECT rỗng (00 A4 04 00 00) trả về gì?',o:['Lỗi','FCI của ISD (TLV) với thông tin thẻ','PIN','Khóa Ki'],a:1,e:'Không cần xác thực.'},
 {q:'ISD trong GlobalPlatform là:',o:['Thư viện mật mã','Card Manager: giao diện quản lý vòng đời thẻ/ứng dụng, thao tác cần khóa trên thẻ','Giao thức NFC','Loại SIM'],a:1,e:'Sai nhiều lần thì khóa ISD.'},
 {q:'An toàn của xác thực GSM dựa trên:',o:['Số điện thoại','Bí mật của khóa Ki nằm trong SIM','IMEI','Mã PIN'],a:1,e:'Mọi thao tác Ki trong SIM.'},
 {q:'OTA qua SMS nhị phân của SIM dùng để:',o:['Gửi tin nhắn thường','Cài/quản lý applet (kể cả SIM Toolkit) từ xa bằng APDU đóng gói trong SMS T-PDU','Cập nhật Android','Mã hóa SIM'],a:1,e:'Với đa số UICC là cách duy nhất nạp applet.'},
 {q:'Trình tự lớp trong Open Mobile API là:',o:['SEService → Reader → Session → Channel','Channel → Session → Reader','Reader → SEService','Session → SEService'],a:0,e:'Channel.transmit() gửi APDU.'},
 {q:'HCE service khác activity R/W ở điểm:',o:['Chạy nền (service) và nhận APDU','Chỉ chạy foreground','Cần SE','Không dùng quyền'],a:0,e:'HostApduService trao đổi với NfcService bằng Messenger.'},
 {q:'Khi HCE service chưa có kết quả, processCommandApdu():',o:['Ném lỗi','Trả null và dùng sendResponseApdu() sau','Chặn luồng','Đóng kết nối'],a:1,e:'Không chặn luồng chính.'},
 {q:'Quyền bảo vệ HCE service là:',o:['BIND_NFC_SERVICE (signature)','CAMERA','INTERNET','NFC'],a:0,e:'Chỉ hệ thống bind được → app khác không chèn APDU.'},
 {q:'Hai HCE service cùng khai báo một AID thì:',o:['Service đầu tiên thắng','Hệ thống hiện hộp thoại cho người dùng chọn','Cả hai cùng xử lý','Lỗi cài đặt'],a:1,e:'Sau khi chọn, các lệnh sau đi tới app đó.'},
 {q:'Android 4.4 xử lý AID KHÔNG có trong bảng định tuyến thế nào?',o:['Bỏ qua','Gửi về host (NfcService); không có HCE khớp thì trả lỗi','Gửi tới SE','Tắt NFC'],a:1,e:'Vì vậy AID applet SE phải đăng ký tường minh (off-host).'},
 {q:'Vì sao off-host service không có requireDeviceUnlock?',o:['Quên','Lệnh đi thẳng tới SE, host không can thiệp được dù máy khóa hay không','Vì không dùng XML','Vì cần root'],a:1,e:'Service chỉ là nhãn đăng ký AID.'},
 {q:'Chỉ một payment category active nhằm:',o:['Tiết kiệm pin','Đảm bảo người dùng chọn rõ ràng app xử lý thanh toán','Tăng tốc','Bảo mật SE'],a:1,e:'Chọn ở Settings → Tap & pay.'},
 {q:'Kẻ có root có thể làm gì với HCE app?',o:['Không gì','Xem/chèn APDU và đọc dữ liệu riêng','Chỉ tắt NFC','Chỉ xóa app'],a:1,e:'Biện pháp phần mềm có thể bị vô hiệu.'},
 {q:'Ưu điểm lớn nhất của SE phần cứng so với HCE:',o:['Dễ phân phối','Chống giả mạo vật lý, bề mặt tấn công nhỏ, bảo vệ ngay cả khi HĐH bị vượt qua','Nhanh hơn','Rẻ hơn'],a:1,e:'Đổi lại khóa quản lý do một bên nắm → khó phân phối.'}
],

order: [
 {id:'o-hce',title:'Một lệnh APDU tới HCE service',intro:'Sắp xếp luồng xử lý.',
  items:['Đầu đọc ngoài gửi lệnh SELECT với AID','NFC controller tra bảng AID – không thuộc SE → chuyển cho NfcService','NfcService tra RegisteredAidCache.resolveAidPrefix() và bind tới HCE service','NfcService gửi MSG_COMMAND_APDU qua Messenger','HostApduService gọi processCommandApdu() và nhận APDU trả lời','MSG_RESPONSE_APDU → NfcService → NFC controller → đầu đọc'],
  explain:'NFC controller → NfcService → HostApduService và ngược lại.'},
 {id:'o-tag',title:'Phân phối tag NFC',intro:'Xếp theo thứ tự ưu tiên khi hệ thống tìm app xử lý tag.',
  items:['ACTION_NDEF_DISCOVERED (tag NDEF, kiểu dữ liệu được nhận ra)','ACTION_TECH_DISCOVERED (không có NDEF hoặc không ai xử lý – khớp tech-list)','ACTION_TAG_DISCOVERED (catch-all)'],
  explain:'Từ cụ thể tới chung chung.'},
 {id:'o-gsm',title:'Xác thực SIM với mạng GSM',intro:'Sắp xếp theo thứ tự.',
  items:['Điện thoại gửi yêu cầu kết nối kèm IMSI','Mạng tìm Ki theo IMSI','Mạng sinh RAND, SRES mong đợi và khóa phiên Kc','Mạng gửi RAND; điện thoại đưa cho SIM','SIM tính SRES và Kc bằng Ki','SRES khớp → liên lạc mã hóa bằng Kc'],
  explain:'Ki không bao giờ rời SIM.'}
],

classify: [
 {id:'c-se',title:'Dạng SE nào?',intro:'Gán đặc điểm.',buckets:['UICC (SIM)','microSD (ASSD)','Embedded SE','HCE'],
  items:[
   {t:'Nối baseband, truy cập qua RIL',b:0},{t:'Thẻ SD có chip SE, cần máy có khe SD',b:1},{t:'Tích hợp cùng NFC controller (PN65N)',b:2},
   {t:'Không có phần cứng SE, app Android xử lý APDU',b:3},{t:'Chế độ off/wired/virtual',b:2},{t:'Dùng SWP để lộ cho đầu đọc ngoài',b:0}],
  explain:'Mỗi dạng một cách nối và truy cập.'},
 {id:'c-hces',title:'SE hay HCE?',intro:'Đặc điểm thuộc về bên nào?',buckets:['Secure Element','HCE'],
  items:[
   {t:'Chống giả mạo vật lý',b:0},{t:'Dễ phát hành như app thường',b:1},{t:'Khóa quản lý do một bên (hãng/nhà mạng) nắm',b:0},
   {t:'Mô hình lập trình giống applet nhưng chạy trong app Android',b:1},{t:'Kẻ có root có thể chèn/xem APDU',b:1},{t:'Bề mặt tấn công nhỏ',b:0}],
  explain:'SE mạnh nhưng khó phân phối; HCE tiện nhưng yếu hơn.'},
 {id:'c-apdu',title:'Thành phần APDU nào?',intro:'Gán thành phần cho mô tả.',buckets:['CLA','INS','Le','SW1 SW2'],
  items:[
   {t:'Lớp lệnh',b:0},{t:'Mã lệnh (vd A4 = SELECT)',b:1},{t:'Số byte phản hồi mong đợi',b:2},{t:'Trạng thái trong response APDU',b:3},{t:'9000',b:3},{t:'0x80 trong ví dụ HCE (MY_CLA)',b:0}],
  explain:'Header CLA INS P1 P2; response kết thúc bằng SW.'}
],

cheat: [
 {title:'📡 NFC',html:'<div class="mnemo">R/W · P2P · CE</div><ul><li>13,56 MHz, ≤10 cm</li><li>Active / passive</li><li>NFC từ 2.3; HCE 4.4</li></ul>'},
 {title:'🏷 Tag dispatch',html:'<ul><li>NDEF → TECH → TAG</li><li>Chỉ activity; quyền NFC</li><li>Tech-list ⊂ tag</li><li>Reader mode tắt P2P/CE</li></ul>'},
 {title:'🔐 Dạng SE',html:'<ul><li>UICC (baseband, RIL, SWP)</li><li>ASSD</li><li>eSE (S2C; off/wired/virtual)</li><li>Nexus S/GN/4 có; 5 & 7 không</li></ul>'},
 {title:'🔓 Truy cập eSE',html:'<ul><li>4.0.4: whitelist nfcee_access.xml</li><li>nfc_extras + quyền NFC</li><li>NfcExecutionEnvironment: open/close/transceive</li></ul>'},
 {title:'💳 Smart card',html:'<ul><li>Java Card applet; GP + ISD</li><li>APDU: CLA INS P1 P2 [Lc Data Le] / SW</li><li>AID = RID5 + PIX≤11</li><li>SELECT rỗng → FCI</li></ul>'},
 {title:'🤖 HCE',html:'<ul><li>HostApduService (processCommandApdu)</li><li>BIND_NFC_SERVICE</li><li>AID routing; aid-group; category</li><li>OffHostApduService cho SE</li></ul>'},
 {title:'⚖️ SE vs HCE',html:'<div class="mnemo">SE = két phần cứng · HCE = khóa phần mềm</div><ul><li>Root phá HCE</li><li>SE khó phân phối</li></ul>'}
]
};
