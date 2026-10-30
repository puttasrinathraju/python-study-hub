# Part 5 projects (chapters 16-18): Parts 1-4 + errors (try/except/else/finally, raise, assert), files (open, with,
# csv, json, os.path), modules (math, random, datetime, statistics, collections, re). No classes yet.
import csv, io, json
from datetime import datetime
PART = 5
TITLE = 'Part 5 projects: files, errors and modules'
INTRO = ('Three jobs on real files: clean a messy sales file and save a clean copy, report on the hotel bookings data, and build a monthly budget report from a JSON file and a CSV file. '
         'Your programs must not crash on bad data or missing files.')
NOT_YET = ['classes (Part 6)', 'NumPy (Part 7)']
def money(x): return '₹' + format(x, ',.2f')
def rows_of(text): return list(csv.DictReader(io.StringIO(text)))

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i, t):
    name = i[0].strip()
    if name not in t.get('files', {}): return ['File not found: ' + name]
    rows = rows_of(t['files'][name]); bad, units, rev, per, clean = 0, 0, 0.0, {}, ['item,qty,revenue']
    for r in rows:
        item = (r.get('item') or '').strip().title()
        try:
            q, p = int(r['qty']), float(r['price'])
            if not item or q < 0 or p < 0: raise ValueError
        except (ValueError, TypeError):
            bad += 1; continue
        units += q; rev += q * p; per[item] = per.get(item, 0) + q * p; clean.append('%s,%d,%.2f' % (item, q, q * p))
    out = ['Rows read: %d' % len(rows), 'Bad rows skipped: %d' % bad]
    if not per: out.append('No valid sales')
    else:
        best = max(per, key=per.get)
        out += ['Units sold: %d' % units, 'Revenue: ' + money(rev), 'Best seller: %s (%s)' % (best, money(per[best]))]
    return out + ['Saved clean_sales.csv'], clean

F1 = 'item,qty,price\nMasala Dosa,15,120\nFilter Coffee,30,25.5\nIdli,abc,40\nVada,12,35\nMasala Dosa,5,120\nPongal,,60\nUpma,8,45\n'
P1 = dict(
    id='p5-1', level=1, title='Clean a sales file', short='Read a messy CSV file, skip the bad rows without crashing, and save a clean copy.',
    story=('Lakshmi runs a tiffin centre in Chennai. Her billing app exports each day\'s sales as a CSV file, but the cashier sometimes types junk: a word instead of a quantity, an empty price, a minus sign, or a row with a value missing.\n'
           'Write a program that asks for the file name, reads it with the `csv` module, skips every bad row **without crashing**, prints a short summary, and saves the good rows to a new file, `clean_sales.csv`, with the revenue of each row.'),
    objectives=['Open and read a CSV file with `csv.DictReader`', 'Use `try` / `except` to skip bad rows instead of crashing',
                'Handle a missing file with `FileNotFoundError`', 'Write a new CSV file with `csv.writer`'],
    may=['everything from Parts 1-4', '`open()` and `with`', '`csv`', '`try` / `except` / `else`, `raise`'],
    mustnot=NOT_YET,
    tasks=['Ask `Sales file: ` with `input()` and remove the spaces around the name.',
           'Open the file and read it with `csv.DictReader`. The columns are `item,qty,price`. (Blank lines are skipped by the reader and not counted.) If the file does not exist, print `File not found: <name>` and stop.',
           'For each row: clean the item name (`strip()` and `title()`), convert `qty` with `int()` and `price` with `float()`. A row is **bad** if the item is empty, a conversion fails, a value is missing, or qty or price is below 0. Count bad rows and skip them.',
           'Hint for missing values: a missing value is `None`, and `int(None)` raises `TypeError`, so catch `(ValueError, TypeError)`.',
           'For good rows, work out revenue = qty × price, add up the units and the revenue, and add the revenue to that item\'s total (the same item can appear on several rows).',
           'Write `clean_sales.csv` with the header `item,qty,revenue` and one line per good row, revenue with 2 decimals (like `Masala Dosa,15,1800.00`).',
           'Print `Rows read`, `Bad rows skipped`, then `Units sold`, `Revenue` and `Best seller` (the item with the highest total revenue; the first one if tied). If there were no good rows, print `No valid sales` instead of those three lines.',
           'Finally print `Saved clean_sales.csv`.'],
    lines=['Rows read: <count>', 'Bad rows skipped: <count>', 'Units sold: <count>', 'Revenue: ₹<amount>', 'Best seller: <Item> (₹<amount>)',
           'No valid sales', 'Saved clean_sales.csv', 'File not found: <name>', '--- clean_sales.csv must contain ---', 'item,qty,revenue', '<Item>,<qty>,<revenue with 2 decimals>'],
    rules='Money has `₹`, commas and 2 decimals (`:,.2f`). In the clean file, the revenue has 2 decimals and no `₹` or commas. The checker reads `clean_sales.csv` after your program ends.',
    sample={'sales_monday.csv': F1},
    edge=['A **word** instead of a number, an **empty** value, or a **missing** value at the end of a row.',
          'A **negative** quantity or price: that row is bad too.',
          'The **same item** on several rows: add them up for the best seller.',
          'Item names in different capitals or with spaces.',
          'A file name that **does not exist**.',
          'A file with **only the header**: no sales, but still write the clean file with its header.'],
    hints=['Wrap the whole reading part in `try:` ... `except FileNotFoundError:` and print the message there. Inside, `with open(name, newline="") as f:` then `for row in csv.DictReader(f):`.',
           'Per row: `try:` convert `int(row["qty"])` and `float(row["price"])`, and `raise ValueError` yourself if the item is empty or a value is negative. `except (ValueError, TypeError):` adds 1 to the bad count and `continue`s.',
           'Collect the good rows in a list of `[item, qty, f"{revenue:.2f}"]`, then write them: `with open("clean_sales.csv", "w", newline="") as out:` `writer = csv.writer(out)`, `writer.writerow(["item", "qty", "revenue"])`, `writer.writerows(clean_rows)`.'],
    starter='# Project 5.1: Clean a sales file\nimport csv\n',
    sol='''# Project 5.1: Clean a sales file
import csv

file_name = input("Sales file: ").strip()
try:
    with open(file_name, newline="") as f:
        rows = list(csv.DictReader(f))
except FileNotFoundError:
    print(f"File not found: {file_name}")
else:
    bad_rows = 0
    units = 0
    revenue = 0
    item_totals = {}
    clean_rows = []
    for row in rows:
        item = (row["item"] or "").strip().title()
        try:
            qty = int(row["qty"])
            price = float(row["price"])
            if item == "" or qty < 0 or price < 0:
                raise ValueError("bad row")
        except (ValueError, TypeError):
            # A word, an empty or missing value, or a negative number
            bad_rows += 1
            continue
        row_revenue = qty * price
        units += qty
        revenue += row_revenue
        item_totals[item] = item_totals.get(item, 0) + row_revenue
        clean_rows.append([item, qty, f"{row_revenue:.2f}"])

    with open("clean_sales.csv", "w", newline="") as out:
        writer = csv.writer(out)
        writer.writerow(["item", "qty", "revenue"])
        writer.writerows(clean_rows)

    print(f"Rows read: {len(rows)}")
    print(f"Bad rows skipped: {bad_rows}")
    if not item_totals:
        print("No valid sales")
    else:
        best = max(item_totals, key=item_totals.get)
        print(f"Units sold: {units}")
        print(f"Revenue: ₹{revenue:,.2f}")
        print(f"Best seller: {best} (₹{item_totals[best]:,.2f})")
    print("Saved clean_sales.csv")''',
    weak='''import csv
n = input("File: ")
f = open(n)
rows = list(csv.DictReader(f))
bad = 0
u = 0
r = 0
best = ""
hi = 0
out = open("clean_sales.csv", "w")
out.write("item,qty,revenue\\n")
for row in rows:
    try:
        q = int(row["qty"])
        p = float(row["price"])
    except ValueError:
        bad += 1
        continue
    u += q
    r += q * p
    if q * p > hi:
        hi = q * p
        best = row["item"]
    out.write(f"{row['item']},{q},{q * p:.2f}\\n")
out.close()
print(f"Rows read: {len(rows)}")
print(f"Bad rows skipped: {bad}")
print(f"Units sold: {u}")
print(f"Revenue: ₹{r:,.2f}")
print(f"Best seller: {best} (₹{hi:,.2f})")
print("Saved clean_sales.csv")''',
    need=[dict(any=['call:open'], min=1, label='`open()` to read and write the files'),
          dict(any=['node:With'], min=1, label='`with` so files are closed for you'),
          dict(any=['attr:DictReader', 'method:DictReader', 'method:reader'], min=1, label='`csv.DictReader` (or `csv.reader`) to read the rows'),
          dict(any=['method:writer', 'method:writerow', 'method:writerows'], min=1, label='`csv.writer` to save the clean file'),
          dict(any=['node:Try'], min=1, label='`try` / `except` around risky code'),
          dict(any=['exc:FileNotFoundError'], min=1, label='`except FileNotFoundError` for a missing file'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` (and `TypeError`) for bad rows')],
    expect=exp1,
    tests=[dict(name='Monday: two bad rows', kind='main', inputs=['sales_monday.csv'], files={'sales_monday.csv': F1}, outfile='clean_sales.csv'),
           dict(name='Tuesday: all good', kind='main', inputs=['sales_tuesday.csv'], files={'sales_tuesday.csv': 'item,qty,price\nTea,40,15\nCoffee,26,30\nSamosa,60,12\nTea,10,15\n'}, outfile='clean_sales.csv'),
           dict(name='A big day with paise', kind='main', inputs=['sales_wed.csv'], files={'sales_wed.csv': 'item,qty,price\nThali,120,180\nBiryani,85,249.5\nLassi,200,40\n'}, outfile='clean_sales.csv'),
           dict(name='Missing values and negatives are bad', kind='logic', inputs=['sales_thu.csv'], files={'sales_thu.csv': 'item,qty,price\nTea,5\nCoffee,-2,30\nJuice,3,-10\n,4,20\nLassi,2,40\n'}, outfile='clean_sales.csv', check=['Rows', 'Bad', 'Units', 'Revenue'],
                tip='A row with a value missing gives `None`, and `int(None)` raises `TypeError`: catch `(ValueError, TypeError)`. Negative numbers and an empty item are bad rows too.'),
           dict(name='The same item adds up', kind='logic', inputs=['sales_pens.csv'], files={'sales_pens.csv': 'item,qty,price\nPen,10,10\nPad,1,150\nPen,10,10\n'}, outfile='clean_sales.csv', check=['Best'],
                tip='The best seller uses each item\'s **total** revenue over all its rows (Pen: ₹200), not the biggest single row.'),
           dict(name='Item names are cleaned', kind='logic', inputs=['sales_tea.csv'], files={'sales_tea.csv': 'item,qty,price\n  tea ,2,10\nTEA,3,10\nCoffee,1,40\n'}, outfile='clean_sales.csv', check=['Best'],
                tip='Clean names with `strip().title()` before adding them up and before writing them to the clean file.'),
           dict(name='The file does not exist', kind='edge', inputs=['no_such_file.csv'], remove=['no_such_file.csv'],
                tip='Opening a missing file raises `FileNotFoundError`. Catch it and print `File not found: <name>`.'),
           dict(name='Only the header', kind='edge', inputs=['sales_empty.csv'], files={'sales_empty.csv': 'item,qty,price\n'}, outfile='clean_sales.csv',
                tip='With no data rows, print `No valid sales`, but still write `clean_sales.csv` with its header line.'),
           dict(name='Spaces in the name, blank lines', kind='edge', inputs=['  sales_fri.csv  '], files={'sales_fri.csv': 'item,qty,price\nChai,10,12\n\nBun,5,8\n'}, outfile='clean_sales.csv',
                tip='Strip the typed file name. `csv.DictReader` skips blank lines for you, so they are not rows.')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def pdate(s):
    for fmt in ('%Y-%m-%d', '%d/%m/%Y'):
        try: return datetime.strptime(s.strip(), fmt)
        except ValueError: pass
    return None
HOTEL = open(__file__.replace('gen/pj/pj_part5.py', 'hub2/data/hotel_bookings.csv'), encoding='utf-8').read()
def exp2(i, t):
    name = i[0].strip(); files = dict(t.get('files', {}))
    if t.get('data'): files['hotel_bookings.csv'] = HOTEL
    if name not in files: return ['File not found: ' + name]
    good, skipped = [], 0
    for r in rows_of(files[name]):
        n, d = r['nights'].strip(), pdate(r['check_in'])
        a = r['amount'].replace('₹', '').replace(',', '').strip()
        if not n.isdigit() or d is None: skipped += 1; continue
        if a == '': a = str(int(n) * int(r['rate']))
        if not a.isdigit(): skipped += 1; continue
        good.append(dict(n=int(n), d=d, a=int(a), s=r['status'].strip().title(), room=r['room_type'].strip().title(), ch=r['channel'].strip().lower()))
    out = ['Bookings: %d' % len(good), 'Skipped rows: %d' % skipped]
    if not good: return out + ['No bookings']
    st = {k: sum(1 for g in good if g['s'] == k) for k in ('Confirmed', 'Cancelled', 'No-Show')}
    out.append('Status: Confirmed %d, Cancelled %d, No-Show %d' % (st['Confirmed'], st['Cancelled'], st['No-Show']))
    conf = [g for g in good if g['s'] == 'Confirmed']
    if not conf: out.append('No confirmed bookings')
    else:
        out += ['Confirmed revenue: ₹' + format(sum(g['a'] for g in conf), ','), 'Average stay: %.2f nights' % (sum(g['n'] for g in conf) / len(conf))]
        rooms = {}
        for g in conf: rooms[g['room']] = rooms.get(g['room'], 0) + g['a']
        for k, room in enumerate(sorted(sorted(rooms), key=rooms.get, reverse=True), 1):
            out.append('%d. %s: ₹%s (%d bookings)' % (k, room, format(rooms[room], ','), sum(1 for g in conf if g['room'] == room)))
        ch = {}
        for g in conf: ch[g['ch']] = ch.get(g['ch'], 0) + g['a']
        top = sorted(sorted(ch), key=ch.get, reverse=True)[0]
        out.append('Top channel: %s (₹%s)' % (top, format(ch[top], ',')))
    months = {}
    for g in good: months[(g['d'].year, g['d'].month)] = months.get((g['d'].year, g['d'].month), 0) + 1
    best = sorted(sorted(months), key=months.get, reverse=True)[0]
    return out + ['Busiest month: %s (%d bookings)' % (datetime(best[0], best[1], 1).strftime('%B %Y'), months[best])]

HEAD = 'booking_id,guest_name,room_type,check_in,nights,rate,channel,status,amount\n'
P2 = dict(
    id='p5-2', level=2, title='Hotel bookings report', short='Turn a messy bookings export into a clean management report.',
    story=('A 3-star hotel exports its bookings from MakeMyTrip, Goibibo, Booking.com and walk-ins into one CSV file. The export is messy, like real data always is: '
           'statuses in different capitals (`confirmed`, `CONFIRMED`), channel names with spaces, room types in mixed case, amounts like `₹5,200` or empty, '
           'dates written two ways (`2026-08-26` and `19/08/2026`), and a few rows with no nights at all.\n'
           'The manager wants a one-screen report: bookings by status, confirmed revenue, average stay, revenue per room type, the best channel and the busiest month. '
           'The course file `hotel_bookings.csv` is ready in the Python runner, and the tests also use smaller files.'),
    objectives=['Clean every column before using it', 'Parse dates in two formats with `try` / `except`',
                'Fill in a missing value from other columns', 'Group, count and rank with dictionaries'],
    may=['everything from Parts 1-4', '`csv`, `datetime`', '`try` / `except`', '`collections`, `statistics`'],
    mustnot=NOT_YET,
    tasks=['Ask `Bookings file: `, strip the name, and read the file with `csv.DictReader`. If it does not exist, print `File not found: <name>` and stop.',
           'Clean each row: `status` and `room_type` with `strip().title()` (so `No-show` becomes `No-Show`), `channel` with `strip().lower()`, and `amount` without `₹`, commas and spaces.',
           'A row is **skipped** if `nights` is not a whole number, or `check_in` is neither `%Y-%m-%d` nor `%d/%m/%Y`. If the amount is empty, use nights × rate. If the amount is still not a whole number, skip the row.',
           'Print `Bookings` (good rows) and `Skipped rows`. If there are no good rows, print `No bookings` and stop.',
           'Print `Status: Confirmed <n>, Cancelled <n>, No-Show <n>` (always all three).',
           'For **confirmed** bookings only: print `Confirmed revenue`, `Average stay` (2 decimals), one line per room type ranked by revenue (`1. Deluxe: ₹78,400 (12 bookings)`, ties A to Z), and `Top channel` (most revenue; ties A to Z). If there are no confirmed bookings, print `No confirmed bookings` instead.',
           'For all good rows, print the busiest check-in month: `Busiest month: September 2026 (19 bookings)` (ties: the earlier month). Use `strftime("%B %Y")`.',
           'Keep it tidy: a small function to parse dates and one to clean amounts are a good idea.'],
    lines=['Bookings: <count>', 'Skipped rows: <count>', 'Status: Confirmed <n>, Cancelled <n>, No-Show <n>', 'Confirmed revenue: ₹<amount>',
           'Average stay: <number> nights', '<rank>. <Room type>: ₹<amount> (<n> bookings)', 'Top channel: <channel> (₹<amount>)', 'Busiest month: <Month Year> (<n> bookings)',
           'No bookings', 'No confirmed bookings', 'File not found: <name>'],
    rules='Amounts are whole rupees with commas (`:,`). The average stay has 2 decimals. Channel names are printed in small letters. Always write `bookings` (plural).',
    sample={'hotel_bookings.csv': '(the course file: already in the Python runner, 41 bookings)', 'bookings_small.csv': HEAD + 'B1,Asha,Deluxe,2026-10-02,2,3000,MakeMyTrip,Confirmed,6000\nB2,Ravi, standard,05/10/2026,1,1800,Walk-in ,confirmed,\nB3,Neha,Suite,2026-10-09,,5000,Goibibo,Confirmed,5000\n'},
    edge=['**Two date formats**, and a date that is neither: skip that row.',
          'An **empty amount**: use nights × rate.',
          'Amounts like **`₹5,200`**.',
          'A file with **no confirmed** bookings.',
          'A file with **only the header**, and a file that **does not exist**.'],
    hints=['Write `parse_date(text)`: `try: return datetime.strptime(text.strip(), "%Y-%m-%d")`, `except ValueError:` try `"%d/%m/%Y"` the same way, and return `None` if both fail.',
           'Collect the good rows as small dictionaries (`{"nights": ..., "date": ..., "amount": ..., "status": ..., "room": ..., "channel": ...}`) in a list. Then every report line is a loop or a comprehension over that list.',
           'Group with `totals[key] = totals.get(key, 0) + amount`. Rank with ties A to Z: `sorted(sorted(totals), key=totals.get, reverse=True)`. For months, use the key `(date.year, date.month)`: sorting tuples puts the earlier month first.'],
    starter='# Project 5.2: Hotel bookings report\nimport csv\nfrom datetime import datetime\n',
    sol='''# Project 5.2: Hotel bookings report
import csv
from datetime import datetime


def parse_date(text):
    """Return a datetime for 2026-08-26 or 19/08/2026, or None."""
    for fmt in ("%Y-%m-%d", "%d/%m/%Y"):
        try:
            return datetime.strptime(text.strip(), fmt)
        except ValueError:
            pass
    return None


def ranked(totals):
    """Keys by value, highest first; ties A to Z."""
    return sorted(sorted(totals), key=totals.get, reverse=True)


file_name = input("Bookings file: ").strip()
try:
    with open(file_name, newline="") as f:
        rows = list(csv.DictReader(f))
except FileNotFoundError:
    print(f"File not found: {file_name}")
    rows = None

if rows is not None:
    good = []
    skipped = 0
    for row in rows:
        nights = row["nights"].strip()
        date = parse_date(row["check_in"])
        amount = row["amount"].replace("₹", "").replace(",", "").strip()
        if not nights.isdigit() or date is None:
            skipped += 1
            continue
        if amount == "":
            amount = str(int(nights) * int(row["rate"]))  # fill in a missing amount
        if not amount.isdigit():
            skipped += 1
            continue
        good.append({"nights": int(nights), "date": date, "amount": int(amount),
                     "status": row["status"].strip().title(),
                     "room": row["room_type"].strip().title(),
                     "channel": row["channel"].strip().lower()})

    print(f"Bookings: {len(good)}")
    print(f"Skipped rows: {skipped}")
    if not good:
        print("No bookings")
    else:
        counts = {s: 0 for s in ("Confirmed", "Cancelled", "No-Show")}
        for b in good:
            if b["status"] in counts:
                counts[b["status"]] += 1
        print(f"Status: Confirmed {counts['Confirmed']}, Cancelled {counts['Cancelled']}, "
              f"No-Show {counts['No-Show']}")

        confirmed = [b for b in good if b["status"] == "Confirmed"]
        if not confirmed:
            print("No confirmed bookings")
        else:
            print(f"Confirmed revenue: ₹{sum(b['amount'] for b in confirmed):,}")
            average = sum(b["nights"] for b in confirmed) / len(confirmed)
            print(f"Average stay: {average:.2f} nights")
            rooms = {}
            room_counts = {}
            channels = {}
            for b in confirmed:
                rooms[b["room"]] = rooms.get(b["room"], 0) + b["amount"]
                room_counts[b["room"]] = room_counts.get(b["room"], 0) + 1
                channels[b["channel"]] = channels.get(b["channel"], 0) + b["amount"]
            for rank, room in enumerate(ranked(rooms), start=1):
                print(f"{rank}. {room}: ₹{rooms[room]:,} ({room_counts[room]} bookings)")
            top = ranked(channels)[0]
            print(f"Top channel: {top} (₹{channels[top]:,})")

        months = {}
        for b in good:
            key = (b["date"].year, b["date"].month)
            months[key] = months.get(key, 0) + 1
        year, month = ranked(months)[0]
        name = datetime(year, month, 1).strftime("%B %Y")
        print(f"Busiest month: {name} ({months[(year, month)]} bookings)")''',
    weak='''import csv
f = open(input("File: "))
rows = list(csv.DictReader(f))
good = []
for r in rows:
    if r["nights"] == "" or r["amount"] == "":
        continue
    good.append(r)
print(f"Bookings: {len(good)}")
print(f"Skipped rows: {len(rows) - len(good)}")
c = [r for r in good if r["status"] == "Confirmed"]
x = [r for r in good if r["status"] == "Cancelled"]
n = [r for r in good if r["status"] == "No-show"]
print(f"Status: Confirmed {len(c)}, Cancelled {len(x)}, No-Show {len(n)}")
total = 0
for r in c:
    total += int(r["amount"].replace("₹", "").replace(",", ""))
print(f"Confirmed revenue: ₹{total:,}")
print(f"Average stay: {sum(int(r['nights']) for r in c) / len(c):.2f} nights")''',
    need=[dict(any=['call:open'], min=1, label='`open()` to read the file'),
          dict(any=['attr:DictReader', 'method:DictReader'], min=1, label='`csv.DictReader` to read the rows'),
          dict(any=['method:strptime'], min=1, label='`datetime.strptime` to read the dates'),
          dict(any=['method:strftime'], min=1, label='`strftime` to name the month'),
          dict(any=['exc:ValueError'], min=1, label='`except ValueError` for dates in the other format'),
          dict(any=['exc:FileNotFoundError'], min=1, label='`except FileNotFoundError` for a missing file'),
          dict(any=['kw:key'], min=1, label='`sorted()` with `key=` to rank')],
    expect=exp2,
    tests=[dict(name='The course file', kind='main', inputs=['hotel_bookings.csv'], data=True),
           dict(name='A small October file', kind='main', inputs=['oct.csv'], files={'oct.csv': HEAD + 'B1,Asha,Deluxe,2026-10-02,2,3000,MakeMyTrip,Confirmed,6000\nB2,Ravi, standard,05/10/2026,1,1800,Walk-in ,confirmed,\nB3,Neha,Suite,2026-10-09,,5000,Goibibo,Confirmed,5000\nB4,Imran,deluxe,2026-10-11,3,3000,makemytrip,CONFIRMED,"₹9,000"\nB5,Zoya,Suite,2026-10-12,2,5000,Booking.com,Cancelled,10000\n'}),
           dict(name='Two months', kind='main', inputs=['q3.csv'], files={'q3.csv': HEAD + 'C1,A,Standard,2026-08-30,1,1800,Goibibo,Confirmed,1800\nC2,B,Standard,2026-09-01,2,1800,Goibibo,Confirmed,3600\nC3,C,Deluxe,2026-09-02,1,3000,Walk-in,No-show,3000\nC4,D,Deluxe,01/09/2026,4,3000,Booking.com,Confirmed,12000\nC5,E,Suite,2026-08-15,1,5000,Booking.com,cancelled,5000\n'}),
           dict(name='An empty amount is nights × rate', kind='logic', inputs=['fill.csv'], files={'fill.csv': HEAD + 'D1,A,Suite,2026-10-01,3,5000,Goibibo,Confirmed,\nD2,B,Deluxe,2026-10-02,1,3000,Goibibo,Confirmed,3000\n'}, check=['Bookings', 'Confirmed revenue', '1.', '2.'],
                tip='When the amount is empty, use `nights × rate` (here 3 × 5000 = 15000) instead of skipping the row.'),
           dict(name='Both date formats count', kind='logic', inputs=['dates.csv'], files={'dates.csv': HEAD + 'E1,A,Deluxe,2026-11-03,1,3000,Walk-in,Confirmed,3000\nE2,B,Deluxe,04/11/2026,1,3000,Walk-in,Confirmed,3000\nE3,C,Deluxe,2026-12-01,1,3000,Walk-in,Confirmed,3000\nE4,D,Deluxe,Nov 5 2026,1,3000,Walk-in,Confirmed,3000\n'}, check=['Bookings', 'Skipped', 'Busiest'],
                tip='Try `%Y-%m-%d` first, and if that raises `ValueError` try `%d/%m/%Y`. A date in neither format (like `Nov 5 2026`) makes the row skipped.'),
           dict(name='Status and channel cleaning', kind='logic', inputs=['clean.csv'], files={'clean.csv': HEAD + 'F1,A,deluxe ,2026-10-01,1,3000, goibibo,confirmed,3000\nF2,B,DELUXE,2026-10-02,1,3000,Goibibo ,CONFIRMED,3000\nF3,C,Standard,2026-10-03,1,1800,Walk-in,No-show,1800\n'}, check=['Status', '1.', 'Top channel'],
                tip='Clean before you count: `strip().title()` for status and room type, `strip().lower()` for the channel. Then `confirmed`, ` Goibibo ` and `goibibo` all match.'),
           dict(name='The file does not exist', kind='edge', inputs=['missing.csv'], remove=['missing.csv'],
                tip='Catch `FileNotFoundError` and print `File not found: <name>`.'),
           dict(name='Only the header', kind='edge', inputs=['empty.csv'], files={'empty.csv': HEAD},
                tip='With no rows at all, print the two counts and `No bookings`. Do not divide by 0.'),
           dict(name='No confirmed bookings', kind='edge', inputs=['cancel.csv'], files={'cancel.csv': HEAD + 'G1,A,Suite,2026-10-01,2,5000,Goibibo,Cancelled,10000\nG2,B,Suite,2026-10-05,1,5000,Goibibo,No-show,5000\n'},
                tip='With no confirmed bookings, print `No confirmed bookings` instead of the revenue lines, but still print the status counts and the busiest month.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
BUDGET = '{"Food": 6000, "Travel": 4000, "Bills": 3000}'
EXP = ('date,category,amount,note\n2026-10-02,Food,1250.50,groceries\n2026-10-05,travel,3200,train to Hyderabad\n2026-10-07,Bills,2850,electricity\n'
       '2026-10-12,Food,980,restaurant\n2026-10-15,Shopping,2150,shoes\n2026-10-18,Travel,1400,cab\n2026-09-28,Food,700,snacks\n'
       '2026-10-20,Food,abc,typo\n31/10/2026,Bills,500,wrong date\n2026-10-25,Food,-50,refund\n2026-10-30, food ,2000,party\n')
def exp3(i, t):
    text = i[0].strip(); files = t.get('files', {})
    try:
        m = datetime.strptime(text, '%Y-%m')
        assert len(text) == 7
    except (ValueError, AssertionError):
        return ['Invalid month: ' + text]
    for n in ('budget.json', 'expenses.csv'):
        if n not in files: return ['Missing file: ' + n]
    budget = json.loads(files['budget.json']); bad, items = 0, []
    for r in rows_of(files['expenses.csv']):
        try:
            d = datetime.strptime(r['date'].strip(), '%Y-%m-%d'); a = float(r['amount']); c = r['category'].strip().title()
            if a <= 0 or not c: raise ValueError
        except (ValueError, TypeError, AttributeError):
            bad += 1; continue
        if (d.year, d.month) == (m.year, m.month): items.append((d, c if c in budget else 'Other', a))
    rep = ['Month: ' + m.strftime('%B %Y')]
    if not items: rep.append('No expenses in ' + m.strftime('%B %Y'))
    else:
        rep += ['Expenses: %d (bad rows: %d)' % (len(items), bad), 'Total spent: ' + money(sum(a for d, c, a in items))]
        spent = {c: 0 for c in budget}
        for d, c, a in items: spent[c] = spent.get(c, 0) + a
        over = []
        for c, s in spent.items():
            if c == 'Other': rep.append('Other: %s (no budget)' % money(s)); continue
            b = budget[c]; line = '%s: %s of %s (%.1f%%)' % (c, money(s), money(b), s / b * 100)
            if s > b: line += ' OVER'; over.append(c)
            rep.append(line)
        rep.append('Over budget: ' + (', '.join(over) or 'none'))
        big = items[0]
        for x in items:
            if x[2] > big[2]: big = x
        rep.append('Biggest expense: %s on %s (%s)' % (money(big[2]), big[0].strftime('%d %b'), big[1]))
    return rep + ['Saved report_%s.txt' % text], rep

P3 = dict(
    id='p5-3', level=3, title='Monthly budget report', short='Combine a JSON budget and a CSV of expenses into a monthly report file.',
    story=('A small business tracks its expenses in a CSV file and keeps its monthly budget per category in a JSON file. At the end of each month, the accountant wants a report: '
           'how much was spent per category against the budget, which categories went **over budget**, and the biggest single expense. The report must also be **saved as a text file** to email.\n'
           'The data has the usual problems: amounts that are words or negative, dates in the wrong format, categories in different capitals, and categories that have no budget (they go under **Other**).'),
    objectives=['Read a JSON file and a CSV file and combine them', 'Validate input with `datetime.strptime` and `try` / `except`',
                'Filter rows to one month and group by category', 'Write a report file and print it'],
    may=['everything from Parts 1-4', '`json`, `csv`, `datetime`', '`try` / `except` / `else` / `finally`, `raise`', '`re`, `collections`'],
    mustnot=NOT_YET,
    tasks=['Ask `Month (YYYY-MM): `, strip it, and check it with `datetime.strptime(text, "%Y-%m")` (it must also be exactly 7 characters). If it is not valid, print `Invalid month: <text>` and stop.',
           'Load `budget.json` (a dictionary like `{"Food": 6000, "Travel": 4000}`) and read `expenses.csv` (`date,category,amount,note`) with `csv.DictReader`. If a file is missing, print `Missing file: <name>` (check `budget.json` first) and stop.',
           'A row is **bad** if its date is not `%Y-%m-%d`, its amount is not a number or is 0 or less, or its category is empty. Count the bad rows in the whole file.',
           'Keep the good rows of the chosen month only. Clean the category with `strip().title()`; if it is not in the budget, it becomes `Other`.',
           'Build the report lines: `Month: October 2026`; then, if there are expenses, `Expenses: <n> (bad rows: <n>)` and `Total spent: ₹<amount>`; one line per budget category in the JSON order: `Food: ₹4,230.50 of ₹6,000.00 (70.5%)`, adding ` OVER` when spent is more than the budget; `Other: ₹2,150.00 (no budget)` if needed; `Over budget: Travel` (or `none`); and `Biggest expense: ₹3,200.00 on 05 Oct (Travel)` (the first one if tied).',
           'If the month has no expenses, the report is `Month: ...` and `No expenses in October 2026`.',
           'Print the report lines, write the same lines to `report_<month>.txt` (like `report_2026-10.txt`), and finally print `Saved report_<month>.txt`.',
           'Use functions for the separate jobs (loading, validating, building the report) and handle every error without crashing.'],
    lines=['Month: <Month Year>', 'Expenses: <n> (bad rows: <n>)', 'Total spent: ₹<amount>', '<Category>: ₹<spent> of ₹<budget> (<percent>%)  (+ " OVER")',
           'Other: ₹<amount> (no budget)', 'Over budget: <categories> or none', 'Biggest expense: ₹<amount> on <dd Mon> (<Category>)', 'No expenses in <Month Year>',
           'Saved report_<YYYY-MM>.txt', 'Invalid month: <text>', 'Missing file: <name>', '--- the report file must contain the report lines ---'],
    rules='Money has `₹`, commas and 2 decimals. Percent = spent ÷ budget × 100 with 1 decimal. Dates in the biggest-expense line use `strftime("%d %b")`. The report file holds the same lines as the printed report (from `Month:` to the end, without the `Saved` line).',
    sample={'budget.json': BUDGET, 'expenses.csv': EXP},
    edge=['A month typed wrongly, like `Oct 2026` or `2026-13`.',
          'A **missing** `budget.json` or `expenses.csv`.',
          'Bad rows: a word as the amount, a **negative** amount, a date like `31/10/2026`.',
          'A category with **no budget**: it goes under `Other`.',
          'Spending **exactly** the budget is not over (100.0%, no `OVER`).',
          'A month with **no expenses** at all.'],
    hints=['Check the month first: `try: chosen = datetime.strptime(text, "%Y-%m")` `except ValueError:` print the message. The 7-character check catches `2026-1`. Use `chosen.strftime("%B %Y")` for `October 2026`.',
           'Load with `with open("budget.json") as f: budget = json.load(f)` inside `try` / `except FileNotFoundError`. For each CSV row, put the date, amount and category checks in one `try` and `raise ValueError` yourself for amounts of 0 or less.',
           'Build the report as a list of strings, `report = [...]`. Then `print("\\n".join(report))`, and write it with `with open(f"report_{text}.txt", "w") as out: out.write("\\n".join(report) + "\\n")`. A dictionary `spent = {c: 0 for c in budget}` keeps the JSON order of the categories.'],
    starter='# Project 5.3: Monthly budget report\nimport csv\nimport json\nfrom datetime import datetime\n',
    sol='''# Project 5.3: Monthly budget report
import csv
import json
from datetime import datetime


def load_files():
    """Return (budget, rows), or print which file is missing and return None."""
    for name in ("budget.json", "expenses.csv"):
        try:
            with open(name, newline="") as f:
                if name.endswith(".json"):
                    budget = json.load(f)
                else:
                    rows = list(csv.DictReader(f))
        except FileNotFoundError:
            print(f"Missing file: {name}")
            return None
    return budget, rows


def clean_row(row, budget):
    """Return (date, category, amount) for a good row; raise ValueError for a bad one."""
    try:
        date = datetime.strptime(row["date"].strip(), "%Y-%m-%d")
        amount = float(row["amount"])
        category = row["category"].strip().title()
    except (TypeError, AttributeError):
        raise ValueError("missing value")
    if amount <= 0 or category == "":
        raise ValueError("bad amount or category")
    if category not in budget:
        category = "Other"
    return date, category, amount


def build_report(chosen, items, bad, budget):
    """Return the report as a list of lines."""
    report = [f"Month: {chosen.strftime('%B %Y')}"]
    if not items:
        report.append(f"No expenses in {chosen.strftime('%B %Y')}")
        return report
    report.append(f"Expenses: {len(items)} (bad rows: {bad})")
    report.append(f"Total spent: ₹{sum(a for d, c, a in items):,.2f}")
    spent = {c: 0 for c in budget}
    for date, category, amount in items:
        spent[category] = spent.get(category, 0) + amount
    over = []
    for category, total in spent.items():
        if category == "Other":
            report.append(f"Other: ₹{total:,.2f} (no budget)")
            continue
        limit = budget[category]
        line = f"{category}: ₹{total:,.2f} of ₹{limit:,.2f} ({total / limit * 100:.1f}%)"
        if total > limit:
            line += " OVER"
            over.append(category)
        report.append(line)
    report.append("Over budget: " + (", ".join(over) or "none"))
    biggest = items[0]
    for item in items:
        if item[2] > biggest[2]:
            biggest = item
    date, category, amount = biggest
    report.append(f"Biggest expense: ₹{amount:,.2f} on {date.strftime('%d %b')} ({category})")
    return report


text = input("Month (YYYY-MM): ").strip()
try:
    chosen = datetime.strptime(text, "%Y-%m")
    if len(text) != 7:
        raise ValueError("wrong length")
except ValueError:
    print(f"Invalid month: {text}")
else:
    loaded = load_files()
    if loaded is not None:
        budget, rows = loaded
        items = []
        bad = 0
        for row in rows:
            try:
                date, category, amount = clean_row(row, budget)
            except ValueError:
                bad += 1
                continue
            if (date.year, date.month) == (chosen.year, chosen.month):
                items.append((date, category, amount))
        report = build_report(chosen, items, bad, budget)
        print("\\n".join(report))
        with open(f"report_{text}.txt", "w") as out:
            out.write("\\n".join(report) + "\\n")
        print(f"Saved report_{text}.txt")''',
    weak='''import csv
import json
m = input("Month: ")
budget = json.load(open("budget.json"))
rows = list(csv.DictReader(open("expenses.csv")))
spent = {}
total = 0
for r in rows:
    if r["date"].startswith(m):
        try:
            a = float(r["amount"])
        except ValueError:
            continue
        c = r["category"]
        spent[c] = spent.get(c, 0) + a
        total += a
lines = [f"Total spent: ₹{total:,.2f}"]
for c in budget:
    s = spent.get(c, 0)
    lines.append(f"{c}: ₹{s:,.2f} of ₹{budget[c]:,.2f} ({s / budget[c] * 100:.1f}%)")
print("\\n".join(lines))
open(f"report_{m}.txt", "w").write("\\n".join(lines))
print(f"Saved report_{m}.txt")''',
    need=[dict(any=['attr:json', 'method:load'], min=1, label='`json.load` to read the budget'),
          dict(any=['attr:DictReader', 'method:DictReader'], min=1, label='`csv.DictReader` to read the expenses'),
          dict(any=['method:strptime'], min=1, label='`datetime.strptime` to check dates and the month'),
          dict(any=['node:Try'], min=2, label='`try` / `except` for the month, the files and the rows'),
          dict(any=['exc:FileNotFoundError'], min=1, label='`except FileNotFoundError` for missing files'),
          dict(any=['node:Raise'], min=1, label='`raise` to reject bad values yourself'),
          dict(any=['method:write'], min=1, label='writing the report file with `write()`'),
          dict(any=['node:FunctionDef'], min=2, label='functions for the separate jobs')],
    expect=exp3,
    tests=[dict(name='October report', kind='main', inputs=['2026-10'], files={'budget.json': BUDGET, 'expenses.csv': EXP}, outfile='report_2026-10.txt'),
           dict(name='September report', kind='main', inputs=['2026-09'], files={'budget.json': BUDGET, 'expenses.csv': EXP}, outfile='report_2026-09.txt'),
           dict(name='A different budget', kind='main', inputs=[' 2026-11 '], files={'budget.json': '{"Rent": 15000, "Salaries": 40000, "Internet": 1500}', 'expenses.csv': 'date,category,amount,note\n2026-11-01,Rent,15000,office\n2026-11-03,Salaries,38500,staff\n2026-11-05,Internet,1799,fibre\n2026-11-09,Snacks,640,tea\n'}, outfile='report_2026-11.txt'),
           dict(name='Unknown categories go to Other', kind='logic', inputs=['2026-12'], files={'budget.json': '{"Food": 1000}', 'expenses.csv': 'date,category,amount,note\n2026-12-01,Gifts,500,x\n2026-12-02,food,300,y\n2026-12-03, gifts ,250,z\n'}, outfile='report_2026-12.txt', check=['Food', 'Other', 'Over'],
                tip='Clean the category with `strip().title()`. Anything not in the budget goes under `Other`, shown after the budget categories with `(no budget)`.'),
           dict(name='Exactly on budget is not over', kind='logic', inputs=['2027-01'], files={'budget.json': '{"Food": 1000, "Travel": 500}', 'expenses.csv': 'date,category,amount,note\n2027-01-04,Food,1000,x\n2027-01-05,Travel,500.01,y\n'}, outfile='report_2027-01.txt', check=['Food', 'Travel', 'Over'],
                tip='Over budget means spent **more than** the budget (`>`). ₹1,000 of ₹1,000 is 100.0% and not over.'),
           dict(name='Bad rows are counted in the whole file', kind='logic', inputs=['2026-10'], files={'budget.json': '{"Food": 5000}', 'expenses.csv': 'date,category,amount,note\n2026-10-01,Food,100,a\n2026-09-01,Food,-5,b\n2026/10/02,Food,50,c\n2026-10-03,Food,,d\n2026-10-04,,40,e\n'}, outfile='report_2026-10.txt', check=['Expenses', 'Total'],
                tip='Count a row as bad wherever it is in the file: a negative or empty amount, a date like `2026/10/02`, or an empty category. Rows from other months are not bad, just left out.'),
           dict(name='A month typed wrongly', kind='edge', inputs=['Oct 2026'], files={'budget.json': BUDGET, 'expenses.csv': EXP},
                tip='Check the month with `strptime(text, "%Y-%m")` inside `try`. If it fails, print `Invalid month: <text>` and stop.'),
           dict(name='No budget file', kind='edge', inputs=['2026-10'], files={'expenses.csv': EXP}, remove=['budget.json'],
                tip='Opening a missing file raises `FileNotFoundError`: print `Missing file: budget.json` and stop.'),
           dict(name='A month with no expenses', kind='edge', inputs=['2026-12'], files={'budget.json': BUDGET, 'expenses.csv': EXP}, outfile='report_2026-12.txt',
                tip='When nothing falls in the month, the report is just `Month: December 2026` and `No expenses in December 2026`, and it is still saved.')],
)

PROJECTS = [P1, P2, P3]
