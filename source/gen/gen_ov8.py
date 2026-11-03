# Part 8 overview (Pandas): writes hub2/ov_8.js and the Part 8 picture sheet inside hub2/sheets.js. Run with the matching Python.
import os, json, re
from chlib import Chapter, js, run, HUB
K = Chapter('ov8', 'import pandas as pd\n')
C, P, Q = K.C, K.P, K.Q
PD = 'import pandas as pd\n'
def D(t, d, code, go):
    code = K.full(code); return {"t": t, "d": d, "c": code, "o": run(code), "go": go}
def VS(title, head, rows, code, rule):
    code = K.full(code); return {"t": "vs", "title": title, "head": head, "rows": rows, "c": code, "o": run(code), "rule": rule}
T = PD + 'df = pd.DataFrame({"name": ["Asha", "Ravi", "Neha"], "dept": ["IT", "HR", "IT"], "pay": [72000, 45000, 58000]})\n'
body = [
 {"t": "h", "text": "Mind map of Part 8"},
 {"t": "mm", "title": "Part 8 at a glance", "root": "Part 8: Pandas", "hint": "Tap a branch to open that chapter", "kids": [
   {"t": "23. Basics", "go": "pandas1", "k": ["Series and DataFrame", "read_csv, read_excel", "head, tail, sample", "shape, info, describe", "isna().sum(), duplicated()"]},
   {"t": "24. Cleaning", "go": "pandas2", "k": ["drop_duplicates, dropna", "fillna, ffill, bfill", "drop(columns=...)", "astype, .str tools", "map / replace", "to_datetime, .dt"]},
   {"t": "25. Select & change", "go": "pandas3", "k": ["loc vs iloc", "masks with & | ~", "query()", "apply, np.where", "sort_values", "value_counts, idxmax"]},
   {"t": "26. Group & join", "go": "pandas4", "k": ["groupby + agg", "transform, assign", "pivot_table, pd.cut", "merge, concat", "corr()"]}]},

 {"t": "h", "text": "Key definitions"},
 {"t": "defs", "items": [
   D("Pandas", "The Python library for tables of data: load, clean, select, group and join them.", 'print(pd.__name__)', "pandas1"),
   D("DataFrame", "A table: named columns, and rows labelled by the index.", T + 'print(df.shape)', "pandas1"),
   D("Series", "One column of a DataFrame: values with index labels.", T + 'print(type(df["pay"]).__name__)', "pandas1"),
   D("Index", "The row labels on the left. 0, 1, 2 ... unless you choose them.", T + 'print(df.index.tolist())', "pandas1"),
   D("NaN", "\"Not a number\": an empty cell. `isna()` finds it; it makes a number column decimal.", PD + 's = pd.Series([5, None])\nprint(s.isna().tolist(), s.dtype)', "pandas1"),
   D("object (dtype)", "The type Pandas shows for text columns, and for numbers stored as text.", T + 'print(df["name"].dtype)', "pandas1"),
   D("Duplicate", "A row that repeats an earlier one. `duplicated()` marks it, `drop_duplicates()` removes it.", PD + 'd = pd.DataFrame({"id": [1, 1, 2]})\nprint(d.duplicated().sum())', "pandas2"),
   D("fillna", "Fills the gaps with a value you choose: 0, the mean, the median or the mode.", PD + 's = pd.Series([4, None, 8])\nprint(s.fillna(s.mean()).tolist())', "pandas2"),
   D(".str accessor", "Runs a string method on every value of a text column.", PD + 'print(pd.Series([" asha "]).str.strip().str.title().tolist())', "pandas2"),
   D("NaT", "\"Not a time\": a missing date, made by `pd.to_datetime(..., errors=\"coerce\")`.", PD + 'd = pd.to_datetime(pd.Series(["2025-01-05", "oops"]), errors="coerce")\nprint(d.isna().tolist())', "pandas2"),
   D("loc", "Picks rows and columns by label and name. A slice includes its end.", T + 'print(df.loc[0:1, "name"].tolist())', "pandas3"),
   D("iloc", "Picks rows and columns by position. A slice leaves out its end.", T + 'print(df.iloc[0:1, 0].tolist())', "pandas3"),
   D("Boolean mask (Pandas)", "A True/False Series made by a condition. `df[mask]` keeps the True rows.", T + 'print(df[df["pay"] > 50000]["name"].tolist())', "pandas3"),
   D("apply", "Runs your own function on every value, or on every row with `axis=1`.", T + 'print(df["pay"].apply(lambda x: "High" if x > 60000 else "Low").tolist())', "pandas3"),
   D("groupby", "Splits rows into groups, summarises each group, combines the answers.", T + 'print(df.groupby("dept")["pay"].mean().tolist())', "pandas4"),
   D("transform", "A group's answer placed on every row of that group.", T + 'print(df.groupby("dept")["pay"].transform("max").tolist())', "pandas4"),
   D("Pivot table", "A grid of summaries: rows from one column, columns from another.", T + 'print(df.pivot_table(values="pay", index="dept", aggfunc="sum")["pay"].tolist())', "pandas4"),
   D("merge", "Joins two tables side by side where a key column matches, like SQL JOIN.", T + 'h = pd.DataFrame({"dept": ["IT"], "head": ["Om"]})\nprint(pd.merge(df, h, on="dept")["name"].tolist())', "pandas4"),
   D("concat", "Stacks tables on top of each other, like SQL UNION ALL.", T + 'print(len(pd.concat([df, df], ignore_index=True)))', "pandas4"),
   D("Correlation", "How two number columns move together, from -1 (opposite) to 1 (together).", PD + 'd = pd.DataFrame({"x": [1, 2, 3], "y": [3, 5, 8]})\nprint(round(d["x"].corr(d["y"]), 2))', "pandas4")]},

 {"t": "h", "text": "The big comparison tables"},
 {"t": "table", "master": True, "title": "The health check for any new file", "head": ["Code", "Answers", "Typical result"], "rows": [
   ["`df.shape`", "How big is it?", "`(41, 8)`"], ["`df.head()` / `df.tail()` / `df.sample(3)`", "What does it look like?", "5 rows"], ["`df.info()`", "What type is each column? How many values are filled?", "`salary 38 non-null float64`"],
   ["`df.describe()`", "What are the typical numbers?", "count, mean, std, min, quartiles, max"], ["`df.isna().sum()`", "Where are the gaps?", "`salary 3`"], ["`df.duplicated().sum()`", "Any repeated rows?", "`1`"],
   ["`df[\"c\"].value_counts()`", "Which values, and how many of each?", "`IT 6, HR 6 ...`"], ["`df[\"c\"].unique()`", "Which different values are there?", "`['IT' 'Hr' ' SALES' ...]`"]]},
 {"t": "table", "master": True, "title": "Cleaning: problem → tool", "head": ["Problem", "Tool", "Example"], "rows": [
   ["Repeated rows", "`drop_duplicates()`", "`df = df.drop_duplicates()`"], ["Gaps you can lose", "`dropna()`", "`df.dropna(subset=[\"salary\"])`"], ["Gaps you must fill", "`fillna()`", "`s.fillna(s.median())`, `s.fillna(s.mode()[0])`"],
   ["Gaps in readings over time", "`ffill()` / `bfill()`", "`temps.ffill()`"], ["Columns you do not need", "`drop(columns=...)`", "`df.drop(columns=[\"email\"], errors=\"ignore\")`"],
   ["Numbers stored as text", "`.str.replace` + `astype`", "`s.str.replace(\",\", \"\").astype(\"int64\")`"], ["Spaces and capitals", "`.str.strip()`, `.str.title()`", "`s.str.strip().str.title()`"],
   ["Codes to full names", "`map(dict)`", "`s.map({\"CC\": \"Credit card\"})`"], ["A few wrong spellings", "`replace(dict)`", "`s.replace({\"It\": \"IT\"})`"],
   ["Text dates in mixed styles", "`pd.to_datetime`", "`pd.to_datetime(s, format=\"mixed\", dayfirst=True, errors=\"coerce\")`"]]},
 {"t": "table", "master": True, "title": "Asking questions", "head": ["I want", "Code"], "rows": [
   ["One column / several", "`df[\"a\"]` / `df[[\"a\", \"b\"]]`"], ["Rows by label / by position", "`df.loc[1:3, \"a\"]` / `df.iloc[0:3, 0]`"], ["Rows that match", "`df[(df[\"a\"] > 5) & (df[\"b\"] == \"X\")]`"],
   ["The same as a sentence", "`df.query('a > 5 and b == \"X\"')`"], ["A new column from maths", "`df[\"total\"] = df[\"price\"] * df[\"qty\"]`"], ["A yes/no column", "`np.where(df[\"a\"] > 5, \"Yes\", \"No\")`"],
   ["My own rule", "`df[\"a\"].apply(func)` or `df.apply(func, axis=1)`"], ["The top rows", "`df.sort_values(\"a\", ascending=False).head(3)`"], ["The row with the biggest value", "`df.loc[df[\"a\"].idxmax()]`"]]},
 {"t": "table", "master": True, "title": "Summaries and joins", "head": ["I want", "Code", "Rows in the answer"], "rows": [
   ["One summary per group", "`df.groupby(\"g\")[\"v\"].mean()`", "one per group"], ["Several, with my own names", "`df.groupby(\"g\").agg(total=(\"v\", \"sum\"))`", "one per group"],
   ["The group's answer on every row", "`df.groupby(\"g\")[\"v\"].transform(\"mean\")`", "one per row"], ["A grid", "`df.pivot_table(values=\"v\", index=\"r\", columns=\"c\", aggfunc=\"sum\", fill_value=0)`", "one per value of r"],
   ["Bands", "`pd.cut(s, bins=[0, 50, 100], labels=[\"Low\", \"High\"])`", "same as s"], ["Columns from another table", "`pd.merge(a, b, on=\"k\", how=\"left\")`", "at least len(a)"], ["More rows of the same kind", "`pd.concat([a, b], ignore_index=True)`", "len(a) + len(b)"]]},

 {"t": "h", "text": "Don't mix these up"},
 VS("Series vs DataFrame", ["", "Series", "DataFrame"], [["What it is", "One column", "A whole table"], ["Made with", "`pd.Series([...])`", "`pd.DataFrame({...})`"], ["You get it from", "`df[\"pay\"]`", "`df[[\"pay\"]]` or `df[[\"name\", \"pay\"]]`"], ["Prints", "values, then `Name:` and `dtype:`", "a table with column names on top"]],
    T + 'print(type(df["pay"]).__name__, type(df[["pay"]]).__name__)', "One pair of brackets: a column (Series). A list inside the brackets: a table (DataFrame)."),
 VS("loc vs iloc", ["", "loc", "iloc"], [["Picks by", "labels and names", "positions"], ["`[0:2]` gives", "[[warn:3 rows]] (end included)", "[[ok:2 rows]] (end left out)"], ["Takes a condition", "Yes", "No"]],
    T + 'print(len(df.loc[0:2]), len(df.iloc[0:2]))', "Know the name? `loc`. Know the position? `iloc`."),
 VS("dropna vs fillna", ["", "dropna()", "fillna(value)"], [["The gap's row", "Removed", "Kept, with a value in the gap"], ["Rows afterwards", "Fewer", "The same"], ["Use it when", "Few gaps, or the row is useless without the value", "The row matters and a fair guess exists"]],
    PD + 's = pd.Series([10, None, 30])\nprint(s.dropna().tolist(), s.fillna(s.mean()).tolist())', "Losing rows changes your totals. Fill when the row still matters."),
 VS("ffill vs bfill", ["", "ffill()", "bfill()"], [["Copies", "the last value above", "the next value below"], ["A gap at the start", "Stays NaN", "Filled"], ["A gap at the end", "Filled", "Stays NaN"]],
    PD + 's = pd.Series([None, 5, None])\nprint(s.ffill().tolist(), s.bfill().tolist())', "Forward fill looks back; backward fill looks ahead."),
 VS("map vs replace", ["", "map({...})", "replace({...})"], [["Values in the dictionary", "Changed", "Changed"], ["Values not in it", "[[no:Become NaN]]", "[[ok:Stay as they are]]"], ["Best for", "Translating every value", "Fixing a few values"]],
    PD + 's = pd.Series(["It", "Sales"])\nprint(s.map({"It": "IT"}).tolist(), s.replace({"It": "IT"}).tolist())', "Fixing some values? `replace`. Translating all of them? `map`."),
 VS("and / or vs & / |", ["", "`and` / `or`", "`&` / `|`"], [["Works on", "One True/False", "A whole column of True/False"], ["Inside `df[...]`", "[[no:ValueError]]", "[[ok:Works]], with brackets"], ["Inside `query(\"...\")`", "[[ok:Works]]", "Works too"]],
    T + 'print(df[(df["dept"] == "IT") & (df["pay"] > 60000)]["name"].tolist())', "On columns: `&`, `|`, `~` and brackets around every condition."),
 VS("apply vs np.where", ["", "apply(func)", "np.where(cond, a, b)"], [["Handles", "Any rule, with if / elif / else", "One yes/no rule"], ["Speed", "Slower: calls your function for every row", "Fast: the whole column at once"], ["Several columns", "`df.apply(func, axis=1)`", "Conditions on several columns with `&`"]],
    'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"pay": [72000, 45000]})\nprint(df["pay"].apply(lambda x: "High" if x > 60000 else "Low").tolist(), np.where(df["pay"] > 60000, "High", "Low").tolist())', "Two choices? `np.where`. Three or more? `apply` with a `def`."),
 VS("max vs idxmax", ["", "max()", "idxmax()"], [["Gives", "The biggest value", "Its index label"], ["Use it to", "Report the top number", "Find the whole top row with `loc`"]],
    T + 'print(df["pay"].max(), df["pay"].idxmax(), df.loc[df["pay"].idxmax(), "name"])', "Who has it? `idxmax` + `loc`."),
 VS("agg vs transform", ["", "groupby().agg()", "groupby().transform()"], [["Rows in the answer", "One per group", "One per original row"], ["Index", "The group names", "The original index"], ["Use it for", "A report", "A new column on every row"]],
    T + 'print(df.groupby("dept")["pay"].agg("max").tolist(), df.groupby("dept")["pay"].transform("max").tolist())', "A short report? `agg`. Compare each row with its group? `transform`."),
 VS("merge vs concat", ["", "pd.merge(a, b, on=...)", "pd.concat([a, b])"], [["Direction", "Side by side", "On top"], ["Matches by", "A key column", "Position (it just stacks)"], ["SQL", "JOIN", "UNION ALL"]],
    T + 'h = pd.DataFrame({"dept": ["IT", "HR"], "head": ["Om", "Lata"]})\nprint(pd.merge(df, h, on="dept").shape, pd.concat([df, df]).shape)', "New columns? `merge`. More rows? `concat`."),
 VS("inner vs left vs outer", ["how=", "Keeps", "Unmatched cells"], [["`\"inner\"`", "Keys in both tables", "None: those rows are dropped"], ["`\"left\"`", "Every row of the left table", "NaN in the right table's columns"], ["`\"outer\"`", "Every row of both", "NaN on both sides"]],
    T + 'h = pd.DataFrame({"dept": ["IT", "Sales"], "head": ["Om", "Lata"]})\nprint(len(pd.merge(df, h, on="dept", how="inner")), len(pd.merge(df, h, on="dept", how="left")), len(pd.merge(df, h, on="dept", how="outer")))', "Never lose a row of your main table? `left`. After any merge, check the row count."),

 {"t": "h", "text": "Try it yourself"},
 {"t": "p", "b": "Pandas takes about 10 to 20 seconds to load the first time you press **Run**. After that it is quick. These tasks mix all four chapters."},
 {"t": "prac", "items": [
   P("Read `employees.csv`, remove the duplicate row, fill the missing salaries with the median and print the average salary of each department after tidying the names (strip, title case, then `replace` `It` and `Hr` with `IT` and `HR`).", "`drop_duplicates()`, `fillna(median)`, `.str.strip().str.title().replace({...})`, then `groupby`.", 'df = pd.read_csv("employees.csv").drop_duplicates()\ndf["salary"] = df["salary"].fillna(df["salary"].median())\ndf["department"] = df["department"].str.strip().str.title().replace({"It": "IT", "Hr": "HR"})\nprint(df.groupby("department")["salary"].mean().round(0))', "Clean first, then group: messy names would have split one department into several groups."),
   P("Read `sales_data.csv`. Keep the orders with a profit above ₹1,000 and print how many of them each region has.", "A mask, then `value_counts()` or `groupby(...).size()`.", 'sales = pd.read_csv("sales_data.csv")\nbig = sales[sales["Profit"] > 1000]\nprint(big.groupby("Region").size())', "`groupby(...).size()` sorts by region name, so the order never depends on ties."),
   P("Read `sales_data.csv`. Add a column `Month` (the month name of each date) and print the total sales of October and November together.", "`pd.to_datetime`, `.dt.month_name()`, then `isin([\"October\", \"November\"])`.", 'sales = pd.read_csv("sales_data.csv")\nsales["Month"] = pd.to_datetime(sales["Date"]).dt.month_name()\nprint(sales[sales["Month"].isin(["October", "November"])]["Sales"].sum())', "Diwali season: these two months bring in more than a third of the year's sales."),
   P("Read `student_scores.csv` (first column as the index). Print the average maths score for each `TestPrep` value, rounded to 1 decimal, and the number of students with no `TestPrep` value.", "`groupby(\"TestPrep\")[\"MathScore\"].mean().round(1)`, and `isna().sum()`.", 'df = pd.read_csv("student_scores.csv", index_col=0)\nprint(df.groupby("TestPrep")["MathScore"].mean().round(1))\nprint(df["TestPrep"].isna().sum())', "`groupby` leaves out the rows where the group value is missing, so check how many there are.")]}
]
ov = {"part": 8, "title": "Part 8 overview: Pandas", "nav": "Part 8 overview", "time": "30 min",
 "keys": "pandas dataframe series index nan object read_csv head info describe isna duplicated drop_duplicates dropna fillna ffill bfill drop astype str strip title replace map to_datetime dt nat loc iloc mask query apply np.where sort_values value_counts idxmax groupby agg transform assign pivot_table cut merge concat inner left outer corr",
 "lead": "All four Pandas chapters on one page: the health check for a new file, the cleaning tools, the ways to ask questions, groups and joins, and the mix-ups that cost the most marks (`loc` vs `iloc`, `map` vs `replace`, `agg` vs `transform`, `merge` vs `concat`).",
 "five": ["A ==DataFrame== is a table and a ==Series== is one column. Load files with `pd.read_csv()` / `pd.read_excel()`, and always look first: `head()`, `info()`, `describe()`, `isna().sum()`.",
          "Clean a copy: `drop_duplicates()`, `dropna()` or `fillna()`, `.str` tools for text, `map` / `replace` with a dictionary, `astype()` for types and `pd.to_datetime()` for dates.",
          "`loc` picks by label (end included), `iloc` by position (end left out). Filter with `df[mask]`, joining conditions with `&`, `|`, `~` and brackets, or write `query()`.",
          "New columns: maths on columns, `np.where()` for yes/no, `apply()` for your own rule. Sort with `sort_values()` and find the top row with `idxmax()` + `loc`.",
          "`groupby` + `agg` summarise groups, `transform` puts the answer on every row, `pivot_table` builds a grid, `merge` joins side by side and `concat` stacks."],
 "body": body,
 "quiz": [
   Q("What does this print?", ["`(3, 3)`", "`3`", "`(3,)`", "`9`"], 0, "`shape` is (rows, columns).", T + 'print(df.shape)'),
   Q("Which line gives a Series?", ["`df[\"pay\"]`", "`df[[\"pay\"]]`", "`df[[\"name\", \"pay\"]]`", "`df.head()`"], 0, "One pair of brackets with one name gives a Series."),
   Q("`info()` shows `salary 38 non-null` in a table of 41 rows. What does that mean?", ["38 duplicates", "3 salaries are missing", "38 different salaries", "The column is text"], 1, "Non-null means filled. 41 − 38 = 3 gaps."),
   Q("What does this print?", ["`[10.0, 20.0, 30.0]`", "`[10.0, 0.0, 30.0]`", "`[10.0, 30.0]`", "`[10.0, nan, 30.0]`"], 0, "The mean of 10 and 30 is 20, which fills the gap.", PD + 's = pd.Series([10, None, 30])\nprint(s.fillna(s.mean()).tolist())'),
   Q("What does this print?", ["`['IT', nan]`", "`['IT', 'Sales']`", "`['It', 'Sales']`", "A KeyError"], 0, "`map` turns values not in the dictionary into NaN.", PD + 'print(pd.Series(["It", "Sales"]).map({"It": "IT"}).tolist())'),
   Q("Why add `dayfirst=True` to `pd.to_datetime()`?", ["To sort by day", "So 03/04/2025 means 3 April, not March 4", "To remove the time", "To make NaT"], 1, "Indian dates put the day first."),
   Q("What does this print?", ["`3 2`", "`2 2`", "`3 3`", "`2 3`"], 0, "`loc` includes the end label; `iloc` leaves out the end position.", T + 'print(len(df.loc[0:2]), len(df.iloc[0:2]))'),
   Q("Which filter is correct?", ["`df[df[\"a\"] > 1 and df[\"b\"] < 5]`", "`df[(df[\"a\"] > 1) & (df[\"b\"] < 5)]`", "`df[df[\"a\"] > 1 & df[\"b\"] < 5]`", "`df.loc(\"a\" > 1)`"], 1, "Use `&` with brackets around each condition."),
   Q("What does this print?", ["`['Low', 'High']`", "`['High', 'Low']`", "`[False, True]`", "`['Low', 'Low']`"], 0, "The lambda labels 45000 as Low and 72000 as High.", PD + 'd = pd.DataFrame({"pay": [45000, 72000]})\nprint(d["pay"].apply(lambda x: "High" if x > 60000 else "Low").tolist())'),
   Q("You need the **name** of the person with the highest pay. Which line?", ["`df[\"pay\"].max()`", "`df.loc[df[\"pay\"].idxmax(), \"name\"]`", "`df[\"name\"].max()`", "`df.sort_values(\"pay\")[\"name\"]`"], 1, "`idxmax` finds where the top value is; `loc` gives the name."),
   Q("What does this print?", ["`[58000.0, 45000.0]`", "`[45000.0, 65000.0]`", "`[65000.0, 45000.0]`", "`[45000.0, 58000.0, 72000.0]`"], 1, "Groups come out sorted: HR (45000), then IT ((72000 + 58000) / 2 = 65000).", T + 'print(df.groupby("dept")["pay"].mean().tolist())'),
   Q("Which one returns one value for **every row**?", ["`groupby(\"g\")[\"v\"].mean()`", "`groupby(\"g\")[\"v\"].agg(\"sum\")`", "`groupby(\"g\")[\"v\"].transform(\"sum\")`", "`pivot_table(...)`"], 2, "`transform` keeps the original rows."),
   Q("What does this print?", ["`3`", "`2`", "`4`", "`1`"], 0, "A left join keeps all 3 rows of `df`.", T + 'h = pd.DataFrame({"dept": ["IT"], "head": ["Om"]})\nprint(len(pd.merge(df, h, on="dept", how="left")))'),
   Q("You have January and February sales files with the same columns. How do you combine them?", ["`pd.merge(jan, feb, on=\"id\")`", "`pd.concat([jan, feb], ignore_index=True)`", "`jan + feb`", "`jan.join(feb)`"], 1, "Same columns, more rows: `concat`."),
   Q("What does this print?", ["`['Low', 'High', 'High']`", "`['Low', 'Low', 'High']`", "`['High', 'High', 'High']`", "`['Low', 'High', nan]`"], 1, "Each range includes its right edge: 50 is Low.", PD + 'print(pd.cut(pd.Series([20, 50, 90]), bins=[0, 50, 100], labels=["Low", "High"]).tolist())'),
   Q("A correlation of 0.95 between ad spend and sales means:", ["Ads cause sales", "They rise together very strongly", "There is no link", "Sales fall when ads rise"], 1, "Near 1: they move together. It does not prove that one causes the other.")],
 "cards": [["Health check for a new file", "`shape`, `head()`, `info()`, `describe()`, `isna().sum()`, `duplicated().sum()`"], ["`df[\"a\"]` vs `df[[\"a\"]]`", "Series vs DataFrame."], ["Fill gaps fairly", "Numbers: `fillna(s.median())`. Categories: `fillna(s.mode()[0])`. Over time: `ffill()`."], ["Read Indian dates", "`pd.to_datetime(s, format=\"mixed\", dayfirst=True, errors=\"coerce\")`"], ["`map` vs `replace`", "map: every value (others NaN). replace: only the ones you list."], ["`loc` vs `iloc`", "loc: labels, end included. iloc: positions, end left out."], ["Two conditions", "`df[(c1) & (c2)]`; or `df.query(\"a > 1 and b < 5\")`"], ["`apply` vs `np.where`", "apply: any rule, slower. np.where: one yes/no rule, fast."], ["The top row", "`df.loc[df[\"col\"].idxmax()]`"], ["`agg` vs `transform`", "agg: one row per group. transform: every row gets its group's answer."], ["Named aggregation", "`df.groupby(\"g\").agg(total=(\"v\", \"sum\"), n=(\"v\", \"count\"))`"], ["`merge` vs `concat`", "merge: side by side on a key. concat: stacked on top."], ["Find unmatched rows after a left merge", "`m[m[\"right_col\"].isna()]`"], ["Numbers into bands", "`pd.cut(s, bins=[...], labels=[...])`; group with `observed=True`."]]
}
open(os.path.join(HUB, 'ov_8.js'), 'w', encoding='utf-8').write('/* ---------- Part 8 overview: Pandas (generated by gen/gen_ov8.py; every output came from running the code) ---------- */\noverview(' + js(ov) + ');\n')

SHEET = {"title": ["Pandas: the ", ["3", "pink"], " big ", ["differences", "lime"]], "sub": "Cheat sheet", "groups": [
  {"h": "loc vs iloc", "cols": ["Picks by", "[0:2] gives", "Takes a condition?", "Example"], "rows": [
    {"name": "loc", "c": "blue", "img": "ov8-loc", "sym": "df.loc[ ]", "symName": "Labels and names", "facts": [["txt", "Labels"], ["big", "3 rows"], ["yes", "Yes"], ["big", "df.loc[1:3, \"name\"]"]],
     "cap": "Name tags: you call each row by the label on its tag, and the last tag you name is included.", "ex": "df.loc[df[\"pay\"] > 50000, \"name\"]"},
    {"name": "iloc", "c": "purple", "img": "ov8-iloc", "sym": "df.iloc[ ]", "symName": "Positions", "facts": [["txt", "Positions"], ["big", "2 rows"], ["no", "No"], ["big", "df.iloc[0:3, 0]"]],
     "cap": "Seat numbers: count from 0, and stop before the end, like a list.", "ex": "df.iloc[-1]"}]},
  {"h": "agg vs transform, after groupby", "cols": ["Rows in the answer", "Index", "Use it for"], "rows": [
    {"name": "agg", "c": "green", "img": "ov8-agg", "sym": ".agg()", "symName": "One row per group", "facts": [["big", "one per group"], ["txt", "Group names"], ["txt", "A summary report"]],
     "cap": "A class report card: many students go in, one line per class comes out.", "ex": "df.groupby(\"dept\")[\"pay\"].agg(\"mean\")"},
    {"name": "transform", "c": "teal", "img": "ov8-transform", "sym": ".transform()", "symName": "One value per row", "facts": [["big", "one per row"], ["txt", "The original index"], ["txt", "A new column"]],
     "cap": "A name badge for everyone: each person gets their own group's number.", "ex": "df.groupby(\"g\")[\"v\"].transform(\"mean\")"}]},
  {"h": "merge vs concat", "cols": ["Direction", "Matches by", "SQL", "Gives you"], "rows": [
    {"name": "merge", "c": "pink", "img": "ov8-merge", "sym": "pd.merge()", "symName": "Side by side", "facts": [["right", "Across"], ["key", "A key column"], ["txt", "JOIN"], ["txt", "More columns"]],
     "cap": "A zip: two halves join where their teeth (the keys) match.", "ex": "pd.merge(a, b, on=\"id\", how=\"left\")"},
    {"name": "concat", "c": "orange", "img": "ov8-concat", "sym": "pd.concat()", "symName": "On top", "facts": [["down", "Down"], ["txt", "Nothing: it stacks"], ["txt", "UNION ALL"], ["txt", "More rows"]],
     "cap": "A stack of plates: same shape, one on top of the other.", "ex": "pd.concat([jan, feb], ignore_index=True)"}]}],
 "foot": "Health check: shape · head() · info() · describe() · isna().sum() · duplicated().sum(). Clean a copy and store every result.",
 "credit": "Pictures drawn with Matplotlib (gen/gen_sheetimgs.py). Text and icons checked by hand."}
sp = os.path.join(HUB, 'sheets.js'); s = open(sp, encoding='utf-8').read()
block = '/* @@SHEET8 (generated by gen/gen_ov8.py) */\nSHEETS[8] = ' + js(SHEET) + ';\n/* @@END8 */\n'
if '/* @@SHEET8' in s: s = re.sub(r'/\* @@SHEET8.*?/\* @@END8 \*/\n', lambda m: block, s, flags=re.S)
else: s = s.replace('SHEETS[11] = {', block + '\nSHEETS[11] = {', 1)
open(sp, 'w', encoding='utf-8').write(s)
print('ov_8.js and SHEETS[8] written')
