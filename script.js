/**
 * Ira Zaky Elmar - Portfolio Interactive Scripts
 * Pure Vanilla JS, zero heavy dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark / Light Mode)
  initTheme();

  // 2. Typewriter Effect
  initTypewriter();

  // 3. Profile Image Interaction
  initProfileImageHover();

  // 4. Mobile Navigation Drawer
  initMobileNav();

  // 5. Skill Tabs Filter
  initSkillTabs();

  // 6. Project Filter & Modal
  initProjectSystem();

  // 7. Copy to Clipboard (Email & Phone)
  initClipboardButtons();

  // 8. Navbar Scroll State & Scrollspy
  initScrollEffects();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeUI(true);
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    updateThemeUI(false);
  } else {
    // Default to dark mode for developer portfolio aesthetic
    document.documentElement.classList.add('dark');
    updateThemeUI(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeUI(isDark);
    });
  }

  function updateThemeUI(isDark) {
    if (!themeIcon) return;
    if (isDark) {
      themeIcon.className = 'bi bi-sun-fill text-amber-400 text-lg';
      if (themeText) themeText.textContent = 'Mode Terang';
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill text-slate-700 text-lg';
      if (themeText) themeText.textContent = 'Mode Gelap';
    }
  }
}

/* ==========================================================================
   2. Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const typeElement = document.getElementById('typewriterText');
  if (!typeElement) return;

  const roles = [
    "Full-Stack Web Developer (PHP & Laravel)",
    "Web Developer (PHP, Laravel & MySQL)",
    "Konsultasi & Bimbingan Web IT",
    "UI/UX & Creative Logo Designer",
    "Ketua UKM Relawan TIK LP3I Padang"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2200;
  const pauseStart = 400;

  function tick() {
    const current = roles[roleIndex];

    if (isDeleting) {
      typeElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(tick, pauseEnd);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(tick, pauseStart);
    } else {
      setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  tick();
}

/* ==========================================================================
   3. Profile Image Interaction
   ========================================================================== */
function initProfileImageHover() {
  const img = document.getElementById('heroProfileImg');
  if (!img) return;

  const originalSrc = 'image/profil.webp';
  const alternateSrc = 'image/profil2.webp';

  // Preload alternate image
  const preloadImg = new Image();
  preloadImg.src = alternateSrc;

  img.addEventListener('mouseenter', () => {
    img.src = alternateSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });

  // Touch support for mobile devices
  img.addEventListener('click', () => {
    img.src = img.src.includes('profil2') ? originalSrc : alternateSrc;
  });
}

/* ==========================================================================
   4. Mobile Navigation Drawer
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
    toggleBtn.innerHTML = '<i class="bi bi-x-lg text-2xl text-amber-500"></i>';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    drawer.classList.add('closed');
    toggleBtn.setAttribute('aria-expanded', 'false');
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
    }
  });
}

/* ==========================================================================
   5. Skill Tabs Filter
   ========================================================================== */
function initSkillTabs() {
  const tabBtns = document.querySelectorAll('[data-skill-tab]');
  const skillCards = document.querySelectorAll('[data-skill-cat]');

  if (!tabBtns.length || !skillCards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-skill-tab');

      // Update button active styling
      tabBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-900', 'font-bold', 'shadow-md');
        b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });
      btn.classList.add('bg-amber-500', 'text-slate-900', 'font-bold', 'shadow-md');
      btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

      // Filter cards
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
   6. Project Filter & Detail Modal
   ========================================================================== */
const projectData = {
  buku: {
    title: "Penulisan Buku Karya Mandiri: 'Siapa Aku'",
    category: "Publikasi & Literasi",
    publisher: "Pustaka Riyadz",
    image: "image/buku.webp",
    description: "Buku karya otentik berjudul 'Siapa Aku' yang ditulis secara mandiri dan resmi diterbitkan oleh penerbit Pustaka Riyadz. Menjelajahi refleksi diri, filosofi hidup generasi muda, dan motivasi dalam menempuh perjalanan pendidikan serta teknologi.",
    tech: ["Penulisan Kreatif", "Literasi Digital", "Pustaka Riyadz", "ISBN Terdaftar"],
    impact: "Terdokumentasi secara resmi ber-ISBN nasional, melatih kemampuan komunikasi strategis dan penyusunan struktur narasi yang sistematis."
  },
  evoting: {
    title: "Sistem Informasi E-Voting Mahasiswa Berbasis Laravel",
    category: "Web & Sistem Informasi",
    publisher: "BEM Politeknik LP3I Padang",
    image: "image/website.webp",
    description: "Implementasi dan kustomisasi platform pemungutan suara elektronik mahasiswa yang transparan, aman, dan real-time. Dilengkapi autentikasi token satu kali pakai (one-time token) untuk menjamin pemilu bebas manipulasi serta menghemat biaya logistik kertas kampus secara signifikan.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap", "phpMyAdmin"],
    impact: "Berhasil digunakan pada pemilihan presiden mahasiswa Politeknik LP3I Padang untuk rekapitulasi suara digital."
  },
  design: {
    title: "Desain Identitas Visual, Logo & Grafis Digital",
    category: "Desain & Logo",
    publisher: "Klien & Proyek Personal",
    image: "image/design.webp",
    description: "Koleksi perancangan identitas visual, logo instansi, branding UMKM, dan materi poster promosi digital. Berfokus pada perpaduan estetika modern, prinsip proporsi geometris, dan keterbacaan tinggi di berbagai media (cetak maupun layar).",
    tech: ["Figma", "Canva", "Adobe Photoshop", "Adobe Illustrator", "Vector Design"],
    impact: "Membantu UMKM dan lembaga mendapatkan identitas brand yang kredibel, konsisten, dan mudah diingat konsumen."
  },
  akademik: {
    title: "Bimbingan Teknis Sistem Informasi & Web",
    category: "Akademik & Konsultasi",
    publisher: "Proyek Kolaborasi",
    image: "image/website.webp",
    description: "Layanan konsultasi teknis dan bimbingan logika pemrograman untuk mahasiswa rumpun IT (Manajemen Informatika, Sistem Informasi). Meliputi perancangan ERD, query basis data MySQL, hingga pendampingan modul aplikasi web berbasis PHP dan Laravel.",
    tech: ["PHP Native", "Laravel", "CodeIgniter", "MySQL", "Analisis APSI", "Dokumentasi Alur"],
    impact: "Mendampingi mahasiswa memahami alur koding dan logika sistem untuk persiapan tugas akhir."
  }
};

function initProjectSystem() {
  // Filter tabs
  const projectFilterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('[data-project-card]');

  if (projectFilterBtns.length) {
    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-project-filter');

        projectFilterBtns.forEach(b => {
          b.classList.remove('bg-amber-500', 'text-slate-900', 'font-bold');
          b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        });
        btn.classList.add('bg-amber-500', 'text-slate-900', 'font-bold');
        btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

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

  // Modal setup
  const modal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const detailBtns = document.querySelectorAll('[data-project-key]');

  if (!modal) return;

  function openProjectModal(key) {
    const data = projectData[key];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalPublisher').textContent = data.publisher;
    document.getElementById('modalImg').src = data.image;
    document.getElementById('modalImg').alt = data.title;
    document.getElementById('modalDesc').textContent = data.description;
    document.getElementById('modalImpact').textContent = data.impact;

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold rounded-md';
      tag.textContent = t;
      techContainer.appendChild(tag);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project-key');
      openProjectModal(key);
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
   7. Copy to Clipboard Buttons
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
   8. Navbar Scroll State & Scrollspy
   ========================================================================== */
function initScrollEffects() {
  const nav = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

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
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-amber-500', 'font-bold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-amber-500', 'font-bold');
      }
    });
  });
}