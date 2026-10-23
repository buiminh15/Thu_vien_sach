// "Frontend Architecture for Design Systems" (Micah Godbolt, O'Reilly 2016) – bản tiếng Việt dễ hiểu, soạn từ bản tóm tắt.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 1,
  title: 'Nguồn gốc: vì sao cần kiến trúc frontend',
  intro: 'Web từ vài trang HTML đơn giản đã thành những hệ thống lớn có nhiều vai trò chuyên biệt. Frontend lâu nay bị coi là “việc làm sau”, dẫn tới nợ kỹ thuật. Chương này kể quá trình đó và lý do xuất hiện vai trò kiến trúc sư frontend.',
  sections: [
    { icon: '🕸️', title: 'Từ webmaster đến các vai trò chuyên biệt', blocks: [
      { t: 'p', x: 'Đầu thập niên 90, website đơn giản, được liệt kê trên Yahoo! và đầy ảnh GIF động. <b>Webmaster</b> lo mọi thứ từ HTML cơ bản; họ coi CSS và JavaScript chỉ là mốt nhất thời. Khi lưu lượng tăng và công nghệ phát triển, vai trò tách dần: thiết kế, backend, nội dung, frontend…' },
      { t: 'timeline', items: [['Đầu 90s', 'Webmaster làm tất cả; trang đơn giản'], ['2007', 'iPhone ra đời – màn hình nhiều kích thước'], ['2008', 'Kristina Halvorson thúc đẩy content strategy'], ['2010', 'Ethan Marcotte công bố Responsive Web Design'], ['2014', 'Bài nói chớp nhoáng ở CSS Dev Conf: “frontend architect”']] }
    ] },
    { icon: '✍️', title: 'Nội dung và Responsive Web Design', blocks: [
      { t: 'p', x: 'Trước kia nội dung chỉ là thứ làm sau. Từ năm 2008 <b>content strategist</b> (nổi bật là Kristina Halvorson) coi nội dung là tài sản chiến lược và hình thành cộng đồng riêng.' },
      { t: 'p', x: 'iPhone (2007) khiến thiết kế phải tính tới nhiều cỡ màn hình và kiểu kết nối; “pinch and zoom” không đủ. Bài báo của Ethan Marcotte (2010) đưa ra giải pháp trọn vẹn: <b>lưới linh hoạt (fluid grid)</b>, <b>media query</b>… gọi là <b>Responsive Web Design (RWD)</b>.' }
    ] },
    { icon: '🏗️', title: 'Cần một kiến trúc cho frontend', blocks: [
      { t: 'key', x: 'Frontend trong vòng đời dự án thường mang tính <b>phản ứng, bị động</b>; thiếu cách làm có cấu trúc → thực hành không bền vững và nợ kỹ thuật. Tác giả hình dung kiến trúc frontend là phần của giai đoạn lập kế hoạch, và coi dev frontend ngang với kiến trúc sư backend.' },
      { t: 'p', x: 'Từ đó có chức danh chính thức <b>frontend architect</b> (đặt trong buổi nói chớp nhoáng tại CSS Dev Conf 2014), tạo ra sự đổi khác về nhận thức và một cộng đồng hỗ trợ lẫn nhau.' }
    ] }
  ],
  summary: [
    'Web phát triển từ webmaster “làm tất cả” sang nhiều vai trò chuyên biệt.',
    'Content strategy (2008) và RWD (Marcotte, 2010) thay đổi cách làm web.',
    'Frontend lâu nay bị động, gây nợ kỹ thuật → cần frontend architect, được tuyên bố năm 2014.'
  ],
  cards: [
    ['Webmaster thời đầu làm gì?', 'Quản lý toàn bộ website từ HTML cơ bản; coi CSS/JS là mốt.'],
    ['Ai thúc đẩy content strategy (2008)?', 'Kristina Halvorson.'],
    ['Điều gì khiến RWD ra đời?', 'iPhone 2007 và màn hình nhiều kích thước.'],
    ['Ai viết bài RWD năm 2010?', 'Ethan Marcotte.'],
    ['Hai kỹ thuật chính của RWD?', 'Lưới linh hoạt (fluid grids) và media query.'],
    ['Vấn đề của frontend truyền thống?', 'Bị động, thiếu cấu trúc → nợ kỹ thuật.'],
    ['Chức danh mới đề xuất?', 'Frontend architect (CSS Dev Conf 2014).'],
    ['Tác giả cuốn sách?', 'Micah Godbolt.']
  ],
  quiz: [
    { q: 'RWD được trình bày bởi:', o: ['Brad Frost', 'Ethan Marcotte', 'Jakob Nielsen', 'Steve Souders'], a: 1, e: 'Bài báo năm 2010.' },
    { q: 'Vì sao frontend dễ tích tụ nợ kỹ thuật?', o: ['Quá dễ', 'Thường làm sau, thiếu cấu trúc', 'Không dùng được Git', 'Không có công cụ'], a: 1, e: 'Cách làm bị động.' },
    { q: 'Sự kiện nào khiến cần thiết kế cho nhiều cỡ màn hình?', o: ['iPhone 2007', 'IE6', 'Flash', 'CDN'], a: 0, e: 'Mobile thay đổi mọi thứ.' },
    { q: 'Vai trò nhấn mạnh nội dung như tài sản chiến lược:', o: ['Webmaster', 'Content strategist', 'DBA', 'QA'], a: 1, e: 'Kristina Halvorson.' },
    { q: 'Kiến trúc frontend nên được tính vào:', o: ['Sau khi ra mắt', 'Giai đoạn lập kế hoạch dự án', 'Chỉ khi có lỗi', 'Không cần'], a: 1, e: 'Giá trị như backend architect.' }
  ],
  match: [
    ['Webmaster', 'Làm toàn bộ web thời đầu'],
    ['Content strategist', 'Coi nội dung là tài sản chiến lược'],
    ['Fluid grid', 'Thành phần của RWD'],
    ['2014', 'Frontend architect được tuyên bố'],
    ['iPhone 2007', 'Động lực của thiết kế đáp ứng']
  ]
});
