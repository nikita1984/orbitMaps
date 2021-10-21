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
appMap.style.height = '80vh';
appMap.style.width = '100vw';

/* с помощью метода map() создаём путём интеграции карту с центром по координатам (51.505, -0.09) и значением
    уровня масштабирования 13 */
const mymap = L.map('mapid').setView([55.7516306, 37.7162886], 13);

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
const marker = L.marker([55.7516306, 37.7162886]).addTo(mymap);

/* добавляем всплыв.окна которые будут высвечиваться при hover на метках карты
при первоначальной загрузке будет отображаться popup на метке marker  */
marker.bindPopup('14800; шоссе Энтузиастов, кинотеатр "Факел"');

const clickPopup = L.popup();

function onMapClick(e) {
    mymap.setView(e.latlng, 13);
}
mymap.on('click', onMapClick);
