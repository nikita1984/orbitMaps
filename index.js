const mapTitel = document.createElement("h1");
mapTitel.className = "titel";
mapTitel.textContent = "My test map";

const mapDescription = document.createElement("p");
mapDescription.classList.add('description');
mapDescription.textContent = "Ниже будет расположена моя карта, созданная с помощью библиотеки Leaflet";

const elem = document.getElementById("root");
elem.appendChild(mapTitel);
elem.appendChild(mapDescription);

const appMap = document.getElementById("mapid");
appMap.style.height = '400px';
appMap.style.width = '600px';

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RuZXViYXVlciIsImEiOiJja3V4c3dtY2YwamhyMnBxd293bWFxa3VwIn0.U4Tf59nxNybfo1wUANFrkA'
}).addTo(mymap);

const marker = L.marker([51.5, -0.09]).addTo(mymap);

const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);