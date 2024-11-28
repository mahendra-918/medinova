// Select the toggle button and password input field
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

// Add click event listener to toggle visibility
togglePassword.addEventListener('click', () => {
  // Toggle the type attribute between "password" and "text"
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Change the button icon or text (optional)
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});
