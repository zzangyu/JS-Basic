const h1 = document.querySelector(".hi h1");

function handleTitleClick() {
    console.log("title was clicked!");
}
function handleMouseEnter() {
    h1.innerHTML = "Mouse is here!";
}
function handleMouseLeave() {
    h1.innerHTML = "Mouse is gone!";
}
// handleTitleClickメソッドはタイトルがクリックされた時だけ実行される。
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);