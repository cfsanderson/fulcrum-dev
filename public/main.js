// if (process.env.NODE_ENV !== 'production') require('./index.html')
import './index.html'
import './screen.css'
import './data.json'

const main () {
  console.log('💩')
  document.getElementById('map')
}

// const GoogleMapsAPIKey = 'AIzaSyCGAdXYyWex50ZuhI7ohksTATeNPXWzpNc'
//
// function initMap () {
//   const hotel = {lat: -25.000, lng: 131.044}
//   const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: hotel
//     });
//   var marker = new google.maps.Marker({
//       position: hotel,
//       map: map
//     });
//   }

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
