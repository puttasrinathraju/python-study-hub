chapter({
  id: "functions", part: 4, title: "Functions: the basics", nav: "Functions basics", time: "50 min", lvl: "Beginner", tricky: true,
  keys: "function def call parameter argument return print vs return none default keyword positional docstring help built-in user defined",
  lead: "A function is a named, reusable block of code. Write it once, call it whenever you need it. This is how you stop copying and pasting code.",
  goals: [
    "Define a function with `def` and call it",
    "Tell **parameters** and **arguments** apart",
    "Understand `return`, and why it is not the same as `print`",
    "Use default values and keyword arguments",
    "Return several values and write docstrings"
  ],
  src: ["PDF: Functions, File Handling and Essential Modules", "Course notebook functions_file_handling.ipynb", "W3Schools: Functions, Arguments"],
  body: [
    { t: "h", text: "What is a function?" },
    { t: "p", b: "A ==function== is a block of code that does one specific job. It only runs when you **call** it. You have already used many functions: `print()`, `len()`, `type()`, `input()`. Now you will write your own." },
    { t: "note", k: "like", b: "A function is like a **recipe**. Instead of explaining every step of making tea each time, you just say \"make tea\". The recipe is written once. You can follow it as many times as you like, with different ingredients (2 cups, less sugar)." },
    { t: "table", head: ["Why use functions?", "What it means"], rows: [
      ["**Reusability**", "Write once, use many times. No copy-paste."],
      ["**Modularity**", "Split a big program into small named pieces."],
      ["**Readability**", "`calculate_gst(price)` explains itself."],
      ["**Maintainability**", "Fix a bug in one place and it is fixed everywhere."]
    ], cap: "The four benefits from your PDF." },
    { t: "h", text: "Defining and calling a function" },
    { t: "code", c: R`
def say_hello():                         # define: nothing runs yet
    print("Hello! Welcome to Python.")

say_hello()                              # call: now it runs
say_hello()                              # and again`, o: R`
Hello! Welcome to Python.
Hello! Welcome to Python.` },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 640 260" width="640" role="img" aria-label="Labelled parts of a Python function">';
      s += '<rect x="150" y="20" width="230" height="38" rx="8" class="sv-hl"/>';
      s += '<text x="162" y="45" class="sv-tm" style="font-size:18px"><tspan class="sv-ta" style="font-weight:600">def</tspan> add(x, y):</text>';
      s += '<rect x="186" y="74" width="330" height="34" rx="6" class="sv-acc"/><text x="196" y="96" class="sv-tm">"""Add two numbers."""</text>';
      s += '<rect x="186" y="118" width="130" height="34" rx="6" class="sv-soft"/><text x="196" y="140" class="sv-tm">z = x + y</text>';
      s += '<rect x="186" y="162" width="110" height="34" rx="6" class="sv-tip"/><text x="196" y="184" class="sv-tm">return z</text>';
      s += '<text x="20" y="44" class="sv-mb">keyword def</text><path d="M100 40 H160" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<text x="400" y="14" class="sv-mb">name, parameters in ( ), then :</text><path d="M395 18 L300 26" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<text x="530" y="96" class="sv-mb">docstring</text><path d="M526 92 H520" class="sv-ln"/>';
      s += '<text x="330" y="140" class="sv-mb">body (indented)</text>';
      s += '<text x="310" y="184" class="sv-mb">sends a value back to the caller</text>';
      s += '<path d="M176 74 V196" class="sv-lna"/><text x="20" y="140" class="sv-mb">4-space indent</text><path d="M120 136 H170" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<text x="186" y="236" class="sv-tm">total = add(5, 7)</text><text x="370" y="236" class="sv-mb">← the call, with arguments 5 and 7</text>';
      return s + '</svg>';
    })(), cap: "The parts of a function." },
    { t: "note", k: "trap", h: "Trap! Define before you call", b: "Python runs top to bottom. If you call a function on a line **above** its `def`, Python has not seen it yet. In Jupyter this often happens when you restart and run cells out of order.", c: R`
say_hi()
def say_hi():
    print("hi")`, o: R`NameError: name 'say_hi' is not defined`, err: true },
    { t: "h", text: "Parameters and arguments" },
    { t: "p", b: "These two words confuse many beginners. Here is the difference." },
    { t: "cmp", l: { h: "Parameter", items: ["The **name** in the function definition", "A placeholder, like an empty box", "`name` in `def greet(name):`"] }, r: { h: "Argument", items: ["The **actual value** you pass when calling", "What goes into the box", "`\"Ravi\"` in `greet(\"Ravi\")`"] } },
    { t: "code", c: R`
def greet(name):            # name is a parameter
    print("Hello", name)

greet("Ravi")               # "Ravi" is an argument
greet("Asha")`, o: R`
Hello Ravi
Hello Asha` },
    { t: "code", ttl: "Wrong number of arguments", c: R`
def greet(name):
    print("Hello", name)

greet()`, o: R`TypeError: greet() missing 1 required positional argument: 'name'`, err: true },
    { t: "h", text: "return: sending a result back" },
    { t: "p", b: "`return` ends the function and **hands a value back** to the line that called it. You can store that value, print it, or use it in maths." },
    { t: "anim", title: "Watch a function call jump in and out", trace: { code: R`
def add(a, b):
    result = a + b
    return result

total = add(5, 7)
print("Total:", total)`, steps: [
      { l: 1, sc: [{ n: "Global", v: {} }], c: "`def` only **creates** the function and gives it the name `add`. The code inside does not run yet." },
      { l: 5, sc: [{ n: "Global", v: { add: ["function", ""] } }], c: "Line 5 calls `add(5, 7)`. Python pauses this line and **jumps into the function**." },
      { l: 1, sc: [{ n: "Global", v: { add: ["function", ""] } }, { n: "Inside add()", v: { a: ["5", "int"], b: ["7", "int"] }, chg: ["a", "b"] }], c: "The arguments are copied into the parameters: `a = 5`, `b = 7`. These are **local** variables. They only exist inside this call." },
      { l: 2, sc: [{ n: "Global", v: { add: ["function", ""] } }, { n: "Inside add()", v: { a: ["5", "int"], b: ["7", "int"], result: ["12", "int"] }, chg: ["result"] }], c: "The body runs: `result` is 12." },
      { l: 3, sc: [{ n: "Global", v: { add: ["function", ""] } }, { n: "Inside add()", v: { a: ["5", "int"], b: ["7", "int"], result: ["12", "int"] } }], c: "`return result` sends 12 back to the line that called the function, and the function ends." },
      { l: 5, sc: [{ n: "Global", v: { add: ["function", ""], total: ["12", "int"] }, chg: ["total"] }], c: "Back on line 5, `add(5, 7)` is replaced by 12, so `total = 12`. The local variables `a`, `b` and `result` are gone." },
      { l: 6, o: "Total: 12\n", sc: [{ n: "Global", v: { add: ["function", ""], total: ["12", "int"] } }], c: "Line 6 prints the total." }
    ]}},
    { t: "h3", text: "print vs return" },
    { t: "p", b: "Your course notebook has a whole cell on this, because it is the most common functions mistake." },
    { t: "cmp", l: { h: "`print()` inside a function", items: ["**Shows** a value on the screen", "The caller gets **nothing** back (`None`)", "Good for messages to a human"], c: R`
def double(n):
    print(n * 2)

result = double(4)
print(result)`, o: R`
8
None` }, r: { h: "`return` inside a function", items: ["**Gives** the value back to the caller", "Nothing appears on screen by itself", "Good for results you want to use later"], c: R`
def double(n):
    return n * 2

result = double(4)
print(result + 1)`, o: R`9` } },
    { t: "note", k: "key", b: "A function with no `return` (or a bare `return`) gives back `None`. If you see `None` printed where you expected a number, you probably used `print` instead of `return` inside the function." },
    { t: "note", k: "trap", h: "Trap! Code after return never runs", b: "`return` ends the function immediately. In the course's `check_age` example, the print after each `return` is never reached.", c: R`
def check_age(age):
    if age >= 18:
        return True
        print("Hi, you're an adult")     # never runs
    else:
        return False

print(check_age(21))`, o: R`True` },
    { t: "code", ttl: "Using a returned value to make a decision (course notebook)", c: R`
def check_age(age):
    return age >= 18

if check_age(21):
    print("Make a choice: 1 to vote, 2 to play outdoor games")
else:
    print("Make a choice: 1 to learn alphabets, 2 to play indoor games")`, o: R`Make a choice: 1 to vote, 2 to play outdoor games` },
    { t: "pred", chk: 1, c: R`
def f(x):
    if x > 0:
        return "positive"
    return "not positive"

print(f(5), f(-2))`, o: ["`positive not positive`", "`positive positive`", "`not positive`", "`None None`"], a: 0, e: "f(5) returns at the first return. f(-2) skips the if and reaches the second return." },
    { t: "h", text: "Default values and keyword arguments" },
    { t: "p", b: "A ==default value== is used when the caller leaves that argument out. A ==keyword argument== passes a value by naming the parameter, so the order does not matter." },
    { t: "code", ttl: "From your course notebook", c: R`
def multiply(a=1, b=1):
    product = a * b
    print(f"The product of {a} and {b} is {product}")

multiply(5, 11)          # positional: a=5, b=11
multiply(b=100, a=20)    # keyword: any order
multiply(34)             # b uses its default, 1
multiply()               # both use defaults`, o: R`
The product of 5 and 11 is 55
The product of 20 and 100 is 2000
The product of 34 and 1 is 34
The product of 1 and 1 is 1` },
    { t: "code", ttl: "From the PDF", c: R`
def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Aman")

def intro(name, age):
    print(name, "is", age, "years old.")

intro(age=21, name="Rahul")`, o: R`
Hello Guest
Hello Aman
Rahul is 21 years old.` },
    { t: "note", k: "trap", h: "Trap! Defaults go last", b: "Parameters with defaults must come **after** parameters without defaults.", c: R`
def bill(tax=0.18, amount):
    pass`, o: R`SyntaxError: parameter without a default follows parameter with a default`, err: true },
    { t: "note", k: "tip", b: "When you call with both styles, positional arguments must come first: `bill(500, tax=0.05)` works, `bill(tax=0.05, 500)` does not." },
    { t: "h", text: "Returning several values" },
    { t: "code", c: R`
def bill_summary(prices, tax_rate=0.18):
    subtotal = sum(prices)
    tax = round(subtotal * tax_rate, 2)
    return subtotal, tax, subtotal + tax      # packed into a tuple

sub, tax, total = bill_summary([120, 45, 80])  # unpacked
print(sub, tax, total)`, o: R`245 44.1 289.1` },
    { t: "h", text: "Docstrings and help()" },
    { t: "p", b: "A ==docstring== is a triple-quoted string on the first line inside a function, right under `def`. It explains what the function does. `help()` shows it, and Jupyter shows it when you press **Shift + Tab** inside the brackets." },
    { t: "code", c: R`
def area_of_circle(radius):
    """Return the area of a circle with the given radius."""
    return 3.14159 * radius ** 2

print(area_of_circle(2))
print(area_of_circle.__doc__)`, o: R`
12.56636
Return the area of a circle with the given radius.` },
    { t: "h", text: "Built-in vs your own functions" },
    { t: "table", head: ["Built-in functions", "User-defined functions"], rows: [
      ["Come with Python: `print`, `len`, `sum`, `max`, `sorted`, `round`, `type`...", "Written by you with `def`"],
      ["Just call them", "Define first, then call"],
      ["`len(\"Data Analytics\")` gives 14", "`grade_system(63)` gives \"C\""]
    ]},
    { t: "code", ttl: "A grade function, used in a loop (course notebook)", c: R`
def grade_system(marks):
    if marks > 90:
        return "A+"
    elif marks > 75:
        return "A"
    elif marks > 65:
        return "B"
    elif marks > 55:
        return "C"
    elif marks > 45:
        return "D"
    elif marks > 33:
        return "E"
    else:
        return "Fail"

for m in [95, 63, 30]:
    print(m, grade_system(m))`, o: R`
95 A+
63 C
30 Fail` },
    { t: "deck", title: "Writing a good function in 5 steps", s: [
      { big: "Good functions do one job, have a clear name, and return their result." },
      { h: "1. Name it with a verb", b: "Say what it does: `calculate_total`, `clean_name`, `is_weekend`. Avoid `func1` or `do_stuff`." },
      { h: "2. Decide the inputs", b: "What does it need to do its job? Those are the parameters. Give sensible defaults where you can.", c: R`def calculate_total(prices, tax_rate=0.18):` },
      { h: "3. Write the body and return the answer", c: R`
def calculate_total(prices, tax_rate=0.18):
    """Return the total of prices plus tax."""
    subtotal = sum(prices)
    return round(subtotal * (1 + tax_rate), 2)

print(calculate_total([100, 200]))`, o: R`354.0` },
      { h: "4. Test with a few inputs", b: "Try a normal case, an edge case (an empty list), and a different tax rate.", c: R`
def calculate_total(prices, tax_rate=0.18):
    subtotal = sum(prices)
    return round(subtotal * (1 + tax_rate), 2)

print(calculate_total([100, 200]))
print(calculate_total([]))
print(calculate_total([100], tax_rate=0.05))`, o: R`
354.0
0.0
105.0` },
      { h: "5. Reuse it everywhere", b: "Now every bill in your program uses the same tested logic. If GST changes, you change one default value." }
    ]},
    { t: "prac", items: [
      { q: "Write `even_odd(n)` that **returns** \"EVEN\" or \"ODD\". Print the result for 21 and 56.", sol: R`
def even_odd(n):
    if n % 2 == 0:
        return "EVEN"
    return "ODD"

print(21, even_odd(21))
print(56, even_odd(56))`, out: R`
21 ODD
56 EVEN` },
      { q: "Write `apply_discount(price, percent=10)` that returns the discounted price. Test it with and without a percent.", sol: R`
def apply_discount(price, percent=10):
    return price - price * percent / 100

print(apply_discount(500))
print(apply_discount(500, 25))`, out: R`
450.0
375.0` },
      { q: "Write `bmi(weight_kg, height_m)` that returns the BMI rounded to 1 decimal (weight divided by height squared). Then print a label using the course's BMI rules.", sol: R`
def bmi(weight_kg, height_m):
    return round(weight_kg / height_m ** 2, 1)

value = bmi(70, 1.75)
if 18 < value < 25:
    label = "Healthy"
elif value >= 25:
    label = "Overweight"
else:
    label = "Underweight"
print(value, label)`, out: R`22.9 Healthy` },
      { q: "Write `stats(nums)` that returns the minimum, maximum and average of a list. Unpack the result.", sol: R`
def stats(nums):
    return min(nums), max(nums), sum(nums) / len(nums)

low, high, avg = stats([12000, 15000, 18000, 14000])
print(low, high, avg)`, out: R`12000 18000 14750.0` }
    ]}
  ],
  take: [
    "`def name(params):` creates a function. It runs only when called: `name(args)`.",
    "Parameters are the names in the definition. Arguments are the values you pass.",
    "`return` gives a value back and ends the function. No return means `None`.",
    "`print` shows. `return` hands back. Use return for results you want to use.",
    "Defaults: `def f(a, b=1)`. Keyword arguments: `f(b=2, a=1)`. Defaults go last."
  ],
  quiz: [
    { q: "What keyword starts a function definition?", o: ["`function`", "`def`", "`fun`", "`define`"], a: 1, e: "Python uses `def`." },
    { q: "In `def greet(name):` and `greet(\"Asha\")`, what is \"Asha\"?", o: ["A parameter", "An argument", "A docstring", "A return value"], a: 1, e: "The value passed in a call is an argument. `name` is the parameter." },
    { q: "What does this print?", c: R`
def f():
    print("hi")

x = f()
print(x)`, o: ["`hi` then `hi`", "`hi` then `None`", "`None`", "An error"], a: 1, chk: 0, e: "The function prints \"hi\" and returns nothing, so x is None." },
    { q: "What does this print?", c: R`
def add(a, b=10):
    return a + b

print(add(5))`, o: ["`5`", "`15`", "`10`", "An error"], a: 1, chk: 1, e: "b uses its default value of 10." },
    { q: "What does this print?", c: R`
def area(w, h):
    return w * h

print(area(h=2, w=5))`, o: ["`10`", "`7`", "`25`", "An error"], a: 0, chk: 1, e: "Keyword arguments match by name, so order does not matter." },
    { q: "What happens after a `return` line runs?", o: ["The next line in the function runs", "The function ends and sends the value back", "The program stops", "Python returns to the top of the function"], a: 1, e: "return immediately ends the function." },
    { q: "Which definition is valid?", o: ["`def f(a=1, b):`", "`def f(a, b=1):`", "`def f(a=1, b, c=2):`", "`def f(=1, b):`"], a: 1, e: "Parameters without defaults must come before parameters with defaults." },
    { q: "What does this print?", c: R`
def mm(nums):
    return min(nums), max(nums)

lo, hi = mm([4, 9, 1])
print(hi - lo)`, o: ["`8`", "`5`", "`(1, 9)`", "An error"], a: 0, chk: 1, e: "The function returns (1, 9). 9 - 1 = 8." },
    { q: "What does `help(my_function)` show?", o: ["The source code", "The function's docstring", "Its return value", "Nothing"], a: 1, e: "help() displays the docstring, the triple-quoted text at the top of the function." }
  ],
  cards: [
    ["Syntax to define and call a function", "", R`
def greet(name):
    return "Hello " + name

print(greet("Asha"))`],
    ["Parameter vs argument", "Parameter: the name in the `def` line. Argument: the actual value passed in the call."],
    ["What does `return` do?", "Sends a value back to the caller and **ends** the function immediately."],
    ["What does a function return if it has no `return`?", "`None`."],
    ["print vs return", "`print` shows a value on screen. `return` gives it back so you can store or use it."],
    ["What is a default parameter?", "A value used when the caller leaves the argument out: `def greet(name=\"Guest\")`."],
    ["What is a keyword argument?", "Passing a value by naming the parameter: `intro(age=21, name=\"Rahul\")`. Order does not matter."],
    ["How do you return two values?", "`return a, b` returns a tuple. Unpack with `x, y = f()`."],
    ["What is a docstring?", "A triple-quoted description on the first line inside a function, right under `def`. Shown by `help()`."],
    ["Why might you get `NameError` when calling your function?", "You called it before the `def` line ran (or there is a typo in the name)."]
  ],
  cheat: [
    ["def f(a, b):\n    return a + b", "Define a function"],
    ["f(2, 3)", "Call it"],
    ["def f(name=\"Guest\"):", "Default value"],
    ["f(b=2, a=1)", "Keyword arguments"],
    ["return x, y", "Return two values (a tuple)"],
    ["\"\"\"What it does.\"\"\"", "Docstring, first line of the body"],
    ["help(f)", "Show the docstring"]
  ]
});
