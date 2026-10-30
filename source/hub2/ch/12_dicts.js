chapter({
  id: "dicts", part: 3, title: "Dictionaries", nav: "Dictionaries", time: "60 min", lvl: "Beginner", tricky: true,
  keys: "dictionary dict key value get keys values items update pop popitem del setdefault nested dictionary comprehension counter grouping lookup keyerror",
  lead: "A dictionary stores data as **key: value** pairs, so you find things by name instead of by position. It is the shape of most real data: a customer record, a product, a row from a database.",
  goals: [
    "Create dictionaries and read values safely with `get()`",
    "Add, update and delete key-value pairs",
    "Loop with `keys()`, `values()` and `items()`",
    "Work with nested dictionaries, like the course's student and movie data",
    "Use the counting, grouping and lookup patterns"
  ],
  src: ["PDF: Python Advanced Data Types (Dictionaries)", "Course notebook dict_exp.ipynb", "W3Schools: Dictionaries and its sub-pages"],
  body: [
    { t: "h", text: "What is a dictionary?" },
    { t: "p", b: "A ==dictionary== (`dict`) is a collection of **key: value** pairs inside curly brackets. You look up a value by its **key**. It works like a real dictionary: you look up a word to find its meaning, or a name in your phone to find the number." },
    { t: "mm", title: "Dictionary mind map", root: "Dictionary", kids: [
      { t: "Create", k: ["{\"name\": \"Raman\"}", "dict(name=\"Raman\")", "dict(zip(keys, values))"] },
      { t: "Read", k: ["d[\"name\"]  (KeyError if missing)", "d.get(\"name\", default)"] },
      { t: "Change", k: ["d[\"age\"] = 17", "d.update(other)", "d.setdefault(k, v)"] },
      { t: "Delete", k: ["d.pop(k)", "del d[k]", "d.popitem(), d.clear()"] },
      { t: "Loop", k: ["for k in d", "d.values()", "for k, v in d.items()"] },
      { t: "Patterns", k: ["count things", "group things", "lookup table", "nested records"] }
    ]},
    { t: "code", ttl: "List vs dictionary, from your course notebook", c: R`
stu_details_list = ["Raman", 16, "X", True]     # what does 16 mean? you must remember

stu_details = {
    "name": "Raman",
    "age": 16,
    "class": "X",
    "isFeePaid": True,
}
print(stu_details_list[1])
print(stu_details["age"])                       # the key explains itself`, o: R`
16
16` },
    { t: "fig", svg: V.refs({ vars: [["\"name\"", 0], ["\"age\"", 1], ["\"class\"", 2], ["\"isFeePaid\"", 3]], objs: [{ v: "\"Raman\"", t: "str" }, { v: "16", t: "int" }, { v: "\"X\"", t: "str" }, { v: "True", t: "bool" }], objW: 170, label: "Each key points to its value" }), cap: "Keys on the left, values on the right. You always look up by key." },
    { t: "table", head: ["Rule", "Detail"], rows: [
      ["Keys are unique", "Use the same key twice and the **last** value wins"],
      ["Keys must be immutable", "Strings, numbers and tuples are fine. Lists are not"],
      ["Values can be anything", "Numbers, text, lists, even other dictionaries"],
      ["Ordered", "Since Python 3.7, items stay in the order you added them"],
      ["Mutable", "You can add, change and remove pairs"]
    ]},
    { t: "code", ttl: "Duplicate keys: the last one wins (course notebook)", c: R`
stu_details = {
    "name": "Raman",
    "name": "Rajeev",
    "age": 16,
}
print(stu_details)`, o: R`{'name': 'Rajeev', 'age': 16}` },
    { t: "h", text: "Creating dictionaries" },
    { t: "code", ttl: "From the PDF", c: R`
empty = {}
person = {"name": "John", "age": 30, "city": "New York"}
person_alt = dict(name="John", age=30, city="New York")
from_pairs = dict([("name", "John"), ("age", 30)])
from_zip = dict(zip(["a", "b", "c"], [1, 2, 3]))
squares = {x: x ** 2 for x in range(5)}

print(person == person_alt)
print(from_pairs)
print(from_zip)
print(squares)`, o: R`
True
{'name': 'John', 'age': 30}
{'a': 1, 'b': 2, 'c': 3}
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}` },
    { t: "h", text: "Reading values: [ ] vs get()" },
    { t: "code", c: R`
person = {"name": "John", "age": 30, "city": "New York"}
print(person["name"])
print(person.get("age"))
print(person.get("email"))                    # missing: gives None
print(person.get("email", "Not specified"))   # missing: gives your default`, o: R`
John
30
None
Not specified` },
    { t: "note", k: "trap", h: "Trap! KeyError", b: "Square brackets crash when the key is missing. Use `get()` when a key might not be there, or check first with `in`.", c: R`
person = {"name": "John"}
print(person["email"])`, o: R`KeyError: 'email'`, err: true },
    { t: "note", k: "trap", h: "Trap! in checks keys, not values", b: "`in` on a dictionary only looks at the **keys**.", c: R`
person = {"name": "John", "age": 30}
print("name" in person)
print("John" in person)
print("John" in person.values())`, o: R`
True
False
True` },
    { t: "h", text: "Adding, updating and removing" },
    { t: "p", b: "Assigning to a key **adds** it if it is new, or **updates** it if it already exists. Same syntax for both." },
    { t: "code", ttl: "From your course notebook", c: R`
stu = {"name": "Rajeev", "age": 16, "class": "X", "isFeePaid": True}

stu["mobNo"] = "9879879879"     # new key: added
stu["isFeePaid"] = False        # existing key: updated
print(stu)

del stu["age"]
print(stu)`, o: R`
{'name': 'Rajeev', 'age': 16, 'class': 'X', 'isFeePaid': False, 'mobNo': '9879879879'}
{'name': 'Rajeev', 'class': 'X', 'isFeePaid': False, 'mobNo': '9879879879'}` },
    { t: "code", ttl: "update(), pop(), popitem(), clear() (from the PDF)", c: R`
person = {"name": "John", "age": 30, "city": "New York"}
person.update({"phone": "123-456-7890", "age": 32})   # add and change at once
print(person)

phone = person.pop("phone")      # remove a key and get its value
print(phone)

last = person.popitem()          # remove the last added pair
print(last)
print(person)

person.clear()
print(person)`, o: R`
{'name': 'John', 'age': 32, 'city': 'New York', 'phone': '123-456-7890'}
123-456-7890
('city', 'New York')
{'name': 'John', 'age': 32}
{}` },
    { t: "h", text: "keys(), values(), items() and looping" },
    { t: "code", c: R`
person = {"name": "John", "age": 30, "city": "New York"}
print(person.keys())
print(person.values())
print(person.items())

for key in person:                  # looping a dict gives the keys
    print(key)

for key, value in person.items():   # the most useful loop
    print(f"{key}: {value}")`, o: R`
dict_keys(['name', 'age', 'city'])
dict_values(['John', 30, 'New York'])
dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])
name
age
city
name: John
age: 30
city: New York` },
    { t: "note", k: "tip", b: "`keys()`, `values()` and `items()` are **live views**. If you add a key later, a view you saved earlier shows it too. Wrap in `list()` if you need a fixed snapshot: `list(person.keys())`." },
    { t: "code", ttl: "setdefault and copy", c: R`
person = {"name": "John"}
phone = person.setdefault("phone", "000")   # adds the key only if missing
print(phone, person)

backup = person.copy()                      # same aliasing rules as lists
backup["name"] = "Changed"
print(person["name"], backup["name"])`, o: R`
000 {'name': 'John', 'phone': '000'}
John Changed` },
    { t: "pred", chk: 1, c: R`
d = {"a": 1, "b": 2}
d["a"] = d.get("a", 0) + 10
d["c"] = d.get("c", 0) + 10
print(d)`, o: ["`{'a': 11, 'b': 2, 'c': 10}`", "`{'a': 10, 'b': 2, 'c': 10}`", "`KeyError: 'c'`", "`{'a': 11, 'b': 2}`"], a: 0, e: "`get(\"a\", 0)` finds 1, so a becomes 11. `get(\"c\", 0)` finds nothing and returns 0, so c becomes 10. This `get(key, 0) + 1` trick is the heart of counting." },
    { t: "h", text: "Nested dictionaries" },
    { t: "p", b: "Values can be dictionaries or lists themselves. This is how real records look, and it is exactly how JSON data from websites and APIs is shaped. Read nested data one bracket at a time." },
    { t: "anim", title: "Following a path into nested data", frames: [
      { html: "<div class=\"bigcode\">data = [\n  {\"name\": \"Raman\", \"marks\": {\"eng\": 90, \"maths\": [99, 98]}},\n  {\"name\": \"Rajeev\", \"marks\": {\"eng\": 86, \"maths\": [100, 99]}},\n]</div>", c: "From your course notebook: a **list** of students. Each student is a **dict**, and `marks` is another dict, and `maths` is a list of two test scores." },
      { html: "<div class=\"bigcode\"><u>data[0]</u>[\"marks\"][\"maths\"][-1]</div><div class=\"res\">{\"name\": \"Raman\", \"marks\": {...}}</div>", c: "`data[0]`: data is a list, so use a position. Item 0 is Raman's dictionary." },
      { html: "<div class=\"bigcode\">data[0]<u>[\"marks\"]</u>[\"maths\"][-1]</div><div class=\"res\">{\"eng\": 90, \"maths\": [99, 98]}</div>", c: "`[\"marks\"]`: that is a dict, so use a key. We get the marks dictionary." },
      { html: "<div class=\"bigcode\">data[0][\"marks\"]<u>[\"maths\"]</u>[-1]</div><div class=\"res\">[99, 98]</div>", c: "`[\"maths\"]`: another key. We get a list of two scores." },
      { html: "<div class=\"bigcode\">data[0][\"marks\"][\"maths\"]<u>[-1]</u></div><div class=\"res\">98</div>", c: "`[-1]`: the last item of that list. The answer is 98. Each bracket goes one level deeper." }
    ]},
    { t: "code", ttl: "From your course notebook", c: R`
data = [
    {"name": "Raman", "class": "X", "sec": "C",
     "marks": {"eng": 90, "hin": 89, "maths": [99, 98], "sci": 89, "sst": 88}},
    {"name": "Rajeev", "class": "X", "sec": "A",
     "marks": {"eng": 86, "hin": 98, "maths": [100, 99], "sci": 82, "sst": 96}},
]

for stu in data:
    print(stu["name"], ":", stu["marks"]["maths"][-1])

data[1]["marks"]["eng"] = 88          # change a nested value
print(data[1]["marks"]["eng"])`, o: R`
Raman : 98
Rajeev : 99
88` },
    { t: "code", ttl: "The course movie database", c: R`
movie_db = {
    "Ramayan": {"price": 1000, "seats": 20},
    "Drishyam": {"price": 500, "seats": 40},
    "Hanuman Ansh": {"price": 700, "seats": 10},
    "Udta Teer": {"price": 400, "seats": 50},
}

for name, details in movie_db.items():
    print(name, ":", details)

movie = "Drishyam"
seats_wanted = 3
if movie in movie_db:
    if seats_wanted <= movie_db[movie]["seats"]:
        bill = movie_db[movie]["price"] * seats_wanted
        movie_db[movie]["seats"] -= seats_wanted
        print(f"{seats_wanted} seats booked. Bill: {bill}")
        print(movie_db[movie]["seats"], "seats left")`, o: R`
Ramayan : {'price': 1000, 'seats': 20}
Drishyam : {'price': 500, 'seats': 40}
Hanuman Ansh : {'price': 700, 'seats': 10}
Udta Teer : {'price': 400, 'seats': 50}
3 seats booked. Bill: 1500
37 seats left` },
    { t: "p", b: "You will build the full booking and cancelling system in the Projects chapter." },
    { t: "h", text: "Dictionary comprehensions" },
    { t: "code", c: R`
keys = ["a", "b", "c"]
values = [1, 2, 3]
print({k: v for k, v in zip(keys, values)})

print({x: x ** 2 for x in range(10) if x % 2 == 0})

prices = {"tea": 20, "coffee": 45, "juice": 60}
print({item: p * 1.18 for item, p in prices.items()})   # add 18% GST`, o: R`
{'a': 1, 'b': 2, 'c': 3}
{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
{'tea': 23.599999999999998, 'coffee': 53.099999999999994, 'juice': 70.8}` },
    { t: "note", k: "tip", b: "See `23.599999999999998` and `53.099999999999994`? That is the float precision issue from the Variables chapter. Wrap it: `round(p * 1.18, 2)`." },
    { t: "h", text: "Patterns every analyst uses" },
    { t: "deck", title: "Dictionary patterns", s: [
      { big: "Four patterns cover most dictionary work.", items: ["**Count**: how many of each?", "**Group**: which items belong together?", "**Total by category**: how much per group?", "**Look up**: translate a code into a name"] },
      { h: "1. Count", b: "Loop, and add 1 to that key. `get(word, 0)` returns 0 the first time.", c: R`
text = "hello world hello python world python hello"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)`, o: R`{'hello': 3, 'world': 2, 'python': 2}` },
      { h: "1b. Count with Counter", b: "Python has a ready-made counter in the `collections` module.", c: R`
from collections import Counter
text = "hello world hello python world python hello"
c = Counter(text.split())
print(c.most_common(2))`, o: R`[('hello', 3), ('world', 2)]` },
      { h: "2. Group", b: "Each key holds a list. Create the list the first time you see a key.", c: R`
students = [("Alice", "A"), ("Bob", "B"), ("Charlie", "A"), ("David", "C")]
by_grade = {}
for name, grade in students:
    if grade not in by_grade:
        by_grade[grade] = []
    by_grade[grade].append(name)
print(by_grade)`, o: R`{'A': ['Alice', 'Charlie'], 'B': ['Bob'], 'C': ['David']}` },
      { h: "3. Total by category", b: "Like a pivot table: sum a number for each category.", c: R`
sales = [("Electronics", 899), ("Clothing", 20), ("Electronics", 150), ("Books", 15)]
totals = {}
for category, amount in sales:
    totals[category] = totals.get(category, 0) + amount
print(totals)`, o: R`{'Electronics': 1049, 'Clothing': 20, 'Books': 15}` },
      { h: "4. Look up", b: "Translate codes into names, with a default for unknown codes.", c: R`
country_codes = {"US": "United States", "IN": "India", "MX": "Mexico"}
for code in ["IN", "FR"]:
    print(code, "->", country_codes.get(code, "Unknown"))`, o: R`
IN -> India
FR -> Unknown` }
    ]},
    { t: "note", k: "why", b: "Pattern 3 is exactly what a **pivot table** or SQL's `GROUP BY` does. In pandas it is one line: `df.groupby(\"category\")[\"amount\"].sum()`. Now you know what is happening underneath." },
    { t: "h", text: "Why dictionaries are fast" },
    { t: "p", b: "To check `9999 in some_list`, Python looks at every item one by one. To check `9999 in some_dict`, Python uses the key's **hash** to jump straight to the right place, like using the index at the back of a book. With 10,000 items the PDF's timing test shows the dictionary is many times faster, and the gap grows with size." },
    { t: "note", k: "trap", h: "Trap! Keys must be immutable", b: "A list can change, so it cannot be a key. Use a tuple instead.", c: R`bad = {[1, 2]: "point"}`, o: R`TypeError: unhashable type: 'list'`, err: true },
    { t: "table", head: ["Method", "What it does"], rows: [
      ["`d.get(k, default)`", "Value for k, or default if missing"],
      ["`d.keys()` `d.values()` `d.items()`", "Views of keys, values, pairs"],
      ["`d.update(other)`", "Add or overwrite pairs from another dict"],
      ["`d.pop(k)`", "Remove k and return its value"],
      ["`d.popitem()`", "Remove and return the last pair"],
      ["`d.setdefault(k, v)`", "Return d[k]; if missing, set it to v first"],
      ["`d.copy()`", "Shallow copy"],
      ["`d.clear()`", "Remove everything"],
      ["`dict.fromkeys(keys, v)`", "New dict with every key set to v"]
    ]},
    { t: "prac", items: [
      { q: "Count how many times each letter appears in \"banana\".", sol: R`
counts = {}
for ch in "banana":
    counts[ch] = counts.get(ch, 0) + 1
print(counts)`, out: R`{'b': 1, 'a': 3, 'n': 2}` },
      { q: "From `marks = {\"Asha\": 82, \"Ravi\": 67, \"Neha\": 91}`, print the student with the highest mark.", hint: "Loop over `items()` and keep the best so far, or use `max(marks, key=marks.get)`.", sol: R`
marks = {"Asha": 82, "Ravi": 67, "Neha": 91}
best = max(marks, key=marks.get)
print(best, marks[best])`, out: R`Neha 91` },
      { q: "Swap keys and values: `{\"a\": 1, \"b\": 2}` becomes `{1: \"a\", 2: \"b\"}`.", sol: R`
d = {"a": 1, "b": 2}
flipped = {v: k for k, v in d.items()}
print(flipped)`, out: R`{1: 'a', 2: 'b'}` },
      { q: "Room bookings: `[(\"Deluxe\", 3499), (\"Suite\", 6999), (\"Deluxe\", 3499), (\"Standard\", 1999)]`. Find revenue per room type.", sol: R`
bookings = [("Deluxe", 3499), ("Suite", 6999), ("Deluxe", 3499), ("Standard", 1999)]
revenue = {}
for room, rate in bookings:
    revenue[room] = revenue.get(room, 0) + rate
print(revenue)`, out: R`{'Deluxe': 6998, 'Suite': 6999, 'Standard': 1999}` },
      { q: "Using the course movie_db, cancel 4 seats of \"Ramayan\" with a 50% refund, and print the refund and the new seat count.", sol: R`
movie_db = {"Ramayan": {"price": 1000, "seats": 20}}
movie = "Ramayan"
n = 4
refund = movie_db[movie]["price"] * n * 0.5
movie_db[movie]["seats"] += n
print("Refund:", refund)
print("Seats now:", movie_db[movie]["seats"])`, out: R`
Refund: 2000.0
Seats now: 24` }
    ]}
  ],
  take: [
    "A dict maps unique, immutable keys to values: `{\"name\": \"Raman\"}`.",
    "`d[k]` raises KeyError when missing. `d.get(k, default)` is safe.",
    "`d[k] = v` adds or updates. Remove with `pop()`, `del` or `popitem()`.",
    "Loop with `for k, v in d.items():`. `in` checks keys only.",
    "Count with `d[k] = d.get(k, 0) + 1`. Group with lists as values. Nested data: one bracket per level."
  ],
  quiz: [
    { q: "What does this print?", c: R`
d = {"a": 1, "b": 2}
print(d["b"])`, o: ["`1`", "`2`", "`b`", "An error"], a: 1, chk: 1, e: "Square brackets with a key return its value." },
    { q: "What does this print?", c: R`
d = {"a": 1}
print(d.get("z", 0))`, o: ["`None`", "`0`", "`KeyError`", "`z`"], a: 1, chk: 1, e: "get returns the default (0) when the key is missing." },
    { q: "What does this print?", c: R`
d = {"x": 1, "x": 2}
print(d)`, o: ["`{'x': 1, 'x': 2}`", "`{'x': 2}`", "`{'x': 1}`", "An error"], a: 1, chk: 1, e: "Keys are unique. The last value for a repeated key wins." },
    { q: "What does this print?", c: R`
d = {"name": "Asha"}
print("Asha" in d)`, o: ["`True`", "`False`", "An error", "`name`"], a: 1, chk: 1, e: "in checks keys. \"Asha\" is a value. Use `\"Asha\" in d.values()`." },
    { q: "Which loop gives you both keys and values?", o: ["`for k in d:`", "`for k, v in d.items():`", "`for v in d.values():`", "`for k, v in d:`"], a: 1, e: "items() gives (key, value) pairs that you unpack." },
    { q: "What does this print?", c: R`
d = {"a": 1, "b": 2}
d["c"] = 3
d["a"] = 10
print(len(d), d["a"])`, o: ["`3 10`", "`4 10`", "`3 1`", "`2 10`"], a: 0, chk: 1, e: "c is added (3 keys). a is updated to 10." },
    { q: "What does this print?", c: R`
info = {"stats": {"views": [10, 25, 40]}}
print(info["stats"]["views"][1])`, o: ["`10`", "`25`", "`40`", "An error"], a: 1, chk: 1, e: "Go one level per bracket: stats, then views, then index 1." },
    { q: "Which can NOT be a dictionary key?", o: ["`\"name\"`", "`42`", "`(1, 2)`", "`[1, 2]`"], a: 3, e: "Keys must be immutable. Lists can change, so they are not allowed." },
    { q: "What does this print?", c: R`
d = {"a": 1, "b": 2}
v = d.pop("a")
print(v, d)`, o: ["`1 {'b': 2}`", "`a {'b': 2}`", "`1 {'a': 1, 'b': 2}`", "`None {'b': 2}`"], a: 0, chk: 1, e: "pop removes the key and returns its value." }
  ],
  cards: [
    ["What is a dictionary?", "A collection of **key: value** pairs, like `{\"name\": \"Raman\", \"age\": 16}`. You look values up by key."],
    ["Rules for dictionary keys", "Keys must be **unique** and **immutable** (str, int, tuple). Values can be anything."],
    ["`d[\"x\"]` vs `d.get(\"x\")`", "`d[\"x\"]` raises KeyError if x is missing. `d.get(\"x\")` returns None (or your default)."],
    ["How do you add or update a key?", "`d[\"key\"] = value`. Adds if new, updates if it exists."],
    ["Three ways to delete from a dict", "`d.pop(k)` (returns the value), `del d[k]`, `d.popitem()` (last pair). `d.clear()` empties it."],
    ["Best way to loop over a dict", "", R`
for key, value in d.items():
    print(key, value)`],
    ["What does `in` check on a dict?", "Only the **keys**. Use `x in d.values()` to search values."],
    ["The counting pattern", "", R`counts[x] = counts.get(x, 0) + 1`],
    ["How do you read nested data like `data[0][\"marks\"][\"maths\"][-1]`?", "One bracket per level, left to right: list position, then key, then key, then list position."],
    ["Dict comprehension example", "`{x: x ** 2 for x in range(5)}` gives `{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`"],
    ["Why are dicts fast for lookups?", "They use a hash to jump straight to the key, instead of checking items one by one like a list."]
  ],
  cheat: [
    ["d = {\"a\": 1, \"b\": 2}", "Create"],
    ["d[\"a\"]  d.get(\"a\", 0)", "Read (error / default if missing)"],
    ["d[\"c\"] = 3", "Add or update"],
    ["d.update({\"a\": 9})", "Add/update many"],
    ["d.pop(\"a\")  del d[\"a\"]", "Delete a key"],
    ["d.keys()  d.values()  d.items()", "Views"],
    ["for k, v in d.items():", "Loop pairs"],
    ["\"a\" in d", "Is the key there?"],
    ["counts[x] = counts.get(x, 0) + 1", "Counting pattern"],
    ["{k: v for k, v in zip(ks, vs)}", "Build from two lists"],
    ["Counter(items).most_common(3)", "Top 3 most frequent"]
  ]
});
