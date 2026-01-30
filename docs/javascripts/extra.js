// Extra JavaScript for improved-engine blog

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Contact form validation and handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      let isValid = true;
      
      if (name && name.value.trim() === '') {
        alert('Please enter your name');
        isValid = false;
        name.focus();
        return;
      }
      
      if (email && email.value.trim() === '') {
        alert('Please enter your email');
        isValid = false;
        email.focus();
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        isValid = false;
        email.focus();
        return;
      }
      
      if (message && message.value.trim() === '') {
        alert('Please enter a message');
        isValid = false;
        message.focus();
        return;
      }
      
      if (isValid) {
        alert('Thank you for your message! This is a demo form - in production, this would be submitted to a server.');
        contactForm.reset();
      }
    });
  }
  
  // Add ARIA labels dynamically where needed
  const navLinks = document.querySelectorAll('.md-nav__link');
  navLinks.forEach(link => {
    if (!link.hasAttribute('aria-label')) {
      link.setAttribute('aria-label', link.textContent.trim());
    }
  });
});
