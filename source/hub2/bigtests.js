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
 ]
};
