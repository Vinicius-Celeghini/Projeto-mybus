var script = document.createElement("script");
script.src = "jquery-3.6.0.js";
document.getElementsByTagName("head")[0].appendChild(script);

function storeData() {
    const str = document.querySelector("#idbus");
    const value = str.value;
    localStorage.setItem("busid", value);
    location.reload()
    alert("ID inserido");
}

function success(dados) {
    const lat = dados.coords.latitude;
    const lon = dados.coords.longitude;
    console.log(lat);
    console.log(lon);
    sendData(lat, lon);
}

function error() {
    console.log("Erro");
}

function sendData(lat, lon) {
    const serverkey = localStorage.getItem("busid");
    $.ajax
        ({
            type: "GET",
            dataType: "json",
            url: 'http://127.0.0.1:3000/' + serverkey,
            crossDomain: true,
            data: { data: { lat: JSON.stringify(lat), lon: JSON.stringify(lon) } },
            success: function () { console.log("Informações enviadas"); },
            failure: function () { console.log("Erro"); }
        });

}

options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.watchPosition(success, error, options)
