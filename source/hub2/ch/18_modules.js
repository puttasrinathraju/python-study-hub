chapter({
  id: "modules", part: 5, title: "Modules and libraries", nav: "Modules & libraries", time: "55 min", lvl: "Intermediate",
  keys: "module library package import from as math random datetime strftime timedelta collections counter defaultdict statistics re regex regular expression pip install virtual environment venv __name__ main dir help time",
  lead: "Python comes with a huge toolbox, and thousands more tools can be installed in one line. Learn how to import them, and get to know the modules analysts use most.",
  goals: [
    "Tell modules, packages and libraries apart",
    "Use every style of `import`",
    "Use `math`, `random`, `datetime`, `statistics` and `collections`",
    "Find patterns in text with `re` (regular expressions)",
    "Install libraries with `pip`, and make your own module"
  ],
  src: ["PDF: Functions, File Handling and Essential Modules (modules, random, datetime, math, pickle)", "W3Schools: Modules, Dates, Math, JSON, RegEx, PIP, VirtualEnv"],
  body: [
    { t: "h", text: "Module, package, library" },
    { t: "p", b: "A ==module== is simply a `.py` file full of Python code (functions, variables, classes) that you can **import** and use. A ==package== is a folder of related modules. A ==library== is a collection of modules and packages for one purpose. People often use \"module\" and \"library\" loosely for the same thing, and that is fine." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 560 250" width="560" role="img" aria-label="A library contains packages, which contain modules, which contain functions">';
      s += '<rect x="10" y="10" width="540" height="230" rx="16" class="sv-soft"/><text x="28" y="38" class="sv-h">Library: NumPy, pandas, Python\'s standard library</text>';
      s += '<rect x="40" y="52" width="480" height="172" rx="14" class="sv-acc"/><text x="58" y="80" class="sv-h">Package: a folder of modules (numpy.random)</text>';
      s += '<rect x="70" y="94" width="420" height="114" rx="12" class="sv-tip"/><text x="88" y="122" class="sv-h">Module: one .py file (math.py, random.py)</text>';
      s += '<rect x="100" y="136" width="360" height="56" rx="10" class="sv-hl"/><text x="118" y="170" class="sv-t">Functions, variables, classes: sqrt(), pi</text>';
      return s + '</svg>';
    })(), cap: "Each box lives inside the one around it." },
    { t: "table", head: ["Kind", "Comes with Python?", "Examples"], rows: [
      ["**Standard library**", "Yes, nothing to install", "`math`, `random`, `datetime`, `os`, `csv`, `json`, `pickle`, `re`, `collections`, `statistics`, `time`"],
      ["**Third-party libraries**", "No, install with `pip`", "`numpy`, `pandas`, `matplotlib`, `seaborn`, `scikit-learn`, `requests`"]
    ]},
    { t: "mm", title: "A tour of useful modules", root: "Toolbox", kids: [
      { t: "Numbers", k: ["math: sqrt, ceil, pi", "random: randint, choice", "statistics: mean, median"] },
      { t: "Dates", k: ["datetime: now, strftime", "timedelta: add days", "time: sleep"] },
      { t: "Data files", k: ["csv", "json", "pickle", "os: paths, delete"] },
      { t: "Text", k: ["re: patterns", "string methods"] },
      { t: "Counting", k: ["collections.Counter", "defaultdict"] },
      { t: "Install more", k: ["pip install numpy", "pandas, matplotlib"] }
    ]},
    { t: "h", text: "Ways to import" },
    { t: "table", head: ["Style", "Example", "How you then call it"], rows: [
      ["Whole module", "`import math`", "`math.sqrt(25)`"],
      ["With a short name", "`import numpy as np`", "`np.array([1, 2])`"],
      ["Just what you need", "`from math import sqrt, pi`", "`sqrt(25)`"],
      ["Rename one item", "`from datetime import datetime as dt`", "`dt.now()`"],
      ["Everything (avoid)", "`from math import *`", "`sqrt(25)`, but names can clash"]
    ]},
    { t: "code", c: R`
import math
from math import sqrt, pi
import statistics as st

print(math.sqrt(16), sqrt(16))
print(round(pi, 3))
print(st.mean([2, 4, 6]))`, o: R`
4.0 4.0
3.142
4` },
    { t: "note", k: "tip", b: "Put all imports at the top of your notebook or file. Use the standard short names everyone uses: `import numpy as np`, `import pandas as pd`, `import matplotlib.pyplot as plt`. Other people will instantly recognise them." },
    { t: "h", text: "math" },
    { t: "code", ttl: "From the PDF, plus a few more", c: R`
import math

print(math.sqrt(25))      # square root (always a float)
print(math.pow(3, 2))     # power (always a float, unlike **)
print(math.floor(5.8))    # round down
print(math.ceil(5.2))     # round up
print(math.pi)
print(math.factorial(5))`, o: R`
5.0
9.0
5
6
3.141592653589793
120` },
    { t: "note", k: "tip", b: "`math.ceil` is perfect for \"how many do I need\" questions. 23 guests, 4 per table: `math.ceil(23 / 4)` is 6 tables. Plain division gives 5.75 and `//` gives 5, which leaves 3 guests standing." },
    { t: "h", text: "random" },
    { t: "code", nr: 1, ttl: "Your output will be different every time", c: R`
import random

print(random.randint(1, 10))                          # 1 to 10, BOTH included
print(random.choice(["apple", "banana", "cherry"]))   # pick one
print(random.random())                                # a float from 0 to 1
nums = [1, 2, 3, 4, 5]
random.shuffle(nums)                                  # shuffles in place
print(nums)
print(random.sample(range(1, 50), 6))                 # 6 different numbers`, o: R`
7
cherry
0.4386513940387066
[3, 5, 1, 2, 4]
[17, 3, 44, 29, 8, 36]` },
    { t: "note", k: "trap", h: "Trap! randint includes the end", b: "`random.randint(1, 10)` can return 10. But `range(1, 10)` stops at 9, and NumPy's `np.random.randint(1, 10)` also stops at 9. The standard-library `randint` is the odd one out." },
    { t: "code", ttl: "seed(): make random results repeatable", c: R`
import random
random.seed(42)
print(random.randint(1, 10))
random.seed(42)
print(random.randint(1, 10))     # same seed, same "random" result`, o: R`
2
2` },
    { t: "note", k: "why", b: "Analysts use `random.seed()` (and NumPy's version) so that a random sample or a train/test split is the same every time the notebook runs. Otherwise your numbers change on every run and nobody can check your work." },
    { t: "h", text: "datetime" },
    { t: "code", nr: 1, ttl: "Today and now (from the PDF)", c: R`
import datetime

today = datetime.date.today()
print("Today's date:", today)

current_time = datetime.datetime.now()
print("Current time:", current_time)`, o: R`
Today's date: 2026-10-25
Current time: 2026-10-25 14:30:12.481203` },
    { t: "code", ttl: "Making, formatting and doing maths with dates", c: R`
from datetime import datetime, date, timedelta

d = datetime(2026, 10, 25, 14, 30)
print(d)
print(d.strftime("%d/%m/%Y"))
print(d.strftime("%A, %d %B %Y %I:%M %p"))
print(d.year, d.month, d.weekday())         # Monday is 0, Sunday is 6

parsed = datetime.strptime("05-11-2026", "%d-%m-%Y")   # text -> datetime
print(parsed)

print(d + timedelta(days=10))               # 10 days later

checkin = date(2026, 12, 24)
checkout = date(2026, 12, 28)
print((checkout - checkin).days, "nights")`, o: R`
2026-10-25 14:30:00
25/10/2026
Sunday, 25 October 2026 02:30 PM
2026 10 6
2026-11-05 00:00:00
2026-11-04 14:30:00
4 nights` },
    { t: "table", head: ["Code", "Means", "Example"], rows: [
      ["`%d`", "Day, 2 digits", "25"], ["`%m`", "Month, 2 digits", "10"], ["`%Y`", "Year, 4 digits", "2026"], ["`%y`", "Year, 2 digits", "26"],
      ["`%B` / `%b`", "Month name / short", "October / Oct"], ["`%A` / `%a`", "Weekday / short", "Sunday / Sun"],
      ["`%H` / `%I`", "Hour 24h / 12h", "14 / 02"], ["`%M`", "Minute", "30"], ["`%S`", "Second", "00"], ["`%p`", "AM or PM", "PM"]
    ], cap: "strftime turns a date into text. strptime turns text into a date. Same codes for both." },
    { t: "note", k: "tip", b: "Memory trick: str**f**time = **f**ormat (date to text). str**p**time = **p**arse (text to date)." },
    { t: "h", text: "statistics and collections" },
    { t: "code", c: R`
import statistics as st
from collections import Counter, defaultdict

monthly_sales = [12000, 15000, 18000, 14000, 16000, 20000]
print(st.mean(monthly_sales))
print(st.median(monthly_sales))
print(round(st.stdev(monthly_sales), 2))
print(st.mode([3, 1, 3, 2, 3, 1]))

orders = ["tea", "coffee", "tea", "juice", "tea", "coffee"]
counts = Counter(orders)
print(counts)
print(counts.most_common(1))

by_city = defaultdict(list)          # missing keys start as an empty list
for name, city in [("Asha", "Pune"), ("Ravi", "Delhi"), ("Neha", "Pune")]:
    by_city[city].append(name)
print(dict(by_city))`, o: R`
15833.333333333334
15500.0
2857.74
3
Counter({'tea': 3, 'coffee': 2, 'juice': 1})
[('tea', 3)]
{'Pune': ['Asha', 'Neha'], 'Delhi': ['Ravi']}` },
    { t: "p", b: "`defaultdict(list)` removes the \"if the key is not there yet, create an empty list\" step from the grouping pattern in the Dictionaries chapter." },
    { t: "h", text: "re: finding patterns in text" },
    { t: "p", b: "A ==regular expression== (regex) is a mini-language for describing text patterns, like \"one or more digits\" or \"something that looks like an email\". The `re` module searches for them." },
    { t: "table", head: ["Pattern", "Matches"], rows: [
      ["`\\d`", "One digit 0 to 9"], ["`\\w`", "A letter, digit or underscore"], ["`\\s`", "A space, tab or new line"],
      ["`+`", "One or more of the thing before it"], ["`*`", "Zero or more"], ["`?`", "Zero or one (optional)"],
      ["`[A-Z]`", "One capital letter"], ["`[.,]`", "A dot or a comma"], ["`^` / `$`", "Start / end of the text"], ["`{3}`", "Exactly 3 of the thing before it"]
    ]},
    { t: "code", c: R`
import re

text = "Call 98765 43210 or 91234-56789. Email: asha@shop.in, ravi.k@mail.com"

print(re.findall(r"\d+", text))                  # every run of digits
print(re.findall(r"[\w.]+@[\w.]+", text))        # things that look like emails

m = re.search(r"\d{5}", text)                    # first match only
print(m.group())

print(re.sub(r"\d", "#", "PIN 4321"))            # replace every digit
print(re.split(r"[,;]\s*", "a, b;c ,d"))`, o: R`
['98765', '43210', '91234', '56789']
['asha@shop.in', 'ravi.k@mail.com']
98765
PIN ####
['a', 'b', 'c ', 'd']` },
    { t: "note", k: "tip", b: "Always write regex patterns as **raw strings** with `r\"...\"`, so backslashes like `\\d` reach the regex engine untouched. Regex is a deep topic. Learn the patterns above and look up the rest when you need it." },
    { t: "h", text: "Installing libraries with pip" },
    { t: "p", b: "`pip` is Python's package installer. It downloads libraries from the Python Package Index (PyPI)." },
    { t: "table", head: ["Where", "Command"], rows: [
      ["Terminal or Command Prompt", "`pip install numpy`"],
      ["Inside a Jupyter or Colab cell", "`%pip install numpy`"],
      ["See what is installed", "`pip list`"],
      ["Upgrade a library", "`pip install --upgrade pandas`"]
    ]},
    { t: "code", ttl: "If a library is missing (or misspelled)", c: R`import pandsa`, o: R`ModuleNotFoundError: No module named 'pandsa'`, err: true },
    { t: "note", k: "tip", h: "Virtual environments, in one paragraph", b: "Different projects can need different versions of the same library. A ==virtual environment== is a private folder of libraries for one project. Create it with `python -m venv myenv`. Switch it on with `myenv\\Scripts\\activate` on Windows. Then `pip install` only affects that project. Colab and Anaconda handle this for you, so you can skip it while learning." },
    { t: "h", text: "Making your own module" },
    { t: "p", b: "Save some functions in a `.py` file, put it in the same folder as your notebook, and import it by its file name (without `.py`)." },
    { t: "cmp", l: { h: "File: billing.py", c: R`
GST = 0.18

def add_gst(amount):
    return round(amount * (1 + GST), 2)

if __name__ == "__main__":
    # runs only when you run billing.py directly
    print(add_gst(100))` }, r: { h: "Your notebook", pre: R`
with open("billing.py", "w") as f:
    f.write("GST = 0.18\n\ndef add_gst(amount):\n    return round(amount * (1 + GST), 2)\n")`, c: R`
import billing

print(billing.add_gst(500))
print(billing.GST)`, o: R`
590.0
0.18` } },
    { t: "p", b: "`if __name__ == \"__main__\":` is a common guard. When Python **runs** a file directly, its `__name__` is `\"__main__\"`. When the file is **imported**, `__name__` is the module name, so the test code inside the guard does not run. The PDF's inventory program ends with this line." },
    { t: "code", ttl: "Exploring a module: dir() and help()", c: R`
import math
names = [n for n in dir(math) if not n.startswith("_")]
print(len(names) > 40)
print(names[:5])`, o: R`
True
['acos', 'acosh', 'asin', 'asinh', 'atan']` },
    { t: "pred", chk: 1, c: R`
import math
print(math.ceil(7 / 2), math.floor(7 / 2), round(7 / 2))`, o: ["`4 3 4`", "`4 3 3`", "`3 3 4`", "`4 4 4`"], a: 0, e: "7 / 2 is 3.5. ceil goes up to 4, floor goes down to 3, and round sends .5 to the even number, which is 4." },
    { t: "prac", items: [
      { q: "A hotel has rooms that sleep 3 people. How many rooms do 23 guests need?", sol: R`
import math
print(math.ceil(23 / 3))`, out: R`8` },
      { q: "A guest checks in on 28 December 2026 and stays 5 nights. Print the checkout date as `Saturday, 02 January 2027`.", sol: R`
from datetime import date, timedelta
checkin = date(2026, 12, 28)
checkout = checkin + timedelta(days=5)
print(checkout.strftime("%A, %d %B %Y"))`, out: R`Saturday, 02 January 2027` },
      { q: "Find the 2 most common words in `\"red blue red green blue red\"` using Counter.", sol: R`
from collections import Counter
words = "red blue red green blue red".split()
print(Counter(words).most_common(2))`, out: R`[('red', 3), ('blue', 2)]` },
      { q: "Pull every amount out of `\"Paid 450 on Mon, 1200 on Tue and 75 on Wed\"` and add them up.", hint: "`re.findall(r\"\\d+\", text)` gives strings. Convert them.", sol: R`
import re
text = "Paid 450 on Mon, 1200 on Tue and 75 on Wed"
amounts = [int(x) for x in re.findall(r"\d+", text)]
print(amounts, sum(amounts))`, out: R`[450, 1200, 75] 1725` },
      { q: "Pick 3 lucky winners from a list of 10 customer IDs (C1 to C10), with a seed of 7 so the draw can be repeated. Print the winners.", sol: R`
import random
customers = [f"C{i}" for i in range(1, 11)]
random.seed(7)
print(random.sample(customers, 3))`, out: R`['C6', 'C3', 'C7']` }
    ]}
  ],
  take: [
    "A module is a .py file. A package is a folder of modules. A library is a collection for one purpose.",
    "`import math`, `import numpy as np`, `from math import sqrt`. Avoid `import *`.",
    "`random.randint(a, b)` includes b. Use `random.seed()` for repeatable results.",
    "`datetime`: `strftime` formats a date as text, `strptime` parses text into a date, `timedelta` adds days.",
    "`Counter` counts, `statistics` gives mean/median/stdev, `re` finds patterns.",
    "Install with `pip install name` (or `%pip install` in a notebook)."
  ],
  quiz: [
    { q: "Which import lets you write `sqrt(25)` directly?", o: ["`import math`", "`from math import sqrt`", "`import sqrt`", "`include math`"], a: 1, e: "from ... import brings the name directly into your code." },
    { q: "What does this print?", c: R`
import math
print(math.ceil(4.1))`, o: ["`4`", "`5`", "`4.1`", "`4.0`"], a: 1, chk: 1, e: "ceil always rounds up." },
    { q: "Can `random.randint(1, 6)` return 6?", o: ["Yes, both ends are included", "No, it stops at 5", "Only with a seed", "Only once"], a: 0, e: "The standard-library randint includes both ends, unlike range()." },
    { q: "What does `random.seed(42)` do?", o: ["Makes numbers truly random", "Makes the sequence of random numbers repeatable", "Picks the number 42", "Deletes old random numbers"], a: 1, e: "The same seed always produces the same sequence." },
    { q: "What does this print?", c: R`
from datetime import date
print(date(2026, 1, 15).strftime("%d %b %Y"))`, o: ["`15 Jan 2026`", "`2026-01-15`", "`15/01/2026`", "`Jan 15 2026`"], a: 0, chk: 1, e: "%d is the day, %b the short month name, %Y the 4-digit year." },
    { q: "Which converts the text \"2026-11-05\" into a datetime?", o: ["`strftime`", "`strptime`", "`timedelta`", "`date.today`"], a: 1, e: "strptime parses text into a date. strftime formats a date as text." },
    { q: "What does this print?", c: R`
import re
print(re.findall(r"\d+", "Room 101, floor 3"))`, o: ["`[101, 3]`", "`['101', '3']`", "`['1', '0', '1', '3']`", "`101`"], a: 1, chk: 1, e: "findall returns a list of strings, one per match of \"one or more digits\"." },
    { q: "How do you install pandas from inside a Jupyter cell?", o: ["`import pandas --install`", "`%pip install pandas`", "`install(pandas)`", "`pandas.install()`"], a: 1, e: "Use %pip (or !pip) at the start of a cell." }
  ],
  cards: [
    ["Module vs package vs library", "Module: one .py file. Package: a folder of modules. Library: a collection of modules/packages for one purpose."],
    ["Four ways to import", "`import math`, `import numpy as np`, `from math import sqrt`, `from math import *` (avoid the last one)."],
    ["`math.floor` vs `math.ceil`", "floor rounds down (5.8 to 5). ceil rounds up (5.2 to 6)."],
    ["Does `random.randint(1, 10)` include 10?", "Yes. Both ends are included (unlike `range` and NumPy's randint)."],
    ["Why use `random.seed()`?", "To make random results repeatable, so your analysis gives the same numbers on every run."],
    ["strftime vs strptime", "str**f**time **f**ormats a date into text. str**p**time **p**arses text into a date."],
    ["How do you add 10 days to a date?", "`d + timedelta(days=10)` (from datetime import timedelta)."],
    ["How do you count items quickly?", "`Counter(items)` from collections. `.most_common(3)` gives the top 3."],
    ["What does `re.findall(r\"\\d+\", text)` return?", "A list of every run of digits in the text, as strings."],
    ["What does `if __name__ == \"__main__\":` do?", "Runs the code below it only when the file is run directly, not when it is imported."],
    ["How do you install a library?", "`pip install numpy` in a terminal, or `%pip install numpy` in a notebook cell."]
  ],
  cheat: [
    ["import numpy as np", "Import with a short name"],
    ["from math import sqrt, pi", "Import specific names"],
    ["math.sqrt  math.ceil  math.floor", "Root, round up, round down"],
    ["random.randint(1, 6)  random.choice(lst)", "Random int (both ends) / random item"],
    ["random.seed(42)", "Repeatable randomness"],
    ["datetime.now()  date.today()", "Current date and time"],
    ["d.strftime(\"%d/%m/%Y\")", "Date to text"],
    ["datetime.strptime(s, \"%d-%m-%Y\")", "Text to date"],
    ["d + timedelta(days=7)", "Date maths"],
    ["Counter(lst).most_common(3)", "Top 3 most frequent"],
    ["statistics.mean / median / stdev", "Basic statistics"],
    ["re.findall(r\"\\d+\", s)", "All numbers in a string"],
    ["%pip install pandas", "Install inside a notebook"]
  ]
});
