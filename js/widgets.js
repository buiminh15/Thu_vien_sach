// Các widget tương tác nhúng trong bài học
(function(){
  function on(el,ev,fn){el.addEventListener(ev,fn)}

  function stackExplorer(root){
    var panel=root.querySelector('.info-panel');
    root.querySelectorAll('.layer').forEach(function(b){
      on(b,'click',function(){
        root.querySelectorAll('.layer').forEach(function(x){x.classList.remove('on')});
        b.classList.add('on');
        panel.innerHTML='<h4>'+b.dataset.title+'</h4>'+b.dataset.desc;
      });
    });
  }

  function stepper(root){
    var steps=[].slice.call(root.querySelectorAll('.step'));
    steps.forEach(function(s,i){
      var n=document.createElement('div');n.className='n';n.textContent=i+1;
      var t=document.createElement('div');t.className='t';
      while(s.firstChild)t.appendChild(s.firstChild);
      s.appendChild(n);s.appendChild(t);
    });
    var shown=0;
    var ctl=document.createElement('div');ctl.className='ctl';
    var next=document.createElement('button');next.className='btn';
    var reset=document.createElement('button');reset.className='btn ghost';reset.textContent='↺ Làm lại';
    ctl.appendChild(next);ctl.appendChild(reset);root.appendChild(ctl);
    function render(){
      steps.forEach(function(s,i){s.classList.toggle('show',i<shown)});
      next.textContent=shown===0?'▶ Bắt đầu':(shown>=steps.length?'✔ Hoàn tất':'Bước tiếp theo ('+(shown+1)+'/'+steps.length+')');
      next.disabled=shown>=steps.length;
    }
    on(next,'click',function(){shown++;render()});
    on(reset,'click',function(){shown=0;render()});
    render();
  }

  function selfcheck(root){
    var b=root.querySelector('button');
    on(b,'click',function(){root.classList.toggle('open');b.textContent=root.classList.contains('open')?'Ẩn đáp án':'Xem đáp án'});
  }

  // Cây băm dm-verity: bấm vào khối dữ liệu để "làm hỏng"
  function merkle(root){
    var data=['Khối A','Khối B','Khối C','Khối D'];
    var bad=[false,false,false,false];
    function h(s){var x=0;for(var i=0;i<s.length;i++)x=(x*31+s.charCodeAt(i))>>>0;return x.toString(16).slice(0,6).padStart(6,'0')}
    function draw(){
      var leaf=data.map(function(d,i){return h(d+(bad[i]?'!HACK':''))});
      var good=data.map(function(d){return h(d)});
      var n1=h(leaf[0]+leaf[1]), n2=h(leaf[2]+leaf[3]), r=h(n1+n2);
      var g1=h(good[0]+good[1]), g2=h(good[2]+good[3]), gr=h(g1+g2);
      var any=bad.some(Boolean);
      function node(txt,isBad,cls){return '<div class="hn '+(cls||'')+(isBad?' bad':'')+'">'+txt+'</div>'}
      var html='<div class="lv">'+node('Root '+r,r!==gr)+'</div>'+
        '<div class="lv">'+node('H₁₂ '+n1,n1!==g1)+node('H₃₄ '+n2,n2!==g2)+'</div>'+
        '<div class="lv">'+leaf.map(function(x,i){return node('H('+data[i]+')<br>'+x,bad[i])}).join('')+'</div>'+
        '<div class="lv">'+data.map(function(d,i){return '<div class="hn leaf'+(bad[i]?' bad':'')+'" data-i="'+i+'">💾 '+d+(bad[i]?' ⚠':'')+'</div>'}).join('')+'</div>'+
        '<div class="msg">'+(any?'❌ Root hash lệch so với giá trị tin cậy → đọc khối bị sửa trả về lỗi I/O (hệ thống tệp “hỏng”).':'✅ Mọi khối khớp → root hash khớp giá trị tin cậy. Bấm một khối 💾 để giả lập kẻ tấn công sửa nó.')+'</div>';
      root.innerHTML=html+'<div style="margin-top:8px"><button class="btn ghost" data-reset>↺ Khôi phục</button></div>';
      root.querySelectorAll('.leaf').forEach(function(el){on(el,'click',function(){var i=+el.dataset.i;bad[i]=!bad[i];draw()})});
      on(root.querySelector('[data-reset]'),'click',function(){bad=[false,false,false,false];draw()});
    }
    draw();
  }

  // Chip -> panel thông tin
  function chipinfo(root){
    var panel=root.querySelector('.chipout');
    root.querySelectorAll('.chip').forEach(function(c){
      on(c,'click',function(){
        root.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});
        c.classList.add('on');panel.innerHTML=c.dataset.info;
      });
    });
  }

  // Mô phỏng quyết định cấp quyền (chương 2)
  function permsim(root){
    var perms={
      internet:{name:'INTERNET',lv:'normal',desc:'normal'},
      camera:{name:'CAMERA',lv:'dangerous',desc:'dangerous'},
      netadmin:{name:'NET_ADMIN',lv:'signature',desc:'signature'},
      sos:{name:'(quyền mẫu) signatureOrSystem',lv:'sos',desc:'signatureOrSystem'},
      wss:{name:'WRITE_SECURE_SETTINGS',lv:'dev',desc:'signature|system|development'}
    };
    root.innerHTML=
      '<b>🧪 Mô phỏng: package manager có cấp quyền này không?</b>'+
      '<label>Quyền mà ứng dụng xin (trong <code>&lt;uses-permission&gt;</code>)</label><select data-p>'+
        Object.keys(perms).map(function(k){return '<option value="'+k+'">'+perms[k].name+'  –  '+perms[k].desc+'</option>'}).join('')+'</select>'+
      '<div class="chk"><input type="checkbox" id="ps1"><label for="ps1" style="margin:0;font-weight:400">App ký bằng <b>cùng khóa</b> với bên khai báo quyền (vd: platform key)</label></div>'+
      '<div class="chk"><input type="checkbox" id="ps2"><label for="ps2" style="margin:0;font-weight:400">App nằm trong hệ thống (<code>/system/priv-app/</code>)</label></div>'+
      '<div class="chk"><input type="checkbox" id="ps3" checked><label for="ps3" style="margin:0;font-weight:400">Người dùng bấm “Cài đặt” khi thấy hộp thoại quyền</label></div>'+
      '<div class="chk"><input type="checkbox" id="ps4"><label for="ps4" style="margin:0;font-weight:400">Sau khi cài, dùng <code>pm grant</code> từ adb shell (UID 2000)</label></div>'+
      '<div class="out" data-out></div>';
    var sel=root.querySelector('[data-p]'), out=root.querySelector('[data-out]');
    var c1=root.querySelector('#ps1'),c2=root.querySelector('#ps2'),c3=root.querySelector('#ps3'),c4=root.querySelector('#ps4');
    function run(){
      var p=perms[sel.value], r;
      if(p.lv==='normal') r=['ok','✅ Tự động cấp. Mức <b>normal</b> rủi ro thấp: không hỏi người dùng (nhưng vẫn hiện trong danh sách).'];
      else if(p.lv==='dangerous') r=c3.checked?['ok','✅ Cấp – vì người dùng đã đồng ý ở hộp thoại cài đặt. (Android 4.4: phải chấp nhận tất cả hoặc không cài.)']:['no','❌ Không cài: người dùng hủy thì app không được cài, nên cũng không có quyền.'];
      else if(p.lv==='signature') r=c1.checked?['ok','✅ Cấp – cùng khóa ký với bên khai báo quyền (ở đây là platform key).']:['no','❌ Từ chối – khác khóa ký. Mức <b>signature</b> là mức mạnh nhất, người dùng cũng không thể “ép” cấp.'];
      else if(p.lv==='sos') r=(c1.checked||c2.checked)?['ok','✅ Cấp – <b>signatureOrSystem</b> = (cùng khóa) HOẶC (nằm trong ảnh hệ thống; từ Android 4.4 phải ở <code>/system/priv-app/</code>).']:['no','❌ Từ chối – app thường, khác khóa, không ở priv-app.'];
      else r=(c1.checked||c2.checked)?['ok','✅ Cấp lúc cài (signature|system).']:(c4.checked?['ok','✅ Cấp bằng <code>pm grant</code> – cờ <b>development</b> cho phép cấp/thu hồi theo yêu cầu (từ Android 4.2). Lệnh này cần quyền GRANT_REVOKE_PERMISSIONS, thuộc shell UID 2000.']:['no','❌ Không cấp lúc cài. Nhưng vì có cờ development, có thể cấp sau bằng <code>pm grant</code> – hãy thử tick ô cuối.']);
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    [sel,c1,c2,c3,c4].forEach(function(e){on(e,'change',run)});
    run();
  }

  // Bài thực hành: chuỗi kiểm tra quyền khi gọi Binder (chương 2) – dùng stepper chung

  // Máy tính UID đa người dùng (chương 4)
  function uidcalc(root){
    root.innerHTML='<b>🧮 Máy tính UID: uid = userId × 100000 + (appId % 100000)</b>'+
      '<label>User ID (0 = chủ máy; người dùng phụ bắt đầu từ 10)</label><input type="number" min="0" max="99" value="13" data-u style="width:100%;padding:8px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text)">'+
      '<label>App ID (UID app trên máy 1 người dùng, từ 10000)</label><input type="number" min="1000" max="19999" value="10016" data-a style="width:100%;padding:8px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text)">'+
      '<div class="out ok" data-out></div>';
    var u=root.querySelector('[data-u]'),a=root.querySelector('[data-a]'),o=root.querySelector('[data-out]');
    function run(){
      var uid=parseInt(u.value||0,10),app=parseInt(a.value||0,10);
      var full=uid*100000+(app%100000);
      var name=app>=10000?('u'+uid+'_a'+(app-10000)):('u'+uid+'_system/daemon (app ID &lt; 10000)');
      o.innerHTML='UID thực = <b>'+full+'</b><br>Tên người dùng Linux: <b>'+name+'</b><br>Thư mục dữ liệu: <code>'+(uid===0?'/data/data/…':'/data/user/'+uid+'/…')+'</code>';
    }
    u.addEventListener('input',run);a.addEventListener('input',run);run();
  }

  // Mô phỏng chọn provider JCA (chương 5)
  function provsim(root){
    var provs=[
      {n:'ProviderA',a:['SHA-1','SHA-384']},
      {n:'ProviderB',a:['SHA-256','SHA-512']},
      {n:'ProviderC',a:['SHA-1','SHA-256']}
    ];
    var algos=['SHA-1','SHA-256','SHA-384','SHA-512','SHA-224'];
    root.innerHTML='<b>🧪 Mô phỏng: JCA trả về implementation của provider nào?</b>'+
      '<div class="flow" style="margin:10px 0">'+provs.map(function(p,i){return '<div class="node'+'">'+(i+1)+'. <b>'+p.n+'</b><br><small>'+p.a.join(', ')+'</small></div>'}).join('<span class="arr">›</span>')+'</div>'+
      '<label>Thuật toán</label><select data-al>'+algos.map(function(a){return '<option>'+a+'</option>'}).join('')+'</select>'+
      '<label>Chỉ định provider?</label><select data-pv><option value="">(không chỉ định) MessageDigest.getInstance(alg)</option>'+provs.map(function(p){return '<option>'+p.n+'</option>'}).join('')+'</select>'+
      '<div class="out" data-out></div>';
    var al=root.querySelector('[data-al]'),pv=root.querySelector('[data-pv]'),out=root.querySelector('[data-out]');
    function run(){
      var a=al.value,p=pv.value,r;
      if(!p){
        var f=provs.filter(function(x){return x.a.indexOf(a)>-1})[0];
        r=f?['ok','✅ Trả về bản của <b>'+f.n+'</b> – provider <b>đứng trước nhất</b> trong danh sách ưu tiên có hỗ trợ '+a+'.']:['no','❌ <code>NoSuchAlgorithmException</code> – không provider nào hỗ trợ '+a+'.'];
      }else{
        var q=provs.filter(function(x){return x.n===p})[0];
        r=q.a.indexOf(a)>-1?['ok','✅ Trả về bản của <b>'+p+'</b> dù provider khác ưu tiên cao hơn. (Nhưng đừng chỉ định provider trừ khi bạn tự đóng gói nó hoặc xử lý được fallback.)']:['no','❌ <code>NoSuchAlgorithmException</code> – '+p+' không có '+a+' (hệ thống không tìm tiếp ở provider khác khi bạn đã chỉ định).'];
      }
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    al.addEventListener('change',run);pv.addEventListener('change',run);run();
  }

  // Trình dựng chuỗi transformation cho Cipher (chương 5)
  function ciphersim(root){
    root.innerHTML='<b>🧪 Dựng chuỗi transformation: <code>Cipher.getInstance("thuật toán/chế độ/đệm")</code></b>'+
      '<label>Thuật toán</label><select data-a><option>AES</option><option>DESede</option></select>'+
      '<label>Chế độ (mode)</label><select data-m><option value="">(bỏ trống – chỉ ghi tên thuật toán)</option><option>ECB</option><option>CBC</option><option>CTR</option><option>GCM</option></select>'+
      '<label>Đệm (padding)</label><select data-p><option>PKCS5Padding</option><option>NoPadding</option></select>'+
      '<div class="out" data-out></div>';
    var a=root.querySelector('[data-a]'),m=root.querySelector('[data-m]'),p=root.querySelector('[data-p]'),out=root.querySelector('[data-out]');
    function run(){
      var s,c,msg;
      if(!m.value){
        s=a.value;c='no';msg='❌ <b>Đừng làm vậy!</b> Dùng mặc định của provider – không portable và có thể rơi vào <b>ECB</b> (lộ cấu trúc dữ liệu). Sách gọi đây là “lỗi thiết kế lớn của JCA”.';
      }else{
        s=a.value+'/'+m.value+'/'+p.value;
        if(m.value==='ECB'){c='no';msg='❌ <b>ECB</b>: khối plaintext giống nhau → khối ciphertext giống nhau (hiệu ứng “ECB Penguin”). Tránh dùng cho dữ liệu thật.'}
        else if(m.value==='CBC'){c='ok';msg='✅ <b>CBC</b> (chế độ phản hồi): cần <b>IV ngẫu nhiên</b> cho mỗi lần mã hóa, là block cipher nên cần padding '+(p.value==='NoPadding'?'<b>(NoPadding chỉ OK khi dữ liệu đúng bội số kích thước khối)</b>':'(PKCS5Padding)')+'. Không có xác thực – hãy kèm MAC.'}
        else if(m.value==='CTR'){c='ok';msg='✅ <b>CTR</b>: biến block cipher thành stream cipher nên <b>không cần padding</b> ('+(p.value==='NoPadding'?'đúng':'hãy dùng NoPadding')+'); counter/IV không được lặp. Không tự xác thực.'}
        else{c='ok';msg='✅ <b>GCM</b>: vừa che giấu mẫu vừa <b>xác thực</b> (AEAD) – tag được nối vào cuối ciphertext; hỗ trợ API từ Android 4.4 (Java 7). Không dùng đầu ra của <code>update()</code> cho đến khi <code>doFinal()</code> xác thực tag thành công.'}
      }
      out.className='out '+c;out.innerHTML='<code>"'+s+'"</code><br>'+msg;
    }
    [a,m,p].forEach(function(e){e.addEventListener('change',run)});run();
  }

  // Mô phỏng kiểm tra chuỗi chứng chỉ của Android (chương 6)
  function chainsim(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Mô phỏng: Android có chấp nhận chuỗi chứng chỉ của máy chủ không?</b>'+
      '<label>Neo tin cậy (trust anchor) mà chuỗi dẫn tới</label><select data-a '+st+'><option value="sys">CA có sẵn của hệ thống (system:)</option><option value="usr">CA do người dùng cài (user:)</option><option value="none">Không có neo tin cậy nào</option></select>'+
      '<div class="chk"><input type="checkbox" id="cs1"><label for="cs1" style="margin:0;font-weight:400">Chứng chỉ máy chủ đã hết hạn</label></div>'+
      '<div class="chk"><input type="checkbox" id="cs2"><label for="cs2" style="margin:0;font-weight:400">Serial của chứng chỉ máy chủ nằm trong <code>serial_blacklist</code></label></div>'+
      '<div class="chk"><input type="checkbox" id="cs3"><label for="cs3" style="margin:0;font-weight:400">Băm khóa công khai của một CA trong chuỗi nằm trong <code>pubkey_blacklist</code></label></div>'+
      '<div class="chk"><input type="checkbox" id="cs4"><label for="cs4" style="margin:0;font-weight:400">Chứng chỉ đã bị CA thu hồi trong CRL/OCSP (chỉ có ở phía CA)</label></div>'+
      '<label>Pin của hệ thống cho host này (file <code>pins</code>)</label><select data-p '+st+'><option value="none">Không có pin</option><option value="ok">Có pin, chuỗi chứa khóa được pin</option><option value="bad">Có pin, chuỗi KHÔNG chứa khóa được pin</option></select>'+
      '<label>API dùng để kiểm tra</label><select data-api '+st+'><option value="plain">X509TrustManager.checkServerTrusted(chain, authType)</option><option value="ext">X509TrustManagerExtensions.checkServerTrusted(chain, authType, host)</option><option value="ssl">SSLSocket / HttpsURLConnection mặc định (JSSE)</option></select>'+
      '<div class="out" data-out></div>';
    var q=function(s){return root.querySelector(s)};
    var a=q('[data-a]'),p=q('[data-p]'),api=q('[data-api]'),c1=q('#cs1'),c2=q('#cs2'),c3=q('#cs3'),c4=q('#cs4'),out=q('[data-out]');
    function run(){
      var r;
      if(a.value==='none')r=['no','❌ <code>CertificateException</code>: chuỗi không dẫn tới neo tin cậy nào.'];
      else if(c1.checked)r=['no','❌ <code>CertificateException</code>: chứng chỉ đã hết hạn.'];
      else if(c2.checked)r=['no','❌ Bị chặn bởi <b>serial blacklist</b> (báo lỗi như thể chứng chỉ bị thu hồi).'];
      else if(c3.checked)r=['no','❌ Bị chặn bởi <b>public key blacklist</b> (CA bị xâm phạm) – kể cả khi CA nằm trong kho tin cậy.'];
      else if(p.value==='bad'&&api.value!=='plain')r=['no','❌ Thất bại ở bước <b>pin</b>: chuỗi không chứa khóa được pin cho host. '+(api.value==='ssl'?'(Handshake JSSE kiểm pin ở tầng TLS nên kết nối không được thiết lập.)':'')];
      else{
        var n=[];
        if(p.value==='bad'&&api.value==='plain')n.push('⚠ Pin <b>bị bỏ qua</b>: <code>checkServerTrusted()</code> chuẩn không tra danh sách pin – chạy Android 4.2+ chưa chắc có pin hệ thống nếu thư viện không dùng X509TrustManagerExtensions.');
        if(c4.checked)n.push('⚠ Việc chứng chỉ bị thu hồi trong CRL/OCSP <b>không được phát hiện</b>: TrustManager mặc định của Android <b>tắt kiểm tra thu hồi online</b>.');
        if(a.value==='usr')n.push('ℹ CA do người dùng cài: Android 4.4+ hiện cảnh báo “mạng có thể bị giám sát”; ứng dụng không pin sẽ không phân biệt được proxy chặn bắt.');
        r=['ok','✅ Chuỗi được chấp nhận.'+(n.length?'<br>'+n.join('<br>'):'')];
      }
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    [a,p,api,c1,c2,c3,c4].forEach(function(e){e.addEventListener('change',run)});run();
  }

  // Giải mã tên tệp key blob của keystore (chương 7)
  function blobdec(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit;font-family:Consolas,monospace"';
    root.innerHTML='<b>🔎 Giải mã tên tệp trong <code>/data/misc/keystore/user_0/</code></b>'+
      '<label>Nhập tên tệp (dạng <code>UID_LOẠI_alias</code>) hoặc chọn mẫu</label>'+
      '<input type="text" data-in value="10019_USRPKEY_myKey" '+st+'>'+
      '<div class="chips" data-ex></div>'+
      '<div class="out" data-out></div>';
    var inp=root.querySelector('[data-in]'),out=root.querySelector('[data-out]'),ex=root.querySelector('[data-ex]');
    ['1000_CACERT_cacert','1000_USRCERT_test','10019_USRPKEY_myKey','1310044_USRPKEY_key1','.masterkey'].forEach(function(s){
      var b=document.createElement('button');b.className='chip';b.textContent=s;b.onclick=function(){inp.value=s;run()};ex.appendChild(b);
    });
    var types={CACERT:'chứng chỉ CA',USRCERT:'chứng chỉ người dùng (user certificate)',USRPKEY:'khóa riêng (private key)'};
    function run(){
      var v=inp.value.trim(),m=/^(\d+)_([A-Z]+)_(.+)$/.exec(v);
      if(v==='.masterkey'){out.className='out ok';out.innerHTML='🗝 <b>Khóa chủ (master key)</b>: mã hóa bằng AES-128 từ khóa suy ra bằng <b>PBKDF2 (8192 lần lặp, salt 128-bit)</b> từ mật khẩu/PIN/mẫu hình mở khóa màn hình. Muốn đọc blob khác phải có khóa này.';return}
      if(!m){out.className='out no';out.innerHTML='Không đúng dạng <code>UID_LOẠI_alias</code>.';return}
      var uid=+m[1],user=Math.floor(uid/100000),app=uid%100000;
      var who=app===1000?'system':(app>=10000?'app u'+user+'_a'+(app-10000):'dịch vụ hệ thống (UID '+app+')');
      out.className='out ok';
      out.innerHTML='Chủ sở hữu: UID <b>'+uid+'</b> → Android user <b>'+user+'</b>, app ID <b>'+app+'</b> ('+who+')<br>Loại: <b>'+m[2]+'</b> = '+(types[m[2]]||'không rõ')+'<br>Alias: <b>'+m[3].replace(/</g,'&lt;')+'</b><br><span style="font-weight:400">Chỉ chủ sở hữu (theo app ID) mới truy cập được qua dịch vụ keystore.</span>';
    }
    inp.addEventListener('input',run);run();
  }

  // Mô phỏng kiểm tra quyền của AccountManagerService (chương 8)
  function acctsim(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    var ops={
      getAccounts:{n:'getAccounts() / hasFeatures()',any:['GET_ACCOUNTS']},
      addAccount:{n:'addAccount() – hiện UI của authenticator',any:['MANAGE_ACCOUNTS'],mod:1},
      addExp:{n:'addAccountExplicitly() – thêm âm thầm',any:['AUTHENTICATE_ACCOUNTS'],uid:1,mod:1},
      getPassword:{n:'getPassword() / setPassword() / getUserData() / peekAuthToken() / setAuthToken()',any:['AUTHENTICATE_ACCOUNTS'],uid:1},
      remove:{n:'removeAccount() / updateCredentials() / confirmCredentials() / clearPassword()',any:['MANAGE_ACCOUNTS'],mod:1},
      getTok:{n:'getAuthToken()',any:['USE_CREDENTIALS'],token:1},
      inval:{n:'invalidateAuthToken()',any:['USE_CREDENTIALS','MANAGE_ACCOUNTS']}
    };
    var perms=['GET_ACCOUNTS','MANAGE_ACCOUNTS','AUTHENTICATE_ACCOUNTS','USE_CREDENTIALS'];
    root.innerHTML='<b>🧪 Mô phỏng: AccountManagerService có cho phép thao tác này không?</b>'+
      '<label>Thao tác</label><select data-op '+st+'>'+Object.keys(ops).map(function(k){return '<option value="'+k+'">'+ops[k].n+'</option>'}).join('')+'</select>'+
      '<label>Quyền mà app gọi đang nắm giữ</label>'+perms.map(function(p,i){return '<div class="chk"><input type="checkbox" id="as'+i+'" data-p="'+p+'"><label for="as'+i+'" style="margin:0;font-weight:400"><code>'+p+'</code></label></div>'}).join('')+
      '<label>Bối cảnh</label>'+
      '<div class="chk"><input type="checkbox" id="asu"><label for="asu" style="margin:0;font-weight:400">App gọi có <b>cùng UID</b> với authenticator của loại tài khoản đó</label></div>'+
      '<div class="chk"><input type="checkbox" id="asm"><label for="asm" style="margin:0;font-weight:400">Người dùng hiện tại có restriction <code>DISALLOW_MODIFY_ACCOUNTS</code></label></div>'+
      '<div class="chk"><input type="checkbox" id="ast"><label for="ast" style="margin:0;font-weight:400">Đã có <b>grant</b> cho loại token (người dùng từng bấm cho phép) hoặc app là app hệ thống đặc quyền</label></div>'+
      '<div class="out" data-out></div>';
    var q=function(s){return root.querySelector(s)};
    var op=q('[data-op]'),out=q('[data-out]'),u=q('#asu'),m=q('#asm'),t=q('#ast');
    var pc=[].slice.call(root.querySelectorAll('[data-p]'));
    function run(){
      var o=ops[op.value],has=function(n){return pc.some(function(c){return c.dataset.p===n&&c.checked})};
      var ok=o.any.some(has),r;
      if(!ok)r=['no','❌ <code>SecurityException</code>: thiếu quyền '+o.any.map(function(x){return '<code>'+x+'</code>'}).join(' hoặc ')+'.'];
      else if(o.uid&&!u.checked)r=['no','❌ Từ chối: thao tác này còn yêu cầu app gọi có <b>cùng UID với authenticator</b> (cùng app hoặc cùng shared user ID).'];
      else if(o.mod&&m.checked)r=['no','❌ Từ chối: người dùng có <code>DISALLOW_MODIFY_ACCOUNTS</code> không được thêm/xóa tài khoản dù app có quyền.'];
      else if(o.token&&!t.checked&&!u.checked)r=['ask','🟡 Hệ thống hiện <b>hộp thoại xin phép</b> (tên app, loại tài khoản, mô tả quyền truy cập). Nếu người dùng đồng ý, grant được lưu vào bảng <code>grants</code> và lần sau không hỏi lại.'];
      else r=['ok','✅ Cho phép.'+(o.token?' (Cùng UID với authenticator hoặc app hệ thống đặc quyền → không cần hộp thoại; hoặc đã có grant.)':'')];
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    [op,u,m,t].concat(pc).forEach(function(e){e.addEventListener('change',run)});run();
  }

  // Máy tính cờ chính sách device admin (chương 9)
  function bitflags(root){
    var pol=['limit-password','watch-login','reset-password','force-lock','wipe-data','set-global-proxy','expire-password','encrypted-storage','disable-camera','disable-keyguard-features'];
    root.innerHTML='<b>🧮 Cờ <code>&lt;policies flags="…"&gt;</code> trong device_policies.xml</b>'+
      '<p style="margin:6px 0;font-size:.9rem">Bit thứ <i>n</i> bật = chính sách số <i>n</i> được cấp. Tick các chính sách hoặc nhập số để giải mã.</p>'+
      '<div data-c style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:2px 12px"></div>'+
      '<label>Giá trị flags (thập phân)</label><input type="number" min="0" max="1023" data-n style="width:100%;padding:8px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text)">'+
      '<div class="chips" data-ex></div><div class="out ok" data-out></div>';
    var box=root.querySelector('[data-c]'),n=root.querySelector('[data-n]'),out=root.querySelector('[data-out]'),ex=root.querySelector('[data-ex]');
    var cbs=pol.map(function(p,i){var d=document.createElement('div');d.className='chk';d.innerHTML='<input type="checkbox" id="bf'+i+'"><label for="bf'+i+'" style="margin:0;font-weight:400"><code>'+i+' · '+p+'</code></label>';box.appendChild(d);return d.firstChild});
    function fromCbs(){var v=0;cbs.forEach(function(c,i){if(c.checked)v|=1<<i});n.value=v;show(v)}
    function show(v){out.innerHTML='flags = <b>'+v+'</b> = 0x'+v.toString(16).toUpperCase()+' = 0b'+v.toString(2).padStart(10,'0')+'<br>Bật: '+(pol.filter(function(p,i){return v&(1<<i)}).map(function(p){return '<code>'+p+'</code>'}).join(' ')||'(không có)')}
    cbs.forEach(function(c){c.addEventListener('change',fromCbs)});
    n.addEventListener('input',function(){var v=parseInt(n.value||0,10)&1023;cbs.forEach(function(c,i){c.checked=!!(v&(1<<i))});show(v)});
    [['28 (Google Play Services)',28],['475 (Email)',475],['1023 (DeviceAdminSample)',1023]].forEach(function(e){var b=document.createElement('button');b.className='chip';b.textContent=e[0];b.onclick=function(){n.value=e[1];n.dispatchEvent(new Event('input'))};ex.appendChild(b)});
    n.value=28;n.dispatchEvent(new Event('input'));
  }

  // Định tuyến VPN theo người dùng (chương 9)
  function vpnroute(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Gói tin của người dùng nào đi qua VPN nào? (Android 4.4)</b>'+
      '<p style="margin:6px 0;font-size:.9rem">Giả sử owner (user 0) bật VPN <code>tun0</code>, user 10 bật VPN <code>tun1</code>, và có restricted profile user 13.</p>'+
      '<label>Người dùng gửi gói tin</label><select data-u '+st+'><option value="0">User 0 – owner</option><option value="10">User 10 – secondary (có VPN riêng)</option><option value="11">User 11 – secondary (không bật VPN)</option><option value="13">User 13 – restricted profile</option></select>'+
      '<label>Ứng dụng của người dùng đó (app ID)</label><input type="number" data-a value="10016" '+st+'>'+
      '<div class="out ok" data-out></div>';
    var u=root.querySelector('[data-u]'),a=root.querySelector('[data-a]'),out=root.querySelector('[data-out]');
    function run(){
      var uid=parseInt(u.value,10)*100000+(parseInt(a.value||0,10)%100000),uu=parseInt(u.value,10),r,cls='ok';
      var head='UID = <b>'+uid+'</b><br>';
      if(uid===1016){r='UID 1016 là user <code>vpn</code> (mtpd/racoon của VPN legacy) → <b>được miễn</b>, không bị định tuyến lại.'}
      else if(uu===0||uu===13){r='Khớp luật <code>owner UID match '+(uu===0?'0-99999':'1300000-1399999')+'</code> → chuỗi <code>st_mangle_tun0_OUTPUT</code> → <b>mark 0x3c</b> → <code>ip rule fwmark 0x3c lookup 60</code> → <code>default dev <b>tun0</b></code>.'+(uu===13?'<br>Restricted profile <b>dùng chung VPN của owner</b>.':'')}
      else if(uu===10){r='Khớp <code>owner UID match 1000000-1099999</code> → <code>st_mangle_tun1_OUTPUT</code> → <b>mark 0x3d</b> → bảng 61 → <code>default dev <b>tun1</b></code>. Lưu lượng được <b>cô lập</b> khỏi người dùng khác.'}
      else{r='Không có luật nào khớp (user 11 không có VPN) → gói tin đi theo <b>định tuyến thường</b>, không qua tun0/tun1.';cls='ask'}
      out.className='out '+cls;out.innerHTML=head+r;
    }
    u.addEventListener('change',run);a.addEventListener('input',run);run();
  }

  // Ước lượng thời gian brute-force PIN theo KDF (chương 10)
  function kdfcalc(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Brute-force PIN tốn bao lâu? (số liệu của sách: máy desktop, 1 luồng)</b>'+
      '<label>Số chữ số của PIN: <b data-dv>4</b></label><input type="range" min="3" max="10" value="4" data-d style="width:100%">'+
      '<label>Hàm dẫn xuất khóa</label><select data-k '+st+'><option value="5">PBKDF2 – Android 3.0–4.3 (~5 ms/PIN)</option><option value="230">scrypt – Android 4.4 (~230 ms/PIN)</option></select>'+
      '<div class="out ok" data-out></div>';
    var d=root.querySelector('[data-d]'),dv=root.querySelector('[data-dv]'),k=root.querySelector('[data-k]'),out=root.querySelector('[data-out]');
    function fmt(ms){var s=ms/1000;if(s<60)return s.toFixed(1)+' giây';var m=s/60;if(m<60)return m.toFixed(1)+' phút';var h=m/60;if(h<48)return h.toFixed(1)+' giờ';var dd=h/24;if(dd<365)return dd.toFixed(1)+' ngày';return (dd/365).toFixed(1)+' năm'}
    function run(){
      var n=+d.value,combos=Math.pow(10,n),ms=combos*(+k.value);
      dv.textContent=n;
      out.className='out '+(ms/1000<3600?'no':ms/1000<86400*30?'ask':'ok');
      out.innerHTML='Số PIN có thể: <b>'+combos.toLocaleString('vi-VN')+'</b><br>Thử hết (tệ nhất): <b>'+fmt(ms)+'</b><br><span style="font-weight:400">scrypt chậm hơn PBKDF2 ~46 lần cho cùng một lần thử (230/5). Đây là lý do 4.4 chuyển sang scrypt: tốn <b>bộ nhớ</b> nên khó song song hóa trên GPU/ASIC.</span>';
    }
    d.addEventListener('input',run);k.addEventListener('change',run);run();
  }

  // Giải mã APDU lệnh (chương 11)
  function apdudec(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit;font-family:Consolas,monospace"';
    root.innerHTML='<b>🔎 Giải mã command APDU (ISO 7816-4)</b><label>Nhập hex (không cần khoảng trắng)</label><input type="text" data-h value="00A4040006A00000000101" '+st+'><div class="chips" data-ex></div><div class="out ok" data-out></div>';
    var h=root.querySelector('[data-h]'),out=root.querySelector('[data-out]'),ex=root.querySelector('[data-ex]');
    [['SELECT rỗng (ISD)','00A4040000'],['SELECT AID A0000000010101','00A4040007A0000000010101'],['Lệnh riêng CLA=80 INS=01','8001020300'],['Phản hồi thành công 9000','9000']].forEach(function(e){var b=document.createElement('button');b.className='chip';b.textContent=e[0];b.onclick=function(){h.value=e[1];run()};ex.appendChild(b)});
    var ins={'A4':'SELECT','B0':'READ BINARY','CA':'GET DATA','C0':'GET RESPONSE','D6':'UPDATE BINARY','20':'VERIFY'};
    var sw={'9000':'Thành công','6E00':'CLA không được hỗ trợ','6D00':'INS không được hỗ trợ','6A82':'Không tìm thấy tệp/ứng dụng','6985':'Điều kiện sử dụng không thỏa','6700':'Độ dài sai'};
    function run(){
      var v=h.value.replace(/[^0-9a-fA-F]/g,'').toUpperCase();
      if(v.length%2||v.length<4){out.className='out no';out.textContent='Hex không hợp lệ hoặc quá ngắn.';return}
      if(v.length===4){var k=sw[v];out.className='out ok';out.innerHTML='Có vẻ là <b>status word (SW1 SW2)</b> của R-APDU: <b>'+v+'</b>'+(k?' – '+k:'')+'.';return}
      if(v.length<8){out.className='out no';out.textContent='Command APDU cần header 4 byte (CLA INS P1 P2).';return}
      var b=v.match(/../g),cla=b[0],i=b[1],p1=b[2],p2=b[3],rest=b.slice(4),lc=null,data=[],le=null;
      if(rest.length===1){le=rest[0]}
      else if(rest.length>1){lc=parseInt(rest[0],16);data=rest.slice(1,1+lc);if(rest.length>1+lc)le=rest[1+lc]}
      var s='<table style="width:100%;font-size:.9rem"><tr><td>CLA</td><td><b>'+cla+'</b></td><td>lớp lệnh</td></tr><tr><td>INS</td><td><b>'+i+'</b></td><td>'+(ins[i]||'lệnh riêng/không rõ')+'</td></tr><tr><td>P1 P2</td><td><b>'+p1+' '+p2+'</b></td><td>tham số</td></tr>';
      if(lc!==null)s+='<tr><td>Lc</td><td><b>'+rest[0]+'</b> ('+lc+')</td><td>độ dài dữ liệu'+(data.length<lc?' ⚠ thiếu byte':'')+'</td></tr><tr><td>Data</td><td colspan="2"><b>'+(data.join(' ')||'—')+'</b>'+(cla==='00'&&i==='A4'&&p1==='04'?' ← AID (RID 5 byte + PIX ≤ 11 byte)':'')+'</td></tr>';
      if(le!==null)s+='<tr><td>Le</td><td><b>'+le+'</b></td><td>'+(le==='00'?'tối đa (256 byte)':'số byte phản hồi mong đợi')+'</td></tr>';
      s+='</table>';
      if(cla==='00'&&i==='A4'&&p1==='04'&&!data.length)s+='<br>⇒ <b>SELECT rỗng</b>: chọn ISD (Card Manager) và trả thông tin FCI về thẻ.';
      out.className='out ok';out.innerHTML=s;
    }
    h.addEventListener('input',run);run();
  }

  // Định tuyến AID (chương 11)
  function aidroute(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Bộ điều khiển NFC chuyển lệnh SELECT đi đâu? (Android 4.4)</b>'+
      '<div class="flow" style="margin:8px 0"><div class="node">Bảng định tuyến AID<br><small>SE (off-host): F0000000000001, F0000000000002<br>HCE: A0000000010101 (app A), A0000000010101 (app B, trùng!), B0000000000009 (app A)</small></div></div>'+
      '<label>AID trong lệnh SELECT của đầu đọc</label><select data-a '+st+'><option value="F0000000000001">F0000000000001</option><option value="A0000000010101">A0000000010101</option><option value="B0000000000009">B0000000000009</option><option value="D2760000850101">D2760000850101 (không ai đăng ký)</option></select>'+
      '<div class="out ok" data-out></div>';
    var a=root.querySelector('[data-a]'),out=root.querySelector('[data-out]');
    function run(){
      var v=a.value,r;
      if(v==='F0000000000001'||v==='F0000000000002')r=['ok','✅ Có trong bảng <b>off-host</b> của NFC controller → APDU gửi <b>thẳng tới Secure Element</b>, không qua Android OS (ngay cả khi màn hình khóa).'];
      else if(v==='A0000000010101')r=['ask','🟡 Hai HCE service cùng khai báo AID này → hệ thống hiện <b>hộp thoại chọn</b> app xử lý; sau khi người dùng xác nhận, mọi lệnh sau định tuyến tới app đó. (Cùng AID group: AID còn lại trong nhóm cũng đi về cùng service.)'];
      else if(v==='B0000000000009')r=['ok','✅ Chỉ một HCE service đăng ký → <code>NfcService</code> tra <code>RegisteredAidCache.resolveAidPrefix()</code>, bind tới service và gửi <code>MSG_COMMAND_APDU</code> → <code>processCommandApdu()</code>. Cần màn hình bật; nếu <code>requireDeviceUnlock=true</code> thì máy phải mở khóa.'];
      else r=['no','❌ Android 4.4 chuyển mọi AID <b>không có trong bảng</b> về host; NfcService không tìm được HCE service khớp → trả <b>lỗi</b> cho đầu đọc.'];
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    a.addEventListener('change',run);run();
  }

  // SELinux: mô phỏng quyết định truy cập (chương 12)
  function sesim(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Hệ thống có cho phép truy cập không? (DAC → SELinux)</b>'+
      '<div class="chk"><input type="checkbox" id="se1" checked><label for="se1" style="margin:0;font-weight:400">DAC (UID/GID, quyền tệp) <b>cho phép</b></label></div>'+
      '<label>Chế độ SELinux toàn cục</label><select data-m '+st+'><option value="enf">Enforcing</option><option value="per">Permissive</option><option value="dis">Disabled</option></select>'+
      '<div class="chk"><input type="checkbox" id="se2"><label for="se2" style="margin:0;font-weight:400">Domain của tiến trình được đặt <code>permissive</code> (câu lệnh <code>permissive domain;</code>)</label></div>'+
      '<div class="chk"><input type="checkbox" id="se3"><label for="se3" style="margin:0;font-weight:400">Có luật <code>allow source target:class perm</code> khớp (kể cả qua <code>unconfineddomain</code>)</label></div>'+
      '<div class="out" data-out></div>';
    var q=function(s){return root.querySelector(s)};
    var d=q('#se1'),m=q('[data-m]'),p=q('#se2'),a=q('#se3'),out=q('[data-out]');
    function run(){
      var r;
      if(!d.checked)r=['no','❌ <b>Từ chối</b> ở bước DAC. SELinux chỉ được hỏi khi DAC đã cho phép; DAC từ chối là quyết định cuối cùng.'];
      else if(m.value==='dis')r=['ok','✅ Cho phép – SELinux tắt (không nạp policy), chỉ có DAC.'];
      else if(a.checked)r=['ok','✅ <b>Cho phép</b> – DAC cho phép và có luật allow khớp. (AVC cache quyết định này cho lần sau.)'];
      else if(m.value==='per'||p.checked)r=['ask','🟡 <b>Cho phép nhưng ghi log</b>: không có luật allow, nhưng '+(m.value==='per'?'SELinux đang ở permissive':'domain được đặt permissive')+' nên chỉ <code>avc: denied</code> được ghi vào kernel log (xem bằng <code>dmesg | grep avc:</code>), không bị chặn.'];
      else r=['no','❌ <b>Từ chối</b> và ghi <code>avc: denied { perm } for … scontext=… tcontext=… tclass=…</code>. Không có luật allow nào, SELinux enforcing và domain không permissive (mặc định là từ chối).'];
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    [d,m,p,a].forEach(function(e){e.addEventListener('change',run)});run();
  }

  // Phân tích security context + seapp_contexts (chương 12)
  function seapp(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 Zygote gán domain nào cho tiến trình này? (seapp_contexts, Android 4.4.3)</b>'+
      '<label>Tiến trình</label><select data-p '+st+'>'+
      '<option value="sys">system_server (isSystemServer=true)</option><option value="system">App chạy user <code>system</code></option><option value="radio">App chạy user <code>radio</code></option><option value="nfc">App chạy user <code>nfc</code></option><option value="app:default">App thường, seinfo=default</option><option value="app:platform">App ký platform key (seinfo=platform)</option><option value="app:shared">App ký shared key (seinfo=shared)</option><option value="app:media">App ký media key (seinfo=media)</option><option value="app:release">App ký release key (seinfo=release)</option><option value="iso">Isolated service</option><option value="shell">Shell (adb)</option></select>'+
      '<div class="out ok" data-out></div>';
    var p=root.querySelector('[data-p]'),out=root.querySelector('[data-out]');
    var map={sys:['system','(không áp type)'],system:['system_app','system_data_file'],radio:['radio','radio_data_file'],nfc:['nfc','nfc_data_file'],'app:default':['untrusted_app','app_data_file'],'app:platform':['platform_app','platform_app_data_file'],'app:shared':['shared_app','platform_app_data_file'],'app:media':['media_app','platform_app_data_file'],'app:release':['release_app','platform_app_data_file'],iso:['isolated_app','—'],shell:['shell','shell_data_file']};
    function run(){var r=map[p.value];out.innerHTML='Context tiến trình: <b>u:r:'+r[0]+':s0</b><br>Kiểu tệp dữ liệu: <b>'+(r[1]==='(không áp type)'||r[1]==='—'?r[1]:'u:object_r:'+r[1]+':s0')+'</b><br><span style="font-weight:400">Android chỉ dùng trường <i>type</i>: user luôn là <code>u</code>, role <code>r</code> (tiến trình) hoặc <code>object_r</code> (đối tượng), level <code>s0</code>. App thường (<code>_app</code>) rơi vào <code>untrusted_app</code>; <b>seinfo</b> (từ chứng chỉ ký) quyết định domain đặc biệt.</span>'}
    p.addEventListener('change',run);run();
  }

  // adbd chạy với quyền nào theo loại build (chương 13)
  function adbroot(root){
    var st='style="width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--line);background:var(--surface);color:var(--text);font:inherit"';
    root.innerHTML='<b>🧪 adbd chạy với danh tính nào?</b>'+
      '<label>Loại build (<code>ro.build.type</code>)</label><select data-b '+st+'><option value="user">user – máy thương mại</option><option value="userdebug">userdebug</option><option value="eng">eng – engineering</option></select>'+
      '<div class="chk"><input type="checkbox" id="ar1"><label for="ar1" style="margin:0;font-weight:400">Đã chạy <code>adb root</code> trên host</label></div>'+
      '<div class="out" data-out></div>';
    var b=root.querySelector('[data-b]'),c=root.querySelector('#ar1'),out=root.querySelector('[data-out]');
    function run(){
      var t=b.value,r,info;
      var shell='<b>shell</b> (UID/GID 2000), GID phụ (graphics, input, log, mount, adb, sdcard_rw, inet…), capability bounding set = <code>CAP_SETUID|CAP_SETGID</code> (<code>0xc0</code>)';
      if(t==='user'){
        info='<code>ro.secure=1</code>, ADB tắt mặc định, <b>không có lệnh su</b>, chỉ debug app có <code>debuggable=true</code>.';
        r=c.checked?['no','❌ <code>adb root</code> bị từ chối (“adbd cannot run as root in production builds”): <code>ALLOW_ADBD_ROOT</code> không được biên dịch. adbd vẫn chạy: '+shell+'.<br>'+info]:['ok','adbd chạy bằng '+shell+'.<br>'+info]}
      else if(t==='userdebug'){
        info='<code>ro.secure=1</code>; ADB bật mặc định; debug được mọi app; có <code>su</code> (chỉ cho UID root và shell).';
        r=c.checked?['ask','⚠ <code>adb root</code> đặt <code>service.adb.root=1</code> và <b>khởi động lại adbd chạy root</b> (UID 0, full capability). Shell mới có UID/GID 0 – nhưng <b>context SELinux vẫn là <code>u:r:shell:s0</code></b> (ở 4.4 domain shell là unconfined).<br>'+info]:['ok','adbd chạy bằng '+shell+' (đã bỏ quyền root dù <code>ro.secure=1</code>). Có thể dùng <code>su</code> hoặc <code>adb root</code>.<br>'+info]}
      else{
        info='<code>ro.secure=0</code> (mặc định của eng): adbd <b>không hạ quyền</b>.';
        r=['ask','⚠ adbd chạy <b>root</b> (UID/GID 0, không GID phụ, full capability set <code>0xfff…f</code>). '+(c.checked?'<code>adb root</code> không thay đổi gì thêm.<br>':'<br>')+info+' Bao gồm hầu hết module, bật ADB mặc định, có <code>su</code>.']}
      out.className='out '+r[0];out.innerHTML=r[1];
    }
    b.addEventListener('change',run);c.addEventListener('change',run);run();
  }

  window.Widgets={
    init:function(root){
      root.querySelectorAll('.stack-explorer').forEach(stackExplorer);
      root.querySelectorAll('[data-stepper]').forEach(stepper);
      root.querySelectorAll('.selfcheck').forEach(selfcheck);
      root.querySelectorAll('[data-merkle]').forEach(merkle);
      root.querySelectorAll('[data-chipinfo]').forEach(chipinfo);
      root.querySelectorAll('[data-permsim]').forEach(permsim);
      root.querySelectorAll('[data-uidcalc]').forEach(uidcalc);
      root.querySelectorAll('[data-chainsim]').forEach(chainsim);
      root.querySelectorAll('[data-blobdec]').forEach(blobdec);
      root.querySelectorAll('[data-acctsim]').forEach(acctsim);
      root.querySelectorAll('[data-adbroot]').forEach(adbroot);
      root.querySelectorAll('[data-sesim]').forEach(sesim);
      root.querySelectorAll('[data-seapp]').forEach(seapp);
      root.querySelectorAll('[data-apdudec]').forEach(apdudec);
      root.querySelectorAll('[data-aidroute]').forEach(aidroute);
      root.querySelectorAll('[data-kdfcalc]').forEach(kdfcalc);
      root.querySelectorAll('[data-bitflags]').forEach(bitflags);
      root.querySelectorAll('[data-vpnroute]').forEach(vpnroute);
      root.querySelectorAll('[data-provsim]').forEach(provsim);
      root.querySelectorAll('[data-ciphersim]').forEach(ciphersim);
    }
  };
})();
