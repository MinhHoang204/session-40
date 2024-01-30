const todoList = document.getElementById('todoList');
const addItemBtn = document.getElementById('addItemBtn');
const newItemInput = document.getElementById('newItemInput');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach(function(todo, index) {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
          todos.splice(index, 1);
          localStorage.setItem('todos', JSON.stringify(todos));
          renderTodos();
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
      });
}

addItemBtn.addEventListener('click', function() {
      const newItem = newItemInput.value;
      if (newItem !== '') {
        todos.push(newItem);
        localStorage.setItem('todos', JSON.stringify(todos));
        newItemInput.value = '';
        renderTodos();
      } else {
        alert('Vui lòng nhập công việc cần làm!');
      }
});

window.onload = function() {
      renderTodos();
};