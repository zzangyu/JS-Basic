const h1 = document.querySelector(".hi h1");

function handleTitleClick() {
    const active = "active"
    const className = h1.classList;
    if(className.contains(active)) {
        className.remove(active);
    } else {
        className.add(active);
    }

}
function handleTitleClick2() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick2);