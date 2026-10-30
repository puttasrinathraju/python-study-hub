chapter({
  id: "functions2", part: 4, title: "Functions: advanced tools", nav: "Functions advanced", time: "70 min", lvl: "Intermediate", tricky: true,
  keys: "args kwargs star unpacking scope local global legb nonlocal unboundlocalerror mutable default lambda map filter sorted key recursion base case iterator iter next generator yield decorator",
  lead: "The tools that make functions flexible: any number of arguments, scope rules, lambda, recursion, generators and decorators. Several of these are classic interview questions.",
  goals: [
    "Accept any number of arguments with `*args` and `**kwargs`",
    "Understand local vs global scope, and the LEGB rule",
    "Avoid the mutable default argument trap",
    "Write `lambda` functions and use them with `sorted`, `map` and `filter`",
    "Understand recursion, iterators, generators and decorators"
  ],
  src: ["PDF: Functions, File Handling and Essential Modules (scope)", "Course notebook functions_file_handling.ipynb (lambda, recursion, *args)", "W3Schools: *args/**kwargs, Scope, Decorators, Lambda, Recursion, Generators, Iterators"],
  body: [
    { t: "h", text: "The advanced toolkit" },
    { t: "mm", title: "Advanced function tools", root: "Functions", kids: [
      { t: "Flexible inputs", k: ["*args: extra positional", "**kwargs: extra keyword", "f(*list), f(**dict)"] },
      { t: "Scope", k: ["local vs global", "LEGB rule", "global, nonlocal"] },
      { t: "Small functions", k: ["lambda x: x * 2", "sorted(key=...)", "map(), filter()"] },
      { t: "Recursion", k: ["function calls itself", "needs a base case"] },
      { t: "Lazy values", k: ["iter(), next()", "yield: generators"] },
      { t: "Decorators", k: ["wrap a function", "@decorator syntax"] }
    ]},
    { t: "h", text: "*args: any number of positional arguments" },
    { t: "p", b: "Put `*` before a parameter name and it collects **all extra positional arguments into a tuple**. The name `args` is just a convention." },
    { t: "code", c: R`
def add(*numbers):
    print(numbers)
    return sum(numbers)

print(add(11, 12))
print(add(23, 45, 67, 12, 34, 21))
print(add())`, o: R`
(11, 12)
23
(23, 45, 67, 12, 34, 21)
202
()
0` },
    { t: "note", k: "trap", h: "A note on the course notebook", b: "The notebook called `add([11, 12])`, passing **one list**, and then used `sum(*args)`. It works, but by accident: `args` becomes `([11, 12],)`, a tuple holding one list, and `*args` unpacks it again. The normal way is to pass separate values, `add(11, 12)`, and use `sum(args)`. If you already have a list, unpack it in the call: `add(*my_list)`." },
    { t: "code", ttl: "Unpacking a list into arguments", c: R`
def add(*numbers):
    return sum(numbers)

values = [11, 12, 45]
print(add(*values))      # same as add(11, 12, 45)`, o: R`68` },
    { t: "h", text: "**kwargs: any number of keyword arguments" },
    { t: "p", b: "Put `**` before a parameter name and it collects **all extra keyword arguments into a dictionary**." },
    { t: "code", c: R`
def get_detail(**info):
    print(info)
    for key, value in info.items():
        print(f"{key}: {value}")

get_detail(name="Raman", grade="X", sec="A")

student = {"name": "Asha", "grade": "XII"}
get_detail(**student)     # unpack a dict into keyword arguments`, o: R`
{'name': 'Raman', 'grade': 'X', 'sec': 'A'}
name: Raman
grade: X
sec: A
{'name': 'Asha', 'grade': 'XII'}
name: Asha
grade: XII` },
    { t: "note", k: "tip", b: "The course notebook wrote `def getDetail(*kwargs)` with **one** star. One star always means a tuple of positional values, whatever you name it. For keyword arguments you need **two** stars: `**kwargs`." },
    { t: "code", ttl: "The full order of parameters", c: R`
def order(item, qty=1, *extras, **notes):
    print(item, qty, extras, notes)

order("Pizza")
order("Pizza", 2, "olives", "jalapeno", spicy=True, table=4)`, o: R`
Pizza 1 () {}
Pizza 2 ('olives', 'jalapeno') {'spicy': True, 'table': 4}` },
    { t: "p", b: "The usual order is: normal parameters, then defaults, then `*args`, then `**kwargs`." },
    { t: "h", text: "Scope: where a variable lives" },
    { t: "p", b: "A variable created **inside** a function is ==local==: it only exists while the function runs. A variable created **outside** all functions is ==global==: it can be read anywhere." },
    { t: "code", ttl: "From the PDF", c: R`
x = 100                      # global

def demo():
    x = 50                   # a NEW local x, the global one is untouched
    print("Inside function:", x)

demo()
print("Outside function:", x)`, o: R`
Inside function: 50
Outside function: 100` },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 560 300" width="560" role="img" aria-label="Nested boxes: built-in contains global contains enclosing contains local">';
      s += '<rect x="10" y="10" width="540" height="280" rx="16" class="sv-soft"/><text x="28" y="38" class="sv-h">B  Built-in: print, len, sum ...</text>';
      s += '<rect x="40" y="52" width="480" height="222" rx="14" class="sv-acc"/><text x="58" y="80" class="sv-h">G  Global: variables at the top of your file</text>';
      s += '<rect x="70" y="94" width="420" height="164" rx="12" class="sv-tip"/><text x="88" y="122" class="sv-h">E  Enclosing: the outer function</text>';
      s += '<rect x="100" y="136" width="360" height="106" rx="10" class="sv-hl"/><text x="118" y="164" class="sv-h">L  Local: inside the current function</text>';
      s += '<text x="118" y="196" class="sv-t">Python looks for a name here first,</text><text x="118" y="220" class="sv-t">then moves outwards: L → E → G → B</text>';
      return s + '</svg>';
    })(), cap: "The LEGB rule: Python searches Local, then Enclosing, then Global, then Built-in. The first match wins." },
    { t: "note", k: "trap", h: "Trap! Changing a global inside a function", b: "Reading a global inside a function is fine. But as soon as you **assign** to a name inside a function, Python treats it as local for the whole function. So `count += 1` tries to read a local `count` that does not exist yet.", c: R`
count = 0
def increment():
    count += 1
increment()`, o: R`UnboundLocalError: cannot access local variable 'count' where it is not associated with a value`, err: true },
    { t: "cmp", l: { h: "Fix 1: global keyword", b: "Works, but makes code harder to follow. Use sparingly.", c: R`
count = 0
def increment():
    global count
    count += 1
increment()
increment()
print(count)`, o: R`2` }, r: { h: "Fix 2 (better): pass in, return out", b: "The function gets what it needs as a parameter and returns the result.", c: R`
def increment(n):
    return n + 1

count = 0
count = increment(count)
count = increment(count)
print(count)`, o: R`2` } },
    { t: "code", ttl: "nonlocal: change a variable from the enclosing function", c: R`
def outer():
    total = 0
    def add(n):
        nonlocal total
        total += n
    add(5)
    add(10)
    return total

print(outer())`, o: R`15` },
    { t: "h", text: "The mutable default argument trap" },
    { t: "p", b: "This is a famous Python interview question. A default value is created **once**, when the function is defined, not each time it is called. If the default is a list, every call shares the same list." },
    { t: "code", c: R`
def add_item(item, basket=[]):
    basket.append(item)
    return basket

print(add_item("apple"))
print(add_item("milk"))          # expected ['milk'] ... but no!`, o: R`
['apple']
['apple', 'milk']` },
    { t: "code", ttl: "The fix: use None as the default", c: R`
def add_item(item, basket=None):
    if basket is None:
        basket = []              # a fresh list every call
    basket.append(item)
    return basket

print(add_item("apple"))
print(add_item("milk"))`, o: R`
['apple']
['milk']` },
    { t: "h", text: "lambda: tiny one-line functions" },
    { t: "p", b: "A ==lambda== is a small function with no name, written in one line: `lambda parameters: expression`. It automatically returns the expression." },
    { t: "code", ttl: "From your course notebook", c: R`
add = lambda x, y: x + y
sqr = lambda a: a * a

print(add(11, 21))
print(sqr(5))`, o: R`
32
25` },
    { t: "p", b: "Lambdas shine when another function needs a small \"rule\", like `key=` in `sorted()`, `max()` and `min()`." },
    { t: "code", c: R`
students = [
    {"name": "Asha", "marks": 82},
    {"name": "Ravi", "marks": 67},
    {"name": "Neha", "marks": 91},
]
by_marks = sorted(students, key=lambda s: s["marks"], reverse=True)
print([s["name"] for s in by_marks])

top = max(students, key=lambda s: s["marks"])
print(top["name"])

sales = [("Mon", 1200), ("Tue", 900), ("Wed", 1500)]
print(sorted(sales, key=lambda pair: pair[1]))`, o: R`
['Neha', 'Asha', 'Ravi']
Neha
[('Tue', 900), ('Mon', 1200), ('Wed', 1500)]` },
    { t: "h3", text: "map() and filter()" },
    { t: "code", c: R`
nums = [3, -1, 8, -5, 2]

doubled = list(map(lambda x: x * 2, nums))         # apply to every item
positives = list(filter(lambda x: x > 0, nums))    # keep items that pass

print(doubled)
print(positives)
print(list(map(str.upper, ["a", "b"])))             # any function works`, o: R`
[6, -2, 16, -10, 4]
[3, 8, 2]
['A', 'B']` },
    { t: "note", k: "tip", b: "`map` and `filter` do the same jobs as list comprehensions. `[x * 2 for x in nums]` and `[x for x in nums if x > 0]` are usually easier to read. Know both, because you will see both in other people's code." },
    { t: "h", text: "Recursion: a function that calls itself" },
    { t: "p", b: "A ==recursive== function solves a problem by calling itself on a **smaller** version of the same problem. It must have a ==base case==: a simple case it can answer directly, which stops the calls." },
    { t: "code", ttl: "Factorial, from your course notebook", c: R`
def fact(n):
    if n == 1:            # base case: stop here
        return 1
    return n * fact(n - 1)

print(fact(5))`, o: R`120` },
    { t: "anim", title: "The call stack for fact(4)", frames: [
      { html: "<div class=\"bigcode\"><u>fact(4) = 4 * fact(3)</u></div>", c: "fact(4) cannot answer yet. It needs fact(3), so it **pauses** and calls it." },
      { html: "<div class=\"bigcode\">fact(4) = 4 * fact(3)\n  <u>fact(3) = 3 * fact(2)</u></div>", c: "fact(3) also needs help, so it pauses and calls fact(2). The paused calls pile up like a stack of plates." },
      { html: "<div class=\"bigcode\">fact(4) = 4 * fact(3)\n  fact(3) = 3 * fact(2)\n    <u>fact(2) = 2 * fact(1)</u></div>", c: "fact(2) calls fact(1)." },
      { html: "<div class=\"bigcode\">fact(4) = 4 * fact(3)\n  fact(3) = 3 * fact(2)\n    fact(2) = 2 * fact(1)\n      <u>fact(1) = 1</u>      ← base case</div>", c: "fact(1) is the **base case**. It returns 1 straight away, with no more calls." },
      { html: "<div class=\"bigcode\">fact(4) = 4 * fact(3)\n  fact(3) = 3 * fact(2)\n    <u>fact(2) = 2 * 1 = 2</u></div>", c: "Now the stack unwinds. fact(2) gets its answer: 2 x 1 = 2." },
      { html: "<div class=\"bigcode\">fact(4) = 4 * fact(3)\n  <u>fact(3) = 3 * 2 = 6</u></div>", c: "fact(3) gets 2 back: 3 x 2 = 6." },
      { html: "<div class=\"bigcode\"><u>fact(4) = 4 * 6 = 24</u></div><div class=\"res\">24</div>", c: "fact(4) gets 6 back: 4 x 6 = 24. Every paused call finished in reverse order." }
    ]},
    { t: "note", k: "trap", h: "Trap! No base case means no end", b: "The course notebook shows a `greet()` that calls itself forever. Python stops it after about 1,000 calls with `RecursionError: maximum recursion depth exceeded`. Always check that each call moves closer to the base case.", c: R`
def greet():
    print("Good Morning!!")
    greet()          # no base case: never stops` },
    { t: "code", ttl: "Another example: sum of digits", c: R`
def digit_sum(n):
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

print(digit_sum(4567))`, o: R`22` },
    { t: "note", k: "tip", b: "Anything you can do with recursion, you can also do with a loop. For data analysis you will rarely need recursion, but it is common in interviews and for tree-shaped data like folders inside folders." },
    { t: "h", text: "Iterators" },
    { t: "p", b: "An ==iterator== hands out items one at a time. `for` loops use them behind the scenes. `iter()` makes an iterator, and `next()` asks it for the next item. When it runs out, it raises `StopIteration`, which is how a `for` loop knows to stop." },
    { t: "code", c: R`
fruits = ["apple", "banana"]
it = iter(fruits)
print(next(it))
print(next(it))
print(next(it))`, o: R`
apple
banana
StopIteration`, err: true },
    { t: "h", text: "Generators and yield" },
    { t: "p", b: "A ==generator== is an easy way to make an iterator. It looks like a function, but uses `yield` instead of `return`. Each `yield` hands out one value and **pauses** the function until the next value is requested." },
    { t: "code", c: R`
def count_up_to(n):
    i = 1
    while i <= n:
        yield i            # hand out i, then pause here
        i += 1

for num in count_up_to(3):
    print(num)

gen = count_up_to(2)
print(next(gen), next(gen))`, o: R`
1
2
3
1 2` },
    { t: "note", k: "why", b: "Generators produce values **on demand**, so they use almost no memory. Reading a 5 GB log file line by line works the same way. `sum(x for x in range(10_000_000))` never builds a 10-million-item list." },
    { t: "h", text: "Decorators" },
    { t: "p", b: "In Python, functions are objects: you can store them in variables and pass them to other functions. A ==decorator== is a function that **wraps** another function to add extra behaviour, without changing its code. The `@` line applies it." },
    { t: "code", c: R`
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@log_call                    # same as: add = log_call(add)
def add(a, b):
    return a + b

total = add(2, b=3)`, o: R`
Calling add with (2,) {'b': 3}
add returned 5` },
    { t: "note", k: "tip", b: "You will use other people\'s decorators more than you write your own. You will see `@property` and `@classmethod` in the OOP chapter, and `@app.route` in Flask. Recognising the pattern is enough for now." },
    { t: "prac", items: [
      { q: "Write `average(*nums)` that returns the average of any number of values, or 0 if none are given.", sol: R`
def average(*nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)

print(average(10, 20, 30))
print(average())`, out: R`
20.0
0` },
      { q: "Write `make_profile(name, **details)` that prints the name and then each detail on its own line.", sol: R`
def make_profile(name, **details):
    print("Name:", name)
    for k, v in details.items():
        print(f"  {k}: {v}")

make_profile("Raman", city="Jaipur", role="Analyst")`, out: R`
Name: Raman
  city: Jaipur
  role: Analyst` },
      { q: "Sort `products = [(\"Tea\", 20), (\"Coffee\", 45), (\"Juice\", 35)]` by price, highest first, using a lambda.", sol: R`
products = [("Tea", 20), ("Coffee", 45), ("Juice", 35)]
print(sorted(products, key=lambda p: p[1], reverse=True))`, out: R`[('Coffee', 45), ('Juice', 35), ('Tea', 20)]` },
      { q: "Write a recursive `power(base, exp)` that returns base to the power exp (exp is 0 or more).", hint: "Base case: anything to the power 0 is 1.", sol: R`
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(power(2, 10))`, out: R`1024` },
      { q: "Write a generator `evens(limit)` that yields even numbers from 0 up to limit. Print them as a list for limit 10.", sol: R`
def evens(limit):
    n = 0
    while n <= limit:
        yield n
        n += 2

print(list(evens(10)))`, out: R`[0, 2, 4, 6, 8, 10]` }
    ]}
  ],
  take: [
    "`*args` collects extra positional arguments into a tuple. `**kwargs` collects keyword arguments into a dict.",
    "Use `f(*list)` and `f(**dict)` to unpack when calling.",
    "Local variables live inside a function. LEGB: Local, Enclosing, Global, Built-in.",
    "Assigning inside a function makes a name local. Prefer passing values in and returning them out.",
    "Never use a list as a default value. Use `None` and create the list inside.",
    "`lambda x: ...` for small rules in `sorted(key=...)`, `map`, `filter`.",
    "Recursion needs a base case. Generators use `yield`. Decorators wrap functions with `@`."
  ],
  quiz: [
    { q: "What does this print?", c: R`
def f(*args):
    return len(args)

print(f(4, 5, 6))`, o: ["`1`", "`3`", "`15`", "An error"], a: 1, chk: 1, e: "args is the tuple (4, 5, 6), which has 3 items." },
    { q: "What type is `kwargs` inside `def f(**kwargs)`?", o: ["list", "tuple", "dict", "set"], a: 2, e: "Two stars collect keyword arguments into a dictionary." },
    { q: "What does this print?", c: R`
x = 5
def change():
    x = 10
change()
print(x)`, o: ["`5`", "`10`", "`None`", "An error"], a: 0, chk: 1, e: "x = 10 inside the function creates a new local variable. The global x is untouched." },
    { q: "What does this print?", c: R`
def f(item, bag=[]):
    bag.append(item)
    return bag

f(1)
print(f(2))`, o: ["`[2]`", "`[1, 2]`", "`[1]`", "An error"], a: 1, chk: 1, e: "The default list is created once and shared between calls. Use `bag=None` instead." },
    { q: "What does this print?", c: R`
square = lambda n: n * n
print(square(6))`, o: ["`12`", "`36`", "`66`", "An error"], a: 1, chk: 1, e: "The lambda returns n * n." },
    { q: "What does this print?", c: R`print(list(filter(lambda x: x % 2, [1, 2, 3, 4, 5])))`, o: ["`[2, 4]`", "`[1, 3, 5]`", "`[1, 0, 1, 0, 1]`", "`[True, False]`"], a: 1, chk: 1, e: "x % 2 is 1 (truthy) for odd numbers, so filter keeps the odd ones." },
    { q: "What does every recursive function need?", o: ["A loop", "A base case that stops the calls", "A global variable", "A lambda"], a: 1, e: "Without a base case it calls itself until Python raises RecursionError." },
    { q: "What does `yield` do?", o: ["Ends the function for good", "Hands out a value and pauses the function until the next value is requested", "Prints a value", "Raises an error"], a: 1, e: "That pause-and-resume behaviour is what makes a generator." },
    { q: "What does this print?", c: R`
def g():
    yield "a"
    yield "b"

print(list(g()))`, o: ["`['a']`", "`['a', 'b']`", "`'ab'`", "`None`"], a: 1, chk: 1, e: "list() asks the generator for every value until it runs out." },
    { q: "What is a decorator?", o: ["A comment above a function", "A function that wraps another function to add behaviour", "A type of loop", "A way to format output"], a: 1, e: "`@decorator` above a def replaces the function with a wrapped version." }
  ],
  cards: [
    ["What does `*args` do?", "Collects any number of extra positional arguments into a **tuple**."],
    ["What does `**kwargs` do?", "Collects any number of extra keyword arguments into a **dictionary**."],
    ["How do you pass a list as separate arguments?", "Unpack it with a star: `f(*my_list)`. For a dict of keyword arguments: `f(**my_dict)`."],
    ["What is the LEGB rule?", "Python looks up names in this order: **L**ocal, **E**nclosing, **G**lobal, **B**uilt-in."],
    ["Why does `count += 1` inside a function raise UnboundLocalError?", "Assigning makes `count` local, but it has no local value yet. Use `global count`, or better, pass it in and return it."],
    ["The mutable default trap", "`def f(x, lst=[])` shares one list across calls. Use `lst=None` and create the list inside."],
    ["Write a lambda that doubles a number", "`double = lambda x: x * 2`"],
    ["Sort a list of dicts by a field", "`sorted(rows, key=lambda r: r[\"marks\"])`"],
    ["`map` vs `filter`", "`map(f, items)` applies f to every item. `filter(f, items)` keeps items where f is truthy."],
    ["What is a base case?", "The simple input a recursive function answers directly, without calling itself. It stops the recursion."],
    ["Generator vs normal function", "A generator uses `yield`, hands out values one at a time, and pauses between them. It saves memory."],
    ["What does `@log_call` above a function do?", "Replaces the function with `log_call(function)`, a wrapped version with extra behaviour."]
  ],
  cheat: [
    ["def f(*args):", "Any number of positional args (tuple)"],
    ["def f(**kwargs):", "Any number of keyword args (dict)"],
    ["f(*lst)  f(**d)", "Unpack into arguments"],
    ["global x", "Assign to a global inside a function"],
    ["def f(x, lst=None):", "Safe default for a list"],
    ["lambda x: x * 2", "Tiny anonymous function"],
    ["sorted(items, key=lambda r: r[1])", "Sort by a field"],
    ["list(map(f, items))", "Apply f to every item"],
    ["list(filter(f, items))", "Keep items where f is truthy"],
    ["yield value", "Make a generator"],
    ["next(it)", "Next value from an iterator"],
    ["@decorator", "Wrap the function below"]
  ]
});
