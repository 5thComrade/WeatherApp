class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    weatherLocation(location) {
        this.location.textContent = location;
    }

    paint(weather) {
        this.desc.textContent = (weather.weather[0].description).toUpperCase();
        this.string.textContent = `${weather.temp} C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.humidity} grams per cubic meter`;
        this.dewpoint.textContent = `Dew Point: ${weather.dew_point} degree Celsius`;
        this.pressure.textContent = `Pressure: ${weather.pressure} pascal`;
        this.wind.textContent = `Wind Speed: ${weather.wind_speed} meters per second`;
    }
}