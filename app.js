//init weather
const weather = new Weather('Ooty','TN');
//init ui
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.getWeather()
            .then(results =>{
                ui.paint(results);
            })
            .catch(err => console.log(err));
 }

// Search input
let input = document.querySelector('#place-search');
let autocomplete = new google.maps.places.Autocomplete(input);

// Get search input and find weather for the searched places
  function placeSearch(){
  let place = document.querySelector('#place-search').value;
  const split = place.split(',');
   const newWeather =  new Weather(split[0],split[1]);
    newWeather.getWeather()
                    .then(results =>{
                     ui.paint(results);
                    })
                    .catch(err => console.log(err));

}

