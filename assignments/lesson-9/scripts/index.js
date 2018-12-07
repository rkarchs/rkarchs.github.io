var jsonURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', jsonURL)
jsonRequest.send();
jsonRequest.onload = function () {
    var jsonInfo = JSON.parse(jsonRequest.responseText);
    console.log(jsonInfo);

    //    var iconCode = weatherData.weather[0].icon;
    //    var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
    //    document.getElementsById('wIcon').src = iconURL;

    //    document.getElementsByClassName('img2').innerHTML = weatherData.weather["0"].icon;

    // Preston
    document.getElementById('Preston').innerHTML = jsonInfo.towns[4].name;
    
    document.getElementById('pm').innerHTML = jsonInfo.towns[4].motto;

    document.getElementById('prf').innerHTML = jsonInfo.towns[4].averageRainfall;

    document.getElementById('ppop').innerHTML = jsonInfo.towns[4].currentPopulation;

    document.getElementById('pyear').innerHTML = jsonInfo.towns[4].yearFounded;

    document.getElementById('pe1').innerHTML = jsonInfo.towns[4].events["0"];
    document.getElementById('pe2').innerHTML = jsonInfo.towns[4].events["1"];
    document.getElementById('pe3').innerHTML = jsonInfo.towns[4].events["2"];

    // Soda Springs
    document.getElementById('sodaSprings').innerHTML = jsonInfo.towns[5].name;

    document.getElementById('ssm').innerHTML = jsonInfo.towns[5].motto;

    document.getElementById('ssrf').innerHTML = jsonInfo.towns[5].averageRainfall;

    document.getElementById('sspop').innerHTML = jsonInfo.towns[5].currentPopulation;

    document.getElementById('ssyear').innerHTML = jsonInfo.towns[5].yearFounded;

    document.getElementById('sse1').innerHTML = jsonInfo.towns[5].events["0"];
    document.getElementById('sse2').innerHTML = jsonInfo.towns[5].events["1"];
    document.getElementById('sse3').innerHTML = jsonInfo.towns[5].events["2"];

    // Fish Haven
    document.getElementById('fishHaven').innerHTML = jsonInfo.towns[1].name

    document.getElementById('fhm').innerHTML = jsonInfo.towns[1].motto;

    document.getElementById('fhrf').innerHTML = jsonInfo.towns[1].averageRainfall;

    document.getElementById('fhpop').innerHTML = jsonInfo.towns[1].currentPopulatio1;

    document.getElementById('fhyear').innerHTML = jsonInfo.towns[1].yearFounded;

    document.getElementById('fhe1').innerHTML = jsonInfo.towns[1].events["0"];
    document.getElementById('fhe2').innerHTML = jsonInfo.towns[1].events["1"];
    document.getElementById('fhe3').innerHTML = jsonInfo.towns[1].events["2"];
}
