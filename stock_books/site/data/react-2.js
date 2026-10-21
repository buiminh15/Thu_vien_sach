// React Reference – Chương 5–8.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.reactref = BOOK_DATA.reactref || { chapters: [] };
const R2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.reactref.chapters.push(

{
  n: 5,
  title: 'Ghi nhớ để tối ưu: useMemo, useCallback, memo và React Compiler',
  intro: 'Mặc định khi cha render lại thì con cũng render lại. Thường rất nhanh nên không sao; nhưng nếu thật sự chậm, “ghi nhớ” (memoization) giúp bỏ qua việc làm lại. Điểm mới: <b>React Compiler</b> có thể tự làm việc này, nên bạn ít phải viết tay.',
  sections: [
    { icon: '🧠', title: 'Ba công cụ ghi nhớ', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> memoization như <b>nhớ đáp án bài toán đã giải</b>: hỏi lại cùng đề (cùng dependencies/props) thì đọc đáp án cũ, khỏi giải lại. Đề đổi thì mới giải mới.' },
      { t: 'table', head: ['API', 'Ghi nhớ cái gì', 'Cú pháp', 'Dùng để'], rows: [
        ['<code>useMemo</code>', 'Kết quả <b>một phép tính</b>', '<code>useMemo(() =&gt; tinh(a), [a])</code>', 'Bỏ qua tính toán đắt; giữ nguyên tham chiếu object/mảng'],
        ['<code>useCallback</code>', 'Chính <b>hàm</b> (định nghĩa)', '<code>useCallback(fn, [deps])</code>', 'Truyền hàm xuống con được <code>memo</code> mà khỏi làm nó render lại'],
        ['<code>memo</code>', '<b>Component</b>: bỏ render lại khi props không đổi', '<code>memo(Component, arePropsEqual?)</code>', 'Cắt tỉa cây render']
      ] },
      { t: 'p', x: R2(`const visible = useMemo(() => filterTodos(todos, tab), [todos, tab])

const handleSubmit = useCallback((order) => { post('/buy', { productId, ...order }) }, [productId])

const List = memo(function List({ items, onSelect }) { /* ... */ })`) },
      { t: 'key', x: 'Ba thứ này chỉ là <b>tối ưu hiệu năng</b>, không được phép làm “đúng/sai” của app. Nếu bỏ chúng đi mà app sai thì có bug cần sửa trước. React có thể vẫn quyết định vứt cache khi cần (ví dụ khi sửa file lúc dev).' },
      { t: 'widget', name: 'rx-memo', title: 'Bật/tắt memo: xem con có render lại khi cha đổi state không liên quan' }
    ] },
    { icon: '🔗', title: 'Vì sao hay phải dùng chung với nhau', blocks: [
      { t: 'p', x: 'Mỗi lần render, <code>() =&gt; {}</code> và <code>{}</code> tạo ra <b>hàm/object mới</b> (tham chiếu mới). Cha truyền chúng xuống con được <code>memo</code> thì con thấy “props đổi” (khác tham chiếu) và vẫn render lại. <code>useCallback</code>/<code>useMemo</code> giữ nguyên tham chiếu khi dependencies không đổi, để <code>memo</code> phát huy.' },
      { t: 'list', items: [
        '<code>memo</code> đã so sánh props nông (<code>Object.is</code>); truyền <code>arePropsEqual</code> tùy biến chỉ khi chắc chắn (và nhớ so sánh cả hàm).',
        '<b>Dependencies</b> của <code>useMemo</code>/<code>useCallback</code> cũng phải đủ (như Effect).',
        '<code>calculateValue</code> phải <b>pure</b>, không đối số; Strict Mode dev gọi hai lần.',
        'Không bắt buộc ghi nhớ mọi thứ: nếu tương tác của app “thô” (đổi trang/cả phần lớn), ghi nhớ thường thừa. Nếu giống bản vẽ (chỉnh từng chi tiết, nhiều cập nhật nhỏ), memo hữu ích hơn.',
        'Không gọi <code>useMemo</code>/<code>useCallback</code> trong vòng lặp; tách component.'
      ] },
      { t: 'warn', x: 'Đừng “rải memo khắp nơi”. Đo trước (React DevTools Profiler hoặc <code>&lt;Profiler&gt;</code> ở chương 9), sửa chỗ chậm. Ghi nhớ cũng tốn bộ nhớ và làm code khó đọc.' }
    ] },
    { icon: '🤖', title: 'React Compiler', blocks: [
      { t: 'p', x: 'Tài liệu của <code>useMemo</code>, <code>useCallback</code>, <code>memo</code> đều ghi chú: <b>React Compiler</b> (công cụ lúc build) <b>tự động ghi nhớ</b> giá trị, hàm, component → giảm nhu cầu viết tay. Điều kiện: code tuân thủ “Rules of React” (pure, đúng Rules of Hooks — chương 11).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> với dự án đã bật compiler, bạn có thể bỏ phần lớn <code>useMemo/useCallback/memo</code> trong code mới; code cũ vẫn chạy bình thường. Đừng vội xóa hàng loạt: compiler dùng chính các quy tắc purity để đảm bảo an toàn.' }
    ] }
  ],
  summary: [
    '<code>useMemo</code> nhớ kết quả; <code>useCallback</code> nhớ hàm; <code>memo</code> bỏ render lại khi props không đổi.',
    'Giữ tham chiếu ổn định để <code>memo</code> hữu hiệu; chỉ là tối ưu, không đổi tính đúng đắn.',
    'Đo trước khi tối ưu; React Compiler tự làm nhiều việc này.'
  ],
  cards: [
    ['<code>useMemo</code>?', 'Nhớ kết quả tính toán giữa các lần render.'],
    ['<code>useCallback</code>?', 'Nhớ định nghĩa hàm giữa các lần render.'],
    ['<code>memo</code>?', 'Bỏ render lại component khi props không đổi.'],
    ['Vì sao cần ổn định tham chiếu?', 'Hàm/object mới mỗi render làm <code>memo</code> thấy props đổi.'],
    ['Memo có đảm bảo không bao giờ render lại?', 'Không — chỉ là tối ưu, React có thể vẫn render.'],
    ['<code>calculateValue</code> phải?', 'Pure, không đối số, trả giá trị.'],
    ['Khi nào ghi nhớ thừa?', 'Khi tương tác thô, tính toán rẻ.'],
    ['React Compiler?', 'Công cụ build tự động memo hóa.'],
    ['Làm gì trước khi tối ưu?', 'Đo (Profiler).']
  ],
  quiz: [
    { q: 'Con bọc memo vẫn render lại khi cha truyền hàm mới mỗi lần. Giải pháp:', o: ['Bỏ memo', 'Bọc hàm bằng useCallback', 'Dùng useRef', 'Dùng key'], a: 1, e: 'Giữ nguyên tham chiếu.' },
    { q: 'Tính danh sách lọc đắt, nên bọc bằng:', o: ['useCallback', 'useMemo', 'memo', 'useId'], a: 1, e: 'Nhớ kết quả.' },
    { q: 'Memo có làm thay đổi kết quả đúng/sai của app?', o: ['Có', 'Không (chỉ là tối ưu)', 'Chỉ ở production', 'Chỉ ở dev'], a: 1, e: 'Nếu sai khi bỏ memo là có bug.' },
    { q: 'Công cụ tự động ghi nhớ lúc build:', o: ['React Compiler', 'ESLint', 'Prettier', 'Babel preset env'], a: 0, e: 'Giảm memo thủ công.' },
    { q: 'Nên memo hóa mọi component?', o: ['Có', 'Không, chỉ khi đo thấy chậm', 'Luôn', 'Không bao giờ'], a: 1, e: 'Tốn bộ nhớ và code khó đọc.' }
  ],
  match: [
    ['useMemo', 'Nhớ kết quả'],
    ['useCallback', 'Nhớ hàm'],
    ['memo', 'Bỏ render lại theo props'],
    ['Object.is', 'So sánh props/deps'],
    ['React Compiler', 'Memo hóa tự động']
  ]
},

{
  n: 6,
  title: 'Giao diện mượt: Transition, DeferredValue, Suspense, lazy và use(Promise)',
  intro: 'Một giao diện “nhanh” không chỉ là tính toán nhanh mà là <b>phản hồi tức thì</b> với thao tác người dùng, còn việc nặng làm nền. Các API ở đây giúp React phân biệt việc gấp và việc chờ được, và hiển thị “đang tải” đúng chỗ.',
  sections: [
    { icon: '🚦', title: 'useTransition và startTransition', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> ở quán cà phê, khách gọi nước (thao tác gấp) phải được ghi đơn ngay; còn việc xếp lại kho (nặng) làm lúc rảnh, bị gián đoạn khi có khách. <b>Transition</b> = đánh dấu một cập nhật là “làm nền, có thể bị gián đoạn”.' },
      { t: 'p', x: R2(`const [isPending, startTransition] = useTransition()

function selectTab(next) {
  startTransition(() => { setTab(next) })   // cập nhật tab chạy nền
}
// isPending = true trong lúc chuyển → hiện chỉ báo nhẹ, giữ tab cũ nhìn được`) },
      { t: 'list', items: [
        'Hàm đưa vào <code>startTransition</code> gọi là <b>Action</b>; mọi <code>set</code> gọi đồng bộ bên trong được đánh dấu Transition. Action có thể <b>async</b>: các cập nhật sau <code>await</code> phải bọc <b>thêm</b> <code>startTransition</code> (hạn chế hiện tại).',
        'Transition có thể bị <b>cập nhật gấp hơn ngắt quãng</b>; nhiều Transition đang chạy bị gộp.',
        '<b>Không dùng Transition để điều khiển ô nhập văn bản</b> (state của input phải đồng bộ).',
        'Chỉ bọc được khi bạn có hàm <code>set</code> của state đó. <code>startTransition</code> độc lập (import từ <code>react</code>) không cho <code>isPending</code> — dùng <code>useTransition</code> nếu cần.',
        'Khi một Transition kích hoạt Suspense, React <b>giữ giao diện cũ</b> thay vì hiện fallback.'
      ] },
      { t: 'widget', name: 'rx-transition', title: 'Gõ vào ô tìm kiếm: có Transition thì ô nhập luôn mượt, danh sách “chạy nền”' }
    ] },
    { icon: '🕰', title: 'useDeferredValue', blocks: [
      { t: 'p', x: '<code>useDeferredValue(value)</code> trả về một phiên bản “<b>chậm hơn</b>” của giá trị: React trước hết vẽ lại với <b>giá trị cũ</b> (nhanh), rồi âm thầm vẽ lại ở nền với giá trị mới. Hợp với <b>ô tìm kiếm + danh sách nặng</b>: ô nhập mượt, danh sách đuổi theo sau.' },
      { t: 'p', x: R2(`const [query, setQuery] = useState('')
const deferredQuery = useDeferredValue(query)
const isStale = query !== deferredQuery     // đang “chậm hơn” → làm mờ danh sách
<SearchResults query={deferredQuery} />`) },
      { t: 'list', items: [
        'Truyền giá trị nguyên thủy hoặc object tạo <b>ngoài</b> render (object mới mỗi render sẽ gây render nền liên tục).',
        'Không tự giảm số lần gọi mạng (không phải debounce); không có độ trễ cố định — React làm ngay khi rảnh.',
        'Tích hợp với Suspense: cập nhật nền bị treo thì người dùng vẫn thấy nội dung cũ, không thấy fallback.',
        'Tùy chọn <code>initialValue</code> cho lần render đầu.'
      ] },
      { t: 'table', head: ['', 'useTransition / startTransition', 'useDeferredValue'], rows: [
        ['Bạn kiểm soát', 'Chỗ <b>gọi set</b> (bạn có code cập nhật)', 'Chỗ <b>nhận giá trị</b> (không có code cập nhật, vd prop)'],
        ['Hợp khi', 'Chuyển tab/trang, hành động lâu', 'Giá trị từ props hoặc state ô nhập cần “đuổi theo”']
      ] }
    ] },
    { icon: '⏳', title: 'Suspense, lazy và use(Promise)', blocks: [
      { t: 'p', x: '<code>&lt;Suspense fallback={...}&gt;</code> hiển thị <b>fallback</b> cho đến khi các con “sẵn sàng”. Một boundary chờ khi nội dung bên trong: <b>tải code bằng <code>lazy</code></b>, <b>đọc Promise bằng <code>use</code></b> (kể cả dữ liệu stream từ Server Components hoặc framework hỗ trợ Suspense), chờ stylesheet có <code>precedence</code>, hoặc (khi dùng ViewTransition) chờ font/ảnh.' },
      { t: 'p', x: R2(`const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'))   // ngoài component

<Suspense fallback={<Loading />}>
  <MarkdownPreview />
</Suspense>

function Albums({ albumsPromise }) {
  const albums = use(albumsPromise)           // treo cho đến khi Promise xong
  return <ul>{albums.map(a => <li key={a.id}>{a.title}</li>)}</ul>
}`) },
      { t: 'widget', name: 'rx-suspense', title: 'Bấm “tải”: fallback hiện cho đến khi dữ liệu sẵn sàng; thử có/không Transition' },
      { t: 'warn', x: '<b>Quy tắc của <code>use(promise)</code>:</b> phải gọi trong Component/Hook; <b>không đặt trong try/catch</b> (dùng Error Boundary để bắt lỗi); Promise phải được <b>cache</b> (cùng một instance qua các lần render — thường tạo ở Server Component hoặc framework, không tạo mới trong lúc render); giá trị truyền từ Server sang Client Component phải serialize được.' },
      { t: 'list', items: [
        '<b>Suspense không phát hiện</b> việc lấy dữ liệu trong Effect hay event handler.',
        'React <b>không giữ state</b> cho phần bị treo trước lần mount đầu; khi xong nó thử render lại.',
        'Nếu nội dung đang hiện lại bị treo, fallback hiện lại <b>trừ khi</b> cập nhật nằm trong Transition (khi đó giữ nội dung cũ).',
        'Các boundary sẵn sàng trong vòng ~300ms được <b>hiện cùng nhau</b> để tránh nhấp nháy.',
        'Gắn với Streaming SSR và Selective Hydration.',
        '<code>defer</code> (thử nghiệm): cho phép hiện fallback trước và stream nội dung sau dù không treo.',
        '<code>lazy(load)</code>: gọi <b>ngoài</b> component; <code>load</code> trả Promise resolve ra module có <code>.default</code> là component; chỉ chạy khi render lần đầu.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> lỗi tải <code>lazy</code> hay lỗi trong <code>use</code> sẽ “ném” lên — bọc cây bằng <b>Error Boundary</b> (component class có <code>componentDidCatch</code>/<code>getDerivedStateFromError</code>, hoặc thư viện như <code>react-error-boundary</code>). Tài liệu <code>use</code> hiện cũng mô tả <code>use(browser())</code> cho component chỉ render ở trình duyệt (trong lúc server render nó treo để hiện fallback gần nhất).' }
    ] }
  ],
  summary: [
    '<code>useTransition</code>/<code>startTransition</code>: cập nhật làm nền, bị gián đoạn được; có <code>isPending</code>.',
    '<code>useDeferredValue</code>: bản “chậm” của giá trị — ô nhập mượt, kết quả đuổi theo.',
    'Suspense hiện fallback khi con treo (lazy, <code>use(promise)</code>, streaming); Transition giữ nội dung cũ thay vì fallback.',
    'Không để <code>use</code> trong try/catch; cache Promise; dùng Error Boundary.'
  ],
  cards: [
    ['<code>useTransition</code> trả gì?', '<code>[isPending, startTransition]</code>.'],
    ['Action là gì?', 'Hàm đưa vào startTransition; các cập nhật state bên trong là Transition.'],
    ['Transition có dùng cho ô nhập văn bản?', 'Không.'],
    ['<code>useDeferredValue</code>?', 'Trả giá trị trễ hơn, cập nhật nền.'],
    ['<code>useDeferredValue</code> có phải debounce?', 'Không; không giảm số request.'],
    ['Suspense hoạt động khi?', 'Con treo: lazy, use(promise), streaming…'],
    ['Suspense có bắt fetch trong Effect?', 'Không.'],
    ['<code>lazy</code> gọi ở đâu?', 'Ngoài mọi component.'],
    ['<code>use(promise)</code> không được đặt trong?', 'try/catch.'],
    ['Promise cho <code>use</code> cần?', 'Được cache, cùng instance mỗi render.']
  ],
  quiz: [
    { q: 'Ô tìm kiếm nặng danh sách, muốn ô nhập luôn mượt:', o: ['useDeferredValue/Transition cho danh sách', 'Debounce bằng setTimeout bắt buộc', 'useLayoutEffect', 'Không cách nào'], a: 0, e: 'Ưu tiên cập nhật gấp.' },
    { q: 'Cập nhật trong Transition gặp Suspense:', o: ['Hiện fallback ngay', 'Giữ UI cũ cho đến khi sẵn sàng', 'Báo lỗi', 'Bỏ cập nhật'], a: 1, e: 'Tránh nhấp nháy.' },
    { q: 'use(promise) và lỗi:', o: ['Bọc try/catch', 'Dùng Error Boundary', 'Bỏ qua', 'Dùng useEffect'], a: 1, e: 'Không dùng try/catch.' },
    { q: 'lazy() nên:', o: ['Gọi trong render', 'Gọi ngoài component', 'Gọi trong Effect', 'Gọi trong event'], a: 1, e: 'Tạo một lần.' },
    { q: 'isPending lấy từ:', o: ['startTransition (import)', 'useTransition', 'useDeferredValue', 'lazy'], a: 1, e: 'Chỉ useTransition cho isPending.' }
  ],
  match: [
    ['useTransition', 'Cập nhật làm nền + isPending'],
    ['useDeferredValue', 'Giá trị trễ để UI mượt'],
    ['Suspense', 'Hiện fallback khi chờ'],
    ['lazy', 'Tải code khi cần'],
    ['use(promise)', 'Đọc Promise lúc render']
  ]
},

{
  n: 7,
  title: 'Form và dữ liệu: useActionState, useOptimistic và Actions',
  intro: 'React giờ coi việc gửi dữ liệu (form, nút bấm có gọi server) như một khái niệm hạng nhất: <b>Action</b>. Quanh nó có các hook để lấy kết quả, trạng thái chờ và hiển thị “lạc quan” trước khi server trả lời.',
  sections: [
    { icon: '📨', title: 'Action là gì', blocks: [
      { t: 'p', x: '<b>Action</b> = một hàm (thường async) chạy bên trong một Transition để thay đổi dữ liệu. Có thể là prop <code>&lt;form action={fn}&gt;</code>, hàm bọc <code>startTransition</code>, hoặc Server Function. React theo dõi trạng thái <b>đang chờ (pending)</b> cho bạn.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> Action như <b>gửi thư</b>: bạn bỏ vào hòm (gọi action), hòm báo “đang gửi” (pending), rồi có thư trả lời (state mới). Bạn không phải tự viết cờ <code>isLoading</code>, <code>try/catch</code>, chống bấm hai lần từ đầu.' }
    ] },
    { icon: '📝', title: 'useActionState', blocks: [
      { t: 'p', x: R2(`const [state, dispatchAction, isPending] = useActionState(reducerAction, initialState, permalink?)

async function addToCart(prevState, formData) {      // reducerAction: có thể async, có tác dụng phụ
  const err = await submitToServer(formData)
  return err ? { error: err } : { ok: true }         // trả về state kế tiếp
}
function Form() {
  const [state, action, isPending] = useActionState(addToCart, { ok: false })
  return <form action={action}>
    <button disabled={isPending}>Thêm</button>
    {state.error && <p>{state.error}</p>}
  </form>
}`) },
      { t: 'table', head: ['Phần', 'Ý nghĩa'], rows: [
        ['<code>reducerAction(prev, payload)</code>', 'Nhận state trước + dữ liệu gửi (form: <code>FormData</code>); <b>được async</b>, được có tác dụng phụ (khác reducer của <code>useReducer</code>)'],
        ['<code>initialState</code>', 'State ban đầu (cần serialize được nếu dùng Server Function)'],
        ['Trả về', '<code>[state, dispatchAction, isPending]</code>'],
        ['<code>permalink</code>', 'URL dùng cho progressive enhancement với Server Components: nếu form gửi trước khi JS tải xong, trình duyệt sẽ đi tới URL này']
      ] },
      { t: 'list', items: [
        'Nhiều lần <code>dispatchAction</code> được xếp hàng và chạy <b>tuần tự</b>, mỗi lần nhận kết quả lần trước.',
        '<code>dispatchAction</code> phải được gọi trong một Action (bọc <code>startTransition</code> hoặc truyền vào action prop); ngoài đó sẽ báo lỗi.',
        'Nếu <code>dispatchAction</code> ném lỗi: React hủy các action đang chờ và hiện <b>Error Boundary</b> gần nhất.',
        'Danh tính <code>dispatchAction</code> ổn định.'
      ] },
      { t: 'widget', name: 'rx-actionstate', title: 'Form dùng useActionState: gửi thành công/thất bại, xem isPending và state' }
    ] },
    { icon: '😎', title: 'useOptimistic: “lạc quan” khi chờ server', blocks: [
      { t: 'p', x: '<code>useOptimistic(value, reducer?)</code> cho bạn một <b>giá trị tạm</b> hiển thị <b>ngay</b> khi người dùng thao tác, dù server chưa trả lời. Khi Action xong, giá trị thật thay thế (nếu thất bại, giao diện tự trở về giá trị thật).' },
      { t: 'p', x: R2(`const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked)

async function like() {
  setOptimisticLiked(true)            // hiện ❤ NGAY (chỉ trong Action)
  await sendLikeToServer()            // chờ server
  setLiked(true)                      // giá trị thật; hội tụ với optimistic ở cùng một render
}`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> bạn bấm tim — ứng dụng <b>vẽ tim đỏ liền</b> (như tin chắc sẽ thành công). Nếu máy chủ báo lỗi, tim tự trở lại màu cũ. Giống nhân viên ghi “đã nhận đơn” lên bảng trước, rồi mới thật sự đi xử lý.' },
      { t: 'widget', name: 'rx-optimistic', title: 'Nút thích “lạc quan”: thử mạng thành công và mạng lỗi' },
      { t: 'list', items: [
        '<code>set</code> phải gọi trong <b>Action</b> (nếu không React cảnh báo).',
        'Optimistic chỉ hiển thị <b>trong khi Action đang chạy</b>; xong thì dùng <code>value</code> thật. Không có render “dọn dẹp” thêm.',
        'Có thể truyền <code>reducer(currentState, action)</code> để cập nhật theo kiểu danh sách (thêm một mục tạm vào cuối).'
      ] }
    ] }
  ],
  summary: [
    'Action = hàm (thường async) chạy trong Transition; React theo dõi pending.',
    '<code>useActionState</code> trả <code>[state, dispatchAction, isPending]</code>; reducerAction được async; action xếp hàng tuần tự.',
    '<code>useOptimistic</code> hiện kết quả tạm ngay lập tức, tự về giá trị thật khi Action xong.'
  ],
  cards: [
    ['Action?', 'Hàm (thường async) chạy trong Transition để thay đổi dữ liệu.'],
    ['<code>useActionState</code> trả gì?', '<code>[state, dispatchAction, isPending]</code>.'],
    ['<code>reducerAction</code> khác reducer thường?', 'Có thể async và có tác dụng phụ.'],
    ['Form action?', '<code>&lt;form action={dispatchAction}&gt;</code> — nhận <code>FormData</code>.'],
    ['Nhiều dispatch cùng lúc?', 'Xếp hàng, chạy tuần tự.'],
    ['<code>permalink</code>?', 'URL cho progressive enhancement với Server Components.'],
    ['<code>useOptimistic</code>?', 'Giá trị tạm hiển thị ngay trong lúc Action đang chạy.'],
    ['Optimistic set gọi ở đâu?', 'Trong một Action.'],
    ['Khi server lỗi?', 'Giao diện trở về giá trị thật.']
  ],
  quiz: [
    { q: 'Hiển thị “đã thích” ngay khi bấm, không chờ server:', o: ['useOptimistic', 'useId', 'useRef', 'useMemo'], a: 0, e: 'Giá trị tạm.' },
    { q: 'isPending của useActionState dùng để:', o: ['Khóa nút/hiện đang gửi', 'Đổi tên action', 'Hủy action', 'Gọi API'], a: 0, e: 'Cho biết đang xử lý.' },
    { q: 'Hai lần dispatchAction liên tiếp:', o: ['Chạy song song', 'Xếp hàng tuần tự', 'Bỏ lần 1', 'Lỗi'], a: 1, e: 'Mỗi lần nhận kết quả lần trước.' },
    { q: 'Setter của useOptimistic phải gọi:', o: ['Bất kỳ đâu', 'Trong Action', 'Trong render', 'Trong CSS'], a: 1, e: 'Nếu không sẽ cảnh báo.' },
    { q: 'dispatchAction ném lỗi thì:', o: ['Bị bỏ qua', 'Error Boundary gần nhất hiện', 'Tự retry', 'Tắt app'], a: 1, e: 'Các action chờ bị hủy.' }
  ],
  match: [
    ['useActionState', 'State kết quả của Action'],
    ['useOptimistic', 'Cập nhật lạc quan'],
    ['FormData', 'Dữ liệu form truyền vào action'],
    ['isPending', 'Action đang chạy'],
    ['permalink', 'URL fallback khi JS chưa tải']
  ]
},

{
  n: 8,
  title: 'Hook khác: useId, useSyncExternalStore, useDebugValue và custom Hook',
  intro: 'Phần còn lại của bộ Hook: sinh ID duy nhất, đăng ký với kho dữ liệu bên ngoài React, gán nhãn cho DevTools — và cách tự đóng gói logic thành Hook của riêng bạn.',
  sections: [
    { icon: '🆔', title: 'useId', blocks: [
      { t: 'p', x: '<code>useId()</code> sinh một ID <b>duy nhất, ổn định giữa server và client</b>, dùng cho thuộc tính tiếp cận như <code>htmlFor</code>, <code>aria-describedby</code>.' },
      { t: 'p', x: R2(`const id = useId()
<label htmlFor={id + '-email'}>Email</label>
<input id={id + '-email'} type="email" />`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> cùng một form dùng hai lần trên trang (hai ô email) mà viết cứng <code>id="email"</code> thì trùng ID → label gắn nhầm. <code>useId</code> đưa mỗi bản sao một “số thứ tự” riêng.' },
      { t: 'warn', x: '<b>Không</b> dùng <code>useId</code> để làm <code>key</code> trong danh sách (key phải lấy từ dữ liệu); không dùng làm cache key cho <code>use()</code>; hiện chưa dùng được trong async Server Components.' }
    ] },
    { icon: '🔔', title: 'useSyncExternalStore', blocks: [
      { t: 'p', x: 'Dùng khi bạn cần đọc dữ liệu từ <b>kho bên ngoài React</b> (thư viện state, <code>navigator.onLine</code>, <code>window.matchMedia</code>) và muốn component tự cập nhật khi kho đổi — an toàn với rendering đồng thời (concurrent).' },
      { t: 'p', x: R2(`function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => { window.removeEventListener('online', callback); window.removeEventListener('offline', callback) }
}
const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true)
//                                     subscribe    getSnapshot           getServerSnapshot`) },
      { t: 'table', head: ['Tham số', 'Việc'], rows: [
        ['<code>subscribe(callback)</code>', 'Đăng ký với kho; khi kho đổi gọi <code>callback</code>; trả hàm hủy đăng ký'],
        ['<code>getSnapshot()</code>', 'Đọc “ảnh chụp” hiện tại; lặp lại khi kho chưa đổi phải trả cùng một giá trị; snapshot phải <b>bất biến</b>'],
        ['<code>getServerSnapshot()</code> (tùy chọn)', 'Giá trị ban đầu dùng khi render server và khi hydrate']
      ] },
      { t: 'warn', x: 'Nếu kho có dữ liệu mutable, phải trả <b>snapshot bất biến mới</b> khi dữ liệu đổi (nếu không React không thấy đổi). Đừng tạo hàm <code>subscribe</code> mới trong mỗi render (React sẽ đăng ký lại). Không nên “treo” (suspend) render dựa trên giá trị của hook này.' }
    ] },
    { icon: '🏷', title: 'useDebugValue và Custom Hook', blocks: [
      { t: 'p', x: '<code>useDebugValue(value, format?)</code> chỉ để gán <b>nhãn dễ đọc</b> cho một custom Hook trong React DevTools — không ảnh hưởng hành vi.' },
      { t: 'p', x: 'Custom Hook là hàm tên bắt đầu bằng <code>use</code> gọi các Hook khác — cách <b>tái sử dụng logic có state</b> (không phải tái sử dụng state: mỗi nơi gọi có state riêng).' },
      { t: 'p', x: R2(`function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true)
  useDebugValue(isOnline ? 'Online' : 'Offline')
  return isOnline
}
// dùng: const online = useOnlineStatus()   (ở bao nhiêu component cũng được)`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> custom Hook như <b>công thức nấu ăn</b> chép ra thẻ: ai cũng dùng được công thức, nhưng mỗi người nấu nồi riêng (state riêng).' },
      { t: 'widget', name: 'rx-hook-pick', title: 'Tình huống này nên dùng hook nào?' }
    ] }
  ],
  summary: [
    '<code>useId</code> cho ID tiếp cận duy nhất (không dùng làm key).',
    '<code>useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)</code> đọc kho ngoài; snapshot bất biến.',
    '<code>useDebugValue</code> gán nhãn DevTools; custom Hook (tên <code>useXxx</code>) tái dùng logic có state.'
  ],
  cards: [
    ['<code>useId</code>?', 'ID duy nhất ổn định server/client cho thuộc tính tiếp cận.'],
    ['<code>useId</code> làm key danh sách?', 'Không — key từ dữ liệu.'],
    ['<code>useSyncExternalStore</code>?', 'Đăng ký với kho dữ liệu bên ngoài React.'],
    ['Ba tham số?', 'subscribe, getSnapshot, getServerSnapshot (tùy chọn).'],
    ['getSnapshot phải?', 'Trả giá trị bất biến, ổn định khi kho chưa đổi.'],
    ['<code>useDebugValue</code>?', 'Nhãn cho custom Hook trong DevTools.'],
    ['Custom Hook là?', 'Hàm bắt đầu bằng <code>use</code> gọi Hook khác.'],
    ['Custom Hook chia sẻ state?', 'Không — mỗi lần gọi có state riêng.']
  ],
  quiz: [
    { q: 'Hai ô email cùng form trên một trang, tránh trùng id:', o: ['useId', 'Math.random()', 'Date.now()', 'useRef'], a: 0, e: 'Ổn định cả hydration.' },
    { q: 'Theo dõi trạng thái online của trình duyệt:', o: ['useSyncExternalStore', 'useId', 'useReducer', 'useDeferredValue'], a: 0, e: 'Kho ngoài React.' },
    { q: 'Tên custom Hook phải:', o: ['Bắt đầu bằng use', 'Viết hoa', 'Bắt đầu bằng hook', 'Không quy định'], a: 0, e: 'Quy ước để lint nhận ra.' },
    { q: 'Hai component dùng cùng custom Hook:', o: ['Chia sẻ state', 'Mỗi cái có state riêng', 'Lỗi', 'Chỉ cái đầu có state'], a: 1, e: 'Tái dùng logic, không phải state.' },
    { q: 'Snapshot của useSyncExternalStore phải:', o: ['Mutable', 'Bất biến', 'Là Promise', 'Là hàm'], a: 1, e: 'Để React phát hiện thay đổi.' }
  ],
  match: [
    ['useId', 'ID duy nhất'],
    ['useSyncExternalStore', 'Đọc kho ngoài'],
    ['useDebugValue', 'Nhãn DevTools'],
    ['custom Hook', 'useXxx tái dùng logic'],
    ['getServerSnapshot', 'Giá trị cho server/hydrate']
  ]
}
);
