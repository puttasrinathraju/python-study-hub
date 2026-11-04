# Chapter 27: Matplotlib charts. Run with the matching Python (see NOTES.md). Every chart is drawn by hubcharts.py,
# saved as a picture (img/c27-NN.webp) and summarised, so the checks can compare laptop and browser charts.
from chlib import Chapter, write_chapter, run, chart_run, Raw
K = Chapter('c27', 'import matplotlib.pyplot as plt\n')
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
PL = 'import matplotlib.pyplot as plt\n'
SALES = '''import pandas as pd
import matplotlib.pyplot as plt
sales = pd.read_csv("sales_data.csv")
sales["Date"] = pd.to_datetime(sales["Date"])
'''
MONTHLY = SALES + 'monthly = sales.groupby(sales["Date"].dt.to_period("M"))["Sales"].sum()\nmonths = monthly.index.strftime("%b")      # Jan, Feb, ...\n'
WEEK = 'days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]\nchai = [120, 95, 140, 110, 160, 210, 190]      # cups of tea sold\n'
def pic(code, alt):
    """Run chart code and return an <img> for an explainer frame or a figure block."""
    imgs = chart_run(code if 'matplotlib' in code else PL + code, K.name())[3]
    return '<img class="figimg" src="%s" alt="%s" loading="lazy">' % (imgs[0], alt)
STEPS = [WEEK + 'plt.figure(figsize=(7, 3.5))\n', WEEK + 'plt.figure(figsize=(7, 3.5))\nplt.plot(days, chai)\n',
         WEEK + 'plt.figure(figsize=(7, 3.5))\nplt.plot(days, chai, marker="o")\nplt.title("Chai sold this week")\nplt.xlabel("Day")\nplt.ylabel("Cups")\n',
         WEEK + 'plt.figure(figsize=(7, 3.5))\nplt.plot(days, chai, marker="o")\nplt.title("Chai sold this week")\nplt.xlabel("Day")\nplt.ylabel("Cups")\nplt.grid(alpha=0.3)\nplt.tight_layout()\n']
ANAT = pic('''fig, ax = plt.subplots(figsize=(7, 4))
ax.plot([1, 2, 3, 4], [3, 5, 4, 7], marker="o", label="Sales")
ax.set_title("Title"); ax.set_xlabel("x-axis label"); ax.set_ylabel("y-axis label"); ax.legend(loc="lower right")
ax.annotate("a line (an artist)", xy=(2.5, 4.5), xytext=(1.3, 6.4), arrowprops=dict(arrowstyle="->", color="crimson"), color="crimson")
ax.annotate("tick labels", xy=(3, 2.9), xytext=(3.2, 3.3), color="crimson")
ax.text(0.02, 0.96, "AXES: one chart area", transform=ax.transAxes, va="top", color="navy", fontweight="bold")
fig.text(0.01, 0.01, "FIGURE: the whole picture", color="darkgreen", fontweight="bold")
fig.patch.set_edgecolor("darkgreen"); fig.patch.set_linewidth(4)
''', "Parts of a chart: the figure, the axes, the title, the axis labels, the tick labels, the legend and a line")
BOXPIC = pic('''import numpy as np
values = [12, 15, 18, 19, 20, 21, 22, 24, 25, 27, 30, 48]
plt.figure(figsize=(7, 3.6))
plt.boxplot(values, vert=False, widths=0.5)
q1, med, q3 = np.percentile(values, [25, 50, 75])
for x, t in [(q1, "Q1 (25%)"), (med, "median"), (q3, "Q3 (75%)")]:
    plt.annotate(t, xy=(x, 1.25), xytext=(x, 1.42), ha="center", arrowprops=dict(arrowstyle="->"))
plt.annotate("whisker: up to 1.5 x IQR", xy=(13, 1), xytext=(11, 0.62), arrowprops=dict(arrowstyle="->"))
plt.annotate("outlier", xy=(48, 1), xytext=(42, 0.62), arrowprops=dict(arrowstyle="->"), color="crimson")
plt.title("How to read a box plot")
plt.yticks([])
''', "An annotated box plot: the box from Q1 to Q3 with the median line, whiskers, and one outlier dot")
body = [
 {"t": "h", "text": "The 5-step recipe for every chart"},
 {"t": "p", "b": "==Matplotlib== is Python's main charting library: almost every other chart tool, including Seaborn in Part 10, is built on it. You use its `pyplot` part, always imported as `plt`. Every chart follows the same five steps."},
 {"t": "ol", "items": ["**Make the canvas**: `plt.figure(figsize=(width, height))`, in inches.", "**Draw**: `plt.plot(...)`, `plt.bar(...)` and so on.", "**Label everything**: `plt.title()`, `plt.xlabel()`, `plt.ylabel()`, and `plt.legend()` when there are several series.",
   "**Tidy**: `plt.grid(alpha=0.3)` for a light grid and `plt.tight_layout()` so nothing overlaps.", "**Show**: `plt.show()`, or save it with `plt.savefig(\"chart.png\")`."]},
 {"t": "anim", "title": "Building a chart step by step", "frames": [
   {"html": pic(STEPS[0], "An empty canvas"), "c": "**Step 1**: `plt.figure(figsize=(7, 3.5))` makes an empty canvas, 7 inches wide and 3.5 tall."},
   {"html": pic(STEPS[1], "A plain line"), "c": "**Step 2**: `plt.plot(days, chai)` draws a line: the days along the bottom (x), the cups up the side (y)."},
   {"html": pic(STEPS[2], "The line with a title and labels"), "c": "**Step 3**: a title and two axis labels tell the reader what they are looking at. `marker=\"o\"` adds a dot on every day."},
   {"html": pic(STEPS[3], "The finished chart with a light grid"), "c": "**Steps 4 and 5**: a light grid helps reading values, `tight_layout()` keeps labels inside, and `plt.show()` shows it. Done."}]},
 C(WEEK + 'plt.figure(figsize=(7, 3.5))\nplt.plot(days, chai, marker="o")\nplt.title("Chai sold this week")\nplt.xlabel("Day")\nplt.ylabel("Cups")\nplt.grid(alpha=0.3)\nplt.tight_layout()\nplt.show()', "The whole recipe in one cell"),
 {"t": "note", "k": "tip", "b": "On this site the chart appears under your code when you press **Run**. In Jupyter it appears under the cell. In a plain `.py` file, `plt.show()` opens a window."},
 {"t": "fig", "svg": ANAT, "cap": "The words you will meet: the ==figure== is the whole picture, an ==axes== is one chart area inside it, and every drawn thing (line, text, tick) is an ==artist==."},
 {"t": "mm", "title": "Chapter 27 at a glance", "root": "Matplotlib charts", "kids": [
   {"t": "Recipe", "k": ["plt.figure(figsize=...)", "draw", "title, xlabel, ylabel", "grid, tight_layout", "show / savefig"]},
   {"t": "Change over time", "k": ["plt.plot", "marker, linestyle", "color, linewidth", "label + legend"]},
   {"t": "Compare", "k": ["plt.bar, plt.barh", "grouped: shift x", "stacked: bottom="]},
   {"t": "Spread", "k": ["plt.hist(bins=)", "plt.boxplot", "density, cumulative"]},
   {"t": "Relations & shares", "k": ["plt.scatter(c=, cmap=)", "plt.colorbar", "plt.pie(autopct=)"]}]},

 {"t": "h", "text": "Line charts: change over time"},
 {"t": "p", "b": "A ==line chart== joins points in order, so it shows a **trend**: sales month by month, temperature hour by hour. Style the line with these options."},
 {"t": "table", "head": ["Option", "Short form", "Examples"], "rows": [["`color=`", "`c=`", "`\"teal\"`, `\"#E74C3C\"`"], ["`linewidth=`", "`lw=`", "`2`"], ["`linestyle=`", "`ls=`", "`\"-\"` solid, `\"--\"` dashed, `\":\"` dotted, `\"-.\"`"], ["`marker=`", "", "`\"o\"` circle, `\"s\"` square, `\"^\"` triangle"], ["`alpha=`", "", "`0` see-through to `1` solid"], ["`label=`", "", "the name shown in the legend"]]},
 {"t": "p", "b": "The practice file **`sales_data.csv`** has 500 orders from 2024. Group the sales by month first (Chapter 26), then draw them. The next cells start with these lines:"},
 C(MONTHLY + 'print(monthly.head(3))\nprint(list(months[:3]))', "The monthly totals behind the next charts"),
 C('plt.figure(figsize=(8, 4))\nplt.plot(months, monthly.values, marker="o", linestyle="--", color="teal", label="Sales")\nplt.title("Monthly sales, 2024")\nplt.xlabel("Month")\nplt.ylabel("Sales (₹)")\nplt.legend()\nplt.grid(alpha=0.3)\nplt.show()', "A monthly trend", setup=MONTHLY),
 C('elec = sales[sales["Category"] == "Electronics"]\ncloth = sales[sales["Category"] == "Clothing"]\ne = elec.groupby(elec["Date"].dt.to_period("M"))["Sales"].sum()\nc = cloth.groupby(cloth["Date"].dt.to_period("M"))["Sales"].sum()\nplt.figure(figsize=(8, 4))\nplt.plot(months, e.values, marker="o", label="Electronics")\nplt.plot(months, c.values, marker="s", label="Clothing")\nplt.title("Two categories, month by month")\nplt.ylabel("Sales (₹)")\nplt.xticks(rotation=45)\nplt.legend()\nplt.show()', "Two lines and a legend", setup=MONTHLY),
 {"t": "note", "k": "trap", "b": "`plt.legend()` only shows series that have a `label=`. No labels, no legend (and a warning)."},
 PRED('lines = plt.plot([1, 2, 3], [4, 5, 6], [1, 2, 3], [6, 5, 4])\nprint(len(lines))', ["`2`", "`1`", "`3`", "`6`"], 0, "Two x/y pairs in one `plot()` call draw two lines, and `plot()` returns a list of them."),

 {"t": "h", "text": "Bar charts: compare categories"},
 {"t": "p", "b": "A ==bar chart== compares amounts across categories. `plt.bar(names, values)` draws upright bars; `plt.barh(names, values)` draws them across, which is easier to read when names are long or there are many of them. Sort the values first so the biggest stands out."},
 C('cat = sales.groupby("Category")["Sales"].sum().sort_values(ascending=False)\nplt.figure(figsize=(7, 4))\nplt.bar(cat.index, cat.values, color="steelblue", edgecolor="black")\nplt.title("Sales by category")\nplt.ylabel("Sales (₹)")\nplt.show()', "plt.bar: one bar per category", setup=SALES),
 C('reg = sales.groupby("Region")["Sales"].sum().sort_values()\nplt.figure(figsize=(7, 3.5))\nplt.barh(reg.index, reg.values, color="#45B7D1")\nplt.title("Sales by region")\nplt.xlabel("Sales (₹)")\nplt.show()', "plt.barh: sideways bars, biggest at the top", setup=SALES),
 {"t": "p", "b": "To compare **two series** per category, shift their x positions: a ==grouped bar chart==. To show how two parts make a whole, put one on top of the other with `bottom=`: a ==stacked bar chart==."},
 C('import numpy as np\nregions = ["East", "North", "South", "West"]\nelec = [108449, 155740, 188116, 145082]\nfurn = [99621, 153079, 139748, 151228]\nx = np.arange(len(regions))      # 0, 1, 2, 3\nplt.figure(figsize=(7, 4))\nplt.bar(x - 0.2, elec, width=0.4, label="Electronics")\nplt.bar(x + 0.2, furn, width=0.4, label="Furniture")\nplt.xticks(x, regions)\nplt.title("Grouped bars: two categories per region")\nplt.ylabel("Sales (₹)")\nplt.legend()\nplt.show()', "Grouped bars"),
 C('regions = ["East", "North", "South", "West"]\nelec = [108449, 155740, 188116, 145082]\nfurn = [99621, 153079, 139748, 151228]\nplt.figure(figsize=(7, 4))\nplt.bar(regions, elec, label="Electronics")\nplt.bar(regions, furn, bottom=elec, label="Furniture")   # starts where Electronics ends\nplt.title("Stacked bars: the two together")\nplt.ylabel("Sales (₹)")\nplt.legend()\nplt.show()', "Stacked bars with bottom="),
 {"t": "anim", "title": "Grouped bars: shifting the x positions", "frames": [
   {"html": pic('import numpy as np\nx = np.arange(4)\nplt.figure(figsize=(7, 3.4))\nplt.bar(x, [5, 7, 6, 8], width=0.4, label="A")\nplt.xticks(x, ["East", "North", "South", "West"])\nplt.ylim(0, 10)\nplt.legend()\n', "One series at x = 0, 1, 2, 3"), "c": "One series, drawn at x = 0, 1, 2, 3 with `width=0.4`."},
   {"html": pic('import numpy as np\nx = np.arange(4)\nplt.figure(figsize=(7, 3.4))\nplt.bar(x, [5, 7, 6, 8], width=0.4, label="A")\nplt.bar(x, [4, 6, 7, 5], width=0.4, label="B", alpha=0.8)\nplt.xticks(x, ["East", "North", "South", "West"])\nplt.ylim(0, 10)\nplt.legend()\n', "The second series covers the first"), "c": "Draw a second series at the **same** x and it hides the first one."},
   {"html": pic('import numpy as np\nx = np.arange(4)\nplt.figure(figsize=(7, 3.4))\nplt.bar(x - 0.2, [5, 7, 6, 8], width=0.4, label="A")\nplt.bar(x + 0.2, [4, 6, 7, 5], width=0.4, label="B")\nplt.xticks(x, ["East", "North", "South", "West"])\nplt.ylim(0, 10)\nplt.legend()\n', "Side by side after shifting"), "c": "Shift one left by half a bar (`x - 0.2`) and the other right (`x + 0.2`). Now they stand side by side, and `plt.xticks(x, names)` puts the names back in the middle."}]},
 PRED('bars = plt.bar(["A", "B", "C"], [3, 9, 4])\nprint(len(bars), bars[1].get_height())', ["`3 9`", "`3 4`", "`1 9`", "`9 3`"], 0, "`plt.bar` returns the bars. There are 3, and the second one (index 1) is 9 tall."),

 {"t": "h", "text": "Histograms: how values are spread"},
 {"t": "p", "b": "A ==histogram== cuts a number column into ranges (==bins==) and draws how many values fall in each. It shows the **shape** of the data: where most values are, how wide the spread is, and whether one side has a long tail (==skew==)."},
 C('plt.figure(figsize=(7, 4))\nplt.hist(sales["Customer_Age"], bins=15, color="orange", edgecolor="black", alpha=0.7)\nplt.title("Customer age")\nplt.xlabel("Age")\nplt.ylabel("Number of orders")\nplt.show()', "Ages of the customers", setup=SALES),
 {"t": "p", "b": "Most customers are 25 to 45, and there are more older customers than very young ones: the tail is a little longer on the **right**. Order values are much more skewed, because a few big Electronics orders stretch the right side."},
 C('plt.figure(figsize=(7, 4))\nplt.hist(sales["Sales"], bins=20, color="lightblue", edgecolor="black")\nplt.title("Order values: a long right tail")\nplt.xlabel("Sales (₹)")\nplt.ylabel("Orders")\nplt.show()', "A right-skewed column", setup=SALES),
 C('import numpy as np\ncounts, edges, bars = plt.hist([1, 2, 2, 3, 3, 3, 4, 7], bins=3, edgecolor="black")\nprint(counts.tolist())\nprint(edges.round(2).tolist())\nplt.title("What hist() returns")\nplt.show()', "hist() also gives you the counts and the bin edges"),
 {"t": "table", "head": ["Option", "Does"], "rows": [["`bins=15`", "How many bars (or a list of edges)"], ["`density=True`", "Bar heights become shares, so the total area is 1"], ["`cumulative=True`", "Each bar adds up everything before it"], ["`edgecolor=\"black\"`", "Lines between the bars, easier to read"]]},
 {"t": "note", "k": "trap", "b": "A histogram is not a bar chart. Bars **touch**, because the x-axis is a continuous number line. Use `plt.bar` for categories and `plt.hist` for a number column."},

 {"t": "h", "text": "Scatter plots: are two numbers related?"},
 {"t": "p", "b": "A ==scatter plot== draws one dot per row, with one number on each axis. A cloud going up to the right means the two rise together (a positive correlation, Chapter 26). `s=` sets the dot size, `c=` colours the dots by a third column, and `cmap=` picks the colour scale."},
 C('plt.figure(figsize=(7, 4.5))\nplt.scatter(sales["Sales"], sales["Profit"], c=sales["Quantity"], cmap="viridis", s=20, alpha=0.7)\nplt.colorbar(label="Quantity")\nplt.title("Sales vs profit")\nplt.xlabel("Sales (₹)")\nplt.ylabel("Profit (₹)")\nplt.show()', "Sales against profit, coloured by quantity", setup=SALES),
 {"t": "p", "b": "The dots rise to the right: bigger orders usually make more profit (correlation 0.78). The dots below 0 are the orders sold at a loss."},
 PRED('dots = plt.scatter([1, 2, 3, 4], [10, 20, 15, 30])\nprint(len(dots.get_offsets()))', ["`4`", "`1`", "`2`", "`8`"], 0, "A scatter makes one collection of dots; `get_offsets()` holds one (x, y) pair per dot."),

 {"t": "h", "text": "Pie charts: share of a whole"},
 {"t": "p", "b": "A ==pie chart== shows each part's **share of a total**. `autopct=\"%1.1f%%\"` writes the percent on each slice, `startangle=90` starts at the top, and `explode=` pulls a slice out. Use it only for a few slices (about 5); for more, a bar chart is easier to read."},
 C('reg = sales.groupby("Region")["Sales"].sum()\nplt.figure(figsize=(5, 5))\nplt.pie(reg.values, labels=reg.index, autopct="%1.1f%%", startangle=90, explode=[0, 0, 0.08, 0])\nplt.title("Share of sales by region")\nplt.show()', "Four regions, South pulled out", setup=SALES),
 {"t": "note", "k": "tip", "b": "In `\"%1.1f%%\"`, `%1.1f` means a number with 1 decimal and `%%` prints a real `%` sign. `plt.axis(\"equal\")` keeps the pie perfectly round in older Matplotlib versions."},

 {"t": "h", "text": "Box plots: spread and outliers"},
 {"t": "p", "b": "A ==box plot== sums up a whole column in one shape, and is great for **comparing groups**. The box runs from the 25th to the 75th percentile (the ==IQR==), the line inside is the median, the whiskers reach the furthest values within 1.5 × IQR, and dots beyond them are ==outliers==."},
 {"t": "fig", "svg": BOXPIC, "cap": "Reading a box plot. Half the values are inside the box; the dot on the right is an outlier."},
 C('names = ["Clothing", "Electronics", "Furniture", "Groceries"]\ngroups = [sales[sales["Category"] == n]["Sales"] for n in names]\nplt.figure(figsize=(7, 4))\nplt.boxplot(groups, patch_artist=True, showmeans=True)\nplt.xticks([1, 2, 3, 4], names)\nplt.title("Order value by category")\nplt.ylabel("Sales (₹)")\nplt.show()', "One box per category", setup=SALES),
 {"t": "note", "k": "tip", "b": "`patch_artist=True` fills the boxes with colour, `showmeans=True` adds a marker for the mean, and `vert=False` lays the boxes flat. Name the boxes with `plt.xticks([1, 2, 3, 4], names)`: the boxes stand at x = 1, 2, 3 ... (The course notes pass `labels=names`; Matplotlib 3.9 renamed it `tick_labels`.)"},

 {"t": "h", "text": "Which chart for which question"},
 {"t": "table", "head": ["Your question", "Chart", "Function"], "rows": [["How does it change over time?", "Line", "`plt.plot()`"], ["Which category is bigger?", "Bar", "`plt.bar()` / `plt.barh()`"], ["How are the values spread out?", "Histogram", "`plt.hist()`"], ["Are two numbers related?", "Scatter", "`plt.scatter()`"],
   ["What share of the total is each part?", "Pie (few slices)", "`plt.pie()`"], ["How do groups compare, with outliers?", "Box plot", "`plt.boxplot()`"], ["How do many columns relate to each other?", "Heatmap", "`plt.imshow()` (Chapter 28)"]]},
 {"t": "deck", "title": "Chart types in 7 slides", "s": [
   {"big": "Pick the chart from the question.", "b": "Time → line. Categories → bar. Spread → histogram or box. Two numbers → scatter. Shares → pie."},
   {"h": "Line: a trend", "c": PL + 'plt.plot(["Jan", "Feb", "Mar"], [40, 44, 68], marker="o")\nplt.title("Sales trend")\nplt.show()', "o": "", "img": None},
   {"h": "Bar: compare", "items": ["`plt.bar(names, values)`", "`plt.barh(names, values)` for long names", "Sort the values first"]},
   {"h": "Histogram: spread", "items": ["`plt.hist(column, bins=15)`", "Bars touch: it is a number line", "Look for the peak and the tail"]},
   {"h": "Scatter: relationship", "items": ["`plt.scatter(x, y)`", "`c=column, cmap=\"viridis\"` + `plt.colorbar()`", "Up to the right = rise together"]},
   {"h": "Pie and box", "items": ["`plt.pie(values, labels=..., autopct=\"%1.1f%%\")`, few slices", "`plt.boxplot(groups)`: median, IQR, whiskers, outliers"]},
   {"h": "Always", "items": ["A title that says what it shows", "Axis labels with units: `Sales (₹)`", "A legend when there are several series"]}]},

 {"t": "h", "text": "Saving a chart: savefig"},
 {"t": "p", "b": "`plt.savefig(\"name.png\")` saves the chart as a picture, for a report or an email. Call it **before** `plt.show()`, because showing the chart closes it. `dpi=` sets the sharpness and `bbox_inches=\"tight\"` trims the empty border."},
 C('import os\nplt.figure(figsize=(6, 3.5))\nplt.bar(["Q1", "Q2", "Q3", "Q4"], [180, 240, 210, 320])\nplt.title("Quarterly sales")\nplt.savefig("quarterly.png", dpi=150, bbox_inches="tight")\nplt.show()\nprint(os.path.exists("quarterly.png"))', "Save, then show"),
 {"t": "note", "k": "trap", "b": "`plt.show()` then `plt.savefig()` saves an **empty** picture: once a chart is shown, it is finished. Save first."},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("Draw a line chart of `temps = [31, 33, 36, 35, 30]` for the days `[\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\"]` with round markers. Give it the title `Hyderabad this week`, the x label `Day` and the y label `Temperature (°C)`.", "`plt.plot(days, temps, marker=\"o\")`, then `plt.title`, `plt.xlabel`, `plt.ylabel`, `plt.show()`.", 'days = ["Mon", "Tue", "Wed", "Thu", "Fri"]\ntemps = [31, 33, 36, 35, 30]\nplt.plot(days, temps, marker="o")\nplt.title("Hyderabad this week")\nplt.xlabel("Day")\nplt.ylabel("Temperature (°C)")\nplt.show()', "Five points joined in order: a trend over the week.", starter=PL + 'days = ["Mon", "Tue", "Wed", "Thu", "Fri"]\ntemps = [31, 33, 36, 35, 30]\n',
     chart={"kind": "line", "lines": 1, "title": "Hyderabad this week", "xlabel": "Day", "ylabel": True, "xticks": ["Mon", "Tue", "Wed", "Thu", "Fri"]}),
   P("Draw a **horizontal** bar chart of the rooms booked per hotel: `hotels = [\"Taj\", \"Novotel\", \"ITC\", \"Marriott\"]` and `rooms = [42, 35, 58, 47]`. Add a title and an x label.", "`plt.barh(hotels, rooms)`; for barh the numbers run along the x-axis.", 'hotels = ["Taj", "Novotel", "ITC", "Marriott"]\nrooms = [42, 35, 58, 47]\nplt.barh(hotels, rooms, color="teal")\nplt.title("Rooms booked")\nplt.xlabel("Rooms")\nplt.show()', "With `barh`, the categories go up the side and the values along the bottom.", starter=PL + 'hotels = ["Taj", "Novotel", "ITC", "Marriott"]\nrooms = [42, 35, 58, 47]\n',
     chart={"kind": "barh", "bars": 4, "heights": [42, 35, 58, 47], "title": True, "xlabel": True}),
   P("`marks = [35, 42, 48, 55, 58, 61, 63, 67, 70, 72, 75, 78, 81, 88, 93]`. Draw a histogram with **5 bins** and black edges, a title, and both axis labels.", "`plt.hist(marks, bins=5, edgecolor=\"black\")`.", 'marks = [35, 42, 48, 55, 58, 61, 63, 67, 70, 72, 75, 78, 81, 88, 93]\nplt.hist(marks, bins=5, edgecolor="black")\nplt.title("Class marks")\nplt.xlabel("Marks")\nplt.ylabel("Students")\nplt.show()', "Five equal ranges from 35 to 93; each bar counts the students in its range.", starter=PL + 'marks = [35, 42, 48, 55, 58, 61, 63, 67, 70, 72, 75, 78, 81, 88, 93]\n',
     chart={"kind": "hist", "bars": 5, "title": True, "xlabel": True, "ylabel": True}),
   P("Draw a scatter plot of `ad_spend = [10, 15, 20, 25, 30, 35]` (x) against `orders = [120, 150, 210, 230, 290, 310]` (y) with dot size 60. Add a title and both axis labels.", "`plt.scatter(ad_spend, orders, s=60)`.", 'ad_spend = [10, 15, 20, 25, 30, 35]\norders = [120, 150, 210, 230, 290, 310]\nplt.scatter(ad_spend, orders, s=60)\nplt.title("Ads vs orders")\nplt.xlabel("Ad spend (₹ thousand)")\nplt.ylabel("Orders")\nplt.show()', "The dots climb to the right: more ad spend, more orders.", starter=PL + 'ad_spend = [10, 15, 20, 25, 30, 35]\norders = [120, 150, 210, 230, 290, 310]\n',
     chart={"kind": "scatter", "points": 6, "title": True, "xlabel": True, "ylabel": True}),
   P("Draw a pie chart of the payment modes `[\"UPI\", \"Card\", \"Cash\"]` with the counts `[55, 30, 15]`. Show the percent with 1 decimal on each slice and add a title.", "`plt.pie(counts, labels=modes, autopct=\"%1.1f%%\")`.", 'modes = ["UPI", "Card", "Cash"]\ncounts = [55, 30, 15]\nplt.pie(counts, labels=modes, autopct="%1.1f%%", startangle=90)\nplt.title("How customers pay")\nplt.show()', "Three slices: few enough for a pie chart to be clear.", starter=PL + 'modes = ["UPI", "Card", "Cash"]\ncounts = [55, 30, 15]\n',
     chart={"kind": "pie", "wedges": 3, "title": True, "text_has": "55.0%"})]},

 {"t": "h", "text": "Practice with real data: charts of a year of sales"},
 {"t": "p", "b": "Every task starts by reading **`sales_data.csv`**, so you can do them in any order."},
 {"t": "prac", "items": [
   P("Draw a bar chart of the **total profit** of each category, largest first. Title it `Profit by category` and label the y-axis.", "`groupby(\"Category\")[\"Profit\"].sum().sort_values(ascending=False)`, then `plt.bar(s.index, s.values)`.", SALES + 'profit = sales.groupby("Category")["Profit"].sum().sort_values(ascending=False)\nplt.bar(profit.index, profit.values, color="seagreen")\nplt.title("Profit by category")\nplt.ylabel("Profit (₹)")\nplt.show()', "Furniture makes the most profit even though Electronics sells more.", starter=SALES,
     chart={"kind": "bar", "bars": 4, "title": "Profit by category", "ylabel": True, "xticks": ["Furniture", "Electronics", "Clothing", "Groceries"]}),
   P("Draw the **number of orders** in each month as a line with markers. Use the short month names on the x-axis and add a title and both labels.", "`counts = sales.groupby(sales[\"Date\"].dt.to_period(\"M\")).size()` and `counts.index.strftime(\"%b\")`.", SALES + 'counts = sales.groupby(sales["Date"].dt.to_period("M")).size()\nplt.plot(counts.index.strftime("%b"), counts.values, marker="o")\nplt.title("Orders per month")\nplt.xlabel("Month")\nplt.ylabel("Orders")\nplt.show()', "October and November have the most orders: the festival season.", starter=SALES,
     chart={"kind": "line", "lines": 1, "title": True, "xlabel": True, "ylabel": True, "xticks": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}),
   P("Draw a histogram of `Satisfaction_Score` with 8 bins. Then print the mean score rounded to 2 decimals.", "`plt.hist(sales[\"Satisfaction_Score\"], bins=8)`; `round(sales[\"Satisfaction_Score\"].mean(), 2)`.", SALES + 'plt.hist(sales["Satisfaction_Score"], bins=8, edgecolor="black")\nplt.title("Satisfaction scores")\nplt.xlabel("Score (1 to 5)")\nplt.ylabel("Orders")\nplt.show()\nprint(round(sales["Satisfaction_Score"].mean(), 2))', "Most customers score 3.5 to 4.5; the printed mean confirms it.", starter=SALES,
     chart={"kind": "hist", "bars": 8, "title": True, "xlabel": True, "ylabel": True}),
   P("Draw one box plot per region of the **profit** of the orders, in the order East, North, South, West, with the region names under the boxes and a title.", "Make `groups = [sales[sales[\"Region\"] == r][\"Profit\"] for r in names]`, then `plt.boxplot(groups)` and `plt.xticks([1, 2, 3, 4], names)`.", SALES + 'names = ["East", "North", "South", "West"]\ngroups = [sales[sales["Region"] == r]["Profit"] for r in names]\nplt.boxplot(groups)\nplt.xticks([1, 2, 3, 4], names)\nplt.title("Profit per order by region")\nplt.ylabel("Profit (₹)")\nplt.show()', "The regions look alike: similar medians, and outliers above the boxes from big orders.", starter=SALES,
     chart={"kind": "box", "boxes": 4, "title": True, "xticks": ["East", "North", "South", "West"]})]}
]
# the deck's chart slide: run it so the slide has a real picture (decks show code; the picture goes in the slide body)
body_deck = [b for b in body if b["t"] == "deck"][0]
s1 = body_deck["s"][1]; _, summ, figs, imgs = chart_run(s1["c"], K.name()); s1["sum"] = summ; s1.pop("img"); s1["svg"] = '<img class="figimg" src="%s" alt="A small line chart" loading="lazy">' % imgs[0]
ch = {"id": "mpl1", "part": 9, "title": "Matplotlib charts: line, bar, histogram, scatter, pie and box", "nav": "Matplotlib charts", "time": "50 min", "lvl": "Beginner",
 "keys": "matplotlib pyplot plt chart graph plot figure figsize title xlabel ylabel legend grid tight_layout show savefig dpi line plot marker linestyle color linewidth alpha bar barh grouped stacked bottom width histogram hist bins density cumulative skew scatter s c cmap colorbar pie autopct startangle explode boxplot box plot iqr median whisker outlier patch_artist showmeans which chart",
 "lead": "Turn tables into pictures. Learn the 5-step recipe that every chart follows, then draw the six charts analysts use most (line, bar, histogram, scatter, pie and box plot) and learn which one answers which question.",
 "goals": ["Follow the 5-step recipe: figure, draw, label, tidy, show", "Draw trends with `plt.plot()` and compare categories with `plt.bar()` / `plt.barh()`, also grouped and stacked", "Show spread with `plt.hist()` and `plt.boxplot()`, and relationships with `plt.scatter()`", "Show shares with `plt.pie()`, and pick the right chart for a question", "Save a chart with `plt.savefig()`"],
 "src": ["Course notebook matplotlib_exp.ipynb (plot, bar, barh, scatter + colorbar, figure, title, labels, fontsize, legend)", "Course PDF: Matplotlib Notes (line, bar, histogram, scatter, pie, box plot, which chart)", "Matplotlib documentation"],
 "body": body,
 "take": ["Every chart: `plt.figure(figsize=...)`, draw, `title` / `xlabel` / `ylabel` (and `legend`), `grid` / `tight_layout`, then `show()` or `savefig()`.", "Line for change over time; bar / barh for categories (grouped: shift x; stacked: `bottom=`).", "Histogram (`bins=`) and box plot (median, IQR, whiskers, outliers) for spread; scatter (`s=`, `c=`, `cmap=`, `colorbar`) for two numbers.", "Pie only for a few shares: `autopct=\"%1.1f%%\"`, `startangle`, `explode`.", "Save before you show: `plt.savefig(\"chart.png\", dpi=150, bbox_inches=\"tight\")`."],
 "quiz": [
   Q("Which chart answers \"how did sales change month by month\"?", ["Pie", "Line", "Histogram", "Box plot"], 1, "Change over time is a trend: a line chart."),
   Q("What does this print?", ["`3`", "`1`", "`2`", "`0`"], 0, "`plt.bar` draws one bar per value and returns them.", PL + 'bars = plt.bar(["Pune", "Goa", "Kochi"], [12, 30, 18])\nprint(len(bars))'),
   Q("You have 12 product names, some of them long. Which chart is easiest to read?", ["`plt.pie()`", "`plt.barh()`", "`plt.hist()`", "`plt.scatter()`"], 1, "Horizontal bars leave room for long names; 12 slices would make a messy pie."),
   Q("What is the difference between `plt.hist()` and `plt.bar()`?", ["None", "hist counts values in ranges of a number column; bar draws given heights for categories", "hist is sideways", "bar needs bins"], 1, "A histogram works out the bars from raw numbers; a bar chart draws the numbers you give it."),
   Q("What does this print?", ["`[2.0, 3.0, 1.0]`", "`[1.0, 2.0, 3.0]`", "`[3.0, 3.0]`", "`[2.0, 4.0]`"], 0, "3 equal ranges of width 2: 1 to 3 holds 1 and 2, 3 to 5 holds 3, 4 and 4, and 5 to 7 holds 7.", PL + 'counts, edges, bars = plt.hist([1, 2, 3, 4, 4, 7], bins=3)\nprint(counts.tolist())'),
   Q("In a box plot, what does the line inside the box show?", ["The mean", "The median", "The maximum", "An outlier"], 1, "The box is Q1 to Q3 and the line in it is the median (Q2)."),
   Q("Your legend does not appear after `plt.legend()`. Why?", ["The chart has no title", "No series has a `label=`", "Legends only work with bars", "You need `plt.grid()`"], 1, "The legend lists the labels you gave the series."),
   Q("Which line writes the percent with 1 decimal on every pie slice?", ["`plt.pie(v, percent=1)`", "`plt.pie(v, autopct=\"%1.1f%%\")`", "`plt.pie(v, labels=\"%\")`", "`plt.pie(v, fmt=\".1f\")`"], 1, "`autopct` takes a format; `%%` prints the % sign."),
   Q("What does `c=sales[\"Quantity\"], cmap=\"viridis\"` do in `plt.scatter()`?", ["Sets the dot size", "Colours each dot by its quantity, using the viridis colour scale", "Draws a line", "Removes outliers"], 1, "`plt.colorbar()` then shows which colour means which quantity."),
   Q("Why can `plt.savefig()` after `plt.show()` give an empty picture?", ["savefig is slow", "show() finishes and closes the chart, so there is nothing left to save", "PNG is not supported", "It needs dpi"], 1, "Save first, then show.")],
 "cards": [["The 5-step recipe", "figure(figsize) → draw → title/xlabel/ylabel (+ legend) → grid/tight_layout → show() or savefig()."], ["Figure vs axes", "Figure: the whole picture. Axes: one chart area inside it."], ["Line chart options", "`marker=\"o\"`, `linestyle=\"--\"`, `color=`, `linewidth=`, `alpha=`, `label=`"], ["`plt.bar` vs `plt.barh`", "Upright bars vs sideways bars (good for long names)."], ["Grouped bars", "Shift each series: `plt.bar(x - 0.2, a, width=0.4)` and `plt.bar(x + 0.2, b, width=0.4)`, then `plt.xticks(x, names)`."], ["Stacked bars", "`plt.bar(names, b, bottom=a)` starts the second series where the first ends."], ["What does `bins=` set?", "How many ranges (bars) a histogram cuts the numbers into."], ["Right-skewed", "Most values on the left, a long tail to the right (a few very big values)."], ["Colour a scatter by a column", "`plt.scatter(x, y, c=col, cmap=\"viridis\")` + `plt.colorbar(label=...)`"], ["Pie percent labels", "`autopct=\"%1.1f%%\"`; keep it to about 5 slices."], ["Parts of a box plot", "Box: Q1 to Q3 (IQR). Line: median. Whiskers: to 1.5 × IQR. Dots: outliers."], ["Which chart for spread?", "Histogram for one column; box plot to compare groups."], ["Save a chart", "`plt.savefig(\"c.png\", dpi=150, bbox_inches=\"tight\")` before `plt.show()`."]],
 "cheat": [["import matplotlib.pyplot as plt", "Load pyplot"], ["plt.figure(figsize=(8, 4))", "A canvas 8 by 4 inches"], ["plt.plot(x, y, marker='o', ls='--', label='A')", "Line chart"], ["plt.bar(names, values)  plt.barh(names, values)", "Bars up / across"], ["plt.bar(x - 0.2, a, width=0.4)", "Grouped bars"], ["plt.bar(names, b, bottom=a)", "Stacked bars"], ["plt.hist(col, bins=15, edgecolor='black')", "Histogram"], ["plt.scatter(x, y, s=20, c=col, cmap='viridis')", "Scatter, coloured by a column"], ["plt.colorbar(label='Quantity')", "Colour scale"], ["plt.pie(v, labels=n, autopct='%1.1f%%', startangle=90)", "Pie with percents"], ["plt.boxplot(groups); plt.xticks([1, 2], names)", "Box plots"], ["plt.title()  plt.xlabel()  plt.ylabel()", "Labels"], ["plt.legend()  plt.grid(alpha=0.3)", "Legend, light grid"], ["plt.xticks(rotation=45)", "Tilt long labels"], ["plt.tight_layout()", "Stop overlaps"], ["plt.savefig('c.png', dpi=150, bbox_inches='tight')", "Save (before show)"]]
}
poster = {"title": "Matplotlib Charts", "sub": "Six charts, one recipe.", "mods": [
  {"title": "The recipe", "sub": "Every chart, every time", "cards": [
    {"h": "Five steps", "items": ["`plt.figure(figsize=(8, 4))`", "`plt.plot(...)` / `bar` / `hist` / `scatter` / `pie` / `boxplot`", "`plt.title()`, `plt.xlabel()`, `plt.ylabel()`, `plt.legend()`", "`plt.grid(alpha=0.3)`, `plt.tight_layout()`", "`plt.show()` or `plt.savefig()` (save first)"]},
    {"h": "What it returns", "c": PL + 'bars = plt.bar(["A", "B"], [3, 5])\nprint(len(bars), bars[1].get_height())', "o": run(PL + 'bars = plt.bar(["A", "B"], [3, 5])\nprint(len(bars), bars[1].get_height())')},
    {"h": "Watch out", "span": 1, "rules": [["trap", "plt.legend() with no label=", "no legend"], ["trap", "show() then savefig()", "empty picture"], ["tip", "plt.barh()", "long names"], ["acc", "plt.hist vs plt.bar", "numbers vs categories"]]}]},
  {"title": "Which chart?", "sub": "Start from the question", "cards": [
    {"h": "Line", "svg": '<img class="figimg" src="%s" alt="line chart">' % chart_run(PL + 'plt.figure(figsize=(4, 2.4))\nplt.plot(["J", "F", "M", "A"], [3, 4, 6, 5], marker="o")\nplt.title("Trend")\nplt.tight_layout()', K.name())[3][0]},
    {"h": "Histogram", "svg": '<img class="figimg" src="%s" alt="histogram">' % chart_run(PL + 'plt.figure(figsize=(4, 2.4))\nplt.hist([1, 2, 2, 3, 3, 3, 4, 4, 5, 7], bins=6, edgecolor="black")\nplt.title("Spread")\nplt.tight_layout()', K.name())[3][0]}],
   "table": {"head": ["Question", "Chart"], "rows": [["change over time", "`plt.plot`"], ["compare categories", "`plt.bar` / `plt.barh`"], ["spread of one column", "`plt.hist`"], ["two numbers", "`plt.scatter`"], ["share of a whole", "`plt.pie` (few slices)"], ["groups and outliers", "`plt.boxplot`"]]}}]}
write_chapter('27_mpl1.js', ch, poster)
