const quotesContainer = document.querySelector("#quotes-container");
const quote = quotesContainer.querySelector("p:first-child");
const author = quotesContainer.querySelector("p:last-child");

function init() {
  const quotesIdx = randomIdx(quotes);
  Math.floor(Math.random() * quotes.length);
  const rndQu = quotes[quotesIdx];
  quote.innerText = `"${rndQu.quote}"`;
  author.innerText = `-${rndQu.author}-`;
}

init();
setInterval(init, SET_INTERVAL);
