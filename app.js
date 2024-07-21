const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
});

function addTodo(todoText) {
    const li = document.createElement('li');
    li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-button">Delete</button>
        `;
    todoList.appendChild(li);

    li.querySelector('.delete-button').addEventListener('click', () => {
        li.remove();
    });

    li.addEventListener('click', () => {
        li.querySelector('span').classList.toggle('complete');
    });
}
