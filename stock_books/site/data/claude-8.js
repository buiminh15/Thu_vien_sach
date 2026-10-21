// "Claude Code How-To" – Chương 8: Checkpoints và Rewind.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 8,
  title: 'Checkpoints và Rewind',
  intro: 'Checkpoint là ảnh chụp trạng thái hội thoại (tin nhắn, sửa file, lịch sử công cụ, ngữ cảnh). Nhờ đó bạn thử nghiệm an toàn, so sánh nhiều hướng, và quay lại khi sai. Chúng bổ sung cho git chứ không thay thế.',
  sections: [
    { icon: '⏪', title: 'Mở và dùng rewind', blocks: [
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['Checkpoint', 'Snapshot hội thoại + file + ngữ cảnh'],
        ['Rewind', 'Quay lại checkpoint trước, bỏ các thay đổi sau đó'],
        ['Điểm nhánh', 'Checkpoint mà từ đó bạn thử nhiều cách tiếp cận']
      ] },
      { t: 'key', x: 'Mở bằng <code>Esc</code> <code>Esc</code> (nhấn hai lần) hoặc <code>/rewind</code> (bí danh <code>/checkpoint</code>, <code>/undo</code>). Mỗi checkpoint hiển thị thời gian, file đã sửa, số tin nhắn và công cụ đã dùng.' },
      { t: 'p', x: 'Claude Code <b>tự tạo checkpoint cho mỗi prompt</b> của bạn; checkpoint lưu cùng hội thoại nên <code>/rewind</code> vẫn dùng được sau khi resume phiên.' },
      { t: 'widget', name: 'rewind-sim', title: 'Mô phỏng rewind: chọn checkpoint và kiểu khôi phục' }
    ] },
    { icon: '🎚', title: 'Năm tùy chọn khi rewind', blocks: [
      { t: 'steps', items: [
        '<b>Khôi phục code và hội thoại</b> — hoàn nguyên cả file lẫn tin nhắn về checkpoint.',
        '<b>Khôi phục hội thoại</b> — chỉ tua tin nhắn, giữ nguyên code hiện tại.',
        '<b>Khôi phục code</b> — chỉ hoàn nguyên file, giữ lịch sử hội thoại.',
        '<b>Tóm tắt từ đây</b> — nén hội thoại từ điểm này thành tóm tắt AI (có thể kèm hướng dẫn tập trung); tin nhắn gốc vẫn còn trong transcript.',
        '<b>Không sao cả</b> — hủy, quay lại trạng thái hiện tại.'
      ] },
      { t: 'table', head: ['Kịch bản', 'Quy trình'], rows: [
        ['Khám phá hướng', 'Lưu → thử A → lưu → rewind → thử B → so sánh'],
        ['Refactor an toàn', 'Lưu → refactor → test → nếu fail: rewind'],
        ['A/B', 'Thiết kế A → rewind → thiết kế B → so sánh'],
        ['Phục hồi sai lầm', 'Phát hiện vấn đề → rewind về trạng thái tốt cuối']
      ] },
      { t: 'tabs', items: [
        ['🌿 Nhánh khám phá', '1) Triển khai ban đầu = checkpoint A; 2) Thử cách 1 = B; 3) rewind về A; 4) Thử cách 2 = C; 5) so sánh B và C; 6) chọn tốt nhất.'],
        ['💾 Caching', 'Thêm Redis caching → thấy muốn in-memory → <code>Esc Esc</code> về checkpoint A → làm in-memory (B) → so sánh.'],
        ['🔐 JWT hỏng OAuth', 'Refactor auth sang JWT làm hỏng OAuth → rewind về trước refactor → làm cẩn thận hơn.'],
        ['🗄 Hai schema', 'Đánh dấu “Bắt đầu” → Schema A → rewind → Schema B → có cả hai để chọn.']
      ] }
    ] },
    { icon: '⚙️', title: 'Cấu hình, giới hạn, git', blocks: [
      { t: 'table', head: ['Setting', 'Mặc định', 'Tác dụng'], rows: [
        ['<code>fileCheckpointingEnabled</code>', 'true', 'Chụp snapshot file trước mỗi lần sửa (v2.1.119+); trong <code>/config</code> là “Rewind code (checkpoints)”; env: <code>CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING</code>'],
        ['<code>cleanupPeriodDays</code>', '30', 'Số ngày giữ lịch sử phiên và checkpoint']
      ] },
      { t: 'p', x: 'Chỉ giữ snapshot cho <b>100 checkpoint gần nhất</b>, cũ hơn bị bỏ dù còn trong hạn.' },
      { t: 'warn', x: '<b>Không được theo dõi:</b> thay đổi do lệnh Bash (<code>rm</code>, <code>mv</code>, <code>cp</code>…), thay đổi bên ngoài Claude Code (editor, terminal). Checkpoint <b>không thay thế git</b>.' },
      { t: 'table', head: ['', 'Git', 'Checkpoints'], rows: [
        ['Phạm vi', 'Hệ thống file', 'Hội thoại + file'],
        ['Độ bền', 'Vĩnh viễn', 'Theo phiên (30 ngày)'],
        ['Độ chi tiết', 'Commit', 'Bất kỳ điểm nào'],
        ['Tốc độ', 'Chậm hơn', 'Tức thì'],
        ['Chia sẻ', 'Có', 'Hạn chế']
      ] },
      { t: 'list', items: [
        'Dùng checkpoint cho thử nghiệm nhanh; git commit cho thay đổi đã hoàn thiện.',
        'Tạo checkpoint (hoặc commit) trước thao tác git; commit trạng thái checkpoint thành công.',
        'Xử lý sự cố: checkpoint thiếu → kiểm tra <code>fileCheckpointingEnabled</code>, đã bị dọn, dung lượng đĩa. Rewind lỗi → tránh thay đổi chưa commit xung đột, thử checkpoint khác.'
      ] },
      { t: 'tip', x: '<b>Khi nào nên rewind?</b> Khi hội thoại dài, cửa sổ ngữ cảnh đầy và chất lượng giảm âm thầm. Công cụ <b>cc-context-stats</b> thêm “vùng ngữ cảnh” vào thanh trạng thái: <b>Plan</b> (xanh, an toàn lập kế hoạch/code) → <b>Code</b> (vàng, tránh bắt đầu kế hoạch mới) → <b>Dump</b> (cam, hoàn thành rồi rewind/bắt đầu mới).' }
    ] }
  ],
  summary: [
    'Checkpoint tự tạo cho mỗi prompt; mở bằng <code>Esc Esc</code> hoặc <code>/rewind</code>.',
    'Năm lựa chọn: code+hội thoại, hội thoại, code, tóm tắt, hủy.',
    'Không theo dõi lệnh Bash hay thay đổi ngoài Claude; giữ 100 checkpoint gần nhất, 30 ngày.',
    'Dùng cùng git, không thay thế git.'
  ],
  cards: [
    ['Mở giao diện checkpoint?', '<code>Esc</code> <code>Esc</code> hoặc <code>/rewind</code>.'],
    ['Bí danh của /rewind?', '/checkpoint, /undo.'],
    ['Checkpoint được tạo khi nào?', 'Mỗi prompt của người dùng.'],
    ['Năm tùy chọn rewind?', 'Code+hội thoại; hội thoại; code; tóm tắt từ đây; không sao cả.'],
    ['“Tóm tắt từ đây”?', 'Nén hội thoại thành tóm tắt AI, bản gốc còn trong transcript.'],
    ['Giữ checkpoint bao lâu?', '30 ngày (<code>cleanupPeriodDays</code>); tối đa 100 checkpoint gần nhất.'],
    ['Bật/tắt chụp file?', '<code>fileCheckpointingEnabled</code> / <code>CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING</code>.'],
    ['Không được theo dõi?', 'Lệnh Bash (rm, mv, cp…) và thay đổi bên ngoài Claude Code.'],
    ['Checkpoint thay git?', 'Không; dùng bổ sung.'],
    ['cc-context-stats hiển thị gì?', 'Vùng ngữ cảnh Plan / Code / Dump trên thanh trạng thái.']
  ],
  quiz: [
    { q: 'Cách mở trình duyệt checkpoint nhanh:', o: ['Ctrl+Z', 'Esc hai lần', 'Ctrl+C', 'Tab'], a: 1, e: 'Hoặc /rewind.' },
    { q: 'Muốn giữ code hiện tại nhưng quay lại hội thoại cũ:', o: ['Khôi phục code', 'Khôi phục hội thoại', 'Cả hai', 'Không sao cả'], a: 1, e: 'Chỉ tua tin nhắn.' },
    { q: 'Điều nào KHÔNG được checkpoint theo dõi?', o: ['Edit của Claude', 'rm do Bash', 'Tin nhắn', 'Lịch sử công cụ'], a: 1, e: 'Thay đổi Bash và bên ngoài không được ghi lại.' },
    { q: 'Checkpoint thay thế git?', o: ['Có', 'Không', 'Chỉ trên Mac', 'Chỉ có hook'], a: 1, e: 'Dùng git cho thay đổi vĩnh viễn.' },
    { q: 'Snapshot giữ bao nhiêu checkpoint gần nhất?', o: ['10', '30', '100', 'Không giới hạn'], a: 2, e: 'Cũ hơn bị bỏ.' },
    { q: 'Vùng Dump của cc-context-stats nghĩa là:', o: ['An toàn lập kế hoạch', 'Nên hoàn thành và rewind/bắt đầu mới', 'Lỗi', 'Bắt đầu kế hoạch mới'], a: 1, e: 'Ngữ cảnh gần đầy.' }
  ],
  match: [
    ['Esc Esc', 'Mở checkpoint'],
    ['cleanupPeriodDays', 'Số ngày giữ checkpoint'],
    ['Tóm tắt từ đây', 'Nén hội thoại thành tóm tắt'],
    ['Bash rm/mv/cp', 'Không được theo dõi'],
    ['fileCheckpointingEnabled', 'Bật chụp snapshot file']
  ]
}
);
