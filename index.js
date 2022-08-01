function formatDate (timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return '${date}';
    return '${hours}:${minutes}';

}

function displayTemperature(response) {
    console.log(response.data.main.temp);

    let temperatureElement = document.querySelector("#temp1");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.main.name;

    let clearElement = document.querySelector("#description");
    clearElement.innerHTML = response.data.main.description;
    
    
}
function search(city) {
    let apiKey = "a92e1c306678d374b63fe8af3bdd2747";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a92e1c306678d374b63fe8af3bdd2747";

axios.get(apiUrl).then(displayTemperature);
}


function handleSubmit(event) {
    event.preventDefault();
    let input = document.querySelector("#city");
    search(input.value);
  }
  let form = document.querySelector("#searching");
  form.addEventListener("submit", handleSubmit);
