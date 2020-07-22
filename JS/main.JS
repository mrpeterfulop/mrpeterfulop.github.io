
window.onload = function () {
    document.querySelector("span[id='burger-price']").innerText = price + shippingCost;
    document.querySelector("span[id='price-box']").innerText = price + shippingCost;
    document.querySelector('#shipping-prc').innerHTML = shippingCost + " Ft";
}

let orderStatus = false; //A megfelelőséget vizsgáló változó.
let orderStart = true; //Az első kitöltési státuszt vizsgáló változó.
let price = 1000;
let shippingCost = 490;
let shippingLimit = 5000;



function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input-imp']");
    let priceSpan = document.querySelector("span[id='price-box']");
    let amountNumber = parseInt(amountInput.value);


    if (isNaN(amountNumber) || amountNumber <= 0 || amountNumber > 10) {
        priceSpan.innerText = price + shippingCost;
        amountInput.value = 1;
        document.querySelector("div[id='max-min-amount']").style.display = "block";
    }

    else {
        calcShippingCost(amountNumber);
        priceSpan.innerText = calc;
        document.querySelector("div[id='max-min-amount']").style.display = "none";
    }
}


function calcShippingCost(amountNumber) {

    let amount = amountNumber * price;

    if (amount < shippingLimit) {
        a = shippingCost + " Ft";
        shippingPrice(a);
        document.querySelectorAll('#shipping-price').innerHTML = a;
        return calc = amountNumber * price + shippingCost;
        
    } else {
        a = "Ingyenes!";
        shippingPrice(a);
        document.querySelector('#shipping-price').innerHTML = a;
        return calc = amountNumber * price;
    }

}

function shippingPrice(a) {
    let shippingPrice = document.querySelectorAll("span[id^='shipping-']");
    shippingPrice.forEach((e) => {
        e.innerText = a;
    });
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
    let email = document.querySelector("input[name *='email']").value;

    if (name != "" && address != "" && email != "") { //Ha nem üresek a mezők, lépjünk tovább a checkbox ellenőrzésre!
        document.querySelector("div[id='confirm-order']").style.display = "block";
        document.querySelector("button[id='submit-button']").style.display = "none";
        orderStart = false;

        if (confirmCheck == true) {
            //Ha minden mező ki van töltve, és checkbox ki van pipálva, Rendelés elküldése!
            calcAmount();
            confirmOrder();
            sucessfullOrder();
            summaryOrder();
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
    document.querySelector("div[class='priceBox']").style.display = "none";

}

function summaryOrder() {

    document.querySelector("div[id='summery-card']").style.display = "block";

    let burgerType = document.querySelector("select[name='set-burger-type']").value;
    let burgerSousage = document.querySelector("select[name='set-burger-sausage']").value;
    let burgerTopping = document.querySelector("select[name='set-burger-topping']").value;

    name = document.querySelector("input[name *='name']").value;
    email = document.querySelector("input[name *='email']").value;
    address = document.querySelector("input[name *='address']").value;
    amountInput = document.querySelector("input[name='amount-input-imp']");
    amountNumber = parseInt(amountInput.value);

    calcShippingCost(amountNumber);


    document.querySelector("span[id='customer-name']").innerText = name;
    document.querySelector("span[id='customer-email']").innerText = email;
    document.querySelector("span[id='customer-address']").innerText = address;

    document.querySelector("span[id='burger-type']").innerText = burgerType;
    document.querySelector("span[id='burger-sausage']").innerText = burgerSousage;
    document.querySelector("span[id='burger-topping']").innerText = burgerTopping;
    document.querySelector("span[id='burger-amount']").innerText = amountNumber + " db";
    document.querySelector("span[id='burger-price']").innerText = calc;

}