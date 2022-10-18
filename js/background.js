const body = document.body;
const imgList = ["0.jpg", "1.jpg", "2.jpg"];

const bgImg = document.createElement("img");

const imgIdx = randomIdx(imgList);

function paintImage(number) {
  const image = new Image();
  image.src = `img/${imgList[number]}`;
  body.append(image);
}

function init() {
  paintImage(imgIdx);
}

bgImg.src = `img/${imgList[imgIdx]}`;

init();

//document.body.appendChild(bgImg);
