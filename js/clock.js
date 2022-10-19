const clock = document.querySelector("#clock");

function padString(number) {
  return String(number).padStart(2, "0");
}
function paintClock(h, m, s) {
  if (h > 12) {
    clock.innerText = `PM ${padString(h - 12)}:${padString(m)}:${padString(s)}`;
  } else {
    clock.innerText = `AM ${padString(h)}:${padString(m)}:${padString(s)}`;
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
