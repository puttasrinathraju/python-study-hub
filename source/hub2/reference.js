/* Python reference tables. Every example was run in real Python and the output pasted in automatically. */
var REFERENCE = [
 {
  "id": "str",
  "title": "String methods",
  "intro": "Strings never change, so every method that edits text gives you a **new** string. Store it: `s = s.strip()`.",
  "rows": [
   {
    "m": "capitalize()",
    "d": "Capital first letter, the rest small",
    "c": "print(\"hELLO world\".capitalize())",
    "o": "Hello world"
   },
   {
    "m": "casefold()",
    "d": "All small letters, for comparing text",
    "c": "print(\"PYTHON\".casefold() == \"python\")",
    "o": "True"
   },
   {
    "m": "center(width, fill)",
    "d": "Centres the text in a given width",
    "c": "print(\"hi\".center(8, \"*\"))",
    "o": "***hi***"
   },
   {
    "m": "count(x)",
    "d": "How many times x appears",
    "c": "print(\"banana\".count(\"a\"))",
    "o": "3"
   },
   {
    "m": "encode(encoding)",
    "d": "Turns text into bytes, for files and the internet",
    "c": "print(\"café\".encode(\"utf-8\"))",
    "o": "b'caf\\xc3\\xa9'"
   },
   {
    "m": "endswith(x)",
    "d": "True if the text ends with x",
    "c": "print(\"report.csv\".endswith(\".csv\"))",
    "o": "True"
   },
   {
    "m": "expandtabs(n)",
    "d": "Replaces tab characters with spaces",
    "c": "print(\"a\\tb\".expandtabs(4) + \"|\")",
    "o": "a   b|"
   },
   {
    "m": "find(x)",
    "d": "Position of x, or -1 if missing",
    "c": "print(\"data\".find(\"t\"), \"data\".find(\"z\"))",
    "o": "2 -1"
   },
   {
    "m": "format(...)",
    "d": "Fills {} slots (f-strings are easier)",
    "c": "print(\"{} is {} years\".format(\"Asha\", 25))",
    "o": "Asha is 25 years"
   },
   {
    "m": "format_map(d)",
    "d": "Like format(), but fills the slots from a dict",
    "c": "print(\"{name} is {age}\".format_map({\"name\": \"Asha\", \"age\": 25}))",
    "o": "Asha is 25"
   },
   {
    "m": "index(x)",
    "d": "Position of x; ValueError if missing",
    "c": "print(\"data\".index(\"t\"))",
    "o": "2"
   },
   {
    "m": "isalnum()",
    "d": "True if only letters and digits",
    "c": "print(\"abc123\".isalnum(), \"abc 123\".isalnum())",
    "o": "True False"
   },
   {
    "m": "isalpha()",
    "d": "True if only letters",
    "c": "print(\"Python\".isalpha(), \"Py3\".isalpha())",
    "o": "True False"
   },
   {
    "m": "isascii()",
    "d": "True if every character is plain English (ASCII)",
    "c": "print(\"Pune\".isascii(), \"₹500\".isascii())",
    "o": "True False"
   },
   {
    "m": "isdecimal()",
    "d": "True if only digits like 0 to 9 (not ² or ½)",
    "c": "print(\"2024\".isdecimal(), \"²\".isdecimal())",
    "o": "True False"
   },
   {
    "m": "isdigit()",
    "d": "True if only digits",
    "c": "print(\"2024\".isdigit(), \"20.5\".isdigit())",
    "o": "True False"
   },
   {
    "m": "isidentifier()",
    "d": "True if the text could be a variable name",
    "c": "print(\"total_sales\".isidentifier(), \"2nd\".isidentifier())",
    "o": "True False"
   },
   {
    "m": "islower()",
    "d": "True if all letters are small",
    "c": "print(\"hello\".islower())",
    "o": "True"
   },
   {
    "m": "isnumeric()",
    "d": "True if only number characters, including ½ and ²",
    "c": "print(\"½\".isnumeric(), \"12.5\".isnumeric())",
    "o": "True False"
   },
   {
    "m": "isprintable()",
    "d": "True if there are no hidden characters like new lines",
    "c": "print(\"hi\".isprintable(), \"hi\\n\".isprintable())",
    "o": "True False"
   },
   {
    "m": "isspace()",
    "d": "True if only spaces, tabs or new lines",
    "c": "print(\"   \".isspace())",
    "o": "True"
   },
   {
    "m": "istitle()",
    "d": "True if Every Word Starts Capital",
    "c": "print(\"Hello World\".istitle())",
    "o": "True"
   },
   {
    "m": "isupper()",
    "d": "True if all letters are capital",
    "c": "print(\"NASA\".isupper())",
    "o": "True"
   },
   {
    "m": "join(items)",
    "d": "Glues a list of strings with this text between",
    "c": "print(\"-\".join([\"2026\", \"10\", \"28\"]))",
    "o": "2026-10-28"
   },
   {
    "m": "ljust(width, fill)",
    "d": "Pads on the right to a given width",
    "c": "print(\"hi\".ljust(5, \".\") + \"|\")",
    "o": "hi...|"
   },
   {
    "m": "lower()",
    "d": "All small letters",
    "c": "print(\"Hello\".lower())",
    "o": "hello"
   },
   {
    "m": "lstrip()",
    "d": "Removes spaces on the left only",
    "c": "print(\"[\" + \"  hi  \".lstrip() + \"]\")",
    "o": "[hi  ]"
   },
   {
    "m": "maketrans(x, y, z)",
    "d": "Builds a swap table for translate(); z lists characters to delete",
    "c": "table = str.maketrans(\"ae\", \"AE\")\nprint(\"data science\".translate(table))",
    "o": "dAtA sciEncE"
   },
   {
    "m": "partition(sep)",
    "d": "Splits once into (before, sep, after)",
    "c": "print(\"name=Asha\".partition(\"=\"))",
    "o": "('name', '=', 'Asha')"
   },
   {
    "m": "removeprefix(x)",
    "d": "Removes x from the start, if it is there",
    "c": "print(\"INV-204\".removeprefix(\"INV-\"))",
    "o": "204"
   },
   {
    "m": "removesuffix(x)",
    "d": "Removes x from the end, if it is there",
    "c": "print(\"sales.csv\".removesuffix(\".csv\"))",
    "o": "sales"
   },
   {
    "m": "replace(old, new)",
    "d": "Changes every old to new",
    "c": "print(\"1,200,000\".replace(\",\", \"\"))",
    "o": "1200000"
   },
   {
    "m": "rfind(x)",
    "d": "Like find(), but searches from the right",
    "c": "print(\"a/b/c\".rfind(\"/\"))",
    "o": "3"
   },
   {
    "m": "rindex(x)",
    "d": "Like index(), but searches from the right",
    "c": "print(\"a/b/c\".rindex(\"/\"))",
    "o": "3"
   },
   {
    "m": "rjust(width, fill)",
    "d": "Pads on the left to a given width",
    "c": "print(\"42\".rjust(5, \"0\"))",
    "o": "00042"
   },
   {
    "m": "rpartition(sep)",
    "d": "Splits once, at the last sep",
    "c": "print(\"report.final.csv\".rpartition(\".\"))",
    "o": "('report.final', '.', 'csv')"
   },
   {
    "m": "rsplit(sep, n)",
    "d": "Splits from the right, at most n times",
    "c": "print(\"a.b.c\".rsplit(\".\", 1))",
    "o": "['a.b', 'c']"
   },
   {
    "m": "rstrip()",
    "d": "Removes spaces on the right only",
    "c": "print(\"[\" + \"  hi  \".rstrip() + \"]\")",
    "o": "[  hi]"
   },
   {
    "m": "split(sep)",
    "d": "Breaks text into a list",
    "c": "print(\"Asha,82,Pune\".split(\",\"))",
    "o": "['Asha', '82', 'Pune']"
   },
   {
    "m": "splitlines()",
    "d": "Breaks text into a list of lines",
    "c": "print(\"line 1\\nline 2\".splitlines())",
    "o": "['line 1', 'line 2']"
   },
   {
    "m": "startswith(x)",
    "d": "True if the text starts with x",
    "c": "print(\"+91 98480\".startswith(\"+91\"))",
    "o": "True"
   },
   {
    "m": "strip()",
    "d": "Removes spaces at both ends",
    "c": "print(\"[\" + \"  hi  \".strip() + \"]\")",
    "o": "[hi]"
   },
   {
    "m": "swapcase()",
    "d": "Small becomes capital and capital becomes small",
    "c": "print(\"PyThOn\".swapcase())",
    "o": "pYtHoN"
   },
   {
    "m": "title()",
    "d": "Capital first letter of every word",
    "c": "print(\"asha reddy\".title())",
    "o": "Asha Reddy"
   },
   {
    "m": "translate(table)",
    "d": "Swaps or deletes characters using a maketrans() table",
    "c": "print(\"9,84,80\".translate(str.maketrans(\"\", \"\", \",\")))",
    "o": "98480"
   },
   {
    "m": "upper()",
    "d": "All capital letters",
    "c": "print(\"pune\".upper())",
    "o": "PUNE"
   },
   {
    "m": "zfill(width)",
    "d": "Pads with zeros on the left",
    "c": "print(\"7\".zfill(3))",
    "o": "007"
   }
  ]
 },
 {
  "id": "list",
  "title": "List methods",
  "intro": "Most list methods change the list **itself** and give back `None`. Do not write `a = a.sort()`.",
  "rows": [
   {
    "m": "append(x)",
    "d": "Adds one item at the end",
    "c": "a = [1, 2]\na.append(3)\nprint(a)",
    "o": "[1, 2, 3]"
   },
   {
    "m": "clear()",
    "d": "Removes every item",
    "c": "a = [1, 2, 3]\na.clear()\nprint(a)",
    "o": "[]"
   },
   {
    "m": "copy()",
    "d": "A separate copy of the list",
    "c": "a = [1, 2]\nb = a.copy()\nb.append(9)\nprint(a, b)",
    "o": "[1, 2] [1, 2, 9]"
   },
   {
    "m": "count(x)",
    "d": "How many times x appears",
    "c": "print([1, 2, 2, 3, 2].count(2))",
    "o": "3"
   },
   {
    "m": "extend(items)",
    "d": "Adds each item of another list",
    "c": "a = [1, 2]\na.extend([3, 4])\nprint(a)",
    "o": "[1, 2, 3, 4]"
   },
   {
    "m": "index(x)",
    "d": "Position of the first x; ValueError if missing",
    "c": "print([\"a\", \"b\", \"c\"].index(\"c\"))",
    "o": "2"
   },
   {
    "m": "insert(i, x)",
    "d": "Puts x at position i",
    "c": "a = [\"b\", \"c\"]\na.insert(0, \"a\")\nprint(a)",
    "o": "['a', 'b', 'c']"
   },
   {
    "m": "pop(i)",
    "d": "Removes and gives back item i (default: the last)",
    "c": "a = [10, 20, 30]\nx = a.pop()\nprint(x, a)",
    "o": "30 [10, 20]"
   },
   {
    "m": "remove(x)",
    "d": "Removes the first x; ValueError if missing",
    "c": "a = [\"tea\", \"milk\", \"tea\"]\na.remove(\"tea\")\nprint(a)",
    "o": "['milk', 'tea']"
   },
   {
    "m": "reverse()",
    "d": "Reverses the list in place",
    "c": "a = [1, 2, 3]\na.reverse()\nprint(a)",
    "o": "[3, 2, 1]"
   },
   {
    "m": "sort()",
    "d": "Sorts the list in place",
    "c": "a = [3, 1, 2]\na.sort(reverse=True)\nprint(a)",
    "o": "[3, 2, 1]"
   }
  ]
 },
 {
  "id": "tuple",
  "title": "Tuple methods",
  "intro": "Tuples cannot change, so they have only two methods.",
  "rows": [
   {
    "m": "count(x)",
    "d": "How many times x appears",
    "c": "print((1, 2, 2, 3).count(2))",
    "o": "2"
   },
   {
    "m": "index(x)",
    "d": "Position of the first x",
    "c": "print((\"a\", \"b\", \"c\").index(\"b\"))",
    "o": "1"
   }
  ]
 },
 {
  "id": "set",
  "title": "Set methods",
  "intro": "Sets keep only unique items and have no order. Operators like `|` and `&` do the same jobs as several methods.",
  "rows": [
   {
    "m": "add(x)",
    "d": "Adds one item",
    "c": "s = {1, 2}\ns.add(3)\nprint(s)",
    "o": "{1, 2, 3}"
   },
   {
    "m": "clear()",
    "d": "Removes every item",
    "c": "s = {1, 2}\ns.clear()\nprint(s)",
    "o": "set()"
   },
   {
    "m": "copy()",
    "d": "A separate copy of the set",
    "c": "s = {1, 2}\nt = s.copy()\nt.add(9)\nprint(s, t)",
    "o": "{1, 2} {1, 2, 9}"
   },
   {
    "m": "difference(t)",
    "d": "Items in s but not in t (same as s - t)",
    "c": "print({1, 2, 3}.difference({2}))",
    "o": "{1, 3}"
   },
   {
    "m": "difference_update(t)",
    "d": "Removes t's items from s itself",
    "c": "s = {1, 2, 3}\ns.difference_update({2})\nprint(s)",
    "o": "{1, 3}"
   },
   {
    "m": "discard(x)",
    "d": "Removes x; does nothing if missing",
    "c": "s = {1, 2}\ns.discard(9)\nprint(s)",
    "o": "{1, 2}"
   },
   {
    "m": "intersection(t)",
    "d": "Items in both (same as s & t)",
    "c": "print({1, 2, 3}.intersection({2, 3, 4}))",
    "o": "{2, 3}"
   },
   {
    "m": "intersection_update(t)",
    "d": "Keeps only items also in t",
    "c": "s = {1, 2, 3}\ns.intersection_update({2, 3, 4})\nprint(s)",
    "o": "{2, 3}"
   },
   {
    "m": "isdisjoint(t)",
    "d": "True if no items are shared",
    "c": "print({1, 2}.isdisjoint({3, 4}))",
    "o": "True"
   },
   {
    "m": "issubset(t)",
    "d": "True if every item is also in t (s <= t)",
    "c": "print({1, 2}.issubset({1, 2, 3}))",
    "o": "True"
   },
   {
    "m": "issuperset(t)",
    "d": "True if s contains every item of t (s >= t)",
    "c": "print({1, 2, 3}.issuperset({1, 2}))",
    "o": "True"
   },
   {
    "m": "pop()",
    "d": "Removes and gives back some item",
    "c": "s = {7}\nprint(s.pop(), s)",
    "o": "7 set()"
   },
   {
    "m": "remove(x)",
    "d": "Removes x; KeyError if missing",
    "c": "s = {1, 2}\ns.remove(2)\nprint(s)",
    "o": "{1}"
   },
   {
    "m": "symmetric_difference(t)",
    "d": "Items in one set but not both (s ^ t)",
    "c": "print({1, 2, 3}.symmetric_difference({3, 4}))",
    "o": "{1, 2, 4}"
   },
   {
    "m": "symmetric_difference_update(t)",
    "d": "Keeps only items in one set but not both (s ^= t)",
    "c": "s = {1, 2, 3}\ns.symmetric_difference_update({3, 4})\nprint(s)",
    "o": "{1, 2, 4}"
   },
   {
    "m": "union(t)",
    "d": "Everything from both (same as s | t)",
    "c": "print({1, 2}.union({2, 3}))",
    "o": "{1, 2, 3}"
   },
   {
    "m": "update(t)",
    "d": "Adds every item of t to s",
    "c": "s = {1, 2}\ns.update([2, 3, 4])\nprint(s)",
    "o": "{1, 2, 3, 4}"
   }
  ]
 },
 {
  "id": "dict",
  "title": "Dictionary methods",
  "intro": "A dictionary maps unique keys to values. `d[key]` raises KeyError for a missing key; `get()` does not.",
  "rows": [
   {
    "m": "clear()",
    "d": "Removes every pair",
    "c": "d = {\"a\": 1}\nd.clear()\nprint(d)",
    "o": "{}"
   },
   {
    "m": "copy()",
    "d": "A separate copy of the dictionary",
    "c": "d = {\"a\": 1}\ne = d.copy()\ne[\"b\"] = 2\nprint(d, e)",
    "o": "{'a': 1} {'a': 1, 'b': 2}"
   },
   {
    "m": "fromkeys(keys, v)",
    "d": "New dict with every key set to v",
    "c": "print(dict.fromkeys([\"tea\", \"coffee\"], 0))",
    "o": "{'tea': 0, 'coffee': 0}"
   },
   {
    "m": "get(key, default)",
    "d": "The value, or default if the key is missing",
    "c": "d = {\"tea\": 20}\nprint(d.get(\"tea\"), d.get(\"milk\", 0))",
    "o": "20 0"
   },
   {
    "m": "items()",
    "d": "All (key, value) pairs",
    "c": "d = {\"tea\": 20, \"coffee\": 45}\nprint(list(d.items()))",
    "o": "[('tea', 20), ('coffee', 45)]"
   },
   {
    "m": "keys()",
    "d": "All keys",
    "c": "d = {\"tea\": 20, \"coffee\": 45}\nprint(list(d.keys()))",
    "o": "['tea', 'coffee']"
   },
   {
    "m": "pop(key)",
    "d": "Removes the key and gives back its value",
    "c": "d = {\"tea\": 20, \"coffee\": 45}\nprint(d.pop(\"tea\"), d)",
    "o": "20 {'coffee': 45}"
   },
   {
    "m": "popitem()",
    "d": "Removes and gives back the last pair added",
    "c": "d = {\"tea\": 20, \"coffee\": 45}\nprint(d.popitem(), d)",
    "o": "('coffee', 45) {'tea': 20}"
   },
   {
    "m": "setdefault(key, v)",
    "d": "The value; adds key with v first if missing",
    "c": "d = {}\nd.setdefault(\"Pune\", []).append(\"Asha\")\nprint(d)",
    "o": "{'Pune': ['Asha']}"
   },
   {
    "m": "update(other)",
    "d": "Adds or overwrites pairs from another dict",
    "c": "d = {\"tea\": 20}\nd.update({\"tea\": 25, \"milk\": 15})\nprint(d)",
    "o": "{'tea': 25, 'milk': 15}"
   },
   {
    "m": "values()",
    "d": "All values",
    "c": "d = {\"tea\": 20, \"coffee\": 45}\nprint(list(d.values()))",
    "o": "[20, 45]"
   }
  ]
 },
 {
  "id": "builtins",
  "title": "Built-in functions",
  "intro": "These work without any import. The most useful ones for data work are `len`, `sum`, `min`, `max`, `sorted`, `round`, `range`, `enumerate` and `zip`.",
  "rows": [
   {
    "m": "abs(x)",
    "d": "Distance from zero",
    "c": "print(abs(-7.5))",
    "o": "7.5"
   },
   {
    "m": "aiter(x)",
    "d": "Gets an async iterator, for async for loops",
    "n": "Used only in async code (`async def`), which data analysis rarely needs."
   },
   {
    "m": "all(items)",
    "d": "True if every item is truthy",
    "c": "print(all([True, 1, \"a\"]), all([1, 0]))",
    "o": "True False"
   },
   {
    "m": "anext(it)",
    "d": "The next item from an async iterator",
    "n": "Used only in async code (`async def`), which data analysis rarely needs."
   },
   {
    "m": "any(items)",
    "d": "True if at least one item is truthy",
    "c": "print(any([0, \"\", 5]))",
    "o": "True"
   },
   {
    "m": "ascii(x)",
    "d": "Like repr(), but escapes every character that is not plain ASCII",
    "c": "print(ascii(\"café ₹\"))",
    "o": "'caf\\xe9 \\u20b9'"
   },
   {
    "m": "bin(n)",
    "d": "The number in binary, as text",
    "c": "print(bin(10))",
    "o": "0b1010"
   },
   {
    "m": "bool(x)",
    "d": "Converts to True or False",
    "c": "print(bool(0), bool(\"hi\"))",
    "o": "False True"
   },
   {
    "m": "breakpoint()",
    "d": "Pauses the program here and opens the debugger",
    "n": "Put it on a line to stop there and inspect your variables. Try it in your own Python or IDE."
   },
   {
    "m": "bytearray(x)",
    "d": "Bytes you can change",
    "c": "b = bytearray(b\"hi\")\nb[0] = 72\nprint(b)",
    "o": "bytearray(b'Hi')"
   },
   {
    "m": "bytes(x, encoding)",
    "d": "Bytes that cannot change",
    "c": "print(bytes(\"hi\", \"utf-8\"), list(b\"hi\"))",
    "o": "b'hi' [104, 105]"
   },
   {
    "m": "callable(x)",
    "d": "True if x can be called with ()",
    "c": "print(callable(len), callable(5))",
    "o": "True False"
   },
   {
    "m": "chr(n)",
    "d": "The character for a number",
    "c": "print(chr(65))",
    "o": "A"
   },
   {
    "m": "classmethod",
    "d": "Makes a method that gets the class (cls), often another way to create objects",
    "c": "class Guest:\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def from_text(cls, text):\n        return cls(text.strip().title())\nprint(Guest.from_text(\"  asha \").name)",
    "o": "Asha"
   },
   {
    "m": "compile(text, name, mode)",
    "d": "Turns text into code that eval() or exec() can run (rarely needed)",
    "c": "code = compile(\"2 + 3\", \"<text>\", \"eval\")\nprint(eval(code))",
    "o": "5"
   },
   {
    "m": "complex(re, im)",
    "d": "A complex number",
    "c": "print(complex(2, 3), (2 + 3j).real)",
    "o": "(2+3j) 2.0"
   },
   {
    "m": "delattr(obj, name)",
    "d": "Deletes an attribute by name",
    "c": "class C:\n    pass\nc = C()\nc.x = 1\ndelattr(c, \"x\")\nprint(hasattr(c, \"x\"))",
    "o": "False"
   },
   {
    "m": "dict(...)",
    "d": "Makes a dictionary",
    "c": "print(dict(a=1, b=2))",
    "o": "{'a': 1, 'b': 2}"
   },
   {
    "m": "dir(x)",
    "d": "Lists the names (methods and attributes) x has",
    "c": "print([m for m in dir(\"\") if m.startswith(\"is\")][:4])",
    "o": "['isalnum', 'isalpha', 'isascii', 'isdecimal']"
   },
   {
    "m": "divmod(a, b)",
    "d": "Whole groups and remainder together",
    "c": "print(divmod(135, 60))",
    "o": "(2, 15)"
   },
   {
    "m": "enumerate(items)",
    "d": "Pairs each item with its position",
    "c": "print(list(enumerate([\"a\", \"b\"], start=1)))",
    "o": "[(1, 'a'), (2, 'b')]"
   },
   {
    "m": "eval(text)",
    "d": "Runs a text expression and gives back the result; never use it on text from users",
    "c": "print(eval(\"2 * (3 + 4)\"))",
    "o": "14"
   },
   {
    "m": "exec(text)",
    "d": "Runs text as Python code; never use it on text from users",
    "c": "exec(\"x = 5\\nprint(x * 2)\")",
    "o": "10"
   },
   {
    "m": "filter(f, items)",
    "d": "Keeps items where f gives a truthy value",
    "c": "print(list(filter(lambda x: x > 2, [1, 2, 3, 4])))",
    "o": "[3, 4]"
   },
   {
    "m": "float(x)",
    "d": "Converts to a decimal number",
    "c": "print(float(\"3.5\"))",
    "o": "3.5"
   },
   {
    "m": "format(x, spec)",
    "d": "Formats a value like an f-string slot",
    "c": "print(format(1234.5, \",.2f\"))",
    "o": "1,234.50"
   },
   {
    "m": "frozenset(x)",
    "d": "A set that cannot change, so it can be a dict key",
    "c": "f = frozenset([1, 2, 2])\nprint(f, 2 in f)",
    "o": "frozenset({1, 2}) True"
   },
   {
    "m": "getattr(obj, name, default)",
    "d": "Gets an attribute by name, with an optional default",
    "c": "class Hotel:\n    city = \"Pune\"\nprint(getattr(Hotel, \"city\"), getattr(Hotel, \"stars\", 3))",
    "o": "Pune 3"
   },
   {
    "m": "globals()",
    "d": "A dict of every name defined at the top level",
    "c": "rate = 1800\nprint(\"rate\" in globals())",
    "o": "True"
   },
   {
    "m": "hasattr(obj, name)",
    "d": "True if the object has that attribute",
    "c": "print(hasattr(\"hi\", \"upper\"), hasattr(5, \"upper\"))",
    "o": "True False"
   },
   {
    "m": "hash(x)",
    "d": "The number sets and dict keys use; lists cannot be hashed",
    "c": "print(hash(5), hash(\"a\") == hash(\"a\"))",
    "o": "5 True"
   },
   {
    "m": "help(x)",
    "d": "Shows Python's built-in help for x",
    "n": "Try `help(str.split)` in your own Python. It prints a long page of text, so it is not shown here."
   },
   {
    "m": "hex(n)",
    "d": "The number in hexadecimal, as text",
    "c": "print(hex(255))",
    "o": "0xff"
   },
   {
    "m": "id(x)",
    "d": "A unique number for an object; the same id means the same object",
    "c": "a = [1, 2]\nb = a\nprint(id(a) == id(b))",
    "o": "True"
   },
   {
    "m": "__import__(name)",
    "d": "What import uses behind the scenes; write import instead",
    "c": "m = __import__(\"math\")\nprint(m.sqrt(16))",
    "o": "4.0"
   },
   {
    "m": "input(prompt)",
    "d": "Asks the user and gives back their text (always a str)",
    "c": "name = \"Asha\"   # name = input(\"Name: \") in a real program\nprint(name)",
    "o": "Asha"
   },
   {
    "m": "int(x)",
    "d": "Converts to a whole number (cuts decimals)",
    "c": "print(int(\"42\"), int(3.9))",
    "o": "42 3"
   },
   {
    "m": "isinstance(x, T)",
    "d": "True if x is of type T",
    "c": "print(isinstance(5, int))",
    "o": "True"
   },
   {
    "m": "issubclass(A, B)",
    "d": "True if class A is a child of class B",
    "c": "print(issubclass(bool, int), issubclass(KeyError, LookupError))",
    "o": "True True"
   },
   {
    "m": "iter(x)",
    "d": "Gets an iterator, to take items one at a time with next()",
    "c": "it = iter([\"a\", \"b\"])\nprint(next(it), next(it))",
    "o": "a b"
   },
   {
    "m": "len(x)",
    "d": "Number of items or characters",
    "c": "print(len([1, 2, 3]), len(\"data\"))",
    "o": "3 4"
   },
   {
    "m": "list(x)",
    "d": "Makes a list",
    "c": "print(list(\"abc\"))",
    "o": "['a', 'b', 'c']"
   },
   {
    "m": "locals()",
    "d": "A dict of the names inside the current function",
    "c": "def f():\n    x = 1\n    return locals()\nprint(f())",
    "o": "{'x': 1}"
   },
   {
    "m": "map(f, items)",
    "d": "Applies f to every item",
    "c": "print(list(map(str.upper, [\"a\", \"b\"])))",
    "o": "['A', 'B']"
   },
   {
    "m": "max(items)",
    "d": "Largest item",
    "c": "print(max([4, 9, 1]), max([\"kiwi\", \"apple\"], key=len))",
    "o": "9 apple"
   },
   {
    "m": "memoryview(b)",
    "d": "Looks at bytes without copying them (advanced)",
    "c": "m = memoryview(b\"abc\")\nprint(m[0], m.tobytes())",
    "o": "97 b'abc'"
   },
   {
    "m": "min(items)",
    "d": "Smallest item",
    "c": "print(min([4, 9, 1]))",
    "o": "1"
   },
   {
    "m": "next(it)",
    "d": "The next item from an iterator",
    "c": "it = iter([10, 20])\nprint(next(it), next(it))",
    "o": "10 20"
   },
   {
    "m": "object()",
    "d": "The base class of every class in Python",
    "c": "o = object()\nprint(type(o).__name__, isinstance(5, object))",
    "o": "object True"
   },
   {
    "m": "oct(n)",
    "d": "The number in octal, as text",
    "c": "print(oct(8))",
    "o": "0o10"
   },
   {
    "m": "open(file, mode)",
    "d": "Opens a file: \"r\" read, \"w\" write, \"a\" append",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"hello\")\nwith open(\"notes.txt\") as f:\n    print(f.read())",
    "o": "hello"
   },
   {
    "m": "ord(c)",
    "d": "The number for a character",
    "c": "print(ord(\"A\"))",
    "o": "65"
   },
   {
    "m": "pow(a, b)",
    "d": "a to the power b (same as a ** b)",
    "c": "print(pow(2, 10))",
    "o": "1024"
   },
   {
    "m": "print(...)",
    "d": "Shows values; sep goes between, end goes after",
    "c": "print(1, 2, 3, sep=\"-\", end=\"!\\n\")",
    "o": "1-2-3!"
   },
   {
    "m": "property",
    "d": "Lets a method be read like a value, without ()",
    "c": "class Room:\n    def __init__(self, rate):\n        self.rate = rate\n    @property\n    def with_gst(self):\n        return self.rate * 1.18\nprint(Room(1000).with_gst)",
    "o": "1180.0"
   },
   {
    "m": "range(start, stop, step)",
    "d": "A run of whole numbers; stop is excluded",
    "c": "print(list(range(2, 11, 4)))",
    "o": "[2, 6, 10]"
   },
   {
    "m": "repr(x)",
    "d": "The developer view of a value; text keeps its quotes",
    "c": "print(repr(\"hi\"), str(\"hi\"))",
    "o": "'hi' hi"
   },
   {
    "m": "reversed(items)",
    "d": "The items in reverse order",
    "c": "print(list(reversed([1, 2, 3])))",
    "o": "[3, 2, 1]"
   },
   {
    "m": "round(x, n)",
    "d": "Rounds to n decimals (.5 goes to the even number)",
    "c": "print(round(3.14159, 2), round(2.5))",
    "o": "3.14 2"
   },
   {
    "m": "set(x)",
    "d": "Makes a set (removes duplicates)",
    "c": "print(set([3, 1, 3, 2]))",
    "o": "{1, 2, 3}"
   },
   {
    "m": "setattr(obj, name, value)",
    "d": "Sets an attribute by name",
    "c": "class C:\n    pass\nc = C()\nsetattr(c, \"city\", \"Pune\")\nprint(c.city)",
    "o": "Pune"
   },
   {
    "m": "slice(start, stop, step)",
    "d": "A saved slice you can reuse",
    "c": "s = slice(1, 4)\nprint(\"python\"[s], [10, 20, 30, 40, 50][s])",
    "o": "yth [20, 30, 40]"
   },
   {
    "m": "sorted(items)",
    "d": "A new sorted list",
    "c": "print(sorted([3, 1, 2]), sorted(\"cab\"))",
    "o": "[1, 2, 3] ['a', 'b', 'c']"
   },
   {
    "m": "staticmethod",
    "d": "A plain function kept inside a class: no self, no cls",
    "c": "class Money:\n    @staticmethod\n    def rupees(n):\n        return f\"₹{n:,}\"\nprint(Money.rupees(150000))",
    "o": "₹150,000"
   },
   {
    "m": "str(x)",
    "d": "Converts to text",
    "c": "print(str(42) + \"!\")",
    "o": "42!"
   },
   {
    "m": "sum(items)",
    "d": "Adds up numbers",
    "c": "print(sum([120, 80, 50]))",
    "o": "250"
   },
   {
    "m": "super()",
    "d": "Calls the parent class, usually from __init__",
    "c": "class Room:\n    def __init__(self, rate):\n        self.rate = rate\nclass Suite(Room):\n    def __init__(self, rate):\n        super().__init__(rate)\n        self.butler = True\nprint(Suite(4800).rate)",
    "o": "4800"
   },
   {
    "m": "tuple(x)",
    "d": "Makes a tuple",
    "c": "print(tuple([1, 2]))",
    "o": "(1, 2)"
   },
   {
    "m": "type(x)",
    "d": "The type of a value",
    "c": "print(type(3.5))",
    "o": "<class 'float'>"
   },
   {
    "m": "vars(obj)",
    "d": "A dict of the object's attributes",
    "c": "class Guest:\n    def __init__(self):\n        self.name = \"Asha\"\n        self.nights = 2\nprint(vars(Guest()))",
    "o": "{'name': 'Asha', 'nights': 2}"
   },
   {
    "m": "zip(a, b)",
    "d": "Pairs items from two lists",
    "c": "print(list(zip([\"Asha\", \"Ravi\"], [82, 67])))",
    "o": "[('Asha', 82), ('Ravi', 67)]"
   }
  ]
 },
 {
  "id": "file",
  "title": "File methods",
  "intro": "Use these on the file object that `open()` gives you. Modes: `\"r\"` read (the default), `\"w\"` write (replaces the file), `\"a\"` append, `\"r+\"` read and write. Write `with open(...) as f:` so the file closes by itself. Most examples first write a small file, so every one of them runs.",
  "rows": [
   {
    "m": "close()",
    "d": "Closes the file (with does this for you)",
    "c": "f = open(\"notes.txt\", \"w\")\nf.write(\"hi\")\nf.close()\nprint(f.closed)",
    "o": "True"
   },
   {
    "m": "detach()",
    "d": "Separates the text layer from the raw binary file",
    "n": "Rarely needed. It is for advanced work with binary files."
   },
   {
    "m": "fileno()",
    "d": "The operating system's number for the open file",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(isinstance(f.fileno(), int))",
    "o": "True"
   },
   {
    "m": "flush()",
    "d": "Writes waiting text to the file now, not later",
    "c": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"saved now\")\n    f.flush()\n    with open(\"log.txt\") as g:\n        print(g.read())",
    "o": "saved now"
   },
   {
    "m": "isatty()",
    "d": "True if the file is a terminal window",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.isatty())",
    "o": "False"
   },
   {
    "m": "read(n)",
    "d": "Reads the whole file, or n characters, as one string",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.read(6))",
    "o": "line 1"
   },
   {
    "m": "readable()",
    "d": "True if you can read from the file",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    print(f.readable(), f.writable())",
    "o": "False True"
   },
   {
    "m": "readline()",
    "d": "Reads one line, including its \\n",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.readline().strip())\n    print(f.readline().strip())",
    "o": "line 1\nline 2"
   },
   {
    "m": "readlines()",
    "d": "Reads every line into a list",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.readlines())",
    "o": "['line 1\\n', 'line 2\\n', 'line 3\\n']"
   },
   {
    "m": "seek(pos)",
    "d": "Moves to a position (0 is the start)",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    f.read()\n    f.seek(0)   # back to the start\n    print(f.readline().strip())",
    "o": "line 1"
   },
   {
    "m": "seekable()",
    "d": "True if you can use seek()",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.seekable())",
    "o": "True"
   },
   {
    "m": "tell()",
    "d": "The current position in the file",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    f.readline()\n    print(f.tell())",
    "o": "7"
   },
   {
    "m": "truncate(size)",
    "d": "Cuts the file down to size characters",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\", \"r+\") as f:\n    f.truncate(6)\nwith open(\"notes.txt\") as f:\n    print(f.read())",
    "o": "line 1"
   },
   {
    "m": "writable()",
    "d": "True if you can write to the file",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"line 1\\nline 2\\nline 3\\n\")\nwith open(\"notes.txt\") as f:\n    print(f.writable())",
    "o": "False"
   },
   {
    "m": "write(text)",
    "d": "Writes text and gives back how many characters",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    n = f.write(\"hello\")\nwith open(\"notes.txt\") as f:\n    print(n, f.read())",
    "o": "5 hello"
   },
   {
    "m": "writelines(lines)",
    "d": "Writes a list of strings; it does not add new lines",
    "c": "with open(\"notes.txt\", \"w\") as f:\n    f.writelines([\"a\\n\", \"b\\n\"])\nwith open(\"notes.txt\") as f:\n    print(f.read().splitlines())",
    "o": "['a', 'b']"
   }
  ]
 },
 {
  "id": "kw",
  "title": "Keywords",
  "intro": "Keywords are Python's reserved words, so you cannot use them as names: `class = 5` is a SyntaxError. `match`, `case`, `type` and `_` are **soft** keywords: special only in certain places.",
  "rows": [
   {
    "m": "and",
    "d": "True only if both sides are true",
    "c": "age = 25\nprint(age > 18 and age < 60)",
    "o": "True"
   },
   {
    "m": "as",
    "d": "Gives something a short name",
    "c": "import math as m\nprint(m.sqrt(49))",
    "o": "7.0"
   },
   {
    "m": "assert",
    "d": "Stops with AssertionError if a check is False",
    "c": "nights = 2\nassert nights > 0, \"nights must be positive\"\nprint(\"ok\")",
    "o": "ok"
   },
   {
    "m": "async",
    "d": "Starts an asynchronous function (async def)",
    "n": "For web and network code that waits a lot. Data analysis rarely needs it."
   },
   {
    "m": "await",
    "d": "Waits for an async result inside async def",
    "n": "Only works inside an `async def` function."
   },
   {
    "m": "break",
    "d": "Leaves the loop now",
    "c": "for n in [3, 8, 12, 5]:\n    if n > 10:\n        break\n    print(n)",
    "o": "3\n8"
   },
   {
    "m": "class",
    "d": "Defines a class",
    "c": "class Guest:\n    pass\nprint(type(Guest()).__name__)",
    "o": "Guest"
   },
   {
    "m": "continue",
    "d": "Skips to the next turn of the loop",
    "c": "for n in [1, 2, 3, 4]:\n    if n % 2 == 0:\n        continue\n    print(n)",
    "o": "1\n3"
   },
   {
    "m": "def",
    "d": "Defines a function",
    "c": "def double(x):\n    return x * 2\nprint(double(21))",
    "o": "42"
   },
   {
    "m": "del",
    "d": "Deletes a name, an item or a slice",
    "c": "rooms = [\"101\", \"102\", \"103\"]\ndel rooms[0]\nprint(rooms)",
    "o": "['102', '103']"
   },
   {
    "m": "elif",
    "d": "Another condition, checked if the ones above were False",
    "c": "score = 72\nif score >= 80:\n    print(\"A\")\nelif score >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")",
    "o": "B"
   },
   {
    "m": "else",
    "d": "Runs when no condition above was True",
    "c": "stock = 0\nif stock > 0:\n    print(\"in stock\")\nelse:\n    print(\"sold out\")",
    "o": "sold out"
   },
   {
    "m": "except",
    "d": "Catches an error from the try block",
    "c": "try:\n    int(\"abc\")\nexcept ValueError:\n    print(\"not a number\")",
    "o": "not a number"
   },
   {
    "m": "False",
    "d": "The 'no' value of a bool",
    "c": "print(5 < 3, bool(0))",
    "o": "False False"
   },
   {
    "m": "finally",
    "d": "Always runs, error or not",
    "c": "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print(\"error\")\nfinally:\n    print(\"always runs\")",
    "o": "error\nalways runs"
   },
   {
    "m": "for",
    "d": "Loops over every item",
    "c": "for city in [\"Pune\", \"Goa\"]:\n    print(city)",
    "o": "Pune\nGoa"
   },
   {
    "m": "from",
    "d": "Imports one part of a module",
    "c": "from math import sqrt\nprint(sqrt(81))",
    "o": "9.0"
   },
   {
    "m": "global",
    "d": "Lets a function change a top-level variable",
    "c": "count = 0\ndef add():\n    global count\n    count += 1\nadd()\nprint(count)",
    "o": "1"
   },
   {
    "m": "if",
    "d": "Runs code only when a condition is True",
    "c": "nights = 3\nif nights > 2:\n    print(\"long stay\")",
    "o": "long stay"
   },
   {
    "m": "import",
    "d": "Loads a module",
    "c": "import math\nprint(math.pi)",
    "o": "3.141592653589793"
   },
   {
    "m": "in",
    "d": "Checks membership, or loops in for",
    "c": "print(\"a\" in \"data\", 5 in [1, 2, 3])",
    "o": "True False"
   },
   {
    "m": "is",
    "d": "True if both are the same object (not just equal)",
    "c": "a = [1]\nb = a\nc = [1]\nprint(a is b, a is c, a == c)",
    "o": "True False True"
   },
   {
    "m": "lambda",
    "d": "A small one-line function without a name",
    "c": "double = lambda x: x * 2\nprint(double(8))",
    "o": "16"
   },
   {
    "m": "match, case",
    "d": "Soft keywords: compare a value against patterns (Python 3.10+)",
    "c": "status = \"cancelled\"\nmatch status:\n    case \"confirmed\":\n        print(\"Keep\")\n    case \"cancelled\" | \"no-show\":\n        print(\"Check refund\")\n    case _:\n        print(\"Unknown\")",
    "o": "Check refund"
   },
   {
    "m": "None",
    "d": "Means 'no value'; test it with is None",
    "c": "result = print(\"hi\")\nprint(result is None)",
    "o": "hi\nTrue"
   },
   {
    "m": "nonlocal",
    "d": "Lets an inner function change the outer function's variable",
    "c": "def outer():\n    n = 0\n    def inner():\n        nonlocal n\n        n += 1\n    inner()\n    return n\nprint(outer())",
    "o": "1"
   },
   {
    "m": "not",
    "d": "Flips True and False",
    "c": "print(not True, not 0)",
    "o": "False True"
   },
   {
    "m": "or",
    "d": "True if either side is true; it stops at the first true value and gives it back",
    "c": "print(0 or \"default\", 5 > 3 or 1 / 0)",
    "o": "default True"
   },
   {
    "m": "pass",
    "d": "Does nothing: a placeholder",
    "c": "def todo():\n    pass\nprint(todo())",
    "o": "None"
   },
   {
    "m": "raise",
    "d": "Raises an error on purpose",
    "c": "try:\n    raise ValueError(\"nights must be positive\")\nexcept ValueError as e:\n    print(e)",
    "o": "nights must be positive"
   },
   {
    "m": "return",
    "d": "Ends a function and gives back a value",
    "c": "def area(w, h):\n    return w * h\nprint(area(3, 4))",
    "o": "12"
   },
   {
    "m": "True",
    "d": "The 'yes' value of a bool",
    "c": "print(5 > 3, bool(\"hi\"))",
    "o": "True True"
   },
   {
    "m": "try",
    "d": "Runs code that might fail, with except to catch it",
    "c": "try:\n    print(10 / 2)\nexcept ZeroDivisionError:\n    print(\"cannot divide\")",
    "o": "5.0"
   },
   {
    "m": "while",
    "d": "Loops while a condition is True",
    "c": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
    "o": "3\n2\n1"
   },
   {
    "m": "with",
    "d": "Opens something and closes it for you at the end",
    "c": "with open(\"demo.txt\", \"w\") as f:\n    f.write(\"saved\")\nprint(f.closed)",
    "o": "True"
   },
   {
    "m": "yield",
    "d": "Gives back values one at a time, making a generator",
    "c": "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\nprint(list(countdown(3)))",
    "o": "[3, 2, 1]"
   }
  ]
 },
 {
  "id": "exc",
  "title": "Built-in exceptions",
  "intro": "Each error's name tells you what went wrong. Catch the specific one, like `except KeyError:`. Some are parents of others: `LookupError` covers `IndexError` and `KeyError`, `ArithmeticError` covers `ZeroDivisionError` and `OverflowError`, and `OSError` covers `FileNotFoundError` and `PermissionError`. `except Exception` catches almost everything except `SystemExit` and `KeyboardInterrupt`.",
  "rows": [
   {
    "m": "ArithmeticError",
    "d": "Parent of maths errors like ZeroDivisionError",
    "c": "try:\n    print(10 / 0)\nexcept ArithmeticError as e:\n    print(type(e).__name__)",
    "o": "ZeroDivisionError"
   },
   {
    "m": "AssertionError",
    "d": "An assert check was False",
    "c": "try:\n    assert 2 + 2 == 5, \"maths is broken\"\nexcept AssertionError as e:\n    print(\"AssertionError:\", e)",
    "o": "AssertionError: maths is broken"
   },
   {
    "m": "AttributeError",
    "d": "The object has no attribute or method with that name",
    "c": "try:\n    [1, 2].push(3)\nexcept AttributeError as e:\n    print(\"AttributeError:\", e)",
    "o": "AttributeError: 'list' object has no attribute 'push'"
   },
   {
    "m": "BaseException",
    "d": "The parent of every error, even SystemExit and KeyboardInterrupt",
    "n": "Do not catch it in normal code. Catch `Exception` or, better, a specific error."
   },
   {
    "m": "EOFError",
    "d": "input() found no more input to read",
    "n": "Happens when a program asks for input but none can come, for example in some online runners."
   },
   {
    "m": "Exception",
    "d": "The parent of almost every error you will meet",
    "c": "try:\n    int(\"abc\")\nexcept Exception as e:\n    print(type(e).__name__, \"-\", e)",
    "o": "ValueError - invalid literal for int() with base 10: 'abc'"
   },
   {
    "m": "FileNotFoundError",
    "d": "The file does not exist at that path",
    "c": "try:\n    open(\"missing.csv\")\nexcept FileNotFoundError as e:\n    print(\"FileNotFoundError:\", e.filename)",
    "o": "FileNotFoundError: missing.csv"
   },
   {
    "m": "FloatingPointError",
    "d": "A decimal maths problem, raised only when NumPy is told to",
    "n": "Only after `np.seterr(all=\"raise\")`, for example on `np.float64(1) / 0`. The Python in this browser cannot raise it, so try it in your own Python."
   },
   {
    "m": "GeneratorExit",
    "d": "Sent into a generator when it is closed",
    "c": "def gen():\n    try:\n        yield 1\n    except GeneratorExit:\n        print(\"generator closed\")\n        raise\nit = gen()\nnext(it)\nit.close()",
    "o": "generator closed"
   },
   {
    "m": "ImportError",
    "d": "import found the module but not the name you asked for",
    "c": "try:\n    from math import sqroot\nexcept ImportError as e:\n    print(type(e).__name__)",
    "o": "ImportError"
   },
   {
    "m": "IndentationError",
    "d": "The spaces at the start of a line are wrong",
    "c": "try:\n    compile(\"if True:\\nprint(1)\", \"<code>\", \"exec\")\nexcept IndentationError as e:\n    print(\"IndentationError:\", e.msg)",
    "o": "IndentationError: expected an indented block after 'if' statement on line 1"
   },
   {
    "m": "IndexError",
    "d": "The position is past the end of the list or string",
    "c": "try:\n    [10, 20, 30][5]\nexcept IndexError as e:\n    print(\"IndexError:\", e)",
    "o": "IndexError: list index out of range"
   },
   {
    "m": "KeyboardInterrupt",
    "d": "You pressed Ctrl+C to stop the program",
    "n": "`except Exception` does not catch it, so Ctrl+C can always stop a program."
   },
   {
    "m": "KeyError",
    "d": "The dictionary does not have that key",
    "c": "try:\n    {\"Pune\": 1}[\"Delhi\"]\nexcept KeyError as e:\n    print(\"KeyError:\", e)",
    "o": "KeyError: 'Delhi'"
   },
   {
    "m": "LookupError",
    "d": "Parent of IndexError and KeyError",
    "c": "try:\n    {\"a\": 1}[\"b\"]\nexcept LookupError as e:\n    print(type(e).__name__)",
    "o": "KeyError"
   },
   {
    "m": "MemoryError",
    "d": "The computer ran out of memory",
    "n": "For example a list far too big to fit. Work in smaller chunks."
   },
   {
    "m": "ModuleNotFoundError",
    "d": "No module with that name is installed",
    "c": "try:\n    import pandaz\nexcept ModuleNotFoundError as e:\n    print(\"ModuleNotFoundError:\", e)",
    "o": "ModuleNotFoundError: No module named 'pandaz'"
   },
   {
    "m": "NameError",
    "d": "The name was never defined (often a typo)",
    "c": "try:\n    total = 5\n    print(totl)\nexcept NameError as e:\n    print(\"NameError:\", e)",
    "o": "NameError: name 'totl' is not defined"
   },
   {
    "m": "NotImplementedError",
    "d": "A method that a child class must write itself",
    "c": "try:\n    class Shape:\n        def area(self):\n            raise NotImplementedError(\"each shape needs its own area()\")\n    Shape().area()\nexcept NotImplementedError as e:\n    print(\"NotImplementedError:\", e)",
    "o": "NotImplementedError: each shape needs its own area()"
   },
   {
    "m": "OSError",
    "d": "Parent of file and system errors",
    "c": "try:\n    open(\"missing.csv\")\nexcept OSError as e:\n    print(type(e).__name__)",
    "o": "FileNotFoundError"
   },
   {
    "m": "OverflowError",
    "d": "A number is too big to calculate",
    "c": "try:\n    import math\n    math.exp(1000)\nexcept OverflowError as e:\n    print(\"OverflowError:\", e)",
    "o": "OverflowError: math range error"
   },
   {
    "m": "PermissionError",
    "d": "You are not allowed to open or change that file",
    "n": "Common on Windows when the file is open in Excel. Close it and run again."
   },
   {
    "m": "RecursionError",
    "d": "A function called itself too many times",
    "c": "try:\n    def f():\n        return f()\n    f()\nexcept RecursionError as e:\n    print(type(e).__name__)",
    "o": "RecursionError"
   },
   {
    "m": "ReferenceError",
    "d": "A weak reference points to an object that no longer exists",
    "n": "Advanced and rare: only with the `weakref` module."
   },
   {
    "m": "RuntimeError",
    "d": "Something went wrong that fits no other error",
    "c": "try:\n    d = {\"a\": 1}\n    for k in d:\n        d[\"b\"] = 2\nexcept RuntimeError as e:\n    print(\"RuntimeError:\", e)",
    "o": "RuntimeError: dictionary changed size during iteration"
   },
   {
    "m": "StopIteration",
    "d": "next() was called but the iterator has no items left",
    "c": "try:\n    it = iter([1])\n    next(it)\n    next(it)\nexcept StopIteration as e:\n    print(\"StopIteration: no items left\")",
    "o": "StopIteration: no items left"
   },
   {
    "m": "SyntaxError",
    "d": "The code breaks Python's grammar rules",
    "c": "try:\n    eval(\"print('hi'\")\nexcept SyntaxError as e:\n    print(\"SyntaxError:\", e.msg)",
    "o": "SyntaxError: '(' was never closed"
   },
   {
    "m": "SystemError",
    "d": "Something went wrong inside Python itself",
    "n": "Very rare. It means a bug in Python or a library, not in your code."
   },
   {
    "m": "SystemExit",
    "d": "sys.exit() was called to stop the program",
    "c": "try:\n    import sys\n    sys.exit(\"bye\")\nexcept SystemExit as e:\n    print(\"SystemExit:\", e)",
    "o": "SystemExit: bye"
   },
   {
    "m": "TabError",
    "d": "Tabs and spaces are mixed in the indentation",
    "c": "try:\n    compile(\"if True:\\n\\tx = 1\\n        y = 2\", \"<code>\", \"exec\")\nexcept TabError as e:\n    print(\"TabError:\", e.msg)",
    "o": "TabError: inconsistent use of tabs and spaces in indentation"
   },
   {
    "m": "TypeError",
    "d": "The operation does not work on this type",
    "c": "try:\n    print(\"5\" + 5)\nexcept TypeError as e:\n    print(\"TypeError:\", e)",
    "o": "TypeError: can only concatenate str (not \"int\") to str"
   },
   {
    "m": "UnboundLocalError",
    "d": "A local variable was used before it got a value",
    "c": "try:\n    count = 0\n    def add():\n        count += 1\n    add()\nexcept UnboundLocalError as e:\n    print(\"UnboundLocalError:\", e)",
    "o": "UnboundLocalError: cannot access local variable 'count' where it is not associated with a value"
   },
   {
    "m": "UnicodeDecodeError",
    "d": "Bytes could not be turned into text",
    "c": "try:\n    b\"\\xff\".decode(\"utf-8\")\nexcept UnicodeDecodeError as e:\n    print(\"UnicodeDecodeError:\", e.reason)",
    "o": "UnicodeDecodeError: invalid start byte"
   },
   {
    "m": "UnicodeEncodeError",
    "d": "Text could not be turned into bytes",
    "c": "try:\n    \"₹500\".encode(\"ascii\")\nexcept UnicodeEncodeError as e:\n    print(\"UnicodeEncodeError:\", e.reason)",
    "o": "UnicodeEncodeError: ordinal not in range(128)"
   },
   {
    "m": "UnicodeError",
    "d": "Parent of the text encoding errors",
    "c": "try:\n    \"₹500\".encode(\"ascii\")\nexcept UnicodeError as e:\n    print(type(e).__name__)",
    "o": "UnicodeEncodeError"
   },
   {
    "m": "UnicodeTranslateError",
    "d": "A problem while translating text characters",
    "n": "Rare. You are much more likely to meet UnicodeDecodeError or UnicodeEncodeError."
   },
   {
    "m": "ValueError",
    "d": "The type is right but the value is not",
    "c": "try:\n    int(\"abc\")\nexcept ValueError as e:\n    print(\"ValueError:\", e)",
    "o": "ValueError: invalid literal for int() with base 10: 'abc'"
   },
   {
    "m": "ZeroDivisionError",
    "d": "You divided by zero",
    "c": "try:\n    print(10 / 0)\nexcept ZeroDivisionError as e:\n    print(\"ZeroDivisionError:\", e)",
    "o": "ZeroDivisionError: division by zero"
   }
  ]
 },
 {
  "id": "pandas",
  "title": "Pandas: DataFrame and Series",
  "intro": "The tools from Part 8 on one table. `df` is a DataFrame (a table) and `s` a Series (one column). Most methods return a **new** result: store it, like `df = df.dropna()`.",
  "rows": [
   {
    "m": "df.describe()",
    "d": "count, mean, std, min, quartiles and max of number columns",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(round(df[\"pay\"].describe()[\"mean\"], 1))",
    "o": "58333.3"
   },
   {
    "m": "df.drop(columns=[...], index=[...])",
    "d": "Removes columns or rows by name",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(list(df.drop(columns=[\"pay\"]).columns))",
    "o": "['name', 'dept']"
   },
   {
    "m": "df.drop_duplicates(subset)",
    "d": "Removes repeated rows (or repeats in some columns)",
    "c": "import pandas as pd\nd = pd.DataFrame({\"id\": [1, 1, 2]})\nprint(len(d.drop_duplicates()))",
    "o": "2"
   },
   {
    "m": "df.duplicated()",
    "d": "True for every row that repeats an earlier one",
    "c": "import pandas as pd\nd = pd.DataFrame({\"id\": [1, 1, 2]})\nprint(d.duplicated().tolist())",
    "o": "[False, True, False]"
   },
   {
    "m": "df.groupby(col)[col2].agg(...)",
    "d": "Summaries per group: mean, sum, count, named aggregation",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.groupby(\"dept\")[\"pay\"].sum().tolist())",
    "o": "[45000, 130000]"
   },
   {
    "m": "df.head(n) / df.tail(n)",
    "d": "The first / last n rows (5 if you give no number)",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.head(1)[\"name\"].tolist(), df.tail(1)[\"name\"].tolist())",
    "o": "['Asha'] ['Neha']"
   },
   {
    "m": "df.iloc[rows, cols]",
    "d": "Picks by positions; a slice leaves out its end",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.iloc[0:1, 0].tolist())",
    "o": "['Asha']"
   },
   {
    "m": "df.info()",
    "d": "Each column's type and number of filled values",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\ndf.info(memory_usage=False)",
    "o": "<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 3 entries, 0 to 2\nData columns (total 3 columns):\n #   Column  Non-Null Count  Dtype \n---  ------  --------------  ----- \n 0   name    3 non-null      object\n 1   dept    3 non-null      object\n 2   pay     3 non-null      int64 \ndtypes: int64(1), object(2)"
   },
   {
    "m": "df.loc[rows, cols]",
    "d": "Picks by labels and names; a slice includes its end",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.loc[0:1, \"name\"].tolist())",
    "o": "['Asha', 'Ravi']"
   },
   {
    "m": "df.pivot_table(values, index, columns, aggfunc, fill_value)",
    "d": "An Excel-style pivot table",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.pivot_table(values=\"pay\", index=\"dept\", aggfunc=\"count\")[\"pay\"].tolist())",
    "o": "[1, 2]"
   },
   {
    "m": "df.query('...')",
    "d": "A filter written like a sentence; @name uses a variable",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.query(\"pay < 60000\")[\"name\"].tolist())",
    "o": "['Ravi', 'Neha']"
   },
   {
    "m": "df.reset_index(drop)",
    "d": "Turns the index into a column, or renumbers the rows 0, 1, 2",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.groupby(\"dept\")[\"pay\"].sum().reset_index().columns.tolist())",
    "o": "['dept', 'pay']"
   },
   {
    "m": "df.sample(n, random_state)",
    "d": "n random rows; random_state makes them repeat",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(len(df.sample(2, random_state=1)))",
    "o": "2"
   },
   {
    "m": "df.set_index(col)",
    "d": "Uses a column as the row labels",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.set_index(\"name\").loc[\"Ravi\", \"pay\"])",
    "o": "45000"
   },
   {
    "m": "df.shape",
    "d": "(rows, columns), a value, not a method",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.shape)",
    "o": "(3, 3)"
   },
   {
    "m": "df.sort_values(by, ascending)",
    "d": "Sorts the rows by one or more columns",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.sort_values(\"pay\", ascending=False)[\"name\"].tolist())",
    "o": "['Asha', 'Neha', 'Ravi']"
   },
   {
    "m": "df.to_csv(path, index=False)",
    "d": "Saves the table as a CSV file, without the index column",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\ndf.to_csv(\"staff.csv\", index=False)\nprint(open(\"staff.csv\").readline().strip())",
    "o": "name,dept,pay"
   },
   {
    "m": "df[condition]",
    "d": "Keeps the rows where the condition is True (& | ~ with brackets)",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df[(df[\"dept\"] == \"IT\") & (df[\"pay\"] > 60000)][\"name\"].tolist())",
    "o": "['Asha']"
   },
   {
    "m": "groupby(...).transform(func)",
    "d": "The group's result on every row",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.groupby(\"dept\")[\"pay\"].transform(\"max\").tolist())",
    "o": "[72000, 45000, 72000]"
   },
   {
    "m": "pd.concat([a, b], ignore_index=True)",
    "d": "Stacks tables on top of each other",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(len(pd.concat([df, df], ignore_index=True)))",
    "o": "6"
   },
   {
    "m": "pd.cut(s, bins, labels)",
    "d": "Puts numbers into ranges (bands)",
    "c": "import pandas as pd\nprint(pd.cut(pd.Series([15, 55]), bins=[0, 50, 100], labels=[\"Low\", \"High\"]).tolist())",
    "o": "['Low', 'High']"
   },
   {
    "m": "pd.merge(a, b, on, how)",
    "d": "Joins two tables side by side: inner, left, right or outer",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nh = pd.DataFrame({\"dept\": [\"IT\"], \"head\": [\"Om\"]})\nprint(len(pd.merge(df, h, on=\"dept\", how=\"left\")))",
    "o": "3"
   },
   {
    "m": "pd.read_csv(path)",
    "d": "Reads a CSV file into a DataFrame",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\ndf.to_csv(\"staff.csv\", index=False)\nprint(pd.read_csv(\"staff.csv\").shape)",
    "o": "(3, 3)"
   },
   {
    "m": "pd.read_excel(path, sheet_name)",
    "d": "Reads one sheet of an Excel file (needs openpyxl)",
    "n": "On your laptop: `pip install openpyxl` once. See Chapter 23."
   },
   {
    "m": "pd.to_datetime(s, format='mixed', dayfirst=True, errors='coerce')",
    "d": "Text to real dates; bad values become NaT",
    "c": "import pandas as pd\nprint(pd.to_datetime(pd.Series([\"03/04/2025\"]), dayfirst=True).dt.month.tolist())",
    "o": "[4]"
   },
   {
    "m": "pd.to_numeric(s, errors='coerce')",
    "d": "Text to numbers; bad values become NaN",
    "c": "import pandas as pd\nprint(pd.to_numeric(pd.Series([\"5\", \"x\"]), errors=\"coerce\").tolist())",
    "o": "[5.0, nan]"
   },
   {
    "m": "s.apply(func) / df.apply(func, axis=1)",
    "d": "Runs your function on every value / every row",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df[\"pay\"].apply(lambda x: x // 1000).tolist())",
    "o": "[72, 45, 58]"
   },
   {
    "m": "s.astype(type)",
    "d": "Changes the type of a column",
    "c": "import pandas as pd\nprint(pd.Series([\"5\", \"7\"]).astype(\"int64\").sum())",
    "o": "12"
   },
   {
    "m": "s.corr(other) / df.corr()",
    "d": "Correlation from -1 to 1",
    "c": "import pandas as pd\nd = pd.DataFrame({\"x\": [1, 2, 3], \"y\": [2, 4, 7]})\nprint(round(d[\"x\"].corr(d[\"y\"]), 2))",
    "o": "0.99"
   },
   {
    "m": "s.dropna() / df.dropna(subset)",
    "d": "Removes values or rows with gaps",
    "c": "import pandas as pd\ns = pd.Series([30, None, 10, 20])\nprint(s.dropna().tolist())",
    "o": "[30.0, 10.0, 20.0]"
   },
   {
    "m": "s.dt.year / .month / .day_name() / .strftime(fmt)",
    "d": "Parts of a date column",
    "c": "import pandas as pd\nd = pd.to_datetime(pd.Series([\"2025-08-15\"]))\nprint(d.dt.year[0], d.dt.day_name()[0], d.dt.strftime(\"%d-%b\")[0])",
    "o": "2025 Friday 15-Aug"
   },
   {
    "m": "s.ffill() / s.bfill()",
    "d": "Fills a gap with the value above / below it",
    "c": "import pandas as pd\ns = pd.Series([30, None, 10, 20])\nprint(s.ffill().tolist())",
    "o": "[30.0, 30.0, 10.0, 20.0]"
   },
   {
    "m": "s.fillna(value)",
    "d": "Fills the gaps with a value, mean, median or mode()[0]",
    "c": "import pandas as pd\ns = pd.Series([30, None, 10, 20])\nprint(s.fillna(s.mean()).tolist())",
    "o": "[30.0, 20.0, 10.0, 20.0]"
   },
   {
    "m": "s.idxmax() / s.idxmin()",
    "d": "The index label of the largest / smallest value",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df.loc[df[\"pay\"].idxmax(), \"name\"])",
    "o": "Asha"
   },
   {
    "m": "s.isin(list) / s.between(a, b)",
    "d": "True if the value is in the list / in the range (ends included)",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df[\"pay\"].between(45000, 60000).tolist())",
    "o": "[False, True, True]"
   },
   {
    "m": "s.isna() / s.notna()",
    "d": "True where a value is missing / filled",
    "c": "import pandas as pd\ns = pd.Series([30, None, 10, 20])\nprint(s.isna().sum(), s.notna().sum())",
    "o": "1 3"
   },
   {
    "m": "s.map(dict) / s.replace(dict)",
    "d": "Translate every value (others NaN) / fix some values",
    "c": "import pandas as pd\nc = pd.Series([\"It\", \"Sales\"])\nprint(c.map({\"It\": \"IT\"}).tolist(), c.replace({\"It\": \"IT\"}).tolist())",
    "o": "['IT', nan] ['IT', 'Sales']"
   },
   {
    "m": "s.str.contains(x) / s.str.extract(r'(...)')",
    "d": "True if x is inside / the part of the text in brackets",
    "c": "import pandas as pd\ne = pd.Series([\"asha@gmail.com\"])\nprint(e.str.contains(\"gmail\").tolist(), e.str.extract(r\"@(.+)\", expand=False).tolist())",
    "o": "[True] ['gmail.com']"
   },
   {
    "m": "s.str.replace(a, b, regex=False)",
    "d": "Swaps text in every value",
    "c": "import pandas as pd\nprint(pd.Series([\"₹1,200\"]).str.replace(\",\", \"\", regex=False).tolist())",
    "o": "['₹1200']"
   },
   {
    "m": "s.str.split(sep, expand=True)",
    "d": "Splits text into several columns",
    "c": "import pandas as pd\nprint(pd.Series([\"Asha Rao\"]).str.split(\" \", expand=True).shape)",
    "o": "(1, 2)"
   },
   {
    "m": "s.str.strip() / .lower() / .title()",
    "d": "String methods on every value of a text column",
    "c": "import pandas as pd\nprint(pd.Series([\" asha RAO \"]).str.strip().str.title().tolist())",
    "o": "['Asha Rao']"
   },
   {
    "m": "s.unique() / s.nunique()",
    "d": "The different values / how many there are",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df[\"dept\"].unique().tolist(), df[\"dept\"].nunique())",
    "o": "['IT', 'HR'] 2"
   },
   {
    "m": "s.value_counts(normalize)",
    "d": "How many of each value (or shares with normalize=True)",
    "c": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\", \"Neha\"], \"dept\": [\"IT\", \"HR\", \"IT\"], \"pay\": [72000, 45000, 58000]})\nprint(df[\"dept\"].value_counts().tolist())",
    "o": "[2, 1]"
   }
  ]
 },
 {
  "id": "mpl",
  "title": "Matplotlib: charts",
  "intro": "The chart tools from Part 9. `plt` is `matplotlib.pyplot`; `fig` is the whole picture and `ax` one chart inside it. With `plt.` you draw on the current chart; with `ax.` you pick the chart. The examples print a fact about the chart, so you can see what each tool did.",
  "rows": [
   {
    "m": "ax.bar_label(bars, fmt)",
    "d": "Writes each bar's value on top of it",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nbars = ax.bar([\"A\", \"B\"], [12, 30])\nlabels = ax.bar_label(bars)\nprint([t.get_text() for t in labels])",
    "o": "['12', '30']"
   },
   {
    "m": "ax.set_title(t) / ax.set_xlabel(t) / ax.set_ylabel(t)",
    "d": "Labels on one axes: the same names with set_",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([4, 6])\nax.set_title(\"Profit\")\nax.set_ylabel(\"₹\")\nprint(ax.get_title(), ax.get_ylabel())",
    "o": "Profit ₹"
   },
   {
    "m": "ax.set_xlim(a, b) / ax.set_xticks(pos)",
    "d": "Axis range and ticks on one axes",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 5])\nax.set_xlim(0, 1)\nax.set_xticks([0, 0.5, 1])\nprint(ax.get_xticks().tolist())",
    "o": "[0.0, 0.5, 1.0]"
   },
   {
    "m": "ax.spines[side].set_visible(False)",
    "d": "Hides a border line: top, right, bottom or left",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.spines[\"top\"].set_visible(False)\nprint(ax.spines[\"top\"].get_visible(), ax.spines[\"left\"].get_visible())",
    "o": "False True"
   },
   {
    "m": "ax.tick_params(axis, labelsize, rotation)",
    "d": "Changes the look of the ticks",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2])\nax.tick_params(axis=\"x\", labelsize=8)\nprint(ax.get_xticklabels()[0].get_fontsize())",
    "o": "8.0"
   },
   {
    "m": "ax.twinx()",
    "d": "A second y-axis on the right that shares the x-axis",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax2 = ax.twinx()\nprint(len(fig.axes))",
    "o": "2"
   },
   {
    "m": "ax.yaxis.set_major_formatter(plt.FuncFormatter(f))",
    "d": "Your own function writes every tick label",
    "c": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1000, 2500])\nax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, pos: f\"₹{v:,.0f}\"))\nprint(ax.yaxis.get_major_formatter()(2500, 0))",
    "o": "₹2,500"
   },
   {
    "m": "fig, axes = plt.subplots(rows, cols)",
    "d": "A figure with a grid of charts; axes[r, c] is one chart",
    "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 3)\nprint(axes.shape)",
    "o": "(2, 3)"
   },
   {
    "m": "fig.suptitle(t)",
    "d": "One title above all the charts of the figure",
    "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(1, 2)\nfig.suptitle(\"Dashboard\")\nprint(fig.get_suptitle())",
    "o": "Dashboard"
   },
   {
    "m": "plt.bar(x, height, bottom) / plt.barh(y, width)",
    "d": "Upright / sideways bars; bottom= stacks a second series",
    "c": "import matplotlib.pyplot as plt\nbars = plt.bar([\"UPI\", \"Cash\", \"Card\"], [55, 30, 15])\nprint(len(bars))",
    "o": "3"
   },
   {
    "m": "plt.boxplot(data)",
    "d": "A box plot: median, quartiles and outliers",
    "c": "import matplotlib.pyplot as plt\nparts = plt.boxplot([4, 5, 6, 7, 40])\nprint(parts[\"fliers\"][0].get_ydata().tolist())",
    "o": "[40]"
   },
   {
    "m": "plt.close() / plt.close('all')",
    "d": "Throws away the current figure / every figure",
    "c": "import matplotlib.pyplot as plt\nplt.figure()\nplt.figure()\nplt.close(\"all\")\nprint(len(plt.get_fignums()))",
    "o": "0"
   },
   {
    "m": "plt.figure(figsize=(w, h))",
    "d": "A new empty figure; the size is in inches",
    "c": "import matplotlib.pyplot as plt\nfig = plt.figure(figsize=(8, 4))\nprint(fig.get_size_inches().tolist())",
    "o": "[8.0, 4.0]"
   },
   {
    "m": "plt.grid(alpha, axis)",
    "d": "Light grid lines; axis='y' for flat lines only",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 2])\nplt.grid(alpha=0.3, axis=\"y\")\nprint(plt.gca().yaxis.get_gridlines()[0].get_visible())",
    "o": "True"
   },
   {
    "m": "plt.hist(data, bins, edgecolor)",
    "d": "A histogram: how many values fall in each range",
    "c": "import matplotlib.pyplot as plt\ncounts, edges, bars = plt.hist([1, 2, 2, 3, 3, 3], bins=3)\nprint(counts.tolist())",
    "o": "[1.0, 2.0, 3.0]"
   },
   {
    "m": "plt.imshow(grid, cmap) / plt.colorbar()",
    "d": "A grid of numbers as colours / the colour key",
    "c": "import matplotlib.pyplot as plt\nplt.imshow([[1, 2], [3, 4]], cmap=\"viridis\")\nplt.colorbar()\nprint(len(plt.gcf().axes))",
    "o": "2"
   },
   {
    "m": "plt.legend(loc)",
    "d": "A box naming each series that has label=",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 2], label=\"2024\")\nplt.plot([2, 3], label=\"2025\")\nleg = plt.legend(loc=\"upper left\")\nprint([t.get_text() for t in leg.get_texts()])",
    "o": "['2024', '2025']"
   },
   {
    "m": "plt.pie(values, labels, autopct)",
    "d": "A pie; autopct='%1.1f%%' writes the percents",
    "c": "import matplotlib.pyplot as plt\nwedges, names, pcts = plt.pie([3, 1], labels=[\"UPI\", \"Cash\"], autopct=\"%1.1f%%\")\nprint([p.get_text() for p in pcts])",
    "o": "['75.0%', '25.0%']"
   },
   {
    "m": "plt.plot(x, y, marker, linestyle, label)",
    "d": "A line chart; marker='o' adds dots, linestyle='--' dashes",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 6, 5], marker=\"o\", linestyle=\"--\")\nprint(len(plt.gca().lines))",
    "o": "1"
   },
   {
    "m": "plt.rcParams[key] / plt.rcdefaults()",
    "d": "The default settings for every chart / back to normal",
    "c": "import matplotlib.pyplot as plt\nplt.rcParams[\"font.size\"] = 12\nprint(plt.rcParams[\"font.size\"])\nplt.rcdefaults()\nprint(plt.rcParams[\"font.size\"])",
    "o": "12.0\n10.0"
   },
   {
    "m": "plt.savefig(path, dpi, bbox_inches='tight')",
    "d": "Saves the figure as a picture file: call it before show()",
    "c": "import matplotlib.pyplot as plt\nimport os\nplt.plot([1, 2])\nplt.savefig(\"chart.png\", dpi=100, bbox_inches=\"tight\")\nprint(os.path.exists(\"chart.png\"))",
    "o": "True"
   },
   {
    "m": "plt.scatter(x, y, c, s, cmap, alpha)",
    "d": "Dots; colour c and size s can come from the data",
    "c": "import matplotlib.pyplot as plt\ndots = plt.scatter([1, 2, 3], [3, 1, 2], s=[20, 40, 60])\nprint(len(dots.get_offsets()))",
    "o": "3"
   },
   {
    "m": "plt.show()",
    "d": "Shows the figure; call it last",
    "n": "On this site the picture appears under the output. On your laptop a window opens and the program waits until you close it."
   },
   {
    "m": "plt.style.use(name)",
    "d": "A ready-made look, like 'ggplot'; plt.style.available lists them",
    "c": "import matplotlib.pyplot as plt\nplt.style.use(\"ggplot\")\nprint(\"ggplot\" in plt.style.available)\nplt.style.use(\"default\")",
    "o": "True"
   },
   {
    "m": "plt.subplot(rows, cols, n)",
    "d": "Makes chart number n (from 1) the current one",
    "c": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2])\nplt.subplot(1, 2, 2)\nplt.bar([\"a\"], [3])\nprint(len(plt.gcf().axes))",
    "o": "2"
   },
   {
    "m": "plt.text(x, y, s) / plt.annotate(s, xy, xytext, arrowprops)",
    "d": "Writes text at a point / text with an arrow",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 3, 2])\nplt.annotate(\"Peak\", xy=(1, 3), xytext=(1.5, 3.2), arrowprops={\"arrowstyle\": \"->\"})\nprint(len(plt.gca().texts))",
    "o": "1"
   },
   {
    "m": "plt.tight_layout()",
    "d": "Spaces the charts so titles and labels do not overlap",
    "c": "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 2)\nplt.tight_layout()\nprint(len(fig.axes))",
    "o": "4"
   },
   {
    "m": "plt.title(t) / plt.xlabel(t) / plt.ylabel(t)",
    "d": "The chart title and the axis labels",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 2])\nplt.title(\"Sales\")\nplt.xlabel(\"Month\")\nprint(plt.gca().get_title(), plt.gca().get_xlabel())",
    "o": "Sales Month"
   },
   {
    "m": "plt.xlim(a, b) / plt.ylim(a, b)",
    "d": "Sets the range shown on an axis",
    "c": "import matplotlib.pyplot as plt\nplt.plot([1, 5])\nplt.ylim(0, 10)\nbottom, top = plt.ylim()\nprint(bottom, top)",
    "o": "0.0 10.0"
   },
   {
    "m": "plt.xticks(pos, labels, rotation) / plt.yticks(...)",
    "d": "Where the ticks go and the text on them",
    "c": "import matplotlib.pyplot as plt\nplt.plot([5, 7, 6])\nplt.xticks([0, 1, 2], [\"Jan\", \"Feb\", \"Mar\"], rotation=45)\nprint([t.get_text() for t in plt.gca().get_xticklabels()])",
    "o": "['Jan', 'Feb', 'Mar']"
   }
  ]
 },
 {
  "id": "sns",
  "title": "Seaborn: statistical charts",
  "intro": "The tools from Part 10. `sns` is `seaborn`. Axes-level functions (histplot, boxplot, scatterplot ...) draw one chart and accept `ax=`; figure-level ones (displot, catplot, relplot, lmplot, pairplot, jointplot) build a whole figure with panels and return a grid `g`. The examples print a fact about the chart.",
  "rows": [
   {
    "m": "g.savefig(path, dpi)",
    "d": "Saves a figure-level chart",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nimport os\ng = sns.relplot(data=tips, x=\"total_bill\", y=\"tip\")\ng.savefig(\"tips.png\", dpi=100)\nprint(os.path.exists(\"tips.png\"))",
    "o": "True"
   },
   {
    "m": "g.set_axis_labels(x, y) / g.set_titles(template) / g.figure.suptitle(t)",
    "d": "Labels and titles of a figure-level grid",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.displot(data=tips, x=\"tip\", col=\"time\")\ng.set_titles(\"{col_name}\")\nprint([ax.get_title() for ax in g.axes.flat])",
    "o": "['Lunch', 'Dinner']"
   },
   {
    "m": "sns.barplot(data, x, y, estimator, errorbar)",
    "d": "The mean of y per category, with a 95% interval",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.barplot(x=[\"a\", \"a\", \"b\"], y=[2, 4, 9], errorbar=None)\nprint([float(b.get_height()) for b in ax.patches])",
    "o": "[3.0, 9.0]"
   },
   {
    "m": "sns.boxplot(data, x, y, hue)",
    "d": "Median, quartiles, whiskers and outliers per group",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.boxplot(data=tips, x=\"time\", y=\"tip\")\nprint([t.get_text() for t in ax.get_xticklabels()])",
    "o": "['Lunch', 'Dinner']"
   },
   {
    "m": "sns.catplot(data, x, y, kind, col, row)",
    "d": "Figure-level category charts; the default kind is strip",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.catplot(data=tips, x=\"day\", y=\"tip\", kind=\"box\", col=\"sex\")\nprint(len(g.axes.flat))",
    "o": "2"
   },
   {
    "m": "sns.clustermap(table, standard_scale, cmap)",
    "d": "A heatmap that groups similar rows and columns (needs SciPy)",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.clustermap(tips[[\"total_bill\", \"tip\", \"size\"]].corr())\nprint(type(g).__name__)",
    "o": "ClusterGrid"
   },
   {
    "m": "sns.color_palette(name, n) / sns.set_palette(...)",
    "d": "A list of colours / the colours for every chart",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nprint(sns.color_palette(\"colorblind\", 3).as_hex())",
    "o": "['#0173b2', '#de8f05', '#029e73']"
   },
   {
    "m": "sns.countplot(data, x, hue, order)",
    "d": "Counts the rows of each category",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.countplot(x=[\"UPI\", \"Cash\", \"UPI\"])\nprint([int(b.get_height()) for b in ax.patches])",
    "o": "[2, 1]"
   },
   {
    "m": "sns.despine()",
    "d": "Removes the top and right border lines",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.countplot(x=[\"a\", \"b\"])\nsns.despine()\nprint(ax.spines[\"top\"].get_visible(), ax.spines[\"left\"].get_visible())",
    "o": "False True"
   },
   {
    "m": "sns.displot(data, x, kind, col, row)",
    "d": "Figure-level: histogram, kde or ecdf panels",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.displot(data=tips, x=\"tip\", col=\"time\")\nprint(type(g).__name__, len(g.axes.flat))",
    "o": "FacetGrid 2"
   },
   {
    "m": "sns.FacetGrid(data, col, row, hue) + g.map(...)",
    "d": "Your own grid of panels; map_dataframe takes named columns",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.FacetGrid(tips, col=\"time\", row=\"smoker\")\ng.map(sns.scatterplot, \"total_bill\", \"tip\")\nprint(g.axes.shape)",
    "o": "(2, 2)"
   },
   {
    "m": "sns.heatmap(table, annot, fmt, cmap, center, mask)",
    "d": "A coloured grid of a DataFrame, labels from its index and columns",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\ndf = pd.DataFrame({\"Mon\": [3, 1], \"Tue\": [2, 5]}, index=[\"Pune\", \"Goa\"])\nax = sns.heatmap(df, annot=True)\nprint([t.get_text() for t in ax.texts])",
    "o": "['3', '2', '1', '5']"
   },
   {
    "m": "sns.histplot(data, x, bins, kde, hue, multiple, stat)",
    "d": "Histogram of a number column; multiple='stack' stacks the hue groups",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.histplot(x=[1, 2, 2, 3, 3, 3], bins=3)\nprint([int(b.get_height()) for b in ax.patches])",
    "o": "[1, 2, 3]"
   },
   {
    "m": "sns.jointplot(data, x, y, kind)",
    "d": "One pair with its margins: scatter, reg, hex, kde or hist",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.jointplot(data=tips, x=\"total_bill\", y=\"tip\", kind=\"hex\")\nprint(type(g).__name__)",
    "o": "JointGrid"
   },
   {
    "m": "sns.kdeplot(data, x, hue, fill, bw_adjust, cut)",
    "d": "A smooth curve of the shape; cut=0 stops at the real data",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.kdeplot(data=tips, x=\"tip\", cut=0)\nprint(len(ax.lines))",
    "o": "1"
   },
   {
    "m": "sns.lineplot(data, x, y, hue, estimator, errorbar)",
    "d": "Mean of y per x (sorted), with a 95% band",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.lineplot(x=[1, 1, 2, 2], y=[2, 4, 6, 8], errorbar=None)\nprint(ax.lines[0].get_ydata().tolist())",
    "o": "[3.0, 7.0]"
   },
   {
    "m": "sns.lmplot(...) / sns.residplot(data, x, y)",
    "d": "Fitted lines in panels / what the line misses",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.lmplot(data=tips, x=\"total_bill\", y=\"tip\", col=\"time\")\nprint(len(g.axes.flat))",
    "o": "2"
   },
   {
    "m": "sns.load_dataset(name)",
    "d": "A practice dataset (on this site only \"tips\")",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nprint(tips.shape)",
    "o": "(244, 7)"
   },
   {
    "m": "sns.PairGrid(data).map_upper / map_lower / map_diag",
    "d": "Pick the chart for each part of a pair grid",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.PairGrid(tips, vars=[\"total_bill\", \"tip\"])\ng.map_diag(sns.histplot)\ng.map_offdiag(sns.scatterplot)\nprint(type(g).__name__)",
    "o": "PairGrid"
   },
   {
    "m": "sns.pairplot(data, vars, hue, corner)",
    "d": "A scatter for every pair, each column's shape on the diagonal",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.pairplot(tips, vars=[\"total_bill\", \"tip\"])\nprint(g.axes.shape)",
    "o": "(2, 2)"
   },
   {
    "m": "sns.pointplot(data, x, y, hue, dodge)",
    "d": "Means as dots joined by a line",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.pointplot(data=tips, x=\"day\", y=\"tip\")\nprint([t.get_text() for t in ax.get_xticklabels()])",
    "o": "['Thur', 'Fri', 'Sat', 'Sun']"
   },
   {
    "m": "sns.regplot(data, x, y, order, ci, scatter_kws, line_kws)",
    "d": "Scatter plus the fitted line or curve",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.regplot(data=tips, x=\"total_bill\", y=\"tip\", ci=None)\nprint(len(ax.lines))",
    "o": "1"
   },
   {
    "m": "sns.relplot(data, x, y, kind, col, row)",
    "d": "Figure-level scatter or line panels",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\ng = sns.relplot(data=tips, x=\"total_bill\", y=\"tip\", kind=\"scatter\", col=\"smoker\")\nprint(type(g).__name__)",
    "o": "FacetGrid"
   },
   {
    "m": "sns.rugplot(data, x) / sns.ecdfplot(data, x)",
    "d": "A tick per value / the share of rows up to each value",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.ecdfplot(data=tips, x=\"tip\")\nprint(ax.get_ylabel())",
    "o": "Proportion"
   },
   {
    "m": "sns.scatterplot(data, x, y, hue, size, style)",
    "d": "A scatter that can show 3 more columns",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"time\")\nprint(len(ax.collections[0].get_offsets()))",
    "o": "244"
   },
   {
    "m": "sns.set_context(name) / sns.plotting_context(name)",
    "d": "Text and line size: paper, notebook, talk, poster",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nprint(sns.plotting_context(\"talk\")[\"font.size\"] > sns.plotting_context(\"paper\")[\"font.size\"])",
    "o": "True"
   },
   {
    "m": "sns.set_theme(style, palette)",
    "d": "Seaborn's look for every chart after it",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nsns.set_theme(style=\"whitegrid\")\nprint(plt.rcParams[\"axes.grid\"])",
    "o": "True"
   },
   {
    "m": "sns.stripplot(..., jitter) / sns.swarmplot(...)",
    "d": "Every row as a dot / dots that never overlap",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\nax = sns.stripplot(x=[\"a\", \"a\", \"b\"], y=[1, 2, 3])\nprint(len(ax.collections))",
    "o": "2"
   },
   {
    "m": "sns.violinplot(data, x, y, hue, split, inner)",
    "d": "Box plot plus the shape; split=True with hue",
    "c": "import seaborn as sns\nimport matplotlib.pyplot as plt\ntips = sns.load_dataset(\"tips\")\nax = sns.violinplot(data=tips, x=\"day\", y=\"tip\", hue=\"sex\", split=True)\nprint([t.get_text() for t in ax.get_legend().get_texts()])",
    "o": "['Male', 'Female']"
   }
  ]
 }
];
