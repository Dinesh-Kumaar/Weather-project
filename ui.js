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
        this.temp.innerHTML =  weather.temp_c +"<sup>o</sup> C";
        this.desc.textContent = weather.icon;
        this.humidity.innerHTML = weather.temp_f +" <span>%</span>";
        this.wind.innerHTML = weather.wind_mph +" <span>km/h</span>";
        this.icon.setAttribute('src', weather.icon_url);
    }
}
//  Get current date , month and time
(function currentDate(){
    let today = new Date();
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let m = today.getMonth();
    let d = today.getDate();
    let y = today.getFullYear();
    document.querySelector('#month').innerHTML = months[m];
    document.querySelector('#date').innerHTML = d;
    document.querySelector('#year').innerHTML = y;
})();
// Get current time 
(function currentTime(){
    let today = new Date();
    let mm = today.getMinutes();
    let hh = today.getHours();
    let ss = today.getSeconds();
    let tt = "AM";
    if(hh === 0){
        hh += 12;
    }
    if(ss < 10){
        ss = '0' + ss;
    }
    if(mm < 10){
        mm = '0' + mm;
    }
    if(hh < 10){
        hh = '0' + hh;
    }
    if(hh > 12){
        hh = hh - 12;
        tt = "PM";
    }
    document.querySelector('#c-time').innerHTML = `${hh} : ${mm} : ${ss}`;
    document.querySelector('#am').innerHTML = tt;
    setTimeout(currentTime, 1000);
})();
