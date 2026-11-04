CID = 'sns2'
SC, LI, RG, RS, RE, HM, CL, FG, PP, JP, CX, IN, BP = ("Scatter plots: hue, size and style", "Line plots and confidence bands", "Regression lines: regplot and lmplot", "Checking the fit: residplot",
    "Faceted relations: relplot", "Heatmaps: correlations and pivot tables", "Clustermap: grouping similar rows", "FacetGrid: your own panels", "Pair plots: every pair at once",
    "Joint plots: one pair in detail", "Contexts and colour scales", "Seaborn inside Matplotlib layouts", "Best practices and common mistakes")
def W(lv, sec, q, starter, sol, e, chart=None):
    d = dict(lv=lv, ty='code', sec=sec, q=q, starter=starter, sol=sol, e=e)
    if chart: d['chart'] = chart
    return d
def F(lv, sec, q, c, fixed, e, chart=None):
    d = dict(lv=lv, ty='fix', sec=sec, q=q, c=c, fixed=fixed, e=e)
    if chart: d['chart'] = chart
    return d
def T(lv, sec, c, e): return dict(lv=lv, ty='type', sec=sec, q="Type exactly what this code prints.", c=c, e=e)
PRE = 'import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n'
SALES = PRE + 'sns.set_theme()\nsales = pd.read_csv("sales_data.csv")\n'
SALESM = SALES + 'sales["Date"] = pd.to_datetime(sales["Date"])\nsales["Month"] = sales["Date"].dt.month\n'
TIPS = PRE + 'sns.set_theme()\ntips = sns.load_dataset("tips")\n'
NUM = '["Sales", "Profit", "Quantity", "Customer_Age", "Satisfaction_Score"]'
Q = [
 # ---------- Basic ----------
 W(1, SC, 'Draw a Seaborn scatter of `Customer_Age` (x) against `Satisfaction_Score` (y) from `sales`, coloured by `Region`, with see-through dots (`alpha=0.5`).', SALES,
   SALES + 'sns.scatterplot(data=sales, x="Customer_Age", y="Satisfaction_Score", hue="Region", alpha=0.5)\nplt.show()', "One dot per order (500), coloured by region. No clear pattern: age does not drive satisfaction.", {"sns": "scatterplot", "points": 500, "legend": True}),
 W(1, LI, 'With `tips`, draw `sns.lineplot` of `tip` (y) against the group `size` (x), with a title. Every size has many bills, so you will see the mean and a band.', TIPS,
   TIPS + 'sns.lineplot(data=tips, x="size", y="tip", marker="o")\nplt.title("Average tip by group size")\nplt.show()', "lineplot draws the mean tip for each size, and the band is the 95% interval.", {"sns": "lineplot", "title": True}),
 T(1, HM, PRE + 'df = pd.DataFrame({"x": [1, 2, 3], "y": [2, 4, 6]})\nprint(df.corr().loc["x", "y"])', "y is always 2 × x, a perfect straight-line link: the correlation is 1.0."),
 W(1, HM, '`marks = pd.DataFrame({"Maths": [78, 92, 65], "Science": [85, 88, 70]}, index=["Asha", "Ravi", "Neha"])`. Draw it as a heatmap with the whole numbers in the cells (`annot=True`, `fmt="d"`).', PRE + 'marks = pd.DataFrame({"Maths": [78, 92, 65], "Science": [85, 88, 70]}, index=["Asha", "Ravi", "Neha"])\n',
   PRE + 'marks = pd.DataFrame({"Maths": [78, 92, 65], "Science": [85, 88, 70]}, index=["Asha", "Ravi", "Neha"])\nsns.heatmap(marks, annot=True, fmt="d", cmap="Greens")\nplt.title("Marks")\nplt.show()', "Six cells, six numbers. The names come from the index and the columns.", {"sns": "heatmap", "texts": 6}),
 F(1, HM, "This code should write the correlations with 2 decimals, but it stops with a ValueError. Fix the format.", TIPS + 'corr = tips[["total_bill", "tip", "size"]].corr()\nsns.heatmap(corr, annot=True, fmt=".2d")\nplt.show()',
   TIPS + 'corr = tips[["total_bill", "tip", "size"]].corr()\nsns.heatmap(corr, annot=True, fmt=".2f")\nplt.show()', "Correlations are decimals: `\".2f\"`. The `\"d\"` format is only for whole numbers.", {"sns": "heatmap", "texts": 9}),
 W(1, RG, 'Draw a regression line of `Sales` (y) on `Quantity` (x) from `sales` with `sns.regplot`, without the band (`ci=None`).', SALES,
   SALES + 'sns.regplot(data=sales, x="Quantity", y="Sales", ci=None)\nplt.show()', "More items in an order means a bigger order value, but the dots spread widely around the line.", {"sns": "regplot", "kind": ["scatter", "line"]}),
 T(1, RE, PRE + 'g = sns.relplot(x=[1, 2, 3, 4], y=[1, 3, 2, 4], col=["a", "b", "a", "b"])\nprint(len(g.axes.flat))\nplt.close("all")', "relplot is figure-level: two values of `col` give two panels."),
 F(1, SC, "This code should colour the dots by `time`, but it stops with an AttributeError. Fix it.", TIPS + 'sns.scatterplot(data=tips, x="total_bill", y="tip", colour="time")\nplt.show()',
   TIPS + 'sns.scatterplot(data=tips, x="total_bill", y="tip", hue="time")\nplt.show()', "Seaborn colours by a column with `hue=`. Unknown words like `colour=` are passed on to Matplotlib, which does not know them.", {"sns": "scatterplot", "legend": True}),
 # ---------- Medium ----------
 W(2, LI, 'Draw the **monthly total profit** per `Region` with `sns.lineplot` (`estimator="sum"`, `errorbar=None`), with a dot on every point. The `Month` column is ready.', SALESM,
   SALESM + 'sns.lineplot(data=sales, x="Month", y="Profit", hue="Region", estimator="sum", errorbar=None, marker="o")\nplt.title("Monthly profit per region")\nplt.show()', "`estimator=\"sum\"` adds up the orders of each month instead of averaging them.", {"sns": "lineplot", "legend": True, "title": True}),
 W(2, RG, '`hours = [1, 2, 3, 4, 5, 6, 7, 8]` of study and `marks = [35, 50, 62, 71, 77, 81, 83, 84]`. The gains slow down, so fit a **curve** with `sns.regplot(..., order=2)`, without the band, and label both axes.', PRE + 'hours = [1, 2, 3, 4, 5, 6, 7, 8]\nmarks = [35, 50, 62, 71, 77, 81, 83, 84]\n',
   PRE + 'hours = [1, 2, 3, 4, 5, 6, 7, 8]\nmarks = [35, 50, 62, 71, 77, 81, 83, 84]\nsns.regplot(x=hours, y=marks, order=2, ci=None)\nplt.xlabel("Hours of study")\nplt.ylabel("Marks")\nplt.show()', "`order=2` fits a parabola, which bends to follow the slowing gains.", {"sns": "regplot", "xlabel": True, "ylabel": True}),
 W(2, RG, 'Use `sns.lmplot` to draw `tip` against `total_bill` from `tips`, with one panel per `day` (`col="day"`, `col_wrap=2`).', TIPS,
   TIPS + 'sns.lmplot(data=tips, x="total_bill", y="tip", col="day", col_wrap=2, height=2.8)\nplt.show()', "Four days, four panels, each with its own fitted line.", {"sns": "lmplot", "axes": 4}),
 T(2, RS, 'import numpy as np\nx = [1, 2, 3]\ny = [2, 5, 6]\nslope, intercept = np.polyfit(x, y, 1)\nprint([round(float(b - (slope * a + intercept)), 2) for a, b in zip(x, y)])', "The line is y = 2x + 0.33, so it predicts 2.33, 4.33 and 6.33. Real minus predicted gives the residuals."),
 W(2, RE, 'Use `sns.relplot` with `kind="line"` to draw the average `tip` per group `size` from `tips`, with one panel per `time` and no band (`errorbar=None`).', TIPS,
   TIPS + 'g = sns.relplot(data=tips, x="size", y="tip", kind="line", col="time", errorbar=None, marker="o", height=3)\ng.set_titles("{col_name}")\nplt.show()', "relplot draws lineplot panels with `kind=\"line\"`.", {"sns": "relplot", "axes": 2}),
 F(2, FG, "This code should draw a histogram of tips in each panel, but it stops with a ValueError. Fix the second line.", TIPS + 'g = sns.FacetGrid(tips, col="time")\ng.map(sns.histplot, x="tip")\nplt.show()',
   TIPS + 'g = sns.FacetGrid(tips, col="time")\ng.map_dataframe(sns.histplot, x="tip")\nplt.show()', "`g.map` gives the columns by position; to name them like `x=\"tip\"`, use `g.map_dataframe`.", {"sns": "FacetGrid", "axes": 2}),
 W(2, HM, 'Make a pivot table of the **average profit** with `Category` as rows and `Region` as columns, and draw it as a heatmap with the values (no decimals, `fmt=".0f"`) and `cmap="YlGnBu"`.', SALES,
   SALES + 'table = sales.pivot_table(values="Profit", index="Category", columns="Region", aggfunc="mean")\nsns.heatmap(table, annot=True, fmt=".0f", cmap="YlGnBu")\nplt.title("Average profit (₹)")\nplt.show()', "4 categories × 4 regions = 16 cells, each with its average.", {"sns": "heatmap", "texts": 16}),
 T(2, PP, PRE + 'g = sns.pairplot(pd.DataFrame({"a": [1, 2, 3], "b": [3, 1, 2], "c": [2, 2, 5]}))\nprint(g.axes.shape)\nplt.close("all")', "Three number columns give a 3 × 3 grid of panels."),
 W(2, PP, 'Draw a pair plot of `Sales`, `Profit` and `Quantity` from `sales` (`vars=`) with only the lower half (`corner=True`).', SALES,
   SALES + 'sns.pairplot(sales, vars=["Sales", "Profit", "Quantity"], corner=True, height=2)\nplt.show()', "`corner=True` hides the mirror half, so each pair is drawn once.", {"sns": "pairplot"}),
 W(2, JP, 'With `tips`, draw a joint plot of `total_bill` and `tip` with **hexagons** (`kind="hex"`).', TIPS,
   TIPS + 'sns.jointplot(data=tips, x="total_bill", y="tip", kind="hex", height=5)\nplt.show()', "Darker hexagons hold more bills; the margins show each column alone.", {"sns": "jointplot", "kind": "hexbin"}),
 # ---------- Challenge ----------
 W(3, CL, 'Make the pivot table of the **average sales** with `Category` as rows and `Region` as columns, and draw it with `sns.clustermap`, scaling each column from 0 to 1 (`standard_scale=1`).', SALES,
   SALES + 'table = sales.pivot_table(values="Sales", index="Category", columns="Region", aggfunc="mean")\nsns.clustermap(table, standard_scale=1, cmap="YlGnBu", annot=True, fmt=".2f", figsize=(6, 5))\nplt.show()', "The clustermap puts the two big-ticket categories (electronics, furniture) next to each other.", {"sns": "clustermap"}),
 W(3, FG, 'Build a `sns.FacetGrid` of `sales` with one panel per `Region` (`col_wrap=2`), map a scatter of `Sales` against `Profit` onto it with `g.map_dataframe(sns.scatterplot, ...)`, and set short panel titles.', SALES,
   SALES + 'g = sns.FacetGrid(sales, col="Region", col_wrap=2, height=2.8)\ng.map_dataframe(sns.scatterplot, x="Sales", y="Profit", s=12)\ng.set_titles("{col_name}")\nplt.show()', "First the empty grid, then one chart mapped onto every panel.", {"sns": "FacetGrid", "axes": 4}),
 F(3, IN, "This code should put a box plot in the second chart, but it stops with an IndexError. Fix it.", TIPS + 'fig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.histplot(data=tips, x="tip", ax=axes[0])\nsns.boxplot(data=tips, x="day", y="tip", ax=axes[2])\nplt.show()',
   TIPS + 'fig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.histplot(data=tips, x="tip", ax=axes[0])\nsns.boxplot(data=tips, x="day", y="tip", ax=axes[1])\nplt.show()', "Two charts are `axes[0]` and `axes[1]`: positions count from 0.", {"axes": 2, "sns": ["histplot", "boxplot"]}),
 W(3, IN, 'Build a 2 × 2 Seaborn dashboard of `sales` with `ax=`: a histogram of `Sales`, a box plot of `Profit` per `Category`, a scatter of `Sales` against `Profit`, and a count of orders per `Region`. Give the figure a title.', SALES,
   SALES + 'fig, axes = plt.subplots(2, 2, figsize=(11, 8))\nsns.histplot(data=sales, x="Sales", ax=axes[0, 0])\nsns.boxplot(data=sales, x="Category", y="Profit", ax=axes[0, 1])\nsns.scatterplot(data=sales, x="Sales", y="Profit", s=12, ax=axes[1, 0])\nsns.countplot(data=sales, x="Region", ax=axes[1, 1])\nfig.suptitle("Sales dashboard")\nplt.tight_layout()\nplt.show()', "Every axes-level chart takes `ax=`, so it lands in its own place in the grid.", {"axes": 4, "suptitle": True, "sns": ["histplot", "boxplot", "scatterplot", "countplot"]}),
 T(3, CX, PRE + 'contexts = ["paper", "notebook", "talk", "poster"]\nsizes = [sns.plotting_context(c)["font.size"] for c in contexts]\nprint(sizes == sorted(sizes))', "The contexts go from small to big: each one has a bigger font than the one before."),
 F(3, CX, "This code should make the chart ready for slides, but it stops with a ValueError. Fix the context name.", TIPS + 'sns.set_context("slides")\nsns.lineplot(data=tips, x="size", y="tip")\nplt.show()',
   TIPS + 'sns.set_context("talk")\nsns.lineplot(data=tips, x="size", y="tip")\nplt.show()', "The four contexts are paper, notebook, talk (slides) and poster.", {"sns": "lineplot"}),
 W(3, BP, 'Draw the correlation heatmap of the five number columns of `sales`, showing **only the lower half** with a mask (`np.triu(np.ones_like(corr, dtype=bool))`), values with 2 decimals, `cmap="coolwarm"` and `center=0`.', SALES + 'import numpy as np\n',
   SALES + 'import numpy as np\ncorr = sales[' + NUM + '].corr()\nmask = np.triu(np.ones_like(corr, dtype=bool))\nsns.heatmap(corr, mask=mask, annot=True, fmt=".2f", cmap="coolwarm", center=0)\nplt.title("Correlations, each pair once")\nplt.tight_layout()\nplt.show()', "The mask hides the diagonal and the mirror half: 10 cells are left, one per pair.", {"sns": "heatmap", "texts": 10}),
]
