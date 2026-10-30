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
 }
];
