// Danh sách 13 chương. ready=true nghĩa là đã có nội dung (js/chapters/chN.js)
window.CH = window.CH || {};
window.CHAPTERS = [
  {n:1, ready:true,  title:"Mô hình bảo mật của Android", en:"Android's Security Model", sub:"Kiến trúc, Binder, sandbox, chữ ký mã, SELinux, verified boot"},
  {n:2, ready:true,  title:"Quyền (Permissions)", en:"Permissions", sub:"Protection level, GID, zygote, cách thực thi quyền, pending intent"},
  {n:3, ready:true, title:"Quản lý gói ứng dụng", en:"Package Management", sub:"APK, chữ ký, cài đặt, packages.xml"},
  {n:4, ready:true, title:"Quản lý người dùng", en:"User Management", sub:"Đa người dùng, hồ sơ, UID tổng hợp"},
  {n:5, ready:true, title:"Nhà cung cấp mật mã", en:"Cryptographic Providers", sub:"JCA, provider, thuật toán"},
  {n:6, ready:true, title:"Bảo mật mạng và PKI", en:"Network Security and PKI", sub:"TLS, chứng chỉ, kho tin cậy"},
  {n:7, ready:true, title:"Lưu trữ thông tin xác thực", en:"Credential Storage", sub:"KeyStore, khóa riêng tư"},
  {n:8, ready:true, title:"Quản lý tài khoản online", en:"Online Account Management", sub:"AccountManager, token"},
  {n:9, ready:true, title:"Bảo mật doanh nghiệp", en:"Enterprise Security", sub:"Device admin, VPN, EAS"},
  {n:10, ready:true, title:"Bảo mật thiết bị", en:"Device Security", sub:"Verified boot, mã hóa đĩa, lockscreen"},
  {n:11, ready:true, title:"NFC và Secure Element", en:"NFC and Secure Elements", sub:"HCE, thẻ thông minh"},
  {n:12, ready:true, title:"SELinux", en:"SELinux", sub:"Chính sách, domain, MAC"},
  {n:13, ready:true, title:"Cập nhật hệ thống và Root", en:"System Updates and Root Access", sub:"Bootloader, recovery, OTA, root"}
];
