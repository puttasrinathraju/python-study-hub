# Quick exercises for Parts 8-10. Same format as gen_ex.py, but blanks are marked @@ (Pandas code is full of capital B's).
PD = 'import pandas as pd\n'
EMP = PD + 'emp = pd.DataFrame({"name": ["Asha", "Ravi", "Neha"], "dept": ["IT", "HR", "IT"], "salary": [72000, 45000, 58000]})\n'
X2 = {
"pandas1": [
 ("Read the CSV file into a DataFrame.", PD + 'df = pd.@@("employees.csv")\nprint(df.shape)', ["read_csv"], "`pd.read_csv()` turns a CSV file into a DataFrame. `shape` is (rows, columns)."),
 ("Show only the first 3 rows.", PD + 'df = pd.read_csv("employees.csv")\nprint(df[["name", "city"]].@@(3))', ["head"], "`head(n)` shows the first n rows; without a number it shows 5."),
 ("Count the missing values in each column.", PD + 'df = pd.read_csv("employees.csv")\nprint(df.@@().sum())', [["isna", "isnull"]], "`isna()` marks gaps as True, and `sum()` counts the True values in each column."),
 ("Pick the two columns as a smaller DataFrame.", EMP + 'print(emp[@@])', [['["name", "salary"]', "['name', 'salary']"]], "A **list** of column names inside the brackets gives a DataFrame."),
 ("Give the Series your own labels.", PD + 's = pd.Series([10, 20], @@=["a", "b"])\nprint(s["b"])', ["index"], "`index=` sets the labels, so you can pick a value by its label."),
],
"pandas2": [
 ("Fill the gaps with the middle value of the column.", PD + 's = pd.Series([10, None, 30, 50])\nprint(s.fillna(s.@@()).tolist())', ["median"], "The median of 10, 30 and 50 is 30. Gaps are skipped when it is worked out."),
 ("Copy the last known value down into the gaps.", PD + 's = pd.Series([31, None, None, 29])\nprint(s.@@().tolist())', ["ffill"], "`ffill()` (forward fill) copies the value above into each gap."),
 ("Remove the spaces at both ends of every name.", PD + 'names = pd.Series(["  Asha", "Ravi  "])\nprint(names.str.@@().tolist())', ["strip"], "`.str.strip()` runs `strip()` on every value of the column."),
 ("Read the dates the Indian way: day first.", PD + 'd = pd.to_datetime(pd.Series(["05/01/2025"]), @@=True)\nprint(d.dt.month[0])', ["dayfirst"], "With `dayfirst=True`, 05/01/2025 is 5 January, so the month is 1."),
 ("Turn values that are not dates into NaT instead of stopping.", PD + 'd = pd.to_datetime(pd.Series(["2025-01-05", "oops"]), format="mixed", errors="@@")\nprint(d.isna().sum())', ["coerce"], "`errors=\"coerce\"` gives NaT (a missing date) for anything it cannot read."),
],
"pandas3": [
 ("Pick the first 2 rows by position.", EMP + 'print(emp.@@[0:2]["name"].tolist())', ["iloc"], "`iloc` uses positions and leaves out the end of the slice, so 0:2 gives 2 rows."),
 ("Keep only the rows where both conditions are true.", EMP + 'print(emp[(emp["salary"] > 50000) @@ (emp["dept"] == "IT")]["name"].tolist())', ["&"], "`&` means and. Each condition needs its own brackets."),
 ("Run the function on every row, not every column.", EMP + 'def tag(row):\n    return row["name"] + "-" + row["dept"]\n\nprint(emp.apply(tag, @@=1).tolist())', ["axis"], "With `axis=1` the function gets one whole row at a time."),
 ("Sort from the largest salary down.", EMP + 'print(emp.sort_values("salary", @@=False)["name"].tolist())', ["ascending"], "`ascending=False` puts the biggest value first."),
 ("Find the label of the row with the biggest salary.", EMP + 'print(emp.loc[emp["salary"].@@(), "name"])', ["idxmax"], "`idxmax()` gives the index label; `loc` turns it into the name."),
],
"pandas4": [
 ("Group the rows by department.", EMP + 'print(emp.@@("dept")["salary"].sum())', ["groupby"], "`groupby` splits the rows into groups, then `sum()` totals each group."),
 ("Put each group's average on every row.", EMP + 'print(emp.groupby("dept")["salary"].@@("mean").tolist())', ["transform"], "`transform` returns one value per original row: each person gets their department's average."),
 ("Keep every employee, even without a match.", EMP + 'heads = pd.DataFrame({"dept": ["IT"], "head": ["Om"]})\nprint(len(pd.merge(emp, heads, on="dept", how="@@")))', ["left"], "A left join keeps all rows of the left table; Ravi gets NaN for head."),
 ("Stack the tables and number the rows 0, 1, 2 again.", PD + 'a = pd.DataFrame({"v": [1, 2]})\nb = pd.DataFrame({"v": [3]})\nprint(pd.concat([a, b], @@=True).index.tolist())', ["ignore_index"], "Without it the index would be 0, 1, 0."),
 ("Put 0 in the empty cells of the pivot table.", EMP + 'print(emp.pivot_table(values="salary", index="dept", columns="name", aggfunc="count", @@=0).sum().sum())', ["fill_value"], "`fill_value=0` fills the cells where a department has no such person."),
],
}
