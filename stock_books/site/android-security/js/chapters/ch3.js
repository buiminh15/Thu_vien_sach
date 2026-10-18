CH[3] = {
sections: [

{id:'apk', icon:'📦', title:'APK: “file ZIP” có chữ ký', html:`
<p><b>APK</b> (Android Package) là tệp chứa mã, tài nguyên, manifest và chữ ký. Định dạng APK mở rộng từ <b>JAR</b>, và JAR lại mở rộng từ <b>ZIP</b>. Nghĩa là bạn có thể giải nén APK bằng bất kỳ công cụ ZIP nào. MIME type: <code>application/vnd.android.package-archive</code>.</p>
<div class="analogy">APK giống <b>một chiếc vali niêm phong</b>: bên trong có đồ dùng (code, tài nguyên), danh sách đồ (manifest) và <b>tem niêm phong</b> (chữ ký) để biết vali có bị mở ra hay thay đồ không.</div>
<p><b>Bấm vào từng mục</b> để xem vai trò:</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>AndroidManifest.xml</h4><p>Khai báo tên gói, phiên bản, thành phần, quyền và metadata. Được biên dịch sang XML nhị phân.</p>">AndroidManifest.xml</button>
  <button class="chip" data-info="<h4>classes.dex</h4><p>Mã thực thi của app, ở định dạng DEX của Dalvik.</p>">classes.dex</button>
  <button class="chip" data-info="<h4>resources.arsc</h4><p>Gói toàn bộ tài nguyên đã biên dịch (chuỗi, style…).</p>">resources.arsc</button>
  <button class="chip" data-info="<h4>assets/</h4><p>Tệp thô đi kèm app, như phông chữ, nhạc.</p>">assets/</button>
  <button class="chip" data-info="<h4>lib/</h4><p>Thư viện native dùng qua JNI; mỗi kiến trúc CPU một thư mục con (armeabi, armeabi-v7a…).</p>">lib/</button>
  <button class="chip" data-info="<h4>res/</h4><p>Tài nguyên mà code tham chiếu qua lớp Resources: anim, color, drawable, layout, menu, raw, xml…</p>">res/</button>
  <button class="chip" data-info="<h4>META-INF/</h4><p>Chứa <code>MANIFEST.MF</code> (danh sách băm), <code>CERT.SF</code> (tệp chữ ký) và <code>CERT.RSA</code> (khối chữ ký + chứng chỉ). Đây là nơi lưu chữ ký mã.</p>">META-INF/</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một mục trong APK.</p></div>
</div>
`},

{id:'jar-sign', icon:'✍️', title:'Chữ ký JAR: chuỗi 3 tệp trong META-INF', html:`
<h3>Vì sao phải ký mã?</h3>
<ul><li><b>Toàn vẹn</b>: mã không bị sửa.</li><li><b>Xác thực</b>: đúng tác giả tạo ra (chỉ người có khóa ký mới tạo được chữ ký hợp lệ).</li></ul>
<div class="callout c-warn"><b>Chữ ký KHÔNG chứng minh…</b>(1) người ký đáng tin; (2) mã an toàn. Ví dụ phần mềm độc hại Flame từng được ký “hợp lệ”.</div>

<h3>Chuỗi băm của JAR signing</h3>
<svg class="dia" viewBox="0 0 640 210" role="img" aria-label="Chuỗi chữ ký JAR">
 <rect class="box" x="10" y="20" width="170" height="80" rx="10"/><text x="95" y="45" text-anchor="middle" font-weight="700">Từng tệp</text><text x="95" y="65" text-anchor="middle" class="sm">classes.dex, res/…</text>
 <rect class="blu" x="235" y="20" width="170" height="80" rx="10"/><text x="320" y="45" text-anchor="middle" font-weight="700">MANIFEST.MF</text><text x="320" y="65" text-anchor="middle" class="sm">tên tệp + băm từng tệp</text>
 <rect class="amb" x="460" y="20" width="170" height="80" rx="10"/><text x="545" y="45" text-anchor="middle" font-weight="700">CERT.SF</text><text x="545" y="65" text-anchor="middle" class="sm">băm MANIFEST + từng mục</text>
 <rect class="acc" x="460" y="130" width="170" height="70" rx="10"/><text x="545" y="155" text-anchor="middle" font-weight="700">CERT.RSA</text><text x="545" y="175" text-anchor="middle" class="sm">chữ ký trên CERT.SF + chứng chỉ</text>
 <path class="ln" d="M180 60 H235 M405 60 H460 M545 100 V130"/>
 <text x="207" y="52" text-anchor="middle" class="sm">băm</text><text x="432" y="52" text-anchor="middle" class="sm">băm</text><text x="560" y="120" class="sm">ký</text>
</svg>
<ul>
<li><b>MANIFEST.MF</b>: mỗi mục có <code>Name</code> + <code>SHA1-Digest</code> của tệp đó.</li>
<li><b>CERT.SF</b> (signature file): chứa băm của <b>toàn bộ</b> manifest (<code>SHA1-Digest-Manifest</code>) và băm của từng mục manifest.</li>
<li><b>CERT.RSA / .DSA / .EC</b> (signature block): chữ ký số trên <code>.SF</code>, định dạng <b>PKCS#7 / CMS</b>, chứa chứng chỉ ký. Là <b>chữ ký tách rời (detached)</b> – không chứa dữ liệu được ký.</li>
<li>Có thể ký nhiều lần → nhiều cặp .SF + .RSA/DSA/EC.</li>
<li>Android 4.3+ hỗ trợ băm <b>SHA-256 / SHA-512</b> (trước đó mặc định SHA-1).</li>
</ul>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Tệp → MF (băm tệp) → SF (băm MF) → RSA (ký SF)</div>Mỗi tầng “ôm” băm của tầng dưới, nên chữ ký cuối cùng bảo vệ toàn bộ chuỗi.</div>
<h3>Kiểm tra (verify) gồm 3 bước</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Xác minh khối chữ ký</b>Chữ ký trong <code>.RSA</code> khớp với nội dung <code>.SF</code> và chứng chỉ ký → <code>.SF</code> chưa bị sửa.</div>
 <div class="step"><b>So băm trong .SF với MANIFEST.MF</b>Mỗi băm mục trong <code>.SF</code> phải khớp đoạn tương ứng trong manifest.</div>
 <div class="step"><b>So băm manifest với tệp thật</b>Mỗi mục manifest phải khớp băm nội dung tệp. Có thể <i>thêm</i> tệp vào JAR đã ký mà chữ ký vẫn đúng, miễn tệp cũ không đổi.</div>
</div>
<h3>Công cụ</h3>
<table>
<tr><th>Công cụ</th><th>Dùng để</th></tr>
<tr><td><code>jarsigner</code></td><td>Ký/kiểm tra JAR/APK, cần keystore; có thể dùng smart card/HSM; Android <b>không hỗ trợ timestamp (TSA)</b>.</td></tr>
<tr><td><code>keytool -list -printcert -jarfile x.apk</code></td><td>Xem thông tin chứng chỉ người ký.</td></tr>
<tr><td><code>openssl</code></td><td>Tự kiểm băm (<code>sha1 -binary | base64</code>), đọc ASN.1, trích chứng chỉ.</td></tr>
<tr><td><code>signapk</code> (AOSP)</td><td>Ký bằng khóa PKCS#8 (.pk8) + chứng chỉ X.509 (.cer); chế độ <code>-w</code> ký cả tệp cho OTA.</td></tr>
</table>
`},

{id:'android-sign', icon:'🪪', title:'Ký mã kiểu Android: khác gì Java?', html:`
<p>Android dùng định dạng JAR + chứng chỉ X.509 nhưng <b>không dùng PKI</b>:</p>
<div class="compare">
 <div class="mini r"><h4>Các nền tảng khác (Java ME, Windows Phone…)</h4><p>Chứng chỉ ký phải do <b>CA mà nền tảng tin cậy</b> cấp. Rất khó có chứng chỉ được mọi thiết bị tin.</p></div>
 <div class="mini g"><h4>Android</h4><p><b>Không quan tâm</b> nội dung hay ai cấp chứng chỉ. Hầu hết đều <b>tự ký (self-signed)</b>, tên chủ thể tùy ý, thậm chí chứng chỉ <b>hết hạn</b> vẫn cài được. Chứng chỉ chỉ là “blob nhị phân”.</p></div>
</div>
<ul>
<li>Android không kiểm tra chuỗi tin cậy, thời hạn hay thu hồi. Chỉ <b>so sánh chứng chỉ có giống nhau không</b>.</li>
<li><b>Mọi tệp trong APK</b> phải được ký bởi <b>cùng một tập người ký</b>; không cho tệp chưa ký hay ký bởi người khác (JAR chuẩn thì cho phép).</li>
<li>Người ký tính theo từng APK (thường 1, hỗ trợ nhiều).</li>
</ul>
<div class="callout c-warn"><b>JAR không phải lựa chọn tốt nhất</b>Lớp <code>JarFile</code> khó dùng để kiểm chữ ký đúng; Android phải thêm kiểm tra riêng trong code phân tích gói. Hệ quả: bug <b>“Master Key” #8219321</b> (xem phần cài đặt).</div>
<h3>Ký tệp OTA (sign whole file)</h3>
<p><code>signapk -w</code> ký thêm <b>toàn bộ tệp</b> ZIP, vì gói OTA phải được xác thực nguyên vẹn trước khi nạp vào recovery. Chữ ký được “nhét” vào <b>phần comment của ZIP</b>: chuỗi kết thúc null + khối chữ ký + <b>bản ghi 6 byte cuối</b> (vị trí chữ ký + kích thước comment). Nhờ bản ghi cuối, verify đọc chữ ký từ cuối tệp trước; hợp lệ mới đọc phần thân (có thể hàng trăm MB).</p>
<ul>
<li>Gói OTA chứa <code>META-INF/com/android/otacert</code> (chứng chỉ PEM).</li>
<li>Chứng chỉ OTA tin cậy lưu <b>riêng</b> (thường <code>/system/etc/security/otacerts.zip</code>, chứa 1 tệp như <code>releasekey.x509.pem</code>), không dùng chung kho tin cậy thường.</li>
<li>Xác minh <b>hai lần</b>: trước khi vào recovery, và lại trong recovery trước khi áp dụng.</li>
</ul>
`},

{id:'components', icon:'🧰', title:'Các “công nhân” cài đặt gói', html:`
<h3>Cách cài đặt ứng dụng</h3>
<ul>
<li><b>Cửa hàng</b> (Google Play) – phổ biến nhất.</li>
<li><b>Sideload</b>: mở tệp APK, cần bật <b>Unknown sources</b>.</li>
<li><b><code>adb install</code></b> → gọi <code>pm install</code> (dành cho dev).</li>
<li><b>Chép trực tiếp</b> APK vào thư mục app (chỉ build engineering) → <code>AppDirObserver</code> tự phát hiện.</li>
</ul>
<h3>Vị trí lưu</h3>
<table>
<tr><th>Thư mục</th><th>Nội dung</th></tr>
<tr><td><code>/system/app/</code></td><td>App hệ thống (chỉ-đọc)</td></tr>
<tr><td><code>/system/priv-app/</code></td><td>App đặc quyền (nhận quyền signatureOrSystem)</td></tr>
<tr><td><code>/system/vendor/app/</code></td><td>App của nhà sản xuất</td></tr>
<tr><td><code>/data/app/</code></td><td>App người dùng cài</td></tr>
<tr><td><code>/data/app-private/</code></td><td>APK forward-lock kiểu cũ (&lt;4.1) và tệp tạm giải mã</td></tr>
<tr><td><code>/data/app-asec/</code></td><td>Container mã hóa .asec (forward lock 4.1+)</td></tr>
<tr><td><code>/data/app-lib/</code></td><td>Thư viện native</td></tr>
<tr><td><code>/data/dalvik-cache/</code></td><td>DEX đã tối ưu</td></tr>
<tr><td><code>/data/data/&lt;gói&gt;/</code></td><td>Dữ liệu riêng của app</td></tr>
</table>
<h3>Bấm để xem vai trò từng thành phần</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="PackageInstaller (app hệ thống)" data-desc="<p>Trình xử lý APK mặc định có giao diện: phân tích gói và hiện màn hình xác nhận quyền.</p><p>Chỉ cho cài khi bật <b>Unknown Sources</b>. “Nguồn không rõ” thực tế là <b>mọi app không phải privileged</b> (không nằm trong /system/priv-app/) yêu cầu cài, chứ không chỉ là “khác Play Store”.</p>"><span>PackageInstaller</span><small>GUI cài đặt</small></button>
  <button class="layer" data-c="2" data-title="pm command / adb install" data-desc="<p>Giao diện dòng lệnh cho package manager. <b>Không phụ thuộc</b> Unknown Sources, không có GUI, có nhiều tùy chọn kiểm thử (vd -l forward lock, --algo mã hóa…). Gọi cùng API với GUI.</p>"><span>pm</span><small>dòng lệnh</small></button>
  <button class="layer" data-c="3" data-title="PackageManagerService (PMS)" data-desc="<p>Trung tâm quản lý gói: phân tích APK, bắt đầu cài/cập nhật/gỡ, duy trì CSDL gói, quản lý quyền. Hàm tổng quát nhất: <code>installPackageWithVerificationAndEncryption()</code>.</p><p>Chạy trong tiến trình system server (UID system, <b>không phải root</b>) nên giao việc đặc quyền cho installd.</p>"><span>PackageManagerService</span><small>bộ não</small></button>
  <button class="layer" data-c="4" data-title="installd daemon" data-desc="<p>Daemon native tạo/xóa/đổi chủ thư mục app, chạy <code>dexopt</code>. Socket <code>/dev/socket/installd</code> chỉ UID system truy cập.</p><p>Không chạy root (từng chạy root ở bản cũ) mà dùng capability <b>CAP_DAC_OVERRIDE</b> và <b>CAP_CHOWN</b>.</p>"><span>installd</span><small>thư mục + dexopt</small></button>
  <button class="layer" data-c="5" data-title="MountService + vold" data-desc="<p><b>MountService</b> (system user) quản lý bộ nhớ ngoài, OBB, secure container, khởi động mã hóa thiết bị. Nhưng không đủ quyền để mount nên gửi lệnh tới <b>vold</b> (chạy root) qua socket <code>/dev/socket/vold</code> (nhóm mount – GID 1009 có trong GID phụ của system_server).</p>"><span>MountService / vold</span><small>volume, ASEC</small></button>
  <button class="layer" data-c="6" data-title="MediaContainerService" data-desc="<p>Sao chép APK tới nơi cuối cùng, <b>giải mã</b> nếu APK mã hóa, nhờ MountService tạo container nếu forward-lock. APK tải về qua DownloadManager; PMS cấp quyền tạm truy cập cho service này.</p>"><span>MediaContainerService</span><small>copy / giải mã</small></button>
  <button class="layer" data-c="1" data-title="AppDirObserver" data-desc="<p>Giám sát thư mục app bằng <b>inotify</b>. Có APK mới → quét gói (cài/cập nhật); APK bị xóa → gỡ. Mỗi thư mục theo dõi có một instance: /system/framework/, /system/app/, /system/priv-app/, /system/vendor/app/, /data/app/, /data/app-private/.</p>"><span>AppDirObserver</span><small>inotify</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một thành phần.</p></div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ phân quyền</b>PMS (system) <b>không</b> tự tạo thư mục được → nhờ <b>installd</b>. MountService (system) <b>không</b> tự mount được → nhờ <b>vold</b> (root). Mẫu chung: <i>dịch vụ Java ít quyền + daemon native có đặc quyền hẹp</i>.</div>
`},

{id:'install', icon:'⚙️', title:'Quy trình cài đặt một APK cục bộ', html:`
<p>Bấm từng bước để thấy toàn bộ quy trình (APK không mã hóa, không verification, không forward-lock):</p>
<div class="stepper" data-stepper>
 <div class="step"><b>1. Kiểm tra nguồn</b>PackageInstallerActivity kiểm app yêu cầu có tin cậy không. Nếu không và <code>INSTALL_NON_MARKET_APPS</code> = false → cảnh báo và dừng.</div>
 <div class="step"><b>2. Phân tích & xác minh gói</b>Đọc manifest và chữ ký; xác minh toàn vẹn khi trích chứng chỉ từng entry. App hệ thống chỉ kiểm manifest; app ngoài ảnh hệ thống kiểm <b>mọi entry</b>. Tính băm manifest để chống đổi APK giữa lúc bấm OK và lúc copy.</div>
 <div class="step"><b>3. Người dùng xác nhận quyền</b>Hiện hộp thoại quyền → InstallAppProgress gọi PMS <code>installPackageWithVerificationAndEncryption()</code>.</div>
 <div class="step"><b>4. PMS kiểm tra người gọi</b>Phải có <code>INSTALL_PACKAGES</code> (signature, dành cho hệ thống); trên máy đa người dùng, kiểm người dùng có được cài không; chọn nơi cài (trong/ngoài).</div>
 <div class="step"><b>5. Copy APK</b>Tạo tệp tạm <code>vmdlXXX.tmp</code> trong /data/app/; MediaContainerService sao chép. Trích thư viện native vào <code>/data/app-lib/</code>. Đổi tên theo tên gói (<code>com.example.app-1.apk</code>), đặt quyền <b>0644</b> và SELinux context.</div>
 <div class="step"><b>6. Quét gói (scanPackageLI)</b>Tạo <code>PackageSettings</code>, <b>gán UID mới</b> cho gói.</div>
 <div class="step"><b>7. Tạo thư mục dữ liệu</b>PMS gửi lệnh <code>install</code> (tên gói, UID, GID, seinfo) tới installd → tạo <code>/data/data/&lt;gói&gt;/</code> (mode <b>0751</b>), thư mục lib, symlink, đặt SELinux context và chủ sở hữu. Máy đa người dùng: thêm <code>mkuserdata</code> cho từng người dùng.</div>
 <div class="step"><b>8. Tối ưu DEX</b>installd fork <code>dexopt</code> → tạo DEX tối ưu trong <code>/data/dalvik-cache/</code> (ART: dùng <code>dex2oat</code>).</div>
 <div class="step"><b>9. Ghi packages.xml</b>Thêm mục <code>&lt;package&gt;</code> (UID, chứng chỉ, quyền, keyset…).</div>
 <div class="step"><b>10. Đăng ký thành phần & quyền</b>Quét manifest, đăng ký components và permissions; lưu CSDL; phát broadcast <code>ACTION_PACKAGE_ADDED</code>.</div>
</div>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Nguồn → Phân tích → Xác nhận → Kiểm quyền → Copy → UID → Thư mục → Dexopt → Ghi DB → Phát tin</div></div>

<h3>Kết quả trên đĩa</h3>
<pre>-rw-r--r-- system   system   /data/app/com.example.app-1.apk
-rwxr-xr-x system   system   /data/app-lib/com.example.app-1/libapp.so
-rw-r--r-- system   <span class="h">all_a215</span> /data/dalvik-cache/data@app@com.example.app-1.apk@classes.dex
drwxr-x--x <span class="h">u0_a215 u0_a215</span> /data/data/com.example.app
drwxrwx--x u0_a215  u0_a215  /data/data/com.example.app/databases
lrwxrwxrwx install  install  /data/data/com.example.app/lib -&gt; /data/app-lib/com.example.app-1</pre>
<ul>
<li>APK mặc định <b>world-readable</b> (để chia sẻ tài nguyên công khai, launcher liệt kê app…). Hệ quả: ai cũng sao chép được APK → lý do ra đời forward locking.</li>
<li>DEX tối ưu thuộc nhóm <code>all_a215</code>: nhóm gồm <b>mọi người dùng</b> đã cài app, để <b>dùng chung</b> một bản DEX trên máy đa người dùng.</li>
<li>Thư mục dữ liệu thuộc <code>u0_a215</code> – người dùng 0 + app ID 215.</li>
</ul>

<h3>Mục trong packages.xml</h3>
<table>
<tr><th>Thuộc tính</th><th>Ý nghĩa</th></tr>
<tr><td><code>name</code></td><td>Tên gói</td></tr>
<tr><td><code>codePath</code> / <code>resourcePath</code></td><td>Đường dẫn APK; resourcePath chỉ đặt cho app forward-lock</td></tr>
<tr><td><code>nativeLibraryPath</code></td><td>Thư mục thư viện native</td></tr>
<tr><td><code>flags</code></td><td>Cờ của ứng dụng</td></tr>
<tr><td><code>ft</code> / <code>it</code> / <code>ut</code></td><td>Thời điểm: tệp APK / cài lần đầu / cập nhật lần cuối (ms)</td></tr>
<tr><td><code>version</code></td><td>versionCode</td></tr>
<tr><td><code>userId</code> / <code>sharedUserId</code></td><td>UID kernel được cấp / tên shared user</td></tr>
<tr><td><code>installer</code></td><td>Gói đã cài app (vd com.android.vending)</td></tr>
</table>
<p><code>&lt;sigs&gt;</code> chứa chứng chỉ DER (hex) hoặc tham chiếu tới lần xuất hiện đầu của chứng chỉ trùng. <code>&lt;signing-keyset&gt;</code> mới từ 4.4 (chưa được dùng để kiểm tra).</p>
<div class="callout c-danger"><b>⚠ “First one wins” với quyền tùy chỉnh</b>Nếu app A và B cùng định nghĩa quyền P, ai cài <b>trước</b> thì định nghĩa của người đó được giữ. Nếu A (cài trước) đặt P ở mức <code>normal</code> còn B đặt <code>signature</code>, thì thành phần của B bảo vệ bằng P <b>không còn đòi cùng khóa nữa</b> → bị hạ mức bảo vệ! Hãy kiểm tra mức bảo vệ thực tế của quyền đã đăng ký.</div>
<div class="callout c-warn"><b>Bug “Master Key” (#8219321)</b>Lúc cài, tính toàn vẹn APK kiểm bằng lớp Java chuẩn; lúc chạy, Dalvik dùng bộ phân tích ZIP/JAR <b>riêng viết bằng native</b>. Khác biệt nhỏ giữa hai bộ phân tích cho phép sửa một APK đã ký mà vẫn hợp lệ. Cách vá: <code>StrictJarFile</code> dùng cùng cách phân tích với Dalvik.</div>
`},

{id:'update', icon:'🔄', title:'Cập nhật gói & chính sách “cùng nguồn gốc”', html:`
<h3>Bước đầu tiên: kiểm chữ ký</h3>
<p>Gói mới phải được ký bởi <b>cùng tập người ký</b> với gói đang cài – gọi là <b>same origin policy</b> hay <b>TOFU</b> (Trust On First Use: tin tưởng ở lần đầu). Nhờ vậy bản cập nhật chắc chắn do cùng tác giả và được <b>thừa hưởng dữ liệu</b> của app cũ.</p>
<pre>static int compareSignatures(Signature[] s1, Signature[] s2) {
  ...
  HashSet&lt;Signature&gt; set1 = ..., set2 = ...;
  if (<span class="h">set1.equals(set2)</span>) return PackageManager.SIGNATURE_MATCH;
  return PackageManager.SIGNATURE_NO_MATCH;
}</pre>
<ul>
<li><code>Signature</code> chỉ là vỏ bọc của <b>chứng chỉ X.509 mã hóa DER</b>; hai chữ ký bằng nhau khi <b>từng byte DER</b> giống nhau (<code>Arrays.equals</code>).</li>
<li>Không kiểm hạn, CA hay thu hồi.</li>
<li>Không khớp → <code>INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES</code>.</li>
<li>Nếu bản gốc có nhiều người ký, bản cập nhật phải ký bởi <b>đúng các người ký đó</b>, mỗi người bằng chứng chỉ gốc.</li>
</ul>
<div class="callout c-danger"><b>Mất khóa hoặc chứng chỉ hết hạn?</b>Không cập nhật được; phải phát hành app mới → mất người dùng, đánh giá, và <b>dữ liệu/cài đặt cũ</b>. Cách phòng: <b>sao lưu khóa ký</b> và đặt hạn dài (khuyến nghị ≥ 25 năm; Google Play yêu cầu đến ít nhất tháng 10/2033).</div>

<h3>Cập nhật app người dùng</h3>
<div class="flow"><div class="node">Kill tiến trình app</div><span class="arr">→</span><div class="node">Gỡ khỏi cấu trúc nội bộ + DB (kể cả thành phần)</div><span class="arr">→</span><div class="node hl">scanPackageLI() (giữ thư mục dữ liệu)</div><span class="arr">→</span><div class="node">Cấp lại quyền cho mọi gói</div><span class="arr">→</span><div class="node">PACKAGE_REPLACED</div></div>

<h3>Cập nhật app hệ thống</h3>
<p>Phân vùng system chỉ-đọc nên bản cập nhật cài vào <code>/data/app/</code>, bản gốc giữ nguyên. DB có <b>hai mục</b>: <code>&lt;package&gt;</code> (bản mới) và <code>&lt;updated-package&gt;</code> (bản gốc trong system). Bản mới thừa hưởng <b>UID và quyền</b> của bản gốc và có cờ <code>FLAG_UPDATED_SYSTEM_APP</code> (0x80).</p>
<div class="cards">
 <div class="mini b"><h4>Cập nhật qua Play/cửa hàng</h4><p>Vẫn phải cùng chứng chỉ.</p></div>
 <div class="mini a"><h4>Cập nhật trực tiếp vào /system (qua OTA)</h4><p>Được phép <b>đổi chứng chỉ ký</b>: kẻ đủ quyền ghi vào system partition thì đáng tin. UID, tệp, quyền giữ nguyên. <b>Ngoại lệ</b>: gói thuộc shared user không đổi được chữ ký (ảnh hưởng gói khác).</p></div>
</div>
<p>Chiều ngược lại: app hệ thống mới có chứng chỉ khác app thường cùng tên → app thường bị <b>xóa trước</b>.</p>
`},

{id:'encrypt', icon:'🔒', title:'APK mã hóa & Forward Locking', html:`
<h3>APK mã hóa (từ Android 4.1)</h3>
<p>APK có thể được mã hóa khi truyền và <b>giải mã lúc cài</b>. PackageInstaller mặc định không hỗ trợ; dùng Google Play hoặc <code>pm</code>.</p>
<pre><span class="c"># Mã hóa (AES-128-CBC)</span>
openssl enc -aes-128-cbc -K &lt;key&gt; -iv &lt;iv&gt; -in my-app.apk -out my-app-enc.apk
<span class="c"># Cài + giải mã</span>
adb install --algo 'AES/CBC/PKCS5Padding' --key &lt;hex&gt; --iv &lt;hex&gt; my-app-enc.apk
<span class="c"># Có kiểm tra toàn vẹn bằng MAC</span>
pm install -r --algo ... --key ... --iv ... --macalgo HmacSHA1 --mackey ... --tag &lt;mac&gt; file.apk</pre>
<ul>
<li>Tham số được gói trong <code>ContainerEncryptionParams</code> (thuật toán, khóa, IV, thuật toán MAC, khóa MAC, tag…).</li>
<li><b>MediaContainerService</b> dùng JCA <code>Cipher</code> + <code>Mac</code> để giải mã và kiểm toàn vẹn khi copy. Tag sai → <code>INSTALL_FAILED_INVALID_APK</code>.</li>
<li>Kết quả trong /data/app/ là APK <b>đã giải mã</b> – giống hệt bản gốc.</li>
</ul>
<h3>Forward Locking – chống “chuyển tiếp” app trả phí</h3>
<p>APK mặc định world-readable → trích xuất dễ dàng. Forward locking tách gói thành 2 phần:</p>
<div class="compare">
 <div class="mini g"><h4>Phần công khai</h4><p>Tài nguyên + manifest (<code>res.zip</code>), world-readable.</p></div>
 <div class="mini r"><h4>Phần riêng</h4><p>Mã và assets (<code>pkg.apk</code>), chỉ system + user của app đọc được.</p></div>
</div>
<div class="stepper" data-stepper>
 <div class="step"><b>Bản đầu (cũ)</b>Phần mã đặt trong <code>/data/app-private/</code> chỉ system đọc. Máy root vẫn lấy được → sớm bị bỏ.</div>
 <div class="step"><b>Google Play Licensing</b>Chuyển trách nhiệm bảo vệ sang nhà phát triển (kiểm giấy phép trực tuyến); kết quả không đồng đều.</div>
 <div class="step"><b>Android 2.2: apps-to-SD</b>SD card dùng FAT (không có quyền tệp) nên APK được đặt trong <b>ảnh hệ tệp mã hóa</b>, mount bằng device-mapper.</div>
 <div class="step"><b>Android 4.1: ASEC dùng ext4</b>Container dạng ext4 nên có quyền tệp; khóa thiết bị mới mount được. Dùng để forward-lock app trả phí.</div>
</div>
<h3>ASEC container</h3>
<ul>
<li><b>ASEC</b> = Android Secure External Caches. File <code>.asec</code> trong <code>/data/app-asec/</code>, mount tại <code>/mnt/asec/&lt;gói&gt;</code>.</li>
<li>Quản lý bởi <b>vold</b>; MountService làm giao diện cho framework. Dùng <code>vdc asec list | path | mount | unmount</code> để thao tác.</li>
<li>Mã hóa <b>Twofish 128-bit</b>, khóa lưu ở <code>/data/misc/systemkeys/AppsOnSD.sks</code> (như từ Android 2.2).</li>
<li>Kích hoạt: <code>pm install -l</code> hoặc cờ <code>INSTALL_FORWARD_LOCK</code>.</li>
</ul>
<pre>-rw-r----- system u0_a96   pkg.apk   <span class="c"># chỉ system + user của app</span>
-rw-r--r-- system system   res.zip   <span class="c"># công khai</span></pre>
<h3>Google Play làm gì?</h3>
<p>Máy chủ gửi metadata (URL, kích thước, versionCode, thời hạn hoàn tiền, <code>EncryptionParams</code>). Với app trả phí: <code>AES/CBC/PKCS5Padding</code> + <code>HMACSHA1</code>; IV và tag gói cùng APK mã hóa. Cài bằng <code>installPackageWithVerification()</code> với cờ forward-lock → app miễn phí vào /data/app/, app trả phí vào container /mnt/asec/.</p>
<div class="callout c-warn"><b>Bảo mật có tuyệt đối không?</b>Không: hệ điều hành vẫn phải truy cập được nội dung APK nên nếu có <b>root</b>, vẫn có thể lấy APK hoặc khóa container. Chỉ nâng độ khó, không phải bất khả thi.</div>
`},

{id:'verify', icon:'🕵️', title:'Package Verification – quét app trước khi cài', html:`
<p>Từ Android 4.0 (API 14), hạ tầng cho phép <b>verification agent</b> kiểm APK trước khi cài. Android <b>không có verifier tích hợp</b>; phổ biến nhất là verifier của <b>Google Play</b> (phát hiện “potentially harmful applications”). Người dùng bật/tắt ở <i>Settings → Security → Verify apps</i>, lần đầu cần đồng ý vì dữ liệu được gửi cho Google.</p>
<div class="cards">
 <div class="mini r"><h4>Required verifier (1)</h4><p>Đăng ký là <b>receiver</b> với intent-filter <code>PACKAGE_NEEDS_VERIFICATION</code> + MIME APK, yêu cầu quyền <code>BIND_PACKAGE_VERIFIER</code>; chính app cần <code>PACKAGE_VERIFICATION_AGENT</code> (signature|system) → chỉ app hệ thống.</p></div>
 <div class="mini b"><h4>Sufficient verifier (0..n)</h4><p>Khai báo thẻ <code>&lt;package-verifier&gt;</code> trong manifest (tên gói + khóa công khai).</p></div>
</div>
<div class="callout c-info"><b>Điều kiện hoàn tất</b>Required verifier <b>và</b> ít nhất một sufficient verifier trả kết quả dương.</div>
<div class="stepper" data-stepper>
 <div class="step"><b>Điều kiện bật</b>Có required verifier và <code>PACKAGE_VERIFIER_ENABLE</code> = true.</div>
 <div class="step"><b>Xếp hàng & phát broadcast</b>PMS đưa APK vào hàng chờ, gửi <code>ACTION_PACKAGE_NEEDS_VERIFICATION</code> (kèm ID duy nhất + metadata).</div>
 <div class="step"><b>Agent trả lời</b>Gọi <code>verifyPendingInstall(id, status)</code> – cần quyền PACKAGE_VERIFICATION_AGENT nên app thường không tham gia được.</div>
 <div class="step"><b>PMS đánh giá</b>Đủ xác minh → gỡ khỏi hàng, phát <code>PACKAGE_VERIFIED</code>, tiếp tục cài. Bị từ chối hoặc hết thời gian → <code>INSTALL_FAILED_VERIFICATION_FAILURE</code>.</div>
</div>
<h3>Phía Google Play</h3>
<ul>
<li>Play Store đăng ký là required verifier; nhận broadcast cho <b>mọi</b> cách cài (Play, PackageInstaller, adb install).</li>
<li>Gửi lên: SHA-256 của APK, kích thước, tên gói, tên + SHA-256 của resource, băm manifest và classes, versionCode, chứng chỉ ký, metadata app cài và referrer URL; cùng log, URL liên quan, device ID, phiên bản OS, IP.</li>
<li>Thuật toán phân tích trả mã trạng thái + thông báo; Play gọi <code>verifyPendingInstall()</code>.</li>
<li>Trên máy “Google experience”, Play thường là verifier <b>duy nhất</b> nên quyết định chỉ phụ thuộc dịch vụ trực tuyến của Google.</li>
</ul>
`}

],

cards: [
 {f:'APK là gì? Mở rộng từ định dạng nào?',b:'Application Package: tệp chứa mã, tài nguyên, manifest, chữ ký. Mở rộng từ <b>JAR</b>, mà JAR mở rộng từ <b>ZIP</b>. MIME: <code>application/vnd.android.package-archive</code>.'},
 {f:'Nêu các thành phần chính của một APK.',b:'AndroidManifest.xml · classes.dex · resources.arsc · assets/ · lib/ · res/ · META-INF/.'},
 {f:'META-INF/ trong APK chứa gì?',b:'<code>MANIFEST.MF</code> (băm từng tệp), <code>CERT.SF</code> (băm manifest + băm từng mục), <code>CERT.RSA/DSA/EC</code> (chữ ký PKCS#7 + chứng chỉ).'},
 {f:'Tại sao phải ký mã? Nó KHÔNG đảm bảo điều gì?',b:'Đảm bảo <b>toàn vẹn</b> và <b>xác thực tác giả</b>. KHÔNG đảm bảo người ký đáng tin hay mã an toàn (vd malware Flame có chữ ký hợp lệ).'},
 {f:'Chuỗi băm/chữ ký trong JAR signing?',b:'Tệp → băm trong MANIFEST.MF → CERT.SF chứa băm của manifest và từng mục → CERT.RSA là chữ ký trên CERT.SF.'},
 {f:'Chữ ký “detached” là gì? JAR dùng loại nào?',b:'Chữ ký không chứa dữ liệu được ký; người kiểm phải có bản gốc. Chữ ký JAR (PKCS#7/CMS) là <b>detached</b>; dữ liệu (.SF) nằm riêng.'},
 {f:'Android 4.3 thêm gì cho chữ ký?',b:'Hỗ trợ băm <b>SHA-256 và SHA-512</b> (trước đó mặc định SHA-1); signapk có SHA256withRSA.'},
 {f:'Verify JAR gồm 3 bước nào?',b:'(1) kiểm chữ ký trên .SF + chứng chỉ; (2) băm trong .SF khớp manifest; (3) băm trong manifest khớp tệp thật.'},
 {f:'Có thể thêm tệp vào JAR đã ký mà chữ ký vẫn hợp lệ không?',b:'Có, miễn các tệp ban đầu không đổi (số mục trong .SF không bắt buộc bằng manifest). Nhưng Android yêu cầu mọi entry phải được ký.'},
 {f:'Công cụ dùng để ký/xem chữ ký APK?',b:'<code>jarsigner</code> (ký/verify), <code>keytool -printcert -jarfile</code> (xem người ký), <code>openssl</code>, và <code>signapk</code> của AOSP (khóa PKCS#8 + cert X.509).'},
 {f:'Android khác “PKI” trong ký mã ở điểm nào?',b:'Không yêu cầu CA, hầu hết chứng chỉ <b>tự ký</b>, tên chủ thể tùy ý, thậm chí hết hạn vẫn cài được. Android chỉ <b>so sánh chứng chỉ nhị phân</b>.'},
 {f:'Quy tắc về người ký các entry trong APK?',b:'<b>Mọi entry</b> phải được ký bởi <b>cùng một tập</b> người ký; không có entry chưa ký hay người ký khác nhau (khác JAR chuẩn).'},
 {f:'<code>signapk -w</code> làm gì và tại sao?',b:'Ký <b>toàn bộ tệp</b> ZIP (cho OTA) ngoài chữ ký từng entry. Chữ ký đặt trong comment ZIP + bản ghi 6 byte cuối (offset + kích thước) để verify từ cuối tệp trước.'},
 {f:'Chứng chỉ OTA tin cậy lưu ở đâu?',b:'Riêng khỏi kho tin cậy hệ thống, thường <code>/system/etc/security/otacerts.zip</code> (vd releasekey.x509.pem). OTA được xác minh 2 lần (trước và trong recovery).'},
 {f:'4 cách cài ứng dụng?',b:'Cửa hàng (Play) · sideload (Unknown sources) · <code>adb install</code>/<code>pm install</code> · chép APK trực tiếp vào thư mục app (chỉ engineering build).'},
 {f:'/system/app, /system/priv-app, /data/app khác nhau thế nào?',b:'/system/app: app hệ thống. /system/priv-app: app đặc quyền (signatureOrSystem). /data/app: app người dùng cài.'},
 {f:'PackageInstaller: “nguồn không rõ” thực sự nghĩa là gì?',b:'Mọi app yêu cầu cài mà <b>không phải privileged</b> (không ở /system/priv-app/) – không chỉ là “ngoài Play Store”.'},
 {f:'pm install khác PackageInstaller thế nào?',b:'Không cần bật Unknown Sources, không GUI, nhiều tùy chọn kiểm thử; gọi cùng API PMS.'},
 {f:'PackageManagerService làm gì? Chạy với quyền nào?',b:'Trung tâm quản lý gói (parse, cài/cập nhật/gỡ, CSDL, quyền). Chạy trong system server với <b>UID system, không root</b> → nhờ installd.'},
 {f:'installd làm gì? Dùng quyền gì?',b:'Tạo/xóa/đổi chủ thư mục app, chạy dexopt. Socket chỉ UID system. Không root; dùng capability <b>CAP_DAC_OVERRIDE</b> và <b>CAP_CHOWN</b>.'},
 {f:'MountService và vold phân công thế nào?',b:'MountService (system) cung cấp API; <b>vold</b> (root) làm việc mount thật qua socket <code>/dev/socket/vold</code> (MountService có GID mount).'},
 {f:'MediaContainerService làm gì?',b:'Copy APK tới nơi cuối cùng; giải mã APK mã hóa; nhờ MountService tạo container cho forward-lock.'},
 {f:'AppDirObserver làm gì?',b:'Giám sát thư mục app bằng <b>inotify</b>; APK thêm → quét/cài; APK xóa → gỡ. Mỗi thư mục có một instance.'},
 {f:'Kể các bước chính khi cài APK cục bộ.',b:'Kiểm nguồn → parse/verify → xác nhận quyền → PMS kiểm INSTALL_PACKAGES → copy (vmdl tmp) → scan + gán UID → installd tạo thư mục → dexopt → ghi packages.xml → đăng ký components/quyền → PACKAGE_ADDED.'},
 {f:'Quyền tệp của APK sau cài và hệ quả?',b:'Mode <b>0644</b> (world-readable) → ai cũng sao chép được APK → cần forward locking cho app trả phí.'},
 {f:'Thư mục dữ liệu app: mode & chủ sở hữu?',b:'<code>/data/data/&lt;gói&gt;/</code> mode <b>0751</b>, chủ <code>u0_aNNN</code> (user + app ID).'},
 {f:'Nhóm all_aNNN dùng làm gì?',b:'Nhóm chứa mọi người dùng đã cài app; để chia sẻ <b>một bản DEX tối ưu</b> giữa các người dùng (tránh tốn đĩa).'},
 {f:'Thuộc tính ft, it, ut trong packages.xml?',b:'ft: thời gian tệp APK; it: cài lần đầu; ut: cập nhật lần cuối (Unix ms).'},
 {f:'Rủi ro “first one wins” của quyền tùy chỉnh?',b:'Quyền do app cài trước đăng ký, app sau bị bỏ qua. Nếu bản đầu đặt mức thấp (normal), mức signature của app sau bị <b>hạ cấp</b>. Cần kiểm tra mức bảo vệ thực tế.'},
 {f:'Bug Master Key (#8219321) là gì?',b:'Khác biệt giữa bộ phân tích ZIP/JAR của Java (lúc cài) và của Dalvik (lúc chạy) cho phép sửa APK đã ký mà vẫn hợp lệ. Vá bằng <code>StrictJarFile</code> dùng chung cách phân tích.'},
 {f:'Same origin policy / TOFU là gì?',b:'Bản cập nhật phải ký bởi <b>cùng tập người ký</b> như bản đã cài (Trust On First Use). So sánh chứng chỉ DER từng byte, không kiểm hạn/CA.'},
 {f:'Lỗi khi chứng chỉ cập nhật không khớp?',b:'<code>INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES</code>.'},
 {f:'Chứng chỉ ký hết hạn / mất khóa thì sao? Cách phòng?',b:'Không cập nhật được, phải phát hành app mới (mất dữ liệu, người dùng). Sao lưu khóa, đặt hạn ≥ 25 năm (Play: tối thiểu đến Oct 2033).'},
 {f:'Cập nhật app hệ thống qua Play khác qua OTA thế nào?',b:'Qua Play: cài vào /data/app/, DB có thêm <code>&lt;updated-package&gt;</code>, cờ 0x80, vẫn cùng chứng chỉ. Qua OTA (ghi vào /system): được <b>đổi chứng chỉ</b> (trừ gói thuộc shared user).'},
 {f:'Cờ FLAG_UPDATED_SYSTEM_APP là gì?',b:'0x80 trong <code>flags</code>, đánh dấu gói là bản cập nhật của app hệ thống.'},
 {f:'Adb/pm tham số để cài APK mã hóa?',b:'<code>--algo</code>, <code>--key</code>, <code>--iv</code> (và <code>--macalgo</code>, <code>--mackey</code>, <code>--tag</code> cho kiểm toàn vẹn). Giải mã do MediaContainerService qua JCA.'},
 {f:'Forward locking là gì? Mục đích?',b:'Tách APK: phần công khai (res + manifest) và phần riêng (mã + assets) chỉ OS truy cập được → chống sao chép app trả phí.'},
 {f:'ASEC là gì? Thuật toán và nơi lưu khóa?',b:'Android Secure External Caches – container mã hóa ext4 cho forward-lock, <code>/data/app-asec/*.asec</code>, mount <code>/mnt/asec/</code>. <b>Twofish 128-bit</b>, khóa ở <code>/data/misc/systemkeys/AppsOnSD.sks</code>. Quản lý bởi vold (lệnh <code>vdc asec</code>).'},
 {f:'Forward locking có bất khả xâm phạm không?',b:'Không: có root vẫn trích được APK hoặc khóa container, vì OS cần nội dung APK lúc chạy.'},
 {f:'Required vs sufficient verifier?',b:'Cần <b>1 required</b> (receiver PACKAGE_NEEDS_VERIFICATION, chỉ app hệ thống) + <b>≥1 sufficient</b> (<code>&lt;package-verifier&gt;</code>) trả kết quả dương.'},
 {f:'Quyền nào để một app trả lời verification?',b:'<code>PACKAGE_VERIFICATION_AGENT</code> (signature|system) – gọi <code>verifyPendingInstall()</code>. App thường không tham gia được.'},
 {f:'Lỗi khi package verification thất bại?',b:'<code>INSTALL_FAILED_VERIFICATION_FAILURE</code> (bị từ chối hoặc không đủ xác minh trong thời gian cho phép).'},
 {f:'Google Play verifier gửi gì lên Google?',b:'SHA-256 APK, kích thước, tên gói, resource + băm, băm manifest/classes, versionCode, chứng chỉ ký, metadata app cài, referrer; kèm log, URL, device ID, OS, IP.'}
],

quiz: [
 {q:'APK về bản chất là:',o:['Tệp nhị phân đóng gói riêng của Google','Tệp ZIP (qua định dạng JAR) chứa mã, tài nguyên, manifest và chữ ký','Một image ext4','Một tệp ELF'],a:1,e:'APK mở rộng JAR, JAR mở rộng ZIP – giải nén được bằng công cụ ZIP.'},
 {q:'Thư mục META-INF trong APK chứa:',o:['Thư viện native','Mã DEX','MANIFEST.MF, CERT.SF và khối chữ ký CERT.RSA/DSA/EC','Tài nguyên giao diện'],a:2,e:'Đây là nơi lưu thông tin chữ ký.'},
 {q:'Trong JAR signing, tệp CERT.SF chứa gì?',o:['Khóa riêng tư','Băm của toàn bộ MANIFEST.MF và băm từng mục','Mã nguồn','Danh sách quyền'],a:1,e:'.SF chứa SHA1-Digest-Manifest và băm các mục; .RSA ký lên .SF.'},
 {q:'CERT.RSA có đặc điểm gì?',o:['Chứa mã thực thi','Chữ ký PKCS#7/CMS detached trên .SF, kèm chứng chỉ ký','Bản sao của manifest','Khóa AES'],a:1,e:'Chữ ký tách rời: dữ liệu ký (.SF) nằm riêng.'},
 {q:'Chữ ký mã bảo đảm điều nào sau đây?',o:['Mã chắc chắn không phải malware','Mã không bị sửa và do chủ khóa ký tạo ra','Người ký là doanh nghiệp uy tín','Mã đã được Google kiểm duyệt'],a:1,e:'Chữ ký chỉ cho toàn vẹn + xác thực khóa, không nói gì về độ an toàn hay độ tin cậy của người ký.'},
 {q:'Android xử lý chứng chỉ ký APK thế nào?',o:['Yêu cầu do CA tin cậy cấp','Kiểm tra chuỗi PKI và thu hồi','Không quan tâm người cấp; chủ yếu so sánh chứng chỉ nhị phân, tự ký là bình thường','Chỉ chấp nhận chứng chỉ của Google'],a:2,e:'Android không dùng PKI cho ký mã; chứng chỉ chỉ là blob để so sánh.'},
 {q:'Một APK có chứng chỉ ký đã HẾT HẠN. Android sẽ:',o:['Từ chối cài','Vẫn cài bình thường','Chỉ cài nếu có Internet','Cài nhưng tắt quyền'],a:1,e:'Android không kiểm tra thời hạn chứng chỉ ký.'},
 {q:'Quy tắc khác biệt của Android so với JAR chuẩn về người ký:',o:['Cho phép mỗi tệp một người ký khác nhau','Mọi entry phải được ký bởi cùng một tập người ký','Cho phép tệp không ký','Chỉ ký classes.dex'],a:1,e:'Android gán người ký theo APK, không cho entry chưa ký/khác người ký.'},
 {q:'Vì sao gói OTA được ký cả tệp (signapk -w)?',o:['Để nén nhỏ hơn','Để recovery xác thực toàn bộ gói trước khi áp dụng; chữ ký đặt ở comment ZIP và bản ghi 6 byte cuối','Để ký bằng nhiều thuật toán','Vì JAR không hỗ trợ SHA-256'],a:1,e:'Cho phép đọc và xác minh chữ ký từ cuối tệp trước khi đọc cả tệp lớn.'},
 {q:'Thành phần nào của hệ thống thực sự tạo thư mục dữ liệu và đổi chủ sở hữu cho app?',o:['PackageManagerService trực tiếp','installd daemon','vold','MediaContainerService'],a:1,e:'PMS không có quyền root; nó nhờ installd (dùng CAP_DAC_OVERRIDE và CAP_CHOWN).'},
 {q:'Ai thực sự mount/unmount volume và container?',o:['MountService','vold (chạy root)','PackageInstaller','AppDirObserver'],a:1,e:'MountService thiếu đặc quyền, gửi lệnh tới vold qua socket.'},
 {q:'AppDirObserver dựa vào cơ chế nào để phát hiện APK mới trong thư mục?',o:['Quét định kỳ mỗi phút','inotify của Linux','Binder callback','Broadcast từ Play Store'],a:1,e:'Dùng inotify để theo dõi thay đổi thư mục.'},
 {q:'Theo thứ tự đúng, ngay sau khi APK được copy, PMS làm gì?',o:['Phát PACKAGE_ADDED','Quét gói và gán UID mới, rồi nhờ installd tạo thư mục dữ liệu','Chạy dexopt trước khi gán UID','Xóa APK gốc'],a:1,e:'scanPackageLI tạo PackageSettings + gán UID → installd tạo thư mục → dexopt → ghi packages.xml.'},
 {q:'Vì sao APK mặc định world-readable (0644) là vấn đề với app trả phí?',o:['APK sẽ chạy chậm','Ai cũng có thể sao chép APK ra khỏi máy','APK bị mã hóa','Hệ thống từ chối cài'],a:1,e:'Đó là động cơ của forward locking.'},
 {q:'Nhóm all_aNNN sở hữu tệp DEX tối ưu để:',o:['Chặn người dùng khác','Cho mọi người dùng đã cài app dùng chung một bản DEX','Mã hóa DEX','Gán quyền root'],a:1,e:'Tránh copy DEX riêng cho từng người dùng gây tốn đĩa.'},
 {q:'App A (cài trước) định nghĩa quyền P ở mức normal. App B định nghĩa P mức signature và dùng P bảo vệ thành phần. Hậu quả?',o:['B ghi đè định nghĩa của A','Định nghĩa của A được giữ → bảo vệ của B bị hạ xuống normal','Không app nào cài được','P bị xóa'],a:1,e:'“First one wins”: có thể hạ mức bảo vệ.'},
 {q:'Bug Master Key chủ yếu xuất phát từ:',o:['Khóa RSA yếu','Khác biệt giữa bộ phân tích ZIP/JAR lúc cài (Java) và lúc chạy (Dalvik)','Quyền tệp sai','Lỗi Binder'],a:1,e:'Hai bộ phân tích hiểu APK khác nhau → sửa APK mà vẫn qua kiểm chữ ký.'},
 {q:'Điều kiện để một bản cập nhật app thường được chấp nhận là:',o:['Cùng tên gói và version cao hơn là đủ','Cùng tên gói và ký bởi cùng tập chứng chỉ (so sánh DER từng byte)','Được Google Play xác minh','Chứng chỉ còn hạn'],a:1,e:'Same origin policy / TOFU.'},
 {q:'Nhà phát triển làm mất khóa ký. Điều gì đúng?',o:['Có thể ký lại bằng khóa mới để cập nhật','Không thể cập nhật app cũ; phải phát hành app mới và mất dữ liệu liên quan','Google khôi phục được khóa','Android bỏ qua chữ ký'],a:1,e:'Chứng chỉ phải khớp; mất khóa = không cập nhật được.'},
 {q:'Cập nhật app hệ thống từ Google Play sẽ:',o:['Ghi đè trực tiếp vào /system','Cài vào /data/app/ và tạo thêm mục &lt;updated-package&gt; giữ bản gốc','Xóa app gốc','Đổi UID'],a:1,e:'Phân vùng system chỉ-đọc; bản mới nằm ở /data/app/ và kế thừa UID/quyền.'},
 {q:'Khi nào chứng chỉ ký của app hệ thống được phép THAY ĐỔI qua cập nhật?',o:['Không bao giờ','Khi cập nhật ghi trực tiếp vào /system (vd OTA), trừ gói thuộc shared user','Khi qua Play Store','Khi người dùng đồng ý'],a:1,e:'Người cài có quyền ghi system thì được tin cậy đổi chứng chỉ; shared user thì không vì ảnh hưởng gói khác.'},
 {q:'Ai thực hiện việc giải mã APK mã hóa khi cài?',o:['PackageInstaller','MediaContainerService dùng JCA Cipher/Mac','installd','vold'],a:1,e:'Giải mã và kiểm MAC diễn ra trong lúc copy.'},
 {q:'Kết quả cuối cùng của APK mã hóa (không forward-lock) trong /data/app/ là:',o:['Vẫn mã hóa','Bản APK đã giải mã, giống hệt bản gốc','Một container .asec','Một tệp .odex'],a:1,e:'Hash khớp với APK gốc chưa mã hóa.'},
 {q:'Forward locking tách APK thành các phần nào?',o:['Code và dữ liệu người dùng','Phần công khai (res + manifest) và phần riêng (mã + assets)','Hai bản sao giống nhau','Phần native và phần Java'],a:1,e:'res.zip công khai; pkg.apk chỉ system và user của app đọc.'},
 {q:'Container ASEC ở Android 4.1 khác bản Android 2.2 ở điểm nào?',o:['Dùng RSA thay Twofish','Dùng ext4 (có quyền tệp) thay vì FAT','Không còn mã hóa','Lưu trên mạng'],a:1,e:'Thuật toán/khóa giữ nguyên (Twofish 128), nhưng hệ tệp chuyển sang ext4.'},
 {q:'Forward locking chống được kẻ tấn công có quyền root không?',o:['Có, hoàn toàn','Không – root vẫn lấy được APK hoặc khóa container','Có nếu bật SELinux','Có nếu dùng SD card'],a:1,e:'OS phải truy cập nội dung APK lúc chạy nên root có thể trích xuất.'},
 {q:'Package verification hoàn tất khi:',o:['Mọi verifier cùng đồng ý','Required verifier và ít nhất một sufficient verifier trả dương','Chỉ cần người dùng bấm OK','Chỉ cần một sufficient verifier'],a:1,e:'Theo mô tả của PackageManagerService.'},
 {q:'Vì sao chỉ app hệ thống mới có thể làm required verifier?',o:['Do Google quy định miệng','Vì cần quyền PACKAGE_VERIFICATION_AGENT mức signature|system','Vì cần root','Vì phải có SELinux'],a:1,e:'Quyền này khóa chức năng cho hệ thống.'},
 {q:'Khi verification bị từ chối hoặc quá hạn, lỗi cài đặt là:',o:['INSTALL_FAILED_INVALID_APK','INSTALL_FAILED_VERIFICATION_FAILURE','INSTALL_FAILED_UID_CHANGED','INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES'],a:1,e:'Còn INVALID_APK dành cho sai MAC của APK mã hóa.'},
 {q:'Tình huống: bạn sửa một byte trong tag MAC khi chạy pm install với APK mã hóa. Kết quả?',o:['Cài thành công','INSTALL_FAILED_INVALID_APK','Hệ thống khởi động lại','App được cài nhưng bị khóa'],a:1,e:'Kiểm toàn vẹn thất bại.'}
],

order: [
 {id:'o-chain',title:'Chuỗi chữ ký JAR/APK',intro:'Sắp xếp từ dữ liệu gốc tới chữ ký cuối cùng.',
  items:['Từng tệp trong APK (classes.dex, res/…)','MANIFEST.MF: băm của từng tệp','CERT.SF: băm của manifest + băm từng mục','CERT.RSA: chữ ký số trên CERT.SF + chứng chỉ'],
  explain:'Mỗi lớp băm/ký lớp dưới nên chữ ký cuối bảo vệ cả chuỗi.'},
 {id:'o-install',title:'Quy trình cài APK',intro:'Sắp xếp các bước cài đặt đúng thứ tự.',
  items:['PackageInstaller kiểm nguồn + parse APK, hiện hộp thoại quyền','PMS kiểm INSTALL_PACKAGES, chọn nơi cài','MediaContainerService copy APK (vmdl tmp → tên chính thức, 0644)','scanPackageLI: tạo PackageSettings, gán UID','installd tạo thư mục dữ liệu (0751) và đổi chủ','dexopt tạo DEX tối ưu','Ghi mục vào packages.xml, đăng ký components/quyền','Phát broadcast ACTION_PACKAGE_ADDED'],
  explain:'Phân tích → xác nhận → kiểm quyền → copy → UID → thư mục → dexopt → DB → phát tin.'},
 {id:'o-verify',title:'Luồng package verification',intro:'Sắp xếp từ lúc bắt đầu cài đến kết quả.',
  items:['PMS thấy có required verifier và verification được bật','APK vào hàng chờ; phát ACTION_PACKAGE_NEEDS_VERIFICATION','Verifier phân tích và gọi verifyPendingInstall(id, status)','PMS thấy đủ required + sufficient dương','Phát PACKAGE_VERIFIED rồi bắt đầu cài (nếu sai: INSTALL_FAILED_VERIFICATION_FAILURE)'],
  explain:'Bật → xếp hàng + broadcast → agent trả lời → PMS đánh giá → cài hoặc báo lỗi.'}
],

classify: [
 {id:'c-who',title:'Ai làm việc này?',intro:'Gán mỗi nhiệm vụ cho đúng thành phần.',buckets:['PackageManagerService','installd','vold','MediaContainerService'],
  items:[
   {t:'Tạo /data/data/<gói> và chown cho UID app',b:1},{t:'Mount/unmount ASEC container (root)',b:2},
   {t:'Phân tích APK, duy trì packages.xml',b:0},{t:'Giải mã APK mã hóa khi copy',b:3},
   {t:'Fork dexopt tạo DEX tối ưu',b:1},{t:'Gán UID mới cho gói',b:0},
   {t:'Sao chép APK từ nguồn tới /data/app/',b:3},{t:'Tạo hệ tệp cho container',b:2}],
  explain:'PMS = bộ não; installd = thư mục + dexopt; vold = volume; MediaContainerService = copy/giải mã.'},
 {id:'c-sig',title:'Android hay Java chuẩn?',intro:'Đặc điểm nào đúng với ký mã Android, đặc điểm nào đúng với JAR chuẩn?',buckets:['Android (APK)','JAR chuẩn'],
  items:[
   {t:'Mọi entry phải ký bởi cùng tập người ký',b:0},{t:'Mỗi tệp có thể ký bởi người khác nhau',b:1},
   {t:'Chứng chỉ tự ký được chấp nhận, không cần CA',b:0},{t:'Có thể đóng dấu thời gian (TSA) bằng jarsigner',b:1},
   {t:'Chứng chỉ hết hạn vẫn cài được',b:0},{t:'Cho phép entry không ký',b:1}],
  explain:'Android: so sánh chứng chỉ nhị phân, mọi entry cùng người ký. JAR chuẩn linh hoạt hơn.'},
 {id:'c-where',title:'Thư mục nào?',intro:'Mỗi mục thuộc thư mục nào?',buckets:['/system/priv-app/','/data/app/','/data/app-asec/','/data/dalvik-cache/'],
  items:[
   {t:'APK người dùng cài từ Play',b:1},{t:'Container mã hóa forward-lock (.asec)',b:2},
   {t:'DEX đã tối ưu (dexopt)',b:3},{t:'App được cấp quyền signatureOrSystem (4.4+)',b:0},
   {t:'Tệp tạm vmdl*.tmp khi cài',b:1},{t:'Bản cập nhật của app hệ thống từ Play',b:1}],
  explain:'Mỗi loại tệp có chỗ ở riêng.'}
],

cheat: [
 {title:'📦 APK',html:'<ul><li>APK ⊂ JAR ⊂ ZIP</li><li>Manifest · classes.dex · resources.arsc · assets · lib · res · META-INF</li><li>Mode 0644 world-readable</li></ul>'},
 {title:'✍️ Chuỗi chữ ký',html:'<div class="mnemo">Tệp → MF → SF → RSA</div><ul><li>RSA/DSA/EC = PKCS#7 detached</li><li>4.3+: SHA-256/512</li><li>Verify 3 bước</li></ul>'},
 {title:'🪪 Android ≠ PKI',html:'<ul><li>Tự ký OK, hết hạn OK</li><li>Chỉ so sánh chứng chỉ DER</li><li>Mọi entry cùng người ký</li><li>Không TSA</li></ul>'},
 {title:'🧰 Phân công',html:'<ul><li>PMS (system): bộ não</li><li>installd: thư mục + dexopt (CAP_CHOWN, CAP_DAC_OVERRIDE)</li><li>MountService→vold (root)</li><li>MediaContainerService: copy/giải mã</li><li>AppDirObserver: inotify</li></ul>'},
 {title:'🔄 Cập nhật',html:'<ul><li>TOFU / same origin</li><li>INCONSISTENT_CERTIFICATES</li><li>Mất khóa = mất app</li><li>System app update: &lt;updated-package&gt;, flag 0x80</li><li>OTA vào /system: được đổi cert</li></ul>'},
 {title:'🔒 Mã hóa & Forward lock',html:'<ul><li>--algo/--key/--iv (+MAC)</li><li>ASEC: Twofish-128, ext4, vold</li><li>pkg.apk riêng, res.zip công khai</li><li>Root vẫn phá được</li></ul>'},
 {title:'🕵️ Verification',html:'<ul><li>4.0+ (API 14)</li><li>1 required (hệ thống) + ≥1 sufficient</li><li>PACKAGE_VERIFICATION_AGENT</li><li>Play: required verifier, gửi băm lên Google</li></ul>'},
 {title:'⚠ Bẫy cần nhớ',html:'<ul><li>Quyền custom: first one wins</li><li>Master Key bug: 2 bộ parse khác nhau</li><li>Unknown source = app không privileged</li></ul>'}
]
};
