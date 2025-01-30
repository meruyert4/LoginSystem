
// Elements
const actionSelection = document.getElementById('actionSelection');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const passwordError = document.getElementById('passwordError');
const registerMessage = document.getElementById('registerMessage');
const loginMessage = document.getElementById('loginMessage');

// Initialize the page with only the selection buttons visible
actionSelection.style.display = 'block';
registerForm.style.display = 'none';
loginForm.style.display = 'none';

// Show the register form
showRegisterBtn.addEventListener('click', () => {
  actionSelection.style.display = 'none';
  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';
});

// Show the login form
showLoginBtn.addEventListener('click', () => {
  actionSelection.style.display = 'none';
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
});

// Navigate to login form from the register form
loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'flex';
});

// Navigate to register form from the login form
registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

// Handle registration form submission
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Collect form data
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate passwords match
  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match.";
    return;
  }

  // Send data to backend
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      registerMessage.textContent = "Registration successful. You can now log in.";
      passwordError.textContent = "";
      registerForm.reset();
    } else {
      const data = await response.json();
      registerMessage.textContent = `Error: ${data.message || 'Unable to register'}`;
    }
  } catch (error) {
    registerMessage.textContent = "Error: Unable to connect to the server.";
  }
});

// Handle login form submission
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  // Collect form data
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Send data to backend
  try {
    const response = await fetch('http://localhost:3000/api/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      loginMessage.textContent = `Welcome, ${data.username || 'User'}!`;
      loginForm.reset();
    } else {
      const data = await response.json();
      loginMessage.textContent = `Error: ${data.message || 'Invalid credentials'}`;
    }
  } catch (error) {
    loginMessage.textContent = "Error: Unable to connect to the server.";
  }
});
