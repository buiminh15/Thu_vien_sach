// Next.js – Chương 9: Tối ưu ảnh, font và metadata.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 9,
  title: 'Tối ưu ảnh, font và metadata',
  intro: 'Ba mảng giúp hiệu năng và SEO: component <code>&lt;Image&gt;</code> (<code>next/image</code>), module <code>next/font</code> tự host font, và các API <b>Metadata</b> (object tĩnh, <code>generateMetadata</code>, file icon/OG image/sitemap/robots).',
  sections: [
    { icon: '🖼️', title: 'Tối ưu ảnh: next/image', blocks: [
      { t: 'list', items: [
        '<b>Tối ưu kích thước</b>: phục vụ ảnh đúng cỡ cho từng thiết bị bằng định dạng hiện đại (WebP).',
        '<b>Ổn định thị giác</b>: tự tránh layout shift (CLS).',
        '<b>Tải nhanh</b>: lazy load khi vào viewport, tuỳ chọn blur-up placeholder.',
        '<b>Linh hoạt</b>: resize theo yêu cầu, kể cả ảnh ở server khác.'
      ] },
      { t: 'table', head: ['Loại', 'Cách dùng'], rows: [
        ['Ảnh local trong <code>public/</code>', '<code>&lt;Image src="/profile.png" width={500} height={500} alt=... /&gt;</code>'],
        ['Ảnh import tĩnh', '<code>import ProfileImage from \'./profile.png\'</code> → tự có <b>width, height, blurDataURL</b>; thêm <code>placeholder="blur"</code> nếu muốn'],
        ['Ảnh động không import tĩnh', 'Dùng <code>import()</code> động trong Server Component với tiền tố đường dẫn tĩnh cụ thể (mọi file khớp tiền tố đều được đóng gói)'],
        ['Ảnh remote', 'Truyền URL; phải tự cung cấp <code>width</code>, <code>height</code> (và <code>blurDataURL</code>), hoặc dùng <code>fill</code> để lấp đầy phần tử cha']
      ] },
      { t: 'warn', x: 'Ảnh remote cần cho phép trước trong <code>next.config</code> qua <code>images.remotePatterns</code> (protocol, hostname, port, pathname, search). Hãy khai báo <b>càng cụ thể càng tốt</b> (ví dụ chỉ một bucket S3) để tránh bị lạm dụng.' }
    ] },
    { icon: '🔤', title: 'Tối ưu font: next/font', blocks: [
      { t: 'p', x: '<code>next/font</code> tự tối ưu font, <b>loại bỏ request mạng ngoài</b> (tăng riêng tư) và có sẵn self-hosting không gây layout shift. Gọi như hàm với option rồi đặt <code>className</code> vào phần tử cần áp. Font có phạm vi theo component dùng; muốn toàn app thì đặt ở root layout.' },
      { t: 'table', head: ['Nguồn', 'Cách dùng'], rows: [
        ['Google Fonts', '<code>import { Geist } from \'next/font/google\'; const geist = Geist({ subsets: [\'latin\'] })</code>. File được self-host cùng domain, trình duyệt không gửi request tới Google'],
        ['Font không biến thiên', 'Phải chỉ định <code>weight</code> (ví dụ Roboto với <code>weight: \'400\'</code>); khuyến nghị dùng <b>variable font</b>'],
        ['Font local', '<code>localFont({ src: \'./my-font.woff2\' })</code>; đường dẫn tương đối theo file gọi; <code>src</code> có thể là mảng nhiều file (path, weight, style)']
      ] }
    ] },
    { icon: '🔎', title: 'Metadata và OG image', blocks: [
      { t: 'p', x: 'Next.js tự sinh thẻ <code>&lt;head&gt;</code>. Luôn có sẵn <code>charset</code> và <code>viewport</code>. <code>metadata</code> và <code>generateMetadata</code> chỉ dùng trong Server Component.' },
      { t: 'table', head: ['Cách', 'Mô tả'], rows: [
        ['Metadata tĩnh', '<code>export const metadata: Metadata = { title, description }</code> trong layout/page tĩnh'],
        ['<code>generateMetadata</code>', 'Hàm async nhận <code>{ params, searchParams }, parent</code> để fetch dữ liệu rồi trả title/description'],
        ['File-based', 'favicon.ico, icon, apple-icon, opengraph-image, twitter-image, robots.txt, sitemap.xml (tĩnh hoặc sinh bằng code)'],
        ['OG image động', '<code>opengraph-image.tsx</code> dùng <code>ImageResponse</code> từ <code>next/og</code>, export <code>size</code> 1200×630 và <code>contentType</code>']
      ] },
      { t: 'list', items: [
        '<b>Streaming metadata</b>: với trang dynamic, metadata được stream riêng không chặn UI; <b>tắt với bot</b> cần metadata trong &lt;head&gt; (Twitterbot, Slackbot, Bingbot…, tuỳ biến bằng <code>htmlLimitedBots</code>). Trang prerender không stream vì metadata đã xong lúc build.',
        '<b>Memoize</b>: nếu metadata và page cùng lấy một dữ liệu, bọc hàm bằng <code>React.cache</code> để chỉ truy vấn một lần.',
        'OG image cụ thể hơn (đặt sâu hơn trong thư mục) <b>ưu tiên</b> hơn ảnh ở cấp trên. <code>ImageResponse</code> (satori + resvg) chỉ hỗ trợ flexbox và tập con CSS, <b>không</b> hỗ trợ <code>display: grid</code>.'
      ] }
    ] }
  ],
  summary: [
    'next/image: tự tối ưu kích thước, chống layout shift, lazy load; ảnh remote cần remotePatterns cụ thể.',
    'next/font: self-host, không gọi mạng ngoài, không layout shift; ưu tiên variable font.',
    'Metadata: object tĩnh, generateMetadata, file icon/OG/sitemap/robots; ImageResponse tạo OG động.',
    'Bot nhận metadata blocking; dùng React.cache để tránh fetch trùng.'
  ],
  cards: [
    ['Lợi ích của <Image>?', 'Tối ưu kích thước, chống layout shift, lazy load, resize theo yêu cầu.'],
    ['Ảnh import tĩnh được gì?', 'Tự có width, height, blurDataURL.'],
    ['Ảnh remote cần?', 'width/height (hoặc fill) và cấu hình images.remotePatterns.'],
    ['Vì sao remotePatterns cụ thể?', 'Ngăn lạm dụng tối ưu ảnh từ nguồn không mong muốn.'],
    ['next/font tối ưu điều gì?', 'Tự host font, bỏ request ngoài, không layout shift.'],
    ['Font Google tự host?', 'Có; phục vụ cùng domain, không gửi request tới Google.'],
    ['Font không biến thiên cần?', 'Chỉ định weight.'],
    ['localFont dùng thế nào?', 'localFont({ src: ./font.woff2 }); src có thể là mảng.'],
    ['metadata tĩnh vs generateMetadata?', 'Object cố định vs hàm async lấy dữ liệu.'],
    ['File metadata đặc biệt?', 'favicon, icon, apple-icon, opengraph-image, twitter-image, robots, sitemap.'],
    ['ImageResponse hạn chế?', 'Chỉ flexbox và tập con CSS; không grid.'],
    ['Bot và streaming metadata?', 'Bot nhận metadata blocking trong <head>; cấu hình bằng htmlLimitedBots.']
  ],
  quiz: [
    { q: 'Ảnh remote cần cấu hình ở:', o: ['tsconfig', 'next.config images.remotePatterns', '.env', 'package.json'], a: 1, e: 'Càng cụ thể càng tốt.' },
    { q: 'Ảnh import tĩnh được tự cung cấp:', o: ['alt', 'width/height/blurDataURL', 'href', 'srcset thủ công'], a: 1, e: 'Giúp chống CLS.' },
    { q: 'prop để ảnh lấp đầy phần tử cha:', o: ['cover', 'fill', 'stretch', 'full'], a: 1, e: 'Dùng khi không biết kích thước.' },
    { q: 'next/font/google gây request tới Google từ trình duyệt?', o: ['Có', 'Không (self-host)', 'Chỉ lần đầu', 'Chỉ production'], a: 1, e: 'Font phục vụ cùng domain.' },
    { q: 'Font không biến thiên bắt buộc có:', o: ['subsets', 'weight', 'style', 'display'], a: 1, e: 'Khuyến nghị variable font.' },
    { q: 'Export metadata chỉ dùng được ở:', o: ['Client Component', 'Server Component', 'Mọi nơi', 'proxy'], a: 1, e: 'Tương tự generateMetadata.' },
    { q: 'OG image động dùng:', o: ['canvas', 'ImageResponse từ next/og', 'sharp', 'puppeteer'], a: 1, e: 'Đặt trong opengraph-image.tsx.' },
    { q: 'ImageResponse KHÔNG hỗ trợ:', o: ['flexbox', 'display: grid', 'absolute position', 'font tuỳ chỉnh'], a: 1, e: 'Chỉ tập con CSS.' },
    { q: 'Tránh fetch trùng giữa generateMetadata và page bằng:', o: ['setTimeout', 'React.cache', 'localStorage', 'Không thể'], a: 1, e: 'Chỉ gọi query một lần.' },
    { q: 'OG image nào được ưu tiên?', o: ['Cấp gốc', 'Cụ thể hơn (sâu hơn)', 'Ngẫu nhiên', 'Cũ nhất'], a: 1, e: 'Theo cây thư mục.' }
  ],
  match: [
    ['next/image', 'Tối ưu ảnh'],
    ['remotePatterns', 'Cho phép nguồn ảnh ngoài'],
    ['next/font', 'Tự host font'],
    ['generateMetadata', 'Metadata theo dữ liệu'],
    ['ImageResponse', 'OG image từ JSX'],
    ['sitemap.ts', 'Sinh sitemap'],
    ['htmlLimitedBots', 'Bot nhận metadata blocking']
  ]
});
