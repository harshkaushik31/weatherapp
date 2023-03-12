const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd9ec9c501msh0ca2720615d60e9p19fafbjsnfdea9c55d7bd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        // feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

// function of weather of shanghai
function getWeatherShanghai () {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct_shanghai.innerHTML = response.cloud_pct
        feels_like_shanghai.innerHTML = response.feels_like
        humidity_shanghai.innerHTML = response.humidity
        max_temp_shanghai.innerHTML = response.max_temp
        min_temp_shanghai.innerHTML = response.min_temp
        sunrise_shanghai.innerHTML = response.sunrise
        sunset_shanghai.innerHTML = response.sunset
        temp_shanghai.innerHTML = response.temp
        wind_degrees_shanghai.innerHTML = response.wind_degrees
        wind_speed_shanghai.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}

// fuction for weather of boston

function getWeatherBoston () {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct_boston.innerHTML = response.cloud_pct
        feels_like_boston.innerHTML = response.feels_like
        humidity_boston.innerHTML = response.humidity
        max_temp_boston.innerHTML = response.max_temp
        min_temp_boston.innerHTML = response.min_temp
        sunrise_boston.innerHTML = response.sunrise
        sunset_boston.innerHTML = response.sunset
        temp_boston.innerHTML = response.temp
        wind_degrees_boston.innerHTML = response.wind_degrees
        wind_speed_boston.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}

// fuction for weather of Lucknow
function getWeatherLucknow () {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct_lucknow.innerHTML = response.cloud_pct
        feels_like_lucknow.innerHTML = response.feels_like
        humidity_lucknow.innerHTML = response.humidity
        max_temp_lucknow.innerHTML = response.max_temp
        min_temp_lucknow.innerHTML = response.min_temp
        sunrise_lucknow.innerHTML = response.sunrise
        sunset_lucknow.innerHTML = response.sunset
        temp_lucknow.innerHTML = response.temp
        wind_degrees_lucknow.innerHTML = response.wind_degrees
        wind_speed_lucknow.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}

// function to get weather of Kolkata
function getWeatherKolkata () {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct_kolkata.innerHTML = response.cloud_pct
        feels_like_kolkata.innerHTML = response.feels_like
        humidity_kolkata.innerHTML = response.humidity
        max_temp_kolkata.innerHTML = response.max_temp
        min_temp_kolkata.innerHTML = response.min_temp
        sunrise_kolkata.innerHTML = response.sunrise
        sunset_kolkata.innerHTML = response.sunset
        temp_kolkata.innerHTML = response.temp
        wind_degrees_kolkata.innerHTML = response.wind_degrees
        wind_speed_kolkata.innerHTML = response.wind_speed
    })
	.catch(err => console.error(err));
}
getWeatherShanghai()
getWeatherBoston()
getWeatherLucknow()
getWeatherKolkata()