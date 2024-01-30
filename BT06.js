document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      alert('Đăng nhập thành công!');
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
});