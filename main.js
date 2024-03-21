var map = L.map('map').setView([34.0968, 77.35], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([34.0968, 77.35]).addTo(map);
marker.bindPopup("<b>Hola!</b><br>Ich bin in Ladakh.").openPopup();
