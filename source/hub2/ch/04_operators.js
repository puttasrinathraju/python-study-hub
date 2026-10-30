chapter({
  id: "operators", part: 1, title: "Operators", nav: "Operators", time: "50 min", lvl: "Beginner", tricky: true,
  keys: "operators arithmetic floor division modulus remainder power comparison logical and or not assignment membership in identity is bitwise precedence ternary",
  lead: "The symbols that do maths, compare values and combine conditions. Includes the three operators that trip up almost everyone: `//`, `%` and `is`.",
  goals: [
    "The 7 operator families and what each one is for",
    "The difference between `/`, `//` and `%`, including negative numbers",
    "The order Python works out a long expression in",
    "How `and`, `or` and `not` combine True and False",
    "Why `is` and `==` are not the same thing"
  ],
  src: ["PDF: Python Operators and Flow Control", "Course notebooks da_cohort_13_first.ipynb and da_cohort_second.ipynb", "W3Schools: Operators, Booleans"],
  body: [
    { t: "h", text: "The operator families" },
    { t: "p", b: "An ==operator== is a symbol that does something with values. In `10 + 5`, the `+` is the operator and 10 and 5 are the **operands**. Python groups its operators into 7 families." },
    { t: "mm", title: "Operators mind map", root: "Operators", kids: [
      { t: "Arithmetic", k: ["+  -  *  /", "// floor division", "% remainder", "** power"] },
      { t: "Comparison", k: ["==  equal", "!=  not equal", ">  <  >=  <="] },
      { t: "Logical", k: ["and: both True", "or: at least one True", "not: flips it"] },
      { t: "Assignment", k: ["=  store", "+=  -=  *=  /=", "//=  %=  **="] },
      { t: "Membership", k: ["in", "not in"] },
      { t: "Identity", k: ["is", "is not"] },
      { t: "Bitwise", k: ["&  |  ^", "~  <<  >>"] }
    ]},
    { t: "h", text: "Arithmetic operators" },
    { t: "table", head: ["Operator", "Name", "Example", "Result"], rows: [
      ["`+`", "Addition", "`11 + 3`", "`14`"],
      ["`-`", "Subtraction", "`11 - 3`", "`8`"],
      ["`*`", "Multiplication", "`11 * 3`", "`33`"],
      ["`/`", "Division", "`11 / 3`", "`3.6666666666666665` (always a float)"],
      ["`//`", "Floor division", "`11 // 3`", "`3` (whole part only)"],
      ["`%`", "Modulus (remainder)", "`11 % 3`", "`2`"],
      ["`**`", "Exponent (power)", "`11 ** 3`", "`1331`"]
    ]},
    { t: "code", ttl: "From your course notebook", c: R`
n1 = 11
n2 = 3

print(n1 + n2)
print(n1 - n2)
print(n1 * n2)
print(n1 / n2)
print(n1 % n2)
print(n1 ** n2)
print(n1 // n2)`, o: R`
14
8
33
3.6666666666666665
2
1331
3` },
    { t: "note", k: "key", b: "`/` **always** gives a float, even when the answer is a whole number. `10 / 2` is `5.0`, not `5`." },
    { t: "h3", text: "Floor division and remainder, explained with sweets" },
    { t: "p", b: "You have 11 sweets and 3 friends. Each friend gets the same number of whole sweets. `11 // 3` tells you **how many each friend gets** (3). `11 % 3` tells you **how many are left over** (2)." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 560 190" width="560" role="img" aria-label="11 sweets: 3 groups of 3 and 2 left over">';
      for (var g = 0; g < 3; g++) {
        var x0 = 20 + g * 150;
        s += '<rect x="' + x0 + '" y="30" width="130" height="80" rx="12" class="sv-acc"/>';
        s += '<text x="' + (x0 + 65) + '" y="22" text-anchor="middle" class="sv-mb">friend ' + (g + 1) + '</text>';
        for (var k = 0; k < 3; k++) s += '<circle cx="' + (x0 + 30 + k * 35) + '" cy="70" r="13" class="sv-hl"/>';
      }
      s += '<rect x="470" y="30" width="80" height="80" rx="12" class="sv-trap"/><text x="510" y="22" text-anchor="middle" class="sv-mb">left over</text>';
      s += '<circle cx="492" cy="70" r="13" class="sv-hl"/><circle cx="528" cy="70" r="13" class="sv-hl"/>';
      s += '<text x="215" y="150" text-anchor="middle" class="sv-tm sv-ta" style="font-weight:600">11 // 3 = 3  (each friend gets 3)</text>';
      s += '<text x="510" y="150" text-anchor="middle" class="sv-tm sv-tt" style="font-weight:600">11 % 3 = 2</text>';
      s += '<text x="280" y="180" text-anchor="middle" class="sv-mb">Check: 3 friends × 3 sweets + 2 left = 11</text>';
      return s + '</svg>';
    })(), cap: "`//` is how many whole groups. `%` is what is left over." },
    { t: "p", b: "`%` is surprisingly useful. Here are three everyday uses." },
    { t: "code", c: R`
print(56 % 2 == 0)    # is 56 even? (even numbers leave remainder 0)
print(1234 % 10)      # last digit of a number
print(125 % 60)       # minutes left after taking out whole hours`, o: R`
True
4
5` },
    { t: "note", k: "trap", h: "Trap! Floor division rounds DOWN, not towards zero", b: "With negative numbers, `//` goes to the next **lower** whole number. So `-7 // 2` is `-4`, not `-3`. And `%` follows the same rule, so `-7 % 3` is `2`. If you just want to chop off the decimals, use `int(-7 / 2)`.", c: R`
print(7 // 2)
print(-7 // 2)
print(-7 % 3)
print(int(-7 / 2))`, o: R`
3
-4
2
-3` },
    { t: "note", k: "trap", h: "Trap from the course notebook", b: "The profit margin was written as `(profit // netRevenue) * 100` and printed `0.0`. 30000 divided by 180000 is 0.1666. Floor division keeps only the whole part, which is 0. The fix is `(profit / netRevenue) * 100`, which gives 16.67." },
    { t: "code", ttl: "Power: ** ", c: R`
print(2 ** 10)
print(25 ** 0.5)    # power of 0.5 is the square root
print(2 ** -1)`, o: R`
1024
5.0
0.5` },
    { t: "pred", chk: 1, c: R`print(7 // 2, 7 % 2, 7 / 2)`, o: ["`3 1 3.5`", "`3.5 1 3`", "`3 0 3.5`", "`4 1 3.5`"], a: 0, e: "7 // 2 is 3 (whole groups), 7 % 2 is 1 (left over), 7 / 2 is 3.5 (true division)." },
    { t: "h", text: "Order of operations (precedence)" },
    { t: "p", b: "When an expression has several operators, Python follows a fixed order, like BODMAS or PEMDAS in school maths. **Brackets first, then powers, then multiply and divide, then add and subtract.** Operators of the same level run left to right." },
    { t: "anim", title: "Working out 2 + 3 * 4 ** 2 // 5", frames: [
      { html: "<div class=\"bigcode\">2 + 3 * 4 ** 2 // 5</div>", c: "Python does not go left to right here. It looks for the operator with the highest priority first." },
      { html: "<div class=\"bigcode\">2 + 3 * <u>4 ** 2</u> // 5</div><div class=\"res\">4 ** 2 = 16</div>", c: "Powers `**` come first. 4 ** 2 is 16." },
      { html: "<div class=\"bigcode\">2 + <u>3 * 16</u> // 5</div><div class=\"res\">3 * 16 = 48</div>", c: "Next level: `*`, `/`, `//` and `%`. They are equal, so Python goes left to right. The `*` comes first." },
      { html: "<div class=\"bigcode\">2 + <u>48 // 5</u></div><div class=\"res\">48 // 5 = 9</div>", c: "Then `//`. 48 // 5 is 9 (5 goes into 48 nine whole times)." },
      { html: "<div class=\"bigcode\"><u>2 + 9</u></div><div class=\"res\">= 11</div>", c: "Addition comes last. The answer is 11." },
      { html: "<div class=\"bigcode\">(2 + 3) * 4 ** 2 // 5</div><div class=\"res\">= 5 * 16 // 5 = 80 // 5 = 16</div>", c: "Brackets change everything. When in doubt, add brackets. They make your code easier to read too." }
    ]},
    { t: "deck", title: "The precedence ladder", s: [
      { big: "Highest priority runs first.", b: "Read this ladder from the top. When two operators are on the same rung, Python goes left to right. Two exceptions: `**` goes right to left, and comparisons chain (`1 < x < 10` means `1 < x and x < 10`)." },
      { h: "Rung 1: Brackets ( )", b: "Anything in brackets is worked out first.", c: R`print((2 + 3) * 4)`, o: R`20` },
      { h: "Rung 2: Power **", b: "Powers beat a minus sign in front. So `-2 ** 2` is `-(2 ** 2)`.", c: R`
print(-2 ** 2)
print((-2) ** 2)`, o: R`
-4
4` },
      { h: "Rung 3: * / // %", b: "Same rung, so left to right.", c: R`print(20 / 4 * 2)`, o: R`10.0` },
      { h: "Rung 4: + -", c: R`print(10 - 4 + 2)`, o: R`8` },
      { h: "Rung 5: comparisons", b: "`==  !=  >  <  >=  <=  in  is` come after all the maths.", c: R`print(2 + 3 > 4)`, o: R`True` },
      { h: "Rung 6 to 8: not, then and, then or", b: "`not` is applied first, then `and`, then `or`.", c: R`print(True or False and False)`, o: R`True` }
    ]},
    { t: "h", text: "Comparison operators" },
    { t: "p", b: "Comparisons ask a question and always answer with `True` or `False`." },
    { t: "code", c: R`
a = 10
b = 5
print(a == b)    # equal
print(a != b)    # not equal
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)`, o: R`
False
True
True
False
True
False` },
    { t: "code", ttl: "Handy extras", c: R`
x = 7
print(1 < x < 10)            # chained comparison
print(5 == 5.0)              # int and float compare by value
print("apple" < "banana")    # text compares letter by letter
print("Zebra" < "apple")     # capital letters come before small ones`, o: R`
True
True
True
True` },
    { t: "note", k: "trap", h: "Trap! = vs ==", b: "`if x = 5:` is a `SyntaxError`. One `=` stores a value. Two `==` compare. Read `==` aloud as \"is equal to\"." },
    { t: "h", text: "Logical operators: and, or, not" },
    { t: "table", head: ["A", "B", "A and B", "A or B", "not A"], rows: [
      ["True", "True", "**True**", "**True**", "False"],
      ["True", "False", "False", "**True**", "False"],
      ["False", "True", "False", "**True**", "**True**"],
      ["False", "False", "False", "False", "**True**"]
    ], cap: "`and` needs both. `or` needs at least one. `not` flips." },
    { t: "code", ttl: "From your course notebook", c: R`
n1 = 11
n2 = 16
print(n1 > 10 and n2 < 15)
print(n1 > 10 or n2 < 15)
print(not (n1 > 10 and n2 < 15))`, o: R`
False
True
True` },
    { t: "note", k: "tip", h: "Short-circuit: Python stops early", b: "With `and`, if the left side is False, the answer is already False, so Python skips the right side. With `or`, if the left side is True, it skips the right side. You can use this to avoid errors.", c: R`
x = 0
print(x != 0 and 10 / x > 1)    # 10 / 0 never runs, so no error`, o: R`False` },
    { t: "h", text: "Assignment operators" },
    { t: "p", b: "These are shortcuts. `x += 5` means `x = x + 5`." },
    { t: "table", head: ["Operator", "Example", "Same as"], rows: [
      ["`=`", "`x = 5`", "`x = 5`"], ["`+=`", "`x += 3`", "`x = x + 3`"], ["`-=`", "`x -= 3`", "`x = x - 3`"], ["`*=`", "`x *= 3`", "`x = x * 3`"],
      ["`/=`", "`x /= 3`", "`x = x / 3`"], ["`//=`", "`x //= 3`", "`x = x // 3`"], ["`%=`", "`x %= 3`", "`x = x % 3`"], ["`**=`", "`x **= 3`", "`x = x ** 3`"]
    ]},
    { t: "code", c: R`
amount = 0
amount += 2000
print(amount)
amount -= 4000
print(amount)
amount *= 2
print(amount)
amount /= 4       # becomes a float
print(amount)`, o: R`
2000
-2000
-4000
-1000.0` },
    { t: "h", text: "Membership operators: in, not in" },
    { t: "p", b: "`in` checks whether a value is **inside** a list, string, tuple, set or dictionary. For a dictionary, `in` checks the **keys**, not the values." },
    { t: "code", c: R`
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)
print("orange" not in fruits)

print("W" not in "Wscube")
print("cube" in "Wscube")
print("w" in "Wscube")       # case matters`, o: R`
True
True
False
True
False` },
    { t: "h", text: "Identity operators: is, is not" },
    { t: "p", b: "`==` asks: **do these have the same value?** `is` asks: **are these the very same object in memory?** Two lists can look identical but be two separate objects." },
    { t: "code", c: R`
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)    # same values?
print(a is b)    # same object?
print(a is c)`, o: R`
True
False
True` },
    { t: "fig", svg: V.refs({ vars: [["a", 0], ["b", 1], ["c", 0]], objs: [{ v: "[1, 2, 3]", t: "object 1" }, { v: "[1, 2, 3]", t: "object 2" }], label: "a and c point at the same list, b points at a different list with the same values" }), cap: "`a` and `c` point at the same list. `b` is a separate list that happens to hold the same values." },
    { t: "note", k: "like", b: "Two people both have a red Activa scooter. `==` asks \"are the scooters the same model and colour?\" (yes). `is` asks \"is it the same scooter?\" (no, there are two)." },
    { t: "code", ttl: "id(): every object has an ID number. `is` compares IDs", c: R`
a = [1, 2]
b = [1, 2]
c = a
print(id(a) == id(c), id(a) == id(b))
print(a is c, a is b)`, o: R`
True False
True False` },
    { t: "note", k: "trap", h: "Trap! Do not use is to compare numbers or text", b: "Python secretly reuses small numbers (from -5 to 256), so two variables holding 5 are always the same object, but two variables holding 1000 may not be. Results depend on how the code runs. Use `==` for values. Use `is` only for `None`: write `if result is None:`." },
    { t: "h", text: "Bitwise operators (just know they exist)" },
    { t: "p", b: "These work on the binary digits of whole numbers. You will rarely use them on plain numbers. But `&`, `|` and `~` come back in **NumPy and pandas**. There they mean **and**, **or** and **not** for whole columns. Wrap each condition in brackets: `(a > 1) & (b < 5)`." },
    { t: "code", c: R`
print(6 & 3)    # 110 AND 011 = 010
print(6 | 3)    # 110 OR  011 = 111
print(6 ^ 3)    # 110 XOR 011 = 101
print(6 << 1)   # shift left: doubles
print(6 >> 1)   # shift right: halves`, o: R`
2
7
5
12
3` },
    { t: "h", text: "The ternary operator (one-line if)" },
    { t: "code", c: R`
n = 7
result = "Even" if n % 2 == 0 else "Odd"
print(result)`, o: R`Odd` },
    { t: "p", b: "Read it as: \"result is Even **if** n is divisible by 2, **else** Odd\". You will use this more in the next chapter." },
    { t: "prac", items: [
      { q: "A pack holds 12 eggs. You have 150 eggs. How many full packs can you make, and how many eggs are left?", sol: R`
eggs = 150
print("Full packs:", eggs // 12)
print("Left over:", eggs % 12)`, out: R`
Full packs: 12
Left over: 6` },
      { q: "Convert 7384 seconds into hours, minutes and seconds.", hint: "1 hour = 3600 seconds. Use `//` for whole hours, then `%` for what is left.", sol: R`
total = 7384
hours = total // 3600
minutes = (total % 3600) // 60
seconds = total % 60
print(hours, "h", minutes, "m", seconds, "s")`, out: R`2 h 3 m 4 s` },
      { q: "A customer gets free delivery if the order is above 499 **or** they are a member. Write the condition for `order = 350`, `member = True`.", sol: R`
order = 350
member = True
print(order > 499 or member)`, out: R`True` },
      { q: "Check if the year 2024 is a leap year: divisible by 4 and not by 100, or divisible by 400.", sol: R`
year = 2024
print((year % 4 == 0 and year % 100 != 0) or year % 400 == 0)`, out: R`True` }
    ]}
  ],
  take: [
    "`/` always gives a float. `//` gives whole groups. `%` gives the remainder.",
    "`//` rounds **down**, so `-7 // 2` is `-4`.",
    "Order: brackets, `**`, `* / // %`, `+ -`, comparisons, `not`, `and`, `or`. Add brackets when unsure.",
    "`and` needs both True, `or` needs one, `not` flips. Python stops early (short-circuit).",
    "`==` compares values. `is` checks if it is the same object. Use `is` only with `None`."
  ],
  quiz: [
    { q: "What does this print?", c: R`print(17 // 5)`, o: ["`3.4`", "`3`", "`2`", "`4`"], a: 1, chk: 1, e: "5 goes into 17 three whole times." },
    { q: "What does this print?", c: R`print(17 % 5)`, o: ["`3`", "`2`", "`3.4`", "`0`"], a: 1, chk: 1, e: "5 times 3 is 15, and 17 minus 15 leaves 2." },
    { q: "What does this print?", c: R`print(10 / 2)`, o: ["`5`", "`5.0`", "`2`", "`5.00`"], a: 1, chk: 1, e: "`/` always returns a float." },
    { q: "What does this print?", c: R`print(-7 // 2)`, o: ["`-3`", "`-4`", "`-3.5`", "`3`"], a: 1, chk: 1, e: "Floor division rounds down to the next lower whole number. -3.5 rounds down to -4." },
    { q: "What does this print?", c: R`print(2 + 3 * 4)`, o: ["`20`", "`14`", "`24`", "`9`"], a: 1, chk: 1, e: "Multiplication comes before addition: 3 * 4 = 12, then 2 + 12 = 14." },
    { q: "What does this print?", c: R`
a = [1, 2]
b = [1, 2]
print(a == b, a is b)`, o: ["`True True`", "`True False`", "`False False`", "`False True`"], a: 1, chk: 1, e: "Same values, so `==` is True. Two separate lists, so `is` is False." },
    { q: "What does this print?", c: R`
x = 10
x += 5
x *= 2
print(x)`, o: ["`20`", "`25`", "`30`", "`15`"], a: 2, chk: 1, e: "10 + 5 = 15, then 15 * 2 = 30." },
    { q: "What does this print?", c: R`print(not (True and False))`, o: ["`True`", "`False`", "An error", "`None`"], a: 0, chk: 1, e: "`True and False` is False. `not False` is True." },
    { q: "What does this print?", c: R`print(-2 ** 2)`, o: ["`4`", "`-4`", "`2`", "An error"], a: 1, chk: 1, e: "`**` has higher priority than the minus sign, so this is `-(2 ** 2)`." },
    { q: "When should you use `is` instead of `==`?", o: ["To compare numbers", "To compare strings", "To check if something is `None`", "Always, it is faster"], a: 2, e: "Use `==` for values. `is` checks object identity and is meant for `None` checks." }
  ],
  cards: [
    ["Difference between `/` and `//`", "`/` is true division and always gives a float (7 / 2 = 3.5). `//` is floor division and gives the whole part (7 // 2 = 3)."],
    ["What does `%` give?", "The **remainder** after division. 11 % 3 = 2. Use `n % 2 == 0` to test for even numbers."],
    ["What is `-7 // 2`?", "`-4`. Floor division always rounds **down**, to the lower number."],
    ["How do you write a power or a square root?", "Power: `2 ** 3` = 8. Square root: `25 ** 0.5` = 5.0."],
    ["Order of operations in Python", "Brackets, `**`, then `* / // %`, then `+ -`, then comparisons, then `not`, `and`, `or`."],
    ["What does `and` return True for?", "Only when **both** sides are True."],
    ["What does `or` return True for?", "When **at least one** side is True."],
    ["What does `x += 3` mean?", "`x = x + 3`. Add 3 to x and store the result back in x."],
    ["`==` vs `is`", "`==` checks if values are equal. `is` checks if both names point at the **same object** in memory."],
    ["What does `in` do?", "Checks membership: `\"a\" in \"data\"` is True, `5 in [1, 2, 3]` is False."],
    ["Write a one-line if/else", "", R`label = "Even" if n % 2 == 0 else "Odd"`]
  ],
  cheat: [
    ["7 / 2  7 // 2  7 % 2", "3.5, 3, 1"],
    ["2 ** 3", "Power: 8"],
    ["n % 2 == 0", "Is n even?"],
    ["==  !=  >  <  >=  <=", "Compare, gives True/False"],
    ["1 < x < 10", "Chained comparison"],
    ["a and b  a or b  not a", "Combine conditions"],
    ["x += 1", "Add 1 to x"],
    ["\"a\" in text", "Membership test"],
    ["x is None", "Identity check, use for None"],
    ["a if cond else b", "One-line if/else"]
  ]
});
