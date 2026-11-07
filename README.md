# Andrei Shin Gutierrez — Graphic Design & Multimedia Portfolio
**Institution:** City College of Calamba (CCC)  
**Program & Section:** BS Computer Science — Class 3CS4  
**Course:** Graphic Design (GD)  
**Submission Deadline:** November 7, 2026 @ 11:59 PM  
**GitHub Account:** [LotteIlse747](https://github.com/LotteIlse747)  
**Target Submission Link:** `https://lotteilse747.github.io/portfolio/`  

---

## 📌 Project Overview
This is a modern, high-performance, and fully responsive graphic design portfolio website built directly in **VS Code** with vanilla HTML5, modern CSS3, and JavaScript. It incorporates every creative output from your Google Drive folder:

1. **Promotional Commercial Video (Promo Ads)**:
   - File: `assets/promo_video/3CS4_Gutierrez_Andrei_PromoVideo.mp4`
   - Showcased in a dedicated video theatre player with playback controls (Play/Pause, Fullscreen, Speed 1x–2x), poster frame, and project specs.
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

## ⚡ Super-Quick 1-Click GitHub Deployment

A pre-configured batch script `deploy_to_github.bat` has been included in the project root:

1. In Windows File Explorer, double-click:
   ```text
   C:\Portfolio\deploy_to_github.bat
   ```
2. The script will:
   - Automatically commit all your files.
   - Open [github.com/new](https://github.com/new?name=portfolio&description=Graphic+Design+Portfolio+-+City+College+of+Calamba+(3CS4)&visibility=public) with the repository name `portfolio` pre-filled.
   - Click the green **"Create repository"** button.
   - Return to the terminal and press any key to push your code.
   - Automatically open the **GitHub Pages** settings page.
3. In GitHub Pages settings:
   - Under **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. **Your Submission Link is ready**:
   ```
   https://lotteilse747.github.io/portfolio/
   ```

---

## 🚀 How to View & Run in VS Code

### Option 1: Live Server (Recommended)
1. Open **VS Code**.
2. Press `Ctrl + K, Ctrl + O` (or `File` > `Open Folder...`) and select `C:\Portfolio`.
3. If you have the **Live Server** extension installed:
   - Right-click `index.html` in the file explorer.
   - Click **"Open with Live Server"**.
4. The website will automatically launch at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Launch
1. Open Windows File Explorer and navigate to `C:\Portfolio`.
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Brave, Firefox).
3. Everything runs standalone with no external runtime dependencies!

---

## 🛠️ Complete Interactive Functions Added to All Sections

- **Hero Section**:
  - `Explore My Portfolio`: Smooth scroll to gallery.
  - `Watch Promo Video`: Smooth scroll to `#about`, spotlights the video theatre with a blue neon glow, and starts playback.
  - `Download Portfolio PDF`: Direct download of original PDF.
  - `Hero Card`: Click to immediately view the 4-page *AURA Magazine* in the lightbox.
- **About & Video Player**:
  - `Play / Pause` toggle button in header.
  - `Playback Speed` toggle (1x, 1.25x, 1.5x, 2x) with toast notification.
  - `Fullscreen` toggle button.
  - `Download MP4` button.
- **Skills Section**:
  - Interactive category filter tabs (All Skills, Graphic Design, UI/UX, Video & Motion, Digital Marketing).
  - Dynamically animated skill progress bars that fill smoothly when scrolled into view.
- **Certifications Section**:
  - **Clickable Credential Cards**: Clicking ANY certification opens the official **Certificate Verification Modal Dialog**.
  - `Copy Credential ID` button with clipboard copy toast.
  - `Print / Save Certificate` button triggering browser print layout.
- **Portfolio Section**:
  - Category filter tabs with live dynamic project counter badges (`All 7`, `Brand 2`, etc.).
  - **Full-Featured Lightbox Dialog**:
    - Multi-page carousel (`Prev` / `Next` / `1 / 4` page counter).
    - **Thumbnail Carousel Strip**: Click any thumbnail in the strip to jump directly to that page.
    - **Zoom In / Zoom Out**: Click image or zoom button to magnify high-res graphic details.
    - **Share Project**: Generates and copies deep-link URL (e.g. `#project-kainnow-app`).
    - Direct PDF & Figma link launch buttons.
- **Contact Section**:
  - `Copy Email` button next to `afgutierrez@ccc.edu.ph` with instant clipboard confirmation toast.
  - Working message form with character counter and local storage backup (`localStorage.portfolio_inbox`).
- **Global**:
  - Dark / Light mode toggle with saved persistence.
  - Keyboard shortcuts (`←` / `→` for carousel, `+` / `-` for zoom, `Esc` to close).
  - Back-to-top floating button.
