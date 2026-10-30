/* ---------- Part 5 overview: Real-world Python ---------- */
overview({
  part: 5, title: "Part 5 overview: errors, files and modules", nav: "Part 5 overview", time: "30 min",
  keys: "error exception syntax traceback try except else finally raise file mode read write append with csv json pickle module package library import pip datetime",
  lead: "The tools that make Python useful in real work, side by side: handling errors, reading and writing files, and importing modules. Use the tables to pick the right error, file mode, format or import style.",
  five: [
    "A **syntax error** stops your code before it runs. An **exception** happens while it runs. Read a traceback from the **bottom** line up.",
    "`try:` holds the risky code, `except SomeError:` says what to do instead, `else:` runs if nothing failed and `finally:` always runs. `raise` creates your own error.",
    "`open(name, mode)`: `\"r\"` read, `\"w\"` overwrite, `\"a\"` append, `\"x\"` create new. Use `with open(...) as f:` so the file always closes.",
    "Pick the format by the data: plain text for lines, CSV for tables, JSON for nested data, pickle for your own Python objects.",
    "A ==module== is one `.py` file, a ==package== is a folder of modules and a ==library== is a collection of them. Import with `import math`, `import numpy as np` or `from math import sqrt`."
  ],
  body: [
    { t: "h", text: "Mind map of Part 5" },
    { t: "mm", title: "Part 5 at a glance", root: "Part 5: Real-world", hint: "Tap a branch to open that chapter", kids: [
      { t: "16. Errors", go: "errors", k: ["syntax error vs exception", "read the last line first", "try / except", "else and finally", "raise ValueError(\"...\")"] },
      { t: "17. Files", go: "files", k: ["open(name, mode)", "r  w  a  x  (+ b)", "with open(...) as f", "read, readline, readlines", "csv, json, pickle"] },
      { t: "18. Modules", go: "modules", k: ["module, package, library", "import, from, as", "math, random, datetime", "statistics, Counter, re", "pip install"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "Syntax error", d: "The code breaks Python's grammar, so **nothing** runs. A missing bracket, quote or colon is the usual cause.", c: R`print("hi"`, o: R`SyntaxError: '(' was never closed`, err: true, go: "errors" },
      { t: "Exception", d: "An error that happens **while** the code runs, on a line that is valid but fails with this data.", c: R`print(10 / 0)`, o: R`ZeroDivisionError: division by zero`, err: true, go: "errors" },
      { t: "Traceback", d: "The error report Python prints. The **last line** names the error type and gives the message. The lines above show where it happened.", go: "errors" },
      { t: "try / except", d: "Run risky code in `try`. If a named error happens, Python jumps to the matching `except` instead of crashing.", c: R`
try:
    n = int("abc")
except ValueError:
    print("not a number")`, o: R`not a number`, go: "errors" },
      { t: "else and finally", d: "`else` runs only when `try` had no error. `finally` runs every time, error or not.", c: R`
try:
    n = int("7")
except ValueError:
    print("bad")
else:
    print("got", n)
finally:
    print("done")`, o: R`
got 7
done`, go: "errors" },
      { t: "raise", d: "Stops the code with an error you choose, and a clear message.", c: R`
def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

print(set_age(30))`, o: R`30`, go: "errors" },
      { t: "File mode", d: "The second argument of `open()`. It decides whether you read, overwrite, add to or create the file.", c: R`
with open("demo.txt", "w") as f:
    f.write("hello\n")
with open("demo.txt", "r") as f:
    print(f.read().strip())`, o: R`hello`, go: "files" },
      { t: "with statement", d: "Opens a file and closes it automatically when the block ends, even if an error happens.", c: R`
with open("demo.txt", "w") as f:
    f.write("saved")
print(f.closed)`, o: R`True`, go: "files" },
      { t: "CSV", d: "Comma-separated values: a plain-text table with one row per line. Excel and every data tool can read it.", c: R`
import csv
with open("marks.csv", "w", newline="") as f:
    csv.writer(f).writerows([["name", "mark"], ["Asha", 82]])
with open("marks.csv") as f:
    print(list(csv.DictReader(f)))`, o: R`[{'name': 'Asha', 'mark': '82'}]`, go: "files" },
      { t: "JSON", d: "A text format for nested data: dicts and lists. It is how most web APIs send data.", c: R`
import json
text = json.dumps({"name": "Asha", "tags": ["a", "b"]})
print(text)`, o: R`{"name": "Asha", "tags": ["a", "b"]}`, go: "files" },
      { t: "pickle", d: "Saves almost any Python object to a binary file and loads it back exactly. Open with `\"wb\"` and `\"rb\"`.", c: R`
import pickle
with open("data.pkl", "wb") as f:
    pickle.dump({"ids": (1, 2)}, f)
with open("data.pkl", "rb") as f:
    print(pickle.load(f))`, o: R`{'ids': (1, 2)}`, go: "files" },
      { t: "Module", d: "One `.py` file of Python code that you can import and reuse.", c: R`
import math
print(math.sqrt(16), math.pi > 3)`, o: R`4.0 True`, go: "modules" },
      { t: "Package", d: "A folder of related modules. You reach the modules inside with a dot, like `urllib.parse`.", c: R`
from urllib.parse import urlparse
print(urlparse("https://shop.in/sales").netloc)`, o: R`shop.in`, go: "modules" },
      { t: "Library", d: "A collection of modules and packages for one purpose, like NumPy for maths or pandas for tables.", c: R`
import numpy as np
print(np.array([1, 2, 3]) * 2)`, o: R`[2 4 6]`, go: "modules" },
      { t: "Alias", d: "A short nickname given when importing: `import numpy as np`. Stick to the standard ones.", c: R`
import statistics as st
print(st.median([3, 1, 2]))`, o: R`2`, go: "modules" },
      { t: "pip", d: "Python's installer for libraries that are not built in. In a notebook use `%pip install name`.", c: R`
%pip install pandas`, go: "modules" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "The errors you will meet most", head: ["Error", "What it means", "Example that causes it", "How to fix it"], rows: [
      ["`SyntaxError`", "The code breaks Python's grammar. Nothing runs", "`print(\"hi\"` (bracket never closed)", "Close brackets and quotes, add the missing colon"],
      ["`IndentationError`", "The spaces at the start of a line are wrong", "A line inside an `if` that is not indented", "Use 4 spaces, the same in every block"],
      ["`NameError`", "A name that does not exist (yet)", "`print(totl)`", "Check the spelling. Create the variable before using it"],
      ["`TypeError`", "The wrong type for this operation", "`\"25\" + 5`", "Convert first: `int(\"25\") + 5`"],
      ["`ValueError`", "The right type, but a value that makes no sense", "`int(\"abc\")`", "Check the input, or catch it with `try / except`"],
      ["`IndexError`", "A position that does not exist", "`[1, 2][5]`", "Check `len()` first, or use `[-1]` for the last item"],
      ["`KeyError`", "A dictionary key that does not exist", "`prices[\"milk\"]`", "Use `prices.get(\"milk\", 0)`, or check with `in`"],
      ["`AttributeError`", "That type has no such method or attribute", "`[1, 2].upper()`", "Check the type with `type(x)`"],
      ["`ZeroDivisionError`", "Dividing by zero", "`total / count` when count is 0", "Check the divisor before dividing"],
      ["`FileNotFoundError`", "The file is not where you said", "`open(\"missing.txt\")`", "Check the name and folder, or `os.path.exists()`"],
      ["`ModuleNotFoundError`", "Python cannot find that module", "`import pandsa`", "Fix the spelling, or `pip install` the library"]
    ], cap: "Read the error type on the last line of the traceback, then find it in this table." },
    { t: "table", master: true, title: "File modes", head: ["Mode", "Name", "If the file exists", "If the file is missing", "Use it for"], rows: [
      ["`\"r\"`", "Read (the default)", "Reads it", "[[no:FileNotFoundError]]", "Loading data"],
      ["`\"w\"`", "Write", "[[warn:Wipes it]], then writes", "Creates it", "Saving fresh output"],
      ["`\"a\"`", "Append", "Adds to the end", "Creates it", "Logs, adding new rows"],
      ["`\"x\"`", "Exclusive create", "[[no:FileExistsError]]", "Creates it", "Never overwriting by accident"],
      ["`\"r+\"`", "Read and write", "Reads and writes in place", "[[no:FileNotFoundError]]", "Editing a file (rare)"],
      ["`\"rb\"` / `\"wb\"`", "Binary read / write", "As `r` / `w`, but bytes", "As `r` / `w`", "pickle files, images"]
    ]},
    { t: "table", master: true, title: "Which file format should I use?", head: ["Format", "Looks like", "Module", "Write", "Read", "Best for"], rows: [
      ["Plain text `.txt`", "Lines of text", "Built in", "`f.write(text)`", "`f.read()` or `for line in f:`", "Notes, logs, simple lists"],
      ["CSV `.csv`", "`name,mark` rows", "`csv`", "`csv.writer(f).writerow(row)`", "`csv.reader(f)` or `csv.DictReader(f)`", "Tables, Excel exports"],
      ["JSON `.json`", "`{\"name\": \"Asha\"}`", "`json`", "`json.dump(data, f)`", "`json.load(f)`", "Nested data, APIs, settings"],
      ["pickle `.pkl`", "Binary, not readable", "`pickle`", "`pickle.dump(obj, f)` with `\"wb\"`", "`pickle.load(f)` with `\"rb\"`", "Saving your own Python objects. Never load one from a stranger"]
    ]},

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "Syntax error vs exception", head: ["", "Syntax error", "Exception"], rows: [
      ["When", "Before any line runs", "While the code is running"],
      ["Cause", "Broken grammar: a missing colon, bracket or quote", "A valid line fails with this data"],
      ["Example", "`if x > 1` (no colon)", "`int(\"abc\")`"],
      ["Can `try / except` catch it?", "[[no:No]] fix the code", "[[ok:Yes]]"]
    ], c: R`
try:
    int("abc")
except ValueError as e:
    print("Caught:", e)`, o: R`Caught: invalid literal for int() with base 10: 'abc'`, rule: "Syntax errors are typing mistakes. Exceptions are things that go wrong with real data." },
    { t: "vs", title: "`except` vs `else` vs `finally`", head: ["", "`except`", "`else`", "`finally`"], rows: [
      ["Runs when", "The `try` block raised that error", "The `try` block raised **no** error", "**Always**"],
      ["Use it for", "Plan B", "The next step that needs the `try` to have worked", "Clean-up: closing, saving, a log line"]
    ], c: R`
for text in ["42", "abc"]:
    try:
        n = int(text)
    except ValueError:
        print(text, "-> not a number")
    else:
        print(text, "-> ok, doubled:", n * 2)
    finally:
        print("checked", text)`, o: R`
42 -> ok, doubled: 84
checked 42
abc -> not a number
checked abc`, rule: "Keep the `try` block short: only the line that can fail. Put the follow-up in `else`." },
    { t: "vs", title: "`raise` vs `except`", head: ["", "`raise`", "`except`"], rows: [
      ["Does", "**Creates** an error and stops", "**Catches** an error and carries on"],
      ["Who writes it", "The person who spots the problem (often inside a function)", "The person who knows what to do about it (often the caller)"],
      ["Example", "`raise ValueError(\"age cannot be negative\")`", "`except ValueError as e:`"]
    ], c: R`
def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

try:
    set_age(-5)
except ValueError as e:
    print("Error:", e)`, o: R`Error: age cannot be negative`, rule: "Raise early with a clear message. Catch where you can actually fix it." },
    { t: "vs", title: "`except ValueError` vs `except Exception`", head: ["", "`except ValueError:`", "`except Exception:`"], rows: [
      ["Catches", "Only that error type", "Almost every error"],
      ["Risk", "Other errors still show up (good)", "Hides real bugs, like a typo that causes a NameError"],
      ["Order when you use both", "First", "Last, as a safety net"]
    ], c: R`
data = {"qty": "5"}
try:
    total = int(data["qty"]) * 10
    print(total)
except ValueError:
    print("qty is not a number")
except KeyError as e:
    print("missing key:", e)`, o: R`50`, rule: "Name the error you expect. Use `except Exception` only as the last line of defence, and print the error." },
    { t: "vs", title: "`\"w\"` vs `\"a\"` vs `\"x\"`", head: ["", "`\"w\"` write", "`\"a\"` append", "`\"x\"` create"], rows: [
      ["File exists", "[[warn:Wiped]] the moment it opens", "Kept, new text goes at the end", "[[no:FileExistsError]]"],
      ["File missing", "Created", "Created", "Created"],
      ["Use it for", "A fresh report every time", "A growing log", "Making sure you never overwrite"]
    ], c: R`
with open("log.txt", "w") as f:
    f.write("one\n")
with open("log.txt", "a") as f:
    f.write("two\n")
print(open("log.txt").read().split())
with open("log.txt", "w") as f:
    f.write("three\n")
print(open("log.txt").read().split())
try:
    open("log.txt", "x")
except FileExistsError:
    print("x refuses: the file exists")`, o: R`
['one', 'two']
['three']
x refuses: the file exists`, rule: "Adding to a file? Always `\"a\"`. Opening with `\"w\"` deletes what was there." },
    { t: "vs", title: "`read()` vs `readline()` vs `readlines()` vs `for line in f`", head: ["", "`f.read()`", "`f.readline()`", "`f.readlines()`", "`for line in f:`"], rows: [
      ["Gives you", "The whole file as **one string**", "The **next line**", "A **list** of all lines", "One line per round"],
      ["Keeps `\\n`?", "Yes", "Yes", "Yes (the last line may not have one)", "Yes: use `line.strip()`"],
      ["Memory", "Whole file", "One line", "Whole file", "One line at a time (best for big files)"]
    ], c: R`
with open("notes.txt", "w") as f:
    f.write("a\nb\nc\n")
with open("notes.txt") as f:
    print(repr(f.read()))
with open("notes.txt") as f:
    print(repr(f.readline()), f.readlines())`, o: R`
'a\nb\nc\n'
'a\n' ['b\n', 'c\n']`, rule: "For data files, loop with `for line in f:` and `strip()` each line." },
    { t: "vs", title: "JSON vs pickle", head: ["", "JSON", "pickle"], rows: [
      ["File type", "Text you can read", "Binary bytes"],
      ["Other languages can read it?", "[[ok:Yes]]", "[[no:No]] Python only"],
      ["Can save", "dicts, lists, strings, numbers, `True`/`False`, `None`", "Almost any Python object: tuples, sets, your own classes"],
      ["Tuples come back as", "Lists", "Tuples"],
      ["Safe to open from a stranger?", "[[ok:Yes]]", "[[no:No]] it can run code"]
    ], c: R`
import json, pickle
data = {"name": "Asha", "marks": (82, 91)}
text = json.dumps(data)
print(text)
print(json.loads(text))
blob = pickle.dumps(data)
print(type(blob), pickle.loads(blob))`, o: R`
{"name": "Asha", "marks": [82, 91]}
{'name': 'Asha', 'marks': [82, 91]}
<class 'bytes'> {'name': 'Asha', 'marks': (82, 91)}`, rule: "Sharing data or saving settings: JSON. Saving your own program's state for later: pickle." },
    { t: "vs", title: "Module vs package vs library", head: ["", "Module", "Package", "Library"], rows: [
      ["What it is", "One `.py` file", "A folder of modules", "A collection of modules and packages for one purpose"],
      ["Examples", "`math`, `random`, your own `billing.py`", "`urllib` (with `urllib.parse` inside), `json`, `collections`", "NumPy, pandas, Matplotlib"],
      ["Import", "`import math`", "`from collections import Counter`", "`import numpy as np`"]
    ], c: R`
import math
from collections import Counter
import numpy as np
print(math.sqrt(16))
print(Counter("banana").most_common(1))
print(np.array([1, 2]) * 3)`, o: R`
4.0
[('a', 3)]
[3 6]`, rule: "In everyday talk people mix these words up. In code they all work the same way: you import them." },
    { t: "vs", title: "`import x` vs `from x import y` vs `import x as z`", head: ["", "`import math`", "`from math import sqrt`", "`import numpy as np`"], rows: [
      ["You then write", "`math.sqrt(25)`", "`sqrt(25)`", "`np.array([1, 2])`"],
      ["Good because", "Clear where every name comes from", "Short", "Short, and everyone uses the same alias"],
      ["Watch out for", "Longer lines", "Name clashes with your own variables", "Use the standard aliases: `np`, `pd`, `plt`"]
    ], c: R`
import math
from math import sqrt
import statistics as st
print(math.sqrt(25), sqrt(25), st.mean([1, 2, 3]))`, o: R`5.0 5.0 2`, rule: "Avoid `from x import *`. It dumps every name into your file and hides where they came from." },
    { t: "vs", title: "`strftime()` vs `strptime()`", head: ["", "`d.strftime(fmt)`", "`datetime.strptime(text, fmt)`"], rows: [
      ["Direction", "Date **to** text (f for format)", "Text **to** date (p for parse)"],
      ["Called on", "A date object", "The `datetime` class"],
      ["Example", "`d.strftime(\"%d/%m/%Y\")` gives `'27/10/2024'`", "`strptime(\"05-01-2024\", \"%d-%m-%Y\")` gives a datetime"]
    ], c: R`
from datetime import datetime, timedelta
d = datetime(2024, 10, 27)
print(d.strftime("%d/%m/%Y"))
d2 = datetime.strptime("05-01-2024", "%d-%m-%Y")
print(d2.year, d2.month, (d2 + timedelta(days=30)).strftime("%d %b"))`, o: R`
27/10/2024
2024 1 04 Feb`, rule: "Format for printing: `strftime`. Parse text you read from a file: `strptime`." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "These tasks use real files inside the runner's own folder, so you can write and read them safely. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "Write `safe_int(text)` that returns the number, or `None` when the text is not a number. Then print `[safe_int(t) for t in [\"12\", \"x\", \"7\"]]`.", hint: "`try: return int(text)` and `except ValueError: return None`.", sol: R`
def safe_int(text):
    try:
        return int(text)
    except ValueError:
        return None

print([safe_int(t) for t in ["12", "x", "7"]])`, out: R`[12, None, 7]`, why: "The bad value does not crash the list. It just becomes `None`, which you can count or filter out later." },
      { q: "Write three students to `marks.csv` with `csv.writer`, read the file back with `csv.DictReader`, and print the average mark: `80.0`.", hint: "Write a header row first. `DictReader` gives text, so convert each mark with `int()`.", starter: "import csv\nrows = [[\"name\", \"mark\"], [\"Asha\", 82], [\"Ravi\", 67], [\"Neha\", 91]]\n", sol: R`
import csv
rows = [["name", "mark"], ["Asha", 82], ["Ravi", 67], ["Neha", 91]]
with open("marks.csv", "w", newline="") as f:
    csv.writer(f).writerows(rows)
with open("marks.csv") as f:
    marks = [int(r["mark"]) for r in csv.DictReader(f)]
print(sum(marks) / len(marks))`, out: R`80.0`, why: "Everything read from a CSV is text, so the marks need `int()` before you can do maths." },
      { q: "Save `settings = {\"city\": \"Pune\", \"dark_mode\": True}` to `settings.json`, load it back, and print `Pune True`.", hint: "`json.dump(settings, f)` with `\"w\"`, then `json.load(f)` with `\"r\"`.", starter: "import json\nsettings = {\"city\": \"Pune\", \"dark_mode\": True}\n", sol: R`
import json
settings = {"city": "Pune", "dark_mode": True}
with open("settings.json", "w") as f:
    json.dump(settings, f)
with open("settings.json") as f:
    loaded = json.load(f)
print(loaded["city"], loaded["dark_mode"])`, out: R`Pune True`, why: "JSON turns Python's `True` into `true` in the file and back into `True` when you load it." },
      { q: "Count the words in `text = \"the cat and the hat and the bat\"` and print the two most common: `[('the', 3), ('and', 2)]`.", hint: "`from collections import Counter`, then `Counter(text.split()).most_common(2)`.", starter: "text = \"the cat and the hat and the bat\"\n", sol: R`
from collections import Counter
text = "the cat and the hat and the bat"
print(Counter(text.split()).most_common(2))`, out: R`[('the', 3), ('and', 2)]`, why: "The standard library already has a tool for counting. Importing it beats writing the loop yourself." },
      { q: "How many days are there from 27 October 2024 to 25 December 2024? Print `59`.", hint: "`from datetime import date`, then subtract one date from the other and read `.days`.", sol: R`
from datetime import date
print((date(2024, 12, 25) - date(2024, 10, 27)).days)`, out: R`59`, why: "Subtracting two dates gives a `timedelta`, and `.days` reads the number of days in it." }
    ]}
  ],
  quiz: [
    { q: "Which kind of error stops the code before **any** line runs?", o: ["`ValueError`", "`SyntaxError`", "`KeyError`", "`ZeroDivisionError`"], a: 1, e: "Python checks the grammar of the whole file first. A syntax error means nothing runs at all." },
    { q: "What happens here?", c: R`print(int("3.5"))`, o: ["It prints `3`", "It prints `3.5`", "A `ValueError`", "A `TypeError`"], a: 2, e: "`int()` cannot read text with a decimal point. Use `int(float(\"3.5\"))` or `float(\"3.5\")`." },
    { q: "What does this print?", c: R`
out = []
try:
    out.append("try")
    1 / 0
except ZeroDivisionError:
    out.append("except")
else:
    out.append("else")
finally:
    out.append("finally")
print(out)`, o: ["`['try', 'except', 'finally']`", "`['try', 'else', 'finally']`", "`['try', 'except', 'else', 'finally']`", "`['except', 'finally']`"], a: 0, chk: 1, e: "An error happened, so `except` runs and `else` is skipped. `finally` always runs." },
    { q: "What does mode `\"w\"` do to a file that already exists?", o: ["Adds to the end", "Wipes it, then writes", "Raises `FileExistsError`", "Opens it read-only"], a: 1, e: "`\"w\"` empties the file the moment it opens. Use `\"a\"` to add to it." },
    { q: "Why should you open files with `with open(...) as f:`?", o: ["It reads faster", "It closes the file automatically, even if there is an error", "It is the only way to write", "It makes a backup"], a: 1, e: "The `with` block closes the file for you when it ends." },
    { q: "What does this print?", c: R`
import json
print(json.dumps({"a": (1, 2)}))`, o: ["`{'a': (1, 2)}`", "`{\"a\": [1, 2]}`", "`{\"a\": (1, 2)}`", "An error"], a: 1, chk: 1, e: "JSON has no tuples, so the tuple becomes a list. JSON also always uses double quotes." },
    { q: "Which mode do you need for `pickle.dump(obj, f)`?", o: ["`\"w\"`", "`\"wb\"`", "`\"a\"`", "`\"r\"`"], a: 1, e: "pickle writes bytes, so the file needs binary mode: `\"wb\"` to write and `\"rb\"` to read." },
    { q: "What does this print?", c: R`
from math import sqrt
print(sqrt(49))`, o: ["`7`", "`7.0`", "`math.sqrt(49)`", "An error"], a: 1, chk: 1, e: "`from math import sqrt` lets you call `sqrt` directly. It always returns a float." },
    { q: "What does this print?", c: R`
d = {"a": 1}
try:
    d["b"]
except KeyError as e:
    print("missing", e)`, o: ["`missing b`", "`missing 'b'`", "`missing KeyError`", "Nothing"], a: 1, chk: 1, e: "A KeyError's message is the missing key, shown with quotes." },
    { q: "You use both `except ValueError:` and `except Exception:`. Which should come first?", o: ["`except Exception:`", "`except ValueError:`", "The order does not matter", "You cannot use both"], a: 1, e: "Python uses the first matching `except`. `Exception` matches almost everything, so it must come last." },
    { q: "What does this print?", c: R`
from datetime import datetime
print(datetime(2024, 3, 9).strftime("%d %b %Y"))`, o: ["`9 Mar 2024`", "`09 Mar 2024`", "`2024-03-09`", "`09/03/2024`"], a: 1, chk: 1, e: "`%d` is the day with a leading zero, `%b` the short month name and `%Y` the four-digit year." },
    { q: "What is a package?", o: ["One `.py` file", "A folder of related modules", "A single function", "A file you install with `open()`"], a: 1, e: "A module is one file. A package is a folder of modules, reached with dots like `urllib.parse`." }
  ],
  cards: [
    ["Syntax error vs exception", "A syntax error is broken grammar and nothing runs. An exception happens while the code runs, and `try / except` can catch it."],
    ["How do you read a traceback?", "From the bottom. The last line gives the error type and message. The line above it shows where it happened."],
    ["`except` vs `else` vs `finally`", "`except`: an error happened. `else`: no error happened. `finally`: always runs."],
    ["What does `raise` do?", "Stops the program with an error you choose.", R`raise ValueError("qty must be positive")`],
    ["`TypeError` vs `ValueError`", "`TypeError`: wrong type (`\"5\" + 5`). `ValueError`: right type, bad value (`int(\"abc\")`)."],
    ["`\"w\"` vs `\"a\"` vs `\"x\"`", "`w` wipes and writes. `a` adds to the end. `x` creates a new file and fails if it already exists."],
    ["Why use `with open(...) as f:`?", "The file closes automatically when the block ends, even after an error."],
    ["`read()` vs `readlines()` vs `for line in f`", "`read()` gives one string. `readlines()` gives a list of lines. `for line in f` gives one line per round and saves memory."],
    ["CSV vs JSON vs pickle", "CSV for tables, JSON for nested data you may share, pickle for saving your own Python objects."],
    ["Which file modes does pickle need?", "Binary: `\"wb\"` to save and `\"rb\"` to load."],
    ["Module vs package vs library", "Module: one `.py` file. Package: a folder of modules. Library: a collection for one purpose, like NumPy."],
    ["Three ways to import", "`import math`, `from math import sqrt`, `import numpy as np`."],
    ["`strftime` vs `strptime`", "`strftime` formats a date as text. `strptime` parses text into a date."]
  ]
});
