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

// State Management
let currentFilter = "all";
let activeModalProject = null;
let currentModalPageIndex = 0;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  initNavigation();
  renderPortfolioGrid();
  initFilterTabs();
  initModalListeners();
  initContactForm();
  initBackToTop();
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
   Project Modal Lightbox
   ========================================================================== */
function initModalListeners() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

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

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.open) return;
    if (e.key === "ArrowLeft") stepModalMedia(-1);
    if (e.key === "ArrowRight") stepModalMedia(1);
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;
  currentModalPageIndex = 0;

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

  if (!container || !currentItem) return;

  if (currentItem.type === "video") {
    container.innerHTML = `
      <video controls playsinline poster="${currentItem.poster || ''}" style="width:100%; max-height:480px; border-radius:8px;">
        <source src="${currentItem.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    container.innerHTML = `
      <img src="${currentItem.src}" alt="${currentItem.caption || 'Project visual'}" style="max-height:500px; width:auto; border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.5);">
    `;
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
}

function stepModalMedia(direction) {
  if (!activeModalProject || !activeModalProject.media) return;
  const total = activeModalProject.media.length;
  currentModalPageIndex = (currentModalPageIndex + direction + total) % total;
  updateModalMediaDisplay();
}

/* ==========================================================================
   Contact Form & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim();
    const email = document.getElementById("contact-email")?.value.trim();
    const message = document.getElementById("contact-message")?.value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Success response simulation
    showToast(`Thank you, ${name}! Your message has been sent to Andrei.`, "success");
    form.reset();
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

  toast.innerHTML = `
    <span class="toast-icon">
      ${type === "success" 
        ? `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
      }
    </span>
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
