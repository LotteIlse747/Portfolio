import re
import json

with open('drive_page.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Look for filenames
file_extensions = re.findall(r'[\w\-\s()\[\].]+\.(?:png|jpg|jpeg|pdf|ai|psd|mp4|webp|svg|gif)', text, re.IGNORECASE)
print('File extension matches:', set(file_extensions))

# Look for drive items data structures (e.g., _DRIVE_DATA or AF_initDataCallback)
scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', text, re.DOTALL)
print(f'Total script tags: {len(scripts)}')

data_blobs = []
for s in scripts:
    if 'AF_initDataCallback' in s or 'window._' in s or 'drive' in s:
        data_blobs.append(s)

print(f'Relevant scripts: {len(data_blobs)}')

# Check for file items
# Drive often has structure: [null, "file_id", "filename", ...] or similar
file_patterns = re.findall(r'\[\"([a-zA-Z0-9_-]{28,40})\",\[\"(.*?)\"', text)
print(f'Pattern 1 matches: {len(file_patterns)}')
for p in file_patterns[:20]:
    print(p)

# Let's inspect potential filenames and IDs
potential_ids = re.findall(r'\"([a-zA-Z0-9_-]{28,40})\"', text)
print(f'Potential IDs: {len(set(potential_ids))}')
