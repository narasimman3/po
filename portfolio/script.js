document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-icons-left li a');
  const backToTop = document.getElementById('back-to-top');
  const backToHome = document.getElementById('back-to-home');

  /* Fade-in Sections */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  /* Back to Top Visibility & Click */
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Smooth Scroll for Navbar Links (Centered) */
  function scrollToSection(target) {
    const targetRect = target.getBoundingClientRect();
    const targetTop = window.pageYOffset + targetRect.top;
    const targetHeight = targetRect.height;
    const viewportHeight = window.innerHeight;
    const scrollToY = targetTop - (viewportHeight / 2) + (targetHeight / 2);
    window.scrollTo({ top: scrollToY, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if(href === '#home'){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if(target) scrollToSection(target);
      }
    });
  });

  /* Back to Home Button */
  if(backToHome){
    backToHome.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Highlight Active Navbar Link + Neon Glow */
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active', 'neon-glow'));
        const activeLink = document.querySelector(`.nav-icons-left li a[href="#${entry.target.id}"]`);
        if(activeLink) activeLink.classList.add('active', 'neon-glow');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => sectionObserver.observe(section));
});
