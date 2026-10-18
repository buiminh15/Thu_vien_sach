CH[13] = {
sections: [

{id:'intro', icon:'🚪', title:'Vì sao cần “thoát” khỏi mô hình bảo mật?', html:`
<p>Chương này rẽ sang hướng khác: các phương pháp <b>vượt qua</b> mô hình bảo mật của Android. Để <b>cập nhật toàn bộ HĐH</b> hoặc <b>khôi phục cài đặt gốc</b>, phải thoát khỏi sandbox và có truy cập đầy đủ vào thiết bị, vì ngay cả thành phần đặc quyền nhất của Android cũng không được toàn quyền với mọi phân vùng và thiết bị lưu trữ.</p>
<p>Chạy <b>root</b> lúc runtime thì trái thiết kế bảo mật, nhưng hữu ích để làm những thứ Android không cung cấp (luật tường lửa tùy biến, backup toàn bộ kể cả system). Sự phong phú của <b>ROM tùy biến</b> và <b>root app</b> là một lý do Android thành công.</p>
<div class="flow"><div class="node">Bootloader<br><small>fastboot</small></div><span class="arr">→</span><div class="node">Recovery<br><small>OTA, wipe</small></div><span class="arr">→</span><div class="node hl">Root<br><small>eng build, su, ROM, exploit</small></div></div>
`},

{id:'bootloader', icon:'🥾', title:'Bootloader: mở khóa và fastboot', html:`
<p>Bootloader là chương trình cấp thấp chạy khi bật máy: khởi tạo phần cứng, tìm và khởi động HĐH chính. Như chương 10: bootloader thường <b>khóa</b>, chỉ cho boot/cài ảnh <b>ký bởi nhà sản xuất</b> – bước then chốt của <b>verified boot path</b>. Nhưng cài ROM bên thứ ba là lựa chọn hợp lệ, thậm chí là cách duy nhất chạy Android mới trên máy hết được cập nhật → đa số máy có cách mở khóa.</p>
<div class="callout c-info"><b>Little Kernel (LK)</b>Bootloader hầu hết máy ARM dùng SoC Qualcomm xuất phát từ LK (mã nguồn mở).</div>
<h3>Mở khóa trên Nexus</h3>
<ul>
<li>Chạy <code>fastboot oem unlock</code> khi máy ở <b>fastboot mode</b>. Vào fastboot: <code>adb reboot bootloader</code> hoặc tổ hợp phím lúc boot (Nexus 5: giữ Vol down + Vol up + Power khi tắt máy).</li>
<li>Bootloader có UI đơn giản (Vol up/down, Power): tiếp tục boot, khởi động lại fastboot/recovery, tắt máy.</li>
<li>Màn hình xác nhận cảnh báo: cho phép cài bản build chưa kiểm chứng và <b>xóa toàn bộ dữ liệu người dùng</b> – biện pháp bảo mật quan trọng vì ROM lạ có thể không theo mô hình bảo mật Android và đọc được dữ liệu cũ.</li>
<li>Khóa lại: <code>fastboot oem lock</code> → trở lại trạng thái gốc, không nạp/boot ảnh bên thứ ba.</li>
<li>Một số bootloader có thêm cờ <b>“tampered”</b> đặt từ lần mở khóa đầu tiên → có thể biết máy từng được mở khóa, cấm một số thao tác hay hiện cảnh báo dù đang khóa.</li>
</ul>
<h3>Bố cục phân vùng Android</h3>
<p>Fastboot gọi phân vùng theo <b>tên</b> (không phải tệp thiết bị Linux). Liệt kê trong <code>/dev/block/platform/&lt;SoC&gt;/by-name/</code> (Nexus 5: <code>msm_sdcc.1</code>, 29 phân vùng):</p>
<div data-chipinfo>
 <div class="chips">
  <button class="chip" data-info="<h4>aboot</h4><p>Bootloader của Android.</p>">aboot</button>
  <button class="chip" data-info="<h4>sbl1</h4><p>Bootloader giai đoạn hai (second stage).</p>">sbl1</button>
  <button class="chip" data-info="<h4>modem</h4><p>Phần mềm baseband.</p>">modem</button>
  <button class="chip" data-info="<h4>boot</h4><p>Kernel + ảnh RAM disk rootfs (nơi lưu cả verity_key).</p>">boot</button>
  <button class="chip" data-info="<h4>system</h4><p>Mọi tệp hệ thống khác (chỉ-đọc).</p>">system</button>
  <button class="chip" data-info="<h4>userdata</h4><p>Tệp người dùng, dữ liệu app.</p>">userdata</button>
  <button class="chip" data-info="<h4>cache</h4><p>Tệp tạm: ảnh OTA tải về, <b>lệnh và log của recovery</b>.</p>">cache</button>
  <button class="chip" data-info="<h4>recovery</h4><p>Ảnh HĐH recovery.</p>">recovery</button>
  <button class="chip" data-info="<h4>misc</h4><p>Chứa <b>BCB</b> (bootloader control block) – liên lạc giữa recovery và bootloader.</p>">misc</button>
 </div>
 <div class="info-panel chipout"><p class="hint">Chọn một phân vùng.</p></div>
</div>
<h3>Giao thức fastboot</h3>
<ul>
<li>Qua <b>USB</b>, do <b>host điều khiển</b>: host gửi lệnh dạng văn bản và dữ liệu qua USB bulk transfer. Bootloader trả: <code>OKAY</code>, <code>FAIL</code>, <code>INFO …</code>, hoặc <code>DATA</code> (sẵn sàng nhận dữ liệu).</li>
<li>Mục đích ban đầu: xóa/ghi phân vùng bằng ảnh – hữu ích khi <b>bring-up thiết bị mới</b> hoặc khôi phục về mặc định.</li>
</ul>
<table>
<tr><th>Lệnh</th><th>Chức năng</th></tr>
<tr><td><code>devices</code></td><td>Liệt kê thiết bị ở fastboot</td></tr>
<tr><td><code>getvar &lt;tên&gt;</code></td><td>Thông tin bootloader (vd version-bootloader, version-baseband)</td></tr>
<tr><td><code>continue</code> · <code>reboot</code> · <code>reboot-bootloader</code></td><td>Khởi động lại theo các chế độ</td></tr>
<tr><td><code>erase</code> / <code>format</code></td><td>Xóa/định dạng phân vùng</td></tr>
<tr><td><code>flash &lt;partition&gt; &lt;image&gt;</code></td><td>Ghi một ảnh vào một phân vùng</td></tr>
<tr><td><code>update &lt;zip&gt;</code></td><td>Ghi nhiều ảnh trong tệp ZIP</td></tr>
<tr><td><code>flashall</code></td><td>Ghi boot.img, system.img, recovery.img ở thư mục hiện tại</td></tr>
<tr><td><code>flash:raw boot kernel ramdisk</code></td><td>Tự tạo boot image từ kernel + ramdisk rồi flash</td></tr>
<tr><td><code>boot &lt;image&gt;</code></td><td>Boot ảnh <b>không ghi</b> xuống thiết bị</td></tr>
<tr><td><code>oem unlock</code> / <code>oem lock</code></td><td>Mở/khóa bootloader</td></tr>
</table>
<pre>$ fastboot boot custom-recovery.img
downloading 'boot.img'...  OKAY [0.577s]
booting...
FAILED (remote: not supported in locked device)</pre>
<div class="callout c-warn"><b>Bootloader khóa</b>cấm các lệnh <b>sửa phân vùng</b> (flash…) và lệnh <b>boot kernel tùy biến</b> (<code>boot</code>).</div>
`},

{id:'recovery', icon:'🛟', title:'Recovery: cập nhật hệ thống & wipe', html:`
<p>Recovery OS (recovery console) là HĐH tối giản dùng cho việc Android chính không thể tự làm: <b>factory reset</b> (xóa userdata) hoặc <b>áp OTA</b>. Vào bằng tổ hợp phím lúc boot, hoặc <code>adb reboot recovery</code>; một số bootloader có menu để chọn.</p>
<h3>Stock recovery</h3>
<p>Làm đủ để đáp ứng CDD (“Updatable Software”): phải có cơ chế <b>thay toàn bộ phần mềm hệ thống</b> và cập nhật <b>không xóa dữ liệu người dùng</b>. CDD không quy định cơ chế cụ thể; stock recovery hỗ trợ:</p>
<div class="compare">
 <div class="mini b"><h4>OTA update</h4><p>HĐH chính tải gói và yêu cầu recovery áp dụng; sau khi người dùng đồng ý trong Android thì chạy tự động, không tương tác thêm.</p></div>
 <div class="mini g"><h4>Tethered update (sideload)</h4><p>Tải gói về PC rồi đẩy vào recovery: <code>adb sideload ota.zip</code>. Cách cập nhật thật sự giống nhau; chỉ khác cách lấy gói.</p></div>
</div>
<p>Menu (ẩn mặc định, hiện bằng tổ hợp phím, ví dụ Power + Vol down) có 4 mục: <b>reboot · apply update from ADB · factory reset · wipe cache partition</b>. Không có mục áp OTA vì HĐH chính gửi lệnh tự thực thi khi recovery khởi động.</p>
<h3>Điều khiển recovery từ HĐH chính</h3>
<p><code>android.os.RecoverySystem</code> ghi các chuỗi tùy chọn (mỗi dòng một cái) vào <code>/cache/recovery/command</code>; binary <code>/sbin/recovery</code> đọc khi recovery khởi động (từ init.rc).</p>
<table>
<tr><th>Tùy chọn</th><th>Mô tả</th></tr>
<tr><td><code>--update_package=&lt;path&gt;</code></td><td>Xác minh và cài gói OTA</td></tr>
<tr><td><code>--wipe_data</code></td><td>Xóa userdata và cache rồi reboot</td></tr>
<tr><td><code>--wipe_cache</code></td><td>Xóa cache rồi reboot</td></tr>
<tr><td><code>--send_intent=&lt;str&gt;</code></td><td>Lưu một intent action để báo lại HĐH chính khi xong</td></tr>
<tr><td><code>--show_text</code> · <code>--just_exit</code> · <code>--locale</code> · <code>--stages</code></td><td>Hiển thị thông báo · thoát/reboot · ngôn ngữ · đặt giai đoạn cài</td></tr>
</table>
<h3>BCB – Bootloader Control Block</h3>
<p>Để lệnh luôn được hoàn tất, recovery chép tham số vào <b>BCB</b> trên phân vùng <code>misc</code>, dùng báo trạng thái cho bootloader:</p>
<pre>struct bootloader_message {
  char command[32];    <span class="c">← lệnh cho bootloader (vd "boot-recovery")</span>
  char status[32];     <span class="c">← bootloader ghi sau thao tác riêng nền tảng</span>
  char recovery[768];  <span class="c">← tùy chọn cho recovery (--update_package, --wipe_data…)</span>
  char stage[32];      <span class="c">← giai đoạn cài OTA nhiều lần reboot, vd "2/3"</span>
  char reserved[224];
};</pre>
<ul>
<li>Mất điện/reboot giữa chừng → lần boot sau bootloader thấy BCB chứa <code>boot-recovery</code> và <b>khởi động lại recovery</b>.</li>
<li>Thành công → recovery <b>xóa BCB</b> (đặt mọi byte 0) trước khi thoát, lần sau boot Android bình thường.</li>
</ul>
<h3>Sideload OTA</h3>
<p>Chọn “apply update from ADB” → khởi động bản adbd rút gọn chỉ hỗ trợ <code>sideload</code>. <code>adb sideload file.zip</code> chuyển tệp vào <code>/tmp/update.zip</code> rồi cài.</p>
<h3>Xác minh chữ ký OTA</h3>
<p>OTA được ký <b>trên toàn tệp</b> (khác JAR/APK ký từng tệp – chương 3).</p>
<ul>
<li><b>HĐH chính</b>: <code>RecoverySystem.verifyPackage()</code> nhận đường dẫn gói + ZIP chứa danh sách chứng chỉ X.509 được phép ký OTA (mặc định <code>/system/etc/security/otacerts.zip</code>). Ký bằng khóa của một chứng chỉ trong đó → hợp lệ → reboot vào recovery.</li>
<li><b>Recovery</b> xác minh lại <b>độc lập</b> (chống gói bị thay trước khi vào recovery) bằng tập khóa công khai <b>dựng sẵn trong ảnh recovery</b>: trích từ chứng chỉ OTA, đổi sang định dạng mincrypt bằng <code>DumpPublicKey</code>, ghi vào <code>/res/keys</code>.</li>
</ul>
<pre>{64,0xc926ad21,{...},{...}},         <span class="c">v1 (ngầm): e=3, SHA-1</span>
v2 {64,0x8d5069fb,{...},{...}},      <span class="c">v2: e=65537, SHA-1</span></pre>
<p>Thuật toán hỗ trợ: RSA-2048 với SHA-1 (khóa v1, v2) hoặc SHA-256 (v3, v4); ECDSA SHA-256 với P-256 (v5, có ở nhánh master).</p>
`},

{id:'update', icon:'📦', title:'Quy trình cập nhật: update-binary & edify', html:`
<p>Chữ ký hợp lệ → recovery thực hiện lệnh cập nhật trong gói OTA:</p>
<pre>.
├── META-INF/
│   ├── CERT.RSA  CERT.SF  MANIFEST.MF
│   └── com/
│       ├── android/ metadata  otacert
│       └── google/android/ <span class="h">update-binary</span>  <span class="h">updater-script</span>
├── patch/  boot.img.p  system/…    <span class="c">← bản vá nhị phân (bsdiff)</span>
├── radio.img.p
├── recovery/  etc/install-recovery.sh  recovery-from-boot.p
└── system/ …                       <span class="c">← tệp mới (nếu có)</span></pre>
<div class="stepper" data-stepper>
 <div class="step"><b>Trích update-binary</b>Recovery chép <code>update-binary</code> từ OTA ra <code>/tmp/update_binary</code> và chạy với 3 tham số: <b>phiên bản API recovery</b> (3), <b>file descriptor của pipe</b> để báo tiến độ/thông điệp về recovery, và <b>đường dẫn gói OTA</b>.</div>
 <div class="step"><b>Đánh giá updater-script</b>update-binary trích <code>META-INF/com/google/android/updater-script</code> và đánh giá nó. Ngôn ngữ <b>edify</b> (từ 1.6; trước là <b>amend</b>): có <code>if/else</code> đơn giản, mở rộng bằng hàm (hàm cũng có thể là cấu trúc điều khiển).</div>
 <div class="step"><b>Kiểm tra điều kiện</b>mount system; <b>kiểm thiết bị + bản build</b> (<code>ro.build.fingerprint</code>, <code>ro.product.device</code>) – cài sai bản có thể gây “soft brick” (khôi phục bằng flash lại mọi phân vùng), “hard brick” thì không cứu được.</div>
 <div class="step"><b>apply_patch_check</b>OTA thường chỉ chứa <b>bản vá nhị phân</b> so với phiên bản cũ nên chỉ thành công nếu mỗi tệp cần vá <b>đúng như bản dùng tạo patch</b> → kiểm băm trước. Cũng kiểm phân vùng không có hệ tệp (boot, modem); sai thì <code>abort</code>.</div>
 <div class="step"><b>Xóa và vá</b>Xóa tệp không cần/sẽ thay hoàn toàn, vá tệp hệ thống, vá phân vùng boot, giải nén recovery mới vào <code>/system</code>.</div>
 <div class="step"><b>Quyền & nhãn</b><code>set_metadata_recursive</code> đặt chủ, nhóm, quyền, file capabilities và <b>nhãn SELinux</b> (mở rộng từ 4.3) – để luật truy cập có hiệu lực.</div>
 <div class="step"><b>Baseband & kết thúc</b>Vá modem; <code>unmount("/system")</code>. Recovery xóa cache nếu có <code>--wipe_cache</code>, chép log ra <code>/cache/recovery/</code>, <b>xóa BCB</b> và reboot.</div>
</div>
<p>Lỗi giữa chừng → recovery báo và nhắc reboot; vì <b>BCB chưa xóa</b>, máy tự vào lại recovery và <b>cài lại từ đầu</b>.</p>
<h3>Các hàm edify quan trọng</h3>
<table>
<tr><th>Hàm</th><th>Chức năng</th></tr>
<tr><td><code>abort</code></td><td>Hủy cài đặt với thông báo lỗi</td></tr>
<tr><td><code>assert</code></td><td>Kiểm điều kiện đúng</td></tr>
<tr><td><code>apply_patch</code> / <code>apply_patch_check</code></td><td>Vá nhị phân an toàn (đảm bảo băm kết quả đúng) / kiểm băm tệp; có thể vá cả phân vùng đĩa</td></tr>
<tr><td><code>delete</code> / <code>delete_recursive</code></td><td>Xóa tệp / thư mục</td></tr>
<tr><td><code>file_getprop</code> · <code>getprop</code></td><td>Đọc property từ tệp · từ hệ thống</td></tr>
<tr><td><code>format</code> · <code>mount</code> · <code>umount</code></td><td>Định dạng · mount · unmount volume</td></tr>
<tr><td><code>package_extract_dir</code> / <code>package_extract_file</code></td><td>Giải nén thư mục/tệp từ gói OTA</td></tr>
<tr><td><code>run_program</code></td><td>Chạy chương trình ở tiến trình con</td></tr>
<tr><td><code>set_metadata</code> / <code>set_metadata_recursive</code></td><td>Đặt chủ, nhóm, quyền, capabilities, SELinux label</td></tr>
<tr><td><code>symlink</code> · <code>write_raw_image</code></td><td>Tạo symlink · ghi ảnh thô vào phân vùng</td></tr>
<tr><td><code>show_progress</code> · <code>ui_print</code></td><td>Báo tiến độ · gửi thông điệp cho recovery</td></tr>
</table>
<pre>getprop("ro.product.device") == "hammerhead" || abort("This package is for \\"hammerhead\\" devices...");
apply_patch_check("/system/app/BasicDreams.apk", "f687...", "fdc5...") || abort("... unexpected contents.");
apply_patch("/system/app/BasicDreams.apk", "-", ..., package_extract_file("patch/system/app/BasicDreams.apk.p"));
set_metadata_recursive("/system", "uid", 0, "gid", 0, "dmode", 0755, "fmode", 0644, "selabel", "u:object_r:system_file:s0");
unmount("/system");</pre>
<h3>Vì sao recovery không tự cập nhật ngay?</h3>
<p>Cập nhật có thể bị ngắt bất cứ lúc nào và phải <b>khởi động lại từ cùng trạng thái ban đầu</b>. Nếu mất điện khi đang ghi phân vùng recovery thì trạng thái thay đổi và có thể làm máy hỏng. Vì vậy script chỉ <b>giải nén</b> bản vá recovery mà <b>không áp</b>; recovery được cập nhật từ HĐH chính <b>sau khi</b> bản HĐH mới boot thành công.</p>
<pre>service flash_recovery /system/etc/install-recovery.sh
    class main
    oneshot</pre>
<p><code>install-recovery.sh</code> dùng <code>applypatch -c</code> kiểm băm phân vùng recovery: khớp bản gốc thì <code>applypatch</code> áp bản vá (tạo recovery mới từ boot image + <code>recovery-from-boot.p</code>); đã cập nhật hoặc băm lạ thì chỉ ghi log và thoát.</p>
<div class="callout c-tip"><b>🧠 Mẹo nhớ</b><div class="mnemo">Ký → update-binary → edify → kiểm băm → vá → nhãn → xóa BCB</div></div>
`},

{id:'custom-recovery', icon:'🛠', title:'Custom recovery (TWRP)', html:`
<p>Custom recovery do bên thứ ba tạo, không ký bởi nhà sản xuất nên cần <b>bootloader đã mở khóa</b> để boot hoặc flash.</p>
<ul>
<li>Boot không cài: <code>fastboot boot custom-recovery.img</code>. Cài vĩnh viễn: <code>fastboot flash recovery custom-recovery.img</code>.</li>
<li>Tính năng thường có: <b>backup/restore toàn bộ phân vùng</b>, <b>root shell</b> với đầy đủ công cụ, mount thiết bị USB ngoài…, và có thể <b>tắt kiểm chữ ký OTA</b> → cài được ROM bên thứ ba hoặc sửa đổi (framework, theme).</li>
<li>Phổ biến nhất lúc viết sách: <b>TWRP</b> (Team Win Recovery Project) – dựa trên stock AOSP recovery, mã nguồn mở; giao diện cảm ứng giống Android, tùy biến theme; backup mã hóa, cài update từ USB, trình quản lý tệp tích hợp.</li>
<li>Điều khiển từ HĐH chính ngoài tệp <code>command</code>: TWRP có <b>ngôn ngữ script tối giản</b> để app xếp hàng hành động.</li>
</ul>
<pre># cat /cache/recovery/openrecoveryscript
backup DSBOM 2014-12-14--01-54-59</pre>
<div class="callout c-danger"><b>⚠ Cảnh báo</b>Flash vĩnh viễn custom recovery có tùy chọn bỏ qua chữ ký OTA có thể cho phép <b>thay hệ điều hành và cài backdoor chỉ với tiếp xúc vật lý ngắn</b>. Không nên cài trên máy dùng hàng ngày có dữ liệu cá nhân/nhạy cảm.</div>
`},

{id:'root', icon:'👑', title:'Root: engineering build, su và adbd', html:`
<p>Android áp nguyên tắc <b>đặc quyền tối thiểu</b>, cô lập từng tiến trình bằng người dùng riêng. Nhưng nền Linux dùng DAC với một người dùng đặc biệt <b>root (UID 0, superuser)</b> có quyền tuyệt đối: đọc/ghi/đổi quyền mọi tệp, kill mọi tiến trình, mount/unmount… Có root trên Android = <b>vượt sandbox</b>, đọc/ghi tệp riêng của mọi app, sửa phân vùng chỉ-đọc, bật/tắt dịch vụ, xóa/vô hiệu app lõi → có thể làm máy mất ổn định hoặc hỏng, nên máy thương mại không cho root.</p>
<ul>
<li>Android cũng <b>giảm số tiến trình chạy root</b>: lỗi lập trình trong tiến trình root mở đường <b>leo thang đặc quyền</b> để app nhận root.</li>
<li>SELinux enforcing: chiếm tiến trình root vẫn <b>bị giới hạn bởi policy</b>; tuy nhiên vẫn có thể lộ dữ liệu nhạy cảm/sửa hành vi hệ thống, và một lỗ hổng kernel vẫn có thể vượt policy.</li>
<li>Root hữu ích để debug/dịch ngược trên máy dev và cho tính năng cần sửa framework: firewall, backup toàn bộ, chia sẻ mạng…</li>
</ul>
<h3>Loại build</h3>
<table>
<tr><th>Biến thể</th><th>Đặc điểm</th></tr>
<tr><td><b>user</b> (máy thương mại)</td><td>Không có công cụ chẩn đoán/dev; <b>ADB tắt mặc định</b>; chỉ debug app có <code>debuggable=true</code>; <b>không root qua shell</b>; không có su.</td></tr>
<tr><td><b>userdebug</b></td><td>Gần user nhưng thêm module <code>debug</code>; cho debug mọi app; <b>ADB bật mặc định</b>.</td></tr>
<tr><td><b>eng</b> (engineering)</td><td>Gần như mọi module; ADB bật; <code>ro.secure=0</code> → <b>adbd không hạ quyền</b>.</td></tr>
</table>
<p>Biến thể hiện tại ở <code>ro.build.type</code>.</p>
<h3>adbd và ro.secure</h3>
<ul>
<li><code>ro.secure=1</code> (secure mode): adbd khởi chạy root rồi <b>bỏ mọi capability</b> khỏi bounding set trừ <code>CAP_SETUID</code> và <code>CAP_SETGID</code> (cần cho tiện ích <code>run-as</code>), thêm các GID phụ (mạng, bộ nhớ ngoài, log…), rồi đổi UID/GID thành <code>AID_SHELL</code> (2000).</li>
<li><code>ro.secure=0</code> (mặc định của eng): adbd <b>tiếp tục chạy root</b> với đầy đủ capability.</li>
<li>Trên user build bounding set <code>0xc0</code> bảo đảm mọi tiến trình khởi chạy từ shell chỉ có CAP_SETUID/SETGID – kể cả binary có bit SUID hay file capabilities.</li>
</ul>
<pre># user build:
Uid: 2000 2000 2000 2000   Gid: 2000 ...   CapBnd: fffffff0000000c0
# eng build:
Uid: 0 0 0 0   Gid: 0 ...   CapPrm/CapEff/CapBnd: ffffffffffffffff</pre>
<h3>adb root (userdebug)</h3>
<p>Trên userdebug, adbd hạ quyền (dù <code>ro.secure=1</code>) nhưng có thể <b>khởi động lại ở chế độ không an toàn</b> bằng <code>adb root</code> (đặt <code>service.adb.root=1</code>).</p>
<pre>$ adb shell id     → uid=2000(shell) ... context=u:r:shell:s0
$ adb root         → restarting adbd as root
$ adb shell id     → uid=0(root) gid=0(root) context=<span class="h">u:r:shell:s0</span></pre>
<div class="callout c-warn"><b>SELinux vẫn áp dụng</b>Dù UID/GID đổi, <b>context vẫn là <code>u:r:shell:s0</code></b> nên mọi tiến trình từ shell vẫn bị ràng buộc bởi domain shell. Nhưng ở 4.4 domain shell là <b>unconfined</b> → root gần như toàn quyền.</div>
<div class="sim" data-adbroot></div>
<h3>Lệnh su</h3>
<p>Trên userdebug còn có <code>su</code> (cài với bit SUID) để lấy root shell hoặc chạy lệnh với UID chỉ định. Cài đặt mặc định rất cơ bản:</p>
<pre>myuid = getuid();
if (myuid != AID_ROOT && myuid != AID_SHELL) { fprintf(stderr,"su: uid %d not allowed to su\\n", myuid); return 1; }
uid = gid = 0;                       <span class="c">// không đối số → root</span>
if (setgid(gid) || setuid(uid)) { ...permission denied... }
execlp("/system/bin/sh", "sh", NULL);</pre>
<p>Chỉ cho gọi bởi UID <b>root (0)</b> hoặc <b>shell (2000)</b>; app thường không dùng được.</p>
`},

{id:'production-root', icon:'🔨', title:'Root trên máy thương mại: superuser, ROM, exploit', html:`
<p>Máy thương mại là build <b>user</b>: adbd chạy bằng shell, <b>không có su</b>. Đủ an toàn; phần lớn người dùng làm được việc bằng công cụ chính thức hoặc app (launcher, bàn phím, VPN). Muốn đổi giao diện/cấu hình lõi hay truy cập Linux cấp thấp cần <b>rooting</b> – dễ nếu mở khóa bootloader được, gần như bất khả nếu không và có biện pháp chặn sửa phân vùng system.</p>
<h3>Cách 1: đổi boot hoặc system image</h3>
<ul>
<li>Có bootloader mở khóa: flash boot image mới (custom kernel) đổi <code>ro.secure</code>, <code>ro.debuggable</code> để adbd chạy root. Nhưng đa số user build ngày nay tắt từ lúc biên dịch (<b>không định nghĩa <code>ALLOW_ADBD_ROOT</code></b>) – bỏ qua giá trị property.</li>
<li>Giải nén ảnh system, thêm <b>su SUID</b>, ghi đè phân vùng system. Nhưng từ Android 4.3: app không chạy được chương trình SUID vì <b>zygote bỏ mọi capability khỏi bounding set</b> tiến trình con và system mount với cờ <b>nosuid</b>.</li>
<li>SELinux enforcing: tiến trình chạy root thường <b>không đổi context</b> nên vẫn bị MAC giới hạn.</li>
<li>Thay boot/system hoàn toàn cho phép tắt SELinux và mọi biện pháp giảm thiểu, nhưng thực chất là thay cả HĐH và có thể chặn nhận cập nhật chính hãng → nên có phương pháp “chung sống” với HĐH gốc.</li>
</ul>
<h3>Cách 2: flash gói OTA (SuperSU)</h3>
<p>Gói OTA thêm/sửa tệp hệ thống mà không thay ảnh. Hầu hết app superuser phân phối = <b>gói OTA cài một lần</b> + <b>app quản lý</b> cập nhật online. <b>SuperSU</b> (Chainfire) là phổ biến nhất.</p>
<pre>.
├── arm/  chattr  chattr.pie  su
├── x86/  chattr  chattr.pie  su
├── common/ 99SuperSUDaemon  install-recovery.sh  Superuser.apk
└── META-INF/com/google/android/ update-binary  updater-script (placeholder)</pre>
<p><code>update-binary</code> là <b>shell script</b> (updater-script chỉ là chỗ giữ chỗ):</p>
<div class="stepper" data-stepper>
 <div class="step"><b>Mount</b> rootfs, /system, /data ở chế độ <b>đọc-ghi</b>.</div>
 <div class="step"><b>Chép tệp</b>: <code>su</code> và <code>daemonsu</code> vào <code>/system/xbin/</code>; <code>Superuser.apk</code> vào <code>/system/app/</code> (tự cài khi reboot); <code>install-recovery.sh</code> vào <code>/system/etc/</code>.</div>
 <div class="step"><b>Đặt quyền & nhãn</b>: <code>set_perm</code> và <code>chcon</code> (<code>u:object_r:system_file:s0</code>).</div>
 <div class="step"><b>Hậu cài đặt</b>: <code>su --install</code>; unmount system/data; reboot.</div>
</div>
<div class="callout c-info"><b>Vì sao lại dùng install-recovery.sh?</b>Dù để cập nhật recovery từ HĐH chính, init tự chạy nó khi boot (qua dịch vụ flash_recovery) nên SuperSU mượn để <b>khởi động daemon lúc boot</b>.</div>
<h3>Daemon: cách app thường lấy được root</h3>
<pre>#!/system/bin/sh
/system/xbin/daemonsu --auto-daemon &amp;     <span class="c">← daemon chạy root</span>
/system/etc/install-recovery-2.sh           <span class="c">← khởi tạo thêm cho root app khác</span></pre>
<p>Từ 4.3 app (fork từ zygote) bị bỏ capability, và từ 4.4 SELinux enforcing nên mọi tiến trình do app khởi chạy <b>thừa context</b> (<code>untrusted_app</code>) và bị MAC giới hạn. SuperSU vượt qua bằng cách cho app dùng binary <code>su</code> <b>chuyển lệnh qua Unix domain socket</b> tới <code>daemonsu</code>, daemon chạy lệnh bằng root trong context <code>u:r:init:s0</code>:</p>
<div class="stepper" data-stepper>
 <div class="step"><b>App gọi su -c "lệnh"</b>Tiến trình <code>su</code> chạy cùng user app (vd u0_a292) và cùng domain <code>untrusted_app</code>.</div>
 <div class="step"><b>su → daemonsu qua socket</b>Lệnh được gửi qua Unix domain socket.</div>
 <div class="step"><b>App SuperSU hỏi người dùng</b>Hộp thoại cấp quyền root: một lần, trong một khoảng, hoặc vĩnh viễn (có whitelist nội bộ nên app đã cấp không hỏi lại).</div>
 <div class="step"><b>daemonsu:master → daemonsu:&lt;uid&gt;</b>Instance đầu (từ install-recovery.sh) chạy trong domain init (con của PID 1) sinh instance riêng cho UID của app.</div>
 <div class="step"><b>Lệnh chạy root</b>Tiến trình lệnh (vd <code>sleep</code>) chạy <b>root</b> trong <code>u:r:init:s0</code>, cha là <code>daemonsu:10292</code>.</div>
</div>
<p>Thư viện đi kèm <code>libsuperuser</code> (wrapper Java) và hướng dẫn <i>How-To SU</i> giúp viết root app.</p>
<h3>Cách 3: ROM tùy biến</h3>
<p>Custom ROM tự tùy biến quá trình khởi động nên <b>không cần install-recovery.sh</b>. Ví dụ <b>CyanogenMod</b> khởi động su daemon từ <code>init.superuser.rc</code>:</p>
<pre>service su_daemon /system/xbin/su --daemon
    oneshot
on property:persist.sys.root_access=0   stop su_daemon
on property:persist.sys.root_access=2   stop su_daemon
on property:persist.sys.root_access=1   start su_daemon
on property:persist.sys.root_access=3   start su_daemon</pre>
<p>Giá trị property quyết định start/stop daemon và cho root với <b>app</b>, <b>ADB shell</b> hay cả hai. Mặc định <b>tắt</b>; bật ở Development options.</p>
<div class="callout c-danger"><b>⚠ Cảnh báo</b>Dù SuperSU và ROM kiểm soát app nào được root (whitelist), <b>lỗi cài đặt</b> có thể cho app qua mặt và có root không cần xác nhận. Nên <b>tắt root</b> trên máy dùng hàng ngày; chỉ bật khi cần phát triển/debug.</div>
<h3>Cách 4: khai thác lỗ hổng</h3>
<p>Máy không mở khóa được bootloader: root qua lỗi <b>leo thang đặc quyền</b> cho app/shell lấy root shell (<b>soft root</b>). Thường đóng gói thành app/script “một chạm”, cố <b>duy trì root</b> bằng cách cài su hoặc sửa cấu hình. Ví dụ <b>towelroot</b> khai thác lỗi kernel Linux (CVE-2014-3153) rồi cài SuperSU. Cũng có thể duy trì bằng cách ghi đè recovery bằng custom recovery; nhưng một số máy có bảo vệ chặn sửa boot/system/recovery nên root vĩnh viễn có thể không làm được.</p>
<table>
<tr><th>Cách</th><th>Điều kiện</th><th>Ưu / nhược</th></tr>
<tr><td>Đổi boot/system image</td><td>Mở khóa bootloader</td><td>Tùy biến cao; có thể chặn nhận OTA; 4.3+ bị nosuid, bỏ capability, SELinux</td></tr>
<tr><td>OTA SuperSU</td><td>Mở khóa + custom recovery</td><td>“Chung sống” với HĐH gốc; daemonsu</td></tr>
<tr><td>Custom ROM</td><td>Mở khóa bootloader</td><td>Root có sẵn, bật/tắt trong cài đặt</td></tr>
<tr><td>Khai thác lỗi</td><td>Không cần mở khóa</td><td>Phụ thuộc lỗ hổng; có thể không bền</td></tr>
</table>
`}

],

cards: [
 {f:'Vì sao cần thoát sandbox để cập nhật hệ thống?',b:'Ngay cả thành phần Android đặc quyền nhất không có toàn quyền với mọi phân vùng/thiết bị lưu trữ; cập nhật OS/factory reset cần truy cập đầy đủ.'},
 {f:'Cách mở khóa bootloader Nexus?',b:'Vào fastboot (<code>adb reboot bootloader</code> hoặc tổ hợp phím), chạy <code>fastboot oem unlock</code>, xác nhận trên màn hình (xóa dữ liệu).'},
 {f:'Vì sao mở khóa bootloader xóa dữ liệu?',b:'ROM bên thứ ba có thể không theo mô hình bảo mật Android → xóa để dữ liệu cũ không bị trích xuất.'},
 {f:'Cờ “tampered” là gì?',b:'Một số bootloader giữ cờ thứ hai đặt từ lần mở khóa đầu tiên; cho biết máy từng mở khóa, có thể cấm thao tác/cảnh báo kể cả khi đã khóa lại.'},
 {f:'LK là gì?',b:'Little Kernel – bootloader mã nguồn mở mà bootloader hầu hết máy SoC Qualcomm dẫn xuất.'},
 {f:'Phân vùng boot, system, userdata, cache, recovery, misc chứa gì?',b:'boot: kernel + rootfs ramdisk · system: tệp hệ thống · userdata: dữ liệu người dùng/app · cache: OTA tải về, lệnh/log recovery · recovery: ảnh recovery · misc: BCB.'},
 {f:'Giao thức fastboot hoạt động thế nào?',b:'Qua USB do host điều khiển: lệnh/dữ liệu văn bản; bootloader trả OKAY, FAIL, INFO, hoặc DATA.'},
 {f:'Các lệnh fastboot chính?',b:'devices, getvar, continue/reboot/reboot-bootloader, erase/format, flash, update, flashall, flash:raw, boot, oem unlock/lock.'},
 {f:'<code>fastboot boot</code> khác <code>fastboot flash</code>?',b:'<code>boot</code> khởi động ảnh mà <b>không ghi</b> xuống thiết bị; <code>flash</code> ghi vào phân vùng. Cả hai bị cấm khi bootloader khóa (boot kernel tùy biến, sửa phân vùng).'},
 {f:'Recovery dùng để làm gì? Vào bằng cách nào?',b:'Factory reset, áp OTA. Tổ hợp phím lúc boot hoặc <code>adb reboot recovery</code>.'},
 {f:'CDD yêu cầu gì về cập nhật hệ thống?',b:'Phải có cơ chế thay toàn bộ phần mềm hệ thống và cập nhật không xóa dữ liệu người dùng; không quy định cơ chế cụ thể.'},
 {f:'OTA update vs tethered (sideload)?',b:'OTA: HĐH chính tải gói và nhờ recovery áp. Tethered: tải về PC, <code>adb sideload ota.zip</code> qua mục “apply update from ADB”. Quá trình cài giống nhau.'},
 {f:'4 mục menu stock recovery?',b:'reboot · apply update from ADB · factory reset · wipe cache partition.'},
 {f:'HĐH chính điều khiển recovery bằng gì?',b:'<code>android.os.RecoverySystem</code> ghi tùy chọn vào <code>/cache/recovery/command</code>; <code>/sbin/recovery</code> đọc khi khởi động.'},
 {f:'Các tùy chọn của recovery binary?',b:'<code>--update_package</code>, <code>--wipe_data</code>, <code>--wipe_cache</code>, <code>--send_intent</code>, <code>--show_text</code>, <code>--just_exit</code>, <code>--locale</code>, <code>--stages</code>.'},
 {f:'BCB là gì? Cấu trúc?',b:'Bootloader Control Block trên phân vùng <b>misc</b>: <code>command[32]</code>, <code>status[32]</code>, <code>recovery[768]</code>, <code>stage[32]</code>, <code>reserved[224]</code>. Đảm bảo lệnh recovery được hoàn tất.'},
 {f:'Điều gì xảy ra nếu mất điện giữa lúc cập nhật?',b:'BCB còn <code>boot-recovery</code> nên bootloader khởi động lại recovery và cài lại từ đầu. Thành công thì recovery xóa BCB.'},
 {f:'adb sideload làm gì?',b:'Chuyển OTA tới <code>/tmp/update.zip</code> trên thiết bị và cài, qua adbd rút gọn chỉ hỗ trợ sideload.'},
 {f:'Xác minh chữ ký OTA diễn ra mấy lần, ở đâu?',b:'(1) HĐH chính: <code>RecoverySystem.verifyPackage()</code> với <code>otacerts.zip</code>; (2) recovery lại xác minh độc lập bằng khóa trong <code>/res/keys</code> (dựng sẵn, định dạng mincrypt).'},
 {f:'Thuật toán chữ ký OTA hỗ trợ?',b:'RSA-2048 với SHA-1 (khóa v1, v2) hoặc SHA-256 (v3, v4); ECDSA SHA-256 P-256 (v5, nhánh master).'},
 {f:'update-binary là gì? Nhận tham số gì?',b:'Tiến trình do recovery chạy từ OTA: tham số (phiên bản API recovery = 3, fd pipe báo tiến độ, đường dẫn gói). Nó trích và đánh giá <code>updater-script</code>.'},
 {f:'edify là gì?',b:'Ngôn ngữ script của updater-script (từ 1.6; trước là amend): có if/else, mở rộng bằng hàm (hàm có thể là cấu trúc điều khiển).'},
 {f:'Các hàm edify quan trọng?',b:'abort, assert, apply_patch(_check), delete, file_getprop/getprop, format, mount/umount, package_extract_*, run_program, set_metadata(_recursive), symlink, write_raw_image, show_progress, ui_print.'},
 {f:'Soft brick vs hard brick?',b:'Soft brick: máy không dùng được nhưng khôi phục bằng flash lại phân vùng. Hard brick: không khôi phục được.'},
 {f:'Vì sao OTA kiểm băm trước khi vá?',b:'OTA chứa bản vá nhị phân (bsdiff) chỉ đúng với tệp phiên bản cũ; kiểm <code>apply_patch_check</code> (cả phân vùng boot/modem) và abort nếu khác.'},
 {f:'set_metadata_recursive làm gì (từ 4.3)?',b:'Đặt chủ, nhóm, quyền, file capabilities và <b>nhãn SELinux</b> cho tệp/thư mục.'},
 {f:'Vì sao recovery không tự cập nhật trong lúc OTA?',b:'Quá trình có thể bị ngắt và phải khởi động lại từ cùng trạng thái; ghi recovery giữa chừng có thể làm hỏng. Recovery được cập nhật sau khi HĐH mới boot (dịch vụ <code>flash_recovery</code> → <code>install-recovery.sh</code>).'},
 {f:'install-recovery.sh làm gì?',b:'<code>applypatch -c</code> kiểm băm phân vùng recovery; khớp bản cũ thì áp bản vá (từ boot image + recovery-from-boot.p); nếu đã cập nhật hoặc băm lạ thì ghi log và thoát.'},
 {f:'Custom recovery là gì? Điều kiện?',b:'Recovery do bên thứ ba; không ký bởi hãng → cần bootloader mở khóa. Boot: <code>fastboot boot</code>; flash: <code>fastboot flash recovery</code>.'},
 {f:'TWRP có gì?',b:'Dựa AOSP recovery, mã nguồn mở, giao diện cảm ứng/theme, backup mã hóa, cài update từ USB, file manager, kịch bản <code>openrecoveryscript</code> cho app xếp hàng hành động.'},
 {f:'Rủi ro của custom recovery bỏ qua chữ ký OTA?',b:'Chỉ cần tiếp xúc vật lý ngắn cũng thay được HĐH và cài backdoor → không nên cài trên máy dùng hàng ngày.'},
 {f:'Rủi ro của root?',b:'Vượt sandbox, đọc/ghi dữ liệu mọi app, sửa phân vùng chỉ-đọc, vô hiệu app lõi → mất ổn định hoặc hỏng máy; mở đường cho malware leo thang.'},
 {f:'3 biến thể build?',b:'<b>user</b> (thương mại, ADB tắt, không root qua shell) · <b>userdebug</b> (thêm module debug, ADB bật) · <b>eng</b> (mọi module, ro.secure=0 → adbd root). <code>ro.build.type</code>.'},
 {f:'ro.secure=1 làm adbd làm gì?',b:'adbd khởi chạy root rồi bỏ mọi capability trừ CAP_SETUID/CAP_SETGID (cho run-as), thêm GID phụ, đổi UID/GID thành shell (2000). Bounding set = 0xc0.'},
 {f:'adb root hoạt động thế nào trên userdebug?',b:'Đặt <code>service.adb.root=1</code> khởi động lại adbd ở chế độ không an toàn (root). Context SELinux vẫn <code>u:r:shell:s0</code>.'},
 {f:'Vì sao có root shell vẫn bị SELinux ràng buộc?',b:'UID/GID đổi nhưng context vẫn <code>u:r:shell:s0</code>; chịu giới hạn domain shell (ở 4.4 unconfined nên gần toàn quyền).'},
 {f:'su mặc định trên userdebug cho ai dùng?',b:'Chỉ UID root (0) và shell (2000); setgid/setuid 0 rồi chạy <code>/system/bin/sh</code>.'},
 {f:'Vì sao chỉ copy su SUID vào máy 4.3+ chưa đủ?',b:'Zygote bỏ mọi capability khỏi bounding set tiến trình con, system mount nosuid, và SELinux không đổi context cho tiến trình root (vẫn bị MAC giới hạn).'},
 {f:'SuperSU hoạt động thế nào?',b:'OTA cài su, daemonsu, Superuser.apk, install-recovery.sh; boot khởi daemonsu (root, domain init); app gọi <code>su</code> → socket → daemonsu chạy lệnh root; app SuperSU hỏi người dùng, có whitelist.'},
 {f:'Vì sao SuperSU dùng daemon?',b:'App không chạy được tiến trình root (capability bị bỏ, SELinux giữ context untrusted_app) nên su chỉ chuyển lệnh qua socket tới daemon root trong domain init.'},
 {f:'Custom ROM (CyanogenMod) điều khiển root thế nào?',b:'<code>init.superuser.rc</code> khởi/dừng <code>su_daemon</code> theo <code>persist.sys.root_access</code> (0/2 dừng; 1/3 chạy; cho app, ADB hoặc cả hai). Mặc định tắt.'},
 {f:'Rooting bằng khai thác lỗ hổng?',b:'Lỗi leo thang đặc quyền cho app/shell root shell (soft root), thường đóng gói “một chạm”, rồi cài su để duy trì. Ví dụ towelroot (CVE-2014-3153, kernel) cài SuperSU.'}
],

quiz: [
 {q:'Lệnh mở khóa bootloader Nexus là:',o:['adb unlock','fastboot oem unlock','adb root','fastboot flash unlock'],a:1,e:'Phải ở fastboot mode.'},
 {q:'Mở khóa bootloader thường:',o:['Giữ nguyên dữ liệu','Xóa toàn bộ dữ liệu người dùng như biện pháp bảo mật','Gỡ root','Cập nhật Android'],a:1,e:'Để ROM lạ không đọc được dữ liệu cũ.'},
 {q:'Cờ “tampered” dùng để:',o:['Tăng tốc boot','Phát hiện bootloader từng được mở khóa dù đang khóa','Đặt mật khẩu','Bật root'],a:1,e:'Một số bootloader giữ cờ này.'},
 {q:'Phân vùng nào chứa BCB?',o:['boot','misc','cache','system'],a:1,e:'BCB báo trạng thái recovery cho bootloader.'},
 {q:'Giao thức fastboot do ai khởi tạo giao tiếp?',o:['Thiết bị','Host qua USB','Bluetooth','Cả hai'],a:1,e:'Phản hồi: OKAY, FAIL, INFO, DATA.'},
 {q:'Khi bootloader khóa, lệnh nào bị từ chối?',o:['fastboot devices','fastboot getvar','fastboot flash và fastboot boot','fastboot reboot'],a:2,e:'Cấm sửa phân vùng và boot kernel tùy biến.'},
 {q:'Điểm khác nhau giữa fastboot boot và fastboot flash:',o:['Không khác','boot khởi động ảnh mà không ghi xuống thiết bị','flash không cần USB','boot ghi vào userdata'],a:1,e:'boot hữu ích để thử recovery tùy biến.'},
 {q:'Tethered update dùng lệnh nào?',o:['adb push','adb sideload','fastboot update','adb backup'],a:1,e:'Cần chọn “apply update from ADB” trước.'},
 {q:'HĐH chính ra lệnh cho recovery bằng:',o:['Intent','Ghi chuỗi tùy chọn vào /cache/recovery/command','SMS','Binder trực tiếp'],a:1,e:'Qua android.os.RecoverySystem.'},
 {q:'Mục đích chính của BCB là:',o:['Mã hóa dữ liệu','Đảm bảo lệnh recovery được hoàn tất dù mất điện/reboot','Lưu mật khẩu','Ghi log'],a:1,e:'Bootloader thấy boot-recovery sẽ chạy lại recovery.'},
 {q:'Recovery xóa BCB khi nào?',o:['Ngay khi bắt đầu','Khi cập nhật thành công trước khi reboot','Không bao giờ','Khi có lỗi'],a:1,e:'Lỗi thì BCB còn nên cài lại từ đầu.'},
 {q:'Vì sao recovery xác minh lại chữ ký OTA dù HĐH chính đã xác minh?',o:['Cho chắc','Để chống gói bị thay giữa lúc HĐH chính xác minh và recovery chạy','Vì quên','Để tăng bảo mật mật khẩu'],a:1,e:'Dùng khóa dựng sẵn trong ảnh recovery (/res/keys).'},
 {q:'Chữ ký OTA khác chữ ký APK ở điểm:',o:['Không dùng RSA','Ký trên toàn tệp (không riêng từng tệp)','Dùng MD5','Không có chứng chỉ'],a:1,e:'Đặt trong comment của ZIP.'},
 {q:'update-binary nhận mấy tham số và là gì?',o:['0, là APK','3: phiên bản API recovery, fd pipe, đường dẫn gói','1: tên gói','2: UID, GID'],a:1,e:'Rồi nó đánh giá updater-script (edify).'},
 {q:'apply_patch_check dùng để:',o:['Xóa tệp','Kiểm băm tệp/phân vùng trước khi vá, abort nếu khác','Giải nén','Ghi nhãn'],a:1,e:'OTA là bản vá nhị phân chỉ đúng với phiên bản cũ.'},
 {q:'“Soft brick” nghĩa là:',o:['Máy hỏng vĩnh viễn','Máy không dùng được nhưng khôi phục được bằng flash lại','Máy chậm','Máy khóa SIM'],a:1,e:'Hard brick: không khôi phục được.'},
 {q:'Vì sao set_metadata_recursive được mở rộng ở 4.3?',o:['Để mã hóa','Để đặt nhãn SELinux cho tệp','Để nén','Để ký'],a:1,e:'Nhãn đúng là điều kiện để luật SELinux có hiệu lực.'},
 {q:'Vì sao updater-script không tự áp bản vá recovery?',o:['Bản vá bị lỗi','Cập nhật có thể bị ngắt, phải khởi động lại từ cùng trạng thái; ghi recovery giữa chừng có thể làm hỏng','Recovery chỉ-đọc','Do bản quyền'],a:1,e:'Recovery được cập nhật sau khi HĐH mới boot thành công.'},
 {q:'Dịch vụ nào cập nhật recovery sau khi boot?',o:['flash_recovery (install-recovery.sh)','vold','installd','zygote'],a:0,e:'applypatch kiểm băm rồi áp bản vá.'},
 {q:'Custom recovery cần điều kiện gì để boot/flash?',o:['Root','Bootloader đã mở khóa','Kết nối Internet','Chữ ký hãng'],a:1,e:'Vì không ký bởi nhà sản xuất.'},
 {q:'Rủi ro lớn của recovery tùy biến có thể bỏ qua chữ ký OTA:',o:['Tốn pin','Tiếp xúc vật lý ngắn là đủ thay HĐH và cài backdoor','Mất SIM','Mất Wi-Fi'],a:1,e:'Không nên cài trên máy dùng hàng ngày.'},
 {q:'Build type nào có ro.secure=0 mặc định?',o:['user','userdebug','eng','Tất cả'],a:2,e:'adbd không hạ quyền, chạy root.'},
 {q:'ro.secure=1 thì adbd:',o:['Chạy root mãi','Bỏ capability (trừ SETUID/SETGID), đổi UID/GID thành shell 2000','Bị tắt','Chạy bằng system'],a:1,e:'Bounding set 0xc0.'},
 {q:'Sau adb root trên userdebug, ID và context của shell mới là:',o:['uid=2000, context u:r:init:s0','uid=0, context vẫn u:r:shell:s0','uid=0, context u:r:init:s0','uid=1000'],a:1,e:'SELinux vẫn bị ràng buộc bởi domain shell (unconfined ở 4.4).'},
 {q:'Ai được gọi su mặc định trên userdebug?',o:['Mọi app','Chỉ UID root và shell','Chỉ system','Chỉ app có quyền SU'],a:1,e:'Code kiểm myuid != AID_ROOT && != AID_SHELL.'},
 {q:'Vì sao copy su SUID vào máy 4.3+ chưa cho app thường root?',o:['Thiếu RAM','Zygote bỏ capability bounding set, system nosuid, SELinux giữ context nên vẫn bị MAC','Do Wi-Fi','Do SIM'],a:1,e:'Cần cơ chế khác như daemon.'},
 {q:'Gói SuperSU cài những gì chính?',o:['Chỉ APK','su, daemonsu, Superuser.apk, install-recovery.sh (qua update-binary dạng shell script)','Kernel mới','Recovery mới'],a:1,e:'updater-script chỉ là placeholder.'},
 {q:'SuperSU cho app thường chạy lệnh root bằng cách:',o:['Đặt bit SUID cho app','su chuyển lệnh qua Unix socket tới daemonsu chạy root trong domain init','Đổi UID app','Tắt SELinux'],a:1,e:'daemonsu:master sinh instance cho UID từng app.'},
 {q:'Trong CyanogenMod, su daemon được bật/tắt bởi:',o:['SELinux','persist.sys.root_access','ro.secure','adb reboot'],a:1,e:'Giá trị quyết định cho app, ADB hay cả hai; mặc định tắt.'},
 {q:'Cách root không cần mở khóa bootloader:',o:['Flash kernel','Khai thác lỗi leo thang đặc quyền (soft root), vd towelroot CVE-2014-3153','fastboot oem unlock','adb reboot'],a:1,e:'Thường cài SuperSU để duy trì.'}
],

order: [
 {id:'o-ota',title:'Áp gói OTA bằng recovery',intro:'Sắp xếp quy trình.',
  items:['HĐH chính verifyPackage() rồi ghi lệnh --update_package vào /cache/recovery/command (và BCB)','Reboot vào recovery; recovery xác minh lại chữ ký bằng /res/keys','Trích và chạy update-binary (3 tham số)','update-binary đánh giá updater-script (edify): mount, kiểm fingerprint/thiết bị, apply_patch_check','Xóa/vá tệp và phân vùng, giải nén recovery mới, set_metadata_recursive (cả nhãn SELinux)','Vá baseband, unmount system; recovery xóa BCB và reboot vào Android'],
  explain:'Ký → update-binary → edify → vá → nhãn → xóa BCB.'},
 {id:'o-rec',title:'Cập nhật chính recovery',intro:'Sắp xếp các bước đúng.',
  items:['OTA giải nén bản vá recovery và install-recovery.sh vào /system (không áp)','Android mới boot thành công','init chạy dịch vụ flash_recovery → install-recovery.sh','applypatch -c kiểm băm phân vùng recovery','Băm khớp bản cũ → applypatch áp bản vá','Băm mới/lạ → chỉ ghi log và thoát'],
  explain:'Chỉ cập nhật recovery sau khi HĐH mới chạy ổn.'},
 {id:'o-su',title:'App xin root qua SuperSU',intro:'Sắp xếp theo thứ tự.',
  items:['Lúc boot, install-recovery.sh khởi động daemonsu (root, domain init)','App (untrusted_app) chạy su -c "lệnh"','su chuyển lệnh qua Unix domain socket tới daemonsu','Ứng dụng SuperSU hiện hộp thoại cấp quyền (hoặc dùng whitelist)','daemonsu:master tạo instance daemonsu:&lt;uid&gt; cho app','Lệnh chạy root trong context u:r:init:s0'],
  explain:'su chỉ là cầu nối; daemon mới thật sự root.'}
],

classify: [
 {id:'c-build',title:'Build nào?',intro:'Gán đặc điểm cho biến thể build.',buckets:['user','userdebug','eng'],
  items:[
   {t:'ADB tắt mặc định, không có su',b:0},{t:'ro.secure=0, adbd chạy root',b:2},{t:'Cho adb root; có su (chỉ root/shell)',b:1},
   {t:'Máy thương mại',b:0},{t:'Gần như mọi module, ADB bật',b:2},{t:'Debug mọi app, ADB bật mặc định',b:1}],
  explain:'user an toàn nhất; eng thoáng nhất.'},
 {id:'c-tool',title:'Công cụ hay giai đoạn nào?',intro:'Gán nhiệm vụ cho bootloader hay recovery.',buckets:['Bootloader / fastboot','Recovery','Cả hai liên quan'],
  items:[
   {t:'fastboot oem unlock',b:0},{t:'adb sideload OTA',b:1},{t:'BCB trên phân vùng misc',b:2},
   {t:'flash/boot ảnh bị cấm khi khóa',b:0},{t:'update-binary + edify',b:1},{t:'Xác minh chữ ký OTA bằng /res/keys',b:1}],
  explain:'BCB là cầu nối giữa recovery và bootloader.'},
 {id:'c-rootway',title:'Cách root nào?',intro:'Gán mô tả cho cách rooting.',buckets:['OTA SuperSU','Custom ROM','Khai thác lỗ hổng'],
  items:[
   {t:'daemonsu khởi động từ install-recovery.sh',b:0},{t:'init.superuser.rc, persist.sys.root_access',b:1},{t:'towelroot, CVE-2014-3153',b:2},
   {t:'Không cần mở khóa bootloader',b:2},{t:'Gói OTA cài một lần + app quản lý',b:0},{t:'Root có sẵn, bật/tắt trong Development options',b:1}],
  explain:'Mỗi cách một cơ chế khởi động và điều kiện.'}
],

cheat: [
 {title:'🥾 Bootloader',html:'<ul><li>fastboot oem unlock/lock → xóa dữ liệu</li><li>flash/boot bị cấm khi khóa</li><li>Cờ tampered</li><li>OKAY/FAIL/INFO/DATA</li></ul>'},
 {title:'🛟 Recovery',html:'<div class="mnemo">command → BCB (misc) → recovery</div><ul><li>/cache/recovery/command</li><li>BCB: command, status, recovery, stage</li><li>adb sideload</li></ul>'},
 {title:'📦 OTA',html:'<ul><li>Ký cả tệp; xác minh 2 lần</li><li>otacerts.zip · /res/keys (mincrypt)</li><li>update-binary → edify updater-script</li><li>apply_patch_check → vá → set_metadata → xóa BCB</li></ul>'},
 {title:'🔁 Cập nhật recovery',html:'<ul><li>Không tự cập nhật trong OTA</li><li>flash_recovery → install-recovery.sh</li><li>applypatch -c kiểm băm</li></ul>'},
 {title:'🛠 Custom recovery',html:'<ul><li>Cần bootloader mở khóa</li><li>TWRP; openrecoveryscript</li><li>Rủi ro backdoor nếu bỏ chữ ký OTA</li></ul>'},
 {title:'👑 Root',html:'<div class="mnemo">user · userdebug · eng</div><ul><li>ro.secure=1: adbd → shell, cap 0xc0</li><li>adb root (userdebug); context vẫn shell</li><li>su: chỉ root/shell</li></ul>'},
 {title:'🔨 Rooting',html:'<ul><li>4.3+: bỏ capability, nosuid, SELinux</li><li>SuperSU: su → daemonsu (init)</li><li>ROM: persist.sys.root_access</li><li>Exploit: towelroot</li></ul>'}
]
};
