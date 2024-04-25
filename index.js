console.log("JS working!");

// Your code goes here

const workers = [
  {
    name: "Michael Scott",
    position: "Project Manager",
    email: "michael.scott@compuglobalhipermeganet.com",
    photo: "https://www.lavanguardia.com/uploads/2020/06/29/5fa91c5e49c91.jpeg",
  },
  {
    name: "Dwight Schrute",
    position: "Assistant to the project Manager",
    email: "dwight.schrute@compuglobalhipermeganet.com",
    photo:
      "https://s.yimg.com/ny/api/res/1.2/NSc3nWzMmEVxLXgx2N5LMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/levelup_525/47b81f0779adb85592c63ebb7276c11a",
  },
  {
    name: "Kilikolo",
    position: "CTO",
    email: "kilikolo@compuglobalhipermeganet.com",
    photo:
      "https://m.media-amazon.com/images/I/61AwGJQu3CL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Homer Simpson",
    position: "Vice CEO",
    email: "homer.simpson@compuglobalhipermeganet.com",
    photo:
      "https://s1.eestatic.com/2018/05/02/bluper/bluper_304233574_169542942_1706x960.jpg",
  },
  {
    name: "Morty Smith",
    position: "Intern",
    email: "morty.smith@compuglobalhipermeganet.com",
    photo:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
  },
];

const containerElement = document.querySelector("#cards-container");

workers.forEach((worker) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = worker.photo;
  imgElement.alt = worker.name;

  const nameElement = document.createElement("h2");
  nameElement.textContent = worker.name;

  const positionElement = document.createElement("p");
  positionElement.textContent = worker.position;

  const emailElement = document.createElement("a");
  emailElement.href = `mailto:${worker.email}`;
  emailElement.textContent = worker.email;

  cardElement.appendChild(imgElement);
  cardElement.appendChild(nameElement);
  cardElement.appendChild(positionElement);
  cardElement.appendChild(emailElement);

  containerElement.appendChild(cardElement);
});
