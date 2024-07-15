const apiKey = "592b58b4f5f99a4a1ed751d98636eb51";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status == 404){
        alert("City not found");
    }
    else{

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main == "Clouds")
        {
        weatherIcon.src = "images/clouds.png";
        weatherIcon.alt = "cloudy";
    }
    else if(data.weather[0].main == "Clear")
        {
        weatherIcon.src = "images/clear.png";
        weatherIcon.alt = "clear";
    }
    else if(data.weather[0].main == "Rain")
        {
        weatherIcon.src = "images/rain.png";
        weatherIcon.alt = "rainy";
    }
    else if(data.weather[0].main == "Drizzle")
        {
        weatherIcon.src = "images/drizzle.png";
        weatherIcon.alt = "drizzle";
    }
    else if(data.weather[0].main == "Mist")
        {
        weatherIcon.src = "images/mist.png";
        weatherIcon.alt = "mist";
    }
    else if(data.weather[0].main =="Snow")
        {
        weatherIcon.src = "images/snow.png";
        weatherIcon.alt = "snow";
    }

    document.querySelector(".weather").style.display = "block";
}
}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
});
