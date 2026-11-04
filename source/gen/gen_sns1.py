# Chapter 29: Seaborn distributions and categories. Run with the matching Python (see NOTES.md).
# Every chart is drawn through hubcharts.py, saved as img/c29-NN.webp and summarised for the laptop/browser checks.
from chlib import Chapter, write_chapter, run, chart_run, Raw
PRE = 'import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n'
K = Chapter('c29', PRE)
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
SALES = PRE + 'sns.set_theme()\nsales = pd.read_csv("sales_data.csv")\n'
SALESQ = SALES + 'sales["Date"] = pd.to_datetime(sales["Date"])\nsales["Quarter"] = "Q" + sales["Date"].dt.quarter.astype(str)\n'
TIPS = PRE + 'sns.set_theme()\ntips = sns.load_dataset("tips")\n'
def pic(code, alt):
    imgs = chart_run(code, K.name())[3]
    return '<img class="figimg" src="%s" alt="%s" loading="lazy">' % (imgs[0], alt)
HUEPIC = [pic(SALES + 'plt.figure(figsize=(7, 3.4))\nsns.histplot(data=sales, x="Sales", hue="Category", bins=15, multiple="%s")\nplt.title(\'multiple="%s"\')\nplt.tight_layout()\n' % (m, m), a) for m, a in (
    ("layer", "Four see-through histograms drawn on top of each other"), ("stack", "The four histograms stacked into one tower per bin"),
    ("dodge", "Thin bars for each category side by side in every bin"), ("fill", "Every bin filled to 100 percent, split by category share"))]
VIOPIC = [pic(TIPS + 'plt.figure(figsize=(7, 3.4))\n' + c + '\nplt.title(%r)\nplt.tight_layout()\n' % t, a) for c, t, a in (
    ('sns.boxplot(data=tips, x="day", y="total_bill")', "boxplot: five numbers per day", "Box plots of the bill for each day"),
    ('sns.violinplot(data=tips, x="day", y="total_bill")', "violinplot: the whole shape", "Violins: the width shows where most bills are"),
    ('sns.violinplot(data=tips, x="day", y="total_bill", inner="quart")', 'inner="quart": quartiles inside', "Violins with dashed lines at the quartiles"),
    ('sns.violinplot(data=tips, x="day", y="total_bill", hue="sex", split=True, inner="quart")', "hue + split=True: two halves", "Each violin split into a male half and a female half"))]
SIX = pic(TIPS + '''fig, axes = plt.subplots(2, 3, figsize=(11, 6))
sns.countplot(data=tips, x="day", ax=axes[0, 0]); axes[0, 0].set_title("countplot: how many rows")
sns.barplot(data=tips, x="day", y="tip", ax=axes[0, 1]); axes[0, 1].set_title("barplot: the mean, with error bars")
sns.pointplot(data=tips, x="day", y="tip", ax=axes[0, 2]); axes[0, 2].set_title("pointplot: means joined by a line")
sns.boxplot(data=tips, x="day", y="tip", ax=axes[1, 0]); axes[1, 0].set_title("boxplot: median, quartiles, outliers")
sns.violinplot(data=tips, x="day", y="tip", ax=axes[1, 1]); axes[1, 1].set_title("violinplot: the full shape")
sns.stripplot(data=tips, x="day", y="tip", alpha=0.6, ax=axes[1, 2]); axes[1, 2].set_title("stripplot: every single row")
plt.tight_layout()
''', "Six charts of tips per day: count, bar, point, box, violin and strip plots")
ORDER = '["North", "South", "East", "West"]'
body = [
 {"t": "h", "text": "Seaborn: statistical charts in one line"},
 {"t": "p", "b": "==Seaborn== is a charting library built on Matplotlib. You give it a DataFrame and the **names** of the columns, and it does the grouping, counting, averaging and colouring for you. It is always imported as `sns`, next to `plt`, because the finished chart is still a Matplotlib chart."},
 C(SALES + 'sns.histplot(data=sales, x="Sales", bins=20)\nplt.title("Order values in 2024")\nplt.show()', "Your first Seaborn chart"),
 {"t": "p", "b": "`sns.set_theme()` switches on Seaborn's look: a grey background with a white grid and softer colours. Call it once at the top. After that, plain `plt.title()`, `plt.xlabel()` and `plt.show()` work as in Part 9."},
 {"t": "note", "k": "tip", "b": "From here on, the examples start with these four lines and `sales = pd.read_csv(\"sales_data.csv\")` (or `tips = sns.load_dataset(\"tips\")`). They are hidden to save space; **Edit and run** includes them."},
 {"t": "p", "b": "Compare the two ways to draw the **average** order value per category. Matplotlib needs the numbers worked out first. Seaborn works them out from the raw rows."},
 C('avg = sales.groupby("Category")["Sales"].mean()\nplt.bar(avg.index, avg.values)\nplt.title("Matplotlib: group first, then draw")\nplt.show()', "The Matplotlib way", setup=SALES),
 C('sns.barplot(data=sales, x="Category", y="Sales", errorbar=None)\nplt.title("Seaborn: one line from the raw rows")\nplt.show()', "The Seaborn way", setup=SALES),
 {"t": "mm", "title": "Chapter 29 at a glance", "root": "Seaborn: spread & categories", "kids": [
   {"t": "Basics", "k": ["import seaborn as sns", "sns.set_theme()", "data=, x=, y=, hue=", "load_dataset(\"tips\")"]},
   {"t": "One number column", "k": ["histplot", "kdeplot, rugplot", "ecdfplot", "displot (panels)"]},
   {"t": "Count and average", "k": ["countplot", "barplot: mean + error bar", "pointplot"]},
   {"t": "Spread by group", "k": ["boxplot", "violinplot, split=True", "stripplot, swarmplot", "catplot (panels)"]},
   {"t": "Style", "k": ["set_theme(style=...)", "palette=", "color_palette()", "despine()"]}]},

 {"t": "h", "text": "Datasets, data= and hue="},
 {"t": "p", "b": "Seaborn comes with small practice datasets. `sns.load_dataset(\"tips\")` gives 244 restaurant bills from the USA (so the money is in dollars): the bill, the tip, the day, lunch or dinner, smoker or not, and the size of the group."},
 C(TIPS + 'print(tips.shape)\nprint(tips.head(3))', "A built-in dataset"),
 {"t": "note", "k": "trap", "b": "On your laptop, `load_dataset()` downloads the file from the internet the first time. On this site only `\"tips\"` is ready offline. For your own work, load your own file with `pd.read_csv()`."},
 {"t": "p", "b": "Almost every Seaborn function takes the same arguments. Learn them once and every chart is easy."},
 {"t": "table", "head": ["Argument", "Means", "Example"], "rows": [["`data=`", "The DataFrame", "`data=sales`"], ["`x=` / `y=`", "Column names for the two axes", "`x=\"Category\", y=\"Sales\"`"], ["`hue=`", "A column that sets the **colour**, with a legend for free", "`hue=\"Region\"`"], ["`order=`", "The order of the categories", "`order=[\"North\", \"South\"]`"], ["`palette=`", "The set of colours", "`palette=\"pastel\"`"], ["`ax=`", "Which Matplotlib axes to draw on", "`ax=axes[0, 1]`"]]},
 C('sns.histplot(data=tips, x="total_bill", hue="time")\nplt.title("Bills at lunch and at dinner")\nplt.show()', "hue= splits the data by colour", setup=TIPS),
 PRED(TIPS + 'print(tips["day"].nunique(), len(tips))', ["`4 244`", "`7 244`", "`244 4`", "`4 7`"], 0, "The restaurant was open on 4 days (Thur, Fri, Sat, Sun), and the table has 244 rows."),

 {"t": "h", "text": "Histograms with histplot"},
 {"t": "p", "b": "`sns.histplot()` cuts a number column into ranges (==bins==) and counts the rows in each, like `plt.hist()`. Add `kde=True` for a smooth curve of the shape on top."},
 C('sns.histplot(data=sales, x="Sales", bins=20, kde=True, color="teal")\nplt.title("Order values")\nplt.xlabel("Sales (₹)")\nplt.ylabel("Orders")\nplt.show()', "Bins plus a smooth curve", setup=SALES),
 {"t": "p", "b": "The shape is ==right-skewed==: most orders are small, and a few big ones stretch the tail to the right. That is why the mean (₹3,097) is higher than the median (₹2,582)."},
 {"t": "anim", "title": "hue and multiple: four ways to share one histogram", "frames": [
   {"html": HUEPIC[0], "c": "**layer** (the default): one see-through histogram per category, drawn on top of each other. Fine for 2 groups, busy for 4."},
   {"html": HUEPIC[1], "c": "**stack**: the categories sit on top of each other, so the tower's height is the total in that bin."},
   {"html": HUEPIC[2], "c": "**dodge**: thin bars side by side in every bin. Good for comparing a few groups bin by bin."},
   {"html": HUEPIC[3], "c": "**fill**: every bin is stretched to 100%, so you see each category's **share** of the bin. Small orders are mostly groceries and clothing."}]},
 C('sns.histplot(data=sales, x="Sales", hue="Category", multiple="stack", bins=20)\nplt.title("Order values by category")\nplt.show()', "Stacked by category", setup=SALES),
 {"t": "p", "b": "`stat=` changes what the bar height means, and `binwidth=` sets the width of each bin instead of the number of bins."},
 C('sns.histplot(data=sales, x="Customer_Age", binwidth=5, stat="percent")\nplt.title("Customer age: percent of orders")\nplt.show()', "stat=\"percent\" and binwidth=", setup=SALES),
 {"t": "table", "head": ["Option", "Does"], "rows": [["`bins=20` / `binwidth=5`", "How many bins / how wide each one is"], ["`kde=True`", "Adds the smooth curve"], ["`stat=\"count\"`", "Bar height: rows (default); also `\"percent\"`, `\"density\"`, `\"probability\"`"], ["`hue=` + `multiple=`", "`\"layer\"`, `\"stack\"`, `\"dodge\"` or `\"fill\"`"], ["`element=\"step\"`", "Outlines instead of filled bars"], ["`x=` and `y=`", "Two number columns give a 2D histogram"]]},
 {"t": "p", "b": "With a number column on **both** axes, `histplot` draws a ==2D histogram==: a grid of squares, darker where more orders fall."},
 C('sns.histplot(data=sales, x="Customer_Age", y="Sales", bins=15, cbar=True)\nplt.title("Age and order value together")\nplt.show()', "A 2D histogram", setup=SALES),
 PRED(PRE + 'ax = sns.histplot(x=[1, 2, 2, 3, 3, 3], bins=3)\nprint([int(bar.get_height()) for bar in ax.patches])\nplt.close()', ["`[1, 2, 3]`", "`[3, 2, 1]`", "`[6]`", "`[1, 1, 1]`"], 0, "Three bins: one 1, two 2s and three 3s. `ax.patches` are the bars, from left to right."),

 {"t": "h", "text": "Smooth curves: kdeplot, rugplot and ecdfplot"},
 {"t": "p", "b": "A ==KDE== (kernel density estimate) is a smooth version of a histogram. Curves are easier than bars to compare when there are several groups. `common_norm=False` gives every curve an area of 1, so a small group is not squashed flat."},
 C('sns.kdeplot(data=sales, x="Sales", hue="Category", fill=True, common_norm=False, alpha=0.4)\nplt.title("Order value shape per category")\nplt.show()', "kdeplot with hue", setup=SALES),
 {"t": "p", "b": "Groceries and clothing orders are small and close together; electronics and furniture are bigger and spread wide. `bw_adjust=` sets the smoothing: below 1 is more wiggly, above 1 is smoother."},
 C('sns.kdeplot(data=sales, x="Customer_Age", bw_adjust=0.4, label="bw_adjust=0.4")\nsns.kdeplot(data=sales, x="Customer_Age", bw_adjust=2, label="bw_adjust=2")\nplt.legend()\nplt.title("Same data, different smoothing")\nplt.show()', "Choosing the smoothing", setup=SALES),
 {"t": "note", "k": "trap", "b": "A KDE can run past the real data: here it goes below age 18 and above 65, where there are no customers. Add `cut=0` to stop the curve at the smallest and largest value."},
 {"t": "p", "b": "A ==rug plot== draws one small tick for **every** value along the axis, so you see the real data under the curve."},
 C('groceries = sales[sales["Category"] == "Groceries"]\nsns.kdeplot(data=groceries, x="Sales", cut=0)\nsns.rugplot(data=groceries, x="Sales", height=0.08)\nplt.title("Grocery orders: curve and every value")\nplt.show()', "kdeplot + rugplot", setup=SALES),
 {"t": "p", "b": "An ==ECDF== (empirical cumulative distribution) climbs from 0 to 1. At any value on the x-axis, its height is the **share of rows at or below** that value. No bins and no smoothing to choose."},
 C('sns.ecdfplot(data=sales, x="Sales", hue="Region")\nplt.axvline(2500, color="grey", linestyle="--")\nplt.title("Share of orders up to each value")\nplt.show()', "ecdfplot", setup=SALES),
 {"t": "p", "b": "Read it at the dashed line: about half of every region's orders are ₹2,500 or less. Where one line sits to the **right** of another, that region has bigger orders."},

 {"t": "h", "text": "Figure-level charts: displot"},
 {"t": "p", "b": "Seaborn has two kinds of functions. ==Axes-level== functions (`histplot`, `kdeplot`, `boxplot` ...) draw one chart on the current axes. ==Figure-level== functions (`displot`, `catplot`, and in Chapter 30 `relplot`, `lmplot`, `pairplot`, `jointplot`) build a **whole figure** and can split it into panels with `col=` and `row=`."},
 {"t": "table", "head": ["", "Axes-level", "Figure-level"], "rows": [["Examples", "`histplot`, `kdeplot`, `countplot`, `boxplot`", "`displot`, `catplot`"], ["Draws", "One chart", "A whole figure, one panel per group"], ["Panels", "Use `plt.subplots` + `ax=`", "`col=\"Region\"`, `row=...`, `col_wrap=2`"], ["Size", "`plt.figure(figsize=(w, h))`", "`height=3, aspect=1.5` (per panel)"], ["Labels", "`plt.title()`, `plt.xlabel()`", "`g.set_axis_labels()`, `g.set_titles()`, `g.figure.suptitle()`"], ["Returns", "A Matplotlib axes", "A `FacetGrid` (often called `g`)"]]},
 C('g = sns.displot(data=sales, x="Sales", col="Region", col_wrap=2, bins=15, height=2.8, aspect=1.4)\ng.set_axis_labels("Sales (₹)", "Orders")\ng.set_titles("{col_name}")\ng.figure.suptitle("Order values by region", y=1.03)\nplt.show()', "One panel per region", setup=SALES),
 {"t": "p", "b": "`\"{col_name}\"` in `set_titles()` is replaced by each panel's value (North, South ...). `y=1.03` lifts the big title a little above the panels. Older code writes `g.fig` instead of `g.figure`; both work."},
 C('sns.displot(data=sales, x="Sales", hue="Category", kind="kde", fill=True, height=3.5, aspect=1.8)\nplt.title("displot(kind=\\"kde\\")")\nplt.show()', "kind= picks hist, kde or ecdf", setup=SALES),
 {"t": "note", "k": "trap", "b": "A figure-level function always makes its **own** figure. Put it after `plt.subplot(1, 2, 1)` and you get an empty subplot plus a separate figure. For charts inside a grid, use the axes-level function with `ax=`: `sns.histplot(..., ax=axes[0])`."},

 {"t": "h", "text": "Counting categories: countplot"},
 {"t": "p", "b": "`sns.countplot()` counts the rows in each category and draws a bar for each: a histogram for text columns. Give it only `x=` (upright bars) or only `y=` (sideways bars)."},
 C('sns.countplot(data=sales, x="Region", order=' + ORDER + ')\nplt.title("Orders per region")\nplt.ylabel("Orders")\nplt.show()', "Rows per category", setup=SALES),
 C('top = sales["Category"].value_counts().index\nsns.countplot(data=sales, y="Category", hue="Region", order=top)\nplt.title("Orders per category and region")\nplt.tight_layout()\nplt.show()', "Sideways, biggest first, split by region", setup=SALES),
 {"t": "p", "b": "`value_counts().index` lists the categories from the most rows to the fewest, which makes a good `order=`. Sorted bars are much easier to read."},
 PRED(PRE + 'ax = sns.countplot(x=["UPI", "Cash", "UPI", "Card", "UPI"])\nprint([int(bar.get_height()) for bar in ax.patches])\nplt.close()', ["`[3, 1, 1]`", "`[1, 1, 3]`", "`[5]`", "`[3, 2]`"], 0, "Without `order=`, the bars come in the order the values first appear: UPI (3), Cash (1), Card (1)."),

 {"t": "h", "text": "Averages with error bars: barplot"},
 {"t": "p", "b": "`sns.barplot()` does **not** count. It shows the **mean** of `y` for each category, plus a black ==error bar==: the 95% ==confidence interval==, the range where the true average probably lies. A long error bar means the average is not very certain."},
 C('sns.barplot(data=sales, x="Category", y="Sales")\nplt.title("Average order value (95% interval)")\nplt.show()', "Mean with a confidence interval", setup=SALES),
 {"t": "p", "b": "`estimator=` picks another summary, like `\"sum\"` or `\"median\"`. `errorbar=None` removes the error bars. To colour the bars with a palette, set `hue=` to the same column as `x=` and hide the legend."},
 C('sns.barplot(data=sales, x="Region", y="Sales", estimator="sum", errorbar=None, order=' + ORDER + ', hue="Region", palette="pastel", legend=False)\nplt.title("Total sales per region")\nplt.ylabel("Sales (₹)")\nplt.show()', "Totals with estimator=\"sum\"", setup=SALES),
 C('sns.barplot(data=sales, x="Region", y="Profit", hue="Category", errorbar="sd", order=' + ORDER + ')\nplt.title("Average profit, ± one standard deviation")\nplt.show()', "Groups inside groups", setup=SALES),
 {"t": "table", "head": ["errorbar=", "The line shows"], "rows": [["`(\"ci\", 95)` (default)", "95% confidence interval of the mean"], ["`\"sd\"`", "One standard deviation each side: the spread of the data"], ["`\"se\"`", "One standard error"], ["`None`", "No error bar"]]},
 {"t": "note", "k": "trap", "b": "The course notes write `ci=95`. That is the old name: Seaborn 0.13 still accepts it but warns you. Write `errorbar=(\"ci\", 95)`. And `palette=` without `hue=` also warns now: add `hue=` (same column as `x=`) and `legend=False`, or use one `color=`."},
 PRED(PRE + 'ax = sns.barplot(x=["a", "a", "b"], y=[2, 4, 9], errorbar=None)\nprint([float(bar.get_height()) for bar in ax.patches])\nplt.close()', ["`[3.0, 9.0]`", "`[6.0, 9.0]`", "`[2.0, 4.0, 9.0]`", "`[2.0, 1.0]`"], 0, "barplot shows the **mean**: (2 + 4) / 2 = 3 for a, and 9 for b. A sum would give 6; countplot would give 2 and 1."),

 {"t": "h", "text": "Spread by group: boxplot and violinplot"},
 {"t": "p", "b": "To compare the **spread** of a number across groups, use a box plot (Chapter 27 shows how to read one) or a violin. Seaborn draws one per category in one line."},
 C('sns.boxplot(data=sales, x="Category", y="Sales", hue="Category", palette="Set2", legend=False)\nplt.title("Order values per category")\nplt.show()', "One box per category", setup=SALES),
 {"t": "anim", "title": "From box plot to violin", "frames": [
   {"html": VIOPIC[0], "c": "A **box plot** shows five numbers per group: the median, the box from Q1 to Q3, the whiskers and the outliers."},
   {"html": VIOPIC[1], "c": "A **violin** shows the whole shape: it is wide where many bills are and thin where few are. The mini box inside is a tiny box plot."},
   {"html": VIOPIC[2], "c": "`inner=\"quart\"` draws dashed lines at the quartiles and the median instead of the mini box."},
   {"html": VIOPIC[3], "c": "With `hue=\"sex\"` and `split=True`, each violin has two halves: men on the left, women on the right. One chart, two comparisons."}]},
 C('sns.violinplot(data=tips, x="day", y="total_bill", hue="sex", split=True, inner="quart")\nplt.title("Bills per day, men and women")\nplt.show()', "A split violin", setup=TIPS),
 C('sns.boxplot(data=tips, x="day", y="tip", hue="smoker")\nplt.title("Tips per day, smokers and non-smokers")\nplt.show()', "Boxes side by side with hue=", setup=TIPS),

 {"t": "h", "text": "Every point: stripplot and swarmplot"},
 {"t": "p", "b": "Box plots hide how many rows there are. A ==strip plot== draws **every row** as a dot. `jitter=` moves the dots a little sideways so they do not sit on one line."},
 C('sns.stripplot(data=sales, x="Region", y="Sales", order=' + ORDER + ', jitter=0.25, alpha=0.5, size=4)\nplt.title("Every order, per region")\nplt.show()', "stripplot", setup=SALES),
 {"t": "p", "b": "A ==swarm plot== moves the dots so that **none overlap**, which shows the shape like a violin made of dots. It needs room, so use it for a few hundred rows at most."},
 C('sns.swarmplot(data=tips, x="day", y="tip", hue="sex", size=4)\nplt.title("Every tip, per day")\nplt.show()', "swarmplot", setup=TIPS),
 {"t": "p", "b": "A favourite of analysts: a box plot with the real dots on top. `showfliers=False` stops the outliers being drawn twice."},
 C('sns.boxplot(data=tips, x="day", y="tip", color="white", showfliers=False)\nsns.stripplot(data=tips, x="day", y="tip", color="black", alpha=0.4, size=3)\nplt.title("Summary and the real data together")\nplt.show()', "Box + strip", setup=TIPS),

 {"t": "h", "text": "Means across groups: pointplot"},
 {"t": "p", "b": "`sns.pointplot()` shows the same mean and error bar as `barplot`, but as a **dot**, and joins the dots with a line. It is good for following one number across ordered groups, like quarters."},
 C('sns.pointplot(data=sales, x="Quarter", y="Sales", hue="Category", order=["Q1", "Q2", "Q3", "Q4"], dodge=0.3)\nplt.title("Average order value per quarter")\nplt.show()', "Average per quarter and category", setup=SALESQ),
 {"t": "p", "b": "`dodge=0.3` shifts the groups apart so their error bars do not cover each other. Electronics and furniture orders grow towards the festival quarter (Q4)."},
 C('sns.pointplot(data=sales, x="Region", y="Satisfaction_Score", order=' + ORDER + ')\nplt.title("Average satisfaction per region")\nplt.show()', "Careful with the y-axis", setup=SALES),
 {"t": "note", "k": "trap", "b": "Look at the y-axis: it runs only from about 3.7 to 4.1, so tiny differences look huge. The averages are 3.83 to 4.00 out of 5. Use `plt.ylim(1, 5)` when you want to show how small the gap really is."},

 {"t": "h", "text": "Many panels at once: catplot"},
 {"t": "p", "b": "`sns.catplot()` is the figure-level version of all the category charts. Pick the chart with `kind=` and split it into panels with `col=` or `row=`."},
 C('g = sns.catplot(data=sales, x="Region", y="Sales", kind="box", col="Category", col_wrap=2, order=' + ORDER + ', height=2.8, aspect=1.4)\ng.set_titles("{col_name}")\ng.figure.suptitle("Order values per region, for each category", y=1.03)\nplt.show()', "A box plot per category", setup=SALES),
 C('sns.catplot(data=tips, x="day", kind="count", hue="time", col="sex", height=3.2)\nplt.show()', "Counts, split two ways", setup=TIPS),
 {"t": "table", "head": ["kind=", "Same as"], "rows": [["`\"strip\"` (default)", "`stripplot`"], ["`\"swarm\"`", "`swarmplot`"], ["`\"box\"` / `\"violin\"` / `\"boxen\"`", "`boxplot` / `violinplot` / `boxenplot`"], ["`\"bar\"` / `\"point\"`", "`barplot` / `pointplot`"], ["`\"count\"`", "`countplot`"]]},
 {"t": "note", "k": "trap", "b": "Forget `kind=` and `catplot` draws a **strip plot**, not bars. Always write the kind you want."},

 {"t": "h", "text": "Themes, styles and palettes"},
 {"t": "p", "b": "`sns.set_theme(style=..., palette=...)` sets the look of every chart after it. There are five styles. `with sns.axes_style(\"ticks\"):` uses a style for just the charts made inside the `with` block."},
 C('styles = ["darkgrid", "whitegrid", "dark", "white", "ticks"]\nplt.figure(figsize=(13, 2.6))\nfor i, style in enumerate(styles):\n    with sns.axes_style(style):\n        plt.subplot(1, 5, i + 1)\n        plt.plot([1, 2, 3, 4], [3, 5, 4, 6], marker="o")\n        plt.title(style)\nplt.tight_layout()\nplt.show()', "The five styles"),
 C('sns.set_theme(style="whitegrid", palette="pastel")\nsns.countplot(data=sales, x="Category", hue="Region")\nsns.despine()\nplt.title("whitegrid + pastel + despine()")\nplt.show()', "A clean report style", setup=SALES),
 {"t": "p", "b": "`sns.despine()` removes the top and right border lines, like `ax.spines[...]` in Chapter 28. A ==palette== is a list of colours. `sns.color_palette(name)` gives one, and `.as_hex()` shows the colour codes."},
 C('for name in ["deep", "pastel", "colorblind"]:\n    print(name, sns.color_palette(name).as_hex()[:4])\nprint(len(sns.color_palette("husl", 6)))', "Palettes are lists of colours"),
 {"t": "table", "head": ["Palette", "Use it for"], "rows": [["`\"deep\"` (default), `\"muted\"`, `\"bright\"`, `\"pastel\"`, `\"dark\"`", "Categories: different colours, no order"], ["`\"colorblind\"`", "Categories, safe for colour-blind readers (about 1 in 12 men)"], ["`\"husl\"`, `\"Set2\"`", "Many evenly spread colours"], ["`\"Blues\"`, `\"viridis\"`, `\"rocket\"`", "Low to high values (Chapter 30 heatmaps)"], ["A list: `[\"#FF6B6B\", \"#4ECDC4\"]`", "Your own brand colours"]]},
 C('sns.boxplot(data=sales, x="Category", y="Profit", hue="Category", palette=["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7B731"], legend=False)\nplt.axhline(0, color="grey", linewidth=1)\nplt.title("Profit per order, own colours")\nplt.show()', "Your own colours", setup=SALES),
 {"t": "note", "k": "tip", "b": "In Jupyter, `set_theme()` stays on for every later cell, like `plt.style.use()`. Undo it with `sns.reset_defaults()`. (On this site every code box starts fresh.)"},

 {"t": "h", "text": "Which Seaborn chart? Best practices"},
 {"t": "fig", "svg": SIX, "cap": "The same data, six ways: count and average on top, spread and every row below. Each one answers a different question."},
 {"t": "table", "head": ["Your question", "Chart"], "rows": [["What does one number column look like?", "`histplot`, `kdeplot`, `ecdfplot`"], ["The same, in panels per group?", "`displot(col=...)`"], ["How many rows per category?", "`countplot`"], ["Which group has the higher average?", "`barplot` or `pointplot`"], ["How spread out is each group? Outliers?", "`boxplot`, `violinplot`"], ["I want to see every single row", "`stripplot`, `swarmplot`"], ["Many category charts in panels", "`catplot(kind=..., col=...)`"]]},
 {"t": "table", "head": ["Do", "Avoid"], "rows": [["Give the DataFrame and column names: `data=sales, x=\"Sales\"`", "Turning columns into lists first"], ["Sort categories with `order=`", "Bars in random order"], ["Say what the error bar shows (`errorbar=`)", "Readers thinking the black line is the range of the data"], ["`hue=` for one extra column", "Three or four colour splits in one chart"], ["Axes-level + `ax=` inside `plt.subplots`", "Figure-level functions inside `plt.subplot`"], ["Check the y-axis range", "Zoomed axes that make tiny gaps look big"]]},
 {"t": "deck", "title": "Seaborn distributions and categories in 6 slides", "s": [
   {"big": "Give Seaborn the table and the column names.", "b": "`sns.chart(data=df, x=\"col\", y=\"col\", hue=\"col\")`: it groups, counts and averages for you."},
   {"h": "One number column", "items": ["`histplot(bins=, kde=True, stat=, multiple=)`", "`kdeplot(fill=True, bw_adjust=, cut=0)`", "`ecdfplot`: share of rows up to each value", "`displot(col=...)`: panels"]},
   {"h": "Count vs average", "items": ["`countplot`: rows per category", "`barplot`: mean + 95% interval", "`estimator=\"sum\"`, `errorbar=None`", "`pointplot`: means joined by a line"]},
   {"h": "Spread", "items": ["`boxplot`: five numbers", "`violinplot(split=True, inner=\"quart\")`", "`stripplot(jitter=)`, `swarmplot`"]},
   {"h": "Panels", "items": ["Figure-level: `displot`, `catplot(kind=\"box\", col=...)`", "`g.set_titles(\"{col_name}\")`", "`g.figure.suptitle(\"...\", y=1.03)`"]},
   {"h": "Style", "items": ["`sns.set_theme(style=\"whitegrid\", palette=\"pastel\")`", "`hue=` + `palette=` + `legend=False`", "`sns.despine()`", "`\"colorblind\"` for everyone"]}]},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("`ages = [22, 25, 25, 28, 30, 31, 35, 35, 35, 40, 42, 48]`. Draw a Seaborn histogram of `ages` with `bins=6`, a smooth curve (`kde=True`) and a title.", "`sns.histplot(x=ages, bins=6, kde=True)`, then `plt.title(...)` and `plt.show()`.", 'ages = [22, 25, 25, 28, 30, 31, 35, 35, 35, 40, 42, 48]\nsns.histplot(x=ages, bins=6, kde=True)\nplt.title("Ages of the team")\nplt.show()', "Without a DataFrame, give the list straight to `x=`. The curve is the KDE.", starter=PRE + 'ages = [22, 25, 25, 28, 30, 31, 35, 35, 35, 40, 42, 48]\n',
     chart={"sns": "histplot", "bars": 6, "title": True}),
   P("`pay = [\"UPI\", \"Cash\", \"UPI\", \"Card\", \"UPI\", \"Cash\"]`. Count each payment type with `sns.countplot`, set the y label to `Orders` and add a title.", "`sns.countplot(x=pay)`, then `plt.ylabel(\"Orders\")` and `plt.title(...)`.", 'pay = ["UPI", "Cash", "UPI", "Card", "UPI", "Cash"]\nsns.countplot(x=pay)\nplt.ylabel("Orders")\nplt.title("Payment types")\nplt.show()', "countplot counts the rows itself: UPI 3, Cash 2, Card 1.", starter=PRE + 'pay = ["UPI", "Cash", "UPI", "Card", "UPI", "Cash"]\n',
     chart={"sns": "countplot", "bars": 3, "ylabel": "Orders", "title": True}),
   P("With `tips`, draw the **average tip** per day as bars, from Sunday back to Thursday (`order=[\"Sun\", \"Sat\", \"Fri\", \"Thur\"]`), with no error bars and a title.", "`sns.barplot(data=tips, x=\"day\", y=\"tip\", order=[...], errorbar=None)`.", TIPS + 'sns.barplot(data=tips, x="day", y="tip", order=["Sun", "Sat", "Fri", "Thur"], errorbar=None)\nplt.title("Average tip per day")\nplt.show()', "barplot works out the mean for each day; `order=` sets the left-to-right order.", starter=TIPS,
     chart={"sns": "barplot", "bars": 4, "xticks": ["Sun", "Sat", "Fri", "Thur"], "title": True}),
   P("With `tips`, draw violins of `total_bill` per `day`, split in two halves by `sex` (`hue=` and `split=True`), with a title.", "`sns.violinplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\", split=True)`.", TIPS + 'sns.violinplot(data=tips, x="day", y="total_bill", hue="sex", split=True)\nplt.title("Bills per day, split by sex")\nplt.show()', "`hue=` adds the legend; `split=True` puts both groups in one violin.", starter=TIPS,
     chart={"sns": "violinplot", "legend": ["Male", "Female"], "title": True}),
   P("Switch on the `whitegrid` style with `sns.set_theme(style=\"whitegrid\")`, then draw filled KDE curves of `total_bill` from `tips`, one per `time` (Lunch and Dinner).", "`sns.set_theme(style=\"whitegrid\")`, then `sns.kdeplot(data=tips, x=\"total_bill\", hue=\"time\", fill=True)`.", PRE + 'tips = sns.load_dataset("tips")\nsns.set_theme(style="whitegrid")\nsns.kdeplot(data=tips, x="total_bill", hue="time", fill=True)\nplt.title("Lunch and dinner bills")\nplt.show()', "Dinner bills are bigger and more spread out. The white grid comes from the style.", starter=PRE + 'tips = sns.load_dataset("tips")\n',
     chart={"sns": "kdeplot", "grid": True, "legend": ["Lunch", "Dinner"]})]},

 {"t": "h", "text": "Practice with real data: sales by category"},
 {"t": "prac", "items": [
   P("From `sales`, draw a histogram of `Sales` with 20 bins, **stacked** by `Category` (`multiple=\"stack\"`), with the x label `Sales (₹)`.", "`sns.histplot(data=sales, x=\"Sales\", hue=\"Category\", multiple=\"stack\", bins=20)`, then `plt.xlabel(...)`.", SALES + 'sns.histplot(data=sales, x="Sales", hue="Category", multiple="stack", bins=20)\nplt.xlabel("Sales (₹)")\nplt.title("Order values by category")\nplt.show()', "The legend shows the four categories; each tower is the total for its bin.", starter=SALES,
     chart={"sns": "histplot", "legend": True, "xlabel": "Sales (₹)"}),
   P("Use `sns.catplot` to draw a **box plot** of `Sales` per `Category`, with one panel per `Region` (`col=\"Region\"`, `col_wrap=2`).", "`sns.catplot(data=sales, x=\"Category\", y=\"Sales\", kind=\"box\", col=\"Region\", col_wrap=2)`.", SALES + 'g = sns.catplot(data=sales, x="Category", y="Sales", kind="box", col="Region", col_wrap=2, height=3, aspect=1.3)\ng.set_titles("{col_name}")\nplt.show()', "Four regions, so four panels. The pattern is the same everywhere: electronics and furniture orders are the big ones.", starter=SALES,
     chart={"sns": "catplot", "axes": 4}),
   P("Draw the **total profit** per category as bars, largest first (`order=[\"Furniture\", \"Electronics\", \"Clothing\", \"Groceries\"]`), with `estimator=\"sum\"`, no error bars and a title.", "`sns.barplot(data=sales, x=\"Category\", y=\"Profit\", estimator=\"sum\", errorbar=None, order=[...])`.", SALES + 'best = ["Furniture", "Electronics", "Clothing", "Groceries"]\nsns.barplot(data=sales, x="Category", y="Profit", estimator="sum", errorbar=None, order=best)\nplt.title("Total profit per category")\nplt.ylabel("Profit (₹)")\nplt.show()', "Furniture earns the most profit (₹80,580) although electronics has the biggest sales: profit margins differ.", starter=SALES,
     chart={"sns": "barplot", "bars": 4, "xticks": ["Furniture", "Electronics", "Clothing", "Groceries"], "title": True})]}
]
ch = {"id": "sns1", "part": 10, "title": "Seaborn: distributions and categories", "nav": "Spread & categories", "time": "50 min", "lvl": "Beginner",
 "keys": "seaborn sns set_theme load_dataset tips data x y hue order palette histplot bins binwidth kde stat percent density multiple stack dodge fill layer element step 2d histogram kdeplot fill common_norm bw_adjust cut rugplot ecdfplot ecdf cumulative displot figure-level axes-level facetgrid col row col_wrap height aspect set_axis_labels set_titles suptitle countplot barplot estimator sum mean median errorbar ci confidence interval sd boxplot violinplot split inner quart stripplot jitter swarmplot pointplot dodge catplot kind axes_style darkgrid whitegrid dark white ticks despine color_palette deep pastel colorblind husl Set2 custom colours",
 "lead": "Seaborn turns a DataFrame into a statistical chart in one line. Learn the shared arguments (`data`, `x`, `y`, `hue`), show the shape of one column with histograms, KDE curves and ECDFs, compare groups with count, bar, point, box, violin, strip and swarm plots, split charts into panels, and give them a clean, colour-blind-friendly style.",
 "goals": ["Draw Seaborn charts from a DataFrame with `data=`, `x=`, `y=` and `hue=`", "Show the shape of a column with `histplot`, `kdeplot`, `rugplot`, `ecdfplot` and `displot`", "Count and average categories with `countplot`, `barplot` and `pointplot`, and read error bars", "Compare spread with `boxplot`, `violinplot`, `stripplot` and `swarmplot`; make panels with `catplot`", "Style charts with themes, palettes and `despine()`"],
 "src": ["Course PDF: Seaborn Notes (basics and setup, distribution plots, categorical plots, styling)", "Seaborn documentation (seaborn.pydata.org)"],
 "body": body,
 "take": ["`sns.chart(data=df, x=..., y=..., hue=...)`: Seaborn groups, counts and averages from the raw rows; `plt.title()` and friends still work.", "One column's shape: `histplot` (bins, `kde=True`, `multiple=`), `kdeplot` (smooth, `cut=0`), `ecdfplot` (share up to a value).", "`countplot` counts rows; `barplot` and `pointplot` show the **mean** with a 95% interval (`errorbar=`, `estimator=`).", "Spread: `boxplot` and `violinplot` (`split=True`); every row: `stripplot` and `swarmplot`.", "Figure-level `displot` and `catplot` make panels with `col=`; style with `set_theme`, `palette=` (with `hue=`) and `despine()`."],
 "quiz": [
   Q("What does `hue=\"Region\"` do in a Seaborn chart?", ["Sorts the bars by region", "Colours the data by region and adds a legend", "Makes one panel per region", "Filters to one region"], 1, "`hue=` splits by colour inside one chart; `col=` (figure-level) makes panels."),
   Q("Which function draws a histogram of one number column?", ["`sns.countplot`", "`sns.histplot`", "`sns.barplot`", "`sns.boxplot`"], 1, "`histplot` bins numbers. `countplot` counts the values of a category column."),
   Q("By default, what is the height of each bar in `sns.barplot(data=df, x=\"city\", y=\"sales\")`?", ["The number of rows per city", "The total sales per city", "The mean sales per city, with a 95% interval", "The largest sale per city"], 2, "barplot's estimator is the mean; add `estimator=\"sum\"` for totals."),
   Q("What does this print?", ["`2`", "`3`", "`1`", "`0`"], 0, "Two different values, a and b, so two bars.", PRE + 'ax = sns.countplot(x=["a", "b", "a"])\nprint(len(ax.patches))\nplt.close()'),
   Q("What does `sns.displot(..., col=\"Region\")` give you?", ["One histogram per region, in panels of one figure", "A list of charts", "A pie chart", "An error"], 0, "displot is figure-level: `col=` makes one panel per value."),
   Q("You put `sns.catplot(...)` after `plt.subplot(1, 2, 1)`. What happens?", ["It fills the first subplot", "It makes its own new figure; the subplot stays empty", "It fills both subplots", "Nothing is drawn"], 1, "Figure-level functions always make their own figure. Use an axes-level function with `ax=` inside a grid."),
   Q("In `sns.violinplot(..., hue=\"sex\", split=True)`, what does `split=True` do?", ["Makes two separate charts", "Draws the two groups as the two halves of each violin", "Splits the y-axis", "Removes the legend"], 1, "Each violin shows one group on each side, so you compare them directly."),
   Q("Seaborn 0.13 warns about `sns.barplot(data=df, x=\"cat\", y=\"v\", palette=\"pastel\")`. What is the clean fix?", ["Remove `data=`", "Add `hue=\"cat\", legend=False`", "Use `ci=95`", "Use `plt.bar` instead"], 1, "A palette colours a `hue=` column. Use the same column as `x=` and hide the legend."),
   Q("Your KDE of ages goes below 18, but no customer is younger than 18. What helps?", ["`bins=18`", "`cut=0`", "`fill=True`", "`hue=\"age\"`"], 1, "`cut=0` stops the curve at the smallest and largest real value."),
   Q("What does `sns.catplot(data=df, x=\"day\", y=\"tip\")` draw when you leave out `kind=`?", ["Bars", "Box plots", "A strip plot (dots)", "A line"], 2, "catplot's default kind is `\"strip\"`. Always write the kind you want.")],
 "cards": [["Seaborn in one line", "`sns.histplot(data=df, x=\"col\", hue=\"group\")`: give the table and the column names."], ["`sns.set_theme()`", "Switches on Seaborn's look for every chart after it; `style=` and `palette=` change it."], ["histplot options", "`bins=`, `binwidth=`, `kde=True`, `stat=\"percent\"`, `multiple=\"stack\"`"], ["KDE", "A smooth curve of the shape. `bw_adjust=` sets the smoothing, `cut=0` stops it at the real data."], ["ECDF", "Height = share of rows at or below each value. No bins to choose."], ["Axes-level vs figure-level", "histplot/countplot/boxplot draw one chart; displot/catplot build a figure with panels (`col=`)."], ["countplot vs barplot", "countplot: how many rows. barplot: the mean of `y`, with a 95% interval."], ["Error bars", "`errorbar=(\"ci\", 95)` (default), `\"sd\"`, `\"se\"`, or `None`. Old code: `ci=`."], ["Violin", "Box plot + shape. `split=True` with `hue=` shows two groups in one violin."], ["strip vs swarm", "Both draw every row; swarm moves dots so none overlap (small data only)."], ["pointplot", "Means as dots joined by a line: good for ordered groups like quarters."], ["catplot", "Figure-level category charts: `kind=\"box\"`, `\"bar\"`, `\"count\"` ... Default is strip."], ["Palettes", "`palette=\"pastel\"` with `hue=`; `\"colorblind\"` is safe for everyone; `sns.despine()` cleans borders."]],
 "cheat": [["import seaborn as sns; sns.set_theme()", "Start"], ["sns.load_dataset('tips')", "Practice data"], ["sns.histplot(data=df, x='c', bins=20, kde=True)", "Histogram + curve"], ["sns.histplot(..., hue='g', multiple='stack')", "Stacked groups"], ["sns.histplot(data=df, x='a', y='b')", "2D histogram"], ["sns.kdeplot(data=df, x='c', hue='g', fill=True, cut=0)", "Smooth shapes"], ["sns.rugplot(data=df, x='c')", "A tick per value"], ["sns.ecdfplot(data=df, x='c')", "Share up to a value"], ["g = sns.displot(data=df, x='c', col='g', col_wrap=2)", "Panels"], ["g.set_titles('{col_name}'); g.figure.suptitle('T', y=1.03)", "Panel titles"], ["sns.countplot(data=df, x='g', order=...)", "Rows per category"], ["sns.barplot(data=df, x='g', y='v', estimator='sum', errorbar=None)", "Totals"], ["sns.boxplot / sns.violinplot(..., hue='h', split=True)", "Spread"], ["sns.stripplot(..., jitter=0.25) / sns.swarmplot(...)", "Every row"], ["sns.pointplot(data=df, x='q', y='v', hue='g', dodge=0.3)", "Means joined"], ["sns.catplot(data=df, x='g', y='v', kind='box', col='h')", "Category panels"], ["sns.set_theme(style='whitegrid', palette='pastel')", "Look"], ["sns.despine()  sns.color_palette('colorblind')", "Borders, colours"]]
}
poster = {"title": "Seaborn: Spread and Categories", "sub": "The table and the column names: Seaborn does the rest.", "mods": [
  {"title": "One number column", "sub": "What does it look like?", "cards": [
    {"h": "Histogram", "svg": HUEPIC[1], "foot": "histplot(hue=, multiple=\"stack\")"},
    {"h": "Count the bars", "c": PRE + 'ax = sns.histplot(x=[1, 2, 2, 3, 3, 3], bins=3)\nprint([int(b.get_height()) for b in ax.patches])\nplt.close()', "o": run(PRE + 'ax = sns.histplot(x=[1, 2, 2, 3, 3, 3], bins=3)\nprint([int(b.get_height()) for b in ax.patches])\nplt.close()')},
    {"h": "Watch out", "span": 1, "rules": [["trap", "KDE past the data", "add cut=0"], ["tip", "ecdfplot", "share of rows up to a value"], ["trap", "displot in plt.subplot", "makes its own figure"], ["acc", "displot(col='g')", "one panel per group"]]}]},
  {"title": "Categories", "sub": "Count, average, spread", "cards": [
    {"h": "Mean, not count", "c": PRE + 'ax = sns.barplot(x=["a", "a", "b"], y=[2, 4, 9], errorbar=None)\nprint([float(b.get_height()) for b in ax.patches])\nplt.close()', "o": run(PRE + 'ax = sns.barplot(x=["a", "a", "b"], y=[2, 4, 9], errorbar=None)\nprint([float(b.get_height()) for b in ax.patches])\nplt.close()'), "foot": "barplot = mean; countplot = rows"},
    {"h": "Style", "items": ["`set_theme(style=\"whitegrid\")`", "`hue=\"g\", palette=\"pastel\", legend=False`", "`sns.despine()`", "`errorbar=None` or `\"sd\"`"]}],
   "table": {"head": ["Question", "Chart"], "rows": [["shape of a column", "`histplot`, `kdeplot`"], ["rows per group", "`countplot`"], ["average per group", "`barplot`, `pointplot`"], ["spread per group", "`boxplot`, `violinplot`"], ["every row", "`stripplot`, `swarmplot`"], ["panels", "`displot`, `catplot`"]]}}]}
write_chapter('29_sns1.js', ch, poster)
