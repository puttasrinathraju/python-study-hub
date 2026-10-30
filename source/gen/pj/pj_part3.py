# Part 3 projects (chapters 8-13): Parts 1-2 + strings and string methods, lists, tuples, sets, dictionaries,
# comprehensions. No functions (def/lambda), try/except, imports or files yet.
PART = 3
TITLE = 'Part 3 projects: text and collections'
INTRO = ('Three data-cleaning and summary jobs that analysts do every week: tidy a messy list, group sales by region, '
         'and find the main words in customer feedback. They use strings, lists, sets, dictionaries and comprehensions, but no functions yet.')
NOT_YET = ['your own functions (`def`, `lambda`)', '`try` / `except`', '`import`', 'files']

# ---------------------------------------------------------------- Project 1 (Beginner)
def exp1(i):
    parts = i[0].split(',')
    empty = sum(1 for p in parts if not p.strip())
    clean = [' '.join(p.split()).title() for p in parts if p.strip()]
    uniq = []
    for n in clean:
        if n not in uniq: uniq.append(n)
    out = ['Raw entries: %d' % len(parts), 'Empty entries: %d' % empty, 'Duplicates removed: %d' % (len(clean) - len(uniq)), 'Unique customers: %d' % len(uniq)]
    if not uniq: return out + ['No customers']
    longest = uniq[0]
    for n in uniq:
        if len(n) > len(longest): longest = n
    return out + ['Customers: ' + ', '.join(uniq), 'Sorted: ' + ', '.join(sorted(uniq)), 'Longest name: ' + longest]

P1 = dict(
    id='p3-1', level=1, title='Clean a customer list', short='Turn a messy, pasted list of names into a clean customer list.',
    story=('Priya works in the marketing team of a jewellery store in Chennai. Sales staff send her customer names copied from WhatsApp, paper slips and old Excel files. '
           'The list is a mess: random capitals, extra spaces, empty entries between two commas, and the same customer typed twice in different ways.\n'
           'Write a program that reads the whole list in one line, cleans every name, removes the duplicates, and prints a short cleaning report with the final list.'),
    objectives=['Split one line of text into a list', 'Clean text with `strip()`, `split()`, `join()` and `title()`',
                'Remove duplicates but keep the first-seen order', 'Report how much dirty data you removed'],
    may=['everything from Parts 1 and 2', 'string methods', 'lists and list comprehensions', 'sets', '`len()`, `sorted()`'],
    mustnot=NOT_YET,
    tasks=['Ask once with `input()`: `Paste the names, separated by commas: ` and split the text at every comma.',
           '`Raw entries` is the number of pieces after splitting.',
           'An entry that is empty or only spaces is an empty entry: count it and drop it.',
           'Clean every other entry: remove spaces at both ends, turn several spaces inside a name into one, and use title case (`Kiran Kumar`).',
           'Remove duplicates: after cleaning, `asha` and ` ASHA ` are the same customer. Keep the first one you see, in the original order. Count how many you removed.',
           'If no customers are left, print `No customers` after the counts.',
           'Otherwise print the customers in first-seen order, then sorted A to Z, both joined with `, `.',
           'Print the longest name (counting every character, spaces too). If two names are equally long, keep the first one.'],
    lines=['Raw entries: <count>', 'Empty entries: <count>', 'Duplicates removed: <count>', 'Unique customers: <count>',
           'Customers: <name>, <name>, ...', 'Sorted: <name>, <name>, ...', 'Longest name: <name>', 'No customers'],
    rules='Counts are plain whole numbers. Names are joined with a comma and one space. Print `No customers` only when nothing is left, and in that case skip the last three lines.',
    edge=['**Two commas in a row** (`asha,,ravi`) or a piece with only spaces: that is an empty entry.',
          'The **same name in different capitals** (`ASHA`, `asha`, `Asha`): one customer.',
          '**Several spaces inside** a name (`ravi   kumar`): clean it to `Ravi Kumar`, so it matches `Ravi Kumar`.',
          'Only commas and spaces: no customers at all.',
          'Names of the **same length**: the first one stays the longest.'],
    hints=['`pieces = text.split(",")` gives the raw entries. Then loop over them: `if piece.strip() == "":` counts an empty entry; otherwise clean it.',
           'To squeeze spaces inside a name, split it into words and join them again: `" ".join(piece.split())`. Then add `.title()`.',
           'Keep the order while removing duplicates: start `customers = []` and only `append(name)` when `name not in customers`. Join the list with `", ".join(customers)` to print it.'],
    starter='# Project 1: Clean a customer list\n',
    sol='''# Project 1: Clean a customer list
text = input("Paste the names, separated by commas: ")
pieces = text.split(",")

empty_count = 0
cleaned = []
for piece in pieces:
    if piece.strip() == "":
        empty_count += 1
        continue
    # Squeeze inner spaces, trim the ends and fix the capitals
    cleaned.append(" ".join(piece.split()).title())

# Remove duplicates but keep the first-seen order
customers = []
for name in cleaned:
    if name not in customers:
        customers.append(name)

print(f"Raw entries: {len(pieces)}")
print(f"Empty entries: {empty_count}")
print(f"Duplicates removed: {len(cleaned) - len(customers)}")
print(f"Unique customers: {len(customers)}")

if not customers:
    print("No customers")
else:
    longest = customers[0]
    for name in customers:
        if len(name) > len(longest):
            longest = name
    print("Customers: " + ", ".join(customers))
    print("Sorted: " + ", ".join(sorted(customers)))
    print("Longest name: " + longest)''',
    weak='''t = input("Names: ")
p = t.split(",")
names = []
for x in p:
    x = x.strip().title()
    if x != "":
        names.append(x)
u = list(set(names))
print("Raw entries:", len(p))
print("Empty entries:", len(p) - len(names))
print("Duplicates removed:", len(names) - len(u))
print("Unique customers:", len(u))
print("Customers: " + ", ".join(u))
print("Sorted: " + ", ".join(sorted(u)))
print("Longest name: " + max(u, key=len))''',
    need=[dict(any=['method:split'], min=1, label='`split()` to cut the line into pieces'),
          dict(any=['method:strip'], min=1, label='`strip()` to remove spaces at the ends'),
          dict(any=['method:title'], min=1, label='`title()` to fix the capitals'),
          dict(any=['method:join'], min=1, label='`join()` to build the output lines'),
          dict(any=['cmp:NotIn', 'cmp:In', 'call:set', 'node:SetComp'], min=1, label='`in` / `not in` (or a set) to find duplicates'),
          dict(any=['call:sorted', 'method:sort'], min=1, label='`sorted()` for the A to Z list'),
          dict(any=['call:len'], min=1, label='`len()` for the counts')],
    expect=exp1,
    tests=[dict(name='A messy list', kind='main', inputs=[' asha ,RAVI, neha,, Asha , kiran kumar']),
           dict(name='Two repeated customers', kind='main', inputs=['Imran,priya SHARMA,imran, ,Priya sharma,Zoya']),
           dict(name='Lots of repeats', kind='main', inputs=['rahul,ANIL,  meera  ,anil,RAHUL,anil,deepa']),
           dict(name='Duplicates ignore capitals', kind='logic', inputs=['ASHA,asha,Asha,aSHA'], check=['Duplicates', 'Unique', 'Customers'],
                tip='Clean every name first (strip and title case), then compare. After cleaning, `ASHA` and `asha` are both `Asha`.'),
           dict(name='First-seen order is kept', kind='logic', inputs=['zoya,amit,meena'], check=['Customers', 'Sorted'],
                tip='`Customers` keeps the order the names came in. Only the `Sorted` line is A to Z. (A set loses the order, so use a list with `not in`.)'),
           dict(name='Extra spaces inside a name', kind='logic', inputs=['ravi   kumar,Ravi Kumar, anil'], check=['Duplicates', 'Customers'],
                tip='Squeeze the inner spaces with `" ".join(name.split())`, so `ravi   kumar` becomes `Ravi Kumar` and matches the other one.'),
           dict(name='Only commas and spaces', kind='edge', inputs=[' , ,  '],
                tip='All 3 pieces are empty. Print the counts, then `No customers` instead of the name lines.'),
           dict(name='Just one name', kind='edge', inputs=['  meera  '],
                tip='With one name there are no commas: `split(",")` still gives one piece.'),
           dict(name='Names of the same length', kind='edge', inputs=['anil,ravi,sita'], check=['Longest'],
                tip='When names are equally long, keep the first one: only replace the longest when a name is **strictly** longer (`>`).')],
)

# ---------------------------------------------------------------- Project 2 (Intermediate)
def exp2(i):
    tot, cnt, valid, skipped = {}, {}, 0, 0
    for line in i:
        if line.strip().lower() == 'done': break
        p = line.split(',')
        if len(p) != 2 or not p[1].strip().isdigit() or not p[0].strip(): skipped += 1; continue
        r = ' '.join(p[0].split()).title(); a = int(p[1].strip())
        tot[r] = tot.get(r, 0) + a; cnt[r] = cnt.get(r, 0) + 1; valid += 1
    out = ['Valid sales: %d' % valid, 'Skipped rows: %d' % skipped]
    if not valid: return out + ['No valid sales']
    total = sum(tot.values()); rank = sorted(sorted(tot), key=tot.get, reverse=True)
    for k, r in enumerate(rank, 1):
        share = tot[r] / total * 100 if total else 0
        out.append('%d. %s: ₹%s (%d %s, %.1f%%)' % (k, r, format(tot[r], ','), cnt[r], 'sale' if cnt[r] == 1 else 'sales', share))
    return out + ['Total: ₹' + format(total, ','), 'Top region: ' + rank[0]]

P2 = dict(
    id='p3-2', level=2, title='Sales by region', short='Group raw sales rows by region, like a pivot table, and rank the regions.',
    story=('Arjun is a sales analyst for a chain of mobile phone stores across Telangana and Andhra Pradesh. Every evening the store managers message him their sales as rows like `North, 1200`. '
           'Some rows are broken: a missing comma, a word instead of a number, or extra commas.\n'
           'Write a program that reads the rows until he types `done`, skips the broken ones, adds up the sales per region (a GROUP BY, like a pivot table in Excel), '
           'and prints a ranked summary with each region\'s share of the total.'),
    objectives=['Parse and check rows of text before using them', 'Group and count with a dictionary',
                'Rank dictionary keys by their values, with a fair tie rule', 'Work out shares (percentages) safely'],
    may=['everything from Parts 1 and 2', 'string methods', 'lists, tuples, sets', 'dictionaries and `get()`', '`sorted()` with `key=`', 'comprehensions'],
    mustnot=NOT_YET,
    tasks=['In a loop, ask `Sale (region,amount) or done: `. Stop when the user types `done` (any capitals, spaces around it are fine).',
           'A row is valid only if it splits into exactly 2 parts at the comma, the region is not empty, and the amount (after `strip()`) is made only of digits. Amounts are whole rupees.',
           'Skip broken rows and count them. Clean the region name: no extra spaces and title case, so ` north ` and `NORTH` are both `North`.',
           'For valid rows, add the amount to that region\'s total and count the sale, using dictionaries.',
           'After the loop, print `Valid sales` and `Skipped rows`. If there were no valid sales, print `No valid sales` and stop.',
           'Rank the regions by total, highest first. If two regions have the same total, put them in A to Z order.',
           'Print one line per region with its rank: `1. North: ₹3,200 (3 sales, 45.7%)`. Use `1 sale` for a single sale. The share is the region total ÷ the grand total × 100, with 1 decimal. If the grand total is 0, every share is `0.0%`.',
           'Print `Total: ₹<amount>` and `Top region: <name>`.'],
    lines=['Valid sales: <count>', 'Skipped rows: <count>', '<rank>. <Region>: ₹<amount> (<n> sales, <share>%)', 'Total: ₹<amount>', 'Top region: <Region>', 'No valid sales'],
    rules='Amounts use commas (`:,`), like `₹3,200`. The share has 1 decimal (`:.1f`) and a `%` sign. Write `1 sale` but `2 sales`. Print `No valid sales` instead of the region lines when nothing was valid.',
    edge=['**Broken rows**: `bad line` (no comma), `North,abc` (not a number), `North,1,200` (3 parts) and `,500` (no region) are all skipped.',
          'The **same region in different capitals or spaces** is one region.',
          '**Ties**: two regions with the same total are ranked A to Z.',
          '**No valid rows** at all: no ranking, no division.',
          'Every amount is **₹0**: the total is 0, so the shares must not divide by it.',
          '**Big amounts** in crores.'],
    hints=['Inside `while True:` read `row = input(...)`, then `if row.strip().lower() == "done": break`. Split with `parts = row.split(",")` and check `len(parts) != 2`, an empty region, or `not parts[1].strip().isdigit()` → skip and `continue`.',
           'Group with two dictionaries: `totals[region] = totals.get(region, 0) + amount` and `counts[region] = counts.get(region, 0) + 1`. Clean the region with `" ".join(parts[0].split()).title()`.',
           'Ranking with the tie rule: sort the names A to Z first, then sort by total: `ranked = sorted(sorted(totals), key=totals.get, reverse=True)`. Python keeps the A to Z order for equal totals. Number the lines with `enumerate(ranked, start=1)`.'],
    starter='# Project 2: Sales by region\n',
    sol='''# Project 2: Sales by region
totals = {}
counts = {}
valid = 0
skipped = 0

while True:
    row = input("Sale (region,amount) or done: ")
    if row.strip().lower() == "done":
        break
    parts = row.split(",")
    # A valid row is exactly "region,amount" with a whole-number amount
    if len(parts) != 2 or parts[0].strip() == "" or not parts[1].strip().isdigit():
        skipped += 1
        continue
    region = " ".join(parts[0].split()).title()
    amount = int(parts[1].strip())
    totals[region] = totals.get(region, 0) + amount
    counts[region] = counts.get(region, 0) + 1
    valid += 1

print(f"Valid sales: {valid}")
print(f"Skipped rows: {skipped}")
if valid == 0:
    print("No valid sales")
else:
    grand_total = sum(totals.values())
    # Sort A to Z first, so regions with equal totals stay in A to Z order
    ranked = sorted(sorted(totals), key=totals.get, reverse=True)
    for rank, region in enumerate(ranked, start=1):
        share = totals[region] / grand_total * 100 if grand_total > 0 else 0
        word = "sale" if counts[region] == 1 else "sales"
        print(f"{rank}. {region}: ₹{totals[region]:,} ({counts[region]} {word}, {share:.1f}%)")
    print(f"Total: ₹{grand_total:,}")
    print(f"Top region: {ranked[0]}")''',
    weak='''t = {}
c = {}
v = 0
s = 0
while True:
    r = input("Row: ")
    if r == "done":
        break
    p = r.split(",")
    if len(p) != 2 or not p[1].strip().isdigit():
        s += 1
        continue
    reg = p[0].strip()
    t[reg] = t.get(reg, 0) + int(p[1])
    c[reg] = c.get(reg, 0) + 1
    v += 1
print(f"Valid sales: {v}")
print(f"Skipped rows: {s}")
tot = sum(t.values())
k = 1
for reg in sorted(t, key=t.get, reverse=True):
    print(f"{k}. {reg}: ₹{t[reg]:,} ({c[reg]} sales, {t[reg] / tot * 100:.1f}%)")
    k += 1
print(f"Total: ₹{tot:,}")
print(f"Top region: {sorted(t, key=t.get, reverse=True)[0]}")''',
    need=[dict(any=['node:While'], min=1, label='a `while` loop that runs until `done`'),
          dict(any=['method:split'], min=1, label='`split()` to cut each row at the comma'),
          dict(any=['method:isdigit'], min=1, label='`isdigit()` to check the amount'),
          dict(any=['method:get'], min=1, label='a dictionary with `get()` to group the totals'),
          dict(any=['kw:key'], min=1, label='`sorted()` with `key=` to rank the regions'),
          dict(any=['call:enumerate'], min=1, label='`enumerate()` to number the ranking'),
          dict(any=['spec:comma'], min=1, label='the `:,` format for amounts')],
    expect=exp2,
    tests=[dict(name='A normal evening', kind='main', inputs=['North, 1200', 'South,800', 'north,1500', 'East, 1700', 'South, 1300', 'North,500', 'done']),
           dict(name='Broken rows and a tie', kind='main', inputs=['West,900', 'west , 600', 'Central,1500', 'bad line', 'Central,abc', 'DONE']),
           dict(name='One region only', kind='main', inputs=['East,250', 'East,250', 'East,250', 'done']),
           dict(name='Region names ignore capitals and spaces', kind='logic', inputs=[' north ,100', 'NORTH,200', 'North,300', 'done'], check=['1.', 'Top'],
                tip='Clean the region before grouping: `" ".join(name.split()).title()` turns ` north ` and `NORTH` into `North`.'),
           dict(name='Ranked by total, highest first', kind='logic', inputs=['Agra,100', 'Bhopal,300', 'Cuttack,200', 'done'], check=['1.', '2.', '3.', 'Top'],
                tip='Rank by the totals, biggest first: `sorted(..., key=totals.get, reverse=True)`. The rank number goes at the start of the line.'),
           dict(name='1 sale or 2 sales', kind='logic', inputs=['Goa,500', 'Pune,100', 'Pune,100', 'done'], check=['1.', '2.'],
                tip='Write `1 sale` for a single sale and `sales` for 2 or more. A ternary works well here.'),
           dict(name='No valid rows', kind='edge', inputs=['oops', ',500', 'North,1,200', 'done'],
                tip='Rows with no comma, no region or extra commas are skipped. With no valid sales, print `No valid sales` and do not divide.'),
           dict(name='Every amount is ₹0', kind='edge', inputs=['South,0', 'North,0', 'done'],
                tip='When the grand total is 0, a share would divide by 0. Use 0 for every share in that case. Equal totals go A to Z.'),
           dict(name='Crore-size amounts', kind='edge', inputs=['North,12500000', 'South,9800000', 'North,7500000', 'done'],
                tip='Big amounts need the `:,` format, like `₹20,000,000`.')],
)

# ---------------------------------------------------------------- Project 3 (Challenging)
STOP = {"the", "a", "an", "is", "was", "were", "and", "it", "to", "very", "i", "of", "for", "but", "my", "in", "on", "this", "with", "at", "we", "our"}
POS = {"good", "great", "clean", "friendly", "tasty", "fast", "excellent", "love", "nice", "helpful"}
NEG = {"bad", "slow", "dirty", "rude", "cold", "late", "poor", "noisy", "expensive", "worst"}
def exp3(i):
    comments = []
    for line in i:
        if line.strip() == '': break
        comments.append(line)
    if not comments: return ['No comments to analyse']
    counts, lab, pos_used, neg_used = {}, {'Positive': 0, 'Negative': 0, 'Neutral': 0}, set(), set()
    for c in comments:
        words = [w.strip('.,!?') for w in c.lower().split()]
        words = [w for w in words if w]
        score = 0
        for w in words:
            if w in POS: score += 1; pos_used.add(w)
            if w in NEG: score -= 1; neg_used.add(w)
            if w not in STOP: counts[w] = counts.get(w, 0) + 1
        lab['Positive' if score > 0 else 'Negative' if score < 0 else 'Neutral'] += 1
    top = sorted(sorted(counts), key=counts.get, reverse=True)[:3]
    return ['Comments: %d' % len(comments), 'Positive: %d' % lab['Positive'], 'Negative: %d' % lab['Negative'], 'Neutral: %d' % lab['Neutral'],
            'Unique words: %d' % len(counts), 'Top words: ' + ', '.join('%s (%d)' % (w, counts[w]) for w in top),
            'Positive words used: ' + (', '.join(sorted(pos_used)) or 'none'), 'Negative words used: ' + (', '.join(sorted(neg_used)) or 'none')]

STARTER3 = '''# Project 3: Customer feedback analysis
STOP_WORDS = {"the", "a", "an", "is", "was", "were", "and", "it", "to", "very", "i", "of", "for",
              "but", "my", "in", "on", "this", "with", "at", "we", "our"}
POSITIVE = {"good", "great", "clean", "friendly", "tasty", "fast", "excellent", "love", "nice",
            "helpful"}
NEGATIVE = {"bad", "slow", "dirty", "rude", "cold", "late", "poor", "noisy", "expensive", "worst"}
'''
P3 = dict(
    id='p3-3', level=3, title='Customer feedback analysis', short='Find the main words and the mood in a pile of customer comments.',
    story=('A restaurant group in Bengaluru collects short comments from customers after every meal. The manager reads a few, but there are far too many to read them all.\n'
           'She wants a quick text summary: how many comments are positive, negative or neutral, which words customers use most (ignoring small words like "the" and "was"), '
           'and which positive and negative words came up. This is a small version of the "text analytics" that analysts run on reviews and survey answers.'),
    objectives=['Normalise text: lower case, split into words, strip punctuation', 'Count words with a dictionary and filter with sets',
                'Score each comment and count the results', 'Rank words by count with an A to Z tie rule'],
    may=['everything from Parts 1 and 2', 'string methods', 'lists, tuples', 'sets and set operators', 'dictionaries', 'comprehensions', '`sorted()` with `key=`'],
    mustnot=NOT_YET,
    tasks=['The starter gives you three sets: `STOP_WORDS`, `POSITIVE` and `NEGATIVE`. Keep them as they are.',
           'In a loop, ask `Comment (empty line to finish): ` and collect the comments. Stop at the first empty line (or a line with only spaces).',
           'If there were no comments, print `No comments to analyse` and stop.',
           'For each comment: make it lower case, split it into words, and strip `.` `,` `!` `?` from both ends of each word (`word.strip(".,!?")`). Drop words that become empty.',
           'Score each comment: +1 for every word in `POSITIVE`, −1 for every word in `NEGATIVE`. Above 0 is Positive, below 0 is Negative, 0 is Neutral.',
           'Count every word that is not in `STOP_WORDS` in a dictionary. `Unique words` is how many different words were counted.',
           'Top words: the 3 most common counted words (fewer if there are fewer), most common first. Equal counts go A to Z. Print them like `food (3), service (2), clean (2)`.',
           'Print the positive and the negative words that were used, A to Z, joined with `, ` (or `none`).'],
    lines=['Comments: <count>', 'Positive: <count>', 'Negative: <count>', 'Neutral: <count>', 'Unique words: <count>',
           'Top words: <word> (<count>), <word> (<count>), <word> (<count>)', 'Positive words used: <word>, <word> or none', 'Negative words used: <word>, <word> or none', 'No comments to analyse'],
    rules='Counts are plain whole numbers. Words are always lower case. Lists of words are joined with a comma and one space. Print `No comments to analyse` instead of everything else when the first line is empty.',
    edge=['The **first line is empty**: there is nothing to analyse.',
          '**Capitals and punctuation**: `Food!`, `food.` and `FOOD,` are the same word.',
          '**Stop words** never count, even if they are the most common.',
          '**Ties** in the top words: A to Z.',
          'Fewer than 3 different words: show only the ones there are.',
          'No positive or negative words at all: print `none`.'],
    hints=['Collect first, analyse after: `comments = []`, then in `while True:` read a line and `break` if `line.strip() == ""`, else `comments.append(line)`.',
           'Clean words with a comprehension: `words = [w.strip(".,!?") for w in comment.lower().split()]`, then keep only the non-empty ones. Use `if word in POSITIVE:` to score, and `counts[word] = counts.get(word, 0) + 1` for words `not in STOP_WORDS`.',
           'For the top words with the A to Z tie rule: `top = sorted(sorted(counts), key=counts.get, reverse=True)[:3]`. Build the text with `", ".join(f"{w} ({counts[w]})" for w in top)`. Keep the used positive/negative words in two sets and print `", ".join(sorted(...))`.'],
    starter=STARTER3,
    sol=STARTER3 + '''
# Collect the comments until an empty line
comments = []
while True:
    line = input("Comment (empty line to finish): ")
    if line.strip() == "":
        break
    comments.append(line)

if not comments:
    print("No comments to analyse")
else:
    word_counts = {}
    moods = {"Positive": 0, "Negative": 0, "Neutral": 0}
    positive_used = set()
    negative_used = set()
    for comment in comments:
        # Lower case, split, and strip punctuation from each word
        words = [w.strip(".,!?") for w in comment.lower().split()]
        words = [w for w in words if w != ""]
        score = 0
        for word in words:
            if word in POSITIVE:
                score += 1
                positive_used.add(word)
            if word in NEGATIVE:
                score -= 1
                negative_used.add(word)
            if word not in STOP_WORDS:
                word_counts[word] = word_counts.get(word, 0) + 1
        if score > 0:
            moods["Positive"] += 1
        elif score < 0:
            moods["Negative"] += 1
        else:
            moods["Neutral"] += 1

    # Most common first; sorting A to Z first keeps ties in A to Z order
    top_words = sorted(sorted(word_counts), key=word_counts.get, reverse=True)[:3]
    top_text = ", ".join(f"{w} ({word_counts[w]})" for w in top_words)
    print(f"Comments: {len(comments)}")
    print(f"Positive: {moods['Positive']}")
    print(f"Negative: {moods['Negative']}")
    print(f"Neutral: {moods['Neutral']}")
    print(f"Unique words: {len(word_counts)}")
    print(f"Top words: {top_text}")
    print("Positive words used: " + (", ".join(sorted(positive_used)) or "none"))
    print("Negative words used: " + (", ".join(sorted(negative_used)) or "none"))''',
    weak=STARTER3 + '''
c = []
while True:
    l = input("Comment: ")
    if l == "":
        break
    c.append(l)
if not c:
    print("No comments to analyse")
counts = {}
pu = set()
nu = set()
p = n = z = 0
for x in c:
    s = 0
    for w in x.lower().split():
        if w in POSITIVE:
            s += 1
            pu.add(w)
        if w in NEGATIVE:
            s -= 1
            nu.add(w)
        counts[w] = counts.get(w, 0) + 1
    if s > 0:
        p += 1
    elif s < 0:
        n += 1
    else:
        z += 1
top = sorted(counts, key=counts.get, reverse=True)[:3]
print(f"Comments: {len(c)}")
print(f"Positive: {p}")
print(f"Negative: {n}")
print(f"Neutral: {z}")
print(f"Unique words: {len(counts)}")
print("Top words: " + ", ".join(f"{w} ({counts[w]})" for w in top))
print("Positive words used: " + ", ".join(sorted(pu)))
print("Negative words used: " + ", ".join(sorted(nu)))''',
    need=[dict(any=['method:lower'], min=1, label='`lower()` so capitals do not split the counts'),
          dict(any=['method:split'], min=1, label='`split()` to cut comments into words'),
          dict(any=['method:strip'], min=1, label='`strip()` to remove punctuation'),
          dict(any=['method:get'], min=1, label='a dictionary with `get()` to count words'),
          dict(any=['kw:key'], min=1, label='`sorted()` with `key=` to rank the words'),
          dict(any=['node:ListComp', 'node:SetComp', 'node:DictComp', 'node:GeneratorExp'], min=1, label='a comprehension to clean or format the words'),
          dict(any=['method:join'], min=1, label='`join()` to build the word lists')],
    expect=exp3,
    tests=[dict(name='An evening of comments', kind='main', inputs=['The food was tasty and the staff were friendly!', 'Room was clean, but the service was slow.',
                                                                    'Food was cold. Service was rude and slow!', 'Great location, clean rooms, tasty food.', 'It was okay.', '']),
           dict(name='Mostly happy customers', kind='main', inputs=['Excellent biryani, fast service.', 'Love the biryani!', 'Nice ambience but expensive.', 'Biryani was good, service helpful.', '']),
           dict(name='A bad day', kind='main', inputs=['Worst service ever, very late.', 'Dirty tables and noisy hall.', 'Late order, cold food, rude waiter.', '']),
           dict(name='Ties are listed A to Z', kind='logic', inputs=['mango lassi', 'lassi mango', 'banana', ''], check=['Top words', 'Unique'],
                tip='Equal counts go A to Z: sort the words A to Z first, then by count with `reverse=True`. Python keeps the earlier order for ties.'),
           dict(name='Capitals and punctuation', kind='logic', inputs=['Food!', 'food.', 'FOOD, great', ''], check=['Top words', 'Unique', 'Positive'],
                tip='Lower-case the comment and `strip(".,!?")` each word, so `Food!`, `food.` and `FOOD,` all count as `food`.'),
           dict(name='Stop words never count', kind='logic', inputs=['the the the and it was good', ''], check=['Top words', 'Unique'],
                tip='Skip every word in `STOP_WORDS` when counting, even if it is the most common one.'),
           dict(name='No comments', kind='edge', inputs=[''],
                tip='When the first line is empty, print `No comments to analyse` and nothing else.'),
           dict(name='One word only', kind='edge', inputs=['Nice!!!', '   '],
                tip='A line with only spaces also ends the input. With one word, the top list has just one entry.'),
           dict(name='No mood words', kind='edge', inputs=['Room 204 booked online', ''],
                tip='When no positive or negative word appears, print `none` for those lines, and the comment is Neutral.')],
)

PROJECTS = [P1, P2, P3]
