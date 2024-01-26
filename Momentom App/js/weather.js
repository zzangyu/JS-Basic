function onGeoOK(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);