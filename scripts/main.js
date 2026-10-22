// scripts/main.js

// Toggle password visibility on the login page
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      toggleBtn.textContent = type === 'password' ? 'Show' : 'Hide';
    });
  }

  // Simple navigation active state
  const navLinks = document.querySelectorAll('header nav ul li a');
  const currentPath = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('font-bold', 'text-x');
    }
    link.addEventListener('click', () => {
      // Remove active from all and set on clicked
      navLinks.forEach(l => l.classList.remove('font-bold', 'text-x'));
      link.classList.add('font-bold', 'text-x');
    });
  });

  // Loading overlay demo (optional)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const overlay = document.getElementById('loadingOverlay');
      if (overlay) {
        overlay.classList.remove('hidden');
        // Simulate async login
        setTimeout(() => {
          overlay.classList.add('fade-out');
          setTimeout(() => overlay.classList.add('hidden'), 500);
          // For demo, redirect to dashboard
          window.location.href = 'dashboard.html';
        }, 1200);
      }
    });
  }
});
