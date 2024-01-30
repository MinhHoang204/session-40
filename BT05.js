document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công!');
});
