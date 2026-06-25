// ===========================================================
// Footer year
// ===========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ===========================================================
// Nav: add background/border once scrolled past hero
// ===========================================================
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===========================================================
// Mobile menu toggle
// ===========================================================
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('menu-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after tapping a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===========================================================
// Scroll cue: click to jump to About
// ===========================================================
const scrollCue = document.getElementById('scrollCue');
if (scrollCue) {
  scrollCue.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===========================================================
// Reveal projects on scroll
// ===========================================================
const projects = document.querySelectorAll('.project');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  projects.forEach((project) => observer.observe(project));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  projects.forEach((project) => project.classList.add('in-view'));
}

// ===========================================================
// Featured gallery lightbox
// ===========================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const galleryFrames = document.querySelectorAll('.frame');

if (lightbox && lightboxImg && lightboxCaption && lightboxClose && galleryFrames.length) {
  const openLightbox = (img, title, meta) => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = `${title} — ${meta}`;
    lightbox.setAttribute('aria-hidden', 'false');
  };

  const closeLightbox = () => lightbox.setAttribute('aria-hidden', 'true');

  galleryFrames.forEach((frame) => {
    frame.addEventListener('click', () => {
      const img = frame.querySelector('img');
      const title = frame.querySelector('.plaque-title')?.textContent || '';
      const meta = frame.querySelector('.plaque-meta')?.textContent || '';
      if (img) openLightbox(img, title, meta);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}