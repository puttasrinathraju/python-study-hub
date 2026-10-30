/* ---------- Part 2 overview: Decisions and loops ---------- */
overview({
  part: 2, title: "Part 2 overview: decisions and loops", nav: "Part 2 overview", time: "25 min",
  keys: "if elif else for while break continue pass range enumerate zip truthy falsy loop else nested",
  lead: "Everything from Part 2 side by side: how code chooses with `if`, and how it repeats with `for` and `while`. The tables below show exactly where beginners mix these up.",
  five: [
    "`if` runs a block only when its condition is True. In an `if / elif / else` chain only the **first** True branch runs.",
    "Falsy values are `0`, `0.0`, `\"\"`, `[]`, `()`, `{}`, `set()`, `None` and `False`. Everything else counts as True.",
    "`for` takes one item per round from a sequence. `range(start, stop, step)` **never** includes stop.",
    "`while` repeats while its condition stays True, so something inside must change. `while True` plus `break` is the menu pattern.",
    "`break` leaves the loop, `continue` skips to the next round and `pass` does nothing. A loop's `else` runs only when no `break` happened."
  ],
  body: [
    { t: "h", text: "Mind map of Part 2" },
    { t: "mm", title: "Part 2 at a glance", root: "Part 2: Decide & repeat", hint: "Tap a branch to open that chapter", kids: [
      { t: "5. If / elif / else", go: "conditions", k: ["if cond:", "elif and else", "and / or / not", "truthy and falsy", "a if c else b", "match-case"] },
      { t: "6. For loops", go: "forloops", k: ["for x in items:", "range(start, stop, step)", "sum, count, filter, max", "enumerate() and zip()", "nested loops", "for-else"] },
      { t: "7. While loops", go: "whileloops", k: ["while cond:", "change something each round", "while True + break", "break, continue, pass", "while-else"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "Condition", d: "Any expression that gives `True` or `False`. `if` and `while` both start with one.", c: R`
age = 20
print(age >= 18)`, o: R`True`, go: "conditions" },
      { t: "Block", d: "The indented lines after a colon. They run together, as one unit.", c: R`
if True:
    print("line 1")
    print("line 2")`, o: R`
line 1
line 2`, go: "conditions" },
      { t: "Branch", d: "One possible path in an `if / elif / else` chain. Only the first True branch runs.", c: R`
temp = 31
if temp > 35:
    print("very hot")
elif temp > 25:
    print("warm")
else:
    print("cool")`, o: R`warm`, go: "conditions" },
      { t: "Truthy and falsy", d: "Every value counts as True or False in an `if`. Empty and zero values are falsy.", c: R`print(bool(0), bool(""), bool([]), bool("0"), bool([0]))`, o: R`False False False True True`, go: "conditions" },
      { t: "Ternary expression", d: "A one-line if/else that picks one of two values.", c: R`
marks = 72
print("Pass" if marks >= 40 else "Fail")`, o: R`Pass`, go: "conditions" },
      { t: "Loop and iteration", d: "A loop repeats a block. One round of the loop is called an iteration.", c: R`
for i in range(3):
    print("round", i)`, o: R`
round 0
round 1
round 2`, go: "forloops" },
      { t: "Iterable", d: "Anything a `for` loop can walk through: a string, list, tuple, set, dict or `range()`.", c: R`
for ch in "abc":
    print(ch, end=" ")`, o: R`a b c`, go: "forloops" },
      { t: "range()", d: "Makes a run of whole numbers: `range(start, stop, step)`. Stop is never included.", c: R`print(list(range(2, 11, 3)))`, o: R`[2, 5, 8]`, go: "forloops" },
      { t: "Accumulator", d: "A variable that builds up a result over the rounds of a loop, like a running total.", c: R`
total = 0
for price in [120, 80, 50]:
    total += price
print(total)`, o: R`250`, go: "forloops" },
      { t: "enumerate()", d: "Gives you the position and the item together on each round.", c: R`
for i, name in enumerate(["Asha", "Ravi"], start=1):
    print(i, name)`, o: R`
1 Asha
2 Ravi`, go: "forloops" },
      { t: "zip()", d: "Walks two (or more) lists side by side, pairing their items.", c: R`
for name, mark in zip(["Asha", "Ravi"], [82, 67]):
    print(name, mark)`, o: R`
Asha 82
Ravi 67`, go: "forloops" },
      { t: "Nested loop", d: "A loop inside a loop. The inner loop runs completely for every round of the outer loop.", c: R`
for r in range(2):
    for c in range(3):
        print(r, c, end=" | ")
    print()`, o: R`
0 0 | 0 1 | 0 2 |
1 0 | 1 1 | 1 2 |`, go: "forloops" },
      { t: "Infinite loop", d: "A `while` loop whose condition never becomes False. In the runner, press **Stop** to end it.", c: R`
n = 0
while n < 3:     # n changes, so this ends
    n += 1
print(n)`, o: R`3`, go: "whileloops" },
      { t: "Loop else", d: "An `else` after a `for` or `while`. It runs only when the loop finished without `break`.", c: R`
for n in [3, 7, 9]:
    if n % 2 == 0:
        break
else:
    print("no even numbers")`, o: R`no even numbers`, go: "whileloops" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "Every way to make a decision", head: ["Tool", "Shape", "What runs", "Use it for", "Example"], rows: [
      ["`if`", "`if cond:`", "The block, only when `cond` is True", "One optional action", "`if stock == 0: print(\"Sold out\")`"],
      ["`if / else`", "`if cond:` … `else:`", "Exactly one of the two blocks", "Two paths: pass/fail, yes/no", "`if age >= 18: … else: …`"],
      ["`if / elif / else`", "`if:` `elif:` … `else:`", "Only the **first** True branch", "Grades, slabs, categories", "`if s >= 90: … elif s >= 75: …`"],
      ["Nested `if`", "an `if` inside an `if`", "The inner check, only when the outer one is True", "Step-by-step checks", "Logged in? Then: is admin?"],
      ["Ternary", "`a if cond else b`", "Picks one of two **values**", "Short labels inside one line", "`\"Adult\" if age >= 18 else \"Minor\"`"],
      ["`match-case`", "`match x:` `case 1:`", "The first case that matches", "Menus with fixed options (Python 3.10+)", "`case \"q\": print(\"bye\")`"]
    ]},
    { t: "table", master: true, title: "Every way to repeat", head: ["Loop", "Shape", "Stops when", "Best for", "Watch out for"], rows: [
      ["`for` over items", "`for x in items:`", "The items run out", "Going through a list, string or dict", "Removing items from the list you are looping over"],
      ["`for` with `range()`", "`for i in range(n):`", "`n` rounds are done", "Repeating a fixed number of times", "Off by one: stop is not included"],
      ["`while`", "`while cond:`", "`cond` becomes False", "An unknown number of rounds: until money runs out", "An infinite loop if nothing changes"],
      ["`while True` + `break`", "`while True:` … `if done: break`", "`break` runs", "Menus and asking until the input is valid", "Forgetting the `break`"],
      ["Nested loops", "a loop inside a loop", "The outer loop runs out", "Grids, tables, all pairs", "Inner loop rounds multiply: 3 × 4 = 12"]
    ]},

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "`for` vs `while`", head: ["", "`for`", "`while`"], rows: [
      ["Repeats", "Once for each item", "As long as the condition is True"],
      ["You know", "What to loop over, or how many times", "When to stop, but not how many rounds"],
      ["Ends", "By itself when the items run out", "Only when the condition becomes False (or `break`)"],
      ["Risk", "Almost never infinite", "Infinite if nothing inside changes"],
      ["Example", "`for n in [3, 8, 5]:`", "`while balance > 0:`"]
    ], c: R`
for n in range(1, 4):
    print(n, end=" ")
print()
n = 1
while n <= 3:
    print(n, end=" ")
    n += 1`, o: R`
1 2 3
1 2 3`, rule: "Know the items or the count? Use `for`. Waiting for something to happen? Use `while`." },
    { t: "vs", title: "`break` vs `continue` vs `pass`", head: ["", "`break`", "`continue`", "`pass`"], rows: [
      ["What it does", "Leaves the loop right now", "Skips the rest of **this** round", "Nothing at all"],
      ["What runs next", "The first line after the loop", "The next round of the loop", "The next line, as normal"],
      ["Use it for", "You found what you need", "This item is bad, the rest may be fine", "Python needs a line but you have nothing yet"],
      ["In nested loops", "Leaves only the innermost loop", "Skips in the innermost loop", "No effect on the loop"]
    ], c: R`
for n in [1, 2, 3, 4, 5]:
    if n == 2:
        continue
    if n == 4:
        break
    print(n)
for n in range(3):
    pass
print("pass did nothing")`, o: R`
1
3
pass did nothing`, rule: "Found it? `break`. Skip this one? `continue`. Fill in later? `pass`." },
    { t: "vs", title: "An `if / elif` chain vs separate `if`s", head: ["", "`if` … `elif` …", "`if` … `if` …"], rows: [
      ["How many blocks can run", "Only the **first** True one", "**Every** one that is True"],
      ["Does order matter?", "Yes: put the strictest check first", "Less, each check stands alone"],
      ["`score = 95`, checks `>= 90` then `>= 75`", "Prints `A` only", "Prints `A` and `B`"],
      ["Use it for", "Picking **one** answer from many", "Several independent checks"]
    ], c: R`
score = 95
if score >= 90:
    print("A")
elif score >= 75:
    print("B")
print("---")
if score >= 90:
    print("A")
if score >= 75:
    print("B")`, o: R`
A
---
A
B`, rule: "One label from many options: use `elif`. Several things that can all be true: use separate `if`s." },
    { t: "vs", title: "`range(5)` vs `range(1, 6)` vs `range(10, 0, -2)`", head: ["", "`range(5)`", "`range(1, 6)`", "`range(10, 0, -2)`"], rows: [
      ["Gives", "`0 1 2 3 4`", "`1 2 3 4 5`", "`10 8 6 4 2`"],
      ["How many", "5", "5", "5"],
      ["Start", "0 (the default)", "1", "10"],
      ["Note", "Stop (5) is not included", "To get 1 to n, use `range(1, n + 1)`", "A negative step counts down. Stop (0) is still excluded"]
    ], c: R`
print(list(range(5)))
print(list(range(1, 6)))
print(list(range(10, 0, -2)))`, o: R`
[0, 1, 2, 3, 4]
[1, 2, 3, 4, 5]
[10, 8, 6, 4, 2]`, rule: "Stop is never included. Count the numbers with `(stop - start) / step`, rounded up: `range(2, 10, 3)` gives 3 numbers (2, 5, 8)." },
    { t: "vs", title: "`x == 1 or 2` vs `x == 1 or x == 2` vs `x in (1, 2)`", head: ["", "`day == \"Sat\" or \"Sun\"`", "`day == \"Sat\" or day == \"Sun\"`", "`day in (\"Sat\", \"Sun\")`"], rows: [
      ["What Python reads", "`(day == \"Sat\")` or `\"Sun\"`", "Two full comparisons", "Is `day` one of these?"],
      ["Result when `day = \"Mon\"`", "`'Sun'`, which is truthy, so the `if` **always** runs", "`False`", "`False`"],
      ["Verdict", "[[no:Bug]]", "[[ok:Correct]] but long", "[[ok:Best]]"]
    ], c: R`
day = "Mon"
print(day == "Sat" or "Sun")
print(day == "Sat" or day == "Sun")
print(day in ("Sat", "Sun"))`, o: R`
Sun
False
False`, rule: "Checking one value against several options? Use `in` with a tuple." },
    { t: "vs", title: "Falsy vs truthy values", head: ["", "Falsy (counts as False)", "Truthy (counts as True)"], rows: [
      ["Numbers", "`0`, `0.0`", "Any other number, even `-1`"],
      ["Text", "`\"\"` (empty)", "Any text, even `\"0\"`, `\"False\"` and `\" \"`"],
      ["Collections", "`[]`, `()`, `{}`, `set()`", "Any collection with at least one item, even `[0]`"],
      ["Others", "`None`, `False`", "`True`"]
    ], c: R`
print(bool(0), bool(-1), bool(""), bool("0"))
print(bool([]), bool([0]), bool(None))
cart = []
if not cart:
    print("Your cart is empty")`, o: R`
False True False True
False True False
Your cart is empty`, rule: "Empty or zero means False. Everything else means True. So `if items:` means \"if the list is not empty\"." },
    { t: "vs", title: "`if … else` vs a loop's `else`", head: ["", "`if … else`", "`for … else` / `while … else`"], rows: [
      ["`else` runs when", "The `if` condition is False", "The loop finished **without** a `break`"],
      ["Typical use", "Two paths: yes or no", "Searching: print \"not found\" when the search never broke out"],
      ["Skipped when", "The condition is True", "A `break` ran"]
    ], c: R`
for n in [4, 9, 12]:
    if n > 10:
        print("found", n)
        break
else:
    print("nothing above 10")

for n in [4, 9]:
    if n > 10:
        print("found", n)
        break
else:
    print("nothing above 10")`, o: R`
found 12
nothing above 10`, rule: "Read a loop's `else` as \"no break\"." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "These tasks combine `if` with both kinds of loop. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "Print the numbers 1 to 15 on one line. Print `Fizz` for multiples of 3, `Buzz` for multiples of 5 and `FizzBuzz` for multiples of both.", hint: "Check the strictest case (`n % 15 == 0`) first, then 3, then 5. Use `end=\" \"`.", sol: R`
for n in range(1, 16):
    if n % 15 == 0:
        print("FizzBuzz", end=" ")
    elif n % 3 == 0:
        print("Fizz", end=" ")
    elif n % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(n, end=" ")`, out: R`1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz`, why: "If you checked `% 3` first, 15 would print `Fizz` and never reach `FizzBuzz`, because only the first True branch runs." },
      { q: "Add up the even numbers from 1 to 50. Use `continue` to skip the odd ones. Print `650`.", hint: "Start `total = 0`, loop over `range(1, 51)`, and `continue` when `n % 2 == 1`.", sol: R`
total = 0
for n in range(1, 51):
    if n % 2 == 1:
        continue
    total += n
print(total)`, out: R`650`, why: "`continue` jumps straight to the next round, so odd numbers never reach `total += n`." },
      { q: "You have ₹1000 and pay ₹180 a month. Use a `while` loop to count the full months you can pay. Print `5 months, ₹100 left`.", hint: "Loop while `balance >= 180`. Inside, subtract 180 and add 1 to `months`.", starter: "balance = 1000\nmonths = 0\n", sol: R`
balance = 1000
months = 0
while balance >= 180:
    balance -= 180
    months += 1
print(f"{months} months, ₹{balance} left")`, out: R`5 months, ₹100 left`, why: "You do not know the number of rounds in advance, so `while` fits. `balance` changes every round, so the loop ends." },
      { q: "`scores = [72, 55, 38, 90]`. Find the first score below 40 and print `First fail: 38 at position 3`. If there is none, print `Everyone passed`.", hint: "Use `enumerate(scores, start=1)`, `break` when you find it, and a `for … else` for the \"none\" case.", starter: "scores = [72, 55, 38, 90]\n", sol: R`
scores = [72, 55, 38, 90]
for pos, s in enumerate(scores, start=1):
    if s < 40:
        print(f"First fail: {s} at position {pos}")
        break
else:
    print("Everyone passed")`, out: R`First fail: 38 at position 3`, why: "`break` stops at the first match, and the loop's `else` only runs when no `break` happened." }
    ]}
  ],
  quiz: [
    { q: "What does this print?", c: R`
score = 85
if score >= 50:
    print("C")
elif score >= 80:
    print("A")
else:
    print("F")`, o: ["`A`", "`C`", "`A` and `C`", "`F`"], a: 1, chk: 1, e: "Only the first True branch runs. `85 >= 50` is True, so the chain stops there. Put the strictest check first." },
    { q: "What does this print?", c: R`print(list(range(2, 10, 3)))`, o: ["`[2, 5, 8]`", "`[2, 5, 8, 11]`", "`[3, 6, 9]`", "`[2, 4, 6, 8]`"], a: 0, chk: 1, e: "Start at 2 and jump by 3: 2, 5, 8. The next one, 11, is past the stop." },
    { q: "What does this print?", c: R`
count = 0
for i in range(3):
    for j in range(4):
        count += 1
print(count)`, o: ["`7`", "`12`", "`4`", "`3`"], a: 1, chk: 1, e: "The inner loop runs all 4 rounds for each of the 3 outer rounds: 3 × 4 = 12." },
    { q: "What does this print?", c: R`
for n in range(1, 6):
    if n == 3:
        continue
    print(n, end=" ")`, o: ["`1 2`", "`1 2 4 5`", "`1 2 3 4 5`", "`3`"], a: 1, chk: 1, e: "`continue` skips only the round where n is 3. The loop carries on." },
    { q: "What does this print?", c: R`
for n in range(1, 6):
    if n == 3:
        break
    print(n, end=" ")`, o: ["`1 2`", "`1 2 4 5`", "`1 2 3`", "`3 4 5`"], a: 0, chk: 1, e: "`break` leaves the loop completely when n reaches 3." },
    { q: "Which of these values is **truthy**?", o: ["`0`", "`\"\"`", "`\"0\"`", "`[]`"], a: 2, e: "`\"0\"` is a non-empty string, so it counts as True. Only empty or zero values are falsy." },
    { q: "What does this print?", c: R`
x = 5
if x == 1 or 2:
    print("yes")
else:
    print("no")`, o: ["`no`", "`yes`", "An error", "Nothing"], a: 1, chk: 1, e: "Python reads `(x == 1) or 2`. The `2` on its own is truthy, so the condition is always True. Write `x in (1, 2)`." },
    { q: "What does this print?", c: R`
n = 10
while n > 0:
    n -= 3
print(n)`, o: ["`1`", "`0`", "`-2`", "`10`"], a: 2, chk: 1, e: "10, 7, 4, 1, then -2. Only at -2 is `n > 0` False, so the loop stops there." },
    { q: "What does this print?", c: R`
for n in [1, 3, 5]:
    if n == 4:
        break
else:
    print("done")`, o: ["Nothing", "`done`", "`4`", "An error"], a: 1, chk: 1, e: "4 is never found, so `break` never runs and the loop's `else` block runs." },
    { q: "What does this print?", c: R`print(list(enumerate("ab")))`, o: ["`[(0, 'a'), (1, 'b')]`", "`[(1, 'a'), (2, 'b')]`", "`['a', 'b']`", "`[0, 1]`"], a: 0, chk: 1, e: "`enumerate()` pairs each item with its position, starting at 0 unless you pass `start=`." },
    { q: "Which loop fits \"keep asking until the user types a valid number\"?", o: ["`for i in range(10):`", "`while True:` with a `break` when the input is valid", "A nested `for` loop", "An `if / elif` chain"], a: 1, e: "You do not know how many tries it will take, so loop forever and `break` once the input is good." },
    { q: "What does this print?", c: R`
for i in range(3):
    for j in range(3):
        if j == 1:
            break
        print(i, j, end="; ")`, o: ["`0 0; 1 0; 2 0;`", "`0 0;`", "`0 0; 0 1; 0 2;`", "`0 0; 1 1; 2 2;`"], a: 0, chk: 1, e: "`break` only leaves the inner loop. The outer loop still runs all three rounds." }
  ],
  cards: [
    ["In an `if / elif / else` chain, how many branches run?", "Only **one**: the first whose condition is True. If none is True, the `else` runs."],
    ["List the falsy values", "`0`, `0.0`, `\"\"`, `[]`, `()`, `{}`, `set()`, `None` and `False`. Everything else is truthy."],
    ["What numbers does `range(1, 11)` give?", "1 to 10. The stop value is never included."],
    ["`for` or `while`?", "`for` when you know the items or the count. `while` when you repeat until something happens."],
    ["`break` vs `continue` vs `pass`", "`break` leaves the loop. `continue` skips to the next round. `pass` does nothing."],
    ["When does a loop's `else` run?", "Only when the loop finished without hitting `break`. Handy for \"not found\" messages."],
    ["Why is `if x == 1 or 2:` a bug?", "It means `(x == 1) or 2`, and `2` is always truthy. Write `if x in (1, 2):`."],
    ["What does `enumerate(items, start=1)` give each round?", "A pair: the position (from 1) and the item.", R`for i, x in enumerate(items, start=1):`],
    ["What does `zip(a, b)` do?", "Pairs the items of two lists by position and stops at the shorter one."],
    ["How do you stop a `while` loop from running forever?", "Change something inside the loop so the condition can become False, or use `break`."],
    ["The running-total pattern", "Start at 0, add each item.", R`total = 0
for x in nums:
    total += x`],
    ["How many times does the inner loop body run?", "Outer rounds × inner rounds. `range(3)` inside `range(4)` runs 12 times."]
  ]
});
