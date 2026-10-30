/* ---------- Real data practice: a messy hotel bookings file (data/hotel_bookings.csv) ---------- */
(function(){
  function addEnd(id, blocks){ var ch = CHAPTERS.filter(function(c){ return c.id === id; })[0]; ch.body = ch.body.concat(blocks); }
  addEnd("files", [
    { t: "h", text: "Real data practice: hotel bookings" },
    { t: "p", b: "The runner has a real-looking file ready for you: **`hotel_bookings.csv`**, 41 bookings from a 3-star hotel. It is messy on purpose, just like real data: extra spaces, mixed capitals (`deluxe`, `DELUXE `), money written as `\"\u20b95,200\"`, a few blank cells, two date formats and one booking that appears twice. Every time you press Run, the file is fresh again, so you can't break it." },
    { t: "table", head: ["Column", "Example", "Watch out for"], rows: [["`booking_id`", "`B1012`", "One ID appears twice"], ["`guest_name`", "`Asha Reddy`", "Extra spaces, ALL CAPS"], ["`room_type`", "`Deluxe`", "`deluxe`, `DELUXE `, ` standard`"], ["`check_in`", "`2026-08-26`", "Some are `19/08/2026`"], ["`nights`", "`2`", "Two cells are blank"], ["`rate`", "`2600`", "Price per night"], ["`channel`", "`Goibibo`", "Mixed capitals and spaces"], ["`status`", "`Confirmed`", "`confirmed`, `CONFIRMED`, `No-show`"], ["`amount`", "`5200`", "`\"\u20b95,200\"` as text, one blank"]], cap: "The columns in hotel_bookings.csv" },
    { t: "note", k: "why", b: "Real data is never clean. Analysts spend most of their time on exactly these steps: read the file, fix the text, skip or repair bad rows, then count and add up." },
    { t: "prac", items: [
      { q: "Open `hotel_bookings.csv` with `csv.DictReader`. Print how many rows it has and the list of column names.", hint: "`list(csv.DictReader(f))` gives one dict per row. `rows[0].keys()` are the column names.", starter: "import csv\n", sol: R`
import csv
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
print(len(rows), "rows")
print(list(rows[0].keys()))`, out: R`
41 rows
['booking_id', 'guest_name', 'room_type', 'check_in', 'nights', 'rate', 'channel', 'status', 'amount']`, why: "Each row becomes a dictionary, so you can read any cell by its column name, like `row[\"amount\"]`." },
      { q: "Count the bookings for each room type. Clean the names first (`\" deluxe\"` and `\"DELUXE \"` are both Deluxe) and skip the duplicate booking ID. Print the dictionary.", hint: "Keep a `seen` set of booking IDs. Clean with `.strip().title()`, then count with `counts.get(room, 0) + 1`.", starter: "import csv\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list(csv.DictReader(f))\n", sol: R`
import csv
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
seen = set()
counts = {}
for r in rows:
    if r["booking_id"] in seen:      # skip the duplicate booking
        continue
    seen.add(r["booking_id"])
    room = r["room_type"].strip().title()
    counts[room] = counts.get(room, 0) + 1
print(counts)`, out: R`
{'Standard': 17, 'Deluxe': 18, 'Suite': 5}`, why: "Without `.strip().title()` you would get five different \"room types\" for only three real ones." },
      { q: "Add up the revenue from **confirmed** bookings only. The `amount` column has text like `\"\u20b95,200\"` and one blank cell: turn the text into numbers and count the blank one instead of crashing.", hint: "Write a small `to_number(text)` function that removes `\u20b9` and `,`. Wrap the conversion in `try / except ValueError`. Compare `status` with `.strip().lower() == \"confirmed\"`.", starter: "import csv\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list(csv.DictReader(f))\n", sol: R`
import csv

def to_number(text):
    return int(text.replace("₹", "").replace(",", "").strip())

with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

total, skipped, seen = 0, 0, set()
for r in rows:
    if r["booking_id"] in seen:
        continue
    seen.add(r["booking_id"])
    if r["status"].strip().lower() != "confirmed":
        continue
    try:
        total += to_number(r["amount"])
    except ValueError:
        skipped += 1
print(f"Confirmed revenue: ₹{total:,}")
print("Confirmed rows with no amount:", skipped)`, out: R`
Confirmed revenue: ₹185,800
Confirmed rows with no amount: 1`, why: "`int(\"\")` raises a ValueError, so the blank cell is counted as skipped instead of stopping the program." },
    ]}
  ]);
  addEnd("numpy2", [
    { t: "h", text: "Real data practice: hotel bookings with NumPy" },
    { t: "p", b: "Same messy hotel file as in the Files chapter: **`hotel_bookings.csv`**. This time you load the numbers into arrays and let NumPy do the maths. The first lines drop the duplicate booking with a handy trick: a dict keeps only one row per booking ID." },
    { t: "prac", items: [
      { q: "Load the `nights` column into a NumPy array (skip the blank cells). Print how many values you have, the average stay (2 decimals) and how many stays were longer than 3 nights.", hint: "`np.array([int(r[\"nights\"]) for r in rows if r[\"nights\"].strip()])`, then `.mean()` and `np.sum(nights > 3)`.", starter: "import csv\nimport numpy as np\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list({r[\"booking_id\"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking\n", sol: R`
import csv
import numpy as np
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
rows = list({r["booking_id"]: r for r in rows}.values())   # drop the duplicate booking
nights = np.array([int(r["nights"]) for r in rows if r["nights"].strip()])
print(len(nights), "rows have nights filled in")
print("Average nights:", round(float(nights.mean()), 2))
print("Stays longer than 3 nights:", int(np.sum(nights > 3)))`, out: R`
38 rows have nights filled in
Average nights: 2.18
Stays longer than 3 nights: 5`, why: "`nights > 3` makes a True/False mask, and `np.sum` counts the True values." },
      { q: "Work out the revenue for each booking channel. Build `nights`, `rates` and `channels` arrays (skip rows with blank nights), multiply to get `amounts`, then use a mask per channel. Print one line per channel.", hint: "Clean channels with `.strip().lower()`. Loop over `np.unique(channels)` and add up `amounts[channels == ch]`.", starter: "import csv\nimport numpy as np\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list({r[\"booking_id\"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking\nrows = [r for r in rows if r[\"nights\"].strip()]\n", sol: R`
import csv
import numpy as np
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list({r["booking_id"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking
rows = [r for r in rows if r["nights"].strip()]
nights = np.array([int(r["nights"]) for r in rows])
rates = np.array([int(r["rate"]) for r in rows])
channels = np.array([r["channel"].strip().lower() for r in rows])
amounts = nights * rates
for ch in np.unique(channels):
    print(f"{ch:12} ₹{int(amounts[channels == ch].sum()):,}")`, out: R`
booking.com  ₹66,200
goibibo      ₹67,600
makemytrip   ₹47,400
walk-in      ₹38,800`, why: "One mask per channel picks only that channel's bookings, with no `if` inside a loop." },
      { q: "Find the single biggest booking (nights \u00d7 rate). Print its booking ID, the guest's cleaned name, the amount, the nights and the room type.", hint: "`amounts.argmax()` gives the position of the largest amount. Use that position in `rows`.", starter: "import csv\nimport numpy as np\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list({r[\"booking_id\"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking\nrows = [r for r in rows if r[\"nights\"].strip()]\n", sol: R`
import csv
import numpy as np
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list({r["booking_id"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking
rows = [r for r in rows if r["nights"].strip()]
amounts = np.array([int(r["nights"]) * int(r["rate"]) for r in rows])
best = amounts.argmax()
r = rows[best]
print("Biggest booking:", r["booking_id"], r["guest_name"].strip().title())
print(f"Amount: ₹{int(amounts[best]):,} for {r['nights']} nights in a {r['room_type'].strip().title()}")`, out: R`
Biggest booking: B1017 Divya Sharma
Amount: ₹19,200 for 4 nights in a Suite`, why: "`argmax()` gives a position, not a value, so you can use it to find the matching row." },
    ]}
  ]);
  addEnd("numpy3", [
    { t: "h", text: "Real data practice: hotel bookings" },
    { t: "p", b: "The same messy **`hotel_bookings.csv`** file, and two everyday analyst jobs: putting values into **bands**, and sharing work out **fairly**." },
    { t: "prac", items: [
      { q: "Put every booking's room rate into a price band: **Budget** (under ₹2,000), **Mid** (₹2,000 to ₹2,999) and **Premium** (₹3,000 and up). Use `np.searchsorted` with the edges `[2000, 3000]` and print how many bookings are in each band.", hint: "`np.searchsorted([2000, 3000], rates, side=\"right\")` gives 0, 1 or 2 for every booking. Then count with `np.sum(bands == i)`.", starter: "import csv\nimport numpy as np\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list({r[\"booking_id\"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking\n", sol: R`
import csv
import numpy as np
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list({r["booking_id"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking
rates = np.array([int(r["rate"]) for r in rows])
bands = np.searchsorted([2000, 3000], rates, side="right")   # 0, 1 or 2 for every booking
for i, name in enumerate(["Budget", "Mid", "Premium"]):
    print(f"{name:8} {int(np.sum(bands == i))} bookings")`, out: R`
Budget   17 bookings
Mid      18 bookings
Premium  5 bookings`, why: "`side=\"right\"` sends a value that equals an edge to the higher band, so a rate of exactly ₹2,000 counts as Mid. This is how analysts bucket prices, ages or scores." },
      { q: "Three staff members will phone every booking to confirm it. Share the unique bookings out with `np.array_split`, in file order, and print how many calls each person gets and their first and last booking ID.", hint: "Make an array of `booking_id` values, then loop over `np.array_split(ids, 3)` with `enumerate(..., start=1)`.", starter: "import csv\nimport numpy as np\nwith open(\"hotel_bookings.csv\", encoding=\"utf-8\") as f:\n    rows = list({r[\"booking_id\"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking\n", sol: R`
import csv
import numpy as np
with open("hotel_bookings.csv", encoding="utf-8") as f:
    rows = list({r["booking_id"]: r for r in csv.DictReader(f)}.values())   # drop the duplicate booking
ids = np.array([r["booking_id"] for r in rows])
for n, batch in enumerate(np.array_split(ids, 3), start=1):
    print(f"Staff {n}: {len(batch)} calls, {batch[0]} to {batch[-1]}")`, out: R`
Staff 1: 14 calls, B1001 to B1014
Staff 2: 13 calls, B1015 to B1027
Staff 3: 13 calls, B1028 to B1040`, why: "40 bookings do not split equally into 3, so `np.split` would fail. `array_split` gives the first person the one extra call." }
    ]}
  ]);
  addEnd("projects", [
    { t: "h", text: "Mini project: hotel booking report" },
    { t: "p", b: "One small project that does what a data analyst does every week: **load** a messy file, **clean** it, **analyse** it, **report** the results and **save** them. It uses the same **`hotel_bookings.csv`** file and skills from every Part of the course." },
    { t: "ol", items: ["**Load** the file and drop the duplicate booking (Part 3: dicts)", "**Clean** each row: spaces, capitals, `₹` text and blank cells (Parts 3 and 5)", "**Analyse**: confirmed bookings, revenue, revenue per room type, average stay, top channel (Parts 2, 3 and 7)", "**Report** it neatly with f-strings (Part 1)", "**Save** the summary to `report.json` (Part 5)"] },
    { t: "prac", items: [
      { q: "Build the full report. Your output should match the solution: 33 confirmed bookings, the revenue, revenue per room type (largest first), the average stay and the top channel, then save it all to `report.json`.", hint: "Write `load(path)` and `clean(row)` first and test them with `print()`. When a booking has no amount, use `rate \u00d7 nights`. Sort the room totals with `sorted(by_room.items(), key=lambda x: x[1], reverse=True)`.", starter: "import csv\nimport json\nimport numpy as np\n\n# 1. Load: read the file and drop the duplicate booking\ndef load(path):\n    pass\n\n# 2. Clean: fix spaces, capitals and money text in one booking\ndef clean(r):\n    pass\n\n# 3. Analyse  4. Report  5. Save\n", sol: R`
import csv
import json
import numpy as np

# 1. Load: read the file and drop the duplicate booking
def load(path):
    with open(path, encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    return list({r["booking_id"]: r for r in rows}.values())

# 2. Clean: fix spaces, capitals and money text in one booking
def clean(r):
    amount = r["amount"].replace("₹", "").replace(",", "").strip()
    nights = r["nights"].strip()
    return {
        "guest": r["guest_name"].strip().title(),
        "room": r["room_type"].strip().title(),
        "channel": r["channel"].strip().lower(),
        "status": r["status"].strip().lower(),
        "nights": int(nights) if nights else None,
        "amount": int(amount) if amount else int(r["rate"]) * int(nights or 0),
    }

bookings = [clean(r) for r in load("hotel_bookings.csv")]
confirmed = [b for b in bookings if b["status"] == "confirmed"]

# 3. Analyse
revenue = sum(b["amount"] for b in confirmed)
by_room = {}
by_channel = {}
for b in confirmed:
    by_room[b["room"]] = by_room.get(b["room"], 0) + b["amount"]
    by_channel[b["channel"]] = by_channel.get(b["channel"], 0) + 1
nights = np.array([b["nights"] for b in confirmed if b["nights"] is not None])

report = {
    "confirmed_bookings": len(confirmed),
    "revenue": revenue,
    "revenue_by_room": by_room,
    "average_nights": round(float(nights.mean()), 1),
    "top_channel": max(by_channel, key=by_channel.get),
}

# 4. Report
print("HOTEL REPORT")
print("-" * 30)
print(f"Confirmed bookings: {report['confirmed_bookings']}")
print(f"Revenue:            ₹{revenue:,}")
for room, amt in sorted(by_room.items(), key=lambda x: x[1], reverse=True):
    print(f"  {room:9} ₹{amt:,}")
print(f"Average stay:       {report['average_nights']} nights")
print(f"Top channel:        {report['top_channel']}")

# 5. Save
with open("report.json", "w") as f:
    json.dump(report, f, indent=2)
print("Saved report.json")`, out: R`
HOTEL REPORT
------------------------------
Confirmed bookings: 33
Revenue:            ₹187,600
  Deluxe    ₹98,800
  Suite     ₹52,800
  Standard  ₹36,000
Average stay:       2.1 nights
Top channel:        goibibo
Saved report.json`, why: "Each step is its own small piece, so you can test it on its own. That is how every real project in this course was built." }
    ]}
  ]);
})();
