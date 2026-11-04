CID = 'sns1'
SB, DS, HI, KD, DP, CO, BA, BX, ST, PO, CA, TH, WH = ("Seaborn: statistical charts in one line", "Datasets, data= and hue=", "Histograms with histplot", "Smooth curves: kdeplot, rugplot and ecdfplot",
    "Figure-level charts: displot", "Counting categories: countplot", "Averages with error bars: barplot", "Spread by group: boxplot and violinplot", "Every point: stripplot and swarmplot",
    "Means across groups: pointplot", "Many panels at once: catplot", "Themes, styles and palettes", "Which Seaborn chart? Best practices")
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
TIPS = PRE + 'sns.set_theme()\ntips = sns.load_dataset("tips")\n'
Q = [
 # ---------- Basic ----------
 W(1, SB, 'Draw a Seaborn histogram of the `Sales` column of `sales` with **15 bins**, and give it a title.', SALES,
   SALES + 'sns.histplot(data=sales, x="Sales", bins=15)\nplt.title("Order values")\nplt.show()', "Give the DataFrame to `data=` and the column name to `x=`; `bins=15` makes 15 bars.", {"sns": "histplot", "bars": 15, "title": True}),
 W(1, DS, 'Load the `tips` dataset with `sns.load_dataset` and draw a histogram of `tip`, coloured by `smoker` (`hue=`).', PRE,
   PRE + 'tips = sns.load_dataset("tips")\nsns.histplot(data=tips, x="tip", hue="smoker")\nplt.show()', "`hue=` colours the bars by another column and adds the legend (Yes, No) by itself.", {"sns": "histplot", "legend": ["Yes", "No"]}),
 T(1, HI, PRE + 'ax = sns.histplot(x=[5, 5, 6, 9, 9, 9, 9], bins=2)\nprint([int(bar.get_height()) for bar in ax.patches])\nplt.close()', "Two bins from 5 to 9 split at 7: the 5, 5 and 6 fall in the first bin and the four 9s in the second."),
 W(1, CO, '`days = ["Mon", "Tue", "Mon", "Wed", "Mon", "Tue"]`. Count each day with `sns.countplot`, in the order Mon, Tue, Wed, and set the y label to `Orders`.', PRE + 'days = ["Mon", "Tue", "Mon", "Wed", "Mon", "Tue"]\n',
   PRE + 'days = ["Mon", "Tue", "Mon", "Wed", "Mon", "Tue"]\nsns.countplot(x=days, order=["Mon", "Tue", "Wed"])\nplt.ylabel("Orders")\nplt.show()', "`order=` fixes the left-to-right order of the bars.", {"sns": "countplot", "bars": 3, "xticks": ["Mon", "Tue", "Wed"], "ylabel": "Orders"}),
 F(1, CO, "This code should count the bills per day, but it stops with a TypeError. Fix it.", TIPS + 'sns.countplot(data=tips, x="day", y="day")\nplt.show()',
   TIPS + 'sns.countplot(data=tips, x="day")\nplt.show()', "countplot counts one column: give it `x=` (upright bars) or `y=` (sideways bars), never both.", {"sns": "countplot", "bars": 4}),
 T(1, BA, PRE + 'ax = sns.barplot(x=["p", "q", "q"], y=[10, 4, 8], errorbar=None)\nprint([float(bar.get_height()) for bar in ax.patches])\nplt.close()', "barplot shows the mean: p has only 10, and q has (4 + 8) / 2 = 6."),
 W(1, BX, 'With `tips`, draw a box plot of `total_bill` for each `time` (Lunch and Dinner), with a title.', TIPS,
   TIPS + 'sns.boxplot(data=tips, x="time", y="total_bill")\nplt.title("Bills at lunch and dinner")\nplt.show()', "One box per value of `x=`: two boxes.", {"sns": "boxplot", "boxes": 2, "title": True}),
 F(1, TH, "This code should use the white grid style, but it stops with a ValueError. Fix the style name.", PRE + 'tips = sns.load_dataset("tips")\nsns.set_theme(style="grid")\nsns.countplot(data=tips, x="day")\nplt.show()',
   PRE + 'tips = sns.load_dataset("tips")\nsns.set_theme(style="whitegrid")\nsns.countplot(data=tips, x="day")\nplt.show()', "The five styles are darkgrid, whitegrid, dark, white and ticks.", {"sns": "countplot", "grid": True}),
 # ---------- Medium ----------
 W(2, HI, 'With `tips`, draw a histogram of `total_bill` with bins **5 dollars wide** (`binwidth=5`), stacked by `time` (`multiple="stack"`).', TIPS,
   TIPS + 'sns.histplot(data=tips, x="total_bill", hue="time", multiple="stack", binwidth=5)\nplt.show()', "`binwidth=` sets the width of each bin; `multiple=\"stack\"` puts dinner on top of lunch.", {"sns": "histplot", "legend": ["Lunch", "Dinner"]}),
 W(2, KD, 'Draw filled KDE curves of `Sales` for each `Region`, each with an area of 1 (`common_norm=False`), stopping at the real data (`cut=0`).', SALES,
   SALES + 'sns.kdeplot(data=sales, x="Sales", hue="Region", fill=True, common_norm=False, cut=0)\nplt.title("Order values per region")\nplt.show()', "`cut=0` stops each curve at its smallest and largest order, so no negative sales appear.", {"sns": "kdeplot", "legend": True}),
 W(2, KD, 'With `tips`, draw an ECDF of `tip` for each `sex`, and add a dashed grey vertical line at a tip of 3 with `plt.axvline`.', TIPS,
   TIPS + 'sns.ecdfplot(data=tips, x="tip", hue="sex")\nplt.axvline(3, color="grey", linestyle="--")\nplt.title("Share of tips up to each value")\nplt.show()', "At the line you can read the share of tips that are $3 or less for men and for women.", {"sns": "ecdfplot", "kind": "vline", "legend": True}),
 W(2, DP, 'Use `sns.displot` to draw histograms of `total_bill` from `tips`, with **one panel per `time`** (`col=`).', TIPS,
   TIPS + 'g = sns.displot(data=tips, x="total_bill", col="time", height=3)\ng.set_titles("{col_name}")\nplt.show()', "displot is figure-level: `col=\"time\"` makes a Lunch panel and a Dinner panel.", {"sns": "displot", "axes": 2}),
 T(2, DP, PRE + 'g = sns.displot(x=[1, 2, 3, 4], col=["a", "a", "b", "b"])\nprint(type(g).__name__, len(g.axes.flat))\nplt.close("all")', "A figure-level function returns a FacetGrid; two values of `col` give two panels."),
 W(2, BA, 'Draw the **total** sales per `Region` as bars with `sns.barplot` (`estimator="sum"`), with no error bars and the `pastel` palette (use `hue="Region"` and `legend=False`).', SALES,
   SALES + 'sns.barplot(data=sales, x="Region", y="Sales", estimator="sum", errorbar=None, hue="Region", palette="pastel", legend=False)\nplt.title("Total sales per region")\nplt.show()', "A palette colours a `hue=` column: using the same column as `x=` gives each bar its own colour without a warning.", {"sns": "barplot", "bars": 4, "title": True}),
 F(2, BA, "This code should show the average tip per day with a 95% confidence interval, but it stops with a ValueError. Fix the `errorbar` value.", TIPS + 'sns.barplot(data=tips, x="day", y="tip", errorbar="ci95")\nplt.show()',
   TIPS + 'sns.barplot(data=tips, x="day", y="tip", errorbar=("ci", 95))\nplt.show()', "The interval is written as a pair: `errorbar=(\"ci\", 95)`. (That is also the default.)", {"sns": "barplot", "bars": 4}),
 W(2, BX, 'With `tips`, draw violins of `tip` per `day`, split in two halves by `smoker` (`hue=`, `split=True`), with dashed quartile lines (`inner="quart"`).', TIPS,
   TIPS + 'sns.violinplot(data=tips, x="day", y="tip", hue="smoker", split=True, inner="quart")\nplt.show()', "Each violin shows smokers on one side and non-smokers on the other.", {"sns": "violinplot", "legend": ["Yes", "No"]}),
 T(2, ST, PRE + 'ax = sns.stripplot(x=["a", "a", "b"], y=[1, 2, 3])\nprint(len(ax.collections))\nplt.close()', "A strip plot draws one group of dots per category: one for a and one for b."),
 W(2, ST, 'Draw a white box plot of `Profit` per `Region` without the outlier dots (`showfliers=False`), and put every order on top as small black dots with `sns.stripplot`.', SALES,
   SALES + 'sns.boxplot(data=sales, x="Region", y="Profit", color="white", showfliers=False)\nsns.stripplot(data=sales, x="Region", y="Profit", color="black", alpha=0.3, size=3)\nplt.show()', "Both functions draw on the same axes: the summary and the real data together.", {"sns": ["boxplot", "stripplot"]}),
 # ---------- Challenge ----------
 W(3, PO, 'Make a `Quarter` column (`"Q1"` to `"Q4"`) from `Date`, then draw the **average profit** per quarter with `sns.pointplot`, in the order Q1 to Q4.', SALES,
   SALES + 'sales["Date"] = pd.to_datetime(sales["Date"])\nsales["Quarter"] = "Q" + sales["Date"].dt.quarter.astype(str)\nsns.pointplot(data=sales, x="Quarter", y="Profit", order=["Q1", "Q2", "Q3", "Q4"])\nplt.title("Average profit per quarter")\nplt.show()', "`dt.quarter` gives 1 to 4; turning it into text with \"Q\" in front makes good labels.", {"sns": "pointplot", "xticks": ["Q1", "Q2", "Q3", "Q4"]}),
 W(3, CA, 'Use `sns.catplot` to draw **violins** of `total_bill` per `day` from `tips`, with one panel per `sex`.', TIPS,
   TIPS + 'g = sns.catplot(data=tips, x="day", y="total_bill", kind="violin", col="sex", height=3.2)\ng.set_titles("{col_name}")\nplt.show()', "`kind=\"violin\"` picks the chart and `col=\"sex\"` makes two panels.", {"sns": "catplot", "axes": 2}),
 F(3, CA, "This code should draw a box plot in the **left** chart of a 1 × 2 figure, but Seaborn warns and draws a separate figure instead. Fix it.", TIPS + 'fig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.catplot(data=tips, x="day", y="tip", kind="box", ax=axes[0])\naxes[1].hist(tips["tip"], bins=10)\nplt.show()',
   TIPS + 'fig, axes = plt.subplots(1, 2, figsize=(9, 3.5))\nsns.boxplot(data=tips, x="day", y="tip", ax=axes[0])\naxes[1].hist(tips["tip"], bins=10)\nplt.show()', "catplot is figure-level and ignores `ax=`. The axes-level `sns.boxplot(..., ax=axes[0])` draws inside the grid.", {"axes": 2, "sns": "boxplot"}),
 W(3, TH, 'Use `sns.set_theme(style="ticks", palette="colorblind")`, draw a count of orders per `Category` split by `Region` (`hue=`), and remove the top and right border lines with `sns.despine()`.', SALES,
   SALES + 'sns.set_theme(style="ticks", palette="colorblind")\nsns.countplot(data=sales, x="Category", hue="Region")\nsns.despine()\nplt.show()', "`despine()` hides the top and right spines; the colorblind palette is safe for every reader.", {"sns": "countplot", "legend": True, "spines": {"top": False, "right": False}}),
 T(3, TH, PRE + 'print(len(sns.color_palette("pastel")), len(sns.color_palette("husl", 3)))', "A named palette like pastel has 10 colours; `color_palette(\"husl\", 3)` asks for exactly 3."),
 F(3, HI, "This code should stack the order values by region, but it stops with a ValueError. Fix it.", SALES + 'sns.histplot(data=sales, x="Sales", hue="Region", bins=20, multiple="stacked")\nplt.show()',
   SALES + 'sns.histplot(data=sales, x="Sales", hue="Region", bins=20, multiple="stack")\nplt.show()', "The four choices are \"layer\", \"stack\", \"dodge\" and \"fill\".", {"sns": "histplot", "legend": True}),
 W(3, WH, 'Draw the average `Profit` per `Region` as bars, **highest average first**. Work out the order with `groupby(...).mean().sort_values(ascending=False).index`, and show one standard deviation (`errorbar="sd"`).', SALES,
   SALES + 'order = sales.groupby("Region")["Profit"].mean().sort_values(ascending=False).index\nsns.barplot(data=sales, x="Region", y="Profit", order=order, errorbar="sd")\nplt.title("Average profit per region (± 1 sd)")\nplt.show()', "Sorted bars are easier to compare, and the long sd lines show that single orders vary far more than the averages do.", {"sns": "barplot", "bars": 4, "xticks": ["East", "North", "West", "South"]}),
]
