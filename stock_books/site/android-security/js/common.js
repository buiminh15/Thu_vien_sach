// Tiện ích dùng chung: lưu trữ, giao diện sáng/tối, tiến độ học
(function(){
  var Store={
    get:function(k,d){try{var v=localStorage.getItem('asi:'+k);return v?JSON.parse(v):d}catch(e){return d}},
    set:function(k,v){try{localStorage.setItem('asi:'+k,JSON.stringify(v))}catch(e){}}
  };
  var App={Store:Store};

  // chương trình: {read:[ids], readTotal, quiz:best%, known:[idx], cardsTotal, practice:[ids], practiceTotal}
  App.chapterState=function(n){
    return Store.get('ch'+n,{read:[],readTotal:0,quiz:null,known:[],cardsTotal:0,practice:[],practiceTotal:0});
  };
  App.saveChapterState=function(n,s){Store.set('ch'+n,s)};
  App.progress=function(n){
    var s=App.chapterState(n);
    var r=s.readTotal?s.read.length/s.readTotal:0;
    var c=s.cardsTotal?s.known.length/s.cardsTotal:0;
    var q=s.quiz==null?0:Math.min(1,s.quiz/80);
    var p=s.practiceTotal?s.practice.length/s.practiceTotal:0;
    return {pct:Math.round((r+c+q+p)/4*100),quiz:s.quiz,known:s.known.length};
  };

  // theme
  var saved=Store.get('theme',null);
  if(saved) document.documentElement.setAttribute('data-theme',saved);
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('themeBtn');
    if(!b) return;
    b.addEventListener('click',function(){
      var cur=document.documentElement.getAttribute('data-theme');
      if(!cur) cur=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
      var nx=cur==='dark'?'light':'dark';
      document.documentElement.setAttribute('data-theme',nx);
      Store.set('theme',nx);
    });
  });

  App.toast=function(msg){
    var t=document.createElement('div');t.className='toast';t.textContent=msg;
    document.body.appendChild(t);setTimeout(function(){t.remove()},1800);
  };
  App.shuffle=function(a){
    a=a.slice();
    for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}
    return a;
  };
  App.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  window.App=App;
})();
