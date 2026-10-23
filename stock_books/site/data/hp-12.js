window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 12,
  title: 'Rule 10: Minify JavaScript',
  intro: 'JavaScript là ngôn ngữ thông dịch, không có bước biên dịch — nên kỹ sư frontend phải tự tối ưu trước khi triển khai. Gzip đã được bàn ở Rule 4; chương này thêm bước còn lại: minify (rút gọn) mã bằng cách bỏ ký tự thừa.',
  sections: [
    { icon: '✂️', title: 'Minify và obfuscate', blocks: [
      { t: 'p', x: '<b>Minification</b> bỏ chú thích và khoảng trắng thừa (space, xuống dòng, tab) để giảm kích thước. <b>Obfuscation</b> (làm rối) làm thêm việc đó nhưng còn “munge” mã: đổi tên hàm/biến thành chuỗi ngắn (như <code>_1</code>, <code>_2</code>) để mã gọn hơn nữa và khó đọc/đảo ngược hơn.' },
      { t: 'table', head: ['', 'Minify (JSMin)', 'Obfuscate (Dojo Compressor/ShrinkSafe)'], rows: [
        ['Việc làm', 'Bỏ chú thích và khoảng trắng', 'Bỏ như minify + đổi tên biến/hàm'],
        ['Rủi ro', 'Thấp, “chưa thấy lỗi nào do minify” (theo tác giả)', 'Cao hơn: có thể chèn lỗi; phải đánh dấu symbol không được đổi (API); khó gỡ lỗi'],
        ['Hiệu quả', 'JSMin giảm trung bình ~21%', 'Giảm thêm một chút so với minify']
      ] },
      { t: 'key', x: 'Hướng dẫn ở Yahoo!: <b>ưu tiên minify hơn obfuscate</b>. Chỉ một số ít thuộc tính có JS rất lớn (&gt;100K) mới obfuscate.' },
      { t: 'p', x: 'Công cụ phổ biến nhất: <b>JSMin</b> của Douglas Crockford (có bản C, C#, Java, JavaScript, Perl, PHP, Python, Ruby). Với obfuscate: <b>Dojo Compressor</b> (sau đổi tên ShrinkSafe).' }
    ] },
    { icon: '📏', title: 'Tiết kiệm được bao nhiêu?', blocks: [
      { t: 'list', items: [
        '6/10 site lớn không minify JS; nếu minify họ giảm trung bình ~21% (JSMin).',
        'Chỉ riêng Amazon có thể tiết kiệm thêm 17K (9%) khi obfuscate — ngoại lệ duy nhất đáng xem xét.',
        'Thí nghiệm: script nhỏ 50K → 13K (minify)/12K (obfuscate); script lớn 377K → 129K/123K.',
        'Tốc độ: script nhỏ nhanh hơn 100–110 ms (17–19%); script lớn nhanh hơn 331–341 ms (30–31%). Minify và obfuscate cho kết quả gần như nhau.'
      ] },
      { t: 'h3', x: 'Khi đã gzip có còn cần minify?' },
      { t: 'p', x: 'Gzip giảm nhiều hơn (nên là Rule 4), nhưng minify <b>vẫn giảm thêm</b>. Ví dụ trung bình 6 site: JS gốc 85K → 23K chỉ gzip (−73%) → 19K khi minify + gzip (−78%), tức giảm thêm khoảng 4K (20%) so với chỉ gzip. Khi đã gzip, chênh lệch giữa obfuscate và minify càng nhỏ — thêm lý do chọn minify.' }
    ] },
    { icon: '🧩', title: 'Thêm vài mẹo khác', blocks: [
      { t: 'list', items: [
        '<b>Minify cả JS inline:</b> thực tế dễ hơn file ngoài — chỉ cần tích hợp JSMin vào nền tảng tạo trang (PHP, Python, Perl CGI…) để minify trước khi in ra HTML. 4/10 site minify file ngoài nhưng ít site minify inline.',
        '<b>Minify CSS:</b> lợi ít hơn JS vì CSS ít chú thích và khoảng trắng. Tiềm năng lớn hơn là tối ưu CSS (gộp class trùng, bỏ class không dùng) nhưng khó vì CSS phụ thuộc thứ tự. Việc đơn giản: bỏ chú thích/khoảng trắng, viết tắt (<code>#606</code> thay <code>#660066</code>), bỏ đơn vị thừa.'
      ] },
      { t: 'tip', x: 'Đưa minify vào quy trình build, cùng bước gộp file của Rule 1.' }
    ] }
  ],
  summary: [
    'Minify = bỏ chú thích và khoảng trắng; obfuscate = minify + đổi tên symbol.',
    'Ưu tiên minify (an toàn); obfuscate hiếm khi đáng rủi ro.',
    'Minify giảm trung bình ~21%; sau gzip vẫn giảm thêm ~20% (23K → 19K).',
    'Minify cả script inline; CSS tiết kiệm ít hơn.'
  ],
  cards: [
    ['Minification là gì?', 'Bỏ ký tự thừa (chú thích, khoảng trắng) khỏi mã.'],
    ['Obfuscation là gì?', 'Minify cộng đổi tên hàm/biến thành chuỗi ngắn.'],
    ['Công cụ minify phổ biến?', 'JSMin của Douglas Crockford.'],
    ['Công cụ obfuscate được nhắc đến?', 'Dojo Compressor (ShrinkSafe).'],
    ['JSMin giảm trung bình bao nhiêu?', 'Khoảng 21%.'],
    ['Nên minify hay obfuscate (theo Yahoo!)?', 'Minify; obfuscate chỉ cho JS rất lớn (>100K).'],
    ['Rủi ro của obfuscation?', 'Gây lỗi, phải đánh dấu symbol không đổi, khó gỡ lỗi.'],
    ['Script 377K còn bao nhiêu sau minify?', '129K.'],
    ['Minify + gzip so với chỉ gzip?', 'Giảm thêm khoảng 4K (20%): 23K → 19K.'],
    ['JS inline có nên minify?', 'Có; còn dễ hơn file ngoài.'],
    ['Vì sao CSS tiết kiệm ít hơn?', 'Ít chú thích và khoảng trắng hơn JS.'],
    ['Gzip hay minify giảm nhiều hơn?', 'Gzip (nên ở Rule 4).']
  ],
  quiz: [
    { q: 'Điểm khác biệt chính của obfuscation so với minification:', o: ['Không bỏ khoảng trắng', 'Đổi tên biến/hàm', 'Nén gzip', 'Thêm chú thích'], a: 1, e: 'Munging.' },
    { q: 'Lý do tác giả chuộng minify:', o: ['Nhỏ hơn nhiều', 'An toàn, ít lỗi, dễ gỡ lỗi', 'Nhanh gấp 10', 'Không cần build'], a: 1, e: 'Obfuscation từng gây lỗi.' },
    { q: 'JSMin giảm kích thước trung bình khoảng:', o: ['2%', '21%', '60%', '90%'], a: 1, e: 'Với 6 site chưa minify.' },
    { q: 'Sau khi gzip, minify còn:', o: ['Vô ích', 'Giảm thêm khoảng 20%', 'Tăng kích thước', 'Giảm 90%'], a: 1, e: '23K → 19K.' },
    { q: 'Chỉ riêng site nào có thể tiết kiệm 17K nhờ obfuscate?', o: ['Amazon', 'CNN', 'eBay', 'YouTube'], a: 0, e: 'Ngoại lệ duy nhất.' },
    { q: 'Cách giảm CSS thêm ngoài bỏ khoảng trắng:', o: ['#660066 → #606', 'Thêm chú thích', 'Nén ảnh', 'Dùng @import'], a: 0, e: 'Viết tắt màu.' }
  ],
  match: [
    ['JSMin', 'Minify JS của Crockford'],
    ['Dojo Compressor', 'Công cụ obfuscate'],
    ['_1, _2…', 'Tên biến sau khi munge'],
    ['23K → 19K', 'Thêm minify sau gzip'],
    ['Inline script', 'Cũng nên minify'],
    ['Minify > Obfuscate', 'Khuyến nghị ở Yahoo!']
  ]
});
