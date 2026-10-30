chapter({
  id: "numpy1", part: 7, title: "NumPy basics: arrays", nav: "NumPy: arrays", time: "55 min", lvl: "Intermediate",
  keys: "numpy np array ndarray 1d 2d 3d dimension shape size dtype ndim itemsize zeros ones full arange linspace eye random reshape flatten ravel concatenate vstack hstack upcasting astype",
  lead: "NumPy is the engine under almost every data tool in Python, including pandas. Learn what an array is, how to create one, and how to read its shape.",
  goals: [
    "Explain why NumPy arrays beat lists for numbers",
    "Create 1D, 2D and 3D arrays, and read `shape`, `size`, `dtype` and `ndim`",
    "Use `zeros`, `ones`, `full`, `arange`, `linspace`, `eye` and random arrays",
    "Understand why every array has one data type",
    "Reshape, flatten and combine arrays"
  ],
  src: ["PDF: Introduction to NumPy", "W3Schools: NumPy Tutorial (Creating Arrays, Data Types, Shape, Reshape, Join)"],
  body: [
    { t: "h", text: "What is NumPy?" },
    { t: "p", b: "==NumPy== (Numerical Python) is a library for fast maths on large amounts of numbers. Its main tool is the **array**: a grid of values that are all the **same type**. It is used in data science, machine learning, scientific computing, AI, image processing and financial analysis." },
    { t: "table", head: ["Feature", "Python list", "NumPy array"], rows: [
      ["Speed", "Slow for maths", "**Very fast** (written in C underneath)"],
      ["Memory", "More", "**Less**"],
      ["Maths on every item", "Needs a loop", "**One line** (vectorised): `prices * 0.9`"],
      ["Data types", "Mixed allowed", "**One type** for the whole array"],
      ["Shapes", "Lists of lists", "True 2D, 3D grids with rows, columns, layers"]
    ], cap: "The comparison table from your PDF, with a little more detail." },
    { t: "mm", title: "NumPy mind map", root: "NumPy", kids: [
      { t: "Create", k: ["np.array([...])", "zeros, ones, full", "arange, linspace", "random"] },
      { t: "Inspect", k: ["shape, size", "ndim, dtype"] },
      { t: "Reshape", k: ["reshape(2, 3)", "flatten(), ravel()", "concatenate, vstack"] },
      { t: "Maths", k: ["prices * 0.9", "broadcasting", "mean, sum, std"] },
      { t: "Select", k: ["a[0], a[1:3]", "m[row, col]", "a[a > 50]"] },
      { t: "Axis", k: ["axis=0: down columns", "axis=1: across rows"] }
    ]},
    { t: "h", text: "Installing and importing" },
    { t: "code", nr: 1, ttl: "Install once (Colab and Anaconda already have it)", c: R`%pip install numpy` },
    { t: "code", c: R`
import numpy as np          # np is the standard short name

a = np.array([1, 2, 3, 4])
print(a)
print(type(a))`, o: R`
[1 2 3 4]
<class 'numpy.ndarray'>` },
    { t: "note", k: "trap", h: "Spot the difference: no commas", b: "A printed array has **no commas**: `[1 2 3 4]`. A printed list has commas: `[1, 2, 3, 4]`. That is the quickest way to tell which one you have. In Jupyter, if an array is the last line of a cell, it shows as `array([1, 2, 3, 4])`." },
    { t: "h", text: "1D, 2D and 3D arrays" },
    { t: "p", b: "The number of **dimensions** (also called **axes**) is how many index numbers you need to reach one value." },
    { t: "fig", svg: V.strip(["5", "10", "20", "25", "30", "35"], { rowLabels: true, label: "1D array of six values with indexes" }), cap: "**1D**: a single row. One index: `a[2]` is 20." },
    { t: "fig", svg: V.grid([["5", "10", "20"], ["25", "30", "35"], ["1", "3", "4"]], { rl: ["row 0", "row 1", "row 2"], cl: ["col 0", "col 1", "col 2"], hl: [[1, 2]], label: "3 by 3 grid" }), cap: "**2D**: a table of rows and columns. Two indexes: `m[1, 2]` is 35." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 420 230" width="420" role="img" aria-label="3D array: two stacked 2 by 2 layers">';
      var layers = [[["5", "6"], ["7", "8"]], [["1", "2"], ["3", "4"]]];
      layers.forEach(function(L, li){
        var ox = 150 - li * 60, oy = 20 + li * 60;
        for (var r = 0; r < 2; r++) for (var c = 0; c < 2; c++) {
          var x = ox + c * 60, y = oy + r * 50;
          s += '<rect x="' + x + '" y="' + y + '" width="60" height="50" class="' + (li === 1 ? 'sv-acc' : 'sv-soft') + '"/>';
          s += '<text x="' + (x + 30) + '" y="' + (y + 31) + '" text-anchor="middle" class="sv-tm">' + L[r][c] + '</text>';
        }
        s += '<text x="' + (ox + 130) + '" y="' + (oy + 56) + '" class="sv-mb">layer ' + (1 - li) + '</text>';
      });
      s += '<text x="20" y="215" class="sv-mb">shape (2, 2, 2): 2 layers, 2 rows, 2 columns</text>';
      return s + '</svg>';
    })(), cap: "**3D**: a stack of 2D tables. Three indexes: layer, row, column." },
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([[1, 2, 3],
                 [4, 5, 6]])
arr3 = np.array([[[1, 2], [3, 4]],
                 [[5, 6], [7, 8]]])

print(arr2)
print(arr3)
print(arr1.shape, arr2.shape, arr3.shape)
print(arr2[1, 2], arr3[1, 0, 1])`, o: R`
[[1 2 3]
 [4 5 6]]
[[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]
(4,) (2, 3) (2, 2, 2)
6 6` },
    { t: "note", k: "key", h: "Reading shape", b: "`shape` is a tuple with one number per dimension. `(4,)` means 4 items in one row. `(2, 3)` means **2 rows, 3 columns** (rows always come first). `(2, 2, 2)` means 2 layers of 2 rows and 2 columns. A pandas table of 1,000 rows and 8 columns has shape `(1000, 8)`." },
    { t: "h", text: "Ways to create arrays" },
    { t: "table", head: ["Function", "Makes", "Example output"], rows: [
      ["`np.array(list)`", "An array from a list", "`[1 2 3]`"],
      ["`np.zeros((3, 3))`", "All zeros (floats)", "3 x 3 of `0.`"],
      ["`np.ones((2, 2))`", "All ones (floats)", "2 x 2 of `1.`"],
      ["`np.full((2, 3), 7)`", "Every value 7", "2 x 3 of `7`"],
      ["`np.arange(1, 10)`", "Like range(): stop **excluded**", "`[1 2 3 4 5 6 7 8 9]`"],
      ["`np.linspace(0, 10, 5)`", "5 evenly spaced numbers: stop **included**", "`[ 0.  2.5  5.  7.5 10. ]`"],
      ["`np.eye(3)`", "Identity matrix (1s on the diagonal)", "3 x 3"],
      ["`np.random.rand(3)`", "3 random floats from 0 to 1", "`[0.55 0.72 0.6 ]`"],
      ["`np.random.randint(1, 10, 5)`", "5 random ints, 1 to **9**", "`[4 8 4 6 3]`"]
    ]},
    { t: "code", c: R`
import numpy as np
print(np.zeros((3, 3)))
print(np.ones((2, 2)))
print(np.full((2, 3), 7))
print(np.arange(1, 10))
print(np.arange(0, 1, 0.25))       # arange allows decimal steps
print(np.linspace(0, 10, 5))
print(np.eye(3))`, o: R`
[[0. 0. 0.]
 [0. 0. 0.]
 [0. 0. 0.]]
[[1. 1.]
 [1. 1.]]
[[7 7 7]
 [7 7 7]]
[1 2 3 4 5 6 7 8 9]
[0.   0.25 0.5  0.75]
[ 0.   2.5  5.   7.5 10. ]
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]` },
    { t: "note", k: "trap", h: "Trap! arange vs linspace", b: "`np.arange(start, stop, step)`: you choose the **step**, and stop is **not** included. `np.linspace(start, stop, num)`: you choose **how many numbers**, and stop **is** included. `np.arange(0, 10, 2.5)` gives 4 numbers ending at 7.5, but `np.linspace(0, 10, 5)` gives 5 numbers ending at 10." },
    { t: "code", ttl: "Random arrays, with a seed so they repeat", c: R`
import numpy as np
np.random.seed(0)
print(np.random.rand(3))
print(np.random.randint(1, 10, 5))     # high (10) is NOT included`, o: R`
[0.5488135  0.71518937 0.60276338]
[4 8 4 6 3]` },
    { t: "note", k: "tip", b: "Newer NumPy code often uses a random generator object: `rng = np.random.default_rng(42)` then `rng.integers(1, 10, 5)` or `rng.random(3)`. It does the same job and is the modern recommendation. You will see both styles." },
    { t: "h", text: "Array properties" },
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np
sales_data = np.array([[100, 200, 150],
                       [120, 180, 200],
                       [90, 210, 175]])

print(f"Shape: {sales_data.shape}")        # rows, columns
print(f"Size: {sales_data.size}")          # total number of values
print(f"Data type: {sales_data.dtype}")    # type of every value
print(f"Dimensions: {sales_data.ndim}")    # number of axes
print(f"Bytes per value: {sales_data.itemsize}")`, o: R`
Shape: (3, 3)
Size: 9
Data type: int64
Dimensions: 2
Bytes per value: 8` },
    { t: "note", k: "tip", b: "Run this with **Try it** and you will see `int32` and 4 bytes. The Python inside your browser is a 32-bit build. On your own computer, and in Colab or Jupyter, whole numbers are `int64` (8 bytes), as shown above." },
    { t: "h", text: "One array, one data type" },
    { t: "p", b: "Every value in an array has the same type (`dtype`). If you mix types, NumPy quietly **upcasts** everything to a type that can hold them all." },
    { t: "code", c: R`
import numpy as np
print(np.array([1, 2.5, 3]))          # ints become floats
print(np.array([1, "a", 2.5]))        # everything becomes text!
print(np.array([3.7, -1.2]).astype(int))   # convert: decimals are cut off
print(np.array([1, 0, 2], dtype=bool))`, o: R`
[1.  2.5 3. ]
['1' 'a' '2.5']
[ 3 -1]
[ True False  True]` },
    { t: "note", k: "trap", h: "Trap! One text value turns everything into text", b: "If a single value in your data is text (like \"N/A\"), the whole array becomes strings, and maths on it fails. This is the NumPy version of the `input()` problem. Clean the data first, then convert with `.astype(float)`." },
    { t: "h", text: "Reshaping" },
    { t: "p", b: "`reshape()` reorganises the same values into a new shape. The total number of values must stay the same: 6 values can be 2 x 3 or 3 x 2, but never 4 x 2." },
    { t: "anim", title: "Reshaping 6 values", frames: [
      { html: V.strip(["1", "2", "3", "4", "5", "6"], { label: "1D array 1 to 6" }) + "<div class=\"bigcode\">a = np.arange(1, 7)     # shape (6,)</div>", c: "We start with 6 values in one row." },
      { html: V.grid([["1", "2", "3"], ["4", "5", "6"]], { rl: ["row 0", "row 1"], hlRow: 0, label: "2 by 3" }) + "<div class=\"bigcode\">a.reshape(2, 3)</div>", c: "`reshape(2, 3)`: 2 rows of 3. NumPy fills the first row with the first 3 values, then the next row." },
      { html: V.grid([["1", "2"], ["3", "4"], ["5", "6"]], { rl: ["row 0", "row 1", "row 2"], hlRow: 1, label: "3 by 2" }) + "<div class=\"bigcode\">a.reshape(3, 2)</div>", c: "`reshape(3, 2)`: 3 rows of 2. Same values, same order, different shape." },
      { html: V.grid([["1", "2"], ["3", "4"], ["5", "6"]], { rl: ["row 0", "row 1", "row 2"], label: "3 by 2" }) + "<div class=\"bigcode\">a.reshape(-1, 2)</div>", c: "`-1` means \"work it out for me\". With 6 values and 2 columns, NumPy calculates 3 rows." },
      { html: V.strip(["1", "2", "3", "4", "5", "6"], { label: "flattened" }) + "<div class=\"bigcode\">a.reshape(2, 3).flatten()</div>", c: "`flatten()` turns any shape back into a single row." },
      { html: "<div class=\"bigcode\">a.reshape(4, 2)</div><div class=\"res\" style=\"color:var(--trap)\">ValueError: cannot reshape array of size 6 into shape (4,2)</div>", c: "4 x 2 needs 8 values, but we only have 6. NumPy refuses." }
    ]},
    { t: "code", ttl: "From the PDF: daily sales into weeks", c: R`
import numpy as np
daily_sales = np.array([100, 110, 95, 120, 105, 115, 90, 125])

weekly_sales = daily_sales.reshape(4, 2)     # 4 weeks x 2 days
print(weekly_sales)
print(weekly_sales.flatten())`, o: R`
[[100 110]
 [ 95 120]
 [105 115]
 [ 90 125]]
[100 110  95 120 105 115  90 125]` },
    { t: "note", k: "tip", b: "`ravel()` does the same as `flatten()` but tries to avoid copying the data, so it is faster on big arrays. For learning, either is fine." },
    { t: "h", text: "Combining arrays" },
    { t: "code", ttl: "From the PDF", c: R`
import numpy as np
q1_sales = np.array([10000, 12000, 11000])
q2_sales = np.array([13000, 15000, 14000])

print(np.concatenate([q1_sales, q2_sales]))   # one long row
print(np.vstack([q1_sales, q2_sales]))        # stack as rows
print(np.hstack([q1_sales, q2_sales]))        # side by side`, o: R`
[10000 12000 11000 13000 15000 14000]
[[10000 12000 11000]
 [13000 15000 14000]]
[10000 12000 11000 13000 15000 14000]` },
    { t: "pred", chk: 1, c: R`
import numpy as np
m = np.zeros((4, 5))
print(m.shape, m.size, m.ndim)`, o: ["`(4, 5) 20 2`", "`(5, 4) 20 2`", "`(4, 5) 9 2`", "`(4, 5) 20 4`"], a: 0, e: "4 rows and 5 columns: shape (4, 5), size 4 x 5 = 20, and 2 dimensions." },
    { t: "prac", items: [
      { q: "Create an array of the numbers 5, 10, 15 ... 50 with `arange`.", sol: R`
import numpy as np
print(np.arange(5, 51, 5))`, out: R`[ 5 10 15 20 25 30 35 40 45 50]` },
      { q: "Turn the 12 monthly sales figures `np.arange(1, 13) * 1000` into a 4 x 3 table (4 quarters, 3 months). Print it and its shape.", sol: R`
import numpy as np
monthly = np.arange(1, 13) * 1000
quarters = monthly.reshape(4, 3)
print(quarters)
print(quarters.shape)`, out: R`
[[ 1000  2000  3000]
 [ 4000  5000  6000]
 [ 7000  8000  9000]
 [10000 11000 12000]]
(4, 3)` },
      { q: "Make 5 evenly spaced prices from 100 to 200 (both included).", sol: R`
import numpy as np
print(np.linspace(100, 200, 5))`, out: R`[100. 125. 150. 175. 200.]` },
      { q: "Convert the text array `np.array([\"12.5\", \"8\", \"30\"])` into floats and print its dtype.", sol: R`
import numpy as np
raw = np.array(["12.5", "8", "30"])
nums = raw.astype(float)
print(nums, nums.dtype)`, out: R`[12.5  8.  30. ] float64` }
    ]}
  ],
  take: [
    "`import numpy as np`. Arrays hold one data type and print without commas.",
    "`shape` is (rows, columns). `size` is the total count, `ndim` the number of dimensions, `dtype` the type.",
    "`arange` excludes the stop. `linspace` includes it and takes a count.",
    "Mixed types are upcast: one string makes the whole array strings.",
    "`reshape(r, c)` keeps the same values in a new shape. `-1` means \"work it out\".",
    "`concatenate` joins, `vstack` stacks as rows."
  ],
  quiz: [
    { q: "How does a printed NumPy array look different from a list?", o: ["It has no commas", "It uses round brackets", "It is always sorted", "It shows the type first"], a: 0, e: "`[1 2 3]` is an array, `[1, 2, 3]` is a list." },
    { q: "What is the shape of `np.array([[1, 2, 3], [4, 5, 6]])`?", o: ["`(3, 2)`", "`(2, 3)`", "`(6,)`", "`(2,)`"], a: 1, e: "2 rows and 3 columns. Rows come first." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.arange(2, 10, 3))`, o: ["`[2 5 8]`", "`[2 5 8 11]`", "`[ 2.  5.  8. 10.]`", "`[3 6 9]`"], a: 0, chk: 1, e: "Start 2, step 3, stop before 10." },
    { q: "What does this print?", c: R`
import numpy as np
print(np.linspace(0, 1, 3))`, o: ["`[0.  0.5 1. ]`", "`[0 1 2]`", "`[0.   0.33 0.67]`", "`[0. 1.]`"], a: 0, chk: 1, e: "3 evenly spaced values from 0 to 1, including 1." },
    { q: "What dtype does `np.array([1, 2, 3.5])` have?", o: ["int64", "float64", "mixed", "str"], a: 1, e: "The ints are upcast to floats so every value has the same type." },
    { q: "Which reshape works on an array of 12 values?", o: ["`reshape(5, 2)`", "`reshape(3, 4)`", "`reshape(7, 2)`", "`reshape(4, 4)`"], a: 1, e: "3 x 4 = 12. The total must match." },
    { q: "Can `np.random.randint(1, 10)` return 10?", o: ["Yes", "No, the high value is excluded", "Only with a seed", "It returns a float"], a: 1, e: "NumPy's randint excludes the high value, unlike Python's random.randint." },
    { q: "What does `a.size` give for an array of shape (3, 4)?", o: ["`(3, 4)`", "`7`", "`12`", "`2`"], a: 2, e: "size is the total number of values: 3 x 4 = 12." }
  ],
  cards: [
    ["Why use NumPy arrays instead of lists for numbers?", "Much faster, less memory, and maths works on the whole array at once (vectorised)."],
    ["How do you create an array?", "`import numpy as np` then `np.array([1, 2, 3])`."],
    ["What does `shape` tell you?", "The size of each dimension: `(rows, columns)` for 2D, e.g. `(3, 4)`."],
    ["`size` vs `ndim` vs `dtype`", "size: total number of values. ndim: number of dimensions. dtype: the data type of every value."],
    ["`arange` vs `linspace`", "`arange(start, stop, step)` excludes stop. `linspace(start, stop, num)` includes stop and gives num values."],
    ["What happens when you mix types in an array?", "NumPy upcasts to one type: ints + floats become floats; any string makes everything strings."],
    ["How do you convert an array's type?", "`arr.astype(float)` or `arr.astype(int)` (int cuts off decimals)."],
    ["What does `reshape(-1, 2)` mean?", "2 columns, and NumPy works out the number of rows."],
    ["`np.vstack` vs `np.concatenate` for two 1D arrays", "vstack stacks them as two rows (2D). concatenate joins them into one long 1D row."],
    ["Make a 3 x 3 array of zeros", "`np.zeros((3, 3))` (note the double brackets: the shape is a tuple)."]
  ],
  cheat: [
    ["import numpy as np", "Import NumPy"],
    ["np.array([1, 2, 3])", "Array from a list"],
    ["np.zeros((r, c))  np.ones((r, c))  np.full((r, c), v)", "Filled arrays"],
    ["np.arange(0, 10, 2)", "0 2 4 6 8 (stop excluded)"],
    ["np.linspace(0, 1, 5)", "5 values from 0 to 1 (inclusive)"],
    ["np.random.seed(0); np.random.rand(3)", "Repeatable random floats"],
    ["a.shape  a.size  a.ndim  a.dtype", "Properties"],
    ["a.astype(float)", "Convert type"],
    ["a.reshape(2, 3)  a.reshape(-1, 2)", "Reshape"],
    ["a.flatten()", "Back to 1D"],
    ["np.concatenate([a, b])  np.vstack([a, b])", "Combine"]
  ]
});
