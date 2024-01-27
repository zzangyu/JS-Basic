const clock = document.querySelector("div#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${minutes}:${seconds}`;
}

// 二つのargumentが必要（変数、時間）
// setInterval(sayHello, 5000);

// 追加した理由：最初ページに入って時、00:00が表示されるから
getClock();
// 二つのargumentが必要（変数、時間）
setInterval(getClock, 1000);