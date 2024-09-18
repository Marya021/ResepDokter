document.addEventListener("DOMContentLoaded", function() {
  // Toggle menu on mobile
  const menuBar = document.getElementById('menu-bar');
  const navbar = document.querySelector('.navbar');
  
  menuBar.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });

  // Show or hide scroll-to-top button
  const scrollTopButton = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          scrollTopButton.style.display = 'block';
      } else {
          scrollTopButton.style.display = 'none';
      }
  });

  // Smooth scroll to top
  scrollTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
