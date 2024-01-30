const userSection = document.getElementById('userSection');
const usernameSpan = document.getElementById('username');
const addUserBtn = document.getElementById('addUserBtn');
const deleteUserBtn = document.getElementById('deleteUserBtn');
const storedUsername = localStorage.getItem('userName');

if (storedUsername) { 
      userSection.style.display = 'block';
      usernameSpan.textContent = storedUsername;
      addUserBtn.style.display = 'none'; 

      
      deleteUserBtn.addEventListener('click', function() {
        localStorage.removeItem('userName'); 
        location.reload();
      });
    } else {
      userSection.style.display = 'none';
      addUserBtn.style.display = 'block';
    }

addUserBtn.addEventListener('click', function() {
      const newUsername = prompt('Nhập tên của bạn:');
      if (newUsername) {
        localStorage.setItem('userName', newUsername); 
        location.reload();
      }
});