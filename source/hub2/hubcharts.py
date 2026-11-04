# _hubcharts: chart support for the Python Study Hub runner.
# The browser runner and the checker in the build use this same file, so both see the same chart facts.
# On import it switches Matplotlib to the Agg backend (no window), makes plt.show() keep a picture of every
# open chart, and records which plotting functions draw on each axes.
import os, io, json, base64, functools, sys
os.environ['MPLBACKEND'] = 'Agg'
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.axes import Axes
from matplotlib.patches import Rectangle, Wedge
from matplotlib.collections import PathCollection, QuadMesh

PNG = False          # True in the browser: keep a PNG of every chart
DPI = 80
SHOWN = []           # charts of the current run: [{'png': str, 'facts': dict}]
LAST = []            # charts of the previous run (read by a project's check run)
SNS = []             # seaborn functions called in this run
_depth = [0]
KINDS = {'plot': 'line', 'bar': 'bar', 'barh': 'barh', 'hist': 'hist', 'scatter': 'scatter', 'pie': 'pie',
         'boxplot': 'box', 'bxp': 'box', 'imshow': 'image', 'pcolormesh': 'mesh', 'violinplot': 'violin',
         'fill_between': 'area', 'fill_betweenx': 'area', 'stackplot': 'area', 'errorbar': 'errorbar', 'step': 'line',
         'hexbin': 'hexbin', 'annotate': 'annotate', 'text': 'text', 'axhline': 'hline', 'axvline': 'vline'}


def _wrap(name):
    orig = getattr(Axes, name)

    @functools.wraps(orig)
    def inner(self, *args, **kwargs):
        top = _depth[0] == 0
        _depth[0] += 1
        try:
            res = orig(self, *args, **kwargs)
        finally:
            _depth[0] -= 1
        if top:
            calls = self.__dict__.setdefault('_hub_calls', [])
            calls.append(KINDS[name])
            if name in ('plot', 'step'):
                for ln in res:
                    ln._hub_plot = True
            if name in ('boxplot', 'bxp'):
                self._hub_boxes = getattr(self, '_hub_boxes', 0) + len(res.get('boxes', []))
            if name == 'violinplot':
                self._hub_violins = getattr(self, '_hub_violins', 0) + len(res.get('bodies', []))
        return res
    inner._hub = True
    setattr(Axes, name, inner)


def _show(*args, **kwargs):
    collect()


def patch():
    if getattr(Axes, '_hub_patched', False):
        return
    for name in KINDS:
        _wrap(name)
    Axes._hub_patched = True
    plt.show = _show


def patch_sns():
    import seaborn as sns
    m = sys.modules.get('seaborn.matrix')
    if m is not None and getattr(m, '_no_scipy', False):
        # Seaborn was imported before SciPy was loaded (the browser loads SciPy only for clustermap): switch it on now
        try:
            from scipy.cluster import hierarchy
            m.hierarchy, m._no_scipy = hierarchy, False
        except ImportError:
            pass
    if getattr(sns, '_hub_patched', False):
        return
    names = ['histplot', 'kdeplot', 'rugplot', 'ecdfplot', 'displot', 'barplot', 'countplot', 'boxplot', 'violinplot',
             'stripplot', 'swarmplot', 'pointplot', 'catplot', 'scatterplot', 'lineplot', 'regplot', 'lmplot',
             'residplot', 'relplot', 'heatmap', 'clustermap', 'pairplot', 'jointplot', 'boxenplot']

    def wrap(fname):
        orig = getattr(sns, fname)

        @functools.wraps(orig)
        def inner(*args, **kwargs):
            SNS.append(fname)
            return orig(*args, **kwargs)
        return inner
    for n in names:
        setattr(sns, n, wrap(n))
    for cls in ('FacetGrid', 'PairGrid', 'JointGrid'):
        c = getattr(sns, cls)
        old = c.__init__

        def init(self, *a, _old=old, _n=cls, **k):
            SNS.append(_n)
            _old(self, *a, **k)
        c.__init__ = init
    sns._hub_patched = True


def _r(v):
    try:
        return float('%.4g' % v)
    except (TypeError, ValueError):
        return None


def _txt(t):
    return t.get_text().strip() if t is not None else ''


def ax_facts(ax):
    rects = [p for p in ax.patches if isinstance(p, Rectangle)]
    calls = ax.__dict__.get('_hub_calls', [])
    horiz = 'barh' in calls and 'bar' not in calls
    leg = ax.get_legend()
    title = _txt(ax.title) or _txt(ax._left_title) or _txt(ax._right_title)
    f = {
        'kinds': list(dict.fromkeys(calls)),
        'title': title, 'xlabel': ax.get_xlabel().strip(), 'ylabel': ax.get_ylabel().strip(),
        'bars': len(rects), 'heights': [_r(p.get_width() if horiz else p.get_height()) for p in rects][:60],
        'lines': sum(1 for ln in ax.lines if getattr(ln, '_hub_plot', False)),
        'points': sum(len(c.get_offsets()) for c in ax.collections if isinstance(c, PathCollection)),
        'wedges': sum(1 for p in ax.patches if isinstance(p, Wedge)),
        'boxes': getattr(ax, '_hub_boxes', 0), 'violins': getattr(ax, '_hub_violins', 0),
        'images': len(ax.images), 'meshes': sum(1 for c in ax.collections if isinstance(c, QuadMesh)),
        'legend': [_txt(t) for t in leg.get_texts()] if leg is not None else None,
        'xticks': [_txt(t) for t in ax.get_xticklabels() if _txt(t)][:40],
        'yticks': [_txt(t) for t in ax.get_yticklabels() if _txt(t)][:40],
        'texts': [_txt(t) for t in ax.texts][:40],
        'grid': any(g.get_visible() for g in ax.get_xgridlines() + ax.get_ygridlines()),
        'spines': {k: bool(s.get_visible()) for k, s in ax.spines.items() if k in ('top', 'right')},
    }
    return f


def fig_facts(fig):
    axes = [a for a in fig.axes if not hasattr(a, '_colorbar')]
    sup = fig._suptitle.get_text().strip() if getattr(fig, '_suptitle', None) is not None else ''
    legs = []
    for lg in fig.legends:
        legs += [_txt(t) for t in lg.get_texts()]
    w, h = fig.get_size_inches()
    return {'axes': [ax_facts(a) for a in axes], 'suptitle': sup, 'colorbars': len(fig.axes) - len(axes),
            'legend': legs or None, 'size': [_r(w), _r(h)]}


def collect():
    """Draw every open chart, keep its facts (and a PNG in the browser), then close it."""
    for num in plt.get_fignums():
        fig = plt.figure(num)
        item = {}
        try:
            buf = io.BytesIO()
            fig.savefig(buf, format='png', dpi=DPI, bbox_inches='tight')
            if PNG:
                item['png'] = base64.b64encode(buf.getvalue()).decode('ascii')
            item['facts'] = fig_facts(fig)
        except Exception as e:  # a broken chart must not hide the learner's own error message
            item['facts'] = {'axes': [], 'error': str(e)}
        SHOWN.append(item)
    plt.close('all')


def start():
    """Start of a run: forget the last run's charts and styles, so every code box starts like a fresh Python."""
    del SHOWN[:]
    del SNS[:]
    plt.close('all')
    matplotlib.style.use('default')   # undo plt.style.use(...), rcParams and Seaborn themes of an earlier run (keeps the backend)


def finish():
    """End of a run: collect the open charts and return them as JSON for the page."""
    collect()
    LAST[:] = SHOWN[:]
    return json.dumps({'figs': SHOWN, 'sns': SNS})


# ---------- checking a chart task ----------
NAMES = {'line': 'line chart (plot)', 'bar': 'bar chart (bar)', 'barh': 'horizontal bar chart (barh)', 'hist': 'histogram (hist)',
         'scatter': 'scatter plot (scatter)', 'pie': 'pie chart (pie)', 'box': 'box plot (boxplot)', 'image': 'image or heatmap (imshow)',
         'mesh': 'heatmap', 'violin': 'violin plot', 'area': 'shaded area', 'annotate': 'annotation (annotate)', 'text': 'text label (text)'}
COUNTS = [('bars', 'bars'), ('lines', 'lines'), ('points', 'points'), ('wedges', 'pie slices'), ('boxes', 'boxes'),
          ('violins', 'violins'), ('images', 'images'), ('meshes', 'heatmaps')]


SINGLE = {'bars': 'bar', 'lines': 'line', 'points': 'point', 'pie slices': 'pie slice', 'boxes': 'box', 'violins': 'violin', 'images': 'image', 'heatmaps': 'heatmap'}


def _same(a, b):
    return str(a).strip().lower() == str(b).strip().lower()


def _count_ok(want, got):
    if isinstance(want, (list, tuple)):
        return want[0] <= got <= want[1]
    return got == want


def _count_txt(want):
    if isinstance(want, (list, tuple)):
        return 'at least %d' % want[0] if want[1] >= 9999 else '%d to %d' % (want[0], want[1])
    return str(want)


def _label(spec, got, what, how):
    if spec is True:
        return [] if got else ['The %s is missing. Add it with %s.' % (what, how)]
    if spec and not _same(spec, got):
        return ["The %s should be '%s', but it is '%s'." % (what, spec, got) if got else "The %s is missing: it should be '%s'. Add it with %s." % (what, spec, how)]
    return []


def check_axes(s, f, where=''):
    p = []
    kinds = s.get('kind')
    if kinds:
        for k in ([kinds] if isinstance(kinds, str) else kinds):
            if k not in f['kinds']:
                found = ', '.join(NAMES.get(x, x) for x in f['kinds'] if x not in ('text', 'annotate', 'hline', 'vline')) or 'nothing drawn'
                p.append('%sExpected a %s, but found: %s.' % (where, NAMES.get(k, k), found))
    for key, word in COUNTS:
        if key in s and not _count_ok(s[key], f[key]):
            one = s[key] == 1 or (isinstance(s[key], (list, tuple)) and s[key][1] == 1)
            p.append('%sExpected %s %s, found %d.' % (where, _count_txt(s[key]), SINGLE.get(word, word) if one else word, f[key]))
    p += [where + m for m in _label(s.get('title'), f['title'], 'title', 'plt.title() or ax.set_title()')]
    p += [where + m for m in _label(s.get('xlabel'), f['xlabel'], 'x-axis label', 'plt.xlabel() or ax.set_xlabel()')]
    p += [where + m for m in _label(s.get('ylabel'), f['ylabel'], 'y-axis label', 'plt.ylabel() or ax.set_ylabel()')]
    if 'legend' in s:
        lg = f['legend']
        if lg is None:
            p.append(where + 'The legend is missing. Give each series a label= and call plt.legend() or ax.legend().')
        elif s['legend'] is not True and sorted(x.lower() for x in lg) != sorted(str(x).lower() for x in s['legend']):
            p.append(where + 'The legend should show %s, but it shows %s.' % (', '.join(map(str, s['legend'])), ', '.join(lg) or 'nothing'))
    for key, word in (('xticks', 'x-axis'), ('yticks', 'y-axis')):
        if key in s and [str(x) for x in s[key]] != f[key]:
            p.append('%sThe %s labels should be %s, but they are %s.' % (where, word, ', '.join(map(str, s[key])), ', '.join(f[key]) or 'empty'))
    if 'heights' in s:
        want, got = s['heights'], f['heights']
        if len(want) != len(got) or any(abs(a - b) > max(0.01, abs(a) * 0.002) for a, b in zip(want, got)):
            p.append('%sThe bar sizes are not right yet: expected %s, found %s.' % (where, ', '.join('%g' % x for x in want), ', '.join('%g' % x for x in got)))
    if 'texts' in s and not _count_ok(s['texts'], len(f['texts'])):
        p.append('%sExpected %s text labels on the chart, found %d.' % (where, _count_txt(s['texts']), len(f['texts'])))
    for key, word in (('xtick_has', 'x-axis'), ('ytick_has', 'y-axis')):
        if key in s and not any(s[key] in t for t in f[key[:5] + 's']):
            p.append("%sThe %s numbers should show '%s', like %s." % (where, word, s[key], ', '.join(f[key[:5] + 's'][:2]) or 'nothing yet'))
    if 'text_has' in s and not any(s['text_has'].lower() in t.lower() for t in f['texts']):
        p.append("%sNo text on the chart contains '%s'." % (where, s['text_has']))
    if s.get('grid') and not f['grid']:
        p.append(where + 'The grid is missing. Add it with plt.grid() or ax.grid().')
    for side, vis in (s.get('spines') or {}).items():
        if f['spines'].get(side) != vis:
            p.append('%sThe %s border (spine) should be %s.' % (where, side, 'shown' if vis else 'hidden'))
    return p


def check(spec, figs=None, sns_calls=None):
    """Compare the charts of a run with what a task asks for. Returns a list of problems (empty = all good)."""
    figs = SHOWN if figs is None else figs
    sns_calls = SNS if sns_calls is None else sns_calls
    if isinstance(spec, str):
        spec = json.loads(spec)
    p = []
    for name in ([spec['sns']] if isinstance(spec.get('sns'), str) else spec.get('sns', [])):
        if name not in sns_calls:
            p.append('Use sns.%s() for this task.' % name if name[0].islower() else 'Use sns.%s for this task.' % name)
    if not figs:
        return p + ['No chart was drawn. Draw it, then call plt.show().']
    if 'figs' in spec and len(figs) != spec['figs']:
        p.append('Expected %d chart window%s (figures), found %d.' % (spec['figs'], '' if spec['figs'] == 1 else 's', len(figs)))
    f = figs[min(spec.get('fig', 0), len(figs) - 1)]['facts']
    if 'error' in f:
        return p + ['The chart could not be drawn: ' + f['error']]
    axes = f['axes']
    if 'axes' in spec and not _count_ok(spec['axes'], len(axes)):
        p.append('Expected %s charts (axes) in the figure, found %d.' % (_count_txt(spec['axes']), len(axes)))
    p += _label(spec.get('suptitle'), f['suptitle'], 'figure title', 'fig.suptitle()')
    if spec.get('colorbar') and not f['colorbars']:
        p.append('The colour bar is missing. Add it with plt.colorbar().')
    if 'figlegend' in spec and not f['legend']:
        p.append('The legend is missing.')
    if not axes:
        return p + ['The figure has no chart in it.']
    if 'ax' in spec:
        for i, s in enumerate(spec['ax']):
            if i < len(axes):
                p += check_axes(s, axes[i], 'Chart %d: ' % (i + 1) if len(spec['ax']) > 1 else '')
    else:
        p += check_axes(spec, axes[0])
    return p


# ---------- text summaries (used by the build checks and by projects) ----------
def summary():
    """One line per axes: printed after a chart example so the checker can compare browser and laptop Python."""
    collect()
    out = []
    for i, it in enumerate(SHOWN):
        f = it['facts']
        out.append('#fig%d axes=%d sup=%r cbar=%d leg=%r' % (i + 1, len(f.get('axes', [])), f.get('suptitle', ''), f.get('colorbars', 0), f.get('legend')))
        for j, a in enumerate(f.get('axes', [])):
            cnt = ' '.join('%s=%d' % (k, a[k]) for k, _ in COUNTS if a[k])
            out.append('#ax%d %s %s t=%r x=%r y=%r leg=%r xt=%r h=%r tx=%d' % (j + 1, '+'.join(a['kinds']), cnt, a['title'], a['xlabel'], a['ylabel'], a['legend'], a['xticks'][:12], a['heights'][:12], len(a['texts'])))
    if SNS:
        out.append('#sns ' + ' '.join(SNS))
    print('\n'.join(out))


def project_report(this_run=False):
    """Plain lines a project test can check: what each chart shows. On the page the report runs just after the
    learner's program, as its own run, so it reads LAST; the build checks run both in one go (this_run=True)."""
    collect()
    figs = SHOWN if this_run else (SHOWN or LAST)
    print('--- charts ---')
    print('Figures: %d' % len(figs))
    for i, it in enumerate(figs):
        f = it['facts']
        print('Figure %d: %d chart%s%s' % (i + 1, len(f['axes']), '' if len(f['axes']) == 1 else 's', (', title: ' + f['suptitle']) if f['suptitle'] else ''))
        for j, a in enumerate(f['axes']):
            parts = ['+'.join(sorted(k for k in a['kinds'] if k not in ('text', 'annotate', 'hline', 'vline'))) or 'empty']
            parts += ['%d %s' % (a[k], SINGLE.get(w, w) if a[k] == 1 else w) for k, w in COUNTS if a[k]]
            for k, w in (('title', 'title'), ('xlabel', 'x'), ('ylabel', 'y')):
                if a[k]:
                    parts.append('%s: %s' % (w, a[k]))
            if a['legend']:
                parts.append('legend: ' + ', '.join(a['legend']))
            print('Chart %d.%d: %s' % (i + 1, j + 1, ', '.join(parts)))


patch()
