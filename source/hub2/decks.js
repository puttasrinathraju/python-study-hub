/* ---------- Extra slide decks, inserted into chapters ---------- */
(function(){
  function addDeck(id, beforeHeading, deck){
    var ch = CHAPTERS.filter(function(c){ return c.id === id; })[0];
    var i = ch.body.findIndex(function(b){ return b.t === 'h' && b.text === beforeHeading; });
    if (i < 0) throw new Error('heading not found: ' + id + ' / ' + beforeHeading);
    ch.body.splice(i, 0, Object.assign({ t: 'deck' }, deck));
  }

  addDeck("variables", "Dynamic typing", { title: "Variables in 6 slides", s: [
    { big: "A variable is a name pointing at a value.", b: "Create it once with `=`, then use the name anywhere below." },
    { h: "Create, then reuse", c: R`
price = 250
qty = 4
total = price * qty
print(total)`, o: R`1000` },
    { h: "Change it any time", b: "The right side is worked out first, then stored back in the name.", c: R`
score = 10
score = score + 5
print(score)`, o: R`15` },
    { h: "Every value has a type", c: R`print(type(250), type(2.5), type("250"), type(True))`, o: R`<class 'int'> <class 'float'> <class 'str'> <class 'bool'>` },
    { h: "Text that looks like a number is still text", c: R`
a = "250"
print(a + "4")
print(int(a) + 4)`, o: R`
2504
254` },
    { h: "Convert with the type's name", items: ["`int(\"25\")` text to whole number", "`float(\"2.5\")` text to decimal", "`str(100)` number to text", "`bool(0)` zero and empty values become False"] }
  ]});

  addDeck("output", "f-strings: the best way to format", { title: "Three ways to build a sentence", s: [
    { big: "Same sentence, three ways. Only one is easy to read.", b: "We want: `Name: Asha, Age: 25`" },
    { h: "1. Commas in print()", b: "Easy, but print adds a space between every item, so you get a space before the comma.", c: R`
name = "Asha"
age = 25
print("Name:", name, ", Age:", age)`, o: R`Name: Asha , Age: 25` },
    { h: "2. Joining with +", b: "Exact control, but every number needs `str()`, and it gets messy fast.", c: R`
name = "Asha"
age = 25
print("Name: " + name + ", Age: " + str(age))`, o: R`Name: Asha, Age: 25` },
    { h: "3. f-string (use this one)", b: "Exact, readable, and no `str()` needed.", c: R`
name = "Asha"
age = 25
print(f"Name: {name}, Age: {age}")`, o: R`Name: Asha, Age: 25` },
    { h: "Bonus: format numbers inside the slot", c: R`
price = 1234.5
print(f"Price: {price:,.2f}")`, o: R`Price: 1,234.50` }
  ]});

  addDeck("conditions", "Truthy and falsy values", { title: "Writing good conditions", s: [
    { big: "Every if asks a True or False question.", b: "These five habits keep those questions correct." },
    { h: "Compare with ==, not =", c: R`
x = 5
print(x == 5, x != 5)`, o: R`True False` },
    { h: "Combine with and / or", c: R`
age = 25
has_id = True
print(age >= 18 and has_id)`, o: R`True` },
    { h: "Ranges read naturally", c: R`
temp = 28
print(20 <= temp <= 30)`, o: R`True` },
    { h: "Check a list of options with in", c: R`
day = "Sun"
print(day in ("Sat", "Sun"))`, o: R`True` },
    { h: "Test every branch", b: "Try one value for each path: one that hits the `if`, one for each `elif`, and one that falls through to `else`. Bugs hide in the branch you never ran." }
  ]});

  addDeck("whileloops", "while-else", { title: "break, continue and pass", s: [
    { big: "Three small words that steer any loop." },
    { h: "break: stop the loop now", c: R`
for n in [3, 8, 12, 5]:
    if n > 10:
        print("found", n)
        break`, o: R`found 12` },
    { h: "continue: skip this round only", c: R`
for n in range(1, 6):
    if n == 3:
        continue
    print(n, end=" ")`, o: R`1 2 4 5` },
    { h: "pass: do nothing (yet)", c: R`
for n in range(3):
    pass          # fill this in later
print("loop done")`, o: R`loop done` },
    { h: "Nested loops: break leaves one level", c: R`
for i in range(1, 3):
    for j in range(1, 4):
        if j == 2:
            break
        print(i, j)`, o: R`
1 1
2 1` },
    { h: "Rule of thumb", items: ["Found what you need? `break`", "This item is bad but others may be fine? `continue`", "Python needs a line here but you have nothing yet? `pass`"] }
  ]});

  addDeck("tuples", "Why use a tuple?", { title: "Tuples in 5 slides", s: [
    { big: "A tuple is a list that promises never to change." },
    { h: "Create and read", c: R`
point = (17.38, 78.48)
print(point[0], len(point))`, o: R`17.38 2` },
    { h: "Unpack into names", c: R`
point = (17.38, 78.48)
lat, lon = point
print(f"lat={lat} lon={lon}")`, o: R`lat=17.38 lon=78.48` },
    { h: "Return several values", c: R`
def stats(nums):
    return min(nums), max(nums)

lo, hi = stats([4, 9, 1])
print(lo, hi)`, o: R`1 9` },
    { h: "Use as a dictionary key", c: R`
distance = {("Delhi", "Agra"): 233}
print(distance[("Delhi", "Agra")])`, o: R`233` }
  ]});

  addDeck("sets", "Real-world uses", { title: "Sets for analysts", s: [
    { big: "Sets answer \"who\" and \"how many unique\"." },
    { h: "Count unique values", c: R`
visits = ["Asha", "Ravi", "Asha", "Neha", "Ravi"]
print(len(set(visits)))`, o: R`3` },
    { h: "Fast yes/no checks", c: R`
blocked = {"spam@x.com", "bot@y.com"}
print("bot@y.com" in blocked)`, o: R`True` },
    { h: "Compare two groups", c: R`
menu_a = {"tea", "coffee", "juice"}
menu_b = {"coffee", "lassi"}
print(sorted(menu_a & menu_b), sorted(menu_a - menu_b))`, o: R`['coffee'] ['juice', 'tea']` },
    { h: "Remember", items: ["No order and no index", "`{}` is a dict, use `set()`", "`discard()` is the safe way to remove", "Wrap in `sorted()` when you need a fixed order"] }
  ]});

  addDeck("functions2", "The mutable default argument trap", { title: "Scope in 5 slides", s: [
    { big: "Where a variable is created decides where it can be seen." },
    { h: "Local variables stay inside", c: R`
def f():
    local_var = 5

f()
print(local_var)`, o: R`NameError: name 'local_var' is not defined`, err: true },
    { h: "Globals can be read inside", c: R`
rate = 0.18

def tax(x):
    return x * rate

print(tax(100))`, o: R`18.0` },
    { h: "Assigning inside makes a new local", c: R`
count = 0

def reset():
    count = 5      # a new local count

reset()
print(count)`, o: R`0` },
    { h: "Best habit: pass in, return out", c: R`
def add_bonus(score, bonus):
    return score + bonus

s = 70
s = add_bonus(s, 5)
print(s)`, o: R`75` }
  ]});

  addDeck("files", "Paths, and checking or deleting files", { title: "Working with a text file", s: [
    { big: "Open, read or write, close. with does the closing for you." },
    { h: "Write a file", c: R`
with open("notes.txt", "w") as f:
    f.write("Asha,82\nRavi,67\n")
print("saved")`, o: R`saved` },
    { h: "Read it back", c: R`
with open("notes.txt", "w") as f:
    f.write("Asha,82\nRavi,67\n")
with open("notes.txt") as f:
    print(f.read())`, o: R`
Asha,82
Ravi,67` },
    { h: "Add a line", c: R`
with open("notes.txt", "w") as f:
    f.write("Asha,82\nRavi,67\n")
with open("notes.txt", "a") as f:
    f.write("Neha,91\n")
with open("notes.txt") as f:
    print(len(f.readlines()), "lines")`, o: R`3 lines` },
    { h: "Turn lines into data", c: R`
with open("notes.txt", "w") as f:
    f.write("Asha,82\nRavi,67\n")
marks = {}
with open("notes.txt") as f:
    for line in f:
        name, mark = line.strip().split(",")
        marks[name] = int(mark)
print(marks)`, o: R`{'Asha': 82, 'Ravi': 67}` }
  ]});

  addDeck("modules", "math", { title: "Importing in 5 slides", s: [
    { big: "Don't write it yourself. Import it." },
    { h: "Import a whole module", c: R`
import math
print(math.floor(4.7))`, o: R`4` },
    { h: "Give it a short name", c: R`
import statistics as st
print(st.median([3, 1, 2]))`, o: R`2` },
    { h: "Import only what you need", c: R`
from math import pi, sqrt
print(round(pi, 2), sqrt(81))`, o: R`3.14 9.0` },
    { h: "Install new libraries", b: "Libraries like pandas are not built in. Install once, then import:", c: R`
%pip install pandas
import pandas as pd` }
  ]});

  addDeck("numpy1", "Ways to create arrays", { title: "From list to array", s: [
    { big: "An array is a list built for maths." },
    { h: "Make one", c: R`
import numpy as np
a = np.array([10, 20, 30])
print(a, type(a))`, o: R`[10 20 30] <class 'numpy.ndarray'>` },
    { h: "Maths on every item at once", c: R`
import numpy as np
a = np.array([10, 20, 30])
print(a * 2, a + 1)`, o: R`[20 40 60] [11 21 31]` },
    { h: "shape tells you the size", c: R`
import numpy as np
m = np.array([[1, 2], [3, 4], [5, 6]])
print(m.shape)`, o: R`(3, 2)` },
    { h: "One type for everything", c: R`
import numpy as np
print(np.array([1, 2, 3.5]).dtype)`, o: R`float64` }
  ]});
})();
