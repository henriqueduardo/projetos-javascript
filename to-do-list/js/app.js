const inputText = document.querySelector("[data-input='text']");
const todoList = document.querySelector("[data-todo='todo-list']"); // lista de tasks
let tasks = [] // array

function addTask() {
  const text = inputText.value;
  if (text !== "") {
    tasks.push({ text: text});
    inputText.value = "";
    renderTodo();
  }
}

function removeTask(index) {
  tasks.splice(index, 1); // remover o primeiro item do indice
  renderTodo();
}

function renderTodo() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li'); // nova tarefa item
    const taskText = document.createElement('span'); // tarefa texto
    taskText.textContent = task.text;
    const deleteButton = document.createElement('button'); // botão remover tarefa dentro da li
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => removeTask(index)); // um botão para cada li
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}

renderTodo();