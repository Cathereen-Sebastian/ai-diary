// Home page logic
const accountIcon = document.getElementById("accountIcon");
const dropdown = document.getElementById("accountDropdown");

accountIcon.addEventListener("click", () => {
  const isVisible = dropdown.style.display === "block";
  dropdown.style.display = isVisible ? "none" : "block";
});

// Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
  if (!accountIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

// Optional: Hide dropdown when clicking outside
document.addEventListener("click", function(event) {
  if (!accountIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

window.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    const accountSettingsModal = document.getElementById('accountSettingsModal');
    const closeModal = document.getElementById('closeModal');
    const accountEmail = document.getElementById('accountEmail');
    const logoutButton = document.getElementById('logoutButton');
    const accountIcon = document.getElementById('accountIcon');
    const editSettingsButton = document.getElementById('editSettingsButton');
  
    if (isLoggedIn !== 'true') {
      // If not logged in, redirect to login page
      window.location.href = 'index.html';
    } else {
      // Display the user's email on the home page
      const userEmail = localStorage.getItem("userEmail");
      userEmailDisplay.textContent = userEmail;
      accountEmail.textContent = userEmail; // Show email in settings modal
    }
  
    // Log out functionality
    logoutButton.addEventListener('click', function () {
      localStorage.setItem('isLoggedIn', 'false'); // Clear login state
      window.location.href = 'index.html';  // Redirect to login page
    });
  
    // Account icon click (to show settings modal)
    accountIcon.addEventListener('click', function () {
      accountSettingsModal.style.display = 'block';
    });
  
    // Close the modal when the user clicks the close button
    closeModal.addEventListener('click', function () {
      accountSettingsModal.style.display = 'none';
    });
  
    // Optionally: Edit settings functionality (can expand with more features)
    editSettingsButton.addEventListener('click', function () {
      alert('Edit settings functionality goes here.');
    });
  
    // Close the modal if the user clicks outside the modal content
    window.addEventListener('click', function (event) {
      if (event.target === accountSettingsModal) {
        accountSettingsModal.style.display = 'none';
      }
    });
  });
  
