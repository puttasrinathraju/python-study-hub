/* ---------- More diagram helpers: flowcharts and coloured cell grids ---------- */
(function(){
  var e = V.esc;
  var CLS = { acc: 'sv-acc', hl: 'sv-hl', tip: 'sv-tip', trap: 'sv-trap', soft: 'sv-soft', box: 'sv-box' };
  var LN = { g: ['sv-lng', 'arwG'], t: ['sv-lnt', 'arwT'], a: ['sv-lna', 'arwA'], m: ['sv-ln', 'arw'] };
  function lines(t){ return String(t).split('\n'); }
  function textBlock(x, cy, t, cls){
    var L = lines(t), s = '';
    L.forEach(function(l, i){ s += '<text x="' + x + '" y="' + (cy + (i - (L.length - 1) / 2) * 19 + 5) + '" text-anchor="middle" class="' + (cls || 'sv-t') + '">' + e(l) + '</text>'; });
    return s;
  }

  /* Vertical flowchart.
     steps: [{t, k, d (diamond), lbl (label on the arrow below), code (mono text)}]
     o.side: [{from, t, k, lbl, ln}]  a box to the right of step `from`
     o.back: [{from, to, lbl, ln}]    an arrow looping back up on the left */
  V.flow = function(steps, o){
    o = o || {};
    var cw = 7.6, maxLen = 0;
    steps.forEach(function(s){ lines(s.t).forEach(function(l){ maxLen = Math.max(maxLen, l.length); }); });
    var bw = Math.min(320, Math.max(150, maxLen * cw + 36));
    var sideW = 0;
    (o.side || []).forEach(function(sd){ lines(sd.t).forEach(function(l){ sideW = Math.max(sideW, l.length * cw + 30); }); });
    var backs = o.back || [];
    var left = 14 + (backs.length ? 34 + backs.length * 18 : 0);
    var dExtra = steps.some(function(s){ return s.d; }) ? 40 : 0;
    var cx = left + (bw + dExtra) / 2;
    var W = left + bw + dExtra + (sideW ? 80 + sideW : 0) + 14;
    var y = 12, pos = [], s = '';
    steps.forEach(function(st){
      var h = st.d ? 76 : Math.max(40, lines(st.t).length * 19 + 20);
      pos.push({ y: y, h: h, w: st.d ? bw + dExtra : bw, d: st.d });
      y += h + 34;
    });
    var H = y - 34 + 14;
    steps.forEach(function(st, i){
      var p = pos[i], cy = p.y + p.h / 2, cls = CLS[st.k] || 'sv-box';
      if (st.d) s += '<polygon points="' + cx + ',' + p.y + ' ' + (cx + p.w / 2) + ',' + cy + ' ' + cx + ',' + (p.y + p.h) + ' ' + (cx - p.w / 2) + ',' + cy + '" class="' + cls + '"/>';
      else s += '<rect x="' + (cx - p.w / 2) + '" y="' + p.y + '" width="' + p.w + '" height="' + p.h + '" rx="10" class="' + cls + '"/>';
      s += textBlock(cx, cy, st.t, st.code ? 'sv-tm' : 'sv-t');
      if (i < steps.length - 1) {
        var ln = LN[st.ln || 'm'];
        s += '<path d="M' + cx + ' ' + (p.y + p.h) + ' V' + (pos[i + 1].y - 3) + '" class="' + ln[0] + '" marker-end="url(#' + ln[1] + ')"/>';
        if (st.lbl) s += '<text x="' + (cx + 8) + '" y="' + (p.y + p.h + 21) + '" class="sv-mb">' + e(st.lbl) + '</text>';
      }
    });
    (o.side || []).forEach(function(sd){
      var p = pos[sd.from], cy = p.y + p.h / 2, x0 = cx + p.w / 2, sx = x0 + 80;
      var L = lines(sd.t), sh = Math.max(40, L.length * 19 + 20), ln = LN[sd.ln || 'm'];
      s += '<path d="M' + x0 + ' ' + cy + ' H' + (sx - 3) + '" class="' + ln[0] + '" marker-end="url(#' + ln[1] + ')"/>';
      if (sd.lbl) s += '<text x="' + (x0 + 40) + '" y="' + (cy - 7) + '" text-anchor="middle" class="sv-mb">' + e(sd.lbl) + '</text>';
      s += '<rect x="' + sx + '" y="' + (cy - sh / 2) + '" width="' + sideW + '" height="' + sh + '" rx="10" class="' + (CLS[sd.k] || 'sv-box') + '"/>';
      s += textBlock(sx + sideW / 2, cy, sd.t, 'sv-t');
    });
    backs.forEach(function(bk, k){
      var a = pos[bk.from], b = pos[bk.to], ln = LN[bk.ln || 'a'];
      var lx = left - 20 - k * 18;
      var ay = a.y + a.h / 2, by = b.y + b.h / 2;
      var ax = cx - a.w / 2, bx = cx - b.w / 2;
      s += '<path d="M' + ax + ' ' + ay + ' H' + lx + ' V' + by + ' H' + (bx - 3) + '" class="' + ln[0] + '" marker-end="url(#' + ln[1] + ')"/>';
      if (bk.lbl) s += '<text x="' + (lx + 6) + '" y="' + ((ay + by) / 2) + '" class="sv-mb" transform="rotate(-90 ' + (lx - 6) + ' ' + ((ay + by) / 2) + ')" text-anchor="middle">' + e(bk.lbl) + '</text>';
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'flowchart') + '">' + s + '</svg>';
  };

  /* Grid of coloured cells, e.g. loop rounds.
     rows: [{label, cells:[{t, k}]}], k: run | skip | stop | never | acc
     o.cl: column labels, o.title, o.cw */
  V.cells = function(rows, o){
    o = o || {};
    var K = { run: 'sv-tip', skip: 'sv-hl', stop: 'sv-trap', never: 'sv-soft', acc: 'sv-acc', box: 'sv-box' };
    var cw = o.cw || 64, ch = 40, padL = o.rlw || 86, top = (o.cl ? 30 : 10) + (o.title ? 24 : 0);
    var C = rows[0].cells.length, W = padL + C * (cw + 6) + 14, H = top + rows.length * (ch + 6) + 10;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + e(o.label || 'grid') + '">';
    if (o.title) s += '<text x="' + padL + '" y="16" class="sv-mb">' + e(o.title) + '</text>';
    if (o.cl) o.cl.forEach(function(t, c){ s += '<text x="' + (padL + c * (cw + 6) + cw / 2) + '" y="' + (top - 9) + '" text-anchor="middle" class="sv-m">' + e(t) + '</text>'; });
    rows.forEach(function(r, ri){
      var y = top + ri * (ch + 6);
      s += '<text x="' + (padL - 10) + '" y="' + (y + ch / 2 + 4) + '" text-anchor="end" class="sv-m">' + e(r.label) + '</text>';
      r.cells.forEach(function(cl, ci){
        var x = padL + ci * (cw + 6);
        s += '<rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '" rx="8" class="' + (K[cl.k] || 'sv-box') + '"' + (cl.k === 'never' ? ' style="stroke-dasharray:4 3"' : '') + '/>';
        s += '<text x="' + (x + cw / 2) + '" y="' + (y + ch / 2 + 5) + '" text-anchor="middle" class="sv-tm" style="font-size:13px' + (cl.k === 'never' ? ';opacity:.55' : '') + '">' + e(cl.t) + '</text>';
      });
    });
    return s + '</svg>';
  };

  /* Small legend row of coloured swatches */
  V.legend = function(items){
    var K = { run: 'sv-tip', skip: 'sv-hl', stop: 'sv-trap', never: 'sv-soft', acc: 'sv-acc' };
    var x = 6, s = '';
    items.forEach(function(it){
      s += '<rect x="' + x + '" y="6" width="16" height="16" rx="4" class="' + K[it[0]] + '"/><text x="' + (x + 22) + '" y="19" class="sv-mb">' + e(it[1]) + '</text>';
      x += 34 + it[1].length * 7.2;
    });
    return '<svg viewBox="0 0 ' + x + ' 28" width="' + x + '" role="img" aria-label="legend">' + s + '</svg>';
  };

  /* Histogram. counts: bar heights. o: {labels:[one per bar, '' to skip], ticks:[[boundary index, text]], hl:[bar index], title, label, bw, h} */
  V.hist = function(counts, o){
    o = o || {};
    var bw = o.bw || 22, H = o.h || 110, padL = 18, padR = 18, top = o.title ? 30 : 10, n = counts.length;
    var max = Math.max.apply(null, counts) || 1, W = padL + padR + n * bw, base = top + H;
    var s = '<svg viewBox="0 0 ' + W + ' ' + (base + 26) + '" width="' + W + '" style="min-width:' + Math.round(W * 0.6) + 'px" role="img" aria-label="' + V.esc(o.label || o.title || 'histogram') + '">';
    if (o.title) s += '<text x="' + padL + '" y="18" class="sv-mb">' + V.esc(o.title) + '</text>';
    counts.forEach(function(c, i){
      var bh = c ? Math.max(2, Math.round(c / max * H)) : 0, x = padL + i * bw;
      s += '<rect x="' + (x + 2) + '" y="' + (base - bh) + '" width="' + (bw - 4) + '" height="' + bh + '" rx="2" class="' + ((o.hl || []).indexOf(i) > -1 ? 'sv-hl' : 'sv-acc') + '"/>';
      var lb = (o.labels || [])[i];
      if (lb != null && lb !== '') s += '<text x="' + (x + bw / 2) + '" y="' + (base + 18) + '" text-anchor="middle" class="sv-m">' + V.esc(lb) + '</text>';
    });
    (o.ticks || []).forEach(function(t){
      var x = padL + t[0] * bw;
      s += '<path d="M' + x + ' ' + base + ' v5" class="sv-lna"/><text x="' + x + '" y="' + (base + 18) + '" text-anchor="middle" class="sv-m">' + V.esc(t[1]) + '</text>';
    });
    s += '<path d="M' + padL + ' ' + base + ' H' + (W - padR) + '" class="sv-lna"/>';
    return s + '</svg>';
  };
})();
