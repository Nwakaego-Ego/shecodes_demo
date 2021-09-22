// let newTime = new Date();
// let day = newTime.getDay();
// let minutes = newTime.getMinutes();
// if (minutes < 10) minutes = `0${minutes}`;
// let seconds = newTime.getSeconds();
// let hour = newTime.getHours();
// // if (hour < 10) {
// //   let hour = `0${hour}`;
// // }

// let weeks = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednessday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let week = weeks[newTime.getDay()];

// let currentTime = document.querySelector("#saturday");
// currentTime.innerHTML = `${week} ${hour}:${minutes}`;

function currentDate(timestamp) {
  let time = new Date(timestamp);
  let minutes = time.getMinutes();
  let hour = time.getHours();
  // if (hour < 10) {
  //   let hour = `0${hour}`;
  // }
  let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let week = weeks[time.getDay()];

  let seconds = time.getSeconds();

  return `${week} ${hour}:${minutes}`;
}

function revealWeather(response) {
  console.log(response.data);
  document.querySelector("#lagos-nigeria").innerHTML = response.data.name;
  document.querySelector("#time").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  let currentDay = document.querySelector("#day");
  currentDay.innerHTML = currentDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  // iconElement.setAttribute("i", "https://openweathermap.org/img/wn/10d@2x.png");
  iconElement.innerHTML = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
}

function search(city) {
  let weatherKey = "49d8a1330406cb9ac92bd472b6ff3770";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${weatherKey}`).then(revealWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  search(city);
}

let formSearch = document.querySelector("form");
formSearch.addEventListener("submit", handleSubmit);

function celliousButton() {
  let oneNine = document.querySelector("#time");
  oneNine.innerHTML = 19;
}

let celsious = document.querySelector("#cels");
celsious.addEventListener("click", celliousButton);

search("Nigeria");

// function searchLocation(position) {
//   console.log(position);
//   let weatherKey = "49d8a1330406cb9ac92bd472b6ff3770";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(revealWeather);
// }

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// let locationCurrent = document.querySelector("#current-location");
// locationCurrent.addEventListener("click", pressCurrent);

// function searchLocation(position) {
//   console.log(position.coords.accuracy);
//   // let longitude = position.coords.longitude;
//   // let latitude = Math.round(position.coords.latitude);
//   // console.log(longitude);
//   // console.log(latitude);
//   // let weatherKey = "49d8a1330406cb9ac92bd472b6ff3770";
//   // let apiUrl = `https:api.openweathermap.org/data/2.5/find?lat${position.coords.latitude}&lon=${position.coord.longitude}&appid&${weatherKey}&units=metric`;
//   // axios.get(apiUrl).then(revealWeather);
// }

// function pressCurrent() {
//   // event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// let locationCurrent = document.querySelector("#current-location");
// locationCurrent.addEventListener("click", pressCurrent);

// function farenheitButton() {
//   let oneNine = document.querySelector("#nineteen");
//   oneNine.innerHTML = 66;
// }

// let farenheit = document.querySelector("#fal");
// farenheit.addEventListener("click", farenheitButton);

// https:api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&appid&49d8a1330406cb9ac92bd472b6ff3770&units=metric
