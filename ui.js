class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.desc = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
    }
    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.temp.textContent =  weather.temperature_string;
        this.desc.textContent = weather.weather;
        this.icon.setAttribute('src', weather.icon_url);
    }
}