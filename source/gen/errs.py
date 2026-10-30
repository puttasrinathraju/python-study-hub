import traceback, sys, json
codes = ['if x > 3\n    print(x)', 'print("hi"', 'name = "Asha\nprint(name)', 'print "hi"', 'if x = 5:\n    pass', 'print(“hi”)', 'for i in range(3):\nprint(i)', 'x = 1\n    y = 2', 'totl = 5\nprint(total)', 'age = 5\nprint("Age: " + age)', 'n = input or "5"\nprint("5" + 3 - 1)', 'x = "5" * "2"', 'list = [1]\nprint(list("ab"))', 'def f(a): pass\nf()', 'print(int("12.5"))', 'a, b = [1, 2, 3]', 'print([1, 2, 3][3])', 'print({"a": 1}["b"])', 'x = [3, 1].sort()\nx.append(2)', 's = {1}\ns.append(2)', 'print(10 / 0)', 'open("missing.csv")', 'import pandaz', 'c = 0\ndef f():\n    c += 1\nf()', 'def f(): return f()\nf()', 's = "abc"\ns[0] = "z"', 'for x in 5: pass', 'return 5', 'print(f"{1 +}")', 'd = {[1]: 2}', '5abc = 1']
out = []
for code in codes:
    try:
        exec(compile(code, '<your code>', 'exec'), {})
    except BaseException:
        et, ev, tb = sys.exc_info(); tb = tb.tb_next if tb else None
        out.append([code, ''.join(traceback.format_exception(et, ev, tb))])
json.dump(out, open('gen/errs.json', 'w'))
print(len(out), 'errors')
