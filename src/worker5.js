const body = document.querySelector("body");

const card = document.createElement("div");
card.classList.add("card");
const image = document.createElement("img");
image.src = arrayWorkers[4].photo;
console.log(arrayWorkers[4].photo)
image.alt = arrayWorkers[4].name;
console.log(arrayWorkers[4].name)
const header2 = document.createElement("h2");
header2.innerHTML = arrayWorkers[4].name;
const header3 = document.createElement("h3");
header3.innerHTML = arrayWorkers[4].position;
const paragraph = document.createElement("p");
const anchor = document.createElement("a");
anchor.href = `mailto:${arrayWorkers[4].email}`;
anchor.innerHTML = arrayWorkers[4].email;
const button = document.createElement("button");
button.innerHTML = "See details";

body.appendChild(card);
card.appendChild(image);
card.appendChild(header2);
card.appendChild(header3);
card.appendChild(paragraph);
paragraph.appendChild(anchor);
card.appendChild(button);