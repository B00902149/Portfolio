// ── SCREEN SHOWCASE TABS ──
const BASE = 'https://raw.githubusercontent.com/B00902149/FFFApp/main/screenshots/';
const tabs = document.querySelectorAll('.stab');
const showcaseImg = document.getElementById('showcaseImg');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Fade image
    const screen = tab.dataset.screen;
    const img = tab.dataset.img;

    showcaseImg.classList.add('fading');
    setTimeout(() => {
      showcaseImg.src = BASE + img;
      showcaseImg.alt = screen;
      showcaseImg.classList.remove('fading');
    }, 200);

    // Update info panel
    document.querySelectorAll('.sinfo').forEach(p => p.classList.remove('active'));
    const panel = document.querySelector(`.sinfo[data-screen="${screen}"]`);
    if (panel) panel.classList.add('active');
  });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

// ── LIGHTBOX ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.fff-ss-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

document.getElementById('lightboxClose').addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

// ── NAV HIGHLIGHT ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--white)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));