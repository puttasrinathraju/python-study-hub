chapter({
  id: "comprehensions", part: 3, title: "Comprehensions and choosing the right collection", nav: "Comprehensions & choosing", time: "45 min", lvl: "Intermediate", tricky: true,
  keys: "list comprehension set comprehension dict comprehension generator expression nested filter transform mutable immutable hashable choose collection summary",
  lead: "Write loops that build lists in one clear line, then step back and compare strings, lists, tuples, sets and dictionaries so you always pick the right one.",
  goals: [
    "Read and write list comprehensions with and without a filter",
    "Know where `if` goes and where `if-else` goes (a classic trap)",
    "Write set and dictionary comprehensions, and generator expressions",
    "Compare all five collection types side by side",
    "Understand mutable, immutable and hashable"
  ],
  src: ["PDF: Python Advanced Data Types (comprehensions and summary table)", "W3Schools: List Comprehension"],
  body: [
    { t: "h", text: "A loop in one line" },
    { t: "p", b: "A ==list comprehension== builds a new list from another sequence. It does the same job as the \"filter\" loop pattern, but in one readable line." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 470 170" width="470" role="img" aria-label="Parts of a list comprehension">';
      s += '<rect x="34" y="34" width="72" height="40" rx="8" class="sv-hl"/>';
      s += '<rect x="116" y="34" width="168" height="40" rx="8" class="sv-acc"/>';
      s += '<rect x="294" y="34" width="106" height="40" rx="8" class="sv-tip"/>';
      s += '<text x="18" y="61" class="sv-tm" style="font-size:20px">[</text><text x="42" y="61" class="sv-tm" style="font-size:20px">x * 2</text>';
      s += '<text x="124" y="61" class="sv-tm" style="font-size:20px">for x in nums</text><text x="302" y="61" class="sv-tm" style="font-size:20px">if x &gt; 3</text><text x="408" y="61" class="sv-tm" style="font-size:20px">]</text>';
      s += '<text x="70" y="98" text-anchor="middle" class="sv-mb">① what to keep</text><text x="200" y="98" text-anchor="middle" class="sv-mb">② the loop</text><text x="347" y="98" text-anchor="middle" class="sv-mb">③ filter (optional)</text>';
      s += '<text x="235" y="140" text-anchor="middle" class="sv-t">Read it as: for each x in nums, if x &gt; 3, keep x * 2</text>';
      return s + '</svg>';
    })(), cap: "Three parts. Python runs the loop, checks the filter, and keeps the expression." },
    { t: "anim", title: "Turning a loop into a comprehension", frames: [
      { html: "<div class=\"bigcode\">result = []\nfor x in nums:\n    if x > 3:\n        result.append(x * 2)</div>", c: "Here is the filter pattern from the loops chapter: start empty, loop, check, append." },
      { html: "<div class=\"bigcode\">result = []\n<u>for x in nums:</u>\n    if x > 3:\n        result.append(x * 2)</div><div class=\"bigcode\">result = [      <u>for x in nums</u>        ]</div>", c: "Copy the `for` part into the square brackets, without the colon." },
      { html: "<div class=\"bigcode\">result = []\nfor x in nums:\n    <u>if x > 3:</u>\n        result.append(x * 2)</div><div class=\"bigcode\">result = [      for x in nums <u>if x > 3</u>]</div>", c: "Add the `if` part after it, also without the colon." },
      { html: "<div class=\"bigcode\">result = []\nfor x in nums:\n    if x > 3:\n        result.append(<u>x * 2</u>)</div><div class=\"bigcode\">result = [<u>x * 2</u> for x in nums if x > 3]</div>", c: "Whatever you were appending goes at the **front**." },
      { html: "<div class=\"bigcode\">nums = [1, 4, 2, 7]\nresult = [x * 2 for x in nums if x > 3]</div><div class=\"res\">[8, 14]</div>", c: "Done. 4 and 7 pass the filter, and each is doubled." }
    ]},
    { t: "code", c: R`
nums = [1, 4, 2, 7]

result = []
for x in nums:
    if x > 3:
        result.append(x * 2)
print(result)

print([x * 2 for x in nums if x > 3])      # same thing, one line`, o: R`
[8, 14]
[8, 14]` },
    { t: "code", ttl: "More examples", c: R`
print([x ** 2 for x in range(10)])
print([x for x in range(10) if x % 2 == 0])

fruits = ["apple", "banana", "cherry"]
print([f.upper() for f in fruits])
print([len(f) for f in fruits])

raw = ["  Delhi", "mumbai ", " PUNE "]
print([c.strip().title() for c in raw])     # clean every item`, o: R`
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
[0, 2, 4, 6, 8]
['APPLE', 'BANANA', 'CHERRY']
[5, 6, 6]
['Delhi', 'Mumbai', 'Pune']` },
    { t: "h", text: "Where does if go? Filter vs transform" },
    { t: "p", b: "This confuses almost everyone. There are two different uses of `if` in a comprehension, and they go in **different places**." },
    { t: "cmp", l: { h: "Filter: `if` at the END", b: "Decides **which items to keep**. No `else` allowed. The result can be shorter.", c: R`
nums = [-2, 5, -1, 8]
print([x for x in nums if x > 0])`, o: R`[5, 8]` }, r: { h: "Transform: `if-else` at the FRONT", b: "Decides **what value to put** for every item. Needs `else`. The result is the same length.", c: R`
nums = [-2, 5, -1, 8]
print([x if x > 0 else 0 for x in nums])`, o: R`[0, 5, 0, 8]` } },
    { t: "note", k: "trap", h: "Trap! else at the end is an error", b: "An `else` after the loop part is a syntax error. If you need `else`, move the whole `if-else` to the front.", c: R`
nums = [-2, 5]
print([x for x in nums if x > 0 else 0])`, o: R`SyntaxError: invalid syntax`, err: true },
    { t: "pred", chk: 1, c: R`print(["even" if n % 2 == 0 else "odd" for n in range(4)])`, o: ["`['even', 'odd', 'even', 'odd']`", "`['even', 'even']`", "`[0, 2]`", "An error"], a: 0, e: "if-else at the front transforms every item. range(4) is 0, 1, 2, 3, so we get four labels." },
    { t: "h", text: "Nested comprehensions" },
    { t: "p", b: "You can have two `for` parts. They run in the same order as nested loops: the first `for` is the outer loop." },
    { t: "code", c: R`
matrix = [[1, 2, 3], [4, 5, 6]]
flat = [n for row in matrix for n in row]     # outer loop first
print(flat)

pairs = [(i, j) for i in range(1, 3) for j in "ab"]
print(pairs)`, o: R`
[1, 2, 3, 4, 5, 6]
[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]` },
    { t: "note", k: "trap", h: "Trap! Making a grid with *", b: "`[[0] * 3] * 2` copies the **same** inner list twice (aliasing again). Change one row and both change. Build each row separately with a comprehension.", c: R`
bad = [[0] * 3] * 2
bad[0][0] = 9
print(bad)

good = [[0] * 3 for _ in range(2)]
good[0][0] = 9
print(good)`, o: R`
[[9, 0, 0], [9, 0, 0]]
[[9, 0, 0], [0, 0, 0]]` },
    { t: "note", k: "tip", b: "`_` is a normal variable name that programmers use to mean \"I don't need this value\". In `for _ in range(2)` we just want to repeat twice." },
    { t: "h", text: "Set and dict comprehensions, and generator expressions" },
    { t: "code", c: R`
words = ["data", "Data", "DATA", "python"]
print(sorted({w.lower() for w in words}))          # set: unique values

print({w: len(w) for w in ["tea", "coffee"]})      # dict: key: value

print(sum(x * x for x in range(5)))                # generator: no brackets needed`, o: R`
['data', 'python']
{'tea': 3, 'coffee': 6}
30` },
    { t: "p", b: "A ==generator expression== looks like a list comprehension with round brackets, or with only the function\'s own brackets: `sum(x * x for x in nums)`. It produces values one at a time without building a whole list, which saves memory on big data. You will learn more about generators in the advanced functions chapter." },
    { t: "note", k: "tip", h: "When not to use a comprehension", b: "If it no longer fits comfortably on one line, or needs more than one `if`, write a normal loop. Readable code beats clever code." },
    { t: "h", text: "Choosing the right collection" },
    { t: "mm", title: "The five collections", root: "Collections", kids: [
      { t: "str  \"abc\"", k: ["ordered, indexed", "immutable", "text only"] },
      { t: "list  [a, b]", k: ["ordered, indexed", "mutable", "duplicates OK"] },
      { t: "tuple  (a, b)", k: ["ordered, indexed", "immutable", "fixed records"] },
      { t: "set  {a, b}", k: ["no order, no index", "mutable", "unique items only"] },
      { t: "dict  {k: v}", k: ["ordered (3.7+)", "mutable", "unique keys, fast lookup"] }
    ]},
    { t: "table", head: ["Feature", "String", "List", "Tuple", "Set", "Dictionary"], rows: [
      ["Syntax", "`\"text\"`", "`[a, b, c]`", "`(a, b, c)`", "`{a, b, c}`", "`{k1: v1}`"],
      ["Empty", "`\"\"`", "`[]`", "`()`", "`set()`", "`{}`"],
      ["Mutable", "No", "**Yes**", "No", "**Yes**", "**Yes**"],
      ["Ordered", "Yes", "Yes", "Yes", "No", "Yes (3.7+)"],
      ["Indexed", "Yes", "Yes", "Yes", "No", "By key"],
      ["Duplicates", "Yes", "Yes", "Yes", "No", "No (keys)"],
      ["Best for", "Text", "Ordered collections that change", "Fixed groups of values", "Unique items, comparisons", "Look up by name"]
    ], cap: "The summary table from your PDF." },
    { t: "deck", title: "Which collection should I use?", s: [
      { big: "Ask yourself four questions.", b: "Go through them in order. The first \"yes\" usually gives you the answer." },
      { h: "1. Do I look things up by a name or ID?", b: "**Yes: use a dictionary.** Customer ID to customer details, product code to price, word to count.", c: R`prices = {"tea": 20, "coffee": 45}` },
      { h: "2. Do I only care about unique items?", b: "**Yes: use a set.** Unique visitors, unique cities, checking membership in a big group.", c: R`cities = set(["Pune", "Delhi", "Pune"])` },
      { h: "3. Should the values never change?", b: "**Yes: use a tuple.** A date, a coordinate, a database row, a function returning two values.", c: R`location = (17.38, 78.48)` },
      { h: "4. Otherwise: use a list.", b: "An ordered collection you will add to, remove from, sort and loop over. This is the default choice.", c: R`cart = ["rice", "dal"]
cart.append("oil")` },
      { h: "Real programs mix them", b: "The PDF's inventory system mixes them all. It uses a **dict** of items, a **set** of categories and a **list** of transactions. Each item's fixed facts are a **tuple**, and names and IDs are **strings**. You will build it in the Projects chapter." }
    ]},
    { t: "h", text: "Mutable, immutable and hashable" },
    { t: "table", head: ["Word", "Means", "Types"], rows: [
      ["Mutable", "Can be changed after it is created", "`list`, `dict`, `set`"],
      ["Immutable", "Cannot be changed. \"Changing\" it creates a new object", "`int`, `float`, `str`, `bool`, `tuple`, `frozenset`"],
      ["Hashable", "Has a fixed hash, so it can be a dict key or set item. In practice: immutable", "`int`, `str`, `tuple`, `frozenset`"]
    ]},
    { t: "note", k: "key", b: "Rule of thumb: **only hashable things (immutable all the way through) can be dictionary keys or set items**. And **only mutable things can surprise you through aliasing** (`b = a` then changing `b`). Numbers and strings can never surprise you that way." },
    { t: "prac", items: [
      { q: "Add 18% GST to `prices = [100, 250, 80]` and round each to 2 decimals, in one line.", sol: R`
prices = [100, 250, 80]
print([round(p * 1.18, 2) for p in prices])`, out: R`[118.0, 295.0, 94.4]` },
      { q: "From `names = [\"Asha\", \"ravi\", \"Anil\", \"neha\", \"arjun\"]`, keep only names starting with \"a\" (any case), in Title case.", sol: R`
names = ["Asha", "ravi", "Anil", "neha", "arjun"]
print([n.title() for n in names if n.lower().startswith("a")])`, out: R`['Asha', 'Anil', 'Arjun']` },
      { q: "Convert Celsius temperatures `[0, 25, 37, 100]` to Fahrenheit (F = C x 9/5 + 32).", sol: R`
celsius = [0, 25, 37, 100]
print([c * 9 / 5 + 32 for c in celsius])`, out: R`[32.0, 77.0, 98.6, 212.0]` },
      { q: "Label each mark in `[45, 82, 67, 30]` as \"Pass\" (40 or more) or \"Fail\".", hint: "You need `else`, so the if-else goes at the front.", sol: R`
marks = [45, 82, 67, 30]
print(["Pass" if m >= 40 else "Fail" for m in marks])`, out: R`['Pass', 'Pass', 'Pass', 'Fail']` },
      { q: "Make a dictionary mapping each word in `\"the quick brown fox\"` to its length.", sol: R`
sentence = "the quick brown fox"
print({w: len(w) for w in sentence.split()})`, out: R`{'the': 3, 'quick': 5, 'brown': 5, 'fox': 3}` }
    ]}
  ],
  take: [
    "`[expr for x in items if cond]`: loop, filter, keep. Read it from the `for`.",
    "Filter `if` goes at the end (no else). Transform `if-else` goes at the front.",
    "`{x for ...}` makes a set, `{k: v for ...}` a dict, `sum(x for ...)` a generator.",
    "Build grids with `[[0] * 3 for _ in range(2)]`, never `[[0] * 3] * 2`.",
    "Look up by name: dict. Unique items: set. Fixed values: tuple. Otherwise: list."
  ],
  quiz: [
    { q: "What does this print?", c: R`print([n * 10 for n in range(3)])`, o: ["`[10, 20, 30]`", "`[0, 10, 20]`", "`[0, 1, 2]`", "`30`"], a: 1, chk: 1, e: "range(3) is 0, 1, 2. Each is multiplied by 10." },
    { q: "What does this print?", c: R`print([w for w in ["hi", "hello", "hey"] if len(w) > 2])`, o: ["`['hi']`", "`['hello', 'hey']`", "`['hello']`", "`[5, 3]`"], a: 1, chk: 1, e: "The filter keeps words longer than 2 characters." },
    { q: "Which is valid Python?", o: ["`[x for x in nums if x > 0 else 0]`", "`[x if x > 0 else 0 for x in nums]`", "`[for x in nums: x]`", "`[x for x in nums else 0]`"], a: 1, e: "if-else that picks a value goes at the front. A filter `if` at the end cannot have an else." },
    { q: "What does this print?", c: R`print({x % 3 for x in range(6)})`, o: ["`{0, 1, 2}`", "`[0, 1, 2, 0, 1, 2]`", "`{0, 1, 2, 0, 1, 2}`", "`{3}`"], a: 0, chk: 1, e: "Curly brackets without a colon make a set, so duplicates disappear." },
    { q: "What does this print?", c: R`print([n for row in [[1, 2], [3]] for n in row])`, o: ["`[[1, 2], [3]]`", "`[1, 2, 3]`", "`[3, 1, 2]`", "An error"], a: 1, chk: 1, e: "The first `for` is the outer loop over rows, the second loops over each row's items." },
    { q: "You need to store each customer ID with their name and look them up fast. Which collection?", o: ["list", "tuple", "set", "dictionary"], a: 3, e: "Looking up by an ID is exactly what dictionaries are for." },
    { q: "Which of these is mutable?", o: ["`str`", "`tuple`", "`list`", "`frozenset`"], a: 2, e: "Lists, dicts and sets are mutable. Strings, tuples and frozensets are not." },
    { q: "What does this print?", c: R`
g = [[0] * 2] * 2
g[1][0] = 5
print(g)`, o: ["`[[0, 0], [5, 0]]`", "`[[5, 0], [5, 0]]`", "`[[5, 5], [0, 0]]`", "An error"], a: 1, chk: 1, e: "Both rows are the same list object, so changing one shows in both." }
  ],
  cards: [
    ["Pattern of a list comprehension", "`[expression for item in iterable if condition]`, e.g. `[x * 2 for x in nums if x > 3]`"],
    ["Where does a filter `if` go?", "At the **end**: `[x for x in nums if x > 0]`. It cannot have an else."],
    ["Where does `if-else` go in a comprehension?", "At the **front**, as part of the expression: `[x if x > 0 else 0 for x in nums]`."],
    ["Set comprehension vs dict comprehension", "Set: `{x for x in items}`. Dict: `{k: v for k, v in pairs}` (has a colon)."],
    ["What is a generator expression?", "Like a list comprehension but lazy, made with round brackets: `sum(x * x for x in range(5))`. Saves memory."],
    ["How do you flatten a list of lists?", "`[n for row in matrix for n in row]`"],
    ["Why is `[[0] * 3] * 2` a trap?", "Both rows are the **same** list. Use `[[0] * 3 for _ in range(2)]`."],
    ["Which collection: unique visitors?", "A **set**."],
    ["Which collection: product code to price?", "A **dictionary**."],
    ["Mutable vs immutable types", "Mutable: list, dict, set. Immutable: int, float, str, bool, tuple, frozenset."]
  ],
  cheat: [
    ["[x * 2 for x in nums]", "Transform every item"],
    ["[x for x in nums if x > 0]", "Filter items"],
    ["[a if c else b for x in nums]", "Choose a value per item"],
    ["[n for row in m for n in row]", "Flatten a 2D list"],
    ["{x for x in items}", "Set comprehension"],
    ["{k: v for k, v in d.items()}", "Dict comprehension"],
    ["sum(x for x in nums)", "Generator expression"],
    ["[[0] * 3 for _ in range(2)]", "Safe 2 x 3 grid"]
  ]
});
