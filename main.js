const todoForm = document.querySelector('#to-do-form');
//reference the input field
const todoInput = document.querySelector('#todo-input');

//reference the unordered list
const todoList = document.querySelector('#todo-list');


todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //get the value of the input
    const newTodo = todoInput.value;

    //create a new li element
    const li = document.createElement('li');
    //add a class to the li element
    li.classList.add('list-items');
    //ADD LIST TYPE TO NUMBEER THE LIST
    li.style.listStyleType = "NUMBER";
    //add the newTodo value to the li element
    li.innerText = newTodo;
    //append the li element to the unordered list
    todoList.appendChild(li);
});