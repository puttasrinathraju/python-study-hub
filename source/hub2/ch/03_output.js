chapter({
  id: "output", part: 1, title: "Printing and formatting output", nav: "Printing & f-strings", time: "35 min", lvl: "Beginner",
  keys: "print sep end f-string format escape characters newline tab quotes concatenate string formatting format spec decimal comma percent",
  lead: "Make your output clear and tidy: print several values, control spaces and new lines, and format numbers like money and percentages.",
  goals: [
    "Print several values with `print()`, and control `sep` and `end`",
    "Use single, double and triple quotes, and escape characters like `\\n`",
    "Join text with `+` and repeat it with `*`",
    "Use **f-strings** to put variables into text",
    "Format numbers: 2 decimals, commas, percentages, padding"
  ],
  src: ["Course notebooks da_cohort_13_first.ipynb and da_cohort_second.ipynb", "PDF: Python Operators and Flow Control (f-string examples)", "W3Schools: Output, Strings, Escape Characters, String Formatting"],
  body: [
    { t: "h", text: "print() with several values" },
    { t: "p", b: "Put commas between values and `print()` shows them all on one line, with **one space** between each. This example is from your course notebook. Compare the two lines carefully." },
    { t: "code", c: R`
name = "Wscube"
age = 16
city = "Jodhpur"

print("My name is ", name, ", with age ", age, " living in ", city)
print(f"My name is {name}, with age {age} living in {city}")`, o: R`
My name is  Wscube , with age  16  living in  Jodhpur
My name is Wscube, with age 16 living in Jodhpur` },
    { t: "note", k: "trap", b: "The first line has **double spaces** and a space before the comma. That is because `print()` adds its own space between items, on top of the spaces already inside the quotes. The f-string on the second line gives you exact control. This is why f-strings are the preferred way." },
    { t: "h3", text: "sep and end" },
    { t: "p", b: "`sep` sets what goes **between** items (default: a space). `end` sets what goes **after** the last item (default: a new line)." },
    { t: "code", c: R`
print("2025", "10", "25", sep="-")
print("A", "B", "C", sep="")
print("Loading", end="")
print("...", end=" ")
print("done")`, o: R`
2025-10-25
ABC
Loading... done` },
    { t: "note", k: "tip", b: "`end=\" \"` is handy in loops when you want results on one line, like `1 2 3 4 5`. You will use it in the loops chapters." },
    { t: "h", text: "Quotes and escape characters" },
    { t: "p", b: "Text can go in single quotes `'...'` or double quotes `\"...\"`. They work the same. Pick the one that lets you use the other kind inside. Triple quotes `\"\"\"...\"\"\"` let text run over several lines." },
    { t: "code", c: R`
print('Hello')
print("It's her birthday today!")
print('She said "Hi"')
print("""This text
spans two lines""")`, o: R`
Hello
It's her birthday today!
She said "Hi"
This text
spans two lines` },
    { t: "p", b: "An ==escape character== is a backslash `\\` followed by another character. It lets you put special characters inside text." },
    { t: "table", head: ["Code", "Means", "Example", "Shows"], rows: [
      ["`\\n`", "New line", "`\"Hi\\nBye\"`", "Hi, then Bye on the next line"],
      ["`\\t`", "Tab (a wide space)", "`\"Name:\\tRaman\"`", "Name:    Raman"],
      ["`\\\\`", "A real backslash", "`\"C:\\\\Users\"`", "C:\\Users"],
      ["`\\'`", "Single quote", "`'It\\'s'`", "It's"],
      ["`\\\"`", "Double quote", "`\"She said \\\"Hi\\\"\"`", "She said \"Hi\""]
    ]},
    { t: "code", c: R`
print("It's her Bday today,\nhave you wished her?")
print("Path: C:\\Users\\Raman")
print('It\'s fine')
print("She said \"Hi\"")`, o: R`
It's her Bday today,
have you wished her?
Path: C:\Users\Raman
It's fine
She said "Hi"` },
    { t: "note", k: "tip", h: "Raw strings for Windows paths", b: "Put `r` before the quotes and Python ignores escape characters. This is great for Windows file paths: `r\"C:\\new\\data.csv\"`. Without the `r`, the `\\n` in `\\new` would become a new line." },
    { t: "h", text: "Joining and repeating text" },
    { t: "p", b: "`+` joins (==concatenates==) two pieces of text. `*` repeats text. Your course billing system uses `\"-\" * 50` to draw a line." },
    { t: "code", c: R`
first = "Data"
second = "Analytics"
print(first + " " + second)
print("-" * 20)`, o: R`
Data Analytics
--------------------` },
    { t: "note", k: "trap", h: "Trap! You cannot + text and a number", b: "Python will not guess whether you want maths or joining. Convert the number with `str()`, or better, use an f-string.", c: R`print("Age: " + 25)`, o: R`TypeError: can only concatenate str (not "int") to str`, err: true },
    { t: "code", ttl: "Two ways to fix it", c: R`
age = 25
print("Age: " + str(age))
print(f"Age: {age}")`, o: R`
Age: 25
Age: 25` },
    { t: "h", text: "f-strings: the best way to format" },
    { t: "p", b: "Put the letter `f` before the opening quote. Then anything inside curly brackets `{ }` is worked out and dropped into the text. You can put variables, maths, or even method calls inside the brackets." },
    { t: "code", c: R`
a = 10
b = 3
name = "raman"
print(f"Addition: {a} + {b} = {a + b}")
print(f"Floor division: {a} // {b} = {a // b}")
print(f"Hello {name.title()}!")
print(f"{a=}")          # handy for debugging`, o: R`
Addition: 10 + 3 = 13
Floor division: 10 // 3 = 3
Hello Raman!
a=10` },
    { t: "anim", title: "How an f-string fills in its slots", frames: [
      { html: "<div class=\"bigcode\">name = \"Asha\"\namount = 1250.5</div><div class=\"bigcode\">f\"Hi {name}, you owe \u20B9{amount:,.2f}\"</div>", c: "An f-string is a template with slots. The `f` before the quote switches the slots on." },
      { html: "<div class=\"bigcode\">f\"Hi <u>{name}</u>, you owe \u20B9{amount:,.2f}\"</div><div class=\"res\">{name} \u2192 Asha</div>", c: "Python finds the first slot, `{name}`, and replaces it with the value of `name`." },
      { html: "<div class=\"bigcode\">f\"Hi Asha, you owe \u20B9<u>{amount:,.2f}</u>\"</div><div class=\"res\">1250.5 \u2192 1,250.50</div>", c: "The second slot has a **format spec** after the colon. `,` adds thousands commas and `.2f` means exactly 2 decimal places." },
      { html: "<div class=\"bigcode\">\"Hi Asha, you owe \u20B91,250.50\"</div>", c: "All slots are filled. The result is a normal string, ready to print or save." }
    ]},
    { t: "h3", text: "Format specs: the part after the colon" },
    { t: "table", head: ["Spec", "Example", "Result", "Use it for"], rows: [
      ["`.2f`", "`f\"{1234.5678:.2f}\"`", "`1234.57`", "Money, averages"],
      ["`,`", "`f\"{1500000:,}\"`", "`1,500,000`", "Big numbers"],
      ["`,.2f`", "`f\"{1234.5678:,.2f}\"`", "`1,234.57`", "Money with commas"],
      ["`.1%`", "`f\"{0.256:.1%}\"`", "`25.6%`", "Turns 0.256 into a percentage"],
      ["`03d`", "`f\"{7:03d}\"`", "`007`", "IDs with leading zeros"],
      ["`<8` `>8` `^8`", "`f\"{'Tea':>8}\"`", "`     Tea`", "Line up columns (left, right, centre)"]
    ]},
    { t: "code", c: R`
price = 1234.5678
print(f"{price:.2f}")
print(f"{1500000:,}")
print(f"{0.256:.1%}")
print(f"ITEM{7:04d}")
print(f"[{'Tea':<8}]")
print(f"[{'Tea':>8}]")
print(f"[{'Tea':^8}]")`, o: R`
1234.57
1,500,000
25.6%
ITEM0007
[Tea     ]
[     Tea]
[  Tea   ]` },
    { t: "note", k: "why", b: "Reports live or die by formatting. `f\"{revenue:,.2f}\"` turns `1823456.789` into `1,823,456.79`, which a manager can actually read." },
    { t: "h3", text: "A neat report with a triple-quoted f-string" },
    { t: "p", b: "Your course notebook builds a sales report like this. Triple quotes let one f-string run over many lines." },
    { t: "code", c: R`
product = "Smart Phone"
selling_price = 20000
discount = "10"
actual_price = 15000
qty = 10

sales = selling_price * qty
total_discount = sales * (float(discount) / 100)
net_revenue = sales - total_discount
total_cost = actual_price * qty
profit = net_revenue - total_cost
profit_margin = (profit / net_revenue) * 100

print(f"""
Product       : {product}
Sales         : {sales:,}
Net revenue   : {net_revenue:,.2f}
Profit        : {profit:,.2f}
Profit margin : {profit_margin:.2f}%
""")`, o: R`
Product       : Smart Phone
Sales         : 200,000
Net revenue   : 180,000.00
Profit        : 30,000.00
Profit margin : 16.67%` },
    { t: "note", k: "trap", b: "The original notebook used `profit // net_revenue` for the margin and got `0.0`. `//` is **floor division**, which throws away the decimal part. 30000 / 180000 is 0.1666..., and floor division turns it into 0. Use `/` for percentages. The next chapter explains why." },
    { t: "h3", text: "Older ways you may see" },
    { t: "code", c: R`
name = "Raman"
marks = 92.456
print("{} scored {:.1f}".format(name, marks))
print("%s scored %.1f" % (name, marks))`, o: R`
Raman scored 92.5
Raman scored 92.5` },
    { t: "p", b: "Both still work, and you will see them in older code online. For new code, use f-strings. They are shorter and easier to read." },
    { t: "pred", chk: 1, c: R`
print("Hi", end="!")
print("Bye")`, o: ["`Hi Bye`", "`Hi!Bye`", "`Hi!` and `Bye` on two lines", "`Hi! Bye`"], a: 1, e: "`end=\"!\"` replaces the usual new line with `!`, so the next print continues on the same line." },
    { t: "prac", items: [
      { q: "Print today's date as `25/10/2026` using three separate values `25`, `10`, `2026` and the `sep` option.", sol: R`print(25, 10, 2026, sep="/")`, out: R`25/10/2026` },
      { q: "A hotel room costs 3499.5 per night for 3 nights. Print `Total: ₹10,498.50` using an f-string.", hint: "Use the format spec `,.2f`.", sol: R`
rate = 3499.5
nights = 3
print(f"Total: ₹{rate * nights:,.2f}")`, out: R`Total: ₹10,498.50` },
      { q: "Print a simple bill. Start with 30 dashes. Then print `Item` left-aligned in 15 spaces and `Price` right-aligned in 10. Add two items, then the dashes again.", sol: R`
print("-" * 30)
print(f"{'Item':<15}{'Price':>10}")
print(f"{'Masala Dosa':<15}{120:>10.2f}")
print(f"{'Filter Coffee':<15}{45:>10.2f}")
print("-" * 30)`, out: R`
------------------------------
Item                Price
Masala Dosa        120.00
Filter Coffee       45.00
------------------------------` },
      { q: "Occupancy is 0.8732. Print it as a percentage with one decimal place.", sol: R`
occupancy = 0.8732
print(f"Occupancy: {occupancy:.1%}")`, out: R`Occupancy: 87.3%` }
    ]}
  ],
  take: [
    "`print(a, b)` puts one space between items. Change it with `sep`. Change the line ending with `end`.",
    "Use `\\n` for a new line, `\\t` for a tab, `\\\\` for a backslash.",
    "`+` joins text, `*` repeats it. You cannot `+` text and a number.",
    "f-strings: `f\"Total: {total}\"`. Format with `:.2f`, `:,`, `:.1%`.",
    "Use `/` for percentages, never `//`."
  ],
  quiz: [
    { q: "What does this print?", c: R`print("a", "b", "c", sep="-")`, o: ["`a b c`", "`a-b-c`", "`abc`", "`a-b-c-`"], a: 1, chk: 1, e: "`sep` sets what goes between items." },
    { q: "What does `\\n` do inside a string?", o: ["Prints the letter n", "Starts a new line", "Adds a tab", "Ends the program"], a: 1, e: "`\\n` is the new line escape character." },
    { q: "What happens when you run `print(\"Age: \" + 25)`?", o: ["Prints `Age: 25`", "Prints `Age: + 25`", "`TypeError`", "Prints `Age: \"25\"`"], a: 2, e: "You cannot join text and a number with `+`. Use `str(25)` or an f-string." },
    { q: "What does this print?", c: R`print(f"{3.14159:.2f}")`, o: ["`3.14`", "`3.1`", "`3.14159`", "`3.15`"], a: 0, chk: 1, e: "`.2f` shows exactly 2 decimal places (rounded)." },
    { q: "What does this print?", c: R`print(f"{1500000:,}")`, o: ["`1500000`", "`1,500,000`", "`1.500.000`", "`15,00,000`"], a: 1, chk: 1, e: "The `,` spec adds thousands separators in the international style." },
    { q: "Which line prints `It's fine` without an error?", o: ["`print('It's fine')`", "`print(\"It's fine\")`", "`print(It's fine)`", "`print(\"It\"s fine\")`"], a: 1, e: "Use double quotes around text that contains a single quote, or escape it as `\\'`." },
    { q: "What does this print?", c: R`print("ab" * 3)`, o: ["`ab3`", "`ababab`", "`ab ab ab`", "An error"], a: 1, chk: 1, e: "Multiplying text by a whole number repeats it." },
    { q: "What does this print?", c: R`print(f"{0.4567:.1%}")`, o: ["`0.5%`", "`45.7%`", "`46%`", "`0.4567%`"], a: 1, chk: 1, e: "`%` multiplies by 100 and adds a percent sign. `.1` keeps one decimal place." }
  ],
  cards: [
    ["What do `sep` and `end` do in `print()`?", "`sep` is put **between** items (default a space). `end` is put **after** the last item (default a new line)."],
    ["How do you write an f-string?", "Put `f` before the quote and variables in curly brackets.", R`print(f"Hello {name}, total is {total}")`],
    ["Format a number with 2 decimal places", "`f\"{x:.2f}\"`, for example 3.14159 becomes 3.14"],
    ["Add thousands commas to a number", "`f\"{x:,}\"`, for example 1500000 becomes 1,500,000"],
    ["Show 0.256 as a percentage", "`f\"{0.256:.1%}\"` gives `25.6%`"],
    ["Name 3 escape characters", "`\\n` new line, `\\t` tab, `\\\\` backslash. Also `\\'` and `\\\"` for quotes."],
    ["Why does `print(\"a\", \"b\")` show `a b`?", "`print()` puts one space (the default `sep`) between items."],
    ["What is a raw string?", "A string with `r` in front, like `r\"C:\\new\"`. Backslashes are kept as they are. Great for Windows paths."]
  ],
  cheat: [
    ["print(a, b, sep=\"-\")", "Put - between items"],
    ["print(x, end=\" \")", "Stay on the same line"],
    ["\"\\n\"  \"\\t\"  \"\\\\\"", "New line, tab, backslash"],
    ["f\"Hi {name}\"", "Put a variable into text"],
    ["f\"{x:.2f}\"", "2 decimal places"],
    ["f\"{x:,.2f}\"", "Commas and 2 decimals"],
    ["f\"{x:.1%}\"", "Percentage"],
    ["f\"{s:<10}\"  f\"{s:>10}\"", "Pad left-aligned / right-aligned"],
    ["\"-\" * 30", "A line of 30 dashes"]
  ]
});
