CH[10] = {
sections: [

{id:'boot', icon:'🥾', title:'Kiểm soát khởi động & cài đặt: bootloader và recovery', html:`
<p>Từ đầu sách ta nói về sandbox và phân tách đặc quyền. Chương này nói về <b>toàn vẹn HĐH</b> và <b>bảo vệ dữ liệu trước kẻ có truy cập vật lý</b>: bootloader/recovery → verified boot → mã hóa đĩa → khóa màn hình → USB debugging an toàn → sao lưu.</p>
<p>Có thiết bị trong tay, kẻ tấn công không chỉ dùng tệp/thư mục mà còn truy cập <b>bộ nhớ hay đĩa thô</b> (tháo máy, nối cổng debug phần cứng, hàn tháo flash…) – phần này nằm ngoài phạm vi sách. Cách ít xâm phạm hơn nhưng vẫn mạnh: <b>dùng cơ chế cập nhật để sửa tệp hệ thống</b>, hoặc <b>khởi động HĐH khác</b> có truy cập thẳng thiết bị lưu trữ. Máy tiêu dùng mặc định khóa để làm vậy là không thể hoặc cần khóa ký của nhà sản xuất.</p>
<h3>Bootloader</h3>
<ul>
<li>Chương trình đặc thù phần cứng chạy ngay khi bật máy (ARM: khi thoát reset): khởi tạo phần cứng, có thể có giao diện cấu hình tối thiểu, rồi <b>tìm và khởi động HĐH</b>. Thường nhiều giai đoạn (sách gộp làm một). Phần lớn là độc quyền theo SoC.</li>
<li>Hầu hết hỗ trợ <b>fastboot / download mode</b>: ghi (<i>flash</i>) ảnh phân vùng thô vào bộ nhớ, hoặc khởi động ảnh tạm không flash. Vào bằng tổ hợp phím lúc boot hoặc <code>adb reboot bootloader</code>.</li>
<li>Máy bán ra <b>khóa bootloader</b>: cấm flash/boot ảnh hệ thống hoàn toàn hoặc chỉ cho ảnh <b>ký bởi nhà sản xuất</b>.</li>
<li><b>Mở khóa bootloader</b>: bỏ hạn chế fastboot và kiểm chữ ký ảnh; thường <b>format userdata</b> để ảnh độc hại không đọc được dữ liệu cũ. Có máy không thể khóa lại; số khác khóa lại được bằng cách <b>đặt lại cờ trạng thái</b> lưu ở phân vùng riêng (<code>param</code>/<code>misc</code>).</li>
</ul>
<h3>Recovery</h3>
<ul>
<li>HĐH Linux tối giản: kernel + RAM disk công cụ cấp thấp + UI tối thiểu điều khiển bằng nút cứng. Dùng áp <b>gói OTA</b> (ZIP có file mới/bản vá + script) ký bởi nhà sản xuất; recovery giữ <b>khóa công khai</b> để kiểm trước khi áp dụng.</li>
<li>Nằm trên phân vùng riêng nên có thể bị <b>thay</b> bằng recovery tùy biến (qua download mode) – đổi khóa công khai hoặc không kiểm chữ ký → cho phép thay hẳn HĐH bằng bản của bên thứ ba, root qua ADB, đọc phân vùng thô.</li>
</ul>
<div class="callout c-danger"><b>⚠ Rootkit trong recovery</b>Dù userdata đã mã hóa, vào recovery tùy biến thì dễ cài rootkit vào system. Rootkit bật truy cập từ xa khi HĐH chính khởi động và dữ liệu được <b>giải mã trong suốt</b> → lộ dữ liệu. Verified boot ngăn được, nhưng chỉ khi kiểm boot partition bằng khóa kiểm <b>không đổi được, lưu trong phần cứng</b>.</div>
<p>Vì vậy bootloader chỉ nên mở khóa trên máy test/dev, hoặc khóa lại ngay sau khi sửa.</p>
`},

{id:'verity', icon:'✅', title:'Verified Boot: dm-verity', html:`
<p>Dựa trên <b>dm-verity</b> – target của <b>device-mapper</b>. Device-mapper là khung kernel để tạo <b>thiết bị khối ảo</b> bằng cách ánh xạ tới thiết bị khối vật lý và (tùy chọn) biến đổi dữ liệu truyền qua. Nền của LVM, mã hóa đĩa (<b>dm-crypt</b>), RAID… Các target <b>xếp chồng</b> được.</p>
<h3>Cách dm-verity hoạt động</h3>
<p>Kiểm tra toàn vẹn <b>từng khối</b> khi đọc: đúng → đọc thành công; sai → <b>lỗi I/O</b> như khối bị hỏng vật lý. Dựa trên <b>cây băm tính trước (Merkle tree)</b>: lá = băm khối dữ liệu; nút trong = băm của nút con; gốc = <b>root hash</b>. Đổi một khối làm đổi root hash, nên chỉ cần xác thực root hash là đủ. <b>Bấm khối 💾 để tấn công:</b></p>
<div class="merkle" data-merkle></div>
<ul>
<li>Hash khối được tính khi đọc và so với cây; độ trễ thấp vì đọc đĩa vốn đã chậm; khối đã kiểm được <b>cache</b> nên lần đọc sau không kiểm lại.</li>
<li>Thiết bị nền phải <b>mount chỉ-đọc</b>: hệ tệp ghi thời gian mount… vào superblock nên mount đọc-ghi làm kiểm tra lỗi. Hợp mô hình Android: <b>system</b> chỉ-đọc, dữ liệu app ở phân vùng đọc-ghi riêng.</li>
</ul>
<h3>Cài đặt trong Android 4.4</h3>
<ul>
<li>dm-verity xuất phát từ Chrome OS, vào kernel Linux 3.4; bật bằng <code>CONFIG_DM_VERITY</code>.</li>
<li>Android xác minh root hash bằng cách khác Chrome OS: <b>khóa công khai RSA</b> nhúng trong <b>boot partition</b> (tệp <code>verity_key</code>) dùng kiểm <b>mapping table</b> (vị trí thiết bị đích, offset hash table, <b>root hash</b> và <b>salt</b>).</li>
<li>Mapping table + chữ ký nằm trong <b>verity metadata block</b>, ghi ngay sau khối hệ tệp cuối cùng của thiết bị đích.</li>
<li>Phân vùng được đánh dấu cần kiểm bằng cờ <code>verify</code> trong trường <code>fs_mgr_flags</code> của <b>fstab</b>. <code>fs_mgr</code> nạp metadata, kiểm chữ ký bằng verity key, phân tích mapping table đưa cho device-mapper tạo <b>thiết bị dm-verity ảo</b> rồi <b>mount nó thay thiết bị vật lý</b>.</li>
</ul>
<pre>/dev/block/platform/msm_sdcc.1/by-name/system /system ext4 ro,barrier=1 wait,<span class="h">verify</span>
# mount | grep system
/dev/block/dm-0 /system ext4 ro,...</pre>
<div class="callout c-info"><b>Điều kiện: kernel phải đáng tin</b>dm-verity là tính năng kernel nên phải xác minh cả <b>boot partition</b> (có RAM disk + verity key). Việc này do bootloader làm, dựa trên khóa kiểm chữ ký <b>không sửa được, lưu trong phần cứng</b>.</div>
<h3>Bật verified boot</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Tạo cây băm</b>Bằng <code>veritysetup</code> (gói cryptsetup). Android cần cây băm trên <b>cùng thiết bị</b> với hệ tệp, nên phải chỉ định <b>hash offset</b> sau verity metadata block. Ra <b>root hash</b>.</div>
 <div class="step"><b>Tạo mapping table</b>Một dòng: phiên bản, thiết bị dữ liệu, thiết bị hash, kích thước khối dữ liệu/hash, offset dữ liệu/hash, thuật toán (sha256), root hash, salt.</div>
 <div class="step"><b>Ký bảng</b>Bằng RSA 2048 bit, chữ ký PKCS#1 v1.5.</div>
 <div class="step"><b>Tạo verity metadata block (32 KB)</b>Magic <code>0xb001b001</code> (4 B) · version (4 B, hiện 0) · chữ ký (256 B) · độ dài bảng (4 B) · bảng · đệm 0 cho đủ 32 KB.</div>
 <div class="step"><b>Khóa công khai định dạng mincrypt</b>Đặt ở gốc boot image tên <code>verity_key</code> (mincrypt: thư viện RSA tối giản, cũng dùng trong recovery kiểm OTA; lưu giá trị tính trước cho Montgomery).</div>
 <div class="step"><b>Sửa fstab</b>Thêm cờ <code>verify</code> cho phân vùng system.</div>
</div>
<div class="callout c-warn"><b>Vì sao chưa triển khai rộng (4.4)?</b>OTA kiểu <b>tệp</b> sửa khối mà không cập nhật verity metadata nên làm hỏng cây băm. OTA tương thích phải chạy ở <b>mức khối</b> (cập nhật cả khối tệp lẫn cây băm và metadata) → cần đổi hạ tầng OTA.</div>
`},

{id:'fde', icon:'🔐', title:'Mã hóa đĩa (Full-Disk Encryption)', html:`
<p>Android 3.0 giới thiệu mã hóa đĩa cùng chính sách device admin ép buộc mã hóa. Android 4.4 đổi hàm dẫn xuất khóa sang <b>scrypt</b>. CDD: nếu máy có lockscreen thì <b>phải hỗ trợ FDE</b>.</p>
<ul>
<li>Chỉ mã hóa phân vùng <b>userdata</b> (cấu hình hệ thống + dữ liệu app). <b>boot</b> và <b>system</b> không mã hóa (system có thể kiểm bằng dm-verity). Một phần HĐH phải để trần để lấy khóa và giải mã.</li>
<li><b>Không bật mặc định</b>; người dùng hoặc chính sách thiết bị khởi động.</li>
<li>Khóa giải mã đĩa thường lưu ở dạng mã hóa, cần một <b>KEK</b> để giải mã – KEK nằm trong phần cứng (smart card, TPM) hoặc suy ra từ passphrase mỗi lần boot.</li>
</ul>
<h3>Chế độ mã hóa</h3>
<ul>
<li>Dùng <b>dm-crypt</b> (target device-mapper): ánh xạ thiết bị mã hóa → thiết bị ảo; đọc giải mã, ghi mã hóa <b>trong suốt</b>.</li>
<li>Khóa chủ <b>ngẫu nhiên 128 bit</b> + <b>AES-CBC</b>. CBC cần IV ngẫu nhiên, khó đoán; nhưng khối đĩa truy cập không tuần tự nên mỗi <b>sector</b> cần IV riêng → dùng <b>ESSIV:SHA256</b>.</li>
</ul>
<div class="callout c-tip"><b>ESSIV</b>Muối <code>s = SHA256(K)</code> (K là khóa đĩa); IV của sector SN: <b>IV(SN) = AES<sub>s</sub>(SN)</b>. IV phụ thuộc bí mật nên kẻ tấn công không suy ra được.</div>
<div class="callout c-warn"><b>Điểm yếu của CBC + ESSIV</b>Không đổi tính <b>dễ biến đổi (malleability)</b> của CBC và không bảo đảm toàn vẹn; đã chứng minh kẻ biết plaintext gốc có thể sửa dữ liệu, thậm chí cài backdoor trên ổ LUKS dùng CBC. <b>XTS</b> (tweakable, tweak lấy từ địa chỉ sector + chỉ số khối) tránh được tấn công này và nhanh hơn, nhưng vẫn không xác thực bản mã. Android chưa hỗ trợ XTS (dm-crypt có, chỉ cần sửa vold).</div>
<h3>Dẫn xuất khóa</h3>
<ul>
<li>Khóa chủ (master key) được mã hóa bằng KEK AES-128 <b>suy ra từ mật khẩu người dùng</b>. 3.0–4.3: <b>PBKDF2, 2000 lần lặp, salt 128-bit</b>. Master key đã mã hóa + salt + số lần giải mã sai… lưu trong <b>crypto footer</b> (16 KB cuối phân vùng).</li>
<li>Lưu khóa mã hóa thay vì dùng thẳng khóa từ mật khẩu cho phép <b>đổi mật khẩu rất nhanh</b>: chỉ cần mã hóa lại master key (16 byte).</li>
<li>2000 vòng quá ít theo chuẩn ngày nay, và PBKDF2 <b>dễ song song hóa</b> (GPU). Mật khẩu chữ-số khá phức tạp vẫn có thể bị brute-force trong vài ngày/giờ.</li>
<li><b>scrypt (4.4)</b>: hàm <b>memory-hard</b> – đòi nhiều bộ nhớ và nhiều lần lặp → khó brute-force trên ASIC/GPU. Tham số <b>N, r, p</b> (CPU, bộ nhớ, song song). Mặc định <b>N=32768 (2<sup>15</sup>), r=8, p=2</b>, đặt bằng <code>ro.crypto.scrypt_params</code> dạng <code>N_factor:r_factor:p_factor</code> (mặc định <code>15:3:1</code>; mỗi giá trị = 2^factor). Máy 4.4 tự nâng cấp footer từ PBKDF2 sang scrypt và ghi N, r, p.</li>
</ul>
<h3>🧪 Brute-force PIN: PBKDF2 vs scrypt</h3>
<div class="sim" data-kdfcalc></div>
<h3>Mật khẩu mã hóa đĩa</h3>
<ul>
<li>Khi bắt đầu mã hóa: xác nhận hoặc đặt PIN/mật khẩu (nếu đang dùng pattern thì phải đặt). Mỗi lần boot nhập mật khẩu, rồi nhập lại để mở màn hình khóa.</li>
<li><b>Không có cài đặt riêng</b> cho mật khẩu mã hóa: đổi mật khẩu khóa màn hình cũng <b>âm thầm đổi mật khẩu mã hóa</b> (không áp dụng cho secondary user). Thiết kế vì khả dụng, nhưng ép chọn mật khẩu <b>đơn giản</b> (phải gõ hàng chục lần/ngày) và giới hạn <b>16 ký tự</b> nên không dùng được passphrase.</li>
</ul>
<div class="compare">
 <div class="mini a"><h4>Tấn công online (màn hình khóa)</h4><p>Thử mật khẩu trên máy đang chạy → bị <b>rate limiting</b> (chờ 30 giây sau mỗi 5 lần sai) và có thể wipe. PIN ngắn vẫn tương đối đủ.</p></div>
 <div class="mini r"><h4>Tấn công offline (FDE nhắm vào)</h4><p>Có máy/ảnh đĩa: trích master key mã hóa và <b>brute-force offline</b>, không bị rate-limit hay wipe. PIN số ngắn bị phá trong vài phút (vài giây với PBKDF2). Remote wipe (xóa master key) giúp nhưng máy có thể offline/tắt.</p></div>
</div>
<h3>Triển khai: cryptfs trong vold</h3>
<ul>
<li>Phần người dùng nằm ở module <b>cryptfs</b> của <b>vold</b>: lệnh <code>checkpw, restart, cryptocomplete, enablecrypto, changepw, verifypw, getfield, setfield</code>. Dịch vụ hệ thống gửi lệnh qua socket <code>vold</code>; cryptfs chỉ cho <b>root và system</b>.</li>
<li>Đổi mật khẩu mã hóa riêng: <code>vdc cryptfs changepw &lt;newpass&gt;</code> (cần root/engineering build).</li>
<li>vold điều khiển các giai đoạn bằng <b>thuộc tính hệ thống</b>:</li>
</ul>
<table>
<tr><th>Thuộc tính</th><th>Ý nghĩa</th></tr>
<tr><td><code>ro.crypto.state</code></td><td><code>encrypted</code> / <code>unencrypted</code> / <code>unsupported</code></td></tr>
<tr><td><code>vold.decrypt</code></td><td>Cờ trạng thái/kích hoạt các phần của <code>init.rc</code> (<code>trigger_restart_framework</code>, <code>trigger_post_fs_data</code>, <code>trigger_shutdown_framework</code>…)</td></tr>
<tr><td><code>vold.encrypt_progress</code></td><td>Tiến độ 0–100 hoặc chuỗi lỗi</td></tr>
<tr><td><code>ro.crypto.fs_crypto_blkdev</code></td><td>Thiết bị ảo dm-crypt; sau khi giải mã được mount tại <code>/data</code></td></tr>
</table>
<h3>Bật mã hóa (bấm chạy)</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Settings → Encrypt phone</b>Gọi MountService gửi <code>cryptfs enablecrypto inplace &lt;password&gt;</code> tới vold.</div>
 <div class="step"><b>Tắt framework</b>vold unmount userdata, đặt <code>vold.decrypt=trigger_shutdown_framework</code> → dừng hầu hết dịch vụ trừ lớp core.</div>
 <div class="step"><b>Catch-22 với /data</b>Framework cần /data nhưng phải unmount để mã hóa → vold unmount /data và mount <b>tmpfs</b> tạm thay vào; đặt <code>vold.encrypt_progress=0</code> và <code>trigger_restart_min_framework</code> (khởi động vài dịch vụ cần cho UI tiến độ).</div>
 <div class="step"><b>Crypto footer</b>vold dựng thiết bị dm-crypt ảo và ghi footer (vị trí theo cờ <code>encryptable=</code> trong fstab: <code>footer</code> = cuối phân vùng, hoặc phân vùng/tệp riêng). Cờ <code>CRYPT_ENCRYPTION_IN_PROGRESS (0x2)</code>.</div>
 <div class="step"><b>Mã hóa tại chỗ</b>Đọc từng khối từ userdata thật, ghi qua thiết bị dm-crypt để mã hóa → hoàn tất thì xóa cờ in-progress và <b>reboot</b>.</div>
</div>
<h3>Khởi động máy đã mã hóa</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>Không dùng UI bootloader</b>Đặt <code>vold.decrypt</code> rồi khởi động tập dịch vụ tối thiểu để hiện UI Android chuẩn (cũng dùng tmpfs ở /data).</div>
 <div class="step"><b>cryptocomplete</b>Kiểm footer đúng định dạng và không còn cờ in-progress.</div>
 <div class="step"><b>CryptKeeper</b> (thuộc Settings) hiện UI nhập mật khẩu, đóng vai <b>home screen ưu tiên cao hơn launcher</b> nên chạy trước; ẩn thanh trạng thái/hệ thống, bỏ qua nút Back. Máy không mã hóa thì tự tắt. Nếu mã hóa hỏng/dở dang → UI cho <b>factory reset</b>.</div>
 <div class="step"><b>checkpw</b>CryptKeeper gọi <code>decryptStorage()</code> → vold thử mount phân vùng ở điểm tạm để kiểm mật khẩu; đúng thì đặt <code>ro.crypto.fs_crypto_blkdev</code>.</div>
 <div class="step"><b>restart</b>MountService gửi <code>cryptfs restart</code>: khởi động lại dịch vụ lớp main, unmount tmpfs, mount thiết bị dm-crypt tại <b>/data</b>.</div>
 <div class="step"><b>post-fs-data</b>vold đặt <code>trigger_post_fs_data</code> → init.rc đặt quyền, khôi phục SELinux context, tạo thư mục; đặt <code>vold.post_fs_data_done=1</code>.</div>
 <div class="step"><b>Khởi động toàn bộ</b>vold đặt <code>trigger_restart_framework</code> → chạy hết lớp main và late_start. Từ giờ mọi dữ liệu ghi ra đều được mã hóa.</div>
</div>
<div class="callout c-danger"><b>Giới hạn của FDE</b>Chỉ bảo vệ <b>dữ liệu lúc nghỉ</b> (máy tắt). Sau khi mount, cho tiến trình người dùng nó <b>không khác</b> ổ không mã hóa → <b>không chống</b> được chương trình độc hại đang chạy. App có dữ liệu nhạy cảm nên <b>tự mã hóa theo tệp</b>: khóa tệp được mã hóa bằng KEK từ mật khẩu người dùng (hoặc thuộc tính phần cứng bất biến nếu gắn với thiết bị), và dùng mã hóa xác thực (GCM) hoặc HMAC để bảo đảm toàn vẹn.</div>
`},

{id:'lockscreen', icon:'🔒', title:'Bảo mật màn hình khóa (Keyguard)', html:`
<p>Lockscreen xuất hiện mỗi lần boot hoặc bật màn hình. Ngày nay nó còn hiển thị widget, chuyển người dùng, <b>mở khóa keystore</b>, và PIN/mật khẩu mở khóa dùng để <b>dẫn xuất khóa mã hóa credential store</b> (bản phần mềm) và <b>KEK mã hóa đĩa</b>.</p>
<h3>Cài đặt</h3>
<ul>
<li>Keyguard thực hiện như app thường (widget trên window) nhưng window nằm ở <b>lớp cao</b> mà app khác không vẽ lên trên/không điều khiển được; <b>chặn nút điều hướng</b> nên không vượt qua được. Hộp thoại của keyguard và thanh trạng thái vẽ đè lên.</li>
<li>Trước 4.0 app bên thứ ba có thể hiện window ở lớp keyguard (làm app “kiosk”, chặn nút Home) → malware lạm dụng. Từ 4.0 cần quyền <code>INTERNAL_SYSTEM_WINDOW</code> (signature).</li>
<li>Android 4.4 tách Keyguard thành <b>app hệ thống riêng</b> chạy trong tiến trình <code>com.android.systemui</code>. UI mỗi phương thức là một view (vd <code>KeyguardPINView</code>, <code>KeyguardPasswordView</code>) trong <code>KeyguardHostView</code>; kiểm tra mật khẩu giao cho <b><code>LockPatternUtils</code></b>.</li>
<li><code>KeyguardService</code> (AIDL <code>IKeyguardService</code>): kiểm trạng thái, đặt người dùng, mở camera, ẩn/tắt keyguard; thao tác đổi trạng thái cần quyền signature <code>CONTROL_KEYGUARD</code>.</li>
</ul>
<h3>Các cách mở khóa (security mode)</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="5" data-title="Slide / None" data-desc="<p>Không xác thực – mức an toàn bằng <b>None</b> (<code>SecurityMode.None</code>).</p>"><span>Slide / None</span><small>không bảo vệ</small></button>
  <button class="layer" data-c="2" data-title="Face Unlock (4.0+)" data-desc="<p><code>SecurityMode.Biometric</code> (“weak biometric”). Dùng camera trước nhận diện mặt (công nghệ PittPatt, Google mua 2011; mã đóng, gói <code>com.android.facelock</code>). Là cách <b>kém an toàn nhất</b> – chính màn hình cài đặt cảnh báo “người giống bạn có thể mở khóa”. Bắt buộc có phương thức <b>dự phòng</b> (pattern hoặc PIN).</p>"><span>Face Unlock</span><small>yếu nhất</small></button>
  <button class="layer" data-c="3" data-title="Pattern" data-desc="<p>Nối ≥ <b>4</b> điểm trên lưới 3×3, tối đa 9, mỗi điểm dùng một lần; lưu là dãy byte chỉ số điểm (0 = trên-trái, 8 = dưới-phải).</p><p>Băm: <b>SHA-1 không salt</b> trong <code>gesture.key</code> (<code>/data/system/users/&lt;id&gt;/</code>, 0600 system). Không salt ⇒ dễ có <b>bảng tra sẵn</b> khôi phục ngay nếu lấy được tệp. Lưu bằng <code>saveLockPattern()</code>, kiểm bằng <code>checkPattern()</code>; đặt quality <code>PASSWORD_QUALITY_SOMETHING</code>.</p><p>Điểm yếu: <b>smudge attack</b> (vệt tay trên màn hình), ít tổ hợp → <b>entropy kém</b> nên bị cấm khi mật khẩu dùng để dẫn xuất khóa (keystore, mã hóa đĩa).</p>"><span>Pattern</span><small>SHA-1 không salt</small></button>
  <button class="layer" data-c="1" data-title="PIN và Password" data-desc="<p>PIN: chỉ số 0–9; Password: chữ-số. Cả hai: so băm đầu vào với <b>băm có salt</b> đã lưu.</p><p>Băm = <b>SHA-1 ‖ MD5</b> của <code>(mật khẩu + salt hex)</code>; salt 64 bit ngẫu nhiên. Lưu ở <code>password.key</code> (hex). Salt trước 4.2 ở SettingsProvider (<code>lockscreen.password_salt</code>); từ 4.2 ở <b><code>/data/system/locksettings.db</code></b> truy cập qua <code>ILockSettings</code> (cần <code>ACCESS_KEYGUARD_SECURE_STORAGE</code>, signature).</p>"><span>PIN / Password</span><small>SHA1‖MD5 + salt</small></button>
  <button class="layer" data-c="4" data-title="Account, SIM PIN, SIM PUK" data-desc="<p>Không chọn được trực tiếp. <b>Account</b>: chỉ trên máy Google, là phương án <b>dự phòng</b> (Forgot Pattern sau &gt;5 lần sai) → nhập tài khoản Google bất kỳ trên máy để mở khóa. <b>Rủi ro</b>: tài khoản Google mật khẩu yếu/dùng chung là <b>backdoor</b> (tài khoản bật 2FA không dùng được).</p><p><b>SIM PIN/PUK</b>: chỉ khi SIM bị khóa.</p>"><span>Account · SIM PIN/PUK</span><small>dự phòng / theo SIM</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm một cách mở khóa.</p></div>
</div>
<p>Phương thức không tương thích chính sách thiết bị bị tắt; chính sách có thể do device admin đặt rõ ràng hoặc <b>ngầm</b> do bật credential storage / FDE.</p>
<h3>PIN/Password: băm và lưu</h3>
<pre># hash = SHA1(pass + saltHex) ‖ MD5(pass + saltHex)
SHA1=$(echo -n '12345fe37a926983d657' | sha1sum ...)
MD5=$( echo -n '12345fe37a926983d657' | md5sum ...)
password.key = SHA1 ‖ MD5   (hex, 72 ký tự)</pre>
<table>
<tr><th>Mục trong locksettings.db</th><th>Ý nghĩa</th></tr>
<tr><td><code>lockscreen.password_salt</code></td><td>Salt 64 bit (Java long)</td></tr>
<tr><td><code>lockscreen.password_type</code></td><td>Hằng PASSWORD_QUALITY (131072 = 0x20000 = NUMERIC)</td></tr>
<tr><td><code>lockscreen.password_type_alternate</code></td><td>Loại phương thức dự phòng (0 = không)</td></tr>
<tr><td><code>lockscreen.passwordhistory</code></td><td>Lịch sử băm (khi history length &gt; 0) – cấm dùng lại</td></tr>
</table>
<ul>
<li><code>saveLockPassword()</code> cập nhật password.key, tính độ phức tạp đặt <code>password_type</code>, và thêm vào lịch sử.</li>
<li>Muối ngẫu nhiên chặn bảng tra chung, nhưng chỉ <b>một lần băm</b> nên bảng riêng cho từng máy (có salt) vẫn rẻ; và tính cả SHA-1 lẫn MD5 <b>không tăng an toàn</b> – chỉ cần nhắm MD5 ngắn hơn.</li>
<li>Đổi PIN/mật khẩu của <b>owner</b> trên máy mã hóa gọi <code>changeEncryptionPassword()</code> của MountService → mã hóa lại khóa đĩa (secondary user không ảnh hưởng).</li>
</ul>
<h3>SIM PIN và PUK</h3>
<ul>
<li>SIM có thể đòi PIN trước khi dùng (khóa xác thực mạng). SIM giữ trạng thái đã mở nên chỉ nhập khi boot. Nhập sai &gt; <b>3 lần</b> → SIM khóa, cần <b>PUK (PUC)</b>.</li>
<li>Luồng: keyguard thấy <code>State.PIN_REQUIRED</code> → hiện view SIM → <code>ITelephony.supplyPinReportResult()</code> → <b>rild</b> → <b>baseband</b> → SIM, mã trạng thái đi ngược lại. PUK dùng <code>supplyPukReportResult()</code>.</li>
<li>Keyguard theo dõi <code>ACTION_SIM_STATE_CHANGED</code>.</li>
</ul>
<h3>Chống brute-force</h3>
<ul>
<li><b>Rate limiting</b>: chờ <b>30 giây</b> sau mỗi <b>5</b> lần sai liên tiếp → chống tấn công online.</li>
<li>Chính sách device admin (chương 9): độ phức tạp, hết hạn, lịch sử, và <code>setMaximumFailedPasswordsForWipe()</code> – tự xóa dữ liệu khi đạt ngưỡng.</li>
</ul>
`},

{id:'adb', icon:'🔌', title:'USB Debugging an toàn (Secure ADB)', html:`
<p>ADB (Android Debug Bridge) cho phép tương tác/debug thiết bị – rất mạnh nên cũng rất nguy hiểm. Thường tắt trên máy tiêu dùng, bật trong cài đặt để phát triển.</p>
<h3>Kiến trúc ADB</h3>
<div class="flow"><div class="node">ADB client<br><small>lệnh adb, IDE</small></div><span class="arr">TCP localhost:5037</span><div class="node hl">ADB server<br><small>trên máy host</small></div><span class="arr">USB / TCP</span><div class="node">adbd<br><small>daemon trên thiết bị</small></div></div>
<ul>
<li><b>ADB server</b> (host): tách client khỏi thiết bị, theo dõi kết nối và trạng thái (<code>CS_CONNECTED</code>, <code>CS_OFFLINE</code>, <code>CS_RECOVERY</code>, <code>CS_UNAUTHORIZED</code>, <code>CS_DEVICE</code>…).</li>
<li><b>adbd</b>: chạy trên thiết bị, cung cấp dịch vụ thật. Client <code>adb</code> cùng binary với server.</li>
<li>Thông điệp transport: header 24 byte (command, arg0, arg1, data_length, data_check = CRC32, magic = command ^ 0xffffffff).</li>
</ul>
<h3>Vì sao cần ADB an toàn?</h3>
<p>ADB cho phép: sao chép tệp, debug app, chạy lệnh shell, lấy log, cài/gỡ app, thậm chí chèn sự kiện chạm và nhập văn bản. <b>Không phụ thuộc khóa màn hình</b>: cắm USB là dùng; máy root thì sửa mọi tệp, kể cả CSDL mật khẩu. Chỉ cần thêm một máy Android khác + cáp <b>USB OTG</b>; công cụ trích xuất dữ liệu có sẵn. Kể cả không root vẫn lấy được ảnh, danh bạ, tin nhắn trên bộ nhớ ngoài.</p>
<ul>
<li>Android 4.2: ẩn <i>Developer options</i>, phải “gõ bí mật” (chạm Build number 7 lần) – chỉ tránh bật nhầm.</li>
<li><b>Android 4.2.2</b>: <b>secure USB debugging</b> – chỉ <b>host được người dùng cho phép</b> mới kết nối adbd. Người dùng phải mở khóa máy và bấm OK trong hộp thoại; có tùy chọn <b>Always allow from this computer</b>. Chỉ hiệu quả khi khóa màn hình đủ mạnh. Máy nhiều người dùng: chỉ hiện cho owner.</li>
</ul>
<h3>Cài đặt xác thực (bật khi <code>ro.adb.secure=1</code>)</h3>
<p>Mới kết nối thiết bị ở trạng thái <code>CS_UNAUTHORIZED</code>, chỉ sang <code>CS_DEVICE</code> sau khi host xác thực bằng khóa RSA:</p>
<div class="stepper" data-stepper>
 <div class="step"><b>Thách thức</b>Thiết bị gửi <code>A_AUTH</code> kiểu <code>ADB_AUTH_TOKEN</code> với <b>20 byte ngẫu nhiên</b> (từ /dev/urandom).</div>
 <div class="step"><b>Host ký</b>Trả <code>A_AUTH</code> kiểu <code>ADB_AUTH_SIGNATURE</code>: chữ ký <b>SHA1withRSA</b> của token bằng một khóa riêng của host.</div>
 <div class="step"><b>Thiết bị kiểm</b>Đúng → gửi <code>A_CNXN</code>, sang <code>CS_DEVICE</code>. Sai (chữ ký sai hoặc chưa có khóa công khai tương ứng) → gửi token mới để host thử lại (chậm dần khi lỗi nhiều).</div>
 <div class="step"><b>Host mới</b>Lần đầu chưa có khóa → host gửi <b>khóa công khai</b> (<code>ADB_AUTH_RSAPUBLICKEY</code>). Thiết bị tính <b>MD5</b> của khóa và hiện trong hộp thoại Allow USB debugging (vân tay để đối chiếu).</div>
 <div class="step"><b>Chuyển lên OS</b>adbd là daemon native nên ghi khóa vào socket cục bộ <code>adbd</code>; thread của hệ thống (khởi động khi bật debugging) nhận thông điệp bắt đầu bằng <code>PK</code>, phân tích, tính MD5, hiện <code>UsbDebuggingActivity</code> (SystemUI).</div>
 <div class="step"><b>Người dùng bấm OK</b>Activity gửi OK cho adbd để kiểm chữ ký. Nếu chọn “Always allow”, khóa công khai được <b>lưu xuống đĩa</b> và tự dùng cho lần sau.</div>
</div>
<ul>
<li>Từ 4.3: <i>Settings → Developer options → Revoke USB debugging authorizations</i> xóa mọi khóa host đã lưu.</li>
<li><code>UsbDeviceManager</code> có phương thức cho phép/từ chối debugging, xóa khóa, bật/tắt adbd – qua <code>IUsbManager</code> của UsbService; đổi trạng thái cần <code>MANAGE_USB</code> (signature).</li>
</ul>
<h3>Khóa xác thực ADB</h3>
<table>
<tr><th>Vị trí</th><th>Nội dung</th></tr>
<tr><td>Host: <code>$HOME/.android/adbkey</code></td><td>Khóa riêng RSA 2048 bit (PEM). Có thể đổi thư mục bằng <code>ANDROID_SDK_HOME</code>; thư mục khác qua <code>ADB_VENDOR_KEYS</code>. Chưa có thì tự sinh.</td></tr>
<tr><td>Host: <code>adbkey.pub</code></td><td>Khóa công khai Base64 dạng mincrypt + <code>user@host</code> (Windows luôn <code>unknown@unknown</code>)</td></tr>
<tr><td>Thiết bị: <code>/data/misc/adb/adb_keys</code></td><td>Các khóa công khai đã được chấp nhận (nối thêm); chủ system, nhóm shell, mode 0640. Khóa “vendor” chỉ-đọc ở <code>/adb_keys</code>.</td></tr>
</table>
<p>Vân tay khóa hiển thị trên máy host có thể tính bằng chuỗi lệnh <code>openssl base64 -d | openssl md5 -c</code> để đối chiếu với hộp thoại – hữu ích khi chạy nhiều máy ảo.</p>
`},

{id:'backup', icon:'💾', title:'Android Backup', html:`
<p>Không hẳn là tính năng bảo mật, nhưng sao lưu cho phép <b>trích dữ liệu ứng dụng ra khỏi thiết bị</b> nên là mối lo bảo mật.</p>
<ul>
<li>Khung backup công bố ở Android 2.2: app khai báo <b>backup agent</b>; hệ thống gọi khi sao lưu/khôi phục dữ liệu app. Có transport pluggable, nhưng thực tế ban đầu chỉ có transport độc quyền lên <b>Google cloud</b>.</li>
</ul>
<div class="compare">
 <div class="mini b"><h4>☁ Cloud backup</h4><p>Gắn với <b>tài khoản Google</b>. Cài app có backup agent trên máy mới + cùng tài khoản → tự khôi phục. Do hệ thống quản lý, người dùng thường không kích hoạt được. Mặc định sao lưu định kỳ, khôi phục khi cài app lần đầu.</p></div>
 <div class="mini g"><h4>💻 Local (full) backup – Android 4.0+</h4><p>Lưu ra tệp trên PC; cần ADB debugging được bật và <b>được cho phép</b> (dữ liệu truyền cùng cách với <code>adb pull</code>).</p></div>
</div>
<h3>Quy trình full backup</h3>
<div class="stepper" data-stepper>
 <div class="step"><b>adb backup</b>Khởi động tiến trình Java trên thiết bị, bind vào <b>BackupManagerService</b> với các tham số.</div>
 <div class="step"><b>Hộp thoại xác nhận</b>Người dùng cho phép và (tùy chọn) đặt <b>mật khẩu mã hóa backup</b>. Nếu thiết bị đã mã hóa phải nhập mật khẩu mã hóa thiết bị – và mật khẩu này được <b>dùng luôn</b> cho backup (không có mật khẩu riêng).</div>
 <div class="step"><b>Gọi backup agent</b>Mỗi gói: dùng agent của app; nếu không có thì dùng <code>FullBackupAgent</code> nội bộ chép mọi tệp. <b>Tôn trọng <code>allowBackup</code></b>: đặt false thì không trích dữ liệu.</div>
 <div class="step"><b>Phạm vi</b>Có thể gồm dữ liệu app, APK (người dùng + hệ thống), nội dung bộ nhớ ngoài (<code>-shared</code>); không gồm app có DRM, bỏ qua một số cài đặt hệ thống (APN, thông tin Wi-Fi).</div>
 <div class="step"><b>Khôi phục</b><code>adb restore</code> – chỉ khôi phục toàn bộ, không có tùy chọn.</div>
</div>
<h3>Định dạng tệp backup</h3>
<pre>ANDROID BACKUP     <span class="c">← magic</span>
1                  <span class="c">← phiên bản (1 tới 4.4.2, 2 sau: đổi cách dẫn xuất khóa cho ký tự đa byte)</span>
1                  <span class="c">← cờ nén</span>
none               <span class="c">← mã hóa: none hoặc AES-256</span></pre>
<ul>
<li>Phần dữ liệu: <b>tar</b> nén <b>deflate</b> (và tùy chọn mã hóa). Giải nén: <code>dd if=x.ab bs=24 skip=1 | openssl zlib -d &gt; x.tar</code>.</li>
<li>Trong tar: <code>apps/&lt;gói&gt;/_manifest</code> · APK ở <code>a/</code> · tệp ở <code>f/</code> · CSDL ở <code>db/</code> · SharedPreferences ở <code>sp/</code> · (<code>shared/</code> nếu có bộ nhớ ngoài).</li>
<li><code>_manifest</code>: tên gói, versionCode, version nền tảng, cờ có APK, <b>chứng chỉ ký</b>. Khi restore, BackupManagerService so chứng chỉ với app đang cài; <b>khác thì bỏ qua APK</b> (trừ gói hệ thống). Thứ tự tệp phải đúng – APK phải ngay sau manifest, nếu không mọi tệp sau bị bỏ qua.</li>
</ul>
<h3>Mã hóa backup</h3>
<div class="stack-explorer">
 <div class="layers">
  <button class="layer" data-c="1" data-title="1) Mật khẩu người dùng" data-desc="<p>Dẫn xuất khóa AES-256 bằng <b>PBKDF2, 10.000 vòng</b>, salt ngẫu nhiên <b>512 bit</b>.</p>"><span>1 · Mật khẩu</span><small>PBKDF2 10.000 vòng</small></button>
  <button class="layer" data-c="2" data-title="2) Khóa AES-256 (user key)" data-desc="<p>Dùng để mã hóa một <b>master key AES-256 ngẫu nhiên</b> khác (cùng IV và checksum – “master key blob”).</p>"><span>2 · Khóa người dùng</span><small>mã hóa master key</small></button>
  <button class="layer" data-c="3" data-title="3) Master key" data-desc="<p>Dùng để mã hóa dữ liệu archive ở chế độ <b>AES/CBC/PKCS5Padding</b>.</p>"><span>3 · Master key</span><small>mã hóa dữ liệu</small></button>
  <button class="layer" data-c="4" data-title="4) Checksum của master key" data-desc="<p>Để kiểm mật khẩu có đúng không trước khi giải mã: ép từng byte master key thành <code>char</code> → coi như mật khẩu → chạy PBKDF2 → byte kết quả là checksum. Khi giải mã master key thì tính lại và so với header; lệch → coi mật khẩu sai, hủy restore.</p><p>⚠ AES key chứa nhiều byte không in được; PKCS#5 không quy định mã hóa chuỗi mật khẩu nên cách tính này cho kết quả <b>phụ thuộc cài đặt và phiên bản</b>.</p>"><span>4 · Checksum</span><small>kiểm mật khẩu</small></button>
 </div>
 <div class="info-panel"><p class="hint">👈 Bấm từng tầng.</p></div>
</div>
<pre>ANDROID BACKUP
1
1
AES-256
&lt;salt mật khẩu (hex)&gt;
&lt;salt checksum (hex)&gt;
10000                      <span class="c">← số vòng PBKDF2</span>
&lt;IV khóa người dùng&gt;
&lt;master key blob&gt;           <span class="c">← len(IV) IV len(MK) MK len(CK) MKck – tất cả đã mã hóa</span></pre>
<h3>Kiểm soát phạm vi backup</h3>
<p>Vì sandbox bảo vệ dữ liệu app nên hầu hết app không mã hóa dữ liệu. Nhưng người dùng hợp pháp <b>và cả kẻ biết mật khẩu mở khóa</b> đều trích được dữ liệu qua full backup. App chứa dữ liệu nhạy cảm nên <b>mã hóa dữ liệu</b> hoặc dùng <b>backup agent</b> giới hạn dữ liệu xuất; hoặc tắt hẳn:</p>
<pre>&lt;application android:allowBackup="<span class="h">false</span>" ... &gt;</pre>
`}

],

cards: [
 {f:'Bootloader làm gì? Fastboot là gì?',b:'Chương trình đặc thù phần cứng chạy khi bật máy: khởi tạo phần cứng rồi tìm/khởi động HĐH. Fastboot/download mode cho flash ảnh phân vùng thô hoặc boot ảnh tạm.'},
 {f:'Cách vào fastboot?',b:'Tổ hợp phím phần cứng lúc boot, hoặc <code>adb reboot bootloader</code>.'},
 {f:'Locked bootloader cho phép gì? Unlock thì sao?',b:'Khóa: cấm flash/boot ảnh hoặc chỉ cho ảnh ký bởi nhà sản xuất. Mở khóa: bỏ hạn chế fastboot và kiểm chữ ký; thường format userdata. Khóa lại bằng cách đặt lại cờ trạng thái (param/misc) nếu máy cho phép.'},
 {f:'Recovery là gì? Vì sao nguy hiểm khi thay recovery tùy biến?',b:'HĐH Linux tối giản áp OTA (kiểm chữ ký nhà sản xuất). Thay recovery tùy biến (qua download mode) → bỏ kiểm chữ ký → thay HĐH, root, đọc phân vùng thô, cài rootkit vào system.'},
 {f:'Vì sao userdata mã hóa vẫn chưa đủ nếu recovery bị thay?',b:'Rootkit cài trong system được dữ liệu giải mã trong suốt khi HĐH chính boot. Cần verified boot với khóa kiểm bất biến trong phần cứng.'},
 {f:'dm-verity là gì?',b:'Target device-mapper kiểm toàn vẹn từng khối khi đọc bằng cây băm (Merkle) tính trước; sai → lỗi I/O. Chỉ cần tin root hash.'},
 {f:'Vì sao dm-verity yêu cầu mount chỉ-đọc?',b:'Hệ tệp ghi metadata (thời gian mount…) vào superblock → khối đổi → kiểm tra hỏng. Hợp với system chỉ-đọc của Android.'},
 {f:'Verity key ở đâu? Dùng để làm gì?',b:'Khóa công khai RSA, tệp <code>verity_key</code> trong boot partition, kiểm chữ ký <b>mapping table</b> (chứa root hash + salt).'},
 {f:'Verity metadata block có gì?',b:'32 KB: magic 0xb001b001 · version · chữ ký RSA 2048 (PKCS#1 v1.5, 256 B) · độ dài bảng · mapping table · đệm 0. Ghi sau khối hệ tệp cuối.'},
 {f:'Cách đánh dấu phân vùng cần verified boot?',b:'Cờ <code>verify</code> trong <code>fs_mgr_flags</code> của fstab; fs_mgr kiểm chữ ký, dựng thiết bị dm-verity ảo và mount thay phân vùng thật.'},
 {f:'Vì sao verified boot chưa phổ biến ở 4.4?',b:'OTA theo tệp làm hỏng cây băm; cần OTA mức khối cập nhật cả cây băm + metadata.'},
 {f:'Kernel phải đáng tin: bằng cách nào?',b:'Bootloader kiểm boot partition bằng khóa kiểm bất biến lưu trong phần cứng; nếu không dm-verity vô nghĩa.'},
 {f:'FDE của Android mã hóa gì? Không mã hóa gì?',b:'Chỉ <b>userdata</b>. boot và system không mã hóa (system có thể kiểm bằng dm-verity). Không bật mặc định.'},
 {f:'Chế độ mã hóa đĩa Android?',b:'dm-crypt, khóa chủ 128 bit ngẫu nhiên, <b>AES-CBC</b> với IV theo sector bằng <b>ESSIV:SHA256</b>.'},
 {f:'ESSIV là gì?',b:'IV(SN) = AES&lt;sub&gt;s&lt;/sub&gt;(SN), s = SHA256(K): IV từng sector phụ thuộc khóa đĩa nên kẻ tấn công không đoán được.'},
 {f:'Điểm yếu của CBC + ESSIV; XTS giải quyết ra sao?',b:'CBC dễ biến đổi (malleable), không xác thực; có tấn công chèn backdoor. XTS dùng tweak theo sector tránh được, nhưng vẫn không xác thực. Android chưa hỗ trợ XTS.'},
 {f:'Master key được bảo vệ thế nào? Crypto footer?',b:'Mã hóa bằng KEK AES-128 dẫn xuất từ mật khẩu. Master key mã hóa + salt + tham số + số lần giải mã sai lưu trong <b>crypto footer</b> (16 KB cuối). Đổi mật khẩu chỉ cần mã hóa lại 16 byte.'},
 {f:'PBKDF2 ở 3.0–4.3 vs scrypt ở 4.4?',b:'PBKDF2: 2000 lần lặp, salt 128-bit, dễ song song hóa. scrypt: memory-hard, N=32768, r=8, p=2 (<code>ro.crypto.scrypt_params</code>=15:3:1). 4.4 tự nâng cấp footer.'},
 {f:'scrypt chậm hơn PBKDF2 bao nhiêu (sách)?',b:'Brute-force PIN 4 số: ~5 ms/PIN với PBKDF2 vs ~230 ms/PIN với scrypt – khoảng 46 lần.'},
 {f:'Mật khẩu mã hóa đĩa và mật khẩu khóa màn hình?',b:'Cùng một mật khẩu: đổi khóa màn hình (owner) cũng đổi mật khẩu mã hóa. Tiện nhưng ép chọn PIN đơn giản; giới hạn 16 ký tự.'},
 {f:'Tấn công online vs offline với lockscreen/FDE?',b:'Online: thử trên máy đang chạy → rate limiting/wipe. Offline: có máy/ảnh đĩa, trích master key và brute-force không bị giới hạn – FDE nhắm vào kịch bản này.'},
 {f:'cryptfs là gì? Ai gọi được?',b:'Module mã hóa của vold: checkpw, restart, cryptocomplete, enablecrypto, changepw, verifypw, getfield, setfield. Chỉ root và system.'},
 {f:'Các thuộc tính điều khiển mã hóa?',b:'<code>ro.crypto.state</code> (encrypted/unencrypted/unsupported), <code>vold.decrypt</code>, <code>vold.encrypt_progress</code>, <code>ro.crypto.fs_crypto_blkdev</code>.'},
 {f:'Vì sao dùng tmpfs ở /data khi mã hóa/khởi động?',b:'Framework cần /data nhưng phải unmount để mã hóa/giải mã → mount tmpfs tạm, rồi thay bằng thiết bị dm-crypt khi xong.'},
 {f:'Các bước bật mã hóa?',b:'enablecrypto inplace → shutdown framework → tmpfs thay /data → restart_min_framework → ghi crypto footer (cờ 0x2 in-progress) → mã hóa từng khối qua dm-crypt → xóa cờ, reboot.'},
 {f:'CryptKeeper là gì?',b:'Activity của Settings làm home screen ưu tiên cao hơn launcher, hiện UI nhập mật khẩu lúc boot, ẩn thanh hệ thống và bỏ qua Back; mã hóa hỏng thì cho factory reset.'},
 {f:'Giới hạn của disk encryption?',b:'Chỉ bảo vệ dữ liệu lúc nghỉ; khi đã mount thì trong suốt với tiến trình → không chống malware đang chạy. App nhạy cảm cần mã hóa theo tệp với mã hóa xác thực (GCM/HMAC).'},
 {f:'Lockscreen/keyguard được bảo vệ khỏi vượt qua thế nào?',b:'Window ở lớp cao app khác không vẽ lên hoặc điều khiển; chặn nút điều hướng. Từ 4.0 thêm cửa sổ ở lớp keyguard cần INTERNAL_SYSTEM_WINDOW (signature).'},
 {f:'Keyguard ở Android 4.4?',b:'Tách thành app hệ thống riêng trong tiến trình systemui; KeyguardHostView + các view; LockPatternUtils kiểm mật khẩu; KeyguardService/IKeyguardService cần CONTROL_KEYGUARD.'},
 {f:'Face Unlock: đặc điểm và điểm yếu?',b:'4.0+, “weak biometric”, PittPatt, gói com.android.facelock. Kém an toàn nhất; cần phương thức dự phòng (pattern hoặc PIN).'},
 {f:'Pattern lock: lưu và điểm yếu?',b:'≥4 điểm trên lưới 3×3; lưu dãy chỉ số 0–8; băm SHA-1 <b>không salt</b> ở gesture.key (0600). Dễ bảng tra, smudge attack, entropy thấp → bị cấm khi dẫn xuất khóa (keystore/FDE).'},
 {f:'PIN/Password hash được tính thế nào?',b:'<code>SHA1(pass+saltHex) ‖ MD5(pass+saltHex)</code>, salt 64 bit; lưu <code>password.key</code>; salt ở <code>locksettings.db</code> (từ 4.2). Chỉ một lần băm → bảng riêng rẻ; thêm MD5 không tăng an toàn.'},
 {f:'locksettings.db chứa gì?',b:'<code>lockscreen.password_salt, password_type, password_type_alternate, passwordhistory</code>. Truy cập qua ILockSettings cần ACCESS_KEYGUARD_SECURE_STORAGE (signature).'},
 {f:'Account mode (Forgot Pattern) rủi ro gì?',b:'Sau >5 lần sai, đăng nhập bằng tài khoản Google trên máy mở được khóa → tài khoản yếu/dùng chung là backdoor. 2FA không dùng được.'},
 {f:'SIM PIN/PUK hoạt động ra sao?',b:'SIM đòi PIN khi boot; sai >3 lần → PUK. PIN đi qua ITelephony → rild → baseband → SIM. SIM nhớ trạng thái đã mở.'},
 {f:'Rate limiting của lockscreen?',b:'Chờ 30 giây sau mỗi 5 lần sai liên tiếp. Thêm: device admin đặt wipe sau N lần sai.'},
 {f:'ADB gồm những thành phần nào?',b:'ADB client (lệnh adb/IDE), ADB server (host, localhost:5037), adbd (daemon trên thiết bị qua USB/TCP).'},
 {f:'Vì sao ADB nguy hiểm?',b:'Không phụ thuộc khóa màn hình; cho copy tệp, shell, log, cài/gỡ app, chèn input; máy root thì sửa mọi tệp. Chỉ cần máy Android khác + cáp OTG.'},
 {f:'Secure USB debugging là gì? Từ bản nào?',b:'Android 4.2.2: chỉ host được người dùng cho phép (hộp thoại, vân tay MD5 của khóa) mới kết nối adbd. Trạng thái CS_UNAUTHORIZED → CS_DEVICE. <code>ro.adb.secure=1</code>.'},
 {f:'Giao thức xác thực ADB?',b:'Thiết bị gửi token 20 byte ngẫu nhiên → host ký SHA1withRSA → thiết bị kiểm; sai thì token mới. Host mới gửi khóa công khai để người dùng chấp nhận.'},
 {f:'Khóa ADB nằm ở đâu?',b:'Host: <code>~/.android/adbkey</code> (riêng, RSA 2048, PEM) + <code>adbkey.pub</code> (mincrypt Base64 + user@host). Thiết bị: <code>/data/misc/adb/adb_keys</code> (0640 system:shell).'},
 {f:'“Always allow from this computer” làm gì? Thu hồi?',b:'Lưu khóa công khai host vào adb_keys. Thu hồi: Settings → Developer options → Revoke USB debugging authorizations (4.3+).'},
 {f:'Cloud backup vs local backup?',b:'Cloud: gắn tài khoản Google, tự động định kỳ, khôi phục khi cài app. Local (4.0+): <code>adb backup</code>, cần ADB được cho phép, ra tệp trên PC.'},
 {f:'allowBackup="false" làm gì?',b:'App tắt hoàn toàn backup – full backup không trích dữ liệu của gói đó.'},
 {f:'Định dạng tệp backup?',b:'Header text (<code>ANDROID BACKUP</code>, version 1/2, cờ nén, none/AES-256…) + tar deflate (tùy mã hóa): apps/&lt;gói&gt;/_manifest, a/ APK, f/ tệp, db/, sp/, shared/.'},
 {f:'Mã hóa backup hoạt động thế nào?',b:'Mật khẩu → PBKDF2 (10.000 vòng, salt 512 bit) → khóa AES-256 → mã hóa master key AES-256 ngẫu nhiên → master key mã hóa dữ liệu (AES/CBC/PKCS5Padding). Có checksum master key để kiểm mật khẩu.'},
 {f:'Khi restore, vì sao kiểm chứng chỉ trong _manifest?',b:'So với app đang cài; khác thì bỏ qua APK (trừ gói hệ thống). Thứ tự tệp phải đúng, APK ngay sau manifest.'}
],

quiz: [
 {q:'Chức năng chính của bootloader là:',o:['Quản lý quyền ứng dụng','Khởi tạo phần cứng và tìm/khởi động HĐH','Mã hóa dữ liệu','Quản lý mạng'],a:1,e:'Chạy ngay khi bật máy.'},
 {q:'Mở khóa bootloader thường kèm theo điều gì?',o:['Giữ nguyên dữ liệu','Format userdata để ảnh lạ không đọc được dữ liệu cũ','Tự động cập nhật','Tắt WiFi'],a:1,e:'Ngoài ra cho flash ảnh không cần ký.'},
 {q:'Vì sao recovery tùy biến nguy hiểm?',o:['Quá chậm','Có thể bỏ kiểm chữ ký OTA, cho thay HĐH, root và cài rootkit vào system','Tăng pin','Xóa dữ liệu ngay'],a:1,e:'Dù userdata đã mã hóa vẫn bị rootkit đọc khi giải mã.'},
 {q:'dm-verity bảo vệ điều gì?',o:['Dữ liệu người dùng khỏi bị đọc','Toàn vẹn phân vùng (vd system) bằng cây băm kiểm từng khối khi đọc','Mạng','Mật khẩu'],a:1,e:'Khối sai → lỗi I/O.'},
 {q:'Chỉ cần tin cậy gì để xác thực cả cây băm?',o:['Mọi nút lá','Root hash','Kích thước đĩa','Tên phân vùng'],a:1,e:'Root hash phụ thuộc mọi nút khác.'},
 {q:'Vì sao phân vùng dùng dm-verity phải mount chỉ-đọc?',o:['Để tiết kiệm pin','Vì hệ tệp ghi metadata (thời gian mount…) làm đổi khối và hỏng kiểm tra','Vì SELinux','Vì ext4 không ghi được'],a:1,e:'Hợp với system chỉ-đọc.'},
 {q:'verity_key nằm ở đâu và dùng để kiểm gì?',o:['Trong system, kiểm APK','Trong boot partition, kiểm chữ ký mapping table chứa root hash','Trong userdata','Trong recovery'],a:1,e:'Khóa RSA định dạng mincrypt.'},
 {q:'Cờ nào trong fstab bật xác minh dm-verity cho phân vùng?',o:['encryptable','verify','ro','wait'],a:1,e:'Cờ verify ở fs_mgr_flags.'},
 {q:'Vì sao verified boot chưa triển khai rộng ở 4.4?',o:['Quá tốn pin','OTA theo tệp làm hỏng cây băm; cần OTA mức khối','Không có kernel hỗ trợ','Bị cấm'],a:1,e:'Cần đổi hạ tầng OTA.'},
 {q:'Android FDE mã hóa phân vùng nào?',o:['boot','system','userdata','recovery'],a:2,e:'boot và system không mã hóa.'},
 {q:'Chế độ mã hóa đĩa của Android là:',o:['AES-XTS','AES-CBC với IV theo sector ESSIV:SHA256 (dm-crypt, khóa 128 bit)','RC4','DES-ECB'],a:1,e:'XTS chưa được hỗ trợ.'},
 {q:'Điểm yếu của CBC/ESSIV trong mã hóa đĩa là:',o:['Không có IV','Dễ biến đổi (malleable), không bảo đảm toàn vẹn','Quá chậm','Không dùng được AES'],a:1,e:'Tấn công đã được chứng minh trên LUKS CBC.'},
 {q:'Vì sao đổi mật khẩu mã hóa đĩa rất nhanh?',o:['Vì dùng hash','Vì chỉ cần mã hóa lại master key 16 byte bằng KEK mới','Vì không cần mật khẩu','Vì dùng phần cứng'],a:1,e:'Dữ liệu đĩa không phải mã hóa lại.'},
 {q:'Crypto footer nằm ở đâu theo mặc định cờ footer?',o:['Đầu phân vùng','16 KB cuối phân vùng userdata','Trong boot','Trong RAM'],a:1,e:'Có thể ở phân vùng/tệp riêng theo fstab.'},
 {q:'scrypt khác PBKDF2 ở điểm then chốt:',o:['Nhanh hơn','Memory-hard, khó song song hóa trên GPU/ASIC','Không cần salt','Dùng RSA'],a:1,e:'4.4 chuyển sang scrypt (N=32768, r=8, p=2).'},
 {q:'Theo sách, brute-force PIN 4 số: PBKDF2 so với scrypt',o:['Giống nhau','PBKDF2 ~5 ms/PIN, scrypt ~230 ms/PIN (khoảng 46×)','scrypt nhanh hơn','Không đo được'],a:1,e:'Do đó scrypt đắt hơn nhiều cho kẻ tấn công.'},
 {q:'Hệ quả của việc dùng chung mật khẩu khóa màn hình và mật khẩu mã hóa là gì?',o:['An toàn hơn','Ép chọn mật khẩu đơn giản (gõ nhiều lần/ngày); đổi khóa màn hình cũng đổi mật khẩu mã hóa; giới hạn 16 ký tự','Không có hệ quả','Tắt mã hóa'],a:1,e:'Đánh đổi tiện lợi lấy an toàn.'},
 {q:'FDE nhắm bảo vệ khỏi kịch bản nào?',o:['Malware đang chạy','Kẻ có máy/ảnh đĩa brute-force offline','Phishing','XSS'],a:1,e:'Khi đã mount, dữ liệu trong suốt với tiến trình.'},
 {q:'Vì sao vold mount tmpfs tại /data khi mã hóa/giải mã?',o:['Để tăng tốc','Vì framework cần /data nhưng phải unmount để mã hóa','Để lưu khóa','Để log'],a:1,e:'Catch-22 của Android.'},
 {q:'CryptKeeper là:',o:['Một thuật toán','Activity ưu tiên cao hơn launcher để nhập mật khẩu khi boot máy mã hóa','Daemon mã hóa','Thư viện'],a:1,e:'Ẩn thanh hệ thống, bỏ qua Back.'},
 {q:'Cờ CRYPT_ENCRYPTION_IN_PROGRESS (0x2) cho biết:',o:['Mã hóa xong','Mã hóa đã bắt đầu nhưng chưa hoàn tất','Đã giải mã','Có lỗi mật khẩu'],a:1,e:'Cryptocomplete kiểm cờ này.'},
 {q:'Giới hạn lớn của FDE là:',o:['Chỉ chạy trên tablet','Chỉ bảo vệ dữ liệu lúc nghỉ, không chống malware đang chạy','Không dùng AES','Cần root'],a:1,e:'App nhạy cảm nên tự mã hóa theo tệp.'},
 {q:'Pattern lock lưu dạng nào?',o:['Plaintext','SHA-1 không salt trong gesture.key','SHA-256 có salt','bcrypt'],a:1,e:'Dễ có bảng tra sẵn nếu lấy được tệp.'},
 {q:'Smudge attack là gì?',o:['Tấn công mạng','Suy ra pattern từ vệt tay trên màn hình','Tấn công USB','Sửa tệp'],a:1,e:'Một lý do pattern được coi là mức bảo vệ rất thấp.'},
 {q:'Vì sao pattern bị cấm khi mật khẩu dùng để dẫn xuất khóa (FDE, keystore)?',o:['Vì chậm','Vì ít tổ hợp → entropy kém','Vì không có hash','Vì cần SIM'],a:1,e:'Không đủ làm nguồn khóa.'},
 {q:'Hash PIN/Password của Android là:',o:['bcrypt','SHA-1 ‖ MD5 của (mật khẩu + salt 64 bit)','PBKDF2 10.000 vòng','scrypt'],a:1,e:'Chỉ một lần băm → bảng riêng cho từng máy vẫn rẻ.'},
 {q:'Salt của PIN/Password ở Android 4.4 lưu ở đâu?',o:['password.key','locksettings.db (lockscreen.password_salt)','gesture.key','SIM'],a:1,e:'Trước 4.2 ở SettingsProvider.'},
 {q:'“Forgot Pattern” (Account mode) tiềm ẩn rủi ro gì?',o:['Mất dữ liệu','Tài khoản Google yếu/dùng chung trên máy là backdoor mở khóa','Tắt mạng','Cần root'],a:1,e:'Tài khoản 2FA không dùng được.'},
 {q:'Rate limiting của lockscreen là:',o:['Wipe sau lần sai đầu','Chờ 30 giây sau mỗi 5 lần sai liên tiếp','Khóa vĩnh viễn','Gửi SMS'],a:1,e:'Chống tấn công online.'},
 {q:'Secure USB debugging ra đời ở phiên bản:',o:['4.0','4.2.2','4.4','5.0'],a:1,e:'Trước đó 4.2 chỉ ẩn Developer options.'},
 {q:'Trong xác thực ADB, thiết bị gửi gì cho host đầu tiên?',o:['Khóa riêng','Token ngẫu nhiên 20 byte (ADB_AUTH_TOKEN)','Mật khẩu','Chứng chỉ'],a:1,e:'Host ký SHA1withRSA và gửi lại.'},
 {q:'Hộp thoại Allow USB debugging hiển thị gì để người dùng đối chiếu?',o:['SHA-256 chứng chỉ','MD5 vân tay khóa công khai của host','IP host','Tên người dùng'],a:1,e:'Có thể tính trên host bằng openssl md5 -c.'},
 {q:'Khóa công khai host được chấp nhận lưu ở:',o:['/sdcard','/data/misc/adb/adb_keys (0640 system:shell)','/system','boot'],a:1,e:'Revoke authorizations (4.3+) xóa chúng.'},
 {q:'Full backup qua adb backup yêu cầu:',o:['Root','ADB debugging được bật và được cho phép; người dùng xác nhận trên thiết bị','Wi-Fi','Cài app đặc biệt'],a:1,e:'Dữ liệu truyền cùng cách adb pull.'},
 {q:'Nếu thiết bị đã mã hóa, mật khẩu mã hóa backup là:',o:['Mật khẩu riêng tùy chọn','Chính mật khẩu mã hóa thiết bị (không hỗ trợ mật khẩu backup riêng)','Không có','PIN SIM'],a:1,e:'Theo mô tả của sách.'},
 {q:'Cách ngăn dữ liệu của app bị trích qua full backup:',o:['Đặt exported=false','android:allowBackup="false" hoặc mã hóa dữ liệu/backup agent giới hạn','Xóa APK','Tắt SELinux'],a:1,e:'Full backup tôn trọng allowBackup.'},
 {q:'Mã hóa backup dùng PBKDF2 với bao nhiêu vòng?',o:['2.000','8.192','10.000','100'],a:2,e:'PBKDF2 10.000 vòng, salt 512 bit. Keystore: 8.192; FDE 3.0–4.3: 2.000.'}
],

order: [
 {id:'o-fde',title:'Bật mã hóa đĩa',intro:'Sắp xếp các bước đúng thứ tự.',
  items:['Settings gọi MountService → cryptfs enablecrypto inplace &lt;password&gt;','vold đặt vold.decrypt=trigger_shutdown_framework và dừng hầu hết dịch vụ','vold unmount /data và mount tmpfs tạm; đặt encrypt_progress=0, trigger_restart_min_framework','vold dựng thiết bị dm-crypt và ghi crypto footer (cờ IN_PROGRESS 0x2)','Đọc từng khối userdata và ghi qua dm-crypt để mã hóa tại chỗ','Xóa cờ IN_PROGRESS và reboot'],
  explain:'Cần tmpfs thay /data để giải bài toán catch-22.'},
 {id:'o-boot',title:'Khởi động máy đã mã hóa',intro:'Sắp xếp theo thứ tự.',
  items:['Khởi động framework tối thiểu với tmpfs ở /data; vold.decrypt=1','cryptfs cryptocomplete kiểm footer','CryptKeeper hiện UI nhập mật khẩu','cryptfs checkpw: vold thử mount ở điểm tạm; đúng thì đặt ro.crypto.fs_crypto_blkdev','cryptfs restart: khởi động lại lớp main, mount dm-crypt tại /data','trigger_post_fs_data → post_fs_data_done=1 → trigger_restart_framework'],
  explain:'Mật khẩu → mount /data thật → khởi động đầy đủ.'},
 {id:'o-adb',title:'Xác thực ADB cho host mới',intro:'Sắp xếp theo thứ tự.',
  items:['Host kết nối; thiết bị ở CS_UNAUTHORIZED, gửi ADB_AUTH_TOKEN 20 byte','Host ký token bằng khóa riêng (SHA1withRSA) – thiết bị chưa có khóa công khai nên kiểm sai','Host gửi ADB_AUTH_RSAPUBLICKEY','adbd chuyển khóa qua socket adbd; hệ thống tính MD5 và hiện hộp thoại','Người dùng bấm OK (có thể Always allow → lưu khóa vào adb_keys)','Thiết bị kiểm chữ ký thành công → A_CNXN → CS_DEVICE'],
  explain:'Người dùng chấp nhận khóa lần đầu (TOFU).'}
],

classify: [
 {id:'c-unlock',title:'Phương thức mở khóa nào?',intro:'Gán đặc điểm.',buckets:['Pattern','PIN/Password','Face Unlock','Account (dự phòng)'],
  items:[
   {t:'SHA-1 không salt trong gesture.key',b:0},{t:'SHA1‖MD5 với salt 64 bit',b:1},{t:'Dựa trên PittPatt, kém an toàn nhất',b:2},
   {t:'Dùng tài khoản Google để mở khi quên',b:3},{t:'Smudge attack',b:0},{t:'Có lịch sử mật khẩu trong locksettings.db',b:1}],
  explain:'Mỗi phương thức có cách lưu và điểm yếu riêng.'},
 {id:'c-kdf',title:'Hàm dẫn xuất khóa nào, ở đâu?',intro:'Gán cơ chế và số vòng với nơi dùng.',buckets:['Keystore master key (8192)','FDE 3.0–4.3 (PBKDF2 2000)','FDE 4.4 (scrypt)','Backup (10.000)'],
  items:[
   {t:'PBKDF2, 8192 lần lặp, salt 128-bit, AES-128 master key',b:0},{t:'PBKDF2, 2000 lần lặp, salt 128-bit',b:1},{t:'Memory-hard, N=32768 r=8 p=2',b:2},
   {t:'PBKDF2 10.000 vòng, salt 512-bit, AES-256',b:3},{t:'Nâng cấp tự động từ PBKDF2 sang footer mới',b:2},{t:'Lưu trong crypto footer 16 KB cuối',b:1}],
  explain:'Nhớ con số: 2000 → 8192 → 10.000 và scrypt.'},
 {id:'c-prop',title:'Thuộc tính / tệp nào?',intro:'Gán mỗi mục cho đúng chức năng.',buckets:['verified boot','mã hóa đĩa','màn hình khóa','ADB'],
  items:[
   {t:'verity_key',b:0},{t:'ro.crypto.state',b:1},{t:'password.key',b:2},{t:'ro.adb.secure',b:3},
   {t:'cờ verify trong fstab',b:0},{t:'vold.decrypt',b:1},{t:'locksettings.db',b:2},{t:'adb_keys',b:3}],
  explain:'Mỗi chủ đề có tệp/thuộc tính nhận diện riêng.'}
],

cheat: [
 {title:'🥾 Boot',html:'<ul><li>Bootloader: fastboot, locked/unlocked</li><li>Mở khóa → format userdata</li><li>Recovery tùy biến → rootkit</li><li>Cần khóa kiểm bất biến trong phần cứng</li></ul>'},
 {title:'✅ dm-verity',html:'<div class="mnemo">Cây băm · root hash · read-only</div><ul><li>verity_key (boot) kiểm mapping table</li><li>Metadata 32 KB sau hệ tệp; cờ verify</li><li>OTA mức khối mới tương thích</li></ul>'},
 {title:'🔐 FDE',html:'<ul><li>userdata; dm-crypt; AES-CBC + ESSIV</li><li>Master key 128 bit + KEK từ mật khẩu</li><li>PBKDF2 2000 → scrypt (4.4)</li><li>Crypto footer 16 KB</li><li>Mật khẩu = khóa màn hình (≤16 ký tự)</li></ul>'},
 {title:'⚙ cryptfs/vold',html:'<ul><li>vold.decrypt triggers</li><li>tmpfs thay /data</li><li>CryptKeeper, checkpw, restart</li><li>post-fs-data → restart_framework</li></ul>'},
 {title:'🔒 Lockscreen',html:'<ul><li>Pattern: SHA-1 không salt</li><li>PIN/Pass: SHA1‖MD5 + salt 64 bit</li><li>Face: yếu nhất; Account: backdoor</li><li>30 giây / 5 lần sai</li><li>SIM PIN → PUK (3 lần)</li></ul>'},
 {title:'🔌 Secure ADB',html:'<ul><li>4.2.2; token 20 byte → SHA1withRSA</li><li>Hộp thoại MD5 vân tay</li><li>adb_keys; revoke (4.3)</li><li>CS_UNAUTHORIZED → CS_DEVICE</li></ul>'},
 {title:'💾 Backup',html:'<ul><li>Cloud (Google) vs local adb backup (4.0)</li><li>allowBackup=false</li><li>tar deflate; PBKDF2 10.000 + AES-256</li><li>_manifest kiểm chứng chỉ</li></ul>'}
]
};
