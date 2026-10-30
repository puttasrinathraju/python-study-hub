/* ---------- Revision posters: Part 1 and 2 ---------- */
POSTERS.intro = {
  title: "Meet Python: How Your Code Runs",
  sub: "What Python does with your code, where you write it, and the few rules it never bends.",
  mods: [
    { title: "How Python runs code", sub: "Top to bottom, one line at a time", cards: [
      { h: "The run order", svg: V.flow([
        { t: "You press Shift + Enter", k: "acc" },
        { t: "Read the next line", k: "box" },
        { t: "Run it\n(any output appears)", k: "tip" },
        { t: "More lines?", k: "hl", d: true, lbl: "no" },
        { t: "Cell finished", k: "soft" }
      ], { back: [{ from: 3, to: 1, lbl: "yes", ln: "a" }], label: "Python reads and runs one line at a time" }) },
      { h: "Where you write Python", rules: [["acc", "Jupyter", "cells with output below (your course notebooks)"], ["acc", "Google Colab", "Jupyter in the browser, nothing to install"], ["acc", "VS Code", "for bigger projects with many files"], ["acc", ".py file", "a script you run with `python file.py`"]] },
      { h: "Text vs maths in print()", span: 1, c: R`
print("10 + 5")   # in quotes: text
print(10 + 5)     # no quotes: maths`, o: R`
10 + 5
15` }
    ]},
    { title: "Rules Python never bends", sub: "Get these right and most errors disappear", cards: [
      { h: "Correct", k: "tip", c: R`
if 5 > 2:
    print("yes")`, verdict: ["ok", "Colon, then a 4-space indent"] },
      { h: "Error", k: "trap", c: R`
if 5 > 2:
print("yes")`, verdict: ["no", "IndentationError"] },
      { h: "Five syntax rules", span: 1, rules: [["key", "one line", "one instruction per line, no semicolons"], ["key", ":", "a colon starts a block"], ["key", "4 spaces", "mark the lines inside the block"], ["key", "print \u2260 Print", "capital letters matter"], ["key", "# note", "comments are ignored by Python"]] }
    ], table: { head: ["You see", "It usually means", "Fix"], rows: [
      ["`SyntaxError`", "A grammar mistake", "Add the missing `:`, bracket or quote"],
      ["`IndentationError`", "Wrong spaces", "Indent 4 spaces after a `:`"],
      ["`NameError`", "Unknown name", "Check spelling, capitals and run order"],
      ["`TypeError`", "Types do not mix", "Convert with `str()` or `int()`"]
    ]}}
  ]
};

POSTERS.variables = {
  title: "Variables & Data Types",
  sub: "Names point at values. Every value has a type. Text that looks like a number is still text.",
  mods: [
    { title: "Variables are name tags", sub: "= stores, == compares", cards: [
      { h: "Names point at values", span: 1, svg: V.refs({ vars: [["name", 0], ["age", 1], ["weight", 2], ["paid", 3]], objs: [{ v: "\"Raman\"", t: "str" }, { v: "16", t: "int" }, { v: "77.43", t: "float" }, { v: "False", t: "bool" }] }) },
      { h: "Naming rules", rules: [["tip", "ticket_price", "letters, digits, _"], ["trap", "2nd_place", "cannot start with a digit"], ["trap", "ticket price", "no spaces"], ["trap", "class", "no keywords"], ["key", "name \u2260 Name", "case-sensitive"]] },
      { h: "= vs ==", rules: [["acc", "x = 5", "store 5 in x"], ["acc", "x == 5", "ask: is x equal to 5? gives True/False"]], c: R`
x = 5
y = x
x = 10
print(x, y)`, o: R`10 5` }
    ]},
    { title: "Types and casting", sub: "Convert before you calculate", cards: [
      { h: "input() always gives text", k: "trap", c: R`
seats = "3"        # what input() returns
print(seats * 2)
print(int(seats) * 2)`, o: R`
33
6` },
      { h: "Casting traps", k: "key", rules: [["trap", "int(3.99)", "3: cuts, does not round"], ["trap", "int(\"3.5\")", "ValueError"], ["trap", "bool(\"False\")", "True: any non-empty text"], ["trap", "0.1 + 0.2", "0.30000000000000004"], ["trap", "round(2.5)", "2: half goes to even"]] }
    ], table: { head: ["Type", "Example", "Use for", "Convert with"], rows: [
      ["`int`", "`16`", "whole numbers", "`int(\"16\")`"],
      ["`float`", "`77.43`", "decimals", "`float(\"77.43\")`"],
      ["`str`", "`\"Raman\"`", "text", "`str(16)`"],
      ["`bool`", "`True`", "yes / no", "`bool(1)`"],
      ["`None`", "`None`", "no value yet", "\u2013"]
    ]}}
  ]
};

POSTERS.output = {
  title: "Printing & f-Strings",
  sub: "Control spaces and new lines, then format numbers so a manager can read them.",
  mods: [
    { title: "print() controls", sub: "sep goes between, end goes after", cards: [
      { h: "sep and end", c: R`
print("A", "B", "C")
print("A", "B", sep="-")
print("A", end="")
print("B")`, o: R`
A B C
A-B
AB` },
      { h: "Escape characters", rules: [["acc", "\\n", "new line"], ["acc", "\\t", "tab"], ["acc", "\\\\", "a real backslash"], ["acc", "\\'  \\\"", "quotes inside quotes"], ["acc", "r\"C:\\new\"", "raw string: keep backslashes"]] },
      { h: "+ only joins text", k: "trap", span: 1, c: R`print("Age: " + 25)`, verdict: ["no", "TypeError: use str(25) or an f-string"] }
    ]},
    { title: "f-strings", sub: "f\"...{value:spec}...\"", cards: [
      { h: "Anatomy of an f-string", span: 1, svg: ART.fstring() },
      { h: "A neat money line", c: R`
amount = 1234.5
print(f"Total: {amount:,.2f}")
print(f"{0.256:.1%}")`, o: R`
Total: 1,234.50
25.6%` },
      { h: "Line up columns", c: R`
print(f"[{'Tea':<6}]")
print(f"[{'Tea':>6}]")`, o: R`
[Tea   ]
[   Tea]` }
    ], table: { head: ["Spec", "Input", "Shows", "Use for"], rows: [
      ["`.2f`", "`1234.5678`", "`1234.57`", "money, averages"],
      ["`,`", "`1500000`", "`1,500,000`", "big numbers"],
      ["`,.2f`", "`1234.5678`", "`1,234.57`", "money with commas"],
      ["`.1%`", "`0.256`", "`25.6%`", "percentages"],
      ["`03d`", "`7`", "`007`", "IDs"],
      ["`>8`", "`\"Tea\"`", "`     Tea`", "columns"]
    ]}}
  ]
};

POSTERS.operators = {
  title: "Operators: Division, Order & Identity",
  sub: "The three operators that trip up everyone: //, % and is.",
  mods: [
    { title: "The division family", sub: "/ gives a float, // whole groups, % what is left", cards: [
      { h: "11 sweets, 3 friends", span: 1, svg: ART.sweets() },
      { h: "Quick rules", rules: [["acc", "7 / 2", "3.5 (always a float)"], ["acc", "7 // 2", "3 (whole groups)"], ["acc", "7 % 2", "1 (left over)"], ["trap", "-7 // 2", "-4 (rounds DOWN)"], ["tip", "n % 2 == 0", "is n even?"]] },
      { h: "The course margin bug", k: "trap", c: R`
print((30000 // 180000) * 100)
print(round((30000 / 180000) * 100, 2))`, o: R`
0
16.67`, foot: "Use / for percentages, never //" }
    ]},
    { title: "Order and identity", sub: "Brackets first. == for values, is for None", cards: [
      { h: "Precedence ladder", svg: V.flow([
        { t: "( )  brackets", k: "acc", code: 1 }, { t: "**  power", k: "box", code: 1 }, { t: "*  /  //  %", k: "box", code: 1 },
        { t: "+  -", k: "box", code: 1 }, { t: "==  >  <  in  is", k: "hl", code: 1 }, { t: "not, then and, then or", k: "soft", code: 1 }
      ], { label: "Operator precedence from highest to lowest" }), foot: "Top runs first. Same rung: left to right." },
      { h: "== vs is", svg: V.refs({ vars: [["a", 0], ["b", 1], ["c", 0]], objs: [{ v: "[1, 2, 3]", t: "obj 1" }, { v: "[1, 2, 3]", t: "obj 2" }], objW: 170, gapX: 90 }), rules: [["tip", "a == b", "True: same values"], ["trap", "a is b", "False: two objects"], ["tip", "a is c", "True: same object"]] }
    ], table: { head: ["Family", "Operators", "Gives"], rows: [
      ["Arithmetic", "`+ - * / // % **`", "a number"],
      ["Comparison", "`== != > < >= <=`", "True / False"],
      ["Logical", "`and or not`", "True / False"],
      ["Assignment", "`= += -= *= /=`", "updates a variable"],
      ["Membership", "`in`, `not in`", "True / False"],
      ["Identity", "`is`, `is not`", "True / False (same object?)"]
    ]}}
  ]
};

POSTERS.conditions = {
  title: "Decisions: if, elif, else",
  sub: "Python checks from the top and runs only the first branch that is True.",
  mods: [
    { title: "How an elif chain runs", sub: "First True wins, the rest are skipped", cards: [
      { h: "score = 85", span: 1, svg: V.flow([
        { t: "score >= 90 ?", d: true, k: "hl", lbl: "False" },
        { t: "score >= 80 ?", d: true, k: "hl", lbl: "False" },
        { t: "score >= 70 ?", d: true, k: "hl", lbl: "False" },
        { t: "else: grade = \"F\"", k: "soft", code: 1 }
      ], { side: [{ from: 0, t: "grade = \"A\"", k: "box", lbl: "True" }, { from: 1, t: "grade = \"B\"  \u2190 runs", k: "tip", lbl: "True", ln: "g" }, { from: 2, t: "grade = \"C\"", k: "box", lbl: "True" }], label: "elif ladder" }) },
      { h: "Order matters", k: "trap", c: R`
marks = 92
if marks >= 45:
    print("Grade D")
elif marks >= 90:
    print("Grade A")`, o: R`Grade D`, foot: "Put the strictest check first" },
      { h: "One-line choice", c: R`
age = 20
print("Adult" if age >= 18 else "Minor")`, o: R`Adult` }
    ]},
    { title: "Truthy, falsy & traps", sub: "Any value can act as True or False", cards: [
      { h: "Falsy values", k: "key", rules: [["trap", "0  0.0", "zero"], ["trap", "\"\"", "empty text"], ["trap", "[]  {}  ()  set()", "empty collections"], ["trap", "None", "no value"]], foot: "Everything else is truthy, even \"0\" and \" \"" },
      { h: "x == 1 or 2", k: "trap", c: R`
choice = 5
if choice == 1 or 2:
    print("runs for ANY choice")`, o: R`runs for ANY choice`, verdict: ["ok", "Write: if choice in (1, 2):"] }
    ], table: { head: ["Form", "Use when"], rows: [
      ["`if`", "Do something only when True"],
      ["`if-else`", "Exactly one of two paths"],
      ["`if-elif-else`", "Many paths, first True wins"],
      ["nested `if`", "A check that only matters after another passes"],
      ["`a if c else b`", "Pick between two values in one line"],
      ["`match-case`", "One value against many fixed options"]
    ]}}
  ]
};

POSTERS.forloops = {
  title: "For Loops & range()",
  sub: "Repeat code for every item, and remember that stop is never included.",
  mods: [
    { title: "range() and the loop", sub: "range(start, stop, step)", cards: [
      { h: "range(2, 10, 2)", span: 1, svg: V.strip(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], { pos: false, hl: [2, 4, 6, 8], dim: [10], bracket: [2, 10, "2, 4, 6, 8  (10 is the stop: left out)"] }) },
      { h: "The three forms", rules: [["acc", "range(5)", "0 1 2 3 4"], ["acc", "range(2, 5)", "2 3 4"], ["acc", "range(0, 10, 3)", "0 3 6 9"], ["acc", "range(5, 0, -1)", "5 4 3 2 1"], ["trap", "range(1, 10)", "stops at 9! use 11"]] },
      { h: "Accumulator", c: R`
total = 0
for p in [120, 45, 80]:
    total += p
print(total)`, o: R`245` }
    ]},
    { title: "Patterns and nesting", sub: "Five patterns cover almost every loop", cards: [
      { h: "The 5 patterns", rules: [["tip", "total += x", "sum (start at 0)"], ["tip", "count += 1", "count matches"], ["tip", "out.append(x)", "filter into a new list"], ["tip", "if x > best", "find the biggest"], ["tip", "fact *= i", "multiply (start at 1)"]] },
      { h: "Nested: 3 x 3 = 9 rounds", svg: V.cells([1, 2, 3].map(function(i){ return { label: "i = " + i, cells: [1, 2, 3].map(function(j){ return { t: "(" + i + "," + j + ")", k: "run" }; }) }; }), { cl: ["j = 1", "j = 2", "j = 3"], cw: 58 }), foot: "The inner loop restarts for every outer round" }
    ], table: { head: ["Tool", "Gives you", "Example"], rows: [
      ["`enumerate()`", "index and item", "`for i, x in enumerate(items):`"],
      ["`zip()`", "two lists side by side", "`for a, b in zip(l1, l2):`"],
      ["`for-else`", "else runs if no break", "\"not found\" messages"],
      ["`end=\" \"`", "print on one line", "`print(i, end=\" \")`"]
    ]}}
  ]
};

POSTERS.whileloops = {
  title: "While Loops, break, continue & pass",
  sub: "Loop until something happens, and take control of any loop.",
  mods: [
    { title: "while loop anatomy", sub: "Start, check, run, update, repeat", cards: [
      { h: "count from 1 to 3", span: 1, svg: V.flow([
        { t: "count = 1", k: "soft", code: 1 },
        { t: "count <= 3 ?", d: true, k: "hl", lbl: "True" },
        { t: "print(count)", k: "box", code: 1 },
        { t: "count += 1", k: "tip", code: 1 }
      ], { back: [{ from: 3, to: 1, lbl: "repeat", ln: "a" }], side: [{ from: 1, t: "loop ends", k: "soft", lbl: "False" }], label: "while loop flowchart" }) },
      { h: "Infinite loop", k: "trap", c: R`
count = 1
while count <= 3:
    print(count)
    # forgot count += 1`, verdict: ["no", "Runs forever: press Stop"] },
      { h: "for or while?", rules: [["acc", "for", "you know what to loop over"], ["acc", "while", "loop until something happens"], ["acc", "while True + break", "menus, input checks, games"]] }
    ]},
    { title: "break, continue, pass in nested loops", sub: "Each square is one inner round. Outer loop i, inner loop j, the statement fires when j == 3", cards: [
      { h: "break: leave the inner loop", k: "trap", span: 1, svg: V.cells([1, 2].map(function(i){ return { label: "i = " + i, cells: [{ t: "j=1", k: "run" }, { t: "j=2", k: "run" }, { t: "break", k: "stop" }, { t: "j=4", k: "never" }] }; }), { cw: 70 }), foot: "j = 4 never runs, but the outer loop carries on with i = 2" },
      { h: "continue: skip this round", k: "key", span: 1, svg: V.cells([1, 2].map(function(i){ return { label: "i = " + i, cells: [{ t: "j=1", k: "run" }, { t: "j=2", k: "run" }, { t: "skip", k: "skip" }, { t: "j=4", k: "run" }] }; }), { cw: 70 }), foot: "Only the rest of round j = 3 is skipped" },
      { h: "pass: do nothing", k: "tip", span: 1, svg: V.cells([1, 2].map(function(i){ return { label: "i = " + i, cells: [{ t: "j=1", k: "run" }, { t: "j=2", k: "run" }, { t: "pass", k: "run" }, { t: "j=4", k: "run" }] }; }), { cw: 70 }), foot: "Everything still runs. pass is just a placeholder" }
    ], table: { head: ["", ["break", "trap"], ["continue", "key"], ["pass", "tip"]], rows: [
      ["Action", "Exits the innermost loop", "Skips the rest of this round", "Does nothing"],
      ["Inner loop", "Remaining rounds never run", "Jumps to the next round", "Carries on as normal"],
      ["Outer loop", "Moves on to its next round", "Unaffected", "Unaffected"]
    ]}}
  ]
};
