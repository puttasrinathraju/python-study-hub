/* ---------- Collections inside collections (Part 3). Generated: every output came from running the code. ---------- */
(function(){
  function addBefore(id, heading, blocks){ var ch = CHAPTERS.filter(function(c){ return c.id === id; })[0]; var i = ch.body.findIndex(function(b){ return b.t === "h" && b.text === heading; }); if (i < 0) throw new Error("heading not found: " + id + " / " + heading); ch.body.splice.apply(ch.body, [i, 0].concat(blocks)); }
  function addCard(id, card){ CHAPTERS.filter(function(c){ return c.id === id; })[0].cards.push(card); }
  addBefore("strings", "String methods reference", [
    { t: "h", text: "Strings inside lists, tuples, sets and dictionaries" },
    { t: "p", b: "In real data, strings rarely live alone. Names, cities and room types sit inside lists, tuples, sets and dictionaries. To use a string method, first **take the string out** with `[ ]` or a loop, then use the method on it." },
    { t: "note", k: "key", b: "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you." },
    { t: "note", k: "tip", b: "A string can only hold characters, never other collections. But a string can go **inside every** collection: lists, tuples, sets, and dictionaries as a key or a value, because a string can never change." },
    { t: "code", c: R`
cities = ["pune", "goa"]
print(cities[0].upper())     # hand: the list → [0] → the string "pune"`, o: "PUNE", ttl: "1. A string inside a list" },
    { t: "code", c: R`
cities = ["pune", "goa"]
for city in cities:          # each turn, city is one string
    print(city.title())`, o: R`
Pune
Goa`, ttl: "2. Every string in a list: loop" },
    { t: "code", c: R`
full_name = ("Asha", "Reddy")
print(full_name[1].lower(), len(full_name[1]))`, o: "reddy 5", ttl: "3. A string inside a tuple" },
    { t: "code", c: R`
tags = {"wifi", "pool"}
print(sorted(tag.upper() for tag in tags))   # a set has no [0], so loop`, o: "['POOL', 'WIFI']", ttl: "4. Strings inside a set" },
    { t: "code", c: R`
guest = {"name": "  asha reddy ", "city": "PUNE"}
print(guest["name"].strip().title(), guest["city"].capitalize())`, o: "Asha Reddy Pune", ttl: "5. A string as a dictionary value" },
    { t: "code", c: R`
row = "Asha,82,Pune"
parts = row.split(",")       # string → list of strings
print(parts, parts[2].upper())`, o: "['Asha', '82', 'Pune'] PUNE", ttl: "6. A string becomes a list with split()" },
    { t: "code", c: R`
items = ["tea", "coffee", "cake"]
print(" | ".join(items))       # list of strings → one string`, o: "tea | coffee | cake", ttl: "7. A list becomes a string with join()" },
    { t: "code", c: R`
cities = ["pune", "goa"]
print(cities.upper())`, o: "AttributeError: 'list' object has no attribute 'upper'", ttl: "The classic mistake: the list is in your hand, not a string", err: true },
    { t: "prac", items: [
      { q: "`guests = [\"  asha \", \"RAVI\", \"kiran reddy\"]`. Print each name cleaned with `strip()` and `title()`, one per line.", hint: "Loop over the list. Inside the loop, `name` is a string, so `name.strip().title()` works.", sol: R`
guests = ["  asha ", "RAVI", "kiran reddy"]
for name in guests:
    print(name.strip().title())`, out: R`
Asha
Ravi
Kiran Reddy`, why: "The loop hands you one string at a time, so string methods work on it.", starter: R`
guests = ["  asha ", "RAVI", "kiran reddy"]
` },
      { q: "`guest = {\"name\": \"asha\", \"city\": \"pune\"}`. Print `Asha from PUNE`.", hint: "Take each value out with its key, then use `title()` and `upper()`.", sol: R`
guest = {"name": "asha", "city": "pune"}
print(guest["name"].title(), "from", guest["city"].upper())`, out: "Asha from PUNE", why: "`guest[\"name\"]` gives a string, so `.title()` works on it.", starter: R`
guest = {"name": "asha", "city": "pune"}
` }
    ] }
  ]);
  addCard("strings", ["How do you use a string method on a string inside a list?", "Take it out first: `cities[0].upper()`, or loop: `for c in cities: c.title()`."]);
  addBefore("lists", "Looping over lists", [
    { t: "h", text: "Mixed collections inside a list" },
    { t: "p", b: "A list can hold **anything**: strings, numbers and other collections, even all mixed together. `[ ]` takes one item out, and then that item's own methods work. The list does not care what is inside it." },
    { t: "note", k: "key", b: "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you." },
    { t: "table", rowHead: true, title: "What can go inside what", head: [
      "Can this go inside →",
      "list",
      "tuple",
      "set",
      "dict key",
      "dict value"
    ], rows: [
      [
        "String, number, `True`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Tuple (of strings or numbers)",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "`frozenset`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "List",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Set",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Dictionary",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ]
    ], cap: "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change." },
    { t: "note", k: "why", h: "Why it works this way", b: "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either." },
    { t: "anim", title: "What is in your hand at each step?", frames: [
      { html: V.strip(["\"Pune\"", "[10, 20]", "(\"Asha\", 25)", "{\"wifi\", \"pool\"}", "{\"tea\": 20}"], {"w": 118, "label": "mix"}) + "<div class=\"bigcode\">mix</div>", c: "`mix` is **one list** with 5 items: a string, a list, a tuple, a set and a dictionary. In your hand: the whole list." },
      { html: V.strip(["\"Pune\"", "[10, 20]", "(\"Asha\", 25)", "{\"wifi\", \"pool\"}", "{\"tea\": 20}"], {"w": 118, "hl": [1], "dim": [0, 2, 3, 4]}) + "<div class=\"bigcode\">mix[1]</div>", c: "`[1]` takes out item 1. Now you hold the list `[10, 20]`, so **list** methods work: `mix[1].append(30)`." },
      { html: V.strip(["10", "20"], {"w": 70, "hl": [0]}) + "<div class=\"bigcode\">mix[1][0]</div><div class=\"res\">10</div>", c: "Another `[0]` takes item 0 out of that inner list: the number `10`." },
      { html: V.strip(["\"Pune\"", "[10, 20]", "(\"Asha\", 25)", "{\"wifi\", \"pool\"}", "{\"tea\": 20}"], {"w": 118, "hl": [2], "dim": [0, 1, 3, 4]}) + "<div class=\"bigcode\">mix[2][0].upper()</div><div class=\"res\">ASHA</div>", c: "Read left to right: `mix[2]` is the tuple, `[0]` is the string `\"Asha\"`, and `.upper()` works because a **string** is in your hand." },
      { html: V.strip(["\"Pune\"", "[10, 20]", "(\"Asha\", 25)", "{\"wifi\", \"pool\"}", "{\"tea\": 20}"], {"w": 118, "hl": [4], "dim": [0, 1, 2, 3]}) + "<div class=\"bigcode\">mix[4][\"tea\"]</div><div class=\"res\">20</div>", c: "`mix[4]` is the dictionary, so the next step uses a **key**, not a position: `[\"tea\"]` gives `20`." }
    ] },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
print(len(mix))                    # counts only the 5 outer items
print(type(mix[1]).__name__, type(mix[4]).__name__)`, o: R`
5
list dict`, ttl: "1. What is inside? len() and type()" },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
mix[1].append(30)                  # hand: the inner list
print(mix[1], sum(mix[1]))`, o: "[10, 20, 30] 60", ttl: "2. A list inside a list" },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
name, age = mix[2]                 # unpack the tuple
print(name, age, mix[2][0].upper())`, o: "Asha 25 ASHA", ttl: "3. A tuple inside a list" },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
mix[3].add("gym")                  # hand: the set
print("pool" in mix[3], sorted(mix[3]))`, o: "True ['gym', 'pool', 'wifi']", ttl: "4. A set inside a list" },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
mix[4]["coffee"] = 45              # hand: the dictionary
print(mix[4].get("tea"), mix[4])`, o: "20 {'tea': 20, 'coffee': 45}", ttl: "5. A dictionary inside a list" },
    { t: "code", c: R`
bookings = [{"guest": "asha", "nights": 2},
            {"guest": "ravi", "nights": 3}]
for b in bookings:                 # each b is one dictionary (one row)
    print(b["guest"].title(), b["nights"])
print("Total nights:", sum(b["nights"] for b in bookings))`, o: R`
Asha 2
Ravi 3
Total nights: 5`, ttl: "6. A list of dictionaries: the analyst's favourite (rows of data)" },
    { t: "code", c: R`
scores = [("Asha", 82), ("Ravi", 67)]
for name, mark in scores:          # each item is a tuple, unpacked
    print(name, mark)
print(scores[1][0])`, o: R`
Asha 82
Ravi 67
Ravi`, ttl: "7. A list of tuples" },
    { t: "code", c: R`
mix = ["pune", [10, 20]]
mix[0].upper()                     # makes a NEW string, mix is unchanged
print(mix)
mix[0] = mix[0].upper()            # store it back
mix[1].append(30)                  # a list changes itself
print(mix)`, o: R`
['pune', [10, 20]]
['PUNE', [10, 20, 30]]`, ttl: "8. Changing items inside: strings need storing back, lists change themselves" },
    { t: "code", c: R`
mix = ["Pune", [10, 20], ("Asha", 25), {"wifi", "pool"}, {"tea": 20}]
print(mix[3][0])`, o: "TypeError: 'set' object is not subscriptable", ttl: "Mistake: a set has no positions", err: true },
    { t: "prac", items: [
      { q: "`bookings = [{\"guest\": \"Asha\", \"nights\": 2}, {\"guest\": \"Ravi\", \"nights\": 3}, {\"guest\": \"Kiran\", \"nights\": 1}]`. Print the total nights, then the first guest's name in capitals.", hint: "Loop (or use `sum(... for b in bookings)`) to add the nights. `bookings[0]` is a dictionary, so `bookings[0][\"guest\"]` is a string.", sol: R`
bookings = [{"guest": "Asha", "nights": 2}, {"guest": "Ravi", "nights": 3}, {"guest": "Kiran", "nights": 1}]
print(sum(b["nights"] for b in bookings))
print(bookings[0]["guest"].upper())`, out: R`
6
ASHA`, why: "List → dictionary → string: one step at a time.", starter: R`
bookings = [{"guest": "Asha", "nights": 2}, {"guest": "Ravi", "nights": 3}, {"guest": "Kiran", "nights": 1}]
` },
      { q: "`orders = [\"Asha\", [\"tea\", \"cake\"], (\"Table\", 4)]`. Add `\"dal\"` to the list inside, then print the list inside and the table number.", hint: "`orders[1]` is the inner list (use `append`). `orders[2]` is a tuple, and `[1]` takes out the number.", sol: R`
orders = ["Asha", ["tea", "cake"], ("Table", 4)]
orders[1].append("dal")
print(orders[1])
print(orders[2][1])`, out: R`
['tea', 'cake', 'dal']
4`, why: "Each `[ ]` changes what you are holding: list → list → string, or list → tuple → number.", starter: R`
orders = ["Asha", ["tea", "cake"], ("Table", 4)]
` }
    ] }
  ]);
  addCard("lists", ["What decides which methods work in `mix[1][0].upper()`?", "Whatever is just before the dot. Read left to right: each `[ ]` takes one thing out and changes what you are holding."]);
  addBefore("tuples", "Why use a tuple?", [
    { t: "h", text: "Other collections inside a tuple" },
    { t: "p", b: "A tuple cannot change: you cannot replace its items. But each item is its own object. If an item is a **list** or a **dictionary**, that item can still change. Take it out with `[ ]`, then use its own methods." },
    { t: "note", k: "key", b: "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you." },
    { t: "table", rowHead: true, title: "What can go inside what", head: [
      "Can this go inside →",
      "list",
      "tuple",
      "set",
      "dict key",
      "dict value"
    ], rows: [
      [
        "String, number, `True`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Tuple (of strings or numbers)",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "`frozenset`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "List",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Set",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Dictionary",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ]
    ], cap: "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change." },
    { t: "note", k: "why", h: "Why it works this way", b: "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either." },
    { t: "code", c: R`
rooms = (("101", "Deluxe"), ("102", "Suite"))
print(rooms[1][1], len(rooms))`, o: "Suite 2", ttl: "1. Tuples inside a tuple" },
    { t: "code", c: R`
rooms = (("101", "Deluxe"), ("102", "Suite"))
for number, kind in rooms:          # unpack each inner tuple
    print(number, kind.upper())`, o: R`
101 DELUXE
102 SUITE`, ttl: "2. Loop and unpack" },
    { t: "code", c: R`
student = ("Asha", [80, 90])
student[1].append(70)               # the list inside can change
print(student, max(student[1]))`, o: "('Asha', [80, 90, 70]) 90", ttl: "3. A list inside a tuple can still change" },
    { t: "code", c: R`
student = ("Asha", [80, 90])
student[1] = [100]`, o: "TypeError: 'tuple' object does not support item assignment", ttl: "4. ...but the tuple's slots cannot be replaced", err: true },
    { t: "code", c: R`
booking = ("B1001", {"name": "Asha", "nights": 2})
print(booking[1]["name"], booking[1].get("city", "unknown"))`, o: "Asha unknown", ttl: "5. A dictionary inside a tuple" },
    { t: "code", c: R`
place = ("Pune", {"wifi", "pool"})
print("wifi" in place[1], sorted(place[1]))`, o: "True ['pool', 'wifi']", ttl: "6. A set inside a tuple" },
    { t: "code", c: R`
pairs = list(zip(["Asha", "Ravi"], [82, 67]))   # zip makes tuples
print(pairs, pairs[0][1])`, o: "[('Asha', 82), ('Ravi', 67)] 82", ttl: "7. zip() gives you a list of tuples" },
    { t: "prac", items: [
      { q: "`rooms = ((\"101\", \"Deluxe\", 2600), (\"102\", \"Suite\", 4800))`. Loop over it and print lines like `Room 101: Deluxe at ₹2600`.", hint: "Unpack three names in the loop: `for number, kind, rate in rooms:`.", sol: R`
rooms = (("101", "Deluxe", 2600), ("102", "Suite", 4800))
for number, kind, rate in rooms:
    print(f"Room {number}: {kind} at ₹{rate}")`, out: R`
Room 101: Deluxe at ₹2600
Room 102: Suite at ₹4800`, why: "Each inner tuple has 3 items, so you unpack 3 names.", starter: R`
rooms = (("101", "Deluxe", 2600), ("102", "Suite", 4800))
` },
      { q: "`guest = (\"Asha\", [\"tea\"])`. Add `\"cake\"` to her order and print the whole tuple.", hint: "`guest[1]` is a list, so `append` works on it, even inside a tuple.", sol: R`
guest = ("Asha", ["tea"])
guest[1].append("cake")
print(guest)`, out: "('Asha', ['tea', 'cake'])", why: "The tuple did not change its slots. The list in slot 1 changed itself.", starter: R`
guest = ("Asha", ["tea"])
` }
    ] }
  ]);
  addCard("tuples", ["Can a list inside a tuple change?", "Yes. `t[1].append(x)` works. You just cannot replace the tuple's slots: `t[1] = [..]` is an error."]);
  addBefore("sets", "Real-world uses", [
    { t: "h", text: "What can go inside a set (and sets inside others)" },
    { t: "p", b: "A set can only hold things that **cannot change**: numbers, strings, tuples and frozensets. Lists, dictionaries and normal sets cannot go inside a set. A set has **no positions**, so instead of `[0]` you use `in`, a loop, or `sorted()`." },
    { t: "note", k: "key", b: "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you." },
    { t: "table", rowHead: true, title: "What can go inside what", head: [
      "Can this go inside →",
      "list",
      "tuple",
      "set",
      "dict key",
      "dict value"
    ], rows: [
      [
        "String, number, `True`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Tuple (of strings or numbers)",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "`frozenset`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "List",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Set",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Dictionary",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ]
    ], cap: "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change." },
    { t: "note", k: "why", h: "Why it works this way", b: "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either." },
    { t: "code", c: R`
seen = {("Asha", "Pune"), ("Ravi", "Goa")}
print(("Asha", "Pune") in seen, len(seen))`, o: "True 2", ttl: "1. Tuples inside a set" },
    { t: "code", c: R`
seen = {("Asha", "Pune"), ("Ravi", "Goa")}
for name, city in sorted(seen):     # sorted() gives a list in order
    print(name, city)`, o: R`
Asha Pune
Ravi Goa`, ttl: "2. Loop over a set of tuples" },
    { t: "code", c: "s = {[1, 2], [3, 4]}", o: "TypeError: unhashable type: 'list'", ttl: "3. A list cannot go inside a set", err: true },
    { t: "code", c: "s = {(1, [2, 3])}                    # a tuple holding a list", o: "TypeError: unhashable type: 'list'", ttl: "3b. A tuple counts only if everything inside it is unchangeable", err: true },
    { t: "code", c: R`
s = {(1, 2), (1, 2), (3, 4)}         # use tuples instead
print(sorted(s), len(s))`, o: "[(1, 2), (3, 4)] 2", ttl: "4. The fix: use tuples" },
    { t: "code", c: R`
groups = {frozenset({"tea", "coffee"}), frozenset({"tea"})}
print(len(groups), frozenset({"coffee", "tea"}) in groups)`, o: "2 True", ttl: "5. A set of sets needs frozenset" },
    { t: "code", c: R`
weekly = [{"wifi", "pool"}, {"wifi"}]   # sets CAN go inside a list
print(weekly[0] & weekly[1])`, o: "{'wifi'}", ttl: "6. Sets inside a list" },
    { t: "code", c: R`
amenities = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}
amenities["Deluxe"].add("tv")      # hand: the set for Deluxe
print(sorted(amenities["Deluxe"]), "pool" in amenities["Suite"])`, o: "['tv', 'wifi'] True", ttl: "7. Sets as dictionary values" },
    { t: "code", c: R`
bookings = [{"city": "Pune"}, {"city": "Goa"}, {"city": "Pune"}]
print(sorted({b["city"] for b in bookings}))`, o: "['Goa', 'Pune']", ttl: "8. Unique values from a list of dictionaries" },
    { t: "prac", items: [
      { q: "`bookings = [(\"Asha\", \"Pune\"), (\"Ravi\", \"Goa\"), (\"Kiran\", \"Pune\")]`. Print the unique cities as a sorted list.", hint: "Build a set from the second item of each tuple: `{city for name, city in bookings}`, then `sorted()`.", sol: R`
bookings = [("Asha", "Pune"), ("Ravi", "Goa"), ("Kiran", "Pune")]
cities = {city for name, city in bookings}
print(sorted(cities))`, out: "['Goa', 'Pune']", why: "The set removes the repeat, and `sorted()` turns it into an ordered list.", starter: R`
bookings = [("Asha", "Pune"), ("Ravi", "Goa"), ("Kiran", "Pune")]
` },
      { q: "`rooms = {\"Deluxe\": {\"wifi\"}, \"Suite\": {\"wifi\", \"pool\"}}`. Add `\"pool\"` to Deluxe, then print the amenities both rooms share, sorted.", hint: "`rooms[\"Deluxe\"]` is a set, so use `add`. `&` gives the items in both sets.", sol: R`
rooms = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}
rooms["Deluxe"].add("pool")
print(sorted(rooms["Deluxe"] & rooms["Suite"]))`, out: "['pool', 'wifi']", why: "Dictionary → set: take the set out with its key, then use set methods.", starter: R`
rooms = {"Deluxe": {"wifi"}, "Suite": {"wifi", "pool"}}
` }
    ] }
  ]);
  addCard("sets", ["What can go inside a set?", "Only things that cannot change: numbers, strings, tuples, frozensets. Not lists, dicts or sets."]);
  addBefore("dicts", "Dictionary comprehensions", [
    { t: "h", text: "Other collections inside a dictionary" },
    { t: "p", b: "**Values** can be anything: lists, sets, tuples, even other dictionaries. **Keys** must be things that cannot change: strings, numbers or tuples. `d[key]` takes a value out, and then that value's own methods work." },
    { t: "note", k: "key", b: "**The one rule:** look at what is just before the dot. That is what is in your hand right now, so only its methods work. `[ ]` takes one thing out; `.` does something with what you are holding. Not sure what you are holding? `print(type(...))` tells you." },
    { t: "table", rowHead: true, title: "What can go inside what", head: [
      "Can this go inside →",
      "list",
      "tuple",
      "set",
      "dict key",
      "dict value"
    ], rows: [
      [
        "String, number, `True`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Tuple (of strings or numbers)",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "`frozenset`",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "List",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Set",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ],
      [
        "Dictionary",
        "[[ok:✓ Yes]]",
        "[[ok:✓ Yes]]",
        "[[no:✗ No]]",
        "[[no:✗ No]]",
        "[[ok:✓ Yes]]"
      ]
    ], cap: "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change." },
    { t: "note", k: "why", h: "Why it works this way", b: "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either." },
    { t: "code", c: R`
guest = {"name": "Asha", "orders": ["tea", "cake"]}
guest["orders"].append("dal")      # hand: the list
print(guest["orders"], len(guest["orders"]))`, o: "['tea', 'cake', 'dal'] 3", ttl: "1. A list as a value" },
    { t: "code", c: R`
hotel = {"101": {"type": "Deluxe", "rate": 2600}}
print(hotel["101"]["rate"])
hotel["101"]["rate"] += 200          # dict → dict → number
print(hotel["101"])`, o: R`
2600
{'type': 'Deluxe', 'rate': 2800}`, ttl: "2. A dictionary inside a dictionary" },
    { t: "code", c: R`
tags = {"Suite": {"wifi"}}
tags["Suite"].add("pool")          # hand: the set
print(sorted(tags["Suite"]))`, o: "['pool', 'wifi']", ttl: "3. A set as a value" },
    { t: "code", c: R`
places = {"Pune": (18.52, 73.86)}
lat, lon = places["Pune"]          # unpack the tuple
print(lat, lon)`, o: "18.52 73.86", ttl: "4. A tuple as a value" },
    { t: "code", c: R`
rates = {("Deluxe", "weekend"): 3000, ("Deluxe", "weekday"): 2600}
print(rates[("Deluxe", "weekend")])`, o: "3000", ttl: "5. A tuple as a key" },
    { t: "code", c: "d = {[\"Deluxe\"]: 2600}", o: "TypeError: unhashable type: 'list'", ttl: "6. A list cannot be a key", err: true },
    { t: "code", c: R`
marks = {"Asha": [80, 90], "Ravi": [60, 70]}
for name, scores in marks.items():   # scores is a list
    print(name, sum(scores) / len(scores))`, o: R`
Asha 85.0
Ravi 65.0`, ttl: "7. Loop over a dictionary of lists" },
    { t: "code", c: R`
hotel = {"101": {"type": "Deluxe"}}
print(hotel.get("102", {}).get("type", "no such room"))`, o: "no such room", ttl: "8. Safe lookups two levels deep" },
    { t: "code", c: R`
rooms = [("Asha", "Deluxe"), ("Ravi", "Suite"), ("Kiran", "Deluxe")]
by_type = {}
for name, kind in rooms:
    if kind not in by_type:
        by_type[kind] = []           # start an empty list
    by_type[kind].append(name)
print(by_type)`, o: "{'Deluxe': ['Asha', 'Kiran'], 'Suite': ['Ravi']}", ttl: "9. Build a dictionary of lists (grouping)" },
    { t: "prac", items: [
      { q: "`menu = {\"tea\": [20, 25], \"coffee\": [45]}` holds the prices of each size. Add `30` to tea, then print the largest tea price and how many coffee sizes there are.", hint: "`menu[\"tea\"]` is a list: use `append`, then `max()`. `len(menu[\"coffee\"])` counts the sizes.", sol: R`
menu = {"tea": [20, 25], "coffee": [45]}
menu["tea"].append(30)
print(max(menu["tea"]), len(menu["coffee"]))`, out: "30 1", why: "Dictionary → list: take the list out with its key, then use list tools.", starter: R`
menu = {"tea": [20, 25], "coffee": [45]}
` },
      { q: "`hotel = {\"101\": {\"guest\": \"asha\", \"nights\": 2}, \"102\": {\"guest\": \"ravi\", \"nights\": 3}}`. Print each room and its guest in title case, like `101 Asha`.", hint: "Loop with `.items()`. Each value is a dictionary, so `info[\"guest\"]` is a string.", sol: R`
hotel = {"101": {"guest": "asha", "nights": 2}, "102": {"guest": "ravi", "nights": 3}}
for room, info in hotel.items():
    print(room, info["guest"].title())`, out: R`
101 Asha
102 Ravi`, why: "Dictionary → dictionary → string, one step at a time.", starter: R`
hotel = {"101": {"guest": "asha", "nights": 2}, "102": {"guest": "ravi", "nights": 3}}
` }
    ] }
  ]);
  addCard("dicts", ["What can be a dictionary key, and what can be a value?", "Keys: things that cannot change (str, int, tuple). Values: anything, even lists and other dicts."]);
  addBefore("lists", "Removing duplicates (course exercise)", [
    { t: "note", k: "trap", h: "No colon in a comprehension", b: "In a normal loop, `for w in words:` ends with a colon because an indented block comes next. A comprehension is **one line inside the brackets**, with no block, so the `for` (and the `if`) get **no colon**. The colons in `w[::-1]` are slicing, which is a different thing." },
    { t: "code", c: R`
words = ["data", "is", "fun"]
print([w[::-1] for w in words])`, o: "['atad', 'si', 'nuf']", ttl: "No colon after for w in words" },
    { t: "code", c: R`
words = ["data", "is", "fun"]
print([w[::-1] for w in words:])`, o: "SyntaxError: invalid syntax", ttl: "Add a colon and Python stops", err: true }
  ]);
  addBefore("comprehensions", "Where does if go? Filter vs transform", [
    { t: "table", title: "Where do colons go?", head: [
      "Colon",
      "Example",
      "What it means"
    ], rows: [
      [
        "End of a line",
        "`for x in nums:`",
        "An indented block comes next. Same for `if`, `elif`, `else`, `while`, `def`, `class`, `try`, `except`, `with`."
      ],
      [
        "Slicing",
        "`word[::-1]`",
        "start : stop : step"
      ],
      [
        "Dictionary",
        "`{\"tea\": 20}`",
        "key : value (also in a dict comprehension)"
      ],
      [
        "f-string format",
        "`f\"{price:.2f}\"`",
        "How to show the value"
      ],
      [
        "Comprehension, one-line if",
        "`[w for w in words if len(w) > 3]`",
        "[[no:No colon]]: there is no block inside brackets"
      ]
    ] },
    { t: "code", c: R`
words = ["data", "is", "fun"]
print([w for w in words if len(w) > 2])
print({w: len(w) for w in words})`, o: R`
['data', 'fun']
{'data': 4, 'is': 2, 'fun': 3}`, ttl: "One comprehension with if (no colon), one dict comprehension (key: value colon)" }
  ]);
  var ov = OVERVIEWS.filter(function(o){ return o.part === 3; })[0], oi = ov.body.findIndex(function(b){ return b.t === "h" && b.text === "Don\u0027t mix these up"; });
  if (oi < 0) throw new Error("overview 3 heading not found");
  ov.body.splice(oi, 0, { t: "table", rowHead: true, title: "What can go inside what", head: [
    "Can this go inside →",
    "list",
    "tuple",
    "set",
    "dict key",
    "dict value"
  ], rows: [
    [
      "String, number, `True`",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]"
    ],
    [
      "Tuple (of strings or numbers)",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]"
    ],
    [
      "`frozenset`",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]"
    ],
    [
      "List",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[no:✗ No]]",
      "[[no:✗ No]]",
      "[[ok:✓ Yes]]"
    ],
    [
      "Set",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[no:✗ No]]",
      "[[no:✗ No]]",
      "[[ok:✓ Yes]]"
    ],
    [
      "Dictionary",
      "[[ok:✓ Yes]]",
      "[[ok:✓ Yes]]",
      "[[no:✗ No]]",
      "[[no:✗ No]]",
      "[[ok:✓ Yes]]"
    ]
  ], cap: "Rule of thumb: a list, a tuple and a dictionary **value** accept anything. A set and a dictionary **key** accept only things that can never change.", master: true }, { t: "note", k: "why", h: "Why it works this way", b: "**Why can't a set hold a list?** A set (and the keys of a dictionary) files every item by its value, like a hotel giving each guest a fixed room based on their name, so it can find them instantly. A list can change after it goes in (you can `append` to it), and then Python would look in the wrong room and lose it. So only things that can never change are allowed in: strings, numbers, tuples and frozensets. Python calls them **hashable**. A tuple counts only if everything inside it can never change either." });
})();
