# Part 7 projects (chapters 20-22): everything before + NumPy arrays, vectorised maths, broadcasting, statistics,
# axis, boolean masks, sorting/unique, splitting, searching and ufuncs. Exact random values are never checked.
from fractions import Fraction as Fr
PART = 7
TITLE = 'Part 7 projects: NumPy for analysis'
INTRO = ('Three analysis jobs where NumPy does the heavy lifting: a weekly sales summary, a store-by-month sales matrix, '
         'and a discount what-if table built with broadcasting. Use arrays and vectorised maths instead of loops wherever you can.')
NOT_YET = ['pandas (not in this course yet)']
def safe(x):
    assert (Fr(x) * 100) % 1 != Fr(1, 2), x
    return float(x)
def money(x): return '₹' + format(safe(x), ',.2f')
def pct(x): assert (Fr(x) * 10) % 1 != Fr(1, 2), x; return format(float(x), '.1f') + '%'
def num(t): return Fr(t)  # exact value of a typed number

# ---------------------------------------------------------------- Project 1 (Beginner)
DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
def exp1(i):
    parts = i[0].split()
    if len(parts) != 7: return ['Please enter exactly 7 numbers']
    try: v = [num(p) for p in parts]
    except ValueError: return ['Please enter numbers only']
    tot = sum(v); avg = tot / 7
    b = v.index(max(v)); w = v.index(min(v))
    above = [DAYS[k] for k in range(7) if v[k] > avg]
    return ['Total: ' + money(tot), 'Average: ' + money(avg), 'Best day: %s (%s)' % (DAYS[b], money(v[b])), 'Worst day: %s (%s)' % (DAYS[w], money(v[w])),
            'Days above average: ' + (', '.join(above) or 'none'), 'Weekend share: ' + pct((v[5] + v[6]) / tot * 100 if tot else 0)]

P1 = dict(
    id='p7-1', level=1, title='Weekly sales with NumPy', short='Summarise a week of sales with arrays, argmax and a boolean mask.',
    story=('Sunita manages a bakery in Kochi. Every Sunday night she types the 7 daily sales totals of the week into her laptop and wants a quick summary: the total, the average, '
           'the best and worst day, which days beat the average, and how much of the week\'s money came in at the weekend.\n'
           'Write it with **NumPy**: put the 7 numbers in an array and let NumPy do the maths, with no loops for the calculations.'),
    objectives=['Turn typed text into a NumPy array', 'Use `sum()`, `mean()`, `argmax()` and `argmin()`',
                'Filter with a boolean mask', 'Check the input and handle bad values'],
    may=['everything from Parts 1-6', '`numpy` arrays and their methods', 'boolean masks', '`try` / `except`'],
    mustnot=NOT_YET,
    tasks=['The starter imports NumPy and gives you `DAYS`, the 7 day names from Monday to Sunday.',
           'Ask `Sales for Mon to Sun (7 numbers): ` and split the line at the spaces. If there are not exactly 7 parts, print `Please enter exactly 7 numbers` and stop.',
           'Convert the parts with `float()` inside `try`. If one is not a number, print `Please enter numbers only` and stop.',
           'Make a NumPy array of the 7 values. Print `Total` and `Average`.',
           'Print the best day and the worst day with their sales, using `argmax()` and `argmin()` (on a tie, the earlier day).',
           'Print the days whose sales are **above** the average, using a boolean mask on an array of the day names (or `none`).',
           'Print the weekend share: Saturday + Sunday as a percent of the total, with 1 decimal. If the total is 0, the share is `0.0%`.'],
    lines=['Total: ₹<amount>', 'Average: ₹<amount>', 'Best day: <Day> (₹<amount>)', 'Worst day: <Day> (₹<amount>)', 'Days above average: <Day>, <Day> or none',
           'Weekend share: <percent>%', 'Please enter exactly 7 numbers', 'Please enter numbers only'],
    rules='Money has `₹`, commas and 2 decimals. The weekend share has 1 decimal and a `%` sign. Day names are the 3-letter names from `DAYS`.',
    edge=['**Not 7 numbers**, or a **word** in the list.', 'Two days with the **same** best or worst sales: the earlier day.',
          'Every day the **same**: no day is above the average.', 'A week with **no sales**: the total is 0, so the share must not divide by it.'],
    hints=['`parts = input(...).split()` then `if len(parts) != 7:`. Inside `try:` build `sales = np.array([float(p) for p in parts])`, and `except ValueError:` print the message.',
           '`sales.argmax()` gives the position of the best day, so `DAYS[sales.argmax()]` is its name and `sales[sales.argmax()]` (or `sales.max()`) its value.',
           'For the mask, make the names an array too: `names = np.array(DAYS)`, then `names[sales > sales.mean()]`. Join them with `", ".join(...)`. The weekend is `sales[5:].sum()`.'],
    starter='# Project 7.1: Weekly sales with NumPy\nimport numpy as np\n\nDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]\n',
    sol='''# Project 7.1: Weekly sales with NumPy
import numpy as np

DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

parts = input("Sales for Mon to Sun (7 numbers): ").split()
if len(parts) != 7:
    print("Please enter exactly 7 numbers")
else:
    try:
        sales = np.array([float(p) for p in parts])
    except ValueError:
        print("Please enter numbers only")
    else:
        total = sales.sum()
        average = sales.mean()
        best = sales.argmax()
        worst = sales.argmin()
        # Boolean mask: the day names where sales beat the average
        above = np.array(DAYS)[sales > average]
        weekend_share = sales[5:].sum() / total * 100 if total > 0 else 0
        print(f"Total: ₹{total:,.2f}")
        print(f"Average: ₹{average:,.2f}")
        print(f"Best day: {DAYS[best]} (₹{sales[best]:,.2f})")
        print(f"Worst day: {DAYS[worst]} (₹{sales[worst]:,.2f})")
        print("Days above average: " + (", ".join(above) or "none"))
        print(f"Weekend share: {weekend_share:.1f}%")''',
    weak='''import numpy as np
DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
s = np.array([float(x) for x in input("Sales: ").split()])
t = 0
for x in s:
    t += x
print(f"Total: ₹{t:,.2f}")
print(f"Average: ₹{t / 7:,.2f}")
print(f"Best day: {DAYS[s.argmax()]} (₹{s.max():,.2f})")
print(f"Worst day: {DAYS[s.argmin()]} (₹{s.min():,.2f})")
print(f"Weekend share: {(s[5] + s[6]) / t * 100:.1f}%")''',
    need=[dict(any=['method:array'], min=1, label='`np.array()` to hold the 7 values'),
          dict(any=['method:sum', 'method:mean'], min=1, label='array methods like `sum()` and `mean()`'),
          dict(any=['method:argmax'], min=1, label='`argmax()` for the best day'),
          dict(any=['method:argmin'], min=1, label='`argmin()` for the worst day'),
          dict(any=['mask'], min=1, label='a boolean mask like `names[sales > average]`'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` for words in the input'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A normal week', kind='main', inputs=['1200 1350 980 1500 1720 2400 2100']),
           dict(name='A quiet week with paise', kind='main', inputs=['450.5 300 300 520 610 980 875.25']),
           dict(name='A festival week', kind='main', inputs=['15000 12000 18000 16500 21000 30000 28000']),
           dict(name='Ties go to the earlier day', kind='logic', inputs=['100 300 100 300 200 50 50'], check=['Best', 'Worst'],
                tip='`argmax()` and `argmin()` return the **first** position when values tie, which is the earlier day. Use them instead of searching by hand.'),
           dict(name='Above average means strictly above', kind='logic', inputs=['500 500 500 500 500 500 500'], check=['Days above', 'Weekend'],
                tip='When every day is equal, no day is **above** the average: use `>`, not `>=`, and print `none`.'),
           dict(name='The weekend is Saturday and Sunday', kind='logic', inputs=['0 0 0 0 0 100 300'], check=['Days above', 'Weekend'],
                tip='The weekend is the last two values (`sales[5:]`), Saturday and Sunday.'),
           dict(name='Not 7 numbers', kind='edge', inputs=['100 200 300'],
                tip='Check `len(parts) != 7` before converting, and print `Please enter exactly 7 numbers`.'),
           dict(name='A word in the list', kind='edge', inputs=['100 200 abc 400 500 600 700'],
                tip='`float("abc")` raises `ValueError`: catch it and print `Please enter numbers only`.'),
           dict(name='Closed all week', kind='edge', inputs=['  0 0 0 0 0 0 0  '],
                tip='With a total of 0, the weekend share would divide by 0: print `0.0%` instead. Every day ties, so Monday is both best and worst.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
MONTHS = ['Jan', 'Feb', 'Mar']
def exp2(i):
    try: n = int(i[0])
    except ValueError: n = 0
    if not 1 <= n <= 10: return ['Number of stores must be 1 to 10']
    names, rows, out, k = [], [], [], 1
    while len(rows) < n:
        p = [x.strip() for x in i[k].split(',')]; k += 1
        try:
            assert len(p) == 4 and p[0]
            r = [num(x) for x in p[1:]]
        except (AssertionError, ValueError):
            out.append('Invalid row, try again'); continue
        names.append(p[0]); rows.append(r)
    tot = [sum(r) for r in rows]; grand = sum(tot); mt = [sum(r[j] for r in rows) for j in range(3)]
    out += ['Total sales: ' + money(grand), 'Monthly totals: ' + ', '.join('%s %s' % (MONTHS[j], money(mt[j])) for j in range(3)),
            'Best month: ' + MONTHS[mt.index(max(mt))]]
    for rank, s in enumerate(sorted(range(n), key=lambda s: -tot[s]), 1):
        out.append('%d. %s: %s (%s)' % (rank, names[s], money(tot[s]), pct(tot[s] / grand * 100 if grand else 0)))
    grow = [names[s] for s in range(n) if rows[s][0] < rows[s][1] < rows[s][2]]
    return out + ['Growing every month: ' + (', '.join(grow) or 'none'), 'Average per store per month: ' + money(grand / (3 * n))]

P2 = dict(
    id='p7-2', level=2, title='Store sales matrix', short='Load a stores-by-months table into a 2D array and analyse it with axis.',
    story=('Vikram is the regional analyst for a chain of mobile shops in Hyderabad. Each quarter he gets the sales of every store for January, February and March, '
           'and his manager always asks the same questions: what was the total, which month was best, how do the stores rank and what share does each bring, and which stores grew every single month?\n'
           'Build the answers from one **2D NumPy array**: one row per store, one column per month. Most answers are one line with `axis=`.'),
    objectives=['Build a 2D array from typed rows', 'Use `sum(axis=0)` and `sum(axis=1)` correctly', 'Rank rows by their totals',
                'Test a condition on every month with `np.diff` and `np.all`'],
    may=['everything from Parts 1-6', 'NumPy arrays, `axis`, masks', '`np.diff`, `np.all`, `argmax`', '`sorted()` with `key=`'],
    mustnot=NOT_YET,
    tasks=['The starter imports NumPy and gives you `MONTHS = ["Jan", "Feb", "Mar"]`.',
           'Ask `How many stores? `. It must be a whole number from 1 to 10; otherwise print `Number of stores must be 1 to 10` and stop.',
           'Then ask for each store\'s row: `name, jan, feb, mar`. A row is invalid if it does not have 4 parts, the name is empty, or a sales value is not a number: print `Invalid row, try again` and ask for that store again.',
           'Put the sales in a 2D array (stores × 3 months) and keep the names in a list. Print `Total sales`.',
           'Print the monthly totals (`axis=0`) like `Monthly totals: Jan ₹X, Feb ₹X, Mar ₹X`, and the best month (the first one on a tie).',
           'Rank the stores by their total (`axis=1`), highest first; equal totals keep the order they were typed. Print `1. Ameerpet: ₹X (34.5%)` with each store\'s share of the total sales (`0.0%` if the total is 0).',
           'Print the stores that grew every month (Jan < Feb < Mar), using `np.diff(..., axis=1)` and `np.all(..., axis=1)`, or `none`.',
           'Print the average sales per store per month (the mean of the whole array).'],
    lines=['Total sales: ₹<amount>', 'Monthly totals: Jan ₹<amount>, Feb ₹<amount>, Mar ₹<amount>', 'Best month: <Mon>', '<rank>. <Store>: ₹<amount> (<percent>%)',
           'Growing every month: <stores> or none', 'Average per store per month: ₹<amount>', 'Invalid row, try again', 'Number of stores must be 1 to 10'],
    rules='Money has `₹`, commas and 2 decimals. Shares have 1 decimal and a `%` sign. Store names are printed without the spaces around them.',
    edge=['A number of stores that is **not 1 to 10**, or not a number.', 'A row with a **word** or the **wrong number** of values: ask again.',
          '**Equal** totals: keep the typed order.', 'Flat months (equal sales) are **not** growth.', 'All sales **0**: shares are 0.0%.'],
    hints=['Read rows in `while len(rows) < store_count:`. Split at commas and strip; check `len(parts) == 4`, then convert the three values inside `try` / `except ValueError`.',
           'With `sales = np.array(rows)`: `sales.sum(axis=0)` gives the 3 monthly totals and `sales.sum(axis=1)` one total per store. `MONTHS[monthly.argmax()]` is the best month.',
           'Rank with `order = sorted(range(len(names)), key=lambda s: -totals[s])` (Python\'s sort keeps ties in order). Growth: `growing = np.all(np.diff(sales, axis=1) > 0, axis=1)`, then use it as a mask on `np.array(names)`.'],
    starter='# Project 7.2: Store sales matrix\nimport numpy as np\n\nMONTHS = ["Jan", "Feb", "Mar"]\n',
    sol='''# Project 7.2: Store sales matrix
import numpy as np

MONTHS = ["Jan", "Feb", "Mar"]

try:
    store_count = int(input("How many stores? "))
except ValueError:
    store_count = 0

if not 1 <= store_count <= 10:
    print("Number of stores must be 1 to 10")
else:
    names = []
    rows = []
    while len(rows) < store_count:
        parts = [p.strip() for p in input("Store row (name, jan, feb, mar): ").split(",")]
        try:
            if len(parts) != 4 or parts[0] == "":
                raise ValueError("wrong shape")
            values = [float(v) for v in parts[1:]]
        except ValueError:
            print("Invalid row, try again")
            continue
        names.append(parts[0])
        rows.append(values)

    sales = np.array(rows)  # one row per store, one column per month
    grand_total = sales.sum()
    monthly = sales.sum(axis=0)
    store_totals = sales.sum(axis=1)
    print(f"Total sales: ₹{grand_total:,.2f}")
    month_text = ", ".join(f"{m} ₹{t:,.2f}" for m, t in zip(MONTHS, monthly))
    print(f"Monthly totals: {month_text}")
    print(f"Best month: {MONTHS[monthly.argmax()]}")

    order = sorted(range(store_count), key=lambda s: -store_totals[s])
    for rank, s in enumerate(order, start=1):
        share = store_totals[s] / grand_total * 100 if grand_total > 0 else 0
        print(f"{rank}. {names[s]}: ₹{store_totals[s]:,.2f} ({share:.1f}%)")

    growing = np.all(np.diff(sales, axis=1) > 0, axis=1)
    grown = np.array(names)[growing]
    print("Growing every month: " + (", ".join(grown) or "none"))
    print(f"Average per store per month: ₹{sales.mean():,.2f}")''',
    weak='''import numpy as np
MONTHS = ["Jan", "Feb", "Mar"]
n = int(input("Stores: "))
names = []
rows = []
for i in range(n):
    p = input("Row: ").split(",")
    names.append(p[0])
    rows.append([float(x) for x in p[1:]])
s = np.array(rows)
print(f"Total sales: ₹{s.sum():,.2f}")
m = s.sum(axis=1)
print(f"Best month: {MONTHS[m.argmax()]}")
t = s.sum(axis=0)
for i in range(n):
    print(f"{i + 1}. {names[i]}: ₹{s[i].sum():,.2f} ({s[i].sum() / s.sum() * 100:.1f}%)")
print(f"Average per store per month: ₹{s.mean():,.2f}")''',
    need=[dict(any=['method:array'], min=1, label='`np.array()` to build the 2D table'),
          dict(any=['kw:axis'], min=3, label='`axis=` for monthly and store totals'),
          dict(any=['method:argmax'], min=1, label='`argmax()` for the best month'),
          dict(any=['method:diff'], min=1, label='`np.diff()` to compare each month with the one before'),
          dict(any=['method:all'], min=1, label='`np.all()` to test every month at once'),
          dict(any=['kw:key'], min=1, label='`sorted()` with `key=` to rank the stores'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` for bad rows')],
    expect=exp2,
    tests=[dict(name='Four stores', kind='main', inputs=['4', 'Ameerpet, 120000, 135000, 150000', 'Kukatpally, 98000, 97000, 110000', 'Dilsukhnagar, 140000, 152000, 161000', 'Gachibowli, 87000, 90500, 90500']),
           dict(name='Two stores with paise', kind='main', inputs=['2', 'Kondapur, 45500.50, 47250, 46000', 'Uppal, 38000, 41000.25, 43500']),
           dict(name='A bad row on the way', kind='main', inputs=['3', 'Madhapur, 60000, 65000, 70000', 'Begumpet, 55000, sixty, 58000', 'Begumpet, 55000, 60000, 58000', 'LB Nagar, 42000, 43000, 44000']),
           dict(name='Equal totals keep the typed order', kind='logic', inputs=['3', 'Zeta, 100, 100, 100', 'Alpha, 50, 100, 150', 'Beta, 10, 10, 10'], check=['1.', '2.', '3.'],
                tip='When two stores have the same total, keep the order they were typed (Zeta before Alpha). Python\'s `sorted()` does this when you sort by the total only.'),
           dict(name='Flat months are not growth', kind='logic', inputs=['2', 'North, 100, 100, 120', 'South, 100, 110, 120'], check=['Growing'],
                tip='Growth needs every month higher than the one before: `np.diff(...) > 0` for all months. 100 → 100 is not growth.'),
           dict(name='Monthly totals go down the columns', kind='logic', inputs=['2', 'East, 500, 100, 100', 'West, 10, 300, 50'], check=['Monthly', 'Best month'],
                tip='Monthly totals add each column, which is `sum(axis=0)`. `axis=1` gives the store totals instead.'),
           dict(name='Not 1 to 10 stores', kind='edge', inputs=['12'],
                tip='Check the number of stores first: it must be from 1 to 10 (and a whole number).'),
           dict(name='One store, wrong shape first', kind='edge', inputs=['1', 'Solo, 100, 200', 'Solo, 100, 200, 300'],
                tip='A row needs exactly a name and 3 values. Print `Invalid row, try again` and read the row again.'),
           dict(name='All sales are zero', kind='edge', inputs=['2', 'A, 0, 0, 0', 'B, 0, 0, 0'],
                tip='When the total is 0, every share is `0.0%`: do not divide by 0. With equal totals, the typed order stays.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
E, CS = Fr(3, 2), Fr(3, 5)
def exp3(i):
    prods = []
    for item in i[0].split(','):
        p = [x.strip() for x in item.split(':')]
        try:
            assert len(p) == 3 and p[0]
            pr, un = num(p[1]), num(p[2])
            assert pr > 0 and un >= 0
        except (AssertionError, ValueError):
            return ['Invalid product: ' + item.strip()]
        prods.append((p[0], pr, un))
    ds = []
    for t in i[1].split():
        if not t.isdigit() or int(t) > 90: return ['Invalid discount: ' + t]
        ds.append(int(t))
    if not ds: return ['Please enter at least one discount']
    rev, prof, out = [], [], []
    for d in ds:
        r = p_ = 0
        for n, pr, un in prods:
            np_, nu = pr * (1 - Fr(d, 100)), un * (1 + E * Fr(d, 100))
            r += np_ * nu; p_ += (np_ - pr * CS) * nu
        rev.append(r); prof.append(p_)
        out.append('Discount %d%%: revenue %s, profit %s' % (d, money(r), money(p_)))
    keep = [n for n, pr, un in prods if all((pr * (1 - Fr(d, 100)) - pr * CS) * un * (1 + E * Fr(d, 100)) > 0 for d in ds)]
    return out + ['Best discount for revenue: %d%%' % ds[rev.index(max(rev))], 'Best discount for profit: %d%%' % ds[prof.index(max(prof))],
                  'Profitable at every discount: ' + (', '.join(keep) or 'none')]

STARTER3 = '''# Project 7.3: Discount what-if planner
import numpy as np

ELASTICITY = 1.5   # each 1% discount sells 1.5% more units
COST_SHARE = 0.6   # each unit costs 60% of its normal price
'''
P3 = dict(
    id='p7-3', level=3, title='Discount what-if planner', short='Use broadcasting to test every discount on every product in one go.',
    story=('Before Diwali, a kirana and gifts store in Vijayawada wants to choose a discount. A bigger discount sells more units but earns less on each one. '
           'The owner wants a **what-if table**: for each discount level, the total revenue and profit, which discount gives the most revenue, which gives the most profit, '
           'and which products stay profitable at every discount.\n'
           'Assume each 1% discount sells 1.5% more units (`ELASTICITY`), and each unit costs 60% of its normal price (`COST_SHARE`). '
           'With NumPy **broadcasting**, a column of discounts and a row of products become a full table without a single loop over the numbers.'),
    objectives=['Parse structured input and validate every part', 'Turn a 1D array into a column with `[:, None]` for broadcasting',
                'Build scenario × product tables with vectorised maths', 'Summarise along an axis and pick the best scenario with `argmax`'],
    may=['everything from Parts 1-6', 'NumPy arrays and broadcasting', '`axis`, `argmax`, `np.all`', 'functions and `try` / `except`'],
    mustnot=NOT_YET,
    tasks=['The starter gives `ELASTICITY = 1.5` and `COST_SHARE = 0.6`. Keep them.',
           'Ask `Products (name:price:units, ...): `, split at commas, then each product at `:` (strip every part). Each needs a name, a price above 0 and units of 0 or more; otherwise print `Invalid product: <the product text>` and stop.',
           'Ask `Discounts in % (for example 0 5 10): ` and split at spaces. Each must be a whole number from 0 to 90; otherwise print `Invalid discount: <text>` and stop. If there are none, print `Please enter at least one discount`.',
           'Make arrays: `prices` and `units` (one value per product) and `discounts` (one per scenario). Make `d = discounts[:, None] / 100`, a column.',
           'With broadcasting: new price = prices × (1 − d); new units = units × (1 + ELASTICITY × d); revenue = new price × new units; profit = (new price − prices × COST_SHARE) × new units. Each is a table: one row per discount, one column per product.',
           'Print one line per discount with the totals of its row (`sum(axis=1)`): `Discount 10%: revenue ₹X, profit ₹Y`.',
           'Print the best discount for revenue and for profit (`argmax`; the first one on a tie).',
           'Print the products whose profit is above 0 at **every** discount (`np.all(profit > 0, axis=0)`), or `none`.'],
    lines=['Discount <d>%: revenue ₹<amount>, profit ₹<amount>', 'Best discount for revenue: <d>%', 'Best discount for profit: <d>%',
           'Profitable at every discount: <names> or none', 'Invalid product: <text>', 'Invalid discount: <text>', 'Please enter at least one discount'],
    rules='Money has `₹`, commas and 2 decimals. Discounts are whole numbers printed with a `%` sign. Product names are printed without the spaces around them.',
    edge=['A product with a **missing part** (`Tea:20`), a word as the price, or a price of 0.', 'A discount that is a word, a decimal, **above 90** or negative.',
          'A big discount where the new price falls **below the cost**: the profit turns negative.', 'Only **one** discount: it is the best for both.',
          'Spaces everywhere in the input.'],
    hints=['Validate first, then build arrays: collect names, prices and units in three lists inside a loop with `try` / `except ValueError`, and only then call `np.array()` on each list.',
           'Broadcasting: `d = discounts[:, None] / 100` has shape (scenarios, 1); `prices` has shape (products,). Then `new_price = prices * (1 - d)` is a full (scenarios, products) table. Do the same for `new_units`.',
           'Row totals: `revenue.sum(axis=1)`. Best scenario: `discounts[revenue.sum(axis=1).argmax()]`. Profitable everywhere: `np.array(names)[np.all(profit > 0, axis=0)]`.'],
    starter=STARTER3,
    sol=STARTER3 + '''

def read_products(text):
    """Return names, prices, units lists, or raise ValueError with the bad product."""
    names, prices, units = [], [], []
    for item in text.split(","):
        parts = [p.strip() for p in item.split(":")]
        try:
            if len(parts) != 3 or parts[0] == "":
                raise ValueError
            price, qty = float(parts[1]), float(parts[2])
            if price <= 0 or qty < 0:
                raise ValueError
        except ValueError:
            raise ValueError(f"Invalid product: {item.strip()}")
        names.append(parts[0])
        prices.append(price)
        units.append(qty)
    return names, prices, units


def read_discounts(text):
    """Return a list of whole-number discounts from 0 to 90, or raise ValueError."""
    discounts = []
    for token in text.split():
        if not token.isdigit() or int(token) > 90:
            raise ValueError(f"Invalid discount: {token}")
        discounts.append(int(token))
    if not discounts:
        raise ValueError("Please enter at least one discount")
    return discounts


try:
    names, prices, units = read_products(input("Products (name:price:units, ...): "))
    discount_list = read_discounts(input("Discounts in % (for example 0 5 10): "))
except ValueError as e:
    print(e)
else:
    prices = np.array(prices)
    units = np.array(units)
    discounts = np.array(discount_list)
    cut = discounts[:, None] / 100  # a column: one row per scenario

    # Broadcasting builds (scenarios x products) tables
    new_price = prices * (1 - cut)
    new_units = units * (1 + ELASTICITY * cut)
    revenue = new_price * new_units
    profit = (new_price - prices * COST_SHARE) * new_units

    revenue_totals = revenue.sum(axis=1)
    profit_totals = profit.sum(axis=1)
    for disc, rev, prof in zip(discount_list, revenue_totals, profit_totals):
        print(f"Discount {disc}%: revenue ₹{rev:,.2f}, profit ₹{prof:,.2f}")
    print(f"Best discount for revenue: {discount_list[revenue_totals.argmax()]}%")
    print(f"Best discount for profit: {discount_list[profit_totals.argmax()]}%")
    safe = np.array(names)[np.all(profit > 0, axis=0)]
    print("Profitable at every discount: " + (", ".join(safe) or "none"))''',
    weak=STARTER3 + '''
items = input("Products: ").split(",")
ds = [int(x) for x in input("Discounts: ").split()]
best_r = 0
best_p = 0
for d in ds:
    r = 0
    p = 0
    for it in items:
        n, pr, u = it.split(":")
        pr = float(pr) * (1 - d / 100)
        u = float(u) * (1 + d / 100)
        r += pr * u
        p += (pr - float(pr) * COST_SHARE) * u
    print(f"Discount {d}%: revenue ₹{r:,.2f}, profit ₹{p:,.2f}")''',
    need=[dict(any=['method:array'], min=2, label='`np.array()` for prices, units and discounts'),
          dict(any=['newaxis', 'method:reshape'], min=1, label='`[:, None]` (or `reshape`) to make the discounts a column'),
          dict(any=['kw:axis'], min=2, label='`axis=` to total each scenario and test each product'),
          dict(any=['method:argmax'], min=1, label='`argmax()` to pick the best discount'),
          dict(any=['method:all'], min=1, label='`np.all()` to test every discount at once'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` for invalid input'),
          dict(any=['node:FunctionDef'], min=1, label='functions to read and check the input')],
    expect=exp3,
    tests=[dict(name='Tea, coffee and juice', kind='main', inputs=['Tea:20:300, Coffee:45:120, Juice:60:80', '0 5 10 15 20']),
           dict(name='Stationery', kind='main', inputs=['Notebook:120:50, Pen:15:400', '0 10 25']),
           dict(name='Festival clothes', kind='main', inputs=['Saree:2500:12, Kurta:900:40, Dupatta:450:25', '0 10 20 30']),
           dict(name='Revenue and profit peak at different discounts', kind='logic', inputs=['Gift box:1000:10', '0 10 20 30'], check=['Best'],
                tip='Revenue keeps rising for a while because more units sell, but profit per unit shrinks fast. Total each row with `sum(axis=1)` and use `argmax()` for each.'),
           dict(name='Below cost is not profitable', kind='logic', inputs=['Lamp:200:30, Candle:50:100', '0 30 45'], check=['Discount 45', 'Profitable'],
                tip='At 45% off the price (55% of normal) is below the cost (60%), so profit is negative. `np.all(profit > 0, axis=0)` checks every discount for each product.'),
           dict(name='Units grow with the discount', kind='logic', inputs=['Sweets:400:50', '0 20'], check=['Discount'],
                tip='New units = units × (1 + 1.5 × discount). At 20% off, 50 units become 65, and the new price is ₹320.'),
           dict(name='An invalid product', kind='edge', inputs=['Tea:20, Coffee:45:120', '0 10'],
                tip='Each product needs 3 parts. Print `Invalid product: Tea:20` and stop before doing any maths.'),
           dict(name='Invalid discounts', kind='edge', inputs=['Tea:20:300', '0 10 95'],
                tip='Discounts must be whole numbers from 0 to 90. Print `Invalid discount: 95` and stop.'),
           dict(name='One discount and lots of spaces', kind='edge', inputs=['  Tea : 20 : 300 ,  Milk : 30 : 0 ', ' 0 '],
                tip='Strip every part. With one discount it is the best for both. A product with 0 units makes no profit, so it is not "profitable".')],
)

PROJECTS = [P1, P2, P3]
