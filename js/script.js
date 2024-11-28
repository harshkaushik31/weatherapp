const weatherApiHost = 'api.openweathermap.org/data/2.5';
const weatherApiKey = '73469646ca382230f7803948961ded39';

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://${weatherApiHost}/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct.innerHTML = response.clouds.all;
            // feels_like.innerHTML = response.main.feels_like;
            humidity.innerHTML = response.main.humidity;
            humidity2.innerHTML = `${response.main.humidity}<small class="text-muted fw-light"> %</small>`;
            max_temp.innerHTML = response.main.temp_max;
            min_temp.innerHTML = response.main.temp_min;
            sunrise.innerHTML = getTime(response.sys.sunrise);
            sunset.innerHTML = getTime(response.sys.sunset);
            temp.innerHTML = response.main.temp;
            temp2.innerHTML = response.main.temp;
            wind_degrees.innerHTML = response.wind.deg;
            wind_speed.innerHTML = response.wind.speed;
            wind_speed2.innerHTML = response.wind.speed;
        })
        .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");

// function of weather of Shanghai
function getWeatherShanghai() {
    fetch(`https://${weatherApiHost}/weather?q=Shanghai&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct_shanghai.innerHTML = response.clouds.all;
            feels_like_shanghai.innerHTML = response.main.feels_like;
            humidity_shanghai.innerHTML = response.main.humidity;
            max_temp_shanghai.innerHTML = response.main.temp_max;
            min_temp_shanghai.innerHTML = response.main.temp_min;
            sunrise_shanghai.innerHTML = getTime(response.sys.sunrise);
            sunset_shanghai.innerHTML = getTime(response.sys.sunset);
            temp_shanghai.innerHTML = response.main.temp;
            wind_degrees_shanghai.innerHTML = response.wind.deg;
            wind_speed_shanghai.innerHTML = response.wind.speed;
        })
        .catch(err => console.error(err));
}

// function for weather of Boston
function getWeatherBoston() {
    fetch(`https://${weatherApiHost}/weather?q=Boston&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct_boston.innerHTML = response.clouds.all;
            feels_like_boston.innerHTML = response.main.feels_like;
            humidity_boston.innerHTML = response.main.humidity;
            max_temp_boston.innerHTML = response.main.temp_max;
            min_temp_boston.innerHTML = response.main.temp_min;
            sunrise_boston.innerHTML = getTime(response.sys.sunrise);
            sunset_boston.innerHTML = getTime(response.sys.sunset);
            temp_boston.innerHTML = response.main.temp;
            wind_degrees_boston.innerHTML = response.wind.deg;
            wind_speed_boston.innerHTML = response.wind.speed;
        })
        .catch(err => console.error(err));
}

// function for weather of Lucknow
function getWeatherLucknow() {
    fetch(`https://${weatherApiHost}/weather?q=Lucknow&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct_lucknow.innerHTML = response.clouds.all;
            feels_like_lucknow.innerHTML = response.main.feels_like;
            humidity_lucknow.innerHTML = response.main.humidity;
            max_temp_lucknow.innerHTML = response.main.temp_max;
            min_temp_lucknow.innerHTML = response.main.temp_min;
            sunrise_lucknow.innerHTML = getTime(response.sys.sunrise);
            sunset_lucknow.innerHTML = getTime(response.sys.sunset);
            temp_lucknow.innerHTML = response.main.temp;
            wind_degrees_lucknow.innerHTML = response.wind.deg;
            wind_speed_lucknow.innerHTML = response.wind.speed;
        })
        .catch(err => console.error(err));
}

// function to get weather of Kolkata
function getWeatherKolkata() {
    fetch(`https://${weatherApiHost}/weather?q=Kolkata&appid=${weatherApiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            cloud_pct_kolkata.innerHTML = response.clouds.all;
            feels_like_kolkata.innerHTML = response.main.feels_like;
            humidity_kolkata.innerHTML = response.main.humidity;
            max_temp_kolkata.innerHTML = response.main.temp_max;
            min_temp_kolkata.innerHTML = response.main.temp_min;
            sunrise_kolkata.innerHTML = getTime(response.sys.sunrise);
            sunset_kolkata.innerHTML = getTime(response.sys.sunset);
            temp_kolkata.innerHTML = response.main.temp;
            wind_degrees_kolkata.innerHTML = response.wind.deg;
            wind_speed_kolkata.innerHTML = response.wind.speed;
        })
        .catch(err => console.error(err));
}

// calling all the functions initially
getWeatherShanghai();
getWeatherBoston();
getWeatherLucknow();
getWeatherKolkata();

// function to convert the API Time to a more readable format
function getTime(timestamp) {
    const time = new Date(timestamp * 1000).toLocaleTimeString();
    return time;
}