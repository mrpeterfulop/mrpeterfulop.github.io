/*
window.onload = function () {

    selectTemperature();
    selectToday();
    dailyOffer();


    function firstFetch() {

        let fetchInit = {
            method: "GET",
            headers: new Headers(),
            mode: "cors",
            cashe: "default"
        };

        fetch("http://localhost:3000/users", fetchInit).then(
            data => data.json(),
            Err => console.error(err)
        ).then(
            users => console.log(users)
        );
    }

    
    let users = [

        { name: "Berger Whitney", email: "bergerwhitney@Sgmail.com", phone: "36201542785" },
        { name: "Doe John", email: "doejohn@Sgmail.com", phone: "36201542473" },
        { name: "Rostás Szabika", email: "rostasszabika@Sgmail.com", phone: "36201542785" },
        { name: "Fehér Péter", email: "feherpeter@Sgmail.com", phone: "36201547834" },
        { name: "Fekete Szilvia", email: "feketeszilvia@Sgmail.com", phone: "36201112734" },
        { name: "Tóth Piroska", email: "tothpiroska@Sgmail.com", phone: "36207772785" },
        { name: "Szabó Magda", email: "szabomagda@Sgmail.com", phone: "36201542436" },
        { name: "Fülöp", email: "fuloppeter@Sgmail.com", phone: "36201542111" },
    ];


    let tableBody = document.querySelector("#userTable tbody");
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);

    };

    let createButtonGroup = (parent) => {

        let group = document.createElement("div");
        group.className = "btn-group";

        let btnInfo = document.createElement("button");
        btnInfo.className = "btn-info btn";
        btnInfo.innerHTML = '<i class="fas fa-cog"></i>';

        let btnDanger = document.createElement("button");
        btnDanger.className = "btn-danger btn";
        btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

        group.appendChild(btnInfo);
        group.appendChild(btnDanger);

        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);

    }


    for (let k in users) {
        let tr = document.createElement("tr");
        createTD(parseInt(k) + 1, tr);
        for (let value of Object.values(users[k])) {
            createTD(value, tr);
        }
        createButtonGroup(tr);
        tableBody.appendChild(tr);

    }
























}*/