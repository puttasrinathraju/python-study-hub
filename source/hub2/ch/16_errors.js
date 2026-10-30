chapter({
  id: "errors", part: 5, title: "Errors and exceptions", nav: "Errors & try/except", time: "45 min", lvl: "Intermediate",
  keys: "error exception traceback syntaxerror typeerror valueerror keyerror indexerror nameerror zerodivisionerror attributeerror try except else finally raise assert debugging",
  lead: "Errors are not failures, they are messages. Learn to read them in seconds, and use `try/except` so bad input does not crash your program.",
  goals: [
    "Tell syntax errors from runtime exceptions",
    "Read a traceback from the bottom up",
    "Recognise the 10 most common exceptions and their usual fix",
    "Handle errors with `try`, `except`, `else` and `finally`",
    "Raise your own errors with `raise`"
  ],
  src: ["PDF: Python Operators and Flow Control (try/except ticket validation)", "Course notebook functions_file_handling.ipynb (TypeError on write)", "W3Schools: Try...Except"],
  body: [
    { t: "h", text: "Two kinds of errors" },
    { t: "cmp", l: { h: "Syntax errors", items: ["Grammar mistakes: missing colon, bracket or quote", "Found **before** anything runs", "Nothing in the cell runs at all", "Fix: correct the code"], c: R`
if True
    print("hi")`, o: R`SyntaxError: expected ':'`, err: true }, r: { h: "Exceptions (runtime errors)", items: ["The grammar is fine, but something goes wrong **while running**", "Lines before the error do run", "Can be caught with `try/except`", "Fix: handle it, or fix the data or logic"], c: R`
print("Start")
print(10 / 0)`, o: R`
Start
ZeroDivisionError: division by zero`, err: true } },
    { t: "h", text: "Reading a traceback" },
    { t: "p", b: "When an exception is not handled, Python prints a ==traceback==: the trail of function calls that led to the error. It looks scary but follows a fixed shape." },
    { t: "deck", title: "How to read an error message", s: [
      { big: "Read it from the bottom up.", b: "The last line tells you **what** went wrong. The lines above tell you **where**." },
      { h: "Here is a real traceback", svg: "<pre style=\"text-align:left;font-size:13px;padding:6px\">KeyError                         Traceback (most recent call last)\nCell In[4], line 5\n      2     return menu[item]\n      4 menu = {\"tea\": 20}\n----> 5 print(get_price(menu, \"coffee\"))\n\nCell In[4], line 2, in get_price(menu, item)\n      1 def get_price(menu, item):\n----> 2     return menu[item]\n\nKeyError: 'coffee'</pre>" },
      { h: "Step 1: the last line", b: "`KeyError: 'coffee'`. The **type** is KeyError, so a dictionary key is missing. The **message** says which key: 'coffee'. Often this is all you need." },
      { h: "Step 2: the arrows", b: "In Jupyter, `---->` points at the exact line that failed (plain Python shows `File ..., line 5` and `^^^` instead). The lowest arrow is the line that actually broke: `return menu[item]` inside `get_price`." },
      { h: "Step 3: read upwards for context", b: "The block above shows **who called** that function: line 5, `get_price(menu, \"coffee\")`. So the fix is either to add \"coffee\" to the menu, or to use `menu.get(item)` to handle missing items." },
      { h: "Step 4: still stuck?", items: ["Print the variables just before the failing line", "Copy the last line of the error into a search engine", "Explain the code out loud, line by line (it really works)"] }
    ]},
    { t: "h", text: "The common exceptions" },
    { t: "table", head: ["Exception", "Typical cause", "Example", "Usual fix"], rows: [
      ["`SyntaxError`", "Grammar mistake", "`if x > 1` (no colon)", "Fix the typo"],
      ["`IndentationError`", "Wrong spaces at line start", "Body not indented", "Indent with 4 spaces"],
      ["`NameError`", "Unknown name", "`prnt(x)`, or variable not created yet", "Check spelling and run order"],
      ["`TypeError`", "Wrong type for the operation", "`\"age: \" + 5`", "Convert types"],
      ["`ValueError`", "Right type, bad value", "`int(\"abc\")`", "Validate input"],
      ["`IndexError`", "Position past the end", "`[1, 2][5]`", "Check `len()`"],
      ["`KeyError`", "Missing dict key", "`d[\"x\"]`", "Use `d.get(\"x\")`"],
      ["`ZeroDivisionError`", "Dividing by zero", "`10 / 0`", "Check before dividing"],
      ["`AttributeError`", "Method does not exist for that type", "`\"text\".append(\"x\")`", "Check the type and method name"],
      ["`FileNotFoundError`", "Wrong file name or folder", "`open(\"dat.csv\")`", "Check the path"],
      ["`ModuleNotFoundError`", "Library not installed", "`import pandsa`", "Fix spelling or `pip install`"]
    ]},
    { t: "code", ttl: "See seven of them in one go", c: R`
tests = [
    lambda: int("abc"),
    lambda: 10 / 0,
    lambda: [1, 2][5],
    lambda: {"a": 1}["b"],
    lambda: "age: " + 5,
    lambda: undefined_name,
    lambda: "text".append("x"),
]
for t in tests:
    try:
        t()
    except Exception as e:
        print(type(e).__name__, "->", e)`, o: R`
ValueError -> invalid literal for int() with base 10: 'abc'
ZeroDivisionError -> division by zero
IndexError -> list index out of range
KeyError -> 'b'
TypeError -> can only concatenate str (not "int") to str
NameError -> name 'undefined_name' is not defined
AttributeError -> 'str' object has no attribute 'append'` },
    { t: "h", text: "try and except" },
    { t: "p", b: "Put risky code inside `try:`. If an exception happens, Python **jumps straight to** the matching `except:` block instead of crashing. The rest of the program carries on." },
    { t: "anim", title: "What happens when an error hits a try block", trace: { code: R`
try:
    qty = int("five")
    print("Got", qty)
except ValueError:
    print("Please type a number")
print("Program continues")`, steps: [
      { l: 1, c: "Python enters the `try` block. From here on, errors will be caught." },
      { l: 2, c: "`int(\"five\")` fails. Python raises a **ValueError**." },
      { l: 4, c: "Python skips the rest of the try block (line 3 never runs) and looks for an `except` that matches ValueError. This one does." },
      { l: 5, o: "Please type a number\n", c: "The except block runs instead of a crash." },
      { l: 6, o: "Program continues\n", c: "Then the program simply carries on. Without try/except, it would have stopped at line 2." }
    ]}},
    { t: "code", ttl: "Catch specific errors, and get the message with as", c: R`
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError as e:
        return f"Bad input: {e}"

print(safe_divide(10, 4))
print(safe_divide(10, 0))
print(safe_divide(10, "2"))`, o: R`
2.5
Cannot divide by zero
Bad input: unsupported operand type(s) for /: 'int' and 'str'` },
    { t: "note", k: "tip", b: "Catch several types in one line with a tuple: `except (ValueError, TypeError):`." },
    { t: "h", text: "else and finally" },
    { t: "table", head: ["Block", "Runs when"], rows: [
      ["`try:`", "Always, first"],
      ["`except:`", "Only if a matching error happened in try"],
      ["`else:`", "Only if **no** error happened in try"],
      ["`finally:`", "**Always**, error or not. Used for clean-up like closing files"]
    ]},
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 560 250" width="560" role="img" aria-label="Flow of try, except, else and finally">';
      s += '<rect x="215" y="10" width="130" height="40" rx="10" class="sv-acc"/><text x="280" y="35" text-anchor="middle" class="sv-tm">try</text>';
      s += '<path d="M245 50 L130 100" class="sv-lnt" marker-end="url(#arwT)"/><text x="140" y="70" class="sv-tm sv-tt" style="font-size:13px">error</text>';
      s += '<path d="M315 50 L430 100" class="sv-lng" marker-end="url(#arwG)"/><text x="385" y="70" class="sv-tm sv-tg" style="font-size:13px">no error</text>';
      s += '<rect x="60" y="104" width="140" height="40" rx="10" class="sv-trap"/><text x="130" y="129" text-anchor="middle" class="sv-tm">except</text>';
      s += '<rect x="360" y="104" width="140" height="40" rx="10" class="sv-tip"/><text x="430" y="129" text-anchor="middle" class="sv-tm">else</text>';
      s += '<path d="M130 144 L250 190" class="sv-ln" marker-end="url(#arw)"/><path d="M430 144 L310 190" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<rect x="215" y="194" width="130" height="40" rx="10" class="sv-hl"/><text x="280" y="219" text-anchor="middle" class="sv-tm">finally</text>';
      return s + '</svg>';
    })(), cap: "If a matching error happens, except runs. If no error happens, else runs. finally always runs." },
    { t: "code", c: R`
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return None
    else:
        print("Division worked")
        return result
    finally:
        print("Done trying")

print(divide(10, 2))
print(divide(1, 0))`, o: R`
Division worked
Done trying
5.0
Cannot divide by zero
Done trying
None` },
    { t: "note", k: "trap", b: "Notice `finally` printed \"Done trying\" **before** the returned value was printed, even though `return` came first. `finally` runs on the way out of the function, no matter what." },
    { t: "h", text: "raise: create your own errors" },
    { t: "p", b: "Sometimes the data is wrong even though Python has no problem with it, like a negative age. Use `raise` to stop with a clear message." },
    { t: "code", c: R`
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

try:
    set_age(-3)
except ValueError as e:
    print("Error:", e)`, o: R`Error: Age cannot be negative` },
    { t: "h", text: "Real uses" },
    { t: "code", ttl: "Ticket validation from the PDF (with the typed answers simulated)", c: R`
answers = ["two", "15", "4"]       # pretend the user typed these
for raw in answers:
    try:
        n = int(raw)
        if 1 <= n <= 10:
            print("OK:", n)
            break
        print("Please enter a number between 1 and 10.")
    except ValueError:
        print("Please enter a valid number.")`, o: R`
Please enter a valid number.
Please enter a number between 1 and 10.
OK: 4` },
    { t: "code", ttl: "Cleaning a messy column", c: R`
raw = ["120", "85.5", "N/A", "", "42"]
clean = []
for r in raw:
    try:
        clean.append(float(r))
    except ValueError:
        pass                     # skip values that are not numbers
print(clean)`, o: R`[120.0, 85.5, 42.0]` },
    { t: "note", k: "why", b: "Real files always contain some junk: \"N/A\", blanks, \"1,200\" with a comma. `try/except` lets your script skip or log the bad rows instead of dying on row 40,000 of 50,000." },
    { t: "note", k: "trap", h: "Trap! The bare except", b: "`except:` with nothing after it catches **every** error, including typos in your own code. Your bug is silently hidden. Always name the error you expect, like `except ValueError:`." },
    { t: "p", b: "`assert` checks that something is True. If it is False, Python stops with `AssertionError` and your message." },
    { t: "code", ttl: "assert: a quick sanity check", c: R`
total = sum([10, 20, 30])
assert total == 60, "Total should be 60"
print("Check passed")`, o: R`Check passed` },
    { t: "pred", c: R`
try:
    print("A")
    x = [1, 2][3]
    print("B")
except IndexError:
    print("C")
finally:
    print("D")`, o: ["`A B C D`", "`A C D`", "`A C`", "`A D`"], a: 1, e: "A prints, then the IndexError jumps to except (C). B is skipped. finally always prints D. (Each letter prints on its own line.)" },
    { t: "prac", items: [
      { q: "Write `to_int(text)` that returns the integer, or `None` if the text is not a valid number.", sol: R`
def to_int(text):
    try:
        return int(text)
    except ValueError:
        return None

print(to_int("42"), to_int("forty"))`, out: R`42 None` },
      { q: "Look up prices from `menu = {\"tea\": 20, \"coffee\": 45}` for the orders `[\"tea\", \"juice\", \"coffee\"]`. Print \"not on menu\" for missing items using try/except.", sol: R`
menu = {"tea": 20, "coffee": 45}
for item in ["tea", "juice", "coffee"]:
    try:
        print(item, menu[item])
    except KeyError:
        print(item, "not on menu")`, out: R`
tea 20
juice not on menu
coffee 45` },
      { q: "Write `average(nums)` that raises a `ValueError` with the message \"empty list\" when given an empty list. Catch it and print the message.", sol: R`
def average(nums):
    if not nums:
        raise ValueError("empty list")
    return sum(nums) / len(nums)

try:
    average([])
except ValueError as e:
    print("Problem:", e)`, out: R`Problem: empty list` }
    ]}
  ],
  take: [
    "Syntax errors stop the code before it runs. Exceptions happen while running.",
    "Read a traceback from the bottom: the last line is the type and message, the arrows show the line.",
    "`try:` risky code, `except SomeError:` what to do instead. Name the error you expect.",
    "`else` runs when there was no error. `finally` always runs.",
    "`raise ValueError(\"message\")` stops with your own clear error."
  ],
  quiz: [
    { q: "Which part of a traceback should you read first?", o: ["The first line", "The last line", "The middle", "The line numbers"], a: 1, e: "The last line has the error type and message." },
    { q: "Which error does `int(\"abc\")` raise?", o: ["TypeError", "ValueError", "NameError", "SyntaxError"], a: 1, e: "The type (str) is acceptable to int(), but this particular value cannot be converted." },
    { q: "Which error does `{\"a\": 1}[\"b\"]` raise?", o: ["IndexError", "KeyError", "ValueError", "AttributeError"], a: 1, e: "The key \"b\" is not in the dictionary." },
    { q: "What does this print?", c: R`
try:
    print(10 / 0)
except ZeroDivisionError:
    print("oops")`, o: ["`0`", "`oops`", "`inf`", "Nothing, it crashes"], a: 1, chk: 1, e: "The error is caught and the except block runs." },
    { q: "When does the `else` block of a try statement run?", o: ["Always", "When an error happened", "When no error happened", "Never"], a: 2, e: "else runs only if the try block finished without an exception." },
    { q: "When does `finally` run?", o: ["Only on errors", "Only without errors", "Always", "Only if there is a return"], a: 2, e: "finally always runs. It is used for clean-up." },
    { q: "Why is a bare `except:` a bad idea?", o: ["It is a syntax error", "It hides every error, including your own bugs", "It is slower", "It only catches ValueError"], a: 1, e: "Always name the exception you expect, so unexpected bugs still show up." },
    { q: "What does this print?", c: R`
try:
    raise ValueError("bad value")
except ValueError as e:
    print(e)`, o: ["`ValueError`", "`bad value`", "`e`", "Nothing"], a: 1, chk: 1, e: "`as e` gives you the exception object. Printing it shows its message." }
  ],
  cards: [
    ["Syntax error vs exception", "Syntax error: bad grammar, found before running, nothing runs. Exception: happens while running and can be caught with try/except."],
    ["How do you read a traceback?", "From the bottom: last line = error type and message. In Jupyter, the `---->` arrows show the failing line. Read upward for who called it."],
    ["TypeError vs ValueError", "TypeError: wrong **type** (`\"a\" + 1`). ValueError: right type, bad **value** (`int(\"abc\")`)."],
    ["IndexError vs KeyError", "IndexError: list position past the end. KeyError: dictionary key missing."],
    ["try/except syntax", "", R`
try:
    n = int(text)
except ValueError:
    n = 0`],
    ["What do `else` and `finally` do in a try?", "`else`: runs if no error. `finally`: always runs, used for clean-up."],
    ["How do you get the error message?", "`except ValueError as e:` then `print(e)`."],
    ["How do you raise your own error?", "`raise ValueError(\"Age cannot be negative\")`"],
    ["Why avoid a bare `except:`?", "It catches everything, including your own bugs, and hides them."]
  ],
  cheat: [
    ["try:\n    ...\nexcept ValueError:\n    ...", "Handle a specific error"],
    ["except (ValueError, TypeError):", "Handle several types"],
    ["except Exception as e:\n    print(e)", "Catch and see the message"],
    ["else:", "Runs if no error"],
    ["finally:", "Always runs"],
    ["raise ValueError(\"msg\")", "Raise your own error"],
    ["assert x > 0, \"msg\"", "Quick sanity check"]
  ]
});
