/**
 * Ira Zaky Elmar - Portfolio Interactive Logic
 * Pure Vanilla JavaScript (Zero Dependencies, Highly Accessible, 60fps Smooth)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark / Light Mode - Desktop & Mobile)
  initTheme();

  // 2. Profile Image Interaction (Tap & Hover)
  initProfileImageHover();

  // 3. Mobile Navigation Drawer
  initMobileNav();

  // 4. Skill Tabs Filter with Accessibility
  initSkillTabs();

  // 5. Project Filter & Detail Modal with Focus Management
  initProjectSystem();

  // 6. Copy to Clipboard (Email & Phone)
  initClipboardButtons();

  // 7. Navbar Scroll State & Scrollspy
  initScrollEffects();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleBtnMobile = document.getElementById('themeToggleBtnMobile');
  const themeIcon = document.getElementById('themeIcon');
  const themeIconMobile = document.getElementById('themeIconMobile');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDarkInitial = savedTheme === 'dark' || (!savedTheme && prefersDark) || !savedTheme;
  
  if (isDarkInitial) {
    document.documentElement.classList.add('dark');
    updateThemeUI(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeUI(false);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  if (themeToggleBtnMobile) {
    themeToggleBtnMobile.addEventListener('click', toggleTheme);
  }

  function updateThemeUI(isDark) {
    const iconClass = isDark
      ? 'bi bi-sun-fill text-amber-400 text-lg'
      : 'bi bi-moon-stars-fill text-slate-700 text-lg';

    if (themeIcon) themeIcon.className = iconClass;
    if (themeIconMobile) themeIconMobile.className = iconClass;

    const label = isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap';
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', label);
    if (themeToggleBtnMobile) themeToggleBtnMobile.setAttribute('aria-label', label);
  }
}

/* ==========================================================================
   2. Profile Image Interaction (Desktop Hover & Mobile Touch)
   ========================================================================== */
function initProfileImageHover() {
  const img = document.getElementById('heroProfileImg');
  if (!img) return;

  const originalSrc = 'image/profil.webp';
  const alternateSrc = 'image/profil2.webp';

  // Preload alternate image to avoid network lag on first hover
  const preloadImg = new Image();
  preloadImg.src = alternateSrc;

  img.addEventListener('mouseenter', () => {
    img.src = alternateSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });

  // Tap support for touch screens
  img.addEventListener('click', () => {
    img.src = img.src.includes('profil2') ? originalSrc : alternateSrc;
  });
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('closed');
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Tutup menu navigasi');
    toggleBtn.innerHTML = '<i class="bi bi-x-lg text-2xl text-amber-500"></i>';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    drawer.classList.add('closed');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Buka menu navigasi');
    toggleBtn.innerHTML = '<i class="bi bi-list text-2xl text-amber-500"></i>';
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   4. Skill Tabs Filter with Accessibility
   ========================================================================== */
function initSkillTabs() {
  const tabBtns = document.querySelectorAll('[data-skill-tab]');
  const skillCards = document.querySelectorAll('[data-skill-cat]');

  if (!tabBtns.length || !skillCards.length) return;

  const activeClasses = ['bg-amber-500', 'text-slate-950', 'font-bold', 'shadow-sm'];
  const inactiveClasses = ['bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300'];

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-skill-tab');

      // Update button visual & ARIA states
      tabBtns.forEach(b => {
        b.classList.remove(...activeClasses);
        b.classList.add(...inactiveClasses);
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add(...activeClasses);
      btn.classList.remove(...inactiveClasses);
      btn.setAttribute('aria-pressed', 'true');

      // Filter skill items
      skillCards.forEach(card => {
        const cat = card.getAttribute('data-skill-cat');
        if (targetCategory === 'all' || cat === targetCategory) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Project Filter & Detail Modal
   ========================================================================== */
const projectData = {
  evoting: {
    title: "Sistem Informasi E-Voting Mahasiswa Berbasis Laravel",
    category: "Web & Sistem Informasi",
    publisher: "BEM Politeknik LP3I Padang",
    image: "image/website.webp",
    description: "Implementasi dan kustomisasi platform pemungutan suara elektronik mahasiswa yang transparan, aman, dan real-time. Dilengkapi autentikasi token satu kali pakai (one-time token) untuk menjamin pemilu bebas manipulasi serta menghemat biaya logistik kertas kampus secara signifikan.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap", "phpMyAdmin"],
    impact: "Berhasil digunakan pada pemilihan presiden mahasiswa Politeknik LP3I Padang untuk rekapitulasi suara digital secara langsung dan terpercaya."
  },
  buku: {
    title: "Penulisan Buku Karya Mandiri: 'Siapa Aku'",
    category: "Publikasi & Literasi",
    publisher: "Pustaka Riyadz",
    image: "image/buku.webp",
    description: "Buku karya otentik berjudul 'Siapa Aku' yang ditulis secara mandiri dan resmi diterbitkan oleh penerbit Pustaka Riyadz. Menjelajahi refleksi diri, filosofi hidup generasi muda, dan motivasi dalam menempuh perjalanan pendidikan serta teknologi.",
    tech: ["Penulisan Mandiri", "Literasi Digital", "Pustaka Riyadz", "ISBN Terdaftar"],
    impact: "Terdokumentasi secara resmi ber-ISBN nasional, melatih kemampuan komunikasi strategis dan penyusunan struktur narasi yang sistematis."
  },
  design: {
    title: "Desain Identitas Visual, Logo & Grafis Digital",
    category: "Desain & Logo",
    publisher: "Klien & Proyek Personal",
    image: "image/design.webp",
    description: "Koleksi perancangan identitas visual, logo instansi, branding UMKM, dan materi poster promosi digital. Berfokus pada perpaduan estetika modern, prinsip proporsi geometris, dan keterbacaan tinggi di berbagai media cetak maupun layar digital.",
    tech: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Vector Design"],
    impact: "Membantu UMKM dan lembaga mendapatkan identitas brand yang kredibel, konsisten, dan mudah diingat konsumen."
  }
};

function initProjectSystem() {
  // 1. Filter tabs
  const projectFilterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('[data-project-card]');

  const activeClasses = ['bg-amber-500', 'text-slate-950', 'font-bold', 'shadow-sm'];
  const inactiveClasses = ['bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300'];

  if (projectFilterBtns.length) {
    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-project-filter');

        projectFilterBtns.forEach(b => {
          b.classList.remove(...activeClasses);
          b.classList.add(...inactiveClasses);
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add(...activeClasses);
        btn.classList.remove(...inactiveClasses);
        btn.setAttribute('aria-pressed', 'true');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-project-card');
          if (filterVal === 'all' || cardCat === filterVal) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. Modal setup
  const modal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const detailBtns = document.querySelectorAll('[data-project-key]');
  let lastActiveElement = null;

  if (!modal) return;

  function openProjectModal(key, triggerBtn) {
    const data = projectData[key];
    if (!data) return;

    lastActiveElement = triggerBtn || document.activeElement;

    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalPublisher = document.getElementById('modalPublisher');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');
    const modalImpact = document.getElementById('modalImpact');
    const techContainer = document.getElementById('modalTech');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalPublisher) modalPublisher.textContent = data.publisher;
    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
    }
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalImpact) modalImpact.textContent = data.impact;

    if (techContainer) {
      techContainer.innerHTML = '';
      data.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold rounded-md font-mono';
        tag.textContent = t;
        techContainer.appendChild(tag);
      });
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (modalCloseBtn) {
      setTimeout(() => modalCloseBtn.focus(), 50);
    }
  }

  function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project-key');
      openProjectModal(key, btn);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

/* ==========================================================================
   6. Copy to Clipboard Buttons
   ========================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-target');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="bi bi-check2-circle text-emerald-500 me-1"></i> Tersalin!';
        btn.classList.add('border-emerald-500', 'text-emerald-500');

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('border-emerald-500', 'text-emerald-500');
        }, 2200);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  });
}

/* ==========================================================================
   7. Navbar Scroll State & Scrollspy (60fps requestAnimationFrame)
   ========================================================================== */
function initScrollEffects() {
  const nav = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  let ticking = false;

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Navbar shadow on scroll
    if (nav) {
      if (scrollY > 50) {
        nav.classList.add('scrolled', 'shadow-md');
      } else {
        nav.classList.remove('scrolled', 'shadow-md');
      }
    }

    // Scrollspy highlight
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('text-amber-500', 'dark:text-amber-400', 'font-bold');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        link.classList.remove('text-amber-500', 'dark:text-amber-400', 'font-bold');
        link.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}