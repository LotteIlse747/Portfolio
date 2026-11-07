# Andrei Shin Gutierrez — Graphic Design & Multimedia Portfolio
**Institution:** City College of Calamba (CCC)  
**Program & Section:** BS Computer Science — Class 3CS4  
**Course:** Graphic Design (GD)  
**Submission Deadline:** November 7, 2026 @ 11:59 PM  

---

## 📌 Project Overview
This is a modern, high-performance, and fully responsive graphic design portfolio website built directly in **VS Code** with vanilla HTML5, modern CSS3, and JavaScript. It incorporates every creative output from your Google Drive folder:

1. **Promotional Commercial Video (Promo Ads)**:
   - File: `assets/promo_video/3CS4_Gutierrez_Andrei_PromoVideo.mp4`
   - Showcased in a dedicated video theatre player with custom poster, video playback controls, and project specs.
2. **Brand Identity & Logo System — "An Endless Motivation"**:
   - Files: Badge Logo, Horizontal Logo, Stacked Horizontal Logo, Vertical Logo, Favicon Icon, and official Mood Board PDF & color palette.
3. **Editorial & Publication Design — "AURA: The Personal Issue (Issue N° 01)"**:
   - 4-Page full editorial magazine spread featuring Andrei Gutierrez's background (Hokkaido, Japan to Calamba, Philippines), wins, philosophy, and creative direction.
4. **Omnichannel Digital Marketing Suite**:
   - Files: Multi-format display banner ads, conversion landing page layout, email newsletter campaign, and social media ad feed post.
5. **UI/UX Mobile App Design — "KainNow"**:
   - 5-page mid-fidelity wireframe flow (Onboarding, Restaurant Search, Item Customizer, Cart Checkout, and Prototype Flow Map).
   - Direct interactive link to the live **Figma prototype**.
6. **Typographic Brand Posters**:
   - *Amber & Oak Coffeehouse* ("Slow mornings, strong coffee")
   - *Loop Records* ("New sounds. Old souls.")
7. **Master Graphic Design Showcase Sheet**:
   - High-resolution portfolio summary sheet and downloadable PDF.

---

## 🚀 How to View & Run in VS Code

### Option 1: Live Server (Recommended)
1. Open **VS Code**.
2. Press `Ctrl + O` (or `File` > `Open Folder...`) and select `C:\Portfolio`.
3. If you have the **Live Server** extension installed (by Ritwick Dey):
   - Right-click `index.html` in the file explorer.
   - Click **"Open with Live Server"**.
4. The website will automatically launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Launch
1. Open Windows File Explorer and navigate to `C:\Portfolio`.
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Brave, Firefox).
3. Everything runs standalone with no server setup required!

---

## 🌐 How to Deploy & Get Your Live Submission URL
The assignment instructions require a live web link (**"for submission: URL like only of the web"**). You can use any of these free methods:

### Method A: GitHub Pages (Recommended)
1. Open your terminal in VS Code (`Ctrl + ~`) in `C:\Portfolio`.
2. Initialize and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Andrei Gutierrez Graphic Design Portfolio (3CS4)"
   ```
3. Go to [github.com](https://github.com) and create a new public repository (e.g. `graphic-design-portfolio`).
4. Link and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/graphic-design-portfolio.git
   git branch -M main
   git push -u origin main
   ```
5. On GitHub, navigate to **Settings** > **Pages**.
6. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
7. In about 60 seconds, your site is live at:
   ```
   https://<your-username>.github.io/graphic-design-portfolio/
   ```
8. **Copy and submit this URL!**

### Method B: Netlify Drop (Instant 30-Second Deployment)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `C:\Portfolio` folder into the browser window.
3. It will immediately publish your website and give you a free live URL (e.g. `https://andrei-gutierrez-portfolio.netlify.app`).

### Method C: Vercel
1. Install Vercel CLI or import your GitHub repository at [vercel.com](https://vercel.com).
2. It auto-detects static HTML and gives you a free live `.vercel.app` URL immediately.

---

## 📂 Project Structure
```text
C:\Portfolio\
├── index.html                   # Main semantic HTML5 portfolio document
├── README.md                    # Project documentation & deployment guide
├── css/
│   └── styles.css               # Responsive design, theme variables, glassmorphism
├── js/
│   └── main.js                  # Dynamic project modal, carousel, filters, navigation
├── assets/
│   ├── branding/                # AM Logos, mood board PDF, favicon
│   ├── digital_marketing/       # Banner ads, landing page, newsletter, social post
│   ├── magazine/                # AURA magazine 4-page spread & original PDF
│   ├── portfolio_doc/           # Master portfolio presentation sheet & PDF
│   ├── promo_video/             # 3CS4 Promotional Commercial Video (MP4) & poster
│   ├── typography/              # Amber & Oak and Loop Records posters & PDFs
│   ├── ui_ux/                   # KainNow 5-page wireframe flow & PDF
│   └── thumbnails/              # Ultra-fast WebP responsive preview thumbnails
└── scripts/                     # Automated download & optimization scripts
```

---

## 🎨 Features & Rubric Compliance
- **Home**: Hero section with interactive typewriter, personal badges, quick stats, and 3D card.
- **About**: Personal autobiography (Hokkaido, Japan & Philippines), creative philosophy, quick facts.
- **Promotional Ads**: Native video theater player streaming `3CS4_Gutierrez_Andrei_PromoVideo.mp4`.
- **Skills**: Visual progress bars and skill chips across 4 categories (Graphic Design, UI/UX, Video, Marketing).
- **Certifications**: 4 verified academic credential cards from City College of Calamba (3CS4).
- **Portfolio**: Filterable gallery with native `<dialog>` modal lightbox, multi-page carousels, and download links.
- **Contact / Connect**: Working form with validation, email, location, and social profile links.
- **Responsiveness**: Fluid layout using `clamp()`, flexible grids, and container queries tested for mobile web and desktop.
