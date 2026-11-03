# Chapter 25: Selecting, filtering and changing data. Run with the matching Python (see NOTES.md).
from chlib import Chapter, grid, cat, write_chapter, run, Raw
K = Chapter('c25', 'import pandas as pd\n')
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
EMP = '''emp = pd.DataFrame({
    "name": ["Asha", "Vikram", "Neha", "Ravi", "Meena", "Arjun", "Priya", "Kiran"],
    "dept": ["IT", "HR", "IT", "Sales", "Sales", "IT", "Sales", "Sales"],
    "salary": [72000, 45000, 58000, 39000, 66000, 81000, 52000, 47000],
    "score": [91, 74, 83, 68, 88, 79, 95, 71],
    "city": ["Pune", "Delhi", "Pune", "Chennai", "Delhi", "Hyderabad", "Chennai", "Pune"]
})
'''
NP = 'import pandas as pd\nimport numpy as np\n'
M = [["Asha", "IT", "72000", "91"], ["Vikram", "HR", "45000", "74"], ["Neha", "IT", "58000", "83"], ["Ravi", "Sales", "39000", "68"], ["Meena", "Sales", "66000", "88"]]
CL = ["name", "dept", "salary", "score"]
RL = ["0", "1", "2", "3", "4"]
def G(**o): return grid(M, cl=CL, rl=RL, cw=74, **o)
SALES = 'sales = pd.read_csv("sales_data.csv")\n'
body = [
 {"t": "h", "text": "loc: pick by labels"},
 C(EMP + 'print(emp)', "The staff table: every example in this chapter starts from it"),
 {"t": "note", "k": "tip", "b": "To keep the examples short, the cells below do not repeat these lines. **Try it** copies them in for you, so every example still runs."},
 {"t": "p", "b": "`df.loc[rows, columns]` picks data by **labels**: the index labels on the left and the column names on top. Read the comma as \"and\": which rows, and which columns."},
 C('print(emp.loc[2])                      # one row: a Series\nprint(emp.loc[2, "name"])              # one cell', "One row, one cell", setup=EMP),
 C('print(emp.loc[1:3, ["name", "salary"]])   # rows 1 to 3, and BOTH ends are included', "A slice of rows, a list of columns", setup=EMP),
 C('print(emp.loc[0:1, "name":"score"])    # a slice of columns works too', "Column slices", setup=EMP),
 C('by_name = emp.set_index("name")       # use the names as row labels\nprint(by_name.loc["Neha", "salary"])\nprint(by_name.loc[["Asha", "Ravi"], ["dept", "score"]])', "Text labels: set_index() first", setup=EMP),
 {"t": "note", "k": "trap", "b": "With `loc`, a slice like `1:3` **includes** the end label 3. That is different from Python lists and from `iloc`, where the end is left out."},

 {"t": "h", "text": "iloc: pick by position"},
 {"t": "p", "b": "`df.iloc[rows, columns]` picks by **position numbers** (0, 1, 2 ...), ignoring the labels. It works exactly like slicing a list: the end is **not** included, and `-1` means the last one."},
 C('print(emp.iloc[0:3, 0:2])     # positions 0, 1, 2 and columns 0, 1\nprint(emp.iloc[-1]["name"])    # the last row', "Positions, like list slicing", setup=EMP),
 C('print(emp.iloc[[0, 2, 4], [0, 3]])    # rows 0, 2, 4 and columns 0 and 3', "Lists of positions", setup=EMP),
 {"t": "anim", "title": "loc[0:2] vs iloc[0:2]", "frames": [
   {"html": G(label="the staff table"), "c": "The same table, two ways to cut it. Here the labels and the positions are both 0 to 4."},
   {"html": G(hlRow=0, acc=[[1, 0], [1, 1], [1, 2], [1, 3], [2, 0], [2, 1], [2, 2], [2, 3]], label="loc 0 to 2 takes 3 rows"), "c": "`emp.loc[0:2]` uses **labels**, and the end label is included: rows 0, 1 **and 2**. Three rows."},
   {"html": G(hlRow=0, acc=[[1, 0], [1, 1], [1, 2], [1, 3]], label="iloc 0 to 2 takes 2 rows"), "c": "`emp.iloc[0:2]` uses **positions**, and the end is left out, like a list: positions 0 and 1. Two rows."},
   {"html": G(hl=[[3, 0], [3, 2], [4, 0], [4, 2]], label="iloc picks rows 3 and 4, columns 0 and 2"), "c": "`emp.iloc[3:5, [0, 2]]`: positions 3 and 4, and the columns at positions 0 and 2 (`name` and `salary`)."}]},
 PRED(EMP + 'print(len(emp.loc[2:4]), len(emp.iloc[2:4]))', ["`3 2`", "`2 2`", "`3 3`", "`2 3`"], 0, "`loc` includes the end label (2, 3, 4). `iloc` stops before position 4 (2, 3)."),
 {"t": "vs", "title": "loc vs iloc", "head": ["", "loc", "iloc"], "rows": [
   ["Picks by", "Labels and column names", "Position numbers"], ["End of a slice", "[[warn:Included]]", "[[ok:Left out]] (like lists)"], ["Example", "`df.loc[1:3, [\"name\", \"salary\"]]`", "`df.iloc[0:3, 0:2]`"],
   ["Takes conditions", "[[ok:Yes]]: `df.loc[df[\"x\"] > 5, \"name\"]`", "No"], ["Last row", "`df.loc[df.index[-1]]`", "`df.iloc[-1]`"]],
   "rule": "Know the name? `loc`. Know the position? `iloc`."},

 {"t": "h", "text": "Filtering rows"},
 {"t": "p", "b": "A condition on a column gives `True` or `False` for every row: a ==boolean mask==, exactly like the NumPy masks of Chapter 21. Put it inside `df[...]` to keep only the `True` rows."},
 C('print(emp["salary"] > 60000)', "The mask: one True/False per row", setup=EMP),
 C('print(emp[emp["salary"] > 60000])', "Keep the True rows", setup=EMP),
 C('print(emp.loc[emp["dept"] == "IT", ["name", "salary"]])', "loc: filter the rows AND pick the columns", setup=EMP),
 {"t": "p", "b": "Join conditions with `&` (and), `|` (or) and `~` (not). Each condition needs its **own brackets**, because `&` and `|` are worked out before `>` and `==`."},
 C('print(emp[(emp["score"] > 85) & (emp["salary"] > 50000)][["name", "score"]])\nprint(emp[(emp["city"] == "Pune") | (emp["dept"] == "HR")]["name"].tolist())', "& and |", setup=EMP),
 C('print(emp[emp["city"].isin(["Delhi", "Chennai"])]["name"].tolist())\nprint(emp[emp["salary"].between(50000, 70000)]["name"].tolist())   # both ends included\nprint(emp[~(emp["dept"] == "Sales")]["name"].tolist())', "isin(), between() and ~", setup=EMP),
 {"t": "anim", "title": "How a filter keeps rows", "frames": [
   {"html": G(label="the staff table"), "c": "We want the people with a score above 80."},
   {"html": grid([["91", "True"], ["74", "False"], ["83", "True"], ["68", "False"], ["88", "True"]], cl=["score", "> 80"], rl=RL, cw=74, acc=[[0, 1], [2, 1], [4, 1]], label="the mask"), "c": "`emp[\"score\"] > 80` checks every row and gives a mask: True, False, True, False, True."},
   {"html": grid([M[0], M[2], M[4]], cl=CL, rl=["0", "2", "4"], cw=74, label="only rows 0, 2 and 4"), "c": "`emp[mask]` keeps the True rows. Notice the index: 0, 2, 4. Filtering keeps the original labels."}]},
 {"t": "note", "k": "trap", "b": "Python's `and` / `or` do not work here: `emp[emp[\"score\"] > 85 and emp[\"salary\"] > 50000]` raises a ValueError. Use `&` and `|`, with brackets around each condition."},
 PRED(EMP + 'print(len(emp[(emp["dept"] == "IT") | (emp["score"] > 90)]))', ["`4`", "`3`", "`1`", "`5`"], 0, "IT gives Asha, Neha and Arjun. Score above 90 adds Priya (Asha is already in). That makes 4."),

 {"t": "h", "text": "query(): filters written like a sentence"},
 {"t": "p", "b": "`df.query(\"...\")` does the same filtering, written like a sentence. Inside the text you use plain `and` / `or`, and quotes around text values. Put `@` before a Python variable."},
 C('print(emp.query(\'dept == "IT" and score > 80\'))', "query(): the same filter, easier to read", setup=EMP),
 C('limit = 50000\nprint(emp.query("salary < @limit or score > 90")["name"].tolist())', "@ uses a Python variable", setup=EMP),
 {"t": "note", "k": "tip", "b": "Write a query with **double quotes inside single quotes**, or the other way round: `\'dept == \"IT\"\'`. Column names with spaces need backticks: ``df.query(\"`Annual Salary` > 50000\")``."},

 {"t": "h", "text": "New columns with maths"},
 {"t": "p", "b": "Maths on columns works row by row, like NumPy arrays: no loop. Store the result under a new name and you get a new column."},
 C('emp["bonus"] = emp["salary"] * 0.10\nemp["monthly"] = (emp["salary"] / 12).round(2)\nprint(emp[["name", "salary", "bonus", "monthly"]].head(3))', "Arithmetic on whole columns", setup=EMP),
 C('emp["perf_bonus"] = emp["salary"] * 0.05 * (emp["score"] / 100)   # two columns in one formula\nprint(emp[["name", "perf_bonus"]].head(3))\nprint(emp["salary"].sum(), emp["salary"].mean())', "Formulas that use two columns", setup=EMP),
 PRED('df = pd.DataFrame({"price": [100, 250], "qty": [3, 2]})\ndf["total"] = df["price"] * df["qty"]\nprint(df["total"].sum())', ["`800`", "`350`", "`5`", "`[300, 500]`"], 0, "Row by row: 100 × 3 = 300 and 250 × 2 = 500. Together 800."),

 {"t": "h", "text": "apply(): your own rule"},
 {"t": "p", "b": "When a rule needs `if` / `else`, write it as a function and use `apply()`. On a **column**, `apply(func)` calls your function once for every value. A `lambda` is fine for a short rule; a `def` is clearer for `if` / `elif` / `else`."},
 C('emp["band"] = emp["salary"].apply(lambda x: "High" if x > 60000 else "Low")\nprint(emp[["name", "salary", "band"]].head(4))', "A lambda for a short rule", setup=EMP),
 C('def grade(score):\n    if score >= 90:\n        return "Excellent"\n    elif score >= 80:\n        return "Good"\n    else:\n        return "Average"\n\nemp["grade"] = emp["score"].apply(grade)    # no brackets after grade\nprint(emp[["name", "score", "grade"]].head(4))', "A def for if / elif / else", setup=EMP),
 {"t": "p", "b": "When the rule needs **several columns**, use `df.apply(func, axis=1)`. Now your function gets one whole **row** at a time, and you read its values by column name."},
 C('def bonus_ok(row):\n    if row["score"] > 80 and row["salary"] < 70000:\n        return "Yes"\n    return "No"\n\nemp["bonus_ok"] = emp.apply(bonus_ok, axis=1)\nprint(emp[["name", "salary", "score", "bonus_ok"]].head(4))', "axis=1: the function gets a whole row", setup=EMP),
 {"t": "anim", "title": "apply() on a column vs apply(axis=1) on rows", "frames": [
   {"html": cat(grid([["91"], ["74"], ["83"]], cl=["score"], rl=["0", "1", "2"], cw=70, hl=[[0, 0]], label="first value"), '<div class="bigcode">grade(91) → "Excellent"</div>'), "c": "`emp[\"score\"].apply(grade)`: your function gets **one value** at a time. First 91."},
   {"html": cat(grid([["91"], ["74"], ["83"]], cl=["score"], rl=["0", "1", "2"], cw=70, hl=[[1, 0]], acc=[[0, 0]], label="second value"), '<div class="bigcode">grade(74) → "Average"</div>'), "c": "Then 74, then 83, and so on. The answers form the new column."},
   {"html": cat(grid([["72000", "91"], ["45000", "74"], ["58000", "83"]], cl=["salary", "score"], rl=["0", "1", "2"], cw=74, hlRow=0, label="the first row"), '<div class="bigcode">bonus_ok(row 0) → "No"</div>'), "c": "`emp.apply(bonus_ok, axis=1)`: now the function gets a **whole row**, so it can use `row[\"salary\"]` and `row[\"score\"]` together. Asha's salary is 70000 or more, so \"No\"."}]},
 C('emails = pd.Series(["asha@gmail.com", "bad-email"])\nprint(emails.apply(lambda e: e.split("@")[1] if "@" in e else None).tolist())', "From the course notes: a custom extract with apply"),
 {"t": "note", "k": "trap", "b": "Pass the function **without brackets**: `apply(grade)`, not `apply(grade())`. With brackets, Python calls `grade` straight away with no value, and you get a TypeError."},

 {"t": "h", "text": "np.where and setting values with loc"},
 {"t": "p", "b": "For a simple yes/no rule, `np.where(condition, value_if_true, value_if_false)` is shorter and much faster than `apply`. It works on the whole column at once."},
 C('import numpy as np\nemp["level"] = np.where(emp["salary"] > 60000, "Senior", "Junior")\nprint(emp[["name", "salary", "level"]].head(4))', "np.where: a fast if / else", setup=EMP),
 {"t": "p", "b": "You can also **set** values with `loc`: put a condition for the rows and a column name, then `=` a value. Only the matching rows change. A new column name creates the column."},
 C('emp.loc[emp["score"] >= 85, "award"] = "Star"\nemp.loc[emp["score"] < 85, "award"] = "-"\nprint(emp[["name", "score", "award"]].head(5))', "loc + condition + column = value", setup=EMP),
 C('emp.loc[emp["dept"] == "HR", "salary"] = emp["salary"] + 5000    # a ₹5,000 raise for HR only\nprint(emp.loc[1, "name"], emp.loc[1, "salary"])', "Change some rows of an existing column", setup=EMP),
 {"t": "table", "head": ["Tool", "Best for", "Example"], "rows": [
   ["`np.where(cond, a, b)`", "One yes/no rule, fast", "`np.where(df[\"s\"] > 60000, \"High\", \"Low\")`"], ["`df.loc[cond, \"col\"] = v`", "Changing only some rows", "`df.loc[df[\"s\"] > 60000, \"level\"] = \"Senior\"`"],
   ["`s.apply(func)`", "Rules with if / elif / else on one column", "`df[\"score\"].apply(grade)`"], ["`df.apply(func, axis=1)`", "Rules that need several columns", "`df.apply(bonus_ok, axis=1)`"]]},

 {"t": "h", "text": "Sorting with sort_values"},
 {"t": "p", "b": "`sort_values(\"col\")` sorts the rows by a column, smallest first. Add `ascending=False` for largest first. The index labels move with their rows."},
 C('print(emp.sort_values("salary", ascending=False)[["name", "salary"]].head(3))', "Top 3 salaries", setup=EMP),
 C('print(emp.sort_values(["dept", "salary"], ascending=[True, False])[["name", "dept", "salary"]])', "Sort by department (A to Z), then salary (high to low)", setup=EMP),
 C('scores = pd.DataFrame({"name": ["Om", "Lata", "Kiran"], "score": [72, None, 85]})\nprint(scores.sort_values("score", ascending=False))\nprint(scores.sort_values("score", na_position="first"))', "na_position: where the gaps go"),
 PRED('df = pd.DataFrame({"n": ["A", "B", "C"], "v": [3, 1, 2]})\nprint(df.sort_values("v")["n"].tolist())', ["`['B', 'C', 'A']`", "`['A', 'B', 'C']`", "`['A', 'C', 'B']`", "`[1, 2, 3]`"], 0, "Sorting by `v` gives 1 (B), 2 (C), 3 (A); then we take the names."),
 {"t": "note", "k": "tip", "b": "`sort_index()` puts the rows back in index order. After a filter or a sort, the index may also have gaps; `reset_index(drop=True)` numbers the rows 0, 1, 2 ... again."},

 {"t": "h", "text": "Counting and finding: value_counts, unique and idxmax"},
 {"t": "p", "b": "`value_counts()` counts each value, biggest first. With `normalize=True` you get **shares** (0 to 1) instead of counts. `unique()` lists the different values and `nunique()` counts them."},
 C('print(emp["dept"].value_counts())\nprint(emp["dept"].value_counts(normalize=True))', "Counts and shares", setup=EMP),
 C('print(emp["city"].unique())\nprint(emp["city"].nunique(), emp["dept"].count(), emp["salary"].max())', "unique(), nunique(), count(), max()", setup=EMP),
 {"t": "p", "b": "`idxmax()` gives the **index label** of the largest value, and `idxmin()` of the smallest. Pass that label to `loc` to see the whole row."},
 C('top = emp["salary"].idxmax()\nprint(top)\nprint(emp.loc[top, "name"], emp.loc[top, "salary"])\nlow = emp.loc[emp["score"].idxmin()]\nprint(low["name"], low["score"])', "idxmax() and idxmin(), then loc", setup=EMP),
 C('best = emp[["salary", "score"]].idxmax()   # one label per column\nfor col, idx in best.items():\n    print(f"Highest {col}: {emp.loc[idx, \'name\']} ({emp.loc[idx, col]})")', "From the course PDF: the top row for several columns", setup=EMP),
 C('print(emp.sample(2, random_state=3)[["name", "dept"]])\nprint(len(emp.sample(frac=0.5, random_state=3)))       # half of the rows', "sample(): random rows, or a fraction of them", setup=EMP),
 {"t": "note", "k": "trap", "b": "`max()` gives the biggest **value**. `idxmax()` gives **where** it is (the index label). You need `idxmax()` to find who has the top salary."},
 {"t": "deck", "title": "Select and change in 6 slides", "s": [
   {"big": "Ask for rows, then columns.", "b": "`df.loc[rows, cols]` by labels (end included), `df.iloc[rows, cols]` by positions (end left out)."},
   {"h": "Filter", "c": 'import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df[df["v"] > 4]["n"].tolist())', "o": run('import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df[df["v"] > 4]["n"].tolist())')},
   {"h": "Several conditions", "items": ["`&` and, `|` or, `~` not", "Brackets around each condition", "Or write it as a sentence: `df.query(\"v > 4 and n != \\\"B\\\"\")`"]},
   {"h": "New columns", "items": ["Maths: `df[\"total\"] = df[\"price\"] * df[\"qty\"]`", "Fast yes/no: `np.where(cond, a, b)`", "Your own rule: `apply(func)` or `apply(func, axis=1)`", "Some rows only: `df.loc[cond, \"col\"] = value`"]},
   {"h": "Sort and count", "items": ["`sort_values(\"col\", ascending=False)`", "`value_counts(normalize=True)`", "`unique()`, `nunique()`"]},
   {"h": "Who is the top?", "c": 'import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df.loc[df["v"].idxmax(), "n"])', "o": run('import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df.loc[df["v"].idxmax(), "n"])')}]},
 {"t": "mm", "title": "Chapter 25 at a glance", "root": "Select & change", "kids": [
   {"t": "Pick", "k": ["loc: labels, end included", "iloc: positions, end left out", "set_index('name')"]},
   {"t": "Filter", "k": ["df[df['x'] > 5]", "& | ~ with brackets", "isin, between", "query('x > 5')"]},
   {"t": "New columns", "k": ["maths on columns", "apply(func)", "apply(func, axis=1)", "np.where", "loc[cond, 'col'] = v"]},
   {"t": "Order", "k": ["sort_values", "several columns", "na_position"]},
   {"t": "Count & find", "k": ["value_counts(normalize)", "unique, nunique", "idxmax, idxmin", "sample"]}]},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("Print the `name` and `city` of the rows with the **labels** 2 to 4 (both included) of `emp`.", "`emp.loc[2:4, [\"name\", \"city\"]]`: with loc the end label is included.", EMP + 'print(emp.loc[2:4, ["name", "city"]])', "With `iloc` you would write `iloc[2:5, ...]` to get the same three rows.", 'import pandas as pd\n' + EMP),
   P("Print the names of the **Sales** staff whose score is **above 70**, as a list.", "Two conditions with `&`, each in brackets; then `[\"name\"].tolist()`.", EMP + 'print(emp[(emp["dept"] == "Sales") & (emp["score"] > 70)]["name"].tolist())', "Meena, Priya and Kiran qualify; Ravi's 68 is too low.", 'import pandas as pd\n' + EMP),
   P("Add a column `tax` that is 10% of the salary for salaries above ₹50,000 and 5% otherwise (use `np.where`). Print `name`, `salary` and `tax` for the first 4 rows.", "`np.where(emp[\"salary\"] > 50000, emp[\"salary\"] * 0.10, emp[\"salary\"] * 0.05)`.", NP + EMP + 'emp["tax"] = np.where(emp["salary"] > 50000, emp["salary"] * 0.10, emp["salary"] * 0.05)\nprint(emp[["name", "salary", "tax"]].head(4))', "`np.where` can choose between two **columns**, not only two fixed values.", NP + EMP),
   P("Write a function `level(score)` that returns `\"A\"` for 90 or more, `\"B\"` for 70 or more, and `\"C\"` otherwise. Add it as a column with `apply` and print the value counts of the new column.", "`emp[\"level\"] = emp[\"score\"].apply(level)`, then `value_counts()`.", EMP + 'def level(score):\n    if score >= 90:\n        return "A"\n    elif score >= 70:\n        return "B"\n    return "C"\n\nemp["level"] = emp["score"].apply(level)\nprint(emp["level"].value_counts())', "The order of the `if` checks matters: test the highest band first.", 'import pandas as pd\n' + EMP),
   P("Print the name of the person with the **lowest** salary, using `idxmin()` and `loc`.", "`emp.loc[emp[\"salary\"].idxmin(), \"name\"]`.", EMP + 'print(emp.loc[emp["salary"].idxmin(), "name"])', "`idxmin()` gives the label (3), and `loc` turns it into the name.", 'import pandas as pd\n' + EMP)]},

 {"t": "h", "text": "Practice with real data: a year of sales"},
 {"t": "p", "b": "**`sales_data.csv`** has 500 orders from 2024: the date, category, region, sales and profit in rupees, quantity, the customer's age and a satisfaction score from 1 to 5."},
 C(SALES + 'print(sales.shape)\nprint(sales[["Date", "Category", "Region", "Sales"]].head(3))', "A first look"),
 {"t": "prac", "items": [
   P("How many orders lost money (Profit below 0)? Print the count, and the share of all orders as a percent with 1 decimal.", "`loss = sales[sales[\"Profit\"] < 0]`, then `len(loss)` and `len(loss) / len(sales) * 100`.", SALES + 'loss = sales[sales["Profit"] < 0]\nprint(len(loss))\nprint(round(len(loss) / len(sales) * 100, 1))', "A filter plus `len()` answers \"how many\" questions."),
   P("Add a column `margin` = Profit ÷ Sales × 100, rounded to 1 decimal. Print the `Category`, `Sales`, `Profit` and `margin` of the 3 orders with the highest margin.", "Make the column, then `sort_values(\"margin\", ascending=False).head(3)`.", SALES + 'sales["margin"] = (sales["Profit"] / sales["Sales"] * 100).round(1)\nprint(sales.sort_values("margin", ascending=False)[["Category", "Sales", "Profit", "margin"]].head(3))', "Clothing has the best margins: the cheap items earn the most per rupee."),
   P("What share of orders comes from each region? Print `value_counts(normalize=True)` rounded to 2 decimals.", "`sales[\"Region\"].value_counts(normalize=True).round(2)`.", SALES + 'print(sales["Region"].value_counts(normalize=True).round(2))', "The shares add up to 1. South has the most orders."),
   P("Using `query()`, print how many **Electronics** orders in the **South** had a satisfaction score of 4.5 or more.", "`sales.query('Category == \"Electronics\" and Region == \"South\" and Satisfaction_Score >= 4.5')`.", SALES + 'happy = sales.query(\'Category == "Electronics" and Region == "South" and Satisfaction_Score >= 4.5\')\nprint(len(happy))', "Three conditions in one readable line."),
   P("Print the date, category and sales of the single biggest order, using `idxmax()`.", "`sales.loc[sales[\"Sales\"].idxmax(), [\"Date\", \"Category\", \"Sales\"]]`.", SALES + 'print(sales.loc[sales["Sales"].idxmax(), ["Date", "Category", "Sales"]])', "A November Electronics order: the Diwali season brings the biggest bills.")]}
]
ch = {"id": "pandas3", "part": 8, "title": "Selecting, filtering and changing data", "nav": "Select & change", "time": "55 min", "lvl": "Intermediate", "tricky": 1,
 "keys": "loc iloc label position slice row column cell set_index filter mask boolean and or not & | ~ isin between query @ variable new column maths bonus apply lambda def axis=1 row np.where where set values sort_values ascending na_position sort_index reset_index value_counts normalize unique nunique count max idxmax idxmin sample frac",
 "lead": "Ask a table questions. Pick rows and columns by label or position, filter with conditions, add new columns with maths and your own rules, sort, and find the top and bottom values.",
 "goals": ["Pick data with `loc` (labels, end included) and `iloc` (positions, end left out)", "Filter rows with masks, `&` `|` `~`, `isin()`, `between()` and `query()`", "Add columns with maths, `apply()` (also with `axis=1`) and `np.where()`", "Change only some rows with `df.loc[condition, \"col\"] = value`", "Sort with `sort_values()` and find values with `value_counts()`, `unique()` and `idxmax()`"],
 "src": ["Course notebook pandas_exp_2.ipynb (loc/iloc, filters with | and &, apply with def, idxmin/idxmax, unique/nunique/count/max/min/mean/sum)", "Course PDF: More About Pandas (apply, operations on columns, loc, idxmax, sort_values, iloc, value_counts, query)", "pandas documentation"],
 "body": body,
 "take": ["`loc` picks by labels and includes the end of a slice; `iloc` picks by positions and leaves the end out.", "Filter with `df[mask]`; join conditions with `&`, `|`, `~` and brackets, or write `df.query(\"...\")`.", "New columns: maths on columns, `np.where()` for yes/no rules, `apply()` for your own function (`axis=1` for whole rows).", "`df.loc[condition, \"col\"] = value` changes only the matching rows.", "`sort_values()`, `value_counts(normalize=True)`, `unique()`, `nunique()`, and `idxmax()` + `loc` to find the top row."],
 "quiz": [
   Q("What does this print?", ["`3 2`", "`2 2`", "`2 3`", "`3 3`"], 0, "`loc` includes the end label; `iloc` leaves the end out.", EMP + 'print(len(emp.loc[0:2]), len(emp.iloc[0:2]))'),
   Q("Which line keeps the IT staff with a score above 80?", ["`emp[emp[\"dept\"] == \"IT\" and emp[\"score\"] > 80]`", "`emp[(emp[\"dept\"] == \"IT\") & (emp[\"score\"] > 80)]`", "`emp[emp[\"dept\"] == \"IT\" & emp[\"score\"] > 80]`", "`emp.loc[\"IT\", 80]`"], 1, "Use `&`, with brackets around each condition."),
   Q("What does this print?", ["`['B']`", "`['A', 'B']`", "`['C']`", "`[]`"], 0, "Only B is over 5 and under 10.", 'df = pd.DataFrame({"n": ["A", "B", "C"], "v": [3, 7, 12]})\nprint(df.query("v > 5 and v < 10")["n"].tolist())'),
   Q("What does this print?", ["`['Yes', 'No']`", "`['No', 'Yes']`", "`['Yes', 'Yes']`", "An error"], 0, "The lambda runs once for every value: 70 > 50 gives Yes, 40 gives No.", 'df = pd.DataFrame({"m": [70, 40]})\nprint(df["m"].apply(lambda x: "Yes" if x > 50 else "No").tolist())'),
   Q("In `df.apply(func, axis=1)`, what does `func` receive?", ["One value", "One whole row", "One whole column", "The whole DataFrame"], 1, "With `axis=1`, the function gets a row, so it can use several columns."),
   Q("What does this print?", ["`1`", "`20`", "`B`", "`2`"], 0, "`idxmax()` gives the index label of the biggest value, not the value itself.", 'df = pd.DataFrame({"n": ["A", "B"], "v": [10, 20]})\nprint(df["v"].idxmax())'),
   Q("What does this print?", ["`[0.75, 0.25]`", "`[3, 1]`", "`[0.25, 0.75]`", "`[75, 25]`"], 0, "`normalize=True` turns counts into shares: 3 of 4 and 1 of 4.", 's = pd.Series(["UPI", "UPI", "Cash", "UPI"])\nprint(s.value_counts(normalize=True).tolist())'),
   Q("Which line sets `level` to `Senior` only for salaries above 60000?", ["`df[\"level\"] = df[\"salary\"] > 60000`", "`df.loc[df[\"salary\"] > 60000, \"level\"] = \"Senior\"`", "`df.iloc[df[\"salary\"] > 60000] = \"Senior\"`", "`df.level(\"Senior\")`"], 1, "`loc[condition, column] = value` changes only the matching rows."),
   Q("What does this print?", ["`['C', 'A', 'B']`", "`['A', 'B', 'C']`", "`['B', 'A', 'C']`", "`['C', 'B', 'A']`"], 0, "`ascending=False` puts the largest value first: 9 (C), 5 (A), 2 (B).", 'df = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 2, 9]})\nprint(df.sort_values("v", ascending=False)["n"].tolist())'),
   Q("Why use `np.where()` instead of `apply()` for a yes/no rule?", ["It can use if / elif / else", "It works on the whole column at once, so it is much faster", "It changes the original table", "apply() cannot make text"], 1, "`np.where` is vectorised, like the NumPy maths in Part 7.")],
 "cards": [["`loc` vs `iloc`", "loc: labels and names, end of a slice included. iloc: positions, end left out."], ["One cell with loc", "`df.loc[2, \"name\"]`"], ["First 3 rows and 2 columns by position", "`df.iloc[0:3, 0:2]`"], ["Keep rows that match", "`df[df[\"salary\"] > 60000]`"], ["Filter and pick columns at once", "`df.loc[df[\"dept\"] == \"IT\", [\"name\", \"salary\"]]`"], ["Two conditions", "`df[(cond1) & (cond2)]`: `&` and, `|` or, `~` not, with brackets."], ["`isin` and `between`", "`df[\"city\"].isin([\"Pune\", \"Goa\"])`, `df[\"s\"].between(10, 20)` (both ends included)"], ["Filter as a sentence", "`df.query('dept == \"IT\" and score > 80')`; `@name` uses a variable."], ["`apply(func)` vs `apply(func, axis=1)`", "On a column: one value at a time. On the DataFrame with axis=1: one row at a time."], ["Fast if / else for a column", "`np.where(cond, if_true, if_false)`"], ["Change only some rows", "`df.loc[cond, \"col\"] = value`"], ["Sort by two columns", "`df.sort_values([\"dept\", \"salary\"], ascending=[True, False])`"], ["Shares instead of counts", "`s.value_counts(normalize=True)`"], ["Who has the top salary?", "`df.loc[df[\"salary\"].idxmax(), \"name\"]`"]],
 "cheat": [["df.loc[2, 'name']", "One cell by label"], ["df.loc[1:3, ['a', 'b']]", "Rows 1 to 3 (end included), two columns"], ["df.iloc[0:3, 0:2]", "First 3 rows, first 2 columns"], ["df.iloc[-1]", "The last row"], ["df.set_index('name').loc['Neha']", "Rows by a text label"], ["df[df['x'] > 5]", "Keep matching rows"], ["df[(c1) & (c2)]  df[(c1) | (c2)]  df[~c1]", "and / or / not"], ["df[df['c'].isin(['a', 'b'])]", "One of several values"], ["df.query('x > 5 and y == \"A\"')", "A filter as a sentence"], ["df['new'] = df['a'] * df['b']", "A column from maths"], ["s.apply(func)  df.apply(func, axis=1)", "Your own rule per value / per row"], ["np.where(cond, 'Yes', 'No')", "Fast if / else"], ["df.loc[cond, 'col'] = value", "Set values for some rows"], ["df.sort_values(['a', 'b'], ascending=[True, False])", "Sort by two columns"], ["s.value_counts(normalize=True)", "Shares of each value"], ["s.unique()  s.nunique()", "Different values / how many"], ["df.loc[df['x'].idxmax()]", "The row with the biggest x"], ["df.sample(3, random_state=1)", "Random rows that repeat"]]
}
poster = {"title": "Select, Filter and Change", "sub": "Ask the table a question, get the rows you need.", "mods": [
  {"title": "Pick and filter", "sub": "Rows first, then columns", "cards": [
    {"h": "loc vs iloc", "svg": grid([["Asha", "72000"], ["Vikram", "45000"], ["Neha", "58000"]], cl=["name", "salary"], rl=["0", "1", "2"], cw=74, hlRow=0, acc=[[1, 0], [1, 1], [2, 0], [2, 1]], label="loc 0 to 2 takes three rows"), "foot": "loc[0:2] → 3 rows · iloc[0:2] → 2 rows"},
    {"h": "Filter", "c": 'import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df[(df["v"] > 1) & (df["v"] < 9)]["n"].tolist())', "o": run('import pandas as pd\ndf = pd.DataFrame({"n": ["A", "B", "C"], "v": [5, 9, 2]})\nprint(df[(df["v"] > 1) & (df["v"] < 9)]["n"].tolist())')},
    {"h": "Watch out", "span": 1, "rules": [["trap", "and / or inside df[...]", "use & and |"], ["trap", "df[c1 & c2]", "brackets: df[(c1) & (c2)]"], ["tip", "df.query('a > 5 and b == \"X\"')", "plain and / or inside the text"], ["acc", "df.loc[cond, 'col'] = v", "change some rows"]]}]},
  {"title": "Change, sort and find", "sub": "New columns and quick answers", "cards": [
    {"h": "Three ways to make a column", "c": 'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"s": [70, 40]})\ndf["a"] = df["s"] * 2\ndf["b"] = np.where(df["s"] > 50, "Hi", "Lo")\ndf["c"] = df["s"].apply(lambda x: x // 10)\nprint(df)', "o": run('import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"s": [70, 40]})\ndf["a"] = df["s"] * 2\ndf["b"] = np.where(df["s"] > 50, "Hi", "Lo")\ndf["c"] = df["s"].apply(lambda x: x // 10)\nprint(df)')},
    {"h": "Find the top", "items": ["`df.sort_values(\"s\", ascending=False).head(3)`", "`df[\"c\"].value_counts(normalize=True)`", "`df.loc[df[\"s\"].idxmax()]`: the whole top row", "`df[\"c\"].unique()` / `nunique()`"]}],
   "table": {"head": ["Need", "Use"], "rows": [["value by label", "`df.loc[r, c]`"], ["value by position", "`df.iloc[i, j]`"], ["yes/no column", "`np.where(cond, a, b)`"], ["rule with several columns", "`df.apply(func, axis=1)`"], ["top row", "`df.loc[df[c].idxmax()]`"]]}}]}
write_chapter('25_pandas3.js', ch, poster)
