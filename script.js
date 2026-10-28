// Personalise the text and links in this file. Replace image files in /images for the public website.
const PROFILE = {
  name: "Sahinur Islam",
  bio: "I love exploring ideas, learning new things, and turning inspiration into real projects. This is my corner of the internet — a place to share my journey, my work, and the things that make me who I am.",
  email: "hello@example.com",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
  whatsapp: "https://wa.me/91XXXXXXXXXX"
};

document.querySelectorAll('[data-profile="name"]').forEach(el => el.textContent = PROFILE.name);
document.querySelectorAll('[data-profile="bio"]').forEach(el => el.textContent = PROFILE.bio);
document.querySelector('#emailLink').href = `mailto:${PROFILE.email}`;
document.querySelectorAll('[data-social]').forEach(el => {
  const url = PROFILE[el.dataset.social];
  if (url) el.href = url;
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Hide placeholders only when the image file exists and loads successfully.
function setupImage(img, placeholder) {
  if (!img || !placeholder) return;
  img.addEventListener('load', () => {
    img.classList.add('loaded');
    placeholder.style.display = 'none';
  });
  img.addEventListener('error', () => {
    img.classList.remove('loaded');
    placeholder.style.display = 'flex';
  });
  if (img.complete && img.naturalWidth > 0) {
    img.classList.add('loaded');
    placeholder.style.display = 'none';
  }
}
setupImage(document.querySelector('#heroPhoto'), document.querySelector('#photoPlaceholder'));
setupImage(document.querySelector('#coverPhoto'), document.querySelector('#coverPlaceholder'));
document.querySelectorAll('.gallery-card').forEach(card => {
  const img = card.querySelector('img');
  const placeholder = card.querySelector('.gallery-placeholder');
  setupImage(img, placeholder);
});

// Cinematic intro loader.
document.body.classList.add('loading');
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('#loader').classList.add('done');
    document.body.classList.remove('loading');
  }, 650);
});
setTimeout(() => {
  document.querySelector('#loader')?.classList.add('done');
  document.body.classList.remove('loading');
}, 2400);

// Reveal elements as they enter the viewport.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Small, restrained parallax on desktop only.
const heroPhoto = document.querySelector('#heroPhoto');
let rafPending = false;
window.addEventListener('scroll', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 761 || rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    const y = Math.min(window.scrollY * 0.00018, 0.07);
    if (heroPhoto) heroPhoto.style.transform = `scale(${1.08 + y}) translateY(${window.scrollY * 0.025}px)`;
    rafPending = false;
  });
}, { passive: true });

// Mobile navigation.
const menuToggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');
menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
