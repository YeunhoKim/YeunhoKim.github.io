const body = document.body;
const imgName = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];
const fileExtension = ".jpeg";
let imgList = [];
imgName.forEach((number) => imgList.push(`${String(number)}${fileExtension}`));

//console.log(imgList);

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
