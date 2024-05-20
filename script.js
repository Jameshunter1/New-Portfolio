// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple Contact Form Validation
  document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.querySelector('#contact form input[type="email"]').value;
    if (email === '') {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for your message.');
    }
  });
  