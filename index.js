console.log('JS working!');

// Your code goes here
let workers = [
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
        "photo":"https://s1.eestatic.com/2018/05/02/bluper/bluper_304233574_169542942_1706x960.jpg"
    },
    {
        "name": "Morty Smith",
        "position": "Intern",
        "email": "morty.smith@compuglobalhipermeganet.com",
        "photo": "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg"
    }
];

let links =["workers/worker1.html",
"workers/worker2.html",
"workers/worker3.html",
"workers/worker4.html",
"workers/worker5.html",
];


let container = document.querySelector("#container");

workers.forEach((worker, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const img = document.createElement("img");
    img.classList.add("image")
    img.src = worker.photo;
    img.alt = worker.name;
    card.appendChild(img);

    const name = document.createElement("h2");
    name.textContent = worker.name;
    card.appendChild(name);

    const position = document.createElement("h3");
    position.textContent = worker.position;
    card.appendChild(position);

    const email = document.createElement("p");
    card.appendChild(email);

    const link = document.createElement("a");
    link.href = worker.email;
    link.textContent = worker.email;
    email.appendChild(link);

    const button = document.createElement("button");
    card.appendChild(button);

    const aButton = document.createElement("a");
    aButton.href = links[index]
    aButton.textContent = "See details";
    button.appendChild(aButton)
    
 
});

for( let i = 0; i < workers.length; i++) {
    workers[i].id = i + 1;
}
console.log(workers);
