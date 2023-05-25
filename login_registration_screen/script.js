// Dummy data for demonstration purposes
const users = [
    { username: 'john', password: 'password1', name: 'John Doe' },
    { username: 'jane', password: 'password2', name: 'Jane Smith' }
  ];
  
  // Check if the user is already logged in
  if (localStorage.getItem('loggedInUser')) {
    showDashboard();
  }
  
  function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
      showError('Username is already taken');
      return;
    }
  
    // Add the new user
    users.push({ username, password });
    showSuccess('Registration successful! Please login.');
  }
  
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Find the user with the given username and password
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Save the logged in user in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      showDashboard();
    } else {
      showError('Invalid username or password');
    }
  }
  
  function logout() {
    // Remove the logged in user from local storage
    localStorage.removeItem('loggedInUser');
    showLoginForm();
  }
  
  function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
  }
  
  function showDashboard() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    document.getElementById('username').textContent = user.name;
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  }
  
  function showError(message) {
    const errorElement = document.getElementById('login-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function showSuccess(message) {
    const successElement = document.getElementById('register-success');
    successElement.textContent = message;
    successElement.style.display = 'block';
  }
  