// visualcrossing weather api call
/* var queryURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/buenosaires?unitGroup=metric&key=8N7VE7DU57F4PZWVAGHNN5ZVK&contentType=json";
var weatherData = '';
function weatherApi() {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.days[0].temp);
            console.log(data.days[1].temp);
            console.log(data.days[2].temp);
            console.log(data.days[3].temp);
            console.log(data.days[4].temp);
              weatherData = (data);
            displayData();
        });
};

function displayData() {
    console.log(weatherData);
};

weatherApi();
console.log(weatherData.latitude); */



var bnbData = "";
const bnbUrl = 'https://airbnb13.p.rapidapi.com/search-location?location=Medellin&checkin=2024-06-01&checkout=2024-06-10&adults=1&children=0&infants=0&pets=0&page=1&currency=GBP';
const bnbOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e943522c53msh778f72f36525ee5p170a6ejsn25f1fadc0a94',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

function bnbApi() {
    fetch(bnbUrl, bnbOptions)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.results[0].images[0]);
              bnbData = (data);
            displayData();
        });
};

function displayData() {
    console.log(bnbData);
};

bnbApi();
console.log(bnbData.results[0].images[0]);




