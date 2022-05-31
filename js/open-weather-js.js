"use strict"

const URL = "https:api.openweathermap.org/data/2.5/onecall";

$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
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
        $("#icon").css("background-image", "url('https://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
    })
});

reverseGeocode({lat: 52.3353, lng: 4.8659}, MAPBOX_API_KEY).then(function (location) {
    console.log(location);
});