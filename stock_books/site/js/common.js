// Tiện ích dùng chung: lưu tiến độ (localStorage, có try/catch) + đổi giao diện
const Store = {
  get(k, d) { try { const v = localStorage.getItem('tht:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('tht:' + k, JSON.stringify(v)); } catch (e) {} }
};
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; }
function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
(function () {
  const t = Store.get('theme', null);
  if (t) document.documentElement.dataset.theme = t;
  const b = document.getElementById('theme');
  if (b) b.onclick = () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nx; Store.set('theme', nx);
    window.dispatchEvent(new Event('themechange'));
  };
})();
