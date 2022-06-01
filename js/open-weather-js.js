"use strict";

mapboxgl.accessToken = MAPBOX_API_KEY;
const MAP = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const URL = "http://api.openweathermap.org/data/2.5/onecall";

$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 29.4252,
    lon: -98.4946,
    units: "imperial"
}).done(function(results) {console.log(results)})

geocode("San Antonio, US", MAPBOX_API_KEY).then(function(results) {
      return results;
}).then(function(data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_KEY,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }).done(function(results) {
        console.log(results)
        let x = 0;
        let y = 4;
        results.daily.forEach(function(card) {
            if(x <= y) {
                //first const is to accepts the date format from weatherAPI "property" multiplies by 1000 and converts it to current new date.
                const date = new Date(card.dt * 1000);
                //this const takes the date variable and attaches data from weather API "property" to a new format array.
                const [month, day, year] = [ date.getDay(), date.getMonth(), date.getFullYear()];
                let imgSrc = 'http://openweathermap.org/img/w/' + card.weather[0].icon + '.png';
                let cards = '<div class="card col-2 m-auto" >' +
                    '<div class="card-header">' + [month + '-' + day + '-' + year] + '<img src=' + imgSrc + '>'  + '</div>' +
                    '<ul class="list-group list-group-flush">' +
                    '<li class="list-group-item">' + card.weather[0].description + '</li>' +
                    '<li class="list-group-item">' + 'Humidity:' + card.humidity + '</li>' +
                    '<li class="list-group-item">' + 'Wind Speed' + card.wind_speed.toFixed() + 'Mph' + '</li>' +
                    '</ul>' +
                    '</div>';
                //Takes completed card and puts it into my div with id weatherCards. This will take place for each iteration.
                $('#weatherCards').append(cards);
                x++;
            }
        })

    })
});

