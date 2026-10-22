// Angular – Chương 4–6: signals, template, directive & pipe.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.angularguide = BOOK_DATA.angularguide || { chapters: [] };
const A2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.angularguide.chapters.push(

{
  n: 4,
  title: 'Signals: signal, computed, effect, linkedSignal, resource',
  intro: 'Signal là “bọc quanh một giá trị” biết <b>báo cho ai đang dùng nó</b> khi giá trị đổi. Angular theo dõi nơi nào <b>đọc</b> signal (trong template, computed, effect) và chỉ cập nhật đúng chỗ đó. Chương này: signal ghi được, computed, effect, linkedSignal và <code>resource</code> (dữ liệu bất đồng bộ, stable từ v22).',
  sections: [
    { icon: '📦', title: 'signal() và computed()', blocks: [
      { t: 'p', x: A2(`import { signal, computed } from '@angular/core';

const firstName = signal('Morgan');
console.log(firstName());              // ĐỌC: gọi như hàm → 'Morgan'
firstName.set('Jaime');                // GHI
firstName.update(n => n.toUpperCase()); // GHI dựa trên giá trị trước

const upper = computed(() => firstName().toUpperCase());  // chỉ đọc, tự cập nhật
console.log(upper());                  // 'JAIME'`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> signal như <b>ô nhớ có chuông</b>: ai “nhìn” vào ô (đọc) sẽ được ghi tên; khi bạn đổi nội dung ô, chuông reo đúng những người đã nhìn. Computed là ô công thức: <code>=A1*2</code>, tự cập nhật khi A1 đổi.' },
      { t: 'table', head: ['', 'signal()', 'computed()'], rows: [
        ['Ghi', '<code>set()</code>, <code>update()</code>', '❌ Chỉ đọc'],
        ['Đọc', '<code>x()</code>', '<code>x()</code>'],
        ['Cache', '—', '✅ Chỉ tính lại khi signal nó đọc đổi; <b>lười</b> (chỉ tính khi có ai đọc)'],
        ['Hợp khi', 'State gốc', 'Giá trị dẫn xuất (tính từ state khác)']
      ] },
      { t: 'widget', name: 'ng-signal-sim', title: 'Thử signal, computed và effect cùng chạy' },
      { t: 'list', items: [
        '<b>Dùng trong component:</b> khai báo <code>isTrial = signal(false)</code>, <code>showTrial = computed(...)</code>; trong template gọi <code>isTrial()</code> để Angular theo dõi.',
        'Signal có thể chứa <b>mọi giá trị</b> (primitive, object, mảng). Với object/mảng, <b>thay bằng giá trị mới</b> (<code>update(a =&gt; [...a, x])</code>) thay vì sửa tại chỗ.',
        '<b>Phụ thuộc động:</b> computed chỉ theo dõi signal nó <i>thực sự đọc</i> ở lần chạy gần nhất (nhánh <code>if</code> không chạy tới thì không phụ thuộc).',
        '<b>Đọc không theo dõi:</b> <code>untracked(() =&gt; sig())</code> khi muốn đọc mà không tạo phụ thuộc.',
        '<b>Tùy biến so sánh:</b> <code>signal(x, { equal: fn })</code> quyết định “giá trị có đổi không”.'
      ] }
    ] },
    { icon: '⚡', title: 'effect(): tác dụng phụ', blocks: [
      { t: 'p', x: A2(`import { effect, signal } from '@angular/core';
export class Counter {
  count = signal(0);
  constructor() {
    effect(() => {
      console.log('count hiện tại: ' + this.count());   // chạy lại mỗi khi count đổi
    });
  }
}`) },
      { t: 'warn', x: '<b>Effect nên là lựa chọn cuối cùng.</b> Ưu tiên <code>computed()</code> cho giá trị dẫn xuất và <code>linkedSignal()</code> cho giá trị vừa dẫn xuất vừa ghi tay. <b>Đừng dùng effect để “đồng bộ state này sang state kia”</b> — dễ gây lỗi ExpressionChanged…, vòng lặp và render thừa.' },
      { t: 'list', items: [
        '<b>Hợp lý để dùng:</b> ghi log/analytics, đồng bộ với <code>localStorage</code>/cookie, thao tác DOM tùy biến mà template không làm được, vẽ canvas/biểu đồ thư viện ngoài.',
        'Effect <b>luôn chạy ít nhất một lần</b> và <b>chạy bất đồng bộ</b> trong quá trình change detection.',
        'Chỉ tạo trong <b>injection context</b> (constructor, initializer thuộc tính lớp, hoặc truyền <code>injector</code>); tự hủy khi component/service bị hủy.',
        '<b>Dọn dẹp:</b> callback nhận <code>onCleanup</code> để hủy việc cũ trước lần chạy kế tiếp.',
        'Cho thao tác DOM sau khi render dùng <code>afterRenderEffect</code>.'
      ] }
    ] },
    { icon: '🔗', title: 'linkedSignal(): trạng thái phụ thuộc nhưng sửa được', blocks: [
      { t: 'p', x: A2(`shippingOptions = input.required<ShippingMethod[]>();

// Mặc định = phần tử đầu; nếu danh sách đổi thì tự reset về phần tử đầu, nhưng người dùng vẫn chọn được tay
selectedOption = linkedSignal(() => this.shippingOptions()[0]);

changeShipping(i: number) {
  this.selectedOption.set(this.shippingOptions()[i]);
}`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>computed</code> chỉ đọc; <code>signal</code> độc lập; <code>linkedSignal</code> như <b>“giá trị mặc định thông minh”</b>: tự tính từ nguồn, cho phép bạn ghi đè, và khi nguồn đổi thì quay về giá trị tính được.' }
    ] },
    { icon: '🌐', title: 'resource(): dữ liệu bất đồng bộ (stable v22)', blocks: [
      { t: 'p', x: A2(`import { resource, signal, computed } from '@angular/core';

userId = signal('1');
userResource = resource({
  params: () => ({ id: this.userId() }),          // tính reactive; đổi → tải lại
  loader: ({ params, abortSignal }) => fetchUser(params, abortSignal),
});
firstName = computed(() => this.userResource.hasValue() ? this.userResource.value().firstName : undefined);`) },
      { t: 'table', head: ['Thuộc tính của Resource', 'Ý nghĩa'], rows: [
        ['<code>value()</code>', 'Giá trị đã tải (<code>undefined</code> khi chưa có/lỗi)'],
        ['<code>hasValue()</code>', 'Có giá trị không (type guard, an toàn khi lỗi)'],
        ['<code>status()</code>', '<code>idle</code> / <code>loading</code> / <code>reloading</code> / <code>resolved</code> / <code>error</code> / <code>local</code>'],
        ['<code>isLoading()</code>, <code>error()</code>', 'Đang tải / lỗi'],
        ['<code>reload()</code>', 'Tải lại thủ công'],
        ['<code>params</code> trả <code>undefined</code>', 'Loader <b>không chạy</b>, trạng thái <code>idle</code>']
      ] },
      { t: 'list', items: [
        '<b>Loader nhận:</b> <code>params</code>, <code>previous</code> (trạng thái trước), <code>abortSignal</code> để <b>hủy request cũ</b> khi params đổi.',
        '<b>Streaming:</b> dùng <code>stream</code> thay <code>loader</code> cho nguồn nhiều giá trị (WebSocket, SSE).',
        '<b>Chuỗi resource:</b> resource B phụ thuộc kết quả resource A; khi A đang loading, B vào loading và loader chưa chạy.',
        '<code>httpResource()</code> là bản đã gắn sẵn <code>HttpClient</code> (chương 11).',
        '<code>debounced(source, ms)</code> (<b>thử nghiệm</b>) trả về resource giá trị đã “lắng” sau ms mili-giây — hợp ô tìm kiếm.',
        '<b>SSR:</b> đặt <code>id</code> cho resource để giá trị được cache vào HTML; <b>đừng đặt id cho dữ liệu riêng của từng người</b> nếu HTML có thể bị cache/chia sẻ.'
      ] }
    ] },
    { icon: '🔁', title: 'Zoneless và liên hệ RxJS', blocks: [
      { t: 'list', items: [
        '<b>Zoneless là mặc định từ Angular 21:</b> Angular không còn dựa vào Zone.js để đoán “khi nào có gì đó thay đổi”; thay vào đó dựa vào <b>signals</b>, sự kiện template, <code>markForCheck</code>, async pipe… để biết khi nào cần cập nhật. Kết quả: nhẹ hơn, stack trace dễ đọc, ít cập nhật thừa.',
        '<b>Hệ quả:</b> hãy đặt state hiển thị trong <b>signal</b>; nếu sửa thuộc tính thường rồi không có sự kiện nào kích hoạt, giao diện có thể <b>không cập nhật</b>.',
        '<b>RxJS interop:</b> <code>toSignal(observable$)</code> biến Observable thành signal; <code>toObservable(signal)</code> ngược lại; <code>takeUntilDestroyed()</code> để tự hủy subscribe khi component hủy.',
        '<b>Khi nào dùng cái nào?</b> Signal cho <b>state</b> và UI; RxJS cho <b>luồng sự kiện/thời gian</b> phức tạp (debounce, switchMap, WebSocket).'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> bạn sẽ gặp rất nhiều bài cũ nói về <code>NgZone</code>, <code>ChangeDetectorRef.detectChanges()</code> thủ công. Với zoneless + signals, hầu hết không còn cần.' }
    ] }
  ],
  summary: [
    'signal (ghi) – computed (dẫn xuất, cache, lười) – effect (tác dụng phụ, dùng ít) – linkedSignal (dẫn xuất nhưng ghi đè được).',
    'resource({ params, loader }) cho dữ liệu bất đồng bộ với status/value/error; debounced là thử nghiệm.',
    'Zoneless mặc định từ v21: đặt state hiển thị trong signal; RxJS ↔ signal qua toSignal/toObservable.'
  ],
  cards: [
    ['Đọc/ghi signal?', 'Đọc: x(); ghi: set()/update().'],
    ['computed khác signal?', 'Chỉ đọc, tự tính từ signal khác.'],
    ['Effect dùng khi?', 'Tác dụng phụ (log, localStorage, DOM tùy biến) – hạn chế.'],
    ['linkedSignal?', 'Tính từ nguồn nhưng ghi đè được.'],
    ['resource gồm?', 'params + loader → value/status/error.'],
    ['Observable → signal?', 'toSignal()']
  ],
  quiz: [
    { q: 'Cách đọc giá trị một signal:', o: ['count', 'count()', 'count.value', 'get(count)'], a: 1, e: 'Signal là hàm getter.' },
    { q: 'Giá trị cần tính từ signal khác nên dùng:', o: ['effect', 'computed', 'resource', 'output'], a: 1, e: 'Ưu tiên computed, effect là cuối cùng.' },
    { q: 'resource: khi params trả undefined thì:', o: ['Loader chạy với undefined', 'Loader không chạy, status idle', 'Báo lỗi', 'Reload liên tục'], a: 1, e: 'Cho phép “chưa đủ điều kiện”.' },
    { q: 'Zoneless nghĩa là:', o: ['Không dùng signals', 'Không phụ thuộc Zone.js để phát hiện thay đổi', 'Không có SSR', 'Không có router'], a: 1, e: 'Mặc định từ Angular 21.' }
  ],
  match: [
    ['signal()', 'State ghi được'],
    ['computed()', 'Giá trị dẫn xuất'],
    ['effect()', 'Tác dụng phụ'],
    ['linkedSignal()', 'Dẫn xuất nhưng ghi đè được'],
    ['resource()', 'Dữ liệu bất đồng bộ']
  ]
},

{
  n: 5,
  title: 'Template: binding, control flow, @defer, @let và sự kiện',
  intro: 'Template là HTML mở rộng của Angular. Bạn cần nắm: <b>nội suy &amp; property binding</b>, <b>sự kiện</b>, <b>hai chiều</b>, khối <b>control flow</b> (<code>@if</code>, <code>@for</code>, <code>@switch</code>), <b>@defer</b> (tải lười), biến <b>@let</b> và các thẻ <code>ng-container</code>/<code>ng-template</code>.',
  sections: [
    { icon: '🔗', title: 'Binding: nội suy, property, attribute, class, style', blocks: [
      { t: 'table', head: ['Cú pháp', 'Công dụng', 'Ví dụ'], rows: [
        ['<code>{{ expr }}</code>', 'Nội suy văn bản', '<code>&lt;p&gt;Màu: {{ theme() }}&lt;/p&gt;</code>'],
        ['<code>[prop]="expr"</code>', 'Gắn <b>property</b> DOM / input của component', '<code>&lt;button [disabled]="isInvalid()"&gt;</code>'],
        ['<code>[attr.name]="expr"</code>', 'Gắn <b>attribute</b> (SVG, aria…)', '<code>[attr.aria-label]="label()"</code>'],
        ['<code>[class.active]="cond"</code>', 'Bật/tắt một class', '<code>[class.active]="isOn()"</code>'],
        ['<code>[style.width.px]="w()"</code>', 'Gắn một thuộc tính style (kèm đơn vị)', ''],
        ['<code>(event)="handler($event)"</code>', 'Lắng nghe sự kiện', '<code>(click)="save()"</code>, <code>(keyup.enter)="add()"</code>'],
        ['<code>[(prop)]="x"</code>', 'Hai chiều (với <code>model()</code>/<code>ngModel</code>)', '<code>&lt;app-counter [(count)]="n" /&gt;</code>']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>[ ]</code> = “đẩy dữ liệu <b>vào</b>” (từ code ra HTML); <code>( )</code> = “nhận sự kiện <b>ra</b>” (từ HTML về code); <code>[( )]</code> = cả hai (“chuối trong hộp”).' },
      { t: 'list', items: [
        '<b>Phải đọc signal bằng ngoặc</b> trong template (<code>theme()</code>) để Angular theo dõi và cập nhật. Thuộc tính thường (không phải signal) có thể không cập nhật trong zoneless.',
        'Chuỗi trong binding là <b>biểu thức TypeScript/JS tập con</b> – hỗ trợ toán tử, 3 ngôi, <code>?.</code>, <code>??</code>; <b>không</b> có phép gán trong biểu thức binding, không <code>new</code>, không <code>++</code>.',
        '<b>Property vs attribute:</b> property (DOM object) là mặc định; attribute chỉ khi không có property tương ứng (SVG, <code>aria-*</code>).',
        '<b>Bảo mật:</b> Angular tự <b>làm sạch</b> HTML/URL khi bind (<code>[innerHTML]</code>); đừng bỏ qua bằng <code>bypassSecurityTrust*</code> nếu không bắt buộc.'
      ] }
    ] },
    { icon: '🔀', title: 'Control flow: @if, @for, @switch', blocks: [
      { t: 'p', x: A2(`@if (user.isLoggedIn) {
  <p>Chào {{ user.name }}</p>
} @else if (user.isGuest) {
  <p>Chào khách</p>
} @else {
  <p>Hãy đăng nhập</p>
}

@for (item of items; track item.id; let i = $index) {
  <li>{{ i }}. {{ item.name }}</li>
} @empty {
  <li>Không có mục nào</li>
}

@switch (status) {
  @case ('loading') { <spinner /> }
  @case ('error')   { <error-msg /> }
  @default          { <content /> }
}`) },
      { t: 'key', x: '<b><code>track</code> bắt buộc trong <code>@for</code>.</b> Nó cho Angular biết phần tử dữ liệu nào ứng với nút DOM nào để <b>tái dùng DOM</b> khi danh sách đổi (như <code>key</code> trong Vue). Chọn thuộc tính <b>duy nhất ổn định</b> (<code>id</code>); danh sách tĩnh dùng <code>$index</code>; <b>tránh</b> <code>track item</code> (so sánh tham chiếu) với dữ liệu thường xuyên được tạo mới.' },
      { t: 'table', head: ['Biến trong @for', 'Ý nghĩa'], rows: [
        ['<code>$index</code>', 'Chỉ số hàng hiện tại'],
        ['<code>$count</code>', 'Tổng số phần tử'],
        ['<code>$first</code>, <code>$last</code>', 'Phần tử đầu/cuối?'],
        ['<code>$even</code>, <code>$odd</code>', 'Chỉ số chẵn/lẻ?']
      ] },
      { t: 'list', items: [
        '<code>@if (expr; as alias)</code> lưu kết quả biểu thức vào biến dùng trong khối.',
        '<code>@for</code> <b>không</b> có <code>break</code>/<code>continue</code>; <code>@empty</code> là nhánh khi danh sách rỗng.',
        '<code>@switch</code> so sánh bằng <code>===</code> và <b>không</b> “rơi xuống” (fallthrough) giữa các <code>@case</code>.',
        'Cú pháp mới thay <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code> (cũ vẫn chạy nhưng không khuyến nghị cho code mới; có migration <code>ng generate @angular/core:control-flow</code>).'
      ] },
      { t: 'widget', name: 'ng-controlflow', title: 'Luyện chọn cú pháp control flow đúng cho tình huống' }
    ] },
    { icon: '💤', title: '@defer: tải lười phần giao diện nặng', blocks: [
      { t: 'p', x: A2(`@defer (on viewport) {
  <heavy-chart />                 // tải KHI vào khung nhìn
} @placeholder (minimum 500ms) {
  <div>Biểu đồ sẽ hiện ở đây</div>
} @loading (after 100ms; minimum 1s) {
  <spinner />
} @error {
  <p>Không tải được biểu đồ</p>
}`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>@defer</code> như <b>“để xe trong kho, khi nào cần mới lấy ra”</b>: gói code của component nặng được tách thành file riêng và chỉ tải khi điều kiện xảy ra, giúp trang mở nhanh hơn.' },
      { t: 'table', head: ['Trigger', 'Tải khi'], rows: [
        ['<code>on idle</code> (mặc định)', 'Trình duyệt rảnh (<code>requestIdleCallback</code>)'],
        ['<code>on viewport</code>', 'Phần tử (placeholder hoặc tham chiếu) <b>vào khung nhìn</b>'],
        ['<code>on interaction</code>', 'Người dùng <b>click/keydown</b> vào phần tử kích hoạt'],
        ['<code>on hover</code>', 'Di chuột vào / focus'],
        ['<code>on immediate</code>', 'Ngay sau khi render xong'],
        ['<code>on timer(5s)</code>', 'Sau khoảng thời gian'],
        ['<code>when điều_kiện</code>', 'Khi biểu thức thành <b>true</b> (một chiều: đã tải thì không quay lại)'],
        ['<code>prefetch on …</code>', '<b>Tải trước</b> (tải mã nhưng chưa hiển thị) theo trigger riêng']
      ] },
      { t: 'widget', name: 'ng-defer-sim', title: 'Chọn trigger và xem khi nào nội dung được tải' },
      { t: 'list', items: [
        'Chỉ phần phụ thuộc <b>chỉ dùng trong khối defer</b> và là <b>standalone</b> mới được tách; nếu cũng import ở chỗ khác ngoài khối, nó không lười.',
        '<code>@placeholder</code> (trước khi kích hoạt), <code>@loading</code> (đang tải), <code>@error</code> (thất bại); <code>minimum</code>, <code>after</code> chống “nháy”.',
        '<b>Tránh layout shift:</b> placeholder/loading nên có kích thước gần giống nội dung thật. <b>Tránh nối tầng</b> nhiều defer lồng nhau gây tải nối đuôi.',
        '<b>SSR:</b> server render <code>@placeholder</code>; kết hợp <b>incremental hydration</b> (<code>hydrate on …</code>) ở chương 12.',
        '<b>Tiếp cận (a11y):</b> với nội dung quan trọng, hãy chắc người dùng bàn phím/đọc màn hình vẫn nhận biết khi nội dung xuất hiện.'
      ] }
    ] },
    { icon: '📎', title: '@let, ng-container, ng-template, biểu thức', blocks: [
      { t: 'p', x: A2(`@let name = user().name;                         // biến cục bộ, tự cập nhật
@let greeting = 'Xin chào, ' + name;
<h1>{{ greeting }}</h1>

<ng-container> ... </ng-container>               // nhóm phần tử, KHÔNG sinh thẻ DOM
<ng-template #loading><p>Đang tải…</p></ng-template>
<ng-container *ngTemplateOutlet="loading" />     // vẽ template ở nơi khác

<input #box (keyup.enter)="add(box.value)" />   // template reference variable`) },
      { t: 'list', items: [
        '<b><code>@let</code></b>: mỗi khối khai báo <b>một</b> biến; <b>không gán lại</b> được (nhưng tự cập nhật theo biểu thức); phạm vi là view hiện tại và con, <b>không</b> được “kéo lên” (hoisted).',
        '<b><code>ng-container</code></b> để bọc nhóm (như <code>&lt;template&gt;</code> trong Vue) hoặc đặt directive mà không thêm thẻ.',
        '<b><code>ng-template</code></b> là khuôn HTML <b>chưa được vẽ</b>; dùng với <code>ngTemplateOutlet</code> hoặc truyền làm “slot có tham số”.',
        '<b>Biến tham chiếu <code>#box</code></b>: tham chiếu phần tử/component/directive trong template.',
        '<b>Khoảng trắng:</b> Angular mặc định rút gọn khoảng trắng thừa (<code>preserveWhitespaces</code> tắt).'
      ] }
    ] }
  ],
  summary: [
    'Binding: {{ }}, [prop], [attr.x], [class.x], [style.x], (event), [(model)]; luôn gọi signal bằng ().',
    'Control flow @if/@for(track bắt buộc)/@switch thay cho *ngIf/*ngFor/*ngSwitch.',
    '@defer tải lười theo trigger (idle, viewport, interaction, hover, immediate, timer, when); @let, ng-container, ng-template hỗ trợ cấu trúc.'
  ],
  cards: [
    ['Binding vào property?', '[prop]="expr"'],
    ['Nhận sự kiện?', '(event)="handler($event)"'],
    ['Vì sao @for cần track?', 'Để tái dùng DOM đúng, hiệu năng.'],
    ['@defer mặc định kích hoạt khi?', 'on idle.'],
    ['@let khác let JS?', 'Không gán lại được, tự cập nhật.'],
    ['Nhóm phần tử không thêm thẻ?', 'ng-container']
  ],
  quiz: [
    { q: 'Trong @for, thuộc tính bắt buộc là:', o: ['key', 'track', 'id', 'index'], a: 1, e: 'track giúp tái dùng DOM.' },
    { q: 'Cách bind class có điều kiện:', o: ['[class.active]="isOn()"', '(class)="active"', '{{ class }}', '@class'], a: 0, e: 'class binding.' },
    { q: 'Muốn tải phần giao diện nặng khi cuộn tới nó:', o: ['@defer (on viewport)', '@if', '@for', '@let'], a: 0, e: 'Trigger viewport.' },
    { q: 'ng-container dùng để:', o: ['Nhóm phần tử mà không tạo thẻ DOM', 'Gọi API', 'Khai báo route', 'Định nghĩa service'], a: 0, e: 'Phần tử “vô hình”.' }
  ],
  match: [
    ['[prop]', 'Đẩy dữ liệu vào'],
    ['(event)', 'Nhận sự kiện'],
    ['@defer', 'Tải lười'],
    ['@let', 'Biến cục bộ trong template'],
    ['track', 'Định danh phần tử trong @for']
  ]
},

{
  n: 6,
  title: 'Directive và Pipe',
  intro: 'Component là directive “có template”. Ngoài ra còn <b>attribute directive</b> (đổi giao diện/hành vi phần tử), <b>structural directive</b> (đổi cấu trúc DOM), <b>directive composition</b> (gắn directive cho host) và <b>pipe</b> (biến đổi giá trị hiển thị ngay trong template).',
  sections: [
    { icon: '🎛️', title: 'Attribute directive', blocks: [
      { t: 'p', x: A2(`import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'on(true)',
    '(mouseleave)': 'on(false)',
    '[style.backgroundColor]': 'active ? color() : null',
  },
})
export class Highlight {
  color = input('yellow', { alias: 'appHighlight' });
  active = false;
  on(v: boolean) { this.active = v; }
}
// Dùng: <p appHighlight="orange">Rê chuột vào tôi</p>   (imports: [Highlight])`) },
      { t: 'list', items: [
        'Directive là lớp có <code>@Directive({ selector })</code>, <b>không có template</b>; gắn vào phần tử qua selector thuộc tính.',
        'Có <b>input/output</b> như component; cấu hình host bằng <code>host</code>; dùng <code>inject(ElementRef)</code> để chạm phần tử.',
        'Hợp để đóng gói hành vi dùng lại: tooltip, kéo thả, theo dõi click ngoài…'
      ] }
    ] },
    { icon: '🧱', title: 'Structural directive và Directive Composition', blocks: [
      { t: 'list', items: [
        '<b>Structural directive</b> thêm/bớt/lặp phần tử trong DOM (cũ: <code>*ngIf</code>, <code>*ngFor</code>). Dự án mới dùng <b>control flow</b> <code>@if/@for</code>; vẫn có thể tự viết structural directive với <code>TemplateRef</code> + <code>ViewContainerRef</code> (cú pháp <code>*appName</code>).',
        '<b>Directive composition API:</b> trong <code>@Component</code>/<code>@Directive</code> dùng <code>hostDirectives: [Highlight]</code> để <b>áp directive lên host</b> mà không cần người dùng viết thuộc tính; có thể <b>lộ</b> input/output của directive qua <code>inputs</code>/<code>outputs</code>.',
        'Lợi ích: ghép hành vi như “lego”, tránh kế thừa lớp (inheritance) lòng vòng.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> trong thực tế, bạn dùng directive có sẵn (<code>NgClass</code>, <code>NgStyle</code>, <code>NgOptimizedImage</code>, <code>RouterLink</code>…) nhiều hơn tự viết. Tự viết khi có hành vi lặp lại ở nhiều component.' }
    ] },
    { icon: '🪄', title: 'Pipe: biến đổi giá trị trong template', blocks: [
      { t: 'p', x: A2(`<p>{{ birthday | date:'dd/MM/yyyy' }}</p>
<p>{{ price | currency:'VND' }}</p>
<p>{{ name | uppercase | slice:0:5 }}</p>        // nối nhiều pipe
<p>{{ user$ | async }}</p>                           // async: tự subscribe Observable/Promise`) },
      { t: 'table', head: ['Pipe dựng sẵn', 'Dùng để'], rows: [
        ['<code>date</code>', 'Định dạng ngày giờ (theo locale)'],
        ['<code>currency</code>, <code>number</code>, <code>percent</code>', 'Định dạng tiền tệ/số/phần trăm'],
        ['<code>uppercase</code>, <code>lowercase</code>, <code>titlecase</code>', 'Đổi chữ hoa/thường'],
        ['<code>slice</code>, <code>json</code>, <code>keyvalue</code>', 'Cắt mảng/chuỗi, in JSON, lặp object'],
        ['<code>async</code>', 'Tự subscribe/hủy Observable hoặc Promise; hợp cả zoneless'],
        ['<code>i18nPlural</code>, <code>i18nSelect</code>', 'Quốc tế hóa số nhiều/lựa chọn']
      ] },
      { t: 'p', x: A2(`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, max = 20): string {
    return value.length > max ? value.slice(0, max) + '…' : value;
  }
}
// Dùng: {{ title | truncate:30 }}   (thêm TruncatePipe vào imports)`) },
      { t: 'list', items: [
        '<b>Tham số pipe</b> sau dấu hai chấm: <code>date:\'short\'</code>. Nối nhiều pipe bằng <code>|</code> (thực hiện từ trái sang phải).',
        '<b>Pure pipe (mặc định):</b> chỉ chạy lại khi <b>đầu vào đổi tham chiếu/giá trị</b> → rẻ. <b>Impure</b> (<code>pure: false</code>) chạy mỗi lần kiểm tra → tốn; tránh trừ khi cần.',
        '<b>Thứ tự ưu tiên:</b> toán tử 3 ngôi bao pipe cần ngoặc: <code>(cond ? a : b) | pipe</code>.',
        'Với tính toán phức tạp, ưu tiên <code>computed()</code> trong lớp thay vì pipe.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> pipe như <b>kính lọc</b> trước màn hình: dữ liệu gốc không đổi, chỉ cách hiển thị bị “lọc” (ngày đẹp hơn, tiền có ký hiệu).' }
    ] }
  ],
  summary: [
    'Attribute directive đóng gói hành vi trên phần tử (selector thuộc tính, host, input); structural directive thay bằng @if/@for cho code mới.',
    'hostDirectives (composition) áp directive lên host và lộ input/output.',
    'Pipe biến đổi hiển thị (date, currency, async…); pure mặc định, tự viết bằng @Pipe + PipeTransform.'
  ],
  cards: [
    ['Directive khác component?', 'Không có template.'],
    ['Gắn directive lên host?', 'hostDirectives.'],
    ['Pipe async làm gì?', 'Tự subscribe/hủy Observable/Promise.'],
    ['Pure pipe?', 'Chỉ chạy lại khi đầu vào đổi.'],
    ['Pipe nhiều tham số?', 'name:arg1:arg2'],
    ['Tính toán nặng nên?', 'Dùng computed thay pipe.']
  ],
  quiz: [
    { q: 'Điểm khác giữa directive và component:', o: ['Directive không có template', 'Directive chạy ở server', 'Component không có selector', 'Không khác'], a: 0, e: 'Component là directive có template.' },
    { q: 'Pipe pure chạy lại khi:', o: ['Mỗi chu kỳ kiểm tra', 'Đầu vào thay đổi', 'Không bao giờ', 'Khi có HTTP'], a: 1, e: 'Rẻ hơn impure.' },
    { q: 'Cách tự viết pipe:', o: ['@Pipe + PipeTransform', '@Directive', '@Service', '@Input'], a: 0, e: 'Cần thêm vào imports khi dùng.' },
    { q: 'hostDirectives dùng để:', o: ['Áp directive lên host element của component/directive', 'Gọi API', 'Chia sẻ state', 'Định tuyến'], a: 0, e: 'Directive composition.' }
  ],
  match: [
    ['@Directive', 'Hành vi gắn vào phần tử'],
    ['@Pipe', 'Biến đổi giá trị trong template'],
    ['hostDirectives', 'Ghép directive vào host'],
    ['async pipe', 'Subscribe Observable trong template'],
    ['PipeTransform', 'Interface của pipe']
  ]
}
);
