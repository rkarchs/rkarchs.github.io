var closures = new XMLHttpRequest();
closures.open('GET', 'https://rkarchs.github.io/assignments/Term%20Final/jsondata/closures.json', true)
closures.send();

closures.onload = function () {
    var dates = JSON.parse(closures.responseText);
    console.log(dates);

    document.getElementById('wdct').innerHTML = dates.Templehours[0].closures;
};
