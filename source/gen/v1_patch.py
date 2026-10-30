p = 'hub/engine.js'; s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a)); s = s.replace(a, b)
# 1. fold slides and mind maps in place (chapters only; overviews keep them open)
rep("ctx = { mounts: mounts, cid: c.id };", "ctx = { mounts: mounts, cid: c.id, ov: !!c.ov };")
rep("""    case 'anim': case 'deck': case 'mm': case 'pred':
      ctx.mounts.push(b);""", """    case 'deck': case 'mm':
      ctx.mounts.push(b);
      if (ctx.ov) return '<div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div>';
      return '<details class="xtra"><summary><span class="xk">' + (b.t === 'deck' ? 'Slides' : 'Mind map') + '</span><span class="xt">' + md(b.title || '') + '</span><span class="xn">Optional · ' + (b.t === 'deck' ? b.s.length + ' slides' : 'tap to open') + '</span></summary><div class="mount" data-m="' + (ctx.mounts.length - 1) + '"></div></details>';
    case 'anim': case 'pred':
      ctx.mounts.push(b);""")
rep("""<h2 id="' + c.id + '-poster">Revision poster</h2><p class="prose muted">The whole chapter on one page. Use it to revise before the quiz, or come back to it a week later.</p>' + posterHTML(PST[c.id], c.num) + '<div class="row"><button class="btn" type="button" data-poster="' + c.id + '">Open in the poster gallery (wide view)</button></div></section>';""",
    """<h2 id="' + c.id + '-poster">Revision poster</h2><details class="xtra"><summary><span class="xk">Poster</span><span class="xt">The whole chapter on one page</span><span class="xn">Optional · for revision</span></summary><p class="prose muted">Use it to revise before the quiz, or come back to it a week later.</p>' + posterHTML(PST[c.id], c.num) + '<div class="row"><button class="btn" type="button" data-poster="' + c.id + '">Open in the poster gallery (wide view)</button></div></details></section>';""")
rep("var t = document.getElementById(b.getAttribute('data-s')); if (!t) return;", "var t = document.getElementById(b.getAttribute('data-s')); if (!t) return; var dx = t.tagName === 'H2' && t.parentNode.querySelector('details.xtra'); if (dx) dx.open = true;")
# 2. plain-English hints above Python errors
HINTS = r'''
/* ---------- Plain-English hints for Python errors ---------- */
function errHint(err){
  var lines = String(err || '').trim().split('\n'), last = lines[lines.length - 1] || '';
  var m = last.match(/^(\w+(?:Error|Exception|Iteration)?):?\s?(.*)$/), type = m ? m[1] : '', msg = m ? m[2] : '';
  var ln = null, re = /"<your code>", line (\d+)/g, x; while ((x = re.exec(err))) ln = +x[1];
  var c = function(t){ return '<code>' + esc(t) + '</code>'; }, g, h = '';
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
    if ((g = msg.match(/can only concatenate str \(not "(\w+)"\) to str/))) h = 'You joined text and a ' + c(g[1]) + ' with ' + c('+') + '. Turn the number into text with ' + c('str()') + ', or use an f-string.';
    else if ((g = msg.match(/unsupported operand type\(s\) for (.+?): '(\w+)' and '(\w+)'/))) h = 'You cannot use ' + c(g[1]) + ' between a ' + c(g[2]) + ' and a ' + c(g[3]) + '. Convert one of them first' + (g[2] === 'str' || g[3] === 'str' ? ', for example with ' + c('int()') + '. Remember that ' + c('input()') + ' always gives text.' : '.');
    else if ((g = msg.match(/'(\w+)' object is not callable/))) h = 'You put ' + c('( )') + ' after a ' + c(g[1]) + ', which is not a function. Did you name a variable ' + c('list') + ', ' + c('sum') + ', ' + c('str') + ' or ' + c('print') + '? Rename it.';
    else if (/missing \d+ required positional argument/.test(msg)) h = 'The function needs more values inside its brackets.';
    else if (/takes \d+ positional arguments? but \d+ (were|was) given/.test(msg)) h = 'You gave the function a different number of values than it expects. Inside a class, the first parameter must be ' + c('self') + '.';
    else if ((g = msg.match(/'(\w+)' object is not subscriptable/))) h = 'You used ' + c('[ ]') + ' on a ' + c(g[1]) + '. Only things like lists, strings and dictionaries can use ' + c('[ ]') + '.';
    else if ((g = msg.match(/'(\w+)' object is not iterable/))) h = 'You tried to loop over a ' + c(g[1]) + '. Loop over a list or string, or use ' + c('range()') + ' for numbers.';
    else if ((g = msg.match(/'(\w+)' object does not support item assignment/))) h = 'A ' + c(g[1]) + ' cannot be changed in place. Strings and tuples are immutable, so build a new one instead.';
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
    else if (g) h = 'A ' + c(g[1]) + ' does not have ' + c('.' + g[2]) + '. Check the spelling, and check the type: for example lists use ' + c('append') + ' but sets use ' + c('add') + '.';
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
'''
rep("\n/* ---------- Copy ---------- */", HINTS + "\n/* ---------- Copy ---------- */")
rep("""'<div class="rout" hidden><div class="lbl2">Output</div><pre class="rtext"></pre><pre class="rerr" hidden></pre>'""", """'<div class="rout" hidden><div class="lbl2">Output</div><pre class="rtext"></pre><div class="ehint" hidden></div><pre class="rerr" hidden></pre>'""")
rep("var inputs = [], running = false, checking = false, chk = $('.rchk', el), note = $('.rnote', el);", "var inputs = [], running = false, checking = false, chk = $('.rchk', el), note = $('.rnote', el), ehint = $('.ehint', el);")
rep("if (r.status === 'error') { oerr.hidden = false; oerr.textContent = r.err; } else { oerr.hidden = true; }", "if (r.status === 'error') { oerr.hidden = false; oerr.textContent = r.err; var eh = errHint(r.err); ehint.hidden = !eh; ehint.innerHTML = eh; } else { oerr.hidden = true; ehint.hidden = true; }")
rep("function start(){ if (running) return; inputs = []; otext.textContent = ''; oerr.hidden = true;", "function start(){ if (running) return; inputs = []; otext.textContent = ''; oerr.hidden = true; ehint.hidden = true;")
rep("chk.innerHTML = '<b>Your code stopped with an error.</b> Fix the red message above, then check again.'; return; }", "chk.innerHTML = '<b>Your code stopped with an error.</b> Read the hint and the red message above, fix it, then check again.'; return; }")
# 3. small celebration
rep("""      chk.className = 'rchk ok'; chk.innerHTML = '<b>Correct!</b> Your output matches the expected output exactly.';
      var sv = store.get('solved', {}); sv[b.key] = 1; store.set('solved', sv);
      var tk = el.closest('.task'); if (tk) tk.classList.add('solved');""", """      var sv = store.get('solved', {}); sv[b.key] = 1; store.set('solved', sv);
      var tk = el.closest('.task'); if (tk) tk.classList.add('solved');
      var tks = $$('.task', view), nOk = tks.filter(function(t){ return t.classList.contains('solved'); }).length;
      chk.className = 'rchk ok win'; chk.innerHTML = '<span class="wbadge" aria-hidden="true">✓</span><b>Correct!</b> Your output matches the expected output exactly.' + (tks.length > 1 ? '<div class="wcount">' + (nOk === tks.length ? '🎉 All ' + tks.length + ' practice tasks on this page solved!' : nOk + ' of ' + tks.length + ' practice tasks on this page solved') + '</div>' : '');""")
rep("""    if (d[c.id]) toast(OV ? c.nav + ' marked as done' : 'Chapter ' + c.num + ' marked as done');""", """    if (d[c.id]) { var nCh = SEQ.filter(function(x){ return !x.ov; }), nDone = nCh.filter(function(x){ return d[x.id]; }).length; toast(OV ? c.nav + ' done! ✓' : '🎉 Chapter ' + c.num + ' complete! ' + nDone + ' of ' + nCh.length + ' chapters done'); this.classList.add('win'); }""")
open(p, 'w', encoding='utf-8').write(s)
p = 'hub/base.html'; s = open(p, encoding='utf-8').read()
css = '''
details.xtra{border:1px solid var(--line);border-radius:12px;margin:14px 0;background:var(--surface)}
details.xtra>summary{cursor:pointer;list-style:none;display:flex;align-items:center;flex-wrap:wrap;gap:6px 10px;padding:11px 14px;font-size:15px}
details.xtra>summary::-webkit-details-marker{display:none}
details.xtra>summary::before{content:"▸";color:var(--accent);font-size:14px}
details.xtra[open]>summary::before{content:"▾"}
details.xtra[open]>summary{border-bottom:1px solid var(--line)}
details.xtra .xk{font-family:var(--mono);font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--accent);background:var(--accent-soft);border-radius:6px;padding:2px 7px}
details.xtra .xt{font-weight:600;flex:1;min-width:160px}
details.xtra .xn{font-size:13px;color:var(--muted)}
details.xtra>.mount,details.xtra>.prose,details.xtra>.row{padding:12px 14px 0}
details.xtra>.row{padding-bottom:14px}
details.xtra>.mount{padding-bottom:12px}
details.xtra>.mount>.deck,details.xtra>.mount>.mm{margin:0}
.ehint{margin:8px 0 0;padding:10px 12px;border-radius:10px;background:var(--key-soft);border-left:4px solid var(--key);font-size:15px;line-height:1.5}
.ehint b{color:var(--key)}
.rchk.win{animation:winpop .45s ease-out}
.wbadge{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--tip);color:#fff;font-size:13px;font-weight:800;margin-right:8px;vertical-align:-4px;animation:winbadge .6s ease-out}
.wcount{margin-top:6px;font-size:14px;font-weight:600;color:var(--tip)}
.btn.win{animation:winpop .45s ease-out}
@keyframes winpop{0%{transform:scale(.97);box-shadow:0 0 0 0 color-mix(in srgb,var(--tip) 45%,transparent)}60%{transform:scale(1.01);box-shadow:0 0 0 8px color-mix(in srgb,var(--tip) 0%,transparent)}100%{transform:none}}
@keyframes winbadge{0%{transform:scale(0)}70%{transform:scale(1.25)}100%{transform:scale(1)}}
'''
a = '@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}'
assert s.count(a) == 1; s = s.replace(a, css + a)
open(p, 'w', encoding='utf-8').write(s)
p = 'hub/sw.js'; s = open(p, encoding='utf-8').read(); assert s.count("'pyhub-v5'") == 1; s = s.replace("'pyhub-v5'", "'pyhub-v6'"); open(p, 'w', encoding='utf-8').write(s)
print('ok')
