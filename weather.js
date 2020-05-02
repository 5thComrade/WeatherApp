class Weather {
    constructor(lat, long) {
        this.apiKey = '3616fafca87c54712811cfbc300c7922';
        this.lat = lat;
        this.long = long;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&exclude=hourly,daily&appid=${this.apiKey}&units=metric`);
        const resData = await response.json();
        return (resData.current);
    }
}