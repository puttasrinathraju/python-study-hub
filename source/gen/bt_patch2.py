p = 'hub2/engine.js'; s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:60], s.count(a)); s = s.replace(a, b)
rep("var BT_LV = { 1: 'Basic', 2: 'Medium', 3: 'Challenge' }, BT_TY = { mc: 'Choose', out: 'Predict the output', bug: 'Find the fix', code: 'Write code' };",
    "var BT_LV = { 1: 'Basic', 2: 'Medium', 3: 'Challenge' }, BT_TY = { mc: 'Choose', out: 'Predict the output', bug: 'Find the fix', code: '✍️ Write code', fix: '🔧 Fix the code', type: '🔮 Type the output' };\nfunction btEdit(x){ return x.ty === 'code' || x.ty === 'fix'; }\nfunction btWant(x){ return x.ty === 'fix' ? x.want : x.out; }\nfunction btLoose(t){ return btNorm(t).split('\\n').map(function(l){ return l.trim().replace(/\\s+/g, ' '); }).join('\\n'); }")
rep("challenge. Answer them all, then press <b>Finish</b> to see your score and every explanation. Score ' + BT_PASS + '% or more to pass.</p>'",
    "challenge. You <b>type every answer yourself</b>: no options to pick from, so the test shows what you really remember. Press <b>Finish</b> at the end to see your score and every explanation. Score ' + BT_PASS + '% or more to pass.</p><p class=\"prose muted\" style=\"margin:0\">Tip: use the tools from the chapter in your code. Typing the answer straight into <code>print()</code> would pass the check but teach you nothing.</p>'")
rep("    else if (x.c) h += cell(x.c, null);\n    if (x.ty === 'code') h += '<div class=\"btwant\"><div><span>Your code should print exactly</span><pre>' + esc(x.out) + '</pre></div></div><div class=\"btcode\"></div>';",
    "    else if (x.c && x.ty !== 'fix') h += cell(x.c, null);\n    if (x.ty === 'fix') h += '<div class=\"btwant\"><div><span>It should print</span><pre>' + esc(x.want) + '</pre></div><div><span>But it gives</span><pre>' + esc(x.got) + '</pre></div></div><div class=\"btcode\"></div>';\n    else if (x.ty === 'code') h += '<div class=\"btwant\"><div><span>Your code should print exactly</span><pre>' + esc(x.out) + '</pre></div></div><div class=\"btcode\"></div>';\n    else if (x.ty === 'type') h += '<label class=\"btinl\">Your answer<textarea class=\"btin\" rows=\"' + Math.max(1, x.ans.split(\"\\n\").length) + '\" spellcheck=\"false\" autocapitalize=\"off\" autocomplete=\"off\" placeholder=\"Type exactly what it prints\"></textarea></label>';")
rep("    if (x.ty !== 'code') return;\n    var box = $('#btq-' + i + ' .btcode'); CodeBox(box, { key: 'bt:' + cid + ':' + i, starter: x.starter, label: 'Your code' });",
    "    if (x.ty === 'type') { $('#btq-' + i + ' .btin').addEventListener('input', function(){ count(true); }); return; }\n    if (!btEdit(x)) return;\n    var box = $('#btq-' + i + ' .btcode'); CodeBox(box, { key: 'bt:' + cid + ':' + i, starter: x.ty === 'fix' ? x.c + '\\n' : x.starter, label: x.ty === 'fix' ? 'Fix this code' : 'Your code' });")
rep("function answered(i){ var x = L[i]; if (x.ty !== 'code') return ans[i] != null; var ta = $('#btq-' + i + ' .edta'); return !!ta && ta.value.trim() !== '' && ta.value.trim() !== (x.starter || '').trim(); }",
    "function answered(i){ var x = L[i]; if (x.ty === 'type') return $('#btq-' + i + ' .btin').value.trim() !== ''; if (!btEdit(x)) return ans[i] != null; var ta = $('#btq-' + i + ' .edta'); return !!ta && ta.value.trim() !== '' && ta.value.trim() !== (x.ty === 'fix' ? x.c : (x.starter || '')).trim(); }")
rep("      if (x.ty !== 'code') { res[i] = { ok: ans[i] === x.a }; return; }",
    "      if (x.ty === 'type') { var tv = $('#btq-' + i + ' .btin').value; res[i] = { ok: tv.trim() !== '' && btLoose(tv) === btLoose(x.ans), empty: !tv.trim() }; return; }\n      if (!btEdit(x)) { res[i] = { ok: ans[i] === x.a }; return; }")
rep("res[i] = { ok: r.status === 'ok' && btNorm(r.out) === btNorm(x.out), out: r.out, err: r.err, status: r.status };",
    "res[i] = { ok: r.status === 'ok' && btNorm(r.out) === btNorm(btWant(x)), out: r.out, err: r.err, status: r.status };")
rep("(r.ok ? '✓ Correct.' : (x.ty === 'code' ? (r.empty", "(r.ok ? '✓ Correct.' : (btEdit(x) || x.ty === 'type' ? (r.empty")
rep("      if (x.ty === 'code' && !r.ok && !r.empty && !r.nopy) t +=",
    "      if (x.ty === 'type') { $('#btq-' + i + ' .btin').readOnly = true; if (!r.ok) t += '<div class=\"lbl2\" style=\"padding:8px 0 2px\">It prints</div><pre>' + esc(x.ans) + '</pre>'; }\n      if (btEdit(x) && !r.ok && !r.empty && !r.nopy) t +=")
rep("      if (x.ty === 'code') t += '<details class=\"reveal\"><summary>Show a model answer</summary>' + cell(x.sol, x.out) + '</details>';",
    "      if (btEdit(x)) t += '<details class=\"reveal\"><summary>Show a model answer</summary>' + (x.ty === 'fix' ? cell(x.fixed, x.want) : cell(x.sol, x.out)) + '</details>';")
rep("$('#btAgain').onclick = function(){ L.forEach(function(x, i){ if (x.ty === 'code') store.set(", "$('#btAgain').onclick = function(){ L.forEach(function(x, i){ if (btEdit(x)) store.set(")
open(p, 'w', encoding='utf-8').write(s)
p = 'hub2/base.html'; s = open(p, encoding='utf-8').read()
a = '.btfb .rchk{border:1px solid var(--line);border-radius:10px}'
assert s.count(a) == 1
s = s.replace(a, a + '\n.btinl{display:flex;flex-direction:column;gap:4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}\n.btin{font-family:var(--mono);font-size:14px;text-transform:none;letter-spacing:0;font-weight:400;color:var(--ink);background:var(--code-bg);border:1.5px dashed var(--accent);border-radius:8px;padding:8px 10px;resize:vertical;width:100%}\n.btin:focus{outline:2px solid var(--accent);outline-offset:1px;border-style:solid}')
open(p, 'w', encoding='utf-8').write(s)
p = 'hub2/extract.js'; s = open(p, encoding='utf-8').read()
a = "  else if (x.ty === 'code') add(id, x.sol, x.out, false, false, null);"
assert s.count(a) == 1
s = s.replace(a, a + "\n  else if (x.ty === 'fix') add(id, x.fixed, x.want, false, false, null);\n  else if (x.ty === 'type') add(id, x.c, x.ans, false, false, null);")
open(p, 'w', encoding='utf-8').write(s)
p = 'hub2/static_pages.js'; s = open(p, encoding='utf-8').read()
a = "BTL.map(x => '<li><p><b>' + LV[x.lv] + '.</b> ' + md(x.q) + '</p>' + (x.c ? code(x.c) : '') +"
assert s.count(a) == 1
s = s.replace(a, "BTL.map(x => (x.ty === 'fix' || x.ty === 'type') ? '<li><p><b>' + LV[x.lv] + '.</b> ' + md(x.q) + '</p>' + code(x.c) + (x.ty === 'fix' ? '<p>It should print:</p><pre class=\"out\">' + esc(x.want) + '</pre>' : '') + '<details><summary>Answer</summary>' + (x.ty === 'fix' ? code(x.fixed, x.want) : '<pre class=\"out\">' + esc(x.ans) + '</pre>') + '<p>' + md(x.e) + '</p></details></li>' : '<li><p><b>' + LV[x.lv] + '.</b> ' + md(x.q) + '</p>' + (x.c ? code(x.c) : '') +")
open(p, 'w', encoding='utf-8').write(s)
print('ok')
