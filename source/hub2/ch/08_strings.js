chapter({
  id: "strings", part: 3, title: "Strings in depth", nav: "Strings", time: "60 min", lvl: "Beginner", tricky: true,
  keys: "string str index indexing slicing slice negative index reverse immutable upper lower title capitalize strip replace split join find count startswith isdigit isalpha isalnum len",
  lead: "Text is everywhere in data: names, cities, emails, product codes. Learn to pick out parts of a string, clean it up and check what it contains.",
  goals: [
    "Get single characters with **indexing**, including negative indexes",
    "Cut out parts with **slicing** `[start:stop:step]`",
    "Understand why strings are **immutable** and what that means for methods",
    "Clean text with `strip()`, `replace()`, `lower()`, `title()`, `split()` and `join()`",
    "Search and check text with `find()`, `count()`, `startswith()` and the `is...()` methods"
  ],
  src: ["PDF: Python Advanced Data Types (Strings)", "Course notebook types_of_data_types.ipynb", "W3Schools: Strings, Slicing, Modify, String Methods"],
  body: [
    { t: "h", text: "A string is a row of characters" },
    { t: "mm", title: "Everything you can do with a string", root: "Strings", kids: [
      { t: "Get parts", k: ["indexing s[0], s[-1]", "slicing s[2:5]", "reverse s[::-1]"] },
      { t: "Change case", k: ["upper(), lower()", "title(), capitalize()", "swapcase()"] },
      { t: "Clean", k: ["strip(), lstrip(), rstrip()", "replace(old, new)"] },
      { t: "Split and join", k: ["split(\",\")", "\", \".join(list)"] },
      { t: "Search", k: ["find(), index()", "count()", "startswith(), endswith()", "in"] },
      { t: "Check", k: ["isdigit(), isalpha()", "isalnum(), isspace()", "isupper(), islower()"] }
    ]},
    { t: "p", b: "A ==string== is a sequence of characters in a fixed order. Every character has a position number called an **index**. `len()` tells you how many characters there are, including spaces." },
    { t: "code", c: R`
message = "Hello, World!"
print(len(message))
print(type(message))`, o: R`
13
<class 'str'>` },
    { t: "h", text: "Indexing: one character at a time" },
    { t: "fig", svg: V.strip(["P", "y", "t", "h", "o", "n"], { neg: true, rowLabels: true, w: 56, hl: [0, 5], label: "The word Python with positive indexes 0 to 5 and negative indexes -6 to -1" }), cap: "Positive indexes start at **0** on the left. Negative indexes start at **-1** on the right." },
    { t: "code", c: R`
message = "Python"
print(message[0])     # first character
print(message[1])
print(message[-1])    # last character
print(message[-2])    # second from the end`, o: R`
P
y
n
o` },
    { t: "note", k: "key", b: "Counting starts at **0**, not 1. So the first character is `[0]` and the last is `[len - 1]`, or simply `[-1]`. Negative indexes are the easy way to grab things from the end." },
    { t: "note", k: "trap", h: "Trap! Index out of range", b: "\"Python\" has 6 characters, indexes 0 to 5. Asking for index 6 is an error.", c: R`print("Python"[6])`, o: R`IndexError: string index out of range`, err: true },
    { t: "h", text: "Slicing: cut out a piece" },
    { t: "p", b: "Slicing uses `[start:stop:step]`. You get the characters **from start up to, but not including, stop**. Leave out start to begin at the beginning. Leave out stop to go to the end. Step is how far to jump each time (default 1)." },
    { t: "anim", title: "Slicing a[6:10] step by step", frames: sliceFrames("raman Sharma", 6, 10, 1, "a = \"raman Sharma\"\na[6:10]") },
    { t: "code", ttl: "From your course notebook", c: R`
a = "raman Sharma"
print(a[6:10])     # from index 6 up to (not including) 10
print(a[-3:])      # the last 3 characters
print(a[-6:-1])    # negative indexes work too`, o: R`
Shar
rma
Sharm` },
    { t: "code", ttl: "From the PDF", c: R`
message = "Python Programming"
print(message[0:6])
print(message[7:18])
print(message[:6])      # from the start
print(message[7:])      # to the end
print(message[0:18:2])  # every second character
print(message[::-1])    # reversed`, o: R`
Python
Programming
Python
Programming
Pto rgamn
gnimmargorP nohtyP` },
    { t: "anim", title: "Slicing with a step: message[0:18:2]", frames: sliceFrames("Python Programming", 0, 18, 2, "message[0:18:2]") },
    { t: "table", head: ["Slice", "Means", "\"Python\" gives"], rows: [
      ["`s[2:5]`", "Index 2 up to 4", "`\"tho\"`"],
      ["`s[:3]`", "First 3 characters", "`\"Pyt\"`"],
      ["`s[3:]`", "From index 3 to the end", "`\"hon\"`"],
      ["`s[-3:]`", "Last 3 characters", "`\"hon\"`"],
      ["`s[:-1]`", "Everything except the last", "`\"Pytho\"`"],
      ["`s[::2]`", "Every second character", "`\"Pto\"`"],
      ["`s[::-1]`", "Reversed", "`\"nohtyP\"`"],
      ["`s[:]`", "A full copy", "`\"Python\"`"]
    ]},
    { t: "note", k: "tip", b: "Slicing never gives an index error. If stop is past the end, Python just stops at the end. `\"Python\"[2:100]` is `\"thon\"`." },
    { t: "note", k: "like", b: "Think of the index numbers as sitting **between** the characters, like the marks on a ruler. `s[2:5]` cuts at mark 2 and mark 5 and gives you what is in between: 3 characters. This is why stop is not included, and why, with a step of 1, `stop - start` is the length of the slice (when stop is inside the string)." },
    { t: "pred", chk: 1, c: R`print("Data Analytics"[::-1][:4])`, o: ["`Data`", "`scit`", "`atad`", "`tics`"], a: 1, e: "First `[::-1]` reverses it to \"scitylanA ataD\". Then `[:4]` takes the first 4 characters of that: \"scit\"." },
    { t: "h", text: "Strings are immutable" },
    { t: "p", b: "==Immutable== means **cannot be changed after it is created**. You cannot replace one character inside a string." },
    { t: "code", c: R`
name = "Raman"
name[0] = "P"`, o: R`TypeError: 'str' object does not support item assignment`, err: true },
    { t: "p", b: "So methods that change text, like `upper()` and `replace()`, give you a **new** string and leave the original alone. This example from your course notebook shows it clearly." },
    { t: "code", c: R`
city = "Jaipur"
print(city.replace("Jai", "Udai"))
print(city)                          # unchanged!

city = city.replace("Jai", "Udai")   # store the new string to keep it
print(city)`, o: R`
Udaipur
Jaipur
Udaipur` },
    { t: "note", k: "trap", h: "Trap! Forgetting to store the result", b: "Writing `name.upper()` on its own line does nothing useful. The new uppercase string is created and thrown away. Write `name = name.upper()` to keep it." },
    { t: "h", text: "Changing case" },
    { t: "code", ttl: "From your course notebook", c: R`
a = "raman Sharma"
print(a.upper())
print(a.lower())
print(a.capitalize())   # first letter capital, rest small
print(a.title())        # first letter of each word capital
print(a.swapcase())
print(a.upper().count("R"))`, o: R`
RAMAN SHARMA
raman sharma
Raman sharma
Raman Sharma
RAMAN sHARMA
2` },
    { t: "note", k: "tip", b: "Text comparisons are case-sensitive: `\"Delhi\" == \"delhi\"` is False. Before comparing or counting text from users or files, make it all lowercase with `.lower()`." },
    { t: "h", text: "Cleaning: strip and replace" },
    { t: "p", b: "`strip()` removes characters from **both ends** only. With no argument it removes spaces, tabs and new lines. `lstrip()` cleans the left end, `rstrip()` the right end." },
    { t: "code", c: R`
messy = "   Hello, World!   "
print("[" + messy.strip() + "]")
print("[" + messy.lstrip() + "]")
print("[" + messy.rstrip() + "]")

a = "$$Raman$$$"
print(a.strip("$"))
print(a.lstrip("$"))
print(a.rstrip("$"))`, o: R`
[Hello, World!]
[Hello, World!   ]
[   Hello, World!]
Raman
Raman$$$
$$Raman` },
    { t: "note", k: "trap", h: "Trap! strip() never touches the middle", b: "`strip()` only works on the ends. To remove a character everywhere, use `replace(\"$\", \"\")`.", c: R`
a = "$$Ram$an$$$"
print(a.strip("$"))
print(a.replace("$", ""))`, o: R`
Ram$an
Raman` },
    { t: "code", ttl: "replace(old, new, count)", c: R`
message = "Python is great, Python is easy"
print(message.replace("Python", "JavaScript"))
print(message.replace("Python", "JavaScript", 1))   # only the first one`, o: R`
JavaScript is great, JavaScript is easy
JavaScript is great, Python is easy` },
    { t: "h", text: "split() and join()" },
    { t: "p", b: "`split()` breaks a string into a **list** of pieces. `join()` does the opposite: it glues a list of strings together. These two are used constantly when reading data files." },
    { t: "code", c: R`
csv_data = "apple,banana,cherry"
print(csv_data.split(","))

email = "wscube@gmail.com"
print(email.split("@"))            # course example

sentence = "the  cat sat"
print(sentence.split())            # no argument: split on any spaces

fruits = ["apple", "banana", "cherry"]
print(", ".join(fruits))
print("-".join(["2026", "10", "25"]))`, o: R`
['apple', 'banana', 'cherry']
['wscube', 'gmail.com']
['the', 'cat', 'sat']
apple, banana, cherry
2026-10-25` },
    { t: "note", k: "trap", h: "Trap! join() only joins strings", b: "The glue goes **before** `.join`, and the list must hold only strings.", c: R`print(", ".join([1, 2, 3]))`, o: R`TypeError: sequence item 0: expected str instance, int found`, err: true },
    { t: "deck", title: "Cleaning messy text, one step at a time", s: [
      { big: "Real data is messy.", b: "Here is a name and city typed by a customer into a booking form: `\"   priya SHARMA , mumbai   \"`. Let us clean it in four steps." },
      { h: "Step 1: strip the outer spaces", c: R`
raw = "   priya SHARMA , mumbai   "
step1 = raw.strip()
print("[" + step1 + "]")`, o: R`[priya SHARMA , mumbai]` },
      { h: "Step 2: fix the capitals with title()", c: R`
raw = "   priya SHARMA , mumbai   "
step2 = raw.strip().title()
print(step2)`, o: R`Priya Sharma , Mumbai` },
      { h: "Step 3: split into two parts", b: "Methods can be **chained**: each one works on the result of the one before.", c: R`
raw = "   priya SHARMA , mumbai   "
name, city = raw.strip().title().split(",")
print([name, city])`, o: R`['Priya Sharma ', ' Mumbai']` },
      { h: "Step 4: strip each part and use them", c: R`
raw = "   priya SHARMA , mumbai   "
name, city = raw.strip().title().split(",")
name = name.strip()
city = city.strip()
print(f"{name} from {city}")`, o: R`Priya Sharma from Mumbai` },
      { h: "Why this matters", b: "Without cleaning, \"mumbai\", \"Mumbai \" and \"MUMBAI\" count as three different cities in your report. Cleaning text is often the biggest part of a data analyst's job." }
    ]},
    { t: "h", text: "Searching inside a string" },
    { t: "code", c: R`
message = "Python Programming"
print(message.find("Pro"))      # index where it starts
print(message.find("Java"))     # -1 means not found
print("Pro" in message)         # simple yes/no

text = "Python is amazing and Python is easy to learn"
print(text.count("Python"))
print(text.count("a"))

name = "Raman"
print(name.startswith("r"))     # case matters
print(name.startswith("R"))
print("report.csv".endswith(".csv"))`, o: R`
7
-1
True
2
5
False
True
True` },
    { t: "note", k: "tip", b: "The PDF says `text.count(\"a\")` is 4. Run it and you get 5. \"amazing\" has two a's, and \"and\", \"easy\" and \"learn\" have one each. Always run the code yourself. The output is the truth." },
    { t: "note", k: "trap", h: "find() vs index()", b: "Both return the position. When the text is **not found**, `find()` returns `-1` but `index()` raises an error. Use `find()` (or `in`) when the text might be missing.", c: R`print("Python".index("Java"))`, o: R`ValueError: substring not found`, err: true },
    { t: "h", text: "Checking what a string contains" },
    { t: "code", ttl: "From your course notebook", c: R`
a = "Raman"
b = "Wscube123"
c = "9876"
d = "WsCube Tech"

print(a.isalpha(), b.isalpha(), c.isalpha(), d.isalpha())
print(a.isalnum(), b.isalnum(), c.isalnum(), d.isalnum())
print(a.isnumeric(), b.isnumeric(), c.isnumeric(), d.isnumeric())`, o: R`
True False False False
True True True False
False False True False` },
    { t: "table", head: ["Method", "True when every character is...", "Watch out"], rows: [
      ["`isalpha()`", "a letter", "A space makes it False"],
      ["`isdigit()`", "a digit 0 to 9", "`\"-5\"` and `\"3.5\"` are False"],
      ["`isnumeric()`", "a number character", "Same as above for everyday use"],
      ["`isalnum()`", "a letter or digit", "\"WsCube Tech\" is False because of the space"],
      ["`isspace()`", "whitespace", ""],
      ["`isupper()` / `islower()`", "upper / lower case letters", "Digits and spaces are ignored, but there must be at least one letter"]
    ]},
    { t: "h", text: "Looping over a string" },
    { t: "code", c: R`
for index, character in enumerate("Py"):
    print(f"Index {index}: {character}")

vowels = 0
for ch in "Data Analytics".lower():
    if ch in "aeiou":
        vowels += 1
print("Vowels:", vowels)`, o: R`
Index 0: P
Index 1: y
Vowels: 5` },
    { t: "h", text: "String methods reference" },
    { t: "table", head: ["Method", "Example", "Result"], rows: [
      ["`upper()` `lower()`", "`\"Hi\".upper()`", "`\"HI\"`"],
      ["`title()` `capitalize()`", "`\"hi there\".title()`", "`\"Hi There\"`"],
      ["`strip()` `lstrip()` `rstrip()`", "`\" hi \".strip()`", "`\"hi\"`"],
      ["`replace(a, b)`", "`\"a-b\".replace(\"-\", \"+\")`", "`\"a+b\"`"],
      ["`split(sep)`", "`\"a,b\".split(\",\")`", "`[\"a\", \"b\"]`"],
      ["`sep.join(list)`", "`\"-\".join([\"a\", \"b\"])`", "`\"a-b\"`"],
      ["`find(x)` `index(x)`", "`\"hello\".find(\"l\")`", "`2`"],
      ["`count(x)`", "`\"hello\".count(\"l\")`", "`2`"],
      ["`startswith(x)` `endswith(x)`", "`\"data.csv\".endswith(\".csv\")`", "`True`"],
      ["`isdigit()` `isalpha()` `isalnum()`", "`\"123\".isdigit()`", "`True`"],
      ["`zfill(n)`", "`\"7\".zfill(3)`", "`\"007\"`"],
      ["`center(n)` `ljust(n)` `rjust(n)`", "`\"hi\".center(6, \"*\")`", "`\"**hi**\"`"]
    ]},
    { t: "prac", items: [
      { q: "From `email = \"raman.kumar@company.in\"`, print the username and the domain separately.", sol: R`
email = "raman.kumar@company.in"
user, domain = email.split("@")
print("User:", user)
print("Domain:", domain)`, out: R`
User: raman.kumar
Domain: company.in` },
      { q: "Check whether a word is a palindrome (reads the same backwards), ignoring capitals. Test with \"Madam\".", hint: "Lowercase it, then compare it with its reverse `[::-1]`.", sol: R`
word = "Madam"
w = word.lower()
print(w == w[::-1])`, out: R`True` },
      { q: "Print the initials of `\"raman kumar sharma\"` as `RKS`.", sol: R`
full = "raman kumar sharma"
initials = ""
for part in full.split():
    initials += part[0].upper()
print(initials)`, out: R`RKS` },
      { q: "Mask a phone number so only the last 4 digits show: `9876543210` becomes `******3210`.", sol: R`
phone = "9876543210"
masked = "*" * (len(phone) - 4) + phone[-4:]
print(masked)`, out: R`******3210` },
      { q: "Count how many times the word \"data\" appears in `\"Data beats opinion. Clean data, then analyse data.\"`, ignoring case.", sol: R`
text = "Data beats opinion. Clean data, then analyse data."
print(text.lower().count("data"))`, out: R`3` },
      { q: "A product code looks like `\"SKU-00482-BLU\"`. Pull out the number part as an integer.", sol: R`
code = "SKU-00482-BLU"
number = int(code.split("-")[1])
print(number)`, out: R`482` }
    ]}
  ],
  take: [
    "Indexes start at 0. Negative indexes count from the end: `s[-1]` is the last character.",
    "Slicing `s[start:stop:step]` includes start, excludes stop. `s[::-1]` reverses.",
    "Strings are immutable. Methods return a new string, so store it: `s = s.strip()`.",
    "`strip()` cleans only the ends. `replace()` changes everywhere.",
    "`split()` turns text into a list. `\", \".join(list)` turns a list back into text.",
    "`find()` returns -1 when missing. `index()` raises an error."
  ],
  quiz: [
    { q: "What does this print?", c: R`
s = "Python"
print(s[1], s[-1])`, o: ["`P n`", "`y n`", "`y o`", "`P o`"], a: 1, chk: 1, e: "Index 1 is the second character, y. Index -1 is the last character, n." },
    { q: "What does this print?", c: R`print("Analytics"[2:5])`, o: ["`naly`", "`aly`", "`al`", "`nal`"], a: 1, chk: 1, e: "Indexes 2, 3 and 4: a, l, y. Stop (5) is not included." },
    { q: "What does this print?", c: R`print("Python"[::-1])`, o: ["`Python`", "`nohtyP`", "`P`", "`n`"], a: 1, chk: 1, e: "A step of -1 walks backwards through the whole string." },
    { q: "What does this print?", c: R`
city = "jaipur"
city.upper()
print(city)`, o: ["`JAIPUR`", "`jaipur`", "`Jaipur`", "An error"], a: 1, chk: 1, e: "Strings are immutable. `upper()` made a new string that was never stored." },
    { q: "What does this print?", c: R`print("--data--".strip("-"))`, o: ["`data`", "`--data`", "`data--`", "`d-a-t-a`"], a: 0, chk: 1, e: "strip removes the given character from both ends." },
    { q: "What does this print?", c: R`print("a,b,c".split(","))`, o: ["`abc`", "`['a', 'b', 'c']`", "`('a', 'b', 'c')`", "`a b c`"], a: 1, chk: 1, e: "split returns a list of strings." },
    { q: "What does this print?", c: R`print("Python".find("z"))`, o: ["`0`", "`-1`", "`None`", "An error"], a: 1, chk: 1, e: "find returns -1 when the text is not found. index would raise an error instead." },
    { q: "What does this print?", c: R`print("WsCube Tech".isalnum())`, o: ["`True`", "`False`", "An error", "`None`"], a: 1, chk: 1, e: "The space is not a letter or digit, so it is False." },
    { q: "What does this print?", c: R`print("hello world".title())`, o: ["`Hello world`", "`Hello World`", "`HELLO WORLD`", "`hello World`"], a: 1, chk: 1, e: "title() capitalises the first letter of every word." },
    { q: "Which line joins `[\"a\", \"b\", \"c\"]` into `a-b-c`?", o: ["`[\"a\", \"b\", \"c\"].join(\"-\")`", "`\"-\".join([\"a\", \"b\", \"c\"])`", "`join(\"-\", [\"a\", \"b\", \"c\"])`", "`\"-\".split([\"a\", \"b\", \"c\"])`"], a: 1, e: "The separator comes first, then `.join(list)`." }
  ],
  cards: [
    ["What is the index of the first and last character?", "First: `0`. Last: `-1` (or `len(s) - 1`)."],
    ["What does `s[2:5]` return?", "The characters at index 2, 3 and 4. Stop (5) is never included."],
    ["How do you reverse a string?", "`s[::-1]`"],
    ["What does immutable mean for strings?", "A string cannot be changed in place. `s[0] = \"X\"` is an error. Methods return a **new** string."],
    ["Why does `name.upper()` alone not change `name`?", "It returns a new string. You must store it: `name = name.upper()`."],
    ["`strip()` vs `replace()`", "`strip()` removes characters only from the two ends. `replace(old, new)` changes every match anywhere."],
    ["`capitalize()` vs `title()`", "`capitalize()`: capital first letter, every other letter small (`\"raman Sharma\"` becomes `\"Raman sharma\"`). `title()`: capital first letter of every word."],
    ["What do `split()` and `join()` do?", "`\"a,b\".split(\",\")` gives `['a', 'b']`. `\",\".join(['a', 'b'])` gives `\"a,b\"`."],
    ["`find()` vs `index()` when text is missing", "`find()` returns `-1`. `index()` raises `ValueError`."],
    ["How do you count a word ignoring case?", "`text.lower().count(\"data\")`"],
    ["Does slicing past the end cause an error?", "No. `\"Python\"[2:100]` just gives `\"thon\"`. Only single indexes like `s[100]` raise IndexError."]
  ],
  cheat: [
    ["s[0]  s[-1]", "First and last character"],
    ["s[2:5]  s[:3]  s[3:]", "Slices"],
    ["s[::-1]", "Reverse"],
    ["len(s)", "Number of characters"],
    ["s.upper()  s.lower()  s.title()", "Change case"],
    ["s.strip()", "Remove spaces at both ends"],
    ["s.replace(\"a\", \"b\")", "Replace every a with b"],
    ["s.split(\",\")", "Text to list"],
    ["\", \".join(items)", "List to text"],
    ["s.find(\"x\")  s.count(\"x\")", "Position (-1 if missing), number of matches"],
    ["s.startswith(\"x\")", "Starts with x?"],
    ["s.isdigit()  s.isalpha()", "Only digits? Only letters?"]
  ]
});
