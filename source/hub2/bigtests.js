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
   "got": "TypeError: 'x' is an invalid keyword argument for print()"
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
 ],
 "numpy1": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Ways to create arrays",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.arange(2, 11, 2))",
   "e": "`arange(start, stop, step)` works like `range()`: it stops before 11. NumPy prints arrays without commas.",
   "ans": "[ 2  4  6  8 10]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "1D, 2D and 3D arrays",
   "q": "Make a NumPy array from `[12, 15, 9, 20]`. Print it, then print its shape.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\na = np.array([12, 15, 9, 20])\nprint(a)\nprint(a.shape)",
   "e": "`np.array()` turns a list into an array. A 1D array of 4 items has the shape `(4,)`.",
   "out": "[12 15  9 20]\n(4,)"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Ways to create arrays",
   "q": "Make a 2 x 3 array of zeros with `np.zeros` and print it.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nprint(np.zeros((2, 3)))",
   "e": "The shape goes in as a tuple, `(rows, columns)`. `zeros` makes floats, so they print as `0.`.",
   "out": "[[0. 0. 0.]\n [0. 0. 0.]]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Ways to create arrays",
   "q": "Print 5 evenly spaced numbers from 0 to 100 (both included) with `np.linspace`.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nprint(np.linspace(0, 100, 5))",
   "e": "`linspace(start, stop, how_many)` includes the stop value and spaces the numbers evenly.",
   "out": "[  0.  25.  50.  75. 100.]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Array properties",
   "q": "`sales = np.array([[100, 200, 150], [120, 180, 200]])`. Print its shape, size and number of dimensions with one `print()`.",
   "starter": "import numpy as np\nsales = np.array([[100, 200, 150], [120, 180, 200]])\n",
   "sol": "import numpy as np\nsales = np.array([[100, 200, 150], [120, 180, 200]])\nprint(sales.shape, sales.size, sales.ndim)",
   "e": "`shape` is (rows, columns), `size` counts every value, and `ndim` is the number of dimensions.",
   "out": "(2, 3) 6 2"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Installing and importing",
   "q": "This code should print `[1 2 3]`, but it crashes. Fix the import.",
   "c": "import numpy\na = np.array([1, 2, 3])\nprint(a)",
   "fixed": "import numpy as np\na = np.array([1, 2, 3])\nprint(a)",
   "e": "`np` only exists if you import NumPy with that short name: `import numpy as np`.",
   "want": "[1 2 3]",
   "got": "NameError: name 'np' is not defined"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "One array, one data type",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.array([1, 2.5, 3]))",
   "e": "An array has one data type. One float turns every value into a float, so 1 prints as `1.`.",
   "ans": "[1.  2.5 3. ]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Reshaping",
   "q": "This code should print the 6 numbers as 3 rows of 2, but it crashes. Fix the reshape.",
   "c": "import numpy as np\na = np.arange(1, 7)\nprint(a.reshape(4, 2))",
   "fixed": "import numpy as np\na = np.arange(1, 7)\nprint(a.reshape(3, 2))",
   "e": "A reshape must keep the number of values: 6 values fit 3 x 2, not 4 x 2 (which needs 8).",
   "want": "[[1 2]\n [3 4]\n [5 6]]",
   "got": "ValueError: cannot reshape array of size 6 into shape (4,2)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Reshaping",
   "q": "`daily = np.arange(1, 15)` (14 days). Reshape it into 2 weeks x 7 days and print the result.",
   "starter": "import numpy as np\ndaily = np.arange(1, 15)\n",
   "sol": "import numpy as np\ndaily = np.arange(1, 15)\nprint(daily.reshape(2, 7))",
   "e": "14 values fit exactly into 2 rows of 7. Each row is one week.",
   "out": "[[ 1  2  3  4  5  6  7]\n [ 8  9 10 11 12 13 14]]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Combining arrays",
   "q": "`q1 = np.array([100, 120])` and `q2 = np.array([130, 150])`. Print them joined into one row, then stacked as two rows.",
   "starter": "import numpy as np\nq1 = np.array([100, 120])\nq2 = np.array([130, 150])\n",
   "sol": "import numpy as np\nq1 = np.array([100, 120])\nq2 = np.array([130, 150])\nprint(np.concatenate([q1, q2]))\nprint(np.vstack([q1, q2]))",
   "e": "`concatenate` puts arrays end to end. `vstack` puts them on top of each other as rows.",
   "out": "[100 120 130 150]\n[[100 120]\n [130 150]]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "One array, one data type",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.array([3.7, -1.2, 9.9]).astype(int))",
   "e": "`astype(int)` cuts off the decimal part (towards 0). It does not round, so 3.7 becomes 3 and -1.2 becomes -1.",
   "ans": "[ 3 -1  9]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "1D, 2D and 3D arrays",
   "q": "Make a 3D array with `np.arange(12).reshape(2, 2, 3)`. Print its number of dimensions, then the value at position `[1, 0, 2]`.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\ncube = np.arange(12).reshape(2, 2, 3)\nprint(cube.ndim)\nprint(cube[1, 0, 2])",
   "e": "A 3D array has blocks, rows and columns. Block 1, row 0, column 2 holds the value 8.",
   "out": "3\n8"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Ways to create arrays",
   "q": "Print a 3 x 3 identity matrix with `np.eye`, then a 2 x 2 array where every value is 7, with `np.full`.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nprint(np.eye(3))\nprint(np.full((2, 2), 7))",
   "e": "`eye` puts 1s on the diagonal (as floats). `full` fills every place with the value you give.",
   "out": "[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]\n[[7 7]\n [7 7]]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "One array, one data type",
   "q": "This code should print the total `600`, but it fails. Fix the array.",
   "c": "import numpy as np\nprices = np.array([100, \"200\", 300])\nprint(prices.sum())",
   "fixed": "import numpy as np\nprices = np.array([100, 200, 300])\nprint(prices.sum())",
   "e": "One text value turns the whole array into text, and text cannot be added up. Keep the numbers as numbers.",
   "want": "600",
   "got": "TypeError: the resolved dtypes are not compatible with add.reduce. Resolved (dtype('<U21'), dtype('<U21'), dtype('<U42'))"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Array properties",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nm = np.ones((3, 4))\nprint(m.shape, m.size, m.ndim, len(m))",
   "e": "3 rows of 4 values: 12 in total, 2 dimensions. `len()` of a 2D array counts its rows.",
   "ans": "(3, 4) 12 2 3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Reshaping",
   "q": "`grid = np.array([[1, 2], [3, 4], [5, 6]])`. Print it flattened into one row, then reshaped into 2 rows and 3 columns.",
   "starter": "import numpy as np\ngrid = np.array([[1, 2], [3, 4], [5, 6]])\n",
   "sol": "import numpy as np\ngrid = np.array([[1, 2], [3, 4], [5, 6]])\nprint(grid.flatten())\nprint(grid.reshape(2, 3))",
   "e": "`flatten()` gives a 1D copy. `reshape(2, 3)` fills the new shape row by row with the same 6 values.",
   "out": "[1 2 3 4 5 6]\n[[1 2 3]\n [4 5 6]]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "What is NumPy?",
   "q": "Turn the list `[31.5, 33, 29.8]` of temperatures into a NumPy array. Print the array and its type with one `print()`.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\ntemps = np.array([31.5, 33, 29.8])\nprint(temps, type(temps))",
   "e": "A NumPy array is an `ndarray`: a fast block of numbers of one type.",
   "out": "[31.5 33.  29.8] <class 'numpy.ndarray'>"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Combining arrays",
   "q": "This code should print `[1 2 3 4]`, but it crashes. Fix it.",
   "c": "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.concatenate(a, b))",
   "fixed": "import numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nprint(np.concatenate([a, b]))",
   "e": "`concatenate` takes ONE argument: a list of the arrays to join.",
   "want": "[1 2 3 4]",
   "got": "TypeError: only integer scalar arrays can be converted to a scalar index"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Reshaping",
   "q": "`sales = np.arange(100, 1300, 100)` holds 12 months of sales. Reshape it into 4 quarters x 3 months, then print the new shape and the array.",
   "starter": "import numpy as np\nsales = np.arange(100, 1300, 100)\n",
   "sol": "import numpy as np\nsales = np.arange(100, 1300, 100)\nquarters = sales.reshape(4, 3)\nprint(quarters.shape)\nprint(quarters)",
   "e": "12 monthly values become a 4 x 3 table: one row per quarter, one column per month.",
   "out": "(4, 3)\n[[ 100  200  300]\n [ 400  500  600]\n [ 700  800  900]\n [1000 1100 1200]]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Combining arrays",
   "q": "Three stores sold `a = np.array([5, 7, 6])`, `b = np.array([8, 4, 9])` and `c = np.array([3, 6, 2])` over 3 days. Stack them into one table (one row per store) and print its shape and the table.",
   "starter": "import numpy as np\na = np.array([5, 7, 6])\nb = np.array([8, 4, 9])\nc = np.array([3, 6, 2])\n",
   "sol": "import numpy as np\na = np.array([5, 7, 6])\nb = np.array([8, 4, 9])\nc = np.array([3, 6, 2])\ntable = np.vstack([a, b, c])\nprint(table.shape)\nprint(table)",
   "e": "`vstack` turns several 1D arrays of the same length into the rows of one 2D table.",
   "out": "(3, 3)\n[[5 7 6]\n [8 4 9]\n [3 6 2]]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "One array, one data type",
   "q": "`raw = np.array([1, 2.5, \"3\"])` mixes types, so everything became text. Convert it to floats with `astype(float)` and print it.",
   "starter": "import numpy as np\nraw = np.array([1, 2.5, \"3\"])\n",
   "sol": "import numpy as np\nraw = np.array([1, 2.5, \"3\"])\nprint(raw.astype(float))",
   "e": "Text that looks like numbers can be converted back with `astype(float)`.",
   "out": "[1.  2.5 3. ]"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Ways to create arrays",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.linspace(1, 2, 3), np.arange(3, 0, -1))",
   "e": "`linspace` gives floats (1, 1.5 and 2). `arange` with a negative step counts down and stops before 0.",
   "ans": "[1.  1.5 2. ] [3 2 1]"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Array properties",
   "q": "This code should print `(2, 3)`, but it crashes. Fix it.",
   "c": "import numpy as np\na = np.zeros((2, 3))\nprint(a.shape())",
   "fixed": "import numpy as np\na = np.zeros((2, 3))\nprint(a.shape)",
   "e": "`shape` is a property, not a method: no brackets after it.",
   "want": "(2, 3)",
   "got": "TypeError: 'tuple' object is not callable"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Ways to create arrays",
   "q": "Make `prices = np.full(5, 99.5)` and print it. Then print the same array converted to whole numbers with `astype(int)`.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nprices = np.full(5, 99.5)\nprint(prices)\nprint(prices.astype(int))",
   "e": "`full` makes an array of one repeated value. `astype(int)` cuts 99.5 down to 99.",
   "out": "[99.5 99.5 99.5 99.5 99.5]\n[99 99 99 99 99]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Reshaping",
   "q": "Make a 2 x 3 matrix with `np.arange(1, 7).reshape(2, 3)`. Print it flattened, then its number of dimensions before and after flattening, with one `print()` for the two numbers.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nm = np.arange(1, 7).reshape(2, 3)\nflat = m.flatten()\nprint(flat)\nprint(m.ndim, flat.ndim)",
   "e": "Flattening keeps every value but turns a 2D table into a 1D row.",
   "out": "[1 2 3 4 5 6]\n2 1"
  }
 ],
 "numpy2": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Vectorisation: maths on the whole array",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprices = np.array([10, 20, 30])\nprint(prices * 2, prices + 5)",
   "e": "Maths on an array is done on every value at once: no loop needed.",
   "ans": "[20 40 60] [15 25 35]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Vectorisation: maths on the whole array",
   "q": "`price = np.array([120, 45, 80])` and `qty = np.array([2, 10, 3])`. Print the revenue of each item, then the total revenue.",
   "starter": "import numpy as np\nprice = np.array([120, 45, 80])\nqty = np.array([2, 10, 3])\n",
   "sol": "import numpy as np\nprice = np.array([120, 45, 80])\nqty = np.array([2, 10, 3])\nrevenue = price * qty\nprint(revenue)\nprint(revenue.sum())",
   "e": "Two arrays of the same length are multiplied position by position.",
   "out": "[240 450 240]\n930"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Statistics",
   "q": "`sales = np.array([12000, 15000, 18000, 14000])`. Print the mean, the highest and the lowest value with one `print()`.",
   "starter": "import numpy as np\nsales = np.array([12000, 15000, 18000, 14000])\n",
   "sol": "import numpy as np\nsales = np.array([12000, 15000, 18000, 14000])\nprint(sales.mean(), sales.max(), sales.min())",
   "e": "Arrays have built-in statistics methods. `mean()` always gives a float.",
   "out": "14750.0 18000 12000"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Indexing and slicing",
   "q": "`rev = np.array([50000, 65000, 72000, 58000])`. Print the first value, the last value, and the middle two (a slice), with one `print()`.",
   "starter": "import numpy as np\nrev = np.array([50000, 65000, 72000, 58000])\n",
   "sol": "import numpy as np\nrev = np.array([50000, 65000, 72000, 58000])\nprint(rev[0], rev[-1], rev[1:3])",
   "e": "Indexing and slicing work like lists. A slice of an array is an array.",
   "out": "50000 58000 [65000 72000]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Filtering with boolean masks",
   "q": "`salaries = np.array([45000, 55000, 38000, 72000])`. Print the salaries above 50000, using a boolean mask.",
   "starter": "import numpy as np\nsalaries = np.array([45000, 55000, 38000, 72000])\n",
   "sol": "import numpy as np\nsalaries = np.array([45000, 55000, 38000, 72000])\nprint(salaries[salaries > 50000])",
   "e": "`salaries > 50000` is an array of `True`/`False`. Putting it inside `[ ]` keeps only the `True` positions.",
   "out": "[55000 72000]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Filtering with boolean masks",
   "q": "This code should print `[45000 55000]`, but it crashes. Fix the mask.",
   "c": "import numpy as np\nsal = np.array([45000, 55000, 38000])\nprint(sal[sal > 40000 and sal < 60000])",
   "fixed": "import numpy as np\nsal = np.array([45000, 55000, 38000])\nprint(sal[(sal > 40000) & (sal < 60000)])",
   "e": "For arrays, use `&` (and) and `|` (or), with brackets around each comparison. `and` only works on single True/False values.",
   "want": "[45000 55000]",
   "got": "ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "axis: the most confusing argument in NumPy",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nm = np.array([[1, 2], [3, 4], [5, 6]])\nprint(m.sum(axis=0), m.sum(axis=1))",
   "e": "`axis=0` goes down the rows, giving one total per column. `axis=1` goes across, giving one total per row.",
   "ans": "[ 9 12] [ 3  7 11]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Vectorisation: maths on the whole array",
   "q": "This code should double every price and print `[20 40 60]`. Fix it.",
   "c": "prices = [10, 20, 30]\nprint(prices * 2)",
   "fixed": "import numpy as np\nprices = np.array([10, 20, 30])\nprint(prices * 2)",
   "e": "A list times 2 repeats the list. A NumPy array times 2 doubles every value.",
   "want": "[20 40 60]",
   "got": "[10, 20, 30, 10, 20, 30]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Broadcasting",
   "q": "`m = np.array([[1, 2, 3], [4, 5, 6]])`. Add `[10, 20, 30]` to every row using broadcasting, and print the result.",
   "starter": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\n",
   "sol": "import numpy as np\nm = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m + np.array([10, 20, 30]))",
   "e": "A row with the same number of columns is \"stretched\" over every row of the table.",
   "out": "[[11 22 33]\n [14 25 36]]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "axis: the most confusing argument in NumPy",
   "q": "Rows are months and columns are products. Print the total per month, then the total per product.",
   "starter": "import numpy as np\nsales = np.array([[100, 150, 200],\n                  [120, 140, 180],\n                  [110, 160, 220]])\n",
   "sol": "import numpy as np\nsales = np.array([[100, 150, 200],\n                  [120, 140, 180],\n                  [110, 160, 220]])\nprint(sales.sum(axis=1))\nprint(sales.sum(axis=0))",
   "e": "One total per row (month) is `axis=1`. One total per column (product) is `axis=0`.",
   "out": "[450 440 490]\n[330 450 600]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Statistics",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\na = np.array([2, 4, 4, 4, 5, 5, 7, 9])\nprint(a.mean(), a.std(), np.median(a))",
   "e": "The mean is 40 / 8 = 5.0. The standard deviation of this classic example is exactly 2.0. The median averages the two middle values, 4 and 5.",
   "ans": "5.0 2.0 4.5"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Filtering with boolean masks",
   "q": "`marks = np.array([45, 82, 30, 67])`. Use `np.where` to label each mark `Pass` (35 or more) or `Fail`, and print the labels.",
   "starter": "import numpy as np\nmarks = np.array([45, 82, 30, 67])\n",
   "sol": "import numpy as np\nmarks = np.array([45, 82, 30, 67])\nprint(np.where(marks >= 35, \"Pass\", \"Fail\"))",
   "e": "`np.where(condition, if_true, if_false)` is a vectorised if/else.",
   "out": "['Pass' 'Pass' 'Fail' 'Pass']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Indexing and slicing",
   "q": "Rows are January to March, columns are products 1 to 3. Print the February row, then the column of product 3, then the March value of product 2.",
   "starter": "import numpy as np\nsales = np.array([[100, 150, 200],\n                  [120, 140, 180],\n                  [110, 160, 220]])\n",
   "sol": "import numpy as np\nsales = np.array([[100, 150, 200],\n                  [120, 140, 180],\n                  [110, 160, 220]])\nprint(sales[1])\nprint(sales[:, 2])\nprint(sales[2, 1])",
   "e": "`[row, column]`. A `:` means \"all\", so `[:, 2]` is the whole third column.",
   "out": "[120 140 180]\n[200 180 220]\n160"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "axis: the most confusing argument in NumPy",
   "q": "This code should print the total per month (per row): `[250 260]`. Fix it.",
   "c": "import numpy as np\nm = np.array([[100, 150], [120, 140]])\nprint(m.sum(axis=0))",
   "fixed": "import numpy as np\nm = np.array([[100, 150], [120, 140]])\nprint(m.sum(axis=1))",
   "e": "`axis=0` adds up each column. One total per row needs `axis=1`.",
   "want": "[250 260]",
   "got": "[220 290]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Views vs copies",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nx = np.array([1, 2, 3, 4])\npart = x[1:3]\npart[0] = 99\nprint(x)",
   "e": "A slice of an array is a **view** of the same data, so changing it changes the original too.",
   "ans": "[ 1 99  3  4]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Sorting and unique values",
   "q": "`ratings = np.array([5, 3, 5, 4, 3, 5])`. Print the different ratings and how many times each one appears, using `np.unique` with `return_counts=True`.",
   "starter": "import numpy as np\nratings = np.array([5, 3, 5, 4, 3, 5])\n",
   "sol": "import numpy as np\nratings = np.array([5, 3, 5, 4, 3, 5])\nvalues, counts = np.unique(ratings, return_counts=True)\nprint(values, counts)",
   "e": "`np.unique` gives the sorted different values, and with `return_counts=True` also how often each appears.",
   "out": "[3 4 5] [2 1 3]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Filtering with boolean masks",
   "q": "`temps = np.array([31, 35, 29, 38, 33])`. Print how many days were above 32, and their average rounded to 2 decimals.",
   "starter": "import numpy as np\ntemps = np.array([31, 35, 29, 38, 33])\n",
   "sol": "import numpy as np\ntemps = np.array([31, 35, 29, 38, 33])\nhot = temps[temps > 32]\nprint(len(hot), round(hot.mean(), 2))",
   "e": "Filter first with a mask, then use the statistics on the filtered array.",
   "out": "3 35.33"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Views vs copies",
   "q": "This code should leave `y` unchanged and print `[1 2 3 4]`. Fix it.",
   "c": "import numpy as np\ny = np.array([1, 2, 3, 4])\nsafe = y[1:3]\nsafe[0] = 0\nprint(y)",
   "fixed": "import numpy as np\ny = np.array([1, 2, 3, 4])\nsafe = y[1:3].copy()\nsafe[0] = 0\nprint(y)",
   "e": "A slice is a view. `.copy()` makes independent data, so changes do not reach the original.",
   "want": "[1 2 3 4]",
   "got": "[1 0 3 4]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Filtering with boolean masks",
   "q": "`price = np.array([499, 1299, 299, 899])` and `qty = np.array([10, 3, 25, 6])`. Print the position of the product with the highest revenue (`argmax`), then the share of total revenue that comes from products with above-average revenue, as a percent with 1 decimal.",
   "starter": "import numpy as np\nprice = np.array([499, 1299, 299, 899])\nqty = np.array([10, 3, 25, 6])\n",
   "sol": "import numpy as np\nprice = np.array([499, 1299, 299, 899])\nqty = np.array([10, 3, 25, 6])\nrevenue = price * qty\nprint(revenue.argmax())\nbig = revenue[revenue > revenue.mean()]\nprint(f\"{big.sum() / revenue.sum() * 100:.1f}%\")",
   "e": "Vectorise (`price * qty`), then summarise (`argmax`, `mean`), then filter with a mask: three NumPy steps in a few lines.",
   "out": "2\n34.4%"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "axis: the most confusing argument in NumPy",
   "q": "Occupancy in % for 3 hotels (rows) over 4 weeks (columns): `occ = np.array([[60, 72, 75, 80], [55, 65, 70, 90], [70, 68, 74, 76]])`. Print each hotel's average (rounded to 2 decimals), then the number of the best week (1 to 4) by average occupancy.",
   "starter": "import numpy as np\nocc = np.array([[60, 72, 75, 80], [55, 65, 70, 90], [70, 68, 74, 76]])\n",
   "sol": "import numpy as np\nocc = np.array([[60, 72, 75, 80], [55, 65, 70, 90], [70, 68, 74, 76]])\nprint(occ.mean(axis=1).round(2))\nprint(occ.mean(axis=0).argmax() + 1)",
   "e": "`axis=1` averages each hotel across weeks; `axis=0` averages each week across hotels. `argmax` counts from 0, so add 1.",
   "out": "[71.75 70.   72.  ]\n4"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Broadcasting",
   "q": "Prices of 3 products: `prices = np.array([100, 250, 400])`. Make a table with one row per discount level, using a column of factors `[[1.0], [0.9], [0.8]]` (no discount, 10% off, 20% off) and broadcasting. Print the table.",
   "starter": "import numpy as np\nprices = np.array([100, 250, 400])\n",
   "sol": "import numpy as np\nprices = np.array([100, 250, 400])\nfactors = np.array([[1.0], [0.9], [0.8]])\nprint(prices * factors)",
   "e": "A column (3 x 1) times a row (3) broadcasts into a 3 x 3 table: every factor times every price.",
   "out": "[[100. 250. 400.]\n [ 90. 225. 360.]\n [ 80. 200. 320.]]"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Sorting and unique values",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nscores = np.array([70, 95, 80])\nnames = np.array([\"Asha\", \"Ravi\", \"Neha\"])\nprint(names[np.argsort(scores)][::-1])",
   "e": "`argsort` gives the positions that would sort the scores (lowest first). Using them on `names` and reversing gives the names from highest to lowest score.",
   "ans": "['Ravi' 'Neha' 'Asha']"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Filtering with boolean masks",
   "q": "This code should print the values below 10 or above 20: `[ 5 25]`. Fix the mask.",
   "c": "import numpy as np\na = np.array([5, 15, 25])\nprint(a[a < 10 | a > 20])",
   "fixed": "import numpy as np\na = np.array([5, 15, 25])\nprint(a[(a < 10) | (a > 20)])",
   "e": "`|` runs before `<` and `>`, so without brackets Python tries `10 | a` first. Put brackets around each comparison.",
   "want": "[ 5 25]",
   "got": "ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Filtering with boolean masks",
   "q": "`sal = np.array([45000, 55000, 38000, 72000, 41000, 65000])`. Cap every salary at 60000 with `np.where`. Print the capped array and its mean rounded to 2 decimals.",
   "starter": "import numpy as np\nsal = np.array([45000, 55000, 38000, 72000, 41000, 65000])\n",
   "sol": "import numpy as np\nsal = np.array([45000, 55000, 38000, 72000, 41000, 65000])\ncapped = np.where(sal > 60000, 60000, sal)\nprint(capped)\nprint(round(capped.mean(), 2))",
   "e": "`np.where` can replace values: where the test is `True` use 60000, otherwise keep the salary.",
   "out": "[45000 55000 38000 60000 41000 60000]\n49833.33"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Statistics",
   "q": "`scores = np.array([40, 55, 70, 85, 100])`. Scale them to the range 0 to 1 with `(x - min) / (max - min)`, and print the result.",
   "starter": "import numpy as np\nscores = np.array([40, 55, 70, 85, 100])\n",
   "sol": "import numpy as np\nscores = np.array([40, 55, 70, 85, 100])\nprint((scores - scores.min()) / (scores.max() - scores.min()))",
   "e": "Min-max scaling is one vectorised line: the lowest becomes 0, the highest becomes 1.",
   "out": "[0.   0.25 0.5  0.75 1.  ]"
  }
 ],
 "numpy3": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Looping over arrays",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nfor row in m:\n    print(row.sum())",
   "e": "Looping over a 2D array gives one row at a time, and each row is itself an array.",
   "ans": "3\n7"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Splitting arrays",
   "q": "Split `np.arange(1, 10)` into 3 equal parts with `np.split`, and print each part on its own line.",
   "starter": "import numpy as np\n",
   "sol": "import numpy as np\nfor part in np.split(np.arange(1, 10), 3):\n    print(part)",
   "e": "`np.split(a, 3)` cuts the array into 3 equal pieces. 9 values make 3 pieces of 3.",
   "out": "[1 2 3]\n[4 5 6]\n[7 8 9]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Searching arrays",
   "q": "`a = np.array([4, 7, 4, 9, 4])`. Print the positions of every 4, using `np.where`.",
   "starter": "import numpy as np\na = np.array([4, 7, 4, 9, 4])\n",
   "sol": "import numpy as np\na = np.array([4, 7, 4, 9, 4])\nprint(np.where(a == 4)[0])",
   "e": "`np.where(condition)` gives a tuple with one array of positions per dimension. `[0]` takes the positions.",
   "out": "[0 2 4]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "`a = np.array([10, 20, 30])` and `b = np.array([3, 4, 5])`. Print `np.add(a, b)` and `np.mod(a, b)` with one `print()`.",
   "starter": "import numpy as np\na = np.array([10, 20, 30])\nb = np.array([3, 4, 5])\n",
   "sol": "import numpy as np\na = np.array([10, 20, 30])\nb = np.array([3, 4, 5])\nprint(np.add(a, b), np.mod(a, b))",
   "e": "ufuncs work value by value, like `+` and `%` on arrays.",
   "out": "[13 24 35] [1 0 0]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "`sales = np.array([120, 80, 150])`. Print the running total with `np.cumsum`.",
   "starter": "import numpy as np\nsales = np.array([120, 80, 150])\n",
   "sol": "import numpy as np\nsales = np.array([120, 80, 150])\nprint(np.cumsum(sales))",
   "e": "`cumsum` adds up as it goes: each value is the total so far.",
   "out": "[120 200 350]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Splitting arrays",
   "q": "This code should split 7 numbers into 3 parts (3, 2 and 2 values), but it crashes. Fix it.",
   "c": "import numpy as np\nfor part in np.split(np.arange(7), 3):\n    print(part)",
   "fixed": "import numpy as np\nfor part in np.array_split(np.arange(7), 3):\n    print(part)",
   "e": "`np.split` needs parts of exactly equal size. `np.array_split` allows unequal parts.",
   "want": "[0 1 2]\n[3 4]\n[5 6]",
   "got": "ValueError: array split does not result in an equal division"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.around([0.5, 1.5, 2.5, 3.5]))",
   "e": "NumPy rounds halves to the nearest even number, like Python's `round()`: 0, 2, 2, 4.",
   "ans": "[0. 2. 2. 4.]"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Searching arrays",
   "q": "This code should print how many 3s there are: `2`. Fix it.",
   "c": "import numpy as np\na = np.array([3, 8, 3])\nprint(len(np.where(a == 3)))",
   "fixed": "import numpy as np\na = np.array([3, 8, 3])\nprint(len(np.where(a == 3)[0]))",
   "e": "`np.where` returns a tuple (one item per dimension), so its length is 1. Count the positions inside it with `[0]`.",
   "want": "2",
   "got": "1"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Looping over arrays",
   "q": "`m = np.array([[10, 20], [30, 40]])`. Print each position and its value with `np.ndenumerate`, one per line.",
   "starter": "import numpy as np\nm = np.array([[10, 20], [30, 40]])\n",
   "sol": "import numpy as np\nm = np.array([[10, 20], [30, 40]])\nfor pos, value in np.ndenumerate(m):\n    print(pos, value)",
   "e": "`ndenumerate` is `enumerate` for arrays: it gives the (row, column) position with each value.",
   "out": "(0, 0) 10\n(0, 1) 20\n(1, 0) 30\n(1, 1) 40"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Searching arrays",
   "q": "Price slabs start at `slabs = np.array([100, 250, 400, 900])`. For the new prices `[50, 300, 1000]`, print the positions where they would be inserted to keep the order, using `np.searchsorted`.",
   "starter": "import numpy as np\nslabs = np.array([100, 250, 400, 900])\n",
   "sol": "import numpy as np\nslabs = np.array([100, 250, 400, 900])\nprint(np.searchsorted(slabs, [50, 300, 1000]))",
   "e": "`searchsorted` finds where each value fits in a sorted array: before 100, between 250 and 400, and after 900.",
   "out": "[0 2 4]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Random numbers",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nnp.random.seed(42)\nrolls = np.random.randint(1, 7, size=500)\nprint(rolls.min(), rolls.max(), len(rolls))",
   "e": "`randint(1, 7)` gives 1 to 6 (7 is not included). With 500 rolls, both 1 and 6 surely appear.",
   "ans": "1 6 500"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Random numbers",
   "q": "`a = np.array([1, 2, 3, 4, 5])`. Make a shuffled copy with `np.random.permutation`. Print whether the sorted copy equals `a` (use `np.array_equal`), then print `a` itself.",
   "starter": "import numpy as np\na = np.array([1, 2, 3, 4, 5])\n",
   "sol": "import numpy as np\na = np.array([1, 2, 3, 4, 5])\np = np.random.permutation(a)\nprint(np.array_equal(np.sort(p), a))\nprint(a)",
   "e": "`permutation` returns a new shuffled array and leaves `a` alone. Checking the sorted copy avoids printing random values.",
   "out": "True\n[1 2 3 4 5]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "`readings = np.array([100, 120, 90, 130])`. Print the day-to-day changes with `np.diff`, then the biggest rise.",
   "starter": "import numpy as np\nreadings = np.array([100, 120, 90, 130])\n",
   "sol": "import numpy as np\nreadings = np.array([100, 120, 90, 130])\nchanges = np.diff(readings)\nprint(changes)\nprint(changes.max())",
   "e": "`np.diff` subtracts each value from the next one, so the result has one value fewer.",
   "out": "[ 20 -30  40]\n40"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "This code should print the greatest common divisor of 12 and 18, `6`. Fix it.",
   "c": "import numpy as np\nprint(np.lcm(12, 18))",
   "fixed": "import numpy as np\nprint(np.gcd(12, 18))",
   "e": "`lcm` is the lowest common multiple (36). The greatest common divisor is `gcd`.",
   "want": "6",
   "got": "36"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Splitting arrays",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint([len(p) for p in np.array_split(np.arange(11), 4)])",
   "e": "11 values into 4 parts: the first parts get one extra value each, so 3, 3, 3 and 2.",
   "ans": "[3, 3, 3, 2]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Random data distributions",
   "q": "After `np.random.seed(3)`, make 100000 values from a normal distribution with mean 500 and standard deviation 50. Print the mean and the standard deviation, both rounded to whole numbers.",
   "starter": "import numpy as np\nnp.random.seed(3)\n",
   "sol": "import numpy as np\nnp.random.seed(3)\nvalues = np.random.normal(loc=500, scale=50, size=100000)\nprint(round(values.mean()), round(values.std()))",
   "e": "With many values, the sample mean and spread come very close to the settings, so the rounded results are stable.",
   "out": "500 50"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "`a = np.array([1, 2, 3, 4])` and `b = np.array([3, 4, 5])`. Print the values in both, the values only in `a`, and all values, using `np.intersect1d`, `np.setdiff1d` and `np.union1d`.",
   "starter": "import numpy as np\na = np.array([1, 2, 3, 4])\nb = np.array([3, 4, 5])\n",
   "sol": "import numpy as np\na = np.array([1, 2, 3, 4])\nb = np.array([3, 4, 5])\nprint(np.intersect1d(a, b), np.setdiff1d(a, b), np.union1d(a, b))",
   "e": "These are set operations for arrays, and the results come back sorted.",
   "out": "[3 4] [1 2] [1 2 3 4 5]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Looping over arrays",
   "q": "This code should print every value on one line: `1 2 3 4`. Fix the loop.",
   "c": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nfor x in m:\n    print(x, end=\" \")",
   "fixed": "import numpy as np\nm = np.array([[1, 2], [3, 4]])\nfor x in np.nditer(m):\n    print(x, end=\" \")",
   "e": "A plain loop over a 2D array gives rows. `np.nditer` visits every single value.",
   "want": "1 2 3 4 ",
   "got": "[1 2] [3 4] "
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Splitting arrays",
   "q": "`days = np.arange(1, 15) * 100` holds 14 days of sales. Split it into 2 weeks with `np.split`, and print a list of the two weekly totals as plain ints.",
   "starter": "import numpy as np\ndays = np.arange(1, 15) * 100\n",
   "sol": "import numpy as np\ndays = np.arange(1, 15) * 100\nprint([int(week.sum()) for week in np.split(days, 2)])",
   "e": "Split first, then summarise each part. `int()` turns NumPy numbers into plain Python ints for a clean list.",
   "out": "[2800, 7700]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Random data distributions",
   "q": "After `np.random.seed(3)`, simulate 100000 days of bookings with `np.random.binomial(n=20, p=0.25, size=100000)`. Print the mean rounded to a whole number, whether every value is 0 or more, and whether every value is 20 or less.",
   "starter": "import numpy as np\nnp.random.seed(3)\n",
   "sol": "import numpy as np\nnp.random.seed(3)\nbookings = np.random.binomial(n=20, p=0.25, size=100000)\nprint(round(bookings.mean()), bookings.min() >= 0, bookings.max() <= 20)",
   "e": "A binomial count is between 0 and n, and its mean is n × p = 5. Check properties, not exact random values.",
   "out": "5 True True"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Searching arrays",
   "q": "`rates = np.array([1200, 3400, 1200, 5600, 3400])`. Print the positions of the rate 3400, then how many rates are below 2000.",
   "starter": "import numpy as np\nrates = np.array([1200, 3400, 1200, 5600, 3400])\n",
   "sol": "import numpy as np\nrates = np.array([1200, 3400, 1200, 5600, 3400])\nprint(np.where(rates == 3400)[0])\nprint(len(rates[rates < 2000]))",
   "e": "`np.where` finds positions; a mask finds the matching values, and `len()` counts them.",
   "out": "[1 4]\n2"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.floor([-1.5, 2.7]), np.ceil([-1.5, 2.7]), np.trunc([-1.5, 2.7]))",
   "e": "`floor` always goes down, `ceil` always goes up, and `trunc` just cuts off the decimals (towards 0).",
   "ans": "[-2.  2.] [-1.  3.] [-1.  2.]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Random numbers",
   "q": "After `np.random.seed(1)`, pick 10000 days with `np.random.choice([\"late\", \"on time\"], p=[0.2, 0.8], size=10000)`. Print the share of on-time days, rounded to 1 decimal.",
   "starter": "import numpy as np\nnp.random.seed(1)\n",
   "sol": "import numpy as np\nnp.random.seed(1)\ndays = np.random.choice([\"late\", \"on time\"], p=[0.2, 0.8], size=10000)\nprint(round(np.mean(days == \"on time\"), 1))",
   "e": "`days == \"on time\"` is an array of True/False, and its mean is the share of True values: about 0.8.",
   "out": "0.8"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Searching arrays",
   "q": "`np.searchsorted` should say where 300 fits among these prices in sorted order: `2`. Fix it.",
   "c": "import numpy as np\nprices = np.array([100, 900, 250, 400])\nprint(np.searchsorted(prices, 300))",
   "fixed": "import numpy as np\nprices = np.array([100, 900, 250, 400])\nprint(np.searchsorted(np.sort(prices), 300))",
   "e": "`searchsorted` only works on a sorted array. Sort the prices first.",
   "want": "2",
   "got": "3"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "ufuncs: NumPy's fast maths functions",
   "q": "Write a function `slab(amount)` that returns `\"High\"` for 1000 or more and `\"Low\"` otherwise. Turn it into a ufunc with `np.frompyfunc(slab, 1, 1)` and print the result for `np.array([500, 1500, 1000])`.",
   "starter": "import numpy as np\n# def slab(amount):\n",
   "sol": "import numpy as np\ndef slab(amount):\n    return \"High\" if amount >= 1000 else \"Low\"\n\nslab_u = np.frompyfunc(slab, 1, 1)\nprint(slab_u(np.array([500, 1500, 1000])))",
   "e": "`frompyfunc` wraps your own Python function so it runs on every value of an array.",
   "out": "['Low' 'High' 'High']"
  }
 ],
 "pandas1": [
  {
   "lv": 1,
   "ty": "type",
   "sec": "Series: one labelled column",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([5, 10, 15])\nprint(s.sum(), s.max())",
   "e": "A Series adds up and finds its maximum like a NumPy array: 5 + 10 + 15 = 30, and the biggest is 15.",
   "ans": "30 15"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Series: one labelled column",
   "q": "Make a Series of the prices `[250, 400, 150]` with the labels `[\"tea\", \"coffee\", \"juice\"]`, and print the price of `coffee`.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nmenu = pd.Series([250, 400, 150], index=[\"tea\", \"coffee\", \"juice\"])\nprint(menu[\"coffee\"])",
   "e": "`index=` gives the labels; then you pick a value by its label, like a dictionary key.",
   "out": "400"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "DataFrame: a table of columns",
   "q": "Build a DataFrame with the columns `item` = pen, book and `price` = 20, 150, and print it.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nshop = pd.DataFrame({\"item\": [\"pen\", \"book\"], \"price\": [20, 150]})\nprint(shop)",
   "e": "A dictionary of lists becomes a table: each key is a column name.",
   "out": "   item  price\n0   pen     20\n1  book    150"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "DataFrame: a table of columns",
   "q": "Print the shape of `cart`, then its column names as a list.",
   "starter": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\n",
   "sol": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart.shape)\nprint(list(cart.columns))",
   "e": "`shape` is (rows, columns); `list(df.columns)` gives the names.",
   "out": "(3, 3)\n['item', 'price', 'qty']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Reading files",
   "q": "Read `employees.csv` and print how many rows it has, using `len()`.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(len(df))",
   "e": "`len(df)` is the number of rows, the same as `df.shape[0]`.",
   "out": "41"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Looking at the data: head, tail and sample",
   "q": "This code should print the first 2 rows of `cart`, but it stops with an error. Fix it.",
   "c": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart.head[2])",
   "fixed": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart.head(2))",
   "e": "`head` is a method, so it needs round brackets: `head(2)`.",
   "want": "   item  price  qty\n0   pen     20    5\n1  book    150    2",
   "got": "TypeError: 'method' object is not subscriptable"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Missing values and duplicates",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([1, None, 3, None])\nprint(s.isna().sum())",
   "e": "`isna()` marks the two `None` values as True, and `sum()` counts them.",
   "ans": "2"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Looking at the data: head, tail and sample",
   "q": "Read `employees.csv` and print the last 2 values of the `name` column.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[\"name\"].tail(2))",
   "e": "`tail(2)` works on a single column (a Series) too.",
   "out": "39      Rekha Murthy\n40      Tarun Chopra\nName: name, dtype: object"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Series: one labelled column",
   "q": "`prices = pd.Series([100, 250, 80])`. Print every price with 18% GST added, rounded to 2 decimals, as a list.",
   "starter": "import pandas as pd\nprices = pd.Series([100, 250, 80])\n",
   "sol": "import pandas as pd\nprices = pd.Series([100, 250, 80])\nprint((prices * 1.18).round(2).tolist())",
   "e": "Maths on a Series works on every value at once; `round(2)` and `tolist()` work on the whole Series too.",
   "out": "[118.0, 295.0, 94.4]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "DataFrame: a table of columns",
   "q": "This code should print the `item` and `qty` columns of `cart`, but it raises a KeyError. Fix it.",
   "c": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart[\"item\", \"qty\"])",
   "fixed": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart[[\"item\", \"qty\"]])",
   "e": "Several columns need a **list** of names inside the brackets: double brackets.",
   "want": "   item  qty\n0   pen    5\n1  book    2\n2   bag    1",
   "got": "KeyError: ('item', 'qty')"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Reading files",
   "q": "Read the `staff` sheet of `employees.xlsx` and print the average salary, rounded to a whole number.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nstaff = pd.read_excel(\"employees.xlsx\", sheet_name=\"staff\")\nprint(round(staff[\"salary\"].mean()))",
   "e": "`read_excel` works like `read_csv`; `sheet_name=` picks the sheet.",
   "out": "56012"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Shape, info and describe",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nd = pd.DataFrame({\"v\": [4, 8, 6]})\nprint(d[\"v\"].describe()[\"max\"], d[\"v\"].count())",
   "e": "`describe()` gives decimals, so the maximum shows as 8.0. `count()` is the number of filled values.",
   "ans": "8.0 3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Missing values and duplicates",
   "q": "Read `employees.csv` and print the number of missing values in the **whole** table.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df.isna().sum().sum())",
   "e": "The first `sum()` counts per column, the second adds the columns together.",
   "out": "8"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Missing values and duplicates",
   "q": "Read `employees.csv` and print how many `emp_id` values appear again after their first time.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[\"emp_id\"].duplicated().sum())",
   "e": "`duplicated()` marks every repeat after the first copy.",
   "out": "1"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Reading files",
   "q": "This code saves `cart` and reads it back. It should print `['item', 'price', 'qty']`, but an extra column appears. Fix the save line.",
   "c": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\ncart.to_csv(\"cart.csv\")\nback = pd.read_csv(\"cart.csv\")\nprint(list(back.columns))",
   "fixed": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\ncart.to_csv(\"cart.csv\", index=False)\nback = pd.read_csv(\"cart.csv\")\nprint(list(back.columns))",
   "e": "Without `index=False`, the row numbers are saved as a column and come back as `Unnamed: 0`.",
   "want": "['item', 'price', 'qty']",
   "got": "['Unnamed: 0', 'item', 'price', 'qty']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Shape, info and describe",
   "q": "Read `employees.csv` and print the statistics of the `score` column with `describe()`.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[\"score\"].describe())",
   "e": "`describe()` on one column gives count, mean, std, min, the quartiles and max.",
   "out": "count    39.000000\nmean     73.589744\nstd      10.454709\nmin      53.000000\n25%      67.000000\n50%      74.000000\n75%      82.500000\nmax      91.000000\nName: score, dtype: float64"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "DataFrame: a table of columns",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [\"x\", \"y\", \"z\"]})\nprint(df.dtypes[\"a\"], len(df.columns))",
   "e": "Whole numbers in a DataFrame are `int64`, and there are 2 columns.",
   "ans": "int64 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Looking at the data: head, tail and sample",
   "q": "Read `employees.csv` and print the `name` of 2 random rows, using `sample()` with `random_state=1`.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[\"name\"].sample(2, random_state=1))",
   "e": "`random_state` fixes the random choice, so everyone gets the same 2 rows.",
   "out": "3        Ravi Teja\n2      Neha Kapoor\nName: name, dtype: object"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Series: one labelled column",
   "q": "Make a Series from the dictionary `{\"Deluxe\": 12, \"Suite\": 3, \"Standard\": 25}`. Print the total rooms, then the share of `Suite` rooms in percent with 1 decimal.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nrooms = pd.Series({\"Deluxe\": 12, \"Suite\": 3, \"Standard\": 25})\ntotal = rooms.sum()\nprint(total)\nprint(round(rooms[\"Suite\"] / total * 100, 1))",
   "e": "The dictionary keys become the labels. 3 of 40 rooms is 7.5%.",
   "out": "40\n7.5"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Missing values and duplicates",
   "q": "Read `employees.csv`. Print how many salaries are missing, then the share of rows with a missing salary in percent, with 1 decimal.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nmissing = df[\"salary\"].isna().sum()\nprint(missing)\nprint(round(missing / len(df) * 100, 1))",
   "e": "3 of 41 rows have no salary: about 7.3%.",
   "out": "3\n7.3"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Reading files",
   "q": "Read `student_scores.csv` using its first column as the index. Print the shape, then the number of missing values in `TestPrep`.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"student_scores.csv\", index_col=0)\nprint(df.shape)\nprint(df[\"TestPrep\"].isna().sum())",
   "e": "`index_col=0` turns the unnamed first column into the index, so there are 14 columns, not 15.",
   "out": "(300, 14)\n21"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Missing values and duplicates",
   "q": "This code should print **how many** rows of `orders` are exact duplicates (`1`), but it prints a column of True/False. Fix it.",
   "c": "import pandas as pd\norders = pd.DataFrame({\"id\": [1, 2, 2], \"amount\": [50, 70, 70]})\nprint(orders.duplicated())",
   "fixed": "import pandas as pd\norders = pd.DataFrame({\"id\": [1, 2, 2], \"amount\": [50, 70, 70]})\nprint(orders.duplicated().sum())",
   "e": "`duplicated()` gives one True/False per row; `sum()` counts the True values.",
   "want": "1",
   "got": "0    False\n1    False\n2     True\ndtype: bool"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Series: one labelled column",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series({\"a\": 3, \"b\": 5})\nt = s * 2\nprint(t[\"b\"] - s[\"a\"])",
   "e": "`t` doubles every value, so `t[\"b\"]` is 10, and 10 - 3 = 7.",
   "ans": "7"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "DataFrame: a table of columns",
   "q": "Build a DataFrame of 3 rooms with the columns `type` = Deluxe, Suite, Standard and `price` = 3500, 7000, 2200, using the room numbers `[101, 102, 103]` as the index. Print the table, then the total of the `price` column.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\"type\": [\"Deluxe\", \"Suite\", \"Standard\"], \"price\": [3500, 7000, 2200]}, index=[101, 102, 103])\nprint(rooms)\nprint(rooms[\"price\"].sum())",
   "e": "`index=` sets the row labels of a DataFrame, just like for a Series.",
   "out": "         type  price\n101    Deluxe   3500\n102     Suite   7000\n103  Standard   2200\n12700"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Shape, info and describe",
   "q": "This code should print `(3, 3)`, but it stops with a TypeError. Fix it.",
   "c": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart.shape())",
   "fixed": "import pandas as pd\ncart = pd.DataFrame({\"item\": [\"pen\", \"book\", \"bag\"], \"price\": [20, 150, 600], \"qty\": [5, 2, 1]})\nprint(cart.shape)",
   "e": "`shape` is a value (a tuple), not a method, so it has no brackets. `info()` and `describe()` are methods and do need them.",
   "want": "(3, 3)",
   "got": "TypeError: 'tuple' object is not callable"
  }
 ],
 "pandas2": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "Removing duplicate rows",
   "q": "`visits = pd.DataFrame({\"guest\": [\"Om\", \"Lata\", \"Om\"], \"room\": [101, 102, 101]})`. Remove the repeated row and print the table.",
   "starter": "import pandas as pd\nvisits = pd.DataFrame({\"guest\": [\"Om\", \"Lata\", \"Om\"], \"room\": [101, 102, 101]})\n",
   "sol": "import pandas as pd\nvisits = pd.DataFrame({\"guest\": [\"Om\", \"Lata\", \"Om\"], \"room\": [101, 102, 101]})\nprint(visits.drop_duplicates())",
   "e": "`drop_duplicates()` keeps the first copy of each repeated row.",
   "out": "  guest  room\n0    Om   101\n1  Lata   102"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Missing values: dropna and fillna",
   "q": "`rain = pd.Series([12, None, 30])`. Fill the gap with 0 and print the values as a list.",
   "starter": "import pandas as pd\nrain = pd.Series([12, None, 30])\n",
   "sol": "import pandas as pd\nrain = pd.Series([12, None, 30])\nprint(rain.fillna(0).tolist())",
   "e": "No reading on a dry day can honestly mean 0 mm of rain.",
   "out": "[12.0, 0.0, 30.0]"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Filling from neighbours: ffill and bfill",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([4, None, None, 9])\nprint(s.ffill().tolist())",
   "e": "`ffill()` copies the last known value (4) down into both gaps. A column with gaps holds decimals, so you see 4.0.",
   "ans": "[4.0, 4.0, 4.0, 9.0]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Removing rows and columns: drop",
   "q": "Read `employees.csv`, drop the `email` and `city` columns and print the new column names as a list.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\ndf = df.drop(columns=[\"email\", \"city\"])\nprint(list(df.columns))",
   "e": "`drop(columns=[...])` returns a table without those columns.",
   "out": "['emp_id', 'name', 'department', 'salary', 'score', 'join_date']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Text columns: the .str tools",
   "q": "`names = pd.Series([\"asha rao\", \"RAVI TEJA\"])`. Print the names in title case as a list.",
   "starter": "import pandas as pd\nnames = pd.Series([\"asha rao\", \"RAVI TEJA\"])\n",
   "sol": "import pandas as pd\nnames = pd.Series([\"asha rao\", \"RAVI TEJA\"])\nprint(names.str.title().tolist())",
   "e": "`.str.title()` gives each word a capital first letter and small letters after it.",
   "out": "['Asha Rao', 'Ravi Teja']"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Text columns: the .str tools",
   "q": "This code should print `['Pune', 'Goa']`, but it stops with an AttributeError. Fix it.",
   "c": "import pandas as pd\ncities = pd.Series([\"  Pune \", \"Goa  \"])\nprint(cities.strip().tolist())",
   "fixed": "import pandas as pd\ncities = pd.Series([\"  Pune \", \"Goa  \"])\nprint(cities.str.strip().tolist())",
   "e": "A Series has no `strip()` method. Add `.str` to use string methods on every value.",
   "want": "['Pune', 'Goa']",
   "got": "AttributeError: 'Series' object has no attribute 'strip'"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Map and replace with a dictionary",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([\"Y\", \"N\", \"Y\"])\nprint(s.replace({\"Y\": \"Yes\"}).tolist())",
   "e": "`replace()` changes the values it finds in the dictionary and keeps the rest, so `N` stays.",
   "ans": "['Yes', 'N', 'Yes']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Dates: pd.to_datetime",
   "q": "`d = pd.Series([\"2025-03-01\", \"2025-01-15\"])`. Turn it into dates and print the earliest one.",
   "starter": "import pandas as pd\nd = pd.Series([\"2025-03-01\", \"2025-01-15\"])\n",
   "sol": "import pandas as pd\nd = pd.Series([\"2025-03-01\", \"2025-01-15\"])\ndates = pd.to_datetime(d)\nprint(dates.min())",
   "e": "Real dates can be compared, so `min()` finds the earliest.",
   "out": "2025-01-15 00:00:00"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Missing values: dropna and fillna",
   "q": "Read `employees.csv` and print how many rows are left after removing the rows with **no score**.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(len(df.dropna(subset=[\"score\"])))",
   "e": "`subset=` makes `dropna()` look only at the columns you name.",
   "out": "39"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Missing values: dropna and fillna",
   "q": "`pay = pd.Series([\"UPI\", None, \"Cash\", \"UPI\"])`. Fill the gap with the most common value and print the list.",
   "starter": "import pandas as pd\npay = pd.Series([\"UPI\", None, \"Cash\", \"UPI\"])\n",
   "sol": "import pandas as pd\npay = pd.Series([\"UPI\", None, \"Cash\", \"UPI\"])\nprint(pay.fillna(pay.mode()[0]).tolist())",
   "e": "`mode()` returns a Series; `[0]` takes the most common value, UPI.",
   "out": "['UPI', 'UPI', 'Cash', 'UPI']"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Missing values: dropna and fillna",
   "q": "This code should fill the gap with the average and print `[10.0, 20.0, 30.0]`. Fix the fill line.",
   "c": "import pandas as pd\ns = pd.Series([10, None, 30])\ns.fillna(s.mean())\nprint(s.tolist())",
   "fixed": "import pandas as pd\ns = pd.Series([10, None, 30])\ns = s.fillna(s.mean())\nprint(s.tolist())",
   "e": "`fillna()` returns a new Series. Store the result, or the gap stays.",
   "want": "[10.0, 20.0, 30.0]",
   "got": "[10.0, nan, 30.0]"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Filling from neighbours: ffill and bfill",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([None, 6, None])\nprint(s.bfill().tolist())",
   "e": "`bfill()` copies the next value up. The last gap has nothing below it, so it stays nan.",
   "ans": "[6.0, 6.0, nan]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Removing rows and columns: drop",
   "q": "Read `employees.csv`. Drop the rows whose score is below 60 and print how many rows remain.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nlow = df[df[\"score\"] < 60]\nprint(len(df.drop(low.index)))",
   "e": "Filter the rows you want to remove, then pass their `.index` to `drop()`. Rows with no score are not below 60, so they stay.",
   "out": "35"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Removing rows and columns: drop",
   "q": "Running this cell a second time should not crash: it should print the column names without `email`. Fix the drop line so it never raises a KeyError.",
   "c": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\ndf = df.drop(columns=[\"email\"])\ndf = df.drop(columns=[\"email\"])\nprint(list(df.columns))",
   "fixed": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\ndf = df.drop(columns=[\"email\"])\ndf = df.drop(columns=[\"email\"], errors=\"ignore\")\nprint(list(df.columns))",
   "e": "The second drop finds no `email` column. `errors=\"ignore\"` skips names that are not there.",
   "want": "['emp_id', 'name', 'department', 'salary', 'score', 'join_date', 'city']",
   "got": "KeyError: \"['email'] not found in axis\""
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Fixing types: astype",
   "q": "`amounts = pd.Series([\"₹1,500\", \"₹320\", \"₹2,000\"])`. Remove the `₹` and the commas, turn the text into whole numbers, and print the total.",
   "starter": "import pandas as pd\namounts = pd.Series([\"₹1,500\", \"₹320\", \"₹2,000\"])\n",
   "sol": "import pandas as pd\namounts = pd.Series([\"₹1,500\", \"₹320\", \"₹2,000\"])\nclean = amounts.str.replace(\"₹\", \"\", regex=False).str.replace(\",\", \"\", regex=False).astype(\"int64\")\nprint(clean.sum())",
   "e": "Text cannot be added up. Remove the symbols first, then `astype(\"int64\")`.",
   "out": "3820"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Text columns: the .str tools",
   "q": "Read `employees.csv` and print how many email addresses contain `yahoo`. Missing emails count as no.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\nprint(df[\"email\"].str.contains(\"yahoo\", na=False).sum())",
   "e": "`contains()` gives True/False per row; `na=False` treats a missing email as False.",
   "out": "8"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Map and replace with a dictionary",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([\"S\", \"M\", \"XL\"])\nprint(s.map({\"S\": \"Small\", \"M\": \"Medium\"}).tolist())",
   "e": "`map()` looks up every value, and XL is not in the dictionary, so it becomes nan.",
   "ans": "['Small', 'Medium', nan]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Date parts with .dt",
   "q": "`d = pd.to_datetime(pd.Series([\"2025-08-15\", \"2025-10-02\"]))`. Print the day names as a list, then the dates as text in the style `15-Aug-2025`.",
   "starter": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"2025-08-15\", \"2025-10-02\"]))\n",
   "sol": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"2025-08-15\", \"2025-10-02\"]))\nprint(d.dt.day_name().tolist())\nprint(d.dt.strftime(\"%d-%b-%Y\").tolist())",
   "e": "`%d` is the day, `%b` the short month name and `%Y` the full year.",
   "out": "['Friday', 'Thursday']\n['15-Aug-2025', '02-Oct-2025']"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "The cleaning checklist",
   "q": "Read `employees.csv` into `raw`, clean a **copy**: drop the duplicate row and the rows with no salary. Print the number of rows of `raw` and of the clean table.",
   "starter": "import pandas as pd\n",
   "sol": "import pandas as pd\nraw = pd.read_csv(\"employees.csv\")\ndf = raw.copy()\ndf = df.drop_duplicates().dropna(subset=[\"salary\"])\nprint(len(raw), len(df))",
   "e": "Working on a copy keeps `raw` unchanged, so you can compare before and after.",
   "out": "41 37"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Text columns: the .str tools",
   "q": "Read `employees.csv`. Tidy the department names (strip the spaces, then title case) and print how many different departments there are now.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\ndf[\"department\"] = df[\"department\"].str.strip().str.title()\nprint(df[\"department\"].nunique())",
   "e": "Twelve spellings become five. They read `It` and `Hr` now, not `IT` and `HR`: a `replace()` afterwards fixes those two.",
   "out": "5"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Dates: pd.to_datetime",
   "q": "Read `employees.csv`. Convert `join_date` (mixed styles, day first, bad values to NaT) and print how many people joined in **2022**.",
   "starter": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\n",
   "sol": "import pandas as pd\ndf = pd.read_csv(\"employees.csv\")\ndf[\"join_date\"] = pd.to_datetime(df[\"join_date\"], format=\"mixed\", dayfirst=True, errors=\"coerce\")\nprint((df[\"join_date\"].dt.year == 2022).sum())",
   "e": "Convert first, then compare the year; NaT years are not equal to 2022, so they are not counted.",
   "out": "8"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Dates: pd.to_datetime",
   "q": "This code should read the date as 3 April 2025 and print `4`. Fix the conversion.",
   "c": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"03/04/2025\"]))\nprint(d.dt.month[0])",
   "fixed": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"03/04/2025\"]), dayfirst=True)\nprint(d.dt.month[0])",
   "e": "Without `dayfirst=True`, Pandas reads 03/04 as March 4.",
   "want": "4",
   "got": "3"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Date parts with .dt",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\na = pd.to_datetime(pd.Series([\"2025-01-01\"]))\nb = pd.to_datetime(pd.Series([\"2025-03-01\"]))\nprint((b - a).dt.days[0])",
   "e": "January has 31 days and February 2025 has 28, so the gap is 59 days.",
   "ans": "59"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Missing values: dropna and fillna",
   "q": "This code should fill each gap with the **last known** value, and only the gap at the very start with the next value. Fix it.",
   "c": "import pandas as pd\ntemps = pd.Series([None, 30, None, None, 26, None])\nprint(temps.bfill().ffill().tolist())",
   "fixed": "import pandas as pd\ntemps = pd.Series([None, 30, None, None, 26, None])\nprint(temps.ffill().bfill().tolist())",
   "e": "The order matters. `ffill()` first fills every gap after a value with the last known value; then `bfill()` only has the gap at the start left to fill.",
   "want": "[30.0, 30.0, 30.0, 30.0, 26.0, 26.0]",
   "got": "[30.0, 30.0, 26.0, 26.0, 26.0, 26.0]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Map and replace with a dictionary",
   "q": "`df = pd.DataFrame({\"name\": [\"Asha Rao\", \"Om Shah\"], \"code\": [\"HYD\", \"BLR\"]})`. Split `name` into `first` and `last`, add a column `city` that maps HYD to Hyderabad and BLR to Bengaluru, and print the table without the `name` and `code` columns.",
   "starter": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha Rao\", \"Om Shah\"], \"code\": [\"HYD\", \"BLR\"]})\n",
   "sol": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha Rao\", \"Om Shah\"], \"code\": [\"HYD\", \"BLR\"]})\ndf[[\"first\", \"last\"]] = df[\"name\"].str.split(\" \", expand=True)\ndf[\"city\"] = df[\"code\"].map({\"HYD\": \"Hyderabad\", \"BLR\": \"Bengaluru\"})\nprint(df.drop(columns=[\"name\", \"code\"]))",
   "e": "Three cleaning tools in a row: split into columns, translate with `map`, then drop what you no longer need.",
   "out": "  first  last       city\n0  Asha   Rao  Hyderabad\n1    Om  Shah  Bengaluru"
  }
 ],
 "pandas3": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "loc: pick by labels",
   "q": "Print the `type` and `rate` of the rows with the labels 1 to 3 (both included), using `loc`.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.loc[1:3, [\"type\", \"rate\"]])",
   "e": "With `loc`, the end label 3 is included.",
   "out": "       type  rate\n1     Suite  7200\n2  Standard  2100\n3    Deluxe  3800"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "iloc: pick by position",
   "q": "Print the first 2 rows and the first 3 columns of `rooms`, using `iloc`.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.iloc[0:2, 0:3])",
   "e": "`iloc` slices work like lists: the end position is left out.",
   "out": "   room    type  rate\n0   101  Deluxe  3500\n1   102   Suite  7200"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "iloc: pick by position",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.iloc[-1][\"type\"], rooms.iloc[0][\"rate\"])",
   "e": "`iloc[-1]` is the last row (a Suite) and `iloc[0]` the first (rate 3500).",
   "ans": "Suite 3500"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Filtering rows",
   "q": "Print the rows of `rooms` whose rate is above ₹3,000.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[rooms[\"rate\"] > 3000])",
   "e": "The condition makes a True/False mask; `rooms[mask]` keeps the True rows.",
   "out": "   room    type  rate  nights  rating\n0   101  Deluxe  3500       2     4.5\n1   102   Suite  7200       1     4.8\n3   104  Deluxe  3800       3     4.1\n5   106   Suite  6900       2     4.9"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "New columns with maths",
   "q": "Add a column `bill` = rate × nights and print the `room` and `bill` columns.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nrooms[\"bill\"] = rooms[\"rate\"] * rooms[\"nights\"]\nprint(rooms[[\"room\", \"bill\"]])",
   "e": "Maths between two columns works row by row.",
   "out": "   room   bill\n0   101   7000\n1   102   7200\n2   103   8400\n3   104  11400\n4   105  11500\n5   106  13800"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Filtering rows",
   "q": "This code should keep the Deluxe rooms with 3 or more nights, but it stops with a ValueError. Fix it.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[(rooms[\"type\"] == \"Deluxe\") and (rooms[\"nights\"] >= 3)][\"room\"].tolist())",
   "fixed": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[(rooms[\"type\"] == \"Deluxe\") & (rooms[\"nights\"] >= 3)][\"room\"].tolist())",
   "e": "Python's `and` cannot combine two masks. Use `&`.",
   "want": "[104, 105]",
   "got": "ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all()."
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Sorting with sort_values",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ndf = pd.DataFrame({\"n\": [\"P\", \"Q\", \"R\"], \"v\": [8, 3, 5]})\nprint(df.sort_values(\"v\")[\"n\"].tolist())",
   "e": "Smallest first: 3 (Q), 5 (R), 8 (P).",
   "ans": "['Q', 'R', 'P']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Counting and finding: value_counts, unique and idxmax",
   "q": "Print how many rooms there are of each `type`, with `value_counts()`.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[\"type\"].value_counts())",
   "e": "`value_counts()` counts each value and puts the most common first: 3 Deluxe, 2 Suites, 1 Standard.",
   "out": "type\nDeluxe      3\nSuite       2\nStandard    1\nName: count, dtype: int64"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "loc: pick by labels",
   "q": "This code should print the rate of room 104 (`3800`), but it raises a KeyError. Fix it so `loc` can find room 104.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.loc[104, \"rate\"])",
   "fixed": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.set_index(\"room\").loc[104, \"rate\"])",
   "e": "The labels are 0 to 5, not the room numbers. `set_index(\"room\")` makes the room numbers the labels that `loc` uses.",
   "want": "3800",
   "got": "KeyError: 104"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Filtering rows",
   "q": "Print the room numbers of the Suites **or** the rooms rated below 4.0, as a list.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[(rooms[\"type\"] == \"Suite\") | (rooms[\"rating\"] < 4.0)][\"room\"].tolist())",
   "e": "`|` keeps a row when either condition is True.",
   "out": "[102, 103, 105, 106]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "query(): filters written like a sentence",
   "q": "Using `query()`, print the room numbers with a rate under the variable `budget = 4000` and a rating of 4 or more, as a list.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nbudget = 4000\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nbudget = 4000\nprint(rooms.query(\"rate < @budget and rating >= 4\")[\"room\"].tolist())",
   "e": "`@budget` uses the Python variable inside the query text.",
   "out": "[101, 104]"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "apply(): your own rule",
   "q": "This code should label each rating as Good (4 or more) or OK, but it stops with a TypeError. Fix the apply line.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\ndef label(r):\n    return \"Good\" if r >= 4 else \"OK\"\n\nprint(rooms[\"rating\"].apply(label()).tolist())",
   "fixed": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\ndef label(r):\n    return \"Good\" if r >= 4 else \"OK\"\n\nprint(rooms[\"rating\"].apply(label).tolist())",
   "e": "Pass the function itself, without brackets. `label()` calls it with no value.",
   "want": "['Good', 'Good', 'OK', 'Good', 'OK', 'Good']",
   "got": "TypeError: label() missing 1 required positional argument: 'r'"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "apply(): your own rule",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms[\"nights\"].apply(lambda n: \"Long\" if n >= 3 else \"Short\").tolist())",
   "e": "The lambda runs once for each value: nights 2, 1, 4, 3, 5, 2.",
   "ans": "['Short', 'Short', 'Long', 'Long', 'Long', 'Short']"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "np.where and setting values with loc",
   "q": "Add a column `gst` with `np.where`: 18% of the rate for rates above ₹7,000, otherwise 12%. Print the `rate` and `gst` columns.",
   "starter": "import pandas as pd\nimport numpy as np\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nimport numpy as np\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nrooms[\"gst\"] = np.where(rooms[\"rate\"] > 7000, rooms[\"rate\"] * 0.18, rooms[\"rate\"] * 0.12)\nprint(rooms[[\"rate\", \"gst\"]])",
   "e": "`np.where` picks, row by row, from two calculated columns.",
   "out": "   rate     gst\n0  3500   420.0\n1  7200  1296.0\n2  2100   252.0\n3  3800   456.0\n4  2300   276.0\n5  6900   828.0"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "loc: pick by labels",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(len(rooms.loc[2:4]), len(rooms.iloc[2:4]))",
   "e": "`loc` keeps labels 2, 3 and 4; `iloc` keeps positions 2 and 3.",
   "ans": "3 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Sorting with sort_values",
   "q": "Print the `room` and `rate` of the 3 most expensive rooms, highest first.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.sort_values(\"rate\", ascending=False)[[\"room\", \"rate\"]].head(3))",
   "e": "Sort largest first, then take the top 3 with `head(3)`.",
   "out": "   room  rate\n1   102  7200\n5   106  6900\n3   104  3800"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Counting and finding: value_counts, unique and idxmax",
   "q": "This code should print the room **number** of the best-rated room (`106`), but it prints the rating. Fix it.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nbest = rooms[\"rating\"].max()\nprint(rooms.loc[best, \"room\"])",
   "fixed": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nbest = rooms[\"rating\"].idxmax()\nprint(rooms.loc[best, \"room\"])",
   "e": "`max()` gives the value 4.9; `idxmax()` gives its index label, which `loc` needs.",
   "want": "106",
   "got": "KeyError: np.float64(4.9)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Counting and finding: value_counts, unique and idxmax",
   "q": "Read `sales_data.csv` and print how many different categories there are, then the share of orders from each category with `value_counts(normalize=True)` rounded to 2 decimals.",
   "starter": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\nprint(sales[\"Category\"].nunique())\nprint(sales[\"Category\"].value_counts(normalize=True).round(2))",
   "e": "`nunique()` counts the different values; `normalize=True` gives shares that add up to 1.",
   "out": "4\nCategory\nClothing       0.31\nGroceries      0.24\nElectronics    0.23\nFurniture      0.21\nName: proportion, dtype: float64"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "np.where and setting values with loc",
   "q": "Mark the rooms that need attention: set a new column `flag` to `\"Check\"` with `loc` for ratings below 4.0, and `\"OK\"` for the rest. Print the room numbers flagged `\"Check\"` as a list.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nrooms.loc[rooms[\"rating\"] < 4.0, \"flag\"] = \"Check\"\nrooms.loc[rooms[\"rating\"] >= 4.0, \"flag\"] = \"OK\"\nprint(rooms[rooms[\"flag\"] == \"Check\"][\"room\"].tolist())",
   "e": "`loc[condition, \"col\"] = value` sets values only in the matching rows.",
   "out": "[103, 105]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "apply(): your own rule",
   "q": "Write `def discount(row)` that gives 10% off the bill (rate × nights) for 4 or more nights and nothing otherwise, and returns the amount to pay. Add it as `pay` with `apply(..., axis=1)` and print the `room` and `pay` columns.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\ndef discount(row):\n    bill = row[\"rate\"] * row[\"nights\"]\n    if row[\"nights\"] >= 4:\n        return bill * 0.9\n    return bill\n\nrooms[\"pay\"] = rooms.apply(discount, axis=1)\nprint(rooms[[\"room\", \"pay\"]])",
   "e": "With `axis=1` the function gets a whole row, so it can use two columns at once.",
   "out": "   room      pay\n0   101   7000.0\n1   102   7200.0\n2   103   7560.0\n3   104  11400.0\n4   105  10350.0\n5   106  13800.0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Sorting with sort_values",
   "q": "Sort the rooms by `type` A to Z, and inside each type by `rating`, highest first. Print the `type`, `room` and `rating` columns.",
   "starter": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\n",
   "sol": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.sort_values([\"type\", \"rating\"], ascending=[True, False])[[\"type\", \"room\", \"rating\"]])",
   "e": "Give a list of columns and a matching list of directions.",
   "out": "       type  room  rating\n0    Deluxe   101     4.5\n3    Deluxe   104     4.1\n4    Deluxe   105     3.6\n2  Standard   103     3.9\n5     Suite   106     4.9\n1     Suite   102     4.8"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Filtering rows",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\ncheap = rooms[rooms[\"rate\"].between(2000, 3600)]\nprint(cheap[\"room\"].tolist(), len(cheap))",
   "e": "`between` includes both ends: rates 3500, 2100 and 2300 qualify.",
   "ans": "[101, 103, 105] 3"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "iloc: pick by position",
   "q": "This code should print the **last 2** room numbers, `[105, 106]`, but it prints `[]`. Fix the slice.",
   "c": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.iloc[-2:0][\"room\"].tolist())",
   "fixed": "import pandas as pd\nrooms = pd.DataFrame({\n    \"room\": [101, 102, 103, 104, 105, 106],\n    \"type\": [\"Deluxe\", \"Suite\", \"Standard\", \"Deluxe\", \"Deluxe\", \"Suite\"],\n    \"rate\": [3500, 7200, 2100, 3800, 2300, 6900],\n    \"nights\": [2, 1, 4, 3, 5, 2],\n    \"rating\": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]\n})\nprint(rooms.iloc[-2:][\"room\"].tolist())",
   "e": "A slice from -2 to 0 is empty, because 0 comes before -2. Leave the end out to go to the last row.",
   "want": "[105, 106]",
   "got": "[]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "query(): filters written like a sentence",
   "q": "Read `sales_data.csv`. Using `query()`, keep the West orders with a profit above 1000, then print how many there are and their total sales.",
   "starter": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\nbig = sales.query(\"Region == 'West' and Profit > 1000\")\nprint(len(big), big[\"Sales\"].sum())",
   "e": "Filter once, then use `len()` and `sum()` on the result.",
   "out": "13 93834"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Counting and finding: value_counts, unique and idxmax",
   "q": "Read `sales_data.csv`. Print the `Date`, `Category` and `Profit` of the order with the **biggest loss** (the smallest profit).",
   "starter": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\nprint(sales.loc[sales[\"Profit\"].idxmin(), [\"Date\", \"Category\", \"Profit\"]])",
   "e": "`idxmin()` finds where the smallest profit is; `loc` shows the columns you choose.",
   "out": "Date         2024-12-23\nCategory    Electronics\nProfit             -252\nName: 491, dtype: object"
  }
 ],
 "pandas4": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "groupby: split, apply, combine",
   "q": "Print the total `amount` of each store.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.groupby(\"store\")[\"amount\"].sum())",
   "e": "Split by store, take the amount, add it up: one row per store, sorted A to Z.",
   "out": "store\nDelhi    650\nGoa      460\nPune     690\nName: amount, dtype: int64"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "groupby: split, apply, combine",
   "q": "Print how many orders there are for each `item`, using `size()`.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.groupby(\"item\").size())",
   "e": "`size()` counts the rows in each group.",
   "out": "item\nCoffee    2\nTea       5\ndtype: int64"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "groupby: split, apply, combine",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ndf = pd.DataFrame({\"g\": [\"b\", \"a\", \"b\"], \"v\": [4, 9, 7]})\nprint(df.groupby(\"g\")[\"v\"].max().tolist())",
   "e": "Group a has 9; group b has 4 and 7, so its max is 7. Groups are sorted: a first.",
   "ans": "[9, 7]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "agg: many summaries at once",
   "q": "For each store, print the mean and the max `amount` in one table, using `agg` with a list.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.groupby(\"store\")[\"amount\"].agg([\"mean\", \"max\"]))",
   "e": "A list in `agg` gives one column per summary.",
   "out": "        mean  max\nstore            \nDelhi  325.0  600\nGoa    230.0  260\nPune   230.0  300"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "concat: stacking tables",
   "q": "This code should stack the two weeks into one table of 4 rows and print `4`, but it stops with a TypeError. Fix it.",
   "c": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\nboth = pd.concat(w1, w2)\nprint(len(both))",
   "fixed": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\nboth = pd.concat([w1, w2])\nprint(len(both))",
   "e": "`pd.concat` takes one **list** of tables: `pd.concat([w1, w2])`.",
   "want": "4",
   "got": "TypeError: concat() takes 1 positional argument but 2 were given"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "merge: joining two tables",
   "q": "Join `orders` with `managers` so that only stores found in both tables stay. Print the `store`, `item` and `manager` columns.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\nm = pd.merge(orders, managers, on=\"store\", how=\"inner\")\nprint(m[[\"store\", \"item\", \"manager\"]])",
   "e": "An inner join keeps only matching keys, so the Goa orders disappear.",
   "out": "   store    item manager\n0   Pune     Tea    Asha\n1  Delhi  Coffee    Ravi\n2   Pune  Coffee    Asha\n3  Delhi     Tea    Ravi\n4   Pune     Tea    Asha"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "pd.cut: numbers into groups",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ns = pd.Series([15, 45, 80])\nprint(pd.cut(s, bins=[0, 30, 60, 100], labels=[\"Low\", \"Mid\", \"High\"]).tolist())",
   "e": "Each value goes into the range it falls in: (0, 30], (30, 60] and (60, 100].",
   "ans": "['Low', 'Mid', 'High']"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Pivot tables",
   "q": "Make a pivot table of the total `amount` with stores down the side and items across the top. Print it.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.pivot_table(values=\"amount\", index=\"store\", columns=\"item\", aggfunc=\"sum\"))",
   "e": "`index` sets the rows, `columns` the columns, `aggfunc` how to combine.",
   "out": "item   Coffee    Tea\nstore               \nDelhi   600.0   50.0\nGoa       NaN  460.0\nPune    240.0  450.0"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "agg: many summaries at once",
   "q": "For each item, print a report with named aggregation: `orders` (count of orders), `units` (total qty) and `revenue` (total amount).",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.groupby(\"item\").agg(orders=(\"qty\", \"count\"), units=(\"qty\", \"sum\"), revenue=(\"amount\", \"sum\")))",
   "e": "Named aggregation: `new_name=(\"column\", \"summary\")`.",
   "out": "        orders  units  revenue\nitem                          \nCoffee       2      7      840\nTea          5     16      960"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "transform and assign",
   "q": "This code should put each store's total amount on every order, but the new column is all NaN. Fix it.",
   "c": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"store_total\"] = orders.groupby(\"store\")[\"amount\"].sum()\nprint(orders[[\"store\", \"store_total\"]])",
   "fixed": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"store_total\"] = orders.groupby(\"store\")[\"amount\"].transform(\"sum\")\nprint(orders[[\"store\", \"store_total\"]])",
   "e": "`sum()` gives one row per store (labels Delhi, Goa, Pune), which do not match the order labels 0 to 6. `transform` gives one value per order.",
   "want": "   store  store_total\n0   Pune          690\n1  Delhi          650\n2   Pune          690\n3    Goa          460\n4  Delhi          650\n5   Pune          690\n6    Goa          460",
   "got": "   store  store_total\n0   Pune          NaN\n1  Delhi          NaN\n2   Pune          NaN\n3    Goa          NaN\n4  Delhi          NaN\n5   Pune          NaN\n6    Goa          NaN"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "transform and assign",
   "q": "Add a column `share` = each order's amount as a percent of its store's total, rounded to 1 decimal. Print the `store`, `amount` and `share` columns.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"share\"] = (orders[\"amount\"] / orders.groupby(\"store\")[\"amount\"].transform(\"sum\") * 100).round(1)\nprint(orders[[\"store\", \"amount\", \"share\"]])",
   "e": "`transform(\"sum\")` lines the store total up with every order, so you can divide row by row.",
   "out": "   store  amount  share\n0   Pune     150   21.7\n1  Delhi     600   92.3\n2   Pune     240   34.8\n3    Goa     200   43.5\n4  Delhi      50    7.7\n5   Pune     300   43.5\n6    Goa     260   56.5"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "merge: joining two tables",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\nprint(len(pd.merge(orders, managers, on=\"store\", how=\"left\")), len(pd.merge(orders, managers, on=\"store\", how=\"outer\")))",
   "e": "Left keeps all 7 orders. Outer also adds Chennai, which has a manager but no orders: 8.",
   "ans": "7 8"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "The top row in each group",
   "q": "Print the `store`, `item` and `amount` of the biggest order in each store.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.loc[orders.groupby(\"store\")[\"amount\"].idxmax(), [\"store\", \"item\", \"amount\"]])",
   "e": "`groupby(...).idxmax()` gives one label per store; `loc` shows those rows.",
   "out": "   store    item  amount\n1  Delhi  Coffee     600\n6    Goa     Tea     260\n5   Pune     Tea     300"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Pivot tables",
   "q": "Make a pivot table that **counts** the orders, stores down the side and items across, with 0 in empty cells. Print it.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.pivot_table(values=\"amount\", index=\"store\", columns=\"item\", aggfunc=\"count\", fill_value=0))",
   "e": "Goa has no Coffee orders, so that cell would be NaN. `fill_value=0` shows 0 instead.",
   "out": "item   Coffee  Tea\nstore             \nDelhi       1    1\nGoa         0    2\nPune        1    2"
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "merge: joining two tables",
   "q": "This code should join the managers onto the orders, but it raises a KeyError. Fix it.",
   "c": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\nm = pd.merge(orders, managers, on=\"city\", how=\"left\")\nprint(m[\"manager\"].tolist())",
   "fixed": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\nm = pd.merge(orders, managers, on=\"store\", how=\"left\")\nprint(m[\"manager\"].tolist())",
   "e": "The key must be a column that both tables have: `store`.",
   "want": "['Asha', 'Ravi', 'Asha', nan, 'Ravi', 'Asha', nan]",
   "got": "KeyError: 'city'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "concat: stacking tables",
   "q": "Stack `w1` and `w2` with the labels `W1` and `W2` (use `keys=`) and print the table.",
   "starter": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\n",
   "sol": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\nprint(pd.concat([w1, w2], keys=[\"W1\", \"W2\"]))",
   "e": "`keys=` adds an outer label to each piece, so you can still tell the weeks apart.",
   "out": "      day  amount\nW1 0  Mon     500\n   1  Tue     650\nW2 0  Mon     700\n   1  Tue     480"
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "agg: many summaries at once",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\ndf = pd.DataFrame({\"g\": [\"x\", \"y\", \"x\"], \"v\": [2, 3, 5], \"w\": [1, 1, 4]})\nr = df.groupby(\"g\").agg({\"v\": \"sum\", \"w\": \"max\"})\nprint(r[\"v\"].tolist(), r[\"w\"].tolist())",
   "e": "Different summaries per column: v is added up (7, 3), w takes the max (4, 1).",
   "ans": "[7, 3] [4, 1]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "describe and corr",
   "q": "Print the correlation between `qty` and `amount`, rounded to 2 decimals.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(round(orders[\"qty\"].corr(orders[\"amount\"]), 2))",
   "e": "0.64: bigger quantities usually mean bigger amounts, but not always, because tea and coffee have different prices.",
   "out": "0.64"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "pd.cut: numbers into groups",
   "q": "Put the order amounts into bands with `pd.cut`: `Small` up to 200, `Medium` up to 400 and `Large` up to 1000. Print the number of orders in each band (group with `observed=True`).",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"band\"] = pd.cut(orders[\"amount\"], bins=[0, 200, 400, 1000], labels=[\"Small\", \"Medium\", \"Large\"])\nprint(orders.groupby(\"band\", observed=True).size())",
   "e": "Each range includes its right edge, so 200 is Small.",
   "out": "band\nSmall     3\nMedium    3\nLarge     1\ndtype: int64"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "merge: joining two tables",
   "q": "Using a left join of `orders` with `managers`, print the stores (once each) that have **no** manager, as a list.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nmanagers = pd.DataFrame({\"store\": [\"Pune\", \"Delhi\", \"Chennai\"], \"manager\": [\"Asha\", \"Ravi\", \"Meena\"]})\nm = pd.merge(orders, managers, on=\"store\", how=\"left\")\nprint(m[m[\"manager\"].isna()][\"store\"].unique().tolist())",
   "e": "Unmatched rows get NaN in the right table's columns; `unique()` lists each store once.",
   "out": "['Goa']"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "pd.cut: numbers into groups",
   "q": "This code should count the orders in each band and print only the bands that have orders, with no warning. Fix the groupby.",
   "c": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"band\"] = pd.cut(orders[\"amount\"], bins=[0, 40, 200, 1000], labels=[\"Tiny\", \"Small\", \"Big\"])\nprint(orders.groupby(\"band\").size())",
   "fixed": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\norders[\"band\"] = pd.cut(orders[\"amount\"], bins=[0, 40, 200, 1000], labels=[\"Tiny\", \"Small\", \"Big\"])\nprint(orders.groupby(\"band\", observed=True).size())",
   "e": "A `pd.cut` column is a category column. Without `observed=True`, empty bands like Tiny are kept and Pandas prints a FutureWarning.",
   "want": "band\nSmall    3\nBig      4\ndtype: int64",
   "got": "band\nTiny     0\nSmall    3\nBig      4\ndtype: int64\n<string>:9: FutureWarning: The default of observed=False is deprecated and will be changed to True in a future version of pandas. Pass observed=False to retain current behavior or observed=True to adopt the future default and silence this warning."
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "agg: many summaries at once",
   "q": "Write `def spread(x)` that returns the biggest minus the smallest value. For each item, print the `spread` and the `mean` of `amount`, using named aggregation.",
   "starter": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\n",
   "sol": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\ndef spread(x):\n    return x.max() - x.min()\n\nprint(orders.groupby(\"item\").agg(spread=(\"amount\", spread), mean=(\"amount\", \"mean\")))",
   "e": "Your own function gets each group's values as a Series.",
   "out": "        spread   mean\nitem                 \nCoffee     360  420.0\nTea        250  192.0"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "transform and assign",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\norders = pd.DataFrame({\n    \"store\": [\"Pune\", \"Delhi\", \"Pune\", \"Goa\", \"Delhi\", \"Pune\", \"Goa\"],\n    \"item\": [\"Tea\", \"Coffee\", \"Coffee\", \"Tea\", \"Tea\", \"Tea\", \"Tea\"],\n    \"qty\": [3, 5, 2, 4, 1, 6, 2],\n    \"amount\": [150, 600, 240, 200, 50, 300, 260]\n})\nprint(orders.groupby(\"item\")[\"qty\"].transform(\"max\").tolist())",
   "e": "Each order gets the biggest qty of its item: Tea 6, Coffee 5.",
   "ans": "[6, 5, 5, 6, 6, 6, 6]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "groupby: split, apply, combine",
   "q": "Read `sales_data.csv`. Keep only the `Groceries` orders, then print the total sales of each month (use `.dt.to_period(\"M\")`) and the best month.",
   "starter": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\ngroc = sales[sales[\"Category\"] == \"Groceries\"]\nmonthly = groc.groupby(groc[\"Date\"].dt.to_period(\"M\"))[\"Sales\"].sum()\nprint(monthly)\nprint(\"Best month:\", monthly.idxmax())",
   "e": "Filter first, then group the dates by month.",
   "out": "Date\n2024-01     5703\n2024-02     3153\n2024-03     7520\n2024-04     6481\n2024-05     6761\n2024-06     5615\n2024-07     7957\n2024-08     9089\n2024-09    10274\n2024-10    16711\n2024-11    21063\n2024-12     9589\nFreq: M, Name: Sales, dtype: int64\nBest month: 2024-11"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "concat: stacking tables",
   "q": "After stacking the two weeks, this code should print the amount in row 2 of the new table (`700`), but it raises a KeyError. Fix the stacking line.",
   "c": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\nboth = pd.concat([w1, w2])\nprint(both.loc[2, \"amount\"])",
   "fixed": "import pandas as pd\nw1 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [500, 650]})\nw2 = pd.DataFrame({\"day\": [\"Mon\", \"Tue\"], \"amount\": [700, 480]})\nboth = pd.concat([w1, w2], ignore_index=True)\nprint(both.loc[2, \"amount\"])",
   "e": "Without `ignore_index=True` the labels are 0, 1, 0, 1, so there is no label 2.",
   "want": "700",
   "got": "KeyError: 2"
  }
 ],
 "mpl1": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "Line charts: change over time",
   "q": "Draw a line chart of the weekly sales `[230, 260, 245, 310]` for the weeks `[\"W1\", \"W2\", \"W3\", \"W4\"]` with round markers, and the title `Weekly sales`.",
   "starter": "import matplotlib.pyplot as plt\nweeks = [\"W1\", \"W2\", \"W3\", \"W4\"]\nsales = [230, 260, 245, 310]\n",
   "sol": "import matplotlib.pyplot as plt\nweeks = [\"W1\", \"W2\", \"W3\", \"W4\"]\nsales = [230, 260, 245, 310]\nplt.plot(weeks, sales, marker=\"o\")\nplt.title(\"Weekly sales\")\nplt.show()",
   "e": "`plt.plot(x, y, marker=\"o\")` joins the points in order and puts a dot on each.",
   "chart": {
    "kind": "line",
    "lines": 1,
    "title": "Weekly sales",
    "xticks": [
     "W1",
     "W2",
     "W3",
     "W4"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Weekly sales' x='' y='' leg=None xt=['W1', 'W2', 'W3', 'W4'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-1.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Bar charts: compare categories",
   "q": "This should be a **bar chart** comparing the three shops, but it draws a line. Fix it.",
   "c": "import matplotlib.pyplot as plt\nplt.plot([\"Ameerpet\", \"Kukatpally\", \"Gachibowli\"], [42, 35, 58])\nplt.title(\"Orders per shop\")\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nplt.bar([\"Ameerpet\", \"Kukatpally\", \"Gachibowli\"], [42, 35, 58])\nplt.title(\"Orders per shop\")\nplt.show()",
   "e": "Categories are compared with bars: `plt.bar(names, values)`. A line suggests an order in time that shops do not have.",
   "chart": {
    "kind": "bar",
    "bars": 3,
    "title": true
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=3 t='Orders per shop' x='' y='' leg=None xt=['Ameerpet', 'Kukatpally', 'Gachibowli'] h=[42.0, 35.0, 58.0] tx=0",
   "img": [
    "img/bt-mpl1-2.webp"
   ],
   "got": "Expected a bar chart (bar), but found: line chart (plot).\nExpected 3 bars, found 0."
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Bar charts: compare categories",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nbars = plt.bar([\"A\", \"B\", \"C\", \"D\"], [4, 7, 2, 5])\nprint(len(bars), bars[2].get_height())",
   "e": "`plt.bar` returns one bar per value. The third bar (index 2) is 2 tall.",
   "ans": "4 2"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Histograms: how values are spread",
   "q": "`waits = [3, 5, 6, 8, 9, 10, 12, 13, 15, 21]` are minutes customers waited. Draw a histogram with **4 bins** and the x label `Minutes`.",
   "starter": "import matplotlib.pyplot as plt\nwaits = [3, 5, 6, 8, 9, 10, 12, 13, 15, 21]\n",
   "sol": "import matplotlib.pyplot as plt\nwaits = [3, 5, 6, 8, 9, 10, 12, 13, 15, 21]\nplt.hist(waits, bins=4, edgecolor=\"black\")\nplt.xlabel(\"Minutes\")\nplt.show()",
   "e": "`bins=4` cuts the range from 3 to 21 into 4 equal parts.",
   "chart": {
    "kind": "hist",
    "bars": 4,
    "xlabel": "Minutes"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 hist bars=4 t='' x='Minutes' y='' leg=None xt=['0.0', '2.5', '5.0', '7.5', '10.0', '12.5', '15.0', '17.5', '20.0', '22.5'] h=[3.0, 3.0, 3.0, 1.0] tx=0",
   "img": [
    "img/bt-mpl1-4.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Line charts: change over time",
   "q": "This chart should have a legend with **Tea** and **Coffee**, but no legend appears. Fix the two plot lines.",
   "c": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\"]\nplt.plot(days, [120, 95, 140])\nplt.plot(days, [80, 90, 70])\nplt.legend()\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\"]\nplt.plot(days, [120, 95, 140], label=\"Tea\")\nplt.plot(days, [80, 90, 70], label=\"Coffee\")\nplt.legend()\nplt.show()",
   "e": "A legend lists the `label=` of each series. Without labels there is nothing to list, and Matplotlib warns you.",
   "chart": {
    "kind": "line",
    "lines": 2,
    "legend": [
     "Tea",
     "Coffee"
    ]
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=2 t='' x='' y='' leg=['Tea', 'Coffee'] xt=['Mon', 'Tue', 'Wed'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-5.webp"
   ],
   "got": "No artists with labels found to put in legend.  Note that artists whose label start with an underscore are ignored when legend() is called with no argument."
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Pie charts: share of a whole",
   "q": "Draw a pie chart of the expenses `[45, 30, 25]` labelled `[\"Rent\", \"Food\", \"Travel\"]`, with the percent and 1 decimal on every slice.",
   "starter": "import matplotlib.pyplot as plt\nspend = [45, 30, 25]\nnames = [\"Rent\", \"Food\", \"Travel\"]\n",
   "sol": "import matplotlib.pyplot as plt\nspend = [45, 30, 25]\nnames = [\"Rent\", \"Food\", \"Travel\"]\nplt.pie(spend, labels=names, autopct=\"%1.1f%%\")\nplt.show()",
   "e": "`autopct=\"%1.1f%%\"` writes each share with 1 decimal and a % sign.",
   "chart": {
    "kind": "pie",
    "wedges": 3,
    "text_has": "45.0%"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 pie wedges=3 t='' x='' y='' leg=None xt=[] h=[] tx=6",
   "img": [
    "img/bt-mpl1-6.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Histograms: how values are spread",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\ncounts, edges, bars = plt.hist([1, 2, 2, 3, 3, 3], bins=3)\nprint(counts.tolist())",
   "e": "3 equal bins from 1 to 3: one 1, two 2s, three 3s.",
   "ans": "[1.0, 2.0, 3.0]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Scatter plots: are two numbers related?",
   "q": "Draw a scatter plot of `hours = [1, 2, 3, 4, 5, 6]` (x) against `marks = [35, 48, 55, 61, 72, 80]` (y), with both axis labels.",
   "starter": "import matplotlib.pyplot as plt\nhours = [1, 2, 3, 4, 5, 6]\nmarks = [35, 48, 55, 61, 72, 80]\n",
   "sol": "import matplotlib.pyplot as plt\nhours = [1, 2, 3, 4, 5, 6]\nmarks = [35, 48, 55, 61, 72, 80]\nplt.scatter(hours, marks)\nplt.xlabel(\"Study hours\")\nplt.ylabel(\"Marks\")\nplt.show()",
   "e": "One dot per student; the dots climb, so more study goes with higher marks.",
   "chart": {
    "kind": "scatter",
    "points": 6,
    "xlabel": true,
    "ylabel": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 scatter points=6 t='' x='Study hours' y='Marks' leg=None xt=['0', '1', '2', '3', '4', '5', '6', '7'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-8.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Bar charts: compare categories",
   "q": "`rooms = {\"Deluxe\": 42, \"Suite\": 9, \"Standard\": 65, \"Family\": 23}`. Draw **horizontal** bars sorted from smallest to largest (so the biggest is at the top), with an x label.",
   "starter": "import matplotlib.pyplot as plt\nrooms = {\"Deluxe\": 42, \"Suite\": 9, \"Standard\": 65, \"Family\": 23}\n",
   "sol": "import matplotlib.pyplot as plt\nrooms = {\"Deluxe\": 42, \"Suite\": 9, \"Standard\": 65, \"Family\": 23}\nnames = sorted(rooms, key=rooms.get)\nplt.barh(names, [rooms[n] for n in names])\nplt.xlabel(\"Rooms booked\")\nplt.show()",
   "e": "`barh` draws the first item at the bottom, so sorting from small to large puts the biggest on top.",
   "chart": {
    "kind": "barh",
    "heights": [
     9,
     23,
     42,
     65
    ],
    "xlabel": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 barh bars=4 t='' x='Rooms booked' y='' leg=None xt=['0', '10', '20', '30', '40', '50', '60', '70'] h=[9.0, 23.0, 42.0, 65.0] tx=0",
   "img": [
    "img/bt-mpl1-9.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Line charts: change over time",
   "q": "Plot the monthly rainfall of two cities for `[\"Jun\", \"Jul\", \"Aug\"]`: Mumbai `[500, 840, 590]` with a solid line and Chennai `[50, 90, 120]` with a dashed line. Add a legend.",
   "starter": "import matplotlib.pyplot as plt\nmonths = [\"Jun\", \"Jul\", \"Aug\"]\n",
   "sol": "import matplotlib.pyplot as plt\nmonths = [\"Jun\", \"Jul\", \"Aug\"]\nplt.plot(months, [500, 840, 590], label=\"Mumbai\")\nplt.plot(months, [50, 90, 120], linestyle=\"--\", label=\"Chennai\")\nplt.legend()\nplt.title(\"Monsoon rainfall (mm)\")\nplt.show()",
   "e": "Two `plot` calls draw two lines; the `label=` values fill the legend.",
   "chart": {
    "kind": "line",
    "lines": 2,
    "legend": [
     "Mumbai",
     "Chennai"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=2 t='Monsoon rainfall (mm)' x='' y='' leg=['Mumbai', 'Chennai'] xt=['Jun', 'Jul', 'Aug'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-10.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Histograms: how values are spread",
   "q": "This code should draw a histogram of the marks with 5 bins, but it stops with a TypeError. Fix it.",
   "c": "import matplotlib.pyplot as plt\nmarks = [35, 42, 48, 55, 58, 61, 63, 67, 70, 72, 81, 88]\nplt.bar(marks, bins=5)\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nmarks = [35, 42, 48, 55, 58, 61, 63, 67, 70, 72, 81, 88]\nplt.hist(marks, bins=5)\nplt.show()",
   "e": "`plt.bar` needs categories and heights. To count raw numbers into ranges, use `plt.hist(values, bins=5)`.",
   "chart": {
    "kind": "hist",
    "bars": 5
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 hist bars=5 t='' x='' y='' leg=None xt=['30', '40', '50', '60', '70', '80', '90', '100'] h=[2.0, 2.0, 3.0, 3.0, 2.0] tx=0",
   "img": [
    "img/bt-mpl1-11.webp"
   ],
   "got": "TypeError: bar() missing 1 required positional argument: 'height'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Bar charts: compare categories",
   "q": "Draw **grouped** bars for the regions `[\"North\", \"South\", \"East\"]`: 2023 sales `[40, 55, 30]` and 2024 sales `[48, 60, 35]`. Shift them by 0.2 with width 0.4, put the region names under the groups and add a legend.",
   "starter": "import matplotlib.pyplot as plt\nimport numpy as np\nregions = [\"North\", \"South\", \"East\"]\n",
   "sol": "import matplotlib.pyplot as plt\nimport numpy as np\nregions = [\"North\", \"South\", \"East\"]\nx = np.arange(len(regions))\nplt.bar(x - 0.2, [40, 55, 30], width=0.4, label=\"2023\")\nplt.bar(x + 0.2, [48, 60, 35], width=0.4, label=\"2024\")\nplt.xticks(x, regions)\nplt.legend()\nplt.show()",
   "e": "Shifting each series half a bar left or right puts them side by side; `plt.xticks(x, regions)` names the groups.",
   "chart": {
    "kind": "bar",
    "bars": 6,
    "xticks": [
     "North",
     "South",
     "East"
    ],
    "legend": [
     "2023",
     "2024"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=6 t='' x='' y='' leg=['2023', '2024'] xt=['North', 'South', 'East'] h=[40.0, 55.0, 30.0, 48.0, 60.0, 35.0] tx=0",
   "img": [
    "img/bt-mpl1-12.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Line charts: change over time",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nlines = plt.plot([1, 2], [3, 4], [1, 2], [4, 3], [1, 2], [5, 5])\nprint(len(lines))",
   "e": "Three x/y pairs in one `plot()` call draw three lines.",
   "ans": "3"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Bar charts: compare categories",
   "q": "Draw **stacked** bars for `[\"Q1\", \"Q2\", \"Q3\"]`: online sales `[30, 42, 51]` with shop sales `[25, 22, 28]` on top of them. Add a legend.",
   "starter": "import matplotlib.pyplot as plt\nquarters = [\"Q1\", \"Q2\", \"Q3\"]\nonline = [30, 42, 51]\nshop = [25, 22, 28]\n",
   "sol": "import matplotlib.pyplot as plt\nquarters = [\"Q1\", \"Q2\", \"Q3\"]\nonline = [30, 42, 51]\nshop = [25, 22, 28]\nplt.bar(quarters, online, label=\"Online\")\nplt.bar(quarters, shop, bottom=online, label=\"Shop\")\nplt.legend()\nplt.show()",
   "e": "`bottom=online` starts each shop bar where the online bar ends.",
   "chart": {
    "kind": "bar",
    "bars": 6,
    "legend": [
     "Online",
     "Shop"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=6 t='' x='' y='' leg=['Online', 'Shop'] xt=['Q1', 'Q2', 'Q3'] h=[30.0, 42.0, 51.0, 25.0, 22.0, 28.0] tx=0",
   "img": [
    "img/bt-mpl1-14.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Box plots: spread and outliers",
   "q": "Draw one box plot for each of three batches, `a = [55, 60, 62, 65, 70, 90]`, `b = [40, 45, 52, 58, 61]` and `c = [70, 72, 75, 78, 80, 82]`, with the names `Batch A`, `Batch B`, `Batch C` under the boxes.",
   "starter": "import matplotlib.pyplot as plt\na = [55, 60, 62, 65, 70, 90]\nb = [40, 45, 52, 58, 61]\nc = [70, 72, 75, 78, 80, 82]\n",
   "sol": "import matplotlib.pyplot as plt\na = [55, 60, 62, 65, 70, 90]\nb = [40, 45, 52, 58, 61]\nc = [70, 72, 75, 78, 80, 82]\nplt.boxplot([a, b, c])\nplt.xticks([1, 2, 3], [\"Batch A\", \"Batch B\", \"Batch C\"])\nplt.show()",
   "e": "Give `boxplot` a list of groups; the boxes stand at x = 1, 2, 3, which `xticks` names.",
   "chart": {
    "kind": "box",
    "boxes": 3,
    "xticks": [
     "Batch A",
     "Batch B",
     "Batch C"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 box boxes=3 t='' x='' y='' leg=None xt=['Batch A', 'Batch B', 'Batch C'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-15.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Pie charts: share of a whole",
   "q": "This pie chart should show each share as a percent, like `40.0%`, but the labels show plain numbers. Fix the format.",
   "c": "import matplotlib.pyplot as plt\nplt.pie([40, 35, 25], labels=[\"UPI\", \"Card\", \"Cash\"], autopct=\"%1.1f\")\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nplt.pie([40, 35, 25], labels=[\"UPI\", \"Card\", \"Cash\"], autopct=\"%1.1f%%\")\nplt.show()",
   "e": "`%%` prints a real % sign after the number.",
   "chart": {
    "kind": "pie",
    "wedges": 3,
    "text_has": "40.0%"
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 pie wedges=3 t='' x='' y='' leg=None xt=[] h=[] tx=6",
   "img": [
    "img/bt-mpl1-16.webp"
   ],
   "got": "No text on the chart contains '40.0%'."
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Scatter plots: are two numbers related?",
   "q": "Draw a scatter of `price = [100, 150, 200, 250, 300]` (x) against `units = [90, 70, 52, 40, 25]` (y), coloured by `rating = [4.5, 4.2, 3.9, 3.5, 3.1]` with `cmap=\"viridis\"`, and add a colour bar labelled `Rating`.",
   "starter": "import matplotlib.pyplot as plt\nprice = [100, 150, 200, 250, 300]\nunits = [90, 70, 52, 40, 25]\nrating = [4.5, 4.2, 3.9, 3.5, 3.1]\n",
   "sol": "import matplotlib.pyplot as plt\nprice = [100, 150, 200, 250, 300]\nunits = [90, 70, 52, 40, 25]\nrating = [4.5, 4.2, 3.9, 3.5, 3.1]\nplt.scatter(price, units, c=rating, cmap=\"viridis\")\nplt.colorbar(label=\"Rating\")\nplt.show()",
   "e": "`c=` colours each dot by a third value and `plt.colorbar()` explains the colours.",
   "chart": {
    "kind": "scatter",
    "points": 5,
    "colorbar": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 scatter points=5 t='' x='' y='' leg=None xt=['75', '100', '125', '150', '175', '200', '225', '250', '275', '300', '325'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-17.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Saving a chart: savefig",
   "q": "Draw a bar chart of `[\"Mon\", \"Tue\"]` and `[12, 18]`, save it as `days.png` with `dpi=120`, show it, and then print whether the file exists (use `os.path.exists`).",
   "starter": "import matplotlib.pyplot as plt\nimport os\n",
   "sol": "import matplotlib.pyplot as plt\nimport os\nplt.bar([\"Mon\", \"Tue\"], [12, 18])\nplt.savefig(\"days.png\", dpi=120)\nplt.show()\nprint(os.path.exists(\"days.png\"))",
   "e": "Save first, then show: `show()` finishes the chart.",
   "chart": {
    "kind": "bar",
    "bars": 2
   },
   "out": "True",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=2 t='' x='' y='' leg=None xt=['Mon', 'Tue'] h=[12.0, 18.0] tx=0",
   "img": [
    "img/bt-mpl1-18.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Bar charts: compare categories",
   "q": "From `sales_data.csv`, draw a bar chart of the **average** satisfaction score per region, highest first, with a title and a y label.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\navg = sales.groupby(\"Region\")[\"Satisfaction_Score\"].mean().sort_values(ascending=False)\nplt.bar(avg.index, avg.values)\nplt.title(\"Average satisfaction by region\")\nplt.ylabel(\"Score (1 to 5)\")\nplt.show()",
   "e": "Group, sort, then draw the sorted Series: its index gives the names and its values the heights.",
   "chart": {
    "kind": "bar",
    "bars": 4,
    "title": true,
    "ylabel": true,
    "xticks": [
     "West",
     "North",
     "South",
     "East"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='Average satisfaction by region' x='' y='Score (1 to 5)' leg=None xt=['West', 'North', 'South', 'East'] h=[4.002, 3.885, 3.865, 3.83] tx=0",
   "img": [
    "img/bt-mpl1-19.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Line charts: change over time",
   "q": "From `sales_data.csv`, draw the **number of Clothing orders** in each month as a line with markers, with the short month names on the x-axis and a title.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\ncloth = sales[sales[\"Category\"] == \"Clothing\"]\ncounts = cloth.groupby(cloth[\"Date\"].dt.to_period(\"M\")).size()\nplt.plot(counts.index.strftime(\"%b\"), counts.values, marker=\"o\")\nplt.title(\"Clothing orders per month\")\nplt.show()",
   "e": "Filter first, then group by month and count with `size()`.",
   "chart": {
    "kind": "line",
    "lines": 1,
    "title": true,
    "xticks": [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Clothing orders per month' x='' y='' leg=None xt=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-20.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Box plots: spread and outliers",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.percentile([2, 4, 6, 8, 10], [25, 50, 75]).tolist())",
   "e": "These are the three lines of a box plot: Q1 (25%), the median and Q3 (75%). The IQR is 8 - 4 = 4.",
   "ans": "[4.0, 6.0, 8.0]"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Saving a chart: savefig",
   "q": "This code should save a picture of the chart. It saves a file, but the file is an empty white picture, so it prints `False`. Fix the order.",
   "c": "import matplotlib.pyplot as plt\nimport os\nplt.bar([\"A\", \"B\", \"C\"], [3, 7, 5])\nplt.title(\"Saved chart\")\nplt.show()\nplt.savefig(\"saved.png\")\nprint(os.path.getsize(\"saved.png\") > 6000)",
   "fixed": "import matplotlib.pyplot as plt\nimport os\nplt.bar([\"A\", \"B\", \"C\"], [3, 7, 5])\nplt.title(\"Saved chart\")\nplt.savefig(\"saved.png\")\nplt.show()\nprint(os.path.getsize(\"saved.png\") > 6000)",
   "e": "`show()` finishes the chart, so a later `savefig()` saves a new empty figure. Save first.",
   "chart": {
    "kind": "bar",
    "bars": 3
   },
   "want": "True",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=3 t='Saved chart' x='' y='' leg=None xt=['A', 'B', 'C'] h=[3.0, 7.0, 5.0] tx=0",
   "img": [
    "img/bt-mpl1-22.webp"
   ],
   "got": "False"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Pie charts: share of a whole",
   "q": "From `sales_data.csv`, draw a pie of the **number of orders** per region with percents (1 decimal), starting at the top (`startangle=90`), and pull the South slice out by 0.1. The regions come out A to Z: East, North, South, West.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\ncounts = sales.groupby(\"Region\").size()\nplt.pie(counts.values, labels=counts.index, autopct=\"%1.1f%%\", startangle=90, explode=[0, 0, 0.1, 0])\nplt.title(\"Orders by region\")\nplt.show()",
   "e": "`explode` takes one value per slice, in the same order as the data.",
   "chart": {
    "kind": "pie",
    "wedges": 4,
    "text_has": "%"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 pie wedges=4 t='Orders by region' x='' y='' leg=None xt=[] h=[] tx=8",
   "img": [
    "img/bt-mpl1-23.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "The 5-step recipe for every chart",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nfig = plt.figure(figsize=(8, 3))\nprint(fig.get_size_inches().tolist())\nplt.close()",
   "e": "`figsize` is (width, height) in inches.",
   "ans": "[8.0, 3.0]"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Which chart for which question",
   "q": "Daily footfall for a week is `[320, 280, 300, 410, 520, 760, 690]` (Mon to Sun). Draw it as a **line** with markers, and add a **red dot** on the busiest day with `plt.scatter`. Add a title.",
   "starter": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"]\nfootfall = [320, 280, 300, 410, 520, 760, 690]\n",
   "sol": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"]\nfootfall = [320, 280, 300, 410, 520, 760, 690]\nbusiest = footfall.index(max(footfall))\nplt.plot(days, footfall, marker=\"o\")\nplt.scatter([days[busiest]], [footfall[busiest]], color=\"red\", s=120)\nplt.title(\"Footfall this week\")\nplt.show()",
   "e": "Two chart types on one axes: the line shows the trend and one scatter dot calls out the peak.",
   "chart": {
    "kind": [
     "line",
     "scatter"
    ],
    "lines": 1,
    "points": 1,
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+scatter lines=1 points=1 t='Footfall this week' x='' y='' leg=None xt=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] h=[] tx=0",
   "img": [
    "img/bt-mpl1-25.webp"
   ]
  }
 ],
 "mpl2": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "Figure and axes: the object way",
   "q": "Using `fig, ax = plt.subplots()`, draw a bar chart of `[\"Tea\", \"Coffee\", \"Juice\"]` and `[120, 80, 45]`, with a title and a y label set through `ax`.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar([\"Tea\", \"Coffee\", \"Juice\"], [120, 80, 45])\nax.set_title(\"Drinks sold\")\nax.set_ylabel(\"Cups\")\nplt.show()",
   "e": "On an axes, labels use `set_title`, `set_xlabel` and `set_ylabel`.",
   "chart": {
    "kind": "bar",
    "bars": 3,
    "title": true,
    "ylabel": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=3 t='Drinks sold' x='' y='Cups' leg=None xt=['Tea', 'Coffee', 'Juice'] h=[120.0, 80.0, 45.0] tx=0",
   "img": [
    "img/bt-mpl2-1.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Figure and axes: the object way",
   "q": "This code should give the chart the title `Visitors`, but it stops with a TypeError. Fix it.",
   "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 30, 20])\nax.title(\"Visitors\")\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 30, 20])\nax.set_title(\"Visitors\")\nplt.show()",
   "e": "`ax.title` is the title text object, not a function. Set it with `ax.set_title(...)`.",
   "chart": {
    "kind": "line",
    "title": "Visitors"
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Visitors' x='' y='' leg=None xt=['0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25', '2.50', '2.75', '3.00', '3.25'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-2.webp"
   ],
   "got": "TypeError: 'Text' object is not callable"
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Several charts in one figure: subplots",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 3)\nprint(axes.shape)\nplt.close()",
   "e": "2 rows and 3 columns of charts: a NumPy array of shape (2, 3).",
   "ans": "(2, 3)"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Several charts in one figure: subplots",
   "q": "Make **1 row of 2 charts**: a line of `[4, 6, 5, 8]` on the left and a bar chart of `[\"A\", \"B\"]` and `[3, 5]` on the right. Give each chart a title.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([4, 6, 5, 8])\naxes[0].set_title(\"Trend\")\naxes[1].bar([\"A\", \"B\"], [3, 5])\naxes[1].set_title(\"Compare\")\nplt.tight_layout()\nplt.show()",
   "e": "With one row, pick each chart with `axes[0]` and `axes[1]`.",
   "chart": {
    "axes": 2,
    "ax": [
     {
      "kind": "line",
      "title": true
     },
     {
      "kind": "bar",
      "bars": 2,
      "title": true
     }
    ]
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Trend' x='' y='' leg=None xt=['−1', '0', '1', '2', '3', '4'] h=[] tx=0\n#ax2 bar bars=2 t='Compare' x='' y='' leg=None xt=['A', 'B'] h=[3.0, 5.0] tx=0",
   "img": [
    "img/bt-mpl2-4.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Spines, ticks and number formats",
   "q": "Draw a line of `[3, 5, 4, 6]` with `fig, ax = plt.subplots()` and hide the **top** and **right** spines.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([3, 5, 4, 6])\nax.spines[\"top\"].set_visible(False)\nax.spines[\"right\"].set_visible(False)\nplt.show()",
   "e": "Each of the four border lines is a spine you can hide.",
   "chart": {
    "kind": "line",
    "spines": {
     "top": false,
     "right": false
    }
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-5.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Value labels and annotations",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nbars = ax.bar([\"a\", \"b\"], [3, 5])\ntexts = ax.bar_label(bars)\nprint(len(texts), texts[1].get_text())\nplt.close()",
   "e": "`bar_label` adds one text per bar and returns them; the second one shows 5.",
   "ans": "2 5"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Heatmaps with imshow",
   "q": "Show `grid = [[1, 2, 3], [4, 5, 6]]` as a heatmap with `plt.imshow` and `cmap=\"Blues\"`, and add a colour bar.",
   "starter": "import matplotlib.pyplot as plt\ngrid = [[1, 2, 3], [4, 5, 6]]\n",
   "sol": "import matplotlib.pyplot as plt\ngrid = [[1, 2, 3], [4, 5, 6]]\nplt.imshow(grid, cmap=\"Blues\")\nplt.colorbar()\nplt.show()",
   "e": "`imshow` colours every cell; `colorbar()` says which colour means which value.",
   "chart": {
    "kind": "image",
    "colorbar": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 image images=1 t='' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-7.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Several charts in one figure: subplots",
   "q": "This dashboard should have one title over both charts, but it stops with an AttributeError. Fix the title line.",
   "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1, 2, 3])\naxes[1].bar([\"x\", \"y\"], [2, 4])\nfig.title(\"Dashboard\")\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1, 2, 3])\naxes[1].bar([\"x\", \"y\"], [2, 4])\nfig.suptitle(\"Dashboard\")\nplt.show()",
   "e": "A figure has no `title()`. Its title over all the charts is `fig.suptitle()`.",
   "chart": {
    "axes": 2,
    "suptitle": "Dashboard"
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='Dashboard' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5'] h=[] tx=0\n#ax2 bar bars=2 t='' x='' y='' leg=None xt=['x', 'y'] h=[2.0, 4.0] tx=0",
   "img": [
    "img/bt-mpl2-8.webp"
   ],
   "got": "AttributeError: 'Figure' object has no attribute 'title'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Several charts in one figure: subplots",
   "q": "Make a **2 × 2** grid: a line, a bar chart, a histogram and a scatter (any small data), each with a title, and the figure title `Four charts`.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 2, figsize=(8, 6))\naxes[0, 0].plot([1, 3, 2, 4])\naxes[0, 0].set_title(\"Line\")\naxes[0, 1].bar([\"a\", \"b\", \"c\"], [3, 1, 2])\naxes[0, 1].set_title(\"Bar\")\naxes[1, 0].hist([1, 2, 2, 3, 3, 3], bins=3)\naxes[1, 0].set_title(\"Histogram\")\naxes[1, 1].scatter([1, 2, 3], [3, 1, 2])\naxes[1, 1].set_title(\"Scatter\")\nfig.suptitle(\"Four charts\")\nplt.tight_layout()\nplt.show()",
   "e": "Row and column both count from 0: the scatter goes in `axes[1, 1]`.",
   "chart": {
    "axes": 4,
    "suptitle": "Four charts",
    "ax": [
     {
      "kind": "line",
      "title": true
     },
     {
      "kind": "bar",
      "title": true
     },
     {
      "kind": "hist",
      "title": true
     },
     {
      "kind": "scatter",
      "title": true
     }
    ]
   },
   "out": "",
   "sum": "#fig1 axes=4 sup='Four charts' cbar=0 leg=None\n#ax1 line lines=1 t='Line' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5'] h=[] tx=0\n#ax2 bar bars=3 t='Bar' x='' y='' leg=None xt=['a', 'b', 'c'] h=[3.0, 1.0, 2.0] tx=0\n#ax3 hist bars=3 t='Histogram' x='' y='' leg=None xt=['0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5'] h=[1.0, 2.0, 3.0] tx=0\n#ax4 scatter points=3 t='Scatter' x='' y='' leg=None xt=['0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-9.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Value labels and annotations",
   "q": "Draw bars for `[\"Jan\", \"Feb\", \"Mar\"]` with `[12500, 9800, 14350]` and write each value on its bar with `ax.bar_label` and the format `\"{:,}\"`.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nbars = ax.bar([\"Jan\", \"Feb\", \"Mar\"], [12500, 9800, 14350])\nax.bar_label(bars, fmt=\"{:,}\")\nplt.show()",
   "e": "`fmt=\"{:,}\"` adds thousands separators to every label.",
   "chart": {
    "kind": "bar",
    "bars": 3,
    "texts": 3,
    "text_has": "14,350"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar+annotate bars=3 t='' x='' y='' leg=None xt=['Jan', 'Feb', 'Mar'] h=[12500.0, 9800.0, 14350.0] tx=3",
   "img": [
    "img/bt-mpl2-10.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Value labels and annotations",
   "q": "Plot `[220, 310, 290, 450, 380]` as a line for the days Mon to Fri, and point at the highest value with `ax.annotate(\"Peak\", ...)` and an arrow.",
   "starter": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\"]\nvisits = [220, 310, 290, 450, 380]\n",
   "sol": "import matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\"]\nvisits = [220, 310, 290, 450, 380]\npeak = visits.index(max(visits))\nfig, ax = plt.subplots()\nax.plot(days, visits, marker=\"o\")\nax.annotate(\"Peak\", xy=(peak, visits[peak]), xytext=(peak - 2, visits[peak] - 40), arrowprops=dict(arrowstyle=\"->\"))\nplt.show()",
   "e": "`xy` is the point (its position 3, and 450), `xytext` is where the words go.",
   "chart": {
    "kind": [
     "line",
     "annotate"
    ],
    "text_has": "Peak"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+annotate lines=1 t='' x='' y='' leg=None xt=['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] h=[] tx=1",
   "img": [
    "img/bt-mpl2-11.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Two y-axes with twinx",
   "q": "This chart should show sales on the left axis and orders on a **second** y-axis on the right, but both lines end up on the left. Fix it.",
   "c": "import matplotlib.pyplot as plt\nmonths = [\"Jan\", \"Feb\", \"Mar\"]\nfig, ax1 = plt.subplots()\nax1.plot(months, [40000, 52000, 61000], color=\"tab:blue\")\nax2 = ax1.twinx()\nax1.plot(months, [120, 150, 135], color=\"tab:red\")\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nmonths = [\"Jan\", \"Feb\", \"Mar\"]\nfig, ax1 = plt.subplots()\nax1.plot(months, [40000, 52000, 61000], color=\"tab:blue\")\nax2 = ax1.twinx()\nax2.plot(months, [120, 150, 135], color=\"tab:red\")\nplt.show()",
   "e": "`twinx()` makes the second axes, but you must draw on it: `ax2.plot(...)`.",
   "chart": {
    "axes": 2,
    "ax": [
     {
      "lines": 1
     },
     {
      "lines": 1
     }
    ]
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['Jan', 'Feb', 'Mar'] h=[] tx=0\n#ax2 line lines=1 t='' x='' y='' leg=None xt=['Jan', 'Feb', 'Mar'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-12.webp"
   ],
   "got": "Chart 1: Expected 1 line, found 2.\nChart 2: Expected 1 line, found 0."
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Trend lines with polyfit",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nprint(np.polyfit([0, 1, 2, 3], [3, 5, 7, 9], 1).round(2))",
   "e": "The points lie on y = 2x + 3, so the slope is 2 and the intercept 3.",
   "ans": "[2. 3.]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Two y-axes with twinx",
   "q": "Plot sales `[40000, 52000, 61000]` and orders `[120, 150, 135]` for `[\"Jan\", \"Feb\", \"Mar\"]` with two y-axes (`twinx`), and label both y-axes.",
   "starter": "import matplotlib.pyplot as plt\nmonths = [\"Jan\", \"Feb\", \"Mar\"]\n",
   "sol": "import matplotlib.pyplot as plt\nmonths = [\"Jan\", \"Feb\", \"Mar\"]\nfig, ax1 = plt.subplots()\nax1.plot(months, [40000, 52000, 61000], color=\"tab:blue\")\nax1.set_ylabel(\"Sales (₹)\")\nax2 = ax1.twinx()\nax2.plot(months, [120, 150, 135], color=\"tab:red\")\nax2.set_ylabel(\"Orders\")\nplt.show()",
   "e": "Each axes has its own y label: the left one on `ax1`, the right one on `ax2`.",
   "chart": {
    "axes": 2,
    "ax": [
     {
      "lines": 1,
      "ylabel": true
     },
     {
      "lines": 1,
      "ylabel": true
     }
    ]
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='Sales (₹)' leg=None xt=['Jan', 'Feb', 'Mar'] h=[] tx=0\n#ax2 line lines=1 t='' x='' y='Orders' leg=None xt=['Jan', 'Feb', 'Mar'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-14.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Colours, style sheets and legends",
   "q": "Use the `\"ggplot\"` style for a chart with two lines, `[1, 3, 2]` labelled `2024` and `[2, 2, 3]` labelled `2025`, and a legend with the title `Year`.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nplt.style.use(\"ggplot\")\nplt.plot([1, 3, 2], label=\"2024\")\nplt.plot([2, 2, 3], label=\"2025\")\nplt.legend(title=\"Year\")\nplt.show()\nplt.style.use(\"default\")",
   "e": "The ggplot style turns on a grid and a grey background; switch back with `plt.style.use(\"default\")`.",
   "chart": {
    "kind": "line",
    "lines": 2,
    "legend": [
     "2024",
     "2025"
    ],
    "grid": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=2 t='' x='' y='' leg=['2024', '2025'] xt=['−0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', '2.25'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-15.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Spines, ticks and number formats",
   "q": "Draw bars for `[\"Q1\", \"Q2\", \"Q3\"]` with `[150000, 210000, 185000]` and show the y-axis numbers in rupees with commas, like `₹150,000`, using `plt.FuncFormatter`.",
   "starter": "import matplotlib.pyplot as plt\n",
   "sol": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar([\"Q1\", \"Q2\", \"Q3\"], [150000, 210000, 185000])\nax.yaxis.set_major_formatter(plt.FuncFormatter(lambda value, pos: f\"₹{value:,.0f}\"))\nplt.show()",
   "e": "The formatter function gets each tick value and returns the text to show.",
   "chart": {
    "kind": "bar",
    "bars": 3,
    "ytick_has": "₹"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=3 t='' x='' y='' leg=None xt=['Q1', 'Q2', 'Q3'] h=[150000.0, 210000.0, 185000.0] tx=0",
   "img": [
    "img/bt-mpl2-16.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Heatmaps with imshow",
   "q": "This heatmap should have the names `Sales`, `Profit` and `Age` on both axes, but it shows the numbers 0, 1, 2. Fix it by naming the ticks.",
   "c": "import matplotlib.pyplot as plt\ngrid = [[1, 0.8, 0.1], [0.8, 1, 0.0], [0.1, 0.0, 1]]\nnames = [\"Sales\", \"Profit\", \"Age\"]\nplt.imshow(grid, cmap=\"coolwarm\", vmin=-1, vmax=1)\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\ngrid = [[1, 0.8, 0.1], [0.8, 1, 0.0], [0.1, 0.0, 1]]\nnames = [\"Sales\", \"Profit\", \"Age\"]\nplt.imshow(grid, cmap=\"coolwarm\", vmin=-1, vmax=1)\nplt.xticks(range(3), names)\nplt.yticks(range(3), names)\nplt.show()",
   "e": "`plt.xticks(positions, labels)` swaps the positions 0, 1, 2 for the column names.",
   "chart": {
    "kind": "image",
    "xticks": [
     "Sales",
     "Profit",
     "Age"
    ],
    "yticks": [
     "Sales",
     "Profit",
     "Age"
    ]
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 image images=1 t='' x='' y='' leg=None xt=['Sales', 'Profit', 'Age'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-17.webp"
   ],
   "got": "The x-axis labels should be Sales, Profit, Age, but they are −0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5.\nThe y-axis labels should be Sales, Profit, Age, but they are −0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5."
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Inset charts and global settings",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nplt.rcParams[\"font.size\"] = 14\nprint(plt.rcParams[\"font.size\"])\nplt.rcdefaults()\nprint(plt.rcParams[\"font.size\"])",
   "e": "`rcParams` stores the setting as a decimal; `rcdefaults()` puts back the normal size, 10.",
   "ans": "14.0\n10.0"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Several charts in one figure: subplots",
   "q": "From `sales_data.csv`, make 1 row of 2 charts: the **average profit** per category as bars (left) and a histogram of `Quantity` with 10 bins (right). Give both charts titles and the figure the title `Orders at a glance`.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\navg = sales.groupby(\"Category\")[\"Profit\"].mean()\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].bar(avg.index, avg.values)\naxes[0].set_title(\"Average profit\")\naxes[1].hist(sales[\"Quantity\"], bins=10)\naxes[1].set_title(\"Items per order\")\nfig.suptitle(\"Orders at a glance\")\nplt.tight_layout()\nplt.show()",
   "e": "Each axes answers its own question; `fig.suptitle` ties them together.",
   "chart": {
    "axes": 2,
    "suptitle": "Orders at a glance",
    "ax": [
     {
      "kind": "bar",
      "bars": 4,
      "title": true
     },
     {
      "kind": "hist",
      "bars": 10,
      "title": true
     }
    ]
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='Orders at a glance' cbar=0 leg=None\n#ax1 bar bars=4 t='Average profit' x='' y='' leg=None xt=['Clothing', 'Electronics', 'Furniture', 'Groceries'] h=[461.3, 661.0, 760.2, 59.93] tx=0\n#ax2 hist bars=10 t='Items per order' x='' y='' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[44.0, 51.0, 47.0, 66.0, 47.0, 48.0, 48.0, 49.0, 48.0, 52.0] tx=0",
   "img": [
    "img/bt-mpl2-19.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Heatmaps with imshow",
   "q": "From `sales_data.csv`, draw the correlation heatmap of `[\"Sales\", \"Profit\", \"Quantity\"]` with `cmap=\"coolwarm\"`, `vmin=-1`, `vmax=1`, a colour bar, the names on both axes, and the value (2 decimals) written in every cell.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\ncols = [\"Sales\", \"Profit\", \"Quantity\"]\ncorr = sales[cols].corr()\nplt.imshow(corr, cmap=\"coolwarm\", vmin=-1, vmax=1)\nplt.colorbar()\nplt.xticks(range(3), cols)\nplt.yticks(range(3), cols)\nfor i in range(3):\n    for j in range(3):\n        plt.text(j, i, f\"{corr.iloc[i, j]:.2f}\", ha=\"center\", va=\"center\")\nplt.show()",
   "e": "Two loops visit every cell: `plt.text(j, i, ...)` writes at column j, row i.",
   "chart": {
    "kind": "image",
    "colorbar": true,
    "texts": 9,
    "text_has": "0.78",
    "xticks": [
     "Sales",
     "Profit",
     "Quantity"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 image+text images=1 t='' x='' y='' leg=None xt=['Sales', 'Profit', 'Quantity'] h=[] tx=9",
   "img": [
    "img/bt-mpl2-20.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Trend lines with polyfit",
   "q": "From `sales_data.csv`, scatter `Quantity` (x) against `Sales` (y), draw the straight trend line from `np.polyfit` in red, and print the slope rounded to 1 decimal.",
   "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\nimport numpy as np\n",
   "sol": "import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\nimport numpy as np\nx = sales[\"Quantity\"].values\ny = sales[\"Sales\"].values\nslope, intercept = np.polyfit(x, y, 1)\nprint(round(slope, 1))\nfig, ax = plt.subplots()\nax.scatter(x, y, s=10)\nline_x = np.linspace(1, 10, 10)\nax.plot(line_x, slope * line_x + intercept, \"r-\")\nplt.show()",
   "e": "Each extra item in an order adds about this many rupees, on average.",
   "chart": {
    "kind": [
     "scatter",
     "line"
    ],
    "points": 500,
    "lines": 1
   },
   "out": "161.6",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 scatter+line lines=1 points=500 t='' x='' y='' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[] tx=0",
   "img": [
    "img/bt-mpl2-21.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Several charts in one figure: subplots",
   "q": "This code should put the bar chart in the second chart of the row, but it raises an IndexError. Fix it.",
   "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1, 2, 3])\naxes[2].bar([\"a\", \"b\"], [1, 2])\nplt.show()",
   "fixed": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\naxes[0].plot([1, 2, 3])\naxes[1].bar([\"a\", \"b\"], [1, 2])\nplt.show()",
   "e": "Two charts are `axes[0]` and `axes[1]`: positions count from 0.",
   "chart": {
    "axes": 2,
    "ax": [
     {
      "kind": "line"
     },
     {
      "kind": "bar"
     }
    ]
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['−0.5', '0.0', '0.5', '1.0', '1.5', '2.0', '2.5'] h=[] tx=0\n#ax2 bar bars=2 t='' x='' y='' leg=None xt=['a', 'b'] h=[1.0, 2.0] tx=0",
   "img": [
    "img/bt-mpl2-22.webp"
   ],
   "got": "IndexError: index 2 is out of bounds for axis 0 with size 2"
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Inset charts and global settings",
   "q": "Type exactly what this code prints.",
   "c": "import matplotlib.pyplot as plt\nfrom mpl_toolkits.axes_grid1.inset_locator import inset_axes\nfig, ax = plt.subplots()\nsmall = inset_axes(ax, width=\"30%\", height=\"30%\")\nprint(len(fig.axes))\nplt.close()",
   "e": "The inset is a second axes inside the same figure.",
   "ans": "2"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Inset charts and global settings",
   "q": "Plot 12 months of visitors `[30, 32, 35, 41, 38, 44, 47, 52, 49, 58, 66, 61]` as a line, and add an **inset** bar chart (35% wide and high, upper left) of the last three months.",
   "starter": "import matplotlib.pyplot as plt\nfrom mpl_toolkits.axes_grid1.inset_locator import inset_axes\nvisitors = [30, 32, 35, 41, 38, 44, 47, 52, 49, 58, 66, 61]\n",
   "sol": "import matplotlib.pyplot as plt\nfrom mpl_toolkits.axes_grid1.inset_locator import inset_axes\nvisitors = [30, 32, 35, 41, 38, 44, 47, 52, 49, 58, 66, 61]\nfig, ax = plt.subplots()\nax.plot(range(1, 13), visitors, marker=\"o\")\nsmall = inset_axes(ax, width=\"35%\", height=\"35%\", loc=\"upper left\")\nsmall.bar([\"Oct\", \"Nov\", \"Dec\"], visitors[-3:])\nplt.show()",
   "e": "The inset is its own axes, so you draw on it with its own methods.",
   "chart": {
    "axes": 2,
    "ax": [
     {
      "kind": "line"
     },
     {
      "kind": "bar",
      "bars": 3
     }
    ]
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='' x='' y='' leg=None xt=['0', '2', '4', '6', '8', '10', '12', '14'] h=[] tx=0\n#ax2 bar bars=3 t='' x='' y='' leg=None xt=['Oct', 'Nov', 'Dec'] h=[58.0, 66.0, 61.0] tx=0",
   "img": [
    "img/bt-mpl2-24.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Best practices and common mistakes",
   "q": "`rooms = {\"Taj\": 42, \"Novotel\": 35, \"ITC\": 58, \"Marriott\": 47}`. Make a clear chart: horizontal bars sorted small to large, a title, an x label, the values on the bars and no top or right spines.",
   "starter": "import matplotlib.pyplot as plt\nrooms = {\"Taj\": 42, \"Novotel\": 35, \"ITC\": 58, \"Marriott\": 47}\n",
   "sol": "import matplotlib.pyplot as plt\nrooms = {\"Taj\": 42, \"Novotel\": 35, \"ITC\": 58, \"Marriott\": 47}\nnames = sorted(rooms, key=rooms.get)\nfig, ax = plt.subplots()\nbars = ax.barh(names, [rooms[n] for n in names], color=\"teal\")\nax.bar_label(bars)\nax.set_title(\"Rooms booked this week\")\nax.set_xlabel(\"Rooms\")\nax.spines[\"top\"].set_visible(False)\nax.spines[\"right\"].set_visible(False)\nplt.show()",
   "e": "Sorted bars, clear labels, exact numbers and no clutter: the best practices from the chapter in one chart.",
   "chart": {
    "kind": "barh",
    "heights": [
     35,
     42,
     47,
     58
    ],
    "texts": 4,
    "title": true,
    "xlabel": true,
    "spines": {
     "top": false,
     "right": false
    }
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 barh+annotate bars=4 t='Rooms booked this week' x='Rooms' y='' leg=None xt=['0', '10', '20', '30', '40', '50', '60', '70'] h=[35.0, 42.0, 47.0, 58.0] tx=4",
   "img": [
    "img/bt-mpl2-25.webp"
   ]
  }
 ],
 "sns1": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "Seaborn: statistical charts in one line",
   "q": "Draw a Seaborn histogram of the `Sales` column of `sales` with **15 bins**, and give it a title.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.histplot(data=sales, x=\"Sales\", bins=15)\nplt.title(\"Order values\")\nplt.show()",
   "e": "Give the DataFrame to `data=` and the column name to `x=`; `bins=15` makes 15 bars.",
   "chart": {
    "sns": "histplot",
    "bars": 15,
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=15 t='Order values' x='Sales' y='Count' leg=None xt=['−2000', '0', '2000', '4000', '6000', '8000', '10000', '12000'] h=[90.0, 86.0, 55.0, 65.0, 39.0, 44.0, 31.0, 27.0, 20.0, 19.0, 8.0, 9.0] tx=0\n#sns histplot",
   "img": [
    "img/bt-sns1-1.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Datasets, data= and hue=",
   "q": "Load the `tips` dataset with `sns.load_dataset` and draw a histogram of `tip`, coloured by `smoker` (`hue=`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.histplot(data=tips, x=\"tip\", hue=\"smoker\")\nplt.show()",
   "e": "`hue=` colours the bars by another column and adds the legend (Yes, No) by itself.",
   "chart": {
    "sns": "histplot",
    "legend": [
     "Yes",
     "No"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=36 t='' x='tip' y='Count' leg=['Yes', 'No'] xt=['0', '2', '4', '6', '8', '10', '12'] h=[11.0, 19.0, 32.0, 18.0, 27.0, 13.0, 9.0, 3.0, 11.0, 3.0, 1.0, 2.0] tx=0\n#sns histplot",
   "img": [
    "img/bt-sns1-2.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Histograms with histplot",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.histplot(x=[5, 5, 6, 9, 9, 9, 9], bins=2)\nprint([int(bar.get_height()) for bar in ax.patches])\nplt.close()",
   "e": "Two bins from 5 to 9 split at 7: the 5, 5 and 6 fall in the first bin and the four 9s in the second.",
   "ans": "[3, 4]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Counting categories: countplot",
   "q": "`days = [\"Mon\", \"Tue\", \"Mon\", \"Wed\", \"Mon\", \"Tue\"]`. Count each day with `sns.countplot`, in the order Mon, Tue, Wed, and set the y label to `Orders`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Mon\", \"Wed\", \"Mon\", \"Tue\"]\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndays = [\"Mon\", \"Tue\", \"Mon\", \"Wed\", \"Mon\", \"Tue\"]\nsns.countplot(x=days, order=[\"Mon\", \"Tue\", \"Wed\"])\nplt.ylabel(\"Orders\")\nplt.show()",
   "e": "`order=` fixes the left-to-right order of the bars.",
   "chart": {
    "sns": "countplot",
    "bars": 3,
    "xticks": [
     "Mon",
     "Tue",
     "Wed"
    ],
    "ylabel": "Orders"
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=3 t='' x='' y='Orders' leg=None xt=['Mon', 'Tue', 'Wed'] h=[3.0, 2.0, 1.0] tx=0\n#sns countplot",
   "img": [
    "img/bt-sns1-4.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Counting categories: countplot",
   "q": "This code should count the bills per day, but it stops with a TypeError. Fix it.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.countplot(data=tips, x=\"day\", y=\"day\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.countplot(data=tips, x=\"day\")\nplt.show()",
   "e": "countplot counts one column: give it `x=` (upright bars) or `y=` (sideways bars), never both.",
   "chart": {
    "sns": "countplot",
    "bars": 4
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='' x='day' y='count' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[62.0, 19.0, 87.0, 76.0] tx=0\n#sns countplot",
   "img": [
    "img/bt-sns1-5.webp"
   ],
   "got": "TypeError: Cannot pass values for both `x` and `y`."
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Averages with error bars: barplot",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.barplot(x=[\"p\", \"q\", \"q\"], y=[10, 4, 8], errorbar=None)\nprint([float(bar.get_height()) for bar in ax.patches])\nplt.close()",
   "e": "barplot shows the mean: p has only 10, and q has (4 + 8) / 2 = 6.",
   "ans": "[10.0, 6.0]"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Spread by group: boxplot and violinplot",
   "q": "With `tips`, draw a box plot of `total_bill` for each `time` (Lunch and Dinner), with a title.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.boxplot(data=tips, x=\"time\", y=\"total_bill\")\nplt.title(\"Bills at lunch and dinner\")\nplt.show()",
   "e": "One box per value of `x=`: two boxes.",
   "chart": {
    "sns": "boxplot",
    "boxes": 2,
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 area+box boxes=2 t='Bills at lunch and dinner' x='time' y='total_bill' leg=None xt=['Lunch', 'Dinner'] h=[] tx=0\n#sns boxplot",
   "img": [
    "img/bt-sns1-7.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Themes, styles and palettes",
   "q": "This code should use the white grid style, but it stops with a ValueError. Fix the style name.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.set_theme(style=\"grid\")\nsns.countplot(data=tips, x=\"day\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nsns.set_theme(style=\"whitegrid\")\nsns.countplot(data=tips, x=\"day\")\nplt.show()",
   "e": "The five styles are darkgrid, whitegrid, dark, white and ticks.",
   "chart": {
    "sns": "countplot",
    "grid": true
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='' x='day' y='count' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[62.0, 19.0, 87.0, 76.0] tx=0\n#sns countplot",
   "img": [
    "img/bt-sns1-8.webp"
   ],
   "got": "ValueError: style must be one of white, dark, whitegrid, darkgrid, ticks"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Histograms with histplot",
   "q": "With `tips`, draw a histogram of `total_bill` with bins **5 dollars wide** (`binwidth=5`), stacked by `time` (`multiple=\"stack\"`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.histplot(data=tips, x=\"total_bill\", hue=\"time\", multiple=\"stack\", binwidth=5)\nplt.show()",
   "e": "`binwidth=` sets the width of each bin; `multiple=\"stack\"` puts dinner on top of lunch.",
   "chart": {
    "sns": "histplot",
    "legend": [
     "Lunch",
     "Dinner"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=20 t='' x='total_bill' y='Count' leg=['Lunch', 'Dinner'] xt=['0', '10', '20', '30', '40', '50', '60'] h=[5.0, 24.0, 44.0, 40.0, 27.0, 15.0, 9.0, 6.0, 2.0, 4.0, 2.0, 18.0] tx=0\n#sns histplot",
   "img": [
    "img/bt-sns1-9.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Smooth curves: kdeplot, rugplot and ecdfplot",
   "q": "Draw filled KDE curves of `Sales` for each `Region`, each with an area of 1 (`common_norm=False`), stopping at the real data (`cut=0`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.kdeplot(data=sales, x=\"Sales\", hue=\"Region\", fill=True, common_norm=False, cut=0)\nplt.title(\"Order values per region\")\nplt.show()",
   "e": "`cut=0` stops each curve at its smallest and largest order, so no negative sales appear.",
   "chart": {
    "sns": "kdeplot",
    "legend": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 area  t='Order values per region' x='Sales' y='Density' leg=['West', 'South', 'North', 'East'] xt=['−2000', '0', '2000', '4000', '6000', '8000', '10000', '12000'] h=[] tx=0\n#sns kdeplot",
   "img": [
    "img/bt-sns1-10.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Smooth curves: kdeplot, rugplot and ecdfplot",
   "q": "With `tips`, draw an ECDF of `tip` for each `sex`, and add a dashed grey vertical line at a tip of 3 with `plt.axvline`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.ecdfplot(data=tips, x=\"tip\", hue=\"sex\")\nplt.axvline(3, color=\"grey\", linestyle=\"--\")\nplt.title(\"Share of tips up to each value\")\nplt.show()",
   "e": "At the line you can read the share of tips that are $3 or less for men and for women.",
   "chart": {
    "sns": "ecdfplot",
    "kind": "vline",
    "legend": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+vline lines=2 t='Share of tips up to each value' x='tip' y='Proportion' leg=['Male', 'Female'] xt=['0', '2', '4', '6', '8', '10', '12'] h=[] tx=0\n#sns ecdfplot",
   "img": [
    "img/bt-sns1-11.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Figure-level charts: displot",
   "q": "Use `sns.displot` to draw histograms of `total_bill` from `tips`, with **one panel per `time`** (`col=`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ng = sns.displot(data=tips, x=\"total_bill\", col=\"time\", height=3)\ng.set_titles(\"{col_name}\")\nplt.show()",
   "e": "displot is figure-level: `col=\"time\"` makes a Lunch panel and a Dinner panel.",
   "chart": {
    "sns": "displot",
    "axes": 2
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 bar bars=14 t='Lunch' x='total_bill' y='Count' leg=None xt=['0', '20', '40', '60'] h=[0.0, 7.0, 18.0, 18.0, 9.0, 5.0, 2.0, 4.0, 1.0, 2.0, 0.0, 2.0] tx=0\n#ax2 bar bars=14 t='Dinner' x='total_bill' y='' leg=None xt=['0', '20', '40', '60'] h=[2.0, 7.0, 27.0, 30.0, 30.0, 25.0, 19.0, 11.0, 8.0, 5.0, 6.0, 0.0] tx=0\n#sns displot FacetGrid",
   "img": [
    "img/bt-sns1-12.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Figure-level charts: displot",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ng = sns.displot(x=[1, 2, 3, 4], col=[\"a\", \"a\", \"b\", \"b\"])\nprint(type(g).__name__, len(g.axes.flat))\nplt.close(\"all\")",
   "e": "A figure-level function returns a FacetGrid; two values of `col` give two panels.",
   "ans": "FacetGrid 2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Averages with error bars: barplot",
   "q": "Draw the **total** sales per `Region` as bars with `sns.barplot` (`estimator=\"sum\"`), with no error bars and the `pastel` palette (use `hue=\"Region\"` and `legend=False`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.barplot(data=sales, x=\"Region\", y=\"Sales\", estimator=\"sum\", errorbar=None, hue=\"Region\", palette=\"pastel\", legend=False)\nplt.title(\"Total sales per region\")\nplt.show()",
   "e": "A palette colours a `hue=` column: using the same column as `x=` gives each bar its own colour without a warning.",
   "chart": {
    "sns": "barplot",
    "bars": 4,
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=4 t='Total sales per region' x='Region' y='Sales' leg=None xt=['West', 'South', 'North', 'East'] h=[403700.0, 462600.0, 400200.0, 281900.0] tx=0\n#sns barplot",
   "img": [
    "img/bt-sns1-14.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "Averages with error bars: barplot",
   "q": "This code should show the average tip per day with a 95% confidence interval, but it stops with a ValueError. Fix the `errorbar` value.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.barplot(data=tips, x=\"day\", y=\"tip\", errorbar=\"ci95\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.barplot(data=tips, x=\"day\", y=\"tip\", errorbar=(\"ci\", 95))\nplt.show()",
   "e": "The interval is written as a pair: `errorbar=(\"ci\", 95)`. (That is also the default.)",
   "chart": {
    "sns": "barplot",
    "bars": 4
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar+line bars=4 lines=4 t='' x='day' y='tip' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[2.771, 2.735, 2.993, 3.255] tx=0\n#sns barplot",
   "img": [
    "img/bt-sns1-15.webp"
   ],
   "got": "ValueError: The value for `errorbar` must be one of ['ci', 'pi', 'se', 'sd'], but 'ci95' was passed."
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Spread by group: boxplot and violinplot",
   "q": "With `tips`, draw violins of `tip` per `day`, split in two halves by `smoker` (`hue=`, `split=True`), with dashed quartile lines (`inner=\"quart\"`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.violinplot(data=tips, x=\"day\", y=\"tip\", hue=\"smoker\", split=True, inner=\"quart\")\nplt.show()",
   "e": "Each violin shows smokers on one side and non-smokers on the other.",
   "chart": {
    "sns": "violinplot",
    "legend": [
     "Yes",
     "No"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 area+line bars=2 lines=24 t='' x='day' y='tip' leg=['Yes', 'No'] xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[0.0, 0.0] tx=0\n#sns violinplot",
   "img": [
    "img/bt-sns1-16.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Every point: stripplot and swarmplot",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.stripplot(x=[\"a\", \"a\", \"b\"], y=[1, 2, 3])\nprint(len(ax.collections))\nplt.close()",
   "e": "A strip plot draws one group of dots per category: one for a and one for b.",
   "ans": "2"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Every point: stripplot and swarmplot",
   "q": "Draw a white box plot of `Profit` per `Region` without the outlier dots (`showfliers=False`), and put every order on top as small black dots with `sns.stripplot`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.boxplot(data=sales, x=\"Region\", y=\"Profit\", color=\"white\", showfliers=False)\nsns.stripplot(data=sales, x=\"Region\", y=\"Profit\", color=\"black\", alpha=0.3, size=3)\nplt.show()",
   "e": "Both functions draw on the same axes: the summary and the real data together.",
   "chart": {
    "sns": [
     "boxplot",
     "stripplot"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 box+scatter points=500 boxes=4 t='' x='Region' y='Profit' leg=None xt=['West', 'South', 'North', 'East'] h=[] tx=0\n#sns boxplot stripplot",
   "img": [
    "img/bt-sns1-18.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Means across groups: pointplot",
   "q": "Make a `Quarter` column (`\"Q1\"` to `\"Q4\"`) from `Date`, then draw the **average profit** per quarter with `sns.pointplot`, in the order Q1 to Q4.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\nsales[\"Quarter\"] = \"Q\" + sales[\"Date\"].dt.quarter.astype(str)\nsns.pointplot(data=sales, x=\"Quarter\", y=\"Profit\", order=[\"Q1\", \"Q2\", \"Q3\", \"Q4\"])\nplt.title(\"Average profit per quarter\")\nplt.show()",
   "e": "`dt.quarter` gives 1 to 4; turning it into text with \"Q\" in front makes good labels.",
   "chart": {
    "sns": "pointplot",
    "xticks": [
     "Q1",
     "Q2",
     "Q3",
     "Q4"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=5 t='Average profit per quarter' x='Quarter' y='Profit' leg=None xt=['Q1', 'Q2', 'Q3', 'Q4'] h=[] tx=0\n#sns pointplot",
   "img": [
    "img/bt-sns1-19.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Many panels at once: catplot",
   "q": "Use `sns.catplot` to draw **violins** of `total_bill` per `day` from `tips`, with one panel per `sex`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ng = sns.catplot(data=tips, x=\"day\", y=\"total_bill\", kind=\"violin\", col=\"sex\", height=3.2)\ng.set_titles(\"{col_name}\")\nplt.show()",
   "e": "`kind=\"violin\"` picks the chart and `col=\"sex\"` makes two panels.",
   "chart": {
    "sns": "catplot",
    "axes": 2
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 area+line lines=12 t='Male' x='day' y='total_bill' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#ax2 area+line lines=12 t='Female' x='day' y='' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#sns catplot FacetGrid",
   "img": [
    "img/bt-sns1-20.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Many panels at once: catplot",
   "q": "This code should draw a box plot in the **left** chart of a 1 × 2 figure, but Seaborn warns and draws a separate figure instead. Fix it.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nfig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.catplot(data=tips, x=\"day\", y=\"tip\", kind=\"box\", ax=axes[0])\naxes[1].hist(tips[\"tip\"], bins=10)\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nfig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.boxplot(data=tips, x=\"day\", y=\"tip\", ax=axes[0])\naxes[1].hist(tips[\"tip\"], bins=10)\nplt.show()",
   "e": "catplot is figure-level and ignores `ax=`. The axes-level `sns.boxplot(..., ax=axes[0])` draws inside the grid.",
   "chart": {
    "axes": 2,
    "sns": "boxplot"
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 area+box boxes=4 t='' x='day' y='tip' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#ax2 hist bars=10 t='' x='' y='' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[41.0, 79.0, 66.0, 27.0, 19.0, 5.0, 4.0, 1.0, 1.0, 1.0] tx=0\n#sns boxplot",
   "img": [
    "img/bt-sns1-21.webp"
   ],
   "got": "/home/claude/venv/lib/python3.12/site-packages/seaborn/categorical.py:2761: UserWarning: catplot is a figure-level function and does not accept target axes. You may wish to try boxplot\n  warnings.warn(msg, UserWarning)"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Themes, styles and palettes",
   "q": "Use `sns.set_theme(style=\"ticks\", palette=\"colorblind\")`, draw a count of orders per `Category` split by `Region` (`hue=`), and remove the top and right border lines with `sns.despine()`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.set_theme(style=\"ticks\", palette=\"colorblind\")\nsns.countplot(data=sales, x=\"Category\", hue=\"Region\")\nsns.despine()\nplt.show()",
   "e": "`despine()` hides the top and right spines; the colorblind palette is safe for every reader.",
   "chart": {
    "sns": "countplot",
    "legend": true,
    "spines": {
     "top": false,
     "right": false
    }
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=20 t='' x='Category' y='count' leg=['West', 'South', 'North', 'East'] xt=['Groceries', 'Clothing', 'Furniture', 'Electronics'] h=[29.0, 40.0, 29.0, 29.0, 40.0, 54.0, 28.0, 39.0, 29.0, 35.0, 29.0, 28.0] tx=0\n#sns countplot",
   "img": [
    "img/bt-sns1-22.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Themes, styles and palettes",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nprint(len(sns.color_palette(\"pastel\")), len(sns.color_palette(\"husl\", 3)))",
   "e": "A named palette like pastel has 10 colours; `color_palette(\"husl\", 3)` asks for exactly 3.",
   "ans": "10 3"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Histograms with histplot",
   "q": "This code should stack the order values by region, but it stops with a ValueError. Fix it.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.histplot(data=sales, x=\"Sales\", hue=\"Region\", bins=20, multiple=\"stacked\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.histplot(data=sales, x=\"Sales\", hue=\"Region\", bins=20, multiple=\"stack\")\nplt.show()",
   "e": "The four choices are \"layer\", \"stack\", \"dodge\" and \"fill\".",
   "chart": {
    "sns": "histplot",
    "legend": true
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar bars=80 t='' x='Sales' y='Count' leg=['West', 'South', 'North', 'East'] xt=['−2000', '0', '2000', '4000', '6000', '8000', '10000', '12000'] h=[10.0, 12.0, 14.0, 7.0, 7.0, 3.0, 8.0, 8.0, 6.0, 5.0, 4.0, 2.0] tx=0\n#sns histplot",
   "img": [
    "img/bt-sns1-24.webp"
   ],
   "got": "ValueError: The value for `multiple` must be one of ['layer', 'stack', 'fill', 'dodge'], but 'stacked' was passed."
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Which Seaborn chart? Best practices",
   "q": "Draw the average `Profit` per `Region` as bars, **highest average first**. Work out the order with `groupby(...).mean().sort_values(ascending=False).index`, and show one standard deviation (`errorbar=\"sd\"`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\norder = sales.groupby(\"Region\")[\"Profit\"].mean().sort_values(ascending=False).index\nsns.barplot(data=sales, x=\"Region\", y=\"Profit\", order=order, errorbar=\"sd\")\nplt.title(\"Average profit per region (± 1 sd)\")\nplt.show()",
   "e": "Sorted bars are easier to compare, and the long sd lines show that single orders vary far more than the averages do.",
   "chart": {
    "sns": "barplot",
    "bars": 4,
    "xticks": [
     "East",
     "North",
     "West",
     "South"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 bar+line bars=4 lines=4 t='Average profit per region (± 1 sd)' x='Region' y='Profit' leg=None xt=['East', 'North', 'West', 'South'] h=[495.6, 490.1, 487.1, 436.4] tx=0\n#sns barplot",
   "img": [
    "img/bt-sns1-25.webp"
   ]
  }
 ],
 "sns2": [
  {
   "lv": 1,
   "ty": "code",
   "sec": "Scatter plots: hue, size and style",
   "q": "Draw a Seaborn scatter of `Customer_Age` (x) against `Satisfaction_Score` (y) from `sales`, coloured by `Region`, with see-through dots (`alpha=0.5`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.scatterplot(data=sales, x=\"Customer_Age\", y=\"Satisfaction_Score\", hue=\"Region\", alpha=0.5)\nplt.show()",
   "e": "One dot per order (500), coloured by region. No clear pattern: age does not drive satisfaction.",
   "chart": {
    "sns": "scatterplot",
    "points": 500,
    "legend": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 scatter points=500 t='' x='Customer_Age' y='Satisfaction_Score' leg=['West', 'South', 'North', 'East'] xt=['10', '20', '30', '40', '50', '60', '70'] h=[] tx=0\n#sns scatterplot",
   "img": [
    "img/bt-sns2-1.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Line plots and confidence bands",
   "q": "With `tips`, draw `sns.lineplot` of `tip` (y) against the group `size` (x), with a title. Every size has many bills, so you will see the mean and a band.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.lineplot(data=tips, x=\"size\", y=\"tip\", marker=\"o\")\nplt.title(\"Average tip by group size\")\nplt.show()",
   "e": "lineplot draws the mean tip for each size, and the band is the 95% interval.",
   "chart": {
    "sns": "lineplot",
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+area lines=1 t='Average tip by group size' x='size' y='tip' leg=None xt=['0', '1', '2', '3', '4', '5', '6', '7'] h=[] tx=0\n#sns lineplot",
   "img": [
    "img/bt-sns2-2.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Heatmaps: correlations and pivot tables",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\"x\": [1, 2, 3], \"y\": [2, 4, 6]})\nprint(df.corr().loc[\"x\", \"y\"])",
   "e": "y is always 2 × x, a perfect straight-line link: the correlation is 1.0.",
   "ans": "1.0"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Heatmaps: correlations and pivot tables",
   "q": "`marks = pd.DataFrame({\"Maths\": [78, 92, 65], \"Science\": [85, 88, 70]}, index=[\"Asha\", \"Ravi\", \"Neha\"])`. Draw it as a heatmap with the whole numbers in the cells (`annot=True`, `fmt=\"d\"`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nmarks = pd.DataFrame({\"Maths\": [78, 92, 65], \"Science\": [85, 88, 70]}, index=[\"Asha\", \"Ravi\", \"Neha\"])\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nmarks = pd.DataFrame({\"Maths\": [78, 92, 65], \"Science\": [85, 88, 70]}, index=[\"Asha\", \"Ravi\", \"Neha\"])\nsns.heatmap(marks, annot=True, fmt=\"d\", cmap=\"Greens\")\nplt.title(\"Marks\")\nplt.show()",
   "e": "Six cells, six numbers. The names come from the index and the columns.",
   "chart": {
    "sns": "heatmap",
    "texts": 6
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh+text meshes=1 t='Marks' x='' y='' leg=None xt=['Maths', 'Science'] h=[] tx=6\n#sns heatmap",
   "img": [
    "img/bt-sns2-4.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Heatmaps: correlations and pivot tables",
   "q": "This code should write the correlations with 2 decimals, but it stops with a ValueError. Fix the format.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ncorr = tips[[\"total_bill\", \"tip\", \"size\"]].corr()\nsns.heatmap(corr, annot=True, fmt=\".2d\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ncorr = tips[[\"total_bill\", \"tip\", \"size\"]].corr()\nsns.heatmap(corr, annot=True, fmt=\".2f\")\nplt.show()",
   "e": "Correlations are decimals: `\".2f\"`. The `\"d\"` format is only for whole numbers.",
   "chart": {
    "sns": "heatmap",
    "texts": 9
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh+text meshes=1 t='' x='' y='' leg=None xt=['total_bill', 'tip', 'size'] h=[] tx=9\n#sns heatmap",
   "img": [
    "img/bt-sns2-5.webp"
   ],
   "got": "ValueError: Unknown format code 'd' for object of type 'float'"
  },
  {
   "lv": 1,
   "ty": "code",
   "sec": "Regression lines: regplot and lmplot",
   "q": "Draw a regression line of `Sales` (y) on `Quantity` (x) from `sales` with `sns.regplot`, without the band (`ci=None`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.regplot(data=sales, x=\"Quantity\", y=\"Sales\", ci=None)\nplt.show()",
   "e": "More items in an order means a bigger order value, but the dots spread widely around the line.",
   "chart": {
    "sns": "regplot",
    "kind": [
     "scatter",
     "line"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+scatter lines=1 points=500 t='' x='Quantity' y='Sales' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[] tx=0\n#sns regplot",
   "img": [
    "img/bt-sns2-6.webp"
   ]
  },
  {
   "lv": 1,
   "ty": "type",
   "sec": "Faceted relations: relplot",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ng = sns.relplot(x=[1, 2, 3, 4], y=[1, 3, 2, 4], col=[\"a\", \"b\", \"a\", \"b\"])\nprint(len(g.axes.flat))\nplt.close(\"all\")",
   "e": "relplot is figure-level: two values of `col` give two panels.",
   "ans": "2"
  },
  {
   "lv": 1,
   "ty": "fix",
   "sec": "Scatter plots: hue, size and style",
   "q": "This code should colour the dots by `time`, but it stops with an AttributeError. Fix it.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", colour=\"time\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"time\")\nplt.show()",
   "e": "Seaborn colours by a column with `hue=`. Unknown words like `colour=` are passed on to Matplotlib, which does not know them.",
   "chart": {
    "sns": "scatterplot",
    "legend": true
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 scatter points=244 t='' x='total_bill' y='tip' leg=['Lunch', 'Dinner'] xt=['0', '10', '20', '30', '40', '50', '60'] h=[] tx=0\n#sns scatterplot",
   "img": [
    "img/bt-sns2-8.webp"
   ],
   "got": "AttributeError: PathCollection.set() got an unexpected keyword argument 'colour'"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Line plots and confidence bands",
   "q": "Draw the **monthly total profit** per `Region` with `sns.lineplot` (`estimator=\"sum\"`, `errorbar=None`), with a dot on every point. The `Month` column is ready.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\nsales[\"Month\"] = sales[\"Date\"].dt.month\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsales[\"Date\"] = pd.to_datetime(sales[\"Date\"])\nsales[\"Month\"] = sales[\"Date\"].dt.month\nsns.lineplot(data=sales, x=\"Month\", y=\"Profit\", hue=\"Region\", estimator=\"sum\", errorbar=None, marker=\"o\")\nplt.title(\"Monthly profit per region\")\nplt.show()",
   "e": "`estimator=\"sum\"` adds up the orders of each month instead of averaging them.",
   "chart": {
    "sns": "lineplot",
    "legend": true,
    "title": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line lines=4 t='Monthly profit per region' x='Month' y='Profit' leg=['West', 'South', 'North', 'East'] xt=['0', '2', '4', '6', '8', '10', '12', '14'] h=[] tx=0\n#sns lineplot",
   "img": [
    "img/bt-sns2-9.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Regression lines: regplot and lmplot",
   "q": "`hours = [1, 2, 3, 4, 5, 6, 7, 8]` of study and `marks = [35, 50, 62, 71, 77, 81, 83, 84]`. The gains slow down, so fit a **curve** with `sns.regplot(..., order=2)`, without the band, and label both axes.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nhours = [1, 2, 3, 4, 5, 6, 7, 8]\nmarks = [35, 50, 62, 71, 77, 81, 83, 84]\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nhours = [1, 2, 3, 4, 5, 6, 7, 8]\nmarks = [35, 50, 62, 71, 77, 81, 83, 84]\nsns.regplot(x=hours, y=marks, order=2, ci=None)\nplt.xlabel(\"Hours of study\")\nplt.ylabel(\"Marks\")\nplt.show()",
   "e": "`order=2` fits a parabola, which bends to follow the slowing gains.",
   "chart": {
    "sns": "regplot",
    "xlabel": true,
    "ylabel": true
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+scatter lines=1 points=8 t='' x='Hours of study' y='Marks' leg=None xt=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] h=[] tx=0\n#sns regplot",
   "img": [
    "img/bt-sns2-10.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Regression lines: regplot and lmplot",
   "q": "Use `sns.lmplot` to draw `tip` against `total_bill` from `tips`, with one panel per `day` (`col=\"day\"`, `col_wrap=2`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.lmplot(data=tips, x=\"total_bill\", y=\"tip\", col=\"day\", col_wrap=2, height=2.8)\nplt.show()",
   "e": "Four days, four panels, each with its own fitted line.",
   "chart": {
    "sns": "lmplot",
    "axes": 4
   },
   "out": "",
   "sum": "#fig1 axes=4 sup='' cbar=0 leg=None\n#ax1 scatter+line+area lines=1 points=62 t='day = Thur' x='' y='tip' leg=None xt=[] h=[] tx=0\n#ax2 scatter+line+area lines=1 points=19 t='day = Fri' x='' y='' leg=None xt=[] h=[] tx=0\n#ax3 scatter+line+area lines=1 points=87 t='day = Sat' x='total_bill' y='tip' leg=None xt=['0', '20', '40', '60'] h=[] tx=0\n#ax4 scatter+line+area lines=1 points=76 t='day = Sun' x='total_bill' y='' leg=None xt=['0', '20', '40', '60'] h=[] tx=0\n#sns lmplot FacetGrid",
   "img": [
    "img/bt-sns2-11.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Checking the fit: residplot",
   "q": "Type exactly what this code prints.",
   "c": "import numpy as np\nx = [1, 2, 3]\ny = [2, 5, 6]\nslope, intercept = np.polyfit(x, y, 1)\nprint([round(float(b - (slope * a + intercept)), 2) for a, b in zip(x, y)])",
   "e": "The line is y = 2x + 0.33, so it predicts 2.33, 4.33 and 6.33. Real minus predicted gives the residuals.",
   "ans": "[-0.33, 0.67, -0.33]"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Faceted relations: relplot",
   "q": "Use `sns.relplot` with `kind=\"line\"` to draw the average `tip` per group `size` from `tips`, with one panel per `time` and no band (`errorbar=None`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ng = sns.relplot(data=tips, x=\"size\", y=\"tip\", kind=\"line\", col=\"time\", errorbar=None, marker=\"o\", height=3)\ng.set_titles(\"{col_name}\")\nplt.show()",
   "e": "relplot draws lineplot panels with `kind=\"line\"`.",
   "chart": {
    "sns": "relplot",
    "axes": 2
   },
   "out": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 line lines=1 t='Lunch' x='size' y='tip' leg=None xt=['0', '2', '4', '6', '8'] h=[] tx=0\n#ax2 line lines=1 t='Dinner' x='size' y='' leg=None xt=['0', '2', '4', '6', '8'] h=[] tx=0\n#sns relplot FacetGrid",
   "img": [
    "img/bt-sns2-13.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "fix",
   "sec": "FacetGrid: your own panels",
   "q": "This code should draw a histogram of tips in each panel, but it stops with a ValueError. Fix the second line.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ng = sns.FacetGrid(tips, col=\"time\")\ng.map(sns.histplot, x=\"tip\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\ng = sns.FacetGrid(tips, col=\"time\")\ng.map_dataframe(sns.histplot, x=\"tip\")\nplt.show()",
   "e": "`g.map` gives the columns by position; to name them like `x=\"tip\"`, use `g.map_dataframe`.",
   "chart": {
    "sns": "FacetGrid",
    "axes": 2
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 bar bars=9 t='time = Lunch' x='tip' y='Count' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[14.0, 22.0, 13.0, 5.0, 7.0, 0.0, 5.0, 1.0, 1.0] tx=0\n#ax2 bar bars=15 t='time = Dinner' x='tip' y='Count' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[20.0, 33.0, 24.0, 39.0, 21.0, 15.0, 13.0, 3.0, 2.0, 3.0, 1.0, 0.0] tx=0\n#sns FacetGrid histplot histplot",
   "img": [
    "img/bt-sns2-14.webp"
   ],
   "got": "ValueError: Could not interpret value `tip` for `x`. Value is a string, but `data` was not passed."
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Heatmaps: correlations and pivot tables",
   "q": "Make a pivot table of the **average profit** with `Category` as rows and `Region` as columns, and draw it as a heatmap with the values (no decimals, `fmt=\".0f\"`) and `cmap=\"YlGnBu\"`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\ntable = sales.pivot_table(values=\"Profit\", index=\"Category\", columns=\"Region\", aggfunc=\"mean\")\nsns.heatmap(table, annot=True, fmt=\".0f\", cmap=\"YlGnBu\")\nplt.title(\"Average profit (₹)\")\nplt.show()",
   "e": "4 categories × 4 regions = 16 cells, each with its average.",
   "chart": {
    "sns": "heatmap",
    "texts": 16
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh+text meshes=1 t='Average profit (₹)' x='Region' y='Category' leg=None xt=['East', 'North', 'South', 'West'] h=[] tx=16\n#sns heatmap",
   "img": [
    "img/bt-sns2-15.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "type",
   "sec": "Pair plots: every pair at once",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ng = sns.pairplot(pd.DataFrame({\"a\": [1, 2, 3], \"b\": [3, 1, 2], \"c\": [2, 2, 5]}))\nprint(g.axes.shape)\nplt.close(\"all\")",
   "e": "Three number columns give a 3 × 3 grid of panels.",
   "ans": "(3, 3)"
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Pair plots: every pair at once",
   "q": "Draw a pair plot of `Sales`, `Profit` and `Quantity` from `sales` (`vars=`) with only the lower half (`corner=True`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nsns.pairplot(sales, vars=[\"Sales\", \"Profit\", \"Quantity\"], corner=True, height=2)\nplt.show()",
   "e": "`corner=True` hides the mirror half, so each pair is drawn once.",
   "chart": {
    "sns": "pairplot"
   },
   "out": "",
   "sum": "#fig1 axes=9 sup='' cbar=0 leg=None\n#ax1   t='' x='' y='Sales' leg=None xt=[] h=[] tx=0\n#ax2 scatter points=500 t='' x='Sales' y='Profit' leg=None xt=[] h=[] tx=0\n#ax3   t='' x='' y='' leg=None xt=[] h=[] tx=0\n#ax4 scatter points=500 t='' x='Sales' y='Quantity' leg=None xt=['−5000', '0', '5000', '10000', '15000'] h=[] tx=0\n#ax5 scatter points=500 t='' x='Profit' y='Quantity' leg=None xt=['−2000', '0', '2000', '4000'] h=[] tx=0\n#ax6   t='' x='Quantity' y='' leg=None xt=['0', '5', '10', '15'] h=[] tx=0\n#ax7 bar bars=14 t='' x='Sales' y='Count' leg=None xt=['−5000', '0', '5000', '10000', '15000'] h=[99.0, 88.0, 56.0, 64.0, 42.0, 41.0, 33.0, 28.0, 20.0, 12.0, 6.0, 9.0] tx=0\n#ax8 bar bars=19 t='' x='Profit' y='Count' leg=None xt=['−2000', '0', '2000', '4000'] h=[2.0, 61.0, 93.0, 71.0, 61.0, 56.0, 51.0, 26.0, 32.0, 15.0, 8.0, 8.0] tx=0\n#ax9 bar bars=10 t='' x='Quantity' y='Count' leg=None xt=['0', '5', '10', '15'] h=[44.0, 51.0, 47.0, 66.0, 47.0, 48.0, 48.0, 49.0, 48.0, 52.0] tx=0\n#sns pairplot PairGrid",
   "img": [
    "img/bt-sns2-17.webp"
   ]
  },
  {
   "lv": 2,
   "ty": "code",
   "sec": "Joint plots: one pair in detail",
   "q": "With `tips`, draw a joint plot of `total_bill` and `tip` with **hexagons** (`kind=\"hex\"`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.jointplot(data=tips, x=\"total_bill\", y=\"tip\", kind=\"hex\", height=5)\nplt.show()",
   "e": "Darker hexagons hold more bills; the margins show each column alone.",
   "chart": {
    "sns": "jointplot",
    "kind": "hexbin"
   },
   "out": "",
   "sum": "#fig1 axes=3 sup='' cbar=0 leg=None\n#ax1 hexbin  t='' x='total_bill' y='tip' leg=None xt=['0', '10', '20', '30', '40', '50', '60'] h=[] tx=0\n#ax2 bar bars=14 t='' x='total_bill' y='Count' leg=None xt=[] h=[2.0, 14.0, 45.0, 48.0, 39.0, 30.0, 21.0, 15.0, 9.0, 7.0, 6.0, 2.0] tx=0\n#ax3 barh bars=18 t='' x='Count' y='tip' leg=None xt=[] h=[17.0, 28.0, 53.0, 25.0, 49.0, 19.0, 21.0, 4.0, 16.0, 4.0, 1.0, 4.0] tx=0\n#sns jointplot JointGrid",
   "img": [
    "img/bt-sns2-18.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Clustermap: grouping similar rows",
   "q": "Make the pivot table of the **average sales** with `Category` as rows and `Region` as columns, and draw it with `sns.clustermap`, scaling each column from 0 to 1 (`standard_scale=1`).",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\ntable = sales.pivot_table(values=\"Sales\", index=\"Category\", columns=\"Region\", aggfunc=\"mean\")\nsns.clustermap(table, standard_scale=1, cmap=\"YlGnBu\", annot=True, fmt=\".2f\", figsize=(6, 5))\nplt.show()",
   "e": "The clustermap puts the two big-ticket categories (electronics, furniture) next to each other.",
   "chart": {
    "sns": "clustermap"
   },
   "out": "",
   "sum": "#fig1 axes=3 sup='' cbar=1 leg=None\n#ax1   t='' x='' y='' leg=None xt=[] h=[] tx=0\n#ax2   t='' x='' y='' leg=None xt=[] h=[] tx=0\n#ax3 mesh+text meshes=1 t='' x='Region' y='Category' leg=None xt=['South', 'West', 'East', 'North'] h=[] tx=16\n#sns clustermap",
   "img": [
    "img/bt-sns2-19.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "FacetGrid: your own panels",
   "q": "Build a `sns.FacetGrid` of `sales` with one panel per `Region` (`col_wrap=2`), map a scatter of `Sales` against `Profit` onto it with `g.map_dataframe(sns.scatterplot, ...)`, and set short panel titles.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\ng = sns.FacetGrid(sales, col=\"Region\", col_wrap=2, height=2.8)\ng.map_dataframe(sns.scatterplot, x=\"Sales\", y=\"Profit\", s=12)\ng.set_titles(\"{col_name}\")\nplt.show()",
   "e": "First the empty grid, then one chart mapped onto every panel.",
   "chart": {
    "sns": "FacetGrid",
    "axes": 4
   },
   "out": "",
   "sum": "#fig1 axes=4 sup='' cbar=0 leg=None\n#ax1 scatter points=127 t='West' x='' y='Profit' leg=None xt=[] h=[] tx=0\n#ax2 scatter points=161 t='South' x='' y='' leg=None xt=[] h=[] tx=0\n#ax3 scatter points=121 t='North' x='Sales' y='Profit' leg=None xt=['−5000', '0', '5000', '10000', '15000'] h=[] tx=0\n#ax4 scatter points=91 t='East' x='Sales' y='' leg=None xt=['−5000', '0', '5000', '10000', '15000'] h=[] tx=0\n#sns FacetGrid scatterplot scatterplot scatterplot scatterplot",
   "img": [
    "img/bt-sns2-20.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Seaborn inside Matplotlib layouts",
   "q": "This code should put a box plot in the second chart, but it stops with an IndexError. Fix it.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nfig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.histplot(data=tips, x=\"tip\", ax=axes[0])\nsns.boxplot(data=tips, x=\"day\", y=\"tip\", ax=axes[2])\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nfig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.histplot(data=tips, x=\"tip\", ax=axes[0])\nsns.boxplot(data=tips, x=\"day\", y=\"tip\", ax=axes[1])\nplt.show()",
   "e": "Two charts are `axes[0]` and `axes[1]`: positions count from 0.",
   "chart": {
    "axes": 2,
    "sns": [
     "histplot",
     "boxplot"
    ]
   },
   "want": "",
   "sum": "#fig1 axes=2 sup='' cbar=0 leg=None\n#ax1 bar bars=18 t='' x='tip' y='Count' leg=None xt=['0', '2', '4', '6', '8', '10', '12'] h=[17.0, 28.0, 53.0, 25.0, 49.0, 19.0, 21.0, 4.0, 16.0, 4.0, 1.0, 4.0] tx=0\n#ax2 area+box boxes=4 t='' x='day' y='tip' leg=None xt=['Thur', 'Fri', 'Sat', 'Sun'] h=[] tx=0\n#sns histplot boxplot",
   "img": [
    "img/bt-sns2-21.webp"
   ],
   "got": "IndexError: index 2 is out of bounds for axis 0 with size 2"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Seaborn inside Matplotlib layouts",
   "q": "Build a 2 × 2 Seaborn dashboard of `sales` with `ax=`: a histogram of `Sales`, a box plot of `Profit` per `Category`, a scatter of `Sales` against `Profit`, and a count of orders per `Region`. Give the figure a title.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nfig, axes = plt.subplots(2, 2, figsize=(11, 8))\nsns.histplot(data=sales, x=\"Sales\", ax=axes[0, 0])\nsns.boxplot(data=sales, x=\"Category\", y=\"Profit\", ax=axes[0, 1])\nsns.scatterplot(data=sales, x=\"Sales\", y=\"Profit\", s=12, ax=axes[1, 0])\nsns.countplot(data=sales, x=\"Region\", ax=axes[1, 1])\nfig.suptitle(\"Sales dashboard\")\nplt.tight_layout()\nplt.show()",
   "e": "Every axes-level chart takes `ax=`, so it lands in its own place in the grid.",
   "chart": {
    "axes": 4,
    "suptitle": true,
    "sns": [
     "histplot",
     "boxplot",
     "scatterplot",
     "countplot"
    ]
   },
   "out": "",
   "sum": "#fig1 axes=4 sup='Sales dashboard' cbar=0 leg=None\n#ax1 bar bars=14 t='' x='Sales' y='Count' leg=None xt=['−2000', '0', '2000', '4000', '6000', '8000', '10000', '12000'] h=[99.0, 88.0, 56.0, 64.0, 42.0, 41.0, 33.0, 28.0, 20.0, 12.0, 6.0, 9.0] tx=0\n#ax2 area+box boxes=4 t='' x='Category' y='Profit' leg=None xt=['Groceries', 'Clothing', 'Furniture', 'Electronics'] h=[] tx=0\n#ax3 scatter points=500 t='' x='Sales' y='Profit' leg=None xt=['−2000', '0', '2000', '4000', '6000', '8000', '10000', '12000'] h=[] tx=0\n#ax4 bar bars=4 t='' x='Region' y='count' leg=None xt=['West', 'South', 'North', 'East'] h=[127.0, 161.0, 121.0, 91.0] tx=0\n#sns histplot boxplot scatterplot countplot",
   "img": [
    "img/bt-sns2-22.webp"
   ]
  },
  {
   "lv": 3,
   "ty": "type",
   "sec": "Contexts and colour scales",
   "q": "Type exactly what this code prints.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ncontexts = [\"paper\", \"notebook\", \"talk\", \"poster\"]\nsizes = [sns.plotting_context(c)[\"font.size\"] for c in contexts]\nprint(sizes == sorted(sizes))",
   "e": "The contexts go from small to big: each one has a bigger font than the one before.",
   "ans": "True"
  },
  {
   "lv": 3,
   "ty": "fix",
   "sec": "Contexts and colour scales",
   "q": "This code should make the chart ready for slides, but it stops with a ValueError. Fix the context name.",
   "c": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.set_context(\"slides\")\nsns.lineplot(data=tips, x=\"size\", y=\"tip\")\nplt.show()",
   "fixed": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\ntips = sns.load_dataset(\"tips\")\nsns.set_context(\"talk\")\nsns.lineplot(data=tips, x=\"size\", y=\"tip\")\nplt.show()",
   "e": "The four contexts are paper, notebook, talk (slides) and poster.",
   "chart": {
    "sns": "lineplot"
   },
   "want": "",
   "sum": "#fig1 axes=1 sup='' cbar=0 leg=None\n#ax1 line+area lines=1 t='' x='size' y='tip' leg=None xt=['0', '1', '2', '3', '4', '5', '6', '7'] h=[] tx=0\n#sns lineplot",
   "img": [
    "img/bt-sns2-24.webp"
   ],
   "got": "ValueError: context must be in paper, notebook, talk, poster"
  },
  {
   "lv": 3,
   "ty": "code",
   "sec": "Best practices and common mistakes",
   "q": "Draw the correlation heatmap of the five number columns of `sales`, showing **only the lower half** with a mask (`np.triu(np.ones_like(corr, dtype=bool))`), values with 2 decimals, `cmap=\"coolwarm\"` and `center=0`.",
   "starter": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nimport numpy as np\n",
   "sol": "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme()\nsales = pd.read_csv(\"sales_data.csv\")\nimport numpy as np\ncorr = sales[[\"Sales\", \"Profit\", \"Quantity\", \"Customer_Age\", \"Satisfaction_Score\"]].corr()\nmask = np.triu(np.ones_like(corr, dtype=bool))\nsns.heatmap(corr, mask=mask, annot=True, fmt=\".2f\", cmap=\"coolwarm\", center=0)\nplt.title(\"Correlations, each pair once\")\nplt.tight_layout()\nplt.show()",
   "e": "The mask hides the diagonal and the mirror half: 10 cells are left, one per pair.",
   "chart": {
    "sns": "heatmap",
    "texts": 10
   },
   "out": "",
   "sum": "#fig1 axes=1 sup='' cbar=1 leg=None\n#ax1 mesh+text meshes=1 t='Correlations, each pair once' x='' y='' leg=None xt=['Sales', 'Profit', 'Quantity', 'Customer_Age', 'Satisfaction_Score'] h=[] tx=10\n#sns heatmap",
   "img": [
    "img/bt-sns2-25.webp"
   ]
  }
 ]
};
