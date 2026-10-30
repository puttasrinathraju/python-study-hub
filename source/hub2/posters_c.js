/* ---------- Revision posters: Parts 4 to 8 ---------- */
POSTERS.functions = {
  title: "Functions: def, Parameters & return",
  sub: "Write a job once, call it whenever you need it, and hand the answer back with return.",
  mods: [
    { title: "Anatomy and the call", sub: "Define once, call many times", cards: [
      { h: "Parts of a function", span: 1, svg: ART.funcAnatomy() },
      { h: "What happens on a call", svg: V.flow([
        { t: "total = add(5, 7)", k: "acc", code: 1 }, { t: "jump in: a = 5, b = 7", k: "box" }, { t: "result = 12", k: "box", code: 1 }, { t: "return 12", k: "tip", code: 1 }, { t: "total = 12", k: "hl", code: 1 }
      ], { label: "Function call flow" }) },
      { h: "Parameter vs argument", rules: [["acc", "def greet(name):", "name is a parameter"], ["acc", "greet(\"Ravi\")", "\"Ravi\" is an argument"], ["acc", "def f(a, b=1):", "b has a default"], ["acc", "f(b=2, a=1)", "keyword arguments"]] }
    ]},
    { title: "print vs return", sub: "print shows, return hands back", cards: [
      { h: "print inside", k: "trap", c: R`
def double(n):
    print(n * 2)
r = double(4)
print(r)`, o: R`
8
None` },
      { h: "return inside", k: "tip", c: R`
def double(n):
    return n * 2
r = double(4)
print(r + 1)`, o: R`9` },
      { h: "Rules to remember", span: 1, rules: [["key", "no return", "the function gives back None"], ["key", "return", "ends the function immediately"], ["key", "return a, b", "gives back a tuple"], ["trap", "def f(a=1, b):", "SyntaxError: defaults go last"]] }
    ], table: { head: ["Argument style", "Call", "Note"], rows: [
      ["Positional", "`area(5, 2)`", "order matters"], ["Keyword", "`area(h=2, w=5)`", "order does not matter"],
      ["Default", "`greet()`", "uses `name=\"Guest\"`"], ["Mixed", "`bill(500, tax=0.05)`", "positional first"]
    ]}}
  ]
};

POSTERS.functions2 = {
  title: "Advanced Functions",
  sub: "Flexible inputs, scope rules, and the tools that show up in interviews.",
  mods: [
    { title: "Inputs and scope", sub: "*args, **kwargs, LEGB", cards: [
      { h: "*args and **kwargs", span: 1, c: R`
def order(item, *extras, **notes):
    print(item, extras, notes)
order("Pizza", "olives", spicy=True)`, o: R`Pizza ('olives',) {'spicy': True}` },
      { h: "LEGB lookup order", svg: ART.legb() },
      { h: "Two famous traps", k: "trap", rules: [["trap", "count += 1", "inside a function: UnboundLocalError (pass it in and return it)"], ["trap", "def f(x, lst=[])", "one list shared by every call: use lst=None"]] }
    ]},
    { title: "lambda, recursion, generators, decorators", sub: "Small tools, big ideas", cards: [
      { h: "lambda as a sort key", c: R`
rows = [("Tea", 20), ("Coffee", 45), ("Juice", 35)]
print(sorted(rows, key=lambda r: r[1]))`, o: R`[('Tea', 20), ('Juice', 35), ('Coffee', 45)]` },
      { h: "Recursion: fact(3)", svg: V.flow([
        { t: "fact(3) = 3 * fact(2)", k: "box", code: 1 }, { t: "fact(2) = 2 * fact(1)", k: "box", code: 1 }, { t: "fact(1) = 1  (base case)", k: "tip", code: 1 }, { t: "unwind: 2 * 1 = 2, 3 * 2 = 6", k: "hl", code: 1 }
      ], { label: "Recursion call stack" }), foot: "No base case = RecursionError" }
    ], table: { head: ["Tool", "What it is", "Example"], rows: [
      ["`lambda`", "tiny one-line function", "`lambda x: x * 2`"], ["`map` / `filter`", "apply / keep", "`list(filter(f, items))`"],
      ["generator", "`yield` values one at a time", "`def gen(): yield 1`"], ["decorator", "wraps a function", "`@log_call`"]
    ]}}
  ]
};

POSTERS.errors = {
  title: "Errors & try / except",
  sub: "Read the message from the bottom, then handle what you expect.",
  mods: [
    { title: "Reading an error", sub: "Bottom line first", cards: [
      { h: "How to read a traceback", svg: V.flow([
        { t: "1. Last line: type + message", k: "trap" }, { t: "2. ----> arrow: the failing line", k: "hl" }, { t: "3. Read upwards: who called it", k: "box" }, { t: "4. Fix the code, or handle it", k: "tip" }
      ], { label: "Reading a traceback" }) },
      { h: "TypeError vs ValueError", rules: [["trap", "\"a\" + 1", "TypeError: wrong type"], ["trap", "int(\"abc\")", "ValueError: right type, bad value"], ["trap", "[1, 2][5]", "IndexError"], ["trap", "d[\"x\"]", "KeyError"], ["trap", "10 / 0", "ZeroDivisionError"]] }
    ]},
    { title: "Handling errors", sub: "try, except, else, finally", cards: [
      { h: "The flow", svg: ART.tryFlow() },
      { h: "Safe conversion", c: R`
for raw in ["120", "N/A", "42"]:
    try:
        print(int(raw) * 2)
    except ValueError:
        print("skip", raw)`, o: R`
240
skip N/A
84` },
      { h: "Raise your own", span: 1, c: R`
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
try:
    set_age(-3)
except ValueError as e:
    print("Error:", e)`, o: R`Error: Age cannot be negative`, foot: "Never write a bare except: it hides your own bugs" }
    ], table: { head: ["Block", "Runs when"], rows: [
      ["`try`", "always, first"], ["`except`", "an error happened"], ["`else`", "no error happened"], ["`finally`", "always, for clean-up"]
    ]}}
  ]
};

POSTERS.files = {
  title: "Files: Modes, with, CSV, JSON & pickle",
  sub: "Save results and load data back. Open, read or write, and let with close it.",
  mods: [
    { title: "Opening files", sub: "open(name, mode)", cards: [
      { h: "Modes", rules: [["acc", "\"r\"", "read (default)"], ["trap", "\"w\"", "write: WIPES the file first"], ["tip", "\"a\"", "append to the end"], ["acc", "\"x\"", "create: error if it exists"], ["acc", "\"rb\" \"wb\"", "binary, for pickle"]] },
      { h: "Always use with", k: "tip", c: R`
with open("demo.txt", "w") as f:
    f.write("Hi\nBye\n")
with open("demo.txt") as f:
    for line in f:
        print(line.strip())`, o: R`
Hi
Bye` },
      { h: "write() needs text", k: "trap", span: 1, c: R`
with open("demo.txt", "a") as f:
    f.write(2000)`, verdict: ["no", "TypeError: use f.write(str(2000))"] }
    ]},
    { title: "Data formats", sub: "Pick the format for the job", cards: [
      { h: "JSON", c: R`
import json
text = json.dumps({"ok": True, "n": None})
print(text)`, o: R`{"ok": true, "n": null}` },
      { h: "pickle", c: R`
import pickle
with open("db.pkl", "wb") as f:
    pickle.dump({"seats": 20}, f)
with open("db.pkl", "rb") as f:
    print(pickle.load(f))`, o: R`{'seats': 20}` }
    ], table: { head: ["Format", "Module", "Readable?", "Best for"], rows: [
      ["Text", "`open()`", "[[ok:Yes]]", "notes, logs"], ["CSV", "`csv` / pandas", "[[ok:Yes]] (Excel)", "tables"],
      ["JSON", "`json`", "[[ok:Yes]]", "nested data, APIs"], ["Pickle", "`pickle`", "[[no:No]] (binary)", "your own Python objects"]
    ]}}
  ]
};

POSTERS.modules = {
  title: "Modules & Libraries",
  sub: "Import tools instead of writing them. Install more with pip.",
  mods: [
    { title: "Importing", sub: "Module, package, library", cards: [
      { h: "What contains what", svg: ART.libNest() },
      { h: "Import styles", rules: [["acc", "import math", "math.sqrt(25)"], ["acc", "import numpy as np", "np.array(...)"], ["acc", "from math import sqrt", "sqrt(25)"], ["trap", "from math import *", "avoid: names clash"], ["tip", "%pip install pandas", "install in a notebook"]] }
    ]},
    { title: "Handy modules", sub: "Already installed with Python", cards: [
      { h: "Dates", c: R`
from datetime import date, timedelta
d = date(2026, 12, 24)
print((d + timedelta(days=4)).strftime("%d %b %Y"))`, o: R`28 Dec 2026`, foot: "strftime formats, strptime parses" },
      { h: "Counting", c: R`
from collections import Counter
print(Counter("tea coffee tea".split()).most_common(1))`, o: R`[('tea', 2)]` },
      { h: "randint includes the end", k: "trap", span: 1, rules: [["trap", "random.randint(1, 6)", "1 to 6 (6 included)"], ["acc", "range(1, 6)", "1 to 5"], ["acc", "np.random.randint(1, 6)", "1 to 5"], ["tip", "random.seed(42)", "repeatable results"]] }
    ], table: { head: ["Module", "Use it for", "Example"], rows: [
      ["`math`", "rounding, roots, pi", "`math.ceil(23 / 4)`"], ["`random`", "random picks", "`random.choice(lst)`"],
      ["`datetime`", "dates and times", "`datetime.now()`"], ["`statistics`", "mean, median, stdev", "`statistics.median(x)`"],
      ["`re`", "text patterns", "`re.findall(r\"\\d+\", s)`"], ["`os`", "files and folders", "`os.path.exists(p)`"]
    ]}}
  ]
};

POSTERS.oop = {
  title: "Classes & Objects",
  sub: "A class is the blueprint, an object is the real thing built from it.",
  mods: [
    { title: "Blueprint and objects", sub: "One class, many objects", cards: [
      { h: "class Room \u2192 three objects", span: 1, svg: ART.rooms() },
      { h: "__init__ and self", c: R`
class Room:
    def __init__(self, number, rate):
        self.number = number
        self.rate = rate
    def price(self, nights):
        return self.rate * nights

r1 = Room(101, 3499)
print(r1.number, r1.price(2))`, o: R`101 6998` },
      { h: "self, simply", k: "key", items: ["`self` means **this object**", "`r1.price(2)` runs `Room.price(r1, 2)`", "Write `self.rate`, not just `rate`", "Class attribute: shared by all objects. `self.x`: one per object"] }
    ]},
    { title: "The four pillars", sub: "Encapsulation, inheritance, polymorphism, abstraction", cards: [
      { h: "Inheritance", svg: ART.inherit() },
      { h: "Pillars in one line each", rules: [["acc", "Encapsulation", "protect data behind methods (`__balance`)"], ["acc", "Inheritance", "`class Student(Person):`"], ["acc", "Polymorphism", "same method name, different classes"], ["acc", "Abstraction", "simple methods hide the details"]] }
    ], table: { head: ["Magic method", "Triggered by"], rows: [
      ["`__init__`", "creating `Room(...)`"], ["`__str__`", "`print(obj)`"], ["`__eq__`", "`a == b`"], ["`__lt__`", "`a < b`, `sorted()`"], ["`__len__`", "`len(obj)`"], ["`__add__`", "`a + b`"]
    ]}}
  ]
};

POSTERS.numpy1 = {
  title: "NumPy Arrays",
  sub: "Fast grids of numbers, all one type. Rows always come before columns.",
  mods: [
    { title: "Why and what", sub: "Arrays beat lists for numbers", cards: [
      { h: "Dimensions and shape", span: 1, svg: ART.dims() },
      { h: "List vs array", rules: [["trap", "[1, 2] * 2", "[1, 2, 1, 2] (repeats)"], ["tip", "np.array([1, 2]) * 2", "[2 4] (multiplies)"], ["acc", "printed array", "no commas: [1 2 3]"], ["acc", "one dtype", "mixed values get upcast"]] },
      { h: "Upcasting trap", k: "trap", c: R`
import numpy as np
print(np.array([1, 2.5]))
print(np.array([1, "a"]))`, o: R`
[1.  2.5]
['1' 'a']` }
    ]},
    { title: "Create and reshape", sub: "Same values, new shape", cards: [
      { h: "arange vs linspace", k: "key", c: R`
import numpy as np
print(np.arange(0, 10, 2.5))
print(np.linspace(0, 10, 5))`, o: R`
[0.  2.5 5.  7.5]
[ 0.   2.5  5.   7.5 10. ]`, foot: "arange: you pick the step, stop excluded. linspace: you pick the count, stop included" },
      { h: "reshape(2, 3)", svg: V.strip(["1", "2", "3", "4", "5", "6"], { w: 40, pos: false }) + V.grid([["1", "2", "3"], ["4", "5", "6"]], { cw: 44, ch: 34 }), foot: "6 values fit 2 x 3 or 3 x 2, never 4 x 2" }
    ], table: { head: ["Function", "Makes"], rows: [
      ["`np.array(lst)`", "array from a list"], ["`np.zeros((2, 3))`", "2 x 3 of 0."], ["`np.full((2, 3), 7)`", "2 x 3 of 7"],
      ["`np.arange(1, 10)`", "1 to 9"], ["`np.random.randint(1, 10, 5)`", "5 ints, 1 to 9"], ["`a.shape  a.size  a.dtype`", "inspect it"]
    ]}}
  ]
};

POSTERS.numpy2 = {
  title: "NumPy for Analysis",
  sub: "Maths on whole columns, axis that finally makes sense, and filters with masks.",
  mods: [
    { title: "Maths and selection", sub: "No loops needed", cards: [
      { h: "Vectorised maths", c: R`
import numpy as np
price = np.array([120, 45, 80])
qty = np.array([2, 10, 3])
print(price * qty, (price * qty).sum())`, o: R`[240 450 240] 930` },
      { h: "Picking data", rules: [["acc", "m[1, 2]", "row 1, column 2"], ["acc", "m[0, :]", "a whole row"], ["acc", "m[:, 1]", "a whole column"], ["acc", "m[0:2, 1:3]", "a block"], ["trap", "x[1:3]", "a view: use .copy()"]] },
      { h: "Broadcasting", span: 1, c: R`
import numpy as np
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m + np.array([10, 20, 30]))`, o: R`
[[11 22 33]
 [14 25 36]]` }
    ]},
    { title: "axis and filters", sub: "axis=0 goes down, axis=1 goes across", cards: [
      { h: "sum(axis=0): per column", svg: V.grid([["100", "150", "200"], ["120", "140", "180"], ["110", "160", "220"]], { cw: 50, ch: 34, res: { dir: "bottom", vals: ["330", "450", "600"], label: "axis=0" } }) },
      { h: "sum(axis=1): per row", svg: V.grid([["100", "150", "200"], ["120", "140", "180"], ["110", "160", "220"]], { cw: 50, ch: 34, res: { dir: "right", vals: ["450", "440", "490"], label: "axis=1" } }) },
      { h: "Masks filter data", span: 1, c: R`
import numpy as np
sal = np.array([45000, 55000, 38000, 72000])
print(sal[sal > 50000], np.sum(sal > 50000))
print(sal[(sal > 40000) & (sal < 60000)])`, o: R`
[55000 72000] 2
[45000 55000]`, foot: "Use & | ~ with brackets, never and / or" }
    ], table: { head: ["Function", "Gives"], rows: [
      ["`a.mean()  a.sum()`", "average, total"], ["`a.max()  a.argmax()`", "largest value, its position"], ["`np.median(a)`", "middle value"],
      ["`a.std()`", "spread (use `ddof=1` to match pandas)"], ["`np.where(c, x, y)`", "label every value"], ["`np.unique(a)`", "unique values"]
    ]}}
  ]
};

POSTERS.numpy3 = {
  title: "NumPy Extras",
  sub: "Loop, split, search, simulate data and use fast maths functions.",
  mods: [
    { title: "Split and search", sub: "Cut arrays up and find values", cards: [
      { h: "array_split shares out extras", c: R`
import numpy as np
a = np.arange(1, 8)
print(np.array_split(a, 3))`, o: R`
[array([1, 2, 3]), array([4, 5]), array([6, 7])]` },
      { h: "Find positions", c: R`
import numpy as np
prices = np.array([100, 250, 400, 900])
print(np.where(prices > 300)[0])
print(np.searchsorted(prices, 300))`, o: R`
[2 3]
2` },
      { h: "Watch out", span: 1, rules: [["tip", "np.array_split(a, 3)", "parts can be unequal"], ["trap", "np.split(a, 3)", "ValueError if parts are unequal"], ["acc", "np.where(cond)", "one argument: positions"], ["acc", "np.where(cond, x, y)", "three arguments: pick values"], ["acc", "for x in np.nditer(m)", "every value, any shape"]] }
    ]},
    { title: "Random data and ufuncs", sub: "Simulate realistic data, then do fast maths", cards: [
      { h: "Normal: the bell curve", svg: V.hist([16, 114, 484, 1636, 4410, 9174, 15022, 19255, 19209, 15001, 9119, 4374, 1619, 451, 86, 24], {"ticks": [[0, "20"], [8, "60"], [16, "100"]], "hl": [6, 7, 8, 9], "bw": 16, "h": 80, "label": "Bell curve histogram"}) },
      { h: "Poisson: events per day", c: R`
import numpy as np
np.random.seed(5)
days = np.random.poisson(6, 100000)
print(round(days.mean()), round(np.mean(days >= 10), 2))`, o: R`
6 0.08`, foot: "np.random.seed(n) makes results repeat" },
      { h: "ufuncs", span: 1, c: R`
import numpy as np
sales = np.array([120, 80, 150])
print(np.cumsum(sales), np.diff(sales))
print(np.around([0.5, 1.5, 2.5]))`, o: R`
[120 200 350] [-40  70]
[0. 2. 2.]`, foot: "A .5 rounds to the nearest even number" }
    ], table: { head: ["Distribution", "Use it for"], rows: [
      ["`np.random.normal(loc, scale, n)`", "measurements: scores, times"], ["`np.random.binomial(n, p, size)`", "successes out of n tries"], ["`np.random.poisson(lam, n)`", "counts per day or hour"],
      ["`np.random.uniform(low, high, n)`", "every value equally likely"], ["`np.random.exponential(scale, n)`", "waiting time between events"], ["`np.random.choice(items, p=[...])`", "random picks with set chances"]
    ]}}
  ]
};
POSTERS.projects = {
  title: "Projects: Build Any Small Program",
  sub: "Data first, then one function per action, then the menu loop.",
  mods: [
    { title: "The build recipe", sub: "The same steps every time", cards: [
      { h: "Six steps", svg: V.flow([
        { t: "Describe it in plain words", k: "soft" }, { t: "Choose the data structure", k: "acc" }, { t: "One function per action", k: "box" },
        { t: "Test with fixed values", k: "hl" }, { t: "Add the menu loop", k: "box" }, { t: "Handle bad input", k: "tip" }
      ], { label: "Program building steps" }) },
      { h: "Menu loop skeleton", c: R`
while True:
    choice = input("1 Book 2 Cancel 3 Exit: ")
    if choice == "1":
        ...
    elif choice == "2":
        ...
    elif choice == "3":
        break
    else:
        print("Invalid choice")` }
    ]},
    { title: "What each project uses", sub: "Every chapter shows up somewhere", cards: [
      { h: "Inventory: the right collection for each job", span: 1, rules: [["acc", "dict", "inventory: item ID \u2192 details (fast lookup)"], ["acc", "set", "categories (each stored once)"], ["acc", "list", "transactions (ordered history)"], ["acc", "tuple", "(name, category, price): fixed facts"], ["acc", "str", "IDs like ITEM0001 and the report"]] }
    ], table: { head: ["Project", "Key concepts"], rows: [
      ["Movie tickets", "nested dict, functions, pickle, menu loop"], ["Supermarket bill", "nested while, accumulator, f-strings"],
      ["Theater billing", "if-elif, try/except, seat list, time.sleep"], ["Inventory", "class, all five collections, sorting"], ["Book borrowing", "dict of lists, setdefault, pickle"]
    ]}}
  ]
};
