// Trang thư viện: danh sách sách, tìm kiếm, phân loại
let cat = 'Tất cả';
const cats = ['Tất cả', ...new Set(BOOKS.map(b => b.cat))];

function doneCount(b) {
  // Sách ngoài (android-security) lưu tiến độ riêng: tính chương đã làm trắc nghiệm
  if (b.progressKey) {
    let n = 0;
    b.chapters.forEach(c => { try { const s = JSON.parse(localStorage.getItem(b.progressKey.replace(/ch$/, '') + 'ch' + c.n) || 'null'); if (s && s.quiz != null) n++; } catch (e) {} });
    return n;
  }
  return (Store.get('done:' + b.id, [])).length;
}

function hl(text, q) {
  if (!q) return esc(text);
  const i = norm(text).indexOf(q);
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + '<span class="hit">' + esc(text.slice(i, i + q.length)) + '</span>' + esc(text.slice(i + q.length));
}

function render() {
  const q = norm($('#q').value.trim());
  $('#chips').innerHTML = cats.map(c => `<button class="chip ${c === cat ? 'on' : ''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  const out = [];
  BOOKS.forEach(b => {
    if (cat !== 'Tất cả' && b.cat !== cat) return;
    const chHits = b.chapters.filter(c => q && norm(c.title).includes(q));
    const hay = norm([b.title, b.subtitle, b.author, b.cat, b.desc, b.tags.join(' ')].join(' '));
    if (q && !hay.includes(q) && !chHits.length) return;
    const ready = b.chapters.filter(c => c.ready).length;
    const done = doneCount(b);
    const soon = ready === 0;
    out.push(`<a class="bk" href="${b.href || 'book.html?id=' + b.id}">
      <div class="cover" style="background:${b.color}">${b.emoji}</div>
      <div class="body">
        <span><span class="tag">${esc(b.cat)}</span> ${soon ? '<span class="tag soon">Sắp có</span>' : ''}</span>
        <h3>${hl(b.title, q)}</h3>
        <div class="au">${hl(b.author, q)} · ${esc(b.level)}</div>
        <div class="ds">${esc(b.desc)}</div>
        ${chHits.length ? `<div class="chhits">Chương khớp: ${chHits.map(c => 'Ch.' + c.n + ' ' + hl(c.title, q)).join('; ')}</div>` : ''}
        <div class="small">${soon ? 'Đang soạn nội dung' : `Đã soạn ${ready}/${b.chapters.length} chương · đã học ${done}`}</div>
        <div class="meter"><i style="width:${ready ? Math.round(done / ready * 100) : 0}%"></i></div>
      </div></a>`);
  });
  $('#grid').innerHTML = out.join('') || '<div class="empty">Không tìm thấy sách phù hợp.</div>';
}

$('#q').addEventListener('input', render);
$('#chips').addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) { cat = c.dataset.c; render(); } });
render();
