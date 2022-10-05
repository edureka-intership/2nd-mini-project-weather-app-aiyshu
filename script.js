const form = document.querySelector("form")
const search = document.querySelector(".search-bar")
const weather = document.querySelector(".weather")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const desc = document.querySelector(".desc")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

// API Key 
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading.....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod =="404") {
        weather.innerHTML=`<h2>Please search for a valid city 😩</h2>`
        return;
    }
    
    weather.innerHTML= `
    <div class="city">Weather in ${data.name}</div>
    <div class="temp">${data.main.temp}&#176;C</div>
    <div><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="cloud"></div>
    <div style="font-weight: 600;">${data.weather[0].main}</div>
    <div class="humudity">Humidity: ${data.main.humidity}%</div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)