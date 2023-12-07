// visualcrossing weather api call
// queries API, console logs a five day forecast from current day
function weatherApi(city, weatherLi) {
    var queryURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8N7VE7DU57F4PZWVAGHNN5ZVK&contentType=json`;
    var weatherData = "";
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.days[0].temp);
        console.log(data.days[1].temp);
        console.log(data.days[2].temp);
        console.log(data.days[3].temp);
        console.log(data.days[4].temp); // creates a five day forecast
        weatherLi.empty();
        for (let index = 0; index < 5; index++) {
            weatherLi.append($(`<li class='d-inline'>${data.days[index].temp}</li>`));
        }
        weatherData = data;
      });
  }
  
var bnbData = "";
  
  function bnbApi(city, cityImg) { 
    const bnbUrl = `https://airbnb13.p.rapidapi.com/search-location?location=${city}&checkin=2024-06-01&checkout=2024-06-10&adults=1&children=0&infants=0&pets=0&page=1&currency=GBP`;
    const bnbOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e943522c53msh778f72f36525ee5p170a6ejsn25f1fadc0a94",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };
    fetch(bnbUrl, bnbOptions) // standard fetch using the API url and rapidAPI verification headers
      .then(function (response) {
        return response.json(); // return normal JSON object as it's easier to access info within it
      })
      .then(function (data) {
        console.log(data.results[0].images[0]); // log the first image from the first result for an airbnb listing on city search. This will be appended to a card element later on
        bnbData = data;
        cityImg.attr("src", data.results[0].images[0]);

      });
  } 

  var cardsDiv = document.getElementById("cards"); // cardsDiv = all bootstrap cards on the page

  cardsDiv.addEventListener("click", function (event) { // addEventListener for a click
    var trimmedLocations = event.target.textContent.trim(); // trims the text content in card, which is the city name
    var cityName = trimmedLocations.split(",", 2)[0]; // cityName is the trimmedLocations split at the ",", split into two elements, of which we select the first
    console.log(cityName); 
    var weatherId = cityName.replace(" ", "") + "Weather"; // Buenos Aires = BuenosAires
    var weatherLi = $(`#${weatherId}`);

    var cityImgId = cityName.replace(' ', '') + 'Img';
    var cityImg = $(`#${cityImgId}`);
    bnbApi(cityName, cityImg); // runs bnbApi func with cityName passed into template literal API search
    weatherApi(cityName, weatherLi); // runs weatherApi func with cityName passed into template literal API search
});



