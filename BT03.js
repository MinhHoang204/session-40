function deletePlayer() {
    const playerId = document.getElementById('playerId').value;
    if (playerId) {
      if (localStorage.getItem(playerId)) {
        localStorage.removeItem(playerId);
        const playerList = document.getElementById('playerList');
        const playerItem = playerList.querySelector(`li[data-id="${playerId}"]`);
        if (playerItem) {
          playerList.removeChild(playerItem);
        }
        document.getElementById('playerId').value = '';
      } else {
        alert('Không tìm thấy cầu thủ có id này!');
      }
    } else {
      alert('Vui lòng nhập id cầu thủ cần xóa!');
    }
}

window.onload = function() {
    const playerList = document.getElementById('playerList');
    for (let i = 0; i < localStorage.length; i++) {
      const playerId = localStorage.key(i);
      const playerName = localStorage.getItem(playerId);
      const listItem = document.createElement('li');
      listItem.textContent = playerName;
      listItem.setAttribute('data-id', playerId);
      playerList.appendChild(listItem);
    }
};