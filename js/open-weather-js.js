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
        let x = 1;
        let y = 4;

    })
});

