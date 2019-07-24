const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('.number');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const date = document.querySelector('.date');
const items = document.querySelector('.elem');

var data = (localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
}



//dodanie aktualnej daty
let today = new Date().toLocaleDateString();
date.innerText = `${today}`;

//odmiana słowa "zadanie" ze wzgledu na ilosc dodanych zadan
const ChangeNumber = () => {
    if (listItems.length === 0) {
        items.textContent = "zadań"
    } else if (listItems.length === 1) {
        items.textContent = "zadanie"
    } else {
        items.textContent = "zadania"
    }
}


//dodawanie do LocalStorage
function dataObjectUpdated() {
    localStorage.setItem("todoList", JSON.stringify(data));
}

function renderTodoList() {
    if (!data.todo.length) return;
    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addTask(value);
    }
}

//odejmowanie zadan
const removeTask = (e) => {
    e.target.parentNode.parentNode.remove();
    taskNumber.textContent = listItems.length;
    ChangeNumber();

    data.todo.splice(data.todo.indexOf(removeTask), 1);
    dataObjectUpdated();

}

//dodawanie zadan
const addTask = (e) => {
    listItems;
    e.preventDefault()
    const titleTask = input.value;
    if (titleTask === "") return alert('Dodaj zadanie ;)');

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask;
    var span = document.createElement('span')
    var icon = document.createElement('i');

    icon.classList.add('fas', 'fa-trash-alt');
    span.appendChild(icon);

    ul.appendChild(task).append(span);
    input.value = "";
    taskNumber.innerText = listItems.length;
    ChangeNumber();

    data.todo.push(titleTask);

    task.querySelector('span').addEventListener('click', removeTask);
    dataObjectUpdated();

}

form.addEventListener('submit', addTask);

// renderTodoList();