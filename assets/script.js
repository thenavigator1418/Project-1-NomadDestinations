// visualcrossing weather api call
var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/buenosaires?unitGroup=metric&key=8N7VE7DU57F4PZWVAGHNN5ZVK&contentType=json";
var weatherData = '';

// fetch (queryURL)
// .then (function (response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
//   weatherData = JSON.stringify(data);
// });

function weatherApi() {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
              weatherData = JSON.stringify(data);
            displayData();
        });
};

function displayData() {
    console.log(weatherData);
};

weatherApi();
console.log(weatherData.latitude);
