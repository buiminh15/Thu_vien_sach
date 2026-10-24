// review.html chép lại nguyên khối <script src="data/...​"> của book.html (để có đủ BOOK_DATA mọi
// sách cho trang Ôn tập hôm nay). Mỗi khi có sách mới được thêm vào book.html, khối đó dài ra —
// chạy lại file này để đồng bộ review.html, tránh nó bị cũ (thiếu sách mới) một cách im lặng.
// Dùng: node sync_review.js
const fs = require('fs'), path = require('path');
const site = path.join(__dirname, '..', 'site');
const bookHtml = fs.readFileSync(path.join(site, 'book.html'), 'utf8');
const reviewHtml = fs.readFileSync(path.join(site, 'review.html'), 'utf8');

const start = bookHtml.indexOf('<script src="data/books.js">');
const end = bookHtml.indexOf('<script src="js/common.js">');
if (start < 0 || end < 0 || end <= start) { console.error('Không tìm thấy khối data-script trong book.html'); process.exit(1); }
const block = bookHtml.slice(start, end);

const rs = reviewHtml.indexOf('<script src="data/books.js">');
const re = reviewHtml.indexOf('<script src="js/common.js">');
if (rs < 0 || re < 0 || re <= rs) { console.error('Không tìm thấy khối data-script trong review.html'); process.exit(1); }
const next = reviewHtml.slice(0, rs) + block + reviewHtml.slice(re);

if (next === reviewHtml) { console.log('review.html đã khớp book.html, không có gì để đồng bộ.'); process.exit(0); }
fs.writeFileSync(path.join(site, 'review.html'), next);
const before = (reviewHtml.match(/<script src="data\//g) || []).length;
const after = (next.match(/<script src="data\//g) || []).length;
console.log(`Đã đồng bộ review.html: ${before} → ${after} file data.`);
