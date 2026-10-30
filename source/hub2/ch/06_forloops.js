chapter({
  id: "forloops", part: 2, title: "For loops and range()", nav: "For loops & range", time: "50 min", lvl: "Beginner", tricky: true,
  keys: "for loop range iterate iteration enumerate zip nested loop accumulator sum count factorial multiplication table for else",
  lead: "Repeat code for every item in a list, every letter in a word, or every number in a range. This is where Python starts saving you real time.",
  goals: [
    "Write a `for` loop over a list, a string and a `range()`",
    "Use `range(start, stop, step)`, and remember that **stop is never included**",
    "Use the 5 loop patterns: sum, count, filter, find the biggest, multiply up",
    "Use `enumerate()` and `zip()`",
    "Write nested loops and understand `for-else`"
  ],
  src: ["PDF: Python Operators and Flow Control", "Course notebooks for_loop.ipynb, da_cohort_second.ipynb, types_of_data_types.ipynb", "W3Schools: For Loops, Range"],
  body: [
    { t: "h", text: "Why loops?" },
    { t: "p", b: "Imagine printing a 10-line multiplication table by writing 10 `print()` lines. Now imagine 1,000 lines. A ==loop== lets you write the code **once** and Python repeats it for you." },
    { t: "code", c: R`
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
print("Done")`, o: R`
apple
banana
cherry
Done` },
    { t: "p", b: "Read it as: \"**for** each `fruit` **in** the list `fruits`, print it\". The variable `fruit` (you can name it anything) takes the value of each item in turn. The indented block runs once per item. Then Python continues after the loop." },
    { t: "anim", title: "Watch a for loop add up prices", trace: { code: R`
prices = [120, 45, 80]
total = 0
for p in prices:
    total = total + p
print("Total:", total)`, steps: [
      { l: 1, v: { prices: ["[120, 45, 80]", "list"] }, c: "We have a list of three prices." },
      { l: 2, v: { total: ["0", "int"] }, c: "`total` starts at 0. A variable that collects a result like this is called an **accumulator**." },
      { l: 3, v: { p: ["120", "int"] }, c: "Round 1: the loop variable `p` takes the **first** item, 120." },
      { l: 4, v: { total: ["120", "int"] }, c: "0 + 120 = 120. Then the block ends, so Python goes back up to the `for` line." },
      { l: 3, v: { p: ["45", "int"] }, c: "Round 2: `p` takes the next item, 45." },
      { l: 4, v: { total: ["165", "int"] }, c: "120 + 45 = 165." },
      { l: 3, v: { p: ["80", "int"] }, c: "Round 3: `p` takes the last item, 80." },
      { l: 4, v: { total: ["245", "int"] }, c: "165 + 80 = 245." },
      { l: 3, c: "No items left. The loop is finished." },
      { l: 5, o: "Total: 245\n", c: "Python moves on to the line after the loop and prints the total." }
    ]}},
    { t: "h", text: "Looping over a string" },
    { t: "p", b: "A string is a sequence of characters, so a `for` loop visits one letter at a time." },
    { t: "code", c: R`
for c in "wscube":
    print(c)`, o: R`
w
s
c
u
b
e` },
    { t: "h", text: "range(): loops over numbers" },
    { t: "p", b: "`range()` makes a sequence of whole numbers. It has three forms." },
    { t: "table", head: ["Form", "Example", "Numbers you get"], rows: [
      ["`range(stop)`", "`range(5)`", "0, 1, 2, 3, 4"],
      ["`range(start, stop)`", "`range(2, 5)`", "2, 3, 4"],
      ["`range(start, stop, step)`", "`range(0, 10, 2)`", "0, 2, 4, 6, 8"],
      ["Negative step counts down", "`range(10, 0, -3)`", "10, 7, 4, 1"]
    ]},
    { t: "fig", svg: V.strip(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], { pos: false, hl: [2, 4, 6, 8], dim: [10], bracket: [2, 10, "range(2, 10, 2)  →  2, 4, 6, 8"], label: "Number line from 0 to 10 with 2, 4, 6 and 8 highlighted" }), cap: "Start at 2, jump by 2, and stop **before** 10. The stop value is never included." },
    { t: "note", k: "trap", h: "Trap! The stop number is never included", b: "`range(1, 10)` gives 1 to **9**. To get 1 to 10, write `range(1, 11)`. Think of stop as \"up to, but not including\". This same rule appears again in slicing and NumPy." },
    { t: "code", c: R`
for i in range(5):
    print(i, end=" ")
print()
for i in range(2, 5):
    print(i, end=" ")
print()
for i in range(0, 10, 2):
    print(i, end=" ")
print()
for i in range(10, 0, -3):
    print(i, end=" ")`, o: R`
0 1 2 3 4
2 3 4
0 2 4 6 8
10 7 4 1` },
    { t: "code", ttl: "Turn a range into a list to see it", c: R`
print(list(range(1, 11)))
print(list(range(5, 0, -1)))
print(list(range(5, 0)))     # empty: you cannot count up from 5 to 0`, o: R`
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[5, 4, 3, 2, 1]
[]` },
    { t: "pred", chk: 1, c: R`print(list(range(3, 12, 3)))`, o: ["`[3, 6, 9, 12]`", "`[3, 6, 9]`", "`[0, 3, 6, 9]`", "`[3, 6, 9, 12, 15]`"], a: 1, e: "Start at 3, step 3, and stop **before** 12. So 12 is left out." },
    { t: "h", text: "The 5 loop patterns you will use forever" },
    { t: "deck", title: "5 loop patterns", s: [
      { big: "Almost every loop you write is one of five patterns.", items: ["**Sum** things up", "**Count** things", "**Filter** into a new list", "**Find** the biggest or smallest", "**Multiply** things up"] },
      { h: "1. Sum: the accumulator", b: "Start at 0, add each value. From your course: the sum of 1 to 50.", c: R`
total = 0
for i in range(1, 51):
    total += i
print(total)`, o: R`1275` },
      { h: "2. Count: add 1 when a condition is True", b: "From your course: count the vowels in a name.", c: R`
name = "Data Analytics"
count = 0
for c in name:
    if c.lower() in ("a", "e", "i", "o", "u"):
        count += 1
print(count)`, o: R`5` },
      { h: "3. Filter: build new lists", b: "Start with empty lists and `append()` what matches. From your course: split numbers into even and odd.", c: R`
no = [2, 3, 5, 7, 43, 41, 87, 65, 34, 22, 9, 8]
even = []
odd = []
for n in no:
    if n % 2 == 0:
        even.append(n)
    else:
        odd.append(n)
print(even)
print(odd)`, o: R`
[2, 34, 22, 8]
[3, 5, 7, 43, 41, 87, 65, 9]` },
      { h: "4. Find the biggest", b: "Start with the first item as the best so far, and replace it when you find a bigger one.", c: R`
sales = [12000, 15000, 18000, 14000]
best = sales[0]
for s in sales:
    if s > best:
        best = s
print(best)`, o: R`18000` },
      { h: "5. Multiply up: start at 1", b: "For a product, start at **1**, not 0 (anything times 0 is 0). Factorial: 5! = 5 x 4 x 3 x 2 x 1.", c: R`
fact = 1
for i in range(1, 6):
    fact *= i
print(fact)`, o: R`120` }
    ]},
    { t: "code", ttl: "Sum of even numbers up to 50 (course notebook)", c: R`
total = 0
for i in range(2, 51, 2):     # step of 2 visits only even numbers
    total += i
print(total)`, o: R`650` },
    { t: "code", ttl: "Multiplication table (course notebook)", c: R`
no = 5
for i in range(1, 11):
    print(f"{no} x {i} = {no * i}")`, o: R`
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50` },
    { t: "note", k: "why", b: "These patterns are exactly what Excel's SUM, COUNTIF, FILTER and MAX do. In pandas you will do them in one line, but knowing the loop version helps you understand what is happening underneath." },
    { t: "h", text: "enumerate() and zip()" },
    { t: "p", b: "`enumerate()` gives you the **position number** and the item together. `zip()` walks through **two lists side by side**." },
    { t: "code", c: R`
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(index, fruit)

for num, fruit in enumerate(fruits, start=1):
    print(f"{num}. {fruit}")

colors = ["red", "yellow", "red"]
for fruit, color in zip(fruits, colors):
    print(f"{fruit} is {color}")`, o: R`
0 apple
1 banana
2 cherry
1. apple
2. banana
3. cherry
apple is red
banana is yellow
cherry is red` },
    { t: "note", k: "tip", b: "`zip()` stops at the **shorter** list. If one list has 3 items and the other 5, you get 3 pairs." },
    { t: "h", text: "Nested loops" },
    { t: "p", b: "A loop inside a loop. For **each** round of the outer loop, the inner loop runs **all** its rounds. Total rounds = outer count x inner count." },
    { t: "anim", title: "Nested loop, round by round", trace: { code: R`
for i in range(1, 3):
    for j in range(1, 4):
        print(i, j)
print("end")`, steps: [
      { l: 1, v: { i: ["1", "int"] }, c: "Outer loop starts: `i` is 1." },
      { l: 2, v: { j: ["1", "int"] }, c: "Inner loop starts: `j` is 1." },
      { l: 3, o: "1 1\n", c: "Print `1 1`." },
      { l: 2, v: { j: ["2", "int"] }, c: "Inner loop continues: `j` is 2. Notice `i` stays 1." },
      { l: 3, o: "1 2\n", c: "Print `1 2`." },
      { l: 2, v: { j: ["3", "int"] }, c: "`j` is 3." },
      { l: 3, o: "1 3\n", c: "Print `1 3`. The inner loop has finished all its rounds." },
      { l: 1, v: { i: ["2", "int"] }, c: "Only now does the outer loop move on: `i` becomes 2." },
      { l: 2, v: { j: ["1", "int"] }, c: "The inner loop starts **again from the beginning**: `j` is 1." },
      { l: 3, o: "2 1\n", c: "Print `2 1`." },
      { l: 2, v: { j: ["2", "int"] }, c: "`j` is 2." },
      { l: 3, o: "2 2\n", c: "Print `2 2`." },
      { l: 2, v: { j: ["3", "int"] }, c: "`j` is 3." },
      { l: 3, o: "2 3\n", c: "Print `2 3`." },
      { l: 4, o: "end\n", c: "Both loops are done. 2 outer rounds x 3 inner rounds = 6 prints." }
    ]}},
    { t: "code", ttl: "A 5 x 5 times table (from the PDF)", c: R`
for i in range(1, 6):          # rows
    for j in range(1, 6):      # columns
        print(f"{i*j:2}", end=" ")
    print()                    # new line after each row`, o: R`
 1  2  3  4  5
 2  4  6  8 10
 3  6  9 12 15
 4  8 12 16 20
 5 10 15 20 25` },
    { t: "h", text: "for-else" },
    { t: "p", b: "A `for` loop can have an `else` block. It runs when the loop finishes **normally**, meaning it was not stopped by `break` (you will learn `break` and `continue` in the next chapter; `continue` skips to the next round). This example is from your course notebook." },
    { t: "code", c: R`
for i in range(5):
    if i % 2 == 0:
        continue          # skip even numbers
    print(f"{i}. Hello World!")
else:
    print("Loop completed normally!!")`, o: R`
1. Hello World!
3. Hello World!
Loop completed normally!!` },
    { t: "code", ttl: "else is handy for searches", c: R`
bookings = ["R101", "R102", "R205"]
for b in bookings:
    if b == "R300":
        print("Found it")
        break
else:
    print("Booking R300 not found")`, o: R`Booking R300 not found` },
    { t: "h", text: "Loops with conditions: a course exercise" },
    { t: "code", ttl: "Count words longer than 5 letters whose first and last letters match", c: R`
names = ["organic", "pop", "system", "clinic", "thunder", "gathering"]
count = 0
for w in names:
    if len(w) > 5 and w[0] == w[-1]:
        count += 1
print(count)`, o: R`2` },
    { t: "p", b: "`w[0]` is the first letter and `w[-1]` the last. Only \"clinic\" and \"gathering\" pass both tests." },
    { t: "prac", items: [
      { q: "Print the numbers from 10 down to 1 on one line.", sol: R`
for i in range(10, 0, -1):
    print(i, end=" ")`, out: R`10 9 8 7 6 5 4 3 2 1` },
      { q: "Find the average of `marks = [78, 92, 65, 88, 71]` using a loop (do not use `sum()`).", hint: "Accumulate the total, then divide by `len(marks)`.", sol: R`
marks = [78, 92, 65, 88, 71]
total = 0
for m in marks:
    total += m
print("Average:", total / len(marks))`, out: R`Average: 78.8` },
      { q: "Count how many words in `\"the cat sat on the mat\"` start with the letter t.", hint: "`.split()` turns a sentence into a list of words.", sol: R`
sentence = "the cat sat on the mat"
count = 0
for word in sentence.split():
    if word[0] == "t":
        count += 1
print(count)`, out: R`2` },
      { q: "Print a right-angled triangle of stars, 4 rows high, using a nested loop.", sol: R`
for row in range(1, 5):
    for star in range(row):
        print("*", end="")
    print()`, out: R`
*
**
***
****` },
      { q: "You have `rooms = [\"101\", \"102\", \"103\"]` and `guests = [\"Asha\", \"Vikram\", \"Neha\"]`. Print `Room 101: Asha` and so on.", sol: R`
rooms = ["101", "102", "103"]
guests = ["Asha", "Vikram", "Neha"]
for room, guest in zip(rooms, guests):
    print(f"Room {room}: {guest}")`, out: R`
Room 101: Asha
Room 102: Vikram
Room 103: Neha` }
    ]}
  ],
  take: [
    "`for item in sequence:` runs the block once per item.",
    "`range(start, stop, step)`: stop is **never** included. `range(1, 11)` is 1 to 10.",
    "Patterns: sum (start 0), count, filter with `append()`, find max, multiply (start 1).",
    "`enumerate()` gives index and item. `zip()` pairs two lists.",
    "Nested loops: the inner loop runs fully for every outer round. `for-else` runs `else` only if no `break` happened."
  ],
  quiz: [
    { q: "What does this print?", c: R`print(list(range(1, 5)))`, o: ["`[1, 2, 3, 4, 5]`", "`[1, 2, 3, 4]`", "`[0, 1, 2, 3, 4]`", "`[2, 3, 4, 5]`"], a: 1, chk: 1, e: "The stop value 5 is not included." },
    { q: "How do you loop over the numbers 1 to 10, including 10?", o: ["`range(10)`", "`range(1, 10)`", "`range(1, 11)`", "`range(0, 10)`"], a: 2, e: "Stop must be one more than the last number you want." },
    { q: "What does this print?", c: R`
total = 0
for i in range(1, 4):
    total += i
print(total)`, o: ["`6`", "`10`", "`3`", "`4`"], a: 0, chk: 1, e: "1 + 2 + 3 = 6. The range stops before 4." },
    { q: "What does this print?", c: R`print(list(range(10, 0, -4)))`, o: ["`[10, 6, 2]`", "`[10, 6, 2, -2]`", "`[]`", "`[10, 6]`"], a: 0, chk: 1, e: "Count down from 10 by 4: 10, 6, 2. The next would be -2, which is past the stop of 0." },
    { q: "How many times does `print` run?", c: R`
for i in range(3):
    for j in range(4):
        print(i, j)`, o: ["7", "12", "3", "4"], a: 1, e: "The inner loop runs 4 times for each of the 3 outer rounds: 3 x 4 = 12." },
    { q: "What does this print?", c: R`
for i, ch in enumerate("hi"):
    print(i, ch)`, o: ["`0 h` and `1 i`", "`1 h` and `2 i`", "`h 0` and `i 1`", "`hi`"], a: 0, e: "enumerate starts counting at 0 by default." },
    { q: "To work out a factorial with a loop, what should the result variable start at?", o: ["0", "1", "The number itself", "None"], a: 1, e: "Multiplying by 0 would make everything 0. Start a product at 1." },
    { q: "When does the `else` block of a for loop run?", o: ["Every time the loop body runs", "When the loop ends without hitting `break`", "Only when the list is empty", "Never, it is a syntax error"], a: 1, e: "for-else runs the else block after a normal finish. A `break` skips it." }
  ],
  cards: [
    ["Syntax of a for loop", "", R`
for item in items:
    print(item)`],
    ["What numbers does `range(2, 10, 3)` give?", "2, 5, 8. Start 2, step 3, stop **before** 10."],
    ["Is the stop value in `range()` included?", "**No.** `range(1, 5)` gives 1, 2, 3, 4."],
    ["How do you count down with range?", "Use a negative step: `range(10, 0, -1)` gives 10 down to 1."],
    ["What does `enumerate()` do?", "Gives you the index and the item together: `for i, x in enumerate(items):`"],
    ["What does `zip()` do?", "Pairs up items from two or more lists: `for a, b in zip(list1, list2):`. Stops at the shorter list."],
    ["The accumulator pattern", "Start a variable at 0 (or 1 for products), update it inside the loop, use it after the loop."],
    ["In nested loops, how many total rounds run?", "Outer count x inner count. The inner loop restarts for every outer round."],
    ["What is `for-else`?", "The `else` block runs if the loop finished without a `break`. Useful for \"not found\" messages."]
  ],
  cheat: [
    ["for x in items:", "Loop over each item"],
    ["for i in range(5):", "0, 1, 2, 3, 4"],
    ["range(1, 11)", "1 to 10"],
    ["range(10, 0, -1)", "10 down to 1"],
    ["for i, x in enumerate(items):", "Index and item"],
    ["for a, b in zip(l1, l2):", "Two lists side by side"],
    ["total += x", "Accumulate inside a loop"],
    ["print(x, end=\" \")", "Print on one line in a loop"]
  ]
});
