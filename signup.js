function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  let users = JSON.parse(localStorage.getItem('joy_users') || '[]');

  if (users.some(u => u.email === email)) {
    alert("Email already registered.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('joy_users', JSON.stringify(users));
  alert("Signup successful! Please login.");
  window.location.href = 'login.html';
}
