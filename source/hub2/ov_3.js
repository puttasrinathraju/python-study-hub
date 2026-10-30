/* ---------- Part 3 overview: Collections ---------- */
overview({
  part: 3, title: "Part 3 overview: strings, lists, tuples, sets and dictionaries", nav: "Part 3 overview", time: "40 min",
  keys: "string list tuple set dictionary dict mutable immutable ordered duplicates index slice append extend sort sorted remove discard get copy comprehension hashable",
  lead: "The five collections side by side: what each one is, when to use it, and the methods people confuse. Start with the big table, then work through the \"don't mix these up\" pairs.",
  five: [
    "Python has five main built-in collections: **string** (text), **list**, **tuple**, **set** and **dictionary**.",
    "Strings, lists and tuples are ==ordered== and use index numbers from 0. Sets have no order. Dictionaries look values up by **key**.",
    "Lists, sets and dicts are ==mutable== (you can change them). Strings and tuples are ==immutable==. String methods like `upper()` give you a new string instead of changing the old one.",
    "Sets keep only unique items, and dict keys are unique too. Lists, tuples and strings allow duplicates.",
    "Comprehensions build a new list, set or dict in one line: `[x * 2 for x in nums if x > 0]`."
  ],
  body: [
    { t: "h", text: "Mind map of Part 3" },
    { t: "mm", title: "Part 3 at a glance", root: "Part 3: Collections", hint: "Tap a branch to open that chapter", kids: [
      { t: "8. Strings", go: "strings", k: ["\"text\" in quotes", "s[0], s[-1], s[1:4]", "immutable", "strip, split, join", "find vs index"] },
      { t: "9. Lists", go: "lists", k: ["[a, b, c]", "append, extend, insert", "remove, pop, del", "sort() vs sorted()", "copy, not b = a"] },
      { t: "10. Tuples", go: "tuples", k: ["(a, b) or a, b", "immutable", "(5,) for one item", "a, b = t", "count, index"] },
      { t: "11. Sets", go: "sets", k: ["{a, b} and set()", "unique, no order", "add, discard", "| & - ^"] },
      { t: "12. Dictionaries", go: "dicts", k: ["{key: value}", "d[k] vs d.get(k)", "keys, values, items", "counting pattern"] },
      { t: "13. Comprehensions", go: "comprehensions", k: ["[expr for x in items]", "filter: if at the end", "if-else at the front", "choosing a collection"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "Collection", d: "One variable that holds many values. Python's built-in ones are `str`, `list`, `tuple`, `set` and `dict`.", c: R`
names = ["Asha", "Ravi", "Neha"]
print(len(names))`, o: R`3`, go: "lists" },
      { t: "String", d: "An **ordered, immutable** sequence of characters. In other words: text.", c: R`
s = "data"
print(s[0], len(s), s.upper())`, o: R`d 4 DATA`, go: "strings" },
      { t: "List", d: "An **ordered, mutable** collection of any values. Duplicates are allowed.", c: R`
cart = ["rice", "dal"]
cart.append("oil")
print(cart)`, o: R`['rice', 'dal', 'oil']`, go: "lists" },
      { t: "Tuple", d: "An **ordered, immutable** collection. Think of it as a fixed record whose values belong together.", c: R`
point = (17.38, 78.48)
lat, lon = point
print(lat, lon)`, o: R`17.38 78.48`, go: "tuples" },
      { t: "Set", d: "An **unordered** collection of **unique** items. Duplicates disappear automatically.", c: R`print(set([3, 1, 3, 2, 1]))`, o: R`{1, 2, 3}`, go: "sets" },
      { t: "Dictionary", d: "A collection of **key: value** pairs. You look values up by their key, and keys are unique.", c: R`
prices = {"tea": 20, "coffee": 45}
print(prices["coffee"])`, o: R`45`, go: "dicts" },
      { t: "Sequence", d: "An ordered collection you can index and slice: strings, lists, tuples and `range()`.", c: R`print("abc"[1], [10, 20, 30][1], (7, 8, 9)[1])`, o: R`b 20 8`, go: "strings" },
      { t: "Index", d: "An item's position. It starts at 0. Negative indexes count from the end, so `-1` is the last item.", c: R`
s = "Python"
print(s[0], s[-1])`, o: R`P n`, go: "strings" },
      { t: "Slice", d: "A piece cut out with `[start:stop:step]`. Start is included, stop is not.", c: R`
s = "Python"
print(s[1:4], s[:2], s[::-1])`, o: R`yth Py nohtyP`, go: "strings" },
      { t: "Mutable", d: "Can be changed in place after it is created: lists, sets and dicts.", c: R`
nums = [1, 2]
nums[0] = 99
print(nums)`, o: R`[99, 2]`, go: "comprehensions" },
      { t: "Immutable", d: "Cannot be changed. Methods hand back a **new** value, so store the result.", c: R`
s = "hi"
s.upper()
print(s)
s = s.upper()
print(s)`, o: R`
hi
HI`, go: "comprehensions" },
      { t: "Hashable", d: "A value that can be a dict key or a set item. In practice: immutable values like `int`, `str` and `tuple`.", c: R`
d = {(1, 2): "a point"}
print(d[(1, 2)])`, o: R`a point`, go: "comprehensions" },
      { t: "Method", d: "A function that belongs to a value. Call it with a dot: `value.method()`.", c: R`print("a,b".split(","), [3, 1].count(3))`, o: R`['a', 'b'] 1`, go: "strings" },
      { t: "Unpacking", d: "Spreading the items of a collection into separate names. `*` collects the extras into a list.", c: R`
first, *rest = [10, 20, 30]
print(first, rest)`, o: R`10 [20, 30]`, go: "tuples" },
      { t: "Aliasing", d: "`b = a` does not copy. Both names point at the **same** list, so a change shows up in both.", c: R`
a = [1, 2]
b = a
b.append(3)
print(a)`, o: R`[1, 2, 3]`, go: "lists" },
      { t: "Comprehension", d: "A loop that builds a new collection in one line: `[expression for item in items if condition]`.", c: R`print([x * x for x in range(5) if x % 2 == 0])`, o: R`[0, 4, 16]`, go: "comprehensions" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "The five collections: definition, use cases and examples", head: ["", "String `str`", "List `list`", "Tuple `tuple`", "Set `set`", "Dictionary `dict`"], rows: [
      ["Definition", "An ordered, unchangeable sequence of **characters** (text)", "An ordered, changeable collection of **any values**", "An ordered, unchangeable collection: a **fixed record**", "An unordered collection of **unique** items", "A collection of **key: value** pairs with unique keys"],
      ["Written as", "`\"Asha\"` or `'Asha'`", "`[82, 67, 91]`", "`(17.38, 78.48)`\none item: `(5,)`", "`{\"Pune\", \"Delhi\"}`", "`{\"tea\": 20}`"],
      ["Empty one", "`\"\"`", "`[]`", "`()`", "`set()`", "`{}`"],
      ["Changeable?", "[[no:No]]\nmethods return a new string", "[[ok:Yes]]", "[[no:No]]", "[[ok:Yes]]\nitems must be immutable", "[[ok:Yes]]"],
      ["Ordered?", "[[ok:Yes]]", "[[ok:Yes]]", "[[ok:Yes]]", "[[no:No]]", "[[ok:Yes]] keeps insertion order"],
      ["Get an item by", "Index `s[0]`", "Index `l[0]`", "Index `t[0]`", "[[no:No index]]\nloop or `in`", "Key `d[\"tea\"]`"],
      ["Duplicates?", "[[ok:Yes]]", "[[ok:Yes]]", "[[ok:Yes]]", "[[no:No]]\nremoved automatically", "Keys [[no:No]]\nvalues [[ok:Yes]]"],
      ["Use cases", "Names, emails, IDs, messages, cleaning raw text", "Records that grow or shrink, things to sort, a shopping cart", "Coordinates, dates, returning several values, dict keys", "Unique visitors, removing duplicates, fast `in` checks, comparing groups", "Look up by name or ID, counting, JSON-style records"],
      ["Example", "`\"asha@x.com\".split(\"@\")[1]`\ngives `'x.com'`", "`cart.append(\"oil\")`", "`lat, lon = (17.38, 78.48)`", "`len(set(emails))`\ncounts unique emails", "`prices[\"tea\"]`\ngives `20`"]
    ], cap: "On a phone, scroll the table sideways. The first column stays in place." },
    { t: "table", master: true, title: "What works on which collection", head: ["Operation", "String", "List", "Tuple", "Set", "Dictionary"], rows: [
      ["`len(x)`", "[[ok:Yes]] characters", "[[ok:Yes]] items", "[[ok:Yes]] items", "[[ok:Yes]] items", "[[ok:Yes]] keys"],
      ["`x[0]`", "[[ok:Yes]]", "[[ok:Yes]]", "[[ok:Yes]]", "[[no:TypeError]]", "Only if `0` is a key"],
      ["Slicing `x[1:3]`", "[[ok:Yes]]", "[[ok:Yes]]", "[[ok:Yes]]", "[[no:No]]", "[[no:No]]"],
      ["`item in x`", "Is it a substring?", "Is it an item?", "Is it an item?", "Is it an item? (fast)", "Is it a **key**? (fast)"],
      ["Add", "`s + \"!\"` makes a new string", "`append()`, `insert()`, `extend()`", "[[no:No]] Build a new tuple", "`add()`, `update()`", "`d[key] = value`"],
      ["Remove", "`replace(\"a\", \"\")` makes a new string", "`remove()`, `pop()`, `del`", "[[no:No]]", "`remove()`, `discard()`", "`pop(key)`, `del d[key]`"],
      ["Change one item", "[[no:No]]", "`l[0] = 5`", "[[no:No]]", "Remove one, add another", "`d[key] = new`"],
      ["Sort", "`sorted(s)` gives a list", "`l.sort()` or `sorted(l)`", "`sorted(t)` gives a list", "`sorted(s)` gives a list", "`sorted(d)` gives sorted keys"],
      ["A `for` loop gives", "Each character", "Each item", "Each item", "Each item, in no set order", "Each **key**. Use `.items()` for pairs"],
      ["Convert with", "`str(x)`", "`list(x)`", "`tuple(x)`", "`set(x)`", "`dict(pairs)`"]
    ]},
    { t: "fig", svg: V.flow([
      { t: "Is it text?", d: true, k: "hl", lbl: "no" },
      { t: "Look things up by\na name or ID?", d: true, k: "hl", lbl: "no" },
      { t: "Only unique items?", d: true, k: "hl", lbl: "no" },
      { t: "Must it never change?", d: true, k: "hl", lbl: "no" },
      { t: "list  [ ]", k: "tip", code: 1 }
    ], { side: [{ from: 0, t: "string  \" \"", k: "acc", lbl: "yes" }, { from: 1, t: "dict  {k: v}", k: "acc", lbl: "yes" }, { from: 2, t: "set  { }", k: "acc", lbl: "yes" }, { from: 3, t: "tuple  ( )", k: "acc", lbl: "yes" }], label: "Which collection should I use?" }), cap: "Which collection should I use? Ask the questions in order. The first \"yes\" is usually your answer." },

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "String vs tuple", head: ["", "String", "Tuple"], rows: [
      ["Definition", "An ordered, immutable sequence of **characters**", "An ordered, immutable sequence of **any values**"],
      ["Written as", "Quotes: `\"Asha\"`", "Round brackets, or just commas: `(\"Asha\", 25)`"],
      ["Holds", "Text only", "Anything: numbers, text, lists, other tuples"],
      ["One item", "`\"a\"`", "`(\"a\",)` needs the trailing comma"],
      ["Indexing", "`\"Asha\"[0]` gives `'A'`", "`(\"Asha\", 25)[0]` gives `'Asha'`"],
      ["Methods", "Dozens: `upper()`, `split()`, `replace()`, `find()`…", "Only two: `count()` and `index()`"],
      ["`+` and `*`", "Join and repeat text", "Join and repeat tuples"],
      ["Use cases", "Names, messages, emails, cleaning text", "Fixed records, coordinates, returning several values, dict keys"],
      ["Example", "`email.split(\"@\")[1]`", "`lat, lon = (17.38, 78.48)`"]
    ], c: R`
s = "Asha"
t = ("Asha", 25)
print(s[0], t[0])
print(len(s), len(t))
print(s.upper(), t.count(25))
print(type(("a")), type(("a",)))`, o: R`
A Asha
4 2
ASHA 1
<class 'str'> <class 'tuple'>`, rule: "Text: string. A fixed group of different values that belong together: tuple." },
    { t: "vs", title: "List vs tuple", head: ["", "List", "Tuple"], rows: [
      ["Definition", "Ordered and **mutable**", "Ordered and **immutable**"],
      ["Written as", "`[1, 2, 3]`", "`(1, 2, 3)`"],
      ["Change, add, remove items", "[[ok:Yes]]", "[[no:No]] TypeError"],
      ["Methods", "Many: `append()`, `sort()`, `remove()`…", "Two: `count()`, `index()`"],
      ["Can be a dict key?", "[[no:No]] lists are not hashable", "[[ok:Yes]]"],
      ["Speed and size", "A little bigger", "A little smaller and faster"],
      ["Use cases", "Data that changes: carts, logs, results", "Data that must not change: a date, a point, a database row"]
    ], c: R`
cart = ["rice", "dal"]
cart.append("oil")
print(cart)
point = (3, 4)
try:
    point[0] = 10
except TypeError as e:
    print("TypeError:", e)`, o: R`
['rice', 'dal', 'oil']
TypeError: 'tuple' object does not support item assignment`, rule: "Will it change? List. Should it be locked? Tuple." },
    { t: "vs", title: "List vs set", head: ["", "List", "Set"], rows: [
      ["Order", "Keeps the order you added", "No order"],
      ["Duplicates", "[[ok:Allowed]]", "[[no:Removed]]"],
      ["Index `x[0]`", "[[ok:Yes]]", "[[no:No]]"],
      ["`in` check on big data", "Slower: checks items one by one", "Very fast"],
      ["Use cases", "Order matters, duplicates matter", "Unique values, membership checks, comparing two groups"]
    ], c: R`
visits = ["Asha", "Ravi", "Asha", "Neha"]
print(len(visits), len(set(visits)))
print(sorted(set(visits)))`, o: R`
4 3
['Asha', 'Neha', 'Ravi']`, rule: "Need \"how many unique\"? Turn the list into a set. Need a fixed order back? Wrap it in `sorted()`." },
    { t: "vs", title: "List vs dictionary", head: ["", "List", "Dictionary"], rows: [
      ["You find an item by", "Its position number", "Its key (a name or ID)"],
      ["Example", "`marks[1]`", "`marks[\"Ravi\"]`"],
      ["Holds", "Values only", "Pairs: key and value"],
      ["Use cases", "A group of similar things in order", "Details you look up by name: prices, stock, profiles"]
    ], c: R`
marks_list = [82, 67, 91]
marks_dict = {"Asha": 82, "Ravi": 67, "Neha": 91}
print(marks_list[1], marks_dict["Ravi"])`, o: R`67 67`, rule: "If you keep asking \"which position was Ravi?\", you want a dictionary." },
    { t: "vs", title: "`{}` vs `set()` vs `{1, 2}`", head: ["", "`{}`", "`set()`", "`{1, 2}`", "`{\"a\": 1}`"], rows: [
      ["You get", "An empty **dict**", "An empty **set**", "A set with items", "A dict with one pair"],
      ["Why", "Curly brackets were dicts first", "The only way to write an empty set", "Items without colons make a set", "`key: value` makes a dict"]
    ], c: R`print(type({}), type(set()), type({1, 2}), type({"a": 1}))`, o: R`<class 'dict'> <class 'set'> <class 'set'> <class 'dict'>`, rule: "Empty set: always `set()`." },
    { t: "vs", title: "`append()` vs `extend()` vs `insert()`", head: ["", "`append(x)`", "`extend(items)`", "`insert(i, x)`"], rows: [
      ["Adds", "One item at the end", "Each item of another list, at the end", "One item at position `i`"],
      ["`[1, 2]` plus `[3, 4]`", "`[1, 2, [3, 4]]`", "`[1, 2, 3, 4]`", "`insert(0, 9)` gives `[9, 1, 2]`"],
      ["Gives back", "`None`", "`None`", "`None`"]
    ], c: R`
a = [1, 2]
a.append([3, 4])
b = [1, 2]
b.extend([3, 4])
c = [1, 2]
c.insert(0, 9)
print(a, b, c)`, o: R`[1, 2, [3, 4]] [1, 2, 3, 4] [9, 1, 2]`, rule: "One thing: `append`. Many things: `extend`. A specific spot: `insert`." },
    { t: "vs", title: "`sort()` vs `sorted()`", head: ["", "`lst.sort()`", "`sorted(x)`"], rows: [
      ["Changes the original?", "[[warn:Yes]]", "[[ok:No]]"],
      ["Gives back", "`None`", "A **new** sorted list"],
      ["Works on", "Lists only", "Any collection: string, tuple, set, dict keys"],
      ["Trap", "`x = lst.sort()` makes `x` equal `None`", "Forgetting to store the result"]
    ], c: R`
nums = [3, 1, 2]
print(sorted(nums), nums)
print(nums.sort(), nums)
print(sorted("cab"), sorted({"b": 1, "a": 2}))`, o: R`
[1, 2, 3] [3, 1, 2]
None [1, 2, 3]
['a', 'b', 'c'] ['a', 'b']`, rule: "Keep the original? `sorted()`. Sort the list itself? `.sort()` on a line of its own." },
    { t: "vs", title: "`remove()` vs `pop()` vs `del` (lists)", head: ["", "`lst.remove(x)`", "`lst.pop(i)`", "`del lst[i]`"], rows: [
      ["Removes by", "**Value** (the first match)", "**Index** (default: the last item)", "Index or slice"],
      ["Gives back", "`None`", "The removed item", "Nothing (it is a statement)"],
      ["When it is missing", "ValueError", "IndexError", "IndexError"]
    ], c: R`
l = ["a", "b", "c", "d"]
l.remove("b")
x = l.pop()
del l[0]
print(l, x)`, o: R`['c'] d`, rule: "Know the value? `remove`. Need the item back? `pop`. Delete a position or a slice? `del`." },
    { t: "vs", title: "`remove()` vs `discard()` (sets)", head: ["", "`s.remove(x)`", "`s.discard(x)`"], rows: [
      ["When `x` is there", "Removes it", "Removes it"],
      ["When `x` is missing", "[[no:KeyError]]", "[[ok:Does nothing]]"],
      ["Use it when", "A missing item means a bug you want to see", "You just want it gone, whether or not it was there"]
    ], c: R`
s = {1, 2, 3}
s.discard(9)
print(s)
s.remove(9)`, o: R`
{1, 2, 3}
KeyError: 9`, err: true, rule: "Not sure the item is there? `discard()`." },
    { t: "vs", title: "`d[key]` vs `d.get(key)`", head: ["", "`d[key]`", "`d.get(key)`", "`d.get(key, 0)`"], rows: [
      ["Key exists", "The value", "The value", "The value"],
      ["Key missing", "[[no:KeyError]]", "`None`", "Your default: `0`"],
      ["Use it when", "The key must be there", "The key may be missing", "Counting and totals"]
    ], c: R`
d = {"tea": 20}
print(d["tea"], d.get("milk"), d.get("milk", 0))
print(d["milk"])`, o: R`
20 None 0
KeyError: 'milk'`, err: true, rule: "The counting pattern uses `get` with a default: `counts[w] = counts.get(w, 0) + 1`." },
    { t: "vs", title: "`find()` vs `index()` (strings)", head: ["", "`s.find(x)`", "`s.index(x)`"], rows: [
      ["Found", "The position", "The position"],
      ["Not found", "`-1`", "[[no:ValueError]]"],
      ["Also on lists?", "[[no:No]]", "[[ok:Yes]] `lst.index(x)`"]
    ], c: R`
s = "data"
print(s.find("t"), s.index("t"), s.find("z"))
print(s.index("z"))`, o: R`
2 2 -1
ValueError: substring not found`, err: true, rule: "Checking if something is there? `find()` or simply `x in s`. Sure it is there? `index()`." },
    { t: "vs", title: "`split()` vs `join()`", head: ["", "`text.split(sep)`", "`sep.join(items)`"], rows: [
      ["Turns", "A string into a **list**", "A list of strings into **one string**"],
      ["Called on", "The text", "The separator"],
      ["Example", "`\"a,b,c\".split(\",\")` gives `['a', 'b', 'c']`", "`\"-\".join([\"a\", \"b\"])` gives `'a-b'`"],
      ["Trap", "No argument splits on any whitespace", "Every item must be a string"]
    ], c: R`
parts = "a,b,c".split(",")
print(parts)
print("-".join(parts))
print(" ".join(str(n) for n in [1, 2, 3]))`, o: R`
['a', 'b', 'c']
a-b-c
1 2 3`, rule: "`split` breaks apart, `join` glues together. They are opposites." },
    { t: "vs", title: "`b = a` vs `b = a.copy()`", head: ["", "`b = a`", "`b = a.copy()`"], rows: [
      ["Makes", "A second **name** for the same list", "A second, separate list"],
      ["Change `a` later", "`b` changes too", "`b` stays the same"],
      ["Other ways", "", "`a[:]`, `list(a)`. For nested lists use `copy.deepcopy(a)`"]
    ], c: R`
a = [1, 2]
b = a
c = a.copy()
a.append(3)
print(b, c)`, o: R`[1, 2, 3] [1, 2]`, rule: "Want an independent copy? Always call `.copy()`." },
    { t: "vs", title: "A filter `if` vs an `if-else` in a comprehension", head: ["", "Filter", "Transform"], rows: [
      ["Shape", "`[x for x in items if cond]`", "`[a if cond else b for x in items]`"],
      ["Where the `if` goes", "At the **end**", "At the **front**, with an `else`"],
      ["Result length", "Can be shorter", "Always the same length"],
      ["`[4, -2, 7]`, keep positives", "`[4, 7]`", "`[4, 0, 7]` (negatives become 0)"]
    ], c: R`
nums = [4, -2, 7]
print([n for n in nums if n > 0])
print([n if n > 0 else 0 for n in nums])`, o: R`
[4, 7]
[4, 0, 7]`, rule: "Dropping items? `if` at the end. Changing every item? `if-else` at the front." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "Each task needs more than one collection, just like real data work. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "`raw = \"  Asha, RAVI ,neha,Asha \"`. Clean it into a sorted list of unique, title-case names and print `['Asha', 'Neha', 'Ravi']`.", hint: "`split(\",\")`, then `strip()` and `title()` each name, put them in a set to drop the duplicate, then `sorted()`.", starter: "raw = \"  Asha, RAVI ,neha,Asha \"\n", sol: R`
raw = "  Asha, RAVI ,neha,Asha "
names = {n.strip().title() for n in raw.split(",")}
print(sorted(names))`, out: R`['Asha', 'Neha', 'Ravi']`, why: "String methods clean each piece, a set comprehension drops the duplicate, and `sorted()` gives a list back in a fixed order." },
      { q: "Count how often each fruit appears in `fruits = [\"apple\", \"mango\", \"apple\", \"kiwi\", \"apple\", \"mango\"]` and print `{'apple': 3, 'mango': 2, 'kiwi': 1}`.", hint: "Start with an empty dict and use `counts[f] = counts.get(f, 0) + 1`.", starter: "fruits = [\"apple\", \"mango\", \"apple\", \"kiwi\", \"apple\", \"mango\"]\n", sol: R`
fruits = ["apple", "mango", "apple", "kiwi", "apple", "mango"]
counts = {}
for f in fruits:
    counts[f] = counts.get(f, 0) + 1
print(counts)`, out: R`{'apple': 3, 'mango': 2, 'kiwi': 1}`, why: "`get(f, 0)` gives 0 the first time a fruit appears, so there is no KeyError." },
      { q: "`students = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]` is a list of tuples. Print the top student as `Neha 91`.", hint: "Start with `best = students[0]`. Loop over the list and keep the tuple with the higher mark (`s[1] > best[1]`). Then unpack `best` into two names.", starter: "students = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]\n", sol: R`
students = [("Asha", 82), ("Ravi", 67), ("Neha", 91)]
best = students[0]
for s in students:
    if s[1] > best[1]:
        best = s
name, mark = best
print(name, mark)`, out: R`Neha 91`, why: "Each record is a tuple because it is fixed. The list holds the records, and `s[1]` reads the mark from each one. (In Part 4 you will learn a shortcut: `max(students, key=lambda s: s[1])`.)" },
      { q: "`a = {\"Asha\", \"Ravi\", \"Neha\"}` joined the morning class and `b = {\"Ravi\", \"Kiran\"}` the evening class. Print who came to both and who came only in the morning, each as a sorted list.", hint: "`&` gives the people in both sets, `-` gives the people only in the first.", starter: "a = {\"Asha\", \"Ravi\", \"Neha\"}\nb = {\"Ravi\", \"Kiran\"}\n", sol: R`
a = {"Asha", "Ravi", "Neha"}
b = {"Ravi", "Kiran"}
print("Both:", sorted(a & b))
print("Morning only:", sorted(a - b))`, out: R`
Both: ['Ravi']
Morning only: ['Asha', 'Neha']`, why: "Set operations compare whole groups in one step. `sorted()` turns the result into a list with a fixed order." }
    ]}
  ],
  quiz: [
    { q: "Which collection is **ordered, immutable and holds any type of value**?", o: ["List", "Tuple", "Set", "String"], a: 1, e: "A string is also ordered and immutable, but it holds only characters. A tuple can hold anything." },
    { q: "What does this print?", c: R`print(type(("a")), type(("a",)))`, o: ["`<class 'tuple'> <class 'tuple'>`", "`<class 'str'> <class 'tuple'>`", "`<class 'str'> <class 'str'>`", "An error"], a: 1, chk: 1, e: "Brackets alone do not make a tuple. The comma does." },
    { q: "What does this print?", c: R`print(type({}))`, o: ["`<class 'set'>`", "`<class 'dict'>`", "`<class 'list'>`", "`<class 'tuple'>`"], a: 1, chk: 1, e: "Empty curly brackets make a dict. An empty set is `set()`." },
    { q: "What does this print?", c: R`
nums = [3, 1, 2]
x = nums.sort()
print(x)`, o: ["`[1, 2, 3]`", "`None`", "`[3, 1, 2]`", "An error"], a: 1, chk: 1, e: "`sort()` changes the list in place and returns `None`. Use `sorted(nums)` to get a new list." },
    { q: "What does this print?", c: R`
a = [1, 2]
a.append([3, 4])
print(len(a))`, o: ["`4`", "`3`", "`2`", "An error"], a: 1, chk: 1, e: "`append` adds the whole list as **one** item. `extend` would add 3 and 4 separately." },
    { q: "What does this print?", c: R`print(len({"a", "b", "a", "c", "b"}))`, o: ["`5`", "`3`", "`2`", "`4`"], a: 1, chk: 1, e: "A set keeps only unique items: a, b and c." },
    { q: "What does this print?", c: R`
d = {"tea": 20}
print(d.get("milk", 0))`, o: ["`None`", "`0`", "A KeyError", "`20`"], a: 1, chk: 1, e: "`get` returns the default you gave when the key is missing." },
    { q: "What does this print?", c: R`
a = [1, 2, 3]
b = a
b[0] = 99
print(a)`, o: ["`[1, 2, 3]`", "`[99, 2, 3]`", "`[99]`", "An error"], a: 1, chk: 1, e: "`b = a` does not copy. Both names point at the same list." },
    { q: "What does this print?", c: R`print("Python"[1:4])`, o: ["`Pyt`", "`yth`", "`ytho`", "`yt`"], a: 1, chk: 1, e: "Index 1 is included, index 4 is not: y, t, h." },
    { q: "What does this print?", c: R`
s = "data"
s.upper()
print(s)`, o: ["`DATA`", "`data`", "`None`", "An error"], a: 1, chk: 1, e: "Strings are immutable. `upper()` returns a new string, and here nobody stored it." },
    { q: "What does this print?", c: R`print("2024-10-27".split("-"))`, o: ["`['2024', '10', '27']`", "`[2024, 10, 27]`", "`'2024 10 27'`", "`('2024', '10', '27')`"], a: 0, chk: 1, e: "`split` always gives a list of **strings**." },
    { q: "What does this print?", c: R`print([n * 2 for n in [1, 2, 3, 4] if n % 2 == 0])`, o: ["`[2, 4, 6, 8]`", "`[4, 8]`", "`[2, 4]`", "`[1, 2, 3, 4]`"], a: 1, chk: 1, e: "The filter keeps 2 and 4, then each is doubled." },
    { q: "Which of these can be a dictionary key?", o: ["`[1, 2]`", "`{1, 2}`", "`(1, 2)`", "`{\"a\": 1}`"], a: 2, e: "Keys must be hashable (immutable). A tuple is; lists, sets and dicts are not." },
    { q: "What does this print?", c: R`
s = {1, 2}
s.discard(5)
print(s)`, o: ["`{1, 2}`", "A KeyError", "`{1, 2, 5}`", "`None`"], a: 0, chk: 1, e: "`discard` quietly does nothing when the item is missing. `remove` would raise a KeyError." }
  ],
  cards: [
    ["String vs tuple: definition", "A **string** is an ordered, immutable sequence of characters (text). A **tuple** is an ordered, immutable sequence of any values (a fixed record)."],
    ["String vs tuple: use cases", "String: names, emails, messages, cleaning text. Tuple: coordinates, dates, returning several values, dictionary keys."],
    ["Which collections are mutable?", "List, set and dictionary. String and tuple are immutable."],
    ["Which collections keep order and have an index?", "String, list and tuple. A dict keeps insertion order but you look up by key. A set has no order."],
    ["Which collections allow duplicates?", "String, list and tuple. A set never does. A dict allows duplicate values but not duplicate keys."],
    ["How do you write an empty set?", "`set()`. Writing `{}` makes an empty dictionary."],
    ["How do you write a one-item tuple?", "With a trailing comma: `(5,)`. Without it, `(5)` is just the number 5."],
    ["`append()` vs `extend()`", "`append(x)` adds x as one item. `extend(items)` adds each item separately."],
    ["`sort()` vs `sorted()`", "`lst.sort()` changes the list and returns `None`. `sorted(x)` returns a new list and works on any collection."],
    ["`d[key]` vs `d.get(key, default)`", "`d[key]` raises KeyError if the key is missing. `get` returns `None` or your default instead."],
    ["`remove()` vs `discard()` on a set", "`remove` raises KeyError if the item is missing. `discard` does nothing."],
    ["`find()` vs `index()` on a string", "`find` returns -1 when missing. `index` raises ValueError."],
    ["How do you copy a list safely?", "`b = a.copy()`, `a[:]` or `list(a)`. `b = a` only makes a second name.", R`b = a.copy()`],
    ["Where does the `if` go in a comprehension?", "Filter: at the end, `[x for x in items if cond]`. Transform: at the front with else, `[a if cond else b for x in items]`."],
    ["Which collection for which job?", "Look up by name: dict. Unique items: set. Fixed values: tuple. Text: string. Everything else: list."]
  ]
});
