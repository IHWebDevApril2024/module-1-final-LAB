console.log('JS working!');

// Your code goes here
const workers = [
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
]
console.log(workers[0]);
console.log(workers[1]);
console.log(workers[2]);
console.log(workers[3]);
console.log(workers[4]);


const container = document.createElement("div");
container.classList.add("container");

workers.forEach(worker => {
    const card = document.createElement("div");
    card.classList.add("card");

    const workerName = document.createElement("h2");
    const workerPosition = document.createElement("h3");
    const workerEmail = document.createElement("a");
    workerEmail.href = worker.email;
    const workerImage = document.createElement("img");
    workerImage.src = worker.photo;

    workerName.innerHTML = worker.name;
    workerPosition.innerHTML = worker.position;
    workerEmail.textContent = worker.email;
    workerImage.innerHTML = worker.photo;

    card.appendChild(workerImage);
    card.appendChild(workerName);
    card.appendChild(workerPosition);
    card.appendChild(workerEmail);
    card.appendChild(button);


    const button = document.createElement("button")
    button.innerHTML = "more info";

    button.addEventListener("click", () => {
        window.location.href("./worker1.js");
    });
    card.appendChild(button);
    container.appendChild(card);
    worker.id = index + 1;
    const workerId = document.createElement("h2");
    workerId.textContent = `ID: ${worker.id}`
    card.appendChild(workerId);
});


document.body.appendChild(container);


