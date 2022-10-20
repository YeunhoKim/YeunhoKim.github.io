const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let todos = [];

function saveTodos(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  event.preventDefault();
  //console.log(event);
  const li = event.target.parentElement;
  //console.log(event);
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos(todos);
}

function paintTodo(newTodoObj) {
  const label = document.createElement("label");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("input");
  label.htmlFor = newTodoObj.id;
  btn.id = newTodoObj.id;
  //console.log(label);
  li.id = newTodoObj.id;
  btn.type = "checkbox";
  span.innerText = newTodoObj.text;

  li.appendChild(btn);
  li.appendChild(label);
  li.appendChild(span);
  todoList.appendChild(li);
  //console.dir(btn);
  label.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todos.push(newTodoObj);
  saveTodos(todos);
  paintTodo(newTodoObj);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach((todo) => paintTodo(todo));
}
