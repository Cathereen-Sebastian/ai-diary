// Handle login form submission
// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Check if fields are empty
    if (!email || !password) {
      errorMessage.textContent = "Please fill in both fields.";
      return;
    }
  
    // Validate credentials against stored values in localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    if (email === storedEmail && password === storedPassword) {
      errorMessage.textContent = '';
  
      // Save login state in localStorage
      localStorage.setItem('isLoggedIn', 'true');
  
      // Redirect to home page
      window.location.href = 'home.html';  // Redirect to the home page
    } else {
      errorMessage.textContent = 'Invalid email or password.';
    }
  });
  
  
  // Handle sign-up form submission
  document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const signUpErrorMessage = document.getElementById('signUpErrorMessage');
  
    // Check if fields are empty
    if (!newEmail || !newPassword) {
      signUpErrorMessage.textContent = "Please fill in both fields.";
      return;
    }
  
    // Save credentials in localStorage
    localStorage.setItem("userEmail", newEmail);
    localStorage.setItem("userPassword", newPassword);
    signUpErrorMessage.textContent = '';
  
    alert('Sign-up successful! You can now log in.');
    toggleToLogin(); // Switch to login page after successful sign-up
  });
  
  // Switch to Login page view
  function toggleToLogin() {
    document.getElementById('signUpFormDiv').style.display = 'none';
    document.getElementById('loginFormDiv').style.display = 'block';
    document.getElementById('toSignUp').style.display = 'block';
    document.getElementById('toLogin').style.display = 'none';
  }
  
  // Switch to Sign-Up page view
  function toggleToSignUp() {
    document.getElementById('signUpFormDiv').style.display = 'block';
    document.getElementById('loginFormDiv').style.display = 'none';
    document.getElementById('toSignUp').style.display = 'none';
    document.getElementById('toLogin').style.display = 'block';
  }
  
  // Toggle between Login and Sign-Up views
  document.getElementById('toSignUp').addEventListener('click', function () {
    toggleToSignUp();
  });
  
  document.getElementById('toLogin').addEventListener('click', function () {
    toggleToLogin();
  });
  
  // Example: Pre-fill the localStorage with a user for testing
  // localStorage.setItem("userEmail", "user@example.com");
  // localStorage.setItem("userPassword", "password123");
  