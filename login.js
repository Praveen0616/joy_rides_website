function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('joy_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert('Login successful!');
    localStorage.setItem('joy_logged_in', JSON.stringify(user));
    window.location.href = 'index.html';
	// After verifying user credentials
localStorage.setItem("isLoggedIn", "true");
window.location.href = "index.html";
  } else {
    alert('Invalid credentials.');
  }
}

// Google Sign-In callback
function handleGoogleLogin(response) {
  const user = {
    email: response.credential,
    name: "Google User"
  };
  localStorage.setItem('joy_logged_in', JSON.stringify(user));
  alert('Google Login successful!');
  // After verifying user credentials
localStorage.setItem("isLoggedIn", "true");
window.location.href = "index.html";
  window.location.href = 'index.html';
}

