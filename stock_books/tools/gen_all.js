// Sinh mindmap markmap cho một sách trong stock_books/site (đọc mọi data/*.js) và gắn "mindmap" vào data/books.js.
// Dùng: node gen_all.js <bookId>      (bỏ trống để liệt kê id có thể sinh)
const fs = require('fs'), path = require('path');
const site = path.join(__dirname, '..', 'site');
const dir = path.join(site, 'data');
global.window = global;
(0, eval)(fs.readFileSync(path.join(dir, 'books.js'), 'utf8'));
global.BOOK_DATA = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'books.js').sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))) {
  try { (0, eval)(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { /* file không thuộc định dạng sách: bỏ qua */ }
}
const ids = [...new Set(BOOKS.map(b => b.id))].filter(id => BOOK_DATA[id] && BOOK_DATA[id].chapters.length);
const id = process.argv[2];
if (!id) { console.log(ids.join(' ')); process.exit(0); }
const book = BOOKS.find(b => b.id === id), data = BOOK_DATA[id];
if (!book || !data) { console.error('Không có dữ liệu cho', id); process.exit(1); }

const strip = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const chapters = data.chapters.slice().sort((a, b) => a.n - b.n);
let md = `# ${book.emoji || '📚'} ${strip(book.title)}\n`;
for (const c of chapters) {
  const secs = c.sections || [];
  md += `## ${(secs[0] && secs[0].icon) || '📖'} ${c.n}. ${strip(c.title)}\n`;
  for (const s of secs) md += `### ${s.icon || '▪️'} ${strip(s.title)}\n`;
  if ((c.summary || []).length) md += `### 📝 Tóm tắt\n`;
  for (const t of c.summary || []) md += `- ${strip(t)}\n`;
}
const out = `${id}-mindmap.html`;
const html = `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mindmap – ${strip(book.title)}</title>
<style>html,body{margin:0;height:100%}.markmap{width:100vw;height:100vh}.markmap>svg{width:100%;height:100%}</style>
</head><body>
<div class="markmap"><script type="text/template">
${md.replace(/<\/script>/gi, '<\\/script>')}</script></div>
<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18.12"></script>
</body></html>
`;
fs.writeFileSync(path.join(site, out), html);

// gắn "mindmap" vào books.js (chèn cùng dòng với "id", giữ nguyên kiểu xuống dòng)
const bp = path.join(dir, 'books.js');
let bs = fs.readFileSync(bp, 'utf8');
const re = new RegExp(`((?:"id"|\\bid)\\s*:\\s*['"]${id}['"],)(?!\\s*"mindmap")`);
if (re.test(bs)) { bs = bs.replace(re, `$1 "mindmap": "${out}",`); fs.writeFileSync(bp, bs); }
console.log(out, chapters.length, 'chương,', md.split('\n').length, 'dòng');
