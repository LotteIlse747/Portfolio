import os
import pymupdf

pdf_files = [
    ("assets/portfolio_doc/Portfolio.pdf", "assets/portfolio_doc", "portfolio_page"),
    ("assets/magazine/Gutierrez_Magazine_Me.pdf", "assets/magazine", "magazine_page"),
    ("assets/ui_ux/KainNow.pdf", "assets/ui_ux", "kainnow_page"),
    ("assets/typography/Brand_Identity_Poster.pdf", "assets/typography", "typography_poster_1"),
    ("assets/typography/Brand_Identity_Poster2.pdf", "assets/typography", "typography_poster_2"),
    ("assets/branding/AnEndlessMotivation_Mood_Board.pdf", "assets/branding", "moodboard_page")
]

for pdf_rel_path, out_dir, prefix in pdf_files:
    pdf_path = os.path.join(os.path.dirname(__file__), pdf_rel_path)
    output_directory = os.path.join(os.path.dirname(__file__), out_dir)
    os.makedirs(output_directory, exist_ok=True)
    
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    doc = pymupdf.open(pdf_path)
    print(f"\nProcessing {pdf_rel_path} ({len(doc)} pages)...")
    for i, page in enumerate(doc):
        # 2x scale for crisp retina display
        pix = page.get_pixmap(dpi=200)
        out_name = f"{prefix}_{i+1}.png" if len(doc) > 1 else f"{prefix}.png"
        out_file = os.path.join(output_directory, out_name)
        pix.save(out_file)
        print(f"  Saved page {i+1} to {out_file} ({pix.width}x{pix.height})")

print("\nAll PDFs rendered to crisp images successfully!")
