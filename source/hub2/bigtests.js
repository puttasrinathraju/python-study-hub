/* Big Tests: 25 questions per chapter. Generated: every code answer was run in real Python. */
var BIGTESTS = {
 "intro": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Your first program: print()",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Price\")\nprint(250 + 50)\nprint(\"250 + 50\")",
   "e": "Text inside quotes prints exactly as written. Without quotes, Python does the maths first and prints the answer.",
   "ans": "Price\n300\n250 + 50"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "Print `Welcome to Python` on one line and `Day 1 of my data journey` on the next line.",
   "starter": "# Write two print() lines\n",
   "sol": "print(\"Welcome to Python\")\nprint(\"Day 1 of my data journey\")",
   "e": "Each `print()` starts a new line. Text goes inside quotes.",
   "out": "Welcome to Python\nDay 1 of my data journey"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "A shop sold 48 pens in the morning and 37 pens in the evening. Print the total. Let Python do the maths.",
   "starter": "# Total pens sold today\n",
   "sol": "# Total pens sold today\nprint(48 + 37)",
   "e": "Put the maths inside `print()` with no quotes, and Python works out `85` for you.",
   "out": "85"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "A cinema hall has 18 rows with 24 seats in each row. Print the total number of seats.",
   "starter": "# Seats in the hall\n",
   "sol": "# Seats in the hall\nprint(18 * 24)",
   "e": "In Python, multiply uses `*`. Python works out `18 * 24` and prints `432`.",
   "out": "432"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "The syntax rules that matter",
   "q": "This code should print `Good morning`, but it crashes. Fix it.",
   "c": "Print(\"Good morning\")",
   "fixed": "print(\"Good morning\")",
   "e": "Python is case-sensitive. The function is `print` in small letters. `Print` is a different name that does not exist, so you get a `NameError`.",
   "want": "Good morning",
   "got": "NameError: name 'Print' is not defined. Did you mean: 'print'?"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "The syntax rules that matter",
   "q": "This code should print `Hyderabad`, but it crashes. Fix it.",
   "c": "print(\"Hyderabad')",
   "fixed": "print(\"Hyderabad\")",
   "e": "Quotes must match. The text starts with `\"`, so it must also end with `\"`. Mixed quotes give a `SyntaxError`.",
   "want": "Hyderabad",
   "got": "SyntaxError: unterminated string literal (detected at line 1)"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Comments: notes for humans",
   "q": "This code prints three lines. Turn the middle line into a comment, so only the first and the last lines print.",
   "starter": "print(\"Step 1: open the file\")\nprint(\"Step 2: this is a draft line\")\nprint(\"Step 3: save the report\")\n",
   "sol": "print(\"Step 1: open the file\")\n# print(\"Step 2: this is a draft line\")\nprint(\"Step 3: save the report\")",
   "e": "Put `#` at the start of a line and Python skips it. This is a handy way to switch a line off without deleting it.",
   "out": "Step 1: open the file\nStep 3: save the report"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "The syntax rules that matter",
   "q": "Type exactly what this code prints.",
   "c": "print('Guntur', \"Vizag\")",
   "e": "Single quotes and double quotes both make text, and the quotes themselves are not printed. The comma puts one space between the two values.",
   "ans": "Guntur Vizag"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Comments: notes for humans",
   "q": "Type exactly what this code prints.",
   "c": "# print(\"A\")\nprint(\"B\")  # print(\"C\")\nprint(\"D\")",
   "e": "Python ignores everything after `#` on a line, even if it looks like code. Only `B` and `D` are printed.",
   "ans": "B\nD"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "How Python runs your code",
   "q": "A shop sold 45 boxes with 12 bottles in each box. Use ONE `print()` with a comma to print `Units sold: 540`. Let Python work out the 540.",
   "starter": "# One print() with a comma\n",
   "sol": "print(\"Units sold:\", 45 * 12)",
   "e": "A comma inside `print()` separates two values and puts one space between them: the text, then the answer of the maths.",
   "out": "Units sold: 540"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "How Python runs your code",
   "q": "Type exactly what this code prints.",
   "c": "city = \"Pune\"\ntemp = 29\nprint(city, temp)\ntemp = temp + 3\nprint(city, temp)",
   "e": "Python runs from top to bottom. Line 4 works out `29 + 3` first, then stores 32 back in `temp`. The old value is gone.",
   "ans": "Pune 29\nPune 32"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "Print this line exactly: `Total: 3 x 40 = 120`. Python must work out the `120`. The rest is text.",
   "starter": "# The left part is text, the answer is maths\n",
   "sol": "print(\"Total: 3 x 40 =\", 3 * 40)",
   "e": "Everything up to `=` is text, so it goes in quotes. The answer is maths, so it goes after a comma without quotes.",
   "out": "Total: 3 x 40 = 120"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "A train left with 640 passengers. At the first stop 85 got off and 120 got on. Print the number of passengers now, in one line of maths.",
   "starter": "# Passengers on the train now\n",
   "sol": "# Passengers on the train now\nprint(640 - 85 + 120)",
   "e": "`640 - 85 + 120` is worked out from left to right: 555, then 675.",
   "out": "675"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Comments: notes for humans",
   "q": "The second line prints the wrong bill: 4 coffees at 25 rupees each. Switch that line off with a comment, then add a new line under it that prints the right bill.",
   "starter": "print(\"Bill for 4 coffees\")\nprint(4 + 25)\n",
   "sol": "print(\"Bill for 4 coffees\")\n# print(4 + 25)\nprint(4 * 25)",
   "e": "`#` switches off the wrong line but keeps it for reference. The new line uses `*` to multiply: 4 times 25 is 100.",
   "out": "Bill for 4 coffees\n100"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "How Python runs your code",
   "q": "The steps print in the wrong order. Move the lines so the output goes `1. Boil water`, `2. Add tea leaves`, `3. Serve hot`.",
   "starter": "print(\"3. Serve hot\")\nprint(\"1. Boil water\")\nprint(\"2. Add tea leaves\")\n",
   "sol": "print(\"1. Boil water\")\nprint(\"2. Add tea leaves\")\nprint(\"3. Serve hot\")",
   "e": "Python always runs lines from top to bottom, so the order of the lines is the order of the output.",
   "out": "1. Boil water\n2. Add tea leaves\n3. Serve hot"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "The syntax rules that matter",
   "q": "This code should print `Pass`, but it stops with an `IndentationError`. Fix it.",
   "c": "if 75 > 40:\nprint(\"Pass\")",
   "fixed": "if 75 > 40:\n    print(\"Pass\")",
   "e": "A line that ends with a colon `:` starts a block. The line inside the block must be pushed right by 4 spaces.",
   "want": "Pass",
   "got": "IndentationError: expected an indented block after 'if' statement on line 1"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Errors are normal",
   "q": "This code should print `Total: 500`, but it stops with a `TypeError`. Fix it.",
   "c": "print(\"Total: \" + 500)",
   "fixed": "print(\"Total:\", 500)",
   "e": "`+` cannot join text and a number: that is the `TypeError`. A comma inside `print()` shows both values, with a space between them.",
   "want": "Total: 500",
   "got": "TypeError: can only concatenate str (not \"int\") to str"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "A tea stall sold 12 cups on Monday, 15 on Tuesday and 9 on Wednesday, at 40 rupees a cup. Use ONE `print()` to show the sales of each day: `480 600 360`.",
   "starter": "# Sales of three days on one line\n",
   "sol": "print(12 * 40, 15 * 40, 9 * 40)",
   "e": "One `print()` can show many values. Python works out each maths part, and the commas put a space between the answers.",
   "out": "480 600 360"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Your first program: print()",
   "q": "Print this bill exactly, one line each. Python must work out every number after `=`:\n`Tea x 2 = 30` (15 rupees each)\n`Samosa x 3 = 36` (12 rupees each)\n`Total = 66` (add the two answers).",
   "starter": "# Bill: tea is 15, samosa is 12\n",
   "sol": "print(\"Tea x 2 =\", 2 * 15)\nprint(\"Samosa x 3 =\", 3 * 12)\nprint(\"Total =\", 30 + 36)",
   "e": "Each line is text, a comma, then the maths. The text holds the `x` and `=` signs, and Python works out the numbers.",
   "out": "Tea x 2 = 30\nSamosa x 3 = 36\nTotal = 66"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "How Python runs your code",
   "q": "Start with `cash = 2000` and print `Cash: 2000`. A customer pays 350: add it to `cash` and print `Cash: 2350`. Then you pay 500 rent: take it from `cash` and print `Cash: 1850`.",
   "starter": "cash = 2000\n",
   "sol": "cash = 2000\nprint(\"Cash:\", cash)\ncash = cash + 350\nprint(\"Cash:\", cash)\ncash = cash - 500\nprint(\"Cash:\", cash)",
   "e": "`cash = cash + 350` works out the right side first, then stores the answer back in `cash`. Each `print()` shows the value at that moment.",
   "out": "Cash: 2000\nCash: 2350\nCash: 1850"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "The syntax rules that matter",
   "q": "This code has three mistakes: a note that is not a comment, a missing colon, and a capital letter. It should print `Report`, then `Done`. Fix it.",
   "c": "monthly report starts here\nif 10 > 3\n    print(\"Report\")\nPrint(\"Done\")",
   "fixed": "# monthly report starts here\nif 10 > 3:\n    print(\"Report\")\nprint(\"Done\")",
   "e": "A note needs `#` in front. A line that starts a block needs `:` at the end. And `print` is always written in small letters.",
   "want": "Report\nDone",
   "got": "SyntaxError: invalid syntax"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Comments: notes for humans",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Room #12\")  # top floor\n# print(\"Room #14\")",
   "e": "A `#` inside quotes is just text, so `Room #12` prints in full. The `#` after the closing bracket starts a comment, and the last line is all comment.",
   "ans": "Room #12"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "How Python runs your code",
   "q": "This program prints the steps in the wrong order and has a debug line that should not print. Put the steps in order and switch off the debug line with a comment. The output must be `Step 1: load data`, `Step 2: clean data`, `Step 3: make chart`.",
   "starter": "print(\"Step 2: clean data\")\nprint(\"DEBUG: checking\")\nprint(\"Step 3: make chart\")\nprint(\"Step 1: load data\")\n",
   "sol": "print(\"Step 1: load data\")\nprint(\"Step 2: clean data\")\n# print(\"DEBUG: checking\")\nprint(\"Step 3: make chart\")",
   "e": "Python runs lines from top to bottom, so move the lines into the right order. A `#` in front of the debug line keeps it in the file but stops it from running.",
   "out": "Step 1: load data\nStep 2: clean data\nStep 3: make chart"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Errors are normal",
   "q": "Each of these lines has a mistake:\n1. `print(\"Hi)`\n2. `prnt(\"Hi\")`\n3. `print(\"Age: \" + 25)`\nPrint the name of the error each one gives, one per line, in this order. (Try running each line to read its last error line.)",
   "starter": "# Print the three error names\n",
   "sol": "print(\"SyntaxError\")\nprint(\"NameError\")\nprint(\"TypeError\")",
   "e": "A missing quote is a grammar mistake: `SyntaxError`. A misspelt name is unknown to Python: `NameError`. Text + number is a `TypeError`.",
   "out": "SyntaxError\nNameError\nTypeError"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The syntax rules that matter",
   "q": "Python is case-sensitive, so `total`, `Total` and `TOTAL` are three different names. Store 100 in `total`, 200 in `Total` and 300 in `TOTAL`. Then print all three with one `print()` in this order: `TOTAL`, `total`, `Total`.",
   "starter": "# Three different names\n",
   "sol": "total = 100\nTotal = 200\nTOTAL = 300\nprint(TOTAL, total, Total)",
   "e": "Because capitals matter, the three names hold three separate values. The output is `300 100 200`.",
   "out": "300 100 200"
  }
 ],
 "variables": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "The basic data types",
   "q": "Type exactly what this code prints.",
   "c": "print(type(250))\nprint(type(250.0))\nprint(type(\"250\"))",
   "e": "`250` is a whole number (`int`), `250.0` has a decimal point (`float`) and `\"250\"` is in quotes, so it is text (`str`).",
   "ans": "<class 'int'>\n<class 'float'>\n<class 'str'>"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "What is a variable?",
   "q": "Store `\"Laptop\"` in a variable called `product` and `55000` in a variable called `price`. Then print both with one `print()`.",
   "starter": "# Two variables, then one print()\n",
   "sol": "product = \"Laptop\"\nprice = 55000\nprint(product, price)",
   "e": "`=` stores the value on the right in the name on the left. A comma in `print()` shows both values with a space between them.",
   "out": "Laptop 55000"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Assigning many values at once",
   "q": "In ONE line, store `\"Delhi\"`, `\"Mumbai\"` and `\"Chennai\"` in `city1`, `city2` and `city3`. Then print the three cities.",
   "starter": "# Assign all three in one line\n",
   "sol": "city1, city2, city3 = \"Delhi\", \"Mumbai\", \"Chennai\"\nprint(city1, city2, city3)",
   "e": "Put the names on the left and the values on the right, both separated by commas. The first value goes to the first name, and so on.",
   "out": "Delhi Mumbai Chennai"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Rules for naming variables",
   "q": "This code should print `Ravi`, but it crashes. Fix the variable name.",
   "c": "2nd_place = \"Ravi\"\nprint(2nd_place)",
   "fixed": "second_place = \"Ravi\"\nprint(second_place)",
   "e": "A variable name cannot start with a digit. `second_place` (or `place_2`) follows the rules.",
   "want": "Ravi",
   "got": "SyntaxError: invalid decimal literal"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Type casting: converting between types",
   "q": "`price = \"450\"` is text. Convert it to a number and print the price of 3 items.",
   "starter": "price = \"450\"\n",
   "sol": "price = \"450\"\nprint(int(price) * 3)",
   "e": "`int(\"450\")` turns the text into the number 450, so the maths works: 1350. Without `int()`, `\"450\" * 3` would repeat the text.",
   "out": "1350"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Booleans and None",
   "q": "Type exactly what this code prints.",
   "c": "is_paid = True\ndiscount = None\nprint(is_paid, discount)\nprint(type(discount))",
   "e": "`True` is a bool. `None` means \"no value yet\", and its type is `NoneType`.",
   "ans": "True None\n<class 'NoneType'>"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Numbers: int and float",
   "q": "Print the answer of 7 divided by 2. On the next line, print the type of `10 / 2`.",
   "starter": "# Division with /\n",
   "sol": "print(7 / 2)\nprint(type(10 / 2))",
   "e": "`/` always gives a float, even when the answer is a whole number: `10 / 2` is `5.0`.",
   "out": "3.5\n<class 'float'>"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Type casting: converting between types",
   "q": "This code should print `30`, but it crashes. Fix it.",
   "c": "age = \"25\"\nprint(age + 5)",
   "fixed": "age = \"25\"\nprint(int(age) + 5)",
   "e": "`\"25\"` is text, and text + number gives a `TypeError`. Convert it first with `int(age)`.",
   "want": "30",
   "got": "TypeError: can only concatenate str (not \"int\") to str"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Assigning many values at once",
   "q": "`morning_shift = \"Asha\"` and `night_shift = \"Ravi\"`. Swap them in ONE line, then print `morning_shift` and `night_shift`.",
   "starter": "morning_shift = \"Asha\"\nnight_shift = \"Ravi\"\n",
   "sol": "morning_shift = \"Asha\"\nnight_shift = \"Ravi\"\nmorning_shift, night_shift = night_shift, morning_shift\nprint(morning_shift, night_shift)",
   "e": "`a, b = b, a` swaps two values in one line. Python reads the whole right side first, so nothing is lost.",
   "out": "Ravi Asha"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Type casting: converting between types",
   "q": "Type exactly what this code prints.",
   "c": "print(int(9.99), float(4), str(12) + \"3\")",
   "e": "`int()` cuts off the decimal part (it does not round), `float(4)` adds `.0`, and `str(12) + \"3\"` joins two pieces of text.",
   "ans": "9 4.0 123"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Numbers: int and float",
   "q": "`average = 82.4567`. Print it rounded to 2 decimal places, then rounded to a whole number, with one `print()`.",
   "starter": "average = 82.4567\n",
   "sol": "average = 82.4567\nprint(round(average, 2), round(average))",
   "e": "`round(x, 2)` keeps 2 decimal places. `round(x)` with no second number gives a whole number.",
   "out": "82.46 82"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Numbers: int and float",
   "q": "Type exactly what this code prints.",
   "c": "print(round(2.5), round(3.5), round(0.1 + 0.2, 2))",
   "e": "Python rounds an exact half to the nearest even number, so `round(2.5)` is 2 and `round(3.5)` is 4. `round(..., 2)` cleans up the tiny float error in `0.1 + 0.2`.",
   "ans": "2 4 0.3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "input() always gives you text",
   "q": "This text came from `input()`: `weight = \"62.5\"` (kilograms). Convert it and print the weight in grams (multiply by 1000).",
   "starter": "weight = \"62.5\"\n",
   "sol": "weight = \"62.5\"\nprint(float(weight) * 1000)",
   "e": "The text has a decimal point, so use `float()`, not `int()`. A float times 1000 is still a float: `62500.0`.",
   "out": "62500.0"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "input() always gives you text",
   "q": "`boxes` came from `input()`. This code should print `10`, but it prints `55`. Fix it.",
   "c": "boxes = \"5\"\nprint(boxes * 2)",
   "fixed": "boxes = \"5\"\nprint(int(boxes) * 2)",
   "e": "`input()` always gives text, and text * 2 repeats it: `\"55\"`. Convert it with `int()` first, then the maths works.",
   "want": "10",
   "got": "55"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Dynamic typing",
   "q": "Store `90` in `score` and print its type. Then store the text `\"ninety\"` in the same variable and print its type again.",
   "starter": "score = 90\n",
   "sol": "score = 90\nprint(type(score))\nscore = \"ninety\"\nprint(type(score))",
   "e": "A variable can hold any type, and the type can change when you store a new value. That is dynamic typing.",
   "out": "<class 'int'>\n<class 'str'>"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The basic data types",
   "q": "`value = 3.0`. Use `isinstance()` to print whether it is an `int`, and then whether it is a `float`, with one `print()`.",
   "starter": "value = 3.0\n",
   "sol": "value = 3.0\nprint(isinstance(value, int), isinstance(value, float))",
   "e": "`3.0` has a decimal point, so it is a float, not an int, even though it looks whole.",
   "out": "False True"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Rules for naming variables",
   "q": "This code should print `10A`, but it crashes. Fix the variable name.",
   "c": "class = \"10A\"\nprint(class)",
   "fixed": "class_name = \"10A\"\nprint(class_name)",
   "e": "`class` is a Python keyword, so it cannot be a variable name. Add a word, like `class_name`.",
   "want": "10A",
   "got": "SyntaxError: invalid syntax"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Numbers: int and float",
   "q": "A salary is 2,50,000 rupees a month. Write it with underscores (Indian style: `2_50_000`) and print the salary for 12 months.",
   "starter": "# Use underscores in the number\n",
   "sol": "monthly_salary = 2_50_000\nprint(monthly_salary * 12)",
   "e": "Underscores only make big numbers easier to read. Python ignores them, so `2_50_000` is just 250000.",
   "out": "3000000"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Type casting: converting between types",
   "q": "From a form: `units = \"12\"` and `unit_price = \"45.50\"`. Print the total as a float. On the next line, print the total as a whole number using `int()`.",
   "starter": "units = \"12\"\nunit_price = \"45.50\"\n",
   "sol": "units = \"12\"\nunit_price = \"45.50\"\ntotal = int(units) * float(unit_price)\nprint(total)\nprint(int(total))",
   "e": "Convert each piece of text to the right type: `int()` for the units and `float()` for the price. `int()` then cuts off the `.0`.",
   "out": "546.0\n546"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Type casting: converting between types",
   "q": "Type exactly what this code prints.",
   "c": "print(bool(0), bool(\"\"), bool(\" \"), bool(\"0\"), bool(-1))",
   "e": "Only zero and empty text are `False`. A space is not empty, `\"0\"` is text that is not empty, and `-1` is not zero, so they are all `True`.",
   "ans": "False False True True True"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Type casting: converting between types",
   "q": "This code should print `5.5`, but it crashes. Fix it.",
   "c": "rating = \"4.5\"\nprint(int(rating) + 1)",
   "fixed": "rating = \"4.5\"\nprint(float(rating) + 1)",
   "e": "`int()` cannot read text with a decimal point, so it gives a `ValueError`. Use `float()` for text like `\"4.5\"`.",
   "want": "5.5",
   "got": "ValueError: invalid literal for int() with base 10: '4.5'"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Assigning many values at once",
   "q": "Start three counters `wins`, `losses` and `draws` at 0 in ONE line. Then add 3 to `wins` and 1 to `losses`. Print all three with one `print()`.",
   "starter": "# One line for all three counters\n",
   "sol": "wins = losses = draws = 0\nwins = wins + 3\nlosses = losses + 1\nprint(wins, losses, draws)",
   "e": "`a = b = c = 0` gives the same value to all three. Then each one is updated on its own: `draws` stays 0.",
   "out": "3 1 0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Dynamic typing",
   "q": "`value = \"100\"`. Print its type. Then convert it to an int and print the new type. Then convert it to a float and print the value itself.",
   "starter": "value = \"100\"\n",
   "sol": "value = \"100\"\nprint(type(value))\nvalue = int(value)\nprint(type(value))\nvalue = float(value)\nprint(value)",
   "e": "Each conversion makes a new value of a new type, and storing it back in `value` changes its type. The float version of 100 is `100.0`.",
   "out": "<class 'str'>\n<class 'int'>\n100.0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "input() always gives you text",
   "q": "Pretend these came from `input()`: `name = \"Priya\"` and `age = \"21\"`. Print `Priya will be 26 in 5 years`, with Python working out the 26.",
   "starter": "name = \"Priya\"\nage = \"21\"\n",
   "sol": "name = \"Priya\"\nage = \"21\"\nprint(name, \"will be\", int(age) + 5, \"in 5 years\")",
   "e": "`age` is text, so convert it with `int()` before adding 5. Commas in `print()` join everything with single spaces.",
   "out": "Priya will be 26 in 5 years"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Type casting: converting between types",
   "q": "Three marks came in as text: `m1 = \"78\"`, `m2 = \"85\"`, `m3 = \"91\"`. Print their average, rounded to 1 decimal place.",
   "starter": "m1 = \"78\"\nm2 = \"85\"\nm3 = \"91\"\n",
   "sol": "m1 = \"78\"\nm2 = \"85\"\nm3 = \"91\"\naverage = (int(m1) + int(m2) + int(m3)) / 3\nprint(round(average, 1))",
   "e": "Convert each mark with `int()`, add them inside brackets, then divide by 3. `round(..., 1)` keeps 1 decimal place: 84.7.",
   "out": "84.7"
  }
 ],
 "output": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "print() with several values",
   "q": "Use ONE `print()` with `sep` to print `30-10-2026`. Give it the three numbers 30, 10 and 2026.",
   "starter": "# One print() with sep\n",
   "sol": "print(30, 10, 2026, sep=\"-\")",
   "e": "`sep` sets what goes between the values. The default is one space, and `sep=\"-\"` puts a dash there instead.",
   "out": "30-10-2026"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "print() with several values",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Loading\", end=\"\")\nprint(\"...\")\nprint(\"Done\")",
   "e": "`end=\"\"` stops the first `print()` from starting a new line, so `...` is printed right after `Loading`. The next `print()` ends normally.",
   "ans": "Loading...\nDone"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Quotes and escape characters",
   "q": "Print exactly: `It's a holiday`",
   "starter": "# Watch the apostrophe\n",
   "sol": "print(\"It's a holiday\")",
   "e": "Wrap the text in double quotes, and the apostrophe inside is just a character. (`'It\\'s a holiday'` also works.)",
   "out": "It's a holiday"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Joining and repeating text",
   "q": "`first = \"Sachin\"` and `last = \"Tendulkar\"`. Use `+` to print the full name with one space in the middle.",
   "starter": "first = \"Sachin\"\nlast = \"Tendulkar\"\n",
   "sol": "first = \"Sachin\"\nlast = \"Tendulkar\"\nprint(first + \" \" + last)",
   "e": "`+` glues text together with nothing in between, so add the space yourself: `\" \"`.",
   "out": "Sachin Tendulkar"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Joining and repeating text",
   "q": "Print a line of 25 `=` signs. Use `*`, do not type them all.",
   "starter": "# Repeat one character\n",
   "sol": "print(\"=\" * 25)",
   "e": "Text times a number repeats the text: `\"=\" * 25` gives 25 signs. Great for report lines.",
   "out": "========================="
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Joining and repeating text",
   "q": "This code should print `Rooms booked: 12`, but it crashes. Fix it.",
   "c": "rooms = 12\nprint(\"Rooms booked: \" + rooms)",
   "fixed": "rooms = 12\nprint(\"Rooms booked: \" + str(rooms))",
   "e": "`+` cannot join text and a number. Turn the number into text with `str()` first (or use an f-string).",
   "want": "Rooms booked: 12",
   "got": "TypeError: can only concatenate str (not \"int\") to str"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`name = \"Kiran\"` and `city = \"Vizag\"`. Use an f-string to print `Kiran lives in Vizag`.",
   "starter": "name = \"Kiran\"\ncity = \"Vizag\"\n",
   "sol": "name = \"Kiran\"\ncity = \"Vizag\"\nprint(f\"{name} lives in {city}\")",
   "e": "Put `f` before the quote, then each variable in `{ }`. Python fills in the values.",
   "out": "Kiran lives in Vizag"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Quotes and escape characters",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Line 1\\nLine 2\")",
   "e": "`\\n` inside text means new line, so the text is printed on two lines.",
   "ans": "Line 1\nLine 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`price = 1234.5`. Print `Price: 1234.50` (always 2 decimal places) using an f-string.",
   "starter": "price = 1234.5\n",
   "sol": "price = 1234.5\nprint(f\"Price: {price:.2f}\")",
   "e": "`:.2f` after the variable means a float with exactly 2 decimal places.",
   "out": "Price: 1234.50"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`population = 12345678`. Print `Population: 12,345,678` using an f-string.",
   "starter": "population = 12345678\n",
   "sol": "population = 12345678\nprint(f\"Population: {population:,}\")",
   "e": "`:,` adds a comma between every group of three digits. It makes big numbers easy to read.",
   "out": "Population: 12,345,678"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "f-strings: the best way to format",
   "q": "Type exactly what this code prints.",
   "c": "rate = 0.4567\nprint(f\"{rate:.1%}\", f\"{7:03d}\")",
   "e": "`.1%` multiplies by 100, keeps 1 decimal and adds `%`. `03d` pads a whole number with zeros to 3 digits.",
   "ans": "45.7% 007"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Quotes and escape characters",
   "q": "This code should print the file path `C:\\new\\table.csv`, but the output is broken. Fix it.",
   "c": "print(\"C:\\new\\table.csv\")",
   "fixed": "print(r\"C:\\new\\table.csv\")",
   "e": "`\\n` and `\\t` are escape characters (new line and tab). Put `r` before the quote to switch them off, or write each backslash twice: `\\\\`.",
   "want": "C:\\new\\table.csv",
   "got": "C:\new\table.csv"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Quotes and escape characters",
   "q": "This code should print `She said \"Hi\" to me`, but it crashes. Fix it.",
   "c": "print(\"She said \"Hi\" to me\")",
   "fixed": "print('She said \"Hi\" to me')",
   "e": "The double quote before `Hi` ends the text too early. Wrap the whole text in single quotes, or write `\\\"` for each quote inside.",
   "want": "She said \"Hi\" to me",
   "got": "SyntaxError: invalid syntax. Perhaps you forgot a comma?"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "print() with several values",
   "q": "Use TWO `print()` calls to print `Total: 450` on ONE line. The first prints `Total:` and must not end the line. The second prints the number 450.",
   "starter": "# Two print() calls, one line of output\n",
   "sol": "print(\"Total:\", end=\" \")\nprint(450)",
   "e": "`end=\" \"` ends the first print with a space instead of a new line, so the second print continues on the same line.",
   "out": "Total: 450"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Joining and repeating text",
   "q": "Type exactly what this code prints.",
   "c": "print(\"ab\" * 3 + \"!\")\nprint(\"-\" * 5)",
   "e": "`*` runs first: `\"ab\"` three times is `ababab`, then `+` adds the `!`.",
   "ans": "ababab!\n-----"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "f-strings: the best way to format",
   "q": "This code should print `Hello Ravi`, but it prints `Hello {name}`. Fix it.",
   "c": "name = \"Ravi\"\nprint(\"Hello {name}\")",
   "fixed": "name = \"Ravi\"\nprint(f\"Hello {name}\")",
   "e": "Without the `f` before the quote, `{name}` is plain text. The `f` switches the slots on.",
   "want": "Hello Ravi",
   "got": "Hello {name}"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`qty = 3` and `price = 45`. Use one f-string to print `3 x 45 = 135`. Python must work out the 135.",
   "starter": "qty = 3\nprice = 45\n",
   "sol": "qty = 3\nprice = 45\nprint(f\"{qty} x {price} = {qty * price}\")",
   "e": "A slot `{ }` can hold maths, not just a name. Python works out `qty * price` and puts the answer in the text.",
   "out": "3 x 45 = 135"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`items = 4` and `total = 760`. Use the f-string debug trick (a `=` inside the slot) to print `items=4 total=760`.",
   "starter": "items = 4\ntotal = 760\n",
   "sol": "items = 4\ntotal = 760\nprint(f\"{items=} {total=}\")",
   "e": "`{items=}` prints the name, an `=` and the value. It is a quick way to check variables while you debug.",
   "out": "items=4 total=760"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`units = 1250` and `price = 89.9`. Print the revenue as `Revenue: ₹112,375.00` (commas and 2 decimals).",
   "starter": "units = 1250\nprice = 89.9\n",
   "sol": "units = 1250\nprice = 89.9\nprint(f\"Revenue: ₹{units * price:,.2f}\")",
   "e": "`:,.2f` combines two specs: commas between thousands and exactly 2 decimals. The `₹` is just text before the slot.",
   "out": "Revenue: ₹112,375.00"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "Print this price list, one line per item. Each item name is left-aligned in 15 characters, and each price is right-aligned in 8 characters with 2 decimals.\nItems: Masala Dosa 60, Filter Coffee 25.5, Idli 40.",
   "starter": "# Name: <15, price: >8.2f\n",
   "sol": "print(f\"{'Masala Dosa':<15}{60:>8.2f}\")\nprint(f\"{'Filter Coffee':<15}{25.5:>8.2f}\")\nprint(f\"{'Idli':<15}{40:>8.2f}\")",
   "e": "`<15` pads the name with spaces on the right up to 15 characters. `>8.2f` pads the price on the left up to 8 characters, so the decimal points line up.",
   "out": "Masala Dosa       60.00\nFilter Coffee     25.50\nIdli              40.00"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "print() with several values",
   "q": "Type exactly what this code prints.",
   "c": "print(\"x\", \"y\", sep=\"--\", end=\"|\")\nprint(\"z\")",
   "e": "`sep=\"--\"` goes between `x` and `y`. `end=\"|\"` replaces the new line, so `z` is printed right after the `|`.",
   "ans": "x--y|z"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "f-strings: the best way to format",
   "q": "This code should print `Marks: 92.5`, but it prints something strange. Fix it.",
   "c": "marks = 92.456\nprint(f\"Marks: {marks:.1}\")",
   "fixed": "marks = 92.456\nprint(f\"Marks: {marks:.1f}\")",
   "e": "Without the `f`, `.1` means 1 significant digit, so Python writes `9e+01`. `.1f` means 1 decimal place.",
   "want": "Marks: 92.5",
   "got": "Marks: 9e+01"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Joining and repeating text",
   "q": "Print a banner of three lines: 20 `*` signs, then `MONTHLY REPORT` centred in 20 characters, then 20 `*` signs again.",
   "starter": "# Use * for the lines and ^ to centre\n",
   "sol": "print(\"*\" * 20)\nprint(f\"{'MONTHLY REPORT':^20}\")\nprint(\"*\" * 20)",
   "e": "`\"*\" * 20` repeats the star. `^20` centres the title in 20 characters: 3 spaces on each side of the 14 letters.",
   "out": "********************\n   MONTHLY REPORT   \n********************"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "f-strings: the best way to format",
   "q": "`invoice_no = 42`, `qty = 3` and `price = 450`. Print `INV-0042 | Qty: 3 | Amount: ₹1,350.00`.",
   "starter": "invoice_no = 42\nqty = 3\nprice = 450\n",
   "sol": "invoice_no = 42\nqty = 3\nprice = 450\nprint(f\"INV-{invoice_no:04d} | Qty: {qty} | Amount: ₹{qty * price:,.2f}\")",
   "e": "`04d` pads the number with zeros to 4 digits. The amount slot does the maths and then formats it with `:,.2f`.",
   "out": "INV-0042 | Qty: 3 | Amount: ₹1,350.00"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Quotes and escape characters",
   "q": "`item = \"Tea\"`, `qty = 2` and `rate = 15`. With ONE `print()` and one f-string, print three lines: `Item: Tea`, `Qty: 2` and `Total: ₹30.00`. Use `\\n` for the new lines.",
   "starter": "item = \"Tea\"\nqty = 2\nrate = 15\n",
   "sol": "item = \"Tea\"\nqty = 2\nrate = 15\nprint(f\"Item: {item}\\nQty: {qty}\\nTotal: ₹{qty * rate:.2f}\")",
   "e": "`\\n` works inside f-strings too. One `print()` can make a whole multi-line receipt.",
   "out": "Item: Tea\nQty: 2\nTotal: ₹30.00"
  }
 ],
 "operators": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Arithmetic operators",
   "q": "Type exactly what this code prints.",
   "c": "print(17 / 5, 17 // 5, 17 % 5)",
   "e": "`/` gives the exact answer as a float. `//` keeps only the whole part, and `%` gives the remainder: 17 is 3 fives and 2 left over.",
   "ans": "3.4 3 2"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "A teacher has `students = 47` and makes groups of 6. Print the number of full groups and the number of students left over, with one `print()`.",
   "starter": "students = 47\n",
   "sol": "students = 47\nprint(students // 6, students % 6)",
   "e": "`//` counts the full groups (7) and `%` gives what is left (5).",
   "out": "7 5"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "Use `**` to print 2 to the power 10, and then the square root of 144, with one `print()`.",
   "starter": "# Powers with **\n",
   "sol": "print(2 ** 10, 144 ** 0.5)",
   "e": "`**` means power. A power of `0.5` is the square root, and it comes out as a float: `12.0`.",
   "out": "1024 12.0"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Comparison operators",
   "q": "`a = 45` and `b = 60`. Print whether `a` is less than `b`, and whether they are equal, with one `print()`.",
   "starter": "a = 45\nb = 60\n",
   "sol": "a = 45\nb = 60\nprint(a < b, a == b)",
   "e": "Comparisons give `True` or `False`. Use `==` (two signs) to test if two values are equal.",
   "out": "True False"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Comparison operators",
   "q": "This code should print `True`, but it crashes. Fix it.",
   "c": "x = 10\nprint(x = 10)",
   "fixed": "x = 10\nprint(x == 10)",
   "e": "One `=` stores a value. Two `==` compare. Inside `print()` you want the comparison.",
   "want": "True",
   "got": "TypeError: print() got an unexpected keyword argument 'x'"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Assignment operators",
   "q": "`balance = 5000`. Add a salary of 1500 using `+=`, then pay 2000 rent using `-=`. Print the balance.",
   "starter": "balance = 5000\n",
   "sol": "balance = 5000\nbalance += 1500\nbalance -= 2000\nprint(balance)",
   "e": "`x += 5` is short for `x = x + 5`, and `-=` works the same way for taking away.",
   "out": "4500"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Logical operators: and, or, not",
   "q": "Type exactly what this code prints.",
   "c": "print(True and False, True or False, not True)",
   "e": "`and` needs both sides `True`. `or` needs at least one. `not` flips the value.",
   "ans": "False True False"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Membership operators: in, not in",
   "q": "`job = \"Data Analyst\"`. Print whether `\"Analyst\"` is in it, and whether `\"analyst\"` is in it, with one `print()`.",
   "starter": "job = \"Data Analyst\"\n",
   "sol": "job = \"Data Analyst\"\nprint(\"Analyst\" in job, \"analyst\" in job)",
   "e": "`in` checks if a piece of text is inside another. Capital letters matter, so `\"analyst\"` is not found.",
   "out": "True False"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Order of operations (precedence)",
   "q": "Type exactly what this code prints.",
   "c": "print(10 - 4 + 2, 20 / 4 * 2, -3 ** 2)",
   "e": "`-` and `+` (and `/` and `*`) are equal, so Python goes left to right. `**` runs before the minus sign, so `-3 ** 2` is `-(3 ** 2)`.",
   "ans": "8 10.0 -9"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "A video is `total = 500` seconds long. Print it as `8 min 20 sec` using `//` and `%`.",
   "starter": "total = 500\n",
   "sol": "total = 500\nprint(total // 60, \"min\", total % 60, \"sec\")",
   "e": "`total // 60` gives the whole minutes and `total % 60` gives the seconds left over.",
   "out": "8 min 20 sec"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "`n = 4738`. Print its last digit, and whether `n` is even, with one `print()`.",
   "starter": "n = 4738\n",
   "sol": "n = 4738\nprint(n % 10, n % 2 == 0)",
   "e": "`% 10` gives the last digit. A number is even when `n % 2` is 0.",
   "out": "8 True"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Order of operations (precedence)",
   "q": "This code should print the average of the two marks, `85.0`, but it prints `125.0`. Fix it.",
   "c": "a = 80\nb = 90\nprint(a + b / 2)",
   "fixed": "a = 80\nb = 90\nprint((a + b) / 2)",
   "e": "`/` runs before `+`, so only `b` was divided. Brackets make the addition happen first.",
   "want": "85.0",
   "got": "125.0"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Assignment operators",
   "q": "Type exactly what this code prints.",
   "c": "x = 10\nx += 5\nx *= 2\nx //= 4\nx %= 4\nprint(x)",
   "e": "Follow it step by step: 10, then 15, then 30, then `30 // 4` is 7, then `7 % 4` is 3.",
   "ans": "3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Comparison operators",
   "q": "`temp = 37.8`. Normal body temperature is from 36.1 to 37.2. Print whether `temp` is normal, using ONE chained comparison.",
   "starter": "temp = 37.8\n",
   "sol": "temp = 37.8\nprint(36.1 <= temp <= 37.2)",
   "e": "A chained comparison like `a <= x <= b` checks both limits at once. 37.8 is above 37.2, so it is `False`.",
   "out": "False"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The ternary operator (one-line if)",
   "q": "`marks = 47`. The pass mark is 35. Use the ternary operator to print `Pass` or `Fail`.",
   "starter": "marks = 47\n",
   "sol": "marks = 47\nprint(\"Pass\" if marks >= 35 else \"Fail\")",
   "e": "`A if condition else B` gives A when the condition is `True`, and B when it is `False`.",
   "out": "Pass"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Comparison operators",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Mango\" < \"apple\", \"mango\" < \"apple\", 7 != 7.0)",
   "e": "Text compares letter by letter, and capital letters come before small ones. `7` and `7.0` are equal in value, so `!=` is `False`.",
   "ans": "True False False"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Identity operators: is, is not",
   "q": "`discount = None` means no discount was set yet. Print whether `discount` is `None`, using `is`. Then set `discount = 0` and print the same check again.",
   "starter": "discount = None\n",
   "sol": "discount = None\nprint(discount is None)\ndiscount = 0\nprint(discount is None)",
   "e": "Use `is` to check for `None`. Zero is a real value, so `0 is None` is `False`.",
   "out": "True\nFalse"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "The ternary operator (one-line if)",
   "q": "This code should print `Even`, but it crashes. Fix it.",
   "c": "n = 10\nprint(\"Even\" if n % 2 == 0 \"Odd\")",
   "fixed": "n = 10\nprint(\"Even\" if n % 2 == 0 else \"Odd\")",
   "e": "The ternary operator always needs both parts: `A if condition else B`. The `else` was missing.",
   "want": "Even",
   "got": "SyntaxError: expected 'else' after 'if' expression"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "A server ran for `total = 200000` seconds. Print it as `2 d 7 h 33 m 20 s` (days, hours, minutes, seconds). A day has 86400 seconds and an hour has 3600.",
   "starter": "total = 200000\n",
   "sol": "total = 200000\ndays = total // 86400\nhours = total % 86400 // 3600\nminutes = total % 3600 // 60\nseconds = total % 60\nprint(days, \"d\", hours, \"h\", minutes, \"m\", seconds, \"s\")",
   "e": "Take out the biggest unit with `//`, then use `%` to keep what is left for the next unit. `%` and `//` are equal, so `total % 86400 // 3600` runs left to right.",
   "out": "2 d 7 h 33 m 20 s"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Logical operators: and, or, not",
   "q": "A loan is approved if the salary is at least 30000 AND the credit score is above 700, OR the person has a guarantor. With `salary = 28000`, `score = 760` and `guarantor = True`, print whether the loan is approved.",
   "starter": "salary = 28000\nscore = 760\nguarantor = True\n",
   "sol": "salary = 28000\nscore = 760\nguarantor = True\nprint((salary >= 30000 and score > 700) or guarantor)",
   "e": "The salary check fails, so the `and` part is `False`. But `or guarantor` is `True`, so the loan is approved. Brackets make the grouping clear.",
   "out": "True"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Arithmetic operators",
   "q": "`n = 472`. Use `//` and `%` to print the sum of its three digits.",
   "starter": "n = 472\n",
   "sol": "n = 472\nprint(n // 100 + n // 10 % 10 + n % 10)",
   "e": "`n // 100` is the first digit (4), `n // 10 % 10` is the middle one (7) and `n % 10` is the last one (2).",
   "out": "13"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Assignment operators",
   "q": "You invest `amount = 10000` and it grows by 10% a year. Use `*=` to grow it once for each of 3 years. Then print it rounded to 2 decimal places.",
   "starter": "amount = 10000\n",
   "sol": "amount = 10000\namount *= 1.1\namount *= 1.1\namount *= 1.1\nprint(round(amount, 2))",
   "e": "Growing by 10% means multiplying by 1.1. Floats can show tiny errors, so `round(..., 2)` gives a clean `13310.0`.",
   "out": "13310.0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Membership operators: in, not in",
   "q": "`email = \"ravi.k@gmail.com\"`. Print `True` if it has an `@`, has a `.`, and has no space. Use `in`, `not in` and `and`.",
   "starter": "email = \"ravi.k@gmail.com\"\n",
   "sol": "email = \"ravi.k@gmail.com\"\nprint(\"@\" in email and \".\" in email and \" \" not in email)",
   "e": "Each membership test gives `True` or `False`. `and` joins them: all three must be `True`.",
   "out": "True"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Logical operators: and, or, not",
   "q": "This code should print `False`, but it crashes when `x` is 0. Fix it by changing the order, not the numbers.",
   "c": "x = 0\nprint(10 / x > 1 and x != 0)",
   "fixed": "x = 0\nprint(x != 0 and 10 / x > 1)",
   "e": "`and` stops as soon as one side is `False`. Put the safe check `x != 0` first, and the division never runs when `x` is 0.",
   "want": "False",
   "got": "ZeroDivisionError: division by zero"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Assignment operators",
   "q": "This code should take 30 away from the stock and print `90`, but it prints `-30`. Fix it.",
   "c": "stock = 120\nstock =- 30\nprint(stock)",
   "fixed": "stock = 120\nstock -= 30\nprint(stock)",
   "e": "`=-` is really `= -30`: it stores minus 30. The take-away operator is `-=`, with the minus first.",
   "want": "90",
   "got": "-30"
  }
 ],
 "conditions": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "The basic if",
   "q": "Type exactly what this code prints.",
   "c": "stock = 4\nif stock < 5:\n    print(\"Reorder\")\nprint(\"Checked\")",
   "e": "4 is less than 5, so the indented line runs. The last line is not indented, so it always runs.",
   "ans": "Reorder\nChecked"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "if-else: two paths",
   "q": "`n = 37`. Use if-else to print `37 is odd` or `37 is even`.",
   "starter": "n = 37\n",
   "sol": "n = 37\nif n % 2 == 0:\n    print(f\"{n} is even\")\nelse:\n    print(f\"{n} is odd\")",
   "e": "`n % 2 == 0` is `True` for even numbers. `else` catches every other case.",
   "out": "37 is odd"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "The basic if",
   "q": "`balance = 1500` and `withdraw = 2000`. If `withdraw` is more than `balance`, print `Not enough balance`. At the end, always print `Done`.",
   "starter": "balance = 1500\nwithdraw = 2000\n",
   "sol": "balance = 1500\nwithdraw = 2000\nif withdraw > balance:\n    print(\"Not enough balance\")\nprint(\"Done\")",
   "e": "Only the indented line belongs to the `if`. The `Done` line is not indented, so it runs every time.",
   "out": "Not enough balance\nDone"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "The basic if",
   "q": "This code should print `Heat alert`, but it crashes. Fix it.",
   "c": "temp = 41\nif temp > 40\n    print(\"Heat alert\")",
   "fixed": "temp = 41\nif temp > 40:\n    print(\"Heat alert\")",
   "e": "Every `if` line must end with a colon `:`.",
   "want": "Heat alert",
   "got": "SyntaxError: expected ':'"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "if-else: two paths",
   "q": "`price = 899`. If the price is 500 or more, print `Free delivery`. Otherwise print `Delivery: ₹40`.",
   "starter": "price = 899\n",
   "sol": "price = 899\nif price >= 500:\n    print(\"Free delivery\")\nelse:\n    print(\"Delivery: ₹40\")",
   "e": "`>=` means \"500 or more\", so 500 itself also gets free delivery.",
   "out": "Free delivery"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "if-elif-else: many paths",
   "q": "Type exactly what this code prints.",
   "c": "score = 72\nif score >= 90:\n    grade = \"A\"\nelif score >= 75:\n    grade = \"B\"\nelif score >= 60:\n    grade = \"C\"\nelse:\n    grade = \"D\"\nprint(grade)",
   "e": "Python checks from the top. 72 fails `>= 90` and `>= 75`, then passes `>= 60`, so the grade is C and the rest is skipped.",
   "ans": "C"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "if-elif-else: many paths",
   "q": "`temp = 15`. Print `Cold` if it is below 18, `Pleasant` if it is from 18 to 30, and `Hot` if it is above 30.",
   "starter": "temp = 15\n",
   "sol": "temp = 15\nif temp < 18:\n    print(\"Cold\")\nelif temp <= 30:\n    print(\"Pleasant\")\nelse:\n    print(\"Hot\")",
   "e": "Once the first test fails, we already know `temp` is 18 or more, so the `elif` only needs to check `<= 30`.",
   "out": "Cold"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Combining conditions",
   "q": "`temp = 28` and `humidity = 70`. Print `Good day for a walk` if the temperature is from 20 to 30 AND the humidity is below 80. Otherwise print `Stay in`.",
   "starter": "temp = 28\nhumidity = 70\n",
   "sol": "temp = 28\nhumidity = 70\nif 20 <= temp <= 30 and humidity < 80:\n    print(\"Good day for a walk\")\nelse:\n    print(\"Stay in\")",
   "e": "`and` needs both parts `True`. A chained comparison like `20 <= temp <= 30` checks a range in one go.",
   "out": "Good day for a walk"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "if-elif-else: many paths",
   "q": "`order_value = 2600`. Discount: 20% for 5000 or more, 10% for 2000 or more, 5% for 1000 or more, otherwise none. Print the amount to pay.",
   "starter": "order_value = 2600\n",
   "sol": "order_value = 2600\nif order_value >= 5000:\n    discount = 20\nelif order_value >= 2000:\n    discount = 10\nelif order_value >= 1000:\n    discount = 5\nelse:\n    discount = 0\nprint(order_value - order_value * discount / 100)",
   "e": "Check the biggest slab first. 2600 fails `>= 5000` and then matches `>= 2000`, so the discount is 10%.",
   "out": "2340.0"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "if-elif-else: many paths",
   "q": "Sales of 120000 should print `Gold`, but this code prints `Silver`. Fix it.",
   "c": "sales = 120000\nif sales >= 50000:\n    print(\"Silver\")\nelif sales >= 100000:\n    print(\"Gold\")",
   "fixed": "sales = 120000\nif sales >= 100000:\n    print(\"Gold\")\nelif sales >= 50000:\n    print(\"Silver\")",
   "e": "Python stops at the first `True` test. 120000 is also `>= 50000`, so the bigger limit must be checked first.",
   "want": "Gold",
   "got": "Silver"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Combining conditions",
   "q": "Type exactly what this code prints.",
   "c": "choice = 3\nif choice == 1 or 2:\n    print(\"one or two\")\nelse:\n    print(\"other\")",
   "e": "`choice == 1 or 2` means `(choice == 1) or 2`. The `2` on its own is truthy, so the `if` is always `True`. Write `choice == 1 or choice == 2`.",
   "ans": "one or two"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Nested if",
   "q": "`is_member = True` and `amount = 1200`. Members get 10% off when the amount is 1000 or more, and 5% off otherwise. Non-members get no discount. Use a nested if and print the amount to pay.",
   "starter": "is_member = True\namount = 1200\n",
   "sol": "is_member = True\namount = 1200\nif is_member:\n    if amount >= 1000:\n        amount = amount * 0.9\n    else:\n        amount = amount * 0.95\nprint(amount)",
   "e": "The outer `if` checks membership. Only members reach the inner `if`, which picks the discount.",
   "out": "1080.0"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Truthy and falsy values",
   "q": "Type exactly what this code prints.",
   "c": "name = \"\"\ncity = \"Pune\"\nif name:\n    print(\"Hi\", name)\nelse:\n    print(\"No name\")\nif city:\n    print(\"City:\", city)",
   "e": "Empty text is falsy, so the first `if` goes to `else`. Text with letters is truthy.",
   "ans": "No name\nCity: Pune"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Short forms: one-line if and ternary",
   "q": "`stock = 0`. Use the ternary operator to store `\"In stock\"` or `\"Out of stock\"` in `status`, then print `status`.",
   "starter": "stock = 0\n",
   "sol": "stock = 0\nstatus = \"In stock\" if stock > 0 else \"Out of stock\"\nprint(status)",
   "e": "`A if condition else B` picks one of two values in a single line.",
   "out": "Out of stock"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "match-case (Python 3.10 and newer)",
   "q": "`day = 6`. Use match-case to print `Weekday` for 1 to 5, `Weekend` for 6 or 7, and `Invalid day` for anything else.",
   "starter": "day = 6\n",
   "sol": "day = 6\nmatch day:\n    case 1 | 2 | 3 | 4 | 5:\n        print(\"Weekday\")\n    case 6 | 7:\n        print(\"Weekend\")\n    case _:\n        print(\"Invalid day\")",
   "e": "`|` joins several values in one case. `case _:` catches everything else, like `else`.",
   "out": "Weekend"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Combining conditions",
   "q": "This code should print `Working age`, but it crashes. Fix it.",
   "c": "age = 25\nif age > 18 and < 60:\n    print(\"Working age\")",
   "fixed": "age = 25\nif age > 18 and age < 60:\n    print(\"Working age\")",
   "e": "Each side of `and` must be a full comparison: `age > 18 and age < 60` (or `18 < age < 60`).",
   "want": "Working age",
   "got": "SyntaxError: invalid syntax"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Truthy and falsy values",
   "q": "`remarks = \"\"`. Print `No remarks` if it is empty, otherwise print the remarks. Use the truthiness of the text: do not compare it with `\"\"`.",
   "starter": "remarks = \"\"\n",
   "sol": "remarks = \"\"\nif remarks:\n    print(remarks)\nelse:\n    print(\"No remarks\")",
   "e": "Empty text is falsy, so `if remarks:` is `False` and the `else` runs.",
   "out": "No remarks"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "pass: an empty placeholder",
   "q": "`amount = 600`. The discount rule is not decided yet. Write `if amount > 500:` with `pass` inside, then print `Bill printed` after the if.",
   "starter": "amount = 600\n",
   "sol": "amount = 600\nif amount > 500:\n    pass\nprint(\"Bill printed\")",
   "e": "A block cannot be empty. `pass` is a placeholder that does nothing, so the code runs without an error.",
   "out": "Bill printed"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "if-elif-else: many paths",
   "q": "`year = 1900`. A year is a leap year if it divides by 400, or if it divides by 4 but not by 100. Print `1900 is a leap year` or `1900 is not a leap year`, using if-elif-else.",
   "starter": "year = 1900\n",
   "sol": "year = 1900\nif year % 400 == 0:\n    print(year, \"is a leap year\")\nelif year % 100 == 0:\n    print(year, \"is not a leap year\")\nelif year % 4 == 0:\n    print(year, \"is a leap year\")\nelse:\n    print(year, \"is not a leap year\")",
   "e": "Order matters: test 400 first, then 100, then 4. 1900 divides by 100 but not by 400, so it is not a leap year.",
   "out": "1900 is not a leap year"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested if",
   "q": "`a, b, c = 5, 5, 8` are the sides of a triangle. Print `Not a triangle` if any side is as long as the other two together or longer. Otherwise print `Equilateral`, `Isosceles` or `Scalene`.",
   "starter": "a, b, c = 5, 5, 8\n",
   "sol": "a, b, c = 5, 5, 8\nif a >= b + c or b >= a + c or c >= a + b:\n    print(\"Not a triangle\")\nelif a == b == c:\n    print(\"Equilateral\")\nelif a == b or b == c or a == c:\n    print(\"Isosceles\")\nelse:\n    print(\"Scalene\")",
   "e": "Check the impossible case first with `or`. Then all equal, then any two equal. Here two sides are 5, so it is isosceles.",
   "out": "Isosceles"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "if-elif-else: many paths",
   "q": "`units = 260`. The electricity bill charges ₹3 per unit for the first 100 units, ₹5 per unit for the next 100, and ₹8 per unit for the rest. Print `Bill: ₹1280`.",
   "starter": "units = 260\n",
   "sol": "units = 260\nif units <= 100:\n    bill = units * 3\nelif units <= 200:\n    bill = 100 * 3 + (units - 100) * 5\nelse:\n    bill = 100 * 3 + 100 * 5 + (units - 200) * 8\nprint(f\"Bill: ₹{bill}\")",
   "e": "Each slab adds its own part: 300 for the first 100, 500 for the next 100, and 60 × 8 = 480 for the rest.",
   "out": "Bill: ₹1280"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Nested if",
   "q": "Type exactly what this code prints.",
   "c": "a = 7\nb = 3\nif a > 5:\n    if b > 5:\n        print(\"both\")\n    else:\n        print(\"only a\")\nelse:\n    print(\"a small\")\nif a > b: print(\"a wins\")",
   "e": "The outer test is `True`, the inner one is `False`, so `only a` prints. The last line is a one-line if, and 7 > 3.",
   "ans": "only a\na wins"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Nested if",
   "q": "`user` is not `admin`, so this code should print only `Unknown user`. It prints `Welcome` instead. Fix it with a nested if.",
   "c": "user = \"guest\"\npin = \"1234\"\nif user == \"admin\":\n    print(\"User OK\")\nif pin == \"1234\":\n    print(\"Welcome\")\nelse:\n    print(\"Unknown user\")",
   "fixed": "user = \"guest\"\npin = \"1234\"\nif user == \"admin\":\n    print(\"User OK\")\n    if pin == \"1234\":\n        print(\"Welcome\")\nelse:\n    print(\"Unknown user\")",
   "e": "The PIN check must sit inside the user check, and the `else` must belong to the user check.",
   "want": "Unknown user",
   "got": "Welcome"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "match-case (Python 3.10 and newer)",
   "q": "Code 3 should print `Refund`, but this code crashes. Fix it.",
   "c": "code = 3\nmatch code:\n    case 1:\n        print(\"Paid\")\n    case 2:\n        print(\"Pending\")\n    case 3 or 4:\n        print(\"Refund\")\n    case _:\n        print(\"Unknown\")",
   "fixed": "code = 3\nmatch code:\n    case 1:\n        print(\"Paid\")\n    case 2:\n        print(\"Pending\")\n    case 3 | 4:\n        print(\"Refund\")\n    case _:\n        print(\"Unknown\")",
   "e": "Inside `case`, several values are joined with `|`, not with `or`.",
   "want": "Refund",
   "got": "SyntaxError: invalid syntax"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Truthy and falsy values",
   "q": "A form has `email = \"asha@mail.com\"` and `phone = \"\"`. Print `Complete` if both are filled, `Partial` if only one is filled, and `Empty` if neither is. Use truthiness with `and` / `or`.",
   "starter": "email = \"asha@mail.com\"\nphone = \"\"\n",
   "sol": "email = \"asha@mail.com\"\nphone = \"\"\nif email and phone:\n    print(\"Complete\")\nelif email or phone:\n    print(\"Partial\")\nelse:\n    print(\"Empty\")",
   "e": "Filled text is truthy. Check `and` (both) first, then `or` (at least one). What is left is empty.",
   "out": "Partial"
  }
 ],
 "forloops": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "range(): loops over numbers",
   "q": "Type exactly what this code prints.",
   "c": "for i in range(2, 11, 3):\n    print(i, end=\" \")\nprint(\"end\")",
   "e": "`range(2, 11, 3)` starts at 2 and adds 3 each time: 2, 5, 8. 11 is never reached. `end=\" \"` keeps everything on one line.",
   "ans": "2 5 8 end"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "range(): loops over numbers",
   "q": "Use a for loop to print the numbers 1 to 10 on one line, with a space after each.",
   "starter": "# Use range() and end=\" \"\n",
   "sol": "for i in range(1, 11):\n    print(i, end=\" \")",
   "e": "The stop number is not included, so 1 to 10 needs `range(1, 11)`.",
   "out": "1 2 3 4 5 6 7 8 9 10 "
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Why loops?",
   "q": "`cities = [\"Delhi\", \"Pune\", \"Goa\"]`. Print each city on its own line with `Visit ` before it, like `Visit Delhi`.",
   "starter": "cities = [\"Delhi\", \"Pune\", \"Goa\"]\n",
   "sol": "cities = [\"Delhi\", \"Pune\", \"Goa\"]\nfor city in cities:\n    print(\"Visit\", city)",
   "e": "The loop variable `city` holds one item per round, from the first to the last.",
   "out": "Visit Delhi\nVisit Pune\nVisit Goa"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Looping over a string",
   "q": "Loop over the word `\"Python\"` and print each letter followed by a dash, all on one line: `P-y-t-h-o-n-`.",
   "starter": "# Loop over the letters\n",
   "sol": "for letter in \"Python\":\n    print(letter, end=\"-\")",
   "e": "A for loop over a string visits one character at a time. `end=\"-\"` puts a dash after each one instead of a new line.",
   "out": "P-y-t-h-o-n-"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "The 5 loop patterns you will use forever",
   "q": "Use a loop to add up the numbers from 1 to 100 and print the total.",
   "starter": "total = 0\n",
   "sol": "total = 0\nfor n in range(1, 101):\n    total += n\nprint(total)",
   "e": "The sum pattern: start at 0, add each number with `+=`, and print after the loop (not inside it).",
   "out": "5050"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "range(): loops over numbers",
   "q": "This code should print 1 to 5, but it stops at 4. Fix it.",
   "c": "for i in range(1, 5):\n    print(i)",
   "fixed": "for i in range(1, 6):\n    print(i)",
   "e": "`range()` stops **before** the stop number. To include 5, the stop must be 6.",
   "want": "1\n2\n3\n4\n5",
   "got": "1\n2\n3\n4"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Looping over a string",
   "q": "Type exactly what this code prints.",
   "c": "count = 0\nfor ch in \"banana\":\n    if ch == \"a\":\n        count += 1\nprint(count)",
   "e": "The loop checks each letter of \"banana\". Three of them are `a`.",
   "ans": "3"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Why loops?",
   "q": "This code should print `250`, but it crashes. Fix it.",
   "c": "total = 0\nfor price in [120, 80, 50]\n    total += price\nprint(total)",
   "fixed": "total = 0\nfor price in [120, 80, 50]:\n    total += price\nprint(total)",
   "e": "A `for` line must end with a colon `:`, just like `if`.",
   "want": "250",
   "got": "SyntaxError: expected ':'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The 5 loop patterns you will use forever",
   "q": "`marks = [45, 78, 32, 90, 66, 28]`. Count how many marks are 40 or more and print `Passed: 4`.",
   "starter": "marks = [45, 78, 32, 90, 66, 28]\n",
   "sol": "marks = [45, 78, 32, 90, 66, 28]\npassed = 0\nfor m in marks:\n    if m >= 40:\n        passed += 1\nprint(\"Passed:\", passed)",
   "e": "The count pattern: start a counter at 0 and add 1 only when the condition is `True`.",
   "out": "Passed: 4"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The 5 loop patterns you will use forever",
   "q": "`sales = [3200, 4500, 2800, 5100, 3900]`. Find the highest value with a loop (do not use `max()`) and print it.",
   "starter": "sales = [3200, 4500, 2800, 5100, 3900]\n",
   "sol": "sales = [3200, 4500, 2800, 5100, 3900]\nhighest = 0\nfor s in sales:\n    if s > highest:\n        highest = s\nprint(highest)",
   "e": "The best-so-far pattern: keep the biggest value seen so far and replace it whenever you see a bigger one.",
   "out": "5100"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "enumerate() and zip()",
   "q": "Type exactly what this code prints.",
   "c": "for i, c in enumerate(\"abc\", start=1):\n    print(i, c)",
   "e": "`enumerate()` gives a number and an item each round. `start=1` makes the numbers begin at 1.",
   "ans": "1 a\n2 b\n3 c"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "enumerate() and zip()",
   "q": "`items = [\"Tea\", \"Coffee\", \"Juice\"]`. Print a numbered menu that starts at 1: `1. Tea`, `2. Coffee`, `3. Juice`.",
   "starter": "items = [\"Tea\", \"Coffee\", \"Juice\"]\n",
   "sol": "items = [\"Tea\", \"Coffee\", \"Juice\"]\nfor num, item in enumerate(items, start=1):\n    print(f\"{num}. {item}\")",
   "e": "`enumerate(items, start=1)` gives the position and the item together, so you do not need your own counter.",
   "out": "1. Tea\n2. Coffee\n3. Juice"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "enumerate() and zip()",
   "q": "`names = [\"Asha\", \"Ravi\", \"Meena\"]` and `scores = [88, 72, 95]`. Use `zip()` to print `Asha: 88`, `Ravi: 72` and `Meena: 95`.",
   "starter": "names = [\"Asha\", \"Ravi\", \"Meena\"]\nscores = [88, 72, 95]\n",
   "sol": "names = [\"Asha\", \"Ravi\", \"Meena\"]\nscores = [88, 72, 95]\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}\")",
   "e": "`zip()` walks two lists side by side and gives one item from each per round.",
   "out": "Asha: 88\nRavi: 72\nMeena: 95"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "The 5 loop patterns you will use forever",
   "q": "This code should print the total `60`, but it prints `30`. Fix it.",
   "c": "for n in [10, 20, 30]:\n    total = 0\n    total += n\nprint(total)",
   "fixed": "total = 0\nfor n in [10, 20, 30]:\n    total += n\nprint(total)",
   "e": "`total = 0` inside the loop resets the total every round. Start the total once, before the loop.",
   "want": "60",
   "got": "30"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Nested loops",
   "q": "Type exactly what this code prints.",
   "c": "for i in range(1, 4):\n    for j in range(i):\n        print(\"*\", end=\"\")\n    print()",
   "e": "The inner loop runs `i` times: 1, then 2, then 3 stars. The empty `print()` ends each row.",
   "ans": "*\n**\n***"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "range(): loops over numbers",
   "q": "Use `range()` with a negative step to print the even numbers from 20 down to 2 on one line, with a space after each.",
   "starter": "# Count down in steps of 2\n",
   "sol": "for n in range(20, 0, -2):\n    print(n, end=\" \")",
   "e": "With a negative step, `range()` counts down. The stop (0) is not included, so the last number is 2.",
   "out": "20 18 16 14 12 10 8 6 4 2 "
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "for-else",
   "q": "Type exactly what this code prints.",
   "c": "for n in [3, 5, 7]:\n    if n % 2 == 0:\n        print(\"even found\")\n        break\nelse:\n    print(\"all odd\")",
   "e": "No number is even, so `break` never runs. The `else` of a for loop runs when the loop ends without a `break`.",
   "ans": "all odd"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Loops with conditions: a course exercise",
   "q": "`words = [\"level\", \"data\", \"noon\", \"python\"]`. Count the words whose first and last letters are the same, and print the count.",
   "starter": "words = [\"level\", \"data\", \"noon\", \"python\"]\n",
   "sol": "words = [\"level\", \"data\", \"noon\", \"python\"]\ncount = 0\nfor w in words:\n    if w[0] == w[-1]:\n        count += 1\nprint(count)",
   "e": "`w[0]` is the first letter and `w[-1]` the last. Only \"level\" and \"noon\" match.",
   "out": "2"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested loops",
   "q": "Print a 4 x 4 multiplication table: one row per line, each number right-aligned in 3 characters (use `:3` in an f-string).",
   "starter": "# Rows 1-4, columns 1-4\n",
   "sol": "for i in range(1, 5):\n    for j in range(1, 5):\n        print(f\"{i * j:3}\", end=\"\")\n    print()",
   "e": "The outer loop picks the row and the inner loop fills the columns. `:3` pads each number to 3 characters so the columns line up.",
   "out": "  1  2  3  4\n  2  4  6  8\n  3  6  9 12\n  4  8 12 16"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Looping over a string",
   "q": "Count the vowels (a, e, i, o, u, small or capital) in `\"Hyderabad Biryani\"` and print the count. Check each letter with `in \"aeiouAEIOU\"`.",
   "starter": "text = \"Hyderabad Biryani\"\n",
   "sol": "text = \"Hyderabad Biryani\"\ncount = 0\nfor ch in text:\n    if ch in \"aeiouAEIOU\":\n        count += 1\nprint(count)",
   "e": "`in` checks whether a letter is one of the vowels. Putting both small and capital vowels in the text catches both.",
   "out": "6"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "for-else",
   "q": "`bookings = [\"R101\", \"R205\", \"R309\"]`. Search for `\"R205\"`. When you find it, print `Found at position 2` (counting from 1) and stop. If it is not there, print `Not found`. Use enumerate, break and for-else.",
   "starter": "bookings = [\"R101\", \"R205\", \"R309\"]\n",
   "sol": "bookings = [\"R101\", \"R205\", \"R309\"]\nfor pos, b in enumerate(bookings, start=1):\n    if b == \"R205\":\n        print(\"Found at position\", pos)\n        break\nelse:\n    print(\"Not found\")",
   "e": "`break` stops the search as soon as it succeeds. The `else` only runs if the loop finished without finding it.",
   "out": "Found at position 2"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "for-else",
   "q": "This code should print only `Found 12`. Fix it.",
   "c": "for n in [4, 9, 12]:\n    if n > 10:\n        print(\"Found\", n)\n        break\n    else:\n        print(\"None above 10\")",
   "fixed": "for n in [4, 9, 12]:\n    if n > 10:\n        print(\"Found\", n)\n        break\nelse:\n    print(\"None above 10\")",
   "e": "Here the `else` belongs to the `if`, so it runs for every small number. Move it left so it lines up with `for`: then it runs only when no `break` happened.",
   "want": "Found 12",
   "got": "None above 10\nNone above 10\nFound 12"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The 5 loop patterns you will use forever",
   "q": "`daily = [1200, 800, 1500, 900]`. Print the running total after each day: `Day 1: 1200`, `Day 2: 2000`, `Day 3: 3500`, `Day 4: 4400`.",
   "starter": "daily = [1200, 800, 1500, 900]\n",
   "sol": "daily = [1200, 800, 1500, 900]\ntotal = 0\nfor day, amount in enumerate(daily, start=1):\n    total += amount\n    print(f\"Day {day}: {total}\")",
   "e": "Add first, then print inside the loop, so each line shows the total so far.",
   "out": "Day 1: 1200\nDay 2: 2000\nDay 3: 3500\nDay 4: 4400"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested loops",
   "q": "Print this number triangle with nested loops (a space after each number is fine):\n`1`\n`1 2`\n`1 2 3`\n`1 2 3 4`",
   "starter": "# Row r prints the numbers 1 to r\n",
   "sol": "for row in range(1, 5):\n    for n in range(1, row + 1):\n        print(n, end=\" \")\n    print()",
   "e": "The inner loop depends on the outer one: row 3 counts from 1 to 3, so its stop is `row + 1`.",
   "out": "1 \n1 2 \n1 2 3 \n1 2 3 4 "
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "range(): loops over numbers",
   "q": "This code should print `5 4 3 2 1 Go!`, but it only prints `Go!`. Fix it.",
   "c": "for i in range(5, 0):\n    print(i, end=\" \")\nprint(\"Go!\")",
   "fixed": "for i in range(5, 0, -1):\n    print(i, end=\" \")\nprint(\"Go!\")",
   "e": "`range(5, 0)` counts up by 1, and you cannot count up from 5 to 0, so it is empty. A step of `-1` counts down.",
   "want": "5 4 3 2 1 Go!",
   "got": "Go!"
  }
 ],
 "whileloops": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "The while loop",
   "q": "Type exactly what this code prints.",
   "c": "n = 1\nwhile n <= 3:\n    print(n * 10)\n    n += 1",
   "e": "The loop runs while `n <= 3`: for n = 1, 2 and 3. Each round prints n × 10, then adds 1.",
   "ans": "10\n20\n30"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "The while loop",
   "q": "Use a while loop to print 5, 4, 3, 2, 1 on separate lines, then `Lift off!`.",
   "starter": "count = 5\n",
   "sol": "count = 5\nwhile count >= 1:\n    print(count)\n    count -= 1\nprint(\"Lift off!\")",
   "e": "Start at 5, print, then take 1 away each round. When `count` reaches 0 the condition is `False` and the loop stops.",
   "out": "5\n4\n3\n2\n1\nLift off!"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "for or while?",
   "q": "`amount = 1000` grows by 10% each year. Use a while loop to count the years until it reaches at least 2000, and print the number of years.",
   "starter": "amount = 1000\nyears = 0\n",
   "sol": "amount = 1000\nyears = 0\nwhile amount < 2000:\n    amount *= 1.1\n    years += 1\nprint(years)",
   "e": "You do not know the number of rounds in advance, so `while` fits better than `for`. It keeps going while the amount is still below 2000.",
   "out": "8"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "The while loop",
   "q": "This code should print `1 2 3 4 5`, but it stops at 4. Fix it.",
   "c": "n = 1\nwhile n < 5:\n    print(n, end=\" \")\n    n += 1",
   "fixed": "n = 1\nwhile n <= 5:\n    print(n, end=\" \")\n    n += 1",
   "e": "With `n < 5` the loop stops when n is 5. Use `<=` to include 5.",
   "want": "1 2 3 4 5 ",
   "got": "1 2 3 4 "
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "break, continue and pass",
   "q": "Print the numbers 1 to 10 on one line, but skip every multiple of 3 using `continue`.",
   "starter": "# Skip 3, 6 and 9\n",
   "sol": "for i in range(1, 11):\n    if i % 3 == 0:\n        continue\n    print(i, end=\" \")",
   "e": "`continue` jumps straight to the next round, so the `print()` is skipped for 3, 6 and 9.",
   "out": "1 2 4 5 7 8 10 "
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "break, continue and pass",
   "q": "Type exactly what this code prints.",
   "c": "for i in range(1, 10):\n    if i == 4:\n        break\n    print(i, end=\" \")\nprint(\"stop\")",
   "e": "`break` leaves the loop the moment `i` is 4, before 4 is printed. Then the line after the loop runs.",
   "ans": "1 2 3 stop"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "while True with break",
   "q": "Start with `n = 1`. In a `while True` loop, double `n` each round, and `break` as soon as it is more than 100. Then print `n`.",
   "starter": "n = 1\n",
   "sol": "n = 1\nwhile True:\n    n *= 2\n    if n > 100:\n        break\nprint(n)",
   "e": "`while True` repeats until a `break`. The values go 2, 4, 8, ... 64, 128, and 128 is the first one above 100.",
   "out": "128"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "break, continue and pass",
   "q": "This code should print `1 2 4 5` (skipping only 3), but it stops early. Fix it.",
   "c": "for n in range(1, 6):\n    if n == 3:\n        break\n    print(n, end=\" \")",
   "fixed": "for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n, end=\" \")",
   "e": "`break` ends the whole loop. `continue` only skips the current round, which is what we need.",
   "want": "1 2 4 5 ",
   "got": "1 2 "
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The while loop",
   "q": "`n = 907215`. Count its digits with a while loop that keeps doing `n //= 10`, and print the count.",
   "starter": "n = 907215\ndigits = 0\n",
   "sol": "n = 907215\ndigits = 0\nwhile n > 0:\n    n //= 10\n    digits += 1\nprint(digits)",
   "e": "Each `//= 10` removes the last digit. Count the rounds until nothing is left.",
   "out": "6"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "The while loop",
   "q": "Type exactly what this code prints.",
   "c": "x = 50\nsteps = 0\nwhile x > 1:\n    x //= 2\n    steps += 1\nprint(x, steps)",
   "e": "x goes 50, 25, 12, 6, 3, 1. That is 5 halvings, and the loop stops when x is 1.",
   "ans": "1 5"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "while-else",
   "q": "`n = 29`. Check if it is prime: try divisors `d` from 2 while `d * d <= n`. If one divides `n`, print `29 is not prime` and break. Use while-else to print `29 is prime` when no divisor was found.",
   "starter": "n = 29\nd = 2\n",
   "sol": "n = 29\nd = 2\nwhile d * d <= n:\n    if n % d == 0:\n        print(n, \"is not prime\")\n        break\n    d += 1\nelse:\n    print(n, \"is prime\")",
   "e": "The `else` of a while loop runs only when the loop ends without `break`, which here means no divisor was found.",
   "out": "29 is prime"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "while True with break",
   "q": "This code should print 1, 2 and 3 on separate lines, but it prints only `1`. Fix it.",
   "c": "n = 1\nwhile True:\n    if n > 3:\n        break\n    print(n)\n    n += 1\n    break",
   "fixed": "n = 1\nwhile True:\n    if n > 3:\n        break\n    print(n)\n    n += 1",
   "e": "The last `break` ends the loop after the first round. The `if n > 3: break` at the top is enough.",
   "want": "1\n2\n3",
   "got": "1"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "break, continue and pass",
   "q": "Add up the odd numbers from 1 to 20 and print the total. Use `continue` to skip the even ones.",
   "starter": "total = 0\n",
   "sol": "total = 0\nfor n in range(1, 21):\n    if n % 2 == 0:\n        continue\n    total += n\nprint(total)",
   "e": "`continue` skips the `+=` for even numbers, so only 1, 3, 5, ..., 19 are added.",
   "out": "100"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "break, continue and pass",
   "q": "Type exactly what this code prints.",
   "c": "for i in range(1, 3):\n    for j in range(1, 4):\n        if j == 3:\n            break\n        print(i, j)",
   "e": "`break` leaves only the inner loop. The outer loop carries on with the next `i`.",
   "ans": "1 1\n1 2\n2 1\n2 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "while True with break",
   "q": "`stock = 23`. Orders of 5 units keep coming. In a `while True` loop: if the stock is below 5, print `Stopped: only 3 left` (with the real number) and break. Otherwise take 5 away and print `Shipped 5, left 18` (with the real number).",
   "starter": "stock = 23\n",
   "sol": "stock = 23\nwhile True:\n    if stock < 5:\n        print(f\"Stopped: only {stock} left\")\n        break\n    stock -= 5\n    print(f\"Shipped 5, left {stock}\")",
   "e": "Check the stop condition first in each round, then do the work. The loop ships 4 times: 18, 13, 8, 3.",
   "out": "Shipped 5, left 18\nShipped 5, left 13\nShipped 5, left 8\nShipped 5, left 3\nStopped: only 3 left"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "while-else",
   "q": "Count down from 3 with a while loop, printing each number. Add a while-else that prints `Countdown finished` when the loop ends normally.",
   "starter": "n = 3\n",
   "sol": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nelse:\n    print(\"Countdown finished\")",
   "e": "There is no `break`, so the loop ends normally and the `else` runs once.",
   "out": "3\n2\n1\nCountdown finished"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Real code from your course",
   "q": "A bill has `prices = [250, 120, 80]` and `qtys = [2, 1, 5]`. Use a while loop with a position `i` (0, 1, 2) to add price × quantity to a total. Print `Total: ₹1020`.",
   "starter": "prices = [250, 120, 80]\nqtys = [2, 1, 5]\n",
   "sol": "prices = [250, 120, 80]\nqtys = [2, 1, 5]\ni = 0\ntotal = 0\nwhile i < 3:\n    total += prices[i] * qtys[i]\n    i += 1\nprint(f\"Total: ₹{total}\")",
   "e": "This is the course billing loop without `input()`: one round per product, adding its price × quantity to the running total.",
   "out": "Total: ₹1020"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "while-else",
   "q": "This code should print `Card blocked` only once, after all 3 tries. Fix it.",
   "c": "attempt = 0\nwhile attempt < 3:\n    attempt += 1\n    if attempt == 5:\n        print(\"found\")\n        break\n    else:\n        print(\"Card blocked\")",
   "fixed": "attempt = 0\nwhile attempt < 3:\n    attempt += 1\n    if attempt == 5:\n        print(\"found\")\n        break\nelse:\n    print(\"Card blocked\")",
   "e": "The `else` should belong to the `while`, not the `if`. Move it left so it lines up with `while`.",
   "want": "Card blocked",
   "got": "Card blocked\nCard blocked\nCard blocked"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The while loop",
   "q": "Start with `n = 6`. While `n` is not 1: if it is even, halve it with `//`, otherwise make it `3 * n + 1`. Count the steps and print the count.",
   "starter": "n = 6\nsteps = 0\n",
   "sol": "n = 6\nsteps = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n //= 2\n    else:\n        n = 3 * n + 1\n    steps += 1\nprint(steps)",
   "e": "The values go 6, 3, 10, 5, 16, 8, 4, 2, 1. That is 8 steps.",
   "out": "8"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The while loop",
   "q": "`n = 4705`. Reverse its digits with a while loop, using `% 10` and `// 10`, and print the reversed number.",
   "starter": "n = 4705\nreverse = 0\n",
   "sol": "n = 4705\nreverse = 0\nwhile n > 0:\n    reverse = reverse * 10 + n % 10\n    n //= 10\nprint(reverse)",
   "e": "Each round takes the last digit with `% 10` and adds it to the end of `reverse`. The result is 5074.",
   "out": "5074"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "while True with break",
   "q": "Find the smallest number greater than 1000 that divides exactly by both 7 and 13. Use `while True` and `break`, then print it.",
   "starter": "n = 1000\n",
   "sol": "n = 1000\nwhile True:\n    n += 1\n    if n % 7 == 0 and n % 13 == 0:\n        break\nprint(n)",
   "e": "Move to the next number first, then test it. The first one that passes both checks is 1001.",
   "out": "1001"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "break, continue and pass",
   "q": "Loop over 1 to 30. Skip the numbers that are not multiples of 3, skip the multiples of 5 too, and stop completely at 25. Print the kept numbers on one line.",
   "starter": "# continue to skip, break to stop\n",
   "sol": "for n in range(1, 31):\n    if n == 25:\n        break\n    if n % 3 != 0 or n % 5 == 0:\n        continue\n    print(n, end=\" \")",
   "e": "Check the stop first, then the skips. 15 is skipped (a multiple of 5), and the loop stops before 27 and 30.",
   "out": "3 6 9 12 18 21 24 "
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "break, continue and pass",
   "q": "This code should print only the odd numbers `1 3 5`. Fix it.",
   "c": "for i in range(1, 6):\n    if i % 2 == 0:\n        pass\n    print(i, end=\" \")",
   "fixed": "for i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i, end=\" \")",
   "e": "`pass` does nothing, so the `print()` still runs. `continue` skips the rest of the round.",
   "want": "1 3 5 ",
   "got": "1 2 3 4 5 "
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "while-else",
   "q": "Type exactly what this code prints.",
   "c": "n = 10\nwhile n > 0:\n    if n == 4:\n        print(\"break at\", n)\n        break\n    n -= 3\nelse:\n    print(\"no break\")",
   "e": "n goes 10, 7, 4. At 4 the `break` runs, so the `else` is skipped.",
   "ans": "break at 4"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "for or while?",
   "q": "A loan of `loan = 10000` gets 2% interest added each month, and then 2000 is paid. Count the months until the loan is 0 or less. Print the months and the final loan rounded to 2 decimals, with one `print()`.",
   "starter": "loan = 10000\nmonths = 0\n",
   "sol": "loan = 10000\nmonths = 0\nwhile loan > 0:\n    loan *= 1.02\n    loan -= 2000\n    months += 1\nprint(months, round(loan, 2))",
   "e": "The number of months is unknown in advance, so use `while`. The final loan is negative: that is the overpayment in the last month.",
   "out": "6 -1354.62"
  }
 ],
 "strings": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Changing case",
   "q": "Type exactly what this code prints.",
   "c": "print(\"Hello\".upper(), \"Hello\".lower())",
   "e": "`upper()` makes every letter capital and `lower()` makes every letter small.",
   "ans": "HELLO hello"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Indexing: one character at a time",
   "q": "`word = \"Python\"`. Print its first and its last character.",
   "starter": "word = \"Python\"\n",
   "sol": "word = \"Python\"\nprint(word[0], word[-1])",
   "e": "Index `0` is the first character and `-1` is always the last one.",
   "out": "P n"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Slicing: cut out a piece",
   "q": "`s = \"data\"`. Use a slice to print the two middle letters.",
   "starter": "s = \"data\"\n",
   "sol": "s = \"data\"\nprint(s[1:3])",
   "e": "`[1:3]` starts at index 1 and stops **before** index 3.",
   "out": "at"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Checking what a string contains",
   "q": "Type exactly what this code prints.",
   "c": "print(\"2024\".isdigit(), \"20.5\".isdigit())",
   "e": "`isdigit()` is `True` only when **every** character is a digit. The dot in `20.5` is not a digit.",
   "ans": "True False"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Changing case",
   "q": "`word = \"python\"`. Print it in capital letters, then how many characters it has.",
   "starter": "word = \"python\"\n",
   "sol": "word = \"python\"\nprint(word.upper(), len(word))",
   "e": "`upper()` gives the capital version and `len()` counts the characters.",
   "out": "PYTHON 6"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Cleaning: strip and replace",
   "q": "`city = \"  goa  \"`. Print it with the spaces removed from both ends, inside square brackets.",
   "starter": "city = \"  goa  \"\n",
   "sol": "city = \"  goa  \"\nprint(\"[\" + city.strip() + \"]\")",
   "e": "`strip()` removes the spaces at both ends. The brackets show that no spaces are left.",
   "out": "[goa]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Indexing: one character at a time",
   "q": "This code should print the last letter of the name, but it crashes. Fix it.",
   "c": "name = \"Asha\"\nprint(name[4])",
   "fixed": "name = \"Asha\"\nprint(name[-1])",
   "e": "\"Asha\" has 4 letters, at indexes 0 to 3, so index 4 does not exist. `name[-1]` (or `name[3]`) is the last letter.",
   "want": "a",
   "got": "IndexError: string index out of range"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "split() and join()",
   "q": "`line = \"red,green,blue\"`. Split it at the commas and print the list you get.",
   "starter": "line = \"red,green,blue\"\n",
   "sol": "line = \"red,green,blue\"\nprint(line.split(\",\"))",
   "e": "`split(\",\")` cuts the text at every comma and gives a list of strings.",
   "out": "['red', 'green', 'blue']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Slicing: cut out a piece",
   "q": "`s = \"Python\"`. Print its last 3 characters using a negative slice.",
   "starter": "s = \"Python\"\n",
   "sol": "s = \"Python\"\nprint(s[-3:])",
   "e": "`-3` starts three characters from the end. With no stop, the slice runs to the end.",
   "out": "hon"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Slicing: cut out a piece",
   "q": "Type exactly what this code prints.",
   "c": "print(\"abcdefgh\"[::3])",
   "e": "A step of 3 takes every third character: indexes 0, 3 and 6.",
   "ans": "adg"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Slicing: cut out a piece",
   "q": "`s = \"Python\"`. Print it backwards.",
   "starter": "s = \"Python\"\n",
   "sol": "s = \"Python\"\nprint(s[::-1])",
   "e": "A step of `-1` walks from the end to the start: `[::-1]` reverses any string.",
   "out": "nohtyP"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Strings are immutable",
   "q": "This code should print `Asha`, but it crashes. Fix it.",
   "c": "name = \"asha\"\nname[0] = \"A\"\nprint(name)",
   "fixed": "name = \"asha\"\nname = \"A\" + name[1:]\nprint(name)",
   "e": "Strings cannot be changed in place: they are immutable. Build a **new** string and store it back. (`name = name.capitalize()` also works.)",
   "want": "Asha",
   "got": "TypeError: 'str' object does not support item assignment"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Searching inside a string",
   "q": "`text = \"banana\"`. Print how many times `a` appears, then the position of the first `n`.",
   "starter": "text = \"banana\"\n",
   "sol": "text = \"banana\"\nprint(text.count(\"a\"), text.find(\"n\"))",
   "e": "`count()` counts the matches. `find()` gives the position of the first match (and `-1` if there is none).",
   "out": "3 2"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Searching inside a string",
   "q": "Type exactly what this code prints.",
   "c": "print(\"report.csv\".endswith(\".csv\"), \"Report\".startswith(\"r\"))",
   "e": "`startswith()` and `endswith()` care about capitals. `Report` starts with a capital `R`.",
   "ans": "True False"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Cleaning: strip and replace",
   "q": "This code should print `1300`, but it crashes. Fix it.",
   "c": "price = \"1,250\"\ntotal = int(price) + 50\nprint(total)",
   "fixed": "price = \"1,250\"\ntotal = int(price.replace(\",\", \"\")) + 50\nprint(total)",
   "e": "`int()` cannot read the comma. Remove it first with `replace(\",\", \"\")`, then convert.",
   "want": "1300",
   "got": "ValueError: invalid literal for int() with base 10: '1,250'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Cleaning: strip and replace",
   "q": "`raw = \"  aSHA reddy \"`. Print the name cleaned up: no extra spaces, and a capital first letter on each word.",
   "starter": "raw = \"  aSHA reddy \"\n",
   "sol": "raw = \"  aSHA reddy \"\nprint(raw.strip().title())",
   "e": "`strip()` removes the spaces and `title()` fixes the capitals. You can chain them.",
   "out": "Asha Reddy"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Looping over a string",
   "q": "`word = \"education\"`. Use a loop to count the vowels (a, e, i, o, u) and print the count.",
   "starter": "word = \"education\"\n",
   "sol": "word = \"education\"\ncount = 0\nfor ch in word:\n    if ch in \"aeiou\":\n        count += 1\nprint(count)",
   "e": "A loop visits one character at a time, and `ch in \"aeiou\"` checks if it is a vowel.",
   "out": "5"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "split() and join()",
   "q": "`date = \"2026 10 30\"`. Print it as `2026-10-30` using `split()` and `join()`.",
   "starter": "date = \"2026 10 30\"\n",
   "sol": "date = \"2026 10 30\"\nprint(\"-\".join(date.split()))",
   "e": "`split()` cuts at the spaces, then `\"-\".join(...)` glues the pieces with `-` between them.",
   "out": "2026-10-30"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Searching inside a string",
   "q": "`email = \"raman@company.in\"`. Use `find()` and slicing to print the name, then the domain in capitals.",
   "starter": "email = \"raman@company.in\"\n",
   "sol": "email = \"raman@company.in\"\nat = email.find(\"@\")\nprint(email[:at], email[at + 1:].upper())",
   "e": "`find(\"@\")` gives the position of `@`. `[:at]` stops before it and `[at + 1:]` starts just after it.",
   "out": "raman COMPANY.IN"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "split() and join()",
   "q": "This code should print the list of words, but it prints something strange. Fix it.",
   "c": "text = \"learn python every day\"\nwords = text.split\nprint(words)",
   "fixed": "text = \"learn python every day\"\nwords = text.split()\nprint(words)",
   "e": "Without brackets, `text.split` is the method itself, not its result. Add `()` to run it.",
   "want": "['learn', 'python', 'every', 'day']",
   "got": "<built-in method split of str object at 0x...>"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Cleaning: strip and replace",
   "q": "Type exactly what this code prints.",
   "c": "s = \"  Data Analyst  \"\nprint(s.strip().lower().replace(\" \", \"_\"))",
   "e": "Chained methods run left to right. `strip()` goes first, so only the middle space becomes `_`.",
   "ans": "data_analyst"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Searching inside a string",
   "q": "This code should print `found`, because \"FUN\" is in the text. Fix it.",
   "c": "text = \"Python is FUN\"\nif \"fun\" in text:\n    print(\"found\")\nelse:\n    print(\"missing\")",
   "fixed": "text = \"Python is FUN\"\nif \"fun\" in text.lower():\n    print(\"found\")\nelse:\n    print(\"missing\")",
   "e": "`in` cares about capitals. Make the text small with `lower()` first, then search for the small word.",
   "want": "found",
   "got": "missing"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Looping over a string",
   "q": "`text = \"data is fun\"`. Reverse each word but keep the words in the same order.",
   "starter": "text = \"data is fun\"\n",
   "sol": "text = \"data is fun\"\nresult = \"\"\nfor w in text.split():\n    result = result + w[::-1] + \" \"\nprint(result.strip())",
   "e": "Loop over `text.split()`, reverse each word with `[::-1]`, and add it to a result string. `strip()` removes the last extra space.",
   "out": "atad si nuf"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Slicing: cut out a piece",
   "q": "`word = \"Level\"`. Print `True` if it reads the same backwards (a palindrome), ignoring capital letters.",
   "starter": "word = \"Level\"\n",
   "sol": "word = \"Level\"\nw = word.lower()\nprint(w == w[::-1])",
   "e": "Make it small first, so `L` and `l` match. Then compare it with its reversed copy.",
   "out": "True"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Slicing: cut out a piece",
   "q": "`phone = \"9848012345\"`. Hide every digit except the last 4 with `*`.",
   "starter": "phone = \"9848012345\"\n",
   "sol": "phone = \"9848012345\"\nprint(\"*\" * (len(phone) - 4) + phone[-4:])",
   "e": "`phone[-4:]` keeps the last 4 digits. `\"*\" * n` repeats the star once for every hidden digit.",
   "out": "******2345"
  }
 ],
 "lists": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Indexing and slicing",
   "q": "Type exactly what this code prints.",
   "c": "colors = [\"red\", \"green\", \"blue\", \"pink\"]\nprint(colors[1], colors[-1])\nprint(colors[1:3])",
   "e": "Indexes start at 0, and `-1` is the last item. A slice `[1:3]` gives a new list with items 1 and 2.",
   "ans": "green pink\n['green', 'blue']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "What is a list?",
   "q": "Make a list `cities` with `\"Delhi\"`, `\"Pune\"` and `\"Goa\"`. Print the list and its length with one `print()`.",
   "starter": "# Make the list\n",
   "sol": "cities = [\"Delhi\", \"Pune\", \"Goa\"]\nprint(cities, len(cities))",
   "e": "Square brackets make a list, and `len()` counts its items.",
   "out": "['Delhi', 'Pune', 'Goa'] 3"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Adding items",
   "q": "`cart = [\"rice\", \"dal\"]`. Add `\"oil\"` at the end and `\"salt\"` at the start. Print the cart.",
   "starter": "cart = [\"rice\", \"dal\"]\n",
   "sol": "cart = [\"rice\", \"dal\"]\ncart.append(\"oil\")\ncart.insert(0, \"salt\")\nprint(cart)",
   "e": "`append()` adds to the end. `insert(0, x)` puts `x` at position 0, the front.",
   "out": "['salt', 'rice', 'dal', 'oil']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Removing items",
   "q": "`stock = [\"pen\", \"ink\", \"pad\", \"ink\"]`. Remove the first `\"ink\"` with `remove()`, then remove the last item with `pop()`. Print the list.",
   "starter": "stock = [\"pen\", \"ink\", \"pad\", \"ink\"]\n",
   "sol": "stock = [\"pen\", \"ink\", \"pad\", \"ink\"]\nstock.remove(\"ink\")\nstock.pop()\nprint(stock)",
   "e": "`remove(x)` deletes the first match only. `pop()` with no index removes the last item.",
   "out": "['pen', 'pad']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Useful built-in functions",
   "q": "`sales = [450, 120, 780, 340]`. Print the total, the smallest and the largest value with one `print()`.",
   "starter": "sales = [450, 120, 780, 340]\n",
   "sol": "sales = [450, 120, 780, 340]\nprint(sum(sales), min(sales), max(sales))",
   "e": "`sum()`, `min()` and `max()` work on a whole list at once, no loop needed.",
   "out": "1690 120 780"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Adding items",
   "q": "This code should print `['apple', 'banana', 'cherry']`, but it crashes. Fix it.",
   "c": "fruits = [\"apple\", \"banana\"]\nfruits.add(\"cherry\")\nprint(fruits)",
   "fixed": "fruits = [\"apple\", \"banana\"]\nfruits.append(\"cherry\")\nprint(fruits)",
   "e": "Lists have no `add()` method (that one belongs to sets). Use `append()` to add to the end of a list.",
   "want": "['apple', 'banana', 'cherry']",
   "got": "AttributeError: 'list' object has no attribute 'add'"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Finding items",
   "q": "Type exactly what this code prints.",
   "c": "tags = [\"sql\", \"python\", \"excel\", \"python\"]\nprint(tags.index(\"python\"), tags.count(\"python\"), \"R\" in tags)",
   "e": "`index()` gives the position of the first match (1). `count()` counts all matches. `in` gives `True` or `False`.",
   "ans": "1 2 False"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Indexing and slicing",
   "q": "This code should print the last mark, `72`, but it crashes. Fix it.",
   "c": "marks = [56, 89, 72]\nprint(marks[3])",
   "fixed": "marks = [56, 89, 72]\nprint(marks[-1])",
   "e": "A list of 3 items has indexes 0, 1 and 2, so index 3 is out of range. `[-1]` always gives the last item.",
   "want": "72",
   "got": "IndexError: list index out of range"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Sorting: sort() vs sorted()",
   "q": "`prices = [499, 120, 999, 250, 75]`. Print the 2 cheapest prices, using `sorted()` and a slice.",
   "starter": "prices = [499, 120, 999, 250, 75]\n",
   "sol": "prices = [499, 120, 999, 250, 75]\nprint(sorted(prices)[:2])",
   "e": "`sorted()` gives a new list from smallest to largest, and `[:2]` keeps the first two.",
   "out": "[75, 120]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Sorting: sort() vs sorted()",
   "q": "This code should print `[1, 2, 3]`, but it prints `None`. Fix it.",
   "c": "nums = [3, 1, 2]\nnums = nums.sort()\nprint(nums)",
   "fixed": "nums = [3, 1, 2]\nnums.sort()\nprint(nums)",
   "e": "`sort()` changes the list in place and returns `None`. Do not store its result. (Or use `nums = sorted(nums)`.)",
   "want": "[1, 2, 3]",
   "got": "None"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Copying lists: the aliasing trap",
   "q": "Type exactly what this code prints.",
   "c": "a = [1, 2, 3]\nb = a\nc = a.copy()\nb.append(4)\nprint(a, c)",
   "e": "`b = a` makes a second name for the same list, so changing `b` changes `a`. `copy()` makes a separate list.",
   "ans": "[1, 2, 3, 4] [1, 2, 3]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Looping over lists",
   "q": "`names = [\"asha\", \"ravi\", \"neha\"]`. Print each name in capitals with its number: `1. ASHA`, `2. RAVI`, `3. NEHA`.",
   "starter": "names = [\"asha\", \"ravi\", \"neha\"]\n",
   "sol": "names = [\"asha\", \"ravi\", \"neha\"]\nfor num, name in enumerate(names, start=1):\n    print(f\"{num}. {name.upper()}\")",
   "e": "`enumerate(..., start=1)` gives the number and the item. `upper()` makes the capitals.",
   "out": "1. ASHA\n2. RAVI\n3. NEHA"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Nested lists",
   "q": "`sales = [[120, 80], [200, 150], [90, 60]]` (one row per day, one column per shop). Print the sales of shop 2 on day 3, and the total of day 2, with one `print()`.",
   "starter": "sales = [[120, 80], [200, 150], [90, 60]]\n",
   "sol": "sales = [[120, 80], [200, 150], [90, 60]]\nprint(sales[2][1], sum(sales[1]))",
   "e": "The first index picks the row (day 3 is index 2) and the second picks the column (shop 2 is index 1). `sales[1]` is the whole day 2 row.",
   "out": "60 350"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "A first look at list comprehensions",
   "q": "`temps = [31, 35, 29, 38, 33]`. Use a list comprehension to keep only the temperatures above 32, and print the new list.",
   "starter": "temps = [31, 35, 29, 38, 33]\n",
   "sol": "temps = [31, 35, 29, 38, 33]\nprint([t for t in temps if t > 32])",
   "e": "`[t for t in temps if t > 32]` is a loop and a filter in one line.",
   "out": "[35, 38, 33]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Joining and repeating lists",
   "q": "Type exactly what this code prints.",
   "c": "a = [1, 2]\nb = a + [3]\nprint(b * 2, len(b))",
   "e": "`+` joins two lists into a new one. `* 2` repeats the list. `b` itself still has 3 items.",
   "ans": "[1, 2, 3, 1, 2, 3] 3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Removing duplicates (course exercise)",
   "q": "`emails = [\"a@x.com\", \"b@x.com\", \"a@x.com\", \"c@x.com\", \"b@x.com\"]`. Remove the duplicates but keep the first-seen order, using a loop and a new list. Print it.",
   "starter": "emails = [\"a@x.com\", \"b@x.com\", \"a@x.com\", \"c@x.com\", \"b@x.com\"]\n",
   "sol": "emails = [\"a@x.com\", \"b@x.com\", \"a@x.com\", \"c@x.com\", \"b@x.com\"]\nunique = []\nfor e in emails:\n    if e not in unique:\n        unique.append(e)\nprint(unique)",
   "e": "Add an item only if it is `not in` the new list yet. Unlike `set()`, this keeps the original order.",
   "out": "['a@x.com', 'b@x.com', 'c@x.com']"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Looping over lists",
   "q": "This code should remove every even number and print `[5]`, but it prints `[4, 5]`. Fix it.",
   "c": "nums = [2, 4, 5, 6]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)",
   "fixed": "nums = [2, 4, 5, 6]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)",
   "e": "Removing items while looping over the same list makes the loop skip items. Loop over a copy, `nums[:]`, and remove from the original.",
   "want": "[5]",
   "got": "[4, 5]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Useful built-in functions",
   "q": "`marks = [45, 82, 67, 90, 38]`. Print the average rounded to 1 decimal place, and whether all marks are 35 or more (use `all()`), with one `print()`.",
   "starter": "marks = [45, 82, 67, 90, 38]\n",
   "sol": "marks = [45, 82, 67, 90, 38]\nprint(round(sum(marks) / len(marks), 1), all(m >= 35 for m in marks))",
   "e": "Average = `sum()` ÷ `len()`. `all()` is `True` only if the check is `True` for every item.",
   "out": "64.4 True"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Sorting: sort() vs sorted()",
   "q": "`words = [\"kiwi\", \"banana\", \"fig\", \"apple\"]`. Print the words sorted by length, shortest first.",
   "starter": "words = [\"kiwi\", \"banana\", \"fig\", \"apple\"]\n",
   "sol": "words = [\"kiwi\", \"banana\", \"fig\", \"apple\"]\nprint(sorted(words, key=len))",
   "e": "`key=len` tells `sorted()` to compare the lengths instead of the words themselves.",
   "out": "['fig', 'kiwi', 'apple', 'banana']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Looping over lists",
   "q": "`readings = [12.5, -1, 13.2, -1, 12.9]`, where -1 means a missing reading. Build a clean list without the -1 values, then print the average of the clean readings rounded to 2 decimals.",
   "starter": "readings = [12.5, -1, 13.2, -1, 12.9]\n",
   "sol": "readings = [12.5, -1, 13.2, -1, 12.9]\nclean = []\nfor r in readings:\n    if r != -1:\n        clean.append(r)\nprint(round(sum(clean) / len(clean), 2))",
   "e": "Clean first, then calculate: the average must divide by the number of real readings (3), not 5.",
   "out": "12.87"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested lists",
   "q": "`marks = [[\"Asha\", 78], [\"Ravi\", 92], [\"Neha\", 85]]`. Use a loop to find and print the name with the highest mark.",
   "starter": "marks = [[\"Asha\", 78], [\"Ravi\", 92], [\"Neha\", 85]]\n",
   "sol": "marks = [[\"Asha\", 78], [\"Ravi\", 92], [\"Neha\", 85]]\nbest = marks[0]\nfor row in marks:\n    if row[1] > best[1]:\n        best = row\nprint(best[0])",
   "e": "Each row is a small list: `row[0]` is the name and `row[1]` the mark. Keep the best row seen so far.",
   "out": "Ravi"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Copying lists: the aliasing trap",
   "q": "This code should keep a backup of the old list and print `[10, 20, 30]`. Fix it.",
   "c": "original = [10, 20, 30]\nbackup = original\noriginal.append(40)\nprint(backup)",
   "fixed": "original = [10, 20, 30]\nbackup = original.copy()\noriginal.append(40)\nprint(backup)",
   "e": "`backup = original` is not a copy: both names point to one list. `copy()` (or `[:]`) makes a real copy.",
   "want": "[10, 20, 30]",
   "got": "[10, 20, 30, 40]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Changing items",
   "q": "`nums = [1, 2, 3, 4, 5, 6]`. Replace the middle two items (3 and 4) with 30 and 40 using ONE slice assignment. Then print the list reversed with a slice.",
   "starter": "nums = [1, 2, 3, 4, 5, 6]\n",
   "sol": "nums = [1, 2, 3, 4, 5, 6]\nnums[2:4] = [30, 40]\nprint(nums[::-1])",
   "e": "A slice on the left of `=` replaces that part of the list. `[::-1]` reads the list backwards.",
   "out": "[6, 5, 40, 30, 2, 1]"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Useful built-in functions",
   "q": "Type exactly what this code prints.",
   "c": "nums = [4, 9, 1, 7]\nprint(sorted(nums)[-2:], max(nums) - min(nums), sum(nums) // len(nums))",
   "e": "`sorted(nums)[-2:]` is the two biggest values. The range is 9 − 1 = 8, and 21 // 4 = 5.",
   "ans": "[7, 9] 8 5"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Removing items",
   "q": "`queue = [\"T1\", \"T2\", \"T3\", \"T4\"]`. Serve tickets from the front with `pop(0)` until only 2 are left, printing `Served T1` and so on. Then print the queue.",
   "starter": "queue = [\"T1\", \"T2\", \"T3\", \"T4\"]\n",
   "sol": "queue = [\"T1\", \"T2\", \"T3\", \"T4\"]\nwhile len(queue) > 2:\n    ticket = queue.pop(0)\n    print(\"Served\", ticket)\nprint(queue)",
   "e": "`pop(0)` removes the first item and gives it back, so you can print it. The loop stops when 2 are left.",
   "out": "Served T1\nServed T2\n['T3', 'T4']"
  }
 ],
 "tuples": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Creating tuples",
   "q": "Type exactly what this code prints.",
   "c": "x = (11)\ny = (11,)\nprint(type(x), type(y))",
   "e": "Brackets alone do not make a tuple: `(11)` is just the number 11. The comma makes the tuple.",
   "ans": "<class 'int'> <class 'tuple'>"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "What is a tuple?",
   "q": "Make a tuple `rgb` with 255, 128 and 0. Print it and its length with one `print()`.",
   "starter": "# Make the tuple\n",
   "sol": "rgb = (255, 128, 0)\nprint(rgb, len(rgb))",
   "e": "Round brackets with commas make a tuple. `len()` works just like with lists.",
   "out": "(255, 128, 0) 3"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Indexing, slicing and looping",
   "q": "`week = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\")`. Print the first day, the last day, and the middle three days as a tuple, with one `print()`.",
   "starter": "week = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\")\n",
   "sol": "week = (\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\")\nprint(week[0], week[-1], week[1:4])",
   "e": "Indexing and slicing work the same as with lists. A slice of a tuple is a tuple.",
   "out": "Mon Fri ('Tue', 'Wed', 'Thu')"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Only two methods",
   "q": "`votes = (\"A\", \"B\", \"A\", \"C\", \"A\")`. Print how many votes `\"A\"` got and the position of the first `\"C\"`, with one `print()`.",
   "starter": "votes = (\"A\", \"B\", \"A\", \"C\", \"A\")\n",
   "sol": "votes = (\"A\", \"B\", \"A\", \"C\", \"A\")\nprint(votes.count(\"A\"), votes.index(\"C\"))",
   "e": "Tuples have only two methods: `count()` and `index()`.",
   "out": "3 3"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Packing and unpacking",
   "q": "`point = (17.38, 78.48)`. Unpack it into `lat` and `lon`, then print `Latitude: 17.38, Longitude: 78.48`.",
   "starter": "point = (17.38, 78.48)\n",
   "sol": "point = (17.38, 78.48)\nlat, lon = point\nprint(f\"Latitude: {lat}, Longitude: {lon}\")",
   "e": "Unpacking gives each item of the tuple its own name, in order.",
   "out": "Latitude: 17.38, Longitude: 78.48"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Immutability",
   "q": "This code should print `(1280, 1080)`, but it crashes. Fix it.",
   "c": "size = (1920, 1080)\nsize[0] = 1280\nprint(size)",
   "fixed": "size = (1920, 1080)\nsize = (1280, size[1])\nprint(size)",
   "e": "Tuples are immutable: you cannot change an item. Build a new tuple and store it in the same name.",
   "want": "(1280, 1080)",
   "got": "TypeError: 'tuple' object does not support item assignment"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Packing and unpacking",
   "q": "Type exactly what this code prints.",
   "c": "a, b = 5, 9\na, b = b, a + b\nprint(a, b)",
   "e": "The right side is worked out first, using the old values: `(9, 5 + 9)`. Then it is unpacked into `a` and `b`.",
   "ans": "9 14"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Packing and unpacking",
   "q": "This code should print `Asha`, but it crashes. Fix it.",
   "c": "row = (101, \"Asha\", \"Deluxe\")\nbooking_id, guest = row\nprint(guest)",
   "fixed": "row = (101, \"Asha\", \"Deluxe\")\nbooking_id, guest, room = row\nprint(guest)",
   "e": "When unpacking, you need one name for every item: 3 items need 3 names.",
   "want": "Asha",
   "got": "ValueError: too many values to unpack (expected 2)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Packing and unpacking",
   "q": "`scores = (55, 72, 90, 64, 81)`. Use `first, *middle, last` to print the first score, the last score, and how many scores are in the middle.",
   "starter": "scores = (55, 72, 90, 64, 81)\n",
   "sol": "scores = (55, 72, 90, 64, 81)\nfirst, *middle, last = scores\nprint(first, last, len(middle))",
   "e": "The starred name collects everything in between (as a list).",
   "out": "55 81 3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Immutability",
   "q": "`stock = (\"pen\", \"ink\", \"pad\")`. Replace `\"ink\"` with `\"gel\"` by converting to a list and back to a tuple. Print the new tuple.",
   "starter": "stock = (\"pen\", \"ink\", \"pad\")\n",
   "sol": "stock = (\"pen\", \"ink\", \"pad\")\ntemp = list(stock)\ntemp[1] = \"gel\"\nstock = tuple(temp)\nprint(stock)",
   "e": "To change a tuple, turn it into a list, change the list, and turn it back with `tuple()`.",
   "out": "('pen', 'gel', 'pad')"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Indexing, slicing and looping",
   "q": "Type exactly what this code prints.",
   "c": "m = ((1, 2, 3), (4, 5, 6), (7, 8, 9))\nprint(m[1][2], m[-1][0], m[0][1:])",
   "e": "The first index picks the inner tuple, the second picks the item. A slice of the inner tuple is a tuple.",
   "ans": "6 7 (2, 3)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Indexing, slicing and looping",
   "q": "`rooms = ((\"R101\", 2499), (\"R102\", 3499), (\"R103\", 1999))`. Loop over it and print each room with its rate: `R101: ₹2,499`.",
   "starter": "rooms = ((\"R101\", 2499), (\"R102\", 3499), (\"R103\", 1999))\n",
   "sol": "rooms = ((\"R101\", 2499), (\"R102\", 3499), (\"R103\", 1999))\nfor room, rate in rooms:\n    print(f\"{room}: ₹{rate:,}\")",
   "e": "Each item is a pair, so you can unpack it right in the `for` line.",
   "out": "R101: ₹2,499\nR102: ₹3,499\nR103: ₹1,999"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Creating tuples",
   "q": "Type exactly what this code prints.",
   "c": "a = 1, 2, 3\nb = tuple(\"hi\")\nprint(type(a), b, len(a + b))",
   "e": "Values with commas are packed into a tuple even without brackets. `tuple(\"hi\")` splits the text into letters. `+` joins the two tuples.",
   "ans": "<class 'tuple'> ('h', 'i') 5"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Why use a tuple?",
   "q": "A booking record is fixed, so it is a tuple: `row = (101, \"Asha\", \"Deluxe\", 3499.0)`. Unpack it and print `Asha booked Deluxe for ₹3,499.00`.",
   "starter": "row = (101, \"Asha\", \"Deluxe\", 3499.0)\n",
   "sol": "row = (101, \"Asha\", \"Deluxe\", 3499.0)\nbooking_id, guest, room, rate = row\nprint(f\"{guest} booked {room} for ₹{rate:,.2f}\")",
   "e": "Unpacking gives each column a clear name, which makes the next line easy to read.",
   "out": "Asha booked Deluxe for ₹3,499.00"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Packing and unpacking",
   "q": "This code should print `1 [2, 3]`, but it crashes. Fix it.",
   "c": "x, y = (1, 2, 3)\nprint(x, y)",
   "fixed": "x, *y = (1, 2, 3)\nprint(x, y)",
   "e": "Two names cannot take three values. A starred name (`*y`) collects all the extra values.",
   "want": "1 [2, 3]",
   "got": "ValueError: too many values to unpack (expected 2)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Immutability",
   "q": "`data = (1, [2, 3])`. The tuple cannot change, but the list inside it can. Append 4 to the inner list and print the tuple.",
   "starter": "data = (1, [2, 3])\n",
   "sol": "data = (1, [2, 3])\ndata[1].append(4)\nprint(data)",
   "e": "The tuple still holds the same list. The list itself is mutable, so `append()` works.",
   "out": "(1, [2, 3, 4])"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Packing and unpacking",
   "q": "`a, b, c = \"x\", \"y\", \"z\"`. In one line, rotate them so `a` gets `b`'s value, `b` gets `c`'s and `c` gets `a`'s. Print all three.",
   "starter": "a, b, c = \"x\", \"y\", \"z\"\n",
   "sol": "a, b, c = \"x\", \"y\", \"z\"\na, b, c = b, c, a\nprint(a, b, c)",
   "e": "Python packs the right side into a tuple first, then unpacks it, so no value is lost.",
   "out": "y z x"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Only two methods",
   "q": "This code should print `1`, the position of `\"ink\"`, but it crashes. Fix it.",
   "c": "items = (\"pen\", \"ink\")\nprint(items.find(\"ink\"))",
   "fixed": "items = (\"pen\", \"ink\")\nprint(items.index(\"ink\"))",
   "e": "`find()` is a string method. Tuples only have `count()` and `index()`.",
   "want": "1",
   "got": "AttributeError: 'tuple' object has no attribute 'find'"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Only two methods",
   "q": "`temps = (31, 33, 31, 35, 31, 33)`. Print each different temperature once, in order of first appearance, with how many times it appears: `31: 3`, `33: 2`, `35: 1`. Use `count()` and `index()`.",
   "starter": "temps = (31, 33, 31, 35, 31, 33)\n",
   "sol": "temps = (31, 33, 31, 35, 31, 33)\nfor pos, t in enumerate(temps):\n    if temps.index(t) == pos:\n        print(f\"{t}: {temps.count(t)}\")",
   "e": "`index(t)` gives the first position of `t`. If it equals the current position, this is the first time we see `t`.",
   "out": "31: 3\n33: 2\n35: 1"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Indexing, slicing and looping",
   "q": "`records = ((\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91))`. Print `Average: 80.0`, then `Above: Asha Neha` (the names above the average).",
   "starter": "records = ((\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91))\n",
   "sol": "records = ((\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91))\ntotal = 0\nfor name, marks in records:\n    total += marks\naverage = total / len(records)\nabove = []\nfor name, marks in records:\n    if marks > average:\n        above.append(name)\nprint(\"Average:\", average)\nprint(\"Above:\", \" \".join(above))",
   "e": "Two passes: the first works out the average, the second compares each mark with it.",
   "out": "Average: 80.0\nAbove: Asha Neha"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Packing and unpacking",
   "q": "Each sale is `(product, qty, price)`: `sales = ((\"Tea\", 3, 20), (\"Coffee\", 2, 45), (\"Juice\", 1, 60))`. Unpack each sale in the `for` line and print the total bill.",
   "starter": "sales = ((\"Tea\", 3, 20), (\"Coffee\", 2, 45), (\"Juice\", 1, 60))\n",
   "sol": "sales = ((\"Tea\", 3, 20), (\"Coffee\", 2, 45), (\"Juice\", 1, 60))\ntotal = 0\nfor product, qty, price in sales:\n    total += qty * price\nprint(total)",
   "e": "Unpacking three values per row gives clear names for the maths: 60 + 90 + 60 = 210.",
   "out": "210"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Immutability",
   "q": "This code should print `(3, 4, 5)`, but it crashes. Fix it.",
   "c": "point = (3, 4)\npoint.append(5)\nprint(point)",
   "fixed": "point = (3, 4)\npoint = point + (5,)\nprint(point)",
   "e": "Tuples have no `append()`. Join a new one-item tuple with `+`, and remember the comma in `(5,)`.",
   "want": "(3, 4, 5)",
   "got": "AttributeError: 'tuple' object has no attribute 'append'"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Packing and unpacking",
   "q": "Type exactly what this code prints.",
   "c": "first, *rest = \"data\"\nprint(first, rest)",
   "e": "Unpacking works on any sequence, text too. `first` gets `d` and the starred name gets the rest as a list.",
   "ans": "d ['a', 't', 'a']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Immutability",
   "q": "`scores = (72, 55, 90, 64)`. Make a sorted tuple (lowest first) and print it. Then print the highest score using an index of that sorted tuple.",
   "starter": "scores = (72, 55, 90, 64)\n",
   "sol": "scores = (72, 55, 90, 64)\nranked = tuple(sorted(scores))\nprint(ranked)\nprint(ranked[-1])",
   "e": "`sorted()` returns a list, so wrap it in `tuple()`. The biggest value is then the last item.",
   "out": "(55, 64, 72, 90)\n90"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Creating tuples",
   "q": "Build a list of the squares of 1 to 5 with a loop, turn it into a tuple, and print the tuple and its type with one `print()`.",
   "starter": "squares = []\n",
   "sol": "squares = []\nfor n in range(1, 6):\n    squares.append(n * n)\nresult = tuple(squares)\nprint(result, type(result))",
   "e": "Collect in a list (it can grow), then lock the finished data in a tuple with `tuple()`.",
   "out": "(1, 4, 9, 16, 25) <class 'tuple'>"
  }
 ],
 "sets": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "What is a set?",
   "q": "Type exactly what this code prints.",
   "c": "s = {3, 1, 3, 2, 1}\nprint(len(s), sorted(s))",
   "e": "A set keeps each value once, so only 1, 2 and 3 remain. `sorted()` gives them back as a list in order.",
   "ans": "3 [1, 2, 3]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "What is a set?",
   "q": "`visits = [\"Pune\", \"Goa\", \"Pune\", \"Delhi\", \"Goa\"]`. Use `set()` to print how many different cities there are.",
   "starter": "visits = [\"Pune\", \"Goa\", \"Pune\", \"Delhi\", \"Goa\"]\n",
   "sol": "visits = [\"Pune\", \"Goa\", \"Pune\", \"Delhi\", \"Goa\"]\nprint(len(set(visits)))",
   "e": "`set()` drops the repeats, and `len()` counts what is left.",
   "out": "3"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Adding and removing",
   "q": "`tags = {\"sql\", \"python\"}`. Add `\"excel\"`, then add `\"sql\"` again. Print the tags sorted.",
   "starter": "tags = {\"sql\", \"python\"}\n",
   "sol": "tags = {\"sql\", \"python\"}\ntags.add(\"excel\")\ntags.add(\"sql\")\nprint(sorted(tags))",
   "e": "`add()` puts one item in. Adding a value that is already there changes nothing.",
   "out": "['excel', 'python', 'sql']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Set operations: comparing two groups",
   "q": "`a = {1, 2, 3, 4}` and `b = {3, 4, 5}`. Print the sorted union and the sorted intersection, with one `print()`.",
   "starter": "a = {1, 2, 3, 4}\nb = {3, 4, 5}\n",
   "sol": "a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(sorted(a | b), sorted(a & b))",
   "e": "`|` (union) gives everything in either set. `&` (intersection) gives only what is in both.",
   "out": "[1, 2, 3, 4, 5] [3, 4]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "What is a set?",
   "q": "This code should check whether `\"apple\"` is in the set and print `True`, but it crashes. Fix it.",
   "c": "fruits = {\"apple\", \"banana\"}\nprint(fruits[0])",
   "fixed": "fruits = {\"apple\", \"banana\"}\nprint(\"apple\" in fruits)",
   "e": "Sets have no order, so there is no index like `[0]`. Use `in` to check if a value is there.",
   "want": "True",
   "got": "TypeError: 'set' object is not subscriptable"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Adding and removing",
   "q": "Type exactly what this code prints.",
   "c": "nums = {1, 2, 3}\nnums.discard(9)\nnums.add(2)\nnums.update([4, 5])\nprint(sorted(nums))",
   "e": "`discard()` of a missing value does nothing (no error). `add(2)` changes nothing. `update()` adds several values.",
   "ans": "[1, 2, 3, 4, 5]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Subset, superset, disjoint",
   "q": "`A = {1, 2}` and `B = {1, 2, 3}`. Print whether A is a subset of B, and whether B is a subset of A, with one `print()`.",
   "starter": "A = {1, 2}\nB = {1, 2, 3}\n",
   "sol": "A = {1, 2}\nB = {1, 2, 3}\nprint(A.issubset(B), B.issubset(A))",
   "e": "A is a subset of B when every item of A is also in B. B has 3, which A does not have.",
   "out": "True False"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Adding and removing",
   "q": "This code should print `['SQL']`, but it crashes because `\"Excel\"` is not in the set. Fix it.",
   "c": "skills = {\"SQL\"}\nskills.remove(\"Excel\")\nprint(sorted(skills))",
   "fixed": "skills = {\"SQL\"}\nskills.discard(\"Excel\")\nprint(sorted(skills))",
   "e": "`remove()` gives a `KeyError` for a missing value. `discard()` removes it if it is there and stays quiet if not.",
   "want": "['SQL']",
   "got": "KeyError: 'Excel'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set operations: comparing two groups",
   "q": "`mon = {\"Tea\", \"Coffee\", \"Samosa\"}` and `tue = {\"Coffee\", \"Juice\", \"Samosa\"}`. Print the items sold on both days (sorted), then the items sold on only one of the two days (sorted).",
   "starter": "mon = {\"Tea\", \"Coffee\", \"Samosa\"}\ntue = {\"Coffee\", \"Juice\", \"Samosa\"}\n",
   "sol": "mon = {\"Tea\", \"Coffee\", \"Samosa\"}\ntue = {\"Coffee\", \"Juice\", \"Samosa\"}\nprint(sorted(mon & tue))\nprint(sorted(mon ^ tue))",
   "e": "`&` keeps what both days share. `^` (symmetric difference) keeps what is in exactly one of them.",
   "out": "['Coffee', 'Samosa']\n['Juice', 'Tea']"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Set operations: comparing two groups",
   "q": "Type exactly what this code prints.",
   "c": "a = {2, 4, 6}\nb = {4, 6, 8}\nprint(sorted(a - b), sorted(b - a), sorted(a ^ b))",
   "e": "`a - b` is what only `a` has. The order matters: `b - a` is different. `^` is both differences together.",
   "ans": "[2] [8] [2, 8]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set comprehensions and frozenset",
   "q": "Use a set comprehension to collect the remainders of the numbers 10 to 20 when divided by 4. Print them sorted.",
   "starter": "# {... for n in range(10, 21)}\n",
   "sol": "print(sorted({n % 4 for n in range(10, 21)}))",
   "e": "A set comprehension looks like a list comprehension with curly brackets, and repeats drop out.",
   "out": "[0, 1, 2, 3]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Set operations: comparing two groups",
   "q": "This code should print `[1, 2, 3]`, but it crashes. Fix it.",
   "c": "a = {1, 2}\nb = {2, 3}\nprint(sorted(a + b))",
   "fixed": "a = {1, 2}\nb = {2, 3}\nprint(sorted(a | b))",
   "e": "Sets cannot be joined with `+`. The union operator is `|` (or `a.union(b)`).",
   "want": "[1, 2, 3]",
   "got": "TypeError: unsupported operand type(s) for +: 'set' and 'set'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Real-world uses",
   "q": "`text = \"the cat and the hat and the bat\"`. Print how many different words it has.",
   "starter": "text = \"the cat and the hat and the bat\"\n",
   "sol": "text = \"the cat and the hat and the bat\"\nprint(len(set(text.split())))",
   "e": "`split()` makes a list of words, `set()` keeps each word once, and `len()` counts them.",
   "out": "5"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Subset, superset, disjoint",
   "q": "Type exactly what this code prints.",
   "c": "A = {1, 2, 3}\nB = {1, 2, 3}\nC = {4}\nprint(A <= B, A < B, A.isdisjoint(C))",
   "e": "`<=` is subset (equal sets count). `<` needs B to have something extra. A and C share nothing, so they are disjoint.",
   "ans": "True False True"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Adding and removing",
   "q": "Start with an empty set (careful: `{}` is not a set). Add the numbers from `range(5, 8)` in a loop. Print the sorted set and its type, with one `print()`.",
   "starter": "# An empty set first\n",
   "sol": "nums = set()\nfor n in range(5, 8):\n    nums.add(n)\nprint(sorted(nums), type(nums))",
   "e": "`set()` makes an empty set. `{}` makes an empty dictionary.",
   "out": "[5, 6, 7] <class 'set'>"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Real-world uses",
   "q": "`required = {\"Python\", \"SQL\", \"Excel\"}` and `candidate = {\"SQL\", \"Python\", \"Power BI\"}`. Print the missing skills (sorted), then whether the candidate has all the required skills.",
   "starter": "required = {\"Python\", \"SQL\", \"Excel\"}\ncandidate = {\"SQL\", \"Python\", \"Power BI\"}\n",
   "sol": "required = {\"Python\", \"SQL\", \"Excel\"}\ncandidate = {\"SQL\", \"Python\", \"Power BI\"}\nprint(sorted(required - candidate))\nprint(required.issubset(candidate))",
   "e": "`required - candidate` is what is needed but missing. The candidate covers everything only if `required` is a subset.",
   "out": "['Excel']\nFalse"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Set comprehensions and frozenset",
   "q": "This code should print `{1}`, but it crashes. Fix it.",
   "c": "empty = {}\nempty.add(1)\nprint(empty)",
   "fixed": "empty = set()\nempty.add(1)\nprint(empty)",
   "e": "`{}` is an empty dictionary, which has no `add()`. An empty set is `set()`.",
   "want": "{1}",
   "got": "AttributeError: 'dict' object has no attribute 'add'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set operations: comparing two groups",
   "q": "`team = {\"Asha\", \"Ravi\"}`. A new group `{\"Neha\", \"Ravi\"}` joins. Update `team` in place with `|=`, then print the sorted team and its size.",
   "starter": "team = {\"Asha\", \"Ravi\"}\n",
   "sol": "team = {\"Asha\", \"Ravi\"}\nteam |= {\"Neha\", \"Ravi\"}\nprint(sorted(team), len(team))",
   "e": "`|=` adds everything from the other set into this one. Ravi is already there, so the size is 3.",
   "out": "['Asha', 'Neha', 'Ravi'] 3"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Real-world uses",
   "q": "`orders = [\"O1\", \"O2\", \"O1\", \"O3\", \"O2\", \"O4\"]`. Print how many entries are duplicates: the total number of entries minus the number of different orders.",
   "starter": "orders = [\"O1\", \"O2\", \"O1\", \"O3\", \"O2\", \"O4\"]\n",
   "sol": "orders = [\"O1\", \"O2\", \"O1\", \"O3\", \"O2\", \"O4\"]\nprint(len(orders) - len(set(orders)))",
   "e": "6 entries but only 4 different orders, so 2 entries are repeats.",
   "out": "2"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Set comprehensions and frozenset",
   "q": "`words = [\"Data\", \"data\", \"DATA\", \"Python\", \"python\"]`. Use a set comprehension with `lower()` to print the different words, ignoring capitals, sorted.",
   "starter": "words = [\"Data\", \"data\", \"DATA\", \"Python\", \"python\"]\n",
   "sol": "words = [\"Data\", \"data\", \"DATA\", \"Python\", \"python\"]\nprint(sorted({w.lower() for w in words}))",
   "e": "Make every word small first, so \"Data\" and \"DATA\" become the same value and the set keeps one.",
   "out": "['data', 'python']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Set operations: comparing two groups",
   "q": "Students per course: `python = {\"Asha\", \"Ravi\", \"Neha\", \"Kiran\"}`, `sql = {\"Ravi\", \"Neha\", \"Imran\"}`, `excel = {\"Neha\", \"Kiran\", \"Imran\"}`. Print (sorted) the students in all three courses, then the students who take Python but neither of the others.",
   "starter": "python = {\"Asha\", \"Ravi\", \"Neha\", \"Kiran\"}\nsql = {\"Ravi\", \"Neha\", \"Imran\"}\nexcel = {\"Neha\", \"Kiran\", \"Imran\"}\n",
   "sol": "python = {\"Asha\", \"Ravi\", \"Neha\", \"Kiran\"}\nsql = {\"Ravi\", \"Neha\", \"Imran\"}\nexcel = {\"Neha\", \"Kiran\", \"Imran\"}\nprint(sorted(python & sql & excel))\nprint(sorted(python - sql - excel))",
   "e": "Set operators chain: `&` twice keeps what all three share, and `-` twice removes anyone in the other two.",
   "out": "['Neha']\n['Asha']"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Set comprehensions and frozenset",
   "q": "Type exactly what this code prints.",
   "c": "fs = frozenset([3, 1, 3])\nprint(len(fs), sorted(fs | {5}))",
   "e": "A frozenset is a set that cannot change, but you can still combine it with others to make a new set.",
   "ans": "2 [1, 3, 5]"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Subset, superset, disjoint",
   "q": "The candidate has SQL and Excel, and the job needs SQL. This code should print `True` (the candidate covers the need). Fix it.",
   "c": "have = {\"SQL\", \"Excel\"}\nneed = {\"SQL\"}\nprint(have.issubset(need))",
   "fixed": "have = {\"SQL\", \"Excel\"}\nneed = {\"SQL\"}\nprint(need.issubset(have))",
   "e": "The question is whether every needed skill is in `have`, so `need` must be the subset (or use `have.issuperset(need)`).",
   "want": "True",
   "got": "False"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Real-world uses",
   "q": "`jan = [\"a@x.in\", \"b@x.in\", \"c@x.in\"]` and `feb = [\"b@x.in\", \"d@x.in\", \"c@x.in\", \"b@x.in\"]` are customer emails per month. Print the retention rate: customers seen in both months divided by customers in January, as a percentage with 1 decimal (`:.1%`).",
   "starter": "jan = [\"a@x.in\", \"b@x.in\", \"c@x.in\"]\nfeb = [\"b@x.in\", \"d@x.in\", \"c@x.in\", \"b@x.in\"]\n",
   "sol": "jan = [\"a@x.in\", \"b@x.in\", \"c@x.in\"]\nfeb = [\"b@x.in\", \"d@x.in\", \"c@x.in\", \"b@x.in\"]\nkept = set(jan) & set(feb)\nprint(f\"{len(kept) / len(set(jan)):.1%}\")",
   "e": "Turn both lists into sets (the repeat in February drops out), intersect them, then divide: 2 of 3 is 66.7%.",
   "out": "66.7%"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Subset, superset, disjoint",
   "q": "`booked = {9, 10, 14}` (hours). Two requests: `req1 = {11, 15}` and `req2 = {10, 16}`. For each request, print `Free` if it shares no hour with `booked` (use `isdisjoint`), otherwise print `Clash:` and the sorted clashing hours.",
   "starter": "booked = {9, 10, 14}\nreq1 = {11, 15}\nreq2 = {10, 16}\n",
   "sol": "booked = {9, 10, 14}\nreq1 = {11, 15}\nreq2 = {10, 16}\nfor req in (req1, req2):\n    if booked.isdisjoint(req):\n        print(\"Free\")\n    else:\n        print(\"Clash:\", sorted(booked & req))",
   "e": "`isdisjoint()` is `True` when two sets share nothing. If they do share something, `&` shows exactly what.",
   "out": "Free\nClash: [10]"
  }
 ],
 "dicts": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "What is a dictionary?",
   "q": "Type exactly what this code prints.",
   "c": "stu = {\"name\": \"Raman\", \"age\": 16, \"name\": \"Rajeev\"}\nprint(stu[\"name\"], len(stu))",
   "e": "Keys are unique. When a key appears twice, the last value wins, so there are only 2 keys.",
   "ans": "Rajeev 2"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Creating dictionaries",
   "q": "Make a dictionary `prices` with `\"tea\"` costing 20 and `\"coffee\"` costing 45. Print the price of coffee.",
   "starter": "# Make the dictionary\n",
   "sol": "prices = {\"tea\": 20, \"coffee\": 45}\nprint(prices[\"coffee\"])",
   "e": "Each entry is `key: value`. Square brackets with the key read its value.",
   "out": "45"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Reading values: [ ] vs get()",
   "q": "`person = {\"name\": \"Asha\", \"city\": \"Pune\"}`. Print the `\"email\"` value with `get()`, showing `Not given` when it is missing.",
   "starter": "person = {\"name\": \"Asha\", \"city\": \"Pune\"}\n",
   "sol": "person = {\"name\": \"Asha\", \"city\": \"Pune\"}\nprint(person.get(\"email\", \"Not given\"))",
   "e": "`get(key, default)` never crashes: it gives the default when the key is missing.",
   "out": "Not given"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Adding, updating and removing",
   "q": "`stock = {\"pen\": 10, \"ink\": 4}`. Add `\"pad\"` with 7, change `\"ink\"` to 9, and delete `\"pen\"`. Print the dictionary.",
   "starter": "stock = {\"pen\": 10, \"ink\": 4}\n",
   "sol": "stock = {\"pen\": 10, \"ink\": 4}\nstock[\"pad\"] = 7\nstock[\"ink\"] = 9\ndel stock[\"pen\"]\nprint(stock)",
   "e": "Assigning to a new key adds it, assigning to an existing key updates it, and `del` removes it.",
   "out": "{'ink': 9, 'pad': 7}"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "keys(), values(), items() and looping",
   "q": "`marks = {\"Asha\": 82, \"Ravi\": 67}`. Loop over `items()` and print one line per student: `Asha: 82`.",
   "starter": "marks = {\"Asha\": 82, \"Ravi\": 67}\n",
   "sol": "marks = {\"Asha\": 82, \"Ravi\": 67}\nfor name, mark in marks.items():\n    print(f\"{name}: {mark}\")",
   "e": "`items()` gives (key, value) pairs, which you unpack in the `for` line.",
   "out": "Asha: 82\nRavi: 67"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Reading values: [ ] vs get()",
   "q": "This code should print `0` for an item that is not in stock, but it crashes. Fix it.",
   "c": "stock = {\"pen\": 10}\nprint(stock[\"pencil\"])",
   "fixed": "stock = {\"pen\": 10}\nprint(stock.get(\"pencil\", 0))",
   "e": "Square brackets give a `KeyError` for a missing key. `get(key, 0)` gives 0 instead.",
   "want": "0",
   "got": "KeyError: 'pencil'"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "keys(), values(), items() and looping",
   "q": "Type exactly what this code prints.",
   "c": "d = {\"a\": 1, \"b\": 2}\nprint(list(d.keys()), list(d.values()), \"a\" in d, 1 in d)",
   "e": "`in` checks the keys only, so `1 in d` is `False` even though 1 is a value.",
   "ans": "['a', 'b'] [1, 2] True False"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Creating dictionaries",
   "q": "This code should print `20`, but it crashes. Fix it.",
   "c": "prices = {\"tea\" = 20, \"coffee\" = 45}\nprint(prices[\"tea\"])",
   "fixed": "prices = {\"tea\": 20, \"coffee\": 45}\nprint(prices[\"tea\"])",
   "e": "Inside `{ }`, each key and value are joined with a colon `:`, not `=`.",
   "want": "20",
   "got": "SyntaxError: cannot assign to literal here. Maybe you meant '==' instead of '='?"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Patterns every analyst uses",
   "q": "Count how many times each letter appears in `\"mississippi\"`, using a dictionary and `get()`. Print the dictionary.",
   "starter": "counts = {}\n",
   "sol": "counts = {}\nfor ch in \"mississippi\":\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts)",
   "e": "The counting pattern: `counts.get(ch, 0) + 1` starts a new letter at 1 and adds 1 to a letter already seen.",
   "out": "{'m': 1, 'i': 4, 's': 4, 'p': 2}"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Nested dictionaries",
   "q": "Type exactly what this code prints.",
   "c": "db = {\"Ramayan\": {\"price\": 1000, \"seats\": 20}, \"Drishyam\": {\"price\": 500, \"seats\": 40}}\nprint(db[\"Drishyam\"][\"seats\"] * db[\"Drishyam\"][\"price\"])",
   "e": "The first key picks the movie, the second picks a field inside it: 40 × 500.",
   "ans": "20000"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Dictionary comprehensions",
   "q": "`prices = {\"tea\": 20, \"coffee\": 45, \"juice\": 60, \"lassi\": 35}`. Use a dictionary comprehension to keep only the items under ₹50, each with its price raised by 10. Print it.",
   "starter": "prices = {\"tea\": 20, \"coffee\": 45, \"juice\": 60, \"lassi\": 35}\n",
   "sol": "prices = {\"tea\": 20, \"coffee\": 45, \"juice\": 60, \"lassi\": 35}\nprint({item: p + 10 for item, p in prices.items() if p < 50})",
   "e": "`{key: value for ... if ...}` builds a new dictionary, changing each value and keeping only the items that pass the test.",
   "out": "{'tea': 30, 'coffee': 55, 'lassi': 45}"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Creating dictionaries",
   "q": "`items = [\"pen\", \"pad\"]` and `qty = [10, 4]`. Make a dictionary with `dict(zip(...))` and print it.",
   "starter": "items = [\"pen\", \"pad\"]\nqty = [10, 4]\n",
   "sol": "items = [\"pen\", \"pad\"]\nqty = [10, 4]\nprint(dict(zip(items, qty)))",
   "e": "`zip()` pairs the two lists, and `dict()` turns the pairs into keys and values.",
   "out": "{'pen': 10, 'pad': 4}"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "keys(), values(), items() and looping",
   "q": "This code should print each name and mark, but it crashes. Fix it.",
   "c": "marks = {\"Asha\": 82, \"Ravi\": 67}\nfor name, mark in marks:\n    print(name, mark)",
   "fixed": "marks = {\"Asha\": 82, \"Ravi\": 67}\nfor name, mark in marks.items():\n    print(name, mark)",
   "e": "Looping over a dictionary gives only the keys. To get both key and value, loop over `items()`.",
   "want": "Asha 82\nRavi 67",
   "got": "ValueError: too many values to unpack (expected 2)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Adding, updating and removing",
   "q": "`cart = {\"rice\": 2, \"dal\": 1, \"oil\": 1}`. Remove `\"dal\"` with `pop()` and print the removed quantity. Then print the cart.",
   "starter": "cart = {\"rice\": 2, \"dal\": 1, \"oil\": 1}\n",
   "sol": "cart = {\"rice\": 2, \"dal\": 1, \"oil\": 1}\nremoved = cart.pop(\"dal\")\nprint(removed)\nprint(cart)",
   "e": "`pop(key)` removes the key and gives back its value.",
   "out": "1\n{'rice': 2, 'oil': 1}"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Adding, updating and removing",
   "q": "Type exactly what this code prints.",
   "c": "p = {\"name\": \"John\", \"age\": 30}\np.update({\"age\": 32, \"city\": \"Pune\"})\nprint(p)",
   "e": "`update()` changes keys that exist (`age`) and adds new ones (`city`) in one step.",
   "ans": "{'name': 'John', 'age': 32, 'city': 'Pune'}"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Nested dictionaries",
   "q": "`emp = {\"E1\": {\"name\": \"Asha\", \"salary\": 50000}, \"E2\": {\"name\": \"Ravi\", \"salary\": 42000}}`. Print the total salary, using a loop over `values()`.",
   "starter": "emp = {\"E1\": {\"name\": \"Asha\", \"salary\": 50000}, \"E2\": {\"name\": \"Ravi\", \"salary\": 42000}}\n",
   "sol": "emp = {\"E1\": {\"name\": \"Asha\", \"salary\": 50000}, \"E2\": {\"name\": \"Ravi\", \"salary\": 42000}}\ntotal = 0\nfor person in emp.values():\n    total += person[\"salary\"]\nprint(total)",
   "e": "Each value is itself a dictionary, so `person[\"salary\"]` reads the salary inside it.",
   "out": "92000"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Patterns every analyst uses",
   "q": "`sales = [(\"North\", 120), (\"South\", 80), (\"North\", 60), (\"East\", 50), (\"South\", 40)]`. Add up the sales per region in a dictionary and print it.",
   "starter": "sales = [(\"North\", 120), (\"South\", 80), (\"North\", 60), (\"East\", 50), (\"South\", 40)]\n",
   "sol": "sales = [(\"North\", 120), (\"South\", 80), (\"North\", 60), (\"East\", 50), (\"South\", 40)]\ntotals = {}\nfor region, amount in sales:\n    totals[region] = totals.get(region, 0) + amount\nprint(totals)",
   "e": "This is GROUP BY in plain Python: one key per region, adding each amount to its own total.",
   "out": "{'North': 180, 'South': 120, 'East': 50}"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Patterns every analyst uses",
   "q": "This code should print `{'a': 2, 'b': 1}`, but it crashes. Fix it.",
   "c": "counts = {}\nfor w in [\"a\", \"b\", \"a\"]:\n    counts[w] += 1\nprint(counts)",
   "fixed": "counts = {}\nfor w in [\"a\", \"b\", \"a\"]:\n    counts[w] = counts.get(w, 0) + 1\nprint(counts)",
   "e": "`counts[w] += 1` reads the old value first, which does not exist the first time: `KeyError`. `get(w, 0)` starts it at 0.",
   "want": "{'a': 2, 'b': 1}",
   "got": "KeyError: 'a'"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "keys(), values(), items() and looping",
   "q": "`marks = {\"Asha\": 82, \"Ravi\": 67, \"Neha\": 91}`. Without `min()`, loop over `items()` to find the student with the lowest marks. Print the name and the marks.",
   "starter": "marks = {\"Asha\": 82, \"Ravi\": 67, \"Neha\": 91}\n",
   "sol": "marks = {\"Asha\": 82, \"Ravi\": 67, \"Neha\": 91}\nlowest_name = None\nfor name, mark in marks.items():\n    if lowest_name is None or mark < marks[lowest_name]:\n        lowest_name = name\nprint(lowest_name, marks[lowest_name])",
   "e": "Keep the best key so far. `None` means \"nothing seen yet\", so the first student always becomes the lowest.",
   "out": "Ravi 67"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested dictionaries",
   "q": "`movies = {\"Ramayan\": {\"price\": 1000, \"seats\": 20}, \"Drishyam\": {\"price\": 500, \"seats\": 40}, \"Udta Teer\": {\"price\": 400, \"seats\": 50}}`. For the movies with at least 30 seats, print the full-house revenue: `Drishyam: ₹20,000`.",
   "starter": "movies = {\"Ramayan\": {\"price\": 1000, \"seats\": 20}, \"Drishyam\": {\"price\": 500, \"seats\": 40}, \"Udta Teer\": {\"price\": 400, \"seats\": 50}}\n",
   "sol": "movies = {\"Ramayan\": {\"price\": 1000, \"seats\": 20}, \"Drishyam\": {\"price\": 500, \"seats\": 40}, \"Udta Teer\": {\"price\": 400, \"seats\": 50}}\nfor name, info in movies.items():\n    if info[\"seats\"] >= 30:\n        print(f\"{name}: ₹{info['price'] * info['seats']:,}\")",
   "e": "Loop over the outer dictionary, then read the inner fields to filter and calculate.",
   "out": "Drishyam: ₹20,000\nUdta Teer: ₹20,000"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Dictionary comprehensions",
   "q": "`students = [\"Asha\", \"Ravi\", \"Neha\"]` and `marks = [82, 34, 91]`. Make a dictionary of name → `\"Pass\"` or `\"Fail\"` (35 or more passes) with a dictionary comprehension, `zip()` and a ternary. Print it.",
   "starter": "students = [\"Asha\", \"Ravi\", \"Neha\"]\nmarks = [82, 34, 91]\n",
   "sol": "students = [\"Asha\", \"Ravi\", \"Neha\"]\nmarks = [82, 34, 91]\nprint({s: \"Pass\" if m >= 35 else \"Fail\" for s, m in zip(students, marks)})",
   "e": "`zip()` pairs each name with its marks, and the ternary picks the value for each key.",
   "out": "{'Asha': 'Pass', 'Ravi': 'Fail', 'Neha': 'Pass'}"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Why dictionaries are fast",
   "q": "Type exactly what this code prints.",
   "c": "d = {(1, 2): \"point\"}\nprint(d[(1, 2)], (2, 1) in d)",
   "e": "A tuple can be a key because it cannot change. `(2, 1)` is a different tuple from `(1, 2)`.",
   "ans": "point False"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Nested dictionaries",
   "q": "This code should add Python to Asha's skills and print `['SQL', 'Python']`. Fix it.",
   "c": "emp = {\"E1\": {\"name\": \"Asha\", \"skills\": [\"SQL\"]}}\nemp[\"E1\"][\"skills\"] = \"Python\"\nprint(emp[\"E1\"][\"skills\"])",
   "fixed": "emp = {\"E1\": {\"name\": \"Asha\", \"skills\": [\"SQL\"]}}\nemp[\"E1\"][\"skills\"].append(\"Python\")\nprint(emp[\"E1\"][\"skills\"])",
   "e": "`=` replaces the whole list with a string. To add to the list inside, call `append()` on it.",
   "want": "['SQL', 'Python']",
   "got": "Python"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Patterns every analyst uses",
   "q": "`text = \"data is good data is power data\"`. Count the words with a dictionary, then use a loop (not `max()`) to print the most common word and its count.",
   "starter": "text = \"data is good data is power data\"\n",
   "sol": "text = \"data is good data is power data\"\ncounts = {}\nfor word in text.split():\n    counts[word] = counts.get(word, 0) + 1\nbest = \"\"\nfor word, n in counts.items():\n    if best == \"\" or n > counts[best]:\n        best = word\nprint(best, counts[best])",
   "e": "First count, then search the counts for the biggest one. \"data\" appears 3 times.",
   "out": "data 3"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "keys(), values(), items() and looping",
   "q": "`stock = {\"pen\": 12, \"ink\": 3, \"pad\": 7}`. Print the items sorted by quantity, lowest first, one per line: `ink: 3`. Use `sorted(stock, key=stock.get)`.",
   "starter": "stock = {\"pen\": 12, \"ink\": 3, \"pad\": 7}\n",
   "sol": "stock = {\"pen\": 12, \"ink\": 3, \"pad\": 7}\nfor item in sorted(stock, key=stock.get):\n    print(f\"{item}: {stock[item]}\")",
   "e": "`sorted(stock)` sorts the keys, and `key=stock.get` sorts them by their values instead.",
   "out": "ink: 3\npad: 7\npen: 12"
  }
 ],
 "comprehensions": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "A loop in one line",
   "q": "Type exactly what this code prints.",
   "c": "print([n * 3 for n in range(1, 5)])",
   "e": "The comprehension runs `n * 3` for n = 1, 2, 3 and 4, and collects the answers in a list.",
   "ans": "[3, 6, 9, 12]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "A loop in one line",
   "q": "`prices = [100, 250, 80]`. Use a list comprehension to make a new list with each price doubled, and print it.",
   "starter": "prices = [100, 250, 80]\n",
   "sol": "prices = [100, 250, 80]\nprint([p * 2 for p in prices])",
   "e": "`[expression for item in list]`: the expression is worked out once for every item.",
   "out": "[200, 500, 160]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Where does if go? Filter vs transform",
   "q": "`ages = [12, 25, 17, 40, 15]`. Use a list comprehension to keep only the adults (18 or more), and print the list.",
   "starter": "ages = [12, 25, 17, 40, 15]\n",
   "sol": "ages = [12, 25, 17, 40, 15]\nprint([a for a in ages if a >= 18])",
   "e": "An `if` at the end is a filter: it decides which items get in.",
   "out": "[25, 40]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "A loop in one line",
   "q": "`cities = [\" delhi\", \"PUNE \", \"goa\"]`. Clean them with `strip()` and `title()` in a list comprehension, and print the list.",
   "starter": "cities = [\" delhi\", \"PUNE \", \"goa\"]\n",
   "sol": "cities = [\" delhi\", \"PUNE \", \"goa\"]\nprint([c.strip().title() for c in cities])",
   "e": "Any expression works in a comprehension, including chained string methods.",
   "out": "['Delhi', 'Pune', 'Goa']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "Print the sum of the squares of 1 to 10, using a generator expression inside `sum()`.",
   "starter": "# sum(... for n in range(1, 11))\n",
   "sol": "print(sum(n * n for n in range(1, 11)))",
   "e": "A generator expression has no square brackets. `sum()` takes its values one at a time without building a list.",
   "out": "385"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Where does if go? Filter vs transform",
   "q": "This code should replace negative numbers with 0 and print `[0, 7, 0]`, but it crashes. Fix it.",
   "c": "nums = [-3, 7, -1]\nprint([x for x in nums if x > 0 else 0])",
   "fixed": "nums = [-3, 7, -1]\nprint([x if x > 0 else 0 for x in nums])",
   "e": "A filter `if` (at the end) cannot have an `else`. To change values, put `x if ... else ...` at the front, before `for`.",
   "want": "[0, 7, 0]",
   "got": "SyntaxError: invalid syntax"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Where does if go? Filter vs transform",
   "q": "Type exactly what this code prints.",
   "c": "print([\"high\" if n > 50 else \"low\" for n in [20, 80, 55]])",
   "e": "The ternary at the front picks a value for every item, so the list always has 3 items.",
   "ans": "['low', 'high', 'high']"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "A loop in one line",
   "q": "This code should print `[1, 4, 9]`, but it crashes. Fix it.",
   "c": "squares = [x ** 2 for x in range(1, 4)\nprint(squares)",
   "fixed": "squares = [x ** 2 for x in range(1, 4)]\nprint(squares)",
   "e": "The comprehension opens with `[`, so it must close with `]`.",
   "want": "[1, 4, 9]",
   "got": "SyntaxError: '[' was never closed"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "`emails = [\"A@x.in\", \"a@x.in\", \"b@x.in\"]`. Use a set comprehension with `lower()` to get the different emails, and print them sorted.",
   "starter": "emails = [\"A@x.in\", \"a@x.in\", \"b@x.in\"]\n",
   "sol": "emails = [\"A@x.in\", \"a@x.in\", \"b@x.in\"]\nprint(sorted({e.lower() for e in emails}))",
   "e": "Curly brackets make a set comprehension: values that become equal after `lower()` are kept once.",
   "out": "['a@x.in', 'b@x.in']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "`words = [\"tea\", \"coffee\", \"juice\"]`. Make a dictionary of each word and its length with a dictionary comprehension, and print it.",
   "starter": "words = [\"tea\", \"coffee\", \"juice\"]\n",
   "sol": "words = [\"tea\", \"coffee\", \"juice\"]\nprint({w: len(w) for w in words})",
   "e": "A dictionary comprehension has `key: value` before the `for`.",
   "out": "{'tea': 3, 'coffee': 6, 'juice': 5}"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Nested comprehensions",
   "q": "Type exactly what this code prints.",
   "c": "print([(i, j) for i in range(2) for j in \"xy\"])",
   "e": "With two `for`s, the first one is the outer loop: for each `i`, the inner loop runs through `x` and `y`.",
   "ans": "[(0, 'x'), (0, 'y'), (1, 'x'), (1, 'y')]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Nested comprehensions",
   "q": "`weeks = [[3, 5], [2], [4, 1, 6]]`. Flatten it into one list with a nested comprehension, and print it.",
   "starter": "weeks = [[3, 5], [2], [4, 1, 6]]\n",
   "sol": "weeks = [[3, 5], [2], [4, 1, 6]]\nprint([n for week in weeks for n in week])",
   "e": "Read it like two nested loops: for each week, for each number in that week.",
   "out": "[3, 5, 2, 4, 1, 6]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Nested comprehensions",
   "q": "This code should change only the first row and print `[[9, 0, 0], [0, 0, 0]]`. Fix it.",
   "c": "grid = [[0] * 3] * 2\ngrid[0][0] = 9\nprint(grid)",
   "fixed": "grid = [[0] * 3 for _ in range(2)]\ngrid[0][0] = 9\nprint(grid)",
   "e": "`[row] * 2` repeats the same inner list twice, so both rows change together. A comprehension makes a new row each time.",
   "want": "[[9, 0, 0], [0, 0, 0]]",
   "got": "[[9, 0, 0], [9, 0, 0]]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Where does if go? Filter vs transform",
   "q": "`marks = [45, 82, 30, 67]`. Print a list with `\"P\"` or `\"F\"` for each mark (35 or more passes). Then print a second list with only the passing marks.",
   "starter": "marks = [45, 82, 30, 67]\n",
   "sol": "marks = [45, 82, 30, 67]\nprint([\"P\" if m >= 35 else \"F\" for m in marks])\nprint([m for m in marks if m >= 35])",
   "e": "Transform: the ternary goes at the front and every item gets a value. Filter: the `if` goes at the end and some items are dropped.",
   "out": "['P', 'P', 'F', 'P']\n[45, 82, 67]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "Type exactly what this code prints.",
   "c": "print(sorted({len(w) for w in [\"hi\", \"yes\", \"no\", \"ok\"]}), sum(1 for w in [\"a\", \"bb\", \"a\"] if w == \"a\"))",
   "e": "The set keeps the different lengths (2 and 3). `sum(1 for ... if ...)` counts the matching items.",
   "ans": "[2, 3] 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Choosing the right collection",
   "q": "`visits = [101, 102, 101, 103]`. Store the unique visitor IDs in the right collection, and the fixed location `17.38, 78.48` in the right collection. Print the number of unique IDs and the two types, with one `print()`.",
   "starter": "visits = [101, 102, 101, 103]\n",
   "sol": "visits = [101, 102, 101, 103]\nunique_ids = set(visits)\nlocation = (17.38, 78.48)\nprint(len(unique_ids), type(unique_ids), type(location))",
   "e": "Unique values belong in a set. A fixed pair that never changes belongs in a tuple.",
   "out": "3 <class 'set'> <class 'tuple'>"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "`stock = {\"pen\": 0, \"ink\": 4, \"pad\": 0, \"gel\": 9}`. Use a dictionary comprehension to keep only the items that are in stock (more than 0), and print it.",
   "starter": "stock = {\"pen\": 0, \"ink\": 4, \"pad\": 0, \"gel\": 9}\n",
   "sol": "stock = {\"pen\": 0, \"ink\": 4, \"pad\": 0, \"gel\": 9}\nprint({item: n for item, n in stock.items() if n > 0})",
   "e": "Loop over `items()` to get both key and value, and filter with `if` at the end.",
   "out": "{'ink': 4, 'gel': 9}"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Mutable, immutable and hashable",
   "q": "This code should print `Hyderabad`, but it crashes. Fix it.",
   "c": "locations = {[17.38, 78.48]: \"Hyderabad\"}\nprint(locations[[17.38, 78.48]])",
   "fixed": "locations = {(17.38, 78.48): \"Hyderabad\"}\nprint(locations[(17.38, 78.48)])",
   "e": "A list can change, so it is not hashable and cannot be a key. A tuple is immutable and works as a key.",
   "want": "Hyderabad",
   "got": "TypeError: unhashable type: 'list'"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested comprehensions",
   "q": "`matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`. Make a list of the even numbers in the matrix with one nested comprehension, and print it.",
   "starter": "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n",
   "sol": "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint([n for row in matrix for n in row if n % 2 == 0])",
   "e": "Both `for`s come first (outer, then inner), and the filter goes at the very end.",
   "out": "[2, 4, 6, 8]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "`sales = {\"Mon\": 1200, \"Tue\": 800, \"Wed\": 1500}`. With one `print()`, show the total (a generator expression over `values()`) and a dictionary of the days above 1000 (a dictionary comprehension).",
   "starter": "sales = {\"Mon\": 1200, \"Tue\": 800, \"Wed\": 1500}\n",
   "sol": "sales = {\"Mon\": 1200, \"Tue\": 800, \"Wed\": 1500}\nprint(sum(v for v in sales.values()), {d: v for d, v in sales.items() if v > 1000})",
   "e": "A generator expression feeds `sum()` directly, and the dictionary comprehension filters the days in one line.",
   "out": "3500 {'Mon': 1200, 'Wed': 1500}"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Where does if go? Filter vs transform",
   "q": "`raw = [\"12\", \"NA\", \"7\", \"\", \"30\"]`. Use one list comprehension to keep only the entries that are made of digits (`isdigit()`) and turn them into ints. Print the list and its sum.",
   "starter": "raw = [\"12\", \"NA\", \"7\", \"\", \"30\"]\n",
   "sol": "raw = [\"12\", \"NA\", \"7\", \"\", \"30\"]\nclean = [int(x) for x in raw if x.isdigit()]\nprint(clean, sum(clean))",
   "e": "The filter runs first, so `int()` only sees text that really is a number. An empty string is not `isdigit()`.",
   "out": "[12, 7, 30] 49"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Mutable, immutable and hashable",
   "q": "Type exactly what this code prints.",
   "c": "a = [1, 2]\nb = a\nb += [3]\nt = (1, 2)\nu = t\nu += (3,)\nprint(a, t)",
   "e": "`+=` changes a list in place, so `a` sees it too. A tuple cannot change, so `u += (3,)` makes a new tuple and `t` stays the same.",
   "ans": "[1, 2, 3] (1, 2)"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Nested comprehensions",
   "q": "`m = [[1, 2, 3], [4, 5, 6]]`. Transpose it (rows become columns) with a nested comprehension, and print the result.",
   "starter": "m = [[1, 2, 3], [4, 5, 6]]\n",
   "sol": "m = [[1, 2, 3], [4, 5, 6]]\nprint([[row[i] for row in m] for i in range(3)])",
   "e": "The outer comprehension builds one new row per column index `i`; the inner one takes item `i` from every old row.",
   "out": "[[1, 4], [2, 5], [3, 6]]"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Set and dict comprehensions, and generator expressions",
   "q": "This code should print the different words, sorted: `['data', 'python']`. Fix it.",
   "c": "words = [\"data\", \"Data\", \"python\"]\nunique = {w.lower() for w in words}\nprint(unique[0])",
   "fixed": "words = [\"data\", \"Data\", \"python\"]\nunique = {w.lower() for w in words}\nprint(sorted(unique))",
   "e": "A set has no index. `sorted()` turns it into a sorted list that you can print or index.",
   "want": "['data', 'python']",
   "got": "TypeError: 'set' object is not subscriptable"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Where does if go? Filter vs transform",
   "q": "`names = [\"Asha\", \"ravi\", \"Anil\", \"neha\"]`. Make a dictionary of each name in title case and its length, only for names that start with \"a\" in any case. Print it.",
   "starter": "names = [\"Asha\", \"ravi\", \"Anil\", \"neha\"]\n",
   "sol": "names = [\"Asha\", \"ravi\", \"Anil\", \"neha\"]\nprint({n.title(): len(n) for n in names if n.lower().startswith(\"a\")})",
   "e": "Make the check case-proof with `lower()`, then build `key: value` with `title()` for the key.",
   "out": "{'Asha': 4, 'Anil': 4}"
  }
 ],
 "functions": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Defining and calling a function",
   "q": "Type exactly what this code prints.",
   "c": "def hello():\n    print(\"Hi\")\nprint(\"Start\")\nhello()\nhello()",
   "e": "Defining a function runs nothing. The body runs only when the function is called, here twice, after `Start`.",
   "ans": "Start\nHi\nHi"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Defining and calling a function",
   "q": "Write a function `show_banner()` that prints `=== SALES ===`. Call it twice.",
   "starter": "# def show_banner():\n",
   "sol": "def show_banner():\n    print(\"=== SALES ===\")\n\nshow_banner()\nshow_banner()",
   "e": "`def name():` defines the function; `name()` calls it. You can call it as many times as you like.",
   "out": "=== SALES ===\n=== SALES ==="
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Parameters and arguments",
   "q": "Write `greet(name)` that prints `Namaste, <name>!`. Call it with `\"Asha\"` and then with `\"Ravi\"`.",
   "starter": "# def greet(name):\n",
   "sol": "def greet(name):\n    print(f\"Namaste, {name}!\")\n\ngreet(\"Asha\")\ngreet(\"Ravi\")",
   "e": "`name` is the parameter. Each call passes a different argument, and the same code uses it.",
   "out": "Namaste, Asha!\nNamaste, Ravi!"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "return: sending a result back",
   "q": "Write `square(n)` that returns `n * n`. Then print `square(7) + 1`.",
   "starter": "# def square(n):\n",
   "sol": "def square(n):\n    return n * n\n\nprint(square(7) + 1)",
   "e": "`return` hands the result back to the caller, so you can use it in more maths: 49 + 1.",
   "out": "50"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Default values and keyword arguments",
   "q": "Write `apply_gst(price, rate=18)` that returns the price plus `rate`%. Print `apply_gst(1000)` and `apply_gst(1000, 5)` with one `print()`.",
   "starter": "# def apply_gst(price, rate=18):\n",
   "sol": "def apply_gst(price, rate=18):\n    return price + price * rate / 100\n\nprint(apply_gst(1000), apply_gst(1000, 5))",
   "e": "When you leave out `rate`, it uses its default, 18. Passing 5 replaces the default.",
   "out": "1180.0 1050.0"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Defining and calling a function",
   "q": "This code should print `hi`, but it crashes. Fix it.",
   "c": "say_hi()\ndef say_hi():\n    print(\"hi\")",
   "fixed": "def say_hi():\n    print(\"hi\")\nsay_hi()",
   "e": "Python runs from top to bottom, so a function must be defined before it is called.",
   "want": "hi",
   "got": "NameError: name 'say_hi' is not defined"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "return: sending a result back",
   "q": "Type exactly what this code prints.",
   "c": "def double(n):\n    print(n * 2)\n\nresult = double(4)\nprint(result)",
   "e": "`double()` prints 8 but has no `return`, so it gives back `None`, and `result` is `None`.",
   "ans": "8\nNone"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Parameters and arguments",
   "q": "This code should print `Hello Guest`, but it crashes. Fix it by giving `name` a default value.",
   "c": "def greet(name):\n    print(\"Hello\", name)\n\ngreet()",
   "fixed": "def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet()",
   "e": "A call must give every parameter that has no default. `name=\"Guest\"` makes the argument optional.",
   "want": "Hello Guest",
   "got": "TypeError: greet() missing 1 required positional argument: 'name'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "return: sending a result back",
   "q": "Write `is_eligible(age)` that returns `True` when `age` is 18 or more, using one `return` line. Print `is_eligible(17)` and `is_eligible(18)` with one `print()`.",
   "starter": "# def is_eligible(age):\n",
   "sol": "def is_eligible(age):\n    return age >= 18\n\nprint(is_eligible(17), is_eligible(18))",
   "e": "A comparison already gives `True` or `False`, so you can return it directly, without `if`.",
   "out": "False True"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Returning several values",
   "q": "Write `min_max(nums)` that returns the smallest and the largest number. For `[12, 3, 41, 7]`, unpack the result and print `Min: 3 Max: 41`.",
   "starter": "# def min_max(nums):\n",
   "sol": "def min_max(nums):\n    return min(nums), max(nums)\n\nlow, high = min_max([12, 3, 41, 7])\nprint(\"Min:\", low, \"Max:\", high)",
   "e": "`return a, b` sends back a tuple, which the caller unpacks into two names.",
   "out": "Min: 3 Max: 41"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Default values and keyword arguments",
   "q": "Type exactly what this code prints.",
   "c": "def intro(name, city=\"Pune\"):\n    print(name, \"from\", city)\n\nintro(\"Asha\")\nintro(city=\"Goa\", name=\"Ravi\")",
   "e": "The first call uses the default city. Keyword arguments can come in any order, because each one is matched by name.",
   "ans": "Asha from Pune\nRavi from Goa"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "return: sending a result back",
   "q": "This function should add up all the prices and print `60`, but it prints `10`. Fix it.",
   "c": "def total(prices):\n    s = 0\n    for p in prices:\n        s += p\n        return s\n\nprint(total([10, 20, 30]))",
   "fixed": "def total(prices):\n    s = 0\n    for p in prices:\n        s += p\n    return s\n\nprint(total([10, 20, 30]))",
   "e": "`return` ends the function at once. Inside the loop it returns after the first price. Move it out of the loop.",
   "want": "60",
   "got": "10"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Built-in vs your own functions",
   "q": "Write `grade(marks)` that returns `\"A\"` for 90 or more, `\"B\"` for 75 or more, `\"C\"` for 50 or more, and `\"F\"` below that. Print the grades of `[95, 80, 40]` as a list, using a comprehension.",
   "starter": "# def grade(marks):\n",
   "sol": "def grade(marks):\n    if marks >= 90:\n        return \"A\"\n    elif marks >= 75:\n        return \"B\"\n    elif marks >= 50:\n        return \"C\"\n    return \"F\"\n\nprint([grade(m) for m in [95, 80, 40]])",
   "e": "Your own functions work anywhere a built-in does, including inside a comprehension.",
   "out": "['A', 'B', 'F']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Docstrings and help()",
   "q": "Write `area(length, width)` with the docstring `Return the area of a rectangle.` Print `area(4, 5)`, then print the docstring with `area.__doc__`.",
   "starter": "# def area(length, width):\n",
   "sol": "def area(length, width):\n    \"\"\"Return the area of a rectangle.\"\"\"\n    return length * width\n\nprint(area(4, 5))\nprint(area.__doc__)",
   "e": "A docstring is the first string inside the function. Python keeps it in `__doc__`, and `help()` shows it.",
   "out": "20\nReturn the area of a rectangle."
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Returning several values",
   "q": "Type exactly what this code prints.",
   "c": "def stats(a, b):\n    return a + b, a * b\n\nx = stats(3, 4)\nprint(x, type(x))",
   "e": "Two values after `return` are packed into one tuple.",
   "ans": "(7, 12) <class 'tuple'>"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Default values and keyword arguments",
   "q": "This code should print `118.0`, but it crashes. Fix the function line.",
   "c": "def bill(tax=0.18, amount):\n    return amount * (1 + tax)\n\nprint(bill(100))",
   "fixed": "def bill(amount, tax=0.18):\n    return amount * (1 + tax)\n\nprint(bill(100))",
   "e": "Parameters with defaults must come after the ones without. Put `amount` first.",
   "want": "118.0",
   "got": "SyntaxError: parameter without a default follows parameter with a default"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Parameters and arguments",
   "q": "Write `count_above(values, limit)` that returns how many values are above `limit`. Print `count_above([45, 82, 67, 90, 38], 60)`.",
   "starter": "# def count_above(values, limit):\n",
   "sol": "def count_above(values, limit):\n    count = 0\n    for v in values:\n        if v > limit:\n            count += 1\n    return count\n\nprint(count_above([45, 82, 67, 90, 38], 60))",
   "e": "A function can take a whole list as one argument, plus a second value to compare with.",
   "out": "3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "What is a function?",
   "q": "Write `clean_name(text)` that returns the text with the spaces at the ends removed, in title case. Use it in a list comprehension on `[\" asha \", \"RAVI\"]` and print the list.",
   "starter": "# def clean_name(text):\n",
   "sol": "def clean_name(text):\n    return text.strip().title()\n\nprint([clean_name(n) for n in [\" asha \", \"RAVI\"]])",
   "e": "Write the cleaning steps once in a function, then reuse them for every name.",
   "out": "['Asha', 'Ravi']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "return: sending a result back",
   "q": "Write `is_prime(n)` that returns `True` or `False` (numbers below 2 are not prime). Use it in a list comprehension to print the primes below 20.",
   "starter": "# def is_prime(n):\n",
   "sol": "def is_prime(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n\nprint([n for n in range(20) if is_prime(n)])",
   "e": "`return False` leaves as soon as a divisor is found. Only if the loop finishes is the number prime.",
   "out": "[2, 3, 5, 7, 11, 13, 17, 19]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Returning several values",
   "q": "Write `summary(marks)` that returns the average (rounded to 1 decimal), the highest, the lowest and how many passed (35 or more). For `[45, 82, 67, 90, 38]`, unpack it and print `Avg 64.4 | High 90 | Low 38 | Passed 5`.",
   "starter": "# def summary(marks):\n",
   "sol": "def summary(marks):\n    average = round(sum(marks) / len(marks), 1)\n    passed = len([m for m in marks if m >= 35])\n    return average, max(marks), min(marks), passed\n\navg, high, low, passed = summary([45, 82, 67, 90, 38])\nprint(f\"Avg {avg} | High {high} | Low {low} | Passed {passed}\")",
   "e": "One function can return a whole report as a tuple, and the caller unpacks it into four clear names.",
   "out": "Avg 64.4 | High 90 | Low 38 | Passed 5"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Default values and keyword arguments",
   "q": "Write `price_after(price, discount=0, gst=18)`: take off `discount`% first, then add `gst`%, and round to 2 decimals. Print `price_after(1000)`, `price_after(1000, discount=10)` and `price_after(1000, gst=5, discount=20)` with one `print()`.",
   "starter": "# def price_after(price, discount=0, gst=18):\n",
   "sol": "def price_after(price, discount=0, gst=18):\n    after_discount = price - price * discount / 100\n    return round(after_discount + after_discount * gst / 100, 2)\n\nprint(price_after(1000), price_after(1000, discount=10), price_after(1000, gst=5, discount=20))",
   "e": "Keyword arguments let you change any default you want, in any order, and leave the others as they are.",
   "out": "1180.0 1062.0 840.0"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "return: sending a result back",
   "q": "Type exactly what this code prints.",
   "c": "def size(x):\n    if x > 10:\n        return \"big\"\n    if x > 5:\n        return \"medium\"\n\nprint(size(12), size(7), size(2))",
   "e": "For 2, neither `if` is true and the function reaches its end without a `return`, so it gives `None`.",
   "ans": "big medium None"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "return: sending a result back",
   "q": "This code should print `False`, but it prints `False` and then `None`. Fix it.",
   "c": "def is_even(n):\n    if n % 2 == 0:\n        return True\n    print(False)\n\nprint(is_even(3))",
   "fixed": "def is_even(n):\n    if n % 2 == 0:\n        return True\n    return False\n\nprint(is_even(3))",
   "e": "Printing inside the function is not the same as returning. The caller only gets what you `return`.",
   "want": "False",
   "got": "False\nNone"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Built-in vs your own functions",
   "q": "Write `to_celsius(f)` that returns `(f - 32) * 5 / 9` rounded to 1 decimal, and `report(temps)` that uses it to return a list of Celsius values. Print `report([98.6, 32, 212])`.",
   "starter": "# def to_celsius(f):\n# def report(temps):\n",
   "sol": "def to_celsius(f):\n    return round((f - 32) * 5 / 9, 1)\n\ndef report(temps):\n    return [to_celsius(t) for t in temps]\n\nprint(report([98.6, 32, 212]))",
   "e": "Small functions can call each other: `report()` reuses `to_celsius()` for every value.",
   "out": "[37.0, 0.0, 100.0]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Parameters and arguments",
   "q": "Write `percent(part, whole)` that returns `part / whole * 100` rounded to 1 decimal. Call it with keyword arguments in the other order, `percent(whole=200, part=50)`, and print the result.",
   "starter": "# def percent(part, whole):\n",
   "sol": "def percent(part, whole):\n    return round(part / whole * 100, 1)\n\nprint(percent(whole=200, part=50))",
   "e": "With keyword arguments the order does not matter: each value goes to the parameter with that name.",
   "out": "25.0"
  }
 ],
 "functions2": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "*args: any number of positional arguments",
   "q": "Type exactly what this code prints.",
   "c": "def add(*nums):\n    return sum(nums)\n\nprint(add(), add(5), add(1, 2, 3))",
   "e": "`*nums` collects any number of arguments into a tuple, even none. The sum of an empty tuple is 0.",
   "ans": "0 5 6"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "*args: any number of positional arguments",
   "q": "Write `largest(*nums)` that returns the biggest of any number of values, using `max()`. Print `largest(4, 19, 7)`.",
   "starter": "# def largest(*nums):\n",
   "sol": "def largest(*nums):\n    return max(nums)\n\nprint(largest(4, 19, 7))",
   "e": "Inside the function, `nums` is a tuple, so built-ins like `max()` work on it.",
   "out": "19"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "**kwargs: any number of keyword arguments",
   "q": "Write `show(**info)` that prints each key and value as `key: value`. Call `show(name=\"Asha\", city=\"Pune\")`.",
   "starter": "# def show(**info):\n",
   "sol": "def show(**info):\n    for key, value in info.items():\n        print(f\"{key}: {value}\")\n\nshow(name=\"Asha\", city=\"Pune\")",
   "e": "`**info` collects the keyword arguments into a dictionary.",
   "out": "name: Asha\ncity: Pune"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "lambda: tiny one-line functions",
   "q": "Make a lambda called `gst` that adds 18% to a price, and print `gst(100)`.",
   "starter": "# gst = lambda ...\n",
   "sol": "gst = lambda price: price * 1.18\nprint(gst(100))",
   "e": "`lambda parameter: expression` is a tiny function that returns the expression.",
   "out": "118.0"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "lambda: tiny one-line functions",
   "q": "`students = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]`. Sort them by marks, highest first, with `key=lambda`, and print the list of names.",
   "starter": "students = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]\n",
   "sol": "students = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]\nranked = sorted(students, key=lambda s: s[1], reverse=True)\nprint([s[0] for s in ranked])",
   "e": "The lambda tells `sorted()` what to compare: item 1 of each tuple, the marks.",
   "out": "['Neha', 'Asha', 'Ravi']"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Scope: where a variable lives",
   "q": "This code should print `1`, but it crashes. Fix it with `global`.",
   "c": "count = 0\ndef increment():\n    count += 1\n\nincrement()\nprint(count)",
   "fixed": "count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)",
   "e": "Assigning to `count` inside the function makes it local, so Python cannot read the old value. `global count` says: use the outside one. (Returning the new value is often cleaner.)",
   "want": "1",
   "got": "UnboundLocalError: cannot access local variable 'count' where it is not associated with a value"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Scope: where a variable lives",
   "q": "Type exactly what this code prints.",
   "c": "x = 100\ndef demo():\n    x = 50\n    return x\n\nprint(demo(), x)",
   "e": "The `x` inside the function is a new local variable. The global `x` is not touched.",
   "ans": "50 100"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "*args: any number of positional arguments",
   "q": "This code should print `68`, but it crashes. Fix the call.",
   "c": "def add(*numbers):\n    return sum(numbers)\n\nvalues = [11, 12, 45]\nprint(add(values))",
   "fixed": "def add(*numbers):\n    return sum(numbers)\n\nvalues = [11, 12, 45]\nprint(add(*values))",
   "e": "Passing the list makes `numbers` a tuple holding one list. `*values` unpacks the list into separate arguments.",
   "want": "68",
   "got": "TypeError: unsupported operand type(s) for +: 'int' and 'list'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Recursion: a function that calls itself",
   "q": "Write a recursive function `power(base, exp)` (for `exp` of 0 or more): anything to the power 0 is 1. Print `power(2, 10)`.",
   "starter": "# def power(base, exp):\n",
   "sol": "def power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)\n\nprint(power(2, 10))",
   "e": "The base case (`exp == 0`) stops the recursion. Every other call makes the problem one step smaller.",
   "out": "1024"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "lambda: tiny one-line functions",
   "q": "`nums = [3, -1, 8, -5, 2]`. Use `filter()` with a lambda to keep the negative numbers, and `map()` with a lambda to square every number. Print both lists.",
   "starter": "nums = [3, -1, 8, -5, 2]\n",
   "sol": "nums = [3, -1, 8, -5, 2]\nprint(list(filter(lambda x: x < 0, nums)))\nprint(list(map(lambda x: x * x, nums)))",
   "e": "`filter()` keeps the items where the lambda is `True`. `map()` applies the lambda to every item. Wrap both in `list()` to see them.",
   "out": "[-1, -5]\n[9, 1, 64, 25, 4]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Iterators",
   "q": "Type exactly what this code prints.",
   "c": "it = iter([10, 20, 30])\nprint(next(it))\nfor x in it:\n    print(x)",
   "e": "`next()` takes 10 from the iterator. The `for` loop then continues from where it left off.",
   "ans": "10\n20\n30"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Generators and yield",
   "q": "Write a generator `evens(n)` that yields the even numbers from 2 up to `n`. Print `list(evens(10))`.",
   "starter": "# def evens(n):\n",
   "sol": "def evens(n):\n    for i in range(2, n + 1, 2):\n        yield i\n\nprint(list(evens(10)))",
   "e": "`yield` hands out one value at a time. `list()` collects them all.",
   "out": "[2, 4, 6, 8, 10]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "The mutable default argument trap",
   "q": "The second call should print `['milk']`, but it prints `['apple', 'milk']`. Fix it.",
   "c": "def add_item(item, basket=[]):\n    basket.append(item)\n    return basket\n\nprint(add_item(\"apple\"))\nprint(add_item(\"milk\"))",
   "fixed": "def add_item(item, basket=None):\n    if basket is None:\n        basket = []\n    basket.append(item)\n    return basket\n\nprint(add_item(\"apple\"))\nprint(add_item(\"milk\"))",
   "e": "A default list is made only once and shared by every call. Use `None` as the default and make a fresh list inside.",
   "want": "['apple']\n['milk']",
   "got": "['apple']\n['apple', 'milk']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "**kwargs: any number of keyword arguments",
   "q": "Write `order(item, qty=1, **notes)` that prints `2 x Pizza`, then each note as `- key: value`. Call `order(\"Pizza\", 2, spicy=True, table=4)`.",
   "starter": "# def order(item, qty=1, **notes):\n",
   "sol": "def order(item, qty=1, **notes):\n    print(f\"{qty} x {item}\")\n    for key, value in notes.items():\n        print(f\"- {key}: {value}\")\n\norder(\"Pizza\", 2, spicy=True, table=4)",
   "e": "Normal parameters are filled first. Every extra keyword argument lands in the `notes` dictionary.",
   "out": "2 x Pizza\n- spicy: True\n- table: 4"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Generators and yield",
   "q": "Type exactly what this code prints.",
   "c": "def gen():\n    yield 1\n    yield 2\n\ng = gen()\nprint(next(g), next(g), list(g))",
   "e": "Each `next()` runs to the next `yield`. After two values the generator is used up, so `list(g)` is empty.",
   "ans": "1 2 []"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "lambda: tiny one-line functions",
   "q": "`products = {\"pen\": 12, \"ink\": 45, \"pad\": 30}`. Use `max()` with `key=lambda` on `items()` to print the most expensive product and its price.",
   "starter": "products = {\"pen\": 12, \"ink\": 45, \"pad\": 30}\n",
   "sol": "products = {\"pen\": 12, \"ink\": 45, \"pad\": 30}\nname, price = max(products.items(), key=lambda item: item[1])\nprint(name, price)",
   "e": "`items()` gives (name, price) pairs, and the lambda tells `max()` to compare the prices.",
   "out": "ink 45"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Scope: where a variable lives",
   "q": "Write `make_counter()` that returns an inner function. Each call of the inner function adds 1 to a counter (use `nonlocal`) and returns it. Make one counter, call it 3 times, and print the 3 results on one line.",
   "starter": "# def make_counter():\n",
   "sol": "def make_counter():\n    count = 0\n    def step():\n        nonlocal count\n        count += 1\n        return count\n    return step\n\ncounter = make_counter()\nprint(counter(), counter(), counter())",
   "e": "`nonlocal` lets the inner function change a variable of the outer function. The counter remembers its value between calls.",
   "out": "1 2 3"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Recursion: a function that calls itself",
   "q": "`fact(5)` should be `120`, but this code prints `0`. Fix the base case.",
   "c": "def fact(n):\n    if n == 0:\n        return 0\n    return n * fact(n - 1)\n\nprint(fact(5))",
   "fixed": "def fact(n):\n    if n == 0:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(5))",
   "e": "Every result is multiplied by the base case, so a base case of 0 makes everything 0. 0! is 1.",
   "want": "120",
   "got": "0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Decorators",
   "q": "Write a decorator `shout` that makes the text returned by a function upper case. Decorate `greet(name)`, which returns `f\"hello {name}\"`, and print `greet(\"asha\")`.",
   "starter": "# def shout(func):\n",
   "sol": "def shout(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs).upper()\n    return wrapper\n\n@shout\ndef greet(name):\n    return f\"hello {name}\"\n\nprint(greet(\"asha\"))",
   "e": "The decorator returns a wrapper that calls the original function and changes its result. `@shout` swaps `greet` for that wrapper.",
   "out": "HELLO ASHA"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Recursion: a function that calls itself",
   "q": "Write a recursive `flatten(items)` that turns nested lists into one flat list. Use `isinstance(x, list)` to spot an inner list. Print `flatten([1, [2, [3, 4]], 5])`.",
   "starter": "# def flatten(items):\n",
   "sol": "def flatten(items):\n    flat = []\n    for x in items:\n        if isinstance(x, list):\n            flat += flatten(x)\n        else:\n            flat.append(x)\n    return flat\n\nprint(flatten([1, [2, [3, 4]], 5]))",
   "e": "When an item is itself a list, the function calls itself on it. Plain items are added directly.",
   "out": "[1, 2, 3, 4, 5]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Generators and yield",
   "q": "Write a generator `running_total(values)` that yields the total so far after each value. Print `list(running_total([5, 10, 20]))`.",
   "starter": "# def running_total(values):\n",
   "sol": "def running_total(values):\n    total = 0\n    for v in values:\n        total += v\n        yield total\n\nprint(list(running_total([5, 10, 20])))",
   "e": "The generator keeps `total` between yields, so each value builds on the last one.",
   "out": "[5, 15, 35]"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Decorators",
   "q": "Type exactly what this code prints.",
   "c": "def twice(func):\n    def wrapper():\n        func()\n        func()\n    return wrapper\n\n@twice\ndef hi():\n    print(\"hi\")\n\nhi()",
   "e": "`@twice` replaces `hi` with `wrapper`, which calls the original `hi` two times.",
   "ans": "hi\nhi"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "lambda: tiny one-line functions",
   "q": "`words = [\"cherry\", \"apple\", \"kiwi\", \"plum\"]`. Sort them by their LAST letter, using `key=lambda`, and print the list.",
   "starter": "words = [\"cherry\", \"apple\", \"kiwi\", \"plum\"]\n",
   "sol": "words = [\"cherry\", \"apple\", \"kiwi\", \"plum\"]\nprint(sorted(words, key=lambda w: w[-1]))",
   "e": "The lambda returns `w[-1]`, so `sorted()` compares the last letters: e, i, m, y.",
   "out": "['apple', 'kiwi', 'plum', 'cherry']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "*args: any number of positional arguments",
   "q": "Write `report(title, *values, **opts)`. It prints the title, a colon, then the total of `values`, with `opts[\"unit\"]` in front when given. So `report(\"Sales\", 100, 250, unit=\"₹\")` prints `Sales: ₹350` and `report(\"Units\", 3, 4)` prints `Units: 7`.",
   "starter": "# def report(title, *values, **opts):\n",
   "sol": "def report(title, *values, **opts):\n    unit = opts.get(\"unit\", \"\")\n    print(f\"{title}: {unit}{sum(values)}\")\n\nreport(\"Sales\", 100, 250, unit=\"₹\")\nreport(\"Units\", 3, 4)",
   "e": "`*values` is a tuple of the numbers and `**opts` a dictionary of options. `get()` gives an empty unit when none was passed.",
   "out": "Sales: ₹350\nUnits: 7"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Generators and yield",
   "q": "This code should print `[1, 4, 9]`, but it crashes. Fix it so the function hands out every square.",
   "c": "def squares(n):\n    for i in range(1, n + 1):\n        return i * i\n\nprint(list(squares(3)))",
   "fixed": "def squares(n):\n    for i in range(1, n + 1):\n        yield i * i\n\nprint(list(squares(3)))",
   "e": "`return` ends the function with one number, and `list()` cannot loop over a number. `yield` turns the function into a generator of all the squares.",
   "want": "[1, 4, 9]",
   "got": "TypeError: 'int' object is not iterable"
  }
 ],
 "errors": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "try and except",
   "q": "Type exactly what this code prints.",
   "c": "try:\n    print(int(\"42\") + 1)\nexcept ValueError:\n    print(\"bad\")",
   "e": "Nothing goes wrong inside `try`, so the `except` block is skipped.",
   "ans": "43"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "try and except",
   "q": "`text = \"abc\"`. Convert it to an int inside `try`. If that gives a `ValueError`, print `Not a number`.",
   "starter": "text = \"abc\"\n",
   "sol": "text = \"abc\"\ntry:\n    print(int(text))\nexcept ValueError:\n    print(\"Not a number\")",
   "e": "`int(\"abc\")` raises `ValueError`. The `except ValueError:` block catches it and the program carries on.",
   "out": "Not a number"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "try and except",
   "q": "`d = 0`. Print `10 / d` inside `try`, and print `Cannot divide by zero` if a `ZeroDivisionError` happens.",
   "starter": "d = 0\n",
   "sol": "d = 0\ntry:\n    print(10 / d)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")",
   "e": "Name the exact error you expect after `except`.",
   "out": "Cannot divide by zero"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "The common exceptions",
   "q": "The starter has three small functions that each fail in a different way. Call each one inside `try`, and in `except Exception as e:` print the name of the error with `type(e).__name__`.",
   "starter": "tests = [lambda: int(\"x\"), lambda: [1, 2][5], lambda: {\"a\": 1}[\"b\"]]\n",
   "sol": "tests = [lambda: int(\"x\"), lambda: [1, 2][5], lambda: {\"a\": 1}[\"b\"]]\nfor t in tests:\n    try:\n        t()\n    except Exception as e:\n        print(type(e).__name__)",
   "e": "`Exception` catches almost every error. `type(e).__name__` gives its name: a bad conversion, an index past the end, a missing key.",
   "out": "ValueError\nIndexError\nKeyError"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "try and except",
   "q": "This code should print `Cannot divide`, but it crashes. Fix the except line.",
   "c": "try:\n    print(10 / 0)\nexcept ValueError:\n    print(\"Cannot divide\")",
   "fixed": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"Cannot divide\")",
   "e": "`except ValueError` only catches a `ValueError`. Dividing by 0 raises `ZeroDivisionError`, so name that one.",
   "want": "Cannot divide",
   "got": "ZeroDivisionError: division by zero"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "else and finally",
   "q": "Type exactly what this code prints.",
   "c": "try:\n    x = 5\nexcept ValueError:\n    print(\"error\")\nelse:\n    print(\"ok\", x)\nfinally:\n    print(\"done\")",
   "e": "`else` runs when there was no error. `finally` runs every time, error or not.",
   "ans": "ok 5\ndone"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "raise: create your own errors",
   "q": "Write `set_price(p)` that raises `ValueError(\"Price must be positive\")` when `p` is 0 or less, and returns `p` otherwise. Call `set_price(0)` inside `try` and print `Error: Price must be positive`.",
   "starter": "# def set_price(p):\n",
   "sol": "def set_price(p):\n    if p <= 0:\n        raise ValueError(\"Price must be positive\")\n    return p\n\ntry:\n    set_price(0)\nexcept ValueError as e:\n    print(\"Error:\", e)",
   "e": "`raise` creates the error yourself. `except ... as e` gives you the error, and printing `e` shows its message.",
   "out": "Error: Price must be positive"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Two kinds of errors",
   "q": "This code should print `hi`. The `try` does not help here. Fix the real problem.",
   "c": "try:\n    print(\"hi\"\nexcept SyntaxError:\n    print(\"fixed\")",
   "fixed": "try:\n    print(\"hi\")\nexcept SyntaxError:\n    print(\"fixed\")",
   "e": "A syntax error stops Python before anything runs, so `try` cannot catch it. Only runtime errors can be caught. Close the bracket.",
   "want": "hi",
   "got": "SyntaxError: '(' was never closed"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Real uses",
   "q": "`readings = [\"12.5\", \"x\", \"13\", \"--\", \"11.5\"]`. Convert each with `float()` inside `try`, skip the bad ones, and print the clean list and how many were skipped.",
   "starter": "readings = [\"12.5\", \"x\", \"13\", \"--\", \"11.5\"]\n",
   "sol": "readings = [\"12.5\", \"x\", \"13\", \"--\", \"11.5\"]\nclean = []\nskipped = 0\nfor r in readings:\n    try:\n        clean.append(float(r))\n    except ValueError:\n        skipped += 1\nprint(clean, skipped)",
   "e": "A `try` inside the loop handles each value on its own, so one bad value does not stop the rest.",
   "out": "[12.5, 13.0, 11.5] 2"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "else and finally",
   "q": "Type exactly what this code prints.",
   "c": "def f(n):\n    try:\n        r = 10 / n\n    except ZeroDivisionError:\n        return \"zero\"\n    else:\n        return r\n    finally:\n        print(\"checked\", n)\n\nprint(f(2))\nprint(f(0))",
   "e": "`finally` runs just before the function returns, so `checked` is printed before each result.",
   "ans": "checked 2\n5.0\nchecked 0\nzero"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "try and except",
   "q": "Try `int(\"12a\")`, catch it with `except ValueError as e`, and print `Error:` followed by the message.",
   "starter": "# try / except ValueError as e\n",
   "sol": "try:\n    int(\"12a\")\nexcept ValueError as e:\n    print(\"Error:\", e)",
   "e": "The error object carries Python's own message, which is handy in logs.",
   "out": "Error: invalid literal for int() with base 10: '12a'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "try and except",
   "q": "Write `safe_get(d, key)` that returns `d[key]`, or `\"missing\"` if that raises a `KeyError`. Print `safe_get({\"a\": 1}, \"a\")` and `safe_get({\"a\": 1}, \"b\")` with one `print()`.",
   "starter": "# def safe_get(d, key):\n",
   "sol": "def safe_get(d, key):\n    try:\n        return d[key]\n    except KeyError:\n        return \"missing\"\n\nprint(safe_get({\"a\": 1}, \"a\"), safe_get({\"a\": 1}, \"b\"))",
   "e": "A `try` inside a function can turn an error into a normal return value.",
   "out": "1 missing"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Real uses",
   "q": "This check should pass and print `Check passed`, because the total really is 60. Fix the assert.",
   "c": "total = sum([10, 20, 30])\nassert total == 50, \"Total should be 60\"\nprint(\"Check passed\")",
   "fixed": "total = sum([10, 20, 30])\nassert total == 60, \"Total should be 60\"\nprint(\"Check passed\")",
   "e": "`assert` stops the program with an `AssertionError` when its check is `False`. The check itself was wrong.",
   "want": "Check passed",
   "got": "AssertionError: Total should be 60"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "try and except",
   "q": "Type exactly what this code prints.",
   "c": "try:\n    print(\"A\")\n    x = {\"a\": 1}[\"b\"]\n    print(\"B\")\nexcept KeyError:\n    print(\"C\")\nprint(\"D\")",
   "e": "The error happens on the second line, so `B` is skipped. After the `except` block, the program carries on.",
   "ans": "A\nC\nD"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "raise: create your own errors",
   "q": "Write `withdraw(balance, amount)` that raises `ValueError(\"Insufficient funds\")` when `amount` is more than `balance`, and returns the new balance otherwise. For the pairs `(500, 200)` and `(500, 800)`, print the result or `Error: Insufficient funds`.",
   "starter": "# def withdraw(balance, amount):\n",
   "sol": "def withdraw(balance, amount):\n    if amount > balance:\n        raise ValueError(\"Insufficient funds\")\n    return balance - amount\n\nfor balance, amount in [(500, 200), (500, 800)]:\n    try:\n        print(withdraw(balance, amount))\n    except ValueError as e:\n        print(\"Error:\", e)",
   "e": "The function only reports the problem. The caller decides what to do with it.",
   "out": "300\nError: Insufficient funds"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The common exceptions",
   "q": "For each value in `[\"5\", \"x\", None]`, try `int(value)` and print `ok` or `bad`. Catch both `ValueError` and `TypeError` in ONE `except`.",
   "starter": "values = [\"5\", \"x\", None]\n",
   "sol": "values = [\"5\", \"x\", None]\nfor v in values:\n    try:\n        int(v)\n        print(\"ok\")\n    except (ValueError, TypeError):\n        print(\"bad\")",
   "e": "`int(\"x\")` is a `ValueError` and `int(None)` is a `TypeError`. A tuple after `except` catches both.",
   "out": "ok\nbad\nbad"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "raise: create your own errors",
   "q": "This code should print `Error: Negative age`. Fix the raise line.",
   "c": "def check(age):\n    if age < 0:\n        raise \"Negative age\"\n\ntry:\n    check(-1)\nexcept Exception as e:\n    print(\"Error:\", e)",
   "fixed": "def check(age):\n    if age < 0:\n        raise ValueError(\"Negative age\")\n\ntry:\n    check(-1)\nexcept Exception as e:\n    print(\"Error:\", e)",
   "e": "You can only raise an error object, like `ValueError(\"message\")`, not plain text.",
   "want": "Error: Negative age",
   "got": "Error: exceptions must derive from BaseException"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Reading a traceback",
   "q": "`menu = {\"tea\": 20}`. A traceback showed `KeyError: 'coffee'` from `menu[item]`. Write `get_price(item)` that returns the price, or 0 when the item is missing, using `get()` instead of `try`. Print `get_price(\"tea\")` and `get_price(\"coffee\")`.",
   "starter": "menu = {\"tea\": 20}\n",
   "sol": "menu = {\"tea\": 20}\n\ndef get_price(item):\n    return menu.get(item, 0)\n\nprint(get_price(\"tea\"), get_price(\"coffee\"))",
   "e": "Reading the traceback tells you the line and the cause. Often the best fix avoids the error altogether.",
   "out": "20 0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Real uses",
   "q": "Pretend the user typed `typed = [\"\", \"abc\", \"-3\", \"7\"]`. Go through them and find the first whole number from 1 to 10, using `try/except ValueError` and a range check. Print `Invalid entry` for each bad one, then `OK: 7`.",
   "starter": "typed = [\"\", \"abc\", \"-3\", \"7\"]\n",
   "sol": "typed = [\"\", \"abc\", \"-3\", \"7\"]\nfor raw in typed:\n    try:\n        n = int(raw)\n        if 1 <= n <= 10:\n            print(\"OK:\", n)\n            break\n        print(\"Invalid entry\")\n    except ValueError:\n        print(\"Invalid entry\")",
   "e": "Two kinds of bad input: text that is not a number (caught by `except`) and numbers out of range (caught by the `if`).",
   "out": "Invalid entry\nInvalid entry\nInvalid entry\nOK: 7"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "else and finally",
   "q": "For each item in `[\"10\", \"20\", \"x\", \"30\"]`: convert it in `try`, count it as bad in `except`, and add it to the total in `else`. Then print the total, the number of bad items and the average of the good ones.",
   "starter": "items = [\"10\", \"20\", \"x\", \"30\"]\n",
   "sol": "items = [\"10\", \"20\", \"x\", \"30\"]\ntotal = 0\ngood = 0\nbad = 0\nfor item in items:\n    try:\n        n = int(item)\n    except ValueError:\n        bad += 1\n    else:\n        total += n\n        good += 1\nprint(total, bad, total / good)",
   "e": "Keep the `try` block small (only the risky line). The work that should happen only on success goes in `else`.",
   "out": "60 1 20.0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "raise: create your own errors",
   "q": "Write `parse_score(text)`: convert it with `int()` (let its `ValueError` happen), then raise `ValueError(\"Out of range\")` if it is not from 0 to 100. For `[\"85\", \"105\", \"abc\"]`, print the score or `Error:` with the message.",
   "starter": "# def parse_score(text):\n",
   "sol": "def parse_score(text):\n    score = int(text)\n    if not 0 <= score <= 100:\n        raise ValueError(\"Out of range\")\n    return score\n\nfor text in [\"85\", \"105\", \"abc\"]:\n    try:\n        print(parse_score(text))\n    except ValueError as e:\n        print(\"Error:\", e)",
   "e": "Both problems come out as a `ValueError`, so one `except` handles them, and the message says which one it was.",
   "out": "85\nError: Out of range\nError: invalid literal for int() with base 10: 'abc'"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "else and finally",
   "q": "Type exactly what this code prints.",
   "c": "def f():\n    try:\n        return \"try\"\n    finally:\n        print(\"finally runs\")\n\nprint(f())",
   "e": "Even when `try` returns, `finally` still runs first. Then the returned value is printed.",
   "ans": "finally runs\ntry"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "try and except",
   "q": "This code should print `25.0`, `cannot divide by zero` and `not a number`. Fix it so every value is handled.",
   "c": "nums = [\"4\", \"0\", \"x\"]\nfor n in nums:\n    try:\n        print(100 / int(n))\n    except ValueError:\n        print(\"not a number\")",
   "fixed": "nums = [\"4\", \"0\", \"x\"]\nfor n in nums:\n    try:\n        print(100 / int(n))\n    except ZeroDivisionError:\n        print(\"cannot divide by zero\")\n    except ValueError:\n        print(\"not a number\")",
   "e": "One `try` can have several `except` blocks, one per kind of error.",
   "want": "25.0\ncannot divide by zero\nnot a number",
   "got": "25.0\nZeroDivisionError: division by zero"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The common exceptions",
   "q": "Write `to_number(text)` that returns an int if it can, otherwise a float if it can, otherwise `None` (use a `try` inside an `except`). Print `[to_number(x) for x in [\"7\", \"7.5\", \"seven\"]]`.",
   "starter": "# def to_number(text):\n",
   "sol": "def to_number(text):\n    try:\n        return int(text)\n    except ValueError:\n        try:\n            return float(text)\n        except ValueError:\n            return None\n\nprint([to_number(x) for x in [\"7\", \"7.5\", \"seven\"]])",
   "e": "Try the strictest conversion first. If it fails, fall back to the next one.",
   "out": "[7, 7.5, None]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Real uses",
   "q": "Write `average(values)` that uses `assert` to check the list is not empty (message `No values`), then returns the average. Call `average([])` in `try/except AssertionError as e` and print `Error: No values`. Then print `average([4, 6])`.",
   "starter": "# def average(values):\n",
   "sol": "def average(values):\n    assert len(values) > 0, \"No values\"\n    return sum(values) / len(values)\n\ntry:\n    average([])\nexcept AssertionError as e:\n    print(\"Error:\", e)\nprint(average([4, 6]))",
   "e": "`assert` is a quick way to state what must be true. When it fails, it raises `AssertionError` with your message.",
   "out": "Error: No values\n5.0"
  }
 ],
 "files": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Writing to a file",
   "q": "Type exactly what this code prints.",
   "c": "with open(\"t1.txt\", \"w\") as f:\n    f.write(\"one\\ntwo\")\nwith open(\"t1.txt\") as f:\n    print(f.read())",
   "e": "The `\\n` written into the file is a real new line, so reading the file back gives two lines.",
   "ans": "one\ntwo"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Writing to a file",
   "q": "Write `Hello File` into `note.txt`, then open it again, read it and print what is inside.",
   "starter": "# Write first, then read\n",
   "sol": "with open(\"note.txt\", \"w\") as f:\n    f.write(\"Hello File\")\nwith open(\"note.txt\") as f:\n    print(f.read())",
   "e": "Mode `\"w\"` writes (and replaces the file). Opening with no mode reads.",
   "out": "Hello File"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Reading a file",
   "q": "Write three lines, `a`, `b` and `c`, into `abc.txt` (each ending with `\\n`). Then print how many lines `readlines()` gives.",
   "starter": "# Write, then count the lines\n",
   "sol": "with open(\"abc.txt\", \"w\") as f:\n    f.write(\"a\\nb\\nc\\n\")\nwith open(\"abc.txt\") as f:\n    print(len(f.readlines()))",
   "e": "`readlines()` gives a list with one string per line.",
   "out": "3"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "The with statement (always use it)",
   "q": "Write `Day 1` into `log.txt` with mode `\"w\"`. Then add `Day 2` on a new line with mode `\"a\"`. Then print the whole file.",
   "starter": "# \"w\" first, then \"a\"\n",
   "sol": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"Day 1\")\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"\\nDay 2\")\nwith open(\"log.txt\") as f:\n    print(f.read())",
   "e": "`\"a\"` (append) adds to the end and keeps what is there. `\"w\"` would wipe it first.",
   "out": "Day 1\nDay 2"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Writing to a file",
   "q": "This code should save the number and print `2000`, but it crashes. Fix it.",
   "c": "with open(\"n.txt\", \"w\") as f:\n    f.write(2000)\nwith open(\"n.txt\") as f:\n    print(f.read())",
   "fixed": "with open(\"n.txt\", \"w\") as f:\n    f.write(str(2000))\nwith open(\"n.txt\") as f:\n    print(f.read())",
   "e": "`write()` only takes text. Convert numbers with `str()` (or an f-string) first.",
   "want": "2000",
   "got": "TypeError: write() argument must be str, not int"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Reading a file",
   "q": "Type exactly what this code prints.",
   "c": "with open(\"t6.txt\", \"w\") as f:\n    f.write(\"Hi\\nBye\\n\")\nwith open(\"t6.txt\") as f:\n    print(f.readline().strip())\n    print(f.readline().strip())",
   "e": "Each `readline()` reads the next line. `strip()` removes the `\\n` at its end.",
   "ans": "Hi\nBye"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Reading a file",
   "q": "Write `Asha` and `Ravi` on two lines into `names.txt`. Read them back with a `for` loop over the file and print a list of the names without the `\\n`.",
   "starter": "# Write, then loop over the file\n",
   "sol": "with open(\"names.txt\", \"w\") as f:\n    f.write(\"Asha\\nRavi\\n\")\nnames = []\nwith open(\"names.txt\") as f:\n    for line in f:\n        names.append(line.strip())\nprint(names)",
   "e": "Looping over a file gives one line at a time, each still ending with `\\n`, so `strip()` it.",
   "out": "['Asha', 'Ravi']"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Opening a file: the modes",
   "q": "This code should print `data`, but it crashes. Fix the second `open()`.",
   "c": "with open(\"m.txt\", \"w\") as f:\n    f.write(\"data\")\nwith open(\"m.txt\", \"w\") as f:\n    print(f.read())",
   "fixed": "with open(\"m.txt\", \"w\") as f:\n    f.write(\"data\")\nwith open(\"m.txt\", \"r\") as f:\n    print(f.read())",
   "e": "A file opened with `\"w\"` can only be written, and opening it with `\"w\"` also empties it. Read with `\"r\"`.",
   "want": "data",
   "got": "io.UnsupportedOperation: not readable"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "CSV files",
   "q": "Write the rows `[[\"name\", \"marks\"], [\"Asha\", 82], [\"Ravi\", 67]]` to `marks.csv` with `csv.writer`. Read it back with `csv.DictReader` and print one line per student: `Asha: 82`.",
   "starter": "import csv\nrows = [[\"name\", \"marks\"], [\"Asha\", 82], [\"Ravi\", 67]]\n",
   "sol": "import csv\nrows = [[\"name\", \"marks\"], [\"Asha\", 82], [\"Ravi\", 67]]\nwith open(\"marks.csv\", \"w\", newline=\"\") as f:\n    csv.writer(f).writerows(rows)\nwith open(\"marks.csv\", newline=\"\") as f:\n    for row in csv.DictReader(f):\n        print(f\"{row['name']}: {row['marks']}\")",
   "e": "`DictReader` uses the first row as column names, so each row is a dictionary like `{\"name\": \"Asha\", \"marks\": \"82\"}`.",
   "out": "Asha: 82\nRavi: 67"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "JSON files",
   "q": "Save `{\"name\": \"Asha\", \"scores\": [82, 91]}` to `s.json` with `json.dump`. Load it back with `json.load` and print the sum of the scores.",
   "starter": "import json\n",
   "sol": "import json\nwith open(\"s.json\", \"w\") as f:\n    json.dump({\"name\": \"Asha\", \"scores\": [82, 91]}, f)\nwith open(\"s.json\") as f:\n    data = json.load(f)\nprint(sum(data[\"scores\"]))",
   "e": "JSON keeps the structure: the list comes back as a real list of numbers.",
   "out": "173"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "JSON files",
   "q": "Type exactly what this code prints.",
   "c": "import json\nprint(json.dumps({\"ok\": True, \"coupon\": None}))",
   "e": "In JSON, Python's `True` becomes `true` and `None` becomes `null`. JSON always uses double quotes.",
   "ans": "{\"ok\": true, \"coupon\": null}"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Paths, and checking or deleting files",
   "q": "Use `os.path.exists()` to print whether `\"hotel_bookings.csv\"` exists and whether `\"missing.csv\"` exists, with one `print()`.",
   "starter": "import os\n",
   "sol": "import os\nprint(os.path.exists(\"hotel_bookings.csv\"), os.path.exists(\"missing.csv\"))",
   "e": "`os.path.exists()` checks for a file without opening it, so nothing can crash.",
   "out": "True False"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Paths, and checking or deleting files",
   "q": "This code should print `File missing` instead of crashing. Fix it with `try` / `except`.",
   "c": "with open(\"no_such_file.txt\") as f:\n    print(f.read())",
   "fixed": "try:\n    with open(\"no_such_file.txt\") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print(\"File missing\")",
   "e": "Opening a file that is not there raises `FileNotFoundError`, which you can catch like any error.",
   "want": "File missing",
   "got": "FileNotFoundError: [Errno 2] No such file or directory: 'no_such_file.txt'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "CSV files",
   "q": "Read `hotel_bookings.csv` with `csv.DictReader` and print how many bookings (data rows) it has.",
   "starter": "import csv\n",
   "sol": "import csv\nwith open(\"hotel_bookings.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nprint(len(rows))",
   "e": "The header row becomes the keys, so it is not counted as a booking.",
   "out": "41"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Writing to a file",
   "q": "Type exactly what this code prints.",
   "c": "lines = [\"x\\n\", \"y\\n\"]\nwith open(\"w15.txt\", \"w\") as f:\n    f.writelines(lines)\n    f.write(\"z\")\nwith open(\"w15.txt\") as f:\n    print(len(f.read()))",
   "e": "The file holds `x`, new line, `y`, new line, `z`: 5 characters. `writelines()` adds no extra new lines.",
   "ans": "5"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Reading a file",
   "q": "Write `data is the new oil and data is power` into `quote.txt`. Read it back and print the number of words and how many times `data` appears, with one `print()`.",
   "starter": "# Write, then read and count\n",
   "sol": "with open(\"quote.txt\", \"w\") as f:\n    f.write(\"data is the new oil and data is power\")\nwith open(\"quote.txt\") as f:\n    words = f.read().split()\nprint(len(words), words.count(\"data\"))",
   "e": "Once the text is read into a string, all the string and list tools work on it.",
   "out": "9 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "JSON files",
   "q": "Write `{\"theme\": \"light\", \"font\": 14}` to `settings.json`. Then load it, change `theme` to `\"dark\"`, save it again, load it once more and print the dictionary.",
   "starter": "import json\n",
   "sol": "import json\nwith open(\"settings.json\", \"w\") as f:\n    json.dump({\"theme\": \"light\", \"font\": 14}, f)\nwith open(\"settings.json\") as f:\n    settings = json.load(f)\nsettings[\"theme\"] = \"dark\"\nwith open(\"settings.json\", \"w\") as f:\n    json.dump(settings, f)\nwith open(\"settings.json\") as f:\n    print(json.load(f))",
   "e": "Load, change, save: the usual way to update a settings file.",
   "out": "{'theme': 'dark', 'font': 14}"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "JSON files",
   "q": "This code should print `{'a': 1}`, but it crashes. Fix the line that saves the file.",
   "c": "import json\ndata = {\"a\": 1}\nwith open(\"d.json\", \"w\") as f:\n    json.dumps(data, f)\nwith open(\"d.json\") as f:\n    print(json.load(f))",
   "fixed": "import json\ndata = {\"a\": 1}\nwith open(\"d.json\", \"w\") as f:\n    json.dump(data, f)\nwith open(\"d.json\") as f:\n    print(json.load(f))",
   "e": "`dumps()` (with an s, for string) only makes text. `dump()` writes into a file.",
   "want": "{'a': 1}",
   "got": "TypeError: dumps() takes 1 positional argument but 2 were given"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "CSV files",
   "q": "From `hotel_bookings.csv`, add up `amount` per `channel` for confirmed bookings only. The data is messy: clean `status` with `strip().title()` and `channel` with `strip().lower()`; some amounts look like `₹5,200` (remove `₹` and `,`) and some are empty (skip them). Print the channels sorted by total, highest first, as `Channel: ₹amount` (with commas).",
   "starter": "import csv\n",
   "sol": "import csv\ntotals = {}\nwith open(\"hotel_bookings.csv\", newline=\"\") as f:\n    for row in csv.DictReader(f):\n        amount = row[\"amount\"].replace(\"₹\", \"\").replace(\",\", \"\").strip()\n        if row[\"status\"].strip().title() == \"Confirmed\" and amount:\n            channel = row[\"channel\"].strip().lower()\n            totals[channel] = totals.get(channel, 0) + int(amount)\nfor channel in sorted(totals, key=totals.get, reverse=True):\n    print(f\"{channel}: ₹{totals[channel]:,}\")",
   "e": "Real files are messy: ` Walk-in`, `Walk-in ` and `goibibo` must be cleaned before grouping, and amounts must be turned into plain digits before `int()`.",
   "out": "booking.com: ₹67,800\ngoibibo: ₹48,400\nmakemytrip: ₹47,400\nwalk-in: ₹30,000"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Writing to a file",
   "q": "From `hotel_bookings.csv`, write a file `summary.txt` with three lines: `Bookings: <all rows>`, `Nights: <total nights>` and `Revenue: ₹<total amount with commas>`. Skip empty nights or amounts, and remove `₹` and `,` from amounts like `₹5,200`. Then print the file.",
   "starter": "import csv\n",
   "sol": "import csv\nwith open(\"hotel_bookings.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nnights = sum(int(r[\"nights\"]) for r in rows if r[\"nights\"].strip())\namounts = [r[\"amount\"].replace(\"₹\", \"\").replace(\",\", \"\").strip() for r in rows]\nrevenue = sum(int(a) for a in amounts if a)\nwith open(\"summary.txt\", \"w\") as f:\n    f.write(f\"Bookings: {len(rows)}\\n\")\n    f.write(f\"Nights: {nights}\\n\")\n    f.write(f\"Revenue: ₹{revenue:,}\\n\")\nwith open(\"summary.txt\") as f:\n    print(f.read().strip())",
   "e": "Read, clean, calculate, then write a small report file that others can open.",
   "out": "Bookings: 41\nNights: 86\nRevenue: ₹234,800"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "pickle: save any Python object",
   "q": "Save `{\"Ramayan\": 1000, \"Drishyam\": 500}` with `pickle`, load it back, and print whether the loaded dict equals the original, and the loaded dict itself.",
   "starter": "import pickle\noriginal = {\"Ramayan\": 1000, \"Drishyam\": 500}\n",
   "sol": "import pickle\noriginal = {\"Ramayan\": 1000, \"Drishyam\": 500}\nwith open(\"movies.pkl\", \"wb\") as f:\n    pickle.dump(original, f)\nwith open(\"movies.pkl\", \"rb\") as f:\n    loaded = pickle.load(f)\nprint(loaded == original, loaded)",
   "e": "pickle files are binary, so use `\"wb\"` and `\"rb\"`. The object comes back exactly as it was.",
   "out": "True {'Ramayan': 1000, 'Drishyam': 500}"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "CSV files",
   "q": "Type exactly what this code prints.",
   "c": "import csv\nwith open(\"t22.csv\", \"w\", newline=\"\") as f:\n    f.write(\"name,amount\\nAsha,1200\\nRavi,950\\n\")\nwith open(\"t22.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nprint(rows[1][\"name\"], int(rows[0][\"amount\"]) + int(rows[1][\"amount\"]))",
   "e": "CSV values are always read as text, so `int()` is needed before adding.",
   "ans": "Ravi 2150"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Reading a file",
   "q": "Write `apple`, `banana` and `cherry` on three lines into `fruits.txt`. Read it back as a list of clean names using a list comprehension over the file, and print the list.",
   "starter": "# Write, then read with a comprehension\n",
   "sol": "with open(\"fruits.txt\", \"w\") as f:\n    f.write(\"apple\\nbanana\\ncherry\\n\")\nwith open(\"fruits.txt\") as f:\n    fruits = [line.strip() for line in f]\nprint(fruits)",
   "e": "A file is a sequence of lines, so it works directly in a comprehension.",
   "out": "['apple', 'banana', 'cherry']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "JSON files",
   "q": "Save this list of orders to `orders.json`: `[{\"customer\": \"Asha\", \"amount\": 1200}, {\"customer\": \"Ravi\", \"amount\": 3400}, {\"customer\": \"Neha\", \"amount\": 800}]`. Load it back, then print the total amount and the customer of the biggest order (use `max()` with `key=lambda`).",
   "starter": "import json\norders = [{\"customer\": \"Asha\", \"amount\": 1200}, {\"customer\": \"Ravi\", \"amount\": 3400}, {\"customer\": \"Neha\", \"amount\": 800}]\n",
   "sol": "import json\norders = [{\"customer\": \"Asha\", \"amount\": 1200}, {\"customer\": \"Ravi\", \"amount\": 3400}, {\"customer\": \"Neha\", \"amount\": 800}]\nwith open(\"orders.json\", \"w\") as f:\n    json.dump(orders, f)\nwith open(\"orders.json\") as f:\n    loaded = json.load(f)\ntotal = sum(o[\"amount\"] for o in loaded)\nbiggest = max(loaded, key=lambda o: o[\"amount\"])\nprint(total, biggest[\"customer\"])",
   "e": "A JSON file can hold a whole list of records, ready for the usual list and dictionary tools.",
   "out": "5400 Ravi"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "The with statement (always use it)",
   "q": "This code should write `onetwo` and print it, but it crashes. Fix it.",
   "c": "with open(\"f25.txt\", \"w\") as f:\n    f.write(\"one\")\nf.write(\"two\")\nwith open(\"f25.txt\") as f:\n    print(f.read())",
   "fixed": "with open(\"f25.txt\", \"w\") as f:\n    f.write(\"one\")\n    f.write(\"two\")\nwith open(\"f25.txt\") as f:\n    print(f.read())",
   "e": "The file closes as soon as the `with` block ends. Every write must be indented inside the block.",
   "want": "onetwo",
   "got": "ValueError: I/O operation on closed file."
  }
 ],
 "modules": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "math",
   "q": "Type exactly what this code prints.",
   "c": "import math\nprint(math.ceil(9.1), math.floor(9.9), math.sqrt(49))",
   "e": "`ceil` always rounds up, `floor` always rounds down, and `sqrt` always gives a float.",
   "ans": "10 9 7.0"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "math",
   "q": "A van carries 12 boxes per trip. Use `math.ceil` to print how many trips are needed for 50 boxes.",
   "starter": "import math\n",
   "sol": "import math\nprint(math.ceil(50 / 12))",
   "e": "50 / 12 is about 4.17, and a part trip is still a trip, so round up: 5.",
   "out": "5"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Ways to import",
   "q": "Import `sqrt` and `pi` from `math` with one `from ... import` line. Print `sqrt(81)` and `pi` rounded to 2 decimals, with one `print()`.",
   "starter": "# from math import ...\n",
   "sol": "from math import sqrt, pi\nprint(sqrt(81), round(pi, 2))",
   "e": "`from math import sqrt, pi` lets you use the names without the `math.` in front.",
   "out": "9.0 3.14"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "statistics and collections",
   "q": "Import `statistics` as `st`. Print the mean and the median of `[12, 15, 20, 14, 16]` with one `print()`.",
   "starter": "import statistics as st\nsales = [12, 15, 20, 14, 16]\n",
   "sol": "import statistics as st\nsales = [12, 15, 20, 14, 16]\nprint(st.mean(sales), st.median(sales))",
   "e": "The mean adds and divides (15.4). The median is the middle value after sorting (15).",
   "out": "15.4 15"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "datetime",
   "q": "Use `datetime` to make the date 25 October 2026 and print it as `25/10/2026` with `strftime`.",
   "starter": "from datetime import date\n",
   "sol": "from datetime import date\nd = date(2026, 10, 25)\nprint(d.strftime(\"%d/%m/%Y\"))",
   "e": "`%d`, `%m` and `%Y` are the day, month and 4-digit year.",
   "out": "25/10/2026"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Ways to import",
   "q": "This code should print `4.0`, but it crashes. Fix the print line.",
   "c": "import math\nprint(sqrt(16))",
   "fixed": "import math\nprint(math.sqrt(16))",
   "e": "`import math` brings in the module, so its functions need the `math.` prefix.",
   "want": "4.0",
   "got": "NameError: name 'sqrt' is not defined"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "statistics and collections",
   "q": "Type exactly what this code prints.",
   "c": "from collections import Counter\nc = Counter(\"banana\")\nprint(c[\"a\"], c.most_common(1))",
   "e": "`Counter` counts each item. `most_common(1)` gives a list with the top (item, count) pair.",
   "ans": "3 [('a', 3)]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Ways to import",
   "q": "This code should print `4`, but it crashes. Fix the print line.",
   "c": "import statistics as st\nprint(statistics.mean([2, 4, 6]))",
   "fixed": "import statistics as st\nprint(st.mean([2, 4, 6]))",
   "e": "With `as st`, the module is known only by its short name `st`.",
   "want": "4",
   "got": "NameError: name 'statistics' is not defined. Did you forget to import 'statistics'?"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "datetime",
   "q": "A guest checks in on 30 October 2026 for 4 nights. Use `date` and `timedelta` to print the checkout day like `Tuesday, 03 November 2026` (`\"%A, %d %B %Y\"`).",
   "starter": "from datetime import date, timedelta\n",
   "sol": "from datetime import date, timedelta\ncheckin = date(2026, 10, 30)\ncheckout = checkin + timedelta(days=4)\nprint(checkout.strftime(\"%A, %d %B %Y\"))",
   "e": "Adding a `timedelta` moves the date forward, across month ends too.",
   "out": "Tuesday, 03 November 2026"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "datetime",
   "q": "Print the number of days from 15 August 2026 to 2 October 2026 by subtracting two dates.",
   "starter": "from datetime import date\n",
   "sol": "from datetime import date\nprint((date(2026, 10, 2) - date(2026, 8, 15)).days)",
   "e": "Subtracting dates gives a `timedelta`, and `.days` is the number of days in it.",
   "out": "48"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "random",
   "q": "Type exactly what this code prints.",
   "c": "import random\nrandom.seed(7)\na = random.randint(1, 100)\nrandom.seed(7)\nb = random.randint(1, 100)\nprint(a == b, 1 <= a <= 100)",
   "e": "The same seed gives the same \"random\" numbers, so `a` and `b` are equal. `randint(1, 100)` includes both ends.",
   "ans": "True True"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "re: finding patterns in text",
   "q": "`text = \"Order 12 shipped, order 7 pending, order 105 cancelled\"`. Use `re.findall` to get every number, and print them as a list of ints.",
   "starter": "import re\ntext = \"Order 12 shipped, order 7 pending, order 105 cancelled\"\n",
   "sol": "import re\ntext = \"Order 12 shipped, order 7 pending, order 105 cancelled\"\nprint([int(n) for n in re.findall(r\"\\d+\", text)])",
   "e": "`\\d+` means one or more digits. `findall` returns the matches as text, so convert them.",
   "out": "[12, 7, 105]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "statistics and collections",
   "q": "Group `words = [\"apple\", \"avocado\", \"banana\", \"cherry\", \"blueberry\"]` by their first letter with `defaultdict(list)`, and print `dict(groups)`.",
   "starter": "from collections import defaultdict\nwords = [\"apple\", \"avocado\", \"banana\", \"cherry\", \"blueberry\"]\n",
   "sol": "from collections import defaultdict\nwords = [\"apple\", \"avocado\", \"banana\", \"cherry\", \"blueberry\"]\ngroups = defaultdict(list)\nfor w in words:\n    groups[w[0]].append(w)\nprint(dict(groups))",
   "e": "A `defaultdict(list)` makes an empty list the first time a key is used, so you can `append` straight away.",
   "out": "{'a': ['apple', 'avocado'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "datetime",
   "q": "This code should print `2026`, but it crashes. Fix the format.",
   "c": "from datetime import datetime\nd = datetime.strptime(\"25/10/2026\", \"%Y-%m-%d\")\nprint(d.year)",
   "fixed": "from datetime import datetime\nd = datetime.strptime(\"25/10/2026\", \"%d/%m/%Y\")\nprint(d.year)",
   "e": "`strptime` needs a format that matches the text exactly: day, slash, month, slash, year.",
   "want": "2026",
   "got": "ValueError: time data '25/10/2026' does not match format '%Y-%m-%d'"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "math",
   "q": "Type exactly what this code prints.",
   "c": "import math\nprint(math.pow(2, 3), 2 ** 3, math.factorial(4))",
   "e": "`math.pow` always gives a float, while `**` keeps whole numbers whole. 4! = 24.",
   "ans": "8.0 8 24"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "random",
   "q": "Shuffle a copy of `[1, 2, 3, 4, 5]` with `random.shuffle`. Print the sorted shuffled list, and whether it still has the same items as the original.",
   "starter": "import random\nnums = [1, 2, 3, 4, 5]\n",
   "sol": "import random\nnums = [1, 2, 3, 4, 5]\nmixed = nums.copy()\nrandom.shuffle(mixed)\nprint(sorted(mixed), sorted(mixed) == nums)",
   "e": "`shuffle()` changes the order in place but keeps every item. Sorting proves it without printing a random order.",
   "out": "[1, 2, 3, 4, 5] True"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Making your own module",
   "q": "Write `main()` that prints `Report ready`, and call it only under `if __name__ == \"__main__\":`.",
   "starter": "# def main():\n",
   "sol": "def main():\n    print(\"Report ready\")\n\nif __name__ == \"__main__\":\n    main()",
   "e": "When you run a file directly, `__name__` is `\"__main__\"`. When it is imported, the block does not run.",
   "out": "Report ready"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Module, package, library",
   "q": "Use `dir()` to print whether `\"sqrt\"` and `\"mean\"` are names inside the `math` module, with one `print()`.",
   "starter": "import math\n",
   "sol": "import math\nprint(\"sqrt\" in dir(math), \"mean\" in dir(math))",
   "e": "`dir(module)` lists everything a module has. `mean` lives in `statistics`, not in `math`.",
   "out": "True False"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "statistics and collections",
   "q": "From `hotel_bookings.csv` (use `csv.DictReader`), print the mean amount rounded to 2 decimals and the median amount. Clean the amounts first: remove `₹` and `,`, and skip empty ones. Then use `Counter` on the room types (cleaned with `strip().title()`) to print the most common room type and its count.",
   "starter": "import csv\nimport statistics as st\nfrom collections import Counter\n",
   "sol": "import csv\nimport statistics as st\nfrom collections import Counter\nwith open(\"hotel_bookings.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\ncleaned = [r[\"amount\"].replace(\"₹\", \"\").replace(\",\", \"\").strip() for r in rows]\namounts = [int(a) for a in cleaned if a]\nprint(round(st.mean(amounts), 2), st.median(amounts))\nroom, count = Counter(r[\"room_type\"].strip().title() for r in rows).most_common(1)[0]\nprint(room, count)",
   "e": "Modules work together: `csv` reads, `statistics` summarises, and `Counter` counts the cleaned categories.",
   "out": "5870 5200.0\nDeluxe 19"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "datetime",
   "q": "From `hotel_bookings.csv`, count the bookings per weekday of `check_in`. Most dates look like `2026-08-26`, but some look like `19/08/2026`: try `\"%Y-%m-%d\"` with `strptime`, and on `ValueError` use `\"%d/%m/%Y\"`. Name the day with `strftime(\"%A\")`. Print the weekday with the most bookings and its count.",
   "starter": "import csv\nfrom datetime import datetime\nfrom collections import Counter\n",
   "sol": "import csv\nfrom datetime import datetime\nfrom collections import Counter\ndays = []\nwith open(\"hotel_bookings.csv\", newline=\"\") as f:\n    for row in csv.DictReader(f):\n        try:\n            d = datetime.strptime(row[\"check_in\"], \"%Y-%m-%d\")\n        except ValueError:\n            d = datetime.strptime(row[\"check_in\"], \"%d/%m/%Y\")\n        days.append(d.strftime(\"%A\"))\nday, count = Counter(days).most_common(1)[0]\nprint(day, count)",
   "e": "Turn the text into a real date first (two formats, so `try` the common one), then into a weekday name, then count.",
   "out": "Monday 10"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "re: finding patterns in text",
   "q": "`text = \"Invoices: INV-2041, INV-0007 and INV-1300 were paid; inv-99 was not.\"` Use `re.findall(r\"INV-\\d{4}\", text)` to get the 4-digit invoice codes. Print the list, then the total of their numbers.",
   "starter": "import re\ntext = \"Invoices: INV-2041, INV-0007 and INV-1300 were paid; inv-99 was not.\"\n",
   "sol": "import re\ntext = \"Invoices: INV-2041, INV-0007 and INV-1300 were paid; inv-99 was not.\"\ncodes = re.findall(r\"INV-\\d{4}\", text)\nprint(codes)\nprint(sum(int(c[4:]) for c in codes))",
   "e": "`\\d{4}` means exactly 4 digits, and the pattern is case-sensitive, so `inv-99` is left out.",
   "out": "['INV-2041', 'INV-0007', 'INV-1300']\n3348"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "datetime",
   "q": "Type exactly what this code prints.",
   "c": "from datetime import date\nd = date(2026, 10, 25)\nprint(d.strftime(\"%d %b %Y\"), d.weekday())",
   "e": "`%b` is the short month name. `weekday()` counts Monday as 0, so Sunday is 6.",
   "ans": "25 Oct 2026 6"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "statistics and collections",
   "q": "This code should print `('red', 2)`, the most common colour. Fix it.",
   "c": "from collections import Counter\nwords = \"red blue red green\".split()\nprint(Counter(words).most_common(1)[1])",
   "fixed": "from collections import Counter\nwords = \"red blue red green\".split()\nprint(Counter(words).most_common(1)[0])",
   "e": "`most_common(1)` is a list with ONE pair, at index 0. Index 1 does not exist.",
   "want": "('red', 2)",
   "got": "IndexError: list index out of range"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "random",
   "q": "After `random.seed(1)`, roll a dice 1000 times with `random.randint(1, 6)`. Print whether every roll was from 1 to 6, and whether all 6 faces appeared (use a set).",
   "starter": "import random\nrandom.seed(1)\n",
   "sol": "import random\nrandom.seed(1)\nrolls = [random.randint(1, 6) for _ in range(1000)]\nprint(all(1 <= r <= 6 for r in rolls), set(rolls) == {1, 2, 3, 4, 5, 6})",
   "e": "Check properties of random data instead of exact values: the range, and that every face shows up.",
   "out": "True True"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Module, package, library",
   "q": "This code should print `3.0`, but it crashes. Fix the import.",
   "c": "import Math\nprint(Math.sqrt(9))",
   "fixed": "import math\nprint(math.sqrt(9))",
   "e": "Module names are case-sensitive: the module is `math` in small letters.",
   "want": "3.0",
   "got": "ModuleNotFoundError: No module named 'Math'"
  }
 ],
 "oop": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Class vs object",
   "q": "Type exactly what this code prints.",
   "c": "class Room:\n    pass\n\nr1 = Room()\nr2 = Room()\nprint(type(r1).__name__, r1 is r2)",
   "e": "A class is the blueprint and each call `Room()` makes a new, separate object, so `r1` and `r2` are not the same object.",
   "ans": "Room False"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "__init__ and self",
   "q": "Write a class `Product` whose `__init__(self, name, price)` stores both values. Create `Product(\"Pen\", 10)` and print its name and price with one `print()`.",
   "starter": "# class Product:\n",
   "sol": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np = Product(\"Pen\", 10)\nprint(p.name, p.price)",
   "e": "`__init__` runs when the object is created. `self.name = name` stores the value inside that object.",
   "out": "Pen 10"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Attributes and methods",
   "q": "Write a class `Circle` that stores a radius and has a method `area()` returning `round(3.14159 * radius ** 2, 2)`. Print `Circle(2).area()`.",
   "starter": "# class Circle:\n",
   "sol": "class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n\n    def area(self):\n        return round(3.14159 * self.radius ** 2, 2)\n\nprint(Circle(2).area())",
   "e": "A method is a function inside the class. It reads the object's data through `self`.",
   "out": "12.57"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Attributes and methods",
   "q": "The starter has a `Student` class. Create `Student(\"Asha\", 70)`, change its marks to 82, and print `Asha 82`.",
   "starter": "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n",
   "sol": "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\ns = Student(\"Asha\", 70)\ns.marks = 82\nprint(s.name, s.marks)",
   "e": "Attributes are like variables that belong to one object. You can read and change them with a dot.",
   "out": "Asha 82"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Magic methods: __str__ and friends",
   "q": "Give `Product` a `__str__` method so that `print(Product(\"Pen\", 10))` prints `Pen: Rs 10`.",
   "starter": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n",
   "sol": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}: Rs {self.price}\"\n\nprint(Product(\"Pen\", 10))",
   "e": "`print()` calls `__str__` to get the text for an object. It must **return** a string.",
   "out": "Pen: Rs 10"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "__init__ and self",
   "q": "This code should print `Tata`, but it crashes. Fix it.",
   "c": "class Car:\n    def __init__(brand):\n        self.brand = brand\n\nc = Car(\"Tata\")\nprint(c.brand)",
   "fixed": "class Car:\n    def __init__(self, brand):\n        self.brand = brand\n\nc = Car(\"Tata\")\nprint(c.brand)",
   "e": "Every method needs `self` as its first parameter. Python passes the object in automatically.",
   "want": "Tata",
   "got": "TypeError: Car.__init__() takes 1 positional argument but 2 were given"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Class attributes vs instance attributes",
   "q": "Type exactly what this code prints.",
   "c": "class Student:\n    school = \"WsCube\"\n    def __init__(self, name):\n        self.name = name\n\na = Student(\"Asha\")\nb = Student(\"Ravi\")\nb.school = \"Other\"\nprint(a.school, b.school, Student.school)",
   "e": "`b.school = ...` creates an instance attribute on `b` only. `a` and the class still share the class attribute.",
   "ans": "WsCube Other WsCube"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Attributes and methods",
   "q": "This code should print `500`, but it crashes. Fix the method.",
   "c": "class Account:\n    def __init__(self, balance):\n        self.balance = balance\n\n    def show(self):\n        print(balance)\n\nAccount(500).show()",
   "fixed": "class Account:\n    def __init__(self, balance):\n        self.balance = balance\n\n    def show(self):\n        print(self.balance)\n\nAccount(500).show()",
   "e": "Inside a method, the object's data is `self.balance`. A plain `balance` is an unknown local name.",
   "want": "500",
   "got": "NameError: name 'balance' is not defined. Did you mean: 'self.balance'?"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Inheritance: building on another class",
   "q": "Write `Person` with `introduce()` returning `\"Hi, I am <name>\"`. Write `Employee(Person)` that also stores a company and overrides `introduce()` to add `\" from <company>\"`, using `super().introduce()`. Print `Employee(\"Asha\", \"TCS\").introduce()`.",
   "starter": "# class Person:\n# class Employee(Person):\n",
   "sol": "class Person:\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        return f\"Hi, I am {self.name}\"\n\nclass Employee(Person):\n    def __init__(self, name, company):\n        super().__init__(name)\n        self.company = company\n\n    def introduce(self):\n        return super().introduce() + f\" from {self.company}\"\n\nprint(Employee(\"Asha\", \"TCS\").introduce())",
   "e": "The child class reuses the parent's code with `super()` and only adds what is new.",
   "out": "Hi, I am Asha from TCS"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Polymorphism: same method name, different behaviour",
   "q": "Write classes `Circle(r)` and `Square(side)`, each with an `area()` method (circle: `round(3.14159 * r ** 2, 2)`). Loop over `[Circle(1), Square(3)]` and print each area.",
   "starter": "# class Circle:\n# class Square:\n",
   "sol": "class Circle:\n    def __init__(self, r):\n        self.r = r\n\n    def area(self):\n        return round(3.14159 * self.r ** 2, 2)\n\nclass Square:\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side * self.side\n\nfor shape in [Circle(1), Square(3)]:\n    print(shape.area())",
   "e": "Polymorphism: the loop calls `area()` on every shape without caring which class it is. Each class does its own maths.",
   "out": "3.14\n9"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Inheritance: building on another class",
   "q": "Type exactly what this code prints.",
   "c": "class A:\n    def hello(self):\n        return \"A\"\n\nclass B(A):\n    pass\n\nclass C(A):\n    def hello(self):\n        return \"C\"\n\nprint(B().hello(), C().hello(), isinstance(C(), A))",
   "e": "`B` inherits `hello()` from `A`. `C` overrides it. A `C` object is still an `A`, so `isinstance` is `True`.",
   "ans": "A C True"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Encapsulation: protecting data",
   "q": "Write `BankAccount` with a private `__balance`, a `deposit(amount)` that raises `ValueError(\"Deposit must be positive\")` for 0 or less, and `get_balance()`. Deposit 500, then try to deposit -50 (catch it and print the message), then print the balance.",
   "starter": "# class BankAccount:\n",
   "sol": "class BankAccount:\n    def __init__(self, balance=0):\n        self.__balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError(\"Deposit must be positive\")\n        self.__balance += amount\n\n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount()\nacc.deposit(500)\ntry:\n    acc.deposit(-50)\nexcept ValueError as e:\n    print(e)\nprint(acc.get_balance())",
   "e": "The balance can only change through `deposit()`, which checks the amount first. That is encapsulation.",
   "out": "Deposit must be positive\n500"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Magic methods: __str__ and friends",
   "q": "Give `Product` an `__eq__` method so two products are equal when their prices are equal. Print `Product(\"Pen\", 10) == Product(\"Pencil\", 10)`.",
   "starter": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n",
   "sol": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __eq__(self, other):\n        return self.price == other.price\n\nprint(Product(\"Pen\", 10) == Product(\"Pencil\", 10))",
   "e": "`a == b` calls `a.__eq__(b)`. Without it, two different objects are never equal.",
   "out": "True"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Magic methods: __str__ and friends",
   "q": "This code should print `Item: Pen` once, but it crashes. Fix `__str__`.",
   "c": "class Item:\n    def __init__(self, name):\n        self.name = name\n\n    def __str__(self):\n        print(\"Item:\", self.name)\n\nprint(Item(\"Pen\"))",
   "fixed": "class Item:\n    def __init__(self, name):\n        self.name = name\n\n    def __str__(self):\n        return f\"Item: {self.name}\"\n\nprint(Item(\"Pen\"))",
   "e": "`__str__` must **return** the text. Printing inside it returns `None`, and `print()` then fails.",
   "want": "Item: Pen",
   "got": "Item: Pen\nTypeError: __str__ returned non-string (type NoneType)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Class attributes vs instance attributes",
   "q": "Write `Booking` with a class attribute `count = 0` that goes up by 1 every time a booking is created. Create 3 bookings and print `Booking.count`.",
   "starter": "# class Booking:\n",
   "sol": "class Booking:\n    count = 0\n\n    def __init__(self, guest):\n        self.guest = guest\n        Booking.count += 1\n\nBooking(\"Asha\")\nBooking(\"Ravi\")\nBooking(\"Neha\")\nprint(Booking.count)",
   "e": "A class attribute is shared by all objects. Change it through the class name, `Booking.count`.",
   "out": "3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Class methods and static methods",
   "q": "Write `Booking(guest, amount)` with a class method `from_text(cls, text)` that makes a booking from text like `\"Asha,4500\"` (amount as an int). Create one with `Booking.from_text(\"Asha,4500\")` and print its guest and amount.",
   "starter": "# class Booking:\n",
   "sol": "class Booking:\n    def __init__(self, guest, amount):\n        self.guest = guest\n        self.amount = amount\n\n    @classmethod\n    def from_text(cls, text):\n        guest, amount = text.split(\",\")\n        return cls(guest, int(amount))\n\nb = Booking.from_text(\"Asha,4500\")\nprint(b.guest, b.amount)",
   "e": "A class method gets the class as `cls`, so it can build and return a new object: another way to create one.",
   "out": "Asha 4500"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Encapsulation: protecting data",
   "q": "Type exactly what this code prints.",
   "c": "class Room:\n    def __init__(self, rate):\n        self._rate = rate\n\n    @property\n    def rate(self):\n        return self._rate\n\n    @rate.setter\n    def rate(self, value):\n        if value < 0:\n            raise ValueError(\"Rate cannot be negative\")\n        self._rate = value\n\nr = Room(2000)\nr.rate = 2500\ntry:\n    r.rate = -5\nexcept ValueError as e:\n    print(e)\nprint(r.rate)",
   "e": "The setter runs on every `r.rate = ...`. It accepts 2500 and rejects -5, so the rate stays 2500.",
   "ans": "Rate cannot be negative\n2500"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Inheritance: building on another class",
   "q": "This code should print `Asha 90`, but it crashes. Fix `Student.__init__`.",
   "c": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, marks):\n        self.marks = marks\n\ns = Student(\"Asha\", 90)\nprint(s.name, s.marks)",
   "fixed": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, marks):\n        super().__init__(name)\n        self.marks = marks\n\ns = Student(\"Asha\", 90)\nprint(s.name, s.marks)",
   "e": "When a child class has its own `__init__`, the parent's `__init__` does not run unless you call `super().__init__(...)`.",
   "want": "Asha 90",
   "got": "AttributeError: 'Student' object has no attribute 'name'"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Magic methods: __str__ and friends",
   "q": "Give `Product` a `__lt__` method that compares prices, so `sorted()` works on products. Sort `[Product(\"Pen\", 10), Product(\"Bag\", 450), Product(\"Ink\", 45)]` and print the list of names, cheapest first.",
   "starter": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n",
   "sol": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __lt__(self, other):\n        return self.price < other.price\n\nitems = sorted([Product(\"Pen\", 10), Product(\"Bag\", 450), Product(\"Ink\", 45)])\nprint([p.name for p in items])",
   "e": "`sorted()` compares objects with `<`, which calls `__lt__`. Now your own objects can be sorted.",
   "out": "['Pen', 'Ink', 'Bag']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Polymorphism: same method name, different behaviour",
   "q": "Write `Employee(name, salary)` with `pay()` returning the salary. `Manager(Employee)` also has a bonus and `pay()` returns salary + bonus. `Intern(name, stipend)` has `pay()` returning the stipend. Print the total of `pay()` for `[Employee(\"Asha\", 40000), Manager(\"Ravi\", 60000, 15000), Intern(\"Neha\", 12000)]`.",
   "starter": "# class Employee:\n# class Manager(Employee):\n# class Intern:\n",
   "sol": "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\n    def pay(self):\n        return self.salary\n\nclass Manager(Employee):\n    def __init__(self, name, salary, bonus):\n        super().__init__(name, salary)\n        self.bonus = bonus\n\n    def pay(self):\n        return super().pay() + self.bonus\n\nclass Intern:\n    def __init__(self, name, stipend):\n        self.name = name\n        self.stipend = stipend\n\n    def pay(self):\n        return self.stipend\n\nstaff = [Employee(\"Asha\", 40000), Manager(\"Ravi\", 60000, 15000), Intern(\"Neha\", 12000)]\nprint(sum(person.pay() for person in staff))",
   "e": "Every class answers `pay()` in its own way, so one line can add up the whole payroll.",
   "out": "127000"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Attributes and methods",
   "q": "Write a `Cart` class: `add(item, price, qty=1)` stores a line, `total()` returns the sum of price × qty, and `count()` returns the number of units. Add `(\"Pen\", 10, 3)` and `(\"Bag\", 450)`, then print the total and the count.",
   "starter": "# class Cart:\n",
   "sol": "class Cart:\n    def __init__(self):\n        self.lines = []\n\n    def add(self, item, price, qty=1):\n        self.lines.append((item, price, qty))\n\n    def total(self):\n        return sum(price * qty for item, price, qty in self.lines)\n\n    def count(self):\n        return sum(qty for item, price, qty in self.lines)\n\ncart = Cart()\ncart.add(\"Pen\", 10, 3)\ncart.add(\"Bag\", 450)\nprint(cart.total(), cart.count())",
   "e": "The object keeps its own list of lines, and the methods work on that list.",
   "out": "480 4"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Magic methods: __str__ and friends",
   "q": "Type exactly what this code prints.",
   "c": "class Team:\n    def __init__(self, *names):\n        self.names = list(names)\n\n    def __len__(self):\n        return len(self.names)\n\n    def __contains__(self, name):\n        return name in self.names\n\nt = Team(\"Asha\", \"Ravi\")\nprint(len(t), \"Ravi\" in t, \"Neha\" in t)",
   "e": "`len(t)` calls `__len__` and `x in t` calls `__contains__`, so your object works like a built-in collection.",
   "ans": "2 True False"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Class attributes vs instance attributes",
   "q": "Each basket should have its own items, so this code should print `[]`. Fix it.",
   "c": "class Basket:\n    items = []\n\n    def add(self, x):\n        self.items.append(x)\n\na = Basket()\nb = Basket()\na.add(\"apple\")\nprint(b.items)",
   "fixed": "class Basket:\n    def __init__(self):\n        self.items = []\n\n    def add(self, x):\n        self.items.append(x)\n\na = Basket()\nb = Basket()\na.add(\"apple\")\nprint(b.items)",
   "e": "A list made as a class attribute is shared by every basket. Make a new list per object in `__init__`.",
   "want": "[]",
   "got": "['apple']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Class methods and static methods",
   "q": "Write a class `GST` with a static method `add(amount, rate=18)` that returns the amount plus GST, rounded to 2 decimals. Print `GST.add(1000)` and `GST.add(250, 5)` with one `print()`.",
   "starter": "# class GST:\n",
   "sol": "class GST:\n    @staticmethod\n    def add(amount, rate=18):\n        return round(amount + amount * rate / 100, 2)\n\nprint(GST.add(1000), GST.add(250, 5))",
   "e": "A static method needs no object and no `self`. It is a plain function kept inside the class it belongs to.",
   "out": "1180.0 262.5"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Attributes and methods",
   "q": "`rows = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]`. Write `Student(name, marks)` with `grade()` returning `\"A\"` for 75 or more, else `\"B\"`. Make the objects with a list comprehension and print the names of the A-grade students.",
   "starter": "rows = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]\n",
   "sol": "rows = [(\"Asha\", 82), (\"Ravi\", 67), (\"Neha\", 91)]\n\nclass Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def grade(self):\n        return \"A\" if self.marks >= 75 else \"B\"\n\nstudents = [Student(name, marks) for name, marks in rows]\nprint([s.name for s in students if s.grade() == \"A\"])",
   "e": "Turning rows of data into objects lets every record carry its own logic, like `grade()`.",
   "out": "['Asha', 'Neha']"
  }
 ]
};
