const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const signUpMessage = document.getElementById('signup-message');
const signInMessage = document.getElementById('signin-message');

const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Toggle Sign Up/Sign In Forms
loginButton.addEventListener('click', () => {
  document.getElementById('container').classList.remove('active');
});

registerButton.addEventListener('click', () => {
  document.getElementById('container').classList.add('active');
});

// Sign Up Form Submission (Simulated)
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Basic Validation
  if (!name || !email || !phone || !password || !confirmPassword) {
    signUpMessage.textContent = 'Please fill in all required fields.';
    return;
  }

  if (password !== confirmPassword) {
    signUpMessage.textContent = 'Passwords do not match.';
    return;
  }

  // Simulated successful signup (replace with actual logic)
  signUpMessage.textContent = 'Sign Up Successful! (Simulated)';
  signUpForm.reset(); // Clear form after successful signup (simulated)
});

// Sign In Form Submission (Simulated)
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  // Basic Validation
  if (!email || !password) {
    signInMessage.textContent = 'Please enter your email and password.';
    return;
  }

  // Simulated successful signin (replace with actual logic)
  signInMessage.textContent = 'Sign In Successful! (Simulated)';
  // Redirect to another page or display success message (simulated)
});
