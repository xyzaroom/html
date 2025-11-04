// Mobile Nav
document.getElementById('mobileNavToggle').addEventListener('change', function() {
  document.body.style.overflow = this.checked ? 'hidden' : '';
});

// Header Scroll
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Back to Top
document.querySelectorAll('.back-to-top').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
