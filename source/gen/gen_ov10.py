# Part 10 overview (Seaborn): writes hub2/ov_10.js and SHEETS[10] in hub2/sheets.js. Run with the matching Python.
import os, re
from chlib import Chapter, js, run, HUB
PRE = 'import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n'
K = Chapter('ov10', PRE)
P, Q = K.P, K.Q
def D(t, d, code, go):
    code = K.full(code); return {"t": t, "d": d, "c": code, "o": run(code), "go": go}
def VS(title, head, rows, code, rule):
    code = K.full(code); b = K.C(code); return {"t": "vs", "title": title, "head": head, "rows": rows, "c": b["c"], "o": b["o"], "rule": rule}
SALES = PRE + 'sns.set_theme()\nsales = pd.read_csv("sales_data.csv")\n'
TIPS = PRE + 'tips = sns.load_dataset("tips")\n'
body = [
 {"t": "h", "text": "Mind map of Part 10"},
 {"t": "mm", "title": "Part 10 at a glance", "root": "Part 10: Seaborn", "hint": "Tap a branch to open that chapter", "kids": [
   {"t": "29. Spread & categories", "go": "sns1", "k": ["data=, x=, y=, hue=", "histplot, kdeplot, ecdfplot", "displot panels", "countplot vs barplot", "box, violin, strip, swarm", "catplot, themes, palettes"]},
   {"t": "30. Relations & grids", "go": "sns2", "k": ["scatterplot, lineplot", "regplot, lmplot, residplot", "relplot panels", "heatmap, clustermap", "FacetGrid, pairplot, jointplot", "contexts, ax= dashboards"]}]},
 {"t": "h", "text": "Key definitions"},
 {"t": "defs", "items": [
   D("Seaborn", "A library of statistical charts built on Matplotlib. Give it a DataFrame and column names; import it as `sns`.", 'print(sns.__name__)', "sns1"),
   D("hue", "An argument that colours the data by one more column and adds a legend.", TIPS + 'ax = sns.histplot(data=tips, x="tip", hue="time")\nprint([t.get_text() for t in ax.get_legend().get_texts()])\nplt.close()', "sns1"),
   D("Axes-level function", "Draws one chart on one axes and returns it; accepts `ax=`. histplot, boxplot, scatterplot, heatmap ...", 'ax = sns.histplot(x=[1, 2, 2])\nprint(type(ax).__name__)\nplt.close()', "sns1"),
   D("Figure-level function", "Builds a whole figure, with panels from `col=` and `row=`, and returns a grid. displot, catplot, relplot, lmplot ...", 'g = sns.displot(x=[1, 2, 3, 4], col=["a", "a", "b", "b"])\nprint(type(g).__name__)\nplt.close("all")', "sns1"),
   D("KDE", "Kernel density estimate: a smooth curve of a column's shape. `bw_adjust=` sets the smoothing.", 'ax = sns.kdeplot(x=[1, 2, 2, 3, 3, 3, 4])\nprint(len(ax.lines))\nplt.close()', "sns1"),
   D("ECDF", "A line that climbs from 0 to 1: the share of rows at or below each value.", 'ax = sns.ecdfplot(x=[10, 20, 30, 40])\nprint(ax.lines[0].get_ydata().tolist())\nplt.close()', "sns1"),
   D("Estimator", "The summary a chart shows per group: the mean by default in barplot, pointplot and lineplot.", 'ax = sns.barplot(x=["a", "a"], y=[4, 8], estimator="sum", errorbar=None)\nprint(float(ax.patches[0].get_height()))\nplt.close()', "sns1"),
   D("Confidence interval", "The range where the true average probably lies (95% by default): the error bar and the band.", 'ax = sns.barplot(x=["a", "a", "a"], y=[4, 6, 8], errorbar="sd")\nprint(len(ax.lines))\nplt.close()', "sns1"),
   D("Violin plot", "A box plot plus the shape of the data on both sides; `split=True` shows two groups in one violin.", TIPS + 'ax = sns.violinplot(data=tips, x="time", y="tip")\nprint([t.get_text() for t in ax.get_xticklabels()])\nplt.close()', "sns1"),
   D("Palette", "A list of colours. `palette=` colours the `hue=` groups; `\"colorblind\"` is safe for everyone.", 'print(sns.color_palette("colorblind", 2).as_hex())', "sns1"),
   D("Regression line", "The straight line (or curve with `order=2`) that fits a scatter best; `regplot` draws it with a 95% band.", 'import numpy as np\nprint(np.polyfit([1, 2, 3], [3, 5, 7], 1).round(2))', "sns2"),
   D("Residual", "Real value minus the line's value. A pattern in the residuals means the line has the wrong shape.", 'real, predicted = [5, 9], [6, 8]\nprint([r - p for r, p in zip(real, predicted)])', "sns2"),
   D("Heatmap", "A grid of coloured cells, one per value of a table; `annot=True` writes the numbers.", 'df = pd.DataFrame({"a": [1, 2], "b": [3, 4]})\nax = sns.heatmap(df, annot=True)\nprint(len(ax.texts))\nplt.close()', "sns2"),
   D("FacetGrid", "A grid of panels, one per value of `col=` / `row=`; `g.map(...)` draws a chart in each.", TIPS + 'g = sns.FacetGrid(tips, col="time", row="sex")\nprint(g.axes.shape)\nplt.close("all")', "sns2"),
   D("Pair plot", "A scatter for every pair of number columns, and each column's shape on the diagonal.", TIPS + 'g = sns.pairplot(tips, vars=["total_bill", "tip", "size"])\nprint(g.axes.shape)\nplt.close("all")', "sns2")]},
 {"t": "h", "text": "The big comparison tables"},
 {"t": "table", "master": True, "title": "Which Seaborn chart for which question", "head": ["Question", "Chart", "Code", "Watch out"], "rows": [
   ["What does one number column look like?", "Histogram / KDE", "`sns.histplot(data=df, x=\"c\", kde=True)`", "Try two bin sizes; `cut=0` for KDE"],
   ["How many rows per category?", "Count plot", "`sns.countplot(data=df, x=\"g\")`", "Sort with `order=`"],
   ["Which group has the higher average?", "Bar / point plot", "`sns.barplot(data=df, x=\"g\", y=\"v\")`", "It shows the mean, not the total"],
   ["How spread out is each group?", "Box / violin", "`sns.boxplot(data=df, x=\"g\", y=\"v\")`", "Add a strip plot to show the rows"],
   ["Are two numbers related?", "Scatter / regression", "`sns.regplot(data=df, x=\"a\", y=\"b\")`", "Check `residplot`; correlation is not cause"],
   ["How does it change over time?", "Line plot", "`sns.lineplot(data=df, x=\"month\", y=\"v\")`", "The band is the mean's interval"],
   ["How do many columns relate?", "Heatmap / pair plot", "`sns.heatmap(df.corr(), annot=True, center=0)`", "Diverging colours around 0"]]},
 {"t": "table", "master": True, "title": "Axes-level and figure-level", "head": ["Family", "Axes-level (one chart, ax=)", "Figure-level (panels, col= / row=)"], "rows": [
   ["Distributions", "`histplot`, `kdeplot`, `ecdfplot`, `rugplot`", "`displot(kind=\"hist\" / \"kde\" / \"ecdf\")`"],
   ["Categories", "`countplot`, `barplot`, `boxplot`, `violinplot`, `stripplot`, `swarmplot`, `pointplot`", "`catplot(kind=...)` (default `\"strip\"`)"],
   ["Relationships", "`scatterplot`, `lineplot`", "`relplot(kind=\"scatter\" / \"line\")`"],
   ["Regression", "`regplot`, `residplot`", "`lmplot`"],
   ["Many columns", "`heatmap`", "`clustermap`, `pairplot`, `jointplot`, `FacetGrid`, `PairGrid`"]]},
 {"t": "table", "master": True, "title": "Options you will use everywhere", "head": ["I want", "Code"], "rows": [
   ["Colour by a column", "`hue=\"Region\"`"], ["Categories in my order", "`order=[\"North\", \"South\"]`"], ["Totals instead of means", "`estimator=\"sum\"`"], ["No error bar or band", "`errorbar=None` (regplot / lmplot: `ci=None`)"],
   ["Colours for the groups", "`hue=\"g\", palette=\"pastel\", legend=False`"], ["One panel per group", "`col=\"g\", col_wrap=2` (figure-level)"], ["Panel titles", "`g.set_titles(\"{col_name}\")`, `g.figure.suptitle(\"T\", y=1.03)`"],
   ["Numbers in a heatmap", "`annot=True, fmt=\".2f\"` (whole numbers: `fmt=\"d\"`)"], ["A clean look", "`sns.set_theme(style=\"whitegrid\")`, `sns.despine()`"], ["Bigger text for slides", "`sns.set_context(\"talk\")`"], ["A chart in a grid", "`sns.boxplot(..., ax=axes[0, 1])`"]]},
 {"t": "h", "text": "Don't mix these up"},
 VS("countplot vs barplot", ["", "sns.countplot(x=...)", "sns.barplot(x=..., y=...)"], [["Bar height", "Number of rows", "Mean of y (by default)"], ["Needs y=", "No", "Yes"], ["Error bar", "None", "95% interval"]],
    'ax1 = sns.countplot(x=["a", "a", "b"])\nprint([int(b.get_height()) for b in ax1.patches])\nplt.close()\nax2 = sns.barplot(x=["a", "a", "b"], y=[2, 4, 9], errorbar=None)\nprint([float(b.get_height()) for b in ax2.patches])\nplt.close()', "Counting rows? countplot. Averaging a number? barplot."),
 VS("histplot vs displot", ["", "sns.histplot()", "sns.displot()"], [["Kind", "Axes-level", "Figure-level"], ["Returns", "An axes", "A FacetGrid"], ["Panels", "With `plt.subplots` + `ax=`", "`col=`, `row=`"], ["Size", "`plt.figure(figsize=...)`", "`height=`, `aspect=`"]],
    'ax = sns.histplot(x=[1, 2, 3, 4])\nplt.close()\ng = sns.displot(x=[1, 2, 3, 4], col=["a", "a", "b", "b"])\nprint(type(ax).__name__, type(g).__name__, len(g.axes.flat))\nplt.close("all")', "One chart, or a chart inside a grid: histplot. Panels per group: displot."),
 VS("hue= vs col=", ["", "hue=\"g\"", "col=\"g\""], [["Groups shown", "In one chart, by colour", "In separate panels"], ["Works in", "Almost every function", "Figure-level functions only"], ["Best for", "2 to 4 groups to compare directly", "Many groups, or busy charts"]],
    'df = pd.DataFrame({"v": [1, 2, 3, 4], "g": ["a", "a", "b", "b"]})\nax = sns.histplot(data=df, x="v", hue="g")\nprint(len(ax.figure.axes))\nplt.close()\ng = sns.displot(data=df, x="v", col="g")\nprint(len(g.axes.flat))\nplt.close("all")', "Compare on top of each other: hue. Side by side: col."),
 VS("boxplot vs violinplot", ["", "sns.boxplot()", "sns.violinplot()"], [["Shows", "Five numbers and outliers", "The whole shape (and a mini box)"], ["Good for", "Spotting outliers, quick comparison", "Two peaks, or uneven shapes"], ["Two groups in one", "Side by side with `hue=`", "`hue=` + `split=True`"]],
    'ax = sns.boxplot(x=["a"] * 5, y=[1, 2, 3, 4, 20])\nprint(len(ax.lines) > 0)\nplt.close()', "Need the outliers? Box. Need the shape? Violin."),
 VS("regplot vs lmplot", ["", "sns.regplot()", "sns.lmplot()"], [["Kind", "Axes-level", "Figure-level"], ["Groups", "One line", "`hue=` lines, `col=` panels"], ["In a dashboard", "Yes, with `ax=`", "No: own figure"]],
    'ax = sns.regplot(x=[1, 2, 3], y=[2, 4, 7], ci=None)\nprint(len(ax.lines))\nplt.close()', "One fitted line, maybe in a grid: regplot. Lines per group or panels: lmplot."),
 VS("sns.heatmap vs plt.imshow", ["", "sns.heatmap(df)", "plt.imshow(df)"], [["Labels", "From the DataFrame's index and columns", "Numbers 0, 1, 2 unless you set ticks"], ["Values in cells", "`annot=True`", "A loop of `plt.text()`"], ["Middle colour", "`center=0`", "`vmin=`, `vmax=`"]],
    'df = pd.DataFrame({"Mon": [3, 1], "Tue": [2, 5]}, index=["Pune", "Goa"])\nax = sns.heatmap(df, annot=True)\nprint([t.get_text() for t in ax.get_xticklabels()], len(ax.texts))\nplt.close()', "With a DataFrame, `sns.heatmap` does the labels and numbers for you."),
 {"t": "h", "text": "Try it yourself"},
 {"t": "p", "b": "Seaborn loads with Pandas and Matplotlib the first time you press **Run** (about 10 to 20 seconds). The checker reads your chart: which Seaborn function you used, the chart type, counts, titles and labels."},
 {"t": "prac", "items": [
   P("From `sales_data.csv`, draw a **box plot** of `Satisfaction_Score` per `Region` in the order North, South, East, West, with a title.", "`sns.boxplot(data=sales, x=\"Region\", y=\"Satisfaction_Score\", order=[...])`.", SALES + 'sns.boxplot(data=sales, x="Region", y="Satisfaction_Score", order=["North", "South", "East", "West"])\nplt.title("Satisfaction per region")\nplt.show()', "The boxes overlap a lot: satisfaction is much the same everywhere.", starter=SALES,
     chart={"sns": "boxplot", "boxes": 4, "xticks": ["North", "South", "East", "West"], "title": True}),
   P("Draw a **heatmap** of the total `Quantity` with `Category` as rows and `Region` as columns (`pivot_table` with `aggfunc=\"sum\"`), with whole numbers in the cells.", "`table = sales.pivot_table(values=\"Quantity\", index=\"Category\", columns=\"Region\", aggfunc=\"sum\")`, then `sns.heatmap(table, annot=True, fmt=\"d\")`.", SALES + 'table = sales.pivot_table(values="Quantity", index="Category", columns="Region", aggfunc="sum")\nsns.heatmap(table, annot=True, fmt="d", cmap="Blues")\nplt.title("Items sold")\nplt.tight_layout()\nplt.show()', "16 cells; the South sells the most items in most categories.", starter=SALES,
     chart={"sns": "heatmap", "texts": 16, "title": True}),
   P("Draw `Profit` against `Sales` with `sns.lmplot`, one coloured line per `Region` (`hue=`).", "`sns.lmplot(data=sales, x=\"Sales\", y=\"Profit\", hue=\"Region\")`.", SALES + 'sns.lmplot(data=sales, x="Sales", y="Profit", hue="Region", height=4, scatter_kws={"s": 10})\nplt.show()', "The four lines lie close together: every region makes about the same profit per rupee.", starter=SALES,
     chart={"sns": "lmplot", "figlegend": True})]}
]
ov = {"part": 10, "title": "Part 10 overview: Seaborn", "nav": "Part 10 overview", "time": "25 min",
 "keys": "seaborn sns hue axes-level figure-level facetgrid histplot kdeplot ecdfplot displot countplot barplot estimator errorbar confidence interval boxplot violinplot stripplot swarmplot pointplot catplot palette theme scatterplot lineplot regplot lmplot residplot relplot heatmap clustermap pairplot jointplot context",
 "lead": "Both Seaborn chapters on one page: which chart answers which question, axes-level and figure-level functions side by side, the options you use everywhere, and the mix-ups that cost marks (`countplot` vs `barplot`, `hue=` vs `col=`, `regplot` vs `lmplot`).",
 "five": ["Seaborn takes the table and the column names: `sns.chart(data=df, x=\"a\", y=\"b\", hue=\"g\")`, and it does the grouping, counting and averaging.",
          "One column's shape: `histplot`, `kdeplot`, `ecdfplot`. Categories: `countplot` counts, `barplot` and `pointplot` average, `boxplot`, `violinplot`, `stripplot` and `swarmplot` show spread.",
          "Relationships: `scatterplot` (hue, size, style), `lineplot` (mean + band), `regplot` (fitted line) and `residplot` to check it.",
          "Many columns: `heatmap` for any correlation or pivot table, `clustermap` to group similar rows, `pairplot` for every pair, `jointplot` for one pair with margins.",
          "==Axes-level== functions draw one chart and take `ax=`; ==figure-level== ones (`displot`, `catplot`, `relplot`, `lmplot`) make panels with `col=` and return a grid `g`."],
 "body": body,
 "quiz": [
   Q("Which function counts how many rows each category has?", ["`sns.barplot`", "`sns.countplot`", "`sns.histplot`", "`sns.pointplot`"], 1, "countplot counts; barplot averages a `y=` column."),
   Q("What does this print?", ["`[3, 1]`", "`[1, 3]`", "`[4]`", "`[2, 2]`"], 0, "Bars come in the order the values first appear: a (3), then b (1).", PRE + 'ax = sns.countplot(x=["a", "b", "a", "a"])\nprint([int(b.get_height()) for b in ax.patches])\nplt.close()'),
   Q("You want one histogram per region, side by side. Which call?", ["`sns.histplot(data=df, x=\"v\", hue=\"Region\")`", "`sns.displot(data=df, x=\"v\", col=\"Region\")`", "`sns.countplot(data=df, x=\"Region\")`", "`sns.heatmap(df)`"], 1, "Panels need a figure-level function with `col=`."),
   Q("By default, what does the black line on each bar of `sns.barplot` show?", ["The smallest and largest value", "A 95% confidence interval of the mean", "One standard deviation", "The median"], 1, "Change it with `errorbar=\"sd\"`, or remove it with `errorbar=None`."),
   Q("Which chart shows each group's spread **and** its full shape?", ["`countplot`", "`violinplot`", "`pointplot`", "`lineplot`"], 1, "A violin adds the shape on both sides of a mini box plot."),
   Q("`sns.lineplot(data=df, x=\"month\", y=\"sales\")` with many rows per month draws what?", ["Every row joined", "The mean per month with a 95% band", "The total per month", "A bar per month"], 1, "lineplot averages repeated x values; `estimator=\"sum\"` gives totals."),
   Q("A residual plot shows a curve. What should you try?", ["`regplot(..., order=2)`", "A pie chart", "`errorbar=None`", "`hue=`"], 0, "A pattern means a straight line is the wrong shape; fit a curve."),
   Q("For a correlation heatmap, which settings fit best?", ["`cmap=\"Blues\"`", "`cmap=\"coolwarm\", center=0`", "`palette=\"pastel\"`", "`kind=\"hex\"`"], 1, "Correlations run from -1 to 1: a diverging scale centred on 0."),
   Q("What does this print?", ["`(2, 2)`", "`(4,)`", "`(1, 4)`", "`4`"], 0, "Two values of `row` and two of `col`: a 2 × 2 grid of panels.", TIPS + 'g = sns.FacetGrid(tips, col="time", row="smoker")\nprint(g.axes.shape)\nplt.close("all")'),
   Q("Which call puts a Seaborn chart into `axes[1]` of a Matplotlib grid?", ["`sns.catplot(..., ax=axes[1])`", "`sns.boxplot(..., ax=axes[1])`", "`sns.lmplot(..., ax=axes[1])`", "`sns.pairplot(..., ax=axes[1])`"], 1, "Only axes-level functions accept `ax=`."),
   Q("Seaborn warns about `palette=\"pastel\"` in a barplot without `hue=`. The fix?", ["Remove `data=`", "Add `hue=` (same column as `x=`) and `legend=False`", "Use `ci=95`", "Use `sns.set_context`"], 1, "Since Seaborn 0.13 a palette colours the `hue=` groups.")],
 "cards": [["Seaborn's pattern", "`sns.chart(data=df, x=\"a\", y=\"b\", hue=\"g\")`"], ["hue vs col", "hue: colours in one chart. col: separate panels (figure-level)."], ["Axes-level vs figure-level", "One chart + `ax=` / a whole figure of panels that returns a grid `g`."], ["histplot options", "`bins=`, `kde=True`, `stat=\"percent\"`, `multiple=\"stack\"`"], ["countplot vs barplot", "Rows per category / the mean of y with a 95% interval."], ["Error bars", "`errorbar=(\"ci\", 95)`, `\"sd\"`, `None`; regplot uses `ci=`."], ["Box vs violin", "Five numbers and outliers / the full shape; `split=True` with hue."], ["catplot", "All category charts with `kind=`; the default is strip."], ["Regression", "`regplot` (one line), `lmplot` (per group / panels), `residplot` (check)."], ["Heatmap", "`sns.heatmap(table, annot=True, fmt=\".2f\", cmap=\"coolwarm\", center=0)`"], ["Grids", "`FacetGrid` + `map`, `pairplot` (every pair), `jointplot` (one pair + margins)."], ["Look", "`set_theme(style=)`, `palette=` with hue, `despine()`, `set_context(\"talk\")`."], ["Save", "Axes-level: `plt.savefig()`. Figure-level: `g.savefig()`."]],
}
open(os.path.join(HUB, 'ov_10.js'), 'w', encoding='utf-8').write('/* ---------- Part 10 overview: Seaborn (generated by gen/gen_ov10.py; every output came from running the code) ---------- */\noverview(' + js(ov) + ');\n')
SHEET = {"title": ["Seaborn: the ", ["3", "pink"], " big ", ["differences", "lime"]], "sub": "Cheat sheet", "groups": [
  {"h": "Axes-level vs figure-level", "cols": ["Draws", "Panels", "Returns"], "rows": [
    {"name": "histplot", "c": "blue", "img": "ov10-axes", "sym": "sns.histplot()", "symName": "Axes-level", "facts": [["txt", "One chart"], ["big", "ax=axes[0, 1]"], ["txt", "An axes"]],
     "cap": "One photo in a frame: hang it alone or in a gallery wall.", "ex": "sns.boxplot(data=df, x=\"g\", y=\"v\")"},
    {"name": "displot", "c": "purple", "img": "ov10-panels", "sym": "sns.displot()", "symName": "Figure-level", "facts": [["txt", "A whole figure"], ["big", "col=\"g\", col_wrap=2"], ["txt", "A FacetGrid"]],
     "cap": "A photo album: one page per group, all with the same layout.", "ex": "sns.catplot(..., kind=\"box\", col=\"g\")"}]},
  {"h": "countplot vs barplot", "cols": ["Bar height", "Needs y=", "Error bar"], "rows": [
    {"name": "countplot", "c": "teal", "img": "ov10-count", "sym": "sns.countplot()", "symName": "How many", "facts": [["txt", "Rows per category"], ["no", "No"], ["txt", "None"]],
     "cap": "A head count at the door: how many came from each city.", "ex": "sns.countplot(data=df, x=\"city\")"},
    {"name": "barplot", "c": "orange", "img": "ov10-bar", "sym": "sns.barplot()", "symName": "How much on average", "facts": [["txt", "Mean of y"], ["yes", "Yes"], ["txt", "95% interval"]],
     "cap": "The average bill per city, with a whisker for how sure we are.", "ex": "sns.barplot(..., estimator=\"sum\")"}]},
  {"h": "hue= vs col=", "cols": ["Groups", "Works in", "Best for"], "rows": [
    {"name": "hue=", "c": "pink", "img": "ov10-hue", "sym": "hue=\"g\"", "symName": "Colours", "facts": [["txt", "One chart, by colour"], ["txt", "Almost every function"], ["txt", "2 to 4 groups"]],
     "cap": "Two inks on one page: easy to compare, busy with too many.", "ex": "sns.kdeplot(data=df, x=\"v\", hue=\"g\")"},
    {"name": "col=", "c": "green", "img": "ov10-col", "sym": "col=\"g\"", "symName": "Panels", "facts": [["txt", "Separate panels"], ["warn", "Figure-level only"], ["txt", "Many groups"]],
     "cap": "One page per group: calm, and the axes line up.", "ex": "sns.relplot(..., col=\"g\", col_wrap=2)"}]}],
 "foot": "Pattern: sns.chart(data=df, x=..., y=..., hue=...). Then plt.title(), or g.set_titles() for panels.",
 "credit": "Pictures drawn with Matplotlib (gen/gen_sheetimgs.py). Text and icons checked by hand."}
sp = os.path.join(HUB, 'sheets.js'); s = open(sp, encoding='utf-8').read()
block = '/* @@SHEET10 (generated by gen/gen_ov10.py) */\nSHEETS[10] = ' + js(SHEET) + ';\n/* @@END10 */\n'
if '/* @@SHEET10' in s: s = re.sub(r'/\* @@SHEET10.*?/\* @@END10 \*/\n', lambda m: block, s, flags=re.S)
else: s = s.replace('SHEETS[11] = {', block + '\nSHEETS[11] = {', 1)
open(sp, 'w', encoding='utf-8').write(s)
print('ov_10.js and SHEETS[10] written')
