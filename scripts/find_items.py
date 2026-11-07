import re
import json

with open('drive_page.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search for occurrences of "3CS4" or Gutierrez or filenames or folder contents
pos = 0
while True:
    idx = text.find('3CS4', pos)
    if idx == -1:
        break
    start = max(0, idx - 200)
    end = min(len(text), idx + 300)
    print("--- FOUND 3CS4 ---")
    print(text[start:end])
    pos = idx + 1

# Let's search for all filenames or items in the JSON payloads
callbacks = re.findall(r'AF_initDataCallback\s*\(\s*(\{.*?\}\s*)\);', text, re.DOTALL)
print(f"Callbacks count: {len(callbacks)}")

for i, cb in enumerate(callbacks):
    if '3CS4' in cb or 'Gutierrez' in cb or 'mp4' in cb or 'image' in cb:
        print(f"Callback {i} has relevant content!")
        # Let's save callback to inspection file
        with open(f'cb_{i}.json', 'w', encoding='utf-8') as cf:
            cf.write(cb)
