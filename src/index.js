console.log('JS working!');

// Your code goes here
const arrayWorkers =
    [
        {
            "name": "Michael Scott",
            "position": "Project Manager",
            "email": "michael.scott@compuglobalhipermeganet.com",
            "photo": "https://www.lavanguardia.com/uploads/2020/06/29/5fa91c5e49c91.jpeg",
        },
        {
            "name": "Dwight Schrute",
            "position": "Assistant to the project Manager",
            "email": "dwight.schrute@compuglobalhipermeganet.com",
            "photo": "https://s.yimg.com/ny/api/res/1.2/NSc3nWzMmEVxLXgx2N5LMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/levelup_525/47b81f0779adb85592c63ebb7276c11a"
        },
        {
            "name": "Kilikolo",
            "position": "CTO",
            "email": "kilikolo@compuglobalhipermeganet.com",
            "photo": "https://m.media-amazon.com/images/I/61AwGJQu3CL._AC_UF894,1000_QL80_.jpg"
        },
        {
            "name": "Homer Simpson",
            "position": "Vice CEO",
            "email": "homer.simpson@compuglobalhipermeganet.com",
            "photo": "https://s1.eestatic.com/2018/05/02/bluper/bluper_304233574_169542942_1706x960.jpg"
        },
        {
            "name": "Morty Smith",
            "position": "Intern",
            "email": "morty.smith@compuglobalhipermeganet.com",
            "photo": "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg"
        }
    ];

arrayWorkers.forEach((element, i) => {
    element.id = i + 1;
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = element.photo;
    console.log(element.photo)
    image.alt = element.name;
    console.log(element.name)
    const header2 = document.createElement("h2");
    header2.innerHTML = element.name;
    const header3 = document.createElement("h3");
    header3.innerHTML = element.position;
    const paragraph = document.createElement("p");
    const anchor = document.createElement("a");
    anchor.href = `mailto:${element.email}`;
    anchor.innerHTML = element.email;
    const button = document.createElement("button");
    button.innerHTML = "See details";
    const anchor1 = document.createElement("a");
    anchor1.href = `./html/worker${element.id}.html`

    document.querySelector("#card-container").appendChild(card);
    card.appendChild(image);
    card.appendChild(header2);
    card.appendChild(header3);
    card.appendChild(paragraph);
    paragraph.appendChild(anchor);
    anchor1.appendChild(button);
    card.appendChild(anchor1);
});