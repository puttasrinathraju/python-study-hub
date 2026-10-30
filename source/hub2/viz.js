/* ---------- Diagram helpers (return SVG strings) ---------- */
var V = (function(){
  var n = 0;
  function e(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function inArr(a, i){ return (a||[]).indexOf(i) > -1; }

  /* A row of boxes with index labels. items: array of strings.
     o: {w,h,neg,pos,hl,hl2,dim,title,bracket:[from,to,label],label,rowLabels} */
  function strip(items, o){
    o = o || {};
    var w = o.w || 44, h = o.h || 44, cnt = items.length;
    var padL = o.rowLabels ? 70 : 24, padR = 24;
    var top = (o.pos !== false ? 28 : 10) + (o.title ? 24 : 0);
    var negH = o.neg ? 26 : 0, brH = o.bracket ? 40 : 0;
    var W = padL + padR + cnt * w, H = top + h + negH + brH + 10;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'boxes with index numbers') + '">';
    if (o.title) s += '<text x="' + padL + '" y="17" class="sv-mb">' + e(o.title) + '</text>';
    if (o.rowLabels) {
      if (o.pos !== false) s += '<text x="' + (padL - 10) + '" y="' + (top - 9) + '" text-anchor="end" class="sv-m">index</text>';
      s += '<text x="' + (padL - 10) + '" y="' + (top + h / 2 + 5) + '" text-anchor="end" class="sv-m">value</text>';
      if (o.neg) s += '<text x="' + (padL - 10) + '" y="' + (top + h + 18) + '" text-anchor="end" class="sv-m">negative</text>';
    }
    items.forEach(function(it, i){
      var x = padL + i * w, y = top;
      var cls = inArr(o.hl, i) ? 'sv-hl' : inArr(o.hl2, i) ? 'sv-acc' : inArr(o.dim, i) ? 'sv-soft' : 'sv-box';
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" class="' + cls + '"/>';
      s += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) + '" text-anchor="middle" class="sv-tm">' + e(it === ' ' ? '␣' : it) + '</text>';
      if (o.pos !== false) s += '<text x="' + (x + w / 2) + '" y="' + (top - 9) + '" text-anchor="middle" class="sv-m">' + i + '</text>';
      if (o.neg) s += '<text x="' + (x + w / 2) + '" y="' + (y + h + 18) + '" text-anchor="middle" class="sv-m">' + (i - cnt) + '</text>';
    });
    if (o.bracket) {
      var a = o.bracket[0], b = o.bracket[1];
      var x1 = padL + a * w + 3, x2 = padL + b * w - 3, yb = top + h + negH + 8;
      s += '<path d="M' + x1 + ' ' + yb + ' v9 H' + x2 + ' v-9" class="sv-lna"/>';
      s += '<text x="' + ((x1 + x2) / 2) + '" y="' + (yb + 28) + '" text-anchor="middle" class="sv-tm sv-ta" style="font-size:14px">' + e(o.bracket[2] || '') + '</text>';
    }
    return s + '</svg>';
  }

  /* 2D grid. m: array of rows. o: {cw,ch,rl,cl,hl:[[r,c]],hlRow,hlCol,acc:[[r,c]],res:{dir:'right'|'bottom',vals,label},title,axis:'0'|'1'} */
  function grid(m, o){
    o = o || {};
    var cw = o.cw || 58, ch = o.ch || 42, R = m.length, C = m[0].length;
    var padL = o.rl ? 92 : (o.res && o.res.dir === 'bottom' ? 74 : 30), top = (o.cl || (o.res && o.res.dir === 'right') ? 34 : 14) + (o.title ? 24 : 0);
    var resR = o.res && o.res.dir === 'right', resB = o.res && o.res.dir === 'bottom';
    var W = padL + C * cw + (resR ? cw + 70 : 0) + 30;
    var H = top + R * ch + (resB ? ch + 56 : 0) + 20 + (o.axis ? 0 : 0);
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'grid of values') + '">';
    if (o.title) s += '<text x="' + padL + '" y="17" class="sv-mb">' + e(o.title) + '</text>';
    if (o.cl) o.cl.forEach(function(t, c){ s += '<text x="' + (padL + c * cw + cw / 2) + '" y="' + (top - 10) + '" text-anchor="middle" class="sv-m">' + e(t) + '</text>'; });
    if (o.rl) o.rl.forEach(function(t, r){ s += '<text x="' + (padL - 10) + '" y="' + (top + r * ch + ch / 2 + 4) + '" text-anchor="end" class="sv-m">' + e(t) + '</text>'; });
    for (var r = 0; r < R; r++) for (var c = 0; c < C; c++) {
      var isH = (o.hl || []).some(function(p){ return p[0] === r && p[1] === c; }) || o.hlRow === r || o.hlCol === c;
      var isA = (o.acc || []).some(function(p){ return p[0] === r && p[1] === c; });
      var cls = isH ? 'sv-hl' : isA ? 'sv-acc' : 'sv-box';
      var x = padL + c * cw, y = top + r * ch;
      s += '<rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '" class="' + cls + '"/>';
      s += '<text x="' + (x + cw / 2) + '" y="' + (y + ch / 2 + 5) + '" text-anchor="middle" class="sv-tm">' + e(m[r][c]) + '</text>';
    }
    if (resR) {
      var xr = padL + C * cw + 56;
      s += '<text x="' + (xr + cw / 2) + '" y="' + (top - 10) + '" text-anchor="middle" class="sv-m sv-tg">' + e(o.res.label || 'result') + '</text>';
      o.res.vals.forEach(function(v, r){
        var y = top + r * ch;
        if (o.res.upto == null || r <= o.res.upto) {
          s += '<path d="M' + (padL + C * cw + 8) + ' ' + (y + ch / 2) + ' H' + (xr - 6) + '" class="sv-lng" marker-end="url(#arwG)"/>';
          s += '<rect x="' + xr + '" y="' + y + '" width="' + cw + '" height="' + ch + '" class="sv-tip"/>';
          s += '<text x="' + (xr + cw / 2) + '" y="' + (y + ch / 2 + 5) + '" text-anchor="middle" class="sv-tm">' + e(v) + '</text>';
        }
      });
    }
    if (resB) {
      var yb = top + R * ch + 44;
      s += '<text x="' + (padL - 10) + '" y="' + (yb + ch / 2 + 4) + '" text-anchor="end" class="sv-m sv-tg">' + e(o.res.label || 'result') + '</text>';
      o.res.vals.forEach(function(v, c){
        var x = padL + c * cw;
        if (o.res.upto == null || c <= o.res.upto) {
          s += '<path d="M' + (x + cw / 2) + ' ' + (top + R * ch + 6) + ' V' + (yb - 6) + '" class="sv-lng" marker-end="url(#arwG)"/>';
          s += '<rect x="' + x + '" y="' + yb + '" width="' + cw + '" height="' + ch + '" class="sv-tip"/>';
          s += '<text x="' + (x + cw / 2) + '" y="' + (yb + ch / 2 + 5) + '" text-anchor="middle" class="sv-tm">' + e(v) + '</text>';
        }
      });
    }
    return s + '</svg>';
  }

  /* Venn diagram. o: {a,b,ao:[],ab:[],bo:[],shade:'a'|'b'|'ab'|'union'|'sym'|'aonly'|'bonly',title,op} */
  function venn(o){
    n++;
    var id = 'vn' + n, W = 460, H = 270, cx1 = 170, cx2 = 290, cy = 140, r = 105, fs = o.fs || 15, gap = fs * 1.6;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'Venn diagram of two sets') + '">';
    s += '<defs><clipPath id="' + id + 'a"><circle cx="' + cx1 + '" cy="' + cy + '" r="' + r + '"/></clipPath></defs>';
    var sh = o.shade;
    var fillA = (sh === 'a' || sh === 'union' || sh === 'sym' || sh === 'aonly'), fillB = (sh === 'b' || sh === 'union' || sh === 'sym' || sh === 'bonly');
    s += '<circle cx="' + cx1 + '" cy="' + cy + '" r="' + r + '" class="' + (fillA ? 'sv-hl' : 'sv-box') + '"/>';
    s += '<circle cx="' + cx2 + '" cy="' + cy + '" r="' + r + '" class="' + (fillB ? 'sv-hl' : 'sv-box') + '"/>';
    var mid = (sh === 'a' || sh === 'b' || sh === 'ab' || sh === 'union') ? 'sv-hl' : 'sv-box';
    s += '<circle cx="' + cx2 + '" cy="' + cy + '" r="' + r + '" clip-path="url(#' + id + 'a)" class="' + mid + '" style="stroke:none"/>';
    s += '<circle cx="' + cx1 + '" cy="' + cy + '" r="' + r + '" class="sv-ln"/><circle cx="' + cx2 + '" cy="' + cy + '" r="' + r + '" class="sv-ln"/>';
    s += '<text x="' + (cx1 - 70) + '" y="' + (cy - 82) + '" class="sv-h" style="font-size:' + Math.max(15, fs) + 'px">' + e(o.a || 'A') + '</text>';
    s += '<text x="' + (cx2 + 52) + '" y="' + (cy - 82) + '" class="sv-h" style="font-size:' + Math.max(15, fs) + 'px">' + e(o.b || 'B') + '</text>';
    function col(arr, x){ (arr || []).forEach(function(t, i){ var y = cy - (arr.length - 1) * gap / 2 + i * gap + fs / 3; s += '<text x="' + x + '" y="' + y + '" text-anchor="middle" class="sv-tm" style="font-size:' + fs + 'px">' + e(t) + '</text>'; }); }
    col(o.ao, cx1 - 48); col(o.ab, (cx1 + cx2) / 2); col(o.bo, cx2 + 48);
    if (o.op) s += '<text x="' + (W / 2) + '" y="' + (H - 6) + '" text-anchor="middle" class="sv-tm sv-ta" style="font-weight:600">' + e(o.op) + '</text>';
    return s + '</svg>';
  }

  /* Name tags pointing at objects. o: {vars:[[name, objIndex]], objs:[{v, t, cls}], title, gapX} */
  function refs(o){
    var rowH = 58, nameW = 86, objW = o.objW || 200, gx = o.gapX || 120;
    var rows = Math.max(o.vars.length, o.objs.length);
    var W = 20 + nameW + gx + objW + 20, H = 20 + rows * rowH + (o.title ? 24 : 0);
    var top = o.title ? 34 : 14;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'names pointing at objects') + '">';
    if (o.title) s += '<text x="20" y="18" class="sv-mb">' + e(o.title) + '</text>';
    var objY = function(i){ return top + i * rowH; };
    o.objs.forEach(function(ob, i){
      var x = 20 + nameW + gx, y = objY(i);
      s += '<rect x="' + x + '" y="' + y + '" width="' + objW + '" height="42" rx="8" class="' + (ob.cls || 'sv-acc') + '"/>';
      s += '<text x="' + (x + 12) + '" y="' + (y + 26) + '" class="sv-tm">' + e(ob.v) + '</text>';
      if (ob.t) s += '<text x="' + (x + objW - 10) + '" y="' + (y + 26) + '" text-anchor="end" class="sv-m">' + e(ob.t) + '</text>';
    });
    o.vars.forEach(function(v, i){
      var y = top + i * rowH, x = 20;
      s += '<rect x="' + x + '" y="' + (y + 4) + '" width="' + nameW + '" height="34" rx="17" class="sv-hl"/>';
      s += '<text x="' + (x + nameW / 2) + '" y="' + (y + 26) + '" text-anchor="middle" class="sv-tm" style="font-weight:600">' + e(v[0]) + '</text>';
      if (v[1] != null) {
        var ty = objY(v[1]) + 21;
        s += '<path d="M' + (x + nameW + 4) + ' ' + (y + 21) + ' C' + (x + nameW + gx / 2) + ' ' + (y + 21) + ' ' + (x + nameW + gx / 2) + ' ' + ty + ' ' + (x + nameW + gx - 6) + ' ' + ty + '" class="sv-lna" marker-end="url(#arwA)"/>';
      }
    });
    return s + '</svg>';
  }

  return { strip: strip, grid: grid, venn: venn, refs: refs, esc: e };
})();
