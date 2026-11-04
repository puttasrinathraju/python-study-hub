# Part 9 overview (Matplotlib): writes hub2/ov_9.js and SHEETS[9] in hub2/sheets.js. Run with the matching Python.
import os, re
from chlib import Chapter, js, run, HUB, chart_run
K = Chapter('ov9', 'import matplotlib.pyplot as plt\n')
P, Q = K.P, K.Q
PL = 'import matplotlib.pyplot as plt\n'
def D(t, d, code, go):
    code = K.full(code); return {"t": t, "d": d, "c": code, "o": run(code), "go": go}
def VS(title, head, rows, code, rule):
    code = K.full(code); b = K.C(code); return {"t": "vs", "title": title, "head": head, "rows": rows, "c": b["c"], "o": b["o"], "rule": rule}
SALES = 'import pandas as pd\nimport matplotlib.pyplot as plt\nsales = pd.read_csv("sales_data.csv")\nsales["Date"] = pd.to_datetime(sales["Date"])\n'
body = [
 {"t": "h", "text": "Mind map of Part 9"},
 {"t": "mm", "title": "Part 9 at a glance", "root": "Part 9: Matplotlib", "hint": "Tap a branch to open that chapter", "kids": [
   {"t": "27. Charts", "go": "mpl1", "k": ["5-step recipe", "plot: trends", "bar / barh: compare", "hist / boxplot: spread", "scatter: relations", "pie: shares", "savefig"]},
   {"t": "28. Layouts & style", "go": "mpl2", "k": ["fig, ax = plt.subplots()", "subplots grid, suptitle", "imshow heatmap", "styles, legends, spines", "bar_label, annotate", "twinx, polyfit, inset"]}]},
 {"t": "h", "text": "Key definitions"},
 {"t": "defs", "items": [
   D("Matplotlib", "Python's main charting library. Use its `pyplot` part, imported as `plt`.", 'print(plt.__name__)', "mpl1"),
   D("Figure", "The whole picture: the canvas that holds one or more charts. `figsize` is its size in inches.", 'fig = plt.figure(figsize=(8, 4))\nprint(fig.get_size_inches().tolist())\nplt.close()', "mpl1"),
   D("Axes", "One chart area inside a figure, with its own x-axis, y-axis and title.", 'fig, ax = plt.subplots()\nprint(type(ax).__name__)\nplt.close()', "mpl2"),
   D("Artist", "Anything drawn on a figure: lines, bars, text, ticks.", 'lines = plt.plot([1, 2], [3, 4])\nprint(type(lines[0]).__name__)\nplt.close()', "mpl1"),
   D("Histogram", "Counts how many values fall into each range (bin) of a number column. Its bars touch.", 'counts, edges, bars = plt.hist([1, 2, 2, 3, 3, 3], bins=3)\nprint(counts.tolist())\nplt.close()', "mpl1"),
   D("Bins", "The ranges a histogram cuts the numbers into. `bins=5` makes 5 equal ranges.", 'counts, edges, bars = plt.hist([0, 10], bins=5)\nprint(edges.tolist())\nplt.close()', "mpl1"),
   D("Scatter plot", "One dot per row with one number on each axis: shows whether two numbers are related.", 'dots = plt.scatter([1, 2, 3], [4, 5, 6])\nprint(len(dots.get_offsets()))\nplt.close()', "mpl1"),
   D("Colormap (cmap)", "A colour scale that turns numbers into colours, like `viridis` or `coolwarm`.", 'print(plt.get_cmap("viridis").name)', "mpl1"),
   D("Box plot", "Median, quartiles (the box), whiskers and outlier dots of a column, often one per group.", 'parts = plt.boxplot([[1, 2, 3, 4, 20]])\nprint(len(parts["boxes"]), len(parts["fliers"][0].get_xdata()))\nplt.close()', "mpl1"),
   D("IQR", "Interquartile range: Q3 − Q1, the width of the box. Values beyond 1.5 × IQR from the box are outliers.", 'import numpy as np\nq1, q3 = np.percentile([2, 4, 6, 8, 10], [25, 75])\nprint(q3 - q1)', "mpl1"),
   D("subplots", "`plt.subplots(rows, cols)` gives a figure and an array of axes.", 'fig, axes = plt.subplots(2, 2)\nprint(axes.shape)\nplt.close()', "mpl2"),
   D("Spines", "The four border lines of an axes; hide the top and right ones for a clean look.", 'fig, ax = plt.subplots()\nprint(sorted(ax.spines.keys()))\nplt.close()', "mpl2"),
   D("twinx", "A second axes sharing the x-axis, with its own y-axis on the right, for a second unit.", 'fig, ax = plt.subplots()\nax2 = ax.twinx()\nprint(len(fig.axes))\nplt.close()', "mpl2"),
   D("Trend line", "The straight line that best fits a scatter, from `np.polyfit(x, y, 1)` (slope, intercept).", 'import numpy as np\nprint(np.polyfit([1, 2, 3], [5, 7, 9], 1).round(2))', "mpl2")]},
 {"t": "h", "text": "The big comparison tables"},
 {"t": "table", "master": True, "title": "Which chart for which question", "head": ["Question", "Chart", "Code", "Watch out"], "rows": [
   ["How does it change over time?", "Line", "`plt.plot(x, y, marker=\"o\")`", "Keep the x values in time order"], ["Which category is bigger?", "Bar / barh", "`plt.bar(names, values)`", "Sort the bars; barh for long names"], ["How are values spread?", "Histogram", "`plt.hist(col, bins=15)`", "Try a few bin counts"],
   ["Are two numbers related?", "Scatter", "`plt.scatter(x, y, c=z, cmap=\"viridis\")`", "Correlation is not cause"], ["What share of the whole?", "Pie", "`plt.pie(v, labels=n, autopct=\"%1.1f%%\")`", "About 5 slices at most"], ["How do groups compare, with outliers?", "Box plot", "`plt.boxplot(groups)`", "Name the boxes with xticks"],
   ["How do many columns relate?", "Heatmap", "`plt.imshow(corr, cmap=\"coolwarm\", vmin=-1, vmax=1)`", "Fix vmin/vmax so 0 is the middle"]]},
 {"t": "table", "master": True, "title": "Quick way and object way", "head": ["Job", "plt. (quick)", "ax. (object)"], "rows": [
   ["Make the chart", "`plt.figure(figsize=(8, 4))`", "`fig, ax = plt.subplots(figsize=(8, 4))`"], ["Draw", "`plt.plot(...)`", "`ax.plot(...)`"], ["Title / labels", "`plt.title()`, `plt.xlabel()`", "`ax.set_title()`, `ax.set_xlabel()`"],
   ["Tick labels", "`plt.xticks(rotation=45)`", "`ax.tick_params(axis=\"x\", rotation=45)`"], ["Limits", "`plt.ylim(0, 100)`", "`ax.set_ylim(0, 100)`"], ["Several charts", "`plt.subplot(1, 2, 1)` (counts from 1)", "`fig, axes = plt.subplots(1, 2)`; `axes[0]` (counts from 0)"]]},
 {"t": "table", "master": True, "title": "Finishing touches", "head": ["I want", "Code"], "rows": [
   ["One title over all charts", "`fig.suptitle(\"...\")`"], ["No overlapping labels", "`plt.tight_layout()`"], ["Values on bars", "`ax.bar_label(bars)`"], ["An arrow to the peak", "`ax.annotate(\"Peak\", xy=(x, y), xytext=(x2, y2), arrowprops=dict(arrowstyle=\"->\"))`"],
   ["A rupee axis", "`ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, p: f\"₹{v:,.0f}\"))`"], ["Clean borders", "`ax.spines[\"top\"].set_visible(False)`"], ["A second unit", "`ax2 = ax.twinx()`"], ["A trend line", "`slope, intercept = np.polyfit(x, y, 1)`"], ["A sharp file", "`plt.savefig(\"c.png\", dpi=300, bbox_inches=\"tight\")` before `show()`"]]},
 {"t": "h", "text": "Don't mix these up"},
 VS("plt.bar vs plt.hist", ["", "plt.bar(names, heights)", "plt.hist(values, bins)"], [["You give it", "The heights you worked out", "Raw numbers; it counts them"], ["x-axis", "Categories", "A number line"], ["Bars", "Have gaps", "Touch"]],
    'bars = plt.bar(["A", "B"], [3, 5])\ncounts, edges, patches = plt.hist([1, 1, 2], bins=2)\nprint(len(bars), counts.tolist())\nplt.close()', "Categories → `bar`. One number column → `hist`."),
 VS("plt.plot vs plt.scatter", ["", "plt.plot(x, y)", "plt.scatter(x, y)"], [["Draws", "A line joining the points in order", "Separate dots"], ["Use it for", "Change over time", "The link between two numbers"], ["Order of rows", "Matters", "Does not matter"]],
    'lines = plt.plot([1, 2, 3], [2, 4, 3])\ndots = plt.scatter([1, 2, 3], [2, 4, 3])\nprint(len(lines), len(dots.get_offsets()))\nplt.close()', "Time on the x-axis? Line. Two measures of the same rows? Scatter."),
 VS("plt.title vs ax.set_title", ["", "plt.title(\"T\")", "ax.set_title(\"T\")"], [["Works on", "The current chart", "The axes you name"], ["In a grid of charts", "Easy to label the wrong one", "Clear"], ["Common error", "", "`ax.title(\"T\")`: TypeError"]],
    'fig, axes = plt.subplots(1, 2)\naxes[1].set_title("Right")\nprint(repr(axes[0].get_title()), axes[1].get_title())\nplt.close()', "In a grid, always use `ax.set_title()`."),
 VS("plt.subplot vs plt.subplots", ["", "plt.subplot(1, 2, 1)", "fig, axes = plt.subplots(1, 2)"], [["Makes", "One chart at a time", "All the charts at once"], ["Counts from", "1", "0 (`axes[0]`)"], ["Returns", "One axes", "The figure and an array of axes"]],
    'fig, axes = plt.subplots(1, 2)\nprint(len(axes))\nplt.close()', "Use `plt.subplots` for dashboards: you get every axes by name."),
 VS("suptitle vs set_title", ["", "fig.suptitle()", "ax.set_title()"], [["Belongs to", "The whole figure", "One chart"], ["How many", "One per figure", "One per axes"]],
    'fig, axes = plt.subplots(1, 2)\nfig.suptitle("Dashboard")\naxes[0].set_title("Sales")\nprint(fig.get_suptitle(), axes[0].get_title())\nplt.close()', "The figure has a supertitle; each chart has its own title."),
 VS("savefig before show, not after", ["", "savefig() then show()", "show() then savefig()"], [["The file", "[[ok:The chart]]", "[[no:An empty picture]]"], ["Why", "The chart still exists", "show() finished the chart"]],
    'import os\nplt.bar(["A", "B"], [3, 5])\nplt.savefig("ok.png")\nplt.close()\nprint(os.path.exists("ok.png"))', "Save first. Then show."),
 {"t": "h", "text": "Try it yourself"},
 {"t": "p", "b": "Charts need Matplotlib and Pandas, which load the first time you press **Run** (about 10 to 20 seconds). The checker looks at your chart, not the pixels: the chart type, the counts, the titles and labels."},
 {"t": "prac", "items": [
   P("From `sales_data.csv`, draw the **average order value** per category as sorted horizontal bars (biggest at the top), with a title and an x label.", "`groupby(\"Category\")[\"Sales\"].mean().sort_values()`, then `plt.barh(avg.index, avg.values)`.", SALES + 'avg = sales.groupby("Category")["Sales"].mean().sort_values()\nplt.barh(avg.index, avg.values)\nplt.title("Average order value")\nplt.xlabel("Sales (₹)")\nplt.show()', "Sorting small to large puts the biggest bar on top in a `barh` chart.", starter=SALES,
     chart={"kind": "barh", "bars": 4, "title": True, "xlabel": True, "yticks": ["Groceries", "Clothing", "Furniture", "Electronics"]}),
   P("Make a 1 × 2 figure: a histogram of `Customer_Age` with 12 bins (left) and a scatter of `Sales` against `Profit` (right), each with a title, and the figure title `Customers and orders`.", "`fig, axes = plt.subplots(1, 2, figsize=(10, 4))`.", SALES + 'fig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].hist(sales["Customer_Age"], bins=12)\naxes[0].set_title("Customer age")\naxes[1].scatter(sales["Sales"], sales["Profit"], s=8)\naxes[1].set_title("Sales vs profit")\nfig.suptitle("Customers and orders")\nplt.tight_layout()\nplt.show()', "One figure, two questions: who buys, and do big orders pay.", starter=SALES,
     chart={"axes": 2, "suptitle": True, "ax": [{"kind": "hist", "bars": 12, "title": True}, {"kind": "scatter", "points": 500, "title": True}]}),
   P("Draw the monthly total sales as a line, mark the best month with `ax.annotate` and an arrow, and hide the top and right spines.", "Group by `dt.to_period(\"M\")`, `best = monthly.values.argmax()`.", SALES + 'monthly = sales.groupby(sales["Date"].dt.to_period("M"))["Sales"].sum()\nbest = monthly.values.argmax()\nfig, ax = plt.subplots(figsize=(8, 4))\nax.plot(monthly.index.strftime("%b"), monthly.values, marker="o")\nax.annotate("Best month", xy=(best, monthly.values[best]), xytext=(best - 4, monthly.values[best]), arrowprops=dict(arrowstyle="->"))\nax.spines["top"].set_visible(False)\nax.spines["right"].set_visible(False)\nax.set_title("Monthly sales")\nplt.show()', "A clean chart with one clear message: November.", starter=SALES,
     chart={"kind": ["line", "annotate"], "lines": 1, "title": True, "spines": {"top": False, "right": False}})]}
]
ov = {"part": 9, "title": "Part 9 overview: Matplotlib", "nav": "Part 9 overview", "time": "25 min",
 "keys": "matplotlib pyplot plt chart figure axes artist figsize line bar barh histogram bins scatter cmap colorbar pie autopct box plot iqr outlier subplots suptitle heatmap imshow spines legend style twinx polyfit trend inset savefig",
 "lead": "Both Matplotlib chapters on one page: which chart answers which question, the quick way and the object way side by side, the finishing touches, and the mix-ups that spoil a chart (`bar` vs `hist`, `plot` vs `scatter`, `savefig` after `show`).",
 "five": ["Every chart: `plt.figure(figsize=...)` (or `fig, ax = plt.subplots()`), draw, label (title, x, y, legend), tidy (`grid`, `tight_layout`), then `show()` or `savefig()`.",
          "Pick the chart from the question: line for time, bar for categories, histogram or box plot for spread, scatter for two numbers, pie for a few shares, heatmap for many correlations.",
          "The ==object way== names every chart: `fig, axes = plt.subplots(2, 2)`, `axes[0, 1].bar(...)`, `ax.set_title(...)`, and `fig.suptitle(...)` over them all.",
          "Clean charts get read: sorted bars, labels with units, a light grid, no top/right spines, `bar_label` for exact numbers and `annotate` for the one point that matters.",
          "Extras: `twinx()` for a second unit, `np.polyfit(x, y, 1)` for a trend line and R², `inset_axes` to zoom, `rcParams` for one look everywhere."],
 "body": body,
 "quiz": [
   Q("Which chart shows how monthly sales changed over the year?", ["Pie", "Line", "Box plot", "Heatmap"], 1, "Change over time: a line."),
   Q("What does this print?", ["`(1, 3)`", "`(3,)`", "`3`", "`(3, 1)`"], 1, "With one row, `axes` is a 1D array of 3 charts.", PL + 'fig, axes = plt.subplots(1, 3)\nprint(axes.shape)\nplt.close()'),
   Q("Your x-axis has numbers on a continuous scale and the bars touch. Which chart is it?", ["Bar", "Histogram", "Pie", "Scatter"], 1, "Histogram bars touch because the x-axis is a number line."),
   Q("Which line labels the y-axis of `ax`?", ["`ax.ylabel(\"Sales\")`", "`ax.set_ylabel(\"Sales\")`", "`plt.ax.ylabel()`", "`ax.label_y(\"Sales\")`"], 1, "Axes methods start with `set_`."),
   Q("What does this print?", ["`2`", "`3`", "`1`", "`5`"], 0, "One `plt.bar` call with two names draws two bars.", PL + 'bars = plt.bar(["Pune", "Goa"], [3, 5])\nprint(len(bars))\nplt.close()'),
   Q("What does a box plot's box show?", ["The mean ± 1", "The middle half of the values: Q1 to Q3", "Every value", "Only the outliers"], 1, "The box is the IQR; the line inside is the median."),
   Q("How many slices are too many for a pie chart?", ["More than 2", "More than about 5", "More than 20", "There is no limit"], 1, "With many slices, a sorted bar chart is easier to read."),
   Q("Why use `vmin=-1, vmax=1` in a correlation heatmap?", ["To hide values", "So the colours always mean the same correlation, with 0 in the middle", "To round values", "It is required"], 1, "Otherwise the scale stretches to this table's smallest and largest value."),
   Q("What does `ax2 = ax1.twinx()` give you?", ["A copy of the chart", "A second y-axis on the right that shares the x-axis", "A second figure", "A legend"], 1, "Use it for a second unit, like orders next to rupees."),
   Q("What does this print?", ["`[3. 2.]`", "`[2. 3.]`", "`[3. 1.]`", "`[1. 3.]`"], 0, "y = 3x + 2: slope 3, intercept 2.", 'import numpy as np\nprint(np.polyfit([0, 1, 2], [2, 5, 8], 1).round(2))'),
   Q("Which order saves a picture of the chart?", ["`plt.show()` then `plt.savefig()`", "`plt.savefig()` then `plt.show()`", "Either", "`plt.close()` then `plt.savefig()`"], 1, "`show()` finishes the chart; save first.")],
 "cards": [["The 5-step recipe", "figure → draw → label → tidy → show / savefig"], ["Figure vs axes vs artist", "Whole picture / one chart area / anything drawn"], ["`bar` vs `hist`", "bar: heights you give for categories. hist: counts it works out for a number column."], ["`plot` vs `scatter`", "plot joins points in order (time). scatter draws separate dots (two numbers)."], ["Grouped and stacked bars", "Grouped: shift x by ± width/2. Stacked: `bottom=` the first series."], ["Reading a box plot", "Box: Q1 to Q3. Line: median. Whiskers: 1.5 × IQR. Dots: outliers."], ["A grid of charts", "`fig, axes = plt.subplots(2, 2)`; `axes[row, col]`; `fig.suptitle()`; `plt.tight_layout()`"], ["Heatmap", "`imshow(corr, cmap=\"coolwarm\", vmin=-1, vmax=1)` + `colorbar()` + names on ticks + `text` per cell"], ["Clean style", "Hide top/right spines, light grid behind, sorted bars, labels with units."], ["Values and arrows", "`ax.bar_label(bars)`; `ax.annotate(\"Peak\", xy=..., xytext=..., arrowprops=...)`"], ["Second unit", "`ax2 = ax1.twinx()`; merge legends with `get_legend_handles_labels()`"], ["Save a chart", "`plt.savefig(\"c.png\", dpi=300, bbox_inches=\"tight\")` before `plt.show()`"]]
}
open(os.path.join(HUB, 'ov_9.js'), 'w', encoding='utf-8').write('/* ---------- Part 9 overview: Matplotlib (generated by gen/gen_ov9.py; every output came from running the code) ---------- */\noverview(' + js(ov) + ');\n')
SHEET = {"title": ["Matplotlib: the ", ["3", "pink"], " big ", ["differences", "lime"]], "sub": "Cheat sheet", "groups": [
  {"h": "plt.bar vs plt.hist", "cols": ["You give it", "x-axis", "Bars", "Example"], "rows": [
    {"name": "bar", "c": "blue", "img": "ov9-bar", "sym": "plt.bar()", "symName": "Compare categories", "facts": [["txt", "Heights"], ["txt", "Categories"], ["txt", "Gaps"], ["big", "plt.bar(names, totals)"]],
     "cap": "A shelf of jars: each jar is one category, and you decide how full it is.", "ex": "plt.barh(names, totals)"},
    {"name": "hist", "c": "orange", "img": "ov9-hist", "sym": "plt.hist()", "symName": "Show a spread", "facts": [["txt", "Raw numbers"], ["txt", "A number line"], ["txt", "Touching"], ["big", "plt.hist(ages, bins=15)"]],
     "cap": "Sorting coins into slots by size: the tallest pile shows the most common size.", "ex": "plt.hist(col, density=True)"}]},
  {"h": "plt.plot vs plt.scatter", "cols": ["Draws", "Best for", "Row order"], "rows": [
    {"name": "plot", "c": "teal", "img": "ov9-line", "sym": "plt.plot()", "symName": "A trend", "facts": [["txt", "A joined line"], ["txt", "Change over time"], ["warn", "Matters"]],
     "cap": "A road trip: the line goes from one stop to the next, in order.", "ex": "plt.plot(months, sales, marker=\"o\")"},
    {"name": "scatter", "c": "pink", "img": "ov9-scatter", "sym": "plt.scatter()", "symName": "A relationship", "facts": [["txt", "Separate dots"], ["txt", "Two numbers per row"], ["yes", "Does not matter"]],
     "cap": "Stars in the sky: each dot is one row, and the cloud's shape shows the link.", "ex": "plt.scatter(x, y, c=z, cmap=\"viridis\")"}]},
  {"h": "plt. (quick) vs ax. (object)", "cols": ["Draws on", "Title", "Several charts"], "rows": [
    {"name": "plt.", "c": "green", "img": "ov9-plt", "sym": "plt.title()", "symName": "The current chart", "facts": [["txt", "The current chart"], ["big", "plt.title(\"T\")"], ["big", "plt.subplot(1, 2, 1)"]],
     "cap": "Pointing at whatever is in front of you: quick for one chart.", "ex": "plt.xlabel(\"Month\")"},
    {"name": "ax.", "c": "purple", "img": "ov9-ax", "sym": "ax.set_title()", "symName": "A named chart", "facts": [["txt", "The axes you name"], ["big", "ax.set_title(\"T\")"], ["big", "axes[0, 1]"]],
     "cap": "Calling each chart by its seat number: clear when there are many.", "ex": "fig, axes = plt.subplots(2, 2)"}]}],
 "foot": "Recipe: figure → draw → title, labels, legend → grid, tight_layout → savefig, then show.",
 "credit": "Pictures drawn with Matplotlib (gen/gen_sheetimgs.py). Text and icons checked by hand."}
sp = os.path.join(HUB, 'sheets.js'); s = open(sp, encoding='utf-8').read()
block = '/* @@SHEET9 (generated by gen/gen_ov9.py) */\nSHEETS[9] = ' + js(SHEET) + ';\n/* @@END9 */\n'
if '/* @@SHEET9' in s: s = re.sub(r'/\* @@SHEET9.*?/\* @@END9 \*/\n', lambda m: block, s, flags=re.S)
else: s = s.replace('SHEETS[11] = {', block + '\nSHEETS[11] = {', 1)
open(sp, 'w', encoding='utf-8').write(s)
print('ov_9.js and SHEETS[9] written')
