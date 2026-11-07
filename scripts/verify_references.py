import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

srcs = re.findall(r'(?:src|href)="([^"]+)"', html)
print("=== Checking index.html references ===")
missing = []
for s in srcs:
    if s.startswith(('http', '#', 'mailto:')):
        continue
    path = s.split('?')[0].split('#')[0]
    if os.path.exists(path):
        print(f"  [OK] {path} ({os.path.getsize(path)} bytes)")
    else:
        print(f"  [MISSING] {path}")
        missing.append(path)

with open('js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

print("\n=== Checking js/main.js asset references ===")
js_assets = re.findall(r'"(assets/[^"]+)"', js)
for a in sorted(set(js_assets)):
    if os.path.exists(a):
        print(f"  [OK] {a} ({os.path.getsize(a)} bytes)")
    else:
        print(f"  [MISSING] {a}")
        missing.append(a)

if not missing:
    print("\n>>> SUCCESS: ALL ASSET REFERENCES EXIST ON DISK AND ARE 100% VALID! <<<")
else:
    print(f"\n>>> WARNING: {len(missing)} missing files! <<<")
