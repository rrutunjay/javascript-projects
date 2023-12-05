const apiId = "5efd0914fdb2830cfc3cf4bdebba9abe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInpt = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const temp = document.querySelector('.temp')
const cityweather = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

async function weathercheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiId}`)

    
    if (response.status == 404) 
    {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } 
    else 
    {
        const data = await response.json()

        temp.innerHTML = Math.round(data.main.temp) + "°c";
        cityweather.innerHTML = data.name
        wind.innerHTML = data.wind.speed + " km/h"
        humidity.innerHTML = data.main.humidity + "%"
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "../assets/Weather/clouds.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "../assets/Weather/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "../assets/Weather/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "../assets/Weather/mist.png"
            }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "../assets/Weather/clear.png"
        }
        
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    weathercheck(searchInpt.value);
})

