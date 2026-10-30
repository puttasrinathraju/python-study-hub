chapter({
  id: "tuples", part: 3, title: "Tuples", nav: "Tuples", time: "35 min", lvl: "Beginner",
  keys: "tuple immutable packing unpacking star single element comma count index return multiple values dictionary key",
  lead: "A tuple is a list that cannot be changed. Learn when that is exactly what you want, and master packing and unpacking.",
  goals: [
    "Create tuples, including the one-item tuple",
    "Get items with indexing and slicing",
    "Understand immutability and how to \"update\" a tuple anyway",
    "Pack and unpack values, including `*rest`",
    "Know when to choose a tuple over a list"
  ],
  src: ["PDF: Python Advanced Data Types (Tuples)", "Course notebooks types_of_data_types.ipynb and dict_exp.ipynb", "W3Schools: Tuples and its sub-pages"],
  body: [
    { t: "h", text: "What is a tuple?" },
    { t: "p", b: "A ==tuple== is an **ordered** collection like a list, but it is **immutable**: once created, its items cannot be changed, added or removed. You write it with round brackets." },
    { t: "code", ttl: "From your course notebook", c: R`
t = ("Raman", "Raghav", "Raman")
print(t)
print(type(t))
print(len(t))`, o: R`
('Raman', 'Raghav', 'Raman')
<class 'tuple'>
3` },
    { t: "h", text: "Creating tuples" },
    { t: "code", c: R`
empty = ()
coordinates = (10, 20, 30)
mixed = (1, "hello", 3.14)

a = 1, 34, 32, 56, 34        # brackets are optional: this is "packing"
print(type(a))

print(tuple([1, 2, 3]))      # from a list
print(tuple("Python"))       # from a string`, o: R`
<class 'tuple'>
(1, 2, 3)
('P', 'y', 't', 'h', 'o', 'n')` },
    { t: "note", k: "trap", h: "Trap! A one-item tuple needs a comma", b: "Brackets alone are just maths grouping. It is the **comma** that makes a tuple.", c: R`
x = (11)
y = (11,)
print(type(x))
print(type(y))`, o: R`
<class 'int'>
<class 'tuple'>` },
    { t: "h", text: "Indexing, slicing and looping" },
    { t: "p", b: "Everything you learned about indexing and slicing lists works on tuples too. Slicing a tuple gives you a new tuple." },
    { t: "code", c: R`
coordinates = (10, 20, 30, 40, 50)
print(coordinates[0])
print(coordinates[-1])
print(coordinates[1:3])

for index, value in enumerate(coordinates[:2]):
    print(f"Index {index}: {value}")

matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))     # nested tuples
print(matrix[1][2])`, o: R`
10
50
(20, 30)
Index 0: 10
Index 1: 20
6` },
    { t: "h", text: "Only two methods" },
    { t: "p", b: "Because tuples cannot change, they only have two methods, and both just look things up." },
    { t: "code", c: R`
t = ("Raman", "Raghav", "Raman")
print(t.count("Raman"))     # how many times
print(t.index("Raghav"))    # position of the first match`, o: R`
2
1` },
    { t: "h", text: "Immutability" },
    { t: "code", c: R`
coordinates = (10, 20)
coordinates[0] = 15`, o: R`TypeError: 'tuple' object does not support item assignment`, err: true },
    { t: "p", b: "Need to change one? Your course notebook shows the trick: convert to a list, change the list, convert back. You are really building a **new** tuple." },
    { t: "code", c: R`
no = (4, 21, 3, 7)
temp = list(no)
temp.append(16)
no = tuple(temp)
print(no)`, o: R`(4, 21, 3, 7, 16)` },
    { t: "note", k: "trap", h: "Trap! A tuple can hold something that changes", b: "The tuple itself cannot change which objects it holds. But if one of those objects is a list, the list can still change.", c: R`
t = (1, [2, 3])
t[1].append(4)
print(t)`, o: R`(1, [2, 3, 4])` },
    { t: "h", text: "Packing and unpacking" },
    { t: "p", b: "**Packing** means putting several values into one tuple. **Unpacking** means taking them out into separate variables in one line. The number of variables must match the number of items." },
    { t: "anim", title: "Unpacking a tuple", frames: [
      { html: "<div class=\"bigcode\">person = (\"John\", 25, \"New York\")</div>" + V.strip(["\"John\"", "25", "\"New York\""], { w: 120 }), c: "**Packing**: three values travel together in one tuple called `person`." },
      { html: "<div class=\"bigcode\">name, age, city = person</div>" + V.strip(["\"John\"", "25", "\"New York\""], { w: 120, hl: [0] }) + "<div class=\"res\">name = \"John\"</div>", c: "**Unpacking**: Python matches by position. Item 0 goes into the first name on the left." },
      { html: "<div class=\"bigcode\">name, age, city = person</div>" + V.strip(["\"John\"", "25", "\"New York\""], { w: 120, hl: [1], hl2: [0] }) + "<div class=\"res\">age = 25</div>", c: "Item 1 goes into the second name." },
      { html: "<div class=\"bigcode\">name, age, city = person</div>" + V.strip(["\"John\"", "25", "\"New York\""], { w: 120, hl: [2], hl2: [0, 1] }) + "<div class=\"res\">city = \"New York\"</div>", c: "Item 2 goes into the third name. Three items, three names. If the counts do not match, you get a ValueError." },
      { html: "<div class=\"bigcode\">first, *middle, last = (1, 2, 3, 4, 5)</div><div class=\"res\">first = 1   middle = [2, 3, 4]   last = 5</div>", c: "A star `*` collects \"everything else\" into a **list**. Useful when you only care about the first or last items." }
    ]},
    { t: "code", c: R`
person = ("John", 25, "New York")
name, age, city = person
print(name, age, city)

n1, n2, n3, n4 = (4, 21, 3, 7)     # course notebook
print(n1)

first, *middle, last = (1, 2, 3, 4, 5)
print(first, middle, last)

a, b = 1, 2
a, b = b, a                       # swapping is packing + unpacking
print(a, b)`, o: R`
John 25 New York
4
1 [2, 3, 4] 5
2 1` },
    { t: "code", ttl: "Counts must match", c: R`x, y = (1, 2, 3)`, o: R`ValueError: too many values to unpack (expected 2)`, err: true },
    { t: "h", text: "Why use a tuple?" },
    { t: "ul", items: [
      "**Fixed records** that should not change by accident: a date `(2026, 10, 25)`, a GPS point `(17.38, 78.48)`, an RGB colour.",
      "**Returning several values** from a function: `return (1920, 1080)`.",
      "**Dictionary keys**: tuples can be keys if everything inside them is also unchangeable. Lists cannot.",
      "**Slightly faster and smaller** than lists."
    ]},
    { t: "code", c: R`
screen = (1920, 1080)          # a fixed pair of values
width, height = screen
print(width, height)

student_grades = {
    ("John", "Math"): 95,
    ("John", "Science"): 88,
    ("Alice", "Math"): 92,
}
print(student_grades[("Alice", "Math")])`, o: R`
1920 1080
92` },
    { t: "cmp", l: { h: "List `[ ]`", items: ["Mutable: add, remove, change", "Many methods", "Use for collections that grow or change: a shopping cart, a log of transactions"] }, r: { h: "Tuple `( )`", items: ["Immutable: fixed once made", "Only `count()` and `index()`", "Use for fixed records, function return values, dictionary keys"] } },
    { t: "code", ttl: "Joining tuples", c: R`
a = (1, 2)
b = (3, 4)
print(a + b)
print(a * 3)`, o: R`
(1, 2, 3, 4)
(1, 2, 1, 2, 1, 2)` },
    { t: "note", k: "why", b: "When you read a database row in Python, it often comes back as a tuple, like `(101, \"Asha\", \"Deluxe\", 3499.0)`. Unpacking it into named variables makes your code readable: `booking_id, guest, room, rate = row`." },
    { t: "prac", items: [
      { q: "Store a date as a tuple `(2026, 10, 25)`, unpack it into `year`, `month`, `day`, and print `25/10/2026`.", sol: R`
date = (2026, 10, 25)
year, month, day = date
print(f"{day}/{month}/{year}")`, out: R`25/10/2026` },
      { q: "From `scores = (55, 72, 90, 64, 81)`, unpack the first score, the last score, and the rest using `*`.", sol: R`
scores = (55, 72, 90, 64, 81)
first, *rest, last = scores
print(first, rest, last)`, out: R`55 [72, 90, 64] 81` },
      { q: "Make a tuple `(min(nums), max(nums))` from `nums = [45, 12, 78, 34]` and unpack it into `low` and `high`. Print them.", sol: R`
nums = [45, 12, 78, 34]
low, high = (min(nums), max(nums))
print(low, high)`, out: R`12 78` },
      { q: "\"Add\" the colour \"green\" to `colors = (\"red\", \"blue\")` and print the new tuple.", hint: "You cannot append to a tuple, but you can join two tuples with `+`.", sol: R`
colors = ("red", "blue")
colors = colors + ("green",)
print(colors)`, out: R`('red', 'blue', 'green')` }
    ]}
  ],
  take: [
    "Tuples are ordered and immutable. Written with `( )`, or just commas.",
    "A one-item tuple needs a trailing comma: `(11,)`.",
    "Only two methods: `count()` and `index()`.",
    "Unpack with `a, b, c = t`. Use `*rest` to collect extras into a list.",
    "Use tuples for fixed records, multiple return values and dictionary keys."
  ],
  quiz: [
    { q: "What does this print?", c: R`print(type((5)))`, o: ["`<class 'tuple'>`", "`<class 'int'>`", "`<class 'list'>`", "An error"], a: 1, chk: 1, e: "Without a comma, the brackets are just grouping. `(5,)` would be a tuple." },
    { q: "What happens here?", c: R`
t = (1, 2, 3)
t[0] = 10`, o: ["t becomes (10, 2, 3)", "TypeError", "t becomes (10, 1, 2, 3)", "Nothing happens"], a: 1, e: "Tuples are immutable, so item assignment raises a TypeError." },
    { q: "What does this print?", c: R`
a, *b = (1, 2, 3, 4)
print(b)`, o: ["`(2, 3, 4)`", "`[2, 3, 4]`", "`2`", "`[1, 2, 3, 4]`"], a: 1, chk: 1, e: "The starred name collects the remaining items into a list." },
    { q: "Which tuple methods exist?", o: ["append and remove", "count and index", "sort and reverse", "add and pop"], a: 1, e: "Tuples only have count() and index()." },
    { q: "Why can a tuple be a dictionary key but a list cannot?", o: ["Tuples are faster", "Keys must be immutable (hashable), and lists are mutable", "Lists are too long", "Dictionaries only accept tuples"], a: 1, e: "A key must never change, so only immutable types like str, int and tuple can be keys." },
    { q: "What does this print?", c: R`print((1, 2) + (3,))`, o: ["`(1, 2, 3)`", "`(1, 2, (3,))`", "`(4, 2)`", "An error"], a: 0, chk: 1, e: "`+` joins two tuples into a new tuple." },
    { q: "What does this print?", c: R`
t = ("a", "b", "a", "c", "a")
print(t.count("a"), t.index("c"))`, o: ["`3 3`", "`3 4`", "`2 3`", "`3 2`"], a: 0, chk: 1, e: "\"a\" appears 3 times and \"c\" is at index 3." }
  ],
  cards: [
    ["How is a tuple different from a list?", "A tuple is **immutable**: after creating it you cannot add, remove or change items. A list can change."],
    ["How do you make a tuple with one item?", "Add a trailing comma: `(11,)`. `(11)` is just the number 11."],
    ["What is packing?", "Putting several values into one tuple: `person = \"John\", 25, \"NY\"`"],
    ["What is unpacking?", "Taking items out into variables: `name, age, city = person`. Counts must match."],
    ["What does `first, *rest = (1, 2, 3)` give?", "`first = 1`, `rest = [2, 3]` (a list)."],
    ["How do you \"update\" a tuple?", "Convert to a list, change it, convert back: `t = tuple(list_version)`. Or join: `t = t + (x,)`."],
    ["Three good uses for tuples", "Fixed records (dates, coordinates), returning several values from a function, dictionary keys."]
  ],
  cheat: [
    ["t = (1, 2, 3)", "Create a tuple"],
    ["t = (5,)", "One-item tuple"],
    ["t[0]  t[-1]  t[1:3]", "Index and slice"],
    ["a, b, c = t", "Unpack"],
    ["first, *rest = t", "Unpack with a catch-all"],
    ["t.count(x)  t.index(x)", "The only two methods"],
    ["tuple(lst)  list(t)", "Convert between tuple and list"]
  ]
});
