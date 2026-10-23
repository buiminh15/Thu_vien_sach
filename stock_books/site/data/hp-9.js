(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 9,
  title: 'Rule 7: Tránh CSS expression',
  intro: 'CSS expression là cách mạnh (và nguy hiểm) để đặt thuộc tính CSS động bằng JavaScript, chỉ IE 5+ hỗ trợ. Điều khiến chúng nguy hiểm là chúng được tính lại thường xuyên hơn nhiều so với người ta nghĩ. Đây là một trong số ít quy tắc nhắm tới hiệu năng <i>sau khi</i> trang đã tải.',
  sections: [
    { icon: '🧮', title: 'CSS expression là gì?', blocks: [
      { t: 'p', x: 'Giá trị thuộc tính CSS được đặt bằng kết quả của một biểu thức JavaScript. Ví dụ đổi màu nền theo giờ:' },
      { t: 'p', x: C(`background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );`) },
      { t: 'p', x: 'Trình duyệt khác bỏ qua <code>expression</code>, nên nó hay được dùng để vá chỗ IE thiếu — ví dụ IE không hỗ trợ <code>min-width</code>:' },
      { t: 'p', x: C(`width: expression( document.body.clientWidth < 600 ? "600px" : "auto" );`) },
      { t: 'tip', x: 'Biểu thức được tính lại khi trang thay đổi (như khi resize) — đó là điều làm nó “chạy được”, và cũng là điều khiến nó hại hiệu năng.' }
    ] },
    { icon: '🔥', title: 'Chúng bị tính lại bao nhiêu lần?', blocks: [
      { t: 'p', x: 'Không chỉ khi render và resize, mà còn khi <b>cuộn trang</b> và cả khi <b>di chuột</b> trên trang. Thí nghiệm có bộ đếm (<code>setCntr()</code>) với 10 đoạn văn:' },
      { t: 'list', items: [
        'Tải trang → biểu thức chạy <b>40 lần</b>.',
        'Sau đó thêm ~10 lần cho các sự kiện resize, cuộn, di chuột.',
        'Di chuột quanh trang dễ vượt <b>10 000 lần</b> tính toán.',
        'Bấm vào ô nhập văn bản làm IE <b>treo</b>, phải kill tiến trình.'
      ] },
      { t: 'warn', x: 'Có ca ở Yahoo!: một CSS expression gây trễ <b>20 giây</b> ngay lúc render lần đầu — bất ngờ và rất lâu mới tìm ra nguyên nhân.' }
    ] },
    { icon: '🛠️', title: 'Hai cách tránh', blocks: [
      { t: 'h3', x: '1) Biểu thức dùng một lần (one-time expression)' },
      { t: 'p', x: 'Để biểu thức tự ghi đè chính nó sau lần chạy đầu bằng giá trị cụ thể. Ví dụ biểu thức gọi <code>altBgcolor(elem)</code>, hàm này đặt trực tiếp <code>elem.style.backgroundColor</code> rồi thay thế expression. Kết quả: chỉ tính 10 lần (cho 10 đoạn) dù resize/cuộn/di chuột thoải mái.' },
      { t: 'p', x: C(`function altBgcolor(elem) {
  elem.style.backgroundColor = (new Date()).getHours()%2 ? "#F08A00" : "#B8D4FF";
}`) },
      { t: 'h3', x: '2) Dùng event handler thay vì expression' },
      { t: 'p', x: 'Gắn hành vi động vào đúng sự kiện cần (ví dụ <code>onresize</code>) để khỏi bị tính khi các sự kiện không liên quan xảy ra. Với bài toán min-width: hàm <code>setMinWidth()</code> chạy ở onresize và đặt <code>runtimeStyle.width</code> cho các đoạn; còn lần render đầu dùng one-time expression.' },
      { t: 'key', x: 'Phần lớn các trường hợp dùng CSS expression đều có thể thay bằng cách khác. Dùng chúng mà không hiểu sâu hệ quả là nguy hiểm — vì vậy chọn <b>tránh dùng</b>.' }
    ] }
  ],
  summary: [
    'CSS expression: thuộc tính CSS = kết quả JavaScript; chỉ IE 5+.',
    'Tính lại cả khi cuộn và di chuột → có thể hàng chục nghìn lần.',
    'Cách tránh: one-time expression (tự ghi đè) hoặc event handler.',
    'Có thể ảnh hưởng cả thời gian tải (ca 20 giây ở Yahoo!).'
  ],
  cards: [
    ['CSS expression là gì?', 'Cú pháp expression() cho phép đặt thuộc tính CSS bằng biểu thức JavaScript (IE 5+).'],
    ['Vì sao chúng bị dùng?', 'Vá thiếu sót của IE như min-width.'],
    ['Vì sao chúng chậm?', 'Bị tính lại khi render, resize, cuộn, di chuột…'],
    ['Thí nghiệm đếm: tải trang chạy biểu thức mấy lần?', '40 lần (10 đoạn văn).'],
    ['Di chuột quanh trang có thể kích hoạt bao nhiêu lần?', 'Trên 10 000 lần.'],
    ['Hiện tượng lạ trong thí nghiệm?', 'Bấm vào ô nhập văn bản làm IE treo.'],
    ['One-time expression là gì?', 'Biểu thức tự ghi đè bằng giá trị cụ thể sau lần chạy đầu.'],
    ['Thay thế khác của expression?', 'Event handler (ví dụ onresize).'],
    ['Ca của Yahoo! về expression?', 'Một expression gây trễ 20 giây khi render lần đầu.'],
    ['Quy tắc này đặc biệt ở điểm nào?', 'Nhắm tới hiệu năng sau khi trang đã tải.']
  ],
  quiz: [
    { q: 'CSS expression được hỗ trợ bởi:', o: ['Mọi trình duyệt', 'IE 5+', 'Firefox', 'Safari'], a: 1, e: 'Trình duyệt khác bỏ qua.' },
    { q: 'Điều làm expression nguy hiểm là:', o: ['Cú pháp khó', 'Bị tính lại quá thường xuyên', 'Không an toàn bảo mật', 'Cần mạng'], a: 1, e: 'Cả khi cuộn và di chuột.' },
    { q: 'One-time expression hoạt động bằng cách:', o: ['Chạy mỗi giây', 'Tự ghi đè bằng giá trị cụ thể', 'Dùng gzip', 'Dùng CDN'], a: 1, e: 'Chỉ tính một lần.' },
    { q: 'Cách tránh khác ngoài one-time expression:', o: ['Event handler', 'Tăng RAM', 'Dùng @import', 'Bỏ CSS'], a: 0, e: 'Gắn vào sự kiện cần thiết.' },
    { q: 'Ca tính 40 lần khi tải trang gắn với:', o: ['Số script', 'Số đoạn văn (10 đoạn)', 'Số ảnh', 'Số hostname'], a: 1, e: 'Mỗi biểu thức tính lại theo phần tử.' },
    { q: 'Rule 7 chủ yếu liên quan đến:', o: ['Thời gian tải đầu tiên', 'Hiệu năng sau khi trang đã tải', 'Nén HTML', 'DNS'], a: 1, e: 'Dù đôi khi cả lúc tải.' }
  ],
  match: [
    ['expression()', 'JS trong giá trị CSS (IE)'],
    ['min-width', 'IE từng không hỗ trợ'],
    ['One-time expression', 'Tự thay bằng giá trị tĩnh sau lần đầu'],
    ['onresize', 'Sự kiện thay cho expression'],
    ['20 giây', 'Trễ do expression ở Yahoo!'],
    ['>10 000', 'Số lần tính khi di chuột quanh trang']
  ]
});
})();
