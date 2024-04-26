
const bodyElement = document.querySelector("body");

const cardDetailsElement = document.createElement("div");

const cardDetailsImgElement = document.createElement("img");

const cardDetailsNameElement = document.createElement("h2");

const cardDetailsPositionElement = document.createElement("p");

//Add the information about the first worker (workers[0])
cardDetailsImgElement.src = workers[1].photo;

cardDetailsNameElement.textContent = workers[1].name;

cardDetailsPositionElement.textContent = workers[1].position;

cardDetailsElement.appendChild(cardDetailsImgElement);
cardDetailsElement.appendChild(cardDetailsNameElement);
cardDetailsElement.appendChild(cardDetailsPositionElement);
bodyElement.appendChild(cardDetailsElement);