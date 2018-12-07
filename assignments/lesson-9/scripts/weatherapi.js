var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=22fb0620113cac60bf788e2192153a17&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, true)
weatherRequest.send();
weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp + "&degF";
}