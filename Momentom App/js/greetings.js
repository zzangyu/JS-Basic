const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingBox = document.querySelector("#greeting-box");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");
const toDoInputLoginCheck = document.querySelector("#todo-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // submitした後、ページが更新されるのを止める
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // ブラウザの機能：key, valueの形でブラウザに保存する。
    localStorage.setItem(USERNAME_KEY, username);
    // `${username}` ""더블쿼터中に変数を書ける。
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerHTML = `${username}さん`;
    greetingBox.classList.remove(HIDDEN_CLASSNAME);
    toDoInputLoginCheck.disabled = false;
    toDoInputLoginCheck.placeholder = "入力欄";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show the greeting
    paintGreetings(savedUsername);
}

// logout
function logoutSubmit(event) {
    event.preventDefault();
    let check = window.confirm("ログアウトするとすべての情報が削除されます。\nログアウトしますか?");
    if(!check) {
        return;
    }
    toDoInputLoginCheck.disabled = true;
    toDoInputLoginCheck.placeholder = "ログインしてください";
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greetingBox.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("toDos");
    loginInput.value = "";
    let todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
}   
function removeTodoList(parent, children) {
    children.forEach(element => {
        console.log(parent);
        console.log(children);
        console.log(element);
        parent.remove(element);
    });
}
logout.addEventListener("click", logoutSubmit);