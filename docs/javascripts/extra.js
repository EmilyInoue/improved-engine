// Extra JavaScript for improved-engine blog

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Contact form validation and handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    // Add error message containers
    const fields = ['name', 'email', 'message'];
    fields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field && !document.getElementById(`${fieldId}-error`)) {
        const errorSpan = document.createElement('span');
        errorSpan.id = `${fieldId}-error`;
        errorSpan.className = 'error-message';
        errorSpan.setAttribute('role', 'alert');
        errorSpan.style.color = 'var(--gradient-accent)';
        errorSpan.style.fontSize = '0.9rem';
        errorSpan.style.display = 'none';
        field.parentNode.appendChild(errorSpan);
      }
    });
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Clear previous errors
      fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(`${fieldId}-error`);
        if (field) {
          field.removeAttribute('aria-invalid');
          field.removeAttribute('aria-describedby');
        }
        if (errorSpan) {
          errorSpan.style.display = 'none';
          errorSpan.textContent = '';
        }
      });
      
      let isValid = true;
      let firstError = null;
      
      // Validate name
      const name = document.getElementById('name');
      if (name && name.value.trim() === '') {
        const errorSpan = document.getElementById('name-error');
        errorSpan.textContent = 'Please enter your name';
        errorSpan.style.display = 'block';
        name.setAttribute('aria-invalid', 'true');
        name.setAttribute('aria-describedby', 'name-error');
        isValid = false;
        if (!firstError) firstError = name;
      }
      
      // Validate email
      const email = document.getElementById('email');
      if (email) {
        if (email.value.trim() === '') {
          const errorSpan = document.getElementById('email-error');
          errorSpan.textContent = 'Please enter your email';
          errorSpan.style.display = 'block';
          email.setAttribute('aria-invalid', 'true');
          email.setAttribute('aria-describedby', 'email-error');
          isValid = false;
          if (!firstError) firstError = email;
        } else {
          // Use HTML5 validation
          if (!email.validity.valid) {
            const errorSpan = document.getElementById('email-error');
            errorSpan.textContent = 'Please enter a valid email address';
            errorSpan.style.display = 'block';
            email.setAttribute('aria-invalid', 'true');
            email.setAttribute('aria-describedby', 'email-error');
            isValid = false;
            if (!firstError) firstError = email;
          }
        }
      }
      
      // Validate message
      const message = document.getElementById('message');
      if (message && message.value.trim() === '') {
        const errorSpan = document.getElementById('message-error');
        errorSpan.textContent = 'Please enter a message';
        errorSpan.style.display = 'block';
        message.setAttribute('aria-invalid', 'true');
        message.setAttribute('aria-describedby', 'message-error');
        isValid = false;
        if (!firstError) firstError = message;
      }
      
      if (!isValid && firstError) {
        firstError.focus();
        return;
      }
      
      if (isValid) {
        alert('Thank you for your message! This is a demo form - in production, this would be submitted to a server.');
        contactForm.reset();
        // Clear error states
        fields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (field) {
            field.removeAttribute('aria-invalid');
            field.removeAttribute('aria-describedby');
          }
        });
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
