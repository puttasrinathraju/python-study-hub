import subprocess, json, sys
def run(code, err=False):
    p = subprocess.run([sys.executable, '-c', code], capture_output=True, text=True)
    if err: return (p.stdout + p.stderr.strip().split('\n')[-1]).strip()
    assert p.returncode == 0, (code, p.stderr); return p.stdout.rstrip('\n')
NP = 'import numpy as np\n'
import numpy as _np
class Raw(str): pass
def hist(counts, **o):
    return Raw('V.hist(' + json.dumps([int(c) for c in counts]) + ', ' + json.dumps(o, ensure_ascii=False) + ')')
def strip(items, **o):
    return Raw('V.strip(' + json.dumps([str(x) for x in items]) + ', ' + json.dumps(o, ensure_ascii=False) + ')')
def cat(*parts):
    return Raw(' + '.join(p if isinstance(p, Raw) else json.dumps(p, ensure_ascii=False) for p in parts))
def PRED(code, opts, a, e):
    code = NP + code.strip('\n'); out = run(code); assert opts[a].strip('`') == out, (opts[a], out)
    return {"t": "pred", "chk": 1, "c": code, "o": opts, "a": a, "e": e}
rs = _np.random.RandomState(7); H_NORMAL = _np.histogram(rs.normal(60, 10, 100000), _np.arange(20, 105, 5))[0]
rs = _np.random.RandomState(3); H_BINOM = _np.bincount(rs.binomial(10, 0.4, 100000), minlength=11)
rs = _np.random.RandomState(5); H_POIS = _np.bincount(_np.minimum(rs.poisson(6, 100000), 16), minlength=17)
rs = _np.random.RandomState(9); H_UNIF = _np.histogram(rs.uniform(100, 200, 100000), _np.arange(100, 210, 10))[0]
rs = _np.random.RandomState(4); H_EXP = _np.histogram(rs.exponential(10, 100000), _np.arange(0, 65, 5))[0]
FIG_NORMAL = hist(H_NORMAL, ticks=[[0, "20"], [4, "40"], [6, "50"], [8, "60"], [10, "70"], [12, "80"], [16, "100"]], hl=[6, 7, 8, 9], label="Histogram of 100,000 normal values around 60")
FIG_BINOM = hist(H_BINOM, labels=[str(i) for i in range(11)], hl=[4], bw=28, label="Histogram of binomial values from 0 to 10, peak at 4")
FIG_POIS = hist(H_POIS, labels=[str(i) if i % 2 == 0 and i < 16 else ('16+' if i == 16 else '') for i in range(17)], hl=list(range(10, 17)), label="Histogram of daily bookings, peak near 6, long right tail")
FIG_UNIF = hist(H_UNIF, ticks=[[0, "100"], [5, "150"], [10, "200"]], bw=30, label="Flat histogram of uniform values from 100 to 200")
FIG_EXP = hist(H_EXP, ticks=[[0, "0"], [2, "10"], [4, "20"], [6, "30"], [8, "40"], [12, "60 min"]], bw=26, label="Histogram of waiting times, tallest at 0 and falling away")
def C(code, ttl=None, err=False):
    code = NP + code.strip('\n'); b = {"t": "code", "c": code, "o": run(code, err)}
    if ttl: b["ttl"] = ttl
    if err: b["err"] = True
    return b
def P(q, hint, sol, why, starter=None):
    sol = NP + sol.strip('\n'); t = {"q": q, "hint": hint, "sol": sol, "out": run(sol), "why": why}
    if starter: t["starter"] = starter
    return t
body = [
 {"t": "h", "text": "Looping over arrays"},
 {"t": "p", "b": "You rarely need loops in NumPy, because maths on the whole array is faster. When you do, a `for` loop over a 2D array gives you one **row** at a time."},
 C('m = np.array([[1, 2], [3, 4]])\nfor row in m:\n    print(row)'),
 C('m = np.array([[1, 2], [3, 4]])\nfor x in np.nditer(m):\n    print(x, end=" ")', "nditer: every single value, whatever the shape"),
 C('m = np.array([[10, 20], [30, 40]])\nfor pos, x in np.ndenumerate(m):\n    print(pos, x)', "ndenumerate: the position and the value together"),
 {"t": "note", "k": "tip", "b": "Before you write a loop, ask: can NumPy do this on the whole array at once? Usually it can, and it is much faster."},
 {"t": "h", "text": "Splitting arrays"},
 {"t": "p", "b": "Splitting is the opposite of joining with `concatenate`. `np.array_split(a, n)` cuts an array into `n` parts. If the parts cannot be equal, the first ones get one extra item."},
 C('a = np.arange(1, 8)\nfor part in np.array_split(a, 3):\n    print(part)'),
 {"t": "anim", "title": "How array_split shares out 7 values", "frames": [
   {"html": cat(strip(range(1, 8), w=52, label="a"), '<div class="bigcode">np.array_split(a, 3)</div>'), "c": "7 values into 3 parts. 7 ÷ 3 = 2, with 1 left over."},
   {"html": cat(strip(range(1, 8), w=52, hl2=[0, 1, 2], dim=[3, 4, 5, 6], bracket=[0, 3, "part 1"])), "c": "Every part gets 2 values. The 1 left over goes to the **first** part, so part 1 gets 3 values: `[1 2 3]`."},
   {"html": cat(strip(range(1, 8), w=52, hl=[3, 4], hl2=[0, 1, 2], dim=[5, 6], bracket=[3, 5, "part 2"])), "c": "Part 2 gets the next 2: `[4 5]`."},
   {"html": cat(strip(range(1, 8), w=52, hl=[5, 6], hl2=[0, 1, 2, 3, 4], bracket=[5, 7, "part 3"]), '<div class="res">[array([1, 2, 3]), array([4, 5]), array([6, 7])]</div>'), "c": "Part 3 gets the last 2: `[6 7]`. The sizes are 3, 2 and 2. `np.split(a, 3)` would stop with a ValueError instead."}]},
 C('a = np.arange(6)\nprint(np.split(a, 3))', "np.split works too, but only when the parts are equal"),
 C('np.split(np.arange(7), 3)', "7 items cannot make 3 equal parts", err=True),
 C('m = np.arange(1, 7).reshape(2, 3)\ntop, bottom = np.vsplit(m, 2)\nprint(top, bottom)\nleft, mid, right = np.hsplit(m, 3)\nprint(left.ravel(), right.ravel())', "Split a table into rows (vsplit) or columns (hsplit)"),
 PRED('print([len(p) for p in np.array_split(np.arange(10), 4)])', ["`[3, 3, 2, 2]`", "`[2, 2, 3, 3]`", "`[3, 3, 3, 1]`", "A ValueError"], 0, "10 ÷ 4 = 2 with 2 left over. The first two parts get one extra each: 3, 3, 2, 2."),
 {"t": "table", "head": ["Function", "Cuts", "Parts must be equal?"], "rows": [["`np.array_split(a, n)`", "Into n parts", "[[ok:No]]: the first parts get the extras"], ["`np.split(a, n)`", "Into n parts", "[[no:Yes]]: ValueError otherwise"], ["`np.vsplit(m, n)`", "A table into groups of rows", "Yes"], ["`np.hsplit(m, n)`", "A table into groups of columns", "Yes"]]},
 {"t": "h", "text": "Searching arrays"},
 {"t": "p", "b": "`np.where(condition)` gives the **positions** where the condition is True. `np.searchsorted(a, x)` tells you where `x` would go in a **sorted** array to keep it sorted."},
 C('a = np.array([4, 7, 4, 9, 4])\nprint(np.where(a == 4))\nprint(np.where(a == 4)[0])'),
 C('prices = np.array([100, 250, 400, 900])\nprint(np.searchsorted(prices, 300))\nprint(np.searchsorted(prices, [50, 400, 1000]))\nprint(np.searchsorted(prices, 400, side="right"))   # after an equal value', "searchsorted: where would this value fit?"),
 {"t": "anim", "title": "searchsorted: where does 300 fit?", "frames": [
   {"html": cat(strip([100, 250, 400, 900], w=64, label="prices"), '<div class="bigcode">np.searchsorted(prices, 300)</div>'), "c": "`prices` is sorted. Where could 300 go so that it stays sorted?"},
   {"html": cat(strip([100, 250, 400, 900], w=64, hl2=[0, 1], dim=[2, 3])), "c": "100 and 250 are smaller than 300, so 300 must come after them."},
   {"html": cat(strip([100, 250, 400, 900], w=64, hl2=[0, 1], hl=[2]), '<div class="res">2</div>'), "c": "400 is the first value bigger than 300, so 300 goes **at position 2**, just before 400."},
   {"html": cat(strip([100, 250, 300, 400, 900], w=64, hl=[2])), "c": "Put there, the array stays sorted. Analysts use this to put values into bands, like price ranges. If the value is already in the array, `side=\"right\"` places it after the equal value instead of before it."}]},
 {"t": "note", "k": "trap", "b": "`np.where(cond)` with **one** argument gives positions. `np.where(cond, x, y)` with **three** arguments picks values, as you saw in the last chapter. Same name, two different jobs."},
 {"t": "h", "text": "Random numbers"},
 {"t": "p", "b": "`np.random` makes random data for testing code, simulations and sampling. `np.random.seed(n)` makes the \"random\" numbers repeat exactly, so your results are the same every run."},
 C('np.random.seed(42)\nrolls = np.random.randint(1, 7, size=1000)    # 1000 dice rolls; 7 is not included\nprint(rolls.min(), rolls.max(), len(rolls))', "randint: random whole numbers"),
 C('np.random.seed(1)\ndays = np.random.choice(["busy", "quiet"], p=[0.7, 0.3], size=10000)\nprint(round(np.mean(days == "busy"), 1))', "choice: pick from a list, with chances you set"),
 C('a = np.array([1, 2, 3, 4, 5])\np = np.random.permutation(a)     # a new shuffled copy; a is unchanged\nprint(np.array_equal(np.sort(p), a), a)\nnp.random.shuffle(a)             # shuffles a itself\nprint(np.sort(a))', "permutation vs shuffle"),
 {"t": "note", "k": "tip", "b": "Newer code often uses a generator object: `rng = np.random.default_rng(42)`, then `rng.integers(1, 7, 10)` or `rng.normal(0, 1, 5)`. It does the same jobs and is the modern recommendation."},
 {"t": "h", "text": "Random data distributions"},
 {"t": "p", "b": "A ==distribution== describes which values are likely and which are rare. Analysts use them to simulate data and to recognise patterns in real data. Each example below makes 100,000 values, so the averages come out very close to the theory."},
 {"t": "table", "head": ["Distribution", "Function", "Gives you", "Real example"], "rows": [
   ["Normal", "`np.random.normal(loc, scale, size)`", "A bell curve around `loc`", "Test scores, delivery times, heights"],
   ["Binomial", "`np.random.binomial(n, p, size)`", "Successes out of `n` tries", "How many of 10 guests order breakfast"],
   ["Poisson", "`np.random.poisson(lam, size)`", "Count of events in a time window", "Bookings per day, calls per hour"],
   ["Uniform", "`np.random.uniform(low, high, size)`", "Every value in the range equally likely", "Random test prices"],
   ["Exponential", "`np.random.exponential(scale, size)`", "Time until the next event", "Minutes between two bookings"],
   ["Logistic", "`np.random.logistic(loc, scale, size)`", "Like normal, with more extreme values", "Growth models, machine learning"],
   ["Multinomial", "`np.random.multinomial(n, pvals)`", "Counts across several outcomes", "100 dice rolls: how many 1s, 2s, ... 6s"],
   ["Chi-square", "`np.random.chisquare(df, size)`", "Used in statistical tests", "Is this difference real or chance?"],
   ["Rayleigh", "`np.random.rayleigh(scale, size)`", "Sizes of random 2D movements", "Wind speeds, signal strength"],
   ["Pareto", "`np.random.pareto(a, size)`", "The 80/20 rule: a few huge values", "A few customers bring most revenue"],
   ["Zipf", "`np.random.zipf(a, size)`", "A few very common items, many rare ones", "Word counts, city sizes"]]},
 {"t": "deck", "title": "Which distribution fits my data?", "s": [
   {"big": "A distribution is the shape your data makes when you count it.", "b": "Count how many values fall into each range and draw the counts as bars: a **histogram**. Its shape tells you which distribution fits. Every chart here is 100,000 simulated values."},
   {"h": "Normal: the bell curve", "b": "Most values sit near the average and fewer sit far away, on both sides. Test scores, delivery times, heights.", "svg": FIG_NORMAL},
   {"h": "Binomial: successes out of n tries", "b": "10 guests, and each one orders breakfast with a chance of 0.4. On most days about **4** of them do. It can never go above 10.", "svg": FIG_BINOM},
   {"h": "Poisson: events in a time window", "b": "Bookings per day, 6 on average. Never negative, with a long tail to the right (the highlighted busy days).", "svg": FIG_POIS},
   {"h": "Uniform: every value equally likely", "b": "A random price between 100 and 200. Flat: no value is more likely than another.", "svg": FIG_UNIF},
   {"h": "Exponential: waiting time until the next event", "b": "Minutes between two bookings, 10 on average. Short waits are common and long waits are rare.", "svg": FIG_EXP},
   {"h": "How to choose", "items": ["Measuring something, like a time or a score? Try **normal**.", "Counting successes out of a fixed number of tries? **Binomial**.", "Counting events in a time window? **Poisson**.", "Measuring the wait between events? **Exponential**.", "No value more likely than another? **Uniform**."]}]},
 C('np.random.seed(7)\nscores = np.random.normal(loc=60, scale=10, size=100000)\nprint(round(scores.mean()), round(scores.std()))\nprint(round(np.mean((scores > 50) & (scores < 70)), 2))   # share within 1 std of the mean', "Normal: about 68% of values sit within 1 standard deviation"),
 {"t": "fig", "svg": FIG_NORMAL, "cap": "The 100,000 scores as a histogram. The highlighted bars, from 50 to 70 (one standard deviation either side of 60), hold about 68% of all values."},
 C('np.random.seed(3)\nbreakfast = np.random.binomial(n=10, p=0.4, size=100000)   # guests out of 10 who order breakfast\nprint(round(breakfast.mean()), breakfast.min() >= 0, breakfast.max() <= 10)', "Binomial: the average is n × p = 4"),
 C('np.random.seed(5)\nbookings = np.random.poisson(lam=6, size=100000)   # bookings per day, 6 on average\nprint(round(bookings.mean()), round(np.mean(bookings >= 10), 2))', "Poisson: 6 a day on average, 10 or more on about 8% of days"),
 C('np.random.seed(9)\nu = np.random.uniform(100, 200, size=100000)\nprint(u.min() >= 100, u.max() < 200, round(u.mean()))', "Uniform: every value equally likely, so the average is the middle"),
 C('np.random.seed(2)\ncounts = np.random.multinomial(600, [1/6] * 6)   # 600 dice rolls\nprint(counts.sum(), len(counts), all(counts > 60))', "Multinomial: counts for each face add up to the total rolls"),
 {"t": "h", "text": "ufuncs: NumPy's fast maths functions"},
 {"t": "p", "b": "A ==ufunc== (universal function) works on every value of an array at once, in fast compiled code. You have already used some: `a + b` is really `np.add(a, b)`."},
 C('a = np.array([10, 20, 30])\nb = np.array([3, 4, 5])\nprint(np.add(a, b), np.subtract(a, b), np.multiply(a, b))\nprint(np.divide(a, b).round(2), np.power(b, 2), np.mod(a, b))', "Simple arithmetic"),
 C('a = np.array([-2.5, -1.7, 1.2, 2.5, 3.5])\nprint("around:", np.around(a))\nprint("floor: ", np.floor(a))\nprint("ceil:  ", np.ceil(a))\nprint("trunc: ", np.trunc(a))', "Rounding: four different rules"),
 PRED('print(np.around([0.5, 1.5, 2.5]))', ["`[1. 2. 3.]`", "`[0. 2. 2.]`", "`[0. 1. 2.]`", "`[1. 2. 2.]`"], 1, "A .5 goes to the nearest **even** number, exactly like Python's `round()`. Always rounding .5 up would push totals higher over many values."),
 {"t": "table", "head": ["Function", "Rule", "-1.7 becomes", "2.5 becomes"], "rows": [["`np.around`", "Nearest (a .5 goes to the even number)", "-2", "2"], ["`np.floor`", "Down, towards minus infinity", "-2", "2"], ["`np.ceil`", "Up, towards plus infinity", "-1", "3"], ["`np.trunc`", "Cut the decimals off, towards 0", "-1", "2"]]},
 C('print(np.log10([10, 100, 1000]), np.log2([2, 8]), np.log(np.e).round(2))', "Logs"),
 C('sales = np.array([120, 80, 150])\nprint(np.sum(sales), np.cumsum(sales))\nprint(np.prod([2, 3, 4]), np.cumprod([2, 3, 4]))\nprint(np.diff([100, 120, 90, 130]))', "Sums, products and differences"),
 C('print(np.lcm(4, 6), np.gcd(12, 18))\nprint(np.lcm.reduce([3, 4, 6]), np.gcd.reduce([20, 30, 50]))', "LCM and GCD, for two numbers or a whole array"),
 C('angles = np.array([0, 90, 180])\nprint(np.sin(np.deg2rad(angles)).round(2))', "Trigonometry works in radians, so convert degrees first"),
 C('a = np.array([1, 2, 3, 4])\nb = np.array([3, 4, 5])\nprint(np.unique([3, 1, 3, 2]), np.union1d(a, b))\nprint(np.intersect1d(a, b), np.setdiff1d(a, b), np.setxor1d(a, b))', "Set operations on arrays"),
 C('def gst(price):\n    return round(price * 1.18, 2)\n\ngst_u = np.frompyfunc(gst, 1, 1)   # 1 input, 1 output\nprint(gst_u(np.array([100, 250])))', "Make your own ufunc from a normal function"),
 {"t": "table", "head": ["Family", "Functions", "Same as"], "rows": [["Arithmetic", "`np.add`, `np.subtract`, `np.multiply`, `np.divide`, `np.power`, `np.mod`", "`+ - * / ** %`"], ["Rounding", "`np.around`, `np.floor`, `np.ceil`, `np.trunc`", "`round()`, `math.floor()` …"], ["Logs", "`np.log`, `np.log2`, `np.log10`", "`math.log()`"], ["Sums and products", "`np.sum`, `np.cumsum`, `np.prod`, `np.cumprod`, `np.diff`", "`sum()` and loops"], ["LCM and GCD", "`np.lcm`, `np.gcd`, `.reduce()`", "`math.lcm()`, `math.gcd()`"], ["Trigonometry", "`np.sin`, `np.cos`, `np.deg2rad`, `np.rad2deg`", "`math.sin()` …"], ["Sets", "`np.unique`, `np.union1d`, `np.intersect1d`, `np.setdiff1d`, `np.setxor1d`", "Python sets `| & - ^`"]]},
 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("`stays = np.array([2, 1, 3, 2, 4, 1, 2])` holds a week of guest stays. Split it into 3 parts with `array_split` and print the total nights in each part as a list: `[6, 6, 3]`.", "Loop over `np.array_split(stays, 3)` and collect `int(part.sum())`.", 'stays = np.array([2, 1, 3, 2, 4, 1, 2])\nprint([int(part.sum()) for part in np.array_split(stays, 3)])', "7 values in 3 parts gives sizes 3, 2 and 2. The first part gets the extra value.", "import numpy as np\nstays = np.array([2, 1, 3, 2, 4, 1, 2])\n"),
   P("`rates = np.array([1800, 2600, 1800, 4800, 2600])`. Print the positions where the rate is 2600, then where 3000 would fit into the sorted unique rates.", "`np.where(rates == 2600)[0]`, then `np.searchsorted(np.unique(rates), 3000)`.", 'rates = np.array([1800, 2600, 1800, 4800, 2600])\nprint(np.where(rates == 2600)[0])\nprint(np.searchsorted(np.unique(rates), 3000))', "`np.unique` also sorts, which is exactly what `searchsorted` needs.", "import numpy as np\nrates = np.array([1800, 2600, 1800, 4800, 2600])\n"),
   P("Simulate 100,000 days of bookings with `np.random.poisson(lam=6, ...)` after `np.random.seed(5)`. Print the average bookings per day (rounded) and the share of days with 10 or more bookings (2 decimals).", "`round(days.mean())` and `round(np.mean(days >= 10), 2)`.", 'np.random.seed(5)\ndays = np.random.poisson(lam=6, size=100000)\nprint(round(days.mean()), round(np.mean(days >= 10), 2))', "With so many days, the simulation lands very close to the theory: about 8% of days get 10 or more bookings."),
   P("`occupancy = np.array([60, 66, 72, 70])` is a hotel's weekly occupancy %. Print the week-to-week change with `np.diff`, then the running total with `np.cumsum`.", "Both are ufunc helpers: `np.diff(occupancy)` and `np.cumsum(occupancy)`.", 'occupancy = np.array([60, 66, 72, 70])\nprint(np.diff(occupancy))\nprint(np.cumsum(occupancy))', "`diff` gives one value fewer than the input, because it compares neighbours.", "import numpy as np\noccupancy = np.array([60, 66, 72, 70])\n"),
   P("Guest IDs from two weeks: `week1 = np.array([101, 102, 103, 105])` and `week2 = np.array([102, 105, 106])`. Print the guests who came in both weeks, the guests who came only in week 1, and everyone.", "`np.intersect1d`, `np.setdiff1d` and `np.union1d`.", 'week1 = np.array([101, 102, 103, 105])\nweek2 = np.array([102, 105, 106])\nprint(np.intersect1d(week1, week2))\nprint(np.setdiff1d(week1, week2))\nprint(np.union1d(week1, week2))', "These work like Python's set operators `&`, `-` and `|`, and they return sorted arrays.", "import numpy as np\nweek1 = np.array([101, 102, 103, 105])\nweek2 = np.array([102, 105, 106])\n")]}
]
ch = {"id": "numpy3", "part": 7, "title": "NumPy extras: iterate, split, search, random and ufuncs", "nav": "NumPy extras", "time": "45 min", "lvl": "Intermediate",
 "keys": "numpy nditer ndenumerate iterate loop split array_split hsplit vsplit search where searchsorted random seed randint choice shuffle permutation distribution normal binomial poisson uniform exponential logistic multinomial chi square rayleigh pareto zipf ufunc frompyfunc add subtract multiply divide power mod around floor ceil trunc log sum cumsum prod cumprod diff lcm gcd sin deg2rad unique union1d intersect1d setdiff1d setxor1d",
 "lead": "The rest of the NumPy toolbox: loop over arrays, cut them into pieces, find values, make random data that behaves like real data, and use NumPy's fast maths functions (ufuncs).",
 "goals": ["Loop over arrays with `for`, `nditer` and `ndenumerate`", "Split arrays with `array_split`, `split`, `vsplit` and `hsplit`", "Find values with `np.where` and `np.searchsorted`", "Make random numbers and simulate data with distributions", "Use ufuncs for arithmetic, rounding, logs, sums, LCM/GCD, trigonometry and sets"],
 "src": ["W3Schools NumPy tutorial topics (array iterating, split, search, random, ufuncs)", "NumPy documentation"],
 "body": body,
 "take": ["Loop over arrays only when you must. `nditer` visits every value, `ndenumerate` also gives its position.", "`array_split` allows unequal parts. `split` needs equal parts or raises ValueError.", "`np.where(cond)` gives positions. `np.searchsorted` finds where a value fits in a sorted array.", "`np.random.seed()` makes random results repeat. Distributions (normal, binomial, poisson, uniform...) simulate realistic data.", "ufuncs work on whole arrays at once: arithmetic, rounding, logs, `cumsum`, `diff`, `lcm`, `sin`, set operations."],
 "quiz": [
   {"q": "What does this print?", "c": NP + "print(len(np.array_split(np.arange(7), 3)[0]))", "o": ["`2`", "`3`", "`7`", "An error"], "a": 1, "chk": 1, "e": "7 items in 3 parts gives sizes 3, 2, 2. The first part gets the extra item."},
   {"q": "What happens with `np.split(np.arange(7), 3)`?", "o": ["Parts of 3, 2, 2", "A ValueError", "Parts of 2, 2, 3", "It drops the last item"], "a": 1, "e": "`np.split` needs equal parts. Use `np.array_split` when they can't be equal."},
   {"q": "What does this print?", "c": NP + "a = np.array([5, 3, 5])\nprint(np.where(a == 5)[0])", "o": ["`[5 5]`", "`[0 2]`", "`[True False True]`", "`2`"], "a": 1, "chk": 1, "e": "With one argument, `np.where` gives the positions where the condition is True."},
   {"q": "What does this print?", "c": NP + "print(np.searchsorted([10, 20, 30], 25))", "o": ["`1`", "`2`", "`3`", "`25`"], "a": 1, "chk": 1, "e": "25 would go between 20 and 30, at position 2."},
   {"q": "Why call `np.random.seed(42)` first?", "o": ["To make the numbers bigger", "So the random numbers are the same every run", "To make them truly random", "It is required before any random function"], "a": 1, "e": "A seed makes results repeatable, which matters when you share or test your analysis."},
   {"q": "Which distribution fits 'number of bookings per day'?", "o": ["Uniform", "Poisson", "Normal", "Pareto"], "a": 1, "e": "Poisson counts events in a fixed time window."},
   {"q": "What does this print?", "c": NP + "print(np.diff([100, 120, 90]))", "o": ["`[ 20 -30]`", "`[100 120 90]`", "`[220 210]`", "`[-20 30]`"], "a": 0, "chk": 1, "e": "`diff` gives each value minus the one before it: 120-100 and 90-120."},
   {"q": "What does this print?", "c": NP + "print(np.floor(-1.5), np.trunc(-1.5))", "o": ["`-2.0 -1.0`", "`-1.0 -1.0`", "`-2.0 -2.0`", "`-1.0 -2.0`"], "a": 0, "chk": 1, "e": "`floor` goes down (to -2). `trunc` cuts the decimals off, towards 0 (to -1)."},
   {"q": "What is the difference between `np.random.permutation(a)` and `np.random.shuffle(a)`?", "o": ["There is none", "`permutation` returns a new shuffled copy; `shuffle` changes `a` itself", "`shuffle` returns a new copy; `permutation` changes `a`", "`permutation` only works on lists"], "a": 1, "e": "`permutation` leaves `a` alone and gives back a shuffled copy. `shuffle` shuffles `a` in place and returns `None`."}],
 "cards": [["`array_split` vs `split`", "`array_split` allows unequal parts. `split` needs equal parts, or it raises ValueError."], ["`vsplit` vs `hsplit`", "`vsplit` cuts a table into groups of rows. `hsplit` cuts it into groups of columns."], ["`np.where(cond)` with one argument", "Gives the positions where the condition is True."], ["What does `np.searchsorted(a, x)` do?", "Finds the position where x would go in the sorted array a."], ["Why use `np.random.seed()`?", "To make random results the same every run."], ["Normal vs Poisson vs Binomial", "Normal: bell curve (scores, times). Poisson: counts per time window (bookings per day). Binomial: successes out of n tries."], ["What is a ufunc?", "A NumPy function that works on every value of an array at once, like `np.add` or `np.sqrt`."], ["`np.floor` vs `np.ceil` vs `np.trunc`", "floor goes down, ceil goes up, trunc cuts the decimals off (towards 0)."], ["What does `np.around([0.5, 1.5, 2.5])` give?", "`[0. 2. 2.]`: a .5 goes to the nearest even number, like Python's `round()`."], ["`permutation` vs `shuffle`", "`np.random.permutation(a)` returns a new shuffled copy. `np.random.shuffle(a)` shuffles `a` itself and returns None."], ["`np.cumsum` vs `np.diff`", "`cumsum` gives running totals (same length). `diff` gives the change between neighbours (one value shorter)."], ["`intersect1d` vs `setdiff1d` vs `union1d`", "In both / only in the first / in either. All three return sorted unique values."]],
 "cheat": [["for x in np.nditer(m):", "Every value of any array"], ["for pos, x in np.ndenumerate(m):", "Position and value"], ["np.array_split(a, 3)", "Split into 3 parts (can be unequal)"], ["np.vsplit(m, 2)  np.hsplit(m, 3)", "Split rows / columns"], ["np.where(a == x)[0]", "Positions of x"], ["np.searchsorted(a, x)", "Where x fits in a sorted array"], ["np.searchsorted(edges, a, side=\"right\")", "Band number for every value"], ["np.random.seed(42)", "Repeatable random numbers"], ["np.random.choice(items, p=[...], size=n)", "Random picks with chances"], ["np.random.normal(60, 10, 1000)", "1000 values from a bell curve"], ["np.random.poisson(6, 1000)", "1000 daily counts, average 6"], ["np.cumsum(a)  np.diff(a)", "Running total / changes"], ["np.around  np.floor  np.ceil  np.trunc", "Rounding rules"], ["np.union1d  np.intersect1d  np.setdiff1d", "Set operations on arrays"], ["np.frompyfunc(f, 1, 1)", "Turn a function into a ufunc"]]
}
def js(v, ind=0):
    # write code strings with R`` so they read like the other chapter files
    if isinstance(v, Raw): return str(v)
    if isinstance(v, dict):
        return '{ ' + ', '.join(k + ': ' + js(x, ind) for k, x in v.items()) + ' }'
    if isinstance(v, list):
        return '[\n' + ',\n'.join('  ' * (ind + 1) + js(x, ind + 1) for x in v) + '\n' + '  ' * ind + ']'
    if isinstance(v, str) and ('\n' in v or v.startswith('import numpy')) and '`' not in v and '${' not in v:
        return 'R`\n' + v + '`'
    return json.dumps(v, ensure_ascii=False)
open('../hub2/ch/21b_numpy3.js', 'w', encoding='utf-8').write('/* Chapter: NumPy extras (generated; every output came from running the code) */\nchapter(' + js(ch) + ');\n')
print('blocks', len(body), 'code', sum(1 for b in body if b['t'] == 'code'))
