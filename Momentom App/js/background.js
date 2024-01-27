const images = ["cat.jpg"];

const chosenImage = images[Math.floor((Math.random() * images.length))];

const bgImage = document.createElement("img");

// src設定
bgImage.src = `./img/${chosenImage}`;
// id設定
bgImage.id = "bgImg";
// bodyにimageタグ追加
document.body.appendChild(bgImage);