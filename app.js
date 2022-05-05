const API_KEY = `f6218310b46831c4e10361acdc899930`

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather = async (city) => {
    weather.innerHTML = ` <h5>Loading...</h5>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) => {
    if (data.cod == 404) {
        weather.innerHTML = ` <h4>City not found</h4>`;
    }
    weather.innerHTML = `
    <div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
    <div>
        <h2>${data.main.temp}</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        event.preventDefault();
    }
)