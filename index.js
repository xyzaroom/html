// Extracted and combined JS from all pages

// Image Loader Bootstrap (from Squarespace)
if (window.ImageLoader) window.ImageLoader.bootstrap({}, document);

// Load Squarespace scripts (if needed, but for standalone, minimal JS)

// Form Submission (example for contact page)
function submitForm(form) {
  // Simulate form submission
  console.log('Form submitted');
  // In reality, use Fetch or XMLHttpRequest to post data
}

// Social Icons (no JS needed, pure CSS)

// Gallery Interactions (basic click handling)
document.querySelectorAll('.image-slide-anchor').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Gallery item clicked: ' + anchor.href);
    // Add lightbox or navigation logic if needed
  });
});

// Mobile Nav Toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
mobileNavToggle.addEventListener('change', () => {
  document.body.classList.toggle('nav-open', mobileNavToggle.checked);
});

// Back to Top
document.querySelector('.back-to-top a').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
