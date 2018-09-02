//init weather
const weather = new Weather('Miami','FL');
//init ui
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-close').addEventListener('click',()=>{
   const modal= document.querySelector('.input-modal');
   modal.style.transform = "translate(-104%,8%)";
   modal.style.transition = "all .3s";
})
document.getElementById('w-sub').addEventListener('click',(e)=>{
     const city = document.getElementById('w-city-input').value;
       const state = document.getElementById('w-state-input').value;
       console.log(city,state);
    weather.changeLocation(city,state);
    getWeather();
    //close modal
    const modal= document.querySelector('.input-modal');
    modal.style.transform = "translate(-104%,8%)";
    modal.style.transition = "all .3s";
})


function getWeather(){
weather.getWeather()
            .then(results =>{
                ui.paint(results);
            })
            .catch(err => console.log(err));
 }