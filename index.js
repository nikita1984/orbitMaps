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
appMap.style.height = '180px';
appMap.style.width = '500px';

const mymap = L.map('mapid').setView([51.505, -0.09], 13);