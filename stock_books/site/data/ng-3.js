// Angular – Chương 7–9: vòng đời & change detection, dependency injection, forms.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.angularguide = BOOK_DATA.angularguide || { chapters: [] };
const A3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.angularguide.chapters.push(

{
  n: 7,
  title: 'Vòng đời component và change detection (OnPush, zoneless)',
  intro: 'Angular tạo, cập nhật rồi hủy component theo một <b>vòng đời</b> có các “móc” (hook) để bạn chen code vào. Song song là <b>change detection</b>: cơ chế Angular quyết định khi nào và component nào cần được kiểm tra/vẽ lại. Từ v21 mặc định <b>zoneless</b>, từ v22 mặc định <b>OnPush</b> — hiểu điều này giúp bạn tránh lỗi “giao diện không cập nhật”.',
  sections: [
    { icon: '🔄', title: 'Các hook vòng đời', blocks: [
      { t: 'table', head: ['Hook', 'Chạy khi', 'Dùng để'], rows: [
        ['<code>constructor</code>', 'Tạo lớp', 'Khởi tạo, <code>inject()</code>, tạo <code>effect</code> (chưa có input)'],
        ['<code>ngOnChanges</code>', 'Input (kiểu cũ) đổi', 'Phản ứng khi input thay đổi (với signal input hãy dùng computed/effect)'],
        ['<code>ngOnInit</code>', 'Một lần, sau input đầu tiên', 'Khởi tạo logic cần input, gọi dữ liệu'],
        ['<code>ngDoCheck</code>', 'Mỗi lần kiểm tra', 'Hiếm khi cần'],
        ['<code>ngAfterContentInit/Checked</code>', 'Nội dung chiếu (<code>ng-content</code>) đã khởi tạo/kiểm tra', 'Làm việc với <code>contentChild</code>'],
        ['<code>ngAfterViewInit/Checked</code>', 'View của component (và con) đã khởi tạo/kiểm tra', 'Làm việc với <code>viewChild</code>'],
        ['<code>ngOnDestroy</code>', 'Trước khi hủy', '<b>Dọn dẹp</b>: timer, listener, subscription'],
        ['<code>afterNextRender</code> / <code>afterEveryRender</code>', 'Sau khi Angular <b>vẽ DOM xong</b> (chỉ ở trình duyệt)', 'Đọc/ghi DOM, khởi tạo thư viện ngoài, đo kích thước']
      ] },
      { t: 'widget', name: 'ng-lifecycle', title: 'Thứ tự hook khi tạo cha–con, cập nhật và hủy' },
      { t: 'list', items: [
        '<b>Thứ tự lúc khởi tạo:</b> cha constructor → cha <code>ngOnInit</code> → … → con constructor → con <code>ngOnInit</code> → con <code>ngAfterViewInit</code> → cha <code>ngAfterViewInit</code> (con xong trước cha).',
        '<b>Dọn dẹp hiện đại:</b> thay vì <code>ngOnDestroy</code> dài dòng, dùng <code>inject(DestroyRef).onDestroy(() =&gt; ...)</code> hoặc <code>takeUntilDestroyed()</code> để gắn việc dọn ngay cạnh nơi tạo ra tài nguyên.',
        '<b>afterNextRender/afterEveryRender</b> <b>không chạy ở server (SSR)</b> nên rất hợp cho code chỉ có ở trình duyệt (<code>window</code>, đo DOM). Chúng có các “pha” (<code>earlyRead</code>, <code>write</code>, <code>mixedReadWrite</code>, <code>read</code>) để gom đọc/ghi DOM tránh layout thrashing.',
        '<b>Đừng đụng DOM trực tiếp</b> trong constructor/<code>ngOnInit</code>: DOM chưa sẵn sàng.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> hook như <b>các mốc trong ngày của một nhân viên</b>: được tuyển (constructor), nhận việc đầu tiên (ngOnInit), vào chỗ ngồi xong (afterNextRender), nghỉ việc (ngOnDestroy – nhớ trả đồ cho công ty!).' }
    ] },
    { icon: '🔍', title: 'Change detection là gì?', blocks: [
      { t: 'p', x: 'Khi dữ liệu đổi, Angular phải “kiểm tra” cây component để cập nhật DOM. Cách nó <b>biết khi nào kiểm tra</b> và <b>kiểm tra những ai</b> chính là change detection.' },
      { t: 'table', head: ['Chiến lược', 'Kiểm tra component khi'], rows: [
        ['<b>OnPush</b> (mặc định từ v22)', 'Chỉ khi: (1) <b>input đổi</b> (tham chiếu), (2) <b>sự kiện</b> xảy ra trong component/con của nó, (3) <b>signal</b> được đọc trong template đổi, (4) <code>async</code> pipe phát giá trị mới, hoặc (5) gọi thủ công <code>markForCheck()</code>'],
        ['<b>Eager</b> (trước đây tên <code>Default</code>)', 'Mọi lần có thay đổi bất kỳ trong ứng dụng: kiểm tra <b>cả cây</b> (nếu con không phải OnPush)']
      ] },
      { t: 'widget', name: 'ng-cd-sim', title: 'Mô phỏng: một sự kiện kích hoạt kiểm tra những component nào (OnPush vs Eager)' },
      { t: 'key', x: '<b>Ý nghĩa thực tế:</b> với <b>OnPush + signals</b> Angular chỉ cập nhật đúng component có signal đổi → nhanh và dễ dự đoán. Quy tắc vàng: <b>giữ state hiển thị trong signal</b>, truyền xuống qua <code>input()</code>, và <b>đừng sửa tại chỗ</b> object/mảng (hãy tạo giá trị mới).' },
      { t: 'list', items: [
        '<b>Zoneless (mặc định từ v21):</b> không còn Zone.js “vá” mọi API bất đồng bộ để đoán thay đổi. Angular được báo bởi signals, sự kiện template, <code>markForCheck</code>, <code>async</code> pipe, và các API của framework.',
        '<b>Dấu hiệu cần chú ý:</b> bạn đổi một thuộc tính thường trong <code>setTimeout</code>/<code>fetch</code> rồi giao diện không đổi → chuyển thành <b>signal</b> (hoặc gọi <code>markForCheck()</code>).',
        '<b>Bỏ phụ thuộc NgZone:</b> loại bỏ <code>NgZone.onMicrotaskEmpty/onStable/onUnstable</code>, <code>NgZone.isStable</code> luôn <code>true</code>; test dùng <code>fixture.whenStable()</code>.',
        '<b>Tuỳ chọn cũ vẫn có:</b> <code>changeDetection: ChangeDetectionStrategy.Eager</code> cho component cần chế độ cũ (ví dụ thư viện bọc nội dung người dùng chưa tương thích OnPush).',
        '<b>Hiệu năng runtime:</b> bỏ qua cây con bằng OnPush, tránh tính toán chậm trong template (dùng <code>computed</code>), tránh “zone pollution” (chạy tác vụ lặp liên tục gây kiểm tra thừa).'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> mô hình tư duy mới: <b>“Signal đổi → chỉ chỗ đọc signal đó được vẽ lại”</b>. Các lỗi kinh điển cũ như <code>ExpressionChangedAfterItHasBeenChecked</code> ít xuất hiện hơn nếu bạn tránh dùng <code>effect</code> để cập nhật state.' }
    ] }
  ],
  summary: [
    'Hook chính: ngOnInit (khởi tạo), afterNextRender (DOM sẵn sàng, chỉ ở trình duyệt), ngOnDestroy/DestroyRef (dọn dẹp).',
    'OnPush mặc định (v22): kiểm tra khi input đổi, có sự kiện, signal đổi, async pipe, markForCheck; Eager kiểm tra cả cây.',
    'Zoneless (v21+): đặt state trong signal; đổi thuộc tính thường không đủ để cập nhật giao diện.'
  ],
  cards: [
    ['ngOnInit chạy khi?', 'Một lần sau khi input đầu tiên được set.'],
    ['Code chỉ chạy ở trình duyệt?', 'afterNextRender / afterEveryRender.'],
    ['Dọn dẹp?', 'ngOnDestroy / DestroyRef.onDestroy.'],
    ['OnPush kiểm tra khi?', 'Input đổi, có sự kiện, signal đổi, async pipe, markForCheck.'],
    ['Eager?', 'Kiểm tra cả cây (tên mới của Default).'],
    ['Giao diện không cập nhật (zoneless)?', 'Dùng signal hoặc markForCheck().']
  ],
  quiz: [
    { q: 'Hook thích hợp đọc/ghi DOM sau khi render, chỉ ở trình duyệt:', o: ['constructor', 'afterNextRender', 'ngOnDestroy', 'ngDoCheck'], a: 1, e: 'Không chạy ở server.' },
    { q: 'Từ Angular 22 chiến lược change detection mặc định là:', o: ['Eager', 'OnPush', 'Manual', 'Zone'], a: 1, e: 'Eager là tên mới của Default.' },
    { q: 'Trong zoneless, đổi thuộc tính thường trong setTimeout rồi giao diện không đổi. Cách sửa:', o: ['Dùng signal', 'Dùng setInterval', 'Bật Zone.js', 'Xóa template'], a: 0, e: 'Hoặc markForCheck().' },
    { q: 'Thứ tự ngAfterViewInit:', o: ['Cha trước con', 'Con trước cha', 'Ngẫu nhiên', 'Cùng lúc'], a: 1, e: 'Con hoàn tất view trước cha.' }
  ],
  match: [
    ['ngOnInit', 'Khởi tạo sau input đầu tiên'],
    ['afterNextRender', 'Sau khi DOM được vẽ'],
    ['OnPush', 'Kiểm tra theo tín hiệu'],
    ['Eager', 'Kiểm tra cả cây'],
    ['DestroyRef', 'Đăng ký dọn dẹp']
  ]
},

{
  n: 8,
  title: 'Dependency Injection và service',
  intro: 'Khi nhiều component cần dùng chung logic hay dữ liệu (gọi API, đăng nhập, giỏ hàng) ta đặt vào <b>service</b> và để Angular <b>“tiêm”</b> (inject) vào nơi cần. Đó là <b>Dependency Injection (DI)</b>: bạn không tự <code>new</code> đối tượng; bạn <b>xin</b> nó từ hệ thống và Angular lo việc tạo, chia sẻ, thay thế khi test.',
  sections: [
    { icon: '🍽️', title: 'Service và inject()', blocks: [
      { t: 'p', x: A3(`import { Service, inject, Component } from '@angular/core';

@Service()
export class Calculator {
  add(x: number, y: number) { return x + y; }
}

@Component({ selector: 'app-receipt', template: '<h1>Tổng: {{ total }}</h1>' })
export class Receipt {
  private calculator = inject(Calculator);     // xin service từ DI
  total = this.calculator.add(50, 25);
}`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> DI như <b>gọi món ở nhà hàng</b>: bạn chỉ nói “cho tôi <code>Calculator</code>”, bếp (Angular) lo nguyên liệu, nấu, và <b>dùng chung một nồi</b> cho cả quán nếu đã có. Khi test, bạn đổi “đầu bếp” thành bản giả mà món vẫn gọi y như cũ.' },
      { t: 'table', head: ['', '<code>@Service()</code>', '<code>@Injectable()</code>'], rows: [
        ['Bản chất', 'Cách viết <b>gọn hiện đại</b> của <code>@Injectable({ providedIn: \'root\' })</code>', 'Decorator truyền thống, linh hoạt'],
        ['Singleton gốc ngầm định', '✅', '❌ cần <code>providedIn: \'root\'</code>'],
        ['<code>inject()</code>', '✅', '✅'],
        ['DI qua constructor', '❌', '✅'],
        ['<code>useClass/useValue/useExisting/useFactory</code>', '❌ (dùng <code>factory</code>)', '✅'],
        ['Phạm vi khác root (platform…)', '❌', '✅']
      ] },
      { t: 'list', items: [
        '<b>Tạo bằng CLI:</b> <code>ng generate service TÊN</code>.',
        '<b>Provide ở root mặc định:</b> một <b>singleton</b> cho cả ứng dụng, có sẵn ở mọi nơi, và <b>tree-shakable</b> (không dùng thì bị loại khỏi bundle).',
        '<b>Khi nào chọn cái nào:</b> service singleton mới dùng <code>inject()</code> → <code>@Service</code>; cần provider nâng cao/phạm vi khác → <code>@Injectable</code>.',
        '<b>Factory:</b> <code>@Service({ factory: () =&gt; ... })</code> để kiểm soát cách tạo (chạy trong injection context nên dùng được <code>inject()</code>).'
      ] }
    ] },
    { icon: '🏗️', title: 'Provider và phạm vi (scope)', blocks: [
      { t: 'p', x: A3(`// 1) Toàn ứng dụng: app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: LOCALE, useValue: 'vi' }],
};

// 2) Riêng một component (mỗi instance component có service riêng)
@Component({ selector: 'cart-panel', template: '...', providers: [CartState] })
export class CartPanel { cart = inject(CartState); }`) },
      { t: 'table', head: ['Cấp', 'Khai báo ở', 'Vòng đời / chia sẻ'], rows: [
        ['<b>Root (ứng dụng)</b>', '<code>@Service()</code> / <code>providedIn: \'root\'</code> / <code>ApplicationConfig.providers</code>', '1 instance cho cả app'],
        ['<b>Route</b>', '<code>providers</code> trong định nghĩa route', 'Chia sẻ trong nhánh route đó'],
        ['<b>Component/Directive</b>', '<code>providers</code> trong decorator', '<b>Mỗi instance component một bản</b>; bị hủy cùng component'],
        ['<b>Environment injector</b>', 'Tạo bằng code', 'Cho vùng lazy-load/động']
      ] },
      { t: 'widget', name: 'ng-di-tree', title: 'Thử: service ở root (dùng chung) và ở component (mỗi instance một bản)' },
      { t: 'list', items: [
        '<b>Cây injector phân cấp:</b> Angular tìm provider từ <b>component hiện tại đi lên</b> qua cha, rồi tới route/environment, cuối cùng root. Provider gần hơn <b>che</b> provider xa hơn.',
        '<b>Bộ chỉnh (resolution modifiers)</b> cho <code>inject(Token, options)</code>: <code>optional</code> (không có thì <code>null</code>), <code>self</code>, <code>skipSelf</code>, <code>host</code>.',
        '<b>Multi provider:</b> <code>multi: true</code> để nhiều giá trị chung một token (vd danh sách interceptor/validator).'
      ] }
    ] },
    { icon: '🎫', title: 'Token cho giá trị không phải lớp', blocks: [
      { t: 'p', x: A3(`import { InjectionToken, inject } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL', {
  providedIn: 'root',
  factory: () => 'https://api.example.com',   // giá trị mặc định
});

// Dùng
const url = inject(API_URL);

// Ghi đè khi cần (ví dụ môi trường test)
providers: [{ provide: API_URL, useValue: 'http://localhost:3000' }]`) },
      { t: 'list', items: [
        '<b><code>InjectionToken</code></b> dùng cho cấu hình, chuỗi, hàm, object… không có “lớp” để làm khóa.',
        'Hàm <code>inject()</code> chỉ gọi được trong <b>injection context</b>: constructor, initializer thuộc tính lớp, hàm factory của provider, hàm chạy qua <code>runInInjectionContext()</code>.',
        '<b>Lazy-loaded service:</b> service nặng nên tách bằng <code>@defer</code> hoặc import động để không nằm trong bundle chính.',
        '<b>Debug DI:</b> lỗi <code>NullInjectorError</code> = chưa có provider ở nhánh injector đó; kiểm tra nơi khai báo và phạm vi.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> mẫu hay gặp là <b>service giữ state bằng signal</b> (<code>items = signal([])</code>, <code>total = computed(...)</code>) + phương thức cập nhật; component chỉ <code>inject()</code> và đọc signal — thay cho NgRx/Redux ở ứng dụng vừa và nhỏ.' },
      { t: 'widget', name: 'ng-pick', title: 'Luyện chọn đúng công cụ Angular' }
    ] }
  ],
  summary: [
    'Service chia sẻ logic/state; @Service() = singleton root gọn; @Injectable cho provider nâng cao; lấy bằng inject().',
    'Provider theo phạm vi: root (một bản), route, component (mỗi instance một bản); tìm từ gần lên xa.',
    'InjectionToken cho giá trị không phải lớp; inject chỉ trong injection context.'
  ],
  cards: [
    ['DI là gì?', 'Xin đối tượng từ Angular thay vì tự new.'],
    ['Lấy service?', 'inject(Service)'],
    ['@Service so với @Injectable?', 'Gọn hơn nhưng ít tùy chọn.'],
    ['Service riêng từng component?', 'providers trong @Component.'],
    ['Token cho chuỗi/config?', 'InjectionToken'],
    ['NullInjectorError?', 'Chưa có provider ở phạm vi đó.']
  ],
  quiz: [
    { q: 'Service mặc định tạo bởi @Service() có phạm vi:', o: ['Root: một singleton cho cả app', 'Mỗi component một bản', 'Mỗi route một bản', 'Không có'], a: 0, e: 'Tree-shakable singleton.' },
    { q: 'Mỗi instance component có service riêng khi:', o: ['Khai báo trong providers của component', 'Dùng providedIn root', 'Dùng InjectionToken', 'Dùng async pipe'], a: 0, e: 'Provider phạm vi component.' },
    { q: 'inject() chỉ dùng được trong:', o: ['Injection context', 'Mọi nơi', 'Template', 'CSS'], a: 0, e: 'Constructor/initializer/factory…' },
    { q: 'Cần inject một chuỗi cấu hình, dùng:', o: ['InjectionToken', '@Pipe', 'viewChild', 'output'], a: 0, e: 'Token làm khóa.' }
  ],
  match: [
    ['@Service()', 'Singleton gốc, gọn'],
    ['inject()', 'Lấy dependency'],
    ['providers', 'Khai báo nơi cung cấp'],
    ['InjectionToken', 'Khóa cho giá trị phi lớp'],
    ['NullInjectorError', 'Thiếu provider']
  ]
},

{
  n: 9,
  title: 'Forms: Signal Forms (stable v22), Reactive và Template-driven',
  intro: 'Angular có ba hệ thống form. <b>Signal Forms</b> (mới, stable ở v22, dựa trên signals) là lựa chọn cho ứng dụng mới; <b>Reactive forms</b> mạnh và phổ biến trong dự án hiện có; <b>Template-driven forms</b> đơn giản cho form nhỏ. Chương này tập trung Signal Forms và so sánh nhanh với hai loại còn lại.',
  sections: [
    { icon: '🧭', title: 'Chọn hệ thống form nào?', blocks: [
      { t: 'table', head: ['', 'Signal Forms', 'Reactive forms', 'Template-driven'], rows: [
        ['Nguồn sự thật (source of truth)', '<b>Model dạng signal</b> của bạn', 'Form model (<code>FormGroup</code>/<code>FormControl</code>) trong lớp', 'Template (<code>ngModel</code>)'],
        ['Hợp khi', '<b>Ứng dụng mới</b>, dùng signals', 'Dự án có sẵn, form phức tạp/cần kiểm soát sâu', 'Form nhỏ, đơn giản'],
        ['Kiểu dữ liệu', 'Type-safe theo model', 'Typed forms', 'Yếu hơn'],
        ['Cú pháp bind', '<code>[formField]="form.email"</code>', '<code>[formControl]</code>/<code>formControlName</code>', '<code>[(ngModel)]</code>'],
        ['Validation', 'Schema tập trung (<code>required()</code>, <code>email()</code>…)', 'Validator gắn vào control', 'Directive trong template']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> Reactive forms <b>vẫn là lựa chọn vững</b> cho dự án có sẵn — không cần vội đổi. Có hướng dẫn <b>migration</b> và so sánh chính thức khi bạn muốn chuyển sang Signal Forms.' }
    ] },
    { icon: '📝', title: 'Signal Forms: form đầu tiên', blocks: [
      { t: 'p', x: A3(`import { Component, signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  template: '<form novalidate><input type="email" [formField]="loginForm.email" /> <input type="password" [formField]="loginForm.password" /></form>',
})
export class Login {
  loginModel = signal({ email: '', password: '' });       // 1) model là signal

  loginForm = form(this.loginModel, (path) => {           // 2) form() + schema validation
    required(path.email, { message: 'Cần nhập email' });
    email(path.email, { message: 'Email không hợp lệ' });
    required(path.password, { message: 'Cần nhập mật khẩu' });
  });
}`) },
      { t: 'steps', items: [
        '<b>Model:</b> một <code>signal()</code> chứa dữ liệu form.',
        '<b><code>form(model, schema?)</code></b> tạo <b>FieldTree</b>: cấu trúc phản chiếu model (<code>loginForm.email</code> cũng là một FieldTree).',
        '<b>Bind input</b> bằng directive <code>[formField]</code> (nhớ <code>imports: [FormField]</code>) – đồng bộ hai chiều tự động, và gắn cả <code>required/disabled/readonly</code> lên input.',
        '<b>Đọc state:</b> gọi node như hàm: <code>loginForm.email()</code> trả về <b>state</b> chứa các signal.',
        '<b>Ghi giá trị:</b> <code>loginForm.email().value.set(\'a@b.c\')</code> (cập nhật cả FieldTree lẫn model).'
      ] },
      { t: 'widget', name: 'ng-form-sim', title: 'Mô phỏng form đăng nhập: model, validation và field state' }
    ] },
    { icon: '✅', title: 'Validation và field state', blocks: [
      { t: 'table', head: ['Quy tắc dựng sẵn', 'Ý nghĩa'], rows: [
        ['<code>required()</code>', 'Bắt buộc. “Rỗng” gồm <code>null</code>, <code>undefined</code>, <code>\'\'</code>, <code>false</code>, <code>NaN</code> (mảng rỗng <b>không</b> tính là rỗng → dùng <code>minLength</code>)'],
        ['<code>email()</code>', 'Định dạng email'],
        ['<code>min()</code>/<code>max()</code>, <code>minDate()</code>/<code>maxDate()</code>', 'Giới hạn số/ngày'],
        ['<code>minLength()</code>/<code>maxLength()</code>', 'Độ dài chuỗi/mảng'],
        ['<code>pattern()</code>', 'Khớp regex'],
        ['<code>validate()</code> / <code>validateTree()</code>', 'Quy tắc tự viết (trả lỗi <code>{kind, message}</code> hoặc <code>null</code>)'],
        ['<code>validateHttp()</code>', 'Validation bất đồng bộ qua HTTP (chạy sau khi các quy tắc đồng bộ qua)']
      ] },
      { t: 'p', x: A3(`validate(path.website, ({ value }) => {
  if (!value().startsWith('https://')) {
    return { kind: 'https', message: 'URL phải bắt đầu bằng https://' };
  }
  return null;     // hợp lệ
});
// Điều kiện: required(path.promo, { when: ({ valueOf }) => valueOf(path.applyDiscount) })`) },
      { t: 'table', head: ['Field state (signal)', 'Ý nghĩa'], rows: [
        ['<code>value()</code>', 'Giá trị hiện tại'],
        ['<code>valid()</code> / <code>invalid()</code> / <code>pending()</code>', 'Hợp lệ / không hợp lệ / đang kiểm tra bất đồng bộ'],
        ['<code>errors()</code>', 'Mảng lỗi <code>{ kind, message? }</code>'],
        ['<code>touched()</code>', 'Người dùng đã focus rồi rời đi'],
        ['<code>dirty()</code>', 'Người dùng đã sửa giá trị'],
        ['<code>disabled()</code> / <code>hidden()</code> / <code>readonly()</code>', 'Tình trạng khả dụng (cấu hình bằng các rule cùng tên)']
      ] },
      { t: 'p', x: A3(`@if (loginForm.email().touched() && loginForm.email().invalid()) {
  <ul>
    @for (error of loginForm.email().errors(); track error) {
      <li>{{ error.message }}</li>
    }
  </ul>
}`) },
      { t: 'list', items: [
        '<b>Validation chạy trong Angular</b>, không dùng constraint validation của trình duyệt (đừng dựa vào <code>:invalid</code> CSS hay <code>input.validity</code>); hãy bind class theo field state.',
        '<b>Thứ tự:</b> đồng bộ chạy trước; bất đồng bộ chỉ chạy khi mọi rule đồng bộ qua. <b>Không dừng sớm</b>: nếu có cả <code>required</code> và <code>email</code> thì có thể nhận nhiều lỗi.',
        '<b>Field ẩn/disabled bỏ qua validation.</b> Rule logic: <code>disabled(path.x, ctx =&gt; ...)</code>, <code>hidden()</code>, <code>readonly()</code>, <code>debounce()</code> để trì hoãn cập nhật.',
        '<b>Cross-field:</b> validate nhiều trường (xác nhận mật khẩu) bằng <code>validate()</code> đọc <code>valueOf(path.khác)</code>; <b>mảng</b>: áp rule cho từng phần tử.'
      ] }
    ] },
    { icon: '📨', title: 'Gửi form (submission)', blocks: [
      { t: 'p', x: A3(`import { form, FormField, FormRoot, required } from '@angular/forms/signals';

contactForm = form(this.contactModel, (path) => { required(path.message); }, {
  submission: {
    action: async (f) => {                          // chạy khi form hợp lệ
      await this.api.send(f().value());             // nếu trả lỗi → gắn vào field tương ứng
    },
  },
});
// Template: <form [formRoot]="contactForm"> ... <button>Gửi</button> </form>   (imports: [FormField, FormRoot])`) },
      { t: 'steps', items: [
        '<code>submit()</code> đánh dấu mọi field tương tác là <b>touched</b> (để hiện lỗi).',
        'Kiểm tra validation; <b>có lỗi thì dừng</b>, không chạy action.',
        'Chạy <code>action</code>; trong lúc đó <code>submitting()</code> = <code>true</code> (chống gửi trùng).',
        'Lỗi do action trả về được <b>gắn vào đúng field</b>; không lỗi → thành công. Trả về <code>Promise&lt;boolean&gt;</code>.'
      ] },
      { t: 'list', items: [
        'Directive <b><code>FormRoot</code></b> (<code>[formRoot]</code>) trên <code>&lt;form&gt;</code> tự đặt <code>novalidate</code>, chặn hành vi mặc định và gọi <code>submit()</code>.',
        '<b>Custom control:</b> component tự viết có thể làm control cho <code>[formField]</code> (input <code>value</code> kiểu <code>model()</code> + trạng thái).',
        '<b>Form động từ JSON, schema tái dùng, test form</b>: có guide riêng trong mục Signal Forms.'
      ] }
    ] },
    { icon: '📚', title: 'Reactive và Template-driven (tham khảo)', blocks: [
      { t: 'p', x: A3(`// Reactive forms
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
form = inject(FormBuilder).nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
});
// <input [formControl]="form.controls.email">  hoặc <form [formGroup]="form"> <input formControlName="email">

// Template-driven (FormsModule)
// <input [(ngModel)]="firstName" name="firstName" required>`) },
      { t: 'list', items: [
        '<b>Reactive forms:</b> bạn định nghĩa <code>FormGroup/FormControl</code> trong lớp; điều khiển rõ ràng, dễ test; <b>typed forms</b> cho kiểu chặt; dynamic forms bằng <code>FormArray</code>.',
        '<b>Template-driven:</b> <code>NgModel</code> tự tạo <code>FormControl</code>; ít code nhưng khó kiểm soát và test khi phức tạp.',
        'Cả hai nằm trong <code>@angular/forms</code> (cần <code>ReactiveFormsModule</code>/<code>FormsModule</code> trong <code>imports</code>).'
      ] }
    ] }
  ],
  summary: [
    'Signal Forms: model signal → form(model, schema) → [formField]; validation tập trung trong schema; đọc state qua signal (valid, errors, touched, dirty…).',
    'Gửi form với submission.action + [formRoot]: touch field, kiểm tra, chạy action, gắn lỗi trả về, submitting() chống gửi trùng.',
    'Reactive/Template-driven vẫn dùng tốt cho dự án có sẵn; chọn Signal Forms cho ứng dụng mới.'
  ],
  cards: [
    ['Bước đầu Signal Forms?', 'signal model → form(model) → [formField].'],
    ['Đọc state field?', 'form.email() → value(), valid(), errors()…'],
    ['Quy tắc dựng sẵn?', 'required, email, min/max, minLength/maxLength, pattern.'],
    ['Validation tự viết?', 'validate(path, ctx => lỗi hoặc null).'],
    ['Gửi form?', 'submission.action + [formRoot].'],
    ['required coi là rỗng?', 'null, undefined, "", false, NaN.']
  ],
  quiz: [
    { q: 'Directive để bind input với Signal Forms:', o: ['[formField]', '[ngModel]', '[formGroup]', '[model]'], a: 0, e: 'Cần imports: [FormField].' },
    { q: 'Signal Forms validation chạy ở đâu?', o: ['Trong Angular (không dùng validation native của trình duyệt)', 'Chỉ ở server', 'Bằng CSS :invalid', 'Bằng alert'], a: 0, e: 'Dùng field state signals.' },
    { q: 'submit() sẽ làm gì trước tiên?', o: ['Gọi API ngay', 'Đánh dấu field là touched', 'Xóa form', 'Reload trang'], a: 1, e: 'Để hiển thị lỗi, rồi kiểm tra validation.' },
    { q: 'Với dự án đã dùng Reactive forms:', o: ['Bắt buộc đổi ngay', 'Vẫn là lựa chọn vững chắc', 'Không còn hoạt động', 'Chỉ chạy zoned'], a: 1, e: 'Có hướng dẫn migration khi muốn đổi.' }
  ],
  match: [
    ['form()', 'Tạo FieldTree từ model signal'],
    ['[formField]', 'Bind input với field'],
    ['FormRoot', 'Xử lý submit trên thẻ form'],
    ['validate()', 'Rule tự viết'],
    ['touched()', 'Đã focus rồi rời']
  ]
}
);
