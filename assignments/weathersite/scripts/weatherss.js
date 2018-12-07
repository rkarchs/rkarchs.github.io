var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5678757&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true)
weatherRequest.send();
weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    
    var iconcode = weatherData.weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

    document.getElementById('wCon').innerHTML = weatherData.weather["0"].description.charAt(0).toUpperCase() + weatherData.weather["0"].description.slice(1);

    document.getElementById('wCon1').innerHTML = weatherData.weather["0"].description.charAt(0).toUpperCase() + weatherData.weather["0"].description.slice(1);

    document.getElementById('currenttemp').innerHTML = weatherData.main.temp + "&degF";

    var windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);

    document.getElementById("windchill").innerHTML = windChill.toFixed(2) + "&degF";

    document.getElementById("humidity").innerHTML = weatherData.main.humidity + "%";

    //    document.getElementById("precip").innerHTML = weatherData.main.humidity + "%";

    document.getElementById("currentspeed").innerHTML = weatherData.wind.speed + " Mph";

}

var forcastObject = new XMLHttpRequest();
forcastObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=22fb0620113cac60bf788e2192153a17&units=imperial', true)
forcastObject.send();

forcastObject.onload = function () {
    var weatherForcast = JSON.parse(forcastObject.responseText);
    console.log(weatherForcast);

    document.getElementById('sun').innerHTML = weatherForcast.list["0"].main.temp + "&degF";
    document.getElementById('mon').innerHTML = weatherForcast.list["1"].main.temp + "&degF";
    document.getElementById('tues').innerHTML = weatherForcast.list["2"].main.temp + "&degF";
    document.getElementById('wed').innerHTML = weatherForcast.list["3"].main.temp + "&degF";
    document.getElementById('thurs').innerHTML = weatherForcast.list["4"].main.temp + "&degF";
    document.getElementById('fri').innerHTML = weatherForcast.list["5"].main.temp + "&degF";
    document.getElementById('sat').innerHTML = weatherForcast.list["6"].main.temp + "&degF";

}
