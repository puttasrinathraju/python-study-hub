import subprocess, sys, json
def run(c): return subprocess.run([sys.executable,'-c','import numpy as np\n'+c],capture_output=True,text=True,check=True).stdout.rstrip('\n')
J = lambda x: json.dumps(x, ensure_ascii=False)
def RC(c): return 'R`\nimport numpy as np\n' + c + '`'
def RO(c): o = run(c); return 'R`' + ('\n' if '\n' in o else '') + o + '`'
cells = {'np.array_split(np.arange(5), 2)':'[array([0, 1, 2]), array([3, 4])]','np.split(np.arange(6), 3)':'[array([0, 1]), array([2, 3]), array([4, 5])]','np.where(np.array([4, 7, 4]) == 4)[0]':'[0 2]','np.searchsorted([10, 20, 30], 25)':'2','np.cumsum([1, 2, 3])':'[1 3 6]','np.diff([1, 4, 9])':'[3 5]','np.unique([3, 1, 3])':'[1 3]','np.intersect1d([1, 2, 3], [2, 3, 4])':'[2 3]','np.setdiff1d([1, 2, 3], [2, 3, 4])':'[1]','np.around([1.25, 2.5], 1)':'[1.2 2.5]'}
for k,v in cells.items(): assert run('print('+k+')')==v, (k, run('print('+k+')'))
p='ov_7.js'; s=open(p,encoding='utf-8').read()
def rep(a,b):
    global s
    assert s.count(a)==1, a[:70]; s=s.replace(a,b)
rep('view copy where argmax mean sum",', 'view copy where argmax mean sum nditer split array_split searchsorted random seed choice distribution normal binomial poisson uniform exponential ufunc cumsum diff floor ceil trunc around unique intersect1d setdiff1d union1d",')
rep('lead: "Both NumPy chapters on one page: making arrays, describing them, doing maths on them, and the classic mix-ups', 'lead: "All three NumPy chapters on one page: making arrays, describing them, doing maths on them, splitting and searching them, simulating data, and the classic mix-ups')
rep('"Describe any array with `shape` (rows, columns), `ndim`, `size` and `dtype`."', '"Describe any array with `shape` (rows, columns), `ndim`, `size` and `dtype`. Simulate realistic data with `np.random`, and set a seed to repeat the results."')
rep('"Make arrays with `np.array`, `zeros`, `ones`, `full`, `arange` (stop excluded) and `linspace` (stop included). Change the layout with `reshape`."', '"Make arrays with `np.array`, `zeros`, `ones`, `full`, `arange` (stop excluded) and `linspace` (stop included). Change the layout with `reshape` and cut arrays up with `array_split`."')
rep('''"a[a > 50], np.where", "view vs copy"] }
    ]},''', '''"a[a > 50], np.where", "view vs copy"] },
      { t: "22. Extras", go: "numpy3", k: ["nditer, ndenumerate", "array_split, vsplit, hsplit", "np.where(cond), searchsorted", "random.seed, choice", "normal, binomial, poisson", "ufuncs: around, cumsum, diff", "intersect1d, union1d"] }
    ]},''')
defs = [("ufunc", "A **universal function**: a NumPy function that works on every value of an array at once, in fast compiled code. `a + b` is really `np.add(a, b)`.", 'print(np.add([1, 2], [10, 20]), np.sqrt([4, 9]))'),
        ("Random seed", "A starting number for the random generator. The same seed gives the same \"random\" numbers every run, so anyone can repeat your results.", 'np.random.seed(1)\na = np.random.rand(3)\nnp.random.seed(1)\nb = np.random.rand(3)\nprint(np.array_equal(a, b))'),
        ("Distribution", "The pattern of which values are likely and which are rare. Normal is a bell curve around the average. Poisson counts events in a time window.", 'np.random.seed(0)\nx = np.random.normal(100, 15, 100000)   # average 100, spread 15\nprint(round(x.mean()), round(x.std()))')]
dtxt = ''.join(',\n      { t: %s, d: %s, c: %s, o: %s, go: "numpy3" }' % (J(t), J(d), RC(c), RO(c)) for t, d, c in defs)
rep('print(sales.max(), sales.argmax())`, o: R`90 1`, go: "numpy2" }\n    ]},', 'print(sales.max(), sales.argmax())`, o: R`90 1`, go: "numpy2" }' + dtxt + '\n    ]},')
tables = '''    { t: "table", master: true, title: "Splitting, searching and set functions", head: ["Code", "Does", "Example", "Result"], rows: [
      ["`np.array_split(a, n)`", "Cuts into n parts, which **can be unequal**", "`np.array_split(np.arange(5), 2)`", "`[array([0, 1, 2]), array([3, 4])]`"],
      ["`np.split(a, n)`", "Cuts into n **equal** parts (ValueError otherwise)", "`np.split(np.arange(6), 3)`", "`[array([0, 1]), array([2, 3]), array([4, 5])]`"],
      ["`np.where(cond)`", "Positions where cond is True", "`np.where(np.array([4, 7, 4]) == 4)[0]`", "`[0 2]`"],
      ["`np.searchsorted(a, x)`", "Where x would fit in the sorted array a", "`np.searchsorted([10, 20, 30], 25)`", "`2`"],
      ["`np.cumsum(a)`", "Running total", "`np.cumsum([1, 2, 3])`", "`[1 3 6]`"],
      ["`np.diff(a)`", "Change between neighbours (one value shorter)", "`np.diff([1, 4, 9])`", "`[3 5]`"],
      ["`np.around(a, d)`", "Round to d decimals (.5 to the even number)", "`np.around([1.25, 2.5], 1)`", "`[1.2 2.5]`"],
      ["`np.unique(a)`", "Sorted unique values", "`np.unique([3, 1, 3])`", "`[1 3]`"],
      ["`np.intersect1d(a, b)`", "Values in both", "`np.intersect1d([1, 2, 3], [2, 3, 4])`", "`[2 3]`"],
      ["`np.setdiff1d(a, b)`", "Values in a but not in b", "`np.setdiff1d([1, 2, 3], [2, 3, 4])`", "`[1]`"]
    ]},
    { t: "table", master: true, title: "Random data in one table", head: ["Code", "Gives you", "Typical use"], rows: [
      ["`np.random.seed(n)`", "The same random numbers every run", "Results others can repeat"],
      ["`np.random.rand(n)`", "Decimals from 0 to 1", "Quick test data"],
      ["`np.random.randint(lo, hi, n)`", "Whole numbers, **hi excluded**", "Dice rolls, IDs"],
      ["`np.random.choice(items, n, p=[...])`", "Random picks, with the chances you set", "Sampling, simulating categories"],
      ["`np.random.permutation(a)`", "A shuffled **copy**", "Random order, original kept"],
      ["`np.random.shuffle(a)`", "Shuffles `a` **itself**, returns `None`", "Random order in place"],
      ["`np.random.normal(loc, scale, n)`", "A bell curve around `loc`", "Scores, delivery times"],
      ["`np.random.binomial(n, p, size)`", "Successes out of n tries", "Guests out of 10 who order breakfast"],
      ["`np.random.poisson(lam, n)`", "Event counts per time window", "Bookings per day"],
      ["`np.random.uniform(lo, hi, n)`", "Every value equally likely", "Random test prices"],
      ["`np.random.exponential(scale, n)`", "Waiting time between events", "Minutes between bookings"]
    ]},
    { t: "h", text: "Don't mix these up" },'''
rep('    { t: "h", text: "Don\'t mix these up" },', tables)
vs = []
def V(title, head, rows, c, rule):
    vs.append('    { t: "vs", title: %s, head: %s, rows: [\n%s\n    ], c: %s, o: %s, rule: %s },' % (J(title), J(head), ',\n'.join('      ' + J(r) for r in rows), RC(c), RO(c), J(rule)))
V("`np.array_split` vs `np.split`", ["", "`np.array_split(a, n)`", "`np.split(a, n)`"], [["Parts must be equal?", "[[ok:No]]: the first parts get the extras", "[[no:Yes]]: otherwise ValueError"], ["7 values into 3 parts", "Sizes 3, 2, 2", "ValueError"], ["Use it for", "Batches, sharing work out", "When you know it divides evenly"]], 'a = np.arange(7)\nprint([len(p) for p in np.array_split(a, 3)])\nprint([len(p) for p in np.split(a[:6], 3)])', "Not sure the parts will be equal? Use `array_split`.")
V("`np.where(cond)` vs `np.where(cond, x, y)`", ["", "`np.where(cond)`", "`np.where(cond, x, y)`"], [["Arguments", "One", "Three"], ["Gives", "The **positions** where cond is True", "A new array: x where True, y where False"], ["Result length", "The number of matches", "The same as the input"]], 'marks = np.array([35, 80, 55])\nprint(np.where(marks >= 40)[0])\nprint(np.where(marks >= 40, "Pass", "Fail"))', "One argument finds positions. Three arguments replace values.")
V("`floor` vs `ceil` vs `trunc` vs `around`", ["", "`np.floor`", "`np.ceil`", "`np.trunc`", "`np.around`"], [["Rule", "Down", "Up", "Towards 0", "Nearest (.5 to even)"], ["`-1.7` becomes", "-2", "-1", "-1", "-2"], ["`2.5` becomes", "2", "3", "2", "2"]], 'a = np.array([-1.7, 2.5])\nprint(np.floor(a), np.ceil(a), np.trunc(a), np.around(a))', "Negative numbers show the difference: `floor` goes down, `trunc` goes towards 0.")
V("`permutation` vs `shuffle`", ["", "`np.random.permutation(a)`", "`np.random.shuffle(a)`"], [["Changes `a`?", "[[ok:No]]", "[[no:Yes]]"], ["Returns", "A new shuffled array", "`None`"], ["Use it for", "A random order while keeping the original", "Shuffling in place"]], 'a = np.array([1, 2, 3])\nb = np.random.permutation(a)\nprint(a, np.sort(b))\nprint(np.random.shuffle(a))', "Need the original order later? Use `permutation`.")
V("Normal vs Binomial vs Poisson", ["", "`normal(loc, scale)`", "`binomial(n, p)`", "`poisson(lam)`"], [["Gives", "Decimals around an average", "Whole numbers from 0 to n", "Whole numbers from 0 up"], ["Shape", "Bell curve, same on both sides", "A hump, never above n", "A hump with a long right tail"], ["Example", "Delivery times", "Guests out of 10 who order breakfast", "Bookings per day"]], 'np.random.seed(0)\nprint(round(np.random.normal(30, 5, 100000).mean()))\nprint(np.random.binomial(10, 0.4, 100000).max() <= 10)\nprint(np.random.poisson(6, 100000).min() >= 0)', "Measuring something? normal. Successes out of n tries? binomial. Events in a time window? poisson.")
rep('\n\n    { t: "h", text: "Try it yourself" },', '\n' + '\n'.join(vs) + '\n\n    { t: "h", text: "Try it yourself" },')
pc = 'rates = np.array([1800, 2600, 4800, 2600, 1800])\nbands = np.searchsorted([2000, 3000], rates, side="right")\nprint(bands)\nprint([int(np.sum(bands == i)) for i in range(3)])'
prac = ',\n      { q: %s, hint: %s, starter: %s, sol: %s, out: %s, why: %s }' % (J('`rates = np.array([1800, 2600, 4800, 2600, 1800])`. Give every rate a band number with `np.searchsorted([2000, 3000], rates, side="right")`: 0 is under 2000, 1 is 2000 to 2999, 2 is 3000 and up. Print the bands, then how many rates are in each band as a list.'), J('After making `bands`, count each band with `int(np.sum(bands == i))` for `i` in `range(3)`.'), J('import numpy as np\nrates = np.array([1800, 2600, 4800, 2600, 1800])\n'), RC(pc), RO(pc), J('`searchsorted` turns each value into a band number in one step, with no `if`/`elif` chain.'))
rep('''why: "`:` takes every row and `1` picks the second column, because counting starts at 0." }
    ]}''', '''why: "`:` takes every row and `1` picks the second column, because counting starts at 0." }''' + prac + '\n    ]}')
quiz = [('What does this print?', 'print([len(p) for p in np.array_split(np.arange(8), 3)])', ["`[3, 3, 2]`", "`[2, 3, 3]`", "`[3, 2, 3]`", "A ValueError"], 0, "8 ÷ 3 = 2 with 2 left over, so the first two parts get one extra each."),
        ('What does this print?', 'print(np.searchsorted([100, 200, 300], 200, side="right"))', ["`1`", "`2`", "`3`", "`200`"], 1, "200 is already in the array. `side=\"right\"` places it after the equal value, at position 2."),
        ('What does this print?', 'print(np.diff(np.cumsum([3, 4, 5])))', ["`[4 5]`", "`[3 4 5]`", "`[7 9]`", "`[1 1]`"], 0, "`cumsum` gives `[3 7 12]`. `diff` gives the changes, 4 and 5: it undoes `cumsum`, except for the first value."),
        ('Which distribution would you use to simulate the number of calls a help desk gets each hour?', None, ["Normal", "Uniform", "Poisson", "Binomial"], 2, "Poisson counts events in a fixed time window, like calls per hour or bookings per day.")]
qtxt = ''
for q, c, o, a, e in quiz:
    if c: assert o[a].strip('`') == run(c), (c, run(c)); qtxt += ',\n    { q: %s, c: %s, o: %s, a: %d, chk: 1, e: %s }' % (J(q), RC(c), J(o), a, J(e))
    else: qtxt += ',\n    { q: %s, o: %s, a: %d, e: %s }' % (J(q), J(o), a, J(e))
rep('''e: "`:` takes every row and `1` picks column 1 from each." }
  ],''', '''e: "`:` takes every row and `1` picks column 1 from each." }''' + qtxt + '\n  ],')
cards = [["`array_split` vs `split`", "`array_split` allows unequal parts (the first ones get the extras). `split` needs equal parts or raises ValueError."], ["`np.where(cond)` vs `np.where(cond, x, y)`", "One argument gives the positions where cond is True. Three arguments give a new array with x or y in every place."], ["Normal vs Binomial vs Poisson", "Normal: a bell curve of measurements. Binomial: successes out of n tries. Poisson: event counts per time window."], ["What is a ufunc?", "A NumPy function that works on every value of an array at once, like `np.add`, `np.around` or `np.cumsum`."]]
rep('''One string makes every value a string."]
  ]''', '''One string makes every value a string."],\n''' + ',\n'.join('    ' + J(c) for c in cards) + '\n  ]')
open(p,'w',encoding='utf-8').write(s)
print('ok')
