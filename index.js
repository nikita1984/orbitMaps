// создаём <h1 class="titel">My test map<h1>
const mapTitel = document.createElement("h1");
mapTitel.className = "titel";
mapTitel.textContent = "My test map";

// создаём <p class="description">Ниже будет расположена моя карта, созданная с помощью библиотеки Leaflet<p>
const mapDescription = document.createElement("p");
mapDescription.classList.add('description');
mapDescription.textContent = "Ниже будет расположена моя карта, созданная с помощью библиотеки Leaflet";

// внедряем созданные h1 & p в html
const elem = document.getElementById("root");
elem.appendChild(mapTitel);
elem.appendChild(mapDescription);

// cоздаём окно в html для подсоединения карты Leaflet
const appMap = document.getElementById("mapid");
appMap.style.height = '400px';
appMap.style.width = '600px';

/* с помощью метода map() создаём путём интеграции карту с центром по координатам (51.505, -0.09) и значением
    уровня масштабирования 13 */
const mymap = L.map('mapid').setView([51.505, -0.09], 13);

// добавляем слой  к нашей карте
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RuZXViYXVlciIsImEiOiJja3V4c3dtY2YwamhyMnBxd293bWFxa3VwIn0.U4Tf59nxNybfo1wUANFrkA'
}).addTo(mymap);

// добавляем маркер навигации к карте
const marker = L.marker([51.5, -0.09]).addTo(mymap);

// добавляем круг к карте
const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

// отмечаем метку в форме треугольника на карте
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

/* добавляем всплыв.окна которые будут высвечиваться при hover на метках карты
при первоначальной загрузке будет отображаться popup на метке marker  */
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// добавляем всплывающее окно без привязки к маркеру
/* Here we use openOn instead of addTo because it handles automatic closing of a 
    previously opened popup when opening a new one which is good for usability. */
const popup = L.popup()
    .setLatLng([51.51, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

const clickPopup = L.popup();

// при клике будут отображаться popup c координатами точки клика
function onMapClick(e) {
    clickPopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);