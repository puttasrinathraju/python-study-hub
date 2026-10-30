/* ---------- Course structure ---------- */
var R = String.raw;
var PARTS = [
  { n: 1, title: 'Start here', sub: 'What Python is, variables, printing and operators.' },
  { n: 2, title: 'Decisions and loops', sub: 'Make your code choose and repeat.' },
  { n: 3, title: 'Collections', sub: 'Strings, lists, tuples, sets and dictionaries.' },
  { n: 4, title: 'Functions', sub: 'Write code once, use it everywhere.' },
  { n: 5, title: 'Real-world Python', sub: 'Errors, files and modules.' },
  { n: 6, title: 'Object-oriented Python', sub: 'Classes, objects and inheritance.' },
  { n: 7, title: 'NumPy', sub: 'Fast number crunching for data analysis.' },
  { n: 8, title: 'Projects', sub: 'Put everything together.' }
];
var CHAPTERS = [];
var POSTERS = {};
function chapter(o){ CHAPTERS.push(o); }
/* helper: build frames that highlight a slice step by step */
function sliceFrames(text, start, stop, step, label, stopLabel){
  var chars = text.split(''), picked = [], frames = [];
  frames.push({ html: V.strip(chars, { neg: true, rowLabels: true, w: 40 }) + '<div class="bigcode">' + V.esc(label) + '</div>', c: 'Here is the string with its index numbers. Positive numbers count from the left starting at 0. Negative numbers count from the right starting at -1.' });
  var idxs = [];
  var n = chars.length;
  var s = start, e = stop;
  if (step > 0) { for (var i = s; i < e && i < n; i += step) idxs.push(i); }
  else { for (var j = s; j > e && j >= 0; j += step) idxs.push(j); }
  idxs.forEach(function(ix, k){
    picked.push(chars[ix]);
    frames.push({ html: V.strip(chars, { neg: true, rowLabels: true, w: 40, hl: [ix], hl2: idxs.slice(0, k) }) + '<div class="bigcode">' + V.esc(label) + '</div><div class="res">so far: "' + V.esc(picked.join('')) + '"</div>', c: 'Take index ' + ix + ' (' + JSON.stringify(chars[ix]) + ').' + (k === 0 ? ' This is the start position.' : ' Then jump ' + Math.abs(step) + ' step' + (Math.abs(step) > 1 ? 's' : '') + (step < 0 ? ' to the left.' : '.')) });
  });
  frames.push({ html: V.strip(chars, { neg: true, rowLabels: true, w: 40, hl2: idxs }) + '<div class="bigcode">' + V.esc(label) + '</div><div class="res">result: "' + V.esc(picked.join('')) + '"</div>', c: 'We stop before index ' + (stopLabel != null ? stopLabel : stop) + ', because the stop position is never included. The result is "' + picked.join('') + '".' });
  return frames;
}
var OVERVIEWS = [];
function overview(o){ OVERVIEWS.push(o); }
