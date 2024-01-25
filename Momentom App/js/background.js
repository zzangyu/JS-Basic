const images = ["cat.jpg", "mountain.jpg", "murasaki.jpg"];

const chosenImage = images[Math.floor((Math.random() * images.length))];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;
bgImage.id = "bgImg";

document.body.appendChild(bgImage);