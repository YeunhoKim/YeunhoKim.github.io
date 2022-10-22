const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const clockContainer = document.querySelector("#clock-container");
const clockType = document.querySelector("#clock-type");
//const greeting = document.querySelector("#greeting");

const HIIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function paintUsername(username) {
  const date = new Date();
  const h = date.getHours();

  greeting.innerText =
    h < 12
      ? `Good morning! ${username}`
      : h < 17
      ? `Good afternoon! ${username}`
      : `Good evening! ${username}`;
  greeting.classList.remove(HIIDDEN_CALSSNAME);
  clock.classList.remove(HIIDDEN_CALSSNAME);
  todoForm.classList.remove(HIIDDEN_CALSSNAME);
  weatherHeader.classList.remove(HIIDDEN_CALSSNAME);
  quotesContainer.classList.remove(HIIDDEN_CALSSNAME);
  todoList.classList.remove(HIIDDEN_CALSSNAME);
  clockContainer.classList.remove(HIIDDEN_CALSSNAME);
  clockType.classList.remove(HIIDDEN_CALSSNAME);
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
