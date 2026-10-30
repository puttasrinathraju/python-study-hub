(function(){
function fileSvg(name, lines, cls, tag){
  var h = 60 + lines.length * 24;
  var s = '<svg viewBox="0 0 340 ' + (h + 34) + '" width="340" role="img" aria-label="File ' + V.esc(name) + '">';
  s += '<path d="M20 10 H270 L300 40 V' + (h + 10) + ' H20 Z" class="' + (cls || 'sv-box') + '"/><path d="M270 10 V40 H300" class="sv-ln"/>';
  s += '<text x="34" y="32" class="sv-h">' + V.esc(name) + '</text>';
  lines.forEach(function(L, i){ s += '<text x="34" y="' + (64 + i * 24) + '" class="sv-tm" style="font-size:14px">' + V.esc(L) + '</text>'; });
  if (tag) s += '<text x="160" y="' + (h + 30) + '" text-anchor="middle" class="sv-mb">' + V.esc(tag) + '</text>';
  return s + '</svg>';
}
var before = fileSvg("demo.txt", ["Hi, Good Evening!!", "Hello World"], "sv-box", "the file before we open it");

chapter({
  id: "files", part: 5, title: "File handling", nav: "Files, CSV, JSON & pickle", time: "55 min", lvl: "Intermediate", tricky: true,
  keys: "file open read write append mode r w a x rb wb with readline readlines close path os remove exists csv json pickle dump load serialization",
  lead: "Save results to files and load data back in. Plain text, CSV, JSON and pickle: the four ways you will move data in and out of Python.",
  goals: [
    "Open files with the right mode: `r`, `w`, `a`, `x`, and the binary `b` versions",
    "Read with `read()`, `readline()`, `readlines()` and a `for` loop",
    "Write and append text, and remember `write()` only takes strings",
    "Always use `with open(...)` so files close automatically",
    "Save and load data with `csv`, `json` and `pickle`"
  ],
  src: ["PDF: Functions, File Handling and Essential Modules", "Course notebook functions_file_handling.ipynb (demo.txt, movie_ticket_db with pickle)", "W3Schools: File Handling, Read, Write/Create, Delete Files, JSON"],
  body: [
    { t: "h", text: "Why files?" },
    { t: "p", b: "Variables disappear when your program stops. ==Files== keep data on your disk, so you can save results, load data from other people, and share work. The basic recipe is always: **open** the file, **read or write**, **close** it." },
    { t: "h", text: "Opening a file: the modes" },
    { t: "p", b: "`open(filename, mode)` returns a file object. The **mode** tells Python what you plan to do." },
    { t: "table", head: ["Mode", "Meaning", "If the file exists", "If it does not exist"], rows: [
      ["`\"r\"`", "Read (the default)", "Reads it", "**FileNotFoundError**"],
      ["`\"w\"`", "Write", "**Wipes it clean** first", "Creates it"],
      ["`\"a\"`", "Append", "Adds to the end", "Creates it"],
      ["`\"x\"`", "Create", "**FileExistsError**", "Creates it"],
      ["`\"rb\"`, `\"wb\"`", "Read / write **binary** data", "Used for pickle, images", ""],
      ["`\"r+\"`", "Read and write", "Keeps content", "FileNotFoundError"]
    ]},
    { t: "anim", title: "What each mode does to a file", frames: [
      { html: before, c: "Here is `demo.txt` with two lines in it. Let us see what each mode does." },
      { html: fileSvg("demo.txt", ["Hi, Good Evening!!", "Hello World"], "sv-acc", "\"r\": read only, nothing changes") + "<div class=\"bigcode\">open(\"demo.txt\", \"r\")</div>", c: "**r (read)**: you can read the contents. The file is not changed. This is the default mode." },
      { html: fileSvg("demo.txt", ["New text"], "sv-trap", "\"w\": old content is gone!") + "<div class=\"bigcode\">f.write(\"New text\")</div>", c: "**w (write)**: the moment you open with \"w\", the old content is **deleted**. Then your new text is written. Be careful!" },
      { html: fileSvg("demo.txt", ["Hi, Good Evening!!", "Hello World", "This is an extra line."], "sv-tip", "\"a\": new text added at the end") + "<div class=\"bigcode\">f.write(\"\\nThis is an extra line.\")</div>", c: "**a (append)**: old content stays, and new text is added at the end. Notice we had to write `\\n` ourselves to start a new line." },
      { html: before + "<div class=\"bigcode\">open(\"demo.txt\", \"x\")</div><div class=\"res\" style=\"color:var(--trap)\">FileExistsError</div>", c: "**x (create)**: only works if the file does **not** exist yet. A safe way to avoid overwriting something by accident." }
    ]},
    { t: "note", k: "trap", h: "Trap! \"w\" deletes what was there", b: "Opening an existing file in `\"w\"` mode empties it immediately, even if you never call `write()`. If you want to add to a file, use `\"a\"`." },
    { t: "h", text: "Writing to a file" },
    { t: "code", ttl: "From the PDF", c: R`
file = open("demo.txt", "w")
file.write("This is a sample file.")
file.close()                          # always close when you open this way

file = open("demo.txt", "a")
file.write("\nThis is an extra line.")
file.close()

file = open("demo.txt", "r")
print(file.read())
file.close()`, o: R`
This is a sample file.
This is an extra line.` },
    { t: "note", k: "trap", h: "Trap from the course: write() only accepts strings", b: "The notebook tried `f.write(2000)` and got an error. Convert numbers first with `str()` or an f-string.", c: R`
with open("demo.txt", "a") as f:
    f.write(2000)`, o: R`TypeError: write() argument must be str, not int`, err: true },
    { t: "code", ttl: "Writing several lines", c: R`
lines = ["rice\n", "dal\n", "oil\n"]
with open("shopping.txt", "w") as f:
    f.writelines(lines)              # no newlines added for you
    f.write(f"total items: {len(lines)}\n")

with open("shopping.txt") as f:
    print(f.read())`, o: R`
rice
dal
oil
total items: 3` },
    { t: "h", text: "The with statement (always use it)" },
    { t: "p", b: "`with open(...) as f:` opens the file and **closes it automatically** when the indented block ends, even if an error happens inside. No forgotten `close()`, no locked files." },
    { t: "cmp", l: { h: "Manual: easy to forget close()", c: R`
f = open("demo.txt", "r")
data = f.read()
f.close()` }, r: { h: "with: closes for you (recommended)", c: R`
with open("demo.txt", "r") as f:
    data = f.read()
# file is already closed here` } },
    { t: "h", text: "Reading a file" },
    { t: "table", head: ["Method", "Gives you"], rows: [
      ["`f.read()`", "The **whole file** as one string"],
      ["`f.readline()`", "The **next line** as a string (including its `\\n`)"],
      ["`f.readlines()`", "A **list** of all lines. Each keeps its `\\n` (the last line may not have one)"],
      ["`for line in f:`", "One line at a time. Best for big files"]
    ]},
    { t: "code", ttl: "The course example", c: R`
with open("demo.txt", "w") as f:
    f.write("Hi, Good Evening!!\nHello World")

with open("demo.txt", "r") as f:
    print(f.readlines())

with open("demo.txt") as f:
    print(f.readline().strip())       # strip() removes the trailing \n
    print(f.readline().strip())

with open("demo.txt") as f:
    for line in f:
        print("->", line.strip())`, o: R`
['Hi, Good Evening!!\n', 'Hello World']
Hi, Good Evening!!
Hello World
-> Hi, Good Evening!!
-> Hello World` },
    { t: "note", k: "tip", b: "Each line you read keeps its `\\n` at the end. If you print it directly, you get an extra blank line. `line.strip()` removes it. This is why almost every file loop uses `.strip()`." },
    { t: "pred", c: R`
with open("count.txt", "w") as f:
    f.write("one\ntwo\nthree\n")
with open("count.txt") as f:
    print(len(f.readlines()))`, o: ["`1`", "`3`", "`4`", "`13`"], a: 1, chk: 1, e: "Three lines, each ending with \\n. The final \\n does not start a fourth line." },
    { t: "h", text: "Paths, and checking or deleting files" },
    { t: "p", b: "A file name like `\"demo.txt\"` is a **relative path**: Python looks in the current folder (in Jupyter, the folder the notebook is in). A **full path** like `C:\\Users\\Raman\\data.csv` works from anywhere. On Windows, put `r` before the string so the backslashes are not treated as escape characters: `r\"C:\\Users\\Raman\\data.csv\"`." },
    { t: "code", c: R`
import os

with open("temp.txt", "w") as f:
    f.write("delete me")

print(os.path.exists("temp.txt"))
os.remove("temp.txt")                 # delete the file
print(os.path.exists("temp.txt"))`, o: R`
True
False` },
    { t: "code", ttl: "The two errors you will meet most", c: R`open("missing.txt")`, o: R`FileNotFoundError: [Errno 2] No such file or directory: 'missing.txt'`, err: true },
    { t: "code", c: R`
with open("report.txt", "w") as f:
    f.write("v1")
open("report.txt", "x")`, o: R`FileExistsError: [Errno 17] File exists: 'report.txt'`, err: true },
    { t: "h", text: "CSV files" },
    { t: "p", b: "A ==CSV== (comma-separated values) file is a table saved as text: one row per line, columns separated by commas. Excel opens it, and it is the most common data file you will receive. Python's built-in `csv` module handles the commas and quotes for you." },
    { t: "code", c: R`
import csv

rows = [["name", "city", "amount"],
        ["Asha", "Pune", 1200],
        ["Ravi", "Delhi", 950]]
with open("sales.csv", "w", newline="") as f:
    csv.writer(f).writerows(rows)

with open("sales.csv", newline="") as f:
    reader = csv.DictReader(f)        # each row becomes a dict
    total = 0
    for row in reader:
        print(row["name"], row["amount"])
        total += float(row["amount"])  # values are read back as text
print("Total:", total)`, o: R`
Asha 1200
Ravi 950
Total: 2150.0` },
    { t: "note", k: "why", b: "In real projects you will usually load CSVs with pandas: `pd.read_csv(\"sales.csv\")`. It does all of this in one line. But it helps to know that underneath, a CSV is just text, and every value comes in as a string until something converts it." },
    { t: "h", text: "JSON files" },
    { t: "p", b: "==JSON== is the text format the web uses to send data. It looks almost exactly like Python dictionaries and lists. The `json` module converts between the two." },
    { t: "code", c: R`
import json

settings = {"name": "Asha", "scores": [82, 91], "member": True, "coupon": None}
with open("settings.json", "w") as f:
    json.dump(settings, f, indent=2)      # dict -> JSON file

with open("settings.json") as f:
    print(f.read())

with open("settings.json") as f:
    loaded = json.load(f)                 # JSON file -> dict
print(loaded["scores"][1])

text = json.dumps({"a": 1, "ok": False})  # dict -> JSON string
print(text)
print(json.loads(text)["a"])              # JSON string -> dict`, o: R`
{
  "name": "Asha",
  "scores": [
    82,
    91
  ],
  "member": true,
  "coupon": null
}
91
{"a": 1, "ok": false}
1` },
    { t: "note", k: "tip", b: "Notice how Python's `True` became `true` and `None` became `null`. That is JSON's spelling. The `s` in `dumps` and `loads` stands for **string**: those versions work with text in memory instead of a file." },
    { t: "h", text: "pickle: save any Python object" },
    { t: "p", b: "`pickle` saves a Python object to a **binary** file and loads it back exactly as it was. It works for dicts, lists and even objects of your own classes. Saving is called ==serialization==, loading is ==deserialization==. Pickle needs binary modes: `\"wb\"` and `\"rb\"`." },
    { t: "code", ttl: "Saving the course movie database", c: R`
import pickle

movie_db = {
    "Ramayan": {"price": 1000, "seats": 20},
    "Drishyam": {"price": 500, "seats": 40},
}

with open("movie_db.pkl", "wb") as f:
    pickle.dump(movie_db, f)          # save

with open("movie_db.pkl", "rb") as f:
    data = pickle.load(f)             # load

print(data)
print(type(data))
print(data["Drishyam"]["seats"])`, o: R`
{'Ramayan': {'price': 1000, 'seats': 20}, 'Drishyam': {'price': 500, 'seats': 40}}
<class 'dict'>
40` },
    { t: "note", k: "tip", b: "The course notebook saved its pickle into `movie_ticket_db.txt`. It works, because the extension is only a label, but if you open that file in Notepad you will see gibberish. Use `.pkl` so everyone knows it is a pickle." },
    { t: "note", k: "trap", h: "Never unpickle files you do not trust", b: "Loading a pickle can run code hidden inside it. Only load pickles you created yourself. For sharing data with others, use CSV or JSON." },
    { t: "table", head: ["Format", "Module", "Human readable?", "Best for"], rows: [
      ["Plain text", "built-in `open()`", "Yes", "Logs, notes, simple lists"],
      ["CSV", "`csv` (or pandas)", "Yes, opens in Excel", "Tables of data"],
      ["JSON", "`json`", "Yes", "Nested data, settings, web APIs"],
      ["Pickle", "`pickle`", "No (binary)", "Saving Python objects for your own later use"]
    ]},
    { t: "prac", items: [
      { q: "Save three to-do items to `todo.txt`, one per line, then read them back into a list without the `\\n`.", sol: R`
todos = ["Finish SQL module", "Practise slicing", "Revise dictionaries"]
with open("todo.txt", "w") as f:
    for t in todos:
        f.write(t + "\n")

with open("todo.txt") as f:
    loaded = [line.strip() for line in f]
print(loaded)`, out: R`['Finish SQL module', 'Practise slicing', 'Revise dictionaries']` },
      { q: "Count the lines and the words in a file that contains `\"the cat sat\\non the mat\\n\"`.", sol: R`
with open("story.txt", "w") as f:
    f.write("the cat sat\non the mat\n")

lines = 0
words = 0
with open("story.txt") as f:
    for line in f:
        lines += 1
        words += len(line.split())
print(lines, "lines,", words, "words")`, out: R`2 lines, 6 words` },
      { q: "Save `scores = {\"Asha\": 82, \"Ravi\": 67}` as JSON, load it back, add \"Neha\": 91, and save again. Print the final file contents.", sol: R`
import json
scores = {"Asha": 82, "Ravi": 67}
with open("scores.json", "w") as f:
    json.dump(scores, f)

with open("scores.json") as f:
    scores = json.load(f)
scores["Neha"] = 91
with open("scores.json", "w") as f:
    json.dump(scores, f)

with open("scores.json") as f:
    print(f.read())`, out: R`{"Asha": 82, "Ravi": 67, "Neha": 91}` },
      { q: "Course task: keep both the movie seats and a book count in one pickle file. Save a dict with two keys, `\"movies\"` and `\"books\"`, then load it and print the number of books.", sol: R`
import pickle
db = {
    "movies": {"Ramayan": {"price": 1000, "seats": 20}},
    "books": {"Python Basics": 5, "SQL Guide": 3},
}
with open("library.pkl", "wb") as f:
    pickle.dump(db, f)

with open("library.pkl", "rb") as f:
    db = pickle.load(f)
print(sum(db["books"].values()), "books in stock")`, out: R`8 books in stock` }
    ]}
  ],
  take: [
    "`open(name, mode)`: `r` read, `w` overwrite, `a` append, `x` create new. Add `b` for binary.",
    "`\"w\"` wipes the file the moment it opens. Use `\"a\"` to add.",
    "Use `with open(...) as f:` so the file always closes.",
    "`write()` needs a string and does not add `\\n`. Read lines with `for line in f:` and `.strip()`.",
    "CSV for tables, JSON for nested data, pickle (`wb`/`rb`) for Python objects you made yourself."
  ],
  quiz: [
    { q: "Which mode adds text to the end of a file without deleting what is there?", o: ["`\"r\"`", "`\"w\"`", "`\"a\"`", "`\"x\"`"], a: 2, e: "a means append." },
    { q: "What happens when you open an existing file with `\"w\"`?", o: ["It adds to the end", "Its old content is deleted", "FileExistsError", "Nothing until you call write()"], a: 1, e: "w mode empties the file as soon as it opens." },
    { q: "What does `f.readlines()` return?", o: ["One string", "A list of lines, each keeping its \\n", "The first line", "The number of lines"], a: 1, e: "readlines() gives a list with one string per line." },
    { q: "Why use `with open(...) as f:`?", o: ["It is faster", "It closes the file automatically, even after an error", "It is the only way to read", "It creates a backup"], a: 1, e: "The with block closes the file when it ends." },
    { q: "What does `f.write(2000)` do?", o: ["Writes 2000", "Writes \"2000\\n\"", "Raises TypeError", "Writes nothing"], a: 2, e: "write() only accepts strings. Use `f.write(str(2000))`." },
    { q: "Which modes does pickle need?", o: ["`\"r\"` and `\"w\"`", "`\"rb\"` and `\"wb\"`", "`\"a\"` and `\"x\"`", "Any mode"], a: 1, e: "Pickle stores binary data, so it needs binary modes." },
    { q: "What does `json.dumps({\"a\": True})` return?", o: ["A dict", "The string `{\"a\": true}`", "A file", "`{'a': True}`"], a: 1, chk: 0, e: "dumps converts to a JSON **string**. Note True becomes true." },
    { q: "Which mode fails if the file already exists?", o: ["`\"w\"`", "`\"a\"`", "`\"x\"`", "`\"r\"`"], a: 2, e: "x is for creating a brand-new file only." }
  ],
  cards: [
    ["The four main file modes", "`r` read, `w` write (wipes first), `a` append, `x` create (error if it exists). Add `b` for binary."],
    ["Safest way to open a file", "", R`
with open("data.txt", "r") as f:
    text = f.read()`],
    ["`read()` vs `readline()` vs `readlines()`", "Whole file as one string / next line / list of all lines."],
    ["Why use `.strip()` when reading lines?", "Each line ends with `\\n`. strip() removes it so you do not get blank lines or messy values."],
    ["What does `write()` need?", "A string. It does not add a newline, so add `\\n` yourself."],
    ["How do you check if a file exists and delete it?", "`os.path.exists(\"f.txt\")` and `os.remove(\"f.txt\")` (after `import os`)."],
    ["Save and load with pickle", "", R`
with open("d.pkl", "wb") as f:
    pickle.dump(obj, f)
with open("d.pkl", "rb") as f:
    obj = pickle.load(f)`],
    ["`json.dump` vs `json.dumps`", "`dump` writes to a file. `dumps` returns a string. Same for `load` / `loads`."],
    ["CSV vs JSON vs pickle", "CSV: tables. JSON: nested data, readable, shareable. Pickle: any Python object, binary, only for your own trusted files."]
  ],
  cheat: [
    ["with open(\"f.txt\") as f:\n    text = f.read()", "Read a whole file"],
    ["for line in f:\n    line = line.strip()", "Read line by line"],
    ["with open(\"f.txt\", \"w\") as f:\n    f.write(\"hi\\n\")", "Write (overwrite)"],
    ["open(\"f.txt\", \"a\")", "Append"],
    ["os.path.exists(p)  os.remove(p)", "Check / delete a file"],
    ["csv.DictReader(f)", "Read CSV rows as dicts"],
    ["json.dump(d, f)  json.load(f)", "Save / load JSON"],
    ["pickle.dump(obj, f)  pickle.load(f)", "Save / load any object (wb / rb)"]
  ]
});
})();
