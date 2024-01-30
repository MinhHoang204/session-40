function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
      const playerId = Math.random().toString(36).substr(2, 9);
      localStorage.setItem(playerId, playerName);
      const playerList = document.getElementById('playerList');
      const listItem = document.createElement('li');
      listItem.textContent = playerName;
      playerList.appendChild(listItem);
      document.getElementById('playerName').value = '';
    } else {
      alert('Vui lòng nhập tên cầu thủ!');
    }
}

window.onload = function() {
    const playerList = document.getElementById('playerList');
    for (let i = 0; i < localStorage.length; i++) {
      const playerId = localStorage.key(i);
      const playerName = localStorage.getItem(playerId);
      const listItem = document.createElement('li');
      listItem.textContent = playerName;
      playerList.appendChild(listItem);
    }
};