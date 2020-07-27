
window.onload = function () {
    selectTemperature();
    selectToday();
    // selectCar(); 
    dailyOffer();
    toppingSelect();
}


/*
KVFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
    KÁVÉ HOZZÁADÁSA
ENDIF
IF NINCS ELÉG VÍZ THEN
    VÍZ HOZZÁADÁSA
ENDIF
WHILE NEM MELEGEDETT FEL
    10 MP VÁRAKOZÁS
ENDWHILE
CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
*/


/*
Összegzés algoritmusa:

összeg = 0

CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE    
*/


let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;

for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Összeg: " + sum);



/*
Számlálás algoritmusa:
db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db = 0;

for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Páros számok: " + db)

/*
Szélsőérték keresés algoritmusa:
legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest);
    biggest = numericArray[i];
}
console.log("A legnagyobb érték: " + biggest);


let smallest = numericArray[0];
for (let i = 0; i > numericArray.length; i++) {
    if (numericArray[i] < smallest);
    smallest = numericArray[i];
}
console.log("A legkisebb érték: " + smallest);



/*
Eldöntés algoritmusa:
találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS, ADDIG
    szám = következő szám
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
value = 15;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == value) {
        contains = true;
    }
}

console.log(value + " Szerepel a tömbben? ", contains);

/*
function selectCar() {


    let cars = ["opel", "suzuki", "toyota"];
    var select = document.getElementById("cars"); 

      for (let i = 0; i < cars.length; i++) {
        var opt = cars[i];
        var el = document.createElement("option");
        el.text = opt;
        select.add(el);
    }
    select.value = cars[0];

}*/

function toppingSelect() {

    let toppings = [
        "-",
        "Szalonna",
        "Hagyma",
        "Tükörtojás",
        "Libamáj",
        "Extra sonka"];

    let toppingSelect = document.querySelector("#cars");
    let index = 0;
    while (index < toppings.length) {

        let option = document.createElement("option");
        option.value = index;
        option.innerHTML = toppings[index];
        toppingSelect.appendChild(option);
        index++;
    }

}




