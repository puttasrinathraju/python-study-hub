p = 'genref.py'; s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:60]; s = s.replace(a, b)
# 1. more string methods
rep('''  ("zfill(width)", "Pads with zeros on the left", 'print("7".zfill(3))'),
 ]),''', '''  ("zfill(width)", "Pads with zeros on the left", 'print("7".zfill(3))'),
  ("encode(encoding)", "Turns text into bytes, for files and the internet", 'print("café".encode("utf-8"))'),
  ("expandtabs(n)", "Replaces tab characters with spaces", 'print("a\\\\tb".expandtabs(4) + "|")'),
  ("format_map(d)", "Like format(), but fills the slots from a dict", 'print("{name} is {age}".format_map({"name": "Asha", "age": 25}))'),
  ("isascii()", "True if every character is plain English (ASCII)", 'print("Pune".isascii(), "₹500".isascii())'),
  ("isdecimal()", "True if only the digits 0 to 9", 'print("2024".isdecimal(), "²".isdecimal())'),
  ("isidentifier()", "True if the text could be a variable name", 'print("total_sales".isidentifier(), "2nd".isidentifier())'),
  ("isnumeric()", "True if only number characters, including ½ and ²", 'print("½".isnumeric(), "12.5".isnumeric())'),
  ("isprintable()", "True if there are no hidden characters like new lines", 'print("hi".isprintable(), "hi\\\\n".isprintable())'),
  ("maketrans(x, y, z)", "Builds a swap table for translate(); z lists characters to delete", 'table = str.maketrans("ae", "AE")\\nprint("data science".translate(table))'),
  ("rindex(x)", "Like index(), but searches from the right", 'print("a/b/c".rindex("/"))'),
  ("rpartition(sep)", "Splits once, at the last sep", 'print("report.final.csv".rpartition("."))'),
  ("translate(table)", "Swaps or deletes characters using a maketrans() table", 'print("9,84,80".translate(str.maketrans("", "", ",")))'),
 ]),''')
# 2. set
rep('''  ("symmetric_difference(t)",''', '''  ("symmetric_difference_update(t)", "Keeps only items in one set but not both (s ^= t)", 's = {1, 2, 3}\\ns.symmetric_difference_update({3, 4})\\nprint(s)'),
  ("symmetric_difference(t)",''')
# 3. builtins (the full official list)
B = r'''
  ("__import__(name)", "What import uses behind the scenes; write import instead", 'm = __import__("math")\nprint(m.sqrt(16))'),
  ("aiter(x)", "Gets an async iterator, for async for loops", None, "Used only in async code (`async def`), which data analysis rarely needs."),
  ("anext(it)", "The next item from an async iterator", None, "Used only in async code (`async def`), which data analysis rarely needs."),
  ("ascii(x)", "Like repr(), but escapes non-English characters", 'print(ascii("café ₹"))'),
  ("bin(n)", "The number in binary, as text", 'print(bin(10))'),
  ("breakpoint()", "Pauses the program here and opens the debugger", None, "Put it on a line to stop there and inspect your variables. Try it in your own Python or IDE."),
  ("bytearray(x)", "Bytes you can change", 'b = bytearray(b"hi")\nb[0] = 72\nprint(b)'),
  ("bytes(x, encoding)", "Bytes that cannot change", 'print(bytes("hi", "utf-8"), list(b"hi"))'),
  ("callable(x)", "True if x can be called with ()", 'print(callable(len), callable(5))'),
  ("classmethod", "Makes a method that gets the class (cls), often another way to create objects", 'class Guest:\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def from_text(cls, text):\n        return cls(text.strip().title())\nprint(Guest.from_text("  asha ").name)'),
  ("compile(text, name, mode)", "Turns text into code that eval() or exec() can run (rarely needed)", 'code = compile("2 + 3", "<text>", "eval")\nprint(eval(code))'),
  ("complex(re, im)", "A complex number", 'print(complex(2, 3), (2 + 3j).real)'),
  ("delattr(obj, name)", "Deletes an attribute by name", 'class C:\n    pass\nc = C()\nc.x = 1\ndelattr(c, "x")\nprint(hasattr(c, "x"))'),
  ("dir(x)", "Lists the names (methods and attributes) x has", 'print([m for m in dir("") if m.startswith("is")][:4])'),
  ("eval(text)", "Runs a text expression and gives back the result; never use it on text from users", 'print(eval("2 * (3 + 4)"))'),
  ("exec(text)", "Runs text as Python code; never use it on text from users", 'exec("x = 5\\nprint(x * 2)")'),
  ("frozenset(x)", "A set that cannot change, so it can be a dict key", 'f = frozenset([1, 2, 2])\nprint(f, 2 in f)'),
  ("getattr(obj, name, default)", "Gets an attribute by name, with an optional default", 'class Hotel:\n    city = "Pune"\nprint(getattr(Hotel, "city"), getattr(Hotel, "stars", 3))'),
  ("globals()", "A dict of every name defined at the top level", 'rate = 1800\nprint("rate" in globals())'),
  ("hasattr(obj, name)", "True if the object has that attribute", 'print(hasattr("hi", "upper"), hasattr(5, "upper"))'),
  ("hash(x)", "The number sets and dict keys use; lists cannot be hashed", 'print(hash(5), hash("a") == hash("a"))'),
  ("help(x)", "Shows Python's built-in help for x", None, "Try `help(str.split)` in your own Python. It prints a long page of text, so it is not shown here."),
  ("hex(n)", "The number in hexadecimal, as text", 'print(hex(255))'),
  ("id(x)", "A unique number for an object; the same id means the same object", 'a = [1, 2]\nb = a\nprint(id(a) == id(b))'),
  ("issubclass(A, B)", "True if class A is a child of class B", 'print(issubclass(bool, int), issubclass(KeyError, LookupError))'),
  ("iter(x)", "Gets an iterator, to take items one at a time with next()", 'it = iter(["a", "b"])\nprint(next(it), next(it))'),
  ("locals()", "A dict of the names inside the current function", 'def f():\n    x = 1\n    return locals()\nprint(f())'),
  ("memoryview(b)", "Looks at bytes without copying them (advanced)", 'm = memoryview(b"abc")\nprint(m[0], m.tobytes())'),
  ("object()", "The base class of every class in Python", 'o = object()\nprint(type(o).__name__, isinstance(5, object))'),
  ("oct(n)", "The number in octal, as text", 'print(oct(8))'),
  ("open(file, mode)", "Opens a file: \"r\" read, \"w\" write, \"a\" append", 'with open("notes.txt", "w") as f:\n    f.write("hello")\nwith open("notes.txt") as f:\n    print(f.read())'),
  ("property", "Lets a method be read like a value, without ()", 'class Room:\n    def __init__(self, rate):\n        self.rate = rate\n    @property\n    def with_gst(self):\n        return self.rate * 1.18\nprint(Room(1000).with_gst)'),
  ("repr(x)", "The developer view of a value; text keeps its quotes", 'print(repr("hi"), str("hi"))'),
  ("setattr(obj, name, value)", "Sets an attribute by name", 'class C:\n    pass\nc = C()\nsetattr(c, "city", "Pune")\nprint(c.city)'),
  ("slice(start, stop, step)", "A saved slice you can reuse", 's = slice(1, 4)\nprint("python"[s], [10, 20, 30, 40, 50][s])'),
  ("staticmethod", "A plain function kept inside a class: no self, no cls", 'class Money:\n    @staticmethod\n    def rupees(n):\n        return f"₹{n:,}"\nprint(Money.rupees(150000))'),
  ("super()", "Calls the parent class, usually from __init__", 'class Room:\n    def __init__(self, rate):\n        self.rate = rate\nclass Suite(Room):\n    def __init__(self, rate):\n        super().__init__(rate)\n        self.butler = True\nprint(Suite(4800).rate)'),
  ("vars(obj)", "A dict of the object's attributes", 'class Guest:\n    def __init__(self):\n        self.name = "Asha"\n        self.nights = 2\nprint(vars(Guest()))'),'''
rep('''  ("zip(a, b)", "Pairs items from two lists", 'print(list(zip(["Asha", "Ravi"], [82, 67])))'),
 ]),
]''', '''  ("zip(a, b)", "Pairs items from two lists", 'print(list(zip(["Asha", "Ravi"], [82, 67])))'),''' + B + '''
 ]),
 ("file", "File methods", "Use these on the file object that `open()` gives you. Modes: `\\"r\\"` read (the default), `\\"w\\"` write (replaces the file), `\\"a\\"` append, `\\"r+\\"` read and write. Write `with open(...) as f:` so the file closes by itself. Most examples first write a small file, so every one of them runs.", FILE),
 ("kw", "Keywords", "Keywords are Python's reserved words, so you cannot use them as names: `class = 5` is a SyntaxError. `match`, `case`, `type` and `_` are **soft** keywords: special only in certain places.", KW),
 ("exc", "Built-in exceptions", "Each error's name tells you what went wrong. Catch the specific one, like `except KeyError:`. Some are parents of others: `LookupError` covers `IndexError` and `KeyError`, `ArithmeticError` covers `ZeroDivisionError` and `OverflowError`, and `OSError` covers `FileNotFoundError` and `PermissionError`. `except Exception` catches almost everything except `SystemExit` and `KeyboardInterrupt`.", EXC),
]''')
# section data defined before S
SETUP = 'with open("notes.txt", "w") as f:\\n    f.write("line 1\\\\nline 2\\\\nline 3\\\\n")\\n'
pre = r'''SETUP = 'with open("notes.txt", "w") as f:\n    f.write("line 1\\nline 2\\nline 3\\n")\n'
FILE = [
  ("close()", "Closes the file (with does this for you)", 'f = open("notes.txt", "w")\nf.write("hi")\nf.close()\nprint(f.closed)'),
  ("detach()", "Separates the text layer from the raw binary file", None, "Rarely needed. It is for advanced work with binary files."),
  ("fileno()", "The operating system's number for the open file", SETUP + 'with open("notes.txt") as f:\n    print(isinstance(f.fileno(), int))'),
  ("flush()", "Writes waiting text to the file now, not later", 'with open("log.txt", "w") as f:\n    f.write("saved now")\n    f.flush()\n    with open("log.txt") as g:\n        print(g.read())'),
  ("isatty()", "True if the file is a terminal window", SETUP + 'with open("notes.txt") as f:\n    print(f.isatty())'),
  ("read(n)", "Reads the whole file, or n characters, as one string", SETUP + 'with open("notes.txt") as f:\n    print(f.read(6))'),
  ("readable()", "True if you can read from the file", 'with open("notes.txt", "w") as f:\n    print(f.readable(), f.writable())'),
  ("readline()", "Reads one line, including its \\n", SETUP + 'with open("notes.txt") as f:\n    print(f.readline().strip())\n    print(f.readline().strip())'),
  ("readlines()", "Reads every line into a list", SETUP + 'with open("notes.txt") as f:\n    print(f.readlines())'),
  ("seek(pos)", "Moves to a position (0 is the start)", SETUP + 'with open("notes.txt") as f:\n    f.read()\n    f.seek(0)   # back to the start\n    print(f.readline().strip())'),
  ("seekable()", "True if you can use seek()", SETUP + 'with open("notes.txt") as f:\n    print(f.seekable())'),
  ("tell()", "The current position in the file", SETUP + 'with open("notes.txt") as f:\n    f.readline()\n    print(f.tell())'),
  ("truncate(size)", "Cuts the file down to size characters", SETUP + 'with open("notes.txt", "r+") as f:\n    f.truncate(6)\nwith open("notes.txt") as f:\n    print(f.read())'),
  ("writable()", "True if you can write to the file", SETUP + 'with open("notes.txt") as f:\n    print(f.writable())'),
  ("write(text)", "Writes text and gives back how many characters", 'with open("notes.txt", "w") as f:\n    n = f.write("hello")\nwith open("notes.txt") as f:\n    print(n, f.read())'),
  ("writelines(lines)", "Writes a list of strings; it does not add new lines", 'with open("notes.txt", "w") as f:\n    f.writelines(["a\\n", "b\\n"])\nwith open("notes.txt") as f:\n    print(f.read().splitlines())'),
]
KW = [
  ("False", "The 'no' value of a bool", 'print(5 < 3, bool(0))'),
  ("None", "Means 'no value'; test it with is None", 'result = print("hi")\nprint(result is None)'),
  ("True", "The 'yes' value of a bool", 'print(5 > 3, bool("hi"))'),
  ("and", "True only if both sides are true", 'age = 25\nprint(age > 18 and age < 60)'),
  ("as", "Gives something a short name", 'import math as m\nprint(m.sqrt(49))'),
  ("assert", "Stops with AssertionError if a check is False", 'nights = 2\nassert nights > 0, "nights must be positive"\nprint("ok")'),
  ("async", "Starts an asynchronous function (async def)", None, "For web and network code that waits a lot. Data analysis rarely needs it."),
  ("await", "Waits for an async result inside async def", None, "Only works inside an `async def` function."),
  ("break", "Leaves the loop now", 'for n in [3, 8, 12, 5]:\n    if n > 10:\n        break\n    print(n)'),
  ("class", "Defines a class", 'class Guest:\n    pass\nprint(type(Guest()).__name__)'),
  ("continue", "Skips to the next turn of the loop", 'for n in [1, 2, 3, 4]:\n    if n % 2 == 0:\n        continue\n    print(n)'),
  ("def", "Defines a function", 'def double(x):\n    return x * 2\nprint(double(21))'),
  ("del", "Deletes a name, an item or a slice", 'rooms = ["101", "102", "103"]\ndel rooms[0]\nprint(rooms)'),
  ("elif", "Another condition, checked if the ones above were False", 'score = 72\nif score >= 80:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")'),
  ("else", "Runs when no condition above was True", 'stock = 0\nif stock > 0:\n    print("in stock")\nelse:\n    print("sold out")'),
  ("except", "Catches an error from the try block", 'try:\n    int("abc")\nexcept ValueError:\n    print("not a number")'),
  ("finally", "Always runs, error or not", 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("error")\nfinally:\n    print("always runs")'),
  ("for", "Loops over every item", 'for city in ["Pune", "Goa"]:\n    print(city)'),
  ("from", "Imports one part of a module", 'from math import sqrt\nprint(sqrt(81))'),
  ("global", "Lets a function change a top-level variable", 'count = 0\ndef add():\n    global count\n    count += 1\nadd()\nprint(count)'),
  ("if", "Runs code only when a condition is True", 'nights = 3\nif nights > 2:\n    print("long stay")'),
  ("import", "Loads a module", 'import math\nprint(math.pi)'),
  ("in", "Checks membership, or loops in for", 'print("a" in "data", 5 in [1, 2, 3])'),
  ("is", "True if both are the same object (not just equal)", 'a = [1]\nb = a\nc = [1]\nprint(a is b, a is c, a == c)'),
  ("lambda", "A small one-line function without a name", 'double = lambda x: x * 2\nprint(double(8))'),
  ("match, case", "Soft keywords: compare a value against patterns (Python 3.10+)", 'status = "cancelled"\nmatch status:\n    case "confirmed":\n        print("Keep")\n    case "cancelled" | "no-show":\n        print("Check refund")\n    case _:\n        print("Unknown")'),
  ("nonlocal", "Lets an inner function change the outer function's variable", 'def outer():\n    n = 0\n    def inner():\n        nonlocal n\n        n += 1\n    inner()\n    return n\nprint(outer())'),
  ("not", "Flips True and False", 'print(not True, not 0)'),
  ("or", "True if either side is true; stops early", 'print(0 or "default", 5 > 3 or 1 / 0)'),
  ("pass", "Does nothing: a placeholder", 'def todo():\n    pass\nprint(todo())'),
  ("raise", "Raises an error on purpose", 'try:\n    raise ValueError("nights must be positive")\nexcept ValueError as e:\n    print(e)'),
  ("return", "Ends a function and gives back a value", 'def area(w, h):\n    return w * h\nprint(area(3, 4))'),
  ("try", "Runs code that might fail, with except to catch it", 'try:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print("cannot divide")'),
  ("while", "Loops while a condition is True", 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1'),
  ("with", "Opens something and closes it for you at the end", 'with open("demo.txt", "w") as f:\n    f.write("saved")\nprint(f.closed)'),
  ("yield", "Gives back values one at a time, making a generator", 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\nprint(list(countdown(3)))'),
]
def E(name, desc, body, show="e", parent=None):
    catch = parent or name
    b = '\n'.join('    ' + l for l in body.split('\n'))
    shows = {"e": 'print("' + name + ':", e)', "name": 'print(type(e).__name__)'}
    out = shows.get(show, show)
    return (name, desc, 'try:\n' + b + '\nexcept ' + catch + ' as e:\n    ' + out)
EXC = [
  E("ArithmeticError", "Parent of maths errors like ZeroDivisionError", 'print(10 / 0)', "name"),
  E("AssertionError", "An assert check was False", 'assert 2 + 2 == 5, "maths is broken"'),
  E("AttributeError", "The object has no attribute or method with that name", '[1, 2].push(3)'),
  ("BaseException", "The parent of every error, even SystemExit and KeyboardInterrupt", None, "Do not catch it in normal code. Catch `Exception` or, better, a specific error."),
  ("EOFError", "input() found no more input to read", None, "Happens when a program asks for input but none can come, for example in some online runners."),
  E("Exception", "The parent of almost every error you will meet", 'int("abc")', 'print(type(e).__name__, "-", e)'),
  E("FileNotFoundError", "The file does not exist at that path", 'open("missing.csv")', 'print("FileNotFoundError:", e.filename)'),
  E("FloatingPointError", "A decimal maths problem, raised only if NumPy is told to", 'import numpy as np\nnp.seterr(all="raise")\nnp.float64(1) / 0', 'print("FloatingPointError: divide by zero")'),
  ("GeneratorExit", "Sent into a generator when it is closed", 'def gen():\n    try:\n        yield 1\n    except GeneratorExit:\n        print("generator closed")\n        raise\nit = gen()\nnext(it)\nit.close()'),
  E("ImportError", "import found the module but not the name you asked for", 'from math import sqroot', "name"),
  E("IndentationError", "The spaces at the start of a line are wrong", 'compile("if True:\\nprint(1)", "<code>", "exec")', 'print("IndentationError:", e.msg)'),
  E("IndexError", "The position is past the end of the list or string", '[10, 20, 30][5]'),
  E("KeyError", "The dictionary does not have that key", '{"Pune": 1}["Delhi"]'),
  ("KeyboardInterrupt", "You pressed Ctrl+C to stop the program", None, "`except Exception` does not catch it, so Ctrl+C can always stop a program."),
  E("LookupError", "Parent of IndexError and KeyError", '{"a": 1}["b"]', "name"),
  ("MemoryError", "The computer ran out of memory", None, "For example a list far too big to fit. Work in smaller chunks."),
  E("ModuleNotFoundError", "No module with that name is installed", 'import pandaz'),
  E("NameError", "The name was never defined (often a typo)", 'total = 5\nprint(totl)'),
  E("NotImplementedError", "A method that a child class must write itself", 'class Shape:\n    def area(self):\n        raise NotImplementedError("each shape needs its own area()")\nShape().area()'),
  E("OSError", "Parent of file and system errors", 'open("missing.csv")', "name"),
  E("OverflowError", "A number is too big to calculate", 'import math\nmath.exp(1000)'),
  ("PermissionError", "You are not allowed to open or change that file", None, "Common on Windows when the file is open in Excel. Close it and run again."),
  E("RecursionError", "A function called itself too many times", 'def f():\n    return f()\nf()', "name"),
  ("ReferenceError", "A weak reference points to an object that no longer exists", None, "Advanced and rare: only with the `weakref` module."),
  E("RuntimeError", "Something went wrong that fits no other error", 'd = {"a": 1}\nfor k in d:\n    d["b"] = 2'),
  E("StopIteration", "next() was called but the iterator has no items left", 'it = iter([1])\nnext(it)\nnext(it)', 'print("StopIteration: no items left")'),
  E("SyntaxError", "The code breaks Python's grammar rules", 'eval("print(\'hi\'")', 'print("SyntaxError:", e.msg)'),
  ("SystemError", "Something went wrong inside Python itself", None, "Very rare. It means a bug in Python or a library, not in your code."),
  E("SystemExit", "sys.exit() was called to stop the program", 'import sys\nsys.exit("bye")'),
  E("TabError", "Tabs and spaces are mixed in the indentation", 'compile("if True:\\n\\tx = 1\\n        y = 2", "<code>", "exec")', 'print("TabError:", e.msg)'),
  E("TypeError", "The operation does not work on this type", 'print("5" + 5)'),
  E("UnboundLocalError", "A local variable was used before it got a value", 'count = 0\ndef add():\n    count += 1\nadd()'),
  E("UnicodeDecodeError", "Bytes could not be turned into text", 'b"\\xff".decode("utf-8")', 'print("UnicodeDecodeError:", e.reason)'),
  E("UnicodeEncodeError", "Text could not be turned into bytes", '"₹500".encode("ascii")', 'print("UnicodeEncodeError:", e.reason)'),
  E("UnicodeError", "Parent of the text encoding errors", '"₹500".encode("ascii")', "name"),
  ("UnicodeTranslateError", "A problem while translating text characters", None, "Rare. You are much more likely to meet UnicodeDecodeError or UnicodeEncodeError."),
  E("ValueError", "The type is right but the value is not", 'int("abc")'),
  E("ZeroDivisionError", "You divided by zero", 'print(10 / 0)'),
]
'''
rep('S = [\n', pre + 'S = [\n')
# runner: subprocess in a temp folder, rows with notes
rep('''def run(code):
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf): exec(code, {})
    return buf.getvalue().rstrip('\\n')''', '''import subprocess, sys, tempfile, os
WORK = tempfile.mkdtemp()
def run(code):
    p = subprocess.run([sys.executable, '-c', code], capture_output=True, text=True, cwd=WORK, timeout=30)
    assert p.returncode == 0 and not p.stderr.strip(), (code, p.stderr)
    return p.stdout.rstrip('\\n')
def row(r):
    m, d, c = r[0], r[1], r[2]
    if c is None: return {"m": m, "d": d, "n": r[3]}
    return {"m": m, "d": d, "c": c, "o": run(c)}''')
rep('''"rows": [{"m": m, "d": d, "c": c, "o": run(c)} for m, d, c in rows]})''', '''"rows": [row(r) for r in sorted(rows, key=lambda r: r[0].lower().lstrip('_'))]})''')
rep("open('reference.js', 'w'", "open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'hub2', 'reference.js'), 'w'")
open(p, 'w', encoding='utf-8').write(s)
print('patched')
