/* Quick exercises: fill in the blanks (___). Every answer was run in real Python; o is the real output. */
var EXERCISES = {
 "intro": [
  {
   "q": "Show the text Hello, World! on the screen.",
   "c": "___(\"Hello, World!\")",
   "a": [
    [
     "print"
    ]
   ],
   "o": "Hello, World!",
   "e": "`print()` shows whatever you put inside the brackets."
  },
  {
   "q": "Turn the second line into a comment, so Python skips it.",
   "c": "print(\"This runs\")\n___ print(\"This is skipped\")",
   "a": [
    [
     "#"
    ]
   ],
   "o": "This runs",
   "e": "Python ignores everything after `#` on a line."
  },
  {
   "q": "Print the answer to 15 times 4.",
   "c": "print(15 ___ 4)",
   "a": [
    [
     "*"
    ]
   ],
   "o": "60",
   "e": "`*` multiplies. Python works out the answer first, then prints it."
  },
  {
   "q": "Insert the keyword that runs the indented line only when 5 is bigger than 2.",
   "c": "___ 5 > 2:\n    print(\"Five is bigger than two\")",
   "a": [
    [
     "if"
    ]
   ],
   "o": "Five is bigger than two",
   "e": "The indented line belongs to the `if`. Python uses indentation, not brackets, to group lines."
  },
  {
   "q": "Print Total: 250 by giving print() two values.",
   "c": "print(\"Total:\"___ 250)",
   "a": [
    [
     ","
    ]
   ],
   "o": "Total: 250",
   "e": "A comma separates the values, and print() puts one space between them."
  }
 ],
 "variables": [
  {
   "q": "Create a variable called city that holds Pune.",
   "c": "___ = \"Pune\"\nprint(city)",
   "a": [
    [
     "city"
    ]
   ],
   "o": "Pune",
   "e": "The name goes on the left of `=` and the value on the right."
  },
  {
   "q": "Assign 10, 20 and 30 to x, y and z in one line.",
   "c": "x, y, z = ___\nprint(y)",
   "a": [
    [
     "10, 20, 30",
     "(10, 20, 30)",
     "[10, 20, 30]"
    ]
   ],
   "o": "20",
   "e": "Python matches the values to the names in order, so y gets 20."
  },
  {
   "q": "Print the data type of price.",
   "c": "price = 99.5\nprint(___(price))",
   "a": [
    [
     "type"
    ]
   ],
   "o": "<class 'float'>",
   "e": "`type()` tells you the type. A number with a decimal point is a `float`."
  },
  {
   "q": "Convert the text \"42\" to a whole number so the sum works.",
   "c": "age = ___(\"42\")\nprint(age + 8)",
   "a": [
    [
     "int"
    ]
   ],
   "o": "50",
   "e": "`int()` turns text made of digits into a whole number."
  },
  {
   "q": "Store the boolean value for 'yes' in is_open.",
   "c": "is_open = ___\nprint(is_open, type(is_open))",
   "a": [
    [
     "True"
    ]
   ],
   "o": "True <class 'bool'>",
   "e": "Booleans are `True` and `False`, with a capital first letter and no quotes."
  }
 ],
 "output": [
  {
   "q": "Print the three letters with a dash between them: a-b-c",
   "c": "print(\"a\", \"b\", \"c\", ___=\"-\")",
   "a": [
    [
     "sep"
    ]
   ],
   "o": "a-b-c",
   "e": "`sep` sets what goes between the values. The default is one space."
  },
  {
   "q": "Keep both texts on one line: Loading...done",
   "c": "print(\"Loading\", ___=\"...\")\nprint(\"done\")",
   "a": [
    [
     "end"
    ]
   ],
   "o": "Loading...done",
   "e": "`end` replaces the new line that print() normally adds at the end."
  },
  {
   "q": "Make this an f-string so the values fill the slots.",
   "c": "name = \"Asha\"\nage = 25\nprint(___\"{name} is {age} years old\")",
   "a": [
    [
     "f"
    ]
   ],
   "o": "Asha is 25 years old",
   "e": "An `f` before the quotes turns `{name}` into the value of name."
  },
  {
   "q": "Show the price with exactly 2 decimal places.",
   "c": "price = 1234.5\nprint(f\"{price:___}\")",
   "a": [
    [
     ".2f"
    ]
   ],
   "o": "1234.50",
   "e": "`.2f` means a decimal number with 2 digits after the point."
  },
  {
   "q": "Put Hello and World on two lines with an escape character.",
   "c": "print(\"Hello___World\")",
   "a": [
    [
     "\\n"
    ]
   ],
   "o": "Hello\nWorld",
   "e": "`\\n` inside a string means 'new line'."
  }
 ],
 "operators": [
  {
   "q": "Get the remainder when 17 is divided by 5.",
   "c": "print(17 ___ 5)",
   "a": [
    [
     "%"
    ]
   ],
   "o": "2",
   "e": "`%` (modulus) gives the remainder: 17 is 3 fives and 2 left over."
  },
  {
   "q": "Get how many full hours are in 135 minutes.",
   "c": "print(135 ___ 60)",
   "a": [
    [
     "//"
    ]
   ],
   "o": "2",
   "e": "`//` is floor division: it keeps only the whole part."
  },
  {
   "q": "Check that x is not equal to 10.",
   "c": "x = 7\nprint(x ___ 10)",
   "a": [
    [
     "!="
    ]
   ],
   "o": "True",
   "e": "`!=` means 'not equal'. `=` alone assigns, `==` compares."
  },
  {
   "q": "Check whether \"a\" is inside the word \"data\".",
   "c": "print(\"a\" ___ \"data\")",
   "a": [
    [
     "in"
    ]
   ],
   "o": "True",
   "e": "`in` checks membership in strings, lists, sets and dictionaries."
  },
  {
   "q": "Add 500 to total with the short assignment operator.",
   "c": "total = 1000\ntotal ___ 500\nprint(total)",
   "a": [
    [
     "+="
    ]
   ],
   "o": "1500",
   "e": "`total += 500` is short for `total = total + 500`."
  }
 ],
 "conditions": [
  {
   "q": "Print Adult when age is 18 or more.",
   "c": "age = 20\n___ age >= 18:\n    print(\"Adult\")",
   "a": [
    [
     "if"
    ]
   ],
   "o": "Adult",
   "e": "`if` runs the indented block only when the condition is True."
  },
  {
   "q": "Insert the keyword for the second check.",
   "c": "score = 65\nif score >= 80:\n    print(\"A\")\n___ score >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")",
   "a": [
    [
     "elif"
    ]
   ],
   "o": "B",
   "e": "`elif` is checked only when the conditions above it were False."
  },
  {
   "q": "Print Weekend when the day is Saturday or Sunday.",
   "c": "day = \"Sunday\"\nif day == \"Saturday\" ___ day == \"Sunday\":\n    print(\"Weekend\")",
   "a": [
    [
     "or"
    ]
   ],
   "o": "Weekend",
   "e": "`or` is True when at least one side is True."
  },
  {
   "q": "Finish the one-line if-else (ternary).",
   "c": "marks = 45\nstatus = \"Pass\" ___ marks >= 40 ___ \"Fail\"\nprint(status)",
   "a": [
    [
     "if"
    ],
    [
     "else"
    ]
   ],
   "o": "Pass",
   "e": "The pattern is `value_if_true if condition else value_if_false`."
  },
  {
   "q": "Keep the empty block valid with a placeholder.",
   "c": "stock = 0\nif stock > 0:\n    ___\nelse:\n    print(\"Sold out\")",
   "a": [
    [
     "pass"
    ]
   ],
   "o": "Sold out",
   "e": "A block cannot be empty. `pass` does nothing and keeps the code valid."
  }
 ],
 "forloops": [
  {
   "q": "Loop over the list and print each city.",
   "c": "for city ___ [\"Pune\", \"Goa\", \"Delhi\"]:\n    print(city)",
   "a": [
    [
     "in"
    ]
   ],
   "o": "Pune\nGoa\nDelhi",
   "e": "`for item in collection:` visits every item in order."
  },
  {
   "q": "Print the numbers 1 to 5.",
   "c": "for n in range(1, ___):\n    print(n)",
   "a": [
    [
     "6"
    ]
   ],
   "o": "1\n2\n3\n4\n5",
   "e": "The stop number is never included, so you need 6 to reach 5."
  },
  {
   "q": "Get the position and the item together, starting from 1.",
   "c": "for i, name in ___([\"Asha\", \"Ravi\"], start=1):\n    print(i, name)",
   "a": [
    [
     "enumerate"
    ]
   ],
   "o": "1 Asha\n2 Ravi",
   "e": "`enumerate()` gives (position, item) pairs."
  },
  {
   "q": "Walk through two lists side by side.",
   "c": "names = [\"Asha\", \"Ravi\"]\nmarks = [82, 67]\nfor name, mark in ___(names, marks):\n    print(name, mark)",
   "a": [
    [
     "zip"
    ]
   ],
   "o": "Asha 82\nRavi 67",
   "e": "`zip()` pairs the first items, then the second items, and so on."
  },
  {
   "q": "Add up all the prices.",
   "c": "total = 0\nfor p in [120, 80, 50]:\n    total ___ p\nprint(total)",
   "a": [
    [
     "+="
    ]
   ],
   "o": "250",
   "e": "Start at 0 and add each value: the accumulator pattern."
  }
 ],
 "whileloops": [
  {
   "q": "Keep looping while n is bigger than 0.",
   "c": "n = 3\n___ n > 0:\n    print(n)\n    n -= 1",
   "a": [
    [
     "while"
    ]
   ],
   "o": "3\n2\n1",
   "e": "`while` repeats as long as its condition stays True."
  },
  {
   "q": "Stop the loop when n reaches 4.",
   "c": "n = 1\nwhile True:\n    if n == 4:\n        ___\n    print(n)\n    n += 1",
   "a": [
    [
     "break"
    ]
   ],
   "o": "1\n2\n3",
   "e": "`break` leaves the loop at once. It is the way out of `while True`."
  },
  {
   "q": "Skip 3 but keep looping.",
   "c": "n = 0\nwhile n < 5:\n    n += 1\n    if n == 3:\n        ___\n    print(n)",
   "a": [
    [
     "continue"
    ]
   ],
   "o": "1\n2\n4\n5",
   "e": "`continue` jumps straight to the next turn of the loop."
  },
  {
   "q": "Increase count by 1 each time, so the loop can end.",
   "c": "count = 0\nwhile count < 3:\n    print(\"Hi\")\n    count ___ 1",
   "a": [
    [
     "+="
    ]
   ],
   "o": "Hi\nHi\nHi",
   "e": "Without changing count, the condition never becomes False: an endless loop."
  },
  {
   "q": "Print No break when the loop ends without break.",
   "c": "n = 0\nwhile n < 2:\n    n += 1\n___:\n    print(\"No break\")",
   "a": [
    [
     "else"
    ]
   ],
   "o": "No break",
   "e": "A loop's `else` runs only when the loop finished without `break`."
  }
 ],
 "strings": [
  {
   "q": "Get the first character.",
   "c": "word = \"Python\"\nprint(word[___])",
   "a": [
    [
     "0"
    ]
   ],
   "o": "P",
   "e": "Counting starts at 0, so the first character is at index 0."
  },
  {
   "q": "Get the last character with a negative index.",
   "c": "word = \"Python\"\nprint(word[___])",
   "a": [
    [
     "-1"
    ]
   ],
   "o": "n",
   "e": "Negative indexes count from the end: -1 is the last character."
  },
  {
   "q": "Slice out yth from Python.",
   "c": "word = \"Python\"\nprint(word[1:___])",
   "a": [
    [
     "4"
    ]
   ],
   "o": "yth",
   "e": "A slice stops before the stop index, so 1:4 gives indexes 1, 2 and 3."
  },
  {
   "q": "Remove the spaces at both ends.",
   "c": "name = \"  Asha  \"\nprint(\"[\" + name.___() + \"]\")",
   "a": [
    [
     "strip"
    ]
   ],
   "o": "[Asha]",
   "e": "`strip()` removes spaces from both ends. `lstrip()` and `rstrip()` do one side."
  },
  {
   "q": "Split the text into a list at each comma.",
   "c": "row = \"Asha,82,Pune\"\nprint(row.___(\",\"))",
   "a": [
    [
     "split"
    ]
   ],
   "o": "['Asha', '82', 'Pune']",
   "e": "`split(\",\")` cuts the text at every comma and gives a list."
  }
 ],
 "lists": [
  {
   "q": "Add Goa to the end of the list.",
   "c": "cities = [\"Pune\", \"Delhi\"]\ncities.___(\"Goa\")\nprint(cities)",
   "a": [
    [
     "append"
    ]
   ],
   "o": "['Pune', 'Delhi', 'Goa']",
   "e": "`append()` adds one item at the end."
  },
  {
   "q": "Insert Mumbai at position 0.",
   "c": "cities = [\"Pune\", \"Delhi\"]\ncities.___(0, \"Mumbai\")\nprint(cities)",
   "a": [
    [
     "insert"
    ]
   ],
   "o": "['Mumbai', 'Pune', 'Delhi']",
   "e": "`insert(position, item)` puts the item at that position."
  },
  {
   "q": "Remove the last item and keep it.",
   "c": "stack = [1, 2, 3]\nlast = stack.___()\nprint(last, stack)",
   "a": [
    [
     "pop"
    ]
   ],
   "o": "3 [1, 2]",
   "e": "`pop()` removes the last item and gives it back."
  },
  {
   "q": "Get a new sorted list and keep the original as it is.",
   "c": "marks = [70, 45, 90]\nprint(___(marks), marks)",
   "a": [
    [
     "sorted"
    ]
   ],
   "o": "[45, 70, 90] [70, 45, 90]",
   "e": "`sorted()` makes a new list. `marks.sort()` would change marks itself."
  },
  {
   "q": "Make a real copy, so changing b does not change a.",
   "c": "a = [1, 2, 3]\nb = a.___()\nb.append(4)\nprint(a, b)",
   "a": [
    [
     "copy"
    ]
   ],
   "o": "[1, 2, 3] [1, 2, 3, 4]",
   "e": "`b = a` would make two names for one list. `copy()` makes a separate list."
  }
 ],
 "tuples": [
  {
   "q": "Make a tuple with one item. Watch the comma!",
   "c": "t = (\"Pune\"___)\nprint(type(t))",
   "a": [
    [
     ","
    ]
   ],
   "o": "<class 'tuple'>",
   "e": "Without the comma, the brackets are just grouping and t is a string."
  },
  {
   "q": "Count how many times 2 appears.",
   "c": "t = (1, 2, 2, 3, 2)\nprint(t.___(2))",
   "a": [
    [
     "count"
    ]
   ],
   "o": "3",
   "e": "Tuples have only two methods: `count()` and `index()`."
  },
  {
   "q": "Find the position of Goa.",
   "c": "t = (\"Pune\", \"Goa\", \"Delhi\")\nprint(t.___(\"Goa\"))",
   "a": [
    [
     "index"
    ]
   ],
   "o": "1",
   "e": "`index()` gives the position of the first match."
  },
  {
   "q": "Unpack the tuple into three names.",
   "c": "point = (4, 7, 2)\nx, y, ___ = point\nprint(x, y, z)",
   "a": [
    [
     "z"
    ]
   ],
   "o": "4 7 2",
   "e": "Unpacking needs one name for each item."
  },
  {
   "q": "Change a tuple: convert it to a list first.",
   "c": "t = (1, 2, 3)\nitems = ___(t)\nitems[0] = 99\nt = tuple(items)\nprint(t)",
   "a": [
    [
     "list"
    ]
   ],
   "o": "(99, 2, 3)",
   "e": "Tuples cannot change, so convert to a list, change it, and convert back."
  }
 ],
 "sets": [
  {
   "q": "Add mango to the set.",
   "c": "fruits = {\"apple\", \"kiwi\"}\nfruits.___(\"mango\")\nprint(len(fruits))",
   "a": [
    [
     "add"
    ]
   ],
   "o": "3",
   "e": "Sets use `add()`, not `append()`."
  },
  {
   "q": "Remove the duplicates by making a set.",
   "c": "ids = [3, 1, 3, 2, 1]\nprint(sorted(___(ids)))",
   "a": [
    [
     "set"
    ]
   ],
   "o": "[1, 2, 3]",
   "e": "A set keeps only unique items. `sorted()` puts them in order."
  },
  {
   "q": "Get the items that are in both sets.",
   "c": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a ___ b)",
   "a": [
    [
     "&"
    ]
   ],
   "o": "{2, 3}",
   "e": "`&` is intersection: items in both. `|` is union, `-` is difference."
  },
  {
   "q": "Remove items without an error, even when one is missing.",
   "c": "fruits = {\"apple\", \"kiwi\"}\nfruits.___(\"kiwi\")\nfruits.___(\"grape\")\nprint(fruits)",
   "a": [
    [
     "discard"
    ],
    [
     "discard"
    ]
   ],
   "o": "{'apple'}",
   "e": "`discard()` does nothing if the item is missing. `remove()` would raise KeyError."
  },
  {
   "q": "Check that every item of a is also in b.",
   "c": "a = {1, 2}\nb = {1, 2, 3}\nprint(a.___(b))",
   "a": [
    [
     "issubset"
    ]
   ],
   "o": "True",
   "e": "a is a subset of b when all of a's items are in b. `a <= b` does the same."
  }
 ],
 "dicts": [
  {
   "q": "Print the value for the key city.",
   "c": "person = {\"name\": \"Asha\", \"city\": \"Pune\"}\nprint(person[___])",
   "a": [
    [
     "\"city\""
    ]
   ],
   "o": "Pune",
   "e": "Put the key in square brackets, with quotes because it is a string."
  },
  {
   "q": "Get the age safely: 0 if the key is missing.",
   "c": "person = {\"name\": \"Asha\"}\nprint(person.___(\"age\", 0))",
   "a": [
    [
     "get"
    ]
   ],
   "o": "0",
   "e": "`get(key, default)` never raises KeyError."
  },
  {
   "q": "Add the key nights with the value 3.",
   "c": "booking = {\"id\": \"B1001\"}\nbooking[___] = 3\nprint(booking)",
   "a": [
    [
     "\"nights\""
    ]
   ],
   "o": "{'id': 'B1001', 'nights': 3}",
   "e": "Assigning to a new key adds it. Assigning to an old key updates it."
  },
  {
   "q": "Loop over the keys and values together.",
   "c": "stock = {\"tea\": 20, \"coffee\": 45}\nfor k, v in stock.___():\n    print(k, v)",
   "a": [
    [
     "items"
    ]
   ],
   "o": "tea 20\ncoffee 45",
   "e": "`items()` gives (key, value) pairs."
  },
  {
   "q": "Count each room type.",
   "c": "rooms = [\"Deluxe\", \"Suite\", \"Deluxe\"]\ncounts = {}\nfor r in rooms:\n    counts[r] = counts.get(r, ___) + 1\nprint(counts)",
   "a": [
    [
     "0"
    ]
   ],
   "o": "{'Deluxe': 2, 'Suite': 1}",
   "e": "A new key starts at 0, then every visit adds 1: the counting pattern."
  }
 ],
 "comprehensions": [
  {
   "q": "Make the squares of 1 to 5 in one line.",
   "c": "squares = [n ___ 2 for n in range(1, 6)]\nprint(squares)",
   "a": [
    [
     "**"
    ]
   ],
   "o": "[1, 4, 9, 16, 25]",
   "e": "`**` is the power operator. The expression comes first, then the loop."
  },
  {
   "q": "Keep only the marks of 40 or more.",
   "c": "marks = [35, 80, 55, 20]\npassed = [m for m in marks ___ m >= 40]\nprint(passed)",
   "a": [
    [
     "if"
    ]
   ],
   "o": "[80, 55]",
   "e": "A filter `if` goes at the end of the comprehension."
  },
  {
   "q": "Label every mark with a ternary.",
   "c": "marks = [35, 80]\nprint([\"Pass\" if m >= 40 ___ \"Fail\" for m in marks])",
   "a": [
    [
     "else"
    ]
   ],
   "o": "['Fail', 'Pass']",
   "e": "An `if ... else` that transforms each item goes at the front."
  },
  {
   "q": "Build a dictionary of names and their lengths.",
   "c": "names = [\"Asha\", \"Ravi\"]\nprint({n___ len(n) for n in names})",
   "a": [
    [
     ":"
    ]
   ],
   "o": "{'Asha': 4, 'Ravi': 4}",
   "e": "A dict comprehension writes `key: value` before the loop."
  },
  {
   "q": "Add up the prices with a generator expression.",
   "c": "print(___(p for p in [120, 80, 50]))",
   "a": [
    [
     "sum"
    ]
   ],
   "o": "250",
   "e": "A generator expression in round brackets feeds values one at a time, here into `sum()`."
  }
 ],
 "functions": [
  {
   "q": "Define a function called greet.",
   "c": "___ greet():\n    print(\"Hello!\")\ngreet()",
   "a": [
    [
     "def"
    ]
   ],
   "o": "Hello!",
   "e": "`def name():` defines a function. Calling it with `greet()` runs it."
  },
  {
   "q": "Send the result back from the function.",
   "c": "def add(a, b):\n    ___ a + b\nprint(add(5, 7))",
   "a": [
    [
     "return"
    ]
   ],
   "o": "12",
   "e": "`return` sends a value back to where the function was called."
  },
  {
   "q": "Give name the default value Guest.",
   "c": "def welcome(name___\"Guest\"):\n    print(\"Welcome,\", name)\nwelcome()",
   "a": [
    [
     "="
    ]
   ],
   "o": "Welcome, Guest",
   "e": "`name=\"Guest\"` is used when no argument is given."
  },
  {
   "q": "Pass w by keyword.",
   "c": "def area(w, h):\n    return w * h\nprint(area(h=3, ___=4))",
   "a": [
    [
     "w"
    ]
   ],
   "o": "12",
   "e": "Keyword arguments use the parameter's name, so their order does not matter."
  },
  {
   "q": "Return the smallest and the largest value.",
   "c": "def min_max(nums):\n    return min(nums), ___(nums)\nlo, hi = min_max([4, 9, 1])\nprint(lo, hi)",
   "a": [
    [
     "max"
    ]
   ],
   "o": "1 9",
   "e": "Returning two values gives back a tuple, which you can unpack."
  }
 ],
 "functions2": [
  {
   "q": "Accept any number of positional arguments.",
   "c": "def total(___nums):\n    return sum(nums)\nprint(total(1, 2, 3))",
   "a": [
    [
     "*"
    ]
   ],
   "o": "6",
   "e": "`*nums` collects the arguments into a tuple."
  },
  {
   "q": "Accept any number of keyword arguments.",
   "c": "def show(___info):\n    print(info)\nshow(name=\"Asha\", city=\"Pune\")",
   "a": [
    [
     "**"
    ]
   ],
   "o": "{'name': 'Asha', 'city': 'Pune'}",
   "e": "`**info` collects keyword arguments into a dictionary."
  },
  {
   "q": "Write a lambda that doubles x.",
   "c": "double = ___ x: x * 2\nprint(double(8))",
   "a": [
    [
     "lambda"
    ]
   ],
   "o": "16",
   "e": "`lambda x: x * 2` is a tiny function without a name."
  },
  {
   "q": "Sort the names by their length.",
   "c": "names = [\"Ravi\", \"Al\", \"Asha K\"]\nprint(sorted(names, ___=lambda n: len(n)))",
   "a": [
    [
     "key"
    ]
   ],
   "o": "['Al', 'Ravi', 'Asha K']",
   "e": "`key` tells `sorted()` what to compare. `key=len` works too."
  },
  {
   "q": "Give back values one at a time (a generator).",
   "c": "def countdown(n):\n    while n > 0:\n        ___ n\n        n -= 1\nprint(list(countdown(3)))",
   "a": [
    [
     "yield"
    ]
   ],
   "o": "[3, 2, 1]",
   "e": "`yield` pauses the function and hands out one value each time."
  }
 ],
 "errors": [
  {
   "q": "Catch the error so the program does not crash.",
   "c": "___:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")",
   "a": [
    [
     "try"
    ]
   ],
   "o": "Cannot divide by zero",
   "e": "Code that might fail goes inside `try:`."
  },
  {
   "q": "Name the error that int(\"abc\") raises.",
   "c": "try:\n    int(\"abc\")\nexcept ___:\n    print(\"Not a number\")",
   "a": [
    [
     "ValueError"
    ]
   ],
   "o": "Not a number",
   "e": "The type is right (text), but the value cannot become a number: ValueError."
  },
  {
   "q": "Add the block that always runs.",
   "c": "try:\n    x = int(\"5\")\nexcept ValueError:\n    print(\"bad\")\n___:\n    print(\"done\")",
   "a": [
    [
     "finally"
    ]
   ],
   "o": "done",
   "e": "`finally` runs whether there was an error or not."
  },
  {
   "q": "Raise your own error when nights is negative.",
   "c": "nights = -1\ntry:\n    if nights < 0:\n        ___ ValueError(\"nights cannot be negative\")\nexcept ValueError as e:\n    print(e)",
   "a": [
    [
     "raise"
    ]
   ],
   "o": "nights cannot be negative",
   "e": "`raise` creates an error on purpose, with your own message."
  },
  {
   "q": "Store the error as e to print its message.",
   "c": "try:\n    [1, 2][5]\nexcept IndexError ___ e:\n    print(e)",
   "a": [
    [
     "as"
    ]
   ],
   "o": "list index out of range",
   "e": "`except SomeError as e:` gives you the error object, and printing it shows the message."
  }
 ],
 "files": [
  {
   "q": "Open the file for writing.",
   "c": "with open(\"notes.txt\", ___) as f:\n    f.write(\"Hello\")\nwith open(\"notes.txt\") as f:\n    print(f.read())",
   "a": [
    [
     "\"w\""
    ]
   ],
   "o": "Hello",
   "e": "Mode `\"w\"` writes, and replaces the file if it exists."
  },
  {
   "q": "Add a line at the end without deleting what is there.",
   "c": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"one\\n\")\nwith open(\"log.txt\", ___) as f:\n    f.write(\"two\\n\")\nwith open(\"log.txt\") as f:\n    print(f.read().splitlines())",
   "a": [
    [
     "\"a\""
    ]
   ],
   "o": "['one', 'two']",
   "e": "Mode `\"a\"` (append) adds to the end and keeps the old text."
  },
  {
   "q": "Use the keyword that closes the file for you.",
   "c": "___ open(\"notes.txt\", \"w\") as f:\n    f.write(\"saved\")\nprint(f.closed)",
   "a": [
    [
     "with"
    ]
   ],
   "o": "True",
   "e": "`with` closes the file at the end of the block, even after an error."
  },
  {
   "q": "Read all the lines into a list.",
   "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"a\\nb\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.___())",
   "a": [
    [
     "readlines"
    ]
   ],
   "o": "['a\\n', 'b\\n']",
   "e": "`readlines()` gives a list with one string per line, each ending in `\\n`."
  },
  {
   "q": "Read the CSV rows as dictionaries.",
   "c": "import csv\nwith open(\"people.csv\", \"w\", newline=\"\") as f:\n    f.write(\"name,city\\nAsha,Pune\\n\")\nwith open(\"people.csv\") as f:\n    for row in csv.___(f):\n        print(row[\"name\"], row[\"city\"])",
   "a": [
    [
     "DictReader"
    ]
   ],
   "o": "Asha Pune",
   "e": "`csv.DictReader` uses the first line as keys, so you can write `row[\"name\"]`."
  }
 ],
 "modules": [
  {
   "q": "Import the math module.",
   "c": "___ math\nprint(math.sqrt(64))",
   "a": [
    [
     "import"
    ]
   ],
   "o": "8.0",
   "e": "`import math` loads the module. Then use `math.` before its functions."
  },
  {
   "q": "Import only sqrt from math.",
   "c": "___ math import sqrt\nprint(sqrt(81))",
   "a": [
    [
     "from"
    ]
   ],
   "o": "9.0",
   "e": "`from module import name` lets you use the name without `math.` in front."
  },
  {
   "q": "Give the module a short name.",
   "c": "import statistics ___ st\nprint(st.mean([2, 4, 6]))",
   "a": [
    [
     "as"
    ]
   ],
   "o": "4",
   "e": "`as` gives a module a nickname, like `import numpy as np`."
  },
  {
   "q": "Round 4.2 up to the next whole number.",
   "c": "import math\nprint(math.___(4.2))",
   "a": [
    [
     "ceil"
    ]
   ],
   "o": "5",
   "e": "`ceil` rounds up and `floor` rounds down."
  },
  {
   "q": "Count how often each item appears.",
   "c": "from collections import ___\nprint(Counter([\"a\", \"b\", \"a\"]))",
   "a": [
    [
     "Counter"
    ]
   ],
   "o": "Counter({'a': 2, 'b': 1})",
   "e": "`Counter` counts items for you, like a dictionary of counts."
  }
 ],
 "oop": [
  {
   "q": "Create a class called Guest.",
   "c": "___ Guest:\n    pass\ng = Guest()\nprint(type(g).__name__)",
   "a": [
    [
     "class"
    ]
   ],
   "o": "Guest",
   "e": "`class Name:` makes a blueprint. `Guest()` makes an object from it."
  },
  {
   "q": "Add the method that runs when an object is created.",
   "c": "class Room:\n    def ___(self, number):\n        self.number = number\nr = Room(101)\nprint(r.number)",
   "a": [
    [
     "__init__"
    ]
   ],
   "o": "101",
   "e": "`__init__` runs automatically each time you create an object."
  },
  {
   "q": "Store the name on the object.",
   "c": "class Guest:\n    def __init__(self, name):\n        ___.name = name\nprint(Guest(\"Asha\").name)",
   "a": [
    [
     "self"
    ]
   ],
   "o": "Asha",
   "e": "`self` is the object being built, so `self.name` stays with it."
  },
  {
   "q": "Make Suite inherit from Room.",
   "c": "class Room:\n    beds = 1\nclass Suite(___):\n    pass\nprint(Suite.beds)",
   "a": [
    [
     "Room"
    ]
   ],
   "o": "1",
   "e": "The parent class goes in brackets. Suite gets everything Room has."
  },
  {
   "q": "Add the magic method that print() uses.",
   "c": "class Room:\n    def __init__(self, n):\n        self.n = n\n    def ___(self):\n        return f\"Room {self.n}\"\nprint(Room(101))",
   "a": [
    [
     "__str__",
     "__repr__"
    ]
   ],
   "o": "Room 101",
   "e": "`__str__` gives the friendly text that print() shows."
  }
 ],
 "numpy1": [
  {
   "q": "Import NumPy with its usual short name.",
   "c": "import numpy ___ np\nprint(np.array([1, 2, 3]))",
   "a": [
    [
     "as"
    ]
   ],
   "o": "[1 2 3]",
   "e": "Everyone writes `import numpy as np`, so code examples look the same everywhere."
  },
  {
   "q": "Print the shape of the array.",
   "c": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.___)",
   "a": [
    [
     "shape"
    ]
   ],
   "o": "(2, 3)",
   "e": "`shape` is (rows, columns). It has no brackets because it is an attribute."
  },
  {
   "q": "Make an array of 5 zeros.",
   "c": "import numpy as np\nprint(np.___(5))",
   "a": [
    [
     "zeros"
    ]
   ],
   "o": "[0. 0. 0. 0. 0.]",
   "e": "`np.zeros(5)` gives five `0.` values (floats)."
  },
  {
   "q": "Make 0, 2, 4, 6, 8 with arange.",
   "c": "import numpy as np\nprint(np.arange(0, 10, ___))",
   "a": [
    [
     "2"
    ]
   ],
   "o": "[0 2 4 6 8]",
   "e": "The third number is the step. The stop (10) is not included."
  },
  {
   "q": "Change the 6 values into 2 rows and 3 columns.",
   "c": "import numpy as np\na = np.arange(6)\nprint(a.___(2, 3))",
   "a": [
    [
     "reshape"
    ]
   ],
   "o": "[[0 1 2]\n [3 4 5]]",
   "e": "`reshape(rows, cols)` needs rows × cols to equal the number of values."
  }
 ],
 "numpy2": [
  {
   "q": "Add 18% GST to every price at once.",
   "c": "import numpy as np\nprices = np.array([100, 200])\nprint(prices ___ 1.18)",
   "a": [
    [
     "*"
    ]
   ],
   "o": "[118. 236.]",
   "e": "Maths on an array works on every value. No loop needed."
  },
  {
   "q": "Get the total of each column.",
   "c": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=___))",
   "a": [
    [
     "0"
    ]
   ],
   "o": "[4 6]",
   "e": "`axis=0` goes down the rows, giving one result per column."
  },
  {
   "q": "Keep only the values above 50.",
   "c": "import numpy as np\na = np.array([30, 60, 90])\nprint(a[a ___ 50])",
   "a": [
    [
     ">"
    ]
   ],
   "o": "[60 90]",
   "e": "`a > 50` is a mask of True/False. Using it inside `[ ]` keeps the True values."
  },
  {
   "q": "Combine two conditions on an array.",
   "c": "import numpy as np\na = np.array([5, 15, 25])\nprint(a[(a > 10) ___ (a < 20)])",
   "a": [
    [
     "&"
    ]
   ],
   "o": "[15]",
   "e": "Arrays need `&` instead of `and`, with brackets around each condition."
  },
  {
   "q": "Find the position of the largest value.",
   "c": "import numpy as np\nsales = np.array([40, 90, 70])\nprint(sales.___())",
   "a": [
    [
     "argmax"
    ]
   ],
   "o": "1",
   "e": "`argmax()` gives the position. `max()` would give the value."
  }
 ],
 "numpy3": [
  {
   "q": "Split 7 values into 3 parts, even though they cannot be equal.",
   "c": "import numpy as np\nprint([len(p) for p in np.___(np.arange(7), 3)])",
   "a": [
    [
     "array_split"
    ]
   ],
   "o": "[3, 2, 2]",
   "e": "`array_split` allows unequal parts. `np.split` would raise ValueError."
  },
  {
   "q": "Find the positions where the value is 4.",
   "c": "import numpy as np\na = np.array([4, 7, 4])\nprint(np.___(a == 4)[0])",
   "a": [
    [
     "where",
     "nonzero"
    ]
   ],
   "o": "[0 2]",
   "e": "With one argument, `np.where(cond)` gives the positions where cond is True."
  },
  {
   "q": "Make the random numbers the same on every run.",
   "c": "import numpy as np\nnp.random.___(42)\na = np.random.randint(1, 7, 3)\nnp.random.seed(42)\nb = np.random.randint(1, 7, 3)\nprint((a == b).all())",
   "a": [
    [
     "seed"
    ]
   ],
   "o": "True",
   "e": "The same seed always gives the same 'random' numbers."
  },
  {
   "q": "Get the running total of the sales.",
   "c": "import numpy as np\nprint(np.___([120, 80, 150]))",
   "a": [
    [
     "cumsum"
    ]
   ],
   "o": "[120 200 350]",
   "e": "`cumsum` adds as it goes: 120, 120 + 80, 120 + 80 + 150."
  },
  {
   "q": "Simulate 1000 days of bookings, 6 a day on average.",
   "c": "import numpy as np\nnp.random.seed(5)\ndays = np.random.___(6, 1000)\nprint(days.min() >= 0, len(days))",
   "a": [
    [
     "poisson"
    ]
   ],
   "o": "True 1000",
   "e": "Poisson counts events in a time window, like bookings per day."
  }
 ],
 "projects": [
  {
   "q": "Add up the bill: price times quantity for every item.",
   "c": "cart = {\"tea\": 2, \"cake\": 1}\nprices = {\"tea\": 20, \"cake\": 90}\ntotal = 0\nfor item, qty in cart.items():\n    total += prices[___] * qty\nprint(total)",
   "a": [
    [
     "item"
    ]
   ],
   "o": "130",
   "e": "Use the loop variable as the key to look up each price."
  },
  {
   "q": "Stop the menu loop when the user chooses q.",
   "c": "choices = [\"1\", \"2\", \"q\", \"1\"]\nfor choice in choices:\n    if choice == \"q\":\n        ___\n    print(\"Option\", choice)",
   "a": [
    [
     "break"
    ]
   ],
   "o": "Option 1\nOption 2",
   "e": "Menus usually loop until the user picks quit, then `break`."
  },
  {
   "q": "Show the total with thousands separators.",
   "c": "total = 15600\nprint(f\"Total: ₹{total:___}\")",
   "a": [
    [
     ","
    ]
   ],
   "o": "Total: ₹15,600",
   "e": "`:,` adds a comma every three digits."
  },
  {
   "q": "Reject a quantity that is not a whole number.",
   "c": "qty = \"two\"\nif not qty.___():\n    print(\"Please enter a number\")",
   "a": [
    [
     "isdigit",
     "isdecimal",
     "isnumeric"
    ]
   ],
   "o": "Please enter a number",
   "e": "Check the text before `int()`, so bad input cannot crash the program."
  },
  {
   "q": "Save the summary dictionary as JSON.",
   "c": "import json\nsummary = {\"bookings\": 33, \"revenue\": 220000}\nwith open(\"report.json\", \"w\") as f:\n    json.___(summary, f)\nwith open(\"report.json\") as f:\n    print(json.load(f))",
   "a": [
    [
     "dump"
    ]
   ],
   "o": "{'bookings': 33, 'revenue': 220000}",
   "e": "`json.dump(data, file)` writes to a file. `json.dumps(data)` gives a string."
  }
 ],
 "pandas1": [
  {
   "q": "Read the CSV file into a DataFrame.",
   "c": "import pandas as pd\ndf = pd.___(\"employees.csv\")\nprint(df.shape)",
   "a": [
    [
     "read_csv"
    ]
   ],
   "o": "(41, 8)",
   "e": "`pd.read_csv()` turns a CSV file into a DataFrame. `shape` is (rows, columns)."
  },
  {
   "q": "Show only the first 3 rows.",
   "c": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[[\"name\", \"city\"]].___(3))",
   "a": [
    [
     "head"
    ]
   ],
   "o": "             name       city\n0        Asha Rao  bengaluru\n1    Vikram Singh       Pune\n2     Neha Kapoor    Chennai",
   "e": "`head(n)` shows the first n rows; without a number it shows 5."
  },
  {
   "q": "Count the missing values in each column.",
   "c": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df.___().sum())",
   "a": [
    [
     "isna",
     "isnull"
    ]
   ],
   "o": "emp_id        0\nname          0\nemail         1\ndepartment    0\nsalary        3\nscore         2\njoin_date     1\ncity          1\ndtype: int64",
   "e": "`isna()` marks gaps as True, and `sum()` counts the True values in each column."
  },
  {
   "q": "Pick the two columns as a smaller DataFrame.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp[___])",
   "a": [
    [
     "[\"name\", \"salary\"]",
     "['name', 'salary']"
    ]
   ],
   "o": "   name  salary\n0  Asha   72000\n1  Ravi   45000\n2  Neha   58000",
   "e": "A **list** of column names inside the brackets gives a DataFrame."
  },
  {
   "q": "Give the Series your own labels.",
   "c": "import pandas as pd\ns = pd.Series([10, 20], ___=[\"a\", \"b\"])\nprint(s[\"b\"])",
   "a": [
    [
     "index"
    ]
   ],
   "o": "20",
   "e": "`index=` sets the labels, so you can pick a value by its label."
  }
 ],
 "pandas2": [
  {
   "q": "Fill the gaps with the middle value of the column.",
   "c": "import pandas as pd\ns = pd.Series([10, None, 30, 50])\nprint(s.fillna(s.___()).tolist())",
   "a": [
    [
     "median"
    ]
   ],
   "o": "[10.0, 30.0, 30.0, 50.0]",
   "e": "The median of 10, 30 and 50 is 30. Gaps are skipped when it is worked out."
  },
  {
   "q": "Copy the last known value down into the gaps.",
   "c": "import pandas as pd\ns = pd.Series([31, None, None, 29])\nprint(s.___().tolist())",
   "a": [
    [
     "ffill"
    ]
   ],
   "o": "[31.0, 31.0, 31.0, 29.0]",
   "e": "`ffill()` (forward fill) copies the value above into each gap."
  },
  {
   "q": "Remove the spaces at both ends of every name.",
   "c": "import pandas as pd\nnames = pd.Series([\"  Asha\", \"Ravi  \"])\nprint(names.str.___().tolist())",
   "a": [
    [
     "strip"
    ]
   ],
   "o": "['Asha', 'Ravi']",
   "e": "`.str.strip()` runs `strip()` on every value of the column."
  },
  {
   "q": "Read the dates the Indian way: day first.",
   "c": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"05/01/2025\"]), ___=True)\nprint(d.dt.month[0])",
   "a": [
    [
     "dayfirst"
    ]
   ],
   "o": "1",
   "e": "With `dayfirst=True`, 05/01/2025 is 5 January, so the month is 1."
  },
  {
   "q": "Turn values that are not dates into NaT instead of stopping.",
   "c": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"2025-01-05\", \"oops\"]), format=\"mixed\", errors=\"___\")\nprint(d.isna().sum())",
   "a": [
    [
     "coerce"
    ]
   ],
   "o": "1",
   "e": "`errors=\"coerce\"` gives NaT (a missing date) for anything it cannot read."
  }
 ],
 "pandas3": [
  {
   "q": "Pick the first 2 rows by position.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.___[0:2][\"name\"].tolist())",
   "a": [
    [
     "iloc"
    ]
   ],
   "o": "['Asha', 'Ravi']",
   "e": "`iloc` uses positions and leaves out the end of the slice, so 0:2 gives 2 rows."
  },
  {
   "q": "Keep only the rows where both conditions are true.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp[(emp[\"salary\"] > 50000) ___ (emp[\"dept\"] == \"IT\")][\"name\"].tolist())",
   "a": [
    [
     "&"
    ]
   ],
   "o": "['Asha', 'Neha']",
   "e": "`&` means and. Each condition needs its own brackets."
  },
  {
   "q": "Run the function on every row, not every column.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\ndef tag(row):\n    return row[\"name\"] + \"-\" + row[\"dept\"]\n\nprint(emp.apply(tag, ___=1).tolist())",
   "a": [
    [
     "axis"
    ]
   ],
   "o": "['Asha-IT', 'Ravi-HR', 'Neha-IT']",
   "e": "With `axis=1` the function gets one whole row at a time."
  },
  {
   "q": "Sort from the largest salary down.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.sort_values(\"salary\", ___=False)[\"name\"].tolist())",
   "a": [
    [
     "ascending"
    ]
   ],
   "o": "['Asha', 'Neha', 'Ravi']",
   "e": "`ascending=False` puts the biggest value first."
  },
  {
   "q": "Find the label of the row with the biggest salary.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.loc[emp[\"salary\"].___(), \"name\"])",
   "a": [
    [
     "idxmax"
    ]
   ],
   "o": "Asha",
   "e": "`idxmax()` gives the index label; `loc` turns it into the name."
  }
 ],
 "pandas4": [
  {
   "q": "Group the rows by department.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.___(\"dept\")[\"salary\"].sum())",
   "a": [
    [
     "groupby"
    ]
   ],
   "o": "dept\nHR     45000\nIT    130000\nName: salary, dtype: int64",
   "e": "`groupby` splits the rows into groups, then `sum()` totals each group."
  },
  {
   "q": "Put each group's average on every row.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.groupby(\"dept\")[\"salary\"].___(\"mean\").tolist())",
   "a": [
    [
     "transform"
    ]
   ],
   "o": "[65000.0, 45000.0, 65000.0]",
   "e": "`transform` returns one value per original row: each person gets their department's average."
  },
  {
   "q": "Keep every employee, even without a match.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nheads = pd.DataFrame({\"dept\": [\"IT\"], \"head\": [\"Om\"]})\nprint(len(pd.merge(emp, heads, on=\"dept\", how=\"___\")))",
   "a": [
    [
     "left"
    ]
   ],
   "o": "3",
   "e": "A left join keeps all rows of the left table; Ravi gets NaN for head."
  },
  {
   "q": "Stack the tables and number the rows 0, 1, 2 again.",
   "c": "import pandas as pd\na = pd.DataFrame({\"v\": [1, 2]})\nb = pd.DataFrame({\"v\": [3]})\nprint(pd.concat([a, b], ___=True).index.tolist())",
   "a": [
    [
     "ignore_index"
    ]
   ],
   "o": "[0, 1, 2]",
   "e": "Without it the index would be 0, 1, 0."
  },
  {
   "q": "Put 0 in the empty cells of the pivot table.",
   "c": "import pandas as pd\nemp = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"salary\": [72000, 45000, 58000]})\nprint(emp.pivot_table(values=\"salary\", index=\"dept\", columns=\"name\", aggfunc=\"count\", ___=0).sum().sum())",
   "a": [
    [
     "fill_value"
    ]
   ],
   "o": "3",
   "e": "`fill_value=0` fills the cells where a department has no such person."
  }
 ],
 "mpl1": [
  {
   "q": "Draw the bars sideways, so the long names fit.",
   "c": "import matplotlib.pyplot as plt\nplt.___([\"Banjara Hills\", \"Jubilee Hills\", \"Madhapur\"], [42, 35, 58])\nplt.show()",
   "a": [
    [
     "barh"
    ]
   ],
   "o": "",
   "e": "`plt.barh(names, values)` draws horizontal bars.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 barh bars=3 t='' x='' y='' leg=None xt=['0', '10', '20', '30', '40', '50', '60', '70'] h=[42.0, 35.0, 58.0] tx=0",
   "img": [
    "img/ex-mpl1-1.webp"
   ]
  },
  {
   "q": "Cut the ages into 5 bars.",
   "c": "import matplotlib.pyplot as plt\nages = [21, 25, 27, 30, 33, 35, 38, 41, 45, 52]\nplt.hist(ages, ___=5, edgecolor=\"black\")\nplt.show()",
   "a": [
    [
     "bins"
    ]
   ],
   "o": "",
   "e": "`bins=5` makes 5 equal ranges between the smallest and largest age.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 hist bars=5 t='' x='' y='' leg=None xt=['15', '20', '25', '30', '35', '40', '45', '50', '55'] h=[3.0, 2.0, 2.0, 2.0, 1.0] tx=0",
   "img": [
    "img/ex-mpl1-2.webp"
   ]
  },
  {
   "q": "Write the percent with 1 decimal on every slice.",
   "c": "import matplotlib.pyplot as plt\nplt.pie([55, 45], labels=[\"UPI\", \"Cash\"], autopct=\"___\")\nplt.show()",
   "a": [
    [
     "%1.1f%%"
    ]
   ],
   "o": "",
   "e": "`%1.1f` is a number with 1 decimal; `%%` is a real % sign.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 pie wedges=2 t='' x='' y='' leg=None xt=[] h=[] tx=4",
   "img": [
    "img/ex-mpl1-3.webp"
   ]
  },
  {
   "q": "Colour the dots by quantity, using a colour scale.",
   "c": "import matplotlib.pyplot as plt\nplt.scatter([1, 2, 3, 4], [10, 25, 18, 30], c=[1, 5, 3, 8], ___=\"viridis\")\nplt.colorbar()\nplt.show()",
   "a": [
    [
     "cmap"
    ]
   ],
   "o": "",
   "e": "`cmap=` picks the colour scale used for the `c=` values.",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 scatter points=4 t='' x='' y='' leg=None xt=['0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5'] h=[] tx=0",
   "img": [
    "img/ex-mpl1-4.webp"
   ]
  },
  {
   "q": "Start the second series where the first one ends.",
   "c": "import matplotlib.pyplot as plt\nnames = [\"Q1\", \"Q2\"]\nplt.bar(names, [30, 40], label=\"Online\")\nplt.bar(names, [20, 25], ___=[30, 40], label=\"Shop\")\nplt.legend()\nplt.show()",
   "a": [
    [
     "bottom"
    ]
   ],
   "o": "",
   "e": "`bottom=` stacks the bars: each shop bar starts on top of the online bar.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='' x='' y='' leg=['Online', 'Shop'] xt=['Q1', 'Q2'] h=[30.0, 40.0, 20.0, 25.0] tx=0",
   "img": [
    "img/ex-mpl1-5.webp"
   ]
  }
 ],
 "mpl2": [
  {
   "q": "Make a figure with 1 row of 2 charts.",
   "c": "import matplotlib.pyplot as plt\nfig, axes = plt.___(1, 2)\naxes[0].plot([1, 2, 3])\naxes[1].bar([\"a\", \"b\"], [2, 3])\nplt.show()",
   "a": [
    [
     "subplots"
    ]
   ],
   "o": "",
   "e": "`plt.subplots(rows, cols)` gives the figure and an array of axes.",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5'] h=[] tx=0\n#ax2 bar bars=2 t='' x='' y='' leg=None xt=['a', 'b'] h=[2.0, 3.0] tx=0",
   "img": [
    "img/ex-mpl2-1.webp"
   ]
  },
  {
   "q": "Set the title of this axes.",
   "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([4, 6, 5])\nax.___(\"Weekly sales\")\nplt.show()",
   "a": [
    [
     "set_title"
    ]
   ],
   "o": "",
   "e": "On an axes, label methods start with `set_`.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Weekly sales' x='' y='' leg=None xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25'] h=[] tx=0",
   "img": [
    "img/ex-mpl2-2.webp"
   ]
  },
  {
   "q": "Give the whole figure one title.",
   "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1, 2])\naxes[1].plot([2, 1])\nfig.___(\"Dashboard\")\nplt.show()",
   "a": [
    [
     "suptitle"
    ]
   ],
   "o": "",
   "e": "`fig.suptitle()` goes above all the charts of the figure.",
   "sum": "#fig1 axes=2 sup='Dashboard' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25'] h=[] tx=0\n#ax2 line lines=1 t='' x='' y='' leg=None xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25'] h=[] tx=0",
   "img": [
    "img/ex-mpl2-3.webp"
   ]
  },
  {
   "q": "Add a second y-axis on the right.",
   "c": "import matplotlib.pyplot as plt\nfig, ax1 = plt.subplots()\nax1.plot([40, 52, 61])\nax2 = ax1.___()\nax2.plot([120, 150, 135], color=\"red\")\nplt.show()",
   "a": [
    [
     "twinx"
    ]
   ],
   "o": "",
   "e": "`twinx()` makes a new axes that shares the x-axis, with its own y-axis on the right.",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25'] h=[] tx=0\n#ax2 line lines=1 t='' x='' y='' leg=None xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25'] h=[] tx=0",
   "img": [
    "img/ex-mpl2-4.webp"
   ]
  },
  {
   "q": "Hide the border line along the top.",
   "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar([\"a\", \"b\"], [3, 5])\nax.spines[\"___\"].set_visible(False)\nplt.show()",
   "a": [
    [
     "top"
    ]
   ],
   "o": "",
   "e": "The four spines are top, right, bottom and left.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=2 t='' x='' y='' leg=None xt=['a', 'b'] h=[3.0, 5.0] tx=0",
   "img": [
    "img/ex-mpl2-5.webp"
   ]
  }
 ],
 "sns1": [
  {
   "q": "Draw a histogram with a smooth curve on top.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.histplot(data=tips, x=\"tip\", bins=12, ___=True)\nplt.show()",
   "a": [
    [
     "kde"
    ]
   ],
   "o": "",
   "e": "`kde=True` adds the smooth KDE curve over the bars.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar+line bars=12 lines=1 t='' x='tip' y='Count' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[37.0, 61.0, 63.0, 30.0, 25.0, 16.0, 5.0, 4.0, 1.0, 0.0, 1.0, 1.0] tx=0\n#sns histplot",
   "img": [
    "img/ex-sns1-1.webp"
   ]
  },
  {
   "q": "Colour the bars by the time of the meal.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.histplot(data=tips, x=\"total_bill\", ___=\"time\")\nplt.show()",
   "a": [
    [
     "hue"
    ]
   ],
   "o": "",
   "e": "`hue=` splits the data by a column and adds a legend.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=28 t='' x='total_bill' y='Count' leg=['Lunch', 'Dinner'] xt=['0', '10', '20', '30', '40', '50', '60'] h=[2.0, 7.0, 27.0, 30.0, 30.0, 25.0, 19.0, 11.0, 8.0, 5.0, 6.0, 0.0] tx=0\n#sns histplot",
   "img": [
    "img/ex-sns1-2.webp"
   ]
  },
  {
   "q": "Count the bills on each day.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.___(data=tips, x=\"day\")\nplt.show()",
   "a": [
    [
     "countplot"
    ]
   ],
   "o": "",
   "e": "countplot counts the rows of each category; barplot would need a `y=` to average.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='' x='day' y='count' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[62.0, 19.0, 87.0, 76.0] tx=0\n#sns countplot",
   "img": [
    "img/ex-sns1-3.webp"
   ]
  },
  {
   "q": "Show two groups in the two halves of each violin.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.violinplot(data=tips, x=\"day\", y=\"tip\", hue=\"sex\", ___=True)\nplt.show()",
   "a": [
    [
     "split"
    ]
   ],
   "o": "",
   "e": "`split=True` draws one hue group on each side.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 area+line bars=2 lines=24 t='' x='day' y='tip' leg=['Male', 'Female'] xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[0.0, 0.0] tx=0\n#sns violinplot",
   "img": [
    "img/ex-sns1-4.webp"
   ]
  },
  {
   "q": "Draw box plots in panels, one per smoker group.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.catplot(data=tips, x=\"day\", y=\"tip\", kind=\"___\", col=\"smoker\")\nplt.show()",
   "a": [
    [
     "box"
    ]
   ],
   "o": "",
   "e": "catplot's `kind=` picks the chart; without it you get a strip plot.",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 box boxes=4 t='smoker = Yes' x='day' y='tip' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#ax2 box boxes=4 t='smoker = No' x='day' y='' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#sns catplot FacetGrid",
   "img": [
    "img/ex-sns1-5.webp"
   ]
  }
 ],
 "sns2": [
  {
   "q": "Make the dot size follow the group size.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", ___=\"size\")\nplt.show()",
   "a": [
    [
     "size"
    ]
   ],
   "o": "",
   "e": "`size=` maps a column to the size of the dots.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 scatter points=244 t='' x='total_bill' y='tip' leg=['1', '2', '3', '4', '5', '6'] xt=['0', '10', '20', '30', '40', '50', '60'] h=[] tx=0\n#sns scatterplot",
   "img": [
    "img/ex-sns2-1.webp"
   ]
  },
  {
   "q": "Fit a curve instead of a straight line.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.regplot(data=tips, x=\"total_bill\", y=\"tip\", ___=2)\nplt.show()",
   "a": [
    [
     "order"
    ]
   ],
   "o": "",
   "e": "`order=2` fits a parabola.",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+scatter+area lines=1 points=244 t='' x='total_bill' y='tip' leg=None xt=['0', '10', '20', '30', '40', '50', '60'] h=[] tx=0\n#sns regplot",
   "img": [
    "img/ex-sns2-2.webp"
   ]
  },
  {
   "q": "Write the values in the heatmap cells.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ncorr = tips[[\"total_bill\", \"tip\", \"size\"]].corr()\nsns.heatmap(corr, ___=True, fmt=\".2f\")\nplt.show()",
   "a": [
    [
     "annot"
    ]
   ],
   "o": "",
   "e": "`annot=True` writes each value; `fmt=` sets its format.",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh+text meshes=1 t='' x='' y='' leg=None xt=['total_bill', 'tip', 'size'] h=[] tx=9\n#sns heatmap",
   "img": [
    "img/ex-sns2-3.webp"
   ]
  },
  {
   "q": "Put the white colour at 0 for a diverging scale.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ncorr = tips[[\"total_bill\", \"tip\", \"size\"]].corr()\nsns.heatmap(corr, cmap=\"coolwarm\", ___=0)\nplt.show()",
   "a": [
    [
     "center"
    ]
   ],
   "o": "",
   "e": "`center=0` makes 0 the middle colour of the scale.",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh meshes=1 t='' x='' y='' leg=None xt=['total_bill', 'tip', 'size'] h=[] tx=0\n#sns heatmap",
   "img": [
    "img/ex-sns2-4.webp"
   ]
  },
  {
   "q": "Draw every pair of the chosen columns.",
   "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.___(tips, vars=[\"total_bill\", \"tip\", \"size\"])\nplt.show()",
   "a": [
    [
     "pairplot"
    ]
   ],
   "o": "",
   "e": "pairplot draws a scatter for every pair and each column's shape on the diagonal.",
   "sum": "#fig1 axes=12 sup='' cbar=0 leg=None\n#ax1   t='' x='' y='total_bill' leg=None xt=[] h=[] tx=0\n#ax2 scatter points=244 t='' x='tip' y='total_bill' leg=None xt=[] h=[] tx=0\n#ax3 scatter points=244 t='' x='size' y='total_bill' leg=None xt=[] h=[] tx=0\n#ax4 scatter points=244 t='' x='total_bill' y='tip' leg=None xt=[] h=[] tx=0\n#ax5   t='' x='' y='' leg=None xt=[] h=[] tx=0\n#ax6 scatter points=244 t='' x='size' y='tip' leg=None xt=[] h=[] tx=0\n#ax7 scatter points=244 t='' x='total_bill' y='size' leg=None xt=['0', '20', '40', '60'] h=[] tx=0\n#ax8 scatter points=244 t='' x='tip' y='size' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[] tx=0\n#ax9   t='' x='size' y='' leg=None xt=['0', '2', '4', '6', '8'] h=[] tx=0\n#ax10 bar bars=14 t='' x='total_bill' y='Count' leg=None xt=['0', '20', '40', '60'] h=[2.0, 14.0, 45.0, 48.0, 39.0, 30.0, 21.0, 15.0, 9.0, 7.0, 6.0, 2.0] tx=0\n#ax11 bar bars=18 t='' x='tip' y='Count' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[17.0, 28.0, 53.0, 25.0, 49.0, 19.0, 21.0, 4.0, 16.0, 4.0, 1.0, 4.0] tx=0\n#ax12 bar bars=16 t='' x='size' y='Count' leg=None xt=['0', '2', '4', '6', '8'] h=[4.0, 0.0, 0.0, 156.0, 0.0, 0.0, 38.0, 0.0, 0.0, 37.0, 0.0, 0.0] tx=0\n#sns pairplot PairGrid",
   "img": [
    "img/ex-sns2-5.webp"
   ]
  }
 ]
};
