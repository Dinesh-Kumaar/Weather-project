class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.desc = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
        this.wind = document.getElementById('wind');
        this.humidity = document.getElementById('humidity');
    }
    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.temp.innerHTML =  weather.temp_f +"<sup>o</sup> F";
        this.desc.textContent = weather.icon;
        this.humidity.innerHTML = weather.temp_f +" <span>%</span>";
        this.wind.innerHTML = weather.wind_mph +" <span>km/h</span>";
        this.icon.setAttribute('src', weather.icon_url);
    }
}