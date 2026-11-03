CID = 'pandas3'
LOC, ILOC, FILT, QRY, MATH, APPLY, WHERE, SORT, COUNT = ("loc: pick by labels", "iloc: pick by position", "Filtering rows", "query(): filters written like a sentence", "New columns with maths",
    "apply(): your own rule", "np.where and setting values with loc", "Sorting with sort_values", "Counting and finding: value_counts, unique and idxmax")
def W(lv, sec, q, starter, sol, e): return dict(lv=lv, ty='code', sec=sec, q=q, starter=starter, sol=sol, e=e)
def F(lv, sec, q, c, fixed, e): return dict(lv=lv, ty='fix', sec=sec, q=q, c=c, fixed=fixed, e=e)
def T(lv, sec, c, e): return dict(lv=lv, ty='type', sec=sec, q="Type exactly what this code prints.", c=c, e=e)
PD = 'import pandas as pd\n'
NP = 'import pandas as pd\nimport numpy as np\n'
ROOMS = '''rooms = pd.DataFrame({
    "room": [101, 102, 103, 104, 105, 106],
    "type": ["Deluxe", "Suite", "Standard", "Deluxe", "Deluxe", "Suite"],
    "rate": [3500, 7200, 2100, 3800, 2300, 6900],
    "nights": [2, 1, 4, 3, 5, 2],
    "rating": [4.5, 4.8, 3.9, 4.1, 3.6, 4.9]
})
'''
R = PD + ROOMS
RN = NP + ROOMS
SALES = PD + 'sales = pd.read_csv("sales_data.csv")\n'
Q = [
 # ---------- Basic ----------
 W(1, LOC, 'Print the `type` and `rate` of the rows with the labels 1 to 3 (both included), using `loc`.', R, R + 'print(rooms.loc[1:3, ["type", "rate"]])', "With `loc`, the end label 3 is included."),
 W(1, ILOC, 'Print the first 2 rows and the first 3 columns of `rooms`, using `iloc`.', R, R + 'print(rooms.iloc[0:2, 0:3])', "`iloc` slices work like lists: the end position is left out."),
 T(1, ILOC, R + 'print(rooms.iloc[-1]["type"], rooms.iloc[0]["rate"])', "`iloc[-1]` is the last row (a Suite) and `iloc[0]` the first (rate 3500)."),
 W(1, FILT, 'Print the rows of `rooms` whose rate is above ₹3,000.', R, R + 'print(rooms[rooms["rate"] > 3000])', "The condition makes a True/False mask; `rooms[mask]` keeps the True rows."),
 W(1, MATH, 'Add a column `bill` = rate × nights and print the `room` and `bill` columns.', R, R + 'rooms["bill"] = rooms["rate"] * rooms["nights"]\nprint(rooms[["room", "bill"]])', "Maths between two columns works row by row."),
 F(1, FILT, "This code should keep the Deluxe rooms with 3 or more nights, but it stops with a ValueError. Fix it.", R + 'print(rooms[(rooms["type"] == "Deluxe") and (rooms["nights"] >= 3)]["room"].tolist())', R + 'print(rooms[(rooms["type"] == "Deluxe") & (rooms["nights"] >= 3)]["room"].tolist())', "Python's `and` cannot combine two masks. Use `&`."),
 T(1, SORT, PD + 'df = pd.DataFrame({"n": ["P", "Q", "R"], "v": [8, 3, 5]})\nprint(df.sort_values("v")["n"].tolist())', "Smallest first: 3 (Q), 5 (R), 8 (P)."),
 W(1, COUNT, 'Print how many rooms there are of each `type`, with `value_counts()`.', R, R + 'print(rooms["type"].value_counts())', "`value_counts()` counts each value and puts the most common first: 3 Deluxe, 2 Suites, 1 Standard."),
 # ---------- Medium ----------
 F(2, LOC, "This code should print the rate of room 104 (`3800`), but it raises a KeyError. Fix it so `loc` can find room 104.", R + 'print(rooms.loc[104, "rate"])', R + 'print(rooms.set_index("room").loc[104, "rate"])', "The labels are 0 to 5, not the room numbers. `set_index(\"room\")` makes the room numbers the labels that `loc` uses."),
 W(2, FILT, 'Print the room numbers of the Suites **or** the rooms rated below 4.0, as a list.', R, R + 'print(rooms[(rooms["type"] == "Suite") | (rooms["rating"] < 4.0)]["room"].tolist())', "`|` keeps a row when either condition is True."),
 W(2, QRY, 'Using `query()`, print the room numbers with a rate under the variable `budget = 4000` and a rating of 4 or more, as a list.', R + 'budget = 4000\n', R + 'budget = 4000\nprint(rooms.query("rate < @budget and rating >= 4")["room"].tolist())', "`@budget` uses the Python variable inside the query text."),
 F(2, APPLY, "This code should label each rating as Good (4 or more) or OK, but it stops with a TypeError. Fix the apply line.", R + 'def label(r):\n    return "Good" if r >= 4 else "OK"\n\nprint(rooms["rating"].apply(label()).tolist())', R + 'def label(r):\n    return "Good" if r >= 4 else "OK"\n\nprint(rooms["rating"].apply(label).tolist())', "Pass the function itself, without brackets. `label()` calls it with no value."),
 T(2, APPLY, R + 'print(rooms["nights"].apply(lambda n: "Long" if n >= 3 else "Short").tolist())', "The lambda runs once for each value: nights 2, 1, 4, 3, 5, 2."),
 W(2, WHERE, 'Add a column `gst` with `np.where`: 18% of the rate for rates above ₹7,000, otherwise 12%. Print the `rate` and `gst` columns.', RN, RN + 'rooms["gst"] = np.where(rooms["rate"] > 7000, rooms["rate"] * 0.18, rooms["rate"] * 0.12)\nprint(rooms[["rate", "gst"]])', "`np.where` picks, row by row, from two calculated columns."),
 T(2, LOC, R + 'print(len(rooms.loc[2:4]), len(rooms.iloc[2:4]))', "`loc` keeps labels 2, 3 and 4; `iloc` keeps positions 2 and 3."),
 W(2, SORT, 'Print the `room` and `rate` of the 3 most expensive rooms, highest first.', R, R + 'print(rooms.sort_values("rate", ascending=False)[["room", "rate"]].head(3))', "Sort largest first, then take the top 3 with `head(3)`."),
 F(2, COUNT, "This code should print the room **number** of the best-rated room (`106`), but it prints the rating. Fix it.", R + 'best = rooms["rating"].max()\nprint(rooms.loc[best, "room"])', R + 'best = rooms["rating"].idxmax()\nprint(rooms.loc[best, "room"])', "`max()` gives the value 4.9; `idxmax()` gives its index label, which `loc` needs."),
 W(2, COUNT, 'Read `sales_data.csv` and print how many different categories there are, then the share of orders from each category with `value_counts(normalize=True)` rounded to 2 decimals.', SALES, SALES + 'print(sales["Category"].nunique())\nprint(sales["Category"].value_counts(normalize=True).round(2))', "`nunique()` counts the different values; `normalize=True` gives shares that add up to 1."),
 # ---------- Challenge (same chapter, combined) ----------
 W(3, WHERE, 'Mark the rooms that need attention: set a new column `flag` to `"Check"` with `loc` for ratings below 4.0, and `"OK"` for the rest. Print the room numbers flagged `"Check"` as a list.', R, R + 'rooms.loc[rooms["rating"] < 4.0, "flag"] = "Check"\nrooms.loc[rooms["rating"] >= 4.0, "flag"] = "OK"\nprint(rooms[rooms["flag"] == "Check"]["room"].tolist())', "`loc[condition, \"col\"] = value` sets values only in the matching rows."),
 W(3, APPLY, 'Write `def discount(row)` that gives 10% off the bill (rate × nights) for 4 or more nights and nothing otherwise, and returns the amount to pay. Add it as `pay` with `apply(..., axis=1)` and print the `room` and `pay` columns.', R, R + 'def discount(row):\n    bill = row["rate"] * row["nights"]\n    if row["nights"] >= 4:\n        return bill * 0.9\n    return bill\n\nrooms["pay"] = rooms.apply(discount, axis=1)\nprint(rooms[["room", "pay"]])', "With `axis=1` the function gets a whole row, so it can use two columns at once."),
 W(3, SORT, 'Sort the rooms by `type` A to Z, and inside each type by `rating`, highest first. Print the `type`, `room` and `rating` columns.', R, R + 'print(rooms.sort_values(["type", "rating"], ascending=[True, False])[["type", "room", "rating"]])', "Give a list of columns and a matching list of directions."),
 T(3, FILT, R + 'cheap = rooms[rooms["rate"].between(2000, 3600)]\nprint(cheap["room"].tolist(), len(cheap))', "`between` includes both ends: rates 3500, 2100 and 2300 qualify."),
 F(3, ILOC, "This code should print the **last 2** room numbers, `[105, 106]`, but it prints `[]`. Fix the slice.", R + 'print(rooms.iloc[-2:0]["room"].tolist())', R + 'print(rooms.iloc[-2:]["room"].tolist())', "A slice from -2 to 0 is empty, because 0 comes before -2. Leave the end out to go to the last row."),
 W(3, QRY, 'Read `sales_data.csv`. Using `query()`, keep the West orders with a profit above 1000, then print how many there are and their total sales.', SALES, SALES + 'big = sales.query("Region == \'West\' and Profit > 1000")\nprint(len(big), big["Sales"].sum())', "Filter once, then use `len()` and `sum()` on the result."),
 W(3, COUNT, 'Read `sales_data.csv`. Print the `Date`, `Category` and `Profit` of the order with the **biggest loss** (the smallest profit).', SALES, SALES + 'print(sales.loc[sales["Profit"].idxmin(), ["Date", "Category", "Profit"]])', "`idxmin()` finds where the smallest profit is; `loc` shows the columns you choose."),
]
