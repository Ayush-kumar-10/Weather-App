let city = document.querySelector(".city");
let tem = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector("input");
let btn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon") ;
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "bb46135f876b9fbe0f19de0cf5cb9a1d"
let cityname = "New York";

btn.addEventListener("click",async()=>{
    cityname = input.value;
    await checkWeather(cityname);
});


async function checkWeather(cityname){
    try{
        let res = await axios.get(url+`&appid=${apiKey}`+`&q=${cityname}`);
        console.log(res);
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        input.value = "";
        city.innerText = res.data.name;
        tem.innerText = Math.round(res.data.main.temp) +"°C";
        humidity.innerText = res.data.main.humidity +"%" ;
        wind.innerText = res.data.wind.speed +"km/h";
        document.querySelector(".weather-condition").innerText=res.data.weather[0].main;
        console.log(res.data.weather[0].main);
        
        if(res.data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/cloudy.png";
        }
        else if(res.data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
    
        }
        else if(res.data.weather[0].main == "Haze"){
            weatherIcon.src = "./images/haze.png";
    
        }
        else if(res.data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }
        else if(res.data.weather[0].main == "Snow"){
            weatherIcon.src = "./images/snow.png";
    
        }
    }catch(err){
        console.log(err);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}
