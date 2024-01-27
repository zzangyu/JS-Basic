const API_KEY = "b18ac37aa27673bf39ce088bc488776b";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather img");
        const city = document.querySelector("#weather span");
        city.innerText = data.name;
        weather.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.style.width = "28px";
        weather.style.height = "100%";
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

