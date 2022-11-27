mapa.innerHTML = '<iframe width="100%" height="300" src = "https://maps.google.com/maps?q=&amp;z=15&amp;output=embed"></iframe>'

function solicitar() {
    var str = document.getElementById("idbus").value;
    getData(str)
}

function getData(str) {
    fetch('http://127.0.0.1:3000/' + str)
        .then(response => response.json())
        .then(data => {
            const latitude = data.lat;
            const longitude = data.lon;
            console.log(latitude);
            console.log(longitude);
            mapa.innerHTML = '<iframe width="100%" height="300" src = "https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&amp;z=15&amp;output=embed"></iframe>'
        });
}


