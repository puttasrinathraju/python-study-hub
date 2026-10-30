/* ---------- Part 6 overview: Object-oriented Python ---------- */
overview({
  part: 6, title: "Part 6 overview: classes and objects", nav: "Part 6 overview", time: "25 min",
  keys: "oop class object instance init self attribute method class attribute instance attribute str repr magic dunder inheritance super override polymorphism encapsulation abstraction property classmethod staticmethod pillars",
  lead: "Object-oriented programming on one page: every word you need, how the parts of a class fit together, the four pillars, and the pairs that trip people up.",
  five: [
    "A ==class== is a blueprint. An ==object== (or instance) is one thing built from it: `s = Student(\"Asha\", 82)`.",
    "`__init__` runs when an object is created and sets up its attributes. `self` is the object itself and is the first parameter of every method.",
    "**Attributes** are an object's data (`s.name`). **Methods** are its actions (`s.report()`). Instance attributes belong to one object, class attributes are shared by all.",
    "Magic methods such as `__str__`, `__eq__` and `__len__` let your objects work with `print()`, `==` and `len()`.",
    "The four pillars: **encapsulation** (protect the data), **inheritance** (`class Child(Parent):`), **polymorphism** (same method name, different behaviour) and **abstraction** (hide the details)."
  ],
  body: [
    { t: "h", text: "Mind map of Part 6" },
    { t: "mm", title: "Part 6 at a glance", root: "Part 6: OOP", hint: "Tap a branch to open the chapter", kids: [
      { t: "Class vs object", go: "oop", k: ["class = blueprint", "object = one instance", "Student(\"Asha\", 82)"] },
      { t: "__init__ and self", go: "oop", k: ["runs on creation", "self = this object", "self.name = name"] },
      { t: "Attributes & methods", go: "oop", k: ["data: s.name", "actions: s.report()", "class vs instance attributes"] },
      { t: "Magic methods", go: "oop", k: ["__str__ for print()", "__repr__ for lists", "__eq__, __lt__, __len__"] },
      { t: "Four pillars", go: "oop", k: ["encapsulation", "inheritance + super()", "polymorphism", "abstraction"] },
      { t: "Class tools", go: "oop", k: ["@property", "@classmethod", "@staticmethod"] }
    ]},

    { t: "h", text: "Key definitions" },
    { t: "defs", items: [
      { t: "Object-oriented programming", d: "A way of organising code around **objects** that bundle data and the actions on that data together.", go: "oop" },
      { t: "Class", d: "A blueprint that describes what data each object has and what it can do.", c: R`
class Student:
    pass

s = Student()
print(type(s).__name__)`, o: R`Student`, go: "oop" },
      { t: "Object (instance)", d: "One thing made from a class. Each object is separate, even when made from the same class.", c: R`
class Student:
    pass

a = Student()
b = Student()
print(a is b, isinstance(a, Student))`, o: R`False True`, go: "oop" },
      { t: "__init__ (constructor)", d: "A special method that runs automatically every time a new object is created. It sets up the attributes.", c: R`
class Student:
    def __init__(self, name):
        self.name = name

s = Student("Asha")
print(s.name)`, o: R`Asha`, go: "oop" },
      { t: "self", d: "The object a method is working on. Python passes it in for you, so it is always the first parameter.", c: R`
class Counter:
    def __init__(self):
        self.n = 0
    def add(self):
        self.n += 1

c = Counter()
c.add()
c.add()
print(c.n)`, o: R`2`, go: "oop" },
      { t: "Attribute", d: "A piece of data stored on an object, read with a dot and **no** brackets: `s.name`.", go: "oop" },
      { t: "Method", d: "A function defined inside a class. Call it on an object **with** brackets: `s.report()`.", go: "oop" },
      { t: "Instance attribute", d: "Data that belongs to one object, set with `self.x = …`. Every object has its own copy.", go: "oop" },
      { t: "Class attribute", d: "Data written directly in the class body. It is shared by every object of that class.", c: R`
class Room:
    hotel = "Taj"
    def __init__(self, number):
        self.number = number

a, b = Room(101), Room(102)
print(a.hotel, b.hotel, a.number, b.number)`, o: R`Taj Taj 101 102`, go: "oop" },
      { t: "Magic (dunder) method", d: "A method with double underscores, like `__str__`. Python calls it for you when you use `print()`, `==`, `len()` or `+`.", c: R`
class Team:
    def __init__(self, members):
        self.members = members
    def __len__(self):
        return len(self.members)

print(len(Team(["Asha", "Ravi"])))`, o: R`2`, go: "oop" },
      { t: "Inheritance", d: "A child class gets everything from a parent class and can add or change parts: `class Child(Parent):`.", c: R`
class Animal:
    def speak(self):
        return "some sound"

class Dog(Animal):
    pass

print(Dog().speak())`, o: R`some sound`, go: "oop" },
      { t: "super()", d: "Calls the parent class's version of a method, most often `super().__init__(...)` inside the child's `__init__`.", go: "oop" },
      { t: "Method overriding", d: "A child class writes its own version of a method that the parent already has. The child's version wins.", c: R`
class Animal:
    def speak(self):
        return "some sound"

class Dog(Animal):
    def speak(self):
        return "Woof"

print(Dog().speak())`, o: R`Woof`, go: "oop" },
      { t: "Polymorphism", d: "Different classes share a method name, so one piece of code can work with all of them.", c: R`
class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Woof"

for pet in [Cat(), Dog()]:
    print(pet.speak())`, o: R`
Meow
Woof`, go: "oop" },
      { t: "Encapsulation", d: "Keeping data inside the object and changing it only through methods that check the rules. `__name` hides an attribute.", go: "oop" },
      { t: "Abstraction", d: "Hiding complicated details behind simple methods. You call `df.groupby()` without knowing the code inside it.", go: "oop" },
      { t: "@property", d: "Turns a method into something you read like an attribute, with no brackets.", c: R`
class Circle:
    def __init__(self, r):
        self.r = r
    @property
    def area(self):
        return round(3.14159 * self.r ** 2, 2)

print(Circle(2).area)`, o: R`12.57`, go: "oop" }
    ]},

    { t: "h", text: "The big comparison tables" },
    { t: "table", master: true, title: "Every part of a class", head: ["Part", "What it is", "Written as", "Belongs to", "You use it with"], rows: [
      ["Class", "The blueprint", "`class Student:`", "Your program", "`Student`"],
      ["Object", "One thing built from the class", "`s = Student(\"Asha\", 82)`", "Your program (made from the class)", "`s`"],
      ["`__init__`", "Set-up code that runs on creation", "`def __init__(self, name, marks):`", "Each new object", "Runs automatically"],
      ["Instance attribute", "Data for **one** object", "`self.name = name`", "One object", "`s.name`"],
      ["Class attribute", "Data **shared** by all objects", "`school = \"DPS\"` in the class body", "The class", "`Student.school` or `s.school`"],
      ["Instance method", "An action that uses the object's data", "`def report(self):`", "Each object", "`s.report()`"],
      ["Class method", "Works on the class, often a second way to create objects", "`@classmethod` `def from_text(cls, text):`", "The class", "`Student.from_text(\"Asha,82\")`"],
      ["Static method", "A helper that needs neither the object nor the class", "`@staticmethod` `def is_valid(m):`", "The class (it just lives there)", "`Student.is_valid(82)`"],
      ["Property", "A method you read like an attribute", "`@property` `def grade(self):`", "Each object", "`s.grade` (no brackets)"],
      ["Magic method", "Hooks your object into Python's built-ins", "`def __str__(self):`", "Each object", "`print(s)`, `len(s)`, `s == t`"]
    ]},
    { t: "table", master: true, title: "The four pillars of OOP", head: ["Pillar", "The idea in one line", "How Python does it", "Example", "Why it helps"], rows: [
      ["**Encapsulation**", "Keep data inside and change it only through methods", "`_name`, `__name`, methods, `@property`", "`acct.deposit(500)` instead of `acct.balance = -9`", "The rules cannot be broken by accident"],
      ["**Inheritance**", "A child class reuses a parent class", "`class Child(Parent):` and `super().__init__()`", "`class Student(Person):`", "Shared code is written once"],
      ["**Polymorphism**", "Same method name, different behaviour", "Each class defines its own version", "`for s in shapes: print(s.area())`", "One loop works for every type"],
      ["**Abstraction**", "Hide the details behind simple methods", "Clear, simple method names that hide the steps inside", "`df.groupby(\"city\")`", "You can use it without knowing how it works inside"]
    ]},
    { t: "table", master: true, title: "Magic methods and what triggers them", head: ["Method", "Python calls it when you write", "Return"], rows: [
      ["`__init__(self, …)`", "`Student(\"Asha\", 82)`", "Nothing (it sets up the object)"],
      ["`__str__(self)`", "`print(s)`, `str(s)`, `f\"{s}\"`", "A friendly string for users"],
      ["`__repr__(self)`", "`[s]` in a list, the notebook, `repr(s)`", "A precise string for developers"],
      ["`__eq__(self, other)`", "`s == t`", "`True` or `False`"],
      ["`__lt__(self, other)`", "`s < t`, and `sorted()` on a list of objects", "`True` or `False`"],
      ["`__len__(self)`", "`len(s)`", "A whole number"],
      ["`__add__(self, other)`", "`s + t`", "A new object"]
    ]},

    { t: "h", text: "Don't mix these up" },
    { t: "vs", title: "Class vs object", head: ["", "Class", "Object"], rows: [
      ["What it is", "The blueprint", "One thing built from the blueprint"],
      ["How many", "Defined once", "As many as you like"],
      ["Example", "`class Student:`", "`asha = Student(\"Asha\", 82)`"],
      ["Think of it as", "A cookie cutter", "Each cookie"]
    ], c: R`
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

a = Student("Asha", 82)
b = Student("Ravi", 67)
print(a.name, b.name, type(a).__name__)`, o: R`Asha Ravi Student`, rule: "Capitalised name with no brackets: the class. A variable holding `Class(...)`: an object." },
    { t: "vs", title: "Attribute vs method", head: ["", "Attribute", "Method"], rows: [
      ["Is", "Data (a noun)", "An action (a verb)"],
      ["Written as", "`self.marks = marks`", "`def passed(self):`"],
      ["Used as", "`s.marks` (no brackets)", "`s.passed()` (brackets)"]
    ], c: R`
class Student:
    def __init__(self, name, marks):
        self.name = name          # attribute
        self.marks = marks        # attribute

    def passed(self):             # method
        return self.marks >= 40

s = Student("Asha", 82)
print(s.name, s.passed())`, o: R`Asha True`, rule: "Forgot the brackets on a method? You get the method object back, not the answer." },
    { t: "vs", title: "Instance attribute vs class attribute", head: ["", "Instance attribute", "Class attribute"], rows: [
      ["Written", "Inside a method: `self.number = number`", "In the class body: `hotel = \"Taj\"`"],
      ["Belongs to", "One object", "The class, shared by every object"],
      ["Change it", "Only that object changes", "Change it on the class (`Room.hotel = ...`) and every object sees it"],
      ["Use it for", "Name, marks, balance", "Settings or counters for the whole class"]
    ], c: R`
class Room:
    hotel = "Taj"                 # class attribute: shared

    def __init__(self, number):
        self.number = number      # instance attribute: one per room

a, b = Room(101), Room(102)
Room.hotel = "Oberoi"
print(a.hotel, b.hotel, a.number, b.number)`, o: R`Oberoi Oberoi 101 102`, rule: "Never put a list in a class attribute unless every object should share it." },
    { t: "vs", title: "`__str__` vs `__repr__`", head: ["", "`__str__`", "`__repr__`"], rows: [
      ["Used by", "`print()`, `str()`, f-strings", "Lists, the notebook, `repr()`"],
      ["Written for", "Users: friendly", "Developers: precise"],
      ["If missing", "Python falls back to `__repr__`", "You see `<__main__.Item object at 0x…>`"]
    ], c: R`
class Item:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"Item: {self.name}"
    def __repr__(self):
        return f"Item({self.name!r})"

pen = Item("pen")
print(pen)
print([pen])`, o: R`
Item: pen
[Item('pen')]`, rule: "Write `__str__` for printing. Add `__repr__` when your objects will sit inside lists." },
    { t: "vs", title: "Instance method vs `@classmethod` vs `@staticmethod`", head: ["", "Instance method", "`@classmethod`", "`@staticmethod`"], rows: [
      ["First parameter", "`self` (the object)", "`cls` (the class)", "None"],
      ["Can use", "The object's data", "The class itself", "Only its own arguments"],
      ["Called as", "`s.report()`", "`Student.from_text(\"Neha,91\")`", "`Student.is_valid(91)`"],
      ["Typical use", "Everyday actions", "A second way to create objects", "A helper check that belongs with the class"]
    ], c: R`
class Student:
    def __init__(self, name, marks):
        self.name, self.marks = name, marks

    def report(self):
        return f"{self.name}: {self.marks}"

    @classmethod
    def from_text(cls, text):
        name, marks = text.split(",")
        return cls(name, int(marks))

    @staticmethod
    def is_valid(marks):
        return 0 <= marks <= 100

s = Student.from_text("Neha,91")
print(s.report(), Student.is_valid(120))`, o: R`Neha: 91 False`, rule: "Needs the object's data? Normal method. Builds objects? `@classmethod`. Needs neither? `@staticmethod`." },
    { t: "vs", title: "Overriding vs `super()`", head: ["", "Overriding", "`super()`"], rows: [
      ["Does", "The child **replaces** the parent's method", "The child **calls** the parent's method"],
      ["Written as", "A method with the same name in the child", "`super().method(...)` inside the child"],
      ["Use it for", "Behaviour that must be different", "Reusing the parent's work, then adding to it"]
    ], c: R`
class Person:
    def __init__(self, name):
        self.name = name
    def intro(self):
        return f"I am {self.name}"

class Student(Person):
    def __init__(self, name, marks):
        super().__init__(name)        # let Person set the name
        self.marks = marks
    def intro(self):                  # override
        return super().intro() + f", I scored {self.marks}"

print(Student("Asha", 82).intro())`, o: R`I am Asha, I scored 82`, rule: "Override to change behaviour. Call `super()` so you do not copy the parent's code." },
    { t: "vs", title: "`_name` vs `__name`", head: ["", "`_name` (one underscore)", "`__name` (two underscores)"], rows: [
      ["Means", "\"Internal, please do not touch\"", "\"Hidden\": Python renames it inside the class"],
      ["Enforced?", "No, it is only a habit", "Mostly: `obj.__name` fails from outside"],
      ["Reach it through", "Anything, but you should use methods", "The class's own methods or a `@property`"]
    ], c: R`
class Account:
    def __init__(self, balance):
        self._owner = "Asha"       # habit: internal
        self.__balance = balance   # hidden

    def get_balance(self):
        return self.__balance

acct = Account(500)
print(acct._owner, acct.get_balance())
try:
    print(acct.__balance)
except AttributeError:
    print("AttributeError: __balance is hidden")`, o: R`
Asha 500
AttributeError: __balance is hidden`, rule: "Protect important data with `__name` and give people methods that check the rules." },

    { t: "h", text: "Try it yourself" },
    { t: "p", b: "Build each class step by step and test it with a `print()`. Every comparison table above also has an **Edit and run this example** button." },
    { t: "prac", items: [
      { q: "Write a `Rectangle` class that stores `w` and `h` and has an `area()` method. `print(Rectangle(4, 5).area())` should print `20`.", hint: "`__init__(self, w, h)` stores `self.w` and `self.h`. `area(self)` returns `self.w * self.h`.", sol: R`
class Rectangle:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

print(Rectangle(4, 5).area())`, out: R`20`, why: "`__init__` saves the data on the object, and the method reads it back through `self`." },
      { q: "Write `BankAccount(owner, balance)` with `deposit(amount)`, `withdraw(amount)` (print `Not enough money` if it is too much) and a `__str__` that shows `Asha: ₹1500`. Then deposit 500, try to withdraw 2000, and print the account.", hint: "In `withdraw`, check `if amount > self.balance:` before subtracting. `__str__` must **return** a string.", starter: "class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n", sol: R`
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Not enough money")
        else:
            self.balance -= amount

    def __str__(self):
        return f"{self.owner}: ₹{self.balance}"

acct = BankAccount("Asha", 1000)
acct.deposit(500)
acct.withdraw(2000)
print(acct)`, out: R`
Not enough money
Asha: ₹1500`, why: "This is encapsulation: the balance only changes through methods that check the rules." },
      { q: "Make a `Shape` parent with `area()` returning 0, then `Circle(r)` and `Square(s)` children that override it. Print `[round(s.area(), 2) for s in [Circle(1), Square(3)]]` to get `[3.14, 9]`.", hint: "Each child stores its own size in `__init__` and has its own `area()`. Use `3.14159` for pi.", sol: R`
class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14159 * self.r ** 2

class Square(Shape):
    def __init__(self, s):
        self.s = s
    def area(self):
        return self.s ** 2

print([round(s.area(), 2) for s in [Circle(1), Square(3)]])`, out: R`[3.14, 9]`, why: "Inheritance gives both a shared parent, and polymorphism lets one comprehension call `area()` on each without checking its type." },
      { q: "Give `Student` a class attribute `count = 0` that goes up by 1 every time a student is created. Create three students and print `3`.", hint: "Inside `__init__`, write `Student.count += 1` (not `self.count`).", sol: R`
class Student:
    count = 0

    def __init__(self, name):
        self.name = name
        Student.count += 1

Student("Asha")
Student("Ravi")
Student("Neha")
print(Student.count)`, out: R`3`, why: "A class attribute is shared, so every new object adds to the same counter. `self.count += 1` would create a separate instance attribute instead." }
    ]}
  ],
  quiz: [
    { q: "What is `self` in a method?", o: ["The class", "The object the method was called on", "A keyword you must never change", "The parent class"], a: 1, e: "When you write `s.report()`, Python passes `s` in as `self`." },
    { q: "What does this print?", c: R`
class A:
    def __init__(self):
        self.x = 1

a = A()
b = A()
b.x = 5
print(a.x, b.x)`, o: ["`5 5`", "`1 5`", "`1 1`", "An error"], a: 1, chk: 1, e: "`self.x` is an instance attribute, so each object has its own." },
    { q: "What does this print?", c: R`
class A:
    items = []

a = A()
b = A()
a.items.append(1)
print(b.items)`, o: ["`[]`", "`[1]`", "`None`", "An error"], a: 1, chk: 1, e: "`items` is a class attribute, so both objects share the same list." },
    { q: "Which method does `print(obj)` use?", o: ["`__init__`", "`__str__`", "`__len__`", "`__eq__`"], a: 1, e: "`print()` calls `__str__`. If it is missing, Python falls back to `__repr__`." },
    { q: "What does this print?", c: R`
class P:
    def hi(self):
        return "P"

class C(P):
    pass

print(C().hi())`, o: ["`C`", "`P`", "An error", "`None`"], a: 1, chk: 1, e: "`C` inherits `hi()` from `P` because it does not define its own." },
    { q: "What does this print?", c: R`
class P:
    def hi(self):
        return "P"

class C(P):
    def hi(self):
        return "C"

print(C().hi())`, o: ["`P`", "`C`", "`PC`", "An error"], a: 1, chk: 1, e: "The child overrides the method, so its own version runs." },
    { q: "What does `super().__init__(name)` do inside a child's `__init__`?", o: ["Creates a second object", "Runs the parent's `__init__` for this object", "Deletes the parent class", "Calls the child's `__init__` again"], a: 1, e: "It lets the parent set up its part of the object, so you do not repeat that code." },
    { q: "What does this print?", c: R`
class Team:
    def __init__(self, members):
        self.members = members
    def __len__(self):
        return len(self.members)

print(len(Team(["a", "b", "c"])))`, o: ["`1`", "`3`", "An error", "`None`"], a: 1, chk: 1, e: "`len()` calls the object's `__len__` method." },
    { q: "A `Circle` and a `Square` both have `area()`, and one loop calls `area()` on each. Which pillar is that?", o: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], a: 2, e: "Polymorphism: the same method name gives the right behaviour for each type." },
    { q: "What happens here?", c: R`
class A:
    def hi():
        return 1

A().hi()`, o: ["It returns `1`", "A `TypeError`: `hi()` takes 0 arguments but 1 was given", "A `NameError`", "Nothing"], a: 1, e: "Python passes the object in automatically, so every method needs `self` as its first parameter." },
    { q: "What does this print?", c: R`
class C:
    @property
    def r(self):
        return 5

print(C().r)`, o: ["`5`", "`<bound method>`", "An error", "`None`"], a: 0, chk: 1, e: "`@property` lets you read the method like an attribute, without brackets." },
    { q: "In `asha = Student(\"Asha\", 82)`, which is the class and which is the object?", o: ["`asha` is the class, `Student` the object", "`Student` is the class, `asha` the object", "Both are classes", "Both are objects"], a: 1, e: "`Student` is the blueprint. Calling it builds the object stored in `asha`." }
  ],
  cards: [
    ["Class vs object", "A class is the blueprint. An object is one thing built from it: `s = Student(\"Asha\", 82)`."],
    ["What does `__init__` do?", "It runs automatically when an object is created and sets up the object's attributes."],
    ["What is `self`?", "The object the method is working on. It is always the first parameter of a method."],
    ["Attribute vs method", "An attribute is data, read without brackets (`s.name`). A method is an action, called with brackets (`s.report()`)."],
    ["Instance vs class attribute", "Instance attributes (`self.x`) belong to one object. Class attributes are written in the class body and shared by all objects."],
    ["`__str__` vs `__repr__`", "`__str__` is the friendly text for `print()`. `__repr__` is the precise text for lists and the notebook."],
    ["How do you inherit from a class?", "Put the parent in brackets and call its `__init__` with `super()`.", R`class Student(Person):
    def __init__(self, name, marks):
        super().__init__(name)`],
    ["What is method overriding?", "A child class defines a method with the same name as the parent's. The child's version runs."],
    ["The four pillars of OOP", "Encapsulation, inheritance, polymorphism, abstraction."],
    ["Encapsulation in Python", "Hide data with `__name` and change it only through methods or a `@property` that checks the rules."],
    ["`@classmethod` vs `@staticmethod`", "A class method gets `cls` and often builds objects. A static method gets neither `self` nor `cls`; it is a helper."],
    ["What does `@property` do?", "Lets you read a method like an attribute, without brackets: `circle.area`."]
  ]
});
