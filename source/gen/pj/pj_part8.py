# Part 8 projects (chapters 23-26): everything before + Pandas: read_csv, cleaning (drop_duplicates, fillna, .str, to_datetime),
# selecting (masks, loc, idxmax, sort_values), grouping (groupby, agg, transform) and joining (merge).
# Every test gives its own CSV file(s). expect() works the answer out again with the csv module, not with Pandas.
import csv, io, statistics
from fractions import Fraction as Fr
from datetime import date, datetime
PART = 8
TITLE = 'Part 8 projects: data analysis with Pandas'
INTRO = ('Three everyday analyst jobs on CSV files: clean a messy HR staff export, build a monthly sales report, and analyse '
         'student results across two files. Read each file with Pandas, clean it, then let `groupby`, filters and `merge` do the work.')
NOT_YET = ['Matplotlib or Seaborn charts (Parts 9 and 10)']
def safe(x, places=2):
    assert (Fr(x) * 10 ** places) % 1 != Fr(1, 2), x
    return float(x)
def money(x): return '₹' + format(safe(x), ',.2f')
def pct(x): return format(safe(x, 1), '.1f') + '%'
def rows_of(text): return list(csv.DictReader(io.StringIO(text)))
def num(s): return Fr(s) if s.strip() != '' else None

# ---------------------------------------------------------------- Project 1 (Beginner)
H1 = 'emp_id,name,department,salary,city\n'
def exp1(i, t):
    rows = rows_of(t['files']['staff.csv'])
    if not rows: return ['No staff in the file']
    seen, uniq = set(), []
    for r in rows:
        k = tuple(r.values())
        if k not in seen: seen.add(k); uniq.append(r)
    sal = [num(r['salary']) for r in uniq]
    have = sorted(s for s in sal if s is not None)
    med = Fr(statistics.median(have))
    filled = [s if s is not None else med for s in sal]
    names = [r['name'].strip().title() for r in uniq]
    depts = [r['department'].strip().upper() for r in uniq]
    out = ['Rows read: %d' % len(rows), 'Duplicates removed: %d' % (len(rows) - len(uniq)),
           'Missing salaries filled: %d' % sal.count(None), 'Missing cities filled: %d' % sum(1 for r in uniq if r['city'].strip() == ''),
           'Departments: ' + ', '.join(sorted(set(depts))), 'Average salary: ' + money(sum(filled) / len(filled))]
    top = filled.index(max(filled))
    out.append('Highest paid: %s (%s)' % (names[top], money(filled[top])))
    for d in sorted(set(depts)):
        v = [filled[k] for k in range(len(uniq)) if depts[k] == d]
        out.append('%s: %d staff, average %s' % (d, len(v), money(sum(v) / len(v))))
    return out
S1 = H1 + '''E1,  asha rao,IT,72000,Pune
E2,VIKRAM SINGH,hr ,45000,Delhi
E3,neha kapoor, it,,Pune
E4,Ravi Teja,Sales,39000,
E5,meena pillai,SALES,66000,Chennai
E5,meena pillai,SALES,66000,Chennai
E6,Arjun Reddy,Finance,81000,Hyderabad
E7, priya sharma,finance,,Hyderabad
E8,Kiran Kumar,IT,58500,Pune
'''
T1B = H1 + '''E11,Divya Nair,HR,52000,Kochi
E12,suresh babu,hr,47500,Chennai
E13,ANJALI GUPTA,Marketing,61000,Delhi
E14,Karthik Raman,marketing ,,Chennai
E15,pooja joshi,IT,88000,Pune
E16,Manoj Patil, IT ,74500,Pune
'''
T1C = H1 + '''E21,Lakshmi Menon,Finance,68000,Bengaluru
E22,imran khan,finance,59500,
E23,Deepa Das,Sales,42000,Kolkata
E24,sanjay mehta,sales,,Mumbai
E25,Fatima Shaikh,SALES,51000,Mumbai
E26,rohit jain,IT,95000,Pune
E27,Kavya Hegde,it,,Bengaluru
E28,Naveen Yadav,HR,46500,
E29,swati kulkarni,hr,49000,Pune
E30,Ajay Mishra,IT,77000,Hyderabad
E31,Bhavna Bose,Marketing,57500,Kolkata
E32,gopal naidu,MARKETING,53000,Hyderabad
'''
P1 = dict(
    id='p8-1', level=1, title='Clean an HR staff file', short='Read a messy staff export, clean it with Pandas and print a short HR report.',
    story=('Lakshmi works in HR at an IT company in Hyderabad. Every month the payroll system exports **`staff.csv`**, and every month it is messy: '
           'names in random capitals with extra spaces, departments typed three different ways, a few missing salaries and cities, and sometimes the same row twice.\n'
           'Write a program that reads the file with **Pandas**, cleans it, and prints a short report she can paste into her email.'),
    objectives=['Read a CSV file with `pd.read_csv()`', 'Remove repeated rows with `drop_duplicates()`', 'Tidy text with `.str.strip()`, `.str.title()` and `.str.upper()`',
                'Fill gaps with `fillna()` (the median salary, and `"Unknown"` for cities)', 'Summarise with `mean()`, `idxmax()` and `groupby()`'],
    may=['everything from Parts 1-7', 'Pandas: `read_csv`, `drop_duplicates`, `.str` tools, `isna`, `fillna`, `median`, `mean`, `unique`, `idxmax`, `loc`, `groupby`'],
    mustnot=NOT_YET,
    tasks=['The file is called `staff.csv` and has the columns `emp_id`, `name`, `department`, `salary` and `city`. Read it with `pd.read_csv`.',
           'If the file has no rows, print `No staff in the file` and stop. Otherwise print `Rows read: <n>`.',
           'Remove exact duplicate rows and print `Duplicates removed: <n>`.',
           'Tidy the text: names with `strip()` then `title()`; departments with `strip()` then `upper()`.',
           'Count the missing salaries, fill them with the **median** salary (of the rows left after removing duplicates) and print `Missing salaries filled: <n>`. Then fill missing cities with `Unknown` and print `Missing cities filled: <n>`.',
           'Print `Departments: ` and the department names sorted A to Z, separated by `, `.',
           'Print the `Average salary`, and the `Highest paid` person with their salary (on a tie, the one higher up in the file).',
           'For each department, A to Z, print `<DEPT>: <n> staff, average ₹<amount>`.'],
    lines=['Rows read: <n>', 'Duplicates removed: <n>', 'Missing salaries filled: <n>', 'Missing cities filled: <n>', 'Departments: FINANCE, HR, IT', 'Average salary: ₹<amount>',
           'Highest paid: <Name> (₹<amount>)', '<DEPT>: <n> staff, average ₹<amount>', 'No staff in the file'],
    rules='Money has `₹`, commas and 2 decimals, like `₹56,250.00`. Names are in title case (`Asha Rao`) and departments in capitals (`IT`).',
    sample={'staff.csv': S1},
    edge=['A file with only the **header** row: no staff at all.', 'A file where **every row is there twice**.', '**No gaps** at all: 0 salaries and 0 cities filled.',
          'Two people with the **same top salary**: the one higher up in the file.', 'An **even** number of salaries: the median is the average of the two middle ones.'],
    hints=['Start with `staff = pd.read_csv("staff.csv")` and `if len(staff) == 0:`. Save `before = len(staff)`, then `staff = staff.drop_duplicates()`; the difference is the number removed.',
           'Count the gaps **before** you fill them: `missing = staff["salary"].isna().sum()`, then `staff["salary"] = staff["salary"].fillna(staff["salary"].median())`.',
           'For the top earner, `top = staff.loc[staff["salary"].idxmax()]`. For the department lines, make `counts = staff.groupby("department")["salary"].count()` and `means = ...mean()`, then loop with `for dept, count in counts.items():`.'],
    starter='# Project 8.1: Clean an HR staff file\nimport pandas as pd\n\n',
    sol='''# Project 8.1: Clean an HR staff file
import pandas as pd

staff = pd.read_csv("staff.csv")
if len(staff) == 0:
    print("No staff in the file")
else:
    print(f"Rows read: {len(staff)}")
    before = len(staff)
    staff = staff.drop_duplicates()
    print(f"Duplicates removed: {before - len(staff)}")
    # Tidy the text columns
    staff["name"] = staff["name"].str.strip().str.title()
    staff["department"] = staff["department"].str.strip().str.upper()
    # Count the gaps first, then fill them
    missing_pay = staff["salary"].isna().sum()
    staff["salary"] = staff["salary"].fillna(staff["salary"].median())
    print(f"Missing salaries filled: {missing_pay}")
    missing_city = staff["city"].isna().sum()
    staff["city"] = staff["city"].fillna("Unknown")
    print(f"Missing cities filled: {missing_city}")
    print("Departments: " + ", ".join(sorted(staff["department"].unique())))
    print(f"Average salary: ₹{staff['salary'].mean():,.2f}")
    top = staff.loc[staff["salary"].idxmax()]
    print(f"Highest paid: {top['name']} (₹{top['salary']:,.2f})")
    counts = staff.groupby("department")["salary"].count()
    means = staff.groupby("department")["salary"].mean()
    for dept, count in counts.items():
        print(f"{dept}: {count} staff, average ₹{means[dept]:,.2f}")''',
    weak='''import pandas as pd
df = pd.read_csv("staff.csv")
print(f"Rows read: {len(df)}")
print("Duplicates removed: 0")
df["name"] = df["name"].str.title()
df["department"] = df["department"].str.upper()
print(f"Missing salaries filled: {df['salary'].isna().sum()}")
df["salary"] = df["salary"].fillna(df["salary"].mean())
print(f"Average salary: ₹{df['salary'].mean():,.2f}")
top = df.loc[df["salary"].idxmax()]
print(f"Highest paid: {top['name']} (₹{top['salary']:,.2f})")''',
    need=[dict(any=['method:read_csv'], min=1, label='`pd.read_csv()` to load the file'),
          dict(any=['method:drop_duplicates'], min=1, label='`drop_duplicates()` for repeated rows'),
          dict(any=['method:strip'], min=1, label='`.str.strip()` for the extra spaces'),
          dict(any=['method:fillna'], min=2, label='`fillna()` for the salaries and the cities'),
          dict(any=['method:median'], min=1, label='`median()` as the fill value'),
          dict(any=['method:idxmax'], min=1, label='`idxmax()` to find the top earner'),
          dict(any=['method:groupby'], min=1, label='`groupby()` for the department lines'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='This month\'s export', kind='main', inputs=[], files={'staff.csv': S1}),
           dict(name='A small team with no repeats', kind='main', inputs=[], files={'staff.csv': T1B}),
           dict(name='A bigger file', kind='main', inputs=[], files={'staff.csv': T1C}),
           dict(name='A tie for the top salary', kind='logic', inputs=[], check=['Highest paid'], files={'staff.csv': H1 + 'E1,Om Shah,IT,90000,Pune\nE2,lata iyer,HR,90000,Delhi\nE3,Ravi Rao,IT,50000,Goa\n'},
                tip='`idxmax()` returns the **first** label with the top value, so the person higher up in the file wins a tie.'),
           dict(name='An even number of salaries', kind='logic', inputs=[], check=['Missing salaries', 'Average', 'IT', 'HR'], files={'staff.csv': H1 + 'E1,Asha,IT,40000,Pune\nE2,Ravi,IT,,Pune\nE3,Neha,HR,50000,Delhi\nE4,Om,HR,70000,Goa\nE5,Lata,IT,90000,Goa\n'},
                tip='Fill with the **median**, not the mean. With 4 salaries the median is the average of the two middle ones: (50,000 + 70,000) / 2.'),
           dict(name='One department, many spellings', kind='logic', inputs=[], check=['Departments', 'SALES', 'IT'], files={'staff.csv': H1 + 'E1,Asha,Sales,40000,Pune\nE2,Ravi, sales ,42000,Pune\nE3,Neha,SALES,44000,Delhi\nE4,Om,sales,46000,Goa\nE5,Lata,It,90000,Goa\n'},
                tip='`strip()` **then** `upper()` makes ` sales `, `Sales` and `SALES` into one department before you group.'),
           dict(name='Only the header row', kind='edge', inputs=[], files={'staff.csv': H1},
                tip='Check `len(staff) == 0` right after reading the file, and print `No staff in the file`.'),
           dict(name='Every row twice', kind='edge', inputs=[], check=['Rows read', 'Duplicates', 'Average', 'Highest'], files={'staff.csv': H1 + 'E1,Asha,IT,60000,Pune\nE1,Asha,IT,60000,Pune\nE2,Ravi,HR,48000,Delhi\nE2,Ravi,HR,48000,Delhi\n'},
                tip='Remove the duplicates **before** you count, fill or average, or every person counts twice.'),
           dict(name='Nothing missing', kind='edge', inputs=[], check=['Duplicates', 'Missing salaries', 'Missing cities', 'Average'], files={'staff.csv': H1 + 'E1,Asha,IT,61000,Pune\nE2,Ravi,HR,47000,Delhi\nE3,Neha,IT,58000,Goa\n'},
                tip='When there are no gaps the counts are simply 0. Count with `isna().sum()` before filling.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
H2 = 'Date,Category,Region,Sales,Profit\n'
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
def pdate(s):
    s = s.strip()
    for f in ('%Y-%m-%d', '%d/%m/%Y', '%d-%b-%Y'):
        try: return datetime.strptime(s, f).date()
        except ValueError: pass
    return None
def exp2(i, t):
    rows = rows_of(t['files']['orders.csv'])
    good = [(pdate(r['Date']), r) for r in rows]
    bad = sum(1 for d, r in good if d is None); good = [(d, r) for d, r in good if d is not None]
    out = ['Bad dates skipped: %d' % bad]
    try: m = int(i[0].strip())
    except ValueError: m = 0
    if not 1 <= m <= 12: return out + ['Please enter a month from 1 to 12']
    mo = [(d, r) for d, r in good if d.month == m]
    if not mo: return out + ['No orders in ' + MONTHS[m - 1]]
    sales = [Fr(r['Sales']) for d, r in mo]; prof = [Fr(r['Profit']) for d, r in mo]
    ts, tp = sum(sales), sum(prof)
    out += ['Report for ' + MONTHS[m - 1], 'Orders: %d' % len(mo), 'Total sales: ' + money(ts), 'Total profit: ' + money(tp), 'Margin: ' + pct(tp / ts * 100)]
    cats = {}
    for d, r in mo: cats[r['Category']] = cats.get(r['Category'], 0) + Fr(r['Sales'])
    for c in sorted(cats, key=lambda c: (-cats[c], c)):
        out.append('%s: %s (%s of sales)' % (c, money(cats[c]), pct(cats[c] / ts * 100)))
    reg = {}
    for d, r in mo: reg[r['Region']] = reg.get(r['Region'], 0) + Fr(r['Sales'])
    br = sorted(reg, key=lambda k: (-reg[k], k))[0]
    day = {}
    for d, r in mo: day[d] = day.get(d, 0) + Fr(r['Sales'])
    bd = sorted(day, key=lambda k: (-day[k], k))[0]
    return out + ['Best region: %s (%s)' % (br, money(reg[br])), 'Best day: %s (%s)' % (bd.strftime('%d %b %Y'), money(day[bd])), 'Orders at a loss: %d' % sum(1 for p in prof if p < 0)]
O2 = H2 + '''2024-11-02,Electronics,South,8400,960
05/11/2024,Clothing,North,1250,310
2024-11-05,Groceries,South,640,48
12-Nov-2024,Furniture,West,5600,840
2024-11-12,Electronics,North,7350,-220
not known,Clothing,East,900,150
15/11/2024,Clothing,South,2100,525
2024-11-15,Groceries,East,480,30
2024-10-28,Electronics,West,6900,780
2024-11-20,Furniture,South,4300,-150
2024-11-28,Electronics,East,9100,1050
2024-12-01,Clothing,North,1800,420
'''
O2B = H2 + '''2024-03-04,Groceries,North,520,40
2024-03-04,Clothing,North,1480,370
08/03/2024,Electronics,West,6100,610
2024-03-11,Clothing,South,990,240
2024-03-18,Furniture,East,3800,450
19-Mar-2024,Groceries,South,760,-20
2024-03-25,Electronics,South,5200,520
2024-04-02,Clothing,West,1300,330
'''
O2C = H2 + '''2024-07-01,Furniture,North,4700,560
2024-07-03,Furniture,South,3900,-310
03/07/2024,Clothing,East,1150,290
2024-07-09,Groceries,West,610,55
2024-07-14,Electronics,North,8800,970
2024-07-14,Groceries,North,430,25
31-Jul-2024,Clothing,West,2350,600
2024-07-22,Electronics,East,6400,-90
pending,Clothing,North,800,200
'''
P2 = dict(
    id='p8-2', level=2, title='Monthly sales report', short='Read a year of orders, ask for a month and print that month\'s sales report.',
    story=('Rahul manages a chain of stores across India. The till system exports **`orders.csv`**: one row per order with the date, the category, the region, the sales and the profit in rupees. '
           'The dates come in three styles, and a few are not dates at all.\n'
           'At the start of every month Rahul wants a report for the month he types in: totals, margin, the categories with their share of sales, the best region and the best day.'),
    objectives=['Turn mixed text dates into real dates with `pd.to_datetime()` and drop the bad ones', 'Check a typed month and filter the rows with a mask',
                'Total, group and sort with `sum()`, `groupby()` and `sort_values()`', 'Find the best region and the best day with `idxmax()`'],
    may=['everything from Parts 1-7', 'Pandas: `read_csv`, `to_datetime`, `dropna`, `.dt`, masks, `groupby`, `sum`, `sort_values`, `idxmax`, `reset_index`'],
    mustnot=NOT_YET,
    tasks=['Read `orders.csv` (columns `Date`, `Category`, `Region`, `Sales`, `Profit`). Convert `Date` with `format="mixed"`, `dayfirst=True` and `errors="coerce"`.',
           'Count the dates that could not be read, drop those rows and print `Bad dates skipped: <n>`.',
           'Ask `Month (1-12): `. If it is not a whole number from 1 to 12, print `Please enter a month from 1 to 12` and stop.',
           'Keep only that month\'s orders. If there are none, print `No orders in <Month>` (the full month name) and stop.',
           'Print `Report for <Month>`, `Orders: <n>`, `Total sales`, `Total profit` and `Margin: <x.x>%` (profit ÷ sales × 100).',
           'For each category, largest sales first (a tie: A to Z), print `<Category>: ₹<sales> (<x.x>% of sales)`.',
           'Print the `Best region` with its sales, and the `Best day` (the date with the most sales, written like `02 Nov 2024`) with its sales. On a tie, take the region A to Z first and the earlier day.',
           'Print `Orders at a loss: <n>`: the orders of the month with a profit below 0.'],
    lines=['Bad dates skipped: <n>', 'Report for <Month>', 'Orders: <n>', 'Total sales: ₹<amount>', 'Total profit: ₹<amount>', 'Margin: <x.x>%',
           '<Category>: ₹<amount> (<x.x>% of sales)', 'Best region: <Region> (₹<amount>)', 'Best day: <dd Mon yyyy> (₹<amount>)', 'Orders at a loss: <n>',
           'Please enter a month from 1 to 12', 'No orders in <Month>'],
    rules='Money has `₹`, commas and 2 decimals. Percents have 1 decimal. Month names are in full (`November`). Dates in `05/11/2024` style are day first.',
    sample={'orders.csv': O2},
    edge=['A month with **no orders**.', 'A month that is **not 1 to 12**, or not a number.', 'Two categories or regions with the **same total**.', 'A **negative** profit (a loss) in the month.', 'Dates that are **not dates**, like `not known`.'],
    hints=['`orders["Date"] = pd.to_datetime(orders["Date"], format="mixed", dayfirst=True, errors="coerce")`, then count `orders["Date"].isna().sum()` and `orders = orders.dropna(subset=["Date"])`.',
           'Read the month inside `try` / `except ValueError`. Filter with `month = orders[orders["Date"].dt.month == number]`. `MONTHS[number - 1]` gives the name if you make a list of the 12 names.',
           'Categories: `cats = month.groupby("Category")["Sales"].sum().reset_index()`, then `cats.sort_values(["Sales", "Category"], ascending=[False, True])`. Best day: `month.groupby("Date")["Sales"].sum()` and `idxmax()`, then `.strftime("%d %b %Y")`.'],
    starter='# Project 8.2: Monthly sales report\nimport pandas as pd\n\nMONTHS = ["January", "February", "March", "April", "May", "June",\n          "July", "August", "September", "October", "November", "December"]\n',
    sol='''# Project 8.2: Monthly sales report
import pandas as pd

MONTHS = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]

orders = pd.read_csv("orders.csv")
orders["Date"] = pd.to_datetime(orders["Date"], format="mixed", dayfirst=True, errors="coerce")
print(f"Bad dates skipped: {orders['Date'].isna().sum()}")
orders = orders.dropna(subset=["Date"])
try:
    number = int(input("Month (1-12): "))
except ValueError:
    number = 0
if not 1 <= number <= 12:
    print("Please enter a month from 1 to 12")
else:
    name = MONTHS[number - 1]
    month = orders[orders["Date"].dt.month == number]
    if len(month) == 0:
        print(f"No orders in {name}")
    else:
        total_sales = month["Sales"].sum()
        total_profit = month["Profit"].sum()
        print(f"Report for {name}")
        print(f"Orders: {len(month)}")
        print(f"Total sales: ₹{total_sales:,.2f}")
        print(f"Total profit: ₹{total_profit:,.2f}")
        print(f"Margin: {total_profit / total_sales * 100:.1f}%")
        # Categories: largest sales first, ties A to Z
        cats = month.groupby("Category")["Sales"].sum().reset_index()
        cats = cats.sort_values(["Sales", "Category"], ascending=[False, True])
        for cat, amount in zip(cats["Category"], cats["Sales"]):
            print(f"{cat}: ₹{amount:,.2f} ({amount / total_sales * 100:.1f}% of sales)")
        regions = month.groupby("Region")["Sales"].sum()
        best = regions.idxmax()
        print(f"Best region: {best} (₹{regions[best]:,.2f})")
        days = month.groupby("Date")["Sales"].sum()
        top_day = days.idxmax()
        print(f"Best day: {top_day.strftime('%d %b %Y')} (₹{days[top_day]:,.2f})")
        print(f"Orders at a loss: {(month['Profit'] < 0).sum()}")''',
    weak='''import pandas as pd
df = pd.read_csv("orders.csv")
df["Date"] = pd.to_datetime(df["Date"], format="mixed", errors="coerce")
m = int(input("Month (1-12): "))
month = df[df["Date"].dt.month == m]
print(f"Orders: {len(month)}")
print(f"Total sales: ₹{month['Sales'].sum():,.2f}")
print(f"Total profit: ₹{month['Profit'].sum():,.2f}")
cats = month.groupby("Category")["Sales"].sum()
for c in cats.index:
    print(f"{c}: ₹{cats[c]:,.2f}")''',
    need=[dict(any=['method:to_datetime'], min=1, label='`pd.to_datetime()` for the dates'),
          dict(any=['kw:dayfirst'], min=1, label='`dayfirst=True` for Indian-style dates'),
          dict(any=['method:dropna'], min=1, label='`dropna()` to drop the bad dates'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` for a month that is not a number'),
          dict(any=['method:groupby'], min=2, label='`groupby()` for categories, regions and days'),
          dict(any=['method:sort_values'], min=1, label='`sort_values()` for the category order'),
          dict(any=['method:idxmax'], min=2, label='`idxmax()` for the best region and day'),
          dict(any=['method:strftime'], min=1, label='`strftime()` to write the best day')],
    expect=exp2,
    tests=[dict(name='November, the festival month', kind='main', inputs=['11'], files={'orders.csv': O2}),
           dict(name='A March report', kind='main', inputs=['3'], files={'orders.csv': O2B}),
           dict(name='July, with a loss', kind='main', inputs=['7'], files={'orders.csv': O2C}),
           dict(name='Day first, not month first', kind='logic', inputs=['5'], check=['Bad', 'Orders:', 'Total sales', 'Best day'], files={'orders.csv': H2 + '04/05/2024,Clothing,North,1000,200\n2024-05-20,Groceries,South,300,30\n05/04/2024,Electronics,West,9000,900\n'},
                tip='`04/05/2024` is 4 May and `05/04/2024` is 5 April. Without `dayfirst=True` Pandas reads them the American way and the wrong orders land in May.'),
           dict(name='Ties in the rankings', kind='logic', inputs=['2'], check=['Clothing', 'Groceries', 'Best region', 'Best day'], files={'orders.csv': H2 + '2024-02-03,Groceries,West,400,40\n2024-02-03,Clothing,East,300,60\n2024-02-09,Clothing,West,300,60\n2024-02-09,Groceries,East,200,20\n2024-02-09,Electronics,East,200,20\n'},
                tip='Sort the categories by sales **and** name: `sort_values(["Sales", "Category"], ascending=[False, True])`. `idxmax()` on a grouped Series picks the first label, which is A to Z for regions and the earlier date for days.'),
           dict(name='Margin and losses', kind='logic', inputs=['9'], check=['Total profit', 'Margin', 'Orders at a loss'], files={'orders.csv': H2 + '2024-09-02,Furniture,North,4000,-400\n2024-09-05,Clothing,South,1000,250\n2024-09-08,Electronics,East,5000,-50\n2024-09-30,Groceries,West,1000,100\n'},
                tip='Margin is total profit ÷ total sales × 100 (it can be negative), and a loss is a profit **below** 0.'),
           dict(name='A month with no orders', kind='edge', inputs=['6'], files={'orders.csv': O2B},
                tip='After filtering, check `len(month) == 0` and print `No orders in June`.'),
           dict(name='Not a month', kind='edge', inputs=['13'], files={'orders.csv': O2B},
                tip='Check that the month is from 1 to 12 before you filter: `if not 1 <= number <= 12:`.'),
           dict(name='A word instead of a number', kind='edge', inputs=['nov'], files={'orders.csv': O2},
                tip='`int("nov")` raises a `ValueError`: catch it and print `Please enter a month from 1 to 12`.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
HM = 'student_id,name,class,maths,science,english\n'
HS = 'student_id,house\n'
SUBJ = ['maths', 'science', 'english']
def grade(p):
    return 'A+' if p >= 90 else 'A' if p >= 75 else 'B' if p >= 60 else 'C' if p >= 40 else 'F'
def exp3(i, t):
    mk = rows_of(t['files']['marks.csv']); st = rows_of(t['files']['students.csv'])
    if not mk: return ['No students in marks.csv']
    absent = sum(1 for r in mk for s in SUBJ if r[s].strip() == '')
    out = ['Students: %d' % len(mk), 'Absent marks: %d' % absent]
    recs = []
    for r in mk:
        m = [Fr(r[s]) if r[s].strip() else Fr(0) for s in SUBJ]
        p = sum(m) / 3
        recs.append(dict(id=r['student_id'], name=r['name'].strip(), cls=r['class'].strip(), p=p, ok=all(x >= 35 for x in m)))
    ok = sum(1 for x in recs if x['ok'])
    out.append('Passed: %d of %d (%s)' % (ok, len(recs), pct(Fr(ok, len(recs)) * 100)))
    g = [grade(x['p']) for x in recs]
    out.append('Grades: ' + ', '.join('%s %d' % (k, g.count(k)) for k in ['A+', 'A', 'B', 'C', 'F']))
    for c in sorted(set(x['cls'] for x in recs)):
        L = [x for x in recs if x['cls'] == c]; top = max(L, key=lambda x: x['p'])
        top = [x for x in L if x['p'] == top['p']][0]
        out.append('Class %s: %d students, average %s, pass rate %s, topper %s (%s)' % (c, len(L), pct(sum(x['p'] for x in L) / len(L)), pct(Fr(sum(1 for x in L if x['ok']), len(L)) * 100), top['name'], pct(top['p'])))
    house = {}
    for r in st:
        if r['student_id'] not in house: house[r['student_id']] = r['house'].strip()
    miss = [x['id'] for x in recs if x['id'] not in house]
    out.append('Missing house: ' + (', '.join(miss) or 'none'))
    hs = {}
    for x in recs:
        if x['id'] in house: hs.setdefault(house[x['id']], []).append(x['p'])
    for h in sorted(hs, key=lambda h: (-sum(hs[h]) / len(hs[h]), h)):
        out.append('House %s: %s' % (h, pct(sum(hs[h]) / len(hs[h]))))
    return out
M3 = HM + '''S101,Kavya Nair,9A,92,88,95
S102,Rohit Jain,9A,67,72,58
S103,Imran Khan,9B,45,,52
S104,Lata Iyer,9B,81,77,84
S105,Om Prakash,9A,30,48,41
S106,Divya Rao,9B,58,61,70
S107,Arjun Reddy,9A,74,69,80
S108,Sneha Pillai,9B,99,94,90
'''
ST3 = HS + 'S101,Red\nS102,Blue\nS103,Green\nS104,Red\nS106,Blue\nS107,Green\nS108,Red\n'
M3B = HM + '''S201,Asha Menon,10A,88,91,79
S202,Vikram Das,10A,55,49,63
S203,Neha Joshi,10B,72,80,77
S204,Ravi Kumar,10B,34,40,38
S205,Meena Shah,10A,95,97,92
S206,Karthik Bose,10B,61,,68
'''
ST3B = HS + 'S201,Yellow\nS202,Blue\nS203,Yellow\nS204,Blue\nS205,Green\nS206,Green\n'
M3C = HM + '''S301,Pooja Patil,8A,70,75,80
S302,Manoj Verma,8A,40,36,45
S303,Fatima Ali,8C,85,92,88
S304,Gopal Naidu,8C,52,58,61
S305,Harini Prasad,8A,,,
S306,Tarun Lal,8C,77,74,70
S307,Swati Desai,8A,91,89,94
'''
ST3C = HS + 'S301,Red\nS302,Red\nS303,Blue\nS303,Blue\nS304,Green\nS306,Blue\nS307,Green\n'
P3 = dict(
    id='p8-3', level=3, title='Student results analysis', short='Combine marks and house lists, grade every student and compare classes and houses.',
    story=('Mrs Iyer is the exams coordinator at a school in Vijayawada. After the term exams she has two files. **`marks.csv`** has every student\'s marks in maths, science and English '
           '(a blank means the student was absent). **`students.csv`** says which house each student belongs to, but it is kept by another teacher, so a few students are missing and one may be listed twice.\n'
           'She wants one report: pass counts, grades, a line for every class with its topper, the students with no house, and the houses ranked by their average.'),
    objectives=['Read two CSV files and fill blank marks with `fillna(0)`', 'Add columns with maths and with your own function through `apply()`',
                'Summarise each class with `groupby()` and find each topper with `idxmax()`', 'Join the two files with `merge()`, after removing repeated ids, and find unmatched rows with `isna()`'],
    may=['everything from Parts 1-7', 'all of Part 8: `read_csv`, `fillna`, `apply`, `np.where`, masks, `groupby`, `agg`, `idxmax`, `drop_duplicates`, `merge`, `isna`, `sort_values`'],
    mustnot=NOT_YET,
    tasks=['Read `marks.csv` (`student_id`, `name`, `class`, `maths`, `science`, `english`) and `students.csv` (`student_id`, `house`). If `marks.csv` has no rows, print `No students in marks.csv` and stop.',
           'Print `Students: <n>` and `Absent marks: <n>` (the number of blank mark cells). Then treat a blank mark as 0.',
           'Add `percent` = (maths + science + english) ÷ 3, and `passed` = True when **every** subject is 35 or more. Print `Passed: <p> of <n> (<x.x>%)`.',
           'Write `def grade(percent)`: `A+` for 90 or more, `A` for 75 or more, `B` for 60 or more, `C` for 40 or more, otherwise `F`. Add it as a column with `apply` and print `Grades: A+ <n>, A <n>, B <n>, C <n>, F <n>` (always all five, in this order).',
           'For each class, A to Z, print `Class <c>: <n> students, average <x.x>%, pass rate <x.x>%, topper <name> (<x.x>%)`. On a tie, the topper is the one higher up in the file.',
           'Remove repeated `student_id`s from `students.csv`, then `merge` it onto the marks with `how="left"`. Print `Missing house: ` and the ids with no house, in file order, separated by `, ` (or `none`).',
           'Print `House <name>: <x.x>%` (the average percent) for every house, highest first; on a tie, A to Z.'],
    lines=['Students: <n>', 'Absent marks: <n>', 'Passed: <p> of <n> (<x.x>%)', 'Grades: A+ <n>, A <n>, B <n>, C <n>, F <n>',
           'Class <c>: <n> students, average <x.x>%, pass rate <x.x>%, topper <name> (<x.x>%)', 'Missing house: <ids> or none', 'House <name>: <x.x>%', 'No students in marks.csv'],
    rules='Percents have 1 decimal and a `%` sign. A blank mark counts as 0 and as absent. Classes are A to Z; houses are highest average first.',
    sample={'marks.csv': M3, 'students.csv': ST3},
    edge=['A student who was **absent for every subject** (0%).', 'A student who is **in marks.csv but not in students.csv**.', 'A student id listed **twice** in students.csv: after a merge they would count twice.',
          'A mark of exactly **35** passes; 34 fails.', 'A grade with **nobody** in it still shows `0`.', 'Two students with the **same top percent** in a class.'],
    hints=['`marks[["maths", "science", "english"]].isna().sum().sum()` counts the blank cells; then `fillna(0)` on those columns. `percent` is the sum of the three columns ÷ 3.',
           'Passed: `(marks["maths"] >= 35) & (marks["science"] >= 35) & (marks["english"] >= 35)`. For the grade line, `counts = marks["grade"].value_counts()` and `counts.get("A+", 0)` gives 0 for a missing grade.',
           'Class lines: `marks.groupby("class")` with `agg(students=("name", "count"), average=("percent", "mean"), rate=("passed", "mean"))`, and `marks.loc[marks.groupby("class")["percent"].idxmax()]` for the toppers. Houses: `students.drop_duplicates(subset="student_id")`, then `pd.merge(marks, houses, on="student_id", how="left")`.'],
    starter='# Project 8.3: Student results analysis\nimport pandas as pd\n\nSUBJECTS = ["maths", "science", "english"]\n',
    sol='''# Project 8.3: Student results analysis
import pandas as pd

SUBJECTS = ["maths", "science", "english"]


def grade(percent):
    """Turn a percent into a grade."""
    if percent >= 90:
        return "A+"
    elif percent >= 75:
        return "A"
    elif percent >= 60:
        return "B"
    elif percent >= 40:
        return "C"
    return "F"


marks = pd.read_csv("marks.csv")
students = pd.read_csv("students.csv")
if len(marks) == 0:
    print("No students in marks.csv")
else:
    print(f"Students: {len(marks)}")
    print(f"Absent marks: {marks[SUBJECTS].isna().sum().sum()}")
    marks[SUBJECTS] = marks[SUBJECTS].fillna(0)
    marks["percent"] = (marks["maths"] + marks["science"] + marks["english"]) / 3
    marks["passed"] = ((marks["maths"] >= 35) & (marks["science"] >= 35)
                       & (marks["english"] >= 35))
    passed = marks["passed"].sum()
    print(f"Passed: {passed} of {len(marks)} ({passed / len(marks) * 100:.1f}%)")
    marks["grade"] = marks["percent"].apply(grade)
    counts = marks["grade"].value_counts()
    print("Grades: " + ", ".join(f"{g} {counts.get(g, 0)}" for g in ["A+", "A", "B", "C", "F"]))
    # One line per class, with its topper
    report = marks.groupby("class").agg(students=("name", "count"), average=("percent", "mean"),
                                        rate=("passed", "mean"))
    toppers = marks.loc[marks.groupby("class")["percent"].idxmax()].set_index("class")
    for cls in report.index:
        count, average = report.loc[cls, "students"], report.loc[cls, "average"]
        rate = report.loc[cls, "rate"] * 100
        top = toppers.loc[cls]
        print(f"Class {cls}: {count} students, average {average:.1f}%, pass rate {rate:.1f}%, "
              f"topper {top['name']} ({top['percent']:.1f}%)")
    # Join the houses (one row per student id) and find who has none
    houses = students.drop_duplicates(subset="student_id")
    merged = pd.merge(marks, houses, on="student_id", how="left")
    missing = merged[merged["house"].isna()]["student_id"].tolist()
    print("Missing house: " + (", ".join(missing) or "none"))
    avg = merged.groupby("house")["percent"].mean().reset_index()
    avg = avg.sort_values(["percent", "house"], ascending=[False, True])
    for name, value in zip(avg["house"], avg["percent"]):
        print(f"House {name}: {value:.1f}%")''',
    weak='''import pandas as pd
marks = pd.read_csv("marks.csv")
students = pd.read_csv("students.csv")
print(f"Students: {len(marks)}")
marks = marks.dropna()
marks["percent"] = (marks["maths"] + marks["science"] + marks["english"]) / 3
passed = (marks["percent"] >= 35).sum()
print(f"Passed: {passed} of {len(marks)} ({passed / len(marks) * 100:.1f}%)")
merged = pd.merge(marks, students, on="student_id")
avg = merged.groupby("house")["percent"].mean()
for h in avg.index:
    print(f"House {h}: {avg[h]:.1f}%")''',
    need=[dict(any=['method:fillna'], min=1, label='`fillna(0)` for the absent marks'),
          dict(any=['def:grade'], min=1, label='your own `grade()` function'),
          dict(any=['method:apply'], min=1, label='`apply()` to grade every student'),
          dict(any=['method:groupby'], min=2, label='`groupby()` for classes and houses'),
          dict(any=['method:idxmax'], min=1, label='`idxmax()` for the toppers'),
          dict(any=['method:drop_duplicates'], min=1, label='`drop_duplicates()` for repeated ids'),
          dict(any=['method:merge'], min=1, label='`pd.merge()` to join the two files'),
          dict(any=['method:isna'], min=1, label='`isna()` to find the students with no house')],
    expect=exp3,
    tests=[dict(name='Class 9 results', kind='main', inputs=[], files={'marks.csv': M3, 'students.csv': ST3}),
           dict(name='Class 10 results', kind='main', inputs=[], files={'marks.csv': M3B, 'students.csv': ST3B}),
           dict(name='Class 8, with a repeated id', kind='main', inputs=[], files={'marks.csv': M3C, 'students.csv': ST3C}),
           dict(name='35 passes, 34 fails', kind='logic', inputs=[], check=['Passed', 'Class'], files={'marks.csv': HM + 'S1,Asha,7A,35,35,35\nS2,Ravi,7A,34,90,90\nS3,Neha,7A,60,60,60\n', 'students.csv': HS + 'S1,Red\nS2,Red\nS3,Blue\n'},
                tip='A student passes only if **every** subject is 35 or more: `(maths >= 35) & (science >= 35) & (english >= 35)`. A high percent does not save a failed subject.'),
           dict(name='Grade bands and empty grades', kind='logic', inputs=[], check=['Grades'], files={'marks.csv': HM + 'S1,Asha,7A,90,90,90\nS2,Ravi,7A,75,75,75\nS3,Neha,7A,74,74,75\nS4,Om,7A,40,40,40\n', 'students.csv': HS + 'S1,Red\nS2,Red\nS3,Blue\nS4,Blue\n'},
                tip='Test the highest band first: 90 is `A+`, 75 is `A`, 74.3 is `B`, 40 is `C`. Print all five grades, with `0` for one nobody got (`counts.get("F", 0)`).'),
           dict(name='A tie for the topper', kind='logic', inputs=[], check=['Class'], files={'marks.csv': HM + 'S1,Asha,7A,80,70,90\nS2,Ravi,7A,90,80,70\nS3,Neha,7B,50,50,50\n', 'students.csv': HS + 'S1,Red\nS2,Red\nS3,Blue\n'},
                tip='`groupby("class")["percent"].idxmax()` gives the **first** student with the top percent in each class.'),
           dict(name='Absent for everything', kind='edge', inputs=[], check=['Absent', 'Passed', 'Grades', 'Class'], files={'marks.csv': HM + 'S1,Asha,6A,,,\nS2,Ravi,6A,70,65,60\n', 'students.csv': HS + 'S1,Red\nS2,Blue\n'},
                tip='Count the blank cells before filling them, then fill with 0: a student absent for every subject gets 0%, an F and a fail.'),
           dict(name='Nobody in students.csv', kind='edge', inputs=[], check=['Missing house'], files={'marks.csv': HM + 'S1,Asha,6A,70,70,70\nS2,Ravi,6A,50,50,50\n', 'students.csv': HS},
                tip='A left merge keeps every student; with no houses at all, every `house` is NaN, so every id is missing.'),
           dict(name='Only the header in marks.csv', kind='edge', inputs=[], files={'marks.csv': HM, 'students.csv': ST3},
                tip='Check `len(marks) == 0` after reading, and print `No students in marks.csv`.')],
)
PROJECTS = [P1, P2, P3]
