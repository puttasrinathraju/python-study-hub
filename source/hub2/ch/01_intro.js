chapter({
  id: "intro", part: 1, title: "Meet Python", nav: "Meet Python", time: "30 min", lvl: "Beginner",
  keys: "introduction what is python jupyter colab print comment syntax indentation error",
  lead: "What Python is, why data analysts use it, and how to write and run your very first lines of code.",
  goals: [
    "What Python is and what it can do",
    "How Python reads and runs your code, line by line",
    "How to use `print()` and comments",
    "The few syntax rules that matter: colons, indentation and case",
    "How to read an error message without panic"
  ],
  src: ["Course notebook da_cohort_13_first.ipynb", "W3Schools: Intro, Get Started, Syntax, Output, Comments"],
  body: [
    { t: "h", text: "What is Python?" },
    { t: "p", b: "Python is a ==programming language==. A programming language is a way to give instructions to a computer. You type the instructions as plain text, and Python carries them out." },
    { t: "p", b: "It was created by Guido van Rossum and released in 1991. Today it is one of the most popular languages in the world. It is **easy to read**, **free**, and works on Windows, Mac and Linux." },
    { t: "note", k: "like", b: "Python is like a very obedient assistant. It does exactly what you write, in the order you write it. It never guesses what you meant, so small typos matter." },
    { t: "deck", title: "Python in 5 slides", s: [
      { big: "Python is a language for giving instructions to a computer.", b: "You write instructions as text. Python reads them and does them, one line at a time." },
      { h: "It reads almost like English", b: "Even if you have never coded, you can probably guess what this does:", c: R`
age = 20
if age >= 18:
    print("You can vote")`, o: R`You can vote` },
      { h: "It is free and runs everywhere", items: ["Windows, Mac, Linux, even a Raspberry Pi", "Free to download and use, for any purpose", "A huge community, so every question you have is already answered online"] },
      { h: "It has a library for almost everything", items: ["**NumPy**: fast maths on big lists of numbers", "**pandas**: tables, like Excel but much more powerful", "**Matplotlib**: charts and graphs", "**scikit-learn**: machine learning"] },
      { h: "Why it matters for you as a data analyst", items: ["Clean messy data in seconds instead of hours", "Work with files far too big for Excel", "Automate a report you build every week", "Make charts and share findings"] }
    ]},
    { t: "h", text: "What can Python do?" },
    { t: "ul", items: [
      "**Data analysis**: read sales files, clean them, find patterns, make charts",
      "**Automation**: rename 500 files, send reports, fill spreadsheets",
      "**Web development**: the back end of websites like Instagram",
      "**Machine learning and AI**: train models that make predictions",
      "**Maths and science**: big calculations and simulations"
    ]},
    { t: "note", k: "why", b: "Excel is great up to a point. Python takes over when data gets large, messy or repetitive. Most data analyst job posts ask for SQL, Excel and Python together." },
    { t: "h", text: "How Python runs your code" },
    { t: "p", b: "Python is an ==interpreted== language. A program called the **interpreter** reads your code from **top to bottom**. It runs one line, then moves to the next. One exception: a SyntaxError anywhere stops the whole cell before any line runs." },
    { t: "anim", title: "Watch Python run a program line by line", trace: { code: R`
print("Good morning!")
city = "Jaipur"
temp = 31
print(city, "is", temp, "degrees")
temp = temp + 2
print("Later:", temp)`, steps: [
      { l: 1, c: "Python always starts at the top. The yellow line is the line running right now." },
      { l: 1, o: "Good morning!\n", c: "Line 1 runs `print()`. The text appears in the Output box." },
      { l: 2, v: { city: ["\"Jaipur\"", "str"] }, c: "Line 2 creates a **variable** called `city` and stores the text \"Jaipur\" in it. Nothing is printed." },
      { l: 3, v: { temp: ["31", "int"] }, c: "Line 3 stores the number 31 in a variable called `temp`." },
      { l: 4, o: "Jaipur is 31 degrees\n", c: "Line 4 prints four things. The commas put a space between them." },
      { l: 5, v: { temp: ["33", "int"] }, c: "Python works out the right side first: 31 + 2 = 33. Then it stores 33 back in `temp`. The old value 31 is gone." },
      { l: 6, o: "Later: 33\n", c: "Line 6 prints the new value. The program ends after the last line." }
    ]}},
    { t: "h", text: "Where you write Python" },
    { t: "table", head: ["Tool", "What it is", "Good for"], rows: [
      ["**Jupyter Notebook**", "Code in small boxes called cells. Each cell shows its output right below it.", "Learning and data analysis. Your course notebooks (.ipynb files) are Jupyter notebooks."],
      ["**Google Colab**", "Jupyter in the browser. Nothing to install.", "Practising anywhere, free."],
      ["**VS Code / PyCharm**", "A full code editor.", "Bigger projects with many files."],
      ["**Python file (.py)**", "A plain text file you run with `python file.py`.", "Scripts and automation."]
    ]},
    { t: "note", k: "tip", h: "Running a cell", b: "In Jupyter or Colab, click inside a cell and press **Shift + Enter** to run it. The number in `In [3]:` tells you the order cells were run in. If you run cells out of order, your variables can get confusing. When in doubt, use **Kernel > Restart Kernel and Run All Cells** (Jupyter) or **Runtime > Restart session and run all** (Colab)." },
    { t: "h", text: "Your first program: print()" },
    { t: "p", b: "`print()` shows something on the screen. Put text inside quotes. Numbers do not need quotes." },
    { t: "code", c: R`
print("Hello World")
print("Hi, How are you?")
print(25)
print(10 + 5)`, o: R`
Hello World
Hi, How are you?
25
15` },
    { t: "p", b: "Notice the last line. Python worked out `10 + 5` first, then printed the answer. Each `print()` starts on a new line." },
    { t: "pred", c: R`
print("10 + 5")
print(10 + 5)`, o: ["`15` and `15`", "`10 + 5` and `15`", "`10 + 5` and `10 + 5`", "An error"], a: 1, e: "Anything inside quotes is **text**, so Python prints it exactly as written. Without quotes, `10 + 5` is maths, so Python prints 15." },
    { t: "h", text: "Comments: notes for humans" },
    { t: "p", b: "A ==comment== starts with `#`. Python ignores everything after `#` on that line. Use comments to explain **why** your code does something." },
    { t: "code", c: R`
# This program prints a welcome message
print("Welcome to Python")   # comment at the end of a line

# print("This line will not run")

"""
Text inside triple quotes that is not stored anywhere
is also ignored. People use it as a multi-line note. It is really a string, not a comment, so do not make it the last line of a cell (Jupyter would show it).
"""
print("Done")`, o: R`
Welcome to Python
Done` },
    { t: "note", k: "tip", b: "In Jupyter and VS Code, select some lines and press **Ctrl + /** to comment or uncomment them all at once. This is handy for switching code off while testing." },
    { t: "h", text: "The syntax rules that matter" },
    { t: "p", b: "**Syntax** means the grammar rules of a language. Python has very few, but you must follow them exactly." },
    { t: "ol", items: [
      "**One instruction per line.** No semicolons needed at the end.",
      "**A colon `:` starts a block.** Lines like `if`, `for`, `while` and `def` end with a colon.",
      "**Indentation marks the block.** The lines inside a block are pushed right by 4 spaces. Python uses this instead of curly brackets `{ }`.",
      "**Case matters.** `print` works. `Print` and `PRINT` do not.",
      "**Quotes must match.** `\"hello\"` and `'hello'` are fine. `\"hello'` is an error."
    ]},
    { t: "cmp", l: { h: "Correct", c: R`
if 5 > 2:
    print("Five is bigger")`, o: R`Five is bigger` }, r: { h: "Error: no indentation", c: R`
if 5 > 2:
print("Five is bigger")`, o: R`IndentationError: expected an indented block after 'if' statement on line 1`, err: true } },
    { t: "note", k: "trap", b: "Mixing tabs and spaces, or using 3 spaces on one line and 4 on the next, causes `IndentationError`. Jupyter inserts 4 spaces when you press Tab. Colab inserts 2 by default. Both work, as long as you stay consistent, so just press Tab and let the editor do it." },
    { t: "h", text: "Errors are normal" },
    { t: "p", b: "Every programmer sees errors every day. An error message is Python telling you **what** went wrong and **where**. Read the **last line** first. It names the error type." },
    { t: "code", c: R`Print("Hello")`, o: R`NameError: name 'Print' is not defined. Did you mean: 'print'?`, err: true },
    { t: "table", head: ["You see", "It usually means"], rows: [
      ["`SyntaxError`", "A grammar mistake: missing colon, bracket or quote."],
      ["`IndentationError`", "The spaces at the start of a line are wrong."],
      ["`NameError`", "You used a name Python does not know. Often a typo or wrong capital letter."],
      ["`TypeError`", "You mixed types that do not work together, like text + number."]
    ], cap: "You will meet many more errors in the Errors chapter." },
    { t: "prac", items: [
      { q: "Print your name, your city and your favourite food on three separate lines.", sol: R`
print("Raman")
print("Jaipur")
print("Dal baati")`, out: R`
Raman
Jaipur
Dal baati` },
      { q: "Print the result of 125 multiplied by 8. Add a comment above it that explains what the line does.", hint: "In Python, multiply uses `*`.", sol: R`
# 125 tickets sold at 8 rupees each
print(125 * 8)`, out: R`1000` },
      { q: "This code has two mistakes. Fix it: `if 10 > 3` then on the next line `print(\"yes\")` with no spaces in front.", hint: "Look for a missing symbol at the end of the first line, and missing spaces on the second.", sol: R`
if 10 > 3:
    print("yes")`, out: R`yes` }
    ]}
  ],
  take: [
    "Python runs code from top to bottom, one line at a time.",
    "`print()` shows output. Text goes in quotes. Numbers and maths do not.",
    "`#` starts a comment. Python ignores it.",
    "A colon `:` opens a block, and 4 spaces of indentation keep lines inside it.",
    "Read the last line of an error first. It tells you the error type."
  ],
  quiz: [
    { q: "How does Python run the code in a cell or file?", o: ["All lines at the same time", "From top to bottom, one line at a time", "From bottom to top", "Only the lines that contain print()"], a: 1, e: "The interpreter reads and runs one line, then moves to the next, from top to bottom." },
    { q: "What does Python use to group lines into a block, for example the lines inside an `if`?", o: ["Curly brackets `{ }`", "Indentation (spaces at the start of the line)", "Semicolons `;`", "The word `end`"], a: 1, e: "Python uses indentation, normally 4 spaces, after a line that ends with a colon." },
    { q: "Which line is a Python comment?", o: ["`# total sales for March`", "`// total sales for March`", "`/* total sales */`", "`-- total sales`"], a: 0, e: "Python comments start with `#`. The others are comment styles from other languages." },
    { q: "What is printed?", c: R`print("7 * 3")`, o: ["`21`", "`7 * 3`", "`\"7 * 3\"`", "An error"], a: 1, e: "The maths is inside quotes, so it is text. Python prints the text exactly." },
    { q: "Why does `Print(\"hi\")` give an error?", o: ["The quotes are wrong", "Python is case-sensitive, so `Print` is not the same as `print`", "You need a semicolon", "print only works with numbers"], a: 1, e: "Python treats capital and small letters as different. The built-in function is `print`, all lowercase." },
    { q: "You see `IndentationError: expected an indented block`. What is the most likely fix?", o: ["Add 4 spaces at the start of the line after the colon", "Remove the colon", "Reinstall Python", "Put the code in quotes"], a: 0, e: "After a line ending with `:`, Python expects at least one indented line." },
    { q: "In Jupyter, what does `In [3]:` beside a cell mean?", o: ["This cell has 3 lines", "This was the 3rd cell run in this session", "There are 3 errors", "The cell will run 3 times"], a: 1, e: "The number shows the order in which cells were run. It helps you spot cells run out of order." }
  ],
  cards: [
    ["What is Python?", "A free, easy-to-read programming language. You write instructions as text and Python runs them, one line at a time."],
    ["What does `print()` do?", "It shows a value on the screen, in the output area below the cell."],
    ["How do you write a comment?", "Start it with `#`. Python ignores everything after `#` on that line."],
    ["How does Python know which lines belong to a block?", "By **indentation**. The lines indented (usually 4 spaces) under a line ending in `:` form one block."],
    ["Is Python case-sensitive?", "Yes. `name`, `Name` and `NAME` are three different names. `Print` is not `print`."],
    ["What is Jupyter Notebook?", "A tool where you write code in cells, run each cell with Shift + Enter, and see the output right under it. Google Colab is the online version."],
    ["Which line of an error message should you read first?", "The **last line**. It names the error type, like `NameError`, and says what went wrong."],
    ["What is the difference between `print(\"5 + 5\")` and `print(5 + 5)`?", "The first prints the text `5 + 5`. The second does the maths and prints `10`."]
  ],
  cheat: [
    ["print(\"Hello\")", "Show text on the screen"],
    ["print(10 + 5)", "Do the maths, then show the answer (15)"],
    ["# note", "A comment. Python ignores it"],
    ["Shift + Enter", "Run the current cell in Jupyter or Colab"],
    ["Ctrl + /", "Comment or uncomment selected lines"],
    ["if x > 0:\n    print(x)", "Colon opens a block. Indent the inside by 4 spaces"]
  ]
});
