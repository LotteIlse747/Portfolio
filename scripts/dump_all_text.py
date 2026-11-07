import pymupdf

docs = [
    'assets/magazine/Gutierrez_Magazine_Me.pdf',
    'assets/ui_ux/KainNow.pdf',
    'assets/typography/Brand_Identity_Poster.pdf',
    'assets/typography/Brand_Identity_Poster2.pdf',
    'assets/branding/AnEndlessMotivation_Mood_Board.pdf'
]

with open("all_extracted_text.txt", "w", encoding="utf-8") as out:
    for d in docs:
        out.write(f"\n\n==================== {d} ====================\n")
        try:
            doc = pymupdf.open(d)
            for i, p in enumerate(doc):
                out.write(f"\n--- Page {i+1} ---\n")
                out.write(p.get_text())
        except Exception as e:
            out.write(f"Error: {e}\n")

print("Dumped all extracted text to all_extracted_text.txt")
