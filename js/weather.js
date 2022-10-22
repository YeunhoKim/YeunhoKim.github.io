const weatherHeader = document.querySelector("#weather-header");
const weatherContainer = document.querySelector("#weather-container");
const city = weatherContainer.querySelector("p:last-child");
const weather = weatherContainer.querySelector("p:first-child");
const temp = weatherHeader.querySelector("#temp");

const API_KEY = "34db59a4e51752a7ef6686db3f8f9ccd";

function geoOk(location) {
  //console.log(location);
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      weather.innerText = data.weather[0].description;
      temp.innerText = `${Math.floor(data.main.temp)}°C`;
    });
}

function geoError() {
  alert(
    "Can't find your location on the Earth Maybe you are traveling space!!"
  );
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
