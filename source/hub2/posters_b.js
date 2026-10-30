/* ---------- Revision posters: Part 3 ---------- */
POSTERS.strings = {
  title: "Strings: Index, Slice & Clean",
  sub: "Positions start at 0, stop is never included, and every method returns a new string.",
  mods: [
    { title: "Indexing and slicing", sub: "s[start:stop:step]", cards: [
      { h: "Positions", span: 1, svg: V.strip(["P", "y", "t", "h", "o", "n"], { neg: true, rowLabels: true, w: 52, hl: [2, 3, 4], bracket: [2, 5, "s[2:5] → \"tho\""] }) },
      { h: "Slices of \"Python\"", rules: [["acc", "s[0]  s[-1]", "\"P\"  \"n\""], ["acc", "s[:3]", "\"Pyt\" first 3"], ["acc", "s[-3:]", "\"hon\" last 3"], ["acc", "s[::2]", "\"Pto\" every 2nd"], ["acc", "s[::-1]", "\"nohtyP\" reversed"]] },
      { h: "Two rules", k: "key", items: ["Stop is **never** included: `s[2:5]` has 3 characters", "`s[10]` is an IndexError, but a slice past the end is fine: `s[2:100]` gives \"thon\""] }
    ]},
    { title: "Immutable, so methods return new text", sub: "Store the result or it is lost", cards: [
      { h: "replace() makes a new string", k: "trap", c: R`
city = "Jaipur"
city.replace("Jai", "Udai")
print(city)
city = city.replace("Jai", "Udai")
print(city)`, o: R`
Jaipur
Udaipur` },
      { h: "Cleaning pipeline", svg: V.flow([
        { t: "\"  priya SHARMA  \"", k: "trap", code: 1 }, { t: ".strip()", k: "box", code: 1 }, { t: ".title()", k: "box", code: 1 }, { t: "\"Priya Sharma\"", k: "tip", code: 1 }
      ], { label: "strip then title" }), foot: "Methods chain left to right" }
    ], table: { head: ["Method", "Does", "Example → result"], rows: [
      ["`strip()`", "remove spaces at both ends", "`\" hi \"` → `\"hi\"`"],
      ["`split(\",\")`", "text → list", "`\"a,b\"` → `['a', 'b']`"],
      ["`\"-\".join(l)`", "list → text", "`['a', 'b']` → `\"a-b\"`"],
      ["`find(x)`", "position, or -1", "`\"data\".find(\"t\")` → `2`"],
      ["`count(x)`", "how many", "`\"banana\".count(\"a\")` → `3`"],
      ["`isdigit()`", "only digits?", "`\"3.5\".isdigit()` → [[no:False]]"]
    ]}}
  ]
};

POSTERS.lists = {
  title: "Lists: Add, Remove, Sort & Copy",
  sub: "Ordered, changeable, duplicates allowed. And b = a is never a copy.",
  mods: [
    { title: "Changing a list", sub: "Methods change the list in place", cards: [
      { h: "append vs extend", span: 1, svg: V.strip(["1", "2", "[3, 4]"], { w: 70, pos: false, hl: [2], title: "a.append([3, 4])  →  3 items" }) + V.strip(["1", "2", "3", "4"], { w: 70, pos: false, hl: [2, 3], title: "a.extend([3, 4])  →  4 items" }) },
      { h: "Removing", rules: [["acc", "remove(x)", "first x, by value"], ["acc", "pop(i)", "by index, gives it back"], ["acc", "del lst[i]", "by index"], ["acc", "clear()", "everything"], ["trap", "remove(\"z\")", "ValueError if missing"]] },
      { h: "sort() vs sorted()", k: "trap", c: R`
nums = [3, 1, 2]
print(sorted(nums), nums)
print(nums.sort(), nums)`, o: R`
[1, 2, 3] [3, 1, 2]
None [1, 2, 3]` }
    ]},
    { title: "The copy trap", sub: "Two names can share one list", cards: [
      { h: "b = a: one list, two names", k: "trap", svg: V.refs({ vars: [["a", 0], ["b", 0]], objs: [{ v: "[99, 2, 3]", t: "obj 1" }], objW: 150, gapX: 80 }), verdict: ["no", "b[0] = 99 changes a too"] },
      { h: "c = a.copy(): two lists", k: "tip", svg: V.refs({ vars: [["a", 0], ["c", 1]], objs: [{ v: "[1, 2, 3]", t: "obj 1" }, { v: "[99, 2, 3]", t: "obj 2" }], objW: 150, gapX: 80 }), verdict: ["ok", "a is safe"] },
      { h: "Never remove while looping", k: "trap", span: 1, c: R`
nums = [2, 4, 5, 6]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
print(nums)`, o: R`[4, 5]`, foot: "4 was skipped. Build a new list instead: [n for n in nums if n % 2]" }
    ], table: { head: ["I want to...", "Use"], rows: [
      ["add one item", "`lst.append(x)`"], ["add many items", "`lst.extend(other)`"], ["add at a position", "`lst.insert(i, x)`"],
      ["sort and keep the original", "`sorted(lst)`"], ["biggest first", "`sorted(lst, reverse=True)`"], ["a separate copy", "`lst.copy()` or `lst[:]`"]
    ]}}
  ]
};

POSTERS.tuples = {
  title: "Tuples: Fixed Records & Unpacking",
  sub: "A list that cannot change. Perfect for records, return values and dictionary keys.",
  mods: [
    { title: "Immutable sequences", sub: "Read anything, change nothing", cards: [
      { h: "No changes allowed", k: "trap", c: R`
t = (10, 20)
t[0] = 15`, verdict: ["no", "TypeError: no item assignment"] },
      { h: "The comma makes it", k: "key", c: R`
print(type((11)))
print(type((11,)))`, o: R`
<class 'int'>
<class 'tuple'>` },
      { h: "Just two methods", rules: [["acc", "t.count(x)", "how many times"], ["acc", "t.index(x)", "first position"], ["acc", "t + (x,)", "\"add\" by making a new tuple"]] },
      { h: "Hidden mutability", k: "trap", c: R`
t = (1, [2, 3])
t[1].append(4)
print(t)`, o: R`(1, [2, 3, 4])` }
    ]},
    { title: "Packing and unpacking", sub: "Many values in, many names out", cards: [
      { h: "name, age, city = person", span: 1, svg: V.refs({ vars: [["name", 0], ["age", 1], ["city", 2]], objs: [{ v: "\"John\"", t: "item 0" }, { v: "25", t: "item 1" }, { v: "\"New York\"", t: "item 2" }], objW: 170 }), foot: "Matched by position. Counts must match or you get ValueError" },
      { h: "Star collects the rest", c: R`
first, *mid, last = (1, 2, 3, 4, 5)
print(first, mid, last)`, o: R`1 [2, 3, 4] 5` },
      { h: "Swap and return", c: R`
a, b = 1, 2
a, b = b, a
print(a, b)`, o: R`2 1` }
    ], table: { head: ["", "List [ ]", "Tuple ( )"], rows: [
      ["Change items", "[[ok:Yes]]", "[[no:No]]"], ["Methods", "many", "`count`, `index`"], ["Dict key", "[[no:No]]", "[[ok:Yes]]"], ["Best for", "collections that change", "fixed records"]
    ]}}
  ]
};

POSTERS.sets = {
  title: "Sets: Unique Items & Venn Operations",
  sub: "No order, no index, no duplicates. Compare two groups in one line.",
  mods: [
    { title: "What a set does", sub: "Duplicates vanish, membership is fast", cards: [
      { h: "Duplicates disappear", c: R`
a = {2, 4, 3, 2, 4, 3}
print(a, len(a))`, o: R`{2, 3, 4} 3` },
      { h: "{} is not a set", k: "trap", c: R`
print(type({}))
print(type(set()))`, o: R`
<class 'dict'>
<class 'set'>` },
      { h: "Adding and removing", span: 1, rules: [["acc", "s.add(x)", "one item"], ["acc", "s.update(lst)", "many items"], ["trap", "s.remove(x)", "KeyError if missing"], ["tip", "s.discard(x)", "no error if missing"], ["trap", "s[0]", "TypeError: no index"]] }
    ]},
    { title: "The four operations", sub: "a = September customers, b = October customers", cards: [
      { h: "a | b  union", svg: V.venn({ a: "a", b: "b", ao: ["3", "4"], ab: ["2", "7"], bo: ["1", "5"], fs: 34, shade: "union" }), foot: "everyone, once" },
      { h: "a & b  intersection", svg: V.venn({ a: "a", b: "b", ao: ["3", "4"], ab: ["2", "7"], bo: ["1", "5"], fs: 34, shade: "ab" }), foot: "came back" },
      { h: "a - b  difference", svg: V.venn({ a: "a", b: "b", ao: ["3", "4"], ab: ["2", "7"], bo: ["1", "5"], fs: 34, shade: "aonly" }), foot: "lost customers" },
      { h: "a ^ b  symmetric", svg: V.venn({ a: "a", b: "b", ao: ["3", "4"], ab: ["2", "7"], bo: ["1", "5"], fs: 34, shade: "sym" }), foot: "came only once" }
    ], table: { head: ["Operation", "Operator", "Method", "Answers"], rows: [
      ["Union", "`a | b`", "`a.union(b)`", "all customers"], ["Intersection", "`a & b`", "`a.intersection(b)`", "returning customers"],
      ["Difference", "`a - b`", "`a.difference(b)`", "lost customers"], ["Symmetric", "`a ^ b`", "`a.symmetric_difference(b)`", "one-time customers"]
    ]}}
  ]
};

POSTERS.dicts = {
  title: "Dictionaries: Keys, Values & Patterns",
  sub: "Look things up by name. The shape of most real data.",
  mods: [
    { title: "Look up by key", sub: "Keys are unique and unchangeable", cards: [
      { h: "Key → value", span: 1, svg: V.refs({ vars: [["\"name\"", 0], ["\"age\"", 1], ["\"city\"", 2]], objs: [{ v: "\"Raman\"", t: "str" }, { v: "16", t: "int" }, { v: "\"Jaipur\"", t: "str" }], objW: 160 }) },
      { h: "[ ] vs get()", rules: [["trap", "d[\"email\"]", "KeyError if missing"], ["tip", "d.get(\"email\")", "None if missing"], ["tip", "d.get(\"email\", \"-\")", "your default"], ["acc", "d[\"age\"] = 17", "adds or updates"]] },
      { h: "in checks keys only", k: "trap", c: R`
d = {"name": "Asha"}
print("name" in d, "Asha" in d)`, o: R`True False` }
    ]},
    { title: "Nested data and patterns", sub: "One bracket per level", cards: [
      { h: "data[0][\"marks\"][\"maths\"][-1]", svg: V.flow([
        { t: "data  (list)", k: "soft", code: 1, lbl: "[0]" }, { t: "Raman's dict", k: "box", lbl: "[\"marks\"]" }, { t: "marks dict", k: "box", lbl: "[\"maths\"]" }, { t: "[99, 98]", k: "acc", code: 1, lbl: "[-1]" }, { t: "98", k: "tip", code: 1 }
      ], { label: "Following a nested path" }) },
      { h: "Count pattern", c: R`
counts = {}
for w in "a b a c a".split():
    counts[w] = counts.get(w, 0) + 1
print(counts)`, o: R`{'a': 3, 'b': 1, 'c': 1}` }
    ], table: { head: ["Pattern", "Core line", "Like"], rows: [
      ["Count", "`d[k] = d.get(k, 0) + 1`", "COUNTIF"],
      ["Total by category", "`d[cat] = d.get(cat, 0) + amt`", "pivot table / GROUP BY"],
      ["Group", "`d.setdefault(k, []).append(x)`", "grouping rows"],
      ["Look up", "`codes.get(code, \"Unknown\")`", "VLOOKUP"]
    ]}}
  ]
};

POSTERS.comprehensions = {
  title: "Comprehensions & Choosing a Collection",
  sub: "Build lists in one line, then pick the right container for the job.",
  mods: [
    { title: "One-line lists", sub: "[keep for item in items if test]", cards: [
      { h: "Anatomy", span: 1, svg: ART.compAnatomy() },
      { h: "Filter: if at the END", k: "tip", c: R`
nums = [-2, 5, -1, 8]
print([x for x in nums if x > 0])`, o: R`[5, 8]` },
      { h: "Transform: if-else at the FRONT", k: "key", c: R`
nums = [-2, 5, -1, 8]
print([x if x > 0 else 0 for x in nums])`, o: R`[0, 5, 0, 8]` },
      { h: "Grid trap", k: "trap", span: 1, c: R`
bad = [[0] * 2] * 2
bad[0][0] = 9
print(bad)
good = [[0] * 2 for _ in range(2)]
good[0][0] = 9
print(good)`, o: R`
[[9, 0], [9, 0]]
[[9, 0], [0, 0]]` }
    ]},
    { title: "Which collection?", sub: "Ask these questions in order", cards: [
      { h: "Decision chart", span: 1, svg: V.flow([
        { t: "Look things up by\na name or ID?", d: true, k: "hl", lbl: "no" },
        { t: "Only unique items?", d: true, k: "hl", lbl: "no" },
        { t: "Must never change?", d: true, k: "hl", lbl: "no" },
        { t: "list  [ ]", k: "tip", code: 1 }
      ], { side: [{ from: 0, t: "dict  {k: v}", k: "acc", lbl: "yes" }, { from: 1, t: "set  { }", k: "acc", lbl: "yes" }, { from: 2, t: "tuple  ( )", k: "acc", lbl: "yes" }], label: "Choosing a collection" }) }
    ], table: { head: ["", "str", "list", "tuple", "set", "dict"], rows: [
      ["Mutable", "[[no:No]]", "[[ok:Yes]]", "[[no:No]]", "[[ok:Yes]]", "[[ok:Yes]]"],
      ["Ordered", "Yes", "Yes", "Yes", "[[no:No]]", "Yes"],
      ["Indexed", "Yes", "Yes", "Yes", "[[no:No]]", "by key"],
      ["Duplicates", "Yes", "Yes", "Yes", "[[no:No]]", "keys: No"]
    ]}}
  ]
};
