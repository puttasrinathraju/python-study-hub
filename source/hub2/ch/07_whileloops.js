chapter({
  id: "whileloops", part: 2, title: "While loops, break and continue", nav: "While loops & break", time: "45 min", lvl: "Beginner", tricky: true,
  keys: "while loop while true infinite loop break continue pass input validation billing system nested while else",
  lead: "Repeat code for as long as a condition stays True, and take control of any loop with `break`, `continue` and `pass`.",
  goals: [
    "Write a `while` loop and avoid infinite loops",
    "Use the `while True` + `break` pattern for menus and input checks",
    "Know exactly what `break`, `continue` and `pass` do",
    "Choose between `for` and `while`",
    "Read the course's billing system and theater ticket code with confidence"
  ],
  src: ["PDF: Python Operators and Flow Control", "Course notebook while_loops_exp.ipynb", "W3Schools: While Loops"],
  body: [
    { t: "h", text: "The while loop" },
    { t: "p", b: "A `while` loop keeps running its block **as long as its condition is True**. Before every round, Python checks the condition again. When it becomes False, the loop stops." },
    { t: "code", ttl: "From your course notebook", c: R`
no = 1
while no <= 5:
    print(f"{no}. Hello")
    no += 1          # move towards the end
print("Finished")`, o: R`
1. Hello
2. Hello
3. Hello
4. Hello
5. Hello
Finished` },
    { t: "p", b: "Every while loop needs three parts: a **starting value** (`no = 1`), a **condition** (`no <= 5`), and an **update** (`no += 1`). The update makes the condition False in the end." },
    { t: "note", k: "trap", h: "Trap! The infinite loop", b: "Forget the update and the condition never becomes False, so the loop runs forever. In Jupyter, press the square **Stop** button (or **Kernel > Interrupt Kernel**). In Colab, click the stop icon on the cell.", c: R`
count = 1
while count <= 5:
    print(count)
    # forgot: count += 1   ->  prints 1 forever` },
    { t: "h", text: "for or while?" },
    { t: "table", head: ["Use", "When", "Example"], rows: [
      ["`for`", "You know **what** to loop over, or how many times", "Every item in a list, numbers 1 to 100"],
      ["`while`", "You loop **until something happens**, and you do not know when", "Keep asking until the user types a valid number; keep saving until you reach a target"]
    ]},
    { t: "code", ttl: "A natural while loop: how many years to double your money at 8%?", c: R`
amount = 1000
years = 0
while amount < 2000:
    amount *= 1.08
    years += 1
print(years, "years, final amount", round(amount, 2))`, o: R`10 years, final amount 2158.92` },
    { t: "h", text: "while True with break" },
    { t: "p", b: "A very common pattern: start a loop that would run forever (`while True`) and leave it with `break` when you are done. This is how menus, games and input checks work." },
    { t: "anim", title: "while True and break, step by step", trace: { code: R`
count = 1
while True:
    print(count)
    count += 1
    if count > 3:
        break
print("Out of the loop")`, steps: [
      { l: 1, v: { count: ["1", "int"] }, c: "`count` starts at 1." },
      { l: 2, c: "`while True` means the condition is always True. Only `break` can get us out." },
      { l: 3, o: "1\n", c: "Print 1." },
      { l: 4, v: { count: ["2", "int"] }, c: "count becomes 2." },
      { l: 5, c: "Is 2 > 3? No. So no break. Back to the top." },
      { l: 3, o: "2\n", c: "Print 2." },
      { l: 4, v: { count: ["3", "int"] }, c: "count becomes 3." },
      { l: 5, c: "Is 3 > 3? No. Back to the top." },
      { l: 3, o: "3\n", c: "Print 3." },
      { l: 4, v: { count: ["4", "int"] }, c: "count becomes 4." },
      { l: 5, c: "Is 4 > 3? **Yes.**" },
      { l: 6, c: "`break` exits the loop immediately." },
      { l: 7, o: "Out of the loop\n", c: "Python continues with the first line after the loop." }
    ]}},
    { t: "code", nr: 1, ttl: "Keep asking until the input is valid (from the PDF)", c: R`
while True:
    user_input = input("Enter a positive number: ")
    if user_input.isdigit() and int(user_input) > 0:
        break                      # valid, leave the loop
    print("Invalid input. Try again.")
print("Thanks! You entered", user_input)`, o: R`
Enter a positive number: abc
Invalid input. Try again.
Enter a positive number: 7
Thanks! You entered 7` },
    { t: "code", nr: 1, ttl: "Add numbers again and again (course notebook)", c: R`
while True:
    n1 = int(input("Enter no1: "))
    n2 = int(input("Enter no2: "))
    print(f"The sum of {n1} and {n2} is {n1 + n2}")
    again = input("Do you want to add more numbers? ")
    if again in ("No", "no", "n", "NO", "N"):
        break`, o: R`
Enter no1: 23
Enter no2: 12
The sum of 23 and 12 is 35
Do you want to add more numbers? no` },
    { t: "note", k: "tip", b: "Instead of listing every spelling of \"no\", clean the answer first: `if again.strip().lower() in (\"no\", \"n\"):`. You will learn these string methods in the Strings chapter." },
    { t: "h", text: "break, continue and pass" },
    { t: "table", head: ["Statement", "What it does", "Think of it as"], rows: [
      ["`break`", "Exits the loop completely, right now", "\"I'm done, leave the loop\""],
      ["`continue`", "Skips the rest of **this round** and starts the next round", "\"Skip this one, carry on\""],
      ["`pass`", "Does nothing at all", "\"Placeholder, nothing to do here\""]
    ]},
    { t: "anim", title: "break vs continue vs pass on the numbers 1 to 9", frames: [
      { html: V.strip(["1", "2", "3", "4", "5", "6", "7", "8", "9"], { pos: false, hl2: [0, 1, 2, 3, 4], hl: [5], dim: [6, 7, 8] }) + "<div class=\"bigcode\">if i == 6:\n    break</div><div class=\"res\">prints: 1 2 3 4 5</div>", c: "**break**: when i reaches 6, the whole loop stops. 6, 7, 8 and 9 are never visited (grey)." },
      { html: V.strip(["1", "2", "3", "4", "5", "6", "7", "8", "9"], { pos: false, hl2: [0, 2, 4, 6, 8], hl: [1, 3, 5, 7] }) + "<div class=\"bigcode\">if i % 2 == 0:\n    continue</div><div class=\"res\">prints: 1 3 5 7 9</div>", c: "**continue**: even numbers (yellow) skip the print, but the loop keeps going to the next number." },
      { html: V.strip(["1", "2", "3", "4", "5", "6", "7", "8", "9"], { pos: false, hl2: [0, 1, 2, 3, 4, 5, 6, 7, 8], hl: [2] }) + "<div class=\"bigcode\">if i == 3:\n    pass</div><div class=\"res\">prints: 1 2 3 4 5 6 7 8 9</div>", c: "**pass**: does nothing. Number 3 is still printed, because `pass` does not skip anything." }
    ]},
    { t: "code", c: R`
for i in range(1, 10):
    if i == 6:
        break
    print(i, end=" ")
print()
for i in range(1, 10):
    if i % 2 == 0:
        continue
    print(i, end=" ")
print()
for i in range(1, 5):
    if i == 3:
        pass
    print(i, end=" ")`, o: R`
1 2 3 4 5
1 3 5 7 9
1 2 3 4` },
    { t: "note", k: "trap", h: "Trap! break only leaves the innermost loop", b: "In nested loops, `break` exits only the loop it is directly inside. The outer loop carries on.", c: R`
for i in range(1, 4):
    for j in range(1, 4):
        if j == 2:
            break          # leaves the j loop only
        print(i, j)`, o: R`
1 1
2 1
3 1` },
    { t: "pred", chk: 1, c: R`
n = 0
while n < 5:
    n += 1
    if n == 3:
        continue
    print(n, end=" ")`, o: ["`1 2`", "`1 2 4 5`", "`1 2 3 4 5`", "`0 1 2 4`"], a: 1, e: "When n is 3, `continue` skips the print. The loop goes on to 4 and 5. Notice `n += 1` comes **before** `continue`. If it came after, the loop would get stuck at 3 forever." },
    { t: "h", text: "while-else" },
    { t: "p", b: "Like `for-else`, a `while` loop can have an `else` block that runs when the condition becomes False normally, but not after a `break`." },
    { t: "code", ttl: "ATM PIN check: 3 tries", c: R`
correct_pin = "4321"
typed = ["1111", "2222", "4321"]     # pretend these were typed
attempt = 0
while attempt < 3:
    pin = typed[attempt]
    attempt += 1
    if pin == correct_pin:
        print("Access granted on attempt", attempt)
        break
    print("Wrong PIN")
else:
    print("Card blocked")`, o: R`
Wrong PIN
Wrong PIN
Access granted on attempt 3` },
    { t: "h", text: "Real code from your course" },
    { t: "h3", text: "Supermarket billing system (nested while loops)" },
    { t: "p", b: "The outer loop serves one customer per round. The inner loop adds products to that customer's cart. Each loop has its own `break`, so leaving the inner loop does not end the program." },
    { t: "code", nr: 1, c: R`
while True:                                  # one round per customer
    name = input("Enter name: ")
    mob_no = input("Enter mobNo: ")
    amount = 0

    while True:                              # one round per product
        price = float(input("Enter price of Product: "))
        qty = float(input("Enter the quantity: "))
        amount += price * qty
        add_more = input("Do you have more products in cart? ")
        if add_more in ("No", "no", "N", "n", "NO"):
            break                            # leaves the product loop only

    print("-" * 50)
    print("Name: ", name)
    print("MobNo: ", mob_no)
    print("-" * 50)
    print("Amount: ", amount)
    print("-" * 50)

    more_user = input("Do you have more customer in queue? ")
    if more_user in ("No", "no", "N", "n", "NO"):
        break                                # leaves the customer loop`, o: R`
Enter name: Raghav
Enter mobNo: 87564756
Enter price of Product: 500
Enter the quantity: 4
Do you have more products in cart? yes
Enter price of Product: 2000
Enter the quantity: 2
Do you have more products in cart? no
--------------------------------------------------
Name:  Raghav
MobNo:  87564756
--------------------------------------------------
Amount:  6000.0
--------------------------------------------------
Do you have more customer in queue? no` },
    { t: "h3", text: "Theater ticket quantity check (from the PDF)" },
    { t: "p", b: "This combines `while True`, `break` and `try/except` (you will learn `try/except` in the Errors chapter). If the user types letters, `int()` fails and the `except` block prints a friendly message instead of crashing." },
    { t: "code", nr: 1, c: R`
while True:
    try:
        num_tickets = int(input("Enter number of tickets (1-10): "))
        if 1 <= num_tickets <= 10:
            break
        else:
            print("Please enter a number between 1 and 10.")
    except ValueError:
        print("Please enter a valid number.")`, o: R`
Enter number of tickets (1-10): two
Please enter a valid number.
Enter number of tickets (1-10): 15
Please enter a number between 1 and 10.
Enter number of tickets (1-10): 2` },
    { t: "note", k: "tip", b: "The PDF also shows a \"loading dots\" animation: a while loop that prints a dot, waits half a second with `time.sleep(0.5)`, and counts to 5. `time` is a module. You will learn about modules in Part 5." },
    { t: "prac", items: [
      { q: "Use a while loop to add up the digits of `n = 4567`.", hint: "`n % 10` gives the last digit. `n //= 10` removes it. Stop when n is 0.", sol: R`
n = 4567
total = 0
while n > 0:
    total += n % 10
    n //= 10
print(total)`, out: R`22` },
      { q: "Print the numbers 1 to 20, but skip multiples of 3, using `continue`.", sol: R`
for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i, end=" ")`, out: R`1 2 4 5 7 8 10 11 13 14 16 17 19 20` },
      { q: "A hotel has 5 rooms free. Bookings arrive in this order: `[2, 1, 3, 1]` rooms. Accept bookings while rooms are free, and stop at the first booking that does not fit.", sol: R`
free = 5
requests = [2, 1, 3, 1]
for r in requests:
    if r > free:
        print(f"Cannot book {r} rooms, only {free} left")
        break
    free -= r
    print(f"Booked {r}, {free} left")`, out: R`
Booked 2, 3 left
Booked 1, 2 left
Cannot book 3 rooms, only 2 left` },
      { q: "Write a number guessing game: the secret is 7 and the guesses are `[3, 9, 7]`. Print \"Too low\", \"Too high\" or \"Correct!\" and stop when correct.", sol: R`
secret = 7
guesses = [3, 9, 7]
i = 0
while True:
    g = guesses[i]
    i += 1
    if g < secret:
        print(g, "Too low")
    elif g > secret:
        print(g, "Too high")
    else:
        print(g, "Correct!")
        break`, out: R`
3 Too low
9 Too high
7 Correct!` }
    ]}
  ],
  take: [
    "`while condition:` repeats while the condition is True. Always update something so it can end.",
    "`while True:` + `break` is the standard pattern for menus and input checks.",
    "`break` leaves the loop. `continue` skips to the next round. `pass` does nothing.",
    "`break` exits only the innermost loop.",
    "Use `for` when you know what to loop over. Use `while` when you loop until something happens."
  ],
  quiz: [
    { q: "What does this print?", c: R`
i = 1
while i < 4:
    print(i, end=" ")
    i += 1`, o: ["`1 2 3`", "`1 2 3 4`", "`0 1 2 3`", "It never stops"], a: 0, chk: 1, e: "The loop stops when i becomes 4, because 4 < 4 is False." },
    { q: "What happens if you forget `i += 1` in the loop above?", o: ["It prints once", "It runs forever (infinite loop)", "SyntaxError", "It prints nothing"], a: 1, e: "i stays 1, so `i < 4` is always True." },
    { q: "What does `continue` do?", o: ["Ends the loop", "Skips the rest of this round and starts the next one", "Does nothing", "Restarts the program"], a: 1, e: "continue jumps straight to the next round." },
    { q: "What does this print?", c: R`
for i in range(1, 6):
    if i == 4:
        break
    print(i, end=" ")`, o: ["`1 2 3`", "`1 2 3 4`", "`1 2 3 5`", "`4 5`"], a: 0, chk: 1, e: "At i = 4 the loop stops before printing." },
    { q: "In nested loops, which loop does `break` exit?", o: ["All loops", "Only the innermost loop it is in", "Only the outer loop", "The whole program"], a: 1, e: "break exits only the loop that directly contains it." },
    { q: "Which loop fits best: \"keep asking for a password until it is correct\"?", o: ["`for i in range(10)`", "`while True` with `break`", "A nested for loop", "No loop needed"], a: 1, e: "You do not know how many tries it will take, so use while." },
    { q: "What does this print?", c: R`
n = 10
while n > 0:
    n -= 3
print(n)`, o: ["`1`", "`-2`", "`0`", "`10`"], a: 1, chk: 1, e: "10, 7, 4, 1, then 1 - 3 = -2. Now n > 0 is False, so the loop ends and prints -2." },
    { q: "When does the `else` of a while loop run?", o: ["After every round", "When the condition becomes False without a `break`", "Only after a `break`", "Never"], a: 1, e: "while-else runs on a normal finish. break skips it." }
  ],
  cards: [
    ["Three parts every while loop needs", "A starting value, a condition, and an update inside the loop that eventually makes the condition False."],
    ["What is an infinite loop and how do you stop one in Jupyter?", "A loop whose condition never becomes False. Press the Stop button or Kernel > Interrupt Kernel."],
    ["The `while True` pattern", "", R`
while True:
    answer = input("Again? ")
    if answer == "no":
        break`],
    ["`break` vs `continue`", "`break` leaves the loop. `continue` skips the rest of this round and moves to the next round."],
    ["What does `pass` do?", "Nothing. It is a placeholder."],
    ["Does `break` exit all nested loops?", "No. Only the innermost loop it is in."],
    ["When should you use `while` instead of `for`?", "When you repeat **until something happens** and you do not know how many rounds that takes."]
  ],
  cheat: [
    ["while x < 10:\n    x += 1", "Repeat while the condition is True"],
    ["while True:\n    ...\n    if done: break", "Loop until you break out"],
    ["break", "Leave the loop now"],
    ["continue", "Skip to the next round"],
    ["pass", "Do nothing (placeholder)"],
    ["while ...:\n    ...\nelse:\n    ...", "else runs if no break happened"]
  ]
});
