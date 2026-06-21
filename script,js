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