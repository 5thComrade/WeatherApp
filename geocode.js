class Geocode {
    constructor() {
        this.apikey = 'pk.eyJ1IjoiNXRoYyIsImEiOiJjazY0bmMyZjkwMzVjM2twN3djZWdzbDFhIn0.HsTojIuyjySmspXwTAGN-w';
        this.city;
    }

    async getLatLong() {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.city}.json?access_token=${this.apikey}&limit=1`);
        const resdata = await response.json();
        return (resdata.features[0].geometry.coordinates);
    }

    async presentLocation(lat, long) {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${this.apikey}&limit=1`);
        const resdata = await response.json();
        return (resdata.features[0].place_name);
    }

    changeLocation(city) {
        this.city = city;
    }
}