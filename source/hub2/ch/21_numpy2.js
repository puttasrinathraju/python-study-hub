(function(){
var SM = [["100", "150", "200"], ["120", "140", "180"], ["110", "160", "220"]];
var RL = ["Jan", "Feb", "Mar"], CL = ["Prod A", "Prod B", "Prod C"];
var SAL = ["45000", "55000", "38000", "72000", "41000", "65000"];

chapter({
  id: "numpy2", part: 7, title: "NumPy operations for analysis", nav: "NumPy: maths, axis, filters", time: "70 min", lvl: "Intermediate", tricky: true,
  keys: "numpy vectorization vectorised broadcasting mean sum max min std median argmax cumsum percentile indexing slicing 2d axis 0 1 boolean indexing mask filter where view copy unique sort",
  lead: "This is where NumPy pays off: maths on whole columns in one line, summary statistics, picking rows and columns, the famous `axis` argument, and filtering with conditions.",
  goals: [
    "Do maths on whole arrays at once (vectorisation) and understand broadcasting",
    "Calculate statistics: mean, sum, max, min, std, median",
    "Index and slice 1D and 2D arrays",
    "Master `axis=0` and `axis=1`",
    "Filter with boolean masks, combine conditions with `&` and `|`, and use `np.where`"
  ],
  src: ["PDF: Introduction to NumPy (operations, statistics, indexing, filtering, 2D arrays)", "W3Schools: NumPy Indexing, Slicing, Filter, Sort, ufuncs"],
  body: [
    { t: "h", text: "Vectorisation: maths on the whole array" },
    { t: "p", b: "With NumPy you write the maths **once** and it applies to **every element**. No loop needed. This is called ==vectorisation==, and it is both shorter and much faster." },
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np
prices = np.array([10, 20, 30, 40])

discounted_prices = prices * 0.9     # 10% discount
tax_included = prices * 1.08         # add 8% tax
price_increase = prices + 5          # add 5 to each

print(f"Original: {prices}")
print(f"Discounted: {discounted_prices}")
print(f"With tax: {tax_included}")
print(f"Increased: {price_increase}")`, o: R`
Original: [10 20 30 40]
Discounted: [ 9. 18. 27. 36.]
With tax: [10.8 21.6 32.4 43.2]
Increased: [15 25 35 45]` },
    { t: "note", k: "trap", h: "Trap! Lists and arrays react differently to maths", b: "Multiplying a **list** repeats it. Multiplying an **array** multiplies every value. Same symbol, completely different result.", c: R`
import numpy as np
print([1, 2, 3] * 2)
print(np.array([1, 2, 3]) * 2)`, o: R`
[1, 2, 3, 1, 2, 3]
[2 4 6]` },
    { t: "code", ttl: "Two arrays: element by element", c: R`
import numpy as np
price = np.array([120, 45, 80])
qty = np.array([2, 10, 3])
revenue = price * qty            # 120*2, 45*10, 80*3
print(revenue)
print(revenue.sum())`, o: R`
[240 450 240]
930` },
    { t: "h", text: "Broadcasting" },
    { t: "p", b: "When shapes differ, NumPy tries to ==broadcast==: it stretches the smaller array to match the bigger one, without actually copying data. A single number works with any array. A row works with every row of a matrix." },
    { t: "anim", title: "How broadcasting stretches a row", frames: [
      { html: V.grid([["1", "2", "3"], ["4", "5", "6"]], { rl: ["row 0", "row 1"], label: "m" }) + "<div class=\"bigcode\">m + np.array([10, 20, 30])</div>" + V.strip(["10", "20", "30"], { pos: false, hl2: [0, 1, 2] }), c: "We want to add a 1D row of 3 values to a 2 x 3 matrix. The shapes are (2, 3) and (3,)." },
      { html: V.grid([["10", "20", "30"], ["10", "20", "30"]], { rl: ["copy", "copy"], acc: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]], label: "stretched row" }), c: "NumPy lines the shapes up from the right. The last dimensions match (3 and 3), so it **stretches** the row down to cover both rows." },
      { html: V.grid([["11", "22", "33"], ["14", "25", "36"]], { rl: ["row 0", "row 1"], hl: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]], label: "result" }) + "<div class=\"res\">[[11 22 33]\n [14 25 36]]</div>", c: "Now it adds element by element. Every row got 10, 20 and 30 added." },
      { html: "<div class=\"bigcode\">np.array([1, 2, 3]) + np.array([1, 2])</div><div class=\"res\" style=\"color:var(--trap)\">ValueError: operands could not be broadcast together with shapes (3,) (2,)</div>", c: "If the sizes do not line up (3 vs 2), NumPy cannot stretch either one, and you get an error." }
    ]},
    { t: "code", c: R`
import numpy as np
m = np.array([[1, 2, 3],
              [4, 5, 6]])
print(m + np.array([10, 20, 30]))        # row applied to every row
print(m * np.array([[10], [100]]))       # column applied to every column`, o: R`
[[11 22 33]
 [14 25 36]]
[[ 10  20  30]
 [400 500 600]]` },
    { t: "h", text: "Statistics" },
    { t: "code", ttl: "From the PDF, plus extras", c: R`
import numpy as np
monthly_sales = np.array([12000, 15000, 18000, 14000, 16000, 20000])

print(f"Average sales: {monthly_sales.mean():.2f}")
print(f"Total sales: {monthly_sales.sum()}")
print(f"Highest month: {monthly_sales.max()}")
print(f"Lowest month: {monthly_sales.min()}")
print(f"Standard deviation: {monthly_sales.std():.2f}")
print(f"Median: {np.median(monthly_sales)}")
print(f"Best month is index {monthly_sales.argmax()}")
print(f"Running total: {monthly_sales.cumsum()}")
print(f"75th percentile: {np.percentile(monthly_sales, 75)}")`, o: R`
Average sales: 15833.33
Total sales: 95000
Highest month: 20000
Lowest month: 12000
Standard deviation: 2608.75
Median: 15500.0
Best month is index 5
Running total: [12000 27000 45000 59000 75000 95000]
75th percentile: 17500.0` },
    { t: "note", k: "trap", h: "Trap! Two different standard deviations", b: "NumPy's `.std()` gives the **population** standard deviation (2608.75 here). The `statistics.stdev()` function and pandas' `.std()` give the **sample** standard deviation (2857.74). Neither is wrong, they answer slightly different questions. To make NumPy match pandas, write `arr.std(ddof=1)`." },
    { t: "table", head: ["Function", "Gives"], rows: [
      ["`a.sum()` `a.mean()`", "Total, average"], ["`a.min()` `a.max()`", "Smallest, largest"], ["`a.argmin()` `a.argmax()`", "**Index** of the smallest / largest"],
      ["`np.median(a)`", "Middle value"], ["`a.std()` `a.var()`", "Spread (population)"], ["`a.cumsum()`", "Running total"],
      ["`np.percentile(a, 90)`", "90th percentile"], ["`np.round(a, 2)`", "Round every value"], ["`np.sqrt(a)` `np.abs(a)` `np.log(a)`", "Maths on every value"]
    ]},
    { t: "h", text: "Indexing and slicing" },
    { t: "p", b: "1D arrays work exactly like lists. 2D arrays take **two** positions separated by a comma: `[row, column]`. A colon `:` on its own means \"all\"." },
    { t: "code", ttl: "1D, from the PDF", c: R`
import numpy as np
quarterly_revenue = np.array([50000, 65000, 72000, 58000])

print(quarterly_revenue[0])       # first quarter
print(quarterly_revenue[-1])      # last quarter
print(quarterly_revenue[0:2])     # first half
print(quarterly_revenue[2:])      # second half`, o: R`
50000
58000
[50000 65000]
[72000 58000]` },
    { t: "table", head: ["Code", "Selects", "Picture"], rows: [
      ["`m[0, 1]`", "Row 0, column 1: one value", "one cell"],
      ["`m[0, :]` or `m[0]`", "All of row 0", "a whole row"],
      ["`m[:, 1]`", "All of column 1", "a whole column"],
      ["`m[0:2, 1:3]`", "Rows 0 to 1, columns 1 to 2", "a 2 x 2 block"],
      ["`m[-1]`", "The last row", "bottom row"]
    ]},
    { t: "fig", svg: V.grid(SM, { rl: RL, cl: CL, hlCol: 1, label: "Column 1 highlighted" }), cap: "`sales_matrix[:, 1]`: every row (`:`), column 1. All of Product B: 150, 140, 160." },
    { t: "fig", svg: V.grid(SM, { rl: RL, cl: CL, hlRow: 0, label: "Row 0 highlighted" }), cap: "`sales_matrix[0, :]`: row 0, every column. All of January: 100, 150, 200." },
    { t: "code", ttl: "2D, from the PDF", c: R`
import numpy as np
# rows = months, columns = products
sales_matrix = np.array([[100, 150, 200],    # January
                         [120, 140, 180],    # February
                         [110, 160, 220]])   # March

print(sales_matrix[0, :])        # all January data
print(sales_matrix[:, 1])        # all Product B data
print(sales_matrix[2, 2])        # March, Product C
print(sales_matrix[0:2, 1:3])    # Jan-Feb, Products B-C`, o: R`
[100 150 200]
[150 140 160]
220
[[150 200]
 [140 180]]` },
    { t: "h", text: "axis: the most confusing argument in NumPy" },
    { t: "p", b: "When you call `sum()`, `mean()` or `max()` on a 2D array, `axis` decides **which direction to collapse**. Without it, you get one number for the whole table." },
    { t: "anim", title: "axis=1 vs axis=0 on the sales table", frames: [
      { html: V.grid(SM, { rl: RL, cl: CL, label: "Sales table" }) + "<div class=\"bigcode\">sales_matrix.sum()        → 1380</div>", c: "With no axis, `sum()` adds every value: 1380. Now let us collapse in one direction only." },
      { html: V.grid(SM, { rl: RL, cl: CL, hlRow: 0, res: { dir: "right", vals: ["450", "440", "490"], label: "axis=1", upto: 0 } }) + "<div class=\"bigcode\">sales_matrix.sum(axis=1)</div>", c: "**axis=1** moves **across** each row, left to right. January: 100 + 150 + 200 = 450." },
      { html: V.grid(SM, { rl: RL, cl: CL, hlRow: 1, res: { dir: "right", vals: ["450", "440", "490"], label: "axis=1", upto: 1 } }) + "<div class=\"bigcode\">sales_matrix.sum(axis=1)</div>", c: "February: 120 + 140 + 180 = 440." },
      { html: V.grid(SM, { rl: RL, cl: CL, hlRow: 2, res: { dir: "right", vals: ["450", "440", "490"], label: "axis=1" } }) + "<div class=\"bigcode\">sales_matrix.sum(axis=1)  → [450 440 490]</div>", c: "March: 490. One answer **per row**: these are the monthly totals." },
      { html: V.grid(SM, { rl: RL, cl: CL, hlCol: 0, res: { dir: "bottom", vals: ["330", "450", "600"], label: "axis=0", upto: 0 } }) + "<div class=\"bigcode\">sales_matrix.sum(axis=0)</div>", c: "**axis=0** moves **down** each column, top to bottom. Product A: 100 + 120 + 110 = 330." },
      { html: V.grid(SM, { rl: RL, cl: CL, hlCol: 2, res: { dir: "bottom", vals: ["330", "450", "600"], label: "axis=0" } }) + "<div class=\"bigcode\">sales_matrix.sum(axis=0)  → [330 450 600]</div>", c: "One answer **per column**: the product totals. The rows were squashed together." }
    ]},
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np
sales_matrix = np.array([[100, 150, 200],
                         [120, 140, 180],
                         [110, 160, 220]])

monthly_totals = sales_matrix.sum(axis=1)   # sum each row (month)
product_totals = sales_matrix.sum(axis=0)   # sum each column (product)
print(f"Monthly totals: {monthly_totals}")
print(f"Product totals: {product_totals}")
print(f"Average per product: {sales_matrix.mean(axis=0)}")`, o: R`
Monthly totals: [450 440 490]
Product totals: [330 450 600]
Average per product: [110. 150. 200.]` },
    { t: "deck", title: "Axis without tears", s: [
      { big: "axis tells NumPy which direction to squash.", b: "The axis you name is the one that **disappears**." },
      { h: "axis=0 squashes the rows", b: "It goes **down** the columns. A (3, 3) table becomes 3 values: **one per column**.", svg: V.grid(SM, { rl: RL, cl: CL, res: { dir: "bottom", vals: ["330", "450", "600"], label: "axis=0" } }) },
      { h: "axis=1 squashes the columns", b: "It goes **across** the rows. A (3, 3) table becomes 3 values: **one per row**.", svg: V.grid(SM, { rl: RL, cl: CL, res: { dir: "right", vals: ["450", "440", "490"], label: "axis=1" } }) },
      { h: "A memory trick", items: ["**axis=0**: think \"0 is a tall stick\" → go **down**", "**axis=1**: think \"1 lies flat\" → go **across**", "Shape `(rows, cols)`: axis 0 is rows, axis 1 is cols. Naming one makes it vanish."] },
      { h: "Same idea in pandas", b: "`df.sum(axis=0)` gives a total per column (the default). `df.drop(\"col\", axis=1)` drops a **column**. Learn axis once here and it works there too." }
    ]},
    { t: "pred", chk: 1, c: R`
import numpy as np
m = np.array([[1, 2], [3, 4], [5, 6]])
print(m.max(axis=0), m.max(axis=1))`, o: ["`[5 6] [2 4 6]`", "`[2 4 6] [5 6]`", "`6 6`", "`[5 6] [5 6]`"], a: 0, e: "axis=0 goes down each column: max of (1, 3, 5) is 5, max of (2, 4, 6) is 6. axis=1 goes across each row: 2, 4, 6." },
    { t: "h", text: "Filtering with boolean masks" },
    { t: "p", b: "A comparison on an array gives back an array of `True`/`False`, called a ==mask==. Put the mask inside square brackets and you keep only the `True` positions. This is how you filter data." },
    { t: "anim", title: "Filtering salaries above 50,000", frames: [
      { html: V.strip(SAL, { w: 80, label: "salaries" }) + "<div class=\"bigcode\">employee_salaries</div>", c: "Six salaries. We want only the high earners: above 50,000." },
      { html: V.strip(SAL, { w: 80, hl2: [1, 3, 5], dim: [0, 2, 4] }) + V.strip(["False", "True", "False", "True", "False", "True"], { w: 80, pos: false, hl2: [1, 3, 5], dim: [0, 2, 4] }) + "<div class=\"bigcode\">employee_salaries > 50000</div>", c: "The comparison checks **every** value at once and gives a mask of True/False." },
      { html: V.strip(["55000", "72000", "65000"], { w: 80, hl2: [0, 1, 2] }) + "<div class=\"bigcode\">employee_salaries[employee_salaries > 50000]</div>", c: "Using the mask as an index keeps only the True positions: 55000, 72000 and 65000." },
      { html: "<div class=\"bigcode\">np.sum(employee_salaries > 50000)</div><div class=\"res\">3</div>", c: "Bonus trick: True counts as 1 and False as 0, so summing a mask **counts** the matches." }
    ]},
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np
employee_salaries = np.array([45000, 55000, 38000, 72000, 41000, 65000])

print(employee_salaries > 50000)
high_earners = employee_salaries[employee_salaries > 50000]
print(f"High earners: {high_earners}")

high_earner_count = np.sum(employee_salaries > 50000)
print(f"Number of high earners: {high_earner_count}")`, o: R`
[False  True False  True False  True]
High earners: [55000 72000 65000]
Number of high earners: 3` },
    { t: "h3", text: "Combining conditions: & and |" },
    { t: "code", c: R`
import numpy as np
sal = np.array([45000, 55000, 38000, 72000, 41000, 65000])

print(sal[(sal > 40000) & (sal < 60000)])      # and
print(sal[(sal < 40000) | (sal > 70000)])      # or
print(sal[~(sal > 50000)])                     # not`, o: R`
[45000 55000 41000]
[38000 72000]
[45000 38000 41000]` },
    { t: "note", k: "trap", h: "Trap! Use & | ~ with brackets, never and / or", b: "Python's `and` and `or` cannot work on a whole array, and you get a famous confusing error. Use `&` (and), `|` (or), `~` (not), and wrap **each** condition in brackets, because `&` binds tighter than `>`. The same rule applies in pandas.", c: R`
import numpy as np
sal = np.array([45000, 55000, 38000])
print(sal[sal > 40000 and sal < 60000])`, o: R`ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()`, err: true },
    { t: "code", ttl: "np.where: label every value", c: R`
import numpy as np
sal = np.array([45000, 55000, 38000, 72000, 41000, 65000])
labels = np.where(sal > 50000, "High", "Normal")    # if, then, else
print(labels)

capped = np.where(sal > 60000, 60000, sal)          # cap values at 60000
print(capped)`, o: R`
['Normal' 'High' 'Normal' 'High' 'Normal' 'High']
[45000 55000 38000 60000 41000 60000]` },
    { t: "h", text: "Views vs copies" },
    { t: "note", k: "trap", h: "Trap! A slice is a view, not a copy", b: "Slicing a list makes a new list. Slicing a NumPy array does **not** copy the data: it gives a **view** onto the same memory. Change the slice and the original changes too. Use `.copy()` when you need a separate array.", c: R`
import numpy as np
x = np.array([1, 2, 3, 4, 5])
part = x[1:4]
part[0] = 99
print(x)                  # the original changed!

y = np.array([1, 2, 3, 4, 5])
safe = y[1:4].copy()
safe[0] = 99
print(y)                  # untouched`, o: R`
[ 1 99  3  4  5]
[1 2 3 4 5]` },
    { t: "h", text: "Sorting and unique values" },
    { t: "code", c: R`
import numpy as np
a = np.array([3, 1, 3, 2, 1, 3])
print(np.sort(a))
values, counts = np.unique(a, return_counts=True)
print(values, counts)
print(np.argsort(np.array([30, 10, 20])))    # positions that would sort it`, o: R`
[1 1 2 3 3 3]
[1 2 3] [2 1 3]
[1 2 0]` },
    { t: "note", k: "why", b: "Everything in this chapter carries straight over to pandas. A pandas column is a NumPy array with labels. `df[df[\"salary\"] > 50000]`, `df.sum(axis=0)` and `np.where(...)` are daily tools in analyst work." },
    { t: "prac", items: [
      { q: "Prices are `[499, 1299, 299, 899]` and quantities sold are `[10, 3, 25, 6]`. Find the revenue for each product, the total revenue, and the index of the best seller by revenue.", sol: R`
import numpy as np
price = np.array([499, 1299, 299, 899])
qty = np.array([10, 3, 25, 6])
revenue = price * qty
print(revenue)
print(revenue.sum())
print(revenue.argmax())`, out: R`
[4990 3897 7475 5394]
21756
2` },
      { q: "Room occupancy for 2 weeks is `[[60, 72, 75, 80, 95, 98, 90], [58, 70, 74, 79, 93, 99, 88]]` (percent, Monday to Sunday). Find the average for each week and the average for each weekday.", hint: "Each week is a row. Average per week goes across: axis=1.", sol: R`
import numpy as np
occ = np.array([[60, 72, 75, 80, 95, 98, 90],
                [58, 70, 74, 79, 93, 99, 88]])
print(np.round(occ.mean(axis=1), 1))     # per week
print(occ.mean(axis=0))                  # per weekday`, out: R`
[81.4 80.1]
[59.  71.  74.5 79.5 94.  98.5 89. ]` },
      { q: "From `scores = np.array([35, 78, 92, 41, 66, 88, 29])`, count how many passed (40 or more), and list the scores between 60 and 90.", sol: R`
import numpy as np
scores = np.array([35, 78, 92, 41, 66, 88, 29])
print(np.sum(scores >= 40))
print(scores[(scores >= 60) & (scores <= 90)])`, out: R`
5
[78 66 88]` },
      { q: "Replace every negative value in `np.array([5, -3, 8, -1, 0])` with 0.", sol: R`
import numpy as np
a = np.array([5, -3, 8, -1, 0])
print(np.where(a < 0, 0, a))`, out: R`[5 0 8 0 0]` },
      { q: "Add a 5% price rise to every product in a 2 x 3 price table `[[100, 200, 300], [150, 250, 350]]`, then add a delivery charge of `[10, 20, 30]` per column.", sol: R`
import numpy as np
prices = np.array([[100, 200, 300], [150, 250, 350]])
new = prices * 1.05 + np.array([10, 20, 30])
print(new)`, out: R`
[[115.  230.  345. ]
 [167.5 282.5 397.5]]` }
    ]}
  ],
  take: [
    "Maths on arrays applies to every value: `prices * 0.9`. Lists repeat instead.",
    "Broadcasting stretches a number, row or column to match the bigger array.",
    "`mean`, `sum`, `max`, `min`, `std`, `argmax`, `cumsum`, `np.median`, `np.percentile`.",
    "2D indexing: `m[row, col]`, `m[0, :]` a row, `m[:, 1]` a column.",
    "`axis=0` goes down (one result per column). `axis=1` goes across (one result per row).",
    "Filter with masks: `a[a > 50]`. Combine with `&`, `|`, `~` and brackets. Count with `np.sum(mask)`.",
    "Slices are views. Use `.copy()` to get a separate array."
  ],
  quiz: [
    { q: "What does this print?", c: R`
import numpy as np
print(np.array([1, 2, 3]) + 10)`, o: ["`[11 12 13]`", "`[1, 2, 3, 10]`", "`16`", "An error"], a: 0, chk: 1, e: "The number is broadcast to every element." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m[1, 0])`, o: ["`2`", "`4`", "`[4 5 6]`", "`1`"], a: 1, chk: 1, e: "Row 1, column 0." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m[:, 2])`, o: ["`[3 6]`", "`[4 5 6]`", "`[1 2 3]`", "`6`"], a: 0, chk: 1, e: "All rows, column 2." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=0))`, o: ["`[3 7]`", "`[4 6]`", "`10`", "`[1 3]`"], a: 1, chk: 1, e: "axis=0 goes down each column: 1 + 3 = 4 and 2 + 4 = 6." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.sum(axis=1))`, o: ["`[3 7]`", "`[4 6]`", "`10`", "`[2 4]`"], a: 0, chk: 1, e: "axis=1 goes across each row: 1 + 2 = 3 and 3 + 4 = 7." },
    { q: "What does this print?", c: R`
import numpy as np
a = np.array([5, 12, 8, 20])
print(a[a > 7])`, o: ["`[12  8 20]`", "`[False  True  True  True]`", "`3`", "`[12 20]`"], a: 0, chk: 1, e: "The mask keeps the values greater than 7." },
    { q: "Which is the correct way to keep values between 10 and 20?", o: ["`a[a > 10 and a < 20]`", "`a[(a > 10) & (a < 20)]`", "`a[a > 10 & a < 20]`", "`a[(a > 10) and (a < 20)]`"], a: 1, e: "Use & with brackets around each condition." },
    { q: "What does this print?", c: R`
import numpy as np
a = np.array([3, 9, 4])
print(a.argmax())`, o: ["`9`", "`1`", "`2`", "`3`"], a: 1, chk: 1, e: "argmax gives the **position** of the largest value, not the value." },
    { q: "What does this print?", c: R`
import numpy as np
x = np.array([1, 2, 3])
y = x[:2]
y[0] = 100
print(x[0])`, o: ["`1`", "`100`", "An error", "`[100 2]`"], a: 1, chk: 1, e: "A slice of an array is a view on the same data. Use .copy() to avoid this." }
  ],
  cards: [
    ["What is vectorisation?", "Applying an operation to every element at once without a loop, e.g. `prices * 0.9`."],
    ["`[1, 2] * 2` vs `np.array([1, 2]) * 2`", "List: `[1, 2, 1, 2]` (repeats). Array: `[2 4]` (multiplies)."],
    ["What is broadcasting?", "NumPy stretching a smaller array (a number, a row, a column) to match a bigger one so element-wise maths works."],
    ["How do you select a whole column in a 2D array?", "`m[:, col]`, e.g. `m[:, 1]`. A whole row is `m[row, :]` or `m[row]`."],
    ["What does `axis=0` do in `sum(axis=0)`?", "Goes **down** the rows, giving **one result per column**."],
    ["What does `axis=1` do in `sum(axis=1)`?", "Goes **across** the columns, giving **one result per row**."],
    ["What is a boolean mask?", "An array of True/False from a comparison, like `a > 50`. `a[mask]` keeps the True positions."],
    ["How do you count values that meet a condition?", "`np.sum(a > 50)`. True counts as 1."],
    ["How do you combine conditions in NumPy?", "`&` (and), `|` (or), `~` (not), with brackets: `a[(a > 10) & (a < 20)]`."],
    ["What does `np.where(cond, x, y)` do?", "For each element: x where cond is True, y where it is False."],
    ["argmax vs max", "max gives the largest **value**. argmax gives its **index**."],
    ["Is an array slice a copy?", "No, it is a **view** on the same data. Use `.copy()` for an independent array."]
  ],
  cheat: [
    ["a * 2  a + b", "Element-wise maths"],
    ["a.sum()  a.mean()  a.max()  a.std()", "Statistics"],
    ["a.argmax()", "Index of the largest value"],
    ["np.median(a)  np.percentile(a, 90)", "Median, percentile"],
    ["m[r, c]  m[r, :]  m[:, c]", "Cell, row, column"],
    ["m[0:2, 1:3]", "Block of rows and columns"],
    ["m.sum(axis=0)", "Total per column"],
    ["m.sum(axis=1)", "Total per row"],
    ["a[a > 50]", "Filter"],
    ["a[(a > 10) & (a < 20)]", "Filter with two conditions"],
    ["np.sum(a > 50)", "Count matches"],
    ["np.where(a > 50, \"Hi\", \"Lo\")", "Label each value"],
    ["a[1:3].copy()", "Independent copy of a slice"],
    ["np.unique(a, return_counts=True)", "Unique values and counts"]
  ]
});
})();
