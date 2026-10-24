// Sinh mindmap markmap (HTML độc lập) từ data/<prefix>-N.js
// Dùng: node gen_mindmap.js <bookId> <prefix> <số chương> <tiêu đề> <file ra>
const fs = require('fs'), path = require('path');
const [id, prefix, count, title, out] = process.argv.slice(2);
global.window = global;
const dir = path.join(__dirname, '..', 'site', 'data');
for (let n = 1; n <= +count; n++) (0, eval)(fs.readFileSync(path.join(dir, `${prefix}-${n}.js`), 'utf8'));
const strip = s => s.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();
let md = `# ${title}\n`;
for (const c of BOOK_DATA[id].chapters) {
  md += `## ${c.n}. ${strip(c.title)}\n`;
  for (const s of c.sections) md += `### ${strip(s.title)}\n`;
  md += `### Tóm tắt\n`;
  for (const t of c.summary) md += `- ${strip(t)}\n`;
}
const html = `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mindmap – ${title}</title>
<style>html,body{margin:0;height:100%}.markmap{width:100vw;height:100vh}.markmap>svg{width:100%;height:100%}</style>
</head><body>
<div class="markmap"><script type="text/template">
${md}</script></div>
<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18.12"></script>
</body></html>
`;
fs.writeFileSync(path.join(__dirname, '..', 'site', out), html);
console.log(out, md.split('\n').length, 'dòng');
