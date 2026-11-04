# Part 9 projects (chapters 27-28): everything before + Matplotlib charts, subplots and finishing touches.
# Tests give their own orders.csv. expect() works out the printed lines with the csv module, and the chart report
# (printed by hub2/hubcharts.py after the program: chart type, counts, titles, labels) is checked too.
import csv, io, random
from fractions import Fraction as Fr
from datetime import date
PART = 9
TITLE = 'Part 9 projects: charts with Matplotlib'
INTRO = ('Three reports a manager can see at a glance: a monthly sales chart, a two-chart sales overview, and a full 2 × 2 sales dashboard with a trend line. '
         'Pandas does the numbers, Matplotlib draws them, and the checker reads your charts: their type, counts, titles and labels.')
NOT_YET = ['Seaborn (Part 10)']
H = 'Date,Category,Region,Sales,Profit\n'
MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
CATS = ['Clothing', 'Electronics', 'Furniture', 'Groceries']
REGS = ['East', 'North', 'South', 'West']
def safe(x, places=2):
    assert (Fr(x) * 10 ** places) % 1 != Fr(1, 2), x
    return float(x)
def money(x): return '₹' + format(safe(x), ',.2f')
def pct(x): return format(safe(x, 1), '.1f') + '%'
def rows_of(text): return list(csv.DictReader(io.StringIO(text)))
def make(seed, n, months, cats=CATS, regs=REGS):
    """A small orders file: n orders spread over the given months of 2024."""
    rnd = random.Random(seed); out = H
    for k in range(n):
        m = months[k % len(months)]; d = date(2024, m, 1 + rnd.randrange(27))
        c = cats[rnd.randrange(len(cats))]; r = regs[rnd.randrange(len(regs))]
        s = rnd.randrange(300, 9000); p = int(s * rnd.choice([-0.05, 0.08, 0.12, 0.15, 0.2, 0.25]))
        out += '%s,%s,%s,%d,%d\n' % (d.isoformat(), c, r, s, p)
    return out
def monthly(rows):
    tot = {}
    for r in rows:
        m = int(r['Date'][5:7]); tot[m] = tot.get(m, 0) + int(r['Sales'])
    return [(m, tot[m]) for m in sorted(tot)]

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i, t):
    rows = rows_of(t['files']['orders.csv'])
    if not rows: return ['No orders in the file'], ['Figures: 0']
    mt = monthly(rows); vals = [v for m, v in mt]
    best = max(mt, key=lambda x: x[1]); worst = min(mt, key=lambda x: x[1])
    best = [x for x in mt if x[1] == best[1]][0]; worst = [x for x in mt if x[1] == worst[1]][0]
    out = ['Months: %d' % len(mt), 'Best month: %s (%s)' % (MON[best[0] - 1], money(best[1])), 'Worst month: %s (%s)' % (MON[worst[0] - 1], money(worst[1])),
           'Average per month: ' + money(Fr(sum(vals), len(vals))), 'Saved monthly_sales.png']
    return out, ['Figures: 1', 'Figure 1: 1 chart', 'Chart 1.1: line, 1 line, title: Monthly sales, x: Month, y: Sales (₹)']
S1 = make(11, 40, list(range(1, 13)))
P1 = dict(
    id='p9-1', level=1, title='Monthly sales chart', short='Total the orders by month, print the highlights and draw a clean line chart.',
    story=('Rahul from Part 8 liked his monthly report, and now he wants a **picture** for the team meeting: one line chart of the sales in every month of the year, '
           'plus the best and worst month and the average. He will paste the saved picture into his slides.'),
    objectives=['Total sales per month with `groupby` and `dt.to_period("M")`', 'Draw a line chart with markers, a title and axis labels', 'Use short month names on the x-axis', 'Save the chart with `savefig()` before `show()`'],
    may=['everything from Parts 1-8', 'Matplotlib: `plt.figure`, `plt.plot`, `plt.title`, `plt.xlabel`, `plt.ylabel`, `plt.grid`, `plt.savefig`, `plt.show`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv` (`Date`, `Category`, `Region`, `Sales`, `Profit`) and turn `Date` into dates. If the file has no rows, print `No orders in the file` and stop (draw nothing).',
           'Total the `Sales` of each month: `groupby(orders["Date"].dt.to_period("M"))`.',
           'Print `Months: <n>` (how many months have orders), `Best month` and `Worst month` with their totals (on a tie, the earlier month), and `Average per month`. Use the short month names: `Jan`, `Feb` ...',
           'Draw **one** line chart of the monthly totals with markers: the short month names along the x-axis, the title `Monthly sales`, the x label `Month` and the y label `Sales (₹)`.',
           'Save it as `monthly_sales.png`, print `Saved monthly_sales.png`, then `plt.show()`.'],
    lines=['Months: <n>', 'Best month: <Mon> (₹<amount>)', 'Worst month: <Mon> (₹<amount>)', 'Average per month: ₹<amount>', 'Saved monthly_sales.png', 'No orders in the file',
           'Chart report (checked after your program): Figure 1: 1 chart', 'Chart 1.1: line, 1 line, title: Monthly sales, x: Month, y: Sales (₹)'],
    rules='Money has `₹`, commas and 2 decimals. The chart must be a single line (markers are fine; no extra lines or dots), with exactly the title and labels above.',
    sample={'orders.csv': S1},
    edge=['A file with only the **header**: no chart at all.', 'Orders in **only one month**: one point, still a line chart.', 'Two months with the **same** total: the earlier one wins.', 'Months **missing** in the middle of the year.'],
    hints=['`orders["Date"] = pd.to_datetime(orders["Date"])`, then `monthly = orders.groupby(orders["Date"].dt.to_period("M"))["Sales"].sum()`.',
           '`monthly.idxmax()` is a month period; `.strftime("%b")` turns it into `Nov`. `monthly.index.strftime("%b")` gives all the short names for the x-axis.',
           'Chart: `plt.plot(names, monthly.values, marker="o")`, then the title and labels, `plt.savefig("monthly_sales.png")`, and `plt.show()` last.'],
    starter='# Project 9.1: Monthly sales chart\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 9.1: Monthly sales chart
import pandas as pd
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
if len(orders) == 0:
    print("No orders in the file")
else:
    orders["Date"] = pd.to_datetime(orders["Date"])
    monthly = orders.groupby(orders["Date"].dt.to_period("M"))["Sales"].sum()
    names = monthly.index.strftime("%b")
    best, worst = monthly.idxmax(), monthly.idxmin()
    print(f"Months: {len(monthly)}")
    print(f"Best month: {best.strftime('%b')} (₹{monthly[best]:,.2f})")
    print(f"Worst month: {worst.strftime('%b')} (₹{monthly[worst]:,.2f})")
    print(f"Average per month: ₹{monthly.mean():,.2f}")
    # One clean line chart, saved before it is shown
    plt.figure(figsize=(8, 4))
    plt.plot(names, monthly.values, marker="o")
    plt.title("Monthly sales")
    plt.xlabel("Month")
    plt.ylabel("Sales (₹)")
    plt.grid(alpha=0.3)
    plt.savefig("monthly_sales.png")
    print("Saved monthly_sales.png")
    plt.show()''',
    weak='''import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
df["Date"] = pd.to_datetime(df["Date"])
m = df.groupby(df["Date"].dt.month)["Sales"].sum()
print(f"Months: {len(m)}")
plt.bar(m.index, m.values)
plt.title("Sales")
plt.show()''',
    need=[dict(any=['method:to_datetime'], min=1, label='`pd.to_datetime()` for the dates'), dict(any=['method:groupby'], min=1, label='`groupby()` by month'),
          dict(any=['method:idxmax'], min=1, label='`idxmax()` for the best month'), dict(any=['method:plot'], min=1, label='`plt.plot()` for the line'),
          dict(any=['method:xlabel', 'method:set_xlabel'], min=1, label='an x-axis label'), dict(any=['method:ylabel', 'method:set_ylabel'], min=1, label='a y-axis label'),
          dict(any=['method:savefig'], min=1, label='`plt.savefig()` to save the picture'), dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A whole year', kind='main', inputs=[], charts=True, files={'orders.csv': S1}),
           dict(name='The first half of the year', kind='main', inputs=[], charts=True, files={'orders.csv': make(12, 24, [1, 2, 3, 4, 5, 6])}),
           dict(name='Festival season only', kind='main', inputs=[], charts=True, files={'orders.csv': make(13, 18, [9, 10, 11, 12])}),
           dict(name='A tie between two months', kind='logic', inputs=[], charts=True, check=['Best', 'Worst'], files={'orders.csv': H + '2024-03-05,Clothing,East,500,50\n2024-04-02,Groceries,West,800,40\n2024-05-09,Furniture,North,500,60\n2024-06-01,Clothing,South,800,90\n'},
                tip='`idxmax()` and `idxmin()` return the **first** label with the top or bottom value, so the earlier month wins a tie.'),
           dict(name='Months missing in the middle', kind='logic', inputs=[], charts=True, check=['Months', 'Average'], files={'orders.csv': make(14, 9, [1, 6, 12])},
                tip='Only months that have orders count: the average is the total ÷ the number of months in the result, not ÷ 12.'),
           dict(name='The chart itself', kind='logic', inputs=[], charts=True, check=['Saved'], files={'orders.csv': make(15, 20, [2, 3, 4, 5])},
                tip='Draw exactly one line with `plt.plot(...)`, with the title `Monthly sales`, the x label `Month` and the y label `Sales (₹)`.'),
           dict(name='Only the header', kind='edge', inputs=[], charts=True, files={'orders.csv': H},
                tip='Check `len(orders) == 0` first: print `No orders in the file` and draw nothing.'),
           dict(name='One month only', kind='edge', inputs=[], charts=True, files={'orders.csv': make(16, 5, [8])},
                tip='With one month, best and worst are the same month, and the line chart has a single point.'),
           dict(name='Unsorted dates', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-12-03,Clothing,East,900,90\n2024-02-11,Groceries,West,300,20\n2024-07-19,Furniture,North,4100,500\n2024-02-25,Electronics,South,6200,700\n'},
                tip='`groupby` sorts the months for you, so the line runs from February to December even when the file is not in order.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def exp2(i, t):
    rows = rows_of(t['files']['orders.csv'])
    try: low = int(i[0].strip())
    except ValueError: return ['Please enter a whole number of rupees'], ['Figures: 0']
    if low < 0: return ['Please enter a whole number of rupees'], ['Figures: 0']
    rows = [r for r in rows if int(r['Sales']) >= low]
    if not rows: return ['No orders of ₹%s or more' % format(low, ','), 'Orders used: 0'], ['Figures: 0']
    cats = {}; regs = {}
    for r in rows: cats[r['Category']] = cats.get(r['Category'], 0) + int(r['Sales']); regs[r['Region']] = regs.get(r['Region'], 0) + 1
    tot = sum(cats.values()); top = sorted(cats, key=lambda c: (-cats[c], c))[0]
    big = sorted(regs, key=lambda k: (-regs[k], k))[0]
    out = ['Orders used: %d' % len(rows), 'Top category: %s (%s, %s of sales)' % (top, money(cats[top]), pct(Fr(cats[top] * 100, tot))),
           'Busiest region: %s (%d orders, %s)' % (big, regs[big], pct(Fr(regs[big] * 100, len(rows))))]
    return out, ['Figures: 1', 'Figure 1: 2 charts, title: Sales overview', 'Chart 1.1: bar, %d bars, title: Sales by category, y: Sales (₹)' % len(cats),
                 'Chart 1.2: pie, %d pie slice%s, title: Orders by region' % (len(regs), '' if len(regs) == 1 else 's')]
S2 = make(21, 36, list(range(1, 13)))
P2 = dict(
    id='p9-2', level=2, title='Sales overview: two charts', short='Filter the orders by size, then draw sorted category bars and a region pie in one figure.',
    story=('The sales head wants **one picture** for the monthly review: on the left, which categories bring in the most money; on the right, how the orders are shared between the regions. '
           'Sometimes she only wants the bigger orders, so the program first asks for the smallest order value to include.'),
    objectives=['Read and check a typed number, then filter rows with a mask', 'Group, sort and count with Pandas', 'Draw two charts in one figure with `plt.subplots(1, 2)`', 'Sort the bars, show percents on the pie, and give the figure one title'],
    may=['everything from Parts 1-8', 'Matplotlib: `plt.subplots`, `ax.bar`, `ax.pie`, `ax.set_title`, `ax.set_ylabel`, `fig.suptitle`, `plt.tight_layout`, `plt.show`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv`. Ask `Smallest order (₹): `. If it is not a whole number of 0 or more, print `Please enter a whole number of rupees` and stop.',
           'Keep the orders whose `Sales` is at least that value. If none are left, print `No orders of ₹<value> or more` (the value with commas) and `Orders used: 0`, and stop. Otherwise print `Orders used: <n>`.',
           'Print the `Top category` (biggest total sales; a tie: A to Z) with its total and its share of all the sales kept: `Top category: Electronics (₹1,23,456.00 ...` in the format of the lines below.',
           'Print the `Busiest region` (most orders; a tie: A to Z) with its number of orders and its share of the orders.',
           'Make **one figure with 2 charts** side by side (`plt.subplots(1, 2)`). Left: a bar chart of the total sales per category, **largest first**, with the title `Sales by category` and the y label `Sales (₹)`.',
           'Right: a pie of the number of orders per region with the percent on each slice (`autopct="%1.1f%%"`) and the title `Orders by region`.',
           'Give the figure the title `Sales overview`, call `plt.tight_layout()` and show it.'],
    lines=['Orders used: <n>', 'Top category: <Category> (₹<amount>, <x.x>% of sales)', 'Busiest region: <Region> (<n> orders, <x.x>%)', 'Please enter a whole number of rupees', 'No orders of ₹<value> or more',
           'Chart report: Figure 1: 2 charts, title: Sales overview', 'Chart 1.1: bar, <n> bars, title: Sales by category, y: Sales (₹)', 'Chart 1.2: pie, <n> pie slices, title: Orders by region'],
    rules='Money has `₹`, commas and 2 decimals; percents 1 decimal. The left chart has no x label; the pie has no axis labels. Only the two charts, no others.',
    sample={'orders.csv': S2},
    edge=['A value so high that **no order** is left: no chart.', 'A value that is **not a number**, or below 0.', 'Only **one region** left after filtering: a pie with one slice.', 'Two categories with the **same** total.'],
    hints=['Read the value inside `try` / `except ValueError`. Filter with `kept = orders[orders["Sales"] >= low]`.',
           '`cats = kept.groupby("Category")["Sales"].sum().reset_index().sort_values(["Sales", "Category"], ascending=[False, True])` gives the bars in order, ties A to Z. `counts = kept.groupby("Region").size()` gives the pie values.',
           '`fig, axes = plt.subplots(1, 2, figsize=(10, 4))`; `axes[0].bar(cats["Category"], cats["Sales"])`; `axes[1].pie(counts.values, labels=counts.index, autopct="%1.1f%%")`; then `fig.suptitle("Sales overview")`.'],
    starter='# Project 9.2: Sales overview with two charts\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 9.2: Sales overview with two charts
import pandas as pd
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
try:
    low = int(input("Smallest order (₹): "))
except ValueError:
    low = -1
if low < 0:
    print("Please enter a whole number of rupees")
else:
    kept = orders[orders["Sales"] >= low]
    if len(kept) == 0:
        print(f"No orders of ₹{low:,} or more")
        print("Orders used: 0")
    else:
        print(f"Orders used: {len(kept)}")
        # Totals per category, largest first (ties A to Z)
        cats = kept.groupby("Category")["Sales"].sum().reset_index()
        cats = cats.sort_values(["Sales", "Category"], ascending=[False, True])
        total = cats["Sales"].sum()
        top, top_sales = cats["Category"].iloc[0], cats["Sales"].iloc[0]
        share = top_sales / total * 100
        print(f"Top category: {top} (₹{top_sales:,.2f}, {share:.1f}% of sales)")
        counts = kept.groupby("Region").size()
        busy = counts.idxmax()
        part = counts[busy] / len(kept) * 100
        print(f"Busiest region: {busy} ({counts[busy]} orders, {part:.1f}%)")
        fig, axes = plt.subplots(1, 2, figsize=(10, 4))
        axes[0].bar(cats["Category"], cats["Sales"], color="steelblue")
        axes[0].set_title("Sales by category")
        axes[0].set_ylabel("Sales (₹)")
        axes[1].pie(counts.values, labels=counts.index, autopct="%1.1f%%", startangle=90)
        axes[1].set_title("Orders by region")
        fig.suptitle("Sales overview")
        plt.tight_layout()
        plt.show()''',
    weak='''import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
low = int(input("Smallest order (₹): "))
df = df[df["Sales"] > low]
print(f"Orders used: {len(df)}")
cats = df.groupby("Category")["Sales"].sum()
plt.bar(cats.index, cats.values)
plt.title("Sales by category")
plt.show()
r = df.groupby("Region").size()
plt.pie(r.values, labels=r.index)
plt.show()''',
    need=[dict(any=['exc:ValueError'], min=1, label='`except ValueError` for a value that is not a number'), dict(any=['mask'], min=1, label='a mask to keep the bigger orders'),
          dict(any=['method:sort_values'], min=1, label='`sort_values()` for the bar order'), dict(any=['method:subplots'], min=1, label='`plt.subplots(1, 2)` for two charts'),
          dict(any=['method:bar'], min=1, label='a bar chart'), dict(any=['method:pie'], min=1, label='a pie chart'),
          dict(any=['kw:autopct'], min=1, label='`autopct=` for the percents'), dict(any=['method:suptitle'], min=1, label='`fig.suptitle()` for the figure title')],
    expect=exp2,
    tests=[dict(name='All orders', kind='main', inputs=['0'], charts=True, files={'orders.csv': S2}),
           dict(name='Orders of ₹2,000 or more', kind='main', inputs=['2000'], charts=True, files={'orders.csv': S2}),
           dict(name='Another month\'s file', kind='main', inputs=['500'], charts=True, files={'orders.csv': make(22, 30, [10, 11])}),
           dict(name='At least means equal counts', kind='logic', inputs=['1000'], charts=True, check=['Orders used', 'Top'], files={'orders.csv': H + '2024-01-02,Clothing,East,1000,100\n2024-01-03,Groceries,West,999,90\n2024-01-04,Furniture,North,4000,400\n'},
                tip='"At least" means `>=`: an order of exactly ₹1,000 counts.'),
           dict(name='Ties in the rankings', kind='logic', inputs=['0'], charts=True, check=['Top', 'Busiest'], files={'orders.csv': H + '2024-02-01,Groceries,West,600,60\n2024-02-02,Clothing,East,400,40\n2024-02-03,Clothing,West,200,20\n2024-02-04,Furniture,East,300,30\n'},
                tip='Sort by sales **and** name so a tie goes A to Z; `idxmax()` on the region counts also picks the first name, A to Z.'),
           dict(name='Bars largest first', kind='logic', inputs=['0'], charts=True, check=['Top'], files={'orders.csv': H + '2024-03-01,Clothing,East,300,30\n2024-03-02,Electronics,North,9000,900\n2024-03-03,Groceries,South,150,10\n2024-03-04,Furniture,West,4000,400\n'},
                tip='Draw the bars from the **sorted** table, so the biggest category is on the left.'),
           dict(name='Nothing big enough', kind='edge', inputs=['100000'], charts=True, files={'orders.csv': S2},
                tip='After filtering, check `len(kept) == 0`: print the two lines and draw no chart.'),
           dict(name='Not a number', kind='edge', inputs=['two thousand'], charts=True, files={'orders.csv': S2},
                tip='`int("two thousand")` raises `ValueError`: catch it and print `Please enter a whole number of rupees`.'),
           dict(name='One region left', kind='edge', inputs=['5000'], charts=True, files={'orders.csv': H + '2024-04-01,Electronics,South,7000,700\n2024-04-02,Furniture,South,5200,520\n2024-04-03,Clothing,East,900,90\n'},
                tip='With one region left, the pie has a single slice of 100%: that is still a correct chart.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
def fit(xs, ys):
    n = len(xs); mx = Fr(sum(xs), n); my = Fr(sum(ys), n)
    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys)); sxx = sum((x - mx) ** 2 for x in xs); syy = sum((y - my) ** 2 for y in ys)
    return sxy / sxx, sxy * sxy / (sxx * syy)
def exp3(i, t):
    rows = rows_of(t['files']['orders.csv'])
    if len(rows) < 2: return ['Need at least 2 orders'], ['Figures: 0']
    mt = monthly(rows); reg = {}
    for r in rows: reg[r['Region']] = reg.get(r['Region'], 0) + int(r['Profit'])
    best = sorted(reg, key=lambda k: (-reg[k], k))[0]
    slope, r2 = fit([int(r['Sales']) for r in rows], [int(r['Profit']) for r in rows])
    out = ['Orders: %d' % len(rows), 'Best region for profit: %s (%s)' % (best, money(reg[best])), 'Loss-making orders: %d' % sum(1 for r in rows if int(r['Profit']) < 0),
           'Profit per extra ₹1 of sales: ₹%s' % format(safe(slope), '.2f'), 'R²: %s' % format(safe(r2), '.2f'), 'Saved dashboard.png']
    return out, ['Figures: 1', 'Figure 1: 4 charts, title: Sales dashboard', 'Chart 1.1: line, 1 line, title: Monthly sales', 'Chart 1.2: barh, %d bars, title: Profit by region' % len(reg),
                 'Chart 1.3: hist, 10 bars, title: Order values, x: Sales (₹)', 'Chart 1.4: line+scatter, 1 line, %d points, title: Sales vs profit' % len(rows)]
S3 = make(31, 48, list(range(1, 13)))
P3 = dict(
    id='p9-3', level=3, title='Sales dashboard', short='Four charts in one figure, with a trend line and the numbers a manager asks for.',
    story=('Meena runs the analytics team. Every month she sends the directors one **dashboard**: monthly sales, profit by region, the spread of order values, and sales against profit with a trend line. '
           'Build it once, so next month she only changes the file.'),
    objectives=['Lay out a 2 × 2 grid with `plt.subplots(2, 2)` and `axes[row, col]`', 'Use four chart types: line, sorted horizontal bars, histogram and scatter', 'Fit a trend line with `np.polyfit` and report the slope and R²', 'Title every chart and the figure, tidy with `tight_layout`, and save the picture'],
    may=['everything from Parts 1-8 (NumPy included)', 'all of Part 9: subplots, `ax.plot`, `ax.barh`, `ax.hist`, `ax.scatter`, `ax.set_title`, `fig.suptitle`, `np.polyfit`, `np.corrcoef`, `savefig`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv` and turn `Date` into dates. If it has fewer than 2 rows, print `Need at least 2 orders` and stop (no chart).',
           'Print `Orders: <n>`, the `Best region for profit` (highest total profit; a tie: A to Z) with its profit, and `Loss-making orders: <n>` (profit below 0).',
           'Fit a straight line of `Profit` against `Sales` with `np.polyfit(x, y, 1)`. Print the slope as `Profit per extra ₹1 of sales: ₹<x.xx>` and R² (the squared correlation, `np.corrcoef`) as `R²: <x.xx>`.',
           'Make a 2 × 2 figure. Top left `axes[0, 0]`: monthly total sales as a line (title `Monthly sales`). Top right: total **profit** per region as horizontal bars sorted small to large (title `Profit by region`).',
           'Bottom left: a histogram of `Sales` with 10 bins (title `Order values`, x label `Sales (₹)`). Bottom right: a scatter of `Sales` (x) against `Profit` (y) with the trend line drawn on it as **one** line (title `Sales vs profit`).',
           'Give the figure the title `Sales dashboard`, call `plt.tight_layout()`, save it as `dashboard.png`, print `Saved dashboard.png` and show it.'],
    lines=['Orders: <n>', 'Best region for profit: <Region> (₹<amount>)', 'Loss-making orders: <n>', 'Profit per extra ₹1 of sales: ₹<x.xx>', 'R²: <x.xx>', 'Saved dashboard.png', 'Need at least 2 orders',
           'Chart report: Figure 1: 4 charts, title: Sales dashboard', 'Chart 1.1: line, 1 line, title: Monthly sales', 'Chart 1.2: barh, <n> bars, title: Profit by region',
           'Chart 1.3: hist, 10 bars, title: Order values, x: Sales (₹)', 'Chart 1.4: line+scatter, 1 line, <n> points, title: Sales vs profit'],
    rules='Money has `₹`, commas and 2 decimals. The slope and R² have 2 decimals. Only the labels listed: no x or y labels on the other charts.',
    sample={'orders.csv': S3},
    edge=['A file with **only 1 order**: a trend line needs at least 2.', 'A region whose total profit is **negative**.', 'Two regions with the **same** profit.', 'Orders in **one month** only: a line with one point.'],
    hints=['Numbers first: `profit = orders.groupby("Region")["Profit"].sum()`; `profit.idxmax()`; `(orders["Profit"] < 0).sum()`. Then `x = orders["Sales"].values`, `y = orders["Profit"].values`, `slope, intercept = np.polyfit(x, y, 1)` and `np.corrcoef(x, y)[0, 1] ** 2`.',
           'Layout: `fig, axes = plt.subplots(2, 2, figsize=(11, 8))`. For the bars, `profit.sort_values()` then `axes[0, 1].barh(p.index, p.values)`.',
           'Trend line on the scatter: `line_x = np.linspace(x.min(), x.max(), 50)` and `axes[1, 1].plot(line_x, slope * line_x + intercept, "r-")`. Save with `plt.savefig("dashboard.png")` before `plt.show()`.'],
    starter='# Project 9.3: Sales dashboard\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 9.3: Sales dashboard
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
if len(orders) < 2:
    print("Need at least 2 orders")
else:
    orders["Date"] = pd.to_datetime(orders["Date"])
    profit = orders.groupby("Region")["Profit"].sum()
    best = profit.idxmax()
    print(f"Orders: {len(orders)}")
    print(f"Best region for profit: {best} (₹{profit[best]:,.2f})")
    print(f"Loss-making orders: {(orders['Profit'] < 0).sum()}")
    # Trend line: profit against sales
    x = orders["Sales"].values
    y = orders["Profit"].values
    slope, intercept = np.polyfit(x, y, 1)
    print(f"Profit per extra ₹1 of sales: ₹{slope:.2f}")
    print(f"R²: {np.corrcoef(x, y)[0, 1] ** 2:.2f}")
    monthly = orders.groupby(orders["Date"].dt.to_period("M"))["Sales"].sum()
    by_region = profit.sort_values()
    fig, axes = plt.subplots(2, 2, figsize=(11, 8))
    axes[0, 0].plot(monthly.index.strftime("%b"), monthly.values, marker="o")
    axes[0, 0].set_title("Monthly sales")
    axes[0, 1].barh(by_region.index, by_region.values, color="seagreen")
    axes[0, 1].set_title("Profit by region")
    axes[1, 0].hist(x, bins=10, edgecolor="black")
    axes[1, 0].set_title("Order values")
    axes[1, 0].set_xlabel("Sales (₹)")
    line_x = np.linspace(x.min(), x.max(), 50)
    axes[1, 1].scatter(x, y, s=15, alpha=0.6)
    axes[1, 1].plot(line_x, slope * line_x + intercept, "r-")
    axes[1, 1].set_title("Sales vs profit")
    fig.suptitle("Sales dashboard")
    plt.tight_layout()
    plt.savefig("dashboard.png")
    print("Saved dashboard.png")
    plt.show()''',
    weak='''import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
print(f"Orders: {len(df)}")
p = df.groupby("Region")["Profit"].sum()
print(f"Best region for profit: {p.idxmax()} (₹{p.max():,.2f})")
s, c = np.polyfit(df["Sales"], df["Profit"], 1)
print(f"Profit per extra ₹1 of sales: ₹{s:.2f}")
fig, axes = plt.subplots(1, 2)
axes[0].bar(p.index, p.values)
axes[1].scatter(df["Sales"], df["Profit"])
plt.show()''',
    need=[dict(any=['method:subplots'], min=1, label='`plt.subplots(2, 2)` for the grid'), dict(any=['method:polyfit'], min=1, label='`np.polyfit()` for the trend line'),
          dict(any=['method:corrcoef'], min=1, label='`np.corrcoef()` for R²'), dict(any=['method:barh'], min=1, label='horizontal bars for the regions'),
          dict(any=['method:hist'], min=1, label='a histogram of order values'), dict(any=['method:scatter'], min=1, label='a scatter of sales against profit'),
          dict(any=['method:suptitle'], min=1, label='`fig.suptitle()`'), dict(any=['method:savefig'], min=1, label='`plt.savefig()`')],
    expect=exp3,
    tests=[dict(name='A year of orders', kind='main', inputs=[], charts=True, files={'orders.csv': S3}),
           dict(name='A quieter year', kind='main', inputs=[], charts=True, files={'orders.csv': make(32, 30, list(range(1, 13)))}),
           dict(name='The festival quarter', kind='main', inputs=[], charts=True, files={'orders.csv': make(33, 36, [10, 11, 12])}),
           dict(name='A region that loses money', kind='logic', inputs=[], charts=True, check=['Best region', 'Loss'], files={'orders.csv': H + '2024-01-05,Clothing,East,1000,-200\n2024-02-05,Groceries,East,800,-50\n2024-03-05,Furniture,West,4000,600\n2024-04-05,Electronics,North,6000,700\n'},
                tip='Profit can be negative: the best region is the one with the **highest** total, and a loss is a profit below 0.'),
           dict(name='A tie for the best region', kind='logic', inputs=[], charts=True, check=['Best region'], files={'orders.csv': H + '2024-01-05,Clothing,West,1000,300\n2024-02-05,Groceries,East,900,300\n2024-03-05,Furniture,North,2000,100\n'},
                tip='`idxmax()` on the grouped profits picks the first region A to Z when two totals are equal.'),
           dict(name='A perfect straight line', kind='logic', inputs=[], charts=True, check=['Profit per', 'R²'], files={'orders.csv': H + '2024-01-05,Clothing,West,1000,100\n2024-02-05,Groceries,East,2000,200\n2024-03-05,Furniture,North,3000,300\n2024-04-05,Electronics,South,4000,400\n'},
                tip='When profit is always 10% of sales, the slope is 0.10 and R² is 1.00. Use `np.polyfit(x, y, 1)` and square the correlation.'),
           dict(name='Only one order', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-05-01,Clothing,East,1200,150\n'},
                tip='A trend line needs at least 2 points: check `len(orders) < 2` first and draw nothing.'),
           dict(name='One month only', kind='edge', inputs=[], charts=True, files={'orders.csv': make(34, 12, [6])},
                tip='All the orders are in June, so the monthly line has one point; the other three charts work as usual.'),
           dict(name='Two orders', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-07-01,Furniture,South,3000,450\n2024-08-01,Clothing,North,1000,50\n'},
                tip='Two points always lie on a straight line, so R² is 1.00. The dashboard still has all four charts.')],
)
PROJECTS = [P1, P2, P3]
