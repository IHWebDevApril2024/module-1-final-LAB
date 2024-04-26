// We've created this js file only for the first html page

const bodyElement = document.querySelector("body");

const cardDetailsElement = document.createElement("div");

const cardDetailsImgElement = document.createElement("img");

const cardDetailsNameElement = document.createElement("h2");

const cardDetailsPositionElement = document.createElement("p");

//Add the information about the first worker (workers[0])
cardDetailsImgElement.src = workers[0].photo;

cardDetailsNameElement.textContent = workers[0].name;

cardDetailsPositionElement.textContent = workers[0].position;

cardDetailsElement.appendChild(cardDetailsImgElement);
cardDetailsElement.appendChild(cardDetailsNameElement);
cardDetailsElement.appendChild(cardDetailsPositionElement);
bodyElement.appendChild(cardDetailsElement);
