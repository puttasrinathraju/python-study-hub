# Part 6 projects (chapter 19): Parts 1-5 + classes, __init__/self, attributes and methods, class attributes,
# magic methods, inheritance and super(), polymorphism, encapsulation, properties, class and static methods.
PART = 6
TITLE = 'Part 6 projects: classes and objects'
INTRO = ('Three small systems built from classes, the way business software is organised: an inventory, bank accounts, and a hotel booking desk. '
         'Each brief names the classes and methods to write. NumPy is not needed yet.')
NOT_YET = ['NumPy (Part 7)']
def money(x): return '₹' + format(x, ',.2f')

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i):
    items = []
    for line in i:
        if line.strip().lower() == 'done': break
        n, p, q = [x.strip() for x in line.split(',')]
        items.append((n, float(p), int(q)))
    if not items: return ['No products']
    out = ['%s: %d x %s = %s' % (n, q, money(p), money(p * q)) for n, p, q in items]
    low = [n for n, p, q in items if q < 10]
    best = items[0]
    for x in items:
        if x[1] * x[2] > best[1] * best[2]: best = x
    return out + ['Products: %d' % len(items), 'Stock value: ' + money(sum(p * q for n, p, q in items)),
                  'Low stock: ' + (', '.join(low) or 'none'), 'Most valuable: %s (%s)' % (best[0], money(best[1] * best[2]))]

P1 = dict(
    id='p6-1', level=1, title='Stock inventory with a class', short='Model each product as an object with its own methods, then report on the stock.',
    story=('Ramesh runs a stationery shop in Warangal and keeps his stock in a notebook. He wants a small program where every product is an **object** that knows its own price and quantity, '
           'can work out its own stock value, and can say whether it is running low.\n'
           'Write a `Product` class, read the products until `done`, and print a stock report.'),
    objectives=['Write a class with `__init__` and `self`', 'Give objects their own methods', 'Use `__str__` to print an object nicely', 'Work with a list of objects'],
    may=['everything from Parts 1-5', '`class`, `__init__`, `self`', 'methods and default values', '`__str__`'],
    mustnot=NOT_YET,
    tasks=['Write `class Product` with `__init__(self, name, price, qty)` that stores the three values.',
           'Add `value(self)` that returns price × qty.',
           'Add `is_low(self, limit=10)` that returns `True` when qty is **below** the limit.',
           'Add `__str__(self)` that returns text like `Pen: 120 x ₹10.00 = ₹1,200.00` (name, qty, price, value).',
           'Read rows `name,price,qty` until `done` (any capitals). Strip each part; the price can have paise (`float`), the qty is whole (`int`). Make a `Product` for each row and keep them in a list.',
           'If there are no products, print `No products`. Otherwise print each product (just `print(product)`), in the order they came.',
           'Then print `Products`, `Stock value` (the sum of every `value()`), `Low stock` (names joined with `, `, or `none`) and `Most valuable` (the product with the highest value; the first one if tied).'],
    lines=['<Name>: <qty> x ₹<price> = ₹<value>', 'Products: <count>', 'Stock value: ₹<amount>', 'Low stock: <names> or none', 'Most valuable: <Name> (₹<amount>)', 'No products'],
    rules='Money has `₹`, commas and 2 decimals (`:,.2f`). Names are printed as typed, without the spaces around them.',
    edge=['`done` straight away: no products.', 'A quantity of **exactly 10** is not low (below 10 is low).',
          'The most valuable product is about **price × qty**, not the highest price.', 'Prices with paise.', 'Only one product.'],
    hints=['Inside the class, every method starts with `self`, and every stored value is `self.something`. For example `def value(self): return self.price * self.qty`.',
           'Make the objects in the loop: `name, price, qty = [part.strip() for part in row.split(",")]`, then `products.append(Product(name, float(price), int(qty)))`.',
           'After the loop: `sum(p.value() for p in products)` for the stock value, `[p.name for p in products if p.is_low()]` for the low ones, and keep the best product so far with `if p.value() > best.value():`.'],
    starter='# Project 6.1: Stock inventory with a class\n',
    sol='''# Project 6.1: Stock inventory with a class
class Product:
    """One product in the shop."""

    def __init__(self, name, price, qty):
        self.name = name
        self.price = price
        self.qty = qty

    def value(self):
        """Return the stock value of this product."""
        return self.price * self.qty

    def is_low(self, limit=10):
        """Return True when the quantity is below the limit."""
        return self.qty < limit

    def __str__(self):
        return f"{self.name}: {self.qty} x ₹{self.price:,.2f} = ₹{self.value():,.2f}"


products = []
while True:
    row = input("Product (name,price,qty) or done: ")
    if row.strip().lower() == "done":
        break
    name, price, qty = [part.strip() for part in row.split(",")]
    products.append(Product(name, float(price), int(qty)))

if not products:
    print("No products")
else:
    for product in products:
        print(product)
    low = [p.name for p in products if p.is_low()]
    best = products[0]
    for product in products:
        if product.value() > best.value():
            best = product
    print(f"Products: {len(products)}")
    print(f"Stock value: ₹{sum(p.value() for p in products):,.2f}")
    print("Low stock: " + (", ".join(low) or "none"))
    print(f"Most valuable: {best.name} (₹{best.value():,.2f})")''',
    weak='''class Product:
    def __init__(self, n, p, q):
        self.n = n
        self.p = p
        self.q = q

items = []
while True:
    r = input("Row: ")
    if r == "done":
        break
    n, p, q = r.split(",")
    items.append(Product(n, float(p), int(q)))
total = 0
for x in items:
    print(f"{x.n}: {x.q} x ₹{x.p:,.2f} = ₹{x.p * x.q:,.2f}")
    total += x.p * x.q
print(f"Products: {len(items)}")
print(f"Stock value: ₹{total:,.2f}")
print("Low stock: " + ", ".join(x.n for x in items if x.q <= 10))''',
    need=[dict(any=['node:ClassDef'], min=1, label='a `class`'),
          dict(any=['def:__init__'], min=1, label='`__init__` to store the values'),
          dict(any=['def:value'], min=1, label='a `value()` method'),
          dict(any=['def:is_low'], min=1, label='an `is_low()` method'),
          dict(any=['def:__str__'], min=1, label='`__str__` so `print(product)` works'),
          dict(any=['def:default'], min=1, label='a default value (`limit=10`)'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A small shop', kind='main', inputs=['Pen,10,120', 'Notebook,45,30', 'Ink,25,8', 'done']),
           dict(name='Big and small stock', kind='main', inputs=['School bag,899.5,12', 'Eraser,5,400', 'Geometry box,150,9', 'Glue,30,15', 'DONE']),
           dict(name='One product', kind='main', inputs=['Stapler,120,4', 'done']),
           dict(name='Exactly 10 is not low', kind='logic', inputs=['A4 paper,250,10', 'Marker,40,9', 'done'], check=['Low stock'],
                tip='Low means **below** the limit: `qty < 10`. A quantity of exactly 10 is fine.'),
           dict(name='Most valuable is price × qty', kind='logic', inputs=['Calculator,700,2', 'Pencil,5,500', 'done'], check=['Most valuable'],
                tip='Compare `value()` (price × qty): 500 pencils at ₹5 (₹2,500) beat 2 calculators at ₹700 (₹1,400).'),
           dict(name='Prices with paise', kind='logic', inputs=['Clip,2.75,40', 'Tape,18.5,6', 'done'], check=['Clip', 'Tape', 'Stock value'],
                tip='Convert the price with `float()`, so `2.75` keeps its paise.'),
           dict(name='No products', kind='edge', inputs=['done'],
                tip='When `done` comes first, print `No products` and nothing else.'),
           dict(name='Spaces around the parts', kind='edge', inputs=['  Pen , 10 , 120 ', ' done '],
                tip='Strip every part of the row, and strip the row before comparing it with `done`.'),
           dict(name='Two products with the same value', kind='edge', inputs=['Ruler,20,10', 'Scale,10,20', 'done'], check=['Most valuable', 'Low stock'],
                tip='When two products have the same value, keep the first one: replace the best only when a value is strictly bigger.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def exp2(i):
    owner, kind, bal = i[0].strip(), i[1].strip().lower(), float(i[2]); out, n = [], 0
    for cmd in i[3:]:
        c = cmd.strip()
        if c.lower() == 'done': break
        p = c.split()
        act = p[0].lower() if p else ''
        if act in ('deposit', 'withdraw'):
            if len(p) != 2: out.append('Error: Amount missing'); continue
            try: a = float(p[1])
            except ValueError: out.append('Error: Amount must be a number'); continue
            if a <= 0: out.append('Error: Amount must be positive'); continue
            if act == 'deposit': bal += a; n += 1; out.append('Deposited %s. Balance: %s' % (money(a), money(bal)))
            elif a > bal: out.append('Error: Insufficient funds')
            elif kind == 'savings' and bal - a < 1000: out.append('Error: Minimum balance is ₹1,000.00')
            else: bal -= a; n += 1; out.append('Withdrew %s. Balance: %s' % (money(a), money(bal)))
        elif act == 'interest':
            if kind != 'savings': out.append('Error: Interest is only for savings accounts')
            else: it = round(bal * 4 / 100 / 12, 2); bal += it; n += 1; out.append('Interest %s. Balance: %s' % (money(it), money(bal)))
        else: out.append('Error: Unknown command')
    return out + ['Account: %s (%s)' % (owner, kind), 'Transactions: %d' % n, 'Final balance: ' + money(bal)]

P2 = dict(
    id='p6-2', level=2, title='Bank accounts with rules', short='Build an Account class and a SavingsAccount that inherits from it, with rules that protect the balance.',
    story=('A cooperative bank in Guntur wants a teaching version of its account system. Every account can take deposits and withdrawals, but money must never go wrong: '
           'no negative amounts, no withdrawing more than the balance. A **savings** account has two extra rules: it must keep at least **₹1,000**, and it earns monthly interest at **4% a year**.\n'
           'Write the classes, then a small command loop where a clerk types commands like `deposit 500` until `done`.'),
    objectives=['Protect data inside a class with checks and `raise`', 'Build a child class with inheritance and `super()`',
                'Override a method to add a rule', 'Catch the errors in the main program'],
    may=['everything from Parts 1-5', '`class`, inheritance, `super()`', '`raise` and `try` / `except`', 'class attributes, properties'],
    mustnot=NOT_YET,
    tasks=['Write `class Account` with `__init__(self, owner, balance=0)`. Keep the balance **private** (`self.__balance` or `self._balance`) and give a `balance` property or method to read it.',
           '`deposit(amount)` and `withdraw(amount)` raise `ValueError("Amount must be positive")` for 0 or less. `withdraw` raises `ValueError("Insufficient funds")` when the amount is more than the balance. Both return the new balance.',
           'Write `class SavingsAccount(Account)` with a class attribute `rate = 4` (percent a year). Override `withdraw` so it raises `ValueError("Minimum balance is ₹1,000.00")` if the balance would go below ₹1,000, otherwise it calls `super().withdraw(amount)`.',
           'Add `add_interest()` to `SavingsAccount`: interest = balance × rate ÷ 100 ÷ 12, rounded to 2 decimals; add it and return it.',
           'Ask for the owner\'s name, the account type (`savings` or `current`, any capitals) and the opening balance, then create the right object (`current` uses plain `Account`).',
           'Read commands until `done`: `deposit <amount>`, `withdraw <amount>`, `interest`. After each, print `Deposited ₹500.00. Balance: ₹1,500.00` (or `Withdrew ...`, `Interest ...`), or `Error: <message>`. Other messages: `Error: Amount must be a number`, `Error: Amount missing`, `Error: Interest is only for savings accounts`, `Error: Unknown command`.',
           'At the end print `Account: <owner> (<type>)`, `Transactions: <successful commands>` and `Final balance`.'],
    lines=['Deposited ₹<amount>. Balance: ₹<amount>', 'Withdrew ₹<amount>. Balance: ₹<amount>', 'Interest ₹<amount>. Balance: ₹<amount>', 'Error: <message>',
           'Account: <owner> (<type>)', 'Transactions: <count>', 'Final balance: ₹<amount>'],
    rules='Money has `₹`, commas and 2 decimals. The account type is printed in small letters. The checks happen in this order: amount missing, not a number, 0 or less, more than the balance, then the savings minimum.',
    edge=['A withdrawal of **more than the balance**: `Insufficient funds` (for both kinds of account).',
          'A savings withdrawal that would leave **less than ₹1,000**.', 'Interest on a **current** account.',
          'Amounts that are **words**, **0** or **negative**, or missing.', 'An unknown command, and `DONE` in capitals.'],
    hints=['In `Account.withdraw`: `if amount <= 0: raise ValueError("Amount must be positive")`, then `if amount > self._balance: raise ValueError("Insufficient funds")`, then subtract and return the balance.',
           'In `SavingsAccount.withdraw`: check `amount > 0` and the balance first by letting the order match the rules, then `if self.balance - amount < 1000: raise ValueError(...)`, else `return super().withdraw(amount)`. Read the balance through the property, not the private name.',
           'In the loop: `parts = command.split()`, `action = parts[0].lower()`. Convert the amount with `float()` inside `try` / `except ValueError` (for words), and call the method inside another `try` that prints `f"Error: {e}"`.'],
    starter='# Project 6.2: Bank accounts with rules\n',
    sol='''# Project 6.2: Bank accounts with rules
class Account:
    """A bank account whose balance can only change through its methods."""

    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self._balance += amount
        return self._balance

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        return self._balance


class SavingsAccount(Account):
    """An account that keeps ₹1,000 and earns interest."""
    rate = 4

    def withdraw(self, amount):
        if 0 < amount <= self.balance and self.balance - amount < 1000:
            raise ValueError("Minimum balance is ₹1,000.00")
        return super().withdraw(amount)

    def add_interest(self):
        interest = round(self.balance * SavingsAccount.rate / 100 / 12, 2)
        self.deposit(interest)
        return interest


owner = input("Owner: ").strip()
kind = input("Account type (savings or current): ").strip().lower()
opening = float(input("Opening balance: "))
account = SavingsAccount(owner, opening) if kind == "savings" else Account(owner, opening)

transactions = 0
while True:
    command = input("Command: ").strip()
    if command.lower() == "done":
        break
    parts = command.split()
    action = parts[0].lower() if parts else ""
    try:
        if action in ("deposit", "withdraw"):
            if len(parts) != 2:
                raise ValueError("Amount missing")
            try:
                amount = float(parts[1])
            except ValueError:
                raise ValueError("Amount must be a number")
            if action == "deposit":
                account.deposit(amount)
                print(f"Deposited ₹{amount:,.2f}. Balance: ₹{account.balance:,.2f}")
            else:
                account.withdraw(amount)
                print(f"Withdrew ₹{amount:,.2f}. Balance: ₹{account.balance:,.2f}")
        elif action == "interest":
            if not isinstance(account, SavingsAccount):
                raise ValueError("Interest is only for savings accounts")
            interest = account.add_interest()
            print(f"Interest ₹{interest:,.2f}. Balance: ₹{account.balance:,.2f}")
        else:
            raise ValueError("Unknown command")
        transactions += 1
    except ValueError as e:
        print(f"Error: {e}")

print(f"Account: {owner} ({kind})")
print(f"Transactions: {transactions}")
print(f"Final balance: ₹{account.balance:,.2f}")''',
    weak='''class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, a):
        self.balance += a

    def withdraw(self, a):
        if a > self.balance:
            print("Error: Insufficient funds")
        else:
            self.balance -= a

o = input("Owner: ")
k = input("Type: ")
acc = Account(o, float(input("Opening: ")))
t = 0
while True:
    c = input("Command: ")
    if c == "done":
        break
    p = c.split()
    if p[0] == "deposit":
        acc.deposit(float(p[1]))
        print(f"Deposited ₹{float(p[1]):,.2f}. Balance: ₹{acc.balance:,.2f}")
    elif p[0] == "withdraw":
        acc.withdraw(float(p[1]))
        print(f"Withdrew ₹{float(p[1]):,.2f}. Balance: ₹{acc.balance:,.2f}")
    t += 1
print(f"Account: {o} ({k})")
print(f"Transactions: {t}")
print(f"Final balance: ₹{acc.balance:,.2f}")''',
    need=[dict(any=['node:ClassDef'], min=2, label='two classes, `Account` and `SavingsAccount`'),
          dict(any=['class:inherit'], min=1, label='inheritance: `class SavingsAccount(Account)`'),
          dict(any=['call:super'], min=1, label='`super()` to reuse the parent\'s method'),
          dict(any=['node:Raise'], min=2, label='`raise ValueError(...)` inside the methods'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` in the command loop'),
          dict(any=['def:add_interest'], min=1, label='an `add_interest()` method'),
          dict(any=['def:withdraw'], min=2, label='a `withdraw()` that the savings account overrides')],
    expect=exp2,
    tests=[dict(name='A savings account', kind='main', inputs=['Asha', 'savings', '5000', 'deposit 2500', 'withdraw 1200', 'interest', 'done']),
           dict(name='A current account', kind='main', inputs=['Ravi Traders', 'Current', '20000', 'withdraw 18500', 'deposit 750.50', 'withdraw 3000', 'done']),
           dict(name='A busy day', kind='main', inputs=['Neha', 'SAVINGS', '1500', 'deposit 100000', 'interest', 'withdraw 50000', 'interest', 'DONE']),
           dict(name='Savings keeps ₹1,000', kind='logic', inputs=['Imran', 'savings', '3000', 'withdraw 2500', 'withdraw 2000', 'done'],
                tip='A savings withdrawal must leave at least ₹1,000: ₹3,000 − ₹2,500 would leave ₹500. Override `withdraw` in `SavingsAccount` and call `super().withdraw()` when it is allowed.'),
           dict(name='Too much is insufficient funds', kind='logic', inputs=['Zoya', 'savings', '3000', 'withdraw 4000', 'done'],
                tip='When the amount is more than the whole balance, the error is `Insufficient funds`, even for a savings account.'),
           dict(name='Interest only for savings', kind='logic', inputs=['Kiran', 'current', '12000', 'interest', 'deposit 0', 'done'],
                tip='A current account has no `add_interest()`: print `Error: Interest is only for savings accounts`. A deposit of 0 is `Amount must be positive`. Failed commands are not transactions.'),
           dict(name='Words and missing amounts', kind='edge', inputs=['Priya', 'savings', '2000', 'deposit abc', 'withdraw', 'withdraw -50', 'done'],
                tip='Convert the amount inside `try`: a word gives `Amount must be a number`, a missing amount `Amount missing`, and a negative one `Amount must be positive`.'),
           dict(name='Unknown commands', kind='edge', inputs=['Suresh', 'current', '100', 'transfer 50', '', 'done'],
                tip='Any other command, even an empty line, prints `Error: Unknown command` and the loop carries on.'),
           dict(name='No commands at all', kind='edge', inputs=['Meena', 'savings', '1000', 'done'],
                tip='With no commands, print the three summary lines with 0 transactions.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
ROOMS = [(101, 'Standard', 1800), (102, 'Standard', 1800), (201, 'Deluxe', 3000), (202, 'Deluxe', 3000), (301, 'Suite', 5000)]
def exp3(i):
    info = {n: (t, r) for n, t, r in ROOMS}; occ, out, books, errs, rev = {}, [], 0, 0, {'Standard': 0, 'Deluxe': 0, 'Suite': 0}
    for cmd in i:
        p = cmd.split()
        if cmd.strip().lower() == 'done': break
        act = p[0].lower() if p else ''
        if act == 'book' and len(p) == 4:
            try: n, nights = int(p[1]), int(p[3])
            except ValueError: out.append('Error: Room and nights must be numbers'); errs += 1; continue
            if n not in info: out.append('Error: Room %d does not exist' % n); errs += 1
            elif nights < 1: out.append('Error: Nights must be at least 1'); errs += 1
            elif n in occ: out.append('Error: Room %d is occupied' % n); errs += 1
            else:
                t, r = info[n]; price = r * nights * (0.9 if nights >= 7 else 1) + (1000 if t == 'Suite' else 0)
                occ[n] = p[2]; rev[t] += price; books += 1
                out.append('Booked %d (%s) for %s, %d %s: %s' % (n, t, p[2], nights, 'night' if nights == 1 else 'nights', money(price)))
        elif act == 'checkout' and len(p) == 2:
            try: n = int(p[1])
            except ValueError: out.append('Error: Room and nights must be numbers'); errs += 1; continue
            if n not in info: out.append('Error: Room %d does not exist' % n); errs += 1
            elif n not in occ: out.append('Error: Room %d is empty' % n); errs += 1
            else: out.append('Checked out %d (%s)' % (n, occ.pop(n)))
        else: out.append('Error: Unknown command'); errs += 1
    return out + ['Bookings: %d' % books, 'Errors: %d' % errs, 'Occupied: %d of %d rooms (%.1f%%)' % (len(occ), len(info), len(occ) / len(info) * 100),
                  'Revenue: ' + money(sum(rev.values()))] + ['%s revenue: %s' % (t, money(v)) for t, v in rev.items()]

STARTER3 = '''# Project 6.3: Hotel booking desk
ROOMS = [(101, "Standard", 1800), (102, "Standard", 1800), (201, "Deluxe", 3000),
         (202, "Deluxe", 3000), (301, "Suite", 5000)]
'''
P3 = dict(
    id='p6-3', level=3, title='Hotel booking desk', short='Model rooms, suites and a hotel as classes, and run the front desk from typed commands.',
    story=('A heritage hotel in Mysuru has 5 rooms: two Standard (₹1,800 a night), two Deluxe (₹3,000) and one Suite (₹5,000). The front desk types short commands all day: '
           '`book 201 Asha 3` and `checkout 201`. At closing time, the manager wants a summary of bookings, mistakes, occupancy and revenue per room type.\n'
           'Pricing rules: a stay of **7 nights or more gets 10% off** the room price, and the **Suite adds a ₹1,000 service charge** to every booking. '
           'Build it with classes so that each kind of room knows its own price: that is **polymorphism**.'),
    objectives=['Design several classes that work together', 'Use inheritance and override a method for a special case',
                'Raise clear errors for invalid actions and handle them at the desk', 'Keep state (who is in which room) inside an object'],
    may=['everything from Parts 1-5', '`class`, inheritance, `super()`', 'polymorphism and magic methods', '`raise`, `try` / `except`'],
    mustnot=NOT_YET,
    tasks=['Write `class Room` with `number`, `kind`, `rate` and `guest` (`None` when empty), and a method `price(nights)`: rate × nights, with 10% off for 7 nights or more.',
           'Write `class Suite(Room)` that overrides `price(nights)`: `super().price(nights)` plus ₹1,000.',
           'Write `class Hotel` that builds its rooms from the starter\'s `ROOMS` list (use `Suite` for the suite) and has `book(number, guest, nights)` and `checkout(number)`. They raise `ValueError` with these messages: `Room 999 does not exist`, `Nights must be at least 1`, `Room 201 is occupied`, `Room 201 is empty`.',
           '`book` returns the price; `checkout` returns the guest\'s name. The hotel also keeps the number of bookings and the revenue per room kind.',
           'Read commands until `done`: `book <room> <guest> <nights>` and `checkout <room>`. Print `Booked 201 (Deluxe) for Asha, 3 nights: ₹9,000.00` (`1 night` for one) or `Checked out 201 (Asha)`.',
           'For any problem print `Error: <message>` and count it. Extra messages: `Error: Room and nights must be numbers` and `Error: Unknown command` (also for a wrong number of words). The checks go in this order: room exists, nights, occupied.',
           'At `done`, print `Bookings`, `Errors`, `Occupied: <n> of 5 rooms (<percent>%)`, `Revenue`, and one line per kind: `Standard revenue`, `Deluxe revenue`, `Suite revenue`.'],
    lines=['Booked <room> (<Kind>) for <guest>, <n> nights: ₹<amount>', 'Checked out <room> (<guest>)', 'Error: <message>', 'Bookings: <count>', 'Errors: <count>',
           'Occupied: <n> of 5 rooms (<percent>%)', 'Revenue: ₹<amount>', 'Standard revenue: ₹<amount>', 'Deluxe revenue: ₹<amount>', 'Suite revenue: ₹<amount>'],
    rules='Money has `₹`, commas and 2 decimals. The occupancy percent has 1 decimal. Guest names are one word as typed. Revenue is counted when a room is booked.',
    edge=['Booking a room that is **already occupied**, or a room number that **does not exist**.', 'Checking out of an **empty** room.',
          '**7 nights or more**: 10% off. The **Suite** always adds ₹1,000, also after the discount.', '0 nights, a word instead of a number, or a wrong number of words.',
          'A room can be booked again after checkout.'],
    hints=['`Room.price`: `total = self.rate * nights`, then `if nights >= 7: total = total * 0.9`, `return total`. `Suite.price` is one line: `return super().price(nights) + 1000`.',
           'In `Hotel.__init__`, build a dictionary `self.rooms = {}` from `ROOMS`: `self.rooms[number] = Suite(...) if kind == "Suite" else Room(...)`. Then `book` looks up `self.rooms.get(number)` and raises the right `ValueError`.',
           'In the desk loop, `parts = command.split()`; check the first word and `len(parts)`, convert the numbers with `int()`, and wrap the hotel call in `try` / `except ValueError as e:` to print `f"Error: {e}"` and count the error.'],
    starter=STARTER3,
    sol=STARTER3 + '''

class Room:
    """A hotel room that knows its own price."""

    def __init__(self, number, kind, rate):
        self.number = number
        self.kind = kind
        self.rate = rate
        self.guest = None

    def price(self, nights):
        total = self.rate * nights
        if nights >= 7:
            total = total * 0.9  # long-stay discount
        return total


class Suite(Room):
    """A suite: same as a room, plus a service charge."""

    def price(self, nights):
        return super().price(nights) + 1000


class Hotel:
    """The rooms, who is in them, and the takings."""

    def __init__(self, room_list):
        self.rooms = {}
        for number, kind, rate in room_list:
            room_class = Suite if kind == "Suite" else Room
            self.rooms[number] = room_class(number, kind, rate)
        self.bookings = 0
        self.revenue = {"Standard": 0, "Deluxe": 0, "Suite": 0}

    def find(self, number):
        if number not in self.rooms:
            raise ValueError(f"Room {number} does not exist")
        return self.rooms[number]

    def book(self, number, guest, nights):
        room = self.find(number)
        if nights < 1:
            raise ValueError("Nights must be at least 1")
        if room.guest is not None:
            raise ValueError(f"Room {number} is occupied")
        room.guest = guest
        amount = room.price(nights)
        self.bookings += 1
        self.revenue[room.kind] += amount
        return amount

    def checkout(self, number):
        room = self.find(number)
        if room.guest is None:
            raise ValueError(f"Room {number} is empty")
        guest = room.guest
        room.guest = None
        return guest

    def occupied(self):
        return sum(1 for room in self.rooms.values() if room.guest is not None)


hotel = Hotel(ROOMS)
errors = 0
while True:
    command = input("Desk command: ")
    if command.strip().lower() == "done":
        break
    parts = command.split()
    action = parts[0].lower() if parts else ""
    try:
        if action == "book" and len(parts) == 4:
            try:
                number, nights = int(parts[1]), int(parts[3])
            except ValueError:
                raise ValueError("Room and nights must be numbers")
            amount = hotel.book(number, parts[2], nights)
            kind = hotel.rooms[number].kind
            word = "night" if nights == 1 else "nights"
            print(f"Booked {number} ({kind}) for {parts[2]}, {nights} {word}: ₹{amount:,.2f}")
        elif action == "checkout" and len(parts) == 2:
            try:
                number = int(parts[1])
            except ValueError:
                raise ValueError("Room and nights must be numbers")
            print(f"Checked out {number} ({hotel.checkout(number)})")
        else:
            raise ValueError("Unknown command")
    except ValueError as e:
        print(f"Error: {e}")
        errors += 1

occupied = hotel.occupied()
print(f"Bookings: {hotel.bookings}")
print(f"Errors: {errors}")
percent = occupied / len(hotel.rooms) * 100
print(f"Occupied: {occupied} of {len(hotel.rooms)} rooms ({percent:.1f}%)")
print(f"Revenue: ₹{sum(hotel.revenue.values()):,.2f}")
for kind, amount in hotel.revenue.items():
    print(f"{kind} revenue: ₹{amount:,.2f}")''',
    weak=STARTER3 + '''
class Room:
    def __init__(self, n, k, r):
        self.n = n
        self.k = k
        self.r = r
        self.g = None

rooms = {}
for n, k, r in ROOMS:
    rooms[n] = Room(n, k, r)
rev = 0
b = 0
while True:
    c = input("Cmd: ")
    if c == "done":
        break
    p = c.split()
    if p[0] == "book":
        room = rooms[int(p[1])]
        room.g = p[2]
        amt = room.r * int(p[3])
        rev += amt
        b += 1
        print(f"Booked {room.n} ({room.k}) for {p[2]}, {p[3]} nights: ₹{amt:,.2f}")
    elif p[0] == "checkout":
        room = rooms[int(p[1])]
        print(f"Checked out {room.n} ({room.g})")
        room.g = None
print(f"Bookings: {b}")
print(f"Revenue: ₹{rev:,.2f}")''',
    need=[dict(any=['node:ClassDef'], min=3, label='three classes: `Room`, `Suite` and `Hotel`'),
          dict(any=['class:inherit'], min=1, label='inheritance: `class Suite(Room)`'),
          dict(any=['call:super'], min=1, label='`super()` in `Suite.price`'),
          dict(any=['def:price'], min=2, label='a `price()` method that `Suite` overrides (polymorphism)'),
          dict(any=['def:book'], min=1, label='a `book()` method'),
          dict(any=['def:checkout'], min=1, label='a `checkout()` method'),
          dict(any=['node:Raise'], min=3, label='`raise ValueError(...)` for invalid actions'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` at the desk')],
    expect=exp3,
    tests=[dict(name='A normal day', kind='main', inputs=['book 201 Asha 3', 'book 101 Ravi 1', 'checkout 201', 'book 301 Neha 2', 'done']),
           dict(name='A full house', kind='main', inputs=['book 101 A 2', 'book 102 B 2', 'book 201 C 1', 'book 202 D 4', 'book 301 E 1', 'checkout 102', 'book 102 F 3', 'DONE']),
           dict(name='A long stay', kind='main', inputs=['book 202 Kiran 10', 'book 101 Meena 7', 'checkout 101', 'done']),
           dict(name='The suite adds ₹1,000', kind='logic', inputs=['book 301 Imran 1', 'checkout 301', 'book 301 Zoya 7', 'done'], check=['Booked', 'Suite revenue'],
                tip='`Suite.price` is the normal room price plus ₹1,000. For 7 nights the room part gets 10% off first: ₹31,500 + ₹1,000 = ₹32,500.'),
           dict(name='Occupied rooms cannot be booked', kind='logic', inputs=['book 201 Asha 2', 'book 201 Ravi 1', 'checkout 201', 'book 201 Ravi 1', 'done'], check=['Booked', 'Error', 'Bookings', 'Errors'],
                tip='Check `room.guest is not None` and raise `Room 201 is occupied`. After checkout the room is free again.'),
           dict(name='Discount from 7 nights', kind='logic', inputs=['book 101 A 6', 'book 102 B 7', 'done'], check=['Booked'],
                tip='7 nights or more gets 10% off (`>= 7`): 7 × ₹1,800 = ₹12,600, less 10% = ₹11,340.'),
           dict(name='Mistakes at the desk', kind='edge', inputs=['book 999 X 2', 'book 101 Y 0', 'checkout 102', 'book two A 1', 'cancel 101', 'book 101 Z', 'done'],
                tip='Each mistake prints its own `Error:` line and is counted: a missing room, 0 nights, an empty room, a word instead of a number, and unknown or incomplete commands.'),
           dict(name='Nothing happened', kind='edge', inputs=['done'],
                tip='With no commands, every count is 0 and the occupancy is 0.0%. The hotel always has 5 rooms, so the division is safe.'),
           dict(name='Capitals in commands', kind='edge', inputs=['BOOK 102 Asha 1', 'Checkout 102', 'done'],
                tip='Compare the first word in small letters (`parts[0].lower()`), so `BOOK` and `Checkout` work too.')],
)

PROJECTS = [P1, P2, P3]
