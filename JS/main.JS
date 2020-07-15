
window.onload = function () {

    //   document.querySelector("div[id='max-min-amount']").style.display = "none";
    //  document.querySelector("div[id='wrong-data']").style.display = "none";

}

orderStatus = false;
orderReady = false;

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
    document.querySelector("div[id='confirm-order']").style.display = "none";
}


function beforeSubmit() {


    if (orderStatus == false) {

        let name = document.querySelector("input[name *='name']").value;
        let address = document.querySelector("input[name *='address']").value;
        let topping = document.querySelector("input[name *='topping']").value;


        if (name == "" || address == "" || topping == "") {
            checkInputs();
            document.querySelector("div[id='wrong-data']").style.display = "block";
        }
        else {
            trimInputText();
            calcAmount();
            document.querySelector("div[id='confirm-order']").style.display = "block";
            document.querySelector("button[id='submit-button']").disabled = true;
        }

    }


    else  {
        document.querySelector("button[id='submit-button']").style.display = "none";
        document.querySelector("button[id='reload-button']").style.display = "block";
        document.querySelector("div[id='confirm-order']").style.display = "none";
        document.querySelector("div[id='success-order']").style.display = "block";
        document.querySelector("button[id='submit-button']").style.background = "#007bff";
        document.querySelector("button[id='submit-button']").style.border = "#007bff";
        orderReady == true;

    }


}


function confirmOrder() {

    if (document.getElementById("confirm-check").checked == false) {


        orderStatus = false;
        document.getElementById("confirm-check").checked == true;
        document.querySelector("button[id='submit-button']").disabled = true;
        document.querySelector("button[id='submit-button']").innerText = "Tovább";
        document.querySelector("button[id='submit-button']").style.background = "#007bff";
    }
    else if (document.getElementById("confirm-check").checked == true) {

        orderStatus = true;
        document.getElementById("confirm-check").checked == false;
        document.querySelector("button[id='submit-button']").style.background = "#32CD32";
        document.querySelector("button[id='submit-button']").style.border = "#32CD32";
        document.querySelector("button[id='submit-button']").disabled = false;
        document.querySelector("button[id='submit-button']").innerText = "Véglegesítés";

    }

}


function reloadPage() {

    window.open("/Pages/contact.html");
}