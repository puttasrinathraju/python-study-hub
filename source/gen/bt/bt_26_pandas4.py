CID = 'pandas4'
GROUP, AGG, TRANS, TOP, PIVOT, CUT, MERGE, CONCAT, CORR = ("groupby: split, apply, combine", "agg: many summaries at once", "transform and assign", "The top row in each group",
    "Pivot tables", "pd.cut: numbers into groups", "merge: joining two tables", "concat: stacking tables", "describe and corr")
def W(lv, sec, q, starter, sol, e): return dict(lv=lv, ty='code', sec=sec, q=q, starter=starter, sol=sol, e=e)
def F(lv, sec, q, c, fixed, e): return dict(lv=lv, ty='fix', sec=sec, q=q, c=c, fixed=fixed, e=e)
def T(lv, sec, c, e): return dict(lv=lv, ty='type', sec=sec, q="Type exactly what this code prints.", c=c, e=e)
PD = 'import pandas as pd\n'
ORD = PD + '''orders = pd.DataFrame({
    "store": ["Pune", "Delhi", "Pune", "Goa", "Delhi", "Pune", "Goa"],
    "item": ["Tea", "Coffee", "Coffee", "Tea", "Tea", "Tea", "Tea"],
    "qty": [3, 5, 2, 4, 1, 6, 2],
    "amount": [150, 600, 240, 200, 50, 300, 260]
})
'''
MGR = 'managers = pd.DataFrame({"store": ["Pune", "Delhi", "Chennai"], "manager": ["Asha", "Ravi", "Meena"]})\n'
WEEKS = PD + 'w1 = pd.DataFrame({"day": ["Mon", "Tue"], "amount": [500, 650]})\nw2 = pd.DataFrame({"day": ["Mon", "Tue"], "amount": [700, 480]})\n'
SALES = PD + 'sales = pd.read_csv("sales_data.csv")\nsales["Date"] = pd.to_datetime(sales["Date"])\n'
Q = [
 # ---------- Basic ----------
 W(1, GROUP, 'Print the total `amount` of each store.', ORD, ORD + 'print(orders.groupby("store")["amount"].sum())', "Split by store, take the amount, add it up: one row per store, sorted A to Z."),
 W(1, GROUP, 'Print how many orders there are for each `item`, using `size()`.', ORD, ORD + 'print(orders.groupby("item").size())', "`size()` counts the rows in each group."),
 T(1, GROUP, PD + 'df = pd.DataFrame({"g": ["b", "a", "b"], "v": [4, 9, 7]})\nprint(df.groupby("g")["v"].max().tolist())', "Group a has 9; group b has 4 and 7, so its max is 7. Groups are sorted: a first."),
 W(1, AGG, 'For each store, print the mean and the max `amount` in one table, using `agg` with a list.', ORD, ORD + 'print(orders.groupby("store")["amount"].agg(["mean", "max"]))', "A list in `agg` gives one column per summary."),
 F(1, CONCAT, "This code should stack the two weeks into one table of 4 rows and print `4`, but it stops with a TypeError. Fix it.", WEEKS + 'both = pd.concat(w1, w2)\nprint(len(both))', WEEKS + 'both = pd.concat([w1, w2])\nprint(len(both))', "`pd.concat` takes one **list** of tables: `pd.concat([w1, w2])`."),
 W(1, MERGE, 'Join `orders` with `managers` so that only stores found in both tables stay. Print the `store`, `item` and `manager` columns.', ORD + MGR, ORD + MGR + 'm = pd.merge(orders, managers, on="store", how="inner")\nprint(m[["store", "item", "manager"]])', "An inner join keeps only matching keys, so the Goa orders disappear."),
 T(1, CUT, PD + 's = pd.Series([15, 45, 80])\nprint(pd.cut(s, bins=[0, 30, 60, 100], labels=["Low", "Mid", "High"]).tolist())', "Each value goes into the range it falls in: (0, 30], (30, 60] and (60, 100]."),
 W(1, PIVOT, 'Make a pivot table of the total `amount` with stores down the side and items across the top. Print it.', ORD, ORD + 'print(orders.pivot_table(values="amount", index="store", columns="item", aggfunc="sum"))', "`index` sets the rows, `columns` the columns, `aggfunc` how to combine."),
 # ---------- Medium ----------
 W(2, AGG, 'For each item, print a report with named aggregation: `orders` (count of orders), `units` (total qty) and `revenue` (total amount).', ORD, ORD + 'print(orders.groupby("item").agg(orders=("qty", "count"), units=("qty", "sum"), revenue=("amount", "sum")))', "Named aggregation: `new_name=(\"column\", \"summary\")`."),
 F(2, TRANS, "This code should put each store's total amount on every order, but the new column is all NaN. Fix it.", ORD + 'orders["store_total"] = orders.groupby("store")["amount"].sum()\nprint(orders[["store", "store_total"]])', ORD + 'orders["store_total"] = orders.groupby("store")["amount"].transform("sum")\nprint(orders[["store", "store_total"]])', "`sum()` gives one row per store (labels Delhi, Goa, Pune), which do not match the order labels 0 to 6. `transform` gives one value per order."),
 W(2, TRANS, 'Add a column `share` = each order\'s amount as a percent of its store\'s total, rounded to 1 decimal. Print the `store`, `amount` and `share` columns.', ORD, ORD + 'orders["share"] = (orders["amount"] / orders.groupby("store")["amount"].transform("sum") * 100).round(1)\nprint(orders[["store", "amount", "share"]])', "`transform(\"sum\")` lines the store total up with every order, so you can divide row by row."),
 T(2, MERGE, ORD + MGR + 'print(len(pd.merge(orders, managers, on="store", how="left")), len(pd.merge(orders, managers, on="store", how="outer")))', "Left keeps all 7 orders. Outer also adds Chennai, which has a manager but no orders: 8."),
 W(2, TOP, 'Print the `store`, `item` and `amount` of the biggest order in each store.', ORD, ORD + 'print(orders.loc[orders.groupby("store")["amount"].idxmax(), ["store", "item", "amount"]])', "`groupby(...).idxmax()` gives one label per store; `loc` shows those rows."),
 W(2, PIVOT, 'Make a pivot table that **counts** the orders, stores down the side and items across, with 0 in empty cells. Print it.', ORD, ORD + 'print(orders.pivot_table(values="amount", index="store", columns="item", aggfunc="count", fill_value=0))', "Goa has no Coffee orders, so that cell would be NaN. `fill_value=0` shows 0 instead."),
 F(2, MERGE, "This code should join the managers onto the orders, but it raises a KeyError. Fix it.", ORD + MGR + 'm = pd.merge(orders, managers, on="city", how="left")\nprint(m["manager"].tolist())', ORD + MGR + 'm = pd.merge(orders, managers, on="store", how="left")\nprint(m["manager"].tolist())', "The key must be a column that both tables have: `store`."),
 W(2, CONCAT, 'Stack `w1` and `w2` with the labels `W1` and `W2` (use `keys=`) and print the table.', WEEKS, WEEKS + 'print(pd.concat([w1, w2], keys=["W1", "W2"]))', "`keys=` adds an outer label to each piece, so you can still tell the weeks apart."),
 T(2, AGG, PD + 'df = pd.DataFrame({"g": ["x", "y", "x"], "v": [2, 3, 5], "w": [1, 1, 4]})\nr = df.groupby("g").agg({"v": "sum", "w": "max"})\nprint(r["v"].tolist(), r["w"].tolist())', "Different summaries per column: v is added up (7, 3), w takes the max (4, 1)."),
 W(2, CORR, 'Print the correlation between `qty` and `amount`, rounded to 2 decimals.', ORD, ORD + 'print(round(orders["qty"].corr(orders["amount"]), 2))', "0.64: bigger quantities usually mean bigger amounts, but not always, because tea and coffee have different prices."),
 # ---------- Challenge (same chapter, combined) ----------
 W(3, CUT, 'Put the order amounts into bands with `pd.cut`: `Small` up to 200, `Medium` up to 400 and `Large` up to 1000. Print the number of orders in each band (group with `observed=True`).', ORD, ORD + 'orders["band"] = pd.cut(orders["amount"], bins=[0, 200, 400, 1000], labels=["Small", "Medium", "Large"])\nprint(orders.groupby("band", observed=True).size())', "Each range includes its right edge, so 200 is Small."),
 W(3, MERGE, 'Using a left join of `orders` with `managers`, print the stores (once each) that have **no** manager, as a list.', ORD + MGR, ORD + MGR + 'm = pd.merge(orders, managers, on="store", how="left")\nprint(m[m["manager"].isna()]["store"].unique().tolist())', "Unmatched rows get NaN in the right table's columns; `unique()` lists each store once."),
 F(3, CUT, "This code should count the orders in each band and print only the bands that have orders, with no warning. Fix the groupby.", ORD + 'orders["band"] = pd.cut(orders["amount"], bins=[0, 40, 200, 1000], labels=["Tiny", "Small", "Big"])\nprint(orders.groupby("band").size())', ORD + 'orders["band"] = pd.cut(orders["amount"], bins=[0, 40, 200, 1000], labels=["Tiny", "Small", "Big"])\nprint(orders.groupby("band", observed=True).size())', "A `pd.cut` column is a category column. Without `observed=True`, empty bands like Tiny are kept and Pandas prints a FutureWarning."),
 W(3, AGG, 'Write `def spread(x)` that returns the biggest minus the smallest value. For each item, print the `spread` and the `mean` of `amount`, using named aggregation.', ORD, ORD + 'def spread(x):\n    return x.max() - x.min()\n\nprint(orders.groupby("item").agg(spread=("amount", spread), mean=("amount", "mean")))', "Your own function gets each group's values as a Series."),
 T(3, TRANS, ORD + 'print(orders.groupby("item")["qty"].transform("max").tolist())', "Each order gets the biggest qty of its item: Tea 6, Coffee 5."),
 W(3, GROUP, 'Read `sales_data.csv`. Keep only the `Groceries` orders, then print the total sales of each month (use `.dt.to_period("M")`) and the best month.', SALES, SALES + 'groc = sales[sales["Category"] == "Groceries"]\nmonthly = groc.groupby(groc["Date"].dt.to_period("M"))["Sales"].sum()\nprint(monthly)\nprint("Best month:", monthly.idxmax())', "Filter first, then group the dates by month."),
 F(3, CONCAT, "After stacking the two weeks, this code should print the amount in row 2 of the new table (`700`), but it raises a KeyError. Fix the stacking line.", WEEKS + 'both = pd.concat([w1, w2])\nprint(both.loc[2, "amount"])', WEEKS + 'both = pd.concat([w1, w2], ignore_index=True)\nprint(both.loc[2, "amount"])', "Without `ignore_index=True` the labels are 0, 1, 0, 1, so there is no label 2."),
]
