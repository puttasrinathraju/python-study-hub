chapter({
  id: "conditions", part: 2, title: "If, elif and else", nav: "If / elif / else", time: "45 min", lvl: "Beginner",
  keys: "if elif else conditional nested truthy falsy ternary shorthand pass match case decision",
  lead: "Teach your program to make decisions: run some code only when a condition is True, and choose between several paths.",
  goals: [
    "Write `if`, `if-else` and `if-elif-else` blocks",
    "Put `if` statements inside each other (nesting)",
    "Combine conditions with `and`, `or` and `not`",
    "Know which values count as True or False (truthy and falsy)",
    "Use the one-line if, `pass`, and `match-case`"
  ],
  src: ["PDF: Python Operators and Flow Control", "Course notebooks da_cohort_second.ipynb and for_loop.ipynb", "W3Schools: If...Else, Match"],
  body: [
    { t: "h", text: "The basic if" },
    { t: "p", b: "An `if` statement runs a block of code **only when its condition is True**. The condition is any expression that gives True or False." },
    { t: "code", c: R`
age = 20
if age >= 18:
    print("You are an adult")    # runs only if the condition is True
print("This line always runs")`, o: R`
You are an adult
This line always runs` },
    { t: "note", k: "key", b: "Get three things right every time. Put a **colon** at the end of the `if` line. Indent the lines inside by **4 spaces**. Go **back to the left** when the block ends." },
    { t: "h", text: "if-else: two paths" },
    { t: "p", b: "`else` gives Python something to do when the condition is False. Exactly one of the two blocks runs, never both." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 540 330" width="540" role="img" aria-label="Flowchart: check age, two paths, then join">';
      s += '<rect x="200" y="8" width="140" height="36" rx="18" class="sv-soft"/><text x="270" y="31" text-anchor="middle" class="sv-tm">age = 15</text>';
      s += '<path d="M270 44 V70" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<polygon points="270,74 360,118 270,162 180,118" class="sv-hl"/><text x="270" y="123" text-anchor="middle" class="sv-tm">age &gt;= 18 ?</text>';
      s += '<path d="M360 118 H450 V180" class="sv-lng" marker-end="url(#arwG)"/><text x="400" y="108" class="sv-tm sv-tg" style="font-size:13px">True</text>';
      s += '<path d="M180 118 H90 V180" class="sv-lnt" marker-end="url(#arwT)"/><text x="118" y="108" class="sv-tm sv-tt" style="font-size:13px">False</text>';
      s += '<rect x="370" y="184" width="160" height="44" rx="10" class="sv-tip"/><text x="450" y="211" text-anchor="middle" class="sv-t">"eligible to vote"</text>';
      s += '<rect x="10" y="184" width="160" height="44" rx="10" class="sv-trap"/><text x="90" y="211" text-anchor="middle" class="sv-t">"not eligible"</text>';
      s += '<path d="M450 228 V255 H300 V276" class="sv-ln" marker-end="url(#arw)"/><path d="M90 228 V255 H240 V276" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<rect x="200" y="280" width="140" height="40" rx="10" class="sv-acc"/><text x="270" y="305" text-anchor="middle" class="sv-tm">print("bye")</text>';
      return s + '</svg>';
    })(), cap: "Only one path runs. Both paths meet again after the if-else block." },
    { t: "code", ttl: "From your course notebook", c: R`
age = 15
if age >= 18:
    print("You are eligible to vote!!")
else:
    print("You're not eligible to vote!!")
print("bye")`, o: R`
You're not eligible to vote!!
bye` },
    { t: "code", ttl: "Even or odd", c: R`
no = 56
if no % 2 == 0:
    print(f"The {no} is an EVEN no")
else:
    print(f"The {no} is an ODD no")`, o: R`The 56 is an EVEN no` },
    { t: "h", text: "if-elif-else: many paths" },
    { t: "p", b: "`elif` is short for \"else if\". Python checks the conditions **from top to bottom**. The **first** True one wins, its block runs, and Python skips everything else in the chain. `else` at the end catches anything left." },
    { t: "anim", title: "Watch Python walk down an elif ladder", trace: { code: R`
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print("Grade:", grade)`, steps: [
      { l: 1, v: { score: ["85", "int"] }, c: "We start with a score of 85." },
      { l: 2, c: "First question: is 85 >= 90? **No**, it is False. Python skips the block under this `if`." },
      { l: 4, c: "Next question: is 85 >= 80? **Yes**, True. Python enters this block." },
      { l: 5, v: { grade: ["\"B\"", "str"] }, c: "It stores \"B\" in `grade`." },
      { l: 10, o: "Grade: B\n", c: "A branch has run, so Python **skips all the remaining `elif` and `else` lines** and jumps to the first line after the chain. Line 6 was never even checked." }
    ]}},
    { t: "code", ttl: "Grade calculator from your course notebook", c: R`
marks = 78
if marks > 95:
    print("Grade A+")
elif marks >= 75:
    print("Grade A")
elif marks >= 65:
    print("Grade B")
elif marks >= 55:
    print("Grade C")
elif marks >= 45:
    print("Grade D")
else:
    print("Grade E")`, o: R`Grade A` },
    { t: "note", k: "trap", h: "Trap! Order matters", b: "Because the first True condition wins, put the **strictest** check first. If you check `>= 45` first, a score of 92 matches it and never reaches the A grade.", c: R`
marks = 92
if marks >= 45:
    print("Grade D")
elif marks >= 90:
    print("Grade A")`, o: R`Grade D` },
    { t: "pred", c: R`
x = 15
if x > 10:
    print("big")
if x > 5:
    print("medium")
else:
    print("small")`, o: ["`big`", "`big` then `medium`", "`medium`", "`big` then `small`"], a: 1, e: "These are **two separate** `if` statements, not one chain. The first prints \"big\". The second is checked on its own and prints \"medium\"." },
    { t: "h", text: "Combining conditions" },
    { t: "p", b: "Use `and`, `or` and `not` to build bigger conditions. This BMI checker is from your course notebook." },
    { t: "code", c: R`
bmi = 18
if bmi > 18 and bmi < 25:
    print("You're Healthy!!")
elif bmi >= 25:
    print("You're OverWeight")
else:
    print("You're UnderWeight")
print("Completed!!")`, o: R`
You're UnderWeight
Completed!!` },
    { t: "note", k: "tip", b: "`bmi > 18 and bmi < 25` can be written as `18 < bmi < 25`. Python allows chained comparisons and they read more naturally." },
    { t: "note", k: "trap", h: "Trap! if x == 1 or 2", b: "This looks right but is always True. Python reads it as `(x == 1) or (2)`, and `2` on its own counts as True. Write the full comparison each time, or use `in`.", c: R`
choice = 5
if choice == 1 or 2:
    print("You picked 1 or 2")      # wrong! runs for any choice

if choice == 1 or choice == 2:
    print("Correct check")           # does not run
if choice in (1, 2):
    print("Also correct")            # does not run`, o: R`You picked 1 or 2` },
    { t: "h", text: "Nested if" },
    { t: "p", b: "You can put an `if` inside another `if`. The inner one is only checked when the outer one is True. This login check is from your course notebook." },
    { t: "code", c: R`
uname = "wscube"
password = "123456"

name = "wscube"      # what the user typed
ps = "000000"

if uname == name:
    print("Username is correct")
    if password == ps:
        print("Welcome back!!")
    else:
        print("Password is incorrect!!")
else:
    print("Incorrect username!!")`, o: R`
Username is correct
Password is incorrect!!` },
    { t: "note", k: "tip", b: "Deep nesting gets hard to read. If you are three levels deep, try combining conditions with `and`, or use `elif`." },
    { t: "h", text: "Truthy and falsy values" },
    { t: "p", b: "A condition does not have to be a comparison. Python can treat **any value** as True or False. These values count as ==falsy== (False): `0`, `0.0`, `\"\"` (empty text), `[]`, `()`, `{}`, `set()`, `None` and `False`. **Everything else is truthy.**" },
    { t: "code", c: R`
print(bool(0), bool(0.0), bool(""), bool([]), bool({}), bool(None))
print(bool(1), bool(-5), bool("0"), bool([0]), bool(" "))`, o: R`
False False False False False False
True True True True True` },
    { t: "code", ttl: "A common pattern: check for an empty value", c: R`
name = ""
if name:
    print("Hello", name)
else:
    print("Name is empty")`, o: R`Name is empty` },
    { t: "h", text: "Short forms: one-line if and ternary" },
    { t: "code", c: R`
age = 20
if age >= 18: print("Adult")                     # one-line if

status = "Adult" if age >= 18 else "Minor"       # ternary: picks a value
print(status)`, o: R`
Adult
Adult` },
    { t: "p", b: "The ternary form is great when you just need to choose between two **values**. For longer logic, use a normal `if-else` block. It is easier to read." },
    { t: "h", text: "pass: an empty placeholder" },
    { t: "p", b: "A block cannot be empty. If you want to write the logic later, put `pass` there. It does nothing, but keeps Python happy." },
    { t: "code", c: R`
amount = 600
if amount > 500:
    pass        # TODO: add discount later
print("Bill printed")`, o: R`Bill printed` },
    { t: "h", text: "match-case (Python 3.10 and newer)" },
    { t: "p", b: "When you compare one value against many fixed options, `match` can be cleaner than a long `elif` chain. `case _:` catches everything else, like `else`." },
    { t: "code", c: R`
choice = 2
match choice:
    case 1:
        print("Book a ticket")
    case 2:
        print("Cancel a ticket")
    case 3 | 4:
        print("Exit")
    case _:
        print("Invalid choice")`, o: R`Cancel a ticket` },
    { t: "note", k: "why", b: "In data work, conditions decide how each row is labelled: \"High value\" customers, \"Late\" deliveries, \"Weekend\" bookings. Later, pandas lets you apply the same logic to a million rows at once." },
    { t: "prac", items: [
      { q: "Print the largest of three numbers `a = 12`, `b = 45`, `c = 30` using if-elif-else.", sol: R`
a, b, c = 12, 45, 30
if a >= b and a >= c:
    print("Largest:", a)
elif b >= c:
    print("Largest:", b)
else:
    print("Largest:", c)`, out: R`Largest: 45` },
      { q: "Movie ticket pricing: children under 12 pay 100, seniors 60 and above pay 120, everyone else pays 200. Test with `age = 65`.", sol: R`
age = 65
if age < 12:
    price = 100
elif age >= 60:
    price = 120
else:
    price = 200
print("Ticket price:", price)`, out: R`Ticket price: 120` },
      { q: "From the theater billing system: give a 10% discount when 5 or more tickets are bought. Tickets cost 250 each and the customer buys 6.", hint: "Set `discount = 0` first, then change it only if the condition is True. No else needed.", sol: R`
num_tickets = 6
subtotal = num_tickets * 250
discount = 0
if num_tickets >= 5:
    discount = subtotal * 0.1
print("Subtotal:", subtotal)
print("Discount:", discount)
print("Total:", subtotal - discount)`, out: R`
Subtotal: 1500
Discount: 150.0
Total: 1350.0` },
      { q: "Rewrite as a ternary: if `temp > 30` the label is \"Hot\", otherwise \"Pleasant\". Use `temp = 34`.", sol: R`
temp = 34
label = "Hot" if temp > 30 else "Pleasant"
print(label)`, out: R`Hot` }
    ]}
  ],
  take: [
    "`if condition:` then an indented block. `else:` runs when the condition is False.",
    "In an `if-elif-else` chain, only the **first** True branch runs. Put the strictest check first.",
    "Combine with `and`, `or`, `not`. Never write `x == 1 or 2`. Write `x in (1, 2)`.",
    "Falsy: `0`, `0.0`, `\"\"`, `[]`, `()`, `{}`, `set()`, `None`, `False`. Everything else is truthy.",
    "`a if cond else b` picks between two values. `pass` is an empty placeholder."
  ],
  quiz: [
    { q: "What does this print?", c: R`
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")`, o: ["`B`", "`B` and `C`", "`A`", "Nothing"], a: 0, chk: 1, e: "The first True branch (`>= 80`) runs and the rest of the chain is skipped." },
    { q: "Which symbol must end an `if` line?", o: ["`;`", "`:`", "`{`", "Nothing"], a: 1, e: "A colon starts the indented block." },
    { q: "What does this print?", c: R`
x = 0
if x:
    print("yes")
else:
    print("no")`, o: ["`yes`", "`no`", "An error", "`0`"], a: 1, chk: 1, e: "0 is falsy, so the else block runs." },
    { q: "What does this print?", c: R`
choice = 9
if choice == 1 or 2:
    print("one or two")
else:
    print("other")`, o: ["`other`", "`one or two`", "An error", "Nothing"], a: 1, chk: 1, e: "It is read as `(choice == 1) or 2`, and 2 is truthy, so the condition is always True." },
    { q: "Which value is truthy?", o: ["`0`", "`\"\"`", "`[]`", "`\"0\"`"], a: 3, e: "\"0\" is a non-empty string, so it is truthy. The others are empty or zero." },
    { q: "What does this print?", c: R`
age = 16
print("Adult" if age >= 18 else "Minor")`, o: ["`Adult`", "`Minor`", "`True`", "An error"], a: 1, chk: 1, e: "The condition is False, so the value after `else` is chosen." },
    { q: "What is `pass` used for?", o: ["To skip to the next loop", "As a placeholder where a block is required but you have nothing to write yet", "To exit the program", "To pass a value to a function"], a: 1, e: "`pass` does nothing. It fills an empty block so Python does not raise an error." },
    { q: "In a nested if, when is the inner `if` checked?", o: ["Always", "Only when the outer condition is True", "Only when the outer condition is False", "Before the outer one"], a: 1, e: "The inner if is inside the outer block, so it only runs when the outer condition is True." },
    { q: "What does this print?", c: R`
day = "Sun"
match day:
    case "Sat" | "Sun":
        print("Weekend")
    case _:
        print("Weekday")`, o: ["`Weekday`", "`Weekend`", "Both", "An error"], a: 1, chk: 1, e: "`|` in a case means \"or\". \"Sun\" matches the first case." }
  ],
  cards: [
    ["Syntax of if-elif-else", "", R`
if a > b:
    print("a")
elif a == b:
    print("equal")
else:
    print("b")`],
    ["In an elif chain, how many branches run?", "At most **one**: the first one whose condition is True. If none are True, `else` runs (if there is one)."],
    ["Why does order matter in an elif chain?", "The first True condition wins. Put the strictest condition (like `>= 90`) before looser ones (like `>= 45`)."],
    ["List the falsy values", "`0`, `0.0`, `\"\"`, `[]`, `()`, `{}`, `set()`, `None` and `False`. Everything else is truthy."],
    ["What is wrong with `if x == 1 or 2:`?", "It is always True, because `2` alone is truthy. Write `if x == 1 or x == 2:` or `if x in (1, 2):`."],
    ["What is a ternary expression?", "A one-line if/else that picks a value: `status = \"Adult\" if age >= 18 else \"Minor\"`."],
    ["What does `pass` do?", "Nothing. It is a placeholder for a block you will fill in later."],
    ["What does `case _:` mean in match-case?", "The default case. It matches anything not matched above, like `else`."]
  ],
  cheat: [
    ["if x > 0:\n    ...\nelif x == 0:\n    ...\nelse:\n    ...", "Choose one of several paths"],
    ["if 18 <= age < 60:", "Chained comparison"],
    ["if x in (1, 2, 3):", "Match any of several values"],
    ["if not items:", "True when the list is empty"],
    ["v = \"A\" if ok else \"B\"", "Ternary (one-line if/else)"],
    ["pass", "Do-nothing placeholder"],
    ["match x:\n    case 1: ...\n    case _: ...", "match-case (Python 3.10+)"]
  ]
});
