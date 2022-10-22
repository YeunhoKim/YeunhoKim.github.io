const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const weeks = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];
let todos = [];

function saveTodos(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  event.preventDefault();
  const li = event.path[2];
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos(todos);
}

function paintTodo(newTodoObj) {
  const label = document.createElement("label");
  const li = document.createElement("li");
  const spanTodo = document.createElement("span");
  const spanDate = document.createElement("span");
  const btn = document.createElement("input");
  const div = document.createElement("div");
  label.htmlFor = newTodoObj.id;
  btn.id = newTodoObj.id;
  li.id = newTodoObj.id;

  btn.type = "checkbox";
  spanTodo.innerText = newTodoObj.text;
  spanDate.innerText = newTodoObj.regDate;

  div.appendChild(btn);
  div.appendChild(label);
  div.appendChild(spanTodo);

  li.appendChild(div);
  li.appendChild(spanDate);
  todoList.appendChild(li);
  //console.dir(btn);
  label.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const date = new Date();
  const week = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();
  const todoDate = `${weeks[week]}. ${months[month]}. ${day}`;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
    regDate: todoDate,
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
