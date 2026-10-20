// Danh sách sách. Thêm sách mới: thêm 1 object vào đây + 1 file data/<id>.js
window.BOOKS = [
  {
    id: "almanac",
    title: "Stock Trader's Almanac 2005",
    subtitle: "Niên giám nhà giao dịch chứng khoán – mùa vụ và chu kỳ thị trường",
    author: "Yale Hirsch & Jeffrey A. Hirsch",
    cat: "Đầu tư & Tài chính",
    tags: ["mùa vụ","6 tháng tốt nhất","phong vũ biểu tháng 1","chu kỳ tổng thống","triple witching","macd","dow jones","s&p 500","nasdaq"],
    level: "Cơ bản → Trung cấp",
    emoji: "🗓",
    color: "linear-gradient(135deg,#1e3a8a,#38bdf8)",
    desc: "Thống kê tính mùa vụ của thị trường Mỹ (số liệu đến 2004): chỉ báo tháng Giêng, chiến lược 6 tháng tốt nhất + MACD, xếp hạng tháng, chu kỳ tổng thống/thập niên, thứ trong tuần, ngày đầu tháng, nghỉ lễ và triple witching. Có công cụ tương tác, flashcard, trắc nghiệm. Mô hình lịch sử không đảm bảo tương lai.",
    chapters: [
      { n: 1, title: "Đầu tư theo lịch: triết lý Almanac", ready: true },
      { n: 2, title: "Chỉ báo tháng Giêng", ready: true },
      { n: 3, title: "6 tháng tốt nhất (11–4) và MACD", ready: true },
      { n: 4, title: "Mùa vụ trong năm: tháng, quý, rally", ready: true },
      { n: 5, title: "Chính trị và chu kỳ: tổng thống, thập niên", ready: true },
      { n: 6, title: "Ngày và tuần: thứ, đầu tháng, lễ, triple witching", ready: true },
      { n: 7, title: "Dùng Almanac thực tế & tổng kết", ready: true }
    ]
  },
  {
    id: "phantichtc",
    title: "Phân tích tài chính",
    subtitle: "Corporate Finance – Chương trình Giảng dạy Kinh tế Fulbright (FETP)",
    author: "Nguyễn Minh Kiều, Ngô Kim Phượng, Diệp Dũng, Trần Thị Kim Chi và FETP",
    cat: "Đầu tư & Tài chính",
    tags: ["tài chính doanh nghiệp","thời giá tiền tệ","npv","irr","capm","wacc","đòn bẩy","cơ cấu vốn","phái sinh","tỷ giá"],
    level: "Cơ bản → Trung cấp",
    emoji: "📈",
    color: "linear-gradient(135deg,#064e3b,#10b981)",
    desc: "Giáo trình quản trị tài chính 17 bài: thời giá tiền tệ, định giá trái phiếu, rủi ro – lợi nhuận, CAPM, phân tích báo cáo tài chính, vốn lưu động, dự toán vốn đầu tư (NPV/IRR), chi phí vốn, đòn bẩy, cơ cấu vốn, thuê tài sản, phái sinh và rủi ro tỷ giá. Có máy tính tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Vai trò của quản trị tài chính", ready: true },
      { n: 2, title: "Môi trường kinh doanh và tài chính", ready: true },
      { n: 3, title: "Thời giá tiền tệ", ready: true },
      { n: 4, title: "Định giá chứng khoán (trái phiếu)", ready: true },
      { n: 5, title: "Lợi nhuận và rủi ro", ready: true },
      { n: 6, title: "Mô hình định giá tài sản vốn (CAPM)", ready: true },
      { n: 7, title: "Phân tích báo cáo tài chính", ready: true },
      { n: 8, title: "Quản trị tiền mặt và chứng khoán đầu tư", ready: true },
      { n: 9, title: "Quản trị khoản phải thu và hàng tồn kho", ready: true },
      { n: 10, title: "Dự toán vốn đầu tư", ready: true },
      { n: 11, title: "Chi phí sử dụng vốn", ready: true },
      { n: 12, title: "Đòn bẩy hoạt động và đòn bẩy tài chính", ready: true },
      { n: 13, title: "Quyết định cơ cấu vốn của công ty", ready: true },
      { n: 14, title: "Thuê tài sản: thuê hay mua?", ready: true },
      { n: 15, title: "Công cụ tài chính phái sinh", ready: true },
      { n: 16, title: "Phân tích tài chính quốc tế", ready: true },
      { n: 17, title: "Rủi ro tỷ giá và cách tự bảo hiểm", ready: true }
    ]
  },
  {
    id: "buffett",
    title: "Phong cách đầu tư Warren Buffett",
    subtitle: "The Warren Buffett Way",
    author: "Robert G. Hagstrom",
    cat: "Đầu tư & Tài chính",
    tags: ["warren buffett","đầu tư giá trị","berkshire hathaway","graham","biên độ an toàn","định giá","tâm lý đầu tư","cổ phiếu"],
    level: "Cơ bản → Trung cấp",
    emoji: "💰",
    color: "linear-gradient(135deg,#7c2d12,#f59e0b)",
    desc: "12 nguyên lý đầu tư của Warren Buffett: kinh doanh, quản lý, tài chính, giá trị; cùng học vấn từ Graham–Fisher–Williams–Munger, thương vụ Coca-Cola, Gillette, Washington Post, bảo hiểm, danh mục tập trung và tâm lý nhà đầu tư. 12 chương có widget tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Nhà đầu tư vĩ đại nhất thế giới", ready: true },
      { n: 2, title: "Học vấn của Warren Buffett", ready: true },
      { n: 3, title: "“Ngành kinh doanh chính của chúng tôi là bảo hiểm”", ready: true },
      { n: 4, title: "Mua một doanh nghiệp", ready: true },
      { n: 5, title: "Hướng dẫn đầu tư: Nguyên lý kinh doanh", ready: true },
      { n: 6, title: "Hướng dẫn đầu tư: Nguyên lý quản lý", ready: true },
      { n: 7, title: "Hướng dẫn đầu tư: Nguyên lý tài chính", ready: true },
      { n: 8, title: "Hướng dẫn đầu tư: Nguyên lý giá trị", ready: true },
      { n: 9, title: "Đầu tư vào những chứng khoán thu nhập cố định", ready: true },
      { n: 10, title: "Quản lý danh mục đầu tư", ready: true },
      { n: 11, title: "Tâm lý tiền bạc", ready: true },
      { n: 12, title: "Nhân vật “không duy lý”", ready: true }
    ]
  },
  {
    id: "kinhte",
    title: "Các khái niệm cơ bản về kinh tế",
    subtitle: "Basic Economic Concepts – Phần 1–3: Vi mô, vĩ mô, tài chính & thuế",
    author: "Nhiều tác giả – Chương trình Giảng dạy Kinh tế Fulbright (FETP)",
    cat: "Kinh tế",
    tags: ["kinh tế vi mô","cung cầu","ngoại tác","độc quyền","rủi ro","thuế","vĩ mô","tỷ giá","lạm phát","toàn cầu hóa"],
    level: "Cơ bản",
    emoji: "📊",
    color: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    desc: "Phần 1 vi mô (bài 1–33) và Phần 3 tài chính & thuế (bài 66–98: thuế, hệ thống tài chính, quyền chọn cổ phiếu, tiết kiệm, vốn mạo hiểm, kinh tế lượng…), Phần 2 vĩ mô & quốc tế (bài 34–65: GDP, tài khóa, tiền tệ, lạm phát, tỷ giá, khủng hoảng, bán phá giá, toàn cầu hóa…): chi phí cơ hội, cung cầu, thặng dư, ngoại tác, phân tích cận biên, độc quyền, thông tin bất cân xứng, giá chuyển giao, thuế. Có widget tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Nhập môn: kinh tế học nghiên cứu điều gì?", ready: true },
      { n: 2, title: "Cung, cầu và cân bằng thị trường", ready: true },
      { n: 3, title: "Thị trường phân bổ nguồn lực và phúc lợi", ready: true },
      { n: 4, title: "Ngoại tác và chi phí toàn bộ", ready: true },
      { n: 5, title: "Phân tích cận biên và độc quyền", ready: true },
      { n: 6, title: "Rủi ro, bất định và thông tin bất cân xứng", ready: true },
      { n: 7, title: "Giá chuyển giao nội bộ và gánh nặng thuế", ready: true },
      { n: 8, title: "Kinh tế học trong đời sống và các cú sốc", ready: true },
      { n: 9, title: "Đo lường nền kinh tế và chính sách vĩ mô", ready: true },
      { n: 10, title: "Lạm phát, giảm phát và giá trị thực", ready: true },
      { n: 11, title: "Tỷ giá hối đoái: danh nghĩa, thực và các chế độ", ready: true },
      { n: 12, title: "Tỷ giá, đồng nhân dân tệ và khủng hoảng tài chính", ready: true },
      { n: 13, title: "Công nghiệp hóa, công nghệ và năng lực cạnh tranh", ready: true },
      { n: 14, title: "Viện trợ, FDI và đo lường hiệu quả công", ready: true },
      { n: 15, title: "Bán phá giá và thương mại công bằng", ready: true },
      { n: 16, title: "Toàn cầu hóa, tài nguyên, vàng và quy tắc 72", ready: true },
      { n: 17, title: "Thuế cơ bản: nêm thuế, thuế trực thu – gián thu, thu nhập", ready: true },
      { n: 18, title: "Công bằng và hiệu quả trong hệ thống thuế", ready: true },
      { n: 19, title: "Ưu đãi thuế, DNNN và cạnh tranh thuế", ready: true },
      { n: 20, title: "Hàng hóa công, trách nhiệm người nộp thuế và hệ thống tài chính", ready: true },
      { n: 21, title: "Thông tin, thị trường hiệu quả và cơ cấu vốn", ready: true },
      { n: 22, title: "Chủ sở hữu – nhà quản lý và quyền chọn cổ phiếu", ready: true },
      { n: 23, title: "Tiết kiệm, tín dụng vi mô và vốn mạo hiểm", ready: true },
      { n: 24, title: "Công cụ phân tích và hệ quả của chính sách công", ready: true }
    ]
  },
  {
    id: "android-security",
    href: "android-security/index.html",
    progressKey: "asi:ch",
    title: "Android Security Internals",
    subtitle: "An In-Depth Guide to Android's Security Architecture",
    author: "Nikolay Elenkov",
    cat: "Bảo mật & CNTT",
    tags: ["android", "bảo mật", "selinux", "binder", "permission", "apk", "mật mã", "pki", "tls", "keystore", "nfc", "root", "bootloader", "vpn", "mã hóa"],
    level: "Trung cấp → Nâng cao",
    emoji: "🛡️",
    color: "linear-gradient(135deg,#0b3d2a,#0f9d58)",
    desc: "Kiến trúc bảo mật Android từ gốc: Binder, sandbox, permission, quản lý gói, mật mã, PKI, credential storage, enterprise, SELinux, cập nhật hệ thống và root. 13 chương có bài giảng trực quan, flashcard, trắc nghiệm và luyện tập.",
    chapters: [
      { n: 1, title: "Mô hình bảo mật của Android", ready: true },
      { n: 2, title: "Quyền (Permissions)", ready: true },
      { n: 3, title: "Quản lý gói ứng dụng", ready: true },
      { n: 4, title: "Quản lý người dùng", ready: true },
      { n: 5, title: "Nhà cung cấp mật mã", ready: true },
      { n: 6, title: "Bảo mật mạng và PKI", ready: true },
      { n: 7, title: "Lưu trữ thông tin xác thực", ready: true },
      { n: 8, title: "Quản lý tài khoản online", ready: true },
      { n: 9, title: "Bảo mật doanh nghiệp", ready: true },
      { n: 10, title: "Bảo mật thiết bị", ready: true },
      { n: 11, title: "NFC và Secure Element", ready: true },
      { n: 12, title: "SELinux", ready: true },
      { n: 13, title: "Cập nhật hệ thống và Root", ready: true }
    ]
  },
  {
    id: "ichimoku",
    title: "Giao dịch với Ichimoku",
    subtitle: "Trading with Ichimoku",
    author: "Karen Péloille",
    cat: "Phân tích kỹ thuật",
    tags: ["ichimoku", "kumo", "đám mây", "tenkan", "kijun", "chikou", "forex", "chứng khoán", "xu hướng", "fibonacci", "tâm lý giao dịch"],
    level: "Cơ bản → Nâng cao",
    emoji: "☁️",
    color: "linear-gradient(135deg,#3b5bdb,#7048e8)",
    desc: "Hướng dẫn thực hành hệ thống Ichimoku Kinko Hyo: 5 đường, đám mây, cách đọc biểu đồ, vào/thoát lệnh rủi ro thấp và kỷ luật giao dịch.",
    chapters: [
      { n: 1, title: "Lý thuyết – Cấu tạo Ichimoku", ready: true },
      { n: 2, title: "Đọc biểu đồ Ichimoku", ready: true },
      { n: 3, title: "Phân tích đa khung thời gian", ready: true },
      { n: 4, title: "Giao dịch với Ichimoku", ready: true },
      { n: 5, title: "Kỹ thuật nâng cao: chiếu khung thời gian", ready: true },
      { n: 6, title: "Ichimoku kết hợp Fibonacci", ready: true },
      { n: 7, title: "Nghệ thuật giao dịch kỷ luật", ready: true }
    ]
  },
  {
    id: "mba30",
    title: "Tự học MBA Marketing trong 30 ngày",
    subtitle: "Teach Yourself MBA in Marketing in 30 Days",
    author: "Colin Barrow",
    cat: "Quản trị kinh doanh",
    tags: ["mba", "marketing", "quản trị", "khách hàng", "thương hiệu", "định giá", "phân phối", "quảng cáo", "chiến lược", "kế hoạch marketing", "4P", "kế toán", "tài chính"],
    level: "Cơ bản",
    emoji: "🎓",
    color: "linear-gradient(135deg,#f08c00,#e8590c)",
    desc: "12 chủ đề cốt lõi của chương trình MBA Marketing: hành vi người tiêu dùng, chiến lược, sản phẩm, quảng cáo, phân phối, định giá, toán học marketing, tổ chức, pháp luật, lập kế hoạch và tài chính cơ bản.",
    chapters: [
      { n: 1, title: "Nhập môn Marketing", ready: true },
      { n: 2, title: "Hành vi của người tiêu dùng", ready: true },
      { n: 3, title: "Chiến lược marketing", ready: true },
      { n: 4, title: "Sản phẩm và dịch vụ", ready: true },
      { n: 5, title: "Quảng cáo và xúc tiến sản phẩm", ready: true },
      { n: 6, title: "Điểm bán hàng và phân phối", ready: true },
      { n: 7, title: "Định giá", ready: true },
      { n: 8, title: "Toán học dành cho marketing", ready: true },
      { n: 9, title: "Quản lý hoạt động marketing", ready: true },
      { n: 10, title: "Marketing và pháp luật", ready: true },
      { n: 11, title: "Kế hoạch marketing và ngân sách", ready: true },
      { n: 12, title: "Những vấn đề cốt lõi (kế toán, tài chính, tổ chức, chiến lược)", ready: true }
    ]
  }
,
  {
    id: "valuation",
    title: "Định giá đầu tư (Investment Valuation, ấn bản 2)",
    subtitle: "Investment Valuation – Tools and Techniques for Determining the Value of Any Asset",
    author: "Aswath Damodaran",
    cat: "Tài chính đầu tư",
    tags: ["định giá", "valuation", "dcf", "chiết khấu dòng tiền", "wacc", "định giá tương đối", "p/e", "quyền chọn", "cổ phiếu", "doanh nghiệp", "tài chính", "damodaran", "đầu tư"],
    level: "Trung cấp → Nâng cao",
    emoji: "💹",
    color: "linear-gradient(135deg,#0b7285,#1c7ed6)",
    desc: "Giáo trình kinh điển về định giá mọi tài sản: DCF, định giá tương đối, quyền chọn; từ cổ phiếu, doanh nghiệp tư nhân, khởi nghiệp, bất động sản đến trái phiếu và phái sinh. 35 chương – đang soạn dần.",
    chapters: [
      { n: 1, title: "Giới thiệu về định giá", ready: true },
      { n: 2, title: "Các phương pháp định giá", ready: true },
      { n: 3, title: "Hiểu báo cáo tài chính", ready: true },
      { n: 4, title: "Cơ bản về rủi ro", ready: true },
      { n: 5, title: "Lý thuyết và mô hình định giá quyền chọn", ready: false },
      { n: 6, title: "Hiệu quả thị trường: lý thuyết và mô hình", ready: false },
      { n: 7, title: "Lãi suất phi rủi ro và phần bù rủi ro", ready: true },
      { n: 8, title: "Ước tính tham số rủi ro và chi phí tài trợ", ready: true },
      { n: 9, title: "Đo lường lợi nhuận", ready: false },
      { n: 10, title: "Từ lợi nhuận đến dòng tiền", ready: false },
      { n: 11, title: "Ước tính tăng trưởng", ready: false },
      { n: 12, title: "Giá trị cuối kỳ (terminal value)", ready: false },
      { n: 13, title: "Mô hình chiết khấu cổ tức", ready: false },
      { n: 14, title: "Mô hình dòng tiền tự do vốn chủ sở hữu", ready: false },
      { n: 15, title: "Định giá doanh nghiệp: WACC và APV", ready: false },
      { n: 16, title: "Ước tính giá trị vốn chủ sở hữu trên mỗi cổ phiếu", ready: false },
      { n: 17, title: "Nguyên tắc định giá tương đối", ready: false },
      { n: 18, title: "Bội số lợi nhuận", ready: false },
      { n: 19, title: "Bội số giá trị sổ sách", ready: false },
      { n: 20, title: "Bội số doanh thu và theo ngành", ready: false },
      { n: 21, title: "Định giá tổ chức tài chính", ready: false },
      { n: 22, title: "Định giá doanh nghiệp lợi nhuận âm", ready: false },
      { n: 23, title: "Định giá doanh nghiệp trẻ và khởi nghiệp", ready: false },
      { n: 24, title: "Định giá doanh nghiệp tư nhân", ready: false },
      { n: 25, title: "Mua lại và thâu tóm", ready: false },
      { n: 26, title: "Định giá bất động sản", ready: false },
      { n: 27, title: "Định giá các tài sản khác", ready: false },
      { n: 28, title: "Quyền chọn trì hoãn", ready: false },
      { n: 29, title: "Quyền chọn mở rộng và từ bỏ", ready: false },
      { n: 30, title: "Định giá vốn chủ sở hữu doanh nghiệp khó khăn", ready: false },
      { n: 31, title: "Tăng giá trị: khung DCF", ready: false },
      { n: 32, title: "Tăng giá trị: EVA, CFROI", ready: false },
      { n: 33, title: "Định giá trái phiếu", ready: false },
      { n: 34, title: "Định giá hợp đồng kỳ hạn và tương lai", ready: false },
      { n: 35, title: "Tổng quan và kết luận", ready: false }
    ]
  },
{
  "id": "marks",
  "title": "Điều quan trọng nhất được làm sáng tỏ",
  "subtitle": "The Most Important Thing Illuminated – Uncommon Sense for the Thoughtful Investor",
  "author": "Howard Marks (có chú giải của Davis, Greenblatt, Klarman, Johnson)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "howard marks",
    "đầu tư giá trị",
    "rủi ro",
    "chu kỳ",
    "tâm lý thị trường",
    "hiệu quả thị trường",
    "đối kháng",
    "oaktree",
    "tư duy cấp hai"
  ],
  "level": "Trung cấp",
  "emoji": "🧭",
  "color": "linear-gradient(135deg,#7c2d12,#ea580c)",
  "desc": "21 'điều quan trọng nhất' trong đầu tư của Howard Marks: tư duy cấp hai, giá trị và giá cả, rủi ro, chu kỳ, con lắc tâm lý, chủ nghĩa đối kháng, đầu tư phòng thủ, kỳ vọng hợp lý… kèm chú giải của các nhà đầu tư lớn.",
  "chapters": [
    {
      "n": 1, "title": "Suy nghĩ cấp thứ hai", "ready": true
    },
    {
      "n": 2, "title": "Hiểu biên độ thị trường (hiệu quả thị trường) và hạn chế", "ready": true
    },
    {
      "n": 3,
      "title": "Giá trị",
      "ready": true
    },
    {
      "n": 4,
      "title": "Mối quan hệ giữa giá cả và giá trị",
      "ready": true
    },
    {
      "n": 5,
      "title": "Hiểu biết về rủi ro",
      "ready": true
    },
    {
      "n": 6,
      "title": "Nhận diện rủi ro",
      "ready": true
    },
    {
      "n": 7,
      "title": "Kiểm soát rủi ro",
      "ready": true
    },
    {
      "n": 8,
      "title": "Chú ý đến các chu kỳ",
      "ready": true
    },
    {
      "n": 9,
      "title": "Nhận thức về con lắc",
      "ready": true
    },
    {
      "n": 10,
      "title": "Đối phó với ảnh hưởng tiêu cực",
      "ready": true
    },
    {
      "n": 11,
      "title": "Chủ nghĩa đối kháng",
      "ready": true
    },
    {
      "n": 12,
      "title": "Tìm kiếm món hời",
      "ready": true
    },
    {
      "n": 13,
      "title": "Kiên nhẫn chờ cơ hội",
      "ready": true
    },
    {
      "n": 14,
      "title": "Biết những gì bạn không biết",
      "ready": true
    },
    {
      "n": 15,
      "title": "Cảm nhận vị trí của chúng ta",
      "ready": true
    },
    {
      "n": 16,
      "title": "Đánh giá vai trò của may mắn",
      "ready": true
    },
    {
      "n": 17,
      "title": "Đầu tư phòng thủ",
      "ready": true
    },
    {
      "n": 18,
      "title": "Tránh những cạm bẫy",
      "ready": true
    },
    {
      "n": 19,
      "title": "Thêm giá trị",
      "ready": true
    },
    {
      "n": 20,
      "title": "Kỳ vọng hợp lý",
      "ready": true
    },
    {
      "n": 21,
      "title": "Kết nối tất cả lại với nhau",
      "ready": true
    }
  ]
},
{
  "id": "stocks",
  "title": "Hiểu về cổ phiếu (Understanding Stocks)",
  "subtitle": "Understanding Stocks – nhập môn thị trường chứng khoán cho người mới",
  "author": "Michael Sincere (McGraw-Hill)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "cổ phiếu",
    "chứng khoán",
    "người mới",
    "phân tích kỹ thuật",
    "phân tích cơ bản",
    "giao dịch",
    "đầu tư dài hạn",
    "tâm lý thị trường",
    "môi giới"
  ],
  "level": "Cơ bản",
  "emoji": "📈",
  "color": "linear-gradient(135deg,#065f46,#10b981)",
  "desc": "Giáo trình nhập môn cho người mới: cổ phiếu là gì, phân loại, mua ở đâu, chiến lược đầu tư và giao dịch, phân tích cơ bản – kỹ thuật – tâm lý, vì sao giá lên xuống và vì sao nhà đầu tư thua lỗ.",
  "chapters": [
    {
      "n": 1,
      "title": "Chào mừng đến thị trường chứng khoán",
      "ready": true
    },
    {
      "n": 2,
      "title": "Cổ phiếu không phải khoản đầu tư duy nhất",
      "ready": true
    },
    {
      "n": 3,
      "title": "Cách phân loại cổ phiếu",
      "ready": true
    },
    {
      "n": 4,
      "title": "Những điều thú vị bạn có thể làm với cổ phiếu",
      "ready": true
    },
    {
      "n": 5,
      "title": "Hiểu giá cổ phiếu",
      "ready": true
    },
    {
      "n": 6,
      "title": "Mua cổ phiếu ở đâu",
      "ready": true
    },
    {
      "n": 7,
      "title": "Chiến lược đầu tư kiếm tiền chậm",
      "ready": true
    },
    {
      "n": 8,
      "title": "Chiến lược giao dịch kiếm tiền nhanh",
      "ready": true
    },
    {
      "n": 9,
      "title": "Phân tích cơ bản: nhập môn",
      "ready": true
    },
    {
      "n": 10,
      "title": "Phân tích cơ bản: công cụ và chiến thuật",
      "ready": true
    },
    {
      "n": 11,
      "title": "Phân tích kỹ thuật: nhập môn",
      "ready": true
    },
    {
      "n": 12,
      "title": "Phân tích kỹ thuật: công cụ và chiến thuật",
      "ready": true
    },
    {
      "n": 13,
      "title": "Tâm lý cổ phiếu: phân tích tâm lý thị trường",
      "ready": true
    },
    {
      "n": 14,
      "title": "Điều gì khiến cổ phiếu tăng hay giảm",
      "ready": true
    },
    {
      "n": 15,
      "title": "Vì sao nhà đầu tư thua lỗ",
      "ready": true
    },
    {
      "n": 16,
      "title": "Tác giả thực sự nghĩ gì về thị trường chứng khoán",
      "ready": true
    }
  ]
}
,
{
  "id": "streetsmart",
  "title": "Hướng dẫn định giá cổ phiếu (Streetsmart Guide to Valuing a Stock)",
  "subtitle": "The Savvy Investor’s Key to Beating the Market – ấn bản 2",
  "author": "Gary Gray, Patrick J. Cusatis, J. Randall Woolridge (McGraw-Hill)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "định giá cổ phiếu",
    "dcf",
    "fcff",
    "wacc",
    "chi phí vốn",
    "nguyên tắc tài chính",
    "citigroup",
    "berkshire",
    "microsoft"
  ],
  "level": "Trung cấp",
  "emoji": "🧮",
  "color": "linear-gradient(135deg,#1e3a8a,#6366f1)",
  "desc": "Cách định giá cổ phiếu bằng chiết khấu dòng tiền tự do (FCFF): 10 nguyên tắc tài chính, dự báo dòng tiền, ước tính WACC, tìm dữ liệu trên Internet và các ví dụ thực tế (Microsoft, Cisco, ConEd, Citigroup, Merrill Lynch, Berkshire, Washington REIT).",
  "chapters": [
    {
      "n": 1,
      "title": "Giới thiệu và tổng quan",
      "ready": true
    },
    {
      "n": 2,
      "title": "10 nguyên tắc tài chính và cách dùng",
      "ready": true
    },
    {
      "n": 3,
      "title": "Định giá cổ phiếu: những điều sơ bộ",
      "ready": true
    },
    {
      "n": 4,
      "title": "Cách định giá một cổ phiếu (DCF)",
      "ready": true
    },
    {
      "n": 5,
      "title": "Dự báo dòng tiền kỳ vọng",
      "ready": true
    },
    {
      "n": 6,
      "title": "Ước tính chi phí vốn",
      "ready": true
    },
    {
      "n": 7,
      "title": "Tìm thông tin cho việc định giá",
      "ready": true
    },
    {
      "n": 8,
      "title": "Định giá cổ phiếu: ghép tất cả lại (Citigroup, Merrill Lynch, Berkshire, Washington REIT)",
      "ready": true
    }
  ]
}
,
{
  "id": "buffett",
  "title": "Chọn cổ phiếu như Warren Buffett (Pick Stocks Like Warren Buffett)",
  "subtitle": "J.K. Lasser’s – chiến lược của Buffett và các nhà đầu tư giá trị",
  "author": "Warren Boroson (John Wiley & Sons)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "buffett",
    "đầu tư giá trị",
    "graham",
    "fisher",
    "berkshire",
    "biên an toàn",
    "tâm lý đầu tư",
    "sequoia"
  ],
  "level": "Cơ bản",
  "emoji": "🧓",
  "color": "linear-gradient(135deg,#7c2d12,#f59e0b)",
  "desc": "12 nguyên tắc đầu tư của Buffett, ảnh hưởng của Graham và Fisher, các lỗi tâm lý cần tránh, danh mục tập trung hay đa dạng, và chân dung 20+ nhà đầu tư giá trị (Ruane, Hagstrom, Browne, Whitman, Schloss, Torray, Gipson, Price…).",
  "chapters": [
    {
      "n": 1,
      "title": "Đầu tư như Buffett: cách làm, thành tích và cuộc đời",
      "ready": true
    },
    {
      "n": 2,
      "title": "Hai người thầy: Graham, Fisher và giá trị vs tăng trưởng",
      "ready": true
    },
    {
      "n": 3,
      "title": "12 nguyên tắc, không đánh bạc, mua giá “hời”",
      "ready": true
    },
    {
      "n": 4,
      "title": "Mua cái bạn hiểu, làm bài tập, đi ngược đám đông",
      "ready": true
    },
    {
      "n": 5,
      "title": "Công ty tuyệt vời và những người quản lý đáng tin",
      "ready": true
    },
    {
      "n": 6,
      "title": "Nhà đầu tư, không phải tay súng; hãy kinh doanh lạnh lùng",
      "ready": true
    },
    {
      "n": 7,
      "title": "Nhận sai lầm, tránh bẫy tâm lý, tập trung hay đa dạng",
      "ready": true
    },
    {
      "n": 8,
      "title": "Bộ lọc kiểu Buffett và những người đi theo (Ruane, Hagstrom, Simpson, Browne)",
      "ready": true
    },
    {
      "n": 9,
      "title": "Whitman, Schloss, Torray và Walczak: bốn phong cách giá trị",
      "ready": true
    },
    {
      "n": 10,
      "title": "Gipson, Price và các nhà đầu tư giá trị khác",
      "ready": true
    },
    {
      "n": 11,
      "title": "Tổng hợp: phẩm chất, công ty tuyệt vời và danh ngôn Buffett",
      "ready": true
    },
    {
      "n": 12,
      "title": "Phụ lục: Schloss, Whitman, đại hội Berkshire và Phil Carret",
      "ready": true
    }
  ]
}
];
