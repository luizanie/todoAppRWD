const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('.number');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const date = document.querySelector('.date');
const items = document.querySelector('.elem');

//dodanie aktualnej daty, dnia
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

//odejmowanie zadan
const removeTask = (e) => {
    e.target.parentNode.parentNode.remove();
    taskNumber.textContent = listItems.length;
    ChangeNumber();
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

    task.querySelector('span').addEventListener('click', removeTask);
}


form.addEventListener('submit', addTask)