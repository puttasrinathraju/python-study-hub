# Practice data for Parts 8-10 (Pandas, Matplotlib, Seaborn). Run once with the matching Python (see NOTES.md);
# the files are kept in hub2/data/ and the browser runner writes them into Python's folder when code mentions them.
# Same columns as the course files (employee table, sales_data.csv, student_scores.csv), sized for the browser.
import os, csv
import numpy as np, pandas as pd
here = os.path.dirname(os.path.abspath(__file__)); DATA = os.path.join(here, '..', 'hub2', 'data')
rs = np.random.RandomState(2024)

# ---------- employees.csv: 40 staff + 1 duplicate row, with dirty values to clean ----------
first = ['Asha', 'Vikram', 'Neha', 'Ravi', 'Meena', 'Arjun', 'Priya', 'Kiran', 'Sneha', 'Rahul', 'Divya', 'Suresh', 'Anjali', 'Karthik',
         'Pooja', 'Manoj', 'Lakshmi', 'Imran', 'Deepa', 'Sanjay', 'Fatima', 'Rohit', 'Kavya', 'Naveen', 'Swati', 'Ajay', 'Bhavna', 'Gopal',
         'Harini', 'Irfan', 'Jaya', 'Kunal', 'Leela', 'Mohan', 'Nisha', 'Om', 'Pallavi', 'Qadir', 'Rekha', 'Tarun']
last = ['Rao', 'Singh', 'Kapoor', 'Teja', 'Pillai', 'Reddy', 'Sharma', 'Kumar', 'Iyer', 'Verma', 'Nair', 'Babu', 'Gupta', 'Raman',
        'Joshi', 'Patil', 'Menon', 'Khan', 'Das', 'Mehta', 'Shaikh', 'Jain', 'Hegde', 'Yadav', 'Kulkarni', 'Mishra', 'Bose', 'Naidu',
        'Prasad', 'Ali', 'Varma', 'Shah', 'Krishnan', 'Lal', 'Agarwal', 'Prakash', 'Desai', 'Ahmed', 'Murthy', 'Chopra']
depts = ['IT', 'HR', 'Sales', 'Finance', 'Marketing']
dept_pay = {'IT': 68000, 'HR': 46000, 'Sales': 50000, 'Finance': 60000, 'Marketing': 52000}
cities = ['Hyderabad', 'Bengaluru', 'Chennai', 'Pune', 'Mumbai', 'Delhi']
dirty_dept = {'IT': ['IT', 'it', ' IT'], 'HR': ['HR', 'Hr', 'hr '], 'Sales': ['Sales', ' SALES', 'sales'],
              'Finance': ['Finance', 'finance', 'FINANCE'], 'Marketing': ['Marketing', 'marketing ', 'Marketing']}
domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'gmail.com', 'rediffmail.com']
rows, clean = [], []
for i in range(40):
    d = depts[i % 5] if i < 35 else depts[rs.randint(5)]
    fn, ln = first[i], last[i]
    name = fn + ' ' + ln
    messy = [name, name.lower(), name.upper(), '  ' + name, name + ' ', fn.lower() + ' ' + ln][rs.randint(6)] if i % 3 else name
    email = (fn + '.' + ln).lower() + '@' + domains[i % 5]
    sal = int(round((dept_pay[d] + rs.normal(0, 9000)) / 500) * 500)
    score = int(np.clip(round(rs.normal(76, 11)), 40, 99))
    y, m, dd = 2016 + rs.randint(9), 1 + rs.randint(12), 1 + rs.randint(28)
    ts = pd.Timestamp(y, m, dd)
    fmt = i % 6
    jd = ts.strftime('%Y-%m-%d') if fmt in (0, 3, 5) else ts.strftime('%d/%m/%Y') if fmt == 1 else ts.strftime('%d-%b-%Y') if fmt == 2 else ts.strftime('%Y-%m-%d')
    city = cities[rs.randint(6)]
    cmessy = city if i % 4 else [city.lower(), city + ' ', city.upper(), city][rs.randint(4)]
    r = {'emp_id': 'E%d' % (101 + i), 'name': messy, 'email': email, 'department': dirty_dept[d][rs.randint(3)] if i % 2 else d,
         'salary': sal, 'score': score, 'join_date': jd, 'city': cmessy}
    clean.append({'emp_id': r['emp_id'], 'name': name, 'department': d, 'salary': sal, 'score': score, 'join_date': ts, 'city': city})
    rows.append(r)
for i in (6, 19, 33): rows[i]['salary'] = ''          # missing salaries
for i in (11, 27): rows[i]['score'] = ''             # missing scores
rows[15]['join_date'] = 'not known'; rows[24]['join_date'] = ''
rows[9]['city'] = ''; rows[30]['email'] = ''
rows.insert(13, dict(rows[12]))                      # one exact duplicate row
with open(os.path.join(DATA, 'employees.csv'), 'w', newline='', encoding='utf-8') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
pd.DataFrame(clean).to_excel(os.path.join(DATA, 'employees.xlsx'), index=False, sheet_name='staff')

# ---------- sales_data.csv: 500 orders in 2024, Indian rupees ----------
cats = {'Electronics': (2500, 7000, 0.12), 'Furniture': (1800, 7000, 0.15), 'Clothing': (400, 3000, 0.25), 'Groceries': (150, 1500, 0.08)}
season = np.array([0.75, 0.6, 0.85, 0.9, 1.0, 0.85, 0.9, 0.95, 1.05, 1.7, 1.9, 1.25])   # Diwali in Oct-Nov
days = pd.date_range('2024-01-01', '2024-12-31')
weights = season[days.month - 1]; weights = weights / weights.sum()
dates = np.sort(rs.choice(len(days), 500, p=weights))
out = []
for k in dates:
    d = days[k]; c = list(cats)[rs.choice(4, p=[0.22, 0.18, 0.32, 0.28])]; lo, hi, mg = cats[c]
    reg = ['North', 'South', 'East', 'West'][rs.choice(4, p=[0.27, 0.31, 0.18, 0.24])]
    qty = int(rs.randint(1, 11))
    sales = int(round(rs.uniform(lo, hi) * (0.7 + qty * 0.06) * season[d.month - 1] ** 0.5))
    profit = int(round(sales * (mg + rs.normal(0, 0.07))))
    age = int(np.clip(round(rs.normal(36, 11)), 18, 65))
    sat = float(np.clip(round(rs.normal(3.9, 0.7) - (0.6 if profit < 0 else 0), 1), 1.0, 5.0))
    out.append({'Date': d.strftime('%Y-%m-%d'), 'Category': c, 'Region': reg, 'Sales': sales, 'Profit': profit, 'Quantity': qty,
                'Customer_Age': age, 'Satisfaction_Score': sat})
pd.DataFrame(out).to_csv(os.path.join(DATA, 'sales_data.csv'), index=False)

# ---------- student_scores.csv: 300 students, same columns as the course file ----------
N = 300
def pick(opts, p, miss):
    v = rs.choice(opts, size=N, p=p).astype(object); v[rs.rand(N) < miss] = np.nan; return v
st = pd.DataFrame({
    'Gender': rs.choice(['female', 'male'], N),
    'EthnicGroup': pick(['group A', 'group B', 'group C', 'group D', 'group E'], [0.09, 0.2, 0.32, 0.26, 0.13], 0.06),
    'ParentEduc': pick(["some high school", "high school", "some college", "associate's degree", "bachelor's degree", "master's degree"], [0.17, 0.18, 0.22, 0.2, 0.15, 0.08], 0.06),
    'LunchType': rs.choice(['standard', 'free/reduced'], N, p=[0.65, 0.35]),
    'TestPrep': pick(['none', 'completed'], [0.65, 0.35], 0.06),
    'ParentMaritalStatus': pick(['married', 'single', 'divorced', 'widowed'], [0.57, 0.23, 0.16, 0.04], 0.04),
    'PracticeSport': pick(['regularly', 'sometimes', 'never'], [0.36, 0.5, 0.14], 0.02),
    'IsFirstChild': pick(['yes', 'no'], [0.65, 0.35], 0.03),
    'NrSiblings': np.where(rs.rand(N) < 0.05, np.nan, rs.choice([0, 1, 2, 3, 4, 5, 6, 7], N, p=[0.1, 0.27, 0.24, 0.2, 0.1, 0.05, 0.03, 0.01])),
    'TransportMeans': pick(['school_bus', 'private'], [0.58, 0.42], 0.1),
    'WklyStudyHours': pick(['< 5', '05-Oct', '> 10'], [0.27, 0.54, 0.19], 0.03),
})
base = rs.normal(66, 13, N) + np.where(st['LunchType'] == 'standard', 6, -6) + np.where(st['TestPrep'] == 'completed', 5, 0) \
    + st['WklyStudyHours'].map({'< 5': -3, '05-Oct': 0, '> 10': 3}).fillna(0).to_numpy()
st['MathScore'] = np.clip(np.round(base + np.where(st['Gender'] == 'male', 3, -3) + rs.normal(0, 6, N)), 0, 100).astype(int)
st['ReadingScore'] = np.clip(np.round(base + np.where(st['Gender'] == 'male', -3, 4) + rs.normal(0, 6, N)), 10, 100).astype(int)
st['WritingScore'] = np.clip(np.round(st['ReadingScore'] - 1 + np.where(st['TestPrep'] == 'completed', 3, 0) + rs.normal(0, 4, N)), 10, 100).astype(int)
st.to_csv(os.path.join(DATA, 'student_scores.csv'))   # keeps the unnamed index column, like the course file
for f in ('employees.csv', 'employees.xlsx', 'sales_data.csv', 'student_scores.csv'):
    print(f, os.path.getsize(os.path.join(DATA, f)), 'bytes')
