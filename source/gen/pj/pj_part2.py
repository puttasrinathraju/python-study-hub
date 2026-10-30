# Part 2 projects (chapters 5-7): Part 1 + if/elif/else, nested if, truthiness, ternary, pass, match-case,
# for loops with range(), while loops, break, continue, loop-else. No lists, string methods or indexing yet.
PART = 2
TITLE = 'Part 2 projects: decisions and loops'
INTRO = ('Three programs that keep asking for data until the work is done, make decisions with `if`, and summarise the results. '
         'They use Part 1 and Part 2 only: no lists, no string methods and no functions yet.')
NOT_YET = ['lists `[ ]`', 'string methods like `.lower()`', 'indexing `[0]`', 'your own functions', '`import`']
def money(x): return '₹' + format(x, ',.2f')

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i):
    n = int(i[0])
    if n == 0: return ['Bills entered: 0', 'No bills today']
    b = [float(x) for x in i[1:1 + n]]
    return ['Bills entered: %d' % n, 'Total: ' + money(sum(b)), 'Average bill: ' + money(sum(b) / n), 'Highest bill: ' + money(max(b)),
            'Lowest bill: ' + money(min(b)), 'Big bills (₹1,000 or more): %d' % sum(1 for x in b if x >= 1000)]

P1 = dict(
    id='p2-1', level=1, title='Daily bills summary', short='Read any number of bills and summarise the day.',
    story=('Kiran runs a small electronics repair shop in Vijayawada. Every customer gets a bill, and some days there are 3 bills, other days 30. '
           'At closing time he wants a quick summary: how many bills, the total, the average, the biggest and smallest bill, and how many big bills (₹1,000 or more) there were.\n'
           'Write a program that first asks how many bills there were today, then asks for each bill amount with a loop, and prints the summary.'),
    objectives=['Repeat a question with a `for` loop and `range()`', 'Keep running totals and counts inside a loop',
                'Track the highest and lowest value with `if`', 'Handle the "no data" case before dividing'],
    may=['everything from Part 1', '`if` / `elif` / `else`', '`for` loops with `range()`', '`+=` to add up and count'],
    mustnot=NOT_YET + ['`max()`, `min()`, `sum()`'],
    tasks=['Ask `How many bills today? ` with `input()` and convert it with `int()`.',
           'If there are 0 bills, print `Bills entered: 0` and `No bills today`, and nothing else.',
           'Otherwise, use a `for` loop with `range()` to ask for each bill amount (`Bill 1 amount: `, `Bill 2 amount: ` ...). Amounts can have paise, so use `float()`.',
           'Inside the loop, add each amount to a running total, and count the big bills (₹1,000 or more).',
           'Inside the loop, also keep the highest and the lowest bill seen so far. The first bill is both the highest and the lowest so far.',
           'After the loop, work out the average: the total divided by the number of bills.',
           'Print the summary lines exactly as shown below, with money as `₹` + `:,.2f`.',
           'Add comments that explain your steps.'],
    lines=['Bills entered: <count>', 'Total: ₹<amount>', 'Average bill: ₹<amount>', 'Highest bill: ₹<amount>', 'Lowest bill: ₹<amount>', 'Big bills (₹1,000 or more): <count>'],
    rules='`<amount>` means money with commas and 2 decimals (`:,.2f`), like `4,350.50`. `<count>` is a plain whole number. With 0 bills, print only `Bills entered: 0` and `No bills today`.',
    edge=['**0 bills**: you cannot divide by 0, so check for it before working out the average.',
          '**Just 1 bill**: it is the total, the average, the highest and the lowest.',
          'A bill of **exactly ₹1,000** counts as big (`>=`).',
          'The **first bill is the biggest** (or the smallest): make sure your highest and lowest still come out right.',
          'A bill of ₹0, big amounts, and numbers typed with spaces.'],
    hints=['Read the count first: `bill_count = int(input("How many bills today? "))`. Then `if bill_count == 0:` print the two lines, and put everything else under `else:`.',
           'Inside `for number in range(1, bill_count + 1):` ask with `float(input(f"Bill {number} amount: "))`, then do `total += amount`. Count big bills with `if amount >= 1000: big_bills += 1`.',
           'For the highest and lowest: `if number == 1:` set both `highest = amount` and `lowest = amount`. Otherwise use `if amount > highest:` and `if amount < lowest:` to replace them.'],
    starter='# Project 1: Daily bills summary\n',
    sol='''# Project 1: Daily bills summary
bill_count = int(input("How many bills today? "))

if bill_count == 0:
    # Nothing to summarise, and we must not divide by 0
    print("Bills entered: 0")
    print("No bills today")
else:
    total = 0
    big_bills = 0
    for number in range(1, bill_count + 1):
        amount = float(input(f"Bill {number} amount: "))
        total += amount
        if amount >= 1000:
            big_bills += 1
        # The first bill is both the highest and the lowest so far
        if number == 1:
            highest = amount
            lowest = amount
        elif amount > highest:
            highest = amount
        elif amount < lowest:
            lowest = amount

    average = total / bill_count
    print(f"Bills entered: {bill_count}")
    print(f"Total: ₹{total:,.2f}")
    print(f"Average bill: ₹{average:,.2f}")
    print(f"Highest bill: ₹{highest:,.2f}")
    print(f"Lowest bill: ₹{lowest:,.2f}")
    print(f"Big bills (₹1,000 or more): {big_bills}")''',
    weak='''n = int(input("Bills: "))
t = 0
hi = 0
lo = 0
big = 0
for i in range(n):
    a = float(input("Amount: "))
    t += a
    if a > hi:
        hi = a
    if a < lo:
        lo = a
    if a > 1000:
        big += 1
print(f"Bills entered: {n}")
print(f"Total: ₹{t:,.2f}")
print(f"Average bill: ₹{t / n:,.2f}")
print(f"Highest bill: ₹{hi:,.2f}")
print(f"Lowest bill: ₹{lo:,.2f}")
print(f"Big bills (₹1,000 or more): {big}")''',
    need=[dict(any=['call:input'], min=2, label='`input()` for the count and for each bill'),
          dict(any=['node:For'], min=1, label='a `for` loop to ask for every bill'),
          dict(any=['call:range'], min=1, label='`range()` to repeat the right number of times'),
          dict(any=['node:If'], min=3, label='`if` to handle 0 bills, big bills and the highest/lowest'),
          dict(any=['node:AugAssign'], min=2, label='`+=` to keep the running total and counts'),
          dict(any=['call:float'], min=1, label='`float()` for amounts with paise'),
          dict(any=['spec:money'], min=1, label='the `:,.2f` format for money')],
    expect=exp1,
    tests=[dict(name='A normal day', kind='main', inputs=['5', '1200', '350.50', '800', '1800', '200']),
           dict(name='A short day', kind='main', inputs=['3', '99.99', '149.5', '2500']),
           dict(name='A busy day', kind='main', inputs=['6', '450', '450', '1000', '999.99', '3000', '75']),
           dict(name='First bill is the biggest', kind='logic', inputs=['4', '5000', '100', '300', '2000'], check=['Highest', 'Lowest'],
                tip='Start the highest and the lowest from the **first bill**, not from 0. A lowest that starts at 0 never changes, because no bill is below 0.'),
           dict(name='Exactly ₹1,000 is a big bill', kind='logic', inputs=['3', '1000', '999.99', '1000.01'], check=['Big bills'],
                tip='"₹1,000 or more" means `>= 1000`, not `> 1000`.'),
           dict(name='Average divides by the number of bills', kind='logic', inputs=['2', '100', '301'], check=['Total', 'Average'],
                tip='The average is the total divided by the number of bills you read.'),
           dict(name='No bills today', kind='edge', inputs=['0'],
                tip='With 0 bills, print `Bills entered: 0` and `No bills today`, and do not divide: dividing by 0 crashes.'),
           dict(name='Just one bill', kind='edge', inputs=['1', '640'],
                tip='With one bill, that bill is the total, the average, the highest and the lowest.'),
           dict(name='Big amounts, a ₹0 bill, spaces', kind='edge', inputs=[' 3 ', ' 125000.75 ', '98000', ' 0 '],
                tip='A ₹0 bill is the lowest. Big amounts need `:,.2f`, and `float(" 0 ")` ignores the spaces.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def grade(m): return 'A' if m >= 90 else 'B' if m >= 75 else 'C' if m >= 60 else 'D' if m >= 35 else 'F'
def exp2(i):
    out, ms = [], []
    for x in i:
        if x == 'done': break
        m = int(x)
        if m < 0 or m > 100: out.append('Invalid marks, skipped'); continue
        ms.append(m); out.append('Student %d: %d -> Grade %s' % (len(ms), m, grade(m)))
    if not ms: return out + ['No marks entered']
    g = [grade(m) for m in ms]
    return out + ['Students: %d' % len(ms), 'Class average: %.2f' % (sum(ms) / len(ms)), 'Passed: %d of %d' % (sum(1 for m in ms if m >= 35), len(ms)),
                  'Grades: ' + ' '.join('%s=%d' % (k, g.count(k)) for k in 'ABCDF'), 'Highest: %d' % max(ms), 'Lowest: %d' % min(ms)]

P2 = dict(
    id='p2-2', level=2, title='Class marks and grades', short='Grade every student as the marks come in, then summarise the class.',
    story=('Mrs. Lakshmi teaches a Python batch at a training institute in Hyderabad. After each test she types the marks into a spreadsheet and works out the grades by hand.\n'
           'Write a program that keeps asking for marks until she types `done`. Each valid mark gets a grade at once. Marks below 0 or above 100 are typing mistakes: the program says so and skips them. '
           'At the end it prints a class summary: how many students, the average, how many passed, how many got each grade, and the highest and lowest marks.'),
    objectives=['Keep a `while True` loop going until the user types a stop word', 'Skip bad data with `continue`',
                'Choose one of five grades with `if` / `elif` / `else`', 'Count per category and summarise after the loop'],
    may=['everything from Part 1', '`if` / `elif` / `else`', '`while True`, `break`, `continue`', '`for` loops'],
    mustnot=NOT_YET + ['`max()`, `min()`, `sum()`'],
    tasks=['In a `while True` loop, ask for the next student\'s marks with `input()`. The question can be like `Marks for student 1 (or done): `.',
           'If the user typed `done` (exactly, small letters), leave the loop with `break`.',
           'Otherwise convert the text to a whole number with `int()`.',
           'If the marks are below 0 or above 100, print `Invalid marks, skipped` and go to the next round with `continue`. Skipped entries do not get a student number.',
           'For a valid mark, give a grade: A for 90 or more, B for 75 or more, C for 60 or more, D for 35 or more, F below 35. Print `Student 1: 78 -> Grade B`.',
           'Keep a count of students, the total of the marks, the number passed (35 or more), a count for each grade, and the highest and lowest marks.',
           'After the loop: if no valid marks were entered, print `No marks entered`. Otherwise print the summary lines shown below.',
           'Use clear names and add comments.'],
    lines=['Student <n>: <marks> -> Grade <letter>', 'Invalid marks, skipped', 'Students: <count>', 'Class average: <number>', 'Passed: <count> of <count>',
           'Grades: A=<count> B=<count> C=<count> D=<count> F=<count>', 'Highest: <marks>', 'Lowest: <marks>'],
    rules='`<number>` has 2 decimals (`:.2f`), like `61.80`. Marks and counts are plain whole numbers. Print `Invalid marks, skipped` only when an entry is out of range, and `No marks entered` (instead of the summary) when there were no valid marks.',
    edge=['The user types `done` **straight away**: no students, so no average (do not divide by 0).',
          '**Boundary marks** like 90, 75, 60 and 35 get the higher grade (`>=`).',
          'Marks of **0 and 100** are valid. **-5 or 101** are not.',
          'Only **one student**: they are the highest and the lowest.',
          'Marks typed with **spaces**, like ` 78 `: `int()` ignores the spaces. (`done` is always typed exactly.)'],
    hints=['Start your counters before the loop: `count = 0`, `total = 0`, `passed = 0`, and one per grade like `grade_a = 0`. Inside `while True:` read `entry = input(...)` and check `if entry == "done": break` before you call `int()`.',
           'For bad marks: `if marks < 0 or marks > 100:` print the message and `continue`. Then `count += 1`, and pick the grade with `if marks >= 90:` ... `elif marks >= 75:` ... down to `else:`.',
           'Track highest and lowest like this: `if count == 1:` set both to `marks`; `elif marks > highest:` and `elif marks < lowest:` replace them. After the loop, `if count == 0:` print `No marks entered`, `else:` print the summary.'],
    starter='# Project 2: Class marks and grades\n',
    sol='''# Project 2: Class marks and grades
count = 0
total = 0
passed = 0
grade_a = grade_b = grade_c = grade_d = grade_f = 0

while True:
    entry = input(f"Marks for student {count + 1} (or done): ")
    if entry == "done":
        break
    marks = int(entry)
    # Marks outside 0-100 are typing mistakes
    if marks < 0 or marks > 100:
        print("Invalid marks, skipped")
        continue

    count += 1
    total += marks
    if marks >= 35:
        passed += 1
    # Pick the grade: the first true test wins
    if marks >= 90:
        grade = "A"
        grade_a += 1
    elif marks >= 75:
        grade = "B"
        grade_b += 1
    elif marks >= 60:
        grade = "C"
        grade_c += 1
    elif marks >= 35:
        grade = "D"
        grade_d += 1
    else:
        grade = "F"
        grade_f += 1
    print(f"Student {count}: {marks} -> Grade {grade}")

    # The first student is both the highest and the lowest so far
    if count == 1:
        highest = marks
        lowest = marks
    elif marks > highest:
        highest = marks
    elif marks < lowest:
        lowest = marks

if count == 0:
    print("No marks entered")
else:
    print(f"Students: {count}")
    print(f"Class average: {total / count:.2f}")
    print(f"Passed: {passed} of {count}")
    print(f"Grades: A={grade_a} B={grade_b} C={grade_c} D={grade_d} F={grade_f}")
    print(f"Highest: {highest}")
    print(f"Lowest: {lowest}")''',
    weak='''# marks
c = 0
t = 0
p = 0
a = b = cc = d = f = 0
hi = 0
lo = 100
while True:
    e = input("Marks: ")
    if e == "done":
        break
    m = int(e)
    c += 1
    t += m
    if m > 35:
        p += 1
    if m > 90:
        g = "A"
        a += 1
    elif m > 75:
        g = "B"
        b += 1
    elif m > 60:
        g = "C"
        cc += 1
    elif m > 35:
        g = "D"
        d += 1
    else:
        g = "F"
        f += 1
    print(f"Student {c}: {m} -> Grade {g}")
    if m > hi:
        hi = m
    if m < lo:
        lo = m
print(f"Students: {c}")
print(f"Class average: {t / c:.2f}")
print(f"Passed: {p} of {c}")
print(f"Grades: A={a} B={b} C={cc} D={d} F={f}")
print(f"Highest: {hi}")
print(f"Lowest: {lo}")''',
    need=[dict(any=['call:input'], min=1, label='`input()` inside the loop'),
          dict(any=['node:While'], min=1, label='a `while` loop that runs until `done`'),
          dict(any=['node:Break'], min=1, label='`break` to stop at `done`'),
          dict(any=['node:Continue'], min=1, label='`continue` to skip invalid marks'),
          dict(any=['node:If'], min=6, label='`if` / `elif` / `else` for the grades and the checks'),
          dict(any=['call:int'], min=1, label='`int()` to turn the typed text into marks'),
          dict(any=['spec:decimals'], min=1, label='the `:.2f` format for the average')],
    expect=exp2,
    tests=[dict(name='A small class', kind='main', inputs=['78', '92', '45', '28', '66', 'done']),
           dict(name='Every grade on its boundary', kind='main', inputs=['88', '90', '75', '60', '35', '34', 'done']),
           dict(name='Two students', kind='main', inputs=['100', '55', 'done']),
           dict(name='Boundary marks get the higher grade', kind='logic', inputs=['90', '75', '60', '35', 'done'], check=['Student', 'Grades'],
                tip='"90 or more" is `>= 90`. With `>` a mark of exactly 90 would drop to grade B.'),
           dict(name='Invalid marks are skipped', kind='logic', inputs=['101', '80', '-5', '70', 'done'], check=['Invalid', 'Student', 'Students', 'Class average'],
                tip='For marks below 0 or above 100, print `Invalid marks, skipped` and `continue` **before** you count the student, so skipped entries get no number and do not change the average.'),
           dict(name='The pass mark is 35', kind='logic', inputs=['34', '35', 'done'], check=['Passed'],
                tip='Passing means 35 **or more**: use `>= 35`.'),
           dict(name='done straight away', kind='edge', inputs=['done'],
                tip='When nobody was entered, print `No marks entered` and skip the summary. Dividing by a count of 0 crashes.'),
           dict(name='One student with 0 marks', kind='edge', inputs=['0', 'done'],
                tip='0 is a valid mark (grade F). With one student, they are both the highest and the lowest.'),
           dict(name='Spaces, and 100 is valid', kind='edge', inputs=[' 100 ', ' 99', 'done'],
                tip='`int(" 100 ")` works. 100 is a valid mark, so only check `> 100` for mistakes.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
def exp3(i):
    loan, rate, emi = (int(x) for x in i)
    if loan == 0: return ['Nothing to repay']
    if emi <= loan * rate // 100: return ['EMI too low: the loan would never be repaid']
    out, bal, m, ti, tp = [], loan, 0, 0, 0
    while bal > 0 and m < 120:
        m += 1; it = bal * rate // 100; bal += it; pay = min(emi, bal); bal -= pay; ti += it; tp += pay
        out.append('Month %d: interest ₹%s, paid ₹%s, balance ₹%s' % (m, format(it, ','), format(pay, ','), format(bal, ',')))
    out.append('Months to repay: %d' % m if bal == 0 else 'Not repaid in 120 months. Balance left: ₹' + format(bal, ','))
    return out + ['Total interest: ₹' + format(ti, ','), 'Total paid: ₹' + format(tp, ',')]

P3 = dict(
    id='p2-3', level=3, title='Loan repayment schedule', short='Simulate a loan month by month and catch the cases that never end.',
    story=('A small finance company in Guntur gives business loans to shop owners. Before a loan is signed, the analyst prints a **repayment schedule**: '
           'month by month, the interest added, the amount paid (the EMI) and the balance left.\n'
           'To keep the numbers simple, the company works in **whole rupees**: each month the interest is the balance × the monthly rate ÷ 100, **rounded down** with `//`. '
           'The interest is added first, then the EMI is paid. In the last month the customer pays only what is left.\n'
           'Some requests are impossible: if the EMI is not bigger than the first month\'s interest, the loan would grow or stay the same forever. And the company never schedules more than 120 months.'),
    objectives=['Simulate a process month by month with a `while` loop', 'Stop a loop on two conditions (paid off, or 120 months)',
                'Catch the inputs that would make a loop run forever', 'Print a clean schedule with comma formats'],
    may=['everything from Part 1', '`if` / `elif` / `else`', '`while` loops, `break`', '`//` for rounding down', '`:,` for commas'],
    mustnot=NOT_YET + ['`max()`, `min()`'],
    tasks=['Ask for 3 whole numbers with `input()`, **in this order**: the loan amount, the monthly interest rate in % (like `1` or `2`), the monthly EMI. Convert each with `int()`.',
           'If the loan is 0, print `Nothing to repay` and stop.',
           'If the EMI is not more than the first month\'s interest (loan × rate // 100), print `EMI too low: the loan would never be repaid` and stop.',
           'Otherwise repeat, month by month, while there is a balance left and fewer than 120 months have passed: interest = balance × rate // 100; add it to the balance; pay the EMI, or only the balance if that is smaller; take the payment off the balance.',
           'Print one line per month: `Month 1: interest ₹1,000, paid ₹10,000, balance ₹91,000`.',
           'Add up the total interest and the total paid as you go.',
           'After the loop: if the balance is 0, print `Months to repay: <months>`. If not, print `Not repaid in 120 months. Balance left: ₹<amount>`. Then print `Total interest` and `Total paid`.',
           'Use clear names and comments: other analysts will read your code.'],
    lines=['Month <n>: interest ₹<amount>, paid ₹<amount>, balance ₹<amount>', 'Months to repay: <n>', 'Not repaid in 120 months. Balance left: ₹<amount>',
           'Total interest: ₹<amount>', 'Total paid: ₹<amount>', 'Nothing to repay', 'EMI too low: the loan would never be repaid'],
    rules='All amounts are whole rupees with commas (`:,`), like `₹91,000`. Print only the lines that apply: `Months to repay` when the loan is paid off, `Not repaid in 120 months...` when it is not, and the two stop messages only for those cases.',
    edge=['Allowed values: whole numbers, loan 0 or more, rate 0 or more, EMI more than 0.',
          'A **loan of 0**: nothing to schedule.',
          'An EMI that **only covers the interest** (or less): the loop would run forever. Catch it before the loop.',
          'An EMI just above the interest: the loan takes more than **120 months**, so stop at 120.',
          'The **last payment** is smaller than the EMI: pay only what is left, so the balance ends at exactly 0.',
          'A **0% rate** loan: no interest at all.'],
    hints=['Do the two special cases first with `if` / `elif`, and put the schedule under `else:`. The first month\'s interest is `loan * rate // 100`, so the EMI is too low when `emi <= loan * rate // 100`.',
           'Loop with `while balance > 0 and month < 120:`. Inside: `month += 1`, `interest = balance * rate // 100`, `balance += interest`, then `payment = emi` and `if payment > balance: payment = balance`, then `balance -= payment`.',
           'Keep `total_interest += interest` and `total_paid += payment` inside the loop and print each month with `{balance:,}`. After the loop, `if balance == 0:` print the months, `else:` the "Not repaid" line.'],
    starter='# Project 3: Loan repayment schedule\n',
    sol='''# Project 3: Loan repayment schedule
loan = int(input("Loan amount: "))
rate = int(input("Monthly interest rate (%): "))
emi = int(input("Monthly EMI: "))

if loan == 0:
    print("Nothing to repay")
elif emi <= loan * rate // 100:
    # The EMI does not even cover the first month's interest
    print("EMI too low: the loan would never be repaid")
else:
    balance = loan
    month = 0
    total_interest = 0
    total_paid = 0
    # One round per month, for at most 120 months
    while balance > 0 and month < 120:
        month += 1
        interest = balance * rate // 100
        balance += interest
        payment = emi
        if payment > balance:
            payment = balance  # the last payment is only what is left
        balance -= payment
        total_interest += interest
        total_paid += payment
        print(f"Month {month}: interest ₹{interest:,}, paid ₹{payment:,}, balance ₹{balance:,}")

    if balance == 0:
        print(f"Months to repay: {month}")
    else:
        print(f"Not repaid in 120 months. Balance left: ₹{balance:,}")
    print(f"Total interest: ₹{total_interest:,}")
    print(f"Total paid: ₹{total_paid:,}")''',
    weak='''# loan schedule
l = int(input("Loan: "))
r = int(input("Rate: "))
e = int(input("EMI: "))
m = 0
ti = 0
tp = 0
while l > 0 and m < 120:
    m += 1
    i = l * r / 100
    l += i
    l -= e
    ti += i
    tp += e
    print(f"Month {m}: interest ₹{i:,.0f}, paid ₹{e:,}, balance ₹{l:,.0f}")
print(f"Months to repay: {m}")
print(f"Total interest: ₹{ti:,.0f}")
print(f"Total paid: ₹{tp:,}")''',
    need=[dict(any=['call:input'], min=3, label='`input()` to read all 3 values'),
          dict(any=['call:int'], min=1, label='`int()` for whole rupees'),
          dict(any=['node:While'], min=1, label='a `while` loop for the months'),
          dict(any=['bool:And'], min=1, label='`and` to stop on two conditions (paid off or 120 months)'),
          dict(any=['op:FloorDiv'], min=1, label='`//` to round the interest down'),
          dict(any=['node:If'], min=3, label='`if` / `elif` / `else` for the special cases and the last payment'),
          dict(any=['spec:comma'], min=1, label='the `:,` format for amounts')],
    expect=exp3,
    tests=[dict(name='A business loan', kind='main', inputs=['100000', '1', '10000']),
           dict(name='A bigger loan at 2%', kind='main', inputs=['250000', '2', '30000']),
           dict(name='A small loan', kind='main', inputs=['48000', '1', '5000']),
           dict(name='The last payment is only what is left', kind='logic', inputs=['10500', '0', '5000'], check=['Month 3', 'Months', 'Total paid'],
                tip='In the last month, pay only the balance that is left (here ₹500, not ₹5,000), so the balance ends at exactly 0.'),
           dict(name='Interest is rounded down', kind='logic', inputs=['1999', '3', '1000'], check=['Month', 'Total interest'],
                tip='Work out the interest with `//`: `1999 * 3 // 100` is 59, not 59.97 or 60.'),
           dict(name='Paid off in one month', kind='logic', inputs=['10000', '2', '10200'], check=['Month 1', 'Months', 'Total'],
                tip='Add the interest first, then pay. ₹10,000 + ₹200 interest = ₹10,200, which the EMI clears in month 1.'),
           dict(name='Nothing to repay', kind='edge', inputs=['0', '2', '5000'],
                tip='A loan of 0 needs no schedule: print `Nothing to repay` only.'),
           dict(name='EMI too low', kind='edge', inputs=['100000', '2', '2000'],
                tip='Check `emi <= loan * rate // 100` **before** the loop. Otherwise the balance never goes down and the loop never ends.'),
           dict(name='Not repaid in 120 months', kind='edge', inputs=['100000', '1', '1100'], check=['Month 120', 'Not repaid', 'Total'],
                tip='Stop after 120 months (`while balance > 0 and month < 120`), then print the balance that is left.')],
)

PROJECTS = [P1, P2, P3]
