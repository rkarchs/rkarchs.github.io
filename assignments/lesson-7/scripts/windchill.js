var t = 73;
document.getElementById("currenttemp").innerHTML = t + "&degF";

var s = 10;
document.getElementById("currentspeed").innerHTML = s + " Mph";

var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("windchill").innerHTML = f.toFixed(2) + "&degF";

var h = 69;
document.getElementById("humidity").innerHTML = h + "%";

var p = 0;
document.getElementById("par").innerHTML = p + " inches";


