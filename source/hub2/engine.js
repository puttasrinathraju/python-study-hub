/* ---------- Study hub engine ---------- */
(function(){
'use strict';
var $ = function(s, r){ return (r || document).querySelector(s); };
var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
var LS = 'pyhub:';
var store = {
  get: function(k, d){ try { var v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set: function(k, v){ try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch(e){} }
};

/* Tiny markdown: `code`, **bold**, ==highlight==, newline -> <br> */
function md(s){
  if (s == null) return '';
  return String(s).split(/(`[^`]+`)/).map(function(part){
    if (part.length > 1 && part[0] === '`' && part[part.length - 1] === '`') return '<code>' + hl(part.slice(1, -1)) + '</code>';
    return esc(part).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/==([^=]+)==/g, '<mark>$1</mark>').replace(/\[\[(ok|no|warn|acc):([^\]]+)\]\]/g, '<span class="t-$1">$2</span>').replace(/\n/g, '<br>');
  }).join('');
}

/* ---------- Python syntax highlighter ---------- */
var KW = {}; 'False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case'.split(' ').forEach(function(k){ KW[k] = 1; });
var BI = {}; 'ArithmeticError AssertionError AttributeError BaseException BaseExceptionGroup BlockingIOError BrokenPipeError BufferError BytesWarning ChildProcessError ConnectionAbortedError ConnectionError ConnectionRefusedError ConnectionResetError DeprecationWarning EOFError EncodingWarning EnvironmentError Exception ExceptionGroup FileExistsError FileNotFoundError FloatingPointError FutureWarning GeneratorExit IOError ImportError ImportWarning IndentationError IndexError InterruptedError IsADirectoryError KeyError KeyboardInterrupt LookupError MemoryError ModuleNotFoundError NameError NotADirectoryError NotImplementedError OSError OverflowError PendingDeprecationWarning PermissionError ProcessLookupError PythonFinalizationError RecursionError ReferenceError ResourceWarning RuntimeError RuntimeWarning StopAsyncIteration StopIteration SyntaxError SyntaxWarning SystemError SystemExit TabError TimeoutError TypeError UnboundLocalError UnicodeDecodeError UnicodeEncodeError UnicodeError UnicodeTranslateError UnicodeWarning UserWarning ValueError Warning ZeroDivisionError abs aiter all anext any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip'.split(' ').forEach(function(k){ BI[k] = 1; });
function hl(code){
  var re = /(#[^\n]*)|([rRbBfFuU]{0,2}(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'))|(\b\d[\d_]*(?:\.\d*)?(?:[eE][+-]?\d+)?j?\b)|(@[A-Za-z_][\w.]*)|([A-Za-z_]\w*)|(\s+)|([\s\S])/g;
  var out = '', m, prev = '';
  while ((m = re.exec(code))) {
    var t = m[0];
    if (m[1]) out += '<span class="c">' + esc(t) + '</span>';
    else if (m[2]) out += '<span class="s">' + esc(t) + '</span>';
    else if (m[3]) out += '<span class="n">' + esc(t) + '</span>';
    else if (m[4]) out += '<span class="d">' + esc(t) + '</span>';
    else if (m[5]) {
      if (KW[t]) out += '<span class="k">' + t + '</span>';
      else if (prev === 'def' || prev === 'class') out += '<span class="f">' + t + '</span>';
      else if (prev !== '.' && BI[t]) out += '<span class="b">' + t + '</span>';
      else if (/^\s*\(/.test(code.slice(re.lastIndex))) out += '<span class="m">' + t + '</span>';
      else if (t === 'self' || t === 'cls') out += '<span class="sf">' + t + '</span>';
      else out += esc(t);
      prev = t; continue;
    } else out += esc(t);
    if (!m[6]) prev = t;
  }
  return out;
}

/* ---------- Icons ---------- */
var IC = {
  play: '<svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>',
  pause: '<svg viewBox="0 0 16 16"><path d="M3 2h4v12H3zM9 2h4v12H9z"/></svg>',
  prev: '<svg viewBox="0 0 16 16"><path d="M12 2L4 8l8 6z"/></svg>',
  next: '<svg viewBox="0 0 16 16"><path d="M4 2l8 6-8 6z"/></svg>',
  restart: '<svg viewBox="0 0 16 16"><path d="M2 2h2v12H2zM14 2L6 8l8 6z"/></svg>',
  trap: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M10 2L19 18H1z"/><path d="M10 8v4M10 14.5v.5"/></svg>',
  tip: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 15h6M8 18h4M10 2a5.5 5.5 0 0 0-3 10v1h6v-1a5.5 5.5 0 0 0-3-10z"/></svg>',
  key: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M10 2l2.4 5 5.4.6-4 3.7 1.1 5.4L10 14l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/></svg>',
  like: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10" cy="10" r="8"/><path d="M7 8h.01M13 8h.01M6.5 12a4.5 4.5 0 0 0 7 0"/></svg>',
  why: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 17V9M8 17V4M13 17v-6M18 17V7"/></svg>',
  home: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><path d="M2 8l6-5 6 5v6H2z"/></svg>',
  cards: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><rect x="2" y="4" width="10" height="9" rx="2"/><path d="M5 2h8a1 1 0 0 1 1 1v8"/></svg>',
  exam: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><path d="M3 2h10v12H3zM6 6h4M6 9h4"/></svg>',
  cheat: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><path d="M4 2h8v12H4zM6 5h4M6 8h4M6 11h2"/></svg>',
  poster: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M2 6h12M8 6v8"/></svg>',
  proj: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 13.5V9M8 13.5V3M13 13.5V6.5M1.5 13.5h13"/></svg>',
  ov: '<svg viewBox="0 0 16 16" fill="none" stroke-width="2"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M2 6.5h12M2 10.5h12M6 2v12"/></svg>'
};
var NOTE_T = { trap: 'Trap!', tip: 'Easy tip', key: 'Remember this', like: 'Think of it like this', why: 'Why analysts care' };

/* ---------- Data ---------- */
var CH = window.CHAPTERS || [];
var PARTS = window.PARTS || [];
var byId = {}; CH.forEach(function(c, i){ c.idx = i; byId[c.id] = c; });
CH.forEach(function(c, i){ c.num = i + 1; });
/* Part overview pages sit at the end of each Part, outside the chapter numbering */
var OVS = (window.OVERVIEWS || []).slice().sort(function(a, b){ return a.part - b.part; });
OVS.forEach(function(o){ o.id = 'overview' + o.part; o.ov = true; byId[o.id] = o; });
var SEQ = [];
PARTS.forEach(function(p){
  CH.forEach(function(c){ if (c.part === p.n) SEQ.push(c); });
  OVS.forEach(function(o){ if (o.part === p.n) SEQ.push(o); });
});
SEQ.forEach(function(c, i){ c.seq = i; });
function ovOf(n){ return OVS.filter(function(o){ return o.part === n; })[0]; }
var PENDING = null;

/* ---------- Toast ---------- */
var toastT;
function toast(msg){ var t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function(){ t.hidden = true; }, 1800); }

/* ---------- Plain-English hints for Python errors ---------- */
function errHint(err){
  var lines = String(err || '').trim().split('\n'), last = lines[lines.length - 1] || '';
  var m = last.match(/^(\w+(?:Error|Exception|Iteration)?):?\s?(.*)$/), type = m ? m[1] : '', msg = m ? m[2] : '';
  var ln = null, re = /"<your code>", line (\d+)/g, x; while ((x = re.exec(err))) ln = +x[1];
  var c = function(t){ return '<code>' + esc(t) + '</code>'; }, g, h = '';
  var a = function(t, cap){ var w = /^[aeiou]/i.test(t) ? 'an' : 'a'; return (cap ? w.charAt(0).toUpperCase() + w.slice(1) : w) + ' ' + c(t); };
  if (type === 'SyntaxError') {
    if (/expected ':'/.test(msg)) h = 'A line that starts a block (' + c('if') + ', ' + c('for') + ', ' + c('while') + ', ' + c('def') + ', ' + c('class') + ') must end with a colon ' + c(':') + '.';
    else if (/was never closed/.test(msg)) h = 'A bracket or quote was opened but never closed. Count your ' + c('(') + ' ' + c('[') + ' ' + c('{') + ' and quote marks.';
    else if (/unterminated (triple-quoted )?string/.test(msg)) h = 'A piece of text is missing its closing quote mark.';
    else if (/unmatched/.test(msg)) h = 'There is a closing bracket with no matching opening bracket.';
    else if (/Missing parentheses in call to 'print'/.test(msg)) h = 'In Python 3, print needs brackets: ' + c('print("hi")') + '.';
    else if (/Maybe you meant '=='|cannot assign to/.test(msg)) h = 'To compare two values, use ' + c('==') + '. A single ' + c('=') + ' stores a value.';
    else if (/invalid character/.test(msg)) h = 'There is a character Python cannot read, often curly quotes copied from a website or Word. Type the quotes again with your keyboard.';
    else if (/invalid decimal literal/.test(msg)) h = 'A name cannot start with a number, and a number cannot have letters stuck to it.';
    else if (/'return' outside function/.test(msg)) h = c('return') + ' only works inside a function (after ' + c('def') + ').';
    else if (/outside loop|not properly in loop/.test(msg)) h = c('break') + ' and ' + c('continue') + ' only work inside a loop.';
    else if (/f-string/.test(msg)) h = 'Something is wrong inside the ' + c('{ }') + ' of your f-string.';
    else h = 'Python could not read this line. Look for a missing bracket, quote, colon or comma. The mistake is often at the end of the line before.';
  } else if (type === 'IndentationError') {
    if (/expected an indented block/.test(msg)) h = 'The line after a colon must be indented: start it with 4 spaces.';
    else if (/unexpected indent/.test(msg)) h = 'This line has spaces at the start that it should not have. Line it up with the lines around it.';
    else h = 'The spaces at the start of this line do not line up with the block above. Use 4 spaces for each level.';
  } else if (type === 'TabError') h = 'Tabs and spaces are mixed. Use spaces only (the Tab key in this editor types 4 spaces).';
  else if (type === 'NameError') {
    g = msg.match(/name '(\w+)' is not defined/); var dm = String(err).match(/Did you mean: '(\w+)'/);
    h = 'Python does not know the name ' + (g ? c(g[1]) : 'you used') + '. Check the spelling and capital letters, and make sure you created it on an earlier line. If it is text, put it in quotes.' + (dm ? ' Did you mean ' + c(dm[1]) + '?' : '');
  } else if (type === 'TypeError') {
    if ((g = msg.match(/can only concatenate str \(not "(\w+)"\) to str/))) h = 'You joined text and ' + a(g[1]) + ' with ' + c('+') + '. Turn the number into text with ' + c('str()') + ', or use an f-string.';
    else if ((g = msg.match(/unsupported operand type\(s\) for (.+?): '(\w+)' and '(\w+)'/))) h = 'You cannot use ' + c(g[1]) + ' between ' + a(g[2]) + ' and ' + a(g[3]) + '. Convert one of them first' + (g[2] === 'str' || g[3] === 'str' ? ', for example with ' + c('int()') + '. Remember that ' + c('input()') + ' always gives text.' : '.');
    else if ((g = msg.match(/'(\w+)' object is not callable/))) h = 'You put ' + c('( )') + ' after ' + a(g[1]) + ', which is not a function. Did you name a variable ' + c('list') + ', ' + c('sum') + ', ' + c('str') + ' or ' + c('print') + '? Rename it.';
    else if (/missing \d+ required positional argument/.test(msg)) h = 'The function needs more values inside its brackets.';
    else if (/takes \d+ positional arguments? but \d+ (were|was) given/.test(msg)) h = 'You gave the function a different number of values than it expects. Inside a class, the first parameter must be ' + c('self') + '.';
    else if ((g = msg.match(/'(\w+)' object is not subscriptable/))) h = 'You used ' + c('[ ]') + ' on ' + a(g[1]) + '. Only things like lists, strings and dictionaries can use ' + c('[ ]') + '.';
    else if ((g = msg.match(/'(\w+)' object is not iterable/))) h = 'You tried to loop over ' + a(g[1]) + '. Loop over a list or string, or use ' + c('range()') + ' for numbers.';
    else if ((g = msg.match(/'(\w+)' object does not support item assignment/))) h = a(g[1], true) + ' cannot be changed in place. Strings and tuples are immutable, so build a new one instead.';
    else if (/can't multiply sequence by non-int/.test(msg)) h = 'You multiplied text (or a list) by something that is not a whole number. To do maths, turn the text into numbers first with ' + c('int()') + ' or ' + c('float()') + '.';
    else if (/unhashable type/.test(msg)) h = 'Lists and dictionaries cannot be dictionary keys or set items. Use a tuple instead.';
    else h = 'An operation got the wrong type of value. Check your values with ' + c('type()') + '.';
  } else if (type === 'ValueError') {
    if ((g = msg.match(/invalid literal for int\(\) with base 10: (.*)/))) h = c('int()') + ' can only convert text that is a whole number, and ' + esc(g[1]) + ' is not. Use ' + c('float()') + ' for decimals, and remove spaces or commas first.';
    else if (/could not convert string to float/.test(msg)) h = c('float()') + ' can only convert text that is a number. Remove spaces, commas or ₹ signs first.';
    else if (/values to unpack/.test(msg)) h = 'The number of names on the left of ' + c('=') + ' does not match the number of values on the right.';
    else if (/is not in list/.test(msg)) h = 'That item is not in the list. Check with ' + c('in') + ' before using ' + c('index()') + ' or ' + c('remove()') + '.';
    else if (/math domain error/.test(msg)) h = 'That maths is not possible, like the square root of a negative number.';
    else h = 'The type is right, but the value is not.';
  } else if (type === 'IndexError') h = /pop from empty/.test(msg) ? 'The list is empty, so there is nothing to take out.' : 'You asked for a position that does not exist. Positions start at 0, so the last one is ' + c('len(x) - 1') + '.';
  else if (type === 'KeyError') h = 'The dictionary has no key ' + c(msg) + '. Check the spelling and capital letters, or use ' + c('.get(key, default)') + '.';
  else if (type === 'AttributeError') {
    g = msg.match(/'(\w+)' object has no attribute '(\w+)'/);
    if (g && g[1] === 'NoneType') h = 'Your value is ' + c('None') + '. Methods like ' + c('.sort()') + ' and ' + c('.append()') + ' change the list and give back None, so do not store their result.';
    else if (g) h = a(g[1], true) + ' does not have ' + c('.' + g[2]) + '. Check the spelling, and check the type: for example lists use ' + c('append') + ' but sets use ' + c('add') + '.';
  }
  else if (type === 'ZeroDivisionError') h = 'You divided by zero. Check the number before you divide.';
  else if (type === 'FileNotFoundError') h = 'Python cannot find that file. Check the file name and its ending, like ' + c('.csv') + ' or ' + c('.txt') + '.';
  else if (type === 'ModuleNotFoundError') h = 'Python cannot find that module. Check the spelling. Some big libraries are not available in this browser runner.';
  else if (type === 'ImportError') h = 'That name does not exist in the module. Check the spelling.';
  else if (type === 'UnboundLocalError') h = 'You changed a variable inside a function before giving it a value there. Pass it in as a parameter and return the new value.';
  else if (type === 'RecursionError') h = 'The function keeps calling itself and never stops. Add a case that returns without calling itself again.';
  else if (type === 'AssertionError') h = 'An ' + c('assert') + ' check was False.';
  else if (type === 'OverflowError') h = 'The number got too big to calculate.';
  if (!h) return '';
  return '<b>Hint' + (ln ? ' (line ' + ln + ')' : '') + ':</b> ' + h;
}

/* ---------- Copy ---------- */
var COPY = [];
document.addEventListener('click', function(e){
  var b = e.target.closest('[data-copy]');
  if (!b) return;
  var txt = COPY[+b.getAttribute('data-copy')];
  var done = function(){ toast('Copied'); };
  var fail = function(){
    var pre = b.closest('.cell').querySelector('pre');
    var r = document.createRange(); r.selectNodeContents(pre);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    toast('Selected. Press Ctrl+C to copy');
  };
  try { navigator.clipboard.writeText(txt).then(done, fail); } catch(err){ fail(); }
});

/* ---------- Code cell ---------- */
var cellNo = 0, TRY = [];
function trimC(s){ return String(s).replace(/^\n+/, '').replace(/\s+$/, ''); }
function cell(code, out, opts){
  opts = opts || {};
  cellNo++;
  code = trimC(code); if (out != null) out = trimC(out);
  var ci = COPY.push(code) - 1;
  var tb = '';
  if (opts.tryit) { var ti = TRY.push({ code: (opts.pre ? trimC(opts.pre) + '\n' : '') + code + '\n', n: cellNo }) - 1; tb = '<button class="copy trycell" type="button" data-try="' + ti + '" title="Edit and run this example">▶ Try it</button>'; }
  var h = '<div class="cell"><div class="cell-top"><span class="lbl">In [' + cellNo + ']:</span><span class="ttl">' + md(opts.ttl || '') + '</span>' + tb + '<button class="copy" type="button" data-copy="' + ci + '">copy</button></div>';
  h += '<pre><code style="all:unset;font:inherit;white-space:pre">' + hl(code) + '</code></pre>';
  if (out != null && out !== '') h += '<div class="out' + (opts.err ? ' err' : '') + '"><div class="lbl2">' + (opts.err ? 'Error' : 'Out [' + cellNo + ']:') + '</div><pre>' + esc(out) + '</pre></div>';
  return h + '</div>';
}

/* ---------- Block renderer ---------- */
function note(b){
  var k = b.k || 'tip';
  var h = '<div class="call ' + k + '"><span class="tag">' + (IC[k] || '') + esc(b.h || NOTE_T[k]) + '</span>';
  if (b.b) h += '<div class="prose">' + md(b.b) + '</div>';
  if (b.items) h += '<ul class="list">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
  if (b.c) h += cell(b.c, b.o, { err: b.err, tryit: !b.nr, pre: b.pre });
  return h + '</div>';
}
function cmpSide(x){
  var h = '<div><h4>' + md(x.h) + '</h4>';
  if (x.b) h += '<div class="prose">' + md(x.b) + '</div>';
  if (x.items) h += '<ul class="list">' + x.items.map(function(y){ return '<li>' + md(y) + '</li>'; }).join('') + '</ul>';
  if (x.c) h += cell(x.c, x.o, { err: x.err, tryit: !x.nr, pre: x.pre });
  return h + '</div>';
}
function block(b, i, ctx){
  switch (b.t) {
    case 'h': return null;
    case 'h3': return '<h3>' + md(b.text) + '</h3>';
    case 'p': return '<p class="prose">' + md(b.b) + '</p>';
    case 'ul': return '<ul class="list">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
    case 'ol': return '<ol class="list">' + b.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ol>';
    case 'code': return cell(b.c, b.o, { ttl: b.ttl, err: b.err, tryit: !b.nr, pre: b.pre });
    case 'note': return note(b);
    case 'fig': return '<figure><div class="fig">' + b.svg + '</div>' + (b.cap ? '<figcaption>' + md(b.cap) + '</figcaption>' : '') + '</figure>';
    case 'table':
      var rh = !!(b.master || b.rowHead);
      return '<figure' + (b.master ? ' id="' + ctx.cid + '-b' + i + '"' : '') + '>' + (b.title ? '<h3 class="ttl3">' + md(b.title) + '</h3>' : '') + '<div class="tbl' + (b.master ? ' master' : '') + '"><table><thead><tr>' + b.head.map(function(x){ return '<th>' + md(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.rows.map(function(r){ return '<tr>' + r.map(function(x, j){ return rh && j === 0 ? '<th scope="row">' + md(x) + '</th>' : '<td>' + md(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' +
        (b.cap ? '<figcaption>' + md(b.cap) + '</figcaption>' : '') + '</figure>';
    case 'defs':
      return '<div class="defs">' + b.items.map(function(d){
        var h = '<div class="def"><div class="dt">' + md(d.t) + '</div><div class="dd">' + md(d.d) + '</div>';
        if (d.c) h += '<pre class="dc">' + hl(trimC(d.c)) + '</pre>' + (d.o != null ? '<pre class="do">' + esc(trimC(d.o)) + '</pre>' : '');
        if (d.go && byId[d.go]) h += '<button class="dgo" type="button" data-go="' + d.go + '">' + (byId[d.go].ov ? esc(byId[d.go].nav) : 'Chapter ' + byId[d.go].num) + ' →</button>';
        return h + '</div>';
      }).join('') + '</div>';
    case 'vs':
      var vh = '<div class="vs" id="' + ctx.cid + '-b' + i + '"><div class="vsh"><span class="vstag">Don\'t mix up</span><h3>' + md(b.title) + '</h3></div>';
      var vcols = b.head.length - 1;
      vh += '<div class="tbl"><table' + (vcols >= 3 ? ' style="min-width:' + (100 + vcols * 140) + 'px"' : '') + '><thead><tr>' + b.head.map(function(x){ return '<th>' + md(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.rows.map(function(r){ return '<tr>' + r.map(function(x, j){ return j === 0 ? '<th scope="row">' + md(x) + '</th>' : '<td>' + md(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      if (b.c) { vh += cell(b.c, b.o, { ttl: b.ttl || 'See the difference', err: b.err }); ctx.mounts.push({ t: 'try', key: ctx.cid + ':vs' + i, code: b.c }); vh += '<div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div>'; }
      if (b.rule) vh += '<p class="vsrule"><b>Rule of thumb:</b> ' + md(b.rule) + '</p>';
      return vh + '</div>';
    case 'cmp': return '<div class="cmp">' + cmpSide(b.l) + cmpSide(b.r) + '</div>';
    case 'prac':
      return '<div class="prac">' + b.items.map(function(t, j){
        var h = '<div class="task' + ((store.get('solved', {}))[ctx.cid + ':' + i + ':' + j] ? ' solved' : '') + '"><div class="tq"><span class="tn">Task ' + (j + 1) + '</span><div class="prose">' + md(t.q) + '</div></div>';
        ctx.mounts.push({ t: 'run', key: ctx.cid + ':' + i + ':' + j, starter: t.starter, expect: (t.out != null && t.sol && !/input\(|random/.test(t.sol) && !t.nocheck) ? t.out : null });
        h += '<div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div>';
        if (t.hint) h += '<details class="reveal"><summary>Show hint</summary><div class="prose">' + md(t.hint) + '</div></details>';
        if (t.sol) h += '<details class="reveal"><summary>Show solution</summary>' + cell(t.sol, t.out) + (t.why ? '<p class="prose" style="margin-top:8px">' + md(t.why) + '</p>' : '') + '</details>';
        return h + '</div>';
      }).join('') + '</div>';
    case 'deck': case 'mm':
      ctx.mounts.push(b);
      if (ctx.ov) return '<div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div>';
      return '<details class="xtra"><summary><span class="xk">' + (b.t === 'deck' ? 'Slides' : 'Mind map') + '</span><span class="xt">' + md(b.title || '') + '</span><span class="xn">Optional · ' + (b.t === 'deck' ? b.s.length + ' slides' : 'tap to open') + '</span></summary><div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div></details>';
    case 'anim': case 'pred':
      ctx.mounts.push(b);
      return '<div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div>';
    default: return '';
  }
}

/* ---------- Animated explainer player ---------- */
var LIVE = [];
function stopAll(){ LIVE.forEach(function(p){ p.stop(); }); LIVE = []; }
function expandTrace(tr){
  var v = {}, h = {}, out = '';
  return tr.steps.map(function(s){
    var nv = Object.assign({}, v), nh = Object.assign({}, h), ch = {};
    if (s.v) Object.keys(s.v).forEach(function(k){ if (s.v[k] === null) delete nv[k]; else { if (JSON.stringify(nv[k]) !== JSON.stringify(s.v[k])) ch[k] = 1; nv[k] = s.v[k]; } });
    if (s.h) Object.keys(s.h).forEach(function(k){ if (s.h[k] === null) delete nh[k]; else { if (nh[k] !== s.h[k]) ch['@' + k] = 1; nh[k] = s.h[k]; } });
    if (s.o) out += s.o;
    if (s.reset) { nv = {}; }
    v = nv; h = nh;
    return { l: s.l, v: nv, h: nh, out: out, c: s.c, ch: ch, sc: s.sc };
  });
}
function varRow(k, val, changed){
  var vv = Array.isArray(val) ? val[0] : val, ty = Array.isArray(val) ? val[1] : '';
  var isRef = typeof vv === 'string' && vv.charAt(0) === '@';
  return '<div class="var' + (changed ? ' chg' : '') + '"><span class="nm">' + esc(k) + '</span>' +
    (isRef ? '<span class="vl ref">→ object ' + esc(vv.slice(1)) + '</span>' : '<span class="vl">' + esc(vv) + '</span>') +
    (ty ? '<span class="ty">' + esc(ty) + '</span>' : '') + '</div>';
}
function traceHTML(tr, st){
  var lines = trimC(tr.code).split('\n');
  var h = '<div class="tr"><div class="tr-code" aria-label="Code">';
  lines.forEach(function(L, j){
    var cur = st.l === j + 1;
    h += '<div class="tr-line' + (cur ? ' cur' : '') + '"><span class="ln">' + (j + 1) + '</span><span class="ar">' + (cur ? '▶' : '') + '</span><span>' + (hl(L) || ' ') + '</span></div>';
  });
  h += '</div><div class="tr-right">';
  if (st.sc) {
    h += '<div class="pane"><h5>Variables</h5>' + st.sc.map(function(sc){
      var ks = Object.keys(sc.v || {});
      return '<div class="scope">' + esc(sc.n) + '</div><div class="vars">' + (ks.length ? ks.map(function(k){ return varRow(k, sc.v[k], sc.chg && sc.chg.indexOf(k) > -1); }).join('') : '<div class="empty">nothing yet</div>') + '</div>';
    }).join('') + '</div>';
  } else {
    var ks = Object.keys(st.v);
    h += '<div class="pane"><h5>' + esc(tr.vtitle || 'Variables') + '</h5><div class="vars">' + (ks.length ? ks.map(function(k){ return varRow(k, st.v[k], st.ch[k]); }).join('') : '<div class="empty">No variables yet</div>') + '</div></div>';
  }
  var hk = Object.keys(st.h);
  if (hk.length) h += '<div class="pane heap"><h5>Objects in memory</h5><div class="vars">' + hk.map(function(k){ return '<div class="var' + (st.ch['@' + k] ? ' chg' : '') + '"><span class="nm">object ' + esc(k) + '</span><span class="vl">' + esc(st.h[k]) + '</span></div>'; }).join('') + '</div></div>';
  if (!tr.noOut) h += '<div class="pane console"><h5>Output</h5><pre>' + (st.out ? esc(st.out) : '<span class="empty" style="padding:0">(nothing printed yet)</span>') + '</pre></div>';
  return h + '</div></div>';
}
function Player(el, a){
  var steps = a.trace ? expandTrace(a.trace) : a.frames;
  var i = 0, playing = false, timer = null, speed = 1;
  var self = { stop: function(){ playing = false; clearTimeout(timer); } };
  LIVE.push(self);
  el.innerHTML = '<div class="player"><div class="ph"><span class="badge">Explainer</span><b>' + md(a.title) + '</b></div>' +
    '<div class="stage"><div class="stage-in"></div><div class="cover"><button class="bigplay" type="button"><span class="circ">' + IC.play + '</span><span>Play explainer · ' + steps.length + ' steps</span></button></div></div>' +
    '<div class="capt" aria-live="polite"><span class="sn"></span><span class="ct"></span></div>' +
    '<div class="ctrl"><button class="ic rs" type="button" aria-label="Restart">' + IC.restart + '</button><button class="ic pv" type="button" aria-label="Previous step">' + IC.prev + '</button>' +
    '<button class="ic play pl" type="button" aria-label="Play">' + IC.play + '</button><button class="ic nx" type="button" aria-label="Next step">' + IC.next + '</button>' +
    '<div class="ticks">' + steps.map(function(_, j){ return '<button type="button" aria-label="Go to step ' + (j + 1) + '" data-j="' + j + '"></button>'; }).join('') + '</div>' +
    '<button class="spd" type="button" aria-label="Change speed">1x</button></div></div>';
  var stage = $('.stage-in', el), cover = $('.cover', el), ct = $('.ct', el), sn = $('.sn', el), pl = $('.pl', el), ticks = $$('.ticks button', el);
  function draw(){
    var st = steps[i];
    stage.innerHTML = a.trace ? traceHTML(a.trace, st) : '<div class="fr">' + st.html + '</div>';
    ct.innerHTML = md(st.c || '');
    sn.textContent = (i + 1) + '/' + steps.length;
    ticks.forEach(function(t, j){ t.className = j < i ? 'past' : j === i ? 'cur' : ''; });
    pl.innerHTML = playing ? IC.pause : IC.play;
    pl.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  }
  function schedule(){
    clearTimeout(timer);
    if (!playing) return;
    var c = steps[i].c || '';
    timer = setTimeout(function(){
      if (i < steps.length - 1) { i++; draw(); schedule(); }
      else { playing = false; draw(); }
    }, Math.max(2600, 58 * c.length) / speed);
  }
  function play(){ cover.hidden = true; if (i >= steps.length - 1) i = 0; playing = true; draw(); schedule(); }
  function pause(){ playing = false; clearTimeout(timer); draw(); }
  $('.bigplay', el).onclick = play;
  pl.onclick = function(){ playing ? pause() : play(); };
  $('.nx', el).onclick = function(){ cover.hidden = true; if (i < steps.length - 1) i++; draw(); schedule(); };
  $('.pv', el).onclick = function(){ cover.hidden = true; if (i > 0) i--; draw(); schedule(); };
  $('.rs', el).onclick = function(){ cover.hidden = true; i = 0; draw(); schedule(); };
  ticks.forEach(function(t){ t.onclick = function(){ cover.hidden = true; i = +t.getAttribute('data-j'); draw(); schedule(); }; });
  var spd = $('.spd', el), SP = [1, 1.5, 0.75];
  spd.onclick = function(){ speed = SP[(SP.indexOf(speed) + 1) % SP.length]; spd.textContent = speed + 'x'; schedule(); };
  draw();
}

/* ---------- Slide deck ---------- */
function Slides(el, d){
  var i = 0, n = d.s.length;
  el.innerHTML = '<div class="deck" tabindex="0" aria-roledescription="slide deck"><div class="ph"><span class="badge">Slides</span><b>' + md(d.title) + '</b></div><div class="sl"></div>' +
    '<div class="ctrl"><button class="btn pv" type="button">' + IC.prev.replace('<svg', '<svg fill="currentColor"') + ' Back</button><div class="sdots">' +
    d.s.map(function(_, j){ return '<button type="button" aria-label="Slide ' + (j + 1) + '" data-j="' + j + '"></button>'; }).join('') +
    '</div><button class="btn pri nx" type="button">Next ' + IC.next.replace('<svg', '<svg fill="currentColor"') + '</button></div></div>';
  var box = $('.sl', el), dots = $$('.sdots button', el), deck = $('.deck', el);
  function draw(){
    var s = d.s[i];
    var h = '<div class="slide"><div class="sk">Slide ' + (i + 1) + ' of ' + n + '</div>';
    if (s.big) h += '<div class="big">' + md(s.big) + '</div>';
    if (s.h) h += '<h3>' + md(s.h) + '</h3>';
    h += '<div class="sb">';
    if (s.b) h += String(s.b).split('\n\n').map(function(p){ return '<p>' + md(p) + '</p>'; }).join('');
    if (s.items) h += '<ul>' + s.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
    if (s.svg) h += '<div class="fig" style="padding:8px">' + s.svg + '</div>';
    if (s.c) h += cell(s.c, s.o, { err: s.err });
    h += '</div></div>';
    box.innerHTML = h;
    dots.forEach(function(dd, j){ dd.className = j === i ? 'cur' : ''; });
    $('.pv', el).disabled = i === 0; $('.pv', el).style.opacity = i === 0 ? .45 : 1;
    $('.nx', el).innerHTML = i === n - 1 ? 'Start again' : 'Next ' + IC.next.replace('<svg', '<svg fill="currentColor"');
  }
  $('.pv', el).onclick = function(){ if (i > 0) { i--; draw(); } };
  $('.nx', el).onclick = function(){ i = i === n - 1 ? 0 : i + 1; draw(); };
  dots.forEach(function(dd){ dd.onclick = function(){ i = +dd.getAttribute('data-j'); draw(); }; });
  deck.addEventListener('keydown', function(e){ if (e.key === 'ArrowRight') { $('.nx', el).click(); } if (e.key === 'ArrowLeft') { $('.pv', el).click(); } });
  draw();
}

/* ---------- Mind map ---------- */
function MindMap(el, mm){
  el.innerHTML = '<div class="mm"><div class="mmh"><b>' + md(mm.title || 'Mind map') + '</b><span class="muted" style="font-size:13px">' + md(mm.hint || (mm.kids.some(function(k){ return k.go; }) ? 'Tap a branch to open that chapter' : 'Scroll sideways on small screens')) + '</span></div><div class="mmc"></div></div>';
  var box = $('.mmc', el), wrap = $('.mm', el), lastW = 0;
  function draw(){
    var cw = Math.max(280, wrap.clientWidth - 22);
    if (Math.abs(cw - lastW) < 8) return; lastW = cw;
    box.innerHTML = mmLayout(mm, cw);
    $$('[data-go]', box).forEach(function(g){
      var go = function(){ route(g.getAttribute('data-go')); };
      g.addEventListener('click', go);
      g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }
  draw();
  if (window.ResizeObserver) { var ro = new ResizeObserver(function(){ draw(); }); ro.observe(wrap); }
}
function mmLayout(mm, cw){
  var LH = 25, BG = 14, CHW = 7.4;
  var kids = mm.kids;
  var leafText = function(l){ return typeof l === 'string' ? l : l.t; };
  var bw = function(k){ return Math.max(104, k.t.length * 8.4 + 30); };
  var leafLen = 6; kids.forEach(function(k){ (k.k || []).forEach(function(l){ leafLen = Math.max(leafLen, leafText(l).length); }); });
  var rootW = Math.max(124, mm.root.length * 10.5 + 36), rootH = 50;
  var maxBw = 0; kids.forEach(function(k){ maxBw = Math.max(maxBw, bw(k)); });
  var gapRB = 46, gapBL = 34;
  var sideW = gapRB + maxBw + gapBL + leafLen * CHW + 18;
  var twoW = rootW + 2 * sideW + 20, oneW = rootW + sideW + 24;
  var two = cw >= twoW * 0.86 && kids.length > 2;
  var right = two ? kids.slice(0, Math.ceil(kids.length / 2)) : kids;
  var left = two ? kids.slice(Math.ceil(kids.length / 2)) : [];
  var blockH = function(k){ return Math.max(1, (k.k || []).length) * LH + BG; };
  var sum = function(arr){ return arr.reduce(function(a, k){ return a + blockH(k); }, 0); };
  var H = Math.max(sum(right), sum(left), rootH + 20) + 24;
  var W = two ? twoW : oneW;
  var rootX = two ? W / 2 : rootW / 2 + 12, rootY = H / 2;
  var s = '', ci = 0;
  function sideDraw(arr, d){
    var y = (H - sum(arr)) / 2;
    arr.forEach(function(k){
      var c = (ci++ % 8) + 1, col = 'var(--c' + c + ')', soft = 'var(--c' + c + 's)';
      var bh = blockH(k), cy = y + bh / 2, w = bw(k);
      var bx = rootX + d * (rootW / 2 + gapRB + maxBw / 2);
      var x1 = rootX + d * (rootW / 2), x2 = bx - d * (w / 2);
      s += '<path d="M' + x1 + ' ' + rootY + ' C' + (x1 + d * 30) + ' ' + rootY + ' ' + (x2 - d * 30) + ' ' + cy + ' ' + x2 + ' ' + cy + '" fill="none" stroke="' + col + '" stroke-width="2.5"/>';
      var leaves = k.k || [];
      var lx = bx + d * (maxBw / 2 + gapBL);
      leaves.forEach(function(l, j){
        var ly = y + BG / 2 + j * LH + LH / 2;
        var sx = bx + d * (w / 2);
        s += '<path d="M' + sx + ' ' + cy + ' C' + (sx + d * 18) + ' ' + cy + ' ' + (lx - d * 22) + ' ' + ly + ' ' + (lx - d * 8) + ' ' + ly + '" fill="none" stroke="' + col + '" stroke-width="1.4" opacity=".7"/>';
        s += '<circle cx="' + (lx - d * 4) + '" cy="' + ly + '" r="3" fill="' + col + '"/>';
        var go = typeof l === 'object' && l.go;
        var txt = '<text x="' + (lx + d * 4) + '" y="' + (ly + 4.5) + '" text-anchor="' + (d > 0 ? 'start' : 'end') + '" class="lf"' + (go ? ' style="text-decoration:underline;text-decoration-color:var(--line)"' : '') + '>' + esc(leafText(l)) + '</text>';
        s += go ? '<g class="br go" role="link" tabindex="0" data-go="' + esc(l.go) + '" aria-label="Open ' + esc(leafText(l)) + '">' + txt + '</g>' : txt;
      });
      var g = '<rect x="' + (bx - w / 2) + '" y="' + (cy - 17) + '" width="' + w + '" height="34" rx="17" fill="' + soft + '" stroke="' + col + '" stroke-width="2"/>' +
        '<text x="' + bx + '" y="' + (cy + 5) + '" text-anchor="middle" class="bt" fill="var(--ink)">' + esc(k.t) + '</text>';
      s += k.go ? '<g class="br go" role="link" tabindex="0" data-go="' + esc(k.go) + '" aria-label="Open ' + esc(k.t) + '">' + g + '</g>' : '<g class="br">' + g + '</g>';
      y += bh;
    });
  }
  sideDraw(right, 1); sideDraw(left, -1);
  s += '<rect x="' + (rootX - rootW / 2) + '" y="' + (rootY - rootH / 2) + '" width="' + rootW + '" height="' + rootH + '" rx="14" fill="var(--accent)"/>' +
    '<text x="' + rootX + '" y="' + (rootY + 6) + '" text-anchor="middle" class="rt">' + esc(mm.root) + '</text>';
  var wAttr = W <= cw ? 'width="' + W + '" style="max-width:100%"' : 'width="' + W + '"';
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" ' + wAttr + ' role="img" aria-label="Mind map: ' + esc(mm.root) + '">' + s + '</svg>';
}

/* ---------- Predict the output ---------- */
function Predict(el, b){
  el.innerHTML = '<div class="pred"><div class="ph2"><span class="q">?</span>' + md(b.q || 'Predict the output') + '</div>' + cell(b.c, null, { ttl: 'What happens when this runs?' }) +
    '<div class="opts">' + b.o.map(function(o, j){ return '<button class="opt" type="button" data-j="' + j + '"><span class="l">' + 'ABCD'.charAt(j) + '</span><span class="t">' + md(o) + '</span></button>'; }).join('') + '</div><div class="fb"></div></div>';
  var btns = $$('.opt', el);
  btns.forEach(function(bt){
    bt.onclick = function(){
      var j = +bt.getAttribute('data-j');
      btns.forEach(function(x, k){ x.disabled = true; if (k === b.a) x.classList.add('right'); else if (k === j) x.classList.add('wrong'); });
      $('.fb', el).innerHTML = '<div class="expl"><b>' + (j === b.a ? 'Correct!' : 'Not quite.') + '</b>' + md(b.e) + '</div><div class="row" style="margin-top:8px"><button class="btn again" type="button">Try again</button></div>';
      $('.again', el).onclick = function(){ Predict(el, b); };
    };
  });
}

/* ---------- Quiz ---------- */
function Quiz(el, qs, key, opts){
  opts = opts || {};
  var i = 0, score = 0, picks = [];
  function render(){
    if (i >= qs.length) return result();
    var q = qs[i];
    var h = '<div class="quiz"><div class="qmeta"><span>Question ' + (i + 1) + ' of ' + qs.length + (q.from ? ' · ' + esc(q.from) : '') + '</span><span>Score ' + score + '</span></div>' +
      '<div class="qbar"><i style="width:' + Math.round(i / qs.length * 100) + '%"></i></div><div class="qtext">' + md(q.q) + '</div>';
    if (q.c) h += cell(q.c, null);
    h += '<div class="opts">' + q.o.map(function(o, j){ return '<button class="opt" type="button" data-j="' + j + '"><span class="l">' + 'ABCD'.charAt(j) + '</span><span class="t">' + md(o) + '</span></button>'; }).join('') + '</div><div class="fb"></div></div>';
    el.innerHTML = h;
    var btns = $$('.opt', el);
    btns.forEach(function(bt){
      bt.onclick = function(){
        var j = +bt.getAttribute('data-j'); picks[i] = j; if (j === q.a) score++;
        btns.forEach(function(x, k){ x.disabled = true; if (k === q.a) x.classList.add('right'); else if (k === j) x.classList.add('wrong'); });
        $('.fb', el).innerHTML = '<div class="expl"><b>' + (j === q.a ? 'Correct!' : 'Not quite.') + '</b>' + md(q.e) + '</div><div class="row" style="margin-top:10px"><button class="btn pri nq" type="button">' + (i === qs.length - 1 ? 'See my score' : 'Next question') + '</button></div>';
        var nq = $('.nq', el); nq.onclick = function(){ i++; render(); el.scrollIntoView({ block: 'nearest' }); }; nq.focus({ preventScroll: true });
      };
    });
  }
  function result(){
    var best = store.get('qz:' + key, null);
    if (best === null || score > best) { best = score; store.set('qz:' + key, best); }
    var pct = Math.round(score / qs.length * 100);
    var msg = pct === 100 ? 'Perfect score. You own this topic.' : pct >= 70 ? 'Nice work. Review the ones you missed below.' : 'Good start. Re-read the "Trap!" boxes and try again.';
    var h = '<div class="quiz"><div class="eyebrow">Your result</div><div class="score">' + score + ' / ' + qs.length + '</div><p class="muted">' + msg + ' Best: ' + best + ' / ' + qs.length + '</p>';
    if (opts.exam) {
      var per = {};
      qs.forEach(function(q, j){ var k = q.from || 'Other'; per[k] = per[k] || [0, 0]; per[k][1]++; if (picks[j] === q.a) per[k][0]++; });
      h += '<div class="tbl"><table><thead><tr><th>Chapter</th><th>Score</th></tr></thead><tbody>' + Object.keys(per).map(function(k){ return '<tr><td>' + esc(k) + '</td><td>' + per[k][0] + ' / ' + per[k][1] + '</td></tr>'; }).join('') + '</tbody></table></div>';
    }
    h += '<div class="review">' + qs.map(function(q, j){ var ok = picks[j] === q.a; return '<div><span class="' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Correct' : 'Review') + '</span><span>' + md(q.q) + (ok ? '' : ' → <b>' + md(q.o[q.a]) + '</b>') + '</span></div>'; }).join('') + '</div>';
    h += '<div class="row"><button class="btn pri again" type="button">' + (opts.exam ? 'New exam' : 'Try again') + '</button></div></div>';
    el.innerHTML = h;
    $('.again', el).onclick = function(){ if (opts.onAgain) return opts.onAgain(); i = 0; score = 0; picks = []; render(); };
    updateSide();
  }
  render();
}

/* ---------- Flashcards with spaced repetition ----------
   Again = see it again today, Good = next box, Easy = skip a box. Boxes wait 0, 1, 3, 7, 16, 35 days. */
var SRS_DAYS = [0, 1, 3, 7, 16, 35];
function dayNo(){ var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
function dueCount(cards){ var srs = store.get('srs', {}), t = dayNo(); return cards.filter(function(c){ return srs[c.id] && srs[c.id].due <= t; }).length; }
function Deck(el, cards, opts){
  opts = opts || {};
  var known = store.get('known', {}), srs = store.get('srs', {});
  var order = cards.map(function(_, j){ return j; }), idx = 0, flipped = false;
  var mode = opts.mode || 'all';
  function isDue(c){ return srs[c.id] && srs[c.id].due <= dayNo(); }
  function list(){ return order.filter(function(j){ var c = cards[j]; return mode === 'due' ? isDue(c) : mode === 'new' ? !srs[c.id] : true; }); }
  function nextBox(c, g){ var bx = (srs[c.id] || { box: 0 }).box || 0; return g === 0 ? 0 : Math.min(5, bx + g); }
  function when(c, g){ var d = g === 0 ? 0 : SRS_DAYS[nextBox(c, g)]; return d === 0 ? 'today' : d === 1 ? 'tomorrow' : 'in ' + d + ' days'; }
  function rate(j, g){
    var c = cards[j], bx = nextBox(c, g);
    srs[c.id] = { box: bx, due: dayNo() + (g === 0 ? 0 : SRS_DAYS[bx]) };
    if (g === 0) delete known[c.id]; else known[c.id] = 1;
    store.set('srs', srs); store.set('known', known); updateSide();
    if (g === 0) { order.splice(order.indexOf(j), 1); order.push(j); }
    else if (mode === 'all') idx++;
    flipped = false; render();
  }
  function render(){
    var L = list(), nd = cards.filter(isDue).length, nn = cards.filter(function(c){ return !srs[c.id]; }).length;
    var modes = '<span class="row fcmodes"><button class="btn' + (mode === 'due' ? ' pri' : '') + '" type="button" data-mode="due">Due today (' + nd + ')</button><button class="btn' + (mode === 'new' ? ' pri' : '') + '" type="button" data-mode="new">New (' + nn + ')</button><button class="btn' + (mode === 'all' ? ' pri' : '') + '" type="button" data-mode="all">All (' + cards.length + ')</button><button class="btn sh" type="button">Shuffle</button></span>';
    if (!L.length) {
      var msg = mode === 'due' ? '<h3 class="h2">Nothing due today 🎉</h3><p class="muted" style="margin-top:6px">You have reviewed every card that was due. Come back tomorrow, or learn some new cards.</p>'
        : '<h3 class="h2">No new cards left</h3><p class="muted" style="margin-top:6px">You have seen every card in this deck. Review the ones due today.</p>';
      el.innerHTML = '<div class="fc"><div class="fcbar">' + modes + '</div><div class="card">' + msg + '</div></div>';
    } else {
      if (idx >= L.length) idx = 0;
      var j = L[idx], c = cards[j], e = srs[c.id];
      var h = '<div class="fc"><div class="fcbar">' + modes + '<span>Card ' + (idx + 1) + ' of ' + L.length + (e ? ' · seen before' : ' · new card') + '</span></div>';
      h += '<button class="flip' + (flipped ? ' back' : '') + '" type="button" aria-label="Flip card">';
      if (flipped) h += '<span class="fside">Answer</span><span class="fa">' + md(c.b) + (c.c ? '<pre>' + hl(c.c) + '</pre>' : '') + '</span><span class="hint">How well did you know it?</span>';
      else h += '<span class="fside">Question</span><span class="fq">' + md(c.f) + '</span><span class="hint">Say the answer out loud, then tap to flip</span>' + (c.from ? '<span class="from">' + esc(c.from) + '</span>' : '');
      h += '</button>';
      if (flipped) h += '<div class="row rate"><button class="btn again" type="button" data-g="0"><b>Again</b><small>' + when(c, 0) + '</small></button><button class="btn good" type="button" data-g="1"><b>Good</b><small>' + when(c, 1) + '</small></button><button class="btn easy" type="button" data-g="2"><b>Easy</b><small>' + when(c, 2) + '</small></button></div>';
      else h += '<div class="row"><button class="btn pv" type="button">Previous</button><button class="btn pri fl" type="button">Show answer</button><button class="btn nx" type="button">Skip</button></div>';
      el.innerHTML = h + '</div>';
      $('.flip', el).onclick = function(){ flipped = !flipped; render(); var f = $('.flip', el); if (f) f.focus({ preventScroll: true }); };
      if (flipped) $$('.rate button', el).forEach(function(bt){ bt.onclick = function(){ rate(j, +bt.getAttribute('data-g')); }; });
      else {
        $('.fl', el).onclick = function(){ flipped = true; render(); };
        $('.nx', el).onclick = function(){ idx = (idx + 1) % L.length; render(); };
        $('.pv', el).onclick = function(){ idx = (idx - 1 + L.length) % L.length; render(); };
      }
    }
    $$('[data-mode]', el).forEach(function(bt){ bt.onclick = function(){ mode = bt.getAttribute('data-mode'); idx = 0; flipped = false; render(); }; });
    $('.sh', el).onclick = function(){ for (var k = order.length - 1; k > 0; k--) { var r = Math.floor(Math.random() * (k + 1)); var t = order[k]; order[k] = order[r]; order[r] = t; } idx = 0; flipped = false; render(); };
  }
  render();
}
function chCards(c){ return (c.cards || []).map(function(x, j){ return { id: c.id + ':' + j, f: x[0], b: x[1], c: x[2], from: c.title }; }); }
function chQuiz(c){ return (c.quiz || []).map(function(q){ return Object.assign({ from: c.title }, q); }); }

/* ---------- Python runner (Pyodide in a worker) ---------- */
var PY_INDEX = /[?&]localpy\b/.test(location.search) ? 'pyodide_local/' : 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/';
var PY = { worker: null, state: 'idle', boot: null, cb: {}, seq: 0, listeners: [] };
function pySetState(s, msg){ PY.state = s; PY.msg = msg || ''; PY.listeners.forEach(function(f){ f(s, PY.msg); }); }
function pyBoot(){
  if (PY.boot) return PY.boot;
  pySetState('loading', 'Starting Python... (first time takes 5 to 15 seconds)');
  PY.boot = new Promise(function(resolve, reject){
    try { PY.worker = new Worker('py-worker.js'); } catch (e) { pySetState('fail', 'Could not start Python in this browser.'); reject(e); return; }
    PY.worker.onmessage = function(ev){
      var m = ev.data;
      if (m.type === 'ready') { pySetState('ready', 'Python ' + m.version + ' ready'); resolve(); }
      else if (m.type === 'fatal') { pySetState('fail', 'Python could not load. Check your internet connection and refresh.'); PY.boot = null; reject(new Error(m.error)); }
      else if (m.type === 'status') { var c = PY.cb[m.id]; if (c && c.status) c.status(m.text); }
      else if (m.type === 'done') { var d = PY.cb[m.id]; delete PY.cb[m.id]; if (d) d.done(m); }
    };
    PY.worker.onerror = function(){ pySetState('fail', 'Python could not load. Check your internet connection and refresh.'); PY.boot = null; reject(new Error('worker error')); };
    PY.worker.postMessage({ type: 'init', indexURL: PY_INDEX, data: ['hotel_bookings.csv'] });
  });
  return PY.boot;
}
function pyRun(code, inputs, onStatus){
  return pyBoot().then(function(){
    return new Promise(function(resolve){
      var id = ++PY.seq;
      PY.cb[id] = { done: resolve, status: onStatus };
      PY.worker.postMessage({ type: 'run', id: id, code: code, inputs: inputs });
    });
  });
}
function pyStop(){
  if (PY.worker) PY.worker.terminate();
  Object.keys(PY.cb).forEach(function(k){ PY.cb[k].done({ status: 'stopped', out: '', err: '' }); });
  PY.cb = {}; PY.worker = null; PY.boot = null;
  pySetState('idle', 'Stopped. Python restarts on your next Run.');
}

/* Code box with highlighting overlay */
function CodeBox(el, b){
  var key = 'code:' + b.key;
  var starter = b.starter || '# Write your code here, then press Run (or Ctrl + Enter)\n';
  var saved = store.get(key, null);
  el.innerHTML = '<div class="runner"><div class="rbar"><span class="rlbl">' + esc(b.label || 'Try it yourself') + '</span><span class="rstat" aria-live="polite"></span></div>' +
    '<div class="ed"><pre class="edhl" aria-hidden="true"></pre><textarea class="edta" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Python code editor"></textarea></div>' +
    '<div class="ract"><button class="btn pri rrun" type="button"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l10 6-10 6z"/></svg>Run</button>' +
    (b.expect != null ? '<button class="btn rchkb" type="button"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 5"/></svg>Check my answer</button>' : '') +
    '<button class="btn rstop" type="button" hidden>Stop</button><button class="btn rreset" type="button">Reset</button><span class="muted rhint">Ctrl + Enter runs your code</span></div>' +
    '<div class="rout" hidden><div class="lbl2">Output</div><pre class="rtext"></pre><div class="ehint" hidden></div><pre class="rerr" hidden></pre>' +
    '<form class="inrow" hidden><input class="inbox" type="text" autocomplete="off" aria-label="Your answer for input()"><button class="btn pri" type="submit">Enter</button></form><p class="rnote" hidden></p></div><div class="rchk" hidden aria-live="polite"></div></div>';
  var ta = $('.edta', el), pre = $('.edhl', el), stat = $('.rstat', el), runB = $('.rrun', el), stopB = $('.rstop', el);
  var out = $('.rout', el), otext = $('.rtext', el), oerr = $('.rerr', el), inrow = $('.inrow', el), inbox = $('.inbox', el);
  var inputs = [], running = false, checking = false, chk = $('.rchk', el), note = $('.rnote', el), ehint = $('.ehint', el);
  ta.value = saved != null ? saved : starter;
  function paint(){ pre.innerHTML = hl(ta.value) + '\n'; }
  function save(){ store.set(key, ta.value); }
  paint();
  function showState(){
    if (running) return;
    stat.textContent = PY.state === 'ready' ? PY.msg : PY.state === 'loading' ? PY.msg : PY.state === 'fail' ? PY.msg : (PY.msg || 'Python starts when you press Run');
    stat.className = 'rstat' + (PY.state === 'fail' ? ' bad' : PY.state === 'ready' ? ' ok' : '');
  }
  PY.listeners.push(showState); showState();
  ta.addEventListener('input', function(){ paint(); save(); });
  ta.addEventListener('scroll', function(){ pre.scrollTop = ta.scrollTop; pre.scrollLeft = ta.scrollLeft; });
  ta.addEventListener('keydown', function(e){
    var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); start(); return; }
    if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); ta.setRangeText('    ', s, en, 'end'); paint(); save(); return; }
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      var ls = v.lastIndexOf('\n', s - 1) + 1;
      var n = 0; while (n < 4 && v.charAt(ls + n) === ' ') n++;
      if (n) { ta.setRangeText('', ls, ls + n, 'preserve'); ta.selectionStart = ta.selectionEnd = Math.max(ls, s - n); paint(); save(); }
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      var lineStart = v.lastIndexOf('\n', s - 1) + 1;
      var line = v.slice(lineStart, s);
      var ind = (line.match(/^ */) || [''])[0];
      if (/:\s*(#.*)?$/.test(line)) ind += '    ';
      e.preventDefault(); ta.setRangeText('\n' + ind, s, en, 'end'); paint(); save();
    }
  });
  function setRunning(on){
    running = on; runB.disabled = on; stopB.hidden = !on;
    if (on) { stat.textContent = PY.state === 'ready' ? 'Running...' : PY.msg; stat.className = 'rstat'; }
    else showState();
  }
  function exec(){
    setRunning(true);
    out.hidden = false;
    var code = ta.value;
    pyRun(code, inputs.slice(), function(t){ stat.textContent = t; }).then(function(r){
      setRunning(false);
      if (r.status === 'stopped') { otext.textContent = (otext.textContent || '') ; oerr.hidden = false; oerr.textContent = 'Stopped. If your loop never ends, check that something changes each round so the condition can become False.'; inrow.hidden = true; return; }
      otext.textContent = r.out || (r.status === 'ok' ? '(no output: add print() to see results)' : '');
      otext.classList.toggle('dim', !r.out);
      if (r.status === 'error') { oerr.hidden = false; oerr.textContent = r.err; var eh = errHint(r.err); ehint.hidden = !eh; ehint.innerHTML = eh; } else { oerr.hidden = true; ehint.hidden = true; }
      if (r.status === 'input') { inrow.hidden = false; inbox.value = ''; inbox.focus({ preventScroll: true }); }
      else inrow.hidden = true;
      note.hidden = !(/\bnumpy\b/.test(code) && /int32/.test(r.out || ''));
      note.textContent = 'Note: this browser runner stores NumPy whole numbers as int32. Jupyter on your laptop shows int64. Both are normal.';
      if (checking) { checking = false; showCheck(r); }
    }, function(){
      setRunning(false);
      oerr.hidden = false; oerr.textContent = 'Python could not start. Check your internet connection, then refresh the page.';
    });
  }
  function norm(t){ return String(t || '').replace(/\r/g, '').split('\n').map(function(l){ return l.replace(/\s+$/, ''); }).join('\n').replace(/^\n+/, '').replace(/\n+$/, ''); }
  function showCheck(r){
    var want = norm(b.expect), got = norm(r.out), h;
    chk.hidden = false;
    if (r.status === 'error') { chk.className = 'rchk no'; chk.innerHTML = '<b>Your code stopped with an error.</b> Read the hint and the red message above, fix it, then check again.'; return; }
    if (r.status !== 'ok') { chk.className = 'rchk no'; chk.innerHTML = '<b>Your code is waiting for input.</b> Type it in the box above.'; return; }
    if (got === want) {
      var sv = store.get('solved', {}); sv[b.key] = 1; store.set('solved', sv);
      var tk = el.closest('.task'); if (tk) tk.classList.add('solved');
      var tks = $$('.task', view).filter(function(t){ return $('.rchkb', t); }), nOk = tks.filter(function(t){ return t.classList.contains('solved'); }).length;
      chk.className = 'rchk ok win'; chk.innerHTML = '<span class="wbadge" aria-hidden="true">✓</span><b>Correct!</b> Your output matches the expected output exactly.' + (tks.length > 1 ? '<div class="wcount">' + (nOk === tks.length ? '🎉 All ' + tks.length + ' practice tasks on this page solved!' : nOk + ' of ' + tks.length + ' practice tasks on this page solved') + '</div>' : '');
      return;
    }
    if (got.replace(/\s+/g, '') === want.replace(/\s+/g, '')) { chk.className = 'rchk almost'; chk.innerHTML = '<b>Almost!</b> The values are right. Only the spaces or line breaks are different. Compare with the expected output below.'; }
    else {
      var gl = got.split('\n'), wl = want.split('\n'), i = 0;
      while (i < wl.length && gl[i] === wl[i]) i++;
      chk.className = 'rchk no';
      chk.innerHTML = '<b>Not yet.</b> ' + (got === '' ? 'Your code printed nothing. Add <code>print()</code>.' : 'Line ' + (i + 1) + ' is different: you printed <code>' + esc(gl[i] == null ? '(nothing)' : gl[i]) + '</code>, expected <code>' + esc(wl[i] == null ? '(nothing)' : wl[i]) + '</code>.');
    }
    chk.innerHTML += '<div class="lbl2" style="padding:8px 0 2px">Expected output</div><pre>' + esc(want) + '</pre>';
  }
  function start(){ if (running) return; inputs = []; otext.textContent = ''; oerr.hidden = true; ehint.hidden = true; inrow.hidden = true; chk.hidden = true; exec(); }
  var cb = $('.rchkb', el); if (cb) cb.onclick = function(){ if (running) return; checking = true; start(); };
  runB.onclick = start;
  stopB.onclick = function(){ pyStop(); };
  $('.rreset', el).onclick = function(){ ta.value = starter; paint(); save(); out.hidden = true; inputs = []; };
  inrow.addEventListener('submit', function(e){ e.preventDefault(); inputs.push(inbox.value); inrow.hidden = true; exec(); });
}

/* A button that turns a worked example into an editable, runnable copy */
function TryBtn(el, b){
  el.innerHTML = '<button class="btn trybtn" type="button"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l10 6-10 6z"/></svg>Edit and run this example</button>';
  $('.trybtn', el).onclick = function(){
    CodeBox(el, { key: b.key, starter: trimC(b.code) + '\n', label: 'Your copy of this example' });
    var ta = $('.edta', el); if (ta) ta.focus({ preventScroll: true });
  };
}

/* ---------- Revision posters ---------- */
function pstCard(cd){
  var h = '<div class="pcd' + (cd.span ? ' span' : '') + '"' + (cd.k ? ' data-k="' + cd.k + '"' : '') + '>';
  if (cd.h) h += '<h4>' + md(cd.h) + '</h4>';
  h += '<div class="pcb">';
  if (cd.sub) h += '<p class="psub">' + md(cd.sub) + '</p>';
  if (cd.svg) h += '<div class="psvg">' + cd.svg + '</div>';
  if (cd.c) h += '<pre class="pcode">' + hl(trimC(cd.c)) + '</pre>' + (cd.o != null ? '<pre class="pout">' + esc(trimC(cd.o)) + '</pre>' : '');
  if (cd.verdict) h += '<p class="pverd ' + cd.verdict[0] + '">' + md(cd.verdict[1]) + '</p>';
  if (cd.items) h += '<ul class="pul">' + cd.items.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
  if (cd.rules) h += '<div class="prules">' + cd.rules.map(function(r){ return '<div class="prule" data-k="' + r[0] + '"><b>' + md(r[1]) + '</b><span>' + md(r[2] || '') + '</span></div>'; }).join('') + '</div>';
  if (cd.table) h += pstTable(cd.table);
  if (cd.foot) h += '<p class="pfoot">' + md(cd.foot) + '</p>';
  return h + '</div></div>';
}
function pstTable(t){
  return '<div class="ptbl"><table><thead><tr>' + t.head.map(function(x){ var k = Array.isArray(x) ? x[1] : ''; var tx = Array.isArray(x) ? x[0] : x; return '<th' + (k ? ' data-k="' + k + '"' : '') + '>' + md(tx) + '</th>'; }).join('') + '</tr></thead><tbody>' +
    t.rows.map(function(r){ return '<tr>' + r.map(function(x, j){ return (j === 0 ? '<th scope="row">' : '<td>') + md(x) + (j === 0 ? '</th>' : '</td>'); }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
}
function posterHTML(p, num){
  var h = '<div class="poster"><div class="phd"><span class="pnum">Chapter ' + num + ' · Revision poster</span><h3>' + md(p.title) + '</h3>' + (p.sub ? '<p>' + md(p.sub) + '</p>' : '') + '</div><div class="pmods">';
  p.mods.forEach(function(m, i){
    h += '<section class="pmod"><div class="pmh"><span>Module ' + (i + 1) + '</span><h4>' + md(m.title) + '</h4>' + (m.sub ? '<p>' + md(m.sub) + '</p>' : '') + '</div><div class="pgrid2">' + m.cards.map(pstCard).join('') + '</div>';
    if (m.table) h += pstTable(m.table);
    h += '</section>';
  });
  return h + '</div></div>';
}

/* ---------- Picture cheat sheets ---------- */
var SHI = {
  lockC: '<svg viewBox="0 0 32 32"><path d="M10 14v-4a6 6 0 0 1 12 0v4" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/><rect x="6" y="14" width="20" height="15" rx="3" fill="#FBBF24"/><circle cx="16" cy="21" r="2.4" fill="#5B3A00"/></svg>',
  lockO: '<svg viewBox="0 0 32 32"><path d="M10 14V9a6 6 0 0 1 11.6-2.2" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/><rect x="6" y="14" width="20" height="15" rx="3" fill="#FBBF24"/><circle cx="16" cy="21" r="2.4" fill="#5B3A00"/></svg>',
  ord: '<svg viewBox="0 0 32 32" fill="currentColor"><text x="4" y="11" font-size="8" font-family="monospace" font-weight="700">1</text><text x="4" y="19.5" font-size="8" font-family="monospace" font-weight="700">2</text><text x="4" y="28" font-size="8" font-family="monospace" font-weight="700">3</text><rect x="12" y="6" width="16" height="3" rx="1.5"/><rect x="12" y="14.5" width="16" height="3" rx="1.5"/><rect x="12" y="23" width="16" height="3" rx="1.5"/></svg>',
  shuf: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h5c6 0 8 14 14 14h5M4 23h5c3 0 4.5-3 6-6M19 12c1.5-2 2.5-3 4-3h5M24 5l4 4-4 4M24 19l4 4-4 4"/></svg>',
  yes: '<svg viewBox="0 0 32 32" fill="none" stroke="#4ADE80" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12.5"/><path d="M10 16.5l4 4 8-9"/></svg>',
  no: '<svg viewBox="0 0 32 32" fill="none" stroke="#F87171" stroke-width="3" stroke-linecap="round"><circle cx="16" cy="16" r="12.5"/><path d="M11 11l10 10M21 11L11 21"/></svg>',
  key: '<svg viewBox="0 0 32 32" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"><circle cx="10" cy="16" r="5.5"/><path d="M15.5 16H28M23 16v5M27 16v4"/></svg>',
  warn: '<svg viewBox="0 0 32 32" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M16 4l13 23H3z"/><path d="M16 12v7M16 23v.5"/></svg>',
  down: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4v22M8 18l8 8 8-8"/></svg>',
  right: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16h22M18 8l8 8-8 8"/></svg>'
};
function shFact(f, label){
  var k = f[0], v = esc(f[1]).replace(/\n/g, '<br>').replace(/([a-z])(Error|Exists|Found)\b/g, '$1<wbr>$2'), mid;
  if (k === 'big') mid = '<code class="sh-big">' + v + '</code>';
  else if (k === 'txt') mid = '<span class="sh-txt">' + v + '</span>';
  else if (k === 'dash') mid = '<span class="sh-txt sh-dim">' + v + '</span>';
  else mid = '<span class="sh-i">' + (SHI[k] || '') + '</span><span class="sh-v">' + v + '</span>';
  return '<div class="sh-f"><span class="sh-l">' + esc(label) + '</span>' + mid + '</div>';
}
function sheetHTML(s, n){
  var t = s.title.map(function(x){ return Array.isArray(x) ? '<span class="sh-' + x[1] + '">' + esc(x[0]) + '</span>' : esc(x); }).join('');
  var h = '<figure class="sheet" id="sheet' + n + '"><div class="sh-h"><h3>' + t + '</h3><p>' + esc(s.sub) + '</p></div>';
  (s.groups || [{ cols: s.cols, rows: s.rows }]).forEach(function(g){
    if (g.h) h += '<div class="sh-gh">' + esc(g.h) + '</div>';
    h += '<div class="sh-rows' + (g.text ? ' sh-text' : '') + '">';
    g.rows.forEach(function(r){
      h += '<div class="sh-row sh-c-' + r.c + '"><div class="sh-pic"><img src="img/' + r.img + '.webp" alt="" width="200" height="200" loading="lazy" decoding="async"></div>' +
        '<div class="sh-name"><b' + (r.name.length > 9 ? ' class="sh-nl"' : '') + '>' + esc(r.name) + '</b><span class="sh-sym' + (r.sym.length > 9 ? ' sh-sxl' : r.sym.length > 6 ? ' sh-sl' : '') + '">' + esc(r.sym) + '</span><span class="sh-symn">' + esc(r.symName) + '</span>' +
        (r.empty ? '<span class="sh-empty">empty: <code>' + esc(r.empty) + '</code>' + (r.trap ? ' <em>' + esc(r.trap) + '</em>' : '') + '</span>' : '') + '</div>' +
        '<div class="sh-facts"><div class="sh-grid" style="--n:' + g.cols.length + (g.w ? ';grid-template-columns:' + g.w.map(function(x){ return 'minmax(0,' + x + 'fr)'; }).join(' ') : '') + '">' + r.facts.map(function(f, j){ return shFact(f, g.cols[j]); }).join('') +
        '</div><p class="sh-cap">' + esc(r.cap) + (r.ex ? ' <code>' + esc(r.ex) + '</code>' : '') + '</p></div></div>';
    });
    h += '</div>';
  });
  h += (s.foot ? '<p class="sh-foot">' + esc(s.foot) + '</p>' : '') + '<p class="sh-credit">Pictures made with AI (Canva and Gemini). Text and icons checked by hand.</p></figure>';
  h += '<div class="row sh-act"><a class="btn" href="img/sheet-ov' + n + '.jpg" download="python-part' + n + '-cheat-sheet.jpg"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 2v8M4.5 6.5L8 10l3.5-3.5M3 13h10"/></svg>Save as image</a><span class="muted" style="font-size:14px">Keep it on your phone for quick revision.</span></div>';
  return h;
}

/* ---------- Mount helpers ---------- */
function mountAll(root, mounts){
  $$('.mount', root).forEach(function(m){
    var b = mounts[+m.getAttribute('data-m')];
    if (b.t === 'anim') Player(m, b);
    else if (b.t === 'deck') Slides(m, b);
    else if (b.t === 'mm') MindMap(m, b);
    else if (b.t === 'pred') Predict(m, b);
    else if (b.t === 'run') CodeBox(m, b);
    else if (b.t === 'try') TryBtn(m, b);
  });
}

/* ---------- Sidebar ---------- */
var view = $('#view'), side = $('#side');
function buildSide(){
  var tools = [['home', 'Home', IC.home], ['flashcards', 'Flashcards', IC.cards], ['exam', 'Final exam', IC.exam], ['cheatsheet', 'Cheat sheet', IC.cheat], ['posters', 'Posters', IC.poster], ['overviews', 'Overviews', IC.ov], ['exercises', 'Exercises', IC.key], ['myprojects', 'My Projects', IC.proj], ['reference', 'Reference', IC.exam], ['glossary', 'Glossary', IC.cheat], ['videos', 'Videos', IC.play]];
  $('#navtools').innerHTML = tools.map(function(t){ return '<button type="button" data-go="' + t[0] + '">' + t[2].replace('<svg', '<svg stroke="currentColor"') + t[1] + '</button>'; }).join('');
  $('#parts').innerHTML = PARTS.map(function(p){
    var chs = CH.filter(function(c){ return c.part === p.n; }), ov = ovOf(p.n);
    return '<div class="part" data-part="' + p.n + '"><div class="part-h">Part ' + p.n + ' · ' + esc(p.title) + '</div>' + chs.map(function(c){
      return '<button class="chlink" type="button" data-go="' + c.id + '" data-q="' + esc((c.title + ' ' + (c.nav || '') + ' ' + (c.keys || '')).toLowerCase()) + '"><span class="dot">' + c.num + '</span><span>' + esc(c.nav || c.title) + '</span>' + (c.tricky ? '<span class="tk">tricky</span>' : '') + '</button>';
    }).join('') + (ov ? '<button class="chlink ovl" type="button" data-go="' + ov.id + '" data-q="' + esc((ov.title + ' ' + ov.nav + ' overview summary definitions differences compare vs table ' + (ov.keys || '')).toLowerCase()) + '"><span class="dot">★</span><span>' + esc(ov.nav) + '</span></button>' : '') + (PJP[p.n] ? '<button class="chlink btl pjl" type="button" data-go="projects-' + p.n + '" data-q="' + esc(('projects project practice score part ' + p.n + ' ' + PJP[p.n].ids.map(function(id){ return PJ[id].title; }).join(' ')).toLowerCase()) + '"><span class="dot">◆</span><span>Part ' + p.n + ' projects</span></button>' : '') + '</div>';
  }).join('');
  $$('.chlink', side).forEach(function(b){ var c = byId[b.getAttribute('data-go')]; if (c && !c.ov && BT[c.id]) b.insertAdjacentHTML('afterend', '<button class="chlink btl" type="button" data-go="test-' + c.id + '" data-q="' + esc(('big test exam questions ' + c.title + ' ' + (c.nav || '')).toLowerCase()) + '"><span class="dot">✎</span><span>' + c.num + '.1 Big Test</span></button>'); });
  side.addEventListener('click', function(e){ var b = e.target.closest('[data-go]'); if (b) route(b.getAttribute('data-go')); });
  $('#q').addEventListener('input', function(){
    var q = this.value.toLowerCase().trim();
    $$('.chlink', side).forEach(function(b){ b.hidden = q && b.getAttribute('data-q').indexOf(q) < 0; });
    $$('.part', side).forEach(function(p){ p.hidden = !$$('.chlink', p).some(function(b){ return !b.hidden; }); });
  });
  $('#menuBtn').onclick = function(){ side.classList.add('open'); $('#scrim').classList.add('open'); };
  $('#scrim').onclick = closeDrawer;
  var app = $('.app'), tog = $('#sideTog');
  function setMini(mini){ app.classList.toggle('mini', mini); tog.setAttribute('aria-expanded', String(!mini)); tog.setAttribute('aria-label', mini ? 'Show the sidebar' : 'Hide the sidebar'); tog.title = mini ? 'Show the sidebar' : 'Hide the sidebar'; }
  setMini(!!store.get('sideMini', 0));
  tog.onclick = function(){ var mini = !app.classList.contains('mini'); setMini(mini); store.set('sideMini', mini ? 1 : 0); };
}
function closeDrawer(){ side.classList.remove('open'); $('#scrim').classList.remove('open'); }
function updateSide(cur){
  var done = store.get('done', {});
  if (cur !== undefined) updateSide.cur = cur;
  var bts = store.get('bt', {});
  $$('.chlink', side).forEach(function(b){
    var id = b.getAttribute('data-go');
    if (/^projects-/.test(id)) { var PP = PJP[+id.slice(9)], nd = PP.ids.filter(pjReady).length, cu = updateSide.cur || ''; b.classList.toggle('done', nd === PP.ids.length); b.classList.toggle('on', id === cu || PP.ids.indexOf(cu.slice(8)) > -1); $('.dot', b).textContent = nd === PP.ids.length ? '✓' : '◆'; b.title = nd + ' of ' + PP.ids.length + ' projects ready'; return; }
    if (/^test-/.test(id)) { var sc = bts[id.slice(5)], ps = !!(sc && sc.best >= BT_PASS); b.classList.toggle('done', ps); b.classList.toggle('on', id === updateSide.cur); $('.dot', b).textContent = ps ? '✓' : '✎'; b.title = sc ? 'Best score: ' + sc.best + '%' : ''; return; }
    b.classList.toggle('done', !!done[id]);
    b.classList.toggle('on', id === updateSide.cur);
    $('.dot', b).textContent = done[id] ? '✓' : (byId[id].ov ? '★' : byId[id].num);
  });
  $$('#navtools button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-go') === updateSide.cur); });
  var dn = CH.filter(function(c){ return done[c.id]; }).length;
  $('#pbar').style.width = Math.round(dn / CH.length * 100) + '%';
  $('#ptxt').textContent = dn + ' of ' + CH.length + ' chapters done';
}

/* ---------- Views ---------- */
function vHome(){
  var done = store.get('done', {}), known = store.get('known', {});
  var allCards = []; SEQ.forEach(function(c){ allCards = allCards.concat(chCards(c)); });
  var kc = allCards.filter(function(c){ return known[c.id]; }).length;
  var dn = CH.filter(function(c){ return done[c.id]; }).length;
  var mins = CH.reduce(function(a, c){ return a + (parseInt(c.time, 10) || 0); }, 0);
  var exam = store.get('qz:exam', null);
  var last = store.get('last', null), lastC = last && byId[last];
  var next = CH.filter(function(c){ return !done[c.id]; })[0];
  var go = lastC && !done[lastC.id] ? lastC : (next || CH[0]);
  var nAnim = 0, nDeck = 0, nMM = 0, nQ = 0;
  SEQ.forEach(function(c){ (c.body || []).forEach(function(b){ if (b.t === 'anim') nAnim++; if (b.t === 'deck') nDeck++; if (b.t === 'mm') nMM++; }); nQ += (c.quiz || []).length; });
  var h = '<section class="hero"><div><div class="eyebrow">Data Analytics · Python module</div><h1>Learn Python from your first <mark>print()</mark> to NumPy</h1>' +
    '<p>' + CH.length + ' chapters in plain, simple English. Every chapter has notes, pictures, animated explainers, slides, a revision poster, practice tasks you can run right here in real Python, a quiz and flashcards. Every Part ends with an overview page that compares everything side by side. Your progress saves in this browser.</p>' +
    '<div class="row"><button class="btn pri" type="button" data-go="' + go.id + '">' + (dn ? 'Continue: ' : 'Start: ') + esc(go.nav || go.title) + '</button><button class="btn" type="button" data-go="flashcards">Flashcards</button></div></div>' +
    '<div class="hero-term" aria-hidden="true"><div class="tb"><i></i><i></i><i></i></div><pre>' + hl('>>> name = "Python"\n>>> print(f"Hello, {name}!")') + '\nHello, Python!\n' + hl('>>> import numpy as np\n>>> np.array([1, 2, 3]) * 10') + '\narray([10, 20, 30])</pre></div></section>';
  h += '<div class="stats"><div class="stat"><b>' + dn + '/' + CH.length + '</b><span>chapters done</span></div><div class="stat"><b>' + kc + '/' + allCards.length + '</b><span>flashcards known</span></div><div class="stat"><b>' + (exam == null ? '–' : exam + '/25') + '</b><span>best exam score</span></div><div class="stat"><b>' + Math.round(mins / 60) + ' hrs</b><span>total study time</span></div></div>';
  h += '<div class="progio"><div><b>Your progress lives in this browser.</b> <span class="muted">Save it as a file to keep a backup or to continue on another device.</span></div><div class="row"><button class="btn" type="button" id="pgSave">Save my progress</button><label class="btn" for="pgLoad">Load progress</label><input type="file" id="pgLoad" accept=".json,application/json" hidden></div><p class="muted" id="pgMsg" hidden></p></div>';
  h += '<div class="mount" data-m="0"></div>';
  h += '<section class="sec"><h2>All chapters</h2><p class="prose muted">Go in order. Chapters marked <span class="pill trap">tricky</span> have concepts that confuse most beginners, so they get extra explainers and practice.</p><div class="pgrid">' + PARTS.map(function(p){
    var chs = CH.filter(function(c){ return c.part === p.n; }), ov = ovOf(p.n);
    return '<div class="pcard"><div class="pn">Part ' + p.n + '</div><h3>' + esc(p.title) + '</h3><p class="muted" style="font-size:14px">' + esc(p.sub || '') + '</p><ul>' + chs.map(function(c){ return '<li><button type="button" data-go="' + c.id + '"><span class="st' + (done[c.id] ? ' d' : '') + '"></span>' + c.num + '. ' + esc(c.nav || c.title) + (c.tricky ? ' <span class="pill trap" style="padding:0 6px;font-size:11px">tricky</span>' : '') + '</button></li>'; }).join('') +
      (ov ? '<li class="ovli"><button type="button" data-go="' + ov.id + '"><span class="st ov' + (done[ov.id] ? ' d' : '') + '"></span>★ ' + esc(ov.nav) + '</button></li>' : '') + '</ul></div>';
  }).join('') + '</div></section>';
  h += '<section class="sec"><h2>Study tools</h2><div class="tools3"><button class="tool" type="button" data-go="flashcards"><b>Flashcards</b><span>' + allCards.length + ' cards with smart review. ' + (dueCount(allCards) ? '<b style="font-size:inherit;color:var(--accent)">' + dueCount(allCards) + ' due today.</b>' : 'Rate each card and it comes back on the right day.') + '</span></button><button class="tool" type="button" data-go="exam"><b>Final exam</b><span>25 random questions from a bank of ' + nQ + '.</span></button><button class="tool" type="button" data-go="exercises"><b>Quick exercises</b><span>' + Object.keys(EXS).reduce(function(a, k){ return a + EXS[k].length; }, 0) + ' fill-in-the-blank exercises, 5 per chapter, checked instantly.</span></button><button class="tool" type="button" data-go="cheatsheet"><b>Cheat sheet</b><span>Every key command on one searchable page.</span></button><button class="tool" type="button" data-go="posters"><b>Revision posters</b><span>' + Object.keys(window.POSTERS || {}).length + ' one-page infographics, one per chapter.</span></button><button class="tool" type="button" data-go="overviews"><b>Part overviews</b><span>' + OVS.length + ' summary pages with key definitions, big comparison tables and "don\'t mix these up" tables.</span></button></div></section>';
  h += '<section class="sec"><h2>How to study with this hub</h2><div class="how">' +
    '<div><b>1. Read the notes</b>Short sections with pictures. Yellow highlights are words to remember.</div>' +
    '<div><b>2. Play the explainers</b>' + nAnim + ' animated explainers show code running line by line. Pause any time.</div>' +
    '<div><b>3. Flip the slides</b>' + nDeck + ' slide decks sum up the big ideas in a few screens.</div>' +
    '<div><b>4. Predict, then check</b>Guess the output before you look. This is how the ideas stick.</div>' +
    '<div><b>5. Do the tasks</b>Type your answer in the code box under each task and press Run. Real Python runs right in your browser. Solutions stay hidden until you need them.</div>' +
    '<div><b>6. Quiz and flashcards</b>Finish each chapter with the quiz, then revise with flashcards a day later.</div>' +
    '<div><b>7. Revise with the poster</b>Each chapter ends with a one-page poster. Open the poster gallery before an exam or interview.</div>' +
    '<div><b>8. Close each Part with its overview</b>The ★ page at the end of every Part puts all its definitions and differences side by side, with a mixed quiz.</div></div></section>';
  view.className = 'col wide';
  view.innerHTML = h;
  var parts = PARTS.map(function(p){ var ov = ovOf(p.n); return { t: 'Part ' + p.n + ': ' + p.title, k: CH.filter(function(c){ return c.part === p.n; }).map(function(c){ return { t: c.num + '. ' + (c.nav || c.title), go: c.id }; }).concat(ov ? [{ t: '★ ' + ov.nav, go: ov.id }] : []) }; });
  mountAll(view, [{ t: 'mm', title: 'Course mind map', root: 'Python', hint: 'Tap any chapter to open it', kids: parts }]);
  $('#pgSave').onclick = function(){
    var data = {}; try { for (var k = 0; k < localStorage.length; k++) { var key = localStorage.key(k); if (key.indexOf(LS) === 0) data[key] = localStorage.getItem(key); } } catch(e){}
    var blob = new Blob([JSON.stringify({ app: 'python-study-hub', saved: new Date().toISOString(), data: data }, null, 1)], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'python-study-hub-progress-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast('Progress saved as a file');
  };
  $('#pgLoad').onchange = function(){
    var f = this.files && this.files[0], msg = $('#pgMsg'); if (!f) return;
    var rd = new FileReader();
    rd.onload = function(){
      try {
        var j = JSON.parse(rd.result); if (j.app !== 'python-study-hub' || !j.data) throw new Error('not a progress file');
        var n = 0; Object.keys(j.data).forEach(function(k){ if (k.indexOf(LS) === 0) { localStorage.setItem(k, j.data[k]); n++; } });
        toast('Progress loaded'); render('home');
        var m2 = $('#pgMsg'); if (m2) { m2.hidden = false; m2.textContent = 'Loaded ' + n + ' saved items from ' + String(j.saved || '').slice(0, 10) + '.'; }
      } catch(e){ msg.hidden = false; msg.textContent = 'That file is not a Python Study Hub progress file.'; }
    };
    rd.readAsText(f);
  };
}

function vChapter(c){
  var mounts = [], toc = [], OV = !!c.ov;
  var h = '<header class="chead"><div class="num">' + (OV ? (c.part === PARTS.length ? 'Part ' + c.part + ' · Whole-course overview' : 'Part ' + c.part + ' · Overview') : 'Part ' + c.part + ' · Chapter ' + c.num) + '</div><h1>' + esc(c.title) + '</h1><p class="lead">' + md(c.lead) + '</p>' +
    '<div class="row">' + (OV ? '<span class="pill lvl">★ Summary page</span>' : '<span class="pill lvl">' + esc(c.lvl || 'Beginner') + '</span>') + '<span class="pill">' + esc(c.time || '') + '</span>' + (c.tricky ? '<span class="pill trap">Tricky topic: extra practice inside</span>' : '') + '</div></header>';
  if (c.five) h += '<div class="five"><h3>' + esc(c.fiveTitle || 'The whole Part in 5 lines') + '</h3><ol>' + c.five.map(function(g){ return '<li><span>' + md(g) + '</span></li>'; }).join('') + '</ol></div>';
  if (OV && (window.SHEETS || {})[c.part]) h += sheetHTML(window.SHEETS[c.part], c.part);
  if (c.goals) h += '<div class="goals"><h3>In this chapter you will learn</h3><ul>' + c.goals.map(function(g){ return '<li>' + md(g) + '</li>'; }).join('') + '</ul></div>';
  h += '<div class="toc" id="toc"></div>';
  var VID = (window.VIDEOS || {})[c.id], vMount = null;
  if (VID && VID.en) { vMount = { t: 'video', v: VID }; h += '<section class="sec"><h2 id="' + c.id + '-video">Watch it explained</h2><p class="prose muted">Prefer to watch first? This is a short video by a real teacher on this chapter\'s topic' + (VID.te ? ', in English or Telugu' : '') + '. Then read the notes below.</p><div class="vmount"></div></section>'; }
  var body = '', open = false, ctx = { mounts: mounts, cid: c.id, ov: !!c.ov };
  (c.body || []).forEach(function(b, i){
    if (b.t === 'h') {
      if (open) body += '</section>';
      toc.push(b.text);
      body += '<section class="sec"><h2 id="' + c.id + '-s' + toc.length + '">' + md(b.text) + '<button class="fold" type="button" aria-label="Fold or open this section" aria-expanded="true"></button></h2>';
      open = true; return;
    }
    if (!open) { body += '<section class="sec">'; open = true; }
    body += block(b, i, ctx) || '';
  });
  if (open) body += '</section>';
  h += body;
  var PST = window.POSTERS || {};
  if (PST[c.id]) h += '<section class="sec"><h2 id="' + c.id + '-poster">Revision poster</h2><details class="xtra"><summary><span class="xk">Poster</span><span class="xt">The whole chapter on one page</span><span class="xn">Optional · for revision</span></summary><p class="prose muted">Use it to revise before the quiz, or come back to it a week later.</p>' + posterHTML(PST[c.id], c.num) + '<div class="row"><button class="btn" type="button" data-poster="' + c.id + '">Open in the poster gallery (wide view)</button></div></details></section>';
  if (c.take) h += '<div class="take"><h3>Key takeaways</h3><ul>' + c.take.map(function(t){ return '<li>' + md(t) + '</li>'; }).join('') + '</ul></div>';
  if (!OV) h += exSection(c);
  if (c.quiz && c.quiz.length) h += '<section class="sec"><h2 id="' + c.id + '-quiz">' + (OV ? 'Mixed quiz for the whole Part' : 'Chapter quiz') + '</h2>' + (OV ? '<p class="prose muted">Questions mix every chapter of this Part, with extra focus on the differences above.</p>' : '') + '<div id="quizBox"></div></section>';
  if (c.cards && c.cards.length) h += '<section class="sec"><h2 id="' + c.id + '-cards">' + (OV ? 'Flashcards for the whole Part' : 'Flashcards') + '</h2><p class="prose muted">Say the answer out loud, flip, then rate it. <b>Again</b> brings the card back today. <b>Good</b> and <b>Easy</b> bring it back in a few days.</p><div id="deckBox"></div></section>';
  var done = store.get('done', {});
  h += '<div class="donebox"><div><b style="font-family:var(--display)">Finished this ' + (OV ? 'overview' : 'chapter') + '?</b><div class="muted" style="font-size:15px">Mark it done to track your progress.</div></div><button class="btn ' + (done[c.id] ? 'good' : 'pri') + '" id="doneBtn" type="button">' + (done[c.id] ? 'Done ✓' : 'Mark as done') + '</button></div>';
  var prev = SEQ[c.seq - 1], next = SEQ[c.seq + 1];
  if (!OV && BT[c.id]) h += btCTA(c);
  if (OV && PJP[c.part]) h += pjCTA(c.part);
  h += '<nav class="endnav">' + (prev ? '<button class="btn" type="button" data-go="' + prev.id + '">← ' + esc(prev.nav || prev.title) + '</button>' : '<span></span>') + (next ? '<button class="btn pri" type="button" data-go="' + next.id + '">' + esc(next.nav || next.title) + ' →</button>' : '<button class="btn pri" type="button" data-go="exam">Take the final exam →</button>') + '</nav>';
  if (c.src) h += '<p class="srcs">Built from: ' + c.src.map(esc).join(' · ') + '</p>';
  view.className = OV ? 'col wide ovpage' : 'col';
  view.innerHTML = h;
  var tocEl = $('#toc');
  var chips = toc.map(function(t, j){ return '<button type="button" data-s="' + c.id + '-s' + (j + 1) + '">' + md(t) + '</button>'; });
  if (vMount) chips.unshift('<button type="button" data-s="' + c.id + '-video">Video</button>');
  if ((window.POSTERS || {})[c.id]) chips.push('<button type="button" data-s="' + c.id + '-poster">Poster</button>');
  if (!OV && EXS[c.id]) chips.push('<button type="button" data-s="' + c.id + '-ex">Exercises</button>');
  if (c.quiz && c.quiz.length) chips.push('<button type="button" data-s="' + c.id + '-quiz">Quiz</button>');
  if (c.cards && c.cards.length) chips.push('<button type="button" data-s="' + c.id + '-cards">Flashcards</button>');
  if (toc.length > 3) chips.unshift('<button type="button" class="foldall" data-f="1">Fold all</button>');
  tocEl.innerHTML = chips.join('');
  var fa = $('.foldall', tocEl);
  if (fa) fa.onclick = function(e){ e.stopPropagation(); var f = fa.getAttribute('data-f') === '1'; $$('.sec', view).forEach(function(sc){ if ($('h2 .fold', sc)) { sc.classList.toggle('folded', f); $('h2 .fold', sc).setAttribute('aria-expanded', String(!f)); } }); fa.setAttribute('data-f', f ? '0' : '1'); fa.textContent = f ? 'Open all' : 'Fold all'; };
  $$('button[data-s]', tocEl).forEach(function(b){ b.onclick = function(){ var t = document.getElementById(b.getAttribute('data-s')); if (!t) return; var dx = t.tagName === 'H2' && t.parentNode.querySelector('details.xtra'); if (dx) dx.open = true; var sc = t.closest('.sec'); if (sc && sc.classList.contains('folded')) { sc.classList.remove('folded'); var fb = $('h2 .fold', sc); if (fb) fb.setAttribute('aria-expanded', 'true'); } t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }; });
  mountAll(view, mounts);
  if (vMount) VideoBox($('.vmount', view), vMount.v);
  mountEx(view);
  if (c.quiz && c.quiz.length) Quiz($('#quizBox'), c.quiz, c.id);
  if (c.cards && c.cards.length) Deck($('#deckBox'), chCards(c));
  $('#doneBtn').onclick = function(){
    var d = store.get('done', {});
    if (d[c.id]) delete d[c.id]; else d[c.id] = 1;
    store.set('done', d);
    this.className = 'btn ' + (d[c.id] ? 'good' : 'pri');
    this.textContent = d[c.id] ? 'Done ✓' : 'Mark as done';
    if (d[c.id]) { var nCh = SEQ.filter(function(x){ return !x.ov; }), nDone = nCh.filter(function(x){ return d[x.id]; }).length; toast(OV ? c.nav + ' done! ✓' : '🎉 Chapter ' + c.num + ' complete! ' + nDone + ' of ' + nCh.length + ' chapters done'); this.classList.add('win'); }
    updateSide();
  };
  store.set('last', c.id);
}

function vFlash(){
  var sel = store.get('fcSel', 'all');
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Flashcards</h1><p class="lead">Every flashcard from every chapter and Part overview. Flip a card, then rate it: <b>Again</b>, <b>Good</b> or <b>Easy</b>. Each card comes back just before you would forget it, so a few minutes a day is enough.</p></header>' +
    '<div class="row" id="fcf"><button class="btn" type="button" data-p="all">All parts</button>' + PARTS.map(function(p){ return '<button class="btn" type="button" data-p="' + p.n + '">Part ' + p.n + '</button>'; }).join('') + '</div><div id="fcBox"></div>';
  view.className = 'col'; view.innerHTML = h;
  function load(){
    $$('#fcf button').forEach(function(b){ b.classList.toggle('pri', b.getAttribute('data-p') === String(sel)); });
    var cards = [];
    SEQ.forEach(function(c){ if (sel === 'all' || String(c.part) === String(sel)) cards = cards.concat(chCards(c)); });
    Deck($('#fcBox'), cards, { mode: dueCount(cards) ? 'due' : 'all' });
  }
  $$('#fcf button').forEach(function(b){ b.onclick = function(){ sel = b.getAttribute('data-p'); store.set('fcSel', sel); load(); }; });
  load();
}

function vExam(){
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Final exam</h1><p class="lead">25 random questions from every chapter and Part overview. Each new exam picks a fresh set. At the end you see your score for each chapter, so you know what to revise.</p></header><div id="exBox"></div>';
  view.className = 'col'; view.innerHTML = h;
  function start(){
    var all = []; SEQ.forEach(function(c){ all = all.concat(chQuiz(c)); });
    for (var k = all.length - 1; k > 0; k--) { var r = Math.floor(Math.random() * (k + 1)); var t = all[k]; all[k] = all[r]; all[r] = t; }
    var pick = all.slice(0, 25);
    pick.sort(function(a, b){ return byTitle[a.from] - byTitle[b.from]; });
    Quiz($('#exBox'), pick, 'exam', { exam: true, onAgain: start });
  }
  start();
}
var byTitle = {}; SEQ.forEach(function(c){ byTitle[c.title] = c.seq; });

function vCheat(){
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Cheat sheet</h1><p class="lead">The key commands from every chapter in one place. Search for a word like <code>split</code>, <code>axis</code> or <code>dict</code>. Need every method? Open the <button type="button" class="lnk" data-go="reference">Python reference</button>.</p></header>' +
    '<label for="cq" class="eyebrow">Search the cheat sheet</label><input id="cq" class="search" type="search" placeholder="Search commands or meanings" autocomplete="off"><div class="cheat" id="cBox"></div>';
  view.className = 'col'; view.innerHTML = h;
  function draw(q){
    q = (q || '').toLowerCase();
    var out = '';
    CH.forEach(function(c){
      var rows = (c.cheat || []).filter(function(r){ return !q || (r[0] + ' ' + r[1]).toLowerCase().indexOf(q) > -1; });
      if (!rows.length) return;
      out += '<div><h3>' + c.num + '. ' + esc(c.title) + '</h3><div class="tbl" style="margin-top:8px"><table><thead><tr><th style="width:44%">Code</th><th>What it does</th></tr></thead><tbody>' +
        rows.map(function(r){ return '<tr><td><code style="white-space:pre-wrap">' + esc(r[0]) + '</code></td><td>' + md(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></div></div>';
    });
    $('#cBox').innerHTML = out || '<p class="muted">Nothing matches that search.</p>';
  }
  $('#cq').addEventListener('input', function(){ draw(this.value); });
  draw('');
}

function vPosters(){
  var PST = window.POSTERS || {};
  var list = CH.filter(function(c){ return PST[c.id]; });
  var sel = store.get('posterSel', list.length ? list[0].id : null);
  if (!PST[sel] && list.length) sel = list[0].id;
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Revision posters</h1><p class="lead">One infographic per chapter. Each one puts the whole chapter on a single page: pictures, rules, traps and a comparison table.</p></header>' +
    '<label for="psel" class="eyebrow">Choose a chapter</label><select id="psel" class="search">' + list.map(function(c){ return '<option value="' + c.id + '"' + (c.id === sel ? ' selected' : '') + '>' + c.num + '. ' + esc(c.title) + '</option>'; }).join('') + '</select>' +
    '<div class="row"><button class="btn" type="button" id="pprev">\u2190 Previous</button><button class="btn" type="button" id="pnext">Next \u2192</button><button class="btn" type="button" id="pgo">Open this chapter</button></div><div id="pbox"></div>';
  view.className = 'col wide'; view.innerHTML = h;
  function draw(){
    var c = byId[sel];
    $('#pbox').innerHTML = posterHTML(PST[sel], c.num);
    $('#psel').value = sel; store.set('posterSel', sel);
  }
  function step(d){ var ids = list.map(function(c){ return c.id; }); var k = ids.indexOf(sel); sel = ids[(k + d + ids.length) % ids.length]; draw(); }
  $('#psel').onchange = function(){ sel = this.value; draw(); };
  $('#pprev').onclick = function(){ step(-1); };
  $('#pnext').onclick = function(){ step(1); };
  $('#pgo').onclick = function(){ route(sel); };
  draw();
}

function ovTables(o){
  var out = [];
  (o.body || []).forEach(function(b, i){
    if (b.t === 'vs') out.push({ id: o.id + '-b' + i, t: b.title, k: 'vs', q: (b.title + ' ' + b.head.join(' ') + ' ' + b.rows.map(function(r){ return r.join(' '); }).join(' ')).toLowerCase() });
    if (b.t === 'table' && b.master) out.push({ id: o.id + '-b' + i, t: b.title || 'The big comparison table', k: 'big', q: ((b.title || '') + ' ' + b.head.join(' ') + ' ' + b.rows.map(function(r){ return r.join(' '); }).join(' ')).toLowerCase() });
  });
  return out;
}
function vOverviews(){
  var done = store.get('done', {});
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Part overviews</h1><p class="lead">One summary page at the end of every Part: the key definitions, a big comparison table, "don\'t mix these up" tables, a mind map, a mixed quiz and flashcards. Part 8 sums up the whole course.</p></header>';
  h += '<div class="ovgrid">' + OVS.map(function(o){
    var tb = ovTables(o), nd = (o.body || []).filter(function(b){ return b.t === 'defs'; }).reduce(function(a, b){ return a + b.items.length; }, 0);
    return '<button class="ovcard" type="button" data-go="' + o.id + '"><span class="pn">Part ' + o.part + (done[o.id] ? ' · done ✓' : '') + '</span><span class="ovtt">' + esc(o.title) + '</span><span class="ovfirst">' + md(o.five[0]) + '</span><span class="ovmeta">' + nd + ' definitions · ' + tb.length + ' tables · ' + (o.quiz || []).length + ' quiz questions · ' + (o.cards || []).length + ' cards</span></button>';
  }).join('') + '</div>';
  var SH = window.SHEETS || {};
  h += '<section class="sec"><h2>Picture cheat sheets</h2><p class="prose muted">One picture sheet per Part. Tap to open it, or save it to your phone.</p><div class="ovlist">' + OVS.filter(function(o){ return SH[o.part]; }).map(function(o){
    var t = SH[o.part].title.map(function(x){ return Array.isArray(x) ? x[0] : x; }).join('');
    return '<div class="ovrow"><span class="ovk k-big">Part ' + o.part + '</span><button type="button" class="ovt" data-jump="sheet' + o.part + '" data-ov="' + o.id + '" style="text-align:left;font-weight:700">' + esc(t) + '</button><a class="ovp" href="img/sheet-ov' + o.part + '.jpg" download="python-part' + o.part + '-cheat-sheet.jpg">Save image</a></div>';
  }).join('') + '</div></section>';
  h += '<section class="sec"><h2>Find a difference fast</h2><p class="prose muted">Every comparison table from all the overviews. Search for a word like <code>tuple</code>, <code>return</code>, <code>axis</code> or <code>==</code>, then tap a table to jump straight to it.</p>' +
    '<label for="ovq" class="eyebrow">Search the comparison tables</label><input id="ovq" class="search" type="search" placeholder="e.g. list vs tuple, sort, is" autocomplete="off"><div id="ovList" class="ovlist"></div></section>';
  view.className = 'col wide'; view.innerHTML = h;
  var all = []; OVS.forEach(function(o){ ovTables(o).forEach(function(t){ t.part = o.part; t.ov = o.id; all.push(t); }); });
  function draw(q){
    q = (q || '').toLowerCase().trim();
    var L = all.filter(function(t){ return !q || t.q.indexOf(q) > -1; });
    $('#ovList').innerHTML = L.length ? L.map(function(t){ return '<button type="button" class="ovrow" data-jump="' + t.id + '" data-ov="' + t.ov + '"><span class="ovk k-' + t.k + '">' + (t.k === 'big' ? 'Big table' : 'Don\'t mix up') + '</span><span class="ovt">' + md(t.t) + '</span><span class="ovp">Part ' + t.part + '</span></button>'; }).join('') : '<p class="muted">No table matches that search.</p>';
  }
  $('#ovq').addEventListener('input', function(){ draw(this.value); });
  draw('');
}

/* ---------- Real teacher videos (YouTube, loaded only when tapped) ---------- */
function VideoBox(el, v){
  var lang = v.te && store.get('vidLang', 'en') === 'te' ? 'te' : 'en';
  function draw(){
    var x = v[lang];
    var h = (v.te ? '<div class="row vtabs"><button class="btn' + (lang === 'en' ? ' pri' : '') + '" type="button" data-l="en">English</button><button class="btn' + (lang === 'te' ? ' pri' : '') + '" type="button" data-l="te">తెలుగు Telugu</button></div>' : '');
    h += '<div class="vbox"><button class="vthumb" type="button" aria-label="Play video: ' + esc(x.title) + '"><img src="https://i.ytimg.com/vi/' + esc(x.id) + '/hqdefault.jpg" alt="" loading="lazy"><span class="vplay"><svg viewBox="0 0 16 16"><path d="M5 3l8 5-8 5z" fill="#fff"/></svg></span></button></div>';
    h += '<p class="vmeta"><b>' + esc(x.title) + '</b><span>' + esc(x.channel) + (x.mins ? ' · about ' + x.mins + ' min' : '') + ' · YouTube · needs internet</span></p>';
    el.innerHTML = h;
    $$('[data-l]', el).forEach(function(b){ b.onclick = function(){ lang = b.getAttribute('data-l'); store.set('vidLang', lang); draw(); }; });
    $('.vthumb', el).onclick = function(){
      $('.vbox', el).innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(x.id) + '?autoplay=1&rel=0" title="' + esc(x.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    };
  }
  draw();
}
function vVideos(){
  var V = window.VIDEOS || {};
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Videos</h1><p class="lead">One short video by a real teacher for every chapter, plus a Telugu video where a good one exists. They also appear at the top of each chapter.</p></header>';
  h += PARTS.map(function(p){
    var chs = CH.filter(function(c){ return c.part === p.n && V[c.id]; });
    if (!chs.length) return '';
    return '<section class="sec"><h2>Part ' + p.n + ' · ' + esc(p.title) + '</h2><div class="vgrid">' + chs.map(function(c){
      var v = V[c.id];
      return '<div class="vcard"><div class="vmount" data-v="' + c.id + '"></div><button class="btn" type="button" data-go="' + c.id + '">Open chapter ' + c.num + ': ' + esc(c.nav || c.title) + ' →</button></div>';
    }).join('') + '</div></section>';
  }).join('');
  view.className = 'col wide'; view.innerHTML = h;
  $$('[data-v]', view).forEach(function(m){ VideoBox(m, V[m.getAttribute('data-v')]); });
}
function vGlossary(){
  var seen = {}, all = [];
  OVS.forEach(function(o){ (o.body || []).forEach(function(b){ if (b.t !== 'defs') return; b.items.forEach(function(d){
    var k = d.t.toLowerCase(); if (seen[k]) return; seen[k] = 1; all.push({ t: d.t, d: d.d, c: d.c, go: d.go, part: o.part });
  }); }); });
  var key = function(x){ return x.t.replace(/^[^A-Za-z]+/, '').toLowerCase(); };
  all.sort(function(a, b){ return key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0; });
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Glossary</h1><p class="lead">Every key word in the course, explained in one or two lines with a tiny example. ' + all.length + ' terms, A to Z.</p></header>' +
    '<label for="gq" class="eyebrow">Search the glossary</label><input id="gq" class="search" type="search" placeholder="e.g. tuple, scope, axis" autocomplete="off"><div id="gBox" class="gloss"></div>';
  view.className = 'col'; view.innerHTML = h;
  function draw(q){
    q = (q || '').toLowerCase().trim();
    var L = all.filter(function(x){ return !q || (x.t + ' ' + x.d).toLowerCase().indexOf(q) > -1; }), out = '', last = '';
    L.forEach(function(x){
      var letter = key(x).charAt(0).toUpperCase();
      if (letter !== last) { out += '<h3 class="gl">' + letter + '</h3>'; last = letter; }
      out += '<div class="gitem"><div class="gt">' + md(x.t) + '</div><div class="gd">' + md(x.d) + (x.c ? '<pre>' + hl(trimC(x.c)) + '</pre>' : '') +
        '<span class="gl2">' + (x.go && byId[x.go] ? '<button type="button" data-go="' + x.go + '">' + (byId[x.go].ov ? esc(byId[x.go].nav) : 'Chapter ' + byId[x.go].num + ': ' + esc(byId[x.go].nav || byId[x.go].title)) + ' →</button>' : '') + '</span></div></div>';
    });
    $('#gBox').innerHTML = out || '<p class="muted">No term matches that search.</p>';
  }
  $('#gq').addEventListener('input', function(){ draw(this.value); });
  draw('');
}

var REF_BY = {}; (window.REFERENCE || []).forEach(function(x){ REF_BY[x.id] = x; });
function vReference(){
  var RF = window.REFERENCE || [], total = RF.reduce(function(a, x){ return a + x.rows.length; }, 0);
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Python reference</h1><p class="lead">Every method of strings, lists, tuples, sets, dictionaries and files, every built-in function, every keyword and the built-in exceptions: ' + total + ' entries. Almost every one has an example and its real output. Tap <b>▶</b> to edit and run any example.</p></header>' +
    '<label for="rq" class="eyebrow">Search the reference</label><input id="rq" class="search" type="search" placeholder="e.g. strip, append, zip, KeyError, lambda" autocomplete="off"><div class="toc" id="rtoc">' + RF.map(function(x){ return '<button type="button" data-s="ref-' + x.id + '">' + esc(x.title) + '</button>'; }).join('') + '</div><div id="rBox"></div>';
  view.className = 'col wide'; view.innerHTML = h;
  function draw(q){
    q = (q || '').toLowerCase().trim();
    $('#rBox').innerHTML = RF.map(function(x){
      var rows = x.rows.map(function(r, i){ return { r: r, i: i }; }).filter(function(o){ return !q || (o.r.m + ' ' + o.r.d + ' ' + x.title).toLowerCase().indexOf(q) > -1; });
      if (!rows.length) return '';
      return '<section class="sec refsec"><h2 id="ref-' + x.id + '">' + esc(x.title) + '</h2><p class="prose muted">' + md(x.intro) + '</p><div class="tbl"><table class="reft"><thead><tr><th>Method</th><th>What it does</th><th>Example</th><th>Output</th></tr></thead><tbody>' +
        rows.map(function(o){ var r = o.r; return '<tr><th scope="row"><code>' + esc(r.m) + '</code></th><td>' + md(r.d) + '</td>' + (r.c ? '<td><div class="refex"><pre>' + hl(r.c) + '</pre><button class="reftb" type="button" data-reft="' + x.id + ':' + o.i + '" aria-label="Edit and run this example">▶</button></div></td><td><pre class="refo">' + esc(r.o) + '</pre></td>' : '<td colspan="2" class="refn">' + md(r.n || '') + '</td>') + '</tr>'; }).join('') +
        '</tbody></table></div></section>';
    }).join('') || '<p class="muted">Nothing matches that search.</p>';
  }
  $('#rq').addEventListener('input', function(){ draw(this.value); });
  $$('#rtoc button').forEach(function(b){ b.onclick = function(){ var t = document.getElementById(b.getAttribute('data-s')); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }; });
  draw('');
}

/* ---------- Quick exercises: fill in the blanks ---------- */
var EXS = window.EXERCISES || {};
function exNorm(v){ return String(v).trim().replace(/[‘’“”']/g, '"').replace(/\s+/g, ' ').replace(/\s*([()\[\]{},:+\-*\/%=<>!.&|^~])\s*/g, '$1'); }
function exCount(cid){ var st = store.get('ex', {}), n = 0; (EXS[cid] || []).forEach(function(x, i){ if (st[cid + ':' + i]) n++; }); return n; }
function ExBox(el, cid, i){
  var x = EXS[cid][i], st = store.get('ex', {}), k = 0;
  var code = hl(x.c.replace(/___/g, '\u0001')).replace(/\u0001/g, function(){
    var j = k++, w = Math.max(3, Math.max.apply(null, x.a[j].map(function(a){ return a.length; })) + 2);
    return '<input class="exin" data-b="' + j + '" style="width:' + w + 'ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Blank ' + (j + 1) + ' of ' + x.a.length + '">';
  });
  el.className = 'exq';
  el.innerHTML = '<div class="exh"><span>Exercise ' + (i + 1) + ' of ' + EXS[cid].length + '</span><span class="exst">' + (st[cid + ':' + i] ? '✓ Solved' : '') + '</span></div><p class="exqq">' + md(x.q) + '</p><pre class="excode">' + code + '</pre>' +
    '<div class="row"><button class="btn pri exck" type="button">Check</button><button class="btn exsh" type="button">Show answer</button></div><div class="exfb" aria-live="polite"></div>';
  var ins = $$('.exin', el), fb = $('.exfb', el);
  function done(own){
    fb.innerHTML = '<div class="rchk ' + (own ? 'ok win' : 'almost') + '">' + (own ? '<span class="wbadge" aria-hidden="true">✓</span>' : '') + '<b>' + (own ? 'Correct!' : 'Here is the answer.') + '</b> ' + md(x.e) + '<div class="exo">Output</div><pre>' + esc(x.o) + '</pre></div>';
    if (own) { var s2 = store.get('ex', {}); s2[cid + ':' + i] = 1; store.set('ex', s2); $('.exst', el).textContent = '✓ Solved'; var pc = document.getElementById('exc-' + cid); if (pc) pc.textContent = exCount(cid) + '/' + EXS[cid].length; }
  }
  function check(){
    var bad = 0, empty = 0, caseHint = false;
    ins.forEach(function(inp, j){
      inp.value = inp.value.trim();
      var v = exNorm(inp.value), ok = x.a[j].some(function(a){ return exNorm(a) === v; });
      if (!inp.value.trim()) empty++;
      if (!ok && x.a[j].some(function(a){ return exNorm(a).toLowerCase() === v.toLowerCase(); })) caseHint = true;
      inp.classList.toggle('ok', ok); inp.classList.toggle('no', !ok && !!inp.value.trim());
      if (!ok) bad++;
    });
    if (!bad) return done(true);
    fb.innerHTML = '<div class="rchk no"><b>Not yet.</b> ' + (empty === ins.length ? 'Type your answer in the box' + (ins.length > 1 ? 'es' : '') + ' first.' : caseHint ? 'Check your capital letters: Python treats <code>True</code> and <code>true</code> as different words.' : (ins.length > 1 ? bad + ' of ' + ins.length + ' boxes are not right yet. ' : '') + 'Look again at the question, or press <b>Show answer</b>.') + '</div>';
  }
  $('.exck', el).onclick = check;
  $('.exsh', el).onclick = function(){ ins.forEach(function(inp, j){ inp.value = x.a[j][0]; inp.classList.remove('no'); inp.classList.add('ok'); }); done(false); };
  ins.forEach(function(inp, j){ inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); if (ins[j + 1] && !ins[j + 1].value) ins[j + 1].focus(); else check(); } }); });
}
function exSection(c){
  var L = EXS[c.id]; if (!L || !L.length) return '';
  return '<section class="sec"><h2 id="' + c.id + '-ex">Quick exercises</h2><p class="prose muted">Type the missing code in each box, then press <b>Check</b> (or Enter). Extra spaces and \'single\' or "double" quotes do not matter. <span id="exc-' + c.id + '">' + exCount(c.id) + '/' + L.length + '</span> solved.</p>' + L.map(function(x, i){ return '<div class="exmount" data-c="' + c.id + '" data-i="' + i + '"></div>'; }).join('') + '</section>';
}
function mountEx(root){ $$('.exmount', root).forEach(function(m){ ExBox(m, m.getAttribute('data-c'), +m.getAttribute('data-i')); }); }
function vExercises(){
  var total = 0, solved = 0;
  Object.keys(EXS).forEach(function(cid){ total += EXS[cid].length; solved += exCount(cid); });
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Quick exercises</h1><p class="lead">' + total + ' short fill-in-the-blank exercises: 5 for every chapter. Type the missing code, press <b>Check</b>, and see the real output. Your progress is saved in this browser.</p></header>' +
    '<div class="exprog"><div class="exbar"><span style="width:' + (total ? Math.round(solved / total * 100) : 0) + '%"></span></div><b>' + solved + ' of ' + total + ' solved</b></div>';
  PARTS.forEach(function(p){
    var chs = SEQ.filter(function(c){ return !c.ov && c.part === p.n && EXS[c.id]; });
    if (!chs.length) return;
    h += '<section class="sec"><h2>Part ' + p.n + ': ' + esc(p.title) + '</h2>' + chs.map(function(c){
      return '<details class="exch" data-c="' + c.id + '"><summary><span>' + c.num + '. ' + esc(c.nav || c.title) + '</span><span class="muted" id="exc-' + c.id + '">' + exCount(c.id) + '/' + EXS[c.id].length + '</span></summary><div class="exlist"></div><div class="row"><button class="btn" type="button" data-go="' + c.id + '">Open the chapter →</button></div></details>';
    }).join('') + '</section>';
  });
  view.className = 'col'; view.innerHTML = h;
  $$('details.exch', view).forEach(function(d){ d.addEventListener('toggle', function(){ if (!d.open || d.getAttribute('data-m')) return; d.setAttribute('data-m', '1'); var cid = d.getAttribute('data-c'); $('.exlist', d).innerHTML = EXS[cid].map(function(x, i){ return '<div class="exmount" data-c="' + cid + '" data-i="' + i + '"></div>'; }).join(''); mountEx(d); }); });
}

var SYNKEY = '<p class="synkey"><b>Code colours:</b> <span><code><span class="k">if</span></code> keyword</span> <span><code><span class="b">print</span>()</code> built-in function</span> <span><code><span class="m">append</span>()</code> other function or method</span> <span><code><span class="s">"text"</span></code> text</span> <span><code><span class="n">42</span></code> number</span> <span><code><span class="c"># note</span></code> comment</span></p>';

/* ---------- Chip rows: arrows and mouse-wheel scrolling when the chips do not fit ---------- */
function tocArrows(el){
  if (el.parentNode.classList.contains('tocw')) return;
  var w = document.createElement('div'); w.className = 'tocw';
  el.parentNode.insertBefore(w, el); w.appendChild(el);
  var mk = function(dir){ var b = document.createElement('button'); b.type = 'button'; b.className = 'tocar ' + dir; b.setAttribute('aria-label', dir === 'l' ? 'Scroll the list left' : 'Scroll the list right'); b.innerHTML = '<span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + (dir === 'l' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5') + '"/></svg></span>'; w.appendChild(b); return b; };
  var L = mk('l'), R = mk('r');
  function upd(){ var max = el.scrollWidth - el.clientWidth; L.hidden = el.scrollLeft <= 2; R.hidden = max <= 2 || el.scrollLeft >= max - 2; }
  L.onclick = function(){ el.scrollBy({ left: -Math.max(160, el.clientWidth * 0.7), behavior: 'smooth' }); };
  R.onclick = function(){ el.scrollBy({ left: Math.max(160, el.clientWidth * 0.7), behavior: 'smooth' }); };
  el.addEventListener('scroll', upd, { passive: true });
  el.addEventListener('wheel', function(e){
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || el.scrollWidth <= el.clientWidth) return;
    var before = el.scrollLeft; el.scrollLeft += e.deltaY; if (el.scrollLeft !== before) e.preventDefault();
  }, { passive: false });
  if (window.ResizeObserver) new ResizeObserver(upd).observe(el);
  upd();
}

/* ---------- Big Tests: one per chapter, exam mode (answer all, then see the score) ---------- */
var BT = window.BIGTESTS || {}, BT_PASS = 80;
var BT_LV = { 1: 'Basic', 2: 'Medium', 3: 'Challenge' }, BT_TY = { mc: 'Choose', out: 'Predict the output', bug: 'Find the fix', code: '✍️ Write code', fix: '🔧 Fix the code', type: '🔮 Type the output' };
function btEdit(x){ return x.ty === 'code' || x.ty === 'fix'; }
function btWant(x){ return x.ty === 'fix' ? x.want : x.out; }
function btLoose(t){ return btNorm(t).split('\n').map(function(l){ return l.trim().replace(/\s+/g, ' '); }).join('\n'); }
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
    '<p class="lead">' + L.length + ' questions on <b>' + esc(c.title) + '</b> only, from basic to challenge. You <b>type every answer yourself</b>: no options to pick from, so the test shows what you really remember. Press <b>Finish</b> at the end to see your score and every explanation. Score ' + BT_PASS + '% or more to pass.</p><p class="prose muted" style="margin:0">Tip: use the tools from the chapter in your code. Typing the answer straight into <code>print()</code> would pass the check but teach you nothing.</p>' +
    '<div class="meta"><span class="pill lv1">' + nLv[1] + ' Basic</span><span class="pill lv2">' + nLv[2] + ' Medium</span><span class="pill lv3">' + nLv[3] + ' Challenge</span><span class="pill">about ' + Math.round(L.length * 1.4) + ' min</span>' + (s ? '<span class="pill">Your best: ' + s.best + '%</span>' : '') + '</div></header>' +
    '<div id="btSum"></div><div class="btbar" id="btBar"><span id="btCount"></span><button class="btn pri" type="button" id="btFin">Finish and see my score</button></div><div class="btlist">';
  L.forEach(function(x, i){
    h += '<div class="btq" id="btq-' + i + '"><div class="btqh"><span class="btn-n">' + (i + 1) + '</span><span class="pill lv' + x.lv + '">' + BT_LV[x.lv] + '</span><span class="pill">' + BT_TY[x.ty] + '</span></div><p class="btqq">' + md(x.q) + '</p>';
    if (x.ty === 'bug') h += cell(x.c, null, { ttl: 'Line ' + x.line + ' has the bug' }) + '<div class="btwant"><div><span>It should print</span><pre>' + esc(x.want) + '</pre></div><div><span>But it gives</span><pre>' + esc(x.got) + '</pre></div></div><p class="btqq" style="margin-top:4px">Replace line ' + x.line + ' with:</p>';
    else if (x.c && x.ty !== 'fix') h += cell(x.c, null);
    if (x.ty === 'fix') h += '<div class="btwant"><div><span>It should print</span><pre>' + esc(x.want) + '</pre></div><div><span>But it gives</span><pre>' + esc(x.got) + '</pre></div></div><div class="btcode"></div>';
    else if (x.ty === 'code') h += '<div class="btwant"><div><span>Your code should print exactly</span><pre>' + esc(x.out) + '</pre></div></div><div class="btcode"></div>';
    else if (x.ty === 'type') h += '<label class="btinl">Your answer<textarea class="btin" rows="' + Math.max(1, x.ans.split("\n").length) + '" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Type exactly what it prints"></textarea></label>';
    else h += '<div class="opts">' + x.o.map(function(o, j){ return '<button class="opt" type="button" data-q="' + i + '" data-j="' + j + '"><span class="l">' + 'ABCD'.charAt(j) + '</span><span class="t">' + md(o) + '</span></button>'; }).join('') + '</div>';
    h += '<div class="btfb" hidden></div></div>';
  });
  h += '</div><div class="row" style="justify-content:center"><button class="btn pri" type="button" id="btFin2">Finish and see my score</button></div>';
  var nx = SEQ[c.seq + 1];
  h += '<nav class="endnav"><button class="btn" type="button" data-go="' + c.id + '">← Back to Chapter ' + c.num + '</button>' + (nx ? '<button class="btn pri" type="button" data-go="' + nx.id + '">' + esc(nx.nav || nx.title) + ' →</button>' : '<span></span>') + '</nav>';
  view.className = 'col'; view.innerHTML = h;
  L.forEach(function(x, i){
    if (x.ty === 'type') { $('#btq-' + i + ' .btin').addEventListener('input', function(){ count(true); }); return; }
    if (!btEdit(x)) return;
    var box = $('#btq-' + i + ' .btcode'); CodeBox(box, { key: 'bt:' + cid + ':' + i, starter: x.ty === 'fix' ? x.c + '\n' : x.starter, label: x.ty === 'fix' ? 'Fix this code' : 'Your code' });
    $('.edta', box).addEventListener('input', function(){ count(true); });
  });
  function answered(i){ var x = L[i]; if (x.ty === 'type') return $('#btq-' + i + ' .btin').value.trim() !== ''; if (!btEdit(x)) return ans[i] != null; var ta = $('#btq-' + i + ' .edta'); return !!ta && ta.value.trim() !== '' && ta.value.trim() !== (x.ty === 'fix' ? x.c : (x.starter || '')).trim(); }
  function count(changed){ var n = L.filter(function(x, i){ return answered(i); }).length; $('#btCount').innerHTML = '<b>' + n + '</b> of ' + L.length + ' answered'; if (changed) warned = false; return n; }
  count();
  $$('.btlist .opt', view).forEach(function(b){ b.onclick = function(){
    if (finished) return; var i = +b.getAttribute('data-q'); ans[i] = +b.getAttribute('data-j');
    $$('#btq-' + i + ' .opt').forEach(function(o){ o.classList.toggle('sel', o === b); }); count(true);
  }; });
  function finish(){
    if (finished) return;
    var n = count();
    if (n < L.length && !warned) { warned = true; $('#btCount').innerHTML = '<b>' + (L.length - n) + ' not answered yet.</b> Press Finish again to finish anyway.'; return; }
    finished = true; $('#btFin').disabled = $('#btFin2').disabled = true; $('#btFin').textContent = 'Checking your code...';
    var res = {}, p = Promise.resolve();
    L.forEach(function(x, i){
      if (x.ty === 'type') { var tv = $('#btq-' + i + ' .btin').value; res[i] = { ok: tv.trim() !== '' && btLoose(tv) === btLoose(x.ans), empty: !tv.trim() }; return; }
      if (!btEdit(x)) { res[i] = { ok: ans[i] === x.a }; return; }
      p = p.then(function(){
        if (!answered(i)) { res[i] = { ok: false, empty: true }; return; }
        return pyRun($('#btq-' + i + ' .edta').value, [], function(){}).then(function(r){ res[i] = { ok: r.status === 'ok' && btNorm(r.out) === btNorm(btWant(x)), out: r.out, err: r.err, status: r.status }; });
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
      var fb = $('.btfb', q), t = '<div class="rchk ' + (r.ok ? 'ok' : 'no') + '"><b>' + (r.ok ? '✓ Correct.' : (btEdit(x) || x.ty === 'type' ? (r.empty ? '✗ Not answered.' : r.nopy ? '✗ Python could not start, so this was not checked.' : '✗ Not right yet.') : (ans[i] == null ? '✗ Not answered.' : '✗ Not right.'))) + '</b> ' + md(x.e);
      if (x.ty === 'type') { $('#btq-' + i + ' .btin').readOnly = true; if (!r.ok) t += '<div class="lbl2" style="padding:8px 0 2px">It prints</div><pre>' + esc(x.ans) + '</pre>'; }
      if (btEdit(x) && !r.ok && !r.empty && !r.nopy) t += '<div class="lbl2" style="padding:8px 0 2px">Your output</div><pre>' + esc(r.status === 'error' ? (r.err || '').trim().split('\n').pop() : r.status === 'input' ? 'Your code waited for input()' : (r.out || '(nothing)')) + '</pre>';
      t += '</div>';
      if (btEdit(x)) t += '<details class="reveal"><summary>Show a model answer</summary>' + (x.ty === 'fix' ? cell(x.fixed, x.want) : cell(x.sol, x.out)) + '</details>';
      fb.innerHTML = t; fb.hidden = false;
    });
    var pct = Math.round(score / L.length * 100), all = store.get('bt', {}), prev = all[cid];
    all[cid] = { best: Math.max(pct, prev ? prev.best : 0), last: pct, weak: Object.keys(weak) }; store.set('bt', all); updateSide();
    var pass = pct >= BT_PASS, need = Math.ceil(L.length * BT_PASS / 100);
    var tp = Object.keys(weak).sort(function(a, b){ return weak[b] - weak[a]; });
    $('#btSum').innerHTML = '<div class="btsum ' + (pass ? 'pass' : 'fail') + '"><div class="btbig"><b>' + score + '</b><span>/ ' + L.length + '</span><em>' + pct + '%</em></div><div class="btmsg"><b>' + (pass ? '🎉 Passed! You know this chapter well.' : 'Not yet. You need ' + need + ' of ' + L.length + ' (' + BT_PASS + '%) to pass.') + '</b>' +
      '<div class="btlvs">' + [1, 2, 3].map(function(k){ return '<span class="pill lv' + k + '">' + BT_LV[k] + ': ' + lv[k][0] + ' / ' + lv[k][1] + '</span>'; }).join('') + '</div>' +
      (tp.length ? '<div class="bttop"><span>Topics to review:</span>' + tp.map(function(sec){ var sid = btSecId(cid, sec); return sid ? '<button class="btn" type="button" data-jump="' + sid + '" data-ov="' + cid + '">' + md(sec) + (weak[sec] > 1 ? ' (' + weak[sec] + ')' : '') + '</button>' : ''; }).join('') + '</div>' : '') +
      '<div class="row"><button class="btn pri" type="button" id="btAgain">Try again</button><span class="muted" style="font-size:14px">Scroll down to see every answer and explanation.</span></div></div></div>';
    $('#btBar').hidden = true; $('#btFin2').closest('.row').hidden = true;
    $('#btAgain').onclick = function(){ L.forEach(function(x, i){ if (btEdit(x)) store.set('bt:' + cid + ':' + i, null); }); render('test-' + cid); };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ---------- Projects: brief, editor, automatic score out of 100 ---------- */
var PJ = window.PROJECTS || {}, PJP = window.PJ_PARTS || {}, PJ_READY = 70, PJ_TIMEOUT = 10000;
var PJ_W = [['main', 'Correctness', 30, 'Share of the main tests your program passes'], ['logic', 'Logic', 20, 'Share of the logic tests (tricky formulas and conditions)'], ['edge', 'Edge cases', 10, 'Share of the edge-case tests (zeros, big numbers, spaces)'], ['concepts', 'Use of concepts', 25, 'Python reads your code and looks for the tools this project needs. It takes 5 points off for each tool from a later Part'], ['read', 'Readability', 15, 'Clear names (5), your own comments (4), short lines (2), clean indentation (2), spaces around = (2)']];
function pjAll(){ return store.get('pj', {}); }
function pjRec(id){ return pjAll()[id] || null; }
function pjSave(id, f){ var a = pjAll(); a[id] = Object.assign({ best: null, last: null, attempts: 0, hints: 0 }, a[id] || {}); f(a[id]); store.set('pj', a); }
function pjReady(id){ var r = pjRec(id); return !!(r && r.best >= PJ_READY); }
function pjStatus(id){ var r = pjRec(id); if (!r || !r.attempts) return '<span class="pill">Not started</span>'; return '<span class="pill ' + (r.best >= PJ_READY ? 'lv1">✓ Ready · best ' : 'lv3">Best ') + r.best + '/100</span>'; }
function pjNorm(s){ return String(s).trim().replace(/\s+/g, ' '); }
function pjCTA(n){
  var P = PJP[n], dn = P.ids.filter(pjReady).length;
  return '<div class="btcta"><div><b>Part ' + n + ' projects</b><span>' + P.ids.length + ' real data-analyst problems to solve with Part ' + n + ' only. You get an automatic score out of 100 with feedback.' + (dn ? ' Ready: <b>' + dn + ' of ' + P.ids.length + '</b>.' : '') + '</span></div><button class="btn pri" type="button" data-go="projects-' + n + '">Open the projects →</button></div>';
}
function pjRunHTML(ex){
  var L = ex.out.split('\n'), k = 0;
  return '<pre class="pjrun">' + L.map(function(l){
    var v = ex.inputs[k];
    if (v != null && l.slice(-v.length) === v) { k++; return esc(l.slice(0, l.length - v.length)) + '<b class="pjin">' + esc(v) + '</b>'; }
    return esc(l);
  }).join('\n') + '</pre>';
}
function vProjectsPart(n){
  var P = PJP[n], pt = PARTS.filter(function(p){ return p.n === n; })[0] || { title: '' };
  var h = '<header class="chead"><div class="num">Part ' + n + ' · Projects</div><h1>' + esc(P.title) + '</h1><p class="lead">' + md(P.intro) + '</p></header>' +
    '<div class="goals"><h3>How projects work</h3><ul><li>Read the brief: the story, your tasks and the exact lines your output must contain.</li><li>Write your program in the editor. Press <b>Run</b> and type your own numbers to try it.</li><li>Press <b>Submit for scoring</b>. Real Python runs your program with 9 sets of numbers and reads your code, then gives you a score out of 100 with feedback.</li><li>' + PJ_READY + ' or more means you are ready for the next project. Nothing is ever locked: you can open any project and submit as often as you like.</li><li>Stuck? Open the hints one at a time. A model answer appears after your first submission.</li></ul></div><div class="pjcards">';
  P.ids.forEach(function(id){
    var x = PJ[id];
    h += '<div class="pjcard"><div class="row"><span class="pill lv' + x.level + '">' + x.n + '. ' + esc(x.levelName) + '</span>' + pjStatus(id) + '</div><h3>' + esc(x.title) + '</h3><p>' + md(x.short) + '</p><button class="btn pri" type="button" data-go="project-' + id + '">Open project →</button></div>';
  });
  h += '</div><p class="prose muted">All your Big Test and project scores, with topics to work on: <button class="btn" type="button" data-go="myprojects">My Projects</button></p>';
  var ov = ovOf(n), first = CH.filter(function(c){ return c.part === n; })[0];
  h += '<nav class="endnav"><button class="btn" type="button" data-go="' + (ov ? ov.id : first.id) + '">← ' + esc(ov ? ov.nav : 'Part ' + n) + '</button><button class="btn pri" type="button" data-go="project-' + P.ids[0] + '">Start project 1 →</button></nav>';
  view.className = 'col'; view.innerHTML = h;
}
function vProject(id){
  var P = PJ[id], rec = pjRec(id) || { attempts: 0, hints: 0 }, ids = PJP[P.part].ids, k = ids.indexOf(id);
  var mins = { 1: '30 to 45 min', 2: '45 to 60 min', 3: '60 to 90 min' }[P.level];
  var h = '<header class="chead"><div class="num">Part ' + P.part + ' · Project ' + P.n + ' of ' + ids.length + '</div><h1>' + esc(P.title) + '</h1><p class="lead">' + md(P.short) + '</p>' +
    '<div class="meta"><span class="pill lv' + P.level + '">' + esc(P.levelName) + '</span><span class="pill">' + mins + '</span>' + pjStatus(id) + '</div></header>';
  h += '<section class="sec"><h2>The problem</h2>' + P.story.split('\n').map(function(p){ return '<p class="prose">' + md(p) + '</p>'; }).join('') + '</section>';
  h += '<div class="goals"><h3>What you will practise</h3><ul>' + P.objectives.map(function(g){ return '<li>' + md(g) + '</li>'; }).join('') + '</ul></div>';
  h += '<div class="pjuse"><div><b>You may use</b><div class="row">' + P.may.map(function(x){ return '<span class="pill lv1">' + md(x) + '</span>'; }).join('') + '</div></div><div><b>Do not use yet</b><div class="row">' + P.mustnot.map(function(x){ return '<span class="pill trap">' + md(x) + '</span>'; }).join('') + '</div><p class="muted" style="margin:6px 0 0;font-size:14px">They come in later Parts. Using them costs 5 points each.</p></div></div>';
  h += '<section class="sec"><h2>Your tasks</h2><ol class="list">' + P.tasks.map(function(t){ return '<li>' + md(t) + '</li>'; }).join('') + '</ol></section>';
  h += '<section class="sec"><h2>Lines your output must contain</h2><p class="prose">The checker looks for each of these as a <b>whole line</b> of your output. Extra spaces at the ends do not matter, but the words, signs and number formats must match. You may print extra lines too, like dividers.</p><pre class="pjlines">' + esc(P.lines.join('\n')) + '</pre><p class="prose">' + md(P.rules) + '</p></section>';
  h += '<section class="sec"><h2>Example run</h2><p class="prose muted">The <b class="pjin">blue</b> values are what the user typed. Your questions inside <code>input()</code> can use any words.</p>' + pjRunHTML(P.example) + '</section>';
  var smp = P.sample || {}, sn = Object.keys(smp);
  if (sn.length) h += '<section class="sec"><h2>Files for this project</h2><p class="prose muted">The tests give your program files like these (each test uses its own version). Press the button to create them in the Python runner, then press <b>Run</b> and type a file name.</p>' + sn.map(function(n){ return '<div class="pjfile"><b>' + esc(n) + '</b><pre class="pjlines">' + esc(smp[n]) + '</pre></div>'; }).join('') + '<div class="row"><button class="btn" type="button" id="pjFiles">Create these files in the Python runner</button><span class="muted" id="pjFilesMsg" aria-live="polite" style="font-size:14.5px"></span></div></section>';
  h += '<section class="sec"><h2>Edge cases to think about</h2><ul class="list">' + P.edge.map(function(t){ return '<li>' + md(t) + '</li>'; }).join('') + '</ul></section>';
  h += '<section class="sec"><h2>How your score is worked out</h2><div class="tbl"><table><thead><tr><th>Part</th><th>Points</th><th>How it is checked</th></tr></thead><tbody>' + PJ_W.map(function(w){ return '<tr><td><b>' + w[1] + '</b></td><td>' + w[2] + '</td><td>' + esc(w[3]) + '</td></tr>'; }).join('') + '</tbody></table></div><p class="prose muted">Tools this project needs: ' + P.need.map(function(n){ return md(n.label); }).join('; ') + '.</p></section>';
  h += '<section class="sec"><h2>Hints</h2><p class="prose muted">Try on your own first. Each hint gives a little more help.</p><div id="pjHints"></div></section>';
  h += '<section class="sec"><h2>Your program</h2><p class="prose muted">Press <b>Run</b> to try your program: a box appears each time <code>input()</code> asks for a value. When it works, press <b>Submit for scoring</b>.</p><div id="pjEd"></div>' +
    '<div class="row"><button class="btn pri" type="button" id="pjSub">Submit for scoring</button><span class="muted" id="pjMsg" aria-live="polite" style="font-size:14.5px"></span></div></section>';
  h += '<div id="pjRes" aria-live="polite"></div><div id="pjModel"></div>';
  h += '<nav class="endnav">' + (k > 0 ? '<button class="btn" type="button" data-go="project-' + ids[k - 1] + '">← ' + esc(PJ[ids[k - 1]].title) + '</button>' : '<button class="btn" type="button" data-go="projects-' + P.part + '">← Part ' + P.part + ' projects</button>') +
    (k < ids.length - 1 ? '<button class="btn pri" type="button" data-go="project-' + ids[k + 1] + '">' + esc(PJ[ids[k + 1]].title) + ' →</button>' : '<button class="btn pri" type="button" data-go="myprojects">My Projects →</button>') + '</nav>';
  view.className = 'col'; view.innerHTML = h;
  CodeBox($('#pjEd'), { key: 'pj:' + id, starter: P.starter, label: 'Project ' + P.part + '.' + P.n + ': ' + P.title });
  function hints(){
    var n = (pjRec(id) || {}).hints || 0, t = P.hints.map(function(x, i){ return i < n ? '<div class="pjhint"><b>Hint ' + (i + 1) + '</b> ' + md(x) + '</div>' : ''; }).join('');
    if (n < P.hints.length) t += '<button class="btn" type="button" id="pjHintB">Show hint ' + (n + 1) + ' of ' + P.hints.length + '</button>';
    $('#pjHints').innerHTML = t;
    var b = $('#pjHintB'); if (b) b.onclick = function(){ pjSave(id, function(r){ r.hints = Math.min(P.hints.length, (r.hints || 0) + 1); }); hints(); };
  }
  hints();
  var fb = $('#pjFiles');
  if (fb) fb.onclick = function(){
    var real = {}; Object.keys(smp).forEach(function(n){ if (smp[n].charAt(0) !== '(') real[n] = smp[n]; });
    $('#pjFilesMsg').textContent = 'Creating the files...';
    pyRun('# hotel_bookings.csv\nimport json as _j\nfor _n, _t in _j.loads(' + JSON.stringify(JSON.stringify(real)) + ').items():\n    with open(_n, "w") as _f:\n        _f.write(_t)\n', [], function(){}).then(function(r){
      $('#pjFilesMsg').textContent = r.status === 'ok' ? 'Done: the files are ready. Now press Run.' : 'Could not create the files.';
    }, function(){ $('#pjFilesMsg').textContent = 'Python could not start.'; });
  };
  function model(){
    if (!((pjRec(id) || {}).attempts)) { $('#pjModel').innerHTML = ''; return; }
    $('#pjModel').innerHTML = '<section class="sec"><h2>Model answer</h2><p class="prose muted">Try to reach ' + PJ_READY + ' on your own first: you learn far more from fixing your own code. The model answer is one good way to solve it, not the only way.</p><details class="reveal"><summary>Show a model answer</summary>' + cell(P.sol, null) + '</details></section>';
  }
  model();
  $('#pjSub').onclick = function(){
    var ta = $('#pjEd .edta'), code = ta ? ta.value : '', btn = this, msg = $('#pjMsg');
    if (!code.trim() || code.trim() === P.starter.trim()) { msg.textContent = 'Write your program first, then submit.'; return; }
    btn.disabled = true; $('#pjRes').innerHTML = '';
    var res = [], p = Promise.resolve();
    P.tests.forEach(function(t, i){ p = p.then(function(){ msg.textContent = 'Running test ' + (i + 1) + ' of ' + P.tests.length + '...'; return pjTest(code, t).then(function(r){ res.push(r); }); }); });
    p.then(function(){ msg.textContent = 'Reading your code...'; return pjAnalyse(code, P.starter); }).then(function(an){
      btn.disabled = false; msg.textContent = '';
      pjShow(P, code, res, an); model();
    }, function(){ btn.disabled = false; msg.textContent = 'Python could not start. Check your internet connection, then try again.'; });
  };
}
function pjTest(code, t){
  /* NumPy loads on first use (several seconds): load it before the timed run so it never counts towards the limit */
  return pyBoot().then(function(){ return /\bnumpy\b/.test(code) ? pyRun('import numpy\n', [], function(){}) : null; }).then(function(){ return t.setup ? pyRun(t.setup, [], function(){}) : null; }).then(function(){
    return new Promise(function(resolve){
      var late = false, timer = setTimeout(function(){ late = true; pyStop(); }, PJ_TIMEOUT);
      pyRun(code, t.inputs.slice(), function(){}).then(function(r){
        clearTimeout(timer);
        var after = t.post && !late && r.status !== 'stopped' ? pyRun(t.post, [], function(){}) : Promise.resolve(null);
        after.then(function(pr){
          var out = r.out || '', got = {}, fgot = {}, lines = out.split('\n'), ftext = pr ? (pr.out || '').replace(/\n+$/, '') : null, flines = ftext == null ? [] : ftext.split('\n').slice(1);
          lines.forEach(function(l){ got[pjNorm(l)] = 1; });
          flines.forEach(function(l){ fgot[pjNorm(l)] = 1; });
          var miss = t.expect.filter(function(l){ return !got[pjNorm(l)]; }).concat((t.fexpect || []).filter(function(l){ return !fgot[pjNorm(l)]; }));
          resolve({ t: t, status: late ? 'timeout' : r.status, out: out, err: r.err || '', miss: miss, pass: r.status === 'ok' && !late && !miss.length, lines: lines, flines: flines, ftext: ftext });
        });
      }, function(){ clearTimeout(timer); resolve({ t: t, status: 'error', out: '', err: 'Python could not start. Check your internet connection.', miss: t.expect.slice(), pass: false, lines: [], flines: [], ftext: null }); });
    });
  });
}
function pjAnalyse(code, starter){
  var src = PJ_AN + '\nimport json as _hub_json\nprint(_hub_json.dumps(analyse(' + JSON.stringify(code) + ', ' + JSON.stringify(starter) + ')))\n';
  return pyRun(src, [], function(){}).then(function(r){ try { return JSON.parse((r.out || '').trim().split('\n').pop()); } catch (e) { return null; } });
}
function pjConcepts(P, an){
  if (!an || !an.ok) return { pts: 0, found: [], miss: P.need, banned: [], err: an ? an.err : 'not checked' };
  var feat = an.feat, found = [], miss = [], banned = [], R = PJ_RULES[P.part] || { ban: [] };
  P.need.forEach(function(n){ var c = n.any.reduce(function(s, k){ return s + (feat[k] || 0); }, 0); (c >= n.min ? found : miss).push(n); });
  R.ban.forEach(function(r){
    var ks = r.any ? r.any.filter(function(k){ return feat[k]; }) : Object.keys(feat).filter(function(k){ return k.indexOf(r.prefix) === 0 && r.exc.indexOf(k) < 0; });
    if (ks.length) banned.push({ label: r.label, where: r.where });
  });
  if (R.allow) {
    var ex = Object.keys(feat).filter(function(k){ return k.indexOf('builtin:') === 0 && R.allow.indexOf(k.slice(8)) < 0 && an.names.indexOf(k.slice(8)) < 0 && (an.defs || []).indexOf(k.slice(8)) < 0; }).map(function(k){ return '`' + k.slice(8) + '()`'; });
    if (ex.length) banned.push({ label: 'built-in functions not taught yet (' + ex.join(', ') + ')', where: 'a later Part' });
  }
  return { pts: Math.max(0, Math.round(25 * found.length / P.need.length) - 5 * banned.length), found: found, miss: miss, banned: banned };
}
function pjRead(an){
  if (!an || !an.ok) return { pts: 0, items: [{ ok: false, max: 15, pts: 0, bad: 'Python could not read your code' + (an && an.err ? ' (' + an.err + ')' : '') + ', so readability could not be checked. Fix the error first.' }] };
  var it = [], short = an.names.filter(function(n){ return n.length < 3 && n !== '_'; }), nn = an.names.length;
  it.push({ max: 5, pts: nn ? Math.round(5 * (nn - short.length) / nn) : 0, ok: nn > 0 && !short.length, good: 'Clear variable names that say what they hold.',
    bad: nn ? 'Use names that say what they hold. ' + short.map(function(n){ return '`' + n + '`'; }).join(', ') + (short.length > 1 ? ' are' : ' is') + ' too short: for example `total_revenue` instead of `t`.' : 'Store your values in variables with clear names, like `total_revenue`, instead of doing everything inside `print()`.' });
  var needC = an.lines > 8, okC = !needC || an.comments > 0;
  it.push({ max: 4, pts: okC ? 4 : 0, ok: okC, good: an.comments ? 'Your own comments explain the steps.' : 'Your program is short, so comments are optional.', bad: 'Add at least one comment of your own (a line starting with `#`, or a docstring in a function) that explains a step. The starter\'s comments do not count.' });
  it.push({ max: 2, pts: an.long.length ? 0 : 2, ok: !an.long.length, good: 'Every line is short enough to read easily.', bad: 'Line ' + an.long.join(', ') + (an.long.length > 1 ? ' are' : ' is') + ' longer than 100 characters. Split it into shorter lines.' });
  var bi = an.tabs.concat(an.indent);
  it.push({ max: 2, pts: bi.length ? 0 : 2, ok: !bi.length, good: 'Clean indentation with no tabs.', bad: 'Use 4 spaces for indentation, never tabs (line ' + bi.join(', ') + ').' });
  it.push({ max: 2, pts: an.tight.length ? 0 : 2, ok: !an.tight.length, good: 'Spaces around `=` make each step easy to read.', bad: 'Put a space on each side of `=` when you store a value (line ' + an.tight.join(', ') + '), like `total = price * units`.' });
  return { pts: it.reduce(function(s, x){ return s + x.pts; }, 0), items: it };
}
function pjNear(lines, want){
  var k = want.indexOf(':') > 0 ? pjNorm(want.slice(0, want.indexOf(':') + 1)).toLowerCase() : '';
  if (!k) return null;
  for (var i = lines.length - 1; i >= 0; i--) { var l = pjNorm(lines[i]); if (l.toLowerCase().indexOf(k) === 0) return l; }
  return null;
}
function pjShow(P, code, res, an){
  var by = { main: [0, 0], logic: [0, 0], edge: [0, 0] };
  res.forEach(function(r){ by[r.t.kind][1]++; if (r.pass) by[r.t.kind][0]++; });
  var cs = pjConcepts(P, an), rd = pjRead(an);
  var pts = { main: Math.round(30 * by.main[0] / by.main[1]), logic: Math.round(20 * by.logic[0] / by.logic[1]), edge: Math.round(10 * by.edge[0] / by.edge[1]), concepts: cs.pts, read: rd.pts };
  var total = pts.main + pts.logic + pts.edge + pts.concepts + pts.read, ready = total >= PJ_READY;
  var good = [], todo = [], keys = [];
  ['main', 'logic', 'edge'].forEach(function(k){
    var name = { main: 'main', logic: 'logic', edge: 'edge-case' }[k];
    if (by[k][0] === by[k][1]) good.push('All ' + by[k][1] + ' ' + name + ' tests pass' + { main: ': your report is right for normal data.', logic: ': your formulas and conditions are right.', edge: ': your program copes with unusual values.' }[k]);
  });
  var seen = {}, nDiff = 0, grp = {};
  res.forEach(function(r, i){
    if (r.pass) return;
    keys.push(P.title + ': test "' + r.t.name + '"');
    var m = '';
    if (r.status === 'error') { var el = r.err.trim().split('\n').pop(); (grp['e' + el] = grp['e' + el] || { n: [], t: function(n){ return 'Your program stopped with an error in ' + n + ': `' + el + '`. Press Run, type the same input, and read the error to find the line.'; } }).n.push(i + 1); }
    else if (r.status === 'input') (grp.input = grp.input || { n: [], t: function(n){ return 'In ' + n + ', your program asked for more input than the test gives. Check that it asks only for the values in the tasks, in the same order, and that it stops reading when it should (for example at the stop word).'; } }).n.push(i + 1);
    else if (r.status === 'timeout' || r.status === 'stopped') m = 'Test ' + (i + 1) + ' (' + r.t.name + ') took longer than ' + PJ_TIMEOUT / 1000 + ' seconds and was stopped. Is something running forever?';
    else if (r.t.tip) m = r.t.tip;
    else if (nDiff++ < 2) { var ml = r.miss[0], inFile = r.t.expect.indexOf(ml) < 0, nr = pjNear(inFile ? r.flines : r.lines, ml); m = inFile ? 'Test ' + (i + 1) + ' (' + r.t.name + '): the file `' + r.t.outfile + '` should contain the line `' + ml + '`' + (r.ftext == null || /\(file not written\)/.test(r.ftext) ? ', but the file was not written.' : nr ? '. It has `' + nr + '` instead.' : ', and no line in it starts like that.') : 'Test ' + (i + 1) + ' (' + r.t.name + '): the line `' + ml + '` is missing' + (nr ? '. You printed `' + nr + '`. The words, signs and number format must match exactly.' : ', and no line starts like it. Check the spelling and the words before the colon.'); }
    if (m && !seen[m]) { seen[m] = 1; todo.push(m); }
  });
  Object.keys(grp).forEach(function(g){ var n = grp[g].n; todo.unshift(grp[g].t((n.length > 1 ? 'tests ' : 'test ') + (n.length > 2 ? n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1] : n.join(' and ')))); });
  if (cs.found.length) good.push('You used ' + cs.found.map(function(n){ return n.label; }).join(', ') + '.');
  cs.miss.forEach(function(n){ todo.push('Use ' + n.label + '.'); keys.push(P.title + ': use ' + n.label); });
  if (an && an.ok && !cs.banned.length) good.push('You stayed within the tools of Part ' + P.part + '.');
  cs.banned.forEach(function(b){ todo.push('Leave out ' + b.label + ' for now. This comes later, in ' + b.where + ', and you can solve this project without it (minus 5 points).'); keys.push(P.title + ': use Part ' + P.part + ' tools only'); });
  rd.items.forEach(function(x){ if (x.ok) good.push(x.good); else { todo.push(x.bad); keys.push(P.title + ': readability'); } });
  var rec; pjSave(P.id, function(r){ r.attempts = (r.attempts || 0) + 1; r.last = total; r.best = Math.max(total, r.best || 0); r.parts = pts; r.todo = keys.filter(function(k, i){ return keys.indexOf(k) === i; }).slice(0, 12); r.at = Date.now(); rec = r; });
  updateSide();
  var ids = PJP[P.part].ids, k = ids.indexOf(P.id), nextP = PARTS.filter(function(p){ return p.n === P.part + 1; })[0], nextCh = nextP && CH.filter(function(c){ return c.part === nextP.n; })[0];
  var nextBtn = k < ids.length - 1 ? '<button class="btn pri" type="button" data-go="project-' + ids[k + 1] + '">Next project: ' + esc(PJ[ids[k + 1]].title) + ' →</button>' : (nextCh ? '<button class="btn pri" type="button" data-go="' + nextCh.id + '">Start Part ' + nextP.n + ': ' + esc(nextCh.nav || nextCh.title) + ' →</button>' : '');
  var h = '<div class="btsum ' + (ready ? 'pass' : 'fail') + '"><div class="btbig"><b>' + total + '</b><span>/ 100</span></div><div class="btmsg"><b>' + (ready ? '🎉 Ready for the next project!' : 'Not ready yet: ' + PJ_READY + ' or more means ready.') + '</b>' +
    '<span style="font-size:14.5px">' + (ready ? 'Great work. You can still improve your score and submit again any time.' : 'Fix the points under <b>What to improve</b>, then submit again. Nothing is locked: you can move on whenever you like.') + ' Attempt ' + rec.attempts + ', best score ' + rec.best + '/100.</span>' +
    '<div class="row">' + (ready ? nextBtn : '') + '<button class="btn" type="button" data-go="myprojects">My Projects</button></div></div></div>';
  h += '<div class="pjbars">' + PJ_W.map(function(w){
    var v = pts[w[0]], sub = by[w[0]] ? by[w[0]][0] + ' of ' + by[w[0]][1] + ' tests' : w[0] === 'concepts' ? cs.found.length + ' of ' + P.need.length + ' tools' + (cs.banned.length ? ', −' + 5 * cs.banned.length + ' for later tools' : '') : rd.items.filter(function(x){ return x.ok; }).length + ' of ' + rd.items.length + ' checks';
    return '<div class="pjbar"><span class="pjbl"><b>' + w[1] + '</b><small>' + sub + '</small></span><span class="pjbt"><i style="width:' + Math.round(100 * v / w[2]) + '%"></i></span><span class="pjbv"><b>' + v + '</b> / ' + w[2] + '</span></div>';
  }).join('') + '</div>';
  h += '<div class="pjfb"><div class="pjgood"><h3>What you did well</h3>' + (good.length ? '<ul class="list">' + good.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '<p class="prose">Keep going: every test you pass will show up here.</p>') + '</div>' +
    '<div class="pjtodo"><h3>What to improve</h3>' + (todo.length ? '<ul class="list">' + todo.map(function(x){ return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' : '<p class="prose">Nothing! Every check passed. 🎉</p>') + '</div></div>';
  h += '<section class="sec"><h2>Every test</h2><div class="tbl pjtests"><table><thead><tr><th>Test</th><th>Input given</th><th>Lines expected</th><th>Your output</th><th>Result</th></tr></thead><tbody>' + res.map(function(r, i){
    var mark = function(l){ var miss = r.miss.indexOf(l) > -1; return '<span class="' + (miss ? 'pjmiss' : 'pjhit') + '">' + esc(l) + '</span>'; };
    var exp = r.t.expect.map(mark).join('\n') + (r.t.fexpect ? '\n<b>--- ' + esc(r.t.outfile) + ' ---</b>\n' + r.t.fexpect.map(mark).join('\n') : '');
    var yo = r.status === 'error' ? r.out + (r.out ? '\n' : '') + r.err.trim().split('\n').pop() : r.status === 'input' ? r.out + '\n(waiting for more input)' : (r.status === 'timeout' || r.status === 'stopped') ? '(stopped after ' + PJ_TIMEOUT / 1000 + ' seconds)' : r.out || '(nothing printed)';
    if (r.ftext != null) yo += '\n' + r.ftext;
    var why = r.pass ? '✓ Pass' : r.status === 'ok' ? '✗ ' + r.miss.length + ' line' + (r.miss.length > 1 ? 's' : '') + ' missing' : r.status === 'error' ? '✗ Error' : r.status === 'input' ? '✗ Asked for more input' : '✗ Too slow';
    return '<tr class="' + (r.pass ? 'ok' : 'no') + '"><td data-l="Test"><b>' + (i + 1) + '. ' + esc(r.t.name) + '</b><br><span class="pill">' + { main: 'main', logic: 'logic', edge: 'edge case' }[r.t.kind] + '</span></td><td data-l="Input given"><pre class="pjinp">' + esc(r.t.inputs.map(function(v){ return JSON.stringify(v); }).join('\n')) + '</pre></td><td data-l="Lines expected"><pre>' + exp + '</pre></td><td data-l="Your output"><pre class="pjyo">' + esc(yo) + '</pre></td><td class="pjr" data-l="Result">' + why + '</td></tr>';
  }).join('') + '</tbody></table></div><p class="prose muted" style="font-size:14px">Inputs are shown in quotes so you can see any spaces. Expected lines in <span class="pjmiss">red</span> were not found in your output.</p></section>';
  $('#pjRes').innerHTML = h;
  $('#pjRes').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function vMyProjects(){
  var bts = store.get('bt', {}), pjs = pjAll(), strong = [], work = [];
  var h = '<header class="chead"><div class="num">Your progress</div><h1>My Projects</h1><p class="lead">Your Big Test and project scores, Part by Part, and the topics to work on next. Everything is saved in this browser. Use <b>Save my progress</b> on the Home page to keep a backup.</p></header>';
  PARTS.forEach(function(p){
    var chs = CH.filter(function(c){ return c.part === p.n && BT[c.id]; }), P = PJP[p.n];
    if (!chs.length && !P) return;
    h += '<section class="sec"><h2>Part ' + p.n + ' · ' + esc(p.title) + '</h2>';
    if (chs.length) h += '<div class="tbl"><table><thead><tr><th>Big Test</th><th>Best</th><th>Last</th><th></th></tr></thead><tbody>' + chs.map(function(c){
      var s = bts[c.id];
      if (s) { if (s.best >= BT_PASS) strong.push(c.num + '. ' + (c.nav || c.title)); else work.push({ t: 'Big Test ' + c.num + '.1: best ' + s.best + '%, aim for ' + BT_PASS + '%', go: 'test-' + c.id }); (s.weak || []).forEach(function(sec){ var sid = btSecId(c.id, sec); if (sid) work.push({ t: (c.nav || c.title) + ': ' + sec, jump: sid, ov: c.id }); }); }
      return '<tr><td><b>' + c.num + '.1</b> ' + esc(c.nav || c.title) + '</td><td>' + (s ? '<span class="pill ' + (s.best >= BT_PASS ? 'lv1">✓ ' : 'lv3">') + s.best + '%</span>' : '<span class="muted">Not taken</span>') + '</td><td>' + (s ? s.last + '%' : '') + '</td><td><button class="btn" type="button" data-go="test-' + c.id + '">' + (s ? 'Retake' : 'Take it') + '</button></td></tr>';
    }).join('') + '</tbody></table></div>';
    if (P) h += '<div class="tbl"><table><thead><tr><th>Project</th><th>Best</th><th>Tries</th><th>Hints</th><th></th></tr></thead><tbody>' + P.ids.map(function(id){
      var x = PJ[id], r = pjs[id];
      if (r && r.attempts) { if (r.best >= PJ_READY) strong.push(x.title + ' (project)'); (r.todo || []).forEach(function(t){ work.push({ t: t, go: 'project-' + id }); }); }
      return '<tr><td><b>' + p.n + '.' + x.n + '</b> ' + esc(x.title) + '<br><span class="pill lv' + x.level + '">' + esc(x.levelName) + '</span></td><td>' + (r && r.attempts ? '<span class="pill ' + (r.best >= PJ_READY ? 'lv1">✓ ' : 'lv3">') + r.best + '/100</span>' : '<span class="muted">Not started</span>') + '</td><td>' + (r ? r.attempts || 0 : 0) + '</td><td>' + (r ? r.hints || 0 : 0) + ' of 3</td><td><button class="btn" type="button" data-go="project-' + id + '">Open</button></td></tr>';
    }).join('') + '</tbody></table></div>';
    h += '</section>';
  });
  h += '<div class="pjfb"><div class="pjgood"><h3>Strong topics</h3>' + (strong.length ? '<div class="row">' + strong.map(function(s){ return '<span class="pill lv1">✓ ' + esc(s) + '</span>'; }).join('') + '</div>' : '<p class="prose muted">Pass a Big Test (' + BT_PASS + '%+) or score ' + PJ_READY + '+ on a project and it shows up here.</p>') + '</div>' +
    '<div class="pjtodo"><h3>Topics to work on</h3>' + (work.length ? '<div class="pjwork">' + work.slice(0, 24).map(function(w){ return '<button class="btn" type="button" ' + (w.jump ? 'data-jump="' + w.jump + '" data-ov="' + w.ov + '"' : 'data-go="' + w.go + '"') + '>' + md(w.t) + '</button>'; }).join('') + '</div><p class="muted" style="font-size:14px;margin:8px 0 0">From your last Big Test attempts and the checks your projects missed. Tap one to practise it.</p>' : '<p class="prose muted">Nothing yet. Take a Big Test or submit a project, and the topics with mistakes show up here.</p>') + '</div></div>';
  view.className = 'col'; view.innerHTML = h;
}

/* ---------- Router ---------- */
var TOOLS = { home: vHome, flashcards: vFlash, exam: vExam, cheatsheet: vCheat, posters: vPosters, overviews: vOverviews, glossary: vGlossary, videos: vVideos, reference: vReference, exercises: vExercises, myprojects: vMyProjects };
function render(id){
  stopAll(); COPY = []; TRY = []; cellNo = 0;
  var btId = /^test-/.test(id) && BT[id.slice(5)] && byId[id.slice(5)] ? id.slice(5) : null;
  var pjId = /^project-/.test(id) && PJ[id.slice(8)] ? id.slice(8) : null;
  var pm = /^projects-(?:part)?(\d+)$/.exec(id), pjPart = pm && PJP[+pm[1]] ? +pm[1] : null;
  if (pjPart) id = 'projects-' + pjPart;
  if (!TOOLS[id] && !byId[id] && !btId && !pjId && !pjPart) id = 'home';
  if (TOOLS[id]) TOOLS[id](); else if (btId) vBigTest(btId); else if (pjId) vProject(pjId); else if (pjPart) vProjectsPart(pjPart); else vChapter(byId[id]);
  $$('.toc', view).forEach(tocArrows);
  var fc = btId ? $('.btlist', view) : $$('.cell, .refsec', view).filter(function(x){ return !x.closest('details'); })[0];
  if (fc) fc.insertAdjacentHTML('beforebegin', SYNKEY);
  updateSide(id);
  var c = byId[id];
  $('#topTitle').textContent = btId ? byId[btId].num + '.1 Big Test' : pjId ? 'Project ' + PJ[pjId].part + '.' + PJ[pjId].n : pjPart ? 'Part ' + pjPart + ' projects' : c ? (c.ov ? c.nav : c.num + '. ' + (c.nav || c.title)) : ({ home: 'Python Study Hub', flashcards: 'Flashcards', exam: 'Final exam', cheatsheet: 'Cheat sheet', posters: 'Revision posters', overviews: 'Part overviews', glossary: 'Glossary', videos: 'Videos', reference: 'Python reference', exercises: 'Quick exercises', myprojects: 'My Projects' })[id];
  closeDrawer();
  window.scrollTo(0, 0);
  if (PENDING) {
    var tg = document.getElementById(PENDING); PENDING = null;
    if (tg) setTimeout(function(){ tg.scrollIntoView({ block: 'start' }); tg.classList.add('flash'); setTimeout(function(){ tg.classList.remove('flash'); }, 1600); }, 40);
  }
}
function route(id){
  if (('#' + id) === location.hash) render(id);
  else { try { location.hash = id; } catch(e){ render(id); } }
}
window.addEventListener('hashchange', function(){ render(location.hash.slice(1) || 'home'); });
view.addEventListener('click', function(e){
  var tr = e.target.closest('[data-try]');
  if (tr) {
    var t = TRY[+tr.getAttribute('data-try')], cl = tr.closest('.cell'), nx = cl.nextElementSibling;
    if (nx && nx.classList.contains('trybox')) { nx.remove(); tr.textContent = '▶ Try it'; return; }
    var box = document.createElement('div'); box.className = 'trybox'; cl.after(box);
    CodeBox(box, { key: 'try:' + (updateSide.cur || '') + ':' + t.n, starter: t.code, label: 'Your copy of this example' });
    tr.textContent = '✕ Close'; var ta = $('.edta', box); if (ta) ta.focus({ preventScroll: true });
    return;
  }
  var rt = e.target.closest('[data-reft]');
  if (rt) {
    var row = rt.closest('tr'), nr = row.nextElementSibling;
    if (nr && nr.classList.contains('reftry')) { nr.remove(); return; }
    var p = rt.getAttribute('data-reft').split(':'), it = REF_BY[p[0]].rows[+p[1]];
    var trow = document.createElement('tr'); trow.className = 'reftry'; trow.innerHTML = '<td colspan="4"><div></div></td>'; row.after(trow);
    CodeBox($('div', trow), { key: 'ref:' + p[0] + ':' + p[1], starter: it.c + '\n', label: 'Try ' + it.m });
    return;
  }
  var fb = e.target.closest('.fold');
  if (fb) { var sc = fb.closest('.sec'); var f = !sc.classList.contains('folded'); sc.classList.toggle('folded', f); fb.setAttribute('aria-expanded', String(!f)); return; }
  var p = e.target.closest('[data-poster]');
  if (p) { store.set('posterSel', p.getAttribute('data-poster')); route('posters'); return; }
  var j = e.target.closest('[data-jump]');
  if (j) { PENDING = j.getAttribute('data-jump'); route(j.getAttribute('data-ov')); return; }
  var b = e.target.closest('[data-go]'); if (b && !b.closest('.mm')) route(b.getAttribute('data-go'));
});

var toTop = document.createElement('button');
toTop.type = 'button'; toTop.className = 'totop'; toTop.hidden = true; toTop.setAttribute('aria-label', 'Back to top');
toTop.innerHTML = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5"/></svg>';
toTop.onclick = function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); };
document.body.appendChild(toTop);
window.addEventListener('scroll', function(){ toTop.hidden = window.scrollY < 900; }, { passive: true });
buildSide();
render(location.hash.slice(1) || 'home');
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); });
}
})();
