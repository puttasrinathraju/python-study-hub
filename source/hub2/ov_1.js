/* ---------- Part 1 overview: Start here ---------- */
overview({
  part: 1, title: "Part 1 overview: the Python basics", nav: "Part 1 overview", time: "25 min",
  keys: "data types int float str bool none division floor modulo = == is print sep end fstring cast round",
  lead: "All of Part 1 on one page: how Python runs, variables and data types, printing, and operators. Read the tables, run the examples, then test yourself with the mixed quiz.",
  five: [
    "Python runs your code from **top to bottom**, one line at a time. `print()` shows results and `#` starts a comment.",
    "A ==variable== is a name that points at a value. `=` stores a value. `==` asks if two values are equal.",
    "The five basic types are `int`, `float`, `str`, `bool` and `None`. `input()` always gives you a `str`.",
    "f-strings build clean output: `f\"Total: {total:,.2f}\"`.",
    "`/` always gives a float, `//` gives whole groups and `%` gives the remainder. `and`, `or` and `not` combine conditions."
  ],
  body: [
    { t: "h", text: "Mind map of Part 1" },
    { t: "mm", title: "Part 1 at a glance", root: "Part 1: Basics", hint: "Tap a branch to open that chapter", kids: [
      { t: "1. Meet Python", go: "intro", k: ["runs top to bottom", "print() shows output", "# comments", "colon + 4 spaces"] },
      { t: "2. Variables & types", go: "variables", k: ["name = value", "int float str bool None", "type() and isinstance()", "int() float() str()", "input() gives a str"] },
      { t: "3. Printing", go: "output", k: ["sep= and end=", "\\n new line, \\t tab", "+ joins, * repeats", "f\"{x:.2f}\""] },
      { t: "4. Operators", go: "operators", k: ["+ - * / // % **", "== != < > <= >=", "and or not", "in and is", "x += 1", "a if cond else b"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "p", b: "Every word you need from Part 1, each with a tiny example. If one feels shaky, tap the chapter link on its card." },
    { t: "defs", items: [
      { t: "Program", d: "A list of instructions. Python runs them from the top line to the bottom line.", c: R`
print("first")
print("second")`, o: R`
first
second`, go: "intro" },
      { t: "Comment", d: "A note for humans. Python ignores everything after `#` on that line.", c: R`
# this line is ignored
print("hi")  # so is this part`, o: R`hi`, go: "intro" },
      { t: "Indentation", d: "The 4 spaces at the start of a line. After a line that ends in `:`, indented lines belong to that block.", c: R`
if 5 > 3:
    print("inside the block")
print("outside")`, o: R`
inside the block
outside`, go: "intro" },
      { t: "Variable", d: "A name that points at a value. Create it with `=`, then use the name anywhere below.", c: R`
price = 250
qty = 4
print(price * qty)`, o: R`1000`, go: "variables" },
      { t: "Data type", d: "The kind of value: whole number, decimal, text, True/False or nothing. `type()` tells you which.", c: R`print(type(7), type(7.0), type("7"))`, o: R`<class 'int'> <class 'float'> <class 'str'>`, go: "variables" },
      { t: "Boolean (bool)", d: "Only two values: `True` and `False`. Every comparison gives one of them.", c: R`print(10 > 3, 10 == 3)`, o: R`True False`, go: "variables" },
      { t: "None", d: "A special value meaning \"no value yet\". It is not 0 and not an empty string.", c: R`
result = None
print(result is None)`, o: R`True`, go: "variables" },
      { t: "Type casting", d: "Converting a value to another type with the type's name: `int()`, `float()`, `str()`, `bool()`.", c: R`print(int("25") + 5, str(25) + "5")`, o: R`30 255`, go: "variables" },
      { t: "Escape character", d: "A backslash code inside a string: `\\n` new line, `\\t` tab, `\\\\` one backslash.", c: R`print("Name:\tAsha\nAge:\t25")`, o: "Name:\tAsha\nAge:\t25", go: "output" },
      { t: "f-string", d: "A string with an `f` in front. Anything inside `{ }` is worked out and dropped in.", c: R`
total = 1234.5
print(f"Total: {total:,.2f}")`, o: R`Total: 1,234.50`, go: "output" },
      { t: "Operator and operand", d: "An operator is the symbol that does the work (`+`, `>`, `and`). The values it works on are the operands.", c: R`print(7 + 2)  # + is the operator, 7 and 2 are operands`, o: R`9`, go: "operators" },
      { t: "Precedence", d: "The order operators run in: brackets, `**`, then `* / // %`, then `+ -`, then comparisons, then `not`, `and`, `or`.", c: R`print(2 + 3 * 4, (2 + 3) * 4)`, o: R`14 20`, go: "operators" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "The five basic data types", head: ["Type", "What it is", "Example values", "Convert to it", "Use it for", "Common trap"], rows: [
      ["`int`", "A whole number, positive or negative", "`25`, `-3`, `0`", "`int(\"25\")` gives `25`", "Counts, quantities, IDs, years", "`int(3.9)` cuts to `3`. It does not round"],
      ["`float`", "A number with a decimal point", "`2.5`, `-0.1`, `3.0`", "`float(\"2.5\")` gives `2.5`", "Prices, averages, percentages", "`0.1 + 0.2` is `0.30000000000000004`"],
      ["`str`", "Text inside quotes", "`\"Asha\"`, `'25'`, `\"\"`", "`str(25)` gives `'25'`", "Names, labels, messages, codes", "`\"25\" + 5` is a TypeError"],
      ["`bool`", "`True` or `False`", "`True`, `False`", "`bool(0)` gives `False`", "Yes/no flags and conditions", "Capital letters: `true` is a NameError"],
      ["`None`", "\"No value yet\"", "`None`", "Just write `None`", "Placeholders, missing results", "`None` is not `0` and not `\"\"`"]
    ], cap: "Check any value with `type(x)` or `isinstance(x, int)`." },
    { t: "table", master: true, title: "The operator families", head: ["Family", "Operators", "Gives back", "Example", "Result", "Use it for"], rows: [
      ["Arithmetic", "`+ - * / // % **`", "A number", "`7 // 2`", "`3`", "Maths on numbers"],
      ["Comparison", "`== != < > <= >=`", "`True` or `False`", "`5 >= 5`", "`True`", "Checking values in `if` and loops"],
      ["Logical", "`and or not`", "`not`: `True` or `False`. `and` / `or`: one of the two values (True/False when both sides are comparisons)", "`5 > 3 and 2 > 4`", "`False`", "Combining conditions"],
      ["Assignment", "`= += -= *= /=`", "Nothing, it stores a value", "`x = 5` then `x += 2`", "`x` is now `7`", "Creating and updating variables"],
      ["Membership", "`in`, `not in`", "`True` or `False`", "`\"a\" in \"data\"`", "`True`", "Is this item inside that text or list?"],
      ["Identity", "`is`, `is not`", "`True` or `False`", "`x is None`", "`True` when x is None", "Checking for `None`"],
      ["Ternary", "`a if cond else b`", "One of two values", "`\"even\" if 4 % 2 == 0 else \"odd\"`", "`'even'`", "Picking a value in one line"]
    ]},

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "`/` vs `//` vs `%`", head: ["", "`/`", "`//`", "`%`"], rows: [
      ["Name", "Division", "Floor division", "Modulo (remainder)"],
      ["Gives you", "Always a `float`", "Whole groups, rounded **down**", "What is left over"],
      ["`7 ? 2`", "`3.5`", "`3`", "`1`"],
      ["`-7 ? 2`", "`-3.5`", "`-4`", "`1`"],
      ["Use it for", "Averages, percentages, rates", "How many full boxes or hours", "Even/odd, every nth item, leftovers"]
    ], c: R`
print(7 / 2, 7 // 2, 7 % 2)
print(-7 / 2, -7 // 2, -7 % 2)
minutes = 135
print(minutes // 60, "h", minutes % 60, "min")`, o: R`
3.5 3 1
-3.5 -4 1
2 h 15 min`, rule: "Percentages and averages: `/`. Full groups: `//`. Leftovers and even/odd: `%`." },
    { t: "vs", title: "`=` vs `==` vs `is`", head: ["", "`=`", "`==`", "`is`"], rows: [
      ["Name", "Assignment", "Equality", "Identity"],
      ["The question", "\"Store this value in this name\"", "\"Do these have the same value?\"", "\"Are these the very same object?\""],
      ["Gives you", "Nothing. It stores", "`True` or `False`", "`True` or `False`"],
      ["Example", "`x = 5`", "`x == 5`", "`x is None`"],
      ["Use it for", "Creating and updating variables", "Comparing numbers, text, lists", "Only checking for `None`"]
    ], c: R`
a = [1, 2]
b = [1, 2]
c = a
print(a == b, a is b)
print(c is a)`, o: R`
True False
True`, rule: "Use `==` to compare values. Use `is` only for `x is None`." },
    { t: "vs", title: "`25` vs `25.0` vs `\"25\"`", head: ["", "`25`", "`25.0`", "`\"25\"`"], rows: [
      ["Type", "`int`", "`float`", "`str`"],
      ["`x + 5`", "`30`", "`30.0`", "TypeError"],
      ["`x * 2`", "`50`", "`50.0`", "`'2525'` (repeats the text)"],
      ["`x == 25`", "`True`", "`True`", "`False`"],
      ["Comes from", "Typing a whole number", "Typing a decimal, or any `/`", "Quotes, or `input()`"]
    ], c: R`
print(25 + 5, 25.0 + 5, "25" + "5")
print(25 * 2, 25.0 * 2, "25" * 2)
print(25 == 25.0, "25" == 25)`, o: R`
30 30.0 255
50 50.0 2525
True False`, rule: "Quotes make text. Text that looks like a number still needs `int()` or `float()` before you do maths." },
    { t: "vs", title: "`int()` vs `round()`", head: ["", "`int(x)`", "`round(x)`", "`round(x, 2)`"], rows: [
      ["What it does", "Cuts off the decimals", "Rounds to the nearest whole number", "Rounds to 2 decimal places"],
      ["`3.7`", "`3`", "`4`", "`3.7`"],
      ["`2.5`", "`2`", "`2` (a .5 goes to the even number)", "`2.5`"],
      ["`-3.7`", "`-3` (towards zero)", "`-4`", "`-3.7`"],
      ["Gives you", "`int`", "`int`", "`float`"]
    ], c: R`
print(int(3.7), round(3.7), round(2.5), round(3.5))
print(int(-3.7), round(-3.7), round(3.14159, 2))`, o: R`
3 4 2 4
-3 -4 3.14`, rule: "Want to drop decimals? `int()`. Want the nearest value? `round()`. Showing money? Format with `:.2f`." },
    { t: "vs", title: "`and` vs `or` vs `not`", head: ["", "`and`", "`or`", "`not`"], rows: [
      ["True when", "**Both** sides are True", "**At least one** side is True", "The value is False (it flips)"],
      ["`True ? False`", "`False`", "`True`", "`not True` is `False`"],
      ["Stops early when", "The left side is False", "The left side is True", "Never, it has one side"],
      ["Example", "`age >= 18 and has_id`", "`day == \"Sat\" or day == \"Sun\"`", "`not is_blocked`"]
    ], c: R`
age = 25
has_id = False
print(age >= 18 and has_id)
print(age >= 18 or has_id)
print(not has_id)`, o: R`
False
True
True`, rule: "Read `and` as \"both\", `or` as \"either\", `not` as \"the opposite of\"." },
    { t: "vs", title: "Three ways to print a sentence", head: ["", "Commas in `print()`", "Joining with `+`", "f-string"], rows: [
      ["Code", "`print(\"Age:\", age)`", "`print(\"Age: \" + str(age))`", "`print(f\"Age: {age}\")`"],
      ["Adds spaces?", "Yes, one between every item", "No, you add them", "No, you write them"],
      ["Numbers need `str()`?", "No", "**Yes**, or you get a TypeError", "No"],
      ["Can format numbers?", "No", "No", "Yes: `{x:.2f}`, `{x:,}`, `{x:.1%}`"],
      ["Best for", "Quick checks while coding", "Joining short pieces of text", "Almost everything"]
    ], c: R`
name = "Asha"
age = 25
print("Name:", name, "Age:", age)
print("Name: " + name + " Age: " + str(age))
print(f"Name: {name} Age: {age}")`, o: R`
Name: Asha Age: 25
Name: Asha Age: 25
Name: Asha Age: 25`, rule: "Reach for the f-string first. It is the easiest to read and the only one that formats numbers." },
    { t: "vs", title: "`sep=` vs `end=`", head: ["", "`sep=`", "`end=`"], rows: [
      ["Goes", "**Between** the items in one `print()`", "**After** the last item"],
      ["Default", "One space `\" \"`", "A new line `\"\\n\"`"],
      ["Example", "`print(1, 2, 3, sep=\"-\")`", "`print(\"a\", end=\" \")`"],
      ["Use it for", "Dates, codes, CSV rows", "Keeping several prints on one line"]
    ], c: R`
print(2024, 10, 27, sep="-")
print("loading", end="... ")
print("done")`, o: R`
2024-10-27
loading... done` },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "Each task mixes ideas from more than one chapter of this Part. Type in the box and press **Run**. Every comparison table above also has an **Edit and run this example** button, so you can change the numbers and see what happens." },
    { t: "prac", items: [
      { q: "A shop sells 3 shirts at ₹499.50 each. Add 18% tax and print `Total: ₹1,768.23` using an f-string with a thousands comma and 2 decimals.", hint: "Work out `price * qty * 1.18`, then use `{total:,.2f}` inside the f-string.", sol: R`
price = 499.50
qty = 3
total = price * qty * 1.18
print(f"Total: ₹{total:,.2f}")`, out: R`Total: ₹1,768.23`, why: "`*` does the maths, `1.18` adds 18%, and `:,.2f` adds the comma and rounds the display to 2 decimals." },
      { q: "`minutes = 135`. Print `2 h 15 min` using `//` and `%`.", hint: "Hours are the full groups of 60. Minutes are what is left over.", starter: "minutes = 135\n", sol: R`
minutes = 135
print(minutes // 60, "h", minutes % 60, "min")`, out: R`2 h 15 min`, why: "`//` counts the full hours and `%` gives the leftover minutes." },
      { q: "`n = 17`. In one line, store `\"even\"` or `\"odd\"` in a variable called `kind`, then print `17 is odd`.", hint: "Use the ternary `a if cond else b` with `n % 2 == 0` as the condition.", starter: "n = 17\n", sol: R`
n = 17
kind = "even" if n % 2 == 0 else "odd"
print(f"{n} is {kind}")`, out: R`17 is odd`, why: "`n % 2` is 1 for odd numbers, so the condition is False and the `else` value is picked." },
      { q: "The text `qty = \"12\"` came from `input()`. Convert it, then print `Packs of 5: 2, loose: 2`.", hint: "Convert with `int()` first. Then use `//` and `%` with 5.", starter: "qty = \"12\"\n", sol: R`
qty = "12"
n = int(qty)
print(f"Packs of 5: {n // 5}, loose: {n % 5}")`, out: R`Packs of 5: 2, loose: 2`, why: "Text from `input()` must be converted before maths. Then `//` gives full packs and `%` gives the loose items." }
    ]}
  ],
  quiz: [
    { q: "What does this print?", c: R`print(type("3.5"))`, o: ["`<class 'float'>`", "`<class 'str'>`", "`<class 'int'>`", "An error"], a: 1, chk: 1, e: "The quotes make it text. It only looks like a number." },
    { q: "What does this print?", c: R`print(7 // 2, 7 % 2)`, o: ["`3 1`", "`3.5 1`", "`3 0.5`", "`4 1`"], a: 0, chk: 1, e: "2 goes into 7 three whole times (`//`) with 1 left over (`%`)." },
    { q: "What does this print?", c: R`print(-7 // 2)`, o: ["`-3`", "`-4`", "`-3.5`", "`3`"], a: 1, chk: 1, e: "`//` always rounds **down**. -3.5 rounded down is -4." },
    { q: "What does this print?", c: R`print(2 + 3 * 4 ** 2)`, o: ["`50`", "`400`", "`146`", "`110`"], a: 0, chk: 1, e: "`**` first: 4 ** 2 = 16. Then `*`: 3 * 16 = 48. Then `+`: 2 + 48 = 50." },
    { q: "What does this print?", c: R`print("Hi", "there", sep="-")`, o: ["`Hi there`", "`Hi-there`", "`Hi-there-`", "`Hithere`"], a: 1, chk: 1, e: "`sep` goes between the items, and only between them." },
    { q: "What does this print?", c: R`print(0.1 + 0.2 == 0.3)`, o: ["`True`", "`False`", "An error", "`0.3`"], a: 1, chk: 1, e: "Decimals are stored in binary and are not exact. `0.1 + 0.2` is `0.30000000000000004`." },
    { q: "What does this print?", c: R`print(f"{1234.5:,.2f}")`, o: ["`1234.50`", "`1,234.50`", "`1,234.5`", "`1.234,50`"], a: 1, chk: 1, e: "`,` adds the thousands comma and `.2f` keeps exactly two decimals." },
    { q: "What happens here?", c: R`print("25" + 5)`, o: ["It prints `30`", "It prints `255`", "A TypeError", "It prints `\"255\"`"], a: 2, e: "You cannot add text and a number. Convert first: `int(\"25\") + 5`." },
    { q: "Which of these is a valid variable name?", o: ["`total_sales`", "`2nd_place`", "`my-name`", "`class`"], a: 0, e: "Names use letters, digits and `_`, cannot start with a digit, and cannot be keywords like `class`." },
    { q: "What does this print?", c: R`print(int(3.9), round(3.9))`, o: ["`3 4`", "`4 4`", "`3 3`", "`4 3`"], a: 0, chk: 1, e: "`int()` cuts the decimals off. `round()` goes to the nearest whole number." },
    { q: "What does this print?", c: R`
x = None
print(x is None, x == 0)`, o: ["`True True`", "`True False`", "`False False`", "`False True`"], a: 1, chk: 1, e: "`None` means \"no value\". It is not the same as 0." },
    { q: "`age = input(\"Age: \")` and the user types 30. What is `type(age)`?", o: ["`int`", "`float`", "`str`", "It depends on what was typed"], a: 2, e: "`input()` always returns text. Use `int(input(...))` to get a number." }
  ],
  cards: [
    ["Name the five basic data types", "`int` (whole numbers), `float` (decimals), `str` (text), `bool` (True/False) and `None` (no value)."],
    ["`/` vs `//` vs `%`", "`/` always gives a float (7 / 2 = 3.5). `//` gives whole groups, rounded down (7 // 2 = 3). `%` gives the remainder (7 % 2 = 1)."],
    ["`=` vs `==`", "`=` stores a value in a name. `==` asks whether two values are equal and gives True or False."],
    ["When do you use `is`?", "Only to check for `None`: `if x is None:`. Use `==` for everything else."],
    ["What type does `input()` give you?", "Always `str`, even if the user types a number.", R`qty = int(input("Qty: "))`],
    ["`int(3.9)` vs `round(3.9)`", "`int()` cuts the decimals: 3. `round()` goes to the nearest: 4."],
    ["What is `round(2.5)`?", "`2`. A .5 rounds to the nearest **even** number, so `round(3.5)` is 4."],
    ["Format a number with commas and 2 decimals", "Use `:,.2f` inside an f-string.", R`print(f"{1234.5:,.2f}")   # 1,234.50`],
    ["`sep=` vs `end=` in `print()`", "`sep` goes between the items (default a space). `end` goes after the last item (default a new line)."],
    ["`and` / `or` / `not` in one line each", "`and`: both must be True. `or`: at least one must be True. `not`: flips True and False."],
    ["Order of operations", "Brackets, `**`, `* / // %`, `+ -`, comparisons, `not`, `and`, `or`."],
    ["What does a colon plus indentation mean?", "The colon opens a block. The indented lines below it belong to that block."]
  ]
});
