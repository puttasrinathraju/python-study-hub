chapter({
  id: "projects", part: 8, title: "Projects: put it all together", nav: "Projects", time: "90 min", lvl: "Intermediate",
  keys: "project movie ticket booking system billing supermarket theater inventory management book borrow library pickle menu",
  lead: "Four complete programs from your course and PDFs, rebuilt step by step, plus a challenge from your notebook. This is where all the chapters meet.",
  goals: [
    "Plan a program before coding: data first, then actions",
    "Build the course's movie ticket system with functions and pickle",
    "Read the supermarket billing and theater billing systems end to end",
    "See how the inventory system uses all five collection types",
    "Build the book borrowing system yourself"
  ],
  src: ["Course notebooks dict_exp.ipynb, while_loops_exp.ipynb, functions_file_handling.ipynb", "PDF: Python Operators and Flow Control (theater billing system)", "PDF: Python Advanced Data Types (inventory management system)"],
  body: [
    { t: "h", text: "How to build any small program" },
    { t: "ol", items: [
      "**Describe it in plain words.** \"Users can see movies, book seats, cancel seats, and the data is saved.\"",
      "**Choose the data structure first.** What do you store, and how will you look it up? (Usually a dictionary.)",
      "**List the actions** and make each one a function: `show_movies`, `book`, `cancel`, `save`.",
      "**Test each function** with fixed values before adding `input()`.",
      "**Add the menu loop** last: `while True` + `if/elif` + `break`.",
      "**Handle bad input** with `try/except` and clear messages."
    ]},
    { t: "mm", title: "Which chapters each project uses", root: "Projects", kids: [
      { t: "Movie tickets", k: ["nested dict", "while True menu", "functions", "pickle save/load"], go: "dicts" },
      { t: "Supermarket bill", k: ["nested while loops", "accumulator", "f-string formatting"], go: "whileloops" },
      { t: "Theater billing", k: ["if-elif-else", "try/except validation", "list of seats", "time.sleep"], go: "conditions" },
      { t: "Inventory system", k: ["class + methods", "dict, set, list, tuple, str", "report with sorting"], go: "oop" },
      { t: "Book borrowing", k: ["your turn", "dict of lists", "pickle"], go: "files" }
    ]},
    { t: "h", text: "Project 1: Movie ticket booking system" },
    { t: "p", b: "Your course notebook builds this with one big `while True` loop. Here it is rebuilt with **functions**, so each part is short and easy to test. The data is **saved with pickle**, so bookings survive a restart." },
    { t: "deck", title: "Movie ticket system: walkthrough", s: [
      { big: "Data first: one dictionary of movies.", b: "Each movie name is a key. Its value is another dictionary with the price and seats left.", c: R`
movie_db = {
    "Ramayan": {"price": 1000, "seats": 20},
    "Drishyam": {"price": 500, "seats": 40},
}
print(movie_db["Drishyam"]["seats"])`, o: R`40` },
      { h: "Action 1: book seats", items: ["Is the movie there? (`in`)", "Are there enough seats? (`if`)", "Reduce the seats, work out the bill", "**Return** a message instead of printing, so it is easy to test"] },
      { h: "Action 2: cancel seats", b: "The course rule: 50% refund. Add the seats back." },
      { h: "Action 3: save and load", b: "`pickle.dump` on exit, `pickle.load` on start. If the file does not exist yet (`FileNotFoundError`), start from the default movies." },
      { h: "Last: the menu loop", b: "`while True`, show the movies, ask for 1, 2 or 3, call the right function, `break` on exit. Because the logic lives in functions, the loop stays short and readable." }
    ]},
    { t: "code", ttl: "The functions, tested with fixed values", c: R`
import pickle

def load_db(path="cinema.pkl"):
    try:
        with open(path, "rb") as f:
            return pickle.load(f)
    except FileNotFoundError:
        return {
            "Ramayan": {"price": 1000, "seats": 20},
            "Drishyam": {"price": 500, "seats": 40},
            "Hanuman Ansh": {"price": 700, "seats": 10},
            "Udta Teer": {"price": 400, "seats": 50},
        }

def save_db(db, path="cinema.pkl"):
    with open(path, "wb") as f:
        pickle.dump(db, f)

def show_movies(db):
    for name, d in db.items():
        print(f"{name:<14} Rs {d['price']:>5}  {d['seats']:>3} seats left")

def book(db, movie, n):
    if movie not in db:
        return "Movie not found"
    if n <= 0 or n > db[movie]["seats"]:
        return "Insufficient seats or invalid number of seats"
    db[movie]["seats"] -= n
    bill = db[movie]["price"] * n
    return f"{n} seats booked for {movie}. Bill: Rs {bill}"

def cancel(db, movie, n):
    if movie not in db:
        return "Movie not found"
    refund = db[movie]["price"] * n * 0.5
    db[movie]["seats"] += n
    return f"{n} seats cancelled. Refund (50%): Rs {refund}"

# --- test run ---
db = load_db()
show_movies(db)
print(book(db, "Drishyam", 3))
print(book(db, "Hanuman Ansh", 15))
print(book(db, "Avatar", 2))
print(cancel(db, "Drishyam", 1))
save_db(db)
print(load_db()["Drishyam"])       # loaded back from the file`, o: R`
Ramayan        Rs  1000   20 seats left
Drishyam       Rs   500   40 seats left
Hanuman Ansh   Rs   700   10 seats left
Udta Teer      Rs   400   50 seats left
3 seats booked for Drishyam. Bill: Rs 1500
Insufficient seats or invalid number of seats
Movie not found
1 seats cancelled. Refund (50%): Rs 250.0
{'price': 500, 'seats': 38}` },
    { t: "note", k: "tip", b: "Run that cell twice in Jupyter and the seat counts keep going down, because the second run **loads the saved file**. That is the whole point of saving. Delete `cinema.pkl` to start fresh." },
    { t: "code", nr: 1, ttl: "The menu loop (put it in the same notebook, after the functions)", c: R`
def main():
    db = load_db()
    while True:
        print("\nMovies on the box office right now:")
        show_movies(db)
        choice = input("\n1 Book   2 Cancel   3 Exit: ")
        if choice in ("1", "2"):
            movie = input("Movie name: ").strip().title()
            try:
                n = int(input("Number of seats: "))
            except ValueError:
                print("Please type a number")
                continue
            if choice == "1":
                print(book(db, movie, n))
            else:
                print(cancel(db, movie, n))
        elif choice == "3":
            save_db(db)
            print("Thank you!!")
            break
        else:
            print("Invalid choice")

main()`, o: R`
Movies on the box office right now:
Ramayan        Rs  1000   20 seats left
Drishyam       Rs   500   40 seats left
Hanuman Ansh   Rs   700   10 seats left
Udta Teer      Rs   400   50 seats left

1 Book   2 Cancel   3 Exit: 1
Movie name: ramayan
Number of seats: 2
2 seats booked for Ramayan. Bill: Rs 2000
...
1 Book   2 Cancel   3 Exit: 3
Thank you!!` },
    { t: "note", k: "trap", h: "Spot the bug in the original", b: "The course's cancel option adds seats back without checking how many were booked, so someone could \"cancel\" 100 seats that were never sold. A real system would track bookings per customer. Try adding that as an extra challenge: a dict of `{customer: {movie: seats}}`." },
    { t: "h", text: "Project 2: Supermarket billing system" },
    { t: "p", b: "The course version (shown in the While Loops chapter) asks for every price with `input()`. Here the same logic is moved into a function, so you can bill a whole list of customers and get the day's total." },
    { t: "code", c: R`
def make_bill(name, mob_no, cart):
    amount = 0
    for price, qty in cart:              # accumulator pattern
        amount += price * qty
    print("-" * 40)
    print("Name:  ", name)
    print("MobNo: ", mob_no)
    print("-" * 40)
    for price, qty in cart:
        print(f"{qty:>3} x {price:>8.2f} = {price * qty:>10.2f}")
    print("-" * 40)
    print(f"Amount: {amount:.2f}")
    return amount

customers = [
    ("Raghav", "87564756", [(500, 4), (2000, 2)]),
    ("Asha", "99887766", [(45.5, 10)]),
]
day_total = 0
for name, mob, cart in customers:        # tuple unpacking
    day_total += make_bill(name, mob, cart)
print("\nTotal sales today:", day_total)`, o: R`
----------------------------------------
Name:   Raghav
MobNo:  87564756
----------------------------------------
  4 x   500.00 =    2000.00
  2 x  2000.00 =    4000.00
----------------------------------------
Amount: 6000.00
----------------------------------------
Name:   Asha
MobNo:  99887766
----------------------------------------
 10 x    45.50 =     455.00
----------------------------------------
Amount: 455.00

Total sales today: 6455.0` },
    { t: "h", text: "Project 3: Theater billing system (from the PDF)" },
    { t: "p", b: "The PDF shows five pieces of this program. Here they are joined into one working program, with a comment on each part saying which concept it uses." },
    { t: "code", nr: 1, c: R`
import time

def theater_billing():
    print("Welcome to City Cinema")
    print("1. Avengers: Endgame  (12)")
    print("2. The Lion King      (10)")
    print("3. Joker              (11)")

    # 1. Movie selection: if-elif-else
    movie_choice = input("\nEnter movie number (1-3): ")
    if movie_choice == "1":
        movie_name, ticket_price = "Avengers: Endgame", 12
    elif movie_choice == "2":
        movie_name, ticket_price = "The Lion King", 10
    elif movie_choice == "3":
        movie_name, ticket_price = "Joker", 11
    else:
        print("Invalid choice. Exiting...")
        return

    # 2. Ticket quantity: while True + try/except + break
    while True:
        try:
            num_tickets = int(input("\nEnter number of tickets (1-10): "))
            if 1 <= num_tickets <= 10:
                break
            print("Please enter a number between 1 and 10.")
        except ValueError:
            print("Please enter a valid number.")

    # 3. Seat selection: for loop + membership test + list methods
    available_seats = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5"]
    selected_seats = []
    for i in range(num_tickets):
        while True:
            seat = input(f"Select seat {i + 1}: ").upper()
            if seat in available_seats:
                selected_seats.append(seat)
                available_seats.remove(seat)
                break
            print(f"Seat {seat} is not available. Please choose from: {available_seats}")

    # 4. Discount logic: simple if, default set first
    subtotal = num_tickets * ticket_price
    discount = 0
    if num_tickets >= 5:
        discount = subtotal * 0.1

    # 5. Animation effect: while loop with a counter
    print("\nPrinting your bill", end="")
    count = 0
    while count < 5:
        print(".", end="", flush=True)
        time.sleep(0.5)
        count += 1

    print(f"\n\nMovie:    {movie_name}")
    print(f"Seats:    {', '.join(selected_seats)}")
    print(f"Subtotal: {subtotal:.2f}")
    print(f"Discount: {discount:.2f}")
    print(f"Total:    {subtotal - discount:.2f}")

theater_billing()`, o: R`
Welcome to City Cinema
1. Avengers: Endgame  (12)
2. The Lion King      (10)
3. Joker              (11)

Enter movie number (1-3): 3

Enter number of tickets (1-10): five
Please enter a valid number.

Enter number of tickets (1-10): 5
Select seat 1: a1
Select seat 2: a1
Seat A1 is not available. Please choose from: ['A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5']
Select seat 2: a2
Select seat 3: a3
Select seat 4: b1
Select seat 5: b2

Printing your bill.....

Movie:    Joker
Seats:    A1, A2, A3, B1, B2
Subtotal: 55.00
Discount: 5.50
Total:    49.50` },
    { t: "note", k: "tip", b: "The PDF version uses `return` inside the else branch to exit early. That only works inside a function, which is why the whole program is wrapped in `def theater_billing():`." },
    { t: "h", text: "Project 4: Inventory management system (from the PDF)" },
    { t: "p", b: "The PDF's biggest program uses **every** collection type for the job it is best at. Here is a shorter version you can run, without the random parts, so the output is always the same." },
    { t: "table", head: ["Collection", "Used for", "Why this one"], rows: [
      ["**dict**", "`inventory`: item ID to details", "Fast lookup by ID"],
      ["**set**", "`categories`", "Each category stored once, automatically"],
      ["**list**", "`transactions`", "Ordered history that keeps growing"],
      ["**tuple**", "`(name, category, price)`", "Fixed facts that should not change by accident"],
      ["**str**", "IDs like `ITEM0001`, names, the report", "Text, formatted with f-strings"]
    ]},
    { t: "code", c: R`
class InventoryManagementSystem:
    def __init__(self):
        self.inventory = {}        # dict: item_id -> details
        self.categories = set()    # set: unique categories
        self.transactions = []     # list: history
        self.next_id = 1

    def add_item(self, name, category, price, quantity):
        item_id = f"ITEM{self.next_id:04d}"          # string ID
        self.next_id += 1
        self.categories.add(category)
        self.inventory[item_id] = {
            "properties": (name, category, price),     # tuple: fixed facts
            "quantity": quantity,
        }
        self.transactions.append(("ADD", item_id, quantity))
        return item_id

    def update_quantity(self, item_id, change):
        if item_id not in self.inventory:
            return False
        self.inventory[item_id]["quantity"] += change
        kind = "RESTOCK" if change > 0 else "SALE"
        self.transactions.append((kind, item_id, abs(change)))
        return True

    def search_by_name(self, part):
        part = part.lower()
        return [item["properties"][0] for item in self.inventory.values()
                if part in item["properties"][0].lower()]

    def low_stock(self, threshold=5):
        result = []
        for item in self.inventory.values():
            if item["quantity"] <= threshold:
                result.append(item["properties"][0])
        return result                                  # after the loop!

    def report(self):
        total_value = sum(item["properties"][2] * item["quantity"]
                          for item in self.inventory.values())
        by_category = {}
        for item in self.inventory.values():
            cat = item["properties"][1]
            by_category[cat] = by_category.get(cat, 0) + item["quantity"]
        lines = [f"Total unique items: {len(self.inventory)}",
                 f"Total inventory value: {total_value:,.2f}",
                 "Category breakdown:"]
        for cat, count in sorted(by_category.items(), key=lambda x: x[1], reverse=True):
            lines.append(f"- {cat}: {count} units")
        return "\n".join(lines)

ims = InventoryManagementSystem()
for row in [("Laptop", "Electronics", 899.99, 10),
            ("Headphones", "Electronics", 149.99, 20),
            ("T-shirt", "Clothing", 19.99, 50),
            ("Coffee Maker", "Appliances", 89.99, 8),
            ("Cookbook", "Books", 24.99, 15)]:
    ims.add_item(*row)                 # unpack the tuple into arguments

ims.update_quantity("ITEM0001", -7)    # sell 7 laptops
ims.update_quantity("ITEM0004", -4)    # sell 4 coffee makers
ims.update_quantity("ITEM0003", 10)    # restock t-shirts

print(sorted(ims.categories))
print(ims.search_by_name("o"))
print("Low stock:", ims.low_stock())
print(ims.report())
print("Last transaction:", ims.transactions[-1])`, o: R`
['Appliances', 'Books', 'Clothing', 'Electronics']
['Laptop', 'Headphones', 'Coffee Maker', 'Cookbook']
Low stock: ['Laptop', 'Coffee Maker']
Total unique items: 5
Total inventory value: 7,633.98
Category breakdown:
- Clothing: 60 units
- Electronics: 23 units
- Books: 15 units
- Appliances: 4 units
Last transaction: ('RESTOCK', 'ITEM0003', 10)` },
    { t: "note", k: "trap", h: "Check the indentation in your PDF copy", b: "In the PDF's `get_low_stock_items`, the line `return low_stock` appears indented **inside** the `for` loop. If it is, the method returns after checking only the **first** item. The `return` must line up with the `for`, as in `low_stock()` above. Indentation is logic in Python." },
    { t: "h", text: "Your turn: the book borrowing system" },
    { t: "p", b: "Your course notebook ends with two to-dos: \"need to create a Book borrow system\" and \"maintain the data of movie ticket as well as the books count using pickle\". Try it yourself before opening the solution." },
    { t: "prac", items: [
      { q: "Build a library with `library = {\"Python Basics\": 3, \"SQL Guide\": 1, \"Data Viz\": 2}` (title to copies available). Write `borrow(member, title)` and `give_back(member, title)`. Keep track of who has which book in a second dictionary. Then save both dictionaries with pickle.", hint: "Use a dict of lists for borrowed books: `{\"Asha\": [\"SQL Guide\"]}`. `setdefault(member, [])` creates the list the first time. Check that copies are available before lending, and that the member really has the book before taking it back.", sol: R`
import pickle

library = {"Python Basics": 3, "SQL Guide": 1, "Data Viz": 2}
borrowed = {}                                   # member -> list of titles

def borrow(member, title):
    if library.get(title, 0) == 0:
        return f"Sorry, '{title}' is not available"
    library[title] -= 1
    borrowed.setdefault(member, []).append(title)
    return f"{member} borrowed '{title}'"

def give_back(member, title):
    if title not in borrowed.get(member, []):
        return f"{member} did not borrow '{title}'"
    borrowed[member].remove(title)
    library[title] += 1
    return f"{member} returned '{title}'"

print(borrow("Asha", "SQL Guide"))
print(borrow("Ravi", "SQL Guide"))
print(borrow("Ravi", "Data Viz"))
print(give_back("Asha", "Python Basics"))
print(give_back("Asha", "SQL Guide"))
print(library)
print(borrowed)

with open("library.pkl", "wb") as f:
    pickle.dump({"library": library, "borrowed": borrowed}, f)`, out: R`
Asha borrowed 'SQL Guide'
Sorry, 'SQL Guide' is not available
Ravi borrowed 'Data Viz'
Asha did not borrow 'Python Basics'
Asha returned 'SQL Guide'
{'Python Basics': 3, 'SQL Guide': 1, 'Data Viz': 1}
{'Asha': [], 'Ravi': ['Data Viz']}` },
      { q: "Extend the movie system: keep a `bookings` dictionary of `{customer: {movie: seats}}`, and only allow a customer to cancel seats they actually booked.", hint: "In `book`, add to `bookings.setdefault(customer, {})`. In `cancel`, check `bookings.get(customer, {}).get(movie, 0) >= n` first.", sol: R`
db = {"Drishyam": {"price": 500, "seats": 40}}
bookings = {}

def book(customer, movie, n):
    if n > db[movie]["seats"]:
        return "Not enough seats"
    db[movie]["seats"] -= n
    mine = bookings.setdefault(customer, {})
    mine[movie] = mine.get(movie, 0) + n
    return f"{customer} booked {n} for {movie}"

def cancel(customer, movie, n):
    if bookings.get(customer, {}).get(movie, 0) < n:
        return f"{customer} cannot cancel {n}: not booked"
    bookings[customer][movie] -= n
    db[movie]["seats"] += n
    return f"{customer} cancelled {n}. Refund: {db[movie]['price'] * n * 0.5}"

print(book("Asha", "Drishyam", 3))
print(cancel("Asha", "Drishyam", 5))
print(cancel("Asha", "Drishyam", 2))
print(bookings, db["Drishyam"]["seats"])`, out: R`
Asha booked 3 for Drishyam
Asha cannot cancel 5: not booked
Asha cancelled 2. Refund: 500.0
{'Asha': {'Drishyam': 1}} 39` }
    ]},
    { t: "h", text: "Where to go next" },
    { t: "table", head: ["Next", "Why", "Builds on"], rows: [
      ["**pandas**", "Tables (DataFrames): read CSV/Excel, clean, filter, group, merge", "Dictionaries, lists, NumPy masks and axis"],
      ["**Matplotlib / Seaborn**", "Charts: line, bar, histogram, scatter", "Lists and arrays of numbers"],
      ["**SQL + Python**", "Pull data from databases into pandas", "Strings, loops, functions"],
      ["**A portfolio project**", "One real dataset, cleaned and analysed end to end, with a short write-up", "Everything in this hub"]
    ]},
    { t: "note", k: "why", b: "Every project above follows the same shape as real analysis work: **load** data, **clean** it, **calculate** something, **report** it, **save** it. With pandas the steps become shorter, but the thinking is exactly what you practised here." }
  ],
  take: [
    "Plan the data structure first, then turn each action into a function.",
    "Test functions with fixed values before adding `input()` and menus.",
    "Save state with pickle (or JSON) so it survives a restart.",
    "Use each collection for its strength: dict for lookup, set for unique, list for history, tuple for fixed facts.",
    "Indentation is logic: a misplaced `return` changes what a function does."
  ],
  quiz: [
    { q: "In the movie system, why do `book()` and `cancel()` return a message instead of printing it?", o: ["Printing is slower", "Returned values are easy to test and reuse", "print() does not work in functions", "Pickle needs strings"], a: 1, e: "A returned message can be printed, logged or checked in a test." },
    { q: "Why does `load_db()` catch `FileNotFoundError`?", o: ["To delete old files", "The first time the program runs, no save file exists yet, so it starts with default data", "Pickle always raises it", "To speed up loading"], a: 1, e: "Without it, the very first run would crash." },
    { q: "Which collection does the inventory system use for categories, and why?", o: ["list, to keep order", "set, so each category is stored only once", "tuple, so it cannot change", "dict, for fast lookup"], a: 1, e: "A set ignores duplicates automatically." },
    { q: "Why are an item's name, category and price stored in a tuple?", o: ["Tuples are the only type pickle can save", "They are fixed facts that should not change by accident", "Tuples allow duplicates", "Tuples are sortable"], a: 1, e: "Immutability protects data that should stay fixed." },
    { q: "What goes wrong if `return result` is indented inside the for loop of `low_stock()`?", o: ["Nothing", "It returns after checking only the first item", "It raises IndentationError", "It returns None"], a: 1, e: "return ends the function the first time it runs, which would be during the first loop round." },
    { q: "In the theater program, what happens when the user types \"five\" for the number of tickets?", o: ["The program crashes", "int() raises ValueError, the except block prints a message, and the loop asks again", "It books 5 tickets", "It books 0 tickets"], a: 1, e: "That is the while True + try/except validation pattern." }
  ],
  cards: [
    ["Steps to build a small program", "Describe it, choose the data structure, write one function per action, test with fixed values, add the menu loop, handle bad input."],
    ["The menu loop pattern", "", R`
while True:
    choice = input("1 Book 2 Cancel 3 Exit: ")
    if choice == "1": ...
    elif choice == "2": ...
    elif choice == "3":
        break
    else:
        print("Invalid choice")`],
    ["How do you make data survive a restart?", "Save it to a file on exit (pickle or JSON) and load it on start, catching FileNotFoundError for the first run."],
    ["Dict of lists: add an item for a key that may not exist", "`d.setdefault(key, []).append(item)`"],
    ["Which collection for: history of transactions? unique categories? item lookup by ID? fixed item facts?", "list, set, dict, tuple."]
  ],
  cheat: [
    ["while True:\n    choice = input(...)\n    if choice == \"3\": break", "Menu loop"],
    ["try:\n    with open(\"db.pkl\", \"rb\") as f:\n        db = pickle.load(f)\nexcept FileNotFoundError:\n    db = default", "Load saved data or start fresh"],
    ["d.setdefault(k, []).append(x)", "Group items under a key"],
    ["f\"ITEM{n:04d}\"", "Make IDs like ITEM0001"],
    ["sorted(d.items(), key=lambda x: x[1], reverse=True)", "Sort a dict by value, biggest first"]
  ]
});
