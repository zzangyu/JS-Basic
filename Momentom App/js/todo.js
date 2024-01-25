const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteBtn(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    // 今後ユーザーがdelete buttonをクリックしたら実行されるElementのEventを登録する。
    button.addEventListener("click", deleteBtn);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 変数に値を入れたから初期化する。
    toDoInput.value = "";
    // localStorageにsetするときに使う配列に値を追加する。
    toDos.push(newTodo);
    // button追加, 作成した内容をlistに項目を追加する。
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
