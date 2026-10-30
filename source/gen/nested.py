hotel = ["Pune", ["Deluxe", "Suite"], {"tea": 20}, (4, 5), {"wifi"}]
print(len(hotel))
print(type(hotel[0]), hotel[0].upper())
hotel[1].append("Standard"); print(hotel[1])
print(hotel[1][0].lower())
print(hotel[2].get("tea"))
print(hotel[3].count(4))
hotel[4].add("pool"); print(sorted(hotel[4]))
for bad in ['hotel.upper()', 'hotel[0].append("x")', 'hotel[4][0]']:
    try: eval(bad)
    except Exception as e: print(bad, '->', type(e).__name__ + ':', e)
hotel[0].upper(); print(hotel[0]); hotel[0] = hotel[0].upper(); print(hotel[0])
bookings = [{"guest": "asha", "nights": 2}, {"guest": "ravi", "nights": 3}]
print(bookings[0]["guest"].title(), sum(b["nights"] for b in bookings))
