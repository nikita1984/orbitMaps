const elem = document.getElementById("root");

const mapTitel = document.createElement("h1");
mapTitel.className = "titel";
mapTitel.textContent = "My test map";

const mapDescription = document.createElement("p");
mapDescription.classList.add('description');
mapDescription.textContent = "Ниже будет расположена моя карта, созданная с помощью библиотеки Leaflet";

elem.appendChild(mapTitel);
elem.appendChild(mapDescription);