/* ---------- Part 4 overview: Functions ---------- */
overview({
  part: 4, title: "Part 4 overview: functions", nav: "Part 4 overview", time: "30 min",
  keys: "function def call parameter argument return print default keyword args kwargs scope local global legb lambda recursion generator yield decorator map filter",
  lead: "Both function chapters on one page: how to define and call a function, every way to pass inputs, scope, and the advanced tools. The pairs people confuse most are in the \"don't mix these up\" tables.",
  five: [
    "A ==function== is a named block of code that runs only when you call it: `def name(params):` defines it, `name(args)` runs it.",
    "**Parameters** are the names in the `def` line. **Arguments** are the values you pass in the call.",
    "`return` hands a value back and ends the function. With no `return`, a function gives back `None`. `print` only shows text.",
    "Defaults (`b=1`), keyword arguments (`f(b=2)`), `*args` (extra values, as a tuple) and `**kwargs` (extra named values, as a dict) make calls flexible.",
    "Names made inside a function are **local** (the LEGB rule). `lambda` makes tiny functions, `yield` makes generators and `@decorator` wraps a function."
  ],
  body: [
    { t: "h", text: "Mind map of Part 4" },
    { t: "mm", title: "Part 4 at a glance", root: "Part 4: Functions", hint: "Tap a branch to open that chapter", kids: [
      { t: "14. Function basics", go: "functions", k: ["def name(params):", "call: name(args)", "return vs print", "defaults and keywords", "return a, b", "docstrings, help()"] },
      { t: "15. Advanced tools", go: "functions2", k: ["*args and **kwargs", "scope: LEGB", "mutable default trap", "lambda, map, filter", "recursion", "generators: yield", "decorators: @"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "Function", d: "A named, reusable block of code. It can take inputs and give back a result.", c: R`
def greet(name):
    return f"Hi {name}"

print(greet("Asha"))`, o: R`Hi Asha`, go: "functions" },
      { t: "Defining vs calling", d: "`def` only stores the function. Nothing inside runs until you call it with brackets.", c: R`
def hello():
    print("hello")

print("before")
hello()`, o: R`
before
hello`, go: "functions" },
      { t: "Parameter", d: "A name in the `def` line. It is a placeholder that receives a value when the function is called.", c: R`
def add(a, b):      # a and b are parameters
    return a + b`, go: "functions" },
      { t: "Argument", d: "The actual value you pass when you call the function.", c: R`
def add(a, b):
    return a + b

print(add(2, 3))    # 2 and 3 are arguments`, o: R`5`, go: "functions" },
      { t: "Return value", d: "What `return` hands back. You can store it and keep calculating with it.", c: R`
def square(x):
    return x * x

y = square(4) + 1
print(y)`, o: R`17`, go: "functions" },
      { t: "Default parameter", d: "A parameter with a value already filled in. The caller can leave it out.", c: R`
def greet(name="Guest"):
    return f"Hi {name}"

print(greet(), "|", greet("Ravi"))`, o: R`Hi Guest | Hi Ravi`, go: "functions" },
      { t: "Keyword argument", d: "An argument passed by name. The order no longer matters.", c: R`
def rect(w, h):
    return w * h

print(rect(h=2, w=5))`, o: R`10`, go: "functions" },
      { t: "*args", d: "Collects any number of extra positional arguments into a **tuple**.", c: R`
def total(*nums):
    return sum(nums)

print(total(1, 2, 3), total())`, o: R`6 0`, go: "functions2" },
      { t: "**kwargs", d: "Collects any number of extra keyword arguments into a **dict**.", c: R`
def profile(**info):
    print(info)

profile(name="Asha", city="Pune")`, o: R`{'name': 'Asha', 'city': 'Pune'}`, go: "functions2" },
      { t: "Scope", d: "Where a name can be seen. A name created inside a function is **local** to it.", c: R`
x = "global"

def f():
    x = "local"
    return x

print(f(), x)`, o: R`local global`, go: "functions2" },
      { t: "LEGB rule", d: "The order Python searches for a name: **L**ocal, **E**nclosing function, **G**lobal, **B**uilt-in.", c: R`
x = "G"

def outer():
    x = "E"
    def inner():
        return x     # not local, so Python finds the enclosing x
    return inner()

print(outer())`, o: R`E`, go: "functions2" },
      { t: "lambda", d: "A tiny function with no name and one expression. Mostly used for `key=` in `sorted()`, `max()` and `min()`.", c: R`print(sorted(["bb", "a", "ccc"], key=lambda s: len(s)))`, o: R`['a', 'bb', 'ccc']`, go: "functions2" },
      { t: "Recursion", d: "A function that calls itself. It needs a **base case** that stops the calls.", c: R`
def fact(n):
    if n <= 1:          # base case
        return 1
    return n * fact(n - 1)

print(fact(5))`, o: R`120`, go: "functions2" },
      { t: "Iterator", d: "An object that hands out items one at a time with `next()`. Every `for` loop uses one behind the scenes.", c: R`
it = iter(["a", "b"])
print(next(it), next(it))`, o: R`a b`, go: "functions2" },
      { t: "Generator", d: "A function that uses `yield`. It produces values one at a time, pausing between them.", c: R`
def count_up(n):
    for i in range(1, n + 1):
        yield i

print(list(count_up(3)))`, o: R`[1, 2, 3]`, go: "functions2" },
      { t: "Decorator", d: "A function that wraps another function to add behaviour. Put `@name` above the `def`.", c: R`
def shout(func):
    def wrapper():
        return func().upper()
    return wrapper

@shout
def hi():
    return "hi"

print(hi())`, o: R`HI`, go: "functions2" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "Every way to pass inputs to a function", head: ["Kind", "In the `def` line", "In the call", "Inside the function", "Use it for"], rows: [
      ["Positional", "`def f(a, b):`", "`f(1, 2)`", "`a = 1`, `b = 2` (by position)", "Required inputs in a fixed order"],
      ["Default", "`def f(a, b=10):`", "`f(1)` or `f(1, 5)`", "`b` is 10 unless you pass one", "Optional settings"],
      ["Keyword", "Any `def`", "`f(b=2, a=1)`", "Matched by **name**, any order", "Clear calls with many inputs"],
      ["`*args`", "`def f(*args):`", "`f(1, 2, 3)`", "`args = (1, 2, 3)`, a tuple", "Any number of values"],
      ["`**kwargs`", "`def f(**kwargs):`", "`f(x=1, y=2)`", "`kwargs = {'x': 1, 'y': 2}`, a dict", "Any number of named options"],
      ["Unpacking in a call", "`def f(a, b):`", "`f(*[1, 2])` or `f(**{\"a\": 1, \"b\": 2})`", "`a = 1`, `b = 2`", "Passing a list or dict as separate inputs"]
    ], cap: "Order in a `def` line: normal parameters, then ones with defaults, then `*args`, then `**kwargs`." },
    { t: "table", master: true, title: "The function toolbox", head: ["Tool", "What it is", "Shape", "Example", "Result"], rows: [
      ["`def` function", "A named, reusable block", "`def f(x):` … `return …`", "`def double(x): return x * 2` then `double(4)`", "`8`"],
      ["`lambda`", "A one-expression function with no name", "`lambda x: x * 2`", "`(lambda x: x * 2)(4)`", "`8`"],
      ["`map()`", "Applies a function to every item", "`map(func, items)`", "`list(map(str, [1, 2]))`", "`['1', '2']`"],
      ["`filter()`", "Keeps items where the function gives a truthy value (like True or 1)", "`filter(func, items)`", "`list(filter(lambda x: x > 1, [1, 2, 3]))`", "`[2, 3]`"],
      ["Recursion", "A function calling itself", "A base case plus a smaller call", "`fact(5)`", "`120`"],
      ["Generator", "A function with `yield`", "`def g(): yield …`", "`list(count_up(3))`", "`[1, 2, 3]`"],
      ["Decorator", "A function that wraps another", "`@wrapper` above a `def`", "`@shout` on `hi()`", "`'HI'`"]
    ]},

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "Parameter vs argument", head: ["", "Parameter", "Argument"], rows: [
      ["Where you see it", "In the `def` line", "In the call"],
      ["What it is", "A name, a placeholder", "An actual value"],
      ["Example", "`w` and `h` in `def area(w, h):`", "`5` and `2` in `area(5, 2)`"],
      ["Think of it as", "An empty, labelled box", "What you put in the box"]
    ], c: R`
def area(w, h):        # parameters: w, h
    return w * h

print(area(5, 2))      # arguments: 5, 2`, o: R`10`, rule: "Parameters are defined, arguments are passed." },
    { t: "vs", title: "`print` vs `return`", head: ["", "`print(x)`", "`return x`"], rows: [
      ["Does what", "Shows text on the screen", "Hands the value back to the caller"],
      ["Can you use the result later?", "[[no:No]] the function gives back `None`", "[[ok:Yes]] store it, add to it, pass it on"],
      ["Ends the function?", "No", "Yes, immediately"],
      ["Use it for", "Messages for a person to read", "Results for more calculations"]
    ], c: R`
def show_total(a, b):
    print(a + b)

def get_total(a, b):
    return a + b

x = show_total(2, 3)
y = get_total(2, 3)
print(x, y, y * 10)`, o: R`
5
None 5 50`, rule: "If another line of code needs the answer, `return` it. Print only at the very end." },
    { t: "vs", title: "`*args` vs `**kwargs`", head: ["", "`*args`", "`**kwargs`"], rows: [
      ["Collects", "Extra **positional** arguments", "Extra **keyword** arguments"],
      ["Becomes a", "Tuple", "Dict"],
      ["Call looks like", "`f(1, 2, 3)`", "`f(mode=\"fast\", debug=True)`"],
      ["Loop over it with", "`for x in args:`", "`for k, v in kwargs.items():`"],
      ["The names", "`args` is only a habit. The `*` matters", "`kwargs` is only a habit. The `**` matters"]
    ], c: R`
def demo(*args, **kwargs):
    print(args)
    print(kwargs)

demo(1, 2, mode="fast", debug=True)`, o: R`
(1, 2)
{'mode': 'fast', 'debug': True}`, rule: "One star: values in a tuple. Two stars: name=value pairs in a dict." },
    { t: "vs", title: "Local vs global variables", head: ["", "Local", "Global"], rows: [
      ["Created", "Inside a function", "Outside every function"],
      ["Visible", "Only inside that function, only while it runs", "Everywhere in the file"],
      ["Assigning inside a function", "Makes a **new** local name", "Needs `global name` first (avoid it)"],
      ["Gone after the call?", "Yes", "No"]
    ], c: R`
count = 0          # global

def add_one():
    count = 1      # a new local; the global is untouched
    return count

print(add_one(), count)`, o: R`1 0`, rule: "Pass values in as arguments and send results out with `return`. Then you never need `global`." },
    { t: "vs", title: "`def` vs `lambda`", head: ["", "`def`", "`lambda`"], rows: [
      ["Has a name", "Yes", "No (you can store it in a variable)"],
      ["Body", "Any number of lines", "One expression only"],
      ["`return`", "You write it", "Automatic"],
      ["Use it for", "Any real piece of logic", "Tiny rules inside `sorted(key=…)`, `max(key=…)`, `map`, `filter`"]
    ], c: R`
def by_mark(s):
    return s[1]

students = [("Asha", 82), ("Ravi", 67)]
print(sorted(students, key=by_mark))
print(sorted(students, key=lambda s: s[1], reverse=True))`, o: R`
[('Ravi', 67), ('Asha', 82)]
[('Asha', 82), ('Ravi', 67)]`, rule: "If it fits in one short expression and you only need it once, `lambda`. Otherwise, `def`." },
    { t: "vs", title: "`return` vs `yield`", head: ["", "`return`", "`yield`"], rows: [
      ["Gives back", "One value, then the function ends", "One value at a time, pausing in between"],
      ["Calling the function gives", "The value", "A generator object"],
      ["Memory", "Builds the whole result first", "Makes each item only when asked"],
      ["Use it for", "Normal results", "Long or endless sequences, big files"]
    ], c: R`
def squares_list(n):
    return [i * i for i in range(n)]

def squares_gen(n):
    for i in range(n):
        yield i * i

print(squares_list(4))
g = squares_gen(4)
print(next(g), next(g), list(g))`, o: R`
[0, 1, 4, 9]
0 1 [4, 9]`, rule: "A generator can be used up only once. Need the values more than once? Save them first: `vals = list(gen)`." },
    { t: "vs", title: "Default `[]` vs default `None`", head: ["", "`def f(x, bag=[]):`", "`def f(x, bag=None):`"], rows: [
      ["The default is made", "Once, when the function is defined", "A fresh list on every call (inside the function)"],
      ["Second call", "Still holds items from the first call", "Starts empty"],
      ["Verdict", "[[no:Bug]]", "[[ok:Correct]]"]
    ], c: R`
def add_bad(item, bag=[]):
    bag.append(item)
    return bag

def add_good(item, bag=None):
    if bag is None:
        bag = []
    bag.append(item)
    return bag

print(add_bad("a"), add_bad("b"))
print(add_good("a"), add_good("b"))`, o: R`
['a', 'b'] ['a', 'b']
['a'] ['b']`, rule: "Never use a list or dict as a default value. Use `None` and create it inside." },
    { t: "vs", title: "`map()` vs `filter()` vs a comprehension", head: ["", "`map(f, items)`", "`filter(f, items)`", "Comprehension"], rows: [
      ["Does", "Changes **every** item", "**Keeps** items where `f` gives a truthy value", "Either, or both at once"],
      ["Result length", "Same as the input", "Same or shorter", "Your choice"],
      ["Gives you", "A map object: wrap it in `list()`", "A filter object: wrap it in `list()`", "A list straight away"]
    ], c: R`
nums = [1, 2, 3, 4]
print(list(map(lambda x: x * 10, nums)))
print(list(filter(lambda x: x % 2 == 0, nums)))
print([x * 10 for x in nums if x % 2 == 0])`, o: R`
[10, 20, 30, 40]
[2, 4]
[20, 40]`, rule: "Most Python programmers reach for the comprehension. Know `map` and `filter` so you can read other people's code." },
    { t: "vs", title: "`f` vs `f()`", head: ["", "`f`", "`f()`"], rows: [
      ["Means", "The function itself", "Run the function now"],
      ["Gives you", "A function object", "Whatever the function returns"],
      ["Use it for", "Passing a function along: `key=len`, `map(str, …)`", "Getting a result"]
    ], c: R`
def hi():
    return "hi"

print(type(hi), hi())
print(sorted(["ccc", "a", "bb"], key=len))`, o: R`
<class 'function'> hi
['a', 'bb', 'ccc']`, rule: "When you hand a function to `key=`, `map` or `filter`, leave the brackets off." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "Write each function, then call it. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "Write `grade(score)` that returns `\"A\"` (90+), `\"B\"` (75+), `\"C\"` (50+) or `\"F\"`. Then print `[grade(s) for s in [95, 80, 52, 30]]`.", hint: "Use `if / elif / else` and `return` in each branch. Check the highest band first.", sol: R`
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 75:
        return "B"
    elif score >= 50:
        return "C"
    return "F"

print([grade(s) for s in [95, 80, 52, 30]])`, out: R`['A', 'B', 'C', 'F']`, why: "`return` ends the function, so once a band matches, the lower checks never run." },
      { q: "Write `stats(*nums)` that returns the smallest, the largest and the average (rounded to 1 decimal). Then `lo, hi, avg = stats(4, 9, 1, 6)` and print `1 9 5.0`.", hint: "`*nums` is a tuple, so `min()`, `max()`, `sum()` and `len()` all work on it. Return three values with commas.", sol: R`
def stats(*nums):
    return min(nums), max(nums), round(sum(nums) / len(nums), 1)

lo, hi, avg = stats(4, 9, 1, 6)
print(lo, hi, avg)`, out: R`1 9 5.0`, why: "Returning several values really returns one tuple, which you unpack into three names." },
      { q: "Write `make_bill(**items)` that takes `item=price` pairs and returns the total. `print(make_bill(tea=20, samosa=15, coffee=45))` should print `80`.", hint: "`items` is a dict, so `sum(items.values())` adds the prices.", sol: R`
def make_bill(**items):
    return sum(items.values())

print(make_bill(tea=20, samosa=15, coffee=45))`, out: R`80`, why: "`**items` gathers every keyword argument into a dict: `{'tea': 20, 'samosa': 15, 'coffee': 45}`." },
      { q: "This function has the mutable default bug. Fix it so the two calls print `['x'] ['y']`.", starter: "def add_item(item, cart=[]):\n    cart.append(item)\n    return cart\n\nprint(add_item(\"x\"), add_item(\"y\"))\n", hint: "Change the default to `None` and create the list inside the function.", sol: R`
def add_item(item, cart=None):
    if cart is None:
        cart = []
    cart.append(item)
    return cart

print(add_item("x"), add_item("y"))`, out: R`['x'] ['y']`, why: "A default list is created once and shared by every call. `None` plus a new list inside gives each call its own list." },
      { q: "`products = [(\"pen\", 10), (\"bag\", 450), (\"book\", 120)]`. Print them sorted by price, most expensive first.", starter: "products = [(\"pen\", 10), (\"bag\", 450), (\"book\", 120)]\n", hint: "`sorted(products, key=lambda p: p[1], reverse=True)`", sol: R`
products = [("pen", 10), ("bag", 450), ("book", 120)]
print(sorted(products, key=lambda p: p[1], reverse=True))`, out: R`[('bag', 450), ('book', 120), ('pen', 10)]`, why: "The lambda tells `sorted()` to compare item `[1]`, the price, of each tuple." }
    ]}
  ],
  quiz: [
    { q: "What does this print?", c: R`
def f():
    pass

print(f())`, o: ["Nothing", "`None`", "`pass`", "An error"], a: 1, chk: 1, e: "A function without `return` gives back `None`." },
    { q: "What does this print?", c: R`
def add(a, b=10):
    return a + b

print(add(5), add(5, 1))`, o: ["`15 6`", "`15 15`", "`5 6`", "An error"], a: 0, chk: 1, e: "The default 10 is used only when you leave `b` out." },
    { q: "In `def area(w, h):` what are `w` and `h`?", o: ["Arguments", "Parameters", "Return values", "Global variables"], a: 1, e: "Names in the `def` line are parameters. The values you pass in a call are arguments." },
    { q: "What does this print?", c: R`
def f(*args):
    return len(args)

print(f(1, "a", [2, 3]))`, o: ["`4`", "`3`", "`1`", "An error"], a: 1, chk: 1, e: "`args` is the tuple `(1, 'a', [2, 3])`: three items." },
    { q: "What does this print?", c: R`
def f(**kw):
    return list(kw)

print(f(a=1, b=2))`, o: ["`[1, 2]`", "`['a', 'b']`", "`[('a', 1), ('b', 2)]`", "`{'a': 1, 'b': 2}`"], a: 1, chk: 1, e: "`kw` is a dict, and turning a dict into a list gives its keys." },
    { q: "What does this print?", c: R`
x = 5

def f():
    x = 10

f()
print(x)`, o: ["`10`", "`5`", "`None`", "An error"], a: 1, chk: 1, e: "Assigning inside `f` makes a new local `x`. The global `x` is not touched." },
    { q: "What does this print?", c: R`print((lambda a, b: a * b)(3, 4))`, o: ["`7`", "`12`", "`34`", "An error"], a: 1, chk: 1, e: "The lambda takes two values and returns their product." },
    { q: "What does this print?", c: R`
def f(n):
    if n == 0:
        return 0
    return n + f(n - 1)

print(f(4))`, o: ["`4`", "`10`", "`24`", "It never stops"], a: 1, chk: 1, e: "4 + 3 + 2 + 1 + 0 = 10. The base case `n == 0` stops the recursion." },
    { q: "What does this print?", c: R`
def f():
    return 1
    print("after")

print(f())`, o: ["`after` then `1`", "`1`", "`1` then `after`", "`None`"], a: 1, chk: 1, e: "`return` ends the function at once, so the line after it never runs." },
    { q: "What does this print?", c: R`
def g():
    yield 1
    yield 2

print(list(g()))`, o: ["`[1]`", "`[1, 2]`", "`2`", "`<generator>`"], a: 1, chk: 1, e: "`list()` keeps asking the generator for values until it runs out." },
    { q: "Which `def` line is valid Python?", o: ["`def f(a, b=2):`", "`def f(a=1, b):`", "`def f(**kw, *args):`", "`def f(a b):`"], a: 0, e: "Parameters with defaults must come after the ones without, and `*args` comes before `**kwargs`." },
    { q: "Why does `sorted(words, key=len)` have no brackets after `len`?", o: ["It is a typo", "You pass the function itself, and `sorted()` calls it on each item", "`len` does not need brackets anywhere", "Brackets would sort in reverse"], a: 1, e: "`len` is the function. `len()` would try to run it right away, with nothing to measure." }
  ],
  cards: [
    ["Parameter vs argument", "A **parameter** is the name in the `def` line. An **argument** is the value you pass in the call."],
    ["`print` vs `return`", "`print` shows text and the function gives back `None`. `return` hands the value back so you can use it."],
    ["What does a function return without a `return` line?", "`None`."],
    ["What does `*args` become inside the function?", "A **tuple** of the extra positional arguments."],
    ["What does `**kwargs` become inside the function?", "A **dict** of the extra keyword arguments."],
    ["What is the LEGB rule?", "The order Python looks up a name: Local, Enclosing, Global, Built-in."],
    ["Local vs global", "Local names live inside one function call. Global names are made outside all functions and are visible everywhere."],
    ["Why is `def f(x, items=[])` dangerous?", "The list is created once and shared by every call. Use `items=None` and create the list inside."],
    ["When would you use `lambda`?", "For a tiny one-off rule, usually as `key=` in `sorted()`, `max()` or `min()`.", R`sorted(rows, key=lambda r: r[1])`],
    ["`return` vs `yield`", "`return` gives one value and ends. `yield` gives values one at a time and pauses, making a generator."],
    ["What does every recursive function need?", "A **base case** that stops it from calling itself forever."],
    ["What is a decorator?", "A function that wraps another to add behaviour. You apply it with `@name` above the `def`."],
    ["Return several values", "Separate them with commas. You get a tuple that you can unpack.", R`
def lo_hi(xs):
    return min(xs), max(xs)

lo, hi = lo_hi([4, 9, 1])`]
  ]
});
