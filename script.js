const url = 'https://api.openweathermap.org/data/2.5/';
const key = '06c7c1b0b3088410e913bfd092f8611f';
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");


const searchbar = document.querySelector("#searchBar");


const setQuery = (e) => {
   if (e.keyCode =='13') {
    getResult(searchbar.value)
   }
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}
const displayResult = (result) => {
     
    city.innerText= `${result.name}, ${result.sys.country}`;
    temp.innerText = `${Math.round(result.main.temp)} °C`;
    desc.innerText = `${result.weather[0].description}`;
    minmax.innerText = `${(result.main.temp_min).toFixed(1)}°C / ${(result.main.temp_max).toFixed(1)}°C`
    console.log(result);
    console.log(result);
}

searchbar.addEventListener("keypress",setQuery)
