import os
import urllib.request
import time

items = [
    # Promo Video
    {"folder": "promo_video", "name": "3CS4_Gutierrez_Andrei_PromoVideo.mp4", "id": "1b8nqP8Za23s3RuxR1H4pX8Ipn_L0xRjr"},
    
    # Portfolio PDF
    {"folder": "portfolio_doc", "name": "Portfolio.pdf", "id": "1X7S_ERXsT5OU_AZpidVHLHxwIPg6pjgF"},
    
    # Digital Marketing
    {"folder": "digital_marketing", "name": "Banner_ads.png", "id": "1DaPQcYdbX6zSkw4kuzJJ0WOoVrvffiTl"},
    {"folder": "digital_marketing", "name": "Landing_Page.png", "id": "1XZNIDiLgiKBCMcPxPZFSxTKhvxj6EgbK"},
    {"folder": "digital_marketing", "name": "Newsletter.png", "id": "1eAcuru6qbLjlFZnY6OjbAJ5nZoIn_S1R"},
    {"folder": "digital_marketing", "name": "Social_media_post.png", "id": "15BRfjDo4snY2_Mi0fTU6hO2lOoYh6X9Y"},
    
    # Magazine Me
    {"folder": "magazine", "name": "Gutierrez_Magazine_Me.pdf", "id": "1cJ5gCLg1Gh_750L1QzyKxOoAnojmdLh8"},
    
    # Mid-Fidelity UI/UX
    {"folder": "ui_ux", "name": "KainNow.pdf", "id": "10Fbpra3x2xi70yQb6V9e-zs_jPJmmI6_"},
    
    # Typography Brand Poster
    {"folder": "typography", "name": "Brand_Identity_Poster.pdf", "id": "1dmiF53sCpCefP3W5e0ZQuUMsZk6QcQb6"},
    {"folder": "typography", "name": "Brand_Identity_Poster2.pdf", "id": "1Wwj8UHwrAjjrRq8QJnlNCVbigBc4jYa7"},
    
    # An Endless Motivation (Brand Identity)
    {"folder": "branding", "name": "AM_BadgeLogo.png", "id": "1YMTCr2NUbq-nQXFxFvtW7mTDhCVMNTx1"},
    {"folder": "branding", "name": "AM_HorizontalLogo.png", "id": "1HYRJ3teZ6sy5ZzKEnygRQNCPuMLkF88I"},
    {"folder": "branding", "name": "AM_Logo.png", "id": "1DEv3Du93gFCD-8QpwPg46G2WsGIKk_zR"},
    {"folder": "branding", "name": "AM_Stacked_HorizontalLogo.png", "id": "1R5g6VaQTsTru8QPFzAmv0ovuzYjZZTWJ"},
    {"folder": "branding", "name": "AM_VerticalLogo.png", "id": "1Dccvzwf_gz7RC0HXjypyGeKhKANZajhN"},
    {"folder": "branding", "name": "Logo_Icon.jpg", "id": "1euPziauHgGzF-DvzRCYUSSjU-2-56Ax3"},
    {"folder": "branding", "name": "AnEndlessMotivation_Mood_Board.pdf", "id": "1NpDHnNDHr1zKwNBqymPQACbHDsENVT_s"}
]

base_dir = os.path.join(os.path.dirname(__file__), "assets")
os.makedirs(base_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for it in items:
    dest_dir = os.path.join(base_dir, it["folder"])
    os.makedirs(dest_dir, exist_ok=True)
    dest_file = os.path.join(dest_dir, it["name"])
    
    if os.path.exists(dest_file) and os.path.getsize(dest_file) > 1000:
        print(f"Already exists: {it['name']} ({os.path.getsize(dest_file)} bytes)")
        continue
    
    url = f"https://drive.usercontent.google.com/download?id={it['id']}&export=download&confirm=t"
    print(f"Downloading {it['name']}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=60) as resp, open(dest_file, "wb") as f:
            f.write(resp.read())
        print(f"  -> Saved {dest_file} ({os.path.getsize(dest_file)} bytes)")
    except Exception as e:
        print(f"  -> Error downloading {it['name']}: {e}")
    time.sleep(1)

print("\nFinished downloading all assets!")
