window.onload = function () {

}

orderStatus = false; //A megfelelőséget vizsgáló változó.
orderStart = true; //Az első kitöltési státuszt vizsgáló változó.

function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input-imp']");
    let amountNumber = parseInt(amountInput.value);
    let priceSpan = document.querySelector("span[class='priceBox']");
    let price = 1000;
    let amount = amountNumber * price;

    if (isNaN(amountNumber) || amountNumber <= 0 || amountNumber > 10) {
        priceSpan.innerText = price;
        amountInput.value = 1;
        document.querySelector("div[id='max-min-amount']").style.display = "block";
    }

    else {
        priceSpan.innerText = amount;
        document.querySelector("div[id='max-min-amount']").style.display = "none";
    }
}

function trimInputText() {
    let trimBox = document.querySelectorAll("input[name ^='trim']");
    trimBox.forEach((e) => {
        e.value = e.value.trim(); //Remove first and lasd spaces
        e.value = e.value.replace(/\s\s+/g, ' '); //Remove all multiple spaces
    });
}


function checkInputs() {
    let inputBoxes = document.querySelectorAll("input[name $='imp']");

    inputBoxes.forEach((e) => {
        if (e.value == "") {
            e.style.background = "#ff4d4d";
            orderStatus = false;
        }
        else {
            document.querySelector("div[id='wrong-data']").style.display = "none";

        }
    });
}

function imputboxColorOff() {
    let inputBoxes = document.querySelectorAll("input[name $='imp']");
    inputBoxes.forEach((e) => {
        e.style.background = "";
    });

    document.querySelector("div[id='wrong-data']").style.display = "none";
    document.querySelector("div[id='max-min-amount']").style.display = "none";
    document.querySelector("div[id='success-order']").style.display = "none";

}


function beforeSubmit() {
    let confirmCheck = document.getElementById("confirm-check").checked;
    let name = document.querySelector("input[name *='name']").value;
    let address = document.querySelector("input[name *='address']").value;
    //let topping = document.querySelector("input[name *='topping']").value;

    if (name != "" && address != "") { //Ha nem üresek a mezők, lépjünk tovább a checkbox ellenőrzésre!
        document.querySelector("div[id='confirm-order']").style.display = "block";
        document.querySelector("button[id='submit-button']").style.display = "none";
        orderStart = false;

        if (confirmCheck == true) {
            //Ha minden mező ki van töltve, és checkbox ki van pipálva, Rendelés elküldése!
            calcAmount();
            confirmOrder();
            sucessfullOrder();
        }
    }

    else if (orderStart == false) {
        wrongInputData();
        confirmOrder();
    }
    else {
        wrongInputData();
    }

}


function wrongInputData() {
    checkInputs();
    document.querySelector("div[id='wrong-data']").style.display = "block";
    document.getElementById("confirm-check").checked = false;
}

function confirmOrder() {
    trimInputText();
    orderStart = false;

    if (document.getElementById("confirm-check").checked == false) {
        orderStatus = false;
        document.getElementById("confirm-check").checked == true;
        document.querySelector("button[id='submit-button']").style.display = "none";
        document.querySelector("button[id='submit-button']").style.background = "#007bff";
    }

    else if (document.getElementById("confirm-check").checked == true) {
        orderStatus = true;
        document.getElementById("confirm-check").checked == false;
        document.querySelector("button[id='submit-button']").style.background = "#32CD32";
        document.querySelector("button[id='submit-button']").style.border = "#32CD32";
        document.querySelector("button[id='submit-button']").style.display = "block";
        document.querySelector("button[id='submit-button']").innerText = "Véglegesítés";

    }

}

function sucessfullOrder() {

    document.querySelector("button[id='submit-button']").style.display = "none";
    document.querySelector("a[id='reload-button']").style.display = "block";
    document.querySelector("div[id='confirm-order']").style.display = "none";
    document.querySelector("div[id='success-order']").style.display = "block";
    document.querySelector("div[class='form-group-inputs']").style.display = "none";
    document.querySelector("h5[class='priceBox']").style.display = "none";

}

