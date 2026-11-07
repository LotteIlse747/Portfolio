import fitz

doc = fitz.open(r"c:\Portfolio\assets\portfolio_doc\Portfolio.pdf")
print("Total pages in Portfolio.pdf:", len(doc))

full_text = ""
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    print(f"--- PAGE {page_num + 1} ---")
    print(text)
    full_text += f"\n\n--- PAGE {page_num + 1} ---\n" + text

with open("extracted_portfolio_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)
