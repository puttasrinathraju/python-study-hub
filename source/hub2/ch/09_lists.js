chapter({
  id: "lists", part: 3, title: "Lists", nav: "Lists", time: "60 min", lvl: "Beginner", tricky: true,
  keys: "list append insert extend remove pop del clear index count sort sorted reverse copy alias nested list comprehension len sum min max mutable",
  lead: "The list is Python's most used collection: an ordered, changeable row of items. Learn to add, remove, sort and copy, and avoid the copying trap that catches everyone.",
  goals: [
    "Create lists and get items with indexing and slicing",
    "Add items with `append()`, `insert()` and `extend()`",
    "Remove items with `remove()`, `pop()`, `del` and `clear()`",
    "Sort with `sort()` and `sorted()`, and know the difference",
    "Copy lists the right way and avoid the aliasing trap"
  ],
  src: ["PDF: Python Advanced Data Types (Lists)", "Course notebooks types_of_data_types.ipynb and dict_exp.ipynb", "W3Schools: Lists and all list sub-pages"],
  body: [
    { t: "h", text: "What is a list?" },
    { t: "p", b: "A ==list== holds many values in **one variable**, in a fixed **order**. You write it with square brackets and commas. Lists are **mutable**: you can change them after creating them." },
    { t: "code", ttl: "From your course notebook", c: R`
names = ["Raman", "Raghav", "Rajeev", True, 89, 78.45]   # mixed types are allowed
colors = ["Orange", "Blue", "Yellow", "Brown"]
empty = []

print(names)
print(len(colors))
print(type(empty))
print(list("Python"))     # list() turns any sequence into a list`, o: R`
['Raman', 'Raghav', 'Rajeev', True, 89, 78.45]
4
<class 'list'>
['P', 'y', 't', 'h', 'o', 'n']` },
    { t: "table", head: ["Property", "Lists", "Meaning"], rows: [
      ["Ordered", "Yes", "Items keep the order you put them in"],
      ["Mutable", "Yes", "You can change, add and remove items"],
      ["Duplicates", "Allowed", "The same value can appear many times"],
      ["Indexed", "Yes", "Get items by position, starting at 0"]
    ]},
    { t: "h", text: "Indexing and slicing" },
    { t: "p", b: "Lists use exactly the same indexing and slicing rules as strings." },
    { t: "fig", svg: V.strip(["\"Orange\"", "\"Blue\"", "\"Yellow\"", "\"Brown\""], { w: 110, neg: true, rowLabels: true, hl: [1, 2], label: "List of four colours with indexes" }), cap: "`colors[1:3]` takes index 1 and 2: Blue and Yellow." },
    { t: "code", c: R`
colors = ["Orange", "Blue", "Yellow", "Brown"]
print(colors[1])
print(colors[-1])
print(colors[1:3])
print(colors[::-1])
print(colors[-1][2:])     # slice the last string: "Brown" -> "own"
print(colors[-2][2:4])    # "Yellow" -> "ll"`, o: R`
Blue
Brown
['Blue', 'Yellow']
['Brown', 'Yellow', 'Blue', 'Orange']
own
ll` },
    { t: "note", k: "tip", b: "`colors[-1][2:]` works in two steps. `colors[-1]` gives the string \"Brown\". Then `[2:]` slices that string. Reading chained brackets from left to right makes them easy." },
    { t: "h", text: "Changing items" },
    { t: "code", c: R`
colors = ["Orange", "Blue", "Yellow", "Brown"]
colors[1] = "BlueGrey"          # replace one item
print(colors)

nums = [10, 20, 30, 40, 50]
nums[1:3] = [200, 300]          # replace a slice
print(nums)`, o: R`
['Orange', 'BlueGrey', 'Yellow', 'Brown']
[10, 200, 300, 40, 50]` },
    { t: "h", text: "Adding items" },
    { t: "table", head: ["Method", "What it does", "Example"], rows: [
      ["`append(x)`", "Adds **one** item to the end", "`fruits.append(\"cherry\")`"],
      ["`insert(i, x)`", "Adds one item **at position i**, pushing the rest right", "`fruits.insert(1, \"orange\")`"],
      ["`extend(list)`", "Adds **every item** from another list", "`fruits.extend([\"date\", \"fig\"])`"],
      ["`+=`", "Same as extend", "`fruits += [\"grape\"]`"]
    ]},
    { t: "code", ttl: "From the PDF", c: R`
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)
fruits.insert(1, "orange")
print(fruits)
fruits.extend(["date", "elderberry"])
print(fruits)
fruits += ["fig", "grape"]
print(fruits)`, o: R`
['apple', 'banana', 'cherry']
['apple', 'orange', 'banana', 'cherry']
['apple', 'orange', 'banana', 'cherry', 'date', 'elderberry']
['apple', 'orange', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']` },
    { t: "note", k: "trap", h: "Trap! append() vs extend()", b: "`append()` adds its argument as **one** item, even if that argument is a whole list. You end up with a list inside a list.", c: R`
a = [1, 2]
a.append([3, 4])
print(a, len(a))

b = [1, 2]
b.extend([3, 4])
print(b, len(b))`, o: R`
[1, 2, [3, 4]] 3
[1, 2, 3, 4] 4` },
    { t: "h", text: "Removing items" },
    { t: "table", head: ["Way", "Removes", "Gives back the item?", "If missing"], rows: [
      ["`remove(x)`", "The **first** item equal to x", "No", "`ValueError`"],
      ["`pop(i)`", "The item at index i (last item if no i)", "**Yes**", "`IndexError`"],
      ["`del lst[i]`", "The item at index i, or a slice", "No", "`IndexError`"],
      ["`clear()`", "Everything", "No", ""]
    ]},
    { t: "code", ttl: "From the PDF", c: R`
fruits = ["apple", "banana", "cherry", "banana", "date"]

fruits.remove("banana")        # only the first banana goes
print(fruits)

removed = fruits.pop(1)        # remove index 1 and keep it
print(removed)
print(fruits)

del fruits[0]
print(fruits)

fruits.clear()
print(fruits)`, o: R`
['apple', 'cherry', 'banana', 'date']
cherry
['apple', 'banana', 'date']
['banana', 'date']
[]` },
    { t: "note", k: "trap", b: "`remove()` fails if the item is not there. Check first with `in`.", c: R`
fruits = ["apple", "banana"]
if "mango" in fruits:
    fruits.remove("mango")
else:
    print("mango not in list")
fruits.remove("mango")`, o: R`
mango not in list
ValueError: list.remove(x): x not in list`, err: true },
    { t: "h", text: "Finding items" },
    { t: "code", c: R`
fruits = ["apple", "banana", "cherry", "banana", "date"]
print(fruits.index("banana"))   # position of the first match
print(fruits.count("banana"))   # how many times
print("apple" in fruits)
print("fig" in fruits)`, o: R`
1
2
True
False` },
    { t: "h", text: "Sorting: sort() vs sorted()" },
    { t: "cmp", l: { h: "`list.sort()`", items: ["Sorts the list **in place** (changes it)", "Returns `None`", "Only works on lists"], c: R`
nums = [3, 1, 4, 1, 5]
nums.sort()
print(nums)`, o: R`[1, 1, 3, 4, 5]` }, r: { h: "`sorted(list)`", items: ["Makes a **new** sorted list", "The original is untouched", "Works on any collection: tuples, strings, sets, dict keys"], c: R`
original = [3, 1, 4, 1, 5]
new = sorted(original)
print(new)
print(original)`, o: R`
[1, 1, 3, 4, 5]
[3, 1, 4, 1, 5]` } },
    { t: "note", k: "trap", h: "Trap! x = x.sort()", b: "`sort()` changes the list and returns `None`. If you store its result, you lose your list.", c: R`
nums = [3, 1, 2]
nums = nums.sort()
print(nums)`, o: R`None` },
    { t: "code", ttl: "More sorting options", c: R`
colors = ["Orange", "Blue", "Yellow", "Brown"]
colors.sort(reverse=True)               # Z to A (reverse order)
print(colors)

words = ["banana", "apple", "Cherry", "fig"]
print(sorted(words))                    # capitals sort first
print(sorted(words, key=str.lower))     # ignore case
print(sorted(words, key=len))           # shortest first

nums = [5, 2, 8]
nums.reverse()                          # just flip the order
print(nums)`, o: R`
['Yellow', 'Orange', 'Brown', 'Blue']
['Cherry', 'apple', 'banana', 'fig']
['apple', 'banana', 'Cherry', 'fig']
['fig', 'apple', 'banana', 'Cherry']
[8, 2, 5]` },
    { t: "p", b: "`key=` tells Python **what to sort by**. `key=len` sorts by length, `key=str.lower` sorts as if everything were lowercase. You will use `key=` with `lambda` in the Functions chapter." },
    { t: "h", text: "Copying lists: the aliasing trap" },
    { t: "p", b: "This is the most important idea in this chapter. Writing `b = a` does **not** copy a list. It creates a second name for the **same** list. Change one and you change \"both\"." },
    { t: "anim", title: "Two names, one list", trace: { code: R`
a = [1, 2, 3]
b = a
b[0] = 99
print(a)
c = a.copy()
c[1] = 50
print(a, c)`, steps: [
      { l: 1, v: { a: "@1" }, h: { 1: "[1, 2, 3]" }, c: "Python builds a list in memory (object 1) and points `a` at it." },
      { l: 2, v: { b: "@1" }, c: "`b = a` does **not** build a new list. `b` now points at the **same** object 1." },
      { l: 3, h: { 1: "[99, 2, 3]" }, c: "We change the first item through `b`. There is only one list, so object 1 changes." },
      { l: 4, o: "[99, 2, 3]\n", c: "Printing `a` shows 99. Surprise! `a` and `b` are two names for the same list." },
      { l: 5, v: { c: "@2" }, h: { 2: "[99, 2, 3]" }, c: "`copy()` builds a **brand-new** list (object 2) with the same items." },
      { l: 6, h: { 2: "[99, 50, 3]" }, c: "Changing `c` only changes object 2." },
      { l: 7, o: "[99, 2, 3] [99, 50, 3]\n", c: "`a` is safe. Use `.copy()`, `[:]` or `list()` whenever you need an independent copy." }
    ]}},
    { t: "code", c: R`
original = [1, 2, 3]
copy_1 = original.copy()
copy_2 = original[:]
copy_3 = list(original)
copy_1[0] = 5
print(original, copy_1)`, o: R`[1, 2, 3] [5, 2, 3]` },
    { t: "note", k: "trap", h: "Trap! Shallow copies of nested lists", b: "`copy()` copies only the outer list. Inner lists are still shared. For lists inside lists, use `copy.deepcopy()`.", c: R`
import copy
a = [[1, 2], [3, 4]]
b = a.copy()
b[0][0] = 99
print(a)                  # changed!

c = copy.deepcopy(a)
c[0][0] = 0
print(a, c)`, o: R`
[[99, 2], [3, 4]]
[[99, 2], [3, 4]] [[0, 2], [3, 4]]` },
    { t: "pred", chk: 1, c: R`
x = [10, 20]
y = x
y.append(30)
print(len(x))`, o: ["`2`", "`3`", "An error", "`30`"], a: 1, e: "`y = x` makes `y` another name for the same list. Appending through `y` changes the list that `x` points at too." },
    { t: "h", text: "Nested lists" },
    { t: "p", b: "A list can hold other lists. This is how you store a table: a list of rows." },
    { t: "fig", svg: V.grid([["1", "2", "3"], ["4", "5", "6"]], { rl: ["matrix[0]", "matrix[1]"], cl: ["[0]", "[1]", "[2]"], hl: [[1, 2]], label: "2 by 3 table of numbers" }), cap: "`matrix[1][2]`: row 1, then item 2 in that row, which is 6." },
    { t: "code", c: R`
matrix = [[1, 2, 3],
          [4, 5, 6]]
print(matrix[1])
print(matrix[1][2])

a = [1, 2, 3, 4, [5, 6]]     # course notebook
print(a[-1][-1])`, o: R`
[4, 5, 6]
6
6` },
    { t: "h", text: "Looping over lists" },
    { t: "code", c: R`
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit.upper())

for i, fruit in enumerate(fruits):
    print(i, fruit)

i = 0
while i < len(fruits):        # while loop with an index
    print(fruits[i][0], end=" ")
    i += 1`, o: R`
APPLE
BANANA
CHERRY
0 apple
1 banana
2 cherry
a b c` },
    { t: "note", k: "trap", h: "Trap! Do not remove items while looping over the same list", b: "Removing shifts the remaining items left, so the loop skips one. Loop over a copy (`for x in nums[:]:`) or build a new list instead.", c: R`
nums = [2, 4, 5, 6]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
print(nums)      # 4 was skipped!`, o: R`[4, 5]` },
    { t: "h", text: "Useful built-in functions" },
    { t: "code", c: R`
sales = [45, 12, 78, 34]
print(len(sales), sum(sales), min(sales), max(sales))
print(sum(sales) / len(sales))        # average
print(sorted(sales, reverse=True))
print(any(s > 70 for s in sales))     # at least one over 70?
print(all(s > 10 for s in sales))     # all over 10?`, o: R`
4 169 12 78
42.25
[78, 45, 34, 12]
True
True` },
    { t: "h", text: "Joining and repeating lists" },
    { t: "code", c: R`
a = [1, 2]
b = [3, 4]
print(a + b)
print([0] * 5)          # a list of five zeros`, o: R`
[1, 2, 3, 4]
[0, 0, 0, 0, 0]` },
    { t: "h", text: "A first look at list comprehensions" },
    { t: "p", b: "A ==list comprehension== builds a new list in one line. You will master them in the Comprehensions chapter. For now, learn to read them." },
    { t: "code", c: R`
squares = [x ** 2 for x in range(10)]
print(squares)

evens = [x for x in range(10) if x % 2 == 0]
print(evens)

fruits = ["apple", "banana", "cherry"]
print([f.upper() for f in fruits])`, o: R`
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
[0, 2, 4, 6, 8]
['APPLE', 'BANANA', 'CHERRY']` },
    { t: "h", text: "Removing duplicates (course exercise)" },
    { t: "code", c: R`
a = [2, 4, 2, 3, 3, 6, 7, 8, 10, 2, 4, 5, 5, 19, 21, 16, 16, 11, 2, 1]

print(list(set(a)))          # quick, but the original order is lost

unique = []
for n in a:                  # keeps the first-seen order
    if n not in unique:
        unique.append(n)
print(unique)`, o: R`
[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 16, 19, 21]
[2, 4, 3, 6, 7, 8, 10, 5, 19, 21, 16, 11, 1]` },
    { t: "deck", title: "List methods at a glance", s: [
      { big: "11 list methods. You will use 6 of them every day.", items: ["**Add**: append, insert, extend", "**Remove**: remove, pop, clear", "**Find**: index, count", "**Order**: sort, reverse", "**Copy**: copy"] },
      { h: "Add", c: R`
cart = ["rice"]
cart.append("dal")
cart.insert(0, "oil")
cart.extend(["salt", "sugar"])
print(cart)`, o: R`['oil', 'rice', 'dal', 'salt', 'sugar']` },
      { h: "Remove", c: R`
cart = ['oil', 'rice', 'dal', 'salt', 'sugar']
cart.remove("salt")
last = cart.pop()
print(last, cart)`, o: R`sugar ['oil', 'rice', 'dal']` },
      { h: "Find", c: R`
scores = [70, 85, 70, 90]
print(scores.index(85), scores.count(70), 90 in scores)`, o: R`1 2 True` },
      { h: "Order", c: R`
scores = [70, 85, 70, 90]
scores.sort(reverse=True)
print(scores)
print(sorted(["b", "a", "c"]))`, o: R`
[90, 85, 70, 70]
['a', 'b', 'c']` },
      { h: "Copy", b: "Use `.copy()` when you need a separate list. `b = a` only makes a second name.", c: R`
a = [1, 2]
b = a.copy()
b.append(3)
print(a, b)`, o: R`[1, 2] [1, 2, 3]` }
    ]},
    { t: "prac", items: [
      { q: "From your course: split `no = [2, 3, 5, 7, 43, 41, 87, 65, 34, 22, 9, 8]` into two lists, `even` and `odd`.", sol: R`
no = [2, 3, 5, 7, 43, 41, 87, 65, 34, 22, 9, 8]
even = []
odd = []
for n in no:
    if n % 2 == 0:
        even.append(n)
    else:
        odd.append(n)
print(even, odd)`, out: R`[2, 34, 22, 8] [3, 5, 7, 43, 41, 87, 65, 9]` },
      { q: "Given `marks = [56, 89, 72, 95, 61]`, print the top 3 marks, highest first.", sol: R`
marks = [56, 89, 72, 95, 61]
print(sorted(marks, reverse=True)[:3])`, out: R`[95, 89, 72]` },
      { q: "Remove every \"NA\" from `data = [\"12\", \"NA\", \"7\", \"NA\", \"30\"]` and convert the rest to integers.", hint: "Build a new list instead of removing while looping.", sol: R`
data = ["12", "NA", "7", "NA", "30"]
clean = []
for d in data:
    if d != "NA":
        clean.append(int(d))
print(clean)`, out: R`[12, 7, 30]` },
      { q: "You have `queue = [\"Asha\", \"Vikram\", \"Neha\"]`. Serve the first person (remove and print them), then add \"Ravi\" to the end.", sol: R`
queue = ["Asha", "Vikram", "Neha"]
served = queue.pop(0)
print("Serving", served)
queue.append("Ravi")
print(queue)`, out: R`
Serving Asha
['Vikram', 'Neha', 'Ravi']` },
      { q: "Find the second largest value in `[45, 78, 12, 78, 60]` (the answer is 60, not 78).", hint: "Remove duplicates first, then sort.", sol: R`
nums = [45, 78, 12, 78, 60]
unique_sorted = sorted(set(nums), reverse=True)
print(unique_sorted[1])`, out: R`60` }
    ]}
  ],
  take: [
    "Lists are ordered, mutable, allow duplicates. Index from 0, slice like strings.",
    "`append()` adds one item. `extend()` adds each item of another list.",
    "`remove(x)` removes by value. `pop(i)` removes by index and gives it back.",
    "`sort()` changes the list and returns None. `sorted()` returns a new list.",
    "`b = a` does not copy. Use `a.copy()`, `a[:]` or `list(a)`. Use `deepcopy` for nested lists.",
    "Never remove from a list while looping over it."
  ],
  quiz: [
    { q: "What does this print?", c: R`
nums = [10, 20, 30, 40]
print(nums[-2])`, o: ["`20`", "`30`", "`40`", "`-20`"], a: 1, chk: 1, e: "-1 is the last item (40), -2 is the one before it (30)." },
    { q: "What does this print?", c: R`
a = [1, 2]
a.append([3])
print(len(a))`, o: ["`2`", "`3`", "`4`", "An error"], a: 1, chk: 1, e: "append adds the whole `[3]` as one item, so there are 3 items." },
    { q: "What does this print?", c: R`
a = [5, 3, 9]
print(a.sort())`, o: ["`[3, 5, 9]`", "`None`", "`[9, 5, 3]`", "An error"], a: 1, chk: 1, e: "sort() changes the list in place and returns None." },
    { q: "What does this print?", c: R`
a = [1, 2, 3]
b = a
b.append(4)
print(a)`, o: ["`[1, 2, 3]`", "`[1, 2, 3, 4]`", "`[4]`", "An error"], a: 1, chk: 1, e: "b and a are the same list. Use a.copy() to get an independent copy." },
    { q: "Which removes the item at index 2 **and gives it back**?", o: ["`lst.remove(2)`", "`del lst[2]`", "`lst.pop(2)`", "`lst.clear(2)`"], a: 2, e: "pop(i) removes and returns. remove(2) would remove the value 2, not index 2." },
    { q: "What does this print?", c: R`
items = ["a", "b", "a", "c"]
items.remove("a")
print(items)`, o: ["`['b', 'c']`", "`['b', 'a', 'c']`", "`['a', 'b', 'c']`", "An error"], a: 1, chk: 1, e: "remove deletes only the first match." },
    { q: "What does this print?", c: R`print([1, 2] * 2)`, o: ["`[2, 4]`", "`[1, 2, 1, 2]`", "`[[1, 2], [1, 2]]`", "An error"], a: 1, chk: 1, e: "Multiplying a list repeats it. (NumPy arrays behave differently, as you will see.)" },
    { q: "What does this print?", c: R`
m = [[1, 2], [3, 4]]
print(m[1][0])`, o: ["`2`", "`3`", "`[3, 4]`", "`1`"], a: 1, chk: 1, e: "m[1] is [3, 4], and item 0 of that is 3." },
    { q: "What does this print?", c: R`print(sorted(["b", "C", "a"]))`, o: ["`['a', 'b', 'C']`", "`['C', 'a', 'b']`", "`['a', 'C', 'b']`", "`['b', 'C', 'a']`"], a: 1, chk: 1, e: "Capital letters sort before small letters. Use `key=str.lower` to ignore case." },
    { q: "Which makes an independent copy of list `a`?", o: ["`b = a`", "`b = a.copy()`", "`b = a.sort()`", "`b == a`"], a: 1, e: "copy(), a[:] and list(a) all build a new list." }
  ],
  cards: [
    ["Four properties of a list", "Ordered, mutable (changeable), allows duplicates, indexed from 0."],
    ["`append()` vs `extend()`", "`append(x)` adds x as **one** item. `extend(list)` adds **each** item of the list."],
    ["`remove()` vs `pop()`", "`remove(value)` deletes the first match by value. `pop(index)` deletes by position and **returns** the item."],
    ["`sort()` vs `sorted()`", "`lst.sort()` changes the list and returns None. `sorted(lst)` returns a new sorted list and leaves the original alone."],
    ["How do you sort largest first?", "`lst.sort(reverse=True)` or `sorted(lst, reverse=True)`"],
    ["What does `b = a` do for lists?", "Makes `b` another **name** for the same list. Changes through `b` show up in `a`."],
    ["Three ways to copy a list", "`a.copy()`, `a[:]`, `list(a)`. For nested lists use `copy.deepcopy(a)`."],
    ["How do you get an item from a nested list?", "Chain the brackets: `matrix[row][col]`, e.g. `matrix[1][2]`."],
    ["Why not remove items while looping over the same list?", "Items shift left and the loop skips some. Loop over a copy or build a new list."],
    ["Average of a list", "`sum(lst) / len(lst)`"],
    ["Quick way to remove duplicates (order not kept)", "`list(set(lst))`"]
  ],
  cheat: [
    ["lst = [1, 2, 3]", "Create a list"],
    ["lst[0]  lst[-1]  lst[1:3]", "Index and slice"],
    ["lst.append(x)", "Add to the end"],
    ["lst.insert(i, x)", "Add at position i"],
    ["lst.extend(other)", "Add all items of another list"],
    ["lst.remove(x)", "Remove first x"],
    ["lst.pop()  lst.pop(i)", "Remove and return last / item i"],
    ["del lst[i]", "Delete item i"],
    ["lst.index(x)  lst.count(x)", "Find position / count"],
    ["lst.sort()  sorted(lst)", "Sort in place / new sorted list"],
    ["lst.copy()", "Independent copy"],
    ["len(lst)  sum(lst)  min(lst)  max(lst)", "Size and stats"]
  ]
});
