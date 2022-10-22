const clock = document.querySelector("#clock");
const am = document.querySelector("#clock-type p:first-child");
const pm = document.querySelector("#clock-type p:last-child");

function padString(number) {
  return String(number).padStart(2, "0");
}
function paintClock(h, m, s) {
  if (h > 12) {
    clock.innerText = `${padString(h - 12)}:${padString(m)}:${padString(s)}`;
    pm.style.color = "white";
    am.style.opacity = "0.2";
  } else {
    clock.innerText = `${padString(h)}:${padString(m)}:${padString(s)}`;
    am.style.color = "white";
    pm.style.opacity = "0.2";
  }
}

function handleClock() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  paintClock(h, m, s);
}

handleClock();

setInterval(handleClock, 1000);
