import re
import json
import urllib.request
import os

folders = [
    ("3CS4_Gutierrez_Andrei_PromoVideo.mp4", "1AHgqvCrQmi_xsklAf3yaFXOZ0dvRdAki"),
    ("Gutierrez_AnEndlessMotivation", "1KIGZxKgsLPLuPeVdb7vX348zL_aSV5Ef"),
    ("Gutierrez_DigitalMarketingGraphics", "195yH_G_b-sfLzYijL3bEgP1jvRzdSWzS"),
    ("Gutierrez_MagazineMe", "1IJGHUXgLGeG-YVrYgfuMio5TnOd6i4zA"),
    ("Gutierrez_Mid_Fedility", "1xFYOQ0gMrGFtZGIBfP7NvlKBfvkbj1Ku"),
    ("Gutierrez_MyPortfolio", "15Uqq58mL4u85uvZ7HBnSW9Njbq67SZfo"),
    ("Gutierrez_TypographyBrandPoster", "18JvP54RfVhyn6vQw8iHWXaLZ-3OsDhJt")
]

all_items = []

for folder_name, folder_id in folders:
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
                print(f"Folder: {folder_name} (ID: {folder_id}) - Found {len(items)} items")
                for item in items:
                    f_id = item[0]
                    f_name = item[2]
                    f_mime = item[3]
                    print(f"  -> {f_name} | {f_mime} | ID: {f_id}")
                    all_items.append({
                        "folder": folder_name,
                        "folder_id": folder_id,
                        "name": f_name,
                        "mime": f_mime,
                        "id": f_id
                    })
            else:
                print(f"Folder: {folder_name} - No _DRIVE_ivd found")
    except Exception as e:
        print(f"Folder {folder_name} failed: {e}")

with open("drive_inventory.json", "w", encoding="utf-8") as out:
    json.dump(all_items, out, indent=2)

print(f"\nTotal items discovered: {len(all_items)}")
