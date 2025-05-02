document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registered successfully!');
    window.location.href = 'index.html';
  });
  
  document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // if (storedUser && storedUser.email === email && storedUser.password === password) {
    //   alert('Login successful!');
      // Redirect to dashboard or home
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'booklist.html';
      }
      
     else {
      alert('Invalid credentials!');
    }
  });