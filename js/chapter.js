// Điều khiển trang chương: nạp dữ liệu, dựng 5 tab (bài học, flashcard, quiz, luyện tập, ôn nhanh)
(function(){
  var qs=new URLSearchParams(location.search);
  var n=parseInt(qs.get('c'),10)||1;
  var meta=CHAPTERS.filter(function(c){return c.n===n})[0];
  if(!meta||!meta.ready){location.replace('index.html');return}
  var $=function(s,r){return (r||document).querySelector(s)};
  var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
  var D, S=App.chapterState(n);
  function save(){App.saveChapterState(n,S)}

  document.title='Chương '+n+' – '+meta.title;
  $('#cNum').textContent=n;$('#cTitle').textContent=meta.title;$('#cSub').textContent=meta.en+' · '+meta.sub;
  var prev=CHAPTERS.filter(function(c){return c.n===n-1&&c.ready})[0], next=CHAPTERS.filter(function(c){return c.n===n+1&&c.ready})[0];
  prev?$('#prevCh').href='chapter.html?c='+(n-1):$('#prevCh').style.visibility='hidden';
  next?$('#nextCh').href='chapter.html?c='+(n+1):$('#nextCh').style.visibility='hidden';

  var sc=document.createElement('script');
  sc.src='js/chapters/ch'+n+'.js';
  sc.onload=function(){D=CH[n];start()};
  sc.onerror=function(){document.querySelector('.container').insertAdjacentHTML('beforeend','<p>Không nạp được dữ liệu chương.</p>')};
  document.body.appendChild(sc);

  function start(){
    S.readTotal=D.sections.length;S.cardsTotal=D.cards.length;S.practiceTotal=(D.order||[]).length+(D.classify||[]).length;save();
    buildLesson();buildCards();buildQuiz();buildPractice();buildCheat();
    $$('.tab').forEach(function(t){t.addEventListener('click',function(){show(t.dataset.t)})});
    show((location.hash||'#lesson').slice(1));
  }
  function show(t){
    if(!$('#p-'+t))t='lesson';
    $$('.tab').forEach(function(x){x.classList.toggle('on',x.dataset.t===t)});
    $$('.panel').forEach(function(x){x.classList.toggle('on',x.id==='p-'+t)});
    history.replaceState(null,'','#'+t);
    window.scrollTo({top:0});
    $('#readBar').style.display=t==='lesson'?'block':'none';
  }

  /* ---------- BÀI HỌC ---------- */
  function buildLesson(){
    var body=$('#lessonBody'), toc=$('#toc');
    D.sections.forEach(function(s,i){
      var el=document.createElement('section');el.className='sec';el.id='s-'+s.id;
      el.innerHTML='<h2><span class="ic">'+s.icon+'</span>'+(i+1)+'. '+s.title+'</h2>'+s.html;
      body.appendChild(el);
      var a=document.createElement('a');a.href='#s-'+s.id;a.textContent=(i+1)+'. '+s.title;a.dataset.id=s.id;
      a.addEventListener('click',function(e){e.preventDefault();el.scrollIntoView({behavior:'smooth'})});
      toc.appendChild(a);
    });
    var end=document.createElement('div');end.className='sec';
    end.innerHTML='<h2><span class="ic">🎯</span>Xong bài học – làm gì tiếp?</h2><p>Củng cố ngay bằng flashcard, rồi làm trắc nghiệm và luyện tập sắp xếp.</p><div class="row"><button class="btn" data-go="cards">🃏 Flashcard</button><button class="btn" data-go="quiz">✅ Trắc nghiệm</button><button class="btn ghost" data-go="practice">🧩 Luyện tập</button><button class="btn ghost" data-go="cheat">⚡ Ôn nhanh</button></div>';
    body.appendChild(end);
    $$('[data-go]',end).forEach(function(b){b.addEventListener('click',function(){show(b.dataset.go)})});
    Widgets.init(body);
    markToc();
    var tick=false;
    window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(function(){tick=false;onScroll()})}});
    onScroll();
  }
  function markToc(){$$('#toc a').forEach(function(a){a.style.textDecoration='none';a.dataset.read=S.read.indexOf(a.dataset.id)>-1?'1':'';a.textContent=a.textContent.replace(/ ✓$/,'')+(a.dataset.read?' ✓':'')})}
  function onScroll(){
    if(!$('#p-lesson').classList.contains('on'))return;
    var h=document.documentElement;
    $('#readBar').style.width=Math.min(100,h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%';
    var cur=null,changed=false;
    D.sections.forEach(function(s){
      var r=$('#s-'+s.id).getBoundingClientRect();
      if(r.top<180&&r.bottom>180)cur=s.id;
      if(r.bottom<innerHeight*0.95&&S.read.indexOf(s.id)<0){S.read.push(s.id);changed=true}
    });
    $$('#toc a').forEach(function(a){a.classList.toggle('on',a.dataset.id===cur)});
    if(changed){save();markToc()}
  }

  /* ---------- FLASHCARD ---------- */
  function buildCards(){
    var root=$('#p-cards'),mode='all',deck=[],i=0;
    function mk(){
      deck=D.cards.map(function(c,idx){return {c:c,idx:idx}});
      if(mode==='unknown')deck=deck.filter(function(x){return S.known.indexOf(x.idx)<0});
      if(mode==='shuffle')deck=App.shuffle(deck);
      i=0;draw();
    }
    function draw(){
      var known=S.known.length,total=D.cards.length;
      var head='<div class="fc-wrap"><div class="fc-top"><span>Đã thuộc <b>'+known+'/'+total+'</b></span><span class="row">'+
        ['all:Tất cả','unknown:Chưa thuộc','shuffle:Trộn'].map(function(m){var p=m.split(':');return '<button class="chip'+(mode===p[0]?' on':'')+'" data-m="'+p[0]+'">'+p[1]+'</button>'}).join('')+
        '<button class="chip" data-reset>Xóa tiến độ</button></span></div><div class="bar"><i style="width:'+known/total*100+'%"></i></div>';
      if(!deck.length){root.innerHTML=head+'<div class="callout c-tip" style="margin-top:20px"><b>🎉 Bạn đã thuộc hết thẻ trong bộ này!</b>Chọn “Tất cả” để ôn lại.</div></div>';bind();return}
      var x=deck[i];
      root.innerHTML=head+
        '<div class="fc" id="fc"><div class="fc-in"><div class="fc-face fc-front"><div class="tag">'+(x.c.t||'Câu hỏi')+' · '+(i+1)+'/'+deck.length+'</div><div class="q">'+x.c.f+'</div></div>'+
        '<div class="fc-face fc-back"><div class="tag">Đáp án</div><div>'+x.c.b+'</div></div></div></div>'+
        '<div class="fc-hint">Bấm thẻ hoặc phím Space để lật · ←/→ để chuyển</div>'+
        '<div class="fc-btns"><button class="btn red" id="no">😅 Chưa thuộc</button><button class="btn" id="yes">✅ Đã thuộc</button></div>'+
        '<div class="fc-nav"><button class="btn ghost" id="pv">◀ Trước</button><button class="btn ghost" id="nx">Sau ▶</button></div></div>';
      $('#fc',root).addEventListener('click',function(){this.classList.toggle('flip')});
      $('#pv',root).onclick=function(){i=(i-1+deck.length)%deck.length;draw()};
      $('#nx',root).onclick=function(){i=(i+1)%deck.length;draw()};
      $('#yes',root).onclick=function(){if(S.known.indexOf(x.idx)<0)S.known.push(x.idx);save();adv()};
      $('#no',root).onclick=function(){S.known=S.known.filter(function(k){return k!==x.idx});save();adv()};
      bind();
    }
    function adv(){
      if(mode==='unknown'){deck=deck.filter(function(d){return S.known.indexOf(d.idx)<0});if(i>=deck.length)i=0}
      else i=(i+1)%deck.length;
      draw();
    }
    function bind(){
      $$('[data-m]',root).forEach(function(b){b.onclick=function(){mode=b.dataset.m;mk()}});
      var r=$('[data-reset]',root);if(r)r.onclick=function(){if(confirm('Xóa toàn bộ tiến độ flashcard của chương này?')){S.known=[];save();mk()}};
    }
    document.addEventListener('keydown',function(e){
      if(!root.classList.contains('on')||!$('#fc'))return;
      if(e.code==='Space'){e.preventDefault();$('#fc').classList.toggle('flip')}
      if(e.key==='ArrowRight')$('#nx').click();
      if(e.key==='ArrowLeft')$('#pv').click();
    });
    mk();
  }

  /* ---------- TRẮC NGHIỆM ---------- */
  function buildQuiz(){
    var root=$('#p-quiz');
    function intro(){
      root.innerHTML='<div class="quiz-wrap"><div class="q-card" style="text-align:center"><h2>✅ Kiểm tra chương '+n+'</h2><p>'+D.quiz.length+' câu · có giải thích ngay sau mỗi câu · đạt từ 80% là tốt.</p>'+
        (S.quiz!=null?'<p>Điểm cao nhất của bạn: <b>'+S.quiz+'%</b></p>':'')+
        '<div class="row" style="justify-content:center"><button class="btn" id="qa">Làm tất cả (xáo trộn)</button><button class="btn ghost" id="qh">10 câu ngẫu nhiên</button></div></div></div>';
      $('#qa').onclick=function(){run(App.shuffle(D.quiz))};
      $('#qh').onclick=function(){run(App.shuffle(D.quiz).slice(0,10))};
    }
    function run(list){
      var idx=0,score=0,wrong=[];
      function ask(){
        var q=list[idx];
        var opts=App.shuffle(q.o.map(function(t,i){return {t:t,ok:i===q.a}}));
        root.innerHTML='<div class="quiz-wrap"><div class="bar"><i style="width:'+idx/list.length*100+'%"></i></div><div class="q-card" style="margin-top:12px"><div class="q-meta"><span>Câu '+(idx+1)+'/'+list.length+'</span><span>Điểm: '+score+'</span></div><div class="q-text">'+q.q+'</div><div id="opts"></div><div id="fbk"></div></div></div>';
        var box=$('#opts');
        opts.forEach(function(o,k){
          var b=document.createElement('button');b.className='opt';
          b.innerHTML='<span class="l">'+'ABCDEF'[k]+'</span><span>'+o.t+'</span>';
          b.onclick=function(){
            $$('.opt',box).forEach(function(x,j){x.disabled=true;if(opts[j].ok)x.classList.add('right')});
            if(o.ok)score++;else{b.classList.add('wrong');wrong.push({q:q,pick:o.t})}
            $('#fbk').innerHTML='<div class="why"><b>'+(o.ok?'🎉 Chính xác!':'Chưa đúng.')+'</b> '+q.e+'</div><div style="margin-top:12px;text-align:right"><button class="btn" id="nq">'+(idx+1<list.length?'Câu tiếp ▶':'Xem kết quả')+'</button></div>';
            $('#nq').onclick=function(){idx++;idx<list.length?ask():done()};
          };
          box.appendChild(b);
        });
      }
      function done(){
        var pct=Math.round(score/list.length*100);
        if(list.length===D.quiz.length&&(S.quiz==null||pct>S.quiz)){S.quiz=pct;save()}
        else if(S.quiz==null){S.quiz=pct;save()}
        var msg=pct>=90?'Xuất sắc! 🏆':pct>=80?'Rất tốt! 👏':pct>=60?'Khá ổn, ôn lại chỗ sai nhé.':'Đọc lại bài và làm flashcard rồi thử lại nhé 💪';
        root.innerHTML='<div class="quiz-wrap"><div class="q-card" style="text-align:center"><h2>Kết quả</h2><div class="score-ring" style="--p:'+pct+'%"><span>'+pct+'%</span></div><p><b>'+score+'/'+list.length+'</b> câu đúng. '+msg+'</p><div class="row" style="justify-content:center"><button class="btn" id="again">Làm lại</button>'+(wrong.length?'<button class="btn ghost" id="rw">Chỉ làm lại câu sai ('+wrong.length+')</button>':'')+'</div></div>'+
          (wrong.length?'<h3 style="margin-top:20px">Xem lại câu sai</h3>'+wrong.map(function(w){return '<div class="review-item"><b>'+w.q.q+'</b><p>❌ Bạn chọn: '+w.pick+'</p><p>✅ Đáp án: '+w.q.o[w.q.a]+'</p><p style="color:var(--muted)">'+w.q.e+'</p></div>'}).join(''):'')+'</div>';
        $('#again').onclick=intro;
        var r=$('#rw');if(r)r.onclick=function(){run(App.shuffle(wrong.map(function(w){return w.q})))};
      }
      ask();
    }
    intro();
  }

  /* ---------- LUYỆN TẬP ---------- */
  function markPractice(id){if(S.practice.indexOf(id)<0){S.practice.push(id);save()}}
  function buildPractice(){
    var root=$('#p-practice');
    root.innerHTML='<div class="callout c-info"><b>Cách làm</b>🔢 <i>Sắp xếp</i>: kéo thả (hoặc dùng nút ▲▼) cho đúng thứ tự rồi bấm Kiểm tra. 🗂 <i>Phân loại</i>: bấm một mục, sau đó bấm vào nhóm đúng.</div>';
    (D.order||[]).forEach(function(ex){root.appendChild(orderEx(ex))});
    (D.classify||[]).forEach(function(ex){root.appendChild(classifyEx(ex))});
  }
  function orderEx(ex){
    var wrap=document.createElement('div');wrap.className='ex-block';
    var items=App.shuffle(ex.items.map(function(t,i){return {t:t,i:i}}));
    function draw(res){
      wrap.innerHTML='<h3>🔢 '+ex.title+'</h3><p>'+ex.intro+'</p><ul class="ord-list"></ul><div class="row"><button class="btn" data-chk>Kiểm tra</button><button class="btn ghost" data-sh>Xáo lại</button><button class="btn ghost" data-sol>Xem đáp án</button></div><div class="fb"></div>';
      var ul=$('.ord-list',wrap);
      items.forEach(function(it,pos){
        var li=document.createElement('li');li.className='ord-item'+(res?(it.i===pos?' ok':' bad'):'');li.draggable=true;li.dataset.pos=pos;
        li.innerHTML='<span class="no">'+(pos+1)+'</span><span class="tx">'+it.t+'</span><span class="mv"><button data-u>▲</button><button data-d>▼</button></span>';
        $('[data-u]',li).onclick=function(){if(pos>0){swap(pos,pos-1)}};
        $('[data-d]',li).onclick=function(){if(pos<items.length-1){swap(pos,pos+1)}};
        li.ondragstart=function(e){li.classList.add('dragging');e.dataTransfer.setData('text/plain',pos)};
        li.ondragend=function(){li.classList.remove('dragging')};
        li.ondragover=function(e){e.preventDefault()};
        li.ondrop=function(e){e.preventDefault();var from=+e.dataTransfer.getData('text/plain');var m=items.splice(from,1)[0];items.splice(pos,0,m);draw()};
        ul.appendChild(li);
      });
      $('[data-chk]',wrap).onclick=function(){
        var okAll=items.every(function(it,p){return it.i===p});
        draw(true);
        var fb=$('.fb',wrap);
        if(okAll){fb.className='fb ok';fb.innerHTML='🎉 Đúng hết! '+(ex.explain||'');markPractice(ex.id)}
        else{fb.className='fb no';fb.textContent='Chưa đúng – các mục đỏ đang sai vị trí. Thử lại nhé!'}
      };
      $('[data-sh]',wrap).onclick=function(){items=App.shuffle(items);draw()};
      $('[data-sol]',wrap).onclick=function(){items=items.slice().sort(function(a,b){return a.i-b.i});draw(true);var fb=$('.fb',wrap);fb.className='fb ok';fb.innerHTML=ex.explain||''};
    }
    function swap(a,b){var t=items[a];items[a]=items[b];items[b]=t;draw()}
    draw();return wrap;
  }
  function classifyEx(ex){
    var wrap=document.createElement('div');wrap.className='ex-block';
    var place={},sel=null,checked=false;
    ex.items.forEach(function(it,i){place[i]=-1});
    function draw(){
      var pool=ex.items.map(function(it,i){return i}).filter(function(i){return place[i]===-1});
      wrap.innerHTML='<h3>🗂 '+ex.title+'</h3><p>'+ex.intro+'</p><div class="cls-pool"></div><div class="buckets"></div><div class="row"><button class="btn" data-chk>Kiểm tra</button><button class="btn ghost" data-rs>Làm lại</button></div><div class="fb"></div>';
      function chipEl(i){
        var b=document.createElement('button');b.className='cls-item'+(sel===i?' sel':'');
        if(checked&&place[i]!==-1)b.classList.add(place[i]===ex.items[i].b?'ok':'bad');
        b.textContent=ex.items[i].t;
        b.onclick=function(e){e.stopPropagation();if(checked)return;if(place[i]!==-1){place[i]=-1;sel=null}else sel=(sel===i?null:i);draw()};
        return b;
      }
      var poolEl=$('.cls-pool',wrap);
      if(!pool.length)poolEl.innerHTML='<span style="color:var(--muted)">Đã xếp hết – bấm Kiểm tra</span>';
      pool.forEach(function(i){poolEl.appendChild(chipEl(i))});
      var bx=$('.buckets',wrap);
      ex.buckets.forEach(function(name,bi){
        var d=document.createElement('div');d.className='bucket';
        d.innerHTML='<h4>'+name+'</h4><div class="its"></div>';
        ex.items.forEach(function(it,i){if(place[i]===bi)$('.its',d).appendChild(chipEl(i))});
        d.onclick=function(){if(checked||sel==null)return;place[sel]=bi;sel=null;draw()};
        bx.appendChild(d);
      });
      $('[data-rs]',wrap).onclick=function(){ex.items.forEach(function(x,i){place[i]=-1});sel=null;checked=false;draw()};
      $('[data-chk]',wrap).onclick=function(){
        if(pool.length){var f=$('.fb',wrap);f.className='fb no';f.textContent='Hãy xếp hết các mục vào nhóm trước.';return}
        checked=true;draw();
        var good=ex.items.filter(function(it,i){return place[i]===it.b}).length;
        var f=$('.fb',wrap);
        if(good===ex.items.length){f.className='fb ok';f.innerHTML='🎉 Chính xác '+good+'/'+ex.items.length+'! '+(ex.explain||'');markPractice(ex.id)}
        else{f.className='fb no';f.innerHTML='Đúng '+good+'/'+ex.items.length+'. Mục đỏ là sai – bấm “Làm lại” để thử tiếp.'}
      };
    }
    draw();return wrap;
  }

  /* ---------- ÔN NHANH ---------- */
  function buildCheat(){
    $('#p-cheat').innerHTML='<div class="cheat-grid">'+D.cheat.map(function(c){return '<div class="cheat"><h3>'+c.title+'</h3>'+c.html+'</div>'}).join('')+'</div>';
  }
})();
