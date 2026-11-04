# The "Matplotlib vs Seaborn" picture (used by gen_sns2.py in Chapter 30 and by gen_ov10.py in the Part 10 overview).
# Two layouts: wide (side by side, for laptops) and tall (one under the other, for phones); html() shows the right one.
MPL_CODE = '''avg = sales.groupby("Region")["Sales"].mean()
plt.bar(avg.index, avg.values)
plt.title("Average order value per region")
plt.xlabel("Region")
plt.ylabel("Sales (₹)")
plt.show()'''
SNS_CODE = '''sns.set_theme()
sns.barplot(data=sales, x="Region", y="Sales")
plt.title("Average order value per region")
plt.show()'''
_PIC = '''import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
sales = pd.read_csv("sales_data.csv")
TALL = @@TALL@@
BLUE, TEAL, INK, GREY = "#2F6DB5", "#13897A", "#1F2933", "#5F6B7A"
MPL, SNS = @@MPL@@, @@SNS@@
heads = [("Matplotlib", BLUE, "You do the maths, then draw", ["you work out the averages", "you type the axis labels", "no error bars"]),
         ("Seaborn", TEAL, "Give it the table: it does the maths", ["it works out the averages", "labels from the column names", "95% error bars for you"])]
if TALL:
    fig = plt.figure(figsize=(5.4, 13.6))
    gs = fig.add_gridspec(6, 1, height_ratios=[1.05, 3, 1.35, 1.05, 3, 1.05], hspace=0.32, left=0.15, right=0.97, top=0.99, bottom=0.04)
    cell = lambda part, i: gs[part + 3 * i, 0]
else:
    fig = plt.figure(figsize=(11.5, 7.8))
    gs = fig.add_gridspec(3, 2, height_ratios=[0.72, 3, 1.45], hspace=0.3, wspace=0.16, left=0.065, right=0.985, top=0.985, bottom=0.06)
    cell = lambda part, i: gs[part, i]
for i, (name, col, line, points) in enumerate(heads):
    h = fig.add_subplot(cell(0, i)); h.axis("off")
    h.text(-0.2 if TALL else 0, 1.0, name, fontsize=21, fontweight="bold", color=col, va="top")
    if TALL:
        h.text(-0.2, 0.62, line, fontsize=12, color=INK, va="top")
        for j, point in enumerate(points):
            h.text(-0.2 + j % 2 * 0.62, 0.26 - j // 2 * 0.26, ("✗ " if i == 0 else "✓ ") + point, fontsize=10, color=col, va="top")
    else:
        h.text(0, 0.38, line, fontsize=11.5, color=INK, va="top")
        for j, point in enumerate(points):
            h.text(0.6, 0.98 - j * 0.34, ("✗  " if i == 0 else "✓  ") + point, fontsize=9.8, color=col, va="top")
ax1 = fig.add_subplot(cell(1, 0))
avg = sales.groupby("Region")["Sales"].mean()
ax1.bar(avg.index, avg.values)
ax1.set_title("Average order value per region")
ax1.set_xlabel("Region")
ax1.set_ylabel("Sales (₹)")
with sns.axes_style("darkgrid"), sns.color_palette("deep"):
    ax2 = fig.add_subplot(cell(1, 1), sharey=ax1)
    sns.barplot(data=sales, x="Region", y="Sales", ax=ax2)
ax2.set_title("Average order value per region")
top = max(line.get_ydata().max() for line in ax2.lines)
ax2.set_ylim(0, top * 1.16)
first = ax2.lines[0].get_ydata().max()
ax2.annotate("error bar: where the true\\naverage probably lies", xy=(0, first), xytext=(0.35, top * 1.07), fontsize=9, color=TEAL,
             arrowprops=dict(arrowstyle="->", color=TEAL), va="center")
ax2.tick_params(labelleft=True)
for i, (code, col, n) in enumerate([(MPL, BLUE, 6), (SNS, TEAL, 4)]):
    c = fig.add_subplot(cell(2, i)); c.axis("off")
    c.text(-0.2 if TALL else 0.02, 0.84, code, family="monospace", fontsize=9.3 if TALL else 9.6, color=INK, va="top", linespacing=1.55,
           bbox=dict(boxstyle="round,pad=0.7", facecolor="#F3F5F8", edgecolor=col, linewidth=1.4))
    c.text(1.0, 0.0 if TALL else 0.84, "%d lines" % n, ha="right", va="bottom" if TALL else "top", fontsize=11, fontweight="bold", color=col)
note = "Same data, same question. Seaborn draws with Matplotlib underneath,%sso plt.title(), plt.ylim() and plt.savefig() work on both."
fig.text(0.5, 0.008 if TALL else 0.012, note % ("\\n" if TALL else " "), ha="center", fontsize=10 if TALL else 10.5, color=GREY, style="italic")
plt.show()
'''


def pic(tall):
    return _PIC.replace('@@TALL@@', str(tall)).replace('@@MPL@@', repr(MPL_CODE)).replace('@@SNS@@', repr(SNS_CODE))


ALT = ("The same bar chart of average order value per region drawn twice. Matplotlib: plain bars, made with groupby, "
       "plt.bar and three label lines. Seaborn: one barplot line on the whole table, with a grey grid, error bars and "
       "axis labels taken from the column names.")


def html(wide, tall):
    """The picture for the page: the tall layout on phones, the wide one everywhere else."""
    return ('<picture><source media="(max-width: 640px)" srcset="%s"><img class="figimg" src="%s" alt="%s" loading="lazy"></picture>'
            % (tall, wide, ALT))
