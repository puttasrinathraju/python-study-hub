# Chapter 23: Pandas basics. Run with the matching Python (see NOTES.md): every output comes from running the code.
from chlib import Chapter, grid, cat, write_chapter, run, Raw
K = Chapter('c23', 'import pandas as pd\n')
C, P, PRED, Q = K.C, K.P, K.PRED, K.Q
STAFF = '''staff = pd.DataFrame({
    "name": ["Asha", "Vikram", "Neha", "Ravi", "Meena"],
    "dept": ["IT", "HR", "IT", "Sales", "Sales"],
    "salary": [72000, 45000, 58000, 39000, 66000],
    "city": ["Pune", "Delhi", "Pune", "Chennai", "Delhi"]
})
'''
SM = [["Asha", "IT", "72000", "Pune"], ["Vikram", "HR", "45000", "Delhi"], ["Neha", "IT", "58000", "Pune"], ["Ravi", "Sales", "39000", "Chennai"], ["Meena", "Sales", "66000", "Delhi"]]
COLS = ["name", "dept", "salary", "city"]
ANAT = grid(SM, cl=COLS, rl=["0", "1", "2", "3", "4"], hlCol=2, cw=86, label="A DataFrame of 5 staff: index 0 to 4 on the left, 4 column names on top, the salary column highlighted")
body = [
 {"t": "h", "text": "What Pandas is"},
 {"t": "p", "b": "==Pandas== is the Python library for **tables of data**. If you know Excel or Power Query in Power BI, you already know the ideas: load a file, look at it, clean it, filter it, group it, summarise it. Pandas does the same jobs with a few lines of code that you can run again on next month's file."},
 {"t": "p", "b": "Pandas has two main objects. A ==DataFrame== is a whole table. A ==Series== is one column of that table. Every row has a label called the ==index==."},
 {"t": "fig", "svg": ANAT, "cap": "A DataFrame. Column names run along the top, the index (0, 1, 2 ...) runs down the left, and each column, like the highlighted `salary`, is a Series."},
 C('print(pd.__version__)', "Import it once at the top. Everyone writes pd."),
 {"t": "table", "head": ["Pandas", "Excel / Power BI", "Example"], "rows": [
   ["DataFrame", "A sheet or table", "the whole staff list"], ["Series", "One column", "just the salaries"], ["index", "Row numbers on the left", "0, 1, 2 ... or names"],
   ["column name", "Column header", "`salary`"], ["`NaN`", "An empty cell", "a missing salary"], ["`read_csv()`", "Get Data from a file", "load `employees.csv`"]]},
 {"t": "note", "k": "why", "b": "Analysts spend most of their time loading, checking and cleaning tables. With Pandas every step is written down, so you can repeat it, share it and fix it, instead of clicking through the same menus every month."},
 {"t": "mm", "title": "Chapter 23 at a glance", "root": "Pandas basics", "kids": [
   {"t": "Series", "k": ["one column with labels", "pd.Series(list, index=...)", "s.sum(), s.mean()"]},
   {"t": "DataFrame", "k": ["a table of Series", "pd.DataFrame(dict)", "df['col'] vs df[['a', 'b']]"]},
   {"t": "Read files", "k": ["read_csv", "read_excel", "MySQL, APIs (laptop)", "to_csv"]},
   {"t": "Look", "k": ["head, tail", "sample", "shape, columns"]},
   {"t": "Check", "k": ["info", "describe", "isna().sum()", "duplicated()"]}]},

 {"t": "h", "text": "Series: one labelled column"},
 {"t": "p", "b": "Make a Series from a list. Pandas adds the index 0, 1, 2 ... on the left. The last line, `dtype`, is the type of the values: `int64` means whole numbers."},
 C('prices = pd.Series([500, 1000, 400])\nprint(prices)'),
 C('sales = pd.Series([1200, 950, 1430], index=["Mon", "Tue", "Wed"])\nprint(sales)\nprint(sales["Tue"])', "Your own labels with index="),
 C('rooms = pd.Series({"Deluxe": 12, "Suite": 3, "Standard": 25})\nprint(rooms)', "From a dictionary: the keys become the index"),
 {"t": "anim", "title": "How a Series pairs labels with values", "frames": [
   {"html": cat(grid([["1200"], ["950"], ["1430"]], cl=["values"], cw=90, label="three values"), '<div class="bigcode">[1200, 950, 1430]</div>'), "c": "You start with three values in a list."},
   {"html": cat(grid([["1200"], ["950"], ["1430"]], cl=["values"], rl=["Mon", "Tue", "Wed"], cw=90, label="values with labels"), '<div class="bigcode">index=["Mon", "Tue", "Wed"]</div>'), "c": "`index=` gives each value a label. The first label goes with the first value, and so on."},
   {"html": cat(grid([["1200"], ["950"], ["1430"]], cl=["values"], rl=["Mon", "Tue", "Wed"], cw=90, hl=[[1, 0]], label="Tue highlighted"), '<div class="bigcode">sales["Tue"]  →  950</div>'), "c": "Now you can ask for a value by its label, like a dictionary: `sales[\"Tue\"]` gives 950."},
   {"html": cat(grid([["1416"], ["1121"], ["1687.4"]], cl=["× 1.18"], rl=["Mon", "Tue", "Wed"], cw=90, hlCol=0, label="every value times 1.18"), '<div class="bigcode">sales * 1.18</div>'), "c": "Maths works on **every value at once**, like a NumPy array, and the labels stay attached."}]},
 C('sales = pd.Series([1200, 950, 1430], index=["Mon", "Tue", "Wed"])\nprint(sales * 1.18)          # add 18% GST to every day\nprint(sales.sum(), round(sales.mean(), 1), sales.max())', "Maths on the whole column"),
 C('qty = [8, 11, 5]\nprices = [500, 1000, 400]\ns = pd.Series(prices, index=qty)   # the index can be any values, even numbers\nprint(s)\nprint(s[11])', "From the course notebook: numbers as labels"),
 PRED('s = pd.Series([40, 70, 90], index=["a", "b", "c"])\nprint(s["b"] + s["c"])', ["`160`", "`70`", "`bc`", "A KeyError"], 0, "`s[\"b\"]` is 70 and `s[\"c\"]` is 90, so the sum is 160. Labels work like dictionary keys."),
 {"t": "note", "k": "like", "b": "A Series is a **NumPy array with name tags**. The values do the fast maths; the index is a tag on each value so you can find it by name."},

 {"t": "h", "text": "DataFrame: a table of columns"},
 {"t": "p", "b": "The usual way to make a DataFrame is a **dictionary of lists**. Each key becomes a column name, and each list becomes that column's values. All the lists must be the same length."},
 C(STAFF + 'print(staff)'),
 {"t": "anim", "title": "From a dictionary to a table", "frames": [
   {"html": '<div class="bigcode">{"name": [...], "dept": [...],\n "salary": [...], "city": [...]}</div>', "c": "A dictionary with 4 keys. Each value is a list of 5 items."},
   {"html": grid([[r[0]] for r in SM], cl=["name"], rl=["0", "1", "2", "3", "4"], cw=86, hlCol=0, label="the name column"), "c": "The first key, `\"name\"`, becomes the first column. Pandas adds the index 0 to 4 on the left."},
   {"html": grid([r[:2] for r in SM], cl=COLS[:2], rl=["0", "1", "2", "3", "4"], cw=86, hlCol=1, label="name and dept"), "c": "The next key becomes the next column, lined up row by row."},
   {"html": grid(SM, cl=COLS, rl=["0", "1", "2", "3", "4"], cw=86, hlRow=1, label="the full table, row 1 highlighted"), "c": "With all 4 columns in place, each **row** is one person: row 1 is Vikram from HR in Delhi."}]},
 C('print(staff.shape)            # (rows, columns)\nprint(list(staff.columns))\nprint(len(staff))', "Size and column names", setup=STAFF),
 C('print(staff["salary"])        # one column: a Series\nprint(staff[["name", "salary"]])   # a list of columns: a DataFrame', "One column or several", setup=STAFF),
 {"t": "note", "k": "trap", "b": "`staff[\"salary\"]` with **one** pair of brackets gives a Series. `staff[[\"name\", \"salary\"]]` has a **list** inside the brackets, so it gives a smaller DataFrame. `staff[\"name\", \"salary\"]` (no inner list) is a KeyError."},
 C('print(staff.dtypes)', "dtypes: the type of every column", setup=STAFF),
 C('data = {\n    "pid": [2, 4, 5],\n    "names": ["A", "B", "C"],\n    "price": [500, 1000, 400]\n}\nproducts = pd.DataFrame(data, index=data["pid"])   # use a column as the row labels\nprint(products)', "Choose the index yourself"),
 PRED(STAFF + 'print(staff.shape)', ["`(5, 4)`", "`(4, 5)`", "`20`", "`5`"], 0, "`shape` is always (rows, columns): 5 people, 4 columns."),
 {"t": "deck", "title": "Series and DataFrames in 6 slides", "s": [
   {"big": "Pandas = tables in Python.", "b": "A **DataFrame** is a table, a **Series** is one column, and the **index** labels the rows."},
   {"h": "A Series", "c": 'import pandas as pd\nprint(pd.Series([10, 20], index=["a", "b"]))', "o": run('import pandas as pd\nprint(pd.Series([10, 20], index=["a", "b"]))')},
   {"h": "A DataFrame from a dictionary", "c": 'import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df)', "o": run('import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df)')},
   {"h": "One column is a Series", "b": "`df[\"temp\"]` gives a Series. `df[[\"city\", \"temp\"]]` gives a DataFrame."},
   {"h": "Describe the table", "items": ["`df.shape`: (rows, columns)", "`df.columns`: the column names", "`df.dtypes`: the type of each column", "`len(df)`: the number of rows"]},
   {"h": "Maths on a whole column", "c": 'import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df["temp"].mean())', "o": run('import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df["temp"].mean())')}]},

 {"t": "h", "text": "Reading files"},
 {"t": "p", "b": "Real data comes from files. `pd.read_csv()` reads a CSV file into a DataFrame in one line. This site has a practice file, **`employees.csv`**: 41 rows of staff data with some messy values that you will clean in the next chapter."},
 C('df = pd.read_csv("employees.csv")\nprint(df.shape)\nprint(list(df.columns))', "read_csv: the most used line in data analysis"),
 C('staff = pd.read_excel("employees.xlsx", sheet_name="staff")\nprint(staff[["name", "department", "salary"]].head(3))', "read_excel: Excel files work the same way"),
 {"t": "note", "k": "tip", "b": "`read_excel` needs the **openpyxl** package. On your laptop, run `pip install openpyxl` once. This site has it already."},
 {"t": "p", "b": "Data also lives in **databases** and behind **web APIs**. These two need a network connection or a database server, so they do not run on this site. Try them on your laptop in Jupyter."},
 {"t": "code", "ttl": "Laptop only: read a MySQL table", "nr": 1, "c": '# pip install mysql-connector-python\nimport pandas as pd\nimport mysql.connector as conn\n\nconnection = conn.connect(host="localhost", user="root",\n                          password="your_password", database="classicmodels")\ncustomers = pd.read_sql("SELECT * FROM customers", connection)\nprint(customers.head())\nconnection.close()'},
 {"t": "code", "ttl": "Laptop only: turn an API response into a table", "nr": 1, "c": '# pip install requests\nimport pandas as pd\nimport requests\n\nresponse = requests.get("https://jsonplaceholder.typicode.com/users")\nresponse.raise_for_status()          # stop with an error if the request failed\nusers = pd.DataFrame(response.json())  # a list of dictionaries becomes rows\nprint(users[["name", "email"]].head())'},
 C('staff.to_csv("staff_copy.csv", index=False)   # index=False: do not save 0, 1, 2 ... as a column\nback = pd.read_csv("staff_copy.csv")\nprint(back.shape)', "Save a DataFrame to a file, then read it back", setup=STAFF),
 {"t": "table", "head": ["To read", "Use", "To save", "Use"], "rows": [
   ["CSV file", "`pd.read_csv(\"file.csv\")`", "CSV file", "`df.to_csv(\"file.csv\", index=False)`"], ["Excel file", "`pd.read_excel(\"file.xlsx\")`", "Excel file", "`df.to_excel(\"file.xlsx\", index=False)`"],
   ["SQL table", "`pd.read_sql(query, connection)`", "JSON file", "`df.to_json(\"file.json\")`"], ["API (JSON)", "`pd.DataFrame(response.json())`", "", ""]]},
 {"t": "note", "k": "trap", "b": "Forgot `index=False` in `to_csv`? The file gets an extra column of row numbers. When you read it back you will see a column called **`Unnamed: 0`**. The fix is `index=False` when saving, or `index_col=0` when reading."},

 {"t": "h", "text": "Looking at the data: head, tail and sample"},
 {"t": "p", "b": "Never trust a file you have not looked at. `head()` shows the first 5 rows, `tail()` the last 5, and `sample()` a few random ones. Give a number to see more or fewer."},
 C('df = pd.read_csv("employees.csv")\nprint(df.head())', "head(): the first 5 rows"),
 {"t": "note", "k": "tip", "b": "The `...` in the middle means \"some columns are hidden because the table is too wide for the screen\". Pick the columns you want, like `df[[\"name\", \"salary\"]].head()`. The last line tells you the real size: 5 rows x 8 columns."},
 C('df = pd.read_csv("employees.csv")\nprint(df[["emp_id", "name", "salary"]].tail(3))', "tail(3): the last 3 rows"),
 C('df = pd.read_csv("employees.csv")\nprint(df[["name", "department"]].sample(3, random_state=7))', "sample(): random rows (random_state makes them repeat)"),
 {"t": "note", "k": "key", "b": "Look at the data **before** you analyse it. In just these few rows you can already see problems: extra spaces in names, `bengaluru` in small letters, and three different date styles."},

 {"t": "h", "text": "Shape, info and describe"},
 {"t": "p", "b": "Three commands give you a health check of any table: `shape` (how big), `info()` (each column's type and how many values are filled in) and `describe()` (quick statistics of the number columns)."},
 C('df = pd.read_csv("employees.csv")\ndf.info(memory_usage=False)', "info(): types and filled-in counts"),
 {"t": "note", "k": "tip", "b": "On your laptop, plain `df.info()` also prints a last line with the memory the table uses. We hide it here with `memory_usage=False`, because the number depends on the computer."},
 {"t": "p", "b": "Read `info()` like this: 41 rows in total, but `salary` has only **38 non-null** values, so 3 salaries are missing. `float64` means decimal numbers (a number column with a gap always becomes decimal, so `salary` shows `float64`), and `object` usually means **text**. `join_date` is text too: Pandas does not know it is a date yet."},
 C('df = pd.read_csv("employees.csv")\nprint(df.describe())', "describe(): statistics of every number column"),
 {"t": "table", "head": ["Row", "Means", "Here (salary)"], "rows": [
   ["`count`", "How many values are filled in", "38 (3 are missing)"], ["`mean`", "The average", "about ₹56,184"], ["`std`", "Standard deviation: how spread out the values are", "about ₹12,731"],
   ["`min` / `max`", "The smallest and largest value", "₹28,500 and ₹83,000"], ["`25%` `50%` `75%`", "Quartiles: a quarter, half and three quarters of the values are below these", "50% is the median, ₹55,000"]]},
 C('df = pd.read_csv("employees.csv")\nprint(df["department"].describe())', "describe() on a text column: count, unique, top, freq"),
 {"t": "p", "b": "12 unique departments? The company has only 5. `unique()` lists every different value once, in the order they first appear, and shows the problem: messy spellings like `it`, `Hr` and ` SALES` count as different values."},
 C('df = pd.read_csv("employees.csv")\nprint(df["department"].unique())\nprint(df["department"].nunique())', "unique() and nunique(): the different values, and how many"),
 {"t": "p", "b": "`value_counts()` counts how many rows have each value, biggest first. It is the quickest way to see what a text column holds."},
 C('payments = pd.Series(["UPI", "Cash", "UPI", "Card", "UPI", "Cash"])\nprint(payments.value_counts())', "value_counts(): how many rows have each value"),
 PRED('df = pd.DataFrame({"a": [1, 2, None], "b": ["x", "y", "z"]})\nprint(df["a"].count())', ["`2`", "`3`", "`0`", "`None`"], 0, "`count()` counts only the values that are filled in. The `None` is missing, so the count is 2, while `len(df)` is 3."),

 {"t": "h", "text": "Missing values and duplicates"},
 {"t": "p", "b": "Missing cells show as ==NaN== (\"not a number\"). `isna()` turns every cell into `True` (missing) or `False` (filled). Add `.sum()` and you get the number of missing cells in each column, because `True` counts as 1."},
 C('df = pd.read_csv("employees.csv")\nprint(df.isna().sum())', "The first command to run on any new file"),
 {"t": "anim", "title": "How isna().sum() counts the gaps", "frames": [
   {"html": grid([["Asha", "83000", "84"], ["Ravi", "NaN", "86"], ["Neha", "37000", "NaN"], ["Om", "NaN", "70"]], cl=["name", "salary", "score"], rl=["0", "1", "2", "3"], cw=80, hl=[[1, 1], [2, 2], [3, 1]], label="a small table with three empty cells"), "c": "A small table. Three cells are empty (`NaN`)."},
   {"html": grid([["False", "False", "False"], ["False", "True", "False"], ["False", "False", "True"], ["False", "True", "False"]], cl=["name", "salary", "score"], rl=["0", "1", "2", "3"], cw=80, hl=[[1, 1], [2, 2], [3, 1]], label="True where a cell is missing"), "c": "`df.isna()` gives a table of the same shape: `True` where a value is missing."},
   {"html": grid([["False", "False", "False"], ["False", "True", "False"], ["False", "False", "True"], ["False", "True", "False"]], cl=["name", "salary", "score"], rl=["0", "1", "2", "3"], cw=80, hl=[[1, 1], [2, 2], [3, 1]], res={"dir": "bottom", "vals": ["0", "2", "1"], "label": "sum"}, label="column sums 0, 2, 1"), "c": "`.sum()` adds up each column. `True` counts as 1, so you get the number of gaps: name 0, salary 2, score 1."}]},
 C('df = pd.read_csv("employees.csv")\nprint(df["salary"].isna().sum(), df["salary"].notna().sum())\nprint(df.isna().sum().sum())          # all the gaps in the whole table', "One column, and the whole table"),
 {"t": "p", "b": "A ==duplicate== is a row that appears twice. `duplicated()` marks every repeat (not the first copy) with `True`. You can check whole rows, or just an ID column."},
 C('df = pd.read_csv("employees.csv")\nprint(df.duplicated().sum())                 # rows that are exact copies\nprint(df["emp_id"].duplicated().sum())       # IDs that appear again\nprint(df["department"].duplicated().sum())   # repeats are normal here!', "duplicated(): find repeats"),
 PRED('s = pd.Series(["E1", "E2", "E1", "E1"])\nprint(s.duplicated().sum())', ["`2`", "`3`", "`1`", "`4`"], 0, "The first `E1` is not a duplicate. The second and third ones are, so the count is 2."),
 {"t": "note", "k": "trap", "b": "Duplicates in an **ID** column are a problem. Duplicates in a **category** column, like department, are normal: many people work in IT. Always ask which column should be unique."},
 {"t": "table", "head": ["Command", "Gives", "Example answer"], "rows": [
   ["`df.isna().sum()`", "Missing cells per column", "`salary 3`"], ["`df.isna().sum().sum()`", "Missing cells in the whole table", "`8`"], ["`df[\"c\"].notna().sum()`", "Filled cells in one column", "`38`"],
   ["`df.duplicated().sum()`", "Rows that repeat an earlier row", "`1`"], ["`df[\"id\"].duplicated().sum()`", "Repeated values in one column", "`1`"]]},

 {"t": "h", "text": "Practice"},
 {"t": "prac", "items": [
   P("Make a Series of a week's tea sales, `[120, 95, 140, 110, 160]`, with the index `[\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\"]`. Print the Series, then the sales on Thursday.", "`pd.Series(values, index=labels)`, then `s[\"Thu\"]`.", 'tea = pd.Series([120, 95, 140, 110, 160], index=["Mon", "Tue", "Wed", "Thu", "Fri"])\nprint(tea)\nprint(tea["Thu"])', "The index lets you pick a value by its label, like a dictionary key."),
   P("Build a DataFrame of 3 cities with the columns `city` = Hyderabad, Pune, Kochi and `rain_mm` = 812, 722, 3005. Print it, then print its shape.", "A dictionary of two lists goes into `pd.DataFrame()`.", 'weather = pd.DataFrame({"city": ["Hyderabad", "Pune", "Kochi"], "rain_mm": [812, 722, 3005]})\nprint(weather)\nprint(weather.shape)', "Each key becomes a column. Three items in each list make three rows."),
   P("Read `employees.csv`. Print only the `name` and `city` columns of the **last 4** rows.", "Pick the columns with a list in double brackets, then `.tail(4)`.", 'df = pd.read_csv("employees.csv")\nprint(df[["name", "city"]].tail(4))', "You can chain the steps: first choose the columns, then the rows to show."),
   P("Read `employees.csv`. Print the number of missing values in each column, then the total number of missing values.", "`df.isna().sum()` and `df.isna().sum().sum()`.", 'df = pd.read_csv("employees.csv")\nprint(df.isna().sum())\nprint(df.isna().sum().sum())', "The first sum works per column. The second adds those numbers up."),
   P("Read `employees.csv`. Print how many rows are exact duplicates, and how many `emp_id` values repeat.", "`df.duplicated().sum()` checks whole rows; `df[\"emp_id\"].duplicated().sum()` checks one column.", 'df = pd.read_csv("employees.csv")\nprint(df.duplicated().sum())\nprint(df["emp_id"].duplicated().sum())', "Both are 1: one row was saved twice. You will remove it with `drop_duplicates()` in the next chapter.")]},

 {"t": "h", "text": "Practice with real data: student scores"},
 {"t": "p", "b": "**`student_scores.csv`** has the same columns as the course's student file: 300 students, their background and their maths, reading and writing scores. The first column has no name, because the file was saved with its index."},
 {"t": "prac", "items": [
   P("Read `student_scores.csv` and print its shape and the first 3 column names.", "`list(df.columns)[:3]` gives the first three names.", 'df = pd.read_csv("student_scores.csv")\nprint(df.shape)\nprint(list(df.columns)[:3])', "The first column is called `Unnamed: 0`: the old index saved as a column. `pd.read_csv(\"student_scores.csv\", index_col=0)` uses it as the index instead."),
   P("Read the file with `index_col=0`. Print the statistics of the three score columns with `describe()`.", "Pick `[[\"MathScore\", \"ReadingScore\", \"WritingScore\"]]`, then `.describe()`.", 'df = pd.read_csv("student_scores.csv", index_col=0)\nprint(df[["MathScore", "ReadingScore", "WritingScore"]].describe())', "Now the shape has 14 columns, not 15. The 50% row is the median score."),
   P("Which columns have missing values, and how many? Read the file with `index_col=0` and print `isna().sum()`.", "Same as on the employees file.", 'df = pd.read_csv("student_scores.csv", index_col=0)\nprint(df.isna().sum())', "Background columns like `TransportMeans` have gaps, but no score is missing. Knowing this decides how you clean the data next."),
   P("Print how many students there are in each value of `WklyStudyHours` with `value_counts()`. Do you spot a strange value?", "`df[\"WklyStudyHours\"].value_counts()`.", 'df = pd.read_csv("student_scores.csv", index_col=0)\nprint(df["WklyStudyHours"].value_counts())', "`05-Oct` is not a date: it was \"5-10\" hours, and Excel turned it into a date. Spotting values like this is why you always look at the data first. You will fix it with `replace()` in the next chapter.")]}
]
ch = {"id": "pandas1", "part": 8, "title": "Pandas basics: Series, DataFrames and reading files", "nav": "Pandas basics", "time": "45 min", "lvl": "Beginner",
 "keys": "pandas pd series dataframe index column table read_csv read_excel excel csv mysql sql api requests json to_csv save head tail sample shape columns dtypes info describe statistics isna notna missing nan null duplicated duplicates count value_counts unnamed index_col",
 "lead": "Meet the library every data analyst uses. Make Series and DataFrames, read CSV and Excel files, and give any new table a quick health check: its size, its types, its statistics, its gaps and its duplicates.",
 "goals": ["Make a **Series** and a **DataFrame**, and pick columns from it", "Read CSV and Excel files, and save a DataFrame to a file", "Look at the data with `head()`, `tail()` and `sample()`", "Check a table with `shape`, `info()` and `describe()`", "Count missing values with `isna().sum()` and repeats with `duplicated()`"],
 "src": ["Course notebook pandas_exp.ipynb (Series, DataFrame, read_csv, read_excel, MySQL, API, head/tail/sample, info, describe, isna, duplicated)", "Course PDF: More About Pandas", "pandas documentation"],
 "body": body,
 "take": ["A **DataFrame** is a table, a **Series** is one column, and the **index** labels the rows.", "`pd.DataFrame(dict_of_lists)` builds a table: keys become columns. `df[\"a\"]` is a Series, `df[[\"a\", \"b\"]]` a DataFrame.", "`pd.read_csv()` and `pd.read_excel()` load files; `to_csv(..., index=False)` saves them.", "Always look first: `head()`, `tail()`, `sample()`, then `shape`, `info()` and `describe()`.", "`isna().sum()` counts gaps per column; `duplicated().sum()` counts repeated rows."],
 "quiz": [
   Q("What is a Series?", ["A whole table", "One column of values with labels (the index)", "A list of DataFrames", "A CSV file"], 1, "A Series is one labelled column. A DataFrame is a table made of Series."),
   Q("What does this print?", ["`2`", "`(2, 2)`", "`(2, 3)`", "`(3, 2)`"], 2, "Two rows (Pune and Goa) and three columns.", 'df = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33], "rain": [700, 2900]})\nprint(df.shape)'),
   Q("Which line gives a **DataFrame** with two columns?", ["`df[\"name\", \"salary\"]`", "`df[[\"name\", \"salary\"]]`", "`df(\"name\", \"salary\")`", "`df.name.salary`"], 1, "Put a **list** of column names inside the brackets: double brackets."),
   Q("What does this print?", ["`950`", "`1`", "`Tue`", "A KeyError"], 0, "With your own index, you pick a value by its label.", 's = pd.Series([1200, 950], index=["Mon", "Tue"])\nprint(s["Tue"])'),
   Q("You saved a file with `df.to_csv(\"out.csv\")` and now see a column `Unnamed: 0` when you read it. Why?", ["The file is broken", "The index was saved as a column, because `index=False` was missing", "CSV files cannot store names", "`read_csv` always adds it"], 1, "Save with `index=False`, or read with `index_col=0`."),
   Q("What does this print?", ["`1`", "`2`", "`3`", "`0`"], 1, "Two cells are missing: `isna()` marks them `True`, and `sum()` counts the `True` values.", 'df = pd.DataFrame({"a": [1, None, 3], "b": [None, 5, 6]})\nprint(df.isna().sum().sum())'),
   Q("In `df.info()`, a column shows `38 non-null` and the table has 41 entries. What does that tell you?", ["38 duplicates", "3 values are missing in that column", "The column has 38 unique values", "The column is text"], 1, "Non-null means filled in. 41 − 38 = 3 missing values."),
   Q("Which command shows 3 random rows, the same ones every time you run it?", ["`df.head(3)`", "`df.sample(3)`", "`df.sample(3, random_state=1)`", "`df.tail(3)`"], 2, "`sample()` picks at random; `random_state` fixes the random choice so it repeats."),
   Q("What does this print?", ["`0`", "`1`", "`2`", "`3`"], 2, "The first `\"a\"` is not counted. The second `\"a\"` and the second `\"b\"` are repeats.", 's = pd.Series(["a", "b", "a", "b", "c"])\nprint(s.duplicated().sum())'),
   Q("What does the `50%` row of `describe()` show?", ["Half the count", "The median", "The mean", "The values that are 50 or more"], 1, "Half of the values are below the 50% value: that is the median.")],
 "cards": [["What is a DataFrame?", "A table of data in Pandas: columns with names, and rows with an index."], ["What is a Series?", "One column of a DataFrame: values with labels (the index)."], ["What is the index?", "The labels of the rows, shown on the left: 0, 1, 2 ... unless you choose your own."], ["`df[\"a\"]` vs `df[[\"a\"]]`", "One pair of brackets gives a Series. A list inside the brackets gives a DataFrame."], ["How do you read a CSV file?", "`df = pd.read_csv(\"file.csv\")`"], ["How do you save without the index?", "`df.to_csv(\"file.csv\", index=False)`"], ["`head()` vs `tail()` vs `sample()`", "First 5 rows, last 5 rows, random rows (`random_state` makes them repeat)."], ["What does `df.shape` give?", "A tuple: (rows, columns)."], ["What does `df.info()` show?", "Every column's type and how many values are filled in (non-null)."], ["What does `df.describe()` show?", "count, mean, std, min, 25%, 50% (median), 75% and max of each number column."], ["How do you count missing values per column?", "`df.isna().sum()`"], ["How do you count duplicate rows?", "`df.duplicated().sum()`: repeats after the first copy."], ["What does `object` mean in dtypes?", "Usually text (strings). Numbers stored as text also show as object."]],
 "cheat": [["import pandas as pd", "Load Pandas"], ["pd.Series([1, 2], index=['a', 'b'])", "One labelled column"], ["pd.DataFrame({'a': [1, 2], 'b': [3, 4]})", "A table from a dict of lists"], ["df['col']  /  df[['a', 'b']]", "One column (Series) / several (DataFrame)"], ["pd.read_csv('file.csv')", "Read a CSV file"], ["pd.read_excel('file.xlsx', sheet_name='s')", "Read an Excel sheet"], ["df.to_csv('out.csv', index=False)", "Save without the index"], ["df.head()  df.tail(3)  df.sample(2)", "First, last or random rows"], ["df.shape  len(df)  df.columns", "Size, rows, column names"], ["df.dtypes  df.info()", "Column types and filled-in counts"], ["df.describe()", "Statistics of number columns"], ["df.isna().sum()", "Missing values per column"], ["df.duplicated().sum()", "Number of duplicate rows"], ["df['col'].value_counts()", "Count each value in a column"]]
}
poster = {"title": "Pandas Basics", "sub": "Tables in Python: make them, read them, check them.", "mods": [
  {"title": "Series and DataFrames", "sub": "The two objects you will use every day", "cards": [
    {"h": "A table from a dictionary", "c": 'import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df)', "o": run('import pandas as pd\ndf = pd.DataFrame({"city": ["Pune", "Goa"], "temp": [31, 33]})\nprint(df)')},
    {"h": "Picture it", "svg": grid([["Pune", "31"], ["Goa", "33"]], cl=["city", "temp"], rl=["0", "1"], cw=70, hlCol=1, label="a 2 by 2 table, temp column highlighted"), "foot": "Each column is a Series"},
    {"h": "Watch out", "span": 1, "rules": [["tip", "df[\"temp\"]", "one column: a Series"], ["tip", "df[[\"city\", \"temp\"]]", "a list of columns: a DataFrame"], ["trap", "df[\"city\", \"temp\"]", "KeyError: use double brackets"], ["acc", "df.shape", "(rows, columns)"]]}]},
  {"title": "Read and check a file", "sub": "The first five minutes with any dataset", "cards": [
    {"h": "Load and look", "c": 'import pandas as pd\ndf = pd.read_csv("employees.csv")\nprint(df.shape)\nprint(df["salary"].isna().sum())', "o": run('import pandas as pd\ndf = pd.read_csv("employees.csv")\nprint(df.shape)\nprint(df["salary"].isna().sum())')},
    {"h": "The health check", "items": ["`df.head()` / `df.tail()` / `df.sample(3)`", "`df.info()`: types and non-null counts", "`df.describe()`: count, mean, std, min, quartiles, max", "`df.isna().sum()`: gaps per column", "`df.duplicated().sum()`: repeated rows"]}],
   "table": {"head": ["Read", "Save"], "rows": [["`pd.read_csv(\"f.csv\")`", "`df.to_csv(\"f.csv\", index=False)`"], ["`pd.read_excel(\"f.xlsx\")`", "`df.to_excel(\"f.xlsx\", index=False)`"], ["`pd.read_sql(query, conn)`", "`df.to_json(\"f.json\")`"]]}}]}
write_chapter('23_pandas1.js', ch, poster)
