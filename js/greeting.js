const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
//const greeting = document.querySelector("#greeting");

const HIIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function paintUsername(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIIDDEN_CALSSNAME);
  clock.classList.remove(HIIDDEN_CALSSNAME);
  todoForm.classList.remove(HIIDDEN_CALSSNAME);
  weatherContainer.classList.remove(HIIDDEN_CALSSNAME);
  quotesContainer.classList.remove(HIIDDEN_CALSSNAME);
  todoList.classList.remove(HIIDDEN_CALSSNAME);
  loginForm.classList.add(HIIDDEN_CALSSNAME);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername !== null) {
  paintUsername(savedUsername);
}
