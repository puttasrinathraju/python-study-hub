# Pictures for the Part 8-10 picture cheat sheets (img/ovN-*.webp, 400 x 400), drawn with Matplotlib in the
# dark neon style of the earlier sheets. Run with the matching Python: python3 gen_sheetimgs.py 8 (or 9, 10).
import os, sys, io
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Rectangle, Wedge
from PIL import Image
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'hub2', 'img')
BG = '#0B1220'
COL = {'blue': '#60A5FA', 'teal': '#2DD4BF', 'green': '#4ADE80', 'purple': '#C084FC', 'orange': '#FB923C', 'pink': '#F472B6', 'cyan': '#22D3EE', 'yellow': '#FACC15'}


def canvas():
    fig = plt.figure(figsize=(4, 4), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1]); ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.axis('off')
    fig.patch.set_facecolor(BG); ax.set_facecolor(BG)
    return fig, ax


def glow_box(ax, x, y, w, h, c, fill=0.18, lw=2.2, r=0.25, text=None, fs=13, tc='white'):
    for k, a in ((7, 0.06), (4, 0.12)):
        ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle='round,pad=0,rounding_size=%s' % r, fill=False, ec=c, lw=lw + k, alpha=a))
    ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle='round,pad=0,rounding_size=%s' % r, fc=c, alpha=fill, ec='none'))
    ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle='round,pad=0,rounding_size=%s' % r, fill=False, ec=c, lw=lw))
    if text is not None:
        ax.text(x + w / 2, y + h / 2, text, ha='center', va='center', color=tc, fontsize=fs, fontweight='bold', family='DejaVu Sans Mono')


def arrow(ax, a, b, c, lw=3):
    for k, al in ((9, 0.08), (5, 0.16)):
        ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=26, color=c, lw=lw + k, alpha=al))
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=26, color=c, lw=lw))


def table(ax, x, y, rows, cols, cw, ch, c, hl=(), dim=(), labels=None, fs=11):
    for r in range(rows):
        for k in range(cols):
            on = (r, k) in hl
            glow_box(ax, x + k * cw, y - (r + 1) * ch, cw * 0.92, ch * 0.86, c if on else '#475569', fill=0.45 if on else 0.08, lw=1.6, r=0.12,
                     text=labels[r][k] if labels else None, fs=fs, tc='white' if on else '#94A3B8')


def save(fig, name):
    buf = io.BytesIO(); fig.savefig(buf, format='png', facecolor=BG); plt.close(fig)
    Image.open(buf).convert('RGB').save(os.path.join(OUT, name + '.webp'), 'WEBP', quality=86, method=6)
    print('saved', name)


def part8():
    # loc: labels and names
    fig, ax = canvas(); c = COL['blue']
    table(ax, 2.2, 8.2, 4, 2, 2.8, 1.5, c, hl=[(1, 0), (1, 1), (2, 0), (2, 1)], labels=[["", ""], ["", ""], ["", ""], ["", ""]])
    for r, t in enumerate(['"a"', '"b"', '"c"', '"d"']):
        glow_box(ax, 0.4, 8.2 - (r + 1) * 1.5, 1.5, 1.3, COL['yellow'], fill=0.25, lw=1.8, r=0.3, text=t, fs=12)
    ax.text(5, 9.2, 'loc["b":"c"]', ha='center', color='white', fontsize=17, fontweight='bold', family='DejaVu Sans Mono')
    save(fig, 'ov8-loc')
    # iloc: positions 0 1 2 3
    fig, ax = canvas(); c = COL['purple']
    table(ax, 2.2, 8.2, 4, 2, 2.8, 1.5, c, hl=[(0, 0), (0, 1), (1, 0), (1, 1)])
    for r in range(4):
        glow_box(ax, 0.4, 8.2 - (r + 1) * 1.5, 1.5, 1.3, '#94A3B8', fill=0.12, lw=1.8, r=0.3, text=str(r), fs=14)
    ax.text(5, 9.2, 'iloc[0:2]', ha='center', color='white', fontsize=17, fontweight='bold', family='DejaVu Sans Mono')
    save(fig, 'ov8-iloc')
    # agg: three groups collapse to three rows
    fig, ax = canvas(); c = COL['green']
    cols = [COL['green'], COL['cyan'], COL['orange']]
    for i, g in enumerate([0, 0, 1, 2, 1, 0]):
        glow_box(ax, 0.6, 8.6 - i * 1.3, 2.6, 1.05, cols[g], fill=0.3, lw=1.6, r=0.15)
    arrow(ax, (3.7, 5.2), (5.6, 5.2), 'white')
    for i in range(3):
        glow_box(ax, 6.1, 7.2 - i * 2.0, 3.2, 1.5, cols[i], fill=0.5, lw=2, r=0.2, text='mean', fs=13)
    save(fig, 'ov8-agg')
    # transform: every row keeps its place and gets its group's answer
    fig, ax = canvas()
    for i, g in enumerate([0, 0, 1, 2, 1, 0]):
        glow_box(ax, 0.6, 8.6 - i * 1.3, 2.6, 1.05, cols[g], fill=0.3, lw=1.6, r=0.15)
        arrow(ax, (3.5, 9.1 - i * 1.3), (5.6, 9.1 - i * 1.3), cols[g], lw=2)
        glow_box(ax, 6.0, 8.6 - i * 1.3, 3.2, 1.05, cols[g], fill=0.55, lw=1.6, r=0.15, text='mean', fs=11)
    save(fig, 'ov8-transform')
    # merge: two tables side by side, joined on a key
    fig, ax = canvas()
    table(ax, 0.5, 8.6, 4, 2, 1.9, 1.5, COL['teal'], hl=[(r, 0) for r in range(4)])
    table(ax, 5.6, 8.6, 4, 2, 1.9, 1.5, COL['pink'], hl=[(r, 0) for r in range(4)])
    for r in range(4):
        y = 8.6 - (r + 0.55) * 1.5
        ax.plot([4.15, 5.55], [y, y], color=COL['yellow'], lw=3, alpha=0.9)
    ax.text(5, 1.4, 'on="key"', ha='center', color=COL['yellow'], fontsize=17, fontweight='bold', family='DejaVu Sans Mono')
    save(fig, 'ov8-merge')
    # concat: two tables stacked
    fig, ax = canvas()
    table(ax, 2.6, 9.4, 2, 3, 1.7, 1.25, COL['orange'], hl=[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)])
    arrow(ax, (5, 6.3), (5, 5.3), 'white')
    table(ax, 2.6, 5.0, 2, 3, 1.7, 1.25, COL['cyan'], hl=[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)])
    ax.text(5, 1.4, 'concat([a, b])', ha='center', color='white', fontsize=16, fontweight='bold', family='DejaVu Sans Mono')
    save(fig, 'ov8-concat')


if __name__ == '__main__':
    {'8': part8}[sys.argv[1]]()
