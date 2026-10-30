/* ---------- Part 8: Whole-course overview ---------- */
overview({
  part: 8, title: "The whole course on one page", nav: "Whole-course overview", time: "40 min",
  fiveTitle: "The whole course in 5 lines",
  keys: "course summary revision all topics data types collections functions errors files modules classes numpy projects which tool mix-ups",
  lead: "Everything from Part 1 to Part 8 in one place. You get the key definitions, one table per big idea, the right tool for each job, and the mix-ups that cost the most marks. Use it the night before an exam or an interview.",
  five: [
    "**Basics (Parts 1–2):** values have types, variables name them, operators combine them, and `if`, `for` and `while` decide what runs and how often.",
    "**Collections (Part 3):** text goes in a string, and a changing ordered group in a list. A fixed record goes in a tuple, unique items in a set, and lookups by name in a dict.",
    "**Functions (Part 4):** wrap each job in a `def` that takes parameters and `return`s a result you can reuse.",
    "**Real-world tools (Parts 5–6):** catch bad input with `try / except`, save data to files, import modules, and model real things with classes.",
    "**NumPy and projects (Parts 7–8):** arrays do fast maths on whole datasets, and every program is data structures plus functions plus a loop."
  ],
  body: [
    { t: "h", text: "Mind map of the whole course" },
    { t: "mm", title: "The course at a glance", root: "Python for analysts", hint: "Tap a Part to open its overview, or a leaf to open a chapter", kids: [
      { t: "Part 1: Basics", go: "overview1", k: [{ t: "Meet Python", go: "intro" }, { t: "Variables & types", go: "variables" }, { t: "Printing & f-strings", go: "output" }, { t: "Operators", go: "operators" }] },
      { t: "Part 2: Decide & loop", go: "overview2", k: [{ t: "if / elif / else", go: "conditions" }, { t: "for loops & range", go: "forloops" }, { t: "while, break, continue", go: "whileloops" }] },
      { t: "Part 3: Collections", go: "overview3", k: [{ t: "Strings", go: "strings" }, { t: "Lists", go: "lists" }, { t: "Tuples", go: "tuples" }, { t: "Sets", go: "sets" }, { t: "Dictionaries", go: "dicts" }, { t: "Comprehensions", go: "comprehensions" }] },
      { t: "Part 4: Functions", go: "overview4", k: [{ t: "Function basics", go: "functions" }, { t: "Advanced tools", go: "functions2" }] },
      { t: "Part 5: Real-world", go: "overview5", k: [{ t: "Errors & try/except", go: "errors" }, { t: "Files, CSV, JSON", go: "files" }, { t: "Modules & libraries", go: "modules" }] },
      { t: "Part 6: OOP", go: "overview6", k: [{ t: "Classes & objects", go: "oop" }] },
      { t: "Part 7: NumPy", go: "overview7", k: [{ t: "Arrays", go: "numpy1" }, { t: "Maths, axis, filters", go: "numpy2" }, { t: "Split, random, ufuncs", go: "numpy3" }] },
      { t: "Part 8: Projects", go: "projects", k: [{ t: "Movie tickets", go: "projects" }, { t: "Supermarket billing", go: "projects" }, { t: "Inventory system", go: "projects" }] }
    ]},

    { t: "h", text: "The 16 definitions that matter most" },
    { t: "p", b: "If you can explain each of these in one sentence and write the tiny example, you know the course. Each card links to the Part overview with the full comparison tables." },
    { t: "defs", items: [
      { t: "Variable", d: "A name that points at a value.", c: R`
price = 250
print(price * 2)`, o: R`500`, go: "overview1" },
      { t: "Data type", d: "The kind of value: `int`, `float`, `str`, `bool`, `None`, or a collection.", c: R`print(type(3), type(3.0), type("3"))`, o: R`<class 'int'> <class 'float'> <class 'str'>`, go: "overview1" },
      { t: "Operator", d: "A symbol that does work on values: maths, comparisons, logic.", c: R`print(7 // 2, 7 % 2, 7 > 2 and 2 > 7)`, o: R`3 1 False`, go: "overview1" },
      { t: "Condition", d: "An expression that is `True` or `False`, used by `if` and `while` to decide what runs.", c: R`
marks = 72
print("Pass" if marks >= 40 else "Fail")`, o: R`Pass`, go: "overview2" },
      { t: "Loop", d: "Repeats a block: `for` once per item, `while` until a condition becomes False.", c: R`
for n in range(1, 4):
    print(n * n, end=" ")`, o: R`1 4 9`, go: "overview2" },
      { t: "String", d: "An ordered, immutable sequence of characters.", c: R`print("asha@x.com".split("@")[1])`, o: R`x.com`, go: "overview3" },
      { t: "List", d: "An ordered, mutable collection that allows duplicates.", c: R`
cart = ["rice"]
cart.append("dal")
print(cart)`, o: R`['rice', 'dal']`, go: "overview3" },
      { t: "Tuple", d: "An ordered, immutable collection: a fixed record.", c: R`
lat, lon = (17.38, 78.48)
print(lon)`, o: R`78.48`, go: "overview3" },
      { t: "Set", d: "An unordered collection of unique items.", c: R`print(len({"Pune", "Delhi", "Pune"}))`, o: R`2`, go: "overview3" },
      { t: "Dictionary", d: "Key: value pairs, looked up by key.", c: R`
stock = {"pen": 40}
print(stock.get("ink", 0))`, o: R`0`, go: "overview3" },
      { t: "Function", d: "A named block that takes parameters and returns a result.", c: R`
def tax(amount, rate=0.18):
    return round(amount * rate, 2)

print(tax(500))`, o: R`90.0`, go: "overview4" },
      { t: "Exception", d: "An error that happens while the code runs. `try / except` catches it.", c: R`
try:
    int("ten")
except ValueError:
    print("not a number")`, o: R`not a number`, go: "overview5" },
      { t: "File", d: "Data saved outside your program, opened with `with open(name, mode) as f:`.", c: R`
with open("note.txt", "w") as f:
    f.write("saved")
print(open("note.txt").read())`, o: R`saved`, go: "overview5" },
      { t: "Module", d: "A `.py` file of reusable code that you `import`.", c: R`
from statistics import mean
print(mean([4, 8, 6]))`, o: R`6`, go: "overview5" },
      { t: "Class and object", d: "A class is a blueprint. An object is one thing built from it, with its own data and methods.", c: R`
class Item:
    def __init__(self, name, price):
        self.name, self.price = name, price

pen = Item("pen", 10)
print(pen.name, pen.price)`, o: R`pen 10`, go: "overview6" },
      { t: "NumPy array", d: "A grid of values of one type that does maths on every value at once.", c: R`
import numpy as np
print(np.array([10, 20, 30]).mean())`, o: R`20.0`, go: "overview7" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "The whole course in one table", head: ["Part", "The big idea", "Key syntax", "The mistake most people make"], rows: [
      ["**1. Basics**", "Values, types, variables, printing and operators", "`x = 5`, `type(x)`, `f\"{x:.2f}\"`, `/ // %`", "Doing maths on text from `input()`, or `=` instead of `==`"],
      ["**2. Decide & loop**", "Choose a path, repeat work", "`if / elif / else`, `for x in items:`, `while cond:`", "Forgetting that `range(1, 10)` stops at 9, and a `while` loop that never ends"],
      ["**3. Collections**", "Hold many values in the right container", "`\"\"`, `[]`, `()`, `set()`, `{}`", "`{}` is a dict, `x = lst.sort()` is `None`, `b = a` is not a copy"],
      ["**4. Functions**", "Write a job once, use it everywhere", "`def f(a, b=1, *args, **kwargs): return …`", "Printing instead of returning, and a list as a default value"],
      ["**5. Real-world**", "Handle errors, save files, reuse modules", "`try / except`, `with open(...)`, `import x as y`", "Opening with `\"w\"` and wiping the file, or a bare `except:` that hides bugs"],
      ["**6. OOP**", "Bundle data and actions into objects", "`class C:`, `__init__(self)`, `self.x`, `class Child(Parent):`", "Forgetting `self`, or a shared list as a class attribute"],
      ["**7. NumPy**", "Fast maths on whole arrays", "`np.array`, `a.sum(axis=0)`, `a[a > 5]`", "Mixing up `axis=0` and `axis=1`, and `and` instead of `&`"],
      ["**8. Projects**", "Data structure + functions + a menu loop", "`while True:` menu, `pickle` or `json` to save", "Building the menu before the functions work, and no `try` around `input()`"]
    ]},
    { t: "table", master: true, title: "Every data type in the course", head: ["Type", "Example", "Changeable?", "Ordered?", "Duplicates?", "Use it for"], rows: [
      ["`int`", "`42`", "[[no:No]]", "–", "–", "Counts, quantities, IDs"],
      ["`float`", "`3.14`", "[[no:No]]", "–", "–", "Prices, averages, percentages"],
      ["`bool`", "`True`", "[[no:No]]", "–", "–", "Yes/no flags, conditions"],
      ["`None`", "`None`", "[[no:No]]", "–", "–", "\"No value yet\""],
      ["`str`", "`\"Asha\"`", "[[no:No]]", "[[ok:Yes]]", "[[ok:Yes]]", "Text"],
      ["`list`", "`[82, 67]`", "[[ok:Yes]]", "[[ok:Yes]]", "[[ok:Yes]]", "An ordered group that changes"],
      ["`tuple`", "`(17.38, 78.48)`", "[[no:No]]", "[[ok:Yes]]", "[[ok:Yes]]", "Fixed records, dict keys"],
      ["`set`", "`{\"Pune\", \"Delhi\"}`", "[[ok:Yes]]", "[[no:No]]", "[[no:No]]", "Unique items, fast `in` checks"],
      ["`dict`", "`{\"tea\": 20}`", "[[ok:Yes]]", "[[ok:Yes]] (insertion order)", "Keys [[no:No]]", "Look-ups by name or ID"],
      ["NumPy `ndarray`", "`np.array([1, 2, 3])`", "[[ok:Yes]] values, fixed size", "[[ok:Yes]]", "[[ok:Yes]]", "Fast maths on many numbers"]
    ]},
    { t: "table", master: true, title: "Which tool for which job?", head: ["I want to…", "Use", "Example"], rows: [
      ["Store one value", "A variable", "`total = 0`"],
      ["Choose between paths", "`if / elif / else`", "`if marks >= 40: …`"],
      ["Repeat for every item", "`for`", "`for row in rows:`"],
      ["Repeat until something happens", "`while`", "`while balance > 0:`"],
      ["Keep and clean text", "A string and its methods", "`name.strip().title()`"],
      ["Keep an ordered group that changes", "A list", "`cart.append(\"oil\")`"],
      ["Keep a fixed record", "A tuple", "`point = (3, 4)`"],
      ["Keep only unique items", "A set", "`set(emails)`"],
      ["Look things up by name or ID", "A dictionary", "`prices[\"tea\"]`"],
      ["Count how often things appear", "A dict with `get`, or `Counter`", "`counts[w] = counts.get(w, 0) + 1`"],
      ["Build a new list from an old one", "A comprehension", "`[p * 0.9 for p in prices]`"],
      ["Reuse a piece of logic", "A function", "`def tax(amount): …`"],
      ["Survive bad input", "`try / except`", "`except ValueError:`"],
      ["Save data for next time", "A file: CSV, JSON or pickle", "`json.dump(data, f)`"],
      ["Use code someone else wrote", "`import`", "`import numpy as np`"],
      ["Model a real thing with data and actions", "A class", "`class BankAccount:`"],
      ["Do maths on lots of numbers", "A NumPy array", "`sales.sum(axis=0)`"]
    ]},
    { t: "table", master: true, title: "The top mix-ups of the whole course", head: ["Pair", "The difference in one line", "Full table in"], rows: [
      ["`=` vs `==`", "`=` stores a value. `==` compares two values", "Part 1 overview"],
      ["`/` vs `//` vs `%`", "Float answer, whole groups, remainder", "Part 1 overview"],
      ["`int()` vs `round()`", "`int()` cuts decimals off. `round()` goes to the nearest", "Part 1 overview"],
      ["`for` vs `while`", "`for` walks through items. `while` repeats until a condition is False", "Part 2 overview"],
      ["`break` vs `continue`", "`break` leaves the loop. `continue` skips to the next round", "Part 2 overview"],
      ["String vs tuple", "Both are ordered and immutable. A string holds only characters, a tuple holds anything", "Part 3 overview"],
      ["List vs tuple", "A list can change. A tuple is locked", "Part 3 overview"],
      ["`{}` vs `set()`", "`{}` is an empty dict. `set()` is an empty set", "Part 3 overview"],
      ["`sort()` vs `sorted()`", "`sort()` changes the list and returns `None`. `sorted()` returns a new list", "Part 3 overview"],
      ["`d[k]` vs `d.get(k)`", "`d[k]` raises KeyError when missing. `get` returns `None` or a default", "Part 3 overview"],
      ["`print` vs `return`", "`print` shows text. `return` hands the value back", "Part 4 overview"],
      ["Parameter vs argument", "Name in the `def` line vs value in the call", "Part 4 overview"],
      ["Local vs global", "Inside one function vs everywhere in the file", "Part 4 overview"],
      ["Syntax error vs exception", "Broken grammar, nothing runs vs a failure while running", "Part 5 overview"],
      ["`\"w\"` vs `\"a\"`", "`\"w\"` wipes the file. `\"a\"` adds to the end", "Part 5 overview"],
      ["Class vs object", "The blueprint vs one thing built from it", "Part 6 overview"],
      ["`axis=0` vs `axis=1`", "Down the rows (per column) vs across (per row)", "Part 7 overview"],
      ["`and` vs `&`", "`and` for single True/False values. `&` for arrays, with brackets", "Part 7 overview"]
    ], cap: "Open Overviews in the sidebar and search any of these pairs to jump straight to its full table." },
    { t: "fig", svg: V.flow([
      { t: "Load saved data\n(try / except FileNotFoundError)" },
      { t: "Show the menu" },
      { t: "choice = input(\"Choose: \")", code: 1 },
      { t: "Quit?", d: true, k: "hl", lbl: "no" },
      { t: "Run the function\nfor that choice", k: "tip" }
    ], { side: [{ from: 3, t: "Save data, then break", k: "acc", lbl: "yes" }], back: [{ from: 4, to: 1, lbl: "loop" }], label: "The shape of every project" }), cap: "The shape of every project in Part 8: load, loop over a menu, run one function per choice, save on the way out." },

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "A script vs functions vs a class", head: ["", "Script", "Functions", "Class"], rows: [
      ["Looks like", "Lines that run top to bottom", "Each job in its own `def`", "Data and the functions that use it, together"],
      ["Reuse", "Copy and paste", "Call it again with new values", "Make as many objects as you like"],
      ["Best for", "A quick, one-off calculation", "Most analysis code", "Things with state: a cart, an account, an inventory"]
    ], c: R`
# 1. Script: straight lines
items = {"tea": 20, "samosa": 15}
print(sum(items.values()))

# 2. Function: reusable
def bill(items):
    return sum(items.values())

print(bill({"tea": 20, "samosa": 15}))

# 3. Class: data + actions together
class Cart:
    def __init__(self):
        self.items = {}
    def add(self, name, price):
        self.items[name] = price
    def total(self):
        return sum(self.items.values())

c = Cart()
c.add("tea", 20)
c.add("samosa", 15)
print(c.total())`, o: R`
35
35
35`, rule: "Start with a script. When you copy code a second time, make it a function. When several functions share the same data, make it a class." },
    { t: "vs", title: "A dict of dicts vs a list of dicts", head: ["", "Dict of dicts", "List of dicts"], rows: [
      ["Shape", "`{\"B1\": {...}, \"B2\": {...}}`", "`[{\"id\": \"B1\", ...}, {...}]`"],
      ["Find one record by ID", "Instant: `books[\"B2\"]`", "Loop until you find it"],
      ["Keeps a meaningful order", "Insertion order only", "Yes, and easy to sort"],
      ["Use it for", "The \"database\" in a project: stock, accounts", "Rows from a CSV, a history or log"]
    ], c: R`
by_id = {"B1": {"title": "Atomic Habits", "copies": 2},
         "B2": {"title": "Ikigai", "copies": 0}}
as_list = [{"id": "B1", "title": "Atomic Habits", "copies": 2},
           {"id": "B2", "title": "Ikigai", "copies": 0}]
print(by_id["B2"]["title"])
print([b["title"] for b in as_list if b["copies"] > 0])`, o: R`
Ikigai
['Atomic Habits']`, rule: "Look-ups by ID: dict of dicts. Rows you loop over, filter and sort: list of dicts." },
    { t: "vs", title: "`input()` inside a function vs passing values in", head: ["", "`input()` inside", "Values passed in"], rows: [
      ["Test it", "You must type every time", "Call it with fixed values in one line"],
      ["Reuse it", "Only from the keyboard", "From a menu, a file, a loop or a test"],
      ["Verdict", "[[warn:Hard to test]]", "[[ok:Better]]"]
    ], c: R`
def ticket_price(age):          # easy to test
    return 100 if age < 12 else 200

print(ticket_price(8), ticket_price(30))
# age = int(input("Age: "))     # add input() only at the very end`, o: R`100 200`, rule: "Make the functions work with fixed values first. Add `input()` and the menu last." },
    { t: "vs", title: "Python list vs NumPy array vs pandas DataFrame", head: ["", "List", "NumPy array", "pandas DataFrame (next step)"], rows: [
      ["Holds", "Anything, mixed", "Numbers of one type", "A table: named columns, each with its own type"],
      ["Labels", "Positions only", "Positions only", "Column names and row labels"],
      ["Maths", "Write a loop", "On the whole array at once", "On whole columns at once"],
      ["Best for", "Small, mixed collections", "Number crunching", "Real datasets from CSV, Excel or SQL"]
    ], rule: "Everything you learnt about lists, dicts, masks and `axis` carries straight over to pandas." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "Each task is a small piece of a real program, so it mixes several Parts at once. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "`book = {\"Asha\": [82, 91], \"Ravi\": [67, 58], \"Neha\": [95, 88]}`. Write `average(name)` and print a report sorted from the highest average, like `Neha: 91.5`.", hint: "`sum(marks) / len(marks)` inside the function. Then `sorted(book, key=average, reverse=True)` and an f-string.", starter: "book = {\"Asha\": [82, 91], \"Ravi\": [67, 58], \"Neha\": [95, 88]}\n", sol: R`
book = {"Asha": [82, 91], "Ravi": [67, 58], "Neha": [95, 88]}

def average(name):
    marks = book[name]
    return sum(marks) / len(marks)

for name in sorted(book, key=average, reverse=True):
    print(f"{name}: {average(name)}")`, out: R`
Neha: 91.5
Asha: 86.5
Ravi: 62.5`, why: "A dict holds the data, a function does one job, `sorted()` with `key=` orders the names, and an f-string prints the report." },
      { q: "Make the gradebook survive a restart: save `book` to `book.json`, then write `load_book()` that returns the saved data, or `{}` if the file does not exist yet. Print `load_book()[\"Asha\"]`.", hint: "`json.dump` with `\"w\"`. In `load_book`, put `json.load` in a `try` and catch `FileNotFoundError`.", starter: "import json\nbook = {\"Asha\": [82, 91]}\n", sol: R`
import json
book = {"Asha": [82, 91]}
with open("book.json", "w") as f:
    json.dump(book, f)

def load_book():
    try:
        with open("book.json") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

print(load_book()["Asha"])`, out: R`[82, 91]`, why: "This is exactly how the Part 8 projects start: try to load the saved data, and fall back to an empty one on the very first run." },
      { q: "Write a `Stock` class with `add(item, qty)`, `remove(item, qty)` (print `Not enough pen` if there is too little) and `low(limit)` that returns a sorted list of items below the limit. Test it to print `Not enough pen` and then `['ink', 'pen']`.", hint: "Keep a dict in `self.items`. Use `self.items.get(item, 0)` so new items start at 0.", sol: R`
class Stock:
    def __init__(self):
        self.items = {}

    def add(self, item, qty):
        self.items[item] = self.items.get(item, 0) + qty

    def remove(self, item, qty):
        if self.items.get(item, 0) < qty:
            print(f"Not enough {item}")
        else:
            self.items[item] -= qty

    def low(self, limit):
        return sorted(k for k, v in self.items.items() if v < limit)

s = Stock()
s.add("pen", 5)
s.add("ink", 2)
s.add("pad", 20)
s.remove("pen", 9)
s.remove("pen", 1)
print(s.low(5))`, out: R`
Not enough pen
['ink', 'pen']`, why: "A class keeps the stock and the rules together. Inside, it uses a dict, `get`, an `if`, and a sorted comprehension: Parts 2 to 6 in one small object." },
      { q: "A week of sales: `sales = np.array([120, 340, 90, 410, 260, 380, 150])` and `days = np.array([\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"])`. Print the best day, the average and the days above average.", hint: "`days[sales.argmax()]`, `sales.mean()` and the mask `sales > sales.mean()` used on `days`.", starter: "import numpy as np\nsales = np.array([120, 340, 90, 410, 260, 380, 150])\ndays = np.array([\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"])\n", sol: R`
import numpy as np
sales = np.array([120, 340, 90, 410, 260, 380, 150])
days = np.array(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
avg = sales.mean()
print("Best day:", days[sales.argmax()])
print("Average:", round(avg, 1))
print("Above average:", days[sales > avg])`, out: R`
Best day: Thu
Average: 250.0
Above average: ['Tue' 'Thu' 'Fri' 'Sat']`, why: "`argmax` finds the position, the mask filters a second array of the same length, and no loop is needed." }
    ]}
  ],
  quiz: [
    { q: "What does this print?", c: R`print(type(print))`, o: ["`<class 'str'>`", "`<class 'builtin_function_or_method'>`", "`<class 'NoneType'>`", "An error"], a: 1, chk: 1, e: "Without brackets, `print` is the built-in function itself. Calling `print()` runs it, and what it gives back is `None`." },
    { q: "What does this print?", c: R`print(10 / 4, 10 // 4, 10 % 4)`, o: ["`2.5 2 2`", "`2 2 2`", "`2.5 2.5 2`", "`2.5 2 0.5`"], a: 0, chk: 1, e: "`/` gives a float, `//` the whole groups and `%` the remainder." },
    { q: "What does this print?", c: R`print(list(range(3, 0, -1)))`, o: ["`[3, 2, 1]`", "`[3, 2, 1, 0]`", "`[]`", "`[0, 1, 2, 3]`"], a: 0, chk: 1, e: "Counting down, the stop value 0 is still excluded." },
    { q: "You need to store each customer's ID with their details and find them fast. Which collection?", o: ["A list", "A tuple", "A set", "A dictionary"], a: 3, e: "Look-ups by a key such as an ID are exactly what dictionaries are for." },
    { q: "What does this print?", c: R`
items = ["b", "a", "c"]
result = items.sort()
print(result, items)`, o: ["`['a', 'b', 'c'] ['a', 'b', 'c']`", "`None ['a', 'b', 'c']`", "`None ['b', 'a', 'c']`", "An error"], a: 1, chk: 1, e: "`sort()` sorts the list itself and returns `None`." },
    { q: "What does this print?", c: R`
def f(x):
    x.append(1)

a = []
f(a)
f(a)
print(a)`, o: ["`[]`", "`[1]`", "`[1, 1]`", "An error"], a: 2, chk: 1, e: "The function gets the same list object, so both calls change `a`." },
    { q: "What does this print?", c: R`print({n % 3 for n in range(10)})`, o: ["`{0, 1, 2}`", "`[0, 1, 2]`", "`{0, 1, 2, 0, 1, 2, 0, 1, 2, 0}`", "`{3}`"], a: 0, chk: 1, e: "A set comprehension keeps only the unique remainders." },
    { q: "Which line safely reads a key that may be missing?", o: ["`d[\"x\"]`", "`d.get(\"x\", 0)`", "`d.x`", "`d(\"x\")`"], a: 1, e: "`get` returns the default instead of raising a KeyError." },
    { q: "What does this print?", c: R`
try:
    print(int("7") + int("x"))
except ValueError:
    print("bad input")`, o: ["`7`", "`bad input`", "`7` then `bad input`", "A crash"], a: 1, chk: 1, e: "`int(\"x\")` fails before anything is printed, so Python jumps straight to the `except`." },
    { q: "Which file mode adds to the end of a file without wiping it?", o: ["`\"r\"`", "`\"w\"`", "`\"a\"`", "`\"x\"`"], a: 2, e: "`\"a\"` means append. `\"w\"` would empty the file first." },
    { q: "What does this print?", c: R`
class Box:
    def __init__(self, n):
        self.n = n
    def __str__(self):
        return f"Box({self.n})"

print(Box(3))`, o: ["`Box(3)`", "`<__main__.Box object>`", "`3`", "An error"], a: 0, chk: 1, e: "`print()` uses the class's `__str__` method." },
    { q: "What does this print?", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4]])
print(m.mean(axis=0))`, o: ["`[2. 3.]`", "`[1.5 3.5]`", "`2.5`", "`[4 6]`"], a: 0, chk: 1, e: "`axis=0` goes down each column: (1 + 3) / 2 = 2 and (2 + 4) / 2 = 3." },
    { q: "In a menu program, what is the usual way to keep showing the menu until the user quits?", o: ["`for i in range(100):`", "`while True:` with `break` when they choose quit", "Recursion", "An `if / elif` chain on its own"], a: 1, e: "That is the shape of every Part 8 project." },
    { q: "What does this print?", c: R`print([w.upper() for w in "to be or not".split() if len(w) == 2])`, o: ["`['TO', 'BE', 'OR']`", "`['to', 'be', 'or']`", "`['TO', 'BE', 'OR', 'NOT']`", "`'TO BE OR'`"], a: 0, chk: 1, e: "`split()` makes a list of words, the filter keeps the two-letter ones, and `upper()` changes each." }
  ],
  cards: [
    ["`=` vs `==`", "`=` stores a value in a name. `==` compares two values and gives True or False."],
    ["What type does `input()` always give?", "`str`. Convert it with `int()` or `float()` before doing maths."],
    ["`for` vs `while`", "`for` walks through items or a `range()`. `while` repeats until its condition becomes False."],
    ["The five collections in one line each", "String: text. List: ordered and changeable. Tuple: ordered and fixed. Set: unique, no order. Dict: key: value look-ups."],
    ["String vs tuple", "Both are ordered and immutable. A string holds only characters, a tuple holds any values as a fixed record."],
    ["Mutable vs immutable types", "Mutable: list, set, dict. Immutable: int, float, bool, str, tuple."],
    ["`print` vs `return`", "`print` shows text. `return` hands a value back so other code can use it."],
    ["`*args` vs `**kwargs`", "`*args` collects extra positional values into a tuple. `**kwargs` collects extra named values into a dict."],
    ["The `try` family", "`try` the risky line, `except` a named error, `else` when it worked, `finally` always."],
    ["Pick a file format", "Text for lines, CSV for tables, JSON for nested data, pickle for your own Python objects."],
    ["Class vs object", "A class is the blueprint. An object is one thing built from it."],
    ["The four pillars of OOP", "Encapsulation, inheritance, polymorphism, abstraction."],
    ["`axis=0` vs `axis=1`", "`axis=0`: down the rows, one result per column. `axis=1`: across, one result per row."],
    ["Filter a NumPy array with two conditions", "Use `&` or `|`, with brackets around each condition.", R`a[(a > 10) & (a < 20)]`],
    ["How do you build any small program?", "Choose the data structure, write one function per action, test with fixed values, then add the menu loop and save the data."]
  ]
});
