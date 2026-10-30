# Quick fill-in-the-blank exercises: 5 per chapter. ___ marks a blank; every answer (and every accepted alternative) is run in real Python.
import json, subprocess, sys, tempfile, itertools, os
NP = 'import numpy as np\n'
X = {
"intro": [
 ("Show the text Hello, World! on the screen.", 'B("Hello, World!")', ["print"], "`print()` shows whatever you put inside the brackets."),
 ("Turn the second line into a comment, so Python skips it.", 'print("This runs")\nB print("This is skipped")', ["#"], "Python ignores everything after `#` on a line."),
 ("Print the answer to 15 times 4.", 'print(15 B 4)', ["*"], "`*` multiplies. Python works out the answer first, then prints it."),
 ("Insert the keyword that runs the indented line only when 5 is bigger than 2.", 'B 5 > 2:\n    print("Five is bigger than two")', ["if"], "The indented line belongs to the `if`. Python uses indentation, not brackets, to group lines."),
 ("Print Total: 250 by giving print() two values.", 'print("Total:"B 250)', [","], "A comma separates the values, and print() puts one space between them."),
],
"variables": [
 ("Create a variable called city that holds Pune.", 'B = "Pune"\nprint(city)', ["city"], "The name goes on the left of `=` and the value on the right."),
 ("Assign 10, 20 and 30 to x, y and z in one line.", 'x, y, z = B\nprint(y)', [["10, 20, 30", "(10, 20, 30)", "[10, 20, 30]"]], "Python matches the values to the names in order, so y gets 20."),
 ("Print the data type of price.", 'price = 99.5\nprint(B(price))', ["type"], "`type()` tells you the type. A number with a decimal point is a `float`."),
 ("Convert the text \"42\" to a whole number so the sum works.", 'age = B("42")\nprint(age + 8)', ["int"], "`int()` turns text made of digits into a whole number."),
 ("Store the boolean value for 'yes' in is_open.", 'is_open = B\nprint(is_open, type(is_open))', ["True"], "Booleans are `True` and `False`, with a capital first letter and no quotes."),
],
"output": [
 ("Print the three letters with a dash between them: a-b-c", 'print("a", "b", "c", B="-")', ["sep"], "`sep` sets what goes between the values. The default is one space."),
 ("Keep both texts on one line: Loading...done", 'print("Loading", B="...")\nprint("done")', ["end"], "`end` replaces the new line that print() normally adds at the end."),
 ("Make this an f-string so the values fill the slots.", 'name = "Asha"\nage = 25\nprint(B"{name} is {age} years old")', ["f"], "An `f` before the quotes turns `{name}` into the value of name."),
 ("Show the price with exactly 2 decimal places.", 'price = 1234.5\nprint(f"{price:B}")', [".2f"], "`.2f` means a decimal number with 2 digits after the point."),
 ("Put Hello and World on two lines with an escape character.", 'print("HelloBWorld")', ["\\n"], "`\\n` inside a string means 'new line'."),
],
"operators": [
 ("Get the remainder when 17 is divided by 5.", 'print(17 B 5)', ["%"], "`%` (modulus) gives the remainder: 17 is 3 fives and 2 left over."),
 ("Get how many full hours are in 135 minutes.", 'print(135 B 60)', ["//"], "`//` is floor division: it keeps only the whole part."),
 ("Check that x is not equal to 10.", 'x = 7\nprint(x B 10)', ["!="], "`!=` means 'not equal'. `=` alone assigns, `==` compares."),
 ("Check whether \"a\" is inside the word \"data\".", 'print("a" B "data")', ["in"], "`in` checks membership in strings, lists, sets and dictionaries."),
 ("Add 500 to total with the short assignment operator.", 'total = 1000\ntotal B 500\nprint(total)', ["+="], "`total += 500` is short for `total = total + 500`."),
],
"conditions": [
 ("Print Adult when age is 18 or more.", 'age = 20\nB age >= 18:\n    print("Adult")', ["if"], "`if` runs the indented block only when the condition is True."),
 ("Insert the keyword for the second check.", 'score = 65\nif score >= 80:\n    print("A")\nB score >= 60:\n    print("B")\nelse:\n    print("C")', ["elif"], "`elif` is checked only when the conditions above it were False."),
 ("Print Weekend when the day is Saturday or Sunday.", 'day = "Sunday"\nif day == "Saturday" B day == "Sunday":\n    print("Weekend")', ["or"], "`or` is True when at least one side is True."),
 ("Finish the one-line if-else (ternary).", 'marks = 45\nstatus = "Pass" B marks >= 40 B "Fail"\nprint(status)', ["if", "else"], "The pattern is `value_if_true if condition else value_if_false`."),
 ("Keep the empty block valid with a placeholder.", 'stock = 0\nif stock > 0:\n    B\nelse:\n    print("Sold out")', ["pass"], "A block cannot be empty. `pass` does nothing and keeps the code valid."),
],
"forloops": [
 ("Loop over the list and print each city.", 'for city B ["Pune", "Goa", "Delhi"]:\n    print(city)', ["in"], "`for item in collection:` visits every item in order."),
 ("Print the numbers 1 to 5.", 'for n in range(1, B):\n    print(n)', ["6"], "The stop number is never included, so you need 6 to reach 5."),
 ("Get the position and the item together, starting from 1.", 'for i, name in B(["Asha", "Ravi"], start=1):\n    print(i, name)', ["enumerate"], "`enumerate()` gives (position, item) pairs."),
 ("Walk through two lists side by side.", 'names = ["Asha", "Ravi"]\nmarks = [82, 67]\nfor name, mark in B(names, marks):\n    print(name, mark)', ["zip"], "`zip()` pairs the first items, then the second items, and so on."),
 ("Add up all the prices.", 'total = 0\nfor p in [120, 80, 50]:\n    total B p\nprint(total)', ["+="], "Start at 0 and add each value: the accumulator pattern."),
],
"whileloops": [
 ("Keep looping while n is bigger than 0.", 'n = 3\nB n > 0:\n    print(n)\n    n -= 1', ["while"], "`while` repeats as long as its condition stays True."),
 ("Stop the loop when n reaches 4.", 'n = 1\nwhile True:\n    if n == 4:\n        B\n    print(n)\n    n += 1', ["break"], "`break` leaves the loop at once. It is the way out of `while True`."),
 ("Skip 3 but keep looping.", 'n = 0\nwhile n < 5:\n    n += 1\n    if n == 3:\n        B\n    print(n)', ["continue"], "`continue` jumps straight to the next turn of the loop."),
 ("Increase count by 1 each time, so the loop can end.", 'count = 0\nwhile count < 3:\n    print("Hi")\n    count B 1', ["+="], "Without changing count, the condition never becomes False: an endless loop."),
 ("Print No break when the loop ends without break.", 'n = 0\nwhile n < 2:\n    n += 1\nB:\n    print("No break")', ["else"], "A loop's `else` runs only when the loop finished without `break`."),
],
"strings": [
 ("Get the first character.", 'word = "Python"\nprint(word[B])', ["0"], "Counting starts at 0, so the first character is at index 0."),
 ("Get the last character with a negative index.", 'word = "Python"\nprint(word[B])', ["-1"], "Negative indexes count from the end: -1 is the last character."),
 ("Slice out yth from Python.", 'word = "Python"\nprint(word[1:B])', ["4"], "A slice stops before the stop index, so 1:4 gives indexes 1, 2 and 3."),
 ("Remove the spaces at both ends.", 'name = "  Asha  "\nprint("[" + name.B() + "]")', ["strip"], "`strip()` removes spaces from both ends. `lstrip()` and `rstrip()` do one side."),
 ("Split the text into a list at each comma.", 'row = "Asha,82,Pune"\nprint(row.B(","))', ["split"], "`split(\",\")` cuts the text at every comma and gives a list."),
],
"lists": [
 ("Add Goa to the end of the list.", 'cities = ["Pune", "Delhi"]\ncities.B("Goa")\nprint(cities)', ["append"], "`append()` adds one item at the end."),
 ("Insert Mumbai at position 0.", 'cities = ["Pune", "Delhi"]\ncities.B(0, "Mumbai")\nprint(cities)', ["insert"], "`insert(position, item)` puts the item at that position."),
 ("Remove the last item and keep it.", 'stack = [1, 2, 3]\nlast = stack.B()\nprint(last, stack)', ["pop"], "`pop()` removes the last item and gives it back."),
 ("Get a new sorted list and keep the original as it is.", 'marks = [70, 45, 90]\nprint(B(marks), marks)', ["sorted"], "`sorted()` makes a new list. `marks.sort()` would change marks itself."),
 ("Make a real copy, so changing b does not change a.", 'a = [1, 2, 3]\nb = a.B()\nb.append(4)\nprint(a, b)', ["copy"], "`b = a` would make two names for one list. `copy()` makes a separate list."),
],
"tuples": [
 ("Make a tuple with one item. Watch the comma!", 't = ("Pune"B)\nprint(type(t))', [","], "Without the comma, the brackets are just grouping and t is a string."),
 ("Count how many times 2 appears.", 't = (1, 2, 2, 3, 2)\nprint(t.B(2))', ["count"], "Tuples have only two methods: `count()` and `index()`."),
 ("Find the position of Goa.", 't = ("Pune", "Goa", "Delhi")\nprint(t.B("Goa"))', ["index"], "`index()` gives the position of the first match."),
 ("Unpack the tuple into three names.", 'point = (4, 7, 2)\nx, y, B = point\nprint(x, y, z)', ["z"], "Unpacking needs one name for each item."),
 ("Change a tuple: convert it to a list first.", 't = (1, 2, 3)\nitems = B(t)\nitems[0] = 99\nt = tuple(items)\nprint(t)', ["list"], "Tuples cannot change, so convert to a list, change it, and convert back."),
],
"sets": [
 ("Add mango to the set.", 'fruits = {"apple", "kiwi"}\nfruits.B("mango")\nprint(len(fruits))', ["add"], "Sets use `add()`, not `append()`."),
 ("Remove the duplicates by making a set.", 'ids = [3, 1, 3, 2, 1]\nprint(sorted(B(ids)))', ["set"], "A set keeps only unique items. `sorted()` puts them in order."),
 ("Get the items that are in both sets.", 'a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a B b)', ["&"], "`&` is intersection: items in both. `|` is union, `-` is difference."),
 ("Remove items without an error, even when one is missing.", 'fruits = {"apple", "kiwi"}\nfruits.B("kiwi")\nfruits.B("grape")\nprint(fruits)', ["discard", "discard"], "`discard()` does nothing if the item is missing. `remove()` would raise KeyError."),
 ("Check that every item of a is also in b.", 'a = {1, 2}\nb = {1, 2, 3}\nprint(a.B(b))', ["issubset"], "a is a subset of b when all of a's items are in b. `a <= b` does the same."),
],
"dicts": [
 ("Print the value for the key city.", 'person = {"name": "Asha", "city": "Pune"}\nprint(person[B])', ['"city"'], "Put the key in square brackets, with quotes because it is a string."),
 ("Get the age safely: 0 if the key is missing.", 'person = {"name": "Asha"}\nprint(person.B("age", 0))', ["get"], "`get(key, default)` never raises KeyError."),
 ("Add the key nights with the value 3.", 'booking = {"id": "B1001"}\nbooking[B] = 3\nprint(booking)', ['"nights"'], "Assigning to a new key adds it. Assigning to an old key updates it."),
 ("Loop over the keys and values together.", 'stock = {"tea": 20, "coffee": 45}\nfor k, v in stock.B():\n    print(k, v)', ["items"], "`items()` gives (key, value) pairs."),
 ("Count each room type.", 'rooms = ["Deluxe", "Suite", "Deluxe"]\ncounts = {}\nfor r in rooms:\n    counts[r] = counts.get(r, B) + 1\nprint(counts)', ["0"], "A new key starts at 0, then every visit adds 1: the counting pattern."),
],
"comprehensions": [
 ("Make the squares of 1 to 5 in one line.", 'squares = [n B 2 for n in range(1, 6)]\nprint(squares)', ["**"], "`**` is the power operator. The expression comes first, then the loop."),
 ("Keep only the marks of 40 or more.", 'marks = [35, 80, 55, 20]\npassed = [m for m in marks B m >= 40]\nprint(passed)', ["if"], "A filter `if` goes at the end of the comprehension."),
 ("Label every mark with a ternary.", 'marks = [35, 80]\nprint(["Pass" if m >= 40 B "Fail" for m in marks])', ["else"], "An `if ... else` that transforms each item goes at the front."),
 ("Build a dictionary of names and their lengths.", 'names = ["Asha", "Ravi"]\nprint({nB len(n) for n in names})', [":"], "A dict comprehension writes `key: value` before the loop."),
 ("Add up the prices with a generator expression.", 'print(B(p for p in [120, 80, 50]))', ["sum"], "A generator expression in round brackets feeds values one at a time, here into `sum()`."),
],
"functions": [
 ("Define a function called greet.", 'B greet():\n    print("Hello!")\ngreet()', ["def"], "`def name():` defines a function. Calling it with `greet()` runs it."),
 ("Send the result back from the function.", 'def add(a, b):\n    B a + b\nprint(add(5, 7))', ["return"], "`return` sends a value back to where the function was called."),
 ("Give name the default value Guest.", 'def welcome(nameB"Guest"):\n    print("Welcome,", name)\nwelcome()', ["="], "`name=\"Guest\"` is used when no argument is given."),
 ("Pass w by keyword.", 'def area(w, h):\n    return w * h\nprint(area(h=3, B=4))', ["w"], "Keyword arguments use the parameter's name, so their order does not matter."),
 ("Return the smallest and the largest value.", 'def min_max(nums):\n    return min(nums), B(nums)\nlo, hi = min_max([4, 9, 1])\nprint(lo, hi)', ["max"], "Returning two values gives back a tuple, which you can unpack."),
],
"functions2": [
 ("Accept any number of positional arguments.", 'def total(Bnums):\n    return sum(nums)\nprint(total(1, 2, 3))', ["*"], "`*nums` collects the arguments into a tuple."),
 ("Accept any number of keyword arguments.", 'def show(Binfo):\n    print(info)\nshow(name="Asha", city="Pune")', ["**"], "`**info` collects keyword arguments into a dictionary."),
 ("Write a lambda that doubles x.", 'double = B x: x * 2\nprint(double(8))', ["lambda"], "`lambda x: x * 2` is a tiny function without a name."),
 ("Sort the names by their length.", 'names = ["Ravi", "Al", "Asha K"]\nprint(sorted(names, B=lambda n: len(n)))', ["key"], "`key` tells `sorted()` what to compare. `key=len` works too."),
 ("Give back values one at a time (a generator).", 'def countdown(n):\n    while n > 0:\n        B n\n        n -= 1\nprint(list(countdown(3)))', ["yield"], "`yield` pauses the function and hands out one value each time."),
],
"errors": [
 ("Catch the error so the program does not crash.", 'B:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")', ["try"], "Code that might fail goes inside `try:`."),
 ("Name the error that int(\"abc\") raises.", 'try:\n    int("abc")\nexcept B:\n    print("Not a number")', ["ValueError"], "The type is right (text), but the value cannot become a number: ValueError."),
 ("Add the block that always runs.", 'try:\n    x = int("5")\nexcept ValueError:\n    print("bad")\nB:\n    print("done")', ["finally"], "`finally` runs whether there was an error or not."),
 ("Raise your own error when nights is negative.", 'nights = -1\ntry:\n    if nights < 0:\n        B ValueError("nights cannot be negative")\nexcept ValueError as e:\n    print(e)', ["raise"], "`raise` creates an error on purpose, with your own message."),
 ("Store the error as e to print its message.", 'try:\n    [1, 2][5]\nexcept IndexError B e:\n    print(e)', ["as"], "`except SomeError as e:` gives you the error object, and printing it shows the message."),
],
"files": [
 ("Open the file for writing.", 'with open("notes.txt", B) as f:\n    f.write("Hello")\nwith open("notes.txt") as f:\n    print(f.read())', ['"w"'], "Mode `\"w\"` writes, and replaces the file if it exists."),
 ("Add a line at the end without deleting what is there.", 'with open("log.txt", "w") as f:\n    f.write("one\\n")\nwith open("log.txt", B) as f:\n    f.write("two\\n")\nwith open("log.txt") as f:\n    print(f.read().splitlines())', ['"a"'], "Mode `\"a\"` (append) adds to the end and keeps the old text."),
 ("Use the keyword that closes the file for you.", 'B open("notes.txt", "w") as f:\n    f.write("saved")\nprint(f.closed)', ["with"], "`with` closes the file at the end of the block, even after an error."),
 ("Read all the lines into a list.", 'with open("notes.txt", "w") as f:\n    f.write("a\\nb\\n")\nwith open("notes.txt") as f:\n    print(f.B())', ["readlines"], "`readlines()` gives a list with one string per line, each ending in `\\n`."),
 ("Read the CSV rows as dictionaries.", 'import csv\nwith open("people.csv", "w", newline="") as f:\n    f.write("name,city\\nAsha,Pune\\n")\nwith open("people.csv") as f:\n    for row in csv.B(f):\n        print(row["name"], row["city"])', ["DictReader"], "`csv.DictReader` uses the first line as keys, so you can write `row[\"name\"]`."),
],
"modules": [
 ("Import the math module.", 'B math\nprint(math.sqrt(64))', ["import"], "`import math` loads the module. Then use `math.` before its functions."),
 ("Import only sqrt from math.", 'B math import sqrt\nprint(sqrt(81))', ["from"], "`from module import name` lets you use the name without `math.` in front."),
 ("Give the module a short name.", 'import statistics B st\nprint(st.mean([2, 4, 6]))', ["as"], "`as` gives a module a nickname, like `import numpy as np`."),
 ("Round 4.2 up to the next whole number.", 'import math\nprint(math.B(4.2))', ["ceil"], "`ceil` rounds up and `floor` rounds down."),
 ("Count how often each item appears.", 'from collections import B\nprint(Counter(["a", "b", "a"]))', ["Counter"], "`Counter` counts items for you, like a dictionary of counts."),
],
"oop": [
 ("Create a class called Guest.", 'B Guest:\n    pass\ng = Guest()\nprint(type(g).__name__)', ["class"], "`class Name:` makes a blueprint. `Guest()` makes an object from it."),
 ("Add the method that runs when an object is created.", 'class Room:\n    def B(self, number):\n        self.number = number\nr = Room(101)\nprint(r.number)', ["__init__"], "`__init__` runs automatically each time you create an object."),
 ("Store the name on the object.", 'class Guest:\n    def __init__(self, name):\n        B.name = name\nprint(Guest("Asha").name)', ["self"], "`self` is the object being built, so `self.name` stays with it."),
 ("Make Suite inherit from Room.", 'class Room:\n    beds = 1\nclass Suite(B):\n    pass\nprint(Suite.beds)', ["Room"], "The parent class goes in brackets. Suite gets everything Room has."),
 ("Add the magic method that print() uses.", 'class Room:\n    def __init__(self, n):\n        self.n = n\n    def B(self):\n        return f"Room {self.n}"\nprint(Room(101))', [["__str__", "__repr__"]], "`__str__` gives the friendly text that print() shows."),
],
"numpy1": [
 ("Import NumPy with its usual short name.", 'import numpy B np\nprint(np.array([1, 2, 3]))', ["as"], "Everyone writes `import numpy as np`, so code examples look the same everywhere."),
 ("Print the shape of the array.", NP + 'm = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.B)', ["shape"], "`shape` is (rows, columns). It has no brackets because it is an attribute."),
 ("Make an array of 5 zeros.", NP + 'print(np.B(5))', ["zeros"], "`np.zeros(5)` gives five `0.` values (floats)."),
 ("Make 0, 2, 4, 6, 8 with arange.", NP + 'print(np.arange(0, 10, B))', ["2"], "The third number is the step. The stop (10) is not included."),
 ("Change the 6 values into 2 rows and 3 columns.", NP + 'a = np.arange(6)\nprint(a.B(2, 3))', ["reshape"], "`reshape(rows, cols)` needs rows × cols to equal the number of values."),
],
"numpy2": [
 ("Add 18% GST to every price at once.", NP + 'prices = np.array([100, 200])\nprint(prices B 1.18)', ["*"], "Maths on an array works on every value. No loop needed."),
 ("Get the total of each column.", NP + 'm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=B))', ["0"], "`axis=0` goes down the rows, giving one result per column."),
 ("Keep only the values above 50.", NP + 'a = np.array([30, 60, 90])\nprint(a[a B 50])', [">"], "`a > 50` is a mask of True/False. Using it inside `[ ]` keeps the True values."),
 ("Combine two conditions on an array.", NP + 'a = np.array([5, 15, 25])\nprint(a[(a > 10) B (a < 20)])', ["&"], "Arrays need `&` instead of `and`, with brackets around each condition."),
 ("Find the position of the largest value.", NP + 'sales = np.array([40, 90, 70])\nprint(sales.B())', ["argmax"], "`argmax()` gives the position. `max()` would give the value."),
],
"numpy3": [
 ("Split 7 values into 3 parts, even though they cannot be equal.", NP + 'print([len(p) for p in np.B(np.arange(7), 3)])', ["array_split"], "`array_split` allows unequal parts. `np.split` would raise ValueError."),
 ("Find the positions where the value is 4.", NP + 'a = np.array([4, 7, 4])\nprint(np.B(a == 4)[0])', [["where", "nonzero"]], "With one argument, `np.where(cond)` gives the positions where cond is True."),
 ("Make the random numbers the same on every run.", NP + 'np.random.B(42)\na = np.random.randint(1, 7, 3)\nnp.random.seed(42)\nb = np.random.randint(1, 7, 3)\nprint((a == b).all())', ["seed"], "The same seed always gives the same 'random' numbers."),
 ("Get the running total of the sales.", NP + 'print(np.B([120, 80, 150]))', ["cumsum"], "`cumsum` adds as it goes: 120, 120 + 80, 120 + 80 + 150."),
 ("Simulate 1000 days of bookings, 6 a day on average.", NP + 'np.random.seed(5)\ndays = np.random.B(6, 1000)\nprint(days.min() >= 0, len(days))', ["poisson"], "Poisson counts events in a time window, like bookings per day."),
],
"projects": [
 ("Add up the bill: price times quantity for every item.", 'cart = {"tea": 2, "cake": 1}\nprices = {"tea": 20, "cake": 90}\ntotal = 0\nfor item, qty in cart.items():\n    total += prices[B] * qty\nprint(total)', ["item"], "Use the loop variable as the key to look up each price."),
 ("Stop the menu loop when the user chooses q.", 'choices = ["1", "2", "q", "1"]\nfor choice in choices:\n    if choice == "q":\n        B\n    print("Option", choice)', ["break"], "Menus usually loop until the user picks quit, then `break`."),
 ("Show the total with thousands separators.", 'total = 15600\nprint(f"Total: ₹{total:B}")', [","], "`:,` adds a comma every three digits."),
 ("Reject a quantity that is not a whole number.", 'qty = "two"\nif not qty.B():\n    print("Please enter a number")', [["isdigit", "isdecimal", "isnumeric"]], "Check the text before `int()`, so bad input cannot crash the program."),
 ("Save the summary dictionary as JSON.", 'import json\nsummary = {"bookings": 33, "revenue": 220000}\nwith open("report.json", "w") as f:\n    json.B(summary, f)\nwith open("report.json") as f:\n    print(json.load(f))', ["dump"], "`json.dump(data, file)` writes to a file. `json.dumps(data)` gives a string."),
],
}
WORK = tempfile.mkdtemp()
def run(code):
    p = subprocess.run([sys.executable, '-c', code], capture_output=True, text=True, cwd=WORK, timeout=30)
    assert p.returncode == 0 and not p.stderr.strip(), (code, p.stderr)
    return p.stdout.rstrip('\n')
out, n = {}, 0
for cid, items in X.items():
    out[cid] = []
    for q, code, blanks, e in items:
        assert code.count('B') >= len(blanks)
        alts = [b if isinstance(b, list) else [b] for b in blanks]
        PROT = {'print("B")': '\x01', '"B1001"': '\x02'}
        for k, v in PROT.items(): code = code.replace(k, v)
        parts = code.split('B')
        for k, v in PROT.items(): parts = [x.replace(v, k) for x in parts]
        # rebuild by marking only placeholder B's: placeholder B's are the ones we wrote; guard against real capital B in code
        assert len(parts) - 1 == len(alts), (cid, q, len(parts) - 1, len(alts))
        def fill(choice): return ''.join(p + (choice[i] if i < len(choice) else '') for i, p in enumerate(parts))
        o = run(fill([a[0] for a in alts]))
        for i, a in enumerate(alts):
            for alt in a[1:]:
                ch = [x[0] for x in alts]; ch[i] = alt
                assert run(fill(ch)) == o, (cid, q, alt)
        out[cid].append({"q": q, "c": '___'.join(parts), "a": alts, "o": o, "e": e}); n += 1
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'hub2', 'exercises.js'), 'w', encoding='utf-8').write('/* Quick exercises: fill in the blanks (___). Every answer was run in real Python; o is the real output. */\nvar EXERCISES = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
print(n, 'exercises in', len(out), 'chapters')
