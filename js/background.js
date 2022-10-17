const imgList = ["0.jpg", "1.jpg", "2.jpg"];

const bgImg = document.createElement("img");

const imgIdx = randomIdx(imgList);

bgImg.src = `img/${imgList[imgIdx]}`;

document.body.appendChild(bgImg);
