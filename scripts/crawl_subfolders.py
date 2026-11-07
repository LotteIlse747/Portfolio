import re
import json
import urllib.request

subfolders = [
    ("JPG", "1z1vKJujFp4KNvSMpoVriG797Mt9n7BMK"),
    ("PDF", "1WiTIyxVaaQ0iTnRkQzxISmx_K13l14ly"),
    ("PNG", "1K0mBlzWLdI6D6HAx8IjVCjwgiM4AWgSW")
]

sub_items = []

for folder_name, folder_id in subfolders:
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)';", html)
            if match:
                raw_str = match.group(1)
                decoded = bytes(raw_str, 'utf-8').decode('unicode_escape')
                data = json.loads(decoded)
                items = data[0] if data and len(data) > 0 and data[0] else []
                print(f"Folder: {folder_name} - Found {len(items)} items")
                for item in items:
                    f_id = item[0]
                    f_name = item[2]
                    f_mime = item[3]
                    print(f"  -> {f_name} | {f_mime} | ID: {f_id}")
                    sub_items.append({
                        "folder": f"Gutierrez_AnEndlessMotivation/{folder_name}",
                        "name": f_name,
                        "mime": f_mime,
                        "id": f_id
                    })
    except Exception as e:
        print(f"Subfolder {folder_name} failed: {e}")

with open("sub_items.json", "w", encoding="utf-8") as out:
    json.dump(sub_items, out, indent=2)
