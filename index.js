function displayTemperature(response) {
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.main.name;
}

let apiKey = "a92e1c306678d374b63fe8af3bdd2747";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=a92e1c306678d374b63fe8af3bdd2747&units=metric";


axios.get(apiUrl).then(displayTemperature);