import os
from PIL import Image

thumbs_dir = os.path.join("assets", "thumbnails")
os.makedirs(thumbs_dir, exist_ok=True)

images_to_thumb = [
    ("assets/portfolio_doc/portfolio_page.png", "portfolio_thumb.webp"),
    ("assets/digital_marketing/Banner_ads.png", "banner_ads_thumb.webp"),
    ("assets/digital_marketing/Landing_Page.png", "landing_page_thumb.webp"),
    ("assets/digital_marketing/Newsletter.png", "newsletter_thumb.webp"),
    ("assets/digital_marketing/Social_media_post.png", "social_media_thumb.webp"),
    ("assets/magazine/magazine_page_1.png", "magazine_page_1_thumb.webp"),
    ("assets/magazine/magazine_page_2.png", "magazine_page_2_thumb.webp"),
    ("assets/magazine/magazine_page_3.png", "magazine_page_3_thumb.webp"),
    ("assets/magazine/magazine_page_4.png", "magazine_page_4_thumb.webp"),
    ("assets/ui_ux/kainnow_page_1.png", "kainnow_1_thumb.webp"),
    ("assets/ui_ux/kainnow_page_2.png", "kainnow_2_thumb.webp"),
    ("assets/ui_ux/kainnow_page_3.png", "kainnow_3_thumb.webp"),
    ("assets/ui_ux/kainnow_page_4.png", "kainnow_4_thumb.webp"),
    ("assets/ui_ux/kainnow_page_5.png", "kainnow_5_thumb.webp"),
    ("assets/typography/typography_poster_1.png", "typography_1_thumb.webp"),
    ("assets/typography/typography_poster_2.png", "typography_2_thumb.webp"),
    ("assets/branding/moodboard_page.png", "moodboard_thumb.webp"),
    ("assets/branding/AM_BadgeLogo.png", "badge_logo_thumb.webp"),
    ("assets/branding/AM_HorizontalLogo.png", "horizontal_logo_thumb.webp"),
    ("assets/branding/AM_Stacked_HorizontalLogo.png", "stacked_logo_thumb.webp"),
    ("assets/branding/AM_VerticalLogo.png", "vertical_logo_thumb.webp"),
    ("assets/branding/Logo_Icon.jpg", "logo_icon_thumb.webp"),
]

for src, thumb_name in images_to_thumb:
    if os.path.exists(src):
        img = Image.open(src)
        img.thumbnail((900, 900), Image.Resampling.LANCZOS)
        # Convert RGBA to RGB if saving to WebP or keep RGBA
        dest = os.path.join(thumbs_dir, thumb_name)
        img.save(dest, "WEBP", quality=85)
        print(f"Created thumb: {dest} ({os.path.getsize(dest)} bytes)")

# Also create video poster image from the video or magazine cover!
# Let's extract frame from video if possible, or use magazine_page_1 as video poster fallback
try:
    import cv2
    # opencv test
except:
    pass

print("Thumbnails generated successfully!")
