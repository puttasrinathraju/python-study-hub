
/* ---------- Big Tests: one per chapter, exam mode (answer all, then see the score) ---------- */
var BT = window.BIGTESTS || {}, BT_PASS = 80;
var BT_LV = { 1: 'Basic', 2: 'Medium', 3: 'Challenge' }, BT_TY = { mc: 'Choose', out: 'Predict the output', bug: 'Find the fix', code: 'Write code' };
function btScore(cid){ return store.get('bt', {})[cid] || null; }
function btSecId(cid, sec){ var k = byId[cid].body.filter(function(b){ return b.t === 'h'; }).findIndex(function(b){ return b.text === sec; }); return k < 0 ? null : cid + '-s' + (k + 1); }
function btNorm(t){ return String(t || '').replace(/\r/g, '').split('\n').map(function(l){ return l.replace(/\s+$/, ''); }).join('\n').replace(/^\n+/, '').replace(/\n+$/, ''); }
function btCTA(c){
  var L = BT[c.id], s = btScore(c.id);
  return '<div class="btcta"><div><b>' + c.num + '.1 Big Test: ' + esc(c.nav || c.title) + '</b><span>' + L.length + ' questions on this chapter only, from basic to challenge. Score ' + BT_PASS + '% to pass.' + (s ? ' Your best: <b>' + s.best + '%</b>.' : '') + '</span></div><button class="btn pri" type="button" data-go="test-' + c.id + '">Take the Big Test →</button></div>';
}
function vBigTest(cid){
  var c = byId[cid], L = BT[cid], ans = {}, finished = false, warned = false, s = btScore(cid);
  var nLv = { 1: 0, 2: 0, 3: 0 }; L.forEach(function(x){ nLv[x.lv]++; });
  var h = '<header class="chead"><div class="num">Part ' + c.part + ' · Big Test ' + c.num + '.1</div><h1>' + c.num + '.1 Big Test: ' + esc(c.nav || c.title) + '</h1>' +
    '<p class="lead">' + L.length + ' questions on <b>' + esc(c.title) + '</b> only, from basic to challenge. Answer them all, then press <b>Finish</b> to see your score and every explanation. Score ' + BT_PASS + '% or more to pass.</p>' +
    '<div class="meta"><span class="pill lv1">' + nLv[1] + ' Basic</span><span class="pill lv2">' + nLv[2] + ' Medium</span><span class="pill lv3">' + nLv[3] + ' Challenge</span><span class="pill">about ' + Math.round(L.length * 1.4) + ' min</span>' + (s ? '<span class="pill">Your best: ' + s.best + '%</span>' : '') + '</div></header>' +
    '<div id="btSum"></div><div class="btbar" id="btBar"><span id="btCount"></span><button class="btn pri" type="button" id="btFin">Finish and see my score</button></div><div class="btlist">';
  L.forEach(function(x, i){
    h += '<div class="btq" id="btq-' + i + '"><div class="btqh"><span class="btn-n">' + (i + 1) + '</span><span class="pill lv' + x.lv + '">' + BT_LV[x.lv] + '</span><span class="pill">' + BT_TY[x.ty] + '</span></div><p class="btqq">' + md(x.q) + '</p>';
    if (x.ty === 'bug') h += cell(x.c, null, { ttl: 'Line ' + x.line + ' has the bug' }) + '<div class="btwant"><div><span>It should print</span><pre>' + esc(x.want) + '</pre></div><div><span>But it gives</span><pre>' + esc(x.got) + '</pre></div></div><p class="btqq" style="margin-top:4px">Replace line ' + x.line + ' with:</p>';
    else if (x.c) h += cell(x.c, null);
    if (x.ty === 'code') h += '<div class="btwant"><div><span>Your code should print exactly</span><pre>' + esc(x.out) + '</pre></div></div><div class="btcode"></div>';
    else h += '<div class="opts">' + x.o.map(function(o, j){ return '<button class="opt" type="button" data-q="' + i + '" data-j="' + j + '"><span class="l">' + 'ABCD'.charAt(j) + '</span><span class="t">' + md(o) + '</span></button>'; }).join('') + '</div>';
    h += '<div class="btfb" hidden></div></div>';
  });
  h += '</div><div class="row" style="justify-content:center"><button class="btn pri" type="button" id="btFin2">Finish and see my score</button></div>';
  var nx = SEQ[c.seq + 1];
  h += '<nav class="endnav"><button class="btn" type="button" data-go="' + c.id + '">← Back to Chapter ' + c.num + '</button>' + (nx ? '<button class="btn pri" type="button" data-go="' + nx.id + '">' + esc(nx.nav || nx.title) + ' →</button>' : '<span></span>') + '</nav>';
  view.className = 'col'; view.innerHTML = h;
  L.forEach(function(x, i){
    if (x.ty !== 'code') return;
    var box = $('#btq-' + i + ' .btcode'); CodeBox(box, { key: 'bt:' + cid + ':' + i, starter: x.starter, label: 'Your code' });
    $('.edta', box).addEventListener('input', count);
  });
  function answered(i){ var x = L[i]; if (x.ty !== 'code') return ans[i] != null; var ta = $('#btq-' + i + ' .edta'); return !!ta && ta.value.trim() !== '' && ta.value.trim() !== (x.starter || '').trim(); }
  function count(){ var n = L.filter(function(x, i){ return answered(i); }).length; $('#btCount').innerHTML = '<b>' + n + '</b> of ' + L.length + ' answered'; warned = false; return n; }
  count();
  $$('.btlist .opt', view).forEach(function(b){ b.onclick = function(){
    if (finished) return; var i = +b.getAttribute('data-q'); ans[i] = +b.getAttribute('data-j');
    $$('#btq-' + i + ' .opt').forEach(function(o){ o.classList.toggle('sel', o === b); }); count();
  }; });
  function finish(){
    if (finished) return;
    var n = count();
    if (n < L.length && !warned) { warned = true; $('#btCount').innerHTML = '<b>' + (L.length - n) + ' not answered yet.</b> Press Finish again to finish anyway.'; return; }
    finished = true; $('#btFin').disabled = $('#btFin2').disabled = true; $('#btFin').textContent = 'Checking your code...';
    var res = {}, p = Promise.resolve();
    L.forEach(function(x, i){
      if (x.ty !== 'code') { res[i] = { ok: ans[i] === x.a }; return; }
      p = p.then(function(){
        if (!answered(i)) { res[i] = { ok: false, empty: true }; return; }
        return pyRun($('#btq-' + i + ' .edta').value, [], function(){}).then(function(r){ res[i] = { ok: r.status === 'ok' && btNorm(r.out) === btNorm(x.out), out: r.out, err: r.err, status: r.status }; });
      });
    });
    p.then(function(){ show(res); }, function(){ L.forEach(function(x, i){ if (!res[i]) res[i] = { ok: false, nopy: true }; }); show(res); });
  }
  $('#btFin').onclick = finish; $('#btFin2').onclick = finish;
  function show(res){
    var score = 0, lv = { 1: [0, 0], 2: [0, 0], 3: [0, 0] }, weak = {};
    L.forEach(function(x, i){
      var r = res[i], q = $('#btq-' + i); lv[x.lv][1]++;
      if (r.ok) { score++; lv[x.lv][0]++; } else weak[x.sec] = (weak[x.sec] || 0) + 1;
      q.classList.add(r.ok ? 'ok' : 'no');
      $$('.opt', q).forEach(function(o){ var j = +o.getAttribute('data-j'); o.disabled = true; if (j === x.a) o.classList.add('right'); else if (j === ans[i]) o.classList.add('wrong'); });
      var fb = $('.btfb', q), t = '<div class="rchk ' + (r.ok ? 'ok' : 'no') + '"><b>' + (r.ok ? '✓ Correct.' : (x.ty === 'code' ? (r.empty ? '✗ Not answered.' : r.nopy ? '✗ Python could not start, so this was not checked.' : '✗ Not right yet.') : (ans[i] == null ? '✗ Not answered.' : '✗ Not right.'))) + '</b> ' + md(x.e);
      if (x.ty === 'code' && !r.ok && !r.empty && !r.nopy) t += '<div class="lbl2" style="padding:8px 0 2px">Your output</div><pre>' + esc(r.status === 'error' ? (r.err || '').trim().split('\n').pop() : r.status === 'input' ? 'Your code waited for input()' : (r.out || '(nothing)')) + '</pre>';
      t += '</div>';
      if (x.ty === 'code') t += '<details class="reveal"><summary>Show a model answer</summary>' + cell(x.sol, x.out) + '</details>';
      fb.innerHTML = t; fb.hidden = false;
    });
    var pct = Math.round(score / L.length * 100), all = store.get('bt', {}), prev = all[cid];
    all[cid] = { best: Math.max(pct, prev ? prev.best : 0), last: pct }; store.set('bt', all); updateSide();
    var pass = pct >= BT_PASS, need = Math.ceil(L.length * BT_PASS / 100);
    var tp = Object.keys(weak).sort(function(a, b){ return weak[b] - weak[a]; });
    $('#btSum').innerHTML = '<div class="btsum ' + (pass ? 'pass' : 'fail') + '"><div class="btbig"><b>' + score + '</b><span>/ ' + L.length + '</span><em>' + pct + '%</em></div><div class="btmsg"><b>' + (pass ? '🎉 Passed! You know this chapter well.' : 'Not yet. You need ' + need + ' of ' + L.length + ' (' + BT_PASS + '%) to pass.') + '</b>' +
      '<div class="btlvs">' + [1, 2, 3].map(function(k){ return '<span class="pill lv' + k + '">' + BT_LV[k] + ': ' + lv[k][0] + ' / ' + lv[k][1] + '</span>'; }).join('') + '</div>' +
      (tp.length ? '<div class="bttop"><span>Topics to review:</span>' + tp.map(function(sec){ var sid = btSecId(cid, sec); return sid ? '<button class="btn" type="button" data-jump="' + sid + '" data-ov="' + cid + '">' + md(sec) + (weak[sec] > 1 ? ' (' + weak[sec] + ')' : '') + '</button>' : ''; }).join('') + '</div>' : '') +
      '<div class="row"><button class="btn pri" type="button" id="btAgain">Try again</button><span class="muted" style="font-size:14px">Scroll down to see every answer and explanation.</span></div></div></div>';
    $('#btBar').hidden = true; $('#btFin2').closest('.row').hidden = true;
    $('#btAgain').onclick = function(){ L.forEach(function(x, i){ if (x.ty === 'code') store.set('bt:' + cid + ':' + i, null); }); render('test-' + cid); };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
