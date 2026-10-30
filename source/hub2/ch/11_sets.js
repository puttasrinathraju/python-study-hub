chapter({
  id: "sets", part: 3, title: "Sets", nav: "Sets", time: "40 min", lvl: "Beginner",
  keys: "set unique duplicates union intersection difference symmetric difference add update remove discard pop frozenset subset superset venn",
  lead: "A set is a bag of unique items with no order. It removes duplicates for free and compares groups in one line: who is in both lists, who is missing, who is new.",
  goals: [
    "Create sets and remember that `{}` is not an empty set",
    "Add and remove items, and know `remove()` vs `discard()`",
    "Use union, intersection, difference and symmetric difference",
    "Check subsets, supersets and disjoint sets",
    "Use sets to remove duplicates and compare lists of customers"
  ],
  src: ["PDF: Python Advanced Data Types (Sets)", "Course notebooks types_of_data_types.ipynb and dict_exp.ipynb", "W3Schools: Sets and its sub-pages, Frozenset"],
  body: [
    { t: "h", text: "What is a set?" },
    { t: "p", b: "A ==set== is a collection of **unique** items with **no order** and **no index**. Sets are mutable (you can add and remove items), but every item inside must be immutable, like numbers, strings or tuples." },
    { t: "code", ttl: "From your course notebook: duplicates disappear", c: R`
a = {2, 4, 3, 2, 5, 7, 4, 3, 2, 2, 5, 8, 9, 9, 8, 1, 2, 7, 8, 9}
print(a)
print(len(a))`, o: R`
{1, 2, 3, 4, 5, 7, 8, 9}
8` },
    { t: "table", head: ["Property", "Sets"], rows: [
      ["Ordered", "**No.** The printed order can differ from the order you typed"],
      ["Indexed", "**No.** `s[0]` is an error"],
      ["Duplicates", "**Not allowed.** Extra copies are dropped automatically"],
      ["Mutable", "Yes, you can add and remove items"],
      ["Items must be", "Immutable (hashable): numbers, strings, tuples. Not lists or dicts"]
    ]},
    { t: "note", k: "trap", h: "Trap! {} is an empty dictionary, not a set", b: "Curly brackets with nothing inside make a dictionary. Use `set()` for an empty set.", c: R`
print(type({}))
print(type(set()))`, o: R`
<class 'dict'>
<class 'set'>` },
    { t: "code", ttl: "Making sets from other things", c: R`
print(sorted(set("hello")))        # unique letters (sorted so the order is fixed)
print(set([1, 2, 2, 3, 3, 3]))     # unique numbers from a list`, o: R`
['e', 'h', 'l', 'o']
{1, 2, 3}` },
    { t: "note", k: "tip", b: "Sets of strings can print in a different order after you restart Python. That is normal. If you need a fixed order, wrap the set in `sorted()`." },
    { t: "code", ttl: "No indexing", c: R`
fruits = {"apple", "banana", "cherry"}
print("banana" in fruits)       # membership works, and is very fast
print(fruits[0])`, o: R`
True
TypeError: 'set' object is not subscriptable`, err: true },
    { t: "h", text: "Adding and removing" },
    { t: "table", head: ["Method", "What it does", "If item is missing"], rows: [
      ["`add(x)`", "Adds one item (ignored if already there)", ""],
      ["`update(list)`", "Adds many items", ""],
      ["`remove(x)`", "Removes x", "**KeyError**"],
      ["`discard(x)`", "Removes x", "Does nothing, no error"],
      ["`pop()`", "Removes and returns an **arbitrary** item", "KeyError if the set is empty"],
      ["`clear()`", "Removes everything", ""]
    ]},
    { t: "code", c: R`
nums = {1, 2, 3}
nums.add(11)
nums.add(2)                 # already there, nothing changes
nums.update([20, 30, 1])
print(nums)

nums.remove(3)
nums.discard(99)            # no error even though 99 is not there
print(nums)

nums.remove(99)`, o: R`
{1, 2, 3, 11, 20, 30}
{1, 2, 11, 20, 30}
KeyError: 99`, err: true },
    { t: "note", k: "tip", b: "Prefer `discard()` when you are not sure the item exists. Use `remove()` when a missing item would mean a bug you want to hear about." },
    { t: "h", text: "Set operations: comparing two groups" },
    { t: "p", b: "This is where sets shine. Imagine set `a` is customers who bought in September and set `b` is customers who bought in October. One operator answers each business question." },
    { t: "anim", title: "The four set operations on a Venn diagram", frames: [
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], op: "a = {2, 3, 4, 7, 8, 9}   b = {1, 2, 5, 7, 8, 10}" }), c: "Two sets. The middle area holds items that are in **both**: 2, 7 and 8." },
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], shade: "union", op: "a | b  →  {1, 2, 3, 4, 5, 7, 8, 9, 10}" }), c: "**Union** `a | b`: everything in either set. \"All customers from both months.\"" },
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], shade: "ab", op: "a & b  →  {2, 7, 8}" }), c: "**Intersection** `a & b`: only items in both. \"Customers who came back.\"" },
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], shade: "aonly", op: "a - b  →  {3, 4, 9}" }), c: "**Difference** `a - b`: in a but not in b. \"Customers we lost.\" Order matters: `b - a` is a different answer." },
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], shade: "bonly", op: "b - a  →  {1, 5, 10}" }), c: "`b - a`: in b but not in a. \"New customers this month.\"" },
      { html: V.venn({ a: "a", b: "b", ao: ["3", "4", "9"], ab: ["2", "7", "8"], bo: ["1", "5", "10"], shade: "sym", op: "a ^ b  →  {1, 3, 4, 5, 9, 10}" }), c: "**Symmetric difference** `a ^ b`: in one set or the other, but **not both**. \"Customers who came in only one of the two months.\"" }
    ]},
    { t: "code", ttl: "From your course notebook", c: R`
a = {2, 4, 3, 7, 8, 9}
b = {1, 2, 7, 8, 10, 5}

print(a | b)      # union             same as a.union(b)
print(a & b)      # intersection      same as a.intersection(b)
print(b - a)      # difference        same as b.difference(a)
print(a ^ b)      # symmetric diff    same as a.symmetric_difference(b)`, o: R`
{1, 2, 3, 4, 5, 7, 8, 9, 10}
{8, 2, 7}
{1, 10, 5}
{1, 3, 4, 5, 9, 10}` },
    { t: "table", head: ["Operation", "Operator", "Method", "Gives"], rows: [
      ["Union", "`a | b`", "`a.union(b)`", "Everything in either"],
      ["Intersection", "`a & b`", "`a.intersection(b)`", "Only in both"],
      ["Difference", "`a - b`", "`a.difference(b)`", "In a, not in b"],
      ["Symmetric difference", "`a ^ b`", "`a.symmetric_difference(b)`", "In one, not both"]
    ]},
    { t: "code", ttl: "Update a set in place (from the PDF)", c: R`
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
A |= B            # same as A.update(B)
print(A)

A = {1, 2, 3, 4, 5}
A &= B            # same as A.intersection_update(B)
print(A)

A = {1, 2, 3, 4, 5}
A -= B            # same as A.difference_update(B)
print(A)`, o: R`
{1, 2, 3, 4, 5, 6, 7, 8}
{4, 5}
{1, 2, 3}` },
    { t: "h", text: "Subset, superset, disjoint" },
    { t: "code", c: R`
A = {1, 2, 3}
B = {1, 2, 3, 4, 5}
C = {6, 7, 8}

print(A.issubset(B), A <= B)     # every item of A is in B
print(A < B)                     # subset, and B has extra items
print(B.issuperset(A), B >= A)   # B contains all of A
print(A.isdisjoint(C))           # nothing in common`, o: R`
True True
True
True True
True` },
    { t: "code", ttl: "Proper superset, and changing a set in place", c: R`
A = {1, 2}
B = {1, 2, 3}
print(B > A, A > A)    # B has all of A and more; A is not bigger than itself
A ^= {2, 5}            # same as A = A ^ {2, 5}
print(A)`, o: R`
True False
{1, 5}` },
    { t: "h", text: "Set comprehensions and frozenset" },
    { t: "code", c: R`
squares = {x ** 2 for x in range(-3, 4)}     # -3..3 squared, duplicates drop out
print(sorted(squares))

locked = frozenset([1, 2, 3])                # an immutable set
print(locked)
groups = {frozenset([1, 2]): "Set 1"}        # can be a dictionary key
print(groups[frozenset([2, 1])])`, o: R`
[0, 1, 4, 9]
frozenset({1, 2, 3})
Set 1` },
    { t: "pred", chk: 1, c: R`
s = {3, 1, 3, 2, 1}
s.add(2)
print(len(s))`, o: ["`5`", "`6`", "`3`", "`4`"], a: 2, e: "Duplicates are dropped, so the set is {1, 2, 3}. Adding 2 again changes nothing. Length is 3." },
    { t: "h", text: "Real-world uses" },
    { t: "code", ttl: "Compare two months of customers", c: R`
september = {"Asha", "Ravi", "Neha", "Kiran"}
october = {"Ravi", "Neha", "Imran", "Sara"}

print("Came back:", sorted(september & october))
print("Lost:     ", sorted(september - october))
print("New:      ", sorted(october - september))
print("Total unique customers:", len(september | october))`, o: R`
Came back: ['Neha', 'Ravi']
Lost:      ['Asha', 'Kiran']
New:       ['Imran', 'Sara']
Total unique customers: 6` },
    { t: "code", ttl: "Remove duplicates from a list (course exercise). `def` makes a function: you will learn it in Part 4", c: R`
def remove_duplicates(data):
    return list(set(data))

a = [3, 2, 1, 2, 5, 6, 3, 2, 1, 7, 8, 5, 6, 4]
print(remove_duplicates(a))`, o: R`[1, 2, 3, 4, 5, 6, 7, 8]` },
    { t: "note", k: "why", b: "Checking `x in some_set` is **much** faster than `x in some_list` for big collections. A list checks items one by one. A set jumps straight to the answer using a hash, like a book's index. With a million IDs, that is the difference between instant and painfully slow." },
    { t: "prac", items: [
      { q: "How many unique words are in `\"to be or not to be\"`?", sol: R`
text = "to be or not to be"
print(len(set(text.split())))`, out: R`4` },
      { q: "Two hotel branches have these room types. Which types do both offer, and which only the first?\n`branch1 = {\"Deluxe\", \"Suite\", \"Standard\"}` and `branch2 = {\"Standard\", \"Deluxe\", \"Dorm\"}`", sol: R`
branch1 = {"Deluxe", "Suite", "Standard"}
branch2 = {"Standard", "Deluxe", "Dorm"}
print("Both:", sorted(branch1 & branch2))
print("Only branch 1:", sorted(branch1 - branch2))`, out: R`
Both: ['Deluxe', 'Standard']
Only branch 1: ['Suite']` },
      { q: "Check if every required skill `{\"Python\", \"SQL\"}` is in a candidate's skills `{\"Excel\", \"SQL\", \"Python\", \"Power BI\"}`.", sol: R`
required = {"Python", "SQL"}
candidate = {"Excel", "SQL", "Python", "Power BI"}
print(required.issubset(candidate))`, out: R`True` },
      { q: "Find the letters that appear in \"python\" but not in \"java\". Print them sorted.", sol: R`
print(sorted(set("python") - set("java")))`, out: R`['h', 'n', 'o', 'p', 't', 'y']` }
    ]}
  ],
  take: [
    "Sets hold unique items, with no order and no index.",
    "`{}` is an empty dict. Use `set()` for an empty set.",
    "`add()` one, `update()` many. `remove()` errors if missing, `discard()` does not.",
    "`|` union, `&` intersection, `-` difference, `^` symmetric difference.",
    "Great for removing duplicates and fast `in` checks. Wrap in `sorted()` for a fixed order."
  ],
  quiz: [
    { q: "What does this print?", c: R`print(len({1, 1, 2, 2, 3}))`, o: ["`5`", "`3`", "`2`", "`1`"], a: 1, chk: 1, e: "Duplicates are removed: {1, 2, 3}." },
    { q: "What type is `{}`?", o: ["set", "dict", "list", "tuple"], a: 1, e: "Empty curly brackets make a dictionary. Use set() for an empty set." },
    { q: "What does this print?", c: R`print({1, 2, 3} & {2, 3, 4})`, o: ["`{1, 2, 3, 4}`", "`{2, 3}`", "`{1, 4}`", "`{1}`"], a: 1, chk: 1, e: "& keeps only items found in both sets." },
    { q: "What does this print?", c: R`print({1, 2, 3} - {2, 3, 4})`, o: ["`{1}`", "`{4}`", "`{1, 4}`", "`{2, 3}`"], a: 0, chk: 1, e: "Items in the first set that are not in the second." },
    { q: "What does this print?", c: R`print({1, 2, 3} ^ {2, 3, 4})`, o: ["`{2, 3}`", "`{1, 4}`", "`{1, 2, 3, 4}`", "`set()`"], a: 1, chk: 1, e: "Symmetric difference: items in exactly one of the sets." },
    { q: "Which removes an item without an error if it is missing?", o: ["`remove()`", "`discard()`", "`pop()`", "`del`"], a: 1, e: "discard() quietly does nothing when the item is not there." },
    { q: "Why does `s[0]` fail on a set?", o: ["Sets are empty", "Sets have no order, so no index", "Sets only hold strings", "You must use `s(0)`"], a: 1, e: "Sets are unordered, so there is no first item to index." },
    { q: "Which can NOT go inside a set?", o: ["`5`", "`\"hello\"`", "`(1, 2)`", "`[1, 2]`"], a: 3, e: "Set items must be immutable. A list can change, so it is not allowed." }
  ],
  cards: [
    ["Three key properties of a set", "Unique items only, no order, no index."],
    ["How do you make an empty set?", "`set()`. Writing `{}` makes an empty dictionary."],
    ["`remove()` vs `discard()`", "Both delete an item. `remove()` raises KeyError if it is missing. `discard()` does nothing."],
    ["Union", "`a | b` or `a.union(b)`: everything in either set."],
    ["Intersection", "`a & b` or `a.intersection(b)`: only items in both."],
    ["Difference", "`a - b`: items in a that are not in b. Order matters."],
    ["Symmetric difference", "`a ^ b`: items in one set or the other, but not both."],
    ["How do you check if every item of A is in B?", "`A.issubset(B)` or `A <= B`"],
    ["What is a frozenset?", "An immutable set. It can be used as a dictionary key or inside another set."]
  ],
  cheat: [
    ["s = {1, 2, 3}  s = set()", "Create a set / empty set"],
    ["set(lst)", "Unique items from a list"],
    ["s.add(x)  s.update(lst)", "Add one / many"],
    ["s.remove(x)  s.discard(x)", "Remove (error / no error if missing)"],
    ["a | b  a & b  a - b  a ^ b", "Union, intersection, difference, symmetric diff"],
    ["a <= b  a >= b", "Subset / superset"],
    ["a.isdisjoint(b)", "Nothing in common?"],
    ["sorted(s)", "Sorted list of the items"]
  ]
});
