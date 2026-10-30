chapter({
  id: "variables", part: 1, title: "Variables and data types", nav: "Variables & data types", time: "45 min", lvl: "Beginner",
  keys: "variable name assign type int float str bool none complex casting input id isinstance dynamic typing keywords",
  lead: "How Python stores values in named variables, the main types of data, and how to convert one type into another.",
  goals: [
    "What a variable is and how `=` works",
    "The rules for naming variables",
    "The basic data types: `int`, `float`, `str`, `bool`, `None` and `complex`",
    "How to check a type with `type()` and `isinstance()`",
    "How to convert types (casting), and why `input()` always gives you text"
  ],
  src: ["Course notebook da_cohort_13_first.ipynb", "W3Schools: Variables, Data Types, Numbers, Casting, Booleans, None"],
  body: [
    { t: "h", text: "What is a variable?" },
    { t: "p", b: "A ==variable== is a **name** that points to a **value** stored in the computer's memory. You create one by writing a name, an equals sign, and a value." },
    { t: "code", c: R`
name = "Raman"
age = 16
weight = 77.43
is_eligible = False
print(name, age, weight, is_eligible)`, o: R`Raman 16 77.43 False` },
    { t: "fig", svg: V.refs({ vars: [["name", 0], ["age", 1], ["weight", 2], ["is_eligible", 3]], objs: [{ v: "\"Raman\"", t: "str" }, { v: "16", t: "int" }, { v: "77.43", t: "float" }, { v: "False", t: "bool" }], label: "Four name tags pointing at four values" }), cap: "Each variable is a name tag. It points at a value stored in memory." },
    { t: "note", k: "like", b: "Think of a variable as a **name tag** stuck on a box. The box holds the value. When you write `age = 17` later, you move the tag to a new box with 17 in it." },
    { t: "note", k: "key", h: "= does not mean equals", b: "In maths, `=` means \"is equal to\". In Python, `=` means **store the value on the right in the name on the left**. To check if two things are equal, Python uses `==` (two equals signs). You will see this in the Operators chapter." },
    { t: "h", text: "Rules for naming variables" },
    { t: "p", b: "Your course gave three simple rules: **no spaces**, **never start with a number**, and **don't use reserved words**. Here is the full list." },
    { t: "table", head: ["Rule", "Good", "Bad"], rows: [
      ["Use letters, numbers and underscore `_` only", "`ticket_price`", "`ticket-price`, `ticket price`"],
      ["Must start with a letter or `_`", "`num1`, `_temp`", "`1num`, `2nd_place`"],
      ["Cannot be a Python keyword", "`class_name`", "`class`, `if`, `for`, `while`"],
      ["Case-sensitive", "`name` and `Name` are two different variables", ""]
    ]},
    { t: "code", c: R`
name = "Raman"
Name = "Rajveer"     # a different variable
print(name)
print(Name)`, o: R`
Raman
Rajveer` },
    { t: "p", b: "**Keywords** are words Python has reserved for itself: `False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield`. You cannot use them as names." },
    { t: "note", k: "tip", h: "Naming style", b: "Python programmers usually write `snake_case`: small letters with underscores, like `ticket_price` or `total_sales`. Your course notebooks also use `camelCase` like `ticketPrice`. Both work. Pick one and stay consistent. Most important: choose names that say what the value is. `total_sales` beats `ts` or `x`." },
    { t: "h", text: "Assigning many values at once" },
    { t: "code", c: R`
a, b, c = "Orange", "Banana", "Cherry"   # one value each
print(a, b, c)

x = y = z = 0                            # same value for all
print(x, y, z)

p, q = 1, 2
p, q = q, p                              # swap in one line
print(p, q)`, o: R`
Orange Banana Cherry
0 0 0
2 1` },
    { t: "note", k: "tip", b: "The swap trick `p, q = q, p` is a Python favourite. In many other languages you need a third temporary variable to swap two values." },
    { t: "h", text: "The basic data types" },
    { t: "p", b: "Every value has a ==type==. The type decides what you can do with it. You can add two numbers, but you cannot divide a name by 2." },
    { t: "mm", title: "Python data types at a glance", root: "Data types", kids: [
      { t: "Numbers", k: ["int: 16, -3, 2500", "float: 77.43, 0.5", "complex: 3+5j"] },
      { t: "Text", k: ["str: \"Raman\", 'Jaipur'"] },
      { t: "Yes / No", k: ["bool: True, False"] },
      { t: "Nothing", k: ["NoneType: None"] },
      { t: "Collections", k: ["list [1, 2, 3]", "tuple (1, 2)", "set {1, 2}", "dict {\"a\": 1}"] }
    ]},
    { t: "table", head: ["Type", "Name", "Example", "Used for"], rows: [
      ["`int`", "integer", "`16`, `-3`, `2500`", "Whole numbers: counts, quantities, ages"],
      ["`float`", "floating point", "`77.43`, `0.5`, `3.0`", "Numbers with a decimal point: prices, weights"],
      ["`str`", "string", "`\"Raman\"`, `'Jaipur'`", "Text"],
      ["`bool`", "boolean", "`True`, `False`", "Yes or no answers"],
      ["`NoneType`", "None", "`None`", "\"No value yet\""],
      ["`complex`", "complex number", "`3 + 5j`", "Engineering maths. Rare in data analysis"]
    ]},
    { t: "p", b: "Use `type()` to ask Python what type a value is." },
    { t: "code", c: R`
print(type(67))
print(type(77.43))
print(type("Raman"))
print(type(False))
print(type(None))
print(type(3 + 5j))`, o: R`
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>
<class 'complex'>` },
    { t: "p", b: "`isinstance()` answers a yes or no question: is this value of this type?" },
    { t: "code", c: R`
print(isinstance(25, int))
print(isinstance("25", int))`, o: R`
True
False` },
    { t: "note", k: "trap", b: "`\"25\"` with quotes is **text**, not a number. It looks like a number, but Python treats it like the word \"twenty-five\". This is the most common beginner bug, and it usually comes from `input()` or from reading a file." },
    { t: "h", text: "Numbers: int and float" },
    { t: "code", c: R`
big = 1_000_000          # underscores just make it easier to read
print(big)
print(2 ** 100)          # ints can be as big as you like
print(7 / 2)             # / always gives a float
print(type(10 / 2))`, o: R`
1000000
1267650600228229401496703205376
3.5
<class 'float'>` },
    { t: "note", k: "trap", h: "Trap! Decimals are not exact", b: "Computers store decimals in binary, so some simple decimals cannot be stored exactly. Never compare money with `==`. Round first.", c: R`
print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
print(round(0.1 + 0.2, 2))`, o: R`
0.30000000000000004
False
0.3` },
    { t: "note", k: "trap", h: "Trap! round() rounds half to even", b: "Python's `round()` sends an exact .5 to the nearest **even** number. This is called banker's rounding. It surprises everyone the first time.", c: R`
print(round(2.5))
print(round(3.5))
print(round(7.456, 2))`, o: R`
2
4
7.46` },
    { t: "h", text: "Booleans and None" },
    { t: "p", b: "A ==boolean== is either `True` or `False`, always with a capital first letter. Comparisons give you booleans. `None` means **no value at all**. It is often used as a starting value before you know the real one." },
    { t: "code", c: R`
is_paid = True
print(10 > 3)
print(type(is_paid))

discount = None          # not decided yet
print(discount)`, o: R`
True
<class 'bool'>
None` },
    { t: "h", text: "Dynamic typing" },
    { t: "p", b: "Python is ==dynamically typed==. You never declare a type. Python looks at the value and works it out. The same name can even hold a different type later." },
    { t: "anim", title: "Variables move, values stay", trace: { code: R`
x = 5
y = x
x = 10
print(x, y)
x = "ten"
print(type(x))`, steps: [
      { l: 1, v: { x: ["5", "int"] }, c: "Python creates the value 5 and points the name `x` at it." },
      { l: 2, v: { y: ["5", "int"] }, c: "`y = x` means: point `y` at the value `x` has **right now**. Both are 5." },
      { l: 3, v: { x: ["10", "int"] }, c: "Now `x` points at a new value, 10. Look: `y` did **not** change. It still holds 5." },
      { l: 4, o: "10 5\n", c: "So the output is `10 5`. Changing one variable never changes another number variable." },
      { l: 5, v: { x: ["\"ten\"", "str"] }, c: "`x` now holds text. Its type changed from int to str. Python allows this. That is dynamic typing." },
      { l: 6, o: "<class 'str'>\n", c: "`type(x)` confirms it is now a string." }
    ]}},
    { t: "h", text: "Type casting: converting between types" },
    { t: "p", b: "==Casting== means converting a value to another type. You use the type name like a function." },
    { t: "table", head: ["Code", "Result", "Note"], rows: [
      ["`int(\"25\")`", "`25`", "Text to whole number"],
      ["`float(\"37456.67\")`", "`37456.67`", "Text to decimal"],
      ["`str(100)`", "`\"100\"`", "Number to text"],
      ["`int(3.99)`", "`3`", "Cuts off the decimal. It does **not** round"],
      ["`float(7)`", "`7.0`", "Whole number to decimal"],
      ["`int(\"3.5\")`", "Error", "`int()` cannot read a decimal point in text. Use `int(float(\"3.5\"))`"],
      ["`bool(0)`, `bool(\"\")`", "`False`", "Zero and empty text are False"],
      ["`bool(\"False\")`", "`True`", "Any non-empty text is True, even the word False"]
    ]},
    { t: "code", c: R`
print(int("25") + 5)
print(float("37456.67"))
print(str(100) + " rupees")
print(int(3.99))
print(bool(0), bool(5), bool(""), bool("hi"))`, o: R`
30
37456.67
100 rupees
3
False True False True` },
    { t: "code", ttl: "This one fails", c: R`print(int("3.5"))`, o: R`ValueError: invalid literal for int() with base 10: '3.5'`, err: true },
    { t: "h", text: "input() always gives you text" },
    { t: "p", b: "`input()` pauses the program, shows a message, and waits for the user to type something. Whatever the user types comes back as a ==string==, even if they type a number. This example is from your course notebook." },
    { t: "code", nr: 1, c: R`
ticket_price = "500"
seats = int(input("Please enter the no of seats : "))
print(type(seats))

total_price = int(ticket_price) * seats
print(total_price)`, o: R`
Please enter the no of seats : 5
<class 'int'>
2500` },
    { t: "note", k: "trap", h: "Trap! Text times a number repeats the text", b: "If you forget to convert, Python does not crash. It quietly does something else. Multiplying text by a number **repeats** the text.", c: R`
seats = "3"            # what input() gives you
print(seats * 2)
print("500" * 3)`, o: R`
33
500500500` },
    { t: "pred", chk: 1, c: R`
price = "250"
qty = 2
print(int(price) * qty)`, o: ["`250250`", "`500`", "`\"500\"`", "An error"], a: 1, e: "`int(price)` turns the text \"250\" into the number 250, so the maths works: 250 * 2 = 500." },
    { t: "prac", items: [
      { q: "Create variables for a product: name \"Smart Phone\", selling price 20000, quantity 10. Print the total sales (price times quantity).", sol: R`
product = "Smart Phone"
selling_price = 20000
qty = 10
sales = selling_price * qty
print(product, "sales:", sales)`, out: R`Smart Phone sales: 200000` },
      { q: "The variable `discount = \"10\"` holds text. Convert it and work out 10% of 200000.", hint: "Convert with `float()` and divide by 100.", sol: R`
discount = "10"
sales = 200000
total_discount = sales * (float(discount) / 100)
print(total_discount)`, out: R`20000.0` },
      { q: "Swap the values of `a = \"tea\"` and `b = \"coffee\"` without using a third variable.", sol: R`
a = "tea"
b = "coffee"
a, b = b, a
print(a, b)`, out: R`coffee tea` },
      { q: "Predict the type of each value, then check with `type()`: `10`, `10.0`, `\"10\"`, `10 > 5`.", sol: R`
print(type(10), type(10.0), type("10"), type(10 > 5))`, out: R`<class 'int'> <class 'float'> <class 'str'> <class 'bool'>` }
    ]}
  ],
  take: [
    "A variable is a name pointing at a value. `=` stores, `==` compares.",
    "Names: letters, digits and `_`, no spaces, cannot start with a digit, no keywords, case matters.",
    "Main types: `int`, `float`, `str`, `bool`, `None`. Check with `type()`.",
    "`input()` always returns a `str`. Convert with `int()` or `float()` before doing maths.",
    "`int()` cuts decimals off. `round()` rounds .5 to the nearest even number. Decimals like 0.1 are not exact."
  ],
  quiz: [
    { q: "Which of these is a valid variable name?", o: ["`2nd_place`", "`ticket price`", "`ticket_price`", "`class`"], a: 2, e: "Names cannot start with a digit, cannot contain spaces, and cannot be keywords like `class`." },
    { q: "What does this print?", c: R`print(type(77.43))`, o: ["`<class 'int'>`", "`<class 'float'>`", "`<class 'str'>`", "`<class 'decimal'>`"], a: 1, chk: 1, e: "Any number with a decimal point is a `float`." },
    { q: "What does this print?", c: R`
x = 5
y = x
x = 10
print(y)`, o: ["`5`", "`10`", "`15`", "An error"], a: 0, chk: 1, e: "`y` took the value 5. Pointing `x` at 10 later does not change `y`." },
    { q: "What type does `input()` return when the user types 42?", o: ["`str`", "`int`", "`float`", "It depends on what the user types"], a: 0, e: "`input()` always returns text. Convert it with `int()` if you need a number." },
    { q: "What does this print?", c: R`print(int(3.99))`, o: ["`4`", "`3`", "`3.99`", "An error"], a: 1, chk: 1, e: "`int()` simply cuts off the decimal part. It does not round." },
    { q: "What does this print?", c: R`print(bool("False"))`, o: ["`False`", "`True`", "An error", "`None`"], a: 1, chk: 1, e: "Any non-empty string is True, even the text \"False\". Only the empty string `\"\"` is False." },
    { q: "What does this print?", c: R`print(0.1 + 0.2 == 0.3)`, o: ["`True`", "`False`", "An error", "`0.3`"], a: 1, chk: 1, e: "0.1 + 0.2 gives 0.30000000000000004 because decimals are stored in binary. Round before comparing." },
    { q: "What does this print?", c: R`
a, b = 1, 2
a, b = b, a
print(a, b)`, o: ["`1 2`", "`2 1`", "`2 2`", "An error"], a: 1, chk: 1, e: "`a, b = b, a` swaps the two values in one line." },
    { q: "Which line causes an error?", o: ["`int(\"25\")`", "`float(\"2.5\")`", "`int(\"2.5\")`", "`str(2.5)`"], a: 2, e: "`int()` cannot read text that has a decimal point. Use `int(float(\"2.5\"))` instead." }
  ],
  cards: [
    ["What is a variable?", "A **name** that points to a **value** in memory. Created with `name = value`."],
    ["What is the difference between `=` and `==`?", "`=` **stores** a value in a variable. `==` **compares** two values and gives True or False."],
    ["Three naming rules for variables", "No spaces, cannot start with a digit, cannot be a keyword like `if` or `class`. Names are case-sensitive."],
    ["Name the 5 basic data types", "`int` (whole number), `float` (decimal), `str` (text), `bool` (True/False), `None` (no value)."],
    ["How do you check a value's type?", "`type(value)`, for example `type(5)` gives `<class 'int'>`. Or `isinstance(value, int)` for a True/False answer."],
    ["What does `input()` return?", "Always a **string**, even if the user types a number. Convert with `int()` or `float()`."],
    ["What is `\"500\" * 3`?", "`\"500500500\"`. Text times a number repeats the text."],
    ["What does `int(3.99)` give?", "`3`. `int()` cuts off the decimal. It does not round."],
    ["Why is `0.1 + 0.2` not exactly `0.3`?", "Decimals are stored in binary and some cannot be stored exactly. Use `round()` before comparing."],
    ["How do you swap two variables in Python?", "`a, b = b, a`"]
  ],
  cheat: [
    ["x = 5", "Store 5 in a variable called x"],
    ["a, b, c = 1, 2, 3", "Assign several variables at once"],
    ["a, b = b, a", "Swap two values"],
    ["type(x)", "Show the type of x"],
    ["isinstance(x, int)", "True if x is an int"],
    ["int(\"25\")  float(\"2.5\")  str(10)", "Convert between types"],
    ["round(3.14159, 2)", "Round to 2 decimal places (3.14)"],
    ["int(input(\"Qty: \"))", "Ask the user for a number"]
  ]
});
