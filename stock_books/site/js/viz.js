// Trình xem Viz: ảnh trang + tóm tắt tiếng Việt, ghi chú văn hóa (chấm số trên ảnh), từ vựng. Dùng chung nhiều số tạp chí.
(function () {
  const LIST = window.VIZ_LIST || [];
  const S = { id: null, bl: null, tr: null, pg: null, order: [] };
  const ST = (k, d) => Store.get('viz:' + k, d), SS = (k, v) => Store.set('viz:' + k, v);
  const qs = new URLSearchParams(location.search);

  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Không tải được ' + src)); document.head.appendChild(s); }); }

  async function openIssue(id) {
    const meta = LIST.find(x => x.id === id); if (!meta) return;
    try {
      if (!(window.VIZ_BL && VIZ_BL[id])) await loadScript('viz/' + id + '/blocks.js');
      if (!(window.VIZ_TR && VIZ_TR[id])) await loadScript('viz/' + id + '/tr.js');
    } catch (e) { $('#info').innerHTML = '<p>' + esc(e.message) + '</p>'; return; }
    S.id = id; S.bl = VIZ_BL[id]; S.tr = VIZ_TR[id]; SS('issue', id);
    S.order = Object.keys(S.tr.pages).map(Number).sort((a, b) => a - b);
    renderNav();
    const p = +qs.get('page') || ST('page:' + id, S.order[0]);
    showPage(S.order.includes(p) ? p : S.order[0]);
  }

  function renderNav() {
    const toc = S.tr.toc || []; let h = `<h4>${esc(S.tr.title)}</h4>`;
    toc.forEach(g => {
      h += `<h4>${esc(g.group)}</h4>`;
      g.items.forEach(it => { const ok = S.order.includes(it.p); h += `<button data-p="${it.p}" class="${ok ? '' : 'lock'} ${S.pg === it.p ? 'on' : ''}"><span class="n">${it.p}</span><span>${esc(it.t)}${ok ? '' : '<small>chưa dựng</small>'}</span></button>`; });
    });
    $('#nav').innerHTML = h;
    $('#nav').querySelectorAll('button').forEach(b => b.onclick = () => { const p = +b.dataset.p; if (!S.order.includes(p)) return; showPage(p); document.body.classList.remove('nav-open'); });
  }

  function showPage(p) {
    S.pg = p; SS('page:' + S.id, p);
    const T = S.tr.pages[p], B = S.bl[p];
    $('#pgtitle').textContent = `Trang ${p} – ${T.title}`;
    const i = S.order.indexOf(p);
    $('#prev').disabled = i <= 0; $('#next').disabled = i >= S.order.length - 1;
    // ảnh + chấm số
    const blocks = (B && B.blocks) || []; const byId = Object.fromEntries(blocks.map(b => [b.id, b]));
    let mk = '';
    (T.notes || []).forEach((n, k) => { const b = n.ref && byId[n.ref]; if (b && b.x != null) mk += `<button class="vmk" data-k="${k}" style="left:${b.x}%;top:${b.y}%" aria-label="Ghi chú ${k + 1}">${k + 1}</button>`; });
    $('#imgbox').innerHTML = `<div class="viz-pg"><img src="viz/${S.id}/${B ? B.img : 'p' + String(p).padStart(2, '0') + '.jpg'}" alt="Trang ${p}">${mk}</div>`;
    $('#imgbox img').onclick = () => { $('#mbody').innerHTML = `<img src="${$('#imgbox img').src}" alt="">`; $('#modal').hidden = false; };
    // thông tin
    let h = '';
    if (T.adult) h += `<div class="vwarn">🔞 Trang này có <b>ngôn từ thô tục/nội dung người lớn</b>; phần tóm tắt đã lược nhẹ.</div>`;
    h += `<div class="vcard"><h3>📝 Tóm tắt (tiếng Việt)</h3>${T.summary ? '<ul>' + T.summary.map(x => `<li>${x}</li>`).join('') + '</ul>' : ''}${T.intro ? `<p>${T.intro}</p>` : ''}</div>`;
    if ((T.notes || []).length) h += `<div class="vcard"><h3>💡 Ghi chú văn hóa &amp; ngôn ngữ</h3>${T.notes.map((n, k) => `<div class="vnote" data-k="${k}"><span class="num">${k + 1}</span>${n.en ? `<span class="en">${esc(n.en)}</span> – ` : ''}<b>${n.vi}</b>${n.x ? `<p>${n.x}</p>` : ''}</div>`).join('')}</div>`;
    if ((T.vocab || []).length) h += `<div class="vcard"><h3>🔤 Từ vựng / thành ngữ <small class="small">(chạm vào nghĩa để hiện)</small></h3><table class="vtbl">${T.vocab.map(v => `<tr><td><b>${esc(v[0])}</b></td><td><span class="vv hide" tabindex="0">${v[1]}</span></td></tr>`).join('')}</table></div>`;
    $('#info').innerHTML = h;
    $('#info').querySelectorAll('.vv').forEach(e => e.onclick = () => e.classList.toggle('hide'));
    // liên kết chấm số ↔ ghi chú
    const pick = k => { document.querySelectorAll('.vmk,.vnote').forEach(e => e.classList.toggle('on', e.dataset.k === String(k))); document.querySelectorAll('.vbox').forEach(e => e.remove()); const n = T.notes[k], b = n && n.ref && byId[n.ref]; if (b && b.x != null) { const d = document.createElement('div'); d.className = 'vbox'; d.style.cssText = `left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%`; $('.viz-pg').appendChild(d); } const el = document.querySelector(`.vnote[data-k="${k}"]`); if (el && !el.classList.contains('hov')) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
    document.querySelectorAll('.vmk').forEach(b => b.onclick = () => pick(+b.dataset.k));
    document.querySelectorAll('.vnote').forEach(b => b.onclick = () => pick(+b.dataset.k));
    renderNav(); window.scrollTo({ top: 0 });
  }

  $('#prev').onclick = () => { const i = S.order.indexOf(S.pg); if (i > 0) showPage(S.order[i - 1]); };
  $('#next').onclick = () => { const i = S.order.indexOf(S.pg); if (i < S.order.length - 1) showPage(S.order[i + 1]); };
  $('#mclose').onclick = () => { $('#modal').hidden = true; };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; if (e.key === 'ArrowRight' && !e.target.closest('input,select')) $('#next').click(); if (e.key === 'ArrowLeft' && !e.target.closest('input,select')) $('#prev').click(); });
  $('#tglmk').onclick = () => { const off = document.body.classList.toggle('nomk'); $('#tglmk').setAttribute('aria-pressed', !off); };
  $('#tglnav').onclick = () => document.body.classList.toggle('nav-open');
  $('#issue').innerHTML = LIST.map(x => `<option value="${x.id}">${esc(x.label)}</option>`).join('');
  $('#issue').onchange = e => openIssue(e.target.value);
  openIssue(qs.get('issue') || ST('issue', LIST.length ? LIST[0].id : null));
})();
