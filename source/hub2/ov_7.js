/* ---------- Part 7 overview: NumPy ---------- */
overview({
  part: 7, title: "Part 7 overview: NumPy", nav: "Part 7 overview", time: "30 min",
  keys: "numpy np array ndarray shape ndim size dtype zeros ones full arange linspace reshape flatten concatenate vstack hstack vectorisation broadcasting axis mask boolean view copy where argmax mean sum nditer split array_split searchsorted random seed choice distribution normal binomial poisson uniform exponential ufunc cumsum diff floor ceil trunc around unique intersect1d setdiff1d union1d",
  lead: "All three NumPy chapters on one page: making arrays, describing them, doing maths on them, splitting and searching them, simulating data, and the classic mix-ups (`axis`, views and copies, `and` vs `&`).",
  five: [
    "NumPy's ==array== is like a list built for maths: one data type, a fixed size, and maths on every value at once. Start with `import numpy as np`.",
    "Describe any array with `shape` (rows, columns), `ndim`, `size` and `dtype`. Simulate realistic data with `np.random`, and set a seed to repeat the results.",
    "Make arrays with `np.array`, `zeros`, `ones`, `full`, `arange` (stop excluded) and `linspace` (stop included). Change the layout with `reshape` and cut arrays up with `array_split`.",
    "`axis=0` works **down** the rows and gives one result per column. `axis=1` works **across** and gives one result per row.",
    "Filter with boolean masks: `a[a > 50]`, combined with `&`, `|` and `~`, each condition in brackets. Slices are **views**, so use `.copy()` for a separate array."
  ],
  body: [
    { t: "h", text: "Mind map of Part 7" },
    { t: "mm", title: "Part 7 at a glance", root: "Part 7: NumPy", hint: "Tap a branch to open that chapter", kids: [
      { t: "20. Arrays", go: "numpy1", k: ["np.array([...])", "shape, ndim, size, dtype", "zeros, ones, full, eye", "arange vs linspace", "reshape, flatten", "concatenate, vstack, hstack"] },
      { t: "21. Maths & filters", go: "numpy2", k: ["a * 2 on every value", "broadcasting", "sum, mean, std, argmax", "m[r, c], m[:, 1]", "axis=0 and axis=1", "a[a > 50], np.where", "view vs copy"] },
      { t: "22. Extras", go: "numpy3", k: ["nditer, ndenumerate", "array_split, vsplit, hsplit", "np.where(cond), searchsorted", "random.seed, choice", "normal, binomial, poisson", "ufuncs: around, cumsum, diff", "intersect1d, union1d"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "NumPy", d: "Python's library for fast maths on large sets of numbers. pandas is built on top of it.", c: R`
import numpy as np
print(np.__name__)`, o: R`numpy`, go: "numpy1" },
      { t: "Array (ndarray)", d: "NumPy's container: a grid of values that all share one type. It prints without commas.", c: R`
import numpy as np
a = np.array([10, 20, 30])
print(a, type(a).__name__)`, o: R`[10 20 30] ndarray`, go: "numpy1" },
      { t: "Dimension (ndim)", d: "How many directions the array has: 1D is a row, 2D is a table, 3D is a stack of tables.", c: R`
import numpy as np
print(np.array([1, 2]).ndim, np.array([[1, 2], [3, 4]]).ndim)`, o: R`1 2`, go: "numpy1" },
      { t: "shape", d: "The size in each direction, as a tuple. For a table it is `(rows, columns)`.", c: R`
import numpy as np
print(np.zeros((2, 3)).shape)`, o: R`(2, 3)`, go: "numpy1" },
      { t: "size", d: "The total number of values in the array: rows × columns.", c: R`
import numpy as np
print(np.zeros((2, 3)).size)`, o: R`6`, go: "numpy1" },
      { t: "dtype", d: "The one data type every value shares, such as `float64`. Whole numbers usually show as `int64` in Jupyter (older NumPy on Windows shows `int32`), and as `int32` in this browser runner. Both are fine.", c: R`
import numpy as np
print(np.array([1, 2, 3.5]).dtype)`, o: R`float64`, go: "numpy1" },
      { t: "Upcasting", d: "When you mix types, NumPy converts everything to the type that can hold them all. One string makes the whole array text.", c: R`
import numpy as np
print(np.array([1, 2.5]), np.array([1, "a"]))`, o: R`[1.  2.5] ['1' 'a']`, go: "numpy1" },
      { t: "reshape", d: "Gives the same values a new shape. The total count must stay the same. `-1` means \"work it out\".", c: R`
import numpy as np
print(np.arange(6).reshape(2, 3))`, o: R`
[[0 1 2]
 [3 4 5]]`, go: "numpy1" },
      { t: "Vectorisation", d: "Maths on the whole array at once, with no loop. It is short to write and very fast.", c: R`
import numpy as np
prices = np.array([100, 250])
print(prices * 0.9)`, o: R`[ 90. 225.]`, go: "numpy2" },
      { t: "Broadcasting", d: "NumPy stretches a single number, a row or a column to match a bigger array.", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m + np.array([10, 20]))`, o: R`
[[11 22]
 [13 24]]`, go: "numpy2" },
      { t: "axis", d: "The direction a calculation runs in. `axis=0` goes down the rows, `axis=1` goes across the columns.", c: R`
import numpy as np
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m.sum(axis=0), m.sum(axis=1))`, o: R`[5 7 9] [ 6 15]`, go: "numpy2" },
      { t: "Boolean mask", d: "An array of `True`/`False` made by a condition. Put it in square brackets to keep only the `True` values.", c: R`
import numpy as np
a = np.array([30, 60, 90])
print(a > 50, a[a > 50])`, o: R`[False  True  True] [60 90]`, go: "numpy2" },
      { t: "View", d: "A slice that shares memory with the original array. Changing the view changes the original.", c: R`
import numpy as np
a = np.array([1, 2, 3])
v = a[:2]
v[0] = 99
print(a)`, o: R`[99  2  3]`, go: "numpy2" },
      { t: "Copy", d: "A separate array with its own memory, made with `.copy()`.", c: R`
import numpy as np
a = np.array([1, 2, 3])
c = a[:2].copy()
c[0] = 99
print(a)`, o: R`[1 2 3]`, go: "numpy2" },
      { t: "np.where", d: "Picks a value from two options for every element, based on a condition.", c: R`
import numpy as np
marks = np.array([35, 80, 55])
print(np.where(marks >= 40, "Pass", "Fail"))`, o: R`['Fail' 'Pass' 'Pass']`, go: "numpy2" },
      { t: "argmax", d: "The **position** of the largest value. `argmin` gives the position of the smallest.", c: R`
import numpy as np
sales = np.array([40, 90, 70])
print(sales.max(), sales.argmax())`, o: R`90 1`, go: "numpy2" },
      { t: "ufunc", d: "A **universal function**: a NumPy function that works on every value of an array at once, in fast compiled code. `a + b` is really `np.add(a, b)`.", c: R`
import numpy as np
print(np.add([1, 2], [10, 20]), np.sqrt([4, 9]))`, o: R`[11 22] [2. 3.]`, go: "numpy3" },
      { t: "Random seed", d: "A starting number for the random generator. The same seed gives the same \"random\" numbers every run, so anyone can repeat your results.", c: R`
import numpy as np
np.random.seed(1)
a = np.random.rand(3)
np.random.seed(1)
b = np.random.rand(3)
print(np.array_equal(a, b))`, o: R`True`, go: "numpy3" },
      { t: "Distribution", d: "The pattern of which values are likely and which are rare. Normal is a bell curve around the average. Poisson counts events in a time window.", c: R`
import numpy as np
np.random.seed(0)
x = np.random.normal(100, 15, 100000)   # average 100, spread 15
print(round(x.mean()), round(x.std()))`, o: R`100 15`, go: "numpy3" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "Ways to create an array", head: ["Function", "Makes", "Example", "Result"], rows: [
      ["`np.array(list)`", "An array from your own data", "`np.array([1, 2, 3])`", "`[1 2 3]`"],
      ["`np.zeros(shape)`", "All zeros (floats)", "`np.zeros(3)`", "`[0. 0. 0.]`"],
      ["`np.ones(shape)`", "All ones (floats)", "`np.ones((2, 2))`", "a 2 × 2 grid of `1.`"],
      ["`np.full(shape, v)`", "Every value set to `v`", "`np.full(3, 7)`", "`[7 7 7]`"],
      ["`np.arange(start, stop, step)`", "Steps, **stop excluded**", "`np.arange(0, 10, 3)`", "`[0 3 6 9]`"],
      ["`np.linspace(start, stop, n)`", "`n` evenly spaced values, **stop included**", "`np.linspace(0, 1, 5)`", "`[0.   0.25 0.5  0.75 1.  ]`"],
      ["`np.eye(n)`", "An identity matrix: 1s on the diagonal", "`np.eye(2)`", "`[[1. 0.]` `[0. 1.]]`"],
      ["`np.random.rand(n)`", "Random floats from 0 to 1", "`np.random.rand(3)`", "Three random decimals"],
      ["`np.random.randint(lo, hi, n)`", "Random whole numbers, **hi excluded**", "`np.random.randint(1, 7, 5)`", "Five dice rolls"]
    ], cap: "Call `np.random.seed(0)` first if you want the same random numbers every run." },
    { t: "table", master: true, title: "Describing and summarising an array", head: ["Code", "Gives you", "On `m = np.array([[1, 2, 3], [4, 5, 6]])`"], rows: [
      ["`m.shape`", "(rows, columns)", "`(2, 3)`"],
      ["`m.ndim`", "Number of dimensions", "`2`"],
      ["`m.size`", "Total number of values", "`6`"],
      ["`m.dtype`", "The data type", "`int64` (or `int32` in the browser)"],
      ["`m.sum()`", "Total of everything", "`21`"],
      ["`m.sum(axis=0)`", "One total per **column**", "`[5 7 9]`"],
      ["`m.sum(axis=1)`", "One total per **row**", "`[ 6 15]`"],
      ["`m.mean()`", "Average", "`3.5`"],
      ["`m.mean(axis=1)`", "Average of each row", "`[2. 5.]`"],
      ["`m.max()` / `m.argmax()`", "Largest value / its position", "`6` / `5`"],
      ["`np.median(m)`", "The middle value", "`3.5`"],
      ["`m.std()`", "Standard deviation (spread)", "about `1.71`"],
      ["`m.cumsum()`", "Running total", "`[ 1  3  6 10 15 21]`"]
    ]},
    { t: "table", master: true, title: "Picking values from a 2D array", head: ["Code", "Picks", "On the same `m`"], rows: [
      ["`m[0, 1]`", "Row 0, column 1", "`2`"],
      ["`m[1]` or `m[1, :]`", "All of row 1", "`[4 5 6]`"],
      ["`m[:, 2]`", "All of column 2", "`[3 6]`"],
      ["`m[0:2, 1:3]`", "A block: rows 0 to 1, columns 1 to 2", "`[[2 3]` `[5 6]]`"],
      ["`m[-1, -1]`", "The last value", "`6`"],
      ["`m[m > 3]`", "Every value above 3, as a flat array", "`[4 5 6]`"]
    ], cap: "Inside the brackets the order is always `[rows, columns]`. A `:` on its own means \"all of them\"." },

    { t: "table", master: true, title: "Splitting, searching and set functions", head: ["Code", "Does", "Example", "Result"], rows: [
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
    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "Python list vs NumPy array", head: ["", "List", "NumPy array"], rows: [
      ["Types inside", "Any mix", "One type for every value"],
      ["`x * 2`", "Repeats the list", "Doubles every value"],
      ["`x + x`", "Joins the lists", "Adds value by value"],
      ["Printed as", "`[1, 2, 3]` with commas", "`[1 2 3]` without commas"],
      ["Grow it", "`append()` changes it", "Fixed size: `np.append()` makes a new array"],
      ["Speed on big data", "Slow", "Fast"]
    ], c: R`
import numpy as np
lst = [1, 2, 3]
arr = np.array([1, 2, 3])
print(lst * 2, arr * 2)
print(lst + lst, arr + arr)`, o: R`
[1, 2, 3, 1, 2, 3] [2 4 6]
[1, 2, 3, 1, 2, 3] [2 4 6]`, rule: "Collecting mixed things or growing one by one: list. Doing maths on lots of numbers: array." },
    { t: "vs", title: "`arange` vs `linspace`", head: ["", "`np.arange(start, stop, step)`", "`np.linspace(start, stop, n)`"], rows: [
      ["You choose", "The **step**", "**How many** values"],
      ["Stop value", "[[no:Excluded]]", "[[ok:Included]]"],
      ["Best for", "Whole-number steps, like `range()`", "An exact number of evenly spaced points, often decimals"]
    ], c: R`
import numpy as np
print(np.arange(0, 1, 0.25))
print(np.linspace(0, 1, 5))`, o: R`
[0.   0.25 0.5  0.75]
[0.   0.25 0.5  0.75 1.  ]`, rule: "Know the step? `arange`. Know how many points you want? `linspace`." },
    { t: "vs", title: "`axis=0` vs `axis=1`", head: ["", "`axis=0`", "`axis=1`"], rows: [
      ["Direction", "Down the rows ↓", "Across the columns →"],
      ["One result per", "**Column**", "**Row**"],
      ["On a 2 × 3 array, `sum()` gives", "3 values", "2 values"],
      ["Think of it as", "Squash the rows together", "Squash the columns together"],
      ["Analyst example", "Total sales per **product** (column)", "Total sales per **store** (row)"]
    ], c: R`
import numpy as np
sales = np.array([[10, 20, 30],
                  [40, 50, 60]])
print(sales.sum(axis=0))
print(sales.sum(axis=1))
print(sales.sum())`, o: R`
[50 70 90]
[ 60 150]
210`, rule: "The axis you name is the one that disappears. `axis=0` removes the rows, so you are left with one value per column." },
    { t: "vs", title: "View vs copy", head: ["", "View", "Copy"], rows: [
      ["Made by", "Slicing: `a[1:3]`", "`a[1:3].copy()`"],
      ["Shares memory with the original?", "[[warn:Yes]]", "[[ok:No]]"],
      ["Change it and the original", "Changes too", "Stays the same"],
      ["Note", "Python lists work the other way: slicing a list copies it", "A mask like `a[a > 2]` also gives a copy"]
    ], c: R`
import numpy as np
a = np.array([1, 2, 3, 4])
v = a[1:3]
c = a[1:3].copy()
v[0] = 99
c[1] = -1
print(a)`, o: R`[ 1 99  3  4]`, rule: "Going to change a slice but keep the original? Add `.copy()`." },
    { t: "vs", title: "`and` / `or` / `not` vs `&` / `|` / `~`", head: ["", "`and`, `or`, `not`", "`&`, `|`, `~`"], rows: [
      ["Works on", "Single `True` or `False` values", "Whole arrays, value by value"],
      ["Brackets", "Not needed", "**Needed** around each condition"],
      ["On arrays", "[[no:ValueError]] \"truth value is ambiguous\"", "[[ok:Works]]"],
      ["Example", "`if x > 10 and x < 20:`", "`a[(a > 10) & (a < 20)]`"]
    ], c: R`
import numpy as np
a = np.array([5, 15, 25])
print(a[(a > 10) & (a < 20)])
print(a[(a < 10) | (a > 20)])
print(a[~(a > 10)])`, o: R`
[15]
[ 5 25]
[5]`, rule: "Filtering an array? Use `&`, `|` and `~`, and wrap every condition in brackets." },
    { t: "vs", title: "Mask `a[cond]` vs `np.where(cond, x, y)`", head: ["", "`a[cond]`", "`np.where(cond, x, y)`"], rows: [
      ["Does", "**Keeps** only the matching values", "**Replaces** every value with `x` or `y`"],
      ["Result length", "Same or shorter", "Always the same"],
      ["Use it for", "Filtering", "Labelling or capping values"]
    ], c: R`
import numpy as np
marks = np.array([35, 80, 55])
print(marks[marks >= 40])
print(np.where(marks >= 40, "Pass", "Fail"))
print(np.where(marks > 60, 60, marks))`, o: R`
[80 55]
['Fail' 'Pass' 'Pass']
[35 60 55]`, rule: "Drop values: mask. Keep every row but change some values: `np.where`." },
    { t: "vs", title: "`max()` vs `argmax()`", head: ["", "`a.max()`", "`a.argmax()`"], rows: [
      ["Gives", "The largest **value**", "The **position** of the largest value"],
      ["On `[40, 90, 70]`", "`90`", "`1`"],
      ["Use it for", "\"What was the best day's sales?\"", "\"Which day was the best?\""]
    ], c: R`
import numpy as np
days = np.array(["Mon", "Tue", "Wed"])
sales = np.array([40, 90, 70])
print(sales.max(), days[sales.argmax()])`, o: R`90 Tue`, rule: "Use `argmax()` to find the position, then use that position in another array." },
    { t: "vs", title: "`reshape` vs `flatten`", head: ["", "`a.reshape(r, c)`", "`a.flatten()`"], rows: [
      ["Does", "Same values, any new shape", "Always back to one flat row"],
      ["Gives", "A view when it can", "A copy"],
      ["Handy trick", "`-1` lets NumPy work one size out", "Same as `a.reshape(-1)`, but always a copy"]
    ], c: R`
import numpy as np
a = np.arange(6)
m = a.reshape(2, 3)
print(m)
print(m.flatten(), a.reshape(3, -1).shape)`, o: R`
[[0 1 2]
 [3 4 5]]
[0 1 2 3 4 5] (3, 2)`, rule: "The total count must match: 6 values fit `(2, 3)` or `(3, 2)`, never `(4, 2)`." },
    { t: "vs", title: "`concatenate` vs `vstack` vs `hstack`", head: ["", "`np.concatenate([a, b])`", "`np.vstack([a, b])`", "`np.hstack([a, b])`"], rows: [
      ["Joins", "End to end along an axis", "As **rows**, one on top of the other", "**Side by side**"],
      ["Two `[1 2]`-style arrays give", "`[1 2 3 4]`", "`[[1 2]` `[3 4]]`", "`[1 2 3 4]`"]
    ], c: R`
import numpy as np
a = np.array([1, 2])
b = np.array([3, 4])
print(np.concatenate([a, b]))
print(np.vstack([a, b]))
print(np.hstack([a, b]))`, o: R`
[1 2 3 4]
[[1 2]
 [3 4]]
[1 2 3 4]`, rule: "Want a table from two rows? `vstack`. Want one longer row? `concatenate` or `hstack`." },
    { t: "vs", title: "`random.randint` vs `np.random.randint`", head: ["", "`random.randint(1, 6)`", "`np.random.randint(1, 7)`"], rows: [
      ["Comes from", "Python's built-in `random` module", "NumPy"],
      ["Includes the high value?", "[[ok:Yes]] 1 to 6", "[[no:No]] 1 to 6, because 7 is excluded"],
      ["Many at once?", "One per call", "`np.random.randint(1, 7, 100)` gives 100"]
    ], rule: "Same name, different rule. NumPy follows the \"stop is excluded\" habit of `range()` and `arange()`." },
    { t: "vs", title: "`np.array_split` vs `np.split`", head: ["", "`np.array_split(a, n)`", "`np.split(a, n)`"], rows: [
      ["Parts must be equal?", "[[ok:No]]: the first parts get the extras", "[[no:Yes]]: otherwise ValueError"],
      ["7 values into 3 parts", "Sizes 3, 2, 2", "ValueError"],
      ["Use it for", "Batches, sharing work out", "When you know it divides evenly"]
    ], c: R`
import numpy as np
a = np.arange(7)
print([len(p) for p in np.array_split(a, 3)])
print([len(p) for p in np.split(a[:6], 3)])`, o: R`
[3, 2, 2]
[2, 2, 2]`, rule: "Not sure the parts will be equal? Use `array_split`." },
    { t: "vs", title: "`np.where(cond)` vs `np.where(cond, x, y)`", head: ["", "`np.where(cond)`", "`np.where(cond, x, y)`"], rows: [
      ["Arguments", "One", "Three"],
      ["Gives", "The **positions** where cond is True", "A new array: x where True, y where False"],
      ["Result length", "The number of matches", "The same as the input"]
    ], c: R`
import numpy as np
marks = np.array([35, 80, 55])
print(np.where(marks >= 40)[0])
print(np.where(marks >= 40, "Pass", "Fail"))`, o: R`
[1 2]
['Fail' 'Pass' 'Pass']`, rule: "One argument finds positions. Three arguments replace values." },
    { t: "vs", title: "`floor` vs `ceil` vs `trunc` vs `around`", head: ["", "`np.floor`", "`np.ceil`", "`np.trunc`", "`np.around`"], rows: [
      ["Rule", "Down", "Up", "Towards 0", "Nearest (.5 to even)"],
      ["`-1.7` becomes", "-2", "-1", "-1", "-2"],
      ["`2.5` becomes", "2", "3", "2", "2"]
    ], c: R`
import numpy as np
a = np.array([-1.7, 2.5])
print(np.floor(a), np.ceil(a), np.trunc(a), np.around(a))`, o: R`[-2.  2.] [-1.  3.] [-1.  2.] [-2.  2.]`, rule: "Negative numbers show the difference: `floor` goes down, `trunc` goes towards 0." },
    { t: "vs", title: "`permutation` vs `shuffle`", head: ["", "`np.random.permutation(a)`", "`np.random.shuffle(a)`"], rows: [
      ["Changes `a`?", "[[ok:No]]", "[[no:Yes]]"],
      ["Returns", "A new shuffled array", "`None`"],
      ["Use it for", "A random order while keeping the original", "Shuffling in place"]
    ], c: R`
import numpy as np
a = np.array([1, 2, 3])
b = np.random.permutation(a)
print(a, np.sort(b))
print(np.random.shuffle(a))`, o: R`
[1 2 3] [1 2 3]
None`, rule: "Need the original order later? Use `permutation`." },
    { t: "vs", title: "Normal vs Binomial vs Poisson", head: ["", "`normal(loc, scale)`", "`binomial(n, p)`", "`poisson(lam)`"], rows: [
      ["Gives", "Decimals around an average", "Whole numbers from 0 to n", "Whole numbers from 0 up"],
      ["Shape", "Bell curve, same on both sides", "A hump, never above n", "A hump with a long right tail"],
      ["Example", "Delivery times", "Guests out of 10 who order breakfast", "Bookings per day"]
    ], c: R`
import numpy as np
np.random.seed(0)
print(round(np.random.normal(30, 5, 100000).mean()))
print(np.random.binomial(10, 0.4, 100000).max() <= 10)
print(np.random.poisson(6, 100000).min() >= 0)`, o: R`
30
True
True`, rule: "Measuring something? normal. Successes out of n tries? binomial. Events in a time window? poisson." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "NumPy takes a few seconds to load the first time you press **Run**. After that it is instant. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "`prices = np.array([120, 450, 80, 300])`. Apply a 10% discount to every price with one line, no loop, and print the result.", hint: "Multiply the whole array by `0.9`.", starter: "import numpy as np\nprices = np.array([120, 450, 80, 300])\n", sol: R`
import numpy as np
prices = np.array([120, 450, 80, 300])
print(prices * 0.9)`, out: R`[108. 405.  72. 270.]`, why: "Vectorisation: the maths runs on every value at once, and the result is floats because of `0.9`." },
      { q: "`marks` has 3 students (rows) and 3 subjects (columns). Print each student's average, then the top mark in each subject.", hint: "Student averages go across a row: `axis=1`. Subject tops go down a column: `axis=0`.", starter: "import numpy as np\nmarks = np.array([[80, 70, 90],\n                  [60, 85, 75],\n                  [95, 65, 70]])\n", sol: R`
import numpy as np
marks = np.array([[80, 70, 90],
                  [60, 85, 75],
                  [95, 65, 70]])
print(marks.mean(axis=1))
print(marks.max(axis=0))`, out: R`
[80.         73.33333333 76.66666667]
[95 85 90]`, why: "`axis=1` squashes the columns (one value per student). `axis=0` squashes the rows (one value per subject)." },
      { q: "`temps = np.array([28, 33, 31, 25, 35, 29, 32])`. Print how many days were above 30, then those temperatures.", hint: "Make the mask `temps > 30`. `np.sum(mask)` counts the `True` values, and `temps[mask]` keeps them.", starter: "import numpy as np\ntemps = np.array([28, 33, 31, 25, 35, 29, 32])\n", sol: R`
import numpy as np
temps = np.array([28, 33, 31, 25, 35, 29, 32])
hot = temps > 30
print(np.sum(hot))
print(temps[hot])`, out: R`
4
[33 31 35 32]`, why: "`True` counts as 1, so summing a mask counts the matches." },
      { q: "Make the numbers 1 to 12 with `np.arange`, reshape them into 3 rows and 4 columns, and print the second column.", hint: "`np.arange(1, 13)` (13 is excluded), then `.reshape(3, 4)`, then `[:, 1]`.", sol: R`
import numpy as np
m = np.arange(1, 13).reshape(3, 4)
print(m[:, 1])`, out: R`[ 2  6 10]`, why: "`:` takes every row and `1` picks the second column, because counting starts at 0." },
      { q: "`rates = np.array([1800, 2600, 4800, 2600, 1800])`. Give every rate a band number with `np.searchsorted([2000, 3000], rates, side=\"right\")`: 0 is under 2000, 1 is 2000 to 2999, 2 is 3000 and up. Print the bands, then how many rates are in each band as a list.", hint: "After making `bands`, count each band with `int(np.sum(bands == i))` for `i` in `range(3)`.", starter: "import numpy as np\nrates = np.array([1800, 2600, 4800, 2600, 1800])\n", sol: R`
import numpy as np
rates = np.array([1800, 2600, 4800, 2600, 1800])
bands = np.searchsorted([2000, 3000], rates, side="right")
print(bands)
print([int(np.sum(bands == i)) for i in range(3)])`, out: R`
[0 1 2 1 0]
[2, 2, 1]`, why: "`searchsorted` turns each value into a band number in one step, with no `if`/`elif` chain." }
    ]}
  ],
  quiz: [
    { q: "What does this print?", c: R`
import numpy as np
print(np.array([1, 2, 3]) * 2)`, o: ["`[1, 2, 3, 1, 2, 3]`", "`[2 4 6]`", "`[2, 4, 6]`", "An error"], a: 1, chk: 1, e: "On an array, `* 2` doubles every value. Arrays print without commas." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.zeros((3, 4)).shape)`, o: ["`(4, 3)`", "`(3, 4)`", "`12`", "`(12,)`"], a: 1, chk: 1, e: "`shape` is (rows, columns), exactly as you passed it." },
    { q: "Which one includes the stop value?", o: ["`np.arange(0, 1, 0.25)`", "`np.linspace(0, 1, 5)`", "Both", "Neither"], a: 1, e: "`linspace` includes the stop. `arange` excludes it, like `range()`." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=0))`, o: ["`[3 7]`", "`[4 6]`", "`10`", "`[1 2 3 4]`"], a: 1, chk: 1, e: "`axis=0` goes down each column: 1 + 3 = 4 and 2 + 4 = 6." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=1))`, o: ["`[3 7]`", "`[4 6]`", "`10`", "`[2 4]`"], a: 0, chk: 1, e: "`axis=1` goes across each row: 1 + 2 = 3 and 3 + 4 = 7." },
    { q: "What does this print?", c: R`
import numpy as np
a = np.array([5, 12, 18, 25])
print(a[(a > 10) & (a < 20)])`, o: ["`[12 18]`", "`[5 25]`", "`[True True]`", "An error"], a: 0, chk: 1, e: "Both conditions must be True, so only 12 and 18 are kept." },
    { q: "What happens with `a[a > 10 and a < 20]` on an array?", o: ["It works the same as `&`", "A `ValueError`: the truth value of an array is ambiguous", "It returns an empty array", "It returns `True`"], a: 1, e: "`and` needs one True/False. On arrays use `&` and put each condition in brackets." },
    { q: "What does this print?", c: R`
import numpy as np
a = np.array([1, 2, 3])
b = a[:2]
b[0] = 100
print(a[0])`, o: ["`1`", "`100`", "`None`", "An error"], a: 1, chk: 1, e: "A slice is a view, so changing it changes the original. Use `.copy()` to avoid this." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.array([1, "2", 3.0]))`, o: ["`[1 2 3.0]`", "`['1' '2' '3.0']`", "`[1. 2. 3.]`", "An error"], a: 1, chk: 1, e: "One string upcasts every value to text." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.arange(12).reshape(3, -1).shape)`, o: ["`(3, 4)`", "`(4, 3)`", "`(3, -1)`", "An error"], a: 0, chk: 1, e: "`-1` means \"work it out\": 12 values in 3 rows gives 4 columns." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.array([40, 90, 70]).argmax())`, o: ["`90`", "`1`", "`2`", "`0`"], a: 1, chk: 1, e: "`argmax()` gives the **position** of the largest value. 90 is at position 1." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m[:, 1])`, o: ["`[4 5 6]`", "`[2 5]`", "`[1 2 3]`", "`2`"], a: 1, chk: 1, e: "`:` takes every row and `1` picks column 1 from each." },
    { q: "What does this print?", c: R`
import numpy as np
print([len(p) for p in np.array_split(np.arange(8), 3)])`, o: ["`[3, 3, 2]`", "`[2, 3, 3]`", "`[3, 2, 3]`", "A ValueError"], a: 0, chk: 1, e: "8 ÷ 3 = 2 with 2 left over, so the first two parts get one extra each." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.searchsorted([100, 200, 300], 200, side="right"))`, o: ["`1`", "`2`", "`3`", "`200`"], a: 1, chk: 1, e: "200 is already in the array. `side=\"right\"` places it after the equal value, at position 2." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.diff(np.cumsum([3, 4, 5])))`, o: ["`[4 5]`", "`[3 4 5]`", "`[7 9]`", "`[1 1]`"], a: 0, chk: 1, e: "`cumsum` gives `[3 7 12]`. `diff` gives the changes, 4 and 5: it undoes `cumsum`, except for the first value." },
    { q: "Which distribution would you use to simulate the number of calls a help desk gets each hour?", o: ["Normal", "Uniform", "Poisson", "Binomial"], a: 2, e: "Poisson counts events in a fixed time window, like calls per hour or bookings per day." }
  ],
  cards: [
    ["List vs NumPy array", "A list holds mixed types and `* 2` repeats it. An array holds one type and `* 2` doubles every value. Arrays are much faster for maths."],
    ["`shape`, `ndim`, `size`, `dtype`", "`shape`: size in each direction. `ndim`: number of dimensions. `size`: total values. `dtype`: the data type."],
    ["`arange` vs `linspace`", "`arange(start, stop, step)` excludes stop. `linspace(start, stop, n)` includes stop and gives exactly n values."],
    ["`axis=0` vs `axis=1`", "`axis=0` goes down the rows, one result per column. `axis=1` goes across, one result per row."],
    ["What is broadcasting?", "NumPy stretches a number, row or column to match a bigger array, so `m + 10` adds 10 to every value."],
    ["How do you filter an array?", "Put a condition in square brackets.", R`a[a > 50]`],
    ["Combine two conditions on an array", "Use `&` (and), `|` (or), `~` (not), with brackets around each condition.", R`a[(a > 10) & (a < 20)]`],
    ["View vs copy", "A slice is a view that shares memory with the original. `.copy()` makes a separate array."],
    ["`max()` vs `argmax()`", "`max()` gives the largest value. `argmax()` gives its position."],
    ["What does `reshape(3, -1)` mean?", "3 rows, and NumPy works out the number of columns."],
    ["Mask vs `np.where`", "A mask keeps only the matching values. `np.where(cond, x, y)` keeps the length and replaces each value."],
    ["What happens when you mix types in an array?", "Upcasting: everything becomes the type that can hold all of them. One string makes every value a string."],
    ["`array_split` vs `split`", "`array_split` allows unequal parts (the first ones get the extras). `split` needs equal parts or raises ValueError."],
    ["`np.where(cond)` vs `np.where(cond, x, y)`", "One argument gives the positions where cond is True. Three arguments give a new array with x or y in every place."],
    ["Normal vs Binomial vs Poisson", "Normal: a bell curve of measurements. Binomial: successes out of n tries. Poisson: event counts per time window."],
    ["What is a ufunc?", "A NumPy function that works on every value of an array at once, like `np.add`, `np.around` or `np.cumsum`."]
  ]
});
