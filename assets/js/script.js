var apiKey = "4d6b36f02b56cbd7f326765e11f1effe"
var tempEl = document.getElementById("temp")
var titleEl = document.getElementById("title")
var windEl = document.getElementById("wind")
var humidityEl = document.getElementById("humidity")
var searchBtn = document.getElementById("search-btn")
var cityInput = document.getElementById("city-input")


function searchCity() {
    var cityName = cityInput.value
    displayWeather(cityName)

}
function displayWeather(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial"



    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {
            console.log(currentData)
        })

    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&units=imperial"
    fetch(forecastUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (forecastData) {
            console.log(forecastData)

        })



}

















searchBtn.addEventListener("click", searchCity)

