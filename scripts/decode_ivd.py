import re
import json

with open('drive_page.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Look for window['_DRIVE_ivd']
match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)';", text)
if match:
    raw_str = match.group(1)
    # decode unicode escape / hex escape like \x5b
    decoded = bytes(raw_str, 'utf-8').decode('unicode_escape')
    data = json.loads(decoded)
    print("Items in _DRIVE_ivd:")
    for item in data[0]:
        try:
            item_id = item[0]
            item_parent = item[1]
            item_name = item[2]
            item_mime = item[3]
            print(f"- Name: {item_name} | ID: {item_id} | Mime: {item_mime}")
        except Exception as e:
            print("Item error:", e, item[:4])
else:
    print("Could not find _DRIVE_ivd")
