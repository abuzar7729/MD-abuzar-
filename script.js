// Scroll reveal animation
window.addEventListener('scroll', revealSections);

function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 150;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Animate hero image on load
window.addEventListener('load', () => {
  document.querySelector('.hero img').classList.add('zoom-in');
});
