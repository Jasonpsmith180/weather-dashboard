var APIkey = "API Key Here"

function getWeather(city) {

    // Fetch function to call current weather for the city from the api
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey)
    
    .then(function(response) {
        if (response.ok) {
            response.json()
            .then(function(search) {

                // Replaces Current City text with city name
                var cityName = $("#city-name").text(search.name);
                $("#city-name").append(cityName, " ", moment().format("MM/DD/YYYY"));
                
                // Gets weather icon
                var iconCode = search.weather[0].icon;
                var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $("#icon").addClass("show");
                $("#wicon").attr('src', iconURL);
    
                // Gets and displays weather icon description
                var iconDesc = $("#icon-description").text(search.weather[0].main);
                $("#icon-description").append(iconDesc);
    
                // Gets and displays city temp
                var cityTemp = $("#city-temp").text(search.main.temp);
                $("#city-temp").append(cityTemp);
    
                // Gets and displays city humidity
                var cityHumid = $("#city-hum").text(search.main.humidity);
                $("#city-hum").append(cityHumid);
    
                // Gets and displays city wind speed
                var cityWind = $("#city-wind").text(search.wind.speed);
                $("#city-wind").append(cityWind);
    
                // Fetch function to call UV Index for the city from the api
                var latitude = search.coord.lat;
                var longitude = search.coord.lon;
    
                fetch("http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkey)
                .then(function(response) {
                    return response.json();
                })
                .then(function(uvindex) {
                    var cityUV = $("#city-uv").text(uvindex.value);
                    $("#city-uv").append(cityUV);
                    if (uvindex.value > 8) {
                        $("#city-uv").addClass("severe");
                    }
                    else if (uvindex.value < 8 && uvindex.value > 3) {
                        $("#city-uv").addClass("moderate");
                    }
                    else {
                        $("#city-uv").addClass("low");
                    }
                })
    
                // prepend the city to the search history card stack
                $(".list-group").prepend(
                    `<li class="list-group-item">${search.name}</li>`
                )
                
                // Clear city input value
                $("#city-input").val("");
            })
    
            // Fetch function to call 5-day forecast for the city from the api
            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey)
    
                .then(function(response) {
                    return response.json();
                })
                .then(function(forecast) {
    
                    // clear any old forecast data
                    $(".card-deck").text("")
    
                    // Loop through 5 day forecast for 12:00pm each day and create cards for each day
                    for (var i = 4; i < 40; i += 8) {
    
                        var iconCode = forecast.list[i].weather[0].icon;
                        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    
                        $(".card-deck").append
                        (`<div class="card">\
                            <div class="card-body p-3">\
                                <h5 class="card-title">${moment(forecast.list[i].dt_txt).format("MM/DD/YYYY")}</h5>\
                                <img src="${iconURL}">\
                                <p class="card-text">Temp: ${forecast.list[i].main.temp} F</p>\
                                <p class="card-text">Humidity: ${forecast.list[i].main.humidity}%</p>\
                            </div>\
                        </div>`
                        );
                    }
                });

        } else {
            alert("Error: " + response.status + " " + response.statusText);
        }
    })
};

$("#search-btn").on("click", function() {
    var city = $("#city-input")
    .val()
    .trim()
    .toLowerCase();
    $("#city-uv").removeClass();
    getWeather(city);
});

$(document).on("click", "li.list-group-item", function() {
    $("#city-uv").removeClass();
    getWeather(this.textContent);
})