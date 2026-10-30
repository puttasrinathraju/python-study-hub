chapter({
  id: "oop", part: 6, title: "Classes and objects (OOP)", nav: "Classes & objects", time: "70 min", lvl: "Intermediate", tricky: true,
  keys: "oop object oriented class object instance init constructor self attribute method class attribute str repr magic dunder inheritance super polymorphism encapsulation private property classmethod staticmethod",
  lead: "Object-oriented programming bundles data and the functions that work on it into one unit. It is how the PDF's inventory system is built, and how libraries like pandas are designed.",
  goals: [
    "Understand the difference between a **class** and an **object**",
    "Write `__init__` and understand `self`",
    "Add attributes and methods, and know class vs instance attributes",
    "Use magic methods like `__str__`, `__len__` and `__eq__`",
    "Apply the four pillars: encapsulation, inheritance, polymorphism, abstraction"
  ],
  src: ["PDF: Python Advanced Data Types (Inventory Management System class)", "W3Schools: OOP, Classes/Objects, __init__, self, Properties, Methods, Magic Methods, Inheritance, Polymorphism, Encapsulation, Inner Classes"],
  body: [
    { t: "h", text: "Class vs object" },
    { t: "p", b: "A ==class== is a **blueprint**. An ==object== (also called an **instance**) is a real thing built from that blueprint. One class can make many objects, each with its own data." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 600 250" width="600" role="img" aria-label="One Room class blueprint creates three room objects">';
      s += '<rect x="200" y="10" width="200" height="86" rx="10" class="sv-acc" style="stroke-dasharray:6 4"/><text x="300" y="34" text-anchor="middle" class="sv-h">class Room</text>';
      s += '<text x="300" y="58" text-anchor="middle" class="sv-tm" style="font-size:13px">number, kind, rate</text><text x="300" y="80" text-anchor="middle" class="sv-tm" style="font-size:13px">book(), price(nights)</text>';
      var objs = [["r1", "101", "Deluxe", "3499"], ["r2", "102", "Suite", "6999"], ["r3", "201", "Standard", "1999"]];
      objs.forEach(function(o, i){
        var x = 20 + i * 195;
        s += '<path d="M300 96 L' + (x + 85) + ' 140" class="sv-ln" marker-end="url(#arw)"/>';
        s += '<rect x="' + x + '" y="144" width="170" height="92" rx="10" class="sv-hl"/>';
        s += '<text x="' + (x + 85) + '" y="166" text-anchor="middle" class="sv-h">' + o[0] + ' (object)</text>';
        s += '<text x="' + (x + 14) + '" y="190" class="sv-tm" style="font-size:13px">number = ' + o[1] + '</text>';
        s += '<text x="' + (x + 14) + '" y="210" class="sv-tm" style="font-size:13px">kind = "' + o[2] + '"</text>';
        s += '<text x="' + (x + 14) + '" y="230" class="sv-tm" style="font-size:13px">rate = ' + o[3] + '</text>';
      });
      return s + '</svg>';
    })(), cap: "One blueprint (dashed), three real objects. Each object has its own values but the same methods." },
    { t: "note", k: "like", b: "You have used objects all along. `\"hello\"` is an object of class `str`, and `.upper()` is one of its methods. `[1, 2]` is an object of class `list`, with methods like `.append()`. Now you will make your own classes." },
    { t: "code", c: R`
print(type("hello"))
print(type([1, 2]))

class Room:
    pass             # an empty class for now

r1 = Room()          # create an object
print(type(r1))`, o: R`
<class 'str'>
<class 'list'>
<class '__main__.Room'>` },
    { t: "h", text: "__init__ and self" },
    { t: "p", b: "`__init__` is a special method that runs **automatically** whenever you create an object. It sets up the object's starting data. `self` is the object being created or used. Python passes it in for you." },
    { t: "anim", title: "What happens when you create two objects", trace: { code: R`
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

s1 = Student("Asha", 82)
s2 = Student("Ravi", 67)
print(s1.name, s2.marks)`, steps: [
      { l: 1, v: { Student: ["class", ""] }, c: "Python reads the class definition and stores the blueprint. No student exists yet." },
      { l: 6, h: { 1: "Student {}" }, c: "`Student(\"Asha\", 82)` creates a new, empty Student object in memory (object 1) and calls `__init__` on it." },
      { l: 2, c: "Inside `__init__`, `self` **is** object 1. `name` is \"Asha\" and `marks` is 82." },
      { l: 3, h: { 1: "Student {name: \"Asha\"}" }, c: "`self.name = name` stores the name **on the object**. It becomes an attribute of object 1." },
      { l: 4, h: { 1: "Student {name: \"Asha\", marks: 82}" }, c: "Same for marks." },
      { l: 6, v: { s1: "@1" }, c: "`__init__` finishes and `s1` now points at object 1." },
      { l: 7, v: { s2: "@2" }, h: { 2: "Student {name: \"Ravi\", marks: 67}" }, c: "The same steps run again for Ravi, creating a separate object 2. Each object keeps its own data." },
      { l: 8, o: "Asha 67\n", c: "Use a dot to read an attribute: `s1.name` is \"Asha\", `s2.marks` is 67." }
    ]}},
    { t: "note", k: "key", h: "self, explained simply", b: "`self` means \"this particular object\". When you call `s1.grade()`, Python actually runs `Student.grade(s1)`, so inside the method, `self` is `s1`. It is always the first parameter of a method. You never pass it yourself." },
    { t: "h", text: "Attributes and methods" },
    { t: "p", b: "**Attributes** are the object's data (variables attached to it). **Methods** are functions defined inside the class that work on that data." },
    { t: "code", c: R`
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def grade(self):                     # a method
        if self.marks >= 75:
            return "A"
        elif self.marks >= 60:
            return "B"
        return "C"

    def add_bonus(self, points):         # a method that changes data
        self.marks += points

s1 = Student("Asha", 72)
print(s1.grade())
s1.add_bonus(5)
print(s1.marks, s1.grade())

s1.city = "Pune"                         # you can add attributes later
print(s1.city)`, o: R`
B
77 A
Pune` },
    { t: "note", k: "trap", h: "Trap! Forgetting self", b: "Every method needs `self` as its first parameter, and you must write `self.marks`, not just `marks`, to reach the object's data. Forgetting `self` in the def line gives a TypeError like \"takes 0 positional arguments but 1 was given\"." },
    { t: "h", text: "Class attributes vs instance attributes" },
    { t: "p", b: "An **instance attribute** (`self.name`) belongs to one object. A **class attribute** is written directly in the class and is **shared** by all objects. It is handy for constants and counters." },
    { t: "code", c: R`
class Student:
    school = "WsCube Tech"        # class attribute: shared
    count = 0

    def __init__(self, name):
        self.name = name          # instance attribute: one per object
        Student.count += 1

a = Student("Asha")
b = Student("Ravi")
print(a.school, b.school)
print(Student.count)`, o: R`
WsCube Tech WsCube Tech
2` },
    { t: "h", text: "Magic methods: __str__ and friends" },
    { t: "p", b: "==Magic methods== (also called **dunder** methods, for \"double underscore\") let your objects work with Python's built-in features. Without `__str__`, printing an object shows something unhelpful like `<__main__.Product object at 0x7f3a...>`." },
    { t: "code", c: R`
class Product:
    def __init__(self, name, price, qty):
        self.name = name
        self.price = price
        self.qty = qty

    def __str__(self):                    # used by print() and str()
        return f"{self.name}: Rs {self.price} x {self.qty}"

    def __repr__(self):                   # used in lists and the notebook
        return f"Product({self.name!r})"

    def __eq__(self, other):              # used by ==
        return self.name == other.name and self.price == other.price

    def __lt__(self, other):              # used by < and sorted()
        return self.price < other.price

    def __len__(self):                    # used by len()
        return self.qty

tea = Product("Tea", 20, 50)
coffee = Product("Coffee", 45, 30)
print(tea)
print([tea, coffee])
print(tea == Product("Tea", 20, 1))
print(sorted([coffee, tea]))
print(len(coffee))`, o: R`
Tea: Rs 20 x 50
[Product('Tea'), Product('Coffee')]
True
[Product('Tea'), Product('Coffee')]
30` },
    { t: "table", head: ["Magic method", "Triggered by", "Use it to"], rows: [
      ["`__init__`", "`Product(...)`", "Set up a new object"],
      ["`__str__`", "`print(obj)`, `str(obj)`", "A friendly description"],
      ["`__repr__`", "Showing obj in a list or notebook", "A precise, developer-facing description"],
      ["`__eq__`", "`a == b`", "Define when two objects are equal"],
      ["`__lt__`", "`a < b`, `sorted()`", "Make objects sortable"],
      ["`__add__`", "`a + b`", "Combine objects"],
      ["`__len__`", "`len(obj)`", "Report a size"],
      ["`__contains__`", "`x in obj`", "Membership tests"],
      ["`__call__`", "`obj()`", "Call the object like a function"]
    ]},
    { t: "h", text: "Inheritance: building on another class" },
    { t: "p", b: "==Inheritance== lets a new class (the **child**) reuse everything from an existing class (the **parent**) and add or change parts. Write the parent's name in brackets. `super()` lets the child call the parent's version of a method." },
    { t: "fig", svg: (function(){
      var s = '<svg viewBox="0 0 520 220" width="520" role="img" aria-label="Person is the parent of Student and Teacher">';
      s += '<rect x="185" y="10" width="150" height="66" rx="10" class="sv-acc"/><text x="260" y="34" text-anchor="middle" class="sv-h">Person</text><text x="260" y="58" text-anchor="middle" class="sv-tm" style="font-size:13px">name, introduce()</text>';
      s += '<path d="M230 76 L120 128" class="sv-ln" marker-end="url(#arw)"/><path d="M290 76 L400 128" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<rect x="30" y="132" width="180" height="78" rx="10" class="sv-hl"/><text x="120" y="156" text-anchor="middle" class="sv-h">Student(Person)</text><text x="120" y="180" text-anchor="middle" class="sv-tm" style="font-size:13px">+ marks</text><text x="120" y="200" text-anchor="middle" class="sv-tm" style="font-size:13px">introduce() changed</text>';
      s += '<rect x="310" y="132" width="180" height="78" rx="10" class="sv-hl"/><text x="400" y="156" text-anchor="middle" class="sv-h">Teacher(Person)</text><text x="400" y="180" text-anchor="middle" class="sv-tm" style="font-size:13px">+ subject</text><text x="400" y="200" text-anchor="middle" class="sv-tm" style="font-size:13px">introduce() changed</text>';
      return s + '</svg>';
    })(), cap: "Children get everything from the parent, then add their own parts." },
    { t: "code", c: R`
class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        return f"Hi, I am {self.name}"

class Student(Person):                    # Student inherits from Person
    def __init__(self, name, marks):
        super().__init__(name)            # let Person set the name
        self.marks = marks

    def introduce(self):                  # override: replace the parent version
        return super().introduce() + f" and I scored {self.marks}"

class Teacher(Person):
    def __init__(self, name, subject):
        super().__init__(name)
        self.subject = subject

    def introduce(self):
        return f"Hello, I teach {self.subject}"

s = Student("Asha", 82)
t = Teacher("Mr Rao", "Python")
print(s.introduce())
print(t.introduce())
print(isinstance(s, Person), isinstance(s, Teacher))`, o: R`
Hi, I am Asha and I scored 82
Hello, I teach Python
True False` },
    { t: "h", text: "Polymorphism: same method name, different behaviour" },
    { t: "p", b: "==Polymorphism== means \"many forms\". Different classes can have a method with the same name, and you can call it on any of them without checking which class it is." },
    { t: "code", c: R`
class Circle:
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(3.14159 * self.r ** 2, 2)

class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h

for shape in [Circle(2), Rectangle(3, 4)]:
    print(type(shape).__name__, shape.area())     # same call, different code`, o: R`
Circle 12.57
Rectangle 12` },
    { t: "note", k: "like", b: "`len()` is polymorphic too: `len(\"hello\")`, `len([1, 2])` and `len({\"a\": 1})` all work, even though each type counts differently." },
    { t: "h", text: "Encapsulation: protecting data" },
    { t: "p", b: "==Encapsulation== means keeping an object's data safe and only changing it through methods that check the rules. Python marks private attributes by convention: one underscore `_balance` means \"internal, please don't touch\". Two underscores (`__balance`) make Python hide the name." },
    { t: "code", c: R`
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance          # private

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount

    def withdraw(self, amount):
        if amount > self.__balance:
            print("Insufficient funds")
            return
        self.__balance -= amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Asha", 1000)
acc.deposit(500)
acc.withdraw(5000)
print(acc.get_balance())
print(acc.__balance)`, o: R`
Insufficient funds
1500
AttributeError: 'BankAccount' object has no attribute '__balance'. Did you mean: 'get_balance'?`, err: true },
    { t: "code", ttl: "@property: a method you read like an attribute", c: R`
class Room:
    def __init__(self, rate):
        self._rate = rate

    @property
    def rate(self):                 # read with room.rate (no brackets)
        return self._rate

    @rate.setter
    def rate(self, value):          # runs on room.rate = ...
        if value < 0:
            raise ValueError("Rate cannot be negative")
        self._rate = value

room = Room(3499)
room.rate = 3999
print(room.rate)
try:
    room.rate = -10
except ValueError as e:
    print(e)`, o: R`
3999
Rate cannot be negative` },
    { t: "h", text: "Class methods and static methods" },
    { t: "code", c: R`
class Booking:
    gst = 0.12

    def __init__(self, guest, amount):
        self.guest = guest
        self.amount = amount

    @classmethod
    def from_text(cls, text):            # another way to create an object
        guest, amount = text.split(",")
        return cls(guest.strip(), float(amount))

    @staticmethod
    def is_valid_amount(x):              # a plain helper, no self needed
        return x > 0

b = Booking.from_text("Asha, 4500")
print(b.guest, b.amount)
print(Booking.is_valid_amount(-5))`, o: R`
Asha 4500.0
False` },
    { t: "p", b: "A `@classmethod` gets the **class** (`cls`) instead of an object, and is often used as an alternative constructor. A `@staticmethod` gets neither. It is just a function that lives in the class because it belongs there logically. You can also put a class inside another class (an **inner class**), but you will rarely need to." },
    { t: "deck", title: "OOP in six slides", s: [
      { big: "A class bundles data and behaviour.", b: "Data = attributes (`self.name`). Behaviour = methods (`def grade(self)`). Objects are built from the class." },
      { h: "Pillar 1: Encapsulation", b: "Keep data inside the object and change it through methods that check the rules. A bank balance should only change through `deposit()` and `withdraw()`." },
      { h: "Pillar 2: Inheritance", b: "A child class reuses a parent class and adds to it. `class Student(Person):` gets everything a Person has." },
      { h: "Pillar 3: Polymorphism", b: "Different classes, same method name. `shape.area()` works for circles and rectangles. Your loop does not care which is which." },
      { h: "Pillar 4: Abstraction", b: "Hide the complicated details behind simple methods. You call `df.groupby()` in pandas without knowing the thousands of lines inside it." },
      { h: "You already use OOP every day", b: "In pandas, `df` is an object of class DataFrame. `df.head()`, `df.describe()` and `df.groupby()` are its methods, and `df.shape` is an attribute. Understanding classes makes those libraries feel much less magical." }
    ]},
    { t: "pred", chk: 1, c: R`
class Counter:
    total = 0
    def __init__(self):
        self.mine = 0
    def click(self):
        self.mine += 1
        Counter.total += 1

a = Counter()
b = Counter()
a.click(); a.click(); b.click()
print(a.mine, b.mine, Counter.total)`, o: ["`2 1 3`", "`3 3 3`", "`2 1 2`", "`1 1 3`"], a: 0, e: "`mine` is per object (a clicked twice, b once). `total` is a class attribute shared by both, so it counts all 3 clicks." },
    { t: "prac", items: [
      { q: "Create a `Rectangle` class with `width` and `height`, and methods `area()` and `perimeter()`. Test with 4 x 3.", sol: R`
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height
    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(4, 3)
print(r.area(), r.perimeter())`, out: R`12 14` },
      { q: "Create a `Cart` class that starts empty, has `add(item, price)`, a `total()` method, and a `__len__` that returns the number of items.", sol: R`
class Cart:
    def __init__(self):
        self.items = []
    def add(self, item, price):
        self.items.append((item, price))
    def total(self):
        return sum(price for _, price in self.items)
    def __len__(self):
        return len(self.items)

c = Cart()
c.add("rice", 60)
c.add("dal", 120)
print(len(c), c.total())`, out: R`2 180` },
      { q: "Make `Employee(name, salary)` with a `__str__`, then a `Manager(Employee)` that also has a `team` list and a `__str__` that adds the team size.", sol: R`
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    def __str__(self):
        return f"{self.name} earns {self.salary}"

class Manager(Employee):
    def __init__(self, name, salary, team):
        super().__init__(name, salary)
        self.team = team
    def __str__(self):
        return super().__str__() + f" and manages {len(self.team)} people"

print(Employee("Ravi", 40000))
print(Manager("Neha", 90000, ["Ravi", "Asha"]))`, out: R`
Ravi earns 40000
Neha earns 90000 and manages 2 people` },
      { q: "Add a `__lt__` to a `Product(name, price)` class so a list of products can be sorted by price. Print the names in order.", sol: R`
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    def __lt__(self, other):
        return self.price < other.price

items = [Product("Juice", 35), Product("Tea", 20), Product("Coffee", 45)]
print([p.name for p in sorted(items)])`, out: R`['Tea', 'Juice', 'Coffee']` }
    ]}
  ],
  take: [
    "A class is a blueprint, an object is one thing made from it: `s = Student(\"Asha\", 82)`.",
    "`__init__` sets up each new object. `self` is the object itself and is the first parameter of every method.",
    "Instance attributes (`self.x`) belong to one object. Class attributes are shared.",
    "`__str__` controls `print(obj)`. Other magic methods hook into `==`, `<`, `len()`, `+`.",
    "Inheritance: `class Child(Parent):` plus `super().__init__(...)`. Polymorphism: same method name on different classes.",
    "Encapsulation: protect data with `_name` / `__name` and methods or `@property`."
  ],
  quiz: [
    { q: "What is the relationship between a class and an object?", o: ["They are the same thing", "A class is a blueprint, an object is built from it", "An object is a blueprint for classes", "Classes are only for numbers"], a: 1, e: "One class can create many objects (instances)." },
    { q: "When does `__init__` run?", o: ["When you call any method", "Automatically, every time a new object is created", "Only when you call `__init__()` yourself", "When the program ends"], a: 1, e: "__init__ is the constructor. It runs on creation." },
    { q: "What is `self`?", o: ["The class name", "The object the method is working on", "A Python keyword for loops", "The parent class"], a: 1, e: "self refers to the current object. Python passes it automatically." },
    { q: "What does this print?", c: R`
class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return self.name + " says woof"

print(Dog("Moti").speak())`, o: ["`Moti says woof`", "`self says woof`", "`Dog says woof`", "An error"], a: 0, chk: 1, e: "The object stores name = \"Moti\" and speak() reads self.name." },
    { q: "Which method controls what `print(obj)` shows?", o: ["`__init__`", "`__str__`", "`__len__`", "`__print__`"], a: 1, e: "print() calls str(obj), which uses __str__." },
    { q: "What does `class Student(Person):` mean?", o: ["Student is an object of Person", "Student inherits from Person", "Person inherits from Student", "Student and Person are the same"], a: 1, e: "The class in brackets is the parent." },
    { q: "What does `super().__init__(name)` do in a child class?", o: ["Creates a new parent object", "Runs the parent class's __init__ for this object", "Deletes the parent", "Calls the child's own __init__ again"], a: 1, e: "It lets the parent set up its part of the object." },
    { q: "Two classes both have an `area()` method, and a loop calls `shape.area()` on each. What is this called?", o: ["Inheritance", "Encapsulation", "Polymorphism", "Recursion"], a: 2, e: "Same method name, different behaviour per class." },
    { q: "What does a double underscore like `self.__balance` do?", o: ["Makes it faster", "Makes the attribute private (hidden from outside access by that name)", "Makes it a class attribute", "Nothing at all"], a: 1, e: "Python hides it through name mangling, so `obj.__balance` raises AttributeError." }
  ],
  cards: [
    ["Class vs object", "A class is the blueprint. An object (instance) is one thing built from it."],
    ["What is `__init__`?", "The constructor: a method that runs automatically when an object is created, to set up its attributes."],
    ["What is `self`?", "The current object. It is the first parameter of every method. `s1.grade()` runs `Student.grade(s1)`."],
    ["Attribute vs method", "Attribute: data on the object (`self.name`). Method: a function in the class (`def grade(self):`)."],
    ["Class attribute vs instance attribute", "Class attribute: defined in the class body, shared by all objects. Instance attribute: `self.x`, one per object."],
    ["What does `__str__` do?", "Returns the text that `print(obj)` shows."],
    ["Inheritance syntax", "", R`
class Student(Person):
    def __init__(self, name, marks):
        super().__init__(name)
        self.marks = marks`],
    ["What is method overriding?", "A child class defines a method with the same name as the parent's, replacing it."],
    ["What is polymorphism?", "Different classes with the same method name, so one piece of code can work with all of them."],
    ["What is encapsulation?", "Keeping data inside the object and changing it only through methods that check the rules. `_x` means internal, `__x` is hidden."],
    ["What does `@property` do?", "Lets you read a method like an attribute (`room.rate`), and add a setter that validates new values."],
    ["The four pillars of OOP", "Encapsulation, inheritance, polymorphism, abstraction."]
  ],
  cheat: [
    ["class Room:\n    def __init__(self, rate):\n        self.rate = rate", "Define a class"],
    ["r = Room(3499)", "Create an object"],
    ["r.rate  r.book()", "Attribute / method"],
    ["def __str__(self): return ...", "What print(obj) shows"],
    ["class Suite(Room):", "Inherit"],
    ["super().__init__(rate)", "Call the parent's method"],
    ["isinstance(r, Room)", "Is r a Room (or child)?"],
    ["self.__secret", "Private attribute"],
    ["@property", "Method read like an attribute"],
    ["@classmethod / @staticmethod", "Class-level / helper methods"]
  ]
});
