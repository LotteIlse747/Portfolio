import os
from PIL import Image

large_images = [
    ("assets/magazine/magazine_page_1.png", "assets/magazine/magazine_page_1.webp"),
    ("assets/magazine/magazine_page_2.png", "assets/magazine/magazine_page_2.webp"),
    ("assets/magazine/magazine_page_3.png", "assets/magazine/magazine_page_3.webp"),
    ("assets/magazine/magazine_page_4.png", "assets/magazine/magazine_page_4.webp"),
    ("assets/portfolio_doc/portfolio_page.png", "assets/portfolio_doc/portfolio_page.webp"),
    ("assets/digital_marketing/Landing_Page.png", "assets/digital_marketing/Landing_Page.webp"),
    ("assets/digital_marketing/Social_media_post.png", "assets/digital_marketing/Social_media_post.webp"),
    ("assets/branding/moodboard_page.png", "assets/branding/moodboard_page.webp"),
]

for src, dest in large_images:
    if os.path.exists(src):
        img = Image.open(src)
        # Resize if overly massive (> 2400px width/height) to save memory and load time
        img.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
        img.save(dest, "WEBP", quality=90)
        print(f"Compressed {src} -> {dest} ({os.path.getsize(dest)} bytes)")

print("Full-res webp generated!")
