let personalInfo = JSON.parse(localStorage.getItem('personalInfo'));

if (!personalInfo) {
  personalInfo = {};
}

function savePersonalInfo() {
  const name = prompt('Nhập họ và tên:');
  const age = prompt('Nhập tuổi:');
  const email = prompt('Nhập email:');

  personalInfo = {
    name: name,
    age: age,
    email: email
  };

  localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
  displayPersonalInfo();
}

function displayPersonalInfo() {
  const infoContainer = document.getElementById('personalInfo');
  infoContainer.innerHTML = `
    <h2>Thông tin cá nhân:</h2>
    <p><strong>Họ và tên:</strong> ${personalInfo.name}</p>
    <p><strong>Tuổi:</strong> ${personalInfo.age}</p>
    <p><strong>Email:</strong> ${personalInfo.email}</p>
  `;
}

displayPersonalInfo();