# Chapter 26: Grouping, pivot tables and joining tables. Run with the matching Python (see NOTES.md).
from chlib import Chapter, grid, cat, write_chapter, run, Raw
K = Chapter('c26', 'import pandas as pd\n')
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
EMP = '''emp = pd.DataFrame({
    "name": ["Asha", "Vikram", "Neha", "Ravi", "Meena", "Arjun", "Priya", "Kiran"],
    "dept": ["IT", "HR", "IT", "Sales", "Sales", "IT", "HR", "Sales"],
    "city": ["Pune", "Pune", "Pune", "Delhi", "Pune", "Delhi", "Pune", "Pune"],
    "salary": [72000, 45000, 58000, 39000, 66000, 81000, 52000, 47000],
    "score": [91, 74, 83, 68, 88, 79, 95, 71]
})
'''
HEADS = '''heads = pd.DataFrame({"dept": ["IT", "HR", "Finance"], "head": ["Kiran Rao", "Lata Iyer", "Om Shah"]})
'''
SALES = 'sales = pd.read_csv("sales_data.csv")\nsales["Date"] = pd.to_datetime(sales["Date"])\n'
SPLIT = [["IT", "72000"], ["HR", "45000"], ["IT", "58000"], ["Sales", "39000"], ["Sales", "66000"], ["IT", "81000"]]
body = [
 {"t": "h", "text": "groupby: split, apply, combine"},
 {"t": "p", "b": "\"What is the average salary **in each department**?\" is a ==groupby== question. Pandas **splits** the rows into groups, **applies** a summary to each group, and **combines** the answers into one result. It is a Pivot Table in Excel, or `GROUP BY` in SQL."},
 C(EMP + 'print(emp)', "The staff table: every example in this chapter starts from it"),
 {"t": "note", "k": "tip", "b": "The cells below do not repeat these lines, to keep them short. **Try it** copies them in for you, so every example still runs."},
 {"t": "anim", "title": "Split, apply, combine", "frames": [
   {"html": grid(SPLIT, cl=["dept", "salary"], rl=["0", "1", "2", "3", "4", "5"], cw=76, label="six staff"), "c": "Six staff from three departments. We want the average salary per department."},
   {"html": grid(SPLIT, cl=["dept", "salary"], rl=["0", "1", "2", "3", "4", "5"], cw=76, hl=[[0, 0], [2, 0], [5, 0]], acc=[[3, 0], [4, 0]], label="rows coloured by group"), "c": "**Split**: Pandas puts the rows into groups by `dept`: IT (rows 0, 2, 5), HR (row 1) and Sales (rows 3, 4)."},
   {"html": grid([["IT", "72000, 58000, 81000", "70333.33"], ["HR", "45000", "45000.0"], ["Sales", "39000, 66000", "52500.0"]], cl=["group", "salaries", "mean()"], cw=150, hlCol=2, label="the mean of each group"), "c": "**Apply**: it works out `mean()` for each group separately."},
   {"html": grid([["45000.00"], ["70333.33"], ["52500.00"]], cl=["salary"], rl=["HR", "IT", "Sales"], cw=90, label="one row per department"), "c": "**Combine**: one row per group, with the group names as the index, sorted A to Z."}]},
 C('print(emp.groupby("dept")["salary"].mean())', "The average salary in each department", setup=EMP),
 C('print(emp.groupby("dept")["salary"].sum())\nprint(emp.groupby("dept").size())        # rows in each group', "Other summaries: sum(), count(), size(), max() ...", setup=EMP),
 C('print(emp.groupby(["dept", "city"])["salary"].mean())', "Group by two columns", setup=EMP),
 C('avg = emp.groupby("dept")["salary"].mean().reset_index()   # the groups become a normal column\nprint(avg)', "reset_index(): turn the result back into a table", setup=EMP),
 C(SALES + 'monthly = sales.groupby(sales["Date"].dt.to_period("M"))["Sales"].sum()\nprint(monthly.head(4))\nprint("Best month:", monthly.idxmax())', "Group dates by month with .dt.to_period(\"M\")"),
 PRED('df = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g")["v"].sum().tolist())', ["`[6, 5]`", "`[5, 6]`", "`[2, 5, 4]`", "`[11]`"], 0, "Group `a` has 2 + 4 = 6 and group `b` has 5. The groups come out sorted, so `a` is first."),
 {"t": "note", "k": "like", "b": "Read `emp.groupby(\"dept\")[\"salary\"].mean()` as a sentence: \"group the staff by department, take the salary, and find the mean\"."},

 {"t": "h", "text": "agg: many summaries at once"},
 {"t": "p", "b": "`agg()` runs several summaries in one go. Give it a list for one column, or a **dictionary** to choose different summaries for different columns."},
 C('print(emp.groupby("dept")["salary"].agg(["mean", "max", "count"]))', "A list of summaries", setup=EMP),
 C('print(emp.groupby("dept").agg({"salary": ["mean", "max"], "score": "mean"}))', "A dictionary: different summaries per column", setup=EMP),
 {"t": "p", "b": "**Named aggregation** gives the result columns your own names: `new_name=(\"column\", \"summary\")`. The course notebook uses it to build a clean report."},
 C('report = emp.groupby("dept").agg(\n    staff=("name", "count"),\n    total_pay=("salary", "sum"),\n    best_score=("score", "max"),\n)\nprint(report)', "Named aggregation", setup=EMP),
 C('def pay_range(x):\n    return x.max() - x.min()\n\nprint(emp.groupby("dept").agg(spread=("salary", pay_range), q75=("score", lambda x: x.quantile(0.75))))', "Your own summary functions", setup=EMP),
 {"t": "table", "head": ["Summary", "Name in agg", "Gives"], "rows": [
   ["Count of values", "`\"count\"`", "how many (not missing)"], ["Total", "`\"sum\"`", "the sum"], ["Average", "`\"mean\"` / `\"median\"`", "the mean / the middle value"],
   ["Smallest / largest", "`\"min\"` / `\"max\"`", "the extremes"], ["Spread", "`\"std\"`", "standard deviation"], ["Different values", "`\"nunique\"`", "how many different ones"], ["Your own", "a function or `lambda`", "anything you can compute"]]},

 {"t": "h", "text": "transform and assign"},
 {"t": "p", "b": "`agg()` gives **one row per group**. `transform()` gives a value for **every row**: each person gets their own group's result. That is how you compare each row with its group."},
 C('emp["dept_avg"] = emp.groupby("dept")["salary"].transform("mean").round(0)\nemp["vs_avg"] = emp["salary"] - emp["dept_avg"]\nprint(emp[["name", "dept", "salary", "dept_avg", "vs_avg"]])', "transform(): the group result on every row", setup=EMP),
 {"t": "vs", "title": "agg() vs transform()", "head": ["", "groupby().agg(\"mean\")", "groupby().transform(\"mean\")"], "rows": [
   ["Rows in the result", "One per group (3)", "One per original row (8)"], ["Index", "The group names", "The original index"], ["Use it for", "A summary report", "A new column that compares each row with its group"]],
   "rule": "Want a short report? `agg`. Want to add a column to every row? `transform`."},
 {"t": "p", "b": "`assign()` adds several new columns in one step and returns a new table. Each `name=value` becomes a column."},
 C('emp = emp.assign(\n    city_staff=emp.groupby("city")["name"].transform("count"),\n    city_max=emp.groupby("city")["salary"].transform("max"),\n)\nprint(emp[["name", "city", "city_staff", "city_max"]].head(4))', "assign(): several columns at once", setup=EMP),
 C('emp["share"] = (emp["salary"] / emp.groupby("dept")["salary"].transform("sum") * 100).round(1)\nprint(emp[["name", "dept", "share"]].head(4))', "Each person's share of their department's pay", setup=EMP),

 {"t": "h", "text": "The top row in each group"},
 {"t": "p", "b": "`groupby(...)[col].idxmax()` gives the index label of the top row **in each group**. Loop over the result with `.items()` and look each label up with `loc`."},
 C('top = emp.groupby("dept")["salary"].idxmax()\nprint(top)\nfor dept, idx in top.items():\n    print(f"{dept}: {emp.loc[idx, \'name\']} (₹{emp.loc[idx, \'salary\']:,})")', "Highest paid person in each department", setup=EMP),
 C('print(emp.loc[emp.groupby("dept")["score"].idxmax(), ["dept", "name", "score"]])', "Or pass all the labels to loc at once", setup=EMP),

 {"t": "h", "text": "Pivot tables"},
 {"t": "p", "b": "`pivot_table()` builds an Excel-style pivot in one line: `values` = what to summarise, `index` = the rows, `columns` = the columns, `aggfunc` = how. `fill_value=0` puts 0 in empty cells."},
 C('print(emp.pivot_table(values="salary", index="dept", columns="city", aggfunc="mean"))', "Average salary: departments down, cities across", setup=EMP),
 C('print(emp.pivot_table(values="salary", index="dept", columns="city", aggfunc="count", fill_value=0))', "fill_value=0 for the empty cells", setup=EMP),
 C('print(emp.pivot_table(values="salary", index="dept", aggfunc=["mean", "count"]))', "Several summaries", setup=EMP),
 {"t": "note", "k": "tip", "b": "A pivot table is a `groupby` by two columns, laid out as a grid. `emp.groupby([\"dept\", \"city\"])[\"salary\"].mean()` holds the same numbers, as one long column."},

 {"t": "h", "text": "pd.cut: numbers into groups"},
 {"t": "p", "b": "`pd.cut()` puts numbers into **ranges** (bins), like age groups or price bands. Give it the edges and a label for each range. By default each range includes its **right** edge."},
 C('ages = pd.Series([19, 25, 34, 47, 52, 61])\nbands = pd.cut(ages, bins=[18, 30, 50, 65], labels=["18-30", "31-50", "51-65"])\nprint(bands.tolist())', "Edges and labels"),
 C('scores = pd.Series([35, 48, 62, 77, 91])\nprint(pd.cut(scores, bins=3, labels=["Low", "Medium", "High"]).tolist())   # 3 equal-width ranges', "bins=3: Pandas picks equal ranges"),
 C('emp["pay_band"] = pd.cut(emp["salary"], bins=[0, 50000, 70000, 100000], labels=["Low", "Mid", "High"])\nprint(emp.groupby("pay_band", observed=True)["score"].mean())', "Group by the new bands", setup=EMP),
 {"t": "note", "k": "tip", "b": "The column made by `pd.cut` is a **category** column. When you group by it, add `observed=True`, or Pandas prints a warning about empty groups."},
 PRED('s = pd.Series([10, 20, 30])\nprint(pd.cut(s, bins=[0, 20, 40], labels=["A", "B"]).tolist())', ["`['A', 'A', 'B']`", "`['A', 'B', 'B']`", "`['A', 'B', 'C']`", "`['B', 'B', 'B']`"], 0, "Each range includes its right edge: 20 falls in (0, 20], so it is `A`."),

 {"t": "h", "text": "merge: joining two tables"},
 {"t": "p", "b": "`pd.merge(left, right, on=\"key\", how=...)` joins two tables **side by side** wherever the key matches: the same idea as SQL `JOIN` or Power Query's Merge Queries. `how` decides what happens to rows without a match."},
 C(HEADS + 'print(pd.merge(emp, heads, on="dept", how="inner")[["name", "dept", "head"]])', "inner: only the rows that match in both", setup=EMP),
 C(HEADS + 'm = pd.merge(emp, heads, on="dept", how="left")\nprint(m[["name", "dept", "head"]])\nprint(m[m["head"].isna()]["name"].tolist())     # who has no department head?', "left: every row of the left table", setup=EMP),
 C(HEADS + 'print(len(pd.merge(emp, heads, on="dept", how="right")), len(pd.merge(emp, heads, on="dept", how="outer")))', "right and outer", setup=EMP),
 {"t": "anim", "title": "inner, left, right and outer joins", "frames": [
   {"html": cat(grid([["Asha", "IT"], ["Vikram", "HR"], ["Ravi", "Sales"]], cl=["name", "dept"], cw=72, label="left table"), grid([["IT", "Kiran Rao"], ["HR", "Lata Iyer"], ["Finance", "Om Shah"]], cl=["dept", "head"], cw=86, label="right table")), "c": "Two tables share the column `dept`. Sales has no head; Finance has no staff."},
   {"html": grid([["Asha", "IT", "Kiran Rao"], ["Vikram", "HR", "Lata Iyer"]], cl=["name", "dept", "head"], cw=86, label="inner join"), "c": "`how=\"inner\"`: only the departments in **both** tables. Ravi (Sales) and Finance are left out."},
   {"html": grid([["Asha", "IT", "Kiran Rao"], ["Vikram", "HR", "Lata Iyer"], ["Ravi", "Sales", "NaN"]], cl=["name", "dept", "head"], cw=86, hl=[[2, 2]], label="left join"), "c": "`how=\"left\"`: **every** row of the left table. Ravi stays, with `NaN` for the head he does not have."},
   {"html": grid([["Asha", "IT", "Kiran Rao"], ["Vikram", "HR", "Lata Iyer"], ["NaN", "Finance", "Om Shah"]], cl=["name", "dept", "head"], cw=86, hl=[[2, 0]], label="right join"), "c": "`how=\"right\"`: every row of the **right** table. Finance stays, with no name."},
   {"html": grid([["Vikram", "HR", "Lata Iyer"], ["Asha", "IT", "Kiran Rao"], ["Ravi", "Sales", "NaN"], ["NaN", "Finance", "Om Shah"]], cl=["name", "dept", "head"], cw=86, hl=[[2, 2], [3, 0]], label="outer join"), "c": "`how=\"outer\"`: **everything** from both, with `NaN` wherever there is no match."}]},
 {"t": "table", "head": ["how=", "Keeps", "Like SQL"], "rows": [["`\"inner\"` (default)", "Only keys found in both tables", "`INNER JOIN`"], ["`\"left\"`", "Every row of the left table", "`LEFT JOIN`"], ["`\"right\"`", "Every row of the right table", "`RIGHT JOIN`"], ["`\"outer\"`", "Every row of both tables", "`FULL OUTER JOIN`"]]},
 C('a = pd.DataFrame({"dept": ["IT", "IT"], "city": ["Pune", "Delhi"], "staff": [3, 2]})\nb = pd.DataFrame({"dept": ["IT", "IT"], "city": ["Pune", "Delhi"], "budget": [900, 400]})\nprint(pd.merge(a, b, on=["dept", "city"]))', "on= several columns: both must match"),
 C(HEADS + 'm = pd.merge(emp, heads, on="dept", how="outer", indicator=True)\nprint(m["_merge"].value_counts())', "indicator=True: where did each row come from?", setup=EMP),
 {"t": "note", "k": "trap", "b": "If the key is **not unique** in both tables, every match is paired with every other match, and the result can have far more rows than you expect. Check the row count after every merge."},

 {"t": "h", "text": "concat: stacking tables"},
 {"t": "p", "b": "`pd.concat([df1, df2])` puts tables **on top of each other**: the same columns, more rows, like SQL `UNION ALL` or Append Queries. Add `ignore_index=True` to number the rows 0, 1, 2 ... again."},
 C('jan = pd.DataFrame({"id": [101, 102], "amount": [500, 800]})\nfeb = pd.DataFrame({"id": [103, 104], "amount": [650, 300]})\nprint(pd.concat([jan, feb], ignore_index=True))', "Stack two months"),
 C('jan = pd.DataFrame({"id": [101, 102], "amount": [500, 800]})\nfeb = pd.DataFrame({"id": [103], "amount": [650]})\nprint(pd.concat([jan, feb], keys=["Jan", "Feb"]))', "keys=: label each piece"),
 C('print(pd.concat([emp[["name", "salary"]], emp[["score"]]], axis=1).head(3))', "axis=1: side by side, matched by index", setup=EMP),
 {"t": "vs", "title": "merge() vs concat()", "head": ["", "pd.merge(a, b, on=...)", "pd.concat([a, b])"], "rows": [
   ["Direction", "Side by side (more columns)", "On top (more rows)"], ["Matches rows by", "A key column", "Nothing: it just stacks (`axis=1` matches the index)"], ["SQL", "`JOIN`", "`UNION ALL`"], ["Use it for", "Adding details from another table", "Joining months or files with the same columns"]],
   "rule": "New **columns** from another table? `merge`. More **rows** of the same kind? `concat`."},

 {"t": "h", "text": "describe and corr"},
 {"t": "p", "b": "`describe()` summarises number columns (Chapter 23), and you can run it on a filtered or grouped part too. ==Correlation== (`corr()`) measures how two number columns move together, from -1 to 1."},
 {"t": "table", "head": ["corr", "Means", "Example"], "rows": [["near 1", "They rise together", "Sales and profit"], ["near 0", "No straight-line link", "Age and satisfaction"], ["near -1", "One rises as the other falls", "Price and units sold"]]},
 C('print(round(emp["salary"].corr(emp["score"]), 2))\nprint(emp[["salary", "score"]].corr().round(2))', "Two columns, or a whole matrix", setup=EMP),
 C(SALES + 'cols = ["Sales", "Profit", "Quantity", "Customer_Age"]\nprint(sales[cols].corr()["Sales"].round(2).sort_values(ascending=False))', "Which columns move most with Sales?"),
 C(SALES + 'print(sales[sales["Category"] == "Clothing"]["Sales"].describe().round(1))', "describe() on one group"),
 {"t": "note", "k": "trap", "b": "Correlation is not cause. Ice-cream sales and sunburn rise together because of the sun, not because one causes the other."},
 {"t": "deck", "title": "Group and join in 6 slides", "s": [
   {"big": "Split, apply, combine.", "b": "`df.groupby(\"g\")[\"v\"].mean()`: one answer per group."},
   {"h": "Many summaries", "c": 'import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g").agg(total=("v", "sum"), rows=("v", "count")))', "o": run('import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g").agg(total=("v", "sum"), rows=("v", "count")))')},
   {"h": "agg vs transform", "b": "`agg` gives one row per group. `transform` gives the group's answer on every row, so you can add it as a column."},
   {"h": "Pivots and bands", "items": ["`df.pivot_table(values=, index=, columns=, aggfunc=, fill_value=0)`", "`pd.cut(s, bins=[0, 50, 100], labels=[\"Low\", \"High\"])`"]},
   {"h": "Join tables", "items": ["`pd.merge(a, b, on=\"key\", how=\"left\")`: side by side", "Unmatched rows: `m[m[\"col\"].isna()]`", "`pd.concat([a, b], ignore_index=True)`: on top"]},
   {"h": "How related?", "c": 'import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3, 4], "y": [10, 20, 30, 40]})\nprint(df["x"].corr(df["y"]))', "o": run('import pandas as pd\ndf = pd.DataFrame({"x": [1, 2, 3, 4], "y": [10, 20, 30, 40]})\nprint(df["x"].corr(df["y"]))')}]},
 {"t": "mm", "title": "Chapter 26 at a glance", "root": "Group & join", "kids": [
   {"t": "groupby", "k": ["split, apply, combine", "groupby('g')['v'].mean()", "two columns", "reset_index()", "dt.to_period('M')"]},
   {"t": "agg", "k": ["list of summaries", "dict per column", "named: total=('v', 'sum')", "own function"]},
   {"t": "Every row", "k": ["transform('mean')", "assign(...)", "top row: idxmax per group"]},
   {"t": "Reshape", "k": ["pivot_table", "fill_value=0", "pd.cut bins + labels"]},
   {"t": "Combine", "k": ["merge: inner, left, right, outer", "on=[a, b]", "isna() finds no match", "concat: ignore_index, keys, axis=1"]},
   {"t": "Relations", "k": ["corr(): -1 to 1", "describe()"]}]},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("Print the **total** salary of each city in `emp`.", "`emp.groupby(\"city\")[\"salary\"].sum()`.", EMP + 'print(emp.groupby("city")["salary"].sum())', "One row per city, sorted A to Z.", 'import pandas as pd\n' + EMP),
   P("For each department, print the number of staff and the average score, using named aggregation with the names `staff` and `avg_score`.", "`emp.groupby(\"dept\").agg(staff=(\"name\", \"count\"), avg_score=(\"score\", \"mean\"))`.", EMP + 'print(emp.groupby("dept").agg(staff=("name", "count"), avg_score=("score", "mean")))', "Named aggregation gives the columns clear names straight away.", 'import pandas as pd\n' + EMP),
   P("Add a column `best_in_dept` with the highest score of each person's department (use `transform`). Print `name`, `dept`, `score` and `best_in_dept` for the first 4 rows.", "`emp.groupby(\"dept\")[\"score\"].transform(\"max\")`.", EMP + 'emp["best_in_dept"] = emp.groupby("dept")["score"].transform("max")\nprint(emp[["name", "dept", "score", "best_in_dept"]].head(4))', "`transform` keeps the original 8 rows, so the result fits as a new column.", 'import pandas as pd\n' + EMP),
   P("Join `emp` with `heads` so that **every** employee stays. Print the names of the staff whose department has no head.", "`pd.merge(emp, heads, on=\"dept\", how=\"left\")`, then filter with `isna()`.", EMP + HEADS + 'm = pd.merge(emp, heads, on="dept", how="left")\nprint(m[m["head"].isna()]["name"].tolist())', "A left join keeps every employee; `NaN` in `head` shows the ones with no match (Sales).", 'import pandas as pd\n' + EMP + HEADS),
   P("Stack `q1 = pd.DataFrame({\"store\": [\"A\", \"B\"], \"sales\": [100, 80]})` and `q2 = pd.DataFrame({\"store\": [\"A\", \"B\"], \"sales\": [120, 95]})` with new row numbers, then print the total sales per store.", "`pd.concat([q1, q2], ignore_index=True)`, then `groupby(\"store\")[\"sales\"].sum()`.", 'q1 = pd.DataFrame({"store": ["A", "B"], "sales": [100, 80]})\nq2 = pd.DataFrame({"store": ["A", "B"], "sales": [120, 95]})\nboth = pd.concat([q1, q2], ignore_index=True)\nprint(both.groupby("store")["sales"].sum())', "Stack first, then summarise: the most common way to combine monthly or quarterly files.", 'import pandas as pd\nq1 = pd.DataFrame({"store": ["A", "B"], "sales": [100, 80]})\nq2 = pd.DataFrame({"store": ["A", "B"], "sales": [120, 95]})\n')]},

 {"t": "h", "text": "Practice with real data: sales by group"},
 {"t": "p", "b": "Back to **`sales_data.csv`**. These are the questions a manager asks every month."},
 {"t": "prac", "items": [
   P("For each `Category`, print the total sales, the average profit (rounded to 0 decimals) and the number of orders, with the names `total`, `avg_profit` and `orders`.", "Named aggregation, then `.round(0)` on the result.", SALES + 'report = sales.groupby("Category").agg(total=("Sales", "sum"), avg_profit=("Profit", "mean"), orders=("Sales", "count"))\nprint(report.round(0))', "Electronics brings the most money from fewer orders than Clothing."),
   P("Make a pivot table of total `Sales` with `Region` down the side and `Category` across the top. Print it.", "`sales.pivot_table(values=\"Sales\", index=\"Region\", columns=\"Category\", aggfunc=\"sum\")`.", SALES + 'print(sales.pivot_table(values="Sales", index="Region", columns="Category", aggfunc="sum"))', "Each cell is the total for one region and one category."),
   P("Print the total sales of each month, and the month with the most sales.", "`sales.groupby(sales[\"Date\"].dt.to_period(\"M\"))[\"Sales\"].sum()`, then `.idxmax()`.", SALES + 'monthly = sales.groupby(sales["Date"].dt.to_period("M"))["Sales"].sum()\nprint(monthly)\nprint("Best month:", monthly.idxmax())', "October and November are the festival season (Diwali), so sales jump."),
   P("Put customers into age groups `18-30`, `31-45` and `46-65` with `pd.cut` (edges 17, 30, 45, 65). Print the average satisfaction score of each group, rounded to 2 decimals.", "`pd.cut(sales[\"Customer_Age\"], bins=[17, 30, 45, 65], labels=[...])`, then `groupby(..., observed=True)`.", SALES + 'sales["Age_Group"] = pd.cut(sales["Customer_Age"], bins=[17, 30, 45, 65], labels=["18-30", "31-45", "46-65"])\nprint(sales.groupby("Age_Group", observed=True)["Satisfaction_Score"].mean().round(2))', "The groups are very close: age does not change satisfaction much in this data."),
   P("The company has targets: `targets = pd.DataFrame({\"Region\": [\"North\", \"South\", \"East\", \"West\"], \"Target\": [400000, 450000, 300000, 380000]})`. Merge the total sales per region with the targets and print each region's sales, target and a column `Met` (True or False).", "Make `actual = sales.groupby(\"Region\")[\"Sales\"].sum().reset_index()`, merge on `Region`, then compare.", SALES + 'targets = pd.DataFrame({"Region": ["North", "South", "East", "West"], "Target": [400000, 450000, 300000, 380000]})\nactual = sales.groupby("Region")["Sales"].sum().reset_index()\nm = pd.merge(actual, targets, on="Region")\nm["Met"] = m["Sales"] >= m["Target"]\nprint(m)', "`reset_index()` turns the groups into a `Region` column, so `merge` can use it as the key.")]}
]
ch = {"id": "pandas4", "part": 8, "title": "Grouping, pivot tables and joining tables", "nav": "Group & join", "time": "55 min", "lvl": "Intermediate", "tricky": 1,
 "keys": "groupby group by split apply combine mean sum count size agg aggregate named aggregation lambda quantile transform assign idxmax top per group items pivot_table pivot fill_value aggfunc cut bins labels band observed merge join inner left right outer on indicator concat union stack ignore_index keys axis describe corr correlation reset_index to_period month",
 "lead": "Summarise and combine tables like an analyst. Group rows and summarise each group, add group results to every row, build pivot tables, put numbers into bands, join tables on a key and stack them, and measure how columns move together.",
 "goals": ["Summarise groups with `groupby()` and `agg()` (lists, dictionaries, named aggregation, your own functions)", "Put group results on every row with `transform()` and `assign()`", "Build Excel-style tables with `pivot_table()` and bands with `pd.cut()`", "Join tables with `merge()` (inner, left, right, outer) and stack them with `concat()`", "Measure relationships with `corr()` and summarise parts with `describe()`"],
 "src": ["Course notebook pandas_exp_2.ipynb (groupby + transform, assign, named agg, concat, merge)", "Course PDF: More About Pandas (correlation, groupby and agg, merge, concat, idxmax by group, pivot_table, describe)", "pandas documentation"],
 "body": body,
 "take": ["`df.groupby(\"g\")[\"v\"].mean()` splits, applies and combines: one answer per group, sorted by the group name.", "`agg()` runs several summaries; named aggregation `new=(\"col\", \"sum\")` gives clean column names.", "`transform()` puts each group's answer on every row; `assign()` adds several columns at once.", "`pivot_table(values, index, columns, aggfunc, fill_value=0)` makes a grid; `pd.cut()` turns numbers into bands.", "`merge(on=, how=)` joins side by side (check unmatched rows with `isna()`); `concat()` stacks; `corr()` runs from -1 to 1."],
 "quiz": [
   Q("What does this print?", ["`[3.0, 5.0]`", "`[5.0, 3.0]`", "`[4.0]`", "`[2.0, 4.0, 5.0]`"], 0, "Group a: (2 + 4) / 2 = 3. Group b: 5. Groups come out sorted.", 'df = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g")["v"].mean().tolist())'),
   Q("How many rows does `groupby(\"dept\")[\"salary\"].transform(\"mean\")` return for a table of 8 staff in 3 departments?", ["3", "8", "1", "24"], 1, "`transform` returns one value per original row."),
   Q("Which line gives the result columns the names `total` and `staff`?", ["`df.groupby(\"d\").agg(total=(\"s\", \"sum\"), staff=(\"n\", \"count\"))`", "`df.groupby(\"d\").agg([\"total\", \"staff\"])`", "`df.groupby(\"d\").rename(total=\"sum\")`", "`df.agg(total, staff)`"], 0, "Named aggregation: `name=(\"column\", \"summary\")`."),
   Q("What does this print?", ["`3`", "`2`", "`4`", "`1`"], 0, "A left join keeps all 3 rows of the left table, matched or not.", 'a = pd.DataFrame({"k": [1, 2, 3]})\nb = pd.DataFrame({"k": [1, 4], "x": ["p", "q"]})\nprint(len(pd.merge(a, b, on="k", how="left")))'),
   Q("What does this print?", ["`1`", "`3`", "`4`", "`2`"], 0, "An inner join keeps only keys found in both tables: just 1.", 'a = pd.DataFrame({"k": [1, 2, 3]})\nb = pd.DataFrame({"k": [1, 4], "x": ["p", "q"]})\nprint(len(pd.merge(a, b, on="k", how="inner")))'),
   Q("After a left merge, how do you find the rows that found no match in the right table?", ["`m.dropna()`", "`m[m[\"right_col\"].isna()]`", "`m.duplicated()`", "`m.notna()`"], 1, "Unmatched rows have NaN in the columns that came from the right table."),
   Q("What does `pd.concat([a, b], ignore_index=True)` do?", ["Joins a and b side by side on a key", "Stacks b under a and numbers the rows 0, 1, 2 ... again", "Removes the index column", "Keeps only matching rows"], 1, "`concat` stacks; `ignore_index=True` renumbers the rows."),
   Q("What does this print?", ["`['Low', 'High', 'High']`", "`['Low', 'Low', 'High']`", "`['High', 'High', 'High']`", "`['Low', 'High', nan]`"], 0, "Ranges include the right edge: 40 is in (0, 50], 60 and 90 in (50, 100].", 's = pd.Series([40, 60, 90])\nprint(pd.cut(s, bins=[0, 50, 100], labels=["Low", "High"]).tolist())'),
   Q("A correlation of -0.9 between price and units sold means:", ["No link", "When price goes up, units sold go down, strongly", "Price causes units sold", "Both go up together"], 1, "Near -1: one rises as the other falls. Correlation still does not prove cause."),
   Q("What does `fill_value=0` do in `pivot_table()`?", ["Removes empty rows", "Puts 0 in cells with no data", "Counts zeros", "Starts the index at 0"], 1, "Without it, empty combinations show NaN.")],
 "cards": [["What does groupby do?", "Split rows into groups, apply a summary to each, combine the answers: `df.groupby(\"g\")[\"v\"].mean()`."], ["Group by two columns", "`df.groupby([\"dept\", \"city\"])[\"salary\"].mean()`"], ["Turn the groups back into a column", "`.reset_index()`"], ["Several summaries", "`.agg([\"mean\", \"max\"])` or `.agg({\"salary\": \"mean\", \"score\": \"max\"})`"], ["Named aggregation", "`.agg(total=(\"salary\", \"sum\"), staff=(\"name\", \"count\"))`"], ["`agg` vs `transform`", "agg: one row per group. transform: the group's answer on every row."], ["Top row in each group", "`df.loc[df.groupby(\"g\")[\"v\"].idxmax()]`"], ["A pivot table", "`df.pivot_table(values=\"s\", index=\"r\", columns=\"c\", aggfunc=\"sum\", fill_value=0)`"], ["Numbers into bands", "`pd.cut(s, bins=[0, 50, 100], labels=[\"Low\", \"High\"])`: each range includes its right edge."], ["The four joins", "inner: both; left: all of left; right: all of right; outer: everything."], ["Find unmatched rows after a merge", "`m[m[\"col_from_right\"].isna()]`, or `indicator=True` and the `_merge` column."], ["`merge` vs `concat`", "merge: side by side on a key. concat: stacked on top (axis=1 for side by side by index)."], ["What does corr() measure?", "How two number columns move together: 1 together, 0 no link, -1 opposite."], ["Group dates by month", "`df.groupby(df[\"Date\"].dt.to_period(\"M\"))[\"Sales\"].sum()`"]],
 "cheat": [["df.groupby('g')['v'].mean()", "One answer per group"], ["df.groupby(['a', 'b'])['v'].sum()", "Group by two columns"], ["....reset_index()", "Groups back to a column"], ["df.groupby('g').agg({'v': ['mean', 'max'], 'w': 'sum'})", "Different summaries per column"], ["df.groupby('g').agg(total=('v', 'sum'))", "Named aggregation"], ["df.groupby('g')['v'].transform('mean')", "Group answer on every row"], ["df.assign(a=..., b=...)", "Several new columns"], ["df.loc[df.groupby('g')['v'].idxmax()]", "Top row in each group"], ["df.pivot_table(values='v', index='r', columns='c', aggfunc='sum', fill_value=0)", "Excel-style pivot"], ["pd.cut(s, bins=[0, 50, 100], labels=['L', 'H'])", "Numbers into bands"], ["pd.merge(a, b, on='k', how='left')", "Join side by side"], ["pd.merge(a, b, on=['k1', 'k2'])", "Join on two columns"], ["pd.concat([a, b], ignore_index=True)", "Stack tables"], ["pd.concat(parts, keys=['Jan', 'Feb'])", "Stack with labels"], ["df['a'].corr(df['b'])  df[cols].corr()", "Correlation"], ["df.groupby(df['Date'].dt.to_period('M'))['Sales'].sum()", "Totals per month"]]
}
poster = {"title": "Group, Pivot and Join", "sub": "Summaries per group, and tables that work together.", "mods": [
  {"title": "Summaries per group", "sub": "Split, apply, combine", "cards": [
    {"h": "groupby + agg", "c": 'import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g").agg(total=("v", "sum"), avg=("v", "mean")))', "o": run('import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g").agg(total=("v", "sum"), avg=("v", "mean")))')},
    {"h": "transform keeps every row", "c": 'import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g")["v"].transform("sum").tolist())', "o": run('import pandas as pd\ndf = pd.DataFrame({"g": ["a", "b", "a"], "v": [2, 5, 4]})\nprint(df.groupby("g")["v"].transform("sum").tolist())')},
    {"h": "Watch out", "span": 1, "rules": [["acc", "agg", "one row per group"], ["acc", "transform", "one value per row"], ["tip", "pivot_table(..., fill_value=0)", "no NaN in empty cells"], ["trap", "groupby on a pd.cut column", "add observed=True"]]}]},
  {"title": "Join and stack", "sub": "Two tables, one answer", "cards": [
    {"h": "The four joins", "svg": grid([["inner", "keys in both"], ["left", "all of the left"], ["right", "all of the right"], ["outer", "everything"]], cl=["how", "keeps"], cw=120, label="four kinds of join"), "foot": "Unmatched cells become NaN"},
    {"h": "Merge, then check", "c": 'import pandas as pd\na = pd.DataFrame({"k": [1, 2], "n": ["A", "B"]})\nb = pd.DataFrame({"k": [1], "x": ["p"]})\nm = pd.merge(a, b, on="k", how="left")\nprint(m[m["x"].isna()]["n"].tolist())', "o": run('import pandas as pd\na = pd.DataFrame({"k": [1, 2], "n": ["A", "B"]})\nb = pd.DataFrame({"k": [1], "x": ["p"]})\nm = pd.merge(a, b, on="k", how="left")\nprint(m[m["x"].isna()]["n"].tolist())')}],
   "table": {"head": ["Need", "Use"], "rows": [["columns from another table", "`pd.merge(a, b, on=\"k\", how=\"left\")`"], ["more rows of the same kind", "`pd.concat([a, b], ignore_index=True)`"], ["a grid of totals", "`df.pivot_table(...)`"], ["bands", "`pd.cut(s, bins, labels)`"], ["how related", "`df[\"a\"].corr(df[\"b\"])`"]]}}]}
write_chapter('26_pandas4.js', ch, poster)
