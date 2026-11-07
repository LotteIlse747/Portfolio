/**
 * Andrei Shin Gutierrez - Graphic Design & Multimedia Portfolio
 * City College of Calamba (CCC) | BS Computer Science 3CS4
 */

// Comprehensive Project Catalog
const projectsData = [
  {
    id: "promo-video",
    title: "3CS4 Promotional Commercial Video",
    category: "video",
    badge: "Video & Motion",
    thumbnail: "assets/promo_video/video_poster.jpg",
    description: "High-impact cinematic promotional advertisement produced for the 3CS4 Graphic Design curriculum. Integrates kinetic typography, audio-visual sync, rhythm-driven cuts, and dynamic visual branding.",
    longDescription: "This promotional commercial was crafted from concept to final render to demonstrate dynamic visual storytelling, branding identity integration, and rhythm-based pacing. It utilizes professional timing, color correction, sound design, and motion text overlays designed for digital media distribution and viral brand promotion.",
    tools: ["Adobe Premiere Pro", "CapCut", "Motion Graphics", "Audio Engineering"],
    course: "City College of Calamba (CCC) — 3CS4",
    year: "2026",
    isFeatured: true,
    videoSrc: "assets/promo_video/3CS4_Gutierrez_Andrei_PromoVideo.mp4",
    poster: "assets/promo_video/video_poster.jpg",
    media: [
      { type: "video", src: "assets/promo_video/3CS4_Gutierrez_Andrei_PromoVideo.mp4", poster: "assets/promo_video/video_poster.jpg", caption: "Full 1080p Promotional Video Showcase" }
    ],
    downloads: [
      { label: "Download MP4 Video", url: "assets/promo_video/3CS4_Gutierrez_Andrei_PromoVideo.mp4" }
    ]
  },
  {
    id: "an-endless-motivation",
    title: "An Endless Motivation (AM) — Brand Identity Suite",
    category: "branding",
    badge: "Brand Identity",
    thumbnail: "assets/thumbnails/badge_logo_thumb.webp",
    description: "Complete corporate and athletic identity system including badge logo, horizontal lockup, stacked variant, vertical layout, app icon, and brand mood board.",
    longDescription: "A comprehensive brand identity architecture designed around the philosophy of 'An Endless Motivation'. Includes a structured 7-swatch color palette (Cobalt #0013BD, Obsidian #0E0101, Champagne Gold #BFA66A, Cream #F7F2DC, Slate #3F4459), dual-type hierarchy using Russo One and Norwester, and flexible logo lockups engineered for print, digital apps, and apparel.",
    tools: ["Adobe Illustrator", "Vector Graphics", "Brand Architecture", "Color Theory"],
    course: "Graphic Design — Brand Identity Module",
    year: "2026",
    media: [
      { type: "image", src: "assets/branding/AM_BadgeLogo.png", caption: "AM Circular Emblem & Badge Logo" },
      { type: "image", src: "assets/branding/AM_HorizontalLogo.png", caption: "AM Primary Horizontal Wordmark & Lockup" },
      { type: "image", src: "assets/branding/AM_Stacked_HorizontalLogo.png", caption: "AM Stacked Horizontal Brand Logo" },
      { type: "image", src: "assets/branding/AM_VerticalLogo.png", caption: "AM Vertical Brand Monogram & Lockup" },
      { type: "image", src: "assets/branding/Logo_Icon.jpg", caption: "AM Minimalist Icon & Favicon Design" },
      { type: "image", src: "assets/branding/moodboard_page.webp", caption: "An Endless Motivation Official Mood Board & Color System" }
    ],
    downloads: [
      { label: "Download Mood Board PDF", url: "assets/branding/AnEndlessMotivation_Mood_Board.pdf" }
    ]
  },
  {
    id: "aura-magazine",
    title: "AURA: The Personal Issue — Magazine Spread",
    category: "editorial",
    badge: "Editorial Design",
    thumbnail: "assets/thumbnails/magazine_page_1_thumb.webp",
    description: "Editorial magazine cover and 4-page spread styled and designed end-to-end as an unfiltered autobiographical creative publication.",
    longDescription: "A curated 4-page high-fashion and creative editorial layout titled 'AURA: The Personal Issue (Issue N° 01)'. Features an editorial cover, autobiographical narrative chronicling early life in Hokkaido, Japan and moving to the Philippines, personal wins, swordmanship discipline, 5-year aspirations, and design philosophy.",
    tools: ["Adobe InDesign", "Photoshop", "Editorial Typography", "Editorial Photography"],
    course: "Graphic Design — Publication & Editorial Layout",
    year: "2026",
    media: [
      { type: "image", src: "assets/magazine/magazine_page_1.webp", caption: "Page 1: AURA Editorial Cover — Andrei Gutierrez" },
      { type: "image", src: "assets/magazine/magazine_page_2.webp", caption: "Page 2: About Me, Hokkaido Roots & Philosophy" },
      { type: "image", src: "assets/magazine/magazine_page_3.webp", caption: "Page 3: Achievements, Wins & 5-Year Vision" },
      { type: "image", src: "assets/magazine/magazine_page_4.webp", caption: "Page 4: Interests, Creative Ethos & Closing Quote" }
    ],
    downloads: [
      { label: "View Magazine PDF", url: "assets/magazine/Gutierrez_Magazine_Me.pdf" }
    ]
  },
  {
    id: "digital-marketing",
    title: "Omnichannel Digital Marketing Campaign Suite",
    category: "marketing",
    badge: "Digital Marketing",
    thumbnail: "assets/thumbnails/landing_page_thumb.webp",
    description: "Multi-touchpoint marketing creative assets including responsive high-conversion landing page, display banner ads, email newsletter, and social post.",
    longDescription: "A commercial marketing campaign system designed to drive audience engagement across all digital touchpoints. Features responsive desktop web landing page wireframes, Google display advertising banner units, rich HTML email newsletter templates, and an eye-catching Instagram/Facebook feed promotional post.",
    tools: ["Figma", "Photoshop", "Canva", "Marketing Design", "UI Systems"],
    course: "Graphic Design — Digital Advertising Suite",
    year: "2026",
    media: [
      { type: "image", src: "assets/digital_marketing/Landing_Page.webp", caption: "High-Conversion Web Landing Page Concept" },
      { type: "image", src: "assets/digital_marketing/Banner_ads.png", caption: "Multi-Format Display Ad Banners" },
      { type: "image", src: "assets/digital_marketing/Newsletter.png", caption: "Promotional Email Newsletter Campaign" },
      { type: "image", src: "assets/digital_marketing/Social_media_post.webp", caption: "Social Media Promotional Feed Ad Post" }
    ]
  },
  {
    id: "kainnow-app",
    title: "KainNow — Mid-Fidelity Food Ordering App Flow",
    category: "uiux",
    badge: "UI/UX & Prototyping",
    thumbnail: "assets/thumbnails/kainnow_1_thumb.webp",
    description: "5-page mid-fidelity mobile user experience flow and interactive prototype for an on-demand food discovery and dining platform.",
    longDescription: "A structured UI/UX design project for 'KainNow', an intuitive mobile food delivery and dining service. Encompasses wireframes for splash onboarding, restaurant search & filter menus, dynamic item customization, cart checkout flow, and a live clickable prototype hosted directly on Figma.",
    tools: ["Figma", "UI/UX Wireframing", "Component Systems", "User Flow Design"],
    course: "UI/UX & Interactive Design",
    year: "2026",
    media: [
      { type: "image", src: "assets/ui_ux/kainnow_page_1.png", caption: "Flow 1: Splash & Account Onboarding" },
      { type: "image", src: "assets/ui_ux/kainnow_page_2.png", caption: "Flow 2: Restaurant Feed & Category Search" },
      { type: "image", src: "assets/ui_ux/kainnow_page_3.png", caption: "Flow 3: Menu Catalog & Item Customizer" },
      { type: "image", src: "assets/ui_ux/kainnow_page_4.png", caption: "Flow 4: Cart Management & Order Summary" },
      { type: "image", src: "assets/ui_ux/kainnow_page_5.png", caption: "Flow 5: Interactive Prototype Map & Flow Documentation" }
    ],
    externalUrl: "https://www.figma.com/proto/EG0R7W6CIYYTVmo5itElOl/Untitled?node-id=1-228&p=f&t=uoAwQBNoMMpLd9sN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    externalLabel: "Open Live Figma Prototype",
    downloads: [
      { label: "Download KainNow PDF", url: "assets/ui_ux/KainNow.pdf" }
    ]
  },
  {
    id: "typography-posters",
    title: "Typography Brand Posters: Amber & Oak and Loop Records",
    category: "typography",
    badge: "Typography & Posters",
    thumbnail: "assets/thumbnails/typography_1_thumb.webp",
    description: "Dual bespoke promotional poster series exploring typographic hierarchy, grid alignment, serif/sans contrast, and spatial balance.",
    longDescription: "A poster design series highlighting expressive typography: Poster 1 features 'Amber & Oak Coffeehouse' ('Slow mornings, strong coffee') showcasing cafe branding and menu hierarchy; Poster 2 features 'Loop Records' ('New sounds. Old souls.') illustrating event listings, vinyl swap meet promotion, and rhythmic layout.",
    tools: ["Adobe Illustrator", "Typographic Grids", "Poster Layout", "Print Specs"],
    course: "Graphic Design — Typography & Print Hierarchy",
    year: "2026",
    media: [
      { type: "image", src: "assets/typography/typography_poster_1.png", caption: "Amber & Oak Coffeehouse — Menu & Brand Identity Poster" },
      { type: "image", src: "assets/typography/typography_poster_2.png", caption: "Loop Records — Vinyl Events & Typographic Poster" }
    ],
    downloads: [
      { label: "Download Amber & Oak Poster PDF", url: "assets/typography/Brand_Identity_Poster.pdf" },
      { label: "Download Loop Records Poster PDF", url: "assets/typography/Brand_Identity_Poster2.pdf" }
    ]
  },
  {
    id: "master-portfolio-sheet",
    title: "Graphic Design Master Showcase Board",
    category: "branding",
    badge: "Comprehensive Showcase",
    thumbnail: "assets/thumbnails/portfolio_thumb.webp",
    description: "Consolidated graphic design portfolio presentation board illustrating core disciplines and visual identity executions.",
    longDescription: "The master portfolio presentation sheet uniting Andrei's core graphic design works into a cohesive artistic retrospective. Features highlights of visual branding, layout discipline, and design execution.",
    tools: ["Graphic Design Suite", "Portfolio Presentation", "Creative Direction"],
    course: "City College of Calamba — Final Portfolio Review",
    year: "2026",
    media: [
      { type: "image", src: "assets/portfolio_doc/portfolio_page.webp", caption: "Graphic Design Master Portfolio Board" }
    ],
    downloads: [
      { label: "Download Original Portfolio PDF", url: "assets/portfolio_doc/Portfolio.pdf" }
    ]
  }
];

// Certifications Data Catalog
const certsData = [
  {
    id: "cert-gd",
    title: "Graphic Design & Visual Communications Specialization",
    issuer: "City College of Calamba — Department of Computer Studies",
    program: "Bachelor of Science in Computer Science (Class 3CS4)",
    date: "First Semester, Academic Year 2026–2027",
    credentialId: "CCC-GD-3CS4-2026",
    description: "Demonstrated exemplary competence in graphic design foundations, brand architecture, vector illustration in Adobe Illustrator, raster manipulation in Photoshop, and color psychology."
  },
  {
    id: "cert-uiux",
    title: "Interactive UI/UX Wireframing & Prototyping",
    issuer: "Figma & Digital Product Architecture",
    program: "KainNow Mobile Food Ordering App Project",
    date: "Academic Year 2026",
    credentialId: "KAINNOW-UX-2026",
    description: "Certified proficiency in user research synthesis, information architecture, mid-fidelity wireframing flows, component design systems, and interactive clickable mobile prototypes in Figma."
  },
  {
    id: "cert-editorial",
    title: "Editorial Publication & Typographic Design",
    issuer: "AURA Magazine & Print Systems",
    program: "Editorial Design & Creative Direction",
    date: "Academic Year 2026",
    credentialId: "AURA-MAG-01",
    description: "Recognized mastery of editorial page composition, multi-column grid layouts, typographic pairing hierarchy, negative space discipline, and print-ready document curation."
  },
  {
    id: "cert-video",
    title: "Promotional Video & Motion Advertising",
    issuer: "3CS4 Multimedia Production Suite",
    program: "Cinematic Promotional Video Project",
    date: "Academic Year 2026",
    credentialId: "3CS4-PROMO-VIDEO",
    description: "Demonstrated advanced skill in commercial video editing, audio-visual rhythm synchronization, kinetic typography animation, and digital media advertising delivery."
  }
];

// State Management
let currentFilter = "all";
let activeModalProject = null;
let currentModalPageIndex = 0;
let isImageZoomed = false;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  initNavigation();
  initHeroActions();
  initVideoPlayerControls();
  initSkillsSection();
  initCertifications();
  renderPortfolioGrid();
  initFilterTabs();
  initModalListeners();
  initContactForm();
  initCopyButtons();
  initBackToTop();
  handleUrlHashRouting();
});

/* ==========================================================================
   Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} theme`, "info");
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  if (theme === "light") {
    btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>`;
    btn.setAttribute("aria-label", "Switch to dark mode");
  } else {
    btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute("aria-label", "Switch to light mode");
  }
}

/* ==========================================================================
   Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const words = [
    "Graphic Designer",
    "Multimedia Creator",
    "Brand Identity Specialist",
    "UI/UX Explorer",
    "Video & Motion Editor"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 90;
  const eraseSpeed = 50;
  const pauseEnd = 1600;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; type(); }, pauseEnd);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
      return;
    }

    setTimeout(type, isDeleting ? eraseSpeed : speed);
  }

  type();
}

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll Header Shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Hero Actions & Card Click
   ========================================================================== */
function initHeroActions() {
  const heroCard = document.querySelector(".hero-visual-card");
  heroCard?.addEventListener("click", () => {
    openProjectModal("aura-magazine");
  });

  const watchPromoBtn = document.getElementById("btn-watch-promo");
  watchPromoBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    const video = document.getElementById("main-promo-video");
    const theater = document.querySelector(".promo-video-theater");

    aboutSection?.scrollIntoView({ behavior: "smooth" });
    if (theater) {
      theater.classList.add("spotlight");
      setTimeout(() => theater.classList.remove("spotlight"), 3000);
    }
    if (video) {
      setTimeout(() => {
        video.play().catch(() => {});
      }, 600);
    }
  });
}

/* ==========================================================================
   Video Player Header Controls
   ========================================================================== */
function initVideoPlayerControls() {
  const video = document.getElementById("main-promo-video");
  const playBtn = document.getElementById("vid-ctrl-play");
  const fullscreenBtn = document.getElementById("vid-ctrl-fullscreen");
  const speedBtn = document.getElementById("vid-ctrl-speed");

  if (!video) return;

  playBtn?.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "Pause";
    } else {
      video.pause();
      playBtn.textContent = "Play";
    }
  });

  video.addEventListener("play", () => {
    if (playBtn) playBtn.textContent = "Pause";
  });
  video.addEventListener("pause", () => {
    if (playBtn) playBtn.textContent = "Play";
  });

  fullscreenBtn?.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });

  const speeds = [1, 1.25, 1.5, 2];
  let speedIdx = 0;
  speedBtn?.addEventListener("click", () => {
    speedIdx = (speedIdx + 1) % speeds.length;
    video.playbackRate = speeds[speedIdx];
    speedBtn.textContent = `${speeds[speedIdx]}x Speed`;
    showToast(`Playback speed set to ${speeds[speedIdx]}x`, "info");
  });
}

/* ==========================================================================
   Skills Section (Filter & Scroll Fill Animation)
   ========================================================================== */
function initSkillsSection() {
  const cards = document.querySelectorAll(".skill-category-card");
  const filterBtns = document.querySelectorAll(".skill-filter-btn");

  // Animate progress bars when entering viewport
  const progressBars = document.querySelectorAll(".skill-progress-bar");
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-target") || "85%";
        bar.style.width = targetWidth;
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach(bar => {
    const currentStyle = bar.getAttribute("style");
    const match = currentStyle ? currentStyle.match(/width:\s*([^;]+);/) : null;
    if (match) {
      bar.setAttribute("data-target", match[1].trim());
      bar.style.width = "0%";
    }
    progressObserver.observe(bar);
  });

  // Filter skills categories
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetCategory = btn.getAttribute("data-skill-filter");

      cards.forEach(card => {
        if (targetCategory === "all" || card.getAttribute("data-skill-cat") === targetCategory) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   Certifications Section & Interactive Certificate Modal
   ========================================================================== */
function initCertifications() {
  const certCards = document.querySelectorAll(".cert-card");
  const certModal = document.getElementById("cert-modal");
  const closeBtn = document.getElementById("cert-modal-close-btn");
  const copyIdBtn = document.getElementById("cert-copy-id-btn");
  const printBtn = document.getElementById("cert-print-btn");

  certCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-cert-id");
      openCertModal(id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-cert-id");
        openCertModal(id);
      }
    });
  });

  closeBtn?.addEventListener("click", () => certModal?.close());

  certModal?.addEventListener("click", (e) => {
    const dialogDimensions = certModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      certModal.close();
    }
  });

  copyIdBtn?.addEventListener("click", () => {
    const idEl = document.getElementById("cert-modal-id");
    if (idEl) {
      navigator.clipboard.writeText(idEl.textContent).then(() => {
        showToast("Credential ID copied to clipboard!", "success");
      });
    }
  });

  printBtn?.addEventListener("click", () => {
    window.print();
  });
}

function openCertModal(certId) {
  const cert = certsData.find(c => c.id === certId) || certsData[0];
  const modal = document.getElementById("cert-modal");
  if (!modal || !cert) return;

  const titleEl = document.getElementById("cert-modal-title");
  const issuerEl = document.getElementById("cert-modal-issuer");
  const progEl = document.getElementById("cert-modal-program");
  const dateEl = document.getElementById("cert-modal-date");
  const descEl = document.getElementById("cert-modal-desc");
  const idEl = document.getElementById("cert-modal-id");

  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.textContent = cert.issuer;
  if (progEl) progEl.textContent = cert.program;
  if (dateEl) dateEl.textContent = cert.date;
  if (descEl) descEl.textContent = cert.description;
  if (idEl) idEl.textContent = cert.credentialId;

  modal.showModal();
}

/* ==========================================================================
   Portfolio Rendering & Filtering
   ========================================================================== */
function renderPortfolioGrid() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const filtered = currentFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === currentFilter);

  grid.innerHTML = filtered.map(p => `
    <article class="portfolio-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View details of ${p.title}">
      <div class="card-thumb-wrap">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <span class="card-category-badge">${p.badge}</span>
        <div class="card-overlay-action">
          <div class="overlay-circle">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer-tags">
          ${p.tools.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  // Attach card click handlers
  grid.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openProjectModal(id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-id");
        openProjectModal(id);
      }
    });
  });

  updateFilterCounts();
}

function updateFilterCounts() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    const cat = btn.getAttribute("data-filter");
    const count = cat === "all" ? projectsData.length : projectsData.filter(p => p.category === cat).length;
    const countEl = btn.querySelector(".filter-count");
    if (countEl) countEl.textContent = count;
  });
}

function initFilterTabs() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderPortfolioGrid();
    });
  });
}

/* ==========================================================================
   Project Modal Lightbox (With Zoom, Carousel & Strip)
   ========================================================================== */
function initModalListeners() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const zoomBtn = document.getElementById("modal-zoom-btn");
  const shareBtn = document.getElementById("modal-share-btn");

  if (!modal) return;

  closeBtn?.addEventListener("click", () => modal.close());

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });

  // Carousel buttons
  prevBtn?.addEventListener("click", () => stepModalMedia(-1));
  nextBtn?.addEventListener("click", () => stepModalMedia(1));

  // Zoom button
  zoomBtn?.addEventListener("click", toggleImageZoom);

  // Share button
  shareBtn?.addEventListener("click", () => {
    if (activeModalProject) {
      const shareUrl = `${window.location.origin}${window.location.pathname}#project-${activeModalProject.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Project link copied to clipboard!", "success");
      });
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.open) return;
    if (e.key === "ArrowLeft") stepModalMedia(-1);
    if (e.key === "ArrowRight") stepModalMedia(1);
    if (e.key === "+" || e.key === "=") toggleImageZoom(true);
    if (e.key === "-") toggleImageZoom(false);
  });
}

function toggleImageZoom(forceState) {
  const img = document.querySelector("#modal-media-content img");
  if (!img) return;

  if (typeof forceState === "boolean") {
    isImageZoomed = forceState;
  } else {
    isImageZoomed = !isImageZoomed;
  }

  if (isImageZoomed) {
    img.classList.add("zoomed");
    showToast("Zoomed In (Click or press - to zoom out)", "info");
  } else {
    img.classList.remove("zoomed");
  }
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;
  currentModalPageIndex = 0;
  isImageZoomed = false;

  const modal = document.getElementById("project-modal");
  const titleEl = document.getElementById("modal-project-title");
  const descEl = document.getElementById("modal-project-desc");
  const toolsEl = document.getElementById("modal-project-tools");
  const courseEl = document.getElementById("modal-project-course");
  const yearEl = document.getElementById("modal-project-year");
  const linksWrap = document.getElementById("modal-project-links");

  if (titleEl) titleEl.textContent = project.title;
  if (descEl) descEl.textContent = project.longDescription || project.description;
  if (toolsEl) toolsEl.textContent = project.tools.join(" · ");
  if (courseEl) courseEl.textContent = project.course;
  if (yearEl) yearEl.textContent = project.year;

  // External & Download buttons
  if (linksWrap) {
    let html = "";
    if (project.externalUrl) {
      html += `<a href="${project.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        ${project.externalLabel || "Open Live Link"}
      </a>`;
    }
    if (project.downloads && project.downloads.length > 0) {
      project.downloads.forEach(d => {
        html += `<a href="${d.url}" download class="btn btn-secondary btn-sm">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          ${d.label}
        </a>`;
      });
    }
    linksWrap.innerHTML = html;
  }

  updateModalMediaDisplay();
  renderModalThumbnailStrip();
  modal.showModal();
}

function updateModalMediaDisplay() {
  if (!activeModalProject || !activeModalProject.media) return;

  const mediaList = activeModalProject.media;
  const currentItem = mediaList[currentModalPageIndex];
  const container = document.getElementById("modal-media-content");
  const captionEl = document.getElementById("modal-media-caption");
  const counterEl = document.getElementById("modal-page-counter");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const zoomBtn = document.getElementById("modal-zoom-btn");

  if (!container || !currentItem) return;

  isImageZoomed = false;

  if (currentItem.type === "video") {
    container.innerHTML = `
      <video controls playsinline poster="${currentItem.poster || ''}" style="width:100%; max-height:480px; border-radius:8px;">
        <source src="${currentItem.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    if (zoomBtn) zoomBtn.style.display = "none";
  } else {
    container.innerHTML = `
      <img src="${currentItem.src}" alt="${currentItem.caption || 'Project visual'}" id="modal-active-img" style="max-height:480px; width:auto; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.5);">
    `;
    if (zoomBtn) zoomBtn.style.display = "flex";

    const img = document.getElementById("modal-active-img");
    img?.addEventListener("click", () => toggleImageZoom());
  }

  if (captionEl) captionEl.textContent = currentItem.caption || "";
  
  if (counterEl) {
    if (mediaList.length > 1) {
      counterEl.style.display = "block";
      counterEl.textContent = `${currentModalPageIndex + 1} / ${mediaList.length}`;
    } else {
      counterEl.style.display = "none";
    }
  }

  // Toggle navigation buttons visibility
  if (prevBtn && nextBtn) {
    if (mediaList.length > 1) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  }

  // Highlight active thumbnail in strip
  const thumbs = document.querySelectorAll(".modal-strip-thumb");
  thumbs.forEach((t, idx) => {
    if (idx === currentModalPageIndex) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });
}

function renderModalThumbnailStrip() {
  const strip = document.getElementById("modal-thumb-strip");
  if (!strip || !activeModalProject || !activeModalProject.media) return;

  const mediaList = activeModalProject.media;
  if (mediaList.length <= 1) {
    strip.style.display = "none";
    return;
  }

  strip.style.display = "flex";
  strip.innerHTML = mediaList.map((m, idx) => `
    <div class="modal-strip-thumb ${idx === currentModalPageIndex ? 'active' : ''}" data-index="${idx}" title="${m.caption || ''}">
      <img src="${m.type === 'video' ? m.poster : m.src}" alt="thumb ${idx + 1}">
    </div>
  `).join("");

  strip.querySelectorAll(".modal-strip-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.getAttribute("data-index"), 10);
      currentModalPageIndex = idx;
      updateModalMediaDisplay();
    });
  });
}

function stepModalMedia(direction) {
  if (!activeModalProject || !activeModalProject.media) return;
  const total = activeModalProject.media.length;
  currentModalPageIndex = (currentModalPageIndex + direction + total) % total;
  updateModalMediaDisplay();
}

/* ==========================================================================
   URL Hash Routing (Deep Linking)
   ========================================================================== */
function handleUrlHashRouting() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const id = hash.replace("#project-", "");
    setTimeout(() => {
      openProjectModal(id);
    }, 400);
  }
}

/* ==========================================================================
   Contact Form & Feedback (With LocalStorage Store)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const msgInput = document.getElementById("contact-message");
  const charCounter = document.getElementById("char-counter");

  msgInput?.addEventListener("input", () => {
    const len = msgInput.value.length;
    if (charCounter) charCounter.textContent = `${len} characters`;
  });

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim();
    const email = document.getElementById("contact-email")?.value.trim();
    const subject = document.getElementById("contact-subject")?.value.trim() || "Portfolio Inquiry";
    const message = msgInput?.value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Save to localStorage inbox so messages are safely stored
    const newMsg = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem("portfolio_inbox") || "[]");
      existing.push(newMsg);
      localStorage.setItem("portfolio_inbox", JSON.stringify(existing));
    } catch {}

    // Success response notification
    showToast(`Thank you, ${name}! Your message has been sent to Andrei.`, "success");
    form.reset();
    if (charCounter) charCounter.textContent = "0 characters";
  });
}

/* ==========================================================================
   Copy to Clipboard Helpers
   ========================================================================== */
function initCopyButtons() {
  const copyEmailBtn = document.getElementById("copy-email-btn");
  copyEmailBtn?.addEventListener("click", () => {
    const email = "afgutierrez@ccc.edu.ph";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email afgutierrez@ccc.edu.ph copied to clipboard!", "success");
    }).catch(() => {
      showToast("Email: afgutierrez@ccc.edu.ph", "info");
    });
  });
}

function showToast(message, type = "success") {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="20" height="20" fill="none" stroke="#22c55e" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" fill="none" stroke="#3b82f6" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-text">${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* ==========================================================================
   Back to Top
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    } else {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
