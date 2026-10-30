/* Chapter: NumPy extras (generated; every output came from running the code) */
chapter({ id: "numpy3", part: 7, title: "NumPy extras: iterate, split, search, random and ufuncs", nav: "NumPy extras", time: "45 min", lvl: "Intermediate", keys: "numpy nditer ndenumerate iterate loop split array_split hsplit vsplit search where searchsorted random seed randint choice shuffle permutation distribution normal binomial poisson uniform exponential logistic multinomial chi square rayleigh pareto zipf ufunc frompyfunc add subtract multiply divide power mod around floor ceil trunc log sum cumsum prod cumprod diff lcm gcd sin deg2rad unique union1d intersect1d setdiff1d setxor1d", lead: "The rest of the NumPy toolbox: loop over arrays, cut them into pieces, find values, make random data that behaves like real data, and use NumPy's fast maths functions (ufuncs).", goals: [
  "Loop over arrays with `for`, `nditer` and `ndenumerate`",
  "Split arrays with `array_split`, `split`, `vsplit` and `hsplit`",
  "Find values with `np.where` and `np.searchsorted`",
  "Make random numbers and simulate data with distributions",
  "Use ufuncs for arithmetic, rounding, logs, sums, LCM/GCD, trigonometry and sets"
], src: [
  "W3Schools NumPy tutorial topics (array iterating, split, search, random, ufuncs)",
  "NumPy documentation"
], body: [
  { t: "h", text: "Looping over arrays" },
  { t: "p", b: "You rarely need loops in NumPy, because maths on the whole array is faster. When you do, a `for` loop over a 2D array gives you one **row** at a time." },
  { t: "code", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
for row in m:
    print(row)`, o: R`
[1 2]
[3 4]` },
  { t: "code", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
for x in np.nditer(m):
    print(x, end=" ")`, o: "1 2 3 4 ", ttl: "nditer: every single value, whatever the shape" },
  { t: "code", c: R`
import numpy as np
m = np.array([[10, 20], [30, 40]])
for pos, x in np.ndenumerate(m):
    print(pos, x)`, o: R`
(0, 0) 10
(0, 1) 20
(1, 0) 30
(1, 1) 40`, ttl: "ndenumerate: the position and the value together" },
  { t: "note", k: "tip", b: "Before you write a loop, ask: can NumPy do this on the whole array at once? Usually it can, and it is much faster." },
  { t: "h", text: "Splitting arrays" },
  { t: "p", b: "Splitting is the opposite of joining with `concatenate`. `np.array_split(a, n)` cuts an array into `n` parts. If the parts cannot be equal, the first ones get one extra item." },
  { t: "code", c: R`
import numpy as np
a = np.arange(1, 8)
for part in np.array_split(a, 3):
    print(part)`, o: R`
[1 2 3]
[4 5]
[6 7]` },
  { t: "anim", title: "How array_split shares out 7 values", frames: [
    { html: V.strip(["1", "2", "3", "4", "5", "6", "7"], {"w": 52, "label": "a"}) + "<div class=\"bigcode\">np.array_split(a, 3)</div>", c: "7 values into 3 parts. 7 ÷ 3 = 2, with 1 left over." },
    { html: V.strip(["1", "2", "3", "4", "5", "6", "7"], {"w": 52, "hl2": [0, 1, 2], "dim": [3, 4, 5, 6], "bracket": [0, 3, "part 1"]}), c: "Every part gets 2 values. The 1 left over goes to the **first** part, so part 1 gets 3 values: `[1 2 3]`." },
    { html: V.strip(["1", "2", "3", "4", "5", "6", "7"], {"w": 52, "hl": [3, 4], "hl2": [0, 1, 2], "dim": [5, 6], "bracket": [3, 5, "part 2"]}), c: "Part 2 gets the next 2: `[4 5]`." },
    { html: V.strip(["1", "2", "3", "4", "5", "6", "7"], {"w": 52, "hl": [5, 6], "hl2": [0, 1, 2, 3, 4], "bracket": [5, 7, "part 3"]}) + "<div class=\"res\">[array([1, 2, 3]), array([4, 5]), array([6, 7])]</div>", c: "Part 3 gets the last 2: `[6 7]`. The sizes are 3, 2 and 2. `np.split(a, 3)` would stop with a ValueError instead." }
  ] },
  { t: "code", c: R`
import numpy as np
a = np.arange(6)
print(np.split(a, 3))`, o: "[array([0, 1]), array([2, 3]), array([4, 5])]", ttl: "np.split works too, but only when the parts are equal" },
  { t: "code", c: R`
import numpy as np
np.split(np.arange(7), 3)`, o: "ValueError: array split does not result in an equal division", ttl: "7 items cannot make 3 equal parts", err: true },
  { t: "code", c: R`
import numpy as np
m = np.arange(1, 7).reshape(2, 3)
top, bottom = np.vsplit(m, 2)
print(top, bottom)
left, mid, right = np.hsplit(m, 3)
print(left.ravel(), right.ravel())`, o: R`
[[1 2 3]] [[4 5 6]]
[1 4] [3 6]`, ttl: "Split a table into rows (vsplit) or columns (hsplit)" },
  { t: "pred", chk: 1, c: R`
import numpy as np
print([len(p) for p in np.array_split(np.arange(10), 4)])`, o: [
    "`[3, 3, 2, 2]`",
    "`[2, 2, 3, 3]`",
    "`[3, 3, 3, 1]`",
    "A ValueError"
  ], a: 0, e: "10 ÷ 4 = 2 with 2 left over. The first two parts get one extra each: 3, 3, 2, 2." },
  { t: "table", head: [
    "Function",
    "Cuts",
    "Parts must be equal?"
  ], rows: [
    [
      "`np.array_split(a, n)`",
      "Into n parts",
      "[[ok:No]]: the first parts get the extras"
    ],
    [
      "`np.split(a, n)`",
      "Into n parts",
      "[[no:Yes]]: ValueError otherwise"
    ],
    [
      "`np.vsplit(m, n)`",
      "A table into groups of rows",
      "Yes"
    ],
    [
      "`np.hsplit(m, n)`",
      "A table into groups of columns",
      "Yes"
    ]
  ] },
  { t: "h", text: "Searching arrays" },
  { t: "p", b: "`np.where(condition)` gives the **positions** where the condition is True. `np.searchsorted(a, x)` tells you where `x` would go in a **sorted** array to keep it sorted." },
  { t: "code", c: R`
import numpy as np
a = np.array([4, 7, 4, 9, 4])
print(np.where(a == 4))
print(np.where(a == 4)[0])`, o: R`
(array([0, 2, 4]),)
[0 2 4]` },
  { t: "code", c: R`
import numpy as np
prices = np.array([100, 250, 400, 900])
print(np.searchsorted(prices, 300))
print(np.searchsorted(prices, [50, 400, 1000]))
print(np.searchsorted(prices, 400, side="right"))   # after an equal value`, o: R`
2
[0 2 4]
3`, ttl: "searchsorted: where would this value fit?" },
  { t: "anim", title: "searchsorted: where does 300 fit?", frames: [
    { html: V.strip(["100", "250", "400", "900"], {"w": 64, "label": "prices"}) + "<div class=\"bigcode\">np.searchsorted(prices, 300)</div>", c: "`prices` is sorted. Where could 300 go so that it stays sorted?" },
    { html: V.strip(["100", "250", "400", "900"], {"w": 64, "hl2": [0, 1], "dim": [2, 3]}), c: "100 and 250 are smaller than 300, so 300 must come after them." },
    { html: V.strip(["100", "250", "400", "900"], {"w": 64, "hl2": [0, 1], "hl": [2]}) + "<div class=\"res\">2</div>", c: "400 is the first value bigger than 300, so 300 goes **at position 2**, just before 400." },
    { html: V.strip(["100", "250", "300", "400", "900"], {"w": 64, "hl": [2]}), c: "Put there, the array stays sorted. Analysts use this to put values into bands, like price ranges. If the value is already in the array, `side=\"right\"` places it after the equal value instead of before it." }
  ] },
  { t: "note", k: "trap", b: "`np.where(cond)` with **one** argument gives positions. `np.where(cond, x, y)` with **three** arguments picks values, as you saw in the last chapter. Same name, two different jobs." },
  { t: "h", text: "Random numbers" },
  { t: "p", b: "`np.random` makes random data for testing code, simulations and sampling. `np.random.seed(n)` makes the \"random\" numbers repeat exactly, so your results are the same every run." },
  { t: "code", c: R`
import numpy as np
np.random.seed(42)
rolls = np.random.randint(1, 7, size=1000)    # 1000 dice rolls; 7 is not included
print(rolls.min(), rolls.max(), len(rolls))`, o: "1 6 1000", ttl: "randint: random whole numbers" },
  { t: "code", c: R`
import numpy as np
np.random.seed(1)
days = np.random.choice(["busy", "quiet"], p=[0.7, 0.3], size=10000)
print(round(np.mean(days == "busy"), 1))`, o: "0.7", ttl: "choice: pick from a list, with chances you set" },
  { t: "code", c: R`
import numpy as np
a = np.array([1, 2, 3, 4, 5])
p = np.random.permutation(a)     # a new shuffled copy; a is unchanged
print(np.array_equal(np.sort(p), a), a)
np.random.shuffle(a)             # shuffles a itself
print(np.sort(a))`, o: R`
True [1 2 3 4 5]
[1 2 3 4 5]`, ttl: "permutation vs shuffle" },
  { t: "note", k: "tip", b: "Newer code often uses a generator object: `rng = np.random.default_rng(42)`, then `rng.integers(1, 7, 10)` or `rng.normal(0, 1, 5)`. It does the same jobs and is the modern recommendation." },
  { t: "h", text: "Random data distributions" },
  { t: "p", b: "A ==distribution== describes which values are likely and which are rare. Analysts use them to simulate data and to recognise patterns in real data. Each example below makes 100,000 values, so the averages come out very close to the theory." },
  { t: "table", head: [
    "Distribution",
    "Function",
    "Gives you",
    "Real example"
  ], rows: [
    [
      "Normal",
      "`np.random.normal(loc, scale, size)`",
      "A bell curve around `loc`",
      "Test scores, delivery times, heights"
    ],
    [
      "Binomial",
      "`np.random.binomial(n, p, size)`",
      "Successes out of `n` tries",
      "How many of 10 guests order breakfast"
    ],
    [
      "Poisson",
      "`np.random.poisson(lam, size)`",
      "Count of events in a time window",
      "Bookings per day, calls per hour"
    ],
    [
      "Uniform",
      "`np.random.uniform(low, high, size)`",
      "Every value in the range equally likely",
      "Random test prices"
    ],
    [
      "Exponential",
      "`np.random.exponential(scale, size)`",
      "Time until the next event",
      "Minutes between two bookings"
    ],
    [
      "Logistic",
      "`np.random.logistic(loc, scale, size)`",
      "Like normal, with more extreme values",
      "Growth models, machine learning"
    ],
    [
      "Multinomial",
      "`np.random.multinomial(n, pvals)`",
      "Counts across several outcomes",
      "100 dice rolls: how many 1s, 2s, ... 6s"
    ],
    [
      "Chi-square",
      "`np.random.chisquare(df, size)`",
      "Used in statistical tests",
      "Is this difference real or chance?"
    ],
    [
      "Rayleigh",
      "`np.random.rayleigh(scale, size)`",
      "Sizes of random 2D movements",
      "Wind speeds, signal strength"
    ],
    [
      "Pareto",
      "`np.random.pareto(a, size)`",
      "The 80/20 rule: a few huge values",
      "A few customers bring most revenue"
    ],
    [
      "Zipf",
      "`np.random.zipf(a, size)`",
      "A few very common items, many rare ones",
      "Word counts, city sizes"
    ]
  ] },
  { t: "deck", title: "Which distribution fits my data?", s: [
    { big: "A distribution is the shape your data makes when you count it.", b: "Count how many values fall into each range and draw the counts as bars: a **histogram**. Its shape tells you which distribution fits. Every chart here is 100,000 simulated values." },
    { h: "Normal: the bell curve", b: "Most values sit near the average and fewer sit far away, on both sides. Test scores, delivery times, heights.", svg: V.hist([16, 114, 484, 1636, 4410, 9174, 15022, 19255, 19209, 15001, 9119, 4374, 1619, 451, 86, 24], {"ticks": [[0, "20"], [4, "40"], [6, "50"], [8, "60"], [10, "70"], [12, "80"], [16, "100"]], "hl": [6, 7, 8, 9], "label": "Histogram of 100,000 normal values around 60"}) },
    { h: "Binomial: successes out of n tries", b: "10 guests, and each one orders breakfast with a chance of 0.4. On most days about **4** of them do. It can never go above 10.", svg: V.hist([559, 3960, 12068, 21671, 24873, 20044, 11222, 4358, 1069, 160, 16], {"labels": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], "hl": [4], "bw": 28, "label": "Histogram of binomial values from 0 to 10, peak at 4"}) },
    { h: "Poisson: events in a time window", b: "Bookings per day, 6 on average. Never negative, with a long tail to the right (the highlighted busy days).", svg: V.hist([260, 1435, 4364, 8870, 13294, 15859, 16219, 13828, 10591, 7003, 4073, 2262, 1088, 496, 209, 100, 49], {"labels": ["0", "", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16+"], "hl": [10, 11, 12, 13, 14, 15, 16], "label": "Histogram of daily bookings, peak near 6, long right tail"}) },
    { h: "Uniform: every value equally likely", b: "A random price between 100 and 200. Flat: no value is more likely than another.", svg: V.hist([10064, 9869, 10048, 10020, 10140, 9789, 10010, 10024, 10154, 9882], {"ticks": [[0, "100"], [5, "150"], [10, "200"]], "bw": 30, "label": "Flat histogram of uniform values from 100 to 200"}) },
    { h: "Exponential: waiting time until the next event", b: "Minutes between two bookings, 10 on average. Short waits are common and long waits are rare.", svg: V.hist([39430, 23789, 14315, 8725, 5406, 3288, 1983, 1214, 711, 446, 276, 186], {"ticks": [[0, "0"], [2, "10"], [4, "20"], [6, "30"], [8, "40"], [12, "60 min"]], "bw": 26, "label": "Histogram of waiting times, tallest at 0 and falling away"}) },
    { h: "How to choose", items: [
      "Measuring something, like a time or a score? Try **normal**.",
      "Counting successes out of a fixed number of tries? **Binomial**.",
      "Counting events in a time window? **Poisson**.",
      "Measuring the wait between events? **Exponential**.",
      "No value more likely than another? **Uniform**."
    ] }
  ] },
  { t: "code", c: R`
import numpy as np
np.random.seed(7)
scores = np.random.normal(loc=60, scale=10, size=100000)
print(round(scores.mean()), round(scores.std()))
print(round(np.mean((scores > 50) & (scores < 70)), 2))   # share within 1 std of the mean`, o: R`
60 10
0.68`, ttl: "Normal: about 68% of values sit within 1 standard deviation" },
  { t: "fig", svg: V.hist([16, 114, 484, 1636, 4410, 9174, 15022, 19255, 19209, 15001, 9119, 4374, 1619, 451, 86, 24], {"ticks": [[0, "20"], [4, "40"], [6, "50"], [8, "60"], [10, "70"], [12, "80"], [16, "100"]], "hl": [6, 7, 8, 9], "label": "Histogram of 100,000 normal values around 60"}), cap: "The 100,000 scores as a histogram. The highlighted bars, from 50 to 70 (one standard deviation either side of 60), hold about 68% of all values." },
  { t: "code", c: R`
import numpy as np
np.random.seed(3)
breakfast = np.random.binomial(n=10, p=0.4, size=100000)   # guests out of 10 who order breakfast
print(round(breakfast.mean()), breakfast.min() >= 0, breakfast.max() <= 10)`, o: "4 True True", ttl: "Binomial: the average is n × p = 4" },
  { t: "code", c: R`
import numpy as np
np.random.seed(5)
bookings = np.random.poisson(lam=6, size=100000)   # bookings per day, 6 on average
print(round(bookings.mean()), round(np.mean(bookings >= 10), 2))`, o: "6 0.08", ttl: "Poisson: 6 a day on average, 10 or more on about 8% of days" },
  { t: "code", c: R`
import numpy as np
np.random.seed(9)
u = np.random.uniform(100, 200, size=100000)
print(u.min() >= 100, u.max() < 200, round(u.mean()))`, o: "True True 150", ttl: "Uniform: every value equally likely, so the average is the middle" },
  { t: "code", c: R`
import numpy as np
np.random.seed(2)
counts = np.random.multinomial(600, [1/6] * 6)   # 600 dice rolls
print(counts.sum(), len(counts), all(counts > 60))`, o: "600 6 True", ttl: "Multinomial: counts for each face add up to the total rolls" },
  { t: "h", text: "ufuncs: NumPy's fast maths functions" },
  { t: "p", b: "A ==ufunc== (universal function) works on every value of an array at once, in fast compiled code. You have already used some: `a + b` is really `np.add(a, b)`." },
  { t: "code", c: R`
import numpy as np
a = np.array([10, 20, 30])
b = np.array([3, 4, 5])
print(np.add(a, b), np.subtract(a, b), np.multiply(a, b))
print(np.divide(a, b).round(2), np.power(b, 2), np.mod(a, b))`, o: R`
[13 24 35] [ 7 16 25] [ 30  80 150]
[3.33 5.   6.  ] [ 9 16 25] [1 0 0]`, ttl: "Simple arithmetic" },
  { t: "code", c: R`
import numpy as np
a = np.array([-2.5, -1.7, 1.2, 2.5, 3.5])
print("around:", np.around(a))
print("floor: ", np.floor(a))
print("ceil:  ", np.ceil(a))
print("trunc: ", np.trunc(a))`, o: R`
around: [-2. -2.  1.  2.  4.]
floor:  [-3. -2.  1.  2.  3.]
ceil:   [-2. -1.  2.  3.  4.]
trunc:  [-2. -1.  1.  2.  3.]`, ttl: "Rounding: four different rules" },
  { t: "pred", chk: 1, c: R`
import numpy as np
print(np.around([0.5, 1.5, 2.5]))`, o: [
    "`[1. 2. 3.]`",
    "`[0. 2. 2.]`",
    "`[0. 1. 2.]`",
    "`[1. 2. 2.]`"
  ], a: 1, e: "A .5 goes to the nearest **even** number, exactly like Python's `round()`. Always rounding .5 up would push totals higher over many values." },
  { t: "table", head: [
    "Function",
    "Rule",
    "-1.7 becomes",
    "2.5 becomes"
  ], rows: [
    [
      "`np.around`",
      "Nearest (a .5 goes to the even number)",
      "-2",
      "2"
    ],
    [
      "`np.floor`",
      "Down, towards minus infinity",
      "-2",
      "2"
    ],
    [
      "`np.ceil`",
      "Up, towards plus infinity",
      "-1",
      "3"
    ],
    [
      "`np.trunc`",
      "Cut the decimals off, towards 0",
      "-1",
      "2"
    ]
  ] },
  { t: "code", c: R`
import numpy as np
print(np.log10([10, 100, 1000]), np.log2([2, 8]), np.log(np.e).round(2))`, o: "[1. 2. 3.] [1. 3.] 1.0", ttl: "Logs" },
  { t: "code", c: R`
import numpy as np
sales = np.array([120, 80, 150])
print(np.sum(sales), np.cumsum(sales))
print(np.prod([2, 3, 4]), np.cumprod([2, 3, 4]))
print(np.diff([100, 120, 90, 130]))`, o: R`
350 [120 200 350]
24 [ 2  6 24]
[ 20 -30  40]`, ttl: "Sums, products and differences" },
  { t: "code", c: R`
import numpy as np
print(np.lcm(4, 6), np.gcd(12, 18))
print(np.lcm.reduce([3, 4, 6]), np.gcd.reduce([20, 30, 50]))`, o: R`
12 6
12 10`, ttl: "LCM and GCD, for two numbers or a whole array" },
  { t: "code", c: R`
import numpy as np
angles = np.array([0, 90, 180])
print(np.sin(np.deg2rad(angles)).round(2))`, o: "[0. 1. 0.]", ttl: "Trigonometry works in radians, so convert degrees first" },
  { t: "code", c: R`
import numpy as np
a = np.array([1, 2, 3, 4])
b = np.array([3, 4, 5])
print(np.unique([3, 1, 3, 2]), np.union1d(a, b))
print(np.intersect1d(a, b), np.setdiff1d(a, b), np.setxor1d(a, b))`, o: R`
[1 2 3] [1 2 3 4 5]
[3 4] [1 2] [1 2 5]`, ttl: "Set operations on arrays" },
  { t: "code", c: R`
import numpy as np
def gst(price):
    return round(price * 1.18, 2)

gst_u = np.frompyfunc(gst, 1, 1)   # 1 input, 1 output
print(gst_u(np.array([100, 250])))`, o: "[118.0 295.0]", ttl: "Make your own ufunc from a normal function" },
  { t: "table", head: [
    "Family",
    "Functions",
    "Same as"
  ], rows: [
    [
      "Arithmetic",
      "`np.add`, `np.subtract`, `np.multiply`, `np.divide`, `np.power`, `np.mod`",
      "`+ - * / ** %`"
    ],
    [
      "Rounding",
      "`np.around`, `np.floor`, `np.ceil`, `np.trunc`",
      "`round()`, `math.floor()` …"
    ],
    [
      "Logs",
      "`np.log`, `np.log2`, `np.log10`",
      "`math.log()`"
    ],
    [
      "Sums and products",
      "`np.sum`, `np.cumsum`, `np.prod`, `np.cumprod`, `np.diff`",
      "`sum()` and loops"
    ],
    [
      "LCM and GCD",
      "`np.lcm`, `np.gcd`, `.reduce()`",
      "`math.lcm()`, `math.gcd()`"
    ],
    [
      "Trigonometry",
      "`np.sin`, `np.cos`, `np.deg2rad`, `np.rad2deg`",
      "`math.sin()` …"
    ],
    [
      "Sets",
      "`np.unique`, `np.union1d`, `np.intersect1d`, `np.setdiff1d`, `np.setxor1d`",
      "Python sets `| & - ^`"
    ]
  ] },
  { t: "h", text: "Practice" },
  { t: "prac", items: [
    { q: "`stays = np.array([2, 1, 3, 2, 4, 1, 2])` holds a week of guest stays. Split it into 3 parts with `array_split` and print the total nights in each part as a list: `[6, 6, 3]`.", hint: "Loop over `np.array_split(stays, 3)` and collect `int(part.sum())`.", sol: R`
import numpy as np
stays = np.array([2, 1, 3, 2, 4, 1, 2])
print([int(part.sum()) for part in np.array_split(stays, 3)])`, out: "[6, 6, 3]", why: "7 values in 3 parts gives sizes 3, 2 and 2. The first part gets the extra value.", starter: R`
import numpy as np
stays = np.array([2, 1, 3, 2, 4, 1, 2])
` },
    { q: "`rates = np.array([1800, 2600, 1800, 4800, 2600])`. Print the positions where the rate is 2600, then where 3000 would fit into the sorted unique rates.", hint: "`np.where(rates == 2600)[0]`, then `np.searchsorted(np.unique(rates), 3000)`.", sol: R`
import numpy as np
rates = np.array([1800, 2600, 1800, 4800, 2600])
print(np.where(rates == 2600)[0])
print(np.searchsorted(np.unique(rates), 3000))`, out: R`
[1 4]
2`, why: "`np.unique` also sorts, which is exactly what `searchsorted` needs.", starter: R`
import numpy as np
rates = np.array([1800, 2600, 1800, 4800, 2600])
` },
    { q: "Simulate 100,000 days of bookings with `np.random.poisson(lam=6, ...)` after `np.random.seed(5)`. Print the average bookings per day (rounded) and the share of days with 10 or more bookings (2 decimals).", hint: "`round(days.mean())` and `round(np.mean(days >= 10), 2)`.", sol: R`
import numpy as np
np.random.seed(5)
days = np.random.poisson(lam=6, size=100000)
print(round(days.mean()), round(np.mean(days >= 10), 2))`, out: "6 0.08", why: "With so many days, the simulation lands very close to the theory: about 8% of days get 10 or more bookings." },
    { q: "`occupancy = np.array([60, 66, 72, 70])` is a hotel's weekly occupancy %. Print the week-to-week change with `np.diff`, then the running total with `np.cumsum`.", hint: "Both are ufunc helpers: `np.diff(occupancy)` and `np.cumsum(occupancy)`.", sol: R`
import numpy as np
occupancy = np.array([60, 66, 72, 70])
print(np.diff(occupancy))
print(np.cumsum(occupancy))`, out: R`
[ 6  6 -2]
[ 60 126 198 268]`, why: "`diff` gives one value fewer than the input, because it compares neighbours.", starter: R`
import numpy as np
occupancy = np.array([60, 66, 72, 70])
` },
    { q: "Guest IDs from two weeks: `week1 = np.array([101, 102, 103, 105])` and `week2 = np.array([102, 105, 106])`. Print the guests who came in both weeks, the guests who came only in week 1, and everyone.", hint: "`np.intersect1d`, `np.setdiff1d` and `np.union1d`.", sol: R`
import numpy as np
week1 = np.array([101, 102, 103, 105])
week2 = np.array([102, 105, 106])
print(np.intersect1d(week1, week2))
print(np.setdiff1d(week1, week2))
print(np.union1d(week1, week2))`, out: R`
[102 105]
[101 103]
[101 102 103 105 106]`, why: "These work like Python's set operators `&`, `-` and `|`, and they return sorted arrays.", starter: R`
import numpy as np
week1 = np.array([101, 102, 103, 105])
week2 = np.array([102, 105, 106])
` }
  ] }
], take: [
  "Loop over arrays only when you must. `nditer` visits every value, `ndenumerate` also gives its position.",
  "`array_split` allows unequal parts. `split` needs equal parts or raises ValueError.",
  "`np.where(cond)` gives positions. `np.searchsorted` finds where a value fits in a sorted array.",
  "`np.random.seed()` makes random results repeat. Distributions (normal, binomial, poisson, uniform...) simulate realistic data.",
  "ufuncs work on whole arrays at once: arithmetic, rounding, logs, `cumsum`, `diff`, `lcm`, `sin`, set operations."
], quiz: [
  { q: "What does this print?", c: R`
import numpy as np
print(len(np.array_split(np.arange(7), 3)[0]))`, o: [
    "`2`",
    "`3`",
    "`7`",
    "An error"
  ], a: 1, chk: 1, e: "7 items in 3 parts gives sizes 3, 2, 2. The first part gets the extra item." },
  { q: "What happens with `np.split(np.arange(7), 3)`?", o: [
    "Parts of 3, 2, 2",
    "A ValueError",
    "Parts of 2, 2, 3",
    "It drops the last item"
  ], a: 1, e: "`np.split` needs equal parts. Use `np.array_split` when they can't be equal." },
  { q: "What does this print?", c: R`
import numpy as np
a = np.array([5, 3, 5])
print(np.where(a == 5)[0])`, o: [
    "`[5 5]`",
    "`[0 2]`",
    "`[True False True]`",
    "`2`"
  ], a: 1, chk: 1, e: "With one argument, `np.where` gives the positions where the condition is True." },
  { q: "What does this print?", c: R`
import numpy as np
print(np.searchsorted([10, 20, 30], 25))`, o: [
    "`1`",
    "`2`",
    "`3`",
    "`25`"
  ], a: 1, chk: 1, e: "25 would go between 20 and 30, at position 2." },
  { q: "Why call `np.random.seed(42)` first?", o: [
    "To make the numbers bigger",
    "So the random numbers are the same every run",
    "To make them truly random",
    "It is required before any random function"
  ], a: 1, e: "A seed makes results repeatable, which matters when you share or test your analysis." },
  { q: "Which distribution fits 'number of bookings per day'?", o: [
    "Uniform",
    "Poisson",
    "Normal",
    "Pareto"
  ], a: 1, e: "Poisson counts events in a fixed time window." },
  { q: "What does this print?", c: R`
import numpy as np
print(np.diff([100, 120, 90]))`, o: [
    "`[ 20 -30]`",
    "`[100 120 90]`",
    "`[220 210]`",
    "`[-20 30]`"
  ], a: 0, chk: 1, e: "`diff` gives each value minus the one before it: 120-100 and 90-120." },
  { q: "What does this print?", c: R`
import numpy as np
print(np.floor(-1.5), np.trunc(-1.5))`, o: [
    "`-2.0 -1.0`",
    "`-1.0 -1.0`",
    "`-2.0 -2.0`",
    "`-1.0 -2.0`"
  ], a: 0, chk: 1, e: "`floor` goes down (to -2). `trunc` cuts the decimals off, towards 0 (to -1)." },
  { q: "What is the difference between `np.random.permutation(a)` and `np.random.shuffle(a)`?", o: [
    "There is none",
    "`permutation` returns a new shuffled copy; `shuffle` changes `a` itself",
    "`shuffle` returns a new copy; `permutation` changes `a`",
    "`permutation` only works on lists"
  ], a: 1, e: "`permutation` leaves `a` alone and gives back a shuffled copy. `shuffle` shuffles `a` in place and returns `None`." }
], cards: [
  [
    "`array_split` vs `split`",
    "`array_split` allows unequal parts. `split` needs equal parts, or it raises ValueError."
  ],
  [
    "`vsplit` vs `hsplit`",
    "`vsplit` cuts a table into groups of rows. `hsplit` cuts it into groups of columns."
  ],
  [
    "`np.where(cond)` with one argument",
    "Gives the positions where the condition is True."
  ],
  [
    "What does `np.searchsorted(a, x)` do?",
    "Finds the position where x would go in the sorted array a."
  ],
  [
    "Why use `np.random.seed()`?",
    "To make random results the same every run."
  ],
  [
    "Normal vs Poisson vs Binomial",
    "Normal: bell curve (scores, times). Poisson: counts per time window (bookings per day). Binomial: successes out of n tries."
  ],
  [
    "What is a ufunc?",
    "A NumPy function that works on every value of an array at once, like `np.add` or `np.sqrt`."
  ],
  [
    "`np.floor` vs `np.ceil` vs `np.trunc`",
    "floor goes down, ceil goes up, trunc cuts the decimals off (towards 0)."
  ],
  [
    "What does `np.around([0.5, 1.5, 2.5])` give?",
    "`[0. 2. 2.]`: a .5 goes to the nearest even number, like Python's `round()`."
  ],
  [
    "`permutation` vs `shuffle`",
    "`np.random.permutation(a)` returns a new shuffled copy. `np.random.shuffle(a)` shuffles `a` itself and returns None."
  ],
  [
    "`np.cumsum` vs `np.diff`",
    "`cumsum` gives running totals (same length). `diff` gives the change between neighbours (one value shorter)."
  ],
  [
    "`intersect1d` vs `setdiff1d` vs `union1d`",
    "In both / only in the first / in either. All three return sorted unique values."
  ]
], cheat: [
  [
    "for x in np.nditer(m):",
    "Every value of any array"
  ],
  [
    "for pos, x in np.ndenumerate(m):",
    "Position and value"
  ],
  [
    "np.array_split(a, 3)",
    "Split into 3 parts (can be unequal)"
  ],
  [
    "np.vsplit(m, 2)  np.hsplit(m, 3)",
    "Split rows / columns"
  ],
  [
    "np.where(a == x)[0]",
    "Positions of x"
  ],
  [
    "np.searchsorted(a, x)",
    "Where x fits in a sorted array"
  ],
  [
    "np.searchsorted(edges, a, side=\"right\")",
    "Band number for every value"
  ],
  [
    "np.random.seed(42)",
    "Repeatable random numbers"
  ],
  [
    "np.random.choice(items, p=[...], size=n)",
    "Random picks with chances"
  ],
  [
    "np.random.normal(60, 10, 1000)",
    "1000 values from a bell curve"
  ],
  [
    "np.random.poisson(6, 1000)",
    "1000 daily counts, average 6"
  ],
  [
    "np.cumsum(a)  np.diff(a)",
    "Running total / changes"
  ],
  [
    "np.around  np.floor  np.ceil  np.trunc",
    "Rounding rules"
  ],
  [
    "np.union1d  np.intersect1d  np.setdiff1d",
    "Set operations on arrays"
  ],
  [
    "np.frompyfunc(f, 1, 1)",
    "Turn a function into a ufunc"
  ]
] });
