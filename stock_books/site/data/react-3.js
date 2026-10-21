// React Reference – Chương 9–13.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.reactref = BOOK_DATA.reactref || { chapters: [] };
const R3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.reactref.chapters.push(

{
  n: 9,
  title: 'Component có sẵn: Fragment, StrictMode, Profiler, Activity, ViewTransition',
  intro: 'Ngoài thẻ HTML và component của bạn, React cung cấp vài component đặc biệt cho nhóm, kiểm tra lỗi, đo hiệu năng, giữ state của phần bị ẩn, và tạo hiệu ứng chuyển cảnh. (Suspense đã học ở chương 6.)',
  sections: [
    { icon: '📦', title: 'Fragment: nhóm mà không thêm thẻ', blocks: [
      { t: 'p', x: '<code>&lt;&gt;...&lt;/&gt;</code> (hay <code>&lt;Fragment&gt;</code>) nhóm nhiều phần tử mà <b>không tạo thêm node DOM</b>. Cần <code>key</code> (ví dụ khi <code>map</code> ra nhiều cặp phần tử) thì phải dùng dạng đầy đủ <code>&lt;Fragment key={...}&gt;</code>.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> như <b>túi giấy vô hình</b>: xách nhiều thứ cùng lúc nhưng khi đặt xuống bàn chỉ thấy các món, không thấy túi.' },
      { t: 'list', items: [
        'Chuyển giữa <code>&lt;&gt;&lt;Child/&gt;&lt;/&gt;</code> và <code>&lt;Child/&gt;</code> hoặc mảng <b>không</b> reset state của con.',
        '<b>Fragment ref:</b> truyền <code>ref</code> vào Fragment (dạng đầy đủ) nhận một <code>FragmentInstance</code> với các phương thức làm việc trên <b>các DOM con cấp một</b>: <code>addEventListener</code>/<code>removeEventListener</code>, <code>dispatchEvent</code>, <code>focus</code>/<code>focusLast</code>/<code>blur</code>, <code>observeUsing</code> (IntersectionObserver/ResizeObserver), <code>getClientRects</code>, <code>getRootNode</code>, <code>compareDocumentPosition</code>, <code>scrollIntoView</code>.'
      ] }
    ] },
    { icon: '🧪', title: 'StrictMode: bắt lỗi sớm lúc phát triển', blocks: [
      { t: 'p', x: R3(`createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
)`) },
      { t: 'table', head: ['Kiểm tra (chỉ ở development)', 'Bắt lỗi gì'], rows: [
        ['Render <b>thêm một lần</b>', 'Component/hàm không pure (kết quả khác nhau khi gọi lại)'],
        ['Chạy lại <b>Effect</b> thêm một lần', 'Thiếu cleanup'],
        ['Chạy lại <b>ref callback</b> thêm một lần', 'Thiếu dọn dẹp ref'],
        ['Cảnh báo <b>API lỗi thời</b>', 'Dùng thứ sắp bị gỡ']
      ] },
      { t: 'tip', x: 'Chỉ chạy ở <b>development</b>, không ảnh hưởng production. Không có cách “thoát” bên trong cây được bọc — để bảo đảm kiểm tra tất cả. Nên bọc <b>cả app</b> (framework tạo root hộ thì xem tài liệu framework).' }
    ] },
    { icon: '⏱', title: 'Profiler: đo thời gian render', blocks: [
      { t: 'p', x: R3(`<Profiler id="Feed" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => { ... }}>
  <Feed />
</Profiler>`) },
      { t: 'list', items: [
        '<code>phase</code>: <code>"mount"</code>, <code>"update"</code> hoặc <code>"nested-update"</code>.',
        '<code>actualDuration</code>: thời gian thực tế render (ms) trong lần cập nhật đó — cho biết memo hiệu quả đến đâu.',
        '<code>baseDuration</code>: ước tính thời gian nếu render lại <b>cả cây không tối ưu</b>.',
        'Profiler có chi phí nên <b>mặc định tắt ở production</b>; cần bật bản build profiling đặc biệt.'
      ] }
    ] },
    { icon: '🗄', title: 'Activity: ẩn mà vẫn giữ trạng thái', blocks: [
      { t: 'p', x: 'Thông thường ẩn một phần bằng <code>{show &amp;&amp; &lt;Sidebar/&gt;}</code> là <b>gỡ</b> nó: mất hết state (mục đang mở…). <code>&lt;Activity mode="hidden"&gt;</code> <b>ẩn bằng <code>display: none</code> nhưng giữ state</b>; khi hiện lại mọi thứ trở về như cũ và Effect được tạo lại.' },
      { t: 'p', x: R3(`<Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
  <Sidebar />
</Activity>`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> đóng cửa phòng nhưng <b>giữ nguyên đồ đạc bên trong</b> thay vì dọn sạch phòng. Mở cửa lại là mọi thứ như cũ.' },
      { t: 'list', items: [
        'Khi ẩn: Effect của con được <b>dọn dẹp</b> (như unmount), nhưng state và DOM được giữ; con vẫn render lại khi có props mới, với <b>độ ưu tiên thấp</b>.',
        '<code>mode</code>: <code>"visible"</code> (mặc định) hoặc <code>"hidden"</code>.',
        'Chỉ render chữ thuần thì khi ẩn không render gì (không có DOM để ẩn).',
        'Hợp để “làm sẵn” trang kế (tab, màn hình có thể mở), giữ thông tin form khi chuyển tab.'
      ] },
      { t: 'widget', name: 'rx-activity', title: 'Gỡ hẳn vs Activity: thử mở rộng mục “Overview” rồi ẩn/hiện sidebar' }
    ] },
    { icon: '🎬', title: 'ViewTransition và addTransitionType', blocks: [
      { t: 'p', x: '<code>&lt;ViewTransition&gt;</code> animate cây component khi cập nhật trong <b>Transition</b> hoặc khi Suspense hiện nội dung — dựa trên <b>View Transition API</b> của trình duyệt. React tự gọi <code>startViewTransition</code> (bạn không được tự gọi).' },
      { t: 'p', x: R3(`<ViewTransition>
  <Page />
</ViewTransition>`) },
      { t: 'list', items: [
        'React gắn <code>view-transition-name</code> vào DOM node gần nhất bên trong; mỗi ViewTransition có tên riêng trừ khi bạn đặt <code>name</code> để làm <b>shared element transition</b> (phần tử “bay” giữa hai màn hình).',
        'Các sự kiện: <code>onEnter</code>, <code>onExit</code>, <code>onUpdate</code>, <code>onShare</code>; có thể tùy biến bằng <b>class</b> hoặc CSS.',
        '<code>flushSync</code> xen vào sẽ khiến React bỏ qua transition đó.',
        '<code>addTransitionType(type)</code> (gọi trong <code>startTransition</code>) ghi lại <b>nguyên nhân</b> của transition (vd <code>"submit-click"</code>, <code>"nav-back"</code>) để chọn animation khác nhau: qua CSS view-transition types, class của ViewTransition hoặc sự kiện. Type được reset sau mỗi commit.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> trình duyệt chưa hỗ trợ View Transition API thì chỉ không có hiệu ứng (nội dung vẫn đổi bình thường). Dùng hiệu ứng tiết chế, tôn trọng người dùng bật “giảm chuyển động” (<code>prefers-reduced-motion</code>).' }
    ] }
  ],
  summary: [
    'Fragment nhóm không thêm DOM (cần key → dạng đầy đủ); có ref (FragmentInstance).',
    'StrictMode (dev): render hai lần, Effect/ref chạy lại, cảnh báo API cũ. Profiler đo thời gian render.',
    'Activity ẩn nhưng giữ state; ViewTransition tạo hiệu ứng chuyển cảnh; addTransitionType gắn nguyên nhân.'
  ],
  cards: [
    ['Fragment dùng khi?', 'Nhóm phần tử không cần thẻ bọc.'],
    ['Fragment có key?', 'Phải dùng <code>&lt;Fragment key&gt;</code> dạng đầy đủ.'],
    ['StrictMode chạy ở đâu?', 'Chỉ development.'],
    ['StrictMode làm gì?', 'Render thêm, chạy lại Effect/ref, cảnh báo API cũ.'],
    ['<code>&lt;Profiler&gt;</code> props?', '<code>id</code> và <code>onRender</code>.'],
    ['<code>actualDuration</code> vs <code>baseDuration</code>?', 'Thời gian thực vs ước tính không tối ưu.'],
    ['<code>&lt;Activity&gt;</code>?', 'Ẩn/hiện giữ state bằng <code>mode</code>.'],
    ['Activity hidden dùng gì để ẩn?', '<code>display: none</code>; Effect bị dọn dẹp.'],
    ['<code>&lt;ViewTransition&gt;</code>?', 'Animate cập nhật trong Transition/Suspense.'],
    ['<code>addTransitionType</code>?', 'Ghi nguyên nhân transition để tùy biến animation.']
  ],
  quiz: [
    { q: 'Ẩn sidebar mà vẫn giữ mục đang mở:', o: ['{show &amp;&amp; &lt;Sidebar/&gt;}', 'Activity mode hidden', 'display:none thủ công mất state', 'key đổi'], a: 1, e: 'Activity giữ state.' },
    { q: 'StrictMode ảnh hưởng production?', o: ['Có', 'Không', 'Chỉ iOS', 'Chỉ lúc build'], a: 1, e: 'Chỉ dev.' },
    { q: 'Hiệu ứng “bay” phần tử giữa hai màn hình dùng:', o: ['ViewTransition với name', 'Fragment', 'Profiler', 'useId'], a: 0, e: 'Shared element transition.' },
    { q: 'Profiler ở production mặc định:', o: ['Bật', 'Tắt', 'Bắt buộc', 'Không có'], a: 1, e: 'Cần build đặc biệt.' },
    { q: 'Cặp phần tử có key trong map cần:', o: ['&lt;&gt;', '&lt;Fragment key&gt;', 'Không cần key', '&lt;div&gt;'], a: 1, e: 'Dạng đầy đủ mới nhận key.' }
  ],
  match: [
    ['Fragment', 'Nhóm không DOM thừa'],
    ['StrictMode', 'Kiểm tra lúc dev'],
    ['Profiler', 'Đo hiệu năng render'],
    ['Activity', 'Ẩn giữ state'],
    ['ViewTransition', 'Hiệu ứng chuyển cảnh']
  ]
},

{
  n: 10,
  title: 'Server Components: cache, cacheSignal, “use client” và “use server”',
  intro: 'React Server Components (RSC) cho một số component chạy <b>chỉ trên server</b>, gửi về kết quả đã dựng — ít JavaScript cho trình duyệt. Một vài API và “directive” (chỉ thị) điều khiển ranh giới giữa server và client. Cần một framework/bundler hỗ trợ RSC.',
  sections: [
    { icon: '🧭', title: 'Server hay Client?', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (nhà hàng):</b> <b>Server Component</b> là bếp: chuẩn bị món (dữ liệu, truy vấn database) rồi chỉ mang món lên bàn — khách không cần biết công thức. <b>Client Component</b> là bàn ăn tương tác: bấm, gõ, thay đổi tại chỗ (state, effect, event). Chỉ thị <code>\'use client\'</code> vẽ ra <b>ranh giới</b> “từ đây trở đi chạy ở bàn khách”.' },
      { t: 'table', head: ['', 'Server Component (mặc định trong app RSC)', 'Client Component (<code>\'use client\'</code>)'], rows: [
        ['Chạy ở', 'Server', 'Trình duyệt (và được render trước ở server)'],
        ['Dùng được', 'async/await, truy cập DB/file, bí mật', 'State, Effect, event handler, API trình duyệt'],
        ['Không dùng được', 'useState, useEffect, event handler, <code>use(context)</code>', 'Truy cập tài nguyên server trực tiếp'],
        ['JavaScript gửi về trình duyệt', 'Không', 'Có']
      ] },
      { t: 'widget', name: 'rx-server-client', title: 'Đoạn code này thuộc Server hay Client Component?' }
    ] },
    { icon: '📌', title: '<code>\'use client\'</code> và <code>\'use server\'</code>', blocks: [
      { t: 'table', head: ['Chỉ thị', 'Ý nghĩa', 'Quy tắc'], rows: [
        ['<code>\'use client\'</code>', 'Đánh dấu module (và mọi thứ nó import) là <b>code client</b>', 'Đặt ở đầu file, trước import; nháy đơn/đôi (không backtick). Không tác dụng nếu đã nằm trong module client khác. Mọi thứ import từ module client vào server phải là component hoặc giá trị serialize được'],
        ['<code>\'use server\'</code>', 'Đánh dấu <b>Server Function</b>: hàm async chạy trên server nhưng gọi được từ client', 'Đặt đầu thân hàm async hoặc đầu file (mọi export thành Server Function). Gọi từ client = <b>một request mạng</b> với đối số được serialize']
      ] },
      { t: 'p', x: R3(`'use server'
export async function createNote(formData) {      // Server Function
  // luôn coi đối số là KHÔNG đáng tin: kiểm tra + phân quyền
}

// Client Component:
'use client'
<form action={createNote}>...</form>              // gọi trong Transition tự động`) },
      { t: 'warn', x: '<b>An ninh:</b> đối số của Server Function hoàn toàn do client kiểm soát → luôn coi là <b>đầu vào không tin cậy</b>, kiểm tra/escape và <b>phân quyền</b> mọi thay đổi. Server Function dành cho <b>thay đổi dữ liệu</b> (mutation), không khuyến nghị dùng để lấy dữ liệu. Nên gọi trong Transition (form <code>action</code>/<code>formAction</code> tự làm).' },
      { t: 'list', items: [
        'Không phải mọi thứ trong module client đều là component: <b>cả cây con</b> của module đó được gửi và chạy ở client.',
        'Server Function chỉ dùng được ở file server; truyền xuống Client Component qua props.',
        'Chỉ dùng cho app có RSC (Next.js App Router, v.v.). Với app React thường (Vite/CRA) bạn không cần các chỉ thị này.'
      ] }
    ] },
    { icon: '💾', title: '<code>cache</code> và <code>cacheSignal</code>', blocks: [
      { t: 'p', x: '<code>cache(fn)</code> (<b>chỉ cho Server Components</b>) trả về bản <b>có nhớ kết quả</b> của <code>fn</code> trong <b>một lần render/request</b>. Gọi lại với cùng đối số trả kết quả đã lưu — nhiều component cùng cần dữ liệu thì chỉ tính/gọi một lần.' },
      { t: 'p', x: R3(`const getUser = cache(async (id) => db.users.find(id))   // ngoài component
// <Profile/> và <TeamReport/> cùng gọi getUser(7) → chỉ truy vấn một lần`) },
      { t: 'list', items: [
        'Cache được <b>vô hiệu hóa cho mỗi request server</b>.',
        'Mỗi lần gọi <code>cache(fn)</code> tạo hàm mới với cache riêng (không dùng chung) → tạo một lần ở cấp module.',
        'Lỗi cũng được cache: cùng đối số sẽ ném lại cùng lỗi.'
      ] },
      { t: 'p', x: '<code>cacheSignal()</code> trả một <code>AbortSignal</code> báo hiệu khi <b>vòng đời cache kết thúc</b> (render xong, bị hủy, hoặc lỗi). Dùng để <b>hủy request đang bay</b> không còn cần và để bỏ qua lỗi phát sinh sau khi render đã kết thúc (kiểm <code>signal.aborted</code>). Trả <code>null</code> ngoài lúc render và trong Client Component.' },
      { t: 'p', x: R3(`async function getData(id) {
  const res = await fetch(url + id, { signal: cacheSignal() })   // hủy khi render xong
}`) },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> <code>cache</code> khác <code>useMemo</code> ở chỗ nào? <code>useMemo</code> nhớ trong <i>một component</i> qua các lần render ở client; <code>cache</code> nhớ <i>xuyên các component</i> trong <i>một request</i> ở server. Với bộ nhớ đệm dài hạn (qua nhiều request) hãy dùng lớp cache của framework/CDN.' }
    ] }
  ],
  summary: [
    'Server Component chạy ở server (không gửi JS); Client Component cần state/effect/event.',
    '<code>\'use client\'</code> vạch ranh giới client; <code>\'use server\'</code> tạo Server Function — luôn xem đối số là không tin cậy.',
    '<code>cache(fn)</code> nhớ kết quả trong một request (chỉ RSC); <code>cacheSignal()</code> để hủy việc không còn cần.'
  ],
  cards: [
    ['Server Component?', 'Component chạy ở server, không gửi JS xuống client.'],
    ['<code>\'use client\'</code>?', 'Đánh dấu module (cả phụ thuộc) chạy ở client.'],
    ['<code>\'use server\'</code>?', 'Đánh dấu Server Function — hàm async server gọi từ client.'],
    ['Server Function nên dùng cho?', 'Mutation, không phải lấy dữ liệu.'],
    ['Đối số Server Function?', 'Không đáng tin: kiểm tra + phân quyền.'],
    ['Server Component dùng được useState?', 'Không.'],
    ['<code>cache</code>?', 'Nhớ kết quả hàm trong một request ở server.'],
    ['<code>cache</code> dùng ở đâu?', 'Chỉ Server Components.'],
    ['<code>cacheSignal</code>?', 'AbortSignal báo hết vòng đời cache; hủy việc dang dở.'],
    ['Directive đặt ở đâu?', 'Đầu file/hàm, trước import.']
  ],
  quiz: [
    { q: 'Component dùng onClick và useState phải là:', o: ['Server Component', 'Client Component', 'Cả hai', 'Fragment'], a: 1, e: 'Cần \'use client\'.' },
    { q: 'Đối số Server Function:', o: ['Luôn an toàn', 'Do client kiểm soát → không tin cậy', 'Tự động validate', 'Mã hóa'], a: 1, e: 'Tự kiểm tra và phân quyền.' },
    { q: 'Hai component cùng cần user 7 trong một request server:', o: ['useState', 'cache(getUser)', 'useRef', 'useEffect'], a: 1, e: 'Chỉ truy vấn một lần.' },
    { q: 'Server Component có thể:', o: ['useEffect', 'async/await truy cập DB', 'onClick', 'useState'], a: 1, e: 'Chạy ở server.' },
    { q: 'cacheSignal trả null khi:', o: ['Trong Server render', 'Ngoài lúc render hoặc ở Client Component', 'Luôn', 'Không bao giờ'], a: 1, e: 'Cho biết phạm vi không được cache mãi.' }
  ],
  match: [
    ["'use client'", 'Ranh giới code client'],
    ["'use server'", 'Server Function'],
    ['cache', 'Nhớ kết quả trong một request'],
    ['cacheSignal', 'Báo hết vòng đời cache'],
    ['RSC', 'React Server Components']
  ]
},

{
  n: 11,
  title: 'Quy tắc của React: Hook, thuần khiết, và công cụ kiểm thử/gỡ lỗi',
  intro: 'React có vài “luật” nhỏ nhưng quan trọng: tuân thủ thì mọi tính năng (Strict Mode, Compiler, concurrent) hoạt động đúng; vi phạm thì lỗi kỳ lạ. Cuối chương là hai công cụ hỗ trợ: <code>act</code> (kiểm thử) và <code>captureOwnerStack</code> (gỡ lỗi).',
  sections: [
    { icon: '🪝', title: 'Rules of Hooks', blocks: [
      { t: 'p', x: 'Hàm có tên bắt đầu bằng <code>use</code> là Hook. Hai luật:' },
      { t: 'steps', items: [
        '<b>Chỉ gọi Hook ở cấp trên cùng</b> của function component hoặc custom Hook, trước mọi <code>return</code> sớm.',
        '<b>Chỉ gọi Hook từ component hàm hoặc custom Hook</b> — không từ hàm JavaScript thường.'
      ] },
      { t: 'table', head: ['🔴 Không được', 'Vì sao / thay bằng'], rows: [
        ['Trong điều kiện hoặc vòng lặp', 'React nhận ra Hook theo <b>thứ tự gọi</b> → thứ tự phải giống nhau mỗi render'],
        ['Sau <code>return</code> có điều kiện', 'Như trên'],
        ['Trong event handler', 'Gọi Hook ở cấp trên cùng, dùng giá trị trong handler'],
        ['Trong class component', 'Dùng function component'],
        ['Trong hàm của <code>useMemo</code>/<code>useReducer</code>/<code>useEffect</code>', 'Lồng Hook không hợp lệ'],
        ['Trong try/catch/finally', 'Cấu trúc điều khiển chen vào thứ tự']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> React nhớ các Hook của bạn như <b>các ngăn kéo đánh số</b> (ngăn 1 là state đầu tiên, ngăn 2 là state thứ hai…). Nếu có lần bạn bỏ qua ngăn 2 vì điều kiện, đồ trong các ngăn sau bị <b>xếp lệch</b> nhau. Nên mỗi render phải mở ngăn theo cùng thứ tự.' },
      { t: 'widget', name: 'rx-hooks-rules', title: 'Đoạn này vi phạm Rules of Hooks không?' },
      { t: 'tip', x: 'Cài <code>eslint-plugin-react-hooks</code> để bắt các lỗi này tự động.' }
    ] },
    { icon: '🧼', title: 'Component và Hook phải thuần khiết (pure)', blocks: [
      { t: 'list', items: [
        '<b>Idempotent:</b> cùng đầu vào (props, state, context) luôn ra cùng một kết quả JSX.',
        '<b>Không có tác dụng phụ trong render:</b> gọi API, sửa DOM, ghi log quan trọng, đọc/ghi ref… đặt trong <b>event handler hoặc Effect</b>.',
        '<b>Không thay đổi giá trị không phải cục bộ:</b> đừng sửa props, state, biến toàn cục hay object tạo ngoài render. Tạo bản sao mới.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> component thuần như <b>máy tính bỏ túi</b>: cho cùng phép tính luôn ra cùng đáp số, và không làm thay đổi gì ngoài màn hình hiển thị. Nếu máy tính cứ tăng một biến đếm bí mật mỗi lần bạn bấm, đáp số kỳ lạ sẽ xuất hiện khi React chạy lại.' },
      { t: 'p', x: R3(`// ❌ không thuần: sửa biến ngoài khi render
let guest = 0
function Cup() { guest = guest + 1; return <h2>Tách trà cho khách #{guest}</h2> }

// ✅ thuần: dùng props
function Cup({ guest }) { return <h2>Tách trà cho khách #{guest}</h2> }`) },
      { t: 'widget', name: 'rx-purity', title: 'Thuần hay không thuần?' },
      { t: 'key', x: 'Vì render thuần, React có thể <b>chạy render nhiều lần, tạm dừng, bỏ đi, ưu tiên cập nhật quan trọng hơn</b> (Transition, Suspense, Strict Mode) mà không sinh lỗi. Đây là nền tảng của các tính năng mới và của React Compiler.' }
    ] },
    { icon: '📞', title: 'React gọi component và Hook', blocks: [
      { t: 'list', items: [
        '<b>Không bao giờ gọi trực tiếp component</b> như hàm thường (<code>Article()</code>); chỉ dùng trong JSX (<code>&lt;Article /&gt;</code>). Để React quyết định khi nào gọi: gắn state/Hook theo danh tính component, tham gia reconciliation, ưu tiên cập nhật, DevTools hiểu được.',
        '<b>Không truyền Hook như giá trị thường</b> và <b>không biến đổi Hook động</b> (không viết Hook bậc cao chỉnh sửa Hook khác). Hook phải “tĩnh” để lập luận cục bộ và để compiler tối ưu.'
      ] }
    ] },
    { icon: '🧰', title: '<code>act</code> và <code>captureOwnerStack</code>', blocks: [
      { t: 'tabs', items: [
        ['🧪 act (kiểm thử)', '<code>await act(async () =&gt; { ... })</code> bao quanh render/sự kiện trong test để React <b>áp dụng hết cập nhật đang chờ</b> trước khi bạn assert — gần với hành vi trình duyệt thật. Tên lấy từ mẫu <b>Arrange-Act-Assert</b>. Nên dùng dạng <code>await</code> + async (dạng đồng bộ sẽ bị loại bỏ). Thực tế thường dùng React Testing Library đã bọc sẵn <code>act</code>.'],
        ['🕵️ captureOwnerStack (gỡ lỗi)', 'Trả <b>Owner Stack</b> dạng chuỗi (hoặc <code>null</code>) — chỉ ở <b>development</b>. Owner Stack liệt kê các component “đã tạo ra” phần tử đang xét (ai render ai), khác <b>Component Stack</b> (cây DOM/component bao quanh). Dùng trong render, Effect, event handler React, hoặc các handler lỗi của root (<code>onCaughtError</code>, <code>onRecoverableError</code>, <code>onUncaughtError</code>).']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> khi test, gộp <code>act</code> với thư viện kiểm thử hành vi người dùng (tìm theo vai trò/nhãn, giả lập click/gõ) để test không phụ thuộc chi tiết cài đặt.' }
    ] }
  ],
  summary: [
    'Rules of Hooks: cấp trên cùng, từ component/custom Hook; thứ tự gọi phải ổn định mỗi render.',
    'Render phải thuần: idempotent, không tác dụng phụ, không sửa giá trị ngoài. Tác dụng phụ vào event handler/Effect.',
    'Không gọi component như hàm; không truyền/biến đổi Hook như giá trị thường.',
    '<code>await act(async ...)</code> để kiểm thử; <code>captureOwnerStack</code> để gỡ lỗi (dev).'
  ],
  cards: [
    ['Hook gọi ở đâu?', 'Cấp trên cùng của function component hoặc custom Hook.'],
    ['Vì sao không gọi Hook trong if?', 'React nhận Hook theo thứ tự gọi.'],
    ['Idempotent?', 'Cùng đầu vào → cùng đầu ra.'],
    ['Tác dụng phụ đặt ở đâu?', 'Event handler hoặc Effect.'],
    ['Gọi component trực tiếp?', 'Không — chỉ dùng trong JSX.'],
    ['Lint bắt lỗi Hook?', '<code>eslint-plugin-react-hooks</code>.'],
    ['<code>act</code>?', 'Helper test áp dụng cập nhật React trước khi assert.'],
    ['<code>captureOwnerStack</code>?', 'Trả Owner Stack ở dev (hoặc null).'],
    ['Owner Stack khác Component Stack?', 'Owner: ai tạo phần tử; Component: cây bao quanh.']
  ],
  quiz: [
    { q: 'Gọi useState sau return điều kiện:', o: ['Hợp lệ', 'Vi phạm Rules of Hooks', 'Chỉ cảnh báo', 'Tăng hiệu năng'], a: 1, e: 'Thứ tự Hook thay đổi.' },
    { q: 'Sửa biến toàn cục trong lúc render là:', o: ['Pure', 'Không pure', 'Cần thiết', 'Được khuyến khích'], a: 1, e: 'Phải ở handler/Effect.' },
    { q: 'Cách gọi component đúng:', o: ['Article()', '&lt;Article /&gt;', 'new Article()', 'call(Article)'], a: 1, e: 'React gọi giúp bạn.' },
    { q: 'Test cần chờ React cập nhật xong rồi assert:', o: ['act', 'useId', 'memo', 'cache'], a: 0, e: 'Arrange-Act-Assert.' },
    { q: 'Hook có thể được gọi trong event handler?', o: ['Có', 'Không', 'Chỉ useRef', 'Chỉ useState'], a: 1, e: 'Gọi ở cấp trên cùng.' }
  ],
  match: [
    ['Rules of Hooks', 'Gọi Hook cấp trên cùng'],
    ['pure render', 'Cùng đầu vào cùng đầu ra'],
    ['act', 'Helper kiểm thử'],
    ['captureOwnerStack', 'Gỡ lỗi (dev)'],
    ['eslint-plugin-react-hooks', 'Bắt lỗi Hook']
  ]
},

{
  n: 12,
  title: 'API cũ (Legacy): class component, Children, cloneElement, forwardRef…',
  intro: 'Một số API vẫn xuất từ package <code>react</code> nhưng <b>không khuyến khích</b> trong code mới. Bạn vẫn sẽ gặp chúng trong code cũ, nên cần đọc hiểu và biết thay bằng gì.',
  sections: [
    { icon: '🏚', title: 'Bảng chuyển đổi', blocks: [
      { t: 'table', head: ['API cũ', 'Làm gì', 'Hiện nay nên dùng'], rows: [
        ['<code>Component</code>', 'Lớp cơ sở của <b>class component</b> (<code>render</code>, <code>state</code>, <code>componentDidMount</code>…)', 'Function component + Hook (vẫn được hỗ trợ). Riêng <b>Error Boundary</b> hiện vẫn phải là class (hoặc thư viện)'],
        ['<code>PureComponent</code>', 'Như <code>Component</code> nhưng bỏ render khi props/state không đổi', '<code>memo(Component)</code>'],
        ['<code>forwardRef</code>', 'Cho component nhận <code>ref</code> và chuyển cho con', 'React 19: <code>ref</code> là <b>prop thường</b> (sẽ bị deprecate)'],
        ['<code>createRef</code>', 'Tạo ref trong class component', '<code>useRef</code> trong function component'],
        ['<code>Children</code> (<code>.map/.count/.toArray/.only/.forEach</code>)', 'Thao tác trên <code>children</code>', 'Tránh (mã dễ vỡ): truyền mảng dữ liệu, render props, hoặc context'],
        ['<code>cloneElement</code>', 'Sao chép phần tử với props mới', 'Tránh: truyền dữ liệu qua props rõ ràng, context, hoặc render prop'],
        ['<code>createElement</code>', 'Tạo phần tử không cần JSX (<code>createElement(type, props, ...children)</code>)', 'JSX (JSX biên dịch ra chính hàm này)'],
        ['<code>isValidElement</code>', 'Kiểm tra giá trị có là phần tử React', 'Vẫn dùng khi cần, ít gặp']
      ] },
      { t: 'widget', name: 'rx-legacy', title: 'Gặp code cũ này: thay bằng gì?' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> các API này như <b>dụng cụ đời cũ</b> trong xưởng: vẫn dùng được, nhưng đã có dụng cụ mới an toàn hơn. Cứ đọc hiểu để “đọc thợ cũ”, còn việc mới dùng dụng cụ mới.' }
    ] },
    { icon: '🔄', title: 'Chuyển class sang function (ý tưởng)', blocks: [
      { t: 'table', head: ['Class component', 'Function component'], rows: [
        ['<code>this.state</code> + <code>this.setState</code>', '<code>useState</code> / <code>useReducer</code>'],
        ['<code>componentDidMount</code> / <code>componentWillUnmount</code>', '<code>useEffect(() =&gt; { ...; return cleanup }, [])</code>'],
        ['<code>componentDidUpdate</code>', '<code>useEffect</code> với dependencies'],
        ['<code>shouldComponentUpdate</code> / <code>PureComponent</code>', '<code>memo</code>'],
        ['<code>this.context</code>', '<code>useContext</code>'],
        ['<code>createRef</code>', '<code>useRef</code>'],
        ['Error Boundary: <code>getDerivedStateFromError</code>, <code>componentDidCatch</code>', 'Vẫn là class (hoặc <code>react-error-boundary</code>)']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> khi chuyển, đừng dịch từng dòng; hãy nghĩ lại theo “đồng bộ hóa” (Effect) thay vì “vòng đời”. Không cần vội chuyển code cũ đang chạy ổn — chuyển khi chạm vào để sửa.' }
    ] }
  ],
  summary: [
    'Legacy: Component, PureComponent, forwardRef, createRef, Children, cloneElement, createElement, isValidElement.',
    'Thay bằng function component + Hook, memo, ref-as-prop (React 19), JSX, props/context.',
    'Error Boundary hiện vẫn cần class (hoặc thư viện).'
  ],
  cards: [
    ['<code>PureComponent</code> thay bằng?', '<code>memo</code>.'],
    ['<code>forwardRef</code> ở React 19?', 'Không còn cần; <code>ref</code> là prop.'],
    ['<code>createRef</code> thay bằng?', '<code>useRef</code>.'],
    ['<code>createElement</code> liên quan JSX?', 'JSX biên dịch ra <code>createElement</code>.'],
    ['<code>Children</code>/<code>cloneElement</code>?', 'Dễ vỡ, nên tránh.'],
    ['Class thay <code>componentDidMount</code>?', '<code>useEffect(..., [])</code>.'],
    ['Error Boundary?', 'Vẫn dùng class component.']
  ],
  quiz: [
    { q: 'Thay PureComponent:', o: ['memo', 'useMemo', 'useRef', 'cache'], a: 0, e: 'Bỏ render khi props không đổi.' },
    { q: 'JSX &lt;Greeting /&gt; biên dịch ra:', o: ['createElement(Greeting)', 'cloneElement', 'Children.map', 'forwardRef'], a: 0, e: 'Đúng.' },
    { q: 'Error Boundary hiện nay:', o: ['Có Hook riêng', 'Vẫn là class component', 'Bị bỏ', 'Dùng useEffect'], a: 1, e: 'Hoặc thư viện.' },
    { q: 'React 19 và forwardRef:', o: ['Bắt buộc', 'Không cần, ref là prop', 'Bị cấm', 'Chỉ cho class'], a: 1, e: 'Sẽ bị deprecate.' }
  ],
  match: [
    ['PureComponent', 'memo'],
    ['createRef', 'useRef'],
    ['componentDidMount', 'useEffect'],
    ['forwardRef', 'ref là prop (React 19)'],
    ['createElement', 'JSX']
  ]
},

{
  n: 13,
  title: 'Bản đồ tra cứu: chọn đúng API cho đúng việc',
  intro: 'Chương cuối gom toàn bộ API đã học vào một bản đồ và vài “luật chọn nhanh”, để khi gặp bài toán thực tế bạn biết nên mở trang nào.',
  sections: [
    { icon: '🗺', title: 'Chọn nhanh theo nhu cầu', blocks: [
      { t: 'table', head: ['Bạn muốn…', 'Dùng'], rows: [
        ['Nhớ một giá trị và vẽ lại khi đổi', '<code>useState</code> (đơn giản) / <code>useReducer</code> (phức tạp)'],
        ['Nhớ giá trị <b>không</b> cần vẽ lại / tham chiếu DOM', '<code>useRef</code>'],
        ['Đọc dữ liệu dùng chung từ cây phía trên', '<code>createContext</code> + <code>useContext</code>/<code>use</code>'],
        ['Đồng bộ với hệ thống ngoài (mạng, timer, sự kiện)', '<code>useEffect</code> (+ <code>useEffectEvent</code>)'],
        ['Đo/chỉnh layout trước khi vẽ', '<code>useLayoutEffect</code>'],
        ['Tránh tính lại / giữ tham chiếu', '<code>useMemo</code>, <code>useCallback</code>, <code>memo</code>'],
        ['Cập nhật làm nền không chặn giao diện', '<code>useTransition</code>, <code>useDeferredValue</code>'],
        ['Hiện “đang tải” khi chờ code/dữ liệu', '<code>Suspense</code>, <code>lazy</code>, <code>use(promise)</code>'],
        ['Gửi form/mutation và hiển thị kết quả, pending', '<code>useActionState</code>, form <code>action</code>'],
        ['Hiện kết quả tức thì rồi xác nhận sau', '<code>useOptimistic</code>'],
        ['ID duy nhất cho tiếp cận', '<code>useId</code>'],
        ['Theo dõi kho dữ liệu ngoài React', '<code>useSyncExternalStore</code>'],
        ['Ẩn phần giao diện nhưng giữ state', '<code>Activity</code>'],
        ['Hiệu ứng chuyển cảnh', '<code>ViewTransition</code> (+ <code>addTransitionType</code>)'],
        ['Bắt lỗi sớm lúc phát triển', '<code>StrictMode</code>'],
        ['Cache dữ liệu trong một request server', '<code>cache</code> (RSC)']
      ] },
      { t: 'widget', name: 'rx-hook-pick', title: 'Luyện chọn API đúng cho tình huống' }
    ] },
    { icon: '🔎', title: 'Tra cứu từ khóa', blocks: [
      { t: 'widget', name: 'rx-api-lookup', title: 'Gõ từ khóa để tra API (ví dụ: ref, form, cache, ẩn…)' }
    ] },
    { icon: '🧭', title: 'Lời khuyên tổng kết', blocks: [
      { t: 'steps', items: [
        '<b>Bắt đầu đơn giản:</b> state ở component gần nhất, truyền xuống bằng props; chỉ lên context/store khi thật cần.',
        '<b>Giữ render thuần</b> và để tác dụng phụ vào handler/Effect; bật <code>StrictMode</code> và linter.',
        '<b>Đừng vội tối ưu:</b> đo trước; ưu tiên Transition/Suspense cho trải nghiệm; để Compiler lo memo.',
        '<b>Hỏi “có cần Effect không?”</b> trước khi viết <code>useEffect</code>.',
        '<b>Dùng framework</b> cho routing, tải dữ liệu, SSR/RSC; tài liệu mô tả khá nhiều thứ “dễ hơn khi do framework làm hộ”.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này bám phần <b>react.dev/reference/react</b> (Hook, Component, API, Legacy, Rules, Directives). Phần React DOM (<code>createRoot</code>, <code>hydrateRoot</code>, <code>createPortal</code>, <code>flushSync</code>, thẻ form như <code>&lt;form&gt;</code>, <code>useFormStatus</code>…), React Compiler và các hướng dẫn “Learn” nằm ở các mục khác của react.dev.' }
    ] }
  ],
  summary: [
    'State: useState/useReducer; ref: useRef; chia sẻ: context; ngoại vi: Effect; tối ưu: memo/useMemo/useCallback; UX: Transition/Deferred/Suspense; form: useActionState/useOptimistic.',
    'Luôn giữ render thuần, tuân Rules of Hooks, và hỏi “có cần Effect không?”.',
    'Đo rồi mới tối ưu; dùng framework cho định tuyến/dữ liệu/RSC.'
  ],
  cards: [
    ['Đồng bộ với WebSocket?', 'useEffect có cleanup.'],
    ['Giá trị không cần vẽ lại?', 'useRef.'],
    ['Dữ liệu dùng chung nhiều tầng?', 'Context.'],
    ['Cập nhật gấp vs nền?', 'Transition/DeferredValue cho cập nhật nền.'],
    ['Hiện “đang tải” khi chờ?', 'Suspense.'],
    ['Form + pending + kết quả?', 'useActionState.'],
    ['Tim đỏ ngay khi bấm?', 'useOptimistic.'],
    ['ID cho label?', 'useId.']
  ],
  quiz: [
    { q: 'Ẩn tab nhưng giữ dữ liệu form:', o: ['Activity', 'Fragment', 'Profiler', 'memo'], a: 0, e: 'Giữ state.' },
    { q: 'Đọc dữ liệu từ kho ngoài React:', o: ['useSyncExternalStore', 'useId', 'useDeferredValue', 'useMemo'], a: 0, e: 'Đăng ký với kho ngoài.' },
    { q: 'Trước khi viết useEffect nên hỏi:', o: ['Có thể tính lúc render/handler không?', 'Có mạng không', 'Có dùng TypeScript không', 'Không cần hỏi'], a: 0, e: 'Có thể bạn không cần Effect.' },
    { q: 'Tối ưu hiệu năng nên bắt đầu bằng:', o: ['memo mọi nơi', 'Đo (Profiler)', 'Xóa Strict Mode', 'Thêm Effect'], a: 1, e: 'Đo rồi mới tối ưu.' }
  ],
  match: [
    ['useActionState', 'Form + pending'],
    ['useOptimistic', 'Cập nhật lạc quan'],
    ['Activity', 'Ẩn giữ state'],
    ['use', 'Đọc Promise/context lúc render'],
    ['cache', 'Cache một request (RSC)']
  ]
}
);
