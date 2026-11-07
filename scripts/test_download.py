import urllib.request
import os

url = "https://drive.usercontent.google.com/download?id=1YMTCr2NUbq-nQXFxFvtW7mTDhCVMNTx1&export=download&confirm=t"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response, open('test_badge.png', 'wb') as out:
        out.write(response.read())
    print("Success! Size:", os.path.getsize('test_badge.png'))
except Exception as e:
    print("Error:", e)
