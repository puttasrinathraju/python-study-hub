# Chapter 24: Cleaning data with Pandas. Run with the matching Python (see NOTES.md).
from chlib import Chapter, grid, cat, write_chapter, run, Raw
import json
K = Chapter('c24', 'import pandas as pd\n')
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
RAW = 'raw = pd.read_csv("employees.csv")\ndf = raw.copy()            # clean a copy, keep the original safe\n'
FLOW = Raw('V.flow(' + json.dumps([{"t": "Look: info(), isna().sum(), duplicated()", "k": "soft"}, {"t": "Remove duplicate rows", "k": "box"}, {"t": "Fill or drop missing values", "k": "acc"},
                                   {"t": "Fix text: strip, case, replace", "k": "box"}, {"t": "Fix types: astype, to_datetime", "k": "hl"}, {"t": "Check again, then save", "k": "tip"}]) + ', {"label": "The six cleaning steps"})')
TEMP = [["Mon", "31"], ["Tue", "NaN"], ["Wed", "NaN"], ["Thu", "29"], ["Fri", "NaN"]]
body = [
 {"t": "h", "text": "The cleaning checklist"},
 {"t": "p", "b": "Real files are messy. In `employees.csv` you saw extra spaces, mixed capitals, missing salaries, a repeated row and three date styles. ==Data cleaning== means fixing all of that **before** you analyse, because a wrong value gives a wrong answer."},
 {"t": "fig", "svg": FLOW, "cap": "The same six steps work on almost every file. Look first, fix, then look again."},
 C(RAW + 'print(df.shape)\nprint(df.isna().sum().sum(), df.duplicated().sum())', "Start with a copy, and measure the mess"),
 {"t": "note", "k": "trap", "b": "Without `.copy()`, `df = raw` gives the **same** table two names, so changing one changes the other. `raw.copy()` makes a separate table."},
 {"t": "note", "k": "key", "b": "Most cleaning methods **return a new result** and leave the table alone. Store the result: `df = df.dropna()` or `df[\"name\"] = df[\"name\"].str.strip()`. Older code uses `inplace=True`; you will see it, but storing the result is clearer."},
 {"t": "mm", "title": "Chapter 24 at a glance", "root": "Cleaning data", "kids": [
   {"t": "Repeats", "k": ["drop_duplicates()", "subset=, keep="]},
   {"t": "Gaps", "k": ["dropna()", "fillna(mean / mode)", "ffill(), bfill()"]},
   {"t": "Remove", "k": ["drop(columns=...)", "drop(index=...)", "errors='ignore'"]},
   {"t": "Types", "k": ["astype('int64')", "pd.to_numeric"]},
   {"t": "Text", "k": [".str.strip / title", ".str.replace", ".str.split(expand=True)", ".str.contains / extract", "map / replace with a dict"]},
   {"t": "Dates", "k": ["pd.to_datetime", "format='mixed', dayfirst", "errors='coerce'", ".dt.year, .dt.day_name()"]}]},

 {"t": "h", "text": "Removing duplicate rows"},
 {"t": "p", "b": "`drop_duplicates()` removes every row that is an exact copy of an earlier one. With `subset=` it compares only the columns you name, like an ID."},
 C(RAW + 'print(len(df))\ndf = df.drop_duplicates()\nprint(len(df))', "drop_duplicates(): remove exact copies"),
 C('orders = pd.DataFrame({"order_id": [1, 2, 2, 3], "amount": [500, 750, 760, 300]})\nprint(orders.drop_duplicates(subset="order_id"))                 # keeps the first copy\nprint(orders.drop_duplicates(subset="order_id", keep="last"))', "subset= and keep="),
 PRED('ids = pd.DataFrame({"id": [7, 7, 8, 9, 9, 9]})\nprint(len(ids.drop_duplicates()))', ["`3`", "`6`", "`2`", "`4`"], 0, "Only one copy of each id stays: 7, 8 and 9."),

 {"t": "h", "text": "Missing values: dropna and fillna"},
 {"t": "p", "b": "You have two choices for a gap: **remove** the row with `dropna()`, or **fill** the gap with `fillna()`. Dropping is simple but loses data. Filling keeps the row, so choose a sensible value."},
 C(RAW + 'print(len(df.dropna()))                      # rows with no gap at all\nprint(len(df.dropna(subset=["salary"])))    # rows that have a salary', "dropna(): remove rows with gaps"),
 {"t": "table", "head": ["Fill with", "Code", "Good for"], "rows": [
   ["A fixed value", "`df[\"city\"].fillna(\"Unknown\")`", "Text where \"unknown\" is honest"], ["The mean (average)", "`s.fillna(s.mean())`", "Numbers without extreme values"],
   ["The median", "`s.fillna(s.median())`", "Numbers with a few very big or small values"], ["The mode (most common)", "`s.fillna(s.mode()[0])`", "Categories, like a department"]]},
 C('scores = pd.Series([80, None, 60, 70])\nprint(scores.fillna(scores.mean()).tolist())\nprint(scores.fillna(0).tolist())', "fillna with the mean, or with 0"),
 C(RAW + 'df["salary"] = df["salary"].fillna(df["salary"].median())\ndf["city"] = df["city"].fillna("Unknown")\nprint(df[["salary", "city"]].isna().sum())', "Fill each column with its own value"),
 C('pay = pd.Series(["Cash", "UPI", None, "UPI", "Card"])\nprint(pay.mode()[0])\nprint(pay.fillna(pay.mode()[0]).tolist())', "mode()[0]: the most common value"),
 {"t": "note", "k": "trap", "b": "`mode()` returns a **Series**, because there can be a tie for most common. Take the first one with `[0]`. Writing `fillna(s.mode())` without `[0]` fills by matching index labels instead, which is not what you want."},
 {"t": "note", "k": "tip", "b": "`fillna(0)` is only right when a gap really means zero, like \"no sales that day\". A missing salary is not ₹0: filling it with 0 drags the average down."},

 {"t": "h", "text": "Filling from neighbours: ffill and bfill"},
 {"t": "p", "b": "In readings taken over time, the best guess for a gap is often the value **next to it**. `ffill()` (forward fill) copies the last known value down. `bfill()` (backward fill) copies the next known value up."},
 {"t": "anim", "title": "ffill copies the last value down; bfill copies the next value up", "frames": [
   {"html": grid(TEMP, cl=["day", "temp"], cw=70, hl=[[1, 1], [2, 1], [4, 1]], label="temperatures with three gaps"), "c": "Five daily temperature readings. Tuesday, Wednesday and Friday are missing."},
   {"html": grid([["Mon", "31"], ["Tue", "31"], ["Wed", "31"], ["Thu", "29"], ["Fri", "29"]], cl=["day", "ffill()"], cw=70, acc=[[1, 1], [2, 1], [4, 1]], label="after ffill"), "c": "`ffill()`: each gap takes the **last** value above it. Tue and Wed get Monday's 31, Fri gets Thursday's 29."},
   {"html": grid([["Mon", "31"], ["Tue", "29"], ["Wed", "29"], ["Thu", "29"], ["Fri", "NaN"]], cl=["day", "bfill()"], cw=70, acc=[[1, 1], [2, 1]], hl=[[4, 1]], label="after bfill"), "c": "`bfill()`: each gap takes the **next** value below it. Friday stays empty, because nothing comes after it."}]},
 C('temp = pd.Series([31, None, None, 29, None], index=["Mon", "Tue", "Wed", "Thu", "Fri"])\nprint(temp.ffill().tolist())\nprint(temp.bfill().tolist())', "ffill() and bfill()"),
 PRED('s = pd.Series([None, 5, None, 9])\nprint(s.ffill().tolist())', ["`[nan, 5.0, 5.0, 9.0]`", "`[5.0, 5.0, 5.0, 9.0]`", "`[nan, 5.0, 9.0, 9.0]`", "`[0.0, 5.0, 5.0, 9.0]`"], 0, "The first value has nothing above it, so it stays `nan`. The third copies the 5 above it."),

 {"t": "h", "text": "Removing rows and columns: drop"},
 {"t": "p", "b": "`drop()` removes columns or rows by name. Use `columns=` for columns and `index=` for row labels. (Older code writes `axis=1` for columns and `axis=0` for rows.)"},
 C(RAW + 'print(df.drop(columns=["email"]).shape)\nprint(df.drop(columns=["email", "city"]).shape)\nprint(df.drop("email", axis=1).shape)    # the same as columns=', "Drop columns"),
 C(RAW + 'print(df.drop(index=[0, 1])[["emp_id", "name"]].head(2))', "Drop rows by their index label"),
 {"t": "p", "b": "To drop the rows that match a condition, first make the condition. `df[\"score\"] < 55` gives `True` or `False` for every row, just like a NumPy boolean mask in Chapter 21. `df[mask]` keeps the `True` rows, and `.index` gives their labels, which `drop()` removes."},
 C(RAW + 'low = df[df["score"] < 55]          # the rows where the condition is True\nprint(low[["name", "score"]])\nprint(len(df.drop(low.index)))', "Drop the rows that match a condition"),
 C(RAW + 'cleaned = df.drop(columns=["email", "phone"], errors="ignore")   # no error for a missing column\nprint(list(cleaned.columns))', "errors='ignore': skip names that are not there"),
 {"t": "note", "k": "trap", "b": "Without `errors=\"ignore\"`, dropping a column that does not exist stops with a **KeyError**. That often happens when you run a notebook cell twice: the second time, the column is already gone."},

 {"t": "h", "text": "Fixing types: astype"},
 {"t": "p", "b": "Every column has one type. Numbers saved with symbols, like `\"₹1,200\"`, are **text** (`object`), so you cannot add them. Remove the symbols, then convert with `astype()`."},
 C('prices = pd.Series(["₹1,200", "₹850", "₹2,050"])\nclean = prices.str.replace("₹", "").str.replace(",", "").astype("int64")\nprint(clean.tolist(), clean.sum())', "Text to numbers"),
 C(RAW + 'df["salary"] = df["salary"].fillna(df["salary"].median())\nprint(df["salary"].dtype)\ndf["salary"] = df["salary"].astype("int64")    # whole rupees\nprint(df["salary"].dtype, df["salary"].head(3).tolist())', "Decimals to whole numbers (after the gaps are filled)"),
 {"t": "note", "k": "tip", "b": "You will often see `astype(int)`. It works, but the size of a plain `int` depends on the computer (this browser makes it `int32`). `astype(\"int64\")` gives the same result everywhere."},
 C('ages = pd.Series(["25", "thirty", "41"])\nprint(pd.to_numeric(ages, errors="coerce").tolist())', "pd.to_numeric(errors='coerce'): bad values become NaN"),
 C('score = pd.Series([88.0, 73.5])\nprint(score.astype(str).tolist(), pd.Series([1, 0, 1]).astype(bool).tolist())', "astype(str) and astype(bool)"),
 {"t": "note", "k": "trap", "b": "`astype(\"int64\")` fails with a ValueError if the column still has `NaN`, because a whole-number column cannot hold a gap. Fill or drop the gaps first."},

 {"t": "h", "text": "Text columns: the .str tools"},
 {"t": "p", "b": "Add `.str` to a text column and you can use string methods on **every row at once**: no loop needed. These are the same methods you learned in Chapter 8."},
 C(RAW + 'print(df["name"].head(3).tolist())\ndf["name"] = df["name"].str.strip().str.title()\nprint(df["name"].head(3).tolist())', "strip() and title(): spaces and capitals"),
 C('dept = pd.Series([" it", "Hr ", "SALES"])\nprint(dept.str.strip().str.upper().tolist())\nprint(dept.str.strip().str.lower().tolist())\nprint(dept.str.strip().str.capitalize().tolist())', "upper(), lower(), capitalize()"),
 C(RAW + 'df["email"] = df["email"].str.replace("@gmail.com", "@company.com", regex=False)\nprint(df["email"].head(2).tolist())\nprint(df["name"].str.len().head(3).tolist())', "replace() and len()"),
 {"t": "note", "k": "tip", "b": "`regex=False` means \"replace exactly this text\". Without it, some symbols like `.` or `$` would have special meanings. Set it whenever you replace plain text."},
 C('names = pd.DataFrame({"name": ["Asha Rao", "Ravi Teja", "Om Prakash"]})\nnames[["first", "last"]] = names["name"].str.split(" ", expand=True)\nprint(names)', "split(expand=True): one column into two"),
 C(RAW + 'gmail = df["email"].str.contains("gmail", na=False)   # True or False for every row\nprint(gmail.sum(), "staff use Gmail")\ndf["domain"] = df["email"].str.extract(r"@(.+)", expand=False)\nprint(df["domain"].head(3).tolist())', "contains() and extract()"),
 {"t": "p", "b": "In `r\"@(.+)\"`, `@` means the @ sign, `.+` means \"one or more characters\", and the round brackets say which part to keep. So it keeps everything after the @. `na=False` treats a missing email as \"does not contain it\"."},
 PRED('s = pd.Series(["  Pune", "goa "])\nprint(s.str.strip().str.title().tolist())', ["`['Pune', 'Goa']`", "`['  Pune', 'Goa ']`", "`['pune', 'goa']`", "`['PUNE', 'GOA']`"], 0, "`strip()` removes the spaces at both ends, then `title()` gives each word a capital first letter."),
 {"t": "table", "head": ["Method", "Does", "`\" asha RAO \"` becomes"], "rows": [
   ["`.str.strip()`", "Removes spaces at both ends", "`\"asha RAO\"`"], ["`.str.title()`", "Capital first letter of each word", "`\" Asha Rao \"`"], ["`.str.upper()` / `.str.lower()`", "All capitals / all small", "`\" ASHA RAO \"`"],
   ["`.str.capitalize()`", "Only the first letter capital", "`\" asha rao \"` (the first character is a space)"], ["`.str.len()`", "Number of characters", "`10`"], ["`.str.replace(\"RAO\", \"Rao\", regex=False)`", "Swaps text", "`\" asha Rao \"`"],
   ["`.str.contains(\"asha\")`", "True if the text is inside", "`True`"], ["`.str.split(expand=True)`", "Splits into columns", "`asha` and `RAO`"]]},

 {"t": "h", "text": "Map and replace with a dictionary"},
 {"t": "p", "b": "To change whole values, give a dictionary of `old: new`. `replace()` changes the values it finds and **keeps** the rest. `map()` looks **every** value up in the dictionary, and a value that is not there becomes `NaN`."},
 C('dept = pd.Series(["It", "Hr", "Sales"])\nprint(dept.replace({"It": "IT", "Hr": "HR"}).tolist())\nprint(dept.map({"It": "IT", "Hr": "HR"}).tolist())', "replace() keeps unmatched values; map() does not"),
 C('city = pd.Series(["Jaipur", "Delhi", "Mumbai"])\nprint(city.map({"Jaipur": "JPR", "Delhi": "DEL", "Mumbai": "MUM"}).tolist())', "map(): a full lookup, from the course notebook"),
 {"t": "vs", "title": "replace() vs map()", "head": ["", "replace({...})", "map({...})"], "rows": [
   ["A value in the dictionary", "Changed", "Changed"], ["A value **not** in the dictionary", "[[ok:Kept as it is]]", "[[no:Becomes NaN]]"], ["Use it for", "Fixing a few spellings", "Translating every value (codes, short names)"]],
   "rule": "Fixing some values? `replace()`. Turning every value into another? `map()`, with every value in the dictionary."},
 PRED('s = pd.Series(["Y", "N", "Maybe"])\nprint(s.map({"Y": True, "N": False}).tolist())', ["`[True, False, nan]`", "`[True, False, 'Maybe']`", "`[True, False]`", "A KeyError"], 0, "`map()` gives `NaN` for any value that is not in the dictionary, here `\"Maybe\"`."),

 {"t": "h", "text": "Dates: pd.to_datetime"},
 {"t": "p", "b": "Dates read from a file are **text**, so you cannot sort them properly or count days. `pd.to_datetime()` turns them into real dates, with the type `datetime64[ns]`."},
 C('days = pd.Series(["2024-03-15", "2024-01-02", "2023-12-25"])\ndates = pd.to_datetime(days)\nprint(dates.dtype)\nprint(dates.min())', "Text to dates"),
 {"t": "p", "b": "Real files mix styles: `2020-08-10`, `11/08/2017`, `21-Nov-2022`. Three options handle that. `format=\"mixed\"` reads each value in its own style. `dayfirst=True` reads `11/08/2017` as 11 August (the Indian way), not November 8. `errors=\"coerce\"` turns anything that is not a date, like `\"not known\"`, into ==NaT== (\"not a time\"), instead of stopping with an error."},
 C(RAW + 'print(df["join_date"].head(3))\ndf["join_date"] = pd.to_datetime(df["join_date"], format="mixed", dayfirst=True, errors="coerce")\nprint(df["join_date"].head(3))\nprint(df["join_date"].isna().sum(), "dates could not be read")', "Three date styles, fixed in one line"),
 C('pd.to_datetime(pd.Series(["2024-01-05", "not known"]), format="mixed")', "Without errors='coerce', one bad value stops everything", err=True),
 {"t": "note", "k": "trap", "b": "Without `dayfirst=True`, `03/04/2024` means **March 4** (the American way). In India it usually means 3 April. Check a few dates after converting."},

 {"t": "h", "text": "Date parts with .dt"},
 {"t": "p", "b": "Once a column holds real dates, `.dt` gives you its parts, the same way `.str` gives you text tools."},
 C('d = pd.to_datetime(pd.Series(["2024-08-15", "2025-01-26"]))\nprint(d.dt.year.tolist(), d.dt.month.tolist(), d.dt.day.tolist())\nprint(d.dt.day_name().tolist())\nprint(d.dt.weekday.tolist())          # 0 = Monday ... 6 = Sunday\nprint(d.dt.strftime("%d-%b-%Y").tolist())', "year, month, day, day_name(), weekday, strftime()"),
 {"t": "p", "b": "Subtract two dates and you get a ==Timedelta==, a length of time. `.dt.days` gives it in days. Use a fixed \"today\" so your results stay the same; in real work you would use `pd.Timestamp.now()`. The days show decimals (`2274.0`) because two join dates are missing: a number column with a gap is always decimal."},
 C(RAW + 'df["join_date"] = pd.to_datetime(df["join_date"], format="mixed", dayfirst=True, errors="coerce")\ntoday = pd.Timestamp("2026-11-01")\ndf["tenure_days"] = (today - df["join_date"]).dt.days\ndf["years"] = df["tenure_days"] // 365\nprint(df[["name", "join_date", "tenure_days", "years"]].head(3))', "Days between two dates"),
 {"t": "table", "head": ["Code", "Gives", "For 15 Aug 2024"], "rows": [
   ["`.dt.year` / `.dt.month` / `.dt.day`", "Numbers", "`2024` / `8` / `15`"], ["`.dt.day_name()`", "The weekday's name", "`Thursday`"], ["`.dt.month_name()`", "The month's name", "`August`"],
   ["`.dt.weekday`", "0 = Monday ... 6 = Sunday", "`3`"], ["`.dt.strftime(\"%d-%b-%Y\")`", "Date as text in your format", "`15-Aug-2024`"], ["`(d2 - d1).dt.days`", "Days between two dates", "a whole number"]]},
 PRED('d = pd.to_datetime(pd.Series(["2024-01-01"]))\nprint(d.dt.day_name()[0], d.dt.weekday[0])', ["`Monday 0`", "`Monday 1`", "`Sunday 6`", "`January 1`"], 0, "1 January 2024 was a Monday, and `weekday` counts Monday as 0."),
 {"t": "deck", "title": "Cleaning in 6 slides", "s": [
   {"big": "Clean first, analyse second.", "b": "Work on `df = raw.copy()`, and store every result: `df[\"c\"] = df[\"c\"].str.strip()`."},
   {"h": "Gaps", "items": ["`dropna()` removes rows with gaps; `subset=` checks some columns", "`fillna(value)`, `fillna(s.mean())`, `fillna(s.mode()[0])`", "`ffill()` / `bfill()` copy a neighbour"]},
   {"h": "Repeats and removal", "items": ["`drop_duplicates(subset=\"id\")`", "`drop(columns=[...])`, `drop(index=[...])`", "`errors=\"ignore\"` skips missing names"]},
   {"h": "Text", "c": 'import pandas as pd\ns = pd.Series(["  asha rao", "RAVI "])\nprint(s.str.strip().str.title().tolist())', "o": run('import pandas as pd\ns = pd.Series(["  asha rao", "RAVI "])\nprint(s.str.strip().str.title().tolist())')},
   {"h": "replace vs map", "b": "`replace({...})` keeps values it does not know. `map({...})` turns them into `NaN`."},
   {"h": "Dates", "c": 'import pandas as pd\nd = pd.to_datetime(pd.Series(["15/08/2024", "oops"]), format="mixed", dayfirst=True, errors="coerce")\nprint(d.dt.month.tolist())', "o": run('import pandas as pd\nd = pd.to_datetime(pd.Series(["15/08/2024", "oops"]), format="mixed", dayfirst=True, errors="coerce")\nprint(d.dt.month.tolist())')}]},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("`cities = pd.Series([\" hyderabad\", \"PUNE \", \"Chennai\"])`. Clean the spaces and give each city a capital first letter. Print the result as a list.", "Chain `.str.strip()` and `.str.title()`, then `.tolist()`.", 'cities = pd.Series([" hyderabad", "PUNE ", "Chennai"])\nprint(cities.str.strip().str.title().tolist())', "Each `.str` method returns a new Series, so you can chain them.", 'import pandas as pd\ncities = pd.Series([" hyderabad", "PUNE ", "Chennai"])\n'),
   P("`marks = pd.Series([72, None, 58, None, 90])`. Print it with the gaps filled by the **median**, as a list.", "`marks.fillna(marks.median())`.", 'marks = pd.Series([72, None, 58, None, 90])\nprint(marks.fillna(marks.median()).tolist())', "The median of 72, 58 and 90 is 72. Gaps are skipped when Pandas works out the median.", 'import pandas as pd\nmarks = pd.Series([72, None, 58, None, 90])\n'),
   P("`codes = pd.Series([\"UPI\", \"CC\", \"UPI\", \"COD\"])`. Turn each code into a full name with `map()`: UPI → UPI, CC → Credit card, COD → Cash on delivery. Print the list.", "Every code must be in the dictionary, or it becomes NaN.", 'codes = pd.Series(["UPI", "CC", "UPI", "COD"])\nprint(codes.map({"UPI": "UPI", "CC": "Credit card", "COD": "Cash on delivery"}).tolist())', "`map()` is right here because every value gets translated.", 'import pandas as pd\ncodes = pd.Series(["UPI", "CC", "UPI", "COD"])\n'),
   P("`d = pd.Series([\"05/01/2025\", \"20-Feb-2025\", \"2025-03-09\"])` are Indian-style dates. Convert them with the right options and print the month numbers as a list.", "`pd.to_datetime(d, format=\"mixed\", dayfirst=True)`, then `.dt.month`.", 'd = pd.Series(["05/01/2025", "20-Feb-2025", "2025-03-09"])\ndates = pd.to_datetime(d, format="mixed", dayfirst=True)\nprint(dates.dt.month.tolist())', "With `dayfirst=True`, 05/01/2025 is 5 January, so the months are 1, 2 and 3.", 'import pandas as pd\nd = pd.Series(["05/01/2025", "20-Feb-2025", "2025-03-09"])\n'),
   P("`emp = pd.DataFrame({\"name\": [\"Asha Rao\", \"Ravi Teja\"], \"temp\": [1, 2]})`. Split `name` into `first` and `last` columns, drop `temp`, and print the table.", "`emp[[\"first\", \"last\"]] = emp[\"name\"].str.split(\" \", expand=True)`, then `emp.drop(columns=[\"temp\"])`.", 'emp = pd.DataFrame({"name": ["Asha Rao", "Ravi Teja"], "temp": [1, 2]})\nemp[["first", "last"]] = emp["name"].str.split(" ", expand=True)\nemp = emp.drop(columns=["temp"])\nprint(emp)', "`expand=True` turns the pieces into columns, so you can store two new columns at once.", 'import pandas as pd\nemp = pd.DataFrame({"name": ["Asha Rao", "Ravi Teja"], "temp": [1, 2]})\n')]},

 {"t": "h", "text": "Practice with real data: clean the employee file"},
 {"t": "p", "b": "Now clean **`employees.csv`** for real, one step at a time. Each task starts from the raw file, so you can do them in any order."},
 {"t": "prac", "items": [
   P("Read `employees.csv`, remove the duplicate row, and make the department names tidy: strip the spaces, then turn `It`, `Hr` and the others into the 5 proper names `IT`, `HR`, `Sales`, `Finance`, `Marketing`. Print the sorted unique names.", "`.str.strip().str.title()` gives `It` and `Hr`; then `.replace({\"It\": \"IT\", \"Hr\": \"HR\"})`. Print `sorted(df[\"department\"].unique())`.", 'df = pd.read_csv("employees.csv").drop_duplicates()\ndf["department"] = df["department"].str.strip().str.title().replace({"It": "IT", "Hr": "HR"})\nprint(sorted(df["department"].unique()))', "`title()` fixes most of them, and `replace()` fixes the two short names that should be all capitals."),
   P("Read `employees.csv`. Fill the missing salaries with the median salary and turn the column into whole numbers. Print the total salary bill.", "`fillna(df[\"salary\"].median())`, then `.astype(\"int64\")`, then `.sum()`.", 'df = pd.read_csv("employees.csv")\ndf["salary"] = df["salary"].fillna(df["salary"].median()).astype("int64")\nprint(df["salary"].sum())', "The median (₹55,000) is a fair guess for a missing salary: one very high salary cannot pull it up."),
   P("Read `employees.csv`. Convert `join_date` to real dates (mixed styles, day first, bad values to NaT). Print how many dates could not be read, and the earliest join date.", "`pd.to_datetime(..., format=\"mixed\", dayfirst=True, errors=\"coerce\")`, then `.isna().sum()` and `.min()`.", 'df = pd.read_csv("employees.csv")\ndf["join_date"] = pd.to_datetime(df["join_date"], format="mixed", dayfirst=True, errors="coerce")\nprint(df["join_date"].isna().sum())\nprint(df["join_date"].min())', "Two dates are missing: one empty cell and one `not known`. `min()` skips them."),
   P("Read `student_scores.csv` with `index_col=0`. Fix the Excel glitch in `WklyStudyHours`: replace `05-Oct` with `5-10`. Print the value counts.", "`df[\"WklyStudyHours\"].replace({\"05-Oct\": \"5-10\"})`.", 'df = pd.read_csv("student_scores.csv", index_col=0)\ndf["WklyStudyHours"] = df["WklyStudyHours"].replace({"05-Oct": "5-10"})\nprint(df["WklyStudyHours"].value_counts())', "`replace()` is right here: the other values (`< 5`, `> 10`) stay as they are. `map()` would have turned them into NaN.")]}
]
ch = {"id": "pandas2", "part": 8, "title": "Cleaning data with Pandas", "nav": "Cleaning data", "time": "50 min", "lvl": "Beginner",
 "keys": "clean cleaning copy drop_duplicates duplicates dropna fillna mean median mode ffill bfill forward backward fill drop columns index axis errors ignore inplace astype int64 float str bool to_numeric coerce str strip lower upper title capitalize replace regex len split expand contains extract map dictionary to_datetime format mixed dayfirst nat date dt year month day day_name weekday strftime timedelta days tenure",
 "lead": "Turn a messy file into a clean table. Remove repeats, fill or drop gaps, drop what you do not need, fix types, tidy text with `.str`, translate values with a dictionary, and turn text into real dates.",
 "goals": ["Remove repeated rows with `drop_duplicates()` and gaps with `dropna()`", "Fill gaps with `fillna()` (mean, median, mode) and with `ffill()` / `bfill()`", "Remove columns and rows with `drop()`, also by a condition", "Fix types with `astype()` and tidy text with the `.str` tools", "Use `map()` and `replace()` with a dictionary, and turn text into dates with `pd.to_datetime()` and `.dt`"],
 "src": ["Course notebook pandas_exp_2.ipynb (dropna, drop, fillna mean/mode, ffill/bfill, .str tools, map/replace, astype, to_datetime)", "Course PDF: More About Pandas (str.replace, str.upper, dates, extract, drop)", "pandas documentation"],
 "body": body,
 "take": ["Clean a copy (`raw.copy()`) and store every result: most methods return a new table.", "`drop_duplicates()` removes repeats; `dropna()` removes gaps; `fillna()` fills them with a value, the mean, the median or `mode()[0]`; `ffill()`/`bfill()` copy a neighbour.", "`drop(columns=[...])` and `drop(index=[...])` remove by name; `errors=\"ignore\"` skips names that are not there.", "Add `.str` for text tools on every row; `replace({...})` keeps unknown values, `map({...})` makes them NaN.", "`pd.to_datetime(col, format=\"mixed\", dayfirst=True, errors=\"coerce\")` reads messy dates; `.dt` gives the year, month, weekday and more."],
 "quiz": [
   Q("Why clean a copy with `df = raw.copy()`?", ["It is faster", "So the original stays safe while you change df", "Pandas needs it before dropna()", "It removes duplicates"], 1, "`df = raw` would just give the same table a second name."),
   Q("What does this print?", ["`[80.0, 70.0, 60.0]`", "`[80.0, 0.0, 60.0]`", "`[80.0, nan, 60.0]`", "`[80.0, 60.0]`"], 0, "The mean of 80 and 60 is 70, and it fills the gap.", 's = pd.Series([80, None, 60])\nprint(s.fillna(s.mean()).tolist())'),
   Q("What does this print?", ["`[nan, 5.0, 5.0]`", "`[5.0, 5.0, nan]`", "`[5.0, 5.0, 5.0]`", "`[nan, 5.0, nan]`"], 1, "`bfill()` copies the next value up. The last gap has nothing below it.", 's = pd.Series([None, 5, None])\nprint(s.bfill().tolist())'),
   Q("Which line fills gaps in a department column with the most common department?", ["`df[\"dept\"].fillna(df[\"dept\"].mode())`", "`df[\"dept\"].fillna(df[\"dept\"].mode()[0])`", "`df[\"dept\"].fillna(df[\"dept\"].mean())`", "`df[\"dept\"].mode().fillna()`"], 1, "`mode()` returns a Series; `[0]` takes its first value."),
   Q("What does this print?", ["`['IT', 'HR', 'Sales']`", "`['IT', 'HR', nan]`", "`['It', 'Hr', 'Sales']`", "A KeyError"], 1, "`map()` turns any value missing from the dictionary into NaN.", 's = pd.Series(["It", "Hr", "Sales"])\nprint(s.map({"It": "IT", "Hr": "HR"}).tolist())'),
   Q("`df.drop(columns=[\"phone\"])` stops with a KeyError. What is the simplest fix if the column may already be gone?", ["Use `axis=0`", "Add `errors=\"ignore\"`", "Use `inplace=True`", "Use `dropna()`"], 1, "`errors=\"ignore\"` skips names that are not in the table."),
   Q("What does `dayfirst=True` change?", ["It puts the day column first", "It reads 03/04/2024 as 3 April, not March 4", "It sorts the dates", "It removes the time"], 1, "Day first is the Indian (and British) way of writing dates."),
   Q("What does `errors=\"coerce\"` do in `pd.to_datetime()`?", ["Stops at the first bad date", "Turns values that are not dates into NaT", "Deletes those rows", "Guesses a date"], 1, "NaT is the date version of NaN: a missing date."),
   Q("What does this print?", ["`['gmail.com']`", "`['asha']`", "`['@gmail.com']`", "`['asha@gmail.com']`"], 0, "The brackets in the pattern mark the part to keep: everything after the @.", 's = pd.Series(["asha@gmail.com"])\nprint(s.str.extract(r"@(.+)", expand=False).tolist())'),
   Q("What does this print?", ["`Saturday 5`", "`Sunday 6`", "`Saturday 6`", "`Friday 4`"], 0, "15 August 2026 is a Saturday. Monday is 0, so Saturday is 5.", 'd = pd.to_datetime(pd.Series(["2026-08-15"]))\nprint(d.dt.day_name()[0], d.dt.weekday[0])')],
 "cards": [["How do you remove repeated rows?", "`df = df.drop_duplicates()`; `subset=\"id\"` compares only some columns."], ["`dropna()` vs `fillna()`", "`dropna()` removes rows with gaps. `fillna(value)` fills the gaps and keeps the rows."], ["Fill with the most common value", "`s.fillna(s.mode()[0])`: `mode()` is a Series, so take `[0]`."], ["`ffill()` vs `bfill()`", "ffill copies the last value down; bfill copies the next value up."], ["Drop columns / rows", "`df.drop(columns=[\"a\"])` / `df.drop(index=[0, 1])`"], ["Drop rows that match a condition", "`df.drop(df[df[\"score\"] < 55].index)`"], ["What does `errors=\"ignore\"` do in drop()?", "Skips names that are not in the table, instead of a KeyError."], ["`astype(\"int64\")` fails. Why?", "The column still has NaN (or text). Fill or drop the gaps first."], ["Tidy text on every row", "`df[\"name\"].str.strip().str.title()`"], ["Why `regex=False` in `.str.replace()`?", "So the text is replaced exactly; symbols like `.` have no special meaning."], ["One column into two", "`df[[\"first\", \"last\"]] = df[\"name\"].str.split(\" \", expand=True)`"], ["`replace({...})` vs `map({...})`", "replace keeps values it does not know; map turns them into NaN."], ["Read messy dates", "`pd.to_datetime(col, format=\"mixed\", dayfirst=True, errors=\"coerce\")`"], ["Days between two dates", "`(d2 - d1).dt.days`"]],
 "cheat": [["df = raw.copy()", "Clean a separate copy"], ["df.drop_duplicates(subset='id')", "Remove repeated rows"], ["df.dropna(subset=['salary'])", "Remove rows with a gap here"], ["s.fillna(s.median())", "Fill gaps with the median"], ["s.fillna(s.mode()[0])", "Fill gaps with the most common value"], ["s.ffill()  s.bfill()", "Copy the last / next value"], ["df.drop(columns=['a'], errors='ignore')", "Remove columns safely"], ["df.drop(df[df['x'] < 0].index)", "Remove rows by a condition"], ["s.astype('int64')", "Change the type"], ["pd.to_numeric(s, errors='coerce')", "Text to numbers, bad values to NaN"], ["s.str.strip().str.title()", "Tidy text"], ["s.str.replace('a', 'b', regex=False)", "Swap text"], ["s.str.split(' ', expand=True)", "Split into columns"], ["s.str.extract(r'@(.+)', expand=False)", "Keep part of the text"], ["s.replace({'It': 'IT'})  s.map({...})", "Change values with a dictionary"], ["pd.to_datetime(s, format='mixed', dayfirst=True, errors='coerce')", "Text to dates"], ["s.dt.year  s.dt.day_name()  s.dt.strftime('%d-%b-%Y')", "Date parts and formats"]]
}
poster = {"title": "Cleaning Data", "sub": "Six steps that fix almost any messy file.", "mods": [
  {"title": "Gaps, repeats and removal", "sub": "Decide what to keep", "cards": [
    {"h": "Fill or drop", "c": 'import pandas as pd\ns = pd.Series([80, None, 60])\nprint(s.fillna(s.mean()).tolist())\nprint(len(s.dropna()))', "o": run('import pandas as pd\ns = pd.Series([80, None, 60])\nprint(s.fillna(s.mean()).tolist())\nprint(len(s.dropna()))')},
    {"h": "Copy a neighbour", "svg": grid([["31", "31", "31"], ["NaN", "31", "29"], ["29", "29", "29"]], cl=["raw", "ffill", "bfill"], cw=60, acc=[[1, 1], [1, 2]], label="ffill and bfill"), "foot": "ffill copies down, bfill copies up"},
    {"h": "Watch out", "span": 1, "rules": [["trap", "fillna(s.mode())", "use s.mode()[0]"], ["trap", "astype('int64') with NaN", "fill the gaps first"], ["tip", "drop(columns=[...], errors='ignore')", "no KeyError"], ["acc", "drop_duplicates(subset='id')", "one row per id"]]}]},
  {"title": "Text, values and dates", "sub": "Make every value say the same thing the same way", "cards": [
    {"h": "Text on every row", "c": 'import pandas as pd\ns = pd.Series([" it", "Hr "])\nprint(s.str.strip().str.upper().tolist())', "o": run('import pandas as pd\ns = pd.Series([" it", "Hr "])\nprint(s.str.strip().str.upper().tolist())')},
    {"h": "Messy dates", "c": 'import pandas as pd\nd = pd.to_datetime(pd.Series(["11/08/2017", "x"]), format="mixed", dayfirst=True, errors="coerce")\nprint(d.dt.strftime("%d-%b-%Y").tolist())', "o": run('import pandas as pd\nd = pd.to_datetime(pd.Series(["11/08/2017", "x"]), format="mixed", dayfirst=True, errors="coerce")\nprint(d.dt.strftime("%d-%b-%Y").tolist())')}],
   "table": {"head": ["Tool", "Use it for"], "rows": [["`replace({...})`", "fix some values, keep the rest"], ["`map({...})`", "translate every value (others become NaN)"], ["`.str.split(expand=True)`", "one column into several"], ["`.str.extract(r\"@(.+)\")`", "keep part of the text"], ["`.dt.year`, `.dt.day_name()`", "parts of a date"], ["`(d2 - d1).dt.days`", "days between dates"]]}}]}
write_chapter('24_pandas2.js', ch, poster)
