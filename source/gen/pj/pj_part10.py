# Part 10 projects (chapters 29-30): everything before + Seaborn. Tests give their own orders.csv; expect() works out the
# printed lines with the csv module and fractions, and the chart report (hub2/hubcharts.py) is checked too.
import csv, io, random, math
from fractions import Fraction as Fr
from datetime import date
PART = 10
TITLE = 'Part 10 projects: statistical charts with Seaborn'
INTRO = ('Three reports built with Seaborn: the shape of the order values, a category comparison for any region, and a full insights report with a correlation heatmap and a panel per region. '
         'Pandas does the numbers, Seaborn draws them, and the checker reads your charts.')
NOT_YET = ['Other chart libraries (Plotly, Bokeh): not part of this course']
H = 'Date,Category,Region,Sales,Profit,Quantity\n'
CATS = ['Clothing', 'Electronics', 'Furniture', 'Groceries']
REGS = ['East', 'North', 'South', 'West']
ORDER = ['North', 'South', 'East', 'West']
def safe(x, places=2):
    assert (Fr(x) * 10 ** places) % 1 != Fr(1, 2), x
    return float(x)
def safe_f(x, places=2):
    assert abs((x * 10 ** places) % 1 - 0.5) > 1e-6, x
    return x
def money(x): return '₹' + format(safe(x), ',.2f')
def pct(x): return format(safe(x, 1), '.1f') + '%'
def rows_of(text): return list(csv.DictReader(io.StringIO(text)))
def make(seed, n, months=range(1, 13), cats=CATS, regs=REGS):
    rnd = random.Random(seed); out = H
    base = {'Clothing': (600, 3500), 'Electronics': (2500, 9500), 'Furniture': (2000, 9000), 'Groceries': (150, 1800)}
    for k in range(n):
        m = list(months)[k % len(list(months))]; d = date(2024, m, 1 + rnd.randrange(27))
        c = cats[rnd.randrange(len(cats))]; r = regs[rnd.randrange(len(regs))]
        lo, hi = base[c]; s = rnd.randrange(lo, hi); q = max(1, min(10, s // 900 + rnd.randrange(0, 4)))
        p = int(s * rnd.choice([-0.06, 0.05, 0.1, 0.14, 0.18, 0.22]))
        out += '%s,%s,%s,%d,%d,%d\n' % (d.isoformat(), c, r, s, p, q)
    return out
def median(v):
    v = sorted(v); n = len(v)
    return Fr(v[n // 2]) if n % 2 else Fr(v[n // 2 - 1] + v[n // 2], 2)

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i, t):
    rows = rows_of(t['files']['orders.csv'])
    if not rows: return ['No orders in the file'], ['Figures: 0']
    v = [int(r['Sales']) for r in rows]; n = len(v); med = median(v); avg = Fr(sum(v), n); big = sum(1 for x in v if x > 5000)
    out = ['Orders: %d' % n, 'Median order: ' + money(med), 'Average order: ' + money(avg), 'Orders over ₹5,000: %d (%s)' % (big, pct(Fr(big * 100, n))),
           'Long tail of big orders: ' + ('Yes' if avg > med else 'No'), 'Saved order_values.png']
    return out, ['Figures: 1', 'Figure 1: 1 chart', 'Chart 1.1: bar+line, 15 bars, 1 line, title: Order values, x: Sales (₹), y: Orders']
S1 = make(105, 41)
P1 = dict(
    id='p10-1', level=1, title='The shape of order values', short='Median, average and big orders, plus a Seaborn histogram with a smooth curve.',
    story=('Priya runs an online home store. Before she plans next year\'s offers she wants to know what a **typical** order looks like: is it the average, or are a few big orders pulling the average up? '
           'Give her the numbers and one clean Seaborn histogram she can show the team.'),
    objectives=['Read a CSV file and handle an empty one', 'Compare the median and the mean to spot a long tail', 'Count and share the orders above a limit', 'Draw a Seaborn histogram with `kde=True`, a title and axis labels, and save it'],
    may=['everything from Parts 1-9', 'Seaborn: `sns.set_theme`, `sns.histplot` (`bins=`, `kde=True`)', '`plt.title`, `plt.xlabel`, `plt.ylabel`, `plt.savefig`, `plt.show`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv` (`Date`, `Category`, `Region`, `Sales`, `Profit`, `Quantity`). If it has no rows, print `No orders in the file` and stop (draw nothing).',
           'Print `Orders: <n>`, the `Median order` and the `Average order` of `Sales`.',
           'Count the orders **over** ₹5,000 (more than 5000) and print them with their share of all orders: `Orders over ₹5,000: 7 (17.5%)`.',
           'Print `Long tail of big orders: Yes` when the average is above the median, otherwise `Long tail of big orders: No`.',
           'Switch on a theme with `sns.set_theme(style="whitegrid")`, then draw **one** Seaborn histogram of `Sales` with `bins=15` and `kde=True`. Title `Order values`, x label `Sales (₹)`, y label `Orders`.',
           'Save it as `order_values.png`, print `Saved order_values.png`, then `plt.show()`.'],
    lines=['Orders: <n>', 'Median order: ₹<amount>', 'Average order: ₹<amount>', 'Orders over ₹5,000: <n> (<x.x>%)', 'Long tail of big orders: Yes', 'Long tail of big orders: No', 'Saved order_values.png', 'No orders in the file',
           'Chart report (checked after your program): Figure 1: 1 chart', 'Chart 1.1: bar+line, 15 bars, 1 line, title: Order values, x: Sales (₹), y: Orders'],
    rules='Money has `₹`, commas and 2 decimals; the share has 1 decimal. Seaborn draws the bins as bars and the KDE as one line, which is what the chart report shows.',
    sample={'orders.csv': S1},
    edge=['A file with only the **header**: no chart.', 'An order of **exactly** ₹5,000: not "over".', 'An **even** number of orders: the median is the average of the middle two.', 'Only **two** orders.'],
    hints=['`orders = pd.read_csv("orders.csv")`; check `len(orders) == 0` first. `orders["Sales"].median()` and `.mean()` give the two middles.',
           '`big = (orders["Sales"] > 5000).sum()`; the share is `big / len(orders) * 100`.',
           'Chart: `sns.histplot(data=orders, x="Sales", bins=15, kde=True)`, then `plt.title(...)`, `plt.xlabel(...)`, `plt.ylabel(...)`, `plt.savefig("order_values.png")` and `plt.show()` last.'],
    starter='# Project 10.1: The shape of order values\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 10.1: The shape of order values
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
if len(orders) == 0:
    print("No orders in the file")
else:
    middle = orders["Sales"].median()
    average = orders["Sales"].mean()
    big = (orders["Sales"] > 5000).sum()
    print(f"Orders: {len(orders)}")
    print(f"Median order: ₹{middle:,.2f}")
    print(f"Average order: ₹{average:,.2f}")
    print(f"Orders over ₹5,000: {big} ({big / len(orders) * 100:.1f}%)")
    # A mean above the median means a few big orders pull it up
    print("Long tail of big orders:", "Yes" if average > middle else "No")
    sns.set_theme(style="whitegrid")
    sns.histplot(data=orders, x="Sales", bins=15, kde=True)
    plt.title("Order values")
    plt.xlabel("Sales (₹)")
    plt.ylabel("Orders")
    plt.savefig("order_values.png")
    print("Saved order_values.png")
    plt.show()''',
    weak='''import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
print(f"Orders: {len(df)}")
print(f"Average order: ₹{df['Sales'].mean():,.2f}")
b = (df["Sales"] >= 5000).sum()
print(f"Orders over ₹5,000: {b}")
plt.hist(df["Sales"], bins=15)
plt.title("Order values")
plt.show()''',
    need=[dict(any=['import:seaborn'], min=1, label='Seaborn (`import seaborn as sns`)'), dict(any=['method:histplot'], min=1, label='`sns.histplot()`'), dict(any=['kw:kde'], min=1, label='`kde=True` for the smooth curve'),
          dict(any=['method:median'], min=1, label='`median()` for the typical order'), dict(any=['method:set_theme'], min=1, label='`sns.set_theme()` for the look'), dict(any=['method:xlabel', 'method:set_xlabel'], min=1, label='axis labels'),
          dict(any=['method:savefig'], min=1, label='`plt.savefig()` to save the picture'), dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A year of orders', kind='main', inputs=[], charts=True, files={'orders.csv': S1}),
           dict(name='A small month', kind='main', inputs=[], charts=True, files={'orders.csv': make(102, 15, [3])}),
           dict(name='A busy festival season', kind='main', inputs=[], charts=True, files={'orders.csv': make(103, 60, [10, 11, 12])}),
           dict(name='Exactly ₹5,000 is not over', kind='logic', inputs=[], charts=True, check=['Orders over'], files={'orders.csv': H + '2024-01-02,Furniture,East,5000,500,5\n2024-01-03,Electronics,West,5001,600,5\n2024-01-04,Groceries,North,800,40,2\n2024-01-05,Clothing,South,1200,150,3\n'},
                tip='"Over ₹5,000" means `> 5000`: an order of exactly 5000 does not count.'),
           dict(name='No long tail', kind='logic', inputs=[], charts=True, check=['Long tail', 'Median', 'Average'], files={'orders.csv': H + '2024-02-02,Furniture,East,9000,900,9\n2024-02-03,Electronics,West,8800,700,9\n2024-02-04,Furniture,North,8600,640,8\n2024-02-05,Groceries,South,300,20,1\n'},
                tip='Here one small order pulls the average **below** the median, so the answer is No. Compare the two numbers; do not assume.'),
           dict(name='An even number of orders', kind='logic', inputs=[], charts=True, check=['Median'], files={'orders.csv': H + '2024-03-02,Clothing,East,1000,100,2\n2024-03-03,Clothing,West,3000,300,4\n2024-03-04,Groceries,North,400,30,1\n2024-03-05,Furniture,South,7000,800,8\n'},
                tip='With an even number of values the median is the average of the middle two: (1000 + 3000) / 2 = 2000. `median()` does this for you.'),
           dict(name='Only the header', kind='edge', inputs=[], charts=True, files={'orders.csv': H},
                tip='Check `len(orders) == 0` first: print `No orders in the file` and draw nothing.'),
           dict(name='Two orders', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-04-02,Electronics,East,6400,700,7\n2024-04-09,Groceries,West,350,30,1\n'},
                tip='Two orders still make a histogram and a KDE: the median and the average are the same here.'),
           dict(name='Every order small', kind='edge', inputs=[], charts=True, check=['Orders over'], files={'orders.csv': make(104, 20, [5], cats=['Groceries', 'Clothing'])},
                tip='No order is over ₹5,000, so the line is `Orders over ₹5,000: 0 (0.0%)`.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def exp2(i, t):
    rows = rows_of(t['files']['orders.csv'])
    name = i[0].strip().title()
    present = sorted(set(r['Region'] for r in rows))
    if name != 'All' and name not in present:
        return ['Unknown region: ' + name, 'Regions: ' + ', '.join(present)], ['Figures: 0']
    kept = rows if name == 'All' else [r for r in rows if r['Region'] == name]
    cat = {}
    for r in kept: cat.setdefault(r['Category'], []).append(int(r['Sales']))
    avg = {c: Fr(sum(v), len(v)) for c, v in cat.items()}
    order = sorted(avg, key=lambda c: (-avg[c], c))
    out = ['Region: ' + name, 'Orders: %d' % len(kept), 'Highest average order: %s (%s)' % (order[0], money(avg[order[0]])), 'Lowest average order: %s (%s)' % (order[-1], money(avg[order[-1]])),
           'Loss-making orders: %d' % sum(1 for r in kept if int(r['Profit']) < 0)]
    k = len(order)
    return out, ['Figures: 1', 'Figure 1: 2 charts, title: Category comparison: ' + name, 'Chart 1.1: bar, %d bar%s, title: Average order value, x: Category, y: Sales (₹)' % (k, '' if k == 1 else 's'),
                 'Chart 1.2: area+box, %d box%s, title: Profit per order, x: Category, y: Profit (₹)' % (k, '' if k == 1 else 'es')]
S2 = make(201, 48)
P2 = dict(
    id='p10-2', level=2, title='Category comparison for any region', short='Pick a region, rank the categories by average order, and draw bars and box plots side by side.',
    story=('Each regional manager wants the same picture for their own region: which categories bring the **biggest orders**, and how much the **profit** of single orders swings. '
           'The program asks for a region (or All), checks it, and builds the two charts in one figure.'),
    objectives=['Clean and check a typed name against the data', 'Rank categories by their average with `groupby` and `sort_values`', 'Put Seaborn charts into a Matplotlib grid with `ax=`', 'Keep both charts in the same category order'],
    may=['everything from Parts 1-9', 'Seaborn: `sns.barplot` (`order=`, `errorbar=None`, `ax=`), `sns.boxplot` (`order=`, `ax=`)', '`plt.subplots`, `ax.set(...)`, `fig.suptitle`, `plt.tight_layout`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv`. Ask `Region (or All): ` and clean the answer with `.strip().title()` (so ` north ` becomes `North`).',
           'If it is not `All` and not a region in the file, print `Unknown region: <name>` and `Regions: <the regions in the file, A to Z, joined by ", ">`, and stop.',
           'Keep the orders of that region (`All` keeps every order). Print `Region: <name>` and `Orders: <n>`.',
           'Work out the average `Sales` per `Category` and sort it from high to low (a tie: A to Z). Print the `Highest average order` and the `Lowest average order` with their categories and amounts.',
           'Print `Loss-making orders: <n>` (profit below 0).',
           'Make `fig, axes = plt.subplots(1, 2, figsize=(11, 4))`. Left: `sns.barplot` of the average `Sales` per `Category` in the sorted order, no error bars, title `Average order value`, y label `Sales (₹)`.',
           'Right: `sns.boxplot` of `Profit` per `Category` in the **same** order, title `Profit per order`, y label `Profit (₹)`. Keep the x labels Seaborn sets (`Category`).',
           'Give the figure the title `Category comparison: <name>`, call `plt.tight_layout()` and show it.'],
    lines=['Region: <name>', 'Orders: <n>', 'Highest average order: <Category> (₹<amount>)', 'Lowest average order: <Category> (₹<amount>)', 'Loss-making orders: <n>', 'Unknown region: <name>', 'Regions: East, North, South, West',
           'Chart report: Figure 1: 2 charts, title: Category comparison: <name>', 'Chart 1.1: bar, <n> bars, title: Average order value, x: Category, y: Sales (₹)', 'Chart 1.2: area+box, <n> boxes, title: Profit per order, x: Category, y: Profit (₹)'],
    rules='Money has `₹`, commas and 2 decimals. The chart report shows what Seaborn draws: a box plot also adds a small `area` part, so `area+box` is expected.',
    sample={'orders.csv': S2},
    edge=['A typed region with **extra spaces** or small letters.', 'A region that is **not in the file**.', 'A region with only **one category**.', 'Two categories with the **same** average.'],
    hints=['`name = input("Region (or All): ").strip().title()`. The regions in the file: `sorted(orders["Region"].unique())`.',
           '`avg = kept.groupby("Category")["Sales"].mean().reset_index().sort_values(["Sales", "Category"], ascending=[False, True])`, then `order = avg["Category"].tolist()`.',
           '`sns.barplot(data=kept, x="Category", y="Sales", order=order, errorbar=None, ax=axes[0])` and `axes[0].set(title="Average order value", ylabel="Sales (₹)")`.'],
    starter='# Project 10.2: Category comparison\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 10.2: Category comparison
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
regions = sorted(orders["Region"].unique())
name = input("Region (or All): ").strip().title()
if name != "All" and name not in regions:
    print(f"Unknown region: {name}")
    print("Regions:", ", ".join(regions))
else:
    kept = orders if name == "All" else orders[orders["Region"] == name]
    print(f"Region: {name}")
    print(f"Orders: {len(kept)}")
    # Average order per category, highest first (ties A to Z)
    avg = kept.groupby("Category")["Sales"].mean().reset_index()
    avg = avg.sort_values(["Sales", "Category"], ascending=[False, True])
    order = avg["Category"].tolist()
    top, low = avg.iloc[0], avg.iloc[-1]
    print(f"Highest average order: {top['Category']} (₹{top['Sales']:,.2f})")
    print(f"Lowest average order: {low['Category']} (₹{low['Sales']:,.2f})")
    print(f"Loss-making orders: {(kept['Profit'] < 0).sum()}")
    sns.set_theme(style="whitegrid")
    fig, axes = plt.subplots(1, 2, figsize=(11, 4))
    sns.barplot(data=kept, x="Category", y="Sales", order=order, errorbar=None, ax=axes[0])
    axes[0].set(title="Average order value", ylabel="Sales (₹)")
    sns.boxplot(data=kept, x="Category", y="Profit", order=order, ax=axes[1])
    axes[1].set(title="Profit per order", ylabel="Profit (₹)")
    fig.suptitle(f"Category comparison: {name}")
    plt.tight_layout()
    plt.show()''',
    weak='''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
r = input("Region (or All): ")
d = df[df["Region"] == r]
print(f"Region: {r}")
print(f"Orders: {len(d)}")
sns.barplot(data=d, x="Category", y="Sales")
plt.show()''',
    need=[dict(any=['method:strip'], min=1, label='`strip()` to clean the typed name'), dict(any=['method:unique'], min=1, label='`unique()` for the regions in the file'),
          dict(any=['method:groupby'], min=1, label='`groupby()` for the averages'), dict(any=['method:sort_values'], min=1, label='`sort_values()` for the ranking'),
          dict(any=['method:barplot'], min=1, label='`sns.barplot()`'), dict(any=['method:boxplot'], min=1, label='`sns.boxplot()`'),
          dict(any=['kw:ax'], min=2, label='`ax=` to place both charts'), dict(any=['method:suptitle'], min=1, label='`fig.suptitle()`')],
    expect=exp2,
    tests=[dict(name='The North', kind='main', inputs=['North'], charts=True, files={'orders.csv': S2}),
           dict(name='All regions', kind='main', inputs=['All'], charts=True, files={'orders.csv': S2}),
           dict(name='Another file, the West', kind='main', inputs=['West'], charts=True, files={'orders.csv': make(202, 40)}),
           dict(name='Messy typing', kind='logic', inputs=['  south '], charts=True, check=['Region', 'Orders'], files={'orders.csv': S2},
                tip='Clean the answer with `.strip().title()` before you compare it: `"  south "` becomes `"South"`.'),
           dict(name='A tie between categories', kind='logic', inputs=['All'], charts=True, check=['Highest', 'Lowest'], files={'orders.csv': H + '2024-01-02,Furniture,East,4000,400,4\n2024-01-03,Electronics,West,4000,300,4\n2024-01-04,Groceries,North,500,40,1\n2024-01-05,Clothing,North,500,60,2\n'},
                tip='Sort by the average **and** the name, so a tie goes A to Z: Electronics before Furniture, Clothing before Groceries.'),
           dict(name='Losses counted', kind='logic', inputs=['East'], charts=True, check=['Loss'], files={'orders.csv': H + '2024-02-02,Furniture,East,4000,-200,4\n2024-02-03,Clothing,East,900,-20,2\n2024-02-04,Clothing,East,1500,0,2\n2024-02-05,Groceries,West,500,-40,1\n'},
                tip='Only the region\'s own orders count, and a profit of exactly 0 is not a loss.'),
           dict(name='A region not in the file', kind='edge', inputs=['Central'], charts=True, files={'orders.csv': S2},
                tip='Print `Unknown region: Central` and the list of regions from the file, A to Z, then stop without a chart.'),
           dict(name='One category only', kind='edge', inputs=['North'], charts=True, files={'orders.csv': H + '2024-03-02,Groceries,North,600,50,2\n2024-03-03,Groceries,North,900,70,3\n2024-03-04,Furniture,South,5000,500,5\n'},
                tip='With one category, the highest and lowest average are the same, and each chart has one bar or box.'),
           dict(name='A file with fewer regions', kind='edge', inputs=['West'], charts=True, files={'orders.csv': make(203, 20, regs=['North', 'South'])},
                tip='The West is not in this file: list only the regions that are there (North, South).')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
PAIRS = [('Sales', 'Profit'), ('Sales', 'Quantity'), ('Profit', 'Quantity')]
def corr(a, b):
    n = len(a); ma = Fr(sum(a), n); mb = Fr(sum(b), n)
    sab = sum((x - ma) * (y - mb) for x, y in zip(a, b)); saa = sum((x - ma) ** 2 for x in a); sbb = sum((y - mb) ** 2 for y in b)
    return float(sab) / math.sqrt(float(saa * sbb))
def exp3(i, t):
    rows = rows_of(t['files']['orders.csv'])
    if len(rows) < 3: return ['Need at least 3 orders'], ['Figures: 0']
    col = {c: [int(r[c]) for r in rows] for c in ('Sales', 'Profit', 'Quantity')}
    rs = [(abs(corr(col[a], col[b])), k) for k, (a, b) in enumerate(PAIRS)]
    best = max(rs, key=lambda x: (round(x[0], 12), -x[1]))[1]
    a, b = PAIRS[best]; r = safe_f(corr(col[a], col[b]))
    xs, ys = col['Sales'], col['Profit']; n = len(xs); mx = Fr(sum(xs), n); my = Fr(sum(ys), n)
    slope = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
    marg = {}
    for reg in set(x['Region'] for x in rows):
        s = sum(int(x['Sales']) for x in rows if x['Region'] == reg); p = sum(int(x['Profit']) for x in rows if x['Region'] == reg)
        marg[reg] = Fr(p * 100, s)
    hi = sorted(marg, key=lambda k: (-marg[k], k))[0]; lo = sorted(marg, key=lambda k: (marg[k], k))[0]
    out = ['Orders: %d' % len(rows), 'Strongest link: %s and %s (%s)' % (a, b, format(r, '.2f')), 'Profit per ₹1 of sales: ₹' + format(safe(slope), '.2f'),
           'Best margin: %s (%s)' % (hi, pct(marg[hi])), 'Worst margin: %s (%s)' % (lo, pct(marg[lo])), 'Saved insights.png']
    panels = [g for g in ORDER if g in marg]; k = len(panels)
    ch = ['Figures: 2', 'Figure 1: 1 chart', 'Chart 1.1: mesh, 1 heatmap, title: Correlations', 'Figure 2: %d chart%s, title: Sales vs profit by region' % (k, '' if k == 1 else 's')]
    for j, g in enumerate(panels):
        pts = sum(1 for x in rows if x['Region'] == g)
        line = 'Chart 2.%d: scatter, %d point%s, title: %s' % (j + 1, pts, '' if pts == 1 else 's', g)
        if j >= k - 2: line += ', x: Sales (₹)'
        if j % 2 == 0: line += ', y: Profit (₹)'
        ch.append(line)
    return out, ch
S3 = make(301, 60)
P3 = dict(
    id='p10-3', level=3, title='Sales insights report', short='Find the strongest link, the profit per rupee and the best margins, with a heatmap and a panel per region.',
    story=('The finance head asks three questions every quarter: **which numbers move together**, how much profit each extra rupee of sales brings, and which region keeps the most of what it sells. '
           'Answer them in print, then back them up with a correlation heatmap and one scatter panel per region.'),
    objectives=['Build a correlation table and find the strongest pair by absolute value', 'Fit a straight line with `np.polyfit` and explain the slope', 'Work out margins per region from totals', 'Draw a heatmap and a figure-level `relplot` with panels, titles and labels, and save it'],
    may=['everything from Parts 1-9 (NumPy and Pandas included)', 'all of Part 10: `sns.heatmap`, `sns.relplot` (`col=`, `col_wrap=`, `col_order=`, `hue=`), `g.set_titles`, `g.set_axis_labels`, `g.figure.suptitle`, `g.savefig`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv`. If it has fewer than 3 orders, print `Need at least 3 orders` and stop (no chart). Otherwise print `Orders: <n>`.',
           'Make the correlation table of `Sales`, `Profit` and `Quantity`. Of the three pairs (Sales and Profit, Sales and Quantity, Profit and Quantity, in this order), find the one with the biggest correlation **ignoring the sign** (a tie: the first). Print it with its real value, 2 decimals: `Strongest link: Sales and Profit (0.78)`.',
           'Fit `Profit` against `Sales` with `np.polyfit(x, y, 1)` and print the slope: `Profit per ₹1 of sales: ₹0.15`.',
           'For each region, the ==margin== is its total profit ÷ its total sales × 100. Print `Best margin: <Region> (<x.x>%)` and `Worst margin: <Region> (<x.x>%)` (a tie: A to Z).',
           'Figure 1: `sns.heatmap` of the correlation table with the values (`annot=True`, `fmt=".2f"`), `cmap="coolwarm"`, `center=0`, `vmin=-1`, `vmax=1`, and the title `Correlations`.',
           'Figure 2: `sns.relplot` of `Sales` (x) against `Profit` (y), coloured by `Category`, one panel per `Region` with `col_wrap=2`, in the order North, South, East, West (only the regions in the file).',
           'On the grid: `g.set_titles("{col_name}")`, `g.set_axis_labels("Sales (₹)", "Profit (₹)")` and `g.figure.suptitle("Sales vs profit by region", y=1.03)`. Save it with `g.savefig("insights.png")`, print `Saved insights.png`, then `plt.show()`.'],
    lines=['Orders: <n>', 'Strongest link: <col> and <col> (<x.xx>)', 'Profit per ₹1 of sales: ₹<x.xx>', 'Best margin: <Region> (<x.x>%)', 'Worst margin: <Region> (<x.x>%)', 'Saved insights.png', 'Need at least 3 orders',
           'Chart report: Figure 1: 1 chart', 'Chart 1.1: mesh, 1 heatmap, title: Correlations', 'Figure 2: <n> charts, title: Sales vs profit by region', 'Chart 2.1: scatter, <n> points, title: North, y: Profit (₹)', '... one line per panel'],
    rules=('The correlation keeps its sign (for example `-0.41`). In a FacetGrid only the **bottom** panels show the x label and only the **left** panels the y label, so the report lists the labels like that. '
           'Margins have 1 decimal; the slope 2 decimals.'),
    sample={'orders.csv': S3},
    edge=['Fewer than **3 orders**.', 'A **negative** correlation that is the strongest.', 'A region **missing** from the file: only 3 panels.', 'Two regions with the **same** margin.'],
    hints=['`corr = orders[["Sales", "Profit", "Quantity"]].corr()`; `corr.loc["Sales", "Profit"]` is one pair. Loop over the three pairs and keep the one with the biggest `np.abs()` (use `>` so a tie keeps the first).',
           'Margins: `totals = orders.groupby("Region")[["Sales", "Profit"]].sum()`, then `margin = totals["Profit"] / totals["Sales"] * 100`. `margin.idxmax()` and `margin.idxmin()` pick the first name A to Z on a tie.',
           'Panels: `order = [r for r in ["North", "South", "East", "West"] if r in totals.index]`, then `g = sns.relplot(data=orders, x="Sales", y="Profit", hue="Category", col="Region", col_wrap=2, col_order=order)`.'],
    starter='# Project 10.3: Sales insights report\nimport numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n',
    sol='''# Project 10.3: Sales insights report
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

orders = pd.read_csv("orders.csv")
if len(orders) < 3:
    print("Need at least 3 orders")
else:
    print(f"Orders: {len(orders)}")
    corr = orders[["Sales", "Profit", "Quantity"]].corr()
    # The strongest pair, ignoring the sign (a tie keeps the first pair)
    pairs = [("Sales", "Profit"), ("Sales", "Quantity"), ("Profit", "Quantity")]
    best = pairs[0]
    for pair in pairs[1:]:
        if np.abs(corr.loc[pair]) > np.abs(corr.loc[best]):
            best = pair
    print(f"Strongest link: {best[0]} and {best[1]} ({corr.loc[best]:.2f})")
    slope, intercept = np.polyfit(orders["Sales"], orders["Profit"], 1)
    print(f"Profit per ₹1 of sales: ₹{slope:.2f}")
    totals = orders.groupby("Region")[["Sales", "Profit"]].sum()
    margin = totals["Profit"] / totals["Sales"] * 100
    print(f"Best margin: {margin.idxmax()} ({margin.max():.1f}%)")
    print(f"Worst margin: {margin.idxmin()} ({margin.min():.1f}%)")
    sns.set_theme()
    plt.figure(figsize=(5, 4))
    sns.heatmap(corr, annot=True, fmt=".2f", cmap="coolwarm", center=0, vmin=-1, vmax=1)
    plt.title("Correlations")
    order = [r for r in ["North", "South", "East", "West"] if r in totals.index]
    g = sns.relplot(data=orders, x="Sales", y="Profit", hue="Category", col="Region",
                    col_wrap=2, col_order=order, height=3)
    g.set_titles("{col_name}")
    g.set_axis_labels("Sales (₹)", "Profit (₹)")
    g.figure.suptitle("Sales vs profit by region", y=1.03)
    g.savefig("insights.png")
    print("Saved insights.png")
    plt.show()''',
    weak='''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
df = pd.read_csv("orders.csv")
print(f"Orders: {len(df)}")
c = df[["Sales", "Profit", "Quantity"]].corr()
print(f"Strongest link: Sales and Profit ({c.loc['Sales', 'Profit']:.2f})")
m = df.groupby("Region")["Profit"].mean()
print(f"Best margin: {m.idxmax()}")
sns.heatmap(c)
plt.show()''',
    need=[dict(any=['method:corr'], min=1, label='`corr()` for the correlation table'), dict(any=['method:abs'], min=1, label='`np.abs()` to ignore the sign'),
          dict(any=['method:polyfit'], min=1, label='`np.polyfit()` for the slope'), dict(any=['method:groupby'], min=1, label='`groupby()` for the region totals'),
          dict(any=['method:heatmap'], min=1, label='`sns.heatmap()`'), dict(any=['method:relplot'], min=1, label='`sns.relplot()` with panels'),
          dict(any=['method:set_titles', 'method:set_axis_labels'], min=2, label='`g.set_titles()` and `g.set_axis_labels()`'), dict(any=['method:savefig'], min=1, label='`g.savefig()`')],
    expect=exp3,
    tests=[dict(name='A year of orders', kind='main', inputs=[], charts=True, files={'orders.csv': S3}),
           dict(name='A quieter year', kind='main', inputs=[], charts=True, files={'orders.csv': make(302, 36)}),
           dict(name='The festival quarter', kind='main', inputs=[], charts=True, files={'orders.csv': make(303, 45, [10, 11, 12])}),
           dict(name='A negative link wins', kind='logic', inputs=[], charts=True, check=['Strongest'], files={'orders.csv': H + '2024-01-02,Furniture,North,1000,500,9\n2024-01-03,Clothing,South,1100,100,2\n2024-01-04,Groceries,East,1050,300,6\n2024-01-05,Electronics,West,990,450,8\n2024-01-06,Clothing,North,1020,200,4\n'},
                tip='Compare the pairs with `np.abs()`: here Profit and Quantity move together most strongly, and you print the real value with its sign.'),
           dict(name='Margins from totals', kind='logic', inputs=[], charts=True, check=['Best margin', 'Worst margin'], files={'orders.csv': H + '2024-02-02,Furniture,North,9000,900,9\n2024-02-03,Groceries,North,100,50,1\n2024-02-04,Clothing,South,1000,150,2\n2024-02-05,Electronics,East,5000,400,6\n2024-02-06,Clothing,West,2000,200,3\n'},
                tip='A margin is total profit ÷ total sales for the region, not the average of each order\'s margin: North is 950 ÷ 9100 = 10.4%, not the mean of 10% and 50%.'),
           dict(name='A tie for the best margin', kind='logic', inputs=[], charts=True, check=['Best margin'], files={'orders.csv': H + '2024-03-02,Furniture,West,4000,400,5\n2024-03-03,Clothing,East,2000,200,3\n2024-03-04,Groceries,North,1000,50,2\n2024-03-05,Electronics,South,6000,420,7\n'},
                tip='East and West both keep 10%. `idxmax()` picks the first label, and the labels of a groupby are sorted A to Z: East.'),
           dict(name='Only two orders', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-04-02,Furniture,West,4000,400,5\n2024-04-03,Clothing,East,2000,200,3\n'},
                tip='With fewer than 3 orders the correlations mean nothing: check `len(orders) < 3` first and draw nothing.'),
           dict(name='A region missing', kind='edge', inputs=[], charts=True, files={'orders.csv': make(304, 30, regs=['North', 'South', 'West'])},
                tip='Build the panel order only from the regions in the file: North, South, West gives 3 panels.'),
           dict(name='Three orders', kind='edge', inputs=[], charts=True, files={'orders.csv': H + '2024-05-02,Furniture,North,5000,600,6\n2024-05-03,Clothing,South,1500,150,2\n2024-05-04,Electronics,North,7000,700,9\n'},
                tip='Three orders are enough. Only North and South have orders, so the grid has two panels in one row: both show the x label.')],
)
PROJECTS = [P1, P2, P3]
