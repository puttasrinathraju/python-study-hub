/* ---------- Picture cheat sheets: one per Part overview ----------
   Pictures are AI-painted (Canva) with no text in them. All text and icons are drawn in code.
   A sheet has groups; each group has its own columns. fact = [kind, value]
   kinds: lockC lockO ord shuf yes no key warn down right (icon + value), big (code), txt (words), dash */
var SHEETS = {};

SHEETS[1] = {
  title: ["The ", ["5", "pink"], " basic ", ["data types", "lime"]], sub: "Cheat sheet",
  groups: [{ cols: ["Example", "Convert with", "x + x", "Use it for", "Changeable?"], rows: [
    { name: "int", c: "teal", img: "ov1-int", sym: "42", symName: "Whole numbers",
      facts: [["big", "42"], ["big", "int(\"42\")"], ["big", "84"], ["txt", "Counts, IDs"], ["lockC", "Immutable"]],
      cap: "An abacus: counts whole things. int(3.9) cuts to 3, it does not round.", ex: "qty = 3" },
    { name: "float", c: "green", img: "ov1-float", sym: "3.14", symName: "Decimal numbers",
      facts: [["big", "3.14"], ["big", "float(\"3.14\")"], ["big", "6.28"], ["txt", "Prices, averages"], ["lockC", "Immutable"]],
      cap: "A measuring jug: measures in decimals. 0.1 + 0.2 is not exactly 0.3.", ex: "price = 499.5" },
    { name: "str", c: "blue", img: "ov1-str", sym: "\"hi\"", symName: "Text",
      facts: [["big", "\"hi\""], ["big", "str(42)"], ["big", "\"hihi\""], ["txt", "Names, labels"], ["lockC", "Immutable"]],
      cap: "A name tag: holds text. \"25\" + 5 is a TypeError, so convert first.", ex: "name = \"Asha\"" },
    { name: "bool", c: "purple", img: "ov1-bool", sym: "True", symName: "True or False",
      facts: [["big", "True"], ["big", "bool(0)"], ["big", "2"], ["txt", "Yes/no checks"], ["lockC", "Immutable"]],
      cap: "A light switch: only on (True) or off (False). Capital T and F. True counts as 1.", ex: "is_paid = False" },
    { name: "None", c: "orange", img: "ov1-none", sym: "None", symName: "No value yet",
      facts: [["big", "None"], ["dash", "Just write None"], ["no", "TypeError"], ["txt", "Missing results"], ["lockC", "Immutable"]],
      cap: "An empty box: the place exists, but nothing is in it yet. None is not 0.", ex: "result = None" }
  ]}],
  foot: "Check any value with type(x). input() always gives you a str, so convert it before doing maths."
};

SHEETS[2] = {
  title: ["The ", ["6", "pink"], " words that ", ["control your code", "lime"]], sub: "Cheat sheet",
  groups: [{ cols: ["Repeats?", "Own condition?", "What happens", "Used in", "Watch out"], rows: [
    { name: "if / else", c: "teal", img: "ov2-if", sym: "if:", symName: "Decision",
      facts: [["no", "No"], ["yes", "Yes"], ["txt", "Runs one path"], ["txt", "Anywhere"], ["warn", "First True branch wins"]],
      cap: "A road fork: you take exactly one path. Put the strictest check first.", ex: "if marks >= 90:" },
    { name: "for", c: "green", img: "ov2-for", sym: "for x in", symName: "Loop over items",
      facts: [["yes", "Yes"], ["no", "No, needs items"], ["txt", "One round per item"], ["txt", "Anywhere"], ["warn", "range() stop is excluded"]],
      cap: "A conveyor belt: every item comes past once, then it stops by itself.", ex: "for x in range(1, 11):" },
    { name: "while", c: "blue", img: "ov2-while", sym: "while:", symName: "Loop until",
      facts: [["yes", "Yes"], ["yes", "Yes"], ["txt", "Repeats while True"], ["txt", "Anywhere"], ["warn", "Change something, or it never ends"]],
      cap: "A washing machine: keeps spinning until the clothes are clean.", ex: "while balance > 0:" },
    { name: "break", c: "purple", img: "ov2-break", sym: "break", symName: "Leave the loop",
      facts: [["no", "No"], ["no", "No"], ["txt", "Jumps out of the loop"], ["txt", "Loops only"], ["warn", "Leaves the inner loop only"]],
      cap: "An emergency exit: you found it, so leave right now.", ex: "if found: break" },
    { name: "continue", c: "orange", img: "ov2-continue", sym: "continue", symName: "Skip this round",
      facts: [["no", "No"], ["no", "No"], ["txt", "Jumps to the next round"], ["txt", "Loops only"], ["warn", "The rest of this round is skipped"]],
      cap: "A skip button: skip this song, the playlist keeps playing.", ex: "if bad: continue" },
    { name: "pass", c: "pink", img: "ov2-pass", sym: "pass", symName: "Placeholder",
      facts: [["no", "No"], ["no", "No"], ["txt", "Nothing at all"], ["txt", "Anywhere"], ["warn", "It does not skip or stop"]],
      cap: "A blank \"coming soon\" sign: holds the place until you write the real code.", ex: "def todo(): pass" }
  ]}],
  foot: "A loop's else runs only when no break happened. Falsy values: 0, \"\", [], {}, None, False."
};

SHEETS[3] = {
  title: ["The ", ["5", "pink"], " Python ", ["collections", "lime"]], sub: "Cheat sheet",
  groups: [{ cols: ["Changeable?", "Order", "Indexing", "Slicing", "Duplicates"], rows: [
    { name: "String", c: "teal", img: "ov3-str", sym: "\" \"", symName: "Quotes", empty: "\"\"",
      facts: [["lockC", "Immutable"], ["ord", "Ordered"], ["yes", "s[0]"], ["yes", "s[1:3]"], ["yes", "Allowed"]],
      cap: "A carved stone tablet: once written, it can't be changed.", ex: "s = \"Hello\"" },
    { name: "List", c: "green", img: "ov3-list", sym: "[ ]", symName: "Square brackets", empty: "[]",
      facts: [["lockO", "Mutable"], ["ord", "Ordered"], ["yes", "l[0]"], ["yes", "l[1:3]"], ["yes", "Allowed"]],
      cap: "An open backpack: add, remove or change items any time.", ex: "cart = [\"rice\", \"dal\"]" },
    { name: "Tuple", c: "blue", img: "ov3-tuple", sym: "( )", symName: "Round brackets", empty: "()",
      facts: [["lockC", "Immutable"], ["ord", "Ordered"], ["yes", "t[0]"], ["yes", "t[1:3]"], ["yes", "Allowed"]],
      cap: "A locked safe: once closed, nothing inside can change.", ex: "point = (17.38, 78.48)" },
    { name: "Set", c: "purple", img: "ov3-set", sym: "{ }", symName: "Curly braces", empty: "set()", trap: "not {}",
      facts: [["lockO", "Mutable"], ["shuf", "Unordered"], ["no", "No index"], ["no", "No slicing"], ["no", "Removed"]],
      cap: "A bag of gems: only one of each kind is allowed.", ex: "cities = {\"Pune\", \"Delhi\"}" },
    { name: "Dictionary", c: "orange", img: "ov3-dict", sym: "{k: v}", symName: "Curly braces + colons", empty: "{}",
      facts: [["lockO", "Mutable"], ["ord", "Insertion order"], ["key", "By key: d[\"tea\"]"], ["no", "No slicing"], ["key", "Keys: no\nValues: yes"]],
      cap: "Labelled lockers: find any item instantly by its key.", ex: "prices = {\"tea\": 20}" }
  ]}],
  foot: "Lock = can it change after you create it? Numbered list = keeps its order. Green tick = you can do it, red cross = you can't."
};

SHEETS[4] = {
  title: ["Functions: ", ["inputs", "pink"], " and ", ["outputs", "lime"]], sub: "Cheat sheet",
  groups: [{ cols: ["In the def line", "In the call", "Inside you get", "Optional?", "Order matters?"], rows: [
    { name: "Positional", c: "teal", img: "ov4-pos", sym: "a, b", symName: "Normal parameters",
      facts: [["big", "f(a, b)"], ["big", "f(1, 2)"], ["big", "a=1, b=2"], ["no", "Required"], ["ord", "Yes"]],
      cap: "Seats in a row: values sit down in the same order as the names.", ex: "area(5, 2)" },
    { name: "Default", c: "green", img: "ov4-def", sym: "b=10", symName: "Pre-filled value",
      facts: [["big", "f(a, b=10)"], ["big", "f(1)"], ["big", "b=10"], ["yes", "Optional"], ["ord", "Yes"]],
      cap: "A ready-made order: you get it unless you ask for something else. Defaults go last.", ex: "def greet(name=\"Guest\"):" },
    { name: "Keyword", c: "blue", img: "ov4-kw", sym: "b=2", symName: "Passed by name",
      facts: [["big", "f(a, b)"], ["big", "f(b=2, a=1)"], ["big", "a=1, b=2"], ["no", "Required"], ["shuf", "No, by name"]],
      cap: "Colour-matched lids: each value finds its own jar by name.", ex: "rect(h=2, w=5)" },
    { name: "*args", c: "purple", img: "ov4-args", sym: "*args", symName: "Any number of values",
      facts: [["big", "f(*args)"], ["big", "f(1, 2, 3)"], ["big", "(1, 2, 3)"], ["yes", "0 or more"], ["ord", "Yes"]],
      cap: "A sack: holds any number of extra values, as a tuple.", ex: "total(1, 2, 3)" },
    { name: "**kwargs", c: "orange", img: "ov4-kwargs", sym: "**kw", symName: "Any number of name=value",
      facts: [["big", "f(**kw)"], ["big", "f(x=1, y=2)"], ["big", "{'x': 1, 'y': 2}"], ["yes", "0 or more"], ["shuf", "No, by name"]],
      cap: "A spice rack: any number of labelled jars, as a dict.", ex: "profile(name=\"Asha\")" },
    { name: "return", c: "pink", img: "ov4-ret", sym: "return", symName: "The output",
      facts: [["big", "return x"], ["big", "y = f(1)"], ["txt", "x comes back into y"], ["yes", "No return gives None"], ["dash", "–"]],
      cap: "A boomerang: the value comes back to whoever called. print() only shows it.", ex: "return a + b" }
  ]}],
  foot: "Order in a def line: normal parameters, then defaults, then *args, then **kwargs."
};

SHEETS[5] = {
  title: ["Files: ", ["modes", "pink"], " and ", ["formats", "lime"]], sub: "Cheat sheet",
  groups: [
    { h: "Opening a file: open(name, mode)", cols: ["Reads?", "Writes?", "If the file exists", "If it is missing", "Old text kept?"], rows: [
      { name: "\"r\"", c: "teal", img: "ov5-r", sym: "r", symName: "Read (the default)",
        facts: [["yes", "Yes"], ["no", "No"], ["yes", "Reads it"], ["no", "FileNotFoundError"], ["yes", "Untouched"]],
        cap: "Reading glasses: you look, you don't touch.", ex: "open(\"data.txt\")" },
      { name: "\"w\"", c: "pink", img: "ov5-w", sym: "w", symName: "Write",
        facts: [["no", "No"], ["yes", "Yes"], ["warn", "Wipes it first"], ["yes", "Creates it"], ["no", "Wiped"]],
        cap: "An eraser: wipes the page clean the moment it opens.", ex: "open(\"report.txt\", \"w\")" },
      { name: "\"a\"", c: "green", img: "ov5-a", sym: "a", symName: "Append",
        facts: [["no", "No"], ["yes", "At the end"], ["yes", "Adds to the end"], ["yes", "Creates it"], ["yes", "Kept"]],
        cap: "A new page at the back of the notebook: old pages stay.", ex: "open(\"log.txt\", \"a\")" },
      { name: "\"x\"", c: "blue", img: "ov5-x", sym: "x", symName: "Create new only",
        facts: [["no", "No"], ["yes", "Yes"], ["no", "FileExistsError"], ["yes", "Creates it"], ["dash", "–"]],
        cap: "A shielded new sheet: it refuses to touch a file that already exists.", ex: "open(\"new.txt\", \"x\")" }
    ]},
    { h: "Saving data: which format?", cols: ["Readable by people?", "Holds", "Module", "Open the file with", "Best for"], rows: [
      { name: "CSV", c: "purple", img: "ov5-csv", sym: ".csv", symName: "Comma-separated",
        facts: [["yes", "Yes"], ["txt", "Rows and columns"], ["big", "csv"], ["big", "\"w\" / \"r\", newline=\"\""], ["txt", "Tables, Excel"]],
        cap: "A spreadsheet grid: one row per line, commas between the columns.", ex: "csv.DictReader(f)" },
      { name: "JSON", c: "orange", img: "ov5-json", sym: ".json", symName: "Nested text",
        facts: [["yes", "Yes"], ["txt", "Dicts and lists"], ["big", "json"], ["big", "\"w\" / \"r\""], ["txt", "APIs, settings"]],
        cap: "Boxes inside boxes: nested data any language can read. Tuples come back as lists.", ex: "json.dump(data, f)" },
      { name: "pickle", c: "yellow", img: "ov5-pkl", sym: ".pkl", symName: "Python objects",
        facts: [["no", "No, binary"], ["txt", "Any Python object"], ["big", "pickle"], ["big", "\"wb\" / \"rb\""], ["txt", "Your own saved state"]],
        cap: "A sealed pickle jar: keeps any object exactly as it was. Only open jars you made yourself.", ex: "pickle.dump(obj, f)" }
    ]}
  ],
  foot: "Always open files with: with open(name, mode) as f: so they close by themselves."
};

SHEETS[6] = {
  title: ["Class, object and the ", ["4 pillars", "lime"]], sub: "Cheat sheet",
  groups: [{ text: 1, w: [0.9, 1.15, 1.3, 0.85], cols: ["In one line", "Python", "Example", "Why it helps"], rows: [
    { name: "Class", c: "teal", img: "ov6-class", sym: "class", symName: "The blueprint",
      facts: [["txt", "The plan for one kind of thing"], ["big", "class Room:"], ["big", "Room(101)"], ["txt", "Design it once"]],
      cap: "A blueprint: it describes every house, but you can't live in it." },
    { name: "Object", c: "green", img: "ov6-obj", sym: "r = Room()", symName: "One instance",
      facts: [["txt", "One thing built from the plan"], ["big", "r = Room(101)"], ["big", "r.rate  r.book()"], ["txt", "Each one has its own data"]],
      cap: "A house built from the blueprint: build as many as you like." },
    { name: "Encapsulation", c: "blue", img: "ov6-enc", sym: "__x", symName: "Pillar 1",
      facts: [["txt", "Protect the data, change it through methods"], ["big", "self.__balance"], ["big", "acct.deposit(500)"], ["txt", "Rules can't be broken by accident"]],
      cap: "A bank vault with a teller window: you don't reach in, you ask the teller." },
    { name: "Inheritance", c: "purple", img: "ov6-inh", sym: "(Parent)", symName: "Pillar 2",
      facts: [["txt", "A child class reuses a parent class"], ["big", "class Suite(Room):"], ["big", "super().__init__()"], ["txt", "Shared code is written once"]],
      cap: "A family tree: children get the parents' features and add their own." },
    { name: "Polymorphism", c: "orange", img: "ov6-poly", sym: ".area()", symName: "Pillar 3",
      facts: [["txt", "Same method name, different behaviour"], ["big", "def area(self):"], ["big", "for s in shapes: s.area()"], ["txt", "One loop works for every type"]],
      cap: "A universal remote: one power button works on the TV, the fan and the AC." },
    { name: "Abstraction", c: "pink", img: "ov6-abs", sym: "simple()", symName: "Pillar 4",
      facts: [["txt", "Hide the details behind simple methods"], ["big", "def report(self):"], ["big", "df.groupby(\"city\")"], ["txt", "Use it without knowing the inside"]],
      cap: "A car dashboard: you press the pedal, you never touch the engine." }
  ]}],
  foot: "Attributes are data, used without brackets: r.rate. Methods are actions, used with brackets: r.book()."
};

SHEETS[7] = {
  title: ["NumPy: the ", ["3", "pink"], " big ", ["differences", "lime"]], sub: "Cheat sheet",
  groups: [
    { h: "Python list vs NumPy array", cols: ["Types inside", "x * 2", "x + x", "Printed as", "Speed"], rows: [
      { name: "List", c: "teal", img: "ov7-list", sym: "[1, 2]", symName: "Python list",
        facts: [["txt", "Any mix"], ["big", "[1, 2, 1, 2]"], ["big", "[1, 2, 1, 2]"], ["big", "[1, 2]"], ["txt", "Slow"]],
        cap: "A shopping bag: any mix of things, and you keep adding.", ex: "lst = [1, \"a\", 2.5]" },
      { name: "Array", c: "green", img: "ov7-array", sym: "np.array", symName: "NumPy array",
        facts: [["txt", "One type"], ["big", "[2 4]"], ["big", "[2 4]"], ["big", "[1 2]"], ["txt", "Fast"]],
        cap: "An egg tray: a neat grid where every slot holds the same kind of thing.", ex: "a = np.array([1, 2])" }
    ]},
    { h: "axis=0 vs axis=1, on m = [[1, 2, 3], [4, 5, 6]]", cols: ["Direction", "One result per", "m.sum(axis=…)", "How many results"], rows: [
      { name: "axis=0", c: "blue", img: "ov7-ax0", sym: "↓", symName: "Down the rows",
        facts: [["down", "Down"], ["txt", "Column"], ["big", "[5 7 9]"], ["big", "3"]],
        cap: "A lift going down: it passes every floor of one column.", ex: "sales.sum(axis=0)" },
      { name: "axis=1", c: "purple", img: "ov7-ax1", sym: "→", symName: "Across the columns",
        facts: [["right", "Across"], ["txt", "Row"], ["big", "[ 6 15]"], ["big", "2"]],
        cap: "A train going across: it passes every station in one row.", ex: "sales.sum(axis=1)" }
    ]},
    { h: "View vs copy", cols: ["Made by", "Shares memory?", "Change it and the original…", "Use it when"], rows: [
      { name: "View", c: "orange", img: "ov7-view", sym: "a[1:3]", symName: "A slice",
        facts: [["big", "a[1:3]"], ["yes", "Yes"], ["warn", "Changes too"], ["txt", "You only read it"]],
        cap: "A window: you look at the same room, so moving things moves them in the room." },
      { name: "Copy", c: "pink", img: "ov7-copy", sym: ".copy()", symName: "Separate array",
        facts: [["big", "a[1:3].copy()"], ["no", "No"], ["yes", "Stays safe"], ["txt", "You will change it"]],
        cap: "A photocopy: scribble on it all you like, the original stays clean." }
    ]}
  ],
  foot: "Filtering: a[a > 50]. Two conditions: a[(a > 10) & (a < 20)], with & | ~ and brackets."
};

SHEETS[8] = {
  title: ["The whole ", ["course", "pink"], " on ", ["one sheet", "lime"]], sub: "Revision sheet",
  groups: [{ text: 1, w: [1.3, 1, 1.1], cols: ["Key syntax", "Use it for", "Top trap"], rows: [
    { name: "Basics", c: "blue", img: "ov1-str", sym: "x = 5", symName: "Part 1",
      facts: [["big", "f\"{x:.2f}\""], ["txt", "Storing and showing values"], ["warn", "input() always gives a str"]],
      cap: "A name tag: a variable is a name stuck on a value." },
    { name: "Decide & loop", c: "teal", img: "ov2-if", sym: "if / for", symName: "Part 2",
      facts: [["big", "for x in items:"], ["txt", "Choosing and repeating"], ["warn", "range() stop is excluded"]],
      cap: "A road fork: choose a path, then loop round again when needed." },
    { name: "Collections", c: "green", img: "ov3-list", sym: "[ ] ( ) { }", symName: "Part 3",
      facts: [["big", "d.get(k, 0)"], ["txt", "Holding many values"], ["warn", "{} is a dict, not a set"]],
      cap: "A backpack: one name, many things inside. Pick the right container for the job." },
    { name: "Functions", c: "pink", img: "ov4-ret", sym: "def", symName: "Part 4",
      facts: [["big", "def f(x): return x"], ["txt", "Reusing a job"], ["warn", "print is not return"]],
      cap: "A boomerang: send values in, and the result comes back with return." },
    { name: "Real-world", c: "yellow", img: "ov5-pkl", sym: "try / with", symName: "Part 5",
      facts: [["big", "with open(\"log.txt\", \"a\") as f:"], ["txt", "Bad input, saving data"], ["warn", "\"w\" wipes the file"]],
      cap: "A sealed jar: your data stays safe after the program ends." },
    { name: "OOP", c: "purple", img: "ov6-inh", sym: "class", symName: "Part 6",
      facts: [["big", "self.x"], ["txt", "Things with data and actions"], ["warn", "Every method needs self"]],
      cap: "A family tree: classes build on each other, and every object comes from a class." },
    { name: "NumPy", c: "green", img: "ov7-array", sym: "np", symName: "Part 7",
      facts: [["big", "a.sum(axis=0)"], ["txt", "Maths on many numbers"], ["warn", "Use & on arrays, not and"]],
      cap: "An egg tray: the same kind of value in every slot, so maths on all of them is fast." },
    { name: "Projects", c: "cyan", img: "ov8-panel", sym: "while True", symName: "Part 8",
      facts: [["big", "while True: … break"], ["txt", "Whole programs with a menu"], ["warn", "Make functions work before the menu"]],
      cap: "A control panel: one button per job, plus a quit button." }
  ]}],
  foot: "Every program is the same shape: choose the data structure, write one function per job, loop over a menu, save the data."
};
