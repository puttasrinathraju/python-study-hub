import ast, io, tokenize, builtins
def analyse(src, starter=''):
    res = {'ok': True, 'feat': {}, 'names': [], 'comments': 0, 'lines': 0, 'long': [], 'tabs': [], 'indent': [], 'tight': []}
    def add(k):
        res['feat'][k] = res['feat'].get(k, 0) + 1
    try:
        tree = ast.parse(src)
    except SyntaxError as e:
        res['ok'] = False
        res['err'] = 'line ' + str(e.lineno) + ': ' + str(e.msg)
        return res
    for node in ast.walk(tree):
        add('node:' + type(node).__name__)
        if isinstance(node, ast.Call):
            if isinstance(node.func, ast.Name):
                add('call:' + node.func.id)
                if hasattr(builtins, node.func.id):
                    add('builtin:' + node.func.id)
            elif isinstance(node.func, ast.Attribute):
                add('method:' + node.func.attr)
            for kw in node.keywords:
                if kw.arg:
                    add('kw:' + kw.arg)
        elif isinstance(node, (ast.BinOp, ast.AugAssign)):
            add('op:' + type(node.op).__name__)
            if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Mult):
                if any(isinstance(x, (ast.Constant, ast.JoinedStr)) and not isinstance(getattr(x, 'value', ''), (int, float)) for x in (node.left, node.right)):
                    add('strrepeat')
        elif isinstance(node, ast.Compare):
            for op in node.ops:
                add('cmp:' + type(op).__name__)
        elif isinstance(node, ast.BoolOp):
            add('bool:' + type(node.op).__name__)
        elif isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.Not):
            add('bool:Not')
        elif isinstance(node, ast.FormattedValue) and node.format_spec is not None:
            spec = ''.join(str(v.value) for v in node.format_spec.values if isinstance(v, ast.Constant))
            add('spec')
            if ',' in spec:
                add('spec:comma')
            if spec.endswith('f') and '.' in spec:
                add('spec:decimals')
            if spec.endswith('%'):
                add('spec:percent')
            if ',' in spec and spec.endswith('.2f'):
                add('spec:money')
            if any(c in spec for c in '<>^'):
                add('spec:align')
        elif isinstance(node, ast.Name) and isinstance(node.ctx, ast.Store):
            if node.id not in res['names']:
                res['names'].append(node.id)
    lines = src.split('\n')
    res['lines'] = sum(1 for l in lines if l.strip() and not l.strip().startswith('#'))
    res['long'] = [i + 1 for i, l in enumerate(lines) if len(l) > 100]
    res['tabs'] = [i + 1 for i, l in enumerate(lines) if '\t' in l[:len(l) - len(l.lstrip())]]
    mine = set()
    try:
        for tk in tokenize.generate_tokens(io.StringIO(starter).readline):
            if tk.type == tokenize.COMMENT:
                mine.add(tk.string.strip())
    except Exception:
        pass
    try:
        depth = 0
        for tk in tokenize.generate_tokens(io.StringIO(src).readline):
            if tk.type == tokenize.COMMENT and tk.string.strip() not in mine and tk.string.strip('# ').strip():
                res['comments'] += 1
            elif tk.type == tokenize.INDENT and len(tk.string.expandtabs(8)) % 4:
                res['indent'].append(tk.start[0])
            elif tk.type == tokenize.OP:
                if tk.string in '([{':
                    depth += 1
                elif tk.string in ')]}':
                    depth -= 1
                elif depth == 0 and tk.string in ('=', '+=', '-=', '*=', '/=', '//=', '%=', '**='):
                    line, s, e = tk.line, tk.start[1], tk.end[1]
                    if (s > 0 and line[s - 1] not in ' \t') or (e < len(line) and line[e] not in ' \t\r\n'):
                        if tk.start[0] not in res['tight']:
                            res['tight'].append(tk.start[0])
    except Exception:
        pass
    return res
