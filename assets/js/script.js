var apiKey = "4d6b36f02b56cbd7f326765e11f1effe"
var tempEl = document.getElementById("temp")
var titleEl = document.getElementById("title")
var windEl = document.getElementById("wind")
var humidityEl = document.getElementById("humidity")
var searchBtn = document.getElementById("search-btn")
var cityInput = document.getElementById("city-input")
var fivedayForecastEl = document.getElementById("fiveday-forecast")
// var miamiBtn=document.getElementById("miami-btn")
// var orlandoBtn=document.getElementById("orlando-btn")
// var jacksonvilleBtn=document.getElementById("jacksonville-btn")
// var homesteadBtn=document.getElementById("homestead-btn")
// var melbourneBtn=document.getElementById("melbourne-btn")




function searchCity() {
    var cityName = cityInput.value
    displayWeather(cityName)
    // var cityMiami = miamiBtn
    // displayWeather(cityMiami)

}
function displayWeather(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial"

    // currentDay = dayjs().Date()
    // console.log(currentDay)
    // var currentData = dayjs().format("MM,dd,YYYY")
    // var currentDayEl.text()
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {
            console.log(currentData)
            titleEl.innerHTML = currentData.name + dayjs.unix(currentData.dt).format("MM/DD/YYYY") + "<img src='https://openweathermap.org/img/wn/" + currentData.weather[0].icon + "@2x.png'>"

        })

    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey + "&units=imperial"
    fetch(forecastUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (forecastData) {
            console.log(forecastData)
            var forecastArr = forecastData.list
            // fivedayForecastEl.textContent=""
            for (let i = 3, j = 1; i < forecastArr.length; i = i + 12, j++) {
                console.log(forecastArr[i])
                var cardTitle = document.getElementById("card-title0" + j)
                console.log("card-title0" + j)
                cardTitle.textContent = dayjs.unix(forecastArr[i].dt).format("  (MM/DD/YYYY)  ")
                
                var temp = document.getElementById("temp" + j)
                temp.textContent = forecastArr[i].main.temp

            }


})


}
















// miamiBtn.addEventListener("click", searchCity)
searchBtn.addEventListener("click", searchCity)

