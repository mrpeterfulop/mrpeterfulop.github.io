let weatherIcons = ['fas fa-sun', 'fas fa-cloud-sun', 'fas fa-cloud-showers-heavy', 'far fa-snowflake'];
let temperature = [12, 18.5, 22, 26, 28, 30, 17.5, 21, 24, 22, 15, 26, 5, 8, -15, -5 - 2, 0];
let dailyOffers = ['forrócsoki', 'meleg tea', 'házi sütemény', 'kézműves fagylalt', 'Jéghideg limonádé']

function selectTemperature() {

    lengthTemp = temperature.length;
    lengthIcon = weatherIcons.length;

    randomTemp = temperature[Math.floor(Math.random() * lengthTemp)];
    randomIcon = weatherIcons[Math.floor(Math.random() * lengthIcon)];

    randomIcon = randomIcon.valueOf();

    document.querySelector("span[id='temperature']").innerText = randomTemp;
    document.querySelector("i[id='weather-icon']").className = randomIcon;


}

function selectToday() {

    var objToday = new Date();
    weekdays = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
    dayOfWeek = weekdays[objToday.getDay()];

    document.querySelector("span[id='set-day']").innerText = dayOfWeek;
}


function dailyOffer() {

    temperature = randomTemp;

    if (temperature <= 0) { actuelltOffer = dailyOffers[0]; }
    if (15 >= temperature && temperature >= 0) { actuelltOffer = dailyOffers[1]; }
    if (20 >= temperature && temperature >= 15) { actuelltOffer = dailyOffers[2]; }
    if (25 >= temperature && temperature >= 20) { actuelltOffer = dailyOffers[3]; }
    if (temperature >= 25) { actuelltOffer = dailyOffers[4]; }

    document.querySelector("span[id='set-offer-value']").innerText = actuelltOffer;

}


//33.8