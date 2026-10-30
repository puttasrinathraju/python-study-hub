# "Collections inside collections" sections for Part 3. Every output comes from running the code.
import subprocess, sys, json, tempfile, os
WORK = tempfile.mkdtemp()
def run(code, err=False):
    p = subprocess.run([sys.executable, '-c', code], capture_output=True, text=True, cwd=WORK, timeout=30)
    if err:
        assert p.returncode != 0, code
        return (p.stdout + p.stderr.strip().split('\n')[-1]).strip()
    assert p.returncode == 0 and not p.stderr.strip(), (code, p.stderr); return p.stdout.rstrip('\n')
class Raw(str): pass
def C(code, ttl=None, err=False):
    code = code.strip('\n'); b = {"t": "code", "c": code, "o": run(code, err)}
    if ttl: b["ttl"] = ttl
    if err: b["err"] = True
    return b
def P(q, hint, sol, why, starter):
    sol = sol.strip('\n'); return {"q": q, "hint": hint, "sol": sol, "out": run(sol), "why": why, "starter": starter}
def strip(items, **o): return Raw('V.strip(' + json.dumps(items, ensure_ascii=False) + ', ' + json.dumps(o, ensure_ascii=False) + ')')
def cat(*parts): return Raw(' + '.join(p if isinstance(p, Raw) else json.dumps(p, ensure_ascii=False) for p in parts))
RULE = {"t": "note", "k": "key", "b": "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you."}
Y, N = "[[ok:✓ Yes]]", "[[no:✗ No]]"
TABLE = {"t": "table", "rowHead": True, "title": "What can go inside what", "head": ["Can this go inside →", "list", "tuple", "set", "dict key", "dict value"], "rows": [
  ["String, number, `True`", Y, Y, Y, Y, Y],
  ["Tuple (of strings or numbers)", Y, Y, Y, Y, Y],
  ["`frozenset`", Y, Y, Y, Y, Y],
  ["List", Y, Y, N, N, Y],
  ["Set", Y, Y, N, N, Y],
  ["Dictionary", Y, Y, N, N, Y]],
  "cap": "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change."}
WHY = {"t": "note", "k": "why", "h": "Why it works this way", "b": "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either."}
S = {}
S["strings"] = ("String methods reference", [
 {"t": "h", "text": "Strings inside lists, tuples, sets and dictionaries"},
 {"t": "p", "b": "In real data, strings rarely live alone. Names, cities and room types sit inside lists, tuples, sets and dictionaries. To use a string method, first **take the string out** with `[ ]` or a loop, then use the method on it."},
 RULE,
 {"t": "note", "k": "tip", "b": "A string can only hold characters, never other collections. But a string can go **inside every** collection: lists, tuples, sets, and dictionaries as a key or a value, because a string can never change."},
 C('cities = ["pune", "goa"]\nprint(cities[0].upper())     # hand: the list → [0] → the string "pune"', "1. A string inside a list"),
 C('cities = ["pune", "goa"]\nfor city in cities:          # each turn, city is one string\n    print(city.title())', "2. Every string in a list: loop"),
 C('full_name = ("Asha", "Reddy")\nprint(full_name[1].lower(), len(full_name[1]))', "3. A string inside a tuple"),
 C('tags = {"wifi", "pool"}\nprint(sorted(tag.upper() for tag in tags))   # a set has no [0], so loop', "4. Strings inside a set"),
 C('guest = {"name": "  asha reddy ", "city": "PUNE"}\nprint(guest["name"].strip().title(), guest["city"].capitalize())', "5. A string as a dictionary value"),
 C('row = "Asha,82,Pune"\nparts = row.split(",")       # string → list of strings\nprint(parts, parts[2].upper())', "6. A string becomes a list with split()"),
 C('items = ["tea", "coffee", "cake"]\nprint(" | ".join(items))       # list of strings → one string', "7. A list becomes a string with join()"),
 C('cities = ["pune", "goa"]\nprint(cities.upper())', "The classic mistake: the list is in your hand, not a string", err=True),
 {"t": "prac", "items": [
   P("`guests = [\"  asha \", \"RAVI\", \"kiran reddy\"]`. Print each name cleaned with `strip()` and `title()`, one per line.", "Loop over the list. Inside the loop, `name` is a string, so `name.strip().title()` works.", 'guests = ["  asha ", "RAVI", "kiran reddy"]\nfor name in guests:\n    print(name.strip().title())', "The loop hands you one string at a time, so string methods work on it.", 'guests = ["  asha ", "RAVI", "kiran reddy"]\n'),
   P("`guest = {\"name\": \"asha\", \"city\": \"pune\"}`. Print `Asha from PUNE`.", "Take each value out with its key, then use `title()` and `upper()`.", 'guest = {"name": "asha", "city": "pune"}\nprint(guest["name"].title(), "from", guest["city"].upper())', "`guest[\"name\"]` gives a string, so `.title()` works on it.", 'guest = {"name": "asha", "city": "pune"}\n')]},
])
MIX = 'mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]'
S["lists"] = ("Looping over lists", [
 {"t": "h", "text": "Mixed collections inside a list"},
 {"t": "p", "b": "A list can hold **anything**: strings, numbers and other collections, even all mixed together. `[ ]` takes one item out, and then that item's own methods work. The list does not care what is inside it."},
 RULE,
 TABLE,
 WHY,
 {"t": "anim", "title": "What is in your hand at each step?", "frames": [
   {"html": cat(strip(['"Pune"', '[10, 20]', '("Asha", 25)', '{"wifi", "pool"}', '{"tea": 20}'], w=118, label="mix"), '<div class="bigcode">mix</div>'), "c": "`mix` is **one list** with 5 items: a string, a list, a tuple, a set and a dictionary. In your hand: the whole list."},
   {"html": cat(strip(['"Pune"', '[10, 20]', '("Asha", 25)', '{"wifi", "pool"}', '{"tea": 20}'], w=118, hl=[1], dim=[0, 2, 3, 4]), '<div class="bigcode">mix[1]</div>'), "c": "`[1]` takes out item 1. Now you hold the list `[10, 20]`, so **list** methods work: `mix[1].append(30)`."},
   {"html": cat(strip(['10', '20'], w=70, hl=[0]), '<div class="bigcode">mix[1][0]</div><div class="res">10</div>'), "c": "Another `[0]` takes item 0 out of that inner list: the number `10`."},
   {"html": cat(strip(['"Pune"', '[10, 20]', '("Asha", 25)', '{"wifi", "pool"}', '{"tea": 20}'], w=118, hl=[2], dim=[0, 1, 3, 4]), '<div class="bigcode">mix[2][0].upper()</div><div class="res">ASHA</div>'), "c": "Read left to right: `mix[2]` is the tuple, `[0]` is the string `\"Asha\"`, and `.upper()` works because a **string** is in your hand."},
   {"html": cat(strip(['"Pune"', '[10, 20]', '("Asha", 25)', '{"wifi", "pool"}', '{"tea": 20}'], w=118, hl=[4], dim=[0, 1, 2, 3]), '<div class="bigcode">mix[4]["tea"]</div><div class="res">20</div>'), "c": "`mix[4]` is the dictionary, so the next step uses a **key**, not a position: `[\"tea\"]` gives `20`."}]},
 C(MIX + '\nprint(len(mix))                    # counts only the 5 outer items\nprint(type(mix[1]).__name__, type(mix[4]).__name__)', "1. What is inside? len() and type()"),
 C(MIX + '\nmix[1].append(30)                  # hand: the inner list\nprint(mix[1], sum(mix[1]))', "2. A list inside a list"),
 C(MIX + '\nname, age = mix[2]                 # unpack the tuple\nprint(name, age, mix[2][0].upper())', "3. A tuple inside a list"),
 C(MIX + '\nmix[3].add("gym")                  # hand: the set\nprint("pool" in mix[3], sorted(mix[3]))', "4. A set inside a list"),
 C(MIX + '\nmix[4]["coffee"] = 45              # hand: the dictionary\nprint(mix[4].get("tea"), mix[4])', "5. A dictionary inside a list"),
 C('bookings = [{"guest": "asha", "nights": 2},\n            {"guest": "ravi", "nights": 3}]\nfor b in bookings:                 # each b is one dictionary (one row)\n    print(b["guest"].title(), b["nights"])\nprint("Total nights:", sum(b["nights"] for b in bookings))', "6. A list of dictionaries: the analyst's favourite (rows of data)"),
 C('scores = [("Asha", 82), ("Ravi", 67)]\nfor name, mark in scores:          # each item is a tuple, unpacked\n    print(name, mark)\nprint(scores[1][0])', "7. A list of tuples"),
 C('mix = ["pune", [10, 20]]\nmix[0].upper()                     # makes a NEW string, mix is unchanged\nprint(mix)\nmix[0] = mix[0].upper()            # store it back\nmix[1].append(30)                  # a list changes itself\nprint(mix)', "8. Changing items inside: strings need storing back, lists change themselves"),
 C(MIX + '\nprint(mix[3][0])', "Mistake: a set has no positions", err=True),
 {"t": "prac", "items": [
   P("`bookings = [{\"guest\": \"Asha\", \"nights\": 2}, {\"guest\": \"Ravi\", \"nights\": 3}, {\"guest\": \"Kiran\", \"nights\": 1}]`. Print the total nights, then the first guest's name in capitals.", "Loop (or use `sum(... for b in bookings)`) to add the nights. `bookings[0]` is a dictionary, so `bookings[0][\"guest\"]` is a string.", 'bookings = [{"guest": "Asha", "nights": 2}, {"guest": "Ravi", "nights": 3}, {"guest": "Kiran", "nights": 1}]\nprint(sum(b["nights"] for b in bookings))\nprint(bookings[0]["guest"].upper())', "List → dictionary → string: one step at a time.", 'bookings = [{"guest": "Asha", "nights": 2}, {"guest": "Ravi", "nights": 3}, {"guest": "Kiran", "nights": 1}]\n'),
   P("`orders = [\"Asha\", [\"tea\", \"cake\"], (\"Table\", 4)]`. Add `\"dal\"` to the list inside, then print the list inside and the table number.", "`orders[1]` is the inner list (use `append`). `orders[2]` is a tuple, and `[1]` takes out the number.", 'orders = ["Asha", ["tea", "cake"], ("Table", 4)]\norders[1].append("dal")\nprint(orders[1])\nprint(orders[2][1])', "Each `[ ]` changes what you are holding: list → list → string, or list → tuple → number.", 'orders = ["Asha", ["tea", "cake"], ("Table", 4)]\n')]},
])
S["tuples"] = ("Why use a tuple?", [
 {"t": "h", "text": "Other collections inside a tuple"},
 {"t": "p", "b": "A tuple cannot change: you cannot replace its items. But each item is its own object. If an item is a **list** or a **dictionary**, that item can still change. Take it out with `[ ]`, then use its own methods."},
 RULE,
 TABLE,
 WHY,
 C('rooms = (("101", "Deluxe"), ("102", "Suite"))\nprint(rooms[1][1], len(rooms))', "1. Tuples inside a tuple"),
 C('rooms = (("101", "Deluxe"), ("102", "Suite"))\nfor number, kind in rooms:          # unpack each inner tuple\n    print(number, kind.upper())', "2. Loop and unpack"),
 C('student = ("Asha", [80, 90])\nstudent[1].append(70)               # the list inside can change\nprint(student, max(student[1]))', "3. A list inside a tuple can still change"),
 C('student = ("Asha", [80, 90])\nstudent[1] = [100]', "4. ...but the tuple's slots cannot be replaced", err=True),
 C('booking = ("B1001", {"name": "Asha", "nights": 2})\nprint(booking[1]["name"], booking[1].get("city", "unknown"))', "5. A dictionary inside a tuple"),
 C('place = ("Pune", {"wifi", "pool"})\nprint("wifi" in place[1], sorted(place[1]))', "6. A set inside a tuple"),
 C('pairs = list(zip(["Asha", "Ravi"], [82, 67]))   # zip makes tuples\nprint(pairs, pairs[0][1])', "7. zip() gives you a list of tuples"),
 {"t": "prac", "items": [
   P("`rooms = ((\"101\", \"Deluxe\", 2600), (\"102\", \"Suite\", 4800))`. Loop over it and print lines like `Room 101: Deluxe at ₹2600`.", "Unpack three names in the loop: `for number, kind, rate in rooms:`.", 'rooms = (("101", "Deluxe", 2600), ("102", "Suite", 4800))\nfor number, kind, rate in rooms:\n    print(f"Room {number}: {kind} at ₹{rate}")', "Each inner tuple has 3 items, so you unpack 3 names.", 'rooms = (("101", "Deluxe", 2600), ("102", "Suite", 4800))\n'),
   P("`guest = (\"Asha\", [\"tea\"])`. Add `\"cake\"` to her order and print the whole tuple.", "`guest[1]` is a list, so `append` works on it, even inside a tuple.", 'guest = ("Asha", ["tea"])\nguest[1].append("cake")\nprint(guest)', "The tuple did not change its slots. The list in slot 1 changed itself.", 'guest = ("Asha", ["tea"])\n')]},
])
S["sets"] = ("Real-world uses", [
 {"t": "h", "text": "What can go inside a set (and sets inside others)"},
 {"t": "p", "b": "A set can only hold things that **cannot change**: numbers, strings, tuples and frozensets. Lists, dictionaries and normal sets cannot go inside a set. A set has **no positions**, so instead of `[0]` you use `in`, a loop, or `sorted()`."},
 RULE,
 TABLE,
 WHY,
 C('seen = {("Asha", "Pune"), ("Ravi", "Goa")}\nprint(("Asha", "Pune") in seen, len(seen))', "1. Tuples inside a set"),
 C('seen = {("Asha", "Pune"), ("Ravi", "Goa")}\nfor name, city in sorted(seen):     # sorted() gives a list in order\n    print(name, city)', "2. Loop over a set of tuples"),
 C('s = {[1, 2], [3, 4]}', "3. A list cannot go inside a set", err=True),
 C('s = {(1, [2, 3])}                    # a tuple holding a list', "3b. A tuple counts only if everything inside it is unchangeable", err=True),
 C('s = {(1, 2), (1, 2), (3, 4)}         # use tuples instead\nprint(sorted(s), len(s))', "4. The fix: use tuples"),
 C('groups = {frozenset({"tea", "coffee"}), frozenset({"tea"})}\nprint(len(groups), frozenset({"coffee", "tea"}) in groups)', "5. A set of sets needs frozenset"),
 C('weekly = [{"wifi", "pool"}, {"wifi"}]   # sets CAN go inside a list\nprint(weekly[0] & weekly[1])', "6. Sets inside a list"),
 C('amenities = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}\namenities["Deluxe"].add("tv")      # hand: the set for Deluxe\nprint(sorted(amenities["Deluxe"]), "pool" in amenities["Suite"])', "7. Sets as dictionary values"),
 C('bookings = [{"city": "Pune"}, {"city": "Goa"}, {"city": "Pune"}]\nprint(sorted({b["city"] for b in bookings}))', "8. Unique values from a list of dictionaries"),
 {"t": "prac", "items": [
   P("`bookings = [(\"Asha\", \"Pune\"), (\"Ravi\", \"Goa\"), (\"Kiran\", \"Pune\")]`. Print the unique cities as a sorted list.", "Build a set from the second item of each tuple: `{city for name, city in bookings}`, then `sorted()`.", 'bookings = [("Asha", "Pune"), ("Ravi", "Goa"), ("Kiran", "Pune")]\ncities = {city for name, city in bookings}\nprint(sorted(cities))', "The set removes the repeat, and `sorted()` turns it into an ordered list.", 'bookings = [("Asha", "Pune"), ("Ravi", "Goa"), ("Kiran", "Pune")]\n'),
   P("`rooms = {\"Deluxe\": {\"wifi\"}, \"Suite\": {\"wifi\", \"pool\"}}`. Add `\"pool\"` to Deluxe, then print the amenities both rooms share, sorted.", "`rooms[\"Deluxe\"]` is a set, so use `add`. `&` gives the items in both sets.", 'rooms = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}\nrooms["Deluxe"].add("pool")\nprint(sorted(rooms["Deluxe"] & rooms["Suite"]))', "Dictionary → set: take the set out with its key, then use set methods.", 'rooms = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}\n')]},
])
S["dicts"] = ("Dictionary comprehensions", [
 {"t": "h", "text": "Other collections inside a dictionary"},
 {"t": "p", "b": "**Values** can be anything: lists, sets, tuples, even other dictionaries. **Keys** must be things that cannot change: strings, numbers or tuples. `d[key]` takes a value out, and then that value's own methods work."},
 RULE,
 TABLE,
 WHY,
 C('guest = {"name": "Asha", "orders": ["tea", "cake"]}\nguest["orders"].append("dal")      # hand: the list\nprint(guest["orders"], len(guest["orders"]))', "1. A list as a value"),
 C('hotel = {"101": {"type": "Deluxe", "rate": 2600}}\nprint(hotel["101"]["rate"])\nhotel["101"]["rate"] += 200          # dict → dict → number\nprint(hotel["101"])', "2. A dictionary inside a dictionary"),
 C('tags = {"Suite": {"wifi"}}\ntags["Suite"].add("pool")          # hand: the set\nprint(sorted(tags["Suite"]))', "3. A set as a value"),
 C('places = {"Pune": (18.52, 73.86)}\nlat, lon = places["Pune"]          # unpack the tuple\nprint(lat, lon)', "4. A tuple as a value"),
 C('rates = {("Deluxe", "weekend"): 3000, ("Deluxe", "weekday"): 2600}\nprint(rates[("Deluxe", "weekend")])', "5. A tuple as a key"),
 C('d = {["Deluxe"]: 2600}', "6. A list cannot be a key", err=True),
 C('marks = {"Asha": [80, 90], "Ravi": [60, 70]}\nfor name, scores in marks.items():   # scores is a list\n    print(name, sum(scores) / len(scores))', "7. Loop over a dictionary of lists"),
 C('hotel = {"101": {"type": "Deluxe"}}\nprint(hotel.get("102", {}).get("type", "no such room"))', "8. Safe lookups two levels deep"),
 C('rooms = [("Asha", "Deluxe"), ("Ravi", "Suite"), ("Kiran", "Deluxe")]\nby_type = {}\nfor name, kind in rooms:\n    if kind not in by_type:\n        by_type[kind] = []           # start an empty list\n    by_type[kind].append(name)\nprint(by_type)', "9. Build a dictionary of lists (grouping)"),
 {"t": "prac", "items": [
   P("`menu = {\"tea\": [20, 25], \"coffee\": [45]}` holds the prices of each size. Add `30` to tea, then print the largest tea price and how many coffee sizes there are.", "`menu[\"tea\"]` is a list: use `append`, then `max()`. `len(menu[\"coffee\"])` counts the sizes.", 'menu = {"tea": [20, 25], "coffee": [45]}\nmenu["tea"].append(30)\nprint(max(menu["tea"]), len(menu["coffee"]))', "Dictionary → list: take the list out with its key, then use list tools.", 'menu = {"tea": [20, 25], "coffee": [45]}\n'),
   P("`hotel = {\"101\": {\"guest\": \"asha\", \"nights\": 2}, \"102\": {\"guest\": \"ravi\", \"nights\": 3}}`. Print each room and its guest in title case, like `101 Asha`.", "Loop with `.items()`. Each value is a dictionary, so `info[\"guest\"]` is a string.", 'hotel = {"101": {"guest": "asha", "nights": 2}, "102": {"guest": "ravi", "nights": 3}}\nfor room, info in hotel.items():\n    print(room, info["guest"].title())', "Dictionary → dictionary → string, one step at a time.", 'hotel = {"101": {"guest": "asha", "nights": 2}, "102": {"guest": "ravi", "nights": 3}}\n')]},
])
EXTRA = [
 ("lists", "Removing duplicates (course exercise)", [
   {"t": "note", "k": "trap", "h": "No colon in a comprehension", "b": "In a normal loop, `for w in words:` ends with a colon because an indented block comes next. A comprehension is **one line inside the brackets**, with no block, so the `for` (and the `if`) get **no colon**. The colons in `w[::-1]` are slicing, which is a different thing."},
   C('words = ["data", "is", "fun"]\nprint([w[::-1] for w in words])', "No colon after for w in words"),
   C('words = ["data", "is", "fun"]\nprint([w[::-1] for w in words:])', "Add a colon and Python stops", err=True)]),
 ("comprehensions", "Where does if go? Filter vs transform", [
   {"t": "table", "title": "Where do colons go?", "head": ["Colon", "Example", "What it means"], "rows": [
     ["End of a line", "`for x in nums:`", "An indented block comes next. Same for `if`, `elif`, `else`, `while`, `def`, `class`, `try`, `except`, `with`."],
     ["Slicing", "`word[::-1]`", "start : stop : step"],
     ["Dictionary", "`{\"tea\": 20}`", "key : value (also in a dict comprehension)"],
     ["f-string format", "`f\"{price:.2f}\"`", "How to show the value"],
     ["Comprehension, one-line if", "`[w for w in words if len(w) > 3]`", "[[no:No colon]]: there is no block inside brackets"]]},
   C('words = ["data", "is", "fun"]\nprint([w for w in words if len(w) > 2])\nprint({w: len(w) for w in words})', "One comprehension with if (no colon), one dict comprehension (key: value colon)")]),
]
CARDS = {
 "strings": ["How do you use a string method on a string inside a list?", "Take it out first: `cities[0].upper()`, or loop: `for c in cities: c.title()`."],
 "lists": ["What decides which methods work in `mix[1][0].upper()`?", "Whatever is just before the dot. Read left to right: each `[ ]` takes one thing out and changes what you are holding."],
 "tuples": ["Can a list inside a tuple change?", "Yes. `t[1].append(x)` works. You just cannot replace the tuple's slots: `t[1] = [..]` is an error."],
 "sets": ["What can go inside a set?", "Only things that cannot change: numbers, strings, tuples, frozensets. Not lists, dicts or sets."],
 "dicts": ["What can be a dictionary key, and what can be a value?", "Keys: things that cannot change (str, int, tuple). Values: anything, even lists and other dicts."],
}
def js(v, ind=0):
    if isinstance(v, Raw): return str(v)
    if isinstance(v, dict): return '{ ' + ', '.join(k + ': ' + js(x, ind) for k, x in v.items()) + ' }'
    if isinstance(v, list): return '[\n' + ',\n'.join('  ' * (ind + 1) + js(x, ind + 1) for x in v) + '\n' + '  ' * ind + ']'
    if isinstance(v, str) and '\n' in v and '`' not in v and '${' not in v and '\\' not in v: return 'R`\n' + v + '`'
    return json.dumps(v, ensure_ascii=False)
out = ['/* ---------- Collections inside collections (Part 3). Generated: every output came from running the code. ---------- */', '(function(){',
       '  function addBefore(id, heading, blocks){ var ch = CHAPTERS.filter(function(c){ return c.id === id; })[0]; var i = ch.body.findIndex(function(b){ return b.t === "h" && b.text === heading; }); if (i < 0) throw new Error("heading not found: " + id + " / " + heading); ch.body.splice.apply(ch.body, [i, 0].concat(blocks)); }',
       '  function addCard(id, card){ CHAPTERS.filter(function(c){ return c.id === id; })[0].cards.push(card); }']
n = 0
for cid, (before, blocks) in S.items():
    n += sum(1 for b in blocks if b.get('t') == 'code')
    out.append('  addBefore(' + json.dumps(cid) + ', ' + json.dumps(before) + ', ' + js(blocks, 1) + ');')
    out.append('  addCard(' + json.dumps(cid) + ', ' + json.dumps(CARDS[cid], ensure_ascii=False) + ');')
for cid, before, blocks in EXTRA: out.append('  addBefore(' + json.dumps(cid) + ', ' + json.dumps(before) + ', ' + js(blocks, 1) + ');')
out.append('  var ov = OVERVIEWS.filter(function(o){ return o.part === 3; })[0], oi = ov.body.findIndex(function(b){ return b.t === "h" && b.text === "Don\\u0027t mix these up"; });')
out.append('  if (oi < 0) throw new Error("overview 3 heading not found");')
out.append('  ov.body.splice(oi, 0, ' + js(dict(TABLE, master=True), 1) + ', ' + js(WHY, 1) + ');')
out.append('})();\n')
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'hub2', 'mixed.js'), 'w', encoding='utf-8').write('\n'.join(out))
print('code examples:', n, {k: sum(1 for b in v[1] if b.get('t') == 'code') for k, v in S.items()})
