document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling for anchor links and padding
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const defaultHeaderOffset = 120;
  const contactHeaderOffset = 120;

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const headerOffset = targetId === 'contact' ? contactHeaderOffset : defaultHeaderOffset;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close the hamburger menu after clicking a link
        navLinks.classList.remove('active');
      }
    });
  });

  // Footer year fetch
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Accordion functionality
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      const content = item.querySelector('.accordion-content');
      content.style.display = expanded ? 'none' : 'block';
    });
  });

  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu after clicking a link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
