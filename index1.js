// Select the toggle button and password input field
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

// Add click event listener to toggle visibility
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Change icon (optional)
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});
