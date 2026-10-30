# Part 1 projects (chapters 1-4). Only print, comments, variables, types, input(), int()/float()/str(),
# f-strings with format specs, joining/repeating text, arithmetic (// % **), comparison and logical operators.
PART = 1
TITLE = 'Part 1 projects: Python basics'
INTRO = ('Three small programs that a data analyst could really be asked to write. They use only Part 1: '
         '`print()`, variables, `input()`, type conversion, f-strings and operators. No `if`, no loops and no lists yet.')

def money(x): return '₹' + format(x, ',.2f')

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i):
    mu, mp, lu, lp, cu, cp = int(i[0]), float(i[1]), int(i[2]), float(i[3]), int(i[4]), float(i[5])
    m, l, c = mu * mp, lu * lp, cu * cp
    total = m + l + c
    return ['DAILY SALES REPORT', 'Mango juice revenue: ' + money(m), 'Lemon soda revenue: ' + money(l),
            'Sugarcane juice revenue: ' + money(c), 'Total units sold: ' + format(mu + lu + cu, ','),
            'Total revenue: ' + money(total), 'Average revenue per product: ' + money(total / 3)]

P1 = dict(
    id='p1-1', level=1, title='Daily sales summary', short='Turn a day of juice sales into a clean ₹ report.',
    story=('Meena runs a small juice shop in Guntur. She sells three drinks: **Mango juice**, **Lemon soda** and **Sugarcane juice**. '
           'Every evening she writes the units sold and the price of each drink in a notebook, then adds everything up by hand. '
           'It takes time, and sometimes the totals are wrong.\n'
           'Write a program that asks for the numbers, does all the maths, and prints a clean daily sales report.'),
    objectives=['Read numbers typed by the user with `input()`', 'Convert text to `int` and `float` correctly',
                'Do maths with `*`, `+` and `/`', 'Format money with an f-string: `₹1,305.00`'],
    may=['`print()`', 'variables', '`input()`', '`int()` and `float()`', 'f-strings with `:,` and `:,.2f`', '`+ - * /`', '`*` to repeat text'],
    mustnot=['`if` / `else`', 'loops', 'lists', 'your own functions', '`import`'],
    tasks=['Ask for 6 values with `input()`, **in this order**: Mango juice units, Mango juice price, Lemon soda units, Lemon soda price, Sugarcane juice units, Sugarcane juice price.',
           'Units are whole numbers, so convert them with `int()`. Prices can have paise (like `25.50`), so convert them with `float()`.',
           'Work out the revenue of each drink: units × price.',
           'Work out the total units sold and the total revenue.',
           'Work out the average revenue per product: the total revenue divided by 3 (there are always 3 drinks).',
           'Print a title line `DAILY SALES REPORT`, with a divider line above and below it made with `*` (for example `"=" * 34`).',
           'Print the report lines exactly as shown below. Money has a `₹`, commas and 2 decimals (`:,.2f`). Total units has commas (`:,`).',
           'Add a few comments that explain your steps.'],
    lines=['DAILY SALES REPORT', 'Mango juice revenue: ₹<amount>', 'Lemon soda revenue: ₹<amount>', 'Sugarcane juice revenue: ₹<amount>',
           'Total units sold: <units>', 'Total revenue: ₹<amount>', 'Average revenue per product: ₹<amount>'],
    rules='`<amount>` means money with commas and 2 decimals, like `2,400.00`. `<units>` means a whole number with commas, like `1,250`.',
    edge=['A drink sold **0 units** that day, or the shop was closed: the report still prints, with `₹0.00`.',
          'Prices with paise, like `25.50` or `19.99`: use `float()`, because `int("25.50")` crashes.',
          'A very busy day with **big numbers**, like 300,000 units: commas keep them readable.',
          'Numbers typed with **spaces** around them, like ` 12 `: `int()` and `float()` ignore those spaces.'],
    hints=['Use one variable per value, with a clear name, for example `mango_units = int(input("Mango juice units sold: "))`. The text inside `input()` is just the question shown to the user.',
           'Work out the revenue first, for example `mango_revenue = mango_units * mango_price`. Then add the three revenues for the total, and divide that total by 3 for the average.',
           'Print money with an f-string: `print(f"Total revenue: ₹{total_revenue:,.2f}")`. The `,` adds commas and `.2f` gives 2 decimal places. For the units use `{total_units:,}`.'],
    starter='# Project 1: Daily sales summary\n# Ask for the units and the price of each drink\nmango_units = int(input("Mango juice units sold: "))\n',
    sol='''# Project 1: Daily sales summary
# Ask for the units and the price of each drink
mango_units = int(input("Mango juice units sold: "))
mango_price = float(input("Mango juice price: "))
lemon_units = int(input("Lemon soda units sold: "))
lemon_price = float(input("Lemon soda price: "))
cane_units = int(input("Sugarcane juice units sold: "))
cane_price = float(input("Sugarcane juice price: "))

# Revenue of each drink = units x price
mango_revenue = mango_units * mango_price
lemon_revenue = lemon_units * lemon_price
cane_revenue = cane_units * cane_price

# Totals, and the average over the 3 drinks
total_units = mango_units + lemon_units + cane_units
total_revenue = mango_revenue + lemon_revenue + cane_revenue
average_revenue = total_revenue / 3

# Print the report
print("=" * 34)
print("DAILY SALES REPORT")
print("=" * 34)
print(f"Mango juice revenue: ₹{mango_revenue:,.2f}")
print(f"Lemon soda revenue: ₹{lemon_revenue:,.2f}")
print(f"Sugarcane juice revenue: ₹{cane_revenue:,.2f}")
print("-" * 34)
print(f"Total units sold: {total_units:,}")
print(f"Total revenue: ₹{total_revenue:,.2f}")
print(f"Average revenue per product: ₹{average_revenue:,.2f}")''',
    weak='''a = int(input("Mango units: "))
b = float(input("Mango price: "))
c = int(input("Lemon units: "))
d = float(input("Lemon price: "))
e = int(input("Cane units: "))
f = float(input("Cane price: "))
total=a*b+c*d+e*f
print("DAILY SALES REPORT")
print(f"Mango juice revenue: ₹{a*b:.2f}")
print(f"Lemon soda revenue: ₹{c*d:.2f}")
print(f"Sugarcane juice revenue: ₹{e*f:.2f}")
print(f"Total units sold: {a+c+e}")
print(f"Total revenue: ₹{total:.2f}")
print(f"Average revenue per product: ₹{total/2:.2f}")''',
    need=[dict(any=['call:input'], min=6, label='`input()` to read all 6 values'),
          dict(any=['call:int'], min=1, label='`int()` for the units (whole numbers)'),
          dict(any=['call:float'], min=1, label='`float()` for the prices (they can have paise)'),
          dict(any=['node:JoinedStr'], min=1, label='f-strings to build the report lines'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money'),
          dict(any=['strrepeat'], min=1, label='`*` to repeat a character for the divider lines'),
          dict(any=['op:Div'], min=1, label='`/` to work out the average')],
    expect=exp1,
    tests=[dict(name='A normal day', kind='main', inputs=['40', '60', '25', '30', '30', '25.5']),
           dict(name='Another day', kind='main', inputs=['12', '55', '48', '20', '7', '35']),
           dict(name='A busy weekend', kind='main', inputs=['150', '60', '210', '30', '95', '25']),
           dict(name='The average uses all 3 drinks', kind='logic', inputs=['10', '10', '20', '10', '30', '10'], check=['Total units', 'Total revenue', 'Average'],
                tip='The average is the **total revenue of all 3 drinks divided by 3**. Check that you add all three revenues and divide by 3.'),
           dict(name='Each drink uses its own price', kind='logic', inputs=['5', '100', '5', '1', '5', '10'], check=['Mango', 'Lemon', 'Sugarcane', 'Total revenue'],
                tip='Multiply each drink\'s units by **that drink\'s** price. Check that you did not mix up the variables.'),
           dict(name='Prices with paise', kind='logic', inputs=['3', '19.99', '2', '0.5', '1', '99.95'], check=['Mango', 'Lemon', 'Sugarcane', 'Total revenue'],
                tip='Prices can have paise, like `19.99`. Convert prices with `float()`, not `int()`.'),
           dict(name='Shop closed: all zeros', kind='edge', inputs=['0', '0', '0', '0', '0', '0'],
                tip='With all zeros, every amount should print as `₹0.00`. Dividing the total by 3 is safe even when the total is 0.'),
           dict(name='Very big numbers', kind='edge', inputs=['125000', '1999.99', '98000', '249.5', '300000', '10'],
                tip='Big amounts need commas: use `:,.2f` for money and `:,` for the units.'),
           dict(name='Numbers typed with spaces', kind='edge', inputs=[' 12 ', ' 45.5 ', '3', '10', ' 0 ', '99'],
                tip='`int(" 12 ")` and `float(" 45.5 ")` work fine. Make sure you convert every value before doing maths.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def exp2(i):
    rev, cost, last, target = (float(x) for x in i)
    profit = rev - cost
    margin = profit / rev * 100
    growth = (rev - last) / last * 100
    met = rev >= target
    return ['MONTHLY KPI REPORT', 'Revenue: ' + money(rev), 'Cost: ' + money(cost), 'Profit: ' + money(profit),
            'Profit margin: ' + format(margin, '.2f') + '%', 'Growth vs last month: ' + format(growth, '.2f') + '%',
            'Target achieved: ' + format(rev / target, '.1%'), 'Target met: ' + str(met), 'Team bonus: ' + str(met and margin >= 15)]

P2 = dict(
    id='p1-2', level=2, title='Monthly KPI report', short='Turn four numbers into the KPIs a manager checks every month.',
    story=('Ravi is a junior data analyst at a chain of electronics stores in Hyderabad. At the end of every month, his manager asks for the same KPIs '
           '(key performance indicators): profit, profit margin, growth compared with last month, and how close the store came to its target.\n'
           'The team also gets a **bonus** when the store meets its target **and** keeps a profit margin of at least 15%.\n'
           'Write a program that asks for four numbers and prints the whole KPI report, including `True`/`False` answers for the target and the bonus.'),
    objectives=['Turn a business question into formulas', 'Use brackets to control the order of operations',
                'Format money and percentages with f-strings', 'Answer yes/no questions with comparison and logical operators'],
    may=['`print()`', 'variables', '`input()`', '`float()`', 'f-strings with `:,.2f`, `:.2f` and `:.1%`', '`+ - * /` and brackets', '`>=`, `>`, `and`, `or`, `not`'],
    mustnot=['`if` / `else`', 'loops', 'lists', 'your own functions', '`import`'],
    tasks=['Ask for 4 values with `input()`, **in this order**: this month\'s revenue, this month\'s cost, last month\'s revenue, the monthly target. Convert each one with `float()`.',
           'Profit = revenue − cost.',
           'Profit margin (%) = profit ÷ revenue × 100.',
           'Growth vs last month (%) = (revenue − last month\'s revenue) ÷ last month\'s revenue × 100. Use brackets.',
           'Target achieved = revenue ÷ target. Print it with the `:.1%` format, which multiplies by 100 for you.',
           'Target met = `True` when the revenue is **at least** the target (so exactly on target counts).',
           'Team bonus = `True` when the target is met **and** the profit margin is at least 15.',
           'Print a title line `MONTHLY KPI REPORT` and the report lines exactly as shown below. A loss prints as a minus amount, like `Profit: ₹-60,000.00`. That is fine: you cannot use `if` yet.'],
    lines=['MONTHLY KPI REPORT', 'Revenue: ₹<amount>', 'Cost: ₹<amount>', 'Profit: ₹<amount>', 'Profit margin: <number>%',
           'Growth vs last month: <number>%', 'Target achieved: <percent>', 'Target met: <True or False>', 'Team bonus: <True or False>'],
    rules='`<amount>` means money with commas and 2 decimals (`:,.2f`), like `150,000.00`. `<number>%` means 2 decimals then a `%` sign (`:.2f`), like `17.65%`. `<percent>` uses the `:.1%` format, like `94.4%`. `<True or False>` is the word `True` or `False`.',
    edge=['Allowed values: revenue, last month\'s revenue and the target are always **more than 0** (the store was open). The cost can be 0 or more. So you never divide by zero.',
          'A **loss** month (cost bigger than revenue): profit, margin and growth come out negative.',
          'Revenue **exactly equal** to the target: the target is met. Use `>=`, not `>`.',
          'A month with **no cost**: the margin is 100%.',
          'Very **big numbers** (crores) and numbers typed with **spaces**.'],
    hints=['Read all four numbers first: `revenue = float(input("This month\'s revenue: "))`, and the same for `cost`, `last_revenue` and `target`. Then work out one KPI per line, each in its own variable.',
           'Brackets matter for growth: `(revenue - last_revenue) / last_revenue * 100`. Without them, Python divides first. For the yes/no answers, a comparison gives `True` or `False` that you can store: `target_met = revenue >= target`.',
           'The bonus needs both conditions: `team_bonus = target_met and margin >= 15`. Print with f-strings: `{profit:,.2f}` for money, `{margin:.2f}%` for the margin, and `{achieved:.1%}` where `achieved = revenue / target`.'],
    starter='# Project 2: Monthly KPI report\n# Revenue, last month\'s revenue and the target are always more than 0\n',
    sol='''# Project 2: Monthly KPI report
# Revenue, last month's revenue and the target are always more than 0
revenue = float(input("This month's revenue: "))
cost = float(input("This month's cost: "))
last_revenue = float(input("Last month's revenue: "))
target = float(input("Monthly target: "))

# Work out the KPIs
profit = revenue - cost
margin = profit / revenue * 100
growth = (revenue - last_revenue) / last_revenue * 100
achieved = revenue / target

# Yes/no answers: exactly on target counts as met
target_met = revenue >= target
team_bonus = target_met and margin >= 15

# Print the report
print("=" * 32)
print("MONTHLY KPI REPORT")
print("=" * 32)
print(f"Revenue: ₹{revenue:,.2f}")
print(f"Cost: ₹{cost:,.2f}")
print(f"Profit: ₹{profit:,.2f}")
print(f"Profit margin: {margin:.2f}%")
print(f"Growth vs last month: {growth:.2f}%")
print(f"Target achieved: {achieved:.1%}")
print(f"Target met: {target_met}")
print(f"Team bonus: {team_bonus}")''',
    weak='''# KPI report
r = float(input("Revenue: "))
c = float(input("Cost: "))
l = float(input("Last month: "))
t = float(input("Target: "))
p = r - c
m = p / r * 100
print("MONTHLY KPI REPORT")
print(f"Revenue: ₹{r:,.2f}")
print(f"Cost: ₹{c:,.2f}")
print(f"Profit: ₹{p:,.2f}")
print(f"Profit margin: {m:.2f}%")
print(f"Growth vs last month: {(r - l) / l * 100:.2f}%")
print(f"Target achieved: {r / t * 100:.1f}%")
print("Target met:", r > t)
print("Team bonus:", r > t or m >= 15)''',
    need=[dict(any=['call:input'], min=4, label='`input()` to read all 4 values'),
          dict(any=['call:float'], min=1, label='`float()` to turn the typed text into numbers'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money'),
          dict(any=['spec:percent'], min=1, label='the `:.1%` format for the target achieved'),
          dict(any=['cmp:GtE', 'cmp:Gt', 'cmp:LtE', 'cmp:Lt'], min=1, label='a comparison operator (`>=`) for the yes/no answers'),
          dict(any=['bool:And'], min=1, label='`and` to combine the two bonus conditions'),
          dict(any=['op:Div'], min=1, label='`/` for the margin, growth and target'),
          ],
    expect=exp2,
    tests=[dict(name='A normal month', kind='main', inputs=['850000', '700000', '800000', '900000']),
           dict(name='A great month', kind='main', inputs=['1200000', '950000', '1000000', '1100000']),
           dict(name='Target met, small margin', kind='main', inputs=['455000.50', '390500.25', '470000', '450000']),
           dict(name='Bonus needs BOTH conditions', kind='logic', inputs=['500000', '300000', '400000', '600000'], check=['Profit margin', 'Target met', 'Team bonus'],
                tip='The bonus needs the target met **and** a margin of at least 15. A high margin alone is not enough: use `and`, not `or`.'),
           dict(name='Exactly on target counts', kind='logic', inputs=['600000', '480000', '600000', '600000'], check=['Growth', 'Target achieved', 'Target met', 'Team bonus'],
                tip='Revenue equal to the target means the target is met. Use `>=` (at least), not `>`.'),
           dict(name='Growth uses last month as the base', kind='logic', inputs=['300000', '100000', '200000', '250000'], check=['Profit margin', 'Growth'],
                tip='Growth = **(revenue − last month) ÷ last month** × 100. Put the subtraction in brackets and divide by last month\'s revenue.'),
           dict(name='A loss month', kind='edge', inputs=['200000', '260000', '250000', '300000'],
                tip='When the cost is bigger than the revenue, profit, margin and growth are negative. The same formulas still work.'),
           dict(name='No cost at all', kind='edge', inputs=['50000', '0', '40000', '50000'],
                tip='A cost of 0 is allowed. The margin is then 100.00%, and revenue equal to the target still meets it.'),
           dict(name='Crore-size numbers typed with spaces', kind='edge', inputs=[' 125000000 ', ' 98000000.75 ', '110000000', '120000000'],
                tip='Big numbers need `:,.2f`. `float(" 98000000.75 ")` ignores the spaces.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
def exp3(i):
    secs, sess, mb, orders = (int(x) for x in i)
    avg = secs // sess
    conv = orders / sess * 100
    return ['WEBSITE DAILY SUMMARY', 'Sessions: ' + format(sess, ','), 'Orders: ' + format(orders, ','),
            'Total time: %d h %d m %d s' % (secs // 3600, secs % 3600 // 60, secs % 60),
            'Average session: %d min %d sec' % (avg // 60, avg % 60),
            'Data used: ' + format(mb / 1024, ',.2f') + ' GB', 'Data per session: ' + format(mb / sess, '.2f') + ' MB',
            'Conversion rate: ' + format(conv, '.2f') + '%', 'Healthy day: ' + str(conv >= 2 and avg >= 120)]

P3 = dict(
    id='p1-3', level=3, title='Website session analytics', short='Turn raw website numbers into a summary the marketing team can read.',
    story=('An online saree store in Chennai gets a raw export from its website tool every night: the **total time** all visitors spent on the site (in seconds), '
           'the number of **sessions** (visits), the **data** the pages used (in MB) and the number of **orders**.\n'
           'Nobody can read "187530 seconds" at a glance. The marketing team wants a short daily summary with times in hours and minutes, data in GB, '
           'the conversion rate (the share of sessions that ended in an order), and a quick **Healthy day** flag: `True` when the conversion rate is at least 2% **and** '
           'an average session lasts at least 2 minutes.'),
    objectives=['Break seconds into hours, minutes and seconds with `//` and `%`', 'Convert units (MB to GB)',
                'Work out rates and averages safely', 'Combine two conditions into one `True`/`False` flag'],
    may=['`print()`', 'variables', '`input()`', '`int()`', 'f-strings with `:,`, `:.2f` and `:,.2f`', '`+ - * / // %`', '`>=`, `and`, `or`'],
    mustnot=['`if` / `else`', 'loops', 'lists', 'your own functions', '`import`'],
    tasks=['Ask for 4 whole numbers with `input()`, **in this order**: total time in seconds, number of sessions, data used in MB, number of orders. Convert each with `int()`.',
           'Print `Sessions` and `Orders` with commas (`:,`).',
           'Total time: split the total seconds into hours, minutes and seconds with `//` and `%`, and print `Total time: 52 h 5 m 30 s`.',
           'Average session: total seconds `//` sessions (whole seconds, rounded down). Split it into minutes and seconds: `Average session: 2 min 30 sec`.',
           'Data used in GB = MB ÷ 1024, printed with `:,.2f`. Data per session = MB ÷ sessions, printed with `:.2f`.',
           'Conversion rate (%) = orders ÷ sessions × 100, printed with `:.2f` and a `%` sign.',
           'Healthy day = `True` when the conversion rate is at least 2 **and** the average session is at least 120 seconds.',
           'Print a title line `WEBSITE DAILY SUMMARY` and the report lines exactly as shown below.'],
    lines=['WEBSITE DAILY SUMMARY', 'Sessions: <count>', 'Orders: <count>', 'Total time: <h> h <m> m <s> s', 'Average session: <m> min <s> sec',
           'Data used: <number> GB', 'Data per session: <number> MB', 'Conversion rate: <number>%', 'Healthy day: <True or False>'],
    rules='`<count>` uses commas (`:,`), like `1,250`. In `Data used`, `<number>` has commas and 2 decimals (`:,.2f`). In the other lines, `<number>` has 2 decimals (`:.2f`). Hours, minutes and seconds are plain whole numbers. `<True or False>` is the word `True` or `False`.',
    edge=['Allowed values: sessions is always **at least 1**, so dividing by it is safe. The other values can be 0.',
          'Only **1 session**: the average session is the whole time.',
          'A day with **0 orders**: the conversion rate is `0.00%`.',
          'Exactly **on the limits** (2% and 120 seconds): that counts as healthy, so use `>=`.',
          'A **huge** day: thousands of hours and millions of MB, with commas where the format says so.',
          'Numbers typed with **spaces** around them.'],
    hints=['For the total time: `hours = total_seconds // 3600`. The seconds left after taking out whole hours are `total_seconds % 3600`, and `// 60` on that gives the minutes. `total_seconds % 60` gives the seconds.',
           'The average session uses floor division so it stays whole: `average_seconds = total_seconds // sessions`. Then split it the same way: `average_seconds // 60` minutes and `average_seconds % 60` seconds.',
           'Store the flag in a variable: `healthy_day = conversion_rate >= 2 and average_seconds >= 120`. Then print it with an f-string, like `print(f"Healthy day: {healthy_day}")`.'],
    starter='# Project 3: Website session analytics\n',
    sol='''# Project 3: Website session analytics
# Sessions is always at least 1, so dividing by it is safe
total_seconds = int(input("Total time on site (seconds): "))
sessions = int(input("Number of sessions: "))
data_mb = int(input("Data used (MB): "))
orders = int(input("Number of orders: "))

# Total time as hours, minutes and seconds
hours = total_seconds // 3600
minutes = total_seconds % 3600 // 60
seconds = total_seconds % 60

# Average session in whole seconds, then as minutes and seconds
average_seconds = total_seconds // sessions
average_minutes = average_seconds // 60
average_rest = average_seconds % 60

# Data and conversion
data_gb = data_mb / 1024
data_per_session = data_mb / sessions
conversion_rate = orders / sessions * 100
healthy_day = conversion_rate >= 2 and average_seconds >= 120

# Print the summary
print("=" * 34)
print("WEBSITE DAILY SUMMARY")
print("=" * 34)
print(f"Sessions: {sessions:,}")
print(f"Orders: {orders:,}")
print(f"Total time: {hours} h {minutes} m {seconds} s")
print(f"Average session: {average_minutes} min {average_rest} sec")
print(f"Data used: {data_gb:,.2f} GB")
print(f"Data per session: {data_per_session:.2f} MB")
print(f"Conversion rate: {conversion_rate:.2f}%")
print(f"Healthy day: {healthy_day}")''',
    weak='''# website summary
s = int(input("Seconds: "))
n = int(input("Sessions: "))
mb = int(input("MB: "))
o = int(input("Orders: "))
avg = s // n
rate = o / n * 100
print("WEBSITE DAILY SUMMARY")
print(f"Sessions: {n:,}")
print(f"Orders: {o:,}")
print(f"Total time: {s // 3600} h {s % 3600 // 60} m {s % 60} s")
print(f"Average session: {avg // 60} min {avg % 60} sec")
print(f"Data used: {mb / 1000:,.2f} GB")
print(f"Data per session: {mb / n:.2f} MB")
print(f"Conversion rate: {rate:.2f}%")
print(f"Healthy day: {rate >= 2}")''',
    need=[dict(any=['call:input'], min=4, label='`input()` to read all 4 values'),
          dict(any=['call:int'], min=1, label='`int()` to turn the typed text into whole numbers'),
          dict(any=['op:FloorDiv'], min=1, label='`//` for whole hours, minutes and the average'),
          dict(any=['op:Mod'], min=1, label='`%` for the minutes and seconds left over'),
          dict(any=['spec:comma'], min=1, label='the `:,` format for big counts'),
          dict(any=['spec:decimals'], min=1, label='the `:.2f` format for decimals'),
          dict(any=['cmp:GtE', 'cmp:Gt', 'cmp:LtE', 'cmp:Lt'], min=1, label='comparison operators (`>=`) for the limits'),
          dict(any=['bool:And'], min=1, label='`and` to combine the two conditions')],
    expect=exp3,
    tests=[dict(name='A normal day', kind='main', inputs=['187530', '1250', '3532', '45']),
           dict(name='A quiet day', kind='main', inputs=['45000', '600', '1500', '9']),
           dict(name='A small day', kind='main', inputs=['3725', '25', '100', '1']),
           dict(name='Average rounds down to whole seconds', kind='logic', inputs=['1000', '3', '30', '0'], check=['Average session', 'Conversion rate', 'Healthy day'],
                tip='Use `//` for the average (`1000 // 3` is 333 seconds), then split it with `// 60` and `% 60`.'),
           dict(name='Healthy needs BOTH conditions', kind='logic', inputs=['3000', '50', '200', '5'], check=['Average session', 'Conversion rate', 'Healthy day'],
                tip='A high conversion rate is not enough: the average session must also be at least 120 seconds. Join the two checks with `and`.'),
           dict(name='Exactly on the limits counts', kind='logic', inputs=['6000', '50', '512', '1'], check=['Average session', 'Data used', 'Conversion rate', 'Healthy day'],
                tip='2% and 120 seconds exactly are healthy. Use `>=` for both limits.'),
           dict(name='Only one session', kind='edge', inputs=['59', '1', '1', '1'],
                tip='With 1 session, the average is the whole time. Check that minutes come from `// 60` and seconds from `% 60`.'),
           dict(name='A huge day', kind='edge', inputs=['9876543', '123456', '2500000', '4321'],
                tip='Hours can go into the thousands: take minutes from what is left after the hours (`% 3600`), not from the total. `Data used` needs `:,.2f`.'),
           dict(name='Zero orders, numbers typed with spaces', kind='edge', inputs=[' 7200 ', ' 40 ', ' 0 ', ' 0 '],
                tip='0 orders gives a 0.00% conversion rate, and 0 MB gives 0.00 GB. `int(" 7200 ")` ignores the spaces.')],
)

PROJECTS = [P1, P2, P3]
