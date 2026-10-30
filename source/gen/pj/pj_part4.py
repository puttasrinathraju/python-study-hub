# Part 4 projects (chapters 14-15): Parts 1-3 + functions, parameters, defaults, return, *args/**kwargs, scope,
# lambda, map/filter, recursion, iterators, generators, decorators. No try/except, imports, files or classes yet.
from fractions import Fraction as Fr
PART = 4
TITLE = 'Part 4 projects: functions'
INTRO = ('Three programs built from small, reusable functions, the way real analysis scripts are written. '
         'Each brief names the functions to write. You may use everything up to Part 4, but no `try`, `import`, files or classes yet.')
NOT_YET = ['`try` / `except`', '`import`', 'files', 'classes']
def safe(x):  # an exact value whose 3rd decimal is a 5 could round differently in floats: keep tests away from it
    assert (Fr(x) * 100) % 1 != Fr(1, 2), x
    return x

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i):
    rows, out = [], []
    for line in i:
        if line.strip().lower() == 'done': break
        name, qty, price = [p.strip() for p in line.split(',')]
        total = int(qty) * Fr(price); rows.append(total)
        out.append('%s x %s = ₹%s' % (name, int(qty), format(float(safe(total)), ',.2f')))
    if not rows: return ['No items']
    sub = sum(rows); disc = sub * (Fr(10, 100) if sub >= 10000 else Fr(5, 100) if sub >= 5000 else 0)
    gst = (sub - disc) * Fr(18, 100)
    m = lambda x: '₹' + format(float(safe(x)), ',.2f')
    return out + ['Subtotal: ' + m(sub), 'Discount: ' + m(disc), 'GST (18%): ' + m(gst), 'Grand total: ' + m(sub - disc + gst)]

P1 = dict(
    id='p4-1', level=1, title='GST invoice builder', short='Build a shop invoice from small functions: line totals, discount and GST.',
    story=('Suresh owns an office-supplies shop in Visakhapatnam. His billing is done on paper, and mistakes in the discount or GST are common.\n'
           'Write a program that reads the items of one bill (`item,qty,price`) until `done`, and prints a clean invoice: one line per item, the subtotal, the discount, 18% GST on the amount after discount, and the grand total. '
           'The shop gives **5% off** bills of ₹5,000 or more and **10% off** bills of ₹10,000 or more.\n'
           'The point of this project is to put each calculation in **its own small function**, so it can be checked and reused.'),
    objectives=['Write small functions that take parameters and `return` a value', 'Use a default parameter value',
                'Call your functions from the main part of the program', 'Format an invoice cleanly'],
    may=['everything from Parts 1-3', '`def`, parameters, `return`', 'default values', '`lambda`'],
    mustnot=NOT_YET,
    tasks=['Write `line_total(qty, price)` that returns qty × price.',
           'Write `discount_for(subtotal)` that returns the discount **amount**: 10% of the subtotal for ₹10,000 or more, 5% for ₹5,000 or more, otherwise 0.',
           'Write `gst_amount(amount, rate=18)` that returns `rate`% of the amount.',
           'In a loop, ask `Item (name,qty,price) or done: `. Stop at `done` (any capitals, spaces are fine). Split each row at the commas and strip each part. The quantity is a whole number; the price can have paise.',
           'For each item, print `Tea x 3 = ₹60.00` using `line_total()`, and add it to the subtotal.',
           'If no items were entered, print `No items`.',
           'Otherwise print the subtotal, the discount, the GST (on the subtotal minus the discount) and the grand total, using your functions.',
           'Add a docstring or a comment to each function saying what it returns.'],
    lines=['<item> x <qty> = ₹<amount>', 'Subtotal: ₹<amount>', 'Discount: ₹<amount>', 'GST (18%): ₹<amount>', 'Grand total: ₹<amount>', 'No items'],
    rules='All money uses `₹`, commas and 2 decimals (`:,.2f`). The item name is printed as typed, without the spaces around it. Rows are always `name,qty,price` with 3 parts.',
    edge=['`done` straight away: print `No items`.',
          'A subtotal of **exactly ₹5,000** or **₹10,000** gets the discount (`>=`).',
          'GST is worked out on the amount **after** the discount.',
          'Prices with **paise**, like `12.75`.',
          'Spaces around the parts of a row, and `DONE` in capitals.',
          'Very **big** bills with commas.'],
    hints=['Start with the three functions at the top. Each one is 2-5 lines: for example `def line_total(qty, price):` then `return qty * price`.',
           '`discount_for()` needs `if subtotal >= 10000: return subtotal * 10 / 100`, then an `elif` for 5000, and `return 0` at the end.',
           'In the main loop, split the row: `name, qty, price = [part.strip() for part in row.split(",")]`, then convert with `int(qty)` and `float(price)`. After the loop: `discount = discount_for(subtotal)` and `gst = gst_amount(subtotal - discount)`.'],
    starter='# Project 4.1: GST invoice builder\n',
    sol='''# Project 4.1: GST invoice builder
def line_total(qty, price):
    """Return the total for one line of the bill."""
    return qty * price


def discount_for(subtotal):
    """Return the discount amount: 10% from 10,000, 5% from 5,000."""
    if subtotal >= 10000:
        return subtotal * 10 / 100
    elif subtotal >= 5000:
        return subtotal * 5 / 100
    return 0


def gst_amount(amount, rate=18):
    """Return the GST on an amount."""
    return amount * rate / 100


subtotal = 0
item_count = 0
while True:
    row = input("Item (name,qty,price) or done: ")
    if row.strip().lower() == "done":
        break
    name, qty, price = [part.strip() for part in row.split(",")]
    total = line_total(int(qty), float(price))
    print(f"{name} x {int(qty)} = ₹{total:,.2f}")
    subtotal += total
    item_count += 1

if item_count == 0:
    print("No items")
else:
    discount = discount_for(subtotal)
    gst = gst_amount(subtotal - discount)
    print(f"Subtotal: ₹{subtotal:,.2f}")
    print(f"Discount: ₹{discount:,.2f}")
    print(f"GST (18%): ₹{gst:,.2f}")
    print(f"Grand total: ₹{subtotal - discount + gst:,.2f}")''',
    weak='''s = 0
while True:
    r = input("Item: ")
    if r == "done":
        break
    p = r.split(",")
    t = int(p[1]) * float(p[2])
    print(f"{p[0]} x {p[1]} = ₹{t:,.2f}")
    s += t
d = 0
if s > 10000:
    d = s * 0.1
elif s > 5000:
    d = s * 0.05
g = s * 0.18
print(f"Subtotal: ₹{s:,.2f}")
print(f"Discount: ₹{d:,.2f}")
print(f"GST (18%): ₹{g:,.2f}")
print(f"Grand total: ₹{s - d + g:,.2f}")''',
    need=[dict(any=['def:line_total'], min=1, label='a `line_total()` function'),
          dict(any=['def:discount_for'], min=1, label='a `discount_for()` function'),
          dict(any=['def:gst_amount'], min=1, label='a `gst_amount()` function'),
          dict(any=['node:Return'], min=3, label='`return` to send results back'),
          dict(any=['def:default'], min=1, label='a default parameter value (`rate=18`)'),
          dict(any=['node:While', 'node:For'], min=1, label='a loop to read the items'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A small bill', kind='main', inputs=['Tea,3,20', 'Coffee,2,45', 'Sandwich,1,120', 'done']),
           dict(name='A bill with 5% off', kind='main', inputs=['Laptop bag,2,1850', 'Mouse,3,450', 'Keyboard,1,1200', 'done']),
           dict(name='A bill with 10% off', kind='main', inputs=['Office chair,4,2500', 'Desk,1,4000', 'done']),
           dict(name='Exactly ₹5,000 gets 5% off', kind='logic', inputs=['Printer,1,5000', 'done'], check=['Discount', 'GST', 'Grand'],
                tip='"₹5,000 or more" means `>= 5000`. The same goes for ₹10,000.'),
           dict(name='GST comes after the discount', kind='logic', inputs=['Projector,2,6000', 'done'], check=['Discount', 'GST', 'Grand'],
                tip='Work out GST on `subtotal - discount`, not on the full subtotal.'),
           dict(name='Each line is qty × price', kind='logic', inputs=['Pen,10,12.5', 'Pad,4,37.25', 'done'], check=['Pen', 'Pad', 'Subtotal'],
                tip='`line_total()` multiplies the quantity by the price, and the price can have paise, so use `float()` for it.'),
           dict(name='No items', kind='edge', inputs=['done'],
                tip='When `done` comes first, print `No items` and skip the totals.'),
           dict(name='Spaces and capitals', kind='edge', inputs=[' Rice , 2 , 60 ', 'Biscuits,3,24.50', ' DONE '],
                tip='Strip every part of the row, and compare `row.strip().lower()` with `done`.'),
           dict(name='A very big bill', kind='edge', inputs=['Server,3,250000', 'done'],
                tip='Big amounts need commas: `:,.2f`.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def tax2(g):
    if g <= 25000: return 0
    if g <= 50000: return (g - 25000) * 10 // 100
    return 2500 + (g - 50000) * 20 // 100
def exp2(i):
    rows = []
    for line in i:
        if line.strip().lower() == 'done': break
        n, b, h = [p.strip() for p in line.split(',')]
        g = int(b) + int(h) * 250; rows.append((' '.join(n.split()).title(), g, tax2(g), int(h) * 250))
    if not rows: return ['No employees']
    rows.sort(key=lambda r: r[0]); rows.sort(key=lambda r: r[1] - r[2], reverse=True)
    out = ['%d. %s: gross ₹%s, tax ₹%s, net ₹%s' % (k, n, format(g, ','), format(t, ','), format(g - t, ',')) for k, (n, g, t, o) in enumerate(rows, 1)]
    net = sum(g - t for n, g, t, o in rows)
    return out + ['Employees: %d' % len(rows), 'Total net pay: ₹' + format(net, ','), 'Average net pay: ₹' + format(float(safe(Fr(net, len(rows)))), ',.2f'),
                  'Total tax: ₹' + format(sum(r[2] for r in rows), ','), 'Overtime cost: ₹' + format(sum(r[3] for r in rows), ',')]

P2 = dict(
    id='p4-2', level=2, title='Monthly payroll', short='Work out pay and tax for each employee with functions, then rank them.',
    story=('Fatima is the HR analyst at a logistics company in Hyderabad. Every month she works out each employee\'s pay from their basic salary and overtime, '
           'deducts income tax using simple slabs, and sends a ranked summary to the finance team.\n'
           'Overtime is paid at **₹250 per hour** (keep this as a default value, because it may change). The company uses whole rupees, and tax is **rounded down**:\n'
           '- no tax on the first ₹25,000 of gross pay,\n- 10% on the part from ₹25,000 to ₹50,000,\n- 20% on the part above ₹50,000.\n'
           'Write the calculations as functions, read the employees until `done`, and print the ranked payroll and the totals.'),
    objectives=['Split a business rule into functions that call each other', 'Use default parameter values for rates',
                'Sort records with `key=lambda` and a tie rule', 'Summarise a list of records'],
    may=['everything from Parts 1-3', '`def`, `return`, default values', '`lambda` with `sorted()`', 'tuples and lists of records'],
    mustnot=NOT_YET,
    tasks=['Write `gross_pay(basic, hours, rate=250)` that returns basic + hours × rate.',
           'Write `income_tax(gross)` that returns the tax using the slabs above, rounded down to whole rupees with `//`.',
           'Write `net_pay(gross)` that returns gross − `income_tax(gross)` (one function calling another).',
           'Read rows `name,basic,hours` until `done` (any capitals). Strip the parts, clean the name (no extra spaces, title case) and convert the numbers with `int()`.',
           'Store each employee as a record, for example a tuple `(name, gross, tax, net)`, in a list.',
           'If there are no employees, print `No employees`. Otherwise rank them by net pay, highest first; equal net pay goes A to Z by name.',
           'Print one line per employee: `1. Neha: gross ₹54,500, tax ₹3,400, net ₹51,100`.',
           'Print `Employees`, `Total net pay`, `Average net pay` (2 decimals), `Total tax` and `Overtime cost` (all overtime paid).'],
    lines=['<rank>. <Name>: gross ₹<amount>, tax ₹<amount>, net ₹<amount>', 'Employees: <count>', 'Total net pay: ₹<amount>',
           'Average net pay: ₹<amount with 2 decimals>', 'Total tax: ₹<amount>', 'Overtime cost: ₹<amount>', 'No employees'],
    rules='Amounts are whole rupees with commas (`:,`), like `₹54,500`. Only the average has 2 decimals (`:,.2f`).',
    edge=['`done` straight away: `No employees`.',
          'Gross pay **exactly on a slab edge** (₹25,000 or ₹50,000).',
          'Tax rounding: 10% of ₹10 is ₹1, but 10% of ₹5 is ₹0 (rounded down).',
          'Two employees with the **same net pay**: A to Z.',
          'A very **high salary** (the 20% slab).',
          'Names typed in small letters or with extra spaces.'],
    hints=['`income_tax()` needs three cases: `if gross <= 25000: return 0`, `elif gross <= 50000: return (gross - 25000) * 10 // 100`, else `return 2500 + (gross - 50000) * 20 // 100` (2500 is the full tax of the 10% slab).',
           'Keep a list `employees = []` and `append((name, gross, tax, net))` for every row. Overtime cost is `hours * 250` per employee, added up.',
           'Rank with two sorts: `employees.sort(key=lambda e: e[0])` (A to Z), then `employees.sort(key=lambda e: e[3], reverse=True)`. Python keeps the A to Z order for equal net pay. Then `for rank, (name, gross, tax, net) in enumerate(employees, start=1):`.'],
    starter='# Project 4.2: Monthly payroll\n',
    sol='''# Project 4.2: Monthly payroll
def gross_pay(basic, hours, rate=250):
    """Return basic pay plus overtime."""
    return basic + hours * rate


def income_tax(gross):
    """Return the tax on gross pay, rounded down to whole rupees."""
    if gross <= 25000:
        return 0
    elif gross <= 50000:
        return (gross - 25000) * 10 // 100
    return 2500 + (gross - 50000) * 20 // 100


def net_pay(gross):
    """Return the pay after tax."""
    return gross - income_tax(gross)


employees = []
overtime_cost = 0
while True:
    row = input("Employee (name,basic,hours) or done: ")
    if row.strip().lower() == "done":
        break
    name, basic, hours = [part.strip() for part in row.split(",")]
    name = " ".join(name.split()).title()
    gross = gross_pay(int(basic), int(hours))
    employees.append((name, gross, income_tax(gross), net_pay(gross)))
    overtime_cost += int(hours) * 250

if not employees:
    print("No employees")
else:
    # A to Z first, then by net pay: equal net pay stays A to Z
    employees.sort(key=lambda e: e[0])
    employees.sort(key=lambda e: e[3], reverse=True)
    for rank, (name, gross, tax, net) in enumerate(employees, start=1):
        print(f"{rank}. {name}: gross ₹{gross:,}, tax ₹{tax:,}, net ₹{net:,}")
    total_net = sum(e[3] for e in employees)
    print(f"Employees: {len(employees)}")
    print(f"Total net pay: ₹{total_net:,}")
    print(f"Average net pay: ₹{total_net / len(employees):,.2f}")
    print(f"Total tax: ₹{sum(e[2] for e in employees):,}")
    print(f"Overtime cost: ₹{overtime_cost:,}")''',
    weak='''def tax(g):
    if g < 25000:
        return 0
    elif g < 50000:
        return (g - 25000) * 0.1
    return (g - 50000) * 0.2

emp = []
ot = 0
while True:
    r = input("Row: ")
    if r == "done":
        break
    n, b, h = r.split(",")
    g = int(b) + int(h) * 250
    emp.append((n, g, tax(g), g - tax(g)))
    ot += int(h) * 250
emp.sort(key=lambda e: e[3], reverse=True)
k = 1
for n, g, t, net in emp:
    print(f"{k}. {n}: gross ₹{g:,}, tax ₹{t:,.0f}, net ₹{net:,.0f}")
    k += 1
print(f"Employees: {len(emp)}")
print(f"Total net pay: ₹{sum(e[3] for e in emp):,.0f}")
print(f"Overtime cost: ₹{ot:,}")''',
    need=[dict(any=['def:gross_pay'], min=1, label='a `gross_pay()` function'),
          dict(any=['def:income_tax'], min=1, label='an `income_tax()` function'),
          dict(any=['def:net_pay'], min=1, label='a `net_pay()` function that calls `income_tax()`'),
          dict(any=['def:default'], min=1, label='a default parameter value (`rate=250`)'),
          dict(any=['op:FloorDiv'], min=1, label='`//` to round the tax down'),
          dict(any=['node:Lambda'], min=1, label='`lambda` to sort the records'),
          dict(any=['spec:comma'], min=1, label='the `:,` format for amounts')],
    expect=exp2,
    tests=[dict(name='Three employees', kind='main', inputs=['Asha,45000,8', 'Ravi,22000,0', 'Neha,52000,10', 'done']),
           dict(name='A tie and messy names', kind='main', inputs=['imran , 30000, 4', 'PRIYA,30000,4', 'zoya  khan,18000,20', 'DONE']),
           dict(name='A senior and a junior', kind='main', inputs=['Kiran,80000,0', 'Meena,25000,0', 'done']),
           dict(name='Tax slab edges', kind='logic', inputs=['Anil,25000,0', 'Bina,25010,0', 'Chetan,50000,0', 'Deepa,50010,0', 'done'], check=['1.', '2.', '3.', '4.', 'Total tax'],
                tip='No tax up to ₹25,000. Then 10% of the part above ₹25,000 (₹10 → ₹1), and above ₹50,000: ₹2,500 + 20% of the part above ₹50,000. Round down with `//`.'),
           dict(name='Overtime is ₹250 per hour', kind='logic', inputs=['Asha,20000,12', 'done'], check=['1.', 'Overtime'],
                tip='Gross pay = basic + hours × 250. Overtime cost adds up hours × 250 for everyone.'),
           dict(name='Equal net pay goes A to Z', kind='logic', inputs=['Zara,30000,0', 'Arun,30000,0', 'done'], check=['1.', '2.'],
                tip='Sort A to Z by name first, then by net pay with `reverse=True`. The second sort keeps the A to Z order for ties.'),
           dict(name='No employees', kind='edge', inputs=['done'],
                tip='When `done` comes first, print `No employees` and nothing else (no average: that would divide by 0).'),
           dict(name='One employee, no overtime', kind='edge', inputs=['Asha,40000,0', 'done'],
                tip='With one employee, the average net pay is their own net pay, with 2 decimals.'),
           dict(name='A very high salary', kind='edge', inputs=['Ceo,500000,0', 'done'],
                tip='Above ₹50,000 the tax is ₹2,500 for the 10% slab plus 20% of the rest.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
def valid3(t): return t.replace('.', '', 1).isdigit() and float(t) > 0
def exp3(i):
    prices, skipped = [], 0
    for line in i:
        t = line.strip()
        if t.lower() == 'end': break
        if valid3(t): prices.append(float(t))
        else: skipped += 1
    out = ['Days: %d' % len(prices), 'Skipped: %d' % skipped]
    if not prices: return out + ['No prices to analyse']
    F = [Fr(x).limit_denominator(1000) for x in prices]
    pc = lambda a, b: safe((b - a) / a * 100)
    m = lambda x: '₹' + format(x, ',.2f')
    hi = prices.index(max(prices)) + 1; lo = prices.index(min(prices)) + 1
    out += ['First price: ' + m(prices[0]), 'Last price: ' + m(prices[-1]), 'Overall change: %.2f%%' % float(pc(F[0], F[-1])),
            'Highest: %s on day %d' % (m(max(prices)), hi), 'Lowest: %s on day %d' % (m(min(prices)), lo)]
    avgs = [safe(sum(F[k:k + 3]) / 3) for k in range(len(F) - 2)]
    out.append('3-day averages: ' + (', '.join(format(float(a), ',.2f') for a in avgs) if avgs else 'not enough data'))
    if len(F) < 2: out.append('Best day: none')
    else:
        ch = [pc(F[k - 1], F[k]) for k in range(1, len(F))]; b = ch.index(max(ch))
        out.append('Best day: day %d (%.2f%%)' % (b + 2, float(ch[b])))
    best = run = 0
    for k in range(1, len(F)):
        run = run + 1 if F[k] > F[k - 1] else 0; best = max(best, run)
    return out + ['Longest rising streak: %d days' % best]

P3 = dict(
    id='p4-3', level=3, title='Stock price tracker', short='Read daily closing prices through a generator and analyse the trend with your own functions.',
    story=('Deepak follows one NSE stock and writes down its closing price every day. Sometimes he types junk: `N/A` on a holiday, a price with a comma, or 0.\n'
           'He wants a small analysis tool: how much the price changed overall, the highest and lowest days, the **3-day moving averages** that traders use to smooth out the noise, '
           'the best single day (the biggest **percentage** rise), and the longest run of rising days.\n'
           'Build it from functions, and read the input through a **generator** that hands out one line at a time, like a real data pipeline. '
           'This is practice in analysis, not investment advice.'),
    objectives=['Write a generator that reads input lazily with `yield`', 'Validate text before converting it',
                'Write functions that return lists and numbers from a list of prices', 'Combine `max()` / `index()` or a lambda to find the best day'],
    may=['everything from Parts 1-3', '`def`, `return`, defaults', 'generators and `yield`', '`lambda`, `map()`, `filter()`'],
    mustnot=NOT_YET,
    tasks=['Write a generator `read_lines()` that keeps asking `Closing price (or end): `, stops when the user types `end` (any capitals, spaces around it are fine), and yields every other line without its outer spaces.',
           'Write `is_valid_price(text)`: `True` only if the text is a number with at most one decimal point (no commas, no minus sign) and is more than 0. Hint: `text.replace(".", "", 1).isdigit()`.',
           'Write `percent_change(old, new)` that returns (new − old) ÷ old × 100.',
           'Write `moving_averages(prices, window=3)` that returns a list with the average of every 3 days in a row (days 1-3, 2-4, ...).',
           'Write `longest_rising_streak(prices)` that returns the most day-to-day rises in a row (prices 10, 11, 12 have a streak of 2).',
           'Read the prices with your generator, keep the valid ones as floats, and count the skipped ones. Print `Days` and `Skipped`. With no valid prices, print `No prices to analyse` and stop.',
           'Print the first and last price, the overall change (first to last), and the highest and lowest price with the day they happened (the first such day if repeated).',
           'Print the 3-day averages joined with `, ` (or `not enough data` for fewer than 3 days), the best day (biggest percentage change from the day before; `none` with only 1 day), and the longest rising streak.'],
    lines=['Days: <count>', 'Skipped: <count>', 'First price: ₹<amount>', 'Last price: ₹<amount>', 'Overall change: <number>%',
           'Highest: ₹<amount> on day <n>', 'Lowest: ₹<amount> on day <n>', '3-day averages: <number>, <number>, ...', 'Best day: day <n> (<number>%)',
           'Longest rising streak: <n> days', 'No prices to analyse'],
    rules='Prices and averages use commas and 2 decimals (`:,.2f`); percentages use 2 decimals (`:.2f`) and a `%` sign. Day 1 is the first **valid** price. Write `days` even for 0 or 1. Use `3-day averages: not enough data` and `Best day: none` when there is too little data.',
    edge=['**Junk lines** like `N/A`, `1,520`, `-5`, `0` and `12.5.3` are skipped and counted.',
          'Only **one** valid price: overall change 0.00%, no averages, no best day, a streak of 0.',
          'Exactly **two** prices: still not enough for a 3-day average.',
          'The best day is the biggest **percentage** rise, not the biggest rupee rise.',
          'A price that **falls every day**: the best day is the smallest fall.',
          '`END` in capitals ends the input.'],
    hints=['The generator: `def read_lines():` with `while True:` inside; read `line = input(...).strip()`, `if line.lower() == "end": return`, else `yield line`. Then `for text in read_lines():` in the main program.',
           '`moving_averages()`: loop `for start in range(len(prices) - window + 1):` and average `prices[start:start + window]`. The streak: walk through the days, add 1 to a counter when today is higher than yesterday, reset it to 0 otherwise, and keep the biggest value.',
           'For the best day, build the list of changes `changes = [percent_change(prices[d - 1], prices[d]) for d in range(1, len(prices))]`. The best day number is `changes.index(max(changes)) + 2` (change 0 is day 2). Highest day: `prices.index(max(prices)) + 1`.'],
    starter='# Project 4.3: Stock price tracker\n',
    sol='''# Project 4.3: Stock price tracker
def read_lines():
    """Yield each typed line until the user types end."""
    while True:
        line = input("Closing price (or end): ").strip()
        if line.lower() == "end":
            return
        yield line


def is_valid_price(text):
    """Return True for a positive number with at most one decimal point."""
    return text.replace(".", "", 1).isdigit() and float(text) > 0


def percent_change(old, new):
    """Return the change from old to new in percent."""
    return (new - old) / old * 100


def moving_averages(prices, window=3):
    """Return the average of every run of `window` days."""
    averages = []
    for start in range(len(prices) - window + 1):
        averages.append(sum(prices[start:start + window]) / window)
    return averages


def longest_rising_streak(prices):
    """Return the most day-to-day rises in a row."""
    best = 0
    current = 0
    for day in range(1, len(prices)):
        if prices[day] > prices[day - 1]:
            current += 1
        else:
            current = 0
        best = max(best, current)
    return best


prices = []
skipped = 0
for text in read_lines():
    if is_valid_price(text):
        prices.append(float(text))
    else:
        skipped += 1

print(f"Days: {len(prices)}")
print(f"Skipped: {skipped}")
if not prices:
    print("No prices to analyse")
else:
    print(f"First price: ₹{prices[0]:,.2f}")
    print(f"Last price: ₹{prices[-1]:,.2f}")
    print(f"Overall change: {percent_change(prices[0], prices[-1]):.2f}%")
    print(f"Highest: ₹{max(prices):,.2f} on day {prices.index(max(prices)) + 1}")
    print(f"Lowest: ₹{min(prices):,.2f} on day {prices.index(min(prices)) + 1}")

    averages = moving_averages(prices)
    if averages:
        print("3-day averages: " + ", ".join(f"{a:,.2f}" for a in averages))
    else:
        print("3-day averages: not enough data")

    if len(prices) < 2:
        print("Best day: none")
    else:
        changes = [percent_change(prices[d - 1], prices[d]) for d in range(1, len(prices))]
        best = changes.index(max(changes))
        print(f"Best day: day {best + 2} ({changes[best]:.2f}%)")
    print(f"Longest rising streak: {longest_rising_streak(prices)} days")''',
    weak='''def avg3(p):
    return [sum(p[i:i + 3]) / 3 for i in range(len(p) - 2)]

p = []
s = 0
while True:
    t = input("Price: ")
    if t == "end":
        break
    if t.isdigit():
        p.append(float(t))
    else:
        s += 1
print(f"Days: {len(p)}")
print(f"Skipped: {s}")
print(f"First price: ₹{p[0]:,.2f}")
print(f"Last price: ₹{p[-1]:,.2f}")
print(f"Overall change: {(p[-1] - p[0]) / p[0] * 100:.2f}%")
print(f"Highest: ₹{max(p):,.2f} on day {p.index(max(p)) + 1}")
print(f"Lowest: ₹{min(p):,.2f} on day {p.index(min(p)) + 1}")
print("3-day averages: " + ", ".join(f"{a:,.2f}" for a in avg3(p)))
gains = [p[i] - p[i - 1] for i in range(1, len(p))]
b = gains.index(max(gains))
print(f"Best day: day {b + 2} ({gains[b] / p[b] * 100:.2f}%)")''',
    need=[dict(any=['node:Yield'], min=1, label='a generator with `yield` to read the lines'),
          dict(any=['def:read_lines'], min=1, label='a `read_lines()` generator'),
          dict(any=['def:is_valid_price'], min=1, label='an `is_valid_price()` function'),
          dict(any=['def:percent_change'], min=1, label='a `percent_change()` function'),
          dict(any=['def:moving_averages'], min=1, label='a `moving_averages()` function'),
          dict(any=['def:longest_rising_streak'], min=1, label='a `longest_rising_streak()` function'),
          dict(any=['def:default'], min=1, label='a default parameter value (`window=3`)'),
          dict(any=['node:Return'], min=4, label='`return` to send results back')],
    expect=exp3,
    tests=[dict(name='Eight trading days', kind='main', inputs=['1520', '1498', 'N/A', '1505', '1530', '1579', '1650', '1612', '1604.5', 'end']),
           dict(name='A short week', kind='main', inputs=['245.5', '250', '248.75', '255', 'end']),
           dict(name='Falling every day', kind='main', inputs=['98', '97', '96', '95', 'end']),
           dict(name='Best day is the biggest % rise', kind='logic', inputs=['1000', '1100', '100', '125', 'end'], check=['Best day'],
                tip='Compare **percentage** changes, not rupee changes: +₹100 on ₹1,000 is 10%, but +₹25 on ₹100 is 25%.'),
           dict(name='Rising streak counts rises in a row', kind='logic', inputs=['10', '11', '12', '11', '12', '13', '14', 'end'], check=['Longest'],
                tip='Count rises in a row and reset to 0 when a day is not higher. Prices 11, 12, 13, 14 give 3 rises in a row.'),
           dict(name='Averages use 3 days at a time', kind='logic', inputs=['10', '20', '30', '40', 'end'], check=['3-day'],
                tip='Average days 1-3, then 2-4, and so on: 4 prices give 2 averages.'),
           dict(name='Nothing valid', kind='edge', inputs=['abc', '-5', '0', 'end'],
                tip='Skip text that is not a positive number (minus signs, 0, words). With no prices, print `No prices to analyse` after the counts.'),
           dict(name='Just one price', kind='edge', inputs=['1500', ' END '],
                tip='With one price: overall change 0.00%, `not enough data` for averages, `Best day: none`, and a streak of 0 days.'),
           dict(name='Messy entries', kind='edge', inputs=[' 2,450 ', '2450', ' 2460.5 ', '12.5.3', '2471', 'end'],
                tip='Strip the spaces, then check the text: `2,450` and `12.5.3` are not valid prices. `2460.5` is.')],
)

PROJECTS = [P1, P2, P3]
