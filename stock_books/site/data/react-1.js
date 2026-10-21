// React Reference (react.dev/reference/react) – bản tiếng Việt dễ hiểu – Chương 1–4.
// Khối "📚 Bổ sung ngoài tài liệu" = giải thích thêm để dễ hiểu (không nằm trong trang reference).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.reactref = BOOK_DATA.reactref || { chapters: [] };
const R1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.reactref.chapters.push(

{
  n: 1,
  title: 'State: useState và useReducer',
  intro: 'State là “trí nhớ” của component: giá trị thay đổi theo thời gian và khi đổi thì giao diện vẽ lại. React có hai hook chính để giữ state: <code>useState</code> (đơn giản) và <code>useReducer</code> (khi logic cập nhật phức tạp).',
  sections: [
    { icon: '🧠', title: 'useState', blocks: [
      { t: 'p', x: R1(`const [count, setCount] = useState(0)
// count: giá trị hiện tại   |   setCount: hàm cập nhật (kích hoạt render lại)`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> mỗi lần render là một <b>bức ảnh chụp</b> giao diện. <code>count</code> trong bức ảnh đó là một số <i>cố định</i>. Gọi <code>setCount(5)</code> không sửa số trong ảnh cũ — nó nhờ React chụp bức ảnh <b>mới</b> với số 5. Vì vậy ngay sau <code>setCount</code>, biến <code>count</code> vẫn là giá trị cũ.' },
      { t: 'table', head: ['Chi tiết', 'Cần nhớ'], rows: [
        ['Đối số', '<code>initialState</code> (chỉ dùng cho lần render đầu). Truyền <b>hàm</b> = <i>initializer</i>: pure, không đối số, chỉ chạy lần đầu → tránh tính toán nặng mỗi lần render'],
        ['Trả về', 'Mảng đúng 2 phần tử: <code>[state, set]</code>'],
        ['Chỉ gọi ở <b>cấp trên cùng</b>', 'Không trong vòng lặp/điều kiện (xem chương 11); cần thì tách component mới'],
        ['<code>set(next)</code>', 'Chỉ đổi cho <b>lần render kế tiếp</b>; nếu giá trị mới <code>Object.is</code> bằng cũ thì React bỏ qua render lại'],
        ['<code>set(prev =&gt; ...)</code>', '<b>Hàm cập nhật (updater):</b> nhận state đang chờ xử lý, trả state kế tiếp — pure'],
        ['Gom nhóm (batching)', 'React cập nhật màn hình <b>sau khi mọi event handler chạy xong</b>, tránh render nhiều lần'],
        ['Strict Mode (dev)', 'Gọi initializer và updater <b>hai lần</b> để lộ hàm không pure']
      ] },
      { t: 'widget', name: 'rx-state-sim', title: 'Thử: setCount(count + 1) ×3 so với setCount(c => c + 1) ×3' },
      { t: 'key', x: '<b>Cập nhật dựa trên giá trị trước đó thì dùng updater:</b> <code>setCount(c =&gt; c + 1)</code>. Dạng <code>setCount(count + 1)</code> gọi 3 lần liền chỉ tăng 1, vì cả 3 lần đều đọc cùng một <code>count</code> của bức ảnh hiện tại.' },
      { t: 'warn', x: '<b>Đừng sửa trực tiếp object/mảng trong state</b> (<code>user.name = "A"</code>, <code>arr.push(x)</code>). Tạo bản sao mới: <code>setUser({ ...user, name: "A" })</code>, <code>setArr([...arr, x])</code>. Nếu không React thấy cùng tham chiếu và có thể không vẽ lại.' },
      { t: 'list', items: [
        'Để <b>reset state</b> của một component: đổi <code>key</code> của nó.',
        'Không tạo state mới bằng cách gọi <code>set</code> trong lúc render, trừ để điều chỉnh state của <i>chính component đang render</i> theo prop (hiếm; thường không cần).',
        'Nhiều state độc lập: gọi <code>useState</code> nhiều lần.'
      ] }
    ] },
    { icon: '🧮', title: 'useReducer', blocks: [
      { t: 'p', x: R1(`function reducer(state, action) {
  switch (action.type) {
    case 'added':   return [...state, { id: action.id, text: action.text }]
    case 'removed': return state.filter(t => t.id !== action.id)
    default: throw Error('Hành động lạ: ' + action.type)
  }
}
const [tasks, dispatch] = useReducer(reducer, [])
dispatch({ type: 'added', id: 1, text: 'Học React' })`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>useState</code> như tự mình sửa sổ sách. <code>useReducer</code> như có <b>thủ quỹ</b>: bạn chỉ nộp “phiếu” (<i>action</i>: “thêm việc”, “xóa việc”), thủ quỹ (<i>reducer</i>) tự ghi sổ theo quy tắc. Mọi luật cập nhật nằm ở một chỗ, dễ kiểm tra.' },
      { t: 'table', head: ['', 'useState', 'useReducer'], rows: [
        ['Dùng khi', 'State đơn giản, cập nhật độc lập', 'Nhiều cách cập nhật liên quan, state phức tạp (object lồng, danh sách)'],
        ['Logic cập nhật', 'Rải ở các event handler', 'Gom vào một hàm reducer ngoài component'],
        ['Ưu', 'Ít mã', 'Dễ test, dễ theo dõi “chuyện gì đã xảy ra” qua action'],
        ['Tham số', '<code>useState(initial)</code>', '<code>useReducer(reducer, initialArg, init?)</code>']
      ] },
      { t: 'widget', name: 'rx-reducer', title: 'Reducer giỏ việc: gửi action, xem nhật ký action và state' },
      { t: 'list', items: [
        '<b>reducer phải pure:</b> chỉ tính state mới từ <code>(state, action)</code>, không gọi API, không sửa state cũ; trả về state mới.',
        '<b>dispatch</b> cũng chỉ đổi cho lần render kế tiếp; danh tính của <code>dispatch</code> ổn định (thường không cần đưa vào dependency của Effect).',
        'Mỗi action mô tả <b>một tương tác của người dùng</b> (dù nó làm đổi nhiều dữ liệu).',
        'Strict Mode (dev) gọi reducer và initializer hai lần.'
      ] }
    ] }
  ],
  summary: [
    '<code>useState</code> trả <code>[state, set]</code>; <code>set</code> chỉ đổi cho lần render kế; cập nhật theo giá trị cũ thì dùng updater <code>c =&gt; c + 1</code>.',
    'Đừng sửa trực tiếp object/mảng; tạo bản sao mới. Reset state bằng <code>key</code>.',
    '<code>useReducer(reducer, initial)</code> gom luật cập nhật vào một hàm pure; gửi bằng <code>dispatch(action)</code>.'
  ],
  cards: [
    ['<code>useState</code> trả gì?', 'Mảng <code>[state, setState]</code>.'],
    ['Vì sao đọc state ngay sau set vẫn cũ?', 'Mỗi lần render là một “bức ảnh”; set chỉ ảnh hưởng lần render kế.'],
    ['Updater function?', '<code>setX(prev =&gt; next)</code>, pure, dùng khi phụ thuộc giá trị trước.'],
    ['Initializer function?', 'Truyền hàm vào <code>useState</code> để chỉ tính giá trị đầu một lần.'],
    ['Batching?', 'React gom cập nhật và vẽ lại sau khi event handler chạy xong.'],
    ['Set cùng giá trị (<code>Object.is</code>)?', 'React bỏ qua render lại.'],
    ['Cách reset state của component?', 'Đổi <code>key</code>.'],
    ['<code>useReducer</code> làm gì?', 'Quản lý state bằng reducer pure nhận (state, action).'],
    ['Action thường có?', 'Object với thuộc tính <code>type</code>.'],
    ['Khi nào chọn reducer?', 'State phức tạp, nhiều kiểu cập nhật liên quan.']
  ],
  quiz: [
    { q: 'setCount(count + 1) gọi 3 lần trong một handler, count = 0, kết quả:', o: ['3', '1', '0', '6'], a: 1, e: 'Cả ba đọc cùng count = 0.' },
    { q: 'setCount(c => c + 1) gọi 3 lần:', o: ['1', '3', '0', 'Lỗi'], a: 1, e: 'Updater nối tiếp nhau.' },
    { q: 'Cách đúng thêm phần tử vào mảng state:', o: ['arr.push(x)', 'setArr([...arr, x])', 'arr = [x]', 'setArr(arr)'], a: 1, e: 'Tạo mảng mới.' },
    { q: 'Reducer phải:', o: ['Gọi API', 'Pure, trả state mới', 'Sửa state cũ', 'Dùng useEffect'], a: 1, e: 'Chỉ tính toán.' },
    { q: 'Gọi hook trong vòng lặp/điều kiện:', o: ['Được', 'Không được (chỉ ở cấp trên cùng)', 'Chỉ với useState', 'Chỉ khi dev'], a: 1, e: 'Rules of Hooks.' },
    { q: 'Strict Mode ở dev gọi updater/reducer:', o: ['Một lần', 'Hai lần', 'Ba lần', 'Không gọi'], a: 1, e: 'Lộ hàm không pure.' }
  ],
  match: [
    ['useState', 'State đơn giản'],
    ['useReducer', 'State phức tạp qua reducer'],
    ['dispatch', 'Gửi action'],
    ['updater function', 'prev => next'],
    ['key', 'Reset state của component']
  ]
},

{
  n: 2,
  title: 'Context: createContext, useContext và use',
  intro: 'Props truyền dữ liệu từng tầng một; khi component con nằm sâu thì rất mệt (“prop drilling”). Context cho phép một component ở trên “phát” giá trị và mọi component bên dưới <b>đọc trực tiếp</b> không cần truyền qua trung gian.',
  sections: [
    { icon: '📡', title: 'Ba bước dùng context', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> context như <b>hệ thống loa phát thanh của tòa nhà</b>: ban quản lý (Provider) phát thông báo, mọi phòng bên dưới (consumer) nghe được mà không cần ai chuyền tờ giấy từng tầng.' },
      { t: 'steps', items: [
        '<b>Tạo:</b> <code>const ThemeContext = createContext("light")</code> — ngoài mọi component; đối số là <i>giá trị mặc định</i> khi không có provider phía trên.',
        '<b>Phát:</b> bọc cây bằng provider: <code>&lt;ThemeContext value="dark"&gt;...&lt;/ThemeContext&gt;</code> (từ React 19; trước đó là <code>&lt;ThemeContext.Provider&gt;</code>).',
        '<b>Đọc:</b> <code>const theme = useContext(ThemeContext)</code> ở bất kỳ component nào bên dưới.'
      ] },
      { t: 'p', x: R1(`const ThemeContext = createContext('light')

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext value={theme}>
      <Page />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Đổi</button>
    </ThemeContext>
  )
}
function Button() {
  const theme = useContext(ThemeContext)    // tìm provider GẦN NHẤT phía trên
  return <button className={theme}>OK</button>
}`) },
      { t: 'widget', name: 'rx-context', title: 'Bấm vào một component: nó nhận giá trị context nào? (provider gần nhất)' }
    ] },
    { icon: '📋', title: 'Điều cần nhớ', blocks: [
      { t: 'list', items: [
        '<code>useContext</code> luôn tìm provider <b>phía trên</b> component gọi nó (không tính provider trong chính component đó).',
        'Khi <code>value</code> của provider đổi (so sánh <code>Object.is</code>), mọi component dùng context đó <b>tự render lại</b> kể cả được <code>memo</code> bọc.',
        '<b>Muốn context thay đổi theo thời gian:</b> kết hợp với state — state ở cha, truyền giá trị xuống provider; muốn cho con sửa thì truyền thêm hàm set (<code>{ user, setUser }</code>).',
        '<b>Giá trị mặc định không bao giờ đổi</b>; chỉ dùng khi không có provider. Nên chọn giá trị mặc định có nghĩa (vd theme “light”) để component vẫn chạy khi test không có provider.',
        '<b>Ghi đè cho một phần cây:</b> lồng provider mới; provider gần hơn thắng.',
        '<b>Nhiều context:</b> dùng nhiều provider lồng nhau; có thể gom thành một component <code>AppProviders</code> cho gọn.',
        '<b>Kết hợp với reducer</b> cho app vừa/lớn: <code>TasksContext</code> + <code>TasksDispatchContext</code>, ẩn dây nối trong một file.'
      ] },
      { t: 'warn', x: 'Truyền <b>object mới</b> làm <code>value</code> mỗi lần render (<code>value={{ a, b }}</code>) khiến mọi consumer render lại mỗi lần cha render. Giữ object ổn định (state, hoặc <code>useMemo</code>) khi cần. Nếu bundler tạo module bị trùng (symlink) thì context có thể hỏng vì provider và consumer dùng hai đối tượng khác nhau.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – khi nào nên dùng context?</b> Thông tin “toàn cục” ít thay đổi: theme, ngôn ngữ, người dùng đăng nhập, router. Dữ liệu thay đổi liên tục và nhiều component riêng lẻ cần đọc từng phần thì cân nhắc thư viện state (Redux, Zustand…) hoặc tách nhiều context nhỏ.' }
    ] },
    { icon: '✨', title: '<code>use(context)</code>: bản linh hoạt hơn', blocks: [
      { t: 'p', x: '<code>use(SomeContext)</code> đọc context giống <code>useContext</code>, nhưng <b>được phép gọi trong vòng lặp và câu lệnh <code>if</code></b> (vì <code>use</code> không phải Hook thông thường). Không hỗ trợ trong Server Components.' },
      { t: 'p', x: R1(`function Heading({ children }) {
  if (children == null) return null
  const theme = use(ThemeContext)     // gọi sau return điều kiện: hợp lệ với use
  return <h1 style={{ color: theme.color }}>{children}</h1>
}`) },
      { t: 'tip', x: '<code>use</code> còn đọc được <b>Promise</b> (chương 6) — một API duy nhất để “đọc tài nguyên trong lúc render”.' }
    ] }
  ],
  summary: [
    'Context: <code>createContext</code> → Provider (<code>&lt;Ctx value&gt;</code> ở React 19) → <code>useContext</code>.',
    'Provider gần nhất phía trên thắng; value đổi → mọi consumer render lại.',
    'Kết hợp state để context đổi theo thời gian; kết hợp reducer cho app lớn.',
    '<code>use(context)</code> cho phép đọc trong điều kiện/vòng lặp.'
  ],
  cards: [
    ['Context giải quyết gì?', 'Prop drilling — truyền dữ liệu xuống sâu không qua trung gian.'],
    ['Tạo context?', '<code>createContext(defaultValue)</code>.'],
    ['Phát giá trị?', '<code>&lt;Ctx value={...}&gt;</code> (React 19) hoặc <code>&lt;Ctx.Provider&gt;</code>.'],
    ['Đọc?', '<code>useContext(Ctx)</code> hoặc <code>use(Ctx)</code>.'],
    ['Provider nào được dùng?', 'Gần nhất phía trên component gọi.'],
    ['Giá trị mặc định khi nào dùng?', 'Khi không có provider phía trên.'],
    ['Context đổi theo thời gian?', 'Kết hợp với state ở cha.'],
    ['<code>use</code> khác <code>useContext</code>?', '<code>use</code> gọi được trong if/vòng lặp.'],
    ['Vì sao nên giữ value ổn định?', 'Object mới mỗi render làm consumer render lại không cần thiết.']
  ],
  quiz: [
    { q: 'Hai provider lồng nhau cùng context, component bên trong đọc:', o: ['Provider ngoài', 'Provider gần nhất phía trên', 'Giá trị mặc định', 'Ngẫu nhiên'], a: 1, e: 'Provider gần thắng.' },
    { q: 'Cập nhật giá trị context theo thời gian bằng:', o: ['Sửa defaultValue', 'State ở cha truyền vào value', 'Đổi tên context', 'useRef'], a: 1, e: 'Default không bao giờ đổi.' },
    { q: 'use(Context) khác useContext ở chỗ:', o: ['Chậm hơn', 'Gọi được trong điều kiện/vòng lặp', 'Chỉ cho class', 'Không đọc được context'], a: 1, e: 'Không phải Hook thông thường.' },
    { q: 'createContext nên gọi:', o: ['Trong component', 'Ngoài mọi component', 'Trong useEffect', 'Trong event handler'], a: 1, e: 'Tạo một lần.' },
    { q: 'Provider đổi value thì consumer:', o: ['Không đổi', 'Render lại', 'Unmount', 'Báo lỗi'], a: 1, e: 'Kể cả bọc memo.' }
  ],
  match: [
    ['createContext', 'Tạo context'],
    ['useContext', 'Đọc context'],
    ['Provider', 'Phát giá trị'],
    ['prop drilling', 'Truyền props qua nhiều tầng'],
    ['use(Ctx)', 'Đọc context trong điều kiện']
  ]
},

{
  n: 3,
  title: 'Ref và DOM: useRef, useImperativeHandle',
  intro: 'Có những thứ cần nhớ giữa các lần render nhưng <b>không</b> cần vẽ lên màn hình — id của timer, phần tử DOM để focus. Đó là việc của ref: một “ngăn kéo” mà thay đổi nội dung không kích hoạt render.',
  sections: [
    { icon: '📦', title: 'useRef: giá trị nhớ được nhưng không gây render', blocks: [
      { t: 'p', x: R1(`const ref = useRef(0)
ref.current = ref.current + 1     // đổi KHÔNG làm component render lại`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> state là <b>bảng điện tử trước cửa hàng</b> — đổi số là mọi người thấy ngay (render lại). ref là <b>tờ giấy nhớ trong túi bạn</b> — bạn sửa thoải mái, không ai thấy thay đổi, nhưng sang lần render sau tờ giấy vẫn còn.' },
      { t: 'table', head: ['', 'State', 'Ref'], rows: [
        ['Đổi có render lại?', '<b>Có</b>', '<b>Không</b>'],
        ['Giữ qua các lần render?', 'Có', 'Có (cùng một object)'],
        ['Phạm vi', 'Riêng từng bản sao component', 'Riêng từng bản sao component (khác biến ngoài component dùng chung)'],
        ['Mutable?', 'Không sửa trực tiếp', 'Có: sửa <code>ref.current</code>'],
        ['Dùng cho', 'Dữ liệu hiển thị', 'Timer id, DOM node, giá trị chỉ dùng trong handler/effect']
      ] },
      { t: 'widget', name: 'rx-ref-vs-state', title: 'Bấm hai nút: state làm đếm render, ref thì không' },
      { t: 'warn', x: '<b>Không đọc hay ghi <code>ref.current</code> trong lúc render</b> (trừ khởi tạo lần đầu): nó phá tính “pure” của component và hành vi khó đoán. Đọc/ghi trong <b>event handler hoặc Effect</b>. Cần hiển thị thì dùng state.' },
      { t: 'list', items: [
        'Tránh tạo lại nội dung ref nặng mỗi render: khởi tạo có điều kiện (<code>if (ref.current === null) ref.current = new Heavy()</code>).',
        'Ví dụ hợp: lưu <code>intervalId</code> để <code>clearInterval</code> sau; đồng hồ bấm giờ dùng cả state (hiển thị) và ref (id).',
        'Strict Mode (dev) gọi hàm component hai lần nên mỗi object ref được tạo hai lần (một cái bị bỏ).'
      ] }
    ] },
    { icon: '🎯', title: 'Ref vào DOM', blocks: [
      { t: 'p', x: R1(`const inputRef = useRef(null)
<input ref={inputRef} />
// sau khi vẽ: inputRef.current là phần tử <input> thật
<button onClick={() => inputRef.current.focus()}>Focus</button>`) },
      { t: 'tip', x: 'Dùng ref để làm việc mà React không làm hộ: focus, scroll tới, đo kích thước, phát video. <b>Không</b> dùng ref để thay đổi nội dung DOM do React quản lý (React sẽ ghi đè).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> ref callback: <code>ref={(node) =&gt; { ...; return () =&gt; { cleanup } }}</code> — trong React 19 callback có thể <b>trả về hàm dọn dẹp</b>; Strict Mode cũng chạy lại ref callback một lần thêm ở dev.' }
    ] },
    { icon: '🔌', title: 'Cho cha điều khiển con: ref là prop và useImperativeHandle', blocks: [
      { t: 'p', x: 'Từ <b>React 19</b>, <code>ref</code> là một <b>prop bình thường</b> của component hàm — <code>forwardRef</code> không còn cần thiết (React 18 trở về trước phải dùng <code>forwardRef</code>).' },
      { t: 'p', x: R1(`function MyInput({ ref }) {          // React 19: nhận ref như prop
  return <input ref={ref} />
}
// cha: <MyInput ref={inputRef} /> → inputRef.current là <input> DOM`) },
      { t: 'p', x: 'Không muốn lộ <b>cả</b> phần tử DOM, chỉ lộ vài thao tác? Dùng <code>useImperativeHandle(ref, createHandle, deps?)</code> để “tùy chỉnh tay cầm” mà cha nhận được:' },
      { t: 'p', x: R1(`function MyInput({ ref }) {
  const realRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus() { realRef.current.focus() },
    scrollIntoView() { realRef.current.scrollIntoView() }
  }), [])
  return <input ref={realRef} />
}
// cha chỉ gọi được focus() và scrollIntoView(), không đụng được phần tử input thật`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> đưa cha <b>điều khiển từ xa</b> chỉ có hai nút (focus, scroll), chứ không đưa nguyên cái TV. An toàn và gọn hơn.' },
      { t: 'warn', x: 'Dùng ref “mệnh lệnh” (imperative) chỉ cho những thao tác không diễn tả được bằng props (focus, scroll, phát/dừng). Nếu làm được bằng props/state thì nên dùng props/state.' }
    ] }
  ],
  summary: [
    '<code>useRef(initial)</code> trả object <code>{ current }</code>; đổi không render lại; chỉ đọc/ghi trong handler hoặc Effect.',
    'Ref gắn DOM để focus/scroll/đo; không dùng để sửa DOM do React quản lý.',
    'React 19: <code>ref</code> là prop, bỏ <code>forwardRef</code>; <code>useImperativeHandle</code> để lộ một “tay cầm” tùy chỉnh.'
  ],
  cards: [
    ['Ref khác state?', 'Đổi ref không render lại; ref mutable.'],
    ['<code>useRef</code> trả gì?', 'Object <code>{ current }</code> giữ nguyên qua các render.'],
    ['Không nên làm gì với ref?', 'Đọc/ghi <code>ref.current</code> khi render.'],
    ['Dùng ref để làm gì?', 'Timer id, DOM node (focus, scroll, đo).'],
    ['React 19 thay đổi về ref?', '<code>ref</code> là prop thường; không cần <code>forwardRef</code>.'],
    ['<code>useImperativeHandle</code>?', 'Tùy chỉnh giá trị tay cầm mà cha nhận qua ref.'],
    ['Lấy DOM node?', '<code>&lt;input ref={r}/&gt;</code> rồi <code>r.current</code>.'],
    ['Hiển thị giá trị ref trong JSX?', 'Không cập nhật khi ref đổi — dùng state.']
  ],
  quiz: [
    { q: 'Thông tin cần hiển thị lên màn hình nên lưu ở:', o: ['ref', 'state', 'biến ngoài', 'DOM'], a: 1, e: 'Chỉ state kích hoạt render.' },
    { q: 'Lưu id của setInterval để clear sau nên dùng:', o: ['useState', 'useRef', 'useContext', 'useId'], a: 1, e: 'Không cần render.' },
    { q: 'Đọc ref.current trong lúc render là:', o: ['Khuyến nghị', 'Nên tránh', 'Bắt buộc', 'Không thể'], a: 1, e: 'Phá tính pure.' },
    { q: 'React 19: truyền ref xuống component hàm:', o: ['Bắt buộc forwardRef', 'ref là prop thường', 'Không thể', 'Dùng context'], a: 1, e: 'forwardRef không còn cần.' },
    { q: 'Chỉ muốn cha gọi focus() chứ không đụng input thật:', o: ['useImperativeHandle', 'useId', 'useMemo', 'createRef'], a: 0, e: 'Tùy chỉnh handle.' }
  ],
  match: [
    ['useRef', 'Giá trị nhớ, không gây render'],
    ['ref.current', 'Thuộc tính chứa giá trị'],
    ['useImperativeHandle', 'Tùy chỉnh handle cho cha'],
    ['forwardRef', 'Cách cũ chuyển ref (React ≤18)'],
    ['DOM ref', 'focus/scroll/đo']
  ]
},

{
  n: 4,
  title: 'Effect: useEffect, useEffectEvent, useLayoutEffect, useInsertionEffect',
  intro: 'Effect là cách đồng bộ component với <b>hệ thống bên ngoài</b> React (mạng, timer, sự kiện trình duyệt, thư viện). Đây là phần dễ hiểu sai nhất; mẹo chính: nghĩ về “bắt đầu đồng bộ” và “dừng đồng bộ”, chứ không phải “mount/unmount”.',
  sections: [
    { icon: '🔌', title: 'useEffect: setup và cleanup', blocks: [
      { t: 'p', x: R1(`useEffect(() => {
  const conn = createConnection(serverUrl, roomId)   // SETUP: kết nối
  conn.connect()
  return () => conn.disconnect()                      // CLEANUP: ngắt kết nối
}, [serverUrl, roomId])                               // dependencies`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> Effect như <b>cắm điện thoại vào sạc</b>. Setup = cắm vào. Cleanup = rút ra. Mỗi khi “điều kiện” (dependencies: loại sạc, ổ cắm) đổi, bạn <b>rút cái cũ ra rồi cắm cái mới vào</b>. Rời đi thì rút lần cuối. Đừng nghĩ “đang mount hay update” — chỉ cần mỗi vòng cắm/rút đúng.' },
      { t: 'steps', items: [
        '<b>Setup</b> chạy khi component được thêm vào trang (mount).',
        'Sau mỗi lần commit mà <b>dependencies đổi</b>: ① chạy <b>cleanup</b> với props/state cũ, ② rồi chạy <b>setup</b> với props/state mới.',
        '<b>Cleanup</b> chạy lần cuối khi component bị gỡ (unmount).'
      ] },
      { t: 'widget', name: 'rx-effect-lifecycle', title: 'Mô phỏng vòng đời Effect: đổi roomId, bật/tắt Strict Mode' },
      { t: 'table', head: ['Dependencies', 'Effect chạy khi'], rows: [
        ['<code>[a, b]</code>', 'Lần đầu và mỗi khi <code>a</code> hoặc <code>b</code> đổi'],
        ['<code>[]</code>', 'Chỉ lần đầu (mount) — và cleanup khi unmount'],
        ['Không truyền mảng', 'Sau <b>mọi</b> lần render']
      ] },
      { t: 'key', x: 'Mảng dependencies phải liệt kê <b>mọi giá trị phản ứng</b> (prop, state, biến/hàm khai báo trong component) mà Effect dùng. Linter <code>eslint-plugin-react-hooks</code> nhắc bạn; đừng tắt cảnh báo. Object/hàm tạo ngay trong component thay đổi mỗi render → Effect chạy quá nhiều: xóa bớt phụ thuộc không cần, hoặc chuyển ra ngoài/ra trong Effect.' },
      { t: 'widget', name: 'rx-deps', title: 'Dependencies như vậy thì Effect chạy khi nào?' }
    ] },
    { icon: '🧪', title: 'Strict Mode: chạy thêm một vòng để bắt lỗi', blocks: [
      { t: 'p', x: 'Ở <b>development</b> với Strict Mode, React chạy thêm <b>một chu kỳ setup+cleanup</b> trước setup thật — bài kiểm tra áp lực để chắc cleanup “phản chiếu” đúng setup. Nếu bạn thấy kết nối bị mở/đóng/mở, đó là bình thường; hãy sửa <b>cleanup</b> cho đủ, đừng cố tắt.' },
      { t: 'warn', x: '<b>Có thể bạn không cần Effect.</b> Nếu không đồng bộ với hệ thống ngoài thì đừng dùng Effect: tính dữ liệu dẫn xuất ngay lúc render, xử lý hành động người dùng trong event handler, reset state bằng <code>key</code>. Effect chỉ chạy ở <b>client</b> (không chạy khi render server).' },
      { t: 'list', items: [
        '<b>Thời điểm chạy:</b> thường sau khi trình duyệt <i>vẽ</i> màn hình; nếu do tương tác (click) có thể chạy trước khi vẽ để kết quả quan sát được.',
        '<b>Lấy dữ liệu trong Effect:</b> phải có biến <code>ignore</code> (đặt <code>true</code> trong cleanup) để tránh <b>race condition</b> (phản hồi đến sai thứ tự). Tốt hơn: dùng cơ chế lấy dữ liệu của framework hoặc một custom Hook.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – “hệ thống bên ngoài” gồm:</b> <code>setInterval/clearInterval</code>, <code>addEventListener/removeEventListener</code>, WebSocket, thư viện animation/bản đồ (<code>start()/reset()</code>), <code>fetch</code> (nhớ hủy/ignore). Mẹo: nếu Effect không có cleanup tương ứng mà vẫn đúng, hãy tự hỏi nó có nên là Effect không.' }
    ] },
    { icon: '🎯', title: 'useEffectEvent: tách “sự kiện” khỏi Effect', blocks: [
      { t: 'p', x: 'Đôi khi trong Effect có phần logic giống <b>event handler</b>: nó cần đọc <b>giá trị mới nhất</b> (props/state) nhưng <b>không nên</b> làm Effect đồng bộ lại. <code>useEffectEvent</code> tạo “Effect Event” cho phần đó.' },
      { t: 'p', x: R1(`function ChatRoom({ roomId, muted }) {
  const onConnected = useEffectEvent(() => {
    if (!muted) playSound()           // luôn thấy muted mới nhất
  })
  useEffect(() => {
    const conn = createConnection(roomId)
    conn.on('connected', () => onConnected())
    conn.connect()
    return () => conn.disconnect()
  }, [roomId])                         // KHÔNG cần đưa muted vào
}`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thay đổi “tắt tiếng” không có lý do gì khiến bạn <b>ngắt rồi gọi lại</b> cuộc gọi. Effect Event cho phép bạn “xem nhanh” trạng thái mới nhất khi sự kiện xảy ra mà không phải gọi lại cả cuộc gọi.' },
      { t: 'warn', x: '(1) Chỉ gọi Effect Event <b>bên trong Effect</b> (<code>useEffect</code>, <code>useLayoutEffect</code>, <code>useInsertionEffect</code>) hoặc Effect Event khác; không gọi khi render, không truyền cho component/Hook khác. (2) <b>Đừng dùng để “trốn” dependencies</b> chỉ vì thấy phiền — nếu giá trị đáng để Effect chạy lại thì cứ để làm dependency. (3) Danh tính hàm thay đổi mỗi render (cố ý, như một “khẳng định lúc chạy”).' }
    ] },
    { icon: '📐', title: 'useLayoutEffect và useInsertionEffect', blocks: [
      { t: 'table', head: ['Hook', 'Chạy lúc', 'Dùng cho'], rows: [
        ['<code>useEffect</code>', 'Sau khi vẽ (thường)', 'Hầu hết mọi trường hợp'],
        ['<code>useLayoutEffect</code>', 'Sau khi cập nhật DOM, <b>trước</b> khi trình duyệt vẽ', 'Đo layout rồi chỉnh (tooltip đặt vị trí) để tránh “nháy” hình. <b>Chặn vẽ</b> → dùng ít'],
        ['<code>useInsertionEffect</code>', 'Trước cả layout effect, ngay khi DOM được cập nhật', '<b>Dành cho tác giả thư viện CSS-in-JS</b> chèn style; không được set state, ref chưa gắn']
      ] },
      { t: 'tip', x: 'Nguyên tắc: mặc định <code>useEffect</code>; chỉ khi thấy “nháy hình” do đo kích thước rồi sửa mới dùng <code>useLayoutEffect</code>; <code>useInsertionEffect</code> hầu như chỉ dành cho thư viện.' }
    ] }
  ],
  summary: [
    'Effect = đồng bộ với hệ thống ngoài: setup (kết nối) + cleanup (ngắt); dependencies quyết định khi nào “rút ra cắm lại”.',
    'Strict Mode dev chạy thêm một vòng setup/cleanup để bắt thiếu cleanup. Lấy dữ liệu cần xử lý race condition.',
    'Bạn có thể không cần Effect. <code>useEffectEvent</code> tách logic “như sự kiện” để không buộc Effect chạy lại.',
    '<code>useLayoutEffect</code> chạy trước khi vẽ (chặn vẽ); <code>useInsertionEffect</code> cho CSS-in-JS.'
  ],
  cards: [
    ['Effect dùng để làm gì?', 'Đồng bộ component với hệ thống ngoài React.'],
    ['Setup và cleanup?', 'Setup kết nối; cleanup ngắt, chạy trước setup kế và khi unmount.'],
    ['Dependencies <code>[]</code>?', 'Effect chỉ chạy lúc mount (cleanup khi unmount).'],
    ['Không truyền dependencies?', 'Chạy sau mọi lần render.'],
    ['Strict Mode làm gì với Effect (dev)?', 'Chạy thêm một chu kỳ setup+cleanup.'],
    ['Effect có chạy khi render server?', 'Không, chỉ ở client.'],
    ['Race condition khi fetch?', 'Dùng biến <code>ignore</code> đặt true trong cleanup.'],
    ['<code>useEffectEvent</code>?', 'Tạo hàm “như sự kiện” luôn thấy giá trị mới nhất mà không là dependency.'],
    ['Nơi gọi Effect Event?', 'Chỉ bên trong Effect/Effect Event khác.'],
    ['<code>useLayoutEffect</code> chạy khi nào?', 'Trước khi trình duyệt vẽ lại.'],
    ['<code>useInsertionEffect</code> cho ai?', 'Tác giả thư viện CSS-in-JS.']
  ],
  quiz: [
    { q: 'Cleanup của Effect chạy:', o: ['Chỉ khi unmount', 'Trước setup kế tiếp (khi dependencies đổi) và khi unmount', 'Không bao giờ', 'Chỉ ở server'], a: 1, e: 'Rút cái cũ ra rồi cắm cái mới.' },
    { q: 'useEffect(fn, []) chạy:', o: ['Mỗi render', 'Chỉ lúc mount (cleanup khi unmount)', 'Khi state đổi', 'Không chạy'], a: 1, e: 'Mảng rỗng.' },
    { q: 'Hiển thị bình luận đã tính từ props, nên dùng:', o: ['useEffect + setState', 'Tính trực tiếp lúc render', 'useLayoutEffect', 'useRef'], a: 1, e: 'Có thể bạn không cần Effect.' },
    { q: 'Gọi Effect Event ở đâu hợp lệ?', o: ['Trong render', 'Truyền cho component con', 'Bên trong Effect', 'Trong JSX'], a: 2, e: 'Chỉ trong Effect.' },
    { q: 'Thiết kế Effect kết nối chat, Strict Mode kết nối-ngắt-kết nối là:', o: ['Lỗi của React', 'Kiểm tra cleanup (bình thường ở dev)', 'Chỉ ở production', 'Do mạng'], a: 1, e: 'Sửa cleanup chứ đừng tắt.' },
    { q: 'Đo kích thước DOM rồi chỉnh vị trí tránh nháy hình:', o: ['useEffect', 'useLayoutEffect', 'useId', 'useMemo'], a: 1, e: 'Chạy trước khi vẽ.' }
  ],
  match: [
    ['useEffect', 'Đồng bộ với hệ thống ngoài'],
    ['cleanup', 'Hàm trả về để ngắt đồng bộ'],
    ['useEffectEvent', 'Logic như sự kiện trong Effect'],
    ['useLayoutEffect', 'Chạy trước khi vẽ'],
    ['useInsertionEffect', 'Chèn style (CSS-in-JS)']
  ]
}
);
