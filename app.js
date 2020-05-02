const storage = new Storage();

const weatherLocation = storage.getLocationData();

const geocode = new Geocode();
const ui = new UI();
ui.weatherLocation(weatherLocation.city);
geocode.changeLocation(weatherLocation.city);

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather())

document.getElementById('w-present-loc').addEventListener('click', () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            geocode.presentLocation(position.coords.latitude,position.coords.longitude)
              .then(data => {
                geocode.changeLocation(data);
                storage.setLocationData(data);
                ui.weatherLocation(data);
                getWeather();
              })
              .catch(err => console.log(err));
        });
    } else {
        console.log('Geolocation is not supported by this browser');
    }
})

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = (document.getElementById('city').value).toUpperCase();
    geocode.changeLocation(city);
    storage.setLocationData(city);
    ui.weatherLocation(city);
    getWeather();
})



function getWeather() {
    geocode.getLatLong()
     .then(data => {
        const weather = new Weather(data[1],data[0]);
        weather.getWeather()
         .then(data => {
             ui.paint(data);
         })
         .catch(err => console.log(err));
    })
     .catch(err => console.log(err));
}


